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
declare const useCharacterCount: (str: string, char: string) => number;
declare const useIsEmptyObj: <T extends Record<string | number | symbol, any>>(obj: T) => boolean;
declare const useDelay: (ms: number) => Promise<unknown>;
declare const useDaysBetween: (d1: number, d2: number) => number;
declare const useRedirect: (url: string) => string;
declare const useTouchSupported: () => any;
declare const useInsertHTMLAfter: (html: string, el: Element) => void;
declare const useShuffle: (arr: any[]) => any[];
declare const useGetSelectedText: () => string;
declare const useGetRandomBoolean: () => boolean;
declare const useSum: (arr: any[]) => any;
declare const useAverage: (arr: any[]) => number;
declare const useIsUrl: (url: string, { lenient }?: {
    readonly lenient?: boolean | undefined;
}) => boolean;
declare const useGithubUrlFromGit: (url: string, opts?: Record<string, any>) => string;
declare const pkg: {
    useTypeOf: (obj: any) => string;
    useDebounce: (cb: () => void, wait?: number) => void;
    useThrottle: (cb: () => void, wait?: number) => void;
    useHideMobile: (mobile: string) => string;
    useLaunchFullscreen: (element: Ele) => void;
    useExitFullscreen: () => void;
    useTurnCase: (str: string, type: number) => string;
    useSearchParams: () => Record<string, string>;
    useSysType: () => "ios" | "android" | "";
    useUniqueArrObj: <T extends Record<string | number | symbol, any>, U extends T[]>(arr: U, key: keyof T) => unknown[] | undefined;
    useScrollToTop: () => void;
    useSmoothScroll: (selector: QuerySelector) => void;
    useUUID: () => string;
    useMoneyFormat: ({ number, decimals, dec_point: dec, thousands_sep: sep, }: MoneyFormatParams) => string;
    useLocalCache: MyCache;
    useSessionCache: MyCache;
    useFuzzyQuery: <T_1 extends Record<string | number | symbol, any>, K extends keyof T_1>(list: T_1[], keyWord: string, attr: K) => unknown[];
    useForeachTree: <T_2 extends Record<string | number | symbol, any>, K_1 extends keyof T_2>(data: T_2[], cb: Function, childrenName: K_1) => void;
    useCharacterCount: (str: string, char: string) => number;
    useIsEmptyObj: <T_3 extends Record<string | number | symbol, any>>(obj: T_3) => boolean;
    useDelay: (ms: number) => Promise<unknown>;
    useDaysBetween: (d1: number, d2: number) => number;
    useRedirect: (url: string) => string;
    useTouchSupported: () => any;
    useInsertHTMLAfter: (html: string, el: Element) => void;
    useShuffle: (arr: any[]) => any[];
    useGetSelectedText: () => string;
    useGetRandomBoolean: () => boolean;
    useSum: (arr: any[]) => any;
    useAverage: (arr: any[]) => number;
    useIsUrl: (url: string, { lenient }?: {
        readonly lenient?: boolean | undefined;
    }) => boolean;
    useGithubUrlFromGit: (url: string, opts?: Record<string, any>) => string;
};

export { pkg as default, useAverage, useCharacterCount, useDaysBetween, useDebounce, useDelay, useExitFullscreen, useForeachTree, useFuzzyQuery, useGetRandomBoolean, useGetSelectedText, useGithubUrlFromGit, useHideMobile, useInsertHTMLAfter, useIsEmptyObj, useIsUrl, useLaunchFullscreen, useLocalCache, useMoneyFormat, useRedirect, useScrollToTop, useSearchParams, useSessionCache, useShuffle, useSmoothScroll, useSum, useSysType, useThrottle, useTouchSupported, useTurnCase, useTypeOf, useUUID, useUniqueArrObj };
