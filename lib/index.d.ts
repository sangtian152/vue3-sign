import type { App } from 'vue';
export { default as Vue3Sign } from './sign';
declare const _default: {
    install: (app: App<any>) => void;
    Vue3Sign: import("vue").DefineComponent<{
        readonly canvasWidth: NumberConstructor;
        readonly canvasHeight: NumberConstructor;
        readonly lineColor: import("./utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "#000", unknown>;
        readonly lineWidth: import("./utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 3, unknown>;
        readonly bgColor: import("./utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "#f7f7f7", unknown>;
        readonly imgBgColor: import("./utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "transparent", unknown>;
        readonly crop: import("./utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
        readonly footer: import("./utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
        readonly beforeDone: FunctionConstructor;
        readonly erasable: import("./utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
        readonly eraserRadius: import("./utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 6, unknown>;
    }, {
        clear: () => void;
        done: () => Promise<unknown>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'on-clear': () => boolean;
        'on-done': (result: string) => boolean;
        orientationchange: (orientation: number) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly canvasWidth: NumberConstructor;
        readonly canvasHeight: NumberConstructor;
        readonly lineColor: import("./utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "#000", unknown>;
        readonly lineWidth: import("./utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 3, unknown>;
        readonly bgColor: import("./utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "#f7f7f7", unknown>;
        readonly imgBgColor: import("./utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "transparent", unknown>;
        readonly crop: import("./utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
        readonly footer: import("./utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
        readonly beforeDone: FunctionConstructor;
        readonly erasable: import("./utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
        readonly eraserRadius: import("./utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 6, unknown>;
    }>> & {
        "onOn-clear"?: (() => any) | undefined;
        "onOn-done"?: ((result: string) => any) | undefined;
        onOrientationchange?: ((orientation: number) => any) | undefined;
    }, {
        readonly lineColor: string;
        readonly lineWidth: number;
        readonly bgColor: string;
        readonly imgBgColor: string;
        readonly crop: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        readonly footer: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        readonly erasable: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        readonly eraserRadius: number;
    }>;
};
export default _default;
