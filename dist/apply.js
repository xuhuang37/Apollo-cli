'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require('./utils/common');

var _path = require('path');

//ApplyBus
let apply = (action, ...args) => {
    let absPath = (0, _path.resolve)(__dirname, `./${action}`);
    console.log(absPath);
    (0, _common.betterRequire)(absPath)(...args);
};

exports.default = apply;