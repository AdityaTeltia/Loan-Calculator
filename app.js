//Define UI variables
const amount = document.querySelector('#amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
const calculate = document.querySelector('.btn');
const form = document.getElementById('loan-form');
const result = document.getElementById('results')

//Variables Needed
let money;
let percent;
let time;

//Event listener loader
loadallEventListener();



function loadallEventListener(){

    //submit event
    form.addEventListener('submit', function(e){
        //Hide results
        result.style.display = 'none';

        // Show loader
        document.getElementById('loading').style.display = 'block';

        setTimeout(resultant, 1500);

        e.preventDefault();
    });

    //amount event
    amount.addEventListener('keyup', readAmount);

    //interest event
    interest.addEventListener('keyup', readInterest);

    //years event
    years.addEventListener('keyup', readYears);
}

function readAmount(){
    money = parseFloat(+amount.value);
}

function readInterest(){
    percent = parseFloat(+interest.value);
}
function readYears(){
    time = parseFloat(+years.value);
}

function resultant(){
    if( amount.value.length === 0 || interest.value.length === 0 || years.value.length === 0){
        showError('Please check your numbers');
    }else{
        monthlyPayment.value = ((money)+((money*percent)/100))/(time*12);
        totalPayment.value = (money)+((money*percent)/100);
        totalInterest.value = ((money*percent)/100);
        //Show calculations
        result.style.display = "block";
    }
    //Hide Loader
    document.getElementById('loading').style.display = "none";
}

function showError(error){
    //create a div
    const errorDiv = document.createElement('div');

    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger';

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    card.insertBefore(errorDiv, heading);

    //Clear error after 3 seconds
    setTimeout(clearError,3000);
}


//Clear error
function clearError(){
    document.querySelector('.alert').remove();
}