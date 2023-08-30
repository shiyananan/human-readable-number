module.exports = function toReadable (number) {
    let nums = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '80': 'eighty'
    };

    let i = 0;
    let resultNumber = '';
    let length = number.toString().length;

    for (let i = 0; i < length; i+=1) {
        let currentNum = number.toString()[i];
        if ((length - i) === 3) {
            resultNumber += `${nums[currentNum]} hundred `;
        } else if ((length - i) === 2) {
            if (currentNum === '0') {
                resultNumber += '';
            } else if (currentNum === '1') {
                currentNum = `${currentNum}${number.toString()[i+1]}`;
                resultNumber += `${nums[currentNum]}`;
                return resultNumber;
            } else if (currentNum*10 in nums) {
                currentNum *= 10;
                resultNumber += `${nums[currentNum]} `;
            } else {
                resultNumber += `${nums[currentNum]}ty `;
            }
        } else if ((length - i) === 1) {
            if (currentNum === '0' & length === 1) {
                return 'zero';
            } else if (currentNum != '0') {
                resultNumber +=`${nums[currentNum]}`;
                return resultNumber;
            } else {
                return resultNumber.trim();
            }
        }
    };
};