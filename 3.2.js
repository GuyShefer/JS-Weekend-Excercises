(function () {

    const peopleOnTheBus = (matrix) => {
        let currentPeople = 0;
        for (let i of matrix) {
            for (let j = 0; j < i.length; j++) {
                j === 0 ? currentPeople += i[j] : currentPeople -= i[j];
            }
        }
        return currentPeople;
    }


    console.log(peopleOnTheBus([[2, 0], [4, 1], [3, 7]]));
    console.log(peopleOnTheBus([[9, 0], [3, 5], [1, 4]]));
    console.log(peopleOnTheBus([[2, 0], [4, 1], [3, 7],[4, 1],[12, 3],]));

})();