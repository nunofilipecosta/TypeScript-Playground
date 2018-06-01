/// <reference path="typings/knockout.d.ts" />
var ambiance;
(function (ambiance) {
    var name = ko.observable('John Papa');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value = guy.fullName();
    console.log(value);
})(ambiance || (ambiance = {}));
