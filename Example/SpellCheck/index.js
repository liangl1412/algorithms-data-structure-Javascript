var fs = require("fs");
const DICT_PATH = __dirname + '/dict/large';
const TEXT_PATH = __dirname + '/text/cat.txt';

class Dictionary {
    constructor(wordList){
        this.wordList = wordList;
    }

    checkWord = (word) => {
        return this.wordList.indexOf(word.toLowerCase());
        // return this.wordList.get(word.toLowerCase());
    }
}

class SpellChecker {
    _readFile = (callback) => {
        fs.readFile(DICT_PATH, 'utf8',(err, text) => {
            // Check for errors.
            if (!err) {
                // const obj = new Map(text.split('\n').map(i => [i, 1]));
                const obj = text.split('\n');
                const dictionary = new Dictionary(obj);
                callback(null, dictionary)
            } else {
                // Return an error.
                callback("The dictionary file could not be read: " + err, null);
            }
        });
    }
}

const sc = new SpellChecker();
const currentTime = Date.now();
sc._readFile((err, dictionary) => {
    if(!err) {
        const readDictTime = Date.now() - currentTime;
        console.log("Load dictionary time: ", readDictTime);
        fs.readFile(TEXT_PATH, 'utf8',(err, text) => {
            if (!err) {
                const loadTextTime = Date.now() - currentTime - readDictTime;
                console.log("Load Text time: ", loadTextTime);
                const lines = text.split('\n');
                let correct = 0;
                let wrong = 0;
                let wordCount = 0;
                lines.forEach(line => { 
                    const words = line.match(/\b(\w+)\b/g);
                    if (words !== null) {
                        words.forEach(word => {
                            if (dictionary.checkWord(word) !== -1) {
                            // if (dictionary.checkWord(word) === 1) {
                                correct++;
                            } else {
                                wrong++;
                            }
                            wordCount++;
                        })
                    }   
                });
                console.log("Checking time: ", Date.now() - currentTime - loadTextTime);
                console.log("Total Word:", wordCount);
                console.log("Correct: ", correct);
                console.log("Wrong: ", wrong);
            } else {
                // Return an error.
                callback("The dictionary file could not be read: " + err, null);
            }
        });
    }
});
