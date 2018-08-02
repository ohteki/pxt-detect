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

    //% blockId="test_color" block="%strip|show color %rgb"
    //% weight=85 blockGap=8
    export function showColor(strip: number, rgb: number) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `);
    }
}
