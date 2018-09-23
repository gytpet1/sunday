// Write a function that takes a string of html, and determines if the order of the html tags is valid.
// It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of these html tags: <div><span><h1>.
//
// What is considered Valid? A string of html tags is considered valid if all tags are closed with the correct tag.
//
// Examples
// "<div></div>"   =>  True
// "<div><span></span></div>"   =>  True
// "<div></span>"       =>  False
// "<div>"     =>  False
// "<div><div><span></span></div></h1>" =>  False

function isHTMLValid(html) {
    const htmlTags = html.match(/<\/?([a-z])\w+>/g)
    console.log(validateRecursive(htmlTags))
}

function validateRecursive(tags) {
	if(tags.length == 0) return 0
  let popped = tags.pop()
  let shifted = tags.shift()
  console.log(shifted, popped)
  const matchReg = /[a-z]\w+/g
  if(shifted.match(matchReg)[0] == popped.match(matchReg)[0]){
  	validateRecursive(tags)
  	return true
  } else return false
}

isHTMLValid("<div><span></h1></div>")