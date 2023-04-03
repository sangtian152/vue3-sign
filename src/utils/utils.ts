export const isObject = function(arg: unknown) {
  return Object.prototype.toString.call(arg) === "[object Object]";
};

export const isString = function (str: unknown): boolean {
  return typeof str === 'string'
}

export const isNumber = function (num: unknown): boolean {
  return typeof num === 'number'
}

export const fromPairs = function (pairs:any[][]): Record<string, unknown> {
  let index = -1; // 循环索引
  const length = pairs ? pairs.length : 0; // 键值对数组的长度
  const result = {}// 结果对象

  while (++index < length) { // 循环并给结果对象加入属性
    const pair = pairs[index]
    result[pair[0]] = pair[1]
  }
  return result
}

export const hastouch = typeof window !== "undefined" && "ontouchstart" in window ? true : false;
// 处理事件监听，pc端监听mouse事件，移动端监听touch事件
export const touchEvent = function() {
  // const hastouch = "ontouchstart" in window ? true : false;
  const tapstart:keyof HTMLElementEventMap = hastouch ? "touchstart" : "mousedown",
    tapmove:keyof HTMLElementEventMap = hastouch ? "touchmove" : "mousemove",
    tapend:keyof HTMLElementEventMap = hastouch ? "touchend" : "mouseup";
  return {
    tapstart,
    tapmove,
    tapend
  };
};

// 计算坐标点
export const getPointer = function(e:TouchEvent|MouseEvent, dom:HTMLElement) {
  try {
    let x = hastouch ? (e as TouchEvent).targetTouches[0].pageX : (e as MouseEvent).offsetX;
    let y = hastouch ? (e as TouchEvent).targetTouches[0].pageY : (e as MouseEvent).offsetY;
    if (hastouch) {
      let ndom = dom;
      while (ndom && ndom.tagName !== "BODY") {
        x -= ndom.offsetLeft;
        y -= ndom.offsetTop;
        ndom = ndom.offsetParent as HTMLElement;
      }
    }
    return {
      x: x,
      y: y
    };
  } catch (err) {
    console.log(err);
  }
};
