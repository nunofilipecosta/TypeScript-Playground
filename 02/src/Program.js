var Program = /** @class */ (function () {
    function Program() {
    }
    Program.prototype.main = function () {
        var num1 = 2;
        var num4 = num1 + 100;
        var string1 = num1 + 'some string';
        //var notHappy: number = num1 + 'some string';
        var name = 'Nuno';
        var init = function (startButton, pauseButton, clearButton) {
            document
                .getElementById(startButton)
                .addEventListener('click', null, false);
        };
        var person;
        person = 'Nuno';
        //person = { Name: 'Costa', Age: 31 };
    };
    return Program;
}());
