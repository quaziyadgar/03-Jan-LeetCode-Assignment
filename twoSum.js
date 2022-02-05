let arr = [5,4,6,9,7,2,10];
let target = 19;

function twoSum(arr, target) {
    // console.log('two sum');
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        // console.log(diff);
            for (let j= 1+i; j<arr.length; j++) {
            if ( arr[j] == diff)
            {   
                array.push(i);
                array.push(j);
                return array;
            }
        }
    }
    return 'target missmatch';
}

console.log(twoSum(arr,target));