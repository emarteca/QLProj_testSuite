// helper function used in the examples below so that we can use an await there
async function $_f10_p_$(){
    return Promise.resolve(7);
}

// Example 10:  line 5 can be moved before lines 2, 3 and 4
async function $_f10_$(){                        // 1:
  var $_f10_x_$ = 0;                             // 2: MOD = { $_f10_x_$ }, REF = { }
  var $_f10_z_$ = await $_f10_p_$();             // 3: MOD = { $_f10_z_$ }, REF = { $_f10_p_$, Promise }
  if ($_f10_x_$ === 1){                          // 4: MOD = { }, REF = { $_f10_x_$ }
    var $_f10_q_$ = Promise.resolve(8);          // 5: MOD = { $_f10_q_$ }, REF = { Promise }
  }
}
