(function () {

    let countingDuplicates = (string) => {
        const lowerCaseString = string.toLowerCase();
        let countLetters = {};

        for (let i = 0; i < lowerCaseString.length; i++) {
            string[i] in countLetters ? countLetters[lowerCaseString[i]]++ : countLetters[lowerCaseString[i]] = 1;
        }
        let = countLettersArr = Object.entries(countLetters).filter(arr => arr[1] > 1);
        if (countLettersArr.length > 0) {
            console.log(countLettersArr.length + ',');
            for (const [key, value] of countLettersArr) {
                console.log(`${key} occurs ${value} times!`)
            }
        } else {
            console.log(`0 , no characters repeats more than once`)
        }

    }


    countingDuplicates("abcde");
    console.log("-----");
    countingDuplicates("aabbcdeE");
    console.log("-----");
    countingDuplicates("Indivisibilities");


}) ();