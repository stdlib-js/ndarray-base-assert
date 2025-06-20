# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-06-20)

<section class="features">

### Features

-   [`eac188f`](https://github.com/stdlib-js/stdlib/commit/eac188f4def9fa545e9e0cfcd5731a66337fcd1a) - add support for struct data types
-   [`99ecc69`](https://github.com/stdlib-js/stdlib/commit/99ecc6907e9c26dabe4dd8e8dfb3b08d10d622c3) - add `isStructDataType` to namespace
-   [`d20a2ea`](https://github.com/stdlib-js/stdlib/commit/d20a2ea2cba39ea485abb500861a1fdc2088a36c) - add `ndarray/base/assert/is-struct-data-type`
-   [`d97a6dc`](https://github.com/stdlib-js/stdlib/commit/d97a6dce7cbaaeec6168a853a70038d49ca3bf9c) - add `isInputCastingPolicy` to namespace
-   [`76720ca`](https://github.com/stdlib-js/stdlib/commit/76720ca15cf2ab2362923073da524e6d1b882afb) - add `ndarray/base/assert/is-input-casting-policy`
-   [`1bbc59f`](https://github.com/stdlib-js/stdlib/commit/1bbc59f31cd81f3058f6c568567acdbd8056526b) - add `isBooleanIndexDataType` to namespace
-   [`1281240`](https://github.com/stdlib-js/stdlib/commit/128124061f8609ef1a5eaec35e6872ee3e119671) - add `ndarray/base/assert/is-boolean-index-data-type`
-   [`13702c8`](https://github.com/stdlib-js/stdlib/commit/13702c885f2a27bc95d4d563ebd4ed27f10103cc) - add `isMaskIndexDataType` to namespace
-   [`0feae39`](https://github.com/stdlib-js/stdlib/commit/0feae395dfe2c602d11ce118387dbe9270b3a270) - add `ndarray/base/assert/is-mask-index-data-type`
-   [`9c59659`](https://github.com/stdlib-js/stdlib/commit/9c59659f08f6ce5e52a8ae97ed9840391832ac36) - add `isIntegerIndexDataType` to namespace
-   [`262df73`](https://github.com/stdlib-js/stdlib/commit/262df739241e51bd92e21d5cb9168dc71972fec4) - add `ndarray/base/assert/is-integer-index-data-type`
-   [`a61e5b4`](https://github.com/stdlib-js/stdlib/commit/a61e5b4d222cbb72e236f6293279edc87641eb91) - add `isIndexDataType` to namespace
-   [`bd8958d`](https://github.com/stdlib-js/stdlib/commit/bd8958d43f54be203ffa1f6665a51f782a4aca6d) - add `ndarray/base/assert/is-index-data-type`
-   [`d8f2acf`](https://github.com/stdlib-js/stdlib/commit/d8f2acf4d31d3da271e7d2074ffb40a6317c4a23) - update namespace TypeScript declarations [(#6337)](https://github.com/stdlib-js/stdlib/pull/6337)
-   [`1a18317`](https://github.com/stdlib-js/stdlib/commit/1a183174f05d99bf78be477639df489493c01e2b) - add `isScalarMostlySafeCompatible` to namespace
-   [`6003449`](https://github.com/stdlib-js/stdlib/commit/600344933e2836421aa15fb89d62e9a0a9266bd6) - add `ndarray/base/assert/is-scalar-mostly-safe-compatible`
-   [`2f0aa48`](https://github.com/stdlib-js/stdlib/commit/2f0aa48ef6d561779d4bd4c4a54fe00a5a26c0e1) - update namespace TypeScript declarations [(#5436)](https://github.com/stdlib-js/stdlib/pull/5436)
-   [`c1b6794`](https://github.com/stdlib-js/stdlib/commit/c1b6794e36255d7df6795f5f5f4d3e493165f397) - add `isOutputDataTypePolicy` to namespace
-   [`9cabe87`](https://github.com/stdlib-js/stdlib/commit/9cabe87a0ce5401967f41d91dc4479a722ba3288) - add `ndarray/base/assert/is-output-data-type-policy`
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706)
-   [`a94dcea`](https://github.com/stdlib-js/stdlib/commit/a94dceaa9469c774ee4622567e4c15a15e215bcf) - add `isColumnMajorString` to namespace
-   [`76872c7`](https://github.com/stdlib-js/stdlib/commit/76872c76f1c655afe5e87d9d894be37f6a07c08b) - add `ndarray/base/assert/is-column-major-string`
-   [`5e1be08`](https://github.com/stdlib-js/stdlib/commit/5e1be08ff661fb981dc4a91c2e9d37d7396327f5) - add `isRowMajorString` to namespace
-   [`8cce31a`](https://github.com/stdlib-js/stdlib/commit/8cce31aadb16c58d167e89b6b9f8483d9314715f) - add `ndarray/base/assert/is-row-major-string`
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)
-   [`98e4809`](https://github.com/stdlib-js/stdlib/commit/98e480997058c3f21d3016b97d25f4c4e62231b9) - add `isBooleanDataType` to namespace
-   [`3e7f2ca`](https://github.com/stdlib-js/stdlib/commit/3e7f2ca3c987040575b732129281c384c453e0b8) - add `hasEqualShape` to namespace
-   [`6e74647`](https://github.com/stdlib-js/stdlib/commit/6e74647839e3ca184dd7df80df9bd0ede9505469) - add `ndarray/base/assert/has-equal-shape`

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`2f0aa48`](https://github.com/stdlib-js/stdlib/commit/2f0aa48ef6d561779d4bd4c4a54fe00a5a26c0e1): remove `mulf` symbol

    -   To migrate, users should access the same symbol via the `number/float32/base` namespace.

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 2 issues were closed in this release:

[#6604](https://github.com/stdlib-js/stdlib/issues/6604), [#6776](https://github.com/stdlib-js/stdlib/issues/6776)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`eac188f`](https://github.com/stdlib-js/stdlib/commit/eac188f4def9fa545e9e0cfcd5731a66337fcd1a) - **feat:** add support for struct data types _(by Athan Reines)_
-   [`99ecc69`](https://github.com/stdlib-js/stdlib/commit/99ecc6907e9c26dabe4dd8e8dfb3b08d10d622c3) - **feat:** add `isStructDataType` to namespace _(by Athan Reines)_
-   [`d20a2ea`](https://github.com/stdlib-js/stdlib/commit/d20a2ea2cba39ea485abb500861a1fdc2088a36c) - **feat:** add `ndarray/base/assert/is-struct-data-type` _(by Athan Reines)_
-   [`e1e45f6`](https://github.com/stdlib-js/stdlib/commit/e1e45f6323aa212a1ae7bbc0ac584131f7c87805) - **chore:** fix EditorConfig lint errors [(#6860)](https://github.com/stdlib-js/stdlib/pull/6860) _(by zhanggy)_
-   [`6464a4b`](https://github.com/stdlib-js/stdlib/commit/6464a4ba00ba9579a2da77a0e2282a0f03bfdc01) - **docs:** update namespace table of contents [(#6828)](https://github.com/stdlib-js/stdlib/pull/6828) _(by stdlib-bot)_
-   [`9459c45`](https://github.com/stdlib-js/stdlib/commit/9459c452bfd439f732c3eaa20c6ab257c64b10bd) - **test:** add test case _(by Athan Reines)_
-   [`d97a6dc`](https://github.com/stdlib-js/stdlib/commit/d97a6dce7cbaaeec6168a853a70038d49ca3bf9c) - **feat:** add `isInputCastingPolicy` to namespace _(by Athan Reines)_
-   [`76720ca`](https://github.com/stdlib-js/stdlib/commit/76720ca15cf2ab2362923073da524e6d1b882afb) - **feat:** add `ndarray/base/assert/is-input-casting-policy` _(by Athan Reines)_
-   [`b9d5fc2`](https://github.com/stdlib-js/stdlib/commit/b9d5fc27dcdc1d57f94f63be1d05276c63025c14) - **docs:** update namespace table of contents [(#6819)](https://github.com/stdlib-js/stdlib/pull/6819) _(by stdlib-bot, Philipp Burckhardt)_
-   [`1bbc59f`](https://github.com/stdlib-js/stdlib/commit/1bbc59f31cd81f3058f6c568567acdbd8056526b) - **feat:** add `isBooleanIndexDataType` to namespace _(by Athan Reines)_
-   [`1281240`](https://github.com/stdlib-js/stdlib/commit/128124061f8609ef1a5eaec35e6872ee3e119671) - **feat:** add `ndarray/base/assert/is-boolean-index-data-type` _(by Athan Reines)_
-   [`13702c8`](https://github.com/stdlib-js/stdlib/commit/13702c885f2a27bc95d4d563ebd4ed27f10103cc) - **feat:** add `isMaskIndexDataType` to namespace _(by Athan Reines)_
-   [`0feae39`](https://github.com/stdlib-js/stdlib/commit/0feae395dfe2c602d11ce118387dbe9270b3a270) - **feat:** add `ndarray/base/assert/is-mask-index-data-type` _(by Athan Reines)_
-   [`9c59659`](https://github.com/stdlib-js/stdlib/commit/9c59659f08f6ce5e52a8ae97ed9840391832ac36) - **feat:** add `isIntegerIndexDataType` to namespace _(by Athan Reines)_
-   [`262df73`](https://github.com/stdlib-js/stdlib/commit/262df739241e51bd92e21d5cb9168dc71972fec4) - **feat:** add `ndarray/base/assert/is-integer-index-data-type` _(by Athan Reines)_
-   [`a61e5b4`](https://github.com/stdlib-js/stdlib/commit/a61e5b4d222cbb72e236f6293279edc87641eb91) - **feat:** add `isIndexDataType` to namespace _(by Athan Reines)_
-   [`bd8958d`](https://github.com/stdlib-js/stdlib/commit/bd8958d43f54be203ffa1f6665a51f782a4aca6d) - **feat:** add `ndarray/base/assert/is-index-data-type` _(by Athan Reines)_
-   [`710e6dd`](https://github.com/stdlib-js/stdlib/commit/710e6dde3e7201cec996e3bdc70f8be3c0905416) - **refactor:** update signature to use `const` qualifier [(#6610)](https://github.com/stdlib-js/stdlib/pull/6610) _(by Pravesh Kunwar, Athan Reines)_
-   [`5d57761`](https://github.com/stdlib-js/stdlib/commit/5d57761c446339e796d1add0c03b7febfa4253fd) - **chore:** fix EditorConfig lint errors [(#6178)](https://github.com/stdlib-js/stdlib/pull/6178) _(by MANI)_
-   [`2e5d1fc`](https://github.com/stdlib-js/stdlib/commit/2e5d1fc2d31228deaf880f767324e73464a4ed65) - **docs:** update namespace table of contents [(#6339)](https://github.com/stdlib-js/stdlib/pull/6339) _(by stdlib-bot)_
-   [`d8f2acf`](https://github.com/stdlib-js/stdlib/commit/d8f2acf4d31d3da271e7d2074ffb40a6317c4a23) - **feat:** update namespace TypeScript declarations [(#6337)](https://github.com/stdlib-js/stdlib/pull/6337) _(by stdlib-bot)_
-   [`1a18317`](https://github.com/stdlib-js/stdlib/commit/1a183174f05d99bf78be477639df489493c01e2b) - **feat:** add `isScalarMostlySafeCompatible` to namespace _(by Athan Reines)_
-   [`6003449`](https://github.com/stdlib-js/stdlib/commit/600344933e2836421aa15fb89d62e9a0a9266bd6) - **feat:** add `ndarray/base/assert/is-scalar-mostly-safe-compatible` _(by Athan Reines)_
-   [`2f0aa48`](https://github.com/stdlib-js/stdlib/commit/2f0aa48ef6d561779d4bd4c4a54fe00a5a26c0e1) - **feat:** update namespace TypeScript declarations [(#5436)](https://github.com/stdlib-js/stdlib/pull/5436) _(by stdlib-bot)_
-   [`9d532b5`](https://github.com/stdlib-js/stdlib/commit/9d532b5510055d80c5df8ba4c8e897c1670dcd1a) - **docs:** update namespace table of contents [(#5438)](https://github.com/stdlib-js/stdlib/pull/5438) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c1b6794`](https://github.com/stdlib-js/stdlib/commit/c1b6794e36255d7df6795f5f5f4d3e493165f397) - **feat:** add `isOutputDataTypePolicy` to namespace _(by Athan Reines)_
-   [`9cabe87`](https://github.com/stdlib-js/stdlib/commit/9cabe87a0ce5401967f41d91dc4479a722ba3288) - **feat:** add `ndarray/base/assert/is-output-data-type-policy` _(by Athan Reines)_
-   [`2632915`](https://github.com/stdlib-js/stdlib/commit/2632915e58a2949e11840ce39161f5056a700afc) - **test:** fix variable name _(by Athan Reines)_
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - **feat:** update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706) _(by stdlib-bot)_
-   [`cff470f`](https://github.com/stdlib-js/stdlib/commit/cff470f9608165100c8c122fce70c40b1af864ec) - **docs:** update namespace table of contents (#4708) _(by stdlib-bot, Planeshifter)_
-   [`a94dcea`](https://github.com/stdlib-js/stdlib/commit/a94dceaa9469c774ee4622567e4c15a15e215bcf) - **feat:** add `isColumnMajorString` to namespace _(by Athan Reines)_
-   [`76872c7`](https://github.com/stdlib-js/stdlib/commit/76872c76f1c655afe5e87d9d894be37f6a07c08b) - **feat:** add `ndarray/base/assert/is-column-major-string` _(by Athan Reines)_
-   [`5e1be08`](https://github.com/stdlib-js/stdlib/commit/5e1be08ff661fb981dc4a91c2e9d37d7396327f5) - **feat:** add `isRowMajorString` to namespace _(by Athan Reines)_
-   [`8cce31a`](https://github.com/stdlib-js/stdlib/commit/8cce31aadb16c58d167e89b6b9f8483d9314715f) - **feat:** add `ndarray/base/assert/is-row-major-string` _(by Athan Reines)_
-   [`851a95f`](https://github.com/stdlib-js/stdlib/commit/851a95f2201a21f8a1535f61cd002de260bd2236) - **bench:** simplify value selection _(by Athan Reines)_
-   [`264a2fc`](https://github.com/stdlib-js/stdlib/commit/264a2fce5b1fcfdf53cb27fe16980f5414564baf) - **refactor:** use base array utility _(by Athan Reines)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_
-   [`114f651`](https://github.com/stdlib-js/stdlib/commit/114f651d1f29cc711adf2990a10d56470650af48) - **refactor:** use base array assertion utility _(by Athan Reines)_
-   [`98e4809`](https://github.com/stdlib-js/stdlib/commit/98e480997058c3f21d3016b97d25f4c4e62231b9) - **feat:** add `isBooleanDataType` to namespace _(by Athan Reines)_
-   [`3e7f2ca`](https://github.com/stdlib-js/stdlib/commit/3e7f2ca3c987040575b732129281c384c453e0b8) - **feat:** add `hasEqualShape` to namespace _(by Athan Reines)_
-   [`6e74647`](https://github.com/stdlib-js/stdlib/commit/6e74647839e3ca184dd7df80df9bd0ede9505469) - **feat:** add `ndarray/base/assert/has-equal-shape` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   MANI
-   Philipp Burckhardt
-   Pravesh Kunwar
-   zhanggy

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-29)

<section class="features">

### Features

-   [`979cf48`](https://github.com/stdlib-js/stdlib/commit/979cf4883141c4c5545860ac59ae056b2ecd3e43) - add `ndarray/base/assert/is-boolean-data-type` [(#2575)](https://github.com/stdlib-js/stdlib/pull/2575)

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`979cf48`](https://github.com/stdlib-js/stdlib/commit/979cf4883141c4c5545860ac59ae056b2ecd3e43) - **feat:** add `ndarray/base/assert/is-boolean-data-type` [(#2575)](https://github.com/stdlib-js/stdlib/pull/2575) _(by Jaysukh Makvana, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Jaysukh Makvana

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="features">

### Features

-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)
-   [`733ee49`](https://github.com/stdlib-js/stdlib/commit/733ee4954b08c24007460390d688fe86bb1e8fae) - add support for a `mostly-safe` casting mode
-   [`1aefe83`](https://github.com/stdlib-js/stdlib/commit/1aefe83e90f109989a001e85ca25ed278a7c3a50) - add `isMostlySafeDataTypeCast` to namespace
-   [`a8290c4`](https://github.com/stdlib-js/stdlib/commit/a8290c4059e1aa16ed2388a02c5637e58659ae01) - add `ndarray/base/assert/is-mostly-safe-data-type-cast`

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`b501073`](https://github.com/stdlib-js/stdlib/commit/b5010734a696fcd8b0415dfbf302636d408a33e3) - **bench:** simplify array access logic to avoid influencing results _(by Athan Reines)_
-   [`0ad4756`](https://github.com/stdlib-js/stdlib/commit/0ad4756c8d54c35bd503e14d78f5133f6cd6a09d) - **docs:** update examples _(by Athan Reines)_
-   [`e8cab88`](https://github.com/stdlib-js/stdlib/commit/e8cab8848dec80fd00d4355169db890b556fd128) - **docs:** update examples _(by Athan Reines)_
-   [`4c4509f`](https://github.com/stdlib-js/stdlib/commit/4c4509f9a4c6a8aec7dbe57ae8a5d732af2a0095) - **docs:** update examples _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`a405ab5`](https://github.com/stdlib-js/stdlib/commit/a405ab5dd0d868566f7e4efe2dcf605908367632) - **refactor:** use base utility to resolve an ndarray flag _(by Athan Reines)_
-   [`dffeaf2`](https://github.com/stdlib-js/stdlib/commit/dffeaf27e1c892ddb13dc581a1525abfa9b0a8ff) - **refactor:** use array contains utility and add support for `normalize` index mode _(by Athan Reines)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - **feat:** update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122) _(by stdlib-bot, Athan Reines)_
-   [`a17f2aa`](https://github.com/stdlib-js/stdlib/commit/a17f2aaed3f2449944d5c5d348e9550087ff7a87) - **docs:** update namespace table of contents [(#1116)](https://github.com/stdlib-js/stdlib/pull/1116) _(by stdlib-bot, Athan Reines)_
-   [`733ee49`](https://github.com/stdlib-js/stdlib/commit/733ee4954b08c24007460390d688fe86bb1e8fae) - **feat:** add support for a `mostly-safe` casting mode _(by Athan Reines)_
-   [`1aefe83`](https://github.com/stdlib-js/stdlib/commit/1aefe83e90f109989a001e85ca25ed278a7c3a50) - **feat:** add `isMostlySafeDataTypeCast` to namespace _(by Athan Reines)_
-   [`a8290c4`](https://github.com/stdlib-js/stdlib/commit/a8290c4059e1aa16ed2388a02c5637e58659ae01) - **feat:** add `ndarray/base/assert/is-mostly-safe-data-type-cast` _(by Athan Reines)_
-   [`32d8d05`](https://github.com/stdlib-js/stdlib/commit/32d8d0583c9810eb6eb740a54a84921f7a712a3e) - **docs:** document support for `mostly-safe` casting mode _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - update minimum TypeScript version
-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53) - rename `isIntegralDataType` to `isIntegerDataType`
-   [`d96fdc9`](https://github.com/stdlib-js/stdlib/commit/d96fdc905898b96fffcc8ab210ad4b4d6c700565) - add `ndarray/base/assert/is-integer-data-type`
-   [`d0eb2cf`](https://github.com/stdlib-js/stdlib/commit/d0eb2cf2a86e9c9002b3b78218297f3aa57a5ff5) - add `isRealDataType` to namespace
-   [`889da69`](https://github.com/stdlib-js/stdlib/commit/889da694559f4b0da7670277001dc2414e55edd9) - add `ndarray/base/assert/is-real-data-type`
-   [`901dc93`](https://github.com/stdlib-js/stdlib/commit/901dc93c3954e048073b711818553f2a065476f1) - add `isNumericDataType` to namespace
-   [`c326c3f`](https://github.com/stdlib-js/stdlib/commit/c326c3fe89ba54c362395aa53e442ec70a2ad69d) - add `ndarray/base/assert/is-numeric-data-type`
-   [`d3d2708`](https://github.com/stdlib-js/stdlib/commit/d3d2708eb6919b2eace1fb6f0fa06afac138f117) - add `isComplexFloatingPointDataType` to namespace
-   [`7b0d1b0`](https://github.com/stdlib-js/stdlib/commit/7b0d1b09616c4d92e0733564ef3c8b420a9ddb4f) - add `ndarray/base/assert/is-complex-floating-point-data-type`
-   [`088f3e9`](https://github.com/stdlib-js/stdlib/commit/088f3e9fea4a7090b1c1c09765d264acc832094b) - add `isRealFloatingPointDataType` to namespace
-   [`41d3972`](https://github.com/stdlib-js/stdlib/commit/41d3972e82c51bdd6522708d9446fce378e30c8a) - add `ndarray/base/assert/is-real-floating-point-data-type`
-   [`61a6fee`](https://github.com/stdlib-js/stdlib/commit/61a6feec47761cf559d455264a6908a1f4ac545e) - add `isFloatingPointDataType` to namespace
-   [`31ad686`](https://github.com/stdlib-js/stdlib/commit/31ad686cf56d70e9cd1d24043330eb3f4a688684) - add `ndarray/base/assert/is-floating-point-data-type`
-   [`f1b2025`](https://github.com/stdlib-js/stdlib/commit/f1b20259563e3e94ef269e3c98cec028af4e87ae) - add `isIntegralDataType` to namespace
-   [`e2f9bb3`](https://github.com/stdlib-js/stdlib/commit/e2f9bb3c9d922cddeb3bbdac52744c46f4fa6186) - add `ndarray/base/assert/is-integral-data-type`
-   [`74d366e`](https://github.com/stdlib-js/stdlib/commit/74d366e11957a3016839fa6836a021f49e2d4337) - add `isUnsignedIntegerDataType` to namespace
-   [`f2fd134`](https://github.com/stdlib-js/stdlib/commit/f2fd1344eee163ede1839e2be9a537be2d4ec240) - add `ndarray/base/assert/is-unsigned-integer-data-type`
-   [`35dc02a`](https://github.com/stdlib-js/stdlib/commit/35dc02a0c40af961cfe20e14e4ceddaa4012bc4d) - add `isSignedIntegerDataType` to namespace
-   [`063b647`](https://github.com/stdlib-js/stdlib/commit/063b6475df8c93d7b199e77b28325928e960e18b) - add `ndarray/base/assert/is-signed-integer-data-type`

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53): rename `isIntegralDataType` to `isIntegerDataType`

    -   To migrate, users should update their usage accordingly.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`7ae5741`](https://github.com/stdlib-js/stdlib/commit/7ae574143c9716c82cea6cbf839a20b70a9cdfe0) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`55866ea`](https://github.com/stdlib-js/stdlib/commit/55866ea8ef1282528b839fd9ce9c43c6a80056f8) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`a36b160`](https://github.com/stdlib-js/stdlib/commit/a36b160369dcac098c064e78245e4437008885d2) - **docs:** update namespace table of contents [(#995)](https://github.com/stdlib-js/stdlib/pull/995) _(by stdlib-bot, Athan Reines)_
-   [`adc0378`](https://github.com/stdlib-js/stdlib/commit/adc037897e98e120616fcbb0d854ff8b24445b6d) - **docs:** update namespace TypeScript declarations [(#993)](https://github.com/stdlib-js/stdlib/pull/993) _(by stdlib-bot, Athan Reines)_
-   [`2e884c5`](https://github.com/stdlib-js/stdlib/commit/2e884c5c86b0c66990c0aca78f1c0c8eadd18620) - **remove:** remove `ndarray/base/assert/is-integral-data-type` _(by Athan Reines)_
-   [`1e78f7b`](https://github.com/stdlib-js/stdlib/commit/1e78f7b05c30245bd7ae22991ee021ae38a90a53) - **feat:** rename `isIntegralDataType` to `isIntegerDataType` _(by Athan Reines)_
-   [`d96fdc9`](https://github.com/stdlib-js/stdlib/commit/d96fdc905898b96fffcc8ab210ad4b4d6c700565) - **feat:** add `ndarray/base/assert/is-integer-data-type` _(by Athan Reines)_
-   [`86d02e2`](https://github.com/stdlib-js/stdlib/commit/86d02e26cd8dd87d061ec308a03fb21a54065a0e) - **test:** add comments to explain test value distinction _(by Athan Reines)_
-   [`d0eb2cf`](https://github.com/stdlib-js/stdlib/commit/d0eb2cf2a86e9c9002b3b78218297f3aa57a5ff5) - **feat:** add `isRealDataType` to namespace _(by Athan Reines)_
-   [`889da69`](https://github.com/stdlib-js/stdlib/commit/889da694559f4b0da7670277001dc2414e55edd9) - **feat:** add `ndarray/base/assert/is-real-data-type` _(by Athan Reines)_
-   [`901dc93`](https://github.com/stdlib-js/stdlib/commit/901dc93c3954e048073b711818553f2a065476f1) - **feat:** add `isNumericDataType` to namespace _(by Athan Reines)_
-   [`c326c3f`](https://github.com/stdlib-js/stdlib/commit/c326c3fe89ba54c362395aa53e442ec70a2ad69d) - **feat:** add `ndarray/base/assert/is-numeric-data-type` _(by Athan Reines)_
-   [`d3d2708`](https://github.com/stdlib-js/stdlib/commit/d3d2708eb6919b2eace1fb6f0fa06afac138f117) - **feat:** add `isComplexFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`7b0d1b0`](https://github.com/stdlib-js/stdlib/commit/7b0d1b09616c4d92e0733564ef3c8b420a9ddb4f) - **feat:** add `ndarray/base/assert/is-complex-floating-point-data-type` _(by Athan Reines)_
-   [`088f3e9`](https://github.com/stdlib-js/stdlib/commit/088f3e9fea4a7090b1c1c09765d264acc832094b) - **feat:** add `isRealFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`41d3972`](https://github.com/stdlib-js/stdlib/commit/41d3972e82c51bdd6522708d9446fce378e30c8a) - **feat:** add `ndarray/base/assert/is-real-floating-point-data-type` _(by Athan Reines)_
-   [`b4e24c3`](https://github.com/stdlib-js/stdlib/commit/b4e24c345f1bbff346cd95286bc55cbcbaa6f2c9) - **docs:** fix description _(by Athan Reines)_
-   [`61a6fee`](https://github.com/stdlib-js/stdlib/commit/61a6feec47761cf559d455264a6908a1f4ac545e) - **feat:** add `isFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`31ad686`](https://github.com/stdlib-js/stdlib/commit/31ad686cf56d70e9cd1d24043330eb3f4a688684) - **feat:** add `ndarray/base/assert/is-floating-point-data-type` _(by Athan Reines)_
-   [`f1b2025`](https://github.com/stdlib-js/stdlib/commit/f1b20259563e3e94ef269e3c98cec028af4e87ae) - **feat:** add `isIntegralDataType` to namespace _(by Athan Reines)_
-   [`e2f9bb3`](https://github.com/stdlib-js/stdlib/commit/e2f9bb3c9d922cddeb3bbdac52744c46f4fa6186) - **feat:** add `ndarray/base/assert/is-integral-data-type` _(by Athan Reines)_
-   [`74d366e`](https://github.com/stdlib-js/stdlib/commit/74d366e11957a3016839fa6836a021f49e2d4337) - **feat:** add `isUnsignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`f2fd134`](https://github.com/stdlib-js/stdlib/commit/f2fd1344eee163ede1839e2be9a537be2d4ec240) - **feat:** add `ndarray/base/assert/is-unsigned-integer-data-type` _(by Athan Reines)_
-   [`35dc02a`](https://github.com/stdlib-js/stdlib/commit/35dc02a0c40af961cfe20e14e4ceddaa4012bc4d) - **feat:** add `isSignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`063b647`](https://github.com/stdlib-js/stdlib/commit/063b6475df8c93d7b199e77b28325928e960e18b) - **feat:** add `ndarray/base/assert/is-signed-integer-data-type` _(by Athan Reines)_
-   [`8fa429a`](https://github.com/stdlib-js/stdlib/commit/8fa429ae2ad40fcf40be3c65c7f8fe4af0bf5ca3) - **refactor:** use array utility to perform iteration _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

