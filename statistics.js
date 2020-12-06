const array = [2,4,6]


function max(arr) {
    let raa = Math.max(...arr)
     console.log(raa)
}
//håller på hitta en lösning tror dock att jag är hely ute o cyklar :)
function min(arr) {
    let ree = Math.min(...arr)
    console.log(ree)
}

function mean(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        // arrayLength.push(arr[i])
    }
    return sum/arr.length
}


max(array)
min(array)
console.log(mean(array))