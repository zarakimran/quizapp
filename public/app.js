// ---------Timer------------

// var mins = 00
// var sec = 00
// var milisec = 00


// var getmins = document.getElementById("mins")
// var getsec = document.getElementById("sec")
// var getmsec = document.getElementById("milisec")

// var interval;

// function timer(){
//     milisec++
//     getmsec.innerHTML = milisec;
//     if ( milisec >= 100){
//         sec++
//         getsec.innerHTML = sec
//         milisec = 00
//     }
//     else if ( sec >= 60){
//         mins++
//         getmins.innerHTML = mins
//         milisec = 00
//         sec = 00
//     }
    
// }

// function  start (){
//     interval = setInterval(timer , 10)
//     var btn = document.getElementById("start")
    
//     }


var quizSection = document.getElementById("quizSection")
quizSection.hidden= true;


var mins = 4
var sec = 60
var milisec = 100


var getmins = document.getElementById("mins")
var getsec = document.getElementById("sec")
var getmsec = document.getElementById("milisec")

var interval;

function timer(){
    milisec--
    getmsec.innerHTML = milisec;
    if ( milisec <= 00){
        sec--
        getsec.innerHTML = sec
        milisec = 100
    }
    else if ( sec <= 00){
        mins--
        getmins.innerHTML = mins
        milisec = 100
        sec = 60
    }
    else if ( mins < 0){
        pasue()
        quizSection.hidden= true;
        alert("Time UP!")
        alert("You Have Been Disqualified!")
       
    }
    
}

function  start (){
interval = setInterval(timer , 10)
var btn = document.getElementById("start")
quizSection.hidden = false;
}

function pasue(){
    clearInterval(interval)
    var btn = document.getElementById("start")
}


// -------------Question checker-----------------


function questionChecker(){
    pasue();
    var marks = 0
    var correctAns1 = document.getElementById("opt1")
    var option2 = document.getElementById("opt2")
    var option3 = document.getElementById("opt3")
    var option4 = document.getElementById("opt4")
    if (correctAns1.checked == true){
        marks++
        
    }
    


    var correctAns2 = document.getElementById("opt5")
    var option6 = document.getElementById("opt6")
    var option7 = document.getElementById("opt7")
    var option8 = document.getElementById("opt8")
    if (correctAns2.checked == true){
        marks++
        
    }
   



var correctAns3 = document.getElementById("opt9")
    var option10 = document.getElementById("opt10")
    var option11 = document.getElementById("opt11")
    var option12 = document.getElementById("opt12")
    if (correctAns3.checked == true){
        marks++
        
    }
   



var correctAns4 = document.getElementById("opt13")
    var option14 = document.getElementById("opt14")
    var option15 = document.getElementById("opt15")
    var option16 = document.getElementById("opt16")
    if (correctAns4.checked == true){
        marks++
    
    }


    var correctAns5 = document.getElementById("opt17")
    var option14 = document.getElementById("opt18")
    var option15 = document.getElementById("opt19")
    var option16 = document.getElementById("opt20")
    if (correctAns5.checked == true){
        marks++
    
    }

    
   alert("Your Final  Marks Are " + marks)
}