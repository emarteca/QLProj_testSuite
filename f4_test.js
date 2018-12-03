// helper function used in the examples below so that we can use an await there
async function p(){
    return Promise.resolve(7);
}

// Example 4: line 4 can be moved before line 3, because the MOD and REF sets for these statements don't overlap
// However, it cannot be moved before line 2 because line 2 writes q and line 4 reads q
async function f4(){            // 1:
  var q = Promise.resolve (8);  // 2: MOD = { q }, REF = { }
  var z = await p();            // 3: MOD = { z }, REF = { p }
  var r = Promise.resolve (q);  // 4: MOD = { r }, REF = { q }
}
