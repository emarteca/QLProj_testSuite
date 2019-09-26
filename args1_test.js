// modification of variables passed into a function
// first attempt at interprocedural mod set checking

class A {
	constructor( b) {
		this.b = b;
	}

	modB( newB) {
		this.b = newB;
	}

	getB() {
		return this.b;
	}

};

var x = new A( 1);

async function apt_test_fn() {
	
	console.log( x);
	await modVar( x); // this shouldnt be able to swap with the prints, since global var x is modified in the function
	console.log( x.b);

	console.log( x);
	var y = await x.getB(); // here we can swap, since no global var is modified in the function
	console.log( x);
}

function modVar( y) {
	y.b = 10;
}