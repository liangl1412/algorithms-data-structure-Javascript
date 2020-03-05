
// string contain ( {  -> stack | { |
//                              | ( |
//                              |___|
// current top element is {
// if next string is ), we check the top stack, which {) is not pair, return false
// if next sting is }, check top stack, which {} is pair, we pop out the top element
// stack -> | ( |
//          |___|
// return true until stack is empty;

const stack = [];
function check(s) {
    for(let i = 0; i < s.length; i++) {
        const startSymbol = ['(', '{', '['];
        const endSymbol  = [')', '}', ']'];
        const pairs = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
        if (startSymbol.indexOf(s[i]) > -1) {
            stack.push(s[i]);
        } else if (endSymbol.indexOf(s[i]) > -1) {
            if (!stack.length) {
                return false;
            }
            const firstSymbol = peek();
            if (pairs[firstSymbol] === s[i]) {
                stack.pop();
            } else {
                return false;
            }
        }

    }
    return !stack.length;
}

function peek() {
    return stack[stack.length - 1];
}

console.log(check('{([sdfasdf]asdfasfafs)}'))