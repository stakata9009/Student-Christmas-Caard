function calc() {
    today = new Date();

    xmas = new Date("December 24, " + today.getFullYear());

    if (today > xmas) {
        xmas.setYear(today.getFullYear() + 1);
    }

    msPerDay = 24 * 60 * 60 * 1000;
    timeLeft = (xmas.getTime() - today.getTime());
    e_daysLeft = timeLeft / msPerDay;
    daysLeft = Math.floor(e_daysLeft);
    e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    hrsLeft = Math.floor(e_hrsLeft);
    e_minsLeft = (e_hrsLeft - hrsLeft) * 60;
    minsLeft = Math.floor(e_minsLeft);
    e_secsLeft = (e_minsLeft - minsLeft) * 60;
    secsLeft = Math.floor(e_secsLeft);

    var d = document.getElementsByClassName("xmas");

    d[0].innerHTML = daysLeft;
    d[1].innerHTML = hrsLeft;
    d[2].innerHTML = minsLeft;
    d[3].innerHTML = secsLeft;

}
setInterval(calc, 0);
