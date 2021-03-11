const mom = moment();
const saveBtn = $(".save-button");
const discardBtn = $(".discard");

var renderTime = function () {
    $("#currentDayAndTime").text("Today is " + moment().format('MMMM Do YYYY, h:mm:ss a'));
}

$(document).ready(function() {
    renderTime();

    setInterval(renderTime, 1000);
    changeColor();

    setInterval(changeColor, 3600000);
    showText();
});

//updating row colors based on time
function changeColor() {
    var currentTime = moment().hours();

    $(".render").each(function() {
        var scheduledTime = parseInt($(this).attr("id"));
        console.log("==================");
        console.log("Current Time Hour: " + currentTime);
        console.log("Scheduled Time Hour: " + scheduledTime);

        
        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
            console.log("Current Time Hour > Scheduled Time Hour = Past");
            console.log("==================");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            console.log("Current Time Hour < Scheduled Time Hour = Future");
            console.log("==================");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
            console.log("Current Time Hour == Scheduled Time Hour = Present");
            console.log("==================");
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
    localStorage.setItem(eventTime, scheduledText);
});

discardBtn.on("click", function() {
    scheduledText = $(this).siblings(".render").children("input").val("");
    scheduledText = $(this).siblings(".render").children("input").val();
    eventTime = $(this).siblings("td").eq(0).text();
    localStorage.setItem(eventTime, scheduledText);
});

function showText () {
    var saveText9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").children().eq(0).val("");
    $("#9").children().eq(0).val(saveText9);

    var saveText10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").children().eq(0).val("");
    $("#10").children().eq(0).val(saveText10);

    var saveText11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").children().eq(0).val("");
    $("#11").children().eq(0).val(saveText11);

    var saveText12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").children().eq(0).val("");
    $("#12").children().eq(0).val(saveText12);

    var saveText1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").children().eq(0).val("");
    $("#13").children().eq(0).val(saveText1);

    var saveText2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").children().eq(0).val("");
    $("#14").children().eq(0).val(saveText2);

    var saveText3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").children().eq(0).val("");
    $("#15").children().eq(0).val(saveText3);

    var saveText4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").children().eq(0).val("");
    $("#16").children().eq(0).val(saveText4);

    var saveText5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").children().eq(0).val("");
    $("#17").children().eq(0).val(saveText5);
};

// changeColor();
// showText();
