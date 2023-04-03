declare const log: {
    print: (text: string | number | Record<string, unknown>, type: string, back: boolean) => boolean;
    pretty: (title: string, text: string, type?: string) => boolean;
    primary: (text: string, back?: boolean) => boolean;
    success: (text: string, back?: boolean) => boolean;
    info: (text: string, back?: boolean) => boolean;
    warning: (text: string, back?: boolean) => boolean;
    danger: (text: string, back?: boolean) => boolean;
};
/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
export declare function typeColor(type?: string): string;
export default log;
