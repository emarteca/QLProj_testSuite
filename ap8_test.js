// await directly on a this access

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

class B {
	constructor( theA) {
		this.theA = theA;
	}

	modB( newB) {
		this.theA.b = newB;
	}

	getB() {
		return this.theA.getB();
	}

	async waitB( newB) {
		console.log( this.theA);
		await this.theA.modB( newB);
		console.log( this.theA);
	}
};

async function apt_test_fn() {

	var x = new B( new A(1));
	
	console.log( x);
	await x.waitB( 2); // this shouldnt be able to swap with the prints, since x is modified in the function
	console.log( x);
}