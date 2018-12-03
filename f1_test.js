// helper function used in the examples below so that we can use an await there
async function p(){
    return Promise.resolve(7);
}

// Example 1: line 4 can be moved before line 3, because the MOD and REF sets for these statements don't overlap
async function f1(){            // 1:
  var x = 0;                    // 2: MOD = { x }, REF = { }
  var z = await p();            // 3: MOD = { z }, REF = { p }
  x = x + 1;                    // 4: MOD = { x }, REF = { x }
}
