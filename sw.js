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
    const precacheManifest = [{"revision":"f2ccedc390b31478bcfef739e8a6de05","url":"tw_stocks.json"},{"revision":"0bffa12209ed3af209a46728a0c01c08","url":"quotes.html"},{"revision":"3a0114648ac3eba263822b960ec5985d","url":"me.html"},{"revision":"191ec15114141a48fc4f7644a7539ac2","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"b14d5c6dba8a7bedf7abcc2cccdb92ff","url":"index.html"},{"revision":"c2b7eabc3e85236dd29c64416da09db4","url":"finance.html"},{"revision":"404050a9e02033396ae8f8f4f52d6a2d","url":"feedback.html"},{"revision":"6f0115cb0941ce46f51e4133669126f3","url":"blog.html"},{"revision":"08777ae3b9ddf04fbf8a54005534df35","url":"404.html"},{"revision":"f34d615079ef75a436776d946585dc10","url":"tw_stocks/9958.json"},{"revision":"1e882ece1fd530d23555e70174494cfc","url":"tw_stocks/9955.json"},{"revision":"722fe69b3b4148cedeab3a089ece8d90","url":"tw_stocks/9946.json"},{"revision":"98cf4b7b8a679dcf5d54ed0975fe1a46","url":"tw_stocks/9945.json"},{"revision":"d15a2be2940a41b31b23ab1bb8111671","url":"tw_stocks/9944.json"},{"revision":"89c1b26d3307da1ece47263cd3b3fb41","url":"tw_stocks/9943.json"},{"revision":"383c3162afb50ba07e30689eebb33809","url":"tw_stocks/9942.json"},{"revision":"07685616d196952bc5e083086ad28719","url":"tw_stocks/9941.json"},{"revision":"92b61cf4e8695fe0e1e44ee5120d8b3b","url":"tw_stocks/9940.json"},{"revision":"26612ebfb905a723cef0d52ea8ee049b","url":"tw_stocks/9939.json"},{"revision":"54f40e2522a760bb2ef6c4192abb82b3","url":"tw_stocks/9938.json"},{"revision":"e59e414a03166d89ea1d1cc70653b493","url":"tw_stocks/9937.json"},{"revision":"5e038359d92da9c35d6a8525a625f4a8","url":"tw_stocks/9935.json"},{"revision":"3479cb181d1d159c42e321e49e318c98","url":"tw_stocks/9934.json"},{"revision":"e3f34b04944139b3532de0c38e26c8c8","url":"tw_stocks/9933.json"},{"revision":"3608b42b842dd8079f46c5fb64252b48","url":"tw_stocks/9931.json"},{"revision":"e12c282ee07334c9878ff7d6b4100237","url":"tw_stocks/9930.json"},{"revision":"0d04aea83af338309e3e3c41504e3c23","url":"tw_stocks/9929.json"},{"revision":"1c824ebf1e445e6d9267c3fde763332c","url":"tw_stocks/9928.json"},{"revision":"a3c1414ec3300cc01bd402c27274bd70","url":"tw_stocks/9927.json"},{"revision":"8083ed2bdaf4af86103216fa24f91bab","url":"tw_stocks/9926.json"},{"revision":"a7a77ca9eb0d3d9c1de5909c1ac30f77","url":"tw_stocks/9925.json"},{"revision":"aaa004f65e482a18cb6310dcbca69311","url":"tw_stocks/9924.json"},{"revision":"00d9824491e8090f77893f1e78e0ef9d","url":"tw_stocks/9921.json"},{"revision":"c5f6b5bc3b8a203ad33667c0c6324125","url":"tw_stocks/9919.json"},{"revision":"2df0bbfcaeae6b3eaccf00e5dfa4334d","url":"tw_stocks/9918.json"},{"revision":"3c0adab88509bd72123f62d0e48d242f","url":"tw_stocks/9917.json"},{"revision":"60dfc1ef5cfe3e8990641f4b947414db","url":"tw_stocks/9914.json"},{"revision":"2c9627333021dbc63bc76ffebd53c471","url":"tw_stocks/9912.json"},{"revision":"a882d409fa3688a9bc4a3f2b234b6b74","url":"tw_stocks/9911.json"},{"revision":"242810a1b2221288f6d4d07ab4cef2c1","url":"tw_stocks/9910.json"},{"revision":"217d5c0546b076f8fb9b7275148e6418","url":"tw_stocks/9908.json"},{"revision":"e7c8b0a6c6795f0b479a4cfb0a16f3da","url":"tw_stocks/9907.json"},{"revision":"f0f499cc6e329207e0098b11455f9494","url":"tw_stocks/9906.json"},{"revision":"ef7e1ee0df3bc271c7f81c12c3ab16d9","url":"tw_stocks/9905.json"},{"revision":"b529d14bfe21970787dd1dc5c4240b03","url":"tw_stocks/9904.json"},{"revision":"8a506b7499184531b0341325e1f4be49","url":"tw_stocks/9902.json"},{"revision":"463e1c2eff9f204d5c8ce0a14f73b284","url":"tw_stocks/9802.json"},{"revision":"61d1ae3ff0b72ac1fd8202941b77a4f5","url":"tw_stocks/8996.json"},{"revision":"f710004ad1b67b6a9a7a4e38c20f616c","url":"tw_stocks/8940.json"},{"revision":"b8391a58c78a35a0fb014f1b4e43c83f","url":"tw_stocks/8926.json"},{"revision":"ac938ac27fe940b99d95d42f4086479e","url":"tw_stocks/8499.json"},{"revision":"f7ab860763913ec480d58630382d3510","url":"tw_stocks/8488.json"},{"revision":"6c47e8222a0d9da496900446a5a48c3b","url":"tw_stocks/8482.json"},{"revision":"d57a3af6eee779d8651a53d9f8633b1d","url":"tw_stocks/8481.json"},{"revision":"469b33f855ff4208077ac8fa31b0b973","url":"tw_stocks/8478.json"},{"revision":"a670fa616564b75cd3405b3c9841c173","url":"tw_stocks/8476.json"},{"revision":"1d599eb122f06bc92c650f9fc5b9a888","url":"tw_stocks/8473.json"},{"revision":"96dd39777f5c196dc5bdc7fe35b9f41d","url":"tw_stocks/8467.json"},{"revision":"03289aae211c823f8e7ee95597971922","url":"tw_stocks/8466.json"},{"revision":"e09696cac56bd488bcb6f5e78a5010a5","url":"tw_stocks/8464.json"},{"revision":"6d7958220c786ad830609a09054a7a02","url":"tw_stocks/8463.json"},{"revision":"67bd67f1ce791a9cb7668fc4dec78a97","url":"tw_stocks/8462.json"},{"revision":"80966f99f1cad675798086848af7a8f3","url":"tw_stocks/8454.json"},{"revision":"cde6f293c2a26a614785541f3a75e55b","url":"tw_stocks/8443.json"},{"revision":"e8925bd8e39f8f43d42bc2f83d6c29ee","url":"tw_stocks/8442.json"},{"revision":"b731cbba1ebb6c08c3379b0e1107e3b0","url":"tw_stocks/8438.json"},{"revision":"b87ad3461d798bf8c43bdbcb630c67ee","url":"tw_stocks/8429.json"},{"revision":"f6faa6e8206cd09b904686c6c3b9e05d","url":"tw_stocks/8422.json"},{"revision":"47df7ca0bda36fde827ce231840cb7a5","url":"tw_stocks/8411.json"},{"revision":"5f6082560f7f218aaa82c1b5dd9c2cd6","url":"tw_stocks/8404.json"},{"revision":"a0eab8bf8786a0383b7085e763313c54","url":"tw_stocks/8374.json"},{"revision":"e30ed0a899ce634cffd27c3a4169dd1e","url":"tw_stocks/8367.json"},{"revision":"e4c2cfc312a869e5d5e61c99e4895bb2","url":"tw_stocks/8341.json"},{"revision":"64c97e9365dc60998e302e2f3ddb17d9","url":"tw_stocks/8271.json"},{"revision":"4d7798f314ced2ae8fa99b21b1ff8847","url":"tw_stocks/8261.json"},{"revision":"0f497d31f5aad114ab441c9f09848776","url":"tw_stocks/8249.json"},{"revision":"911d93287a20ffce7bbd8866266c8933","url":"tw_stocks/8222.json"},{"revision":"ef06148921a391fc4f33e70e746d798b","url":"tw_stocks/8215.json"},{"revision":"67c212b4b2a95178e38cc4ae8b0914bb","url":"tw_stocks/8213.json"},{"revision":"c5a6381d8f0ce88176b074213b66bf80","url":"tw_stocks/8210.json"},{"revision":"267a332f9183b281ce8335424605851a","url":"tw_stocks/8201.json"},{"revision":"585d186b5bfa8ebccb14abad0550b7e4","url":"tw_stocks/8163.json"},{"revision":"3b7bc5ff6c98a11a223bfee3018b677b","url":"tw_stocks/8150.json"},{"revision":"43b2d287404c1cecdbead6662d21fff7","url":"tw_stocks/8131.json"},{"revision":"199e23bb5d939bd1f9dff984ce8e2967","url":"tw_stocks/8114.json"},{"revision":"7ccb0e5663d430093c042e6caaa6ce69","url":"tw_stocks/8112.json"},{"revision":"4269c040798b25725b1709f90e06f1be","url":"tw_stocks/8110.json"},{"revision":"af8f7ec2c69060babf9153734fc6f2c4","url":"tw_stocks/8105.json"},{"revision":"b7fae76a8e30cab54e73f8264c40bcb0","url":"tw_stocks/8104.json"},{"revision":"b93d4e82bafb3e19b931ae2f7d64415a","url":"tw_stocks/8103.json"},{"revision":"24e878306a4e9d9e5833ca63ce008cee","url":"tw_stocks/8101.json"},{"revision":"e75eaf2ad36c7d5bb6d248691ad0075b","url":"tw_stocks/8081.json"},{"revision":"6a30ee6fb15cfb0273c72a87b7dc1e22","url":"tw_stocks/8072.json"},{"revision":"067f7d38c17e477ee19c27f9ac4bc12b","url":"tw_stocks/8070.json"},{"revision":"f877218f92eaa697377b8c0248658dd9","url":"tw_stocks/8046.json"},{"revision":"5b3ccdf92f1a264a42954dc7e19741bb","url":"tw_stocks/8045.json"},{"revision":"923304a3b8769a0895f2fd463d23b0c0","url":"tw_stocks/8039.json"},{"revision":"85d001902344d750a02fa2cfab8ade84","url":"tw_stocks/8033.json"},{"revision":"0c365fd9fa66faeae4c86b36ff15d39c","url":"tw_stocks/8028.json"},{"revision":"553539eb1b18312af65730c18478b3e5","url":"tw_stocks/8021.json"},{"revision":"9280782403a8e116bb7f41a09cfd3b91","url":"tw_stocks/8016.json"},{"revision":"b6e307776ebe9792682f13313d73aa4e","url":"tw_stocks/8011.json"},{"revision":"84406d1bc418ba521b93b167d038a418","url":"tw_stocks/7799.json"},{"revision":"be585eb6285e9421d7eefcab95d0ad93","url":"tw_stocks/7795.json"},{"revision":"9635d7c08a7b51fb605bcb8103d5710c","url":"tw_stocks/7791.json"},{"revision":"b47a3fc1fb9f8e6a9daa7bbefce93de7","url":"tw_stocks/7788.json"},{"revision":"fa11622555f191e13adf74edb471c37b","url":"tw_stocks/7786.json"},{"revision":"d85401ff305b205ca00a0a6089532ca4","url":"tw_stocks/7780.json"},{"revision":"e6dac8aa43be6ba0b1bd7ed95558b57e","url":"tw_stocks/7769.json"},{"revision":"3687b05052efe4539adac21ae2c61e96","url":"tw_stocks/7765.json"},{"revision":"18311021a2394e2f1b992755042d23b6","url":"tw_stocks/7750.json"},{"revision":"1075705957ab57ec0149c7281e4ba03e","url":"tw_stocks/7749.json"},{"revision":"972e9d110bb63e0feb120a75ab81d9b1","url":"tw_stocks/7736.json"},{"revision":"a52fc1244e633ec38224544ed0d569bf","url":"tw_stocks/7732.json"},{"revision":"f3b266bb83eccc8e3339e6f0072a259b","url":"tw_stocks/7722.json"},{"revision":"64343c4ed50cb448f9be3ef0b29e6166","url":"tw_stocks/7721.json"},{"revision":"e43da9f9256af0f7da896ab69bdd8ddb","url":"tw_stocks/7711.json"},{"revision":"62595556349bcf501474f75103e06720","url":"tw_stocks/7705.json"},{"revision":"b3377d9b7bdca2c654138664ce95aa4a","url":"tw_stocks/6994.json"},{"revision":"d7d41669b74693295c2d5d166a87cc96","url":"tw_stocks/6965.json"},{"revision":"5bb8ce93dd71d8e4409009e7bb297fb8","url":"tw_stocks/6962.json"},{"revision":"50a4ad9de3b7f9b0d2d62b3d8c937b7a","url":"tw_stocks/6958.json"},{"revision":"2b517fd3940c176f03d0b38394378c66","url":"tw_stocks/6957.json"},{"revision":"6621a5350c07be2650d699cceaf22deb","url":"tw_stocks/6952.json"},{"revision":"f3db7b6bbb1c9c052a6b392ebca6a4f6","url":"tw_stocks/6944.json"},{"revision":"75b07eb1d8c6f66ffcb954662add6938","url":"tw_stocks/6937.json"},{"revision":"17f8c7d41adfa0e54aa6f4f8ea43d4ad","url":"tw_stocks/6936.json"},{"revision":"d84e2288688e3a1e80a1cbe7020c1309","url":"tw_stocks/6934.json"},{"revision":"47ffd756af968655abaa68833e91af57","url":"tw_stocks/6933.json"},{"revision":"40cf784da59e338e156e08f8b85d326a","url":"tw_stocks/6931.json"},{"revision":"b45078127f190a36f1e4430615f364b8","url":"tw_stocks/6928.json"},{"revision":"1f8982dfd3f6fe5e340aa99bfcd38329","url":"tw_stocks/6923.json"},{"revision":"db034256077c23754a1ed8fe95d38ecb","url":"tw_stocks/6919.json"},{"revision":"d2bf89712b79c815326caabd73823744","url":"tw_stocks/6918.json"},{"revision":"9b45ab4ae834d07e8b278bb7d27d0f2d","url":"tw_stocks/6916.json"},{"revision":"52b96d87fb5d1ac28028d4810fabdd88","url":"tw_stocks/6914.json"},{"revision":"e43ce08c2b7f7da57cc0c97067e57e17","url":"tw_stocks/6909.json"},{"revision":"042b7191d617e8e8532400a98c28d119","url":"tw_stocks/6906.json"},{"revision":"793baf1008c8ab357d0e2315c0a2fdb8","url":"tw_stocks/6902.json"},{"revision":"2806c1f1e17af3c2c6df067b99e615b5","url":"tw_stocks/6901.json"},{"revision":"f0ddee722e62ff5aff26a3ffa2b282be","url":"tw_stocks/6890.json"},{"revision":"e0883863b8f2c03a6c5379f1b03f5236","url":"tw_stocks/6887.json"},{"revision":"421097caf48f7fd08859fb7ce0e7c268","url":"tw_stocks/6885.json"},{"revision":"0430f2f6bf5bc1de5cdcee7bdde77beb","url":"tw_stocks/6873.json"},{"revision":"7e19662fc741dcfe69ee54bbd6be15ff","url":"tw_stocks/6869.json"},{"revision":"b881cc04e6e7cebbad12bc28114dda64","url":"tw_stocks/6863.json"},{"revision":"7c0d05a97137bcf191afdbf07c58e7ff","url":"tw_stocks/6862.json"},{"revision":"ba2591207a697c4fcd673f0ce731f0e0","url":"tw_stocks/6861.json"},{"revision":"d6dfa47ad64d398d1d92dd0576c74bf8","url":"tw_stocks/6838.json"},{"revision":"74c9b4d8ae522559ca38b6d80eaaa761","url":"tw_stocks/6835.json"},{"revision":"af84abf1b1a128ac00dc343b3f1da2c5","url":"tw_stocks/6834.json"},{"revision":"c29d4c416a65c84e0073f3d785e88fd2","url":"tw_stocks/6831.json"},{"revision":"88415b05f9b51e41ff96cb8e518236bf","url":"tw_stocks/6830.json"},{"revision":"af3863e275f1f63b31f9eaf46d17a7d6","url":"tw_stocks/6807.json"},{"revision":"c3189317b400d2d20fe4e6f9299146da","url":"tw_stocks/6806.json"},{"revision":"737a4ed4e805ef1dba692e0640d49da8","url":"tw_stocks/6805.json"},{"revision":"8a9d93bc5f79144bc617b6cfa3d2d83d","url":"tw_stocks/6799.json"},{"revision":"8feb9ba0b64d5ea66f07e500f4a7a30d","url":"tw_stocks/6796.json"},{"revision":"9e45180e49d3dc4376c884b2ec08e587","url":"tw_stocks/6794.json"},{"revision":"ad60cdf5b8d2908c16a1b57ff4e4208d","url":"tw_stocks/6792.json"},{"revision":"ca7324bb33ab25c36796816f6c191955","url":"tw_stocks/6790.json"},{"revision":"90fd95693e0e4de69ad5f00f294d9d79","url":"tw_stocks/6789.json"},{"revision":"c80be1074fd02f850d6a9e82e5d9a949","url":"tw_stocks/6782.json"},{"revision":"df30a2c58c4db08d5024b9516697e13e","url":"tw_stocks/6781.json"},{"revision":"5253d8fa752b6da07a7eeb74faa92ef7","url":"tw_stocks/6776.json"},{"revision":"8b07d0fa56857991a22ce0b693fa36c3","url":"tw_stocks/6770.json"},{"revision":"aeb761562ac311378f31c83470c9b666","url":"tw_stocks/6768.json"},{"revision":"dceb1685350a625ced1992547d5475ea","url":"tw_stocks/6757.json"},{"revision":"1258bbafc1eac70649c7781f54301a65","url":"tw_stocks/6756.json"},{"revision":"5c8222f7fe9d8a12600cf86fac68e421","url":"tw_stocks/6754.json"},{"revision":"9a751c8e3fa49da364308dbb64d2b36f","url":"tw_stocks/6753.json"},{"revision":"09031f68f4a187303a5d3462b23b9c9f","url":"tw_stocks/6743.json"},{"revision":"39a98edba1d608b2a14039c4b014062e","url":"tw_stocks/6742.json"},{"revision":"bb31bbde8b816930e291eb0f78bbb431","url":"tw_stocks/6722.json"},{"revision":"0d6ac457f578f27ebd40deae40db318f","url":"tw_stocks/6719.json"},{"revision":"0186c222a55cc18d3eced70c1f7ff722","url":"tw_stocks/6715.json"},{"revision":"01674a37ff5a9a5d751aacfdaba39b6e","url":"tw_stocks/6706.json"},{"revision":"9a8b2af466500b538aaf099052cfb275","url":"tw_stocks/6698.json"},{"revision":"8eaeb712b45373e4dfb4419dad894b87","url":"tw_stocks/6695.json"},{"revision":"bdc729acab2c283ff850adf50dc04bcd","url":"tw_stocks/6691.json"},{"revision":"0c035805fe3659778ca309a9a2370f7e","url":"tw_stocks/6689.json"},{"revision":"c6cd2468a7b7899989181d8fe10d10bf","url":"tw_stocks/6674.json"},{"revision":"48e879953c727320e977663e7592a2c8","url":"tw_stocks/6672.json"},{"revision":"4f84c3ea71145fe643f2acd37479eeea","url":"tw_stocks/6671.json"},{"revision":"ed13424f01a29a6d745460cc1482908c","url":"tw_stocks/6670.json"},{"revision":"b81f367034649b5936c55be25edb9bd1","url":"tw_stocks/6669.json"},{"revision":"ca275958359da6cd8b645b995f123a29","url":"tw_stocks/6668.json"},{"revision":"5ff17ad2cfd8b956bcbdddc83a80f922","url":"tw_stocks/6666.json"},{"revision":"96d67fae0d97fa9024a6c5f9b1bedc54","url":"tw_stocks/6658.json"},{"revision":"fadd4ac5b90aa94e01e37a8c1e281d6c","url":"tw_stocks/6657.json"},{"revision":"0d3c684b2f04d59c52e732898567fd92","url":"tw_stocks/6655.json"},{"revision":"6174815d057fa89107c919c5b87f85e1","url":"tw_stocks/6641.json"},{"revision":"8743b7956cce9b38fa93a9c5dfc70832","url":"tw_stocks/6625.json"},{"revision":"6498aeaad1a2cc56513e87a711578f59","url":"tw_stocks/6614.json"},{"revision":"cf15631d9c3a9a3b0806c072da94a87f","url":"tw_stocks/6606.json"},{"revision":"cd9b1fd0704c456fcd72e315670cd358","url":"tw_stocks/6605.json"},{"revision":"1a67007de76dd00720c98bc48a4b8c5a","url":"tw_stocks/6598.json"},{"revision":"ac60f2233058427194a37ef1b3536755","url":"tw_stocks/6592.json"},{"revision":"655ec4585330e9da43d73121a6c74b61","url":"tw_stocks/6591.json"},{"revision":"79489b4f317e41c94cebd2ce328bba34","url":"tw_stocks/6589.json"},{"revision":"4a3c4e309bcc4a41be5b62c28e4d507a","url":"tw_stocks/6585.json"},{"revision":"8c79f9f81d95145ba34915905f94670b","url":"tw_stocks/6582.json"},{"revision":"ec8c33464af906983a432eec5a079685","url":"tw_stocks/6581.json"},{"revision":"cc470ec20d97da12dc9af33da4875d07","url":"tw_stocks/6579.json"},{"revision":"e31ccc4bbc41490797e836b1c15a75db","url":"tw_stocks/6573.json"},{"revision":"b31ab2ba86a4d552ba01effaa5a40f17","url":"tw_stocks/6558.json"},{"revision":"5becae3de1c362bf1f6f411ca11ae60f","url":"tw_stocks/6552.json"},{"revision":"cc1a359fa00b942da0fccf2e58b0fed7","url":"tw_stocks/6550.json"},{"revision":"bc64183f074128729e3bfd73bdba02c9","url":"tw_stocks/6541.json"},{"revision":"503b9f4417014637fafbac5ef587c4c2","url":"tw_stocks/6533.json"},{"revision":"b3df56199c95f781679f1b7f520bddc4","url":"tw_stocks/6531.json"},{"revision":"3a8ad832bf2eabebc99f374555598407","url":"tw_stocks/6526.json"},{"revision":"0cde9b8845c3af646640082aaf8d5aa0","url":"tw_stocks/6525.json"},{"revision":"de99af0cde631ce55d308b099f1b7daa","url":"tw_stocks/6515.json"},{"revision":"2e82a32d973ffa2238082b473f53d4aa","url":"tw_stocks/6505.json"},{"revision":"508ca929403742ea9043ae992b352130","url":"tw_stocks/6504.json"},{"revision":"830928ee9e8c7805ab65483741db8d5a","url":"tw_stocks/6491.json"},{"revision":"881a5997c1aff91f967d8695c383428b","url":"tw_stocks/6477.json"},{"revision":"de9fd5aa815ede0643174638f614ab84","url":"tw_stocks/6472.json"},{"revision":"1b75fc2462e3d59488445f84a61d97f8","url":"tw_stocks/6464.json"},{"revision":"b09eb6235fb6b1a9aaac14aa4c678f26","url":"tw_stocks/6456.json"},{"revision":"98de4f6ccd540dc638ea2117e2b038ee","url":"tw_stocks/6451.json"},{"revision":"a274614492ae1d9a310df3b2bc3116b7","url":"tw_stocks/6449.json"},{"revision":"7cfc4dc3166edc33f49d80e8e3fa57cf","url":"tw_stocks/6446.json"},{"revision":"0fe2cc5003e2694d660bfe49a0d81054","url":"tw_stocks/6443.json"},{"revision":"85dae44f088823f0116d4410fa74dd20","url":"tw_stocks/6442.json"},{"revision":"2b4fcd339d2d8c50fd806d6700d044ba","url":"tw_stocks/6438.json"},{"revision":"10816088671bf368fc74a26c3098f26c","url":"tw_stocks/6431.json"},{"revision":"c47db715557413f4896e8537bf285823","url":"tw_stocks/6426.json"},{"revision":"83590bc1232a3e258e4c9ca9381e87b1","url":"tw_stocks/6416.json"},{"revision":"09d0bcea7403408f47347ced941bca47","url":"tw_stocks/6415.json"},{"revision":"b51647e377762e9963b21332988603b7","url":"tw_stocks/6414.json"},{"revision":"2e9e35596069365d7e8a786ca08b5196","url":"tw_stocks/6412.json"},{"revision":"0152a0ce8d1c793ae47fc464b32d2799","url":"tw_stocks/6409.json"},{"revision":"860879e96557774b3d27e5ef6c84e9e9","url":"tw_stocks/6405.json"},{"revision":"64028a11be0ec52346ea6c47fcb10c60","url":"tw_stocks/6285.json"},{"revision":"6b27c0dc4cd5f76edd50a644b8d22f3e","url":"tw_stocks/6283.json"},{"revision":"68e82fed5a44282168a48f136ec2c06e","url":"tw_stocks/6282.json"},{"revision":"96ebef84dd932d568ece6ed4769a8c10","url":"tw_stocks/6281.json"},{"revision":"5087178c49c3937c93ffe2b26eddebdc","url":"tw_stocks/6278.json"},{"revision":"910d9d11fe10ea6f74393d8493bd5eba","url":"tw_stocks/6277.json"},{"revision":"b871337cc8f2936b1c680cfa92835dd7","url":"tw_stocks/6272.json"},{"revision":"427392e07da34fdf628ab02168e65ef2","url":"tw_stocks/6271.json"},{"revision":"76af77f588859d7ea0a8f139600748c9","url":"tw_stocks/6269.json"},{"revision":"3f04c788862ba3f853393d68e9e04012","url":"tw_stocks/6257.json"},{"revision":"3846d3be41aeabba9485d54e902f4c65","url":"tw_stocks/6243.json"},{"revision":"6cd823c36b291dcfb1e144c56ba177b8","url":"tw_stocks/6239.json"},{"revision":"7afe7803fd943bbf90615bbf6bb61009","url":"tw_stocks/6235.json"},{"revision":"68393a7418a5546181f931a3a5538c15","url":"tw_stocks/6230.json"},{"revision":"3f11a2fb4ca6c72a83d63308bf7acfea","url":"tw_stocks/6226.json"},{"revision":"4b3bd04441e7d495b1acc0bb098fd839","url":"tw_stocks/6225.json"},{"revision":"d2a900eea9b974275c860ec72315b0a6","url":"tw_stocks/6224.json"},{"revision":"871da0fd94b6043d2faae3008129358f","url":"tw_stocks/6216.json"},{"revision":"d0b5cfcd11ad7766dc3352c55f030e8c","url":"tw_stocks/6215.json"},{"revision":"a5c71c2c67fc1ac1832f30944bea3cf2","url":"tw_stocks/6214.json"},{"revision":"98e3366cf13a95fd5bb8022f95dfb0b4","url":"tw_stocks/6213.json"},{"revision":"b47d45c1a6a2fd57a6ace15db6fce557","url":"tw_stocks/6209.json"},{"revision":"47754755f9a3158219b78aa9e2a1d15f","url":"tw_stocks/6206.json"},{"revision":"dca57428e051a61e1c5b2a0ea83406d4","url":"tw_stocks/6205.json"},{"revision":"f8d80837a7d6f43e7891d2142c2108b8","url":"tw_stocks/6202.json"},{"revision":"163bf17f736fecdf3f8e71115d57bd61","url":"tw_stocks/6201.json"},{"revision":"1af2e88f0bf87a6eced6a72ebd5a0aed","url":"tw_stocks/6197.json"},{"revision":"016449847edfa9e47574fc31295770e0","url":"tw_stocks/6196.json"},{"revision":"fdb7d357c1ad8883bdfd8ccba4ab69f5","url":"tw_stocks/6192.json"},{"revision":"cb2468551329df779b49f51521438ebe","url":"tw_stocks/6191.json"},{"revision":"204efb16346aa72599e2445a095927ec","url":"tw_stocks/6189.json"},{"revision":"c2e9381bfe9850af1511d3775b1aa532","url":"tw_stocks/6184.json"},{"revision":"d320da9d184bb803807dcbe15334684d","url":"tw_stocks/6183.json"},{"revision":"bc0a0ab1f18ffb7c0ba05f83801232d6","url":"tw_stocks/6177.json"},{"revision":"e57776e83df8f4237b99186f35a6bb9b","url":"tw_stocks/6176.json"},{"revision":"b72b897289488a001799ca3ed14cd6e0","url":"tw_stocks/6168.json"},{"revision":"f9bb03df306a723ed329f13045c1518b","url":"tw_stocks/6166.json"},{"revision":"5aafed39f653975a82ae53292dbc52e6","url":"tw_stocks/6165.json"},{"revision":"d3aeec2055cbb1e14cf7fe01ba4b3f38","url":"tw_stocks/6164.json"},{"revision":"757072ba8e322383e33663b2b062b2a9","url":"tw_stocks/6155.json"},{"revision":"44df8be381bdb2118a10c42509c8da8e","url":"tw_stocks/6153.json"},{"revision":"18f2b4fa6f77ed5860ee44be5a8086b7","url":"tw_stocks/6152.json"},{"revision":"d1ce28ea40c69d0c3b66ad19b8e82de1","url":"tw_stocks/6142.json"},{"revision":"3c961a20dadd865c895ee68334d7c64a","url":"tw_stocks/6141.json"},{"revision":"440e7098e3f009f21dd80dd72875f090","url":"tw_stocks/6139.json"},{"revision":"cfe4a37bbde6be01b9cb5f0ff51bceae","url":"tw_stocks/6136.json"},{"revision":"ff02659a4cd6bcf9922c5551427572c0","url":"tw_stocks/6133.json"},{"revision":"a7935b894fc4db6a7abf49e5dab6244a","url":"tw_stocks/6128.json"},{"revision":"0a017c05bd94f6a2da3a1a21f3374960","url":"tw_stocks/6120.json"},{"revision":"75ad4c03a1e4a5f540712e19db7caa23","url":"tw_stocks/6117.json"},{"revision":"a74fb4e13a30adea500ddbd9ec1b9d84","url":"tw_stocks/6116.json"},{"revision":"9ff53d7c2513685ca2a1d084a73306c8","url":"tw_stocks/6115.json"},{"revision":"d0573665c1363c677f7a97a1b18ac8b8","url":"tw_stocks/6112.json"},{"revision":"21c77a4f574d85a319a446d07b4f2123","url":"tw_stocks/6108.json"},{"revision":"45211756d0c9f4611d3640f25c08b43b","url":"tw_stocks/6024.json"},{"revision":"eb1da3a54a5bcd6a90049e678d547aa1","url":"tw_stocks/6005.json"},{"revision":"10245b6f9b9d6e440c4ad8f4abdc4d1e","url":"tw_stocks/5907.json"},{"revision":"6a06f935541d53d898712c8daa580610","url":"tw_stocks/5906.json"},{"revision":"1540a138dc48f43bfcbcc7d857cf82c5","url":"tw_stocks/5880.json"},{"revision":"a4bc838edb8f3bfff1e3f281700c62e7","url":"tw_stocks/5876.json"},{"revision":"1705d79fa6c7202e93a326ed3acd85b7","url":"tw_stocks/5871.json"},{"revision":"60595a607ff4f7efd2b99edfcc9d2e4a","url":"tw_stocks/5706.json"},{"revision":"531ad456a60dd37fbecd9801f9daef86","url":"tw_stocks/5608.json"},{"revision":"d986c0fb04d158895ca9abd44fc20f00","url":"tw_stocks/5607.json"},{"revision":"955b37da952bafc19fa9f517c104e0f9","url":"tw_stocks/5546.json"},{"revision":"aed4544fd3bc5231a35e70ec1fd1468a","url":"tw_stocks/5538.json"},{"revision":"d28afb9a8f5507fa1ac695dc0f0e6eb6","url":"tw_stocks/5534.json"},{"revision":"00575ccf9212428d291ab211f93660b2","url":"tw_stocks/5533.json"},{"revision":"84c1c1fe5105f02601f4e180c9d2d696","url":"tw_stocks/5531.json"},{"revision":"99c5fecc1d27d404948924dec796070e","url":"tw_stocks/5525.json"},{"revision":"15c6b25913d98db74c1985ef034da69b","url":"tw_stocks/5522.json"},{"revision":"5c2fb47c1eef58c895678d97925e946b","url":"tw_stocks/5521.json"},{"revision":"c1bbbfbf968fb25c113a858109d5b92f","url":"tw_stocks/5519.json"},{"revision":"011961d1ff0e65740e7903a719ff5fa6","url":"tw_stocks/5515.json"},{"revision":"18e24a99ff6f48441ee3eedd32faa544","url":"tw_stocks/5484.json"},{"revision":"7d6898c3976e10791cc602d80eddc46b","url":"tw_stocks/5471.json"},{"revision":"2790ab601a914335b1265beb22c21eb8","url":"tw_stocks/5469.json"},{"revision":"4776b030e190ec71d26fd0f9fa382fc0","url":"tw_stocks/5434.json"},{"revision":"2bb7d2f5fadaa28462ec55ad3b7b64b3","url":"tw_stocks/5388.json"},{"revision":"596bbf205598660e543369c897a3940c","url":"tw_stocks/5306.json"},{"revision":"d3d03ae5d791d859eb7cf4c8178911fb","url":"tw_stocks/5292.json"},{"revision":"97d1e340311e8b739a236e6b0896ef25","url":"tw_stocks/5288.json"},{"revision":"a884682252df175300e74c6370136806","url":"tw_stocks/5285.json"},{"revision":"cc4c12e06f9fbf17abd91f024d3eb3b9","url":"tw_stocks/5284.json"},{"revision":"158795906d7c092c1048c59c6262e7b3","url":"tw_stocks/5283.json"},{"revision":"c5cd38c8b78f5df5f4236638827013bd","url":"tw_stocks/5269.json"},{"revision":"df0200e55a87c0f1261072f14bae897e","url":"tw_stocks/5258.json"},{"revision":"90b29b7e58501872a7e456959d1d6299","url":"tw_stocks/5244.json"},{"revision":"f14f0ab4b1f7a87b0eb5e02f12804465","url":"tw_stocks/5243.json"},{"revision":"11da72646d2e163f393c30e6613b82a9","url":"tw_stocks/5234.json"},{"revision":"5fce2d56889fef02b40176d4ea4057ea","url":"tw_stocks/5225.json"},{"revision":"bac7c40d7572f04de638d80ae5bd4aa3","url":"tw_stocks/5222.json"},{"revision":"6458fdea82c54841d649b309f358cff5","url":"tw_stocks/5215.json"},{"revision":"6c092af86bd2d3ae105ef85b2a1a26aa","url":"tw_stocks/5203.json"},{"revision":"a970a421a80c3e0025550977901b04c7","url":"tw_stocks/5007.json"},{"revision":"b9ef096242f5ad36c5bdf9a6bceeabef","url":"tw_stocks/4999.json"},{"revision":"644ed12aed4666c9228dc26313f52ad2","url":"tw_stocks/4994.json"},{"revision":"df2c5826b80f4a3de8fdb117bceff62e","url":"tw_stocks/4989.json"},{"revision":"34320e0b6539d28f277cf5c9a9869a0e","url":"tw_stocks/4977.json"},{"revision":"6d3ebcbb7c6f9486f7844868a43379a1","url":"tw_stocks/4976.json"},{"revision":"479dc3903a5db77aec12250819e5599a","url":"tw_stocks/4968.json"},{"revision":"00dbf32de4204b03ef4a539ee5c974eb","url":"tw_stocks/4967.json"},{"revision":"73b32b11a4751e85551b104cd297f2f1","url":"tw_stocks/4961.json"},{"revision":"03f08e46eaa12544d059e99ad4e65736","url":"tw_stocks/4960.json"},{"revision":"8b607b90a03596101a6b79ebf487aea9","url":"tw_stocks/4958.json"},{"revision":"ad66cf7332191c757378011b78acec32","url":"tw_stocks/4956.json"},{"revision":"64b5dedcdbee969f7cb95b3e31cead52","url":"tw_stocks/4952.json"},{"revision":"528941fa8a0b275c15007dbe5fdafce0","url":"tw_stocks/4949.json"},{"revision":"8ae29699363fa0f5f3d65c7d86daa9f6","url":"tw_stocks/4943.json"},{"revision":"98fb9aa4fc6e49c42bd092b98e57996d","url":"tw_stocks/4942.json"},{"revision":"54175bd49e6002138f00af5ed27839a2","url":"tw_stocks/4938.json"},{"revision":"5277e77666d7f9cb895091b4dcfbbb93","url":"tw_stocks/4935.json"},{"revision":"dde5130a59d9c635c3b98728e4472325","url":"tw_stocks/4934.json"},{"revision":"49d7a8c26cf057de3dcc14672945d56d","url":"tw_stocks/4930.json"},{"revision":"43ab16053e077156d8355922cdbcd2a7","url":"tw_stocks/4927.json"},{"revision":"7c1d0e0535ba6547d43b12b219bd6a26","url":"tw_stocks/4919.json"},{"revision":"13ef33490140ef3ba26f4bca314e104b","url":"tw_stocks/4916.json"},{"revision":"d6dc4b24a44538ce6e36bc2e2bb63860","url":"tw_stocks/4915.json"},{"revision":"22da8b8609ef1cb0060355164da4c6bc","url":"tw_stocks/4912.json"},{"revision":"02492c34d715b9e51519e3fc0d1c1769","url":"tw_stocks/4906.json"},{"revision":"9977b79aeebb3dd8c017337b651e29ba","url":"tw_stocks/4904.json"},{"revision":"f177e2bb9199a97b55090e05df865465","url":"tw_stocks/4807.json"},{"revision":"ece642133052078e61c39e2d4d8d4bda","url":"tw_stocks/4771.json"},{"revision":"a9ca3b5eccc29e0cf61cedd7564b5d6e","url":"tw_stocks/4770.json"},{"revision":"476be67387ac12eb6e1f5424b5930e48","url":"tw_stocks/4766.json"},{"revision":"713f72cb84e97f57746eb9ecb01b6a2e","url":"tw_stocks/4764.json"},{"revision":"a90d0b522bc350b860cf7ecd3e05f35c","url":"tw_stocks/4763.json"},{"revision":"d4338f60851fd0efed5eb888c92ba7d5","url":"tw_stocks/4755.json"},{"revision":"3548b956880bc19bbbbda342990c4a25","url":"tw_stocks/4746.json"},{"revision":"7f0e5632834a0838eb68ca622129c0c2","url":"tw_stocks/4739.json"},{"revision":"a22a0ec9ccb5e71f53c6bbe2125465ad","url":"tw_stocks/4737.json"},{"revision":"35e528cf837b8583ddafbcbcac0c5682","url":"tw_stocks/4736.json"},{"revision":"ed10983b348c151821f5f53660d0fd3c","url":"tw_stocks/4722.json"},{"revision":"73bf7256ebfcb7e01abfa3dc181da9cf","url":"tw_stocks/4720.json"},{"revision":"2a778fdd0389ec4a7b8296d6c7cb94cb","url":"tw_stocks/4588.json"},{"revision":"08a811c22fb8025f4eaaf0ea001cc4a1","url":"tw_stocks/4585.json"},{"revision":"6d14e2514537dc1d377fc14aaff42f32","url":"tw_stocks/4583.json"},{"revision":"5d99b1e935d62dafbc66adcbe9c1ee12","url":"tw_stocks/4581.json"},{"revision":"2a55b4317b7e8ced087f87a2094fc118","url":"tw_stocks/4576.json"},{"revision":"688931f3f9991129aa62f8dc52869265","url":"tw_stocks/4572.json"},{"revision":"15170723a5bf2a136247ff93f63469fa","url":"tw_stocks/4571.json"},{"revision":"e18e75fedc4c4cf123d0f87504653078","url":"tw_stocks/4569.json"},{"revision":"59e3fb02443f8e6f831de87aaa443635","url":"tw_stocks/4566.json"},{"revision":"dfd96c7c520ed36b44c68014881edc4c","url":"tw_stocks/4564.json"},{"revision":"a31eabd8c6590d849d3e98dc8a6e05e1","url":"tw_stocks/4562.json"},{"revision":"5064287744e5244cd7e49c24ee5f92a1","url":"tw_stocks/4560.json"},{"revision":"7c89d26b3a0d0921b2535ca43a615dfc","url":"tw_stocks/4557.json"},{"revision":"03857cacff0bf7dcdc39051fd427956f","url":"tw_stocks/4555.json"},{"revision":"841981d9e5d27cac732e3ef551ab36d8","url":"tw_stocks/4552.json"},{"revision":"a174227bf65768bb10a7dcb289f32eea","url":"tw_stocks/4551.json"},{"revision":"295b5af009d6054e5eb87aec9e41dd8d","url":"tw_stocks/4545.json"},{"revision":"7cd55d1e10de57dcdd8cd4d8aec95f48","url":"tw_stocks/4540.json"},{"revision":"80380e8d26c1399f9a2c781e459497a7","url":"tw_stocks/4536.json"},{"revision":"197f683e2414c534b0b0d181d6e83748","url":"tw_stocks/4532.json"},{"revision":"ddeb68e45fe68833c96e255c3cc734c6","url":"tw_stocks/4526.json"},{"revision":"c7b9db96b52f15b618af22ed03919c0b","url":"tw_stocks/4441.json"},{"revision":"3e7915faad9ddf03e371f702a64601a7","url":"tw_stocks/4440.json"},{"revision":"a277497abd0a69064b93b84c882d1b5d","url":"tw_stocks/4439.json"},{"revision":"3ceb74495cd86e8e3d1d62f85e194152","url":"tw_stocks/4438.json"},{"revision":"30b75e2a789915bc3f7648022c31ae59","url":"tw_stocks/4426.json"},{"revision":"e92d094c4c1c77757db6136af86dd4b8","url":"tw_stocks/4414.json"},{"revision":"1ea13ac6ee60b5d62ddbb7da48b2b62b","url":"tw_stocks/4306.json"},{"revision":"f009bacf27ebac7877f437bc1ceff91e","url":"tw_stocks/4190.json"},{"revision":"5c2f2110dd6cfc7c42dcb6daf6c7ce1e","url":"tw_stocks/4164.json"},{"revision":"83783b671658d45020bb929363e091f9","url":"tw_stocks/4155.json"},{"revision":"16c6cce3baf4c95d2289db48f1e3e8e7","url":"tw_stocks/4148.json"},{"revision":"5b57c444675484704e1b4442c62b3f10","url":"tw_stocks/4142.json"},{"revision":"c67eee5b16c17a78ba7a413515b1ffc2","url":"tw_stocks/4137.json"},{"revision":"8a748d07c2dd465a94a667af3c2b29f4","url":"tw_stocks/4133.json"},{"revision":"375a70c2640b0f722ff8af6a894d4ae8","url":"tw_stocks/4119.json"},{"revision":"f517b575f20a0a39b29ec7564e0f0dcc","url":"tw_stocks/4108.json"},{"revision":"af88a1389b0f7185a9d91e23eee53988","url":"tw_stocks/4106.json"},{"revision":"6c31e14d37d2802156fa70780b8d987a","url":"tw_stocks/4104.json"},{"revision":"004f9e091c631621bdf0f3bd56079f90","url":"tw_stocks/3717.json"},{"revision":"69e9489da86de734d879e3cd50967cda","url":"tw_stocks/3716.json"},{"revision":"2a1a185c8dd53d023e27a8a049c0c074","url":"tw_stocks/3715.json"},{"revision":"99fb43e7746521925aa1aa3fdbbecd15","url":"tw_stocks/3714.json"},{"revision":"cd9ceb2fe10ba4130631758036eb0f6f","url":"tw_stocks/3712.json"},{"revision":"53b31d79f3b3db6bae19146a5d00bcc1","url":"tw_stocks/3711.json"},{"revision":"e886d002f3069b4aaf2758f702064722","url":"tw_stocks/3708.json"},{"revision":"4961720ed0b75da5d31b2e1252f7b6c8","url":"tw_stocks/3706.json"},{"revision":"3fa359c0dcc029b5ce4e82b5932623cd","url":"tw_stocks/3705.json"},{"revision":"77e2eb65fab8ea7dcb59d1515f146736","url":"tw_stocks/3704.json"},{"revision":"b236d9b910e356e5cb878478693a5ced","url":"tw_stocks/3703.json"},{"revision":"9e82ade3c2a7a126ca4f4c8c523267c0","url":"tw_stocks/3702.json"},{"revision":"e4f391d24002132a6d72fba8dfcc02d5","url":"tw_stocks/3701.json"},{"revision":"e0ebaff9029bff8e98746e91192e8457","url":"tw_stocks/3694.json"},{"revision":"c44cf12922e1b8a3ea895121505b125e","url":"tw_stocks/3686.json"},{"revision":"5eb21f2cd3f96a02ca77b1f2a35fe21f","url":"tw_stocks/3679.json"},{"revision":"bc6dfb5724ecec447e674e231f585afc","url":"tw_stocks/3673.json"},{"revision":"6118970f803ca0d0066a80421a76c95a","url":"tw_stocks/3669.json"},{"revision":"83ce66d2a56b115a9250527d131cab90","url":"tw_stocks/3665.json"},{"revision":"c2b667a6207fccde04a0a704367551ed","url":"tw_stocks/3661.json"},{"revision":"9c2674b91ffa65ef75e16360073375c6","url":"tw_stocks/3653.json"},{"revision":"14a3c16ef8f7a93a585a16d53a1ad607","url":"tw_stocks/3652.json"},{"revision":"ac6d8d630629236f7580ac551c4804f5","url":"tw_stocks/3645.json"},{"revision":"0e06f5c56255218401d86757877d75e5","url":"tw_stocks/3622.json"},{"revision":"81f2c51c88ae984da1ec7e6dd2ff7737","url":"tw_stocks/3617.json"},{"revision":"ed0fec0df7103a903678aaf7051096b5","url":"tw_stocks/3607.json"},{"revision":"4cf126d1aa46df86278ff16316d6886a","url":"tw_stocks/3605.json"},{"revision":"f88300a2b6a6e1e45548cd6aa568dd22","url":"tw_stocks/3596.json"},{"revision":"b32bd3d6bc357f9e0adca64b37614240","url":"tw_stocks/3593.json"},{"revision":"ba23e7959add14789d93ea77a15f9293","url":"tw_stocks/3592.json"},{"revision":"69e90074d4de88d87e24f6082180d3d8","url":"tw_stocks/3591.json"},{"revision":"13f25bf5c0d9c7af1ccf98b35d1a91ab","url":"tw_stocks/3588.json"},{"revision":"62c5b846ad87cc0adeddc2ca4b975822","url":"tw_stocks/3583.json"},{"revision":"23fd80230edcc7f8f7dea5a34caa647b","url":"tw_stocks/3576.json"},{"revision":"4c3cc297f0a7339cd5d85f1ad7548a61","url":"tw_stocks/3563.json"},{"revision":"67f314b3b2fedd13bd2a0b757cd50ae9","url":"tw_stocks/3557.json"},{"revision":"ac9f7271b9ffe31d1bf5c1b29eff221d","url":"tw_stocks/3550.json"},{"revision":"cb9d245fec1c434465c0665f98b8fd46","url":"tw_stocks/3545.json"},{"revision":"1f83cf3140cdfb8079b425d9ad23ada6","url":"tw_stocks/3543.json"},{"revision":"4d7c753eb375e751cee523e2a27fa988","url":"tw_stocks/3535.json"},{"revision":"8997a907832cccc854b26ce9494397a6","url":"tw_stocks/3533.json"},{"revision":"d2db9d5b2150198c6ef1d151a04dcbb6","url":"tw_stocks/3532.json"},{"revision":"01fb763b0e5c0e880e0cdadef6ea3ec2","url":"tw_stocks/3530.json"},{"revision":"3bd78fe2032916bf1d2ce050fb01c568","url":"tw_stocks/3528.json"},{"revision":"79742d38efda256ee967967b80168155","url":"tw_stocks/3518.json"},{"revision":"43bb49c85083f744b14c7280103ebcff","url":"tw_stocks/3515.json"},{"revision":"b99db663d662e770eaa18c725fe7552d","url":"tw_stocks/3504.json"},{"revision":"d1f7ba519a4a9b6bb18524d873e87fea","url":"tw_stocks/3501.json"},{"revision":"803b761354a55b86ec09cf4319573142","url":"tw_stocks/3494.json"},{"revision":"9f7f261e6d607f3d133ca183f3caec77","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"fbcfa80160701a849067c066eef7a2b1","url":"tw_stocks/3450.json"},{"revision":"3afed9d18e64bf8fdda90ecb7f5cda69","url":"tw_stocks/3447.json"},{"revision":"5ae17850d1a15f360442f88adc937f0e","url":"tw_stocks/3443.json"},{"revision":"513cc3c2e970d94a4dbb13b7a45e20a3","url":"tw_stocks/3437.json"},{"revision":"f0b68debbb07dfa1543d2c9367390e9f","url":"tw_stocks/3432.json"},{"revision":"9fabbad3eea421e6753942c8b4fa647c","url":"tw_stocks/3419.json"},{"revision":"1c0efdf23195c248635a336c9a17a1de","url":"tw_stocks/3416.json"},{"revision":"53c09db76390f7f3fcda84a647be4081","url":"tw_stocks/3413.json"},{"revision":"9055186ad384cc061a1d505c51a2d53b","url":"tw_stocks/3406.json"},{"revision":"3f3cca66493b593278b79e5b44e3b6a6","url":"tw_stocks/3380.json"},{"revision":"f4dafbda9a847ca628c5e1f7bdff0512","url":"tw_stocks/3376.json"},{"revision":"b17b483ba309fef07c71dc57ff7bc2fd","url":"tw_stocks/3356.json"},{"revision":"e9beb30045b41578bcc5d2fb3b2ce5a7","url":"tw_stocks/3346.json"},{"revision":"2eb15d794c9c78ac50d391f4b276863c","url":"tw_stocks/3338.json"},{"revision":"d2e45d131ec2db930d1b5bd0bb974f2e","url":"tw_stocks/3321.json"},{"revision":"f6f9bd582342384365a0ac38a1955a35","url":"tw_stocks/3312.json"},{"revision":"78cdb47c7b62b95a9a43b9f3d9915319","url":"tw_stocks/3311.json"},{"revision":"f33a33ec39039bab5d389df86429ffbb","url":"tw_stocks/3308.json"},{"revision":"bf2c1fbfdd1c6cb49cf0b752d1576c0b","url":"tw_stocks/3305.json"},{"revision":"4540ee1137932372acda8ab876e5e1d6","url":"tw_stocks/3296.json"},{"revision":"f9533ad067470ad087c63439755ec695","url":"tw_stocks/3266.json"},{"revision":"68ef45f64571d3fe7c8f6f97049f3fc8","url":"tw_stocks/3257.json"},{"revision":"e371ba52ac58f23838ac860f82927593","url":"tw_stocks/3231.json"},{"revision":"a1213e5c517553a31f2eb79db8d40164","url":"tw_stocks/3229.json"},{"revision":"0885fa53ceaa8b1931377bc3c3838b25","url":"tw_stocks/3209.json"},{"revision":"f6467ee8b79951d70baa3f24fe1585b5","url":"tw_stocks/3189.json"},{"revision":"40eeb8fcd713fda46e9a74071148d4fc","url":"tw_stocks/3168.json"},{"revision":"b0867150f721ef813908de4977d13590","url":"tw_stocks/3167.json"},{"revision":"f06e65d20caaf66389abf96aae1d8d74","url":"tw_stocks/3164.json"},{"revision":"e3ec4bb9a2823da64eaf721be1c9daa6","url":"tw_stocks/3149.json"},{"revision":"008507e02500e8ef5f54c1ca1741060e","url":"tw_stocks/3138.json"},{"revision":"2b94aa4f39cf74b9ae86aa7012be2e05","url":"tw_stocks/3135.json"},{"revision":"9b7dc0de51e0d6f72a54ffe3812685ef","url":"tw_stocks/3130.json"},{"revision":"63065eadd9b88bc58d0d7406e6a7d629","url":"tw_stocks/3094.json"},{"revision":"54a05599c0d53d2eeb1bc075e1e4029b","url":"tw_stocks/3092.json"},{"revision":"e6802d404744b7918fb0f53b0f4a469a","url":"tw_stocks/3090.json"},{"revision":"f921ede3e9f8e08b3161a917f90bb5b2","url":"tw_stocks/3062.json"},{"revision":"c51092da16e46458bc9faab0884b4828","url":"tw_stocks/3060.json"},{"revision":"e1beb5dc9eb11351c03503432c323c20","url":"tw_stocks/3059.json"},{"revision":"a9b825f10d6869445a6818cebd874fd1","url":"tw_stocks/3058.json"},{"revision":"df9c5253ff6a661bb8628267efb3271b","url":"tw_stocks/3057.json"},{"revision":"fd93f04cac9423a21a2cde7d5c98bba7","url":"tw_stocks/3056.json"},{"revision":"0a3c1456d02eaab00f5648b522916251","url":"tw_stocks/3055.json"},{"revision":"4123014036e513e16561ce7cc81d8aea","url":"tw_stocks/3054.json"},{"revision":"a76d94aeb7cc534d8fa885627bb861c8","url":"tw_stocks/3052.json"},{"revision":"e9c5e9b420d96f3e216fbeccfc96d5c7","url":"tw_stocks/3051.json"},{"revision":"da6f7d6508874ea3ed32183c2dfcd0a1","url":"tw_stocks/3050.json"},{"revision":"c560619a3d61e49b0a22d00f7ef0b45c","url":"tw_stocks/3049.json"},{"revision":"539b9d4aea009299bda3e0e805f48e4e","url":"tw_stocks/3048.json"},{"revision":"00e53273681650aa48309faacd5c7527","url":"tw_stocks/3047.json"},{"revision":"a9c32d6e80065624077c3176dd660ef4","url":"tw_stocks/3046.json"},{"revision":"7faea9777edac34d16c07a67517a88cc","url":"tw_stocks/3045.json"},{"revision":"e5e41868593ca1fddf1b46da9e14dc0d","url":"tw_stocks/3044.json"},{"revision":"c05075d3083a2173eda490a26a522e92","url":"tw_stocks/3043.json"},{"revision":"8f44877ed1276e3807772b382f80e10a","url":"tw_stocks/3042.json"},{"revision":"42e0ede8381a2e2cedd9e4e07d4b0921","url":"tw_stocks/3041.json"},{"revision":"f775361b2f83c3d88e178b5129c464c0","url":"tw_stocks/3040.json"},{"revision":"7fd1e6169b4a9dd5cacde795408d5c26","url":"tw_stocks/3038.json"},{"revision":"43630e887a584d63533e4b4385c3f9d3","url":"tw_stocks/3037.json"},{"revision":"4ab576b44472d36c13a54815d87a705f","url":"tw_stocks/3036.json"},{"revision":"bd28c1f087bc3487769f435c41cdb322","url":"tw_stocks/3035.json"},{"revision":"e3b003966affdcd343e2be96fef2dedb","url":"tw_stocks/3034.json"},{"revision":"051203a899b7154688c31c3c1524cb64","url":"tw_stocks/3033.json"},{"revision":"3520bab7d29955c4a505307ffac0242d","url":"tw_stocks/3032.json"},{"revision":"67b1e32cae5323d4485eec71abd202ba","url":"tw_stocks/3031.json"},{"revision":"63ddfa8e32fadc335c8a55b8f00e4bb1","url":"tw_stocks/3030.json"},{"revision":"2a5dc1d59ee5af17c4c6ef6b4477950f","url":"tw_stocks/3029.json"},{"revision":"2109d5b811cb80480dadaac5363cdebf","url":"tw_stocks/3028.json"},{"revision":"4292c2c110ed61cf78fd30b2bf32dbca","url":"tw_stocks/3027.json"},{"revision":"a9e010167089be8272ca6a95e325b0b4","url":"tw_stocks/3026.json"},{"revision":"b888e1c8d00f5c3c3987a2fe51d54dfb","url":"tw_stocks/3025.json"},{"revision":"5bec232b2b83bf20a7433b3da091285e","url":"tw_stocks/3024.json"},{"revision":"8a1884dcf9b96ced17688cbcc3d46174","url":"tw_stocks/3023.json"},{"revision":"e22cfce690d262edc44377fd53d680d0","url":"tw_stocks/3022.json"},{"revision":"ca086119ec5fa447799452216f6d7739","url":"tw_stocks/3021.json"},{"revision":"58a9c0297588e6d5323873abd2d72655","url":"tw_stocks/3019.json"},{"revision":"0671af0cc80628e772114e608d8124b0","url":"tw_stocks/3018.json"},{"revision":"59fa38dc770abed620f1ea9a7f660035","url":"tw_stocks/3017.json"},{"revision":"3742b9342f25f8814ca4bdfd741dfe03","url":"tw_stocks/3016.json"},{"revision":"3dce5663706c6a1735c54787364102a9","url":"tw_stocks/3015.json"},{"revision":"aaa8ce9eb6725dc28075ac4dd0d25c98","url":"tw_stocks/3014.json"},{"revision":"56f1d4362491ea1edb2cff8bdbf88cdb","url":"tw_stocks/3013.json"},{"revision":"963e6b554b776278f04b48328fad3c72","url":"tw_stocks/3011.json"},{"revision":"af3b8ed1e8415b774b1ca00dabf156ef","url":"tw_stocks/3010.json"},{"revision":"96cef78a3716ae458882c6b01579c91c","url":"tw_stocks/3008.json"},{"revision":"7822c1c1b46fdc6a95e646151aeee91e","url":"tw_stocks/3006.json"},{"revision":"a8d3d0e8375f0fb5692b54e9ebd4bb8a","url":"tw_stocks/3005.json"},{"revision":"44b232c3f50b1a79ed8bb2fec6832d0a","url":"tw_stocks/3004.json"},{"revision":"6ca876cf20e3284e7a68849506f3e010","url":"tw_stocks/3003.json"},{"revision":"dbce1711780d94cb19938062a6595f10","url":"tw_stocks/3002.json"},{"revision":"52e971fa14b556f040675ecb9c845da7","url":"tw_stocks/2945.json"},{"revision":"815b8fe766eb7f68ab2b447d9738d9e5","url":"tw_stocks/2939.json"},{"revision":"382a07b0505fc252e4c9e4e78bd12bcf","url":"tw_stocks/2929.json"},{"revision":"bd38c6470ac14b2757cf754a8935dc4e","url":"tw_stocks/2923.json"},{"revision":"60a581a236e1715e4b46ff68501a2216","url":"tw_stocks/2915.json"},{"revision":"b59f512d8e94a16e7318773b9655df43","url":"tw_stocks/2913.json"},{"revision":"3b7ad0b4cdafcc2c624b53ceb9687eff","url":"tw_stocks/2912.json"},{"revision":"271843bd75bb8a018a5fbc85d33fe581","url":"tw_stocks/2911.json"},{"revision":"737a4ea9cc6aab2d7913a85a70a27493","url":"tw_stocks/2910.json"},{"revision":"f8705245a0295a350a71cbc8c7fc65c3","url":"tw_stocks/2908.json"},{"revision":"ee9ec0c6ce697d3ac6eece982795865a","url":"tw_stocks/2906.json"},{"revision":"37f2ca632db87ddd98122e192dfdd3f1","url":"tw_stocks/2905.json"},{"revision":"26390b65e79db30c7958b3049267ab64","url":"tw_stocks/2904.json"},{"revision":"2ab08757347d2b1fde9b45d933c550e6","url":"tw_stocks/2903.json"},{"revision":"63f3c192f233a5aa2276d08cb4f74101","url":"tw_stocks/2901.json"},{"revision":"7a6081b6c44ba7e768478f195dc5cf4a","url":"tw_stocks/2897.json"},{"revision":"6566a2a440a20dbfc05dd4b997f0e6cc","url":"tw_stocks/2892.json"},{"revision":"ace86804f6f5cdde1d12428d5c1a1bac","url":"tw_stocks/2891.json"},{"revision":"eec956dc092b2b2b4874b1ee19c39f42","url":"tw_stocks/2890.json"},{"revision":"e77df4885cba6fbad59bee5210608c20","url":"tw_stocks/2889.json"},{"revision":"870cf2351db8ceb369038beea614de2c","url":"tw_stocks/2887.json"},{"revision":"ac01f9a55d84f86e60de9e05cc567d15","url":"tw_stocks/2886.json"},{"revision":"e9fe86a2f4138a1160e87e399f14c470","url":"tw_stocks/2885.json"},{"revision":"461b89697ba3897f7c07e9405cda2702","url":"tw_stocks/2884.json"},{"revision":"7863978df1255207f5d43fd167dcb403","url":"tw_stocks/2883.json"},{"revision":"b97eac5eef5cf703bf2a26ff29784193","url":"tw_stocks/2882.json"},{"revision":"7800b594b1ef3a8f61fb48a140338693","url":"tw_stocks/2881.json"},{"revision":"5c9222e73101d494f4285370d25d33f0","url":"tw_stocks/2880.json"},{"revision":"2eccf77bd8a0eda61c2dd7c09833b293","url":"tw_stocks/2867.json"},{"revision":"1bf34322710c727c9d8a278cff078bdf","url":"tw_stocks/2855.json"},{"revision":"e4b870bfecf2ebed7239be20fca11817","url":"tw_stocks/2852.json"},{"revision":"6749119725f57ef27d5be3bb1fd06bc8","url":"tw_stocks/2851.json"},{"revision":"9a1097286021455a5c150d3e02944e31","url":"tw_stocks/2850.json"},{"revision":"5702c3b5562a0a4a4340f007df2d1b89","url":"tw_stocks/2849.json"},{"revision":"0149024111d4b212b2baf20982bae12d","url":"tw_stocks/2845.json"},{"revision":"bdad87e098081f1f3d6dcb2f53a030c0","url":"tw_stocks/2838.json"},{"revision":"d12b30d6305ffb080dd61a1cb49eeb7a","url":"tw_stocks/2836.json"},{"revision":"0b7aa5939e4befa8f5682fb935bb6a6a","url":"tw_stocks/2834.json"},{"revision":"3a2970c3e1605908974ce3b8c4ed23e8","url":"tw_stocks/2832.json"},{"revision":"9f4aad77f6a23c1e7d9e09a6b038308b","url":"tw_stocks/2820.json"},{"revision":"43ef57362af260d6221952f76c6f7107","url":"tw_stocks/2816.json"},{"revision":"f26454695a30853eea12d9157c43d1f6","url":"tw_stocks/2812.json"},{"revision":"25cc3a276a6857b16ea5d711d226976c","url":"tw_stocks/2801.json"},{"revision":"4e5c237b0a730650c8ff13a06371e92b","url":"tw_stocks/2762.json"},{"revision":"d3c5503c0f89b1005c9dadfe1ac8fbee","url":"tw_stocks/2753.json"},{"revision":"7379867fc348424c9816fb76209bd2f4","url":"tw_stocks/2748.json"},{"revision":"d7ab25756d0b7dfe5dbdd24f55f510b0","url":"tw_stocks/2739.json"},{"revision":"b2d21bd372071f3717ba1290ebc48dca","url":"tw_stocks/2731.json"},{"revision":"c63a817585a94c2e74a8910d37988ed0","url":"tw_stocks/2727.json"},{"revision":"383a09ba3ab63686dddff205f38a3ac8","url":"tw_stocks/2723.json"},{"revision":"6c32e2a7cc95befbc68a2e453768e4ed","url":"tw_stocks/2722.json"},{"revision":"665cb89b8fcdcd31a89b0a35001c5fc3","url":"tw_stocks/2712.json"},{"revision":"d163c4c6636c4976bd2d367547f6c9ea","url":"tw_stocks/2707.json"},{"revision":"94cd0e48363d9cd8eee5fd87e76eefb0","url":"tw_stocks/2706.json"},{"revision":"3b145008328d8ac5aac8256b9f005b2c","url":"tw_stocks/2705.json"},{"revision":"16f419f18044ba669ac2217785570ccc","url":"tw_stocks/2704.json"},{"revision":"a2221613dde2df9d02003168c6a14847","url":"tw_stocks/2702.json"},{"revision":"12c7c384b78c17f1b3405df661b7227a","url":"tw_stocks/2701.json"},{"revision":"f41487c462fc246002091065726cd636","url":"tw_stocks/2646.json"},{"revision":"5f2d858f07bf552dfd44add3b2deb34c","url":"tw_stocks/2645.json"},{"revision":"8275d12f9cbe4b8d50a7eed9079fa919","url":"tw_stocks/2642.json"},{"revision":"5acbe8953bbd270b38d98c1cefd7ad35","url":"tw_stocks/2637.json"},{"revision":"665faed29dea14ed1d0eb0cb38951b90","url":"tw_stocks/2636.json"},{"revision":"9b72f3d446679e6d9aff5c8e353c6eaa","url":"tw_stocks/2634.json"},{"revision":"9be63e61f014bf83a33d946095739ade","url":"tw_stocks/2633.json"},{"revision":"d27f6ba412216d24b7e8698299c9f5bc","url":"tw_stocks/2630.json"},{"revision":"47ea04b160fccc7820552ecc14bf374d","url":"tw_stocks/2618.json"},{"revision":"a97df94393dfeb35c02414e120584b98","url":"tw_stocks/2617.json"},{"revision":"b2a1bab52a3743c45c0854e578ffcc85","url":"tw_stocks/2616.json"},{"revision":"cdbd81f1059765a5906574af6bc1e492","url":"tw_stocks/2615.json"},{"revision":"42fc60bf12107d703d20870aab0f085b","url":"tw_stocks/2614.json"},{"revision":"33979f451f7255603008f6f0cfd1b71c","url":"tw_stocks/2613.json"},{"revision":"abbe11c3118c8e24fe0ff56582897df4","url":"tw_stocks/2612.json"},{"revision":"242d3b9c4d5c6e56db674b760ed447d9","url":"tw_stocks/2611.json"},{"revision":"a7b4629b3991410bbc401def1398df7b","url":"tw_stocks/2610.json"},{"revision":"a3183841bb648f1efd3748a39b372387","url":"tw_stocks/2609.json"},{"revision":"0145e7300e73aa21ef154c1eb589e6fb","url":"tw_stocks/2608.json"},{"revision":"ac09adb3d72cb1b56cced56dc79b98ee","url":"tw_stocks/2607.json"},{"revision":"8c5b766612b703df53a3e4daea153f1f","url":"tw_stocks/2606.json"},{"revision":"600d77227d321b167361f09c84102cf0","url":"tw_stocks/2605.json"},{"revision":"123c3ba7110d4c808406e06fe0fa6d79","url":"tw_stocks/2603.json"},{"revision":"cdab6b7a1844f47c5da7c07254e9d200","url":"tw_stocks/2601.json"},{"revision":"b4d383a8dc49a4c58d672216f1fcbc2d","url":"tw_stocks/2597.json"},{"revision":"c2f7184c0009025ac8482429c0c3bf5e","url":"tw_stocks/2548.json"},{"revision":"9532aba5a07469a68374a5a608402434","url":"tw_stocks/2547.json"},{"revision":"33ecdbf578ea5b7baca00d4bea9b22be","url":"tw_stocks/2546.json"},{"revision":"0d646476335612a6e0e6494e437cfad0","url":"tw_stocks/2545.json"},{"revision":"0037f6e2d5004d85466d6aa21dd6260d","url":"tw_stocks/2543.json"},{"revision":"23b16e2de0f989fc58deb462d7100ab2","url":"tw_stocks/2542.json"},{"revision":"e9e498ae2a6a82d60b97fa1490d1cbae","url":"tw_stocks/2540.json"},{"revision":"d4345f9c0cba1c0d8b02497eb5985cfd","url":"tw_stocks/2539.json"},{"revision":"111a72d054514557bac4d8b585626140","url":"tw_stocks/2538.json"},{"revision":"898aefe1489f46939ccb5a5e6b855cd6","url":"tw_stocks/2537.json"},{"revision":"83ee1ad7a3d4504909715d828136dfcc","url":"tw_stocks/2536.json"},{"revision":"221a8628be08f27ab2893e5a89595cce","url":"tw_stocks/2535.json"},{"revision":"0d91afb683e763e51c4e2d9417533481","url":"tw_stocks/2534.json"},{"revision":"3d592e312ec8c9abaf074d9bfb53332d","url":"tw_stocks/2530.json"},{"revision":"e705a2076a522991dfc86194a526038b","url":"tw_stocks/2528.json"},{"revision":"14b886d0459a3e73910ba39c90337aae","url":"tw_stocks/2527.json"},{"revision":"6d3adb2ee5d81a343e30ec409a51164f","url":"tw_stocks/2524.json"},{"revision":"33946429921b11506103cd58269b7152","url":"tw_stocks/2520.json"},{"revision":"d120a371312d235c4247dc453217436d","url":"tw_stocks/2516.json"},{"revision":"eaff6ecd5c4874175cf5f219e96a11b4","url":"tw_stocks/2515.json"},{"revision":"1c66fd096e365c222ee04569ba875d0f","url":"tw_stocks/2514.json"},{"revision":"ca49d750cc49f5212120e954379511e2","url":"tw_stocks/2511.json"},{"revision":"cafa56fccdf7efb77d40935d90baba92","url":"tw_stocks/2509.json"},{"revision":"bf35c44f2b149e4089798e93056c408a","url":"tw_stocks/2506.json"},{"revision":"c9ada316cc132445419843fdd301e6c8","url":"tw_stocks/2505.json"},{"revision":"94b9c2d622c2b082ac7e4c2840027a54","url":"tw_stocks/2504.json"},{"revision":"47dc9498ee4f81c3c58a0952bf7015b9","url":"tw_stocks/2501.json"},{"revision":"8663980e6086f170bae8650fc545ba6f","url":"tw_stocks/2498.json"},{"revision":"b8d6b6924b05e8819695987daf3e56f8","url":"tw_stocks/2497.json"},{"revision":"8759860f5770d9f761b21e7e5a30a134","url":"tw_stocks/2496.json"},{"revision":"d74310c2de7b1cdb4f208f8c318dd939","url":"tw_stocks/2495.json"},{"revision":"2fba82dc588c4b1b337d6924ad8d1d2c","url":"tw_stocks/2493.json"},{"revision":"eac804301d3d2271b01e3e5dca49c0b4","url":"tw_stocks/2492.json"},{"revision":"35240b29c3c87d1d6eca8fcd019f4e63","url":"tw_stocks/2491.json"},{"revision":"c0c5dd80debcd0c50abbd7a646858e48","url":"tw_stocks/2489.json"},{"revision":"e88d0ff1419773b8d9fb8f050823ec7a","url":"tw_stocks/2488.json"},{"revision":"ec0e9944ee7069d9f300c281281c8c5c","url":"tw_stocks/2486.json"},{"revision":"946cc3048e7af729e2d522cc65484e29","url":"tw_stocks/2485.json"},{"revision":"6c3786b81139f0ef651796a4760de498","url":"tw_stocks/2484.json"},{"revision":"132d95660c1bb51539c70324dfe8cf39","url":"tw_stocks/2483.json"},{"revision":"db4cf801fdc2357f0000fd658ba40faa","url":"tw_stocks/2482.json"},{"revision":"d7463a509f0c96f95c7a02c3aaca2c5e","url":"tw_stocks/2481.json"},{"revision":"dce2e44e2bcc5b5029aafdd512512931","url":"tw_stocks/2480.json"},{"revision":"41cafa9185ef06ee35def7aa086ad36b","url":"tw_stocks/2478.json"},{"revision":"cbb6bbe3c4b2480196f2019a1d9f7738","url":"tw_stocks/2477.json"},{"revision":"df2239ce9c82408ff3a71e75d83d9971","url":"tw_stocks/2476.json"},{"revision":"9c05af724c809fa1da1be5aa53d0904b","url":"tw_stocks/2474.json"},{"revision":"733c39cc49cbb8276e9a5e80146c69c2","url":"tw_stocks/2472.json"},{"revision":"e0497068bec2ece35f53ea71ebef933f","url":"tw_stocks/2471.json"},{"revision":"59049587e6ff71d286f89bf6410747c9","url":"tw_stocks/2468.json"},{"revision":"68cde72bef32bf3bed9978731bbd8433","url":"tw_stocks/2467.json"},{"revision":"fceb31347dbf1f5794ed337b73946f65","url":"tw_stocks/2466.json"},{"revision":"15c85430b12246a4c92aa1cea8a85b7d","url":"tw_stocks/2465.json"},{"revision":"d11efe7e24b483863e6026ad006c35c8","url":"tw_stocks/2464.json"},{"revision":"36d0db9b524de6f4520f76db0953eac6","url":"tw_stocks/2462.json"},{"revision":"ce71dd217ac4ef6a1bec16cbc3684b94","url":"tw_stocks/2461.json"},{"revision":"a27554187c79a951fef37c3a198e0364","url":"tw_stocks/2460.json"},{"revision":"d82a9044bdf6a312e83ab92ad05de988","url":"tw_stocks/2459.json"},{"revision":"2f525c5da3bb0a9632c44187c8c10641","url":"tw_stocks/2458.json"},{"revision":"cc8d99df9d00f6011d9fbaf7b7f52a10","url":"tw_stocks/2457.json"},{"revision":"8ec89c9f32541d6b4f35b5090d61197c","url":"tw_stocks/2455.json"},{"revision":"404bc2accd4d4baec37ecfa05b4816d4","url":"tw_stocks/2454.json"},{"revision":"e5168cb3291fa044f7a86c212c2a74ec","url":"tw_stocks/2453.json"},{"revision":"b38b366760856049edbe94ae1dfb62d6","url":"tw_stocks/2451.json"},{"revision":"01975957407d88cb1a78638a0e27e973","url":"tw_stocks/2450.json"},{"revision":"01f574732a125df95f5698d367c441e8","url":"tw_stocks/2449.json"},{"revision":"ed6608a37979962880105965d27d42f1","url":"tw_stocks/2444.json"},{"revision":"6abfb461bbe1cd77580e86746065e3fa","url":"tw_stocks/2442.json"},{"revision":"857f72fe8bed7e084ded709102b95887","url":"tw_stocks/2441.json"},{"revision":"487afc8c3420c393c41d1b7e95c3143d","url":"tw_stocks/2440.json"},{"revision":"35e4f0fd121627bf8892e58d3be4e357","url":"tw_stocks/2439.json"},{"revision":"d3f53fbd87b535d4bd46b02caf4ad53e","url":"tw_stocks/2438.json"},{"revision":"bfa5216717c7d7aa06752fc0b482a78b","url":"tw_stocks/2436.json"},{"revision":"af7c9874bf6b2677a387501e4d427efa","url":"tw_stocks/2434.json"},{"revision":"41931f13f4ef07e0dc006d13f67e2fe5","url":"tw_stocks/2433.json"},{"revision":"edfc677bc6d9c46bc82d01f95f5b1f84","url":"tw_stocks/2431.json"},{"revision":"2950bd4b2aa322ce353d22b0e2830594","url":"tw_stocks/2430.json"},{"revision":"b8089a7a90145bf025a499dbce248996","url":"tw_stocks/2429.json"},{"revision":"b465f0d3ea661e85c67aa1959f1edcc2","url":"tw_stocks/2428.json"},{"revision":"b71fd1c1ee4f31df827faadfb66d2464","url":"tw_stocks/2427.json"},{"revision":"bca408b822ea6e967a3fa5099a8238f1","url":"tw_stocks/2426.json"},{"revision":"ca799ecf1440f3e45de86b3f1190dafa","url":"tw_stocks/2425.json"},{"revision":"1a66037236321bd39c6e23a33e869814","url":"tw_stocks/2424.json"},{"revision":"bd2cd938513e1d909d65f211df123083","url":"tw_stocks/2423.json"},{"revision":"f1392997913a0b88818bf08929b08cbe","url":"tw_stocks/2421.json"},{"revision":"41c3e2831c7d67d955103cf69dabc79d","url":"tw_stocks/2420.json"},{"revision":"ff056a07389a2535329057589d34f326","url":"tw_stocks/2419.json"},{"revision":"5d3186ad3059f26ec346a1b7872e32e4","url":"tw_stocks/2417.json"},{"revision":"f464f2bb2e4d3bcbfa0ccaa3a856e844","url":"tw_stocks/2415.json"},{"revision":"c7246ceebe2167a49b9301d61ebd3f37","url":"tw_stocks/2414.json"},{"revision":"5f05a3eca0f8b4f1d7bb3eaa3b9ba897","url":"tw_stocks/2413.json"},{"revision":"ada997bcdeffff6f6e3d4ea0b28bb8da","url":"tw_stocks/2412.json"},{"revision":"9540eb5f768e8219d9bd6337b83358ca","url":"tw_stocks/2409.json"},{"revision":"cb5379119e684672445dbafbf8b49528","url":"tw_stocks/2408.json"},{"revision":"0228a810bf593d00dbe680e83c7f30e7","url":"tw_stocks/2406.json"},{"revision":"02f6f2c53cabe9af58edcd7c58fbb178","url":"tw_stocks/2405.json"},{"revision":"af41f019996bea15f54745b545e012a8","url":"tw_stocks/2404.json"},{"revision":"eba67fa343e876e5cf1c959450ede1fd","url":"tw_stocks/2402.json"},{"revision":"b01cd60b4fd4f52c665dedb1adb8b152","url":"tw_stocks/2401.json"},{"revision":"46429516402bdd4b0380188daf368d24","url":"tw_stocks/2399.json"},{"revision":"6d35c4aef57bf9bf6de38064780d67b2","url":"tw_stocks/2397.json"},{"revision":"836717326d0c3cb06528abb66c222a43","url":"tw_stocks/2395.json"},{"revision":"fbd274699b9c5fe3ae6a4cfcf66d637c","url":"tw_stocks/2393.json"},{"revision":"a04403b94d9402994b9e8e922c03777b","url":"tw_stocks/2392.json"},{"revision":"58ad5fa8c937d5d33d58d00a89081a75","url":"tw_stocks/2390.json"},{"revision":"8ca1935ad1e8fbcceefa9f608c59baec","url":"tw_stocks/2388.json"},{"revision":"1145c47d4180714c545fc7a139edf98c","url":"tw_stocks/2387.json"},{"revision":"82249e4ee36eaafda6a3defa668dfd8c","url":"tw_stocks/2385.json"},{"revision":"ab1f5256fa08ff0dfd6a03ad0c434302","url":"tw_stocks/2383.json"},{"revision":"295d75f95ec2a7d824be9b07a4e5b26c","url":"tw_stocks/2382.json"},{"revision":"5f23eaf41f28147f619bb36f4f0b0dbe","url":"tw_stocks/2380.json"},{"revision":"dd7d0c230178a4822b04d10f7a5cc32b","url":"tw_stocks/2379.json"},{"revision":"35028802874d3bf1bc80d758b0bd6c9b","url":"tw_stocks/2377.json"},{"revision":"77cc3aafb69d16dee7bb1994a732b0da","url":"tw_stocks/2376.json"},{"revision":"d980340b1e5068c11c900ac90f96023f","url":"tw_stocks/2375.json"},{"revision":"7525e859afae5d7c13b13dd71910a746","url":"tw_stocks/2374.json"},{"revision":"f115db47042972f10ccf357481f25f11","url":"tw_stocks/2373.json"},{"revision":"38a895b19df9c3ceca28959edf3ebeae","url":"tw_stocks/2371.json"},{"revision":"640d73151c11e91a31c9a2cfff7931f6","url":"tw_stocks/2369.json"},{"revision":"2ed67a0e7e1c8a651f352ab14314e827","url":"tw_stocks/2368.json"},{"revision":"bd842bc6ac8a43d3d0637c20a104192b","url":"tw_stocks/2367.json"},{"revision":"bba5ee97f772ca5c779b872bd2afd05e","url":"tw_stocks/2365.json"},{"revision":"7f6cb18d189ee44be9c4919cf34b27c8","url":"tw_stocks/2364.json"},{"revision":"dec787d3f8b66a4435503b7e4ce439a9","url":"tw_stocks/2363.json"},{"revision":"8005420e0574853f64d99b43c5a76692","url":"tw_stocks/2362.json"},{"revision":"82a3d3965ae675b8a4337108ce11b43a","url":"tw_stocks/2360.json"},{"revision":"b3749ec5794ebe43cc43fe5f4c2c583a","url":"tw_stocks/2359.json"},{"revision":"6c14997716571260934440734a8c517d","url":"tw_stocks/2357.json"},{"revision":"4ae72eb8d7dd96c63e0d5b31f77c8e02","url":"tw_stocks/2356.json"},{"revision":"ec8d7d9581fd4a740b297a1f8c155c30","url":"tw_stocks/2355.json"},{"revision":"cd207d90e66f719a6ebe76f7ffd09608","url":"tw_stocks/2354.json"},{"revision":"4bf6aa8fb8f2db6d28a05aa6b5d8c3ab","url":"tw_stocks/2353.json"},{"revision":"9d26c50569ea64cdcad48524ed71d04d","url":"tw_stocks/2352.json"},{"revision":"f0b33a85c2bf71001ddbc77ec4dac5c7","url":"tw_stocks/2351.json"},{"revision":"67f0001e10cb4ff56b811c826f552400","url":"tw_stocks/2349.json"},{"revision":"f54714a77d822188c900440aa2cf0cad","url":"tw_stocks/2348.json"},{"revision":"ab9712ef6e3fde472d7feaec2a5eedc1","url":"tw_stocks/2347.json"},{"revision":"7504d9647bfd0e915ec7d9d54cbc113c","url":"tw_stocks/2345.json"},{"revision":"3d91691142aeaa8f3a4c6a2479555f66","url":"tw_stocks/2344.json"},{"revision":"f97c082fd87714674aba23f46b68b9d3","url":"tw_stocks/2342.json"},{"revision":"2288e093eacc5a992975e49cf0f309e9","url":"tw_stocks/2340.json"},{"revision":"d78ea223db4ca572c1a10364a64cb895","url":"tw_stocks/2338.json"},{"revision":"16fb42a012a5b2ea890a14f2ab902ee9","url":"tw_stocks/2337.json"},{"revision":"282a0b37b2dbe5b03b9edf1ca74c45f3","url":"tw_stocks/2332.json"},{"revision":"f891b6c009bd206bc84c837fc93152c0","url":"tw_stocks/2331.json"},{"revision":"58e39d66357e9c87e7c7a9f6841f6967","url":"tw_stocks/2330.json"},{"revision":"33fb57eb23537e839bb6d569f4b76ce8","url":"tw_stocks/2329.json"},{"revision":"96d4581d98b9692d14fd5d42f0399540","url":"tw_stocks/2328.json"},{"revision":"3762633c1ba5e9fd32f9aba62348a6f3","url":"tw_stocks/2327.json"},{"revision":"cdd96af0f07674278b4036eb170f2da5","url":"tw_stocks/2324.json"},{"revision":"0ad1c8adeed9f4c402c6ccf834c0d4c0","url":"tw_stocks/2323.json"},{"revision":"58df4e3cc64a8f749651a237c551af33","url":"tw_stocks/2321.json"},{"revision":"802d93908d3c3d3950cda563c6147d6b","url":"tw_stocks/2317.json"},{"revision":"d0ecf196acc78dcd1cfc3937a319416e","url":"tw_stocks/2316.json"},{"revision":"07a2e232d80c7549c621c92a779a64bc","url":"tw_stocks/2314.json"},{"revision":"cb2d9fd438182057b1fd3827aaceefe3","url":"tw_stocks/2313.json"},{"revision":"21714b41d5ca0074876ae27e8c53162f","url":"tw_stocks/2312.json"},{"revision":"d9baaef972393a77564db8ebfc0db1e5","url":"tw_stocks/2308.json"},{"revision":"e7fe2bc83e84b5fe79775978e13b24b5","url":"tw_stocks/2305.json"},{"revision":"3f3ed1f65c410d9d9ed3ab727fa960a3","url":"tw_stocks/2303.json"},{"revision":"0191b109356babc3033043f4fd940134","url":"tw_stocks/2302.json"},{"revision":"7b8aec0c1fddc551bd17ee045efce697","url":"tw_stocks/2301.json"},{"revision":"491bf40c6395abb6417ab2a1f6b607eb","url":"tw_stocks/2250.json"},{"revision":"40adc8a77bfedb145da33429e799d106","url":"tw_stocks/2248.json"},{"revision":"dde0f6098a0d852021f47d0e7b953150","url":"tw_stocks/2247.json"},{"revision":"54989dd3fa35a2855014346f4e830548","url":"tw_stocks/2243.json"},{"revision":"ec571b68af742b4215b7f1178f10e8ee","url":"tw_stocks/2241.json"},{"revision":"5600643e17023e01be00f7dac1d3905e","url":"tw_stocks/2239.json"},{"revision":"bc123850527d9ec531e874f73faeaeb8","url":"tw_stocks/2236.json"},{"revision":"5914ba2dbf57c9b3bcdb8ce5d9311595","url":"tw_stocks/2233.json"},{"revision":"46d885eb49188fdf8e89c427133d2919","url":"tw_stocks/2231.json"},{"revision":"c152f7264a471c0d142253a9ee44a50e","url":"tw_stocks/2228.json"},{"revision":"276e434ef93ac8c52652e9b13756f414","url":"tw_stocks/2227.json"},{"revision":"b8c167d007bcead25e611b1dcef676f7","url":"tw_stocks/2211.json"},{"revision":"eb2a8268c5794f721c516da8374a4732","url":"tw_stocks/2208.json"},{"revision":"f31e2a881cd61b06cd6e603ca4d5b9da","url":"tw_stocks/2207.json"},{"revision":"ba1d7d9b9ba1ae443be08cd18c1c1f27","url":"tw_stocks/2206.json"},{"revision":"aada3c84461398b11d0919c523dcedd8","url":"tw_stocks/2204.json"},{"revision":"b580cf1161098ff9c1bfe2c8bae40c57","url":"tw_stocks/2201.json"},{"revision":"e8b297c3b332f1cd47b3e8656bd542a4","url":"tw_stocks/2115.json"},{"revision":"d260b9d83d84bfc9bc58f84d41eea1e1","url":"tw_stocks/2114.json"},{"revision":"52a770b96295a0fa79f3e956409998c9","url":"tw_stocks/2109.json"},{"revision":"ef9c83b12e59bc18a05a2ef0044333e6","url":"tw_stocks/2108.json"},{"revision":"ee7bfc46379c63ccd7e8e314c83d2bd6","url":"tw_stocks/2107.json"},{"revision":"2e4c5e62df38e997417c12c1f7593158","url":"tw_stocks/2106.json"},{"revision":"8cb95881929d59d7b2afcff8b9c5f1be","url":"tw_stocks/2105.json"},{"revision":"4960f238f61dda7c605ebe314e359b80","url":"tw_stocks/2104.json"},{"revision":"88b7b1d29caa64fb7eccf8bcbb8e9803","url":"tw_stocks/2103.json"},{"revision":"97a2469b38820ca53a2a5ed7930be34b","url":"tw_stocks/2102.json"},{"revision":"fea1d5d1f807747d08f1ef959378d07f","url":"tw_stocks/2101.json"},{"revision":"3dbf9ab10b2e5378c8a91159b8a97a18","url":"tw_stocks/2069.json"},{"revision":"fc66b0b538fca2111e67cc0fafd8c857","url":"tw_stocks/2062.json"},{"revision":"e20a38a33b62d23949226bdbbb2cad38","url":"tw_stocks/2059.json"},{"revision":"955ffcc00e787630f4ba32bebb326208","url":"tw_stocks/2049.json"},{"revision":"23f784af815711218f3c23ec71298dca","url":"tw_stocks/2038.json"},{"revision":"3f2dc7fbab4d33c15846cdd0dd7fdcc8","url":"tw_stocks/2034.json"},{"revision":"04657f02ba3900b969e2737d48ebee3c","url":"tw_stocks/2033.json"},{"revision":"3723d514317a7996f63095e9225f0d95","url":"tw_stocks/2032.json"},{"revision":"8b26086566561ef4e1a5c3f9e6a2b37d","url":"tw_stocks/2031.json"},{"revision":"0156bf39a8bb25138b338ac21e14b8c0","url":"tw_stocks/2030.json"},{"revision":"647950ca67f4acdfeb930137634f0a71","url":"tw_stocks/2029.json"},{"revision":"7c06bed2db569124fe4c61e400556f9b","url":"tw_stocks/2028.json"},{"revision":"cceaf8f7658e9b708dca8058db72edf0","url":"tw_stocks/2027.json"},{"revision":"95269124afad66741f246aca5378562a","url":"tw_stocks/2025.json"},{"revision":"ace07eae3c8f2f303995354aedbfe076","url":"tw_stocks/2024.json"},{"revision":"fc51f86e31b68e88207a9da20392c62a","url":"tw_stocks/2023.json"},{"revision":"cf226ab583bad0d0c0884950a910ff08","url":"tw_stocks/2022.json"},{"revision":"d6bf186071b55ad8c52145964fc8c434","url":"tw_stocks/2020.json"},{"revision":"f6857ae829d00dad45bd3da782f97148","url":"tw_stocks/2017.json"},{"revision":"9ca7abaa460a992c4fb56e6b39c2b7be","url":"tw_stocks/2015.json"},{"revision":"f02d93e48a34048d00c19376b5aaf455","url":"tw_stocks/2014.json"},{"revision":"81d4f484f26a22cf0acc9d69ec738a7d","url":"tw_stocks/2013.json"},{"revision":"983fc042d87cf03482726ffb6dd7ee10","url":"tw_stocks/2012.json"},{"revision":"bcb9440780b898a4dc4acbd35b49d401","url":"tw_stocks/2010.json"},{"revision":"b5a511e4a32115df2aac0f5b40bfda7e","url":"tw_stocks/2009.json"},{"revision":"b55ea6345c5377298b2f21f99eed7f72","url":"tw_stocks/2008.json"},{"revision":"1e8346c41ce609d31089fe8f3db27fd5","url":"tw_stocks/2007.json"},{"revision":"82dfa4ddb6cc4be4e06fdc891e48fa6e","url":"tw_stocks/2006.json"},{"revision":"2fa9d46dfeca6f350120831e353f2d34","url":"tw_stocks/2002.json"},{"revision":"d0ad52d2855df962c5f0506061066c21","url":"tw_stocks/1909.json"},{"revision":"18b77862046ba4d05d85761f53b46c63","url":"tw_stocks/1907.json"},{"revision":"f7855a3a6b71d1bde6ccec6db973f66d","url":"tw_stocks/1906.json"},{"revision":"3df362561f2fa6ec1a3588e65419c39e","url":"tw_stocks/1905.json"},{"revision":"7e2988df2dc23257961c7689c90ff9ba","url":"tw_stocks/1904.json"},{"revision":"7df4220d5bf3eda45ad58ee93bac8958","url":"tw_stocks/1903.json"},{"revision":"610abd5b210cfeef695baa973f305591","url":"tw_stocks/1817.json"},{"revision":"23549f010c35f205050fdcff27c467cd","url":"tw_stocks/1810.json"},{"revision":"f5609fc4eb19496b8bb5ba3adba6ade7","url":"tw_stocks/1809.json"},{"revision":"ae7febffdbe4d850ed434c6795127edd","url":"tw_stocks/1808.json"},{"revision":"9dda21f10d61dba961463ed5af64803f","url":"tw_stocks/1806.json"},{"revision":"2ea5005d05fb356b1a83a313742f884a","url":"tw_stocks/1805.json"},{"revision":"54a7892236cb0584f3e4da35a58b15bc","url":"tw_stocks/1802.json"},{"revision":"2031e1284d4da6626927166ea2348a97","url":"tw_stocks/1795.json"},{"revision":"e5a24d7d235a3916f4008c907125d61a","url":"tw_stocks/1789.json"},{"revision":"c666bc6982c5f2203fbd2fca269fff95","url":"tw_stocks/1786.json"},{"revision":"035101a851c489a2ed68e72be38f9ec3","url":"tw_stocks/1783.json"},{"revision":"3e9fc93b3e2611d76edf8ecfb54b5519","url":"tw_stocks/1776.json"},{"revision":"44d31209992118ce835ca8574a801783","url":"tw_stocks/1773.json"},{"revision":"f554881e4e22891a22f7a0c345098051","url":"tw_stocks/1762.json"},{"revision":"39fc5ffecf8a0d936d54c8ad5369158f","url":"tw_stocks/1760.json"},{"revision":"69bf99160b8652117735787f982ecd62","url":"tw_stocks/1752.json"},{"revision":"92cba35b1b3e90a8e1d6be2c75d83370","url":"tw_stocks/1737.json"},{"revision":"cfb3dab297540d8e1895a66fa66b3e1f","url":"tw_stocks/1736.json"},{"revision":"b7d1f7dc95f47ded1a9f7e5b86a2d948","url":"tw_stocks/1735.json"},{"revision":"b4e86351d278b1801c6884cf5439ddc3","url":"tw_stocks/1734.json"},{"revision":"8c762c43d31ded266bc24ba7d4fd506f","url":"tw_stocks/1733.json"},{"revision":"b86ab97990968c06d265ab20777e8cec","url":"tw_stocks/1732.json"},{"revision":"412e32ed1092d3596a6d318bf97731fa","url":"tw_stocks/1731.json"},{"revision":"3817555d1862565eedd55f334fc684d3","url":"tw_stocks/1730.json"},{"revision":"7618c149028569e0d3564631e49f77d4","url":"tw_stocks/1727.json"},{"revision":"82605208a65adfe7b1e3b1a2ea383ea3","url":"tw_stocks/1726.json"},{"revision":"ad6de14a4f05300032e92661278a9a8c","url":"tw_stocks/1725.json"},{"revision":"1d5b3e694b7e7f7a523171aac8e44f02","url":"tw_stocks/1723.json"},{"revision":"ce47dc051a2a512bcd1b291084604a61","url":"tw_stocks/1722.json"},{"revision":"5c5b132ffcf8909e1e55b38d883e79ad","url":"tw_stocks/1721.json"},{"revision":"d9150be8c25a63b3dab394da29816664","url":"tw_stocks/1720.json"},{"revision":"6a0482281352cb5d0dc487d8c7d9dcde","url":"tw_stocks/1718.json"},{"revision":"d963a609359eaf2745f8e9efd8321717","url":"tw_stocks/1717.json"},{"revision":"f1fdf4fc4123a54f450d24d82391079a","url":"tw_stocks/1714.json"},{"revision":"9309580c6702718efb44b4f5bf7ba48b","url":"tw_stocks/1713.json"},{"revision":"a5dc4106fd1cf6cfefe7bfab73a23785","url":"tw_stocks/1712.json"},{"revision":"74d32da157c4ff4d428c0712c609957e","url":"tw_stocks/1711.json"},{"revision":"9ab1eb1ab712641962eb4c3dfcce5fac","url":"tw_stocks/1710.json"},{"revision":"c503e94d20e60daaafd8e5a04341dd8e","url":"tw_stocks/1709.json"},{"revision":"ab512360e97a3199789de3b8ffb1bfc6","url":"tw_stocks/1708.json"},{"revision":"19b986776a0e95502377fcd9d8407a56","url":"tw_stocks/1707.json"},{"revision":"1e194aa7780358e4778cf8095d7b8a8d","url":"tw_stocks/1702.json"},{"revision":"5e05a3ff1dc9b3ad30603b35e1703c45","url":"tw_stocks/1626.json"},{"revision":"ada54705434086f2a30245ace885bfff","url":"tw_stocks/1623.json"},{"revision":"c313856abb2577a1d11f48fbeed7f9d6","url":"tw_stocks/1618.json"},{"revision":"245b9879ad8d6b329ac0816e0e82d895","url":"tw_stocks/1617.json"},{"revision":"e967bf037e5249bf7f022af58732a547","url":"tw_stocks/1616.json"},{"revision":"43579a570da4b8927d7bd41e9958ef7c","url":"tw_stocks/1615.json"},{"revision":"b39862a521e3f9d6048c9d5e376c5c10","url":"tw_stocks/1614.json"},{"revision":"5621e815bbb30c148b71cc22b016c712","url":"tw_stocks/1612.json"},{"revision":"0935bcffad1314151ec408ba58c72c9d","url":"tw_stocks/1611.json"},{"revision":"9242b635c07b5fefaedea246597f62c9","url":"tw_stocks/1609.json"},{"revision":"35816fe8e51c44ae2c733b75d5316f2b","url":"tw_stocks/1608.json"},{"revision":"f80a683d37c538d5bf354b7dd5ce174b","url":"tw_stocks/1605.json"},{"revision":"c0a01b9a56aff624e9bcf26c10f2020d","url":"tw_stocks/1604.json"},{"revision":"fb4554a6b289bd52914413078a915f60","url":"tw_stocks/1603.json"},{"revision":"d391994d302625e734d5e00730383415","url":"tw_stocks/1598.json"},{"revision":"2a2914fa5da6ce79e2cb16d613de6aff","url":"tw_stocks/1597.json"},{"revision":"6733b2c934c762084f4190d2c12f0885","url":"tw_stocks/1590.json"},{"revision":"190130c23219e77fc90306182864e935","url":"tw_stocks/1589.json"},{"revision":"3e9f19cb3d6dff20a5aa36c42e524a7f","url":"tw_stocks/1587.json"},{"revision":"98de750c3e82c7235cf7c6e393d775b6","url":"tw_stocks/1583.json"},{"revision":"169c1ab71581e02759a6f154b78ce8c0","url":"tw_stocks/1582.json"},{"revision":"05c8077ac785bfb278954b8e27aa1c0e","url":"tw_stocks/1568.json"},{"revision":"5306e0fd224ddd435c2c1fbb5ff6e10c","url":"tw_stocks/1563.json"},{"revision":"49c583dc1c4e2f82e7574458ca408d97","url":"tw_stocks/1560.json"},{"revision":"4d636e4e3fc9177c798636c8a753a0df","url":"tw_stocks/1558.json"},{"revision":"f3f6ae9a8aa259f87f4f8136d27f49df","url":"tw_stocks/1541.json"},{"revision":"f3ce93e00e299a89ae70f6ed51d506a6","url":"tw_stocks/1540.json"},{"revision":"c6f289a9b1f81236ef167b4e0fbd53bf","url":"tw_stocks/1539.json"},{"revision":"a12cdb0c130f0b4139c77be42e5bb60c","url":"tw_stocks/1538.json"},{"revision":"ed664d4526e524961f48225a6d6176f2","url":"tw_stocks/1537.json"},{"revision":"18d685aeb49e3a9f250d1eb43879ff8b","url":"tw_stocks/1536.json"},{"revision":"a906361825020d1cccb13d86b06bf2ee","url":"tw_stocks/1535.json"},{"revision":"bb2816efacec39874086696155604e62","url":"tw_stocks/1533.json"},{"revision":"661d51a33b97eaf085a4f1951f883cfa","url":"tw_stocks/1532.json"},{"revision":"18e12d16e97599aad57d96982e6add0d","url":"tw_stocks/1531.json"},{"revision":"8dda00653cbac41d919587c88f54e3df","url":"tw_stocks/1530.json"},{"revision":"26f3d2b63c24ebeed3049e6c884d48ae","url":"tw_stocks/1529.json"},{"revision":"519e171ec4c8300a657808320082061c","url":"tw_stocks/1528.json"},{"revision":"3ed1e22fc9e3be9a72fa0bd65b632447","url":"tw_stocks/1527.json"},{"revision":"4e29c514c7e79c7df2031a65ebce0c63","url":"tw_stocks/1526.json"},{"revision":"a6ee933b54a30b5a2275d0d9b548975b","url":"tw_stocks/1525.json"},{"revision":"c2884acf7c0dfb12d361436461c5b29f","url":"tw_stocks/1524.json"},{"revision":"224869663447248ddf32cd1bf7ab4386","url":"tw_stocks/1522.json"},{"revision":"eb595120b9005ca562fd24e98b4c75f0","url":"tw_stocks/1521.json"},{"revision":"874296879d9b41fa81ac16f6d5727626","url":"tw_stocks/1519.json"},{"revision":"c2f8981711cef1915e050aa9c8cea3ec","url":"tw_stocks/1517.json"},{"revision":"98f45dcfacb017b63ba6fe69504f36cb","url":"tw_stocks/1516.json"},{"revision":"27072ab8a500c8afc179dc5e5c08e069","url":"tw_stocks/1515.json"},{"revision":"9aad1df1007e079d3284f754ab9907bb","url":"tw_stocks/1514.json"},{"revision":"abd891243a9ec9f1e24e6e49a076c8cd","url":"tw_stocks/1513.json"},{"revision":"e895507f386e34a6e56c0b99060c69a2","url":"tw_stocks/1512.json"},{"revision":"1baf475f949da29cf7bfd89fa53579b4","url":"tw_stocks/1506.json"},{"revision":"70e84c939e144fdeb1f73ad4383fdaa3","url":"tw_stocks/1504.json"},{"revision":"f9c4b8d8f733a00c5baa9b3dc5accde3","url":"tw_stocks/1503.json"},{"revision":"e96acc4032192c9319453ed4e790ba6c","url":"tw_stocks/1477.json"},{"revision":"f411295424e7a5edbcf9d230832a8217","url":"tw_stocks/1476.json"},{"revision":"862ffd063dc511e2ad987236a47c0a16","url":"tw_stocks/1475.json"},{"revision":"3574bf27af1bfa9777cfd75088a13adb","url":"tw_stocks/1474.json"},{"revision":"a6dd776193edc7c1a8fce8220c158543","url":"tw_stocks/1473.json"},{"revision":"be2bd529742e629941def7f82349a5fd","url":"tw_stocks/1472.json"},{"revision":"abeef74dd91084f534ecf53ea5d7d769","url":"tw_stocks/1471.json"},{"revision":"4bcc68c2ff57f0534632ccbddf9234aa","url":"tw_stocks/1470.json"},{"revision":"b6e849c2284227d7f375c789784e609c","url":"tw_stocks/1468.json"},{"revision":"2a0674d3d97572fd9b3f663f31caebc6","url":"tw_stocks/1467.json"},{"revision":"52224c1d16934dc680344a3d7840c875","url":"tw_stocks/1466.json"},{"revision":"3b26c4020d51fae390d5051ae2780d9c","url":"tw_stocks/1465.json"},{"revision":"583610f211d84caf5dc15ae0701c2bb4","url":"tw_stocks/1464.json"},{"revision":"ad2830d6f94b58bfd1a75ac29d6bf342","url":"tw_stocks/1463.json"},{"revision":"ebbacf61952afcf2ed4c2f5e27753cd3","url":"tw_stocks/1460.json"},{"revision":"57f85534f7f588b2b41ec7009bf57f75","url":"tw_stocks/1459.json"},{"revision":"6a310a8dd119af28b7e196a74f133617","url":"tw_stocks/1457.json"},{"revision":"7e8b45d611cbdeffc460971580576486","url":"tw_stocks/1456.json"},{"revision":"44b317530beaa92bc68a4818b99a37f2","url":"tw_stocks/1455.json"},{"revision":"d70eb04c0e8876ea4b4b02d48df7ee0b","url":"tw_stocks/1454.json"},{"revision":"a6428929b3bc046ddb2d7dc05ccdae6c","url":"tw_stocks/1453.json"},{"revision":"e4497dd458e8404191ebe7852c3aa797","url":"tw_stocks/1452.json"},{"revision":"d6434a3f82e54ab2d271a836dd1da1c0","url":"tw_stocks/1451.json"},{"revision":"4a476bfa3bb3815acd515f9c73603fb3","url":"tw_stocks/1449.json"},{"revision":"c0eb070960f67e4b9e85b437f2722407","url":"tw_stocks/1447.json"},{"revision":"d4a4c99bf89e75a99b0c03f8cfbcb29b","url":"tw_stocks/1446.json"},{"revision":"c9ba841b78891f0543e05253783ac62b","url":"tw_stocks/1445.json"},{"revision":"ae4e11bfde98f8c407eae7e98433833a","url":"tw_stocks/1444.json"},{"revision":"878ba79cfcb7dce8573ee3896b4e154c","url":"tw_stocks/1443.json"},{"revision":"3f142ee5854d9403e981dfafc8ad9541","url":"tw_stocks/1442.json"},{"revision":"a86496ac49612fe326989a4745ae6921","url":"tw_stocks/1441.json"},{"revision":"9d3b9dd64ef29931e3bad0b35963eebe","url":"tw_stocks/1440.json"},{"revision":"edda1fe79e8a3c07fa94a5e762f9fa7e","url":"tw_stocks/1439.json"},{"revision":"bab9155ac863b366d971d8d62df34250","url":"tw_stocks/1438.json"},{"revision":"887c0fdb0d1fcd1eb37421019cbb8cee","url":"tw_stocks/1437.json"},{"revision":"9de6bc6eac09b08c013ae3723f0739a1","url":"tw_stocks/1436.json"},{"revision":"1be0ef1d68c5ae9ef629656410fc4bd9","url":"tw_stocks/1435.json"},{"revision":"84a662b6c1aa34bf28cfd237fdc9a45a","url":"tw_stocks/1434.json"},{"revision":"1ffbef7d0d3b4d3eea3249973ca06799","url":"tw_stocks/1432.json"},{"revision":"096e2644bba8112db41e9de438b7491b","url":"tw_stocks/1423.json"},{"revision":"7362b6448bd288107dc802c0e403ccc3","url":"tw_stocks/1419.json"},{"revision":"b23bbf4c15345475e6a6c33b8a8a488f","url":"tw_stocks/1418.json"},{"revision":"4f4c04657a12c221bc4b904765101744","url":"tw_stocks/1417.json"},{"revision":"e3ba7aa0116fc3f6092009df6092a62f","url":"tw_stocks/1416.json"},{"revision":"59515822f554b8b603ade389473ac461","url":"tw_stocks/1414.json"},{"revision":"ef5d2abd9d087c77c67d6bc540f01cb7","url":"tw_stocks/1413.json"},{"revision":"a12d69d66cd3bb06342ffdf2a0bd350d","url":"tw_stocks/1410.json"},{"revision":"cd45b58612b2458fdb94647616be112d","url":"tw_stocks/1409.json"},{"revision":"cef5f8fd313741a6909b8f8ec5f1afad","url":"tw_stocks/1402.json"},{"revision":"7314daa6d47a5485ebd1c12d9fd3f979","url":"tw_stocks/1342.json"},{"revision":"810f9fd296c2619ae52fa11b6cad32c2","url":"tw_stocks/1341.json"},{"revision":"de8649104c1e62d2ae6bb03b0afff22a","url":"tw_stocks/1340.json"},{"revision":"790b8d663dedd66d22ebf4ac4458b9a6","url":"tw_stocks/1339.json"},{"revision":"7a6933ab6c9c1c6df5b8ce3f6b6ce64b","url":"tw_stocks/1338.json"},{"revision":"9b68c574aeedba33ae305f955af1a74f","url":"tw_stocks/1337.json"},{"revision":"9be621306b70953954879903e6664232","url":"tw_stocks/1326.json"},{"revision":"fc3e9f489073fa3cc743b4ac4533c8dc","url":"tw_stocks/1325.json"},{"revision":"7f0a223f098b427d431e8748f4b293a5","url":"tw_stocks/1324.json"},{"revision":"5c50f92e31aef2d7e1d3a7b390ded073","url":"tw_stocks/1323.json"},{"revision":"40c2eb46684817c9fc167ad06677ce3e","url":"tw_stocks/1321.json"},{"revision":"1ca697d965bc2fedc8d8419a7c3aa351","url":"tw_stocks/1319.json"},{"revision":"0e8f9464db4de97e710b6a05ef0c9ff1","url":"tw_stocks/1316.json"},{"revision":"b171e433aafb91c9c297b8469d60af7d","url":"tw_stocks/1315.json"},{"revision":"19315f56ae36734f70d71063b78536dc","url":"tw_stocks/1314.json"},{"revision":"161a0902fad3dba17f2fccb58114d748","url":"tw_stocks/1313.json"},{"revision":"315fc64f2a89a286da0fd16ff648bc46","url":"tw_stocks/1312.json"},{"revision":"ec95236c595ead9e82e8087c6c87d5a0","url":"tw_stocks/1310.json"},{"revision":"77d27b71f99e702e3230432b343c1a70","url":"tw_stocks/1309.json"},{"revision":"4da2f86b64faecc3db4417636f27e8aa","url":"tw_stocks/1308.json"},{"revision":"de6fd912cedc07df8c203a38d0528f28","url":"tw_stocks/1307.json"},{"revision":"4868db4d21ba4e2811c0c0df42b47002","url":"tw_stocks/1305.json"},{"revision":"2562950f4f2b77ab1d57380329896ba6","url":"tw_stocks/1304.json"},{"revision":"3d3a227921a30ccbc547df4030748566","url":"tw_stocks/1303.json"},{"revision":"126de6e78182870ea72eb7cb76f87ad9","url":"tw_stocks/1301.json"},{"revision":"fad236c116faeac4035e54585ac3d83a","url":"tw_stocks/1256.json"},{"revision":"6cd992f56532fddf7306696b0bc6d635","url":"tw_stocks/1236.json"},{"revision":"4365afe34d95a4ff8780f5b5e42330fa","url":"tw_stocks/1235.json"},{"revision":"29ed3dab51823fc3d38307b723e1bab6","url":"tw_stocks/1234.json"},{"revision":"0933c22fcec93dcd6e0807e74a852267","url":"tw_stocks/1233.json"},{"revision":"c734987086386a8f73b6e25c74505811","url":"tw_stocks/1232.json"},{"revision":"f9d87eebd232fc0000280d522dfd6e9a","url":"tw_stocks/1231.json"},{"revision":"cfa68cff473cdca133d6ce84b7acd08c","url":"tw_stocks/1229.json"},{"revision":"9ac9694f8cdc29ba4ad78ca9d5b6468c","url":"tw_stocks/1227.json"},{"revision":"7ed0e6829be0f5a90eb57d79c9301ad2","url":"tw_stocks/1225.json"},{"revision":"0395368ac1a927d5fd593b2d9f69bc44","url":"tw_stocks/1220.json"},{"revision":"3fd750699989c48090d213b867336cc4","url":"tw_stocks/1219.json"},{"revision":"a7fad757439581fde04577744f329014","url":"tw_stocks/1218.json"},{"revision":"78a30690f312494af1a628b22084aea0","url":"tw_stocks/1217.json"},{"revision":"5fb0f12f7e7c7c930f9a6049ec178487","url":"tw_stocks/1216.json"},{"revision":"7795da881b187472a8839d9231ee9a0b","url":"tw_stocks/1215.json"},{"revision":"78ccea0f25ca22f164a2893abfcf2e8f","url":"tw_stocks/1213.json"},{"revision":"f4dcd800fe1a15cb0185c3f7ca0cb2e5","url":"tw_stocks/1210.json"},{"revision":"d3032d25f8d33be820bd225a5180681d","url":"tw_stocks/1203.json"},{"revision":"469ede76bc4a0daa2b6a09802d27007c","url":"tw_stocks/1201.json"},{"revision":"df26782d99735ad32b26488662357aa0","url":"tw_stocks/1110.json"},{"revision":"743a0ab43740ce8ad27a5ee176d7f550","url":"tw_stocks/1109.json"},{"revision":"7da6e951eb5ef5dc65ca315d54fe6a3f","url":"tw_stocks/1108.json"},{"revision":"31e5bf3344dd22cb64b0441a788bead1","url":"tw_stocks/1104.json"},{"revision":"73e9ebb2449942006ce38a3b086a27c0","url":"tw_stocks/1103.json"},{"revision":"c5c1ad94309f3866151c39cbb27a6372","url":"tw_stocks/1102.json"},{"revision":"8a50da9f6fe1b2c7b0239ca5df03cf91","url":"tw_stocks/1101.json"},{"revision":"20628c2be925b573da5f3ff630a3c72a","url":"tw_stocks/00996A.json"},{"revision":"1f6730e302e85d3ecf74cd51994f130e","url":"tw_stocks/00995A.json"},{"revision":"49248894657cdef73494f0b6ef6da94b","url":"tw_stocks/00994A.json"},{"revision":"0c5bbbccd0bcb827ec650bc41ac019f6","url":"tw_stocks/00993A.json"},{"revision":"cc6cf13b4bf2c157cabf1e05aee61467","url":"tw_stocks/00992A.json"},{"revision":"2d64518a3fe86753285d48b525fd4ea4","url":"tw_stocks/00991A.json"},{"revision":"2572754c0bf049fb9e2bc3b1f8f7fda2","url":"tw_stocks/00990A.json"},{"revision":"6f82f5e0a10791674ede4a89b4af7c43","url":"tw_stocks/00989A.json"},{"revision":"b521885e61be439451dfe2da0b7e81f6","url":"tw_stocks/00988A.json"},{"revision":"9192eb82d714f6a4c29014351ce49657","url":"tw_stocks/00987A.json"},{"revision":"17f169ddacf00c21c6efe379a2f89937","url":"tw_stocks/00986A.json"},{"revision":"db387e474ee40ba281ea2673d621c8d5","url":"tw_stocks/00985B.json"},{"revision":"7be66bae5a96922fa75d85fb042bbd39","url":"tw_stocks/00985A.json"},{"revision":"b01948213517e90e1dcee5f88803835a","url":"tw_stocks/00984D.json"},{"revision":"c9c8c3264eb608689080fe2882a69751","url":"tw_stocks/00984A.json"},{"revision":"d006ceb5e38f206ea0454db3e206a9ad","url":"tw_stocks/00983D.json"},{"revision":"f604a737ff9cbcea205bfa6dd412fbec","url":"tw_stocks/00983A.json"},{"revision":"7f4c2d8ff189b2192e85d280449f85e5","url":"tw_stocks/00982T.json"},{"revision":"a3fd2ae503bdac95169717824dd46273","url":"tw_stocks/00982D.json"},{"revision":"c9c115b9e1f86a7aaebd68a6be38483e","url":"tw_stocks/00982A.json"},{"revision":"48dd765382ea2fe2ecfec9104097dd58","url":"tw_stocks/00981T.json"},{"revision":"53775bace3bcd608dba7d402ac174778","url":"tw_stocks/00981A.json"},{"revision":"179c5a6709c26f5048019a932a43b1e2","url":"tw_stocks/009818.json"},{"revision":"093f557ba3a204ed4665cda91dcc4a6f","url":"tw_stocks/009817.json"},{"revision":"a228413cfc57d458610871dfbaa99b9d","url":"tw_stocks/009816.json"},{"revision":"b81a7879283da8bac5984ef1a740c302","url":"tw_stocks/009813.json"},{"revision":"5d7fe62afc41d93ebdadb5c2bfd68907","url":"tw_stocks/009812.json"},{"revision":"ab85a2faeaf35030df04b768b2fa99b1","url":"tw_stocks/009811.json"},{"revision":"bce8a02dc6b9e05235ecf24a96166184","url":"tw_stocks/009810.json"},{"revision":"b51f09ef43513d824e910d2fa01bbde0","url":"tw_stocks/00980A.json"},{"revision":"d58d99618427363f28b0ec509d0233c9","url":"tw_stocks/009809.json"},{"revision":"8082335e4b42ff08edd63058e0c83ed8","url":"tw_stocks/009808.json"},{"revision":"6912a189b0e1f07ba865cd437c2bf87a","url":"tw_stocks/009805.json"},{"revision":"8b17a8b4e341005ec7c073acbff83c7b","url":"tw_stocks/009804.json"},{"revision":"18dffc1793a7f2d5217de54756e15a09","url":"tw_stocks/009803.json"},{"revision":"ba7f3631f463af8b27d1a0ad8c4ed3f2","url":"tw_stocks/009802.json"},{"revision":"069796044ae8be1d8359297d41ccb029","url":"tw_stocks/009801.json"},{"revision":"88e8031179c32caa1c11f0176a7a2e10","url":"tw_stocks/009800.json"},{"revision":"a75a7a3c7fc5437b970185b206e03fac","url":"tw_stocks/00972.json"},{"revision":"c52c483dd57bd0fd4767a4e3dfaa1fdd","url":"tw_stocks/00971.json"},{"revision":"949b1b608676e5d160f5c4f4d151cf3f","url":"tw_stocks/00965.json"},{"revision":"ffef4cc3b04734a0d1062b1f93a845b2","url":"tw_stocks/00964.json"},{"revision":"d1a02741774d6d714a029b3f4b329e9b","url":"tw_stocks/00963.json"},{"revision":"c2d026c74df60989d1eac78bf8a8584c","url":"tw_stocks/00962.json"},{"revision":"78c9f08c7f5b1acc8d2b32ab79346635","url":"tw_stocks/00961.json"},{"revision":"5286268aa9cb2b35015710faf60ccecc","url":"tw_stocks/00960.json"},{"revision":"4e9748f1bc64948a6c402fc221583078","url":"tw_stocks/00956.json"},{"revision":"0ee8e311d0257ad5b0d17c31096bae98","url":"tw_stocks/00954.json"},{"revision":"9d6d9adc09294b3cbac607a627498085","url":"tw_stocks/00953B.json"},{"revision":"cf6a58312754eaccbe8d71d9ab7792c3","url":"tw_stocks/00952.json"},{"revision":"3add1ca2bd2f9073d75e41d049632647","url":"tw_stocks/00951.json"},{"revision":"523011c89e930bfa70efc9bd5bfcbd4a","url":"tw_stocks/00949.json"},{"revision":"ee690b885e9e215733afab9669743fbd","url":"tw_stocks/00947.json"},{"revision":"ad5484509353eeac83c81f1407ce2830","url":"tw_stocks/00946.json"},{"revision":"14b88d8bde7eb9c315cfec2d31e7d596","url":"tw_stocks/00945B.json"},{"revision":"7ff75e738c040c4c9c9ceeabd34157f9","url":"tw_stocks/00944.json"},{"revision":"c6e54debac7100dcfd49995904a67489","url":"tw_stocks/00943.json"},{"revision":"8427acdc7b01f5e30bceb805bf41d63a","url":"tw_stocks/00941.json"},{"revision":"34277dd6df9e65fe051c9adf834e5808","url":"tw_stocks/00940.json"},{"revision":"25846b182854b71772b9f296e7ebd5b2","url":"tw_stocks/00939.json"},{"revision":"a7f782b5092422de389ba408214a6702","url":"tw_stocks/00938.json"},{"revision":"440e5ddf51281a67d2ebe9fbbdc43201","url":"tw_stocks/00936.json"},{"revision":"e2697536517a926993ab764bbda8f23b","url":"tw_stocks/00935.json"},{"revision":"690efa5c0fff2833b41fb86b143259fe","url":"tw_stocks/00934.json"},{"revision":"7f4ffd13a1baeab515f9a6de39f21fe9","url":"tw_stocks/00932.json"},{"revision":"0c6a35bd13c7ebc3086f039f97a95bad","url":"tw_stocks/00930.json"},{"revision":"b216c41ce9312956317d37a777c6771a","url":"tw_stocks/00929.json"},{"revision":"643b22b605a63057d932dc0bb61e4cd1","url":"tw_stocks/00927.json"},{"revision":"f655bc4b72394e67a0ae8cba258deec6","url":"tw_stocks/00926.json"},{"revision":"33d8050d1a70aa08dd1c2c59055315a7","url":"tw_stocks/00924.json"},{"revision":"4173260d795bdc29873d671070fd6aee","url":"tw_stocks/00923.json"},{"revision":"002a0342dcc00b9d480740e4e404f21c","url":"tw_stocks/00922.json"},{"revision":"0dee664a318d37f0eda4d1dbd6881225","url":"tw_stocks/00921.json"},{"revision":"8408c382d4fd6d8824e9fe020a0ec6b7","url":"tw_stocks/00920.json"},{"revision":"ff806bcb1ffa18801ce0284a3b46e039","url":"tw_stocks/00919.json"},{"revision":"c5e39c601e7218b3f173915d00678d59","url":"tw_stocks/00918.json"},{"revision":"6be9a7c9c9d042156c230f6613c52a51","url":"tw_stocks/00917.json"},{"revision":"6715c7f789ebc13e5ad8e6b16509357c","url":"tw_stocks/00916.json"},{"revision":"a06cd7679ed2d5effd15e410ef6515d2","url":"tw_stocks/00915.json"},{"revision":"ccdc1baf9d173d83c4994d9bb523eee3","url":"tw_stocks/00913.json"},{"revision":"e7074f632551dc0d1b40d604cbdeece2","url":"tw_stocks/00912.json"},{"revision":"348a2c2787806849f29da6287a2ed4c5","url":"tw_stocks/00911.json"},{"revision":"e56443791361cb880d9724cbb3976ee0","url":"tw_stocks/00910.json"},{"revision":"66745de58c81d32dcb8c8a973597ed4d","url":"tw_stocks/00909.json"},{"revision":"52989933924f8eead1cc0caf81f28e4a","url":"tw_stocks/00908.json"},{"revision":"6b0fa45daecae3af230257b8f0f73a2d","url":"tw_stocks/00907.json"},{"revision":"505665c96ce8440715bd3417ba2a7726","url":"tw_stocks/00905.json"},{"revision":"2e5a819bf3715bcd7df9375fc58a602c","url":"tw_stocks/00904.json"},{"revision":"42147c2c1d75aaf2a0e3df6d37911428","url":"tw_stocks/00903.json"},{"revision":"7eab7af75a94ae22d210c3cd6fd87e72","url":"tw_stocks/00902.json"},{"revision":"350d81cd9459eb951735d8fe4f50f240","url":"tw_stocks/00901.json"},{"revision":"4e0a30369f641215511353cb62906808","url":"tw_stocks/00900.json"},{"revision":"8d5729d90800ef95829a25d363af68ff","url":"tw_stocks/00899.json"},{"revision":"af64cde2c8f7f148987610b259ea470b","url":"tw_stocks/00898.json"},{"revision":"37f9f13b248b328f8f87a0ac0faa263c","url":"tw_stocks/00897.json"},{"revision":"c09badb8c42b5619c279c99222080756","url":"tw_stocks/00896.json"},{"revision":"4f6c68bf605f3307a218f5845d6af18e","url":"tw_stocks/00895.json"},{"revision":"725f791101554bcbe8eb5aa71e882af9","url":"tw_stocks/00894.json"},{"revision":"766bebb33969780cd67236801cd17cc9","url":"tw_stocks/00893.json"},{"revision":"50e79f606e246450ec87a5d6f7a12579","url":"tw_stocks/00892.json"},{"revision":"b40feccb598dc92657686cdba801a23f","url":"tw_stocks/00891.json"},{"revision":"f8c09d93853f2c9cfd2af6de7931f48c","url":"tw_stocks/00885.json"},{"revision":"9dcb2c4da3a465771d09a21e98e15e56","url":"tw_stocks/00882.json"},{"revision":"4ab6cc950e56aa2e2aa842241a83c5e2","url":"tw_stocks/00881.json"},{"revision":"318c955de44ec19fd72ef8c78185b848","url":"tw_stocks/00878.json"},{"revision":"9959a2520813466059b7a85b281476a2","url":"tw_stocks/00876.json"},{"revision":"28321c28fa4f2703d1d1c4d0c7d515e0","url":"tw_stocks/00875.json"},{"revision":"0c90abee50469d9922318925b5102b2e","url":"tw_stocks/00865B.json"},{"revision":"7ac4ab10ef8b42b4995fc20bebd694c6","url":"tw_stocks/00861.json"},{"revision":"5b290842933dc47d7cfbb31d1772f6ce","url":"tw_stocks/00852L.json"},{"revision":"4b58ee5b7935658c4ba01046d80fd087","url":"tw_stocks/00851.json"},{"revision":"277271e03de15cd72c11f828dac4260c","url":"tw_stocks/00850.json"},{"revision":"66df74448a2094c33a0e0e8441f7148a","url":"tw_stocks/00830.json"},{"revision":"0c1900e34a76f256d69362b92aaa3e68","url":"tw_stocks/00783.json"},{"revision":"2feae291a7afc777ee5336961f85eecc","url":"tw_stocks/00775B.json"},{"revision":"558fb6e4fa49b5fdd5fe4fdc7281189d","url":"tw_stocks/00771.json"},{"revision":"aab30cf12d4517bab22052d6d80c5946","url":"tw_stocks/00770.json"},{"revision":"1161d5c82a750bc0500492bfc1eeea55","url":"tw_stocks/00763U.json"},{"revision":"aabbb31b361461cef3ea0dc3df87a676","url":"tw_stocks/00762.json"},{"revision":"6a8b4358a0bcf4057284bed00a5da71d","url":"tw_stocks/00757.json"},{"revision":"7cf5ba3100101543bc75280c058aade2","url":"tw_stocks/00753L.json"},{"revision":"d82870f8af4eab72ff3991c9af5716eb","url":"tw_stocks/00752.json"},{"revision":"3ac48f0c7a3e8effeda5d412e2587a58","url":"tw_stocks/00739.json"},{"revision":"2a4c77bc944e1fdd49e23b17094d96b9","url":"tw_stocks/00738U.json"},{"revision":"3825b974d6e1ea877ea92bd0cd15971d","url":"tw_stocks/00737.json"},{"revision":"d143677c6cfe11ea355f0c1d58ca1a09","url":"tw_stocks/00736.json"},{"revision":"281490b2374d2dd3f890e19ed3de22e4","url":"tw_stocks/00735.json"},{"revision":"d0122c49caa3b0de80468f55da5c22b8","url":"tw_stocks/00733.json"},{"revision":"4e0712101dc5492f728ce4d658d6bda1","url":"tw_stocks/00731.json"},{"revision":"6fb2cd44716de918a970c1b565f950c6","url":"tw_stocks/00730.json"},{"revision":"032aad9d4a83a0a135c46b2a9c752352","url":"tw_stocks/00728.json"},{"revision":"0c96ff22cdbcfb246d95a13e2ad591e9","url":"tw_stocks/00717.json"},{"revision":"211843a2b7733ffb7ddefbb7ebf67626","url":"tw_stocks/00715L.json"},{"revision":"91cfe560e09c38f8926da95e56359c61","url":"tw_stocks/00714.json"},{"revision":"e9ab6d251bdc3348f64120a8dbd76d26","url":"tw_stocks/00713.json"},{"revision":"76dd94edf2d5a56241373eff44468641","url":"tw_stocks/00712.json"},{"revision":"5e113a4ebead4dcd4b06bc8a7d3f4c2d","url":"tw_stocks/00711B.json"},{"revision":"3b2cb316c01ed335dd2ba7bd8997c629","url":"tw_stocks/00710B.json"},{"revision":"ae32d0841d249c6a7266103bf622312e","url":"tw_stocks/00709.json"},{"revision":"deaf0e2cc585527be7fc2c32e2a1550a","url":"tw_stocks/00708L.json"},{"revision":"5d9425155c982f97140e1aae76a632e2","url":"tw_stocks/00707R.json"},{"revision":"0cc7a66d9213fac55006f5de32eb27d6","url":"tw_stocks/00706L.json"},{"revision":"6e7b8a147758b4815f89469d3610b26f","url":"tw_stocks/00703.json"},{"revision":"a066d112dd40bad53e424a16ae486d61","url":"tw_stocks/00702.json"},{"revision":"60ec42a7b3bb43a45d74c9d225544b7b","url":"tw_stocks/00701.json"},{"revision":"5042e418489817cb585e00dfce0ad0a7","url":"tw_stocks/00700.json"},{"revision":"4fdf1824162d697c84f56ddcae5316ee","url":"tw_stocks/00693U.json"},{"revision":"6cfd419122051a902e66c040e665bdc2","url":"tw_stocks/00692.json"},{"revision":"222aa8bcb655918ec35eb5df4ebd9db8","url":"tw_stocks/00690.json"},{"revision":"ba443c6cdc805221c04b8b0fd5dd0c23","url":"tw_stocks/00689R.json"},{"revision":"9fdf5bc0cedd2c6982e96acb125b3cfc","url":"tw_stocks/00688L.json"},{"revision":"1524c59c8f960860c93765ae3e460341","url":"tw_stocks/00686R.json"},{"revision":"cd72ffb086a447c08942960680e0c8a0","url":"tw_stocks/00685L.json"},{"revision":"c760c530aca4847df43e5dd1dd62924b","url":"tw_stocks/00684R.json"},{"revision":"9a4c87400671134d17af9ca99d45c212","url":"tw_stocks/00683L.json"},{"revision":"bfca1188ffb2597a16fdae226a1477ba","url":"tw_stocks/00682U.json"},{"revision":"8f986ca3de9171e73f8633419356c99f","url":"tw_stocks/00681R.json"},{"revision":"ad833274dbe052f43aa1c457edb15286","url":"tw_stocks/00680L.json"},{"revision":"a6ffc6ca9527f553f9249df608a1607f","url":"tw_stocks/00678.json"},{"revision":"c1e0287a562eb7bf2d022847509f1839","url":"tw_stocks/00676R.json"},{"revision":"0df8499103926450140707634895a85c","url":"tw_stocks/00675L.json"},{"revision":"ab597fc133a8bf62fa1c8ce51295ccb9","url":"tw_stocks/00674R.json"},{"revision":"7ded5b711f66a2c96b1693bc48c7425d","url":"tw_stocks/00673R.json"},{"revision":"232af1e25c2f62a53dc3dd68adef3121","url":"tw_stocks/00671R.json"},{"revision":"9f4827ed3173d6db94679b8f7b5afd91","url":"tw_stocks/00670L.json"},{"revision":"6abed5be7e00ce462a0a824a2c408892","url":"tw_stocks/00669R.json"},{"revision":"75fbe13439503c7112d588a6dab74f67","url":"tw_stocks/00668K.json"},{"revision":"c37b0d12dfd051d61f390a73204e8412","url":"tw_stocks/00668.json"},{"revision":"104c4649e9fe83d73ab60535afe1d0d9","url":"tw_stocks/00666R.json"},{"revision":"cf21ba93431935df8d1925c827160537","url":"tw_stocks/00665L.json"},{"revision":"bbd4353796d35da30be929e87b9a9772","url":"tw_stocks/00664R.json"},{"revision":"2cacd4d8554ecede33be802a0663a183","url":"tw_stocks/00663L.json"},{"revision":"dfbc1ddb5aa840fcded9f9c836dad7c6","url":"tw_stocks/00662.json"},{"revision":"28aab335b9b3f035bff0787f5fbcdc4f","url":"tw_stocks/00661.json"},{"revision":"8286effcc112bb007cfbd66b56de0c9c","url":"tw_stocks/00660.json"},{"revision":"d0540bbd84150a030023dcf16565b36c","url":"tw_stocks/00657K.json"},{"revision":"8491e73793076ec2aa2b8eb90ed37bdf","url":"tw_stocks/00657.json"},{"revision":"7c2b194f6e0987833d35dc94d0d8d5ca","url":"tw_stocks/00656R.json"},{"revision":"6f3847750df02a1116410234602878c0","url":"tw_stocks/00655L.json"},{"revision":"5a543bf70487d967d58634fd4bc8da18","url":"tw_stocks/00654R.json"},{"revision":"5c48dd0a19a0e7a8432ec534a7e1e343","url":"tw_stocks/00653L.json"},{"revision":"198ed4f16f5e9742d695af98defb8a67","url":"tw_stocks/00652.json"},{"revision":"18a4c4bfea962fc7612354647eed4267","url":"tw_stocks/00651R.json"},{"revision":"293ffd55c83f4176c3e5e1817f23301d","url":"tw_stocks/00650L.json"},{"revision":"ef3243746eef9c23964b175882c59276","url":"tw_stocks/00648R.json"},{"revision":"3b3a3ee1126329de97be27db624ba3ac","url":"tw_stocks/00647L.json"},{"revision":"57ecbdf335d6ec59210d1d229ab482cb","url":"tw_stocks/00646.json"},{"revision":"57a7338ebbacea37bac7141d3a2fb85c","url":"tw_stocks/00645.json"},{"revision":"b2e53480537cf02808a16649ec28b600","url":"tw_stocks/00643K.json"},{"revision":"945e0603602802094330990dd6c672f4","url":"tw_stocks/00643.json"},{"revision":"a7188392eccf9781e85de9687a4cdc73","url":"tw_stocks/00642U.json"},{"revision":"80991eff555eafaff5d31b67c26c42e2","url":"tw_stocks/00641R.json"},{"revision":"cc431c61d8f991c54b65e15758496187","url":"tw_stocks/00640L.json"},{"revision":"9acdffeae6a10ea23ab5925af17091f3","url":"tw_stocks/00639.json"},{"revision":"e886330eb316269c9be4f360782ce1c1","url":"tw_stocks/00638R.json"},{"revision":"9cc435b69986250917e70fddcb7cb04b","url":"tw_stocks/00637L.json"},{"revision":"18f8cdab21143bbb6b8b7f26478d029f","url":"tw_stocks/00636K.json"},{"revision":"dcc2a601d40b26b62aa73de1b12f3011","url":"tw_stocks/00636.json"},{"revision":"965e73028a4c77a3e426fcaee425b73f","url":"tw_stocks/00635U.json"},{"revision":"0a90603c1a235a9664f62f3f9325e5c7","url":"tw_stocks/00634R.json"},{"revision":"84fe00a56cbdc108cc4b8092753c45a8","url":"tw_stocks/00633L.json"},{"revision":"534e27a1ebfb2ae3c6ff53694ae4647b","url":"tw_stocks/00632R.json"},{"revision":"a040f9d41dc3400fefd56c69d8890865","url":"tw_stocks/00631L.json"},{"revision":"7a1befd559f75384ec873df6947f731c","url":"tw_stocks/00625K.json"},{"revision":"c4ac3a2f707ff2deb71747850416de51","url":"tw_stocks/006208.json"},{"revision":"3b1b1e73cd22bef5cf09836d2109b9c8","url":"tw_stocks/006207.json"},{"revision":"ecff73175cca6eea0f783afd1577d1c0","url":"tw_stocks/006206.json"},{"revision":"0f927d27d8f9286a6fe233a50578f39b","url":"tw_stocks/006205.json"},{"revision":"488f73a70b16232e10972ac9da6df968","url":"tw_stocks/006204.json"},{"revision":"b0b9f6cbde2c476276a33e38392e7d6c","url":"tw_stocks/006203.json"},{"revision":"fe701c3891bbadbaca84652f09f4e5e6","url":"tw_stocks/0061.json"},{"revision":"18151953084d74d793825d425b6d9e94","url":"tw_stocks/0057.json"},{"revision":"c53f94a96c69cdefc01fa7f1590d1faa","url":"tw_stocks/0056.json"},{"revision":"6180d340b1e5cde5bb41cd9d37ae51b0","url":"tw_stocks/0055.json"},{"revision":"9876a3861efb705f29b4b694307b4bd7","url":"tw_stocks/0053.json"},{"revision":"fdc7a32a34251bb16d276202fe023b8d","url":"tw_stocks/0052.json"},{"revision":"4a141defbefff9cd40512be2eef5ed6b","url":"tw_stocks/0051.json"},{"revision":"20a63d5ab9522e0e1a7472159cfa3c52","url":"tw_stocks/0050.json"},{"revision":"84e60e4c6ad16ab2f2eb652723babb78","url":"resident/me.html"},{"revision":"d5aaaabc89b8f9e21a9799903150fdf6","url":"financial/rebalance.html"},{"revision":"d868ef1e46500e8644ad6dd4982d336a","url":"financial/cashflow.html"},{"revision":"2bd1971fc719a126febbb60bcc88296f","url":"financial/balance-sheet.html"},{"revision":"10c7293d623c21fc9a1c364ffffe3147","url":"finance/tsmc-industry-trends-analysis.html"},{"revision":"e0f83448d7a0a864a2e4f98dda8a4e4f","url":"finance/taiwan-stock-weekend-report.html"},{"revision":"75f6495a0ae759343ae61daf8c7271c2","url":"finance/taiwan-stock-crash-warning.html"},{"revision":"cd24206f6ddb209189b9186192be8dca","url":"finance/tags.html"},{"revision":"91eac0766be9678b904b17b4dd098f43","url":"finance/passive-components-ai-stock.html"},{"revision":"be0956f93f24a53757f674c8cfd0527a","url":"finance/finance-section-created.html"},{"revision":"1f7fc00151d058cc395a16876d05e7d7","url":"finance/authors.html"},{"revision":"0f377e2a654fb0ab8eb4d621375fbfd3","url":"finance/archive.html"},{"revision":"b06405110639522055755da1656653e7","url":"finance/ai-635.html"},{"revision":"b875435a7ca3e7416a8d115478b5b416","url":"finance/tags/newsletter.html"},{"revision":"64f8592328691d6bcd4f2c90ab7ea5be","url":"finance/tags/finance.html"},{"revision":"451eae9b1655d944be554803f0668262","url":"finance/tags/announcement.html"},{"revision":"0715867564498d928f77512a58e697e8","url":"finance/post-453/index.html"},{"revision":"e9be0cba2b69d49d1829e9ec975175b6","url":"finance/post-203/index.html"},{"revision":"a3576a4448405728bdacb46ccaff2d16","url":"finance/ai-286/index.html"},{"revision":"8a8b45f137fd964c3f8a2047d8088d52","url":"finance/2026-02-28-307/index.html"},{"revision":"147b58a56aefe35877b8d0249aac09df","url":"docs/tags.html"},{"revision":"81153dae5f770489f9dc06f7e4f39874","url":"docs/intro.html"},{"revision":"d84aa43bcc7f70b95e0c8e6b976758a1","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"fde3496aac1e2231b6ee733a9e8cec7b","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"c01e2c3dec3a939551895361a9be25ff","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"e279e453e0111550de9c1fdfff6bbf31","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"f7356272081223a1eddf0fa0c9eac3f5","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"43072dc4e92447ace5cffb695f6000e3","url":"docs/tags/模型控制.html"},{"revision":"f4ac3056993e1efbd2df5abc502f5278","url":"docs/tags/top-p.html"},{"revision":"1d31faa971b72a82f3e3dda65ea7e48b","url":"docs/tags/tokenizer.html"},{"revision":"89c35c69c7cc168d694b6df495541236","url":"docs/tags/temperature.html"},{"revision":"1724eaf1fec01ad1c6f4336fc894e0a9","url":"docs/tags/technical-docs.html"},{"revision":"3474b3daa4b6de165fe4fc005186d1be","url":"docs/tags/nlp.html"},{"revision":"17a6967c9db2ae7c6e1fb1e0f64832e8","url":"docs/tags/llm.html"},{"revision":"ba5d29d4079072777c7e44d854c0ec79","url":"docs/tags/git-hub-copilot.html"},{"revision":"bb76dd81345733453685939b34bf70b7","url":"docs/tags/generative-ai.html"},{"revision":"224ef95ed0bb10158f976feb05928429","url":"docs/tags/development-tools.html"},{"revision":"a8e876476d03bf76d3ed3f1c76fa032d","url":"docs/tags/cli.html"},{"revision":"14891fe99ef1acc712a016839a4a98d6","url":"docs/tags/claude-code.html"},{"revision":"d2061e32acfa17e0244d98817b93e2ae","url":"docs/tags/bpe.html"},{"revision":"1e8d39de0886e7df2e8b317ebdaeed81","url":"docs/tags/automation.html"},{"revision":"1c1f754e58d21835a5a2345453035610","url":"docs/tags/ai.html"},{"revision":"d032f3b22b918ee67ea73cb3ffffd3a6","url":"docs/tags/agent.html"},{"revision":"791fbe2e0ef9e351f3b466595befbb51","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"2db699ec18e1b5c896e42542b3041fd7","url":"docs/skill/gemini-skills.html"},{"revision":"2c44c2b7b8ecc7799aff13ff71fbcd87","url":"docs/skill/claude-code-skills.html"},{"revision":"cc43195525516701a47f603822d6aae0","url":"docs/python-workshop/python-init-file.html"},{"revision":"efc57e71bc1d7ab90a8e684bc5ef0fc0","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"e30e444d745be6856b4285094cab0b39","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"6e88b904acf6caa4743d5c1fd2d9a78b","url":"docs/claude-code-series/skills.html"},{"revision":"948b42dc5e1fba66b7f220628604b916","url":"docs/claude-code-series/monitoring.html"},{"revision":"27ea363d2ff6be857441806f57706694","url":"docs/claude-code-series/getting-started.html"},{"revision":"7a62747422130aec987de2a9b26e3669","url":"docs/category/發文-skill.html"},{"revision":"38228c3e2d34fcb320b5d195e54a42ee","url":"docs/category/戰情室元件-skill.html"},{"revision":"b109f632ce8e7aafb80c5fffe294af8d","url":"docs/category/skill.html"},{"revision":"a177efc3a64cfd5b32d2fb711f221ffa","url":"docs/category/python-workshop.html"},{"revision":"4f35d31ae59bf7f769e24cc432b0a480","url":"docs/category/claude-code.html"},{"revision":"8a0a7e01cf56caeba2617bce8b1a9d41","url":"docs/blog-skill/news-rules.html"},{"revision":"2429f2d9996d9307a07c523c6b544c22","url":"docs/blog-skill/history-rules.html"},{"revision":"242019ce56725c9b466c5113b4d5cfc3","url":"docs/blog-skill/finance-rules.html"},{"revision":"5db1deabd3808c633ba6e1298f257359","url":"blog/蛋蛋村誕生.html"},{"revision":"66df6a0e2deb434beb50f61507cf4ebf","url":"blog/tags.html"},{"revision":"ab52ade10e954a72f6f974b992c79441","url":"blog/authors.html"},{"revision":"60078520dc8ee13a825fec401aa9cb18","url":"blog/archive.html"},{"revision":"07fc4caaf52bcd29ad359b0a4327d968","url":"blog/2026NewYear.html"},{"revision":"95d9ec0d64dfd2d61a296fbfd1ea1c6a","url":"blog/tags/蛋蛋村新聞.html"},{"revision":"b84036de135ca4fbf82dae0fd4add4f2","url":"blog/tags/節慶.html"},{"revision":"ea19dd0561fc58e3311b684a78883f72","url":"blog/tags/新年.html"},{"revision":"7f965e1530c416153b7593c5191db63a","url":"blog/tags/技術新聞.html"},{"revision":"164cdff1311285698a4116a945adfc05","url":"blog/tags/village.html"},{"revision":"99f5dfd8529a88d6b2e2c0db010f9473","url":"blog/tags/news.html"},{"revision":"c75f872485af2cdfd27e0229a8c72e5b","url":"blog/tags/docs.html"},{"revision":"1b11211beafedecdbbb955085e070ff4","url":"blog/tags/claude-code.html"},{"revision":"6db4e2e880217de37393c2c736d67890","url":"blog/tags/announcement.html"},{"revision":"e38e5838fbf41bbeb7862462253c8706","url":"blog/2026/02/23/2026-02-23-news/claude-series-announcement.html"},{"revision":"a9d897f66b5e0c07be91bb19756d220a","url":"auth/callback.html"},{"revision":"fd30ee97cdea702b8d219262db6dbdd4","url":"assets/js/runtime~main.e538620d.js"},{"revision":"135c9dba6674c7f2af8821971886467b","url":"assets/js/main.e37ce9bb.js"},{"revision":"15ebc6aac921b55eba0b53bdf9f306eb","url":"assets/js/fa878c7a.2bf652e0.js"},{"revision":"0f11ca6cd350bf767b07585651e8a97d","url":"assets/js/f85166e8.46873a19.js"},{"revision":"e9a560e1631338b4b2df0a38bead2dab","url":"assets/js/f81c1134.7be45fa8.js"},{"revision":"1c266f47bac5f00758a4773b970903e5","url":"assets/js/f71290dd.fd9995c9.js"},{"revision":"55106d1d50a6c95bc2aa009a808b109c","url":"assets/js/ef8b811a.76c51217.js"},{"revision":"a0ce3e406cc99dbbafcd32fa31a07109","url":"assets/js/ec1e3285.04f75e39.js"},{"revision":"ed6c5838fd35827eabe8f985420fac89","url":"assets/js/e88c4a9c.6fdcee83.js"},{"revision":"141828f3dc0c604c65fdd6f3ccdf08a8","url":"assets/js/e86a5a75.86aff0e4.js"},{"revision":"60b2c8a3b74015b753023ee329437768","url":"assets/js/e787448d.66f628fb.js"},{"revision":"a4ab82928b4a1bf929727addc79353b4","url":"assets/js/e4c94ae4.7000dc00.js"},{"revision":"b4464ec4be41e76d36bdf65654260505","url":"assets/js/e1dd3c3b.19a2e21a.js"},{"revision":"f3d256ab19dea9c474abedead6f842fc","url":"assets/js/e03056a8.065c13f0.js"},{"revision":"eadb051c044936f31248d27c23993808","url":"assets/js/dfea6eb9.bada7d92.js"},{"revision":"a7d0881b69dea34e14c666be19996967","url":"assets/js/df53aada.b73bb43f.js"},{"revision":"7e83e84f391cc8642c7417b4ae18aeb5","url":"assets/js/df203c0f.41bab8df.js"},{"revision":"038a47d24e3d83cdb9bd2cf01b6a3619","url":"assets/js/dd5b562f.6d48936c.js"},{"revision":"00eba4084be130ab9a4f2ed384526868","url":"assets/js/d871e2e9.623af483.js"},{"revision":"7d7176bb771dff17f539d43dcef45e38","url":"assets/js/d5d47070.6bc0bd98.js"},{"revision":"bef90acb136b2db12b817fd568f87963","url":"assets/js/d5ce7688.cf1ffa05.js"},{"revision":"fead42a4fd2ad431daaf3dc15269b8ca","url":"assets/js/d55a815e.5e029f0c.js"},{"revision":"bb03602ea6013da2acc8faa6ca351cef","url":"assets/js/d2682be5.18b9b59e.js"},{"revision":"7f16d948a193cf1ae0297344747f40dd","url":"assets/js/d0c9de85.ec63fda3.js"},{"revision":"d75a53db168c7a6efa04bf8f4d1f2273","url":"assets/js/ccc49370.4acf66f3.js"},{"revision":"6fa1b0a1ab56b0d2ec41ff6f2539b7fd","url":"assets/js/cc221b30.f520f5d5.js"},{"revision":"dea243d5031b34d94e913187d0da4b97","url":"assets/js/c7a70e28.f39ac707.js"},{"revision":"55e574af659eb32effa310eac833c6ff","url":"assets/js/c3b1af5c.d2808474.js"},{"revision":"f13cbcd0533fc889cce1dd611923d4cb","url":"assets/js/c15d9823.4971e238.js"},{"revision":"42822aa294f610bf051bc911c2f5f846","url":"assets/js/bfe3b7d2.5b15a911.js"},{"revision":"5860a1a0db5d917b2738407b9c059c78","url":"assets/js/b95eaafa.b52e4eb3.js"},{"revision":"56c7b1edec8b7aa5ae971dc55fb3efbb","url":"assets/js/b3f074c6.7aab1a39.js"},{"revision":"124a4c7bb87b74f6e183a55f29683341","url":"assets/js/b283ca86.f057b38f.js"},{"revision":"42d9ac42c25f1912d8e44ae4dbf81743","url":"assets/js/b046c1ff.17f4be2f.js"},{"revision":"0c027c018c9ebdaa82247582268988eb","url":"assets/js/aeedf315.a66b8a58.js"},{"revision":"32261545ca8f549ec3fa75dc8d8abb2c","url":"assets/js/adb00d9a.7f94a47d.js"},{"revision":"58eb2b1552a10201f158f5d5874f7553","url":"assets/js/acecf23e.4f5cb8d8.js"},{"revision":"c5c337cc35b4e21b7bdb5a7bfebcebad","url":"assets/js/aba21aa0.8b0e3441.js"},{"revision":"a1c94b123e5900bcec06ebdce6ed9d3b","url":"assets/js/a94703ab.53f31309.js"},{"revision":"2d4c76fa5d70eed1543b74be26434473","url":"assets/js/a7bd4aaa.da033f84.js"},{"revision":"53eb2646dbd0ee9611633cfb2dbfaf48","url":"assets/js/a7456010.c3dc3348.js"},{"revision":"fb4654e923d23390ccf376676c3f3200","url":"assets/js/a6aa9e1f.0d7c5266.js"},{"revision":"91c4f10a16d9f1d3af8bfe1adc5a587c","url":"assets/js/a6038fd8.554c31e2.js"},{"revision":"70221b1e9740bba7ed7f53dd917972c4","url":"assets/js/a1fbcaf1.c75f5623.js"},{"revision":"33d1d2155db99fd8bf302b6e622de762","url":"assets/js/9e4087bc.a83212ab.js"},{"revision":"000cb776383241f8ac2a9eea1d3af208","url":"assets/js/9d86e7fa.f5516573.js"},{"revision":"a6bde9dbffba8195a7b72a87334dcfb1","url":"assets/js/99d3b34a.56d436bb.js"},{"revision":"9de100c367f6135eaadee7ee43266503","url":"assets/js/9961.4869357a.js"},{"revision":"88ec8cea3100b43d3c1efc0076c91b79","url":"assets/js/987.3261d724.js"},{"revision":"2e38518a16af069476b600f5b7c77e75","url":"assets/js/9779.4cefc5f2.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/9674.bb27ff20.js"},{"revision":"0e7d34a9ffdb81cd72a0948ce314f2cc","url":"assets/js/9650.66859f2e.js"},{"revision":"e0a26b5e2c07ebeba3a0c876ee750666","url":"assets/js/9463.7b8ffcda.js"},{"revision":"a471e3b20d62483e282bc3bc30496bac","url":"assets/js/940b0b54.455f9e70.js"},{"revision":"e920a770e68fe9339763a77b0ea3b6b4","url":"assets/js/934.5e9ace63.js"},{"revision":"7d6841d13be73c98356628a0633d4b1e","url":"assets/js/9335.fccaaa9f.js"},{"revision":"ea88bba5b5ae5facc3324b69a06dae34","url":"assets/js/9282.3a7bf7ad.js"},{"revision":"34e292cb5776ab06d6539d377e4f83f0","url":"assets/js/923ed0b3.10cf0d3b.js"},{"revision":"92ed7b7ecb34386c4eb4ca1788b1b04f","url":"assets/js/9170.af9a8158.js"},{"revision":"5ccc471b8806094975e5d5e11583536c","url":"assets/js/9094fa5d.0eae3621.js"},{"revision":"119cf6a8b97f490192a36a9fb05fc0af","url":"assets/js/90326f8c.de64c1cf.js"},{"revision":"60a3a1c87e5f634f0c44ece3fae3ae4a","url":"assets/js/8c20996d.9dc48257.js"},{"revision":"341cfdc51ab98e4b1b487af950adfce5","url":"assets/js/8be8ac58.dd668cea.js"},{"revision":"60febb98d3153fcad87d55cc64aa7594","url":"assets/js/8af61f6a.1b5c60c1.js"},{"revision":"39640a6a8d1b26151d270c46401a649a","url":"assets/js/898514b1.d6ed8d65.js"},{"revision":"35f1c53454abb53c370006785a84e7d1","url":"assets/js/8910.253f1d79.js"},{"revision":"360ac5df5a4b371434356313d5c891d6","url":"assets/js/887798b8.94e27d62.js"},{"revision":"63c7c26a16a765404db742aa4b63e88b","url":"assets/js/8800.9ec5dfe8.js"},{"revision":"6b3d060607e1e8637762c83e0d76a9ff","url":"assets/js/8793.88bbdd65.js"},{"revision":"ec9d20e46e18071a089197b2ca218aaf","url":"assets/js/853e1e42.06bb1aa2.js"},{"revision":"d1c09de1e3ece5850df32e268271f7b0","url":"assets/js/853ca2df.3dcee74e.js"},{"revision":"b5bd78960ebe25a6b6dad8e58bc3efb0","url":"assets/js/8368.62be58f2.js"},{"revision":"7bb56b286364e0627c602d62c651cd1e","url":"assets/js/8350.331f35bc.js"},{"revision":"00402ac9cdd2466b26bb546735a550ee","url":"assets/js/8309.a4d02fc9.js"},{"revision":"7346776cd3b086b1f013b598dd6d8905","url":"assets/js/8252.9d7adf83.js"},{"revision":"4ca48d806da3b8f49afa0d9d8523b8cc","url":"assets/js/8206.900f98fc.js"},{"revision":"50de3333b24ea0e2cd06cc14997bc284","url":"assets/js/818.e89c87e4.js"},{"revision":"3acb7338d8a920eed4fd3c8c6f754d1a","url":"assets/js/814f3328.6729d7d2.js"},{"revision":"9270a8539a0b0af3c5f8492d5a79f1da","url":"assets/js/7fbc1a25.c992694a.js"},{"revision":"d667fe7376111bf120493bf2b818f909","url":"assets/js/7ce5d7a1.58d9bdb6.js"},{"revision":"8744f0454f48e6c1d0b5e1ea0740d999","url":"assets/js/7961.dd9a89bb.js"},{"revision":"e183f3d871d1cc80b228627f634115f9","url":"assets/js/78d114c2.3881ea0a.js"},{"revision":"9dfffc44c11c03dc665fba71b3722637","url":"assets/js/7851.7b00d01b.js"},{"revision":"7625e711135ca6101fd92b4edc0cbd9d","url":"assets/js/7714.723cd0e3.js"},{"revision":"39772b663b3709f69d1bb93a956423dc","url":"assets/js/7658e121.51e577c2.js"},{"revision":"57eee2f0eaf4e3e8611502021e5f6575","url":"assets/js/740.7897cee8.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/7293.bb27ff20.js"},{"revision":"28121858a6af620d8944f5b436f2a321","url":"assets/js/7284.8f991185.js"},{"revision":"b072c1c9a949e55aa74298d5184691dc","url":"assets/js/72044931.87ed0af1.js"},{"revision":"2460a579ffa671ed57b488792c148e74","url":"assets/js/7160.0eff791d.js"},{"revision":"c14acab7bcc547df9f0ba480d5717872","url":"assets/js/7110.dcff7519.js"},{"revision":"f2d14cc3342532b64488a29f9cea4f71","url":"assets/js/6e731933.d7caa690.js"},{"revision":"fc42429899ad2ea8eb7becbfb06472c9","url":"assets/js/6b65cf72.eed0185d.js"},{"revision":"ac51851f93d46f79d621f49b302fac6e","url":"assets/js/6965.a941c0eb.js"},{"revision":"05e486ff504f5abd6169ad661cf417bf","url":"assets/js/6875c492.e2f0ab14.js"},{"revision":"882113f67e3b746ff788c7e54dd1b87f","url":"assets/js/6659.b1ed35b2.js"},{"revision":"cc0c6423141a0c138f06e97cd07789f7","url":"assets/js/6517.1e01b8b6.js"},{"revision":"e976cf2f675c7582d5a076a1fc21cab4","url":"assets/js/64c24869.043012cb.js"},{"revision":"10ccaae9e9aa6e554d2c06a9cd198d41","url":"assets/js/6454.1c56b0e7.js"},{"revision":"de04774710d5cc94d54128fc124483df","url":"assets/js/638.89d775b6.js"},{"revision":"b4194552a15c0f9f1d2ba2d4fa737c10","url":"assets/js/621db11d.147ecc2e.js"},{"revision":"fc0c03202b0b19fbfe752b94202c4d04","url":"assets/js/6171.5ee9ad6d.js"},{"revision":"3338c39d639e5773e46afd50b068b8e5","url":"assets/js/607acb04.1ed125e5.js"},{"revision":"ee408a3c48ff6ec403400292b65ad0e7","url":"assets/js/6046.15dcf4cf.js"},{"revision":"786eb955c72b6c73ad4d77ac31298442","url":"assets/js/5e95c892.6f846709.js"},{"revision":"d32d4654077dc7195cdd784d4673cd57","url":"assets/js/5d785d74.2470c9e5.js"},{"revision":"48042c17a85e2246972301da3810baa6","url":"assets/js/5d6f837a.02d07634.js"},{"revision":"16bc67d14b9d290d85b07857a5727ac7","url":"assets/js/5a9666f9.aa8aaa13.js"},{"revision":"38f4db3f7bf966b5880d0f85e457a8ee","url":"assets/js/5989.9af4af00.js"},{"revision":"5960a206758a5532cce0d3a97fc736d1","url":"assets/js/56fce896.c04d00cc.js"},{"revision":"d3000eb0e3c28758857946e7c78d1ee1","url":"assets/js/5679.38bc55a2.js"},{"revision":"23464be13b092b69eba3ebe3c6da6a05","url":"assets/js/5616.7cebadb3.js"},{"revision":"651aaac43fc0e90a5956dc8bc0d954b9","url":"assets/js/5602.87978ab4.js"},{"revision":"ca9c7fa8d9b7e90f6f4c4683f2c4cf36","url":"assets/js/5591.c95d50cb.js"},{"revision":"dd4eb6724d8fc88d042605c210a0b6da","url":"assets/js/5564.af03099d.js"},{"revision":"cf09d1bcaefc064c07318a0da75cfaf6","url":"assets/js/5091.0fbf91cf.js"},{"revision":"4bb5d4152e1c7bc32862dabb10ef560c","url":"assets/js/5010.bf8c7d7a.js"},{"revision":"44f8f38b110af61dd93980cef34b1970","url":"assets/js/4f033264.c6e01f0e.js"},{"revision":"70d489d3de0e9a10f49add6a281066f1","url":"assets/js/4bde1fca.2d0e84c3.js"},{"revision":"c327ed68a118227074833eb2f0a1fdb4","url":"assets/js/4962.b0e19128.js"},{"revision":"d40978ec50ccebd9761b7b0d29a8e367","url":"assets/js/492.e540df4a.js"},{"revision":"29fa84822a4dcab883cad2d4594919df","url":"assets/js/4854.075cca66.js"},{"revision":"e5e3289cdde76408035e6ef750fc04d2","url":"assets/js/4810d89a.a01df079.js"},{"revision":"3d97e1e9b0b8bfbbe4cc4b2c42b6e020","url":"assets/js/47f9c915.e2b01692.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/4436.bb27ff20.js"},{"revision":"0aeb7eaeede971e251df65d78a9f080e","url":"assets/js/43ea09b6.fdf83d54.js"},{"revision":"0c3223ecf790b7ab27951d376323b5eb","url":"assets/js/4201.1dcf06f2.js"},{"revision":"6d876a009b185506453ddbc9a68c04f3","url":"assets/js/418.683741cb.js"},{"revision":"e67c6962178e0d20c5c3d7f0052c5c6e","url":"assets/js/40ccdb3c.c0d2b653.js"},{"revision":"9b16a6171ea0ad02d5431e7b18d967f5","url":"assets/js/4087.7eca1bfc.js"},{"revision":"5f848a22d1713674c7da48df2a6a5a36","url":"assets/js/3f29ba7c.9626bbeb.js"},{"revision":"42413fec9f680958a712116b2b2e2f8a","url":"assets/js/3ee3fb84.f9c51849.js"},{"revision":"c9f9934b2d888f7d6a1e2c700eb6ec3c","url":"assets/js/3ece3575.3b38bed8.js"},{"revision":"5999807dd8862de6919156b5dbff5a4d","url":"assets/js/3a2db09e.be45585b.js"},{"revision":"308cdbf82f6767119fa5be74d6306162","url":"assets/js/3969.565b1773.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/3960.bb27ff20.js"},{"revision":"fc211dd98ecce893511bad9e7eb8c971","url":"assets/js/393be207.b36de42f.js"},{"revision":"8805672a08ab242d704ea041b27ad544","url":"assets/js/3856.982caaa2.js"},{"revision":"02cf26ef9fb53c48f506b7bf0274c511","url":"assets/js/3720c009.b8a03e39.js"},{"revision":"8bcc3b1b686f6e5d74392ae57be8f4ba","url":"assets/js/36f337b1.d197c316.js"},{"revision":"55b2a35cb67e50a7d5c53003e7d96daa","url":"assets/js/36994c47.634734bc.js"},{"revision":"aae15f1cccd633f4dbfb9e681f8ddc77","url":"assets/js/369.6b228c22.js"},{"revision":"bdbe9c5059613a5a119034b7e10ddbed","url":"assets/js/3616.2abd5f36.js"},{"revision":"a543ca34259efcfc185856d1f9ab7e20","url":"assets/js/31e93ad8.1ef405d2.js"},{"revision":"1868fc816a78c5fbff13c124d28337cd","url":"assets/js/3197.900e3f82.js"},{"revision":"d9c4fd929c5ac776a25b904a1a9eded3","url":"assets/js/28ccb8e2.3bf79d7b.js"},{"revision":"2d342b8d57c51236dbeea5507ca39f43","url":"assets/js/27e16d5c.bd54569b.js"},{"revision":"57d1886cc54c24d40e8b46160e95347a","url":"assets/js/2710.53bc60c8.js"},{"revision":"56caa3c504aea460018e66fe9a891498","url":"assets/js/2697.ba08ef05.js"},{"revision":"db87b0a8ce6a230318a717b335ec2a31","url":"assets/js/23d26d3d.618e2f9b.js"},{"revision":"5d49d8058dafa763847476267b217601","url":"assets/js/2399.14df9d0f.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/2055.bb27ff20.js"},{"revision":"3ee9dff7b14985160e9b5f53e15066bb","url":"assets/js/1f391b9e.b3d0d2aa.js"},{"revision":"0586d6c52e83a0efac8447b456dc54b0","url":"assets/js/1df93b7f.d5a69844.js"},{"revision":"7b0f149732ec9e2766b61e284532dfe6","url":"assets/js/1bd186b5.d722e6fd.js"},{"revision":"e9f7ecb2c5e2589fb60da4540b59ae69","url":"assets/js/19408a66.26de6b76.js"},{"revision":"3531d66a93c1f5d8d99b580900ed47be","url":"assets/js/193da79a.9a18bc65.js"},{"revision":"112c3ef111b5513b1577c8aace165444","url":"assets/js/1829.8a3d16d3.js"},{"revision":"3136c181e3043d087c99259dfe598e60","url":"assets/js/179b82d4.b01dd89e.js"},{"revision":"9acc5983ed38256ce41561c8d6822de4","url":"assets/js/17896441.4a86f20f.js"},{"revision":"a459ee672892371602cc595400c6c3b3","url":"assets/js/177ac620.5f5fb7ea.js"},{"revision":"c98bc3cfedce89385ec26a8e9d52414c","url":"assets/js/1634.4e2a758d.js"},{"revision":"7b05c5bbc5b1d900961d183dc2fff140","url":"assets/js/162c7fa0.8bbb574b.js"},{"revision":"a675784be03f21cd7ca8df8df6efd5f4","url":"assets/js/1591.634628f4.js"},{"revision":"722ea18ef8ba5760f19e02ae7ccb6df8","url":"assets/js/1579.bb27ff20.js"},{"revision":"79ab60da29ee00222e21875827ea03a4","url":"assets/js/152e41eb.9e8281d7.js"},{"revision":"f7d0a56f569560ce25d213d3be8e228d","url":"assets/js/14eb3368.123a801e.js"},{"revision":"a46fb9ef5009f0f7bbcd1fed3dc4a624","url":"assets/js/1319c958.37001a49.js"},{"revision":"a1f00ddcf676ad6a3aa87b008689046d","url":"assets/js/1266f974.df173bba.js"},{"revision":"bbeaf94e13211fd9fa1d383b1bc181c6","url":"assets/js/1244.a60124b5.js"},{"revision":"fe5d629ab6f06df5ec782cdd4a5b36db","url":"assets/js/1194.72865e71.js"},{"revision":"5c123f15da449c736a61b5b687ee4c66","url":"assets/js/0e5813ea.98e1aa97.js"},{"revision":"e5c2b14bcd8331e5df46e05d894a6121","url":"assets/js/0e384e19.a71a016c.js"},{"revision":"2ab10aec48b6b1cd45e4cd2ca116226b","url":"assets/js/0b169497.112d44fa.js"},{"revision":"72d4c997431475664195bb25a6abf989","url":"assets/js/055ef20d.dd7446f4.js"},{"revision":"44c9bc910db31a7e61322c1e714fdc51","url":"assets/js/01a85c17.7fa5db12.js"},{"revision":"eb61a294608694b0427982f1957e99ea","url":"assets/js/015a3104.79b45b42.js"},{"revision":"948235995390d3620584fd1783a405dd","url":"assets/js/0058b4c6.b61660b4.js"},{"revision":"da4b115fe9030489a69c429c51b19a53","url":"assets/css/styles.b0383eca.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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