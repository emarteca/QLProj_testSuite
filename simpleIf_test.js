// helper function used in the examples below so that we can use an await there
async function $_simpleIf_p_$( $_simpleIf_y_$){
    return Promise.resolve($_simpleIf_y_$);
}

async function $_simpleIf_$( $_simpleIf_cond_$){                        // 1:
  var $_simpleIf_x_$ = 0;						// 2: MOD = { $_simpleIf_x_$ }, REF = { }

  if ( $_simpleIf_cond_$) { 					// 3: MOD = { }, REF = { $_simpleIf_cond_$ }
  	$_simpleIf_x_$ = await $_simpleIf_p_$( 5);	// 4: MOD = { $_simpleIf_x_$ }, REF = { $_simpleIf_p_$, Promise, $_simpleIf_y_$ } 
  } else {										// 5: MOD = { }, REF = { }
  	$_simpleIf_x_$ = await $_simpleIf_p_$( 6);	// 6: MOD = { $_simpleIf_x_$ }, REF = { $_simpleIf_p_$, Promise, $_simpleIf_y_$ } 
  }
}
