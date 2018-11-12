'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT = exports.RC = exports.VERSION = undefined;

var _package = require('../../package.json');

// Current version number
const VERSION = exports.VERSION = _package.version;

// Find the home path
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
// Locate the rc file
const RC = exports.RC = `${HOME}/.apollorc`;

// Configuration where to pull template
const DEFAULT = exports.DEFAULT = {
    registry: 'apollo-web-template',
    type: 'users'
};