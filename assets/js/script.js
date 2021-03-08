const mom = moment();
const saveBtn = $(".save-button");
const devareBtn = $(".discard");

$("#currentDay").text("Today is " + moment().format('LLLL'));
changeColor();

$(document).ready(function() {
    changeColor();
    showText();
});

//updating row colors based on time
function changeColor() {
    var currentTime = moment().hours();
    console.log("Current Time: " + currentTime);

    $(".render").each(function() {
        var scheduledTime = parseInt($(this).attr("id"));
        console.log(scheduledTime);

        
        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

var scheduvarext;
var eventTime;

saveBtn.on("click", function() {
    scheduvarext = $(this).siblings(".render").val();
    console.log(scheduvarext);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(scheduvarext));

    changeColor();
    showText();

});

devareBtn.on("click", function() {
    scheduvarext = $(this).siblings(".render").val("");
    scheduvarext = $(this).siblings(".render").val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(scheduvarext));

    changeColor();
    showText();
});

function showText () {
    var saveText9 = JSON.parse(localStorage.getItem("9:00"));
    $("#9").val("");
    $("#9").val(saveText9);

    var saveText10 = JSON.parse(localStorage.getItem("10:00"));
    $("#10").val("");
    $("#10").val(saveText10);

    var saveText11 = JSON.parse(localStorage.getItem("11:00"));
    $("#11").val("");
    $("#11").val(saveText11);

    var saveText12 = JSON.parse(localStorage.getItem("12:00"));
    $("#12").val("");
    $("#12").val(saveText12);

    var saveText1 = JSON.parse(localStorage.getItem("1:00"));
    $("#1").val("");
    $("#1").val(saveText1);

    var saveText2 = JSON.parse(localStorage.getItem("2:00"));
    $("#2").val("");
    $("#2").val(saveText2);

    var saveText3 = JSON.parse(localStorage.getItem("3:00"));
    $("#3").val("");
    $("#3").val(saveText3);

    var saveText4 = JSON.parse(localStorage.getItem("4:00"));
    $("#4").val("");
    $("#4").val(saveText4);

    var saveText5 = JSON.parse(localStorage.getItem("5:00"));
    $("#5").val("");
    $("#5").val(saveText5);
};