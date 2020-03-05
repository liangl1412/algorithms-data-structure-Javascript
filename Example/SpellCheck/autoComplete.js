var fs = require("fs");
const DICT_PATH = __dirname + '/dict/large';

function autoC(word) {
	fs.readFile(DICT_PATH, 'utf8',(err, text) => {
        // Check for errors.
        if (!err) {
            const dictionary = text.split('\n');
            const currentTime = Date.now();
            if (word.length > 2) {
                console.log(dictionary.filter(substring =>substring.startsWith(word)));
                console.log("Time spend: ", Date.now() - currentTime);
            } else {
                console.log(word);
                return word;
            }
        } else {
            // Return an error.
            callback("The dictionary file could not be read: " + err, null);
        }
    });
}

autoC('food');