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

    //% blockId=sbrick_measured_value
    //% block="measured value" shim=sbrick::measuredValue
    export function measuredValue(): number
    {
        return 0
    }
}
