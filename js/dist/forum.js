module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(r,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(r,t,e){r=r||{};var n=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};e.en.relativeTime=o;var d=function(t,n,d,i){for(var u,a,f,s=d.$locale().relativeTime||o,l=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=l.length,m=0;m<h;m+=1){var c=l[m];c.d&&(u=i?e(t).diff(d,c.d,!0):d.diff(t,c.d,!0));var y=(r.rounding||Math.round)(Math.abs(u));if(f=u>0,y<=c.r||!c.r){y<=1&&m>0&&(c=l[m-1]);var p=s[c.l];a="string"==typeof p?p.replace("%d",y):p(y,n,c.l,f);break}}if(n)return a;var v=f?s.future:s.past;return"function"==typeof v?v(a):v.replace("%s",a)};n.to=function(r,t){return d(r,t,this,!0)},n.from=function(r,t){return d(r,t,this)};var i=function(r){return r.$u?e.utc():e()};n.toNow=function(r){return this.to(i(this),r)},n.fromNow=function(r){return this.from(i(this),r)}}});


/***/ }),

/***/ "./node_modules/dayjs/plugin/updateLocale.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/updateLocale.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){"use strict";return function(e,n,t){t.updateLocale=function(e,n){var o=t.Ls[e];if(o)return(n?Object.keys(n):[]).forEach(function(e){o[e]=n[e]}),o}}});


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/utils/humanTime */ "flarum/utils/humanTime");
/* harmony import */ var flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/updateLocale */ "./node_modules/dayjs/plugin/updateLocale.js");
/* harmony import */ var dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_3__);




flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('fof-realtimedate', function () {
  var config = {
    thresholds: [{
      l: 's',
      r: 59,
      d: 'second'
    }, {
      l: 'ss',
      r: 10
    }, {
      l: 'm',
      r: 1
    }, {
      l: 'mm',
      r: 59,
      d: 'minute'
    }, {
      l: 'h',
      r: 1
    }, {
      l: 'hh',
      r: 23,
      d: 'hour'
    }, {
      l: 'd',
      r: 1
    }, {
      l: 'dd',
      r: 29,
      d: 'day'
    }, {
      l: 'M',
      r: 1
    }, {
      l: 'MM',
      r: 11,
      d: 'month'
    }, {
      l: 'y'
    }, {
      l: 'yy',
      d: 'year'
    }],
    rounding: Math.round
  };
  dayjs.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a, config);
  dayjs.extend(dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_3___default.a);
  dayjs.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: '%d seconds',
      ss: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    }
  });

  function updateHumanTimes() {
    $('[data-humantime]').each(function () {
      var $this = $(this);
      var ago = flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_1___default()($this.attr('datetime'));
      $this.html(ago);
    });
  }

  $(document).ready(function () {
    setInterval(updateHumanTimes, 1000);
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/utils/humanTime":
/*!********************************************************!*\
  !*** external "flarum.core.compat['utils/humanTime']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/humanTime'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map