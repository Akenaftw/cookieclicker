function update(){
    document.getElementById("text").value=linecount;
    document.title = linecount + " lines of code";
    document.getElementById("amounthtm") .innerHTML = "You know " + htm + " hotkeys";
    document.getElementById("costhtm") .innerHTML = "Upgrade costs " + ((htm+1) * 12) + " lines of code";
    document.getElementById("amountcss"). innerHTML= "You know " + css + " hotkeys";
    document.getElementById("costcss") .innerHTML= "Upgrade costs " + ((css+1) * 60) + " lines of code";
    document.getElementById("amountjavasc"). innerHTML= "You know " + javasc + " hotkeys";
    document.getElementById("costjavasc") .innerHTML= "Upgrade costs " + ((javasc+1) * 200) + " lines of code";
    document.getElementById("amountphp"). innerHTML= "You know " + php + " hotkeys";
    document.getElementById("costphp") .innerHTML= "Upgrade costs " + ((php+1) * 600) + " lines of code";
    document.getElementById("linespersecond" ) .innerHTML= "You are writing " +(((htm)+(css*2)+(javasc*4)+(php*8))*multiplier) + " lines per/s";
}
var linecount = 0;
var htm = 0;
var css = 0;
var javasc= 0;
var php= 0;
var multiplier = 1;

function timer(){
    linecount = linecount + htm;
    linecount = linecount + css*2;
    linecount = linecount + javasc*4;
    linecount = linecount + php*8;
    update()
}
setInterval(timer,1000)

function add(){
    linecount = linecount + 1;
    update();
}

function save(){
    localStorage.setItem("linecount", linecount);
    localStorage.setItem("htm", htm);
    localStorage.setItem("css", css);
    localStorage.setItem("javasc", javasc);
    localStorage.setItem("php", php);
}

function load(){
    linecount= localStorage.getItem("linecount");
    linecount= parseInt(linecount);
    htm= localStorage.getItem("htm");
    htm= parseInt(htm);
    css= localStorage.getItem("css");
    css= parseInt(css);
    javasc= localStorage.getItem("javasc");
    javasc= parseInt(javasc);
    php= localStorage.getItem("php");
    php= parseInt(php);
    update();
}

function buyhtm(){
    if (linecount >= ((htm+1) * 12)){
        linecount = linecount - ((htm + 1) * 12);
        htm = htm + 1;
        update()
        }
}

function buycss(){
        if (linecount >= ((css+1) * 60)){
            linecount = linecount - ((css + 1) * 60);
            css = css + 1;
            update()
        }
}
function buyjavasc(){
    if (linecount >= ((javasc+1) * 200)){
        linecount = linecount - ((javasc + 1) * 200);
        javasc = javasc + 1;
        update()
    }
}

function buyphp() {
    if (linecount >= ((php + 1) * 600)){
        linecount = linecount - ((php + 1) * 600);
        php = php + 1;
        update()
    }
}


