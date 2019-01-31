// helper function used in the examples below so that we can use an await there
async function $_df4_p_$(){
    return Promise.resolve(7);
}

// can't reorder lines 8 and 9, but 10 could be where 8 is
async function $_df4_$(){                        // 1:
  var $_df4_z_$ = await $_df4_p_$();             // 8: MOD = { $_df4_z_$ }, REF = { $_df4_p_$, Promise }
  if ( true) {									 // 9: MOD = { }, REF = { }
  	var $_df4_y_$ = await $_df4_p_$(); 		     // 10: MOD = { $_df4_y_$ }, REF = { $_df4_p_$, Promise }
  }
}
