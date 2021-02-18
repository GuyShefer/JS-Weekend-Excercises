(function () {

    let array1 = [1, 0, 1, 1];
    let array2 = [0, 0, 1, 0];
    let array3 = [0, 1, 0, 1];
    let array4 = [1, 1, 1, 1];
    let array5 = [1, 0, 0, 0, 0];

    const calcBinaryToNumber = (binaryArr) => {
        let index = 0;
        let num = 0;
        for (let j = binaryArr.length - 1; j >= 0; j--) {
            if (binaryArr[j] === 1) {
                num += Math.pow(2, index);
            }
            index++
        }
        return num;
    }

    console.log(calcBinaryToNumber(array1));
    console.log(calcBinaryToNumber(array2));
    console.log(calcBinaryToNumber(array3));
    console.log(calcBinaryToNumber(array4));
    console.log(calcBinaryToNumber(array5));


})();