const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      return;
    }

    const msgUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i++) {
      const charCode = msgUpper.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const msgShift = charCode - 65;
        const keyShift = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65;

        const cipherChar = String.fromCharCode(
          ((msgShift + keyShift) % 26) + 65,
        );
        result.push(cipherChar);

        keyIndex++;
      } else {
        result.push(msgUpper[i]);
      }
    }

    return this.isDirect ? result.join("") : result.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const msgUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i++) {
      const charCode = msgUpper.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const msgShift = charCode - 65;
        const keyShift = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65;

        const plainChar = String.fromCharCode(
          ((msgShift - keyShift + 26) % 26) + 65,
        );
        result.push(plainChar);

        keyIndex++;
      } else {
        result.push(msgUpper[i]);
      }
    }

    return this.isDirect ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
