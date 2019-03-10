var arr=['Hello World!']
function balikString(arr){
    var output=''
    for (var i = arr[0].length-1; i>=0; i--){
        output += arr[0][i]
    }
    return output
}
console.log(balikString(arr))