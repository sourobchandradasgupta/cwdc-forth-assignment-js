// Problem 1: Let’s play a mind game.
/*****
 I have create  a function which will add, subtract, multiply and divide to a number. If I get the output I have to remind a number, then multiply this number with 3 after that add 10 with this answer then devided by 2 lastly subtract by 5.
 *****/


 function mindGame(mindNumber) {
    if(typeof mindNumber !== "number"){
        return "Please, Input Number value";
    }
    multiplyBy3 = mindNumber * 3;
    addBy10 = multiplyBy3 + 10;
    devideBy2 = addBy10 / 2;
    subtractby5 = devideBy2 - 5;

    mindGameResult =  subtractby5;

    return mindGameResult;
}
const positiveNumber = mindGame(33);
return positiveNumber;
// console.log(positiveNumber);



// Problem 2: Finding even or odd
/*****
 I create  a function which is count all the character of a string and return output as even or odd. This kind of function is used for search even or odd.
 *****/

 
 function evenOdd(names){
    if(typeof names !== "string"){
        return "Please, Input string value";
    }

    myName = names.length;
    let formula = myName % 2;

    if(formula == 0){
    return "even";
    //  console.log("even");
    }
    else{
        return "odd";
    //  console.log("odd");
    }
  }
  let  names = evenOdd("chatgpt");
  return names;
//   console.log(names);



 // Problem 3: Is Less or Greater than seven.
/*****
 I create  a function which will find the difference between input and 7 and also find the difference is Less or Greater than seven. If the difference is less than 7 then return the subtraction. But if the difference value is greater than 7 then return the double of input value.
//  *****/

function isLGSeven(inputNumber) {
    if (typeof inputNumber !== "number") {
        return "Please, Input Number value";
    }

    let subtraction = inputNumber - 7;
    let doubleOfInput = inputNumber * 2;
    if (subtraction < 7) {
        return subtraction;
        //  console.log(subtraction);
    }

    else {
        return doubleOfInput;
        // console.log(doubleOfInput);
    }

}
const output = isLGSeven(20);
return output;
//  console.log(output);




 // Problem 4: Finding Bad data.
/*****
 I create  a function which will find a good data and bad data. This function take a array as input. Then count all negetive number(bad data) of this array. And return the negetive number of this array.
//  *****/



const noList = [2, -5, -7, 16, -8, -13, -58];

function findingBadData(noList){
    const badData = [];
    for (let i = 0; i < noList.length; i++) {
        const list = noList[i];
        if (list < 0) {
            badData.push(list);
        }
    }
    return badData;
}
const listNames = findingBadData(noList);
const numberOfBadData = listNames.length;
return numberOfBadData;
// console.log(numberOfBadData);




// Problem 5: Convert your gems into diamond.
/*****
 I create  a function which will convert gems into diamond. In this function I take gems from my friends and multiply their gems with 21, 32 and 43. After that I have to add all this multiplying value. If the multiplying value is greater the double of thousand then subtract 2000 from this multiplying value.
//  *****/


sayemsGemPower = 21;
shamimasGemPower = 32;
ajoysGemPower = 43;

function gemsToDiamond(sayem, shamima, ajoy) {
    if(typeof sayem !== 'number' || typeof shamima !== 'number' || typeof ajoy !== 'number'){
        return 'Please, Input Number value';
    }

    sayemsTotalGem = sayem * sayemsGemPower;
    shamimasTotalGem = shamima * shamimasGemPower;
    ajoysTotalGem = ajoy * ajoysGemPower;

    totalGems = sayemsTotalGem + shamimasTotalGem +  ajoysTotalGem;

    doubleOfThousand = 1000 * 2;

    if(totalGems >  doubleOfThousand){
        weEarn = totalGems - 2000;
        return weEarn;
        // console.log(weEarn);
    }

    else{
        weAlsoEarn = totalGems;
        return  weAlsoEarn;
        // console.log( weAlsoEarn);
    }
}
inputValue = gemsToDiamond(20, 200, 50);
return inputValue;
// console.log(inputValue);
