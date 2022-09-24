import { describe, expect, it } from "vitest";
import { resolve } from "node:path";
import * as fns from ".";

describe.concurrent("Get All Export keys", () => {
  it("exports", async () => {
    expect(Object.keys(await import(resolve(__dirname, "./index.ts"))))
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
          "useIsScoped",
        ]
      `);
  });
});

describe.concurrent("test each function output", () => {
  it("useSum", () => {
    expect(fns.useSum([])).toBe(0);
    expect(fns.useSum([1, 2])).toBe(3);
    expect(fns.useSum([1, 2, 3])).toBe(6);
  });

  it("useAverage", () => {
    expect(fns.useAverage([])).toBe(0);
    expect(fns.useAverage([1, 2])).toBe(1.5);
    expect(fns.useAverage([1, 2, 3])).toBe(2);
  });

  it("useIsUrl", () => {
    expect(fns.useIsUrl("https://github.com")).toBe(true);
    expect(fns.useIsUrl("github.com")).toBe(false);
    expect(fns.useIsUrl("github.com", { lenient: true })).toBe(true);
  });
});
