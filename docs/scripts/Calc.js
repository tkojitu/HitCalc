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
		let b = this.getBook();
		b.value = this.p.parse(b.value);
	}

	getBook() {
		return document.getElementById("book");
	}

	clear() {
		let b = this.getBook();
		b.value = "";
		let t = this.getTag();
		t.innerHTML = "0";
	}

	getTag() {
		return document.getElementById("tag");
	}

	copy() {
		let b = this.getBook();
		b.select();
		document.execCommand("copy");
	}

	count() {
		let t = this.getTag();
		let b = this.getBook();
		t.innerHTML = this.p.count(b.value);
	}
}
