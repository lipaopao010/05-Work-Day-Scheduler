//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist


var m = moment();
var current = moment().toString();
var currentTime = moment().toObject()
console.log(current);
console.log(currentTime);
moment().isBefore();


checkHour();
//console.log($(".container")[0].children[0].getAttribute("data-name"));



//1. Display the current date



var currentDay = m.format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);


// put the text in the plan 

// click the button to save the plan



//3. save events to local storage

var totalPlan = [];


$(".save").on("click",function(){
   console.log(this.parentElement);
   console.log(this);
   console.log(this.parentElement);
   var userPlan = this.parentElement.children[1].value;
   var timeEl = this.parentElement.children[0].innerText;
   console.log(userPlan);
   console.log(timeEl);

   if (this.matches("button") === true) {
       console.log("true");
       var user = {
           Date : currentDay,
           Time : timeEl,
           Plans : userPlan
       }
       console.log(user);
       totalPlan.push(user);
       console.log(totalPlan);
       //get the data-name 
       //save the date in the array
       //save it in local storage
       storeTotalPlan();
   } 
})


function storeTotalPlan(){
    localStorage.setItem("plan", JSON.stringify(totalPlan));
}
// get item from local storage

// check the current time and change background color accordingly

function checkHour(){
    var currentHour = m.format("H");
    console.log(currentHour);
    for (var i=0; i< 9;i++){
        var currentRow = $(".container")[0].children[i]
        console.log(currentRow.children[1]);
        var planText = currentRow.children[1];
        var hourNumber = currentRow.getAttribute("id");
        console.log(hourNumber);
        
        if (hourNumber < currentHour){
            planText.setAttribute("class", "col-sm-9 plan grey");   
        }
        else if(hourNumber > currentHour){
            planText.setAttribute("class", "col-sm-9 plan pink");
        }
        else{
            planText.setAttribute("class", "col-sm-9 plan green");
        }
    
    }




    $("div.row").each(function(){

    })

}