import javascript


// proposed synax for MOD and REF sets
// we'll need to have them for each await expr? 

// thought process: should there be a section at the end of the file with the supposed output?
// what order do we find the awaits in?

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
  
  int getListedNum() {
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


// this pair of statements checks recursively through the call graph 
// but, the call graph in javascript can be hard to compute statically and so 
// there can be some vars missed in more complex examples (testing required)


from ModRefTagComment c, Stmt s, Variable v
where sameFileSameLine( s, c) 
	  and not stmtDeclaredToAccess( c, v)
	  and stmtAccesses( s, v)
	 /* and ( not forall ( Variable v | stmtModifies( s, v) | stmtDeclaredToModify( c, v) ) 
	  		or 
            not forall ( Variable v | stmtDeclaredToModify( c, v) | stmtModifies( s, v)))*/
select c, s, c.getRefSet(), v



