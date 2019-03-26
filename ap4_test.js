// global var modification where the global var is an object

var x = {a: "a", b: "b"};

async function fnMods() {
	x.a = "hello";
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