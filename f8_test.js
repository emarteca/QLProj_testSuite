// helper function used in the examples below so that we can use an await there
async function $_f8_p_$(){
    return Promise.resolve(7);
}

// Example 8: line 5 can be moved before lines 4 and 3.
async function $_f8_$(){                      // 1:
  var $_f8_q_$ = Promise.resolve (8);         // 2: MOD = { $_f8_q_$ }, REF = { }
  console.log($_f8_q_$);                      // 3: MOD = { }, REF = { $_f8_q_$ }  // should "console" also be in the REF set?
  var $_f8_z_$ = await $_f8_p_$();            // 4: MOD = { $_f8_z_$ }, REF = { $_f8_p_$ }
  var $_f8_r_$ = Promise.resolve (8);         // 5: MOD = { $_f8_r_$ }, REF = { }
}
