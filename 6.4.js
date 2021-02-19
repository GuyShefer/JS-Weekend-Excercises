(function () {

    let isIsogram = (string) => {
        string = string.toLowerCase();
        const letters = {};

        for (let i = 0; i < string.length; i++) {
            string[i] in letters ? letters[string[i]]++ : letters[string[i]] = 1;
        }
        return Object.values(letters).some(x => x > 1) ? false : true;
    }

    console.log(isIsogram("Dermatoglyphics"));
    console.log(isIsogram(""));
    console.log(isIsogram("aba"));
    console.log(isIsogram("moOse"));

})();