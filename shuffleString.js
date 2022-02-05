/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    var str = "";
    for ( var i = 0; i < indices.length ; i++) {
        str += s[indices[i]];
    }
    return str;
};

let s = "codeleet";
let arr = [4,5,6,7,0,2,1,3];
console.log(restoreString(s,arr));