/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/Deferred.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/Deferred.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js"
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js"
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js"
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js"
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js"
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js"
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js"
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/timeout.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/timeout.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/waitUntil.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/waitUntil.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js ***!
  \*************************************************************************************/
() {


// @ts-ignore
try {
    self['workbox:core:7.3.0'] && _();
}
catch (e) { }


/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/copyResponse.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/copyResponse.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messageGenerator.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messages.js"
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messages.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ },

/***/ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/quotaErrorCallbacks.js"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheController.js"
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheController.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) // removed by dead control flow
{}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js"
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \***************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheRoute.js"
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheStrategy.js"
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_types.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_types.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js ***!
  \*************************************************************************************************/
() {


// @ts-ignore
try {
    self['workbox:precaching:7.3.0'] && _();
}
catch (e) { }


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addPlugins.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addPlugins.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addRoute.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addRoute.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js"
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/createHandlerBoundToURL.js"
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/getCacheKeyForURL.js"
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/matchPrecache.js"
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/matchPrecache.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precache.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precache.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precacheAndRoute.js"
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js"
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js"
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/createCacheKey.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js"
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/generateURLVariations.js"
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js"
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printCleanupDetails.js"
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printInstallDetails.js"
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js"
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ },

/***/ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/RegExpRoute.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/RegExpRoute.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Route.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Route.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Router.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Router.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js ***!
  \*******************************************************************************************/
() {


// @ts-ignore
try {
    self['workbox:routing:7.3.0'] && _();
}
catch (e) { }


/***/ },

/***/ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/registerRoute.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/registerRoute.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/constants.js"
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/constants.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ },

/***/ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js"
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ },

/***/ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/normalizeHandler.js"
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ },

/***/ "./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/Strategy.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/Strategy.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ },

/***/ "./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/StrategyHandler.js"
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/StrategyHandler.js ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillBeUsed()
     * - cachedResponseWillBeUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillBeUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread may be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        while (this._extendLifetimePromises.length) {
            const promises = this._extendLifetimePromises.splice(0);
            const result = await Promise.allSettled(promises);
            const firstRejection = result.find((i) => i.status === 'rejected');
            if (firstRejection) {
                throw firstRejection.reason;
            }
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ },

/***/ "./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/_version.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/_version.js ***!
  \*************************************************************************************************/
() {


// @ts-ignore
try {
    self['workbox:strategies:7.3.0'] && _();
}
catch (e) { }


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.mjs"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.mjs ***!
  \***********************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.js");


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@3.9.2_@docusaurus+plugin-content-docs@3.9.2_@mdx-js+react@3.1.1__17bc0f4a9140f46f42450450a5f0c818/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \***************************************************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://x.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) // removed by dead control flow
{}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"9314fc99a93246ad2caabd2bc68729a5","url":"tw_stocks.json"},{"revision":"73071926144e4ba95dd4d6fc32aeea40","url":"quotes.html"},{"revision":"6ca3f087f4d77ca49ff9b453d267a2dc","url":"me.html"},{"revision":"98f52637a6f6820f586b9cd72c4d7837","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"d91906e8ea1d7087437b3139ad08e9e1","url":"index.html"},{"revision":"a9f5595339e11183d451b834373a537f","url":"finance.html"},{"revision":"56f992fd5ee7dc300b30dd404fbf3014","url":"feedback.html"},{"revision":"8e0db74158cc8f21a1efb1062f822c5d","url":"blog.html"},{"revision":"56c99f702f842273615106264db746fc","url":"404.html"},{"revision":"2ff0905cc7fd7a75473c08e0475db376","url":"tw_stocks/9958.json"},{"revision":"08c7d72c406acfcadc34ef20cfc310d8","url":"tw_stocks/9955.json"},{"revision":"fe2756480049f09150ce853454dd4bb2","url":"tw_stocks/9946.json"},{"revision":"3d0eb867e59ce57d1e6ca6bdd0d85fff","url":"tw_stocks/9945.json"},{"revision":"aecb7b18ceb3c99fccbd081627d74e39","url":"tw_stocks/9944.json"},{"revision":"cac6db30b143287c028a1b289719394b","url":"tw_stocks/9943.json"},{"revision":"82b379a93e658a552e62628db56f2360","url":"tw_stocks/9942.json"},{"revision":"a6693c4f6557cf7a7045f69227de6716","url":"tw_stocks/9941.json"},{"revision":"7c2a7feb0e9f79c1acf07512d2116ecd","url":"tw_stocks/9940.json"},{"revision":"e84d30d5a066fc2071a23391883e1eb1","url":"tw_stocks/9939.json"},{"revision":"dc24485ebea1602988293f0e0b0226b2","url":"tw_stocks/9938.json"},{"revision":"e3553d8b131b869f4ce122e030bc516d","url":"tw_stocks/9937.json"},{"revision":"dfe81990130db5eb1aa66c18923372c7","url":"tw_stocks/9935.json"},{"revision":"34213e185d3da449032452f87c205ce0","url":"tw_stocks/9934.json"},{"revision":"108160c94be6efe59a0a8305b4be702d","url":"tw_stocks/9933.json"},{"revision":"1bc8c9d579d90aa4ff8d8453f8337a01","url":"tw_stocks/9931.json"},{"revision":"df9ba4d371a306101b56a5ebea7da200","url":"tw_stocks/9930.json"},{"revision":"efc59339267ed9a7f817a086fa316f0b","url":"tw_stocks/9929.json"},{"revision":"4d295d277fabaa64acf955292beea16a","url":"tw_stocks/9928.json"},{"revision":"c016b5c3ab921cdf036655e369551101","url":"tw_stocks/9927.json"},{"revision":"c54f8417e9487ab2c650060247c46140","url":"tw_stocks/9926.json"},{"revision":"55bfb936183450bdd2ed986d30a418c5","url":"tw_stocks/9925.json"},{"revision":"b283be7a8c0e74c6fc22e65aaf5168ac","url":"tw_stocks/9924.json"},{"revision":"966dc966f10b5b738b622edf15bc34f2","url":"tw_stocks/9921.json"},{"revision":"77107baa80ecb26efd9ae83139c8786f","url":"tw_stocks/9919.json"},{"revision":"40f24041abb721460df1e1c653a23456","url":"tw_stocks/9918.json"},{"revision":"3032ae3826786cb04d72132459b8836a","url":"tw_stocks/9917.json"},{"revision":"8dce4ccf28219bc9597de86822e8312b","url":"tw_stocks/9914.json"},{"revision":"a88fb8fe1be4b7c22742b1d15c52f0e3","url":"tw_stocks/9912.json"},{"revision":"e84518fc54563cc585792f0249975c90","url":"tw_stocks/9911.json"},{"revision":"80896c15df56dc503c30b3253c1418ff","url":"tw_stocks/9910.json"},{"revision":"ec4c87afb40b1ca192540b23b4ffcc65","url":"tw_stocks/9908.json"},{"revision":"4abe6897c2aae4f03567bc9a0ea4b018","url":"tw_stocks/9907.json"},{"revision":"aeaea50378c9ed3c9e5fae31aaa92eb4","url":"tw_stocks/9906.json"},{"revision":"794c6b7e6f34abc4aac0f1d48981223a","url":"tw_stocks/9905.json"},{"revision":"157c7c11b74d071744a910a885e7fa2b","url":"tw_stocks/9904.json"},{"revision":"1c47e1976a7e91036026ef6d3f01752b","url":"tw_stocks/9902.json"},{"revision":"5c47ec92165dbfcb0ba71b532972020e","url":"tw_stocks/9802.json"},{"revision":"ba76f64cf01ee1b8622ac80f2085b383","url":"tw_stocks/8996.json"},{"revision":"5c924b4284524d7d8dd3c9dc4567449f","url":"tw_stocks/8940.json"},{"revision":"dc22538df0e107135309d20a8dad74d9","url":"tw_stocks/8926.json"},{"revision":"a2dcd8f97bbfa747a2a40b375d165dbe","url":"tw_stocks/8499.json"},{"revision":"18623670be74cead8242b9b52b8a3c77","url":"tw_stocks/8488.json"},{"revision":"f71afb2de4bac6b59a54225d46f00a81","url":"tw_stocks/8482.json"},{"revision":"77e0ea28cb82ed7da58c6a205afda6ba","url":"tw_stocks/8481.json"},{"revision":"fff25813fb885d4b8f0bcacc25758009","url":"tw_stocks/8478.json"},{"revision":"5d0d85307458bbe67f783019fc185cf5","url":"tw_stocks/8476.json"},{"revision":"201fffc62c8a6a299828cfd35ebe76b8","url":"tw_stocks/8473.json"},{"revision":"e1db9f4f03ce41d4241a41b2127dfb8d","url":"tw_stocks/8467.json"},{"revision":"3d276efad647dee40511ef06537a278c","url":"tw_stocks/8466.json"},{"revision":"ab75c3361a4923d16846e71025d79acd","url":"tw_stocks/8464.json"},{"revision":"d8d7daa8bb25dd8a32aec650f2854723","url":"tw_stocks/8463.json"},{"revision":"9e198435b43de511fb4ec83eb8a181c8","url":"tw_stocks/8462.json"},{"revision":"d2ea66890a2906fb223582de532fa9ca","url":"tw_stocks/8454.json"},{"revision":"ea1fc6f265d578463b34889df36bb340","url":"tw_stocks/8443.json"},{"revision":"f7d1c4b4fea8b36d4403f35e66cd738c","url":"tw_stocks/8442.json"},{"revision":"2d6914fa5e0f1a3d2d0828bda1768f19","url":"tw_stocks/8438.json"},{"revision":"c928a4f784bcaf4e9207b0df24ac0c5f","url":"tw_stocks/8429.json"},{"revision":"5e7818bd348bb96d7cad97ab0e1b87ca","url":"tw_stocks/8422.json"},{"revision":"1eba14bc3b49ffe7a17d8cf9c29a2915","url":"tw_stocks/8411.json"},{"revision":"d133aa4b1b5fd48b434fa1eb909d89c0","url":"tw_stocks/8404.json"},{"revision":"c4aa0707494fbb4425f8604bab6ccf7b","url":"tw_stocks/8374.json"},{"revision":"571e20eb658e85f0369338fb37cd4c72","url":"tw_stocks/8367.json"},{"revision":"2e4a45cde2a1c8d9d390aab52150bd83","url":"tw_stocks/8341.json"},{"revision":"79cd63de3d66748e4d5cc115936d3de9","url":"tw_stocks/8271.json"},{"revision":"e513e28f52f22e7c25de45432cbe21b6","url":"tw_stocks/8261.json"},{"revision":"97e433b9c644ba21f93033bb04a5f1f5","url":"tw_stocks/8249.json"},{"revision":"a6046075936aa959a4ebd85ebb102daf","url":"tw_stocks/8222.json"},{"revision":"6ed0359b8290f2a0d4d92ee57c21502c","url":"tw_stocks/8215.json"},{"revision":"0b7c876bbf4191a44ce5730e147b570f","url":"tw_stocks/8213.json"},{"revision":"e4041e3be00633756d3e6de7bd4d6f75","url":"tw_stocks/8210.json"},{"revision":"b420b5edd2f1b638ecba378c6abdbb47","url":"tw_stocks/8201.json"},{"revision":"e6d0b98491a10568d6526124119b00ad","url":"tw_stocks/8163.json"},{"revision":"d30d910c7e8eef1c8ef33fb5974bb136","url":"tw_stocks/8150.json"},{"revision":"79b2e54cc4d3d58895841e8bf42a6e64","url":"tw_stocks/8131.json"},{"revision":"317d9edab26c04fba6be09a8317cf187","url":"tw_stocks/8114.json"},{"revision":"512d7c3911cd5afefda8fa8a8f31098a","url":"tw_stocks/8112.json"},{"revision":"a8f330d5c745ed8a4d45a65fc6eb786b","url":"tw_stocks/8110.json"},{"revision":"92fdc7416aa2344df344b656c35903a3","url":"tw_stocks/8105.json"},{"revision":"c4e2ab2212c609fe747c7268b67d50aa","url":"tw_stocks/8104.json"},{"revision":"a54b00c2bca6c1e2cfec5caebef675cf","url":"tw_stocks/8103.json"},{"revision":"6065370786b06a20904be6641ff9ebae","url":"tw_stocks/8101.json"},{"revision":"d986693b0c7a4eac5aa3dbbb354680d4","url":"tw_stocks/8081.json"},{"revision":"32e16acb2a2e364ba8eeab64fab2dab3","url":"tw_stocks/8072.json"},{"revision":"191c3e1a1834012196a7a4dfc73258ae","url":"tw_stocks/8070.json"},{"revision":"535278ce7fcc6548da8b5af45959e43c","url":"tw_stocks/8046.json"},{"revision":"3d4b04444edc0a17dd0a71b3e76fe1be","url":"tw_stocks/8045.json"},{"revision":"5985ff9ee8c0bece7c89a38125cbd17b","url":"tw_stocks/8039.json"},{"revision":"40bd02bd1d0fd3d84b8f64b659d5acbd","url":"tw_stocks/8033.json"},{"revision":"062b0a67ccb57d15dcd85e778493c6e0","url":"tw_stocks/8028.json"},{"revision":"ef2c5243b1b891f8cbd97160c8e57fca","url":"tw_stocks/8021.json"},{"revision":"854767b743aaaba898f2f55cd6ca56cb","url":"tw_stocks/8016.json"},{"revision":"119e96400f9550eb4b0b75418ecd9a35","url":"tw_stocks/8011.json"},{"revision":"204650329c63f0155caa790b42504c97","url":"tw_stocks/7799.json"},{"revision":"3503f0680c21539efd78a43f7423178e","url":"tw_stocks/7795.json"},{"revision":"93d4457f41626808f28b221eb756d57c","url":"tw_stocks/7791.json"},{"revision":"29aa2b88136e159510745cd8b9e719c7","url":"tw_stocks/7788.json"},{"revision":"33d05cd82f3a4345760d70d8de822d49","url":"tw_stocks/7786.json"},{"revision":"8e77e6a057dad28855a82ce3a81b5a98","url":"tw_stocks/7780.json"},{"revision":"ac468f0ebb9a0a530242eb4bd8e754c1","url":"tw_stocks/7769.json"},{"revision":"5c67e17a8399a630f966f8f6c87f33b6","url":"tw_stocks/7765.json"},{"revision":"f9466ad148106b1c56f3cb58a72aea97","url":"tw_stocks/7750.json"},{"revision":"b516f8f87ce53cff323e7ee2cb0277a9","url":"tw_stocks/7749.json"},{"revision":"e940c6ad587090f6310b2dc2c9501154","url":"tw_stocks/7736.json"},{"revision":"fae1a86f8e66dda533ecf44a74d32db1","url":"tw_stocks/7732.json"},{"revision":"e77889fdd450a7803b4dc1f9e1262103","url":"tw_stocks/7722.json"},{"revision":"72e8ae822ed720c98458b81b808b4091","url":"tw_stocks/7721.json"},{"revision":"433638e35e0fec73085cd3657c7950c7","url":"tw_stocks/7711.json"},{"revision":"dfa018aea68b3c4b2c64c092cc624c76","url":"tw_stocks/7705.json"},{"revision":"5ee505fc0e57629fc405d34f8f3c9dc9","url":"tw_stocks/6994.json"},{"revision":"f0a9615cfa3b633ae2255b872e20d790","url":"tw_stocks/6965.json"},{"revision":"ee7c9c3e66ab017b8e6e28113f1fab20","url":"tw_stocks/6962.json"},{"revision":"feffa32f9f19ab059d467745c79ef2c0","url":"tw_stocks/6958.json"},{"revision":"54a31d9fe4fb18d46855779e1c958b40","url":"tw_stocks/6957.json"},{"revision":"a56a432ace1a3aa338b6a87ed92af587","url":"tw_stocks/6952.json"},{"revision":"87d327c2bca3d6cda0746c395dfa845f","url":"tw_stocks/6944.json"},{"revision":"9d5d47dd509fde61b141d086002110ef","url":"tw_stocks/6937.json"},{"revision":"87274e4f574bcdcea6cf4ff738c2e172","url":"tw_stocks/6936.json"},{"revision":"0a85a4d9b9a2f5d71fd270c2b469465a","url":"tw_stocks/6934.json"},{"revision":"d676b39f494d22035c84a7d64ee83273","url":"tw_stocks/6933.json"},{"revision":"2778adebeec0b722a7503ed7207565dd","url":"tw_stocks/6931.json"},{"revision":"b4d024c81c7e6719393f628bb6666156","url":"tw_stocks/6928.json"},{"revision":"073bb27fb6e5e8264732f7b8ebcdb890","url":"tw_stocks/6923.json"},{"revision":"9342f26bda1c7cb84ac0074c3d174082","url":"tw_stocks/6919.json"},{"revision":"88e61d85b29b990456092b58074e67b8","url":"tw_stocks/6918.json"},{"revision":"15b0fecc904da9f61140aebe70121f6f","url":"tw_stocks/6916.json"},{"revision":"4fb7be5b60d950ea742727584e7cb923","url":"tw_stocks/6914.json"},{"revision":"cad9165154c2a0a6d20705392a411281","url":"tw_stocks/6909.json"},{"revision":"e65be028c1a6a08c410fb99cf7f67a15","url":"tw_stocks/6906.json"},{"revision":"11b088cee0b64794e7a230bcaae2f909","url":"tw_stocks/6902.json"},{"revision":"d8b56620570bbd3f70c1725f7c026d9f","url":"tw_stocks/6901.json"},{"revision":"a2b8b4c298a1bc6ff058e28d82810868","url":"tw_stocks/6890.json"},{"revision":"f7da1149935b787a37f74ca8ad371085","url":"tw_stocks/6887.json"},{"revision":"88fd39d5f5fc646fdbd0cb2e75430e2a","url":"tw_stocks/6885.json"},{"revision":"f8f7580dfcf8a79ec101b8dfd8c6715b","url":"tw_stocks/6873.json"},{"revision":"7abcfae0350af67d3d93f7735deebd12","url":"tw_stocks/6869.json"},{"revision":"9b3ddbd1760647ca896eaaeefbee63cb","url":"tw_stocks/6863.json"},{"revision":"987f945e1b475109d91629a281d6cd33","url":"tw_stocks/6862.json"},{"revision":"10bf372d0c967d6dd7ea4f5a54f75029","url":"tw_stocks/6861.json"},{"revision":"6b7825da936de58cc5323413a3e47084","url":"tw_stocks/6838.json"},{"revision":"40e14c8da6decc0c56eca063a159084b","url":"tw_stocks/6835.json"},{"revision":"79aec987a4dcb3f30d109d8e8892d044","url":"tw_stocks/6834.json"},{"revision":"e66898534ea3e31714a3792309a907e5","url":"tw_stocks/6831.json"},{"revision":"7edb1b400d1e205c5032c8ae7089c5cf","url":"tw_stocks/6830.json"},{"revision":"0eb92c2a043ea4f253165f854aa38dab","url":"tw_stocks/6807.json"},{"revision":"048109e689cd44ecd64caee50892d661","url":"tw_stocks/6806.json"},{"revision":"8804755659cfd4c021aa10da94ac49ef","url":"tw_stocks/6805.json"},{"revision":"2cb0f69dc1e09b6a27e83c56ce8e51f5","url":"tw_stocks/6799.json"},{"revision":"972ae2ff1f4cf5f88918ae929e118481","url":"tw_stocks/6796.json"},{"revision":"dc96f8ebfdfb7908407b7cc51d8fa23e","url":"tw_stocks/6794.json"},{"revision":"4b2708304ff0c30ebbf3741612803d7f","url":"tw_stocks/6792.json"},{"revision":"815071e7e6ea01b670aed5ddaac0025e","url":"tw_stocks/6790.json"},{"revision":"4cac8ce200872b37a04adb1b95b64aac","url":"tw_stocks/6789.json"},{"revision":"a5381b2d814d79e50b3f985dd7c8abda","url":"tw_stocks/6782.json"},{"revision":"e705e4ebd26626416295d9faf2be6bef","url":"tw_stocks/6781.json"},{"revision":"a9e6d4291ba5d32b4efbc61e94a56c39","url":"tw_stocks/6776.json"},{"revision":"1710631194c70c7dc04f78c59b87d916","url":"tw_stocks/6770.json"},{"revision":"81149e502a9095a066dad6998dcc538a","url":"tw_stocks/6768.json"},{"revision":"96f78a4ec895b9bf6cd97a4b9fa8168f","url":"tw_stocks/6757.json"},{"revision":"f538e9c0010ab82785299a755281e087","url":"tw_stocks/6756.json"},{"revision":"40a10a43956a1f1e8c949292f453ce76","url":"tw_stocks/6754.json"},{"revision":"4d9e4d3e180646b5568d3aff1de25fcb","url":"tw_stocks/6753.json"},{"revision":"637374ef2a4dfed42547f9728406400b","url":"tw_stocks/6743.json"},{"revision":"92e07d074606dc58f3a099048560c769","url":"tw_stocks/6742.json"},{"revision":"97b4400d81e74afb861865cf09a305bb","url":"tw_stocks/6722.json"},{"revision":"bbfafce6a0b93aa8cb1c40ceaa638105","url":"tw_stocks/6719.json"},{"revision":"af6c64613fe7ee76b93301668cc00fa6","url":"tw_stocks/6715.json"},{"revision":"2fee8cadfc73295a6d5024130c52bd1c","url":"tw_stocks/6706.json"},{"revision":"b727bf35e5ee29f924482458c2f3e316","url":"tw_stocks/6698.json"},{"revision":"b8978a94b6c403281bf209334166cd35","url":"tw_stocks/6695.json"},{"revision":"8572d6b1849232429d8eda2de8504972","url":"tw_stocks/6691.json"},{"revision":"5f4dc3c0a1cdd0bbad89a63befa99e80","url":"tw_stocks/6689.json"},{"revision":"6fa0cd3724b5cddc35d9117b2a1fd197","url":"tw_stocks/6674.json"},{"revision":"7de922a7387d0ba1b8e8dcc9f80f5187","url":"tw_stocks/6672.json"},{"revision":"3becf941eb369878db523a0b8d402924","url":"tw_stocks/6671.json"},{"revision":"42b7f508e70783c6366ffed430b00bce","url":"tw_stocks/6670.json"},{"revision":"45487d02c5d6eaefa9a30ee2b4b283bb","url":"tw_stocks/6669.json"},{"revision":"261a4616610d1b0dae08794b617b86d6","url":"tw_stocks/6668.json"},{"revision":"d19f5e7cc6c940f900c75f2927553453","url":"tw_stocks/6666.json"},{"revision":"91aea8d4b8bf5b5db1f4fe4a4b3f63e4","url":"tw_stocks/6658.json"},{"revision":"90e8af3b2c494c18519bf9133b9b9cec","url":"tw_stocks/6657.json"},{"revision":"4cfcc64659f6e09fab7d20b022bf7c1a","url":"tw_stocks/6655.json"},{"revision":"00a0ed7be819e4bbbcc82c7f69cec8a0","url":"tw_stocks/6641.json"},{"revision":"4386e3f479893f5a0b8db0ae72dc6c55","url":"tw_stocks/6625.json"},{"revision":"8858557885d1dbbc97b2aae421c9e4ba","url":"tw_stocks/6614.json"},{"revision":"acf008ddcc02b11856a4680fcf521d25","url":"tw_stocks/6606.json"},{"revision":"e79230780427e6647203592f6568793d","url":"tw_stocks/6605.json"},{"revision":"b144717195cb22e9588e289bbfb3b73c","url":"tw_stocks/6598.json"},{"revision":"75dd1f53e0e9acb1822f707193aad9a7","url":"tw_stocks/6592.json"},{"revision":"8e6a513eb5d15dd9903bae28c5e6ee26","url":"tw_stocks/6591.json"},{"revision":"430bc449416efa70fb73c025349e041f","url":"tw_stocks/6589.json"},{"revision":"b72b4f68b0ff351b238d3a23a0b64196","url":"tw_stocks/6585.json"},{"revision":"dad222761ceb74bdf704f2ac3ea309d7","url":"tw_stocks/6582.json"},{"revision":"6c39a8ff19a6c9aa9ad093ed7136f5a8","url":"tw_stocks/6581.json"},{"revision":"b208038c2d02aa9b124b3d3a1b0af3ad","url":"tw_stocks/6579.json"},{"revision":"db72f450add9a4cbb54789c7ec7f0092","url":"tw_stocks/6573.json"},{"revision":"ab83a297377be337b4dccb02e9a6f2a8","url":"tw_stocks/6558.json"},{"revision":"39df06427489b5b5b5335de1d7225f7f","url":"tw_stocks/6552.json"},{"revision":"fc473471495396b6f6e6f12b87453746","url":"tw_stocks/6550.json"},{"revision":"7d7abfd151d3556fb5a7f1aea8e94d71","url":"tw_stocks/6541.json"},{"revision":"ede36238deed24ae79940c10cc3f8b8f","url":"tw_stocks/6533.json"},{"revision":"d16117a7ccaf13317a66318ed2c4b40e","url":"tw_stocks/6531.json"},{"revision":"f8f84c7886b7ed0c0f2f08017fa260eb","url":"tw_stocks/6526.json"},{"revision":"f47e4ad95d73484aaa0491be838f5e7f","url":"tw_stocks/6525.json"},{"revision":"1969d776f5ed144a1d29c5078e0a68fd","url":"tw_stocks/6515.json"},{"revision":"91c68682afe75385bbe75803bf9fbdcf","url":"tw_stocks/6505.json"},{"revision":"927d7ef9d43bceec78bce9cbca2b97d3","url":"tw_stocks/6504.json"},{"revision":"db12a0b43f86a9539a321f8143f35d7a","url":"tw_stocks/6491.json"},{"revision":"d6e80969010e80ad720555b37df4129e","url":"tw_stocks/6477.json"},{"revision":"d77dfd1eb60eea340009aca21ad7eb5b","url":"tw_stocks/6472.json"},{"revision":"d24bd70284eaaf15992538540004b6b2","url":"tw_stocks/6464.json"},{"revision":"ab1435cc4a4dab38c2642d659ac242d7","url":"tw_stocks/6456.json"},{"revision":"af53b8ec8914a7245a9c5749e68c9037","url":"tw_stocks/6451.json"},{"revision":"62a47580bd2c0891f58f77fd33bd11aa","url":"tw_stocks/6449.json"},{"revision":"dd3db2300428fa92ecf679d03f6e32e8","url":"tw_stocks/6446.json"},{"revision":"830bd5e2d954077c5471ebe9571e8103","url":"tw_stocks/6443.json"},{"revision":"db918c42bd4dd14d596858d61b11ee03","url":"tw_stocks/6442.json"},{"revision":"d7b4e9af9e31e606deddbbc6d41f79db","url":"tw_stocks/6438.json"},{"revision":"775d7e79814048233abfca13f6861db5","url":"tw_stocks/6431.json"},{"revision":"6f753d0834e0d870c52586287fde7460","url":"tw_stocks/6426.json"},{"revision":"6780009bd8859ae44a667a5e091bb7f9","url":"tw_stocks/6416.json"},{"revision":"f02ca09f54281f94bda2ec46c361ef32","url":"tw_stocks/6415.json"},{"revision":"007144732509b3117371145e8acbb611","url":"tw_stocks/6414.json"},{"revision":"b44418f888838ceecc3a56caca170d56","url":"tw_stocks/6412.json"},{"revision":"6cb7a898d80129cf0ee28a376d837ba5","url":"tw_stocks/6409.json"},{"revision":"b53627e4de5d09547beeac114a362e95","url":"tw_stocks/6405.json"},{"revision":"e03e504bc7c91aa7ad924d172a9d8c7f","url":"tw_stocks/6285.json"},{"revision":"97b38211706775b6fecde780842daa28","url":"tw_stocks/6283.json"},{"revision":"84c6502ee54a7698c95c2a73fe882fb9","url":"tw_stocks/6282.json"},{"revision":"13a293341528ca36d40cd4038c812f36","url":"tw_stocks/6281.json"},{"revision":"43a0e445d851c63c43879670ba0eced4","url":"tw_stocks/6278.json"},{"revision":"fccb4de415888982c7dc334c7ea4b789","url":"tw_stocks/6277.json"},{"revision":"aff938db4f9a753ead433d36e4c916ed","url":"tw_stocks/6272.json"},{"revision":"e77f1f5f647f510d7d0cb076e8dd1a5c","url":"tw_stocks/6271.json"},{"revision":"04f507bf27aa3c7aaa53f0a7b23d0603","url":"tw_stocks/6269.json"},{"revision":"e7c43468b730972bf0d03e34b234f7d1","url":"tw_stocks/6257.json"},{"revision":"dd5da2bf06edf9c7e5e7d612bac0e709","url":"tw_stocks/6243.json"},{"revision":"51db6ebe526df61dad825c92b8324ad9","url":"tw_stocks/6239.json"},{"revision":"babeeb6672a4274ddf4f7ab60ffc87a4","url":"tw_stocks/6235.json"},{"revision":"7a5b100566eaae4ba0d0a159a3df4cdf","url":"tw_stocks/6230.json"},{"revision":"14cb7233c04f0da479d7cfc127de7f99","url":"tw_stocks/6226.json"},{"revision":"2e7de4a62fba2df683901be35aeef593","url":"tw_stocks/6225.json"},{"revision":"a2b5a001d6f994a15728d96b5118a18b","url":"tw_stocks/6224.json"},{"revision":"b3919fd5963757b4bb1350a4df38ac1f","url":"tw_stocks/6216.json"},{"revision":"b3f2d6ccffaf54a3b897172f2da2b0fb","url":"tw_stocks/6215.json"},{"revision":"f3d0bba5681541eea0e7113d6b8a28b3","url":"tw_stocks/6214.json"},{"revision":"c37111fd126b7dc8aa41244e6a42e7ee","url":"tw_stocks/6213.json"},{"revision":"83302d341af1efc70a7527d8221e55da","url":"tw_stocks/6209.json"},{"revision":"85e3c89acb629e91b0c25ee811a9bfd5","url":"tw_stocks/6206.json"},{"revision":"972400e4cb675e5dbb03eaa0e77dc7bb","url":"tw_stocks/6205.json"},{"revision":"9d281919e56ae35e168713e7f213904f","url":"tw_stocks/6202.json"},{"revision":"4068eaaa74d46d64f5225de775fcb982","url":"tw_stocks/6201.json"},{"revision":"bff42178199bf2cc1a649d0a992ed614","url":"tw_stocks/6197.json"},{"revision":"05af678509086af6231992bfb2f5e251","url":"tw_stocks/6196.json"},{"revision":"491310b1b0a24b85d67d46740b2c1351","url":"tw_stocks/6192.json"},{"revision":"ac3f9ee6b5562eea6dec13a29a000305","url":"tw_stocks/6191.json"},{"revision":"7a10fba02b240044690be9b342c27cd4","url":"tw_stocks/6189.json"},{"revision":"45ab0ce80aa9c27255439c7375db7d97","url":"tw_stocks/6184.json"},{"revision":"87cd4be336c85d55470f602c40cc05d3","url":"tw_stocks/6183.json"},{"revision":"cebc6db60f3ee6a717efaa7978a20792","url":"tw_stocks/6177.json"},{"revision":"5c708305392d9c46eac5366438ba936b","url":"tw_stocks/6176.json"},{"revision":"60fe8611432289109fd0203ba706a61c","url":"tw_stocks/6168.json"},{"revision":"f99fafdc29f290dea8b481efdfec84c8","url":"tw_stocks/6166.json"},{"revision":"1d451e05522a86394d3af84d90a857cd","url":"tw_stocks/6165.json"},{"revision":"ffe363e25d63c7696ba4030a43e40cd5","url":"tw_stocks/6164.json"},{"revision":"639841ece509449f403f91a2f46a56e0","url":"tw_stocks/6155.json"},{"revision":"ab20917d4adfe9816450235c7b3fe727","url":"tw_stocks/6153.json"},{"revision":"39f5c797e7023ce57e432d35b76bcd68","url":"tw_stocks/6152.json"},{"revision":"ab6edaa1b3a38982e1409c267c5c955a","url":"tw_stocks/6142.json"},{"revision":"582b21f10148ab7207cc3f66af0c90f4","url":"tw_stocks/6141.json"},{"revision":"0c263ed451391ec76ad8ea34a6db4d25","url":"tw_stocks/6139.json"},{"revision":"fdb5e6e9a0c416c6e163c70402015726","url":"tw_stocks/6136.json"},{"revision":"2edd542ec15e98b8a2e3c77fbfde0350","url":"tw_stocks/6133.json"},{"revision":"1cb7007fe3c0600a4ed83bff02c8bc88","url":"tw_stocks/6128.json"},{"revision":"12d49f61230add3dafc6459f06ef3cc3","url":"tw_stocks/6120.json"},{"revision":"dc16dad72ba9e44dd315a838f72aba15","url":"tw_stocks/6117.json"},{"revision":"bd0eeaa4c46819e0d823b36d0c3fb839","url":"tw_stocks/6116.json"},{"revision":"8577e49ebd6184347f702109086eef4d","url":"tw_stocks/6115.json"},{"revision":"6a0c9dafbf5a4e3f724781e58106bf31","url":"tw_stocks/6112.json"},{"revision":"f2947b9b32329112c473ed8373ee03fd","url":"tw_stocks/6108.json"},{"revision":"22518d70fe2e023513cc7da14d23162d","url":"tw_stocks/6024.json"},{"revision":"827f5be6db314dfc9e1b6ddf7474321e","url":"tw_stocks/6005.json"},{"revision":"5833d8943ef12f4468b2439ce23892b9","url":"tw_stocks/5907.json"},{"revision":"8abe3f72f3f6d5927db83e1a7baa182c","url":"tw_stocks/5906.json"},{"revision":"e59812e7dc5676b68ad56eed180f8ac6","url":"tw_stocks/5880.json"},{"revision":"cf4d07e55da5569395bd46f5a45471a5","url":"tw_stocks/5876.json"},{"revision":"e926e61c728b331abad867c4cf011c6c","url":"tw_stocks/5871.json"},{"revision":"0d2418fdf7d8df42931d33832505f281","url":"tw_stocks/5706.json"},{"revision":"b24cc5ee5a20492e2fbd0238445b7cb3","url":"tw_stocks/5608.json"},{"revision":"9907a7caf997a83be767ee272f1282c2","url":"tw_stocks/5607.json"},{"revision":"3f44b54f86a16c8f77d4ae4a626d578a","url":"tw_stocks/5546.json"},{"revision":"0533cd94ccf89b26c1e01f6af1be44e0","url":"tw_stocks/5538.json"},{"revision":"fb6e0f26d6a0ccf446cdab2408a9895f","url":"tw_stocks/5534.json"},{"revision":"ad9e1962a0f7f8c2d0c14ddc817d4cee","url":"tw_stocks/5533.json"},{"revision":"8b61583b94646288129bf4ab283a3445","url":"tw_stocks/5531.json"},{"revision":"1625a3a271aa3197b025d59133d1b140","url":"tw_stocks/5525.json"},{"revision":"7b0c1febbf98286b14e55144ff30fa22","url":"tw_stocks/5522.json"},{"revision":"7705f48c07ae372ae4c5543d07dcd73b","url":"tw_stocks/5521.json"},{"revision":"75fc03e1735074116b861d1c97316fa0","url":"tw_stocks/5519.json"},{"revision":"b5732d119a62b6437a2eeb8fb93c2e11","url":"tw_stocks/5515.json"},{"revision":"713ce461c1910ad9b9c543aa2cbd6091","url":"tw_stocks/5484.json"},{"revision":"a2afc49cf4a790644ee2370cffea1940","url":"tw_stocks/5471.json"},{"revision":"209c0f2123b97d4c5ce7033315687d5e","url":"tw_stocks/5469.json"},{"revision":"430d14da22b96abe1b10e745ef4bc6db","url":"tw_stocks/5434.json"},{"revision":"ad0dcdd01033a4474c6e3e58d70db269","url":"tw_stocks/5388.json"},{"revision":"6e2213a07fb840a21d4588ca783d0152","url":"tw_stocks/5306.json"},{"revision":"df253b508d92806f81e85ff2249d5c51","url":"tw_stocks/5292.json"},{"revision":"2aa930a9fed628652aca5b9c7052d254","url":"tw_stocks/5288.json"},{"revision":"a7e4354e39db69c75c22b9549b5f26f2","url":"tw_stocks/5285.json"},{"revision":"3eddfeed5cac5d456478a51efeb0681a","url":"tw_stocks/5284.json"},{"revision":"a5e772db991f01aab9c7cff007c069ea","url":"tw_stocks/5283.json"},{"revision":"c935de43a578e07d7729b53935e07d78","url":"tw_stocks/5269.json"},{"revision":"7f9f867fbdd03bd959a118f1895ad8da","url":"tw_stocks/5258.json"},{"revision":"4d8d2215064640754867649fd6e50949","url":"tw_stocks/5244.json"},{"revision":"27970a1d58a43a76715773ad48acf46a","url":"tw_stocks/5243.json"},{"revision":"fb437fd02577fb9d43504cc6f1df2752","url":"tw_stocks/5234.json"},{"revision":"d5de6d57802e7565690aff1a416871f6","url":"tw_stocks/5225.json"},{"revision":"60b277aba8ae140b2f0bd9032e72e308","url":"tw_stocks/5222.json"},{"revision":"679e905f571cfb4c7cfd1184f076532e","url":"tw_stocks/5215.json"},{"revision":"829ac7ede764aef426e9945b5fa0a091","url":"tw_stocks/5203.json"},{"revision":"cc4e36edaa4f6cf194231a86dbe19d65","url":"tw_stocks/5007.json"},{"revision":"e6fc8ca5ad745418cf7a907bc8abd6fb","url":"tw_stocks/4999.json"},{"revision":"2c12ec499fbd5b9b81a29a576984c21c","url":"tw_stocks/4994.json"},{"revision":"b7bd5cd469163b0020485e07d45c0520","url":"tw_stocks/4989.json"},{"revision":"507902d3cecf437e4e2a19332e184cd1","url":"tw_stocks/4977.json"},{"revision":"3bda284cd2072919e17efe735b8863cd","url":"tw_stocks/4976.json"},{"revision":"64667dc1615c252b22d43298c5a5ce8c","url":"tw_stocks/4968.json"},{"revision":"d52a7520adbd338b6a167e64cc4d3eac","url":"tw_stocks/4967.json"},{"revision":"2f7946a4dee429a671f5659fc6803666","url":"tw_stocks/4961.json"},{"revision":"9e2177783dc5e06946089b5e905b7fb5","url":"tw_stocks/4960.json"},{"revision":"c0691556ca82dc21cde4798029a7232b","url":"tw_stocks/4958.json"},{"revision":"651c4d7d7bdeae5f7c64ffcc243e9b0b","url":"tw_stocks/4956.json"},{"revision":"7f576ecff431ea86ebee3977d84b7405","url":"tw_stocks/4952.json"},{"revision":"cffda1566f15efb1c03aea4f236b38ea","url":"tw_stocks/4949.json"},{"revision":"84dd56e9eb6165c0fe0ed3c086e5fe09","url":"tw_stocks/4943.json"},{"revision":"b0e950691aae12f9a925798d958ab57d","url":"tw_stocks/4942.json"},{"revision":"ac26aedafa58fe03b94ce05a5e81e3d0","url":"tw_stocks/4938.json"},{"revision":"42d3ba07a31569af7ae5ca285c32d06b","url":"tw_stocks/4935.json"},{"revision":"1bd8a5c9d7a491115a9d6416704f0d0c","url":"tw_stocks/4934.json"},{"revision":"ea83b4c8cba5cc8b81df7cd71b3f4cae","url":"tw_stocks/4930.json"},{"revision":"44e7a657c7b5f1fd2380deb9deb9a98a","url":"tw_stocks/4927.json"},{"revision":"ebc64bfe55544cdce2b3d869e0ea6850","url":"tw_stocks/4919.json"},{"revision":"53dc60e002c404f31d8e2523dd2ab3df","url":"tw_stocks/4916.json"},{"revision":"50feafa5f89e185ae12db59a7ef97970","url":"tw_stocks/4915.json"},{"revision":"7b731acdebab24a670ebc0d6c810822c","url":"tw_stocks/4912.json"},{"revision":"a350d4a92ed0f2c506a5692c7b490f24","url":"tw_stocks/4906.json"},{"revision":"eb5648ec696e716018ae6109326847f4","url":"tw_stocks/4904.json"},{"revision":"db2475ab84da83e394a7883b19af45b8","url":"tw_stocks/4807.json"},{"revision":"4905b8039792256079d0ffc1fe3a41c9","url":"tw_stocks/4771.json"},{"revision":"324587b14b288caea353fca4067f57d4","url":"tw_stocks/4770.json"},{"revision":"3ac15c020ca06dc9bde695cf3b9c9c8f","url":"tw_stocks/4766.json"},{"revision":"94e11af69ffc6be53389301473366eda","url":"tw_stocks/4764.json"},{"revision":"909ee2bed3057b75d3ce2be57a8f47eb","url":"tw_stocks/4763.json"},{"revision":"cf9962721773a089d8b5bfee723c00c9","url":"tw_stocks/4755.json"},{"revision":"96123c5c67ff7f106e516c9f3c4df4da","url":"tw_stocks/4746.json"},{"revision":"458a6285b355470001425a48310ba55b","url":"tw_stocks/4739.json"},{"revision":"8a5cdca3ce35cce9eea619359c56d37d","url":"tw_stocks/4737.json"},{"revision":"9ff6b9f75496efdb379b6761e72d4125","url":"tw_stocks/4736.json"},{"revision":"5ff4e544b5131935186cd7d230740f3b","url":"tw_stocks/4722.json"},{"revision":"6b04fad8d17191e3d50b493026578792","url":"tw_stocks/4720.json"},{"revision":"2a3fb10798871d15dc8ba77fad792848","url":"tw_stocks/4588.json"},{"revision":"dcfbe03448cee994e30384704e82c65d","url":"tw_stocks/4585.json"},{"revision":"6382bfa5f2e82ab39880a117ee0c7aa7","url":"tw_stocks/4583.json"},{"revision":"88938c69105ae19d3f834c8a9aa7e719","url":"tw_stocks/4581.json"},{"revision":"d4c2595f3de1cb2031a488e4f44abeed","url":"tw_stocks/4576.json"},{"revision":"a145a866db0270b8cc5614ccd469f319","url":"tw_stocks/4572.json"},{"revision":"875c1356e7d4e2f3c75420bc1b1c6447","url":"tw_stocks/4571.json"},{"revision":"d701d03fa83bebd56a0b74c67cb823cf","url":"tw_stocks/4569.json"},{"revision":"5416c69f8374984a8e626167630c3a36","url":"tw_stocks/4566.json"},{"revision":"cd8ee2b60664da553e60cfb64f2f4099","url":"tw_stocks/4564.json"},{"revision":"b232dc03e6bb63cfc21c5d6f47631815","url":"tw_stocks/4562.json"},{"revision":"e53f2893bd5a3ee89945e31dcf4411be","url":"tw_stocks/4560.json"},{"revision":"edbe36af580a7c21da3db3e0101e81b2","url":"tw_stocks/4557.json"},{"revision":"8737e36f990e1c4e42648f95b8039926","url":"tw_stocks/4555.json"},{"revision":"10ea7d70b125ff5d6692dc522d472fd9","url":"tw_stocks/4552.json"},{"revision":"0b311701bbce0b9ff6152ea342183eef","url":"tw_stocks/4551.json"},{"revision":"5b53a36ebf3ad72a5d684bbff38d2fa4","url":"tw_stocks/4545.json"},{"revision":"2f72d57ae081c595a185d5cfa35824c1","url":"tw_stocks/4540.json"},{"revision":"5b5c8fd133b84f5a7515d5174b69f85f","url":"tw_stocks/4536.json"},{"revision":"f50b3ed2ee11ca8f29ad4ec4dc3e14dc","url":"tw_stocks/4532.json"},{"revision":"78b977afb10de41654ed4bf4dae79fc3","url":"tw_stocks/4526.json"},{"revision":"a060b29aa91ac0ddc535f06a616df25d","url":"tw_stocks/4441.json"},{"revision":"171fb3d0ca3ba05a87b8b04abb73b155","url":"tw_stocks/4440.json"},{"revision":"b107e18d879fa1db5e0f636048a5b05c","url":"tw_stocks/4439.json"},{"revision":"f1bb2440a767d8418b02f772fd913802","url":"tw_stocks/4438.json"},{"revision":"7f9777d6309111afdd79562069370ccf","url":"tw_stocks/4426.json"},{"revision":"502fd0941673bcff82c3ed86c854d8ba","url":"tw_stocks/4414.json"},{"revision":"5f04fe8f975f8814e645cbef9bbf39b1","url":"tw_stocks/4306.json"},{"revision":"35847cff5ec0d8285c094fe5f9a77c18","url":"tw_stocks/4190.json"},{"revision":"d7d04a6607d55ae49733c9be3520b472","url":"tw_stocks/4164.json"},{"revision":"625e3b037d17243f894a10094d73569b","url":"tw_stocks/4155.json"},{"revision":"521b6c0869f84d40ce8aefee90c5890e","url":"tw_stocks/4148.json"},{"revision":"a44df716d197610f21fabaa5e5227501","url":"tw_stocks/4142.json"},{"revision":"f8d0ac0e794ff4401723293901f9caed","url":"tw_stocks/4137.json"},{"revision":"f5f7cd2356d601f1ceca00ee965ddac9","url":"tw_stocks/4133.json"},{"revision":"6dfa1166b90e4b2793eccf45f2d2cb1b","url":"tw_stocks/4119.json"},{"revision":"4d505783db5b806adfab6bd522c7bdfe","url":"tw_stocks/4108.json"},{"revision":"d9822f869a998d3de705ec4aa9e2d805","url":"tw_stocks/4106.json"},{"revision":"1f39acea73868fc5124765ba8da07dbb","url":"tw_stocks/4104.json"},{"revision":"0863e0c11899e01aca79fd4b1504ccca","url":"tw_stocks/3717.json"},{"revision":"7488e45a1363b29339a60a4fedbd7e3a","url":"tw_stocks/3716.json"},{"revision":"96bb334d5feb2cb41fb008a82d3565e0","url":"tw_stocks/3715.json"},{"revision":"2ed0dc00640cf642cd2fc34583979929","url":"tw_stocks/3714.json"},{"revision":"540adf0bef9bcfcac040360f66b264fa","url":"tw_stocks/3712.json"},{"revision":"8efeba8992a11f9b60dcd99c95adabed","url":"tw_stocks/3711.json"},{"revision":"aa27734493480f844cef213f328073fc","url":"tw_stocks/3708.json"},{"revision":"98d4829f58b62104008ba6157ae55f64","url":"tw_stocks/3706.json"},{"revision":"51358ab9108f26fa83192a807060fcd1","url":"tw_stocks/3705.json"},{"revision":"7276ebc46d893bc50ce78aaae44bc0d3","url":"tw_stocks/3704.json"},{"revision":"a88562f4089682a7c5aeba6cf3dc747c","url":"tw_stocks/3703.json"},{"revision":"ad40139bd1f6c5d44455f19b104743d2","url":"tw_stocks/3702.json"},{"revision":"7970c1537d29c4862c37d58b6736fc45","url":"tw_stocks/3701.json"},{"revision":"ffbb8a66536dc94bdcc867170b6f4d04","url":"tw_stocks/3694.json"},{"revision":"7794b509102041ba13c7d21b261083d5","url":"tw_stocks/3686.json"},{"revision":"f0b4ef2ae0763273f72022922a71cb66","url":"tw_stocks/3679.json"},{"revision":"3a00fc119c56ed25d08b5e0630006b92","url":"tw_stocks/3673.json"},{"revision":"b17315a84351eabe375e8e38ad2e2f08","url":"tw_stocks/3669.json"},{"revision":"1f83e6b2968c242e12b11ed74e0cc67d","url":"tw_stocks/3665.json"},{"revision":"bbd680d1fae7cbaee52ae207b5b0abfe","url":"tw_stocks/3661.json"},{"revision":"287c4ec061bacbe084582f5d8ccecd5f","url":"tw_stocks/3653.json"},{"revision":"7aeebd87d4a1998717e2e28c14725815","url":"tw_stocks/3652.json"},{"revision":"7a4301385e9fbf5f0f5405c810452916","url":"tw_stocks/3645.json"},{"revision":"46e82c066b3612fb8c9094753c63e4b4","url":"tw_stocks/3622.json"},{"revision":"615ae5a80237a9366d4ab278d27c0831","url":"tw_stocks/3617.json"},{"revision":"f8a0d13131fb1fb36cb1b424bb9b5e59","url":"tw_stocks/3607.json"},{"revision":"0c491a3abef4483795f215aa058e0ea6","url":"tw_stocks/3605.json"},{"revision":"8746319e5b53e37c70cace713f78e1e4","url":"tw_stocks/3596.json"},{"revision":"f3509672ee0a03f3cb4812179cb3047e","url":"tw_stocks/3593.json"},{"revision":"f01b397825bc449e7ad70ed67aaeac0f","url":"tw_stocks/3592.json"},{"revision":"454543485d5db7f87654c78cf0638c52","url":"tw_stocks/3591.json"},{"revision":"a69d1eda871afbbdd71d14dd6d3baf35","url":"tw_stocks/3588.json"},{"revision":"61c7f0845f9f690e51b955154c514983","url":"tw_stocks/3583.json"},{"revision":"3570b1b66df5c791e1e8ea426082cf70","url":"tw_stocks/3576.json"},{"revision":"66ebde0245ee47292d11265b470211c7","url":"tw_stocks/3563.json"},{"revision":"61ac2fb81b33aa442f9dd8dfcdffbe4b","url":"tw_stocks/3557.json"},{"revision":"30ab8cc2ec0a55e0cda22653939c8ae2","url":"tw_stocks/3550.json"},{"revision":"e0333c0539c624c83d54327a2b04f963","url":"tw_stocks/3545.json"},{"revision":"bac595276f035905d06187afe5c1f258","url":"tw_stocks/3543.json"},{"revision":"b4a569a3528980b69d4bcb20a73014fd","url":"tw_stocks/3535.json"},{"revision":"2c4c1cf790530bd3cbd8c6fab76150e9","url":"tw_stocks/3533.json"},{"revision":"f1dcaeb5165ce58b0d145dc7f2d9c65c","url":"tw_stocks/3532.json"},{"revision":"e845c86a3a466026e663a7a010682f42","url":"tw_stocks/3530.json"},{"revision":"b1c551c7fcc847b8cd0bdffa5ef96860","url":"tw_stocks/3528.json"},{"revision":"3354814f3003b77fb41aad582fdac4b2","url":"tw_stocks/3518.json"},{"revision":"b06a584f810a53917745a47c3602612f","url":"tw_stocks/3515.json"},{"revision":"f24cc47311a8b0a3f53c7648f42016d9","url":"tw_stocks/3504.json"},{"revision":"168544503491e295841ba1acf689edcf","url":"tw_stocks/3501.json"},{"revision":"388397d0d1725e28360d7c8216c9e897","url":"tw_stocks/3494.json"},{"revision":"0ec2e31b580d66d9176ffcc2fea93411","url":"tw_stocks/3481.json"},{"revision":"664bc4fca68c79e6e879ac8254d5a4cb","url":"tw_stocks/3454.json"},{"revision":"d91e2b36f51979b2b49d2c14aa3cdce3","url":"tw_stocks/3450.json"},{"revision":"ed677c5df152b23d901d6012ad90d677","url":"tw_stocks/3447.json"},{"revision":"eb62797aaebfb73c832c42f2deb230e7","url":"tw_stocks/3443.json"},{"revision":"f786db9a5ed20052860c3dced8b0033b","url":"tw_stocks/3437.json"},{"revision":"5f67e87e688cbf26e3cc65b7792c7327","url":"tw_stocks/3432.json"},{"revision":"fa7bfa129a65c9681910acfc5f83aa4d","url":"tw_stocks/3419.json"},{"revision":"e2245167d1fbca82ef88c8206742e249","url":"tw_stocks/3416.json"},{"revision":"6b78398c03135fc1d8fc911d0cf79d72","url":"tw_stocks/3413.json"},{"revision":"4ffa162dfb6425e4feb9403d88ececaa","url":"tw_stocks/3406.json"},{"revision":"6692145bd091a8bb254922d736bfff8d","url":"tw_stocks/3380.json"},{"revision":"f99c9090983afe5288cabc2a737688e2","url":"tw_stocks/3376.json"},{"revision":"336b19424b6726c69f1e4b01714873a9","url":"tw_stocks/3356.json"},{"revision":"340f324e862720e3d37f99f467a31994","url":"tw_stocks/3346.json"},{"revision":"78719395852f77a5833f3224f6640633","url":"tw_stocks/3338.json"},{"revision":"92f524a0ba59c4db8c90bc53ebdd5d56","url":"tw_stocks/3321.json"},{"revision":"66502ca2359ba8828099cd33079584dc","url":"tw_stocks/3312.json"},{"revision":"f200c58e6c783514b793a088b52de161","url":"tw_stocks/3311.json"},{"revision":"f9c2648f9ea3c5d350d8620fd4a63d50","url":"tw_stocks/3308.json"},{"revision":"7511361eea2bc929c97fcd4c8e813f7e","url":"tw_stocks/3305.json"},{"revision":"7b484443efeffef211f54401fe89b7ee","url":"tw_stocks/3296.json"},{"revision":"aeb1272ff8ca0e2ae513ff3b3c9af6f2","url":"tw_stocks/3266.json"},{"revision":"0ec76769b9072e9ca2e6b70c6dccf167","url":"tw_stocks/3257.json"},{"revision":"b0a4d616c69f34c5712e4b53f7fdfb87","url":"tw_stocks/3231.json"},{"revision":"0c4bf7a2ec39f0efa1d696a07ea467c0","url":"tw_stocks/3229.json"},{"revision":"9519942dadd4ebfdc118e4f7156a8ffc","url":"tw_stocks/3209.json"},{"revision":"8669d324c1f521b38d8ebf3cb253aecc","url":"tw_stocks/3189.json"},{"revision":"a7ad4d4ba2c447e7115ee56d7697272a","url":"tw_stocks/3168.json"},{"revision":"0a24288f00b4b6b3d1494c209220e9a3","url":"tw_stocks/3167.json"},{"revision":"e4c7220cbd19f4ca53707040af392e29","url":"tw_stocks/3164.json"},{"revision":"96f2beb3bab91c5036a3e5a3ccae16c5","url":"tw_stocks/3149.json"},{"revision":"41f8b1be31b7bc39d2b76a5c1e80ddc1","url":"tw_stocks/3138.json"},{"revision":"530e8fa12e3b88f79d3a32b5076fe56d","url":"tw_stocks/3135.json"},{"revision":"54c2438d19cc77efe077e2d6554af231","url":"tw_stocks/3130.json"},{"revision":"9b5be1bb3457cf5d346a3017604a2fd0","url":"tw_stocks/3094.json"},{"revision":"fb92bcd6956a7ad76ff4cb4712379305","url":"tw_stocks/3092.json"},{"revision":"e5aa6db3deadb56472477223e7803500","url":"tw_stocks/3090.json"},{"revision":"77c77aeb2bf6f380ab37b1ed17171c10","url":"tw_stocks/3062.json"},{"revision":"7099a8a0d9e025dcbf1ad8caf669b811","url":"tw_stocks/3060.json"},{"revision":"98ab9cf3f54f8518803cdb91b23e2e36","url":"tw_stocks/3059.json"},{"revision":"05f62b89db7a0f7de358f318b36d319d","url":"tw_stocks/3058.json"},{"revision":"615144b2d6f717ec4ae2518455d471a1","url":"tw_stocks/3057.json"},{"revision":"5c9900f0b9773b58651fcca0b5f7a92e","url":"tw_stocks/3056.json"},{"revision":"1f5cc87787698e629e6e0f1490d0ddbc","url":"tw_stocks/3055.json"},{"revision":"b8ac9a33eba39388790db8ad9ff5550c","url":"tw_stocks/3054.json"},{"revision":"f06c3d058663121778b3b5c68f18c0c5","url":"tw_stocks/3052.json"},{"revision":"92fe31fc21615830c98b35b7730a34b0","url":"tw_stocks/3051.json"},{"revision":"ec9913ac09042af190318e7d76d1bfe0","url":"tw_stocks/3050.json"},{"revision":"83fa252b5e0bfa17f0a0f27a443b2bb0","url":"tw_stocks/3049.json"},{"revision":"8582cd717bdb81a3c5311da4eb06cbda","url":"tw_stocks/3048.json"},{"revision":"7972401f0bf2938e05e6fbcb221d307c","url":"tw_stocks/3047.json"},{"revision":"98f0337c78ae3efe2c51b73b0a06bf9a","url":"tw_stocks/3046.json"},{"revision":"744d07855d9d425840e472e60348e9b9","url":"tw_stocks/3045.json"},{"revision":"7a74f6039977c124ad3aa5fa1f3d6b79","url":"tw_stocks/3044.json"},{"revision":"5df1a0554a7290ebc51af2582d8030e0","url":"tw_stocks/3043.json"},{"revision":"55e284f1c4e5ab44f480dcf1ee894f3e","url":"tw_stocks/3042.json"},{"revision":"7f05a60aa82f1c56e66fc5af4f3e769b","url":"tw_stocks/3041.json"},{"revision":"cc900c50ef0f739e35de73f695f8d45f","url":"tw_stocks/3040.json"},{"revision":"5bca070c6eadc2b9ecc2f0c2dbe0d76d","url":"tw_stocks/3038.json"},{"revision":"3b32f3bad8f7e15e4c04e5190b007f4f","url":"tw_stocks/3037.json"},{"revision":"b1ac44b5452fb55aaa20f825a4cc4fa9","url":"tw_stocks/3036.json"},{"revision":"8e7c4890745995bdb0203c671d6064b5","url":"tw_stocks/3035.json"},{"revision":"d23b88dac6ab767892ea3cceaf90583e","url":"tw_stocks/3034.json"},{"revision":"f1bbd4fd289d8156acc864909bfe597b","url":"tw_stocks/3033.json"},{"revision":"0efe2c7dc246906bdd1ce1951d171136","url":"tw_stocks/3032.json"},{"revision":"6a2e47154617e2d1bddb29b498dd3c85","url":"tw_stocks/3031.json"},{"revision":"0261e8a6d310e90c6685b8dc18d5288d","url":"tw_stocks/3030.json"},{"revision":"9be252646d3f28952087b68519fdabac","url":"tw_stocks/3029.json"},{"revision":"2ed19028f0a0dff757db18cbe8d094a8","url":"tw_stocks/3028.json"},{"revision":"40019a65f930251755610e32ee85cfe3","url":"tw_stocks/3027.json"},{"revision":"bbdc23c4d885246afcc0c51057771cf9","url":"tw_stocks/3026.json"},{"revision":"42ebf9272a041c7d8a15c169ae29d038","url":"tw_stocks/3025.json"},{"revision":"8c8ef2ddade712e3122b8b4e38b34ef4","url":"tw_stocks/3024.json"},{"revision":"6ddc4a84d7c8deec54812c61c16d7c43","url":"tw_stocks/3023.json"},{"revision":"9c135300edc4699186b0d0aac3438540","url":"tw_stocks/3022.json"},{"revision":"f9915c69f41d1da095092b83e236f925","url":"tw_stocks/3021.json"},{"revision":"8511eeff11467d6c5f45f2064dc9a0d8","url":"tw_stocks/3019.json"},{"revision":"9d75a2c7b67c1718b967ed9e5057b6da","url":"tw_stocks/3018.json"},{"revision":"401c9ba53bed598d49c9390985e30aeb","url":"tw_stocks/3017.json"},{"revision":"d8bf4c031cd790d32431381b416e0449","url":"tw_stocks/3016.json"},{"revision":"b0d56f2e0f0efb5fe9653b9801f7a74e","url":"tw_stocks/3015.json"},{"revision":"db4a859d0e691429875670574e8ace17","url":"tw_stocks/3014.json"},{"revision":"a6acfac0bf75030bfce61480a1aa59ba","url":"tw_stocks/3013.json"},{"revision":"7a063f4ed316d8c238f70918d58ae678","url":"tw_stocks/3011.json"},{"revision":"0048ce42ca82df8c193b6165b4c08409","url":"tw_stocks/3010.json"},{"revision":"97e57beb8493f8943925df11d801459c","url":"tw_stocks/3008.json"},{"revision":"9ce0ac67013f45b4cbf5480be32cf674","url":"tw_stocks/3006.json"},{"revision":"717d63dabc3771e089856ca49e071d78","url":"tw_stocks/3005.json"},{"revision":"c3662a06b6ffa5e597885de3a4bd6a83","url":"tw_stocks/3004.json"},{"revision":"4d44940377806d1e5ac2e42a6dcc7a3a","url":"tw_stocks/3003.json"},{"revision":"fa5de85aee251c8a94229e64c460e2d2","url":"tw_stocks/3002.json"},{"revision":"fa3d91d7fab5473a7623aa8d38d64551","url":"tw_stocks/2945.json"},{"revision":"b5ea1eed3c3a7441ffb94f5e8082f964","url":"tw_stocks/2939.json"},{"revision":"98dd8858c9d4b6cf605c9325bf33d72c","url":"tw_stocks/2929.json"},{"revision":"d7a68eba10451c6de6ec24f116509782","url":"tw_stocks/2923.json"},{"revision":"f1a41f2e6fb09c7c9f35fb304eb47b95","url":"tw_stocks/2915.json"},{"revision":"f28f2433697aec08d8140eb9bd252347","url":"tw_stocks/2913.json"},{"revision":"da468664be0b0f7d88092ef02c553cf5","url":"tw_stocks/2912.json"},{"revision":"880aa8d56fe050e626e25986dccd450c","url":"tw_stocks/2911.json"},{"revision":"656129d19ba8415ba90f0b9631c15f9d","url":"tw_stocks/2910.json"},{"revision":"64f04e0ccbff2ad576f773fecea253de","url":"tw_stocks/2908.json"},{"revision":"6f52ef93e879f3b5c1f106c8f9102a6e","url":"tw_stocks/2906.json"},{"revision":"4e194162f7038d080addc7af6547466e","url":"tw_stocks/2905.json"},{"revision":"6c639bc4df08a21ca1e1d0be5dff0eaf","url":"tw_stocks/2904.json"},{"revision":"642665d37a79e8042421c081c7d7fe54","url":"tw_stocks/2903.json"},{"revision":"ecf59f70788041176a3c69d22a5f0ec1","url":"tw_stocks/2901.json"},{"revision":"f9a60c46c91690bf4dab33c0c91e9ead","url":"tw_stocks/2897.json"},{"revision":"763fe0d0add0cf6577c4129868942f11","url":"tw_stocks/2892.json"},{"revision":"8e3514adb8a16a86961e4cac3659d9e5","url":"tw_stocks/2891.json"},{"revision":"1b10de2314f1a79054d7ba2e17e44bfb","url":"tw_stocks/2890.json"},{"revision":"11074cb333b723da95b255ed65dcc4eb","url":"tw_stocks/2889.json"},{"revision":"180bac7f600011c50b117186dfb0a0f6","url":"tw_stocks/2887.json"},{"revision":"b5ce81286156699f67539a66a4de35d7","url":"tw_stocks/2886.json"},{"revision":"7ee2dcf64aa6075cb60ceccc1c6973e5","url":"tw_stocks/2885.json"},{"revision":"cebbc1d9b1cc5d4169436482dcced0b3","url":"tw_stocks/2884.json"},{"revision":"8f24539cc0f4a0b330bd7113c86b602c","url":"tw_stocks/2883.json"},{"revision":"2a2e2647f65fe0f2358ed2ea662cbb67","url":"tw_stocks/2882.json"},{"revision":"6f77fc30bf0af129cf30ff915d475366","url":"tw_stocks/2881.json"},{"revision":"8f22ff0a289b62b101552f203a33ac64","url":"tw_stocks/2880.json"},{"revision":"6cef7a1e46f76b952f13ce7d7ea3d84a","url":"tw_stocks/2867.json"},{"revision":"fe19eccfd2daa77fee0e0a08bc841c9a","url":"tw_stocks/2855.json"},{"revision":"e2b57e2a6267d999245fb6a1deb9b5c6","url":"tw_stocks/2852.json"},{"revision":"422cb2f77f20d90fdbfb49a4dc065f74","url":"tw_stocks/2851.json"},{"revision":"cc4b630c97345c2eed450eecd3c4ca92","url":"tw_stocks/2850.json"},{"revision":"8908ae8e73025cf18a2bdd106263e128","url":"tw_stocks/2849.json"},{"revision":"c1975ced3ac5888cc59a18342cd7f8a1","url":"tw_stocks/2845.json"},{"revision":"de13c4f4d180ff91fb9fb9564693225c","url":"tw_stocks/2838.json"},{"revision":"da52421d7995bcebdeca1d6b89d090d9","url":"tw_stocks/2836.json"},{"revision":"c43028d65e05be2a77694e447d5c7ff3","url":"tw_stocks/2834.json"},{"revision":"4dc812c1f8e5f53be90e41a5a96621e3","url":"tw_stocks/2832.json"},{"revision":"41458c6d07b365c23546eee37e00798a","url":"tw_stocks/2820.json"},{"revision":"d83569fe0305546f23ea5430247bc9a8","url":"tw_stocks/2816.json"},{"revision":"0367df74649cc311f64157b2896f060f","url":"tw_stocks/2812.json"},{"revision":"034aec98e2e10a87998c23e0966342ec","url":"tw_stocks/2801.json"},{"revision":"38b844611f65a56c0832f5dea2ece917","url":"tw_stocks/2762.json"},{"revision":"ac3e660ea0b513a51f9277900de44d87","url":"tw_stocks/2753.json"},{"revision":"0856538a4154cb32e5447a104a67082c","url":"tw_stocks/2748.json"},{"revision":"b45539b79a33d840ebec2beaa9f9aca8","url":"tw_stocks/2739.json"},{"revision":"e66670c203efc8e5ec406ade05dd1a31","url":"tw_stocks/2731.json"},{"revision":"5c4c9e84d40d99bb4b1445792db1b37d","url":"tw_stocks/2727.json"},{"revision":"999dea6e1c23197504e8548e76d805af","url":"tw_stocks/2723.json"},{"revision":"2f75ea8e52ed0d9b35e1b33255e6f924","url":"tw_stocks/2722.json"},{"revision":"3618bdb03f0b7c6abc904ec9999e4a59","url":"tw_stocks/2712.json"},{"revision":"f384c156d6b0dc5f04ba5ad19294327f","url":"tw_stocks/2707.json"},{"revision":"9b2cc9c5fe2df04149d3794e48aae60d","url":"tw_stocks/2706.json"},{"revision":"86e424909a1c880cfc29adc3686d6359","url":"tw_stocks/2705.json"},{"revision":"f3a209ee9c4f1c0a78f0803ffcaba69a","url":"tw_stocks/2704.json"},{"revision":"a436cd134792943528c1d4676012a358","url":"tw_stocks/2702.json"},{"revision":"0725211a0fe97504ff8369e9393aba6b","url":"tw_stocks/2701.json"},{"revision":"d51f3c7178f6bea482939fd5c16ed805","url":"tw_stocks/2646.json"},{"revision":"1fe3b307a202ae41138fb913c2fa6ad9","url":"tw_stocks/2645.json"},{"revision":"8cfb291a0dccf220de262658e99aa98e","url":"tw_stocks/2642.json"},{"revision":"758d07fe252756ec769fea5f276c5eb2","url":"tw_stocks/2637.json"},{"revision":"a5f68e4524e43aabe7f75d1b964e9207","url":"tw_stocks/2636.json"},{"revision":"35f6a2a51d212df6baa8d365b91b6a77","url":"tw_stocks/2634.json"},{"revision":"906fa9770076e692967043b84b649efd","url":"tw_stocks/2633.json"},{"revision":"3df39d52e541c4aa6daa3d7d014c03c2","url":"tw_stocks/2630.json"},{"revision":"af73570fd44dbe8ed48ebf45aca07b75","url":"tw_stocks/2618.json"},{"revision":"eb02f12484957d0e728799bfe5554568","url":"tw_stocks/2617.json"},{"revision":"7e98d81f6e9a0e6a8917f2fd31e5b59f","url":"tw_stocks/2616.json"},{"revision":"b8443c361cd8e5ddcb044ca7a8c3ac76","url":"tw_stocks/2615.json"},{"revision":"d9ea30bb2b145b4df9a31369441728e8","url":"tw_stocks/2614.json"},{"revision":"e4d6f22f1429a5274c84f96ebd05f516","url":"tw_stocks/2613.json"},{"revision":"a678211ba8337118c3f2e36d0bf8af5c","url":"tw_stocks/2612.json"},{"revision":"f7bd4891b942d707966b07b38c61839e","url":"tw_stocks/2611.json"},{"revision":"54f30a944b02828e3954eeab637e8c9e","url":"tw_stocks/2610.json"},{"revision":"4ddcfe4973ef2702441a942a367cc281","url":"tw_stocks/2609.json"},{"revision":"a8df3d0d9eaa7a06885276902a7be393","url":"tw_stocks/2608.json"},{"revision":"a894c68bd300f5f17ac38245e641d984","url":"tw_stocks/2607.json"},{"revision":"3344c349a473ba26635cfbabd119801a","url":"tw_stocks/2606.json"},{"revision":"1a076337677b1c3b0e4f90f660ae294e","url":"tw_stocks/2605.json"},{"revision":"3ba8e54957bfba6646452bda6dccfbb2","url":"tw_stocks/2603.json"},{"revision":"32dad4310ef64246d1a95ae812227d13","url":"tw_stocks/2601.json"},{"revision":"283d37b8df2699c0a5c53e26af569df2","url":"tw_stocks/2597.json"},{"revision":"89f1174df9d2efcf39c3dfa66458e8df","url":"tw_stocks/2548.json"},{"revision":"702614b80b2f093a7de8328760a3f169","url":"tw_stocks/2547.json"},{"revision":"d611c98d80f9e35011d486da09af39f2","url":"tw_stocks/2546.json"},{"revision":"d77d446cb01e59c816f6d0d312c5c464","url":"tw_stocks/2545.json"},{"revision":"fc81d7d1113477a64ef75a87d6efff98","url":"tw_stocks/2543.json"},{"revision":"3c5b1ab098c8148e54eb19859575afa1","url":"tw_stocks/2542.json"},{"revision":"20fde83c004807d8bba234cdbe0e8dac","url":"tw_stocks/2540.json"},{"revision":"65f7bf580d828aecabd55d25df2d499e","url":"tw_stocks/2539.json"},{"revision":"e47b42632d5171af657d0a776951f9b4","url":"tw_stocks/2538.json"},{"revision":"8ca2267b94d78de576b350483bd7c2ce","url":"tw_stocks/2537.json"},{"revision":"bdfe52a370d74c6778975b6a249a8306","url":"tw_stocks/2536.json"},{"revision":"5ac90600a9b4f8ce59f69b3885113d8b","url":"tw_stocks/2535.json"},{"revision":"51879924afe07debd8da073f5e7bbbbe","url":"tw_stocks/2534.json"},{"revision":"fd2f3037ebacd99bcb7962fb35229a96","url":"tw_stocks/2530.json"},{"revision":"f795fdf8673b99a87669bbf20f11f72e","url":"tw_stocks/2528.json"},{"revision":"4cdd4a229fda599aa14de6cde8c14e50","url":"tw_stocks/2527.json"},{"revision":"bf1921c2082e4f83a7bf519c7921132e","url":"tw_stocks/2524.json"},{"revision":"91d861499c1438801fc9005648b785ad","url":"tw_stocks/2520.json"},{"revision":"52ef1c11b7b449c460b002ee9ca76036","url":"tw_stocks/2516.json"},{"revision":"485ac10cef457294ee826d184a20c293","url":"tw_stocks/2515.json"},{"revision":"a4651c947283ed48b766c94709282497","url":"tw_stocks/2514.json"},{"revision":"1c121cf1d94b099d0263c112835d4c3f","url":"tw_stocks/2511.json"},{"revision":"76f05a5fcca992d5f18b821c6a71a410","url":"tw_stocks/2509.json"},{"revision":"987cc06ef371ca5e6abcb541c1c9bc95","url":"tw_stocks/2506.json"},{"revision":"86b1ddb19ca1f98b08faa35b021f2d1a","url":"tw_stocks/2505.json"},{"revision":"81aac988e6782ccfddba12d187920445","url":"tw_stocks/2504.json"},{"revision":"62d83d5f434bb088f466dbb8aa1a26fc","url":"tw_stocks/2501.json"},{"revision":"67027819e1c62fb141696c908a635515","url":"tw_stocks/2498.json"},{"revision":"8dc950fb00023e37804336627c272f26","url":"tw_stocks/2497.json"},{"revision":"96902ca3875c04f2a2ef2f2ef1011eef","url":"tw_stocks/2496.json"},{"revision":"d5cffcf586031893ec5690070bb4f964","url":"tw_stocks/2495.json"},{"revision":"ce04b83acf3fe3f98f2a8c026350e920","url":"tw_stocks/2493.json"},{"revision":"9507267e77dd5b2ea2f75072d6f256c5","url":"tw_stocks/2492.json"},{"revision":"615d99374fed64d102198a72be81c2f6","url":"tw_stocks/2491.json"},{"revision":"e93167d92108a2c6b9d45887389072fa","url":"tw_stocks/2489.json"},{"revision":"f089358e9ddaccef181908cdbe63f763","url":"tw_stocks/2488.json"},{"revision":"9e41617bb77e7528c7784429ce12016a","url":"tw_stocks/2486.json"},{"revision":"f748c1e67a3d501a93dbba68bf724937","url":"tw_stocks/2485.json"},{"revision":"1a43660177b73d9d2f3a437749d2a86e","url":"tw_stocks/2484.json"},{"revision":"075d025e6d3acbdadbeddeca37b26fc4","url":"tw_stocks/2483.json"},{"revision":"be0c3b2703afe65660e977aef9ededfd","url":"tw_stocks/2482.json"},{"revision":"e00b863720624552d8bba1029a616144","url":"tw_stocks/2481.json"},{"revision":"d779ddd4f7782987675146d017435499","url":"tw_stocks/2480.json"},{"revision":"63fb256171083b82cda8261eaa37a6ad","url":"tw_stocks/2478.json"},{"revision":"d536da8740a698261284763835aa0172","url":"tw_stocks/2477.json"},{"revision":"e4c8935f87f2ede07c2076ad35cff407","url":"tw_stocks/2476.json"},{"revision":"ab9c19fc0910dca6c17f1cb5d132c1bf","url":"tw_stocks/2474.json"},{"revision":"86b9d525e61ffa238a9476445967ca0f","url":"tw_stocks/2472.json"},{"revision":"3ec45e3d23ebcec5a652a99479959b9e","url":"tw_stocks/2471.json"},{"revision":"c657f24f4c8377c5f2587c1b48a34305","url":"tw_stocks/2468.json"},{"revision":"50aa8b850535f439b8a3a00bb1be62d4","url":"tw_stocks/2467.json"},{"revision":"801ac082c04e7b46ab3d0e259de3d34f","url":"tw_stocks/2466.json"},{"revision":"7b66afa73243e04c048969fba8ca1b25","url":"tw_stocks/2465.json"},{"revision":"e7ad24bfad1bef42e117aefda28fdafc","url":"tw_stocks/2464.json"},{"revision":"1a007a48b3c1292cfed20c2136770af2","url":"tw_stocks/2462.json"},{"revision":"3ab8c45f735bea18b7f9de82d4857088","url":"tw_stocks/2461.json"},{"revision":"29d96a21855ff493f5cd832517597140","url":"tw_stocks/2460.json"},{"revision":"df920f48109c0c1faf7f68853f6d65f0","url":"tw_stocks/2459.json"},{"revision":"f2c472b2cfd9e61d848dce2cf1ab42d9","url":"tw_stocks/2458.json"},{"revision":"a3dc633386ffa8cbea99c1d68a4d03f3","url":"tw_stocks/2457.json"},{"revision":"351356a7c0cbe651c6ec08ad515fe121","url":"tw_stocks/2455.json"},{"revision":"cf4bd0d4b286f57f8266908e1940079c","url":"tw_stocks/2454.json"},{"revision":"26c4a2fbc4d61d33f558d882dd20e22f","url":"tw_stocks/2453.json"},{"revision":"51a7ed2df0417a13f7870aa096902b80","url":"tw_stocks/2451.json"},{"revision":"d55f6f6d54f2c9bac9b1165ca4c45e14","url":"tw_stocks/2450.json"},{"revision":"c4715d845ae7bd5b28d39beaf5d1bad7","url":"tw_stocks/2449.json"},{"revision":"9f5b95b146997f1cc50b9146259e124a","url":"tw_stocks/2444.json"},{"revision":"517dcdbf4909b1d67eeb957b53d6b786","url":"tw_stocks/2442.json"},{"revision":"569f6cfa19af126b23aeca7028a6ef1f","url":"tw_stocks/2441.json"},{"revision":"b18774da7cc7b32d176760c380a490aa","url":"tw_stocks/2440.json"},{"revision":"33c63d1cca764c8a3cdb719c21c8315a","url":"tw_stocks/2439.json"},{"revision":"4c2e4f0257cb0d5482a27a848876d018","url":"tw_stocks/2438.json"},{"revision":"cb876cf0f819af107f090cb7ad75584d","url":"tw_stocks/2436.json"},{"revision":"02392f352c66c846504e044a7f28a5bd","url":"tw_stocks/2434.json"},{"revision":"d08092c6a51632ddc0dedf73a6e79323","url":"tw_stocks/2433.json"},{"revision":"ed76dc06ca1ddbc213a7b28802836e1f","url":"tw_stocks/2431.json"},{"revision":"0d60b7697d863dd5a9c77a4c1a6f9ff1","url":"tw_stocks/2430.json"},{"revision":"e281efd22490663b3f4cecb0248190df","url":"tw_stocks/2429.json"},{"revision":"a627cab14dbfd0b9f54aee102a402e13","url":"tw_stocks/2428.json"},{"revision":"115c2a777067bc7669f95062f4177dea","url":"tw_stocks/2427.json"},{"revision":"053959c613e38a5b2ca28ba9774fdb87","url":"tw_stocks/2426.json"},{"revision":"3d52e337435506649f8d6b6d31628cd5","url":"tw_stocks/2425.json"},{"revision":"c3c8bcdd6e2245726c4d62cf7f034728","url":"tw_stocks/2424.json"},{"revision":"cd69eea4269e5e3c603d40395c554e1e","url":"tw_stocks/2423.json"},{"revision":"382916ee2496ba279f65a16d98bcdc2e","url":"tw_stocks/2421.json"},{"revision":"ef74ffa59e3439753f1267e050404bd7","url":"tw_stocks/2420.json"},{"revision":"244b5dad5af26f9c2e96d3a8d496f8e0","url":"tw_stocks/2419.json"},{"revision":"1ca58389931083a8b20d8aa11e10838c","url":"tw_stocks/2417.json"},{"revision":"31d1352799c401a0a4759b19acf58e5d","url":"tw_stocks/2415.json"},{"revision":"79e476208b3fb42e9d6c7a4e38727d35","url":"tw_stocks/2414.json"},{"revision":"65e642e2cc47876663a4c09a0aeabbb0","url":"tw_stocks/2413.json"},{"revision":"d9bd39b75b92d65024e4296b542f8438","url":"tw_stocks/2412.json"},{"revision":"8bbba36c65b7ad81f121fba300a7bcd0","url":"tw_stocks/2409.json"},{"revision":"ea7b322c0829b81da2b4402f2c5f7398","url":"tw_stocks/2408.json"},{"revision":"c17ca952851b51c78b83fc21c60444ed","url":"tw_stocks/2406.json"},{"revision":"5e0aa23cbaf18c168ab803614cb15510","url":"tw_stocks/2405.json"},{"revision":"e2667b90df749ff2347d69e74891a08a","url":"tw_stocks/2404.json"},{"revision":"df3ff07b380e290ee59cb408f279472f","url":"tw_stocks/2402.json"},{"revision":"a5df59d3194fbc677a710cd978cbbb56","url":"tw_stocks/2401.json"},{"revision":"7689110e5aea5558e5103df4071aa477","url":"tw_stocks/2399.json"},{"revision":"567e6dfe56b2850fcd53fca73fe77d61","url":"tw_stocks/2397.json"},{"revision":"0b8e33941a03001a56f1d2ad2c741cfa","url":"tw_stocks/2395.json"},{"revision":"b9f2fad781cbb2b052e593c85bd1555b","url":"tw_stocks/2393.json"},{"revision":"4a9ac6f81537547b53558f1157645f8c","url":"tw_stocks/2392.json"},{"revision":"9495ef245121e0ca32015fae3695e5a9","url":"tw_stocks/2390.json"},{"revision":"9f6fd58135617f17293539b81e9f7da8","url":"tw_stocks/2388.json"},{"revision":"9318c2a05e3ce70242b44f402cb65eae","url":"tw_stocks/2387.json"},{"revision":"b197eb80fc2e1065ddc88a1c642709f8","url":"tw_stocks/2385.json"},{"revision":"3cd434e8c0799f6c90eb4e3d4554df61","url":"tw_stocks/2383.json"},{"revision":"42002a0249a0fbe0c0bf73e78606b8e4","url":"tw_stocks/2382.json"},{"revision":"660a8d9234e421c60757c8e97799d31b","url":"tw_stocks/2380.json"},{"revision":"cabfb2510b14061fad3ae473472c5f0f","url":"tw_stocks/2379.json"},{"revision":"1bffad97f9d3743e7afe346a52bd9ac3","url":"tw_stocks/2377.json"},{"revision":"faed141e4b789bdb39d29a7c6db90ed8","url":"tw_stocks/2376.json"},{"revision":"167df37eed5b0365c89dd6d45064748b","url":"tw_stocks/2375.json"},{"revision":"f161d21f7a1ca81eca891222eaf8874f","url":"tw_stocks/2374.json"},{"revision":"bc2e340b9ae72232c109c17a977f60ef","url":"tw_stocks/2373.json"},{"revision":"2741b56df9171261814586dfee64044a","url":"tw_stocks/2371.json"},{"revision":"236e6c9601aa51e4aa35c1cedb79b096","url":"tw_stocks/2369.json"},{"revision":"19abb84ec3b8676911ad2f8b1f2197f3","url":"tw_stocks/2368.json"},{"revision":"f61e63fe2fb62bb0a7bb0d825ba63c05","url":"tw_stocks/2367.json"},{"revision":"e99deefb573d812cba10b25a8ba7b4d4","url":"tw_stocks/2365.json"},{"revision":"60d82cc385072bc8e3e71c59b7379414","url":"tw_stocks/2364.json"},{"revision":"765da20dc73d95f575cfade6645fef63","url":"tw_stocks/2363.json"},{"revision":"e345d7bdaf251916991592cad423d1ad","url":"tw_stocks/2362.json"},{"revision":"c2394825ea0dada5c892b5c5b268431d","url":"tw_stocks/2360.json"},{"revision":"dc9a299a0280b684a90ebc5a4edf93c0","url":"tw_stocks/2359.json"},{"revision":"13cf6fcf5fc5ed5daf092692d134c42c","url":"tw_stocks/2357.json"},{"revision":"b9adcbb61b9a74960bf39638958a79d0","url":"tw_stocks/2356.json"},{"revision":"0ecdb0a1290051490d405727b07d0805","url":"tw_stocks/2355.json"},{"revision":"11c38b1ed88d885afbb31dbfa303ffba","url":"tw_stocks/2354.json"},{"revision":"c60c890c7e30b929d631a0fe0d34ea9b","url":"tw_stocks/2353.json"},{"revision":"f9aeda2a1a2db75fc2f4bd6dd8fcaae2","url":"tw_stocks/2352.json"},{"revision":"bfa41ffad5b53744cb5761853fc234d5","url":"tw_stocks/2351.json"},{"revision":"905f51fa2049bb2aff0ec4f6850f8393","url":"tw_stocks/2349.json"},{"revision":"09cbfb3ee6913f2519c5c00fe6515bb1","url":"tw_stocks/2348.json"},{"revision":"2bb62fbe9a578bf47576d6d9e2eb6e91","url":"tw_stocks/2347.json"},{"revision":"9d64802d4a06fb939ee26ce07afc5c08","url":"tw_stocks/2345.json"},{"revision":"1765b73b500a6c9d6dfb110d958c0003","url":"tw_stocks/2344.json"},{"revision":"350d54a93ac1e1922b5c7500cd45c798","url":"tw_stocks/2342.json"},{"revision":"6b02878b34c0ab1285dda8320821f123","url":"tw_stocks/2340.json"},{"revision":"8cda7bc01f48bae94a53c48af6b9406b","url":"tw_stocks/2338.json"},{"revision":"a750d9de5e0e548072d9fccd1b56ae65","url":"tw_stocks/2337.json"},{"revision":"a9575c4df008527bae71c6df74788ee7","url":"tw_stocks/2332.json"},{"revision":"c3b82847a16b31ad32684af87e4808ec","url":"tw_stocks/2331.json"},{"revision":"db138949d742cc48552ed1bb03163656","url":"tw_stocks/2330.json"},{"revision":"73e4253ca2b7d57c2cc84edafe6695bf","url":"tw_stocks/2329.json"},{"revision":"501a88d2ac7ce4b8d3dc80c5403d87d1","url":"tw_stocks/2328.json"},{"revision":"5062964ffce80046941407083da30ced","url":"tw_stocks/2327.json"},{"revision":"436df8aa9cbe35bf4a9c0b26646943b7","url":"tw_stocks/2324.json"},{"revision":"be5c28c9306977fee50b638d073e7e56","url":"tw_stocks/2323.json"},{"revision":"121bbe7b02055e55c9f83f1c5a3f42bb","url":"tw_stocks/2321.json"},{"revision":"7709e590eab6ba6fa0b332f71d200581","url":"tw_stocks/2317.json"},{"revision":"7d4a63f61aa29b9fa5bb76b42fc625fd","url":"tw_stocks/2316.json"},{"revision":"287c46eae87cb7b953cd24d6a016fe40","url":"tw_stocks/2314.json"},{"revision":"1a01a1841e59e927a88260291036e678","url":"tw_stocks/2313.json"},{"revision":"02652a748d85e8984c44a1ea7367eaba","url":"tw_stocks/2312.json"},{"revision":"63d86164cfea3d8819afcef2903d3905","url":"tw_stocks/2308.json"},{"revision":"4a4de5b8b0baa21726053b25359f8214","url":"tw_stocks/2305.json"},{"revision":"7bc03ad312ba6bf25e028839e9bb5681","url":"tw_stocks/2303.json"},{"revision":"d87b15868652a526e2f61d74dcf9fb17","url":"tw_stocks/2302.json"},{"revision":"f61e3f58a5c24ed1f53ad3e972403be2","url":"tw_stocks/2301.json"},{"revision":"b769162bbf47b7e2ae196846c254969d","url":"tw_stocks/2250.json"},{"revision":"6ad66459ec4123c88e1377b9b323fb94","url":"tw_stocks/2248.json"},{"revision":"fae5c25aeeebf1b607762e804af396bb","url":"tw_stocks/2247.json"},{"revision":"c5b4b3fcc88dbbaab1c68509658967ae","url":"tw_stocks/2243.json"},{"revision":"9a9575f104d680d49eb041e9c022fe64","url":"tw_stocks/2241.json"},{"revision":"c3f075fa5866c259c0e5acb3b6e8b13d","url":"tw_stocks/2239.json"},{"revision":"9e57ffbf3124a3f2739814fe21736756","url":"tw_stocks/2236.json"},{"revision":"c72d421d4ac49b07e7dc60bb4ffd9008","url":"tw_stocks/2233.json"},{"revision":"5faaaa7e91a8e382a9e7fe0479e8c83f","url":"tw_stocks/2231.json"},{"revision":"4e363f4634b5f57a665c43df1293494c","url":"tw_stocks/2228.json"},{"revision":"cbb7bed213926916bfdb3577d6077793","url":"tw_stocks/2227.json"},{"revision":"4056b37ed8dc93780604f4abbf198f25","url":"tw_stocks/2211.json"},{"revision":"7e89494112bf1c835ce0d12fb51dbb81","url":"tw_stocks/2208.json"},{"revision":"b871c9f5ae6c731ca8f81c8b7c0dc777","url":"tw_stocks/2207.json"},{"revision":"2cb5c501d9e37b331224ce40898a8a43","url":"tw_stocks/2206.json"},{"revision":"d316a9ac0fcad2ec65515ab7615e162a","url":"tw_stocks/2204.json"},{"revision":"98022d20ab4582ef1e9d0d1200599cad","url":"tw_stocks/2201.json"},{"revision":"81248efccbca41274fbb635bd89c8ee1","url":"tw_stocks/2115.json"},{"revision":"a740dd4ae4e4e05b7e8656dbbc342616","url":"tw_stocks/2114.json"},{"revision":"4f6828a9c920215fab7a34d9ea7487b2","url":"tw_stocks/2109.json"},{"revision":"fb57876d75fd0a1dda4c2e625a00f567","url":"tw_stocks/2108.json"},{"revision":"7f8b02164a0fe6d471f4169c0b7cca56","url":"tw_stocks/2107.json"},{"revision":"9b92e067c529afd626c9ec68c495c998","url":"tw_stocks/2106.json"},{"revision":"f1d57b1709f7a5fce3b8daf9af080bc3","url":"tw_stocks/2105.json"},{"revision":"29ff1947e4aa936fdfad480d9d1ba7c4","url":"tw_stocks/2104.json"},{"revision":"696a2ee5849850d013c81c1057a20aa9","url":"tw_stocks/2103.json"},{"revision":"c4f01d76158a52fb77bcea11bfee063e","url":"tw_stocks/2102.json"},{"revision":"519bcc7694d576f5a267467842e8e020","url":"tw_stocks/2101.json"},{"revision":"6d14f2452a0009b49a48745578512c63","url":"tw_stocks/2069.json"},{"revision":"b4cfcfc20bac50d03e43a584e1dfc909","url":"tw_stocks/2062.json"},{"revision":"cc2a9f07a7f4651ec8bf21835eb71ab0","url":"tw_stocks/2059.json"},{"revision":"181bd6d3ed75090db1130912d463be27","url":"tw_stocks/2049.json"},{"revision":"66404d5d05f6d24c8f955756e0613244","url":"tw_stocks/2038.json"},{"revision":"39c66159fc987564e0d89c8b862689de","url":"tw_stocks/2034.json"},{"revision":"edf1acd037d9173f45f18288cf031e98","url":"tw_stocks/2033.json"},{"revision":"55d350bf3d42bdade3327ce8d996b98d","url":"tw_stocks/2032.json"},{"revision":"1cc817e4bba9e587c26746955a3b6936","url":"tw_stocks/2031.json"},{"revision":"410bf057238e5cc8b034f28ed73fa773","url":"tw_stocks/2030.json"},{"revision":"fb9beb0f63cdb74d5c5c01b93d0efa5a","url":"tw_stocks/2029.json"},{"revision":"55bf4924cc7f34e8254f50ea88b5c19f","url":"tw_stocks/2028.json"},{"revision":"ad0af1066578657835f285a0557725f3","url":"tw_stocks/2027.json"},{"revision":"587619bd3dd7c3ad419156f1b57265be","url":"tw_stocks/2025.json"},{"revision":"6312c2b4155d895c8c35363835aa402d","url":"tw_stocks/2024.json"},{"revision":"c7f5f4e4466f3ece9023b8d9307c810c","url":"tw_stocks/2023.json"},{"revision":"b5bef030be8d3b98a87791bccf6d5249","url":"tw_stocks/2022.json"},{"revision":"276119e73ee2a81c312718bfd944972f","url":"tw_stocks/2020.json"},{"revision":"749559565e9ac8d1b197074978eff175","url":"tw_stocks/2017.json"},{"revision":"d6ac0245d7223c8e5e0b5779f2f02deb","url":"tw_stocks/2015.json"},{"revision":"d28d7021f70894fdc7559b260ad9a75c","url":"tw_stocks/2014.json"},{"revision":"b00275347f1457c100381d2a8b561db8","url":"tw_stocks/2013.json"},{"revision":"2ee3c1d98508884d2bcd4fd2cbee067a","url":"tw_stocks/2012.json"},{"revision":"06cdb3f6ff3521285168ff4091a7605c","url":"tw_stocks/2010.json"},{"revision":"ce2e337389a4df87f11c11a01ca2c81f","url":"tw_stocks/2009.json"},{"revision":"160caeca17aecb7b237d7a66c39c9e5e","url":"tw_stocks/2008.json"},{"revision":"85302ae65b445da9b4adcdb8bf3ae990","url":"tw_stocks/2007.json"},{"revision":"cf943acca16677e9c8570897d95ed86e","url":"tw_stocks/2006.json"},{"revision":"3ed9dc009e4d2b7cee9ba533b3eb800e","url":"tw_stocks/2002.json"},{"revision":"fef477341edc024682c65dee8c3f4325","url":"tw_stocks/1909.json"},{"revision":"986fb39a4b3b9585beb7845df6910dd5","url":"tw_stocks/1907.json"},{"revision":"a45efc99bec4d6ff106bbcd1e89cd00b","url":"tw_stocks/1906.json"},{"revision":"dbb6b17951b3cd2919d14b6447dfac95","url":"tw_stocks/1905.json"},{"revision":"d431cdc2a5b15e4039a4082b854a878d","url":"tw_stocks/1904.json"},{"revision":"b01015734798986c01d8355e0be3c8fa","url":"tw_stocks/1903.json"},{"revision":"7595c7e812e5ca26f740a12d72c182a6","url":"tw_stocks/1817.json"},{"revision":"cbe0a65060fef7a90a726b44b45ae107","url":"tw_stocks/1810.json"},{"revision":"a6bdac251f4f91daeb3eba4810e5be4d","url":"tw_stocks/1809.json"},{"revision":"5bcfd8402c02bf71deca47b01f0c7cc6","url":"tw_stocks/1808.json"},{"revision":"eb20ac36ece05981304f962896d1ce1e","url":"tw_stocks/1806.json"},{"revision":"45787602c8cd4fd35dcc4f81a5a5e30c","url":"tw_stocks/1805.json"},{"revision":"1137a0b5fe01aab105da63b01d433bc6","url":"tw_stocks/1802.json"},{"revision":"e0bcae2e2a64cef5e0e83553d843caa0","url":"tw_stocks/1795.json"},{"revision":"7481702cffe2b93340994dc4d0428d74","url":"tw_stocks/1789.json"},{"revision":"5f50d4575688ac731e2271cfc7888c90","url":"tw_stocks/1786.json"},{"revision":"45b6be66389611b35c60903d20d5f186","url":"tw_stocks/1783.json"},{"revision":"2e013de6b4a4340441b0719a494580d8","url":"tw_stocks/1776.json"},{"revision":"ecf8594f99b8661be50817acbf05e8bc","url":"tw_stocks/1773.json"},{"revision":"88e7f78847e3977144e0204b4e406724","url":"tw_stocks/1762.json"},{"revision":"ff4c3c2bd2596d38b4f8d4a137b85297","url":"tw_stocks/1760.json"},{"revision":"0f793795816fe9d99a26e5cfb6b9d0ac","url":"tw_stocks/1752.json"},{"revision":"c040ddcf8c7d98b2d61c399080d92811","url":"tw_stocks/1737.json"},{"revision":"b2dab6d02212e7fbf766a24be3eb7bec","url":"tw_stocks/1736.json"},{"revision":"4b3fb64c775ba7c21b72401ba80c3233","url":"tw_stocks/1735.json"},{"revision":"204c8eea4719bfad2fd37575f2aa3410","url":"tw_stocks/1734.json"},{"revision":"adf1822a59d9088eaef88865c3481df1","url":"tw_stocks/1733.json"},{"revision":"0e27d1ae36456f8d6f1c2842fad26b25","url":"tw_stocks/1732.json"},{"revision":"1ca1433189a172cc4b55beb7512c04c1","url":"tw_stocks/1731.json"},{"revision":"d9cdf79902b160236ed646e7084fd66e","url":"tw_stocks/1730.json"},{"revision":"924aecee14e8b18583d429db3f84f709","url":"tw_stocks/1727.json"},{"revision":"dcb987f1b89aabaec30b85147fcd9717","url":"tw_stocks/1726.json"},{"revision":"6533a4d1ad3f76d1e21be8d9fa5afa39","url":"tw_stocks/1725.json"},{"revision":"326de8c61c0e3c9e1a8e8bdafa9f352d","url":"tw_stocks/1723.json"},{"revision":"ecf74d85f35927049ce99cb1973eb4e8","url":"tw_stocks/1722.json"},{"revision":"20a883851e15036884b96074deb12ab5","url":"tw_stocks/1721.json"},{"revision":"da180e7aa2667184c0232ff99980b722","url":"tw_stocks/1720.json"},{"revision":"d82cba3b3f4f04a507527776bfe9ab36","url":"tw_stocks/1718.json"},{"revision":"a3c89bb10de440edc8d2c2ea73b860ca","url":"tw_stocks/1717.json"},{"revision":"5db655272fcf9aef0cf4d4ac5f36274e","url":"tw_stocks/1714.json"},{"revision":"ded3b50917df4ed44b8364b5cfc4e508","url":"tw_stocks/1713.json"},{"revision":"4404941f890915a42c70976b8c9a0802","url":"tw_stocks/1712.json"},{"revision":"2426236bf52bd7f11bdb14a8136fa89e","url":"tw_stocks/1711.json"},{"revision":"55069a10177961e0d483e354186da5ef","url":"tw_stocks/1710.json"},{"revision":"7846078615d5fe201022595bbab0aaab","url":"tw_stocks/1709.json"},{"revision":"46de29081c787c0ee06c53eabc5c256c","url":"tw_stocks/1708.json"},{"revision":"b97f9b00eae8681319feb6a460952d50","url":"tw_stocks/1707.json"},{"revision":"8e67aa2bafe95ca12f741a438b5f6367","url":"tw_stocks/1702.json"},{"revision":"3c2a48b50c6d6aa5fa8828356719d59f","url":"tw_stocks/1626.json"},{"revision":"a2585ac47060ca997a45631a2dbbcf88","url":"tw_stocks/1623.json"},{"revision":"a7161c6d912e2842c79954fbca22256e","url":"tw_stocks/1618.json"},{"revision":"b6f1cf61d38a55ad8d10614065c4379a","url":"tw_stocks/1617.json"},{"revision":"6d9c883ceaab1d9c292928a6430b00bf","url":"tw_stocks/1616.json"},{"revision":"e63d77576a62094f1645fb0d9ca29b05","url":"tw_stocks/1615.json"},{"revision":"5444a48c15f905dbc0fb1a7be0f2d5a6","url":"tw_stocks/1614.json"},{"revision":"f9f86b9b5883324bb504e2b93e7e58de","url":"tw_stocks/1612.json"},{"revision":"0177cf8d6e037dc631600f9a9987fe54","url":"tw_stocks/1611.json"},{"revision":"5326987415bb86214b7201f39bc3716e","url":"tw_stocks/1609.json"},{"revision":"9d233b53637038188e470422134f2233","url":"tw_stocks/1608.json"},{"revision":"0f454e3e14ef1807042863c601ea3dd0","url":"tw_stocks/1605.json"},{"revision":"e32e744e8c92915e60fbe8f9ba2f2244","url":"tw_stocks/1604.json"},{"revision":"2ba18327c18d27cd56584f0b45f0fd9a","url":"tw_stocks/1603.json"},{"revision":"4732b2ebc1185190de5533cf84bfc72f","url":"tw_stocks/1598.json"},{"revision":"27b0d8be9836db58f7e136cc5b7bf4cb","url":"tw_stocks/1597.json"},{"revision":"a96b75ef78079bdbefb4df94ccd2d566","url":"tw_stocks/1590.json"},{"revision":"cbeb612341f5e1b5662a389ad0d87d30","url":"tw_stocks/1589.json"},{"revision":"857df5f5b96b4acc0d5cd62809311ddf","url":"tw_stocks/1587.json"},{"revision":"0e9c0f95864be3e44a9465e9c040dd9f","url":"tw_stocks/1583.json"},{"revision":"aa5dbd94c3365e49f074887d56e08537","url":"tw_stocks/1582.json"},{"revision":"022f68e4e013fa414a44a80c5ebf7ee4","url":"tw_stocks/1568.json"},{"revision":"8884ccabc39ee52df627ee08dd151a76","url":"tw_stocks/1563.json"},{"revision":"2e0fd4a312f02ebdc4fe68ad766598a2","url":"tw_stocks/1560.json"},{"revision":"183b9ed62203eed02a2f91f3f92df3ba","url":"tw_stocks/1558.json"},{"revision":"776fb703ea42a371b1216bef9d60b567","url":"tw_stocks/1541.json"},{"revision":"462866eba7b348ed7f5e83a1079b31ec","url":"tw_stocks/1540.json"},{"revision":"a7e7bff0ceee4f982aa2c399e43ee3b0","url":"tw_stocks/1539.json"},{"revision":"15be841e1bbf9bb90c61539a154d04d0","url":"tw_stocks/1538.json"},{"revision":"5eb9baf910a29a194ad68955d3a79759","url":"tw_stocks/1537.json"},{"revision":"eee1edeb5faf3d3264c9059c9bda4bfe","url":"tw_stocks/1536.json"},{"revision":"2c08ea50a966e6063ef5e38bcf70c544","url":"tw_stocks/1535.json"},{"revision":"ea12c8d649ef98a17d5fe0da28fe2488","url":"tw_stocks/1533.json"},{"revision":"feb1813dd305b951823e72b91196800e","url":"tw_stocks/1532.json"},{"revision":"76783f7bc1babbb3e425d8091f5775f4","url":"tw_stocks/1531.json"},{"revision":"ad4fca24bf9698fa3a7eacfbb0f8055b","url":"tw_stocks/1530.json"},{"revision":"93e421d0851c1352adc5811b049cb352","url":"tw_stocks/1529.json"},{"revision":"73f2c173d14a94a71829a7b805b7e360","url":"tw_stocks/1528.json"},{"revision":"b90ed8868842d740aba6aa0d89cf113e","url":"tw_stocks/1527.json"},{"revision":"161ed1c6911805df2569e6381c52a670","url":"tw_stocks/1526.json"},{"revision":"b54d4119982c2731d08cee0ac85a79e0","url":"tw_stocks/1525.json"},{"revision":"7e253b8686370863055e47d0393e63ee","url":"tw_stocks/1524.json"},{"revision":"006ea6abeb518ce8fd8099d5f0cb2e24","url":"tw_stocks/1522.json"},{"revision":"2cbc081c176c7f4c2ebbcffc57b070c7","url":"tw_stocks/1521.json"},{"revision":"3f12ecd4bdb8241d69e4d7f1384245ab","url":"tw_stocks/1519.json"},{"revision":"d278b434cc6f5b399f5e7f037e6d8801","url":"tw_stocks/1517.json"},{"revision":"f74792916c665dc5a1f37cff32d87286","url":"tw_stocks/1516.json"},{"revision":"ead3cb8c1c7bdb0256b27696cf3399ff","url":"tw_stocks/1515.json"},{"revision":"b5aed53d193c6fd51f24ae630eac7060","url":"tw_stocks/1514.json"},{"revision":"42f18b43ab61a9dbfb67f736bd19ee37","url":"tw_stocks/1513.json"},{"revision":"90e1786a9daa2a37cc95fab62457c9de","url":"tw_stocks/1512.json"},{"revision":"75474c468e29bbd2f6930d14fc3e0f98","url":"tw_stocks/1506.json"},{"revision":"e84f08f12f519292432c15f617a572d7","url":"tw_stocks/1504.json"},{"revision":"e4ec81d7677a4ad51d3d220abe1cd593","url":"tw_stocks/1503.json"},{"revision":"6a174206af3dea94bac133c5b2a8040b","url":"tw_stocks/1477.json"},{"revision":"0be1b8a2ddd0f4206024851a212783d8","url":"tw_stocks/1476.json"},{"revision":"8fa1bc57f3cd54601649061530c00ad9","url":"tw_stocks/1475.json"},{"revision":"f2cefbc10887907be0654909f7f4976a","url":"tw_stocks/1474.json"},{"revision":"bd5c478b6350151db388272d88f4100f","url":"tw_stocks/1473.json"},{"revision":"5739d77a67d3aa59ad80ef015bb71547","url":"tw_stocks/1472.json"},{"revision":"6a360059b92cb793578c1e50c49ec59a","url":"tw_stocks/1471.json"},{"revision":"2141b9d74013695b1b30f422e0f0185a","url":"tw_stocks/1470.json"},{"revision":"d8eb0c25f0a749f8f5b33dab87b6d9ed","url":"tw_stocks/1468.json"},{"revision":"66ab7eee2b92e15bb5560aeb771940d0","url":"tw_stocks/1467.json"},{"revision":"00f4c2ccf10ec4c31ee6dfc67f3731cf","url":"tw_stocks/1466.json"},{"revision":"1c97016dfce3347857bfbcd1c60bb2ec","url":"tw_stocks/1465.json"},{"revision":"7ea0bb4a5156c1d4aa672299ac8aa0b6","url":"tw_stocks/1464.json"},{"revision":"ae32636997135b23578b170201196b2f","url":"tw_stocks/1463.json"},{"revision":"89df9ca28464100662dc2964c4682d36","url":"tw_stocks/1460.json"},{"revision":"c3b76721ded13aae443418a35754e939","url":"tw_stocks/1459.json"},{"revision":"ad6cf053aaf7a8f77b1842958557e07f","url":"tw_stocks/1457.json"},{"revision":"694f321b17272eb47ee436ebe0697bea","url":"tw_stocks/1456.json"},{"revision":"6df19149fe313168b8e16eda24ec2340","url":"tw_stocks/1455.json"},{"revision":"737a951176b1bbed85d99a81ebbab6fa","url":"tw_stocks/1454.json"},{"revision":"1c37024c747648e030934190bb5ac30b","url":"tw_stocks/1453.json"},{"revision":"ff20573a3b47665015ea6234c2984b5e","url":"tw_stocks/1452.json"},{"revision":"7dcbb509bd34c99a22ce5ec6730db5c7","url":"tw_stocks/1451.json"},{"revision":"75c2a190d2e4df01c36c5135fdc7e351","url":"tw_stocks/1449.json"},{"revision":"b9bd5cdce345d24d97208211346b65b3","url":"tw_stocks/1447.json"},{"revision":"ae6aa6c98fceb31b84a284b706cceba3","url":"tw_stocks/1446.json"},{"revision":"433e1015fb11721ab401d1a7fca8d1c3","url":"tw_stocks/1445.json"},{"revision":"f9a8d9b15c05737acd0bc019eb6a7047","url":"tw_stocks/1444.json"},{"revision":"104fb685cf41514b444a89bfd6434039","url":"tw_stocks/1443.json"},{"revision":"3876657311ce4977263f27643446c8f6","url":"tw_stocks/1442.json"},{"revision":"6983fb22d60505d2dce245c46aa43ce6","url":"tw_stocks/1441.json"},{"revision":"bcbc03a6a12374c7ab3cde00b830b972","url":"tw_stocks/1440.json"},{"revision":"02351a3d96b8732aa6e9981f59addfd1","url":"tw_stocks/1439.json"},{"revision":"31cf4e4100591b3b43f249e79a08763b","url":"tw_stocks/1438.json"},{"revision":"b4a06e095a6398b5b67d4e1d5dc2c626","url":"tw_stocks/1437.json"},{"revision":"ecdc35f310d5b1ebb9a5b069a636b5a8","url":"tw_stocks/1436.json"},{"revision":"06afc31e51dab6bab663a9f03babf96d","url":"tw_stocks/1435.json"},{"revision":"9a348d190f231a22571de464555c0553","url":"tw_stocks/1434.json"},{"revision":"7a629b2aae1b5d6ea39e26a8bc9b343b","url":"tw_stocks/1432.json"},{"revision":"e4a75687a7d6870c13689394ca269452","url":"tw_stocks/1423.json"},{"revision":"887a815943df8d6f2250191606dc9a94","url":"tw_stocks/1419.json"},{"revision":"7fe497c55f0c0278ab26177ddcc818c1","url":"tw_stocks/1418.json"},{"revision":"28d13e1614570ec0ca61baa904a71ff7","url":"tw_stocks/1417.json"},{"revision":"a3dc9b399a2dddac00bf46f58a33cd46","url":"tw_stocks/1416.json"},{"revision":"2c3ca86f152710c317926298aa06bab5","url":"tw_stocks/1414.json"},{"revision":"fbd14f5d7b885230646dd84f8c4ba2ab","url":"tw_stocks/1413.json"},{"revision":"eebd83f660ff8158272174e9065df1cb","url":"tw_stocks/1410.json"},{"revision":"72f9cb5895af7b4a429d7688309a4136","url":"tw_stocks/1409.json"},{"revision":"ca5320cff0d0eb802208956626aedb6d","url":"tw_stocks/1402.json"},{"revision":"46379f786e21b295d13e5a498eb517e1","url":"tw_stocks/1342.json"},{"revision":"a72d12ddc9abb815edc407f14871e05b","url":"tw_stocks/1341.json"},{"revision":"d8abf9912dc640905c7f916fc5d7924e","url":"tw_stocks/1340.json"},{"revision":"18d91dcf2adc7363bbc1e7ae86134fdf","url":"tw_stocks/1339.json"},{"revision":"f493341b32702b7dc4995673c02576cc","url":"tw_stocks/1338.json"},{"revision":"9709f63c769a4eff64cbcce098643167","url":"tw_stocks/1337.json"},{"revision":"6da53bfaf7d60bf4558134fa67243aea","url":"tw_stocks/1326.json"},{"revision":"68665a63445e8ef0134ced4ca4850d50","url":"tw_stocks/1325.json"},{"revision":"7b6a7c891613e9ccddb94c430f0421ef","url":"tw_stocks/1324.json"},{"revision":"688f5d581b2ffbd6b0190690d4c9c88d","url":"tw_stocks/1323.json"},{"revision":"b173f108a61e5ddf697641b86d70f6b6","url":"tw_stocks/1321.json"},{"revision":"2a41bba6621d134663c753b1c949902f","url":"tw_stocks/1319.json"},{"revision":"cfe6f6ceb32ef9b6bd8161c8396ad725","url":"tw_stocks/1316.json"},{"revision":"ddd4a9950a78e32922fe5125fcf43ef0","url":"tw_stocks/1315.json"},{"revision":"89fcfed3faebd6778185f04ff1f38d9e","url":"tw_stocks/1314.json"},{"revision":"a6669675c0d454d83dcddc26edd54ff0","url":"tw_stocks/1313.json"},{"revision":"e331a28c837ac993e409ca848921bce0","url":"tw_stocks/1312.json"},{"revision":"bcceba76db67f45b0918aeeb9169bc5b","url":"tw_stocks/1310.json"},{"revision":"eee83d3cfcbeffbb086d7ee8124ea75b","url":"tw_stocks/1309.json"},{"revision":"795a64b8fba3817fa20be9961370c74d","url":"tw_stocks/1308.json"},{"revision":"c369697680278f4376e83ba9d26594e8","url":"tw_stocks/1307.json"},{"revision":"acb1df5051ef0efd20e46116364674c5","url":"tw_stocks/1305.json"},{"revision":"c552a518f475b3dfd055bcf7d2e46c47","url":"tw_stocks/1304.json"},{"revision":"de09c7796621a62c39e692d70037bdd3","url":"tw_stocks/1303.json"},{"revision":"abed55aa966e9dd05d403a1c3bac184a","url":"tw_stocks/1301.json"},{"revision":"6cc119c781124c55073da8802363fd32","url":"tw_stocks/1256.json"},{"revision":"f9d712cee0e1434dd977567933564c31","url":"tw_stocks/1236.json"},{"revision":"effedf02b1c2d7a87176d67f239e1cf1","url":"tw_stocks/1235.json"},{"revision":"de61a5226c6f8393be82ad8ce2955e83","url":"tw_stocks/1234.json"},{"revision":"d23b81cd8eb1857076018cbbc00a24ec","url":"tw_stocks/1233.json"},{"revision":"9780adbec9f3db8a7c3174f0f10c0972","url":"tw_stocks/1232.json"},{"revision":"698304ca33e6202ee1c78d5966313699","url":"tw_stocks/1231.json"},{"revision":"f9b906781dc92e6d8df162ea23464667","url":"tw_stocks/1229.json"},{"revision":"4d920a5710a575092fdca796fa8be84c","url":"tw_stocks/1227.json"},{"revision":"641eb2c9a2830511aa23bac5394d7b68","url":"tw_stocks/1225.json"},{"revision":"7713e8121595b6a585ac69864ad63e3e","url":"tw_stocks/1220.json"},{"revision":"e7aba995fe6755db99e467bf10e6e7cb","url":"tw_stocks/1219.json"},{"revision":"d6129efb6fa0ba12d7273b03cffa6d6c","url":"tw_stocks/1218.json"},{"revision":"097eb20c2a7a0d8b04669aa803f43c07","url":"tw_stocks/1217.json"},{"revision":"b93f4f19aa55f8c3c293a844139c4b7c","url":"tw_stocks/1216.json"},{"revision":"c5ee9b43b59cc4a0dff9f2ce323ae523","url":"tw_stocks/1215.json"},{"revision":"cf8d4b4fa224ab978e68bacc14804bc5","url":"tw_stocks/1213.json"},{"revision":"66e7590f75d47301ea20331f46082aa5","url":"tw_stocks/1210.json"},{"revision":"44f5226e1a9de942e80c7bae633d7dbb","url":"tw_stocks/1203.json"},{"revision":"1bd607301f89a6ea80fce41cf394a78f","url":"tw_stocks/1201.json"},{"revision":"9de3add2ce034f9fc38e585868e340ba","url":"tw_stocks/1110.json"},{"revision":"c371de5092ef209fb9557dc69892e7db","url":"tw_stocks/1109.json"},{"revision":"51f51c8fb5430d2b8ad39064633d2b18","url":"tw_stocks/1108.json"},{"revision":"08732ae2c6a9add879c824908c6cf06d","url":"tw_stocks/1104.json"},{"revision":"a63136247c3ae2cc51bb8c14a5cc8ca0","url":"tw_stocks/1103.json"},{"revision":"57dc3b7f5d8866aa90032931620e8a43","url":"tw_stocks/1102.json"},{"revision":"93a6cf51b80a6a58e3bb0c6fcf757db9","url":"tw_stocks/1101.json"},{"revision":"37e9a95c9d250f0cdf93ce714d3bf576","url":"tw_stocks/00995A.json"},{"revision":"7fa4dee7c786beba85b84b0c15a03036","url":"tw_stocks/00994A.json"},{"revision":"4789e9dce63c6d5270beac60ce141803","url":"tw_stocks/00993A.json"},{"revision":"31f4dba1b4e1e16b3628acef28ffa158","url":"tw_stocks/00992A.json"},{"revision":"a86e8930cbfaacbb2c2dabaf7c9f598d","url":"tw_stocks/00991A.json"},{"revision":"5777970dca14391d25b44f88f3a4208e","url":"tw_stocks/00990A.json"},{"revision":"64306cd70f44bb36d4e6a1f9348fa887","url":"tw_stocks/00989A.json"},{"revision":"1f67057ce779d2a00bf7866851b8f2c6","url":"tw_stocks/00988A.json"},{"revision":"2ceda6fc3b20aeb7a12f8acd984205db","url":"tw_stocks/00987A.json"},{"revision":"bce8f28fe573ae412c3b7dfdfd3ec016","url":"tw_stocks/00986A.json"},{"revision":"7026b466b6a5bdc2391fc2e21724a037","url":"tw_stocks/00985B.json"},{"revision":"a2e25a72b0ff884cf2672c32c9cefc61","url":"tw_stocks/00985A.json"},{"revision":"be0e2b2209b7df575ee26edb3c82a45b","url":"tw_stocks/00984D.json"},{"revision":"feda1d1813f8ab3af76fb8e65a41bc2e","url":"tw_stocks/00984A.json"},{"revision":"6ecf978b6cd90849d4a83f1175ed273d","url":"tw_stocks/00983D.json"},{"revision":"d5e6b5c1ee70980d6a23f9c6d2b2552d","url":"tw_stocks/00983A.json"},{"revision":"590170b020007ad0637e2f2d7e40a182","url":"tw_stocks/00982T.json"},{"revision":"821df334514197b0a54fca8950cc1970","url":"tw_stocks/00982D.json"},{"revision":"043829f2b1f514ac7b1975b986bff5fe","url":"tw_stocks/00982A.json"},{"revision":"d1bcffb5613871550f63731fd5a757d2","url":"tw_stocks/00981T.json"},{"revision":"08eec0af60fedc43f973adb89b465b4b","url":"tw_stocks/00981A.json"},{"revision":"dce4bb3d54f3dc147901d98d773ccbae","url":"tw_stocks/009818.json"},{"revision":"34b37c3672923d30288067a632491777","url":"tw_stocks/009817.json"},{"revision":"d8754df11f98a6bbc3d3f6c7b2b6d1c9","url":"tw_stocks/009816.json"},{"revision":"22325d5ea6ce90d4471405494c274c7e","url":"tw_stocks/009813.json"},{"revision":"d6e4b4c152b4750197007a9a96e5c0b0","url":"tw_stocks/009812.json"},{"revision":"39895b140b9dace2aaf6f9adeeb46ea2","url":"tw_stocks/009811.json"},{"revision":"c3f9a65cb5af0856be40ca39cc5bf57a","url":"tw_stocks/009810.json"},{"revision":"82047472e83f9c8d38b3670db705099c","url":"tw_stocks/00980A.json"},{"revision":"27bdcf45a00d4eaaf22060ac7e655b98","url":"tw_stocks/009809.json"},{"revision":"862baac203a02fd9d5c196d35f0544ee","url":"tw_stocks/009808.json"},{"revision":"ff82ba2383af075caa816003cd8007bf","url":"tw_stocks/009805.json"},{"revision":"3d3beb3df8459a4ba7dfff2cd480b132","url":"tw_stocks/009804.json"},{"revision":"8365a0d44fd5e6e113c04b9d1dfe92da","url":"tw_stocks/009803.json"},{"revision":"e295508be4e9a6967b5621e2c5cf72dc","url":"tw_stocks/009802.json"},{"revision":"11b91134d17c503df3a0057cfda64679","url":"tw_stocks/009801.json"},{"revision":"3547adfbff31267e868bb99da594af88","url":"tw_stocks/009800.json"},{"revision":"cfcca05d33e9617fcb4758b29d8e8816","url":"tw_stocks/00972.json"},{"revision":"62b4dab08d90185621228973c4bc7129","url":"tw_stocks/00971.json"},{"revision":"1d1d62aa41a1f9db0845742064e0abc3","url":"tw_stocks/00965.json"},{"revision":"0e9adccf86cee731977e049bcb25426d","url":"tw_stocks/00964.json"},{"revision":"28973661f4fbbf1b5cf459745c8054c9","url":"tw_stocks/00963.json"},{"revision":"a6a623ca1368ad35ff848cab84bea3f2","url":"tw_stocks/00962.json"},{"revision":"193592370357d5651a1a3b7a565f2252","url":"tw_stocks/00961.json"},{"revision":"c31d0551282c13ce5407c559b1258b80","url":"tw_stocks/00960.json"},{"revision":"b4ff9f88cf9b5cc5b44edf552596c45e","url":"tw_stocks/00956.json"},{"revision":"9081370e3e7f3917e6ecf0696f8d0d51","url":"tw_stocks/00954.json"},{"revision":"172b42b4a72bc9705c430cc9111663f2","url":"tw_stocks/00953B.json"},{"revision":"c98d40adbe8db9ab884f45c83093db60","url":"tw_stocks/00952.json"},{"revision":"d7a4ba1ab7c29201712ce673e12fb72d","url":"tw_stocks/00951.json"},{"revision":"45764ca760670ec6e15563f5ccfe33cd","url":"tw_stocks/00949.json"},{"revision":"3b61ad767e8c8795c3f870e70f910244","url":"tw_stocks/00947.json"},{"revision":"fd0035d5e611850151d2d4ae84375f7e","url":"tw_stocks/00946.json"},{"revision":"cd51517259ffbd9342a27c53ddc3ffa2","url":"tw_stocks/00945B.json"},{"revision":"b0d4a18e71fd32b907233a475d130ebe","url":"tw_stocks/00944.json"},{"revision":"c1b02ee1a37531e2636e4659d50fcfa9","url":"tw_stocks/00943.json"},{"revision":"6c669e007b4fefa52a86b90db2b43c54","url":"tw_stocks/00941.json"},{"revision":"f2f2128e040ff95519178196c807efc9","url":"tw_stocks/00940.json"},{"revision":"73ea0ab6e5793a64f097547fe7178425","url":"tw_stocks/00939.json"},{"revision":"fa5cef555ee61e9b66fb2d179c589079","url":"tw_stocks/00938.json"},{"revision":"4c9e9f755e0631ccade79bbaac94cca1","url":"tw_stocks/00936.json"},{"revision":"32abb9e40cc4808a845a830720d5bac5","url":"tw_stocks/00935.json"},{"revision":"966f762f1a51af4574a26da369ba77d8","url":"tw_stocks/00934.json"},{"revision":"f1099632f802630ea6450ac1262f9a44","url":"tw_stocks/00932.json"},{"revision":"82099fc4a6e32ea4c95367ca453b3e63","url":"tw_stocks/00930.json"},{"revision":"2b286f2900b94ccd8408807a24c0ac7d","url":"tw_stocks/00929.json"},{"revision":"5fc5129eaa000445d748a077843f9305","url":"tw_stocks/00927.json"},{"revision":"a7cdbfff545f9bc001ad2c9891c77374","url":"tw_stocks/00926.json"},{"revision":"707e5590fece7b02f14251bdc7c11cb0","url":"tw_stocks/00924.json"},{"revision":"b9036332a1f79f98c71cd4c0046f1563","url":"tw_stocks/00923.json"},{"revision":"974deb52db12165383ccdd57f1585fc2","url":"tw_stocks/00922.json"},{"revision":"d440c3c60787fd4856b646450b708e84","url":"tw_stocks/00921.json"},{"revision":"0a86ce02343a4615d15ba63456233c49","url":"tw_stocks/00920.json"},{"revision":"9b6b1d258fb6a45e6f2c13b5fbcd5251","url":"tw_stocks/00919.json"},{"revision":"182b1aa8425b5475178795000384213f","url":"tw_stocks/00918.json"},{"revision":"abee914da7ca404efd91ba0b575ab356","url":"tw_stocks/00917.json"},{"revision":"2f3e58d11543fc7b471eac49f6f3b61a","url":"tw_stocks/00916.json"},{"revision":"35a0073b802a4bcb8f2dc71ea2afb723","url":"tw_stocks/00915.json"},{"revision":"0a3c62bffa756fb500bfa86a51fe70e9","url":"tw_stocks/00913.json"},{"revision":"a6d845dbd1b1a9b0820c685d1f4dddb9","url":"tw_stocks/00912.json"},{"revision":"a7b0ff54d65a9d8c31ebc5bf4cc7e3aa","url":"tw_stocks/00911.json"},{"revision":"924fe59ec6846823a1c8a1887c888f7e","url":"tw_stocks/00910.json"},{"revision":"85a7d715baf56af4db10ed95a11232c9","url":"tw_stocks/00909.json"},{"revision":"452a83e0a678123b612c3e525710c878","url":"tw_stocks/00908.json"},{"revision":"806a1eaedbb0ddae15b5be0cdec4f0fa","url":"tw_stocks/00907.json"},{"revision":"cc02abb98873368cced02bf2d85d4c94","url":"tw_stocks/00905.json"},{"revision":"031fcf387a42c435ee9b9fdea2f07bc3","url":"tw_stocks/00904.json"},{"revision":"a670cb1cea8b1ecd7da1656d8ca20e70","url":"tw_stocks/00903.json"},{"revision":"f33f60ca232afbf8f703c211b2cfa720","url":"tw_stocks/00902.json"},{"revision":"944b580591a36746e5db900b53fd0f40","url":"tw_stocks/00901.json"},{"revision":"48a5a77f0fb3454657028234622331d1","url":"tw_stocks/00900.json"},{"revision":"dafd07adef3d8af361cdf943cdb7241a","url":"tw_stocks/00899.json"},{"revision":"63ee20b350d87425079a8706a195b7c0","url":"tw_stocks/00898.json"},{"revision":"de1c88b38320f1531b5b87ba1a8430ab","url":"tw_stocks/00897.json"},{"revision":"6a0426a3e93c1e55acb6fad7d97c2b21","url":"tw_stocks/00896.json"},{"revision":"bdee73fcb5e0f24d8ee2b653946d58f6","url":"tw_stocks/00895.json"},{"revision":"4173874f67bb904fd4866d5377145ec7","url":"tw_stocks/00894.json"},{"revision":"70c336b8db09895761e1f6fce9db3e68","url":"tw_stocks/00893.json"},{"revision":"fd840ba1ce850b1027e1e5ef9fc12ea1","url":"tw_stocks/00892.json"},{"revision":"d20990f94db671d39c1e06eb7a697157","url":"tw_stocks/00891.json"},{"revision":"1ca90c4eec4a52217fff60dc37e3f485","url":"tw_stocks/00885.json"},{"revision":"ce967e03f3ee0d83a338d9465891aba2","url":"tw_stocks/00882.json"},{"revision":"921a1f17d4a371478fcf8e833ecc9c88","url":"tw_stocks/00881.json"},{"revision":"25bc5eb1a23613a2ad17beef8b608f50","url":"tw_stocks/00878.json"},{"revision":"9a639bcaa85ff3f96e43dc3f582610c2","url":"tw_stocks/00876.json"},{"revision":"6ff3885d91a3aacc11b4279c2615bf93","url":"tw_stocks/00875.json"},{"revision":"7a7db4751cab714c698653fff60f37ca","url":"tw_stocks/00865B.json"},{"revision":"06db30d2ab971472a90a7fb692551aa4","url":"tw_stocks/00861.json"},{"revision":"bc22fcfdc15078a3a1e87c21732e763a","url":"tw_stocks/00852L.json"},{"revision":"6f8871d8f7f129fd118cf9930985b03e","url":"tw_stocks/00851.json"},{"revision":"966203c6138a1038cc8ebf2dea91fa8b","url":"tw_stocks/00850.json"},{"revision":"c81d0cad363b98ed667035555fc55cb4","url":"tw_stocks/00830.json"},{"revision":"6e683b2bcd8e7cae9dad999414da7458","url":"tw_stocks/00783.json"},{"revision":"f0403802da4e589297e3484c6fa87446","url":"tw_stocks/00775B.json"},{"revision":"07c83dad10c65487d62b8178f9d8c336","url":"tw_stocks/00771.json"},{"revision":"3151bad0dba472ec8631d2612af1d209","url":"tw_stocks/00770.json"},{"revision":"32284b3b90ab5b3ef2a5dc48ea5f17b4","url":"tw_stocks/00763U.json"},{"revision":"4cb121ff542c8e51c4e131f7698840e3","url":"tw_stocks/00762.json"},{"revision":"9c7f4f2d5bcaafbba482508e46b85880","url":"tw_stocks/00757.json"},{"revision":"a47c8db0545cbca126da810795c2caca","url":"tw_stocks/00753L.json"},{"revision":"00c136ed28684cd3deeb164895c06d56","url":"tw_stocks/00752.json"},{"revision":"7ff2636e9347979cf0758c640cac775a","url":"tw_stocks/00739.json"},{"revision":"cb24a3f032e6ce11a543d5a3e4a8a7a7","url":"tw_stocks/00738U.json"},{"revision":"56eb6ba013a3c004de0a1ebaa4ebb1ec","url":"tw_stocks/00737.json"},{"revision":"fe22b3184ba963d3ec6c0a2e98150962","url":"tw_stocks/00736.json"},{"revision":"a5e4f874fb1c769f01ab8813aed956e6","url":"tw_stocks/00735.json"},{"revision":"bf330a4d2241d241689d2fbe9e69be0b","url":"tw_stocks/00733.json"},{"revision":"50b07a49783139687873e065118ea1b8","url":"tw_stocks/00731.json"},{"revision":"33fb658332100c5407e7e4e435d59eb0","url":"tw_stocks/00730.json"},{"revision":"2a54be8fba3a11ad50a04a02a5e9f46e","url":"tw_stocks/00728.json"},{"revision":"d08f58723fe788c1ed95f81915e1346d","url":"tw_stocks/00717.json"},{"revision":"9be8ef46988505d6774cc5e7bb9dedd8","url":"tw_stocks/00715L.json"},{"revision":"5edc0656498278ecf0d4c3a9c62509ba","url":"tw_stocks/00714.json"},{"revision":"56d28573f3ec695b076c75939a35002f","url":"tw_stocks/00713.json"},{"revision":"1f838fdc7579bf24ef3315252e45255b","url":"tw_stocks/00712.json"},{"revision":"62c8f8ad4d40861dc793d5520f420640","url":"tw_stocks/00711B.json"},{"revision":"32f79612ad35df7c322802ed8c617d83","url":"tw_stocks/00710B.json"},{"revision":"9f71e19504c64ed4e75cdc9c22b6dcce","url":"tw_stocks/00709.json"},{"revision":"7bde881e0af4347310914e993b2a39f2","url":"tw_stocks/00708L.json"},{"revision":"ef9584e23af279b6cf3595a2399d748c","url":"tw_stocks/00707R.json"},{"revision":"0ed8ddf21efc661c9e590000c31863a3","url":"tw_stocks/00706L.json"},{"revision":"b857216a94792c8dd98b38a6ba0a43f7","url":"tw_stocks/00703.json"},{"revision":"ce5e4efe2afb285c2308334eb7229a1d","url":"tw_stocks/00702.json"},{"revision":"0fca237b9e58d1255e5e0486cdb7556f","url":"tw_stocks/00701.json"},{"revision":"cea8c7a650b4c38685ca2ffede24410b","url":"tw_stocks/00700.json"},{"revision":"d995d1d49591c520cd45e1d2178f29e9","url":"tw_stocks/00693U.json"},{"revision":"b8cd5a8973cd4c41e5bc41ac22748d94","url":"tw_stocks/00692.json"},{"revision":"7765db56f7f20ea5159d15a978666d7f","url":"tw_stocks/00690.json"},{"revision":"dbe773837e09663fda1fade47ca38446","url":"tw_stocks/00689R.json"},{"revision":"ffa2ee0006ddabdc71b73a004f9438e2","url":"tw_stocks/00688L.json"},{"revision":"7421f03e3d15dbe528d6dd68558f4386","url":"tw_stocks/00686R.json"},{"revision":"c222703ba9f6ef5d7127a9034e16a959","url":"tw_stocks/00685L.json"},{"revision":"fc78bb4fb4338e42a64c82d4371bf38d","url":"tw_stocks/00684R.json"},{"revision":"48ea086089ca2ab730ecba9601b14168","url":"tw_stocks/00683L.json"},{"revision":"603527b6bb6bee7d94532fdf71e4e7d9","url":"tw_stocks/00682U.json"},{"revision":"ee675e8e3a953affa296368fd82b6ade","url":"tw_stocks/00681R.json"},{"revision":"426d5a17e9d5b3b857541a04c61dde13","url":"tw_stocks/00680L.json"},{"revision":"96f17e47212217fc558c294b26724567","url":"tw_stocks/00678.json"},{"revision":"a40001b99c237c57b6bc6f6f83410f26","url":"tw_stocks/00676R.json"},{"revision":"d452e3f1d5c64d72fe2d2b4f4f07723a","url":"tw_stocks/00675L.json"},{"revision":"3329f885efb910a4a5b8c900bf0caf99","url":"tw_stocks/00674R.json"},{"revision":"778b9bbf21c775d14a180f8fe9173c16","url":"tw_stocks/00673R.json"},{"revision":"73ab0610cc94eaa45d385263223cce35","url":"tw_stocks/00671R.json"},{"revision":"f9b328df0e5aa6d4ba02f9bfbfd07098","url":"tw_stocks/00670L.json"},{"revision":"440446c2db92876fc7a9fdd54727fcf2","url":"tw_stocks/00669R.json"},{"revision":"b84a0757d79b3ca44a8d53a9087873b0","url":"tw_stocks/00668K.json"},{"revision":"4c53baed7ec80e9b8e2d42a08df4bb54","url":"tw_stocks/00668.json"},{"revision":"63237daace2277af2e6aa328a3856c49","url":"tw_stocks/00666R.json"},{"revision":"44e5dd4cf41c9494627c104ec5939079","url":"tw_stocks/00665L.json"},{"revision":"9be5aa131e11d77c5b780164af12b405","url":"tw_stocks/00664R.json"},{"revision":"c3d6f75ba378d146a7bc381ef62a052d","url":"tw_stocks/00663L.json"},{"revision":"e3d8100661406bbbfa40a95b52d938e3","url":"tw_stocks/00662.json"},{"revision":"6ab2ee0510002a2bb776df8367f369da","url":"tw_stocks/00661.json"},{"revision":"f7010444270adfa0fcdce0e7ee9d8d2d","url":"tw_stocks/00660.json"},{"revision":"5b260363fb0beb9947cb60160d5278b7","url":"tw_stocks/00657K.json"},{"revision":"d1438fb9de25f64823da3277ae96cb8b","url":"tw_stocks/00657.json"},{"revision":"c7ff32150011697ac70369abc861d173","url":"tw_stocks/00656R.json"},{"revision":"dce927c9b9aab0ca0f3e76773932107d","url":"tw_stocks/00655L.json"},{"revision":"99bb5bfe326077d48092c47d36b19e09","url":"tw_stocks/00654R.json"},{"revision":"8f615670328e1ddbcf5e24b763f9cc9e","url":"tw_stocks/00653L.json"},{"revision":"f4f96eec327d59b282f5b5a139adab9e","url":"tw_stocks/00652.json"},{"revision":"05e25fd2bac851c7eb5b24f4f00190ab","url":"tw_stocks/00651R.json"},{"revision":"503157d2ce13310dc9f057d639e61694","url":"tw_stocks/00650L.json"},{"revision":"13dc88772feacbe02a7d680392826008","url":"tw_stocks/00648R.json"},{"revision":"6a06c71d11285e4819e0df5e35f544ee","url":"tw_stocks/00647L.json"},{"revision":"7acdba47b3527bb3451cc2cef80aca23","url":"tw_stocks/00646.json"},{"revision":"6d5fb547ab790d211f66ad78512b7a16","url":"tw_stocks/00645.json"},{"revision":"3659052295f9842f9167d5f04076a172","url":"tw_stocks/00643K.json"},{"revision":"e75d3eb2874c5e7f5c767bc8a51bba7c","url":"tw_stocks/00643.json"},{"revision":"22239db6ac08fd358561a8e2fbed6e49","url":"tw_stocks/00642U.json"},{"revision":"af477b9b294842057575dedf86613096","url":"tw_stocks/00641R.json"},{"revision":"1cd88a96c724d3df532cad6e6a3d8ccd","url":"tw_stocks/00640L.json"},{"revision":"6c2cf7a530f12d09538eadd16059e9f4","url":"tw_stocks/00639.json"},{"revision":"0ab32a3b2c24035dd001984b52ed3da6","url":"tw_stocks/00638R.json"},{"revision":"17e3fc3cfa9e7b87efb6631c97e809af","url":"tw_stocks/00637L.json"},{"revision":"1a226c61fe90824898fade45b8abd495","url":"tw_stocks/00636K.json"},{"revision":"e511dff615fa4619ba6a0b445b1bcfa9","url":"tw_stocks/00636.json"},{"revision":"9f4c8d62a0e692540e703a9e23fa3680","url":"tw_stocks/00635U.json"},{"revision":"c94ae36fa2f5300451e667711dd27bf2","url":"tw_stocks/00634R.json"},{"revision":"8210492830c99421afe161f55fdb34f0","url":"tw_stocks/00633L.json"},{"revision":"833ba8aa9b5cfb5098508df542b25a23","url":"tw_stocks/00632R.json"},{"revision":"f7485ab08a79a04885af5ee251895d7b","url":"tw_stocks/00631L.json"},{"revision":"f0b7a5a74dc6ceea84f1bb399deb38fd","url":"tw_stocks/00625K.json"},{"revision":"cc75cf9aae797272dc7b535598ac2c24","url":"tw_stocks/006208.json"},{"revision":"5ed1a89acb0ef87d69f46bf4d52f671a","url":"tw_stocks/006207.json"},{"revision":"fa5d127f52c4f02fc0a56d57563ae8f9","url":"tw_stocks/006206.json"},{"revision":"3e91f12829aafd9cd68f8a7edcc29dd5","url":"tw_stocks/006205.json"},{"revision":"25e8ca9abc951e9908532765d4a6ce89","url":"tw_stocks/006204.json"},{"revision":"6901f9c7690e8c7da7df3e99155f3c74","url":"tw_stocks/006203.json"},{"revision":"11a8902edeaa510abbff3a525700ebb5","url":"tw_stocks/0061.json"},{"revision":"66aaa79cd38d21d6b6782593000fe3f8","url":"tw_stocks/0057.json"},{"revision":"c585745736a55215d7ad24dd8e2ff0f5","url":"tw_stocks/0056.json"},{"revision":"d73c251cc274c882bbbab4a3db4b6249","url":"tw_stocks/0055.json"},{"revision":"5333700a326c64c0360bb239646b3fb7","url":"tw_stocks/0053.json"},{"revision":"e9562b9e4ba916507fd5a03d7e1f7c0a","url":"tw_stocks/0052.json"},{"revision":"c5c2b5805bb24923220d6769db56eb96","url":"tw_stocks/0051.json"},{"revision":"3774196d4b812c0d6219c04b2e19fe7a","url":"tw_stocks/0050.json"},{"revision":"bd1b9dced245e9d0a30349b9ad35dffc","url":"resident/me.html"},{"revision":"3d3c3046b104725372cad6089eb0d13a","url":"financial/rebalance.html"},{"revision":"d6ef62c4f7d035ddbf94547845d3238a","url":"financial/cashflow.html"},{"revision":"92b2b49e63317b139c5f191b00f90cb1","url":"financial/balance-sheet.html"},{"revision":"2a3a14ddf9b46f7aa3a9d65ba5a2ae5b","url":"finance/tsmc-industry-trends-analysis.html"},{"revision":"470d98b82f5f0c29fdeb9b326fd2daef","url":"finance/taiwan-stock-weekend-report.html"},{"revision":"cd8d6903701f8b281fa4f66b7f0a33ce","url":"finance/taiwan-stock-crash-warning.html"},{"revision":"ef4189d05027e4cdba4c5acfa78e8c60","url":"finance/tags.html"},{"revision":"6b170d1067a34bbf3023bf0dbf04efd7","url":"finance/passive-components-ai-stock.html"},{"revision":"ac0d1638f21039b558b5454af0040413","url":"finance/finance-section-created.html"},{"revision":"5428e15fa17d582cc22d8ce69133cc91","url":"finance/authors.html"},{"revision":"d30bea45061b95918869344976bddb9f","url":"finance/archive.html"},{"revision":"64ac63a0ae82f8b4834874100e23bc6a","url":"finance/tags/newsletter.html"},{"revision":"520eb0f06bd39e856c1302b0d2adc326","url":"finance/tags/finance.html"},{"revision":"4653d52f743d832f79dc9214d65c6590","url":"finance/tags/announcement.html"},{"revision":"0715867564498d928f77512a58e697e8","url":"finance/post-453/index.html"},{"revision":"e9be0cba2b69d49d1829e9ec975175b6","url":"finance/post-203/index.html"},{"revision":"a3576a4448405728bdacb46ccaff2d16","url":"finance/ai-286/index.html"},{"revision":"8a8b45f137fd964c3f8a2047d8088d52","url":"finance/2026-02-28-307/index.html"},{"revision":"840bb1b6cda78d1d24b1b5df73f329eb","url":"docs/tags.html"},{"revision":"50ad903918e6fefd183736e1c8660e40","url":"docs/intro.html"},{"revision":"026bed9f8793214fb1acd9f863fa3435","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"25ae2095c94533d3fbf0f0bdfcfc2867","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"e48dc0501be0adb1af03bf859a542dd2","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"9e8864f5cda2367fd8772326a2e0c09b","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"f9f9b0ba52746080259f2fd5e730bcc9","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"1b0d1e8a8a0d14ee4be3a9d8b367bd99","url":"docs/tags/模型控制.html"},{"revision":"28ce1c8f1c91120b4a30a8f662e3df20","url":"docs/tags/top-p.html"},{"revision":"7bcee267d7c0d8ffb95abc700b9b00de","url":"docs/tags/tokenizer.html"},{"revision":"14a7b5b0eccadb2db344bb4ecbe4f5e1","url":"docs/tags/temperature.html"},{"revision":"310516d3eef4cc2231c047111381be29","url":"docs/tags/technical-docs.html"},{"revision":"e213a855d8e1917af2654629c39a3e52","url":"docs/tags/nlp.html"},{"revision":"d9ec6f34e3121cdcfd229ed6586d742f","url":"docs/tags/llm.html"},{"revision":"6b5078a1306c2690c89902307815aaad","url":"docs/tags/git-hub-copilot.html"},{"revision":"72ffdea98f325a92ab154d5f2d464e2b","url":"docs/tags/generative-ai.html"},{"revision":"94745eacfe538f3711bf962a60744247","url":"docs/tags/development-tools.html"},{"revision":"84ab88783921f38fe5fe054433c2bcca","url":"docs/tags/cli.html"},{"revision":"310465a842610ca3094c675cd5013652","url":"docs/tags/claude-code.html"},{"revision":"41c59d70efaca27933589a67abadbccf","url":"docs/tags/bpe.html"},{"revision":"627a04136a4e0cba06ce44294776e131","url":"docs/tags/automation.html"},{"revision":"de57c2f210e8a45b92b04e4012638091","url":"docs/tags/ai.html"},{"revision":"597dc482831fc6dd1eaba7c917ca68f3","url":"docs/tags/agent.html"},{"revision":"12a8adbdf2d8a02dea0a11ee3876a805","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"fcaf34d438c47cd185d62688214e9f29","url":"docs/skill/gemini-skills.html"},{"revision":"9a827c3fb7686ff9ffa1730704041471","url":"docs/skill/claude-code-skills.html"},{"revision":"e7a9d99c6bd92c6d14ec1bd3fe7815fa","url":"docs/python-workshop/python-init-file.html"},{"revision":"e9fcc3e4f07e26fdb27d346a4f8a4baa","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"f55b64b7900f2efb94ab9891ef79dd34","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"a782c968985a707ba27a156881e77e4e","url":"docs/claude-code-series/skills.html"},{"revision":"7d7556d1c6179ea828159dd1071066f7","url":"docs/claude-code-series/monitoring.html"},{"revision":"2b960db10387a10447644c5ce0b4a2b1","url":"docs/claude-code-series/getting-started.html"},{"revision":"21df1ac9bd8e67450451f668e964a1d0","url":"docs/category/發文-skill.html"},{"revision":"8a06942a2c46884c0940082f191a7292","url":"docs/category/戰情室元件-skill.html"},{"revision":"49c150f3d3820464ca15a8b318ebf81b","url":"docs/category/skill.html"},{"revision":"733df1b6a51204d1da3000b52fb2fda8","url":"docs/category/python-workshop.html"},{"revision":"fc9c26dc4629e469c5c6b6d8895bc824","url":"docs/category/claude-code.html"},{"revision":"a478208e834f5f46d94a0814bc248f30","url":"docs/blog-skill/news-rules.html"},{"revision":"e7abde0d2764a1a89567a7fafa0095e8","url":"docs/blog-skill/history-rules.html"},{"revision":"32b313e015b887d0f071d4233a3d79c4","url":"docs/blog-skill/finance-rules.html"},{"revision":"ad272b4791c62a4a6a3d115240b66358","url":"blog/蛋蛋村誕生.html"},{"revision":"b2cbf0af5d1c67e898e03efb2e52c4ac","url":"blog/tags.html"},{"revision":"c40e16600d441f4d420c7c02fab7cf27","url":"blog/authors.html"},{"revision":"81dd256ab8e52934deb147c0d1cb26d7","url":"blog/archive.html"},{"revision":"218110c73bd4b9e81b0f61e897cc7127","url":"blog/2026NewYear.html"},{"revision":"72fa6c0313f659251e5a2218c00eeb46","url":"blog/tags/蛋蛋村新聞.html"},{"revision":"05c30be6be1f5ac3a0277b38a30e3670","url":"blog/tags/節慶.html"},{"revision":"ae8e4d95aefa0156541eaee40fe40728","url":"blog/tags/新年.html"},{"revision":"e51aee89c3792d772482a95f9d00127d","url":"blog/tags/技術新聞.html"},{"revision":"d1fc4b8cb50e3461bc30b89d05d4da05","url":"blog/tags/village.html"},{"revision":"085e780aca7d5c4a14ec1a257037caba","url":"blog/tags/news.html"},{"revision":"e49a83d58708083ae89f719a67a06c62","url":"blog/tags/docs.html"},{"revision":"5dc51a80f5acf8823d103631c1a679b1","url":"blog/tags/claude-code.html"},{"revision":"f128d5b3ba081038bb9357c723967eff","url":"blog/tags/announcement.html"},{"revision":"ae66c302f441cd6dcec4bacc128cd1e4","url":"blog/2026/02/23/2026-02-23-news/claude-series-announcement.html"},{"revision":"8b27c8fcbf68605affebb1fc33a5fb6b","url":"auth/callback.html"},{"revision":"15cbd04af148a660de048e9dd035e7b8","url":"assets/js/runtime~main.b44ca2c9.js"},{"revision":"59fb95f23653135103c9d323ccd3157b","url":"assets/js/main.1e0cf710.js"},{"revision":"15ebc6aac921b55eba0b53bdf9f306eb","url":"assets/js/fa878c7a.2bf652e0.js"},{"revision":"0f11ca6cd350bf767b07585651e8a97d","url":"assets/js/f85166e8.46873a19.js"},{"revision":"e9a560e1631338b4b2df0a38bead2dab","url":"assets/js/f81c1134.7be45fa8.js"},{"revision":"55106d1d50a6c95bc2aa009a808b109c","url":"assets/js/ef8b811a.76c51217.js"},{"revision":"db95dd33b34d7d00aa83a7e13d50c055","url":"assets/js/ec1e3285.5d5f9200.js"},{"revision":"29ff6c7471b56bf0aadc543594cf40d5","url":"assets/js/e88c4a9c.a3310321.js"},{"revision":"44b259690e472587949679d3a2667069","url":"assets/js/e86a5a75.166b0b9a.js"},{"revision":"60b2c8a3b74015b753023ee329437768","url":"assets/js/e787448d.66f628fb.js"},{"revision":"a4ab82928b4a1bf929727addc79353b4","url":"assets/js/e4c94ae4.7000dc00.js"},{"revision":"b4464ec4be41e76d36bdf65654260505","url":"assets/js/e1dd3c3b.19a2e21a.js"},{"revision":"f3d256ab19dea9c474abedead6f842fc","url":"assets/js/e03056a8.065c13f0.js"},{"revision":"266083cb5de8adfa958dcb0573ae8d53","url":"assets/js/dfea6eb9.d2768911.js"},{"revision":"a7d0881b69dea34e14c666be19996967","url":"assets/js/df53aada.b73bb43f.js"},{"revision":"7e83e84f391cc8642c7417b4ae18aeb5","url":"assets/js/df203c0f.41bab8df.js"},{"revision":"204c31b8878fdd7cd3f156c587125426","url":"assets/js/dd5b562f.59f952a1.js"},{"revision":"00eba4084be130ab9a4f2ed384526868","url":"assets/js/d871e2e9.623af483.js"},{"revision":"7d7176bb771dff17f539d43dcef45e38","url":"assets/js/d5d47070.6bc0bd98.js"},{"revision":"bef90acb136b2db12b817fd568f87963","url":"assets/js/d5ce7688.cf1ffa05.js"},{"revision":"fead42a4fd2ad431daaf3dc15269b8ca","url":"assets/js/d55a815e.5e029f0c.js"},{"revision":"bb03602ea6013da2acc8faa6ca351cef","url":"assets/js/d2682be5.18b9b59e.js"},{"revision":"d75a53db168c7a6efa04bf8f4d1f2273","url":"assets/js/ccc49370.4acf66f3.js"},{"revision":"6404c7f1f90da5b17b93f1309c9bc5a7","url":"assets/js/cc221b30.5c678638.js"},{"revision":"dea243d5031b34d94e913187d0da4b97","url":"assets/js/c7a70e28.f39ac707.js"},{"revision":"7fe4bbeafcb8bee5c2de53b620c9e4b3","url":"assets/js/c3b1af5c.14499a29.js"},{"revision":"f13cbcd0533fc889cce1dd611923d4cb","url":"assets/js/c15d9823.4971e238.js"},{"revision":"42822aa294f610bf051bc911c2f5f846","url":"assets/js/bfe3b7d2.5b15a911.js"},{"revision":"5860a1a0db5d917b2738407b9c059c78","url":"assets/js/b95eaafa.b52e4eb3.js"},{"revision":"56c7b1edec8b7aa5ae971dc55fb3efbb","url":"assets/js/b3f074c6.7aab1a39.js"},{"revision":"77bba532ae39af8f01e726f5510144a0","url":"assets/js/b283ca86.88b6fe5f.js"},{"revision":"42d9ac42c25f1912d8e44ae4dbf81743","url":"assets/js/b046c1ff.17f4be2f.js"},{"revision":"0c027c018c9ebdaa82247582268988eb","url":"assets/js/aeedf315.a66b8a58.js"},{"revision":"32261545ca8f549ec3fa75dc8d8abb2c","url":"assets/js/adb00d9a.7f94a47d.js"},{"revision":"58eb2b1552a10201f158f5d5874f7553","url":"assets/js/acecf23e.4f5cb8d8.js"},{"revision":"c5c337cc35b4e21b7bdb5a7bfebcebad","url":"assets/js/aba21aa0.8b0e3441.js"},{"revision":"a1c94b123e5900bcec06ebdce6ed9d3b","url":"assets/js/a94703ab.53f31309.js"},{"revision":"2d4c76fa5d70eed1543b74be26434473","url":"assets/js/a7bd4aaa.da033f84.js"},{"revision":"53eb2646dbd0ee9611633cfb2dbfaf48","url":"assets/js/a7456010.c3dc3348.js"},{"revision":"fb4654e923d23390ccf376676c3f3200","url":"assets/js/a6aa9e1f.0d7c5266.js"},{"revision":"df79fd7b1282b86c74bb6adacd6b1f9e","url":"assets/js/a6038fd8.399ab5be.js"},{"revision":"70221b1e9740bba7ed7f53dd917972c4","url":"assets/js/a1fbcaf1.c75f5623.js"},{"revision":"33d1d2155db99fd8bf302b6e622de762","url":"assets/js/9e4087bc.a83212ab.js"},{"revision":"000cb776383241f8ac2a9eea1d3af208","url":"assets/js/9d86e7fa.f5516573.js"},{"revision":"5b36233fbbc2b2d69afcfe50cd65ee79","url":"assets/js/99d3b34a.e6cc4677.js"},{"revision":"9de100c367f6135eaadee7ee43266503","url":"assets/js/9961.4869357a.js"},{"revision":"88ec8cea3100b43d3c1efc0076c91b79","url":"assets/js/987.3261d724.js"},{"revision":"2e38518a16af069476b600f5b7c77e75","url":"assets/js/9779.4cefc5f2.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/9674.bb27ff20.js"},{"revision":"0e7d34a9ffdb81cd72a0948ce314f2cc","url":"assets/js/9650.66859f2e.js"},{"revision":"e0a26b5e2c07ebeba3a0c876ee750666","url":"assets/js/9463.7b8ffcda.js"},{"revision":"a471e3b20d62483e282bc3bc30496bac","url":"assets/js/940b0b54.455f9e70.js"},{"revision":"e920a770e68fe9339763a77b0ea3b6b4","url":"assets/js/934.5e9ace63.js"},{"revision":"7d6841d13be73c98356628a0633d4b1e","url":"assets/js/9335.fccaaa9f.js"},{"revision":"ea88bba5b5ae5facc3324b69a06dae34","url":"assets/js/9282.3a7bf7ad.js"},{"revision":"940ae85bc9fac184ad6890611a6b0e8d","url":"assets/js/923ed0b3.bbe7f47c.js"},{"revision":"92ed7b7ecb34386c4eb4ca1788b1b04f","url":"assets/js/9170.af9a8158.js"},{"revision":"5ccc471b8806094975e5d5e11583536c","url":"assets/js/9094fa5d.0eae3621.js"},{"revision":"56c90f4ea88e340e422d61c26d46440b","url":"assets/js/90326f8c.baa2f87e.js"},{"revision":"cf5cc28d19275621f4dd7c4b91ae8e04","url":"assets/js/8c20996d.3d21e856.js"},{"revision":"341cfdc51ab98e4b1b487af950adfce5","url":"assets/js/8be8ac58.dd668cea.js"},{"revision":"60febb98d3153fcad87d55cc64aa7594","url":"assets/js/8af61f6a.1b5c60c1.js"},{"revision":"39640a6a8d1b26151d270c46401a649a","url":"assets/js/898514b1.d6ed8d65.js"},{"revision":"35f1c53454abb53c370006785a84e7d1","url":"assets/js/8910.253f1d79.js"},{"revision":"360ac5df5a4b371434356313d5c891d6","url":"assets/js/887798b8.94e27d62.js"},{"revision":"63c7c26a16a765404db742aa4b63e88b","url":"assets/js/8800.9ec5dfe8.js"},{"revision":"6b3d060607e1e8637762c83e0d76a9ff","url":"assets/js/8793.88bbdd65.js"},{"revision":"21d392059077e6697c70d98a069c8296","url":"assets/js/8588.cb645248.js"},{"revision":"4b3a2417ff70243b4ede79eaf218c847","url":"assets/js/853e1e42.7548f55d.js"},{"revision":"54c379278428592b6a9e31e762925597","url":"assets/js/853ca2df.385e7cd2.js"},{"revision":"b5bd78960ebe25a6b6dad8e58bc3efb0","url":"assets/js/8368.62be58f2.js"},{"revision":"7bb56b286364e0627c602d62c651cd1e","url":"assets/js/8350.331f35bc.js"},{"revision":"00402ac9cdd2466b26bb546735a550ee","url":"assets/js/8309.a4d02fc9.js"},{"revision":"7346776cd3b086b1f013b598dd6d8905","url":"assets/js/8252.9d7adf83.js"},{"revision":"4ca48d806da3b8f49afa0d9d8523b8cc","url":"assets/js/8206.900f98fc.js"},{"revision":"50de3333b24ea0e2cd06cc14997bc284","url":"assets/js/818.e89c87e4.js"},{"revision":"3acb7338d8a920eed4fd3c8c6f754d1a","url":"assets/js/814f3328.6729d7d2.js"},{"revision":"3c81d2ee6d0695bdafa8f20eef025641","url":"assets/js/7fbc1a25.0062c973.js"},{"revision":"c6e1b3f07b17d505156a49bedb225643","url":"assets/js/7ce5d7a1.edff7a4c.js"},{"revision":"8744f0454f48e6c1d0b5e1ea0740d999","url":"assets/js/7961.dd9a89bb.js"},{"revision":"e183f3d871d1cc80b228627f634115f9","url":"assets/js/78d114c2.3881ea0a.js"},{"revision":"33baef3a60a244164e83532b4a9e5e5a","url":"assets/js/7851.0e8188f9.js"},{"revision":"3089fcd69a492593fb5bc4000832e5ea","url":"assets/js/7740.60883d4f.js"},{"revision":"7625e711135ca6101fd92b4edc0cbd9d","url":"assets/js/7714.723cd0e3.js"},{"revision":"39772b663b3709f69d1bb93a956423dc","url":"assets/js/7658e121.51e577c2.js"},{"revision":"57eee2f0eaf4e3e8611502021e5f6575","url":"assets/js/740.7897cee8.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/7293.bb27ff20.js"},{"revision":"28121858a6af620d8944f5b436f2a321","url":"assets/js/7284.8f991185.js"},{"revision":"b072c1c9a949e55aa74298d5184691dc","url":"assets/js/72044931.87ed0af1.js"},{"revision":"2460a579ffa671ed57b488792c148e74","url":"assets/js/7160.0eff791d.js"},{"revision":"c14acab7bcc547df9f0ba480d5717872","url":"assets/js/7110.dcff7519.js"},{"revision":"f2d14cc3342532b64488a29f9cea4f71","url":"assets/js/6e731933.d7caa690.js"},{"revision":"fc42429899ad2ea8eb7becbfb06472c9","url":"assets/js/6b65cf72.eed0185d.js"},{"revision":"ac51851f93d46f79d621f49b302fac6e","url":"assets/js/6965.a941c0eb.js"},{"revision":"05e486ff504f5abd6169ad661cf417bf","url":"assets/js/6875c492.e2f0ab14.js"},{"revision":"882113f67e3b746ff788c7e54dd1b87f","url":"assets/js/6659.b1ed35b2.js"},{"revision":"cc0c6423141a0c138f06e97cd07789f7","url":"assets/js/6517.1e01b8b6.js"},{"revision":"e976cf2f675c7582d5a076a1fc21cab4","url":"assets/js/64c24869.043012cb.js"},{"revision":"10ccaae9e9aa6e554d2c06a9cd198d41","url":"assets/js/6454.1c56b0e7.js"},{"revision":"de04774710d5cc94d54128fc124483df","url":"assets/js/638.89d775b6.js"},{"revision":"b4194552a15c0f9f1d2ba2d4fa737c10","url":"assets/js/621db11d.147ecc2e.js"},{"revision":"fc0c03202b0b19fbfe752b94202c4d04","url":"assets/js/6171.5ee9ad6d.js"},{"revision":"f0ebb23124c8b6c82c2aeb6cbe641e9f","url":"assets/js/6112.86ec3b15.js"},{"revision":"d26b132cbdb9f16b8ca13320e025612f","url":"assets/js/607acb04.37195c58.js"},{"revision":"ee408a3c48ff6ec403400292b65ad0e7","url":"assets/js/6046.15dcf4cf.js"},{"revision":"786eb955c72b6c73ad4d77ac31298442","url":"assets/js/5e95c892.6f846709.js"},{"revision":"d32d4654077dc7195cdd784d4673cd57","url":"assets/js/5d785d74.2470c9e5.js"},{"revision":"48042c17a85e2246972301da3810baa6","url":"assets/js/5d6f837a.02d07634.js"},{"revision":"16bc67d14b9d290d85b07857a5727ac7","url":"assets/js/5a9666f9.aa8aaa13.js"},{"revision":"38f4db3f7bf966b5880d0f85e457a8ee","url":"assets/js/5989.9af4af00.js"},{"revision":"befa3228b6c47c5791af8e5e68870bc4","url":"assets/js/5868.4e8e1240.js"},{"revision":"83466cb0da431d410f278da2c8c8bf4d","url":"assets/js/56fce896.52e72d87.js"},{"revision":"23464be13b092b69eba3ebe3c6da6a05","url":"assets/js/5616.7cebadb3.js"},{"revision":"651aaac43fc0e90a5956dc8bc0d954b9","url":"assets/js/5602.87978ab4.js"},{"revision":"ca9c7fa8d9b7e90f6f4c4683f2c4cf36","url":"assets/js/5591.c95d50cb.js"},{"revision":"dd4eb6724d8fc88d042605c210a0b6da","url":"assets/js/5564.af03099d.js"},{"revision":"cf09d1bcaefc064c07318a0da75cfaf6","url":"assets/js/5091.0fbf91cf.js"},{"revision":"4bb5d4152e1c7bc32862dabb10ef560c","url":"assets/js/5010.bf8c7d7a.js"},{"revision":"44f8f38b110af61dd93980cef34b1970","url":"assets/js/4f033264.c6e01f0e.js"},{"revision":"70d489d3de0e9a10f49add6a281066f1","url":"assets/js/4bde1fca.2d0e84c3.js"},{"revision":"c327ed68a118227074833eb2f0a1fdb4","url":"assets/js/4962.b0e19128.js"},{"revision":"d40978ec50ccebd9761b7b0d29a8e367","url":"assets/js/492.e540df4a.js"},{"revision":"29fa84822a4dcab883cad2d4594919df","url":"assets/js/4854.075cca66.js"},{"revision":"f852c6c81bcf9c073d638d0fbde96b7f","url":"assets/js/4810d89a.b869ae23.js"},{"revision":"3d97e1e9b0b8bfbbe4cc4b2c42b6e020","url":"assets/js/47f9c915.e2b01692.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/4436.bb27ff20.js"},{"revision":"0aeb7eaeede971e251df65d78a9f080e","url":"assets/js/43ea09b6.fdf83d54.js"},{"revision":"0c3223ecf790b7ab27951d376323b5eb","url":"assets/js/4201.1dcf06f2.js"},{"revision":"6d876a009b185506453ddbc9a68c04f3","url":"assets/js/418.683741cb.js"},{"revision":"e67c6962178e0d20c5c3d7f0052c5c6e","url":"assets/js/40ccdb3c.c0d2b653.js"},{"revision":"9b16a6171ea0ad02d5431e7b18d967f5","url":"assets/js/4087.7eca1bfc.js"},{"revision":"012b5e0f1dc090335af63398be22a53a","url":"assets/js/4066.93f8f58b.js"},{"revision":"5f848a22d1713674c7da48df2a6a5a36","url":"assets/js/3f29ba7c.9626bbeb.js"},{"revision":"62b83219d3484f62c873ed173d6909df","url":"assets/js/3ee3fb84.413e409e.js"},{"revision":"c9f9934b2d888f7d6a1e2c700eb6ec3c","url":"assets/js/3ece3575.3b38bed8.js"},{"revision":"5999807dd8862de6919156b5dbff5a4d","url":"assets/js/3a2db09e.be45585b.js"},{"revision":"308cdbf82f6767119fa5be74d6306162","url":"assets/js/3969.565b1773.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/3960.bb27ff20.js"},{"revision":"fc211dd98ecce893511bad9e7eb8c971","url":"assets/js/393be207.b36de42f.js"},{"revision":"8805672a08ab242d704ea041b27ad544","url":"assets/js/3856.982caaa2.js"},{"revision":"02cf26ef9fb53c48f506b7bf0274c511","url":"assets/js/3720c009.b8a03e39.js"},{"revision":"b2edee4e976dac48e0fd48185abf2ceb","url":"assets/js/36f337b1.80dbd475.js"},{"revision":"55b2a35cb67e50a7d5c53003e7d96daa","url":"assets/js/36994c47.634734bc.js"},{"revision":"aae15f1cccd633f4dbfb9e681f8ddc77","url":"assets/js/369.6b228c22.js"},{"revision":"bdbe9c5059613a5a119034b7e10ddbed","url":"assets/js/3616.2abd5f36.js"},{"revision":"a543ca34259efcfc185856d1f9ab7e20","url":"assets/js/31e93ad8.1ef405d2.js"},{"revision":"1868fc816a78c5fbff13c124d28337cd","url":"assets/js/3197.900e3f82.js"},{"revision":"d9c4fd929c5ac776a25b904a1a9eded3","url":"assets/js/28ccb8e2.3bf79d7b.js"},{"revision":"99edd35f9f07e0c77be024cbfb7a4830","url":"assets/js/27e16d5c.08358c2e.js"},{"revision":"57d1886cc54c24d40e8b46160e95347a","url":"assets/js/2710.53bc60c8.js"},{"revision":"56caa3c504aea460018e66fe9a891498","url":"assets/js/2697.ba08ef05.js"},{"revision":"ca11d0178479cc86bb922125c1d52bfb","url":"assets/js/23d26d3d.7a98e05d.js"},{"revision":"5d49d8058dafa763847476267b217601","url":"assets/js/2399.14df9d0f.js"},{"revision":"919439adafaf4052d810690de9ba5920","url":"assets/js/206.0b71223a.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/2055.bb27ff20.js"},{"revision":"3ee9dff7b14985160e9b5f53e15066bb","url":"assets/js/1f391b9e.b3d0d2aa.js"},{"revision":"0586d6c52e83a0efac8447b456dc54b0","url":"assets/js/1df93b7f.d5a69844.js"},{"revision":"7b0f149732ec9e2766b61e284532dfe6","url":"assets/js/1bd186b5.d722e6fd.js"},{"revision":"e9f7ecb2c5e2589fb60da4540b59ae69","url":"assets/js/19408a66.26de6b76.js"},{"revision":"3531d66a93c1f5d8d99b580900ed47be","url":"assets/js/193da79a.9a18bc65.js"},{"revision":"112c3ef111b5513b1577c8aace165444","url":"assets/js/1829.8a3d16d3.js"},{"revision":"5653e74ca5d90628f7bd209c7792504b","url":"assets/js/179b82d4.b157b563.js"},{"revision":"00b88d647358c54402e5a1487ae75258","url":"assets/js/17896441.2ae5aa4a.js"},{"revision":"a459ee672892371602cc595400c6c3b3","url":"assets/js/177ac620.5f5fb7ea.js"},{"revision":"c98bc3cfedce89385ec26a8e9d52414c","url":"assets/js/1634.4e2a758d.js"},{"revision":"0820458e119e61f4b79c407a6d323e85","url":"assets/js/162c7fa0.0f365a9c.js"},{"revision":"a675784be03f21cd7ca8df8df6efd5f4","url":"assets/js/1591.634628f4.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/1579.bb27ff20.js"},{"revision":"79ab60da29ee00222e21875827ea03a4","url":"assets/js/152e41eb.9e8281d7.js"},{"revision":"e1c7720cb5fb07f329adf043d498b5b2","url":"assets/js/14eb3368.422a369f.js"},{"revision":"a46fb9ef5009f0f7bbcd1fed3dc4a624","url":"assets/js/1319c958.37001a49.js"},{"revision":"5df0c6cfec2e028dc890db77d85ab1d0","url":"assets/js/1266f974.25a28eee.js"},{"revision":"bbeaf94e13211fd9fa1d383b1bc181c6","url":"assets/js/1244.a60124b5.js"},{"revision":"fe5d629ab6f06df5ec782cdd4a5b36db","url":"assets/js/1194.72865e71.js"},{"revision":"5c123f15da449c736a61b5b687ee4c66","url":"assets/js/0e5813ea.98e1aa97.js"},{"revision":"434baf6399194343080577b26ac21358","url":"assets/js/0e384e19.c68e56c5.js"},{"revision":"2ab10aec48b6b1cd45e4cd2ca116226b","url":"assets/js/0b169497.112d44fa.js"},{"revision":"72d4c997431475664195bb25a6abf989","url":"assets/js/055ef20d.dd7446f4.js"},{"revision":"44c9bc910db31a7e61322c1e714fdc51","url":"assets/js/01a85c17.7fa5db12.js"},{"revision":"eb61a294608694b0427982f1957e99ea","url":"assets/js/015a3104.79b45b42.js"},{"revision":"948235995390d3620584fd1783a405dd","url":"assets/js/0058b4c6.b61660b4.js"},{"revision":"da4b115fe9030489a69c429c51b19a53","url":"assets/css/styles.b0383eca.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map