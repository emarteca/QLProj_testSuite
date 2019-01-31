// helper function used in the examples below so that we can use an await there
async function $_simpleFor_p_$( $_simpleFor_y_$){
    return Promise.resolve($_simpleFor_y_$);
}

async function $_simpleFor_$(){                        // 1:
  var $_simpleFor_x_$ = 0;						 // 2: MOD = { $_simpleFor_x_$ }, REF = { }

  for ( var $_simpleFor_i_$ = 0; $_simpleFor_i_$ < 5; ++ $_simpleFor_i_$) { // 3: MOD = { $_simpleFor_i_$ }, REF = { $_simpleFor_i_$ }
  	$_simpleFor_x_$ = await $_simpleFor_p_$( 6); // 4: MOD = { $_simpleFor_x_$ }, REF = { $_simpleFor_p_$, Promise, $_simpleFor_y_$ } 
  } 
}
