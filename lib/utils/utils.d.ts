export declare const isObject: (arg: unknown) => boolean;
export declare const isString: (str: unknown) => boolean;
export declare const isNumber: (num: unknown) => boolean;
export declare const fromPairs: (pairs: any[][]) => Record<string, unknown>;
export declare const hastouch: boolean;
export declare const touchEvent: () => {
    tapstart: "mousedown" | "touchstart";
    tapmove: "mousemove" | "touchmove";
    tapend: "mouseup" | "touchend";
};
export declare const getPointer: (e: TouchEvent | MouseEvent, dom: HTMLElement) => {
    x: number;
    y: number;
} | undefined;
