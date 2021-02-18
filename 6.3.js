(function () {

    let organizeStrings = (string1, string2) => {
        const letters = {};

        for (let i = 0; i < string1.length; i++) {
            string1[i] in letters ? letters[string1[i]]++ : letters[string1[i]] = 1;
        }
        if (string1 !== string2) {
            for (let j = 0; j < string2.length; j++) {
                string2[j] in letters ? letters[string2[j]]++ : letters[string2[j]] = 1;
            }
        }
        console.log(Object.keys(letters).sort().join(''));
    }

    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    organizeStrings(a, b);
    organizeStrings(a, a);


})();