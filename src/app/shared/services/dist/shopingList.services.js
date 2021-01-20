"use strict";
exports.__esModule = true;
exports.ShpinListServices = void 0;
var core_1 = require("@angular/core");
var ingredient_model_1 = require("../Models/ingredient.model");
var ShpinListServices = /** @class */ (function () {
    function ShpinListServices() {
        this.ingeridientEvent = new core_1.EventEmitter();
        this.ingredients = [
            new ingredient_model_1.Ingredient('ماکارونی', 1.5),
            new ingredient_model_1.Ingredient('پیاز', 2),
        ];
    }
    // tslint:disable-next-line: typedef
    ShpinListServices.prototype.getIngredient = function () {
        return this.ingredients.slice();
    };
    ShpinListServices.prototype.addIngredient = function (name, amount) {
        this.ingredients.push(new ingredient_model_1.Ingredient(name, amount));
        this.ingeridientEvent.emit(this.ingredients);
    };
    ShpinListServices.prototype.addFromRecepieShopingList = function (ingredients) {
        var _a;
        // for (const ingeridient of ingeridients){
        //   this.ingredients.push(ingeridient);
        // }
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingeridientEvent.emit(this.ingredients.slice());
    };
    return ShpinListServices;
}());
exports.ShpinListServices = ShpinListServices;
