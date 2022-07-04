//Задание на синий пояс: Треугольник
// Сформировать следующую строку - треугольник:
// .....#.....
// ....###....
// ...#####...
// ..#######..
// .#########.
// ###########

let resultString = buildChristmasTree(prompt('Height of the tree? (positive or negative integer)'));

document.querySelector('.result').innerText = resultString;


function buildChristmasTree(rows) {
    rows = parseInt(rows);

    if (!Number.isInteger(rows) || rows === 0) {
        return 'Param must be positive or negative integer! Thank you for your cooperation!';
    }

    let resultString = '';
    let isNegative = Math.sign(rows) === -1;

    rows = Math.abs(rows);

    for (let row = 0, hashSigns = 0; row < rows; row++) {
        hashSigns = row === 0 ? hashSigns += 1 : hashSigns += 2;

        let rowHashSignsMax = rows * 2 - 1;
        let dotsOneSide = (rowHashSignsMax - hashSigns) / 2;
        let dotsOneSideString = '';
        let hashSignsString = '';
        let tempRowString = '';

        for (let dot = 0; dot < dotsOneSide; dot++) {
            dotsOneSideString += '.';
        }

        for (let hashSign = 0; hashSign < hashSigns; hashSign++) {
            hashSignsString += '#';
        }

        tempRowString = dotsOneSideString + hashSignsString + dotsOneSideString + "\n";

        if (isNegative) {
            resultString = tempRowString.concat(resultString);
        } else {
            resultString = resultString.concat(tempRowString);
        }
    }

    return resultString;
}