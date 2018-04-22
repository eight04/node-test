define(['require', 'exports', './chunk-dd5b17ba.js'], function (require, exports, __chunk_1) { 'use strict';

	const moduleVa = __chunk_1.bar;
	function loadModule() {
		return new Promise(function (resolve, reject) { require(["./b.js"], resolve, reject) });
	}

	exports.moduleVa = moduleVa;
	exports.loadModule = loadModule;

	Object.defineProperty(exports, '__esModule', { value: true });

});
