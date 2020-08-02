images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . . . . .
    . # . . .
    . . . . .
    . . . . .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . . # . .
    . # . . .
    . . . . .
    . . . . .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . . # . .
    . # . # .
    . . . . .
    . . . . .
    `).showImage(0)
images.createImage(`
    . . . . .
    . . # . .
    . # . # .
    . . . # .
    . . . . .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . . # . .
    . # . # .
    . . . # .
    . . # . .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . . # . .
    . # . # .
    . . . # .
    . # # . .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . . # . .
    . # . # .
    . # . # .
    . # # . .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . . # . .
    . # . # .
    . # . # .
    . # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . # # . .
    . # . # .
    . # . # .
    . # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . # # # .
    . # . # .
    . # . # .
    . # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . # # # .
    . # # # .
    . # . # .
    . # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `).showImage(0)
images.createImage(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . # # # .
    . # # # .
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    . # # # .
    # # # # .
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    . . . . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    # . . . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    # # . . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    # # # . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    # # # # #
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    # # # # #
    # # # # #
    # # # # .
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    `).showImage(0)
basic.pause(100)
images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `).showImage(0)
basic.pause(1000)
basic.clearScreen()
basic.pause(2000)
radio.setGroup(8)
let 是否可执行 = 1
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && 是否可执行 == 1) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
    } else {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        control.reset()
    }
    if (是否可执行 == 1) {
        radio.sendNumber(pins.digitalReadPin(DigitalPin.P1))
    }
})
