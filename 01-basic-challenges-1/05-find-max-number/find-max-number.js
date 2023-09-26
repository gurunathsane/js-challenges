function findMaxNumber(arr) {
    let max = arr[0]
    for(let i=1;i<arr.length;i++){
        // for(let j=1;j<i;j++)÷{
        if(max < arr[i]){
            max = arr[i];
        }
    // }÷
    }
    return max;
}

module.exports = findMaxNumber;
