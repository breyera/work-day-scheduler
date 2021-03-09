const mom = moment();
const saveBtn = $(".save-button");
const discardBtn = $(".discard");

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

var scheduledText;
var eventTime;

saveBtn.on("click", function() {
    scheduledText = $(this).siblings(".render").children("input").val(); //input is child of .render class object
    console.log(scheduledText);
    eventTime = $(this).siblings("td").eq(0).text(); //.hour is on parent not sibling
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(scheduledText));

    changeColor();
    showText();

});

discardBtn.on("click", function() {
    scheduledText = $(this).siblings(".render").children("input").val("");
    scheduledText = $(this).siblings(".render").children("input").val();
    eventTime = $(this).siblings("td").eq(0).text();
    localStorage.setItem(eventTime, JSON.stringify(scheduledText));

    changeColor();
    showText();
});

function showText () {
    var saveText9 = JSON.parse(localStorage.getItem("9:00"));
    $("#9").children().eq(0).val("");
    $("#9").children().eq(0).val(saveText9);

    var saveText10 = JSON.parse(localStorage.getItem("10:00"));
    $("#10").children().eq(0).val("");
    $("#10").children().eq(0).val(saveText10);

    var saveText11 = JSON.parse(localStorage.getItem("11:00"));
    $("#11").children().eq(0).val("");
    $("#11").children().eq(0).val(saveText11);

    var saveText12 = JSON.parse(localStorage.getItem("12:00"));
    $("#12").children().eq(0).val("");
    $("#12").children().eq(0).val(saveText12);

    var saveText1 = JSON.parse(localStorage.getItem("1:00"));
    $("#1").children().eq(0).val("");
    $("#1").children().eq(0).val(saveText1);

    var saveText2 = JSON.parse(localStorage.getItem("2:00"));
    $("#2").children().eq(0).val("");
    $("#2").children().eq(0).val(saveText2);

    var saveText3 = JSON.parse(localStorage.getItem("3:00"));
    $("#3").children().eq(0).val("");
    $("#3").children().eq(0).val(saveText3);

    var saveText4 = JSON.parse(localStorage.getItem("4:00"));
    $("#4").children().eq(0).val("");
    $("#4").children().eq(0).val(saveText4);

    var saveText5 = JSON.parse(localStorage.getItem("5:00"));
    $("#5").children().eq(0).val("");
    $("#5").children().eq(0).val(saveText5);
};