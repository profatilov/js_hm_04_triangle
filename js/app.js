// Задание на синий пояс: Треугольник
// Сформировать следующую строку - треугольник:
// .....#.....
// ....###....
// ...#####...
// ..#######..
// .#########.
// ###########

let resultString = buildChristmasTree(prompt('How many rows? (positive or negative integer)'));

document.querySelector('.result').innerText = resultString;


function buildChristmasTree(rows) {
    rows = parseInt(rows);

    if (!Number.isInteger(rows) || rows === 0) {
        return 'Param must be positive or negative integer! Thank you for your cooperation!';
    }

    let isNegative = Math.sign(rows) === -1;
    let resultString = '';

    rows = Math.abs(rows);

    for (let row = 0, hashSignsCnt = 0; row < rows; row++) {
        hashSignsCnt = row === 0 ? hashSignsCnt += 1 : hashSignsCnt += 2;

        let dotsOneSideCnt = (( rows * 2 - 1) - hashSignsCnt) / 2;
        let dotsOneSideString = '';
        let hashSignsString = '';

        for (let dot = 0; dot < dotsOneSideCnt; dot++) {
            dotsOneSideString += '.';
        }

        for (let hashSign = 0; hashSign < hashSignsCnt; hashSign++) {
            hashSignsString += '#';
        }

        let tempRowString = dotsOneSideString + hashSignsString + dotsOneSideString + "\n";

        if (isNegative) {
            resultString = tempRowString.concat(resultString);
        } else {
            resultString = resultString.concat(tempRowString);
        }
    }

    return resultString;
}