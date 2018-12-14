// helper function used in the examples below so that we can use an await there
async function $_p_$(){
    return Promise.resolve(7);
}

// Example 3: line 4 can be moved before line 3, because the MOD and REF sets for these statements don't overlap
// In principle, it can also be moved before line 2.
async function $_f3_$(){                // 1:
  var $_q_$ = Promise.resolve (8);      // 2: MOD = { $_q_$ }, REF = { }
  var $_z_$ = await $_p_$();            // 3: MOD = { $_z_$ }, REF = { $_p_$ }
  var $_r_$ = Promise.resolve (8);      // 4: MOD = { $_r_$ }, REF = { }
}

