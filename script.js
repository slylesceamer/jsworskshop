// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    getColor(m);
    backgroundFive(m);
    fontSize(h);
    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    $("#txt").html(h + ":" + m + ":" + s + ampm)
    setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  function getColor(i) {
    if (i % 2 === 0) {
     $("#txt").css({ color: "purple"});
    } else {
     $("#txt").css({ color: "red"});
    }
  }

  function backgroundFive(i) {

     if (i % 10 === 0) {
         $("body").css({ "background-color": "yellow"}); 
     } else if (i % 5 === 0){
         $("body").css({ "background-color": "orange"}); 
     }
}

function fontSize(i) {
     
     if (i % 2 ===0) {
         $("#txt").css({ fontSize: "20px"});
     } else {
           $("#txt").css({ fontSize: "30px"});
     }
}

  startTime();
});
