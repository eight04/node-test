'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const a = "hello";
const b = () => Promise.resolve(require("./b.js"));

exports.a = a;
exports.b = b;
