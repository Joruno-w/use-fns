import { describe, expect, it } from "vitest";
import useToggle from ".";

describe.concurrent("useToggle", () => {
  it("useToggle asc", () => {
    const { v, toggle } = useToggle([1, 2, 3], "asc");
    expect(v.value).toBe(1)
    toggle();
    expect(v.value).toBe(2);
    toggle();
    expect(v.value).toBe(3);
    toggle();
    expect(v.value).toBe(1);
    toggle();
    expect(v.value).toBe(2);
    toggle();
    expect(v.value).toBe(3);
  });
  it("useToggle desc", () => {
    const { v, toggle } = useToggle([1, 2, 3], "desc");
    expect(v.value).toBe(3);
    toggle();
    expect(v.value).toBe(2);
    toggle();
    expect(v.value).toBe(1);
    toggle();
    expect(v.value).toBe(3);
    toggle();
    expect(v.value).toBe(2);
    toggle();
    expect(v.value).toBe(1);
  });
  it("useToggle random", () => {
    const { v, toggle } = useToggle([1, 2, 3], "random");
    // console.log(v.value);
    toggle();
    // console.log(v.value);
    toggle();
    // console.log(v.value);
    toggle();
    // console.log(v.value);
    toggle();
    // console.log(v.value);
  });
});
