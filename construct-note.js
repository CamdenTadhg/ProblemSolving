// add whatever parameters you deem necessary
function makeFrequencyCounter(iterable) {
    //create object 
    const freqCounter = {};
    //loop through string to make frequency counter
    for (let val of iterable){
        //if not in object, add and set to 1
        //if in object, increment value
        freqCounter[val] = freqCounter[val] + 1 || 1;
    }
    //return frequency counter
    return freqCounter;
}

function constructNote(message, letters) {
    //make frequency counter for message O(M)
    let messageFreq = makeFrequencyCounter(message);
    //make frequency counter for letters  O(N)
    let lettersFreq = makeFrequencyCounter(letters);
    //compare message frequency counter to letters frequency counter
    for (let val in messageFreq){
        if (!lettersFreq[val]){
            return false;
        }
        if (messageFreq[val] > lettersFreq[val]){
            return false;
        }
    }
    return true;
}
