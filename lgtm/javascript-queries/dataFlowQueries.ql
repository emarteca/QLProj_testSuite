/**
  * @name statements which don't have dataflow to each other
  * @kind problem
  * @id javascript/initial-dataflow-tests
*/

import javascript


// make a new class, which is a subclass of Comment
// the condition of this class, called ModRefTagComment, would be that the string regex matches number: *MOD = {*}, REF = {*}*
// then, we could have member functions on this class which parse the string to get specific elements
// first element on the line should be a number, indicating the line number we're referring to
// then, when we compare to the actual output, this should be the same as the line number of the awaitexpr we're looking at
class ModRefTagComment extends Comment {
  ModRefTagComment() {
  	this.getText().regexpMatch(" [0-9]+: MOD = \\{.*\\}, REF = \\{.*\\}*")
  }
  
  string getModSet() {
    result = this.getText().splitAt("MOD = {", 1).splitAt("}, REF = ", 0)
  }
  
  string getRefSet() {
    result = this.getText().splitAt("REF = {", 1).splitAt("}", 0)
  }
  
  int getDataFlowLineNum() {
   	result = this.getText().trim().splitAt(":", 0).toInt()
  }
}

// so next up, we need to be able to compute the MOD/REF sets for each await expr
// but we actually probably want it per statement, or per expr?


// predicate to test whether a given statement s modifies a given variable v
predicate stmtModifies( Stmt s, Variable v) {
	exists ( VarDef d | 
   			d.getAVariable() = v and
    		d.getTarget().getEnclosingStmt() = s) 
	or
	exists ( DataFlow::InvokeNode invk | 
    		fnModifies( invk.getACallee(), v) and
    		invk.asExpr().getEnclosingStmt() = s)
}

// predicate to test whether a given function f modifies a given variable v
// this is mutually recursive with the stmtModifies predicate defined above,
// since we have to look at statements inside the function, and function calls in
// each statement
predicate fnModifies( Function f, Variable v) {
	exists ( Stmt s | 
    		s.getContainer() = f and 
    		stmtModifies( s, v)) 
	and 
  	not v.getScope().getOuterScope*() = f.getScope()
}

predicate fnAccesses( Function f, Variable v) {
	exists ( Stmt s | 
    		s.getContainer() = f and 
    		stmtAccesses( s, v)) 
	and 
  	not v.getScope().getOuterScope*() = f.getScope()
}

predicate stmtAccesses( Stmt s, Variable v) {
 	 exists ( VarAccess d | 
   			d.getAVariable() = v and
    		d.getEnclosingStmt() = s) 
	or
	exists ( DataFlow::InvokeNode invk | 
    		fnAccesses( invk.getACallee(), v) and
    		invk.asExpr().getEnclosingStmt() = s)
}

predicate stmtReferences( Stmt s, Variable v) {
	stmtModifies( s, v) or stmtAccesses( s, v) 
}

// checking if 2 Locatables are on the same line in the same file
// here, using this to check if a statement and comment are on the same line
// but, using Locatable so that it's generalizable
predicate sameFileSameLine( Locatable a, Locatable b) {
  a.getFile() = b.getFile() and
  a.getLocation().getStartLine() = b.getLocation().getStartLine() and
  a.getLocation().getEndLine() = b.getLocation().getEndLine()
}


predicate stmtDeclaredToModify(ModRefTagComment c, Variable v) {
	c.getModSet().indexOf( " " + v.getName() + ",") >= 0 // every variable in the set is prefixed by a space, including the first one
	or c.getModSet().indexOf( " " + v.getName() + " ") >= 0
}

predicate stmtDeclaredToAccess(ModRefTagComment c, Variable v) {
	c.getRefSet().indexOf( " " + v.getName() + ",") >= 0 // every variable in the set is prefixed by a space, including the first one
	or c.getRefSet().indexOf( " " + v.getName() + " ") >= 0
}

predicate stmtsBothModify( Stmt s1, Stmt s2, Variable v) {
 	 stmtModifies( s1, v) and stmtModifies( s2, v)
}

predicate stmtsRefAndMod( Stmt s1, Stmt s2, Variable v) {
 	 ( stmtModifies( s1, v) and stmtAccesses( s2, v))
     or
     ( stmtModifies( s2, v) and stmtAccesses( s1, v))
}

predicate stmtsCanSwap( Stmt s1, Stmt s2) {
  forall ( Variable v | stmtReferences( s1, v) | not ( stmtsRefAndMod( s1, s2, v) or stmtsBothModify( s1, s2, v)))
  and
  forall ( Variable v | stmtReferences( s2, v) | not ( stmtsRefAndMod( s1, s2, v) or stmtsBothModify( s1, s2, v)))
}

Location stmtEarliestLocation( Stmt s1) {
   result = min( Stmt s2 | 
               s1.getBasicBlock() = s2.getBasicBlock() and stmtsCanSwap( s1, s2) |  
                   s2.getLocation() order by s2.getLocation().getStartLine())
}


from ModRefTagComment c1, AwaitExpr ae1, Stmt s1
  where s1 = ae1.getEnclosingStmt()
    and sameFileSameLine( s1, c1)
select s1, c1, stmtEarliestLocation( s1)


/*from ModRefTagComment c1, ModRefTagComment c2, Stmt s1, Stmt s2
	where sameFileSameLine( s1, c1) and sameFileSameLine( s2, c2)
    and s1.getBasicBlock() = s2.getBasicBlock()
	and stmtsCanSwap( s1, s2)
select c1, c2, s1, s2
*/



