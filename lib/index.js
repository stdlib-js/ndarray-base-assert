/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name isAllowedDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-allowed-data-type-cast}
*/
setReadOnly( ns, 'isAllowedDataTypeCast', require( '@stdlib/ndarray-base-assert-is-allowed-data-type-cast' ) );

/**
* @name isBufferLengthCompatible
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-buffer-length-compatible}
*/
setReadOnly( ns, 'isBufferLengthCompatible', require( '@stdlib/ndarray-base-assert-is-buffer-length-compatible' ) );

/**
* @name isBufferLengthCompatibleShape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape}
*/
setReadOnly( ns, 'isBufferLengthCompatibleShape', require( '@stdlib/ndarray-base-assert-is-buffer-length-compatible-shape' ) );

/**
* @name isCastingMode
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-casting-mode}
*/
setReadOnly( ns, 'isCastingMode', require( '@stdlib/ndarray-base-assert-is-casting-mode' ) );

/**
* @name isColumnMajor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-column-major}
*/
setReadOnly( ns, 'isColumnMajor', require( '@stdlib/ndarray-base-assert-is-column-major' ) );

/**
* @name isColumnMajorContiguous
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-column-major-contiguous}
*/
setReadOnly( ns, 'isColumnMajorContiguous', require( '@stdlib/ndarray-base-assert-is-column-major-contiguous' ) );

/**
* @name isContiguous
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-contiguous}
*/
setReadOnly( ns, 'isContiguous', require( '@stdlib/ndarray-base-assert-is-contiguous' ) );

/**
* @name isDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-data-type}
*/
setReadOnly( ns, 'isDataType', require( '@stdlib/ndarray-base-assert-is-data-type' ) );

/**
* @name isIndexMode
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-index-mode}
*/
setReadOnly( ns, 'isIndexMode', require( '@stdlib/ndarray-base-assert-is-index-mode' ) );

/**
* @name isOrder
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-order}
*/
setReadOnly( ns, 'isOrder', require( '@stdlib/ndarray-base-assert-is-order' ) );

/**
* @name isReadOnly
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-read-only}
*/
setReadOnly( ns, 'isReadOnly', require( '@stdlib/ndarray-base-assert-is-read-only' ) );

/**
* @name isRowMajor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-row-major}
*/
setReadOnly( ns, 'isRowMajor', require( '@stdlib/ndarray-base-assert-is-row-major' ) );

/**
* @name isRowMajorContiguous
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-row-major-contiguous}
*/
setReadOnly( ns, 'isRowMajorContiguous', require( '@stdlib/ndarray-base-assert-is-row-major-contiguous' ) );

/**
* @name isSafeDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-safe-data-type-cast}
*/
setReadOnly( ns, 'isSafeDataTypeCast', require( '@stdlib/ndarray-base-assert-is-safe-data-type-cast' ) );

/**
* @name isSameKindDataTypeCast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-same-kind-data-type-cast}
*/
setReadOnly( ns, 'isSameKindDataTypeCast', require( '@stdlib/ndarray-base-assert-is-same-kind-data-type-cast' ) );

/**
* @name isSingleSegmentCompatible
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/base/assert/is-single-segment-compatible}
*/
setReadOnly( ns, 'isSingleSegmentCompatible', require( '@stdlib/ndarray-base-assert-is-single-segment-compatible' ) );


// EXPORTS //

module.exports = ns;
