<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Assert

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base ndarray assertion utilities.

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-assert
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/ndarray-base-assert' );
```

#### ns

Base ndarray assertion utilities.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`isAllowedDataTypeCast( from, to, casting )`][@stdlib/ndarray/base/assert/is-allowed-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be cast to another ndarray data type according to a specified casting mode.</span>
-   <span class="signature">[`isBufferLengthCompatibleShape( len, shape )`][@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape]</span><span class="delimiter">: </span><span class="description">determine if a buffer length is compatible with an array shape.</span>
-   <span class="signature">[`isBufferLengthCompatible( len, shape, strides, offset )`][@stdlib/ndarray/base/assert/is-buffer-length-compatible]</span><span class="delimiter">: </span><span class="description">determine if a buffer length is compatible with ndarray meta data.</span>
-   <span class="signature">[`isCastingMode( value )`][@stdlib/ndarray/base/assert/is-casting-mode]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray casting mode.</span>
-   <span class="signature">[`isColumnMajorContiguous( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-column-major-contiguous]</span><span class="delimiter">: </span><span class="description">determine if an array is column-major contiguous.</span>
-   <span class="signature">[`isColumnMajor( strides )`][@stdlib/ndarray/base/assert/is-column-major]</span><span class="delimiter">: </span><span class="description">given a stride array, determine whether an array is column-major.</span>
-   <span class="signature">[`isContiguous( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-contiguous]</span><span class="delimiter">: </span><span class="description">determine if an array is contiguous.</span>
-   <span class="signature">[`isDataType( value )`][@stdlib/ndarray/base/assert/is-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray data type.</span>
-   <span class="signature">[`isIndexMode( value )`][@stdlib/ndarray/base/assert/is-index-mode]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray index mode.</span>
-   <span class="signature">[`isOrder( value )`][@stdlib/ndarray/base/assert/is-order]</span><span class="delimiter">: </span><span class="description">test if an input value is an ndarray order.</span>
-   <span class="signature">[`isRowMajorContiguous( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-row-major-contiguous]</span><span class="delimiter">: </span><span class="description">determine if an array is row-major contiguous.</span>
-   <span class="signature">[`isRowMajor( strides )`][@stdlib/ndarray/base/assert/is-row-major]</span><span class="delimiter">: </span><span class="description">given a stride array, determine whether an array is row-major.</span>
-   <span class="signature">[`isSafeDataTypeCast( from, to )`][@stdlib/ndarray/base/assert/is-safe-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be safely cast to another ndarray data type.</span>
-   <span class="signature">[`isSameKindDataTypeCast( from, to )`][@stdlib/ndarray/base/assert/is-same-kind-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be safely cast to, or is of the same "kind" as, another ndarray data type.</span>
-   <span class="signature">[`isSingleSegmentCompatible( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-single-segment-compatible]</span><span class="delimiter">: </span><span class="description">determine if an array is compatible with a single memory segment.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/ndarray-base-assert' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-assert.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-assert

[test-image]: https://github.com/stdlib-js/ndarray-base-assert/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/ndarray-base-assert/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-assert/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-assert?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-assert.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-assert/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-assert/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-assert/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-assert/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-assert/main/LICENSE

<!-- <toc-links> -->

[@stdlib/ndarray/base/assert/is-allowed-data-type-cast]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast

[@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible-shape

[@stdlib/ndarray/base/assert/is-buffer-length-compatible]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible

[@stdlib/ndarray/base/assert/is-casting-mode]: https://github.com/stdlib-js/ndarray-base-assert-is-casting-mode

[@stdlib/ndarray/base/assert/is-column-major-contiguous]: https://github.com/stdlib-js/ndarray-base-assert-is-column-major-contiguous

[@stdlib/ndarray/base/assert/is-column-major]: https://github.com/stdlib-js/ndarray-base-assert-is-column-major

[@stdlib/ndarray/base/assert/is-contiguous]: https://github.com/stdlib-js/ndarray-base-assert-is-contiguous

[@stdlib/ndarray/base/assert/is-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-data-type

[@stdlib/ndarray/base/assert/is-index-mode]: https://github.com/stdlib-js/ndarray-base-assert-is-index-mode

[@stdlib/ndarray/base/assert/is-order]: https://github.com/stdlib-js/ndarray-base-assert-is-order

[@stdlib/ndarray/base/assert/is-row-major-contiguous]: https://github.com/stdlib-js/ndarray-base-assert-is-row-major-contiguous

[@stdlib/ndarray/base/assert/is-row-major]: https://github.com/stdlib-js/ndarray-base-assert-is-row-major

[@stdlib/ndarray/base/assert/is-safe-data-type-cast]: https://github.com/stdlib-js/ndarray-base-assert-is-safe-data-type-cast

[@stdlib/ndarray/base/assert/is-same-kind-data-type-cast]: https://github.com/stdlib-js/ndarray-base-assert-is-same-kind-data-type-cast

[@stdlib/ndarray/base/assert/is-single-segment-compatible]: https://github.com/stdlib-js/ndarray-base-assert-is-single-segment-compatible

<!-- </toc-links> -->

</section>

<!-- /.links -->
