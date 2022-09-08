export type NormalKeys = keyof any
export interface Ele extends Element {
  requestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  mozRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
  msRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
  webkitRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
}

export interface Doc extends Document {
  exitFullscreen: (options?: FullscreenOptions) => Promise<void>;
  msExitFullscreen?: (options?: FullscreenOptions) => Promise<void>;
  mozCancelFullScreen?: (options?: FullscreenOptions) => Promise<void>;
  webkitExitFullscreen?: (options?: FullscreenOptions) => Promise<void>;
}

export type QuerySelector =
  | string
  | keyof HTMLElementTagNameMap
  | keyof SVGElementTagNameMap;

export interface MoneyFormatParams {
  number: number;
  decimals?: number;
  dec_point?: string;
  thousands_sep?: string;
}
