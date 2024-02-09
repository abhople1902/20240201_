
String.prototype.replaceAt = function (index, char) {
    let a = this.split("");
    a[index] = char;
    return a.join("");
}


/**
 * 
 * @param {Number} min the minimum value of the range specified 
 * @param {Number} max the maximum value of the range specified
 * @returns {Number} the randomly generated number
 */
function deltaX(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function deltaY(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 
 * @param {Number} randnum1 is the random value generated for X-axis
 * @param {Number} randnum2 is the random value generated for Y-axis
 * @returns {String} the box with a star containing rows of strings with
 * empty spaces and a star
 */
function buildBoxWithStar(randnum1, randnum2) {
    
    setInterval(() => {
        console.clear();
        var s = "|";
        for(var i = 0; i < 7; i += 1) {
            s += " ";
        }
        s += "|"
        let s1 = "|";
        for(let i = 0; i < 7; i += 1) {
            s1 += " ";
        }
        s1 += "|";

        console.log("__".repeat(4)); //top border
        str1 = " ";
        str2 = "*";
        for (let i = 0; i < 5; i++) {
            if(i == randnum2) {
                s = s.replaceAt(randnum1, "*");
                console.log(s);
                // ProcessingInstruction.stdout.write(str1.repeat(randnum1 - 1) + str2.repeat(1) + str1.repeat(5 - randnum1) + "\n");
            }
            else {
                console.log(s1);
            }
        }
        console.log("__".repeat(4)); //bottom border

        randnum1 = randnum1 + deltaX(-1, 1);
        if(randnum1 < 0 || randnum1 > 4){
            while(randnum1 < 0 || randnum1 > 4){
                randnum1 = randnum1 + deltaX(-1, 1);
            }
        }

        randnum2 = randnum2 + deltaX(-1, 1);
        if(randnum2 < 0 || randnum2 > 2){
            while(randnum2 < 0 || randnum2 > 2){
                randnum2 = randnum2 + deltaX(-1, 1);
            }
        }

    }, 250);
}


//To generate random number in first iteration
function randNum1() {
    return Math.floor(Math.random() * 7);
}

function randNum2() {
    return Math.floor(Math.random() * 5);
}

function dummy() {
    return 0;
}

// let randnum1 = randNum1();
// let randnum2 = randNum2();

// var timerIsRunning = true;
// while (timerIsRunning) {
//     let randnum1 = randNum1();
//     let randnum2 = randNum2();
//     buildBoxWithStar(randnum1, randnum2);
// }
buildBoxWithStar(randNum1(), randNum2());

