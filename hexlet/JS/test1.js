const PointInElips = (x, y, x1, y1, x2, y2, a, b, r) => {
    return ((x >= x1 && x <= x2) ** 2 / a ** 2 && (y >= y1 && y <= y2) ** 2 / b ** 2) <= r ** 2
}
console.log(PointInElips(10, 10, 0, 0, 50, 50, 2, 2, 10));