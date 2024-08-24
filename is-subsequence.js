// add whatever parameters you deem necessary
function isSubsequence(subseq, seq) {
    if (subseq.length > seq.length) return false;
    let idx1 = 0;
    let idx2 = 0;
    while (idx2 < seq.length){
        if (subseq[idx1] === seq[idx2]){
            idx1++;
            idx2++;
        } else {
            idx2++;
        }
        if (idx1 === subseq.length) break
    }
    if (idx1 === subseq.length) return true;
    else return false;
}
