// Задание на синий пояс: Треугольник
// Сформировать следующую строку - треугольник:
// .....#.....
// ....###....
// ...#####...
// ..#######..
// .#########.
// ###########

let resultString = makeTriangle(prompt('How many rows? (positive or negative integer)'));

document.querySelector('.result').innerText = resultString;


function makeTriangle(rows) {
    rows = parseInt(rows);

    if (!Number.isInteger(rows) || rows === 0) {
        return 'Param must be positive or negative integer! Thank you for your cooperation!';
    }

    let isNegative = Math.sign(rows) === -1;
    let resultStr = '';

    rows = Math.abs(rows);

    for (let row = 0, hashSignsCnt = 0; row < rows; row++) {
        hashSignsCnt = row === 0 ? hashSignsCnt += 1 : hashSignsCnt += 2;

        let dotsOneSideCnt = ((rows * 2 - 1) - hashSignsCnt) / 2;
        let dotsOneSideStr = '.'.repeat(dotsOneSideCnt);
        let hashSignsStr = '#'.repeat(hashSignsCnt);
        let tempRowStr = dotsOneSideStr + hashSignsStr + dotsOneSideStr + "\n";

        resultStr = isNegative ? tempRowStr.concat(resultStr) : resultStr.concat(tempRowStr);
    }

    return resultStr;
}