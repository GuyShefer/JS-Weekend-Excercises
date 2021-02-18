(function () {

    let array = [1, 4, 3, 8, 2, 3];
    let array2 = [1, 3, 1, 1, 3, 3];
    let array3 = [19, 5, 42, 2, 77];
    let array4 = [10, 343445353, 3453445, 3453545353453];
    let array5 = [1, 3, 1.5, 1, 3, 3];
    let array6 = [1, -3, 1, 1, 3, 3];

    const sumOfTheLowestNumbers = (arr) => {
        if (!isValidArr(arr)) {
            return "The arr is not valid!"
        }

        let sortedArr = arr.sort((a, b) => a - b);
        return sortedArr[0] + sortedArr[1];
    }

    const isValidArr = (arr) => {
        for (let i of arr) {
            if (i % 1 !== 0 || i < 0) {
                return false;
            }
        }
        return true;
    }

    console.log(sumOfTheLowestNumbers(array));
    console.log(sumOfTheLowestNumbers(array2));
    console.log(sumOfTheLowestNumbers(array3));
    console.log(sumOfTheLowestNumbers(array4));
    console.log(sumOfTheLowestNumbers(array5));
    console.log(sumOfTheLowestNumbers(array6));

})();