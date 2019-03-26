// modification of class variables, for a local variable of nominal type A

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

async function apt_test_fn() {

	var x = new A( 1);
	
	console.log( x);
	await x.modB( 2); // this shouldnt be able to swap with the prints, since global var x is modified in the function
	console.log( x);

	console.log( x);
	var y = await x.getB(); // here we can swap, since no global var is modified in the function
	console.log( x);
}