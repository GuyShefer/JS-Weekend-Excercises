(function () {

    let AbbreviateTwoWords = (name) => {
        let nameArr = name.split(' ');
        return nameArr[0][0] +"."+nameArr[1][0];
    }

    console.log(AbbreviateTwoWords('Guy Shefer'));
    console.log(AbbreviateTwoWords('Sam Harris'));
    console.log(AbbreviateTwoWords('Patrick Feeney'));

})();