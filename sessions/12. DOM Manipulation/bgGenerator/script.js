var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body_style = document.getElementsByTagName('body')[0].style;
var h3 = document.querySelector('h3');
var button_random = document.querySelector('button')


function changeBackgroundColor(event) {
    body_style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")"

    h3.textContent = body_style.background
}

function generateRandomolor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function changeRandomBackgroundColor(event){
    color1.value = generateRandomolor()
    color2.value = generateRandomolor()
    changeBackgroundColor()    
}

// Set the default colors as background
changeBackgroundColor()

// Set the color when the color input is being changed
color1.addEventListener('input', changeBackgroundColor)
color2.addEventListener('input', changeBackgroundColor)

button_random.addEventListener('click', changeRandomBackgroundColor)