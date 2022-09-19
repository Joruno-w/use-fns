import { describe, expect, it } from "vitest";
import { expectType } from "tsd";
import { resolve } from "node:path";
import * as fns from './'

describe.concurrent("Get All Export keys", () => {
  it("exports", async () => {
    expect(Object.keys(await import(resolve(process.cwd(), "./src/index.ts"))))
      .toMatchInlineSnapshot(`
        [
          "useBoolean",
          "useToggle",
          "default",
          "useTypeOf",
          "useDebounce",
          "useThrottle",
          "useHideMobile",
          "useLaunchFullscreen",
          "useExitFullscreen",
          "useTurnCase",
          "useSearchParams",
          "useSysType",
          "useUniqueArrObj",
          "useScrollToTop",
          "useSmoothScroll",
          "useUUID",
          "useMoneyFormat",
          "useLocalCache",
          "useSessionCache",
          "useFuzzyQuery",
          "useForeachTree",
          "useCharacterCount",
          "useIsEmptyObj",
          "useDelay",
          "useDaysBetween",
          "useRedirect",
          "useTouchSupported",
          "useInsertHTMLAfter",
          "useShuffle",
          "useGetSelectedText",
          "useGetRandomBoolean",
          "useSum",
          "useAverage",
          "useIsUrl",
          "useGithubUrlFromGit",
          "useScopedRegex",
          "useIsScoped",
        ]
      `);
  });
});

describe.concurrent("test each function output", () => {
  it("useIsUrl", () => {
    expect(fns.useIsUrl("https://github.com")).toBe(true);
    expect(fns.useIsUrl("github.com")).toBe(false);
    expect(fns.useIsUrl("github.com", { lenient: true })).toBe(true);
  });
});

describe.concurrent("test each function type declare", () => {
  it("useIsUrl", () => {
    expectType<boolean>(fns.useIsUrl("https://github.com"))
    expectType<boolean>(fns.useIsUrl("github.com"))
    expectType<boolean>(fns.useIsUrl("github.com", { lenient: true }))
  });
});
