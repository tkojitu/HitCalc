export default class {
    setup() {
        var self = this;
        var b = document.getElementById("buttonCalc");
        b.addEventListener(
            "click",
            function() {
                self.calc();
            });
    }

    calc() {
        var t = document.getElementById("book");
        var res = this.calcLines(t.value);
        t.value = res;
    }

    calcLines(text) {
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
        var rate = this.calcRate(total, hit);
        return this.rateToString(total, hit, comment, rate);
    }

    calcRate(total, hit) {
        if (total == 0) {
            return 0;
        }
        return hit / total * 100.0;
    }

    rateToString(total, hit, comment, rate) {
        return "" + total + " " + hit + " " + comment + " " + rate.toFixed(2);
    }
}
