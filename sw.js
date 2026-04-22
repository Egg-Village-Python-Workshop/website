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
    const precacheManifest = [{"revision":"277aa7373e344aff8d9c20dbd03eadef","url":"tw_stocks.json"},{"revision":"532357affdcf5cf0ee765bbe57337d24","url":"subscription.html"},{"revision":"6c3de0184527abe6d641c661f618ac27","url":"quotes.html"},{"revision":"785ba6b17d9f7dfa1315a0c17da26c04","url":"me.html"},{"revision":"90d6b0345755ece110356500c5b0c2dd","url":"market-war-room.html"},{"revision":"f7bb3fe352e54e6400ca6160a3ad98d4","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"b0b21b9151784b1a775ac69f901b0f41","url":"index.html"},{"revision":"8df92f77cb2a55ff73736d6af85fe111","url":"games.html"},{"revision":"26a6d8221f890febf94b2a28ef364f5d","url":"finance.html"},{"revision":"384c8e0789c47c97c81001f03a785bef","url":"feedback.html"},{"revision":"9bd1ce2d83a441d370e5dcefe3a45d0d","url":"404.html"},{"revision":"cb999a8d6699a8b5e6d439c2813a4e19","url":"tw_stocks/9958.json"},{"revision":"9816c0e22d2e0525d1b49bc9df0168b1","url":"tw_stocks/9955.json"},{"revision":"86321f1948d89432a6959958f5f19267","url":"tw_stocks/9946.json"},{"revision":"154edf104c8d62bc4a65bd6fb9c9ed4c","url":"tw_stocks/9945.json"},{"revision":"6877adbb5c470ac45e9af00aed1241e7","url":"tw_stocks/9944.json"},{"revision":"db2256c33f4ffa1d4c15a48a45455a38","url":"tw_stocks/9943.json"},{"revision":"9b69796b86b78e5cb7691254b282dd0d","url":"tw_stocks/9942.json"},{"revision":"1bbe0bf24a51edebde0da5d28bd9b5bf","url":"tw_stocks/9941.json"},{"revision":"958c49b34e4793d60100c0486c7d35ef","url":"tw_stocks/9940.json"},{"revision":"b864f8ed5f86d7b8387c00126a79b70c","url":"tw_stocks/9939.json"},{"revision":"09055eb672a6b315cf659272b50c9b5c","url":"tw_stocks/9938.json"},{"revision":"14c76e880c6a47dd820132a2293ef333","url":"tw_stocks/9937.json"},{"revision":"60d4afc52487150719c0c7e0cf03b3bc","url":"tw_stocks/9935.json"},{"revision":"0e3b6201f634981bbeb6c8fad6ed3abd","url":"tw_stocks/9934.json"},{"revision":"7c3803b3efa827cec18b9947a4dbd23e","url":"tw_stocks/9933.json"},{"revision":"b5996ee540a02c4d00af6ce8590eba7a","url":"tw_stocks/9931.json"},{"revision":"2912d0fd5a801025f6a8450ad5dcff3e","url":"tw_stocks/9930.json"},{"revision":"6ab1c378b71ed0e46a0a8fc5e3524e44","url":"tw_stocks/9929.json"},{"revision":"59232fccaf166554dc4a35652686b305","url":"tw_stocks/9928.json"},{"revision":"1ebddbf7412207275020f8275739f22f","url":"tw_stocks/9927.json"},{"revision":"3887ec82120eeb7bf397d8ec12233888","url":"tw_stocks/9926.json"},{"revision":"232d579743abfaa5b83ffc7ad901730a","url":"tw_stocks/9925.json"},{"revision":"63fe8a1010f82d48b9f181bb793f23dc","url":"tw_stocks/9924.json"},{"revision":"d19a7ecce0123d7eae7904d89f255966","url":"tw_stocks/9921.json"},{"revision":"2bfbec26fd35b7e21b2a3870f2587213","url":"tw_stocks/9919.json"},{"revision":"3eef887c44e019b60966b621c0c705e7","url":"tw_stocks/9918.json"},{"revision":"c8862772e409a37964edbf295dc32c4d","url":"tw_stocks/9917.json"},{"revision":"bf6d01ed04804b3070ae51f20d6c16dc","url":"tw_stocks/9914.json"},{"revision":"0e1b5615f6beab141b242546c0378469","url":"tw_stocks/9912.json"},{"revision":"49f7e26861735678c50286d7cdebe017","url":"tw_stocks/9911.json"},{"revision":"ab7588cb5700dac076fa63a9338d3269","url":"tw_stocks/9910.json"},{"revision":"7eccc8f730df63dd512b31bb0488566d","url":"tw_stocks/9908.json"},{"revision":"0119da103faebf37b1d46543e85551d6","url":"tw_stocks/9907.json"},{"revision":"d4e56e847d71be77bf4ce9619bf86654","url":"tw_stocks/9906.json"},{"revision":"14502922ed4783e44fa0ab93f6b2a8b6","url":"tw_stocks/9905.json"},{"revision":"57de4307fe36e20d9bd8a0887875d84d","url":"tw_stocks/9904.json"},{"revision":"0023a7cacf2f9e804eabe9e4ca624e54","url":"tw_stocks/9902.json"},{"revision":"0afa775f98d66c95e7fa6cee960388fc","url":"tw_stocks/9802.json"},{"revision":"ac699b8cb1299bdf38c9710ea12379cb","url":"tw_stocks/8996.json"},{"revision":"bba46b2610413a6e2c2d04e721b67602","url":"tw_stocks/8940.json"},{"revision":"5201c23982c9f923063a9830053fbec9","url":"tw_stocks/8926.json"},{"revision":"c6dc4e426ef8ab87710c38ed128819f1","url":"tw_stocks/8499.json"},{"revision":"f3a918fc5586a87599480ae6166b6a37","url":"tw_stocks/8488.json"},{"revision":"b914cae7583f3e65894ebd257f8a93b6","url":"tw_stocks/8482.json"},{"revision":"15e4606c3909e39e3514dbb24c861eca","url":"tw_stocks/8481.json"},{"revision":"0bb7fe59aecba5261c7d71f5064886bc","url":"tw_stocks/8478.json"},{"revision":"8fffc0c6ec983fa4cf76a9f086166e82","url":"tw_stocks/8476.json"},{"revision":"fe2ebd2b62f48fd3ea0837279e387977","url":"tw_stocks/8473.json"},{"revision":"e51ede8b2687b107d780e926e679b910","url":"tw_stocks/8467.json"},{"revision":"0716e475724f280a0854946bb7872b1f","url":"tw_stocks/8466.json"},{"revision":"693b63efeea68fb8b24a3622edf7b583","url":"tw_stocks/8464.json"},{"revision":"f10684474b2e6de71b3090781fb0a53b","url":"tw_stocks/8463.json"},{"revision":"b458f4090b8a55185ef6995e183cff03","url":"tw_stocks/8462.json"},{"revision":"7f716eb8ca2a0b938da9bfdcea50f1c0","url":"tw_stocks/8454.json"},{"revision":"53e3d83b0fd33f359ea49445421b5961","url":"tw_stocks/8443.json"},{"revision":"99c3de916942cfb299abe15f1258e220","url":"tw_stocks/8442.json"},{"revision":"0b7029bc7222449ad8208f63332a419e","url":"tw_stocks/8438.json"},{"revision":"eb6d7ead61b7018660c05518f32f24b4","url":"tw_stocks/8429.json"},{"revision":"a805cf3559b8944d091426f62e28ef7d","url":"tw_stocks/8422.json"},{"revision":"48dd685f14a3aa91d91ff042d5ad975a","url":"tw_stocks/8411.json"},{"revision":"9ff4aafbdf1b7b5fa1a6ce8811bd8aae","url":"tw_stocks/8404.json"},{"revision":"4bdb9b869feb8a7922bbde95b4c7b05b","url":"tw_stocks/8374.json"},{"revision":"15145ec202a7dbc6737027fa9ff146f0","url":"tw_stocks/8367.json"},{"revision":"0a8558a67cfcb5efbfaf2b5a184977b1","url":"tw_stocks/8341.json"},{"revision":"7fcb73ee71d0fcf2f9890fcdd9415aab","url":"tw_stocks/8271.json"},{"revision":"a3d72ef0ea71837455d8b9f895f73db5","url":"tw_stocks/8261.json"},{"revision":"cf135bbb922e5d950349c6039c750414","url":"tw_stocks/8249.json"},{"revision":"bc8ea74feac1b6a55a8faf811945a4a4","url":"tw_stocks/8222.json"},{"revision":"352db1e709afa8f61d3cb3289f8721ae","url":"tw_stocks/8215.json"},{"revision":"86aa40afdb82d74ac884d24ad16a4ff6","url":"tw_stocks/8213.json"},{"revision":"df25290c5f8428e45a8ff677a3a8d0f8","url":"tw_stocks/8210.json"},{"revision":"3a06bf5e8639b09bfaee933c437302ee","url":"tw_stocks/8201.json"},{"revision":"5dc5e0f178173be82cbe6cf864504cb7","url":"tw_stocks/8163.json"},{"revision":"ca85333e97b800837b6f50c5f38a1fc1","url":"tw_stocks/8150.json"},{"revision":"7287c6eef23fee3a9913f0fefe36684e","url":"tw_stocks/8131.json"},{"revision":"f78be6aa9d2ce1b30c5c2f52e1e8f725","url":"tw_stocks/8114.json"},{"revision":"f05c6a3240a26dd9992dfb8684676838","url":"tw_stocks/8112.json"},{"revision":"43e31bdc88834681acea2568322975e7","url":"tw_stocks/8110.json"},{"revision":"0108aa76ddb9e214186b69e11535e426","url":"tw_stocks/8105.json"},{"revision":"b82889aaa7a6a8824cdf7cce34f758e7","url":"tw_stocks/8104.json"},{"revision":"c43025eb06a2ee87f25ca9eda4cb6f18","url":"tw_stocks/8103.json"},{"revision":"21af76ca1825153e5e53b581316ef708","url":"tw_stocks/8101.json"},{"revision":"5b17e3b647637aa0e92bba58a14f418e","url":"tw_stocks/8081.json"},{"revision":"4d326e18fa84e0a4d9b400a50c6048ef","url":"tw_stocks/8072.json"},{"revision":"298582fd0dfa17645d4ffab525d3b8d5","url":"tw_stocks/8070.json"},{"revision":"ab89ada87baf568b0b95a2773b26815f","url":"tw_stocks/8046.json"},{"revision":"14a84463ba8e9c0d50d7b0373535f260","url":"tw_stocks/8045.json"},{"revision":"53c3c8e45a99cdb4cd55e59633e3fd69","url":"tw_stocks/8039.json"},{"revision":"9b9a5c4bb1330cb0c6d3db641161587a","url":"tw_stocks/8033.json"},{"revision":"a0943e21cb15b046f53928ac236c86bd","url":"tw_stocks/8028.json"},{"revision":"53376ec87bcb863df954f205778f187f","url":"tw_stocks/8021.json"},{"revision":"e85f5e9eb946cc0668d1095c93860dfd","url":"tw_stocks/8016.json"},{"revision":"a4bda41b44e56e783a44b738d53a11df","url":"tw_stocks/8011.json"},{"revision":"a8f81f1b59ff92aa33e8f52c29387b09","url":"tw_stocks/7822.json"},{"revision":"846a26c4c3112122205c7e7796437168","url":"tw_stocks/7799.json"},{"revision":"7f934074b0baa8625aaa959a60049dcf","url":"tw_stocks/7795.json"},{"revision":"472f41ca14c376a9d2c21653f896d072","url":"tw_stocks/7791.json"},{"revision":"959cb52433924d1ddddd560277728306","url":"tw_stocks/7788.json"},{"revision":"d8564d25cccd1ad7f9c2a01a379df222","url":"tw_stocks/7786.json"},{"revision":"fcc6e319ab852fba5e4615d5f8248a6c","url":"tw_stocks/7780.json"},{"revision":"e3b31571fbf00b74ee9a3dd9ea4af2cf","url":"tw_stocks/7769.json"},{"revision":"ae6fa61c89d9e2cff8de4f651a5227dc","url":"tw_stocks/7765.json"},{"revision":"c7c38cfd6e300c3c37c15731f5fd4d69","url":"tw_stocks/7750.json"},{"revision":"ff17fa75ad9008eb37e30fbd23c2550b","url":"tw_stocks/7749.json"},{"revision":"2a8233f3781314fe479ded59099bd45e","url":"tw_stocks/7736.json"},{"revision":"f8c114f03003c5c5d79e42574464d5ac","url":"tw_stocks/7732.json"},{"revision":"2d0ea853641f77a9ef543589f35a4006","url":"tw_stocks/7722.json"},{"revision":"dde9f1bc170575eb1aa1752d0a9d9411","url":"tw_stocks/7721.json"},{"revision":"76c1390126ac191c212baa866bda8e80","url":"tw_stocks/7711.json"},{"revision":"73b3e4b7bb3fed98c81137b62debc673","url":"tw_stocks/7705.json"},{"revision":"49c05a0ee32d5f9aa083974dea0afc0b","url":"tw_stocks/6994.json"},{"revision":"c2c51d96cd6ea5ad0092f4f430b45239","url":"tw_stocks/6965.json"},{"revision":"79d7d7450b866b04b823e983d36db801","url":"tw_stocks/6962.json"},{"revision":"fd61a33de067648c512d7f77e510d679","url":"tw_stocks/6958.json"},{"revision":"ccb71937210c50a5003e4502aa677e82","url":"tw_stocks/6957.json"},{"revision":"cca1df43a1de4cf112e77ebd8d8e83c2","url":"tw_stocks/6952.json"},{"revision":"594ea83ee6ed58b67c44a48740bf4568","url":"tw_stocks/6944.json"},{"revision":"e139e460cfe7eb5427eda4c695e3f8c7","url":"tw_stocks/6937.json"},{"revision":"74b25f4e39e72d168308ae05de156e93","url":"tw_stocks/6936.json"},{"revision":"290863410abffcd852a0457d76edf7e0","url":"tw_stocks/6934.json"},{"revision":"ba9ad225d8f6f9fcdeb93354a37f1937","url":"tw_stocks/6933.json"},{"revision":"60986e0887438a6f0db618c0f1327199","url":"tw_stocks/6931.json"},{"revision":"cebf7ce410c7aaf86650cf196ef3e0af","url":"tw_stocks/6928.json"},{"revision":"eb02d36e0af295e6c8199a3b37e1d1c5","url":"tw_stocks/6923.json"},{"revision":"64e1d7c67052c5d9fbed851a9ada7999","url":"tw_stocks/6919.json"},{"revision":"f10101f21554059770c555aa21d34fd2","url":"tw_stocks/6918.json"},{"revision":"aa2e65156a15c16f561cee369603b102","url":"tw_stocks/6916.json"},{"revision":"8847f9accc323cfbc6d5f3c4a573a8b4","url":"tw_stocks/6914.json"},{"revision":"d7f5691b371b48464fb011e362e161f0","url":"tw_stocks/6909.json"},{"revision":"28924bc5e2b6d923f0c80b8f5d902f64","url":"tw_stocks/6906.json"},{"revision":"43d71d9a2546b324c32fa1f07ab8a9ca","url":"tw_stocks/6902.json"},{"revision":"597dc27dfa9c3ffd3458f0afcd4efcb8","url":"tw_stocks/6901.json"},{"revision":"16195131b8d5af11f7edd39e07d48992","url":"tw_stocks/6890.json"},{"revision":"86fdf759e7013623abcf200a8476e036","url":"tw_stocks/6887.json"},{"revision":"7c85529f4fcd244286dd3277942801d7","url":"tw_stocks/6885.json"},{"revision":"0f69dd24da8c4d3e8a29a720d47b7e77","url":"tw_stocks/6873.json"},{"revision":"94d517f43fe94d70c1ced0a058db6fe7","url":"tw_stocks/6869.json"},{"revision":"7ae90128043bb4a0ec9a66db1cff9fc4","url":"tw_stocks/6863.json"},{"revision":"dcd860cc2142e1ee06c0b5ed7c3e4ce8","url":"tw_stocks/6862.json"},{"revision":"7b71309e860da03c31684747323287dd","url":"tw_stocks/6861.json"},{"revision":"a739b1be0c7ba2ee6fb0503f1a301e5e","url":"tw_stocks/6838.json"},{"revision":"ff3e4a80de832debb4d722e5f9588d5e","url":"tw_stocks/6835.json"},{"revision":"e824dfa07cd976a3bf9f8194ef3b3df6","url":"tw_stocks/6834.json"},{"revision":"838c1d5c71c4744b228737009dd03904","url":"tw_stocks/6831.json"},{"revision":"5d5063b43a05df180b0195254b9ddd9e","url":"tw_stocks/6830.json"},{"revision":"b2c005b80d08fa5d58e49bf6e1d8039a","url":"tw_stocks/6807.json"},{"revision":"54f57aa918de6c75eb13207050d2fa28","url":"tw_stocks/6806.json"},{"revision":"558f91ea577bcdfa7d43b31b17242bff","url":"tw_stocks/6805.json"},{"revision":"65a04d08ddfd30e86833a45c81af8ef8","url":"tw_stocks/6799.json"},{"revision":"afec9c9523a84a39c8a5ce71e5b8024f","url":"tw_stocks/6796.json"},{"revision":"7a49479d59147ddbcddaaba5a8597507","url":"tw_stocks/6794.json"},{"revision":"cd6dbaa48714d70967a1a4da86601a63","url":"tw_stocks/6792.json"},{"revision":"14a239aff32cff12a1d28b7847c69408","url":"tw_stocks/6790.json"},{"revision":"18f2105779e5bd4b513d6a2c1ce40001","url":"tw_stocks/6789.json"},{"revision":"3b0ff6d889d82fccd17d58423dd43de6","url":"tw_stocks/6782.json"},{"revision":"3b67420cb8011e691232c7b08a5aaac6","url":"tw_stocks/6781.json"},{"revision":"1fdc0a14276d0aa21a15a3658f83bc7b","url":"tw_stocks/6776.json"},{"revision":"149190d113ddb1ce337aaf6b08ce9cce","url":"tw_stocks/6770.json"},{"revision":"1e1f91a92d8d2105cf17588cdadb7ee2","url":"tw_stocks/6768.json"},{"revision":"fb995d5c2f8437d108fedf294f583eda","url":"tw_stocks/6757.json"},{"revision":"f6d4619ceec79d6f645432473891ae18","url":"tw_stocks/6756.json"},{"revision":"30dd618fc052d5f1b3fc23ae51d3cb8e","url":"tw_stocks/6754.json"},{"revision":"e18569a4446001160df430356843d4df","url":"tw_stocks/6753.json"},{"revision":"fd44691742a56606d94788adaa81681f","url":"tw_stocks/6743.json"},{"revision":"6b33e6d878e0b35b790d026ec0ebfeb3","url":"tw_stocks/6742.json"},{"revision":"f55ad6c494867f94d9484731a1f88470","url":"tw_stocks/6722.json"},{"revision":"bfd95ebba36f60234ef7547c4d6951a2","url":"tw_stocks/6719.json"},{"revision":"dfa823cec92fb7bb259fd32afb35ba92","url":"tw_stocks/6715.json"},{"revision":"06a4373c4d471dd50b8c9ee972c9f3ac","url":"tw_stocks/6706.json"},{"revision":"03cb6df6752772d5d207841764ff98c7","url":"tw_stocks/6698.json"},{"revision":"082759ff3efccbca4d7fd58ed00b4655","url":"tw_stocks/6695.json"},{"revision":"27410f3c9e996611e95b9675821eff3f","url":"tw_stocks/6691.json"},{"revision":"33e43460379babd1f59de9f0e0bd98ad","url":"tw_stocks/6689.json"},{"revision":"ca61cf61adabbc812737e609b4542015","url":"tw_stocks/6674.json"},{"revision":"564025c19291d956e9f948257eea66cb","url":"tw_stocks/6672.json"},{"revision":"a621ac57afb2fad646398671b9e3ad9f","url":"tw_stocks/6671.json"},{"revision":"b103a41d749f0569509367485f656b79","url":"tw_stocks/6670.json"},{"revision":"bd7aa0eade2440c93695bc7941a02f15","url":"tw_stocks/6669.json"},{"revision":"5ba60524127e1e2b740f907e25d56586","url":"tw_stocks/6668.json"},{"revision":"7ba7da59cfd6ddd1c8b30c5538c60b30","url":"tw_stocks/6666.json"},{"revision":"745464553322f63133e2ae495717b09f","url":"tw_stocks/6658.json"},{"revision":"e4b7b04480f77d1810e65fd3e0e28602","url":"tw_stocks/6657.json"},{"revision":"1f029e75887e129142852c94a6d18909","url":"tw_stocks/6655.json"},{"revision":"e1c8c8ce8855b4099c6e633182452297","url":"tw_stocks/6641.json"},{"revision":"4d34fa36f9bfdd591d8b349f54ffe1fb","url":"tw_stocks/6625.json"},{"revision":"bbfea03da285847d4b437449ff30a544","url":"tw_stocks/6614.json"},{"revision":"59209914088c753a4473d31591b1efdc","url":"tw_stocks/6606.json"},{"revision":"320d3a04c41ab0fa86cc1613b96da4e1","url":"tw_stocks/6605.json"},{"revision":"c8f7f0e869b629c658cc063ec70ab0b1","url":"tw_stocks/6598.json"},{"revision":"fc4ae4bfeb966cea726b7518aad25306","url":"tw_stocks/6592.json"},{"revision":"c45ba4658339fab82f6707b3be4e86fc","url":"tw_stocks/6591.json"},{"revision":"fe341ad20c1334f17483afab1027673a","url":"tw_stocks/6589.json"},{"revision":"53c92e65ff8fe72697e34403f89486b0","url":"tw_stocks/6585.json"},{"revision":"f3bb9b0aae6726c9393c9778f4c8a82c","url":"tw_stocks/6582.json"},{"revision":"9d4e4b069b20a13b16bced8fa9431803","url":"tw_stocks/6581.json"},{"revision":"502e7c4318f9e7f61ea182f2d4c06f07","url":"tw_stocks/6579.json"},{"revision":"817e8a6ef2653cf41aac29d8f4229776","url":"tw_stocks/6573.json"},{"revision":"74e0968161bb131d7e0c89860f0a1f52","url":"tw_stocks/6558.json"},{"revision":"ab65cbd7c4cd006bedc821abbd55400d","url":"tw_stocks/6552.json"},{"revision":"57e1009b26b3c5d973e4710f48140b74","url":"tw_stocks/6550.json"},{"revision":"b477ef7e517eb9e6449715f941873ea0","url":"tw_stocks/6541.json"},{"revision":"e12836fa232b4e2d3eea36492a47101a","url":"tw_stocks/6533.json"},{"revision":"f16dce9286e3b4f6990e72d4541673c4","url":"tw_stocks/6531.json"},{"revision":"889a86e2205ea3b69f7bf3f2eba59f67","url":"tw_stocks/6526.json"},{"revision":"638459bb15732d8c68b54d87fe341a39","url":"tw_stocks/6525.json"},{"revision":"062e8bebd7e307b383fd7946d3690afa","url":"tw_stocks/6515.json"},{"revision":"b4c19ab2484cf027dd5b55605081efa5","url":"tw_stocks/6505.json"},{"revision":"772b46597c600be090d33446d03c11b6","url":"tw_stocks/6504.json"},{"revision":"fa13598c9329da1552b1557ab419b3f2","url":"tw_stocks/6491.json"},{"revision":"9a92989ec23e559e9fb40c26f05e6fee","url":"tw_stocks/6477.json"},{"revision":"0482147bc030b3af91b215c42c37c4a7","url":"tw_stocks/6472.json"},{"revision":"d361b02101fad984f4ecaaf034510a98","url":"tw_stocks/6464.json"},{"revision":"1fb96ade8d460bc75544ae1e0bb3b9c5","url":"tw_stocks/6456.json"},{"revision":"e3e4eb5583a300839b82a4a720dd8c0b","url":"tw_stocks/6451.json"},{"revision":"21c8d74799d9e5adf7eb87c5393d2347","url":"tw_stocks/6449.json"},{"revision":"80bb48c0b9f65306f0a74ea20e7fee5b","url":"tw_stocks/6446.json"},{"revision":"cf23c19b5074a275bbff6bccba22914c","url":"tw_stocks/6443.json"},{"revision":"0472d12fed29b580dae969579412e4db","url":"tw_stocks/6442.json"},{"revision":"2aba251260fe246399f7f5cabd5ee1f8","url":"tw_stocks/6438.json"},{"revision":"73878727d242941c4c6f4cd37d4fa3a9","url":"tw_stocks/6431.json"},{"revision":"f978ac4a6df1f181f08d56202c379cfd","url":"tw_stocks/6426.json"},{"revision":"84d0f00c45622eb2d4e56aaaf785e5ec","url":"tw_stocks/6416.json"},{"revision":"9033770c9cc5a5c22c4ca1883ef6fa38","url":"tw_stocks/6415.json"},{"revision":"95a507c0aff524e905f39c2357b5df6c","url":"tw_stocks/6414.json"},{"revision":"4f779d5e868f1655db5120f846fed222","url":"tw_stocks/6412.json"},{"revision":"50394b91bd7c3369d428db22ed439304","url":"tw_stocks/6409.json"},{"revision":"592fce9cbd229e7cc0c20bee713f3443","url":"tw_stocks/6405.json"},{"revision":"5049dd504a4f666e2039b2163f9ac0d1","url":"tw_stocks/6285.json"},{"revision":"4c139bf1b6f02649c7174e96604ce580","url":"tw_stocks/6283.json"},{"revision":"eb9aa71942b280a274e14c38a57182cb","url":"tw_stocks/6282.json"},{"revision":"e246c99d81942870a7a2d71092830922","url":"tw_stocks/6281.json"},{"revision":"a8c6050aa4968f4b51d5d4658fda92d7","url":"tw_stocks/6278.json"},{"revision":"0000dfa63c9d01ece17406769688bb1f","url":"tw_stocks/6277.json"},{"revision":"d5fc08cc10a25f338731a35f78dfcae6","url":"tw_stocks/6272.json"},{"revision":"904d58575b625eb7f1cb0803a64cff43","url":"tw_stocks/6271.json"},{"revision":"0ae250b3633fecf3a5cf61264ee51abb","url":"tw_stocks/6269.json"},{"revision":"399c93b6068e3bbc5614a627d50b099c","url":"tw_stocks/6257.json"},{"revision":"a43aa58c5679ad9157e1dc2bd43c4486","url":"tw_stocks/6243.json"},{"revision":"4c3669f40a5bdf220288da09bf9967a8","url":"tw_stocks/6239.json"},{"revision":"90cae384166bfce4f5843438c3c8b94c","url":"tw_stocks/6235.json"},{"revision":"01545591eacba910f038201653952125","url":"tw_stocks/6230.json"},{"revision":"daa1761bc7adeb6214a923d5e550d55e","url":"tw_stocks/6226.json"},{"revision":"f52dd80923d2c89590155bd9089f900b","url":"tw_stocks/6225.json"},{"revision":"7bd2364c004241609a727147ed15be88","url":"tw_stocks/6224.json"},{"revision":"5ef69929419ef371940d4a312fc84b60","url":"tw_stocks/6216.json"},{"revision":"2a48bafe883c1975eb50eb0311ec8dca","url":"tw_stocks/6215.json"},{"revision":"8ca227a5b52c2c714221486b90065d9f","url":"tw_stocks/6214.json"},{"revision":"559ad1164a1cea2f89b85bba13745aea","url":"tw_stocks/6213.json"},{"revision":"ee580997d74bec50d8c917f9da98c429","url":"tw_stocks/6209.json"},{"revision":"4754899cc0f34d68c6119e23dde92163","url":"tw_stocks/6206.json"},{"revision":"193b3b2b15aceea5cca5c44c0d953df9","url":"tw_stocks/6205.json"},{"revision":"37767903c3c52b1fee1b47febd812f14","url":"tw_stocks/6202.json"},{"revision":"69daaa57e0e01f4ffb8c4d41db4b317a","url":"tw_stocks/6201.json"},{"revision":"4adfed8a735087f2060e0a681549c0e7","url":"tw_stocks/6197.json"},{"revision":"c9d0866c367079bb5ea235b55a556d0b","url":"tw_stocks/6196.json"},{"revision":"f972d6168a491283739264b0d35e1a75","url":"tw_stocks/6192.json"},{"revision":"8d8128f882ac9466d01120db041481fe","url":"tw_stocks/6191.json"},{"revision":"54104c30b45dd9845c6bf746a58e05ea","url":"tw_stocks/6189.json"},{"revision":"cd4e0c5bf880920b741fd71b291de841","url":"tw_stocks/6184.json"},{"revision":"0f0618e0fac6edbc0dc8f96c3df9c2af","url":"tw_stocks/6183.json"},{"revision":"665b41ed582a88e71bfbefd274dbc0d1","url":"tw_stocks/6177.json"},{"revision":"0397d390adf7ac41ae6a3d2e55f341ba","url":"tw_stocks/6176.json"},{"revision":"0a2aba66d357fcf3230b33b6e179f786","url":"tw_stocks/6168.json"},{"revision":"29e457e3268538c4a6683febe1f48504","url":"tw_stocks/6166.json"},{"revision":"e4e1b99cd6e47ac363401601875e2a03","url":"tw_stocks/6165.json"},{"revision":"7e364444181653c8c1df24f5c6463e24","url":"tw_stocks/6164.json"},{"revision":"6981e16f278dc58cffcb8f1068e42d92","url":"tw_stocks/6155.json"},{"revision":"b7aa54e7fcf9f5280947ee23a5cbbbf1","url":"tw_stocks/6153.json"},{"revision":"71d099c6c8f723f982a77faec97bd4cc","url":"tw_stocks/6152.json"},{"revision":"49a646f0070bfd83b0d16460bac31ce8","url":"tw_stocks/6142.json"},{"revision":"631f52ac0be0875f7d3a4a50f9c9484f","url":"tw_stocks/6141.json"},{"revision":"e6077d671b29576bcc7ca847363509d8","url":"tw_stocks/6139.json"},{"revision":"04602e5f7f6d4d77a02a49578a301e36","url":"tw_stocks/6136.json"},{"revision":"ad10f74f883439ea0d152bcf4ac7f93e","url":"tw_stocks/6133.json"},{"revision":"13a5c06cf52143a46b60259671650f34","url":"tw_stocks/6128.json"},{"revision":"cfab0fbfac1fdef8d0b2e6237629a9b4","url":"tw_stocks/6120.json"},{"revision":"dfd9c56038a72ddeeca4ef4248230bff","url":"tw_stocks/6117.json"},{"revision":"6cc3f2375e00041ee95e1003956571e4","url":"tw_stocks/6116.json"},{"revision":"b0b3563fefdc5d2c3306a0c6d037946a","url":"tw_stocks/6115.json"},{"revision":"f3fa2d7626c137ae5f0459c8bd9b2d68","url":"tw_stocks/6112.json"},{"revision":"642631cc725100b766f4ed531601e285","url":"tw_stocks/6108.json"},{"revision":"2b70ae89bfb0529a3731da15be11d956","url":"tw_stocks/6024.json"},{"revision":"732af85b89378344e6a95a0b7f8d0a65","url":"tw_stocks/6005.json"},{"revision":"35c6c8a0fafce671a7e7f21a1d25e57a","url":"tw_stocks/5907.json"},{"revision":"c07eeb6b040052fd0a6a1c57d4c954c4","url":"tw_stocks/5906.json"},{"revision":"33528854b5c2840476ac7459605360bb","url":"tw_stocks/5880.json"},{"revision":"44a2a623151ae481c41f171213e9f4eb","url":"tw_stocks/5876.json"},{"revision":"1c0ac92791ab65ea386df795c29993c4","url":"tw_stocks/5871.json"},{"revision":"bfcb9dbf7707a705357d83f23206403b","url":"tw_stocks/5706.json"},{"revision":"d3d9552d4eb5791a0456b7aba6991166","url":"tw_stocks/5608.json"},{"revision":"997e5cd4cd1a41fd02bb6d3e46c353dd","url":"tw_stocks/5607.json"},{"revision":"796ec06878b59b64482a7d0abd9a541c","url":"tw_stocks/5546.json"},{"revision":"0eee252506789537c89b2e4d14b5d40b","url":"tw_stocks/5538.json"},{"revision":"dbd1e56b08977e1518461bdbdc6d9ebd","url":"tw_stocks/5534.json"},{"revision":"6eda92dc306b9b26bc807eda2f412667","url":"tw_stocks/5533.json"},{"revision":"bed9884d2994eef3355caecdb0c6da0b","url":"tw_stocks/5531.json"},{"revision":"659b216de3cef41bf1d1d28d3d04f4a5","url":"tw_stocks/5525.json"},{"revision":"b8c18d8b0340d9ca7b82e867c0a41881","url":"tw_stocks/5522.json"},{"revision":"4a350260863be25869c8467dab475181","url":"tw_stocks/5521.json"},{"revision":"e9cce9b9231905f8538d352bb7efdb5b","url":"tw_stocks/5519.json"},{"revision":"5b1c973ce00f86529b837e166030db52","url":"tw_stocks/5515.json"},{"revision":"0f3231f5d5fc5d5ad779a8ea9621336f","url":"tw_stocks/5484.json"},{"revision":"3325e9a3f5d9f2084e8e7b3f7b7f8932","url":"tw_stocks/5471.json"},{"revision":"b2ee4395dd6b0f7dd963c3bf822c7a7d","url":"tw_stocks/5469.json"},{"revision":"5e6bf979965c7df255a5844184727957","url":"tw_stocks/5434.json"},{"revision":"665139a3498052546f8ac9754e0ba04d","url":"tw_stocks/5388.json"},{"revision":"72828a80d8bd95601381f313786b0773","url":"tw_stocks/5306.json"},{"revision":"de7acb0399a28ae9761af0ed30fa6477","url":"tw_stocks/5292.json"},{"revision":"fe124d05dbfb0a4521e82fc1780b1db7","url":"tw_stocks/5288.json"},{"revision":"b3ea14d7e5b4ef775628afc72cbc5ef5","url":"tw_stocks/5285.json"},{"revision":"044cfc79fd6cc3819f86bca5b108a6dc","url":"tw_stocks/5284.json"},{"revision":"28660c4f8fe46ad9a096d5b79edb4f51","url":"tw_stocks/5283.json"},{"revision":"ff669ed9394ab9abdd69d760ad5b70ff","url":"tw_stocks/5269.json"},{"revision":"0772f3e31b109b62cfab029b9990e942","url":"tw_stocks/5258.json"},{"revision":"da9edd2215d775220fc6132350e9ff9a","url":"tw_stocks/5244.json"},{"revision":"3090bfaf5c7470b0ca16f3f285ed49a0","url":"tw_stocks/5243.json"},{"revision":"23454b7890ed9a00639530f80aebfa5e","url":"tw_stocks/5234.json"},{"revision":"459c68970fba01361ca9facdb8ee9a3a","url":"tw_stocks/5225.json"},{"revision":"e51c19cab4c34600e46d15730f6195a7","url":"tw_stocks/5222.json"},{"revision":"0dbe1359d53368984938f0de5b048ec4","url":"tw_stocks/5215.json"},{"revision":"2c7755658283268b104efa8dba4551d0","url":"tw_stocks/5203.json"},{"revision":"3609eb23c9c1a917cd29ec8e57d39ba6","url":"tw_stocks/5007.json"},{"revision":"32001d12b75d21eddbb45dd2ac7e3336","url":"tw_stocks/4999.json"},{"revision":"76631c3814fa1f06565c26583a319375","url":"tw_stocks/4994.json"},{"revision":"592fb744115ac733582572e1e3f9a0f9","url":"tw_stocks/4989.json"},{"revision":"10ec9b221cc38394489e651f768548c0","url":"tw_stocks/4977.json"},{"revision":"64acf03f0dc036019fee6261e2c2d006","url":"tw_stocks/4976.json"},{"revision":"71999369df65c1f979ace7ba49e9ccfe","url":"tw_stocks/4968.json"},{"revision":"68be3ea9501ee5d1215c9bfc89663759","url":"tw_stocks/4967.json"},{"revision":"e0562ef14f1bfac324658de6366fb5dc","url":"tw_stocks/4961.json"},{"revision":"86e8596c7ac03557f32fe6c6cd109cb8","url":"tw_stocks/4960.json"},{"revision":"7dcd5ffab7bbfa4346cd7aa1170e302e","url":"tw_stocks/4958.json"},{"revision":"6a85bf3b3da9c093e5751a7dd89fc461","url":"tw_stocks/4956.json"},{"revision":"8aadbff22f89851a31a550d6394f4c8b","url":"tw_stocks/4952.json"},{"revision":"b1f3fdb88c8978559fb6f3ff0b8601dd","url":"tw_stocks/4949.json"},{"revision":"a3315c765194b115a1c13962375117e9","url":"tw_stocks/4943.json"},{"revision":"6e6c266d9c7ceca8530273163bea9a70","url":"tw_stocks/4942.json"},{"revision":"c588c048685cc347a459cda565d8612b","url":"tw_stocks/4938.json"},{"revision":"d43789a666536c5caf30b6ad368c5674","url":"tw_stocks/4935.json"},{"revision":"82a3196a8a0fbed9b69a595b68aeffe2","url":"tw_stocks/4934.json"},{"revision":"ec79dd3b748276a99033a29fd97f570d","url":"tw_stocks/4930.json"},{"revision":"d4bd59697f0246a9ff4ea3df73dde7c9","url":"tw_stocks/4927.json"},{"revision":"4a882d80a7b9e212e6713dd7d3dab61f","url":"tw_stocks/4919.json"},{"revision":"78f6b8f9fb7d97f4adb4edc5eff655f3","url":"tw_stocks/4916.json"},{"revision":"232744c0f852a4ca95e8e0fdc5e34c72","url":"tw_stocks/4915.json"},{"revision":"795b83a34def7f1ce6d87783d58a2788","url":"tw_stocks/4912.json"},{"revision":"227ca010ee1cd588ae8a93285d89f413","url":"tw_stocks/4906.json"},{"revision":"e5a652819073944728ea53a4b0b96635","url":"tw_stocks/4904.json"},{"revision":"16c832711e239f625aa3ece1a85e49ad","url":"tw_stocks/4807.json"},{"revision":"fe7436bf996f1c44aa9da2e67aba1efb","url":"tw_stocks/4771.json"},{"revision":"8b6892f2f0545642f03eeb36ce635504","url":"tw_stocks/4770.json"},{"revision":"31aca28108265dce56612bd559b8a0d6","url":"tw_stocks/4766.json"},{"revision":"9f7d8d3eb360cb8e9eb869be6653e529","url":"tw_stocks/4764.json"},{"revision":"5e49e05122759e4207e77092b6d9b5f7","url":"tw_stocks/4763.json"},{"revision":"fbecd3280106d873cd1ba57b73c17f55","url":"tw_stocks/4755.json"},{"revision":"f67e36b0756dbd684dada912a6a0f3fd","url":"tw_stocks/4746.json"},{"revision":"60d2cec36781f28f51a615ae96ae9956","url":"tw_stocks/4739.json"},{"revision":"871d4b9e48f4c33dd002440d04e3b466","url":"tw_stocks/4737.json"},{"revision":"f2385288713f0f049eaadb0fa22784ba","url":"tw_stocks/4736.json"},{"revision":"f2c3fc8e6008e260063109c88a026601","url":"tw_stocks/4722.json"},{"revision":"773a98b7c6dc7a45597580d938b655c3","url":"tw_stocks/4720.json"},{"revision":"13ccb6bf4921183a54fd43ba14668eb3","url":"tw_stocks/4588.json"},{"revision":"828a3b16046dc9a29fb54f14a0621a9a","url":"tw_stocks/4585.json"},{"revision":"d4ebf7a057f10b25aa1547dc7de9621f","url":"tw_stocks/4583.json"},{"revision":"eef894f8ba764397206409db061532e4","url":"tw_stocks/4581.json"},{"revision":"2cd3d2c0ef8bca9a60cae853396aa889","url":"tw_stocks/4576.json"},{"revision":"22af05844dbda8cc6c53ab16cbe5b1cd","url":"tw_stocks/4572.json"},{"revision":"a2b9ddbf95aa3ed7b14926f2f199ed78","url":"tw_stocks/4571.json"},{"revision":"56417f6a1fa643b86da8511a6815bf75","url":"tw_stocks/4569.json"},{"revision":"86f2d81ace8328898cdad3ce79e2ace3","url":"tw_stocks/4566.json"},{"revision":"a6842044521511277e4080cfee47cb3e","url":"tw_stocks/4564.json"},{"revision":"706b0332146196d5c44d99765b08435d","url":"tw_stocks/4562.json"},{"revision":"0010d14cf0a8dee9ac2e82dcfa088cd4","url":"tw_stocks/4560.json"},{"revision":"c2f335a40e246be939234f9870473001","url":"tw_stocks/4557.json"},{"revision":"3ec2f548ab9f6661cd4cfaca64bcc14e","url":"tw_stocks/4555.json"},{"revision":"8cf085de595e4402f408c56c898f5818","url":"tw_stocks/4552.json"},{"revision":"17b55d9b9d21de0c01bc39eb5f1f33b3","url":"tw_stocks/4551.json"},{"revision":"14f58524d04c8a12d46f9a7288f2d70a","url":"tw_stocks/4545.json"},{"revision":"b1f414afbb25b2b6af32cfd72f7357ce","url":"tw_stocks/4540.json"},{"revision":"9982e6e9ea94a3a4c6e093b1e2e3b96c","url":"tw_stocks/4536.json"},{"revision":"e4011bed5837dc74e58e87de1a5340ab","url":"tw_stocks/4532.json"},{"revision":"81a4d3df8a21f915f355fefaf170bbdc","url":"tw_stocks/4526.json"},{"revision":"6e9fa02fd96c31ad805b2d7298a5c352","url":"tw_stocks/4441.json"},{"revision":"fabc1323e23efde144362ff42f55a573","url":"tw_stocks/4440.json"},{"revision":"7c0b93d5b19136f1d23a5317542a0d3d","url":"tw_stocks/4439.json"},{"revision":"63737ee318817425155dee54ac54bafb","url":"tw_stocks/4438.json"},{"revision":"a7e37c65adaa46db5ed11f308860afc8","url":"tw_stocks/4426.json"},{"revision":"d5a476bca95491362dd98d1cbaf23579","url":"tw_stocks/4414.json"},{"revision":"4c658c32ee772c421ec14565c10cdbd7","url":"tw_stocks/4306.json"},{"revision":"6f81ecab4398db5608b1aa78051699e0","url":"tw_stocks/4190.json"},{"revision":"970dbddb9f30e961f43f9e3206dd19ca","url":"tw_stocks/4169.json"},{"revision":"28a4fff30be677c02c02855b16000eb7","url":"tw_stocks/4164.json"},{"revision":"171d0ae223114340a0e9155669734be6","url":"tw_stocks/4155.json"},{"revision":"d232fc9efdac44a47ecf966b0f537872","url":"tw_stocks/4148.json"},{"revision":"1fd671d766580b593a5c00ca5ca09a0b","url":"tw_stocks/4142.json"},{"revision":"cf1be5aa0a60595df350b91d77220a35","url":"tw_stocks/4137.json"},{"revision":"284876d5d88b6ea4c8512e78fe6bacfe","url":"tw_stocks/4133.json"},{"revision":"7112175418f8baa5345e8ff96985d189","url":"tw_stocks/4119.json"},{"revision":"81bf5f4605ed948ce9c4fa3ab9d56d0e","url":"tw_stocks/4108.json"},{"revision":"16a281d49715947318d1f73337a0c60a","url":"tw_stocks/4106.json"},{"revision":"0285e0c6146513b0ebc27cf74074b3bb","url":"tw_stocks/4104.json"},{"revision":"aa762b3d6b10f6ea51567d8f05b53768","url":"tw_stocks/3717.json"},{"revision":"f40a2fb4afc91ce898c709c3f4657e3c","url":"tw_stocks/3716.json"},{"revision":"b8d2a54b5285f4ab702fb7eedab4a77d","url":"tw_stocks/3715.json"},{"revision":"5cb317c1f93127d2d0511874b26ccc3a","url":"tw_stocks/3714.json"},{"revision":"a23e56d6c79035dee6e044f992d73779","url":"tw_stocks/3712.json"},{"revision":"f78c88fcc0186cc141138337e5ecf41f","url":"tw_stocks/3711.json"},{"revision":"5765044be59dbbf01902a3462275f2cb","url":"tw_stocks/3708.json"},{"revision":"311eeafe5f55e7137c249037d7637206","url":"tw_stocks/3706.json"},{"revision":"e8033af4fca1ae9a914dffa6fc47ed0b","url":"tw_stocks/3705.json"},{"revision":"4b4ce05c5513c253efb108092a433085","url":"tw_stocks/3704.json"},{"revision":"bd429ded9866698fa8a747445cf79079","url":"tw_stocks/3703.json"},{"revision":"45654d9fd6263884b8f049c3466eebf3","url":"tw_stocks/3702.json"},{"revision":"c919e453b9880f700be048418f924073","url":"tw_stocks/3701.json"},{"revision":"49e7df751e0ab8ffea9f15ea673dd67a","url":"tw_stocks/3694.json"},{"revision":"0f58cf5d7130c756488f89efe6f5ea71","url":"tw_stocks/3686.json"},{"revision":"9ad03d3dd9ba247ce5730d3e42088b38","url":"tw_stocks/3679.json"},{"revision":"a5f57f13217b09d21156f37d4f896645","url":"tw_stocks/3673.json"},{"revision":"0a09e74c0b4202f0b3ae601fbcd4caa5","url":"tw_stocks/3669.json"},{"revision":"e39bf40629437559076dac26aae37326","url":"tw_stocks/3665.json"},{"revision":"38ae7655863b006d5d64b5041f81f34e","url":"tw_stocks/3661.json"},{"revision":"596c3aa136371337b6d38fa9ac8359b6","url":"tw_stocks/3653.json"},{"revision":"9795bc10ada37c41aadaee0ab46dc621","url":"tw_stocks/3652.json"},{"revision":"24c1a539f08d9dbd5713a904a1209aea","url":"tw_stocks/3645.json"},{"revision":"03d3bc9e44868d7dd02a7c532a5a676e","url":"tw_stocks/3622.json"},{"revision":"e4907c007b079e93348260be71ae6b0c","url":"tw_stocks/3617.json"},{"revision":"f3bbbb8d2783655553778e7d61c62a68","url":"tw_stocks/3607.json"},{"revision":"7c3ca896a8bfae81f3aeb8366b3ce46b","url":"tw_stocks/3605.json"},{"revision":"d786f5f5b288b6a3df7434aabbf6ffc3","url":"tw_stocks/3596.json"},{"revision":"09e01f4f9323f42a58aa78a9fd2db915","url":"tw_stocks/3593.json"},{"revision":"9d5479dec738ee76b0e37a60b181a9c2","url":"tw_stocks/3592.json"},{"revision":"14c0beba0722e833e306b6557c26936e","url":"tw_stocks/3591.json"},{"revision":"9782af13e13dd87363842099f6e742ab","url":"tw_stocks/3588.json"},{"revision":"93e9ef4b04012a1b5ee1117d71de7f83","url":"tw_stocks/3583.json"},{"revision":"454650a33746019c4d7e5f348186900c","url":"tw_stocks/3576.json"},{"revision":"d9ebb8c2f4b3b11594b079a4575bc400","url":"tw_stocks/3563.json"},{"revision":"b7dbcac7d873ada3fb319ffb64dccf9c","url":"tw_stocks/3557.json"},{"revision":"913e485985605c46e1330b5bef72f5cc","url":"tw_stocks/3550.json"},{"revision":"cc93ab331c291a253bd3879b985252ad","url":"tw_stocks/3545.json"},{"revision":"56610a815a9bf60c5b8c377fac8d9784","url":"tw_stocks/3543.json"},{"revision":"c6171b43f3f9b6897391b2d8dbef01e2","url":"tw_stocks/3535.json"},{"revision":"a401301845e69a983336f02adc50dbf8","url":"tw_stocks/3533.json"},{"revision":"f01f152a23fa87fdaecaad40d8328f2b","url":"tw_stocks/3532.json"},{"revision":"1c2424184fda8d2afd9f275c75cb7ada","url":"tw_stocks/3530.json"},{"revision":"0a1bbf88a5022ac2c67dcf081ae9e21e","url":"tw_stocks/3528.json"},{"revision":"a026359bc4c65b7a81226588353e1e0b","url":"tw_stocks/3518.json"},{"revision":"19948768089fa2016fb5d7777155891e","url":"tw_stocks/3515.json"},{"revision":"09cdd6a71bdf1a6f7800667b27378aae","url":"tw_stocks/3504.json"},{"revision":"bbf9cce5df78c6a632c6ad341eb2798b","url":"tw_stocks/3501.json"},{"revision":"12d16ddff6dbcbc3d4b07f472b6e002b","url":"tw_stocks/3494.json"},{"revision":"6ef78b9a75f38cae287f514bc51f4140","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"2a7dab9b0b59550a9ad71fcb33135635","url":"tw_stocks/3450.json"},{"revision":"8377146f00bdbc4c3cbd75ddbe8b48e2","url":"tw_stocks/3447.json"},{"revision":"6f09792d62d66a98a65d95f3e1eafcd3","url":"tw_stocks/3443.json"},{"revision":"caaf7728a652e2ae219acbd9f2460149","url":"tw_stocks/3437.json"},{"revision":"37328e5e32919d23bd2190d7e576e290","url":"tw_stocks/3432.json"},{"revision":"43fabe61930dfd5df91d0f6e143c7463","url":"tw_stocks/3419.json"},{"revision":"d869b988ad4a9f25fcf2e3e1f9685080","url":"tw_stocks/3416.json"},{"revision":"270809277bad4de578ffc0bde59884f2","url":"tw_stocks/3413.json"},{"revision":"aa8f9ad2f7e3306ee4bc96767f9ee2e0","url":"tw_stocks/3406.json"},{"revision":"1cd70eb7e367ce835da472235505622d","url":"tw_stocks/3380.json"},{"revision":"eeb35ab52e8bfa900387e8b8bcaf10d8","url":"tw_stocks/3376.json"},{"revision":"0e18c283396903f7e3a65f0d3367c725","url":"tw_stocks/3356.json"},{"revision":"f16680c42eb84435cda4934797012922","url":"tw_stocks/3346.json"},{"revision":"54ab1ca02f1ffb981d0ec99a579de383","url":"tw_stocks/3338.json"},{"revision":"c96c3250440caaead5302624b703a6ee","url":"tw_stocks/3321.json"},{"revision":"6d538a51468523e77a4e330d12e7271e","url":"tw_stocks/3312.json"},{"revision":"749f5bedf5bccf8851a014a045f232eb","url":"tw_stocks/3311.json"},{"revision":"1511689a5007846efc14ba98973d8ac3","url":"tw_stocks/3308.json"},{"revision":"912b3a94ba5b35c367d0168564b68e69","url":"tw_stocks/3305.json"},{"revision":"83ebb50f25d055bc71187f25aa846a7b","url":"tw_stocks/3296.json"},{"revision":"8f60576b178917d844e035b209b5e957","url":"tw_stocks/3266.json"},{"revision":"0774af4a6317c747c98dcc8732f7ddf0","url":"tw_stocks/3257.json"},{"revision":"313b5417ab0ee1b6c61ebca44e57ef0d","url":"tw_stocks/3231.json"},{"revision":"4d3a47c63cf8b5914f735a2e3c589152","url":"tw_stocks/3229.json"},{"revision":"ed41931134553832206a97c39f23c661","url":"tw_stocks/3209.json"},{"revision":"6ef8d489ddbd170a87980b8a868a1317","url":"tw_stocks/3189.json"},{"revision":"34fe87f76efe39dca99d6bec7eb7f743","url":"tw_stocks/3168.json"},{"revision":"9974204401e2a2e1ddf69721b367ee38","url":"tw_stocks/3167.json"},{"revision":"5f6923a6f37754cbc1a7f061446bb8ef","url":"tw_stocks/3164.json"},{"revision":"8753bfe6f9e0bbe21b4547bd734a6c03","url":"tw_stocks/3149.json"},{"revision":"930b5021281a3d8cc35956f93a5b2750","url":"tw_stocks/3138.json"},{"revision":"7ed49766a0506b0f67b9e61a613646ac","url":"tw_stocks/3135.json"},{"revision":"7a329aeb26c45318af276a16e0be99af","url":"tw_stocks/3130.json"},{"revision":"47e02d584735b77f505e14a07718a5de","url":"tw_stocks/3094.json"},{"revision":"0a6b50a8ec9038d43f2eaee69c31e443","url":"tw_stocks/3092.json"},{"revision":"54b208f34a748385e2d6723171e8e990","url":"tw_stocks/3090.json"},{"revision":"91a3d499a6a1aae38f44206bc525d997","url":"tw_stocks/3062.json"},{"revision":"23337787d4c81b8bb519a458046c1040","url":"tw_stocks/3060.json"},{"revision":"88948cd75fe23f121c70289d9cd55d0e","url":"tw_stocks/3059.json"},{"revision":"1cfa66b231dfc46a75424ceca2f0dbc5","url":"tw_stocks/3058.json"},{"revision":"65f90998e7ab21b238b5720f2a187d18","url":"tw_stocks/3057.json"},{"revision":"2ba47310d9aa79f70abc77de4cf14250","url":"tw_stocks/3056.json"},{"revision":"ceffb7189e2cd26207d1c1008d0401bd","url":"tw_stocks/3055.json"},{"revision":"4acc0c67f745b7476f2912f8ebb8f086","url":"tw_stocks/3054.json"},{"revision":"d1437a43c9b39525089f2765f080758a","url":"tw_stocks/3052.json"},{"revision":"0136b58f6dcb48fca04f6e22ebe9fef6","url":"tw_stocks/3051.json"},{"revision":"6576550ec3e3b69e8c241054a8ebf214","url":"tw_stocks/3050.json"},{"revision":"4a163b14a86b6fd9476e00ba40520306","url":"tw_stocks/3049.json"},{"revision":"cf9c0e167629d146480f21f3fdad8f2b","url":"tw_stocks/3048.json"},{"revision":"0ce86ae919bdf94f7aada5bf7e7745c7","url":"tw_stocks/3047.json"},{"revision":"5a92745366f140339cba0eecfb1ecaa9","url":"tw_stocks/3046.json"},{"revision":"323a4b7e19119aadc9bc049ab96ede92","url":"tw_stocks/3045.json"},{"revision":"55cc5d6e33d47a736a650daee7a2af29","url":"tw_stocks/3044.json"},{"revision":"b2736bbbaf39acec02b5379a767de86d","url":"tw_stocks/3043.json"},{"revision":"e86f5fd9354aecf3ae3b24a6dbe107c7","url":"tw_stocks/3042.json"},{"revision":"af905e8f1189edddc7d9cbc540c406d1","url":"tw_stocks/3041.json"},{"revision":"596f5ec3460677bb3a26fb13e3ddbef4","url":"tw_stocks/3040.json"},{"revision":"484bf8881b52c1d2a814f06afc4a2801","url":"tw_stocks/3038.json"},{"revision":"bdb97652446183afa567f3139e74db11","url":"tw_stocks/3037.json"},{"revision":"9cf9436d4256f4674e2eebc3d6047144","url":"tw_stocks/3036.json"},{"revision":"a7aecaf870484bf8ba4700b33ba9d4e9","url":"tw_stocks/3035.json"},{"revision":"e2f2962bf68a339304a803daf597dce6","url":"tw_stocks/3034.json"},{"revision":"b2bd50fd48c9e01434b5de356434882b","url":"tw_stocks/3033.json"},{"revision":"b5674f5cead58d6682d2b0a4564c628f","url":"tw_stocks/3032.json"},{"revision":"d041afa0c6cceab2c9e008c87a69aa96","url":"tw_stocks/3031.json"},{"revision":"d5b19983eae417fd387ff2bad1c78d64","url":"tw_stocks/3030.json"},{"revision":"15b47a8e4827402f87e41faf1cedd3c0","url":"tw_stocks/3029.json"},{"revision":"771eae05f99071dc4c9d5ce225d0b25a","url":"tw_stocks/3028.json"},{"revision":"88f1bb300add1c45cc38abdf0f1fc1be","url":"tw_stocks/3027.json"},{"revision":"b6fb5c134b55f8d415084fb2ef148fff","url":"tw_stocks/3026.json"},{"revision":"5aba7c9ecc19302c43b5d3ec310c4d07","url":"tw_stocks/3025.json"},{"revision":"9bbba495a04d34f06cac8afce499f1e7","url":"tw_stocks/3024.json"},{"revision":"be1a9e3e01bfc7c4eff829b5e9062364","url":"tw_stocks/3023.json"},{"revision":"50c6c7a24cdcb39a86a739c15493b8f0","url":"tw_stocks/3022.json"},{"revision":"d6facdd430e0a57d2b562b38f20ace5a","url":"tw_stocks/3021.json"},{"revision":"e09bbb652a893e2f279622afb0cdf71f","url":"tw_stocks/3019.json"},{"revision":"045a45be444bb505eb984e1ea0f09b59","url":"tw_stocks/3018.json"},{"revision":"831708717dfa0118e58bd9638bf17901","url":"tw_stocks/3017.json"},{"revision":"a141c4ba11a96d440305a09e078a5c9d","url":"tw_stocks/3016.json"},{"revision":"994c68c591a85c33fb93142c5a0ae364","url":"tw_stocks/3015.json"},{"revision":"241eeb2652a48d94da274fd40bb5713c","url":"tw_stocks/3014.json"},{"revision":"4cdfad39d63c38d4439f6768d27ed715","url":"tw_stocks/3013.json"},{"revision":"cbc57c893621d0897d18f73fea5814fe","url":"tw_stocks/3011.json"},{"revision":"985174499ba897499b1bb4a0d8b38849","url":"tw_stocks/3010.json"},{"revision":"f203c1ad7e969ac568ddd41c20dd5991","url":"tw_stocks/3008.json"},{"revision":"d4df03148324d1c40704c85ad60374ab","url":"tw_stocks/3006.json"},{"revision":"e768a5e60c63415e7db74b2ab025ff9c","url":"tw_stocks/3005.json"},{"revision":"6f27acf2758b00f0688efcb588db37c7","url":"tw_stocks/3004.json"},{"revision":"aa9c2d20702cf8180a81916e5f4acd8b","url":"tw_stocks/3003.json"},{"revision":"843d51cf5a74865285f8426e4dc17642","url":"tw_stocks/3002.json"},{"revision":"39c7eb26c7af29a2567242cecfc909fa","url":"tw_stocks/2945.json"},{"revision":"6f4c52ab14746afcd78b49bd01efd45b","url":"tw_stocks/2939.json"},{"revision":"b5881a48a793419603fd0a3eb7ea5457","url":"tw_stocks/2929.json"},{"revision":"20e3f6a4150adc683fca196a4dd50d2d","url":"tw_stocks/2923.json"},{"revision":"1a9caaa98e9dd08196a80144fde9805d","url":"tw_stocks/2915.json"},{"revision":"1a3bb84f38384f36329cbf07b4c08c08","url":"tw_stocks/2913.json"},{"revision":"d8f06f48793dd0646e58befafe5a5441","url":"tw_stocks/2912.json"},{"revision":"881fbd5006fbcf4ade65b747a5d5b884","url":"tw_stocks/2911.json"},{"revision":"27433be1ed4c9c50e535155626ed05f7","url":"tw_stocks/2910.json"},{"revision":"6af28f8dbfc8062a28569880cf40cda2","url":"tw_stocks/2908.json"},{"revision":"000dee2f620bc01639436dc69ddb89e6","url":"tw_stocks/2906.json"},{"revision":"a6e5caa56d896bb5b872642f739cecdf","url":"tw_stocks/2905.json"},{"revision":"191b9b8c7361b33948a6132b4e34d392","url":"tw_stocks/2904.json"},{"revision":"d1fda58bd6f15dad054c90d8fd317da0","url":"tw_stocks/2903.json"},{"revision":"516ae79b11a06b1bb34a3ff0657d5981","url":"tw_stocks/2901.json"},{"revision":"b894c53d60bff8a8da934a5b27d624a7","url":"tw_stocks/2897.json"},{"revision":"b7a34587915e9dbcb85325d93072f187","url":"tw_stocks/2892.json"},{"revision":"99f31c2b0c8e3c473c93300b707fae71","url":"tw_stocks/2891.json"},{"revision":"287afd4ce287287fa21ef9f425454264","url":"tw_stocks/2890.json"},{"revision":"8fbf1afebd3f04dbce24b4744d521f7b","url":"tw_stocks/2889.json"},{"revision":"e6138d0862034ec1b61675d3cd460f12","url":"tw_stocks/2887.json"},{"revision":"94a214816ea2999b1b59a85382fef8f7","url":"tw_stocks/2886.json"},{"revision":"3db3d50161b1d17c03a6e5ff467587da","url":"tw_stocks/2885.json"},{"revision":"3471f1943138ba9c07465fab8580e361","url":"tw_stocks/2884.json"},{"revision":"548adf2b1add91a09f257eeebec4e395","url":"tw_stocks/2883.json"},{"revision":"0a337e76b383091e6f5d503340ef07ed","url":"tw_stocks/2882.json"},{"revision":"9cba0cd92d71fea41b98b47b61ebed06","url":"tw_stocks/2881.json"},{"revision":"07b14ca610e993be16897c6849aed83a","url":"tw_stocks/2880.json"},{"revision":"14f3d3e4d96f1deb029eb270241b47c0","url":"tw_stocks/2867.json"},{"revision":"138439ac069bf8f7fe04b7542069d33f","url":"tw_stocks/2855.json"},{"revision":"a7071f605de940534b8d36b194104e13","url":"tw_stocks/2852.json"},{"revision":"2625a615070d6ca8655eb5f685cc5fa1","url":"tw_stocks/2851.json"},{"revision":"f886e898cd498af97303a234ef3910e5","url":"tw_stocks/2850.json"},{"revision":"0b2aec2d59aab396b52395f0fd7b404d","url":"tw_stocks/2849.json"},{"revision":"0f3ec974d8d0d6daf4283fb127585b6f","url":"tw_stocks/2845.json"},{"revision":"710e725ab2b77543ae2c6691aa46dce0","url":"tw_stocks/2838.json"},{"revision":"29b2b0b87cba0731e15dd05460c509a7","url":"tw_stocks/2836.json"},{"revision":"4b91d4943b72d803350e8385fd53444d","url":"tw_stocks/2834.json"},{"revision":"ee179ede86c5e5c323d082faf12f9a22","url":"tw_stocks/2832.json"},{"revision":"f3f54640216e43a421bd8aac80e54e37","url":"tw_stocks/2820.json"},{"revision":"ad35130781a67d962c96d6c4b260e297","url":"tw_stocks/2816.json"},{"revision":"025ec8ad65e6f07b7d439a6cfc7da38f","url":"tw_stocks/2812.json"},{"revision":"d08764baf6d394310941254720f5ddec","url":"tw_stocks/2801.json"},{"revision":"40a9f9df5b0ffb23c57ecff305b290fb","url":"tw_stocks/2762.json"},{"revision":"6b4e7c5a82e493eacf907d70c84d5661","url":"tw_stocks/2753.json"},{"revision":"10c25b06d187cb738447c5f1ecdff6c4","url":"tw_stocks/2748.json"},{"revision":"7e6dea7b781081314de2447d14f621cf","url":"tw_stocks/2739.json"},{"revision":"1bc9b6aa6e7f4131857cb55aac686822","url":"tw_stocks/2731.json"},{"revision":"b225d0acada67fb0068d7ffb63d5c7ee","url":"tw_stocks/2727.json"},{"revision":"86ccd3b0874ee2cd8c9d864441d75e4f","url":"tw_stocks/2723.json"},{"revision":"f53ec2f50ba8954fc4dcbf8bd040c327","url":"tw_stocks/2722.json"},{"revision":"b2d76f26a2934ef89def5228315ff5c7","url":"tw_stocks/2712.json"},{"revision":"cfbde8120fa97a0a1d8a68d54ecd13b4","url":"tw_stocks/2707.json"},{"revision":"2e2193d24ef4dde456be11ef539348a6","url":"tw_stocks/2706.json"},{"revision":"9907d72d238adf127309a14b5d44a51d","url":"tw_stocks/2705.json"},{"revision":"3d899f44b46efbc69aa549416814db4e","url":"tw_stocks/2704.json"},{"revision":"6512f5c7e9def5c8873c8f262c78448d","url":"tw_stocks/2702.json"},{"revision":"6b1cd3d3b3d10c1b9c5bdf5214d304f1","url":"tw_stocks/2701.json"},{"revision":"3d50989c0a2e67f8af64ebd780ec10bb","url":"tw_stocks/2646.json"},{"revision":"25a27471e9ac7c8232a4052b04f58779","url":"tw_stocks/2645.json"},{"revision":"1d82cb1e224e283c6ea912eeb8bcf972","url":"tw_stocks/2642.json"},{"revision":"dfebaa826c4d983bdc5a7fb453f224bc","url":"tw_stocks/2637.json"},{"revision":"eb934c946cd91820bd81a256d4160c9a","url":"tw_stocks/2636.json"},{"revision":"3bf0971f683175a37fbc9208a4b51f92","url":"tw_stocks/2634.json"},{"revision":"1d892a790f68d775a09a823cb09a3f4f","url":"tw_stocks/2633.json"},{"revision":"ac5c0e265e2fcf7e27646343f6457be0","url":"tw_stocks/2630.json"},{"revision":"73601b9f2d70d3def27c02309caeb343","url":"tw_stocks/2618.json"},{"revision":"6e571ce9c9921c6632c9827849a39427","url":"tw_stocks/2617.json"},{"revision":"6f7dbdc75370097ccd4b7ed90f005c11","url":"tw_stocks/2616.json"},{"revision":"f42f9dc050f7102c7fdd39536e6cdebe","url":"tw_stocks/2615.json"},{"revision":"d4595a346352517fa0f83439efd17811","url":"tw_stocks/2614.json"},{"revision":"630d474f11b22785b2c8d864761ea800","url":"tw_stocks/2613.json"},{"revision":"8dc4f4c6e769489d04d3350772579251","url":"tw_stocks/2612.json"},{"revision":"952ed00f12ab6e6bce7d6cffc2b301cc","url":"tw_stocks/2611.json"},{"revision":"9a09657d0082f02414225c24a1720f42","url":"tw_stocks/2610.json"},{"revision":"7fdad0a27aa34fb89052df2368981111","url":"tw_stocks/2609.json"},{"revision":"a68368a619930a55221bf2854c90eb40","url":"tw_stocks/2608.json"},{"revision":"230d54beb1484d1df1c68fcf5876d5f3","url":"tw_stocks/2607.json"},{"revision":"4344b9bdf6fd267d0e0756ddb0f38d41","url":"tw_stocks/2606.json"},{"revision":"83f11acb78207d562810a495a64a8325","url":"tw_stocks/2605.json"},{"revision":"1280653f287d028d8d7722866723b9a5","url":"tw_stocks/2603.json"},{"revision":"8592ea1bf3009dcd7c75d23041cbe918","url":"tw_stocks/2601.json"},{"revision":"cb8f0b0c31189110fddb854d151e088d","url":"tw_stocks/2597.json"},{"revision":"13061295b3b222077a5d3246063337c7","url":"tw_stocks/2548.json"},{"revision":"420bc373b528f8dc0fd1b48f2a53fe73","url":"tw_stocks/2547.json"},{"revision":"73edf43e80288af5a5dad5c5381848dc","url":"tw_stocks/2546.json"},{"revision":"224a2d0967bbacdbb81a5ede250c1bf2","url":"tw_stocks/2545.json"},{"revision":"4e338880f49884a847647de71b02c9b3","url":"tw_stocks/2543.json"},{"revision":"25832583ad8fa34ba95ba88ffc211f17","url":"tw_stocks/2542.json"},{"revision":"80e34ef8546788391b1d6c4980d1e430","url":"tw_stocks/2540.json"},{"revision":"24df042d9bedf0a0a83c41271aa4ea9f","url":"tw_stocks/2539.json"},{"revision":"b08dce8187960b388e48151fa6a2d4f7","url":"tw_stocks/2538.json"},{"revision":"fd87e7273a6518719d69434177e875ad","url":"tw_stocks/2537.json"},{"revision":"28e0c234a8b16ab5f1621d85fafcce50","url":"tw_stocks/2536.json"},{"revision":"11232270ea626713808c3937191e1a71","url":"tw_stocks/2535.json"},{"revision":"360739ce7f08385988fe16ee0c303cff","url":"tw_stocks/2534.json"},{"revision":"5e1355dac124a6ce1dcdf376c84dcfb9","url":"tw_stocks/2530.json"},{"revision":"83847eef8b9a75b18e4aecedfb010d81","url":"tw_stocks/2528.json"},{"revision":"99f4cbf9462e6593c45c3e66b714d9a2","url":"tw_stocks/2527.json"},{"revision":"8e56af47c26b44eda42dac5739597205","url":"tw_stocks/2524.json"},{"revision":"44427fd0e718bd1efd3b921056afa424","url":"tw_stocks/2520.json"},{"revision":"652e776dcc0d441ca381adb546fdadc1","url":"tw_stocks/2516.json"},{"revision":"2f3f90479c516d8a983877d829a3e0f5","url":"tw_stocks/2515.json"},{"revision":"db35190509cbdae2b751d57bcb15a587","url":"tw_stocks/2514.json"},{"revision":"ad7cde7b2d9b626a74a18ba8fe6320ee","url":"tw_stocks/2511.json"},{"revision":"b88f313af03954291a3df11f6f03d18e","url":"tw_stocks/2509.json"},{"revision":"5acee498bae94ea9cf4eef05469634c4","url":"tw_stocks/2506.json"},{"revision":"f73db9d283f69aa076b16c15578de386","url":"tw_stocks/2505.json"},{"revision":"6501ec3c6a20af4cd8ef7123330ee451","url":"tw_stocks/2504.json"},{"revision":"1f548eb6c93471d1571ad7250364e0c5","url":"tw_stocks/2501.json"},{"revision":"b774c60cbbb90c27713c4bb95ce1dd5a","url":"tw_stocks/2498.json"},{"revision":"b3189cc152ef5ced751d908d74ad7215","url":"tw_stocks/2497.json"},{"revision":"97e6622ea7bb12ce7e71dfdbda8eaf30","url":"tw_stocks/2496.json"},{"revision":"7c5405c6fc521cb714cccac6e229778d","url":"tw_stocks/2495.json"},{"revision":"15a03ca5e0bd2af4047a6c445a6cb8c2","url":"tw_stocks/2493.json"},{"revision":"518d7418f7bee8c5ac381dbd327f6453","url":"tw_stocks/2492.json"},{"revision":"387ec554b7ef755a6762201d43ad1581","url":"tw_stocks/2491.json"},{"revision":"eff0ccc0fe64de5cf18ef023351381df","url":"tw_stocks/2489.json"},{"revision":"029ebd0a8e626005f0c49c6cdd7f2166","url":"tw_stocks/2488.json"},{"revision":"720a607c41e4dd3fea92d6954e16f44f","url":"tw_stocks/2486.json"},{"revision":"e636a4493ff9cbf07826a5886a1eb00d","url":"tw_stocks/2485.json"},{"revision":"60786e6ccf01570a3a74874bf82aaff6","url":"tw_stocks/2484.json"},{"revision":"00f5e453e88cbb8aef50ee658ef525da","url":"tw_stocks/2483.json"},{"revision":"75974f58363a55bc374cdcb3d7841ec8","url":"tw_stocks/2482.json"},{"revision":"b7f05d4671d8f9695467a74cc28f769e","url":"tw_stocks/2481.json"},{"revision":"6312e5003613bddaa718685e7d95cb30","url":"tw_stocks/2480.json"},{"revision":"a1a2299b0d0da62ee0ce18fd51cc53e4","url":"tw_stocks/2478.json"},{"revision":"3ecd3c926a037cc26fd0e053c27cba5d","url":"tw_stocks/2477.json"},{"revision":"7d6b0d73ea346ab973dd546b1b5b6981","url":"tw_stocks/2476.json"},{"revision":"d157f69c6356f8b7af7bb8747fbfddc6","url":"tw_stocks/2474.json"},{"revision":"ea12e20845405b6b11fd37f291724ea6","url":"tw_stocks/2472.json"},{"revision":"af9cbbe321217c82cb1e9134ee21dd87","url":"tw_stocks/2471.json"},{"revision":"64a14d5efeb3cd1944f76e22c946d275","url":"tw_stocks/2468.json"},{"revision":"03fc5ed933e4f5a6f9f3b1e1aff98121","url":"tw_stocks/2467.json"},{"revision":"b1862d518a6e5c6bf3e9e8f634ef456b","url":"tw_stocks/2466.json"},{"revision":"a8ea9a39893e41cc867fed3502a7c5ad","url":"tw_stocks/2465.json"},{"revision":"8c534349dddd21bb2aa120a06bdaf54b","url":"tw_stocks/2464.json"},{"revision":"f04d9329773cb93bf93d448d63ef3b8d","url":"tw_stocks/2462.json"},{"revision":"b230407934371d689699c92ecb6772fa","url":"tw_stocks/2461.json"},{"revision":"cfeb1baf70d32f4b8837db95c5784a4e","url":"tw_stocks/2460.json"},{"revision":"5dc202fc7e6d5372420b9a58616fc795","url":"tw_stocks/2459.json"},{"revision":"4728c2bc3506e0325c17069642b504cc","url":"tw_stocks/2458.json"},{"revision":"00beb28e87f0ef49481698c4e7cb4466","url":"tw_stocks/2457.json"},{"revision":"4ed93eab960670512ff36a7a42d7b060","url":"tw_stocks/2455.json"},{"revision":"bd2ae4cf4d6eed60d5042633eb8d7514","url":"tw_stocks/2454.json"},{"revision":"baf4174507587772bde7c7fe7f551040","url":"tw_stocks/2453.json"},{"revision":"c052da181ba3f014ded35cd3bfbe7fe2","url":"tw_stocks/2451.json"},{"revision":"1d0ff1d9d55d9ee4f0665092bb96a88f","url":"tw_stocks/2450.json"},{"revision":"29aedc0d9fef9fb880b03df1fdfea4dc","url":"tw_stocks/2449.json"},{"revision":"296b988ee05ea0614fcac569e2c48f88","url":"tw_stocks/2444.json"},{"revision":"72d731cf78ecd500efd24975de52da9a","url":"tw_stocks/2442.json"},{"revision":"26f05935af9c29cc8c9ac5957573a01c","url":"tw_stocks/2441.json"},{"revision":"18e180bddffc13d1b50a7a4027c83e6e","url":"tw_stocks/2440.json"},{"revision":"bbed28da7b24e81573f5678b17670f5f","url":"tw_stocks/2439.json"},{"revision":"a3f6ba7bf78e7c1df20e00e38bf94b64","url":"tw_stocks/2438.json"},{"revision":"ae73c12a8bc163821f745da20c37b290","url":"tw_stocks/2436.json"},{"revision":"950c374ed5b2d0eefcf1b48375b45546","url":"tw_stocks/2434.json"},{"revision":"d0d2de027256b6a49ff19514d4f2b3ef","url":"tw_stocks/2433.json"},{"revision":"6e72ef42d7f6c4bc20d3945d78b9b0cb","url":"tw_stocks/2431.json"},{"revision":"664bf6476a503dec68e23738b97e9b1c","url":"tw_stocks/2430.json"},{"revision":"8b5dee815b28242bfba3f6a99ffbdbd0","url":"tw_stocks/2429.json"},{"revision":"e39a45053caa10b890fc65b512283522","url":"tw_stocks/2428.json"},{"revision":"5978f25749a4dbafc2b2053f98780848","url":"tw_stocks/2427.json"},{"revision":"bc32ce205d7e1c8bbecf167822c7e312","url":"tw_stocks/2426.json"},{"revision":"6908d12fce8e509969d78fcdce9f807b","url":"tw_stocks/2425.json"},{"revision":"fe0ad86521b45d22309282ba6ad92ea1","url":"tw_stocks/2424.json"},{"revision":"7559ee4c46dc67cffca90a8772d75d0f","url":"tw_stocks/2423.json"},{"revision":"5b45ed085deeba3c1942235d882d7bc0","url":"tw_stocks/2421.json"},{"revision":"8c525247da75727764bb7ebc311c7b50","url":"tw_stocks/2420.json"},{"revision":"f122192d0f6d7e6960bf070576a0c1f8","url":"tw_stocks/2419.json"},{"revision":"176d4cca747a6b3f415f624b8c23f31d","url":"tw_stocks/2417.json"},{"revision":"5b78be87bee06c07811ecbc76f68f66f","url":"tw_stocks/2415.json"},{"revision":"e383b2ffc4a1043053f6c32bfbddec16","url":"tw_stocks/2414.json"},{"revision":"539fc7db9d481fd9c909662176bb17cd","url":"tw_stocks/2413.json"},{"revision":"0e75995b2a12cc9ffaf2a2c3dd7e231c","url":"tw_stocks/2412.json"},{"revision":"79c37ce2daa314761fbee3f42c1cda29","url":"tw_stocks/2409.json"},{"revision":"c1b981f0d95b716db2e76d8951fea53f","url":"tw_stocks/2408.json"},{"revision":"525cf12907067ac2da980d257df10e40","url":"tw_stocks/2406.json"},{"revision":"74b3e062dccfceebdc09451edceddb02","url":"tw_stocks/2405.json"},{"revision":"40103484c13c2594ff02d5d28e7a31c3","url":"tw_stocks/2404.json"},{"revision":"09fc82d52c674478432392c22a167d27","url":"tw_stocks/2402.json"},{"revision":"c19558380a9e67de6be35cb92553f5a3","url":"tw_stocks/2401.json"},{"revision":"e83ccec4e6ae6d0ad8c176d6ac9ef978","url":"tw_stocks/2399.json"},{"revision":"da1cce1c2db9ad7efdbcb39a299ff56a","url":"tw_stocks/2397.json"},{"revision":"049ff6506613f2c762aee6a04a41a7a4","url":"tw_stocks/2395.json"},{"revision":"f831f4bcbd88145650b1859f5ecbb8a5","url":"tw_stocks/2393.json"},{"revision":"c8c1ee409e71c0abe9da9838dc7fa9d8","url":"tw_stocks/2392.json"},{"revision":"d9145e05d5da30f382a23f891dbb8070","url":"tw_stocks/2390.json"},{"revision":"7f18932cd6259360f7bb903fba54b1e1","url":"tw_stocks/2388.json"},{"revision":"f64aaa5db4d08fec3f645faa31558505","url":"tw_stocks/2387.json"},{"revision":"9c5ffa7796b824e28227c6cf8fc3bb8f","url":"tw_stocks/2385.json"},{"revision":"46088406e28fe2c82ddef0a13425277b","url":"tw_stocks/2383.json"},{"revision":"5180c093d763e88a670c2424b4adc310","url":"tw_stocks/2382.json"},{"revision":"09eae212e4883ad60767dddaf5b18743","url":"tw_stocks/2380.json"},{"revision":"2e280c837075440d50c5035124a1fdc5","url":"tw_stocks/2379.json"},{"revision":"65b0f4f94c304eca2706d1bd8d7cfe8c","url":"tw_stocks/2377.json"},{"revision":"2c4267161abfb66ced1371de565f1a1e","url":"tw_stocks/2376.json"},{"revision":"dfc698e18ca9e81cd31419d32f656fbe","url":"tw_stocks/2375.json"},{"revision":"bd545d50e44ce191d56e96414758567b","url":"tw_stocks/2374.json"},{"revision":"5956f31315a06eff7e682173d236553f","url":"tw_stocks/2373.json"},{"revision":"d3f016d41a5c1dd02d9f86df8fd56daf","url":"tw_stocks/2371.json"},{"revision":"a8e17ff7a530bbb82d8b663395a48e5c","url":"tw_stocks/2369.json"},{"revision":"e3cf813049027a50b9a4b726e8578148","url":"tw_stocks/2368.json"},{"revision":"e799bacc80fb487abc5c3fa8f21d98e5","url":"tw_stocks/2367.json"},{"revision":"e1f2162de3cd9a3bc4c1176c3c769815","url":"tw_stocks/2365.json"},{"revision":"ade8d17a788714cad0f1d7d95f6ef6c2","url":"tw_stocks/2364.json"},{"revision":"f5f5f987d8db80cad05c8c566d6f2dc6","url":"tw_stocks/2363.json"},{"revision":"184b48453115a3e9a85bd1e75c7c5d30","url":"tw_stocks/2362.json"},{"revision":"ad78d936be3a4fe9c07b22c537cfd769","url":"tw_stocks/2360.json"},{"revision":"888807853ce74133320ce88a38ad13a7","url":"tw_stocks/2359.json"},{"revision":"21c6dcb0438004450b146b14d51f2d79","url":"tw_stocks/2357.json"},{"revision":"0fb11a69ebd97c9efdfcff13549e0d4d","url":"tw_stocks/2356.json"},{"revision":"0347b2459b1f0a3202739596aeffddd8","url":"tw_stocks/2355.json"},{"revision":"3c959f48f0aca95a33429b912f2b9d44","url":"tw_stocks/2354.json"},{"revision":"ebcada2487c74496151bb60e232e9fd6","url":"tw_stocks/2353.json"},{"revision":"e4f8833170cdf067b4f3546c929476da","url":"tw_stocks/2352.json"},{"revision":"be17fb0d0a84036beb04a17aab84095f","url":"tw_stocks/2351.json"},{"revision":"6b63adcd248c0cf236e3d26e2054b83b","url":"tw_stocks/2349.json"},{"revision":"fcbea9db31f16dfeca9c6ff71e18f3a6","url":"tw_stocks/2348.json"},{"revision":"8bc9590f57de12fd99475f02ba762abf","url":"tw_stocks/2347.json"},{"revision":"83286f1a3a51fce52668d669b9591980","url":"tw_stocks/2345.json"},{"revision":"70338424a23efdd594a4a41e173a6710","url":"tw_stocks/2344.json"},{"revision":"08ae2ec2a92be122ebf16509c647cc4e","url":"tw_stocks/2342.json"},{"revision":"a34c0d4c25aecb4c127e64ee31b0e732","url":"tw_stocks/2340.json"},{"revision":"447464deb065be57c45907647b8af7c7","url":"tw_stocks/2338.json"},{"revision":"4c76dd4b31d1c2664f29fe93af2485b9","url":"tw_stocks/2337.json"},{"revision":"4d4011f00cfa85db289f45401ccbd2a0","url":"tw_stocks/2332.json"},{"revision":"33a74dd80b2be44025d68aab28c1cec1","url":"tw_stocks/2331.json"},{"revision":"6597b06746e82a6dcfbeda7e29f02aef","url":"tw_stocks/2330.json"},{"revision":"938c5ad5b4e5d2569ffe9e5a62f4cb82","url":"tw_stocks/2329.json"},{"revision":"99eac5b8ba70596a021926dde24768cd","url":"tw_stocks/2328.json"},{"revision":"47a15f982c61949ca295a50e5da6ec88","url":"tw_stocks/2327.json"},{"revision":"be91e25b0ee39d80aa4557aeca8f7904","url":"tw_stocks/2324.json"},{"revision":"8bf846ac524baaa9f15b1b6bd08de871","url":"tw_stocks/2323.json"},{"revision":"6a532e70df889eaa3dd99baf6a861622","url":"tw_stocks/2321.json"},{"revision":"c4001e495e9f0c1a9223ec1b801f6e75","url":"tw_stocks/2317.json"},{"revision":"bfc42683906f6abae575a2d077e850ec","url":"tw_stocks/2316.json"},{"revision":"9a4fdade5c513aa851882110df8df119","url":"tw_stocks/2314.json"},{"revision":"0645fa654a31cc97cd2c47fd9c7d7e39","url":"tw_stocks/2313.json"},{"revision":"0d1d0bf2aaf8b39b41bd84889e78c1eb","url":"tw_stocks/2312.json"},{"revision":"5efb38624f0bb7bf8d73bf474e722d6d","url":"tw_stocks/2308.json"},{"revision":"bd2c49336832ee6a7b5a67c2dd619f23","url":"tw_stocks/2305.json"},{"revision":"d8c471e132bad6ab81654d7e5c9b88f0","url":"tw_stocks/2303.json"},{"revision":"9518ba5f6ba91fb6290a983877c75e3e","url":"tw_stocks/2302.json"},{"revision":"f7f7aae1d170e844849891251b2e65cd","url":"tw_stocks/2301.json"},{"revision":"627fbd8a34bcb0c6d1d33be0356a55b9","url":"tw_stocks/2250.json"},{"revision":"073723eb83767cbf23b4a829acf82839","url":"tw_stocks/2248.json"},{"revision":"ca4f8c9c279b8d755496ddecfd6672f4","url":"tw_stocks/2247.json"},{"revision":"fab3b48580d17b66b86662f46d227ba5","url":"tw_stocks/2243.json"},{"revision":"49b1133c75524550c904c33f88e3f195","url":"tw_stocks/2241.json"},{"revision":"1c280ac248132e50b440a8c5cf7b431c","url":"tw_stocks/2239.json"},{"revision":"109a57c14940efbad8c7f17dcfcc1e94","url":"tw_stocks/2236.json"},{"revision":"3c6b732e749513b30f0498b64dd4c6da","url":"tw_stocks/2233.json"},{"revision":"6a2d9abd7dc9e986b6f3a1b7d690e8db","url":"tw_stocks/2231.json"},{"revision":"97372dd8cbff28ed340e903e6b083438","url":"tw_stocks/2228.json"},{"revision":"327e23394a6aa54c1e207abfda09475a","url":"tw_stocks/2227.json"},{"revision":"b171ad61dcff9a7417993b7bfe43ea37","url":"tw_stocks/2211.json"},{"revision":"7204f540a00fe269e1e525cf3661d604","url":"tw_stocks/2208.json"},{"revision":"c4c0226a2f3a1be29461c755dc157b17","url":"tw_stocks/2207.json"},{"revision":"5d4f7f374fe14232169d2323c934d344","url":"tw_stocks/2206.json"},{"revision":"a4223428bc4c8dc3ad73c9d32a0a7dc2","url":"tw_stocks/2204.json"},{"revision":"529e38489e618548f80a87ad3b188cc0","url":"tw_stocks/2201.json"},{"revision":"cb37f4204cf606c557dc9c91eb479fc0","url":"tw_stocks/2115.json"},{"revision":"b320251166abf96969a60f2531db3e24","url":"tw_stocks/2114.json"},{"revision":"59268cef6bf7b10bd293ad1fdbbe3f47","url":"tw_stocks/2109.json"},{"revision":"4b10335b55cd968086943d86fd146a67","url":"tw_stocks/2108.json"},{"revision":"b23f2cb57acbbd88058d7967e472bcd7","url":"tw_stocks/2107.json"},{"revision":"84e1a499ba8c9c7fbf9a165e698aea92","url":"tw_stocks/2106.json"},{"revision":"6b778223cc8862625b75d49d2b3af8f7","url":"tw_stocks/2105.json"},{"revision":"e85fab112eb2f20cf88549de3452f765","url":"tw_stocks/2104.json"},{"revision":"11280b741de660d02c34eddf4a658984","url":"tw_stocks/2103.json"},{"revision":"b5aff77a6315a88ce80785f01c09672d","url":"tw_stocks/2102.json"},{"revision":"a53a8b3f5c168ffebd4b0563f12129da","url":"tw_stocks/2101.json"},{"revision":"bb2f3e24679efff386e7acdffe56443d","url":"tw_stocks/2072.json"},{"revision":"6e2d4956c1f84d1a26170bc14257ffcf","url":"tw_stocks/2069.json"},{"revision":"f6e4227cd37864618a4f41f77bb1fb08","url":"tw_stocks/2062.json"},{"revision":"f1c666bf70176c3ae595d9656a4b0c74","url":"tw_stocks/2059.json"},{"revision":"d7fcad6a80409e32fd1b157dde7bd1d4","url":"tw_stocks/2049.json"},{"revision":"b290076049c749ea5c90bb37354b9c38","url":"tw_stocks/2038.json"},{"revision":"48449d7b9c30301a30b87abb0a220f1d","url":"tw_stocks/2034.json"},{"revision":"082b615e539235c88ef97cefb26cedea","url":"tw_stocks/2033.json"},{"revision":"dfa820cb7bbf108586edb572f5734dbd","url":"tw_stocks/2032.json"},{"revision":"9a5911d5e92d69865d07fd6119ddefd1","url":"tw_stocks/2031.json"},{"revision":"f656f5420d3a38a878a03605ba21d936","url":"tw_stocks/2030.json"},{"revision":"67d41b6b3f9a45be17799488cd716b55","url":"tw_stocks/2029.json"},{"revision":"fbceb3d9bfc67ff09afa0e48f64960fb","url":"tw_stocks/2028.json"},{"revision":"f0d724829a079822011f950d3f1ab263","url":"tw_stocks/2027.json"},{"revision":"d7c0b35d5dc0636db9b2c95b8b49a109","url":"tw_stocks/2025.json"},{"revision":"58b7c961c674d6934dec6fd652b1437e","url":"tw_stocks/2024.json"},{"revision":"f6cb974ad4ef20c6d52e43db7b654b53","url":"tw_stocks/2023.json"},{"revision":"e922e90a9fc04d2462ade952e348dd49","url":"tw_stocks/2022.json"},{"revision":"2fc9c055210a3b53debdd4b5e02b220a","url":"tw_stocks/2020.json"},{"revision":"4aff7bfc96a144b8883877694d163359","url":"tw_stocks/2017.json"},{"revision":"4b19e0610d6b8a84c8493bc9e5016faf","url":"tw_stocks/2015.json"},{"revision":"5447f7b63f4d8a3fa4b505ab640acc56","url":"tw_stocks/2014.json"},{"revision":"840bbd34f991e67892e155fa348caf22","url":"tw_stocks/2013.json"},{"revision":"371c23d63370a81d1c3ceb57540d315f","url":"tw_stocks/2012.json"},{"revision":"854148b3db836f56aaecb71f6fe3f1ec","url":"tw_stocks/2010.json"},{"revision":"b3952aea26b20b6aadf6aa8ecd4be03c","url":"tw_stocks/2009.json"},{"revision":"06fd126214e5bead1b218331c0f4e266","url":"tw_stocks/2008.json"},{"revision":"7e9036fc0faa638e4966eb1a23a2fd83","url":"tw_stocks/2007.json"},{"revision":"2655b4d44dc9b45b0f377021dcbcd04a","url":"tw_stocks/2006.json"},{"revision":"f845f4b4d2a004889c865165b53d71c4","url":"tw_stocks/2002.json"},{"revision":"93c389cd68bd96ddee61abf0ecbf7a7c","url":"tw_stocks/1909.json"},{"revision":"f24ecdc12327a3d6f108f04115dc9699","url":"tw_stocks/1907.json"},{"revision":"55553cd53cebf090d323f96e34d8a647","url":"tw_stocks/1906.json"},{"revision":"c05704ccff666a053010e00a5df4210e","url":"tw_stocks/1905.json"},{"revision":"b8b6987d414cf871178cb15eed0f3fb4","url":"tw_stocks/1904.json"},{"revision":"7a10ff42b39d39e3aa4c492d4e860080","url":"tw_stocks/1903.json"},{"revision":"445ef4fbc9d71fe940efc47b9134317a","url":"tw_stocks/1817.json"},{"revision":"35ba329f7979882f148490979e38912f","url":"tw_stocks/1810.json"},{"revision":"94e814aa6b310d408d50db54992482c5","url":"tw_stocks/1809.json"},{"revision":"8ef120c345da76f64ccddfde749b720a","url":"tw_stocks/1808.json"},{"revision":"fea65f4e311a653d8dc1586283c619de","url":"tw_stocks/1806.json"},{"revision":"678b9c2faeeb6145f51884c6d320baa3","url":"tw_stocks/1805.json"},{"revision":"765574c087dd08b7e810ee887974f94f","url":"tw_stocks/1802.json"},{"revision":"530a29deed8a864596f034b239cec258","url":"tw_stocks/1795.json"},{"revision":"99e6967b00c06f938528fab209b3612c","url":"tw_stocks/1789.json"},{"revision":"fe49f2bee04f7897799af695ea13976a","url":"tw_stocks/1786.json"},{"revision":"71010b041ca92c7b8ec65fd028d4d4c0","url":"tw_stocks/1783.json"},{"revision":"7fe1aa86acebd2f5b4e5b849b351df15","url":"tw_stocks/1776.json"},{"revision":"b815eb772fbf4e827dada1c896e01587","url":"tw_stocks/1773.json"},{"revision":"28f9ec394d622bb682ce3526e2882883","url":"tw_stocks/1762.json"},{"revision":"bd89ce358a4c71cd2c82d21279ade8fb","url":"tw_stocks/1760.json"},{"revision":"9dd17a059808ec90ad74f07e3a16a76b","url":"tw_stocks/1752.json"},{"revision":"551f6764ae397e33683e192eaeff0d4a","url":"tw_stocks/1737.json"},{"revision":"5d29942e328161fad2cf38a602932f3a","url":"tw_stocks/1736.json"},{"revision":"994c7e55a67d13aa67dbdfed5cd5d82b","url":"tw_stocks/1735.json"},{"revision":"fa4353eddced26fa8d90b5baa4f5a7b7","url":"tw_stocks/1734.json"},{"revision":"4a269a0970e912d308d763dd1a981f56","url":"tw_stocks/1733.json"},{"revision":"6d87e6609e3b56096c60f7034bc2e148","url":"tw_stocks/1732.json"},{"revision":"06e88d30bde95a7d828941302fbaf52d","url":"tw_stocks/1731.json"},{"revision":"e3b92669bb0a04427f74676b6876c92d","url":"tw_stocks/1730.json"},{"revision":"36514852dd31695053a3d210ff321bd1","url":"tw_stocks/1727.json"},{"revision":"60e4ada450c5131ed8181849ac270d38","url":"tw_stocks/1726.json"},{"revision":"6c969ef9e69829e486d5e612c6b29940","url":"tw_stocks/1725.json"},{"revision":"a5cf3cc05dc6326e66d4518451e7ffce","url":"tw_stocks/1723.json"},{"revision":"174b0c015bbc306c0b5a156ab94a02ea","url":"tw_stocks/1722.json"},{"revision":"66bb360f7d2c1232573f2de4577dbd55","url":"tw_stocks/1721.json"},{"revision":"685e7927b986d987c2b6e83efa34356b","url":"tw_stocks/1720.json"},{"revision":"ec4585fa6cbc1b334b7b9785816e986a","url":"tw_stocks/1718.json"},{"revision":"ea002bd0070223c88a37f838fba2cde2","url":"tw_stocks/1717.json"},{"revision":"39c43d759b9e05f572bf34ffc44d73db","url":"tw_stocks/1714.json"},{"revision":"5dad558803e2c139c929788b36a036c3","url":"tw_stocks/1713.json"},{"revision":"2168f2db06e1189e4677192b50ea19bc","url":"tw_stocks/1712.json"},{"revision":"c138919745326dd0c5a4e1497b0e8ece","url":"tw_stocks/1711.json"},{"revision":"78d2732bd2dbcf93fab2c349a45cb318","url":"tw_stocks/1710.json"},{"revision":"c73cb04f80535b4ef7667b8464c8a244","url":"tw_stocks/1709.json"},{"revision":"2c300a340f10108ce9db1a3165fca3e4","url":"tw_stocks/1708.json"},{"revision":"121899d22f5ce242fe8a5848c62fcf72","url":"tw_stocks/1707.json"},{"revision":"7d903d567fda997c6c9156b4e0cd58b0","url":"tw_stocks/1702.json"},{"revision":"ef5d0e6416e79718d87f3f43a53183aa","url":"tw_stocks/1626.json"},{"revision":"b2253a989812e7c1941bca4274fc8b1c","url":"tw_stocks/1623.json"},{"revision":"ff9393e1a96730c3e55f6a163ae0e2c5","url":"tw_stocks/1618.json"},{"revision":"1b79149f76ab8cac7456150f3ee631cf","url":"tw_stocks/1617.json"},{"revision":"9c39e417e1dcc0f1ed07997b55f70da9","url":"tw_stocks/1616.json"},{"revision":"e3d0cebe3808ab535bc5ecf6b19613a6","url":"tw_stocks/1615.json"},{"revision":"b1421368df41b8e230b2c13636d07fc5","url":"tw_stocks/1614.json"},{"revision":"94c418a62c983c7d54979f4355384cd7","url":"tw_stocks/1612.json"},{"revision":"506cd040c94c0d322997750e8b80fa2b","url":"tw_stocks/1611.json"},{"revision":"4f8e4d1a4df87c6dfef98094504a146f","url":"tw_stocks/1609.json"},{"revision":"0f06c68407d22314e7798d29073caef7","url":"tw_stocks/1608.json"},{"revision":"0e53a4188832c71544725dfd052f9cca","url":"tw_stocks/1605.json"},{"revision":"46632513f65211cb55d261a234c1e2e2","url":"tw_stocks/1604.json"},{"revision":"79d9ca03a4ab7203e6cee30766efaff0","url":"tw_stocks/1603.json"},{"revision":"bbfe98c76238ad02a52a28b6cb26ad4c","url":"tw_stocks/1598.json"},{"revision":"5cd11f220eaeee6c149e6b251d0f6eab","url":"tw_stocks/1597.json"},{"revision":"878aab1f83e00ad87fab2703dea51f93","url":"tw_stocks/1590.json"},{"revision":"a6f39d49f6ddf40674f10e95c68fbebe","url":"tw_stocks/1589.json"},{"revision":"04cebea78ab32b029ae05eb6e5ffe401","url":"tw_stocks/1587.json"},{"revision":"e6d15afa2356498cc1622c9b657fd6ba","url":"tw_stocks/1583.json"},{"revision":"04008f4a94642a2f6fb283fad6941605","url":"tw_stocks/1582.json"},{"revision":"30794ef479f89b11e85f1f1a02bdde21","url":"tw_stocks/1568.json"},{"revision":"2d581eeae80b8c84a752d8cead71136c","url":"tw_stocks/1563.json"},{"revision":"99e3602e0112773ee0e0c160f18e46a5","url":"tw_stocks/1560.json"},{"revision":"8f9acf67abf3f5d4f0cb9c87e5dd112d","url":"tw_stocks/1558.json"},{"revision":"90c626d0e30477354322445d9cdaccad","url":"tw_stocks/1541.json"},{"revision":"ab383515eec3102d346c0558670895de","url":"tw_stocks/1540.json"},{"revision":"c9e6669baeab54ca6f7cd4410b173877","url":"tw_stocks/1539.json"},{"revision":"847faa39af77e4726b874cdeb6ad2707","url":"tw_stocks/1538.json"},{"revision":"46147db11aff605bbda53576edd55480","url":"tw_stocks/1537.json"},{"revision":"0b5eedacef2ffe0f03f15edb36016f52","url":"tw_stocks/1536.json"},{"revision":"eea0c741bd1824e41c94f0b29512e577","url":"tw_stocks/1535.json"},{"revision":"bea36eade96c6b5905436fadff89c195","url":"tw_stocks/1533.json"},{"revision":"2bf8aed4861c231b810807419af5f8cf","url":"tw_stocks/1532.json"},{"revision":"d0cc66e9dd575fe68fdb721db55249fc","url":"tw_stocks/1531.json"},{"revision":"d29d87d612357ef1a24a38e83e584ab8","url":"tw_stocks/1530.json"},{"revision":"5505ad3e8471b9b87b88f6d8154a9b2d","url":"tw_stocks/1529.json"},{"revision":"e30b2140b55dfa4439df1aa50c0343f9","url":"tw_stocks/1528.json"},{"revision":"82811918defa269987e4dc1a788e1d76","url":"tw_stocks/1527.json"},{"revision":"0309eb1b6ad1615d623ef6ac7ebae4ec","url":"tw_stocks/1526.json"},{"revision":"4841c9cb2b8cb3cecaa6dbe052e6b498","url":"tw_stocks/1525.json"},{"revision":"166d7718b1568a4f399f80a7779c3896","url":"tw_stocks/1524.json"},{"revision":"275e330d067069e51cea34452a19b9ec","url":"tw_stocks/1522.json"},{"revision":"6758f181eec51cb77918169efb8b68e6","url":"tw_stocks/1521.json"},{"revision":"64631fc9ce7620b16ef7a7586bb6d807","url":"tw_stocks/1519.json"},{"revision":"7c79f9b25656f8d1cfa605029568f47d","url":"tw_stocks/1517.json"},{"revision":"c5c08860401f6737bef954d7d001233f","url":"tw_stocks/1516.json"},{"revision":"dc332e8e7d70a9fce4f27b7f6e671341","url":"tw_stocks/1515.json"},{"revision":"184acccff9675166c7db204f2a131eaa","url":"tw_stocks/1514.json"},{"revision":"8960a7163ac67de395bf0fbb30554a3e","url":"tw_stocks/1513.json"},{"revision":"b2811fc71afeef5cc0cfabda9d35789c","url":"tw_stocks/1512.json"},{"revision":"18bd68e4b15dbdd13e6d0c5e40a2cd30","url":"tw_stocks/1506.json"},{"revision":"79b5e5de11e58356531e1d38e365b6f7","url":"tw_stocks/1504.json"},{"revision":"0802e4759bb8462391f33fafa56ae4ef","url":"tw_stocks/1503.json"},{"revision":"76e37c87b10df9dd5e79a790a58b246f","url":"tw_stocks/1477.json"},{"revision":"ff7e90b0682fd6cc7b1fa0f3de1a874d","url":"tw_stocks/1476.json"},{"revision":"313055fb1951be2f1e4f63d35dcfef91","url":"tw_stocks/1475.json"},{"revision":"9c17beace52789409e251f70336ff721","url":"tw_stocks/1474.json"},{"revision":"0f43327e308e7b68a4ab187ae5118f67","url":"tw_stocks/1473.json"},{"revision":"c4d392608625eada75ee22c2d125a9b0","url":"tw_stocks/1472.json"},{"revision":"8aa4e7cb042f9840d1e3c899b4836352","url":"tw_stocks/1471.json"},{"revision":"5d2cb59de6d94ff03796ec96e0b2d773","url":"tw_stocks/1470.json"},{"revision":"b5ae9ff636a03a0c2a98db122eb272d9","url":"tw_stocks/1468.json"},{"revision":"7039fb1647fb80569f5a1ba61add2988","url":"tw_stocks/1467.json"},{"revision":"9ae3ed262c14e49d5aae16b008bd2f21","url":"tw_stocks/1466.json"},{"revision":"22b3ececd8251589a8e134d13ecf3bba","url":"tw_stocks/1465.json"},{"revision":"cf12f5e638407179c56b3d0dd2797667","url":"tw_stocks/1464.json"},{"revision":"0f9fbb5cf00891a6fe4a5addd89e2061","url":"tw_stocks/1463.json"},{"revision":"4d379f230acafc85c1b041dcbd6bebec","url":"tw_stocks/1460.json"},{"revision":"f14c98262f8b796ba64d51a0c38aff0a","url":"tw_stocks/1459.json"},{"revision":"fe26eee9ec4dea9bf9e9dcb44a551fe5","url":"tw_stocks/1457.json"},{"revision":"777fe41e739af84aacd0fc0ec7858c4d","url":"tw_stocks/1456.json"},{"revision":"0a18579b27d71e784fcdd709e557d3ec","url":"tw_stocks/1455.json"},{"revision":"086cfb97ae8d629435cc9385a1262aa3","url":"tw_stocks/1454.json"},{"revision":"3bc8e182ceeca53b205c99a3b19f6505","url":"tw_stocks/1453.json"},{"revision":"576fce62c232908671d9d7b490fe07eb","url":"tw_stocks/1452.json"},{"revision":"81b79758edd0d16859a355fac8fc8df1","url":"tw_stocks/1451.json"},{"revision":"bf1978c20391617a70f3f077d793d6ed","url":"tw_stocks/1449.json"},{"revision":"214b9d62c1d5592d7ba0a972e7847177","url":"tw_stocks/1447.json"},{"revision":"cf379602b3803ca6f1cba6cacb33d864","url":"tw_stocks/1446.json"},{"revision":"621096ab502b42b253fb6a9e66dbda7e","url":"tw_stocks/1445.json"},{"revision":"8cc4540a8cb9de2c0053c5196bfc2490","url":"tw_stocks/1444.json"},{"revision":"40df53709428b213603ccc555dae810c","url":"tw_stocks/1443.json"},{"revision":"05ddcb85200a6c405dc4a7bb81ffe219","url":"tw_stocks/1442.json"},{"revision":"ce7bfcf42549b564648b01a229cc27a4","url":"tw_stocks/1441.json"},{"revision":"3fb0db52dbfce768212acf26548b7083","url":"tw_stocks/1440.json"},{"revision":"e280e7e987369cf6f6fda5b6c1562301","url":"tw_stocks/1439.json"},{"revision":"74b9a646e451976ed9f49905b2833ff1","url":"tw_stocks/1438.json"},{"revision":"203b4d1f095b3138576b4d7c5238e6e2","url":"tw_stocks/1437.json"},{"revision":"7f64a79ddc39e9b1dd9ba52dcce8137c","url":"tw_stocks/1436.json"},{"revision":"bd757cbdd7b6c5c1b32bce6c3ed035ba","url":"tw_stocks/1435.json"},{"revision":"7009e12490e9e88391655949308c92eb","url":"tw_stocks/1434.json"},{"revision":"9510afae705203e02cdde54c14bc22e3","url":"tw_stocks/1432.json"},{"revision":"decef4a7acade7e7ea83022a341c9388","url":"tw_stocks/1423.json"},{"revision":"0176b48534dd101197c1377e19119486","url":"tw_stocks/1419.json"},{"revision":"43215a88e914c6dd460295a472879cec","url":"tw_stocks/1418.json"},{"revision":"5df33bedbd995a38f581d53a796e30cd","url":"tw_stocks/1417.json"},{"revision":"5e3a72c285785a09afae13ac41241a7a","url":"tw_stocks/1416.json"},{"revision":"0792ff5a65257548e994258762931469","url":"tw_stocks/1414.json"},{"revision":"30240e47d8600abe3cc8f69a1ed60b1c","url":"tw_stocks/1413.json"},{"revision":"e3691ceb421b3010c23538cbad785228","url":"tw_stocks/1410.json"},{"revision":"7934619c9b702e149bb8fdd05a5c3f66","url":"tw_stocks/1409.json"},{"revision":"a8a260f04b34893ddc6c1aa78f8a122f","url":"tw_stocks/1402.json"},{"revision":"6a43b641b9b06a6bff87af7d96b97165","url":"tw_stocks/1342.json"},{"revision":"b304fdd2937aa3be292dd26fec36a735","url":"tw_stocks/1341.json"},{"revision":"a505ced0a30c783068af396ee219a2bb","url":"tw_stocks/1340.json"},{"revision":"ec16bdb5e55c4b058a9fd0d1503790fa","url":"tw_stocks/1339.json"},{"revision":"5e55d7e10b75b93d5e58a4c97df75e1b","url":"tw_stocks/1338.json"},{"revision":"17190404ef41a18a010ed0bab7e9660d","url":"tw_stocks/1337.json"},{"revision":"3f067f8d6c863b0a9c60cacac72b90e4","url":"tw_stocks/1326.json"},{"revision":"45048dc9c37f134a78b76ee3373aa20d","url":"tw_stocks/1325.json"},{"revision":"64f6d96693b95f638b959d58c2817a28","url":"tw_stocks/1324.json"},{"revision":"82f89ac6c8096974e256419f4b119353","url":"tw_stocks/1323.json"},{"revision":"97591ff06bb02eb549cf2a3000647cda","url":"tw_stocks/1321.json"},{"revision":"fb0ad1093ba294889b4709cdecd6d9fa","url":"tw_stocks/1319.json"},{"revision":"6c7f7cc3077b5e1112bffa62a4327d3d","url":"tw_stocks/1316.json"},{"revision":"094624886cf3510e00a9fa0264836b3b","url":"tw_stocks/1315.json"},{"revision":"2f745a8bd6cb5d58a77925dce86be523","url":"tw_stocks/1314.json"},{"revision":"047fcad586aa4f7dfb8bde66892b9334","url":"tw_stocks/1313.json"},{"revision":"18d1b3cd8bf5e6d0313f1d1185604c18","url":"tw_stocks/1312.json"},{"revision":"5864932a86af6c9a48d13770e29c24c1","url":"tw_stocks/1310.json"},{"revision":"46186f03817579f78919a62121ee4602","url":"tw_stocks/1309.json"},{"revision":"a74b9c48c429fb8a2102cf33e0b19781","url":"tw_stocks/1308.json"},{"revision":"2f890c65f4f27edec8a06e8ff959a1c7","url":"tw_stocks/1307.json"},{"revision":"ce42b7a5101f841819d521a95608f77a","url":"tw_stocks/1305.json"},{"revision":"476b948c3771e421be51c831d93b5734","url":"tw_stocks/1304.json"},{"revision":"a40e0fcf0f5ecbad7ecbf03b2f2596ff","url":"tw_stocks/1303.json"},{"revision":"adba787114f72f90f3aadd77b763ed40","url":"tw_stocks/1301.json"},{"revision":"85dd57888cb9b23442a98ec196dbc612","url":"tw_stocks/1256.json"},{"revision":"17147c05a5839282108f0c8ff14740c0","url":"tw_stocks/1236.json"},{"revision":"d5498ff03a2c33f5b49f4c5b9c26f4e7","url":"tw_stocks/1235.json"},{"revision":"c340ab08cb872eaefaab15c3b28a246e","url":"tw_stocks/1234.json"},{"revision":"6d6d0d9dbcb76d8b0ccabd1cc4cba812","url":"tw_stocks/1233.json"},{"revision":"1deb53ececc1f6336617edbdba6889e4","url":"tw_stocks/1232.json"},{"revision":"ca4c08d061cc29bdf79e7dea934ccd65","url":"tw_stocks/1231.json"},{"revision":"12f45f6819abb03e90f8b10472b230c0","url":"tw_stocks/1229.json"},{"revision":"bdbb0010da519ab0c0c91666e54e7ca9","url":"tw_stocks/1227.json"},{"revision":"ef9318077ecd743ca20c793b3c153afd","url":"tw_stocks/1225.json"},{"revision":"261d3c583848e95d173aaa795cef0b66","url":"tw_stocks/1220.json"},{"revision":"039d6904a545919bc96e3987a2b7d929","url":"tw_stocks/1219.json"},{"revision":"ce9b6331273bed14b253b25d5e06e96c","url":"tw_stocks/1218.json"},{"revision":"38e9f48b8e3b6088fe8c345b3a920b80","url":"tw_stocks/1217.json"},{"revision":"0901110423fbfa985dd464eb58c758a6","url":"tw_stocks/1216.json"},{"revision":"070ab3a0811a0c488f84055864e32b9e","url":"tw_stocks/1215.json"},{"revision":"67ab6c12017eb0fd8954b9848806b576","url":"tw_stocks/1213.json"},{"revision":"c102c2518cf7f30a33bc9c42b95a0bf9","url":"tw_stocks/1210.json"},{"revision":"26f71efbca79139a3126d3622bb1c88e","url":"tw_stocks/1203.json"},{"revision":"b27efa1517143e88316a5ac8790af7b8","url":"tw_stocks/1201.json"},{"revision":"afcb328b47522aecd575661e51ab5fe5","url":"tw_stocks/1110.json"},{"revision":"1c61ec404777c28b241ee5f5180af50f","url":"tw_stocks/1109.json"},{"revision":"bf3bbffad8d08556a368c638bbdc2e8a","url":"tw_stocks/1108.json"},{"revision":"982d01d7bd089b8eb58cf52e70930614","url":"tw_stocks/1104.json"},{"revision":"9b1864ed9dcba2ebc5f6386990fd95e7","url":"tw_stocks/1103.json"},{"revision":"df912088bef48799eb847cb62f108fc2","url":"tw_stocks/1102.json"},{"revision":"3b3291296ce93bc438ae0d62f8d742bd","url":"tw_stocks/1101.json"},{"revision":"0d1bdd037fa8b3394122274f12b8e507","url":"tw_stocks/00997A.json"},{"revision":"f12e94b9a27111d8f146da85f86184d4","url":"tw_stocks/00996A.json"},{"revision":"ef64aa8861234fab784be066ec87b0bb","url":"tw_stocks/00995A.json"},{"revision":"67574c3da7c98c8fd8b37cc69fd573a2","url":"tw_stocks/00994A.json"},{"revision":"2276a3363d6724eb39ce7fb353229478","url":"tw_stocks/00993A.json"},{"revision":"f220ebac34375af791f8bdf70698375f","url":"tw_stocks/00992A.json"},{"revision":"1a0f87b82c9c8f784bd5edaa38ea9eab","url":"tw_stocks/00991A.json"},{"revision":"b55e527d583298c91798eb06cfc0b0b7","url":"tw_stocks/00990A.json"},{"revision":"f022683233f0405dac390973931876f8","url":"tw_stocks/00989A.json"},{"revision":"672825333be56c9fa04a76e707c91ba0","url":"tw_stocks/00988A.json"},{"revision":"2fea901389e21d44b096ad3dee85f983","url":"tw_stocks/00987A.json"},{"revision":"7a86da421c9a461d8fad682a1fe19897","url":"tw_stocks/00986A.json"},{"revision":"f9ac64ca6a2524cc0f49ceb37799f994","url":"tw_stocks/00985B.json"},{"revision":"bd43fe532b1662b20ce0c57acf5fc11b","url":"tw_stocks/00985A.json"},{"revision":"fbec1d65b443e44f66f82fc3ff47e421","url":"tw_stocks/00984D.json"},{"revision":"58e44e1189321c0f4811a68818a3b3d3","url":"tw_stocks/00984A.json"},{"revision":"e9ec4ca52374959654bf2f993e0d5e03","url":"tw_stocks/00983D.json"},{"revision":"42a2326fc9cf29686696df3234aa5cf3","url":"tw_stocks/00983A.json"},{"revision":"c0e658b97a9e86bea41e637c9d21cdbd","url":"tw_stocks/00982T.json"},{"revision":"986cfbbaa5621ab8c3a495a692ffcf98","url":"tw_stocks/00982D.json"},{"revision":"017db8e72961cef6b4e6fb25f9262abd","url":"tw_stocks/00982A.json"},{"revision":"057958676f0db5bb7cfb0fe32dfbaf0b","url":"tw_stocks/009820.json"},{"revision":"dd2caada504cf6cf1900ebf4f495d7d3","url":"tw_stocks/00981T.json"},{"revision":"062577e7ea896895008f59b30e191b4e","url":"tw_stocks/00981A.json"},{"revision":"0f88ccbfe43a526cb9661f832d226237","url":"tw_stocks/009819.json"},{"revision":"78d670d9db2e123b94b25e5dfaae7665","url":"tw_stocks/009818.json"},{"revision":"54395095634093f5af33b921177a9470","url":"tw_stocks/009817.json"},{"revision":"99eb8e2c657ce269c97a30928ee79743","url":"tw_stocks/009816.json"},{"revision":"1403b6480a9be2c76ca5878946bc00d4","url":"tw_stocks/009813.json"},{"revision":"352fae0a824264cc43b9fa276cb2bef9","url":"tw_stocks/009812.json"},{"revision":"35474d912fb7e7db3b75efcf552fb5fa","url":"tw_stocks/009811.json"},{"revision":"a9ceeb8cfdfae4129359f906b114d2a9","url":"tw_stocks/009810.json"},{"revision":"e780adc4b00ae610e2b00f0b24dc2e8d","url":"tw_stocks/00980A.json"},{"revision":"94fbb56ad898f0ef5efe76e25567d95b","url":"tw_stocks/009809.json"},{"revision":"c89cd5e26c5ddca98c7f70d7aba8df1d","url":"tw_stocks/009808.json"},{"revision":"1404c08d52bce0680d0da83f8cd547f3","url":"tw_stocks/009805.json"},{"revision":"006b81e505a5822e35763ed6a5a7103a","url":"tw_stocks/009804.json"},{"revision":"78aae97d5b89682a6f9e46be43b69089","url":"tw_stocks/009803.json"},{"revision":"21507c701360eabe39c583483f55c4f3","url":"tw_stocks/009802.json"},{"revision":"ee5eb5667b8e5b1e175bdfd7a0626144","url":"tw_stocks/009801.json"},{"revision":"00a391ed40025cb8237bd7fc851cfad7","url":"tw_stocks/009800.json"},{"revision":"949172ec849a32616bf617b59bda55ee","url":"tw_stocks/00972.json"},{"revision":"01ef21ae565c16454764de6f08f2bcbd","url":"tw_stocks/00971.json"},{"revision":"457e816ec4f4117777ee51da0bde1817","url":"tw_stocks/00965.json"},{"revision":"563371cfa90e8618cce8045a701ae845","url":"tw_stocks/00964.json"},{"revision":"39d9d0108725e98c7be7c4bb0a4c7ca9","url":"tw_stocks/00963.json"},{"revision":"2fa6c206726da729c2b9cebcfcd46133","url":"tw_stocks/00962.json"},{"revision":"f1ca5dfb61557b53bc5e23347dbaf391","url":"tw_stocks/00961.json"},{"revision":"41163cdd4d220a09bb40307c07f94dbc","url":"tw_stocks/00960.json"},{"revision":"7f464168ccc3ade9dc6289dba2fb54c7","url":"tw_stocks/00956.json"},{"revision":"223e38cd73b5356ca81116428304462c","url":"tw_stocks/00954.json"},{"revision":"15029e317995048a7683a034780518d5","url":"tw_stocks/00953B.json"},{"revision":"38a23cf81bf69e5c244879049407c47a","url":"tw_stocks/00952.json"},{"revision":"dedcb1a129ec2c3f093d24644a29dd7d","url":"tw_stocks/00951.json"},{"revision":"440cbb9dd3f4f88bcaf841dd503fd029","url":"tw_stocks/00949.json"},{"revision":"3db97bbe01c5ce196a62e32b3a20fa4f","url":"tw_stocks/00947.json"},{"revision":"005600f4603a49e5da67ed021eb3b204","url":"tw_stocks/00946.json"},{"revision":"85967a63d0c38b09cd70b431e6cb4655","url":"tw_stocks/00945B.json"},{"revision":"2a51933c1724426e31de52dd3a57d9b8","url":"tw_stocks/00944.json"},{"revision":"993feef2f835abf6afeffbe9c906cc4f","url":"tw_stocks/00943.json"},{"revision":"61aa096e1d6ea6133151759b9bdea0ee","url":"tw_stocks/00941.json"},{"revision":"caf89c3104d57d0d662d4ec02b72b069","url":"tw_stocks/00940.json"},{"revision":"e0496cafa9306392961793e45532a20e","url":"tw_stocks/00939.json"},{"revision":"e0812697f2879434732944a548ae33fc","url":"tw_stocks/00938.json"},{"revision":"529ecb7bcf335f9c053990e0f7342b10","url":"tw_stocks/00936.json"},{"revision":"350e623630363ff476ad5075e2815a33","url":"tw_stocks/00935.json"},{"revision":"6f3f734a4106cfd9fa61a5cb1a423848","url":"tw_stocks/00934.json"},{"revision":"25f1a4385ec71d2fd4291f94ddb03ccb","url":"tw_stocks/00932.json"},{"revision":"4c099ec8a0e64d9645ef49a8ba29c500","url":"tw_stocks/00930.json"},{"revision":"7dbb16bd6ca479f4e9e059addd06d045","url":"tw_stocks/00929.json"},{"revision":"7a8ba8517361a8066b3fecfee8cfba14","url":"tw_stocks/00927.json"},{"revision":"07915cadcda63b716e8f713d179c0f06","url":"tw_stocks/00926.json"},{"revision":"896b1aae234eb5541484ff3c3e1198f4","url":"tw_stocks/00924.json"},{"revision":"f261da15004a30b93ba8d2c871e8c7d5","url":"tw_stocks/00923.json"},{"revision":"b94c29cfa51481b18c5e95b59153bd13","url":"tw_stocks/00922.json"},{"revision":"999782c9c4c1a9e3d9793cb50cbd8ab7","url":"tw_stocks/00921.json"},{"revision":"3261c65004276feb1d755998b998aa3e","url":"tw_stocks/00920.json"},{"revision":"f28963738f94f13c896a300803276fca","url":"tw_stocks/00919.json"},{"revision":"f21d1d2160b4575304d25be476cce5c2","url":"tw_stocks/00918.json"},{"revision":"a4e2f5f2318e99cfe804034b6b028946","url":"tw_stocks/00917.json"},{"revision":"9a464b92dd528cc0930badaf5a6adebe","url":"tw_stocks/00916.json"},{"revision":"86da14915977471b82b5d5c82185473e","url":"tw_stocks/00915.json"},{"revision":"ffb41aef28d49774d65f8d21fcaf5e19","url":"tw_stocks/00913.json"},{"revision":"287d0351d87bd6e42e6838991bcf1256","url":"tw_stocks/00912.json"},{"revision":"8efd7eb9de15f4cec0d4b87a4fc53e85","url":"tw_stocks/00911.json"},{"revision":"63565fdd620c97895dc00645d66760fd","url":"tw_stocks/00910.json"},{"revision":"5abb86861b76e430a8db388bb365be78","url":"tw_stocks/00909.json"},{"revision":"d25680ff9e97a2a074b02fb4313c8e0a","url":"tw_stocks/00908.json"},{"revision":"8881874332ae7c5e2e11e70845d67141","url":"tw_stocks/00907.json"},{"revision":"0ac3ababc953cf1acfd8c05be1495705","url":"tw_stocks/00905.json"},{"revision":"3b09d7ea6dc9df53d743fd912563c3ce","url":"tw_stocks/00904.json"},{"revision":"7776cca7d261c983f94d4fa709ab882a","url":"tw_stocks/00903.json"},{"revision":"1f2e5e54fe3ade168e0fa1e3328b7ac4","url":"tw_stocks/00902.json"},{"revision":"447508777bb371e2eba4bb0f4b1d271a","url":"tw_stocks/00901.json"},{"revision":"4d67edfb03dd20c86123d36025df8fc0","url":"tw_stocks/00900.json"},{"revision":"d55070c31c2fc260da2fb5927281bfb7","url":"tw_stocks/00899.json"},{"revision":"c194acaf307f4564b44e11e6007c6eea","url":"tw_stocks/00898.json"},{"revision":"a5eef713b16edb07104b0ddae8f0254b","url":"tw_stocks/00897.json"},{"revision":"6a1bf576a17b63545493110e30bc2c61","url":"tw_stocks/00896.json"},{"revision":"af5f4a73cf0da67e2335795f81c2fa17","url":"tw_stocks/00895.json"},{"revision":"4f1a20497c851510312ab4bb2d7f3cf4","url":"tw_stocks/00894.json"},{"revision":"c8553a3a2577d79259a1239381242470","url":"tw_stocks/00893.json"},{"revision":"71dc68d93c10c2500fd42e9af44564d5","url":"tw_stocks/00892.json"},{"revision":"e965fadc6e039f6d581aa1b3fd68461c","url":"tw_stocks/00891.json"},{"revision":"f5525ddfea622be7b92e1e97cf9f9daf","url":"tw_stocks/00885.json"},{"revision":"15f56f30bdcffa2fc5df8cf4c594a6cd","url":"tw_stocks/00882.json"},{"revision":"c8f31b48f992713b64d929380ebe12f5","url":"tw_stocks/00881.json"},{"revision":"6978eb3088be09598fa544fdf5349751","url":"tw_stocks/00878.json"},{"revision":"9e813110060219ff25d185137f466fcc","url":"tw_stocks/00876.json"},{"revision":"370c9f9bab34b61c81bc1fb8e97724f8","url":"tw_stocks/00875.json"},{"revision":"1a379c68468ce53a5a32eb047d455198","url":"tw_stocks/00865B.json"},{"revision":"8f1ff07061717190b1d3445e5bd597df","url":"tw_stocks/00861.json"},{"revision":"33ec82abbcce1ad3967b79bcda791053","url":"tw_stocks/00852L.json"},{"revision":"d836a5a6b9b37aabd67b180216627b46","url":"tw_stocks/00851.json"},{"revision":"af359f427bab96ff530ab7a978be3a82","url":"tw_stocks/00850.json"},{"revision":"f7ad06bcfd782a32e27811ec52588be8","url":"tw_stocks/00830.json"},{"revision":"cc4efefa0d5ba5a3ab38e6e6f82fc8bc","url":"tw_stocks/00783.json"},{"revision":"133026a88a7d9252c157046a2532a346","url":"tw_stocks/00775B.json"},{"revision":"9468b346e04fd81eb949bcd44845b763","url":"tw_stocks/00771.json"},{"revision":"fb70c94e03504c4b0973e9b4dbdd9079","url":"tw_stocks/00770.json"},{"revision":"eead9df03287be4ec1be82ebf33dc5f2","url":"tw_stocks/00763U.json"},{"revision":"12295632ab0dfea453137e306ba4821a","url":"tw_stocks/00762.json"},{"revision":"57992f46ea76fa5a7484d548ecfd0083","url":"tw_stocks/00757.json"},{"revision":"a6f5b09e3c163378c6dd8b900a8f37dd","url":"tw_stocks/00753L.json"},{"revision":"0c41ccb6a6baffb71551318a5f7eea01","url":"tw_stocks/00752.json"},{"revision":"cb7178e0139b02dedc4cff1d77967620","url":"tw_stocks/00739.json"},{"revision":"1552167b973c006c021a6a794dc90e32","url":"tw_stocks/00738U.json"},{"revision":"e41b201053f722ce45803fb435b02328","url":"tw_stocks/00737.json"},{"revision":"d1c2ec1a9ef83de7dfca261834dd1d2f","url":"tw_stocks/00736.json"},{"revision":"bc4b49bf1ea6f178cb64d3be7378a4f5","url":"tw_stocks/00735.json"},{"revision":"d47836c6c5da18f28f676693ba599c03","url":"tw_stocks/00733.json"},{"revision":"b7a3b1f82336c03231f547fcf8bab063","url":"tw_stocks/00731.json"},{"revision":"0cd93ceeb1bdcdd38c8a6879fd17e84a","url":"tw_stocks/00730.json"},{"revision":"5405a6150a4c48044755f18c650a49b6","url":"tw_stocks/00728.json"},{"revision":"0a883ae3e8f6c10fc5f11734343d89bf","url":"tw_stocks/00717.json"},{"revision":"c7f6ebeef143dd7d70d6bd1763354a9c","url":"tw_stocks/00715L.json"},{"revision":"53edfe4e05e88985d1536bf54f9190aa","url":"tw_stocks/00714.json"},{"revision":"138445bd306e6ba22cd3214da8243d31","url":"tw_stocks/00713.json"},{"revision":"722718a50036cc54c102a818b4e6787c","url":"tw_stocks/00712.json"},{"revision":"5179859c53730726de89f29b1ef7f51c","url":"tw_stocks/00711B.json"},{"revision":"e60ea6d7effcd5d6709719c3e581dbcf","url":"tw_stocks/00710B.json"},{"revision":"e5105c0cca89702477a207a9e8fb32c2","url":"tw_stocks/00709.json"},{"revision":"7001291a4e33d025d95c35ba9abf5417","url":"tw_stocks/00708L.json"},{"revision":"526044b44544d37ba0cd76cb3f6a86f9","url":"tw_stocks/00707R.json"},{"revision":"3b064fd15652280ebafb1f0ad56d5e75","url":"tw_stocks/00706L.json"},{"revision":"69ede9f8b8ab7c395352b5f38cdf0cab","url":"tw_stocks/00703.json"},{"revision":"82c28f592fce5fe03de93de1bc030577","url":"tw_stocks/00702.json"},{"revision":"347b4e149d4b1af33074484e7acc343d","url":"tw_stocks/00701.json"},{"revision":"3261d844eda0e60b49f957ff89abea1e","url":"tw_stocks/00700.json"},{"revision":"4d9455756f4a78eb21b3e03716430d47","url":"tw_stocks/00693U.json"},{"revision":"6fe38bfec37dbd0c1a6cb6812b10bcfc","url":"tw_stocks/00692.json"},{"revision":"37fdf4fd1a0eb5c7cfdb556dedaaeaf8","url":"tw_stocks/00690.json"},{"revision":"6db7982a51e870d2f43a12dac878a61b","url":"tw_stocks/00689R.json"},{"revision":"d652b1921e08f1af6fdc0600b96c1982","url":"tw_stocks/00688L.json"},{"revision":"18431374282cdde6e9cbd1023bea2c92","url":"tw_stocks/00686R.json"},{"revision":"b26da396fd05ee58449aeb4016625561","url":"tw_stocks/00685L.json"},{"revision":"5f29b565df665035f18fef82adc5e6ea","url":"tw_stocks/00684R.json"},{"revision":"cad8dd732988cce544275f9c80295b79","url":"tw_stocks/00683L.json"},{"revision":"4db8297897e0a36d428de541fd9bdcf7","url":"tw_stocks/00682U.json"},{"revision":"8e085cebbc095b751fe4ed7c26496ce0","url":"tw_stocks/00681R.json"},{"revision":"9fcf6170b11a23bc28f85dacf04830c0","url":"tw_stocks/00680L.json"},{"revision":"19fe315ab7e9fefb16c5844309df8f38","url":"tw_stocks/00678.json"},{"revision":"2a3c0e154d2b835568865154987e81b0","url":"tw_stocks/00676R.json"},{"revision":"f0c3c73b75fe4fd413e9d23fc4a5601c","url":"tw_stocks/00675L.json"},{"revision":"1b20a66d9bf87d46a7c273d31544d959","url":"tw_stocks/00674R.json"},{"revision":"60460708cbae2003c22ea9bc2bd8b72e","url":"tw_stocks/00673R.json"},{"revision":"0093a404b0f3c7ee2fc75695a7816337","url":"tw_stocks/00671R.json"},{"revision":"41b136905c9a3fc46d2e80a09adb6cc5","url":"tw_stocks/00670L.json"},{"revision":"314cd3a232f32dfb62920bca740e6a98","url":"tw_stocks/00669R.json"},{"revision":"0c3d086d2b9b28a7f600162604380c6e","url":"tw_stocks/00668K.json"},{"revision":"b3b52a8d3a8057633895bc723f29d0d3","url":"tw_stocks/00668.json"},{"revision":"578fc5631ccb87e524d3e724cc2c2513","url":"tw_stocks/00666R.json"},{"revision":"ec43a6962d11167476523a716c3515f5","url":"tw_stocks/00665L.json"},{"revision":"3b9bc95ce80344cced1aa15a5861302c","url":"tw_stocks/00664R.json"},{"revision":"ad4c6b711f19fcf417766c0923e9eec5","url":"tw_stocks/00663L.json"},{"revision":"e702f923aaadbee35fcaccbcdbf46857","url":"tw_stocks/00662.json"},{"revision":"16fe3e9216a1776442834af374163edd","url":"tw_stocks/00661.json"},{"revision":"76c3378d346a3c830332454827ee631c","url":"tw_stocks/00660.json"},{"revision":"2555f688bb26be8343077757dc5adcd4","url":"tw_stocks/00657K.json"},{"revision":"5857c0a1be80d5f2d24674c07b815b8c","url":"tw_stocks/00657.json"},{"revision":"dc256885ef07f49a26247818dee32410","url":"tw_stocks/00656R.json"},{"revision":"337db60df2b79361345a91b25b500f4e","url":"tw_stocks/00655L.json"},{"revision":"a5b3d21f288c7d1a9464e2d0ddf7d783","url":"tw_stocks/00654R.json"},{"revision":"103c6386bc3cb28a0f3dae04126a47fb","url":"tw_stocks/00653L.json"},{"revision":"f004a667aca43a29180c673f5ffcc218","url":"tw_stocks/00652.json"},{"revision":"35b5c7144d436881b59c76e01d5daa22","url":"tw_stocks/00651R.json"},{"revision":"e6ed57841d47ab919edb672cb5226c98","url":"tw_stocks/00650L.json"},{"revision":"f540a4c0c311d8c907488586663ddf4b","url":"tw_stocks/00648R.json"},{"revision":"a6f9747af2d69bb96392814ea3d3946e","url":"tw_stocks/00647L.json"},{"revision":"54e9f43339e6f1b95f3645b570967139","url":"tw_stocks/00646.json"},{"revision":"3b2fcef439854856292ffd4c5cf11e5c","url":"tw_stocks/00645.json"},{"revision":"2643f1fdb781b03e0ca84410dcd9b174","url":"tw_stocks/00643K.json"},{"revision":"8d17b2c4dc99f0f700efc13198c02ab3","url":"tw_stocks/00643.json"},{"revision":"23240a1a8b8cf962404f9793cf3afd0b","url":"tw_stocks/00642U.json"},{"revision":"2a093d1d25a8b90cf03d2481b137db33","url":"tw_stocks/00641R.json"},{"revision":"7e91f900a18216c35eb03d4eb5104250","url":"tw_stocks/00640L.json"},{"revision":"cd9febac3937f1ec97e2d63ceadd3a1c","url":"tw_stocks/00639.json"},{"revision":"1f6c2309c18ad97af4455a46c3f65e39","url":"tw_stocks/00638R.json"},{"revision":"2fba7a49e79b61568fd8136d9747b220","url":"tw_stocks/00637L.json"},{"revision":"c8b0a056500af48723b4cfd952cd2276","url":"tw_stocks/00636K.json"},{"revision":"3f7d5c89d365886114ead4d59942f9dd","url":"tw_stocks/00636.json"},{"revision":"3ec10ea1054ee3b4a96522c1cffaa8fe","url":"tw_stocks/00635U.json"},{"revision":"19136c928d6dd023521b6330a466992a","url":"tw_stocks/00634R.json"},{"revision":"178bebb6955ff1e84df2c137bbd22545","url":"tw_stocks/00633L.json"},{"revision":"b30fd4bc6c377d9e2f2afee4aa6ad0c0","url":"tw_stocks/00632R.json"},{"revision":"c007017e0942782b299496368b42ff57","url":"tw_stocks/00631L.json"},{"revision":"a3f53d2a3e13c1f5873800d1135e11f2","url":"tw_stocks/00625K.json"},{"revision":"5636f0179c6ecb4e68a5e40dda6cd324","url":"tw_stocks/006208.json"},{"revision":"7012281e83b4a99376a8e647427d502b","url":"tw_stocks/006207.json"},{"revision":"06aef50631e65da0aa7ee45bc4b9e91b","url":"tw_stocks/006206.json"},{"revision":"2886dbd4c6d5e89186912e720353c19b","url":"tw_stocks/006205.json"},{"revision":"b73db2652e1b6e4b6d6756008ee84812","url":"tw_stocks/006204.json"},{"revision":"9c300890737b67b643c70ec5f8820756","url":"tw_stocks/006203.json"},{"revision":"36044bf8ab150f015a5e4fb78e141430","url":"tw_stocks/0061.json"},{"revision":"a1ab8bc262e3a4006bc65e4be3ec51fc","url":"tw_stocks/0057.json"},{"revision":"83b2af6ed3f19a9eef64d59fd7a6821a","url":"tw_stocks/0056.json"},{"revision":"9aafdae9c393b8160e99cb49817b819e","url":"tw_stocks/0055.json"},{"revision":"c4c0084ce2c54d40111f83126aafe116","url":"tw_stocks/0053.json"},{"revision":"4343626872d794751ac4e6311a48e955","url":"tw_stocks/0052.json"},{"revision":"0210be20c52af451e98a53b8471628e9","url":"tw_stocks/0051.json"},{"revision":"d1d9f4e74ce2d132d0ec632d50aa6c4f","url":"tw_stocks/0050.json"},{"revision":"9a19a1e1fd1f7c1a070222dbcb726b62","url":"tw_stocks/00401A.json"},{"revision":"255ec547b1785a027a5e002cc862ca8f","url":"tw_stocks/00400A.json"},{"revision":"771fcad2aa3208689976420a396f10bf","url":"subscription/callback.html"},{"revision":"a5016ec1a5ee1d5ff5e147da2b13d163","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"365377a85842121b92d563482f78bec5","url":"financial/rebalance.html"},{"revision":"a1cfb80e07077fc77d2f680ee21a7810","url":"financial/cashflow.html"},{"revision":"f250e16509693dc2b35d196a0e2c23e4","url":"financial/balance-sheet.html"},{"revision":"348553a762e553dccfe2df2cfa55306f","url":"finance/tags.html"},{"revision":"279d1de4291c8a8a1b85db9ebae559d2","url":"finance/finance-weekly-2026-04-11.html"},{"revision":"d6c2ea33a7dea771c62bd34636c89654","url":"finance/finance-section-created.html"},{"revision":"27052f30a1fe58ac8a000caf29730ffe","url":"finance/finance-2026-04-22.html"},{"revision":"505c6dc2d811f478ad962a554985245c","url":"finance/finance-2026-04-21.html"},{"revision":"091df366c62fcff365cf8e798ace161e","url":"finance/finance-2026-04-20.html"},{"revision":"572f1dae44e64dc064c2c02dd90a4400","url":"finance/finance-2026-04-17.html"},{"revision":"2abd442cb7fdeaae2188974e96d31ff9","url":"finance/finance-2026-04-16.html"},{"revision":"e16fd2a706e05e7624212f64f2a9326d","url":"finance/finance-2026-04-15.html"},{"revision":"b1b6b8ccc0fd416a144dee1da2f6b241","url":"finance/finance-2026-04-14.html"},{"revision":"a5a07304c9a87bb0524b38a4b03c84b9","url":"finance/finance-2026-04-13.html"},{"revision":"ada02950703e6282ece7bd4526b2cf4f","url":"finance/finance-2026-04-10.html"},{"revision":"41630f8b8f6e6570e9dfd0f66e70fc76","url":"finance/finance-2026-04-09.html"},{"revision":"ae06ee5f64d6c3c5bbd9830579f468a4","url":"finance/finance-2026-04-08.html"},{"revision":"c9e9702e19b65c5a84fb869c88865486","url":"finance/authors.html"},{"revision":"cee1b170c973c9fdae1272227f3e01b5","url":"finance/archive.html"},{"revision":"5d0d21b35164996829227b654c695098","url":"finance/tags/weekly-report.html"},{"revision":"96bfa431dfddcdb584288882ab2ddf7c","url":"finance/tags/finance.html"},{"revision":"59624de5bee6d0c2eab2b60f536371ec","url":"finance/tags/daily-report.html"},{"revision":"b71cc07effd4723c998fa03528c9c8b3","url":"finance/tags/announcement.html"},{"revision":"d5071f2a2467324186bc65e30f7321c7","url":"finance/tags/finance/page/2.html"},{"revision":"c28e31e6fbe0ae45cd0a594dcf9ed520","url":"finance/tags/daily-report/page/2.html"},{"revision":"f00f154c99d1b1c97f5a8f9a5652eb54","url":"finance/page/2.html"},{"revision":"725357cf9435c9b95cade9c5bfe4987c","url":"docs/tags.html"},{"revision":"3f7a4b51ab8dd0b90edc1b59e0378814","url":"docs/intro.html"},{"revision":"561e84bf5501222f27795f37a6035416","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"75cdf6ef049c63847ac6a31a18923715","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"316263081236319d641e40f475f8e6b6","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"17a52e76b10cadd3573b6787234e89c8","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"47af8dd2e713baffe82312f589716327","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"ba41e105e3eed6db655390be9f23b539","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"827744bbdd3fb2219be0676bb74cfa80","url":"docs/tags/養成.html"},{"revision":"b388edacc6746a0dee62c616f97e9ce9","url":"docs/tags/資料安全.html"},{"revision":"e2963786ee00bbf26bcf5b0a6b748b35","url":"docs/tags/經濟循環.html"},{"revision":"b34d16aa803afc6f3746a0351b3bb42b","url":"docs/tags/百科.html"},{"revision":"176ef9cdabbdd338d5de596294ac0692","url":"docs/tags/模型控制.html"},{"revision":"ea7a9e014bbf3685f8de611baa43ee43","url":"docs/tags/數據標準.html"},{"revision":"debbf03120ecd1250e1dcc9a568241b7","url":"docs/tags/接入規範.html"},{"revision":"002bf06890f03f9bd525e9eac1dd7dc2","url":"docs/tags/指南.html"},{"revision":"3cfc8366f0594f4e52fbf3a61ce7a1a1","url":"docs/tags/技術哲學.html"},{"revision":"03c375b68c9d122017b8662e5e331131","url":"docs/tags/技術史.html"},{"revision":"c246a5e5010a92274578e051c8a86c80","url":"docs/tags/戰鬥系統.html"},{"revision":"c6b302e95fc9d069d17c227f566c1b04","url":"docs/tags/專案管理.html"},{"revision":"2dd35e949096d6a6ebcde645aa0073a1","url":"docs/tags/安全架構.html"},{"revision":"67ccbad8221bfbe8f7c96eff0e661dfb","url":"docs/tags/安全協定.html"},{"revision":"f39712d5576fa17a315ca18e4aeca198","url":"docs/tags/商店.html"},{"revision":"f14d8fc817a5ca033b973e57fe974773","url":"docs/tags/去中心化安全.html"},{"revision":"3437e1280a628433b68002b824b3daeb","url":"docs/tags/去中心化.html"},{"revision":"c0113e94b41785182b7eea1470cdb259","url":"docs/tags/top-p.html"},{"revision":"e5ebd0b8d94a0a1215d1bc98cc2e1f46","url":"docs/tags/tokenizer.html"},{"revision":"df6418cd55e2ace2443688aaea497c7a","url":"docs/tags/temperature.html"},{"revision":"c470694949726e6862f68be72ae6b108","url":"docs/tags/technical-docs.html"},{"revision":"0df013cc97ae7a5b9109d5ca77e3c0ac","url":"docs/tags/nlp.html"},{"revision":"ead618e8301f76639dcbaf1df71a3b9d","url":"docs/tags/llm.html"},{"revision":"44688f7f48ab1a4f579d0700f8d3a86d","url":"docs/tags/git-hub-copilot.html"},{"revision":"e19e916eebee9520a1500a6e7656a2ba","url":"docs/tags/generative-ai.html"},{"revision":"af21415211438ec9aecbafea3950b6da","url":"docs/tags/eip.html"},{"revision":"63d5750a01a0da6d0cb3e2f436315e34","url":"docs/tags/development-tools.html"},{"revision":"4abcd8ac4d395db8768a771c6a2d71fa","url":"docs/tags/cli.html"},{"revision":"d611a31ea462e93e3c30e278ab7a3a3d","url":"docs/tags/claude-code.html"},{"revision":"e73556450e332afd3001217ed3b986a1","url":"docs/tags/bpe.html"},{"revision":"e3661936d47b18c8d2ae8dec9bd38e31","url":"docs/tags/automation.html"},{"revision":"cd8929d541a463d6f4dcb9d4a8b279e5","url":"docs/tags/ai.html"},{"revision":"f72ce5f40a6fed1e459f76211439b600","url":"docs/tags/agent.html"},{"revision":"d8006611b4de92886cceec5f4c6fc5d4","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"cc9e31ca6e2d398df511c5d5930f8035","url":"docs/skill/gemini-skills.html"},{"revision":"2b846fd7733578d77caf582556971833","url":"docs/skill/claude-code-skills.html"},{"revision":"94c3207a02f9d5ad876624df68895a3f","url":"docs/python-workshop/python-init-file.html"},{"revision":"4bc57b102a018388cced1eeae7b633b9","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"3961a3864f8bd1a09d2fa42d117f603b","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"5d5b8f5f11ce79e8337c950ef37eff53","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"3b3997e8dcdc6fb25f946401085c49db","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"c8afbc7e816e1f5d19885c90af9192f1","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"41a37dbe732dc2c4a83386fa25218c8d","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"2147a7052be1f96d872fbffcc9e7a9b3","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"2cb1828e8cfe7aabf090b5ebda65cd1f","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"dcc9fe24226654d7ecc5b8e721f610f1","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"2071855b9b91b88bbe0f709d38b7bf52","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"4b133e8a6f9548b1e3a8840d6accfb22","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"28c5e0ad9d3afada4425b9574e5b3d5a","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"945cd9983bb9befb19c2ece69bc271fd","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"a7e75b8c21c5fb7807a0391952ce9144","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"8de97720e745e92304b26d3b838af3b3","url":"docs/claude-code-series/skills.html"},{"revision":"b0696b5b46f323a59d69fe00a750618a","url":"docs/claude-code-series/monitoring.html"},{"revision":"557bae4ba4e8c048f958c4371261540b","url":"docs/claude-code-series/getting-started.html"},{"revision":"7f88795041caa3cf46a9c929646d7564","url":"docs/category/遊戲規則與手冊.html"},{"revision":"3e0c7d646ac01adb48be82dd6b76c8f8","url":"docs/category/發文-skill.html"},{"revision":"cccb1a3ae3fd4cd93cae33f0ec3ad412","url":"docs/category/戰情室元件-skill.html"},{"revision":"08ef954415e89b360480b4b8bf3eacc0","url":"docs/category/skill.html"},{"revision":"aff9c9268b6140fcad79c59352689528","url":"docs/category/python-workshop.html"},{"revision":"4fb92b84f23464696fdce2d9b5ce68ca","url":"docs/category/egg-pet-philosophy.html"},{"revision":"1b5a5b2a2de39b37732c34dacf1a3b16","url":"docs/category/claude-code.html"},{"revision":"f636d07ee9c8e895f9cd8592b8b4714e","url":"docs/blog-skill/news-rules.html"},{"revision":"660abe8a92c079c442f056a4a1c2deef","url":"docs/blog-skill/history-rules.html"},{"revision":"d05b29bebf1f0ee811d693aac276e3c7","url":"docs/blog-skill/finance-rules.html"},{"revision":"a35c9f422e11a88cc3e90c5f35034c5a","url":"auth/callback.html"},{"revision":"a6e66c3ad77cf65c03a3947167bc7d1a","url":"assets/js/runtime~main.bdc15017.js"},{"revision":"4cb3bb31a069965ae250a732f600267c","url":"assets/js/main.1aa23911.js"},{"revision":"df52e996eda0da282d80c787546803ea","url":"assets/js/febb7515.96a0cac2.js"},{"revision":"8d4e0a4337e722dac1f9158f457869aa","url":"assets/js/fc67e8a3.3d57543e.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"5226756cc111237230f4688de4bd9ae8","url":"assets/js/f60bf1e1.11fcd7af.js"},{"revision":"330ec37edcb45fb97791c6f4614d1a4e","url":"assets/js/ef86e77f.353e0e88.js"},{"revision":"d1271fd7cbdc66ee4602d489b4e841b2","url":"assets/js/ec1e3285.8b5c4461.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"5a2cd4b183380d4383be1d9e81f61c84","url":"assets/js/ea89dec7.80cee8b4.js"},{"revision":"40331446bed14347080ce5e1e5350239","url":"assets/js/e88c4a9c.04f0273f.js"},{"revision":"85c86a20c3da7344c1029eacc62b1e21","url":"assets/js/e86a5a75.320d4ee8.js"},{"revision":"512ca83467e2820d208310b870c4ea6a","url":"assets/js/e7f07728.c9234d51.js"},{"revision":"f87390b2b89b632dc6f2a25fd71274e3","url":"assets/js/e1f48af2.499b04f3.js"},{"revision":"411360668ce1530945309ba14f903bfd","url":"assets/js/e1c57381.94ae0ae3.js"},{"revision":"305e717c433672f406d6c0cbb56bbed0","url":"assets/js/dfea6eb9.04e49f8e.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"e59781b00765436ed92ff63025d3b723","url":"assets/js/dd726b46.4f7ad646.js"},{"revision":"3530fb1f16c15c54a2220878970cb087","url":"assets/js/dd5b562f.17936a82.js"},{"revision":"5bb14e5a1eabd3593bca2bc57a11f78f","url":"assets/js/d9b3eee8.6c3af4da.js"},{"revision":"26f69e77930fda38bde6bd5b793276d4","url":"assets/js/d7b680af.e1205cec.js"},{"revision":"fb1171a8650d73b2a385dbb0db8df666","url":"assets/js/d7453cde.938564a7.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"1bce653e1e4a53dc4e036310587a656c","url":"assets/js/d1fa896a.cd13125d.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"987cfafe1863331ba7459b556c13ee81","url":"assets/js/cc221b30.1339ce0d.js"},{"revision":"2276c6c77d5b3e845873b6459d83f643","url":"assets/js/c9add68e.9e64da4b.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"2129bdf2cb5f1b6714db4e7b36a25a93","url":"assets/js/c2f9bb6a.82bf7823.js"},{"revision":"d7161882f9e529cb493767d90b5f23ad","url":"assets/js/c2e1ff31.c1557720.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"abc492876427019ef10e0f5b30eb49c8","url":"assets/js/c0879439.cfcad544.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"c22e857ef4fe8f330a77631522053253","url":"assets/js/bfcb750f.c7c4b431.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"5ad106958bfd40837f7075a62a370e53","url":"assets/js/b95eaafa.fd4b38b8.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"553f3a17e92927c9cd6cb886619fe1d8","url":"assets/js/b714ff87.08360a4d.js"},{"revision":"ec0f5e2e15ad6104ca5d4d2e651ef477","url":"assets/js/b283ca86.3a85bcef.js"},{"revision":"fa9b4a3051f8d1cf48bbae3f7ac2d641","url":"assets/js/b2814407.eb152794.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"56b88a5798832bf5241cb3f752d260b5","url":"assets/js/acfdd4f6.e34b0cc8.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"827e525fea3f5e418e9f57f7fc34c413","url":"assets/js/a71ba949.547ad152.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"10f5e5d44e634cb80d283214a94bc5d1","url":"assets/js/a6038fd8.9322c344.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"ec1ca316ed37f4869c999d0893eb2494","url":"assets/js/99f940e2.a3e947f0.js"},{"revision":"b1f854d19aef95b9957b835f71bc6593","url":"assets/js/99d3b34a.72b288f2.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"14675b38f028f7f375316a10ff86ed86","url":"assets/js/93a08f73.83b973f6.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"629430061c4518c5423a3863459479b3","url":"assets/js/92adc83b.6e86f99b.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"dacd6d391463dd995d9d6dbe48e03e74","url":"assets/js/923ed0b3.6f7a27a2.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"62eda1c862eeb0f1ccc637fb3d22b92a","url":"assets/js/8f79df81.56275f67.js"},{"revision":"713f1cd2dc2642ae23ee91a56b53bc98","url":"assets/js/8c20996d.deb68dc7.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"70450e3d025dac4757a14cfdcfdca12d","url":"assets/js/898514b1.3bfbe1da.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"4e34ae984e7b7d3f8e1a60e2c33bb3eb","url":"assets/js/853ca2df.ce6fa1b0.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"71a57ff97e9147abe91b0ce7d655c114","url":"assets/js/7fbc1a25.7460f82e.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"31fb50f40c838274c20df06cf8a84be7","url":"assets/js/7ce5d7a1.b6e7ff98.js"},{"revision":"70cc8febb73fb8da4b9d30f7da9c982c","url":"assets/js/7af217e3.6b4f5c8b.js"},{"revision":"8af5d6a7b0f016f22104cb35bfc6a0a7","url":"assets/js/7a59c865.fb904616.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"d0fbfd0fd3f4ea183f6308a1af4396e5","url":"assets/js/6cf28232.ce65f55f.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"c2368cbbb5f5119e9c5245b298cff129","url":"assets/js/65223696.f7a92b2b.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"cb2afe7d60c838aabcbb242a8caede43","url":"assets/js/607acb04.8c1eba23.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"8641a5233666dfaa93f0779a0841e57e","url":"assets/js/57ee59aa.f1427f77.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"cf70a05e5194d3579b79c1eb85f88b0d","url":"assets/js/56fce896.2566703d.js"},{"revision":"e2948d20373f01774ed7e056182d57a4","url":"assets/js/55721269.163dc895.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"60b5d887c177638a271e0fc1ef98bceb","url":"assets/js/54513d10.55211f73.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"d476ad1c470bcddfb8f47b62713f7582","url":"assets/js/50000426.8996ac48.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"c812ab56a0f1f07fbbeb02fbf71f0109","url":"assets/js/4810d89a.f9e0f50d.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"e0d399a297392a85027878b4a870c308","url":"assets/js/45d3cddd.3fd35bc3.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"75718707bfe8f1080c18b3b8141e59ec","url":"assets/js/43ea09b6.6638e82c.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"4496dd83e293ecb500e2f7c94880715a","url":"assets/js/41937f2e.fb7bc203.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"0b58573972c096b57cd8a956182d8986","url":"assets/js/3ee3fb84.c99d83b7.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"eb48aeea0ba2e32536d256ddbe48b3b5","url":"assets/js/3c2d29c6.9447af33.js"},{"revision":"2d54e74ce2add40c87528c118ca6e36f","url":"assets/js/3aef7316.45377a47.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"912861be082543de3200a2a0ed4c37b6","url":"assets/js/36f337b1.49f8126a.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"56cacd224e4fc074faa7fcdc6348b731","url":"assets/js/309520ad.a6b53161.js"},{"revision":"314b1d2dde3021cbacf0cea3e0e1bbb6","url":"assets/js/304a23a0.14fc5fb2.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"0f7eecedb20e10c8f544816a8f4352e5","url":"assets/js/2e9e803a.242da8eb.js"},{"revision":"65d4b77fd0086bc21aa9df0c229fd02b","url":"assets/js/2dd9eb9e.829c553f.js"},{"revision":"a7a8ef65b1590257fd46297f31df7ad5","url":"assets/js/2d1d8008.ef89f516.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"5e8bb840cdb4337da6db1515056e65c3","url":"assets/js/28a0c100.015c74cc.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"ac2d690a6eb1774e4c151cafb08b329d","url":"assets/js/24e6def7.28cb37b4.js"},{"revision":"ffcd9720f4205f3b89454af83446a247","url":"assets/js/23d26d3d.c5bcfc42.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"718efee1d32f21ce1508c22f6d8d04fc","url":"assets/js/191e8113.4727fa1b.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"b67e40adf3a587a461683b86de38e0cf","url":"assets/js/179b82d4.04d059c1.js"},{"revision":"f714d84a9bd6d84fe2468d4015283c8b","url":"assets/js/178b6201.1cd3ae8d.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"f4f068d02d09d9736dcd69bfd7a77fce","url":"assets/js/177ac620.6494e25d.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"f52e0982a47a495b92a61d52e429351c","url":"assets/js/162c7fa0.06b19c9c.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"5679ebd8f6ab45298e87c42a8b97dec5","url":"assets/js/1550c41f.ddfdacad.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"4a7c6f22de5bbb02afab5d8c0d116940","url":"assets/js/148a248b.d3d21856.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"67dbe9db3e8e5e4629a1bb729bfeb185","url":"assets/js/0e384e19.2abee949.js"},{"revision":"d871bece4f12600235b0661352d2cf5f","url":"assets/js/0a3b6be8.cb492267.js"},{"revision":"2b6afc47667ef6bed7ae3a730fbdc0bc","url":"assets/js/0962a2ae.5bf3bae3.js"},{"revision":"f0666985d86e21eb31d6088e25a62846","url":"assets/js/04f403f8.fb4dee77.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"5d848278c094a3c4df86656b9e234f2f","url":"assets/js/02366042.4b3afc2f.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"ce56b27d46ee466bedb92ea86531bec5","url":"assets/js/0058b4c6.54facb87.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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