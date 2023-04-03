import type { ExtractPropTypes } from 'vue';
export declare const signProps: {
    readonly canvasWidth: NumberConstructor;
    readonly canvasHeight: NumberConstructor;
    readonly lineColor: import('../../utils/props').BuildPropReturn<StringConstructor, unknown, unknown, "#000", unknown>;
    readonly lineWidth: import('../../utils/props').BuildPropReturn<NumberConstructor, unknown, unknown, 3, unknown>;
    readonly bgColor: import('../../utils/props').BuildPropReturn<StringConstructor, unknown, unknown, "#f7f7f7", unknown>;
    readonly imgBgColor: import('../../utils/props').BuildPropReturn<StringConstructor, unknown, unknown, "transparent", unknown>;
    readonly crop: import('../../utils/props').BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly footer: import('../../utils/props').BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly beforeDone: FunctionConstructor;
    readonly erasable: import('../../utils/props').BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly eraserRadius: import('../../utils/props').BuildPropReturn<NumberConstructor, unknown, unknown, 6, unknown>;
};
export type SignProps = ExtractPropTypes<typeof signProps>;
export declare const signEmits: {
    'on-clear': () => boolean;
    'on-done': (result: string) => boolean;
    orientationchange: (orientation: number) => boolean;
};
export type SignEmits = typeof signEmits;
