(function () {

    const centuryFromYear = year => {
        return (year % 10 > 0) ? Math.floor(year / 100) + 1 : year / 100;
    }

    console.log(centuryFromYear(1705));
    console.log(centuryFromYear(1900));
    console.log(centuryFromYear(105));
    console.log(centuryFromYear(100));

})();