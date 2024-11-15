// Function to encrypt the plaintext using the modified Auto Key Cipher
function autoKeyEncrypt(plaintext, key) {
    let ciphertext = '';
    let extendedKey = key;

    for (let i = 0; i < plaintext.length; i++) {
        // Extend key with plaintext characters as needed
        if (i >= key.length) {
            extendedKey += plaintext[i - key.length];
        }

        // Get ASCII values of plaintext and keytext
        const p = plaintext.charCodeAt(i);
        const k = extendedKey.charCodeAt(i);

        // Apply the modified encryption formula
        const c = ((p + k) % 126) + 33;

        // Convert to character and append to ciphertext
        ciphertext += String.fromCharCode(c);
    }

    return ciphertext;
}

// Function to decrypt the ciphertext using the modified Auto Key Cipher
function autoKeyDecrypt(ciphertext, key) {
    let plaintext = '';
    let extendedKey = key;

    for (let i = 0; i < ciphertext.length; i++) {
        // Get ASCII values of ciphertext and keytext
        const c = ciphertext.charCodeAt(i);
        const k = extendedKey.charCodeAt(i);

        // Apply the modified decryption formula
        const p = ((c - 33 - k + 126) % 126);

        // Convert to character and append to plaintext
        plaintext += String.fromCharCode(p);

        // Extend key with decrypted character as needed
        extendedKey += String.fromCharCode(p);
    }

    return plaintext;
}

// Example usage:
const key = 'KEY'; // Initial keyword for encryption
const plaintext = 'HELLO shuvra!';
console.log('Plaintext:', plaintext);


// Encrypting the plaintext
const encryptedText = autoKeyEncrypt(plaintext, key);
console.log('Encrypted:', encryptedText);

// Decrypting the ciphertext
const decryptedText = autoKeyDecrypt(encryptedText, key);
console.log('Decrypted:', decryptedText);