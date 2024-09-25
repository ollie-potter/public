var redQuarks = 0;
var greenQuarks = 0;
var blueQuarks = 0;
var antiRedQuarks = 0;
var antiGreenQuarks = 0;
var antiBlueQuarks = 0;
var maximum = 0;
var waitFor = '';
var numKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function scaleValues(value, old_max, old_min, new_max, new_min, inverse=false){
    if(maximum == 0){return 0}
    if (inverse){return round((new_min + (new_max - new_min) * ((value - old_min) / (old_max - old_min))))}
    else{return round(255-(new_min + (new_max - new_min) * ((value - old_min) / (old_max - old_min))))}
    // effectively the map() function in other languages

}

function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    colour = [scaleValues(redQuarks+antiGreenQuarks+antiBlueQuarks, maximum, 0, 0, 255), scaleValues(greenQuarks+antiRedQuarks+antiBlueQuarks, maximum, 0, 0, 255), scaleValues(blueQuarks+antiRedQuarks+antiGreenQuarks, maximum, 0, 0, 255)]

    maximum = max(max(redQuarks+antiGreenQuarks+antiBlueQuarks, greenQuarks+antiRedQuarks+antiBlueQuarks), blueQuarks+antiGreenQuarks+antiRedQuarks)
    background(colour[0], colour[1], colour[2])

    fill(255, 0, 0)
    circle(1*windowWidth/4, 1*windowHeight/6, 40)
    //text()
    fill(0, 255, 0)
    circle(2*windowWidth/4, 1*windowHeight/6, 40)
    fill(0, 0, 255)
    circle(3*windowWidth/4, 1*windowHeight/6, 40)
    fill(0, 255, 255)
    circle(1*windowWidth/4, 5*windowHeight/6, 40)
    fill(255, 0, 255)
    circle(2*windowWidth/4, 5*windowHeight/6, 40)
    fill(255, 255, 0)
    circle(3*windowWidth/4, 5*windowHeight/6, 40)
    
}

function keyTyped() {

    for(i in numKeys) {
        if (key == numKeys[i]) {
            if (waitFor == 'r') {redQuarks = i.toString()}
            if (waitFor == 'g') {greenQuarks = i.toString()}
            if (waitFor == 'b') {blueQuarks = i.toString()}
            if (waitFor == 'ar') {antiRedQuarks = i.toString()}
            if (waitFor == 'ag') {antiGreenQuarks = i.toString()}
            if (waitFor == 'ab') {antiBlueQuarks = i.toString()}
            console.log('r:',redQuarks, 'g:',greenQuarks, 'b:',blueQuarks, 'ar:',antiRedQuarks, 'ag:',antiGreenQuarks, 'ab',antiBlueQuarks)
            break
        }
    }

    if (key === "q") {waitFor = 'r'}
    if (key === "w") {waitFor = 'g'}
    if (key === "e") {waitFor = 'b'}
    if (key === "a") {waitFor = 'ar'}
    if (key === "s") {waitFor = 'ag'}
    if (key === "d") {waitFor = 'ab'}

}