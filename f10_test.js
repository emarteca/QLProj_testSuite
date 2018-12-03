// helper function used in the examples below so that we can use an await there
async function p(){
    return Promise.resolve(7);
}

// Example 10:  line 5 can be moved before lines 2, 3 and 4
async function f10(){            // 1:
  var x = 0;                     // 2: MOD = { x }, REF = { }
  var z = await p();             // 3: MOD = { z }, REF = { p }
  if (x === 1){                  // 4: MOD = { }, REF = { x }
    var q = Promise.resolve(8);  // 5: MOD = { q }, REF = { }
  }
}
