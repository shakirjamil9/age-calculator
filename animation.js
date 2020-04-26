window.addEventListener("keypress",function(e){
    if(e.keyCode == 13){
        document.getElementById("btn").click();
    }
    else 
    {
        return;
    }

})
function calculate(){
var DOB = document.getElementById("dob").value;
var milliseconds_bw_1970_and_DOB = Date.parse(DOB);
var milliseconds_bw_Now_and_1970 = Date.now();
var age_in_milliseconds = milliseconds_bw_Now_and_1970 - milliseconds_bw_1970_and_DOB;

var age_in_seconds = (age_in_milliseconds/1000);
var age_in_minutes = (age_in_seconds/60);
var age_in_hours = (age_in_minutes/60);
var age_in_days = (age_in_hours/24);
var age_in_months = (age_in_days/30.417);
var age_in_years = (age_in_months/12);

document.getElementById("years").value = `${age_in_years} Years`;
document.getElementById("months").value = `${age_in_months} Months`; 
document.getElementById("days").value = `${age_in_days} Days`;
document.getElementById("hours").value = `${age_in_hours} Hours`;
document.getElementById("minutes").value = `${age_in_minutes} Minutes`;
document.getElementById("seconds").value = `${age_in_seconds} Seconds`;
}
function first(){
    var x = document.getElementsByClassName("white")[0];
    x.classList.toggle("addinwhite");
}
function second(){
    var y = document.getElementsByClassName("bottom")[0];
    y.classList.toggle("inbottom");
}
function third(){
    var z = document.getElementsByClassName("top")[0];
    z.classList.toggle("intop");
}