let a = +prompt('Enter first value ');
let b = +prompt('Enter second value ');
let h = +prompt('Enter third value ');
let sumFactorials = 0;


    while(a <= b) {
        let factValue = 1,
        factorial = 1;
        while(factValue <= b) {
            factorial *= factValue;
            factValue++;
        }
        console.log(` ${a}: ${factorial} `);
        a += h;
        sumFactorials += factorial;
    }
console.log(sumFactorials);