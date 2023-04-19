namespace SpriteKind {
    export const cursor = SpriteKind.create()
}
/**
 * My function
 */
/**
 * Changed the appearance of the character
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    findLetterByPos()
    posLetter = word.indexOf(letter)
    if (posLetter < 0) {
        body += 1
        sayCorrectOrIncorrect("INCORRECT!")
        if (body == 1) {
            head = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . e e e e e e e . . . . . 
                . . . e e e e e e e e e . . . . 
                . . e e e e d d e e e e e . . . 
                . e e d d d d d d d e e e e . . 
                . d d d d d d d d d d d d d . . 
                . d d d f d d d d d f d d d . . 
                . d d d f d d d d d f d d d . . 
                . d d d d d d d d d d d d d . . 
                . d d d d d d d d d d d d d . . 
                . d d d d f f f f f d d d d . . 
                . . d d d d d d d d d d d . . . 
                . . . d d d d d d d d d . . . . 
                . . . . d d d d d d d . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            head.setPosition(30, 11)
        }
        if (body == 2) {
            body2 = sprites.create(img`
                ................
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
                ................
                ................
                ................
                ................
                ................
                `, SpriteKind.Player)
            body2.setPosition(30, 28)
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
                .............1..
                .............11.
                ................
                ................
                ................
                `, SpriteKind.Player)
            rightLeg.setPosition(30, 36)
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
                .1..............
                11..............
                ................
                ................
                ................
                `, SpriteKind.Player)
            leftLeg.setPosition(30, 36)
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
            rightArm.setPosition(30, 19)
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
            leftArm.setPosition(30, 19)
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
 * Added to the background and added spaces for the correctly guessed letters to go
 */
/**
 * Changed the array of possible words to 5 5-letter words beginning with each letter (except for "X" and "Z"
 */
/**
 * Added the call to my function
 */
/**
 * Added the call to my function
 */
/**
 * Added a confetti animation for when the game is won.
 */
/**
 * changed the appearance of the letters
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
    999efeeeeeeeeeeefffeeeeeeeeefe9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999eeeeeeeeeeeeeffeeeeeeeeeefe9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999eeeeeeeefffefeeeeeeeeeeeeef9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999efeeeeefeeeefeeeeeeeeefffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999ff9999999999999
    999999eeef999f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999f9f11f999999999999
    999999ffee99f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999f999f999999999999999999f1f1111ff9999999999
    999999ffee9f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f999f999f99999999999999999f111111111f999999999
    999999eeeef999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f9999f99f99f9999f999999999999f11111111111f99999999
    999999eeee99999999999999999999999999999999999999999999999999ff9999999999999999999999999999999999999999999999999f999fffffff999f99999999999999fffffffffff999999999
    999999eeee99999999999999999999999999999999999999999999999f9f11f9999999999999999999999999999999999999999999999999f9f5555555f9f99999999999999999999999999999999999
    999999efee9999999999999999999999999999999999999999999999f1f1111ff999999999999999999999999999999999999999999999999f555555555f999999999999999999999999999999999999
    999999eeff999999999999999999999999999999999999999999999f111111111f999999999999999999999999999999999999999999ff99f55555555555f99ff9999999999999999999999999999999
    999999eeef99999999999999999999999999999999999999999999f11111111111f9999999999999999999999999999999999999999999ff5555555555555ff999999999999999999999999999999999
    999999eeff999999999999999999999999999999999999999999999fffffffffff999999999999999999999999999999999999999999999f5555555555555f9999999999999999999999999999999999
    999999eeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555f9999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff5555555555555ffffff99999999999999999999999999999
    999999eeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555f9999999999999999999999999999999999
    999999eeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555f9999999999999999999999999999999999
    999999eeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff5555555555555ff999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999ff999999999999999ff99f55555555555f99ff9999999999999999999999999999999
    999999efee9999999999999999999999999999999999999ff999999999999999999999999999999999999999f9f11f9999999999999999999f555555555f999999999999999999999999999999999999
    999999eeee9999999999999999999999999999999999f9f11f9999999999999999999999999999999999999f1f1111ff9999999999999999f9f5555555f9f99999999999999999999999999999999999
    999999eeee999999999999999999999999999999999f1f1111ff9999999999999999999999999999999999f111111111f99999999999999f999fffffff999f9999999999999999999999999999999999
    999999eeee99999999999999999999999999999999f111111111f99999999999999999999999999999999f11111111111f999999999999f9999f99f99f9999f999999999999999999999999999999999
    999999effe9999999999999999999999999999999f11111111111f99999999999999999999999999999999fffffffffff99999999999999999f999f999f9999999999999999999999999999999999999
    999999eeef99999999999999999999999999999999fffffffffff9999999999999999999999999999999999999999999999999999999999999f999f999f9999999999999999999999999999999999999
    999999eefe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999efee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999effe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999feee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999feee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeef999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeef999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999effe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eefe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffef9999999999999999999999999999999999999ffffffffff999999ffffffffff999999ffffffffff999999ffffffffff999999ffffffffff999999999999999999999999999999999999999
    999999eeee9999999999999999999999999999999999999ffffffffff999999ffffffffff999999ffffffffff999999ffffffffff999999ffffffffff999999999999999999999999999999999999999
    999999feee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999eefe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999feef999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999ffef999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999fffe999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
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
"RADAR",
"ROBOT",
"REBEL",
"RHINO",
"RIVAL",
"SALAD",
"SCENT",
"SHADE",
"SYRUP",
"SLACK",
"TABLE",
"TEETH",
"THINK",
"TIMID",
"TWIST",
"UNDER",
"UNION",
"UNITE",
"UNTIL",
"UPSET",
"VAPOR",
"VAULT",
"VERSE",
"VENUE",
"VIGOR",
"WASTE",
"WATER",
"WEIRD",
"WHIFF",
"WRIST",
"YACHT",
"YEARN",
"YEAST",
"YIELD",
"YOUTH",
"CHAPEL",
"TINSEL",
"CONSUMER",
"PRODUCER",
"TOMATOES",
"SLOWLY",
"POTATO",
"CARROT",
"ONION",
"JUNGLE",
"CRUMBLE",
"VOICE",
"PUZZLE",
"ANKLE",
"FRECKLE",
"KNUCKLE",
"SPRINKLE",
"DIMPLE",
"HABITAT",
"MIMICRY",
"PREDATOR",
"PREY",
"THIRTEEN",
"APPOINT",
"DISCUSS",
"DEMAND",
"REQUEST",
"RELIEF",
"CAPTURE",
"CULTURE",
"CREATURE",
"FIXTURE",
"FRACTURE",
"SPECIES",
"VIEW",
"DENSITY",
"FOURTEEN",
"PLENTY",
"RELAX",
"FIGURE",
"FIELD",
"TRAVEL",
"SENTENCE",
"SKETCH",
"RANCHER",
"BLEACHER",
"RICHER",
"VOUCHER",
"PITCHER",
"CATCHER",
"URBAN",
"SUBURBAN",
"RURAL",
"FORTY",
"ENGLISH",
"HALF",
"MINUS",
"PLUS",
"PERCENT",
"QUARTER",
"FINALLY",
"ZERO",
"FRESHER",
"USHER",
"GUSHER",
"CRUSHER",
"FLASHER",
"BALANCED",
"SLIDE",
"SWINGS",
"GOAL",
"COACH",
"BECAME",
"SHOWN",
"MINUTES",
"PASTURE",
"LECTURE",
"MIXTURE",
"MOISTURE",
"PUNCTURE",
"OMNIVORE",
"FIFTEEN",
"POLITE",
"PEANUT",
"SOCCER",
"BACKPACK",
"DECIDED",
"CONTAIN",
"COURSE",
"SURFACE",
"PRODUCE",
"PREACHER",
"PRESSURE",
"CLOSURE",
"TREASURE",
"PIONEER",
"MIGRATE",
"BUILDING",
"SPELLING",
"CLASS",
"FIFTY",
"NOTHING",
"REVISE",
"INSIDE",
"WHEELS",
"LEISURE",
"SEIZURE",
"PLEASURE",
"VULTURE",
"RUPTURE",
"ERRATIC",
"MORAINE",
"CIRQUE",
"MONOLITH",
"EVALUATE",
"SOLUTION",
"SIXTEEN",
"CHICKEN",
"ELEPHANT",
"ISLAND",
"GORILLA",
"DOLPHIN",
"MACHINE",
"TICKET",
"DIET",
"PUPPET",
"BANQUET",
"BLANKET",
"GADGET",
"MUSKET",
"POET",
"SQUATTER",
"STRIKE",
"WATT",
"CIRCUIT",
"SIXTY",
"SYSTEM",
"BUFFALO",
"MONKEY",
"WOLVES",
"KANGAROO",
"FORCE",
"BROUGHT",
"AUDIT",
"CREDIT",
"HERMIT",
"VOMIT",
"HABIT",
"BANDIT",
"BROWSER",
"MEMORY",
"EXPLAIN",
"ADAGE",
"COURAGE",
"LANGUAGE",
"LUGGAGE",
"STORAGE",
"BANDAGE",
"CABBAGE",
"CARRIAGE",
"DAMAGE",
"GARBAGE",
"DELTA",
"COLLEGE",
"DEGREE",
"RHOMBUS",
"EQUATION",
"AVERAGE",
"FILLED",
"PLEDGE",
"BRIDGE",
"RIDGE",
"WEDGE",
"LEDGE",
"PORRIDGE",
"GLOBE",
"PUBLIC",
"PRIVATE",
"ACADEMIC",
"OBJECT",
"CASTLE",
"KNIGHT",
"QUEEN",
"PRINCE",
"KINGDOM",
"ALONE",
"GHOST",
"ROBOT",
"PROGRAM",
"COMPOSE",
"COASTAL",
"SOAPY",
"TOASTER",
"OWNER",
"BOOMTOWN",
"PETITION",
"SLAVERY",
"FUGITIVE",
"SOLO",
"DUET",
"MATERIAL",
"SPECIAL",
"HEAVY",
"TRIO",
"CHOIR",
"INCLUDE",
"HOMEWORK",
"LOWER",
"BONY",
"STROLLER",
"DECODE",
"MOLTEN",
"ENGINEER",
"STATIC",
"POSITIVE",
"NEGATIVE",
"SQUARE",
"PERHAPS",
"HAMMER",
"NAIL",
"SUDDENLY",
"CHAIN",
"WRENCH",
"ADOPT",
"BOTHER",
"CONGRESS",
"COMMENT",
"MONSTER",
"PARALLEL",
"SERIES",
"CHARGE",
"EXPORT",
"IMPORT",
"HOTEL",
"GUEST",
"READY",
"ANYTHING",
"ELEVATOR",
"ENERGY",
"SUBJECT",
"EUROPE",
"UMBRELLA",
"BUBBLE",
"HUSBAND",
"BUCKET",
"PUBLISH",
"SNUGGLE",
"RATION",
"STOCK",
"DROUGHT",
"AQUEDUCT",
"REGION",
"RETURN",
"BELIEVE",
"JOINED",
"MEMBERS",
"CONTEST",
"REJECT",
"CELLS",
"UNIVERSE",
"COMPUTER",
"ABUSE",
"LUKEWARM",
"SALUTE",
"RUMOR",
"TUTOR",
"ACTOR",
"MAGNETIC",
"POLES",
"EIGHTY",
"SHERIFF",
"RODEO",
"EXERCISE",
"WAGON",
"TRAIN",
"RAILROAD",
"SADDLE",
"CALF",
"ALARM",
"CARBON",
"CHARCOAL",
"MARBLE",
"SCARLET",
"AURORA",
"QUADRANT",
"ORDERED",
"GRID",
"SEGMENT",
"WINDOW",
"EIGHTEEN",
"HEART",
"SITE",
"BURNING",
"CORNER",
"CURTAIN",
"PROBABLY",
"PARSLEY",
"TARDY",
"TARIFF",
"PRAIRIE",
"BARREL",
"HEXAGON",
"NINETY",
"FORWARD",
"PURPLE",
"CHORD",
"PORCH",
"WRITTEN",
"PURPOSE",
"REASON",
"KEPT",
"INTEREST",
"BERRY",
"CHERUB",
"MERIT",
"PERISH",
"MERCY",
"ELECTION",
"NINETEEN",
"SCORE",
"COUSIN",
"PRESENT",
"CHARM",
"FORMAT",
"PORTRAIT",
"MERGE",
"SQUIRT",
"SERMON",
"VERDICT",
"BLEARY",
"LEARNING",
"ANGLE",
"OBTUSE",
"ACUTE",
"VERTEX",
"FINISHED",
"AMUSE",
"BESIDE",
"CONCERN",
"THORN",
"SWORD",
"MILLION",
"CLEARING",
"YEARLY",
"CAREER",
"MERELY",
"SINCERE",
"ROTATION",
"SYMMETRY",
"KITCHEN",
"DINING",
"PANTRY",
"ORNAMENT",
"STORM",
"AFFORD",
"RAISED",
"BURDEN",
"PURCHASE",
"PLURAL",
"SURGEON",
"ENDURE",
"JUDICIAL",
"BRANCH",
"DISTRICT",
"REPLY",
"WHETHER",
"CLOTHES",
"FLOWERS",
"SCAN",
"DELETE",
"ADDRESS",
"DESCRIBE",
"STERN",
"MATURE",
"OBSCURE",
"SURELY",
"ASSURE",
"MANURE",
"DIRTY",
"CURB",
"RADIUS",
"DIAMETER",
"ACTRESS",
"THEATRE",
"SOLVE",
"APPEAR",
"METAL",
"DRAMATIC",
"EITHER",
"NEITHER",
"GOOSE",
"VILLAGE",
"ALOOF",
"MOODY",
"RACCOON",
"ASKEW",
"JEWEL",
"MOOSE",
"OUNCE",
"FACTORS",
"RESULT",
"CAMERA",
"VIDEO",
"IMAGE",
"FRAME",
"MOVIES",
"ZOOM",
"COOKIES",
"FLOODING",
"COOKOUT",
"WOODLAND",
"MISTOOK",
"SPOOKY",
"PARTIAL",
"DECADE",
"CENTURY",
"OUTSIDE",
"RELEASE",
"ALREADY",
"INSTEAD",
"PHRASE",
"FRACTION",
"INSECURE",
"ILLEGAL",
"ORANGE",
"BANANA",
"LAUGHED",
"LEMON",
"QUITE",
"TYPE",
"REACTION",
"ADOPTION",
"ILLICIT",
"IMMATURE",
"MIRROR",
"BREEZE",
"CALM",
"METHOD",
"SECTION",
"DEVOTION",
"WITHIN",
"IMMOBILE",
"IMMORAL",
"IRRITATE",
"RIBBON",
"QUANTITY",
"AMOUNT",
"SCALE",
"REMOVE",
"ALTHOUGH",
"BROKEN",
"MOMENT",
"ECOLOGY"
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
while (wordLen == 0 || wordLen < 7) {
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
