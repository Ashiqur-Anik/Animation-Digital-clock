function clock() {
    const houre = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const piriod = document.getElementById('piriod');
    const hh = document.getElementById('hh');
    const mm = document.getElementById('mm');
    const ss = document.getElementById('ss')

    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    am = (h >= 12) ? "PM" : 'AM';

    if (h > 12) {
        h = h - 12
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    houre.innerHTML = h + "<br><span>hours</span>";
    minutes.innerHTML = m + "<br><span>minutes</span>";
    seconds.innerHTML = s + "<br><span>seconds</span>";
    piriod.innerText = am

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

}

setInterval(clock, 1000)