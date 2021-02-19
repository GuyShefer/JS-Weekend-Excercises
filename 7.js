(function () {

    Array.prototype.myFilter = function (expression) {
        let filteredArr = [];

        for (let i = 0; i < this.length; i++) {
            console.log(this[i])
            if (expression(this[i])) {
                filteredArr.push(this[i]);
            }
        }
        return filteredArr;
    }

    const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    console.log(arr.myFilter(x => x.length > 5));

    console.log('-----------');

    Array.prototype.myForEach = function (expression) {
        for (let i = 0; i < this.length; i++) {
            expression(this[i]);
        }
    }

    arr.myForEach(x => console.log(x));

    console.log('-----------');

    Array.prototype.myMap = function (expression) {
        let mappedArr = [];

        for (let i = 0; i < this.length; i++) {
            mappedArr.push(expression(this[i]));
        }
        return mappedArr;
    }

    const array1 = [1, 4, 9, 16];
    console.log(array1.myMap(x => x * 2));









})();