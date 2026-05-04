function gettime() {
    const time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;

   
    let update = document.getElementById("clock");
    update.innerHTML = `${hours}:${minutes}:${seconds}`;

}

setInterval(gettime,1000);
gettime();