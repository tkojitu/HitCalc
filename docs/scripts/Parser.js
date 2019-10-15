import Record from "./Record.js";

export default class {
	parse(text) {
		let res = "";
		let lines = this.breakLines(text);
		let recs = this.parseLines(lines);
		return this.writeResult(recs);
	}

	breakLines(text) {
		return text.split(/\r\n|\r|\n/);
	}

	parseLines(lines) {
		let recs = [];
		for (let ln of lines) {
			var r = this.parseRecord(ln);
			if (!r) {
				continue;
			}
			recs.push(r);
		}
		return recs;
	}

	parseRecord(line) {
		let ln = line.trim();
		let ary = ln.split(/\s+/, 3);
		if (ary.length < 2) {
			return null;
		}
		let total = parseInt(ary[0], 10);
		if (total == 0) {
			return null;
		}
		let hit = parseInt(ary[1]);
		let comment = (ary.length == 3) ? ary[2] : "";
		return new Record(total, hit, comment);
	}

	writeResult(recs) {
		let txt = this.writeRecords(recs);
		txt += this.writeTotal(recs);
		txt += this.writeGroups(recs);
		return txt;
	}

	writeRecords(recs) {
		let txt = "";
		for (let r of recs) {
			txt += r.toString() + "\n";
		}
		return txt;
	}

	writeTotal(recs) {
		return "---------\n" + this.sumShots(recs) + " " + this.sumHits(recs) + " " + this.totalRate(recs).toFixed(2) + "\n";
	}
	
	sumShots(recs) {
		let n = 0;
		for (let r of recs) {
			n += r.getShot();
		}
		return n;
	};

	sumHits(recs) {
		let n = 0;
		for (let r of recs) {
			n += r.getHit();
		}
		return n;
	}

	totalRate(recs) {
		return this.sumHits(recs) / this.sumShots(recs) * 100;
	}

	writeGroups(recs) {
		let txt = "";
		var gs = this.groupRecords(recs);
		for (let [c, rs] of gs) {
			txt += this.sumShots(rs) + " " + this.sumHits(rs) + " " + this.totalRate(rs).toFixed(2) + " " + c + "\n";
		}
		return txt;
	}

	groupRecords(recs) {
		let m = new Map();
		for (let r of recs) {
			if (m.has(r.getComment())) {
				let a = m.get(r.getComment());
				a.push(r);
			} else {
				let a = [r];
				m.set(r.getComment(), a);
			}
		}
		return m;
	}
}
