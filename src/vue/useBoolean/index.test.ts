import { expect, it } from "vitest";
import useBoolean from "./index";

it("useBoolean", () => {
  const { v, setTrue, setFalse, toggle } = useBoolean(true);
  expect(v.value).toBe(true);
  toggle();
  expect(v.value).toBe(false);
  toggle();
  expect(v.value).toBe(true);
  setTrue();
  expect(v.value).toBe(true);
  setFalse();
  expect(v.value).toBe(false);
  setFalse();
  expect(v.value).toBe(false);
  setTrue();
  expect(v.value).toBe(true);
});
