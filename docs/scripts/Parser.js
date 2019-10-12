import Record from "./Record.js";

export default class {
	parse(text) {
		var res = "";
		var lines = this.breakLines(text);
		for (var i = 0; i < lines.length; ++i) {
			res += this.parseLine(lines[i]) + "\n";
		}
		return res;
	}

	breakLines(text) {
		return text.split(/\r\n|\r|\n/);
	}

	parseLine(line) {
		var ln = line.trim();
		var ary = ln.split(/\s+/, 3);
		if (ary.length < 2) {
			return line;
		}
		var total = parseInt(ary[0], 10);
		if (total == 0) {
			return line;
		}
		var hit = parseInt(ary[1]);
		var comment = (ary.length == 3) ? ary[2] : "";
		return new Record(total, hit, comment).toString();
	}
}
