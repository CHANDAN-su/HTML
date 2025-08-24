// console.log("Hii");

const months = document.querySelector("#month");
const monnthyear = document.querySelector("#month-year");

const bdaymonth = document.querySelector("#bday-month");
const bdayyear = document.querySelector("#bday-year");

const hourselect = document.querySelector("#bday-hour");
const minuteselect = document.querySelector("#bday-minute");
const weekselect = document.querySelector("#bday-week");
const dayselect = document.querySelector("#bday-day");

monnthyear.style.display = "none";

const input = document.createElement("input");

input.type = "text";
// console.log(input);

if(input.type === "text"){
    months.style.display = "none";
    monnthyear.style.display = "block"

    yearoption();
    // monthoption();
    houroption();
    minuteoption();
    weekoption();
    dayoption(bdaymonth[5].value);
}


function yearoption(){

    const date = new Date();
    const year = date.getFullYear();

    for(let i = 0; i <= 100; i++){
    const option = document.createElement("option");
    option.textContent = year - i;
    bdayyear.appendChild(option);
    }
}

// function monthoption(){
//     const montharray = ["January","February","March","April","May","June","July","August",
//     "September","October","November","December"];

//     // const montharry1 = montharray.length;

//   for(let i = -1; i <= montharray.length; i++){
//     const option = document.querySelector("option");
//     option.textContent = montharray[i];
//     bdaymonth.appendChild(option);
//   }
//   }



function houroption(){
    
    for(let i = 18; i <= 24; i++){
        
        const option = document.createElement("option");
        option.textContent = i<10? `0${i}` : i;
        hourselect.appendChild(option);
        // console.log(option);
        
    }
}


function minuteoption(){

    for(let i = 0; i <= 59; i++){
        const option = document.createElement("option");
        option.textContent = i<10? `0${i}` : i;
        minuteselect.appendChild(option);
        // console.log(option);
    }

}


function weekoption(){

    for(let i = 0; i <= 52; i++){
        const option = document.createElement("option");
        option.textContent = i<10? `0${i}` : i;
        weekselect.appendChild(option);
        // console.log(option);
    }

}


function dayoption(month){

    let daynum ;

    if (["January","March","May","July","August","October","December"].includes(month)) {
        daynum = 31;
    } else if(["April","June","September","November "].includes(month)) {
        daynum = 30;
    }else{
        // const year = new Date();
        // const date = year.getFullYear();

        const date = bdayyear.value;

        const daynumber = new Date(date,1,29) === 1;

        daynum = daynumber ? 28 : 29;

    }
    console.log(daynum);

    for(let i = 0; i <= daynum ; i++){
        const option = document.createElement("option");
        option.textContent = i;
        dayselect.appendChild(option);
    }


}

