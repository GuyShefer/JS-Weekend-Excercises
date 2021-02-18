(function () {

    let fibonacciSequence = num => {
        let secondprevious = 1;
        let previous = 0;
        let fibo;
        for (let i = 0; i < num; i++) {
            fibo = previous + secondprevious;
            console.log(fibo);
            secondprevious = previous;
            previous = fibo;
        }
    }

    fibonacciSequence(10, 0);
})();