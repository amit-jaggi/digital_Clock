function showTime () {
    var time = new Date();
    var hour = time.getHours();     // 0 - 23
    var min = time.getMinutes();    // 0 - 59
    var sec = time.getSeconds();    // 0 - 59
    let session = "AM";

    if(hour >= 12) {
        hour = hour - 12;
        session = "PM";
    }

    if(hour === 0) {
        hour = 12;
    }

    hour = (hour < 10) ? '0' + hour : hour; 
    min = (min < 10) ? '0' + min : min; 
    sec = (sec < 10) ? '0' + sec : sec; 

    document.querySelector("#current_hour").innerText = hour;
    document.querySelector("#current_minutes").innerText = min;
    document.querySelector("#current_seconds").innerText = sec;
    document.querySelector("#current_am_pm").innerText = session;
    setTimeout(showTime, 1000);
}
showTime();




function setTime() {
    let wakeUp = parseInt(document.getElementById("wakeup_time").value);
    let lunch = parseInt(document.getElementById("lunch_time").value);
    let dinner = parseInt(document.getElementById("dinner_time").value);

    
    setTimeout(function () {
        var HH = new Date().getHours();

        if (wakeUp == HH) {
            document.getElementById("display_image").style.backgroundImage = "url('./assets/wake-up-image.png')";
            document.getElementById("display_text").innerText = "Wake Wake !!";
            document.getElementById("display_text").style.fontFamily = 'Ubuntu', sans-serif;
        }
        else if (lunch == HH) {
            document.getElementById("display_image").style.backgroundImage = "url('./assets/lunch-image.png')";
            document.getElementById("display_text").innerText = "let's have some lunch!!";
            document.getElementById("display_text").style.fontFamily = 'Ubuntu', sans-serif;
        }
        else if(dinner == HH) {
            document.getElementById("display_image").style.backgroundImage = "url('./assets/dinner-image.jpg')";
            document.getElementById("display_text").innerText = "Dinner Time !!";
            document.getElementById("display_text").style.fontFamily = 'Ubuntu', sans-serif;
        }
        else {
            document.getElementById("display_image").style.backgroundImage = "url('./assets/default-image.png')";
            document.getElementById("display_text").innerText = "leisure time !!";
            document.getElementById("display_text").style.fontFamily = 'Ubuntu', sans-serif;
        }
    }, 1000);
}
setTime();






