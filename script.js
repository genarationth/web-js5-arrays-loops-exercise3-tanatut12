for (let i = 1; i<6;i++){
    console.log("* ".repeat(i));
}

let xValue = 5;
while (xValue > 0) {
    console.log(xValue);
    xValue -= 0.5;
}

let numbers = 1;
while (numbers < 100) {
    console.log(numbers)
    numbers += 2;
}

let i =1;
while (i <= 6) {
    console.log(`[${i}] `);
    i++;
}

const sum = (n) => {
    let sum = 0;
    let i = 1;
    i++;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
};

n = 18;

console.log(`n = ${n} sum = ${sum(n)}`);
