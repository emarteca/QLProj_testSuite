// helper function used in the examples below so that we can use an await there
async function p(){
    return Promise.resolve(7);
}

// Example 3: line 4 can be moved before line 3, because the MOD and REF sets for these statements don't overlap
// In principle, it can also be moved before line 2.
async function f3(){            // 1:
  var q = Promise.resolve (8);  // 2: MOD = { q }, REF = { }
  var z = await p();            // 3: MOD = { z }, REF = { p }
  var r = Promise.resolve (8);  // 4: MOD = { r }, REF = { }
}

