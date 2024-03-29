export default class {
	constructor(nshot, nhit, comment) {
		this.s = nshot;
		this.h = nhit;
		this.c = comment;
	}

	getShot() {
		return this.s;
	}

	getHit() {
		return this.h;
	}

	getComment() {
		return this.c;
	}

	calcRate() {
		if (this.t == 0) {
			return 0;
		}
		return this.h / this.s * 100.0;
	}

	toString() {
		return "" + this.s + " " + this.h + " " + this.c + " " + this.calcRate().toFixed(2);
	}
}
