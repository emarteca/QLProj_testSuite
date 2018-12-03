// helper function used in the examples below so that we can use an await there
async function p(){
    return Promise.resolve(7);
}

// Example 6: line 5 can be moved before line 4, but not before line 3.
async function f6(){            // 1:
  var q = Promise.resolve (8);  // 2: MOD = { q }, REF = { }
  var y = await p();            // 3: MOD = { y }, REF = { p }
  var z = await p();            // 4: MOD = { z }, REF = { p }
  var r = Promise.resolve (y);  // 5: MOD = { r }, REF = { y }
}
