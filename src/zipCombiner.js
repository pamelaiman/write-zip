export default function zipCombiner(arr1, arr2, combinerFn) {
    const result = [];
    let minLength = 0;
    
    if(arr1.length > arr2.length){
        minLength = arr2.length;
    } else{
        minLength = arr1.length;
    }

    for(let i = 0; i < minLength; i++){
        result.push(combinerFn(arr1[i], arr2[i]));
    }

    return result;
}