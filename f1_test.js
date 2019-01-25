// helper function used in the examples below so that we can use an await there
async function $_f1_p_$(){
    return Promise.resolve(7);
}

// Example 1: line 4 can be moved before line 3, because the MOD and REF sets for these statements don't overlap
async function $_f1_$(){                      // 1:
  var $_f1_x_$ = 0;                           // 2: MOD = { $_f1_x_$ }, REF = { }
  var $_f1_z_$ = await $_f1_p_$();            // 3: MOD = { $_f1_z_$ }, REF = { $_f1_p_$, Promise }
  $_f1_x_$ = $_f1_x_$ + 1;                    // 4: MOD = { $_f1_x_$ }, REF = { $_f1_x_$ }
}
