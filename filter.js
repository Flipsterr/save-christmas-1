
function filter(arr, func) {
    let newArr = []
    for(i=0; i<arr.length; i++){
        if (func(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv
const numbers2 = [42, 12, 32, 1, 51, 2, 44, 57, 21, 92, 11, 18, 266]
const filteredNumbers2 = filter(numbers, x => x < 10)
console.log(filteredNumbers2)

// TEST 3 - skriv själv
const numbers3 = [4, 1, 300, 112, 4, 16, 7, 2, 53, 8, 11, 1, 3]
const filteredNumbers3 = filter(numbers, x => x < 10)
console.log(filteredNumbers3)