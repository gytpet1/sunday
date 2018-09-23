// Write a function which checks if the same amount of 'd' and 'k' is in the string.
//
// Examples:
// same("ddkk") => true
// same("dkkdd") => false
// same("ddkKm") => true
// same("dmm") => false
// same("eSss") => true // when no 'd' and 'k' is present should return true
function same(str) {
    let d = 0, k = 0
    let letters = [...str]
    let result = letters.filter((letter) => { 
        letter = letter.toLowerCase()
        if (letter == 'k') {
            k++
        } else if (letter == 'd') {
            d++
        }
     })
     return d == k ? true : false;
}