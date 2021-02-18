(function () {

    const nb_year = (p0, percent, aug, p) => {
        let amountOfYears = 0;
        let calcPercent;
        percent !== null ? calcPercent = percent / 100 : calcPercent = 0;
        while (p0 < p) {
            p0 = p0 + (calcPercent * p0) + aug;
            amountOfYears++;
        }
        return amountOfYears;
    }

    console.log(nb_year(1500, 5, 100, 5000));
    console.log(nb_year(1500000, 2.5, 10000, 2000000));
    console.log(nb_year(1500000, null, 10000, 2000000));

})();