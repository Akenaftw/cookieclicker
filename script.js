function update(){
    document.getElementById('text').value=cookiecount;
    document.title = cookiecount + "cookies";
    document.getElementById("amountautoclick") .innerHTML = "You know " + autoclick + " hotkeys";
    document.getElementById("costautoclick") .innerHTML = "Upgrade costs " + ((autoclick+1) * 12) + " lines of code";

}
var cookiecount = 0;
var autoclick = 0;

function timer(){
    cookiecount = cookiecount + autoclick;
    update()
}
setInterval(timer,1000)

function add(){
    cookiecount = cookiecount + 1;
    update();
}

function save(){
    localStorage.setItem("cookiecount",cookiecount);
    localStorage.setItem("autoclick", autoclick);

}

function load(){
    cookiecount= localStorage.getItem("cookiecount");
    cookiecount= parseInt(cookiecount);
    autoclick -localStorage.getItem(" autoclick");
    autoclick= parseInt(autoclick);
    update();
}
function buyautoclick(){
    if (cookiecount >= ((autoclick+1) * 12)){
        cookiecount = cookiecount - ((autoclick + 1) * 12);
        autoclick = autoclick + 1;
        update()
        }
}
