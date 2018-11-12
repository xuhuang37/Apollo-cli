"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// myRequire
let betterRequire = exports.betterRequire = absPath => {
    let module = require(absPath);
    if (module.default) {
        console.log(module.default, 1);
        return module.default;
    }
    console.log(module, 2);
    return module;
};