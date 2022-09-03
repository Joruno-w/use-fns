interface Ele extends Element {
    requestFullscreen: (options?: FullscreenOptions) => Promise<void>;
    mozRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    msRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
    webkitRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
}
declare type QuerySelector = string | keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
interface MoneyFormatParams {
    number: number;
    decimals?: number;
    dec_point?: string;
    thousands_sep?: string;
}

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
declare const useMoneyFormat: ({ number, decimals, dec_point: dec, thousands_sep: sep, }: MoneyFormatParams) => string;
declare class MyCache {
    private storage;
    constructor(isLocal?: boolean);
    setItem(key: string, value: unknown): void;
    getItem(key: string): any;
    removeItem(key: string): void;
    clear(): void;
    key(index: number): string | null;
    length(): number;
}
declare const useLocalCache: MyCache;
declare const useSessionCache: MyCache;

declare const useFuzzyQuery: <T extends Record<string | number | symbol, any>, K extends keyof T>(list: T[], keyWord: string, attr: K) => unknown[];
declare const useForeachTree: <T extends Record<string | number | symbol, any>, K extends keyof T>(data: T[], cb: Function, childrenName: K) => void;

export { useDebounce, useExitFullscreen, useForeachTree, useFuzzyQuery, useHideMobile, useLaunchFullscreen, useLocalCache, useMoneyFormat, useScrollToTop, useSearchParams, useSessionCache, useSmoothScroll, useSysType, useThrottle, useTurnCase, useTypeOf, useUUID, useUniqueArrObj };
