//% weight=70 icon="\uf1ec" color=#00bbd7 block="Detector"
namespace detector {
    let initialValue = 0

    //% blockId=set_initial_value block="the initial value %num"
    export function setInitialValue(num: number = 0): number {
      return num
    }

    //% blockId=Evaluating_measured_value
    //% block="%num|changed %f| from %init"
    export function Evaluating(num: number = 0, f: number = 10, init: number = initialValue): number{
      if(num < init*(100-f)/100 || init*(100+f)/100 < num){
        return 1
      }else{
        return 0
      }
    }

    //% blockId=Evaluating_measured_value_boolean
    //% block="%num|changed %f| from %init"
    export function measuredValue(num: number = 0, f: number = 10, init: number = initialValue): boolean{
      if(num < init*(100-f)/100 || init*(100+f)/100 < num){
        return 1
      }else{
        return 0
      }
    }
}
