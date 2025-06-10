let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let sec_1 = (new Date().getSeconds() / 60) * 360;
    sec.style.transform = `rotate(${sec_1}deg)`;
    let min_1 = (new Date().getMinutes() / 60) * 360;
    min.style.transform = `rotate(${min_1}deg)`;
    let hr_1 = (new Date().getHours() / 12) * 360 + min_1 / 12;
    hr.style.transform = `rotate(${hr_1}deg)`;
}, 1000);

function showTime(){  
    var date = new Date();
    var h = date.getHours();  
    var m = date.getMinutes();  
    var s = date.getSeconds();  
    var session = "AM";  
    if(h == 0) {  
        h = 12;  
    }  
    if(h > 12) {  
        hh = h - 12;  
        session = "PM";  
    }  
    h = (h < 10) ? "0" + h : h;  
    m = (m < 10) ? "0" + m : m;  
    s = (s < 10) ? "0" + s : s;  
    var time = h + ":" + m + ":" + s + " " + session;  
    document.getElementById("MyClockDisplay").innerText = time;  
    document.getElementById("MyClockDisplay").textContent = time;  
    setTimeout(showTime, 1000);  
}  
showTime();  



document.querySelector("changeMeToBlue")