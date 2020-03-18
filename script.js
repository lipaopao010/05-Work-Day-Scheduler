//1. set a few variables
var m = moment();
var current = moment().toString();
var currentTime = moment().toObject()

//2 . Display the current date.
var currentDay = m.format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

//3. call the function to check current hour, and change the background color
checkHour();

//4. call the function to get the saved text from local storage

var totalPlan = [];
init();

//5. this is the function to get the data from local storage
function init(){
    var storedData = JSON.parse(localStorage.getItem("plan"));
    if (storedData !== null){
     totalPlan = storedData;
    }
    fillInPlan();
}


//6. This is the function to save plans
$(".save").on("click",function(){

   var userPlan = this.parentElement.children[1].value;
   var timeEl = this.parentElement.children[0].innerText;

   if (this.matches("button") === true) {
       if (totalPlan !== []){
            for (i=0;i<totalPlan.length;i++){
                    var timeID = totalPlan[i].Time;
                    if (timeEl === timeID){
                        totalPlan.splice(i,1);
                    }
                }
            }           
        var user = {
                Date : currentDay,
                Time : timeEl,
                Plans : userPlan
            }
            
        totalPlan.push(user); 
        storeTotalPlan();  
   }        
})

7. //this is the function to save data into local storage
function storeTotalPlan(){
    localStorage.setItem("plan", JSON.stringify(totalPlan));
}


8. // this is the function to check current hour and change backgroud color accordingly
function checkHour(){
    var currentHour = m.format("H");
    for (var i=0; i< 9;i++){
        var currentRow = $(".container")[0].children[i]
        var planText = currentRow.children[1];
        var hourNumber = currentRow.getAttribute("id");
        
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
}




9. // this is the function to put the saved data into the html
function fillInPlan(){
    for (i=0;i<totalPlan.length;i++){
        if(totalPlan[i].Date === currentDay){
            var timeID = totalPlan[i].Time;
            var planEl = totalPlan[i].Plans;
            $("#" + timeID).val(planEl);
        }
        else{
            //clear local storage if the date is not same
            localStorage.clear();
            init();
        }
    }
}