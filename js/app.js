//Задание на синий пояс: Треугольник
// Сформировать следующую строку - треугольник:
// .....#.....
// ....###....
// ...#####...
// ..#######..
// .#########.
// ###########

let resultString = buildChristmasTree(prompt('Height of the tree? (positive or negative integer)')); // positive or negative integer

document.querySelector('.result').innerText = resultString;
console.log(resultString);

function buildChristmasTree(rows) {
    rows = parseInt(rows);

    if (!Number.isInteger(rows)) {
        return 'Param must be positive or negative integer! Thank you for your cooperation!';
    }

    let hashSigns = 0,
        rowHasHashSigns = {},
        resultString = "\n",
        isNegative = Math.sign(rows) === -1;

    rows = Math.abs(rows);

    for (let row = 1; row <= rows; row++) {
        if (row === 1) {
            hashSigns += 1;
        } else {
            hashSigns += 2;
        }

        rowHasHashSigns[row] = hashSigns;
    }

    let rowHasHashSignsKeys = Object.keys(rowHasHashSigns);
    let maxCols = rowHasHashSigns[Object.keys(rowHasHashSignsKeys).length];

    if (isNegative) {
        rowHasHashSignsKeys = rowHasHashSignsKeys.reverse();
    }

    rowHasHashSignsKeys.forEach(function(row){
        let dotsOneSide = (maxCols - rowHasHashSigns[row]) / 2;
        let dotsOneSideString = '';
        let hashSignsString = '';

        for (let dot = 0; dot < dotsOneSide; dot++) {
            dotsOneSideString += '.';
        }

        for (let hashSign = 0; hashSign < rowHasHashSigns[row]; hashSign++) {
            hashSignsString += '#';
        }

        resultString += dotsOneSideString + hashSignsString + dotsOneSideString + "\n";
    })

    return resultString;
}
