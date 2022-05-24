# bayer

[![npm version](https://img.shields.io/npm/v/bayer)](https://www.npmjs.com/package/bayer)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/bayer)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/bayer)](https://bundlephobia.com/package/bayer)
[![dependencies](https://img.shields.io/librariesio/release/npm/bayer)](https://github.com/dmnsgn/bayer/blob/main/package.json)
[![types](https://img.shields.io/npm/types/bayer)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/bayer)](https://github.com/dmnsgn/bayer/blob/main/LICENSE.md)

Compute the bayer matrix for powers of two. Useful for ordered dithering algorithms.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/bayer/main/screenshot.png)

## Installation

```bash
npm install bayer
```

## Usage

```js
import bayer from "bayer";

const matrix = bayer();
// => [
//   [0, 2],
//   [3, 1],
// ];
```

## API

<!-- api-start -->

<a name="bayer"></a>

## bayer(size) ⇒ <code>Array.&lt;Array&gt;</code>

Compute the bayer matrix based for powers of two.

**Kind**: global function
**Returns**: <code>Array.&lt;Array&gt;</code> - A 2D array containing the matrix.

| Param | Type                | Default        | Description                                                                                 |
| ----- | ------------------- | -------------- | ------------------------------------------------------------------------------------------- |
| size  | <code>number</code> | <code>2</code> | Needs to be a power of two otherwise will throw a "Maximum call stack size exceeded" Error. |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/bayer/blob/main/LICENSE.md).
