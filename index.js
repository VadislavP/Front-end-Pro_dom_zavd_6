let array = [1, 3, 4, 6, 2, 5, 7]
function removeElement(array, item) {
    let remove = array.indexOf(item);
    console.log(remove)
    array.splice((remove), 1);
    console.log(array)
}
removeElement(array, 4);


const myArray = [1, 2, 'three', 4, 'five', 6];
function calculateAverage(myArray) {
    let sum = 0;
    let quantityInteger = 0;
    // let quantity = myArray.length
    let res = myArray.reduce(function (sum1, item){ /*відпрацювання методу reduce*/
        if (typeof item === 'number') {
        return sum1 + item;
        } else {
        return sum1}
        })
    console.log('res=', res)
    let sum2 = 0;
    for (let i = 0; i < myArray.length; i++) 
        if (!isNaN(myArray[i])) {            
            quantityInteger += 1;
            sum2 += myArray[i];            
        }
    // середнє аріфметичнe average1, де res отримано за допомогою методу reduce
    let average1 = res / quantityInteger 
    // середнє аріфметичнe average2, де sum2 отримано за допомогою циклу з умовою рахування чисел з виключенням строк
    let average2 = sum2 / quantityInteger
    console.log('sum2=', sum2)
    console.log('quantityInteger=', quantityInteger)
    console.log('average1=', average1)
    console.log('average2=', average2)
    return average1

}
const average = calculateAverage(myArray);
alert(`Середнє аріфметичне функції calculateAverage = ${average}`)

// const inputString = " hello world";
// const charactersToRemove = ['l', 'd']
function removeCharacters(inputString, charactersToRemove){

let stringNew = charactersToRemove.join('');
    return inputString.replace(new RegExp(`[${stringNew}]`, 'gi'), '')

}
document.write(removeCharacters('hello world', ['l', 'd']));
console.log(removeCharacters('helLo worlD', ['l', 'd']));



