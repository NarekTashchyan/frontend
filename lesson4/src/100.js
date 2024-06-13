var map = function(arr, fn) {
    let newarr = []
    for (let i in arr){
        newarr.push(fn(arr[i], i))
    }
    return newarr
};

console.log(map([1,2,3], function plusI(n, i) { return n + i; }))