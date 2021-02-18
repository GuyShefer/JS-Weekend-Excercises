(function () {


    let toCamelCase = (string) => {
        let stringArr = string.split('-');
        for (let i = 0; i < stringArr.length; i++) {
            if (i != 0) {
                charsArr = stringArr[i].split('');
                charsArr[0] = charsArr[0].toUpperCase();
                stringArr[i] = charsArr.join('');
            }
        }
        return stringArr.join('');
    }

    console.log(toCamelCase("the-stealth-warrior"));
    console.log(toCamelCase("The-Stealth-Warrior"));

})();