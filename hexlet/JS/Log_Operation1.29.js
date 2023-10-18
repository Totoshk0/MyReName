// BEGIN (write your solution here)
const getLetter = (str, num) => {
    if (num < 1 || num > str.length) {
        return '';
    }

    return str[num - 1];
}
// END

export default getLetter;