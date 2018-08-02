//% weight=70 icon="\uf1ec" color=#4ab500 block="Detector"
namespace detector {
    //% blockId=set_initial_value block="the initial value %num|of -"
    export function setInitialValue(num: number = 0): number {
      return num
    }

    //% blockId=Evaluating_measured_value block="%num|changed %f| from %init|of -"
    export function measuredValue(num: number = 0, f: number = 10, init: number = initialValue): boolean{
      if(num < init*(100-f)/100 || init*(100+f)/100 < num){
        return true
      }else{
        return false
      }
    }
}
