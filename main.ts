//% weight=70 icon="\uf1ec" color=#00bbd7 block="Detector"
namespace detector {
    let initialValue = 0

    //% blockId=show_number block="Show a number %num"
    export function showNumber(num: number = 0): void {
      initialValue = num
    }

    //% blockId=sbrick_measured_value
    //% block="%num|changed %f|from %init"
    export function measuredValue(num: number = 0, f: number = 10, init: number = initialValue): number{
      if(num < init*(100-f)/100 || init*(100+f)/100 < num){
        return 1
      }else{
        return 0
      }
    }
}
