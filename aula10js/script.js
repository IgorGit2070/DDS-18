console.log("Está funcionando")

var array = ["Texto1", "Texto2", "Texto3", 10, true, null]


console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])



for(var i = 0; i < 6; i++) {
    console.log(array[i])
}



for(var index in array) {
    console.log(array[index])
}


for(var index of array) {
    console.log(index)
}