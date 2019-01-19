// helper function used in the examples below so that we can use an await there
async function $_f9_p_$(){
    return Promise.resolve(7);
}

// Example 9:  cannot move line 4, because it reads z, which is defined on the previous line
async function $_f9_$(){                      // 1:
  var $_f9_x_$ = 0;                           // 2: MOD = { $_f9_x_$ }, REF = { }
  var $_f9_z_$ = await $_f9_p_$();            // 3: MOD = { $_f9_z_$ }, REF = { $_f9_p_$ }
  var $_f9_q_$ = Promise.resolve($_f9_z_$);   // 4: MOD = { $_f9_q_$ }, REF = { $_f9_z_$ }
}
