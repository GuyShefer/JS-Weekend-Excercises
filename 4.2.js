(function () {


    let tribonacciSequence = (num,signature) => {
        let thirdprevious = signature[0];
        let secondprevious = signature[1];
        let previous = signature[2];
        let tribo;
        for (let i = 0; i < num; i++) {
            tribo = previous + secondprevious + thirdprevious;
            signature.push(tribo);
            thirdprevious = secondprevious;
            secondprevious = previous;
            previous = tribo;
        }
        console.log(...signature)
    }

    tribonacciSequence(7, [0,0,1]);
    tribonacciSequence(7, [1,1,1]);
    
})();