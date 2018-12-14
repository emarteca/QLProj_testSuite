// helper function used in the examples below so that we can use an await there
async function $_p_$(){
    return Promise.resolve(7);
}

// Example 8: line 5 can be moved before lines 4 and 3.
async function $_f8_$(){                // 1:
  var $_q_$ = Promise.resolve (8);      // 2: MOD = { $_q_$ }, REF = {}
  console.log($_q_$);                   // 3: MOD = { }, REF = { $_q_$ }  // should "console" also be in the REF set?
  var $_z_$ = await $_p_$();            // 4: MOD = { $_z_$ }, REF = { $_p_$ }
  var $_r_$ = Promise.resolve (8);      // 5: MOD = { $_r_$ }, REF = { }
}
