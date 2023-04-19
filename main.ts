namespace SpriteKind {
    export const cursor = SpriteKind.create()
}
/**
 * changed the appearance of the letters
 */
/**
 * My function
 */
/**
 * Added the call to my function
 */
/**
 * Changed the appearance of the character
 */
/**
 * Added the call to my function
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    findLetterByPos()
    posLetter = word.indexOf(letter)
    if (posLetter < 0) {
        body += 1
        sayCorrectOrIncorrect("INCORRECT!")
        if (body == 1) {
            head = sprites.create(img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 e e e e e e e 1 1 1 1 1 
                1 1 1 e e e e e e e e e 1 1 1 1 
                1 1 e e e d e e e e e e e 1 1 1 
                1 e e d d d d e e e d e e e 1 1 
                1 d d d d d d d d d d d d d 1 1 
                1 d d d d f d d d f d d d d 1 1 
                1 d d d d f d d d f d d d d 1 1 
                1 d d d d d d d d d d d d d 1 1 
                1 d d d d d d d d d d d d d 1 1 
                1 d d d d f f f f f d d d d 1 1 
                1 1 d d d d d d d d d d d 1 1 1 
                1 1 1 d d d d d d d d d 1 1 1 1 
                1 1 1 1 d d d d d d d 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `, SpriteKind.Player)
            head.setPosition(30, 10)
        }
        if (body == 2) {
            body2 = sprites.create(img`
                ................
                ................
                ................
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                .......2........
                ................
                ................
                ................
                ................
                ................
                `, SpriteKind.Player)
            body2.setPosition(30, 27)
        }
        if (body == 3) {
            rightLeg = sprites.create(img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ........8.......
                .........8......
                .........8......
                ..........8.....
                ..........8.....
                ...........8....
                ............8...
                ............8...
                .............8..
                .............8..
                ................
                ................
                ................
                `, SpriteKind.Player)
            rightLeg.setPosition(30, 35)
        }
        if (body == 4) {
            leftLeg = sprites.create(img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ......8.........
                .....8..........
                .....8..........
                ....8...........
                ....8...........
                ...8............
                ..8.............
                ..8.............
                .8..............
                .8..............
                ................
                ................
                ................
                `, SpriteKind.Player)
            leftLeg.setPosition(30, 35)
        }
        if (body == 5) {
            rightArm = sprites.create(img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ........2.......
                .........2......
                .........2......
                ..........d.....
                ..........d.....
                ...........d....
                ............d...
                ............d...
                .............d..
                .............d..
                ................
                ................
                ................
                `, SpriteKind.Player)
            rightArm.setPosition(30, 18)
        }
        if (body == 6) {
            leftArm = sprites.create(img`
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ......2.........
                .....2..........
                .....2..........
                ....d...........
                ....d...........
                ...d............
                ..d.............
                ..d.............
                .d..............
                .d..............
                ................
                ................
                ................
                `, SpriteKind.Player)
            leftArm.setPosition(30, 18)
        }
        if (body == 6) {
            game.splash("You lose!")
            game.reset()
        }
    } else {
        sayCorrectOrIncorrect("CORRECT!")
        while (posLetter >= 0) {
            score += 1
            letterChoosen = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            if (letter == "A") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . f f . . f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "B") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "C") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "D") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "E") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "F") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "G") {
                varG = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . f f f f . . . . 
                    . . . . f f . . f f f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varG)
            }
            if (letter == "H") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "I") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "J") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . f f . . . f f . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "K") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f . . . . . f f . . . . 
                    . . . f f . . . . f f . . . . . 
                    . . . f f . . . f f . . . . . . 
                    . . . f f . . f f . . . . . . . 
                    . . . f f . f f . . . . . . . . 
                    . . . f f f f f f . . . . . . . 
                    . . . f f f . . f f . . . . . . 
                    . . . f f . . . f f . . . . . . 
                    . . . f f . . . . f f . . . . . 
                    . . . f f . . . . f f f . . . . 
                    . . . f f . . . . . f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "L") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . . f f f f f f f . . . . 
                    . . . . . f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "M") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f . . . . . . . f f . . 
                    . . . f f f . . . . . f f f . . 
                    . . . f f f . . . . . f f f . . 
                    . . . f f f f . . . f f f f . . 
                    . . . f f . f f . f f . f f . . 
                    . . . f f . f f . f f . f f . . 
                    . . . f f . . f f f . . f f . . 
                    . . . f f . . f f f . . f f . . 
                    . . . f f . . . f . . . f f . . 
                    . . . f f . . . . . . . f f . . 
                    . . . f f . . . . . . . f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "N") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f . . . . . f f . . . 
                    . . . . f f f . . . . f f . . . 
                    . . . . f f f . . . . f f . . . 
                    . . . . f f f f . . . f f . . . 
                    . . . . f f . f f . . f f . . . 
                    . . . . f f . f f f . f f . . . 
                    . . . . f f . . f f . f f . . . 
                    . . . . f f . . . f f f f . . . 
                    . . . . f f . . . . f f f . . . 
                    . . . . f f . . . . f f f . . . 
                    . . . . f f . . . . . f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "O") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "P") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "Q") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . f f . . f f f f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "R") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f f f f f f . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . f f . . f f f . . . . . 
                    . . . . f f . . . f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "S") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f f f f . . . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . . . f f f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "T") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "U") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "V") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f f . . f f f . . . . 
                    . . . . . f f . . f f . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "W") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f . . . . . . . f f . . 
                    . . . f f . . . . . . . f f . . 
                    . . . f f . . . . . . . f f . . 
                    . . . f f . . . f . . . f f . . 
                    . . . f f . . f f f . . f f . . 
                    . . . f f . . f f f . . f f . . 
                    . . . f f . f f . f f . f f . . 
                    . . . f f . f f . f f . f f . . 
                    . . . . f f f f . f f f f . . . 
                    . . . . f f f . . . f f f . . . 
                    . . . . . f f . . . f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "X") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . f f . . f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . f f . . f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "Y") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . f f . . . . f f . . . . 
                    . . . . . f f . . f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            if (letter == "Z") {
                varLetter = img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . f f . . . . . 
                    . . . . . . . . f f . . . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . f f . . . . . . . . 
                    . . . . . f f . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `
                letterChoosen.setImage(varLetter)
            }
            letterChoosen.setPosition(52 + 16 * posLetter, 40)
            if (score == wordLen) {
                game.splash("You Win!")
                for (let index = 0; index < 4; index++) {
                    effects.confetti.startScreenEffect()
                }
                game.reset()
                effects.confetti.endScreenEffect()
            }
            console.log("sobrando - " + word.substr(posLetter + 1, word.length))
            if (word.substr(posLetter + 1, word.length).indexOf(letter) >= 0) {
                posLetter = posLetter + word.substr(posLetter + 1, word.length).indexOf(letter) + 1
            } else {
                posLetter = -1
            }
            console.log("posNova - " + posLetter)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (posY == maxY || posY == maxY - 16 && posX == 144) {
        posY = 63
    } else {
        posY += 16
    }
    cursor2.y = posY
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (posX == 16) {
        if (posY == maxY) {
            posX = 128
        } else {
            posX = 144
        }
    } else {
        posX += -16
    }
    cursor2.x = posX
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (posX == maxX || posX == maxX - 16 && posY == maxY) {
        posX = 16
    } else {
        posX = posX + 16
    }
    cursor2.x = posX
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (posY == 63) {
        if (posX == 144) {
            posY = 79
        } else {
            posY = 95
        }
    } else {
        posY += -16
    }
    cursor2.y = posY
})
function sayCorrectOrIncorrect (text: string) {
    if (text == "INCORRECT!") {
        game.splash("INCORRECT!")
        effects.confetti.endScreenEffect()
    } else if (text == "CORRECT!") {
        game.splash("CORRECT!")
        for (let index = 0; index < 10; index++) {
            effects.confetti.startScreenEffect()
        }
    }
}
function findLetterByPos () {
    letter = String.fromCharCode(65 + ((posY - 47) / 16 - 1) * 9 + (posX / 16 - 1))
}
/**
 * Changed the appearance of the background (added lines for the correct letters to go, changed the background)
 */
/**
 * Changed the words to be 5 5-letter words beginning with each letter (besides "X" and "Z."
 */
/**
 * Changed the way the characters look
 */
/**
 * Added a confetti animation for when the game is won.
 */
let varG: Image = null
let varLetter: Image = null
let letterChoosen: Sprite = null
let score = 0
let leftArm: Sprite = null
let rightArm: Sprite = null
let leftLeg: Sprite = null
let rightLeg: Sprite = null
let body2: Sprite = null
let head: Sprite = null
let body = 0
let letter = ""
let posLetter = 0
let word = ""
let wordLen = 0
let maxY = 0
let posY = 0
let posX = 0
let maxX = 0
let cursor2: Sprite = null
let varI = null
let varH = null
let varF = null
let varE = null
let varD = null
let varC = null
let varB = null
let varA = null
scene.setBackgroundColor(1)
scene.setBackgroundImage(img`
    999efeeeeeeeeeeeeffeeeeeeffee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999eeeeeeffeeefffeeeeeeeeffee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999eeeefeeeeeffeeeefeeeeeeeff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999
    999efeefeefeefeeeeeeeffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999
    999999eeef999ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999f999f99999999999999999999
    999999eeee99ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999f999f99999999999999999999
    999999feee9ff999999999999999999999999999999999999999999999999999999999999999ff9999999999999999999999999999999999999999999999999f9999f99f99f9999f9999999999999999
    999999feeeff9999999999999999999999999999999999999999999999999999999999999f9f11f9999999999999999999999999999999999999999999999999f999fffffff999f99999999999999999
    999999eeeef9999999999999999999999999999999999999999999999999999999999999f1f1111ff999999999999999999999999999999999999999999999999f9f5555555f9f999999999999999999
    999999eeee9999999999999999999999999999999999999999999999999999999999999f111111111f999999999999999999999999999999999999999999999999f555555555f9999999999999999999
    999999eefe999999999999999999999999999999999999999999999999999999999999f11111111111f999999999999999999999999999999999999999999ff99f55555555555f99ff99999999999999
    999999efee99999999999999999999999999999999999ff999999999999999999999999fffffffffff999999999999999999999999999999999999999999999ff5555555555555ff9999999999999999
    999999eeee99999999999999999999999999999999f9f11f99999999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555f99999999999999999
    999999eeee9999999999999999999999999999999f1f1111ff999999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555f99999999999999999
    999999eeee999999999999999999999999999999f111111111f999999999999999999999999999999999999999999999999999999999999999999999999ffffff5555555555555ffffff999999999999
    999999eeff99999999999999999999999999999f11111111111f9999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555f99999999999999999
    999999eeff999999999999999999999999999999fffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555f99999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff9999999999999999999999999ff5555555555555ff9999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f9f11f9999999999999999999999ff99f55555555555f99ff99999999999999
    999999eeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999f1f1111ff9999999999999999999999999f555555555f9999999999999999999
    999999eeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999f111111111f99999999999999999999999f9f5555555f9f999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999f11111111111f999999999999999999999f999fffffff999f99999999999999999
    999999ffee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffff999999999999999999999f9999f99f99f9999f9999999999999999
    999999ffee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999f999f99999999999999999999
    999999eeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999f999f99999999999999999999
    999999eeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999
    999999eeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999
    999999efee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999effe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeef999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeef999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeef999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eefe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eefe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999efee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee9999999999999999999999999999999999999ffffffffff999999ffffffffff999999ffffffffff999999ffffffffff999999ffffffffff999999999999999999999999999999999999999
    999999eeee9999999999999999999999999999999999999ffffffffff999999ffffffffff999999ffffffffff999999ffffffffff999999ffffffffff999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
cursor2 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.cursor)
maxX = 144
posX = 16
posY = 63
maxY = 95
let words = [
"ABYSS",
"ASKED",
"AMBER",
"ABOUT",
"ABOVE",
"BAKER",
"BLUFF",
"BLOCK",
"BADGE",
"BAGEL",
"COACH",
"CABLE",
"CALVE",
"CAMEO",
"CARGO",
"DANCE",
"DASHY",
"DEMON",
"DANDY",
"DEBIT",
"EAGLE",
"EARLY",
"ELDER",
"EJECT",
"EMPTY",
"FALSE",
"FERRY",
"FIELD",
"FLAME",
"FOCUS",
"GLASS",
"GRAVE",
"GHOST",
"GRIND",
"GUESS",
"HABIT",
"HOTEL",
"HELLO",
"HOUSE",
"HYENA",
"IMAGE",
"INPUT",
"IDIOM",
"IGLOO",
"IVORY",
"JELLY",
"JEANS",
"JOKER",
"JUDGE",
"JUICE",
"KAYAK",
"KHAKI",
"KIOSK",
"KNIFE",
"KNEAD",
"LABEL",
"LEASH",
"LOBBY",
"LOATH",
"LIVER",
"MAGMA",
"MAFIA",
"MELON",
"MIDST",
"MONTH",
"NASAL",
"NURSE",
"NERVE",
"NOISY",
"NUDGE",
"OASIS",
"OFTEN",
"OLIVE",
"OPERA",
"ORDER",
"PANEL",
"PARTY",
"PEACH",
"PURGE",
"PIVOT",
"QUEEN",
"QUART",
"QUITE",
"QUOTE",
"QUAIL",
"RABIT",
"RADIO",
"REALM",
"RIDGE",
"ROGUE",
"SALAD",
"SCARY",
"SENSE",
"SHADE",
"SNACK",
"TABLE",
"TEMPO",
"THROW",
"TOAST",
"TREAD",
"UNITE",
"UPSET",
"UNION",
"ULTRA",
"UNDER",
"VAGUE",
"VAULT",
"VERSE",
"VIDEO",
"VOUCH",
"WAGON",
"WATER",
"WEIRD",
"WHINE",
"WORST",
"YACHT",
"YEARN",
"YIELD",
"YOUNG",
"YEAST"
]
cursor2.setPosition(posX, posY)
let btA = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . f f . . f f . . . f . 
    . f . . . f f . . f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f f f f f f f . . f . 
    . f . . f f f f f f f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btA.setPosition(posX, posY)
let btB = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f f f f f . . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f f f f f . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btB.setPosition(posX + 16, posY)
let btC = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . . . f f f f . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btC.setPosition(posX + 16 * 2, posY)
let btD = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f f f f f . . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f f f f f . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btD.setPosition(posX + 16 * 3, posY)
let btE = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f f f f f f . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btE.setPosition(posX + 16 * 4, posY)
let btF = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f f f f f . . . . f . 
    . f . . f f f f f f . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btF.setPosition(posX + 16 * 5, posY)
let btG = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . f f f f . . f . 
    . f . . f f . . f f f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . . . f f f f . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btG.setPosition(posX + 16 * 6, posY)
btF = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f f f f f f f . . f . 
    . f . . f f f f f f f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btF.setPosition(posX + 16 * 7, posY)
let btI = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btI.setPosition(posX + 16 * 8, posY)
let btJ = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . . f f . . . f f . . f . 
    . f . . . . f f f f f . . . f . 
    . f . . . . . f f f . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btJ.setPosition(posX, posY + 16)
let btK = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . f f . . . . . f f . . f . 
    . f . f f . . . . f f . . . f . 
    . f . f f . . . f f . . . . f . 
    . f . f f . . f f . . . . . f . 
    . f . f f . f f . . . . . . f . 
    . f . f f f f f f . . . . . f . 
    . f . f f f . . f f . . . . f . 
    . f . f f . . . f f . . . . f . 
    . f . f f . . . . f f . . . f . 
    . f . f f . . . . f f f . . f . 
    . f . f f . . . . . f f . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btK.setPosition(posX + 16, posY + 16)
let btL = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . . f f f f f f f . . f . 
    . f . . . f f f f f f f . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btL.setPosition(posX + 16 * 2, posY + 16)
let btM = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . f f . . . . . . . f f f . 
    . f . f f f . . . . . f f f f . 
    . f . f f f . . . . . f f f f . 
    . f . f f f f . . . f f f f f . 
    . f . f f . f f . f f . f f f . 
    . f . f f . f f . f f . f f f . 
    . f . f f . . f f f . . f f f . 
    . f . f f . . f f f . . f f f . 
    . f . f f . . . f . . . f f f . 
    . f . f f . . . . . . . f f f . 
    . f . f f . . . . . . . f f f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btM.setPosition(posX + 16 * 3, posY + 16)
let btN = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f . . . . . f f . f . 
    . f . . f f f . . . . f f . f . 
    . f . . f f f . . . . f f . f . 
    . f . . f f f f . . . f f . f . 
    . f . . f f . f f . . f f . f . 
    . f . . f f . f f f . f f . f . 
    . f . . f f . . f f . f f . f . 
    . f . . f f . . . f f f f . f . 
    . f . . f f . . . . f f f . f . 
    . f . . f f . . . . f f f . f . 
    . f . . f f . . . . . f f . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btN.setPosition(posX + 16 * 4, posY + 16)
let btO = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . . . f f f f . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btO.setPosition(posX + 16 * 5, posY + 16)
let btP = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f f f f f . . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f f f f f . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btP.setPosition(posX + 16 * 6, posY + 16)
let btQ = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . f f f f . . . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . f f . f f . . f . 
    . f . . f f . f f . f f . . f . 
    . f . . f f . . f f f f . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . . . f f f f f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btQ.setPosition(posX + 16 * 7, posY + 16)
let btR = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f f f f f . . . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f f f f f f . . . f . 
    . f . . f f f f f f . . . . f . 
    . f . . f f . . f f f . . . f . 
    . f . . f f . . . f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btR.setPosition(posX + 16 * 8, posY + 16)
let btS = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f f f f . . . . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . . . . . f f f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . . . f f f f . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btS.setPosition(posX, posY + 32)
let btT = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f f f f f f f . . f . 
    . f . . f f f f f f f f . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btT.setPosition(posX + 16, posY + 32)
let btU = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . . . f f f f . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btU.setPosition(posX + 16 * 2, posY + 32)
let btV = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f f . . f f f . . f . 
    . f . . . f f . . f f . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btV.setPosition(posX + 16 * 3, posY + 32)
let btW = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . f f . . . . . . . f f f . 
    . f . f f . . . . . . . f f f . 
    . f . f f . . . . . . . f f f . 
    . f . f f . . . f . . . f f f . 
    . f . f f . . f f f . . f f f . 
    . f . f f . . f f f . . f f f . 
    . f . f f . f f . f f . f f f . 
    . f . f f . f f . f f . f f f . 
    . f . . f f f f . f f f f . f . 
    . f . . f f f . . . f f f . f . 
    . f . . . f f . . . f f . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btW.setPosition(posX + 16 * 4, posY + 32)
let btX = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . . f f . . f f . . . f . 
    . f . . . f f . . f f . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . f f . . f f . . . f . 
    . f . . . f f . . f f . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btX.setPosition(posX + 16 * 5, posY + 32)
let btY = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . f f . . . . f f . . f . 
    . f . . . f f . . f f . . . f . 
    . f . . . f f . . f f . . . f . 
    . f . . . . f f f f . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btY.setPosition(posX + 16 * 6, posY + 32)
let btZ = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f . . . . . . . . . . . . f . 
    . f . . f f f f f f f f . . f . 
    . f . . f f f f f f f f . . f . 
    . f . . . . . . . . f f . . f . 
    . f . . . . . . . f f . . . f . 
    . f . . . . . . f f . . . . f . 
    . f . . . . . f f . . . . . f . 
    . f . . . . f f . . . . . . f . 
    . f . . . f f . . . . . . . f . 
    . f . . f f . . . . . . . . f . 
    . f . . f f f f f f f f . . f . 
    . f . . f f f f f f f f . . f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
btZ.setPosition(posX + 16 * 7, posY + 32)
while (wordLen == 0 || wordLen == 5) {
    word = words[randint(0, words.length)]
    wordLen = word.length
    console.log(word)
    console.log(wordLen)
}
let wordScene = img`
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    `
for (let index2 = 0; index2 <= wordLen - 1; index2++) {
    wordScene.drawLine(16 * index2, 16, 16 * index2 + 14, 16, 2)
}
let wordSceneVar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
wordSceneVar.setImage(wordScene)
wordSceneVar.setPosition(104, 40)
