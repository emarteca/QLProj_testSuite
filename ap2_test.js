// updating local variables where the var is an object, includes an example where we have interprocedural modification 
// and the swap is not allowed to take place, and another example where it's fine

// this should not modify x permanently if it's a primitive, oh no
async function fnMods( x) {
	x.a = "hello";
	return x;
}

async function fnNotMod( x) {
	console.log("in fnNotMod");
	return x;
}

async function apt_test_fn() {
	var temp1 = {a: "a", b: "b"};

	console.log(temp1);
	var x1 = await fnMods( temp1); // this shouldnt be able to swap with the prints, since temp1 is modified in the function
	console.log(temp1);

	var temp2 = {a: "c", b: "d"};
	console.log(temp2);
	var x2 = await fnNotMod(temp2); // here we can swap, since the variable is not modified in the function
	console.log(temp2);
}