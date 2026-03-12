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
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@2.4.3_@types+babel__core@7.20.5_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@4.9.5/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \**********************************************************************************************************************************************************************************************/
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
    const precacheManifest = [{"revision":"b5a93cf5202cf68842a405dc047b7c02","url":"404.html"},{"revision":"c8189799825b08f7dc888a6f55c8d159","url":"assets/css/styles.4fbf6649.css"},{"revision":"6969b00cb1f7f7b72bb8b7cc0633a46c","url":"assets/js/015a3104.7a1ba48d.js"},{"revision":"a73933b9fd03f3194b4fc61ef709d234","url":"assets/js/01a85c17.a86d6441.js"},{"revision":"fe576ef4790fa859a383103368af14ad","url":"assets/js/0885b367.e2314f87.js"},{"revision":"3d895867929c3826521ff64b7d446f52","url":"assets/js/0b169497.dd04a96c.js"},{"revision":"14445c013460d07fec7fc01f9a03165a","url":"assets/js/0e384e19.7074bf3c.js"},{"revision":"8ba286b788a3515437ef267c3d5042d9","url":"assets/js/1176f194.f5767b06.js"},{"revision":"bb745024504add991d615571ac8a296c","url":"assets/js/1483e95d.fa3781cc.js"},{"revision":"0e163ee434150a5d8f93cee02d94c848","url":"assets/js/14eb3368.345d93d5.js"},{"revision":"197a3a60cd4978e4715d6c1609610600","url":"assets/js/1525.101bcaef.js"},{"revision":"219d6d9017166fd9f0ba47b2fff74fdf","url":"assets/js/1551.ed441e09.js"},{"revision":"b5408dbaae6218f13d42698b4b46803a","url":"assets/js/162c7fa0.6d30c398.js"},{"revision":"5cb822561211bb449bb6f86a43180162","url":"assets/js/177ac620.a0edc5d2.js"},{"revision":"890f00bb76c0ea2b6f74325000adea8c","url":"assets/js/17896441.02ba8c32.js"},{"revision":"0dd43075c8cd6a4f9ed2fac078aab674","url":"assets/js/179b82d4.db0487c0.js"},{"revision":"05e4d7db7488e43e5bbfe04b7ac0afbe","url":"assets/js/1bd186b5.977ba557.js"},{"revision":"25ab7306a8bcd3bfdcb9d3c998695920","url":"assets/js/1be78505.60fb0bc0.js"},{"revision":"7a15759d8af87e03e7b65f62c82356a2","url":"assets/js/1df93b7f.672d89ad.js"},{"revision":"d3aee3dabc15d9f70435163b41834bce","url":"assets/js/1f391b9e.67232e62.js"},{"revision":"b0f2c75b6ba8b3c01ddfdb42527f3371","url":"assets/js/2055.7368a525.js"},{"revision":"7027f1562b42a553f8e85ccd39ed9d74","url":"assets/js/22ddf6de.92c4b833.js"},{"revision":"78e471bdacd85daf4111e7089e30ce8f","url":"assets/js/23d26d3d.aed94ea3.js"},{"revision":"f3827bbd914adfb6efadbd351190b723","url":"assets/js/2570.f872dec8.js"},{"revision":"3cb7201c37fb3653621fa5513ffd0b6c","url":"assets/js/2680.2e8808dd.js"},{"revision":"a4a9c16f6e2fa091c3e92c072b5e8a3a","url":"assets/js/2791.231610b1.js"},{"revision":"1ee86d030f78d3a58bba610dc77d02dd","url":"assets/js/27e16d5c.4aa0ea7b.js"},{"revision":"c83da0745c01857161e6cfa910d79d0a","url":"assets/js/283e63f8.d74f4372.js"},{"revision":"b2f0ce6a8746d69021370d614b354916","url":"assets/js/29b92217.862882f4.js"},{"revision":"a0b16a1f27dd7e8d21f26ebe6e1e5dd3","url":"assets/js/2f86947a.27287599.js"},{"revision":"6f449db048aa21901442b4701dae6993","url":"assets/js/31e93ad8.6f4e0907.js"},{"revision":"17a0299deb63da9d612cdcaaae98f62e","url":"assets/js/3256.2147398e.js"},{"revision":"a17933b5de7dd01a43f03f4087d57f3c","url":"assets/js/327.eca6cbda.js"},{"revision":"24b6a1f23579b5e32b0e886561a2c0ac","url":"assets/js/3394.1bbfe436.js"},{"revision":"b82e51f7eed0c5f7a24d70b196568c50","url":"assets/js/3498a648.dbe4e537.js"},{"revision":"537a3a6d5af1a7fdb495679c234d5721","url":"assets/js/36f337b1.01bb5926.js"},{"revision":"97a8e4bd35ef97a6a6469d5451fb3308","url":"assets/js/3720c009.1b4f8900.js"},{"revision":"7fdc6ad84ba62a5e04140f6d05292082","url":"assets/js/3919a743.30c40778.js"},{"revision":"cd8251c3d24f2eef1c99eca6e8b3c59c","url":"assets/js/393be207.9ca7cdd3.js"},{"revision":"4552c3139fe67cd6343a315e30b2d52e","url":"assets/js/3b360413.9d22705f.js"},{"revision":"85500f2536079f23897a67177b3a2b7f","url":"assets/js/43ec2458.f288903f.js"},{"revision":"ee9487043059338909c2cff21aa5a666","url":"assets/js/45ee4689.e4b8cb97.js"},{"revision":"b82e416ca90555828dd93387f8c748fa","url":"assets/js/4810d89a.adb32e81.js"},{"revision":"84002ebe279fc4cb4b0b3f285e3c71e2","url":"assets/js/553.784773ca.js"},{"revision":"df607dea37232a6ff239ac1de6fee5d4","url":"assets/js/553.ea7248d9.js"},{"revision":"698ef58d8ce796bcf346b26253e2a347","url":"assets/js/55960ee5.a66a561a.js"},{"revision":"c57f2e57a20faca8ad6c152531821515","url":"assets/js/5708.e3e55127.js"},{"revision":"5f5cb2e26d4c2bcb5cad10db3fb0c22e","url":"assets/js/5d785d74.38c2e965.js"},{"revision":"7e4e3b3923f17c0a852baba22b3304e5","url":"assets/js/61c0e0e9.aec68994.js"},{"revision":"88b90a99315b1c77893506b961c5bf6a","url":"assets/js/637912f1.a9f8ab49.js"},{"revision":"9ca57eebf83d62765d304951cf86b302","url":"assets/js/648c8a22.efc29ab1.js"},{"revision":"42f4f992f036af113fb7e442e92a253e","url":"assets/js/6875c492.818fd2a0.js"},{"revision":"cc1abb747a6d7154919f86a2b28e7149","url":"assets/js/69f51295.73755690.js"},{"revision":"e27418f099782d04a7bc88c491042076","url":"assets/js/6b65cf72.fa13b4f6.js"},{"revision":"19870ed4155fa1cc9c85903aed444365","url":"assets/js/6d4f529f.189690ed.js"},{"revision":"fc57458fa1bee9086c848f666272d120","url":"assets/js/6e731933.ad157a4e.js"},{"revision":"694bef22076ce399200c86d9ccde3ba9","url":"assets/js/708.a8f63a16.js"},{"revision":"5180ac7a6bc5247b5090beaa175d239e","url":"assets/js/7238ceb0.22eddba8.js"},{"revision":"ccee2544447ee51736f5aa7eb7da3716","url":"assets/js/7691.25f3c802.js"},{"revision":"19c5ff2537a53eba6683c49334cfebfc","url":"assets/js/7755.cf8c6d7f.js"},{"revision":"d194170db28179ec0f943e539ec4173c","url":"assets/js/778f8715.99a0b3d4.js"},{"revision":"16b3c88d5d081cf6bd80ebedd61c8b9a","url":"assets/js/7846.5ea08d24.js"},{"revision":"00feee53fa5f0992b0075d354fd70236","url":"assets/js/78d114c2.cfd138ea.js"},{"revision":"9a1f2ca4eb344e39dd3d730b68f851e7","url":"assets/js/795df221.cd99e2e1.js"},{"revision":"e816ccf689fbfb34967aef7dc4ae392c","url":"assets/js/7ce5d7a1.a23307a4.js"},{"revision":"6bc0d6bf5537ff4dd7589fcfdfd368a5","url":"assets/js/7d7fd0cd.5cd2a569.js"},{"revision":"6338883c36ee723bb2e48b348647449b","url":"assets/js/814f3328.42e48c64.js"},{"revision":"6ad9a48d496bb3a3d73c1f40873d50a1","url":"assets/js/82ac0c26.d67dd8d1.js"},{"revision":"511808a7201bde48d5daed60b3a971a8","url":"assets/js/84577be1.80d02334.js"},{"revision":"ad56f8ab3e69b57e2ee52ed85e987acc","url":"assets/js/846.a6f13571.js"},{"revision":"0cb5f958a996dc7039c4e843b5cbaa2f","url":"assets/js/853ca2df.cf2beece.js"},{"revision":"2f953ff3f0972788579cf301a159f877","url":"assets/js/853e1e42.63117007.js"},{"revision":"bb081300cf6b6e2377b1ed78684d9e87","url":"assets/js/8603.bca13942.js"},{"revision":"1c443db102eb579ee9fcad3f8bb575dd","url":"assets/js/8af61f6a.cad1b806.js"},{"revision":"649feef8db1ba3edae62af2144ae2818","url":"assets/js/8bf441d9.70b7420b.js"},{"revision":"4c0eccfe0c1c2694a75123e777ce833b","url":"assets/js/8c20996d.593bffe6.js"},{"revision":"072d57a9cc2f14eb82ad83e832c63cc3","url":"assets/js/90326f8c.4234a806.js"},{"revision":"a33d6e836e3a7ad53b25e8f7faab0f58","url":"assets/js/9121.8e149315.js"},{"revision":"b7520067ec79065512f41b2cb4d3c70e","url":"assets/js/9203bfff.840fec66.js"},{"revision":"f0546f3117a9368c627a7fdf748aac2b","url":"assets/js/923ed0b3.ca474943.js"},{"revision":"b8b4fa095c14e468d31af80c784c0d5f","url":"assets/js/935f2afb.e2ec3b4c.js"},{"revision":"fed97c9bef6e30dda0661c51cd5218b2","url":"assets/js/95a5b4a7.43ba636e.js"},{"revision":"fffb8b0c6cd8ffbac20edf57a6396d98","url":"assets/js/97952677.e1118a2d.js"},{"revision":"c292bf482ae598c7da5ee3b4cbe5c237","url":"assets/js/9801.d92f37af.js"},{"revision":"20402c9ad83970366449ca134e5f42c4","url":"assets/js/99d3b34a.7e3d4783.js"},{"revision":"e7733416e748eacc01e413c7172b79ca","url":"assets/js/9e4087bc.f930dd46.js"},{"revision":"1dfcf02882c8c6987c5ccd9eacfdd13e","url":"assets/js/9f9bea33.c9798f8d.js"},{"revision":"46b373e387adf827fd8580e35db33691","url":"assets/js/a1fbcaf1.f17a9fec.js"},{"revision":"807d2cdb0c2fe47ec96d3e04c02adbe5","url":"assets/js/a6aa9e1f.61c2c3c3.js"},{"revision":"cfb07e369522732f1d0d17e8a57d4d23","url":"assets/js/a7023ddc.3a94fc47.js"},{"revision":"a652f8d59efb2c0e102d68c6288e9eed","url":"assets/js/a8181711.32f6cd31.js"},{"revision":"8fed2d040d92a6d32dfc6ab9e819df09","url":"assets/js/ab8c4b90.ca74a8b9.js"},{"revision":"1683c5c59ba66a09b4456e7b54b812ac","url":"assets/js/aeedf315.9f1040b7.js"},{"revision":"33c7ce219c0c21c4688f22daf127aa9a","url":"assets/js/b046c1ff.34410e40.js"},{"revision":"8dd2a0e317d1a49d8772f69029ed4678","url":"assets/js/b11bad44.e3e3f307.js"},{"revision":"965fe1638bfad2052e736a7ad2a60562","url":"assets/js/b283ca86.cf26fcdf.js"},{"revision":"2e4dcf4b357f6f724040dc1d8e95007d","url":"assets/js/b2b675dd.71d6c618.js"},{"revision":"efb22cad9371818125829e2b9e3445d5","url":"assets/js/b2f554cd.723c9c06.js"},{"revision":"dfdfe8f9bfe876f204b8c2ecc8c04468","url":"assets/js/b3e3b9ec.f14effe6.js"},{"revision":"d21529e445fb0373dc24c1e5e5e8e4c4","url":"assets/js/b95eaafa.a360d718.js"},{"revision":"9c61b74f9b97c9aa32376e16e0512382","url":"assets/js/bfdac06f.a62c9dfe.js"},{"revision":"673f6f4c39dcf06ac503eb3750c637de","url":"assets/js/c1906376.4f466f16.js"},{"revision":"a3857fd746c9412d5355a6845294cb05","url":"assets/js/c3b1af5c.733e8eea.js"},{"revision":"e37f5f4f45f0cfea2c5ebdc70f949ffc","url":"assets/js/c5be66cf.4c776ac4.js"},{"revision":"22a0008cf498d1cf82078c52d82145ec","url":"assets/js/c7d3a372.55955177.js"},{"revision":"81345e8376c164768ca922d161383d57","url":"assets/js/cc221b30.ae332115.js"},{"revision":"6ef825ba45b7d32c26401f5a2debbeb0","url":"assets/js/cc34207f.96c4892c.js"},{"revision":"d8651f81cfdc7b469a4921a3eb24f46e","url":"assets/js/ccc49370.e36ea503.js"},{"revision":"37cce99b004a3a84c239717ed002b583","url":"assets/js/ce2ccae1.8210cf5e.js"},{"revision":"0313d16acf818c8e147a9de9791fde6d","url":"assets/js/d5ce7688.c321a26d.js"},{"revision":"73515da6f44b1d15134a2d2bfba5b659","url":"assets/js/d5d47070.4842c9c2.js"},{"revision":"9c93d18a79d1ac1bf348b924c78c79a1","url":"assets/js/d871e2e9.71425d25.js"},{"revision":"8d32cb20fe6cd17d0f3bfc8880bcfb7e","url":"assets/js/dd315a79.02546c90.js"},{"revision":"b77ca1ceeb9b8d0088c0b0ba6c495e07","url":"assets/js/dd5b562f.7adabbd1.js"},{"revision":"320554e0c8f765cd119126a74859e4ad","url":"assets/js/df203c0f.9de9bd82.js"},{"revision":"9442902e7bcc06e96f2f78f0823c4df5","url":"assets/js/dfea6eb9.8fdbdb25.js"},{"revision":"d7041f6fc64a0021df5b70bb88cc8432","url":"assets/js/e18b7efc.e17e664e.js"},{"revision":"389dc52527b3f501a6923518d4074243","url":"assets/js/e2d6b814.a53b0cde.js"},{"revision":"ff89149d69153f773338a405e0391caa","url":"assets/js/e4c94ae4.9d760ecc.js"},{"revision":"9c90cb595e56601a9dfe48ad08dfb551","url":"assets/js/e4f3715f.538eb04a.js"},{"revision":"80faa3d093133c61588a729f44519cb8","url":"assets/js/e7eb7418.d7d702f6.js"},{"revision":"6d78515a8cd4259c960d420d127f45d7","url":"assets/js/e86a5a75.20edef57.js"},{"revision":"f789d3c404a48af08b3b42cf4cc76697","url":"assets/js/ec1e3285.9bebf751.js"},{"revision":"b86d7e33161577f5df95a1c65ebc02ca","url":"assets/js/ece86388.cce4c5e0.js"},{"revision":"b08b71f122472f48c8d314a40090b4b4","url":"assets/js/f6f0afbd.bea00a15.js"},{"revision":"53244f231b2ad947756fb5d82b032e96","url":"assets/js/f85166e8.1c7b5da9.js"},{"revision":"5ccd837027c301b1037d8f00d9d826c3","url":"assets/js/f89f36d9.15209079.js"},{"revision":"eea57da84f184fbd407d9dfa18110b11","url":"assets/js/fa878c7a.91e60490.js"},{"revision":"203042bd0d4a4763b12751020ba50a88","url":"assets/js/fc14e939.ed60f575.js"},{"revision":"6d9be45581ee0113909a993d57913c7a","url":"assets/js/fe6644db.ec775081.js"},{"revision":"d147946f170ec88f564028e69299a41e","url":"assets/js/main.a84ef9ae.js"},{"revision":"5ed51d964a5ed301d130e335dc880a3c","url":"assets/js/runtime~main.d0d7db56.js"},{"revision":"983d1c4f56b62686a22ed684238b7fd5","url":"auth/callback.html"},{"revision":"bbd1e1d75d590c6d1366d3c00f59d794","url":"blog.html"},{"revision":"7fcaf91434730d744ae2af7d44258e18","url":"blog/2026/02/23/2026-02-23-news/claude-series-announcement.html"},{"revision":"6e93b49a8a87a1ba3106b4bb00762f38","url":"blog/2026NewYear.html"},{"revision":"d1113a79ec6261e6ad64864a8410ecb1","url":"blog/archive.html"},{"revision":"b77f510d4388d73d36b72e9b42138ec2","url":"blog/tags.html"},{"revision":"53c0b55b4875cb62d89f8ef5b29597e8","url":"blog/tags/announcement.html"},{"revision":"34560e6bdedff152f7030523401a43e4","url":"blog/tags/claude-code.html"},{"revision":"6396851190cbaafab0794c5f3cf65290","url":"blog/tags/docs.html"},{"revision":"884c71b4ce29b35ba04fad161dc293b9","url":"blog/tags/news.html"},{"revision":"71bcb33c19a7efea3b69eadaefe9fac0","url":"blog/tags/village.html"},{"revision":"d68d2a33e21571f14e7f4bca99e034a3","url":"blog/tags/技術新聞.html"},{"revision":"762115ebb5b154cccd2556f788b666d2","url":"blog/tags/新年.html"},{"revision":"8c77b1779350d025dc41a764f2690c9c","url":"blog/tags/節慶.html"},{"revision":"23b84075fd728b7fa1b587bba08862b3","url":"blog/tags/蛋蛋村新聞.html"},{"revision":"d7753cb2b106d954c7ce118e5c5aa4ae","url":"blog/蛋蛋村誕生.html"},{"revision":"25df5da35537dca18b5ec1bc64b70ce6","url":"docs/blog-skill/finance-rules.html"},{"revision":"c5f8c2515e9ead1c8efe00a9a7ec1288","url":"docs/blog-skill/history-rules.html"},{"revision":"9e9810ee0f7c8eff6e52b179524b2751","url":"docs/blog-skill/news-rules.html"},{"revision":"333627f296f724aa4af2f75b120d20c9","url":"docs/category/claude-code.html"},{"revision":"67b7f9e0a7e4b5e422245138c91cfd85","url":"docs/category/python-workshop.html"},{"revision":"0bd1a267cf81cdbbd6400f7237ab775b","url":"docs/category/skill.html"},{"revision":"9e9558c7dd5001b56d1f0e51dbb60327","url":"docs/category/戰情室元件-skill.html"},{"revision":"46f44f4a2f6c1084340669a5b5f31f73","url":"docs/category/發文-skill.html"},{"revision":"837bb13cd96b29b5a7ad417f714df786","url":"docs/claude-code-series/getting-started.html"},{"revision":"a249992d6da80c98d9c2006eb7d58700","url":"docs/claude-code-series/monitoring.html"},{"revision":"9441972412d8a3088c66814bb1222642","url":"docs/claude-code-series/skills.html"},{"revision":"cce5d75f2c9403ef4b6fa22b1cf1f0f0","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"2e3915e037e6efab26dab27c65c8cb37","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"ea9ca2b886e3775b866e0a809d452e67","url":"docs/intro.html"},{"revision":"7688d1f22455ea0704fb8640d8b26ce2","url":"docs/python-workshop/python-init-file.html"},{"revision":"129132aa8f45521d5c121814cdcff566","url":"docs/skill/gemini-skills.html"},{"revision":"6fd1a671e183e8a0e48bb5a3967055f1","url":"docs/tags.html"},{"revision":"5ffbc8cf1dc60f6eaf86e5311ab7fcb6","url":"docs/tags/ai.html"},{"revision":"b9645e3f3da5ac5bf6649d68a3cb0d5a","url":"docs/tags/automation.html"},{"revision":"37617b864d4feb506e25383de63d8922","url":"docs/tags/bpe.html"},{"revision":"c66d45697eb938757bb66b198e823bde","url":"docs/tags/claude-code.html"},{"revision":"a6885591522c1a1942e552fc1fcaa62c","url":"docs/tags/generative-ai.html"},{"revision":"5fc7a8eda78acd3cf7450a0d1d1a5aaf","url":"docs/tags/llm.html"},{"revision":"46dd16951a948c6ee9a1f70c56632e68","url":"docs/tags/nlp.html"},{"revision":"4f1f70403a5a49aa669653a2e52f5c9c","url":"docs/tags/technical-docs.html"},{"revision":"23e8cb7d08d5c689c781a9fba218c943","url":"docs/tags/temperature.html"},{"revision":"5c1fdce2587b245c3bb93bd27134c95c","url":"docs/tags/tokenizer.html"},{"revision":"8447f2394add9ae66712a19534cc3a46","url":"docs/tags/top-p.html"},{"revision":"e6f1d2f7e76e570bdfc98abdacf1d27d","url":"docs/tags/模型控制.html"},{"revision":"65537121b7b39d99284a667b0c40ec76","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"b4f0c458098a0b20736c93792baa7071","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"6f49d692c850510d75041edb5ae00d5d","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"bc2549ec8f4ca53de81b3fb102b92f12","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"2777fe620ef81abb2c294cb0a00d668e","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"8bd5111af7d8488e1b58cae9a058189c","url":"feedback.html"},{"revision":"0dc7ec806d1c7df8c2e425555b6787c3","url":"finance.html"},{"revision":"8a8b45f137fd964c3f8a2047d8088d52","url":"finance/2026-02-28-307/index.html"},{"revision":"a3576a4448405728bdacb46ccaff2d16","url":"finance/ai-286/index.html"},{"revision":"d6e873eb9973b846b9cb5b590b742003","url":"finance/archive.html"},{"revision":"b9a1bb9272b3fdff9c20e1748ff3e554","url":"finance/finance-section-created.html"},{"revision":"c561fdd3b75da0d561695f5db06ca4d7","url":"finance/passive-components-ai-stock.html"},{"revision":"e9be0cba2b69d49d1829e9ec975175b6","url":"finance/post-203/index.html"},{"revision":"0715867564498d928f77512a58e697e8","url":"finance/post-453/index.html"},{"revision":"61843a12a70a85da2207ca7e1137c31b","url":"finance/tags.html"},{"revision":"eb0a5b84aa22f85a567cc5be06820937","url":"finance/tags/announcement.html"},{"revision":"007e57ce4690384c8d887033f7fb142f","url":"finance/tags/finance.html"},{"revision":"98fa6125ee898d38ed09573fd48d6755","url":"finance/tags/newsletter.html"},{"revision":"40fa42187f86d3ce8311479d8ed26fae","url":"finance/taiwan-stock-crash-warning.html"},{"revision":"56b4a4edec0573e3d88e6af98ab0fab0","url":"finance/taiwan-stock-weekend-report.html"},{"revision":"76e2fc6cc7de93c1a303c19fda58ba29","url":"finance/tsmc-industry-trends-analysis.html"},{"revision":"3b8d98e861108d57e39f7c073b02433f","url":"financial/balance-sheet.html"},{"revision":"bce37d4b57b094c9cc22facac26fb1b6","url":"financial/cashflow.html"},{"revision":"579691cdb54466d26372db47f1cd429b","url":"financial/rebalance.html"},{"revision":"0a346894ed6dc1d1e3da050945c3fb58","url":"index.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"56bf30cdc3fae3cd2a1255f80d21dc5f","url":"markdown-page.html"},{"revision":"75175cd82e7329ca03be3b2f0b9c0752","url":"me.html"},{"revision":"962ff738a8c64c53e226933589edec8d","url":"quotes.html"},{"revision":"310f7da709bc8483942187e91538657e","url":"resident/me.html"},{"revision":"fdbece29969428ec89ea9af9595a2a68","url":"tw_stocks.json"},{"revision":"e1f91d622cb15227b0271d6dcd710c7f","url":"tw_stocks/0050.json"},{"revision":"b682d1ce892e622400b7916897b082a6","url":"tw_stocks/0051.json"},{"revision":"adc16fe3521c7ab8ed7045ecca578c0b","url":"tw_stocks/0052.json"},{"revision":"b725f876535b9bd112da6b0b217c9312","url":"tw_stocks/0053.json"},{"revision":"ed0246d9bd72e3d20e10d3c193a1ffa8","url":"tw_stocks/0055.json"},{"revision":"cc4bed0ab773070a91b51909198e0626","url":"tw_stocks/0056.json"},{"revision":"f6b9a1dfe5438b9854cfc7af805875ef","url":"tw_stocks/0057.json"},{"revision":"c16a29425971daf3ff7606377c6c74a4","url":"tw_stocks/0061.json"},{"revision":"699369f447d1db36121ade13713325a7","url":"tw_stocks/006203.json"},{"revision":"48e3b8d73734e1d2295279a027c85f78","url":"tw_stocks/006204.json"},{"revision":"0f5e844390d739324165e4ea3d5e4fed","url":"tw_stocks/006205.json"},{"revision":"adf33add7acf1f60f825430ee9c0839a","url":"tw_stocks/006206.json"},{"revision":"8b1f04384dc93157525af14339a652fa","url":"tw_stocks/006207.json"},{"revision":"fe36bc42eda7274a2dd89bb7916bb38b","url":"tw_stocks/006208.json"},{"revision":"b87ca11b541b03cefca9147f0971b953","url":"tw_stocks/00625K.json"},{"revision":"6b489a572574faad5185286f0900dd5b","url":"tw_stocks/00631L.json"},{"revision":"a04f74311776027fa73a9d2d849539eb","url":"tw_stocks/00632R.json"},{"revision":"db09de90aeb85419d88642eb406410be","url":"tw_stocks/00633L.json"},{"revision":"50a0fedf4a5632c24592eda4ba57efdb","url":"tw_stocks/00634R.json"},{"revision":"651eadbca2d482a3dc12e3a7e800f9b9","url":"tw_stocks/00635U.json"},{"revision":"b16d9c6b782d7969e381b3063a6958c2","url":"tw_stocks/00636.json"},{"revision":"b59330755ab21d6d36165d8e04611381","url":"tw_stocks/00636K.json"},{"revision":"6e07e0d76eb3f07814091d1fdd8dae7a","url":"tw_stocks/00637L.json"},{"revision":"5a813d090703cc54f8c28ad105b4db7b","url":"tw_stocks/00638R.json"},{"revision":"ac189844c5a3bc544c61d821fc1f2e62","url":"tw_stocks/00639.json"},{"revision":"0837bee44fbc2404a9f79c493c604b81","url":"tw_stocks/00640L.json"},{"revision":"0bc323ba588267f7ff4a5608a228f509","url":"tw_stocks/00641R.json"},{"revision":"035f0982350f28a05dafe739bd867093","url":"tw_stocks/00642U.json"},{"revision":"9e81bb5ef766e86f0e4d2610f5b80ac5","url":"tw_stocks/00643.json"},{"revision":"7810d14ea51d6a608a200c406dc48ce7","url":"tw_stocks/00643K.json"},{"revision":"3e6b1c36ceacb23ff1174cb677edcd06","url":"tw_stocks/00645.json"},{"revision":"8a125bd8cf208cde63d368eb71368d39","url":"tw_stocks/00646.json"},{"revision":"1288ae0f04c75957f527849f0d59d896","url":"tw_stocks/00647L.json"},{"revision":"ec55e18914e0662104b5de3b0943b3ce","url":"tw_stocks/00648R.json"},{"revision":"0e54995395de320f05e30bb5b9cb2ffd","url":"tw_stocks/00650L.json"},{"revision":"dec56f33ed8c22395c318de6a616a24f","url":"tw_stocks/00651R.json"},{"revision":"429bf4c7f39e706e74f86b051971c2e0","url":"tw_stocks/00652.json"},{"revision":"600aa53950660c68ba87510923cd62f9","url":"tw_stocks/00653L.json"},{"revision":"826f54cb4d3f6adeb63d7f6d204bf591","url":"tw_stocks/00654R.json"},{"revision":"2f383c50f8bde2af63be9223cd286e4b","url":"tw_stocks/00655L.json"},{"revision":"e89a3c6e8425295d724b520b6f522d3b","url":"tw_stocks/00656R.json"},{"revision":"bd90620508d90daaeeb0122fadc0ae59","url":"tw_stocks/00657.json"},{"revision":"f040c26fbc0f7e8a8e9c06927b792455","url":"tw_stocks/00657K.json"},{"revision":"f8a2ae69e78ec524d81100a45907af7d","url":"tw_stocks/00660.json"},{"revision":"ffd5cb80eddfa454b68ef9a04b1a467b","url":"tw_stocks/00661.json"},{"revision":"7b910007f64d023da0378c167dd45f00","url":"tw_stocks/00662.json"},{"revision":"de736f9cfcf10188ff0348db0d8d2000","url":"tw_stocks/00663L.json"},{"revision":"07465f760895cd950f4dec55e5e8463f","url":"tw_stocks/00664R.json"},{"revision":"e8ec12974f8c303f58b506dc5eaa032e","url":"tw_stocks/00665L.json"},{"revision":"fd95bb75ada2f96f172d33f701ae62a6","url":"tw_stocks/00666R.json"},{"revision":"1335a5f2b49b27f85ab35be98f19c442","url":"tw_stocks/00668.json"},{"revision":"1ea5584562045d2e16fbddaaae46544e","url":"tw_stocks/00668K.json"},{"revision":"de0acff6de5004caaeb0fb45bf478771","url":"tw_stocks/00669R.json"},{"revision":"9fe0e3a1ca03a5f3587caddc7b4edb3a","url":"tw_stocks/00670L.json"},{"revision":"a7494ec20c304dc4ba8ecd789f268d40","url":"tw_stocks/00671R.json"},{"revision":"9c5842891b7d015d40d0cb7545f99c83","url":"tw_stocks/00673R.json"},{"revision":"7422ab0fea755673d10008f7baeddc69","url":"tw_stocks/00674R.json"},{"revision":"5e252df9c41a0fbd4ee6e966a12813eb","url":"tw_stocks/00675L.json"},{"revision":"3969c4c97a5503fda6d98ff139ead2d6","url":"tw_stocks/00676R.json"},{"revision":"a5c50b4c10a9ebad9b56f97da14fba1d","url":"tw_stocks/00678.json"},{"revision":"f36800bf019cdfa1a7b414f8792a950a","url":"tw_stocks/00680L.json"},{"revision":"50c4c90a437e18cf9c90c1f755cda761","url":"tw_stocks/00681R.json"},{"revision":"099ed2b4aebc5d5d8c950e8b206e653c","url":"tw_stocks/00682U.json"},{"revision":"76b8e4def6dd4be446331806e47ee266","url":"tw_stocks/00683L.json"},{"revision":"fe3595ff22a60d0e8980b9f295b928c6","url":"tw_stocks/00684R.json"},{"revision":"30f3f6d278ad5ea03b311b2f36270bcf","url":"tw_stocks/00685L.json"},{"revision":"071b110edffe07495abef98ea0d102e9","url":"tw_stocks/00686R.json"},{"revision":"a103e96d72eddcead437a529c43e51d9","url":"tw_stocks/00688L.json"},{"revision":"0d27840b8cb00e52783717aad6101f5e","url":"tw_stocks/00689R.json"},{"revision":"4665a5bd5d2a1789d0cba280fd487d3a","url":"tw_stocks/00690.json"},{"revision":"e3b8ddec8cb5b13dd796d38e3db663ed","url":"tw_stocks/00692.json"},{"revision":"a30ecc1c7e43d9db868cef3faaa37bca","url":"tw_stocks/00693U.json"},{"revision":"26b1bd77892e58c85a072bd3fdb52c0a","url":"tw_stocks/00700.json"},{"revision":"176d9c51bebd6201500fe371a3a9c551","url":"tw_stocks/00701.json"},{"revision":"453ccd6cce897b2f08e80cc4dfe4bcd3","url":"tw_stocks/00702.json"},{"revision":"683b1c569f355572cf0d43154b8ca698","url":"tw_stocks/00703.json"},{"revision":"4b88e9eb2d4df77a15059043a259f2c8","url":"tw_stocks/00706L.json"},{"revision":"41940a206a82e2f79dc901c6be0f6adf","url":"tw_stocks/00707R.json"},{"revision":"1b639b0f313dd5d79b5a9b844bfffbd1","url":"tw_stocks/00708L.json"},{"revision":"4aa5cac06da075254369dc3b115c3362","url":"tw_stocks/00709.json"},{"revision":"c814acc75048330c8800c5b566b69aea","url":"tw_stocks/00710B.json"},{"revision":"0ea6f15d43132ab78c3fce9ea5ce2289","url":"tw_stocks/00711B.json"},{"revision":"f2504cdca63efda13f1b7e02a15e3128","url":"tw_stocks/00712.json"},{"revision":"116c08c29ac529ec6aad49041d05949d","url":"tw_stocks/00713.json"},{"revision":"fe5e379432d9d5dd1d6c0fabea1b4813","url":"tw_stocks/00714.json"},{"revision":"b1ef18919a9a0d3b9d69a99b1dc5c517","url":"tw_stocks/00715L.json"},{"revision":"42dd0d72dfceea199a295912d067376f","url":"tw_stocks/00717.json"},{"revision":"00ce9108c618bb58577ff8a8ad01cb30","url":"tw_stocks/00728.json"},{"revision":"d46f6082d57e3c9d8040eefed889c2fc","url":"tw_stocks/00730.json"},{"revision":"d1144131b8832ac5203331cbd29fad9b","url":"tw_stocks/00731.json"},{"revision":"bbb0b160c9b305deedd3419c0d2d324d","url":"tw_stocks/00733.json"},{"revision":"c31bbad50041a08bf887a854f25cf7f0","url":"tw_stocks/00735.json"},{"revision":"796bbbaf0dd8e3a7a7d86c6cef9dfdf9","url":"tw_stocks/00736.json"},{"revision":"a08f65bbcf0d23c84c22b60e697f1d63","url":"tw_stocks/00737.json"},{"revision":"c284f215f22ef9174f153708fa846f63","url":"tw_stocks/00738U.json"},{"revision":"4fdb68c4f389a41b9118b689e8956085","url":"tw_stocks/00739.json"},{"revision":"870ab68a87a530c48d6944e4f4f41b3b","url":"tw_stocks/00752.json"},{"revision":"de40fd43aa932bba6c6c979e63308fab","url":"tw_stocks/00753L.json"},{"revision":"6808fcb75b83a5489f6b953063d6d744","url":"tw_stocks/00757.json"},{"revision":"23efbdc155e2dc46b39b30f0558ba102","url":"tw_stocks/00762.json"},{"revision":"f67b85b87a88acfa237a7a57f01329e1","url":"tw_stocks/00763U.json"},{"revision":"bac6d80b3601e13ad7418ee768c1ce3b","url":"tw_stocks/00770.json"},{"revision":"9e160ff71a7b30e84b66901a3ad92f61","url":"tw_stocks/00771.json"},{"revision":"1f922f6ff8e98c72dc48d707702e1907","url":"tw_stocks/00775B.json"},{"revision":"ff8c14aec8ec750807fb3bd5ea33f72c","url":"tw_stocks/00783.json"},{"revision":"87c739d01ba9d429b0f6535a434e8f64","url":"tw_stocks/00830.json"},{"revision":"5bf32608b2d9728576040ec265c49718","url":"tw_stocks/00850.json"},{"revision":"40216bba4cfe8e203499f5b0b3208a74","url":"tw_stocks/00851.json"},{"revision":"e8cbe1edfc40bcc55ebcef1a54a804c6","url":"tw_stocks/00852L.json"},{"revision":"23de1ca0ae6241592eccc516facfb2d9","url":"tw_stocks/00861.json"},{"revision":"b9f0fa8619539ea457ee0fc2164046b3","url":"tw_stocks/00865B.json"},{"revision":"293a73d2966dbf7767727b899bd2505b","url":"tw_stocks/00875.json"},{"revision":"0dce178c8a90aaafb5e2ed627cb6e449","url":"tw_stocks/00876.json"},{"revision":"597167b06c67ba7f57a48a0c1db86259","url":"tw_stocks/00878.json"},{"revision":"6f707d4fa668e4ea9934cc7755a43e78","url":"tw_stocks/00881.json"},{"revision":"7a32f692d4dae110aab47468a2d9bd85","url":"tw_stocks/00882.json"},{"revision":"c189a952775a4eaa4d08419110cee9df","url":"tw_stocks/00885.json"},{"revision":"add2452e4564c0618b4b9124f0ae0949","url":"tw_stocks/00891.json"},{"revision":"7be8fc28485c66c831fbad7511a4b8b1","url":"tw_stocks/00892.json"},{"revision":"36196a3b43a576378a5c89d9bc5314c4","url":"tw_stocks/00893.json"},{"revision":"b30a41f640186f383e87cec1e6b607c3","url":"tw_stocks/00894.json"},{"revision":"c0635afbbcf7acbd824ccd2fb8b1862d","url":"tw_stocks/00895.json"},{"revision":"ef1c70368a4a91e577b9c5a8b94e0836","url":"tw_stocks/00896.json"},{"revision":"da66bb68ca7dd0ba6f4f8368e767a8bb","url":"tw_stocks/00897.json"},{"revision":"2bd384e9b654fc3f85962f0b8197868c","url":"tw_stocks/00898.json"},{"revision":"b6e759c44350f61a78f61f78ca46726f","url":"tw_stocks/00899.json"},{"revision":"7b68fa4936600ec1fb25013b6335419e","url":"tw_stocks/00900.json"},{"revision":"af17ff8de5ca1f34edbf5daa0fe76f86","url":"tw_stocks/00901.json"},{"revision":"02be30265e55c919d80e2e60d7da2691","url":"tw_stocks/00902.json"},{"revision":"1569e04b5077313b904ca57340fa7c35","url":"tw_stocks/00903.json"},{"revision":"f12b9355d7f5c2a6739a47a19bfb3926","url":"tw_stocks/00904.json"},{"revision":"92be751a1981985f46973b37dd1c22de","url":"tw_stocks/00905.json"},{"revision":"5503c97414204212a55e2d59f0781086","url":"tw_stocks/00907.json"},{"revision":"3e139d56c3efc4d8eeb58e72bef0d718","url":"tw_stocks/00908.json"},{"revision":"7ea7739f526e2705db433c9c72ee85c1","url":"tw_stocks/00909.json"},{"revision":"27080472ffc9ae820db6deb9c0c97d05","url":"tw_stocks/00910.json"},{"revision":"0da16e5ec8f9d3e80ef058374ee525a4","url":"tw_stocks/00911.json"},{"revision":"f9406f9257f0b7926fc94698ffef21a9","url":"tw_stocks/00912.json"},{"revision":"6a16ae71dd1a2405ca333a73baa1787a","url":"tw_stocks/00913.json"},{"revision":"7295ffb5e54550e21efc298fca60c9df","url":"tw_stocks/00915.json"},{"revision":"bc507b7b1a8c5c09e19defc589301657","url":"tw_stocks/00916.json"},{"revision":"f746a33ec09c4079ab4a3d341255406b","url":"tw_stocks/00917.json"},{"revision":"1bdf1f3bcfd3081ed25a04d29027eb41","url":"tw_stocks/00918.json"},{"revision":"133931d35ece68c73ed5c94b3e43bde7","url":"tw_stocks/00919.json"},{"revision":"8c38698b3be38e40d5aef00e522c41bf","url":"tw_stocks/00920.json"},{"revision":"10007bfaed4d9f46f508b84550d6f6a9","url":"tw_stocks/00921.json"},{"revision":"ac546c66f1d6ca1b548746f75f9a33f2","url":"tw_stocks/00922.json"},{"revision":"c3428de0a44748ea38c9946d6404cd1f","url":"tw_stocks/00923.json"},{"revision":"fc096dcf6376e22f665d3f99a7f27880","url":"tw_stocks/00924.json"},{"revision":"20dbf9e6c7f9204d0d9a4677055c20ca","url":"tw_stocks/00926.json"},{"revision":"8665d1c29a0e85d9d6ded0b82f9250ee","url":"tw_stocks/00927.json"},{"revision":"6ab2e1022088876132b00b2c016738c3","url":"tw_stocks/00929.json"},{"revision":"78855bd0ff82c871f048a8c922415861","url":"tw_stocks/00930.json"},{"revision":"aee4e534b0eb358e843b36cc669c9305","url":"tw_stocks/00932.json"},{"revision":"680e038c9ed186c80c38723f1bfdece6","url":"tw_stocks/00934.json"},{"revision":"baa4459ef3d9dbad051ff747265bbf1c","url":"tw_stocks/00935.json"},{"revision":"bbc8dc91ad5d40a928969d13aaa359ac","url":"tw_stocks/00936.json"},{"revision":"6615821f9beead3d10bf9316d7b6283c","url":"tw_stocks/00938.json"},{"revision":"ab3ece2f0ab4286c6bea374ed75b0cf2","url":"tw_stocks/00939.json"},{"revision":"92124dceb03891dfa8d92ff931a32370","url":"tw_stocks/00940.json"},{"revision":"f7be875b112c916275c1463d7a9a6104","url":"tw_stocks/00941.json"},{"revision":"7fa46edcd889c3ad0f0119d17c843ae3","url":"tw_stocks/00943.json"},{"revision":"ab29a980a635d43ab18a2b11c12d1e71","url":"tw_stocks/00944.json"},{"revision":"749253f399dea5aeb4c2f4dbf5ad57e3","url":"tw_stocks/00945B.json"},{"revision":"6744e111d82e9181a116731ff4bba8ac","url":"tw_stocks/00946.json"},{"revision":"25ce157ed69a744f2827130bcba1e6e7","url":"tw_stocks/00947.json"},{"revision":"9b03e2ba3918cddaee657287cbfd0046","url":"tw_stocks/00949.json"},{"revision":"fa7c2cb574da0f4240ed8fcc67040dcc","url":"tw_stocks/00951.json"},{"revision":"7702b5fd34b4e0439662b25ec8ed9b66","url":"tw_stocks/00952.json"},{"revision":"ef144a3fd754f503de8d2b393ede060d","url":"tw_stocks/00953B.json"},{"revision":"e148d17ba4db1cb2ec6a33104bea2cfa","url":"tw_stocks/00954.json"},{"revision":"2e5c190c76047455489b2052fe7f410a","url":"tw_stocks/00956.json"},{"revision":"f12d7e69b8cca751b1768abad942790f","url":"tw_stocks/00960.json"},{"revision":"a23ce3c9f77c4304a80728653bc128e2","url":"tw_stocks/00961.json"},{"revision":"0f721cb88a59d3be33fdf666d7ba5aa8","url":"tw_stocks/00962.json"},{"revision":"8a5ff4d49ca3db6f999cfc1d68c7cc4c","url":"tw_stocks/00963.json"},{"revision":"e15530e57cec4abd74724d6f50c9fcdb","url":"tw_stocks/00964.json"},{"revision":"6b6df0e5d3f8f2707aa5daac18762888","url":"tw_stocks/00965.json"},{"revision":"636157854c04b56e16693c7987590502","url":"tw_stocks/00971.json"},{"revision":"a19089b85256e2368a20880eb2ea8962","url":"tw_stocks/00972.json"},{"revision":"afdc527c4221f992810ce0af44e297c8","url":"tw_stocks/009800.json"},{"revision":"939d4547609f1b70992ac7748760c695","url":"tw_stocks/009801.json"},{"revision":"4652d73e78e54ebf3b1df1483682b007","url":"tw_stocks/009802.json"},{"revision":"fdfb9f1e1096124a746dd7523237aa42","url":"tw_stocks/009803.json"},{"revision":"231d04efa28a52e691cf41e531dd2025","url":"tw_stocks/009804.json"},{"revision":"10a11b4369becfb9cb0755953c2ed8d8","url":"tw_stocks/009805.json"},{"revision":"18e7f6a9eafdd9452de6de47047c815f","url":"tw_stocks/009808.json"},{"revision":"037c54c2799511ba2b27b61b81e9c47b","url":"tw_stocks/009809.json"},{"revision":"8133d11e036ce66c35b4bbea108ecbc2","url":"tw_stocks/00980A.json"},{"revision":"a6076ef369ad9c33cf3a61831b2aae45","url":"tw_stocks/009810.json"},{"revision":"7801811b3c5486eeb1eab3530398e246","url":"tw_stocks/009811.json"},{"revision":"962ff2bf5f1ee4a850bb32d1ebe638a6","url":"tw_stocks/009812.json"},{"revision":"ee9b1dab9879c1cc94cea980ff7ea42b","url":"tw_stocks/009813.json"},{"revision":"0bd09938c8875fd2960cc6be6f8d5599","url":"tw_stocks/009816.json"},{"revision":"b74579e8f8ce2276e3c9238771276500","url":"tw_stocks/009817.json"},{"revision":"b1e74aced5d8b1dad639cb467b758694","url":"tw_stocks/00981A.json"},{"revision":"7327c74f9fcf4b8d660503e5bcbde070","url":"tw_stocks/00981T.json"},{"revision":"23822c426a4bf93208a56ffb0a99eae2","url":"tw_stocks/00982A.json"},{"revision":"f6d93ca3e55f9369d6e1f80e517f2532","url":"tw_stocks/00982D.json"},{"revision":"2d994c7e9041fca6f30b86fc4c0456f9","url":"tw_stocks/00982T.json"},{"revision":"1113e5c067634fd18c618bec575497a9","url":"tw_stocks/00983A.json"},{"revision":"b1b4a9d883d9dbbc1d7251285761a857","url":"tw_stocks/00983D.json"},{"revision":"ae89143a96cb110bfc5245b002620d3a","url":"tw_stocks/00984A.json"},{"revision":"2514bc2fac8cf31aa11d7cc0f5caabac","url":"tw_stocks/00984D.json"},{"revision":"f642711af11c9813e32d8e2456b170f8","url":"tw_stocks/00985A.json"},{"revision":"2c05e5ca66a19117077d2a7de13cffc5","url":"tw_stocks/00985B.json"},{"revision":"61b1c21eb08de967d77befbb6e2eb101","url":"tw_stocks/00986A.json"},{"revision":"fab90e3c88209b48913635dcb68779c3","url":"tw_stocks/00987A.json"},{"revision":"2d077e13e24cb6422465245217501a28","url":"tw_stocks/00988A.json"},{"revision":"ec97ae33dba58d9e3c2367d97061bee6","url":"tw_stocks/00989A.json"},{"revision":"d29935e1b6070c79eca28ef2b280461e","url":"tw_stocks/00990A.json"},{"revision":"3befbae8d0671ac8f96fb214926fb7fc","url":"tw_stocks/00991A.json"},{"revision":"c35b7c20101d0acf4c0bdb10507de1cf","url":"tw_stocks/00992A.json"},{"revision":"1d904dcd8407224b88f06fb4751b56e3","url":"tw_stocks/00993A.json"},{"revision":"91d909a70604e6bf76dff0c0efc88889","url":"tw_stocks/00994A.json"},{"revision":"a3d5bb3479e118a22134057da4a24126","url":"tw_stocks/00995A.json"},{"revision":"928eb3f5048bcf38e5d8c23647ec42e4","url":"tw_stocks/1101.json"},{"revision":"bdff0cb8819b40bac2dd82231ba990a5","url":"tw_stocks/1102.json"},{"revision":"0463a930b661f56ebdd41ef72da9b193","url":"tw_stocks/1103.json"},{"revision":"2e24b97f51f8de98e417f9beba6a7ded","url":"tw_stocks/1104.json"},{"revision":"06280182af47b154dea3130b7fb72ef3","url":"tw_stocks/1108.json"},{"revision":"938092f33f11597aeaeb32d8e2ef2e86","url":"tw_stocks/1109.json"},{"revision":"f11637c99858fa02a7c2274836ba32bf","url":"tw_stocks/1110.json"},{"revision":"59c6cc375bcda4ae92671649a8478bff","url":"tw_stocks/1201.json"},{"revision":"7a4173d7ccb0e08f179c792ec846da02","url":"tw_stocks/1203.json"},{"revision":"073d7032a0e4a74a05883d11241d8f57","url":"tw_stocks/1210.json"},{"revision":"1f384db56c3a6deb3f6cd312bd223a2f","url":"tw_stocks/1213.json"},{"revision":"82ef2435829d3a4111f265e5d6fd4af2","url":"tw_stocks/1215.json"},{"revision":"9a37299d455bf0a00f81f7db2b3d8a74","url":"tw_stocks/1216.json"},{"revision":"0b4bbb1e53da1fe819f8a4fe664a73cc","url":"tw_stocks/1217.json"},{"revision":"2a046a8264363d9b24fa61cd8bd62642","url":"tw_stocks/1218.json"},{"revision":"44cc1f39bad9e9114ee24a5dc0cba5e7","url":"tw_stocks/1219.json"},{"revision":"f36ad1a0c9508b10cc3d03efd04ad8b0","url":"tw_stocks/1220.json"},{"revision":"1e042c96eb520cb7b67e1ed467a2f9ef","url":"tw_stocks/1225.json"},{"revision":"752cc129ffeeb955da9075fed162815c","url":"tw_stocks/1227.json"},{"revision":"a25f4233ce77abb84a8840503eb44dce","url":"tw_stocks/1229.json"},{"revision":"3676281ad0165ffeac0c08c08fee7af2","url":"tw_stocks/1231.json"},{"revision":"fd1f436a7a84470b11f1115646f215c7","url":"tw_stocks/1232.json"},{"revision":"7c6feb75fc7530eb97d966135cebddaa","url":"tw_stocks/1233.json"},{"revision":"3041d41b203712e4deb2d6306527e905","url":"tw_stocks/1234.json"},{"revision":"0b1d496dd708cb56a3d8acac81478838","url":"tw_stocks/1235.json"},{"revision":"498e9b3bbb8f0b11486c32758b910eba","url":"tw_stocks/1236.json"},{"revision":"e52bc19e084716031312d0c9f3eeb9d4","url":"tw_stocks/1256.json"},{"revision":"16568d122e2b6775b2411d1776a7fec3","url":"tw_stocks/1301.json"},{"revision":"389faa95fb7c06eb6e1f368335652b64","url":"tw_stocks/1303.json"},{"revision":"28655e2ff42cb5dabee10e750069ec86","url":"tw_stocks/1304.json"},{"revision":"e782240e400fde83c455e1cfaf44e05b","url":"tw_stocks/1305.json"},{"revision":"5656dee808db4295716d248e906d6b46","url":"tw_stocks/1307.json"},{"revision":"1c63db634390ba617abdac52919dc03a","url":"tw_stocks/1308.json"},{"revision":"223a075c6a6b334115e7ea8762951339","url":"tw_stocks/1309.json"},{"revision":"5a2d48ce64a385c4a473378fbc2231ce","url":"tw_stocks/1310.json"},{"revision":"c9c2457b2381ea0e37706abb74f0f8e3","url":"tw_stocks/1312.json"},{"revision":"ebe2e4b38f0ed0a563b783e0782e9f1a","url":"tw_stocks/1313.json"},{"revision":"92ba9f3d8b7bc184a52ec53d21ac5969","url":"tw_stocks/1314.json"},{"revision":"b1b22766379ff61c0ca803b1bd43660c","url":"tw_stocks/1315.json"},{"revision":"a97f934dc0d35a55be3963e12f8a0460","url":"tw_stocks/1316.json"},{"revision":"648f1c7cc4e702b38f1bd0f513590edb","url":"tw_stocks/1319.json"},{"revision":"29ecd17437098448c8a6d3f24cf71ebd","url":"tw_stocks/1321.json"},{"revision":"e0e94bd69fff4e9da23d849de62308e6","url":"tw_stocks/1323.json"},{"revision":"06467b9ae2048dff5834f5dd3bc5faed","url":"tw_stocks/1324.json"},{"revision":"eefdf19457789df03d86278771833413","url":"tw_stocks/1325.json"},{"revision":"41db12aa026a82a3650ec66d74074f89","url":"tw_stocks/1326.json"},{"revision":"34509d40e2fab6d343f9bb46973552c8","url":"tw_stocks/1337.json"},{"revision":"511ef93e0d5f2115b2bbeee5b1ee3f72","url":"tw_stocks/1338.json"},{"revision":"a8fb3b00379229d44ea1fa29690bf63e","url":"tw_stocks/1339.json"},{"revision":"c5721be1fd8767d5dc675908be2e9965","url":"tw_stocks/1340.json"},{"revision":"460c7a63a499a61ded90fea3fa612f9c","url":"tw_stocks/1341.json"},{"revision":"dbbe4d562e3412c6ab8c31fc01cbb9ef","url":"tw_stocks/1342.json"},{"revision":"fb0b1f28c9217d5e4afae695024a9733","url":"tw_stocks/1402.json"},{"revision":"700c74f37ca7755082a8d1488d8669b6","url":"tw_stocks/1409.json"},{"revision":"4488eef6f18ecbd8196afbb0e8358254","url":"tw_stocks/1410.json"},{"revision":"7f3b61a222420e828c15deda3f2561f3","url":"tw_stocks/1413.json"},{"revision":"420d1ae4679a5150f34565ab49545f66","url":"tw_stocks/1414.json"},{"revision":"e3f9bc9926bc1c918b70045fc780a005","url":"tw_stocks/1416.json"},{"revision":"ea6d75c62e28f315b1c591fdf07edfc8","url":"tw_stocks/1417.json"},{"revision":"178cb44b4fa070fdd945a773d036806f","url":"tw_stocks/1418.json"},{"revision":"8fc32f31650c26d498b3d3ae39628143","url":"tw_stocks/1419.json"},{"revision":"6589d43319de6e2407565f8986129838","url":"tw_stocks/1423.json"},{"revision":"b4c98d2fc7b329c3d73468fb11d9acaf","url":"tw_stocks/1432.json"},{"revision":"db8530c3357fd8e18a2d3f2682f65354","url":"tw_stocks/1434.json"},{"revision":"2d42ee199a3e816616408275ec8c8884","url":"tw_stocks/1435.json"},{"revision":"1a8dc6c8ecb4ef1fbe1416bfa124ed47","url":"tw_stocks/1436.json"},{"revision":"d9e1d771e7bd9d9819d6e31f3d7aa105","url":"tw_stocks/1437.json"},{"revision":"b669041904def716bb4ea0cdc3383ed4","url":"tw_stocks/1438.json"},{"revision":"610c095d2f6c02cddb0d752d3087b3b9","url":"tw_stocks/1439.json"},{"revision":"d676cd4e061fa44a67d7cf1e7d2d5c13","url":"tw_stocks/1440.json"},{"revision":"8bee3dbe13064c7412093029cf4285be","url":"tw_stocks/1441.json"},{"revision":"fdf62d933af6e42b4a4cb2269ce77452","url":"tw_stocks/1442.json"},{"revision":"0fcba32a9f395de31eb3086729cd3552","url":"tw_stocks/1443.json"},{"revision":"e2482161680b2e01814fe7b9be42f2b9","url":"tw_stocks/1444.json"},{"revision":"fac9fcc627b1ba7998423566b6e92695","url":"tw_stocks/1445.json"},{"revision":"5808939be2a65f3b895c145d63e00277","url":"tw_stocks/1446.json"},{"revision":"b1affd564e60e90b53599b810722f252","url":"tw_stocks/1447.json"},{"revision":"925190b1610551a740eab8eba1235491","url":"tw_stocks/1449.json"},{"revision":"e14c022fe22e167ada42d47c1846af15","url":"tw_stocks/1451.json"},{"revision":"3d9bc416af8a02d7a92d8480e37b9181","url":"tw_stocks/1452.json"},{"revision":"03af50422b7312320648ecc85661403d","url":"tw_stocks/1453.json"},{"revision":"b812d41a7b9fff5d2f8394fa0be89f2f","url":"tw_stocks/1454.json"},{"revision":"81ade375d0d132800ed0103e2080ebf3","url":"tw_stocks/1455.json"},{"revision":"ca43858ade39c1f0f4ce8a3067db0c8f","url":"tw_stocks/1456.json"},{"revision":"87dac28f01427413c377d0f77f2f66ac","url":"tw_stocks/1457.json"},{"revision":"9080a153be32fef0e2d1fa0502798edb","url":"tw_stocks/1459.json"},{"revision":"80071079625e8e4133ce9d834ad54fb0","url":"tw_stocks/1460.json"},{"revision":"ac87bae4da16d6825872569172eb0642","url":"tw_stocks/1463.json"},{"revision":"177b07a83d2e5bba82816d2460d0301e","url":"tw_stocks/1464.json"},{"revision":"d4c9acbec03e8675c667b5a0ccc3e179","url":"tw_stocks/1465.json"},{"revision":"f9dda6df695fab945d37434828645ae7","url":"tw_stocks/1466.json"},{"revision":"87991fb21405e8c62f19b92cf99cbd52","url":"tw_stocks/1467.json"},{"revision":"c3cb182c4ecf31c3c06049618a0bc768","url":"tw_stocks/1468.json"},{"revision":"bdd75830473e87d88f29e31c3c359f97","url":"tw_stocks/1470.json"},{"revision":"feb296021e4c6f933517230a7b83f901","url":"tw_stocks/1471.json"},{"revision":"ba82cf7a7cd7c7ef01e12eb55db08e9a","url":"tw_stocks/1472.json"},{"revision":"11a70bceadc8ed8125bf2553e66d4eb7","url":"tw_stocks/1473.json"},{"revision":"b79be794ef8a83aceadb296b4b88f450","url":"tw_stocks/1474.json"},{"revision":"3be4fca8af6cd62f3369f7d0d1018753","url":"tw_stocks/1475.json"},{"revision":"9ab14dbed4d0584ab516e530bf24bbb4","url":"tw_stocks/1476.json"},{"revision":"5d4c3fc6092463bc9ebfb00882b000aa","url":"tw_stocks/1477.json"},{"revision":"3542dbc1826fee1cd2d9fb1c5203fa3c","url":"tw_stocks/1503.json"},{"revision":"05747ca29d0d398e7bbad19605b5dd6a","url":"tw_stocks/1504.json"},{"revision":"5ec0fc9d4bc095293a2086a434ad5b2e","url":"tw_stocks/1506.json"},{"revision":"6c3462fa4ae1e15e3b62da40ecfdc246","url":"tw_stocks/1512.json"},{"revision":"8ecf4824b29723a4e85a3eb7c388d4bf","url":"tw_stocks/1513.json"},{"revision":"e2d5fc441d8ad847c9117ce61fb67314","url":"tw_stocks/1514.json"},{"revision":"54b8f9b51420e81b3fcb369e548745a0","url":"tw_stocks/1515.json"},{"revision":"ec47da4bf6498cb31efc1d481d14a1a0","url":"tw_stocks/1516.json"},{"revision":"589a91cc6b46cb9e3815a6c70a47316c","url":"tw_stocks/1517.json"},{"revision":"3a1cfe286d234a669d14d90326bc6412","url":"tw_stocks/1519.json"},{"revision":"e840742d2b4242f96de44d5e67d8bff1","url":"tw_stocks/1521.json"},{"revision":"9b192166f12e4837cd39a15905d7e523","url":"tw_stocks/1522.json"},{"revision":"9c510c016cc8a12a7ae390a8cc7934fe","url":"tw_stocks/1524.json"},{"revision":"0a36eb5f5e15c52b0998c8162ab93827","url":"tw_stocks/1525.json"},{"revision":"896667be93963168718791fc4a1553c8","url":"tw_stocks/1526.json"},{"revision":"beed66a1f595682c50a3dcfb31d70d10","url":"tw_stocks/1527.json"},{"revision":"f64f177eab8730a250336c41731362b1","url":"tw_stocks/1528.json"},{"revision":"6246353be99725a08f618bee3f107506","url":"tw_stocks/1529.json"},{"revision":"17a7b2d3caf002023e352447699dc5c4","url":"tw_stocks/1530.json"},{"revision":"489a4ae1c56c420ffd252d08f072b449","url":"tw_stocks/1531.json"},{"revision":"97cd1891f3d3f5202dbc776da9894dd5","url":"tw_stocks/1532.json"},{"revision":"7a1f12d0293593f0bd46da6842e579fb","url":"tw_stocks/1533.json"},{"revision":"068d89ed65f921f7253e34d274689aab","url":"tw_stocks/1535.json"},{"revision":"2248d170542863ee97823512f3ccf770","url":"tw_stocks/1536.json"},{"revision":"0bc3363d9a8c7dece8941a0d4ead1e18","url":"tw_stocks/1537.json"},{"revision":"a8ae786ecee30675619ca031802c19da","url":"tw_stocks/1538.json"},{"revision":"845c3cbf6cec1411d2af5c82dce88601","url":"tw_stocks/1539.json"},{"revision":"383837fa644bd0ae29cf6d88b03723e0","url":"tw_stocks/1540.json"},{"revision":"b6ef279038765acf80c053da6228a40b","url":"tw_stocks/1541.json"},{"revision":"35805d74cb3debacaa16f33c3f2b6476","url":"tw_stocks/1558.json"},{"revision":"afa55c909f3e9b1846d7e3c0ec64a402","url":"tw_stocks/1560.json"},{"revision":"0a8e3a7495226d9b9caa4b05b10b1c73","url":"tw_stocks/1563.json"},{"revision":"98471db57cecafa78f80aac8483b6fc2","url":"tw_stocks/1568.json"},{"revision":"0fbfb5824c63dedd91e7bb83c1873490","url":"tw_stocks/1582.json"},{"revision":"c61dbd4ea39be75bd77bf1e7bb79b23f","url":"tw_stocks/1583.json"},{"revision":"9bf13d2ed55339fa5e7b65e6ef433cee","url":"tw_stocks/1587.json"},{"revision":"1014e8a38451da24f099303f42d689f8","url":"tw_stocks/1589.json"},{"revision":"8e59d8a4bf6615872e7b3d617c3170f8","url":"tw_stocks/1590.json"},{"revision":"3b99cf288dfb1e30484cfef164482320","url":"tw_stocks/1597.json"},{"revision":"52c98c079c2a877a18f1637355741cc2","url":"tw_stocks/1598.json"},{"revision":"fdfa6e87fd0cffac9e3ed8c4017c63ed","url":"tw_stocks/1603.json"},{"revision":"f76206e06e382e30463e183bb13b272e","url":"tw_stocks/1604.json"},{"revision":"0b80f5161182fe93306a6cafb915e4b3","url":"tw_stocks/1605.json"},{"revision":"565bf2964399f5f802d0a2346d04a9e7","url":"tw_stocks/1608.json"},{"revision":"0c694b1ac4a266ff9118b47f8b582c10","url":"tw_stocks/1609.json"},{"revision":"24db0931a1392475848b480f0ffcc129","url":"tw_stocks/1611.json"},{"revision":"28426ee30005f53dc168af1f8d928d1f","url":"tw_stocks/1612.json"},{"revision":"8b5645da24e38858bf8a5708e8575f46","url":"tw_stocks/1614.json"},{"revision":"84f6594b1a5e3fc01c99b5bed98bca1d","url":"tw_stocks/1615.json"},{"revision":"1e1cff01ef145527a6019d7bfe0376fc","url":"tw_stocks/1616.json"},{"revision":"fc0605ef80474607e0b6945f105b2f0f","url":"tw_stocks/1617.json"},{"revision":"d93531fb437b5bcafdd85a6c51611c4a","url":"tw_stocks/1618.json"},{"revision":"e4d4e52155d17361757d39536ff997fa","url":"tw_stocks/1623.json"},{"revision":"d04b9888af89cd56459dc16e29ecd2bb","url":"tw_stocks/1626.json"},{"revision":"6df33530756109f2558e8bc8d47bde07","url":"tw_stocks/1702.json"},{"revision":"a43c35f0974dbb22bd0feea441f8b007","url":"tw_stocks/1707.json"},{"revision":"fcf9f15e1e1db03dc870cdc02bd3755a","url":"tw_stocks/1708.json"},{"revision":"92127718d5d7e7ee3271f1becc459f19","url":"tw_stocks/1709.json"},{"revision":"63cf9512b6f04dad7389ff012d6aa0c7","url":"tw_stocks/1710.json"},{"revision":"31102cb2584c39fbf9aa5b4f96a01197","url":"tw_stocks/1711.json"},{"revision":"58fa44cfc6e5c515306c9e50ef643e31","url":"tw_stocks/1712.json"},{"revision":"15d2426be54cc567af8ee00d4b14ab4f","url":"tw_stocks/1713.json"},{"revision":"3db9f09436c70641bb0b3d91986d3d66","url":"tw_stocks/1714.json"},{"revision":"702b89a9d769602b0b99ee8e11696590","url":"tw_stocks/1717.json"},{"revision":"06cc509665237b477eaeed736674c0d6","url":"tw_stocks/1718.json"},{"revision":"15061db2f044863a304de2fb5c42bb6a","url":"tw_stocks/1720.json"},{"revision":"20824a6cc91ad3c0bb8dd1edf109e550","url":"tw_stocks/1721.json"},{"revision":"633fa1c00f932d7c0b2c61091ecacc6c","url":"tw_stocks/1722.json"},{"revision":"043ae322d25e26194c07bcc0797cd288","url":"tw_stocks/1723.json"},{"revision":"142f987d71d4719952c8a3f6095ab750","url":"tw_stocks/1725.json"},{"revision":"ca0aebe99ff81645cb09c6242442e534","url":"tw_stocks/1726.json"},{"revision":"313efeab1045de18237a3fc2d8a3cb50","url":"tw_stocks/1727.json"},{"revision":"6e2d9cc054307b11a82587bee8f5cea5","url":"tw_stocks/1730.json"},{"revision":"c14d07517128a40ce2f69bc2a82cbb9a","url":"tw_stocks/1731.json"},{"revision":"a0c605e40833803efd509dd2a815ddaf","url":"tw_stocks/1732.json"},{"revision":"4108cb24b2239afecb3ab2184520b085","url":"tw_stocks/1733.json"},{"revision":"e637e742f5672c0b08a61a88371286e5","url":"tw_stocks/1734.json"},{"revision":"ef476b612063ecfe35f6719ec9e4d4c5","url":"tw_stocks/1735.json"},{"revision":"445516a1ef6e74911beaa82e939ce9e7","url":"tw_stocks/1736.json"},{"revision":"f9457ce1c3934a723386b16dce52cf89","url":"tw_stocks/1737.json"},{"revision":"a6b0f696b3bac51f88afbf35af5a5476","url":"tw_stocks/1752.json"},{"revision":"586eb8a9f3eb4548e60d0b0059e7e578","url":"tw_stocks/1760.json"},{"revision":"0fc2b7a44e9cfd0cd7a89e6b7fe57680","url":"tw_stocks/1762.json"},{"revision":"6c17991f967559788c040b120435e643","url":"tw_stocks/1773.json"},{"revision":"cb23f612fd68d090e5f895a0a11960be","url":"tw_stocks/1776.json"},{"revision":"af57349ff16323a49a2a78f030d92c2b","url":"tw_stocks/1783.json"},{"revision":"a5414b0bc0c3e672fc88d258a2b3607e","url":"tw_stocks/1786.json"},{"revision":"727cd0ecd80b1201c0d75774fa2e4120","url":"tw_stocks/1789.json"},{"revision":"901947dc51281024690ff96ce4b219d6","url":"tw_stocks/1795.json"},{"revision":"035b2de5c8bcfd47cfd227058e225946","url":"tw_stocks/1802.json"},{"revision":"aad4ed5ee78d7a83297addd3925bf98c","url":"tw_stocks/1805.json"},{"revision":"6bba898c22fd03f0c87d36fa95da7e08","url":"tw_stocks/1806.json"},{"revision":"f396e246f3dc1cacf8370888143ef969","url":"tw_stocks/1808.json"},{"revision":"338e7f66b4bf73ec5adf1587b6245c69","url":"tw_stocks/1809.json"},{"revision":"4ac96ac99114c6f252e89f5c236e611c","url":"tw_stocks/1810.json"},{"revision":"7b5ea8d6c1528738c6c5ecb14a0c075a","url":"tw_stocks/1817.json"},{"revision":"3e17e33f7a6460661cfebfcdce971131","url":"tw_stocks/1903.json"},{"revision":"d97a5d8d796d72b17086ae1e57690ca9","url":"tw_stocks/1904.json"},{"revision":"80164e523008279863939e16a5f59f16","url":"tw_stocks/1905.json"},{"revision":"e1288a4980d5d884d510c01a875cb898","url":"tw_stocks/1906.json"},{"revision":"32bdb4070546cb8379440575c81309a4","url":"tw_stocks/1907.json"},{"revision":"68b1f79868887a23d91dfc93ab3c3829","url":"tw_stocks/1909.json"},{"revision":"e20f111bb5fca801dfe8a599fc6b3fe5","url":"tw_stocks/2002.json"},{"revision":"b012da50e49b445af8fd89df7d7bf4c4","url":"tw_stocks/2006.json"},{"revision":"0a86d1f9755c2f96d631c50178bbc9bc","url":"tw_stocks/2007.json"},{"revision":"c26b1c5b71d7f03fd346ba221a379cf4","url":"tw_stocks/2008.json"},{"revision":"78b4c53f0d4c61e647409988b8ec07e9","url":"tw_stocks/2009.json"},{"revision":"88b5610118966efaf58441f09c58f7fe","url":"tw_stocks/2010.json"},{"revision":"be54e83c1b533736de870d71b457a918","url":"tw_stocks/2012.json"},{"revision":"f94827c5cb2be667769c5f9ff3ce5c4c","url":"tw_stocks/2013.json"},{"revision":"deecd1d59110d9ded5c1db784ebfee29","url":"tw_stocks/2014.json"},{"revision":"b3dd809d2ab4f845214070a0d97060bf","url":"tw_stocks/2015.json"},{"revision":"5b77e352473944dcf2d7cf63369bb584","url":"tw_stocks/2017.json"},{"revision":"a27d4f8fbeee87694c82337092af4a4b","url":"tw_stocks/2020.json"},{"revision":"a2be8b598fb123ec60a87f17d1c2aeb3","url":"tw_stocks/2022.json"},{"revision":"56daa1d605acb96a53c7984b8a5c43fa","url":"tw_stocks/2023.json"},{"revision":"d61da549e9999cfe36b78bb67b76db91","url":"tw_stocks/2024.json"},{"revision":"d8e9117022a6f71fe202a41908c78d8d","url":"tw_stocks/2025.json"},{"revision":"a844d2d694c72446c1c45ae746ee2419","url":"tw_stocks/2027.json"},{"revision":"8b837d493bb113c607df51d3831f0cda","url":"tw_stocks/2028.json"},{"revision":"7f134dca50b7170a519fe357f379a0d6","url":"tw_stocks/2029.json"},{"revision":"7ac18294ace573e1fae7d9afd76df320","url":"tw_stocks/2030.json"},{"revision":"94f5a79696f3a622abd2add0f3baf52b","url":"tw_stocks/2031.json"},{"revision":"208549ba7a15a8434edaf278433128a6","url":"tw_stocks/2032.json"},{"revision":"fa5327dad4119d9fa4b4a355890f540b","url":"tw_stocks/2033.json"},{"revision":"d79eea1e1219249b1a7c8ed9fb203d95","url":"tw_stocks/2034.json"},{"revision":"37f6f0958739405384c98437c3913ae4","url":"tw_stocks/2038.json"},{"revision":"161c3f6f487e91902fa8ba25a279ef05","url":"tw_stocks/2049.json"},{"revision":"bb6203ba56665bec9013edba01b045dd","url":"tw_stocks/2059.json"},{"revision":"11e710924694129636ec1feba8350e98","url":"tw_stocks/2062.json"},{"revision":"7d2c118712f3260fe865931536e16216","url":"tw_stocks/2069.json"},{"revision":"f67335e5ccf07392a1e8a3d4c48413ef","url":"tw_stocks/2101.json"},{"revision":"e23810a918d0bf0f34c38f67cb543f27","url":"tw_stocks/2102.json"},{"revision":"cc15578bde4858b5f5e61daae25ac2e8","url":"tw_stocks/2103.json"},{"revision":"b09c737005872488e7f0a4cda58c2d33","url":"tw_stocks/2104.json"},{"revision":"17f880d00f4873c77bf07857d443cb88","url":"tw_stocks/2105.json"},{"revision":"e8f548f03451886d7f7d4a5b4ae0e274","url":"tw_stocks/2106.json"},{"revision":"df89e51807ac0954a5c888c175e77e1d","url":"tw_stocks/2107.json"},{"revision":"28fc525bfe67466edd47455a8e5f57ba","url":"tw_stocks/2108.json"},{"revision":"1852c011fd61797b7d969ca9d0d1a448","url":"tw_stocks/2109.json"},{"revision":"57d55cc03c5d4f49106a8bee5caff7fc","url":"tw_stocks/2114.json"},{"revision":"d0a7080ddf9c059878fc9b7201c5c82a","url":"tw_stocks/2115.json"},{"revision":"85618257c202246753b24fcd1128d3b6","url":"tw_stocks/2201.json"},{"revision":"211b5f8892b80c67cd1e27d242a61bf0","url":"tw_stocks/2204.json"},{"revision":"8f6d8e3b599b57973add46a800107410","url":"tw_stocks/2206.json"},{"revision":"d1dd4e36c80d784d38b8b9eab47f0c44","url":"tw_stocks/2207.json"},{"revision":"429855b438f6a12c3c0560347583533b","url":"tw_stocks/2208.json"},{"revision":"f3b63c68e0c11af62e56474abef84a9a","url":"tw_stocks/2211.json"},{"revision":"31b48a7b0ecb97cf562d8f12398cb4a5","url":"tw_stocks/2227.json"},{"revision":"847a92147cae7b04f7be492991845ae0","url":"tw_stocks/2228.json"},{"revision":"7fc17ce4dc47c111fb656fc95f2d1f90","url":"tw_stocks/2231.json"},{"revision":"c51a8ad46774949e951a884820198670","url":"tw_stocks/2233.json"},{"revision":"06cb3f6114778577351dfa835b03a48b","url":"tw_stocks/2236.json"},{"revision":"2111b74e216d08eb17c365f488358204","url":"tw_stocks/2239.json"},{"revision":"b004a1686db5312de222c9c9e2169d03","url":"tw_stocks/2241.json"},{"revision":"94cdb6988d56701bb5f94e27ad4d40cb","url":"tw_stocks/2243.json"},{"revision":"148431ebbb095e1a822678cd757f551e","url":"tw_stocks/2247.json"},{"revision":"d745b58ede950c94f211e366eff04f84","url":"tw_stocks/2248.json"},{"revision":"09a594e01bcf206468c9c3a9801a5b6a","url":"tw_stocks/2250.json"},{"revision":"a8a33a95119589c6414e2e73135ba28c","url":"tw_stocks/2301.json"},{"revision":"71ec92023ec269a4a9ec133ead680a70","url":"tw_stocks/2302.json"},{"revision":"8b3e3896a7169d9ffd977ea26f8a0e16","url":"tw_stocks/2303.json"},{"revision":"904c9dd9513121f7e5cecf3f8df0f2e2","url":"tw_stocks/2305.json"},{"revision":"1c9cd42f1917ee5513f0ed92cabd5831","url":"tw_stocks/2308.json"},{"revision":"483653dd6a5808cb9ca3d326d729d97e","url":"tw_stocks/2312.json"},{"revision":"f3066708318d8995471c9d70c0817411","url":"tw_stocks/2313.json"},{"revision":"f7bdb85a32de9ad35e500fb6c671a1e5","url":"tw_stocks/2314.json"},{"revision":"379c85f20519b58dc784a686d062a3be","url":"tw_stocks/2316.json"},{"revision":"72e05d4c7e6bbd32b56edfa6daf4de81","url":"tw_stocks/2317.json"},{"revision":"6f764b5a25c553c0c273712f19cbdda3","url":"tw_stocks/2321.json"},{"revision":"1b674ddd66538546fb62f44fdc752a91","url":"tw_stocks/2323.json"},{"revision":"9a992e080a5a6acb4ba5c7e2ec6007f2","url":"tw_stocks/2324.json"},{"revision":"95d2ef775d4049b8a600151f27100ead","url":"tw_stocks/2327.json"},{"revision":"efe6487646357cf93ee5d1abe3eccdab","url":"tw_stocks/2328.json"},{"revision":"26e24f2bce0279d13c01a2aec6ffd5c2","url":"tw_stocks/2329.json"},{"revision":"d1eeef85603cc77cdb3c9861d77453df","url":"tw_stocks/2330.json"},{"revision":"b66e1d4f5234e8c2427c1b06b3d0643c","url":"tw_stocks/2331.json"},{"revision":"0aaea8f0a566d28d62ec4559a013539d","url":"tw_stocks/2332.json"},{"revision":"09d523a5c4f8e55e80d0c9c5a3bfd957","url":"tw_stocks/2337.json"},{"revision":"77c4938fad58b588ab8a41c6ee72f79b","url":"tw_stocks/2338.json"},{"revision":"1bacc7855d100128544e1634a46d6bce","url":"tw_stocks/2340.json"},{"revision":"2289361a982bd5ad48079e59b2fec87e","url":"tw_stocks/2342.json"},{"revision":"554c08a620d8ad089dd77f213c1cd038","url":"tw_stocks/2344.json"},{"revision":"7517e36006299aa3c12e55f13fcf5160","url":"tw_stocks/2345.json"},{"revision":"12cbf060adb09460f6632776347d957a","url":"tw_stocks/2347.json"},{"revision":"f2e18486d200126682a7118d9a98f8d6","url":"tw_stocks/2348.json"},{"revision":"71c0761afbfe773625df4363287dfcb5","url":"tw_stocks/2349.json"},{"revision":"6fd126974e06b5fe92cf06779718a6e7","url":"tw_stocks/2351.json"},{"revision":"7fe006905583f68eb1b6cc25e58149a4","url":"tw_stocks/2352.json"},{"revision":"9d3bb9ca65fd9701cd92da3df45cf9ab","url":"tw_stocks/2353.json"},{"revision":"d6f08d21dd618f728039c97b7b9f5d00","url":"tw_stocks/2354.json"},{"revision":"9a097606d3fba6ea5141c86c8f6eccb3","url":"tw_stocks/2355.json"},{"revision":"51a465c2f3b31f8941b864eec8841ebb","url":"tw_stocks/2356.json"},{"revision":"23a0558b8c2255bfe0612fa67f3410fc","url":"tw_stocks/2357.json"},{"revision":"01f8b3944236e681507e745f255d0c26","url":"tw_stocks/2359.json"},{"revision":"a589eaaecb167b036e42549d6eb5f9d5","url":"tw_stocks/2360.json"},{"revision":"803a6cb67bcf3f3c7dcc768c2a19e987","url":"tw_stocks/2362.json"},{"revision":"fbe8b86ce2e91205f7818a3f7f3a6a36","url":"tw_stocks/2363.json"},{"revision":"7831d6dd0817f5660d775e07b563d02a","url":"tw_stocks/2364.json"},{"revision":"9ceb7a22f172edcd876603e532d4c8d4","url":"tw_stocks/2365.json"},{"revision":"bcd9aff0efe5896e467dd90d069c647b","url":"tw_stocks/2367.json"},{"revision":"533194bc12805cabc31a25b5919f235a","url":"tw_stocks/2368.json"},{"revision":"b383952cbb168b9377790756a4b4d2b9","url":"tw_stocks/2369.json"},{"revision":"22b6ed9d7d3cfc4711f7a23235486d19","url":"tw_stocks/2371.json"},{"revision":"10ffe778e116f1d5f36ee0313a1b092f","url":"tw_stocks/2373.json"},{"revision":"a933149463c900e0c370fe47a34ba2eb","url":"tw_stocks/2374.json"},{"revision":"17b4282203c504b885b300a1629a9ccb","url":"tw_stocks/2375.json"},{"revision":"f5628fc614ff995c12e8f2dcd5035bee","url":"tw_stocks/2376.json"},{"revision":"cfc006ba15d6e1836db2f8fad277765a","url":"tw_stocks/2377.json"},{"revision":"00cfa83e54a0bc68245082908c5b77b9","url":"tw_stocks/2379.json"},{"revision":"a032599fb0cf5525199d2a6fb689aac7","url":"tw_stocks/2380.json"},{"revision":"70180c6c5ef0f9756aa7703f51dbcfe4","url":"tw_stocks/2382.json"},{"revision":"eea19187554068a700754704bf55ae05","url":"tw_stocks/2383.json"},{"revision":"36eaf4af6df4e3ff41b2ec46707f5766","url":"tw_stocks/2385.json"},{"revision":"1f40665337dfbd6d6a2641a4dc0ef164","url":"tw_stocks/2387.json"},{"revision":"160777b4434c9f49464f17fceaafbffc","url":"tw_stocks/2388.json"},{"revision":"5b67bd87b52056ad7bdd5977d091e89b","url":"tw_stocks/2390.json"},{"revision":"bb323fefabfcc6f8794d5dd13d0299fb","url":"tw_stocks/2392.json"},{"revision":"cfaaee111f8ca7bb7e55db7613e93abd","url":"tw_stocks/2393.json"},{"revision":"21bded5a3f70dc40d23ee54299f66146","url":"tw_stocks/2395.json"},{"revision":"163ceef16e0c65276779e8dda40a868d","url":"tw_stocks/2397.json"},{"revision":"915a9cbdf5907304dc95e313931f3a60","url":"tw_stocks/2399.json"},{"revision":"55030e3b48dd2dfba6c721362dcdb90d","url":"tw_stocks/2401.json"},{"revision":"9f8e7e3dbb6c0fe6eeb45748170081a2","url":"tw_stocks/2402.json"},{"revision":"16aca57ea776a74c30e338f0d0914821","url":"tw_stocks/2404.json"},{"revision":"84bc317ffa933420cec17ff1c37bd6c1","url":"tw_stocks/2405.json"},{"revision":"5d7ccd7a1a6d33a1a9d8cd0cdd50beff","url":"tw_stocks/2406.json"},{"revision":"7e06d63e1af683fc00247037a5d8aa01","url":"tw_stocks/2408.json"},{"revision":"7a5497e56269500bb2802036d963f037","url":"tw_stocks/2409.json"},{"revision":"61d650fbfa6d7b8c6a1a4620a9e6e4b0","url":"tw_stocks/2412.json"},{"revision":"7ed16a3d4a0b02f8a572bafdca652166","url":"tw_stocks/2413.json"},{"revision":"22faedaed3c7ed57654eb5afd050792e","url":"tw_stocks/2414.json"},{"revision":"9909cb34ca66db227b14e26d19fed0d6","url":"tw_stocks/2415.json"},{"revision":"8fbe2751228702b653821e64af62e085","url":"tw_stocks/2417.json"},{"revision":"502565313adf05544f6ed6f1fabb233e","url":"tw_stocks/2419.json"},{"revision":"3c8ddc8f27b0d56f69be78d2c1966981","url":"tw_stocks/2420.json"},{"revision":"fe631ac09638330bf39ed1553661648e","url":"tw_stocks/2421.json"},{"revision":"94a08c5c41580efc37e483c75df244ad","url":"tw_stocks/2423.json"},{"revision":"b32295ce1c5a9a93300b8eb2f42b5964","url":"tw_stocks/2424.json"},{"revision":"39198a4544d3551d3599fe65a454e3e6","url":"tw_stocks/2425.json"},{"revision":"a49e005a18da828f5fb4c57fca982e55","url":"tw_stocks/2426.json"},{"revision":"0570938777a85d00efd8ecb538579f23","url":"tw_stocks/2427.json"},{"revision":"28352cd39282c5de14c7476cd0d57c65","url":"tw_stocks/2428.json"},{"revision":"aa233e125642ae5c32f0fe2909c83023","url":"tw_stocks/2429.json"},{"revision":"c34b47e88c011afe70fc6c0d9da5152f","url":"tw_stocks/2430.json"},{"revision":"3bbf2d4d5a9541162bfe32889317de51","url":"tw_stocks/2431.json"},{"revision":"35ce00745af4c5ed11d2b47239757dcc","url":"tw_stocks/2433.json"},{"revision":"2541eff12d96bb01432d98167b7c3e20","url":"tw_stocks/2434.json"},{"revision":"fda0a72f6ce59be9e75f16759980cc5b","url":"tw_stocks/2436.json"},{"revision":"d28367bad0bd8051a3a316b97b8bf1d4","url":"tw_stocks/2438.json"},{"revision":"f23f2d476cde33a5c9081f781f1496b8","url":"tw_stocks/2439.json"},{"revision":"403c38655ccefa25ea33941114bf2b41","url":"tw_stocks/2440.json"},{"revision":"c07cd04e156dda1a6474d7c1c2f7caef","url":"tw_stocks/2441.json"},{"revision":"1567c9b9f0800d87c1cae11a92560341","url":"tw_stocks/2442.json"},{"revision":"8a2016836a97f5e97b23fd9decb5a34d","url":"tw_stocks/2444.json"},{"revision":"4135edfd70f27a21f43571675698fe46","url":"tw_stocks/2449.json"},{"revision":"2f87cc3b51bda0e98e2447efd0ba561c","url":"tw_stocks/2450.json"},{"revision":"e29f730b216171d20ef133c97bef744f","url":"tw_stocks/2451.json"},{"revision":"8efa6d0227838c69274ff17da3d7c8a8","url":"tw_stocks/2453.json"},{"revision":"e374f8b11d139126405f18fa026d5ec8","url":"tw_stocks/2454.json"},{"revision":"55b8b293a562ba6be5f82e761849babe","url":"tw_stocks/2455.json"},{"revision":"720016ec75a133846ea11aeb93bbaf9e","url":"tw_stocks/2457.json"},{"revision":"8027066eccf288b6d54ef06aca942ba9","url":"tw_stocks/2458.json"},{"revision":"789aa0dc444f9363d0ef30fb89032ad0","url":"tw_stocks/2459.json"},{"revision":"076824a5ba9690bdfd4aba145a3fcfea","url":"tw_stocks/2460.json"},{"revision":"01365d66422cc9b89e0db2366976e299","url":"tw_stocks/2461.json"},{"revision":"3ab06b26ba9664548a67586922486f0e","url":"tw_stocks/2462.json"},{"revision":"0d50901dc8502330436383e950e8f96e","url":"tw_stocks/2464.json"},{"revision":"e0e16e52d8786dfc8a49b588b40faaa3","url":"tw_stocks/2465.json"},{"revision":"485b28be99e0b6527f2e1fd112aaa051","url":"tw_stocks/2466.json"},{"revision":"b0e83dc0657df97ac7e8687054dc3313","url":"tw_stocks/2467.json"},{"revision":"e92a71b8e9c32a38b81a754e27f4670d","url":"tw_stocks/2468.json"},{"revision":"471b76ba3752ac1d657207e4dae798a0","url":"tw_stocks/2471.json"},{"revision":"921615dc75a48c4cde1374df267cce39","url":"tw_stocks/2472.json"},{"revision":"24a636efa290cbb074e717740dfc5dd3","url":"tw_stocks/2474.json"},{"revision":"4b56341b06b011d2df7325c65a7d2563","url":"tw_stocks/2476.json"},{"revision":"414629c5b3f9187bc6e13238ff36a010","url":"tw_stocks/2477.json"},{"revision":"1e367661e14329aef70a2a59d11b6aa8","url":"tw_stocks/2478.json"},{"revision":"27053941911ce794739ba6e5e9b5b4b1","url":"tw_stocks/2480.json"},{"revision":"72c1e85fad9e0956f556b8d151963b7a","url":"tw_stocks/2481.json"},{"revision":"3b3cac0d20f03d1f9bd0a8ba6ea67dcc","url":"tw_stocks/2482.json"},{"revision":"22dfb549bb5d5b17ee36312b6dca1228","url":"tw_stocks/2483.json"},{"revision":"834a6c2477523e23ea145ee32115b761","url":"tw_stocks/2484.json"},{"revision":"3fb38aafd322c1d8735cfc5e48fb4626","url":"tw_stocks/2485.json"},{"revision":"e075b843b305771c7f2d218711bbe720","url":"tw_stocks/2486.json"},{"revision":"b584bdc8e7a60ab98c82d926bef94272","url":"tw_stocks/2488.json"},{"revision":"529c42b7f89f7a04c816bf5edf701264","url":"tw_stocks/2489.json"},{"revision":"cbee329d66fa009201abf63a1b04f732","url":"tw_stocks/2491.json"},{"revision":"51b7f86a9deae731f60b5129a2f46a97","url":"tw_stocks/2492.json"},{"revision":"d22d4f4349e169ab131f42d594539f8e","url":"tw_stocks/2493.json"},{"revision":"b91e79d02adc06f4d050fd329e14bb49","url":"tw_stocks/2495.json"},{"revision":"77fca114983f31491190d547661826c2","url":"tw_stocks/2496.json"},{"revision":"7cb239d9c8cca50ae676436e14544bda","url":"tw_stocks/2497.json"},{"revision":"8da4116805d2b53d5ff123d504d9cf15","url":"tw_stocks/2498.json"},{"revision":"2d96a38fcfe3e2d431545d31d22ca09a","url":"tw_stocks/2501.json"},{"revision":"92ac6798c4d5416e7788c056fed58007","url":"tw_stocks/2504.json"},{"revision":"8148db47694a5081153a0f8e1e4e1c8c","url":"tw_stocks/2505.json"},{"revision":"7800f19b4ed6c035fa8fe141b9940d55","url":"tw_stocks/2506.json"},{"revision":"44c5169521eb1449fcfddbe3e5d299a6","url":"tw_stocks/2509.json"},{"revision":"08bf470aee0af7399cef6461b70bb119","url":"tw_stocks/2511.json"},{"revision":"f12e3d67e128d749a844b93fdeea6a41","url":"tw_stocks/2514.json"},{"revision":"b0867b8c402896e97df0f9d11dcfedd9","url":"tw_stocks/2515.json"},{"revision":"5d9a8f19bf5c08ace506239392566109","url":"tw_stocks/2516.json"},{"revision":"8c3b3e18a122d85a9269d60214b0ce8a","url":"tw_stocks/2520.json"},{"revision":"cd0987bc0c6e78631d347c79827f30c5","url":"tw_stocks/2524.json"},{"revision":"1aef0718f90ac2d1219a3742ac6ed273","url":"tw_stocks/2527.json"},{"revision":"033c27023ddd2e1a93fb676599fb7837","url":"tw_stocks/2528.json"},{"revision":"643c509cd5155f6363fe3ebeb9932ab0","url":"tw_stocks/2530.json"},{"revision":"c8329b9b686a232edff73dd0907d7d4d","url":"tw_stocks/2534.json"},{"revision":"ed7c6b5d05499c172bb589be4d743b82","url":"tw_stocks/2535.json"},{"revision":"fb070d9bd1d3b48a0a0d204f96a90360","url":"tw_stocks/2536.json"},{"revision":"b777af9f45b09b35d8c78cc1a6d90942","url":"tw_stocks/2537.json"},{"revision":"eeb816b341d84b6040185238b5ca199f","url":"tw_stocks/2538.json"},{"revision":"79394135174c0748e8f48cf0a1aa15f4","url":"tw_stocks/2539.json"},{"revision":"e7b38dae321d0ebfcb1fbdd706ef1c5a","url":"tw_stocks/2540.json"},{"revision":"a6c3c2ca5d055bf06089edc4b9426ec0","url":"tw_stocks/2542.json"},{"revision":"ece0c8d38b93133071dd69d130c3e68d","url":"tw_stocks/2543.json"},{"revision":"3e6b4ad274eb25ff07771c447735053c","url":"tw_stocks/2545.json"},{"revision":"fe67eeead517d130f3c49134e22b1089","url":"tw_stocks/2546.json"},{"revision":"53031f68132b4c485f239cd13ba72398","url":"tw_stocks/2547.json"},{"revision":"bc767336db36ec67ca2b854d192c5484","url":"tw_stocks/2548.json"},{"revision":"5b949da503b362fbdc6035d4a9fdf66c","url":"tw_stocks/2597.json"},{"revision":"5f0d8115b045d78cdba1d0dbc1ec4ec0","url":"tw_stocks/2601.json"},{"revision":"983cb90e64ca5223760011df2cc1a6a0","url":"tw_stocks/2603.json"},{"revision":"7527f784a5fdf777f1bb365a7df20d25","url":"tw_stocks/2605.json"},{"revision":"17f524ea313cd3024266aa9fe332fde6","url":"tw_stocks/2606.json"},{"revision":"69eecd747c9b250f77052cb887bbe4a6","url":"tw_stocks/2607.json"},{"revision":"5f215d783923ce114f1a85feb5b724f8","url":"tw_stocks/2608.json"},{"revision":"72e4a02224bb9a5c4aeb707d2bd28073","url":"tw_stocks/2609.json"},{"revision":"3a3ac1fd9cfe6cec872b280fb9e09498","url":"tw_stocks/2610.json"},{"revision":"c33babb39b6a44249fe63dc4bbba0820","url":"tw_stocks/2611.json"},{"revision":"03e2dd8ae16796150f47f794a014647e","url":"tw_stocks/2612.json"},{"revision":"12b3a1a447227d2e73899f566a327b5f","url":"tw_stocks/2613.json"},{"revision":"bf0942e5f03816093867bdff440bb535","url":"tw_stocks/2614.json"},{"revision":"5bad49541dddc85107b3b2098768d5c4","url":"tw_stocks/2615.json"},{"revision":"2213b7d4aae3b41b03163b618e54a307","url":"tw_stocks/2616.json"},{"revision":"ce313ce4ae33c470a28f23280922c8c0","url":"tw_stocks/2617.json"},{"revision":"dbcddaa12979bca4286740164fd9f5df","url":"tw_stocks/2618.json"},{"revision":"aab0dfe8a88b333bb896ed41a28f0fcd","url":"tw_stocks/2630.json"},{"revision":"d10450bde2c1ade83c9358269d4f2fb8","url":"tw_stocks/2633.json"},{"revision":"6883a8bbc47a9236e9dd08d49165a32f","url":"tw_stocks/2634.json"},{"revision":"e01b6aae163feb3211f4600059630790","url":"tw_stocks/2636.json"},{"revision":"e2343fe27136e2013a6a911f3c8bf847","url":"tw_stocks/2637.json"},{"revision":"81736d2d6ede9ea5c94e77bb9891937e","url":"tw_stocks/2642.json"},{"revision":"dd6fe33b63a3bbe84490a50caab7d8ee","url":"tw_stocks/2645.json"},{"revision":"53a7071e64792ffef9c27ab8ab7cdfe6","url":"tw_stocks/2646.json"},{"revision":"974803656191c2d3c2acfe3bfeec912a","url":"tw_stocks/2701.json"},{"revision":"d4a85cef66fe11cd4954786015ec5c01","url":"tw_stocks/2702.json"},{"revision":"784e5db2423cd3a00895883ea4989514","url":"tw_stocks/2704.json"},{"revision":"9c020a08a238203e98728947aa8d2059","url":"tw_stocks/2705.json"},{"revision":"33a28d2109355254c307365dc7cd34cc","url":"tw_stocks/2706.json"},{"revision":"f16e9f431af64c3a4916a7069f9e6e68","url":"tw_stocks/2707.json"},{"revision":"8a5d0e08e48cb241c12150976a42bf37","url":"tw_stocks/2712.json"},{"revision":"02eb837222fcc791e933fb94ed5c3bab","url":"tw_stocks/2722.json"},{"revision":"4b1a1abdd387ad8090ec47c92b24d402","url":"tw_stocks/2723.json"},{"revision":"741e320c4a463e8da51da91a1df96b38","url":"tw_stocks/2727.json"},{"revision":"78ee3927eb2b3f0e847c3cfe11355a20","url":"tw_stocks/2731.json"},{"revision":"550f749f7e4412bd0aa02fd009272845","url":"tw_stocks/2739.json"},{"revision":"198bdbb25d08faec85d77535f3bc1158","url":"tw_stocks/2748.json"},{"revision":"6d7177628ead1e6d05f068670700fd0e","url":"tw_stocks/2753.json"},{"revision":"ee9ff8cbe9fbeae402f531a480c9b959","url":"tw_stocks/2762.json"},{"revision":"f3168b49827e13da7a3c7b108495959b","url":"tw_stocks/2801.json"},{"revision":"7f0bb3e4a764af2502cc95d8fc4bf4f7","url":"tw_stocks/2812.json"},{"revision":"18ad4370dc3f5dee1fbbbf4cc37c6b7d","url":"tw_stocks/2816.json"},{"revision":"ce01b5d3e79f0d68da32c336bb1f7af5","url":"tw_stocks/2820.json"},{"revision":"040ec55ad96f5554b2156d3abacdef84","url":"tw_stocks/2832.json"},{"revision":"d4bc3649e51d74f07166d2985e2cda9b","url":"tw_stocks/2834.json"},{"revision":"eac167e40f6d601496d448207bd9cae7","url":"tw_stocks/2836.json"},{"revision":"d9499aeeaefa04ae0586dacd7314222d","url":"tw_stocks/2838.json"},{"revision":"d4f2db8154537c7576e0ce623d14a810","url":"tw_stocks/2845.json"},{"revision":"e20359fd6b0aca41cd95962a41c9f61d","url":"tw_stocks/2849.json"},{"revision":"0d9e5728e0591c21c581023bccee19a3","url":"tw_stocks/2850.json"},{"revision":"969cfa0577ffff56d2d794e3a8e83497","url":"tw_stocks/2851.json"},{"revision":"a477c5efb35e34f22f4be9a5661a232a","url":"tw_stocks/2852.json"},{"revision":"3508cfb4a7716d8d5ed4ded419740cdf","url":"tw_stocks/2855.json"},{"revision":"c53b92d23688aeacfc8a89949827c9ba","url":"tw_stocks/2867.json"},{"revision":"1324e582e7319d393cbf326fcf4af02a","url":"tw_stocks/2880.json"},{"revision":"ac193e9c75456ae881d1d3ed1fb260a7","url":"tw_stocks/2881.json"},{"revision":"580234ba1e0fce61a3c2edae4901a549","url":"tw_stocks/2882.json"},{"revision":"bf57e0e2a5578b70f3c610ad5719d40a","url":"tw_stocks/2883.json"},{"revision":"43058b06e37210868c2a85491f6d5885","url":"tw_stocks/2884.json"},{"revision":"d5415a834f46d0eecc7e90ea45aab352","url":"tw_stocks/2885.json"},{"revision":"9d8b74d91fea5df4a5b7c41095259da9","url":"tw_stocks/2886.json"},{"revision":"b2c43b9589c4f4bd605df423807117a3","url":"tw_stocks/2887.json"},{"revision":"0911d6002fc65e20fe98a88dc4fea19d","url":"tw_stocks/2889.json"},{"revision":"6862ae7581c027e51f6710a816915a72","url":"tw_stocks/2890.json"},{"revision":"011f6a34cb99d6d1b0ff812fc95d2cce","url":"tw_stocks/2891.json"},{"revision":"94c64d4f7d4f1f59f6b0f58180d56141","url":"tw_stocks/2892.json"},{"revision":"a0bf6e93fb43357dfc742da77583b646","url":"tw_stocks/2897.json"},{"revision":"ae4751a50eec2270bdafd34731be4759","url":"tw_stocks/2901.json"},{"revision":"75b0f0094f29a0302fdd8fee3e2c4d49","url":"tw_stocks/2903.json"},{"revision":"0a38aef6e7d7a301ead9f20336780c59","url":"tw_stocks/2904.json"},{"revision":"ef766c83ecd74a81d72466f21d01595b","url":"tw_stocks/2905.json"},{"revision":"5a826d66a562faeedb59dbff690eea78","url":"tw_stocks/2906.json"},{"revision":"5afda3c2ef067d0158293df0d85c0384","url":"tw_stocks/2908.json"},{"revision":"297dcb590edc0c28c42f5a6f5210c000","url":"tw_stocks/2910.json"},{"revision":"8e5f820e5745c4c13cbca085dce8aca1","url":"tw_stocks/2911.json"},{"revision":"4f18d62d5e5e481c3c94b66328610f58","url":"tw_stocks/2912.json"},{"revision":"3a0bf21158e58006ea8aa5325c121c58","url":"tw_stocks/2913.json"},{"revision":"3f437d5c37f78a968a185490eacfb707","url":"tw_stocks/2915.json"},{"revision":"9f067426df65213850ed6b0e61546b20","url":"tw_stocks/2923.json"},{"revision":"33734fadcd183520c1d3f2a8a4f385b9","url":"tw_stocks/2929.json"},{"revision":"aafdffeed78702890968682811496c59","url":"tw_stocks/2939.json"},{"revision":"644333fb9aaff8968bf8badb606274f5","url":"tw_stocks/2945.json"},{"revision":"562a8eeafe63f27fcd402d4b84c835ec","url":"tw_stocks/3002.json"},{"revision":"97c7729fd5e9a9945d8a95f070336e8b","url":"tw_stocks/3003.json"},{"revision":"620bf88f63b57082be1cf556aff53209","url":"tw_stocks/3004.json"},{"revision":"d8a3a628e38ec563e6441d2de1154c93","url":"tw_stocks/3005.json"},{"revision":"a771bac0993f081b4c1dac4134cf5126","url":"tw_stocks/3006.json"},{"revision":"1fecade5ef8df69b4edc5ed5b56d9d72","url":"tw_stocks/3008.json"},{"revision":"edbab67d948f46f470e8557e0fe2d2f6","url":"tw_stocks/3010.json"},{"revision":"60a762de320703f8f8f1210c6101ebe3","url":"tw_stocks/3011.json"},{"revision":"3e10b9793cff902b98a69c238d772b42","url":"tw_stocks/3013.json"},{"revision":"63a591ed71d6a2331efb0f574bd5327b","url":"tw_stocks/3014.json"},{"revision":"8d65f8cbd655a06e9d13cb1b244d9433","url":"tw_stocks/3015.json"},{"revision":"45911d6169ed0f49fedeb3b073b5e1f9","url":"tw_stocks/3016.json"},{"revision":"5395835f2b0b8d68ef47a43147e46a1c","url":"tw_stocks/3017.json"},{"revision":"16045c520af5e1bbc000fe9c1c6a9dd8","url":"tw_stocks/3018.json"},{"revision":"f0e29c5a419592e4f2083c1e7f4fd458","url":"tw_stocks/3019.json"},{"revision":"45311387f4cd4133f750f30227ebc89d","url":"tw_stocks/3021.json"},{"revision":"a9cbe09f39709eed14398dd809832524","url":"tw_stocks/3022.json"},{"revision":"0cd49e4f0f8a55ee86469d31c749ac7c","url":"tw_stocks/3023.json"},{"revision":"a008b8da64f159350ef0997718fe200a","url":"tw_stocks/3024.json"},{"revision":"87357c69996e6b065f33e7016b26ac5c","url":"tw_stocks/3025.json"},{"revision":"5958df2bb4d8403ec2a22b517160a311","url":"tw_stocks/3026.json"},{"revision":"8fce6d964e461d81a631df971a8ebc21","url":"tw_stocks/3027.json"},{"revision":"b10ebaf7f1a0967553622622482b8528","url":"tw_stocks/3028.json"},{"revision":"ee31197a4048eedfe237ae7cf868d8ac","url":"tw_stocks/3029.json"},{"revision":"fc3a604e2603d034a27cf692357fb210","url":"tw_stocks/3030.json"},{"revision":"b7328c54b0caa3eb672ec13f5664fa71","url":"tw_stocks/3031.json"},{"revision":"3a1d79c44ee1ffa18d13291b6010b455","url":"tw_stocks/3032.json"},{"revision":"dacfe1e1f66874d017bf59226c305963","url":"tw_stocks/3033.json"},{"revision":"17e5500c4a373afeca16222f1d3e2449","url":"tw_stocks/3034.json"},{"revision":"8aeb426b0947f78cd339bd9a58c20851","url":"tw_stocks/3035.json"},{"revision":"49bf85fc300642a40373158eda1e71d5","url":"tw_stocks/3036.json"},{"revision":"6ec4a1730e43ba1286808407bafb086d","url":"tw_stocks/3037.json"},{"revision":"7bd55515a0169c0ea0a16a8cfc29651f","url":"tw_stocks/3038.json"},{"revision":"d46ba81911c352d5de3bc843d063530f","url":"tw_stocks/3040.json"},{"revision":"24957a0015210dfeae039c25a65193fb","url":"tw_stocks/3041.json"},{"revision":"9be20f713eed60ccafba6cf4a9e2df6d","url":"tw_stocks/3042.json"},{"revision":"e1e110d93d5d0c5bacedb036449aca18","url":"tw_stocks/3043.json"},{"revision":"2386b69469d3856f7c71550b867981e4","url":"tw_stocks/3044.json"},{"revision":"e717b937342105b478b4aa30f253809a","url":"tw_stocks/3045.json"},{"revision":"d36d8f78979aacc78e18c5b974392419","url":"tw_stocks/3046.json"},{"revision":"88f51765f81267076caa9f3fdcfde6dd","url":"tw_stocks/3047.json"},{"revision":"bc422b9666c75c731b9bde6d1bf0c431","url":"tw_stocks/3048.json"},{"revision":"fd8c71bfdf8f56fd01396c04a929ed0e","url":"tw_stocks/3049.json"},{"revision":"21bdefb488b3dd0adb6a90a309fef305","url":"tw_stocks/3050.json"},{"revision":"1adf7b1f03edec2c95730e7a7f84eb47","url":"tw_stocks/3051.json"},{"revision":"c18d09c0fa867eca48e13e970860ea50","url":"tw_stocks/3052.json"},{"revision":"295a1dac8507021bb9e4d58fb361ee61","url":"tw_stocks/3054.json"},{"revision":"91ddaf8a62c6c2d3617cd9c3c1faadee","url":"tw_stocks/3055.json"},{"revision":"85d9861ce005d8312ef27ba6cce62b57","url":"tw_stocks/3056.json"},{"revision":"72a58afaae677b61e933d050579ebcb4","url":"tw_stocks/3057.json"},{"revision":"31c308a85c7008de8ef0567a91903a5a","url":"tw_stocks/3058.json"},{"revision":"e4d64e1d236a360c8d0fb3c4b627545a","url":"tw_stocks/3059.json"},{"revision":"0c5591beccd40ac1fd365f04a8bf270d","url":"tw_stocks/3060.json"},{"revision":"f498d2f1ac660519104cf006b7693240","url":"tw_stocks/3062.json"},{"revision":"8ab276c4d9d8945b5bc4b20af2a8d7b8","url":"tw_stocks/3090.json"},{"revision":"be702d354e8e7599b4364983a3914f47","url":"tw_stocks/3092.json"},{"revision":"967b2cb97adf8f721d306584e3c1fbd8","url":"tw_stocks/3094.json"},{"revision":"a2c8b54ceee309f6b5801eb1238f7dce","url":"tw_stocks/3130.json"},{"revision":"e2604c3800d730dc218c116f814bbec0","url":"tw_stocks/3135.json"},{"revision":"07a89f4575b2c55f90d3614127267e32","url":"tw_stocks/3138.json"},{"revision":"6f39e1ceb57f2c53a35affc9dda78e21","url":"tw_stocks/3149.json"},{"revision":"334a6399bfb8638bc66cd4053cc79c30","url":"tw_stocks/3164.json"},{"revision":"bd5ec62420d9e82c8f8a67304c7afb13","url":"tw_stocks/3167.json"},{"revision":"87708763d338e48f03a7154d3c8fffa6","url":"tw_stocks/3168.json"},{"revision":"8a357b4984b5a27331d08e2069c9ba47","url":"tw_stocks/3189.json"},{"revision":"6c5fcd5f3a40a8cc4c02a65f413197d8","url":"tw_stocks/3209.json"},{"revision":"10616ec3b823a1f61f1215df9066ea45","url":"tw_stocks/3229.json"},{"revision":"a1e670b6491651c239c12a982062a91a","url":"tw_stocks/3231.json"},{"revision":"e7b4428a89c02445ab7a53260010fe68","url":"tw_stocks/3257.json"},{"revision":"acd8bda7339fe5ad22dcf035a8489a12","url":"tw_stocks/3266.json"},{"revision":"b78adf0d6e2ab1a30ec5f771157dc974","url":"tw_stocks/3296.json"},{"revision":"f3563b05a08efb05b7c5f70022886193","url":"tw_stocks/3305.json"},{"revision":"925a77f6d01eb3f62165d4d866e5d1ba","url":"tw_stocks/3308.json"},{"revision":"b0d463c4926339c6116b642bbd3b3d6f","url":"tw_stocks/3311.json"},{"revision":"d67ae7d667a7fa487ec23ed27ab48bf0","url":"tw_stocks/3312.json"},{"revision":"d9496ae47c2dbfc553d5601c7971218a","url":"tw_stocks/3321.json"},{"revision":"9c808bd619328663ce84196be886077b","url":"tw_stocks/3338.json"},{"revision":"b8d0ae32c0eaae19347ab5dc2fbf9796","url":"tw_stocks/3346.json"},{"revision":"5cadebc593384633078c4578efe2643f","url":"tw_stocks/3356.json"},{"revision":"8c931c86be0f399e8bc8cf80408ec5de","url":"tw_stocks/3376.json"},{"revision":"9f15e8be39ef96482e198642f0693478","url":"tw_stocks/3380.json"},{"revision":"4e30c83f5956caec68e6f9d3ce745bda","url":"tw_stocks/3406.json"},{"revision":"5a0da32a3a7d3b0d91ea8eb78473d596","url":"tw_stocks/3413.json"},{"revision":"1ac15aa9f5bc7cdbfcdaded1efee2bac","url":"tw_stocks/3416.json"},{"revision":"f59b1d23e6c85bd93ec65bdf2c9960be","url":"tw_stocks/3419.json"},{"revision":"7458a3fbf336806778a99199edcbfd49","url":"tw_stocks/3432.json"},{"revision":"8593075038d46158a9577faff192238d","url":"tw_stocks/3437.json"},{"revision":"40ee214f08e219da6b7ae37ecb9182bb","url":"tw_stocks/3443.json"},{"revision":"f9e4637af2c6cf99cfd3c5587227f13d","url":"tw_stocks/3447.json"},{"revision":"efaf503c8e4a3c6b11b43673db10a19e","url":"tw_stocks/3450.json"},{"revision":"56aa1ff19ae9e1f085142649a7617ea6","url":"tw_stocks/3454.json"},{"revision":"6e108dc2f978904d3915bcc0b91ad95c","url":"tw_stocks/3481.json"},{"revision":"9d29f0b7ee1e95fd76d64aa4d3195190","url":"tw_stocks/3494.json"},{"revision":"d612a6af37937edbb1fd142ae2aa8dee","url":"tw_stocks/3501.json"},{"revision":"92d690fcc7e27cef2cd95f99cccae131","url":"tw_stocks/3504.json"},{"revision":"1622bc4757689f8a39da02e2dcb0277b","url":"tw_stocks/3515.json"},{"revision":"a139fcaf67d05b57e6ceca65c7216995","url":"tw_stocks/3518.json"},{"revision":"05344f47804dcb9f6112b529ca0b9444","url":"tw_stocks/3528.json"},{"revision":"1a51ef360b337a8a1aa9afeafb0dbdd5","url":"tw_stocks/3530.json"},{"revision":"90a6bf7b900fd86426354364a63314e7","url":"tw_stocks/3532.json"},{"revision":"2028b725bd877ffc487448a1c25f8879","url":"tw_stocks/3533.json"},{"revision":"b01660da627fe0807d165758bd69cdb2","url":"tw_stocks/3535.json"},{"revision":"924035544ece85da938bf80f104bebcc","url":"tw_stocks/3543.json"},{"revision":"512eb97fbc93bbcbd9acb44c85c432c1","url":"tw_stocks/3545.json"},{"revision":"221ef0bdeb1fa56b895edc9e9dd1b3fa","url":"tw_stocks/3550.json"},{"revision":"2b49943b6c1babbc44b0b2c4270cafd9","url":"tw_stocks/3557.json"},{"revision":"72ffa9996ae6beeb34ac36e57aff0130","url":"tw_stocks/3563.json"},{"revision":"4295b95fdd1a879ba3c779533e1ef6ae","url":"tw_stocks/3576.json"},{"revision":"8d04edad41388fa4122e63aebf4b8b9b","url":"tw_stocks/3583.json"},{"revision":"2c239d3be1ecb5dc923eb1acfaaf2663","url":"tw_stocks/3588.json"},{"revision":"160a2626c9ba18915dcbf3ae37d42d60","url":"tw_stocks/3591.json"},{"revision":"7695e076289d258d8a57e30f864dd8b0","url":"tw_stocks/3592.json"},{"revision":"8aeac82af216ca2c65a287a96b5118f8","url":"tw_stocks/3593.json"},{"revision":"8a8a6019bf60a560a54eee68b491ea39","url":"tw_stocks/3596.json"},{"revision":"bc3cb4d76dd22dc22db68c650a751f85","url":"tw_stocks/3605.json"},{"revision":"768b61d24bb58973e8e36fea4860c59c","url":"tw_stocks/3607.json"},{"revision":"d901f527673e8dc7019d97e19216391c","url":"tw_stocks/3617.json"},{"revision":"cdc0fa72c5303ee2a8036cc2f99c7c42","url":"tw_stocks/3622.json"},{"revision":"07c7b1ba3fe7dd45e8e7ddb1401adcb0","url":"tw_stocks/3645.json"},{"revision":"198a2f769edc98ffb553f6a91361dd8a","url":"tw_stocks/3652.json"},{"revision":"df6d00d8368ed439edb7d6b0d80f125c","url":"tw_stocks/3653.json"},{"revision":"9bbae3e7077791e45207f8151049c6f4","url":"tw_stocks/3661.json"},{"revision":"f597e9aafa9ad51f7ccc825a6f22cf35","url":"tw_stocks/3665.json"},{"revision":"928cdb2c0b59cb60bd65601b13979652","url":"tw_stocks/3669.json"},{"revision":"23e1a434cfc3678513236f7d1b54fa74","url":"tw_stocks/3673.json"},{"revision":"7bf06f8a1e75d452289b6fae322e66a6","url":"tw_stocks/3679.json"},{"revision":"14e37cc0995a9bc692b9fbcbfb05eda0","url":"tw_stocks/3686.json"},{"revision":"510a2d5bfd2b8e35f1954f048d297bf7","url":"tw_stocks/3694.json"},{"revision":"f86fdae021deb484a170d2c6deca0871","url":"tw_stocks/3701.json"},{"revision":"feaa95633d78dd4d30457b29b571dd80","url":"tw_stocks/3702.json"},{"revision":"864466901a6cc058964d89f1f0fb7806","url":"tw_stocks/3703.json"},{"revision":"b5f199bac8ef4d70ded42094703aaf9e","url":"tw_stocks/3704.json"},{"revision":"4b14baa0b7f3ab5279968fe01fa63706","url":"tw_stocks/3705.json"},{"revision":"ba3d6e241d1b324cf8674ead35546c5b","url":"tw_stocks/3706.json"},{"revision":"67a72bda38ecfc8c23389d028946f299","url":"tw_stocks/3708.json"},{"revision":"c8452b4ebfdbc82ed1c40146145e1bc3","url":"tw_stocks/3711.json"},{"revision":"bea53a5d180c5f1ba7c1180f9646e168","url":"tw_stocks/3712.json"},{"revision":"afe67777d72396e219eb548f2b278e70","url":"tw_stocks/3714.json"},{"revision":"89b43e3200863c47523bb1d46bb414f1","url":"tw_stocks/3715.json"},{"revision":"3e99937fc278ec570ef2fa43dd4ff8f6","url":"tw_stocks/3716.json"},{"revision":"47d8d119c444b410aec73e18e0dcab9b","url":"tw_stocks/3717.json"},{"revision":"e1f1dad23f6731032f25d54ff0532e1e","url":"tw_stocks/4104.json"},{"revision":"21a8b66545d1c651bf5cb091af62cd1d","url":"tw_stocks/4106.json"},{"revision":"caddca55b65ae46d6bf3e0ec2ef4ad79","url":"tw_stocks/4108.json"},{"revision":"b077ee66076e9e7f2a9dcef04d72a306","url":"tw_stocks/4119.json"},{"revision":"c9e59488eb07084024502d84fa579c0a","url":"tw_stocks/4133.json"},{"revision":"8aae3768624873b01203576c2dfe8a18","url":"tw_stocks/4137.json"},{"revision":"49d594b0741e050126d2689ebc2d32eb","url":"tw_stocks/4142.json"},{"revision":"28d840c79a18f6e3d4598edc8e80b92d","url":"tw_stocks/4148.json"},{"revision":"708c593fd911bf65b2013663ddbcc11b","url":"tw_stocks/4155.json"},{"revision":"3b6aa765ee0669def6756667415d3a0d","url":"tw_stocks/4164.json"},{"revision":"043b6acd24c6e02e042de6371d65559f","url":"tw_stocks/4190.json"},{"revision":"8236cc69d0105c20e65759a35cb3feb2","url":"tw_stocks/4306.json"},{"revision":"3301d18cd1b3bba20dc740e55164fb3a","url":"tw_stocks/4414.json"},{"revision":"4e5cb8657142c74ff9df2a277f4b2cb6","url":"tw_stocks/4426.json"},{"revision":"ca812bc087a172dcab5b923e60156c47","url":"tw_stocks/4438.json"},{"revision":"06cf5ceb7d4183294e5238603da9b236","url":"tw_stocks/4439.json"},{"revision":"09206d4d43bcec51540cd405ba645b8b","url":"tw_stocks/4440.json"},{"revision":"01b70fd08250e7e0614808f51085aade","url":"tw_stocks/4441.json"},{"revision":"af42ab8bcdd755b9488f40e6d9163455","url":"tw_stocks/4526.json"},{"revision":"4660bc41c554386b7092769797c5730c","url":"tw_stocks/4532.json"},{"revision":"219e6a40a0cd1976d052c4cc2c7100ab","url":"tw_stocks/4536.json"},{"revision":"6bccfe035370eab7682b3d3bd75e7ac7","url":"tw_stocks/4540.json"},{"revision":"5607d9e320da9c0347b9b55382c87581","url":"tw_stocks/4545.json"},{"revision":"2ca7bb2980f340e87995040bb8242847","url":"tw_stocks/4551.json"},{"revision":"43d61873a87e90ab82c7e5183053dfde","url":"tw_stocks/4552.json"},{"revision":"d14a1b08151fa416cfbd7c749a05212d","url":"tw_stocks/4555.json"},{"revision":"7dc2176058c601d25292e74cc910eccf","url":"tw_stocks/4557.json"},{"revision":"23be06cf963651d72ee4f6148a0ac45e","url":"tw_stocks/4560.json"},{"revision":"fef313462db45b9a1bee8d1c5acc238b","url":"tw_stocks/4562.json"},{"revision":"e77baffabfec7335e200cb52f3eee45e","url":"tw_stocks/4564.json"},{"revision":"a0b1887164da4ffa3ea12bf0ee54e67a","url":"tw_stocks/4566.json"},{"revision":"9938646ffbf9f48f50f9203c0834d534","url":"tw_stocks/4569.json"},{"revision":"131f31dd86c7bb19501ff05e9eeae7b8","url":"tw_stocks/4571.json"},{"revision":"fe382d90d2b7ce99b4e238a21f3ef423","url":"tw_stocks/4572.json"},{"revision":"4735e7f3d33558801150d8f441fa9b20","url":"tw_stocks/4576.json"},{"revision":"dfcf05a47f2af52977bf60d6411126e0","url":"tw_stocks/4581.json"},{"revision":"f364b86dca44ba5cad705702382b5b43","url":"tw_stocks/4583.json"},{"revision":"ca5395b106b117408e453aa9f6394f80","url":"tw_stocks/4585.json"},{"revision":"13daa1bb530cb9c6243aa4b1f00c4f8c","url":"tw_stocks/4588.json"},{"revision":"0a633abd846a833a9661fac45a547251","url":"tw_stocks/4720.json"},{"revision":"97fc6499b26c4368fd32d9a8d2d6f9fd","url":"tw_stocks/4722.json"},{"revision":"77568c442ca3852087c1ac12b52b1a22","url":"tw_stocks/4736.json"},{"revision":"5f0cc4ce4250ace1a2b158eb6ca7760a","url":"tw_stocks/4737.json"},{"revision":"97e4f9c00f208fbe27c69775e03f1cad","url":"tw_stocks/4739.json"},{"revision":"7381ff303d830faa5645d402f9df3cae","url":"tw_stocks/4746.json"},{"revision":"61723c0d154ea96f28c6fd6056c78462","url":"tw_stocks/4755.json"},{"revision":"30679649f11a59dfbe3a90aecd6b2a32","url":"tw_stocks/4763.json"},{"revision":"acb21ee7daa3f60a32b2d82125c52503","url":"tw_stocks/4764.json"},{"revision":"5e54bef01324e38e34376290688952c8","url":"tw_stocks/4766.json"},{"revision":"6afb817208207cf08609d9fa532a4289","url":"tw_stocks/4770.json"},{"revision":"eabe3133055f55d6ab5bbb44f974c537","url":"tw_stocks/4771.json"},{"revision":"675e66279124c4650aa7e6105ba06bae","url":"tw_stocks/4807.json"},{"revision":"37a0482bcf627df0a8eb61b2dcc1ade4","url":"tw_stocks/4904.json"},{"revision":"bae67b506faf6e6a3f1f6bd13105d000","url":"tw_stocks/4906.json"},{"revision":"10ffa59160a13fdfc3eb4660019be364","url":"tw_stocks/4912.json"},{"revision":"a7035cc50775867c5ae63b50ef6f3f40","url":"tw_stocks/4915.json"},{"revision":"81037f2fe932abddd3f4c8bc31182c52","url":"tw_stocks/4916.json"},{"revision":"64f3ebca7d29d3957703544307622d9a","url":"tw_stocks/4919.json"},{"revision":"1143b8862e4893046941223657ed60a8","url":"tw_stocks/4927.json"},{"revision":"a3d2beb646319b4deb056645f4f91f95","url":"tw_stocks/4930.json"},{"revision":"a06949a18ab97b2ebbd0c882ff511c25","url":"tw_stocks/4934.json"},{"revision":"1cfdc59260673252afad7650b66b497e","url":"tw_stocks/4935.json"},{"revision":"c5ac0c6d248e171b15e98818ff4e99a4","url":"tw_stocks/4938.json"},{"revision":"50e02908359fe133e434ab23a5c50d3d","url":"tw_stocks/4942.json"},{"revision":"962380e84eab4ae904eac6a7d7326ec3","url":"tw_stocks/4943.json"},{"revision":"4117712fd0420402a6175f2492c03d1a","url":"tw_stocks/4949.json"},{"revision":"553bcd269b43d046fa32e3fe7d128491","url":"tw_stocks/4952.json"},{"revision":"7524f487e7cc3d51f1b7afe130275838","url":"tw_stocks/4956.json"},{"revision":"cf411fce7e318fe924cae0f5d18415db","url":"tw_stocks/4958.json"},{"revision":"cea954a17d035cd3c095ecf83ee23537","url":"tw_stocks/4960.json"},{"revision":"d3b27b67fec510d4f3d021c91662815d","url":"tw_stocks/4961.json"},{"revision":"9c5183990568875b3dd2c4f92960bd87","url":"tw_stocks/4967.json"},{"revision":"fd4281a7412a33f69df30abdaa08c3cd","url":"tw_stocks/4968.json"},{"revision":"25301187ca517394da8bd3430c928d97","url":"tw_stocks/4976.json"},{"revision":"6861ec7d6d780f5112100208cbd958cd","url":"tw_stocks/4977.json"},{"revision":"25bcc730a3f2adfc5880c44bbed416b7","url":"tw_stocks/4989.json"},{"revision":"a441257d78b957d19b6c4ac19b06221b","url":"tw_stocks/4994.json"},{"revision":"079559519e850d2a877ba0ed038225de","url":"tw_stocks/4999.json"},{"revision":"152f1538956e955ec2502b23dc04af99","url":"tw_stocks/5007.json"},{"revision":"65a18d3b3546a0223c775d1625f4d1df","url":"tw_stocks/5203.json"},{"revision":"0c0b9b6fedb23118b5a01fdba721a0a6","url":"tw_stocks/5215.json"},{"revision":"30b1b8e8b407e0ffcf7191ab23d59616","url":"tw_stocks/5222.json"},{"revision":"362976e9bfb32f68713fd54624773c55","url":"tw_stocks/5225.json"},{"revision":"a28e4e70899e46a6ff86b2d6a23e4c7b","url":"tw_stocks/5234.json"},{"revision":"920997dff1386055131310c809ce6e33","url":"tw_stocks/5243.json"},{"revision":"2fd519b4512a2b2960820b3fb94a815b","url":"tw_stocks/5244.json"},{"revision":"dc3ac93812fb5cb97caeb266d287a1f7","url":"tw_stocks/5258.json"},{"revision":"5c339133a64a2a21709ba99c264f78f6","url":"tw_stocks/5269.json"},{"revision":"c509768df29433c2478ccd61ade536ea","url":"tw_stocks/5283.json"},{"revision":"eb8180cea5019a080255137eb1dbc262","url":"tw_stocks/5284.json"},{"revision":"ee618958e041ba3f18f781d7343701bb","url":"tw_stocks/5285.json"},{"revision":"313d49be796a4a5d9f95831e2128c641","url":"tw_stocks/5288.json"},{"revision":"60a8300d3385c7af9cf5ca94f3c5864d","url":"tw_stocks/5292.json"},{"revision":"c6f713bea316643b990e791f38d7296d","url":"tw_stocks/5306.json"},{"revision":"9a4468ffe09ea16f2e0a8a3e38dde0fe","url":"tw_stocks/5388.json"},{"revision":"5c437ef8bfce16795ce21d5a67417dc7","url":"tw_stocks/5434.json"},{"revision":"5c5198d7a7933e441c91777c7648efa9","url":"tw_stocks/5469.json"},{"revision":"7e45fa228f9113d6ce970c889bac8318","url":"tw_stocks/5471.json"},{"revision":"eed4425891f7a5c8cba5874cf4ac5e36","url":"tw_stocks/5484.json"},{"revision":"3277a257fad2c9e5e89617d5a4b3af86","url":"tw_stocks/5515.json"},{"revision":"dc83ba94e12f772afc1e3a76c1ace6cf","url":"tw_stocks/5519.json"},{"revision":"a17fb2a5d3817912c0845d5d844f7f01","url":"tw_stocks/5521.json"},{"revision":"20a8a4a5bd5b97fdf26de9dea4232273","url":"tw_stocks/5522.json"},{"revision":"a1fa610d9d3e168927ce36fc4280c522","url":"tw_stocks/5525.json"},{"revision":"f1c581507393f2a75c4d7bda73647e87","url":"tw_stocks/5531.json"},{"revision":"572458bcd8a99b0beaf62b567ff4969f","url":"tw_stocks/5533.json"},{"revision":"b7065efecb065b90733abd0f3d33d226","url":"tw_stocks/5534.json"},{"revision":"cb1fbae43ef61d8368a0907b6e3c1ea6","url":"tw_stocks/5538.json"},{"revision":"1c5b12289fe178e573092fbd67523b1c","url":"tw_stocks/5546.json"},{"revision":"5d283d5aeedba6b845b2ad43783137bf","url":"tw_stocks/5607.json"},{"revision":"3a18f94b66ffcfb6827047d7eb8cfa96","url":"tw_stocks/5608.json"},{"revision":"7da45d26f968ea35fd66471b9a79f717","url":"tw_stocks/5706.json"},{"revision":"3f47a71433a359a89109cac3a5cf3462","url":"tw_stocks/5871.json"},{"revision":"6a36504ebb82d07091d5581924ebf5aa","url":"tw_stocks/5876.json"},{"revision":"1d20ebc7465a6eedb98fe5c092c141cd","url":"tw_stocks/5880.json"},{"revision":"f44c6e31a85f618be25d01be27e25386","url":"tw_stocks/5906.json"},{"revision":"32d3ded177362ff03371e7ecc8cf5dd6","url":"tw_stocks/5907.json"},{"revision":"0a6630ab8942f8e6bf6076a75405fb42","url":"tw_stocks/6005.json"},{"revision":"5cc0e26eeeb610f1ddeee6b7928af527","url":"tw_stocks/6024.json"},{"revision":"e333ecb749848c9679a6b32c4d607122","url":"tw_stocks/6108.json"},{"revision":"51b8ea093b78f3615076731aa8c83e89","url":"tw_stocks/6112.json"},{"revision":"c529d5ddda9a4d93e340554efc4d9542","url":"tw_stocks/6115.json"},{"revision":"0c64308e71d04397a3ef95942bc92420","url":"tw_stocks/6116.json"},{"revision":"f9127ba8916cdd122210f8acebb189c9","url":"tw_stocks/6117.json"},{"revision":"19459b99adc472f73e5fbbe100bee7d0","url":"tw_stocks/6120.json"},{"revision":"8be747a854b5b02bd5eb41d4d7fbb828","url":"tw_stocks/6128.json"},{"revision":"1018b0df91501a4e148d9b9fb91ad6c1","url":"tw_stocks/6133.json"},{"revision":"82e970d13af8ff920f40e0db090f8384","url":"tw_stocks/6136.json"},{"revision":"602952252c6b1f92fdbaa8da5d614fac","url":"tw_stocks/6139.json"},{"revision":"b989d88f4570bc3305ef0b635440474c","url":"tw_stocks/6141.json"},{"revision":"cc6dbb6e2929282fba834370c8eeeecf","url":"tw_stocks/6142.json"},{"revision":"131ae25b7ae08f8a1d6bc7c76590ae9d","url":"tw_stocks/6152.json"},{"revision":"2e82a837176d95ede22521f4562e7690","url":"tw_stocks/6153.json"},{"revision":"7bbb9f750cf41c8c3fd4042abde8b738","url":"tw_stocks/6155.json"},{"revision":"aabba0692530a3b96c5fb9ba8f1ae7c8","url":"tw_stocks/6164.json"},{"revision":"7f80c3713c66412adb234179bdd499c0","url":"tw_stocks/6165.json"},{"revision":"fa0345047cf9c3a0a018511d3ff47212","url":"tw_stocks/6166.json"},{"revision":"6bb62b433c8ef3863837ec975e6848fc","url":"tw_stocks/6168.json"},{"revision":"f7bd9d3250e6378262eecaf0118a3397","url":"tw_stocks/6176.json"},{"revision":"86f814355eddc646021738af262aa171","url":"tw_stocks/6177.json"},{"revision":"320322fa9b35a751bd2dbfeea9d705e0","url":"tw_stocks/6183.json"},{"revision":"4fe7d89609b217ce823a4001bab7944d","url":"tw_stocks/6184.json"},{"revision":"37572afcbb243aa06cdc3638066a3c21","url":"tw_stocks/6189.json"},{"revision":"a1b51f2dde4342403877ac4afa9f9021","url":"tw_stocks/6191.json"},{"revision":"cf64d3955eb673f189cb5f2b12b30cce","url":"tw_stocks/6192.json"},{"revision":"09e4e288a924bd9f8c0b556208175cac","url":"tw_stocks/6196.json"},{"revision":"cc0e032be0d3cc181bf5e7261345bf04","url":"tw_stocks/6197.json"},{"revision":"3b3c1dab4a2cfc4183c049ab0b559351","url":"tw_stocks/6201.json"},{"revision":"742de223bebe2f91acaaecf4c1950ff8","url":"tw_stocks/6202.json"},{"revision":"91cfb737ce1cda4e45e01922da77cbb6","url":"tw_stocks/6205.json"},{"revision":"003acd5466287aa1917ddc1d4971f0d4","url":"tw_stocks/6206.json"},{"revision":"cf8246e4168d80eeb901a94e912e88e0","url":"tw_stocks/6209.json"},{"revision":"07d0196af725c847528067d1969da839","url":"tw_stocks/6213.json"},{"revision":"df54443867227349fcc4254c1a2b16ba","url":"tw_stocks/6214.json"},{"revision":"7e30edea798b738d55e40639c015b990","url":"tw_stocks/6215.json"},{"revision":"5e4a4a632a60fc0d387f3fed8be4f128","url":"tw_stocks/6216.json"},{"revision":"af92d2d2787a4ccf5dc9327d49b514af","url":"tw_stocks/6224.json"},{"revision":"23d48be4cf5fd96d861d7dd59c88ee16","url":"tw_stocks/6225.json"},{"revision":"2d3d0b7fdaecbbf479e5ccc5693485c1","url":"tw_stocks/6226.json"},{"revision":"4fd85e6c0ecdd70845d7c4c5ed688fdb","url":"tw_stocks/6230.json"},{"revision":"5a65223a0c69dca3b246ceea28b9ccf9","url":"tw_stocks/6235.json"},{"revision":"8f84e5ddea380c0c04a4ec8b67912d9b","url":"tw_stocks/6239.json"},{"revision":"f424f82d62dd5ed77010bf5aa1b980cf","url":"tw_stocks/6243.json"},{"revision":"bdbd7ea04a293103bd607351db112718","url":"tw_stocks/6257.json"},{"revision":"0e8f1c07baa3a1f6acc157c083d50a66","url":"tw_stocks/6269.json"},{"revision":"575f84bc292dfef955134ae56ab677f9","url":"tw_stocks/6271.json"},{"revision":"58b7a81060533f763a5db21e090c37ad","url":"tw_stocks/6272.json"},{"revision":"d632273d6b9640b09c05ff6fdcd6ea84","url":"tw_stocks/6277.json"},{"revision":"f3b2586606520bc5b961334cd844fc1b","url":"tw_stocks/6278.json"},{"revision":"9b1c6b812206b3be211efe2cca5e5e41","url":"tw_stocks/6281.json"},{"revision":"8939f19a918f696dff577c3b405d1d12","url":"tw_stocks/6282.json"},{"revision":"fede9e059d1e5426e5617764e19d472e","url":"tw_stocks/6283.json"},{"revision":"63149fcfa5ef4090270b868a0369235d","url":"tw_stocks/6285.json"},{"revision":"224c596af1ea0420925cd89422cbf9e0","url":"tw_stocks/6405.json"},{"revision":"0259d17e87319cb16b730ff702fdbcaf","url":"tw_stocks/6409.json"},{"revision":"76c10f2739dee94394c52634dad3a403","url":"tw_stocks/6412.json"},{"revision":"6ff719ca72d0942075689a8d89783bd4","url":"tw_stocks/6414.json"},{"revision":"cd57fe5615d0648a8de525650a7b98b1","url":"tw_stocks/6415.json"},{"revision":"ec9543f3bdf6ba1f661025810293938d","url":"tw_stocks/6416.json"},{"revision":"6553ce72db38badd233867d1599f6d34","url":"tw_stocks/6426.json"},{"revision":"ab3d2f6641d90e4ddc82a2707b4b9f49","url":"tw_stocks/6431.json"},{"revision":"65e7f2c1eb32a06f7319e98232464f0a","url":"tw_stocks/6438.json"},{"revision":"5d414d53ddc8590109a0e83ce1becf62","url":"tw_stocks/6442.json"},{"revision":"b334c554795ad53f28fe34b532f1a673","url":"tw_stocks/6443.json"},{"revision":"ce5267af7370be06d777e0b9bed755c6","url":"tw_stocks/6446.json"},{"revision":"0acbfa9bc0edf1e3710198f3d84ae670","url":"tw_stocks/6449.json"},{"revision":"9e95a4da23c015b8e39da7fd0d8b8c55","url":"tw_stocks/6451.json"},{"revision":"ba8e33ad6cdb9d99e66d97deb2fde7e5","url":"tw_stocks/6456.json"},{"revision":"bc4624aa30297387048b02a68dca4c9c","url":"tw_stocks/6464.json"},{"revision":"5299d9fd0e1022f37e639288cb3795e2","url":"tw_stocks/6472.json"},{"revision":"0df23e6082ec72550ca740a3b8d07c7f","url":"tw_stocks/6477.json"},{"revision":"2b3f9345d19d0047e8cccb99648ac5ec","url":"tw_stocks/6491.json"},{"revision":"f6124b7b2b1507b69b59348f90aba4a5","url":"tw_stocks/6504.json"},{"revision":"5e09a3f090023db4f0fd0103dab4055c","url":"tw_stocks/6505.json"},{"revision":"131735a4990ecea8f73d0ae4adb91ebf","url":"tw_stocks/6515.json"},{"revision":"ce06e2cb4bf87d57444819424ff685a7","url":"tw_stocks/6525.json"},{"revision":"a533adbb09dea8d524ed75f70d363d2c","url":"tw_stocks/6526.json"},{"revision":"4938c423948e6b3dd2f7bb465f440344","url":"tw_stocks/6531.json"},{"revision":"274fbfc24da1bafacc440f64d6a3b9c6","url":"tw_stocks/6533.json"},{"revision":"6379afdbeeab1d95b7cacab8aec1f1ad","url":"tw_stocks/6541.json"},{"revision":"2e9bc7a33ef1a525aaad90611a6b51e9","url":"tw_stocks/6550.json"},{"revision":"9eea74f6ad61362ae34a1220c8535d20","url":"tw_stocks/6552.json"},{"revision":"35e8a5d9ab003a69b12152af612a8494","url":"tw_stocks/6558.json"},{"revision":"d5e08d2db4628c357a0343d0d96a79a4","url":"tw_stocks/6573.json"},{"revision":"834f87fa3300905076fa9f0f145ae575","url":"tw_stocks/6579.json"},{"revision":"06a5e26da59336c7bd5f727f8d43bb32","url":"tw_stocks/6581.json"},{"revision":"cf3ae1a0df3b2066e216c131db01113e","url":"tw_stocks/6582.json"},{"revision":"d62b91ce0c8efe49c3dfd94555f258ae","url":"tw_stocks/6585.json"},{"revision":"f8665104d3c9b9bea8ce50fa0997143e","url":"tw_stocks/6589.json"},{"revision":"5d30282f13e180c59652ea17fb5ec992","url":"tw_stocks/6591.json"},{"revision":"46ab7b91ed6ac56963b7da2ae1219142","url":"tw_stocks/6592.json"},{"revision":"8876e3ae6b62d0c7bbb831fefc090c1b","url":"tw_stocks/6598.json"},{"revision":"b1929e18a642562e85785943d977bb3a","url":"tw_stocks/6605.json"},{"revision":"ce3229edf8ba86e9bb500d86573095ed","url":"tw_stocks/6606.json"},{"revision":"5dc26fb916aeb63a062d25350bbb7e98","url":"tw_stocks/6614.json"},{"revision":"367d1aee93d31275b6fb6d5ea2f678ad","url":"tw_stocks/6625.json"},{"revision":"4b6179f9993c88b7982085c3c147cd57","url":"tw_stocks/6641.json"},{"revision":"ecf2b0fa45d53e2de9c65a5e506bdcb4","url":"tw_stocks/6655.json"},{"revision":"83f68f622e7ed6d8c1559fdda6b564ca","url":"tw_stocks/6657.json"},{"revision":"749576b10bdb9b99cc1367d94247aa97","url":"tw_stocks/6658.json"},{"revision":"033aea5e01cbe2bfee5de4d27a27d9e2","url":"tw_stocks/6666.json"},{"revision":"f57704469e369dc96246db9b3aee9277","url":"tw_stocks/6668.json"},{"revision":"3c22c4ad3324859af9152faa344e5cd9","url":"tw_stocks/6669.json"},{"revision":"3571e4bd39056c774cfe3d729f4ee9f4","url":"tw_stocks/6670.json"},{"revision":"1eb75423cab3faca14f900e672be613e","url":"tw_stocks/6671.json"},{"revision":"a2ee43e5d7a3d797ce7fdc3327cd6b21","url":"tw_stocks/6672.json"},{"revision":"b2ee6c2c3db08468f08513f01d94ccbd","url":"tw_stocks/6674.json"},{"revision":"f206aaa3660c9efbe92cff81570c8ad8","url":"tw_stocks/6689.json"},{"revision":"cbb2ed4bdbb9fa1b2be5685c5fc538fe","url":"tw_stocks/6691.json"},{"revision":"723a32fad8aaad98524d1544517d6d48","url":"tw_stocks/6695.json"},{"revision":"1923d36dab65c14c12c87d29f1e87f72","url":"tw_stocks/6698.json"},{"revision":"78d9357e3b92981c4fc993840b02120e","url":"tw_stocks/6706.json"},{"revision":"1911f77c8844bcd254bf1252da64bfd6","url":"tw_stocks/6715.json"},{"revision":"253eb086d28750484d97c7e33852c35c","url":"tw_stocks/6719.json"},{"revision":"bc9762a5a51ede89adeca8a19f4e4c0f","url":"tw_stocks/6722.json"},{"revision":"b76113de7cc4feece3f339f5100e844c","url":"tw_stocks/6742.json"},{"revision":"87e73aa455084be58df984bc549a0658","url":"tw_stocks/6743.json"},{"revision":"a1edabdfc9b5376104b6a6913bb76fec","url":"tw_stocks/6753.json"},{"revision":"d9d4dcda27dac7c00c1e85c6988ee0eb","url":"tw_stocks/6754.json"},{"revision":"7b34d8851de741dab7f10ef1f1647b4d","url":"tw_stocks/6756.json"},{"revision":"aaef135469699170c7d2631cc3c98eab","url":"tw_stocks/6757.json"},{"revision":"306447b20e3e1a1fedf93ead18cf9d60","url":"tw_stocks/6768.json"},{"revision":"e0f61898c91fcd451f6416707e1a35c2","url":"tw_stocks/6770.json"},{"revision":"d3ead7d3d7093de4cb73c4eccb5642b1","url":"tw_stocks/6776.json"},{"revision":"14241ca5e7662393a4adb80be6ffd661","url":"tw_stocks/6781.json"},{"revision":"3bf2165eb86e7a4f207dc12902b1a3ff","url":"tw_stocks/6782.json"},{"revision":"528fe6f5767dff0de2c6f7c802465857","url":"tw_stocks/6789.json"},{"revision":"9e9f0f9b9bc3808722798d568bc35a49","url":"tw_stocks/6790.json"},{"revision":"3a888f05a1388845e3bc83bdef02ed3d","url":"tw_stocks/6792.json"},{"revision":"c16df503b5c4615a21c4287502815d04","url":"tw_stocks/6794.json"},{"revision":"dcd3743f8d9dc5a917e5361ce1f20ca3","url":"tw_stocks/6796.json"},{"revision":"88643a6afd2d3523f9ee63e4e1d02ab6","url":"tw_stocks/6799.json"},{"revision":"14b16480eab0ecd1da5ffc3920111893","url":"tw_stocks/6805.json"},{"revision":"257657f646d7a42ca3a58f085059cc13","url":"tw_stocks/6806.json"},{"revision":"451549d299fc29967e909322ad344bbc","url":"tw_stocks/6807.json"},{"revision":"fa903393108fded29092af10b85be587","url":"tw_stocks/6830.json"},{"revision":"cefc7ea31726b057614901ddb120f961","url":"tw_stocks/6831.json"},{"revision":"65042656aa1cd52d213c8a9d4bc0f6db","url":"tw_stocks/6834.json"},{"revision":"fbe87ddefb000694fe124353a627df7c","url":"tw_stocks/6835.json"},{"revision":"1c12449941ab8303fcaec2ad0514a4f8","url":"tw_stocks/6838.json"},{"revision":"e5a2a29c405531aa81643b0348127cf6","url":"tw_stocks/6861.json"},{"revision":"2a43c2b8e3f2885e3a25718c5b731a89","url":"tw_stocks/6862.json"},{"revision":"2acd79b47fdcb161564ae372414896b2","url":"tw_stocks/6863.json"},{"revision":"639bf4af097607fad5c35a5b78deb975","url":"tw_stocks/6869.json"},{"revision":"ace95f6c558096e93ee236e3735b3b2a","url":"tw_stocks/6873.json"},{"revision":"ac3cca06284cfd46aaf9816cc0f6cac7","url":"tw_stocks/6885.json"},{"revision":"8ebc64ce8a169df586c0630265b25ee5","url":"tw_stocks/6887.json"},{"revision":"7cde956bc0ea8214719b703fec3ae7c5","url":"tw_stocks/6890.json"},{"revision":"7adc96268c936d26933cf9b62ab9dff2","url":"tw_stocks/6901.json"},{"revision":"1c8bf509f9ea5cd7c478908bb7491e49","url":"tw_stocks/6902.json"},{"revision":"a6dfccb08ab83725c4b4c5476fa2d92c","url":"tw_stocks/6906.json"},{"revision":"877c4f6a94236d0f366f0b1eef9d8f48","url":"tw_stocks/6909.json"},{"revision":"9b634135d6592dc665b86db62797ba79","url":"tw_stocks/6914.json"},{"revision":"6cc48691241e224ccfb137aaf5a3d8be","url":"tw_stocks/6916.json"},{"revision":"45522b3017dbe2c06dace79c34b53aa8","url":"tw_stocks/6918.json"},{"revision":"46ec7bec46cc7b3ac7e9690ad520b3e9","url":"tw_stocks/6919.json"},{"revision":"6eba22002284809e0a240cd28ef12398","url":"tw_stocks/6923.json"},{"revision":"06021facd4b966527255dfcbc11025b8","url":"tw_stocks/6928.json"},{"revision":"0a8e55e016bc9699afd3e5a7afee6f14","url":"tw_stocks/6931.json"},{"revision":"beea1df51ff4d3415967e56ff91c9fb5","url":"tw_stocks/6933.json"},{"revision":"cb8a4eddef7058078ee78f1b3d906cc5","url":"tw_stocks/6934.json"},{"revision":"0a1812bf80e2dc84f48d0287cf3e9c1e","url":"tw_stocks/6936.json"},{"revision":"7a12e1c5d2e23b7af4a26933a7517722","url":"tw_stocks/6937.json"},{"revision":"155dfca99de33bccd11026e567f8e07e","url":"tw_stocks/6944.json"},{"revision":"3ebada4e16713115ff83f36df2db36d8","url":"tw_stocks/6952.json"},{"revision":"83caf7412e39d8ab7e5033a5d30bf967","url":"tw_stocks/6957.json"},{"revision":"a05ee27dc09689c8badf1519a3431ed7","url":"tw_stocks/6958.json"},{"revision":"b97816146185bbaa3c05cc36f8e30afa","url":"tw_stocks/6962.json"},{"revision":"1b7fe7edc2bcd5093e6241e8748eb479","url":"tw_stocks/6965.json"},{"revision":"f7107486bc1fe82819addf75e8ce608f","url":"tw_stocks/6994.json"},{"revision":"d4457d55517fb056473086fbe83a7c19","url":"tw_stocks/7705.json"},{"revision":"e5f3e8db0c498df3945abca4f0ef0f9c","url":"tw_stocks/7711.json"},{"revision":"ab27a8b60c57c054dd00d988d0f1ab3e","url":"tw_stocks/7721.json"},{"revision":"2081831294f23e488b3239595906b018","url":"tw_stocks/7722.json"},{"revision":"9be9a41eb647c0534d423578197d706b","url":"tw_stocks/7732.json"},{"revision":"adfc25805c320e6227bece09294eb642","url":"tw_stocks/7736.json"},{"revision":"0cde44559a286f798da7ade7b00f6c7f","url":"tw_stocks/7749.json"},{"revision":"cfd78dca4c33ce4721ddeeced307a021","url":"tw_stocks/7750.json"},{"revision":"65bcd4b57227196b0b1c4af97c1faa02","url":"tw_stocks/7765.json"},{"revision":"ec19748fbb8e1a6f396ea742f7a3badd","url":"tw_stocks/7769.json"},{"revision":"d93be116acc832bcd9af38dd64e9283c","url":"tw_stocks/7780.json"},{"revision":"2135094e74fc120c58ea348a52b97477","url":"tw_stocks/7786.json"},{"revision":"8ee75a9168acbdbfcafcd460196573b9","url":"tw_stocks/7788.json"},{"revision":"e75250618f9ededfcbe29a3ef8d61e13","url":"tw_stocks/7791.json"},{"revision":"0eee0c14bd8f8c729c04d0fe93915858","url":"tw_stocks/7795.json"},{"revision":"c469777c1b2698029b458f9d64223e7f","url":"tw_stocks/7799.json"},{"revision":"216331c82dd117328302cd822f551b6e","url":"tw_stocks/8011.json"},{"revision":"d44ea54747de76495f5810bbb0b81e4b","url":"tw_stocks/8016.json"},{"revision":"715433bcddbbe7a901963e839dc176e4","url":"tw_stocks/8021.json"},{"revision":"e937cfea327de28ad3f4b0c34d6f918f","url":"tw_stocks/8028.json"},{"revision":"89f07dfe6ad40afd91d4d4d8f789fb62","url":"tw_stocks/8033.json"},{"revision":"809c694d5fbf698d22a14da0bc68f8ea","url":"tw_stocks/8039.json"},{"revision":"faaffc0cf79cea77a3e03169be08cace","url":"tw_stocks/8045.json"},{"revision":"17f0659d105f1e19664938440dc67f64","url":"tw_stocks/8046.json"},{"revision":"8fe61e0eadab5a0aafbb63d22fffa669","url":"tw_stocks/8070.json"},{"revision":"53ef10f5161e39e1a3c6d6ac44ca18eb","url":"tw_stocks/8072.json"},{"revision":"5239d98b92602facfead0389d6eb4412","url":"tw_stocks/8081.json"},{"revision":"a0b9009ef54688843954f499bfa6e450","url":"tw_stocks/8101.json"},{"revision":"758b4a631c32d17554848e762d553aea","url":"tw_stocks/8103.json"},{"revision":"2aa08589cf30240a1f5a5d9f87c9dc30","url":"tw_stocks/8104.json"},{"revision":"68628a4c9ca864abd8a30505c3b9f657","url":"tw_stocks/8105.json"},{"revision":"c1699fdb7eb13f0b86ee57e70fe75910","url":"tw_stocks/8110.json"},{"revision":"49b804d6aee0d6abbf4d14927330cfac","url":"tw_stocks/8112.json"},{"revision":"877a52acddb3dbcc1f3e714cf142d1a3","url":"tw_stocks/8114.json"},{"revision":"072960c23779892568ee9b9623500ca5","url":"tw_stocks/8131.json"},{"revision":"0119dd031ab3f81a0d226d095aa2447c","url":"tw_stocks/8150.json"},{"revision":"25081113a8808c99fee8572f901de8ad","url":"tw_stocks/8163.json"},{"revision":"27f95b44ca8085d92552d98c1a6e5c84","url":"tw_stocks/8201.json"},{"revision":"269401a6d00f8b95b9971b53118a28d6","url":"tw_stocks/8210.json"},{"revision":"4558381851c3d3496c7e1e32609e3651","url":"tw_stocks/8213.json"},{"revision":"b3bd0106298559ed9cc9d1e297ddab56","url":"tw_stocks/8215.json"},{"revision":"dcd06963109ac5c74c2567f7f561a4ff","url":"tw_stocks/8222.json"},{"revision":"dcf417af15eb46cd7c833ba39eb65035","url":"tw_stocks/8249.json"},{"revision":"97050af6d0d214f48643389f5dca2f9e","url":"tw_stocks/8261.json"},{"revision":"9304de2f12d9f84b884cad99b809fb19","url":"tw_stocks/8271.json"},{"revision":"5f453c0d85cab8b008d2f7472faa9adb","url":"tw_stocks/8341.json"},{"revision":"51b2878febc6ddc4a3730ab74116c4d8","url":"tw_stocks/8367.json"},{"revision":"8ace022e26a060a7b0df35452434cf53","url":"tw_stocks/8374.json"},{"revision":"5e03daeb6c1798cb59da657650d2cf26","url":"tw_stocks/8404.json"},{"revision":"07b05ad77680818898e264da7661d2e0","url":"tw_stocks/8411.json"},{"revision":"64585b35d4e39b2a264575b5f83ab85c","url":"tw_stocks/8422.json"},{"revision":"11eff0a177f34f38a58941d806a86566","url":"tw_stocks/8429.json"},{"revision":"bebae9455dd8dc738f7310d53223d95c","url":"tw_stocks/8438.json"},{"revision":"7e52b5aac0f4f5a7824a94b5eb43e920","url":"tw_stocks/8442.json"},{"revision":"4601f0ee4aa044751a0fb5f0a1351b0e","url":"tw_stocks/8443.json"},{"revision":"f0bcf66ede492543a1d3a30a25d2a598","url":"tw_stocks/8454.json"},{"revision":"fd34dd9d9318ed12b3ce8f7e0114859d","url":"tw_stocks/8462.json"},{"revision":"cacac921b9dcd63dc0ee3bd4c1fcae17","url":"tw_stocks/8463.json"},{"revision":"70356072eaa79e90d92f30166ff69abe","url":"tw_stocks/8464.json"},{"revision":"34c5a4d25a285a3dc7b1771e78dfab7d","url":"tw_stocks/8466.json"},{"revision":"dfdb343321817fb2acc10957d3657ee0","url":"tw_stocks/8467.json"},{"revision":"3ffb6fecb637fd4f126161f07a3867b6","url":"tw_stocks/8473.json"},{"revision":"04b9764776da5c4390261631282295b1","url":"tw_stocks/8476.json"},{"revision":"328e6a6ce912d1252b21f4f61341a4d0","url":"tw_stocks/8478.json"},{"revision":"d052acf9a1385c472403c2fc1d622f90","url":"tw_stocks/8481.json"},{"revision":"94430ae5a6c7bed3b34638f2a3dd8214","url":"tw_stocks/8482.json"},{"revision":"14927d1b5c86db6e62df5287da5c14d0","url":"tw_stocks/8488.json"},{"revision":"c8a131d437dea780915190d254943351","url":"tw_stocks/8499.json"},{"revision":"9a356b1032529665c9aa896aa906f9ac","url":"tw_stocks/8926.json"},{"revision":"72469f97be88c3193a6b7c8b72ee9aea","url":"tw_stocks/8940.json"},{"revision":"ef98bb47ef5180bc445e8cd789c8ed4c","url":"tw_stocks/8996.json"},{"revision":"9742d972259cb4d23220ad7e3884b168","url":"tw_stocks/9802.json"},{"revision":"50e88baa45540a40b99e80c348164068","url":"tw_stocks/9902.json"},{"revision":"e4dab5650be7737d79ce6b934da1884e","url":"tw_stocks/9904.json"},{"revision":"0947c261323cf01f17b8e76779f2fb97","url":"tw_stocks/9905.json"},{"revision":"02ca44a0e3a128c9090212c6f898dd01","url":"tw_stocks/9906.json"},{"revision":"fab5dbe95ea4d98a2eb86fca0d46d1ac","url":"tw_stocks/9907.json"},{"revision":"fc49d23e31e973e45bf670c6c1ca5f2a","url":"tw_stocks/9908.json"},{"revision":"dccf6f812c6cca77fad6246fa6457843","url":"tw_stocks/9910.json"},{"revision":"bb5f752770bf0fc57ca363dd7cec58a8","url":"tw_stocks/9911.json"},{"revision":"42c7f0f4ab51eae3e9fef27bbf8e0ca3","url":"tw_stocks/9912.json"},{"revision":"86aabd669ae8bcfd814baa86dac196f7","url":"tw_stocks/9914.json"},{"revision":"8cb39b51b08a52508eab3b67d6a6d50d","url":"tw_stocks/9917.json"},{"revision":"6fbbe121e2224ed333a8db4ca88b5b51","url":"tw_stocks/9918.json"},{"revision":"4f24bffd3a3cce79e8082a5be3b7fe49","url":"tw_stocks/9919.json"},{"revision":"b6d5c46c58f2714969c38de8ed25488b","url":"tw_stocks/9921.json"},{"revision":"425bf43af2db05ebf487a8eb17299dcf","url":"tw_stocks/9924.json"},{"revision":"6c8f4ae5d0540fe55a1852febef0cd45","url":"tw_stocks/9925.json"},{"revision":"4c25c73d06c8d093a89dee13cba7f9af","url":"tw_stocks/9926.json"},{"revision":"d39b2e47c577cc1556ca8ffc6bebbe37","url":"tw_stocks/9927.json"},{"revision":"ff92fe1a433f216b81f6cffe29984eb4","url":"tw_stocks/9928.json"},{"revision":"e24ef62f290138f7f698b5713f64f2d6","url":"tw_stocks/9929.json"},{"revision":"7ee081b1f11f6feaf3826109af56e5a3","url":"tw_stocks/9930.json"},{"revision":"fa79aed749dfbf7310ba097a8b6175d8","url":"tw_stocks/9931.json"},{"revision":"e0935132f8b55c72b6b34acac876e587","url":"tw_stocks/9933.json"},{"revision":"183bf5da0e1dcb65ec95843bff6eea78","url":"tw_stocks/9934.json"},{"revision":"e5b864e4f98f5c47bedc6b318202baa5","url":"tw_stocks/9935.json"},{"revision":"1a64b656c20f1531dbecf0d4d372fa06","url":"tw_stocks/9937.json"},{"revision":"b95f5e84f6d01aa6c56cb2d706ac3c55","url":"tw_stocks/9938.json"},{"revision":"dcfb452a77bf848f937f81008cdae641","url":"tw_stocks/9939.json"},{"revision":"6bef2e66e0c37b97157da026aef1c09d","url":"tw_stocks/9940.json"},{"revision":"c67b7f3b28ec47320d7efce3030c5566","url":"tw_stocks/9941.json"},{"revision":"06c4b98b711ced27f5ce1bc2151a86bc","url":"tw_stocks/9942.json"},{"revision":"fa9950b6137e29d2e931d81854ae7ec0","url":"tw_stocks/9943.json"},{"revision":"14e5e61273c1484fc84a8728cfdecd47","url":"tw_stocks/9944.json"},{"revision":"9ac0c6d38e5b51a394d83bb838d7f621","url":"tw_stocks/9945.json"},{"revision":"9cb994ce6c52b6ddf7987cfd2f113944","url":"tw_stocks/9946.json"},{"revision":"2db0f90842ca29f39051c71029202312","url":"tw_stocks/9955.json"},{"revision":"6145b5b9878e09bc0576f03f4c2fb0f1","url":"tw_stocks/9958.json"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"}];
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