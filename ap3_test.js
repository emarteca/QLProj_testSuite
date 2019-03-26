// same as ap1 and ap2 tests, but for global variable modification
// this should not modify x permanently if it's a primitive, oh no

var x = "x";

async function fnMods() {
	x = "hello";
}

async function fnNotMod() {
	console.log("in fnNotMod");
	console.log(x);
}

async function apt_test_fn() {
	
	console.log( x);
	await fnMods(); // this shouldnt be able to swap with the prints, since global var x is modified in the function
	console.log( x);

	console.log( x);
	await fnNotMod(); // here we can swap, since no global var is modified in the function
	console.log( x);
}