import * as vue from 'vue';
import { Ref } from 'vue';

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

interface UseBooleanReturn {
    v: Ref<boolean>;
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
}
declare function useBoolean(value?: boolean): UseBooleanReturn;

declare type MaybeRef<T> = T | Ref<T>;

declare type orderType = "asc" | "desc" | "random";
interface UseToggleReturn<T> {
    i: number;
    v: Ref<T>;
    values: T[];
    toggle: (v?: any) => void;
}
declare function useToggle<T extends any>(arr: MaybeRef<T>[], order?: orderType, start?: number, end?: number): UseToggleReturn<T>;

interface QRCodeOptions {
    onRenderingStart?: (qrCodeOptions: any) => void;
    onRenderingEnd?: (qrCodeOptions: any, dataURL: string) => void;
}
declare const useQRCode: (text: MaybeRef<string>, options?: QRCodeOptions) => vue.Ref<string>;

declare const useTypeOf: (obj: any) => string;
declare const useDebounce: (cb: () => void, wait?: number) => () => void;
declare const useThrottle: (cb: () => void, wait?: number) => () => void;
declare const useHideMobile: (mobile: string) => string;
declare const useLaunchFullscreen: (element: Ele) => void;
declare const useExitFullscreen: () => void;
declare const useTurnCase: (str: string, type: number) => string;
declare const useSearchParams: () => Record<string, string>;
declare const useSysType: () => "ios" | "android" | "";
declare const useUniqueArrObj: <T extends Record<string, any>, U extends T[]>(arr: U, key: keyof T) => unknown[] | undefined;
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
declare const useLocalCache: () => MyCache;
declare const useSessionCache: () => MyCache;
declare const useFuzzyQuery: <T extends Record<string, any>, K extends keyof T>(list: T[], keyWord: string, attr: K) => T[];
declare const useForeachTree: <T extends Record<string, any>>(data: T[], cb: Function, childrenName: keyof T) => void;
declare const useCharacterCount: (str: string, char: string) => number;
declare const useIsEmptyObj: <T extends Record<string, any>>(obj: T) => boolean;
declare const useDelay: (ms: number) => Promise<void>;
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
declare const useIsScoped: (s: string) => boolean;
declare const useArrayMoveMutable: (arr: unknown[], fromIndex: number, toIndex: number) => void;
declare const useArrayMoveImmutable: (arr: unknown[], fromIndex: number, toIndex: number) => unknown[];

declare const pkgs: {
    useTypeOf: (obj: any) => string;
    useDebounce: (cb: () => void, wait?: number) => () => void;
    useThrottle: (cb: () => void, wait?: number) => () => void;
    useHideMobile: (mobile: string) => string;
    useLaunchFullscreen: (element: Ele) => void;
    useExitFullscreen: () => void;
    useTurnCase: (str: string, type: number) => string;
    useSearchParams: () => Record<string, string>;
    useSysType: () => "ios" | "android" | "";
    useUniqueArrObj: <T extends Record<string, any>, U extends T[]>(arr: U, key: keyof T) => unknown[] | undefined;
    useScrollToTop: () => void;
    useSmoothScroll: (selector: QuerySelector) => void;
    useUUID: () => string;
    useMoneyFormat: ({ number, decimals, dec_point: dec, thousands_sep: sep, }: MoneyFormatParams) => string;
    useLocalCache: () => MyCache;
    useSessionCache: () => MyCache;
    useFuzzyQuery: <T_1 extends Record<string, any>, K extends keyof T_1>(list: T_1[], keyWord: string, attr: K) => T_1[];
    useForeachTree: <T_2 extends Record<string, any>>(data: T_2[], cb: Function, childrenName: keyof T_2) => void;
    useCharacterCount: (str: string, char: string) => number;
    useIsEmptyObj: <T_3 extends Record<string, any>>(obj: T_3) => boolean;
    useDelay: (ms: number) => Promise<void>;
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
    useIsScoped: (s: string) => boolean;
    useArrayMoveMutable: (arr: unknown[], fromIndex: number, toIndex: number) => void;
    useArrayMoveImmutable: (arr: unknown[], fromIndex: number, toIndex: number) => unknown[];
};

export { pkgs as default, useArrayMoveImmutable, useArrayMoveMutable, useAverage, useBoolean, useCharacterCount, useDaysBetween, useDebounce, useDelay, useExitFullscreen, useForeachTree, useFuzzyQuery, useGetRandomBoolean, useGetSelectedText, useGithubUrlFromGit, useHideMobile, useInsertHTMLAfter, useIsEmptyObj, useIsScoped, useIsUrl, useLaunchFullscreen, useLocalCache, useMoneyFormat, useQRCode, useRedirect, useScrollToTop, useSearchParams, useSessionCache, useShuffle, useSmoothScroll, useSum, useSysType, useThrottle, useToggle, useTouchSupported, useTurnCase, useTypeOf, useUUID, useUniqueArrObj };
