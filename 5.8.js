(function () {

    let longestestWords = (string) => {
        return string.split(' ').reduce((maxWord, currentWord) => {
            return currentWord.length > maxWord.length ? currentWord : maxWord;
        });
    }

    console.log(longestestWords('Shefer Guy'));
    console.log(longestestWords("4ad6 364asd6 3 7dda93 5616"));


})();