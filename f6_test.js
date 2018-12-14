// helper function used in the examples below so that we can use an await there
async function $_p_$(){
    return Promise.resolve(7);
}

// Example 6: line 5 can be moved before line 4, but not before line 3.
async function $_f6_$(){                // 1:
  var $_q_$ = Promise.resolve (8);      // 2: MOD = { $_q_$ }, REF = { }
  var $_y_$ = await $_p_$();            // 3: MOD = { $_y_$ }, REF = { $_p_$ }
  var $_z_$ = await $_p_$();            // 4: MOD = { $_z_$ }, REF = { $_p_$ }
  var $_r_$ = Promise.resolve ($_y_$);  // 5: MOD = { $_r_$ }, REF = { $_y_$ }
}
