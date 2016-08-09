"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var layout_1 = require('../layout');
var TenantLayoutCpt = (function () {
    function TenantLayoutCpt() {
    }
    TenantLayoutCpt = __decorate([
        core_1.Component({
            selector: 'layout',
            templateUrl: 'views/tenant/layout.html',
            directives: [layout_1.Header]
        }), 
        __metadata('design:paramtypes', [])
    ], TenantLayoutCpt);
    return TenantLayoutCpt;
}());
exports.TenantLayoutCpt = TenantLayoutCpt;
//# sourceMappingURL=layout.js.map