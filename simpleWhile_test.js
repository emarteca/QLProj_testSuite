// helper function used in the examples below so that we can use an await there
async function $_simpleWhile_p_$( $_simpleWhile_y_$){
    return Promise.resolve($_simpleWhile_y_$);
}

async function $_simpleWhile_$( $_simpleWhile_cond_$){                        // 1:
  var $_simpleWhile_x_$ = 0;						 // 2: MOD = { $_simpleWhile_x_$ }, REF = { }

  while ( $_simpleWhile_cond_$) { 					 // 3: MOD = { }, REF = { $_simpleWhile_cond_$ }
  	$_simpleWhile_x_$ = await $_simpleWhile_p_$( 6); // 4: MOD = { $_simpleWhile_x_$ }, REF = { $_simpleWhile_p_$, Promise, $_simpleWhile_y_$ } 
  } 
}
