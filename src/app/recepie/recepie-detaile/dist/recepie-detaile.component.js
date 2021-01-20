"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecepieDetaileComponent = void 0;
var core_1 = require("@angular/core");
var RecepieDetaileComponent = /** @class */ (function () {
    function RecepieDetaileComponent(recepieServices) {
        this.recepieServices = recepieServices;
    }
    RecepieDetaileComponent.prototype.ngOnInit = function () {
    };
    RecepieDetaileComponent.prototype.addToShopingList = function () {
        this.recepieServices.addRecepieToShopingList(this.recepieCrt.ingeridient);
    };
    __decorate([
        core_1.Input()
    ], RecepieDetaileComponent.prototype, "recepieCrt");
    RecepieDetaileComponent = __decorate([
        core_1.Component({
            selector: 'app-recepie-detaile',
            templateUrl: './recepie-detaile.component.html',
            styleUrls: ['./recepie-detaile.component.css']
        })
    ], RecepieDetaileComponent);
    return RecepieDetaileComponent;
}());
exports.RecepieDetaileComponent = RecepieDetaileComponent;
