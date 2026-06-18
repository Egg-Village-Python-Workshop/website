(() => {
"use strict";
var __webpack_modules__ = ({
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/Deferred.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Deferred: () => (Deferred)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkboxError: () => (WorkboxError)
});
/* import */ var _models_messages_messageGenerator_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messageGenerator.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
        const message = (0,_models_messages_messageGenerator_js__rspack_import_0.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: () => (finalAssertExports)
});
/* import */ var _private_WorkboxError_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__rspack_import_0.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__rspack_import_0.WorkboxError('not-array-of-class', details);
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



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cacheMatchIgnoreParams: () => (cacheMatchIgnoreParams)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cacheNames: () => (cacheNames)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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


},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  canConstructResponseFromBodyStream: () => (canConstructResponseFromBodyStream)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  executeQuotaErrorCallbacks: () => (executeQuotaErrorCallbacks)
});
/* import */ var _private_logger_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _models_quotaErrorCallbacks_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* import */ var _version_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_2);
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
        _private_logger_js__rspack_import_0.logger.log(`About to run ${_models_quotaErrorCallbacks_js__rspack_import_1.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__rspack_import_1.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__rspack_import_0.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__rspack_import_0.logger.log('Finished running callbacks.');
    }
}



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getFriendlyURL: () => (getFriendlyURL)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  logger: () => (logger)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/timeout.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  timeout: () => (timeout)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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


},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/waitUntil.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  waitUntil: () => (waitUntil)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js"() {

// @ts-ignore
try {
    self['workbox:core:7.3.0'] && _();
}
catch (e) { }


},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/copyResponse.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  copyResponse: () => (copyResponse)
});
/* import */ var _private_canConstructResponseFromBodyStream_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* import */ var _private_WorkboxError_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_2);
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
        throw new _private_WorkboxError_js__rspack_import_1.WorkboxError('cross-origin-copy-response', { origin });
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
    const body = (0,_private_canConstructResponseFromBodyStream_js__rspack_import_0.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messageGenerator.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  messageGenerator: () => (messageGenerator)
});
/* import */ var _messages_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messages.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
    const message = _messages_js__rspack_import_0.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/messages/messages.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  messages: () => (messages)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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


},
"./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/models/quotaErrorCallbacks.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  quotaErrorCallbacks: () => (quotaErrorCallbacks)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheController.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: () => (PrecacheController)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* import */ var workbox_core_private_cacheNames_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js");
/* import */ var workbox_core_private_logger_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var workbox_core_private_waitUntil_js__rspack_import_4 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/waitUntil.js");
/* import */ var _utils_createCacheKey_js__rspack_import_5 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/createCacheKey.js");
/* import */ var _utils_PrecacheInstallReportPlugin_js__rspack_import_6 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* import */ var _utils_PrecacheCacheKeyPlugin_js__rspack_import_7 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* import */ var _utils_printCleanupDetails_js__rspack_import_8 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* import */ var _utils_printInstallDetails_js__rspack_import_9 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* import */ var _PrecacheStrategy_js__rspack_import_10 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* import */ var _version_js__rspack_import_11 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_11_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_11);
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
        this._strategy = new _PrecacheStrategy_js__rspack_import_10.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__rspack_import_1.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__rspack_import_7.PrecacheCacheKeyPlugin({ precacheController: this }),
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
            workbox_core_private_assert_js__rspack_import_0.assert.isArray(entries, {
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
            const { cacheKey, url } = (0,_utils_createCacheKey_js__rspack_import_5.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__rspack_import_3.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__rspack_import_3.WorkboxError('add-to-cache-list-conflicting-integrities', {
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
                if (false) {}
                else {
                    workbox_core_private_logger_js__rspack_import_2.logger.warn(warningMessage);
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
        return (0,workbox_core_private_waitUntil_js__rspack_import_4.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__rspack_import_6.PrecacheInstallReportPlugin();
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
                (0,_utils_printInstallDetails_js__rspack_import_9.printInstallDetails)(updatedURLs, notUpdatedURLs);
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
        return (0,workbox_core_private_waitUntil_js__rspack_import_4.waitUntil)(event, async () => {
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
                (0,_utils_printCleanupDetails_js__rspack_import_8.printCleanupDetails)(deletedURLs);
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
            throw new workbox_core_private_WorkboxError_js__rspack_import_3.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheFallbackPlugin: () => (PrecacheFallbackPlugin)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
            precacheController || (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    }
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheRoute: () => (PrecacheRoute)
});
/* import */ var workbox_core_private_logger_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var workbox_routing_Route_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Route.js");
/* import */ var _utils_generateURLVariations_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* import */ var _version_js__rspack_import_4 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_4);
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
class PrecacheRoute extends workbox_routing_Route_js__rspack_import_2.Route {
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
            for (const possibleURL of (0,_utils_generateURLVariations_js__rspack_import_3.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__rspack_import_0.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheStrategy.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheStrategy: () => (PrecacheStrategy)
});
/* import */ var workbox_core_copyResponse_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/copyResponse.js");
/* import */ var workbox_core_private_cacheNames_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var workbox_core_private_logger_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_4 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var workbox_strategies_Strategy_js__rspack_import_5 = __webpack_require__("./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/Strategy.js");
/* import */ var _version_js__rspack_import_6 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_6);
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
class PrecacheStrategy extends workbox_strategies_Strategy_js__rspack_import_5.Strategy {
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
        options.cacheName = workbox_core_private_cacheNames_js__rspack_import_1.cacheNames.getPrecacheName(options.cacheName);
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
                workbox_core_private_logger_js__rspack_import_3.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__rspack_import_2.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
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
                        workbox_core_private_logger_js__rspack_import_3.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_2.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__rspack_import_4.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__rspack_import_2.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__rspack_import_3.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_2.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__rspack_import_3.logger.log(request);
            workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
            workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__rspack_import_3.logger.log(response);
            workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
            workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
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
            throw new workbox_core_private_WorkboxError_js__rspack_import_4.WorkboxError('bad-precaching-response', {
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
        return response.redirected ? await (0,workbox_core_copyResponse_js__rspack_import_0.copyResponse)(response) : response;
    },
};



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_types.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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


},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js"() {

// @ts-ignore
try {
    self['workbox:precaching:7.3.0'] && _();
}
catch (e) { }


},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addPlugins.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addPlugins: () => (addPlugins)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addRoute: () => (addRoute)
});
/* import */ var workbox_routing_registerRoute_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/registerRoute.js");
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _PrecacheRoute_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* import */ var _version_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_3);
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
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_1.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__rspack_import_2.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__rspack_import_0.registerRoute)(precacheRoute);
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cleanupOutdatedCaches: () => (cleanupOutdatedCaches)
});
/* import */ var workbox_core_private_cacheNames_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js");
/* import */ var workbox_core_private_logger_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _utils_deleteOutdatedCaches_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* import */ var _version_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_3);
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
        const cacheName = workbox_core_private_cacheNames_js__rspack_import_0.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__rspack_import_2.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__rspack_import_1.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/createHandlerBoundToURL.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createHandlerBoundToURL: () => (createHandlerBoundToURL)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/getCacheKeyForURL.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCacheKeyForURL: () => (getCacheKeyForURL)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: () => (/* reexport safe */ _PrecacheController_js__rspack_import_8.PrecacheController),
  PrecacheFallbackPlugin: () => (/* reexport safe */ _PrecacheFallbackPlugin_js__rspack_import_11.PrecacheFallbackPlugin),
  PrecacheRoute: () => (/* reexport safe */ _PrecacheRoute_js__rspack_import_9.PrecacheRoute),
  PrecacheStrategy: () => (/* reexport safe */ _PrecacheStrategy_js__rspack_import_10.PrecacheStrategy),
  addPlugins: () => (/* reexport safe */ _addPlugins_js__rspack_import_0.addPlugins),
  addRoute: () => (/* reexport safe */ _addRoute_js__rspack_import_1.addRoute),
  cleanupOutdatedCaches: () => (/* reexport safe */ _cleanupOutdatedCaches_js__rspack_import_2.cleanupOutdatedCaches),
  createHandlerBoundToURL: () => (/* reexport safe */ _createHandlerBoundToURL_js__rspack_import_3.createHandlerBoundToURL),
  getCacheKeyForURL: () => (/* reexport safe */ _getCacheKeyForURL_js__rspack_import_4.getCacheKeyForURL),
  matchPrecache: () => (/* reexport safe */ _matchPrecache_js__rspack_import_5.matchPrecache),
  precache: () => (/* reexport safe */ _precache_js__rspack_import_6.precache),
  precacheAndRoute: () => (/* reexport safe */ _precacheAndRoute_js__rspack_import_7.precacheAndRoute)
});
/* import */ var _addPlugins_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addPlugins.js");
/* import */ var _addRoute_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addRoute.js");
/* import */ var _cleanupOutdatedCaches_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* import */ var _createHandlerBoundToURL_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* import */ var _getCacheKeyForURL_js__rspack_import_4 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* import */ var _matchPrecache_js__rspack_import_5 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/matchPrecache.js");
/* import */ var _precache_js__rspack_import_6 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precache.js");
/* import */ var _precacheAndRoute_js__rspack_import_7 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precacheAndRoute.js");
/* import */ var _PrecacheController_js__rspack_import_8 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheController.js");
/* import */ var _PrecacheRoute_js__rspack_import_9 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* import */ var _PrecacheStrategy_js__rspack_import_10 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* import */ var _PrecacheFallbackPlugin_js__rspack_import_11 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* import */ var _version_js__rspack_import_12 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_12_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_12);
/* import */ var _types_js__rspack_import_13 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_types.js");
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




},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/matchPrecache.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  matchPrecache: () => (matchPrecache)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precache.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  precache: () => (precache)
});
/* import */ var _utils_getOrCreatePrecacheController_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__rspack_import_0.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precacheAndRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  precacheAndRoute: () => (precacheAndRoute)
});
/* import */ var _addRoute_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/addRoute.js");
/* import */ var _precache_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/precache.js");
/* import */ var _version_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_2);
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
    (0,_precache_js__rspack_import_1.precache)(entries);
    (0,_addRoute_js__rspack_import_0.addRoute)(options);
}



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheCacheKeyPlugin: () => (PrecacheCacheKeyPlugin)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheInstallReportPlugin: () => (PrecacheInstallReportPlugin)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/createCacheKey.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCacheKey: () => (createCacheKey)
});
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
        throw new workbox_core_private_WorkboxError_js__rspack_import_0.WorkboxError('add-to-cache-list-unexpected-type', { entry });
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
        throw new workbox_core_private_WorkboxError_js__rspack_import_0.WorkboxError('add-to-cache-list-unexpected-type', { entry });
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


},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  deleteOutdatedCaches: () => (deleteOutdatedCaches)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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



},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/generateURLVariations.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  generateURLVariations: () => (generateURLVariations)
});
/* import */ var _removeIgnoredSearchParams_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__rspack_import_0.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
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


},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOrCreatePrecacheController: () => (getOrCreatePrecacheController)
});
/* import */ var _PrecacheController_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/PrecacheController.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
        precacheController = new _PrecacheController_js__rspack_import_0.PrecacheController();
    }
    return precacheController;
};


},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printCleanupDetails.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printCleanupDetails: () => (printCleanupDetails)
});
/* import */ var workbox_core_private_logger_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
    workbox_core_private_logger_js__rspack_import_0.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__rspack_import_0.logger.log(url);
    }
    workbox_core_private_logger_js__rspack_import_0.logger.groupEnd();
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
        workbox_core_private_logger_js__rspack_import_0.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__rspack_import_0.logger.groupEnd();
    }
}


},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/printInstallDetails.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printInstallDetails: () => (printInstallDetails)
});
/* import */ var workbox_core_private_logger_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
    workbox_core_private_logger_js__rspack_import_0.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__rspack_import_0.logger.log(url);
    }
    workbox_core_private_logger_js__rspack_import_0.logger.groupEnd();
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
        workbox_core_private_logger_js__rspack_import_0.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__rspack_import_0.logger.groupEnd();
    }
}


},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  removeIgnoredSearchParams: () => (removeIgnoredSearchParams)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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


},
"./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/RegExpRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RegExpRoute: () => (RegExpRoute)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* import */ var workbox_core_private_logger_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _Route_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Route.js");
/* import */ var _version_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_3);
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
class RegExpRoute extends _Route_js__rspack_import_2.Route {
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
            workbox_core_private_assert_js__rspack_import_0.assert.isInstance(regExp, RegExp, {
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
                    workbox_core_private_logger_js__rspack_import_1.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
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



},
"./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Route.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Route: () => (Route)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* import */ var _utils_constants_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/constants.js");
/* import */ var _utils_normalizeHandler_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* import */ var _version_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_3);
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
    constructor(match, handler, method = _utils_constants_js__rspack_import_1.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__rspack_import_0.assert.isOneOf(method, _utils_constants_js__rspack_import_1.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__rspack_import_2.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__rspack_import_2.normalizeHandler)(handler);
    }
}



},
"./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Router.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Router: () => (Router)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var _utils_constants_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/constants.js");
/* import */ var workbox_core_private_logger_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var _utils_normalizeHandler_js__rspack_import_4 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_5 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_6 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_6);
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
                    workbox_core_private_logger_js__rspack_import_3.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
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
            workbox_core_private_assert_js__rspack_import_0.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__rspack_import_3.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
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
                workbox_core_private_logger_js__rspack_import_3.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__rspack_import_3.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__rspack_import_3.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
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
                        workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__rspack_import_3.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__rspack_import_3.logger.error(err);
                        workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
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
                        workbox_core_private_logger_js__rspack_import_3.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__rspack_import_3.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__rspack_import_3.logger.error(err);
                        workbox_core_private_logger_js__rspack_import_3.logger.groupEnd();
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
                        workbox_core_private_logger_js__rspack_import_3.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_1.getFriendlyURL)(url)}, an async ` +
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
    setDefaultHandler(handler, method = _utils_constants_js__rspack_import_2.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__rspack_import_4.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__rspack_import_4.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__rspack_import_0.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__rspack_import_0.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__rspack_import_0.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__rspack_import_0.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__rspack_import_0.assert.isType(route.method, 'string', {
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
            throw new workbox_core_private_WorkboxError_js__rspack_import_5.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__rspack_import_5.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



},
"./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js"() {

// @ts-ignore
try {
    self['workbox:routing:7.3.0'] && _();
}
catch (e) { }


},
"./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/registerRoute.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerRoute: () => (registerRoute)
});
/* import */ var workbox_core_private_logger_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _Route_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Route.js");
/* import */ var _RegExpRoute_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/RegExpRoute.js");
/* import */ var _utils_getOrCreateDefaultRouter_js__rspack_import_4 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* import */ var _version_js__rspack_import_5 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_5);
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
                throw new workbox_core_private_WorkboxError_js__rspack_import_1.WorkboxError('invalid-string', {
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
                workbox_core_private_logger_js__rspack_import_0.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__rspack_import_0.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__rspack_import_2.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__rspack_import_3.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__rspack_import_2.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__rspack_import_2.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__rspack_import_1.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__rspack_import_4.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



},
"./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/constants.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  defaultMethod: () => (defaultMethod),
  validMethods: () => (validMethods)
});
/* import */ var _version_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_0);
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


},
"./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getOrCreateDefaultRouter: () => (getOrCreateDefaultRouter)
});
/* import */ var _Router_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/Router.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
        defaultRouter = new _Router_js__rspack_import_0.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


},
"./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/utils/normalizeHandler.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  normalizeHandler: () => (normalizeHandler)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* import */ var _version_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-routing@7.4.0/node_modules/workbox-routing/_version.js");
/* import */ var _version_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_1);
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
            workbox_core_private_assert_js__rspack_import_0.assert.hasMethod(handler, 'handle', {
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
            workbox_core_private_assert_js__rspack_import_0.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


},
"./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/Strategy.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Strategy: () => (Strategy)
});
/* import */ var workbox_core_private_cacheNames_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheNames.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var workbox_core_private_logger_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var _StrategyHandler_js__rspack_import_4 = __webpack_require__("./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/StrategyHandler.js");
/* import */ var _version_js__rspack_import_5 = __webpack_require__("./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/_version.js");
/* import */ var _version_js__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_5);
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
        this.cacheName = workbox_core_private_cacheNames_js__rspack_import_0.cacheNames.getRuntimeName(options.cacheName);
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
        const handler = new _StrategyHandler_js__rspack_import_4.StrategyHandler(this, { event, request, params });
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
                throw new workbox_core_private_WorkboxError_js__rspack_import_1.WorkboxError('no-response', { url: request.url });
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
                workbox_core_private_logger_js__rspack_import_2.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__rspack_import_3.getFriendlyURL)(request.url)}', ` +
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


},
"./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/StrategyHandler.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StrategyHandler: () => (StrategyHandler)
});
/* import */ var workbox_core_private_assert_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/assert.js");
/* import */ var workbox_core_private_cacheMatchIgnoreParams_js__rspack_import_1 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* import */ var workbox_core_private_Deferred_js__rspack_import_2 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/Deferred.js");
/* import */ var workbox_core_private_executeQuotaErrorCallbacks_js__rspack_import_3 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* import */ var workbox_core_private_getFriendlyURL_js__rspack_import_4 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* import */ var workbox_core_private_logger_js__rspack_import_5 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/logger.js");
/* import */ var workbox_core_private_timeout_js__rspack_import_6 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/timeout.js");
/* import */ var workbox_core_private_WorkboxError_js__rspack_import_7 = __webpack_require__("./node_modules/.pnpm/workbox-core@7.4.0/node_modules/workbox-core/_private/WorkboxError.js");
/* import */ var _version_js__rspack_import_8 = __webpack_require__("./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/_version.js");
/* import */ var _version_js__rspack_import_8_default = /*#__PURE__*/__webpack_require__.n(_version_js__rspack_import_8);
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
            workbox_core_private_assert_js__rspack_import_0.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__rspack_import_2.Deferred();
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
                    workbox_core_private_logger_js__rspack_import_5.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(request.url)}'`);
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
                throw new workbox_core_private_WorkboxError_js__rspack_import_7.WorkboxError('plugin-error-request-will-fetch', {
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
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(request.url)}' returned a response with ` +
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
                workbox_core_private_logger_js__rspack_import_5.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(request.url)}' threw an error.`, error);
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
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`No cached response found in '${cacheName}'.`);
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
        await (0,workbox_core_private_timeout_js__rspack_import_6.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__rspack_import_7.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__rspack_import_5.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__rspack_import_7.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__rspack_import_5.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__rspack_import_1.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__rspack_import_5.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__rspack_import_4.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__rspack_import_3.executeQuotaErrorCallbacks)();
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
                            workbox_core_private_logger_js__rspack_import_5.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__rspack_import_5.logger.debug(`The response for '${this.request.url}' ` +
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



},
"./node_modules/.pnpm/workbox-strategies@7.4.0/node_modules/workbox-strategies/_version.js"() {

// @ts-ignore
try {
    self['workbox:strategies:7.3.0'] && _();
}
catch (e) { }


},
"./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.mjs"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrecacheController: () => (/* reexport safe */ _index_js__rspack_import_0.PrecacheController),
  PrecacheFallbackPlugin: () => (/* reexport safe */ _index_js__rspack_import_0.PrecacheFallbackPlugin),
  PrecacheRoute: () => (/* reexport safe */ _index_js__rspack_import_0.PrecacheRoute),
  PrecacheStrategy: () => (/* reexport safe */ _index_js__rspack_import_0.PrecacheStrategy),
  addPlugins: () => (/* reexport safe */ _index_js__rspack_import_0.addPlugins),
  addRoute: () => (/* reexport safe */ _index_js__rspack_import_0.addRoute),
  cleanupOutdatedCaches: () => (/* reexport safe */ _index_js__rspack_import_0.cleanupOutdatedCaches),
  createHandlerBoundToURL: () => (/* reexport safe */ _index_js__rspack_import_0.createHandlerBoundToURL),
  getCacheKeyForURL: () => (/* reexport safe */ _index_js__rspack_import_0.getCacheKeyForURL),
  matchPrecache: () => (/* reexport safe */ _index_js__rspack_import_0.matchPrecache),
  precache: () => (/* reexport safe */ _index_js__rspack_import_0.precache),
  precacheAndRoute: () => (/* reexport safe */ _index_js__rspack_import_0.precacheAndRoute)
});
/* import */ var _index_js__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.js");


},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.7.10")
})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.7.10";
})();
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* import */ var workbox_precaching__rspack_import_0 = __webpack_require__("./node_modules/.pnpm/workbox-precaching@7.4.0/node_modules/workbox-precaching/index.mjs");
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
    if (false) {}
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
    const precacheManifest = [{"revision":"2ea93204376ad224491c9ff0bd9bcbc9","url":"tw_stocks.json"},{"revision":"bc93899c79e733da994ca4b58db1bf9b","url":"subscription.html"},{"revision":"971b88d5269766c76e168381b0f5041a","url":"quotes.html"},{"revision":"8d3b797326044a4c1d022caf5005e755","url":"me.html"},{"revision":"4a330aa7ea332a4c12c0023c0b9b9145","url":"market-war-room.html"},{"revision":"9715befd37b5c36a485d102b460e6fa8","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"bdc26f818e53aad9ab57e7ac183263c5","url":"index.html"},{"revision":"ee95e16ff8fb56f18b3bc08c5bf608a7","url":"games.html"},{"revision":"5336e5e642e1bb0f56ccd883db16aa3d","url":"finance.html"},{"revision":"a3b3c744eb400ca0cf47b877d1e74b39","url":"feedback.html"},{"revision":"0fff182b7ad0e701a0fd0564452221bd","url":"arena.html"},{"revision":"de495957d8b6718f75569580c8c01db6","url":"404.html"},{"revision":"95bde708aaad3adea71843282e501cc4","url":"tw_stocks/9958.json"},{"revision":"ac3dec753a5e00c1946bd3a29432d48a","url":"tw_stocks/9955.json"},{"revision":"a798a76d7f5906dc48e5f41816a956d5","url":"tw_stocks/9946.json"},{"revision":"104f78c15155e2d4e7c8961b67626e98","url":"tw_stocks/9945.json"},{"revision":"83734411f94223ec3313cc87103f58c6","url":"tw_stocks/9944.json"},{"revision":"985198c297e1a7e47c620b628e698c8a","url":"tw_stocks/9943.json"},{"revision":"dbb54184ea8b44e16e978cb5ec717ea8","url":"tw_stocks/9942.json"},{"revision":"37d88af0f1c4b42bc8f5f17957c3e850","url":"tw_stocks/9941.json"},{"revision":"3940a9abb047a1143f447a998f53f590","url":"tw_stocks/9940.json"},{"revision":"d927e9883a2481dc78d1cc2b98b9bc09","url":"tw_stocks/9939.json"},{"revision":"390d84f4d87cbc2448fda7e16bc34661","url":"tw_stocks/9938.json"},{"revision":"5af82935378686fdf96ba40896367d70","url":"tw_stocks/9937.json"},{"revision":"8a43e6b49a0038cc5156d4510787d393","url":"tw_stocks/9935.json"},{"revision":"dc8fdfd34846fdfa714f76e661287583","url":"tw_stocks/9934.json"},{"revision":"72bad2dd10b1916b607291947e4b5341","url":"tw_stocks/9933.json"},{"revision":"0aaad8945135ebead4ef5649738af6ef","url":"tw_stocks/9931.json"},{"revision":"3282b72deab512f5b8bd0972bda0cdf7","url":"tw_stocks/9930.json"},{"revision":"a676a95feabab6d56e89ac1a9b64246c","url":"tw_stocks/9929.json"},{"revision":"44fe82e2a9da35ab09b4d4e0c73bb291","url":"tw_stocks/9928.json"},{"revision":"88c7ac31295dd4764ec57b2a98190a42","url":"tw_stocks/9927.json"},{"revision":"62a83b5e1875e4f07703c0ddd066e146","url":"tw_stocks/9926.json"},{"revision":"bc741306d72bbf031d1de92141bf2b8d","url":"tw_stocks/9925.json"},{"revision":"bcf584e061e801949fe7492ba04fb5c5","url":"tw_stocks/9924.json"},{"revision":"41a922236ba6117fe1786d37bccc5c19","url":"tw_stocks/9921.json"},{"revision":"581f7cc639a741bc8bb2fee08b56f8ba","url":"tw_stocks/9919.json"},{"revision":"74affd08b1d4aa49226e2a70dda5c066","url":"tw_stocks/9918.json"},{"revision":"bb0db194c5613c4e2493f9d5d926f9dd","url":"tw_stocks/9917.json"},{"revision":"ac46f5412a961d1910df48fdfd2556ac","url":"tw_stocks/9914.json"},{"revision":"6f50583fd5fc2b9706a21ff16148201a","url":"tw_stocks/9912.json"},{"revision":"5cfa0122572b8ae2083e8ef50903d474","url":"tw_stocks/9911.json"},{"revision":"ea6203b10a2efe5343bb749870ec9376","url":"tw_stocks/9910.json"},{"revision":"c139149d7c32469c032a18d2a81db5c8","url":"tw_stocks/9908.json"},{"revision":"402c403f2c21601d4e278d54ae0a5b87","url":"tw_stocks/9907.json"},{"revision":"c379e25fad19999090e8a86d483b4427","url":"tw_stocks/9906.json"},{"revision":"e48eff4b57d3e4d388b3a71764470039","url":"tw_stocks/9905.json"},{"revision":"7689b59e78d256d238b3731a2d9434d1","url":"tw_stocks/9904.json"},{"revision":"00c073e7e55b46eb994556ce711e1590","url":"tw_stocks/9902.json"},{"revision":"2794a1832cee59d623ee06db07bcb948","url":"tw_stocks/9802.json"},{"revision":"b3de15ed147b8cb00ea24aa1c43b959a","url":"tw_stocks/8996.json"},{"revision":"11645c7edd498cfe12fddbcccf6b42e7","url":"tw_stocks/8940.json"},{"revision":"510bb2ed925075349ee3198945d03970","url":"tw_stocks/8926.json"},{"revision":"125ad472fb2541ce5c1b297079cc902c","url":"tw_stocks/8499.json"},{"revision":"f70b632cd088b3910ee435e1daf3e06e","url":"tw_stocks/8488.json"},{"revision":"ebad4fc37164c6924af02d0120e75378","url":"tw_stocks/8482.json"},{"revision":"05069c3a02ff0821a8aa064231c1b5cf","url":"tw_stocks/8481.json"},{"revision":"364ecacb2f3ae37a0118cc885bca9308","url":"tw_stocks/8478.json"},{"revision":"8dd2cd7087b75fd2aa51df596193447d","url":"tw_stocks/8476.json"},{"revision":"743f5f72929facd351183465c2b4fafc","url":"tw_stocks/8473.json"},{"revision":"bc174baea703334e471b2b26f2a4cb86","url":"tw_stocks/8467.json"},{"revision":"f5e9f82135d9718c26d8f9d83de016a3","url":"tw_stocks/8466.json"},{"revision":"474542a7bd855d40d46df661f003a90a","url":"tw_stocks/8464.json"},{"revision":"64bead97e98574d28a527132385f3985","url":"tw_stocks/8463.json"},{"revision":"fd6a91ee6c500a1fc66e7eb4eef73ea0","url":"tw_stocks/8462.json"},{"revision":"7a9979255e06cadd55fd5fdb4ba65edb","url":"tw_stocks/8454.json"},{"revision":"1fd5434f13a19a8296f090f3aac0163e","url":"tw_stocks/8443.json"},{"revision":"f576f7bcca1cabf7a63e6077aaf04b51","url":"tw_stocks/8442.json"},{"revision":"2c2c96bd71f5b5b527745f0a402636e6","url":"tw_stocks/8438.json"},{"revision":"769ff044fe436873f2b2a2fc5308ec1c","url":"tw_stocks/8429.json"},{"revision":"e720e242a8f5ac3adbb0bf2501d66c44","url":"tw_stocks/8422.json"},{"revision":"a6c4a411d1b3f9c919968f7a4d10c7b6","url":"tw_stocks/8411.json"},{"revision":"7e56ccdf7ecfb9ae0ff1680d78b58f65","url":"tw_stocks/8404.json"},{"revision":"faab40e1bf2403bd8c6f073b1d1f47e8","url":"tw_stocks/8374.json"},{"revision":"1f1b2fbdb2e0ed431a4870bb0a393a58","url":"tw_stocks/8367.json"},{"revision":"20896679b61cbf5f93c4a7f08e3bac3f","url":"tw_stocks/8341.json"},{"revision":"42989f8ea6b0778ad074162a1b38cece","url":"tw_stocks/8271.json"},{"revision":"3a45f6eb30aa15b201a85100eb16fbd2","url":"tw_stocks/8261.json"},{"revision":"8d63b3639388290017e7a23b257c0dfd","url":"tw_stocks/8249.json"},{"revision":"a3854e074b010e9117a0c8c3f324b024","url":"tw_stocks/8222.json"},{"revision":"6e7d1541e4a7f5cb246365dfce040504","url":"tw_stocks/8215.json"},{"revision":"cfc352c1c045dc1721ec123d0f56746b","url":"tw_stocks/8213.json"},{"revision":"a927f7d008ad9d0097d198c7771851e1","url":"tw_stocks/8210.json"},{"revision":"2a69dba9fb772b70b7e9a0d6f4441c01","url":"tw_stocks/8201.json"},{"revision":"ceb633b8feb9129554a071a81b75e2f9","url":"tw_stocks/8163.json"},{"revision":"16a1c23dd68143fd6f443b10a02e3fbf","url":"tw_stocks/8150.json"},{"revision":"814a270de741285ab709778625f715a8","url":"tw_stocks/8131.json"},{"revision":"0931259b016e526f40e502c936b2b778","url":"tw_stocks/8114.json"},{"revision":"21917f235a8ab9a5a6f415dd1237b7b7","url":"tw_stocks/8112.json"},{"revision":"ada63f6360700675f708453a7cb4e1dd","url":"tw_stocks/8110.json"},{"revision":"e2fb0fd6af20f385f78091b0ca27ebe2","url":"tw_stocks/8105.json"},{"revision":"aaa07e8de2756e82bb06fa4c512f35c5","url":"tw_stocks/8104.json"},{"revision":"460890edaa82a456ad4b27275d56b20e","url":"tw_stocks/8103.json"},{"revision":"60ca3b9b20b28157e5129726a218e584","url":"tw_stocks/8101.json"},{"revision":"3170132e06bc72a4f31557bdbb87badb","url":"tw_stocks/8081.json"},{"revision":"6e85e64d0c2794de5dc26cf9550e1661","url":"tw_stocks/8072.json"},{"revision":"1e97a982d15ca9c3e21bf59149cbf7be","url":"tw_stocks/8070.json"},{"revision":"6997d4bcac2a952d2f5c21c815ddd44c","url":"tw_stocks/8046.json"},{"revision":"448cfb9f0aa07939c0e12cf55ceb87bc","url":"tw_stocks/8045.json"},{"revision":"132c8902e41ebbc7e8bddc888860ec5e","url":"tw_stocks/8039.json"},{"revision":"3db16bc63820363e8eb988cd1f6dc98d","url":"tw_stocks/8033.json"},{"revision":"22c905770e5074c7bca39573a0842e18","url":"tw_stocks/8028.json"},{"revision":"71e080847b1a77ae5d7a6e85517b8ed8","url":"tw_stocks/8021.json"},{"revision":"7953c2732a9c3898ce838de69de3cfb8","url":"tw_stocks/8016.json"},{"revision":"5970449bec63a81d28acbdb6b2c8c202","url":"tw_stocks/8011.json"},{"revision":"05d946018bc2ccc1b9379ad54f29e6d2","url":"tw_stocks/7822.json"},{"revision":"a1e322dbdb542f68e086d338949343e9","url":"tw_stocks/7821.json"},{"revision":"5eb0a6984d487840543cd537f8f7ae26","url":"tw_stocks/7818.json"},{"revision":"a211efd4805e64ba5a914655b1b12b20","url":"tw_stocks/7799.json"},{"revision":"cb4d8b7d7b240735a8d74606f6dbcdcc","url":"tw_stocks/7795.json"},{"revision":"e4bb63424da6842f5836bbf01a776b4c","url":"tw_stocks/7791.json"},{"revision":"d7b6f1bd2ba51535d63dfbccc17d23f9","url":"tw_stocks/7788.json"},{"revision":"3ffa341a4fb7bd53c43f26374c9d204d","url":"tw_stocks/7786.json"},{"revision":"2b456194314106e695f3974a43495af2","url":"tw_stocks/7780.json"},{"revision":"16a9e53160f79df4f359ca185e271b6c","url":"tw_stocks/7769.json"},{"revision":"80d967287bd6b04199b0ad8bd911c34d","url":"tw_stocks/7768.json"},{"revision":"147dbc486f0742a7d3145deddbcd0ec0","url":"tw_stocks/7765.json"},{"revision":"0a40815991c60be716efdfd7bef75707","url":"tw_stocks/7760.json"},{"revision":"f7121fe9fba5a03baf9985527307c955","url":"tw_stocks/7750.json"},{"revision":"0b4d4ef5f2f9d96270fddd33a498618d","url":"tw_stocks/7749.json"},{"revision":"94fc17801ad79858a8ac03c212842c4a","url":"tw_stocks/7736.json"},{"revision":"4e1518b1af60ea1d5514f6421b621bb5","url":"tw_stocks/7732.json"},{"revision":"f1ba5bbb537c3159a3bddcd90d577688","url":"tw_stocks/7722.json"},{"revision":"0e305ab241ba0f5347fb7d3e8b5f7693","url":"tw_stocks/7721.json"},{"revision":"3b2f30eb27be213b1508dd3a7f5a026f","url":"tw_stocks/7711.json"},{"revision":"af29a96bf2bcfa708bdd84d1eb022474","url":"tw_stocks/7705.json"},{"revision":"0b499e61de415a99d2b63c65fcf23407","url":"tw_stocks/6994.json"},{"revision":"5e6208d500e2d7dd2b2cc24b95e72784","url":"tw_stocks/6965.json"},{"revision":"1cdeafe9a929d5863e34b48552bad8d8","url":"tw_stocks/6962.json"},{"revision":"efd5bd61f1e595e4f48b33b854283c37","url":"tw_stocks/6958.json"},{"revision":"1b67295c3f1019df99ecef687dbdeb68","url":"tw_stocks/6957.json"},{"revision":"8bc6039a1227e32e0900b22b8a938eb7","url":"tw_stocks/6952.json"},{"revision":"4a3239dd63359a5c81097fbcd51ac3e1","url":"tw_stocks/6944.json"},{"revision":"2c7cda9fec2de2a121809f5e06edd9ec","url":"tw_stocks/6937.json"},{"revision":"6b9f4295e19e56a53defcb78a7bb2ffa","url":"tw_stocks/6936.json"},{"revision":"30732f15b2f59455e34d5f4542887c3b","url":"tw_stocks/6934.json"},{"revision":"b40f93e1b71685690d1d09883a3e291c","url":"tw_stocks/6933.json"},{"revision":"6b7c4ca24b0825187db62a0b3f5a1547","url":"tw_stocks/6931.json"},{"revision":"8cda952b5570e54c49a8cfa62264be6d","url":"tw_stocks/6928.json"},{"revision":"d5809ee475d708cda55abe2442e4573f","url":"tw_stocks/6923.json"},{"revision":"dc93efe0544dbe580decd2254025a783","url":"tw_stocks/6919.json"},{"revision":"b66630c5a8c026a823cbd7b4a31d4543","url":"tw_stocks/6918.json"},{"revision":"827a834e7cc1689b0d81df21f10bc54a","url":"tw_stocks/6916.json"},{"revision":"cf076e42bcb184049f4868991a38b99a","url":"tw_stocks/6914.json"},{"revision":"be3bfc2836e02a4bcac2832487102b18","url":"tw_stocks/6909.json"},{"revision":"aa52da9487a292f98bdc5e4e34fc68b8","url":"tw_stocks/6906.json"},{"revision":"94e4b8db21a08683ee802256098c9b97","url":"tw_stocks/6902.json"},{"revision":"912402f69fc708a3188d427000efd015","url":"tw_stocks/6901.json"},{"revision":"ee66ee5e1b2c0d90aa1b96a80ad40caa","url":"tw_stocks/6890.json"},{"revision":"33b8fdd3db299676c0b387fbc3558596","url":"tw_stocks/6887.json"},{"revision":"63e554fe47eadba5ef6de7ed9605eed1","url":"tw_stocks/6885.json"},{"revision":"d85d44564333d16f235dacfc989c7dab","url":"tw_stocks/6873.json"},{"revision":"4d43c71562d727834464a860eff7a0f3","url":"tw_stocks/6869.json"},{"revision":"1562bb8f57c6c84102b30425988514f9","url":"tw_stocks/6863.json"},{"revision":"caea70e4b5b0a545716124fafe7542ae","url":"tw_stocks/6862.json"},{"revision":"2fdf98bbe14972fd3b09eac286be3cbe","url":"tw_stocks/6861.json"},{"revision":"cebbe6b776c597d9bdd538475740a78f","url":"tw_stocks/6838.json"},{"revision":"1a9166f773eaec68199efb4d3c6b9be5","url":"tw_stocks/6835.json"},{"revision":"d24e5566bbfe504b0ab9b92f0cb42572","url":"tw_stocks/6834.json"},{"revision":"5fee1574f4fd4350610cdec51afc8067","url":"tw_stocks/6831.json"},{"revision":"91cd768634b647fe9664a256062fd06d","url":"tw_stocks/6830.json"},{"revision":"bd7137ee535d971c78e1cf161ec2fc0c","url":"tw_stocks/6807.json"},{"revision":"dfa819060f7ddd3ec5b7684bf4c1f0d5","url":"tw_stocks/6806.json"},{"revision":"796251d3985b9420533450bf35f262a8","url":"tw_stocks/6805.json"},{"revision":"96f13c0b1b8b93e2a81be517bd40a29b","url":"tw_stocks/6799.json"},{"revision":"2ab8bc5449732026202b6fb96cb15953","url":"tw_stocks/6796.json"},{"revision":"53b52518817e762a6e503d8f99631606","url":"tw_stocks/6794.json"},{"revision":"6d7948865ceda41375988a181703142f","url":"tw_stocks/6792.json"},{"revision":"cbe8650088bd0497ca6568dec63375d4","url":"tw_stocks/6790.json"},{"revision":"1425b9f9905e7dbd495ec782532eb5ba","url":"tw_stocks/6789.json"},{"revision":"dbd4051182d5620eb82078cd885b96ed","url":"tw_stocks/6782.json"},{"revision":"6a3605c684fdf6f02df6070ef923be2b","url":"tw_stocks/6781.json"},{"revision":"302aae22de18b56454ba1d3c35d871a0","url":"tw_stocks/6776.json"},{"revision":"2725c07bab965e8c4d9e3910c92d51de","url":"tw_stocks/6770.json"},{"revision":"fc2f693813d8e1ae8dc42d24db4513d4","url":"tw_stocks/6768.json"},{"revision":"8378741ffb1c25937ad01c1234a3bbcf","url":"tw_stocks/6757.json"},{"revision":"d3c408da9663952f6e5e52bbb8388304","url":"tw_stocks/6756.json"},{"revision":"1f79cd21e995dcaad532c6c87ee13ef9","url":"tw_stocks/6754.json"},{"revision":"945fbd36e5916c61b03bfb74ddd97568","url":"tw_stocks/6753.json"},{"revision":"80f2706e5016c5b84c3c6fa20caf3ad2","url":"tw_stocks/6743.json"},{"revision":"b3447468e6d2d53a2ae1c4f4759bd748","url":"tw_stocks/6742.json"},{"revision":"b62edacbdba89b8edfdfeaf480b080e7","url":"tw_stocks/6722.json"},{"revision":"995fb35489a4d7cd952fc868b198c727","url":"tw_stocks/6719.json"},{"revision":"44fd48347477cd9f7f7380063cb28540","url":"tw_stocks/6715.json"},{"revision":"129fa5ea856fd188e2aa83699970858e","url":"tw_stocks/6706.json"},{"revision":"0f2e5bb2de12def2a3c237349acf4c31","url":"tw_stocks/6698.json"},{"revision":"fede5552820d04669075979e5d20b475","url":"tw_stocks/6695.json"},{"revision":"a53ff00b1a8f90a49221b4d31b0a7623","url":"tw_stocks/6691.json"},{"revision":"a59ff3016b6e9240aea4b69d3a2893e5","url":"tw_stocks/6689.json"},{"revision":"ac9b03f143aada41c78b57e014462fb0","url":"tw_stocks/6674.json"},{"revision":"b6f3c2f280293cca524220304cf16d29","url":"tw_stocks/6672.json"},{"revision":"302978b54f17351c9525da05f5b65d71","url":"tw_stocks/6671.json"},{"revision":"5d76dc33eb400a677f79cc0b88f1a2e4","url":"tw_stocks/6670.json"},{"revision":"89a6cbf0a9b8b2fc6f7c5d1c122d79cb","url":"tw_stocks/6669.json"},{"revision":"d5bfc3558ba5611340f8ee57f07df6b4","url":"tw_stocks/6668.json"},{"revision":"6a11e72e4c8833ed79f41a6e73181592","url":"tw_stocks/6666.json"},{"revision":"c3f42093cbb45fe78f4955ecf99bf279","url":"tw_stocks/6658.json"},{"revision":"6063579ac5fa56bd7f98e55010ca18cc","url":"tw_stocks/6657.json"},{"revision":"00b648de234d814f5879002f0676bc5e","url":"tw_stocks/6655.json"},{"revision":"c969cacf12fd3341616961b20fac7115","url":"tw_stocks/6641.json"},{"revision":"6e459fc5c2bfaac0f096e34334549ac9","url":"tw_stocks/6625.json"},{"revision":"6853ddd20bedbcac8aa4fa2431463c14","url":"tw_stocks/6614.json"},{"revision":"cdfea5f962cc4c41c9c20536002c0c86","url":"tw_stocks/6606.json"},{"revision":"dfa6bbeb5f55a3577e23f00f73f569c8","url":"tw_stocks/6605.json"},{"revision":"a3b4792391ae8728c77fc683cc02df8b","url":"tw_stocks/6598.json"},{"revision":"8c06b4176c3fd3f51487562f6f676e5b","url":"tw_stocks/6592.json"},{"revision":"265a3f61e58f1de4a7bff084fcfaa41b","url":"tw_stocks/6591.json"},{"revision":"2eb750ef0eedf155da4dd0fa364bbe89","url":"tw_stocks/6589.json"},{"revision":"2faeba1f25f636b9cb16bd7482304659","url":"tw_stocks/6585.json"},{"revision":"04fce981dca81119557b228e7a6f8141","url":"tw_stocks/6582.json"},{"revision":"106d071d8510e4360093e74dd75dc7df","url":"tw_stocks/6581.json"},{"revision":"8ffc7e438f139c15bd295540cbe88507","url":"tw_stocks/6579.json"},{"revision":"08b822e1a73fb81390ccfbe7ccc2d0a0","url":"tw_stocks/6573.json"},{"revision":"c127da8629a03cf8032f5ee344a5bdc7","url":"tw_stocks/6558.json"},{"revision":"b747429ecefda77063d27d8e42ae9cb9","url":"tw_stocks/6552.json"},{"revision":"f3b6bb2130c410aafe2e8c139fc302d9","url":"tw_stocks/6550.json"},{"revision":"d4b099557522b9373d64e83278f977eb","url":"tw_stocks/6541.json"},{"revision":"f667b0652d97569cf533d3b58bc89213","url":"tw_stocks/6533.json"},{"revision":"9188690e4822172addc287b30050659c","url":"tw_stocks/6531.json"},{"revision":"4046c18094e632f4163a76184b6f522f","url":"tw_stocks/6526.json"},{"revision":"2bacdf8344e5423dfd9bc93d3b884659","url":"tw_stocks/6525.json"},{"revision":"e24db5a55f62860b0f3829a935d3372c","url":"tw_stocks/6515.json"},{"revision":"335bd018cb53b75ce9465f1f1926b3a1","url":"tw_stocks/6505.json"},{"revision":"4769f0b1f64c60b4dfa3329ae5ef23ad","url":"tw_stocks/6504.json"},{"revision":"853c5ac8705f868aaf784dde99ca1fc3","url":"tw_stocks/6491.json"},{"revision":"f016f88edb366c2d4be8b59d3884d085","url":"tw_stocks/6477.json"},{"revision":"807480f3c1d03b83a87710271d9205e7","url":"tw_stocks/6472.json"},{"revision":"88b94051fa54ee2525c294f822a81c4c","url":"tw_stocks/6464.json"},{"revision":"16fd7230fd0f0bd5daf2cc81231ac89b","url":"tw_stocks/6456.json"},{"revision":"0fe794df5a8ccb61f21dc318e2116eaf","url":"tw_stocks/6451.json"},{"revision":"99340854764b5f3412808c9da24a41dd","url":"tw_stocks/6449.json"},{"revision":"3b95eca196caad8b65f0208024aa9903","url":"tw_stocks/6446.json"},{"revision":"c0e8675c9e13ee025307b39c21c276cd","url":"tw_stocks/6443.json"},{"revision":"1fd9644106e7b1aaf65f7887770ce967","url":"tw_stocks/6442.json"},{"revision":"aa5acd65e1c2ced7757e50343c7cf568","url":"tw_stocks/6438.json"},{"revision":"b2a93d2195894f58cf4ab0a247d1fbad","url":"tw_stocks/6431.json"},{"revision":"eebec78bfdb9bf57fa18a9e19d9a3e7d","url":"tw_stocks/6426.json"},{"revision":"3c5c8f063fb20d0a59ea959431803a84","url":"tw_stocks/6416.json"},{"revision":"7f2fd487992e262b45c9fcf78c38cf11","url":"tw_stocks/6415.json"},{"revision":"b0caf3c7cada4719e53a82316a047cd7","url":"tw_stocks/6414.json"},{"revision":"906c083e48788db8c5b5b6774eef6b8a","url":"tw_stocks/6412.json"},{"revision":"e97fd06641338ea265be3b6220889aa0","url":"tw_stocks/6409.json"},{"revision":"464d3d18d9df641af3fdeff352a7fa61","url":"tw_stocks/6405.json"},{"revision":"d23e89d8cfa937bc31f517c8d0a05c1c","url":"tw_stocks/6285.json"},{"revision":"823cc9ceb3d6581db779594135f19c71","url":"tw_stocks/6283.json"},{"revision":"275c0c3eee4bf9f7e0617f6cbc96fc6e","url":"tw_stocks/6282.json"},{"revision":"1d9539b8671e6259c227b239283c5254","url":"tw_stocks/6281.json"},{"revision":"75301969b77f1d6ce07cd2ae8e12bd1d","url":"tw_stocks/6278.json"},{"revision":"d1814b7d9cc652a8938a02596bfaac5a","url":"tw_stocks/6277.json"},{"revision":"9c1a05b3f4f615d4f42756f0d5af03e1","url":"tw_stocks/6272.json"},{"revision":"5045241d2ebdc4dacd45832844271edb","url":"tw_stocks/6271.json"},{"revision":"90a0ea5cc0193f3faca3318a09666efb","url":"tw_stocks/6269.json"},{"revision":"68e7aa57600fd6b53f797d157f9ed83a","url":"tw_stocks/6257.json"},{"revision":"0904696e146a773e77a7579a9a3a61eb","url":"tw_stocks/6243.json"},{"revision":"15ba633462a463f26f78445f0c8eae89","url":"tw_stocks/6239.json"},{"revision":"0c3916bfef7ab3a249764fb62e666bcf","url":"tw_stocks/6235.json"},{"revision":"f32f540edbab3af99b229cfe876b3a28","url":"tw_stocks/6230.json"},{"revision":"9bcfc6bb2e6aa76f699d6605297fdc16","url":"tw_stocks/6226.json"},{"revision":"aa0e5bdd5779145f295fa906af3d6f57","url":"tw_stocks/6225.json"},{"revision":"194894578e2079b9b3ffa08141664e9a","url":"tw_stocks/6224.json"},{"revision":"469673d1cb7a3adb29e5daeeaec93a37","url":"tw_stocks/6216.json"},{"revision":"d7fdf11526cc18e5a319e13b6a762703","url":"tw_stocks/6215.json"},{"revision":"da2439ea36ade8e8d89ab2f890a810d4","url":"tw_stocks/6214.json"},{"revision":"9627365577529fc1da4b97b129efbfb0","url":"tw_stocks/6213.json"},{"revision":"7174a3eb9693cf813114b74a1ffdef9d","url":"tw_stocks/6209.json"},{"revision":"8e1b64a672d9acbd0786894ab49fc35e","url":"tw_stocks/6206.json"},{"revision":"256c37951cc74ec2c0aea7a248fa8618","url":"tw_stocks/6205.json"},{"revision":"55d1721039071c614f9b96bca9a229c3","url":"tw_stocks/6202.json"},{"revision":"e87611246f36b529bdd74dbb9095b91f","url":"tw_stocks/6201.json"},{"revision":"0f1566688a7d3ee78e1fba5090c12d68","url":"tw_stocks/6197.json"},{"revision":"62936fe92e83b7d88a5bc36a6b4ef266","url":"tw_stocks/6196.json"},{"revision":"20021758e7a77cc486044d333739b24a","url":"tw_stocks/6192.json"},{"revision":"306f057ff65d8c02bd9b7f8331fea39f","url":"tw_stocks/6191.json"},{"revision":"ccda466c58d72f545dfe8c60e82917fe","url":"tw_stocks/6189.json"},{"revision":"6068d47d54ac82bfcf815d7787b9a64e","url":"tw_stocks/6184.json"},{"revision":"9f3bf25c8739ae70695bc85dd0e2689f","url":"tw_stocks/6183.json"},{"revision":"4a77214095d481ac8eea3fd2dbe37e0c","url":"tw_stocks/6177.json"},{"revision":"3a7fb86b1b3c30f2bb3ee5fcc9572d77","url":"tw_stocks/6176.json"},{"revision":"3e033eeb25219ce418257460428c4a78","url":"tw_stocks/6168.json"},{"revision":"3966ce72b9486b2c5809d9e596378180","url":"tw_stocks/6166.json"},{"revision":"292eabaeb239863e0b4f7dcf70d87e5e","url":"tw_stocks/6165.json"},{"revision":"53dcb5d3b65d181778a92fc16d31dbcb","url":"tw_stocks/6164.json"},{"revision":"3d06f0e75829f018616437977fc21783","url":"tw_stocks/6155.json"},{"revision":"caff01865f202ad0da127017bcd61708","url":"tw_stocks/6153.json"},{"revision":"5e9978f32aa1e4843f041d9bc041f8df","url":"tw_stocks/6152.json"},{"revision":"ef513b0d27982a57e7992125701b6c4b","url":"tw_stocks/6142.json"},{"revision":"3a799fa8497064aa800c61ffd3d6bcb6","url":"tw_stocks/6141.json"},{"revision":"3e4d642e5319eec924be84f2f5fa685c","url":"tw_stocks/6139.json"},{"revision":"c6e1f612a96ceac5a36b79733a330312","url":"tw_stocks/6136.json"},{"revision":"4c68780550ba3cbc61efc668b43ecb48","url":"tw_stocks/6133.json"},{"revision":"0676af6347f565ac84e4712bf495a56a","url":"tw_stocks/6128.json"},{"revision":"5f78f7ba3f1cb700b0dec50e63912041","url":"tw_stocks/6120.json"},{"revision":"3a3cd2d6d495221d549ece0c1c36c225","url":"tw_stocks/6117.json"},{"revision":"9f2976bb155940eded799731d1d64a43","url":"tw_stocks/6116.json"},{"revision":"74073f531c7e0670dff09861d5f5169c","url":"tw_stocks/6115.json"},{"revision":"b5440f59bf17dedd2ee82187c25cc6ad","url":"tw_stocks/6112.json"},{"revision":"d1811e53a767122ad25df31ef9496fa1","url":"tw_stocks/6108.json"},{"revision":"c8577eb8f672acd437265fd48973734b","url":"tw_stocks/6024.json"},{"revision":"5cf4be688abd6677378fc1ba87a00c8f","url":"tw_stocks/6005.json"},{"revision":"b8156cdd2401ea6b811bec4a9c15b73b","url":"tw_stocks/5907.json"},{"revision":"8d07d482f869312367bc5df53cf12dd1","url":"tw_stocks/5906.json"},{"revision":"cd233488d50e89ff1d2458de0b564c66","url":"tw_stocks/5880.json"},{"revision":"bb530d67c36adf0a1428f3f8e64e4167","url":"tw_stocks/5876.json"},{"revision":"8155e74a4be854a9384378e3fe9e1f39","url":"tw_stocks/5871.json"},{"revision":"f7edf0aa71b563998b306d8af230fc22","url":"tw_stocks/5706.json"},{"revision":"e08bba7463839eef0423fe2371dac3b3","url":"tw_stocks/5608.json"},{"revision":"38f10702fb9c03e1a29af4071b59ec95","url":"tw_stocks/5607.json"},{"revision":"7ad6459e3ad58b744e56f6aff208ec45","url":"tw_stocks/5546.json"},{"revision":"6fdf7cbdeb7993404f16d737d38b3960","url":"tw_stocks/5538.json"},{"revision":"ed665465ff3f29ff8805677f5d3531fd","url":"tw_stocks/5534.json"},{"revision":"8a2a9c7f9bf86af2b00f7d98f4223804","url":"tw_stocks/5533.json"},{"revision":"f0a256c648ae32d717a042136c6a8252","url":"tw_stocks/5531.json"},{"revision":"8d785f9c683f2d8399ac8ada6d53c7e6","url":"tw_stocks/5525.json"},{"revision":"deafa4685f7455ea7497ac519ff8d2bd","url":"tw_stocks/5522.json"},{"revision":"19d25ed629c300747122a1dacbc055ca","url":"tw_stocks/5521.json"},{"revision":"2c9c44de929b8c001f026c3eea33ff92","url":"tw_stocks/5519.json"},{"revision":"461a0024001728c6279932a58ff189c1","url":"tw_stocks/5515.json"},{"revision":"134b253d1f5bd4aef718044c821633dc","url":"tw_stocks/5484.json"},{"revision":"998f6191eeb15984cff1e399eafbaec0","url":"tw_stocks/5471.json"},{"revision":"8aa253f1140987b15df5564dbd195121","url":"tw_stocks/5469.json"},{"revision":"34240aee2bce035c0914df8adea7ff1b","url":"tw_stocks/5434.json"},{"revision":"9af7b5eccb16e50e7e387f9be4fcc43f","url":"tw_stocks/5388.json"},{"revision":"910535f834ca3385d28b281c8fa76bf9","url":"tw_stocks/5306.json"},{"revision":"c276e8b38c428fd2c56d277e060839e5","url":"tw_stocks/5292.json"},{"revision":"103ad5e7f9ad439a627b14c8f14eeb7a","url":"tw_stocks/5288.json"},{"revision":"0a8538bd33c2cd81fa290223c3d95521","url":"tw_stocks/5285.json"},{"revision":"be25b385d21a9e365d95911dd8356751","url":"tw_stocks/5284.json"},{"revision":"97a7a6248665a0240acbf39254c66e5e","url":"tw_stocks/5283.json"},{"revision":"ebb101c12c3c2f7d4d55595b94675165","url":"tw_stocks/5269.json"},{"revision":"d5733078a838403cafabac54bd124914","url":"tw_stocks/5258.json"},{"revision":"4a01185469d373bb3b6d26219fee4d7e","url":"tw_stocks/5244.json"},{"revision":"7e9f294b692cc86dfac4f9e372099889","url":"tw_stocks/5243.json"},{"revision":"e5f00ab455d80f6cd07d7a28ad9014b1","url":"tw_stocks/5234.json"},{"revision":"404deb0913d50d48f0479e3412a9a107","url":"tw_stocks/5225.json"},{"revision":"cfdb0a6a66abaa8d91e57c89bc309993","url":"tw_stocks/5222.json"},{"revision":"cfadc145ddd9d4e58e4ba8f442dd3fd9","url":"tw_stocks/5215.json"},{"revision":"c91d39fec8c9647d02e3212ac4338f1a","url":"tw_stocks/5203.json"},{"revision":"a1b0759479f8874f3949a453ce70aa7c","url":"tw_stocks/5007.json"},{"revision":"7c3d61cf78d8f936e28b94acf93b2981","url":"tw_stocks/4999.json"},{"revision":"f7a063bf37859df138dbd4eafba4087c","url":"tw_stocks/4994.json"},{"revision":"008c04db883c5dbb57e01fa1cf6ee389","url":"tw_stocks/4989.json"},{"revision":"849bfeb0f69002f96613aa0b491003ef","url":"tw_stocks/4977.json"},{"revision":"5a6a98fbd1c6d2d39490ec557285dbec","url":"tw_stocks/4976.json"},{"revision":"6236a933cafc9124d4a3aa4d3f27eff0","url":"tw_stocks/4968.json"},{"revision":"e633692a2674ec8754b0d2eac1f48a5e","url":"tw_stocks/4967.json"},{"revision":"943887e53c182754a10e68fbdf65eb90","url":"tw_stocks/4961.json"},{"revision":"65e0fce24975c50d3ac8f50c0d3fbe20","url":"tw_stocks/4960.json"},{"revision":"1ed7f14589c8c01771c100b3639039e1","url":"tw_stocks/4958.json"},{"revision":"fc7cebec6c9da6af95c2467602d7803e","url":"tw_stocks/4956.json"},{"revision":"cd10c5b33029af6ab19a45f40ede740e","url":"tw_stocks/4952.json"},{"revision":"322b506cb116e2039da84536de3ae2ce","url":"tw_stocks/4949.json"},{"revision":"324446a3ef842526c29803c23971bee0","url":"tw_stocks/4943.json"},{"revision":"1c1b7b9d2866d10fc4e66ea2362ebcea","url":"tw_stocks/4942.json"},{"revision":"68cb994dcab6bb98e66def6488d098a8","url":"tw_stocks/4938.json"},{"revision":"bfd10e0236c64293cae40fd149b095d0","url":"tw_stocks/4935.json"},{"revision":"8f67b7226a339cc49789d55fcfdddd06","url":"tw_stocks/4934.json"},{"revision":"ecfd57ad50604e318534d7122d5bec09","url":"tw_stocks/4930.json"},{"revision":"be6d2f922ca786362df0d7afc8c4526a","url":"tw_stocks/4927.json"},{"revision":"507526f4144d5f573b30c15da597b265","url":"tw_stocks/4919.json"},{"revision":"563e2bf08b95b3822e42e27f7073cc7a","url":"tw_stocks/4916.json"},{"revision":"53aed9a48a1b38388e4f01a019b817ba","url":"tw_stocks/4915.json"},{"revision":"9e3fddb02ade77cd66e908dcdc6b843f","url":"tw_stocks/4912.json"},{"revision":"ea1d608605154ea676f43285d2ae65b7","url":"tw_stocks/4906.json"},{"revision":"b80b20b788a95bd9d64c540811521d6f","url":"tw_stocks/4904.json"},{"revision":"9701e47f0595600a2232fff9229b903b","url":"tw_stocks/4807.json"},{"revision":"5eb6e697343f667eeb7a33fcf9a2bce5","url":"tw_stocks/4771.json"},{"revision":"557e7d4aeffbe8fd0813e0d0634a3885","url":"tw_stocks/4770.json"},{"revision":"d1744f15cc3200a83f43cff7aa10fc87","url":"tw_stocks/4766.json"},{"revision":"123db429ff54101fda92e5082b08cbb1","url":"tw_stocks/4764.json"},{"revision":"95dcf2d6b1a4b8175d65f715359a8f29","url":"tw_stocks/4763.json"},{"revision":"adab3d216839d4628601fcb40dfd2bd8","url":"tw_stocks/4755.json"},{"revision":"c0922e426ba39f8bb9c2f3d99af74804","url":"tw_stocks/4746.json"},{"revision":"e1be6e49fdf3dcfab48011adb0607b8b","url":"tw_stocks/4739.json"},{"revision":"f0937c59624d0de7cdf96a4b485e3f53","url":"tw_stocks/4737.json"},{"revision":"6babaef138e953ca667afc388ffa84c5","url":"tw_stocks/4736.json"},{"revision":"d7a117c786982481720d466e83f9192b","url":"tw_stocks/4722.json"},{"revision":"75ce8df0c6bcbb11fc5b20365acee673","url":"tw_stocks/4720.json"},{"revision":"a31d85c38c6fa0a98d4ca27629cb06f1","url":"tw_stocks/4588.json"},{"revision":"12223e783ff1d1301b69ccdcbd4a3bba","url":"tw_stocks/4585.json"},{"revision":"62218a147d63bc7c18667667a1323260","url":"tw_stocks/4583.json"},{"revision":"1852cd9890aba1b82a0686cc6d5f3fe0","url":"tw_stocks/4581.json"},{"revision":"fba97e145319513984dbb188fa850470","url":"tw_stocks/4576.json"},{"revision":"6963a8fb740867f93a03e71f6fee379c","url":"tw_stocks/4572.json"},{"revision":"41b325f03015fc0d5b8438e581262e0f","url":"tw_stocks/4571.json"},{"revision":"187a448b606cb1f4d7eea5607303b12c","url":"tw_stocks/4569.json"},{"revision":"c0e963026ff6a4598b379f0c03b8e2ad","url":"tw_stocks/4566.json"},{"revision":"814bac8068a9893b28ab565863c4018a","url":"tw_stocks/4564.json"},{"revision":"f7e667f609be03832922f7a604989d4f","url":"tw_stocks/4562.json"},{"revision":"d643286b1caaa2e613c327cfcfe34c66","url":"tw_stocks/4560.json"},{"revision":"ee0a4a8c3fef3b9d84244eb5acfe52ca","url":"tw_stocks/4557.json"},{"revision":"b8185c4d6661dad1c1639b9c6af9fee1","url":"tw_stocks/4555.json"},{"revision":"fbce3d2b3f3a70212ac79d2f24362411","url":"tw_stocks/4552.json"},{"revision":"b00736de480766e65d60e506a6a54de6","url":"tw_stocks/4551.json"},{"revision":"0713565e9078e1f3ca51d498eca47f0c","url":"tw_stocks/4545.json"},{"revision":"0d6433c5b2d0feede8b37e1687442495","url":"tw_stocks/4540.json"},{"revision":"fd44a952a4461bae33ca50bb9f303f8b","url":"tw_stocks/4536.json"},{"revision":"b0197895cb0f10743d91fd907c080122","url":"tw_stocks/4532.json"},{"revision":"7516d0055083ab747fe1a628c76d9fe7","url":"tw_stocks/4526.json"},{"revision":"d20f714d1847c9d5a43d350a67202ba6","url":"tw_stocks/4441.json"},{"revision":"11f06cc4aa744a39e3c5e08fb4e4f741","url":"tw_stocks/4440.json"},{"revision":"824f651e0f1ab521c8381694324d26d1","url":"tw_stocks/4439.json"},{"revision":"86200ea8bed9044253a29f5a13b7791f","url":"tw_stocks/4438.json"},{"revision":"d3a0e2a1d835977faa0b91dbedff215e","url":"tw_stocks/4426.json"},{"revision":"bce77ce42bdec7d3bcc634e624859e85","url":"tw_stocks/4414.json"},{"revision":"62635d9aa85228e6b74ed40203edd00c","url":"tw_stocks/4306.json"},{"revision":"a4dcaefd6579a998dfbdd60523fa97af","url":"tw_stocks/4190.json"},{"revision":"f607e7bfb328c19c5ba13dcc94cf8dcf","url":"tw_stocks/4178.json"},{"revision":"5d2f7ea3a745851325c73842c9cb5483","url":"tw_stocks/4169.json"},{"revision":"ed455299eabd11a6e4e609af545c08f4","url":"tw_stocks/4164.json"},{"revision":"f4dd3bb73539e2a335678b16dbc1d281","url":"tw_stocks/4155.json"},{"revision":"6d118a5853343ce5a1cec99edc71dec6","url":"tw_stocks/4148.json"},{"revision":"ce83653ba23dedb62f9e2acda6ef0bdd","url":"tw_stocks/4142.json"},{"revision":"6ddca7dc6fa613d35c3c583bc5411543","url":"tw_stocks/4137.json"},{"revision":"c8228f7a555e2160c485cf055d959be7","url":"tw_stocks/4133.json"},{"revision":"642c4ced9aabbb608a61f2e5000ec33e","url":"tw_stocks/4119.json"},{"revision":"e3bc7c8af3838fcee18f4429a265910f","url":"tw_stocks/4108.json"},{"revision":"42bf9b1d3895c01051f76e7509fa8999","url":"tw_stocks/4106.json"},{"revision":"266c2b71e3527b7ec5cfe2f1eea17270","url":"tw_stocks/4104.json"},{"revision":"89c9621351778973b2e76fd8b892d38c","url":"tw_stocks/3717.json"},{"revision":"73efd83726b09f0c4ee3ddea85a68e6f","url":"tw_stocks/3716.json"},{"revision":"da438e81dc6cd49d60e9b694c46ee313","url":"tw_stocks/3715.json"},{"revision":"a7f149b314f33a5902c794d4b940d135","url":"tw_stocks/3714.json"},{"revision":"fb1cdf8b45a5f211efbdeaec2accd861","url":"tw_stocks/3712.json"},{"revision":"7d3241be35ac4d76b935c9315b18c20d","url":"tw_stocks/3711.json"},{"revision":"a0735961ae5ad7c75e460d80c57d299b","url":"tw_stocks/3708.json"},{"revision":"15e1cc97421094d762cccb9d8b83e8ff","url":"tw_stocks/3706.json"},{"revision":"c14707cf4cfa6b4c97a4d942a2472c1b","url":"tw_stocks/3705.json"},{"revision":"f4d49f903001bc22cb597cf0b94eb174","url":"tw_stocks/3704.json"},{"revision":"b5f899aef57a16b904bc753552688e02","url":"tw_stocks/3703.json"},{"revision":"db3f91db0a4ba151ddfcdf03c874c773","url":"tw_stocks/3702.json"},{"revision":"7aff45af2e63e7edb92c3003d486214f","url":"tw_stocks/3701.json"},{"revision":"e3e0ba61afa1532c3bdef70337373227","url":"tw_stocks/3694.json"},{"revision":"2551c7e35ca8d9808398f7fa1bd6c64c","url":"tw_stocks/3686.json"},{"revision":"08e342a333b30b7587962354c44d13a9","url":"tw_stocks/3679.json"},{"revision":"6f2c2436321eab3ee19b7c61b4551a6f","url":"tw_stocks/3673.json"},{"revision":"e2b644b0f62c0e080ec63edc876f5ba5","url":"tw_stocks/3669.json"},{"revision":"bb427d4286f94899f801029be7c1abd6","url":"tw_stocks/3665.json"},{"revision":"f4d8b9850187bdaf426a2fc7e0c25ab3","url":"tw_stocks/3661.json"},{"revision":"ef6afd6e4f2e682e1d7684101f14d3cf","url":"tw_stocks/3653.json"},{"revision":"71ef0db7a2c14fd0618f350bb6405640","url":"tw_stocks/3652.json"},{"revision":"059b8c03952a30af5a1f073136709755","url":"tw_stocks/3645.json"},{"revision":"7dbeec49c428e13cbb8b9d0817dbc00e","url":"tw_stocks/3622.json"},{"revision":"5dd188760717a6ccc4f09b524133c9b3","url":"tw_stocks/3617.json"},{"revision":"eb47e8d94daa2e452762b8ffe3156629","url":"tw_stocks/3607.json"},{"revision":"2d66cd9f660bc2db17177728e668727f","url":"tw_stocks/3605.json"},{"revision":"5fba59e41f95b113aafe450d23e6dd69","url":"tw_stocks/3596.json"},{"revision":"67587cda21e3ffca48c7f96b045cb570","url":"tw_stocks/3593.json"},{"revision":"8a6caf19ebc3aab81878b2ea4b13248e","url":"tw_stocks/3592.json"},{"revision":"ec9e18ea3db4266c1e121d58e5b64a4f","url":"tw_stocks/3591.json"},{"revision":"e7ca4abc93492a90662f8f403f544e95","url":"tw_stocks/3588.json"},{"revision":"61dff457ad67091352753b83b97ca28d","url":"tw_stocks/3583.json"},{"revision":"3bb069e498d9c8de6270ba3f4f02811d","url":"tw_stocks/3576.json"},{"revision":"89f674835c3a3692b8e3c37afc3a73f4","url":"tw_stocks/3563.json"},{"revision":"25b536b828e91d4628ee080f02fdc70e","url":"tw_stocks/3557.json"},{"revision":"d8905588d348600dc090f2f05f15d512","url":"tw_stocks/3550.json"},{"revision":"6eee96b904d4e644b91b63cdbd86ec26","url":"tw_stocks/3545.json"},{"revision":"e2900b9157aa16b33ea8c854ac73d477","url":"tw_stocks/3543.json"},{"revision":"82fdc2a5000a4c49dc91b6a675dd63d1","url":"tw_stocks/3535.json"},{"revision":"007e22f683d447b8c591b639aa0c525e","url":"tw_stocks/3533.json"},{"revision":"3fc191346eba99b8e7f38a87d7a10ce2","url":"tw_stocks/3532.json"},{"revision":"861fe91c10ad7fa00b86f4accfff0f09","url":"tw_stocks/3530.json"},{"revision":"2f95afb954fb30fc5736d7d7783c9fc9","url":"tw_stocks/3528.json"},{"revision":"1daebe1390dcac8a88cef865f4c9dd08","url":"tw_stocks/3518.json"},{"revision":"460dbd9003d2ba9bad3821ddda837d4f","url":"tw_stocks/3515.json"},{"revision":"73ad406ed4a0a3660090c15bd4e7d74f","url":"tw_stocks/3504.json"},{"revision":"5656850e659377b3ab952dd984caf7a6","url":"tw_stocks/3501.json"},{"revision":"537d2d0a9e3b1ce48abb61e6282b1d56","url":"tw_stocks/3494.json"},{"revision":"12864e4f928c212376b6ae53a517c79c","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"cb565aafdcd2952e9e2d1fc5326fa1f1","url":"tw_stocks/3450.json"},{"revision":"1dcdb6adf84c089f9d834782f99b73d6","url":"tw_stocks/3447.json"},{"revision":"c2f59678e97d478094bd790e12b91fc5","url":"tw_stocks/3443.json"},{"revision":"eaf52269683555ae69e7af8dcac406eb","url":"tw_stocks/3437.json"},{"revision":"9b556e2aee71a17828e9cd227a0cde5e","url":"tw_stocks/3432.json"},{"revision":"3f2ff76a569c48a152e1c3005e757628","url":"tw_stocks/3419.json"},{"revision":"5d257dc1df7fe4f87b5ff426815fa239","url":"tw_stocks/3416.json"},{"revision":"896e13425c1cb9b1d37351aa86941a10","url":"tw_stocks/3413.json"},{"revision":"f8c571eb7adca2dbc72a944d425694f0","url":"tw_stocks/3406.json"},{"revision":"ba5f509830f9a8f36eefaa9947aae923","url":"tw_stocks/3380.json"},{"revision":"fe1311b06e29c55ce44579e065a0e90a","url":"tw_stocks/3376.json"},{"revision":"8e46e61e2aabc8dfeda64104aa56c817","url":"tw_stocks/3356.json"},{"revision":"9df32b772a6ad3cdccd6f071c5b9cd47","url":"tw_stocks/3346.json"},{"revision":"898e7a605225b8d21c069040c3f9c15b","url":"tw_stocks/3338.json"},{"revision":"e4ee8f4afbe403af483b55ffa92ae1f0","url":"tw_stocks/3321.json"},{"revision":"c9e88fe4fbbec765167dfd256279fa09","url":"tw_stocks/3312.json"},{"revision":"d5375f9e9163f3784e4dc1db811fab1f","url":"tw_stocks/3311.json"},{"revision":"55bcb8cd34f3020913990873381e3163","url":"tw_stocks/3308.json"},{"revision":"546a7a84aa574f3b741aa3f1939510eb","url":"tw_stocks/3305.json"},{"revision":"ab512b2a7b075936cb5628f79e098dbb","url":"tw_stocks/3296.json"},{"revision":"aa90e4a3d2f2161e668aedce545e6a21","url":"tw_stocks/3266.json"},{"revision":"fde853566eed48428859cebc8f549ce1","url":"tw_stocks/3257.json"},{"revision":"b63938352d198168ae1c5dca3fe49809","url":"tw_stocks/3231.json"},{"revision":"bf4261ac14514e2861f1c9e8c308e964","url":"tw_stocks/3229.json"},{"revision":"d98e17d72ee5d3fbf89b891c524f0b89","url":"tw_stocks/3209.json"},{"revision":"fb44515ddedcc8170fd8e8ab824f9ae2","url":"tw_stocks/3189.json"},{"revision":"bed0ef4332dcf9f879343713fdda6a79","url":"tw_stocks/3168.json"},{"revision":"fdfc36fdb39590f38c988c39fb01e3af","url":"tw_stocks/3167.json"},{"revision":"d74a86f2ff640c10d530f9961437d8cd","url":"tw_stocks/3164.json"},{"revision":"bae4e64ffbed7f2b72d420a043f3461e","url":"tw_stocks/3149.json"},{"revision":"2fbfb7b8b5f473ad4787160e4a493626","url":"tw_stocks/3138.json"},{"revision":"f69f1a2e6e8943b74690eb8eee2a91cb","url":"tw_stocks/3135.json"},{"revision":"8cf28c6960054de487c2d46eb6eb6bdf","url":"tw_stocks/3130.json"},{"revision":"a915fd08f934407e085e5df8cc443ac0","url":"tw_stocks/3094.json"},{"revision":"25dc92f5daaa9f13a7a532ba96f2f0ed","url":"tw_stocks/3092.json"},{"revision":"b4bad4c4313ecb173a89fff7db9f453e","url":"tw_stocks/3090.json"},{"revision":"dcf7705826238fa536f092c7d9b2e341","url":"tw_stocks/3062.json"},{"revision":"763a06e016db382b9594c5fad17e3c73","url":"tw_stocks/3060.json"},{"revision":"0bbe74b3d09d0ee1e45a070cb90517f1","url":"tw_stocks/3059.json"},{"revision":"ec5eed5a152e578cee10255932c39660","url":"tw_stocks/3058.json"},{"revision":"e3c46c2cf1f702902f43da334cebb0c8","url":"tw_stocks/3057.json"},{"revision":"c56da2a5cec8c2ac3ee54167ea26f836","url":"tw_stocks/3056.json"},{"revision":"e314d51d8e24c5a1c72bbe0a75b7a7d8","url":"tw_stocks/3055.json"},{"revision":"abd7d3d92ed4edba3abbced6de36c6fd","url":"tw_stocks/3054.json"},{"revision":"1a991e8574e8f29277bd24df40cee121","url":"tw_stocks/3052.json"},{"revision":"7af421fb5b28ca9eb85289e16e4908e5","url":"tw_stocks/3051.json"},{"revision":"912b34cfa18727777658ee01fee8fc4f","url":"tw_stocks/3050.json"},{"revision":"12add564f24145944ef5957b32686167","url":"tw_stocks/3049.json"},{"revision":"87a723dfd03eebac1acb95e8c9616f7f","url":"tw_stocks/3048.json"},{"revision":"8b2ca42eae93a49074d19a94353ef4ef","url":"tw_stocks/3047.json"},{"revision":"ada19dbe1bca927c3a860b91cb267b51","url":"tw_stocks/3046.json"},{"revision":"efd34e5b0598d411d52131663094aee8","url":"tw_stocks/3045.json"},{"revision":"e312f525df2f89ac92e852171d98461d","url":"tw_stocks/3044.json"},{"revision":"6964c54b8e065326f7a2f762bfdbb54d","url":"tw_stocks/3043.json"},{"revision":"68a1af4015ac5c4c3694c710741dd76e","url":"tw_stocks/3042.json"},{"revision":"30634c2e853db1919ab50de6dcc81b28","url":"tw_stocks/3041.json"},{"revision":"d81a9b79f096037f85eebe2721092776","url":"tw_stocks/3040.json"},{"revision":"c17f22ab36cfa858b8051ea2e830d8a1","url":"tw_stocks/3038.json"},{"revision":"c77ada48b09475e1278861d26c8140bf","url":"tw_stocks/3037.json"},{"revision":"f649f49f263a6e8e36e14fe6347d2077","url":"tw_stocks/3036.json"},{"revision":"4cbd8b950bd3c6e6b3f5d8ffe6279478","url":"tw_stocks/3035.json"},{"revision":"e5121eb05062d37ebbbff1d0091de98c","url":"tw_stocks/3034.json"},{"revision":"46ad66cb72fa11e874ca56cdaf02aaa3","url":"tw_stocks/3033.json"},{"revision":"258952525ed8c74104b823e4138c8052","url":"tw_stocks/3032.json"},{"revision":"0e7a6ca937c76028d04bb10718a79ee6","url":"tw_stocks/3031.json"},{"revision":"c433902afdb313ee399adc03773cdd50","url":"tw_stocks/3030.json"},{"revision":"96fc294b9e75868e692ce437ffe939d9","url":"tw_stocks/3029.json"},{"revision":"a9ab32993726b09fc781a12c3000934b","url":"tw_stocks/3028.json"},{"revision":"2c85bbfa6eaaaae0c1e6ca23db927801","url":"tw_stocks/3027.json"},{"revision":"2509f4bb86fc22c863a4a322a0eebdc1","url":"tw_stocks/3026.json"},{"revision":"bbfaf4823220d38cab2337b4320f6153","url":"tw_stocks/3025.json"},{"revision":"23b27e680c6d5cfa29fd7ae8726de0ad","url":"tw_stocks/3024.json"},{"revision":"c8aa3e5f37bb0b993e045b96e2c3353d","url":"tw_stocks/3023.json"},{"revision":"d69c304071763895cda160bf7b8cf085","url":"tw_stocks/3022.json"},{"revision":"da33f19853db81bdd126ad2908bc5d51","url":"tw_stocks/3021.json"},{"revision":"37a6d8d8fccdaf4006734ebebef8faee","url":"tw_stocks/3019.json"},{"revision":"5cef9fb2ec0a68fbc64db476b17381a3","url":"tw_stocks/3018.json"},{"revision":"ccaef30c0a2d0c639bbd8b9bbd026fb5","url":"tw_stocks/3017.json"},{"revision":"9e9b560a1c2b6ef9315d3b02e150deb1","url":"tw_stocks/3016.json"},{"revision":"704f4fb703f9d18cd9f62e90f2da6d14","url":"tw_stocks/3015.json"},{"revision":"ccf1a01632ead31bf6a68cf6cc8eb6e8","url":"tw_stocks/3014.json"},{"revision":"4919049ae60c99fc28d17168cc70cd96","url":"tw_stocks/3013.json"},{"revision":"8d00036531110408676e357046c38878","url":"tw_stocks/3011.json"},{"revision":"b18d0f0e780dc546e1db52443fa0b654","url":"tw_stocks/3010.json"},{"revision":"968ef93fe85a17bb58de9920ac9ba9cf","url":"tw_stocks/3008.json"},{"revision":"a41fc3e1e5f56b1d4aedefd1db921acf","url":"tw_stocks/3006.json"},{"revision":"7f93f55baa3d1decd7626ee28a211cd7","url":"tw_stocks/3005.json"},{"revision":"0a374c64cb9d0ebf7c97748408a19767","url":"tw_stocks/3004.json"},{"revision":"7936f148866c8167b7fd0bf969cac9d9","url":"tw_stocks/3003.json"},{"revision":"6e5fc6714ed4443e727c8257d49c46fb","url":"tw_stocks/3002.json"},{"revision":"18baa133cf3dc434cd1235e6da562e99","url":"tw_stocks/2945.json"},{"revision":"69d01f3cedd4ce0494e89a2132dcd9bf","url":"tw_stocks/2939.json"},{"revision":"3a250c0d09bd68292f45ab9a1272c8ca","url":"tw_stocks/2929.json"},{"revision":"bb5b9af33d74683b259bc8ffb70d0c55","url":"tw_stocks/2923.json"},{"revision":"327d5f6d9349482bb666166940909437","url":"tw_stocks/2915.json"},{"revision":"c453f6c261a894378e1fe05df5fd5ed9","url":"tw_stocks/2913.json"},{"revision":"46d09f8a52405fa25bb19a182054e929","url":"tw_stocks/2912.json"},{"revision":"40682d1e3d80e1f7556e3bfd2b7c4f01","url":"tw_stocks/2911.json"},{"revision":"c5b44041a87d6314dbea6426a1ee4197","url":"tw_stocks/2910.json"},{"revision":"ec1fa3c920e68a247df8edd793020319","url":"tw_stocks/2908.json"},{"revision":"6a34aa8a4e9ef0febe84d1294f5aea59","url":"tw_stocks/2906.json"},{"revision":"3f020d7c74724826967bc7ed234e55bd","url":"tw_stocks/2905.json"},{"revision":"1d62fbcec4d3019e72f9926d28439c55","url":"tw_stocks/2904.json"},{"revision":"b29aedd0e4f05b494a952bb0704b259d","url":"tw_stocks/2903.json"},{"revision":"274e8c646fb61efa416b214dc974ee08","url":"tw_stocks/2901.json"},{"revision":"e79e70e689cf74e060e55383599ac2d2","url":"tw_stocks/2897.json"},{"revision":"649d066e1368a65a38fd7448b835038b","url":"tw_stocks/2892.json"},{"revision":"3e9fc2731034573de8fa09c0a3eb5484","url":"tw_stocks/2891.json"},{"revision":"464bebae974456dd61a0fbd333acf372","url":"tw_stocks/2890.json"},{"revision":"48671704192f312bd892dac6b74e6155","url":"tw_stocks/2889.json"},{"revision":"55231594b026f9331d86cddd461595ae","url":"tw_stocks/2887.json"},{"revision":"46769050b3e485a5683cab3a1bf9bbe7","url":"tw_stocks/2886.json"},{"revision":"ab37fd686dbd76ee1048bd03a9b339d6","url":"tw_stocks/2885.json"},{"revision":"a2c780e7f6e666398bd0b5f7e3550911","url":"tw_stocks/2884.json"},{"revision":"503ba292bc9ee1e26648d59236d7b879","url":"tw_stocks/2883.json"},{"revision":"590fc614c5ac758d6d6483ad4a5eef15","url":"tw_stocks/2882.json"},{"revision":"c1c4fc6e87c60a0ad432a758da6a9f48","url":"tw_stocks/2881.json"},{"revision":"c7161698301c6f4878181885570f6482","url":"tw_stocks/2880.json"},{"revision":"af8f40d6b0092d6e28ff24ce6772d5a3","url":"tw_stocks/2867.json"},{"revision":"59360b27fdc443ed25cee62f81495b6e","url":"tw_stocks/2855.json"},{"revision":"a15194b7c3fde7d56a1713c8faaa361a","url":"tw_stocks/2852.json"},{"revision":"ae55e07db72ea7757312eb91079df285","url":"tw_stocks/2851.json"},{"revision":"2d23ce910333f0d35bc8624434c2a7c7","url":"tw_stocks/2850.json"},{"revision":"76aba1d76c895014b7919fc2c1091e38","url":"tw_stocks/2849.json"},{"revision":"f847cea334bf87dcce205708c74fa75d","url":"tw_stocks/2845.json"},{"revision":"70e8975b919a786eeaf3e92aa7bcb529","url":"tw_stocks/2838.json"},{"revision":"2a53e7b3b6d780083c7bd5db45dfa3cb","url":"tw_stocks/2836.json"},{"revision":"c3b991fde59bd93fab10f9abf807c392","url":"tw_stocks/2834.json"},{"revision":"d3a1cc15a1f408ce0db3b0b257bd395d","url":"tw_stocks/2832.json"},{"revision":"4d831036464c5f8b689900a274dc5158","url":"tw_stocks/2820.json"},{"revision":"f4665091616e130311d54314eca4b0e3","url":"tw_stocks/2816.json"},{"revision":"68e78513b2aea243332746acdbfca0dd","url":"tw_stocks/2812.json"},{"revision":"5763299d5b35a0461ecf681e78d89b4f","url":"tw_stocks/2801.json"},{"revision":"aa2af3fe10f01a2f6093e9e69e2db76b","url":"tw_stocks/2762.json"},{"revision":"6e191c1a2d0534e52dc21979ab289f37","url":"tw_stocks/2753.json"},{"revision":"4f0d8a4bc8c10882ab4f7fb07f6e35aa","url":"tw_stocks/2748.json"},{"revision":"39b42c24a8db458ed6b3184ec639ab77","url":"tw_stocks/2739.json"},{"revision":"be0156e92657ebcb9114a420882ecbff","url":"tw_stocks/2731.json"},{"revision":"edc8564340b62becc46abae56960ce73","url":"tw_stocks/2727.json"},{"revision":"caadafc87b3bba53734eda5a534223fb","url":"tw_stocks/2723.json"},{"revision":"7551a6eee898f744ec3ac19a49330154","url":"tw_stocks/2722.json"},{"revision":"ceaeb2c34bd604256c97ebb013c453e5","url":"tw_stocks/2712.json"},{"revision":"206e1861ccd544f2ecdcf8cb47adb52d","url":"tw_stocks/2707.json"},{"revision":"b7747be1c8614827b0e7e1e47ef7f22d","url":"tw_stocks/2706.json"},{"revision":"0f647210b0da2b8c1c9559d350bb7478","url":"tw_stocks/2705.json"},{"revision":"98e87b8d92b9745a88be7d8e78f4e3cd","url":"tw_stocks/2704.json"},{"revision":"2cebe8f8c6c5e0dacb7926ce3f783bfe","url":"tw_stocks/2702.json"},{"revision":"d47a3fcda16197bbcbbbcc623b670571","url":"tw_stocks/2701.json"},{"revision":"5fd8abf327533d9f428129742213e99f","url":"tw_stocks/2646.json"},{"revision":"b2a3fa35b2deecd5575ba768aec6558d","url":"tw_stocks/2645.json"},{"revision":"27a1b857b3d2e64572d6dc16fe886c16","url":"tw_stocks/2642.json"},{"revision":"80f942ed840e37012086b16ad66517b9","url":"tw_stocks/2637.json"},{"revision":"3991b85ae9a824446929c75abc4e8054","url":"tw_stocks/2636.json"},{"revision":"f9a5d101b21d5036d428e6281ce2de38","url":"tw_stocks/2634.json"},{"revision":"53f50d81c90f67067f1335d5a53e0474","url":"tw_stocks/2633.json"},{"revision":"08a1ba1a27ad49018c193281059840e4","url":"tw_stocks/2630.json"},{"revision":"089205817abd5e24b7ce5622ba7e1ee8","url":"tw_stocks/2618.json"},{"revision":"5c33083f17d96cc0b32c3c32552647b8","url":"tw_stocks/2617.json"},{"revision":"9430c8ba2e1fe43ed95dd0023b393d9c","url":"tw_stocks/2616.json"},{"revision":"fd6c92c08a5bfea7c3d0782be56dcffa","url":"tw_stocks/2615.json"},{"revision":"544b045fb4cf0c5a336437fbe666aef2","url":"tw_stocks/2614.json"},{"revision":"7c8aca6adf8b2f3390193ffe1eac9917","url":"tw_stocks/2613.json"},{"revision":"a952bda3af4bb8c03b52bdb561ccc0ec","url":"tw_stocks/2612.json"},{"revision":"2505932911e50a319293f7708f92f7cb","url":"tw_stocks/2611.json"},{"revision":"55655f02f84b07acf6b6eb8693240d2a","url":"tw_stocks/2610.json"},{"revision":"99e5b127fb6d34c4b97404c06cfda67d","url":"tw_stocks/2609.json"},{"revision":"65cdfe2787ab988dcba9510c4fbd1767","url":"tw_stocks/2608.json"},{"revision":"19d49adfcc724b70025ec294cc9cddc6","url":"tw_stocks/2607.json"},{"revision":"bab9a8a0c712b877a48f04fcbcb8fa7d","url":"tw_stocks/2606.json"},{"revision":"07e573a365cb4c1846e881af9dabd48e","url":"tw_stocks/2605.json"},{"revision":"668be9e1e98f3e0104528313c2898539","url":"tw_stocks/2603.json"},{"revision":"5b86fbc9e2c7d7d392b9433f38e9d05c","url":"tw_stocks/2601.json"},{"revision":"09fd8a4b70f78ff66499b0ff7c4ff7c3","url":"tw_stocks/2597.json"},{"revision":"6ec009459f0793c5859d75390acb6fdb","url":"tw_stocks/2548.json"},{"revision":"3baadd93419f2c23322acad0bec02ab6","url":"tw_stocks/2547.json"},{"revision":"0e2fbd10707690354a4730222017c978","url":"tw_stocks/2546.json"},{"revision":"35213e671696bdc6e8df8f76e859209f","url":"tw_stocks/2545.json"},{"revision":"45cd4225e10d037a571b51e9132d3f96","url":"tw_stocks/2543.json"},{"revision":"55c82355b44169d875748cd7c222ceb3","url":"tw_stocks/2542.json"},{"revision":"b0552fc0839c4e1c6a097b84e56ab415","url":"tw_stocks/2540.json"},{"revision":"1f7191d7c39ead2e1ab77c1f6ef8522f","url":"tw_stocks/2539.json"},{"revision":"e621b57ce1cb728912503fb7f3b8e08f","url":"tw_stocks/2538.json"},{"revision":"a342de9ab4ee5f551b6415c4fc27c498","url":"tw_stocks/2537.json"},{"revision":"dc54d568ccaef6f50df66d16768c0b05","url":"tw_stocks/2536.json"},{"revision":"d9ea44c55fd82dfcd066fcc778bae29c","url":"tw_stocks/2535.json"},{"revision":"c908a70ebf80c4b780fefbd3326af0c5","url":"tw_stocks/2534.json"},{"revision":"3e9f387338f18d6bcf156fdfb9a1714b","url":"tw_stocks/2530.json"},{"revision":"dfff64cc77e0d67da189581580d40139","url":"tw_stocks/2528.json"},{"revision":"8cd8937427f0bb72675a6474606f97a1","url":"tw_stocks/2527.json"},{"revision":"d1566be3f0a57710e77aea1e44334992","url":"tw_stocks/2524.json"},{"revision":"e63dc954812dd056977b06cb6b2b4c28","url":"tw_stocks/2520.json"},{"revision":"f150619a3bd1bad4d5bfa36cab808be0","url":"tw_stocks/2516.json"},{"revision":"f81b6724041317c78a3c6ec844eab2e0","url":"tw_stocks/2515.json"},{"revision":"ceb4229b1cea8c8b2c9f9fcee08e6416","url":"tw_stocks/2514.json"},{"revision":"551750f04fb2712f6e49ee61da68fad0","url":"tw_stocks/2511.json"},{"revision":"41661b4ec1b35f3d014f6dcfecb0aaeb","url":"tw_stocks/2509.json"},{"revision":"4fd31379bcd6025a3ff2bfdddbfeca33","url":"tw_stocks/2506.json"},{"revision":"122b7fab3c3658116c434fe2a5fd9998","url":"tw_stocks/2505.json"},{"revision":"49995d572b0ebbcaefeaf44e16436daf","url":"tw_stocks/2504.json"},{"revision":"b8eb11fffc10752c76fe75dc2fe57b65","url":"tw_stocks/2501.json"},{"revision":"8deba8454a433bc06d7e5f9a4f2319e2","url":"tw_stocks/2498.json"},{"revision":"cb710eb1b76edfe4fa2193e72b713511","url":"tw_stocks/2497.json"},{"revision":"7ad7385b79f29b097d2e88ad4e02aa7e","url":"tw_stocks/2496.json"},{"revision":"462cc90ddb5cc7378003d3b482c4c375","url":"tw_stocks/2495.json"},{"revision":"670162492a8bc5cac2df0a8b46ece32f","url":"tw_stocks/2493.json"},{"revision":"931f2a667e9023c13be164b54feabc22","url":"tw_stocks/2492.json"},{"revision":"18a20bfd4eafbcc253d513898593c3b3","url":"tw_stocks/2491.json"},{"revision":"313e72edba8a1d3d097853a45eb9687c","url":"tw_stocks/2489.json"},{"revision":"e93848c57a05bfd493c2a50c3a9a41ee","url":"tw_stocks/2488.json"},{"revision":"d1d81124cea900d67d639d2f6fbfaaaa","url":"tw_stocks/2486.json"},{"revision":"56d6e8e418e6b32cc5919765ca0672e4","url":"tw_stocks/2485.json"},{"revision":"f770a6d3dc8d2db7630c181d7b1b64c3","url":"tw_stocks/2484.json"},{"revision":"80379e3078237cb8081086e6de2952c4","url":"tw_stocks/2483.json"},{"revision":"9011f33bedcd07f5f8067fbf3189574a","url":"tw_stocks/2482.json"},{"revision":"846c02bc6ecb45d13290da4fa0ae3413","url":"tw_stocks/2481.json"},{"revision":"bfcf52e89511d90ffad49827148ecf50","url":"tw_stocks/2480.json"},{"revision":"b51aa6d7a89bc0ff6fe1322c995bdc24","url":"tw_stocks/2478.json"},{"revision":"07fc68e5e03e973afa3835751dc27e9a","url":"tw_stocks/2477.json"},{"revision":"8bde3449bb6db90d1431bab834c8b3d4","url":"tw_stocks/2476.json"},{"revision":"4c42828d219b7f9541b183d34eb4cd39","url":"tw_stocks/2474.json"},{"revision":"0a3c91379a645eef22ea5d608bd4ca9c","url":"tw_stocks/2472.json"},{"revision":"3dd0cecc95bcefab617417b116a46a19","url":"tw_stocks/2471.json"},{"revision":"742d18588e15ab5220279da6773e555b","url":"tw_stocks/2468.json"},{"revision":"19ddedafdb4035f53e57851eea70a8f2","url":"tw_stocks/2467.json"},{"revision":"f3a1443d21476bf9989f869b90ac577e","url":"tw_stocks/2466.json"},{"revision":"90dab53d793d5c621075ab3ef85e07e6","url":"tw_stocks/2465.json"},{"revision":"46b93b77f7b392d7f66877ce46e7569c","url":"tw_stocks/2464.json"},{"revision":"014ddffdbef34a07c6b82bc066fd87a3","url":"tw_stocks/2462.json"},{"revision":"9d2baa26ab3555557d07d1b73058e009","url":"tw_stocks/2461.json"},{"revision":"c33549a4f8e6f2ecd4232773f7cb0cab","url":"tw_stocks/2460.json"},{"revision":"d36024aece9280cff6fb5fcfca5d1e6b","url":"tw_stocks/2459.json"},{"revision":"88b4e0d0e782d6e9d32778c526dbf862","url":"tw_stocks/2458.json"},{"revision":"7db214e6dfbab920291a6a8dca520b54","url":"tw_stocks/2457.json"},{"revision":"da644a06aab7fcfa4db2592421e6cb33","url":"tw_stocks/2455.json"},{"revision":"5aeba517bb5cb67406e7de616cd244e2","url":"tw_stocks/2454.json"},{"revision":"9903678a7a4f4803aa32636f1e4cf5f8","url":"tw_stocks/2453.json"},{"revision":"9e52dcbd8adc0d11141db1b6f17d3746","url":"tw_stocks/2451.json"},{"revision":"dccb0d544ca00bc6efeb8660689ff4d1","url":"tw_stocks/2450.json"},{"revision":"77956684009a08702b5bfb35f2fa4660","url":"tw_stocks/2449.json"},{"revision":"e7b18f25698b3c8b53252813140c5808","url":"tw_stocks/2444.json"},{"revision":"79610f7ae7fd16e89f59bb22120134b9","url":"tw_stocks/2442.json"},{"revision":"38a12c9b69c05b7950888fb00d4533cc","url":"tw_stocks/2441.json"},{"revision":"5432b342b10960db22208e3067b1be93","url":"tw_stocks/2440.json"},{"revision":"18c1321eeafefc8183095e07abb78256","url":"tw_stocks/2439.json"},{"revision":"83eb7702317bd42ea105176a1e30f560","url":"tw_stocks/2438.json"},{"revision":"fa9336b158fa12c43f48a2900342c6f8","url":"tw_stocks/2436.json"},{"revision":"5594bae51c55441b4efd01108915fc50","url":"tw_stocks/2434.json"},{"revision":"b0d12c5fc2c041996380d4eb508cd8d5","url":"tw_stocks/2433.json"},{"revision":"6947fa6d897b3369cada5819bcb52253","url":"tw_stocks/2431.json"},{"revision":"8bcf683e28129291ecb1928c00c8dfe3","url":"tw_stocks/2430.json"},{"revision":"eb4fac29c84ee598a1329bf2dc497d7c","url":"tw_stocks/2429.json"},{"revision":"a16f7f777404eb705f5498cea2cf9899","url":"tw_stocks/2428.json"},{"revision":"6f4c2f20d3cc1c66f5a517f3683485de","url":"tw_stocks/2427.json"},{"revision":"3100c19f43df60c27e0de1c28c6d5d32","url":"tw_stocks/2426.json"},{"revision":"9bcf218819fc17f2d0039cc7b8d1aecc","url":"tw_stocks/2425.json"},{"revision":"a175e00b3dbbccb9112389aed17b017f","url":"tw_stocks/2424.json"},{"revision":"9837fd5f8b7fff7ec34726d6ff5976cc","url":"tw_stocks/2423.json"},{"revision":"45a7c20a35f51c8a9c6756f6a2a07eb7","url":"tw_stocks/2421.json"},{"revision":"e7f47cb3adfbdcd735ec9e6777cae7f3","url":"tw_stocks/2420.json"},{"revision":"fd3c6f20e481fb75bedd7de751d529a8","url":"tw_stocks/2419.json"},{"revision":"a9ae9e4c61070317899df5701a024329","url":"tw_stocks/2417.json"},{"revision":"25fd418d9e67b0fcceab6fdc6c5f229e","url":"tw_stocks/2415.json"},{"revision":"8d8b394e03d960dca727ea3767fcce33","url":"tw_stocks/2414.json"},{"revision":"e208f057ec82b86679f3c093257ee034","url":"tw_stocks/2413.json"},{"revision":"1c978ec69d128df5e94f4b5f378a5649","url":"tw_stocks/2412.json"},{"revision":"d3b7e9a1d8d5d8348988ba46d8175551","url":"tw_stocks/2409.json"},{"revision":"bf5083a5fa1858544a68b78c69356335","url":"tw_stocks/2408.json"},{"revision":"cbb0bf6ae05ce7e25fdcba14296d7c8f","url":"tw_stocks/2406.json"},{"revision":"11b753ca9131af32e738e8a9403e55fa","url":"tw_stocks/2405.json"},{"revision":"4f4dbee957eba27ffb30f174dd4d5e2f","url":"tw_stocks/2404.json"},{"revision":"596a4bd07ae9cc957cd6869f055955ee","url":"tw_stocks/2402.json"},{"revision":"e5b6941b881adcedeed86f73821a2764","url":"tw_stocks/2401.json"},{"revision":"67817e90d3d2319575fb2e0b7aa2d8bf","url":"tw_stocks/2399.json"},{"revision":"1786f3ff1d678508dfffeb90d36d8098","url":"tw_stocks/2397.json"},{"revision":"88a3c1fd62d1d4f6f08c881be16cb86e","url":"tw_stocks/2395.json"},{"revision":"e3c105b32f1c83904cd6a71d5284e705","url":"tw_stocks/2393.json"},{"revision":"28b75633066faba930e1b2caacb8ba15","url":"tw_stocks/2392.json"},{"revision":"4d85b0e38e69a86a8ce58d94f792703e","url":"tw_stocks/2390.json"},{"revision":"8bc75dbf5f65a3c5363970ee4533d285","url":"tw_stocks/2388.json"},{"revision":"2ca02d19c7b4d03ab9dff5bc9682330c","url":"tw_stocks/2387.json"},{"revision":"e9bbcbfd8b54af317396cf5f4fca90b1","url":"tw_stocks/2385.json"},{"revision":"a408d19f8936decc686a828874dfe0a6","url":"tw_stocks/2383.json"},{"revision":"2e1cd1adc53db6321235047bbda3de03","url":"tw_stocks/2382.json"},{"revision":"d8f763314b444a9895b2b71cf9187665","url":"tw_stocks/2380.json"},{"revision":"5d3c14e845c1528487ab82e841b02950","url":"tw_stocks/2379.json"},{"revision":"4ec2350db58403f41a1c5bd3b27a7014","url":"tw_stocks/2377.json"},{"revision":"20129037d47fbd6d7b1c41a85b95a454","url":"tw_stocks/2376.json"},{"revision":"cc1a51713050887eecb5fae76b40cd97","url":"tw_stocks/2375.json"},{"revision":"0b330a06926aa87d8204be1d6bed2194","url":"tw_stocks/2374.json"},{"revision":"a22ffef94e2f525327bd89f52e717b17","url":"tw_stocks/2373.json"},{"revision":"6ab40e0fa968faab99aa35bad68ad8b9","url":"tw_stocks/2371.json"},{"revision":"d2d3c2ecd2e92e9b2862876f8ee9508a","url":"tw_stocks/2369.json"},{"revision":"10241d1ec411b3d99c49e167677f45c7","url":"tw_stocks/2368.json"},{"revision":"1530e48f90eaff09b3a0edcafec72c9c","url":"tw_stocks/2367.json"},{"revision":"d8e0762efdf9448a8a4115c1bd7614e5","url":"tw_stocks/2365.json"},{"revision":"4a4f5ad3533cdc0991158361acd58785","url":"tw_stocks/2364.json"},{"revision":"9c7b59f368369ee80bf92341051b39bc","url":"tw_stocks/2363.json"},{"revision":"efbba001c03253b99016faa6d422ed75","url":"tw_stocks/2362.json"},{"revision":"87b7b53b275c06a928749d60d354a417","url":"tw_stocks/2360.json"},{"revision":"dc3ee243610c2e1330a804e9fac4e149","url":"tw_stocks/2359.json"},{"revision":"106c96fd35b6c59c3471640cc964cdbb","url":"tw_stocks/2357.json"},{"revision":"dfbad9601e976791054c705a5c4ae47f","url":"tw_stocks/2356.json"},{"revision":"919a91ca767af7ebb77cad3cbeb6d57d","url":"tw_stocks/2355.json"},{"revision":"d83346b2a07749402cb01f268c4d4155","url":"tw_stocks/2354.json"},{"revision":"d742fdabf5a6b4d2b2f43d868426dcd5","url":"tw_stocks/2353.json"},{"revision":"25d670d7dcef6ac0f7eafdf4850a5c56","url":"tw_stocks/2352.json"},{"revision":"965e2908e4c566c22721b723805a079d","url":"tw_stocks/2351.json"},{"revision":"bcc8ff4f056e9d32369f912331946d2c","url":"tw_stocks/2349.json"},{"revision":"4a40eb249dba0351cb3b929133783574","url":"tw_stocks/2348.json"},{"revision":"00e34459d31ec62ec518f63aa11166bd","url":"tw_stocks/2347.json"},{"revision":"c7e8e4a9e9a07f95453baeb32149e3ac","url":"tw_stocks/2345.json"},{"revision":"5e2d31fa0ff30649e1902abd8f28bb9b","url":"tw_stocks/2344.json"},{"revision":"b6bc30549696e9aa8bf8d5fccc80c885","url":"tw_stocks/2342.json"},{"revision":"5f48fce69dff764224a7e245c5fc8707","url":"tw_stocks/2340.json"},{"revision":"ea2439e17815b7dbbb53e13b2e5ca967","url":"tw_stocks/2338.json"},{"revision":"0fc9f96b25bd6f4633017bee4f80df85","url":"tw_stocks/2337.json"},{"revision":"49d2b1e8f645cd1c7a9e0cb3b56f35c5","url":"tw_stocks/2332.json"},{"revision":"74d5fe5590528204a23d5eb15a6c76c9","url":"tw_stocks/2331.json"},{"revision":"1bdd38385863d21cf21c91d5f4a07c87","url":"tw_stocks/2330.json"},{"revision":"0d7338a74cc304a24e1b83bdf04a1bc8","url":"tw_stocks/2329.json"},{"revision":"5d112de3fbe610683d36d73b85bde860","url":"tw_stocks/2328.json"},{"revision":"fb2170b935a6fa46ac95d29dcc74a0b3","url":"tw_stocks/2327.json"},{"revision":"318a5e5c4801b350fa473725770d78f9","url":"tw_stocks/2324.json"},{"revision":"8413f10b8ac68f0f03b0eacf7ef67a4b","url":"tw_stocks/2323.json"},{"revision":"108d6076d1c5dacdad08d1d066ae3074","url":"tw_stocks/2321.json"},{"revision":"0629b39ff6fc70b0e9d1914c4e7f745d","url":"tw_stocks/2317.json"},{"revision":"77fdb19503480a034a7482aa669e7a94","url":"tw_stocks/2316.json"},{"revision":"335e21690efc9c27702b5dd9e5419bb2","url":"tw_stocks/2314.json"},{"revision":"b3e03218adda1a548f6e5015480f62c9","url":"tw_stocks/2313.json"},{"revision":"507066f393778b5ace7f38b7262313ab","url":"tw_stocks/2312.json"},{"revision":"1d9153fa27680d24d677b955e15394bc","url":"tw_stocks/2308.json"},{"revision":"327b753a70c8b0d4133a4fea91ef21fe","url":"tw_stocks/2305.json"},{"revision":"b179d8d77d0900b905a9ac726c4ab16f","url":"tw_stocks/2303.json"},{"revision":"da0f56fdb950f19c62878f9c050f585f","url":"tw_stocks/2302.json"},{"revision":"41053f616bb7b934c35150d2f31233e7","url":"tw_stocks/2301.json"},{"revision":"8bfabe7e5ee9cc4edff441a42be600b2","url":"tw_stocks/2250.json"},{"revision":"998384792b23409769ee28c63939de78","url":"tw_stocks/2248.json"},{"revision":"d0eb561d96bfa7f299833ae79b6ac91a","url":"tw_stocks/2247.json"},{"revision":"df89ce3eca8d2590944319fb184eb7b7","url":"tw_stocks/2243.json"},{"revision":"717fd3516a591c2951c0717cf32aae9e","url":"tw_stocks/2241.json"},{"revision":"9462b3a00d4bb9d999adfb76bb38a22c","url":"tw_stocks/2239.json"},{"revision":"dce9ba523d1cfa19cc276f384568cc48","url":"tw_stocks/2236.json"},{"revision":"7ee79fcfc368e15e6da23a69a38471c2","url":"tw_stocks/2233.json"},{"revision":"8ac8f8fd930098edb6aa7a9e12162230","url":"tw_stocks/2231.json"},{"revision":"fd269c0c8545c2ffa4c79ee98dabde94","url":"tw_stocks/2228.json"},{"revision":"e130b923c1a023d5bd88c12476fdf6ab","url":"tw_stocks/2227.json"},{"revision":"0f0a176a484d85b48faebba6fc5d670a","url":"tw_stocks/2211.json"},{"revision":"42d90a5b42ac240815b7f4f22f34647e","url":"tw_stocks/2208.json"},{"revision":"c5b1cb35ca3adf62ffcdf1a86fc2c3f3","url":"tw_stocks/2207.json"},{"revision":"46ad82f2793fbf0a9846ca17d3fc8efc","url":"tw_stocks/2206.json"},{"revision":"b4e1b6f1c1b8817066128ea3eee1095c","url":"tw_stocks/2204.json"},{"revision":"b3c3fbcb6ba0a95ee25713f2a59f70fb","url":"tw_stocks/2201.json"},{"revision":"691f5a02f39e7faa3faec69a2fff722c","url":"tw_stocks/2115.json"},{"revision":"4702f8c9c5bf4a8585050a58f775706a","url":"tw_stocks/2114.json"},{"revision":"4ab71c7838aa4e25f933174da95bfc95","url":"tw_stocks/2109.json"},{"revision":"99d4899a3ed6de015fbce6ef6132e4c7","url":"tw_stocks/2108.json"},{"revision":"b90d8f4d2ddf660a5e1d384ca577397b","url":"tw_stocks/2107.json"},{"revision":"1d38a87fba6b874f559ce3fe45a28010","url":"tw_stocks/2106.json"},{"revision":"a74abf9503e0850760fb0796f5a6ffb7","url":"tw_stocks/2105.json"},{"revision":"0104514abefa5c1bdf94f9d2be84f47e","url":"tw_stocks/2104.json"},{"revision":"0fb7025178699a970bcd8144fc2b2700","url":"tw_stocks/2103.json"},{"revision":"b388f9c5de8fdf2a8f0481b93f296d81","url":"tw_stocks/2102.json"},{"revision":"767137b3131663cd891a3c47513a9142","url":"tw_stocks/2101.json"},{"revision":"c30081291a12adedffdc68dc66f23cd1","url":"tw_stocks/2072.json"},{"revision":"9e46198e86904e893082b471d16965e1","url":"tw_stocks/2069.json"},{"revision":"1054297bd6814666804eb82190a50108","url":"tw_stocks/2062.json"},{"revision":"1008334e42d49db3e64ef820789aeece","url":"tw_stocks/2059.json"},{"revision":"50f03290700b2c242725bf20549296c1","url":"tw_stocks/2049.json"},{"revision":"7880e2d480cd62a414f6546deb548c57","url":"tw_stocks/2038.json"},{"revision":"5e57d8671c275114528aa7ec04641224","url":"tw_stocks/2034.json"},{"revision":"955d6264568d9cd4cc44865bafd5d70d","url":"tw_stocks/2033.json"},{"revision":"cd6ce6386a5ae1f839e590a134e1d7bc","url":"tw_stocks/2032.json"},{"revision":"d99b304421c7535bb2c18b05cfec0433","url":"tw_stocks/2031.json"},{"revision":"5b4d9fdb0ccd8d56456469030b4cea8a","url":"tw_stocks/2030.json"},{"revision":"42efdef120ee94cfdfb8ebc646607e31","url":"tw_stocks/2029.json"},{"revision":"dc7e33adbcf58378fc406ba9b4a6dbcf","url":"tw_stocks/2028.json"},{"revision":"6fd2b2a3fec63d12590ae3ed7ff09448","url":"tw_stocks/2027.json"},{"revision":"2b529237b5ed8425cfd6a38f54aed1bb","url":"tw_stocks/2025.json"},{"revision":"f88078265ddcd3d49047e9b4cabebb0f","url":"tw_stocks/2024.json"},{"revision":"78ee897aa8f6735986d3099c49fff603","url":"tw_stocks/2023.json"},{"revision":"d0f705600b79f9c46f66b9e4c8323334","url":"tw_stocks/2022.json"},{"revision":"31fc94d7098ac56548fa7a5b407589cd","url":"tw_stocks/2020.json"},{"revision":"2bbaa4f1c048ceb007f1a151a299ce15","url":"tw_stocks/2017.json"},{"revision":"45c163c47ace4d48a3fe1815586c4931","url":"tw_stocks/2015.json"},{"revision":"f0c52fb8bb319fc7a05d00e693bf99da","url":"tw_stocks/2014.json"},{"revision":"40a68813167cfd32cbf5d5bc91986c64","url":"tw_stocks/2013.json"},{"revision":"d2799f83384b8dcdc1b67e31fdaef057","url":"tw_stocks/2012.json"},{"revision":"53d1bf306f75ebfb820e13e22cd4938c","url":"tw_stocks/2010.json"},{"revision":"16f91d2fe958984514d27fe9dba768ba","url":"tw_stocks/2009.json"},{"revision":"edc10b80e579c6c834858ab4fd602b11","url":"tw_stocks/2008.json"},{"revision":"e7daf0129e005bb68cb0c9cd19aa2e4e","url":"tw_stocks/2007.json"},{"revision":"0d0c365ee6cf08b55d9b0a1d4a956b50","url":"tw_stocks/2006.json"},{"revision":"ed577d1b49fed2d216f3b9b3c5f0afb7","url":"tw_stocks/2002.json"},{"revision":"0903edbb1364ebd9a3ccaa3808f96e38","url":"tw_stocks/1909.json"},{"revision":"ad95fc7322de9912245892c1862b2e32","url":"tw_stocks/1907.json"},{"revision":"eb7b5e318f4e43ad143ba633f57af41a","url":"tw_stocks/1906.json"},{"revision":"65ce1e1b90ad073f163dff1d44c69ada","url":"tw_stocks/1905.json"},{"revision":"73900f020c0f1aa3d12294257de77ef6","url":"tw_stocks/1904.json"},{"revision":"1c3f0f4c9fdab9b8fb4df36c646fe982","url":"tw_stocks/1903.json"},{"revision":"7937545204ac3ee9220c753285d41a4c","url":"tw_stocks/1817.json"},{"revision":"8296a52239fb8c73c084ac7995b30d98","url":"tw_stocks/1810.json"},{"revision":"eaa1239383358c522a2ee52782a3df95","url":"tw_stocks/1809.json"},{"revision":"e1cd0175ebca8dd41a1613b1beff3a3d","url":"tw_stocks/1808.json"},{"revision":"5248e7e8714db0ba3dbbcb2cc0076b1a","url":"tw_stocks/1806.json"},{"revision":"89fb1726b8400861f12c22bb8cdfe0a9","url":"tw_stocks/1805.json"},{"revision":"11cf5c33d13d3b2a1b1d144f9e631893","url":"tw_stocks/1802.json"},{"revision":"5bb54cba04ee461b4f20512a957e6619","url":"tw_stocks/1795.json"},{"revision":"2706a3b5e14677aeb60a4f1eb3b5f484","url":"tw_stocks/1789.json"},{"revision":"e6057febb4d6f6bb31652ef33dfcf2b7","url":"tw_stocks/1786.json"},{"revision":"1001d8fb76af132691f208c14f9bb405","url":"tw_stocks/1783.json"},{"revision":"de8f1856745e49bb733fb60069db70e8","url":"tw_stocks/1776.json"},{"revision":"eda9a7a7ed95e25411cc99b7637aa1cd","url":"tw_stocks/1773.json"},{"revision":"7e082243f33ba351b0c73aa26a4a800d","url":"tw_stocks/1762.json"},{"revision":"a957ef9d673b5d1c01d236e8116b4c54","url":"tw_stocks/1760.json"},{"revision":"21aa8f9e97ec8775af7815c24769b675","url":"tw_stocks/1752.json"},{"revision":"f84443e48e0e08d8bdb586c0c34177b9","url":"tw_stocks/1737.json"},{"revision":"a0ea98b2ca7e7f74834236186bf8d6c4","url":"tw_stocks/1736.json"},{"revision":"5ea495baa00cd79bae9253506c519862","url":"tw_stocks/1735.json"},{"revision":"600a00165bfa567181f1314df8478c56","url":"tw_stocks/1734.json"},{"revision":"726c4db1ee32108c1ce484a961df12cd","url":"tw_stocks/1733.json"},{"revision":"292a366750d1d7b78bb2a5e3d0ddb287","url":"tw_stocks/1732.json"},{"revision":"9b7368b601812d695756878d78549e73","url":"tw_stocks/1731.json"},{"revision":"b6530bb7405953d5c3a4bfc3000f31ce","url":"tw_stocks/1730.json"},{"revision":"82429cba503aa9be28e80633f83c40f3","url":"tw_stocks/1727.json"},{"revision":"72d559790d0cd60353a7bd4050804d61","url":"tw_stocks/1726.json"},{"revision":"4006f4c64e83c641e8634bd1caa73484","url":"tw_stocks/1725.json"},{"revision":"ba6630fccb6a3149c705ced7c4e80bc4","url":"tw_stocks/1723.json"},{"revision":"d1c14b3dae62b0d0409f2f6a187ba656","url":"tw_stocks/1722.json"},{"revision":"cafdca7699e5b05e652c20c0531c628f","url":"tw_stocks/1721.json"},{"revision":"f21b2fab6ad1ae04338c9aa0b8ba5712","url":"tw_stocks/1720.json"},{"revision":"f483aa5ec1e9c6feb595fabf6970e5fb","url":"tw_stocks/1718.json"},{"revision":"ec78c935c2e52867ecdad0081a64471e","url":"tw_stocks/1717.json"},{"revision":"e86468ca894bc98c831fefcdf6dde3cd","url":"tw_stocks/1714.json"},{"revision":"f7df661ecb48be56d77f94a36c7dfbf9","url":"tw_stocks/1713.json"},{"revision":"d9e15681762f6d1539939220d509583c","url":"tw_stocks/1712.json"},{"revision":"f42e0c7d357c211d89d87eef6df06844","url":"tw_stocks/1711.json"},{"revision":"579e398eb9a454b013342ad4a3f6622b","url":"tw_stocks/1710.json"},{"revision":"4bb44b3fe08b53ca5cb74739b0fa59ce","url":"tw_stocks/1709.json"},{"revision":"e4201f55e1abca0502641f76315c8404","url":"tw_stocks/1708.json"},{"revision":"adbec97cf0883eb1a0d3f719ecfb9bb7","url":"tw_stocks/1707.json"},{"revision":"682b170f41408d8797ec3d5de2d0ad76","url":"tw_stocks/1702.json"},{"revision":"63bd470427575feba25d5c2198bdc65a","url":"tw_stocks/1626.json"},{"revision":"7a51d78db363c403368e05a440b3b18c","url":"tw_stocks/1623.json"},{"revision":"a5ecd163565ae17b989c27ae5ba99ce1","url":"tw_stocks/1618.json"},{"revision":"689c3866e2781ab5316000aa9cb7e145","url":"tw_stocks/1617.json"},{"revision":"bab51940f37d92e0230ce6701628cbdb","url":"tw_stocks/1616.json"},{"revision":"b7ff1c7aa47f5fda394de587017faf38","url":"tw_stocks/1615.json"},{"revision":"a32dfce74ef1b2345819ac6826409a81","url":"tw_stocks/1614.json"},{"revision":"5ebbb3b3701ace78ed80abaa2d305590","url":"tw_stocks/1612.json"},{"revision":"5cb5893d130d01d8ba70c2dc2b68a0ab","url":"tw_stocks/1611.json"},{"revision":"213ad52065569b059cfb170d0ba2cad5","url":"tw_stocks/1609.json"},{"revision":"c793ebd47140f1b7d893148ae86e5ddb","url":"tw_stocks/1608.json"},{"revision":"a3ad0052511499780bea2ce0e157d78f","url":"tw_stocks/1605.json"},{"revision":"88dc28b737609f6c1ed7098fb9eb6274","url":"tw_stocks/1604.json"},{"revision":"134cade41886dd01fb824f1c868e6935","url":"tw_stocks/1603.json"},{"revision":"ece94652e7895a316948fefe246c3e28","url":"tw_stocks/1598.json"},{"revision":"c0ea27f0599ca17dd4fc36abbea3e400","url":"tw_stocks/1597.json"},{"revision":"0f63649c5335e6b3819c64bd093aee6e","url":"tw_stocks/1590.json"},{"revision":"38580f3ef51964c62b9afa95a6180dab","url":"tw_stocks/1589.json"},{"revision":"8762eb889912878ce3d3a78aea29b64d","url":"tw_stocks/1587.json"},{"revision":"789706d72de553f1b4921c655d4f5cc7","url":"tw_stocks/1583.json"},{"revision":"2355aca640ae6d58d6795e36f204e6a4","url":"tw_stocks/1582.json"},{"revision":"d9b04b75e7c4f4c860ddb1abd5783584","url":"tw_stocks/1568.json"},{"revision":"22ecebb4f71c73e7ac1b0ca5669ae93f","url":"tw_stocks/1563.json"},{"revision":"0b116d5017a6289b52ca525860833280","url":"tw_stocks/1560.json"},{"revision":"49535c446677b6727ea8f0a96073b13a","url":"tw_stocks/1558.json"},{"revision":"1236b08e90df4a7f163fe21c7e01f5ba","url":"tw_stocks/1541.json"},{"revision":"7ec32bcba09682b9bf807c3391cbba46","url":"tw_stocks/1540.json"},{"revision":"f4e8612c2e59dae724b6b9d42be9765e","url":"tw_stocks/1539.json"},{"revision":"fc7c1ba5035fe53e755518adce7db080","url":"tw_stocks/1538.json"},{"revision":"f10ea6c3adc90c8b209ce69e1e99db8c","url":"tw_stocks/1537.json"},{"revision":"1a3dbdcb5ba102940bf488b34e436726","url":"tw_stocks/1536.json"},{"revision":"fcd2e40102a7473bcf2d68e544eef458","url":"tw_stocks/1535.json"},{"revision":"e943a6c2345982bd3a0968d5afdad061","url":"tw_stocks/1533.json"},{"revision":"6adf985bcc13a0df4ee0066d780eb47c","url":"tw_stocks/1532.json"},{"revision":"71e44e751594e6dc3a8de1715c35e786","url":"tw_stocks/1531.json"},{"revision":"02e1904d4231f55126aea81b27635578","url":"tw_stocks/1530.json"},{"revision":"f7753b78fac1fce133a1ce7166526668","url":"tw_stocks/1529.json"},{"revision":"4739bc4e866d2ada6e7c88d0aa84e2cd","url":"tw_stocks/1528.json"},{"revision":"3c33cba250dd93e67a7cebce88c6f303","url":"tw_stocks/1527.json"},{"revision":"b8c6b32998575e047c631b609289b9e4","url":"tw_stocks/1526.json"},{"revision":"023f45478e5cad9fe37b6f8fa84afdc9","url":"tw_stocks/1525.json"},{"revision":"74235a6b0d5031c0af7d0cf1ce31f4e7","url":"tw_stocks/1524.json"},{"revision":"1619c21832077e657bffb4387df38e0c","url":"tw_stocks/1522.json"},{"revision":"53d22238af58ca8ee3071e0c4239b64a","url":"tw_stocks/1521.json"},{"revision":"195cb8585fa56f328ca2d9a0c5e0d81d","url":"tw_stocks/1519.json"},{"revision":"6f045f7cd27cff27d758cb0c90dc896c","url":"tw_stocks/1517.json"},{"revision":"47b02bd46b9c026ec15f6e8acd4500f5","url":"tw_stocks/1516.json"},{"revision":"119cd48f0584266423f3f74b602baebb","url":"tw_stocks/1515.json"},{"revision":"0f68a058857db3c7e0274338b48ff2a0","url":"tw_stocks/1514.json"},{"revision":"623d5984d5ca904b0497c154eb33bd93","url":"tw_stocks/1513.json"},{"revision":"ae31c19d08bda971a8b65ae8e5787c3c","url":"tw_stocks/1512.json"},{"revision":"f193332839a0401415d62b9e6bbc6e57","url":"tw_stocks/1506.json"},{"revision":"2a13c052dba42081ae2d1387f834e853","url":"tw_stocks/1504.json"},{"revision":"ff2c50f8094be8218f9684dbfe4f090c","url":"tw_stocks/1503.json"},{"revision":"14a3477ea962a93e96c7081ad0c84377","url":"tw_stocks/1477.json"},{"revision":"3dd62550f5b535e83647839b01104cd2","url":"tw_stocks/1476.json"},{"revision":"f4baeb5e8076454dc3ce5332ceffcb92","url":"tw_stocks/1475.json"},{"revision":"2d391d6c5efe7f891c6c4976f625fdbb","url":"tw_stocks/1474.json"},{"revision":"fba4782e2c5476d6d007fbff15812a20","url":"tw_stocks/1473.json"},{"revision":"c98e4a6464ed2596cc8251081254d4e6","url":"tw_stocks/1472.json"},{"revision":"f5a27802968f655f07b8403f8bcd2f35","url":"tw_stocks/1471.json"},{"revision":"e315a268bab509d5d6b7d8db5d2509d9","url":"tw_stocks/1470.json"},{"revision":"bbd4d7bc70fc24dc99279c50c8a5fe0f","url":"tw_stocks/1468.json"},{"revision":"6f0089683d69f474aed1c9fd5abe8412","url":"tw_stocks/1467.json"},{"revision":"c7980b4cf825720f0fb294b9beabefc2","url":"tw_stocks/1466.json"},{"revision":"dab7a014c0b63d41367ba75e35938ae0","url":"tw_stocks/1465.json"},{"revision":"01a5a87a3618d02b0d83e331a34a4dec","url":"tw_stocks/1464.json"},{"revision":"888d75f55fda3470de09b1dfcacffb19","url":"tw_stocks/1463.json"},{"revision":"e50aa99a9a723b39373570bec0d8ca03","url":"tw_stocks/1460.json"},{"revision":"b89e6a18e53a13f57a6d59fdc5a52075","url":"tw_stocks/1459.json"},{"revision":"6b3b409beff477b4eb7e040ba280d441","url":"tw_stocks/1457.json"},{"revision":"08985f8f87056d353eb2289f83f241b5","url":"tw_stocks/1456.json"},{"revision":"f99b65d728a8ce4f78f025208de25e57","url":"tw_stocks/1455.json"},{"revision":"b237f6ddd6f0bf5b756718e8623f2fae","url":"tw_stocks/1454.json"},{"revision":"6d3d0972135a4c39fed1592c3743b4a2","url":"tw_stocks/1453.json"},{"revision":"7abe22c99028ae4b56304e826e2b66c5","url":"tw_stocks/1452.json"},{"revision":"b40de4e4021a1c4e8fff3e14b525d4c4","url":"tw_stocks/1451.json"},{"revision":"44a7d312b9bf641ab536cdad55b861dc","url":"tw_stocks/1449.json"},{"revision":"0a8407fe5d8d7095ede0c65ffe00a80b","url":"tw_stocks/1447.json"},{"revision":"fab33110d262ebebf3c3517f2fef2cf4","url":"tw_stocks/1446.json"},{"revision":"1cba4df7c68395d7bbd812a53a1232b9","url":"tw_stocks/1445.json"},{"revision":"8b1ad8f635231e3ed8773a1bdd347cdc","url":"tw_stocks/1444.json"},{"revision":"89e05fa1e2df11c0df53c24fcbfbdf26","url":"tw_stocks/1443.json"},{"revision":"3c383f9accc12b024d4286d5971f56cc","url":"tw_stocks/1442.json"},{"revision":"d05e720e7f9ed53bdcf5a5e75fe36c22","url":"tw_stocks/1441.json"},{"revision":"19c4b2139f5e43018afeea4563f3e2f6","url":"tw_stocks/1440.json"},{"revision":"29c4f63a6c27c024530e9f787456f2b4","url":"tw_stocks/1439.json"},{"revision":"4dbffd101eed78847dcfdaddb06a11f3","url":"tw_stocks/1438.json"},{"revision":"53d80c4ebac4cbb0010ee9eecbb8511a","url":"tw_stocks/1437.json"},{"revision":"5fdb74d0c6c4c448c666ecef86adbf28","url":"tw_stocks/1436.json"},{"revision":"7e4b5402d00f273938d97f3251f36525","url":"tw_stocks/1435.json"},{"revision":"784d5316012577bebb38107575c28783","url":"tw_stocks/1434.json"},{"revision":"be874de001e6272480fe10b84b734f92","url":"tw_stocks/1432.json"},{"revision":"a6d6eb0c4b876b6c37236772e25dca18","url":"tw_stocks/1423.json"},{"revision":"a2f058b27f56b55c3906e776dc91ea36","url":"tw_stocks/1419.json"},{"revision":"4273d1ee733691df77613430185b78bc","url":"tw_stocks/1418.json"},{"revision":"16e821da20c01bd77df03a75f19eb40f","url":"tw_stocks/1417.json"},{"revision":"b3ca31654f3fa8230c861edba19d9655","url":"tw_stocks/1416.json"},{"revision":"c025ebb542754dcbe3f06f4a450f5d24","url":"tw_stocks/1414.json"},{"revision":"c707e934e6648ee71410dca1d5997549","url":"tw_stocks/1413.json"},{"revision":"9f70452470f9703a82008bf50e8206dc","url":"tw_stocks/1410.json"},{"revision":"ca757dce04b6a21598ef50e9dde9da62","url":"tw_stocks/1409.json"},{"revision":"248d4e9b12aef1ae4c6a46c8b7713e02","url":"tw_stocks/1402.json"},{"revision":"9fdefb3652aa6534f50cc25cc07229fc","url":"tw_stocks/1342.json"},{"revision":"73bbf717f19389eafd7c2d7557280d08","url":"tw_stocks/1341.json"},{"revision":"de8876fbf3304f01634dc82af8ae3fb0","url":"tw_stocks/1340.json"},{"revision":"df8933ad8d74b4f90a438a3f1108a3b2","url":"tw_stocks/1339.json"},{"revision":"a4ca1f735634a8e77b1a0e77621f2db8","url":"tw_stocks/1338.json"},{"revision":"83200cfdddbcd534a8bd9e2b3354a97a","url":"tw_stocks/1337.json"},{"revision":"7f82aaf789dbe83bed179a81c3b253bf","url":"tw_stocks/1326.json"},{"revision":"024adb1bada9771fcd3d5fe40dec459e","url":"tw_stocks/1325.json"},{"revision":"706565349aca6b64da7c8b31c8658ab8","url":"tw_stocks/1324.json"},{"revision":"3272d06e4d7d9b528759077d34ba0524","url":"tw_stocks/1323.json"},{"revision":"241be28253e99859ab58071bd0b63ec2","url":"tw_stocks/1321.json"},{"revision":"1699a6d9f73bcd39b0688541ca9ccd27","url":"tw_stocks/1319.json"},{"revision":"226062ffa4abbecfa78e97d9b6067be4","url":"tw_stocks/1316.json"},{"revision":"871fa69e2ba2e84bc5a946ef01296acb","url":"tw_stocks/1315.json"},{"revision":"8d2c4e65fce2d4613ac2af07bd8e5407","url":"tw_stocks/1314.json"},{"revision":"a9c0f944ff4b8f1147e3ed7e86b81cec","url":"tw_stocks/1313.json"},{"revision":"14a8b6000b747a85707a30a86be2f8f7","url":"tw_stocks/1312.json"},{"revision":"490370728b8fd017cd6202bf9dc5a0c2","url":"tw_stocks/1310.json"},{"revision":"976ecd9ac126b3fad07af99fb3ecb9dd","url":"tw_stocks/1309.json"},{"revision":"9016cca75529e8b6c6fc6cd86f7cbee5","url":"tw_stocks/1308.json"},{"revision":"0dee86232a91378ec87c5948e2ead707","url":"tw_stocks/1307.json"},{"revision":"2999aabc2e290cf66ad5a3ecb74a0262","url":"tw_stocks/1305.json"},{"revision":"7883a582e46365a14ff882d2ea74a8fb","url":"tw_stocks/1304.json"},{"revision":"18483ee7ce696f6c6f665d35dd5bb8da","url":"tw_stocks/1303.json"},{"revision":"7f1eee43681f29f59c95344017c0e472","url":"tw_stocks/1301.json"},{"revision":"b1a1cb893bae0beabbe797da4eb6eccd","url":"tw_stocks/1256.json"},{"revision":"e436475a45f53e3070b2565507f15d3f","url":"tw_stocks/1236.json"},{"revision":"df1970b0bea3bc9c06e1ee8400c65f09","url":"tw_stocks/1235.json"},{"revision":"63a483ecd09c46d5c8a7cdd2e91de27e","url":"tw_stocks/1234.json"},{"revision":"d9cb848044349491408c676ac8248150","url":"tw_stocks/1233.json"},{"revision":"867a456265fdb38ff7b08faff52eb968","url":"tw_stocks/1232.json"},{"revision":"132f9676907d0286f2f1667b74c09a00","url":"tw_stocks/1231.json"},{"revision":"aa28b0eed944048ae9873fef8962bc94","url":"tw_stocks/1229.json"},{"revision":"12bf5c010eb3b92ef8d8a2761424f8f6","url":"tw_stocks/1227.json"},{"revision":"d313e7c1f89d9773e5a40ce4e0fb8fce","url":"tw_stocks/1225.json"},{"revision":"3236568d85062f119f8339bf6396ac09","url":"tw_stocks/1220.json"},{"revision":"769b52f25b2835148523a4034330e954","url":"tw_stocks/1219.json"},{"revision":"431754ee60595bcef708d4699612fae1","url":"tw_stocks/1218.json"},{"revision":"48ea9c78d7061c07347745d705291d4f","url":"tw_stocks/1217.json"},{"revision":"0b593961e3038f18f09f34752de9258a","url":"tw_stocks/1216.json"},{"revision":"cf0fb3904c610fe32ba44029d450bfae","url":"tw_stocks/1215.json"},{"revision":"df836f0d141a78549b0ae7f447233c9b","url":"tw_stocks/1213.json"},{"revision":"d6a89f0bad907a9ac711416747c4d9b0","url":"tw_stocks/1210.json"},{"revision":"420b3501eaf6cb76055750d333510b40","url":"tw_stocks/1203.json"},{"revision":"0ac2478c0f597fe23f9d6b01797f7384","url":"tw_stocks/1201.json"},{"revision":"eda3a8e54b7c2994c7ef9b05237b59be","url":"tw_stocks/1110.json"},{"revision":"9b12dd5a71ff06177065dc2882c3743f","url":"tw_stocks/1109.json"},{"revision":"d3f425d058e8eb04ce27aa8f70ff359b","url":"tw_stocks/1108.json"},{"revision":"be4da66d8fac384305b1edb3cd5b4f3c","url":"tw_stocks/1104.json"},{"revision":"85fd0cfd8d4a704102ea61f860dbabf0","url":"tw_stocks/1103.json"},{"revision":"9762defd6f04fa35e534a6cbdc861866","url":"tw_stocks/1102.json"},{"revision":"4f7fc5b498b37b937b9877348cef6308","url":"tw_stocks/1101.json"},{"revision":"cefa3189051561b4f9073bac11ecd900","url":"tw_stocks/00999A.json"},{"revision":"3d4009fe2565a89eaf0df3db5fab8655","url":"tw_stocks/00997A.json"},{"revision":"2f75c7cb02c75fc1d77b39422a065efb","url":"tw_stocks/00996A.json"},{"revision":"1ce6b209a6dd32c95244fcfd8fa6fc76","url":"tw_stocks/00995A.json"},{"revision":"a0563bf624a0590510cd4001b21a6dc5","url":"tw_stocks/00994A.json"},{"revision":"6bec302ca139c49741631cca1927981b","url":"tw_stocks/00993A.json"},{"revision":"acfa86aefa85492c638fcaf9b7dcb809","url":"tw_stocks/00992A.json"},{"revision":"c681cf5efe3cad4fd0ea8557d10334aa","url":"tw_stocks/00991A.json"},{"revision":"3146765cc0f9070dd4606c149bc29aeb","url":"tw_stocks/00990A.json"},{"revision":"813cc824dd0f5fbc647d30315df47567","url":"tw_stocks/00989A.json"},{"revision":"9af5ffa816b2f0411ac2df0bfc3b5397","url":"tw_stocks/00988A.json"},{"revision":"4e17bfeb61f5c032a5c393d47d1d1080","url":"tw_stocks/00987A.json"},{"revision":"f0211820261d4c827cdfa2518a2c053c","url":"tw_stocks/00986A.json"},{"revision":"92c4b849bdb4f22182353df55fd6395f","url":"tw_stocks/00985B.json"},{"revision":"3ffe71058c2c976b95e9c699fa316bfb","url":"tw_stocks/00985A.json"},{"revision":"d47f799ec0cabb6407b2b609c144ac4b","url":"tw_stocks/00984D.json"},{"revision":"55108da55f3f928fa5151b948983841e","url":"tw_stocks/00984A.json"},{"revision":"18bf8743a2593299e750a6671606b2f8","url":"tw_stocks/00983D.json"},{"revision":"8ee1f3b54bf3e98a815b3d1480532e8d","url":"tw_stocks/00983A.json"},{"revision":"6c492258e05a7ae9ff14a8cbef3d3cbd","url":"tw_stocks/00982T.json"},{"revision":"04a646410714135c62255effe7b694ba","url":"tw_stocks/00982D.json"},{"revision":"ea243f087122ea2f0830251272e0487c","url":"tw_stocks/00982A.json"},{"revision":"09191362775f3f9858faaa2146b444c3","url":"tw_stocks/009821.json"},{"revision":"9802c092549e92b25e32bc53f5c693bc","url":"tw_stocks/009820.json"},{"revision":"8db03b7f52c5d9aec9c38adc8c0f52a3","url":"tw_stocks/00981T.json"},{"revision":"ce81f517fcf4d28e33577c7e44d7541d","url":"tw_stocks/00981A.json"},{"revision":"7d54b54ca0c3131427fbd0736a10142b","url":"tw_stocks/009819.json"},{"revision":"fd0acaef2ad95665d9a1a7539ee00c43","url":"tw_stocks/009818.json"},{"revision":"80bb8d7e6a3b64111ae5788f328bb851","url":"tw_stocks/009817.json"},{"revision":"04e7ebeeea0865d27f64f33cf406fea6","url":"tw_stocks/009816.json"},{"revision":"173fe9f7cda297d002650b2623b3a737","url":"tw_stocks/009813.json"},{"revision":"4f94f357209b623bb0caac94c5bbb2b5","url":"tw_stocks/009812.json"},{"revision":"e53dbc9d1c35c1e6583a9c0b6ad2b9ac","url":"tw_stocks/009811.json"},{"revision":"f96affa681185707ab32bf63db823544","url":"tw_stocks/009810.json"},{"revision":"1fbaebf0262bd49eed4b5e5a1c18a80d","url":"tw_stocks/00980A.json"},{"revision":"faec9d8d225648a279691b10a8f09475","url":"tw_stocks/009809.json"},{"revision":"22cd8879c3dde441810aacf1081410e4","url":"tw_stocks/009808.json"},{"revision":"de9d04bc94fd077688b18c74c97392bd","url":"tw_stocks/009805.json"},{"revision":"0a87fa4acfcdd47c59706de1787518ca","url":"tw_stocks/009804.json"},{"revision":"5cf0befdf0a69d91d64a76f763e0b377","url":"tw_stocks/009803.json"},{"revision":"927ac89b7c7e2433763af94a2a5192b5","url":"tw_stocks/009802.json"},{"revision":"ff001b54a60e8efaf6cb2834e19e8bd9","url":"tw_stocks/009801.json"},{"revision":"1d0b1fa06aa0ad452c3e03072a257346","url":"tw_stocks/009800.json"},{"revision":"ec1176fd203b5a0399e6c7aebc7d40c4","url":"tw_stocks/00972.json"},{"revision":"760f1347a9847bdc2664af1051ca0fec","url":"tw_stocks/00971.json"},{"revision":"95f1102714762972f936960e8b977d01","url":"tw_stocks/00965.json"},{"revision":"51363f5ad1a19555097665f5cc917f23","url":"tw_stocks/00964.json"},{"revision":"be4752838ed0e62a255dc6afb9a41036","url":"tw_stocks/00963.json"},{"revision":"ec8f1f48a841f782982e77d89bedd4c7","url":"tw_stocks/00962.json"},{"revision":"bcb29947c5a23a6f97c5470074b6f405","url":"tw_stocks/00961.json"},{"revision":"c8e904e3b3db6bcd7bba884933d7d847","url":"tw_stocks/00960.json"},{"revision":"1d7cfab25093172edbc628cbce08245d","url":"tw_stocks/00956.json"},{"revision":"ac89e940972640492c51260440d2e9e1","url":"tw_stocks/00954.json"},{"revision":"5a6875108cdeb21a1f19dbba613c01d9","url":"tw_stocks/00953B.json"},{"revision":"8599614cd7518ac56000adb4b3c7558d","url":"tw_stocks/00952.json"},{"revision":"4354ba708edf750363b62f19199ab1e1","url":"tw_stocks/00951.json"},{"revision":"70e1f77fa633adf577cf4547151d76b4","url":"tw_stocks/00949.json"},{"revision":"2dfdad1c5aa9f869b6da5f39c53b9f3b","url":"tw_stocks/00947.json"},{"revision":"4fc24d544ab9c370d37a9ea81815e702","url":"tw_stocks/00946.json"},{"revision":"9577d47c9f643c7f51a340dadc94a512","url":"tw_stocks/00945B.json"},{"revision":"6214db9be0bcddb20688869f507ded21","url":"tw_stocks/00944.json"},{"revision":"ec37a03bdb79b60f2c77c9ab73c39b12","url":"tw_stocks/00943.json"},{"revision":"f9eac0ef7fcf9a66c9702721b2e0f4d6","url":"tw_stocks/00941.json"},{"revision":"9ff9a6eacaeceae0f85e72449c8f262c","url":"tw_stocks/00940.json"},{"revision":"c2764fb5191a39fb4b4d40779d3f766a","url":"tw_stocks/00939.json"},{"revision":"4a113d05b1496fa464a61da21df5db35","url":"tw_stocks/00938.json"},{"revision":"f6a3e4dced985bc220e7e3e8e27c3aa0","url":"tw_stocks/00936.json"},{"revision":"736804854124a62550add8a9afb1dcdf","url":"tw_stocks/00935.json"},{"revision":"8bb94d086603448f3d5638eee1049501","url":"tw_stocks/00934.json"},{"revision":"fee04dc7f11aac935c2a9abdb310d3ef","url":"tw_stocks/00932.json"},{"revision":"423fd5d1ab5669f429ee50645043babe","url":"tw_stocks/00930.json"},{"revision":"c9f582dff347ece1b1c32f7ab12a8d2e","url":"tw_stocks/00929.json"},{"revision":"0c79b79841e5aa9201b6d675777b3069","url":"tw_stocks/00927.json"},{"revision":"611621fb457e24e251b0bd77a95c314d","url":"tw_stocks/00926.json"},{"revision":"8340a8eb8162f3b451ce72c65888ffb4","url":"tw_stocks/00924.json"},{"revision":"872caf3c90a922e76341a9092bd4e40c","url":"tw_stocks/00923.json"},{"revision":"3c34bb8ccbb9e80335a048de2939f34c","url":"tw_stocks/00922.json"},{"revision":"68826652f23d002cff3999c9ead09551","url":"tw_stocks/00921.json"},{"revision":"ef4f60df635c69c937829601d70bc1ce","url":"tw_stocks/00920.json"},{"revision":"c16adf5d0862ce460ef4ebc5762f0687","url":"tw_stocks/00919.json"},{"revision":"2f9a629c4e80c1b7fd5e7a104915b642","url":"tw_stocks/00918.json"},{"revision":"a10266006bdc764f09eeccae396965b5","url":"tw_stocks/00917.json"},{"revision":"edd189669f1da14b541a1b55f024f060","url":"tw_stocks/00916.json"},{"revision":"ab90a7c30f108328dc5f18afc4175079","url":"tw_stocks/00915.json"},{"revision":"5bda38728ad324dfba93441ed3caf91d","url":"tw_stocks/00913.json"},{"revision":"98eb620668cff165937252d2dafdd541","url":"tw_stocks/00912.json"},{"revision":"cf88f90105532d18a379210d433b4032","url":"tw_stocks/00911.json"},{"revision":"adbf0a374e1d2eb301f4210266bdb0d0","url":"tw_stocks/00910.json"},{"revision":"440802518526d17ac3694e14fa4120f7","url":"tw_stocks/00909.json"},{"revision":"d8c41fe2206c3b1c2b45d841c0cf1d9c","url":"tw_stocks/00908.json"},{"revision":"82d1923db60609d93d77469c66b069c9","url":"tw_stocks/00907.json"},{"revision":"06d1f7f14fac3b3ff6634076c693d0e6","url":"tw_stocks/00905.json"},{"revision":"5e2370b7edb625ec4837e74ee96c2215","url":"tw_stocks/00904.json"},{"revision":"e8eaa65a84f63d712a94bfabe5a7a051","url":"tw_stocks/00903.json"},{"revision":"1a1d41ad4bb12b4758c5cb1320636c24","url":"tw_stocks/00902.json"},{"revision":"eac43543cf422ed1627cd7db19e0d475","url":"tw_stocks/00901.json"},{"revision":"ee2e625e699d206161305b4a2b58ce9a","url":"tw_stocks/00900.json"},{"revision":"78dec92c446ace3e80e7432944a17d39","url":"tw_stocks/00899.json"},{"revision":"ce478aa7672cb4f63f4a070fd499015b","url":"tw_stocks/00898.json"},{"revision":"7543ebf793953f9c530b94f05676543a","url":"tw_stocks/00897.json"},{"revision":"0eb1d90eb3c4a352be93e7f964bee72c","url":"tw_stocks/00896.json"},{"revision":"e462ef11bd98158304ea17263879e0cf","url":"tw_stocks/00895.json"},{"revision":"ba8d81cd07dc11021f3029964d33f0f3","url":"tw_stocks/00894.json"},{"revision":"72153ec2f849bf64fe77c3ef0709bf7d","url":"tw_stocks/00893.json"},{"revision":"4c8fb837bc80d4e3055637995a805efc","url":"tw_stocks/00892.json"},{"revision":"7b40d7fa6b45c2669517d5a15a58f006","url":"tw_stocks/00891.json"},{"revision":"df5ecff414a5b67527eda225beee2345","url":"tw_stocks/00885.json"},{"revision":"26353dc6e1ea00532188da8a12a32792","url":"tw_stocks/00882.json"},{"revision":"6fd2f4a0450a018597242deff050e394","url":"tw_stocks/00881.json"},{"revision":"49e2819fc1e3ceef6120251ecd072931","url":"tw_stocks/00878.json"},{"revision":"27f939ea8f9e7edf5a68bc8deb9a06f0","url":"tw_stocks/00876.json"},{"revision":"eef995608302899c876b51b0b52e85e7","url":"tw_stocks/00875.json"},{"revision":"d9b35dc8ecfdff3f5c50b11c937555ae","url":"tw_stocks/00865B.json"},{"revision":"84c5240923ffb96a4e5268832cb126a4","url":"tw_stocks/00861.json"},{"revision":"1c79a7e5389fbffcf7d5c80ffbab3404","url":"tw_stocks/00852L.json"},{"revision":"31156bdd3a4d008ad103d077ca640834","url":"tw_stocks/00851.json"},{"revision":"f314296973c3882f7ff53e2048d268d6","url":"tw_stocks/00850.json"},{"revision":"4e65b73fe395748ac9a150f63ac9052a","url":"tw_stocks/00830.json"},{"revision":"96d466245c11c2f1e4865decfbc3fc78","url":"tw_stocks/00783.json"},{"revision":"90629f6cae9ed0d869d5e903a3ab0711","url":"tw_stocks/00775B.json"},{"revision":"ca79542e49452974d497e36539ed0150","url":"tw_stocks/00771.json"},{"revision":"99a64dce402d018815c57716ceb36fd3","url":"tw_stocks/00770.json"},{"revision":"326b5139ea7027e77f5ad523284bf5f9","url":"tw_stocks/00763U.json"},{"revision":"22bf27521c5438b23d0fd119f1bc1ec1","url":"tw_stocks/00762.json"},{"revision":"a3d3a19323756b83b01be56f56f71fb6","url":"tw_stocks/00757.json"},{"revision":"47e31fb2e18991818df22bab1a9c2801","url":"tw_stocks/00753L.json"},{"revision":"c9a4dfd2a1c3e5c9e3900772dd825a7d","url":"tw_stocks/00752.json"},{"revision":"f4daba3ff640964e1feb1b1a30f3a540","url":"tw_stocks/00739.json"},{"revision":"0e7c8b92f2ba2481f23aac32ff8906b1","url":"tw_stocks/00738U.json"},{"revision":"6f9bdb604a7fa92486a8a0c0520a4969","url":"tw_stocks/00737.json"},{"revision":"537627b70f59e007fe76b226e17555bc","url":"tw_stocks/00736.json"},{"revision":"9b1329742827a9dea2abc4e155c34119","url":"tw_stocks/00735.json"},{"revision":"bfaf43c2f508152f83b54e0eb900f827","url":"tw_stocks/00733.json"},{"revision":"93d5b74b0edac7bc106fa9f62296fec4","url":"tw_stocks/00731.json"},{"revision":"df803c74bbf72cd323973b95e835615f","url":"tw_stocks/00730.json"},{"revision":"62077a1d180ae7dc0d4badf2bdc716d9","url":"tw_stocks/00728.json"},{"revision":"f1c03e663c91f6fa46d0fe0360d7944b","url":"tw_stocks/00717.json"},{"revision":"dee1943076e7f9bb52da868bd053fd12","url":"tw_stocks/00715L.json"},{"revision":"008a92cd703d313c46fe5a829a007c49","url":"tw_stocks/00714.json"},{"revision":"b6fb6ea9a97b40f0171413410338bd87","url":"tw_stocks/00713.json"},{"revision":"d21865d12c69203c76875dbc8bf8a248","url":"tw_stocks/00712.json"},{"revision":"f3be9747ea26fba42a50811ddcd343e4","url":"tw_stocks/00711B.json"},{"revision":"adc64c6d95ded6a140c14c88d902bf75","url":"tw_stocks/00710B.json"},{"revision":"0e044b2a6f0f46e2618863aba6bca98f","url":"tw_stocks/00709.json"},{"revision":"22b3a83a3b0c9dda5e29ba20b8fcb00a","url":"tw_stocks/00708L.json"},{"revision":"6162367cc083e07a4a4249761a689f0a","url":"tw_stocks/00707R.json"},{"revision":"5456ec1c4f5c990a7499e6ad9d9821df","url":"tw_stocks/00706L.json"},{"revision":"7e8c462cf2e12c42af950d3dc6f54634","url":"tw_stocks/00703.json"},{"revision":"bc267ac958c8dc5dccc2be7eeb8ea85d","url":"tw_stocks/00702.json"},{"revision":"b9202441798649cb004e352b8c060b33","url":"tw_stocks/00701.json"},{"revision":"6532be896befe477e0cb3abb1d45e988","url":"tw_stocks/00700.json"},{"revision":"1cc09ccc7fe2740121bf96211781728f","url":"tw_stocks/00693U.json"},{"revision":"97517163b49c616d36a8c28276ac47d9","url":"tw_stocks/00692.json"},{"revision":"ed9af3f7301474dd9c72c65b53d108ad","url":"tw_stocks/00690.json"},{"revision":"d5385a391e32f7a4c2c416aab7fb7dfc","url":"tw_stocks/00689R.json"},{"revision":"9e1f91fe7638d8a362124d4a5d96deb6","url":"tw_stocks/00688L.json"},{"revision":"0e5836e9199d37b08bb48238def817df","url":"tw_stocks/00686R.json"},{"revision":"f1c461c3bacd39fab02ed985dc62145c","url":"tw_stocks/00685L.json"},{"revision":"ae12239df97c8229d3073e91407a8dcd","url":"tw_stocks/00684R.json"},{"revision":"d1f69ed3e3d81fbfe082ace40e7b3cf4","url":"tw_stocks/00683L.json"},{"revision":"2c27168916a9aafc6c9aa0c26a4338f3","url":"tw_stocks/00682U.json"},{"revision":"f0afedc61c7926cf0ab871202df8f620","url":"tw_stocks/00681R.json"},{"revision":"dfd7ef425aeed704037f664a4f319dbe","url":"tw_stocks/00680L.json"},{"revision":"32afff3d3c824c43e94c73d80e4f3ff8","url":"tw_stocks/00678.json"},{"revision":"772d3df8219c11134677c337bec67b3b","url":"tw_stocks/00676R.json"},{"revision":"b3e8fedd067e0749b08da21162b8b1c4","url":"tw_stocks/00675L.json"},{"revision":"50e2158331892c73edff3de544d1da90","url":"tw_stocks/00674R.json"},{"revision":"2842de7fecd93768cc8fc9e49c204a3b","url":"tw_stocks/00673R.json"},{"revision":"47f78cc8fb7b23aa30738c74cfa4bd32","url":"tw_stocks/00671R.json"},{"revision":"38d15012494150f6174aed594da4ce39","url":"tw_stocks/00670L.json"},{"revision":"417a80ef3a45218e3029e3e72687ed18","url":"tw_stocks/00669R.json"},{"revision":"240990145948cab23c41132057eebf50","url":"tw_stocks/00668K.json"},{"revision":"8bc3f04c918fdddc26ef62a0736fa836","url":"tw_stocks/00668.json"},{"revision":"de337c86c60d981c6faf39461c321bdc","url":"tw_stocks/00666R.json"},{"revision":"d9be085749639cf7c14bd04eb5d4c6e3","url":"tw_stocks/00665L.json"},{"revision":"d7b2d290320f952656e0b25e070e4340","url":"tw_stocks/00664R.json"},{"revision":"8b65e3a88107ea1cb0843b2046dd7a2e","url":"tw_stocks/00663L.json"},{"revision":"af02d07bae6e4a5dc4fb3cc144c8938c","url":"tw_stocks/00662.json"},{"revision":"9f43272372592f17217db6f690cd95b2","url":"tw_stocks/00661.json"},{"revision":"204cb7dd9dcb128c97c49916683d147c","url":"tw_stocks/00660.json"},{"revision":"45043210e8fb0e40b9bc59673638b121","url":"tw_stocks/00657K.json"},{"revision":"687b870fcbefd0e12d3d402f91608bdd","url":"tw_stocks/00657.json"},{"revision":"39e8f7f023af99dfb9edbec468cb63c4","url":"tw_stocks/00656R.json"},{"revision":"c24afc99972309f773a5b2a37d9245fa","url":"tw_stocks/00655L.json"},{"revision":"52f4c05589a4af5b49dac95519e205a1","url":"tw_stocks/00654R.json"},{"revision":"71f35f67b56cc0bb4907f6d3bff72fdf","url":"tw_stocks/00653L.json"},{"revision":"b3e1b539d84fdeb3d2990fa310910fb2","url":"tw_stocks/00652.json"},{"revision":"08aa8e096e2535b1756d4e0a77310234","url":"tw_stocks/00651R.json"},{"revision":"741539d4a6a683a1baf797ed3813c695","url":"tw_stocks/00650L.json"},{"revision":"c651d26e2d3023eb34b1ef5404a3a2b6","url":"tw_stocks/00648R.json"},{"revision":"bec44ff4baca8e9775bf08c658cc0747","url":"tw_stocks/00647L.json"},{"revision":"4c0c7241afb57bebf5dd29cb9820b99f","url":"tw_stocks/00646.json"},{"revision":"f185d938a3c61587074ea9dbde836825","url":"tw_stocks/00645.json"},{"revision":"7c6ae73cc1f3d101d9f99f80677a38e6","url":"tw_stocks/00643K.json"},{"revision":"4336212058ddd6f2de44fa3da1b948a1","url":"tw_stocks/00643.json"},{"revision":"79fad833794ea5d2666dfb144c6c6d1f","url":"tw_stocks/00642U.json"},{"revision":"29e0a86d602071fde13a27f57b83bfcd","url":"tw_stocks/00641R.json"},{"revision":"bf65ec033f1ac0c96dc2ae766f873e59","url":"tw_stocks/00640L.json"},{"revision":"8b2ed031abd1cdb2733855bc77063bbb","url":"tw_stocks/00639.json"},{"revision":"3afe22b11b2c3147387f19dedf51449b","url":"tw_stocks/00638R.json"},{"revision":"c1d806d5805aba7e6a9b36422279900b","url":"tw_stocks/00637L.json"},{"revision":"899c2eb6d8904f4cb1a3bbb2063a8528","url":"tw_stocks/00636K.json"},{"revision":"58661eb8faa66a0af5a0db921e65fb54","url":"tw_stocks/00636.json"},{"revision":"547d3b4e3ec2cf99d3ac3cbd50ab5376","url":"tw_stocks/00635U.json"},{"revision":"4929db344eb093e8f9dde69218d22043","url":"tw_stocks/00634R.json"},{"revision":"e055284669766518c358920dd4a78eb8","url":"tw_stocks/00633L.json"},{"revision":"17962de5e6751d4639f89f18e38e10f6","url":"tw_stocks/00632R.json"},{"revision":"0a1d325899b1959000d68d81ba83ede0","url":"tw_stocks/00631L.json"},{"revision":"d742a43ef51ca194ab1818205ab44084","url":"tw_stocks/00625K.json"},{"revision":"d6d5ff682094c317b157a805eae9450b","url":"tw_stocks/006208.json"},{"revision":"28c3cf5d8baa7f3147e4d1baac600809","url":"tw_stocks/006207.json"},{"revision":"bbb02d4fe900adc9e8b096a058d675df","url":"tw_stocks/006206.json"},{"revision":"e1269a084485039dee80eb6c8aa2e587","url":"tw_stocks/006205.json"},{"revision":"e5ad904f4681cbf1be18cf21999ed5df","url":"tw_stocks/006204.json"},{"revision":"7afde09a4ef83f47978c169783567f94","url":"tw_stocks/006203.json"},{"revision":"cde824e4dec43fc3a1fb34fbca13ef90","url":"tw_stocks/0061.json"},{"revision":"27f0c2c59ed0e70bcbb4d4a8695c984f","url":"tw_stocks/0057.json"},{"revision":"511624caeed9576fe17aa9a3bc972233","url":"tw_stocks/0056.json"},{"revision":"6f74e8190e9e902f18b94ffc929bce1a","url":"tw_stocks/0055.json"},{"revision":"6e1554acbda13f37ca0e4b069fbf4119","url":"tw_stocks/0053.json"},{"revision":"42b30409efe27f44b3d3d3bdbfb40163","url":"tw_stocks/0052.json"},{"revision":"8f55a7dad8ded701f84544b53ec147d4","url":"tw_stocks/0051.json"},{"revision":"a134d6761e439346e1d4bddf7c59b9f3","url":"tw_stocks/0050.json"},{"revision":"7a28a066aeb4a33971f919329d281fc6","url":"tw_stocks/00406A.json"},{"revision":"9adaad4a10fb9e8419078f5565dbad0f","url":"tw_stocks/00405A.json"},{"revision":"ee5e4a820a103875229427be8fec676e","url":"tw_stocks/00404A.json"},{"revision":"e54faaa3088d60ddd8595c4d4384401c","url":"tw_stocks/00403A.json"},{"revision":"702e74eb04816f370eeb916c07a3a149","url":"tw_stocks/00402A.json"},{"revision":"3fc6e29a9c9cfc493ccdc8d15fdf491c","url":"tw_stocks/00401A.json"},{"revision":"4e5e154d1b5f0c52966ae47107d2299a","url":"tw_stocks/00400A.json"},{"revision":"975089bbd7381a66b6a4c1df65f720d3","url":"subscription/callback.html"},{"revision":"9f25ec63e059904d1a5ff5737d91d3c8","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"dd5340663ed61aad0e2631a1cd92528e","url":"financial/rebalance.html"},{"revision":"3d6fefeb446f2f950173178f89dbf3b1","url":"financial/cashflow.html"},{"revision":"c1c77b6877368b55e60fadd8a8884f2b","url":"financial/balance-sheet.html"},{"revision":"964988f8ba12cdf98acbca2e7f9fd35e","url":"finance/tags.html"},{"revision":"aba39fb1e69a775b3ce377ad0d2fa031","url":"finance/finance-section-created.html"},{"revision":"44771922f7b1c68b70a0779aa102fcea","url":"finance/authors.html"},{"revision":"c4b6804fdaef6df6d030a0e7cea89a06","url":"finance/archive.html"},{"revision":"49ccac05e40aedae779bfbec2bed4c6a","url":"finance/tags/finance.html"},{"revision":"3850cf0da5e300390f1056256645deb0","url":"finance/tags/announcement.html"},{"revision":"12bb0fae08375bc74a8bea4cdcba9995","url":"docs/tags.html"},{"revision":"4437ca06772d44059c88b3622a60ce72","url":"docs/intro.html"},{"revision":"2847227c364ebac268385e344acb02af","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"8dace4295a7f765515c72344ff4d62a4","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"b5b5b2b228f147c90cc9fd17e2020950","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"2b58645813959b8de57f030ec9e18af6","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"e96731648713f0d10559e693dbea5bbb","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"e8a0b408d0ceabed0a6cb55080c207f1","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"c5af041f5c6274984d4ab5f186c90dba","url":"docs/tags/黑箱協議.html"},{"revision":"0e2b231aa7c64464f6716994a22c10b0","url":"docs/tags/養成.html"},{"revision":"78fa1992da9756970a14ca6e0f890959","url":"docs/tags/資料安全.html"},{"revision":"e81d327e64908e0e053a53cf8612a595","url":"docs/tags/經濟循環.html"},{"revision":"aee22d75f8ae83274ed1088b1993b239","url":"docs/tags/百科.html"},{"revision":"c0ac1a2e4e177aad0259c683467c39e7","url":"docs/tags/模型控制.html"},{"revision":"b351189f9a66f6055cd17772101f6679","url":"docs/tags/數據標準.html"},{"revision":"2500808da25afe06f7c704eca82aa0ef","url":"docs/tags/接入規範.html"},{"revision":"9e0f7bec49a42fde8f0dd5e27c042ada","url":"docs/tags/指南.html"},{"revision":"d4d20a646cac07fd96a70acfd21858c5","url":"docs/tags/技術哲學.html"},{"revision":"17d717325deaf19d9e7bba6a4c699a90","url":"docs/tags/技術史.html"},{"revision":"94fda2797412e2fdec4fa7adce1f35ee","url":"docs/tags/戰鬥系統.html"},{"revision":"0f5965f3db52643b37a6cf5a2cf2ff04","url":"docs/tags/專案管理.html"},{"revision":"aeef269d291a0243fc7b09b308c7c88f","url":"docs/tags/安全架構.html"},{"revision":"faeff4f56fdb2c3d01007650c40cd691","url":"docs/tags/安全協定.html"},{"revision":"e716b10770296e835088a3a270cae567","url":"docs/tags/外部開發者.html"},{"revision":"6a40ceae517dbb188132ce41aa7cf70a","url":"docs/tags/商店.html"},{"revision":"158b8328527098012f493e911eb4c9a4","url":"docs/tags/去中心化標準.html"},{"revision":"3d29ea34bc6fb7662615b86b25031ca9","url":"docs/tags/去中心化安全.html"},{"revision":"8b3151353236bccdd4fc27c8da0e7078","url":"docs/tags/去中心化.html"},{"revision":"9ff3f46deaed1c7de8b0ef8e6e6e71e5","url":"docs/tags/top-p.html"},{"revision":"f27db6181f03f76854d885f3ef1732f0","url":"docs/tags/tokenizer.html"},{"revision":"cf5246507d6d2e919f559671aa58a7a6","url":"docs/tags/temperature.html"},{"revision":"e13d24e713ad7e7946a04b84e2ab7943","url":"docs/tags/technical-docs.html"},{"revision":"0e3d23cfcd6ea73546d17581b432f8d8","url":"docs/tags/nlp.html"},{"revision":"f497c3808bcd5b6613928919bbbf63c4","url":"docs/tags/llm.html"},{"revision":"4ebf83fd72fed587b310a14dcd0053d2","url":"docs/tags/git-hub-copilot.html"},{"revision":"4a7e98ce500b41c57f1c6b798a80454f","url":"docs/tags/generative-ai.html"},{"revision":"990a980af4174905ae515bb35823800e","url":"docs/tags/eip.html"},{"revision":"d885bd0cb14e27d5ac77e36d5cde36bf","url":"docs/tags/development-tools.html"},{"revision":"45a7027baf81b1ed687954c885373d51","url":"docs/tags/cli.html"},{"revision":"982c68fcc0a0c407d077ec717ed33b00","url":"docs/tags/claude-code.html"},{"revision":"a1fd78b415058b6cda48c390117c25f7","url":"docs/tags/bpe.html"},{"revision":"3fe5904417b247bf2b573459fa305732","url":"docs/tags/automation.html"},{"revision":"af89ec944ae89e2b548bc4bccb78f0e3","url":"docs/tags/ai.html"},{"revision":"f5e3a042ed78f84f14083db3510c6892","url":"docs/tags/agent.html"},{"revision":"79eae66ac9851a2af3d720cfd5a2adc3","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"d3f635932d0cf4011d60ad3751c9ed68","url":"docs/skill/gemini-skills.html"},{"revision":"883eb29e49d7f7062aab7f3b98e5cec6","url":"docs/skill/container-builder-skill.html"},{"revision":"309e57b715991bec60c0043be5d53226","url":"docs/skill/claude-code-skills.html"},{"revision":"0f07b2e0670e2ab5744ba60fecca34ce","url":"docs/python-workshop/python-init-file.html"},{"revision":"0c8e891aeba309f4fb438cd7c0edee03","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"e4a0601e043f73aace998cd201becba5","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"628b99f3148c5262ae0f4fa9f91f6cd3","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"262655c08a329bb8556a270cbf983eac","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"92c5935637eb842330485f3388e5d1af","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"0a9906b36d65c29c529704a4950cbaba","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"e0c0f3bf99bfe0c359bf5651c4df20a9","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"cf1d7a312f73b0d8d0ad22c2e65ea8cc","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"409298b3dfd90acb34021f4aa73d6dcb","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"5fa36339c9de53bc7ce62249d22ab3a9","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"01ea703a61910bd2eec59d0dcbc2e368","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"938d2541dde2b535cfa15edc66e575d0","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"86dd3fcb7d4c9c597081c6ba7a605e84","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"2f6bb917efd22626f32287b1d0e4eee7","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"40c0c3d2bdcfc61a0e1eb206a4844b3d","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"ce90c3ff9d5580587ea6c555b1e20d9f","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"e20ed0b4e0c8c00b63925a1015c3b8d7","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"35f537beba9c92fe9dc3f9d296dc61b7","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"a3adf7c712a51048e4ae342e377f0b9d","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"b391efae87e481ef56ba82fd857420b2","url":"docs/claude-code-series/skills.html"},{"revision":"6318e53fdbad5a8943cbb51c46cd853b","url":"docs/claude-code-series/monitoring.html"},{"revision":"b446b0de4365077211423f7e4c4384de","url":"docs/claude-code-series/getting-started.html"},{"revision":"2165a26115c3b7237407bc969d9242ba","url":"docs/category/遊戲規則與手冊.html"},{"revision":"5d7c7b0f0d75f0ba45ce614c27ba6831","url":"docs/category/發文-skill.html"},{"revision":"8e82441d8a95d4b50a48aec3660bf19c","url":"docs/category/戰情室元件-skill.html"},{"revision":"9c4b0eae44440aaa6c5f230db67ae66c","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"8656e5837dece32cde470619a7c8021a","url":"docs/category/skill.html"},{"revision":"46962994852f76c1a67f26dc0f49f707","url":"docs/category/python-workshop.html"},{"revision":"d0b0b0ac60d214c242d3a62379e42fed","url":"docs/category/egg-pet-philosophy.html"},{"revision":"af90d6d1ec36ed00a409ec6b68978e2e","url":"docs/category/claude-code.html"},{"revision":"48f5953b15d7cd88343794b857cc4b86","url":"docs/blog-skill/news-rules.html"},{"revision":"6c39dffdc40f637046aee68851da0844","url":"docs/blog-skill/history-rules.html"},{"revision":"2c74ace7f78a1f0490ae71645ac35869","url":"docs/blog-skill/finance-rules.html"},{"revision":"64dfe4b74bda6b8063ede85eeddca2fa","url":"auth/callback.html"},{"revision":"9d9c15206333313a4d4a0a869ee361fd","url":"assets/js/runtime~main.08fee492.js"},{"revision":"a449c963153ce9a9c27e65cfa83347ac","url":"assets/js/main.d8d8cfa8.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"e19a99685e8f574f530524f487ff44dd","url":"assets/js/ec1e3285.224d60ac.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"184b78988f932b1af3d291646cacd98b","url":"assets/js/e88c4a9c.2a54753d.js"},{"revision":"66610646895e85119fcaeb10eb792e93","url":"assets/js/e86a5a75.02321cfc.js"},{"revision":"a4e02652bbffab17a1f46f7304c5945b","url":"assets/js/e7f07728.4ee5a0d2.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"31546ab368ed43cb034eb41a75908f17","url":"assets/js/dfea6eb9.806b9964.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"1b8a324151fa86efd3dc167ccf6d789c","url":"assets/js/dd5b562f.9b149ea5.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"d80a4590b9bfa40f47305eb6e26408ee","url":"assets/js/d1fa896a.051abe52.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"85b06a2652bb4932eb5e95d3200c2a79","url":"assets/js/cc221b30.4d43be92.js"},{"revision":"58e92aa63bc1fdbedf72ee0f33f4dfe3","url":"assets/js/c9add68e.113da421.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"d6594b241fbf407fdb21285b27c83925","url":"assets/js/b95eaafa.bd514a92.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"ad904ad24b1bb5fc2b7d5f38983e9875","url":"assets/js/b283ca86.54a39c2f.js"},{"revision":"309a57650b3d3204438176a1616b2fe3","url":"assets/js/b2814407.21cc7b56.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"2563125d1e2a13e52cad4a509bf4189e","url":"assets/js/ac590df8.a9cc37de.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"0347156d2712276aa7053d07ac64434e","url":"assets/js/a71ba949.74a7243c.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"11148ae37d8b17ed458aff02a727edd2","url":"assets/js/a6038fd8.66d966f4.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"1b33391168b558c2cb94271cdb991de3","url":"assets/js/9adafc71.16cd7d8f.js"},{"revision":"2d66e0b5c7cdcfc99055b0dd0748b8b4","url":"assets/js/99d3b34a.dcbb0722.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"058443ed25689e413b23b45cfe24336c","url":"assets/js/98831978.4379560e.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"94b3a5b4f97b3dfe3cceb01132b7e3a6","url":"assets/js/923ed0b3.1d6e0fb9.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"7d2c08ba22052ebc7155273917b570a6","url":"assets/js/8c20996d.e4f8b9fb.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"2eb726843f004c5a993ab4cf15c0b265","url":"assets/js/853ca2df.6c38c0ca.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"fb34cb4c7dd1618cb31541ac0fa66e6c","url":"assets/js/7fbc1a25.bf2a54ba.js"},{"revision":"22c4c800bcc8dbbab236fdc034fde361","url":"assets/js/7de88436.9a96125e.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"82551b8a584ed6653c712832575d74ed","url":"assets/js/7ce5d7a1.9ac2da61.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"e22dd3da86a8707263e90fb41a83a161","url":"assets/js/607acb04.52969f19.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"1ba3ba139acd40263993031273f61477","url":"assets/js/5a762f2f.fa5dc1b8.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"9fe1153b5a02972c55ad2f839cfdce9e","url":"assets/js/56fce896.e5dc0d07.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"7403149c8fd9ef70789c9368a69f0968","url":"assets/js/54513d10.92997684.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"1c3e3868c0f60dcbde0798c236f39012","url":"assets/js/4810d89a.69aa0164.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"02c68f0352a77511dcf2344f648bee73","url":"assets/js/43ea09b6.95edc566.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"309c9326233ac0c642987194a6eeb8b6","url":"assets/js/41937f2e.7d5d4e53.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"5697c1e3fd0b83c3d9058aa1a6c42087","url":"assets/js/3ee3fb84.6cff6521.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"6e335280e452eaf27ff7a646d3c07902","url":"assets/js/36f337b1.52ced6f3.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"e1ca5a0502e616fa4e0f118627ecbcb6","url":"assets/js/304a23a0.71cffc18.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"6e4ec1d1eca15cd1c0c3e3072a68ef67","url":"assets/js/2dd9eb9e.730d4dd7.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"cc9e294f7c726cc1414ed5205d43201e","url":"assets/js/23d26d3d.1aa2958e.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"a6ef754df1490d07d87dcbdc0d89b061","url":"assets/js/179b82d4.5737b998.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"9097af1c8283885416d912874941481b","url":"assets/js/177ac620.1e60a2f6.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"267e346dbbfce7fae854d9575732a656","url":"assets/js/162c7fa0.e72d9e71.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"570c4690da99c699493ca624e65ca621","url":"assets/js/148a248b.24bf80cb.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"12765d88e05001624298d4bbd1e376b2","url":"assets/js/0e384e19.0ee53e2c.js"},{"revision":"606b27aeccee8015eb0bd4cd9771179e","url":"assets/js/0a3b6be8.474851fe.js"},{"revision":"2fd2536607cfc3ae086f0a7bc6e625f1","url":"assets/js/0962a2ae.28e2f5cb.js"},{"revision":"a27f4580fe1f6024afed55b59b761c05","url":"assets/js/0786d169.f528b906.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"94c58dea75f73a4507977a0895e8109c","url":"assets/js/02366042.be5560f4.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
    const controller = new workbox_precaching__rspack_import_0.PrecacheController({
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

})()
;
//# sourceMappingURL=sw.js.map