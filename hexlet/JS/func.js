//Убирает дробную часть
const div = (x, y) => {
    let result = Math.floor(x / y);
    return result;
}
//console.log(div(10, 4));
answer = div(11, 4);
console.log(answer);

answer = div(4, 11);
console.log(answer);

answer = div(0, 0);
console.log(answer);

answer = div(75, 100);
console.log(answer);

answer = div(-7, 2);
console.log(answer);

console.log("----------");
//Округляет число, с точностью до N знака
const round = (number, count = 0) => {
    let result = number.toFixed(count);
    return result
}
console.log(round(10.5, 0));
console.log(round(10.4, 0));
console.log(round(10.41, 0));
console.log(round(10.51, 0));
console.log(round(10.124, 0));
console.log(round(10.125, 0));

const round2 = (number, count = 0) => {
    let result = Math.round(number);
    return result
}
console.log("----------");


console.log(round2(10.125, 0));
console.log(round2(10.525, 0));


console.log("----------");
// Удалить пробелы 
const noSpace = (line) => {
    return (line.trim());

}
let str1 = '   Go LIIIIIVe     '
str1 = noSpace(str1)
console.log(`>>${str1}<<`);

console.log("----------");

const sayHurrayThreeTimes = () => {
    console.log("hurray!") * 3
    return sayHurrayThreeTimes
}
console.log(sayHurrayThreeTimes);