abstract class Taxes {
    grossSalary!: number;

    abstract profitTaxes(): number;
    abstract getIrpefTaxes(): number;
    abstract getInpsTaxes(): number;
    abstract getTaxesPay(): string
}

class WorkingPerson extends Taxes {
    constructor(grossSalary: number) {
    super();
    this.grossSalary = grossSalary;
    }
    profitTaxes(): number {
        return this.grossSalary * 0.22;
    }
    getIrpefTaxes(): number {
        return this.profitTaxes() * 0.05;
    }
    getInpsTaxes(): number {
        return this.profitTaxes() - 0.25
    }
    getTaxesPay(): string {
        return `Profit Taxes: ${this.profitTaxes()}, Irpef Taxes: ${this.getIrpefTaxes()}, Inps Taxes: ${this.getInpsTaxes()}`
    }
    getNetSalary():number {
        return this.profitTaxes() - this.getIrpefTaxes() - this.getInpsTaxes();
    }
}

class Professionist extends WorkingPerson {
    constructor(grossSalary: number) {
        super(grossSalary);
    }
    getIrpefTaxes(): number {
        return this.profitTaxes() * 0.05;
    }
    getInpsTaxes(): number {
        return this.profitTaxes() * 0.25;
    }
}

class Artisan extends WorkingPerson {
    constructor(grossSalary: number) {
        super(grossSalary);
    }
    getIrpefTaxes(): number {
        return this.profitTaxes() * 0.15;
    }
    getInpsTaxes(): number {
        return this.profitTaxes() * 0.15;
    }
}
 

class Trader extends WorkingPerson {
    constructor(grossSalary: number) {
        super(grossSalary)
    }
getIrpefTaxes(): number {
    return this.profitTaxes() * 0.15;
}
getInpsTaxes(): number {
    return this.profitTaxes() * 0.35;
}
}

const professionist1 = new Professionist(50000);
console.log(`Professionist Taxes: ${professionist1.getTaxesPay()}`)
console.log(`Professionist Net Salary: ${professionist1.getNetSalary()}`);

const artisan1 = new Artisan(50000);
console.log(`Artisan Taxes: ${artisan1.getTaxesPay()}`)
console.log(`Artisan Net Salary: ${artisan1.getNetSalary()}`);

const trader1 = new Trader (50000);
console.log(`Trader Taxes: ${trader1.getTaxesPay()}`)
console.log(`Trader Net Salary: ${trader1.getNetSalary()}`)