function questionMarks(str) {
    return str + '???';
}
const areYouThere = questionMarks('hello');
areYouThere;

//////////////////////////////////////////

function spaceIt (str1, str2) {
    return str1 + ' ' + str2;
}

const spaceItResult = spaceIt('well', 'hello back')
spaceItResult;

//////////////////////////////////////////

function subtractThreeNumbers (num1, num2, num3) {
    return num1 - num2 - num3;
}

const subtractResult = subtractThreeNumbers(10, 1, 2);
subtractResult;

//////////////////////////////////////////

function tripleString (str1, str2, str3) {
    return str1 + str2 + str3;
}

const tripleResult = tripleString('codeimmersives', 'codeimmersives', 'codeimmersives');
tripleResult;

//////////////////////////////////////////

function squareRoot (num) {
    return Math.sqrt(num);
}

const root = squareRoot(16);
root;