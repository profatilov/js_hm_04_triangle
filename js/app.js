// Задание
// inlineWay[3] = inlineWay[0] + inlineWay[1] + inlineWay[]
// Перепишите
// так, что бы можно было сконкатенировать массив с любым количеством элементов, используя цикл for.
/*let inlineWay = [
    'Перепишите ',
    'так, ',
    'что ',
    'бы ',
    'можно ',
    'было ',
    'сконкатенировать ',
    'массив ',
    'с ',
    'любым ',
    'количеством ',
    'элементов, ',
    'используя ',
    'цикл ',
    'for.'
];

console.log(concatArr(inlineWay));

function concatArr($arr) {
    let arrConcatString = '';

    for (let $i = 0, arrCnt = $arr.length; $i < arrCnt; $i++) {
        arrConcatString += $arr[$i];
    }

    return arrConcatString;
}*/


// while confirm
// Сделайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.
/*while (confirm('Say yes!') !== true) {
    console.log('You said yes');
}*/


// array fill
// Создайте пустой массив и добавляйте в него элементы, пока пользователь не нажмет Отмена в очередном prompt.
// Используйте push для удобства: push
/*let arrFill = [];
let newArrVal = null;
while (newArrVal = prompt('New arr value')) {
    //arrFill.push(newArrVal);
    arrFill[arrFill.length] = newArrVal;
    console.log(arrFill);
}*/


// infinite probability
// Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9.
// Код должен подсчитывать количество итераций и вывести это число с помощью alert.
/*let randNumber;
let cnt = 0;

while (randNumber = Math.random()) {
    cnt++;

    if (randNumber > 0.9) {
        console.log(cnt);

        break;
    }
}*/


//empty loop
// Сделайте цикл с prompt, который прерывается по нажатию OK и продолжается по нажатию "Отмена" c пустым телом цикла.
/*
while (prompt('Yes') === null) {}
*/


//progression sum
// Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for.
/*console.log(calcProgression(10, 3));

function calcProgression($to, $step) {
    let sum = 0;

    for (let i = 1; i <= $to; i += $step) {
        sum += i;
    }

    return sum;
}*/


//chess one line
// Сформировать строку " # # # # # " с помощью цикла for. Длина строки может быть четной и нечетной, и указывается в одном месте в коде.
/*let stringLength = -6;
let resultString = '_';

for (let i = 0, symbols = Math.abs(stringLength); i < symbols; i++) {
    resultString += '#_';
}

console.log(resultString);*/


//numbers
// Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n.
//0123456789
//0123456789
//0123456789
//0123456789
//0123456789
//0123456789
//0123456789
//0123456789
//0123456789
//0123456789
/*let size = 10;
let resultString = '';

for (let row = 0; row < size; col++) {
    let rowString = '';
    for (let row 0; row < size; row++) {
        rowString += '[' + row + ']';
    }
    resultString += rowString + "\n";
}

console.log(resultString);*/


//chess
// Сформируйте строку с шахматной доской из вложенных циклов. Для перевода строки используйте \n.
// Код должен поддерживать легкое изменение размеров доски.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
/*
let sizeChess = 6;
let resultString = '';

for (let row = 1; row <= sizeChess; row++) {
    let rowString = '';
    let isEven = row % 2 === 0;

    for (let col = 1; col <= sizeChess; col++) {
        if (isEven) {
            rowString += '#.';
        } else {
            rowString += '.#';
        }
    }
    resultString += rowString + "\n";
}

console.log(resultString);
alert(resultString);*/


//cubes
// Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:
// [0,1,8,27,64...]
/*let elementsNumber = 10,
    resultArr = [];
for (let i = 0; i < elementsNumber; i++) {
    resultArr[i] = Math.pow(i, 3);
}
console.log(resultArr);*/


//multiply table
// C помощью вложенного цикла сформируйте массив массивов "таблица умножения". Для инициализации вложенных массивов используйте
// arr[i] = [] //в i-тый элемент массива заносится новый пустой массив
// arr[5][6] должен быть равен, соответственно, 30, arr[7][2] == 14 и так далее.
/*let arrMultiply = [];
for (let i = 1; i <= 9; i++) {
    let rowArr = [];
    for (let y = 1; y <= 9; y++) {
        rowArr.push(y);
        arrMultiply[i] = rowArr;
        arrMultiply[i][y] = i * y;
    }
}
console.log(arrMultiply[3][7]);*/


//matrix to html table
// Сделайте вложенный цикл, который формирует HTML-таблицу в переменной строкового типа из любого двумерного массива.
// Т. е. если в нём использовать результат работы предыдущего задания, то получится таблица умножения в HTML (Таблица Пифагора)
/*
let multiplySize = 10;
let htmlMultiply = '<table>';
for (let i = 1; i <= multiplySize; i++) {
    htmlMultiply += '<tr>';
    for (let y = 1; y <= multiplySize; y++) {
        htmlMultiply += '<td style="border: 1px solid gray;">' + i * y + '</td>';
    }
    htmlMultiply += '</tr>';
}
htmlMultiply += '</table>';
document.querySelector('body').innerHTML = htmlMultiply;*/


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
