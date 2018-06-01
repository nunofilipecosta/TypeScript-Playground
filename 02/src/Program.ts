class Program {
  main() {
    var num1: number = 2;

    var num4 = num1 + 100;

    var string1 = num1 + 'some string';

    //var notHappy: number = num1 + 'some string';

    var name: string = 'Nuno';

    var init: (s: string, p: string, c: string) => void = function(
      startButton,
      pauseButton,
      clearButton
    ) {
      document
        .getElementById(startButton)
        .addEventListener('click', null, false);
    };

    var person: string;
    person = 'Nuno';

    //person = { Name: 'Costa', Age: 31 };
  }
}
