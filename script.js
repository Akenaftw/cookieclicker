function update(){
    document.getElementById('text').value=cookiecount;
    document.title = cookiecount + "cookies";
    document.getElementById("amountautoclick") .innerHTML = "You know " + autoclick + " hotkeys";
    document.getElementById("costautoclick") .innerHTML = "Upgrade costs " + ((autoclick+1) * 12) + " lines of code";
    document.getElementById("amountcss"). innerHTML= "You know " + css + " hotkeys";
    document.getElementById("costcss") .innerHTML= "Upgrade costs " + ((css+1) * 15) + " lines of code";
    document.getElementById("linespersecond" ) .innerHTML= "You are writing " +(((autoclick)+(css*2))*multiplier) + " lines per/s";

}
var cookiecount = 0;
var autoclick = 0;
var css = 0;
var multiplier = 1;

function timer(){
    cookiecount = cookiecount + autoclick;
    cookiecount = cookiecount + css;
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
    localStorage.setItem("css", css);

}

function load(){
    cookiecount= localStorage.getItem("cookiecount");
    cookiecount= parseInt(cookiecount);
    autoclick -localStorage.getItem(" autoclick");
    autoclick= parseInt(autoclick);
    css -localStorage.getItem("css");
    css= parseInt(css);
    update();
}
function buyautoclick(){
    if (cookiecount >= ((autoclick+1) * 12)){
        cookiecount = cookiecount - ((autoclick + 1) * 12);
        autoclick = autoclick + 1;
        update()
        }
}
    function buycss(){
        if (cookiecount >= ((css+1) * 15)){
            cookiecount = cookiecount - ((css + 1) * 15);
            css = css + 1;
            update()
        }
    }


