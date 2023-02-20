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
        // return weEarn;
        console.log(weEarn);
    }

    else{
        weAlsoEarn = totalGems;
        // return  weAlsoEarn;
        console.log( weAlsoEarn);
    }
}
inputValue = gemsToDiamond(20, 200, 50);
console.log(inputValue);