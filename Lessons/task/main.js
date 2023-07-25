// const stringChecker = function (s, p1, p2) {
//
//     let indexS = 0;
//     let indexP1 = 0;
//     let indexP2 = 0;
//
//
//     while (indexS < s.length) {
//         if (indexP1 < p1.length && s[indexS] === p1[indexP1]) {
//             indexP1++;
//         }
//
//         else if (indexP2 < p2.length && s[indexS] === p2[indexP2]) {
//             indexP2++;
//         }
//         else {
//             return false;
//         }
//         indexS++;
//     }
//     if (indexP1 !== p1.length || indexP2 !== p2.length) {
//         return false;
//     }
//     return true;
// }
//
// const result = stringChecker('w27y7', '27', 'w7y')
// console.log(result);


// const stringChecker = function (s, p1, p2) {
//     let indexS = 0;
//     let indexP1 = 0;
//     let indexP2 = 0;
//
//     while (indexS < s.length) {
//         if (indexP2 < p2.length && s[indexS] === p2[indexP2]) {
//             indexP2++;
//         } else if (indexP1 < p1.length && s[indexS] === p1[indexP1]) {
//             indexP1++;
//         } else if (s[indexS] === ' ') {
//
//         } else {
//             return false;
//         }
//         indexS++;
//     }
//
//     if (indexP1 !== p1.length && indexP2 !== p2.length) {
//         return false;
//     }
//
//     return true;
// }
//
// const result = stringChecker('Do you have a cup of tea? Yes, I do!', 'yo ha a cof tea Yes I', 'Douveup ?, do!');
// console.log(result);


// const s = 'Do you have a cup of tea? Yes, I do!';
// const p1 = ' yo ha a cof tea Yes I';
// const p2 = 'Douveup ?, do!';
//
// const sum = p1 + p2;
// console.log(sum.length);


// const stringChecker = function (s, p1, p2, indexS = 0, indexP1 = 0, indexP2 = 0) {
//     if (indexS === s.length) {
//         return indexP1 === p1.length && indexP2 === p2.length;
//     }
//
//     if (
//         (indexP1 < p1.length && s[indexS] === p1[indexP1] && stringChecker(s, p1, p2, indexS + 1, indexP1 + 1, indexP2)) ||
//         (indexP2 < p2.length && s[indexS] === p2[indexP2] && stringChecker(s, p1, p2, indexS + 1, indexP1, indexP2 + 1))
//     ) {
//         return true;
//     }
//
//     return false;
// };
//
//
// const result = stringChecker('radency', 'rdnc', 'aey');
// console.log(result);



