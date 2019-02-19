// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either
// display an underlying character or a blank placeholder (such as an underscore), depending on
// whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

/**
 * Letter() is a constructor and the base of the entire hangman game. A Letter() object is created for every letter in the
 * word to be guessed.
 *      check() - checks a letter object against a single letter. If they match, set the "guessed" property to true.
 *      display() - checks a letter object to see if "guessed" is true. If true, display the letter. If false, display a "_"
 * @param {string} char
 */
function Letter(char) {
    this.str = char;
    this.guessed = false;
    this.display = function() {
        if (this.guessed === false) {
            return "_";
        } else { 
            return this.str;
        }
    };
    this.check = function(guesschar) {
        let checker = false;
        if (guesschar === this.str) {
            this.guessed = true;
            checker = true;
        }
        return checker;
    };
}

module.exports = { Letterfunc: Letter};
