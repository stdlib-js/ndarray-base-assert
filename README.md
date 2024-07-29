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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Assert

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base ndarray assertion utilities.



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/ndarray-base-assert/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
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
-   <span class="signature">[`isComplexFloatingPointDataType( value )`][@stdlib/ndarray/base/assert/is-complex-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray complex-valued floating-point data type.</span>
-   <span class="signature">[`isContiguous( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-contiguous]</span><span class="delimiter">: </span><span class="description">determine if an array is contiguous.</span>
-   <span class="signature">[`isDataType( value )`][@stdlib/ndarray/base/assert/is-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray data type.</span>
-   <span class="signature">[`isFloatingPointDataType( value )`][@stdlib/ndarray/base/assert/is-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray floating-point data type.</span>
-   <span class="signature">[`isIndexMode( value )`][@stdlib/ndarray/base/assert/is-index-mode]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray index mode.</span>
-   <span class="signature">[`isIntegerDataType( value )`][@stdlib/ndarray/base/assert/is-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray integer data type.</span>
-   <span class="signature">[`isMostlySafeDataTypeCast( from, to )`][@stdlib/ndarray/base/assert/is-mostly-safe-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be safely cast or, for floating-point data types, downcast to another ndarray data type.</span>
-   <span class="signature">[`isNumericDataType( value )`][@stdlib/ndarray/base/assert/is-numeric-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray numeric data type.</span>
-   <span class="signature">[`isOrder( value )`][@stdlib/ndarray/base/assert/is-order]</span><span class="delimiter">: </span><span class="description">test if an input value is an ndarray order.</span>
-   <span class="signature">[`isReadOnly( arr )`][@stdlib/ndarray/base/assert/is-read-only]</span><span class="delimiter">: </span><span class="description">test if an ndarray is **read-only**.</span>
-   <span class="signature">[`isRealDataType( value )`][@stdlib/ndarray/base/assert/is-real-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray real-valued data type.</span>
-   <span class="signature">[`isRealFloatingPointDataType( value )`][@stdlib/ndarray/base/assert/is-real-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray real-valued floating-point data type.</span>
-   <span class="signature">[`isRowMajorContiguous( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-row-major-contiguous]</span><span class="delimiter">: </span><span class="description">determine if an array is row-major contiguous.</span>
-   <span class="signature">[`isRowMajor( strides )`][@stdlib/ndarray/base/assert/is-row-major]</span><span class="delimiter">: </span><span class="description">given a stride array, determine whether an array is row-major.</span>
-   <span class="signature">[`isSafeDataTypeCast( from, to )`][@stdlib/ndarray/base/assert/is-safe-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be safely cast to another ndarray data type.</span>
-   <span class="signature">[`isSameKindDataTypeCast( from, to )`][@stdlib/ndarray/base/assert/is-same-kind-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an ndarray data type can be safely cast to, or is of the same "kind" as, another ndarray data type.</span>
-   <span class="signature">[`isSignedIntegerDataType( value )`][@stdlib/ndarray/base/assert/is-signed-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray signed integer data type.</span>
-   <span class="signature">[`isSingleSegmentCompatible( shape, strides, offset )`][@stdlib/ndarray/base/assert/is-single-segment-compatible]</span><span class="delimiter">: </span><span class="description">determine if an array is compatible with a single memory segment.</span>
-   <span class="signature">[`isUnsignedIntegerDataType( value )`][@stdlib/ndarray/base/assert/is-unsigned-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported ndarray unsigned integer data type.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( ns ) );

})();
</script>
</body>
</html>
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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-assert.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-assert

[test-image]: https://github.com/stdlib-js/ndarray-base-assert/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/ndarray-base-assert/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-assert/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-assert?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-assert.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-assert/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-assert/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-assert/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-assert/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-assert/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-assert/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-assert/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-assert/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-assert/main/LICENSE

<!-- <toc-links> -->

[@stdlib/ndarray/base/assert/is-allowed-data-type-cast]: https://github.com/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast/tree/umd

[@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible-shape/tree/umd

[@stdlib/ndarray/base/assert/is-buffer-length-compatible]: https://github.com/stdlib-js/ndarray-base-assert-is-buffer-length-compatible/tree/umd

[@stdlib/ndarray/base/assert/is-casting-mode]: https://github.com/stdlib-js/ndarray-base-assert-is-casting-mode/tree/umd

[@stdlib/ndarray/base/assert/is-column-major-contiguous]: https://github.com/stdlib-js/ndarray-base-assert-is-column-major-contiguous/tree/umd

[@stdlib/ndarray/base/assert/is-column-major]: https://github.com/stdlib-js/ndarray-base-assert-is-column-major/tree/umd

[@stdlib/ndarray/base/assert/is-complex-floating-point-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-complex-floating-point-data-type/tree/umd

[@stdlib/ndarray/base/assert/is-contiguous]: https://github.com/stdlib-js/ndarray-base-assert-is-contiguous/tree/umd

[@stdlib/ndarray/base/assert/is-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-data-type/tree/umd

[@stdlib/ndarray/base/assert/is-floating-point-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-floating-point-data-type/tree/umd

[@stdlib/ndarray/base/assert/is-index-mode]: https://github.com/stdlib-js/ndarray-base-assert-is-index-mode/tree/umd

[@stdlib/ndarray/base/assert/is-integer-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-integer-data-type/tree/umd

[@stdlib/ndarray/base/assert/is-mostly-safe-data-type-cast]: https://github.com/stdlib-js/ndarray-base-assert-is-mostly-safe-data-type-cast/tree/umd

[@stdlib/ndarray/base/assert/is-numeric-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-numeric-data-type/tree/umd

[@stdlib/ndarray/base/assert/is-order]: https://github.com/stdlib-js/ndarray-base-assert-is-order/tree/umd

[@stdlib/ndarray/base/assert/is-read-only]: https://github.com/stdlib-js/ndarray-base-assert-is-read-only/tree/umd

[@stdlib/ndarray/base/assert/is-real-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-real-data-type/tree/umd

[@stdlib/ndarray/base/assert/is-real-floating-point-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-real-floating-point-data-type/tree/umd

[@stdlib/ndarray/base/assert/is-row-major-contiguous]: https://github.com/stdlib-js/ndarray-base-assert-is-row-major-contiguous/tree/umd

[@stdlib/ndarray/base/assert/is-row-major]: https://github.com/stdlib-js/ndarray-base-assert-is-row-major/tree/umd

[@stdlib/ndarray/base/assert/is-safe-data-type-cast]: https://github.com/stdlib-js/ndarray-base-assert-is-safe-data-type-cast/tree/umd

[@stdlib/ndarray/base/assert/is-same-kind-data-type-cast]: https://github.com/stdlib-js/ndarray-base-assert-is-same-kind-data-type-cast/tree/umd

[@stdlib/ndarray/base/assert/is-signed-integer-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-signed-integer-data-type/tree/umd

[@stdlib/ndarray/base/assert/is-single-segment-compatible]: https://github.com/stdlib-js/ndarray-base-assert-is-single-segment-compatible/tree/umd

[@stdlib/ndarray/base/assert/is-unsigned-integer-data-type]: https://github.com/stdlib-js/ndarray-base-assert-is-unsigned-integer-data-type/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
