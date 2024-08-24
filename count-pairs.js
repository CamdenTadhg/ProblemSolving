// add whatever parameters you deem necessary
function countPairs(arr, num) {
    sortedArr = arr.sort((a, b) => a - b);
    left = 0;
    right = arr.length - 1;
    count = 0;
    console.log(sortedArr);
    while (left < right){
        if (sortedArr[left] + sortedArr[right] < num){
            left++;
        } else if (sortedArr[left] + sortedArr[right] > num){
            right--;
        } else {
            count++;
            left++;
        }
    }
    return count;
}
