//% weight=70 icon="\uf1ec" color=#00bbd7 block="Detector"
namespace detector {
    //% blockId=show_number block="Show a number %num"
    export function showNumber(num: number = 0): void {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `);
    }

    //% blockId="neopixel_shift" block="shift pixels by %offset" blockGap=8
    //% weight=40
    export function shift(offset: number = 1): void {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `);
    }
}
