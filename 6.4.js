(function () {

    let isIsogram = (string) => {
        string = string.toLowerCase();
        const letters = {};
        
        for (let i = 0; i < string.length; i++) {
            string[i] in letters ? letters[string[i]]++ : letters[string[i]] = 1;
        }

        const letterArr = Object.values(letters);
        for (let i of letterArr) {
            if (i > 1) {
                return false;
            }
        }
        return true;
    }

    console.log(isIsogram("Dermatoglyphics"));// == true
    console.log(isIsogram("aba"));// == f
    console.log(isIsogram("moOse"));// == f

})();