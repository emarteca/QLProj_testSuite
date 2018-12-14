// helper function used in the examples below so that we can use an await there
async function $_p_$(){
    return Promise.resolve(7);
}

// Example 10:  line 5 can be moved before lines 2, 3 and 4
async function $_f10_$(){                // 1:
  var $_x_$ = 0;                         // 2: MOD = { $_x_$ }, REF = { }
  var $_z_$ = await $_p_$();             // 3: MOD = { $_z_$ }, REF = { $_p_$ }
  if ($_x_$ === 1){                      // 4: MOD = { }, REF = { $_x_$ }
    var $_q_$ = Promise.resolve(8);      // 5: MOD = { $_q_$ }, REF = { }
  }
}
