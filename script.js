const time = setInterval(() => {

    let dateToday = new Date()
    let hour = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    document.getElementById("hour").innerHTML =  hour;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
});
