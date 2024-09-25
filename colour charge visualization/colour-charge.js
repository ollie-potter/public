var redQuarks = 0; var antiRedQuarks = 0; var redTotal = redQuarks+antiGreenQuarks+antiBlueQuarks;
var greenQuarks = 0; var antiGreenQuarks = 0; var greenTotal = greenQuarks+antiRedQuarks+antiBlueQuarks;
var blueQuarks = 0; var antiBlueQuarks = 0; var blueTotal = blueQuarks+antiRedQuarks+antiGreenQuarks;
var maximum = 0;
var waitFor = '';
var numKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function scaleValues(value, old_max, old_min, new_max, new_min, inverse=false){
    if(maximum == 0){return 0}
    //if (inverse){return round((new_min + (new_max - new_min) * ((value - old_min) / (old_max - old_min))))}
    else{return round(255-(new_min + (new_max - new_min) * ((value - old_min) / (old_max - old_min))))}
    // effectively the map() function in other languages

}

function setup(){
    createCanvas(windowWidth, windowHeight)
    background(0)
}

function draw(){
    redTotal = Number(redQuarks)+Number(antiGreenQuarks)+Number(antiBlueQuarks)
    greenTotal = Number(greenQuarks)+Number(antiRedQuarks)+Number(antiBlueQuarks)
    blueTotal = Number(blueQuarks)+Number(antiRedQuarks)+Number(antiGreenQuarks)

    maximum = max(max(redTotal, greenTotal), blueTotal)

    colour = [scaleValues(redTotal, maximum, 0, 0, 255), scaleValues(greenTotal, maximum, 0, 0, 255), scaleValues(blueTotal, maximum, 0, 0, 255)]
    background(colour[0], colour[1], colour[2], 40)
    textSize(40)
    stroke(0)
    strokeWeight(3)

    xOffset = -11
    yOffset = 13

    fill(255, 0, 0); 
    circle(1*windowWidth/4, 1*windowHeight/6, 80)
    if(waitFor == 'r'){fill(255);}else{fill(0);}
    text(redQuarks.toString(), (1*windowWidth/4)+xOffset, (1*windowHeight/6)+yOffset)

    fill(0, 255, 0)
    circle(2*windowWidth/4, 1*windowHeight/6, 80)
    if(waitFor == 'g'){fill(255);}else{fill(0);}
    text(greenQuarks.toString(), (2*windowWidth/4)+xOffset, (1*windowHeight/6)+yOffset)

    fill(0, 0, 255)
    circle(3*windowWidth/4, 1*windowHeight/6, 80)
    if(waitFor == 'b'){fill(255);}else{fill(0);}
    text(blueQuarks.toString(), (3*windowWidth/4)+xOffset, (1*windowHeight/6)+yOffset)

    fill(0, 255, 255)
    circle(1*windowWidth/4, 5*windowHeight/6, 80)
    if(waitFor == 'ar'){fill(255);}else{fill(0);}
    text(antiRedQuarks.toString(), (1*windowWidth/4)+xOffset, (5*windowHeight/6)+yOffset)

    fill(255, 0, 255)
    circle(2*windowWidth/4, 5*windowHeight/6, 80)
    if(waitFor == 'ag'){fill(255);}else{fill(0);}
    text(antiGreenQuarks.toString(), (2*windowWidth/4)+xOffset, (5*windowHeight/6)+yOffset)

    fill(255, 255, 0)
    circle(3*windowWidth/4, 5*windowHeight/6, 80)
    if(waitFor == 'ab'){fill(255);}else{fill(0);}
    text(antiBlueQuarks.toString(), (3*windowWidth/4)+xOffset, (5*windowHeight/6)+yOffset)

    strokeWeight(2)
    fill(0)
    text('Space to clear all', -170+windowWidth/2, 400+windowHeight/2)
    if(colour == [255, 255, 255].toString()){text('Colour charge is balanced!', -250+windowWidth/2, 25+windowHeight/2)} 
    if(colour == [0, 0, 0].toString()){
        fill(255)
        if (waitFor == ''){
            text('Select quark colour', -170+windowWidth/2, 25+windowHeight/2)
            xOffset = 13
            yOffset = 90
            text('q', (1*windowWidth/4)-xOffset, (1*windowHeight/6)+yOffset)
            text('w', (2*windowWidth/4)-xOffset, (1*windowHeight/6)+yOffset)
            text('e', (3*windowWidth/4)-xOffset, (1*windowHeight/6)+yOffset)
            text('a', (1*windowWidth/4)-xOffset, (5*windowHeight/6)-yOffset+20)
            text('s', (2*windowWidth/4)-xOffset, (5*windowHeight/6)-yOffset+20)
            text('d', (3*windowWidth/4)-xOffset, (5*windowHeight/6)-yOffset+20)
        }
        else{
            text('Select quark count', -170+windowWidth/2, 25+windowHeight/2)
            text('(Number key from 0-9)', -190+windowWidth/2, 125+windowHeight/2)
        }
    }
    
}

function keyTyped() {

    for(i in numKeys) {
        if (key == numKeys[i]) {
            if (waitFor == 'r') {redQuarks = i}
            if (waitFor == 'g') {greenQuarks = i}
            if (waitFor == 'b') {blueQuarks = i}
            if (waitFor == 'ar') {antiRedQuarks = i}
            if (waitFor == 'ag') {antiGreenQuarks = i}
            if (waitFor == 'ab') {antiBlueQuarks = i}
            waitFor = ''
            break
        }
    }

    if (key === "q") {waitFor = 'r'}
    if (key === "w") {waitFor = 'g'}
    if (key === "e") {waitFor = 'b'}
    if (key === "a") {waitFor = 'ar'}
    if (key === "s") {waitFor = 'ag'}
    if (key === "d") {waitFor = 'ab'}
    if (key === " ") {redQuarks = 0; blueQuarks = 0; greenQuarks = 0; antiRedQuarks = 0; antiGreenQuarks = 0; antiBlueQuarks = 0;}

}