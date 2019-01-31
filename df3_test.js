// helper function used in the examples below so that we can use an await there
async function $_df3_p_$(){
    return Promise.resolve(7);
}

// can't reorder lines 9 and 10; 9 and 10 could both be where 8 is, but we haven't built this test in yet
async function $_df3_$(){                        // 1:
  var $_df3_z_$ = await $_df3_p_$();             // 8: MOD = { $_df3_z_$ }, REF = { $_df3_p_$, Promise }
  var $_df3_x_$ = 5;							 // 8: MOD = { $_df3_x_$ }
  var $_df3_y_$ = Promise.resolve( $_df3_x_$);   // 10: MOD = { $_df3_y_$ }, REF = { $_df3_x_$, Promise }
}
