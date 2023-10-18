const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

const capitalize2 = (text) => {
    const letterUp = (text).slice(0, 1).toUpperCase()
    const TextNoLetter = (text).slice(1, 999)
    return letterUp + TextNoLetter
}

const isLeapYear = (text) => {
    return text % 400 === 0 || text % 4 && text % 100 !== 0
}
console.log(isLeapYear);
text = (typeof 2016);
console.log(text);