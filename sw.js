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
    const precacheManifest = [{"revision":"9e87fcfabaf105e630482d8f41a752b5","url":"tw_stocks.json"},{"revision":"5cf8d86dbb4987f0825781b848c5019f","url":"subscription.html"},{"revision":"89fad60df1a2c9917165d5c4d76c43c9","url":"quotes.html"},{"revision":"ee5a2947278fa8adb4a134d81f7f8ca3","url":"me.html"},{"revision":"50bf670ca05b6ae01bdb60dc93f4fea0","url":"market-war-room.html"},{"revision":"6bfb59b157a292560ee3267f99a62061","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"d5910513c97f67567c5cd13fa4d4e75e","url":"index.html"},{"revision":"11d5cb63e8e6a1159ada374d30b33fc9","url":"games.html"},{"revision":"74b93a7e4304df5adb2703af44787a7b","url":"finance.html"},{"revision":"311d915a641237e65a6a17d7e24a870e","url":"feedback.html"},{"revision":"7b6538227e3c00d536d8215b501f5c3a","url":"404.html"},{"revision":"c806de4ae07eb9d43864d415759d27c5","url":"tw_stocks/9958.json"},{"revision":"4b4be98bacaf6dc818885ca13af90557","url":"tw_stocks/9955.json"},{"revision":"19e31624cf7054acbfcbeb89a3436824","url":"tw_stocks/9946.json"},{"revision":"fbc25b1e6604cf453baf89738ab001c9","url":"tw_stocks/9945.json"},{"revision":"b0dc566804baa5aad5f3d3a9efaa41e6","url":"tw_stocks/9944.json"},{"revision":"29f49e73031aa8248635c6a5513b4555","url":"tw_stocks/9943.json"},{"revision":"c7f0a3b72504e7517731554bb4ee7c09","url":"tw_stocks/9942.json"},{"revision":"2a28731aa7b105f4bf9359922213a858","url":"tw_stocks/9941.json"},{"revision":"e09d4b244fc8242c9b390e3a7e442e81","url":"tw_stocks/9940.json"},{"revision":"cbbfce84dae813b34baf7163e271e337","url":"tw_stocks/9939.json"},{"revision":"893e5d49237778b8b6c0cf38927c7365","url":"tw_stocks/9938.json"},{"revision":"7895461d4144df80659e0a755251e2d6","url":"tw_stocks/9937.json"},{"revision":"d427857f0f7ca9876d178e3771865b0a","url":"tw_stocks/9935.json"},{"revision":"b9818b1a2ce03c3095ca670b7cae6ea5","url":"tw_stocks/9934.json"},{"revision":"c99af0cba42a26c75d120ecac64db2ad","url":"tw_stocks/9933.json"},{"revision":"21dba8e16663fcc9a3dd3ac3058fe0b5","url":"tw_stocks/9931.json"},{"revision":"26c43a61a00c9aacb843b662a9094d0d","url":"tw_stocks/9930.json"},{"revision":"bae776e96eb8826fd6a8f52f63b50281","url":"tw_stocks/9929.json"},{"revision":"eddd1ccc3b2c4cf791430c5f8cdc21f8","url":"tw_stocks/9928.json"},{"revision":"763f0b13f60fd2a040527878f97b7f33","url":"tw_stocks/9927.json"},{"revision":"331809430b8563ed6946f50b81109de4","url":"tw_stocks/9926.json"},{"revision":"34e66972871c390e16ae478d8bd6f9b1","url":"tw_stocks/9925.json"},{"revision":"dd02d13291e811ad99f9465b446cf70f","url":"tw_stocks/9924.json"},{"revision":"339aa9461f0335f977824fe221160f05","url":"tw_stocks/9921.json"},{"revision":"39ca5909366f894797d33916130f247a","url":"tw_stocks/9919.json"},{"revision":"cb2bd4a79935f8b26606646a0edcd4c8","url":"tw_stocks/9918.json"},{"revision":"7dd636d29225e1d92533259c2da397a5","url":"tw_stocks/9917.json"},{"revision":"d57b20555a6421de573d7098d3fd9e41","url":"tw_stocks/9914.json"},{"revision":"32d287264b02f603d097cd688e855162","url":"tw_stocks/9912.json"},{"revision":"58532d5f9fce8c03d8f3769949e26819","url":"tw_stocks/9911.json"},{"revision":"1eab497fe960c9bdb6d22c4da94f7e59","url":"tw_stocks/9910.json"},{"revision":"f811ff5049f16b9225b072f7811910e2","url":"tw_stocks/9908.json"},{"revision":"029b717ff492c50f2bcb3c3cb8d81ddf","url":"tw_stocks/9907.json"},{"revision":"4ac8d4a1258fbabadc1108417587e5b0","url":"tw_stocks/9906.json"},{"revision":"2de0a9bb32563a007742ba749b4abcaa","url":"tw_stocks/9905.json"},{"revision":"398be6e689f9971f314e830c13b0f9c3","url":"tw_stocks/9904.json"},{"revision":"de68ae91904bee208fd465a67178debc","url":"tw_stocks/9902.json"},{"revision":"8f94a568fb0240741d26767230a855f1","url":"tw_stocks/9802.json"},{"revision":"e35101165e04b23b7172426a5f23301c","url":"tw_stocks/8996.json"},{"revision":"09b6d18cf2822a3ded7095dc17126303","url":"tw_stocks/8940.json"},{"revision":"70da8aabf18e6f456eabb74434a577a3","url":"tw_stocks/8926.json"},{"revision":"40bffe694387a638bda4638d2d26931c","url":"tw_stocks/8499.json"},{"revision":"10c27153dd9672bdc1943c639cd688d9","url":"tw_stocks/8488.json"},{"revision":"1dec40f52669ae314d39dccc402c4399","url":"tw_stocks/8482.json"},{"revision":"60888b98daf0b76242821251428f68e2","url":"tw_stocks/8481.json"},{"revision":"4afd64d32cef6f48daff8e2856744687","url":"tw_stocks/8478.json"},{"revision":"1f091de23cff60041e1dd79c8fa2a6e0","url":"tw_stocks/8476.json"},{"revision":"d926610e89092d93c196ba349bc39e0f","url":"tw_stocks/8473.json"},{"revision":"b541340be13d7452939f502e3ff15b57","url":"tw_stocks/8467.json"},{"revision":"2ec8c7f0bed781b47499bd7ecd6818a9","url":"tw_stocks/8466.json"},{"revision":"a40066e165310dea747967b7c5904b62","url":"tw_stocks/8464.json"},{"revision":"614b060182befe09ef9d985e4bfa8aab","url":"tw_stocks/8463.json"},{"revision":"f032a2d9b7ee175722ab026a3856c9ad","url":"tw_stocks/8462.json"},{"revision":"c06b14b93fb6b1498ffd24f3841b8319","url":"tw_stocks/8454.json"},{"revision":"19055939c0e31fe997015e69822c40fb","url":"tw_stocks/8443.json"},{"revision":"f25bfbd2c939a75b3ccc4659014f06b1","url":"tw_stocks/8442.json"},{"revision":"c76f732056a102ac735a1d0c0cc69015","url":"tw_stocks/8438.json"},{"revision":"172f1feac4fefb3de89ec4e879353920","url":"tw_stocks/8429.json"},{"revision":"9c80e9fad42daf996f4bd1075882c300","url":"tw_stocks/8422.json"},{"revision":"272136a5dde35d8f450e616402fa67fa","url":"tw_stocks/8411.json"},{"revision":"b1dac76ccc1c5e21788a975918d92fd6","url":"tw_stocks/8404.json"},{"revision":"53037bba7416ad591f5fd2881865b95c","url":"tw_stocks/8374.json"},{"revision":"28497807dfd2fbec15a392e985ac6bee","url":"tw_stocks/8367.json"},{"revision":"b9d0636b659240eac3ef63e6523a06b9","url":"tw_stocks/8341.json"},{"revision":"24547e69f0c9f598cdc48f40b800c736","url":"tw_stocks/8271.json"},{"revision":"1fdd9a1f02001102e5256162b7ccc261","url":"tw_stocks/8261.json"},{"revision":"e5c84c4b0233f86a2bcd3daadf7d461c","url":"tw_stocks/8249.json"},{"revision":"351fe5678463358223fed061eee5e9a3","url":"tw_stocks/8222.json"},{"revision":"c065887ff6c2b24a84efe737681298c5","url":"tw_stocks/8215.json"},{"revision":"ef7a769722bc75eced6f3dc4e87aa539","url":"tw_stocks/8213.json"},{"revision":"646293284f71f7e66cdfd34fe4f3e5de","url":"tw_stocks/8210.json"},{"revision":"1482b05846d49519af4cf522de417ed8","url":"tw_stocks/8201.json"},{"revision":"b22d94b5b4b9c4e468b8ce3ac0029099","url":"tw_stocks/8163.json"},{"revision":"a595cf1d05937c230efb6a131df9d4a9","url":"tw_stocks/8150.json"},{"revision":"0fbc00ff57d8e3245a2e24d5dac98c44","url":"tw_stocks/8131.json"},{"revision":"f2a563bdc169afa27f726d85664c32b3","url":"tw_stocks/8114.json"},{"revision":"dfaea0a7c8957e1a11ebfb08d92f7985","url":"tw_stocks/8112.json"},{"revision":"47924f2957e79cf97fff2dffe2359be7","url":"tw_stocks/8110.json"},{"revision":"008bd6b7b268495038ab3d540a9e1407","url":"tw_stocks/8105.json"},{"revision":"409e76d07325864f2ee1337bf5781f3a","url":"tw_stocks/8104.json"},{"revision":"e344e650e2ab7a0e38f77e1e682a4011","url":"tw_stocks/8103.json"},{"revision":"e7cf15d1e64bc47be76f6c20315f5196","url":"tw_stocks/8101.json"},{"revision":"78cdb773bf4bd94e8f85835145f35bdd","url":"tw_stocks/8081.json"},{"revision":"911d583beeed3d9c6bb44dee83f06e56","url":"tw_stocks/8072.json"},{"revision":"f65d32083abc8e947d5b675c6e6cbe90","url":"tw_stocks/8070.json"},{"revision":"100bcf94fe9940b64bde653e746b2653","url":"tw_stocks/8046.json"},{"revision":"41386237d4186d048ff8553082f964a1","url":"tw_stocks/8045.json"},{"revision":"d347ab4a140285ca8749e5068a13865e","url":"tw_stocks/8039.json"},{"revision":"7a4b918746a378f546716d0e89703899","url":"tw_stocks/8033.json"},{"revision":"cb54fb0d73a584c2453edbac5d85fd94","url":"tw_stocks/8028.json"},{"revision":"879da83c6e33e0e2c20bf9bb89e3f076","url":"tw_stocks/8021.json"},{"revision":"8764c4c29240cd7350837d49c612c835","url":"tw_stocks/8016.json"},{"revision":"a4686bc579698426b0ad601e8e6f59aa","url":"tw_stocks/8011.json"},{"revision":"0656c02564a6606d8617d67f196f04c6","url":"tw_stocks/7822.json"},{"revision":"d24412a1dc3f39493122fad9c160cc20","url":"tw_stocks/7799.json"},{"revision":"684f84b02a066f5c7807c6107e92ac81","url":"tw_stocks/7795.json"},{"revision":"044992264dbe6a011516f1107b6bb8be","url":"tw_stocks/7791.json"},{"revision":"ad6e89fa4bf7f316443fab967d1895bf","url":"tw_stocks/7788.json"},{"revision":"43c0446bae999093af6301fde4cac8cb","url":"tw_stocks/7786.json"},{"revision":"52e3b2ae87ff2aeb4d2317c9fc92eb72","url":"tw_stocks/7780.json"},{"revision":"99851f71d2ec05fe0e9c6bc6009bbc7c","url":"tw_stocks/7769.json"},{"revision":"fb9379ff7b0dc3fb6f2da1d91e871258","url":"tw_stocks/7765.json"},{"revision":"1821a3ce2a076eea59833a729a97c3a2","url":"tw_stocks/7750.json"},{"revision":"fc2f2cdc96d5b918ce0b2879893e3e29","url":"tw_stocks/7749.json"},{"revision":"00c2df1cbe4c6a997522a16c5507bc8e","url":"tw_stocks/7736.json"},{"revision":"03041ebc3a06ff126b8329aa59e653de","url":"tw_stocks/7732.json"},{"revision":"81eed2abc9ebbf869fbf049a6bda7ff4","url":"tw_stocks/7722.json"},{"revision":"ac8b934aaf55d3eb2be85e27e478d78e","url":"tw_stocks/7721.json"},{"revision":"696f1ddeef1ab28c51e1538e32bda7be","url":"tw_stocks/7711.json"},{"revision":"9f239f22b817bf9dd4458f7273029519","url":"tw_stocks/7705.json"},{"revision":"13577574a71ee0e7e0b5abfef4efa5e0","url":"tw_stocks/6994.json"},{"revision":"4662819da1035bf43816ddc718976199","url":"tw_stocks/6965.json"},{"revision":"c71a2885c60dbfc9a81d72e439b0e0f8","url":"tw_stocks/6962.json"},{"revision":"9c2ba31d646a19f9275e7ef6a2cef8f4","url":"tw_stocks/6958.json"},{"revision":"1696aee6e82631c1ef6cc2bc4291aa2b","url":"tw_stocks/6957.json"},{"revision":"0ca9066c17bd7e9e5f4eaa533f651ff9","url":"tw_stocks/6952.json"},{"revision":"633ed74c347d49324b362f927f72755f","url":"tw_stocks/6944.json"},{"revision":"fcf0402d9e4b02c2cb428bab663cf334","url":"tw_stocks/6937.json"},{"revision":"b055b262aab3bf22d4463d1a7d78df23","url":"tw_stocks/6936.json"},{"revision":"4ffd026bbfc49e4180471c3cd0300903","url":"tw_stocks/6934.json"},{"revision":"7f63abeb29c54e75e15d16eb598e0682","url":"tw_stocks/6933.json"},{"revision":"2502a9d6a770115659b6cb26c70e4eea","url":"tw_stocks/6931.json"},{"revision":"9d4c82bbbb88fbed3d024b2ba30cb07b","url":"tw_stocks/6928.json"},{"revision":"5ced51cd0b2ee8f40cbcc86edb844146","url":"tw_stocks/6923.json"},{"revision":"873795de0bdc42bfbb59987aff59bb7a","url":"tw_stocks/6919.json"},{"revision":"8967f3a0a1021e8bf52b3c444d9cc805","url":"tw_stocks/6918.json"},{"revision":"bcd2f2af4df569944a63bd03208074d8","url":"tw_stocks/6916.json"},{"revision":"95f8e99e024fdd3c1fbe3f15739cb26b","url":"tw_stocks/6914.json"},{"revision":"14959b5339bab9861ce57c66f64a1016","url":"tw_stocks/6909.json"},{"revision":"8016aac12a108c4f8ef969580c380373","url":"tw_stocks/6906.json"},{"revision":"c7d62b3d6da7846cf5d18b6f5601487e","url":"tw_stocks/6902.json"},{"revision":"2613d9aaa5935a4ab9de26f0a878bccf","url":"tw_stocks/6901.json"},{"revision":"a5702d4b4e4728d42ae5d0ebea3bab56","url":"tw_stocks/6890.json"},{"revision":"f3a2f87c098988d1ee775ddcf74f7c43","url":"tw_stocks/6887.json"},{"revision":"d8081c315287a3fd586ee3db083ed253","url":"tw_stocks/6885.json"},{"revision":"0f2c6988b9c46d4f81dc0c1ddb178c51","url":"tw_stocks/6873.json"},{"revision":"a4db4e8f35be82ecebea56d2873db47f","url":"tw_stocks/6869.json"},{"revision":"79f5368c88c5c586d7d62bb3d6a98021","url":"tw_stocks/6863.json"},{"revision":"49537018e88eb38f6241073f5464c6c4","url":"tw_stocks/6862.json"},{"revision":"2af577afff0fea3425a8258382601549","url":"tw_stocks/6861.json"},{"revision":"d61b09cb777f4c642185ab7c3761a163","url":"tw_stocks/6838.json"},{"revision":"160de28598990774441ba7ca1839b318","url":"tw_stocks/6835.json"},{"revision":"5ab6277fb9604f883d7e46a81a770558","url":"tw_stocks/6834.json"},{"revision":"3166213f302224fe917710a87c819585","url":"tw_stocks/6831.json"},{"revision":"8c46fc48fccd625dbbf88296d0832fa0","url":"tw_stocks/6830.json"},{"revision":"8d25e4c362b384940e47274f490abb9f","url":"tw_stocks/6807.json"},{"revision":"6888bddc6d2ddc9366c6f1dc0d011142","url":"tw_stocks/6806.json"},{"revision":"890097c961c48a48a07799795bd9733e","url":"tw_stocks/6805.json"},{"revision":"2942fc627a1b35a5a6dc0a24e3b5ad45","url":"tw_stocks/6799.json"},{"revision":"31dbae31072ea16e584a07df84265fa4","url":"tw_stocks/6796.json"},{"revision":"9320fa9cd8ccc256d0b1d7a950879b90","url":"tw_stocks/6794.json"},{"revision":"19234a7a3e437333f0440a1e1419872f","url":"tw_stocks/6792.json"},{"revision":"57fe86a41446f1acc4d86db65c0ac006","url":"tw_stocks/6790.json"},{"revision":"3318f732e152b37cf03ea893f63fc038","url":"tw_stocks/6789.json"},{"revision":"32deff8d0ac0a3f060d913c6f44619f4","url":"tw_stocks/6782.json"},{"revision":"b1e9edf05ba2d5ddde05dfb22d3ccc3d","url":"tw_stocks/6781.json"},{"revision":"dc63ade1bba597ae711ab41dbfe751ac","url":"tw_stocks/6776.json"},{"revision":"117025096eb066a20369c0534735e707","url":"tw_stocks/6770.json"},{"revision":"676cd916265aed46c94f0bd2a030a245","url":"tw_stocks/6768.json"},{"revision":"27600402e6c719f669c59fd2e6633493","url":"tw_stocks/6757.json"},{"revision":"8fc15d1e2c6563406c1e39aebee778b6","url":"tw_stocks/6756.json"},{"revision":"70152e271e5b3ee9a82250656853d1d0","url":"tw_stocks/6754.json"},{"revision":"f9d54a52ba668ca386d1d845edd4cebd","url":"tw_stocks/6753.json"},{"revision":"e7b38ef736120d73aef3434e19409f80","url":"tw_stocks/6743.json"},{"revision":"ae6ccd0598c03235bd47d0bc4c80348f","url":"tw_stocks/6742.json"},{"revision":"a96d435465e92dfd0a86f51d92960e83","url":"tw_stocks/6722.json"},{"revision":"f7e93ca81b664a51806d5292ff362780","url":"tw_stocks/6719.json"},{"revision":"b7e6cad335660ddcfdae398f2efeee6d","url":"tw_stocks/6715.json"},{"revision":"7514eafc5b6a5ba3823606bc50872890","url":"tw_stocks/6706.json"},{"revision":"7ee0b86dbc1e84d149d4f31a6c4a45e3","url":"tw_stocks/6698.json"},{"revision":"29f559bb5e7f597d46fa228f04439bbd","url":"tw_stocks/6695.json"},{"revision":"fe345559d19e34722eb6368af333f4c0","url":"tw_stocks/6691.json"},{"revision":"98de93c45d85eae8f858cbdb64fa2933","url":"tw_stocks/6689.json"},{"revision":"46e4784d72c419058eff6516aed2f13b","url":"tw_stocks/6674.json"},{"revision":"83f43c4679614336c59daaad0b9af215","url":"tw_stocks/6672.json"},{"revision":"7e98a8c6529ff675e20172bbe5d44f97","url":"tw_stocks/6671.json"},{"revision":"fd0be79831cc477f554b284a4ac0d67c","url":"tw_stocks/6670.json"},{"revision":"d48791d27cd86cee6007bff0f2ebbfc8","url":"tw_stocks/6669.json"},{"revision":"7ca215f55e321e087792348eb614a901","url":"tw_stocks/6668.json"},{"revision":"eeb15fa8283285bfdff6e102b620be5a","url":"tw_stocks/6666.json"},{"revision":"815b0f1d56658389d5e7efa400bf8b5d","url":"tw_stocks/6658.json"},{"revision":"e0cecb6a690581f38a83782277bb2449","url":"tw_stocks/6657.json"},{"revision":"35f7c711caad9d4367c577d9d6b7a3e7","url":"tw_stocks/6655.json"},{"revision":"17d5bfd70a04e5d9a4e82028c6bb52da","url":"tw_stocks/6641.json"},{"revision":"aa59a6ca310aec6702e4f6cbd581162e","url":"tw_stocks/6625.json"},{"revision":"86ddd5837a6d577557aafe61b418d109","url":"tw_stocks/6614.json"},{"revision":"fe59f956c34f15322aee1f7b2cc74316","url":"tw_stocks/6606.json"},{"revision":"00e3fe4e0a0423e0a55c80b3fcdf47a1","url":"tw_stocks/6605.json"},{"revision":"6f49d6bbf5f52359f4d7939511531f2c","url":"tw_stocks/6598.json"},{"revision":"1f3e44206ab995733e3a0a20116d52e1","url":"tw_stocks/6592.json"},{"revision":"82be3d31c54e178b1bb33c7805567bb0","url":"tw_stocks/6591.json"},{"revision":"b149191b4d36bed531c3c770f785b5fd","url":"tw_stocks/6589.json"},{"revision":"a574986381ddc1f03e3c2c98d88a0d62","url":"tw_stocks/6585.json"},{"revision":"bf9869ad7f77315c6a2102e486e7ad79","url":"tw_stocks/6582.json"},{"revision":"18700f8c7a92658255ab7c706785a0f9","url":"tw_stocks/6581.json"},{"revision":"852c7b82734d2814c769e074b6067f76","url":"tw_stocks/6579.json"},{"revision":"994c7f1f31e352db10f93b8944db5bd5","url":"tw_stocks/6573.json"},{"revision":"19b3d15ff1d10b326b5c274b7177f28e","url":"tw_stocks/6558.json"},{"revision":"af88ba5e60319a0f1d38e8558c0c410e","url":"tw_stocks/6552.json"},{"revision":"54e54928ec70f5702e1c1fede481c8e4","url":"tw_stocks/6550.json"},{"revision":"091f0b71ed285f43afd7e67cad5bab01","url":"tw_stocks/6541.json"},{"revision":"7f960181fb70dc66d15e33684a6b6a25","url":"tw_stocks/6533.json"},{"revision":"a01cb6af3e074f0900e23cb1f117af58","url":"tw_stocks/6531.json"},{"revision":"6b0cec15be06c029d5f1ee78408d1a5b","url":"tw_stocks/6526.json"},{"revision":"b1dd4a708aa3e19052448e15d72027e4","url":"tw_stocks/6525.json"},{"revision":"8ec18d1db2c175913928a6cac928f350","url":"tw_stocks/6515.json"},{"revision":"70115bb29014887f8f553b13814f3f01","url":"tw_stocks/6505.json"},{"revision":"93fdf26b72a3486e53ed54ec76c210ab","url":"tw_stocks/6504.json"},{"revision":"e2e2f9fd58318d48eb709b1daf2fda74","url":"tw_stocks/6491.json"},{"revision":"afcb7514ef70d0486e9662ad88c8fff3","url":"tw_stocks/6477.json"},{"revision":"434de5db4b8306d236f8c3d2d0ce5b8b","url":"tw_stocks/6472.json"},{"revision":"626f2aef591e03feb22fb5633fd27323","url":"tw_stocks/6464.json"},{"revision":"4eb92843d2ea7934262693bf56b31e4f","url":"tw_stocks/6456.json"},{"revision":"58080ccae5f54b462d25991e4d0dfda2","url":"tw_stocks/6451.json"},{"revision":"fb779d3c40d68dd8354338985b3c994b","url":"tw_stocks/6449.json"},{"revision":"1c1a1ef0ca9ef56c7207ab7587b919df","url":"tw_stocks/6446.json"},{"revision":"f0e47e974f8f0de2aeb0195d4208c198","url":"tw_stocks/6443.json"},{"revision":"864a7b031f7b1e6cee4c5be85115acd8","url":"tw_stocks/6442.json"},{"revision":"9f9bdac70347926601b22bd74d5a006d","url":"tw_stocks/6438.json"},{"revision":"21ce51db3fff1387d2bc484ca4774da3","url":"tw_stocks/6431.json"},{"revision":"8fd6dc519ac7c3c7712d690ee569bb42","url":"tw_stocks/6426.json"},{"revision":"76e0b97beb851d035e14507e84322f4b","url":"tw_stocks/6416.json"},{"revision":"68f3e15a45a4b91dd5730d9c8baf8fdc","url":"tw_stocks/6415.json"},{"revision":"8a36c1df28c2df0a77b123245763f072","url":"tw_stocks/6414.json"},{"revision":"52d2d4868711898d1724e80ef731e0b5","url":"tw_stocks/6412.json"},{"revision":"40b4f348514172d99a88eaa430019e75","url":"tw_stocks/6409.json"},{"revision":"b27db40717a730a92e9b49ae4a8d66f8","url":"tw_stocks/6405.json"},{"revision":"53159c778163a69ed43b7ec6f2f5b1c3","url":"tw_stocks/6285.json"},{"revision":"007757af22d357ee8d0222831d8359fa","url":"tw_stocks/6283.json"},{"revision":"e99de047666d851c85a1d2a4d46c1ebe","url":"tw_stocks/6282.json"},{"revision":"15d837881f677c4a7679f78eb3e4977c","url":"tw_stocks/6281.json"},{"revision":"fa742f9343a9018b951a9b46179c4dd6","url":"tw_stocks/6278.json"},{"revision":"40edce5c74ae1066dbfa7504510cac08","url":"tw_stocks/6277.json"},{"revision":"9df586c423fa3cc3b417b18e100e6e08","url":"tw_stocks/6272.json"},{"revision":"caaf6b8ef186f786f1bf5f7600d09265","url":"tw_stocks/6271.json"},{"revision":"6acef0e438d42c84a8c6e8014e38490a","url":"tw_stocks/6269.json"},{"revision":"cb74c09eae3f9bb2efa36634630afd38","url":"tw_stocks/6257.json"},{"revision":"1b87ae486aa7260807fd278c2081a013","url":"tw_stocks/6243.json"},{"revision":"1361afe5b0d287bde9aa83ac922f44af","url":"tw_stocks/6239.json"},{"revision":"fd4604818041b37ad5255548d637862b","url":"tw_stocks/6235.json"},{"revision":"2157a95ca58dc5d8574f18b401ec775e","url":"tw_stocks/6230.json"},{"revision":"0fbd7d9fdf70b172ce4dee8779bb17e5","url":"tw_stocks/6226.json"},{"revision":"babda67cd75c9f07542653209e91475e","url":"tw_stocks/6225.json"},{"revision":"4f8c4606ff97d46c9d3663baff71f0b3","url":"tw_stocks/6224.json"},{"revision":"0811609a70affa3bf9231be8c6036da5","url":"tw_stocks/6216.json"},{"revision":"b9f74e5d3cc352c98cfc8af40311cd57","url":"tw_stocks/6215.json"},{"revision":"110d0ac26ad20d72e65d45a4e4c63b58","url":"tw_stocks/6214.json"},{"revision":"c3ffb8aa6a290a4f0e5d9f4bb805d8d7","url":"tw_stocks/6213.json"},{"revision":"8d78143d8f48dc0a302e3f0329ebb132","url":"tw_stocks/6209.json"},{"revision":"ed4dcfccad3bb57da37280ccccdd6afd","url":"tw_stocks/6206.json"},{"revision":"1991738c1a21ecd6f79af5b70a48385e","url":"tw_stocks/6205.json"},{"revision":"ae5c3a047a03be377577f076bc8c36a3","url":"tw_stocks/6202.json"},{"revision":"84230ad7a7fa4439162f6a7b321983b3","url":"tw_stocks/6201.json"},{"revision":"a4adcddb8b72d2e8758b93970b5cd87f","url":"tw_stocks/6197.json"},{"revision":"a537b35aa755afadfb65643f4bde0077","url":"tw_stocks/6196.json"},{"revision":"614f777dfe13bd39888384bbd0ad03ea","url":"tw_stocks/6192.json"},{"revision":"5f86e3f5f68e3acc671d353180afed3a","url":"tw_stocks/6191.json"},{"revision":"2d267c8899cdf5dfe1aef3faa00e8b7a","url":"tw_stocks/6189.json"},{"revision":"d6f72a51a164f05702cf860d497be77f","url":"tw_stocks/6184.json"},{"revision":"b5c73eed3a5920eb7e1c30f299da7933","url":"tw_stocks/6183.json"},{"revision":"6413539aff738edffb3abfc1b810e22d","url":"tw_stocks/6177.json"},{"revision":"864b67c0f3dfa1b9cd5a8dcf6a40eb82","url":"tw_stocks/6176.json"},{"revision":"ed39c97f7656114d441aab0f8004cdd1","url":"tw_stocks/6168.json"},{"revision":"0fc7075952055102e83a0ef245ede11c","url":"tw_stocks/6166.json"},{"revision":"9b45dfd4864b19d97c2e1a402e04b3d8","url":"tw_stocks/6165.json"},{"revision":"bf59e264d682f92de9e310110c1e5595","url":"tw_stocks/6164.json"},{"revision":"71c18e9b3c39c2ba14d7f9fd70d0ffe4","url":"tw_stocks/6155.json"},{"revision":"18c2f11f681cb6e4068e2aa9953c97bd","url":"tw_stocks/6153.json"},{"revision":"4181a69e3c1862b1d3773445353972cd","url":"tw_stocks/6152.json"},{"revision":"a124fcdb5e4a6d1478cb193a2c77a562","url":"tw_stocks/6142.json"},{"revision":"a4f9c5a9a80d0b9414ae7485ae362ecb","url":"tw_stocks/6141.json"},{"revision":"fe1a260b9db6d5a277ccaf754ecaf5a1","url":"tw_stocks/6139.json"},{"revision":"99609ea820f8e6ebfe9a4dcc9dad47e2","url":"tw_stocks/6136.json"},{"revision":"a2a1a5a94d554b84955e9481b01574bf","url":"tw_stocks/6133.json"},{"revision":"8eb581be3d300a1a313d0b3396c2f168","url":"tw_stocks/6128.json"},{"revision":"1c4078ca2e2d717d9b4d66567ba4a092","url":"tw_stocks/6120.json"},{"revision":"4f1660143f017ac63485afb93d3d465c","url":"tw_stocks/6117.json"},{"revision":"8834dc7e6d522d490aecea9f8a2def93","url":"tw_stocks/6116.json"},{"revision":"ee0929a38ab09d95ac7e159ec6d64db7","url":"tw_stocks/6115.json"},{"revision":"f54af254a7b39727996cfcc87e471c63","url":"tw_stocks/6112.json"},{"revision":"8cc7a8bc19de07aaedb0d9184b6e1bb5","url":"tw_stocks/6108.json"},{"revision":"3e29e3166b19067a88089b67cb50ff4b","url":"tw_stocks/6024.json"},{"revision":"09cda3d8880ac37efd80bee408bb8df9","url":"tw_stocks/6005.json"},{"revision":"af73a1dcc66b0e1e21ed536d87e0e8b1","url":"tw_stocks/5907.json"},{"revision":"a595bc7d37b5d6666015c3446a08c8cc","url":"tw_stocks/5906.json"},{"revision":"d26bad62c645d0c377b2429b0f1a68b7","url":"tw_stocks/5880.json"},{"revision":"1ea06dbfab0b8dbc8d339d8a32e3b763","url":"tw_stocks/5876.json"},{"revision":"3c4e310ab1cca123f4b31b3947a8dd18","url":"tw_stocks/5871.json"},{"revision":"d673e13227e42bc6e81372437cbcc258","url":"tw_stocks/5706.json"},{"revision":"7ccdd991c76b10e004b08fa24a8b8cea","url":"tw_stocks/5608.json"},{"revision":"5006cc4be3c4a54cf93471480ccda775","url":"tw_stocks/5607.json"},{"revision":"973278df10fd0cbc8750cf83c3682999","url":"tw_stocks/5546.json"},{"revision":"0124ab8a48fdf641e452542aa74f9675","url":"tw_stocks/5538.json"},{"revision":"7d288096015b934625520b960426f32b","url":"tw_stocks/5534.json"},{"revision":"82c74b68a37395d04312c54ff59ae65f","url":"tw_stocks/5533.json"},{"revision":"db02febedec4415e69b14f2fd043fca7","url":"tw_stocks/5531.json"},{"revision":"94dbf0855ba4ba1b0d4f88204c96580b","url":"tw_stocks/5525.json"},{"revision":"eb6a2c0b04bedc2484484911e79eb624","url":"tw_stocks/5522.json"},{"revision":"822e880d3e0260c9de514812663e1f47","url":"tw_stocks/5521.json"},{"revision":"1a4a88bb4c8e31a121003bc6ab24fe4e","url":"tw_stocks/5519.json"},{"revision":"355d77d59cf487c3c7ca8c640351ef88","url":"tw_stocks/5515.json"},{"revision":"61a607ca3e011ab7521dae5bf911a8d4","url":"tw_stocks/5484.json"},{"revision":"78b778ba394da0b1c1e33cf9c9e26d2a","url":"tw_stocks/5471.json"},{"revision":"11f422fc32ead671a6c0f703a315eb30","url":"tw_stocks/5469.json"},{"revision":"3b8cb4ebb80f18cf8affeb410b7cf523","url":"tw_stocks/5434.json"},{"revision":"dbac3d227280dc8678c1cebe0f1d7fd0","url":"tw_stocks/5388.json"},{"revision":"8b83559d23143798514fe4d55e534b25","url":"tw_stocks/5306.json"},{"revision":"26242393620bc73f0a94dc4b615fc592","url":"tw_stocks/5292.json"},{"revision":"7ef5721d6a81f3e500fa90b69c8f020c","url":"tw_stocks/5288.json"},{"revision":"e95f46261e5466f841d4568a05daa027","url":"tw_stocks/5285.json"},{"revision":"836818790a5b88b59f6caa954900436f","url":"tw_stocks/5284.json"},{"revision":"a1bd5ef94c1857bac2bdaf6a1436a8eb","url":"tw_stocks/5283.json"},{"revision":"5f58e8f4bcd6564075099d888e04cce3","url":"tw_stocks/5269.json"},{"revision":"f99c6ac23d17eda8864e1255f431fe12","url":"tw_stocks/5258.json"},{"revision":"154ed718da5ab73135450da8bae82fd1","url":"tw_stocks/5244.json"},{"revision":"944c660b71d8d3a65059918a043b9fc3","url":"tw_stocks/5243.json"},{"revision":"e4e154bef4c9f558348b511417617dea","url":"tw_stocks/5234.json"},{"revision":"dc31ca3560b62d2157657048fd6df575","url":"tw_stocks/5225.json"},{"revision":"9bc2e995f86300bac32887ecccba9f92","url":"tw_stocks/5222.json"},{"revision":"c46acb13a5c15ddca565eb1e184d7a97","url":"tw_stocks/5215.json"},{"revision":"6960a982180e4b98aff14b057ca6e551","url":"tw_stocks/5203.json"},{"revision":"c495603e61a38a5f7a26e113cb4f90b0","url":"tw_stocks/5007.json"},{"revision":"d875770cc95ff90316975d1314467491","url":"tw_stocks/4999.json"},{"revision":"871843db6f46189222e97dab29aad617","url":"tw_stocks/4994.json"},{"revision":"6ccd078ec56973f6ce647facefcdf539","url":"tw_stocks/4989.json"},{"revision":"c22d0e8dc4ded3e2c51909e3579fdbf9","url":"tw_stocks/4977.json"},{"revision":"4f1007877e282f6bd001b136e0fda950","url":"tw_stocks/4976.json"},{"revision":"3ce635fbdd92d96232fc771d221142a0","url":"tw_stocks/4968.json"},{"revision":"7cf2cbb6fecacc0273225ddd925b76a4","url":"tw_stocks/4967.json"},{"revision":"a73f8999663681a03be435dd241e6259","url":"tw_stocks/4961.json"},{"revision":"4cdfb0042c0f1548630ab5bf6a9b8bd0","url":"tw_stocks/4960.json"},{"revision":"aaef4e24faa05b8d3ccb4cfdb9622ffe","url":"tw_stocks/4958.json"},{"revision":"56d5a5a00d278d93c094f1861bb493d2","url":"tw_stocks/4956.json"},{"revision":"0d3e22a8555bb2022a550d330693c6b6","url":"tw_stocks/4952.json"},{"revision":"ee674b594711bb884e7c2cd8e7001df1","url":"tw_stocks/4949.json"},{"revision":"b0e3aa9c4619f1fcde0492d5d48366ed","url":"tw_stocks/4943.json"},{"revision":"c4a4a08331d6e9dcc0ecffb7121c1b6e","url":"tw_stocks/4942.json"},{"revision":"3c265cff0505590f0b13b55e5166ae22","url":"tw_stocks/4938.json"},{"revision":"7c4c8c77ffe31912e5f17c8c45174ee5","url":"tw_stocks/4935.json"},{"revision":"147c8cff84efbe12d9978c1633dc2b1b","url":"tw_stocks/4934.json"},{"revision":"ff607cdded9cd166a2c2836054c76dda","url":"tw_stocks/4930.json"},{"revision":"96ae805690e04851479f509ed7153e05","url":"tw_stocks/4927.json"},{"revision":"997c1ce8beddd6e15d151e9f0b5a8557","url":"tw_stocks/4919.json"},{"revision":"38a4bd02a2445ad94d69d1569d17c03e","url":"tw_stocks/4916.json"},{"revision":"50e50ba76084f32446d97cd18ee35571","url":"tw_stocks/4915.json"},{"revision":"e4b0f19daa612fa385cb40efdc5b6335","url":"tw_stocks/4912.json"},{"revision":"20c99c542762f02c76910f923a1106c4","url":"tw_stocks/4906.json"},{"revision":"f3a1c43b61ebc9be64a3a118cb24cf5c","url":"tw_stocks/4904.json"},{"revision":"4cece73435c172ad193f956887dff227","url":"tw_stocks/4807.json"},{"revision":"a8f6f1bfe2a5b116b49b41e46118b6c8","url":"tw_stocks/4771.json"},{"revision":"b065cc10c3b63cf27230e2f9cce0c285","url":"tw_stocks/4770.json"},{"revision":"38f5e9475d6f1840436565e063d7da1f","url":"tw_stocks/4766.json"},{"revision":"f73831a5862cd074632baaafab523f9e","url":"tw_stocks/4764.json"},{"revision":"162fa69c71e92de5f941ae7e6c3b0e25","url":"tw_stocks/4763.json"},{"revision":"a91e99a4ce8cafab849903346333e0f8","url":"tw_stocks/4755.json"},{"revision":"7a8d4e98770872141de769dec82c3a40","url":"tw_stocks/4746.json"},{"revision":"53eb7ab780f6cf8b81809d1b0b4dd1f2","url":"tw_stocks/4739.json"},{"revision":"702633362f4654b0b877f2feb913d19f","url":"tw_stocks/4737.json"},{"revision":"78def287ac959a17b1b91e1b0c994d99","url":"tw_stocks/4736.json"},{"revision":"f4a774e691be143deccef1078a098f92","url":"tw_stocks/4722.json"},{"revision":"7ad5763f08b0a0f4904cb958ddf8a96d","url":"tw_stocks/4720.json"},{"revision":"2d2518820f520c13cd9a5e9006501ab2","url":"tw_stocks/4588.json"},{"revision":"f2e7c20dd04ff573082d0348039e925f","url":"tw_stocks/4585.json"},{"revision":"2f963129cb468dbd98c0b2eb2c15a480","url":"tw_stocks/4583.json"},{"revision":"fe2ccc621e59b0413f83d0d1df5f69d5","url":"tw_stocks/4581.json"},{"revision":"d1b3d6e16111dd16023bd050146198db","url":"tw_stocks/4576.json"},{"revision":"969b1942a92a846dee09266319946ca1","url":"tw_stocks/4572.json"},{"revision":"f0c0b02616e730eb383166ec0a51323f","url":"tw_stocks/4571.json"},{"revision":"0b45c3566241d6edaa7122c773c54d11","url":"tw_stocks/4569.json"},{"revision":"47969aeea91056d710b733b8624ae481","url":"tw_stocks/4566.json"},{"revision":"8dd371c9c35dff575274e1ae6451c58d","url":"tw_stocks/4564.json"},{"revision":"65a73592f47e4bb62fc1740b3d89db34","url":"tw_stocks/4562.json"},{"revision":"f4ff000f51ef68d08e43a6ca3a325faf","url":"tw_stocks/4560.json"},{"revision":"2f56d6cd3353cecc98bdd524ffb5f851","url":"tw_stocks/4557.json"},{"revision":"b4db2de0447b19940dde58c5b7bc2622","url":"tw_stocks/4555.json"},{"revision":"24264f69c22a277059633cfb1b6d2a12","url":"tw_stocks/4552.json"},{"revision":"1ddfb5349dea8a135357166df7324b68","url":"tw_stocks/4551.json"},{"revision":"f5e130d08614ab6b1959029c6788cc8b","url":"tw_stocks/4545.json"},{"revision":"8a90d45380b46141572b8c4ad40b4b63","url":"tw_stocks/4540.json"},{"revision":"201f22df78604b2e85cca2f4ccf2beb5","url":"tw_stocks/4536.json"},{"revision":"3d766642446e5deb17eb055deb8ede59","url":"tw_stocks/4532.json"},{"revision":"64c7b92600d3afd64708bc6ec040ef25","url":"tw_stocks/4526.json"},{"revision":"c493c20ad182cb65cc7b82f05f5d2382","url":"tw_stocks/4441.json"},{"revision":"b82873f788b0b2584b12440d5973193a","url":"tw_stocks/4440.json"},{"revision":"4c23a4d78bb7810cea4f31787f9ca57c","url":"tw_stocks/4439.json"},{"revision":"a90052339cfdad354409afd846022328","url":"tw_stocks/4438.json"},{"revision":"ee621a4e00d104674d210223730fcc18","url":"tw_stocks/4426.json"},{"revision":"b272201f23c5472378421047e5d5c2e9","url":"tw_stocks/4414.json"},{"revision":"994885281f3e2b987ecf407d5ed243c8","url":"tw_stocks/4306.json"},{"revision":"08acec2a7406cca7f6c96500c36ae646","url":"tw_stocks/4190.json"},{"revision":"9fd0b6eb3b196d1e73cf604107cfcd09","url":"tw_stocks/4169.json"},{"revision":"c746540691652c011e6c1ce744ed46d2","url":"tw_stocks/4164.json"},{"revision":"1cfb15e0eb1ae72cb3ca3c355e5f8a40","url":"tw_stocks/4155.json"},{"revision":"20935e4b53a57ecbb0270645f3133918","url":"tw_stocks/4148.json"},{"revision":"0a7d0613486a4953b88a86c114c1cd1e","url":"tw_stocks/4142.json"},{"revision":"502b6a2e7e7529be7213901fc4af87c2","url":"tw_stocks/4137.json"},{"revision":"8de8f5c0071f3acb5f8ef522fd1020b2","url":"tw_stocks/4133.json"},{"revision":"33caa3975d4a71243cc9357f5405f2ae","url":"tw_stocks/4119.json"},{"revision":"e0712c4b5c3ba3d983963513baf38d1a","url":"tw_stocks/4108.json"},{"revision":"168ea828e0ae2c9853ff54ea30fcba88","url":"tw_stocks/4106.json"},{"revision":"3eeefd89a60f19682e5123f7b5001002","url":"tw_stocks/4104.json"},{"revision":"076990118b8ffdf05ca28dc22f75db7a","url":"tw_stocks/3717.json"},{"revision":"494178d4e68b11759639aa14ca756cec","url":"tw_stocks/3716.json"},{"revision":"535c0bcf9cbeae8c7169faa3729e6948","url":"tw_stocks/3715.json"},{"revision":"260c6e5d2ea97e834f1e7024d390d025","url":"tw_stocks/3714.json"},{"revision":"db99bef1a0c85c9071b1a815d4588b61","url":"tw_stocks/3712.json"},{"revision":"18bac6b55b05f7745dfe2cfde420ba2d","url":"tw_stocks/3711.json"},{"revision":"d4d42b49fc84819d2576f374fe44dfc1","url":"tw_stocks/3708.json"},{"revision":"6becf4e118e39ddc4ada6fe42438abd6","url":"tw_stocks/3706.json"},{"revision":"ca0bd2335fb531ad4f217fedf0a11ede","url":"tw_stocks/3705.json"},{"revision":"7fcde6e78e41681b20dbbd423d730bdd","url":"tw_stocks/3704.json"},{"revision":"df1089307ee702b67637a725e68816ba","url":"tw_stocks/3703.json"},{"revision":"61e513ddd5842082b3c7e24293c65d7b","url":"tw_stocks/3702.json"},{"revision":"007c23be8a170381a36430d44a129cfa","url":"tw_stocks/3701.json"},{"revision":"e27207894a9a0e31ffb97b9d6d21b971","url":"tw_stocks/3694.json"},{"revision":"c7db65312dfd47cf83237374c2a0cf70","url":"tw_stocks/3686.json"},{"revision":"d786d2ed83c19cc6478906527d1890b2","url":"tw_stocks/3679.json"},{"revision":"edc3b18f22f06e915d318226635ce7df","url":"tw_stocks/3673.json"},{"revision":"b9c49ac25f0de2a54934ed405f21bb52","url":"tw_stocks/3669.json"},{"revision":"4077ff5e41ece73e4250c0dd45d8171d","url":"tw_stocks/3665.json"},{"revision":"a0ad18a51cbfbc8287d0084cc776e4b1","url":"tw_stocks/3661.json"},{"revision":"c9f44c4914219e17a365845d1c1689b0","url":"tw_stocks/3653.json"},{"revision":"c6318c5e9aa3cdba904e3e4a4dff2f88","url":"tw_stocks/3652.json"},{"revision":"0ba5a4702bed6f581e762a4bad4dbb36","url":"tw_stocks/3645.json"},{"revision":"6917c50586e1d08a1c6815a09cbc0ce2","url":"tw_stocks/3622.json"},{"revision":"c2ffa45ec650b2c7798070554b134e33","url":"tw_stocks/3617.json"},{"revision":"a47a7df918c63584919438279f927fca","url":"tw_stocks/3607.json"},{"revision":"8bf5add79bb3f7b4a3f5af531a27f6b8","url":"tw_stocks/3605.json"},{"revision":"cdc0f0e627dcdd3bc18b9659e9d626d7","url":"tw_stocks/3596.json"},{"revision":"4cdede7932af08686766a67f6ba9cf63","url":"tw_stocks/3593.json"},{"revision":"83e1594bb8280dd9c50f25a194abdabd","url":"tw_stocks/3592.json"},{"revision":"eb2d423b00a73192d08f2770e2dc73d0","url":"tw_stocks/3591.json"},{"revision":"3d767fc7a8e233a1dba63abe41a566b6","url":"tw_stocks/3588.json"},{"revision":"5bb5162e3ef9eaf7732005c7d89ee61d","url":"tw_stocks/3583.json"},{"revision":"20035be5ec64102e5accd56bc2bf3691","url":"tw_stocks/3576.json"},{"revision":"7947a94251197e4604dd37c516c4d805","url":"tw_stocks/3563.json"},{"revision":"8246e9509b4a9d6605cdca85cdbb2225","url":"tw_stocks/3557.json"},{"revision":"0345e581c067d69f896bf3dda0099bcf","url":"tw_stocks/3550.json"},{"revision":"6912138ca783b3b9a0145d741225b3ae","url":"tw_stocks/3545.json"},{"revision":"f5adb52afb500c828de5ea465c924813","url":"tw_stocks/3543.json"},{"revision":"75cb39afdda02d2b3c994723b9256743","url":"tw_stocks/3535.json"},{"revision":"e520702d3046ef6f351ddd2308589879","url":"tw_stocks/3533.json"},{"revision":"c31d0525dc2a94fea2e0972fdeac5c67","url":"tw_stocks/3532.json"},{"revision":"5ede5ff54a42a6be821267e0b8f2e44b","url":"tw_stocks/3530.json"},{"revision":"a4ade8dcd92f9bcd4d2c2fd4838f034e","url":"tw_stocks/3528.json"},{"revision":"4f9500a4238ed73ddaa49483b65f65b3","url":"tw_stocks/3518.json"},{"revision":"b69b4bbbbd3f953431f025273ed64a95","url":"tw_stocks/3515.json"},{"revision":"c7f9265f0c49c2c79f93f3234f099dd2","url":"tw_stocks/3504.json"},{"revision":"958b8d3403ec224b5f7e1ec2948c5214","url":"tw_stocks/3501.json"},{"revision":"799a4ab1420fa11b42b45c7c4ad66abc","url":"tw_stocks/3494.json"},{"revision":"7b7c19174ab06ca28823b06efd4549a4","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"2804b571a9fcc69113b40d3f66886aa7","url":"tw_stocks/3450.json"},{"revision":"f2cb882ed6475e5a1594437429ce78fa","url":"tw_stocks/3447.json"},{"revision":"80d16bf001e9c5591065ee3f7726f500","url":"tw_stocks/3443.json"},{"revision":"c2c53bfe988983896c62126f23ebb2ee","url":"tw_stocks/3437.json"},{"revision":"b8f48fbca7279b7085589ad0532e9d4b","url":"tw_stocks/3432.json"},{"revision":"187d4b8b820bb25e39cd96ca17fcc20c","url":"tw_stocks/3419.json"},{"revision":"9e93f8553842048576cc96415b24705c","url":"tw_stocks/3416.json"},{"revision":"e6cd30f84a36f0b6ef16fdc531d25d5e","url":"tw_stocks/3413.json"},{"revision":"0601284ea48874d3eab920d91c09e025","url":"tw_stocks/3406.json"},{"revision":"728bedcb8100c7560d746aa6d13dcc00","url":"tw_stocks/3380.json"},{"revision":"2ba154f27f8f238acecc2e755e855bbc","url":"tw_stocks/3376.json"},{"revision":"ced34017cd5a0fd74addfcd3fbac4623","url":"tw_stocks/3356.json"},{"revision":"cc3cb67b1b87e3e22552ffb28e70b1eb","url":"tw_stocks/3346.json"},{"revision":"015b1d7879b4f217e13cdfbfc43f37e7","url":"tw_stocks/3338.json"},{"revision":"9add18445ba641bf1b42d7ccdfac51f2","url":"tw_stocks/3321.json"},{"revision":"dbdacae305c5f0a429afd44b741ce4af","url":"tw_stocks/3312.json"},{"revision":"326e49e7395aba789d6dff1529944e14","url":"tw_stocks/3311.json"},{"revision":"dd2d86b0f5e964cd6ecec8e6b32177d8","url":"tw_stocks/3308.json"},{"revision":"c6710c5720dfb4ef9037b9adab865d94","url":"tw_stocks/3305.json"},{"revision":"05ed21c9c9c9af7f10a7a4304011a3b5","url":"tw_stocks/3296.json"},{"revision":"ed41015bdbb03c5e53656212e094a4a6","url":"tw_stocks/3266.json"},{"revision":"29271545984d0e9915cef39d250eff92","url":"tw_stocks/3257.json"},{"revision":"6755a656a5634919378b6bae9db7bfef","url":"tw_stocks/3231.json"},{"revision":"eb119468e369584dff8b1eba0c33a767","url":"tw_stocks/3229.json"},{"revision":"debfde38a4ce551a190ef36e491bb6a8","url":"tw_stocks/3209.json"},{"revision":"d00de97a0e46c2a06d8d3a212fcac989","url":"tw_stocks/3189.json"},{"revision":"51e181adf0b06544e1d1ac9317d6c9bc","url":"tw_stocks/3168.json"},{"revision":"661fb7b0d9b36e3cd7dfbe7fa7dd7c37","url":"tw_stocks/3167.json"},{"revision":"d91a1189a736d289bfbdc717a21b105c","url":"tw_stocks/3164.json"},{"revision":"49b31352fde23e851b3b711787c50979","url":"tw_stocks/3149.json"},{"revision":"45961cf623df0546d4c81fe16828d008","url":"tw_stocks/3138.json"},{"revision":"f65c02840bd06dea4189e487d32b9673","url":"tw_stocks/3135.json"},{"revision":"3ef96d24d7862763955e22f88518e6f8","url":"tw_stocks/3130.json"},{"revision":"3c93b7e2c5d9119b303df4b118caf8fb","url":"tw_stocks/3094.json"},{"revision":"ca9087c404249a7741927535d8df0ae8","url":"tw_stocks/3092.json"},{"revision":"789483814f30567efb7e962ddccdfe7d","url":"tw_stocks/3090.json"},{"revision":"85b52cc9b10133cab97ecb709fafb847","url":"tw_stocks/3062.json"},{"revision":"917c6bde9aa4f1e13f6ba18dc6c1a1f3","url":"tw_stocks/3060.json"},{"revision":"5f638d79817656da17d8bea42508e5fc","url":"tw_stocks/3059.json"},{"revision":"3ca41a1ccd242db4a4ab35e78bb3ac37","url":"tw_stocks/3058.json"},{"revision":"040e29ef91f4a95ff59afd64cf92023a","url":"tw_stocks/3057.json"},{"revision":"d2a28f1eea557861c4a286a567992365","url":"tw_stocks/3056.json"},{"revision":"55b700aed4a0fdb7242ea73f95d703d5","url":"tw_stocks/3055.json"},{"revision":"b49a1c784e43be22591ceababdc70f0f","url":"tw_stocks/3054.json"},{"revision":"90b0589888a7042a6e9fb5b3566faaee","url":"tw_stocks/3052.json"},{"revision":"b22fd58c23de180eaf65df05c4f00ab4","url":"tw_stocks/3051.json"},{"revision":"e45795a6db492130c21b2777d04056c9","url":"tw_stocks/3050.json"},{"revision":"822afae82652a14ba0b0386a44fe3f39","url":"tw_stocks/3049.json"},{"revision":"deb7dd8a99c96a524f11969eafdc50d5","url":"tw_stocks/3048.json"},{"revision":"3ce31eb5ef22af68cd3999ec00758bbf","url":"tw_stocks/3047.json"},{"revision":"eb46712acf42b7e1646ca3cff523352b","url":"tw_stocks/3046.json"},{"revision":"143c4037ee0ff672f954bd8a6dd300c1","url":"tw_stocks/3045.json"},{"revision":"765c948c131897cc8a294beff77cbe3d","url":"tw_stocks/3044.json"},{"revision":"7b69ba514578cf38193d402428c2b554","url":"tw_stocks/3043.json"},{"revision":"04b7d5cfc8134cca6d593d12aca9cccc","url":"tw_stocks/3042.json"},{"revision":"30e907af5a443aeaf35fb2a2e75750ed","url":"tw_stocks/3041.json"},{"revision":"eaebeb24f9032d77bd6fb1eb8e691767","url":"tw_stocks/3040.json"},{"revision":"0111a8ac6fd19ba0b587ffd7523918b2","url":"tw_stocks/3038.json"},{"revision":"9fbc800324875299e9cd7c8672474e2b","url":"tw_stocks/3037.json"},{"revision":"1a03372eb428e3596fa9a0314737262c","url":"tw_stocks/3036.json"},{"revision":"01528d1519f57c5259565e02c5371107","url":"tw_stocks/3035.json"},{"revision":"25867fecaf05db948f4724ad828b40d9","url":"tw_stocks/3034.json"},{"revision":"3734b3331033cb58b60ab65d18becde7","url":"tw_stocks/3033.json"},{"revision":"d7004896a0b7ac4513bb8da2864a37ce","url":"tw_stocks/3032.json"},{"revision":"1b99610d5778cefbc1055d4f50f5fd28","url":"tw_stocks/3031.json"},{"revision":"93ef696bef623c1bff8d15c7666b207a","url":"tw_stocks/3030.json"},{"revision":"0c65457028e75a50532fbc0a000a648c","url":"tw_stocks/3029.json"},{"revision":"95a6c64d56fa625ee34a429bc96cf0bd","url":"tw_stocks/3028.json"},{"revision":"b7e97dfa7441b7c315304296145b050a","url":"tw_stocks/3027.json"},{"revision":"1a0fd2325bb269a1c8accbb0cf822180","url":"tw_stocks/3026.json"},{"revision":"5c48dbebfa6243b8a92a9a0226644367","url":"tw_stocks/3025.json"},{"revision":"05127d840397b3061884e3b22a579152","url":"tw_stocks/3024.json"},{"revision":"4c85acca945a045ea59d3e9688e8b546","url":"tw_stocks/3023.json"},{"revision":"56009adc0ffa3fe25e2eda398488f1e8","url":"tw_stocks/3022.json"},{"revision":"59523155fb3214d738b8ca4cb4d050e2","url":"tw_stocks/3021.json"},{"revision":"279961afd1b3ca0d39a66bd3285b5f8f","url":"tw_stocks/3019.json"},{"revision":"697f169757d38c6cac9b77967a5b1007","url":"tw_stocks/3018.json"},{"revision":"c008a3194e3da60d8be0eea3c6c9854b","url":"tw_stocks/3017.json"},{"revision":"c13113935aa85f73a0d7fc285d16a38d","url":"tw_stocks/3016.json"},{"revision":"0bfd4d0e808bc0648933c5c786100fed","url":"tw_stocks/3015.json"},{"revision":"3454d2ae01eadac8a414c2b7f8749de3","url":"tw_stocks/3014.json"},{"revision":"11c56843b00dc0e053e3fb8ff74717b5","url":"tw_stocks/3013.json"},{"revision":"b500ac5474114cb4f9125e6fa8b0e52c","url":"tw_stocks/3011.json"},{"revision":"7d2270608794bfd766528b48cfef369e","url":"tw_stocks/3010.json"},{"revision":"15a0872f49f8350cbd9dcf24a1c8e21e","url":"tw_stocks/3008.json"},{"revision":"677ff569e7e969947bea95091f31fb5b","url":"tw_stocks/3006.json"},{"revision":"af403fef0ea04e87c26872ff979e3f4f","url":"tw_stocks/3005.json"},{"revision":"7a7aac55def400b401d206a96be54c34","url":"tw_stocks/3004.json"},{"revision":"2b4545572d8dd39ea7983d088808152f","url":"tw_stocks/3003.json"},{"revision":"39a0612abb3233561f29dadb6fb00ed2","url":"tw_stocks/3002.json"},{"revision":"610c9d2cadb9f3ff3110d1bc6b7113fd","url":"tw_stocks/2945.json"},{"revision":"8f8aa79eb3e580d086fb7516fce83b43","url":"tw_stocks/2939.json"},{"revision":"c7747e319a855ccba10a0ad4b133f0f4","url":"tw_stocks/2929.json"},{"revision":"bd10689e762cc377d9e30bb45d9acbff","url":"tw_stocks/2923.json"},{"revision":"629d72f05f84335bf9c7f47a31501cbb","url":"tw_stocks/2915.json"},{"revision":"65f8499ec07c991fd51a658e7b9aec51","url":"tw_stocks/2913.json"},{"revision":"2ae5859b64b365046d97ca0bf32cffc6","url":"tw_stocks/2912.json"},{"revision":"17edaa9503db6c96b13f7ba9bbce3565","url":"tw_stocks/2911.json"},{"revision":"7ae4ac1ed3f68438ab6565221b63329c","url":"tw_stocks/2910.json"},{"revision":"f606d831c4b19d81153983b66d48399e","url":"tw_stocks/2908.json"},{"revision":"528e6b884d1d0443bc10aa4fba3e168a","url":"tw_stocks/2906.json"},{"revision":"13ea6061436e01d7887fe3fdf341a6fa","url":"tw_stocks/2905.json"},{"revision":"78be1f96a7bf4a9d2ac4722ae47894fe","url":"tw_stocks/2904.json"},{"revision":"9d166fea63934e1ba0b4f6939f424bac","url":"tw_stocks/2903.json"},{"revision":"096a80468aa4f2d330efb2b15e9a0a8d","url":"tw_stocks/2901.json"},{"revision":"aa88ea134dccd982546eb097b10dad0a","url":"tw_stocks/2897.json"},{"revision":"e955d3d3f0cb15807a7ab7e7e301b161","url":"tw_stocks/2892.json"},{"revision":"bff04a18bb3341423c2e0c5f95fdb352","url":"tw_stocks/2891.json"},{"revision":"f3779a6a22a79f62e1004545a4cc43fc","url":"tw_stocks/2890.json"},{"revision":"a352a966e5ed622dd072550475def3a3","url":"tw_stocks/2889.json"},{"revision":"701151853bd097361445304db7cbe5c8","url":"tw_stocks/2887.json"},{"revision":"a4a9923c38eb5dcc671d3381b9b2835c","url":"tw_stocks/2886.json"},{"revision":"d5e6d33b0af14099157027fbdaaa503b","url":"tw_stocks/2885.json"},{"revision":"65a9d8d23051be276d0010be5477b440","url":"tw_stocks/2884.json"},{"revision":"341a52a28ae905ed19b3260b94e810cd","url":"tw_stocks/2883.json"},{"revision":"61c0f28ff50ec6a5a4d53dddc6db6d8d","url":"tw_stocks/2882.json"},{"revision":"7da815da4f3f98bc1ec89915c91d0365","url":"tw_stocks/2881.json"},{"revision":"f9a0cdeff7c747b8dc8bab9e4913f767","url":"tw_stocks/2880.json"},{"revision":"3759b56f75001991c88c501a4ea7f601","url":"tw_stocks/2867.json"},{"revision":"4a265ea0a3823325254ac167a4344868","url":"tw_stocks/2855.json"},{"revision":"ab68d4eb821218720fe0c1b260c1be23","url":"tw_stocks/2852.json"},{"revision":"14eb7e11dafcd48b24f1e3c5dd7fab7d","url":"tw_stocks/2851.json"},{"revision":"7ce5cb97d19a24d0e97216103c7b75bf","url":"tw_stocks/2850.json"},{"revision":"8b99e240670bf3d10a7e91ab104edcd2","url":"tw_stocks/2849.json"},{"revision":"0d15849410f9702b9b61f6905d9bf806","url":"tw_stocks/2845.json"},{"revision":"6038b4787c0a7ee821294ae0fb55eab6","url":"tw_stocks/2838.json"},{"revision":"71f8498af9b352eb578520c55ffb1669","url":"tw_stocks/2836.json"},{"revision":"090c7b0e0d482326548a291f871cdc1f","url":"tw_stocks/2834.json"},{"revision":"9d57b943545a36ae19f588a54d788b42","url":"tw_stocks/2832.json"},{"revision":"103674ff89e8989b727c2fb6fb5b9a5d","url":"tw_stocks/2820.json"},{"revision":"3bb59d5a9d31cbd2af398e50acbc1a6a","url":"tw_stocks/2816.json"},{"revision":"02fa1c3fcca0d7690b10a00d4699c019","url":"tw_stocks/2812.json"},{"revision":"1a39bafe95d0b8f6e39d6a5410c8a98b","url":"tw_stocks/2801.json"},{"revision":"b6d63a9e395404e1750f82993c253ce4","url":"tw_stocks/2762.json"},{"revision":"32107fdfa6c4398b0686f5576712dfb1","url":"tw_stocks/2753.json"},{"revision":"df32d090b7b0d6c520160237923f562a","url":"tw_stocks/2748.json"},{"revision":"bdccd71f5b674c71d8435b379ddf2ebd","url":"tw_stocks/2739.json"},{"revision":"5b067597db32dc7808be3ddc51b431e2","url":"tw_stocks/2731.json"},{"revision":"3b3861a80da53a954875d61631807227","url":"tw_stocks/2727.json"},{"revision":"8b3c7d33d0449cf38eaaf28ca08ee53c","url":"tw_stocks/2723.json"},{"revision":"cb5da24634087823374feb559f0de9f5","url":"tw_stocks/2722.json"},{"revision":"3f91ac705d0e649eac010c00bcc8d772","url":"tw_stocks/2712.json"},{"revision":"06d0a3e686dd83fb2c7d4955e387c893","url":"tw_stocks/2707.json"},{"revision":"c8c39e427cea7bf149eb1ffa2260cfd0","url":"tw_stocks/2706.json"},{"revision":"216c96c975c21d9ac6107684e17cf7a5","url":"tw_stocks/2705.json"},{"revision":"675e561f03af49811ada937c5bc48ca0","url":"tw_stocks/2704.json"},{"revision":"728918ba84882476d98e7bfafb44b1cc","url":"tw_stocks/2702.json"},{"revision":"3c1dac0c75305b1d1619af8c5b48c67f","url":"tw_stocks/2701.json"},{"revision":"c62604226e288ddab491f5a119fde3cf","url":"tw_stocks/2646.json"},{"revision":"c5a43f1fcdc835f0f5265e1ba4a2ffb4","url":"tw_stocks/2645.json"},{"revision":"2dca252588ae15daeefed0122376e239","url":"tw_stocks/2642.json"},{"revision":"4f58b729679c614a3e950c30c4fb6a25","url":"tw_stocks/2637.json"},{"revision":"b322c2d7095ca02645abd3e1ea6be6af","url":"tw_stocks/2636.json"},{"revision":"3cd8421a4cb1d6d3334b6bc1e6f62887","url":"tw_stocks/2634.json"},{"revision":"3e724eb9104e9613a1d30f83bfcbc905","url":"tw_stocks/2633.json"},{"revision":"51fa0105620195bdef1e1993eb1ba725","url":"tw_stocks/2630.json"},{"revision":"403ac7be751067693865cb5b0309261c","url":"tw_stocks/2618.json"},{"revision":"241a0830ad29d4e873100a660c07cb1a","url":"tw_stocks/2617.json"},{"revision":"ba34afd92ab6a1d2b42d87bbbba9fffb","url":"tw_stocks/2616.json"},{"revision":"9ca992fc41b47cfb80b12f710fb41395","url":"tw_stocks/2615.json"},{"revision":"29178135e462c26624e03f02962e1ae7","url":"tw_stocks/2614.json"},{"revision":"4668aae0befcc8dd004ac04fbec4ca23","url":"tw_stocks/2613.json"},{"revision":"7cc85ce1fc292adcf3389ea3f0bc9884","url":"tw_stocks/2612.json"},{"revision":"4f0da683932dfc5c62f7ebd5ce316f08","url":"tw_stocks/2611.json"},{"revision":"7362173697883348fd9954dd60fddf18","url":"tw_stocks/2610.json"},{"revision":"1b3fdac204fce1be5f00f6f3c8a1c71e","url":"tw_stocks/2609.json"},{"revision":"d073227e13ed0b8ad4c1269f63afa935","url":"tw_stocks/2608.json"},{"revision":"1c56f7e3a8cdae23ba3578db1e41db04","url":"tw_stocks/2607.json"},{"revision":"df6ae3aa8e6488332d1677c03b0fe481","url":"tw_stocks/2606.json"},{"revision":"c1be2d301ae9a68781fa2bdc7a54682a","url":"tw_stocks/2605.json"},{"revision":"c69ebd926cd91035eae0e8a48d801e7c","url":"tw_stocks/2603.json"},{"revision":"8de908594c7a0e127fe5b5a882b27f36","url":"tw_stocks/2601.json"},{"revision":"0a0b25e5b2c8588e0df56cca7a11f047","url":"tw_stocks/2597.json"},{"revision":"2060b123be3b807e776d372f168fcfbb","url":"tw_stocks/2548.json"},{"revision":"e5f0c6d9c751ea3d766ca7232a2cc296","url":"tw_stocks/2547.json"},{"revision":"32a66a4dd6ebe1bd5ef2e15a05abcf48","url":"tw_stocks/2546.json"},{"revision":"0c8469ddc23779c794f8345d40b6cc6b","url":"tw_stocks/2545.json"},{"revision":"18138c728eb9b538dc3d376859431026","url":"tw_stocks/2543.json"},{"revision":"25d79138280e23f402ee5cc63c70c50a","url":"tw_stocks/2542.json"},{"revision":"afe28e6fec19b6acd3bff68b6114d050","url":"tw_stocks/2540.json"},{"revision":"c5cd01fe8e59bde4753f6410241f604d","url":"tw_stocks/2539.json"},{"revision":"c05cd5b69320bd448273f148230228f4","url":"tw_stocks/2538.json"},{"revision":"c76d4678d52f8055b4f82f9b22349da8","url":"tw_stocks/2537.json"},{"revision":"3c58b35f662a40b86f6e67690f41e267","url":"tw_stocks/2536.json"},{"revision":"dcf6e120836eedcefbd8a013fcfce331","url":"tw_stocks/2535.json"},{"revision":"c087a9820aa9a879ceff2508ee79be27","url":"tw_stocks/2534.json"},{"revision":"9310437b08ab4afe13174d76afee44b5","url":"tw_stocks/2530.json"},{"revision":"9b586a7c5fc11d331edaeb55242fc559","url":"tw_stocks/2528.json"},{"revision":"fad00f0b7a80c54f86216f44d3b2bef8","url":"tw_stocks/2527.json"},{"revision":"6fb86d1084da8faee6e95b01e0fa37c9","url":"tw_stocks/2524.json"},{"revision":"2a903d5a039d5683caa23c46e0f67016","url":"tw_stocks/2520.json"},{"revision":"8e17b32ca213ca8244233bcb01fe8efb","url":"tw_stocks/2516.json"},{"revision":"1ae6d471a51e441adf6fe6490ed0c068","url":"tw_stocks/2515.json"},{"revision":"4bfeb871c3c6710073d8cbd3104381a7","url":"tw_stocks/2514.json"},{"revision":"179226d8afeb688add12e4a7fd8ab86e","url":"tw_stocks/2511.json"},{"revision":"b981872ca6def018ac5ec49bb7f4802d","url":"tw_stocks/2509.json"},{"revision":"5c6cdff44eba464672d61c25ed7cd334","url":"tw_stocks/2506.json"},{"revision":"40d19622b176587d7792c597c3697bdb","url":"tw_stocks/2505.json"},{"revision":"4b1ec6bc0c6133e10861183287874000","url":"tw_stocks/2504.json"},{"revision":"a3053d1de42be5621b1c2ebac326d0ed","url":"tw_stocks/2501.json"},{"revision":"8354b37389206a3db24006137ba41cf9","url":"tw_stocks/2498.json"},{"revision":"8a0aa820dcbae4739b52f8ce4445abf0","url":"tw_stocks/2497.json"},{"revision":"0bfc21aaddf8ce41bc94a072f798bd50","url":"tw_stocks/2496.json"},{"revision":"117472310e017e2642dbc1340266324d","url":"tw_stocks/2495.json"},{"revision":"3db8424929ef94dbb1e2c945efb6551d","url":"tw_stocks/2493.json"},{"revision":"9c938d8ddc5252e3793f3518177e2777","url":"tw_stocks/2492.json"},{"revision":"22e243ff1e1af8e04c6c3a37a477ebdf","url":"tw_stocks/2491.json"},{"revision":"407b5eda2c56f17033d4b898824c3a27","url":"tw_stocks/2489.json"},{"revision":"f5410ed05f25e26026b5dfd62fe961fc","url":"tw_stocks/2488.json"},{"revision":"24c30b4c87d8ae848397171afeb55624","url":"tw_stocks/2486.json"},{"revision":"0e90404ee7ed1c5718e02d3b31881052","url":"tw_stocks/2485.json"},{"revision":"54af4de6b4cc3e54e0047682bc6e22f4","url":"tw_stocks/2484.json"},{"revision":"71d153a302d26d01c5ead813988b9a5b","url":"tw_stocks/2483.json"},{"revision":"165256b8f5dbab6e8f298c12c871312e","url":"tw_stocks/2482.json"},{"revision":"0317126e06b500163f48282b47ecfa86","url":"tw_stocks/2481.json"},{"revision":"a37ae14f17a5d7f781c0987439594d1b","url":"tw_stocks/2480.json"},{"revision":"15fd885293fc1fd7a0ec11815f2d29ba","url":"tw_stocks/2478.json"},{"revision":"e400b7172b6fe8930721b3c3cadaab2c","url":"tw_stocks/2477.json"},{"revision":"e7d519877049c09063e9d8d3a2f79c34","url":"tw_stocks/2476.json"},{"revision":"161a03dcfe375421594022313b67f057","url":"tw_stocks/2474.json"},{"revision":"106a53cc6d9ae32f36ffad740a795708","url":"tw_stocks/2472.json"},{"revision":"5406393b0072cbba791d68a617c63ae6","url":"tw_stocks/2471.json"},{"revision":"0f5815ef76c6c22e45bebb226f25eb99","url":"tw_stocks/2468.json"},{"revision":"5f101a91c317739f04b67d7d8a291611","url":"tw_stocks/2467.json"},{"revision":"5a21664c384bae2ab7733b858743d119","url":"tw_stocks/2466.json"},{"revision":"375cce019891b2a046750dd4ba900fa8","url":"tw_stocks/2465.json"},{"revision":"4a957fdac2b6afcb94ca607475ef91b4","url":"tw_stocks/2464.json"},{"revision":"fc983829cb7a89283ecefbd35dc4f2f7","url":"tw_stocks/2462.json"},{"revision":"350204d30ae3090a9b662462da58625e","url":"tw_stocks/2461.json"},{"revision":"5637499fcc2812bf410bd8fce430f630","url":"tw_stocks/2460.json"},{"revision":"7da2ae0440465a3474c465c8bdc2dadc","url":"tw_stocks/2459.json"},{"revision":"dc4b521ac0910c8e51f9055c7cfcb3a5","url":"tw_stocks/2458.json"},{"revision":"c8920fce5f95293989fac565ff25c263","url":"tw_stocks/2457.json"},{"revision":"50d288f4735f8d9c098fba81ed614b36","url":"tw_stocks/2455.json"},{"revision":"d7b843f4be46974c3d2a4cb2de8a0086","url":"tw_stocks/2454.json"},{"revision":"df30cb1812ea723372f02e00e5f2a59f","url":"tw_stocks/2453.json"},{"revision":"cbeea32b72ae04b4fe0c3296454013c5","url":"tw_stocks/2451.json"},{"revision":"bc916f764683dc25721057b60e508254","url":"tw_stocks/2450.json"},{"revision":"dca1a1df5e01d430f00bdf2b3e67abc1","url":"tw_stocks/2449.json"},{"revision":"ee5ecc88e2436cda3dc1f7bf92811aaf","url":"tw_stocks/2444.json"},{"revision":"739167542c0b141265f5dcb4e4551948","url":"tw_stocks/2442.json"},{"revision":"43ce092b62707a70603cca3a9f09df18","url":"tw_stocks/2441.json"},{"revision":"1fff09a6e599706c513cf1955af06f9e","url":"tw_stocks/2440.json"},{"revision":"410f9145c0392bcbbc74bc3e3c4b0db8","url":"tw_stocks/2439.json"},{"revision":"c0cba09e6bde2b16109cb85ee4aad71d","url":"tw_stocks/2438.json"},{"revision":"cf14ad9246f14641598a5999c8704d13","url":"tw_stocks/2436.json"},{"revision":"eafb029ea41c5f6766c6107fce707e15","url":"tw_stocks/2434.json"},{"revision":"4083952260cacf588542971b7ccba01e","url":"tw_stocks/2433.json"},{"revision":"89000c88ffcef10d62c04868af4a50db","url":"tw_stocks/2431.json"},{"revision":"2a15859e8c6e09361fcfec2bfc8f0f12","url":"tw_stocks/2430.json"},{"revision":"f7d72a3e326e1e89feec3424403ee3c6","url":"tw_stocks/2429.json"},{"revision":"922dcb8085df0b3d9d2eca473465b29a","url":"tw_stocks/2428.json"},{"revision":"70044e841c05ec6c7acb0bb0734a5fc8","url":"tw_stocks/2427.json"},{"revision":"9b99eacf38c31bb7395e0f2f175711be","url":"tw_stocks/2426.json"},{"revision":"77639bb5e8555685cf8cf155ce992f47","url":"tw_stocks/2425.json"},{"revision":"7e9908eb75ff2560764547ff540814fa","url":"tw_stocks/2424.json"},{"revision":"f7ddec282aade74beb9b40c1b4086149","url":"tw_stocks/2423.json"},{"revision":"a3e469c7f44ae60adf8be621ed3847d7","url":"tw_stocks/2421.json"},{"revision":"a81e48d2f1d08e4c93ce08eed6e1224c","url":"tw_stocks/2420.json"},{"revision":"53003ec21777ddc6220722540aa01aee","url":"tw_stocks/2419.json"},{"revision":"f3e58c18fcd6a836a7dfc3d4e7447c5e","url":"tw_stocks/2417.json"},{"revision":"26acda3112719f36aef9549fd54940bf","url":"tw_stocks/2415.json"},{"revision":"0367b8f3bc2524f5315ed9d3885deb38","url":"tw_stocks/2414.json"},{"revision":"2afdeae4321a17fa360796839484708c","url":"tw_stocks/2413.json"},{"revision":"b706951d158991f3347af70dbbd437b1","url":"tw_stocks/2412.json"},{"revision":"18b33ffb0d8834211df0dcad23f1d63c","url":"tw_stocks/2409.json"},{"revision":"9aabe7104e7a7ea65c896486db643703","url":"tw_stocks/2408.json"},{"revision":"a52320f633287108ced2a62fc2fe8842","url":"tw_stocks/2406.json"},{"revision":"ad5b67a7d72c2b5cdfff0107dc06445c","url":"tw_stocks/2405.json"},{"revision":"720e7a8edf09eb2b812706e844c2aa1d","url":"tw_stocks/2404.json"},{"revision":"1a603f3121eb0d374a9a403827bacebb","url":"tw_stocks/2402.json"},{"revision":"912d82359d8f9ec0e7cd4fa0d2696fd0","url":"tw_stocks/2401.json"},{"revision":"7c19b7621e8c32d278d3f47f3cff0280","url":"tw_stocks/2399.json"},{"revision":"2deea343a72942ea04bb9180967ca1dd","url":"tw_stocks/2397.json"},{"revision":"4acf4825074ed4e5e34e056b48808d4b","url":"tw_stocks/2395.json"},{"revision":"e43d4b4f9adc26dd525b740f45b08307","url":"tw_stocks/2393.json"},{"revision":"4a4e6a16a8a6f6fffbd8b4ea4f2b27ec","url":"tw_stocks/2392.json"},{"revision":"a7d92fca719c861db0c63c44d887af73","url":"tw_stocks/2390.json"},{"revision":"eac068ca7b966202ff3d805ad671e3b5","url":"tw_stocks/2388.json"},{"revision":"bc971d3c9367218f312813597c4478f6","url":"tw_stocks/2387.json"},{"revision":"6b6005aae888c0fd78ce8913dc4ca16d","url":"tw_stocks/2385.json"},{"revision":"42369594af15b733325481550a9572fa","url":"tw_stocks/2383.json"},{"revision":"ed657db45d407144c5a031f775b4216e","url":"tw_stocks/2382.json"},{"revision":"dfa21c5ce1cff33d12e756f55c9a53cc","url":"tw_stocks/2380.json"},{"revision":"f0fa88173e1898f96b523d0ea94cc7fc","url":"tw_stocks/2379.json"},{"revision":"0148680730e16ceffd1ae97bac512427","url":"tw_stocks/2377.json"},{"revision":"f525d183ac2a10e98620c9a195e68bca","url":"tw_stocks/2376.json"},{"revision":"4f3de1d24f135dd4a55a3b897fa759a6","url":"tw_stocks/2375.json"},{"revision":"beef8ea5fa16f300dc0f4baa63788534","url":"tw_stocks/2374.json"},{"revision":"aa35f75ee2615e061b077a50f070f529","url":"tw_stocks/2373.json"},{"revision":"91eedd80860f42831457f53f456e1166","url":"tw_stocks/2371.json"},{"revision":"20611a6a79aed958928db19357a2b1c8","url":"tw_stocks/2369.json"},{"revision":"5cb94dc34a819b633be33ed9921cd442","url":"tw_stocks/2368.json"},{"revision":"8706c039e93c7a83846c4e7816689e7c","url":"tw_stocks/2367.json"},{"revision":"96e0650d1fa26cae674fe28e8217813d","url":"tw_stocks/2365.json"},{"revision":"da03a0b50c4257c3c5dbe63a2fe7626b","url":"tw_stocks/2364.json"},{"revision":"d1118932db57855959c10ead4980cab2","url":"tw_stocks/2363.json"},{"revision":"29bafc9abdc5c55f1cddebcaa7d487b2","url":"tw_stocks/2362.json"},{"revision":"788acd426dc6ab2efd75ad86a5a38a7e","url":"tw_stocks/2360.json"},{"revision":"32bcef65028c18563f67bc73a7eaad5d","url":"tw_stocks/2359.json"},{"revision":"ba40fe7b419b0c1f5729edcadf675e55","url":"tw_stocks/2357.json"},{"revision":"0f305db9d807e7432d01165ff8eec830","url":"tw_stocks/2356.json"},{"revision":"aa66d3a96e758ead7dddf1c96627717d","url":"tw_stocks/2355.json"},{"revision":"033b6dd15481abf48a96b80b21858747","url":"tw_stocks/2354.json"},{"revision":"8a5d88a188a07e857c99faaef5455034","url":"tw_stocks/2353.json"},{"revision":"799f47bf7f60d54a11337847443c7ce0","url":"tw_stocks/2352.json"},{"revision":"70de85624c1db2004b82a488cca66ac2","url":"tw_stocks/2351.json"},{"revision":"7602408a7f6a8a818387702b58be956d","url":"tw_stocks/2349.json"},{"revision":"3d5d34d68fbcb3f068e9b6b2980a0633","url":"tw_stocks/2348.json"},{"revision":"d73bb8cfe2c565da15e5a6dd3cdbe4bd","url":"tw_stocks/2347.json"},{"revision":"e9cb777d5c9fe246a00ad825dc49b054","url":"tw_stocks/2345.json"},{"revision":"25391d98fd448bafefa128ab5dcd5251","url":"tw_stocks/2344.json"},{"revision":"d996e799bdf7776486be9b7e703d33b0","url":"tw_stocks/2342.json"},{"revision":"b0aefb1ac0f01d615bfb4043ead553b3","url":"tw_stocks/2340.json"},{"revision":"3e892e58d9ba5c398cd382b24e59226a","url":"tw_stocks/2338.json"},{"revision":"584abfafef491a989b35069f71f7311c","url":"tw_stocks/2337.json"},{"revision":"b463029030c1994faa69b12e3ee21147","url":"tw_stocks/2332.json"},{"revision":"1f19d1245c9ad15faba55f767b8dc12e","url":"tw_stocks/2331.json"},{"revision":"ce47df9edc59730b593ecd5cb8145367","url":"tw_stocks/2330.json"},{"revision":"9385c9b1ede44260955e5d48b0522ecc","url":"tw_stocks/2329.json"},{"revision":"c49e96d7ff11350324f0eb984c678009","url":"tw_stocks/2328.json"},{"revision":"c74a3a3d9e78faa21b5aafbedc62c513","url":"tw_stocks/2327.json"},{"revision":"f92753f90c5cf18cbb052995a7b98298","url":"tw_stocks/2324.json"},{"revision":"40e4e3829502adf240d8a5f1af5d1455","url":"tw_stocks/2323.json"},{"revision":"5ab5c8adc78a630cc00522dcb0e4fa90","url":"tw_stocks/2321.json"},{"revision":"0be127423a926d3b993d7d2723722dc7","url":"tw_stocks/2317.json"},{"revision":"ae0a69407c59109d9305c8400db68e83","url":"tw_stocks/2316.json"},{"revision":"0704302c86d19f61affb92becb4fbce7","url":"tw_stocks/2314.json"},{"revision":"a27811e79de0e394752af3badd7a142b","url":"tw_stocks/2313.json"},{"revision":"bd6db15587553a9f98b1f238eb60da95","url":"tw_stocks/2312.json"},{"revision":"e41cf0fd14813a8ce698d3094ef32969","url":"tw_stocks/2308.json"},{"revision":"007c882e2c56cf6b797e4d05df090ca2","url":"tw_stocks/2305.json"},{"revision":"5f49e9751afbf6a1438ba5e97a95eb0a","url":"tw_stocks/2303.json"},{"revision":"138537f22040157102a9c2e6acf4b79c","url":"tw_stocks/2302.json"},{"revision":"cb433e02016e186131f2f219655c0fe2","url":"tw_stocks/2301.json"},{"revision":"c5b3ccb4592393712f12704b66c373c9","url":"tw_stocks/2250.json"},{"revision":"989e65e03a8ed65bf4050aca74598162","url":"tw_stocks/2248.json"},{"revision":"bcb8d4a52d5e1ff9a87c6361c9a180ff","url":"tw_stocks/2247.json"},{"revision":"1f0bd81b9d510622a66f1a68c1fa5c49","url":"tw_stocks/2243.json"},{"revision":"ce1e0021c63e5070238c253cfa21241f","url":"tw_stocks/2241.json"},{"revision":"b47809817f7ea3d2fedaf63a528bcf50","url":"tw_stocks/2239.json"},{"revision":"548d7953779d533cddf6ffdac3cfa5e3","url":"tw_stocks/2236.json"},{"revision":"f6b798ee9ff29a519653277dcd9c9f04","url":"tw_stocks/2233.json"},{"revision":"398a19c2df364c04a4c943f0152b6613","url":"tw_stocks/2231.json"},{"revision":"294317053202cbc635367dce219bb6aa","url":"tw_stocks/2228.json"},{"revision":"8243e2aa4b4f99e58625c2f0d8b8e651","url":"tw_stocks/2227.json"},{"revision":"899f5ac42865494b9141d97518ca8ebf","url":"tw_stocks/2211.json"},{"revision":"d54ba4a0e68a2afe63e0d79944b9dde3","url":"tw_stocks/2208.json"},{"revision":"3bde0f56082ee0db7be2eedde37ddab1","url":"tw_stocks/2207.json"},{"revision":"eb981d91e80c7a0706825e7cc1de4922","url":"tw_stocks/2206.json"},{"revision":"3375d8570e6df090f5ff89741a145021","url":"tw_stocks/2204.json"},{"revision":"5960ad99303ddd0985f5941d425be715","url":"tw_stocks/2201.json"},{"revision":"621599dc5db0c5d3ab668e21c086a4e4","url":"tw_stocks/2115.json"},{"revision":"45dd16f34aeab9c7a63b8c58d2ced7e6","url":"tw_stocks/2114.json"},{"revision":"1233cda7c69c74fc2fac914b48f851a4","url":"tw_stocks/2109.json"},{"revision":"2b2ea7dcb1ef52d8d71c1ae24ea335f7","url":"tw_stocks/2108.json"},{"revision":"28db1c03162ac8aa1fbbea73664d9643","url":"tw_stocks/2107.json"},{"revision":"b80b5e373c33950ac2141cf42fbbdf3f","url":"tw_stocks/2106.json"},{"revision":"1b7b76cc64db66c8f14edf20273a65af","url":"tw_stocks/2105.json"},{"revision":"829b569d67ef13b6e35a94583a90c34f","url":"tw_stocks/2104.json"},{"revision":"f2a261ed9d1774e840c6fab9755b6475","url":"tw_stocks/2103.json"},{"revision":"15c59204bc419228e27b002db2ff05ad","url":"tw_stocks/2102.json"},{"revision":"f2fe0ef4579f5e7978e718fb01fc45cc","url":"tw_stocks/2101.json"},{"revision":"e06e7c1b905a753f6407619728b3eb37","url":"tw_stocks/2072.json"},{"revision":"d6663a6da08eacaedb9b055c824ed582","url":"tw_stocks/2069.json"},{"revision":"0807dbf97b4f1ce1c3994c493fcdf596","url":"tw_stocks/2062.json"},{"revision":"66022fd8d49b066dcdbe49b8f6e16b0b","url":"tw_stocks/2059.json"},{"revision":"84b5a05194403420466c9b79c7e6db23","url":"tw_stocks/2049.json"},{"revision":"bb51890bde5e68c2e7d92134f72b9ed4","url":"tw_stocks/2038.json"},{"revision":"a42ca48fbddeefe94d580138dd24b0fc","url":"tw_stocks/2034.json"},{"revision":"2b2bb1d26300301a8feab0883a8f25a8","url":"tw_stocks/2033.json"},{"revision":"a051212d7ac2ca13848196b83f0269bb","url":"tw_stocks/2032.json"},{"revision":"6cbb5a0bc1315c09cc6bb72ae40a0f77","url":"tw_stocks/2031.json"},{"revision":"b95b3fa94a9f1c69118cb2685b8033a1","url":"tw_stocks/2030.json"},{"revision":"0f4b44a10ea00d507761cc69c3803436","url":"tw_stocks/2029.json"},{"revision":"d1ee9e457921e460f1e0126461eea462","url":"tw_stocks/2028.json"},{"revision":"3edd339b56a1a20f1eb76b2009106b9d","url":"tw_stocks/2027.json"},{"revision":"1750adce3e78d04a714834bdf35fce5c","url":"tw_stocks/2025.json"},{"revision":"9028db163c37699023eaa0a9fb69d8b5","url":"tw_stocks/2024.json"},{"revision":"2b284126f6c746f8bbd42f2f66a5a726","url":"tw_stocks/2023.json"},{"revision":"df0566613b7a88fb28f1457dff21a783","url":"tw_stocks/2022.json"},{"revision":"98c7491c5accfe46c0185f5ebb45c409","url":"tw_stocks/2020.json"},{"revision":"621b7c1a6ff80dc636fcc1c2ad1cfce3","url":"tw_stocks/2017.json"},{"revision":"2f1c17a7f9e4d40b032dfa96721707bb","url":"tw_stocks/2015.json"},{"revision":"c0172ac7a6e5828af16135ca7052a31e","url":"tw_stocks/2014.json"},{"revision":"b4758f86efc2303ed7b25223100e40d0","url":"tw_stocks/2013.json"},{"revision":"e0478d6d0600f81faee1737416423ae6","url":"tw_stocks/2012.json"},{"revision":"4d3f81373ee5cb8fc18d9bfa98fb88cc","url":"tw_stocks/2010.json"},{"revision":"518132f9fa052d1424d87c5b4c349117","url":"tw_stocks/2009.json"},{"revision":"522fc9f20e823c3499c2621e90d5e009","url":"tw_stocks/2008.json"},{"revision":"9fd22ca57acffb092c04dc35397d0a30","url":"tw_stocks/2007.json"},{"revision":"c885e071057bc47f75d2e1eaec820689","url":"tw_stocks/2006.json"},{"revision":"8001d1a26ae2f171380d13cfa471246e","url":"tw_stocks/2002.json"},{"revision":"7d998bd58cc83a88b6990281e37520e3","url":"tw_stocks/1909.json"},{"revision":"31acddaf61ee63abf95775a2a227fbb8","url":"tw_stocks/1907.json"},{"revision":"038c94cd04fb97642b0c24a2db0be808","url":"tw_stocks/1906.json"},{"revision":"7a8250edd82e04995269ed9b015dc19a","url":"tw_stocks/1905.json"},{"revision":"583277c3ab958a3510cfb7e36cb4531f","url":"tw_stocks/1904.json"},{"revision":"5fcc0065386f35da5f133aef3842e247","url":"tw_stocks/1903.json"},{"revision":"b77f158dfd676860b20c1d34bc968bc8","url":"tw_stocks/1817.json"},{"revision":"d9e4151a866b99cc531bc1a6659ae049","url":"tw_stocks/1810.json"},{"revision":"4499f510bc25a926f89ab68af4620286","url":"tw_stocks/1809.json"},{"revision":"4a1e7e9788ce3c5efe8cf19f1ef1ef0f","url":"tw_stocks/1808.json"},{"revision":"a9ba41e954132fb65e5d576cae3d4625","url":"tw_stocks/1806.json"},{"revision":"87b1d5f0850facbc928a6bb60736379b","url":"tw_stocks/1805.json"},{"revision":"9dd36059e2e094c2b3aedf5445bdbfe2","url":"tw_stocks/1802.json"},{"revision":"6f7ea30c18da15c996e39b1fc5a16a23","url":"tw_stocks/1795.json"},{"revision":"d2f937217bfe9ee5c7900d0a192fea68","url":"tw_stocks/1789.json"},{"revision":"3cf1a56f302665753887a73877068289","url":"tw_stocks/1786.json"},{"revision":"e7b66b107a81fd7d4eef0b7d6372d36c","url":"tw_stocks/1783.json"},{"revision":"5d2bd00889445d2e7d290faf138bac2c","url":"tw_stocks/1776.json"},{"revision":"6b7875d49f652dfc1d368a0e16a9068f","url":"tw_stocks/1773.json"},{"revision":"6e4438a3fca8a98fc0066fcd0cec7e7e","url":"tw_stocks/1762.json"},{"revision":"9720c7536d721efcccc2ef07310f9baf","url":"tw_stocks/1760.json"},{"revision":"f49b81e38b289275d08f15cfc7382c1c","url":"tw_stocks/1752.json"},{"revision":"459081b3533fd93c597e12e59bb0c763","url":"tw_stocks/1737.json"},{"revision":"c1ff7cb3eba255d5d3775c5030aefcfe","url":"tw_stocks/1736.json"},{"revision":"25cf9329f8f91441c5fb2223e0482e0a","url":"tw_stocks/1735.json"},{"revision":"e1cb040e4a1d0fac8a705f76309256d1","url":"tw_stocks/1734.json"},{"revision":"7e6dafbae6283ee263ab44a583771347","url":"tw_stocks/1733.json"},{"revision":"f0c876b3be999da56aef65e2366ae718","url":"tw_stocks/1732.json"},{"revision":"d13f91c5dd56096bd9cb277612114c5b","url":"tw_stocks/1731.json"},{"revision":"47a74052aad3c3f792e16e164b485017","url":"tw_stocks/1730.json"},{"revision":"5d9d6e4e9f4e3c1346bcffc14e274723","url":"tw_stocks/1727.json"},{"revision":"eef8e998b8f8939f8f6543194a749f30","url":"tw_stocks/1726.json"},{"revision":"27e000d9d3af408be8c380814e196c96","url":"tw_stocks/1725.json"},{"revision":"1361434c739ce1ac2d834ddf738718dd","url":"tw_stocks/1723.json"},{"revision":"b083b594c2e44bbde2c7b16412bfe24d","url":"tw_stocks/1722.json"},{"revision":"5d4d0377795332737b9d173059787b47","url":"tw_stocks/1721.json"},{"revision":"7e2cd4607500d45768daf983ed158c82","url":"tw_stocks/1720.json"},{"revision":"4777973c525b58e23200ea2dad88aac0","url":"tw_stocks/1718.json"},{"revision":"c4d110a35795b3c8fb6552526583489b","url":"tw_stocks/1717.json"},{"revision":"d5ce92c0ab1afe5c9d6f34e9e6e6b7b3","url":"tw_stocks/1714.json"},{"revision":"d42de23f1baea72fb873f9079fad602b","url":"tw_stocks/1713.json"},{"revision":"90b8216094bf4fa29064348b74de42c7","url":"tw_stocks/1712.json"},{"revision":"5ba6448e1d6ed90897bf7780fd3b1b46","url":"tw_stocks/1711.json"},{"revision":"f99062183655350f66d55354db095694","url":"tw_stocks/1710.json"},{"revision":"64d34a69759a1e8549e16fdcb2b7a89f","url":"tw_stocks/1709.json"},{"revision":"7624181b7ce79fe19245784944565ac0","url":"tw_stocks/1708.json"},{"revision":"41cc17a9e5933d80266e0c77c7a9f5b6","url":"tw_stocks/1707.json"},{"revision":"50cc90a53848a846241b6eb37443d9cc","url":"tw_stocks/1702.json"},{"revision":"6e77fa8ecf2c85a4f6f39679d1cc155b","url":"tw_stocks/1626.json"},{"revision":"94b1aff13cb10b7c62a036b307f99cba","url":"tw_stocks/1623.json"},{"revision":"735072b5e56cfc625d5692611557e13e","url":"tw_stocks/1618.json"},{"revision":"d81df6999ea00d1af02687d3a7a5b173","url":"tw_stocks/1617.json"},{"revision":"3c3526528b0960c891771f73e33334ab","url":"tw_stocks/1616.json"},{"revision":"8ffff9bb621a8d713100b3a8965eeabb","url":"tw_stocks/1615.json"},{"revision":"d0b69c8d2781cfc1ff558b3ec35c000d","url":"tw_stocks/1614.json"},{"revision":"a3f6a5b3e8af2a07ecf95ce58e9f24e8","url":"tw_stocks/1612.json"},{"revision":"f16725a391c5d214e97eeb08d536af97","url":"tw_stocks/1611.json"},{"revision":"d9cf7d8b1d8318f812f3d2cc375dd5e3","url":"tw_stocks/1609.json"},{"revision":"ce560529537caddc946a5c92a0cb3563","url":"tw_stocks/1608.json"},{"revision":"b5c866673c65d369482736a52ede1b38","url":"tw_stocks/1605.json"},{"revision":"11286d04f5c2c36b340036d5f3784b2f","url":"tw_stocks/1604.json"},{"revision":"50d0be5989e9a37163c746145cdf4916","url":"tw_stocks/1603.json"},{"revision":"47acc06cab65f60abacf101b94a3beaf","url":"tw_stocks/1598.json"},{"revision":"b2ac810f44e861451525e9983730a8ef","url":"tw_stocks/1597.json"},{"revision":"c3c6997654df6a7167e4c12572564deb","url":"tw_stocks/1590.json"},{"revision":"cc2e6cccfad9c1b64ed2456b64bc2327","url":"tw_stocks/1589.json"},{"revision":"5fcab5e63d1aa54e4c75422ad144fdfe","url":"tw_stocks/1587.json"},{"revision":"929f8ceb56719cb2c9df79291f372b53","url":"tw_stocks/1583.json"},{"revision":"c99b3fcd2e0cd6baf14082e2ecb48a2e","url":"tw_stocks/1582.json"},{"revision":"43c331eec7f452a865217a5087eff991","url":"tw_stocks/1568.json"},{"revision":"c4b557af6840d4db8b4bdd2d936c768a","url":"tw_stocks/1563.json"},{"revision":"ca32f082ede3cd671fc62e17b340c117","url":"tw_stocks/1560.json"},{"revision":"647f45b6c2fd4b6c6194be9ebcefade6","url":"tw_stocks/1558.json"},{"revision":"04299343515e6c664d642dcbc3fb9c80","url":"tw_stocks/1541.json"},{"revision":"2d1ececf0a017aabf2c84c9b9974b431","url":"tw_stocks/1540.json"},{"revision":"a5fc620e9ffdd1970232bee891cae0c7","url":"tw_stocks/1539.json"},{"revision":"9c43002cdebc9dd739c89e4dfb7676b2","url":"tw_stocks/1538.json"},{"revision":"f11cb8946b644078318ecd6546aa6466","url":"tw_stocks/1537.json"},{"revision":"1571134a2100d32bc666c7bc0ac54333","url":"tw_stocks/1536.json"},{"revision":"64862e666da9966ff446a34e7b9da218","url":"tw_stocks/1535.json"},{"revision":"3800e1b20554829a948c9b5224c76205","url":"tw_stocks/1533.json"},{"revision":"672f5376b9408a23b556373c56a5ecd6","url":"tw_stocks/1532.json"},{"revision":"23771ae7de63affe9b09a6fecb0d0a16","url":"tw_stocks/1531.json"},{"revision":"e1171e4f4ac52c53fdc06043ca35178a","url":"tw_stocks/1530.json"},{"revision":"415c2b34cad1f1616a4ae5849f157eed","url":"tw_stocks/1529.json"},{"revision":"055dddba52d582920cbf899095388c5a","url":"tw_stocks/1528.json"},{"revision":"4d2c2c6a3f97432c20935ad185725e26","url":"tw_stocks/1527.json"},{"revision":"45bc613964ea1310476a91fa8459bad9","url":"tw_stocks/1526.json"},{"revision":"a555396f52bbd080e41dc44646fd8da9","url":"tw_stocks/1525.json"},{"revision":"03fa7138300add5b565065f52d128e51","url":"tw_stocks/1524.json"},{"revision":"2f715b8507f3e45384982aaa45f8893c","url":"tw_stocks/1522.json"},{"revision":"e1d1b092d6bb288992552ae4e32489e2","url":"tw_stocks/1521.json"},{"revision":"34be19464e2890aa766fd6690570050b","url":"tw_stocks/1519.json"},{"revision":"143e26cfa437909236c02e1cf84e7ee8","url":"tw_stocks/1517.json"},{"revision":"9a6b50d5e5cc2f9b9c6db88529cce414","url":"tw_stocks/1516.json"},{"revision":"8cdebc068b8fa9f03cf3b7b10f58dd4b","url":"tw_stocks/1515.json"},{"revision":"de110d50d850e4fbb18c1a581ed100cc","url":"tw_stocks/1514.json"},{"revision":"bbeb9ea3eece2128dc6010c2a7af3bcf","url":"tw_stocks/1513.json"},{"revision":"529aa3a0e9d298cb0f592ed7b23e6fc0","url":"tw_stocks/1512.json"},{"revision":"a9e50baad979619a6c0be3457abef065","url":"tw_stocks/1506.json"},{"revision":"481e36ff585872513315024dc12f90f7","url":"tw_stocks/1504.json"},{"revision":"8c72141136c5c0d6b70b34947d7ef50e","url":"tw_stocks/1503.json"},{"revision":"0fd08a817255e5df7b96383a02ea0a55","url":"tw_stocks/1477.json"},{"revision":"01034276d89fc11c30a8e319f1933a8e","url":"tw_stocks/1476.json"},{"revision":"4005aaaf8a54893179f6b92d06fae06c","url":"tw_stocks/1475.json"},{"revision":"57b1a6aa4b1fe405eec635cd341324b0","url":"tw_stocks/1474.json"},{"revision":"03fee3477db54492ba9c407f6b8021f5","url":"tw_stocks/1473.json"},{"revision":"ec1cc17c293a9ea460010f126888c9fc","url":"tw_stocks/1472.json"},{"revision":"00c616b1bb6c21afa3e3708b39c85b30","url":"tw_stocks/1471.json"},{"revision":"1fef031af3313d1e2f54cbd35215902d","url":"tw_stocks/1470.json"},{"revision":"7d2329c688a7f14c48b9a71065504ee3","url":"tw_stocks/1468.json"},{"revision":"7d925b4414e0a17ae1c1decd4ead2a0c","url":"tw_stocks/1467.json"},{"revision":"26fecfa4f86a424afad201abd7d38784","url":"tw_stocks/1466.json"},{"revision":"01eb75bd6ec5b53e7c97c2e4d1fd8053","url":"tw_stocks/1465.json"},{"revision":"7d854a5043ee9556f079f75e7a1afe36","url":"tw_stocks/1464.json"},{"revision":"9261cd487d60731fa994c96fe272f086","url":"tw_stocks/1463.json"},{"revision":"65acf0b05ea593e10493dbc62939dd27","url":"tw_stocks/1460.json"},{"revision":"c85063d1a5093e9839d3fa1ca2046dfa","url":"tw_stocks/1459.json"},{"revision":"8b74de4f5d691c0161ac29914ee01d49","url":"tw_stocks/1457.json"},{"revision":"7a20449428a6e22a85ab4d0d9596b525","url":"tw_stocks/1456.json"},{"revision":"d4c24668a1f815e41ee18c3a8a23c8e1","url":"tw_stocks/1455.json"},{"revision":"b5ce255c9973e0e47aae6eba91dca342","url":"tw_stocks/1454.json"},{"revision":"6ef6bf6ef881a643ca8c4cf89cf8f1d7","url":"tw_stocks/1453.json"},{"revision":"8684bf7de5d296c0764e56549a60c894","url":"tw_stocks/1452.json"},{"revision":"f5238b009096b58bb1abcdf20eaa697a","url":"tw_stocks/1451.json"},{"revision":"c7446f671e16e35c19d7026bfbf316f0","url":"tw_stocks/1449.json"},{"revision":"785372c6e4105ed76980c0a8ec1bb1b6","url":"tw_stocks/1447.json"},{"revision":"efc4e2432d853a08b745aaa5f911edd1","url":"tw_stocks/1446.json"},{"revision":"f943db7ac3964eb1d3c6d4d8acd9e35b","url":"tw_stocks/1445.json"},{"revision":"4601d1dde58d343d87ca5178f45088a8","url":"tw_stocks/1444.json"},{"revision":"f2953aab1f767718bde5c740ea552da0","url":"tw_stocks/1443.json"},{"revision":"030b75e98dc770b5649b2360c32c6033","url":"tw_stocks/1442.json"},{"revision":"f4b7acc8c2d043904cae0a14d4a18c53","url":"tw_stocks/1441.json"},{"revision":"f6a2920ae518adf36746f11e2012b10e","url":"tw_stocks/1440.json"},{"revision":"df4aafdb996a24fed83237eb6d075e37","url":"tw_stocks/1439.json"},{"revision":"20e88b4252374e9e012805a5437edad9","url":"tw_stocks/1438.json"},{"revision":"026858ef94829ca33dd3a94bea3f2834","url":"tw_stocks/1437.json"},{"revision":"cf23fa903e57a7ca414d403c3fc82d36","url":"tw_stocks/1436.json"},{"revision":"b567727254884673d59683760729ef30","url":"tw_stocks/1435.json"},{"revision":"30906ae9bfd68a38b8b822ed964bb805","url":"tw_stocks/1434.json"},{"revision":"7e2cc49349cca46affd89649e7e59289","url":"tw_stocks/1432.json"},{"revision":"f60f42a7ef6751e09e7d35671efeae42","url":"tw_stocks/1423.json"},{"revision":"01c889247c9ae8826c0eef1c79dd7ffd","url":"tw_stocks/1419.json"},{"revision":"ddf8f0745652b552a6728b91fcf5dbaf","url":"tw_stocks/1418.json"},{"revision":"775c4897d1b362b3614d75bec474aa84","url":"tw_stocks/1417.json"},{"revision":"bc208a43b464193faee351133c710747","url":"tw_stocks/1416.json"},{"revision":"64519810c690e3b3fc130e1e08c250f5","url":"tw_stocks/1414.json"},{"revision":"7fba96b60f00811dcf6f740a8c485d08","url":"tw_stocks/1413.json"},{"revision":"3ff537a980efa694942220aba0f87b92","url":"tw_stocks/1410.json"},{"revision":"ab33c84c28f2f3f5b4d457b340122dfa","url":"tw_stocks/1409.json"},{"revision":"4d6e44b3cbd448d2b2d961f138d1e0a0","url":"tw_stocks/1402.json"},{"revision":"f155e53eedfd3d629f2a4e3e360a1399","url":"tw_stocks/1342.json"},{"revision":"5080c7fc2b2306d294ea9bf9b72a5740","url":"tw_stocks/1341.json"},{"revision":"de13d474edb006350caecec0ffb2a967","url":"tw_stocks/1340.json"},{"revision":"b5df3d4cab76c020246c170e801f2f59","url":"tw_stocks/1339.json"},{"revision":"ec7d2fc4107e52b38d49f12da9312308","url":"tw_stocks/1338.json"},{"revision":"499d944d7e4d50e870b7b10af9810536","url":"tw_stocks/1337.json"},{"revision":"91d424f54fa845ed6f1cd5cc6f2f97cf","url":"tw_stocks/1326.json"},{"revision":"39b32a94ea61d4f0f37b398db1222add","url":"tw_stocks/1325.json"},{"revision":"1ab759b4cafb96a0d45a436ea5768df3","url":"tw_stocks/1324.json"},{"revision":"21a85cb6385fe3c9bcf21e88886633cb","url":"tw_stocks/1323.json"},{"revision":"5e2a5aab4875e1b6c3f78b93d34b51c0","url":"tw_stocks/1321.json"},{"revision":"e2a1c3c05343a43b2f6ee8220e140cd0","url":"tw_stocks/1319.json"},{"revision":"205b4b76c6d8dfa0e29606fcaa6a1703","url":"tw_stocks/1316.json"},{"revision":"500f0c594973aa00ac4b78c17ca8a336","url":"tw_stocks/1315.json"},{"revision":"2af2a57185300455ab670c32388b067f","url":"tw_stocks/1314.json"},{"revision":"af1953e463f000d5739419f0e429ab60","url":"tw_stocks/1313.json"},{"revision":"2a26bd951fc184144a588100c905aeb0","url":"tw_stocks/1312.json"},{"revision":"837fc567dd836291366a6f70df11b1e1","url":"tw_stocks/1310.json"},{"revision":"4bb50dba93bb055f87ab922433fcd59d","url":"tw_stocks/1309.json"},{"revision":"0127819f0eba485c3c8728d8bd797a4e","url":"tw_stocks/1308.json"},{"revision":"1f5cfc2f4a68a5eb3ae409c382e54148","url":"tw_stocks/1307.json"},{"revision":"531ce3d68c305f3227c17ffc64f0a916","url":"tw_stocks/1305.json"},{"revision":"963a70216fc37c4ee4fb2bdbfb595ce6","url":"tw_stocks/1304.json"},{"revision":"6918b71f6c31e12477505434e4d456d1","url":"tw_stocks/1303.json"},{"revision":"fb8454df6a8e0c2a14c5064118dacaeb","url":"tw_stocks/1301.json"},{"revision":"bd6dbf9b29c35dcb6120b4bbab87a224","url":"tw_stocks/1256.json"},{"revision":"de5cfd6c25c074d4727a6b7787ec3550","url":"tw_stocks/1236.json"},{"revision":"1621e5ac2a9f593a2efc65d2edfc3841","url":"tw_stocks/1235.json"},{"revision":"cdf1739d5f319989654505c385af19c6","url":"tw_stocks/1234.json"},{"revision":"b7cf6d17778821c157620d00ffdd3665","url":"tw_stocks/1233.json"},{"revision":"71eb20c372099740aea4f53b0bb932b5","url":"tw_stocks/1232.json"},{"revision":"370597d340fe68ca35947cf3cb02d2b4","url":"tw_stocks/1231.json"},{"revision":"e1597ccca33b8cdf6f67a8cce83bf9e2","url":"tw_stocks/1229.json"},{"revision":"c1a44a2d791dfaba41bd62383e05d915","url":"tw_stocks/1227.json"},{"revision":"50263b0dd5d702d004e56f5f6f196a52","url":"tw_stocks/1225.json"},{"revision":"2a92a76f704c957cf34ad428dcba6390","url":"tw_stocks/1220.json"},{"revision":"011df5279608fa39fabfb48fa9ea9cb6","url":"tw_stocks/1219.json"},{"revision":"f555ef6632fb2bcd61f1ad20ebe29afc","url":"tw_stocks/1218.json"},{"revision":"93821d47aa33478d4117cd5af4ebed3c","url":"tw_stocks/1217.json"},{"revision":"0ae23c3281706aed9f6c046f3c5d320f","url":"tw_stocks/1216.json"},{"revision":"483fabbf7e350f11b66cd74073ddc335","url":"tw_stocks/1215.json"},{"revision":"a8536e8ecd67c986d4eeef5e0767c3a8","url":"tw_stocks/1213.json"},{"revision":"afe4101772ab4b72daf77ed0dc66083f","url":"tw_stocks/1210.json"},{"revision":"5d22e15c9d2b517613c1c635ee12a6fb","url":"tw_stocks/1203.json"},{"revision":"e9905eaed7c1101822f21154470a744a","url":"tw_stocks/1201.json"},{"revision":"8fc3c58654381b50a18c65535492c574","url":"tw_stocks/1110.json"},{"revision":"c51da0647cc9fdceabfc11bcbdebfe6b","url":"tw_stocks/1109.json"},{"revision":"dd724f291c5cf8eb426edd2b19cbcf97","url":"tw_stocks/1108.json"},{"revision":"36571657a867f150390aef064d183b67","url":"tw_stocks/1104.json"},{"revision":"c607cc5b31e13efd97300e8d33599b89","url":"tw_stocks/1103.json"},{"revision":"2a4e14990f866c0ea8b5759278403d38","url":"tw_stocks/1102.json"},{"revision":"166c17a94255f3342558ffbc7675c918","url":"tw_stocks/1101.json"},{"revision":"4244443375015d603f1530069643cfe3","url":"tw_stocks/00997A.json"},{"revision":"8319b21be43e437a9b9b1c3f44dcc60b","url":"tw_stocks/00996A.json"},{"revision":"ea2c2a4c9ce8c9b323e6c2b976be4991","url":"tw_stocks/00995A.json"},{"revision":"1f3efd0043198e2749cbd7431e0372ab","url":"tw_stocks/00994A.json"},{"revision":"42d819fe04f1b953d771a22c55f145e5","url":"tw_stocks/00993A.json"},{"revision":"965bab19170feaa475a24ead0f4b592a","url":"tw_stocks/00992A.json"},{"revision":"4c6007a2d258a2fa41844c0c180d4966","url":"tw_stocks/00991A.json"},{"revision":"90de4ab0afa9f69edb18628b35cf80f7","url":"tw_stocks/00990A.json"},{"revision":"23a665e20606b044e8afc1835cda2aac","url":"tw_stocks/00989A.json"},{"revision":"e4ef1e9f8e34aebcd3542ca50d45143e","url":"tw_stocks/00988A.json"},{"revision":"6ab8848eddf231df16025d372184a3d7","url":"tw_stocks/00987A.json"},{"revision":"f1006a9aeb765c4de6d5ad5c376b4716","url":"tw_stocks/00986A.json"},{"revision":"bc55a89f0f15ec62fef61991bd2aa87e","url":"tw_stocks/00985B.json"},{"revision":"224c0270451300f0e0cbf1cd8296e133","url":"tw_stocks/00985A.json"},{"revision":"628e25bfa37dbada7dc00689cf844c5c","url":"tw_stocks/00984D.json"},{"revision":"cb70360d6355128090e52d92f69d7b25","url":"tw_stocks/00984A.json"},{"revision":"d1fee59d45451b4321a01d00ee2b8be8","url":"tw_stocks/00983D.json"},{"revision":"205241ecd458b1c4d43a09154d09b00b","url":"tw_stocks/00983A.json"},{"revision":"a2773b522d158dc63dfc52a58de1de9b","url":"tw_stocks/00982T.json"},{"revision":"5a8a62c41725166b170b575043495a2d","url":"tw_stocks/00982D.json"},{"revision":"79513c002cefcfdfd1c11ae94cee5b2c","url":"tw_stocks/00982A.json"},{"revision":"0e5ebb9c226a482baa3a504cca2e6c67","url":"tw_stocks/00981T.json"},{"revision":"dad0ac33505c29c40d5e6570a59da953","url":"tw_stocks/00981A.json"},{"revision":"17bd2302b5538a073ed347a4712c54f4","url":"tw_stocks/009818.json"},{"revision":"9b2aaa665a2687ab95fcae6081eab281","url":"tw_stocks/009817.json"},{"revision":"b917d771536e568d0568226268903ff5","url":"tw_stocks/009816.json"},{"revision":"3cb149f5e820d4efe5c33a479abfd114","url":"tw_stocks/009813.json"},{"revision":"16d3f736be3f2261c1d49e4aa7eff7c9","url":"tw_stocks/009812.json"},{"revision":"96372fbc4e523463eed4c12e4f228f63","url":"tw_stocks/009811.json"},{"revision":"82b7e8cb0886c77e91f0f7d105517341","url":"tw_stocks/009810.json"},{"revision":"eb0c1e3fe297b4a01b252eb35ccd16e4","url":"tw_stocks/00980A.json"},{"revision":"a62dc7f3ec967e1a9faacf4d7b082d14","url":"tw_stocks/009809.json"},{"revision":"985a1664a5874e0fe2a0b004eefbac03","url":"tw_stocks/009808.json"},{"revision":"36ff0e1b9a85497651e261b54fd2232e","url":"tw_stocks/009805.json"},{"revision":"9894300f2e59f6dbf639bb3feedaded8","url":"tw_stocks/009804.json"},{"revision":"807cbb5ab262652fc56c937ad8a340fa","url":"tw_stocks/009803.json"},{"revision":"28e5204856d7d27c3176f732843c683c","url":"tw_stocks/009802.json"},{"revision":"1236dcb38587389144c991f1ae7ef4fe","url":"tw_stocks/009801.json"},{"revision":"b2183b8597b3e89242a200062cb64a7f","url":"tw_stocks/009800.json"},{"revision":"a7114829ec1877b976808fc1d15fd91c","url":"tw_stocks/00972.json"},{"revision":"be0ef6654de308a1ec51c869ae6dd3c7","url":"tw_stocks/00971.json"},{"revision":"854f4b0ac6fc90a20a24ae319ec8bff8","url":"tw_stocks/00965.json"},{"revision":"e57907c4e7f9ba69cd747e7a3e7db024","url":"tw_stocks/00964.json"},{"revision":"55ba9104df2e7c33ea270044e6fe0b2b","url":"tw_stocks/00963.json"},{"revision":"1e9704c2428d03de5504cdc1b68e9f1a","url":"tw_stocks/00962.json"},{"revision":"1707fbf73b0c73e46a6b5e7f0bf88a71","url":"tw_stocks/00961.json"},{"revision":"cc3de359307a29354993d4d6f73aaa09","url":"tw_stocks/00960.json"},{"revision":"4977c2e41a076edba2828a048b9c1d36","url":"tw_stocks/00956.json"},{"revision":"c574a995f15f5e630c974f723641a44e","url":"tw_stocks/00954.json"},{"revision":"b5ab19079d029e967591a0b221704efc","url":"tw_stocks/00953B.json"},{"revision":"de03445e3c2313728df81943ba3c9da1","url":"tw_stocks/00952.json"},{"revision":"b81e9954e29f079d64ea659bdcc78a19","url":"tw_stocks/00951.json"},{"revision":"6700f04c9cf5947a82e090fdcb72f150","url":"tw_stocks/00949.json"},{"revision":"5e519b1e43d45db8d86d4c6f9c19bbf2","url":"tw_stocks/00947.json"},{"revision":"33614ed60a2f355b934f5a3a722653a3","url":"tw_stocks/00946.json"},{"revision":"dabeede059e0085582425360688692a1","url":"tw_stocks/00945B.json"},{"revision":"a38a5e8b2e7cb5cd45663d621eccc31b","url":"tw_stocks/00944.json"},{"revision":"75dfe047a278df9e614dffffc4861fe1","url":"tw_stocks/00943.json"},{"revision":"d6d7ac0dc6ba1a17ae8335f41231d841","url":"tw_stocks/00941.json"},{"revision":"b167d4772ed6abaf274e5547d1b77748","url":"tw_stocks/00940.json"},{"revision":"29c264f3d7022d69bd9ea198eeee8a98","url":"tw_stocks/00939.json"},{"revision":"7c13789f668362a70f370523dec75a68","url":"tw_stocks/00938.json"},{"revision":"78c7cb6e5ed02bc8f535ea78fb5fac31","url":"tw_stocks/00936.json"},{"revision":"d042eabc829ab4c63adafe64943ba858","url":"tw_stocks/00935.json"},{"revision":"70dcd5f79e10822004e4aacf547f5382","url":"tw_stocks/00934.json"},{"revision":"d5fc5f1d0fa569b1d59871f4820f916d","url":"tw_stocks/00932.json"},{"revision":"1f56977d4ab81e9c025234f87177637c","url":"tw_stocks/00930.json"},{"revision":"51103c36397b30233c9dca29ea312467","url":"tw_stocks/00929.json"},{"revision":"fff7e82144791bfccc8692ea2f42d107","url":"tw_stocks/00927.json"},{"revision":"951d609775b12fd3459534e196108748","url":"tw_stocks/00926.json"},{"revision":"81cb1fac23cc18ba10cd46056534aeb4","url":"tw_stocks/00924.json"},{"revision":"1b2cd2b3bf888f464fd6475e05c88e07","url":"tw_stocks/00923.json"},{"revision":"7009adcbc0d9ff6625c479f89356b2a1","url":"tw_stocks/00922.json"},{"revision":"cd6fb78e7ffad664a31c9fad98ebc50f","url":"tw_stocks/00921.json"},{"revision":"6ec70daf4b067cd0be4d38478f6b80db","url":"tw_stocks/00920.json"},{"revision":"5e2183a5858114a9ec1fa8622522c0a2","url":"tw_stocks/00919.json"},{"revision":"548636dbafb50104d898530eae23d7bd","url":"tw_stocks/00918.json"},{"revision":"7df28d871811045ed07da46fd4c71f48","url":"tw_stocks/00917.json"},{"revision":"9670d5778ddf1d1cf6f7494635a6ebe4","url":"tw_stocks/00916.json"},{"revision":"cc5c62c7c0ee70361985204826ff3025","url":"tw_stocks/00915.json"},{"revision":"b56765ad5a089990df145da34f52a087","url":"tw_stocks/00913.json"},{"revision":"c9ceae10c1a41447e27bb237179b3a2a","url":"tw_stocks/00912.json"},{"revision":"66c713712bd6458d06ac085b66874d7b","url":"tw_stocks/00911.json"},{"revision":"333d845678d0e992d545c01ea8453928","url":"tw_stocks/00910.json"},{"revision":"fa9cd8cc87295c483ab947631223a118","url":"tw_stocks/00909.json"},{"revision":"914976ef22a2a109d9fb6ff2371fabce","url":"tw_stocks/00908.json"},{"revision":"6d308539463dca140f6158717fd258d7","url":"tw_stocks/00907.json"},{"revision":"2cad2708caf3cb564a2dc264c526cb1c","url":"tw_stocks/00905.json"},{"revision":"c8f5d7df831290ad85b70432b45aa0c3","url":"tw_stocks/00904.json"},{"revision":"e57a50ee085673adbee344c4b3026e2b","url":"tw_stocks/00903.json"},{"revision":"659b546a0e544ea912c9bfa2caa000d0","url":"tw_stocks/00902.json"},{"revision":"fc48871750632df94a9e299a84d13cd5","url":"tw_stocks/00901.json"},{"revision":"9aed8d875335141e3725dd013807f814","url":"tw_stocks/00900.json"},{"revision":"d4aa0e49f6cca8b90de0fca90451be5d","url":"tw_stocks/00899.json"},{"revision":"e8083550fd9fa1c8a9be8ab6aa691486","url":"tw_stocks/00898.json"},{"revision":"0723cccd201d0a7a9958c8e3ac259b7a","url":"tw_stocks/00897.json"},{"revision":"406c1a3141316e741bea704d9b51c5f9","url":"tw_stocks/00896.json"},{"revision":"f4f183c7c8b8b1cf5871d6e3bcd338ef","url":"tw_stocks/00895.json"},{"revision":"0f130367dd0e19f368aebb26585895f5","url":"tw_stocks/00894.json"},{"revision":"415aca9f60a63479dc691e89eb2b21f1","url":"tw_stocks/00893.json"},{"revision":"50bbb459b17266f22ad917a3105e1c5e","url":"tw_stocks/00892.json"},{"revision":"dc335ceafe465afe2600b1e831ef55e9","url":"tw_stocks/00891.json"},{"revision":"c7f9796940e92ef1e35c333c410fbc7d","url":"tw_stocks/00885.json"},{"revision":"9469a0cdafb67ce3ec7f46a741dc6146","url":"tw_stocks/00882.json"},{"revision":"f481a3d0e28929155a9c5981be3f6db4","url":"tw_stocks/00881.json"},{"revision":"945dec1de4a6730ae26dae7d334db228","url":"tw_stocks/00878.json"},{"revision":"da366dcc4fca916d7a277933e4d638c0","url":"tw_stocks/00876.json"},{"revision":"03f6b00c5714e58e675c7af079518969","url":"tw_stocks/00875.json"},{"revision":"75b4f3da6678a1fd07420baab6663349","url":"tw_stocks/00865B.json"},{"revision":"144aba830c6b6e5250e2c33937d63b03","url":"tw_stocks/00861.json"},{"revision":"7011fb395e352831bba4fccdd61ffa61","url":"tw_stocks/00852L.json"},{"revision":"b74f52361c4bee66ad18c60d1c55b1f6","url":"tw_stocks/00851.json"},{"revision":"5b4a51550777688d4d048757f218dbcf","url":"tw_stocks/00850.json"},{"revision":"4858c45257678c3130d779b20abd648d","url":"tw_stocks/00830.json"},{"revision":"b8056835817a5ed9cb57b420d8fc261b","url":"tw_stocks/00783.json"},{"revision":"0baa4f679ea5f01f8e458f781d75ca59","url":"tw_stocks/00775B.json"},{"revision":"03e52d477c50827014b6f72d017ca972","url":"tw_stocks/00771.json"},{"revision":"bc357e38605fc40dcd15f63cafd72861","url":"tw_stocks/00770.json"},{"revision":"a0f3668050f2a4d6f15e436a8fa9edd9","url":"tw_stocks/00763U.json"},{"revision":"86d4fa95e6a9bd086377b6db5d536a60","url":"tw_stocks/00762.json"},{"revision":"4d46797710842e1da4a55db829b0cdf7","url":"tw_stocks/00757.json"},{"revision":"d771323c9e07dd3e220949c590440243","url":"tw_stocks/00753L.json"},{"revision":"e1b19836125d77be598ab0eefe1ea4d9","url":"tw_stocks/00752.json"},{"revision":"deb5d607dd1e87442def8b99ee7add57","url":"tw_stocks/00739.json"},{"revision":"9fa15f1f80e11dd6f6041bee90d71c98","url":"tw_stocks/00738U.json"},{"revision":"67b868bbec021c577891a15766b1a38c","url":"tw_stocks/00737.json"},{"revision":"0789c9290fa6d2ba59a987cfa0ca9f03","url":"tw_stocks/00736.json"},{"revision":"9519248be1ae40358ec9b9bd40efb509","url":"tw_stocks/00735.json"},{"revision":"c568d26a7a39a935851834816b54deda","url":"tw_stocks/00733.json"},{"revision":"ff7af8294ff42709110e46a547bb663d","url":"tw_stocks/00731.json"},{"revision":"5a478ba2206c11e78e44c99bdba14f7c","url":"tw_stocks/00730.json"},{"revision":"ef2cc0c0ec69bb9e7ddd87aa467dd077","url":"tw_stocks/00728.json"},{"revision":"e82252a75421d37c898775bf9b341bfa","url":"tw_stocks/00717.json"},{"revision":"8d26f1c1d392b97b2f59a2a9bb72cc14","url":"tw_stocks/00715L.json"},{"revision":"3d7682cb2582b812bae25bfdc8e3439e","url":"tw_stocks/00714.json"},{"revision":"4256a00c36f5a1cc05fa504268de53d8","url":"tw_stocks/00713.json"},{"revision":"c7e21e0eebf3a7c68ce75bd11bf8925e","url":"tw_stocks/00712.json"},{"revision":"0b50c08d6893db6c7b31d92c7f18ae1a","url":"tw_stocks/00711B.json"},{"revision":"ac0aeba313d3921aeae69301fad0cd64","url":"tw_stocks/00710B.json"},{"revision":"9fd2aac33c5150bd5fb1dc9e0869c7eb","url":"tw_stocks/00709.json"},{"revision":"adadec2c4a09d82058edc3b81fdbfcaa","url":"tw_stocks/00708L.json"},{"revision":"6ba5f37a497330409757b02491605cfa","url":"tw_stocks/00707R.json"},{"revision":"ae484a61fe2ff6bd419f648d3a0e9b94","url":"tw_stocks/00706L.json"},{"revision":"c0f6f3d7dc3cea375a53ba8444fc9bc7","url":"tw_stocks/00703.json"},{"revision":"56224b66b3669c3a922a9d646c75fd7e","url":"tw_stocks/00702.json"},{"revision":"8084ea304819b4b93d3ce5b6847f7a81","url":"tw_stocks/00701.json"},{"revision":"f5fce1f8420b2fe8651fa27a0bafa8df","url":"tw_stocks/00700.json"},{"revision":"284f769fa3d708fd175fd96f5e6794b7","url":"tw_stocks/00693U.json"},{"revision":"5d930661405d44a8daf8af124fa9c0e2","url":"tw_stocks/00692.json"},{"revision":"a6239c09b54106341b893dd17486766a","url":"tw_stocks/00690.json"},{"revision":"8f8acd00aa9097221c0392f3cea6840d","url":"tw_stocks/00689R.json"},{"revision":"b4823ef627a6f66ce61aed989da266f9","url":"tw_stocks/00688L.json"},{"revision":"fd6e2c60646c9f8d163db9699a7bbbb1","url":"tw_stocks/00686R.json"},{"revision":"49ec0d3e6de4bd9f36677b313b6d057e","url":"tw_stocks/00685L.json"},{"revision":"1c8b7c5b6df83db577c8a8760f57bf56","url":"tw_stocks/00684R.json"},{"revision":"cab01f059377763738e9c68ef4f4b9d3","url":"tw_stocks/00683L.json"},{"revision":"96112f51414331d574521fa1e4c7561f","url":"tw_stocks/00682U.json"},{"revision":"40ef8a25bcd4cfa3abc392d9b104c123","url":"tw_stocks/00681R.json"},{"revision":"f59c784708dc04f157c99f63f20672bf","url":"tw_stocks/00680L.json"},{"revision":"51de8c5430b0c312da3d503cd848adee","url":"tw_stocks/00678.json"},{"revision":"e9355a69a3d96b3abe9f22e90adb1622","url":"tw_stocks/00676R.json"},{"revision":"ddbc32463abf2ac4b51c412a2b50459d","url":"tw_stocks/00675L.json"},{"revision":"03fe860c664b4ea6607005330f101ea5","url":"tw_stocks/00674R.json"},{"revision":"0716974b8b716b9c47e4864cdca1e911","url":"tw_stocks/00673R.json"},{"revision":"32cf4c36f5346f921d79e81c01a0879d","url":"tw_stocks/00671R.json"},{"revision":"a21914b72e117307373f6a494e820cf1","url":"tw_stocks/00670L.json"},{"revision":"a688f5284f18687e902890f621426b71","url":"tw_stocks/00669R.json"},{"revision":"6eeaa5d1dbe77ae8019957a84d3e0b17","url":"tw_stocks/00668K.json"},{"revision":"30d715f6a4e4dc338953e33dbdf478cd","url":"tw_stocks/00668.json"},{"revision":"7abac83a2439a1a64ca89563940111d1","url":"tw_stocks/00666R.json"},{"revision":"583046f96da50ee0f58572cafca987a4","url":"tw_stocks/00665L.json"},{"revision":"e95a3a8eaacf66fa0310cb248f503072","url":"tw_stocks/00664R.json"},{"revision":"057bf3e4334867ed0051e18a6e030647","url":"tw_stocks/00663L.json"},{"revision":"16d12a4a61d1300dc641ac094912322b","url":"tw_stocks/00662.json"},{"revision":"5e6074233d03887d081bfa10796245ab","url":"tw_stocks/00661.json"},{"revision":"ee155f54f4399eede12bbe89483e65c1","url":"tw_stocks/00660.json"},{"revision":"3d37fb8ac473a6dfa6c9907dd4473679","url":"tw_stocks/00657K.json"},{"revision":"507b6a888ce891becc05f873a2cf0256","url":"tw_stocks/00657.json"},{"revision":"864545c6ac61e05911bb89e716e9d11d","url":"tw_stocks/00656R.json"},{"revision":"a31a435c665e3ef57f390fef58d373a3","url":"tw_stocks/00655L.json"},{"revision":"bd5a47a2c77953682fc7b476e9cb577d","url":"tw_stocks/00654R.json"},{"revision":"8cff15998ad56f11d35ccf95ee8c6b10","url":"tw_stocks/00653L.json"},{"revision":"378d1a5b98d88b0b653e90d6e1c53349","url":"tw_stocks/00652.json"},{"revision":"cf141ca862b73718ce998dc726721d24","url":"tw_stocks/00651R.json"},{"revision":"01c4ee723732fb7f1a6d789511fd5841","url":"tw_stocks/00650L.json"},{"revision":"895191debf8c8d4b933b820f9c5a613a","url":"tw_stocks/00648R.json"},{"revision":"72c3a313928d90cff9a8a71c0ef16d08","url":"tw_stocks/00647L.json"},{"revision":"23662ff4d34b54dbd37184891b6f6572","url":"tw_stocks/00646.json"},{"revision":"33c632c2461c35a3aaf52ae427cf14dd","url":"tw_stocks/00645.json"},{"revision":"66e8d849fe3cec2a3d8951ca7e503ac3","url":"tw_stocks/00643K.json"},{"revision":"35dc0b4e10bace626a14c87247c8625a","url":"tw_stocks/00643.json"},{"revision":"521cd68582804ad822e813a4c74a0acd","url":"tw_stocks/00642U.json"},{"revision":"82116da49354aed2ee0608cf0f71b791","url":"tw_stocks/00641R.json"},{"revision":"33bf21c79da4b47780076c29701c710d","url":"tw_stocks/00640L.json"},{"revision":"0be3117ee8f87b610c17bbd56c7ae1d9","url":"tw_stocks/00639.json"},{"revision":"e56049ff506a6e774ce62c09e3110488","url":"tw_stocks/00638R.json"},{"revision":"31be3d73a18d25b65664b9c28b8523fa","url":"tw_stocks/00637L.json"},{"revision":"eaf8a335354aa4cfce6305a801bef9b8","url":"tw_stocks/00636K.json"},{"revision":"1075fb0541c28b118f11f48c71038972","url":"tw_stocks/00636.json"},{"revision":"46fe23d8830314bfecd3a75e1b776348","url":"tw_stocks/00635U.json"},{"revision":"a73830bf55b592f8834163d607901daa","url":"tw_stocks/00634R.json"},{"revision":"359241e3e6e83ec4cd35fef3d6d27abd","url":"tw_stocks/00633L.json"},{"revision":"42739fd1c7f1dd77fd21d72b7814947f","url":"tw_stocks/00632R.json"},{"revision":"460527615f94e976ed766c9b53c2b438","url":"tw_stocks/00631L.json"},{"revision":"c2835a4da3bb856b2bc5b6a08bdd2f2a","url":"tw_stocks/00625K.json"},{"revision":"66390e6606cbb57c673823c4dd89e2f0","url":"tw_stocks/006208.json"},{"revision":"0af43e41d5756abc2afc53c6d154cad2","url":"tw_stocks/006207.json"},{"revision":"17e533052e7c9a4934f4d10b95755267","url":"tw_stocks/006206.json"},{"revision":"b8160822b708e93ebf6b8dbec644b815","url":"tw_stocks/006205.json"},{"revision":"610dcc1032d59c57e2d8b51412381148","url":"tw_stocks/006204.json"},{"revision":"a0d44459e1ef3cdb8b5574d2a7dfc1df","url":"tw_stocks/006203.json"},{"revision":"6bef6df63f9b211adb0398d1e7c87fbd","url":"tw_stocks/0061.json"},{"revision":"4aef8c629e833af0f7eb09418688b452","url":"tw_stocks/0057.json"},{"revision":"f3a3c61942e3c47d1b9de2d586aa81e9","url":"tw_stocks/0056.json"},{"revision":"c8a467193741a184a1db8daa941dd801","url":"tw_stocks/0055.json"},{"revision":"fff8d4c04ec06e50ddf9da0af7753db8","url":"tw_stocks/0053.json"},{"revision":"d9b3ed3882c4b28ed8db70465ae47948","url":"tw_stocks/0052.json"},{"revision":"9676be71f43c632b1d6578adab54f2ff","url":"tw_stocks/0051.json"},{"revision":"241757d44c31d9128008e32c0109b45c","url":"tw_stocks/0050.json"},{"revision":"5001f67e958721bf2e0f5749cb721086","url":"tw_stocks/00401A.json"},{"revision":"cfdc3e30a45f0e1b7373e622ea849d2b","url":"tw_stocks/00400A.json"},{"revision":"4176961308fa949f84ba0572152aa86e","url":"subscription/callback.html"},{"revision":"0609ceaa025a3a236f67ce86b5af7e4a","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"d64759c63458aced291cb885e26adcfb","url":"financial/rebalance.html"},{"revision":"84474209b17c5fdc6ff82f4ffe29574d","url":"financial/cashflow.html"},{"revision":"2a4e0a675e6c2598ecd4b650b7f161f0","url":"financial/balance-sheet.html"},{"revision":"f71828c0c9a6bae6c3c82f4995334405","url":"finance/tags.html"},{"revision":"72b7471309bf3434743df11bc2f02808","url":"finance/finance-weekly-2026-04-11.html"},{"revision":"03e1d84a9807471ceb955799f44d1b61","url":"finance/finance-section-created.html"},{"revision":"68c4ec1ed29bcb64ea95da21893f2463","url":"finance/finance-2026-04-16.html"},{"revision":"98278fdc99764eb944010c8acc999f06","url":"finance/finance-2026-04-15.html"},{"revision":"07d275c8cd13c1a65d3606b72a6f831f","url":"finance/finance-2026-04-14.html"},{"revision":"ae2516f55d7ccf7e91976ff3c00a8d1f","url":"finance/finance-2026-04-13.html"},{"revision":"94399a13d8f2a515374d7830ef990fb3","url":"finance/finance-2026-04-10.html"},{"revision":"b291376dbf4658530162f905de422b50","url":"finance/finance-2026-04-09.html"},{"revision":"8219d28ac3807e635b1a71bdd38b9471","url":"finance/finance-2026-04-08.html"},{"revision":"d5db97643e65b1c5c15574ce956ce20e","url":"finance/authors.html"},{"revision":"9074863275277ceaf7118e46e1b0f5b1","url":"finance/archive.html"},{"revision":"a64861904bfa2b60f82b8e9c15a845bf","url":"finance/ai-635.html"},{"revision":"fa601a15bf8b33f94c78f5225490bb12","url":"finance/tags/weekly-report.html"},{"revision":"e14a60cb58abb08e4a26570d0146b45c","url":"finance/tags/newsletter.html"},{"revision":"3811ae601490fd41d12f4aec44cdbdb8","url":"finance/tags/finance.html"},{"revision":"5104b4b381f382a37338097fadefc938","url":"finance/tags/daily-report.html"},{"revision":"f86a9489ffe74e5e8b57b9a194213cae","url":"finance/tags/announcement.html"},{"revision":"c3a938dc8938dea7ba38fda15dd1fdc4","url":"docs/tags.html"},{"revision":"73a04ba5327664b0bdc2f09fda30b803","url":"docs/intro.html"},{"revision":"c75a0c08ba0edc805750fe6a9777d393","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"1dece02de07307c30f3554ab91c11215","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"cdff8a3f722933fb46260f8c1bd8e6df","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"b79fffba59e7de703f8a35e1ce489396","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"224a8371f16974be3377441485065dce","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"5139e9597a57f2990bdd58a978ab8108","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"b845ee26815a9665811824d4aa140c4d","url":"docs/tags/模型控制.html"},{"revision":"d4026efc3297f195a8d2417f667c15b1","url":"docs/tags/top-p.html"},{"revision":"783863e00cb080440810bcdc136d0235","url":"docs/tags/tokenizer.html"},{"revision":"85486fd81b6c851895773d5d1a9ab157","url":"docs/tags/temperature.html"},{"revision":"1384bd25a090c3de42f17c2685a7a960","url":"docs/tags/technical-docs.html"},{"revision":"33cb46e7e1541ee9f2e7fc4558a51c5e","url":"docs/tags/nlp.html"},{"revision":"999bf14dbb650a55d169d8cf8350ea26","url":"docs/tags/llm.html"},{"revision":"3362ec96e471b60cdd4336e3a5509436","url":"docs/tags/git-hub-copilot.html"},{"revision":"9aa35dab66272fb8c7a73eedbaf9f43f","url":"docs/tags/generative-ai.html"},{"revision":"d73c3e0ad2228847eaa4de71dd3b1ac5","url":"docs/tags/development-tools.html"},{"revision":"7d6ebc012dab09b1c0b7b4ddc1664e94","url":"docs/tags/cli.html"},{"revision":"fea130a5e7a381969de410ace3f08fad","url":"docs/tags/claude-code.html"},{"revision":"f6c02c41169a4f7114b63f3e3ad85d92","url":"docs/tags/bpe.html"},{"revision":"9e8ce08bbd385b69005804fcd565a9b9","url":"docs/tags/automation.html"},{"revision":"16917822e86b6347c77ea74638149de4","url":"docs/tags/ai.html"},{"revision":"41f015e5b713a339211c3cec2d131250","url":"docs/tags/agent.html"},{"revision":"855fdfc1b2372716355ca0ee54cbe41b","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"c3de154ee6e0fa01c0262b95cb8725b3","url":"docs/skill/gemini-skills.html"},{"revision":"a75f54561e11efd8b709b07df81bef08","url":"docs/skill/claude-code-skills.html"},{"revision":"1120e42d255040ae0f278771b196d48d","url":"docs/python-workshop/python-init-file.html"},{"revision":"ecf110247051a91737e1851a9835fe6f","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"f2feb81c5f5a21401c4f75a3b4771244","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"dc9174df8bb5a91e5ee2d29dda121a3f","url":"docs/claude-code-series/skills.html"},{"revision":"ee226dbba62085afe6d4c1e37d442aea","url":"docs/claude-code-series/monitoring.html"},{"revision":"a3f2e1d92c70f33004d2674d19004281","url":"docs/claude-code-series/getting-started.html"},{"revision":"c68d9ac5e2bdd619d16b187966d02bd2","url":"docs/category/發文-skill.html"},{"revision":"38ed2b0ade386d0a339d3ed7fb8b26d6","url":"docs/category/戰情室元件-skill.html"},{"revision":"67ed3b820f16bd3cad3d1881c1b7b1f9","url":"docs/category/skill.html"},{"revision":"9ba81f917f27754f010f002129a1f497","url":"docs/category/python-workshop.html"},{"revision":"02e9797839dfd5c3867db3fd8d2a1e3c","url":"docs/category/claude-code.html"},{"revision":"5fbb17294a45c29825aa9732062da888","url":"docs/blog-skill/news-rules.html"},{"revision":"24964387ef0c1cfc5a21b2f79e0f528b","url":"docs/blog-skill/history-rules.html"},{"revision":"fe64c48e09273e13e6d80a590c70c535","url":"docs/blog-skill/finance-rules.html"},{"revision":"a953170e7d1c2297feb28d588ba9e177","url":"auth/callback.html"},{"revision":"ae544297036130e393f3d34c9d7ef932","url":"assets/js/runtime~main.166003ab.js"},{"revision":"5068b8b3a4e7c3b1cf17d8094d61e479","url":"assets/js/main.bfd406f2.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"9afbf8edd3bf24443ec502d9bb5f519b","url":"assets/js/f71290dd.9f0022a4.js"},{"revision":"5226756cc111237230f4688de4bd9ae8","url":"assets/js/f60bf1e1.11fcd7af.js"},{"revision":"8c0b24fa82bcdc32fabdd796f7549a61","url":"assets/js/ef86e77f.83729005.js"},{"revision":"9e386b0ad8c8a1114b299f3369aa7f3d","url":"assets/js/ec1e3285.cb1a5d95.js"},{"revision":"5a2cd4b183380d4383be1d9e81f61c84","url":"assets/js/ea89dec7.80cee8b4.js"},{"revision":"7e7bd250738e991c01e85f2e284b768c","url":"assets/js/e88c4a9c.1f499107.js"},{"revision":"b868cc1b484fead9d19c6f6c9355736d","url":"assets/js/e86a5a75.50f11080.js"},{"revision":"411360668ce1530945309ba14f903bfd","url":"assets/js/e1c57381.94ae0ae3.js"},{"revision":"ac9aa11eea2aa08d69d186f1b6dc3bad","url":"assets/js/dfea6eb9.36fbba14.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"8ed6302be1bd82497aa3885e8fc99442","url":"assets/js/dd726b46.a7a3d40d.js"},{"revision":"42705f60b7e8c8fe83a51834a874f13a","url":"assets/js/dd5b562f.88e4d4b5.js"},{"revision":"26f69e77930fda38bde6bd5b793276d4","url":"assets/js/d7b680af.e1205cec.js"},{"revision":"fb1171a8650d73b2a385dbb0db8df666","url":"assets/js/d7453cde.938564a7.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"0b1fc1869654cfc0e06e5ad5c2a3b485","url":"assets/js/d0c9de85.62013548.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"497e35c125b38c138b927acd2385c5cb","url":"assets/js/cc221b30.68edf43d.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"62bb2557d7117ead558e010d2f6a2182","url":"assets/js/c2f9bb6a.86dc61e8.js"},{"revision":"d7161882f9e529cb493767d90b5f23ad","url":"assets/js/c2e1ff31.c1557720.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"c22e857ef4fe8f330a77631522053253","url":"assets/js/bfcb750f.c7c4b431.js"},{"revision":"fb49a25e749b3667db723150d387424d","url":"assets/js/b95eaafa.bad69c45.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"7a9a5c14d1ecea01d82f71afbfd516eb","url":"assets/js/b283ca86.e0d05200.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"8512d0bf71ee7e99db4fbf2c77899c23","url":"assets/js/a6038fd8.cc35acdd.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"f47cc1c09d395ff514a891f35defcc78","url":"assets/js/99f940e2.3d4fe75e.js"},{"revision":"87740d53e999695bcdc605a81d10d29c","url":"assets/js/99d3b34a.c3183462.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"14675b38f028f7f375316a10ff86ed86","url":"assets/js/93a08f73.83b973f6.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"7a74545acf95753955010e85aed5a064","url":"assets/js/923ed0b3.69b7dd22.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"053b99ee20be118426a2348541077e3d","url":"assets/js/8f79df81.68f71970.js"},{"revision":"1ae220fdc8ea4b55a7169ba42ccfaef9","url":"assets/js/8c20996d.3c1fd22d.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"4a3ffb8c6fc83e522e002706979d6d69","url":"assets/js/898514b1.26f59acf.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"ddd56a910d3c485384cf1cf29f1f0ae9","url":"assets/js/853ca2df.8cd613b6.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"3be89f31c35ebf1f82e2cf51400958e8","url":"assets/js/7fbc1a25.41307dd3.js"},{"revision":"cf88c12738e187d7752f95b4abaf45ff","url":"assets/js/7ce5d7a1.1f3fbfad.js"},{"revision":"70cc8febb73fb8da4b9d30f7da9c982c","url":"assets/js/7af217e3.6b4f5c8b.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"9740071774a07e3101a5a29c9403d73c","url":"assets/js/607acb04.a6437a81.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"2fd2cc8cab01d51304a9499e99ad649f","url":"assets/js/56fce896.c1469924.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"d476ad1c470bcddfb8f47b62713f7582","url":"assets/js/50000426.8996ac48.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"14075efddc01bb0256273ea26212ac7d","url":"assets/js/4810d89a.73009404.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"74fa2954c0e840b0765c1fa2bee4389a","url":"assets/js/43ea09b6.96e46cb1.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"1870b684a01f78851575984bc052b69b","url":"assets/js/3ee3fb84.6be1d3c9.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"2d54e74ce2add40c87528c118ca6e36f","url":"assets/js/3aef7316.45377a47.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"66eade3cac2eb879d5428539150b963e","url":"assets/js/36f337b1.dd3cc1a9.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"a3a89ac3b65fb3883298f2e7408426e1","url":"assets/js/23d26d3d.986d5a8e.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"718efee1d32f21ce1508c22f6d8d04fc","url":"assets/js/191e8113.4727fa1b.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"c1d328ac86dde1a4703dab9d201a2116","url":"assets/js/179b82d4.c4e7b1be.js"},{"revision":"47344d4de49c6652b0d7af43c1dd60b6","url":"assets/js/178b6201.978e6345.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"57627bb2965ed3c36380cb537a2e8ea2","url":"assets/js/177ac620.639d9aa1.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"b527e39a506e6eba536ff3ef17d3e00c","url":"assets/js/162c7fa0.7f4bdc55.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"5679ebd8f6ab45298e87c42a8b97dec5","url":"assets/js/1550c41f.ddfdacad.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"2033f82633f6cbae7c2b5dd9a40b1dfc","url":"assets/js/148a248b.d51015c8.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"1b974ff3dd74ba64713abaf75cb2e3c9","url":"assets/js/1266f974.2640c765.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"43253a9baad7fc06009dbd81554c2b59","url":"assets/js/0e384e19.791c87b5.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"427f6480b25c2d497eb7aea309258d0c","url":"assets/js/0058b4c6.d18ffcf1.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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