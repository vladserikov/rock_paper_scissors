const body = document.querySelector('body');
const header = document.querySelector('header');


function colorRandom () {
    let red = ranom(),
        blue = ranom(),
        green = ranom();
    
    return `rgb(${red},${green},${blue})`
}
function ranom() {
    return Math.floor(Math.random() * 255);
}

function colorTransform() {
    body.style.backgroundColor = colorRandom();
    header.style.color = colorRandom();
}
setInterval(colorTransform, 5000);

