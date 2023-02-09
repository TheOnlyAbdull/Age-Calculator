// SELECTING ELEMENTS
const subBtn = document.getElementById('view-age');
const getDay = document.getElementById('day');
const getMonth = document.getElementById('month');
const getYear = document.getElementById('year');
const dispYear = document.getElementById('disp-year');
const dispMonth = document.getElementById('disp-month');
const dispDay = document.getElementById('disp-day');
const form = document.getElementById('calc-form');

// EVENT LISTENER FOR BUTTON
subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //1. get data from the input and store in an object
    let dataCollected = {
        dDay : parseInt(getDay.value),
        dMonth : parseInt(getMonth.value),
        dYear : parseInt(getYear.value)
    };

    // GETTING TODAY'S DATE
    let today = new Date();
    let tDay = today.getDate();
    let tmonth = today.getMonth() + 1;
    let tYear = today.getFullYear();

    //calculating the date
    let birthYear = tYear - dataCollected.dYear;
    let birthDay = tDay - dataCollected.dDay;
    let birthMonth = tmonth - dataCollected.dMonth;

    //changing ui styles
    dispYear.textContent = birthYear;
    dispDay.textContent = birthDay;
    dispMonth.textContent = birthMonth;

    form.reset();
});




























// displaying dates
// var currentDate = new Date()
// var day = currentDate.getDate()
// var month = currentDate.getMonth() + 1
// var year = currentDate.getFullYear()
// console.log("<b>" + day + "/" + month + "/" + year + "</b>")