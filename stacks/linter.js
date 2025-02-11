import Stack from './stack.js'


function simpleLinter(code) {
    const temp = new Stack()
    const openingBraces = "({["
    const closingBraces = ")}]"

    
    for(let char of code) {
        if(openingBraces.includes(char)) {
            temp.push(char)
            console.log(temp)
        }
        
        if(closingBraces.includes(char)) {
            const removed = temp.pop()
            // compare 'removed' with matching brace
            if(openingBraces.indexOf(removed) !== closingBraces.indexOf(char)) {
                return Error("braces order mismatch !!!")
            }
        }
    }
    // check if something remains on the stack i.e opening braces not closed
    if(temp.length > 0)
        return Error("opening braces not closed !!!")
    return "pass"
}

console.log(simpleLinter("var x = y: 1,2,3"));