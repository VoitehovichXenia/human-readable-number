module.exports = function toReadable (number) {
    const numStr = number.toString();

    const unitInWords = { '00': 'zero', '0': '', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'};

    const tensInWords = {'00': '', '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty', '60': 'sixty', '70': 'seventy', '80': 'eighty', '90': 'ninety'};

    let res ='';

    for (let i=0; i<numStr.length; i++) {
        if (numStr.length === 3) {

            if (i === 0) {
                res = res + getWordOfHundreedDigit(numStr[i]);
                continue;
            }

            if (i === 1) {
                
                if (numStr[i] === '1') {
                    res = res + getWordOfTensDigit(numStr[i], numStr[i+1]);
                    break;
                }
                res = res + getWordOfTensDigit(numStr[i]);
                continue;
            }
            
            if (i === 2) {
                res = res + getWordOfUnitDigit(numStr[i]);
            }
        }
  
        if (numStr.length === 2) {
            
            if (i === 0) {
                if (numStr[i] === '1') {
                    res = res + getWordOfTensDigit(numStr[i], numStr[i+1]);
                    break;
                }
                res = res + getWordOfTensDigit(numStr[i]);
                continue;
            }

            if (i === 1) {
                res = res + getWordOfUnitDigit(numStr[i]);
            }
        }
  
        if (numStr.length === 1) {
            
            if (numStr === '0') {
                res = res + (getWordOfUnitDigit(numStr[i]+'0'));
            }
            res = res + (getWordOfUnitDigit(numStr[i]));
        }
            
    }

    function getWordOfUnitDigit(n) {
        return unitInWords[n];
    }
        
    function getWordOfTensDigit(n, u) {
        
        if (arguments.length > 1) {
            return (tensInWords[n+u]);
        }

        if (n === '0') return tensInWords[n + '0'];
        
        return tensInWords[n + '0'] + ' ';
    }
    
    function getWordOfHundreedDigit(n) {
        return unitInWords[n] + ' hundred ';
    }
    
    return res.trim(); 
}