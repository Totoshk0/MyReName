const decToBin = (n) => {
    let result = 0;
    let p = n
    while (p != 0) {
        let q = p % 2;
        p = Math.floor(p / 2);
        result = result * 10 + q;
    };

    let bin = 0;
    while (p != 0) {
        let q = result % 2;
        result = Math.floor(result / 2);
        bin = bin * 10 + q;
    };
    return result
};

const decToBin1 = (n, h) => {
    let result = "";
    let p = n
    while (p != 0) {
        let q = p % 2;
        p = Math.floor(p / 2);
        result = `${q}` + result;
    };

    let bin = "";
    while (p != 0) {
        let q = result % 2;
        result = Math.floor(result / 2);
        bin = bin * 10 + q;
    };
    return result
}
let input = 240;
let output = decToBin1(input);
console.log(output);

let count = 5
while (count <= 5) {
    console.log(count);
    count = count + 1
}