(function () {

    const basicOp = (operation, value1, value2) => {
        switch(operation){
            case '+':
                return value1 + value2;
            case '-':
                return value1 - value2;
            case '/':
                return value1 / value2;
            case '*':
                return value1 * value2;
        }
    }

    console.log(basicOp('+', 2,4));
    console.log(basicOp('-', 2,4));
    console.log(basicOp('/', 2,4));
    console.log(basicOp('*', 2,4));

})();