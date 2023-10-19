cons = get = (number) => {
    summ = 0
    for (let i = 0; i <= number; i += 1) {
        summ += i ** 2;
    }
    return summ
}
console.log(get(10));
