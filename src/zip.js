/**
 * Function takes in two arrays and returns a new array of corresponding pairs
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array} result
 */

export default function zip(arr1, arr2){
const result = [];
let minLength = 0;
if(arr1.length > arr2.length){
    minLength = arr2.length;
} else{
    minLength = arr1.length;
}
for(let i = 0; i < minLength; i++){
    result.push([arr1[i], arr2[i]]);
}
return result;
}