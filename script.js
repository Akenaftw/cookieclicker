function update(){
    document.getElementById('text').value=linecount;
    document.title = linecount + "cookies";
    document.getElementById("amounthtm") .innerHTML = "You know " + htm + " hotkeys";
    document.getElementById("costhtm") .innerHTML = "Upgrade costs " + ((htm+1) * 12) + " lines of code";
    document.getElementById("amountcss"). innerHTML= "You know " + css + " hotkeys";
    document.getElementById("costcss") .innerHTML= "Upgrade costs " + ((css+1) * 15) + " lines of code";
    document.getElementById("linespersecond" ) .innerHTML= "You are writing " +(((htm)+(css*2))*multiplier) + " lines per/s";

}
var linecount = 0;
var htm = 0;
var css = 0;
var multiplier = 1;

function timer(){
    linecount = linecount + htm;
    linecount = linecount + css;
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

}

function load(){
    linecount= localStorage.getItem("linecount");
    linecount= parseInt(linecount);
    htm= localStorage.getItem(" htm");
    htm= parseInt(htm);
    css= localStorage.getItem("css");
    css= parseInt(css);
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
        if (linecount >= ((css+1) * 15)){
            linecount = linecount - ((css + 1) * 15);
            css = css + 1;
            update()
        }
    }


