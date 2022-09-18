# use-fns

Some utility functions prefixed with use

[![NPM version](https://img.shields.io/badge/npm-1.0.13-brightgreen)](https://www.npmjs.com/package/use-fns)

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
declare function useTypeOf<T extends any>(obj: T): string;
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

anti-shake

Calling a function multiple times only takes the last one as the result

```ts
declare function useDebounce<T extends Function, U extends number = 500>(
  cb: T,
  wait: U
): Function;
```

```ts
import { useDebounce } from "use-fns";
const cb = () => console.log("useDebounce");
const newCb = useDebounce(cb, 1000);
while (1) {
  newCb();
}
```

## License

[MIT](./LICENSE) License © 2022 [Joruno-w](https://github.com/Joruno-w)
