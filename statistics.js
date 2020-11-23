
function max(arr) {
    for (i = 0; i <= arr.length; i++){
        if (arr [i] > arr [i+1]){
            return arr [i]
        }
        else if(arr [i] < arr [i+1]){
            return arr [i+1]
        }
    }
}
//håller på hitta en lösning tror dock att jag är hely ute o cyklar :)
function min(arr) {

}

function mean(arr) {
    // Ledtråd: Börja med att räkna ut summan av alla element
}

const array = [344, 1, 6, 5222, 22, 45]

console.log(max(array))