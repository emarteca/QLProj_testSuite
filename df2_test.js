// helper function used in the examples below so that we can use an await there
async function $_df2_p_$(){
    return Promise.resolve(7);
}

// can't reorder lines 8 and 9, but 10 could be where 8 is
async function $_df2_$(){                        // 1:
  var $_df2_z_$ = await $_df2_p_$();             // 8: MOD = { $_df2_z_$ }, REF = { $_df2_p_$, Promise }
  console.log( $_df2_z_$);					     // 9: MOD = { }, REF = { console, $_df2_z_$ }
  var $_df2_y_$ = await $_df2_p_$();             // 8: MOD = { $_df2_y_$ }, REF = { $_df2_p_$, Promise }
}
