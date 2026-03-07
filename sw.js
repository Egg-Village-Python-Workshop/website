/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/Deferred.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/Deferred.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js"
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/assert.js"
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/assert.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js"
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/cacheNames.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/cacheNames.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js"
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js"
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/getFriendlyURL.js"
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js"
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/timeout.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/timeout.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/waitUntil.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/waitUntil.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js ***!
  \*************************************************************************************/
() {


// @ts-ignore
try {
    self['workbox:core:6.5.4'] && _();
}
catch (e) { }


/***/ },

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/copyResponse.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/copyResponse.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/models/messages/messageGenerator.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/models/messages/messages.js"
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/models/messages/messages.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/models/quotaErrorCallbacks.js"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheController.js"
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheController.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js"
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \***************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheRoute.js"
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheStrategy.js"
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_types.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_types.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js ***!
  \*************************************************************************************************/
() {


// @ts-ignore
try {
    self['workbox:precaching:6.5.4'] && _();
}
catch (e) { }


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/addPlugins.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/addPlugins.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/addRoute.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/addRoute.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js"
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/createHandlerBoundToURL.js"
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/getCacheKeyForURL.js"
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/index.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/index.js ***!
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
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_types.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/matchPrecache.js"
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/matchPrecache.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/precache.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/precache.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/precacheAndRoute.js"
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js"
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js"
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \**************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/createCacheKey.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js"
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/generateURLVariations.js"
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js"
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/printCleanupDetails.js"
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/printInstallDetails.js"
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js"
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/RegExpRoute.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/RegExpRoute.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/Route.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/Route.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/Router.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/Router.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/_version.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/_version.js ***!
  \*******************************************************************************************/
() {


// @ts-ignore
try {
    self['workbox:routing:6.5.4'] && _();
}
catch (e) { }


/***/ },

/***/ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/registerRoute.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/registerRoute.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/constants.js"
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/constants.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js"
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/normalizeHandler.js"
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/Strategy.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/Strategy.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/StrategyHandler.js"
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/StrategyHandler.js ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/_version.js");
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
 * A class created every time a Strategy instance instance calls
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
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
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
     * - cacheKeyWillByUsed()
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
     * of the event event associated with the request being handled (usually a
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
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
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

/***/ "./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/_version.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@6.6.0/node_modules/workbox-strategies/_version.js ***!
  \*************************************************************************************************/
() {


// @ts-ignore
try {
    self['workbox:strategies:6.5.4'] && _();
}
catch (e) { }


/***/ },

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/index.mjs"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/index.mjs ***!
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/index.js");


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
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@2.4.3_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@4.9.5/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \********************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/.pnpm/workbox-precaching@6.6.0/node_modules/workbox-precaching/index.mjs");
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
// https://twitter.com/sebastienlorber/status/1280155204575518720
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
    const precacheManifest = [{"revision":"5d5a44b787877c0fb680d33c75a92bc3","url":"404.html"},{"revision":"d833c59f5a4b136abc4c9de1a5b1dc9c","url":"assets/css/styles.6b84972a.css"},{"revision":"470c2f22cc0a9a00b5131271a39a5cd0","url":"assets/js/01a85c17.acfd6367.js"},{"revision":"e87a35dc7e2a0bd8b0304d9d0297638d","url":"assets/js/0885b367.f6f4834a.js"},{"revision":"a746394df6d8120a783e819d80ae016e","url":"assets/js/0b169497.a75d3d01.js"},{"revision":"6152d8ae860a55f1fd8150885b8adab8","url":"assets/js/0e384e19.ab974f6d.js"},{"revision":"361b1061e7bb321e9db16f4dd2e99d6e","url":"assets/js/1176f194.6d7727b8.js"},{"revision":"e1cb859ec849ea86c9bff75bcc665504","url":"assets/js/1483e95d.b4083f6b.js"},{"revision":"dd68521abbb319a1804cd25a6d604664","url":"assets/js/14eb3368.0365fc77.js"},{"revision":"43abcce0bd6de956824774987857351b","url":"assets/js/1525.2f3b3a23.js"},{"revision":"6ec2c1f78bce5c4a1a5e4e79fa3e1b4d","url":"assets/js/162c7fa0.a4d60709.js"},{"revision":"13c81743ac997545aadf5ce24ea76387","url":"assets/js/177ac620.db7b256c.js"},{"revision":"d882da36d54e19edd7abf629b819be5a","url":"assets/js/17896441.be9b01db.js"},{"revision":"6ca3f0b7b7fece58070b7f60adbebadb","url":"assets/js/179b82d4.a899a5b3.js"},{"revision":"5b4896f4a0c2b6f19bf32ea0bb4de744","url":"assets/js/1be78505.e8a1fd93.js"},{"revision":"33e59eaaf401b3cf19f2683d24401b9f","url":"assets/js/1df93b7f.ac669604.js"},{"revision":"9504ae7486bd6a95f85c966268c2a176","url":"assets/js/1f391b9e.0352c694.js"},{"revision":"4083db2cfc37edee973623289c16e009","url":"assets/js/22ddf6de.19bf9c7b.js"},{"revision":"16f0b2550b831d0df45783a269e7c58d","url":"assets/js/23d26d3d.548ce59f.js"},{"revision":"705b439a39422d02c9777e412b542554","url":"assets/js/283e63f8.0f35bfc4.js"},{"revision":"9368e0a938dbf147d20893c2a5ffa5a0","url":"assets/js/29b92217.8044b467.js"},{"revision":"6ed643c866e8d182a1c3c51d886cc57a","url":"assets/js/2f86947a.2d6714df.js"},{"revision":"145f47b4b7f6654d0ecc5056b2034ed5","url":"assets/js/31e93ad8.6d2ccf57.js"},{"revision":"7c629da5df626d8ae4d4ef2dae673857","url":"assets/js/327.0f7fcc0f.js"},{"revision":"d57ab84199d43b473ba12b0da43b2a2f","url":"assets/js/3498a648.9f8639b8.js"},{"revision":"094c904de06153a6381ec91fea222906","url":"assets/js/36f337b1.7a5e567c.js"},{"revision":"117ea38cd5024281d4d1474e92d89cc6","url":"assets/js/3720c009.30ec5c07.js"},{"revision":"403c8f73bec2878587d8e54787fa0c1d","url":"assets/js/3919a743.effdf34e.js"},{"revision":"e64be6fdac1d888d0063baa911b337d8","url":"assets/js/393be207.084174e5.js"},{"revision":"4552c3139fe67cd6343a315e30b2d52e","url":"assets/js/3b360413.9d22705f.js"},{"revision":"1b1ecdbf718ff9fa6383c09d76cd8c1f","url":"assets/js/412.a6238640.js"},{"revision":"55fda30d1da1c846f4c12dd951e2c88d","url":"assets/js/43ec2458.d1811b60.js"},{"revision":"ee9487043059338909c2cff21aa5a666","url":"assets/js/45ee4689.e4b8cb97.js"},{"revision":"5666ddf71683c1e5dca3c98ae4b1986e","url":"assets/js/4810d89a.1ff9b3a8.js"},{"revision":"ad6351f0e12b1cb14a765794c68c41e6","url":"assets/js/553.01be2544.js"},{"revision":"3d0f923142cfa532aae482c0b9683c6c","url":"assets/js/553.b462f072.js"},{"revision":"c326e9611b9860070bbef8ff11815f78","url":"assets/js/5549.453932ce.js"},{"revision":"a8784729b3ae5ee802aa5b4817f2f732","url":"assets/js/55960ee5.150336b9.js"},{"revision":"f181584ec78b8b4c708914f74f14aff2","url":"assets/js/5708.d7e15429.js"},{"revision":"8c8356932b5f1232724ae7c0a3ec0e43","url":"assets/js/5807.f3475065.js"},{"revision":"692e2b9bbfbd92e353fe4e6095d06059","url":"assets/js/5d785d74.a30b4b32.js"},{"revision":"7e4e3b3923f17c0a852baba22b3304e5","url":"assets/js/61c0e0e9.aec68994.js"},{"revision":"37d8ea92b70732d9d37894da93d2e884","url":"assets/js/637912f1.cc36945f.js"},{"revision":"ee346044ff4dbf114b49bacf8a3b9190","url":"assets/js/648c8a22.cf0faff6.js"},{"revision":"9eba7ac39f6b7fbe2c9a3b95a7d875c2","url":"assets/js/6875c492.bbe80f45.js"},{"revision":"7d1a621b3c1eb7d253839a13569c4c0d","url":"assets/js/69f51295.fdbc7177.js"},{"revision":"fdd96843d8f09137672bb1d89063fd44","url":"assets/js/6b65cf72.dc0837a4.js"},{"revision":"3e1e120b71ff339044badd8649dea685","url":"assets/js/6d4f529f.15017572.js"},{"revision":"c2a06ad4941ac712096ae18d6a5b4c65","url":"assets/js/6e731933.46b6d7cd.js"},{"revision":"90ea61d0e48c47c109480be96fb94f79","url":"assets/js/708.ef5de01c.js"},{"revision":"5321c4b0c7a96cdf9cf1cf88959dd9b4","url":"assets/js/7238ceb0.74f0ae59.js"},{"revision":"caf275144e982faa977af79916bc783e","url":"assets/js/778f8715.f8ebbd43.js"},{"revision":"82232288964c08cce6789744d4516995","url":"assets/js/7846.d977c82a.js"},{"revision":"bbb3aded1e04cead5ecb9ba34508043b","url":"assets/js/795df221.a5cec3be.js"},{"revision":"8961a42ee5b05aa75007625396c02850","url":"assets/js/7ce5d7a1.cccb6ae5.js"},{"revision":"6bc0d6bf5537ff4dd7589fcfdfd368a5","url":"assets/js/7d7fd0cd.5cd2a569.js"},{"revision":"d7604fdbc5a680ab48779a9fe5f04498","url":"assets/js/814f3328.152157ba.js"},{"revision":"be0df9a2e547da11f5e25c03e8c5cf00","url":"assets/js/8297.53027d92.js"},{"revision":"29ef0ae4663beb28a4cf67e246b8dacd","url":"assets/js/82ac0c26.3276c062.js"},{"revision":"4bd2e28848ade54cb8dd9326a8f7b302","url":"assets/js/8378.8c02d1c7.js"},{"revision":"68fdc127a56adde5f316919f04dcee98","url":"assets/js/8397.6889771f.js"},{"revision":"69e4c5151e7a8a35ba2408e1b116be82","url":"assets/js/8412.c61336dd.js"},{"revision":"aa7c0a7a675817faa7dc3ee43041e006","url":"assets/js/84577be1.abc7deb3.js"},{"revision":"4caee456010fa5575a0287329114df0a","url":"assets/js/846.abf3cb5a.js"},{"revision":"db6b6738a00123f6215740faa8dcba07","url":"assets/js/8511.035eda0f.js"},{"revision":"7e33ae56770fad2cee64205f47bf5013","url":"assets/js/853ca2df.8e0c23f6.js"},{"revision":"f515a0739c739ea80e0ce41a85c61406","url":"assets/js/853e1e42.cd636b46.js"},{"revision":"76ce7718af08c718fa5ad40b965b803c","url":"assets/js/8603.d0fba1a4.js"},{"revision":"3bfaf067a5efb933b7aa7572965c1a31","url":"assets/js/8af61f6a.ed28e588.js"},{"revision":"d5ea1a5f1b1d1acec284e3b14d66ec36","url":"assets/js/8bf441d9.4a6df38c.js"},{"revision":"e202fc43403e0bcc581bcd69be7b7a9a","url":"assets/js/8c20996d.58dd85bc.js"},{"revision":"2e7b5f00f30dd17fb3d57b0d8e8d113c","url":"assets/js/90326f8c.072fa8b0.js"},{"revision":"5338c162d62836c262824b082194da4e","url":"assets/js/9121.5803f392.js"},{"revision":"8b61a0d4608100037846592048164361","url":"assets/js/9203bfff.b5b97828.js"},{"revision":"3fb6a36a290f70c6a4b747d79eb25e3a","url":"assets/js/923ed0b3.4571b22c.js"},{"revision":"bc43e7566341e89c4b4ff8ce8d7ef01b","url":"assets/js/935f2afb.00fe6b0d.js"},{"revision":"136216bc0d4669ea750fbc0d1411704f","url":"assets/js/95a5b4a7.a82476d0.js"},{"revision":"75972be9e846149b7c62a0c6a18c1d09","url":"assets/js/9622.1d1ba9c5.js"},{"revision":"fffb8b0c6cd8ffbac20edf57a6396d98","url":"assets/js/97952677.e1118a2d.js"},{"revision":"c4f9fe2b19307d8f3f7f40abf1113c1b","url":"assets/js/99d3b34a.9e4155ea.js"},{"revision":"9f2ef06c18948f2781ba648157ca67b7","url":"assets/js/9e4087bc.99bb49de.js"},{"revision":"c2dcb072726423d255436775507a6ea7","url":"assets/js/9f9bea33.9f27208f.js"},{"revision":"efb333f3c47feee721763347a944a61f","url":"assets/js/a1fbcaf1.320cbd35.js"},{"revision":"1eaf8ba7897385c19bc3e8a9bd0146b3","url":"assets/js/a6aa9e1f.3e90a480.js"},{"revision":"b93f9276e3d12a04018a02c523d61b30","url":"assets/js/a7023ddc.bf44544a.js"},{"revision":"f97789d0aa7608bb50b4f25ac73bd788","url":"assets/js/a8181711.52870a66.js"},{"revision":"d09cc02dc32ec7b707e9cdc9d255521b","url":"assets/js/ab8c4b90.c2d44618.js"},{"revision":"ea7431e60193e957cd974b482b93a317","url":"assets/js/aeedf315.c00c5a6f.js"},{"revision":"2c3c38728d7acd18dbdc1aa63fb89d0b","url":"assets/js/b046c1ff.5bf4e389.js"},{"revision":"b1ef301c8daf2dc19bfec6f70a0a5173","url":"assets/js/b11bad44.132c9953.js"},{"revision":"d27de78a6f6b094b74c9184e5870ee02","url":"assets/js/b283ca86.fd74c136.js"},{"revision":"6b1b705c48920cd13ca43393fd79ee42","url":"assets/js/b2b675dd.5a1420ba.js"},{"revision":"a0e7f04bee7363e59a1afd335808e9c0","url":"assets/js/b2f554cd.e3276529.js"},{"revision":"a5b618e9b8acd6229cefd05ae3dd4f8e","url":"assets/js/b3e3b9ec.19c56347.js"},{"revision":"7a2bf6f2c44d2e8c3d649f1d5a63b265","url":"assets/js/b95eaafa.4b4f0183.js"},{"revision":"c1157078ee4fa2f2dda965d25c54ea1e","url":"assets/js/bfdac06f.76f620e7.js"},{"revision":"e2e59019f1eba639e775d1579ba46b1f","url":"assets/js/c1906376.dce0bad7.js"},{"revision":"4cb512656863f6d9a515f7b50f6e2ded","url":"assets/js/c3b1af5c.cadbd74b.js"},{"revision":"812fe4d3dcbb03fc47b53f21770f5db5","url":"assets/js/c5be66cf.54ad6e09.js"},{"revision":"191975dcaba7e6aa24a8cf59595480a1","url":"assets/js/c7d3a372.53fa20ad.js"},{"revision":"1a18b9b597c0ad587aaaf77f7d150217","url":"assets/js/cc221b30.5d17c78c.js"},{"revision":"2a1780f959a17d21b1739d4e99f5f8c2","url":"assets/js/cc34207f.0dfcb693.js"},{"revision":"2803d10858a76bb0b0efa0d53e9cae1b","url":"assets/js/ccc49370.e89729f1.js"},{"revision":"32c3f99f111aad7079420f938fce5f9c","url":"assets/js/ce2ccae1.7a4ea0bd.js"},{"revision":"846344963a03db00b0a69ad7fca30e0e","url":"assets/js/d5d47070.482fb6ae.js"},{"revision":"ab0f5432ea92b8c1775698be81859e73","url":"assets/js/d871e2e9.c0725f1b.js"},{"revision":"ab4037e5d566b3c44b2222fe59663337","url":"assets/js/dd315a79.5a7566b4.js"},{"revision":"d5993a47e54faa1a1582819d1ac487cb","url":"assets/js/dd5b562f.58ee355f.js"},{"revision":"71012d98ed94668ccdd6736dec5d7f80","url":"assets/js/df203c0f.5faf475e.js"},{"revision":"137e08bda142eea02a24a0ac9a5b2521","url":"assets/js/dfea6eb9.24982d52.js"},{"revision":"f4237b92c8ab7d2bda896d9f23ab5acb","url":"assets/js/e18b7efc.4079cd8b.js"},{"revision":"e1babb9664313e6974fdd2f082ddb66e","url":"assets/js/e2d6b814.7357d2ae.js"},{"revision":"f2bad4a3bb067772ba541b76b3bcf537","url":"assets/js/e4c94ae4.d19e43b9.js"},{"revision":"af2bb49b655e117e7658f244153f9ca9","url":"assets/js/e4f3715f.eba5f85f.js"},{"revision":"80faa3d093133c61588a729f44519cb8","url":"assets/js/e7eb7418.d7d702f6.js"},{"revision":"da13af628870889b2f8a08f2089ddfd1","url":"assets/js/e86a5a75.cc96a705.js"},{"revision":"9b76d8da7af8f3e52201fd1ded83f357","url":"assets/js/ec1e3285.189cdfed.js"},{"revision":"1a89bd524fa55695fa6005e89587f4f8","url":"assets/js/ece86388.b42e225b.js"},{"revision":"6dbca51cbefc8a3f69252915c9e5ecf9","url":"assets/js/f6f0afbd.21763003.js"},{"revision":"6758cfb948f5caeba11402b459ec9176","url":"assets/js/f85166e8.6a1a67d6.js"},{"revision":"108d62f9a56e892a7d4e5f587bc2c25b","url":"assets/js/f89f36d9.e97cfad0.js"},{"revision":"70fbad6278a327747c69c14c0edf20c2","url":"assets/js/fa878c7a.195c8d3b.js"},{"revision":"35783251fd18c2fc877ac57c52d80f63","url":"assets/js/fc14e939.f7718bb5.js"},{"revision":"953a901ca22a03a73c71e14b28fd29a5","url":"assets/js/fe6644db.3afee51a.js"},{"revision":"aadd252703802ebe8cd63bdc9b90f1e9","url":"assets/js/main.4c2d1c1f.js"},{"revision":"78cd4186d09916bf4765a9dcbfdc566a","url":"assets/js/runtime~main.ef2284ed.js"},{"revision":"c9e8c75e76ebc043f44704d905cc7e01","url":"auth/callback/index.html"},{"revision":"ab372c6b723566cc646e69958c77867a","url":"blog/2026/02/23/2026-02-23-news/claude-series-announcement/index.html"},{"revision":"2a8082fa6a228f995e8192e1d1d27336","url":"blog/2026NewYear/index.html"},{"revision":"eeab1056ab4af4fbf2311f85ed37f076","url":"blog/archive/index.html"},{"revision":"de848d969f87d79c750fd51eb7c2a499","url":"blog/index.html"},{"revision":"89efc4dc45dc2a2b42d8243e53a88833","url":"blog/tags/announcement/index.html"},{"revision":"0d057d08718147461e7e0634bab4d187","url":"blog/tags/claude-code/index.html"},{"revision":"2bd75b2e58942b40f7019f0965d638a0","url":"blog/tags/docs/index.html"},{"revision":"f88514b3cc37946e524f4adae6e8c75a","url":"blog/tags/index.html"},{"revision":"d7a0990e392fd9b7f398c8f92c9b2951","url":"blog/tags/news/index.html"},{"revision":"48a0048b737c34ec694ce2aae8159066","url":"blog/tags/village/index.html"},{"revision":"3d4ff11603691e3c206661e9564130b6","url":"blog/tags/技術新聞/index.html"},{"revision":"1987e32446fc16052ea3985e205e87ab","url":"blog/tags/新年/index.html"},{"revision":"15c2a843a61edbd5cb836d9a1ecd3c3d","url":"blog/tags/節慶/index.html"},{"revision":"eca1ec309f17500ee9b8751f22a34614","url":"blog/tags/蛋蛋村新聞/index.html"},{"revision":"dd299f30aa18c8e6106d25d736a9fa7f","url":"blog/蛋蛋村誕生/index.html"},{"revision":"8d3e7ea995b7e6c463f9954d2f233c45","url":"docs/blog-skill/finance-rules/index.html"},{"revision":"bfbcbe65383386106b78a8497a63f063","url":"docs/blog-skill/history-rules/index.html"},{"revision":"d6425b2d8ee2f530ef88ccda8918a950","url":"docs/blog-skill/news-rules/index.html"},{"revision":"e3a6b420d26ecd26107cae7b2536aaab","url":"docs/category/claude-code/index.html"},{"revision":"69dd04634763f46f9a8b7b96c938dbc8","url":"docs/category/python-workshop/index.html"},{"revision":"003a67a5216aa22d9ed5de5a0c1fb657","url":"docs/category/skill/index.html"},{"revision":"3f904b5d850b8236aadb9b452702700c","url":"docs/category/戰情室元件-skill/index.html"},{"revision":"87fc2a52479ee5c867fd3002bb54ef6f","url":"docs/category/發文-skill/index.html"},{"revision":"c94b8669d87ce219c644d25e38a55433","url":"docs/claude-code-series/getting-started/index.html"},{"revision":"ca00a812a59da79db935d03c5317ac8f","url":"docs/claude-code-series/monitoring/index.html"},{"revision":"b8882156f2744531f89cf453b60adc7a","url":"docs/claude-code-series/skills/index.html"},{"revision":"165715a703eb57215e5fd350af2cd12a","url":"docs/deconstruct-llm-agent/introduction/index.html"},{"revision":"e7990bdac718e6aa5819af2ae40b5221","url":"docs/deconstruct-llm-agent/temperature-and-top-p/index.html"},{"revision":"67c99328440da501ceba9ce2ea12a562","url":"docs/intro/index.html"},{"revision":"fb1618112fc11f8d283c130f7da47b7f","url":"docs/python-workshop/python-init-file/index.html"},{"revision":"65e738dae9a1f89fb678463f1838d46d","url":"docs/skill/gemini-skills/index.html"},{"revision":"a1687a7ed7599c22d1069c6483cedf37","url":"docs/tags/ai/index.html"},{"revision":"42aa139828a3366b958e5c3d6014f7d2","url":"docs/tags/automation/index.html"},{"revision":"41330acc95ee8ca5c19362e106b66888","url":"docs/tags/bpe/index.html"},{"revision":"aa711b5a99287fccc912b8e63842412d","url":"docs/tags/claude-code/index.html"},{"revision":"cf0e8c3fc3236c5f8475474869c54074","url":"docs/tags/generative-ai/index.html"},{"revision":"d01b21f994aa03d37c8ed50c7ba9712d","url":"docs/tags/index.html"},{"revision":"701ff7f891e94ab7a79dbdb24b7df4e4","url":"docs/tags/llm/index.html"},{"revision":"9231357259b0622363e406d51fb52f9d","url":"docs/tags/nlp/index.html"},{"revision":"791ca731848069c92930246fa38ae139","url":"docs/tags/technical-docs/index.html"},{"revision":"04fe299148dabfaefaa2fb72bbfdef37","url":"docs/tags/temperature/index.html"},{"revision":"eed4a8472a57d5427703de87234acf49","url":"docs/tags/tokenizer/index.html"},{"revision":"e33be9084c37960203990649db3b6804","url":"docs/tags/top-p/index.html"},{"revision":"0c57eeb27c66892cdf9c392d57477b4c","url":"docs/tags/模型控制/index.html"},{"revision":"4e633c26ca8013a4abea649c9722eaba","url":"docs/war-room-skills/economic-calendar-guide/index.html"},{"revision":"9260d1c052a6e09809b278a269725e13","url":"docs/war-room-skills/order-book-widget-guide/index.html"},{"revision":"244bc894e054331796060f30332d607c","url":"docs/war-room-skills/stock-card-guide/index.html"},{"revision":"fb297b1a1d68991e03cff7bbe28b5aae","url":"docs/war-room-skills/stock-info-widget-guide/index.html"},{"revision":"5f18ef2a79a57d1f8e785f4216349e60","url":"docs/war-room-skills/stock-row-guide/index.html"},{"revision":"2d0a9244f6ab65507e5f7f4a24b606ad","url":"feedback/index.html"},{"revision":"92c09323d834b76a7bb0432a54bfb97c","url":"finance/2026-02-28-307/index.html"},{"revision":"cfd9c2dfe95ce24122f152e41bf32e4d","url":"finance/ai-286/index.html"},{"revision":"a60461d2b3c4dda4d491b34626b6b38f","url":"finance/archive/index.html"},{"revision":"e3594ce61a986c6d3954500e5e2623e0","url":"finance/finance-section-created/index.html"},{"revision":"c1b2694d01b64e35724398bf2468ed91","url":"finance/index.html"},{"revision":"17ff3610e0ab9a3b62b4b7544aba2b69","url":"finance/post-203/index.html"},{"revision":"61947e4b48defb0070e87a99fd29e3d8","url":"finance/post-453/index.html"},{"revision":"90a65bc6d2a884701fe037243ecfb47d","url":"finance/tags/announcement/index.html"},{"revision":"aa312604d4bfa36789d2ccdac877fc2e","url":"finance/tags/finance/index.html"},{"revision":"9ddc02ed07f1a0f30adad6d266971a8e","url":"finance/tags/index.html"},{"revision":"b8c5a2f683b0f06c662bf0bfaadc3a99","url":"finance/tags/newsletter/index.html"},{"revision":"d1e4355d98a0b35d49957cc6e5168d9c","url":"index.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"a681e2c3911814597f4312c13ad662bb","url":"markdown-page/index.html"},{"revision":"81cf94651e2d1961ef2914bafc14ee48","url":"quotes/index.html"},{"revision":"fdbece29969428ec89ea9af9595a2a68","url":"tw_stocks.json"},{"revision":"a59df305dba7f58528c6ac602a11c90a","url":"tw_stocks/0050.json"},{"revision":"a1b5b0d3f91e3dc289d02d1ffe84597e","url":"tw_stocks/0051.json"},{"revision":"abc1f41a8a0ff2dab3f996708a88a876","url":"tw_stocks/0052.json"},{"revision":"34fd9708d425f1f9b8b9318c512d53f3","url":"tw_stocks/0053.json"},{"revision":"8dfe2dff74b6efa7e02f0027c6316bbc","url":"tw_stocks/0055.json"},{"revision":"5530a0171e617c814b9a25783e1264e8","url":"tw_stocks/0056.json"},{"revision":"4e40cd181285da7b21acade99a16b025","url":"tw_stocks/0057.json"},{"revision":"23750979a3bab2aa14050a0adcf757fc","url":"tw_stocks/0061.json"},{"revision":"a68c0dc32452503f51d1f1a6696d71da","url":"tw_stocks/006203.json"},{"revision":"03cf01826bd350b80863b3826e9d346f","url":"tw_stocks/006204.json"},{"revision":"aeca3144d9f9c2db6cf523b8fb280826","url":"tw_stocks/006205.json"},{"revision":"671ad79fba5d99b312a6ab62870ec765","url":"tw_stocks/006206.json"},{"revision":"33663558968dc43334f3011fe368efb2","url":"tw_stocks/006207.json"},{"revision":"7eaff53e5ad59bba330985dc992e8ee7","url":"tw_stocks/006208.json"},{"revision":"1e1145ac2333f0c56cd51c37191b03a7","url":"tw_stocks/00625K.json"},{"revision":"1f96b3b11cca8fdd173198ac194468e9","url":"tw_stocks/00631L.json"},{"revision":"6b70fd544bf62b5582edc479b1ec2920","url":"tw_stocks/00632R.json"},{"revision":"76578275f2ff2771aa1f0d9d9c3f2f3b","url":"tw_stocks/00633L.json"},{"revision":"9173b124dde3974b3a39c43077a0c758","url":"tw_stocks/00634R.json"},{"revision":"343be77170913eb008a88c279fc518a3","url":"tw_stocks/00635U.json"},{"revision":"e8953a723205615e929ca0cbab2553b9","url":"tw_stocks/00636.json"},{"revision":"63b727b18aaecbf6487180017bc9965a","url":"tw_stocks/00636K.json"},{"revision":"737b09630e1af4f86e1d79ac0f47556c","url":"tw_stocks/00637L.json"},{"revision":"311b224e7d633ce8105f177df3ec7414","url":"tw_stocks/00638R.json"},{"revision":"a3d1c2d596cb157ac8d7b158678ebbe3","url":"tw_stocks/00639.json"},{"revision":"5a326f4eabb264b8f642f62ed06d5c1f","url":"tw_stocks/00640L.json"},{"revision":"30c9dedb3be57cabee782d5a7b9ab3cc","url":"tw_stocks/00641R.json"},{"revision":"d4aaa84a4c6455d7a57f537f7ceeebda","url":"tw_stocks/00642U.json"},{"revision":"73791f3191757085dec8d335e13a2b0a","url":"tw_stocks/00643.json"},{"revision":"4f614e7db52b27a3d4290f28f30a010c","url":"tw_stocks/00643K.json"},{"revision":"0a1d2c77e7484716bd3bd751dd0b439d","url":"tw_stocks/00645.json"},{"revision":"fe7ab51817eca0cbbc30177362e79b52","url":"tw_stocks/00646.json"},{"revision":"60a72079ebaaca871fa13a247072dbe2","url":"tw_stocks/00647L.json"},{"revision":"e883f6119ec90e07c116c76745dcecef","url":"tw_stocks/00648R.json"},{"revision":"ef26619ead0adb3a3dbf3c1525e6af62","url":"tw_stocks/00650L.json"},{"revision":"d595c9019abb1aaff4747b8b9b4a7ea4","url":"tw_stocks/00651R.json"},{"revision":"20cd5ac3f001aa2bc8291c42c96fd76e","url":"tw_stocks/00652.json"},{"revision":"9663a861027e43e443115e78f51d1ca2","url":"tw_stocks/00653L.json"},{"revision":"57705993346a88d78fc2bd707ae08140","url":"tw_stocks/00654R.json"},{"revision":"3d373e636c3a3c283d91d7cb8191a8b0","url":"tw_stocks/00655L.json"},{"revision":"3f185c389790c04cbbf39a47f5bea84f","url":"tw_stocks/00656R.json"},{"revision":"12b26bc2860bac94001d29d9e222636d","url":"tw_stocks/00657.json"},{"revision":"7a0719b8c33f38318e0cd085d556042a","url":"tw_stocks/00657K.json"},{"revision":"662d5981da7ed07895b3c5c770547006","url":"tw_stocks/00660.json"},{"revision":"5ab04782d762331be5d6d6975704c5bb","url":"tw_stocks/00661.json"},{"revision":"cd7f3d83bc57ff5396588b44d85b7cb4","url":"tw_stocks/00662.json"},{"revision":"334596d656532c9513f4a735ad57db2a","url":"tw_stocks/00663L.json"},{"revision":"4ace984be4612d2967c6c065fd259b02","url":"tw_stocks/00664R.json"},{"revision":"282da3a8217ecae9646cc2ff4091969e","url":"tw_stocks/00665L.json"},{"revision":"569d0c932e726ba5c9985e0bae31f20a","url":"tw_stocks/00666R.json"},{"revision":"630ffeaebca77b91b9ce9c41b0489c85","url":"tw_stocks/00668.json"},{"revision":"0e4e84889899838ef3d4c25c95b0e405","url":"tw_stocks/00668K.json"},{"revision":"8114279796867d8e32ac48c55062d0ec","url":"tw_stocks/00669R.json"},{"revision":"9303f675755ba387b128c7549dcb1d11","url":"tw_stocks/00670L.json"},{"revision":"8ad030ad4f73c76b65addfa1d281ef1d","url":"tw_stocks/00671R.json"},{"revision":"405620ff46a28b8b8b21666b5fc14af2","url":"tw_stocks/00673R.json"},{"revision":"39844316fd5c5f6cea158933555bd9b5","url":"tw_stocks/00674R.json"},{"revision":"42315894734d2922835bfb620811c69d","url":"tw_stocks/00675L.json"},{"revision":"1616bd73a50d1e1738e8ca71235a3bae","url":"tw_stocks/00676R.json"},{"revision":"1bc37e9183c9ca8e8caeb6b4b2a686e7","url":"tw_stocks/00678.json"},{"revision":"66df408c0c25070f526f1c561880fbf1","url":"tw_stocks/00680L.json"},{"revision":"0d8eb2899dd0befb44d4b9a2ec8956d0","url":"tw_stocks/00681R.json"},{"revision":"d775d66d46192ed358cb2b31a4502349","url":"tw_stocks/00682U.json"},{"revision":"536368c79265e0580e0dbfaaca1de45e","url":"tw_stocks/00683L.json"},{"revision":"1aa9bfeec3ee484e230cf612abcea111","url":"tw_stocks/00684R.json"},{"revision":"3cb6566020e02f16d5733ef9f2018aa6","url":"tw_stocks/00685L.json"},{"revision":"6483f60c3c941bd0e5adb8fa7006f475","url":"tw_stocks/00686R.json"},{"revision":"05c50a20e4ceb57144c5d9e54bab3ce8","url":"tw_stocks/00688L.json"},{"revision":"99f241a45faa75b2167ddcf58cb0e4a2","url":"tw_stocks/00689R.json"},{"revision":"2086af3aac956a638a9ae38399869579","url":"tw_stocks/00690.json"},{"revision":"85c78ed6d99caa2f81b009d9a60d244a","url":"tw_stocks/00692.json"},{"revision":"cd9bff913dcae49c9655d6536e7e47cd","url":"tw_stocks/00693U.json"},{"revision":"e9b5702d74adec0b9192dafd1ccf361f","url":"tw_stocks/00700.json"},{"revision":"df1fe1431eb693a87c40e5b825897d27","url":"tw_stocks/00701.json"},{"revision":"5ce2bea86cddef55db1a157caa1fd1b9","url":"tw_stocks/00702.json"},{"revision":"72e58b08c6de40daf7f4d680ece70387","url":"tw_stocks/00703.json"},{"revision":"bda23760e8326f55a7cc8ed7cae4a164","url":"tw_stocks/00706L.json"},{"revision":"f37ea973dbaef3419885d661a88fb009","url":"tw_stocks/00707R.json"},{"revision":"8ea14c7f59e153bb3c235426c92af22c","url":"tw_stocks/00708L.json"},{"revision":"e71770192bf65a089acf57ebd01bfeea","url":"tw_stocks/00709.json"},{"revision":"1fbbe72bd449f3c89a5365f1195bec22","url":"tw_stocks/00710B.json"},{"revision":"5651c8ebc1a37b408e63d9b463d63e61","url":"tw_stocks/00711B.json"},{"revision":"633f7832914018fc5ef51a9937a2851a","url":"tw_stocks/00712.json"},{"revision":"f4f39a796ed0edfe401dc6a1d2f7919f","url":"tw_stocks/00713.json"},{"revision":"4139df2383687785c551df40f52455ce","url":"tw_stocks/00714.json"},{"revision":"4d59019650707c8e9d1eb015ba6d7b78","url":"tw_stocks/00715L.json"},{"revision":"2bb7a36a26bbf0c3bf529970bc635c78","url":"tw_stocks/00717.json"},{"revision":"a63b8604d6d87bb7d1365886553efab8","url":"tw_stocks/00728.json"},{"revision":"bd53cce5e47f09ff0762680c37e1e806","url":"tw_stocks/00730.json"},{"revision":"38fb9e20b04cffc7d27c9d566db38045","url":"tw_stocks/00731.json"},{"revision":"3c1b5885a55443318e3e0239629c6b35","url":"tw_stocks/00733.json"},{"revision":"149a238d0a96388fe65774b9530d4708","url":"tw_stocks/00735.json"},{"revision":"d3ee0ff3dacc00553a8af91aa748959c","url":"tw_stocks/00736.json"},{"revision":"6f5f24a03ea8a9c3bd4fba6722e26cc6","url":"tw_stocks/00737.json"},{"revision":"8922bb0909f4d7482d2e308c23348225","url":"tw_stocks/00738U.json"},{"revision":"de0e2f3038bbeb39f21b786565583e2e","url":"tw_stocks/00739.json"},{"revision":"0bfef4c8a452215629f20df3f92046d8","url":"tw_stocks/00752.json"},{"revision":"9020ca8d2b94726497784a4af3dbf9ba","url":"tw_stocks/00753L.json"},{"revision":"693022f0e6134e812ff1da4feb27fd51","url":"tw_stocks/00757.json"},{"revision":"47c199e2577035ab52093f28b6f81a92","url":"tw_stocks/00762.json"},{"revision":"9c2165e4104d9b11eece5e110096fe1a","url":"tw_stocks/00763U.json"},{"revision":"ee47e1411cdb7c42b70e4f1bafb86d49","url":"tw_stocks/00770.json"},{"revision":"4aebe5584a6d81d48b5d916f0c4aa4d1","url":"tw_stocks/00771.json"},{"revision":"c7b40e2cfa1a1aadca43c87824eeec67","url":"tw_stocks/00775B.json"},{"revision":"82b8854173b6e964ab3cd6ddd397ae80","url":"tw_stocks/00783.json"},{"revision":"2eff7f916eb7a8670e8da96b1dd0ed8a","url":"tw_stocks/00830.json"},{"revision":"b1c9b84dc2c8efea4e451066b0687e8d","url":"tw_stocks/00850.json"},{"revision":"610e46fdc6ec7e4e9d69ed383c4cbabc","url":"tw_stocks/00851.json"},{"revision":"59ced49a42afdee3cbff82c17cfe4b5b","url":"tw_stocks/00852L.json"},{"revision":"876f28cc7a2b8d305610371c9785b8f7","url":"tw_stocks/00861.json"},{"revision":"d541e744cc306ef19745b20d78f8b83c","url":"tw_stocks/00865B.json"},{"revision":"946606755fbf138c85b7154744e05516","url":"tw_stocks/00875.json"},{"revision":"bcf7bac2b788f5738dc73c6e3913570a","url":"tw_stocks/00876.json"},{"revision":"4974d2bdd67b7e4b1a4c28e54a8a14a2","url":"tw_stocks/00878.json"},{"revision":"73c9663bf72bc127f7f599b4ee67fb82","url":"tw_stocks/00881.json"},{"revision":"b066f325a6d633e6b98ed255559aa6ce","url":"tw_stocks/00882.json"},{"revision":"543e6d98284c25387f29e6c9eb923dac","url":"tw_stocks/00885.json"},{"revision":"de4399cd9271b16544753c11d43a7143","url":"tw_stocks/00891.json"},{"revision":"77dd3560cf4d041924d46aef0b1f0474","url":"tw_stocks/00892.json"},{"revision":"e555ef7b0a361a66f7841efd377e019e","url":"tw_stocks/00893.json"},{"revision":"611b5f31afa30ccbca41c94f84a7686f","url":"tw_stocks/00894.json"},{"revision":"5c5513b51dd55cdaabf8b8c18552bb1d","url":"tw_stocks/00895.json"},{"revision":"9d8c5c1e92eaf28643f21a5b7a681267","url":"tw_stocks/00896.json"},{"revision":"48d3d49ca4bb044ae7fe1469d8592c83","url":"tw_stocks/00897.json"},{"revision":"1a87aa807bc57c7e99d6c791c0fdd0f1","url":"tw_stocks/00898.json"},{"revision":"45839d7bae9dc091e7963f69ebe98626","url":"tw_stocks/00899.json"},{"revision":"56f6719ae84f1c25f0b3363e55fafb53","url":"tw_stocks/00900.json"},{"revision":"f7af8764577d052ea32364cd6b3f4aa5","url":"tw_stocks/00901.json"},{"revision":"c92baf36a6dc1688e2a504f6cd78f5ad","url":"tw_stocks/00902.json"},{"revision":"ff379258fa981304b27929d2b751b05b","url":"tw_stocks/00903.json"},{"revision":"c708512d0488c03db785314245ac7df6","url":"tw_stocks/00904.json"},{"revision":"0c60c6e3e7e25aa10e4f99b1eae3a20e","url":"tw_stocks/00905.json"},{"revision":"aa328b0a1ca9c1471d08623a6002b69d","url":"tw_stocks/00907.json"},{"revision":"140c0f702132f5b5733fd1a01d018cac","url":"tw_stocks/00908.json"},{"revision":"7d1fb87e2d2194993822df79f2b9da84","url":"tw_stocks/00909.json"},{"revision":"57e839bf7a96f587428c20fe609623d1","url":"tw_stocks/00910.json"},{"revision":"e95942cc4ce81b1f9f0280647b89e104","url":"tw_stocks/00911.json"},{"revision":"aa456bb4f02f6fc11166069b367ed2ec","url":"tw_stocks/00912.json"},{"revision":"03ee34d2b9dbdae7e89f45ccdd09f7eb","url":"tw_stocks/00913.json"},{"revision":"39afe656ce410d887157d7294ad3f63a","url":"tw_stocks/00915.json"},{"revision":"896fbd79f8984da6283e3a435b943dd9","url":"tw_stocks/00916.json"},{"revision":"b9516dd24656c0e888fe2f877fc5f050","url":"tw_stocks/00917.json"},{"revision":"a4de95c78af27699fe83dbef17847736","url":"tw_stocks/00918.json"},{"revision":"89b7ca54b69b1faea7b40fd553a64035","url":"tw_stocks/00919.json"},{"revision":"4837d5eb4adf7e70e0fdf6775251a758","url":"tw_stocks/00920.json"},{"revision":"7a850a2b8e02b548fb7ca7dbdcfbf44b","url":"tw_stocks/00921.json"},{"revision":"c24dcc0ef9aca423ed3b23704fd00d17","url":"tw_stocks/00922.json"},{"revision":"edc607270a9274887de9b70e699874a3","url":"tw_stocks/00923.json"},{"revision":"8f099a088477bc5b53ecea71dfa852b4","url":"tw_stocks/00924.json"},{"revision":"808ec35208cfd7b13e60126284313212","url":"tw_stocks/00926.json"},{"revision":"8b42846e4a5ddeedc40e5e7732504673","url":"tw_stocks/00927.json"},{"revision":"8876ab10440853ba56cd4b31700ee85e","url":"tw_stocks/00929.json"},{"revision":"c4d922a78084d49e5a133796d5c8f806","url":"tw_stocks/00930.json"},{"revision":"01a4ac6f3d8090ffda0ea30763483d9e","url":"tw_stocks/00932.json"},{"revision":"5b4d888eb6940bddeeaa73cf458f8549","url":"tw_stocks/00934.json"},{"revision":"a7893a86dbab42723fa5561a5ef990c7","url":"tw_stocks/00935.json"},{"revision":"cd93a586c1dc32e157c8bc3fbb5ec0ff","url":"tw_stocks/00936.json"},{"revision":"170f7e152ed2ed5bf2a6c74e40ca3f76","url":"tw_stocks/00938.json"},{"revision":"aa96b9ec64620c6eae7f7d142308f589","url":"tw_stocks/00939.json"},{"revision":"2bee52b7bebe93a68925b8039ea4f0b1","url":"tw_stocks/00940.json"},{"revision":"9012a6d8d5a49d210040e20ef75542b4","url":"tw_stocks/00941.json"},{"revision":"6e5a73c8b13233bc7b8d8bf82e36ee21","url":"tw_stocks/00943.json"},{"revision":"ae29dc1debfad22f6b5abce088b31c0a","url":"tw_stocks/00944.json"},{"revision":"56e645290d7566aa4b487b991c9cdcb1","url":"tw_stocks/00945B.json"},{"revision":"f64fc4149ef9795fac2c3956e25ed8af","url":"tw_stocks/00946.json"},{"revision":"4d8115572fc58797cf933e230268633c","url":"tw_stocks/00947.json"},{"revision":"84b22e8139a19f50dec4f94c8888e412","url":"tw_stocks/00949.json"},{"revision":"3714f3a8e9ea776089aacb6c3c01e1b1","url":"tw_stocks/00951.json"},{"revision":"a8814785df4f4dfb51c2f0c1fc7ad02e","url":"tw_stocks/00952.json"},{"revision":"8caf2034b2f94f1b36249a1f5279379b","url":"tw_stocks/00953B.json"},{"revision":"519fdf85be9af48e0d6e32e4c6e4b7e4","url":"tw_stocks/00954.json"},{"revision":"ad5522f81ae0a5ca90d1cf3a286b1755","url":"tw_stocks/00956.json"},{"revision":"5fd47eb7f5c4127067199956cfbdaee5","url":"tw_stocks/00960.json"},{"revision":"be9af7874cea2b42cd80f5d96bea1180","url":"tw_stocks/00961.json"},{"revision":"e82ccd0bf36b50b663688a8f1566c7be","url":"tw_stocks/00962.json"},{"revision":"0c6128af16a74baa065cbf3fd4f49efd","url":"tw_stocks/00963.json"},{"revision":"9bcec411cd2fa1e38724b18ed3507c9b","url":"tw_stocks/00964.json"},{"revision":"a74b512266f0d740dcc446edc7073d8c","url":"tw_stocks/00965.json"},{"revision":"d87258394591cfe32610ef48d5f67001","url":"tw_stocks/00971.json"},{"revision":"4cf4b54a45a988965fcbb626b069c149","url":"tw_stocks/00972.json"},{"revision":"53700e919033b1256786fe2cf9268d6f","url":"tw_stocks/009800.json"},{"revision":"35124e2517b1c2f71ac59bcb943ffc45","url":"tw_stocks/009801.json"},{"revision":"12cf979ff422c65668e6e70a10969c10","url":"tw_stocks/009802.json"},{"revision":"22ab844d60f3b9b064a4990715099eb6","url":"tw_stocks/009803.json"},{"revision":"105cb6ec13536b6b8c6405557b33cab4","url":"tw_stocks/009804.json"},{"revision":"7018f5ff7bc85dfb21997794d4613a03","url":"tw_stocks/009805.json"},{"revision":"f9eda833849f944bb5a0b9aaa29a1a8b","url":"tw_stocks/009808.json"},{"revision":"05478c32f79b5ea3bda464cab830f947","url":"tw_stocks/009809.json"},{"revision":"295527e47c346d369ead85209b606b94","url":"tw_stocks/00980A.json"},{"revision":"05cf904512a323308b94f64b4b00dd78","url":"tw_stocks/009810.json"},{"revision":"c00b40a1023a824899b9c5cde2c15535","url":"tw_stocks/009811.json"},{"revision":"4d887411cd20fe125a5f160a05066cef","url":"tw_stocks/009812.json"},{"revision":"1d0fab32105bc7915b5deb52e5dfbe8a","url":"tw_stocks/009813.json"},{"revision":"adfb552418d427d5d9881e6ca81e0a98","url":"tw_stocks/009816.json"},{"revision":"fcdf0c8dc155c0533837814a8bbc539f","url":"tw_stocks/009817.json"},{"revision":"84754785dbd00b4d86150b6268001082","url":"tw_stocks/00981A.json"},{"revision":"8d4f6a2d926197741b4996776fa33ac0","url":"tw_stocks/00981T.json"},{"revision":"3cbdec9ebe87b1e03196d5a0288d8228","url":"tw_stocks/00982A.json"},{"revision":"b914bd9963f6783f3544ae5c72e57e3a","url":"tw_stocks/00982D.json"},{"revision":"ae5a3ae04055537cc5870c5de2ec368f","url":"tw_stocks/00982T.json"},{"revision":"5fa110e1d99dcfef2182f157ae804a99","url":"tw_stocks/00983A.json"},{"revision":"db8c3e68c7fab7447b13b2cb98cb1740","url":"tw_stocks/00983D.json"},{"revision":"6e525bc95e21ea1b918c68cd03f96c18","url":"tw_stocks/00984A.json"},{"revision":"a6fe13c3dde0185858625647cfb91921","url":"tw_stocks/00984D.json"},{"revision":"099e4a2d85a4055e83b901a83341acbd","url":"tw_stocks/00985A.json"},{"revision":"95fdd517481df048c4f8c1173530eac3","url":"tw_stocks/00985B.json"},{"revision":"51ebd8eef90e67fdd92c1ef3353be9fd","url":"tw_stocks/00986A.json"},{"revision":"8fa213b91b34152f40ef7d56c9c2cd01","url":"tw_stocks/00987A.json"},{"revision":"0bb988cfdd2bc3c3d2bb8a7bcdd43c35","url":"tw_stocks/00988A.json"},{"revision":"a713bcd0c3110cae09087db6dad96c65","url":"tw_stocks/00989A.json"},{"revision":"ca50ac0cf5429e12d8f2006e2e95220b","url":"tw_stocks/00990A.json"},{"revision":"3fb24389be53c5b0fce237ee7f4124d3","url":"tw_stocks/00991A.json"},{"revision":"b3d4cf3b9b4c36f81523efc93c354f1c","url":"tw_stocks/00992A.json"},{"revision":"f6d53b0f3114d7f610a9b618dcf9c593","url":"tw_stocks/00993A.json"},{"revision":"4f3ca511f91e11b25e7d2ff6d1edf620","url":"tw_stocks/00994A.json"},{"revision":"46e7c76c840075c0495d07f67cbb8eca","url":"tw_stocks/00995A.json"},{"revision":"ad2d84d9648f4bbae3e704631ee53102","url":"tw_stocks/1101.json"},{"revision":"25f3c46866c4b9c35480c075867a9892","url":"tw_stocks/1102.json"},{"revision":"ff3296fe19c3e26f86e33c2c38a5630f","url":"tw_stocks/1103.json"},{"revision":"20d536c593d3d7d916b016ace5cbc53b","url":"tw_stocks/1104.json"},{"revision":"9e52334c3658fcf4f49fe7b938fa443d","url":"tw_stocks/1108.json"},{"revision":"5259a4eab8556ff8d08c70af75548405","url":"tw_stocks/1109.json"},{"revision":"9d97d49b1cd48c66a01f28c5f7b56271","url":"tw_stocks/1110.json"},{"revision":"6ddfb898b59bc5d9a70e0b285ff4352e","url":"tw_stocks/1201.json"},{"revision":"e12fc2f39e3304bbcf7bf8bf4d663ffb","url":"tw_stocks/1203.json"},{"revision":"34dac9b1492b1e85f63642262d6abfec","url":"tw_stocks/1210.json"},{"revision":"5ab8626275fb8d534e88ab2fa3e5e9e1","url":"tw_stocks/1213.json"},{"revision":"10c62f9310c2a274f3e02deb1390e1a6","url":"tw_stocks/1215.json"},{"revision":"a5f0ed7eba9b083081e166f550cae7ec","url":"tw_stocks/1216.json"},{"revision":"1883972c3f66f61ef510d41144e2279a","url":"tw_stocks/1217.json"},{"revision":"b819a688d7d85381f52685d4f1219451","url":"tw_stocks/1218.json"},{"revision":"56a05be3cac3dd7dc94eb7e920aef8ea","url":"tw_stocks/1219.json"},{"revision":"86016a2fc54910d19e4339d749b5ac78","url":"tw_stocks/1220.json"},{"revision":"5d053d7265afcd0a749084ba3f7ee013","url":"tw_stocks/1225.json"},{"revision":"0b7d5a295d8944245609e8e795d2ef5b","url":"tw_stocks/1227.json"},{"revision":"35772925e6b91925e6d0cb756e279fc3","url":"tw_stocks/1229.json"},{"revision":"41b7a17b2552ed99d1e8ebc6425c4e70","url":"tw_stocks/1231.json"},{"revision":"afff9f1940dd26b80480ab1ee54576c6","url":"tw_stocks/1232.json"},{"revision":"1d9af28f541874aa2d5ed428b1875726","url":"tw_stocks/1233.json"},{"revision":"8ec804a5826861dc4fd18d6f9be63f31","url":"tw_stocks/1234.json"},{"revision":"84d239bcec0e9a1ed1751514b7c4a2a2","url":"tw_stocks/1235.json"},{"revision":"79fa6f5ab133f3ae74264b7e65ea1e9c","url":"tw_stocks/1236.json"},{"revision":"61f81c188fcca5014c2de11d835ca280","url":"tw_stocks/1256.json"},{"revision":"bb07823111354d9b0020c9b0cb174bc9","url":"tw_stocks/1301.json"},{"revision":"1ab8db2a2884726cd1008f11c0089320","url":"tw_stocks/1303.json"},{"revision":"4e43ac448b918700080dd8bce899be26","url":"tw_stocks/1304.json"},{"revision":"82b51e4f297af2f94feb88195d267ffe","url":"tw_stocks/1305.json"},{"revision":"6a7f378c52be53297637e738013fc085","url":"tw_stocks/1307.json"},{"revision":"acc096ebedee016b91ca681b843f35af","url":"tw_stocks/1308.json"},{"revision":"fc6bde2959689c3b55534eb8519978bb","url":"tw_stocks/1309.json"},{"revision":"c44956db68e449f33b910e43e6f70961","url":"tw_stocks/1310.json"},{"revision":"9965b0599350def402cd7bf794a9960d","url":"tw_stocks/1312.json"},{"revision":"db11a02cd22b6aed51ca52c7dde15774","url":"tw_stocks/1313.json"},{"revision":"db2bc0cfab0e55e2bd79c6749db3e10e","url":"tw_stocks/1314.json"},{"revision":"c2f97479793576a5450eeb0f5793531b","url":"tw_stocks/1315.json"},{"revision":"b735c854f9ff1c1022482c8be7e48804","url":"tw_stocks/1316.json"},{"revision":"45f169664f453d7766bce3b3b7c8f96b","url":"tw_stocks/1319.json"},{"revision":"9f7ff3147fd15d95485392af9bc636c8","url":"tw_stocks/1321.json"},{"revision":"29c7ea9cde885f90c2214d9a3658c282","url":"tw_stocks/1323.json"},{"revision":"3ddae2597a58f3bcf5e486e4fd193d4e","url":"tw_stocks/1324.json"},{"revision":"c8572a718871a02fb448ec1fbd538833","url":"tw_stocks/1325.json"},{"revision":"024122b3d9b0c2b2c09a23e1dac283db","url":"tw_stocks/1326.json"},{"revision":"e91b71b1af3f1b124100be111728fdfa","url":"tw_stocks/1337.json"},{"revision":"e49a29afde4342e9cdc3e77688d7fe3a","url":"tw_stocks/1338.json"},{"revision":"28364f105949a8112cca5f51af2aee20","url":"tw_stocks/1339.json"},{"revision":"c1dd65cadf1c309c228d706dcdba64de","url":"tw_stocks/1340.json"},{"revision":"639d5af47978e4269987598511b58ca7","url":"tw_stocks/1341.json"},{"revision":"d4df8f472092ebd72795fdb25d761f29","url":"tw_stocks/1342.json"},{"revision":"542aec4612063ddec5aaf270d0aef612","url":"tw_stocks/1402.json"},{"revision":"d78a19e264100cd9826309c21da37bfd","url":"tw_stocks/1409.json"},{"revision":"994311142cffe8fe873c446a40761c8e","url":"tw_stocks/1410.json"},{"revision":"7e3333392223ebccdf8cae9721e55cf3","url":"tw_stocks/1413.json"},{"revision":"34c7865ca3cbc3439eed9721751ae41b","url":"tw_stocks/1414.json"},{"revision":"6b8bdf3366f7ee30984d6e18f4ab28ba","url":"tw_stocks/1416.json"},{"revision":"edde4139e3d213b1f3f91edceaa090a2","url":"tw_stocks/1417.json"},{"revision":"5e7ca85a500b8890f753be20aa0bbfdf","url":"tw_stocks/1418.json"},{"revision":"eeef8567abd7d4af46358d934322c822","url":"tw_stocks/1419.json"},{"revision":"62f87b9be97a2ac9a47d7f33228ac125","url":"tw_stocks/1423.json"},{"revision":"07c520b80f3add29076b9861f9f4227a","url":"tw_stocks/1432.json"},{"revision":"edfd8d324ebc439f44a9f6305102fc79","url":"tw_stocks/1434.json"},{"revision":"6efda1b9407878e3d5755d333033d15f","url":"tw_stocks/1435.json"},{"revision":"70a07ae93f63ef177d6bdf72d4d0a691","url":"tw_stocks/1436.json"},{"revision":"5cad0aa3a775340cce9ab60a030fa3c6","url":"tw_stocks/1437.json"},{"revision":"24b67dc70a5532d3f8b311eb5719755a","url":"tw_stocks/1438.json"},{"revision":"a6f4b51aa9f570909f106878a06323a9","url":"tw_stocks/1439.json"},{"revision":"0bb569e1e633a171936536f209a5fbfa","url":"tw_stocks/1440.json"},{"revision":"acf2eadd82fe954ae14a407761320a68","url":"tw_stocks/1441.json"},{"revision":"731b26f7a5c02098a2f2c608db1c8dba","url":"tw_stocks/1442.json"},{"revision":"67d4e955dadbe43923943ed618cbb213","url":"tw_stocks/1443.json"},{"revision":"5bb7ec36d5950d699041eb1f39b4c663","url":"tw_stocks/1444.json"},{"revision":"9b7fa915d274bba546beaf1d66ed1c17","url":"tw_stocks/1445.json"},{"revision":"358e4fcf9799f5ef6e46685335d9dc70","url":"tw_stocks/1446.json"},{"revision":"5c330fc9fb2cac891b36cdfaa20f8f5f","url":"tw_stocks/1447.json"},{"revision":"5631fcc6621411cfad01ec28314fae77","url":"tw_stocks/1449.json"},{"revision":"773f4a5ec6c2718b44cd5f97c50e6b9e","url":"tw_stocks/1451.json"},{"revision":"a540839309236198440cbb5fb6ec660c","url":"tw_stocks/1452.json"},{"revision":"511eacf76cedbc5915b207e4a8f5330f","url":"tw_stocks/1453.json"},{"revision":"98115840e0ba864439794ba00619d1c7","url":"tw_stocks/1454.json"},{"revision":"3b30fa4981ca0bf40fb2c77107ce2a7c","url":"tw_stocks/1455.json"},{"revision":"f1998a54f2c51f3d7b1e68ec1ecfab8e","url":"tw_stocks/1456.json"},{"revision":"35198737d4297d26fcec076dbefce267","url":"tw_stocks/1457.json"},{"revision":"c6f97f2a56369a8b194d2d475310dfbb","url":"tw_stocks/1459.json"},{"revision":"93df30f5508bb40231ce9f92e6d6b048","url":"tw_stocks/1460.json"},{"revision":"2b3c8fffc7d07959bc3f07e30f42ae51","url":"tw_stocks/1463.json"},{"revision":"2649b876f35053ea24b2433ef9dac650","url":"tw_stocks/1464.json"},{"revision":"9f9e29e0bd9852c9166749ea818b5eb2","url":"tw_stocks/1465.json"},{"revision":"8e3d3dfd9be24673a5b8da14740cee8b","url":"tw_stocks/1466.json"},{"revision":"ac0e87de26285820ed0229218020c835","url":"tw_stocks/1467.json"},{"revision":"dfa09498645f1e1f17a0ff1ae66f9e2b","url":"tw_stocks/1468.json"},{"revision":"a7c9591eff63af274128cb6099b7ab46","url":"tw_stocks/1470.json"},{"revision":"7a5817e0473b100c455770b9039f2555","url":"tw_stocks/1471.json"},{"revision":"70aecd4b2e4f78ccb576793a13f78f45","url":"tw_stocks/1472.json"},{"revision":"9b1b0c621eabeb990fb701c60cbd5436","url":"tw_stocks/1473.json"},{"revision":"38188177d4ac7e716885ee9512752703","url":"tw_stocks/1474.json"},{"revision":"7983926ce7fb6765342c5a79fd8ae0a6","url":"tw_stocks/1475.json"},{"revision":"e70ffd880af6f677c16f897fe6dd29c2","url":"tw_stocks/1476.json"},{"revision":"fe80f5843f41b63c65dda5c1f555208a","url":"tw_stocks/1477.json"},{"revision":"2c8a7e99bd26301c564d64908c0de85c","url":"tw_stocks/1503.json"},{"revision":"c66896c1c92a90bce2bb993e630f97a5","url":"tw_stocks/1504.json"},{"revision":"106bfacc2f75386a591fcfca0fcd2e9f","url":"tw_stocks/1506.json"},{"revision":"7d3d9302f1bf65a43bae528c7c79fa3a","url":"tw_stocks/1512.json"},{"revision":"ab338fbdbf755538a131fc7812c45862","url":"tw_stocks/1513.json"},{"revision":"b101a0f0a6b214b8d4700b29750f1492","url":"tw_stocks/1514.json"},{"revision":"749a7213473342bcb4a7c41a9b89c490","url":"tw_stocks/1515.json"},{"revision":"8745acd7d770897ccaa34eed9b5f56ba","url":"tw_stocks/1516.json"},{"revision":"e0f3e82de980967a7576a836cf8e70c4","url":"tw_stocks/1517.json"},{"revision":"573ed0748e49f1e48ecbf0667373c66b","url":"tw_stocks/1519.json"},{"revision":"ccf336ce8a43c653e27f915c9f877e0b","url":"tw_stocks/1521.json"},{"revision":"6ec812f4f17d05c71fb43688e7868c8b","url":"tw_stocks/1522.json"},{"revision":"5f5e42d12ac1997c61b759cd729106a7","url":"tw_stocks/1524.json"},{"revision":"6c3095e3fa00b141e48cd9c3b1b9bd46","url":"tw_stocks/1525.json"},{"revision":"41f997e3f7bea00be3d2aaaaa188b418","url":"tw_stocks/1526.json"},{"revision":"2f3a2f55d3d5f0bd0af223789f6355b6","url":"tw_stocks/1527.json"},{"revision":"8f1ccf24a13ac24f364b2f8ded82de4d","url":"tw_stocks/1528.json"},{"revision":"bb37ef7b764720205e6a1dfd84facf25","url":"tw_stocks/1529.json"},{"revision":"0c6de506f4f30675158bde856d62482d","url":"tw_stocks/1530.json"},{"revision":"77811ff83df610bad8a93f28df59cf37","url":"tw_stocks/1531.json"},{"revision":"b0597a77681b43d414b81c6f83af2526","url":"tw_stocks/1532.json"},{"revision":"ac863a74786613200d7ad1f00cd1018f","url":"tw_stocks/1533.json"},{"revision":"007eb9dd1425ab7aaddf82ae6458b63b","url":"tw_stocks/1535.json"},{"revision":"527bfd2ce506ca93100da9f93fac53e5","url":"tw_stocks/1536.json"},{"revision":"73184899807f8c4dde61d61367883464","url":"tw_stocks/1537.json"},{"revision":"123d2cf8d7cbe44373eb5871af24dcf4","url":"tw_stocks/1538.json"},{"revision":"350e37afed8eea4a94db16edcf283332","url":"tw_stocks/1539.json"},{"revision":"0bfde10fbb30a57edf63ddef13e16b75","url":"tw_stocks/1540.json"},{"revision":"8dea4def47040eeac10558aee02714c3","url":"tw_stocks/1541.json"},{"revision":"7bd207875e94c287896a984467c8db9c","url":"tw_stocks/1558.json"},{"revision":"8af35de70f03e53b469c2d4d5e9ed102","url":"tw_stocks/1560.json"},{"revision":"55619d5faa2ddb91ba2a9f5324146fca","url":"tw_stocks/1563.json"},{"revision":"e890fb92b07bac2abf323b91edf0456c","url":"tw_stocks/1568.json"},{"revision":"a123125610f893fd4c0a2d54cdaa6937","url":"tw_stocks/1582.json"},{"revision":"3b59ca84f319d33d150c9107d61a779d","url":"tw_stocks/1583.json"},{"revision":"4aea23256711b7ee4f3bf4b75b35cc25","url":"tw_stocks/1587.json"},{"revision":"90205c0e17cc164611fcf9c597d0522f","url":"tw_stocks/1589.json"},{"revision":"d15ce6539f6dc95684103f29eaf805c4","url":"tw_stocks/1590.json"},{"revision":"320e62cea6e6c9212889cee08a39d4e4","url":"tw_stocks/1597.json"},{"revision":"ba7de0a826eef27f8c1e9ee3e81e25ce","url":"tw_stocks/1598.json"},{"revision":"a12678da9776990edfa3ed2ac67cce57","url":"tw_stocks/1603.json"},{"revision":"6094ebb4288c5a7fe134d587ed71cc90","url":"tw_stocks/1604.json"},{"revision":"0883c5f5bdcda3eafdc1d0e0639dbc0d","url":"tw_stocks/1605.json"},{"revision":"1cd6dd7d99403a58dbfc6d67d013d598","url":"tw_stocks/1608.json"},{"revision":"0c72e97564fa733d0716803e4982f3d5","url":"tw_stocks/1609.json"},{"revision":"9eb88c13b075e7ef94d224c38f90d120","url":"tw_stocks/1611.json"},{"revision":"804275c6a312a86de3067497b946f1f4","url":"tw_stocks/1612.json"},{"revision":"14a5198a8b021ce452a9916bc2fae7c1","url":"tw_stocks/1614.json"},{"revision":"bffab098883a8b679b7fcd46d8079cb4","url":"tw_stocks/1615.json"},{"revision":"c5beffc5bf97b304180cbd036470b7ad","url":"tw_stocks/1616.json"},{"revision":"046d11f6863a784c28ff9befa9d97011","url":"tw_stocks/1617.json"},{"revision":"cc48f16e9e7b9e03ebf00548919f5a55","url":"tw_stocks/1618.json"},{"revision":"d3b75df774db37e91a73fc7dcc0c25aa","url":"tw_stocks/1623.json"},{"revision":"7bdca8b255fed30c6335f8f85ee566df","url":"tw_stocks/1626.json"},{"revision":"729eff8261b5808c39df249ca6ca060a","url":"tw_stocks/1702.json"},{"revision":"1a93d285064515cd1c625c04a845adbd","url":"tw_stocks/1707.json"},{"revision":"24f7efa62cee8269e8c2180f8da0140b","url":"tw_stocks/1708.json"},{"revision":"d6ab65a5d550b3d9aaa8a5f8c8cbb324","url":"tw_stocks/1709.json"},{"revision":"fdb50686dbc65c893956a22086dbf4a2","url":"tw_stocks/1710.json"},{"revision":"084caca3b7be067c527b6a65fae6f7fe","url":"tw_stocks/1711.json"},{"revision":"ba946bb870f9aad3bb06b5661194fd5c","url":"tw_stocks/1712.json"},{"revision":"197dfa82a6897d7bc20d7fc81a38f13e","url":"tw_stocks/1713.json"},{"revision":"25b7d3116789b4f5e1a3ab894ccc3fe9","url":"tw_stocks/1714.json"},{"revision":"c6ca9f9e1bed0c9c55c91cef38ff688d","url":"tw_stocks/1717.json"},{"revision":"4acef93a7767264987385854c35ea8ef","url":"tw_stocks/1718.json"},{"revision":"ba0c9280fe56a50b790b27b5f5f95347","url":"tw_stocks/1720.json"},{"revision":"e5752d475a9184d4823e267cc0a17488","url":"tw_stocks/1721.json"},{"revision":"2eac4dcfd74f646a2fede39504de5bc9","url":"tw_stocks/1722.json"},{"revision":"e9e254e2633ad30f293cc6a81001d54b","url":"tw_stocks/1723.json"},{"revision":"c36115ef7b37eb3cfa8f7d3f8ee1adf7","url":"tw_stocks/1725.json"},{"revision":"279a54eac53006c18ce2127d3e2037c6","url":"tw_stocks/1726.json"},{"revision":"14f5c888a47d2a63ae6c97463ad23fdf","url":"tw_stocks/1727.json"},{"revision":"3613d430450789a10046eeca15ec52d2","url":"tw_stocks/1730.json"},{"revision":"32bf12dbc16f1fa5c2bbb7c79116d3c3","url":"tw_stocks/1731.json"},{"revision":"2caadcf9c737a5aeaa673acbc8b44b4f","url":"tw_stocks/1732.json"},{"revision":"c86a68ee32db745308ba8c095eaa7449","url":"tw_stocks/1733.json"},{"revision":"8ed1a3867310722b913df93504c8dd2e","url":"tw_stocks/1734.json"},{"revision":"140660d81fb0031390cc20170b78da91","url":"tw_stocks/1735.json"},{"revision":"ac1b813c39c3cc0e779f3bd79c258388","url":"tw_stocks/1736.json"},{"revision":"5ef6e5410ccd45633e422623f3c3a2bb","url":"tw_stocks/1737.json"},{"revision":"1748488679ebc56f57cd44f48e619eec","url":"tw_stocks/1752.json"},{"revision":"08bbc5a88ffd375f291db3639e5aa638","url":"tw_stocks/1760.json"},{"revision":"569611a5c3b1b94bcea41227b1e000c1","url":"tw_stocks/1762.json"},{"revision":"5baa8dfdc3a15cdd47847d43e2c1d18a","url":"tw_stocks/1773.json"},{"revision":"9162402b5299632b52f810c31f5c5449","url":"tw_stocks/1776.json"},{"revision":"9cf847f5690c45434a8c8273e5849210","url":"tw_stocks/1783.json"},{"revision":"813e2dab9daa9db3c729c3def0d209fc","url":"tw_stocks/1786.json"},{"revision":"e235f31a75a55df1b8a5fbf96c1fe765","url":"tw_stocks/1789.json"},{"revision":"c389eb852849c253d25927055d7f1a2f","url":"tw_stocks/1795.json"},{"revision":"5c4abf3049fca5d9e84f223c5d40c53a","url":"tw_stocks/1802.json"},{"revision":"3ef122df57d9dbda62870e08843111a8","url":"tw_stocks/1805.json"},{"revision":"8a615f4817f758f66d9cc6d1f1568022","url":"tw_stocks/1806.json"},{"revision":"bce2602ffde0a2867cff18287a5a87e3","url":"tw_stocks/1808.json"},{"revision":"fde6fb50df10f7d43c0a1941e96bd764","url":"tw_stocks/1809.json"},{"revision":"b7a2310939eb34bffdee49849cd11904","url":"tw_stocks/1810.json"},{"revision":"fb1796c85623564562da43c3dda9b539","url":"tw_stocks/1817.json"},{"revision":"05ff21083f7fbea27d16662e2efbe7ac","url":"tw_stocks/1903.json"},{"revision":"0a35bb33eb71a5d162a0778775cd6412","url":"tw_stocks/1904.json"},{"revision":"d19b5cb40c198bfb7f056ad4a5bf9391","url":"tw_stocks/1905.json"},{"revision":"5ea38317fe08fa12cf2ed966e1f108e8","url":"tw_stocks/1906.json"},{"revision":"6dcb33aa3f69bcd21c6fdb1aecbebacb","url":"tw_stocks/1907.json"},{"revision":"3538ca802af94beebc9aaa772db11274","url":"tw_stocks/1909.json"},{"revision":"5b4d52c9213bd307b7a667d26e33f9fa","url":"tw_stocks/2002.json"},{"revision":"842ad392da7f9875fe2330aa98c231fb","url":"tw_stocks/2006.json"},{"revision":"a06d37527926cae69be8829f67483d15","url":"tw_stocks/2007.json"},{"revision":"a1ecb5b503cf032fda5c3bbb7225dadd","url":"tw_stocks/2008.json"},{"revision":"306e5f03f95e131262740ee1349f8edc","url":"tw_stocks/2009.json"},{"revision":"27996c75fe93f09822dc24f8eaa6a191","url":"tw_stocks/2010.json"},{"revision":"5056a26bb9be717f6aa031d6072f1d81","url":"tw_stocks/2012.json"},{"revision":"4d474b4045d75cff27d632ac486dfa66","url":"tw_stocks/2013.json"},{"revision":"29c76887323d92f422ff046807f2ea20","url":"tw_stocks/2014.json"},{"revision":"97aeca630b2cff9ad79bb2502e1368a1","url":"tw_stocks/2015.json"},{"revision":"debaa8b8335bca8880fae1e36e1b9205","url":"tw_stocks/2017.json"},{"revision":"1b32e9d3c4535d291a4f30b446fbd116","url":"tw_stocks/2020.json"},{"revision":"246d7ae90d6aa37a963970274e958e36","url":"tw_stocks/2022.json"},{"revision":"b9c4d52d88526d0fe0135cde36236882","url":"tw_stocks/2023.json"},{"revision":"5504488ced5eb266755ad6258820b71f","url":"tw_stocks/2024.json"},{"revision":"213ccf8c17d061614a4f6af4f598f8b7","url":"tw_stocks/2025.json"},{"revision":"c46c1e1a80a7ca472d25193a0c5ffc6a","url":"tw_stocks/2027.json"},{"revision":"d327572be4459c35cc5a5313b06083d9","url":"tw_stocks/2028.json"},{"revision":"831101b12cf62ef8700fa905f5d213c2","url":"tw_stocks/2029.json"},{"revision":"91ed11c7aae367b5a352331d7e5ddbe8","url":"tw_stocks/2030.json"},{"revision":"be1945c960ce8076039b16357531b966","url":"tw_stocks/2031.json"},{"revision":"4dae5ddf2c13134748719e055fb06d5b","url":"tw_stocks/2032.json"},{"revision":"fea54dd0cc2f3f42a568770aba86d381","url":"tw_stocks/2033.json"},{"revision":"c3dc2f81d4519721eaf8b76b5a38b206","url":"tw_stocks/2034.json"},{"revision":"161d45c50fc9afc6b805bc3640625203","url":"tw_stocks/2038.json"},{"revision":"61ac31378fb36df81ab8bb7f1c5063bf","url":"tw_stocks/2049.json"},{"revision":"33a5c16807d5c965a0d2c17d235fd3bf","url":"tw_stocks/2059.json"},{"revision":"4a37294708860b2f5a03c23e102b1c4c","url":"tw_stocks/2062.json"},{"revision":"f79484b75191cf7acea586e6cdbcae29","url":"tw_stocks/2069.json"},{"revision":"dd8b6023cd908a90b1fed81cd7406825","url":"tw_stocks/2101.json"},{"revision":"6b4371713d2718eeadc4ca8bf30d635d","url":"tw_stocks/2102.json"},{"revision":"fdce2498920e05ebc7e7d993122850ca","url":"tw_stocks/2103.json"},{"revision":"3571d624a8477aa052894f5ea605aed5","url":"tw_stocks/2104.json"},{"revision":"d84835a662f241baad6ec4c14c608700","url":"tw_stocks/2105.json"},{"revision":"9782508afbc384df583a014a717a4419","url":"tw_stocks/2106.json"},{"revision":"ec18e68bd5428b7dc64411537d821559","url":"tw_stocks/2107.json"},{"revision":"a92c5ef31588805faa55b0cc006a612c","url":"tw_stocks/2108.json"},{"revision":"1496ba0077413642a7ce5428cb59ee3d","url":"tw_stocks/2109.json"},{"revision":"03b04f15ead5336e3a632d2c1d5eb82e","url":"tw_stocks/2114.json"},{"revision":"820e5a576600d3b0340f25f851e797d7","url":"tw_stocks/2115.json"},{"revision":"88ec42eb52b0458861ed447383537f7d","url":"tw_stocks/2201.json"},{"revision":"1da1a5e30446e138cf7e8046ee33e2b8","url":"tw_stocks/2204.json"},{"revision":"6389bec5ab2c0c323be11a00cb7a433f","url":"tw_stocks/2206.json"},{"revision":"5c3a11198c9c142fcb69967319b11163","url":"tw_stocks/2207.json"},{"revision":"a48dfd057d0556f7e93b6a278d879418","url":"tw_stocks/2208.json"},{"revision":"cd1d5bcd951492c61a2a7f28aa73acd7","url":"tw_stocks/2211.json"},{"revision":"332f927c2caa116b559b0320b4c67fc6","url":"tw_stocks/2227.json"},{"revision":"f12bc2bbf04f976b8dd913ac871fd541","url":"tw_stocks/2228.json"},{"revision":"d975c3e770306f50bf01be94dcc7e096","url":"tw_stocks/2231.json"},{"revision":"8066fb0f8cb89390e73810bea4e63a55","url":"tw_stocks/2233.json"},{"revision":"5f7a94d9f74b257b86fd791370c0ba1f","url":"tw_stocks/2236.json"},{"revision":"f91b051f1d0d6443bf87360aaecc6da1","url":"tw_stocks/2239.json"},{"revision":"06887d636643ab0a846915c4ea3e7edc","url":"tw_stocks/2241.json"},{"revision":"2bba1be4488b72cb1d4b481186871f75","url":"tw_stocks/2243.json"},{"revision":"9c7d8d470fbb1de23f1e7df723e70d36","url":"tw_stocks/2247.json"},{"revision":"05a0fa9ba1d3314bbd8d22e7fe6e1c7a","url":"tw_stocks/2248.json"},{"revision":"4c7f8a8349d181e1199312d3ee81fcfa","url":"tw_stocks/2250.json"},{"revision":"f79c1b948f879673d40b1fadb46c3fa3","url":"tw_stocks/2301.json"},{"revision":"381200eb42e269ff0260e9d5d12273a0","url":"tw_stocks/2302.json"},{"revision":"45a2abb4620dc5b7baf0ae8ff07776b3","url":"tw_stocks/2303.json"},{"revision":"7e93d130eed0aa3160e491330e0cf406","url":"tw_stocks/2305.json"},{"revision":"7b9d67e1f1bf9d24a419e0fad19ac1bd","url":"tw_stocks/2308.json"},{"revision":"c9a3c5eb0436ebdaa4bd2b2b83b4ef40","url":"tw_stocks/2312.json"},{"revision":"13477ac0b001c1d81d0bda0f7e8ce7b9","url":"tw_stocks/2313.json"},{"revision":"e4c32952195ea91d35827a0dc0bc2e15","url":"tw_stocks/2314.json"},{"revision":"ca91f10b49d2fa9acb7bf2315eace393","url":"tw_stocks/2316.json"},{"revision":"32d5159a42b5038ce84f17a2303e85a7","url":"tw_stocks/2317.json"},{"revision":"4a14648d1937ea6760c5793825d316b2","url":"tw_stocks/2321.json"},{"revision":"39e0e89898c9f17c61634e0f82cfd649","url":"tw_stocks/2323.json"},{"revision":"c240012a766241cf60c3b809eb16f274","url":"tw_stocks/2324.json"},{"revision":"270707b6acdf627b57fec9c4d088d866","url":"tw_stocks/2327.json"},{"revision":"85d2ad1ad035e4d6024e1c527741e542","url":"tw_stocks/2328.json"},{"revision":"d378d432cac6f9031a4427d829afbecb","url":"tw_stocks/2329.json"},{"revision":"9770e89f1e928b6be292908ba192cb4a","url":"tw_stocks/2330.json"},{"revision":"54db81a7fe6b09ae52603988ba769476","url":"tw_stocks/2331.json"},{"revision":"5c922b8a563402235a1bd3a07db51e8d","url":"tw_stocks/2332.json"},{"revision":"127ea5f13f96b41e1d5d02ddf077afd2","url":"tw_stocks/2337.json"},{"revision":"700db1b707846dc48ef988bad2bd7f93","url":"tw_stocks/2338.json"},{"revision":"74167b844ebd3f9fb13921524044b853","url":"tw_stocks/2340.json"},{"revision":"1d0afff7ca5d0c8103880be3182599da","url":"tw_stocks/2342.json"},{"revision":"75b6efb4e6bc553cacc2dc459acd9700","url":"tw_stocks/2344.json"},{"revision":"6e36123be484f63814e0638967a2f020","url":"tw_stocks/2345.json"},{"revision":"06547dbdff4a0f41f882e6d4f8b6b759","url":"tw_stocks/2347.json"},{"revision":"42d9ff5a25305c05bc4a4966b1ebd68b","url":"tw_stocks/2348.json"},{"revision":"72e7d3e025ee8592f4f7e2e53c87f3a0","url":"tw_stocks/2349.json"},{"revision":"c82a7efd4961f4434c879d51b2567418","url":"tw_stocks/2351.json"},{"revision":"ed5c8af7dccf46b41ffaf7c520e93673","url":"tw_stocks/2352.json"},{"revision":"3b1074bfdea0dded5e2153262d8988b1","url":"tw_stocks/2353.json"},{"revision":"62ad24107a0afe9bfb378810771e48f3","url":"tw_stocks/2354.json"},{"revision":"9ef77cc9d07726a649045d6c55d1396f","url":"tw_stocks/2355.json"},{"revision":"488ae49d145cc6398ff87645c9d44588","url":"tw_stocks/2356.json"},{"revision":"1a32be8c80e67401bc2f929d2586d4fa","url":"tw_stocks/2357.json"},{"revision":"4d3c24299aaa8b8f30b84d7c1dd29892","url":"tw_stocks/2359.json"},{"revision":"72a9355fa131caa49e0706ba1404ea63","url":"tw_stocks/2360.json"},{"revision":"81d43c90ba9e5c8e60eead6e678035e4","url":"tw_stocks/2362.json"},{"revision":"22b1439d0678b884ca1368ff3802de9d","url":"tw_stocks/2363.json"},{"revision":"58b9a77d5f4c64aa49b5a1e42a618687","url":"tw_stocks/2364.json"},{"revision":"320bbd87d907d47d223d3ff4cd6cf31d","url":"tw_stocks/2365.json"},{"revision":"ddce18c25ca3ecf1d6197e7cb731e7af","url":"tw_stocks/2367.json"},{"revision":"0b12adcc9e81fb7991c6a28235d07ea0","url":"tw_stocks/2368.json"},{"revision":"1848fffa3ea7c451b316d833ea68c623","url":"tw_stocks/2369.json"},{"revision":"25e97cd27ab069bbe87711838b605e90","url":"tw_stocks/2371.json"},{"revision":"81c70b0e36b4081aac5cfc95b34c470e","url":"tw_stocks/2373.json"},{"revision":"6cd741e45878395b531f9a3165b151d5","url":"tw_stocks/2374.json"},{"revision":"3021d5dc660ed717f5826ad7e955a0c3","url":"tw_stocks/2375.json"},{"revision":"02e63265df2422d5d466c73b2e678610","url":"tw_stocks/2376.json"},{"revision":"af7d683e21e739dda4a19d52045bb2a7","url":"tw_stocks/2377.json"},{"revision":"530f5626c48f97e1101139e440a6196f","url":"tw_stocks/2379.json"},{"revision":"5f330752980582f752040c367d385f8e","url":"tw_stocks/2380.json"},{"revision":"c1f6b021a7008f214e0685d5e59661e8","url":"tw_stocks/2382.json"},{"revision":"cdbb2fecb1a22195cbca446f8cc15e37","url":"tw_stocks/2383.json"},{"revision":"4b120abae2e755999c2007a5112de6c7","url":"tw_stocks/2385.json"},{"revision":"12689aacac38b165fb7085b70335f104","url":"tw_stocks/2387.json"},{"revision":"5e56d44523608071ac5d16e3ca4b3f24","url":"tw_stocks/2388.json"},{"revision":"6020c19f958194fbcf57561a9f60d81e","url":"tw_stocks/2390.json"},{"revision":"dec607253882b1ebaf9d7acee6245aa1","url":"tw_stocks/2392.json"},{"revision":"06a0850a684002db14e38458158107e7","url":"tw_stocks/2393.json"},{"revision":"bea417a7fd212703c9d089e2f74309a5","url":"tw_stocks/2395.json"},{"revision":"e9c8d398316b20180329ef42acf50ce6","url":"tw_stocks/2397.json"},{"revision":"f8e91649fe3a92597f8c74e941a70292","url":"tw_stocks/2399.json"},{"revision":"e4bb447d66bba2c7a17d47ffd47dc212","url":"tw_stocks/2401.json"},{"revision":"8df18ed3d0995b8acbe835fb525be355","url":"tw_stocks/2402.json"},{"revision":"7b16d76d5a9ecec2999ab905afb1579a","url":"tw_stocks/2404.json"},{"revision":"2d7881d28b501caa6723bf50c53267ee","url":"tw_stocks/2405.json"},{"revision":"df1b236d133775b9cae43fec13ea565a","url":"tw_stocks/2406.json"},{"revision":"a0c33e976d1e3edf025817acc67ff6c1","url":"tw_stocks/2408.json"},{"revision":"9ffe063b4c3fd00d521e608b4f5cc41b","url":"tw_stocks/2409.json"},{"revision":"c9a4bbb687b0517e4384632da94e7733","url":"tw_stocks/2412.json"},{"revision":"d4225874a866f72901993f786425e6dc","url":"tw_stocks/2413.json"},{"revision":"a9aceab5f253f7b39f953e85022c9499","url":"tw_stocks/2414.json"},{"revision":"1bfa79528f9de9c69bc84414be4d8a7f","url":"tw_stocks/2415.json"},{"revision":"95490868fe869b3abadaf09788a1360c","url":"tw_stocks/2417.json"},{"revision":"6d14afff26deabcf8f14e774d0475df5","url":"tw_stocks/2419.json"},{"revision":"ed874dccaefe5f421031c765ba5f8996","url":"tw_stocks/2420.json"},{"revision":"b4244427e6952eae6f829bfb15e69591","url":"tw_stocks/2421.json"},{"revision":"865de756e0da10640d41367e0d7dbb6e","url":"tw_stocks/2423.json"},{"revision":"8586f34528aa712f639d485303af0ae7","url":"tw_stocks/2424.json"},{"revision":"9e202cb518f38a95c572bb9951bad790","url":"tw_stocks/2425.json"},{"revision":"fa1b7adba0a64f283d21b14639c2fb37","url":"tw_stocks/2426.json"},{"revision":"dbe5be682f586c529a91dab5f8b25b71","url":"tw_stocks/2427.json"},{"revision":"ef60a34f13ae775ee2fe73bec10d1713","url":"tw_stocks/2428.json"},{"revision":"04b2a17652dc29b298182184e1dea839","url":"tw_stocks/2429.json"},{"revision":"2bffbe963236553dc43a6f2ae935a92c","url":"tw_stocks/2430.json"},{"revision":"8a33d295dec951e1bd36b3becfb7beb9","url":"tw_stocks/2431.json"},{"revision":"a57a3e6f5aa5b228d8efda76b0a64da2","url":"tw_stocks/2433.json"},{"revision":"a81aaffae97681bdb312e589e3a93d74","url":"tw_stocks/2434.json"},{"revision":"73190c1caa85adc5edf5ec28ab6f66e7","url":"tw_stocks/2436.json"},{"revision":"070832b0da5d1f6960ed508efcdf46aa","url":"tw_stocks/2438.json"},{"revision":"a387b7d87255978192e2126952743b18","url":"tw_stocks/2439.json"},{"revision":"f34cab077baaecfe1d54c2a887b4aa9d","url":"tw_stocks/2440.json"},{"revision":"d0e66f16cbd6fd61d320c0214ba54f83","url":"tw_stocks/2441.json"},{"revision":"45933145fc47ab5e897674325a5fef42","url":"tw_stocks/2442.json"},{"revision":"9c094c81a07ce256be5512167931f5d0","url":"tw_stocks/2444.json"},{"revision":"34c2ec3e834818dc6b2bf6b3f957fc73","url":"tw_stocks/2449.json"},{"revision":"76d1e73907c46bd91ddb8f24b13727dc","url":"tw_stocks/2450.json"},{"revision":"3d57f7238ce14ffa5071a4a2fbd0f35f","url":"tw_stocks/2451.json"},{"revision":"79051a22c4f6fcc70057cf212d572be9","url":"tw_stocks/2453.json"},{"revision":"1c10eff21eecb987610a65a93344d28d","url":"tw_stocks/2454.json"},{"revision":"41c4d0be33046b6c109ea3e817ac162e","url":"tw_stocks/2455.json"},{"revision":"899453ba425782d5ab0257027a9d310f","url":"tw_stocks/2457.json"},{"revision":"9555aab6db1c732781d71662b464fb30","url":"tw_stocks/2458.json"},{"revision":"291b4e6e782893c11ccbb03f46f0106c","url":"tw_stocks/2459.json"},{"revision":"7ac0eac9e994eba46ec35ab57b791535","url":"tw_stocks/2460.json"},{"revision":"174644fb2841de6364163b19978dcc1c","url":"tw_stocks/2461.json"},{"revision":"a4d72c2ee077c380d66aabbebdaaa06d","url":"tw_stocks/2462.json"},{"revision":"89e3b09195509b538a1de6f4c1b5683e","url":"tw_stocks/2464.json"},{"revision":"0cd8fc2e2fed533964d6c8b1cd1e4ada","url":"tw_stocks/2465.json"},{"revision":"59687309f8366c3d2ec4d0135f0b73fc","url":"tw_stocks/2466.json"},{"revision":"e4dfb5942887c05c2effca6e68d8ebc8","url":"tw_stocks/2467.json"},{"revision":"f549f4fb1546aa6629397dc8522d8457","url":"tw_stocks/2468.json"},{"revision":"863a8115e8c23bea57091b50f35bd66a","url":"tw_stocks/2471.json"},{"revision":"dc2564e9c171bc32a93b755dc5751532","url":"tw_stocks/2472.json"},{"revision":"23325721cce65dae93dc11dd66ac2757","url":"tw_stocks/2474.json"},{"revision":"76c64029fb7965e8d1031e7e30be021a","url":"tw_stocks/2476.json"},{"revision":"18d0075d5986d135d8f64227ec4b3591","url":"tw_stocks/2477.json"},{"revision":"d5f6b796eb1c9d2b15316722786c855b","url":"tw_stocks/2478.json"},{"revision":"8629560bf31495f28fd5d52ed11958f4","url":"tw_stocks/2480.json"},{"revision":"5e3407539ef4ff20c37314e7f69a9bf5","url":"tw_stocks/2481.json"},{"revision":"2e955bc32343d9638eed9fc22a479925","url":"tw_stocks/2482.json"},{"revision":"c67c108ced6da38c5ae1c3847904a064","url":"tw_stocks/2483.json"},{"revision":"b33f99a231b38d30e785c369f70298ed","url":"tw_stocks/2484.json"},{"revision":"005f4bf4fb8e4888a748feaf4f5e4f47","url":"tw_stocks/2485.json"},{"revision":"93bc888770e3dd53f47c144e6ebe79ce","url":"tw_stocks/2486.json"},{"revision":"cf77e367b6e9e0829cccbbc05d3b9929","url":"tw_stocks/2488.json"},{"revision":"a79cac02fcd6ff39c4462cf3a043720a","url":"tw_stocks/2489.json"},{"revision":"a093b502e1626bc179228742d58de73c","url":"tw_stocks/2491.json"},{"revision":"12b5e138f719b66a744cac12cd347684","url":"tw_stocks/2492.json"},{"revision":"6457f888889dc621070a3bc47aeb0748","url":"tw_stocks/2493.json"},{"revision":"296a90969b20929b8257f8d84c0e5ab8","url":"tw_stocks/2495.json"},{"revision":"95b175d4352f47fe675ebe9289be4104","url":"tw_stocks/2496.json"},{"revision":"00817c8886e5a5bfd2eb91084f0639bc","url":"tw_stocks/2497.json"},{"revision":"4821e43ca34f69cf94b87a989d8e9087","url":"tw_stocks/2498.json"},{"revision":"bf81368091db7d5e51363fde9e05f68e","url":"tw_stocks/2501.json"},{"revision":"fb20c2c950f07a99dc4781eb05f6aa98","url":"tw_stocks/2504.json"},{"revision":"69eb978e15abe37936df8a9fb9e6bc55","url":"tw_stocks/2505.json"},{"revision":"8c032e4febe6df3713f2cd494a9bf700","url":"tw_stocks/2506.json"},{"revision":"39a8a93dd39448aecd2c36f666e3231f","url":"tw_stocks/2509.json"},{"revision":"d5a3d95aac4b1b33ca4fd1d75d811933","url":"tw_stocks/2511.json"},{"revision":"dc4345e8fc40372040006e0b7fba120c","url":"tw_stocks/2514.json"},{"revision":"1050a4fe1fd0d805996b1aaab1897a21","url":"tw_stocks/2515.json"},{"revision":"831a40289f7b8b836ebf57aad7314da9","url":"tw_stocks/2516.json"},{"revision":"3dfe8730c45f4393a0c57d04032b7e6c","url":"tw_stocks/2520.json"},{"revision":"30faa79c265a2830ba012f33401dd5ee","url":"tw_stocks/2524.json"},{"revision":"3cbb897c721b65cd769329afec76b418","url":"tw_stocks/2527.json"},{"revision":"78a3aa2b98433082fdc7f26f238c9b4a","url":"tw_stocks/2528.json"},{"revision":"dcb43cee90143b4927d94b0daeb0961c","url":"tw_stocks/2530.json"},{"revision":"906ee69d21fbbc38ad4a823471202b55","url":"tw_stocks/2534.json"},{"revision":"8d840b698b41170f5dc68eff872f9ae6","url":"tw_stocks/2535.json"},{"revision":"c73fd7c452a4163e8b3c73103288f156","url":"tw_stocks/2536.json"},{"revision":"bf9f81863b7dd0a672f2a21722d98c1e","url":"tw_stocks/2537.json"},{"revision":"cbbf63c43da593a5e8cb5dc1b85dfdb2","url":"tw_stocks/2538.json"},{"revision":"85ce37f6bcaba4978455cbb4e34844bd","url":"tw_stocks/2539.json"},{"revision":"1f048d592403775f9314ee0a9c0c90d3","url":"tw_stocks/2540.json"},{"revision":"abf3fdf6ed347d668f53159a88886e56","url":"tw_stocks/2542.json"},{"revision":"00323c3d24938a9874b2bc0d3eeeee2a","url":"tw_stocks/2543.json"},{"revision":"12a3586f961197f456c9d19b23873db8","url":"tw_stocks/2545.json"},{"revision":"1240b5b3ab7a167812a6d2cfd52ce80d","url":"tw_stocks/2546.json"},{"revision":"bbef223fe7bbf2cda0b13d7c26be0285","url":"tw_stocks/2547.json"},{"revision":"dff0d86385b5bf3bb45f3bb623a53f3c","url":"tw_stocks/2548.json"},{"revision":"51d1102d42ba57dd0f65e2397d507e77","url":"tw_stocks/2597.json"},{"revision":"fa1a659c9b2d118af081cf5eeb4e5287","url":"tw_stocks/2601.json"},{"revision":"0789d96fa8962f15a475a115c1f73651","url":"tw_stocks/2603.json"},{"revision":"e6d14bd4e66f904b00a16f03c10b4054","url":"tw_stocks/2605.json"},{"revision":"8073f24564299b67f73ffcc61c0b7664","url":"tw_stocks/2606.json"},{"revision":"0b38d89e8154914c1f6bdbbd0a5599c9","url":"tw_stocks/2607.json"},{"revision":"12856081761189bb730818b8d8e95bab","url":"tw_stocks/2608.json"},{"revision":"aeff20aa6c973782df56fb5bd693ab57","url":"tw_stocks/2609.json"},{"revision":"c1f8e72af132f2347752264069fda724","url":"tw_stocks/2610.json"},{"revision":"9de2e7ed6001fff3a2f58ebb0b5b0fd8","url":"tw_stocks/2611.json"},{"revision":"55a038acb37fe59af32fb227fb6b5aa8","url":"tw_stocks/2612.json"},{"revision":"306069d19f91da28d3d7e986e3ed3eaa","url":"tw_stocks/2613.json"},{"revision":"38f1ac1856d65b122d17ba4fd6d6ae81","url":"tw_stocks/2614.json"},{"revision":"56f023af056e858a08a6935a3be71c03","url":"tw_stocks/2615.json"},{"revision":"46b343d78042866c5e9c94a72a6ba63f","url":"tw_stocks/2616.json"},{"revision":"2c570b1cc23aeb3a1f02b09f01a5d13f","url":"tw_stocks/2617.json"},{"revision":"5554c1966cc4f8af59615894944d5ffd","url":"tw_stocks/2618.json"},{"revision":"d03dfab20e6219b6ae2fc6646e13b657","url":"tw_stocks/2630.json"},{"revision":"f134d62da3af8f1bd3f128180fa6376b","url":"tw_stocks/2633.json"},{"revision":"f7212e1aa1686b7ab1bc7739d007c60b","url":"tw_stocks/2634.json"},{"revision":"a91064e6bb3e59690281ac282f92f820","url":"tw_stocks/2636.json"},{"revision":"f6fddc2536d6df0dc21609bc2aaca05b","url":"tw_stocks/2637.json"},{"revision":"5a0d1056b7891ee089303d264e3a3ed9","url":"tw_stocks/2642.json"},{"revision":"20352ccdfe54ddc0d5f1dcb9cfd7992f","url":"tw_stocks/2645.json"},{"revision":"f3d9e9026c89a8f083d33d239cf6efe9","url":"tw_stocks/2646.json"},{"revision":"0364113a5d5e1019546f837cbf280c0a","url":"tw_stocks/2701.json"},{"revision":"4c24cc1105975ca419dc25319fe49701","url":"tw_stocks/2702.json"},{"revision":"d910059be6716e83b8a444c0c33b80b9","url":"tw_stocks/2704.json"},{"revision":"eec5fab739a846cd05beb987758f8da2","url":"tw_stocks/2705.json"},{"revision":"dbcab2a30d15561b36c729bd44008e63","url":"tw_stocks/2706.json"},{"revision":"9fdeb9c23d7995c056f166adc739d837","url":"tw_stocks/2707.json"},{"revision":"1a782a7ab8b95e8ddf1bce9fbd4a567d","url":"tw_stocks/2712.json"},{"revision":"aeb98544cc1008319cb4d8ccd5ca97d1","url":"tw_stocks/2722.json"},{"revision":"782dd24d75b56636fd50e5f15e88ba0f","url":"tw_stocks/2723.json"},{"revision":"841ed322ff3fc6951c02ef7e2582416e","url":"tw_stocks/2727.json"},{"revision":"406214ca504d2147086415098ac16503","url":"tw_stocks/2731.json"},{"revision":"89c9ff8e16178ff03586f75df166f040","url":"tw_stocks/2739.json"},{"revision":"4041cd2bf9b51b2f97b5c94b918f200d","url":"tw_stocks/2748.json"},{"revision":"160a31e9d5a54ad3d5c8d304e99cf40e","url":"tw_stocks/2753.json"},{"revision":"2a68a8fc64317777b71dcb4bc28373ac","url":"tw_stocks/2762.json"},{"revision":"0ddd1e077dd65a15f98215e8be5a9c72","url":"tw_stocks/2801.json"},{"revision":"7ad6a987f10774a773617ad6d6f18686","url":"tw_stocks/2812.json"},{"revision":"9a6100fddfa256ed34b001e2c2e33909","url":"tw_stocks/2816.json"},{"revision":"ca84bd85655e4c7bd74d9b4add35128e","url":"tw_stocks/2820.json"},{"revision":"ce24ed752417637db16912de2df0059e","url":"tw_stocks/2832.json"},{"revision":"fd567436ffc57e86df80c5d999a4537d","url":"tw_stocks/2834.json"},{"revision":"49d5f3d65d9c99bac04f42e767453016","url":"tw_stocks/2836.json"},{"revision":"5f120ded4f2a874ebf235f8a53dd1d81","url":"tw_stocks/2838.json"},{"revision":"77964dc407ab1ed8cabe9f0f51a636be","url":"tw_stocks/2845.json"},{"revision":"8d3307ecf4fed650b9a5dbb74c4db6de","url":"tw_stocks/2849.json"},{"revision":"d96c2407e59027cfd245d11dcc7f4844","url":"tw_stocks/2850.json"},{"revision":"cbfafc28ac367f84e656271a5629423f","url":"tw_stocks/2851.json"},{"revision":"7cb584c866442b78dd8c899e63391418","url":"tw_stocks/2852.json"},{"revision":"ecded14972809f57b3895c1b5772993a","url":"tw_stocks/2855.json"},{"revision":"43e03af717482b7c9424b2c84ef00834","url":"tw_stocks/2867.json"},{"revision":"0f2b7fd0cc636557bc6aed3485ad9854","url":"tw_stocks/2880.json"},{"revision":"faee5dfeec1f3681f44c3234a2c98252","url":"tw_stocks/2881.json"},{"revision":"a423e4583a1410381411acc9cbe52bba","url":"tw_stocks/2882.json"},{"revision":"527ece53cfea980051538ed44ad93dd8","url":"tw_stocks/2883.json"},{"revision":"40a6dff470df36dbc7d0747e0d635cde","url":"tw_stocks/2884.json"},{"revision":"1470a95ed0d74f51d8c9f4a9c956668e","url":"tw_stocks/2885.json"},{"revision":"00606fe9c282e070bfcf51ede7732844","url":"tw_stocks/2886.json"},{"revision":"92f4c5a96a6a939ad2ae8d8373b14dc2","url":"tw_stocks/2887.json"},{"revision":"86e86a7667f8900f8bda491c44d06acf","url":"tw_stocks/2889.json"},{"revision":"77722e555d80a57cf5fa05aca4b41180","url":"tw_stocks/2890.json"},{"revision":"27b6f632064d1b8402fd0bf636a8e69e","url":"tw_stocks/2891.json"},{"revision":"ae2c55b641090bb8cd49a86edef68037","url":"tw_stocks/2892.json"},{"revision":"7ee9c2a757a47321f00769d096deee50","url":"tw_stocks/2897.json"},{"revision":"38d118b9ef03845d4fdad69c725dee7a","url":"tw_stocks/2901.json"},{"revision":"a5828577517fb10619b1dbabe34fd3fe","url":"tw_stocks/2903.json"},{"revision":"eb46e70e7dd495ea76871154ad8c6be5","url":"tw_stocks/2904.json"},{"revision":"06aec48ee39e0a0558e5a7437684fb13","url":"tw_stocks/2905.json"},{"revision":"4a028b92b4490e5dd5dcb29e9ff48a05","url":"tw_stocks/2906.json"},{"revision":"a2e2231bdc1a4e416d78dff4243a9585","url":"tw_stocks/2908.json"},{"revision":"6d68c81780fa2ee665a06ab2a14b4b84","url":"tw_stocks/2910.json"},{"revision":"c6e9f48c7f37da446a176f5dfdc9f1b5","url":"tw_stocks/2911.json"},{"revision":"087d830778854aff9f070461aae26ab8","url":"tw_stocks/2912.json"},{"revision":"de4c75d10be0f690a1da88c4dfaec90f","url":"tw_stocks/2913.json"},{"revision":"1256cefe0802d5e6ff11075f050c45fb","url":"tw_stocks/2915.json"},{"revision":"8f41d9fa49daa78ca8808daf2c3f16f1","url":"tw_stocks/2923.json"},{"revision":"f82c93ac10c140c0eddaa4a36f6ae63c","url":"tw_stocks/2929.json"},{"revision":"8f1fb1e47ccb01966282d07aefe448dc","url":"tw_stocks/2939.json"},{"revision":"f070943f181410bd74b9c9d96e6cbb70","url":"tw_stocks/2945.json"},{"revision":"73eb1195af395e123a3d68d468ee1ea0","url":"tw_stocks/3002.json"},{"revision":"8ee496d44a08b013e99f75de000f13d6","url":"tw_stocks/3003.json"},{"revision":"b44142c98c16ccda026ac156e5f8e701","url":"tw_stocks/3004.json"},{"revision":"ce6e740b3e6c0b7bf7d0be60db412b82","url":"tw_stocks/3005.json"},{"revision":"64314ca9de3088335c379493683ad1a5","url":"tw_stocks/3006.json"},{"revision":"57cb7a0c9f1c01c80a82cbe040844e88","url":"tw_stocks/3008.json"},{"revision":"7aa1282060003f10236340b91b135657","url":"tw_stocks/3010.json"},{"revision":"812be47d5cd0d10a48ccdbc4de6ed5d3","url":"tw_stocks/3011.json"},{"revision":"e855462711e1903095218f6e93945637","url":"tw_stocks/3013.json"},{"revision":"d06cf8ab9fc04a9e974c5e93aebaf205","url":"tw_stocks/3014.json"},{"revision":"7c17639943043bea763bdc91b4b79a77","url":"tw_stocks/3015.json"},{"revision":"b84411b803cd5c73a11e55c9702c9efc","url":"tw_stocks/3016.json"},{"revision":"3abd76397aebde8eb154d3d79d0a7c33","url":"tw_stocks/3017.json"},{"revision":"c82a1e35e6f8527f580cb23c15a1e340","url":"tw_stocks/3018.json"},{"revision":"e7ca994aa1aa77ba7191a2a8797cbb05","url":"tw_stocks/3019.json"},{"revision":"167b7555b99ace615f2d576a817883cd","url":"tw_stocks/3021.json"},{"revision":"8f5521b718b9d9be499fb6a325bc6f35","url":"tw_stocks/3022.json"},{"revision":"c56523cdd7a2d90e4508e91781bbf59c","url":"tw_stocks/3023.json"},{"revision":"d85bf6640226f75ccd3c509874a305fc","url":"tw_stocks/3024.json"},{"revision":"f11b66af05bc298ff7d46df2dc38692b","url":"tw_stocks/3025.json"},{"revision":"8b50c8b3bea7619e2a3170b67e9807fe","url":"tw_stocks/3026.json"},{"revision":"601d758961652d30d9245742c058ce89","url":"tw_stocks/3027.json"},{"revision":"df55cb6fd6e912fb56c48777c4f89372","url":"tw_stocks/3028.json"},{"revision":"a1969b41a1965aa76855438b073052c9","url":"tw_stocks/3029.json"},{"revision":"fb6613c8398d616b31e0149102d51f93","url":"tw_stocks/3030.json"},{"revision":"dfba440f6f5dd0ff43d4ad5764d50743","url":"tw_stocks/3031.json"},{"revision":"e42e01dafa88d0be3546027c36f01ce3","url":"tw_stocks/3032.json"},{"revision":"7501b355f59b1f5ced5e3b41ae84d1ce","url":"tw_stocks/3033.json"},{"revision":"9f71e030b6637284b345d6cb62eca895","url":"tw_stocks/3034.json"},{"revision":"5ba6ba97d6e69a3200b80bd79ef57053","url":"tw_stocks/3035.json"},{"revision":"2f739e0dd355b8a6d086760a65ee4bfb","url":"tw_stocks/3036.json"},{"revision":"add8af275f438e42b8e3126e8dfcb66b","url":"tw_stocks/3037.json"},{"revision":"ea39c019261cc1aea26cd1cbcaecdf1f","url":"tw_stocks/3038.json"},{"revision":"52319cca3a97c8fd07a809b26fe42c6a","url":"tw_stocks/3040.json"},{"revision":"513134bff669110c03f69266915c4573","url":"tw_stocks/3041.json"},{"revision":"9893ec42f265c466136b9c702bcb3688","url":"tw_stocks/3042.json"},{"revision":"dd6a764c2ce9654912cc4ff6fcbd37af","url":"tw_stocks/3043.json"},{"revision":"4125aa3b88e0bb7843e2eb151e083696","url":"tw_stocks/3044.json"},{"revision":"679d69a16c247279b34e29c9f3ead2ee","url":"tw_stocks/3045.json"},{"revision":"4644335a01f42302c684f10555151463","url":"tw_stocks/3046.json"},{"revision":"6269547ea8d57e815834f88165c7c522","url":"tw_stocks/3047.json"},{"revision":"0594b4b9b24a774e23f9c8d85b7237f3","url":"tw_stocks/3048.json"},{"revision":"80801e2ceb0d9194764864524ab059d0","url":"tw_stocks/3049.json"},{"revision":"eb3c4c5657dde846cc0cba4874e71e9a","url":"tw_stocks/3050.json"},{"revision":"f0c8c5cbbcc5568e47cb6e37fe22f48f","url":"tw_stocks/3051.json"},{"revision":"2e6767be6621437c28162553b4ab4909","url":"tw_stocks/3052.json"},{"revision":"1d962fe269637df4674123b849c13669","url":"tw_stocks/3054.json"},{"revision":"781d741295e65e308ea7cfa501ecfdf1","url":"tw_stocks/3055.json"},{"revision":"b53f5112493ee317b188f3ebd0c88213","url":"tw_stocks/3056.json"},{"revision":"9e69a6b1c9f8e24b2a20652c95ed1816","url":"tw_stocks/3057.json"},{"revision":"3d6a59f3ea8c567e08e17d1ffc89fd36","url":"tw_stocks/3058.json"},{"revision":"b2a83e84982ef52681e6ccdf8bdddd66","url":"tw_stocks/3059.json"},{"revision":"766504b2382f06b8eed71cf91aec7c79","url":"tw_stocks/3060.json"},{"revision":"f29ea7af16b072446877774ec951ff3a","url":"tw_stocks/3062.json"},{"revision":"36af177c1c6537475cdd255621eb5632","url":"tw_stocks/3090.json"},{"revision":"227bcd02dde9b1dffc5b734b7e97962a","url":"tw_stocks/3092.json"},{"revision":"2d0e7d8119e30b425182920b06aeaa77","url":"tw_stocks/3094.json"},{"revision":"5de01c0899ced0cb5c97e4e0c41926a2","url":"tw_stocks/3130.json"},{"revision":"17db3d046f78ea0beb03c04dd265b744","url":"tw_stocks/3135.json"},{"revision":"7207db7755e2b93c0392bcc5d53786aa","url":"tw_stocks/3138.json"},{"revision":"a423764797d6f7489cde34bc9a10c4e0","url":"tw_stocks/3149.json"},{"revision":"2b8a5b76e498b86b61500dd49453d5a9","url":"tw_stocks/3164.json"},{"revision":"f9872f519e877660939a9c302f7d9473","url":"tw_stocks/3167.json"},{"revision":"d41f83e16f8088ce1025faf274239f61","url":"tw_stocks/3168.json"},{"revision":"1e6f5d05bceec43e86cd8bbfad7af62b","url":"tw_stocks/3189.json"},{"revision":"2ad41da648bfcb5387ccee07139ee2e7","url":"tw_stocks/3209.json"},{"revision":"0c1651b7317cb6260ddee3bc773511c0","url":"tw_stocks/3229.json"},{"revision":"7d61de8f787642139f5e3fdb8d2e5272","url":"tw_stocks/3231.json"},{"revision":"ea2fb11d4b691509bd316bf2b450b227","url":"tw_stocks/3257.json"},{"revision":"a8ae9c4d86d0c9c9b5d9b39e4d50d2ae","url":"tw_stocks/3266.json"},{"revision":"95e9e55a1dd31f0284fceb87cc8ab9eb","url":"tw_stocks/3296.json"},{"revision":"3c5df8e927b70e07ffb833cf7f2f28f3","url":"tw_stocks/3305.json"},{"revision":"8f2cb4b7c2979ae69cf49e9556521fef","url":"tw_stocks/3308.json"},{"revision":"471b297d5f9f0bac11632b9ddd2d4ace","url":"tw_stocks/3311.json"},{"revision":"2889439e0d4619945805f0492ee28ff0","url":"tw_stocks/3312.json"},{"revision":"17fb33717ff8be4065f4e11880f5f9dd","url":"tw_stocks/3321.json"},{"revision":"806444e643b35d8c4bcaf51303767fd8","url":"tw_stocks/3338.json"},{"revision":"eebdf9dc29df404ba24965884a1b16cc","url":"tw_stocks/3346.json"},{"revision":"24396b977e1add6419a02c734509d7a7","url":"tw_stocks/3356.json"},{"revision":"da9a61d25f6c6b417ff5bd7c36f74965","url":"tw_stocks/3376.json"},{"revision":"fb7c383a709fd58a74325a8caf9d620d","url":"tw_stocks/3380.json"},{"revision":"d008668247da4cd53de9f8b95e96e0b3","url":"tw_stocks/3406.json"},{"revision":"115d6f5c378152016de1dbca8c28b772","url":"tw_stocks/3413.json"},{"revision":"3e82d4714202adb556822b665925f970","url":"tw_stocks/3416.json"},{"revision":"983ce992ea367382ee8d938206fee3ef","url":"tw_stocks/3419.json"},{"revision":"67868cf1d7b70c90be908cc085eaa0c7","url":"tw_stocks/3432.json"},{"revision":"255cb9b1dad57d5f85b375b97db09694","url":"tw_stocks/3437.json"},{"revision":"59244a456aa9a0fb3d00e3eafc0dd731","url":"tw_stocks/3443.json"},{"revision":"93792b0bd8488bb46407a1b295b1382a","url":"tw_stocks/3447.json"},{"revision":"4a82ab795c2f0bc73b2d0b4d8d87ac4a","url":"tw_stocks/3450.json"},{"revision":"7ed565250e51a8470e8f7347b6e2f1fa","url":"tw_stocks/3454.json"},{"revision":"0553ed28044f3118e7b1d089258c0181","url":"tw_stocks/3481.json"},{"revision":"c7e53a6ebf7c3120e3ee89efa5130fac","url":"tw_stocks/3494.json"},{"revision":"7ae28c4d6d41b1442fb2260d54ed509f","url":"tw_stocks/3501.json"},{"revision":"540fb66ccb85d4400c3a4aa01bf64f05","url":"tw_stocks/3504.json"},{"revision":"a56476780c1191e19ca825d7ab58d591","url":"tw_stocks/3515.json"},{"revision":"3cc66cd95c575ff7ef5573ee2461a4c0","url":"tw_stocks/3518.json"},{"revision":"dc73893f60802cadbdfb3edc3c75aba8","url":"tw_stocks/3528.json"},{"revision":"68fffe5bb84e966f9f96c8ec3c181143","url":"tw_stocks/3530.json"},{"revision":"87621a23cf928659d14626cfd0e5a034","url":"tw_stocks/3532.json"},{"revision":"cf9c35f34161e7c69fe5880f36d803e3","url":"tw_stocks/3533.json"},{"revision":"f04c187223b3c58f1adf6342bb579a27","url":"tw_stocks/3535.json"},{"revision":"426009b9409a2f2568bb594cd81ced19","url":"tw_stocks/3543.json"},{"revision":"31b0ff10cf22af98b263964c32f42ced","url":"tw_stocks/3545.json"},{"revision":"046810c401096c287141c5cdadcbd201","url":"tw_stocks/3550.json"},{"revision":"1c3bfacec755d7e0b7954383f027914d","url":"tw_stocks/3557.json"},{"revision":"940626c2fa7eb6661fb0975cb7b68cbb","url":"tw_stocks/3563.json"},{"revision":"9edd61a5d2db7807b2e40c70137f52e5","url":"tw_stocks/3576.json"},{"revision":"ec276a47c5893599b88aef3530c2cf13","url":"tw_stocks/3583.json"},{"revision":"9ad590180fca899b3430ad8c73ba1840","url":"tw_stocks/3588.json"},{"revision":"67393674998632243166bf79c9496a82","url":"tw_stocks/3591.json"},{"revision":"aa088a2bb339890accabc4c2f67f7e5e","url":"tw_stocks/3592.json"},{"revision":"c9f626dd0c70da6cdf6a96138089962e","url":"tw_stocks/3593.json"},{"revision":"29604d04251c30955697ad606309734d","url":"tw_stocks/3596.json"},{"revision":"61f780e697d1d384f550a44976b1b9b9","url":"tw_stocks/3605.json"},{"revision":"a2f4ccb3e955eab5e4a2824f2476785d","url":"tw_stocks/3607.json"},{"revision":"0115ffdafaf45750084f180981953997","url":"tw_stocks/3617.json"},{"revision":"857845419c15c262665d5a5c7ac2b7cd","url":"tw_stocks/3622.json"},{"revision":"cf25f3fa0d52ac3fce1c1455d2dea770","url":"tw_stocks/3645.json"},{"revision":"dbbdcfecb1251eb6f3a9b50fd1f92b06","url":"tw_stocks/3652.json"},{"revision":"2129f54000e764c59fab4f6d7aebfece","url":"tw_stocks/3653.json"},{"revision":"93acbf2cb87b32f3f24174bf1ade560b","url":"tw_stocks/3661.json"},{"revision":"9f0177eecf5df67a967f305c7d14e1f7","url":"tw_stocks/3665.json"},{"revision":"e7a0debe4b8a6e9eeaea47aa481b0bd6","url":"tw_stocks/3669.json"},{"revision":"0e609f512d4aba90280cdc88ac08a744","url":"tw_stocks/3673.json"},{"revision":"3912bd14e3e34a7db0e6ad365b3fba56","url":"tw_stocks/3679.json"},{"revision":"0b6847677c7a4017abc38e932edf63fd","url":"tw_stocks/3686.json"},{"revision":"445dba311565ef96f677fbd2043ca846","url":"tw_stocks/3694.json"},{"revision":"644ac9e85a0d569d3f64be2d301bc00f","url":"tw_stocks/3701.json"},{"revision":"07f1bdac2e7a1e5c583950a5807d3dc9","url":"tw_stocks/3702.json"},{"revision":"351c5a0c191358fad331859ce5577100","url":"tw_stocks/3703.json"},{"revision":"75c0106f9413e33f97a2a0474e95a69d","url":"tw_stocks/3704.json"},{"revision":"8c7b2ad47fb31ae6bc47bc2c406f65b1","url":"tw_stocks/3705.json"},{"revision":"35b34d58af8303cfd6aa7645ca33ea73","url":"tw_stocks/3706.json"},{"revision":"98a2bbe299133caef0a9782c95798d80","url":"tw_stocks/3708.json"},{"revision":"d4fe22acafc0534b1a0439b67f8a7a0f","url":"tw_stocks/3711.json"},{"revision":"aa134327ea6e6fb9e51ed698a1f56cc2","url":"tw_stocks/3712.json"},{"revision":"5e2866e1f1f1d2688e418f4823f55fef","url":"tw_stocks/3714.json"},{"revision":"68f0f6959611383bf0d2d56f8410ed78","url":"tw_stocks/3715.json"},{"revision":"92433974fa309a2351d096694041ab2f","url":"tw_stocks/3716.json"},{"revision":"730a5074716d6e7c8414424f2114874b","url":"tw_stocks/3717.json"},{"revision":"a38f4b0f79c604e32b7a65b9c87a6c01","url":"tw_stocks/4104.json"},{"revision":"122015fa0a3fc664712a77a01bb2d048","url":"tw_stocks/4106.json"},{"revision":"3b54311e4392325901f77890e33b0c17","url":"tw_stocks/4108.json"},{"revision":"dd4e6318246c33c542d744e363b6d225","url":"tw_stocks/4119.json"},{"revision":"85adb8bb1a83ae5619725ce8adbaf832","url":"tw_stocks/4133.json"},{"revision":"c52f02025084b5e2b9c86929372f2469","url":"tw_stocks/4137.json"},{"revision":"9b034db2bf565d8e38bff2cb7e07ebfa","url":"tw_stocks/4142.json"},{"revision":"db7f0bb7dac42ce1b537eff98fd78d22","url":"tw_stocks/4148.json"},{"revision":"b7297af9de7a0b720d25e66740d27ad6","url":"tw_stocks/4155.json"},{"revision":"40ebc717a15d3925f0f62476bfe76d7d","url":"tw_stocks/4164.json"},{"revision":"b7e921d00eda2916b81054b7af7d7c1f","url":"tw_stocks/4190.json"},{"revision":"f114d7a7c001bb97ec5f90e0701e457d","url":"tw_stocks/4306.json"},{"revision":"04478f93c0f107848b90602cad79be70","url":"tw_stocks/4414.json"},{"revision":"ae8afc704d054e7b7a74531c5bddcd6d","url":"tw_stocks/4426.json"},{"revision":"a60816b656a886f7e6191fe7aa0e5e20","url":"tw_stocks/4438.json"},{"revision":"3b58e2af3cba955f99fb39a0977ddd15","url":"tw_stocks/4439.json"},{"revision":"1df00271a3555d5d7498e9d7ccd694d4","url":"tw_stocks/4440.json"},{"revision":"c275e1530177e586b60c25b82a3462fc","url":"tw_stocks/4441.json"},{"revision":"415792d9598fe36644201f7014bd453f","url":"tw_stocks/4526.json"},{"revision":"9fb5df94fe59cb3c5db9ee9c95c0ebd4","url":"tw_stocks/4532.json"},{"revision":"9f0c3501c6e973a2910046b9fec86e79","url":"tw_stocks/4536.json"},{"revision":"5391f25a0888d3603782243757c1f265","url":"tw_stocks/4540.json"},{"revision":"1f0e26a9ae11f597454cafb5b11bf1fb","url":"tw_stocks/4545.json"},{"revision":"42198f7ef7dcc363739cbf501ebb01b1","url":"tw_stocks/4551.json"},{"revision":"7e4bac476d53832c0ca5646409a64b15","url":"tw_stocks/4552.json"},{"revision":"086bbb981f0ae378eedeb3a7a0c5d00c","url":"tw_stocks/4555.json"},{"revision":"c61d53de29f6c9bea77524268576184b","url":"tw_stocks/4557.json"},{"revision":"6ccd8df170e2d6bf2983723aea813255","url":"tw_stocks/4560.json"},{"revision":"54fc3aa2f5b0558c20b601fbcfcf8e1a","url":"tw_stocks/4562.json"},{"revision":"42bd4c9ca51405c17866d5fdb7ab4300","url":"tw_stocks/4564.json"},{"revision":"c5ffa684c07e793c7ce704af46dafc44","url":"tw_stocks/4566.json"},{"revision":"163adb7e81c781f004607213d7087c6f","url":"tw_stocks/4569.json"},{"revision":"1a9878e90048368c0d7a6779a6351cb2","url":"tw_stocks/4571.json"},{"revision":"5e80e454b3037ca41cccdcdea9482645","url":"tw_stocks/4572.json"},{"revision":"b2cb846f570d7ad23d252591bf628797","url":"tw_stocks/4576.json"},{"revision":"9a16f804d5865b2184f9dadfbb4d9ba6","url":"tw_stocks/4581.json"},{"revision":"f02ed07fabb32b49b39680db75461a91","url":"tw_stocks/4583.json"},{"revision":"311ec89550c4ddb7d91419181b5fc20a","url":"tw_stocks/4585.json"},{"revision":"4976e778582dc0b1987a1239661a0cea","url":"tw_stocks/4588.json"},{"revision":"d0fc4824b89c22cee816c7c7c51f509d","url":"tw_stocks/4720.json"},{"revision":"86845f75b81af3dda6e90c79e6545e3e","url":"tw_stocks/4722.json"},{"revision":"210062f430c8e78d35adf39776a30bdd","url":"tw_stocks/4736.json"},{"revision":"c0e0a129f36cc2535e421bc6eedc720a","url":"tw_stocks/4737.json"},{"revision":"e1ded577d4862a035f41eac74875ace9","url":"tw_stocks/4739.json"},{"revision":"55e1455ca5e2957ac2d138051e376bfe","url":"tw_stocks/4746.json"},{"revision":"ed238d04e4e7707f9ec93d91ce1793fe","url":"tw_stocks/4755.json"},{"revision":"754f7077af16bc9e2ebde9074ca4590e","url":"tw_stocks/4763.json"},{"revision":"c7effa7662e8ba00a9eec793e8f3720f","url":"tw_stocks/4764.json"},{"revision":"4bdfb766c203a695d7dd1f4c97cd4854","url":"tw_stocks/4766.json"},{"revision":"7153633b92b2707c2d9bdf90dc479fc3","url":"tw_stocks/4770.json"},{"revision":"cd8d82d9937163b57df127ccecf3d97a","url":"tw_stocks/4771.json"},{"revision":"7c1499b70d52f7affa7c36a6213e29ff","url":"tw_stocks/4807.json"},{"revision":"d0767c4801eeb9f907ff47e095fe30f3","url":"tw_stocks/4904.json"},{"revision":"ab3af2f4723b5fc471c1eb11ac893bcb","url":"tw_stocks/4906.json"},{"revision":"152dc80c9b75850483914c89c283dfc1","url":"tw_stocks/4912.json"},{"revision":"b0b122e6e61942e3f6ff493a29ff00b5","url":"tw_stocks/4915.json"},{"revision":"ea5f9da77faec676f3d6b4a0d587a118","url":"tw_stocks/4916.json"},{"revision":"bed9f18a879f5ccb1f5f4b5d21c1c51e","url":"tw_stocks/4919.json"},{"revision":"3d68f1719ba9f1867c831ba177c51f68","url":"tw_stocks/4927.json"},{"revision":"91aca5be40e4003a1c30f858969ebb1e","url":"tw_stocks/4930.json"},{"revision":"ad6651a0b1fd0eb7dc4da30796867936","url":"tw_stocks/4934.json"},{"revision":"69a1f5a908b763e6627399fdb6fd3537","url":"tw_stocks/4935.json"},{"revision":"978e910aebcd8c12663796e04a309b6b","url":"tw_stocks/4938.json"},{"revision":"e385eec738b833ad3e400f00d20849b0","url":"tw_stocks/4942.json"},{"revision":"1f69e579d317d4e45834a9125f6d67b9","url":"tw_stocks/4943.json"},{"revision":"4f8c382c3fa4015a511c5a1d614b3c59","url":"tw_stocks/4949.json"},{"revision":"48bc0b613d3e05de106ad0fd0e2572d6","url":"tw_stocks/4952.json"},{"revision":"4dcedddfa1365523810acc0301e8d0a9","url":"tw_stocks/4956.json"},{"revision":"4d35c5c4ea6798555444c4a7b7ddb395","url":"tw_stocks/4958.json"},{"revision":"93cbff1171ea2c0eca84766d9631d6a7","url":"tw_stocks/4960.json"},{"revision":"0940f3c0160ac0e024bfcd87eba44815","url":"tw_stocks/4961.json"},{"revision":"4c03c573c6ec4e83def972b8c1f16ffe","url":"tw_stocks/4967.json"},{"revision":"2b84e82d36481227b425d6d11f9aece8","url":"tw_stocks/4968.json"},{"revision":"297c156e9d78bafde6e63c6892b1a3f4","url":"tw_stocks/4976.json"},{"revision":"0f2015d4987a2c59293c55217c2d07f4","url":"tw_stocks/4977.json"},{"revision":"42d2243ced0bb28db315317aea1a9ce0","url":"tw_stocks/4989.json"},{"revision":"0a966eaeb353b6fd2d1f20363cd56de9","url":"tw_stocks/4994.json"},{"revision":"cd55701464b66f2a6621e1c03e72fae8","url":"tw_stocks/4999.json"},{"revision":"a277b0182c21277a306ee6217b26aaae","url":"tw_stocks/5007.json"},{"revision":"2d8bc7795c07c28e78b172928cacaa62","url":"tw_stocks/5203.json"},{"revision":"6e9376c2c3ad376ae5600a23d8f2a963","url":"tw_stocks/5215.json"},{"revision":"564e5e358e2985caa047c6c90b1faf55","url":"tw_stocks/5222.json"},{"revision":"cff72d17438bf3b10090c6bc0b58ffd1","url":"tw_stocks/5225.json"},{"revision":"7379baf4515c666d6aafb03fd3dc938e","url":"tw_stocks/5234.json"},{"revision":"57e636f9e9eeae0f81a918a90fafad1b","url":"tw_stocks/5243.json"},{"revision":"cbc5bda34eb891eeda611afe8a5e112c","url":"tw_stocks/5244.json"},{"revision":"e846ba417b945cf843c8576df143fa5f","url":"tw_stocks/5258.json"},{"revision":"21c01a7d0e45baee1f07c3216b1ea019","url":"tw_stocks/5269.json"},{"revision":"e42380c6ce1fdb0e3d95271c42292ca0","url":"tw_stocks/5283.json"},{"revision":"2339a605149ad1a2ba5a83d22f8a8660","url":"tw_stocks/5284.json"},{"revision":"bf13c038399dbe0b9560e9148a359950","url":"tw_stocks/5285.json"},{"revision":"6cb621dee4424972d38001faa32d6730","url":"tw_stocks/5288.json"},{"revision":"219651f3bee251178299ae354ffbc0cc","url":"tw_stocks/5292.json"},{"revision":"9b8084154490e06ffd2cdb4ee8bf046d","url":"tw_stocks/5306.json"},{"revision":"ed8703590f3e829bbf8944d7a250c3f2","url":"tw_stocks/5388.json"},{"revision":"46759d245f9c85862810de48d6460a07","url":"tw_stocks/5434.json"},{"revision":"5201f2649e69032ac2eb90f16b5967c0","url":"tw_stocks/5469.json"},{"revision":"d91ec12038f6ed0708ab4f1712826029","url":"tw_stocks/5471.json"},{"revision":"51302107f21483f7ade5e32d985a6092","url":"tw_stocks/5484.json"},{"revision":"3f6c4c440cb8bd98ac867213c590d863","url":"tw_stocks/5515.json"},{"revision":"b2a44b6bdb56e33d10b61442e285413a","url":"tw_stocks/5519.json"},{"revision":"8de53a129e0587db74f8dd30bed58bac","url":"tw_stocks/5521.json"},{"revision":"ec0623e0bf0314426f8ba978b5991a2a","url":"tw_stocks/5522.json"},{"revision":"eae932f57698d1d98e6837e60480fb26","url":"tw_stocks/5525.json"},{"revision":"9c04ddc93dea97b123e4448f6facea65","url":"tw_stocks/5531.json"},{"revision":"80da496913c7c12e3a58002bef1c9e23","url":"tw_stocks/5533.json"},{"revision":"428668bf6b2c947d3358dd743b275095","url":"tw_stocks/5534.json"},{"revision":"98da326f9244e9c4ef6e189bb7a51d31","url":"tw_stocks/5538.json"},{"revision":"debb79630dce5461bc18634aad825fb5","url":"tw_stocks/5546.json"},{"revision":"7c17180dd201c5a35f705c31854ed355","url":"tw_stocks/5607.json"},{"revision":"da8e623664a4c7e29ebb44d75d62dd8d","url":"tw_stocks/5608.json"},{"revision":"1600ac256ad9fac1cf37909605d436a1","url":"tw_stocks/5706.json"},{"revision":"0f72d7eee7deab4efd677fc9f31709dc","url":"tw_stocks/5871.json"},{"revision":"fe74223cbb3b74ab3cd583caa44716e8","url":"tw_stocks/5876.json"},{"revision":"4ad99f47d760285055aeb3a8ef89e753","url":"tw_stocks/5880.json"},{"revision":"b7632c3fde9f2df7c6a710eaa3d6184c","url":"tw_stocks/5906.json"},{"revision":"3581d3faa4c25a7c2f0ea0eb0e78c0c0","url":"tw_stocks/5907.json"},{"revision":"639a38a3f44f9568827b4b5131714a13","url":"tw_stocks/6005.json"},{"revision":"e3552e2ff9857621fe764694bdaa2c70","url":"tw_stocks/6024.json"},{"revision":"643c847a7692d0e65dd6a6c9dfe6ace4","url":"tw_stocks/6108.json"},{"revision":"5f8b54909fdecef47007bf209220368a","url":"tw_stocks/6112.json"},{"revision":"16a148a4e3f3026d9e5d039650c84e9e","url":"tw_stocks/6115.json"},{"revision":"04456963b36a55b5ebdfa8247bd10aaa","url":"tw_stocks/6116.json"},{"revision":"368c1b16f9cfbce9ce6ad768a86d3f1c","url":"tw_stocks/6117.json"},{"revision":"55fd2c0dd23af2fe40a780903aa58311","url":"tw_stocks/6120.json"},{"revision":"954907415ccf3e2fd839edfeb960588d","url":"tw_stocks/6128.json"},{"revision":"070709d7d4ac70611f8a8e69bb656556","url":"tw_stocks/6133.json"},{"revision":"f9aa0e6b0406fcf35517b9dea16c649f","url":"tw_stocks/6136.json"},{"revision":"bb3376a361ff22c274c8910e5032dadf","url":"tw_stocks/6139.json"},{"revision":"559faadeea1a5f06094ec2c372a00763","url":"tw_stocks/6141.json"},{"revision":"a15ceb92e25ea1b640c0490259dfd6da","url":"tw_stocks/6142.json"},{"revision":"33e0239682210ef5125e0912c4492937","url":"tw_stocks/6152.json"},{"revision":"a746ade4bf6b082aa870d74a6e0cfc3f","url":"tw_stocks/6153.json"},{"revision":"4d34e95126b717e42af9f3b2ec4dd59c","url":"tw_stocks/6155.json"},{"revision":"0bbae20f0b528a723133e549d4e55558","url":"tw_stocks/6164.json"},{"revision":"f4c0927fa19044b24732e40396290d4b","url":"tw_stocks/6165.json"},{"revision":"e766371e6d4a4176394a5785462f03da","url":"tw_stocks/6166.json"},{"revision":"a1a28a48f7e767dbb976fdab73080eee","url":"tw_stocks/6168.json"},{"revision":"6438a43e3af90011881c9647a584a01c","url":"tw_stocks/6176.json"},{"revision":"ba43caa35354a3cf31852aca538d68ad","url":"tw_stocks/6177.json"},{"revision":"3ae5ac6ff663cfdc7f37bd68ad874195","url":"tw_stocks/6183.json"},{"revision":"c89c1d31da347dcff1aac6dd230e5ed9","url":"tw_stocks/6184.json"},{"revision":"eb2da46b3400b78690aed548999dfa2a","url":"tw_stocks/6189.json"},{"revision":"ec93226196c2fc860bd048897bc5049d","url":"tw_stocks/6191.json"},{"revision":"f84ca66c7c2b072e3854e5c45db5a8d4","url":"tw_stocks/6192.json"},{"revision":"475cba6b2b8c26aa2e87acec4d29da43","url":"tw_stocks/6196.json"},{"revision":"dc1fbaa5808ab9033e7738a07f47322b","url":"tw_stocks/6197.json"},{"revision":"73f198a8a3f84519e533617aaba4e633","url":"tw_stocks/6201.json"},{"revision":"6edcf16c572839a3cb37303ba11e36ca","url":"tw_stocks/6202.json"},{"revision":"95a84d798153282f7cbe1951f7c8cd5d","url":"tw_stocks/6205.json"},{"revision":"94909dc1fef7961a11bb8615759db07e","url":"tw_stocks/6206.json"},{"revision":"54a03907c40552ac837447f173c88429","url":"tw_stocks/6209.json"},{"revision":"1432008c6011bbc50707718f5ab611e6","url":"tw_stocks/6213.json"},{"revision":"9a23af18c6e1441a3652e6917100ac3e","url":"tw_stocks/6214.json"},{"revision":"9db887f464ee349042054a7885a8e680","url":"tw_stocks/6215.json"},{"revision":"804fa97d032a41c3d793413c512744f9","url":"tw_stocks/6216.json"},{"revision":"ea45a7f2c22524926f8e4924994756b2","url":"tw_stocks/6224.json"},{"revision":"b71a5f9df5ccf82173a21e634e233737","url":"tw_stocks/6225.json"},{"revision":"1406d91f25bae2a6eff844be7c5dd3fa","url":"tw_stocks/6226.json"},{"revision":"df99d729102d4a1cf819cbdbe5e4a1a3","url":"tw_stocks/6230.json"},{"revision":"3249a1268bc1624d483dfd74319fc29d","url":"tw_stocks/6235.json"},{"revision":"e49a9731ec80d984d7d79bb9fd585d0f","url":"tw_stocks/6239.json"},{"revision":"9da010ac00483858a5b19a80a197f605","url":"tw_stocks/6243.json"},{"revision":"6140c3f1ad21d468b59a6f02c0ebbe59","url":"tw_stocks/6257.json"},{"revision":"dc3796080e8fdc820ced7c823cfe9749","url":"tw_stocks/6269.json"},{"revision":"9959e2cfe7ccef6ffab081dc2140e2f2","url":"tw_stocks/6271.json"},{"revision":"2b0aad0367dd04a18f00cda69deab001","url":"tw_stocks/6272.json"},{"revision":"44fa70a9a25d9db20209cd9f124982fd","url":"tw_stocks/6277.json"},{"revision":"4c827d94153b83cbd01c6a45a2293e54","url":"tw_stocks/6278.json"},{"revision":"b10457a2591b29194d14a5e7c3b7d248","url":"tw_stocks/6281.json"},{"revision":"a5d8cb2ee0409779bcdc6b33102e6dd0","url":"tw_stocks/6282.json"},{"revision":"d2c664f5bc72128b00f79ec01e2f5414","url":"tw_stocks/6283.json"},{"revision":"da31bf7f64fc41b394f603d909136464","url":"tw_stocks/6285.json"},{"revision":"a72e36372065d9163beac56f1f3f88cf","url":"tw_stocks/6405.json"},{"revision":"7ec8ef1bbaa03cd86c9360b760005914","url":"tw_stocks/6409.json"},{"revision":"d0a317d8e94bd50fead9d761dd1c9ff8","url":"tw_stocks/6412.json"},{"revision":"3302dfe32e817039fc9f992fff3a930b","url":"tw_stocks/6414.json"},{"revision":"77b3a79d6d2e5c2d65999edd3de52480","url":"tw_stocks/6415.json"},{"revision":"eecb1ca2581b3d1bc06caf4c988f1756","url":"tw_stocks/6416.json"},{"revision":"479df97b392786697efdf37525b76a63","url":"tw_stocks/6426.json"},{"revision":"ee180e3de7ce3b2bf5f43b1624105d69","url":"tw_stocks/6431.json"},{"revision":"7c410250ba2c1fc6892d4fe681c8b9c9","url":"tw_stocks/6438.json"},{"revision":"df87d34a52b70d4f4ef13aaeb274c768","url":"tw_stocks/6442.json"},{"revision":"fde2bd167a0faaa3d1990063a0e0e626","url":"tw_stocks/6443.json"},{"revision":"764810f64025fa7de19c2cfa5cba0567","url":"tw_stocks/6446.json"},{"revision":"82acf7fd76e19653a8fb811e14a9f2af","url":"tw_stocks/6449.json"},{"revision":"8d3cbaaa0f3409c942ba039f6c2b40cf","url":"tw_stocks/6451.json"},{"revision":"b9ee1e332aa5ee70e58d93f865101ac2","url":"tw_stocks/6456.json"},{"revision":"5bacb4027cb8731a2cc5f6cb2bbedac1","url":"tw_stocks/6464.json"},{"revision":"aa8fda221c60ffec332f3245f09cb9f5","url":"tw_stocks/6472.json"},{"revision":"5dce1687c977e0764a112ec67406780e","url":"tw_stocks/6477.json"},{"revision":"5a096562a09e0523e052d97ba277fd63","url":"tw_stocks/6491.json"},{"revision":"dfb89f66cec0429a992491fee3a2d2ef","url":"tw_stocks/6504.json"},{"revision":"5b4825bc999543e47e860c41862f7d77","url":"tw_stocks/6505.json"},{"revision":"28b564cdebed1ca4bc5e097b249e9164","url":"tw_stocks/6515.json"},{"revision":"280b1ebecef45711f410bad8bdfa912e","url":"tw_stocks/6525.json"},{"revision":"9396ea74eebcddcc00716354810fb44d","url":"tw_stocks/6526.json"},{"revision":"507d5ac59d3a739fd986df3530316e3b","url":"tw_stocks/6531.json"},{"revision":"8c2da9d5b87969b16b69b4f041c18bf4","url":"tw_stocks/6533.json"},{"revision":"0c918937740b3902156dfb4dac7fbaa9","url":"tw_stocks/6541.json"},{"revision":"0ace316ccfda57fa2b51c6e0786873ad","url":"tw_stocks/6550.json"},{"revision":"db643ee321ce073db70adfa0a7e03ea1","url":"tw_stocks/6552.json"},{"revision":"aa7c3bde427f2189f56069a3839dfc44","url":"tw_stocks/6558.json"},{"revision":"449b4af691feb66d271f8d46a653e61d","url":"tw_stocks/6573.json"},{"revision":"492c1c1d442cb6a448055074afe732c3","url":"tw_stocks/6579.json"},{"revision":"882c10b4f9f5e66b83e401948c9c9a21","url":"tw_stocks/6581.json"},{"revision":"c259329891b002fe3e728d37acc5dc8f","url":"tw_stocks/6582.json"},{"revision":"ba481d8e5756d96aaead4f473dd18774","url":"tw_stocks/6585.json"},{"revision":"e8ce4b693f0e8a1d5b8d8d4a07ef18fa","url":"tw_stocks/6589.json"},{"revision":"c73ef9b4ce334851ff6cd4a6de5cbca3","url":"tw_stocks/6591.json"},{"revision":"97a3d6c85e6c08ae72db4f6b49cb540d","url":"tw_stocks/6592.json"},{"revision":"3e7cd827393e9a1a5bcf67055fa1489f","url":"tw_stocks/6598.json"},{"revision":"9a3991c99d9ee5ea75c326f87282b06d","url":"tw_stocks/6605.json"},{"revision":"8fa5fd34113cf09171ff9f1dbdc0a0d3","url":"tw_stocks/6606.json"},{"revision":"9f0221c8d554cf4973c888fb0034dcae","url":"tw_stocks/6614.json"},{"revision":"9e20787c8c995ec5463860507f6b1127","url":"tw_stocks/6625.json"},{"revision":"5b7885a2ee1c769d242a58504a2f3e68","url":"tw_stocks/6641.json"},{"revision":"e94d09ff3cd8b6774596b89b71ce9ec1","url":"tw_stocks/6655.json"},{"revision":"e9f68679e28cf27c04edca777522c862","url":"tw_stocks/6657.json"},{"revision":"50c5e88b224f0cafae69474947a54555","url":"tw_stocks/6658.json"},{"revision":"671aa70ac6691799365e73af53c31c29","url":"tw_stocks/6666.json"},{"revision":"818505d7a2efd04a990af794fbc488dd","url":"tw_stocks/6668.json"},{"revision":"61c93c52654a55de351787fbd8c28d8e","url":"tw_stocks/6669.json"},{"revision":"0b87adaf8bb6a8c6ef836289610bf86e","url":"tw_stocks/6670.json"},{"revision":"3367cbdb68bb4e07f717f46c53420c1b","url":"tw_stocks/6671.json"},{"revision":"b46df049f0a38fc8a0c8b522e01f796c","url":"tw_stocks/6672.json"},{"revision":"08d5dc9df34282f24978bf0f24fbb09f","url":"tw_stocks/6674.json"},{"revision":"3f87679931fcfb4aa84e558c6f03ce53","url":"tw_stocks/6689.json"},{"revision":"2e26028590aa1b5eec0238af34004b89","url":"tw_stocks/6691.json"},{"revision":"41fcc87c5aa50f18c2abfc66db43d0f2","url":"tw_stocks/6695.json"},{"revision":"fbe2fc69cf57271ad882caf7016b2a3f","url":"tw_stocks/6698.json"},{"revision":"1f75a0e9acbdf5a02a9b459cc9607d0e","url":"tw_stocks/6706.json"},{"revision":"57d63f8b23395b0e1c85e419788daf27","url":"tw_stocks/6715.json"},{"revision":"bdce7e6db954ed41d431686b447531e8","url":"tw_stocks/6719.json"},{"revision":"c3fdcbf79b4a0ce89aaeb65637be83f8","url":"tw_stocks/6722.json"},{"revision":"9441f9cfd9c40282521bf733cb4e6e08","url":"tw_stocks/6742.json"},{"revision":"5d481b0546f859294cd0d31ccbd57066","url":"tw_stocks/6743.json"},{"revision":"83c48eb57bda94c46057719c134d9b2f","url":"tw_stocks/6753.json"},{"revision":"b6f4cfe870c4156c662b703cc0b0c42a","url":"tw_stocks/6754.json"},{"revision":"90ecbf30d1964dc5f827fb5c922fd907","url":"tw_stocks/6756.json"},{"revision":"f9abb23701a3b6419972caa41d7132bc","url":"tw_stocks/6757.json"},{"revision":"db3feadec0a4c6c18f17f4466bda2f1f","url":"tw_stocks/6768.json"},{"revision":"838666fa9a6d654c9d4393824c30ba6a","url":"tw_stocks/6770.json"},{"revision":"a3b9024565ddddcd31b514aa567e042a","url":"tw_stocks/6776.json"},{"revision":"88d9d53e882ba199c6c0c86e3cd89a73","url":"tw_stocks/6781.json"},{"revision":"0e892fee1d56ccee4792d53c181b907e","url":"tw_stocks/6782.json"},{"revision":"f51f9d0e8aed05594779f7606b532374","url":"tw_stocks/6789.json"},{"revision":"b17c29c35a4ee28fe42d78094224be28","url":"tw_stocks/6790.json"},{"revision":"fc0c7f1bb85be7d4267eead309b7ec1b","url":"tw_stocks/6792.json"},{"revision":"20c5ec6d513a2697a7da7303ca0d296a","url":"tw_stocks/6794.json"},{"revision":"d4de0d8d836a8640df79d95b394d5851","url":"tw_stocks/6796.json"},{"revision":"e99b7be1e7f427e5c2ac14b5cad71168","url":"tw_stocks/6799.json"},{"revision":"44fa0e53c575b63e45b2ca5ef900e046","url":"tw_stocks/6805.json"},{"revision":"f563f37d78ce219ab4ddf724921a8538","url":"tw_stocks/6806.json"},{"revision":"95d94eb970319502b2012398f8eccaa9","url":"tw_stocks/6807.json"},{"revision":"60b673a5a870e2d62a72615aa2f37cf5","url":"tw_stocks/6830.json"},{"revision":"ba3afaeac58794a650aed9056bde1a1d","url":"tw_stocks/6831.json"},{"revision":"6bf5d47551e26ba9f3c2e95cdbf52752","url":"tw_stocks/6834.json"},{"revision":"de696d779f2ada828d34808e432f8817","url":"tw_stocks/6835.json"},{"revision":"63aca95e1640cd328c5e13e56786db2d","url":"tw_stocks/6838.json"},{"revision":"dbe629005038b83334bad92f320e9a04","url":"tw_stocks/6861.json"},{"revision":"7a78482b22331d72a53857fb2173af3d","url":"tw_stocks/6862.json"},{"revision":"16a4387ff1994095c84046c33a905b69","url":"tw_stocks/6863.json"},{"revision":"b7bc728615e59f56bca2291af3c997ee","url":"tw_stocks/6869.json"},{"revision":"e79c0d3f8e161ac0e7f9b3f2aabb7d44","url":"tw_stocks/6873.json"},{"revision":"b87d9ed4bd27fa55d956b678ddbe0fd5","url":"tw_stocks/6885.json"},{"revision":"cc0ff574f0555477a281b73eecf17803","url":"tw_stocks/6887.json"},{"revision":"b02db3141de75d025d2a34e7fb85cf35","url":"tw_stocks/6890.json"},{"revision":"5d511c5f0a55f30be77195787f57f920","url":"tw_stocks/6901.json"},{"revision":"998d3465592b5fee1e417f331553f5cb","url":"tw_stocks/6902.json"},{"revision":"db5b5236d6adcb0761cc41cc96153118","url":"tw_stocks/6906.json"},{"revision":"9b930616d2cdafaa62b00696fce217d8","url":"tw_stocks/6909.json"},{"revision":"85dc37b54a5e1a364bff8c8f9983f05f","url":"tw_stocks/6914.json"},{"revision":"40a2056cd9cdf8813c5948f2722054ce","url":"tw_stocks/6916.json"},{"revision":"27004987631cd3fe2f180d6c973d9a46","url":"tw_stocks/6918.json"},{"revision":"5e5f55585e39697786e6e2c759efad11","url":"tw_stocks/6919.json"},{"revision":"2c2a40e3b050e15a18d4f19352143078","url":"tw_stocks/6923.json"},{"revision":"58b87ba968e8b8d4412fd352af99adb4","url":"tw_stocks/6928.json"},{"revision":"35a4513e36fa5203307be4ab34cb90f3","url":"tw_stocks/6931.json"},{"revision":"34380d7cea88bbd483f1bd24bc9d5aaf","url":"tw_stocks/6933.json"},{"revision":"dc6e1bf4ba07565e7a535d2fb720d833","url":"tw_stocks/6934.json"},{"revision":"9a46a9180c59c8da65655f0868a40c81","url":"tw_stocks/6936.json"},{"revision":"6cc6468f0d15a665e23a675d6750b674","url":"tw_stocks/6937.json"},{"revision":"adb4f17240f25070ad493e4fa30de94c","url":"tw_stocks/6944.json"},{"revision":"b4c53c34f38096374d4ab1ba8136d755","url":"tw_stocks/6952.json"},{"revision":"d27b6fc5d1373a289c975234c9d913ea","url":"tw_stocks/6957.json"},{"revision":"22b31c6470c77de94b53d96a7d03c60b","url":"tw_stocks/6958.json"},{"revision":"e141a0c539a0bc5c34a4cf8c565ac292","url":"tw_stocks/6962.json"},{"revision":"87efad5ff3537ff59d653cfb903258f3","url":"tw_stocks/6965.json"},{"revision":"344d7bbb6e5b83949507fdf18974e31f","url":"tw_stocks/6994.json"},{"revision":"0bb3db54c8455a882947f4920ec83ea5","url":"tw_stocks/7705.json"},{"revision":"3b02e09712b689da35e153497080afd0","url":"tw_stocks/7711.json"},{"revision":"9fa396c0e927622a2a9e911f6e274c8e","url":"tw_stocks/7721.json"},{"revision":"ab70a7aa468bf7a357264eabb4e58864","url":"tw_stocks/7722.json"},{"revision":"870076a5e0d611c9df283f4748c65891","url":"tw_stocks/7732.json"},{"revision":"ba8606eead011925a466284bff3579ce","url":"tw_stocks/7736.json"},{"revision":"eb85d535736c6f92b2137462b98313f9","url":"tw_stocks/7749.json"},{"revision":"e0712cd932371e122e7e28158053abeb","url":"tw_stocks/7750.json"},{"revision":"9870aeede0fbca4ae85324fce619c874","url":"tw_stocks/7765.json"},{"revision":"75fd3ee3f058b8ab64d679507642c5a3","url":"tw_stocks/7769.json"},{"revision":"61c2e607b8b15fd486bdd5907e95477e","url":"tw_stocks/7780.json"},{"revision":"de0fb9dd77c8e35855732a30f51321c1","url":"tw_stocks/7786.json"},{"revision":"02a3a456c6427e6d456b594f1fe8db11","url":"tw_stocks/7788.json"},{"revision":"184cefe3b58976c8d0a3fa517b3f65f7","url":"tw_stocks/7791.json"},{"revision":"cc8335447b9bf756f112764e75b7a0f1","url":"tw_stocks/7795.json"},{"revision":"1a3b44fd18fade1af2ed69b4d83bffac","url":"tw_stocks/7799.json"},{"revision":"725e39a8f955f1e1d997b09418dfe790","url":"tw_stocks/8011.json"},{"revision":"585d2e40342ac9ea1f8b30330c450ef3","url":"tw_stocks/8016.json"},{"revision":"c73c32fa2c574f6327e24e249477b133","url":"tw_stocks/8021.json"},{"revision":"e231e4a206fc9925109e38faaaa30f10","url":"tw_stocks/8028.json"},{"revision":"befc1562d956f93738e4f563aa113df0","url":"tw_stocks/8033.json"},{"revision":"7960f67295ec0f94f9e7c246a4258202","url":"tw_stocks/8039.json"},{"revision":"fb14d718e12f3ea13dd1d01af8dc4d8d","url":"tw_stocks/8045.json"},{"revision":"1604f45d0882182f1922af6163b9259e","url":"tw_stocks/8046.json"},{"revision":"ea6506e9325113d99c6c92b8d39a0c87","url":"tw_stocks/8070.json"},{"revision":"bbf0895a7e882c09617c3e3205ffae63","url":"tw_stocks/8072.json"},{"revision":"12a4c22f020d009d9191b6d9a12f1c24","url":"tw_stocks/8081.json"},{"revision":"c04d641ca62a3311aabea674919de4a0","url":"tw_stocks/8101.json"},{"revision":"b122fe42947bb1d20158fac8f7133849","url":"tw_stocks/8103.json"},{"revision":"8e68dc702d8ac1203d06001a1bfc3675","url":"tw_stocks/8104.json"},{"revision":"3adb6464cd445660c53a0977886bd7b0","url":"tw_stocks/8105.json"},{"revision":"e5fb56a264995541260eb2e2ba73c68a","url":"tw_stocks/8110.json"},{"revision":"e050315ad006a90862f71c9a0af448a4","url":"tw_stocks/8112.json"},{"revision":"462c2f6f87f277b353ae24b6c329a9f1","url":"tw_stocks/8114.json"},{"revision":"45324a181d9bafd31cc5a76e90c57e92","url":"tw_stocks/8131.json"},{"revision":"26b3b8bf14a4c0aa3fd26b18afb4cc3e","url":"tw_stocks/8150.json"},{"revision":"8d82d6a92422ad97f47fb224a9a377fd","url":"tw_stocks/8163.json"},{"revision":"5ca307547f1f119f698a63012360da5c","url":"tw_stocks/8201.json"},{"revision":"037074f9615a7f5508de2f9b4a5b63ae","url":"tw_stocks/8210.json"},{"revision":"73482569fefc99eef04d4597fee6a109","url":"tw_stocks/8213.json"},{"revision":"6e4351dd01c2f96ff407af0c570488ba","url":"tw_stocks/8215.json"},{"revision":"937e41e5dda13b5940a9d9537415caf9","url":"tw_stocks/8222.json"},{"revision":"9e859cdb95b16b2475bc29040d5fc58e","url":"tw_stocks/8249.json"},{"revision":"79a4075a08f0234ffe04a655ef8df736","url":"tw_stocks/8261.json"},{"revision":"c789c260e9e1fc39393d0c78616451cd","url":"tw_stocks/8271.json"},{"revision":"52a29df35dd35f75aaf567dcbcf48dd1","url":"tw_stocks/8341.json"},{"revision":"770c5b2740d8652e1c9ab3aa2cd639b4","url":"tw_stocks/8367.json"},{"revision":"206d2e82b1abac7a29af55869c0659f3","url":"tw_stocks/8374.json"},{"revision":"493bad17525598327f5bb10791db3548","url":"tw_stocks/8404.json"},{"revision":"08fc41a3e5c85e9ef3a25817ed8b9af9","url":"tw_stocks/8411.json"},{"revision":"aa44fa151579c9abde8fd5641da05123","url":"tw_stocks/8422.json"},{"revision":"cfff6734f0145cf1b70e926e2004a374","url":"tw_stocks/8429.json"},{"revision":"9fee6254f2a30ff9287c955d8a92f7b5","url":"tw_stocks/8438.json"},{"revision":"e2f92af71fa509dfceea5058e0d6192c","url":"tw_stocks/8442.json"},{"revision":"e02c56e50f425e080bd93b3cc58135f3","url":"tw_stocks/8443.json"},{"revision":"10f00218b503d19b817b0443e3149a91","url":"tw_stocks/8454.json"},{"revision":"8f8a362c6eb3b75edebcd72f8064079c","url":"tw_stocks/8462.json"},{"revision":"10213139542f4074b694b387c29ae786","url":"tw_stocks/8463.json"},{"revision":"fe59c710f6b4a964b3a6b8dffef0e00e","url":"tw_stocks/8464.json"},{"revision":"7dc0770e90b503aa3aeea7fd38533073","url":"tw_stocks/8466.json"},{"revision":"a53e103cb783dddf7f40758fb0feae29","url":"tw_stocks/8467.json"},{"revision":"18a919d71247d08d4e280403fbefea9d","url":"tw_stocks/8473.json"},{"revision":"1331e282d4dbafea506a7991b7372421","url":"tw_stocks/8476.json"},{"revision":"fdb3f43c21c453ce5487f13a72089a8a","url":"tw_stocks/8478.json"},{"revision":"a6aadc639e0d198a12114535cb0481f3","url":"tw_stocks/8481.json"},{"revision":"dfc688fcff252a2a05083b7c9479acbf","url":"tw_stocks/8482.json"},{"revision":"4f07302be279bb2cdc9177d5b975c656","url":"tw_stocks/8488.json"},{"revision":"209ea99e24b3cdc123e96de883db1692","url":"tw_stocks/8499.json"},{"revision":"e026605785dd81211113aadffa2f8c98","url":"tw_stocks/8926.json"},{"revision":"e96ffad832b57e653118e7d2e2486aca","url":"tw_stocks/8940.json"},{"revision":"6b0858969a567e927c2a00ed053b3a08","url":"tw_stocks/8996.json"},{"revision":"47ed32df9bf36370f8dc317a6b9c3ee3","url":"tw_stocks/9802.json"},{"revision":"366a24c1ca0ba15d5bb3804c98bd533a","url":"tw_stocks/9902.json"},{"revision":"fc62a50743ae264a258743de1ff87ab6","url":"tw_stocks/9904.json"},{"revision":"d3df4e21cfaeae33162a76bb4ab93b4e","url":"tw_stocks/9905.json"},{"revision":"7e68fcb5255f2402d07c15c4dbeedc1e","url":"tw_stocks/9906.json"},{"revision":"b97d5015f4ad95395a1c59c6fa3288d4","url":"tw_stocks/9907.json"},{"revision":"a131aeddbb09dd2bbb9cd192a1afb746","url":"tw_stocks/9908.json"},{"revision":"02b8060e7c5a804c2f3f49e5d264ee7c","url":"tw_stocks/9910.json"},{"revision":"736eb3febd7f5a48f422247a75f2dc5d","url":"tw_stocks/9911.json"},{"revision":"0687d481d43bf7159be0b98ec3171af8","url":"tw_stocks/9912.json"},{"revision":"302f9ff9771d7bcfc7daf23f7d45e2a4","url":"tw_stocks/9914.json"},{"revision":"cdffc4437b09b7c9ee68c79d143aa170","url":"tw_stocks/9917.json"},{"revision":"6ec17465d81b05ecd99cc538708e10d6","url":"tw_stocks/9918.json"},{"revision":"d53e614c7bfd69ef1272c81c06ef6ec2","url":"tw_stocks/9919.json"},{"revision":"579f573c2a431f4565e4c782a7518b43","url":"tw_stocks/9921.json"},{"revision":"8ba5037ab91372be5f7bd1a94b71adda","url":"tw_stocks/9924.json"},{"revision":"0e5653311f2a07d469589c1f32ae21cf","url":"tw_stocks/9925.json"},{"revision":"5e0ffc24d5f6c674911a88479d9216b8","url":"tw_stocks/9926.json"},{"revision":"1c039a8056d49959fa5aa04eeca36dc8","url":"tw_stocks/9927.json"},{"revision":"3d57b3b063c5f5faa6569188d6f0ff33","url":"tw_stocks/9928.json"},{"revision":"5eda63e6a73efa1740da8aea4ebb22b2","url":"tw_stocks/9929.json"},{"revision":"26015880bf4ed98329cdd08727bc53ca","url":"tw_stocks/9930.json"},{"revision":"8171e11c81b8bad726702aafc0f80e3c","url":"tw_stocks/9931.json"},{"revision":"10b55ce6c20c8a3e5c5116ef738cb3f6","url":"tw_stocks/9933.json"},{"revision":"902033425e6028bab23c989e955f21ec","url":"tw_stocks/9934.json"},{"revision":"a46a6ed05ec4a0183fc57dbd45236bde","url":"tw_stocks/9935.json"},{"revision":"d2f34d5ff3d921001c7df89c74703bf3","url":"tw_stocks/9937.json"},{"revision":"25c8cca0bf7288474d0c7f3367d2dfff","url":"tw_stocks/9938.json"},{"revision":"506c9d8b8fea7dd5aaa0680a5fc695f8","url":"tw_stocks/9939.json"},{"revision":"271e8ce0b65053f0f92822d99d467528","url":"tw_stocks/9940.json"},{"revision":"f988ae9112b3fa3be38183c647a367e3","url":"tw_stocks/9941.json"},{"revision":"f279c40ce88e391dcc5303f5e70811d0","url":"tw_stocks/9942.json"},{"revision":"9453652231a18ac8d168fa68af4c2f38","url":"tw_stocks/9943.json"},{"revision":"f2f6d95bbd546eab7790d465d6291839","url":"tw_stocks/9944.json"},{"revision":"7910b42feaca3a01a539e248e5b3b7b2","url":"tw_stocks/9945.json"},{"revision":"25434d2d096cd3d5f4cd7f623c4e8b80","url":"tw_stocks/9946.json"},{"revision":"2327d8428909da0aca3b326d89ef653c","url":"tw_stocks/9955.json"},{"revision":"711a54910035a31cb57d916f5ebff72c","url":"tw_stocks/9958.json"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"}];
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