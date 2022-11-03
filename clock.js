function displayTime () {
    let currDate = new Date();
    let hours = currDate.getHours();
    let mins = currDate.getMinutes();
    let secs = currDate.getSeconds();
    let session = "AM";

    session = (hours >= 12) ? "PM" : "AM";

    hours = (hours == 0) ? 12 : ((hours > 12) ? (hours - 12): hours);

   
    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10? "0" + secs : secs;

    let time = hours + ":" + mins + ":" + secs + ":" + session;

    document.getElementById('clock').innerHTML = time;
    setTimeout(function(){displayTime()},1000);
}

displayTime();