//% weight=70 icon="\uf1ec" color=#00bbd7 block="Detector"
namespace detector {
    //% blockId=show_number block="Show a number %num"
    let initialValue = 0

    export function showNumber(num: number = 0): void {
      initialValue = num
    }

    //% blockId=sbrick_measured_value
    //% block="measured value %num from %f"
    export function measuredValue(num: number = 0, f: number = 10): number{
      if(num < initialValue*(100-f)/100 || initialValue*(100+f)/100 < num){
        return 1
      }else{
        return 0
      }
    }
}
