import Parser from "./Parser.js";

export default class {
	constructor() {
		this.p = new Parser();
	}

	setup() {
		this.setupButtonCalc();
		this.setupButtonCopy();
		this.setupButtonClear();
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
				self.copyToClipboard();
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

	calc() {
		let t = document.getElementById("book");
		let res = this.p.parse(t.value);
		t.value = res;
	}

	clear() {
		let t = document.getElementById("book");
		t.value = "";
	}

	copyToClipboard() {
		let e = document.getElementById("book");
		e.select();
		document.execCommand("copy");
	}
}
