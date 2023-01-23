// Create a new heading, adds text to that element
// window load hote hi heading show ho

window.onload = () =>{
    
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
function createtable(){

    const tb = document.createElement("table");
    tb.setAttribute("class","table");


    // caption
    const caption = document.createElement("caption");
    const captiondata = document.createTextNode("Tabe heading");

    tb.appendChild(caption);
    caption.appendChild(captiondata);

    // table head
    const thaed = document.createElement("thead");

    for (let i = 0; i < 1; i++) {
        
        const headrow = document.createElement("tr");
        headrow.setAttribute("class","row");
        
        for(let j = 0; j < 3;j++){
            const headrowdata = document.createElement("th");
            headrowdata.setAttribute("class","data");

            const headrowtext = document.createTextNode("Hello world");

            headrowdata.appendChild(headrowtext);
            headrow.appendChild(headrowdata);
        }
        thaed.appendChild(headrow);
    }
    tb.appendChild(thaed);

    // table body
    const  tlbody = document.createElement("tbody");
    tlbody.setAttribute("class","tbody");


    // row and rowdata
    for (let i = 0; i < 6; i++) {
        
        const row = document.createElement("tr");
        row.setAttribute("class","row");
        
        for(let j = 0; j < 3;j++){

            const rowdata = document.createElement("td");
            rowdata.setAttribute("class","data");
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

for(let i = 0; i < attribute.length;i++){
    // console.log(attribute[i]);

    // all arrtribute nodeName access
    // console.log(attribute[i].nodeName)

    // all arrtribute nodeName with lowercase access
    // console.log(attribute[i].nodeName.toLowerCase())


    // attributes value change
    if(attribute[i].nodeName.toLowerCase() === "placeholder"){
        // console.log("Placeholder...");
        input.placeholder = "Ener your first name...";
    }

    if(attribute[i].nodeName.toLowerCase() === "style"){
        input.style.border = "2px solid red";
        input.style.height = "20px";
        input.style.width = "60%";
    }


}

const textarea = document.querySelector(".story");
const settext = document.querySelector(".set-text");
const cleartext = document.querySelector(".clear-text");


settext.addEventListener("click", ()=>{
    textarea.textContent = "It was a dark and stormy night..."
});

cleartext.addEventListener("click", ()=>{
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
































