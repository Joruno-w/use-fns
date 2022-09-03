interface Ele extends Element {
    requestFullscreen: (options?: FullscreenOptions) => Promise<void>;
    mozRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    msRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    webkitRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
}
declare type QuerySelector = string | keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;

declare const useTypeOf: (obj: any) => string;
declare const useDebounce: (cb: () => void, wait?: number) => void;
declare const useThrottle: (cb: () => void, wait?: number) => void;
declare const useHideMobile: (mobile: string) => string;
declare const useLaunchFullscreen: (element: Ele) => void;
declare const useExitFullscreen: () => void;
declare const useTurnCase: (str: string, type: number) => string;
declare const useSearchParams: () => Record<string, string>;
declare const useSysType: () => "ios" | "android" | "";
declare const useUniqueArrObj: <T extends Record<string | number | symbol, any>, U extends T[]>(arr: U, key: keyof T) => unknown[] | undefined;
declare const useScrollToTop: () => void;
declare const useSmoothScroll: (selector: QuerySelector) => void;
declare const useUUID: () => string;

export { useDebounce, useExitFullscreen, useHideMobile, useLaunchFullscreen, useScrollToTop, useSearchParams, useSmoothScroll, useSysType, useThrottle, useTurnCase, useTypeOf, useUUID, useUniqueArrObj };
