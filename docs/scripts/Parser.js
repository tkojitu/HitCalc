import Record from "./Record.js";

export default class {
	parse(text) {
		var res = "";
		var lines = this.breakLines(text);
		var recs = this.parseLines(lines);
		return this.writeResult(recs);
	}

	breakLines(text) {
		return text.split(/\r\n|\r|\n/);
	}

	parseLines(lines) {
		var recs = [];
		for (var i = 0; i < lines.length; ++i) {
			var r = this.parseRecord(lines[i]);
			if (!r) {
				continue;
			}
			recs.push(r);
		}
		return recs;
	}

	parseRecord(line) {
		var ln = line.trim();
		var ary = ln.split(/\s+/, 3);
		if (ary.length < 2) {
			return null;
		}
		var total = parseInt(ary[0], 10);
		if (total == 0) {
			return null;
		}
		var hit = parseInt(ary[1]);
		var comment = (ary.length == 3) ? ary[2] : "";
		return new Record(total, hit, comment);
	}

	writeResult(recs) {
		var txt = this.writeRecords(recs);
		txt += this.writeTotal(recs);
		return txt;
	}

	writeRecords(recs) {
		var txt = "";
		for (var i = 0; i < recs.length; ++i) {
			txt += recs[i].toString() + "\n";
		}
		return txt;
	}

	writeTotal(recs) {
		return "---------\n" + this.sumShots(recs) + " " + this.sumHits(recs) + " " + this.totalRate(recs).toFixed(2) + "\n";
	}
	
	sumShots(recs) {
		var n = 0;
		for (var i = 0; i < recs.length; ++i) {
			n += recs[i].getShot();
		}
		return n;
	};

	sumHits(recs) {
		var n = 0;
		for (var i = 0; i < recs.length; ++i) {
			n += recs[i].getHit();
		}
		return n;
	}

	totalRate(recs) {
		return this.sumHits(recs) / this.sumShots(recs) * 100;
	}
}
