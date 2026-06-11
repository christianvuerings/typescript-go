//// [tests/cases/compiler/cjsModuleExportsObjectPrivateModuleDeclarationEmit.ts] ////

//// [index.d.ts]
interface Private {
    value: string;
}
declare const pkg: Private;
export = pkg;

//// [index.cjs]
/** @type {typeof import("pkg") | undefined} */
let pkg;

module.exports = { pkg };


//// [index.cjs]
"use strict";
/** @type {typeof import("pkg") | undefined} */
let pkg;
module.exports = { pkg };
