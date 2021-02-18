(function () {

    let accum = (string) => {
        let lowerCaseString = string.toLowerCase();
        let accumArr = [];
        for (let i = 1; i <= lowerCaseString.length; i++) {
            let str = "";
            for (let j = 0; j < i; j++) {
                if (j === 0) {
                    str = str + lowerCaseString[i - 1].toUpperCase();
                } else {
                    str = str + lowerCaseString[i - 1];
                }
            }
            accumArr.push(str);
            str = "";
        }
        return accumArr.join("-");
    }

    console.log(accum("abcd"));
    console.log(accum("RqaEzty"));
    console.log(accum("cwAt"));


})();