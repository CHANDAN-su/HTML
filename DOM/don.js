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


const p1 = document.createElement("p");
p.textContent = "My name is chandan";
p.style.color = "Red";
q.insertAdjacentElement("afterend", p);




































