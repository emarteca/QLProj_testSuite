// helper function used in the examples below so that we can use an await there
async function p(){
    return Promise.resolve(7);
}

// Example 8: line 5 can be moved before lines 4 and 3.
async function f8(){            // 1:
  var q = Promise.resolve (8);  // 2: MOD = { q }, REF = {}
  console.log(q);               // 3: MOD = { }, REF = { q }  // should "console" also be in the REF set?
  var z = await p();            // 4: MOD = { z }, REF = { p }
  var r = Promise.resolve (8);  // 5: MOD = { r }, REF = { }
}
