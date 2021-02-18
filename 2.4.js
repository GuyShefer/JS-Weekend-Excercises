(function () {

    const findUnique = arr => {
        let sortedArr = arr.sort((a, b) => a - b);
        return sortedArr[0] === sortedArr[1] ? sortedArr.pop() : sortedArr[0];
    }

    console.log(findUnique([1, 1, 1, 2, 1, 1]));
    console.log(findUnique([1, 1, 1, 0.55, 1, 1]));


})();