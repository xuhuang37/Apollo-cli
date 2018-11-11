"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
1.ApplyBus
2.After
 */

let apply = (action, args) => {
  console.log(action, ...args);
};

exports.default = apply;