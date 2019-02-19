 var Lettermod = require("./Letter.js");

var Letter = Lettermod.Letterfn;

/**
 * Word() is a constructor that takes in an input word, creates an array of letters, then creates a Letter() object for
 * each letter in the array.
 *      arrRawDisp() - displays the solution. Used in the lose condition.
 *      displayWord() - displays guessed and not guessed letters
 *      guessWord() - passes a letter guess through the array of unguessed letters, updating any letters that match the guessed letter
 * @param {string} inputWord
 */
function Word(inputWord) {
    this.arrRaw = inputWord.split("");
    this.arr = [];
    for (var i = 0; i < this.arrRaw.length; i++) {
        var newLet = new Letter(this.arrRaw[i]);
        if (this.arrRaw[i] === " ") {
            newLet.guessed = true;
        }
        this.arr.push(newLet);
    }
    this.arrRawDisp = function() {
        var wordList = "";
        for (var i = 0; i < this.arrRaw.length; i++) {
            if (i > 0) {
                wordList += " ";
            }
            wordList += this.arrRaw[i];
        }
        return wordList;
    };
    this.displayWord = function() {
        var wordList = "";
        for (var i = 0; i < this.arr.length; i++) {
            if (i > 0) {
                wordList += " ";
            }
            wordList += this.arr[i].display();
        }
        return wordList;
    };
    this.guessWord = function(char) {
        var correctGuess = false;
        for (var i = 0; i < this.arr.length; i++) {
            var temp = this.arr[i].check(char);
            if (temp === true) {
                correctGuess = true;
            }
        }
        return correctGuess;
    };
}

module.exports = {
    Wordfn: Word};