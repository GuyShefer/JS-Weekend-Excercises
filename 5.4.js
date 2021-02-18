(function () {

    let toWeirdCase = (string) => {
        stringArr = string.split(' ');
        if (stringArr.length !== 1) {
            return stringArr.map(value => setWeirdCaseWord(value)).join(' ');
        }
        return setWeirdCaseWord(string);
    }

    let setWeirdCaseWord = (word) => {

        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                word = word.substring(0,i) + word[i].toUpperCase() + word.substring(i+1);
            } else {
                word = word.substring(0,i) + word[i].toLowerCase() + word.substring(i+1);
            }
        }
        return word;
    }

    console.log(toWeirdCase("String"));
    console.log(toWeirdCase("Weird string case"));

})();