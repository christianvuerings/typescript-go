// @declaration: true
// @allowJs: true
// @checkJs: true
// @module: commonjs
// @target: es6
// @outDir: ./out

// @filename: /node_modules/@types/pkg/index.d.ts
interface Private {
    value: string;
}
declare const pkg: Private;
export = pkg;

// @filename: /index.cjs
/** @type {typeof import("pkg") | undefined} */
let pkg;

module.exports = { pkg };
