/// <reference path="typings/knockout.d.ts" />
declare var ko: KnockoutStatic;
namespace ambiance {
  var name = ko.observable('John Papa');
  var id = ko.observable(1);
  var guy = {
    id: id,
    fullName: name
  };

  var value: string = guy.fullName();
  console.log(value);

  var point3: Object = { x: 1 };

  var rectangle = {
    h: 10,
    w: 20,
    calcArea: function() {
      return this.h * this.w;
    }
  };

  var squareIt = function(rec: { h: number; w?: number }) {
    if (rec.w === undefined) {
      return rec.h * rec.h;
    }

    return rec.h * rec.w;
  };

  var sq1 = squareIt({ h: 10 });
  var sq2 = squareIt({ h: 10, w: 20 });

  console.log(rectangle.calcArea());
}
