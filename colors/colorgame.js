var num_squares = 16;
var colors = generate_random_colors(num_squares);

background_color = "rgb(32, 32, 32)";
targetcolor = pickColor();

var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var msgdisplay = document.getElementById("message");
var h1_color = document.querySelector("h1");
var reset_btn = document.querySelector("#reset");
h1_color.style.backgroundColor = "steelblue";

reset_btn.addEventListener("click", function() {
    colors = generate_random_colors(num_squares);
    targetcolor = pickColor();
    colordisplay.textContent = targetcolor;
    for (var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1_color.style.backgroundColor = "steelblue";
    reset_btn.textContent = "New Colors";
    msgdisplay.textContent = ""
});

colordisplay.textContent = targetcolor;

for (var i = 0; i < squares.length; ++i) {
    // setup initial colors
    squares[i].style.backgroundColor = colors[i];

    // setup click listeners
    squares[i].addEventListener("click", function() {
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor === targetcolor) {
            h1_color.style.backgroundColor = "steelblue";
            msgdisplay.textContent = "Correct !!"
            changeAllSquaresColor(clickedcolor);
            new_colors_btn.textContent = "Play Again?"
        } else {
            msgdisplay.textContent = "Try Again"
            this.style.backgroundColor = background_color;
        }
    });
}


function changeAllSquaresColor(color) {
    for (var i = 0; i < colors.length; ++i) {
        squares[i].style.backgroundColor = color;
    }    
}

// function to pick the target color
function pickColor() {
    var random_color = Math.floor(Math.random() * colors.length);
    return colors[random_color];
}

// function to generate a random number in the given range (only integral part)
// generated number is inclusive of min and max
function generate_random_num(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate a random color
function get_random_color() {
    var r = generate_random_num(0, 255);
    var g = generate_random_num(0, 255);
    var b = generate_random_num(0, 255);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generate_random_colors(num_colors) {
    var colors_array = [];

    for (var i = 0; i < num_colors; ++i) {
        var c = get_random_color();
        colors_array.push(c);
    }

    return colors_array;
}