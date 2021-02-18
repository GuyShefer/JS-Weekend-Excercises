(function () {

    const nextPerfectSquare = squrae => {
        let num = Math.sqrt(squrae);
        return num % 1 !== 0 ? -1 : Math.pow(num+1, 2);
    }

    console.log(nextPerfectSquare(144));
    console.log(nextPerfectSquare(114));
    console.log(nextPerfectSquare(625));

})();