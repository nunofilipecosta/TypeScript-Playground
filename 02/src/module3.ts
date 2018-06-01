namespace program3 {
  var squareItSimple = function(h, w) {
    return h * w;
  };

  var squareItSimplest = (h: number, w: number) => h * w;

  var helloWorld: (name?: string) => void;
  helloWorld = (name?: string) => {
    console.log('Hello World');
  };

  // helloWorld('');
  // const x = helloWorld();
  // x.xpto();
}
