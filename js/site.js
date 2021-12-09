        // get values from user, need fizz and buzz values

function getValues(){
        //get values from the page
let fizzValue = document.getElementById("fizz").value;
let buzzValue = document.getElementById("buzz").value;


        //We need to validate our input
        //parse into Integers
fizzValue = parseInt(fizzValue);
buzzValue = parseInt(buzzValue);

        //boolean check
        // check that the numbers are integers
if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // we call fizzBuzz
    let fbArray = fizzBuzz(fizzValue,buzzValue);    
        //let numbers = generateNumbers(fizzValue, buzzValue);
    displayData(fbArray);

    }else{
    alert("You Must enter integers")
    }

        //function newFunction() {
        //return document.getElementById("buzz").value;
        //}
   
    
}

//do fizz buzz
//logic function
function fizzBuzz(fizzValue, buzzValue){
    let returnArray = [];
   //loop 1 through 100
    for (let i = 1; i <= 100; index++){
        //check to see if divisible by Both (3 and 5)
        if (i % buzzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        //check to see if divisible by fizzValue (3)
        }else if (i % fizzValue == 0){
                returnArray.push('Fizz');
        // check to see if divisble by buzz value (5)
        }else if (i % buzzValue == 0){
            returnArray.push('Buzz');
        }else {
            returnArray.push(i);
        }  
        
    }  

returnArray;
        
}

    //display of view functions

function displayData(fbArray){
//get the table body element from the page

    let tableBody = document.getElementById("results");

//get the template row
    let templateRow = document.getElementById("fbTemplate")
   

//clear the table
    tableBody.innerHTML = "";

        for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        //grab use the td's put into an array
        let rowCols = tableRow.querySelectorAll("td") 
        rowCols[0].textContent = fbData[i];
        rowCols[1].textContent = fbData[i+1];
        rowCols[2].textContent = fbData[i+2];
        rowCols[3].textContent = fbData[i+3];
        rowCols[4].textContent = fbData[i+4];

        tableBody.appendChild(tableRow);
        
        }
}

//click on button