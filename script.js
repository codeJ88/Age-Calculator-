let currDate= document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge= document.getElementById("CalcAge");
const displayAge= document.getElementById("displayAge");
const Age= document.getElementById("age");
var today = new Date();

// There was an extra space between the $age string- updated change 
currDate.innerText=`Date: ${today.toLocaleDateString('en-UK')}`;

//If user enters a incorrect date return the result
CalcAge.addEventListener("click", () =>{
    var birthDate = new Date(dateOfBirth.value);
    if (!birthDate || isNaN(birthDate)) {
        Age.innerText = "Please enter a valid date";
        displayAge.style.visibility ="visible";
        return;
    }


    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();


    if (m < 0 || (m === 0 && today.getDate() <birthDate.getDate())) {
        age = age - 1;
    }

    //Display age
    displayAge.style.visibility="visible";
    Age.innerText = `You are ${age} years old`;
 });
