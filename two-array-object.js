// add whatever parameters you deem necessary
// function twoArrayObject(arr1, arr2) {
//     //create results object
//     const result = {};
//     //loop over arr1 to create object
//     for (let i = 0; i < arr1.length; i++){
//         if (i >= arr2.length){
//             result[arr1[i]] = null;
//         } else {
//             result[arr1[i]] = arr2[i];
//         }
//     }
//     // return object
//     return result;
// }

function twoArrayObject(keys, values){
    //iterate over keys
    return keys.reduce((result, curr, idx) => {
        result[curr] = idx < values.length ? values[idx] : null;
        return result;
    }, {});
}

