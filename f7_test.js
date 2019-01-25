// helper function used in the examples below so that we can use an await there
async function $_f7_p_$(){
    return Promise.resolve(7);
}

// Example 7: line 4 cannot be moved earlier, because line 3 also modifies y. Line 5 can be moved before lines 3 and 4
async function $_f7_$(){                      // 1:
  var $_f7_q_$ = Promise.resolve (8);         // 2: MOD = { $_f7_q_$ }, REF = { Promise }
  var $_f7_y_$ = await $_f7_p_$();            // 3: MOD = { $_f7_y_$ }, REF = { Promise, $_f7_p_$ }
  $_f7_y_$ = $_f7_y_$ + 8;                    // 4: MOD = { $_f7_y_$ }, REF = { $_f7_y_$ }
  var $_f7_r_$ = Promise.resolve (8);         // 5: MOD = { $_f7_r_$ }, REF = { Promise }
}
