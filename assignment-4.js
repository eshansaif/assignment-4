/*
                <--- Problem-1: mindGame() --->
-->This function is about to be played with different numbers and operators.
*/

function mindGame(number) {
    if (number < 0 || typeof number !== 'number') {
        return 'Please, Enter a Positive Number !!'
    }
    const multiplyThree = number * 3;
    const addTen = multiplyThree + 10;
    const divTwo = addTen / 2;
    const subFive = divTwo - 5;

    return subFive;
}

// const output = mindGame(33);
// console.log(output);


/*
                <--- Problem-2: evenOdd() --->
-->This function is to check whether any string's length is odd or even.
*/

function evenOdd(string) {
    if (typeof string !== 'string') {
        return 'Please, Enter some characters or String !!'
    }
    const strLength = string.length;

    if (strLength % 2 === 0) {
        return 'even';
    }
    else if (strLength % 2 === 1) {
        return 'odd';
    }
}

// const output = evenOdd('Batch7');
// console.log(output);


/*
                <--- Problem-3: isLGSeven() --->
-->This function is to check what will happen if any input number is greater or less than 7.
*/


function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please, Enter a Number !!';
    }

    const subResult = number - 7;

    if (subResult < 7) {
        return subResult;
    } else if (subResult > 7) {
        return number * 2;
    }
}

// const output = isLGSeven(15);
// console.log(output);


/*
                <--- Problem-4: findingBadData() --->
-->This function is to check is there any negative value or bad data existed or not.
*/

function findingBadData(array) {

    if (Array.isArray(array) === false) {
        return 'Please, Enter an Array !!';
    }

    const badData = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            badData.push(element);
        }
    }
    return badData.length;
}
// const output = findingBadData([-4, -9, -5, -33, -55]);
// console.log(output);


/*
                <--- Problem-5: gemsToDiamond() --->
-->This function is to check ....
*/

function gemsToDiamond(gemsOfFist, gemsOfSecond, gemsOfThird) {
    if (typeof gemsOfFist !== 'number' || typeof gemsOfSecond !== 'number' || typeof gemsOfThird !== 'number') {
        return 'Please, You can just enter numbers as input !!';
    }

    const firstFriendGems = gemsOfFist * 21;
    const secondFriendGems = gemsOfSecond * 32;
    const thirdFriendGems = gemsOfThird * 43;

    const totalGems = firstFriendGems + secondFriendGems + thirdFriendGems;

    if (totalGems >= 1000 * 2) {
        return totalGems - 2000;
    } else if (totalGems < 1000 * 2) {
        return totalGems;
    }
}

// const output = gemsToDiamond(100, 5, 1);
// console.log(output);
