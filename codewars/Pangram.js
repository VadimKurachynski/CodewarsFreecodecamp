
function isPangram(string) {
    string = string.toLowerCase();
    for (let i = 97; i <= 122; i++) {
        if (string.indexOf(String.fromCharCode(i)) == -1) {
            return false
        }
    }
    return true
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."))