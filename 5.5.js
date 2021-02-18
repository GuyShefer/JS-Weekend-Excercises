(function () {

    let toWeirdCase = (string) => {
        stringArr = string.split(' ');
        if (stringArr.length !== 1) {
            return stringArr.map(value => setWeirdCase(value)).join(' ');
        }
        return setWeirdCase(string);
    }

    let setWeirdCase = (string) => {

        for (let i = 0; i < string.length; i++) {
            if(i % 2 === 0){
                string = string.substring(0,i) + string[i].toUpperCase() + string.substring(i+1);
            } else {
                string = string.substring(0,i) + string[i].toLowerCase() + string.substring(i+1);
            }
        }
        return string;
    }

    console.log(toWeirdCase("String"));
    console.log(toWeirdCase("Weird string case"));

})();