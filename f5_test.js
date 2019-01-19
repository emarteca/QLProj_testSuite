// helper function used in the examples below so that we can use an await there
async function $_f5_p_$(){
    return Promise.resolve(7);
}

// Example 5: line 5 can be moved before lines 4 and 3.
async function $_f5_$(){                      // 1:
  var $_f5_q_$ = Promise.resolve (8);         // 2: MOD = { $_f5_q_$ }, REF = { }
  var $_f5_y_$ = await $_f5_p_$();            // 3: MOD = { $_f5_y_$ }, REF = { $_f5_p_$ }
  var $_f5_z_$ = await $_f5_p_$();            // 4: MOD = { $_f5_z_$ }, REF = { $_f5_p_$ }
  var $_f5_r_$ = Promise.resolve (8);         // 5: MOD = { $_f5_r_$ }, REF = { }
}
