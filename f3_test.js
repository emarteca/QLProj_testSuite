// helper function used in the examples below so that we can use an await there
async function $_f3_p_$(){
    return Promise.resolve(7);
}

// Example 3: line 4 can be moved before line 3, because the MOD and REF sets for these statements don't overlap
// In principle, it can also be moved before line 2.
async function $_f3_$(){                      // 1:
  var $_f3_q_$ = Promise.resolve (8);         // 2: MOD = { $_f3_q_$ }, REF = { }
  var $_f3_z_$ = await $_f3_p_$();            // 3: MOD = { $_f3_z_$ }, REF = { $_f3_p_$ }
  var $_f3_r_$ = Promise.resolve (8);         // 4: MOD = { $_f3_r_$ }, REF = { }
}

