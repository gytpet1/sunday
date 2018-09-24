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
  const 
    htmlTags = html.match(/<\/?([a-z])\w+>/g),
    length = htmlTags.length,
    openingTag = /<[a-z]\w+\>/g,
    closingTag = /<\/[a-z]\w+\>/g
  let 
    tagsDepth = [],
    isValid = false
  for(let i = 0; i < length; i++) {
    if(htmlTags[i].match(openingTag)) {
      tagsDepth.push(htmlTags[i]);
      /* console.log(tagsDepth) */
      isValid = false
    } else if (htmlTags[i].match(closingTag)) {
        if(tagsDepth[tagsDepth.length-1].match(/[a-z]\w+/g)[0] == htmlTags[i].match(/[a-z]\w+/g)[0]) {
          isValid = true
          tagsDepth.pop()
        } else isValid = false
    }
  }
  return isValid
}

console.log(isHTMLValid("<div><span></span><div><h1></h1></div></div>"))
