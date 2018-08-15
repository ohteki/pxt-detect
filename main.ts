//% weight=70 icon="\uf1ec" color=#4ab500 block="detect"
namespace detect {
  //% blockId=set_initial_value block="the initial value %num|of -"
  export function setInitialValue(num: number = 0): number {
    serial.writeLine("initialValue="+num.toString())
    return num
  }

  //% blockId=Evaluating_measured_value block="%num|changed %f| from %init|of -"
  export function measuredValue(num: number, f: number, init: number): boolean {
    serial.writeLine("measuredValue=" + num.toString() + ", changedValueFromInitial=" + (100 * (num - init) / init).toString() + "%, returnValue=" + ((num < init * (100 - f) / 100 || init * (100 + f) / 100 < num) ? "True" : "False"))
    if (num < init * (100 - f) / 100 || init * (100 + f) / 100 < num) {
      return true
    } else {
      return false
    }
  }
}