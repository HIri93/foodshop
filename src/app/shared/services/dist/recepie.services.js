"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecepieServices = void 0;
var core_1 = require("@angular/core");
var ingredient_model_1 = require("../Models/ingredient.model");
var recepie_model_1 = require("../Models/recepie.model");
var RecepieServices = /** @class */ (function () {
    function RecepieServices(shpinListServices) {
        this.shpinListServices = shpinListServices;
        this.selectedResepie = new core_1.EventEmitter();
        this.recepies = [
            new recepie_model_1.Recepie('ماکارونی', 'ماکارونی,یک توضیح تست برای پخت ماکارونی قرار میدهیم', 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg', [new ingredient_model_1.Ingredient('potato', 3)]),
            new recepie_model_1.Recepie('ماکارونی', 'ماکارونی,یک توضیح تست برای پخت ماکارونی قرار میدهیم', 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg', [new ingredient_model_1.Ingredient('tomato', 4)]),
            new recepie_model_1.Recepie('ماکارونی', 'ماکارونی,یک توضیح تست برای پخت ماکارونی قرار میدهیم', 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg', [new ingredient_model_1.Ingredient('onion', 2)])
        ];
    }
    // tslint:disable-next-line: typedef
    RecepieServices.prototype.getRecepie = function () {
        return this.recepies.slice();
    };
    RecepieServices.prototype.addRecepieToShopingList = function (ingeridient) {
        this.shpinListServices.addFromRecepieShopingList(ingeridient);
    };
    RecepieServices = __decorate([
        core_1.Injectable()
    ], RecepieServices);
    return RecepieServices;
}());
exports.RecepieServices = RecepieServices;
