function caesarCipher(str, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    shift = shift % 26;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isUpperCase = char === char.toUpperCase();
        const currentChar = char.toUpperCase();
        if (alphabet.includes(currentChar)) {
            const currentIndex = alphabet.indexOf(currentChar);
            let newIndex = (currentIndex + shift) % 26;
            if (newIndex < 0) newIndex = 26 + newIndex;
            result += isUpperCase ? alphabet[newIndex] : alphabet[newIndex].toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
}

function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encryptedText = caesarCipher(inputText, shift);
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decryptedText = caesarCipher(inputText, -shift);
    document.getElementById('outputText').value = decryptedText;
}
