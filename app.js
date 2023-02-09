// SELECTING ELEMENTS
const subBtn = document.getElementById('view-age');
const getDay = document.getElementById('day');
const getMonth = document.getElementById('month');
const getYear = document.getElementById('year');
const dispYear = document.getElementById('disp-year');
const dispMonth = document.getElementById('disp-month');
const dispDay = document.getElementById('disp-day');
const form = document.getElementById('calc-form');
const msgPara = document.querySelector('.msg-p');


// GETTING TODAY'S DATE
let today, tDay, tmonth, tYear;
today = new Date();
tDay = today.getDate();
tmonth = today.getMonth() + 1;
tYear = today.getFullYear();


// EVENT LISTENER FOR BUTTON
subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //1. get data from the input and store in an object
    let dataCollected = {
        dDay : parseInt(getDay.value),
        dMonth : parseInt(getMonth.value),
        dYear : parseInt(getYear.value)
    };

    if(dataCollected.dDay <= 31 && dataCollected.dMonth <= 12 && dataCollected.dYear <= tYear){
        //calculating the date
        let birthYear, birthDay, birthMonth;
        birthYear = tYear - dataCollected.dYear;
        birthDay = tDay - dataCollected.dDay;
        birthMonth = tmonth - dataCollected.dMonth;
        

        //changing ui styles
        dispYear.textContent = birthYear;
        dispDay.textContent = birthDay;
        dispMonth.textContent = birthMonth;
        msgPara.textContent  = 'Your Age is ' + birthYear +  ' Years ' + birthMonth + ' Month ' + birthDay +  ' Days'
        msgPara.style.color = "black";
        console.log('pass');
    }else{
        msgPara.textContent  = "Pls Enter in a correct format";
        msgPara.style.color = "red";
        console.log('failed');
    }
    
    form.reset();
});


    


























// displaying dates
// var currentDate = new Date()
// var day = currentDate.getDate()
// var month = currentDate.getMonth() + 1
// var year = currentDate.getFullYear()
// console.log("<b>" + day + "/" + month + "/" + year + "</b>")