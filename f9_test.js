// helper function used in the examples below so that we can use an await there
async function $_p_$(){
    return Promise.resolve(7);
}

// Example 9:  cannot move line 4, because it reads z, which is defined on the previous line
async function $_f9_$(){                // 1:
  var $_x_$ = 0;                        // 2: MOD = { $_x_$ }, REF = { }
  var $_z_$ = await $_p_$();            // 3: MOD = { $_z_$ }, REF = { $_p_$ }
  var $_q_$ = Promise.resolve($_z_$);   // 4: MOD = { $_q_$ }, REF = { $_z_$ }
}
