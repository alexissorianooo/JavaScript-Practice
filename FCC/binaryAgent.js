/**
 * Binary Agents
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 */

 function binaryAgent(str) {

    str = str.split(' ')
  
    return str.map(item => {
      return String.fromCharCode(parseInt(item,2))
    }).join("")
  
    /**
     * parseInt(item,2)
     * converts "01000001" string
     * to a binary number in this example 65
     * 
     * String.fromCharCode(65)
     * converts number 65 to Character by getting 
     * the corresponding character from number 65
     * 
     * .join()
     * after converting the binary items, we need to join each character
     */
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");