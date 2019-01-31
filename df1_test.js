// helper function used in the examples below so that we can use an await there
async function $_df1_p_$(){
    return Promise.resolve(7);
}

// there is no dependency between the statements on lines 8 and 9, so it should be possible to reorder them
async function $_df1_$(){                        // 1:
  var $_df1_z_$ = await $_df1_p_$();             // 8: MOD = { $_df1_z_$ }, REF = { $_df1_p_$, Promise }
  var $_df1_y_$ = await $_df1_p_$();             // 8: MOD = { $_df1_y_$ }, REF = { $_df1_p_$, Promise }
}
