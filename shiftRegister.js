inlets = 1;
outlets = 1;

var register = null;

function makeRegister(n) {
	register = new Array();
	for (var i = 0; i < n; i++) {
		register[i] = 0;
	}
}

function shift(n) {
	for (var i = register.length-1; i >= 1; i--) {
		register[i] = register[i-1];
	}
	register[0] = n;
	out();
}

function out() {
	outlet(0, register);
}