// Your task is to create a wave pattern out of a string.
//
// Rules:
// 1. The input will always be lower case string.
// 2. Ignore whitespace.
//
// Examples:
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// wave (" h e y ") => [" H e y ", " h E y ", " h e Y "]
// wave ("") => []
function wave(str) {
    return [...str]
    .map((char, i) => {
        const isLetter = char.match(/[a-z]/i)
        if (isLetter) {
            return str.substr(0, i) + char.toUpperCase() + str.substr(i+1) 
        }
            return false
    })
    .filter(Boolean)
}
