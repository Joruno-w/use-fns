# use-fns

Some utility functions prefixed with use

[![NPM version](https://img.shields.io/badge/npm-1.0.23-brightgreen)](https://www.npmjs.com/package/use-fns) ![](https://img.shields.io/badge/WIP-blue)
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
const local = useLocalCache();
local.setItem("person", { name: "Joruno", age: 22 });
local.getItem("person");
local.removeItem("person");
local.clear();
local.key(0);
local.length();
```

### useSessionCache

automatic serialization sessionStorage

```ts
declare function useSessionCache(): void;
```

```ts
import { useSessionCache } from "use-fns";
const session = useSessionCache();
session.setItem("person", { name: "Joruno", age: 22 });
session.getItem("person");
session.removeItem("person");
session.clear();
session.key(0);
session.length();
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

foreach all tree node

```ts
declare function useForeachTree<T extends Record<string, any>>(data: T[],cb: Function, childrenName:keyof T): void;
```

```ts
import { useForeachTree } from "use-fns";
useForeachTree(
  [
    { 
      name: "Joruno", 
      age: 22,
      children: [
          { 
            name: "hanchen",
            age: 22
          },
          { 
            name: "old man", 
            age: 21
          }
      ]
    }
  ],
  console.log,
  'children'
);

/**
 * 
 * {
 *    name: 'Joruno',
 *    age: 22,
 *    children: [ 
 *      { name: 'hanchen', age: 22 }, 
 *      { name: 'old  man', age: 21 } 
 *    ]
 * },
 *
 * { name: 'hanchen', age: 22 },
 *
 * { name: 'old man', age: 21 }
 * 
 */
```

### useCharacterCount

Get the number of characters in a string

```ts
declare function useCharacterCount(s: string, char: string): number;
```

```ts
import { useCharacterCount } from "use-fns";
const count = useCharacterCount('Joruno','o') // 2
```

### useIsEmptyObj

Check if object is empty

```ts
declare function useIsEmptyObj<T extends Record<string, any>(obj: T): boolean;
```

```ts
import { useIsEmptyObj } from "use-fns";
useIsEmptyObj({}) // true
useIsEmptyObj({a: 1}) // false
```

### useDelay

Wait for a while before calling function

```ts
declare function useDelay(ms: number): Promise<void>;
```

```ts
import { useDelay } from "use-fns";
await useDelay(1000) // Wait for one second
```

### useDaysBetween

Get the day difference between two dates

```ts
declare function useDaysBetween(d1:number, d2: number): number;
```

```ts
import { useDaysBetween } from "use-fns";
const timeStamp = Date.now()
useDaysBetween(timeStamp,timeStamp + 3600 * 1000 * 24 * 7) // 7
```

### useRedirect

Redirect to another URL

```ts
declare function useRedirect(url: string): string;
```

```ts
import { useRedirect } from "use-fns";
useRedirect('https://github.com') // Redirect to github
```

### useTouchSupported

Check for touch support on your device

```ts
declare function useTouchSupported(): boolean;
```

```ts
import { useTouchSupported } from "use-fns";
useTouchSupported() // true or false
```

### useInsertHTMLAfter

Insert HTML string after element

```ts
declare function useInsertHTMLAfter(html: string, el: Element): void;
```

```ts
import { useInsertHTMLAfter } from "use-fns";
useInsertHTMLAfter('<div>useInsertHTMLAfter</div>',document.body)
```

### useShuffle

Shuffle array

```ts
declare function useShuffle(arr: any[]): any[];
```

```ts
import { useShuffle } from "use-fns";
useShuffle([1,2]) // [1,2] or [2,1]
```

### useGetSelectedText

Get selected text on webpage

```ts
declare function useGetSelectedText(): string;
```

```ts
import { useGetSelectedText } from "use-fns";
useGetSelectedText()
```

### useGetRandomBoolean

Get random boolean

```ts
declare function useGetRandomBoolean(): boolean;
```

```ts
import { useGetRandomBoolean } from "use-fns";
useGetRandomBoolean() // true or false
```

### useSum

Calculate the sum of an array

```ts
declare function useSum(arr: any[]): number;
```

```ts
import { useSum } from "use-fns";
useSum([]) // 0
useSum([1,2]) // 3
useSum([1,2,3]) // 6
```

### useAverage

Calculate the average of an array

```ts
declare function useAverage(arr: any[]): number;
```

```ts
import { useAverage } from "use-fns";
useAverage([]) // 0
useAverage([1,2]) // 1.5
useAverage([1,2,3]) // 2
```

### useIsUrl

Determine if a string is a valid URL

```ts
declare function useIsUrl(arr: any[],opts: {readonly lenient?: boolean} = {lenient: false}): boolean;
```

```ts
import { useIsUrl } from "use-fns";
useIsUrl('https://github.com') // true
useIsUrl('github.com') // false;
useIsUrl('github.com',{lenient: true}) // true
```

### useGithubUrlFromGit

Convert git address to github address

```ts
declare function useGithubUrlFromGit(url: string,opts: Record<string,any> = {}): string;
```

```ts
import { useGithubUrlFromGit } from "use-fns";
useGithubUrlFromGit('git+https://github.com/Joruno-w/use-fns.git') // https://github.com/Joruno-w/use-fns
```

### useIsScoped

Check if a string is npm scoped

```ts
declare function useIsScoped(s: string): boolean;
```

```ts
import { useIsScoped } from "use-fns";
useIsScoped('@joruno/use-fns') // true
useIsScoped('joruno/use-fns') // false
```

## License

[MIT](./LICENSE) License © 2022 [Joruno-w](https://github.com/Joruno-w)
