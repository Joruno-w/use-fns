# use-fns

Some utility functions prefixed with use

[![NPM version](https://img.shields.io/badge/npm-1.0.18-brightgreen)](https://www.npmjs.com/package/use-fns)

## Install

```
$ npm i use-fns
```

## Usage

```ts
import fns from "use-fns";
```

## API

### useTypeOf

Determine the type of variable

```ts
declare function useTypeOf(v: any): string;
```

```ts
import { useTypeOf } from 'use-fns'
console.log(useTypeOf('abc')) // 'string'
console.log(useTypeOf(123)) // 'number'
console.log(useTypeOf(true)) // 'boolean'
console.log(useTypeOf(null)) // 'null'
console.log(useTypeOf(undefined)) // 'undefined'
console.log(useTypeOf(Symbol())) // 'symbol'
console.log(useTypeOf(BigInt())) // 'bigint'
console.log(useTypeOf([])) // 'array'
console.log(useTypeOf({})) // 'object'
console.log(useTypeOf(/.+/)) // 'regexp'
console.log(useTypeOf(new Date())) // 'date'
...
```

### useDebounce

Calling a function multiple times only takes the last one as the result

```ts
declare function useDebounce(cb: Function, wait: number = 500): Function;
```

```ts
import { useDebounce } from "use-fns";
const cb = () => console.log("useDebounce");
const newCb = useDebounce(cb, 1000);
for (let i = 0; i < 10; i++) newCb(); // only call once after one second
```

### useThrottle,

Call the function at regular intervals

```ts
declare function useThrottle(cb: Function, wait: number = 500): Function;
```

```ts
import { useThrottle } from "use-fns";
const cb = () => console.log("useDebounce");
const newCb = useThrottle(cb, 1000);
for (let i = 0; i < 10; i++) newCb(); // call the function per second
```

### useHideMobile

Desensitization of mobile phone number（not strict）

```ts
declare function useHideMobile(s: string): string;
```

```ts
import { useHideMobile } from "use-fns";
const phoneNumber = useHideMobile("12345678911"); // 1*********1
```

### useLaunchFullscreen

Launch full screen

```ts
declare function useLaunchFullscreen<T extends Element>(ele: T): void;
```

```ts
import { useLaunchFullscreen } from "use-fns";
useLaunchFullscreen(document.body);
```

### useExitFullscreen

Exit full screen

```ts
declare function useExitFullscreen(): void;
```

```ts
import { useExitFullscreen } from "use-fns";
useExitFullscreen();
```

### useTurnCase

Convert string case

```ts
declare function useTurnCase(str: string, type: number): void;
```

```ts
import { useTurnCase } from "use-fns";
const upper = useTurnCase("aBc", 1); // ABC
const lower = useTurnCase("aBc", 2); // abc
const capital = useTurnCase("aBc", 3); // ABc
const original = useTurnCase("aBc", 4); // aBc
```

### useSearchParams

Get url search params

```ts
declare function useSearchParams(): Record<string, string>;
```

```ts
import { useSearchParams } from "use-fns";
// if location.search = '?a=1&b=2'
const params = useSearchParams(); // {a: 1,b: 2}
```

### useSysType

Get current terminal type

```ts
declare function useSysType(): void;
```

```ts
import { useSysType } from "use-fns";
const sys = useSysType(); // 'ios' | 'android' | ''
```

### useUniqueArrObj

Array objects are deduplicated according to fields

```ts
declare function useUniqueArrObj<T extends Record<string, any>, U extends T[]>(
  arr: U,
  k: keyof T
): void;
```

```ts
import { useUniqueArrObj } from "use-fns";
const uniqueArr = useUniqueArrObj(
  [
    { name: "Joruno", age: 22 },
    { name: "hanchen", age: 22 },
    { name: "old man", age: 21 },
  ],
  "age"
);
/**
 * [
 *    {name: 'Joruno', age: 22},
 *    {name: 'old man', age: 21},
 * ]
 */
```

### useScrollToTop

Scroll to top of page

```ts
declare function useScrollToTop(): void;
```

```ts
import { useScrollToTop } from "use-fns";
useScrollToTop();
```

### useSmoothScroll

Scroll to element position

```ts
declare function useSmoothScroll(selector: string = "body"): void;
```

```ts
import { useSmoothScroll } from "use-fns";
useSmoothScroll("#form");
```

### useUUID

Generate uuid

```ts
declare function useUUID(): void;
```

```ts
import { useUUID } from "use-fns";
const uuid = useUUID(); // 'e728a1e4-dd9c-4e3f-a747-8ca67985e293'
```

### useMoneyFormat

Money format

```ts
declare function useMoneyFormat(): void;
```

```ts
import { useMoneyFormat } from "use-fns";
const res = useMoneyFormat();
```

### useLocalCache

automatic serialization localStorage

```ts
declare function useLocalCache(): void;
```

```ts
import { useLocalCache } from "use-fns";
useLocalCache.setItem("person", { name: "Joruno", age: 22 });
useLocalCache.getItem("person");
useLocalCache.removeItem("person");
useLocalCache.clear();
useLocalCache.key(0);
useLocalCache.length();
```

### useSessionCache

automatic serialization sessionStorage

```ts
declare function useSessionCache(): void;
```

```ts
import { useSessionCache } from "use-fns";
useSessionCache.setItem("person", { name: "Joruno", age: 22 });
useSessionCache.getItem("person");
useSessionCache.removeItem("person");
useSessionCache.clear();
useSessionCache.key(0);
useSessionCache.length();
```

### useFuzzyQuery

Fuzz query

```ts
declare function useFuzzyQuery<T extends Record<string, any>, U extends T[]>(
  list: U,
  keyWord: string,
  attr: keyof T
): void;
```

```ts
import { useFuzzyQuery } from "use-fns";
useFuzzyQuery(
  [
    { name: "Joruno", age: 22 },
    { name: "hanchen", age: 22 },
    { name: "old man", age: 21 },
  ],
  "o",
  "name"
);
/**
 * [
 *    {name: 'Joruno', age: 22},
 *    {name: 'old man', age: 21},
 * ]
 */
```

### useForeachTree

### useCharacterCount,

### useIsEmptyObj,

### useDelay,

### useDaysBetween,

### useRedirect,

### useTouchSupported,

### useInsertHTMLAfter,

### useShuffle,

### useGetSelectedText,

### useGetRandomBoolean,

### useSum,

### useAverage,

### useIsUrl,

### useGithubUrlFromGit,

### useScopedRegex,

### useIsScoped

## License

[MIT](./LICENSE) License © 2022 [Joruno-w](https://github.com/Joruno-w)
