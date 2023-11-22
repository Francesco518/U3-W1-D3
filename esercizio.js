var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Taxes = /** @class */ (function () {
    function Taxes() {
    }
    return Taxes;
}());
var WorkingPerson = /** @class */ (function (_super) {
    __extends(WorkingPerson, _super);
    function WorkingPerson(grossSalary) {
        var _this = _super.call(this) || this;
        _this.grossSalary = grossSalary;
        return _this;
    }
    WorkingPerson.prototype.profitTaxes = function () {
        return this.grossSalary * 0.22;
    };
    WorkingPerson.prototype.getIrpefTaxes = function () {
        return this.profitTaxes() * 0.05;
    };
    WorkingPerson.prototype.getInpsTaxes = function () {
        return this.profitTaxes() - 0.25;
    };
    WorkingPerson.prototype.getTaxesPay = function () {
        return "Profit Taxes: ".concat(this.profitTaxes(), ", Irpef Taxes: ").concat(this.getIrpefTaxes(), ", Inps Taxes: ").concat(this.getInpsTaxes());
    };
    WorkingPerson.prototype.getNetSalary = function () {
        return this.profitTaxes() - this.getIrpefTaxes() - this.getInpsTaxes();
    };
    return WorkingPerson;
}(Taxes));
var Professionist = /** @class */ (function (_super) {
    __extends(Professionist, _super);
    function Professionist(grossSalary) {
        return _super.call(this, grossSalary) || this;
    }
    Professionist.prototype.getIrpefTaxes = function () {
        return this.profitTaxes() * 0.05;
    };
    Professionist.prototype.getInpsTaxes = function () {
        return this.profitTaxes() * 0.25;
    };
    return Professionist;
}(WorkingPerson));
var Artisan = /** @class */ (function (_super) {
    __extends(Artisan, _super);
    function Artisan(grossSalary) {
        return _super.call(this, grossSalary) || this;
    }
    Artisan.prototype.getIrpefTaxes = function () {
        return this.profitTaxes() * 0.15;
    };
    Artisan.prototype.getInpsTaxes = function () {
        return this.profitTaxes() * 0.15;
    };
    return Artisan;
}(WorkingPerson));
var Trader = /** @class */ (function (_super) {
    __extends(Trader, _super);
    function Trader(grossSalary) {
        return _super.call(this, grossSalary) || this;
    }
    Trader.prototype.getIrpefTaxes = function () {
        return this.profitTaxes() * 0.15;
    };
    Trader.prototype.getInpsTaxes = function () {
        return this.profitTaxes() * 0.35;
    };
    return Trader;
}(WorkingPerson));
var professionist1 = new Professionist(50000);
console.log("Professionist Taxes: ".concat(professionist1.getTaxesPay()));
console.log("Professionist Net Salary: ".concat(professionist1.getNetSalary()));
var artisan1 = new Artisan(50000);
console.log("Artisan Taxes: ".concat(artisan1.getTaxesPay()));
console.log("Artisan Net Salary: ".concat(artisan1.getNetSalary()));
var trader1 = new Trader(50000);
console.log("Trader Taxes: ".concat(trader1.getTaxesPay()));
console.log("Trader Net Salary: ".concat(trader1.getNetSalary()));
