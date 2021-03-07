module.exports = function toReadable(number) {
   const numbersDict = {
       1: 'one',
       2: 'two',
       3: 'three',
       4: 'four',
       5: 'five',
       6: 'six',
       7: 'seven',
       8: 'eight',
       9: 'nine',
       10: 'ten',
       11: 'eleven',
       12: 'twelve',
       13: 'thirteen',
       14: 'fourteen',
       15: 'fifteen',
       16: 'sixteen',
       17: 'seventeen',
       18: 'eighteen',
       19: 'nineteen'
   };
   const tens = {
       20: 'twenty',
       30: 'thirty',
       40: 'forty',
       50: 'fifty',
       60: 'sixty',
       70: 'seventy',
       80: 'eighty',
       90: 'ninety'
   }
   const getNumberUnderHundred = (number) => {
       if (number < 20) {
           return numbersDict[number];
       } else {
           const tail = number % 10
           const head = number - tail;
           let res = tens[head];
           if (tail > 0) {
               res = res + ' ' + numbersDict[tail];
           }
           return res;
       }
   };
   if (number === 0) {
       return 'zero';
   }
   if (number < 100) {
       return getNumberUnderHundred(number);
   } else {
       const head = Math.floor(number / 100);
       let res = numbersDict[head] + ' hundred'
       if (head * 100 !== number) {
           const tail = getNumberUnderHundred(number - head * 100);
           res = res + ' ' + tail;
       }
       return res;
   }
}

