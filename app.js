// Document Object Model (DOM)
/*
    DOM is the data representation of the objects that comprise the structure and content of a document on the web.  It contains, but is not limited to:
    - Document
    - HTML
        - Head
            - Meta tags
            - link tags
            - Title tag
        - Body
            - Nav
            - Header
            - Div's
            - H1's and so on..
    - And any of their attributes

*/

//Creating our very first element
//let h1tag = document.createElement("h1")
//h1tag.style.color = "blue"
//h1tag.innerText = "Welcome to the Document Object Model"
//document.body.appendChild(h1tag)

// ? OFF TOPIC: Accessing device configuration with DOM
let info = navigator.oscpu
console.log(info)

//Accessing element
let listTitle = document.getElementById("listTitle")
console.log(listTitle)
listTitle.innerText = "Hermione's To Do List"

// Accessing elements using querySelector
/*
    Most versatile of all selectors.
        -accesses first element if there's more than one
        -returns null if no element is found
        -access by element name, .class, or #id 
*/
let listItem = document.querySelector(".listItem")
console.log(listItem)
listItem.style.textAlign = "center"
listItem.style.color = "red"


// Access Multiple Elements
/*
    When we access multiple elements, a node list is returned.
    HTML Collection
        - Not an array, but works like one.
        - Can access different nodes using [index]
        - Access any element by array notation or item method.
    Access multiple elements using:
        - getElementsByClassName()
        - getElementsByTagName()
        - querySelectorAll()
*/

let groceries = document.getElementsByClassName("groceryItem")
//Works like an array but isn't one.  It's actually an object.
console.log(groceries instanceof Array)
console.log(groceries[0])
//Accessing first instance of groceryItem class
groceries[0].innerText = "Finn the Mandrake"
console.log(groceries.item(2))

// Accessing all li tags in our index.html file using HTML Collection
let liTag = document.getElementsByTagName("li")
console.log(liTag)

let selectAll = document.querySelectorAll("ul li")
console.log(selectAll)

/*
    This newly created element will show up under HTMLCollection, but it will not show up with nodeList.
    The reason why is because HTMLCOlllection is dynamic wheras NodeList is static
*/

//let newListItem = document.createElement("li")
//let groceryList = document.getElementById("groceryList")
//groceryList.appendChild(newListItem)
//newListItem.innerText = "Test of Dynamic vs. static (hint: look inside console.log)"

// Difference between HTMCollection & nodeList
/*
    - Both are collections of DOM nodes
    - Node is used as a generic term for everything
    - HTMLCollection object is an array-like list of HTML elements
*/

// DOM Tree & Access Nodes

//Displays ALL nodes of the body element as Nodelist
console.log(document.body.childNodes)
// Whitespace inside elements = text
// Text = nodes
// All can be accessed by index numbers starting at [0]

console.log(document.body.children)


/*
    Properties:
        -first(Element)Child - first element of node
        -last(Element)Child - last element of node
        -parent(Element)node - access parent node of element
        -next(Element)Sibling - element next to the one processed
        -previous(Element)Sibling - previous to the one accessed
*/

let listDiv = document.getElementById("list")
console.log(listDiv.firstChild)
console.log(listDiv.firstChild.nextSibling.nextSibling)

// Adding Text using DOM
// .innerText property
// .innerHTML - specifies HTML content of an element

// Use a loop to get each element in liTag HTMLCollection and change their properties as shown.
for (tag of liTag) {
    //console.log(tag)
    tag.style.fontFamily = "cursive"
    tag.style.color = "blue"
}

// Reassign 5th [index 4] list item of all listItem classes
document.getElementsByClassName("listItem")[4].innerText = "Yell at Harry"

// Event Listening
/*
    Event Listener allows us to execute a function when a particular event occurs.  We call it using .addEventListener()
        - .addEventListener takes an event and a callback function to work
        - Event => what happens
        - Callback function => a function that executes when the event occurs.
*/

let button = document.getElementById("clickMe")
button.addEventListener("click", (event) => {
// shows the button being clicked
    console.log(event.target)
    console.log("the button has been clicked")
// Change the color after click
event.target.style.backgroundColor = "lightBlue"
})


button.addEventListener("click", (e => {
    // Grabbing the input from the input field
    let textInput = document.getElementById("listInput").value
    
    let newGroceryItem = document.createElement("li") // child node created
    let groceryList = document.getElementById("groceryList") // parent node linked
    newGroceryItem.innerText = textInput
    
    groceryList.appendChild(newGroceryItem)
}))

console.log(document.querySelector(".listItem").innerText)


