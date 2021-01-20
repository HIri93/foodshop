"use strict";

exports.__esModule = true;
exports.RecepieServices = void 0;

var core_1 = require("@angular/core");

var recepie_model_1 = require("../Models/recepie.model");

var RecepieServices =
/** @class */
function () {
  function RecepieServices() {
    this.selectedResepie = new core_1.EventEmitter();
    this.recepies = [new recepie_model_1.Recepie('ماکارونی', 'ماکارونی,یک توضیح تست برای پخت ماکارونی قرار میدهیم', 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg'), new recepie_model_1.Recepie('ماکارونی', 'ماکارونی,یک توضیح تست برای پخت ماکارونی قرار میدهیم', 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg'), new recepie_model_1.Recepie('ماکارونی', 'ماکارونی,یک توضیح تست برای پخت ماکارونی قرار میدهیم', 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg')];
  } // tslint:disable-next-line: typedef


  RecepieServices.prototype.getRecepie = function () {
    return this.recepies.slice();
  };

  return RecepieServices;
}();

exports.RecepieServices = RecepieServices;