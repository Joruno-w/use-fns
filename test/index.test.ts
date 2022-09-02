import { describe, expect, it } from "vitest";
import { resolve } from "node:path";

describe("test", () => {
  it("test", async () => {
    expect(Object.keys(await import(resolve(process.cwd(), "./src/index.ts"))))
      .toMatchInlineSnapshot(`
        [
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
        ]
      `);
  });
});