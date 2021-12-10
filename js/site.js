        // get values from user, need fizz and buzz values

function getValues(){
        //get values from the page
let fizzValue = document.getElementById("fizzValue").value;
let buzzValue = document.getElementById("buzzValue").value;


        //We need to validate our input
        //parse into Integers
fizzValue = parseInt(fizzValue);
buzzValue = parseInt(buzzValue);

        //boolean check
        // check that the numbers are integers
if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // we call fizzBuzz
    let fbArray = fizzBuzzC(fizzValue,buzzValue);    
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
    for (let index = 1; index <= 100; index++){
        //check to see if divisible by Both (3 and 5)
        if (index % fizzValue == 0 && index % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        //check to see if divisible by fizzValue (3)
        }else if (index % fizzValue == 0){
                returnArray.push('Fizz');
        // check to see if divisble by buzz value (5)
        }else if (index % buzzValue == 0){
            returnArray.push('Buzz');
        }else {
            returnArray.push(index);
        }  
        
    }  

    return returnArray;
        
}

function fizzBuzzB(fizzValue, buzzValue){

    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let index = 1; index <= 100; index++) {
        Fizz = index % fizzValue == 0;
        Buzz = index % buzzValue == 0;

        switch(true){
            case Fizz && Buzz:{
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz: {
                returnArray.push('Fizz');
                break;
            }
            case Buzz: {
                returnArray.push('Buzz');
                break;
            }
            default:{
                returnArray.push(index);
                break;
            }
        }
    }
    return returnArray;
}
    
function fizzBuzzC(fizzValue, buzzValue){
    let returnArray = [];

    for (let index = 1; index <= 100; index++){
        
        let value = (( index % fizzValue == 0 ? 'Fizz' : '')+ (index % buzzValue ==0 ? 'Buzz' : '') || index);
        returnArray.push(value);
    }

    return returnArray;
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
        
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];

        
        tableBody.appendChild(tableRow);
        
        }
}

//click on button