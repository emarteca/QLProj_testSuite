// helper function used in the examples below so that we can use an await there
async function $_f6_p_$(){
    return Promise.resolve(7);
}

// Example 6: line 5 can be moved before line 4, but not before line 3.
async function $_f6_$(){                      // 1:
  var $_f6_q_$ = Promise.resolve (8);         // 2: MOD = { $_f6_q_$ }, REF = { Promise }
  var $_f6_y_$ = await $_f6_p_$();            // 3: MOD = { $_f6_y_$ }, REF = { $_f6_p_$, Promise }
  var $_f6_z_$ = await $_f6_p_$();            // 4: MOD = { $_f6_z_$ }, REF = { $_f6_p_$, Promise }
  var $_f6_r_$ = Promise.resolve ($_f6_y_$);  // 5: MOD = { $_f6_r_$ }, REF = { $_f6_y_$, Promise }
}
