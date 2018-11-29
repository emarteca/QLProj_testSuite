var globalX;

function f1( x) {
	f2( x);
	//console.log( "Side effects: f1");
}

function f2( y) {
	f3( y);
	//console.log( "Side effects: f2");
}

function f3( z) {
	//console.log( "Side effects: f3");
	return z*2;
}

function f4( x) {
	f3( x);
	//console.log( "Side effects: f4");
}

function main() {

	globalX = 2;
	var x = 3;

	f1( globalX);
	f4( x);
}

main();

// the call graph should be 
// main -> f1 -> f2 -> f3
//		-> f4 -> f3	

