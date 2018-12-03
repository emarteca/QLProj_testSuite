// helper function used in the examples below so that we can use an await there
async function p(){
    return Promise.resolve(7);
}

// Example 9:  cannot move line 4, because it reads z, which is defined on the previous line
async function f9(){            // 1:
  var x = 0;                    // 2: MOD = { x }, REF = { }
  var z = await p();            // 3: MOD = { z }, REF = { p }
  var q = Promise.resolve(z);   // 4: MOD = { q }, REF = { z }
}
