/**
 * @disc:requestAnimationFrame 兼容
 * @author:yanxinaliang
 * @time：2018/6/6 19:12
 */

window.requestAnimationFrame = (function () {return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||(window as any).mozRequestAnimationFrame ||function (callback:any){window.setTimeout(callback, 6000 / 60);};})();
window.cancelAnimationFrame=(function () {return window.cancelAnimationFrame || window.webkitCancelAnimationFrame||(window as any).mozCancelAnimationFrame ||function (handler:number){window.clearTimeout(handler);};})();