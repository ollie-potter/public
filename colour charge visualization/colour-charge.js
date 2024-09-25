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
}

function draw(){
    print(redQuarks, antiGreenQuarks, antiBlueQuarks, redTotal)
    redTotal = Number(redQuarks)+Number(antiGreenQuarks)+Number(antiBlueQuarks)
    greenTotal = Number(greenQuarks)+Number(antiRedQuarks)+Number(antiBlueQuarks)
    blueTotal = Number(blueQuarks)+Number(antiRedQuarks)+Number(antiGreenQuarks)

    maximum = max(max(redTotal, greenTotal), blueTotal)

    colour = [scaleValues(redTotal, maximum, 0, 0, 255), scaleValues(greenTotal, maximum, 0, 0, 255), scaleValues(blueTotal, maximum, 0, 0, 255)]
    //print('red: '+redTotal+'/'+maximum, 'green: '+greenTotal+'/'+maximum, 'blue: '+blueTotal+'/'+maximum, )
    background(colour[0], colour[1], colour[2])
    textSize(40)
    stroke(0)
    strokeWeight(3)

    xOffset = -11
    yOffset = 13

    fill(255, 0, 0); 
    circle(1*windowWidth/4, 1*windowHeight/6, 80)
    fill(0);
    text(redQuarks.toString(), (1*windowWidth/4)+xOffset, (1*windowHeight/6)+yOffset)

    fill(0, 255, 0)
    circle(2*windowWidth/4, 1*windowHeight/6, 80)
    fill(0);
    text(greenQuarks.toString(), (2*windowWidth/4)+xOffset, (1*windowHeight/6)+yOffset)

    fill(0, 0, 255)
    circle(3*windowWidth/4, 1*windowHeight/6, 80)
    fill(0);
    text(blueQuarks.toString(), (3*windowWidth/4)+xOffset, (1*windowHeight/6)+yOffset)

    fill(0, 255, 255)
    circle(1*windowWidth/4, 5*windowHeight/6, 80)
    fill(0);
    text(antiRedQuarks.toString(), (1*windowWidth/4)+xOffset, (5*windowHeight/6)+yOffset)

    fill(255, 0, 255)
    circle(2*windowWidth/4, 5*windowHeight/6, 80)
    fill(0);
    text(antiGreenQuarks.toString(), (2*windowWidth/4)+xOffset, (5*windowHeight/6)+yOffset)

    fill(255, 255, 0)
    circle(3*windowWidth/4, 5*windowHeight/6, 80)
    fill(0);
    text(antiBlueQuarks.toString(), (3*windowWidth/4)+xOffset, (5*windowHeight/6)+yOffset)

    strokeWeight(2)
    if(colour == [255, 255, 255].toString()){text('Colour charge is balanced!', -250+windowWidth/2, 25+windowHeight/2)} else{print(colour)}

    
}

function keyTyped() {

    for(i in numKeys) {
        if (key == numKeys[i]) {

            print(i)
            if (waitFor == 'r') {redQuarks = i}
            if (waitFor == 'g') {greenQuarks = i}
            if (waitFor == 'b') {blueQuarks = i}
            if (waitFor == 'ar') {antiRedQuarks = i}
            if (waitFor == 'ag') {antiGreenQuarks = i}
            if (waitFor == 'ab') {antiBlueQuarks = i}
            waitFor = ''
            //console.log('r:',redQuarks, 'g:',greenQuarks, 'b:',blueQuarks, 'ar:',antiRedQuarks, 'ag:',antiGreenQuarks, 'ab',antiBlueQuarks)
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