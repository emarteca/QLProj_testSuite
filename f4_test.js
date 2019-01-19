// helper function used in the examples below so that we can use an await there
async function $_f4_p_$(){
    return Promise.resolve(7);
}

// Example 4: line 4 can be moved before line 3, because the MOD and REF sets for these statements don't overlap
// However, it cannot be moved before line 2 because line 2 writes q and line 4 reads q
async function $_f4_$(){                      // 1:
  var $_f4_q_$ = Promise.resolve (8);         // 2: MOD = { $_f4_q_$ }, REF = { }
  var $_f4_z_$ = await $_f4_p_$();            // 3: MOD = { $_f4_z_$ }, REF = { $_f4_p_$ }
  var $_f4_r_$ = Promise.resolve ($_f4_q_$);  // 4: MOD = { $_f4_r_$ }, REF = { $_f4_q_$ }
}
