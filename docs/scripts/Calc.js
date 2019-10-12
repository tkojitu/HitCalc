import Parser from "./Parser.js";

export default class {
	constructor() {
		this.p = new Parser();
	}

	setup() {
		this.setupButtonCalc();
		this.setupButtonClear();
	}
	
	setupButtonCalc() {
		var self = this;
		var b = document.getElementById("buttonCalc");
		b.addEventListener(
			"click",
			function() {
				self.calc();
			});
	}

	setupButtonClear() {
		var self = this;
		var b = document.getElementById("buttonClear");
		b.addEventListener(
			"click",
			function() {
				self.clear();
			});
	}

	calc() {
		var t = document.getElementById("book");
		var res = this.p.parse(t.value);
		t.value = res;
	}

	clear() {
		var t = document.getElementById("book");
		t.value = "";
	}
}

