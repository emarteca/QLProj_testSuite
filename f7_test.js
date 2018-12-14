// helper function used in the examples below so that we can use an await there
async function $_p_$(){
    return Promise.resolve(7);
}

// Example 7: line 4 cannot be moved earlier, because line 3 also modifies y. Line 5 can be moved before lines 3 and 4
async function $_f7_$(){                // 1:
  var $_q_$ = Promise.resolve (8);      // 2: MOD = { $_q_$ }, REF = { }
  var $_y_$ = await $_p_$();            // 3: MOD = { $_y_$ }, REF = { }
  $_y_$ = $_y_$ + 8;                    // 4: MOD = { $_y_$ }, REF = { $_y_$ }
  var $_r_$ = Promise.resolve (8);      // 5: MOD = { $_r_$ }, REF = { }
}
