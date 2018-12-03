// helper function used in the examples below so that we can use an await there
async function p(){
    return Promise.resolve(7);
}

// Example 2: line 4 can be moved before line 3, because the MOD and REF sets for these statements don't overlap
// Line 4 can also be moved before line 2, because the MOD and REF sets for these statements don't overlap
async function f2(){            // 1:
  var x = 0;                    // 2: MOD = { x }, REF = { }
  var z = await p();            // 3: MOD = { z }, REF = { p }
  var q = Promise.resolve(8);   // 4: MOD = { q }, REF = { }  // should "Promise" be in the ref set?
}
