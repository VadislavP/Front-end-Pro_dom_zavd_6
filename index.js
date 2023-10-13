let array = [1, 3, 4, 6, 2, 5, 7]
function removeElement(array, item) {
    let remove = array.indexOf(item);
    console.log(remove)
    array.splice((remove), 1);
    console.log(array)
}
removeElement(array, 4);



// Array.prototype.remove = function (value) {
//     this.splice(this.indexOf(value), 1);
// }

// var arr = [1, 2, 4, 2, 5];
// var item = 2;

// arr.remove(item);
// console.log(arr);