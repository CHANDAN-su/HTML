// Create a new heading, adds text to that element
// window load hote hi heading show ho

window.onload = () => {

    const heading = document.createElement("h1");
    const headingtext = document.createTextNode("Big head!");

    heading.appendChild(headingtext);
    document.body.appendChild(heading);

}


function heading() {
    const heading = document.createElement("h1");
    const headingtext = document.createTextNode("Introduction to the DOM!");

    heading.appendChild(headingtext);
    document.body.appendChild(heading);

    heading.setAttribute("id", "heading");
}


// table create
function createtable() {

    const tb = document.createElement("table");
    tb.setAttribute("class", "table");


    // caption
    const caption = document.createElement("caption");
    const captiondata = document.createTextNode("Tabe heading");

    tb.appendChild(caption);
    caption.appendChild(captiondata);

    // table head
    const thaed = document.createElement("thead");

    for (let i = 0; i < 1; i++) {

        const headrow = document.createElement("tr");
        headrow.setAttribute("class", "row");

        for (let j = 0; j < 3; j++) {
            const headrowdata = document.createElement("th");
            headrowdata.setAttribute("class", "data");

            const headrowtext = document.createTextNode("Hello world");

            headrowdata.appendChild(headrowtext);
            headrow.appendChild(headrowdata);
        }
        thaed.appendChild(headrow);
    }
    tb.appendChild(thaed);

    // table body
    const tlbody = document.createElement("tbody");
    tlbody.setAttribute("class", "tbody");


    // row and rowdata
    for (let i = 0; i < 6; i++) {

        const row = document.createElement("tr");
        row.setAttribute("class", "row");

        for (let j = 0; j < 3; j++) {

            const rowdata = document.createElement("td");
            rowdata.setAttribute("class", "data");
            const rowtext = document.createTextNode("Hello world");

            rowdata.appendChild(rowtext);
            row.appendChild(rowdata);
        }
        tlbody.appendChild(row);
    }

    tb.appendChild(tlbody);
    document.body.appendChild(tb);


}

// createtable();

// how access attribute and value change

const input = document.querySelector("input");
console.log(input);
// console.log(input.nodeName); //INPUT

const attribute = input.attributes;
console.log(attribute);

// one by one access using for loop

for (let i = 0; i < attribute.length; i++) {
    // console.log(attribute[i]);

    // all arrtribute nodeName access
    // console.log(attribute[i].nodeName)

    // all arrtribute nodeName with lowercase access
    // console.log(attribute[i].nodeName.toLowerCase())


    // attributes value change
    if (attribute[i].nodeName.toLowerCase() === "placeholder") {
        // console.log("Placeholder...");
        input.placeholder = "Ener your first name...";
    }

    if (attribute[i].nodeName.toLowerCase() === "style") {
        input.style.border = "2px solid red";
        input.style.height = "20px";
        input.style.width = "60%";
    }


}

const textarea = document.querySelector(".story");
const settext = document.querySelector(".set-text");
const cleartext = document.querySelector(".clear-text");


settext.addEventListener("click", () => {
    textarea.textContent = "It was a dark and stormy night..."
});

cleartext.addEventListener("click", () => {
    textarea.textContent = ""
});



// document.querySelector
// document that matches the specified selector, or group of selectors. only one selectors access first paragrapf
// Syntax - document.querySelector(selector)

// type selectors
const para = document.querySelector("p");
console.log(para);  //<p class="para">Lorem ipsum dolor sit.</p>


// selectors list
const selectorlist = document.querySelector("div.main,input[name='login']");
console.log(selectorlist);  //<input type="text" name="login" id="input">


// class selectors
const para1 = document.querySelector(".para");
console.log(para1); //<p class="para">Lorem ipsum dolor sit.</p>

// id selectors
const input1 = document.querySelector("#input");
console.log(input1); //<input type="text" name="login" id="input">

// attributes selectors
const qurey = document.querySelector("input[name='login']");
console.log(qurey);   //<input type="text" name="login" id="input">

// const child = document.querySelector("div.mail p");
const child = document.querySelector("div.mail>p");
console.log(child);

// const sibling = document.querySelector("input[name='login']~div");
const sibling = document.querySelector("input[name='login']+div");
console.log(sibling);



// document.querySelectorAll
// The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
// Syntax - document.querySelectorAll(selector)

// Return valve -> A non-live NodeList containing one Element object for each element that matches at least one of the specified selectors or an empty NodeList in case of no matches.

// Accessing the matches
const para3 = document.querySelectorAll("p");
console.log(para3);

// for(let i = 0;i<para.length;i++){
//     console.log(para[i]);
// }

// para.forEach(element => {
//     console.log(element);
// });

// for and forEack same work



const matches = document.querySelectorAll("div.note, div.alert");
console.log(matches);

const container = document.querySelector("#test");
console.log(container);

const matche = document.querySelectorAll("div.highlight > p");
console.log(matche);

const attributes = document.querySelectorAll("input[type='button']");
console.log(attributes);

// nested 
const nested = document.querySelector(".outer .inner");
console.log(nested);


const nested1 = document.querySelectorAll(".outer .inner");
console.log(nested1);

// getElementByID
// getElementById() returns an Element object representing the element whose id property matches the specified string. 
// syntax -> getElementByID(id);

const getel = document.getElementById("getelement");
console.log(getel);


const textarea1 = document.getElementById("textarea");
const colorRed = document.getElementById("color-red");
const colorBlue = document.getElementById("color-blur");

colorRed.addEventListener("click", () => {
    textarea1.style.color = "Red";
});

colorBlue.addEventListener("click", () => {
    textarea1.style.color = "Blue";
});



// getElementByClassName
// The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).
// syntax -> getElementByClassName(name);

console.log("getElementByClassName");

// Get all elements that have a class of 'test':
const getClass = document.getElementsByClassName("test");
console.log(getClass);


// Get all elements that have both the 'red' and 'test1' classes:
const getClass1 = document.getElementsByClassName("red test1");
console.log(getClass1);


// Get all elements that have a class of 'test1', inside of an element that has the ID of 'main':
// console.log(document.getElementById("main").getElementsByClassName("test2")); //not work


// Get the first element with a class of 'test', or undefined if there is no matching element:
const testing = document.getElementsByClassName("testing")[0];
console.log(testing);




// getElementByTagName
// The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.
// syntax -> getElementsByTagName(element)


function AllParaElems() {
    const outertext = document.getElementsByTagName("span");
    console.log(outertext);
    const num = outertext.length;
    alert(`There are ${num} paragraph in doucment`);
};

function div1ParaElems() {
    const div1 = document.getElementById("div1");
    const p = div1.getElementsByTagName("p");
    const num = p.length;
    alert(`There are ${num} paragraph in doucment`);
}

function div2ParaElems() {
    const div1 = document.getElementById("div2");
    const p = div1.getElementsByTagName("p");
    const num = p.length;
    alert(`There are ${num} paragraph in doucment`);
}


// document.createElement
// the document.createElement() method creates the HTML element specified by tagName
//sytax - createElement(tagName)

document.body.onload = () => {
    const createelement = document.createElement("h1");

    const text = document.createTextNode("Big data!");

    createelement.appendChild(text);

    // document.body.appendChild(createelement);
}

const paragraph = document.createElement("p");
// console.log(paragraph);



// createDocumentFragment()
// Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.
// syntax -> createDocumentFragment()

// Creating a nested DOM structure
// one value add
const fragment1 = document.createDocumentFragment();
const nare1 = ["one", "two", "three", "four"];
nare1.forEach(nare => {

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.style.cursor = "pointer";
    li.setAttribute("class","list");
    const a = document.createElement("a")
    a.src = "https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement";

    const link = fragment1
        .appendChild(ul)
        .appendChild(li)
        .appendChild(a);
    link.textContent = nare;
});
document.body.appendChild(fragment1);


// multiole value add
const fragment = document.createDocumentFragment();
const ul = document.getElementById("ul");

const nare = ["one", "two", "three", "four"];
nare.forEach((nare) => {
    const li = document.createElement("li");
    li.textContent = nare;
    fragment.appendChild(li);
});
fragment.appendChild(ul);
document.body.appendChild(fragment);


// single
const fragment2 = document.createDocumentFragment();

const section = document.createElement("section");
const article = document.createElement("article");

const div = fragment2
            .appendChild(section)
            .appendChild(article);

article.textContent = 'Lorem ipsum dolor sit amet.';
document.body.appendChild(div);


// node.appendChild()
// If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position
//syntax - appendChild(echild);

const paragraph1 = document.body.appendChild(document.createElement("p"));

// Append a paragraph to the body
const p = document.createElement("p");
const parap = document.createTextNode("Lorem ipsum dolor sit amet consectetur.")
p.appendChild(parap);
// document.body.appendChild(p);

console.log(p);


// Element.insertAdjacentElement()
// The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.
// syntax => insertAdjacentElement(position,element);

const para4 = document.createElement("p");
const paratext = document.createTextNode("Chandan thakur");
para4.appendChild(paratext);


const div3 = document.querySelector(".div3");
// div3.insertAdjacentElement("beforebegin",para4);
// div3.insertAdjacentElement("afterbegin",para4);
// div3.insertAdjacentElement("beforeend",para4);
// div3.insertAdjacentElement("afterend",para4);



// Element.insertAdjacentHTML()
// The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
// syntax => insertAdjacentHTML(position, text)

const div5 = document.querySelector("#div4");
const text = "<p>Chandan Thakur</p>";

// div5.insertAdjacentHTML("beforebegin",text);
// div5.insertAdjacentHTML("afterbegin","<p>Chandan Thakur</p>");
// div5.insertAdjacentHTML("beforeend",text);
// div5.insertAdjacentHTML("afterend",text);



// Element.insertAdjacentText()
// The insertAdjacentText() method of the Element interface, given a relative position and a string, inserts a new text node at the given position relative to the element it is called from.
// syntax => insertAdjacentText(where, data)

const div6 = document.querySelector("#div4");
const text1 = "Chandan Thakur";

// div6.insertAdjacentText("beforebegin",text1);
// div6.insertAdjacentText("afterbegin","Chandan Thakur");
div6.insertAdjacentText("beforeend",text1);
// div6.insertAdjacentText("afterend",text1);


// Element.innerHTML
// The Element property innerHTML gets or sets the HTML or XML markup contained within the element

// Appending HTML to an element

const list = document.getElementById("list");
// console.log(list);

list.innerHTML = `<li><a href="#">Item ${list.children.length + 1}</a></li>`;



const clickto = document.querySelector(".box6");
clickto.addEventListener("click", (event) => {

    const date = new Date();
    const tostring = date.toLocaleTimeString();

    const meg = `Event: ${event.type} at ${event.clientX} , ${event.clientY}`

    const output = document.querySelector(".output");
    output.innerHTML += `${tostring} - ${meg} <br>`

});


// clickto.addEventListener("click", clickevent);
function clickevent(event) {
    const date = new Date();
    const tostring = date.toLocaleTimeString();

    const meg = `Event: ${event.type} at ${event.clientX} , ${event.clientY}`

    const output = document.querySelector(".output");
    output.innerHTML += `${tostring} - ${meg} <br>`
}



// element.style
// The style read-only property returns the inline style of an element. 
// all styles properties for that element with values assigned for the attributes that are defined in the element's inline style attribute.

// For example, element.style.backgroundColor = "red".


const elmstyle = document.querySelector(".elsyle");

elmstyle.style.border = "10px solid red";
elmstyle.style.backgroundColor = "Black";
elmstyle.style.marginTop = "15px";


//element.setAttribute()
// Sets the value of an attribute on the specified element.If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

// Syntax => setAttribute(name , value)

// Boolean attributes are considered to be true if they're present on the element at all. You should set value to the empty string ("") or the attribute's name, with no leading or trailing whitespace.

const btn = document.querySelector("button");

btn.setAttribute("type", "reset");

btn.setAttribute("disabled", "");

btn.setAttribute("State", "button");


// remove Attribute
btn.removeAttribute("State");
btn.removeAttribute("disabled");



// element.getAttribute()
// The getAttribute() method of the Element interface returns the value of a specified attribute on the element.

// Syntax => getAttribute(attributeName)

// Return value  => A string containing the value of attributeName.

const getA = document.querySelector(".div1");
const clickbtn = document.querySelector("#click");

console.log(getA.getAttribute("class")); //div
console.log(getA.getAttribute("aling")); //null


clickbtn.addEventListener("hover", () => {

    if (getA.getAttribute('class') === 'div1') {
        alert("Right")
    } else {
        alert("error");
    }
});


console.log(getA.getAttribute('class') === 'div1');



// Element.removeAttribute()
// The Element method removeAttribute() removes the attribute with the specified name from the element.

// Syntax => removeAttrbute(AttrName)

// method 1
// const divR = document.querySelector(".div2");
// const btn1 = document.querySelector(".remA");

// btn1.addEventListener("click",()=>{
//     divR.removeAttribute("disabled");
//     // btn2.style.transform = "scale(1)";
//     // btn1.style.transform = "scale(0)";
// });


// const input = document.querySelector("input");
// const btn2 = document.querySelector(".remB");
// btn2.addEventListener("click",()=>{
//     // btn1.style.transform = "scale(1)";
//     // btn2.style.transform = "scale(0)";
//     if(input.getAttribute("class") === "div2"){
//         divR.setAttribute("disabled","");
//     }
// });

// method 2
const divR = document.querySelector(".div2");
const btn1 = document.querySelector(".remA");


btn1.addEventListener("click", () => {

        divR.removeAttribute("disabled");
        divR.setAttribute("id", "divI")

        // if (divR.getAttribute("id") === "divI") {
        if (divR.hasAttribute("id")){
            console.log(divR.hasAttribute("id"));
            btn1.addEventListener("click", () => {

                console.log("hii");
                divR.removeAttribute("id")
                btn1.innerHTML = "Emable"
                divR.setAttribute("disabled", "")

            });

        }

        btn1.innerHTML = "Disabled"
    

});


// Element.hasAttribute()
// The Element.hasAttribute() method returns a Boolean value indicating whether the specified element has the specified attribute or not.

// Syntax => hasAttribute(Attribute-name)
// Return value  => A boolean.


// Node.textContent
// The textContent property of the Node interface represents the text content of the node and its descendants.The textContent property of the Node interface represents the text content of the node and its descendants.

const div31 = document.querySelector(".div3");

console.log(div31.textContent);

div31.textContent = "This text is different!";



// Node.removeChild()
// The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.

// Synatx => removeChild(child);

const parent = document.querySelector(".Parent");
const addChild = document.querySelector(".add-child");
const removeChid = document.querySelector(".remove-child");


addChild.addEventListener("click", () => {

    const div = document.createElement("div");
    div.classList.add("child");
    div.textContent = "Hello";
    parent.appendChild(div);

});


removeChid.addEventListener("click",() => {
    const child = document.body.querySelector(".child");
    parent.removeChild(child);
});








































