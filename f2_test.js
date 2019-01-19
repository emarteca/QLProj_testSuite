// helper function used in the examples below so that we can use an await there
async function $_f2_p_$(){
    return Promise.resolve(7);
}

// Example 2: line 4 can be moved before line 3, because the MOD and REF sets for these statements don't overlap
// Line 4 can also be moved before line 2, because the MOD and REF sets for these statements don't overlap
async function $_f2_$(){                      // 1:
  var $_f2_x_$ = 0;                           // 2: MOD = { $_f2_x_$ }, REF = { }
  var $_f2_z_$ = await $_f2_p_$();            // 3: MOD = { $_f2_z_$ }, REF = { $_f2_p_$ }
  var $_f2_q_$ = Promise.resolve(8);          // 4: MOD = { $_f2_q_$ }, REF = { }  // should "Promise" be in the ref set?
}
