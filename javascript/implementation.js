/*
    @function moveBgLeft
    @param {number} x
    @returns {number}
    @desc return the input param minus 10 (or some other value that you like)
*/
function moveBgLeft() {}

/*
    @function keyUpHandler
    @param {number} keyCode
    @param {boolean} upArrowPressed
    @param {boolean} rightArrowPressed
    @param {boolean} downArrowPressed
    @param {boolean} leftArrowPressed
    @param {boolean} shiftKeyPressed 
    @returns { object }
    @desc returns all the above params but flips a switch setting val to false
*/
function keyUpHandler( keyCode = 0, upArrowPressed = false, rightArrowPressed = false, downArrowPressed = false, leftArrowPressed = false, shiftKeyPressed = false ) {
    // you need a bunch of if statements here...


    return {
        upArrowPressed,
        rightArrowPressed,
        downArrowPressed,
        leftArrowPressed,
        shiftKeyPressed
    };
}

/*
    @function keyDownHandler
    @param {number} keyCode
    @param {boolean} upArrowPressed
    @param {boolean} rightArrowPressed
    @param {boolean} downArrowPressed
    @param {boolean} leftArrowPressed
    @param {boolean} shiftKeyPressed 
    @returns { object }
    @desc returns all the above params but flips a switch setting val to true 
*/
function keyUpHandler( keyCode = 0, upArrowPressed = false, rightArrowPressed = false, downArrowPressed = false, leftArrowPressed = false, shiftKeyPressed = false ) {
    // you need a bunch of if statements here...


    return {
        upArrowPressed,
        rightArrowPressed,
        downArrowPressed,
        leftArrowPressed,
        shiftKeyPressed
    };
}

/*
    @function shouldJumpNow
    @param {number} y
    @returns {number}
    @desc subtracts a value from y to simulate jump
*/
function shouldJumpNow() {}
