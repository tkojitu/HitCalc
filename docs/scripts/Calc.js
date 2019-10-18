import Parser from "./Parser.js";

export default class {
	constructor() {
		this.p = new Parser();
	}

	setup() {
		this.setupButtonCalc();
		this.setupButtonCopy();
		this.setupButtonClear();
		this.setupButtonCount();
	}
	
	setupButtonCalc() {
		let self = this;
		let b = document.getElementById("buttonCalc");
		b.addEventListener(
			"click",
			function() {
				self.calc();
			});
	}

	setupButtonCopy() {
		let self = this;
		let b = document.getElementById("buttonCopy");
		b.addEventListener(
			"click",
			function() {
				self.copy();
			});
	}

	setupButtonClear() {
		let self = this;
		let b = document.getElementById("buttonClear");
		b.addEventListener(
			"click",
			function() {
				self.clear();
			});
	}

	setupButtonCount() {
		let self = this;
		let b = document.getElementById("buttonCount");
		b.addEventListener(
			"click",
			function() {
				self.count();
			});
	}

	calc() {
		let b = document.getElementById("book");
		let res = this.p.parse(b.value);
		b.value = res;
	}

	clear() {
		let b = document.getElementById("book");
		b.value = "";
		let p = document.getElementById("panelCount");
		p.innerHTML = "0";
	}

	copy() {
		let e = document.getElementById("book");
		e.select();
		document.execCommand("copy");
	}

	count() {
		let p = document.getElementById("panelCount");
		let b = document.getElementById("book");
		p.innerHTML = this.p.count(b.value);
	}
}
