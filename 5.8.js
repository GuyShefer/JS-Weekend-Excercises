(function () {

    let shortestWords = (string) => {
        return string.split(' ').reduce((maxWord, currentWord) => {
            return currentWord.length > maxWord.length ? currentWord : maxWord;
        });
    }

    console.log(shortestWords('Shefer Guy'));
    console.log(shortestWords("4ad6 364asd6 3 7dda93 5616"));


})();