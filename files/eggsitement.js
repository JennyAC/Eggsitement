// Jennifer Cox - u3167197
// Assessment3 - Eggsitement one-page website

//JSLint directive to stop JSLint complaining about not recogising Raphael and jQuery
/*global Raphael, $*/


//force the css to reload to get around an error in the Galleria settings
/*$('#section3-egg').click(function () {
    'use strict'
    css.reload();
});*/

//Raphael.js code to specify the paper the egg and dye will be drawn on
var paper = new Raphael("egg-dye-animation", 700, 750);

//draw an oval and make it egg-coloured. The parameters are left, top, width and height.
var egg = paper.ellipse(380, 100, 55, 70);
egg.attr({
    fill: "#ead5af",
    stroke: "black",
    "stroke-width": 2
});

//finds the top and left attribute of the Raphael element that was clicked on
function moveEgg(event) {
    'use strict';
    // event.target gets me a DOM object not the raphael SVG object. The DOM object has a raphaelID
    // I can use to get the SVG object. From there I can access the attributes I need.
    var beaker = paper.getById(event.currentTarget.raphaelid),
        top = beaker.attrs.x,
        left = beaker.attrs.y,
        width = beaker.attrs.width,
        height = beaker.attrs.height,
//work out the destination value for top and left so that the moved egg will be centred in the beaker
        dest_x = top + (height / 2) - 23,
        dest_y = left + (width / 2),
//set the dest_colour variable to the colour assigned as myColour for the clicked beaker
        dest_colour = beaker.myColour;

//moves the centre point of the egg to the destination point and changes its colour to that dye colour
    egg.animate(
        {cx: dest_x, cy: dest_y},
        1000,
        'linear',
        function () {
            egg.animate(
                {fill: dest_colour},
                1200,
                'linear',
                
                //move the egg back to its starting point
                function () {
                    egg.animate(
                        {cx: 380, cy: 80},
                        500  //sets the speed at which it moves back
                    );
                }
            );
        }
    );
}


//call up the beaker images and the dye colours
//identify the colour of the dye so that I can change the egg to match it when dipped 
var beakerBlueBkg = paper.image("images/beaker.png", 0, 250, 150, 199);
var beakerBlue = paper.image("images/dye-blue.png", 0, 250, 150, 199).click(moveEgg);
beakerBlue.myColour = '#0000FF';

var beakerGreenBkg = paper.image("images/beaker.png", 150, 250, 150, 199);
var beakerGreen = paper.image("images/dye-green.png", 150, 250, 150, 199).click(moveEgg);
beakerGreen.myColour = '#00FF00';

var beakerYellowBkg = paper.image("images/beaker.png", 300, 250, 150, 199);
var beakerYellow = paper.image("images/dye-yellow.png", 300, 250, 150, 199).click(moveEgg);
beakerYellow.myColour = '#fffc00';

var beaker = paper.image("images/beaker.png", 450, 250, 150, 199);
var beakerRed = paper.image("images/dye-red.png", 450, 250, 150, 199).click(moveEgg);
beakerRed.myColour = '#FF0000';

var beaker = paper.image("images/beaker.png", 600, 250, 150, 199);
var beakerPink = paper.image("images/dye-pink.png", 600, 250, 150, 199).click(moveEgg);
beakerPink.myColour = '#fd46c7';

//move the egg when a beaker image is clicked
$('image').click(moveEgg);

//change the egg back to egg colour by clicking on the egg
function colourMeEgg(e) {
    'use strict';
    egg.attr("fill", "#ead5af");
}
egg.click(colourMeEgg);


var currentSection = 'intro';

//When you click on a new egg, hide the previous section and show the new one
function showSection(section) {
    'use strict';
    if (currentSection) {
        $('#' + currentSection).hide();
    }
    
    currentSection = section;

    $('#' + section).show();
}

