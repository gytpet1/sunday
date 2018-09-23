// Write a function which
//     Multiplies each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.
//     Example
// math(65, 60, 75, 55, 60, 63, 64, 45) === 86
export function math(...numbers) {
    let processedNumber = (Math.sqrt(numbers.map((num) => {
        return num*num;
    }).reduce((value, currentValue) => {
        return value + currentValue;
    }))/2).floor();
    return processedNumber;
}
