class Vacation {
    constructor(destination, length) {
        this.destination = destination
        this.length = length
    }
    print() {
        console.log(`${this.destination} will take ${this.length} days.`)
    }
}

class company extends Vacation {
    constructor(companyName, empSize, destination, length) {
        super(destination, length);

        this.companyName = companyName;
        this.empSize = empSize;
    }

    printData() {
        super.print();
    }
}

let location1 = new company('SS', 200, 'pune', 20)

console.log(location1.printData());