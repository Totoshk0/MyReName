// const anotherRegister = (str) => {
//     let i = 0;
//     let bukva = '';
//     let result = '';

//     while (i <= str.lenght) {
//         bukva = str[i];
//         if (bukva === bukva.toUpperCase()) {
//             result += `${bukva.toLowerCase()}`;
//         } else if (bukva === bukva.toLowerCase()) {
//             result += `${bukva.toUpperCase()}`;
//         } else {
//             result += `${bukva}`;
//         }
//         i += 1;
//     }
//     return result;
// };

// console.log(anotherRegister("GhbdTN"));



const notherRegister = (str) => {
    let count = str.lenght;
    let result = "";
    for (let i = 0; i < count; i++) {
        if (str[i] === str[i].toLowerCase()) {
            result = result + str[i].toUpperCase()
        } else {
            result = result + str[i].toLowerCase()
        }
    }
    return result
}
export default notherRegister