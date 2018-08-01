//% weight=70 icon="\uf1ec" color=#00bbd7
namespace detector {
    //% blockId=show_number block="Show a number %num"
    export function showNumber(num: number = 0): void {
    }

    //% blockId="test_color" block="%strip|show color %rgb=neopixel_colors" 
    //% weight=85 blockGap=8
    export function showColor(rgb: number) {
        this.setAllRGB(rgb);
        this.show();
    }
}
