// add whatever parameters you deem necessary
function frequencyCounter(str){
    let freqCounter = {};
    for (let char of str){
        freqCounter[char] = freqCounter[char + 1] | 1;
    }
    return freqCounter;
}

function sameFrequency(num1, num2) {
    if (num1.toString().length !== num2.toString().length) return false;
    const freq1 = frequencyCounter(num1.toString());
    const freq2 = frequencyCounter(num2.toString());
    for (let digit in freq1){
        if (freq1[digit] !== freq2[digit]) return false;
    }
    return true;
}
