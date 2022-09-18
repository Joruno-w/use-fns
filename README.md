# use-fns

Some utility functions prefixed with use

[![NPM version](https://img.shields.io/badge/npm-1.0.16-brightgreen)](https://www.npmjs.com/package/use-fns)

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
declare function useTypeOf(v:any): string;
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
const upper = useTurnCase('aBc',1); // ABC
const lower = useTurnCase('aBc',2); // abc
const capital = useTurnCase('aBc',3); // ABc
const original = useTurnCase('aBc',4); // aBc
```

### useSearchParams

Get url search params

```ts
declare function useSearchParams(): Record<string, string>;
```

```ts
import { useSearchParams } from "use-fns";
// if location.search = '?a=1&b=2'
const params = useSearchParams() // {a: 1,b: 2}
```

### useSysType

Get current terminal type

```ts
declare function useSysType():void;
```

```ts
import { useSysType } from "use-fns";
const sys = useSysType() // 'ios' | 'android' | ''
```

### useUniqueArrObj


### useScrollToTop,

### useSmoothScroll,

### useUUID,

### useMoneyFormat,

### useLocalCache,

### useSessionCache,

### useFuzzyQuery,

### useForeachTree,

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
