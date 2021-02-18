(function () {

    let maskify = (string) => {
        let maskStringArr = [];
        for (let i = 0; i < string.length - 4; i++) {
            maskStringArr.push('#');
        }
        return maskStringArr.join('') + string.slice(-4);
    }

    console.log(maskify('Guy Shefer'));
    console.log(maskify("4556364607935616"));

})();