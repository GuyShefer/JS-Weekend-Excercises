(function () {

    let shortestWords = (string) => {
        let word =  string.split(' ').reduce((minWord, currentWord) => {
            return currentWord.length < minWord.length ? currentWord : minWord;
        });
        return word.length;
    }

    console.log(shortestWords('Shefer Guy'));
    console.log(shortestWords("4ad6 364asd6 3 7dda93 5616"));


})();