// helper function used in the examples below so that we can use an await there
async function p(){
    return Promise.resolve(7);
}

// Example 7: line 4 cannot be moved earlier, because line 3 also modifies y. Line 5 can be moved before lines 3 and 4
async function f7(){            // 1:
  var q = Promise.resolve (8);  // 2: MOD = { q }, REF = { }
  var y = await p();            // 3: MOD = { y }, REF = { }
  y = y + 8;                    // 4: MOD = { y }, REF = { y }
  var r = Promise.resolve (8);  // 5: MOD = { r }, REF = { }
}
