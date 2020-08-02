images.create_image("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . . . . .
    . # . . .
    . . . . .
    . . . . .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . . # . .
    . # . . .
    . . . . .
    . . . . .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . . # . .
    . # . # .
    . . . . .
    . . . . .
    """).show_image(0)
images.create_image("""
    . . . . .
    . . # . .
    . # . # .
    . . . # .
    . . . . .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . . # . .
    . # . # .
    . . . # .
    . # # . .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . . # . .
    . # . # .
    . # . # .
    . # # . .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . . # . .
    . # . # .
    . # . # .
    . # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . # # . .
    . # . # .
    . # . # .
    . # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . # # # .
    . # . # .
    . # . # .
    . # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . # # # .
    . # # # .
    . # . # .
    . # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    """).show_image(0)
images.create_image("""
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . # # # .
    . # # # .
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    . # # # .
    # # # # .
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    . . . . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    # . . . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    # # . . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    # # # . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    # # # # #
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    # # # # #
    # # # # #
    # # # # .
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    """).show_image(0)
basic.pause(100)
images.create_image("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """).show_image(0)
basic.pause(1000)
basic.clear_screen()
basic.pause(2000)
是否可执行 = 1

def on_forever():
    if pins.digital_read_pin(DigitalPin.P1) == 1 and 是否可执行 == 1:
        images.create_image("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """).show_image(0)
    elif input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
        control.reset()
    else:
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
basic.forever(on_forever)
