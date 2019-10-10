import Calc from "./Calc.js";
import Container from "./Container.js";

window.addEventListener(
    "load",
    function() {
        var c = new Container();
        c.define(
            "calc",
            function() {
                return new Calc();
            });
        c.geti("calc").setup();
    });
