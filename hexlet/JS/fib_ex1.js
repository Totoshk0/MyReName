const f = (n) => {
    if (n <= 1) return n;

    let a0 = 0;
    let a1 = 1;

    for (let i = 2; i <= n; i++) {
        let a2 = a1 + a0
        a0 = a1;
        a1 = a2
    }
    return a1;
}
console.log(f(0) === 0);
console.log(f(1) === 1);
console.log(f(2) === 1);
console.log(f(3) === 2);
