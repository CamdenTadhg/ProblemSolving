// add whatever parameters you deem necessary
function separatePositive(arr) {
    //create left and right pointers
    let left = 0;
    let right = arr.length - 1;
    //while left pointer < right pointer
    while (left < right){
        //if left pointer is negative and right pointer is positive, swap
        if (arr[left] < 0 && arr[right] > 0){
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
        //if left pointer is positive, increment
        if (arr[left] > 0) left++;
        //if right pointer is negative, decrement
        if (arr[right] < 0) right--;
    }
    //return new array
    return arr;
}
