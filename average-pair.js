// add whatever parameters you deem necessary
function averagePair(nums, avg) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right){
        if (nums[left] + nums[right]/2 === avg) return true;
        else if (nums[left] + nums[right]/2 > avg){
            right--;
        } else {
            left++;
        }
    }
    return false;
}