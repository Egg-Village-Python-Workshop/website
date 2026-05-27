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
    const precacheManifest = [{"revision":"41f529d3de6f46fc43cbe38d8872d135","url":"tw_stocks.json"},{"revision":"fd1367d858a85c0ec7f361e4bb269673","url":"subscription.html"},{"revision":"fea3338bbe35ee18b4dacfe899e0d0c8","url":"quotes.html"},{"revision":"786b46c139fece16e1dbb01db4f1bbe6","url":"me.html"},{"revision":"8bc97f8148d3369860004b0980e39cca","url":"market-war-room.html"},{"revision":"ed7d5cd93be8632ce71b4d7011ea6339","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"64a12d69aee8391ddd3124ff4c370cc8","url":"index.html"},{"revision":"ee00780ca3d63050afa096ad3a747a99","url":"games.html"},{"revision":"97354e6ff53558b70157dad657e6652e","url":"finance.html"},{"revision":"77e147697715acb68f9f55718d2312a6","url":"feedback.html"},{"revision":"29779272314f3f0bac5f1c499dfd8219","url":"arena.html"},{"revision":"99273323bfceab0558979f48cbf7fbef","url":"404.html"},{"revision":"a542bbf74188414c3cfcbc9cd645b36f","url":"tw_stocks/9958.json"},{"revision":"2e035a3e1db0a0216914f37fe4587aa4","url":"tw_stocks/9955.json"},{"revision":"db8c4a75ed9625d1dfd7e5f0e3d893d7","url":"tw_stocks/9946.json"},{"revision":"9b79bed09f19bafbb70ea0a7359d1370","url":"tw_stocks/9945.json"},{"revision":"d3a34cbb05ecc1649842c8818e1b5b7d","url":"tw_stocks/9944.json"},{"revision":"26de0588fa1337f669f6fc0e30fa3b34","url":"tw_stocks/9943.json"},{"revision":"d699ad655e1073006e3b2eb52faf772e","url":"tw_stocks/9942.json"},{"revision":"778152b93f7bc2a593c86776794bd390","url":"tw_stocks/9941.json"},{"revision":"d6efdda372d7012c2e80597d79da7017","url":"tw_stocks/9940.json"},{"revision":"9094a2b065c564fa2e5cb38748d27096","url":"tw_stocks/9939.json"},{"revision":"e728c70c32bb191e85c804017ac606f4","url":"tw_stocks/9938.json"},{"revision":"8584f17e92cd4b988c7d9af1b956126f","url":"tw_stocks/9937.json"},{"revision":"98d4961ad520899ba31dc1b0bb0252db","url":"tw_stocks/9935.json"},{"revision":"431beb9935fd256412d917293cc606c1","url":"tw_stocks/9934.json"},{"revision":"044276b2fd8d8a1823c4199666e97fca","url":"tw_stocks/9933.json"},{"revision":"b6c4c5c6b020260c1f950e890bc9b496","url":"tw_stocks/9931.json"},{"revision":"cc4cc6cbbabe9b72d21b500c0451fd23","url":"tw_stocks/9930.json"},{"revision":"90c533db7adb1cd3fe6ab8c67bf72fed","url":"tw_stocks/9929.json"},{"revision":"699666cfd4835b8ef85d5d361d496d3b","url":"tw_stocks/9928.json"},{"revision":"b61b15d3490df3e4ca3e85e95ba78280","url":"tw_stocks/9927.json"},{"revision":"d50a336159edbf4e473e019dc59c99a2","url":"tw_stocks/9926.json"},{"revision":"e68b388a0800b88eecf5c87910cad1fc","url":"tw_stocks/9925.json"},{"revision":"cb26cba40207df32db51b3734507fc16","url":"tw_stocks/9924.json"},{"revision":"17a898a9fa5f82bf038ceabdb26ee6b6","url":"tw_stocks/9921.json"},{"revision":"744724ae751537efd663a03d7837303c","url":"tw_stocks/9919.json"},{"revision":"adca855ca99ec750dde3982aba589002","url":"tw_stocks/9918.json"},{"revision":"6076ca863a60452dfc664b6d1702caff","url":"tw_stocks/9917.json"},{"revision":"e530555ca7f4e99c55d1c0f6939cf995","url":"tw_stocks/9914.json"},{"revision":"1b6099953e256aa8a4adc161b9460fdf","url":"tw_stocks/9912.json"},{"revision":"ceddc99af20cc7f89fed010ff1333dc5","url":"tw_stocks/9911.json"},{"revision":"4e31d8f73505e9274eb4bb13c8bca5cb","url":"tw_stocks/9910.json"},{"revision":"f8d19e360be8ea71e9dc42bc4e3dcafe","url":"tw_stocks/9908.json"},{"revision":"f341ae96feb4f70830a5936e7e56b598","url":"tw_stocks/9907.json"},{"revision":"4ba0f15471ebb32404eeae81d3217e3c","url":"tw_stocks/9906.json"},{"revision":"feabf5ca18606335b6b1835d2bfd44d2","url":"tw_stocks/9905.json"},{"revision":"82778365b2bc50328e14930f00b4d159","url":"tw_stocks/9904.json"},{"revision":"5086a6935e01790a586e1f476a434e4d","url":"tw_stocks/9902.json"},{"revision":"e514731ac74e909fec3daa82496809ef","url":"tw_stocks/9802.json"},{"revision":"74433e1e4ac12f10db613d9e79f23dd5","url":"tw_stocks/8996.json"},{"revision":"5e7cd4203a58a6007a2bcd4733a9a772","url":"tw_stocks/8940.json"},{"revision":"4d0763112321507cb11fda3d259c45a3","url":"tw_stocks/8926.json"},{"revision":"9b59500f68b3bba877378bd342f5eeba","url":"tw_stocks/8499.json"},{"revision":"54539df37956e018a0c771d3b99e14db","url":"tw_stocks/8488.json"},{"revision":"094198466cb3f0604901288afb6db281","url":"tw_stocks/8482.json"},{"revision":"234e043428b0604a02886a0f7f329c3c","url":"tw_stocks/8481.json"},{"revision":"296af32d7defb8fa059865c0d2361e42","url":"tw_stocks/8478.json"},{"revision":"8325a0b95b80cb2a7954043a23979526","url":"tw_stocks/8476.json"},{"revision":"eebda644865af26c99881792eb878e66","url":"tw_stocks/8473.json"},{"revision":"1d22c6ffc6b7006f6a708cf06098c35c","url":"tw_stocks/8467.json"},{"revision":"5d0d29c5c0d847eff7bdfe384662640e","url":"tw_stocks/8466.json"},{"revision":"13f6d85b3f66396fa839097a995876f1","url":"tw_stocks/8464.json"},{"revision":"1cf035c886b2f5007adc92f89104f411","url":"tw_stocks/8463.json"},{"revision":"0c6708b22ec6eabbe77baa3d14d93936","url":"tw_stocks/8462.json"},{"revision":"c9628d4f1adbafc30d7fa68ff9fcb3ab","url":"tw_stocks/8454.json"},{"revision":"034ab0a7e2ee85cbf43b7dca5ce22d17","url":"tw_stocks/8443.json"},{"revision":"b2caa101cf7303aa87fb128831fbdb4c","url":"tw_stocks/8442.json"},{"revision":"1f53d0c2b49c8b9d1478d889cc2172ce","url":"tw_stocks/8438.json"},{"revision":"c62ef7ac7aa830f51a9314e2cccdacae","url":"tw_stocks/8429.json"},{"revision":"2a4667cf36f1b826a5b5c4978815b0f0","url":"tw_stocks/8422.json"},{"revision":"1b484de8b7e2ab98e50ba6f2be6e7955","url":"tw_stocks/8411.json"},{"revision":"c26f524c9e042439c3b78284d1cde536","url":"tw_stocks/8404.json"},{"revision":"af3491882d8674b6900b5def2c5e453e","url":"tw_stocks/8374.json"},{"revision":"991f7cef2a8e4c1e6bbecc93e40cc09d","url":"tw_stocks/8367.json"},{"revision":"e878f6d888562bb5245f9074530df66f","url":"tw_stocks/8341.json"},{"revision":"db709749e929dc812fb70da4066e5851","url":"tw_stocks/8271.json"},{"revision":"84c8ef3dffb287684b95e5ce0c5cead1","url":"tw_stocks/8261.json"},{"revision":"4f569b6e26a59037dea1749ee5429db2","url":"tw_stocks/8249.json"},{"revision":"97224ec323747cf75591b7b4218361d1","url":"tw_stocks/8222.json"},{"revision":"03a82f019914e5b3034ce895115d2ffe","url":"tw_stocks/8215.json"},{"revision":"ac7c0c1e1b515948b9273a717ff4ed97","url":"tw_stocks/8213.json"},{"revision":"99c5fa9158d27455bc43fccca5343779","url":"tw_stocks/8210.json"},{"revision":"9a2a1a02ae15cb9dafb4e2f36722ad1c","url":"tw_stocks/8201.json"},{"revision":"c250147b131cc16cdff78cc31fe46c2a","url":"tw_stocks/8163.json"},{"revision":"bec53a16af7e32784af387adfe8c1fa4","url":"tw_stocks/8150.json"},{"revision":"0938af4845a9cecf1b94a9ee78a41902","url":"tw_stocks/8131.json"},{"revision":"ce1c70cb9735aac106eceae628ab8eaf","url":"tw_stocks/8114.json"},{"revision":"814deeec09735a1fcb25510477c9ea72","url":"tw_stocks/8112.json"},{"revision":"328e04e41020c0c24c4d51a441f8ec53","url":"tw_stocks/8110.json"},{"revision":"549c13cd2892b8ad14530e605e0109bc","url":"tw_stocks/8105.json"},{"revision":"cba488c8d849fe71761a98408f7af72a","url":"tw_stocks/8104.json"},{"revision":"b05a178bc3c31c9d5a0d22ae890394d5","url":"tw_stocks/8103.json"},{"revision":"d922ef57f23b4822c126a0d88d920204","url":"tw_stocks/8101.json"},{"revision":"db9df133ad09bbb575d0889b65b02329","url":"tw_stocks/8081.json"},{"revision":"21c5eba78f67c5f6ebd9169b6bdf0079","url":"tw_stocks/8072.json"},{"revision":"94c5e6cc68c05c74f5d2b062a3b766d1","url":"tw_stocks/8070.json"},{"revision":"eff98c51dec3ed809a89e8d9a2dce56c","url":"tw_stocks/8046.json"},{"revision":"c12c432905309ab8451910e45be59bdc","url":"tw_stocks/8045.json"},{"revision":"d21e139e53c59150ea0a4d9b6b785f03","url":"tw_stocks/8039.json"},{"revision":"6bc0ca4d054e443a3ea0bfdbb0dba09d","url":"tw_stocks/8033.json"},{"revision":"9c4ca9ab7e6545eb7cbe9286478ecb3b","url":"tw_stocks/8028.json"},{"revision":"6011fd52356ba643d61bdf849346c9d6","url":"tw_stocks/8021.json"},{"revision":"5c5e8ed862d7ae531826e8546ac21522","url":"tw_stocks/8016.json"},{"revision":"634789e06138bf7511c2a480cf45b28b","url":"tw_stocks/8011.json"},{"revision":"7d54aad27159fbef1fada75c02e7154c","url":"tw_stocks/7822.json"},{"revision":"7fb3e0ba612a0e0065c63157d6fd2153","url":"tw_stocks/7821.json"},{"revision":"a1d41bb0946544787adef9705a6b6f2e","url":"tw_stocks/7818.json"},{"revision":"3ce9e6e8293e1b73d55cb699ea095295","url":"tw_stocks/7799.json"},{"revision":"7b7623e0088290360aa9862b88aa8b1a","url":"tw_stocks/7795.json"},{"revision":"e6bfad4caaa53e611e382601d0030472","url":"tw_stocks/7791.json"},{"revision":"88fdbebe19ca6a91585a11d4339e1d13","url":"tw_stocks/7788.json"},{"revision":"50b87d54cc7a115a8c25a6c494cc1d52","url":"tw_stocks/7786.json"},{"revision":"0d18c1b3474395980e3743995f2571cc","url":"tw_stocks/7780.json"},{"revision":"182f0b766861352cb05bc8d2cd2e79fc","url":"tw_stocks/7769.json"},{"revision":"346a9a887ec59c19f6ba3863d1bc5a94","url":"tw_stocks/7768.json"},{"revision":"076328f821538b4e7564e6c0a2ad138b","url":"tw_stocks/7765.json"},{"revision":"0db61ed247062dcaec8f48580517ef4d","url":"tw_stocks/7760.json"},{"revision":"453dfbd421320e75c2ae408d2eef519f","url":"tw_stocks/7750.json"},{"revision":"a1995fc26d66f40ef2ba4d8f6f09fa1d","url":"tw_stocks/7749.json"},{"revision":"4b474a7d636d66c0b553469e75095ac1","url":"tw_stocks/7736.json"},{"revision":"0354dbb3bcde2fad7ed02cacbd2d7a8e","url":"tw_stocks/7732.json"},{"revision":"ab34c48d52afa3fbec4a24df4344c965","url":"tw_stocks/7722.json"},{"revision":"fb8412de0ea1e8c50701a52ea684eda1","url":"tw_stocks/7721.json"},{"revision":"025ca1503b72a1cd317358c483220bea","url":"tw_stocks/7711.json"},{"revision":"698d45ace8c392c1af23a3be00d3d53b","url":"tw_stocks/7705.json"},{"revision":"812f00914a0b0926fc42feef7eed70f8","url":"tw_stocks/6994.json"},{"revision":"97d310c1b322482b6dcb4f57df23ea78","url":"tw_stocks/6965.json"},{"revision":"580705c855a3330cf13fabb5722dd892","url":"tw_stocks/6962.json"},{"revision":"ba1d63d3f958c6b798f80dca86316e68","url":"tw_stocks/6958.json"},{"revision":"6987d854102edad137eb00c204368eaa","url":"tw_stocks/6957.json"},{"revision":"bde6c29b83b8283eed4f7ee5da28a27a","url":"tw_stocks/6952.json"},{"revision":"3c53bc9defa146547e500a17592323fe","url":"tw_stocks/6944.json"},{"revision":"fdf2c7c63d8741d79244cb42558b9c27","url":"tw_stocks/6937.json"},{"revision":"87302f7ba9eca1209874c9cf5db6ba66","url":"tw_stocks/6936.json"},{"revision":"80b8ed0d9bdb27685d2c360efb825a59","url":"tw_stocks/6934.json"},{"revision":"0ecca87e25a550db6dd0d5d17071be99","url":"tw_stocks/6933.json"},{"revision":"cf336680459d36a5b08632efd7b16a1f","url":"tw_stocks/6931.json"},{"revision":"aa977a1b9b595e1fd31c938c6ed3b6f4","url":"tw_stocks/6928.json"},{"revision":"aa9ce45fd899b296e2cef6869331d96f","url":"tw_stocks/6923.json"},{"revision":"2034182b9734af719a113178022569e2","url":"tw_stocks/6919.json"},{"revision":"4b1c2e3c2119375665c0283969fc8f93","url":"tw_stocks/6918.json"},{"revision":"79a74b447b99873068db3eb23e76025b","url":"tw_stocks/6916.json"},{"revision":"4da903745bd5c96f12477d41e85c864d","url":"tw_stocks/6914.json"},{"revision":"f3cfa6cc2b5ced8fdbc22e21c9c8511c","url":"tw_stocks/6909.json"},{"revision":"3b7915b789e25560364ed59bb3bc9415","url":"tw_stocks/6906.json"},{"revision":"46e9c2288a7a518c6b912ce2a823b5c5","url":"tw_stocks/6902.json"},{"revision":"ba43dccb0b5fa4fe43c89bdf1ef4e9ae","url":"tw_stocks/6901.json"},{"revision":"bc388ceeccd931d5f52b77ab49cc3115","url":"tw_stocks/6890.json"},{"revision":"bd3e6e6374b2e77196c7d5aeda1e52fa","url":"tw_stocks/6887.json"},{"revision":"3d23238877d5cc733197ea29176e8c18","url":"tw_stocks/6885.json"},{"revision":"c1545ece837b5ce3f0439e59387a4c93","url":"tw_stocks/6873.json"},{"revision":"ddd52b070b693f3d1d60f8084110bb4c","url":"tw_stocks/6869.json"},{"revision":"67442ac045ff88839ed0ea97d0179c96","url":"tw_stocks/6863.json"},{"revision":"ad3ce3353e6c4a417fb92eb9e6d8eaf7","url":"tw_stocks/6862.json"},{"revision":"6163a361da1d05e0f04bbee9a6e8495e","url":"tw_stocks/6861.json"},{"revision":"9fcc66160b11a1020f9b9325a0736b03","url":"tw_stocks/6838.json"},{"revision":"2500541c26341971cb253f2ad8ae8329","url":"tw_stocks/6835.json"},{"revision":"9cee359c06bfda94cdd05b97abed44c7","url":"tw_stocks/6834.json"},{"revision":"b1b34c646e978525053e8f030eb08926","url":"tw_stocks/6831.json"},{"revision":"b4aee800fd5d33ceaec71abd567359cc","url":"tw_stocks/6830.json"},{"revision":"998321c7183b2f0fbcdb0e133d05d81a","url":"tw_stocks/6807.json"},{"revision":"5a91f92a672facf011ac039d870fa26a","url":"tw_stocks/6806.json"},{"revision":"cd7a79a3e1c4fc865f8ab8267be92009","url":"tw_stocks/6805.json"},{"revision":"0bc3891186312ddbb336792c9b630688","url":"tw_stocks/6799.json"},{"revision":"2ba88723434e315022cb90103f79bce7","url":"tw_stocks/6796.json"},{"revision":"55a4a5c2bbf2f8dba58fb8b24e052486","url":"tw_stocks/6794.json"},{"revision":"ae0791718213a46748bdaa518874c42a","url":"tw_stocks/6792.json"},{"revision":"a69a62ebae811b18c42830097b792ecc","url":"tw_stocks/6790.json"},{"revision":"a2c329447b2deb389c236186daf1b9cd","url":"tw_stocks/6789.json"},{"revision":"118a59a44d1ada21ddda4ab5da3e967e","url":"tw_stocks/6782.json"},{"revision":"e7ad1f68e958b990086ef0134a86e536","url":"tw_stocks/6781.json"},{"revision":"63248233b47a07c0c3c07b6455190eb6","url":"tw_stocks/6776.json"},{"revision":"2f4551f90e5a2dd7b9a9ad3fd7efd8e1","url":"tw_stocks/6770.json"},{"revision":"4bf638f52deaddcaea2260f7e11e6aeb","url":"tw_stocks/6768.json"},{"revision":"d292e6b2e900ae317a023eda2413b160","url":"tw_stocks/6757.json"},{"revision":"63eec7ebd9700ee3a52bcd6bcaa9c4f8","url":"tw_stocks/6756.json"},{"revision":"27ad280fcf3526319e53ffa5052a9132","url":"tw_stocks/6754.json"},{"revision":"c0e124e2e527e0891af1fa2ebeb25a28","url":"tw_stocks/6753.json"},{"revision":"f19073d1c03fb22917a03c28b2a20b35","url":"tw_stocks/6743.json"},{"revision":"cd106f838ac47d800730b1342ce6d563","url":"tw_stocks/6742.json"},{"revision":"c340296818ae63f2bb8cdda4051e3d1e","url":"tw_stocks/6722.json"},{"revision":"46997520aa965dd94b0d04b94b1992d1","url":"tw_stocks/6719.json"},{"revision":"9b54d300edb78192957492ce4686c2c8","url":"tw_stocks/6715.json"},{"revision":"b1d074726cbd0a68bc99c7f6030ac883","url":"tw_stocks/6706.json"},{"revision":"a8a7de6b72d6fe940a5a3251a14e02e2","url":"tw_stocks/6698.json"},{"revision":"3518018bf7dcfa78767b4425bb6826a2","url":"tw_stocks/6695.json"},{"revision":"1c87e9cdca19a4c2fde34d9cbee9fd1a","url":"tw_stocks/6691.json"},{"revision":"0f4504aaabefa939836492d9e4daa69c","url":"tw_stocks/6689.json"},{"revision":"c5979ed0d48f0484d94ffba0a5cd8754","url":"tw_stocks/6674.json"},{"revision":"ef04a6fddbdae32f53b4b2a9d345965c","url":"tw_stocks/6672.json"},{"revision":"9b5214fb2fcf003eda7521bedb54479d","url":"tw_stocks/6671.json"},{"revision":"0c1f06accffb10836f95479946d69569","url":"tw_stocks/6670.json"},{"revision":"d1546741da20646d32876e1a55d7ab8a","url":"tw_stocks/6669.json"},{"revision":"ad8f064b26eec77e6f4dbde1488f3679","url":"tw_stocks/6668.json"},{"revision":"71d373bb1683b7e57f73ed6a619fd98c","url":"tw_stocks/6666.json"},{"revision":"e0af1ed8a64f95a1483606254294ab31","url":"tw_stocks/6658.json"},{"revision":"466443c6b0074853026d090988ed3bcd","url":"tw_stocks/6657.json"},{"revision":"67359f29a14b0d3858a3734587b5e81b","url":"tw_stocks/6655.json"},{"revision":"a8aa33b7b14bae3b1ad120ca2a566c14","url":"tw_stocks/6641.json"},{"revision":"f5177fa791440b57d459a0d7e76643c0","url":"tw_stocks/6625.json"},{"revision":"5c368257d4492ba133996228ebb754c7","url":"tw_stocks/6614.json"},{"revision":"554c0a78e444f113f7f139eefa8322c0","url":"tw_stocks/6606.json"},{"revision":"223e80e2905e66e51e38c2606afb3ef6","url":"tw_stocks/6605.json"},{"revision":"af907a74737146a15a5373bfce3d2805","url":"tw_stocks/6598.json"},{"revision":"9bd18ebd76c6ef2a8f946aae6cc0d5d4","url":"tw_stocks/6592.json"},{"revision":"3c6f007187353973dcbc16b066ac3b39","url":"tw_stocks/6591.json"},{"revision":"1e206772e167e2025d92dbd7fd0ab4cc","url":"tw_stocks/6589.json"},{"revision":"f923ad095bb15033e0b2fd1a2f2c5582","url":"tw_stocks/6585.json"},{"revision":"d7c868d34a1b8a0636812704c8352ca8","url":"tw_stocks/6582.json"},{"revision":"435a378dbe167478d7b7170cdf37c023","url":"tw_stocks/6581.json"},{"revision":"084b399a762c2508764bc24acc75c021","url":"tw_stocks/6579.json"},{"revision":"c74ab9bef894a54d19bbf2811f69b2e9","url":"tw_stocks/6573.json"},{"revision":"6c763b5464b09a8d407cd2c71146ec9f","url":"tw_stocks/6558.json"},{"revision":"499ee8d921d036d4d431459fc9402d04","url":"tw_stocks/6552.json"},{"revision":"bb5c4f25c94470b762c36cc42fb88564","url":"tw_stocks/6550.json"},{"revision":"f9c81a25fed5887c1925e50769f24c5f","url":"tw_stocks/6541.json"},{"revision":"0ff69980fe245585e0413350362393b0","url":"tw_stocks/6533.json"},{"revision":"0e93a9798c3e26a5e7f96f58853ba5a6","url":"tw_stocks/6531.json"},{"revision":"94fbb8aaf3141ece2dcded81dd1049d8","url":"tw_stocks/6526.json"},{"revision":"ee12ae7c2fe0133b4789d30efbe78ace","url":"tw_stocks/6525.json"},{"revision":"60e2e92370349ebde7344e81caafd496","url":"tw_stocks/6515.json"},{"revision":"0435247cfdba2f4c91d68be7d6ee8abf","url":"tw_stocks/6505.json"},{"revision":"08437d24799266f510cb536607e61cd2","url":"tw_stocks/6504.json"},{"revision":"39e9df371536842b6dc8c00e2ee065d9","url":"tw_stocks/6491.json"},{"revision":"ce1b9711c4d737e5e04fe26b3a3c0a6b","url":"tw_stocks/6477.json"},{"revision":"4079030d09d8880280663347fbde63d6","url":"tw_stocks/6472.json"},{"revision":"3bd3ea945198be77decc38cebcd77794","url":"tw_stocks/6464.json"},{"revision":"062352f63d1d990dfb895caa3504a94b","url":"tw_stocks/6456.json"},{"revision":"6481584c8899164dd00cf639f9bb09d4","url":"tw_stocks/6451.json"},{"revision":"ff9ebc879ff70d931d1c8431e7869a32","url":"tw_stocks/6449.json"},{"revision":"3f330dcf498e31e8b67f006212ebf126","url":"tw_stocks/6446.json"},{"revision":"e35342b76ff38fe6b43775b8a5d34a1b","url":"tw_stocks/6443.json"},{"revision":"130c668307a77c8c30cd73d7ef0c1c2d","url":"tw_stocks/6442.json"},{"revision":"14bb50561c23405195d0d88e59e99c96","url":"tw_stocks/6438.json"},{"revision":"05369808c37e021a7dee5a52325401d6","url":"tw_stocks/6431.json"},{"revision":"723b9311da5a5323cef0f7a6f422668e","url":"tw_stocks/6426.json"},{"revision":"ddc1bbc224f217e5223941fbb948dd1d","url":"tw_stocks/6416.json"},{"revision":"c9bbab5fa7ac8c471d82b0c8e4005cab","url":"tw_stocks/6415.json"},{"revision":"2ebcff5a201ddec412c6d980a4ce2fd0","url":"tw_stocks/6414.json"},{"revision":"34d5604b218505f3958538b72197cd32","url":"tw_stocks/6412.json"},{"revision":"1c66dd1309dcbe0c548566f78e60e79d","url":"tw_stocks/6409.json"},{"revision":"a9890260d354ba91f7c070868bfd0764","url":"tw_stocks/6405.json"},{"revision":"b907426166dc5f08cce05fef2260aff0","url":"tw_stocks/6285.json"},{"revision":"4b957a5945d898e43b580ed93b65aad5","url":"tw_stocks/6283.json"},{"revision":"7ee815aaeae3d48b5bea14adb2513db4","url":"tw_stocks/6282.json"},{"revision":"7aabc818ef10a6f5a218784a743ce00c","url":"tw_stocks/6281.json"},{"revision":"b3988a7c3f648f5bd222ef39f9f1df6c","url":"tw_stocks/6278.json"},{"revision":"3db18fb074cd3790a672a9661614fcd8","url":"tw_stocks/6277.json"},{"revision":"ed1d4a29cc9f5e1731f0414fb4e674cf","url":"tw_stocks/6272.json"},{"revision":"62a65bb9c471e42eb9c607af322e3221","url":"tw_stocks/6271.json"},{"revision":"f1ddb8eb477617be99b1722514d35893","url":"tw_stocks/6269.json"},{"revision":"3dee154bf0cc96204387798046691dcb","url":"tw_stocks/6257.json"},{"revision":"cf9291326cf1240c8a2f0edf9ff93f6e","url":"tw_stocks/6243.json"},{"revision":"48b3d0f3070e7a7e79dafaa9650a7d1d","url":"tw_stocks/6239.json"},{"revision":"01349db41f7f95602c6c19dd5df75af4","url":"tw_stocks/6235.json"},{"revision":"649c7537313e68536d27dfea4c9fd9ca","url":"tw_stocks/6230.json"},{"revision":"1dbd9ac4cbb33d821b7366f20fb313e0","url":"tw_stocks/6226.json"},{"revision":"65d0b44a57e7d6da7b4460f9dba6dfb6","url":"tw_stocks/6225.json"},{"revision":"5a7e285050c58b3ed1089069cbd60303","url":"tw_stocks/6224.json"},{"revision":"c496e729b384a597ae5ebe2b7db50e89","url":"tw_stocks/6216.json"},{"revision":"e6192f89fd81992051a747dc2abfd77d","url":"tw_stocks/6215.json"},{"revision":"f710fb728358211517e668e98105f461","url":"tw_stocks/6214.json"},{"revision":"883ff30bce6228d27229f72e389ab73f","url":"tw_stocks/6213.json"},{"revision":"242e392e299899d1442bd819551004b1","url":"tw_stocks/6209.json"},{"revision":"d9b5021f04b95e830b3ce357a4b65a5c","url":"tw_stocks/6206.json"},{"revision":"2e9d42feb9840fd140aadd5be077df6c","url":"tw_stocks/6205.json"},{"revision":"266f09c14a4a97c542cbafd0e5bdca24","url":"tw_stocks/6202.json"},{"revision":"83dd8c4488672773108ffb2680afcb09","url":"tw_stocks/6201.json"},{"revision":"a30d73900a5104021ee5084ead2bd370","url":"tw_stocks/6197.json"},{"revision":"675ce0376c4e4a7ecf0bd76c37fd37c0","url":"tw_stocks/6196.json"},{"revision":"31083241893bf5df9079a55a6ff075a2","url":"tw_stocks/6192.json"},{"revision":"eeb6268ab95d3471748684bdebf1d6d9","url":"tw_stocks/6191.json"},{"revision":"f88ba2eb2228a10d0f17887d7d212c98","url":"tw_stocks/6189.json"},{"revision":"1f07313dee313ca4eda2b2c58902d5ae","url":"tw_stocks/6184.json"},{"revision":"e8be8044005d6f523ea0eb7262e1f0a4","url":"tw_stocks/6183.json"},{"revision":"c31abac5a5a95b15294e464933d0293e","url":"tw_stocks/6177.json"},{"revision":"01008977728f578c544d5ffb73f95e49","url":"tw_stocks/6176.json"},{"revision":"916189ecdbf2f26aef09ac4af4734d52","url":"tw_stocks/6168.json"},{"revision":"d25d61a0254f3fe9bfd4a91b45a152b9","url":"tw_stocks/6166.json"},{"revision":"54c4db964952c857bc88e485fad864a7","url":"tw_stocks/6165.json"},{"revision":"3c66d479240bfce8cb6e9ee5d5048a30","url":"tw_stocks/6164.json"},{"revision":"0ac43b963d5cbfd3a0ea2a478acb1c16","url":"tw_stocks/6155.json"},{"revision":"8b90bd57f0b175538b9f4357367becee","url":"tw_stocks/6153.json"},{"revision":"74f52ebf1783564d7f5a4b953761e5d6","url":"tw_stocks/6152.json"},{"revision":"25c583cf713ba55950cecb5adc0607e4","url":"tw_stocks/6142.json"},{"revision":"30231b056e3cd9eca486ae36199c1991","url":"tw_stocks/6141.json"},{"revision":"5e4204598208b59237287cddc3a0deec","url":"tw_stocks/6139.json"},{"revision":"83deecf34ec217d84c7f9e29677e5e5d","url":"tw_stocks/6136.json"},{"revision":"416565fb897d075325c9fc178cb063a1","url":"tw_stocks/6133.json"},{"revision":"77855badd0ba158e41aebb45f2566e08","url":"tw_stocks/6128.json"},{"revision":"557a6b50c663887427b4dffd17f18d29","url":"tw_stocks/6120.json"},{"revision":"364c33e58448636c005571967e22057b","url":"tw_stocks/6117.json"},{"revision":"79cf8c7cd42e0047aab8cefd8cce09cd","url":"tw_stocks/6116.json"},{"revision":"1e927f0cf9b3bc6b04678fa227951a45","url":"tw_stocks/6115.json"},{"revision":"cba3001582d1766644e560e527b06931","url":"tw_stocks/6112.json"},{"revision":"70e58b55f5a2c0cd472ce0f03fa7c32d","url":"tw_stocks/6108.json"},{"revision":"22d008b4119656f461e8e1ac18d83e25","url":"tw_stocks/6024.json"},{"revision":"2b5828d1e39676382184efeae875279f","url":"tw_stocks/6005.json"},{"revision":"f0b13e99b8ba2e5c15707853c509d79f","url":"tw_stocks/5907.json"},{"revision":"15d46bd29a33a54a9dd2ae557e8f1402","url":"tw_stocks/5906.json"},{"revision":"835151c3dd90030929933cddca8b65ac","url":"tw_stocks/5880.json"},{"revision":"0309f4612dd25fb2ce234ce1a7bfc1a9","url":"tw_stocks/5876.json"},{"revision":"6c338c6a1bc0a5eaa161764c15c7ad2d","url":"tw_stocks/5871.json"},{"revision":"7a4ce663a69e805e49853e153b84652d","url":"tw_stocks/5706.json"},{"revision":"398ebe475eaa301a3dfdb628112be1ff","url":"tw_stocks/5608.json"},{"revision":"090720efe32d5e49ec0e3aee908c736c","url":"tw_stocks/5607.json"},{"revision":"a8051cf2bfa4f256d5a38de31a65e0ab","url":"tw_stocks/5546.json"},{"revision":"5f529d0064f6608fb53c43d3b23e37dd","url":"tw_stocks/5538.json"},{"revision":"8524f476cf4b1dd593a7b681737d46e2","url":"tw_stocks/5534.json"},{"revision":"c81f2aa37452b757d2f1b47632fa3f29","url":"tw_stocks/5533.json"},{"revision":"73973d17f8f7ee6cade0a151dc28beb8","url":"tw_stocks/5531.json"},{"revision":"ded7739f55d72f86dd7634b46dfb0e61","url":"tw_stocks/5525.json"},{"revision":"a5780bc7f97f2381d1e9c678af7547ca","url":"tw_stocks/5522.json"},{"revision":"783a654a738b603e5f4b6a59b1843b53","url":"tw_stocks/5521.json"},{"revision":"282c7051459c3aab15565ae0a26d7b82","url":"tw_stocks/5519.json"},{"revision":"811f5152b9780a3a5f0bf54ad794dda0","url":"tw_stocks/5515.json"},{"revision":"455b8769ef50fd3587794a32b3d93f00","url":"tw_stocks/5484.json"},{"revision":"b76fd1a6e6b21ea46a4dc558cadcca05","url":"tw_stocks/5471.json"},{"revision":"a744ec8cd454806cddbfb1e94ceae5a2","url":"tw_stocks/5469.json"},{"revision":"4969e4dc1208e576f5d3a8c6400e2c3a","url":"tw_stocks/5434.json"},{"revision":"167bf58602a2d2c8d7518c8db22d609f","url":"tw_stocks/5388.json"},{"revision":"80f8cfbb43ac06519d0c23b3bb6458f1","url":"tw_stocks/5306.json"},{"revision":"664f7def7d1d567b81c1121a78fed348","url":"tw_stocks/5292.json"},{"revision":"be2243b5ea99e47eb7e6f4e6af751ce0","url":"tw_stocks/5288.json"},{"revision":"601afb507453f91eec217fd9a6fe5b1b","url":"tw_stocks/5285.json"},{"revision":"3f1dcd891bb882d17fe9032a71142c93","url":"tw_stocks/5284.json"},{"revision":"644af1438767f7b4d39b31226de4f7be","url":"tw_stocks/5283.json"},{"revision":"79d6951d838c96a45f868ba736e6dd05","url":"tw_stocks/5269.json"},{"revision":"1b7e4d7ba2cc14f627b52210ec62ad72","url":"tw_stocks/5258.json"},{"revision":"fbbb33fc887e40c73bead82b8baaa7de","url":"tw_stocks/5244.json"},{"revision":"fefc0c28ab24181885035f9709ef14d1","url":"tw_stocks/5243.json"},{"revision":"fac851c957209124c222258e272e7891","url":"tw_stocks/5234.json"},{"revision":"837163755d7d5908050ed70c98d5c009","url":"tw_stocks/5225.json"},{"revision":"0ab098182b89fe778b97c415a6809044","url":"tw_stocks/5222.json"},{"revision":"04d2f089142826d191c678819dd32281","url":"tw_stocks/5215.json"},{"revision":"081e7693b73fcd11b3a2187a99c61132","url":"tw_stocks/5203.json"},{"revision":"8b145c33aaba5f23184aa71afe92557a","url":"tw_stocks/5007.json"},{"revision":"7af969f203e608dcb2f96f9522043d2d","url":"tw_stocks/4999.json"},{"revision":"90c88ed461723a1d9e5e01e2760888cb","url":"tw_stocks/4994.json"},{"revision":"6f6456e36c8ea468072ea474f7e8c4f5","url":"tw_stocks/4989.json"},{"revision":"d45ae0ef3f3034ce7ae5bf13d166c7e7","url":"tw_stocks/4977.json"},{"revision":"6d8aedadeb47d3ca8d6fb665ef6b4545","url":"tw_stocks/4976.json"},{"revision":"54d108a6d898b5aa69a953bb8e8f2af1","url":"tw_stocks/4968.json"},{"revision":"00f644b6a7f05fdab0e19d2b77330d68","url":"tw_stocks/4967.json"},{"revision":"d7090f1ab8e231b40b004f9c66fe4cc5","url":"tw_stocks/4961.json"},{"revision":"0d08add9e41acc0f15ae36ee55d1606c","url":"tw_stocks/4960.json"},{"revision":"816abe3f2ab0a02b48b4d1ef13544bac","url":"tw_stocks/4958.json"},{"revision":"9261dc6c8073f3c3a1d044204b1a8edf","url":"tw_stocks/4956.json"},{"revision":"c6d36338488ab3770036554d767e8d77","url":"tw_stocks/4952.json"},{"revision":"2a346d82ce8a1e05a1d033316b71f59a","url":"tw_stocks/4949.json"},{"revision":"7d29d84f8566644a2aff462abd52591f","url":"tw_stocks/4943.json"},{"revision":"af708d72117e7957eb8ec11948c40a39","url":"tw_stocks/4942.json"},{"revision":"b1a8769587d63bc86f5bf5543587ec55","url":"tw_stocks/4938.json"},{"revision":"7cd4bdad63cd656d16ff7892c7af6659","url":"tw_stocks/4935.json"},{"revision":"77a218a50a13891427b0271578af781e","url":"tw_stocks/4934.json"},{"revision":"0572a0c57e9064485356119456048899","url":"tw_stocks/4930.json"},{"revision":"1e53f39969c7553bc7e2262b242a868d","url":"tw_stocks/4927.json"},{"revision":"a34e26befcc41c4691002a28b33cd208","url":"tw_stocks/4919.json"},{"revision":"3e6fdbbed289e5cdf583b0cdcbd04d06","url":"tw_stocks/4916.json"},{"revision":"d69c9f30a9b741515b940e4b8f45c5e0","url":"tw_stocks/4915.json"},{"revision":"2997cfefdcae358fae955d605fbb07da","url":"tw_stocks/4912.json"},{"revision":"1433a0583ba4983306c4307656c7f48e","url":"tw_stocks/4906.json"},{"revision":"0573a946adb167baab7133d1fd2de21c","url":"tw_stocks/4904.json"},{"revision":"e961c2637cc0d5d8fa75b00d93b4ad31","url":"tw_stocks/4807.json"},{"revision":"3048be2eb70f0cc523c89e740037866b","url":"tw_stocks/4771.json"},{"revision":"70f4e9ac482e68f690d4b426855a4273","url":"tw_stocks/4770.json"},{"revision":"f006b897226fbadf953724ec17c2ca63","url":"tw_stocks/4766.json"},{"revision":"a0ae77793be784f710c8f1e03c778895","url":"tw_stocks/4764.json"},{"revision":"6977b335f9644a4bf67ad7eddc407dc4","url":"tw_stocks/4763.json"},{"revision":"ac27349f6778cb1ec804b6cc425c83cc","url":"tw_stocks/4755.json"},{"revision":"24773080b1e3d3c5fb1d87a70c6499fb","url":"tw_stocks/4746.json"},{"revision":"c65497f2e99dcdd35c45e5c69c6db8fc","url":"tw_stocks/4739.json"},{"revision":"6b983176e041ac7831609a7deda5a5d9","url":"tw_stocks/4737.json"},{"revision":"0059a80443a6b140e9ad0b69d92361fc","url":"tw_stocks/4736.json"},{"revision":"7fb652cc888f5e011815d6a3f036c4ab","url":"tw_stocks/4722.json"},{"revision":"b2927997005cf16048312304872d71b5","url":"tw_stocks/4720.json"},{"revision":"4b3281dea28d759a2428f5861e9c1fd1","url":"tw_stocks/4588.json"},{"revision":"306fcc3c7ac3791bce248a47af8cbc1f","url":"tw_stocks/4585.json"},{"revision":"5eef625fdcfa3192288266c9fae2799b","url":"tw_stocks/4583.json"},{"revision":"2da6a68cf2a15d14891575dd19c475b7","url":"tw_stocks/4581.json"},{"revision":"9ee5fca18dbe0f6fe36d1710c228d37b","url":"tw_stocks/4576.json"},{"revision":"0427f8cc58711f768a960c5ebb1f288f","url":"tw_stocks/4572.json"},{"revision":"d567f7c1912ecfaff0d1e5e15db35542","url":"tw_stocks/4571.json"},{"revision":"039ef3cc95ed47d08c5c8f86291a4fee","url":"tw_stocks/4569.json"},{"revision":"0bfa39ff7a0d1a7864fbc5901802c376","url":"tw_stocks/4566.json"},{"revision":"e0a1aeade535bc1ba764ae5cae7dcf04","url":"tw_stocks/4564.json"},{"revision":"8a55722cd54987a318bc6c08591b978c","url":"tw_stocks/4562.json"},{"revision":"132bd28d189d30d6c754ce3b4e26db94","url":"tw_stocks/4560.json"},{"revision":"7e859a268a95ea9fc831428f575a428c","url":"tw_stocks/4557.json"},{"revision":"0ec6f0648e808bf7713b6ce21e2806be","url":"tw_stocks/4555.json"},{"revision":"0a672675ea58d243a7c86c09eb232169","url":"tw_stocks/4552.json"},{"revision":"7a2054d8844b34893d14198d15e91bcb","url":"tw_stocks/4551.json"},{"revision":"db6c99a3ab6fd27a32175ab02b602e66","url":"tw_stocks/4545.json"},{"revision":"50e61a38097a7f17bbf9d91e39476b96","url":"tw_stocks/4540.json"},{"revision":"496528223781de4c472500c2a1c242b9","url":"tw_stocks/4536.json"},{"revision":"a528a119ddbc38e7cfac31d2b3656e77","url":"tw_stocks/4532.json"},{"revision":"d5bd2d665a26ebf884c4df3ff450d169","url":"tw_stocks/4526.json"},{"revision":"d9cac09444bce75ad41c1620b25225df","url":"tw_stocks/4441.json"},{"revision":"8769437a07c2602e333d9c154dfdf7ec","url":"tw_stocks/4440.json"},{"revision":"53176e7534a4844af4a66129698b78c3","url":"tw_stocks/4439.json"},{"revision":"3aa84dbd9d45ea93086e93d883b7a629","url":"tw_stocks/4438.json"},{"revision":"840eeb362e137161cd155eefb9eedadf","url":"tw_stocks/4426.json"},{"revision":"c37cadee7375f5143332067bef940310","url":"tw_stocks/4414.json"},{"revision":"7e269138ea2e71fd7b0b9f9a8ff80a43","url":"tw_stocks/4306.json"},{"revision":"3a181e840e06d78071e3799f3ea64759","url":"tw_stocks/4190.json"},{"revision":"b33c31994e60f8a0dcf695cd0e1f4916","url":"tw_stocks/4178.json"},{"revision":"3fc0601d5c45685e4ca4ee0eb6ef6d9a","url":"tw_stocks/4169.json"},{"revision":"85b9bb56f064c8680252cd1cc6a33234","url":"tw_stocks/4164.json"},{"revision":"1d74fe980194ba8c72ce785fb2983ab1","url":"tw_stocks/4155.json"},{"revision":"00849118831685e4b01c462639c3c082","url":"tw_stocks/4148.json"},{"revision":"c66417d42cf7012041c6d98122604641","url":"tw_stocks/4142.json"},{"revision":"615aedd64778eaa008f39ed8b8046cfd","url":"tw_stocks/4137.json"},{"revision":"81e56d689626db7169e1fc92380b6e11","url":"tw_stocks/4133.json"},{"revision":"c275e46271384333ffa4f32554bdfaaa","url":"tw_stocks/4119.json"},{"revision":"a58b6ec2e6d6f1d09481b4ea9c06b6e5","url":"tw_stocks/4108.json"},{"revision":"aff7d0f2b1370b576ce0e20d3b4704db","url":"tw_stocks/4106.json"},{"revision":"6cfa762c129dc663b58732c4ca656d42","url":"tw_stocks/4104.json"},{"revision":"e2dffc73719a1d0b032bf9c56cbc645a","url":"tw_stocks/3717.json"},{"revision":"315502eb7e4313813f1af670fb0ba6f1","url":"tw_stocks/3716.json"},{"revision":"91c6fae0ce77d9629f91cad1454abc56","url":"tw_stocks/3715.json"},{"revision":"c6386bfb995d4cc44a0564c119f116ce","url":"tw_stocks/3714.json"},{"revision":"3fd8b004e7a69c89ed404bca31d69eb8","url":"tw_stocks/3712.json"},{"revision":"26e90cc988e801024d7daeeaf9fcb4de","url":"tw_stocks/3711.json"},{"revision":"6a1a7f819eec38c9b8e1f980c34d0f3c","url":"tw_stocks/3708.json"},{"revision":"0a3b4806ddf39231f966923c6d5cefc5","url":"tw_stocks/3706.json"},{"revision":"af10cc512b4d12c82489db42d074c6a8","url":"tw_stocks/3705.json"},{"revision":"83136653fc7e8a7101ad36076730cc0e","url":"tw_stocks/3704.json"},{"revision":"b11da6d067ff634d507880d33f91bde6","url":"tw_stocks/3703.json"},{"revision":"4b9b53a95ea601f7eb25f61d2ac549ac","url":"tw_stocks/3702.json"},{"revision":"a4c04effbe93560528d3ceb3eaf7897a","url":"tw_stocks/3701.json"},{"revision":"58d5d46b4861b12ed288e90eb2f0189b","url":"tw_stocks/3694.json"},{"revision":"3a435c3fd26a23a44eff95d9f015a6ee","url":"tw_stocks/3686.json"},{"revision":"6e2373ee36ef14945830769f74b48c47","url":"tw_stocks/3679.json"},{"revision":"c21222f6b93067bad9d8c657d8982182","url":"tw_stocks/3673.json"},{"revision":"01c4d0bbe59adca72c2f3d273e24e7c8","url":"tw_stocks/3669.json"},{"revision":"6b7de356b86c8784aba06fbc1a1f3b3f","url":"tw_stocks/3665.json"},{"revision":"1894374ae52fc34e2c5c0ae20ec0a0bf","url":"tw_stocks/3661.json"},{"revision":"6c6ea88238845bc55910e3b35a8401f8","url":"tw_stocks/3653.json"},{"revision":"ec3ed1b3412f5595f0f8a013ac410252","url":"tw_stocks/3652.json"},{"revision":"c36f273ccb6d2d04b05715be49b5e688","url":"tw_stocks/3645.json"},{"revision":"00813adfc7b134907cc655a8db479916","url":"tw_stocks/3622.json"},{"revision":"94de8578edcd37ca985373a60a2d434c","url":"tw_stocks/3617.json"},{"revision":"de35a527b079d9fe7c414d7b70c36a3a","url":"tw_stocks/3607.json"},{"revision":"b4b4abd29a08aeba1aefcdad77c71875","url":"tw_stocks/3605.json"},{"revision":"c12cf5a87835c0b82c7447c6fa2e51cf","url":"tw_stocks/3596.json"},{"revision":"cbfee8343a5ec22578c944b60e13d6de","url":"tw_stocks/3593.json"},{"revision":"e27f542991cf19c616dc8c5e1b38d1d2","url":"tw_stocks/3592.json"},{"revision":"2f047ea54bc3a722eb00b4ed9cfcf2e4","url":"tw_stocks/3591.json"},{"revision":"93ad3a148629947c308593d09fd52311","url":"tw_stocks/3588.json"},{"revision":"a170fa8a9d9a16720f9eebde6f6ee34e","url":"tw_stocks/3583.json"},{"revision":"1f3be34913e5c6d6269b0542738df9c1","url":"tw_stocks/3576.json"},{"revision":"8792db2a94d1690591d49aebeae5998a","url":"tw_stocks/3563.json"},{"revision":"0a8abeaad4d09a06d3b6dc83385f295b","url":"tw_stocks/3557.json"},{"revision":"6b170df192d526e864f7d6e4225bc40b","url":"tw_stocks/3550.json"},{"revision":"8b4ea5cef3a701b533922b792ec62659","url":"tw_stocks/3545.json"},{"revision":"00656bc7b58af8a5804202597fccebc7","url":"tw_stocks/3543.json"},{"revision":"31932a955bdf2b0c6fb092dc3a588d8b","url":"tw_stocks/3535.json"},{"revision":"a8fe1f7d5d4221c2ad984745da8406eb","url":"tw_stocks/3533.json"},{"revision":"2690e5ed0376a56de4534fea76888004","url":"tw_stocks/3532.json"},{"revision":"f49a7cb107df161680f9182eec7dba42","url":"tw_stocks/3530.json"},{"revision":"fd2649060eb44253d158052af9f64d2e","url":"tw_stocks/3528.json"},{"revision":"9492cff1c50d326b1b1d96d783941319","url":"tw_stocks/3518.json"},{"revision":"9da0647b3be1a27f5c8ab897525c421e","url":"tw_stocks/3515.json"},{"revision":"d45720e966406db7302b3ed0dd716d1d","url":"tw_stocks/3504.json"},{"revision":"d050d87b62a26c09c57a411fb78ea68e","url":"tw_stocks/3501.json"},{"revision":"3b19e6eff64e108bf9207217192b14d4","url":"tw_stocks/3494.json"},{"revision":"9afde8afa3fc38834cc9ef0771dd2474","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"ccf437fad4f36efe419d2a9a03f359b3","url":"tw_stocks/3450.json"},{"revision":"49400d0330832fa9ab6b1332d18978c9","url":"tw_stocks/3447.json"},{"revision":"7eb686a3ffbb3ecb20ad309082c0a9db","url":"tw_stocks/3443.json"},{"revision":"5195261c4bc931c08285570ec5f4501e","url":"tw_stocks/3437.json"},{"revision":"3fb2e4fd03af54bb1db8ec94355076d6","url":"tw_stocks/3432.json"},{"revision":"2f7102b62fd20ac09b7580f7842d7898","url":"tw_stocks/3419.json"},{"revision":"4a11cb9948f01aa16d859ecde462e775","url":"tw_stocks/3416.json"},{"revision":"9eb7041583bd4090c98e6fc3dc3b483c","url":"tw_stocks/3413.json"},{"revision":"bd2bada60041ac84be459bc1eb751604","url":"tw_stocks/3406.json"},{"revision":"6d5ba0130aa58bc9cf946b2a24b26261","url":"tw_stocks/3380.json"},{"revision":"d2c80812a543959fa59505e236861480","url":"tw_stocks/3376.json"},{"revision":"444d340389895552759905e646c16562","url":"tw_stocks/3356.json"},{"revision":"a70407e0f1ffcf50c2e5055f5e750731","url":"tw_stocks/3346.json"},{"revision":"fb93fec6bc6f7f4f19e3c83847f326b4","url":"tw_stocks/3338.json"},{"revision":"99f82053d15f3fe4fc1f1ce06bcba62a","url":"tw_stocks/3321.json"},{"revision":"f1dbb4bbcd428649a6dd420c05a44f1c","url":"tw_stocks/3312.json"},{"revision":"63e2a0584e7972460429912499740589","url":"tw_stocks/3311.json"},{"revision":"5e15c1f271a2566d0cf507671d023174","url":"tw_stocks/3308.json"},{"revision":"200dd24558adb920a54c6ae08e0f5bb1","url":"tw_stocks/3305.json"},{"revision":"bfec554c7c10ef6410bc812ac88ce0b1","url":"tw_stocks/3296.json"},{"revision":"0f97a0951b2b6aedb3444d6735c9ae2d","url":"tw_stocks/3266.json"},{"revision":"e871769eb38e4630b5f1415d759298f3","url":"tw_stocks/3257.json"},{"revision":"c5f6b60443587bc7c77e543b4a7408aa","url":"tw_stocks/3231.json"},{"revision":"2b9025a71b8aa28f7834a5f02cc3e9f6","url":"tw_stocks/3229.json"},{"revision":"7ed232e45e434e7dfaa6cb4e0387690d","url":"tw_stocks/3209.json"},{"revision":"29912b4974795cb031e0a19af3abbd63","url":"tw_stocks/3189.json"},{"revision":"672d25b99993cc7ba91903d63e1f1896","url":"tw_stocks/3168.json"},{"revision":"cdf127877822a478585ce81c43edfe5d","url":"tw_stocks/3167.json"},{"revision":"b11416935cfa7165dc3861c9032997fa","url":"tw_stocks/3164.json"},{"revision":"1cafaf140824fd73b25e6aaef0f9f3a0","url":"tw_stocks/3149.json"},{"revision":"1c5373ef9daed8282ef10b9a6d580699","url":"tw_stocks/3138.json"},{"revision":"4e20d0b228b4134d542930bc251b94e6","url":"tw_stocks/3135.json"},{"revision":"4ea41c861aa657974afce7133a013a10","url":"tw_stocks/3130.json"},{"revision":"02e4b762b7fa585ab2b4a04458874046","url":"tw_stocks/3094.json"},{"revision":"c4608fd59244e5cdd166302e88394ecb","url":"tw_stocks/3092.json"},{"revision":"0fbb055725f288daa3ca3722877d5160","url":"tw_stocks/3090.json"},{"revision":"b260ac931a8797711f16e071c52728fb","url":"tw_stocks/3062.json"},{"revision":"53154e5f24ce6bc4574f6a3fa6561b58","url":"tw_stocks/3060.json"},{"revision":"983ea078326b5ef61db2c6d38e3f5ffb","url":"tw_stocks/3059.json"},{"revision":"36a50a03f249e210fa12613298416d55","url":"tw_stocks/3058.json"},{"revision":"374138afa03d912e8ab9a235877f213c","url":"tw_stocks/3057.json"},{"revision":"d06d68b4fd37ca7cf52238ec30e4c8eb","url":"tw_stocks/3056.json"},{"revision":"499cdb6f1350bfcc6c8c28cebfd291d7","url":"tw_stocks/3055.json"},{"revision":"18fdc40a58783076a6cb8ef09afabec5","url":"tw_stocks/3054.json"},{"revision":"5cbd4ee2344ba14e11986170feed9f68","url":"tw_stocks/3052.json"},{"revision":"483842941c3069b60c834fb274c3093c","url":"tw_stocks/3051.json"},{"revision":"8af3e8c626c9fc9944e9c6f8f7f0182d","url":"tw_stocks/3050.json"},{"revision":"4c5765f1a317e28e09fdca04caec37de","url":"tw_stocks/3049.json"},{"revision":"ebc29609c03947f17b36f1426ef0c18d","url":"tw_stocks/3048.json"},{"revision":"62e5e8d90b0235f117e00f75bb1c494a","url":"tw_stocks/3047.json"},{"revision":"caf37f7822294f06748c9a03c81dc8cb","url":"tw_stocks/3046.json"},{"revision":"0f3e624ee03cfb654c259bd90dfb1dd6","url":"tw_stocks/3045.json"},{"revision":"8085261f7090d21229ba28f4b2bfc475","url":"tw_stocks/3044.json"},{"revision":"8ed43b78f0318af4dc907efd6eb38af7","url":"tw_stocks/3043.json"},{"revision":"8818fd3b07a6b37c44166c928780269d","url":"tw_stocks/3042.json"},{"revision":"fbbc12f9dc9562fe6c8776bdd2c6052f","url":"tw_stocks/3041.json"},{"revision":"2ea4d8b885e409542be4c6116ed4535b","url":"tw_stocks/3040.json"},{"revision":"5b150bc4b35c146c0a5cd6195aa93789","url":"tw_stocks/3038.json"},{"revision":"0f164f3cc3e395cf975e0427531ee350","url":"tw_stocks/3037.json"},{"revision":"e05093be02d78427b5cc6b2f10f18e12","url":"tw_stocks/3036.json"},{"revision":"41c3a56da45db3cb23995cfa4df33cbf","url":"tw_stocks/3035.json"},{"revision":"d8a217ceb088c2e399ff67e5144806e0","url":"tw_stocks/3034.json"},{"revision":"25ce8172cb694fad98dd7c94f6c8fa79","url":"tw_stocks/3033.json"},{"revision":"04d4caa57192b4628b6ed5e91b071477","url":"tw_stocks/3032.json"},{"revision":"b2ca6a29d85a7072fa334ea48e4e79ed","url":"tw_stocks/3031.json"},{"revision":"9dce800b5604dca41904df58ec5c9b6b","url":"tw_stocks/3030.json"},{"revision":"4973d8bfa0c5c0cdfc7d43ed7848ba08","url":"tw_stocks/3029.json"},{"revision":"1923c80181577282bd96d06133d42eaa","url":"tw_stocks/3028.json"},{"revision":"5cf64a387d29a8ba3c7ef6ed4f0ada48","url":"tw_stocks/3027.json"},{"revision":"635875435d67573cf2432aa93aee709b","url":"tw_stocks/3026.json"},{"revision":"df772a7afd3be21e1ae82a80ac9f9222","url":"tw_stocks/3025.json"},{"revision":"cbb18311a566ccef8f81dd03b89fc76d","url":"tw_stocks/3024.json"},{"revision":"acb2ac4397458c18ed7d6bf5d98c8712","url":"tw_stocks/3023.json"},{"revision":"8c26beebef445175ea9d97b71be22ecf","url":"tw_stocks/3022.json"},{"revision":"dc344370e22c95431f96a48ebad4136c","url":"tw_stocks/3021.json"},{"revision":"10640d03763eb27a4ee78dd1103be841","url":"tw_stocks/3019.json"},{"revision":"62855b0a1c7428cdc5f5e5c3a973f0f9","url":"tw_stocks/3018.json"},{"revision":"39da7c07a3e08b7b94db9b4d471e6c92","url":"tw_stocks/3017.json"},{"revision":"019aeaf31cbb8aab5c3352638d834919","url":"tw_stocks/3016.json"},{"revision":"b3a84905ac542e3caf4ecc1403a0f502","url":"tw_stocks/3015.json"},{"revision":"c50a44f677523651d062f25c992aec6e","url":"tw_stocks/3014.json"},{"revision":"07100c48b06d68aed2b56e38326c35a7","url":"tw_stocks/3013.json"},{"revision":"b184cdf072684486214714cbad46a82b","url":"tw_stocks/3011.json"},{"revision":"2a41dce9f01af496ce6b62d54dcc3ce2","url":"tw_stocks/3010.json"},{"revision":"d94bb728099e4a39d330b4919b61d9c9","url":"tw_stocks/3008.json"},{"revision":"9666911a7d2f172a8f935c5c37e91fab","url":"tw_stocks/3006.json"},{"revision":"64e0a2bb482e7d5ed027edd4a58461b9","url":"tw_stocks/3005.json"},{"revision":"2812679ec636a9fe5a85715e251aca86","url":"tw_stocks/3004.json"},{"revision":"7e25aeac9023a1bfaacaa3837accaa5c","url":"tw_stocks/3003.json"},{"revision":"483e8d06229496e1f2edd338746508b5","url":"tw_stocks/3002.json"},{"revision":"b8622f93040fb296841819e5b4728197","url":"tw_stocks/2945.json"},{"revision":"0f5cb26d26ca22f4002b98fc70296f16","url":"tw_stocks/2939.json"},{"revision":"5e4dff25cc5b58a09841ca39ec5cbc8b","url":"tw_stocks/2929.json"},{"revision":"f329c619f4e9997876f0b7ad5dcebcfc","url":"tw_stocks/2923.json"},{"revision":"ef607c9c37baf4be7c94348bf8a2205f","url":"tw_stocks/2915.json"},{"revision":"a91529b9ba9aa2cf8644995197ec4b37","url":"tw_stocks/2913.json"},{"revision":"0b0e1b02e9dfbc49852ab5b6143abcd7","url":"tw_stocks/2912.json"},{"revision":"0f8ecbf50c5ae0567af7939a5125f976","url":"tw_stocks/2911.json"},{"revision":"10234bb33c8fe081252a842cc2b5056c","url":"tw_stocks/2910.json"},{"revision":"dd2a60cc469d46016a56bab0db1b69d4","url":"tw_stocks/2908.json"},{"revision":"59aa5a371768c82596613b94633815cd","url":"tw_stocks/2906.json"},{"revision":"8e822bcc6a1a36a34866c4db9cc6341b","url":"tw_stocks/2905.json"},{"revision":"7aeb6828c325490a34b6256f6c348b5a","url":"tw_stocks/2904.json"},{"revision":"25462eb05e18ec598417d1ac2cf59df9","url":"tw_stocks/2903.json"},{"revision":"fc2db66259096d1fe115303882ab5572","url":"tw_stocks/2901.json"},{"revision":"f2c445c9e06fe816f7c61d1dae8864d0","url":"tw_stocks/2897.json"},{"revision":"b5531801dc566db6c3f6adface1ddacc","url":"tw_stocks/2892.json"},{"revision":"f66ec4bd0e7368b651f19e93634ee541","url":"tw_stocks/2891.json"},{"revision":"28eff68393db64526933efdaaad5ab04","url":"tw_stocks/2890.json"},{"revision":"31ea992c392345897c47403a596bff53","url":"tw_stocks/2889.json"},{"revision":"dd08a409b6bc8ce66091b07c505f958a","url":"tw_stocks/2887.json"},{"revision":"c84967f3ed096c21c054ed5b7acf4309","url":"tw_stocks/2886.json"},{"revision":"1e823d762461364352e60094d6345821","url":"tw_stocks/2885.json"},{"revision":"929824027f3ca49644fdb0b751014895","url":"tw_stocks/2884.json"},{"revision":"3e637aa647b9c029221818ca9430d504","url":"tw_stocks/2883.json"},{"revision":"3b00ea09146c54abbcaed0ace25af234","url":"tw_stocks/2882.json"},{"revision":"2c52a7237bdbc80bd7db5aecb2dcdd52","url":"tw_stocks/2881.json"},{"revision":"7a39ac823744bae682d95259536b8eec","url":"tw_stocks/2880.json"},{"revision":"74570749afee85c8d9acf0207c59572c","url":"tw_stocks/2867.json"},{"revision":"9e31d5d5371ffc9112707142c97de9af","url":"tw_stocks/2855.json"},{"revision":"ceac2955a04edc17511195e613cfcca6","url":"tw_stocks/2852.json"},{"revision":"0bea74a285aaf678b0a32fe4f74ee8b3","url":"tw_stocks/2851.json"},{"revision":"1e56a1a524354f748b81207f13410bcb","url":"tw_stocks/2850.json"},{"revision":"ad44dce83bd22b4bb2860148636dee35","url":"tw_stocks/2849.json"},{"revision":"99a2b85da20ef95e1c69dde4ecc60321","url":"tw_stocks/2845.json"},{"revision":"fbffeb45b7e4a4d4363cc9c09e1836b6","url":"tw_stocks/2838.json"},{"revision":"bd89cac2145d2064517f3b87948c938c","url":"tw_stocks/2836.json"},{"revision":"250f165188cac364233cb8d4ba920d92","url":"tw_stocks/2834.json"},{"revision":"64dabdd0b978f8eec2c87ce63b253206","url":"tw_stocks/2832.json"},{"revision":"066f7bd494e3c17e160b4d60b4fdb271","url":"tw_stocks/2820.json"},{"revision":"ce1887a3a46d54ebc3304d9052bfc9f2","url":"tw_stocks/2816.json"},{"revision":"e367405b857b5abdcec1d146edefee17","url":"tw_stocks/2812.json"},{"revision":"21e3d709d22498d8530cee0973920d3f","url":"tw_stocks/2801.json"},{"revision":"b9bb98e7b27100fe9649e59a7ca35724","url":"tw_stocks/2762.json"},{"revision":"3b562f61ffd6ccec99bceabc5a3c52a0","url":"tw_stocks/2753.json"},{"revision":"01e256d1016f54081dac54040b4c6f76","url":"tw_stocks/2748.json"},{"revision":"bc3fc635a406af79ec61bc4cde037fc8","url":"tw_stocks/2739.json"},{"revision":"f2833141a7e0ba8a6ccc1f5d37372d1f","url":"tw_stocks/2731.json"},{"revision":"21478d65020dc341ecd374023b041ede","url":"tw_stocks/2727.json"},{"revision":"8c7fa6c6d23e4daf390edb6bd1d7bfdf","url":"tw_stocks/2723.json"},{"revision":"6332f33076b65a88d771b46e79debe66","url":"tw_stocks/2722.json"},{"revision":"6813fd88eb731fad1086248b471bc918","url":"tw_stocks/2712.json"},{"revision":"d36a82a8183bd03617e5ca71dc07444c","url":"tw_stocks/2707.json"},{"revision":"cf8e8d65ace7ba4ad3d65d5c4630070e","url":"tw_stocks/2706.json"},{"revision":"24e79e9f3005c7dc24c611d3f3d1eeed","url":"tw_stocks/2705.json"},{"revision":"37410bda3489bfd5a753b5ac32cacc2a","url":"tw_stocks/2704.json"},{"revision":"1941d9d4ba72cdd84961275177e262b6","url":"tw_stocks/2702.json"},{"revision":"48f7139c959adb5e1fe7150b53390e32","url":"tw_stocks/2701.json"},{"revision":"d2e200849223d614142c924f8b14fcff","url":"tw_stocks/2646.json"},{"revision":"4f7b146425b3acd967cf3ecada44b7b3","url":"tw_stocks/2645.json"},{"revision":"2b68cc7f6252f46a2b5fdcf8a94e5f5c","url":"tw_stocks/2642.json"},{"revision":"e50d178fded0f564a07218ed59bc0011","url":"tw_stocks/2637.json"},{"revision":"32f2794f43fa206ace47127ec534dec2","url":"tw_stocks/2636.json"},{"revision":"6077508100ffd9701637e98675c19ab0","url":"tw_stocks/2634.json"},{"revision":"e955a28c6a1924d0b42e37f952e71e40","url":"tw_stocks/2633.json"},{"revision":"a6ffd529841adae2c3674478035e0fd9","url":"tw_stocks/2630.json"},{"revision":"b0ed90c3d2ce50e98c500ed1755fb7b2","url":"tw_stocks/2618.json"},{"revision":"28aaac78cdd52a9a68025ceb837bfaa3","url":"tw_stocks/2617.json"},{"revision":"b7597886909650f6ad641948772ad8de","url":"tw_stocks/2616.json"},{"revision":"c9bda74ae03bb0e6e5642bb1fe41eb8c","url":"tw_stocks/2615.json"},{"revision":"8c73069dbe972a78229529b422e07b1b","url":"tw_stocks/2614.json"},{"revision":"410f521c8ac2d57705ba2f4ad4eff544","url":"tw_stocks/2613.json"},{"revision":"2c99add329bfab2cf814e2b713d249e1","url":"tw_stocks/2612.json"},{"revision":"3409beb4c07bce91b5de0f78cb18a321","url":"tw_stocks/2611.json"},{"revision":"690a7cb4d0fa1780e18600066a7e34d8","url":"tw_stocks/2610.json"},{"revision":"1939c1cf4f9e38797a0a33be50678896","url":"tw_stocks/2609.json"},{"revision":"ad612b049d54c944efd8d1ad497bdbee","url":"tw_stocks/2608.json"},{"revision":"12447bcfeccdbaf1a50c443913df152d","url":"tw_stocks/2607.json"},{"revision":"0ab8ed51e1796544656c3da22afbae10","url":"tw_stocks/2606.json"},{"revision":"59e909886ed1022a1e9a92661df76705","url":"tw_stocks/2605.json"},{"revision":"e1105702a78b4d5b09e75a62d4750d85","url":"tw_stocks/2603.json"},{"revision":"48a203b8b983c9d9c1c16efe5d0a9ddb","url":"tw_stocks/2601.json"},{"revision":"c28256020005b991b5097db4f1b98e2e","url":"tw_stocks/2597.json"},{"revision":"7d986ad105deaf2c5e5f1f30443d98b9","url":"tw_stocks/2548.json"},{"revision":"bdd1c6145b9e17a76d8c59ef90a078ac","url":"tw_stocks/2547.json"},{"revision":"3d6d0fd1abbe0fdb79387e4bbeffa832","url":"tw_stocks/2546.json"},{"revision":"38b23d8fe5dbe2ab994fdbffebc7f0d4","url":"tw_stocks/2545.json"},{"revision":"ea65c3662cd086e53392f9cf94273f9d","url":"tw_stocks/2543.json"},{"revision":"eedab2d7438652fa5fc9c794c82aac50","url":"tw_stocks/2542.json"},{"revision":"1f27c3f99c6e4094fc2890a329261627","url":"tw_stocks/2540.json"},{"revision":"bf614e033b2429eb9f1bb3fc05b89f79","url":"tw_stocks/2539.json"},{"revision":"24e0c8d8082cfac09bdf46f5fadc1d6b","url":"tw_stocks/2538.json"},{"revision":"0cd7869da31aa73855bdc72c243dceb9","url":"tw_stocks/2537.json"},{"revision":"42a79f464c53c24c98420945fa5a8db8","url":"tw_stocks/2536.json"},{"revision":"cb9411147d9b170a9a47e9412493fa85","url":"tw_stocks/2535.json"},{"revision":"5d18b351e20f6fa3625e03ffec7596fb","url":"tw_stocks/2534.json"},{"revision":"a173ee1003cf41c93fb244da093d5ce0","url":"tw_stocks/2530.json"},{"revision":"a61e9a6197c420fb54a4ade99d2f8459","url":"tw_stocks/2528.json"},{"revision":"d05facf7e313530907c22f5dd3b2de7b","url":"tw_stocks/2527.json"},{"revision":"b80fa028fc8a811dd76df699d62cad35","url":"tw_stocks/2524.json"},{"revision":"392ea312fb5bcf747311dab490e708dd","url":"tw_stocks/2520.json"},{"revision":"3836e185661e17a91a4e55161d31bd25","url":"tw_stocks/2516.json"},{"revision":"635873f28ce26d68e5db31dab04e6399","url":"tw_stocks/2515.json"},{"revision":"540d73eaadc68d3dda3742f85d3e44ce","url":"tw_stocks/2514.json"},{"revision":"9e18abc5b5018b70ea70ebd9f08884f7","url":"tw_stocks/2511.json"},{"revision":"ebffe7d3bc87dc3088509bc44c8d5ede","url":"tw_stocks/2509.json"},{"revision":"40a278be537b663777390417bf33c0d7","url":"tw_stocks/2506.json"},{"revision":"b1e92b67dbe716bc5c1c68cfe82f8d0e","url":"tw_stocks/2505.json"},{"revision":"4225862f0e5a22cd106da3dd3390b654","url":"tw_stocks/2504.json"},{"revision":"5b62007dd819b4804146ce6487d5536b","url":"tw_stocks/2501.json"},{"revision":"1398f5198c5839c42f375f0be9716a46","url":"tw_stocks/2498.json"},{"revision":"2766b2f99fc02854fa955b081c6a7ec7","url":"tw_stocks/2497.json"},{"revision":"bedf185395e6e9488c557a578ed8c92e","url":"tw_stocks/2496.json"},{"revision":"a2517836022fce5505fc241078e4af2d","url":"tw_stocks/2495.json"},{"revision":"aacfbdc489f7485da6be3b1789350f4f","url":"tw_stocks/2493.json"},{"revision":"d66646c025297746e9f362160abe91fc","url":"tw_stocks/2492.json"},{"revision":"c2575b1321396d187e0803da00055f73","url":"tw_stocks/2491.json"},{"revision":"af7cd2ce636fdce8ab9401a3fbccccf6","url":"tw_stocks/2489.json"},{"revision":"17071ef5571a3d8e226ddf80ad4c4f31","url":"tw_stocks/2488.json"},{"revision":"ef76db1e5c756a34a9fa2037874e3c73","url":"tw_stocks/2486.json"},{"revision":"9830a89591340e39fb48f639085a4fad","url":"tw_stocks/2485.json"},{"revision":"ed0739c313cea723df48ab07bc87589e","url":"tw_stocks/2484.json"},{"revision":"deddb9c686d66032610a9ab53417b0b8","url":"tw_stocks/2483.json"},{"revision":"e63fdea81ad990fb2459e9791fbd94b7","url":"tw_stocks/2482.json"},{"revision":"4c910fdb67c16cbebb6bc9c2705ab89c","url":"tw_stocks/2481.json"},{"revision":"05e160fe1a538ba59dcb658216898777","url":"tw_stocks/2480.json"},{"revision":"c300bc918d259dafac2e6d924444807e","url":"tw_stocks/2478.json"},{"revision":"5807b9ba610b6bab2f139644fed2946c","url":"tw_stocks/2477.json"},{"revision":"b97cf2509d8aa04271f5f2c1ca631c2b","url":"tw_stocks/2476.json"},{"revision":"2c819fd48e5a0362cac453bde2433ec8","url":"tw_stocks/2474.json"},{"revision":"fd89e259f5cbdda2c9081a871ad90e48","url":"tw_stocks/2472.json"},{"revision":"0d3d82d2361545d8c91f6b362f183565","url":"tw_stocks/2471.json"},{"revision":"66b416b3c36b8da60cff78f4392416bc","url":"tw_stocks/2468.json"},{"revision":"965212f3ed1a22b727f9ca93d92ae630","url":"tw_stocks/2467.json"},{"revision":"c2f867156d76f0cb1f98ef5f5c590509","url":"tw_stocks/2466.json"},{"revision":"aed5648a8555e221a66cc4ed403f3ee4","url":"tw_stocks/2465.json"},{"revision":"1b951d5fb25fa5f6373b7ee69e849693","url":"tw_stocks/2464.json"},{"revision":"f600fe3aac6f374a179dd5913c99f0c1","url":"tw_stocks/2462.json"},{"revision":"f6d101347eff36df39d2252bbf8df63c","url":"tw_stocks/2461.json"},{"revision":"926a0757c6203871656453f5aa982bce","url":"tw_stocks/2460.json"},{"revision":"376487db0773fbdd13a9f2658a04796c","url":"tw_stocks/2459.json"},{"revision":"a3a550b1b29053d36d5135437123576f","url":"tw_stocks/2458.json"},{"revision":"f7dd4b1517a57df6d02394d6b8e045f8","url":"tw_stocks/2457.json"},{"revision":"677777d13d5026b7b0418327fc90a402","url":"tw_stocks/2455.json"},{"revision":"735ac61762eb860c748e9e007513efee","url":"tw_stocks/2454.json"},{"revision":"037fdffd217cf6641cdaa7812bdf9773","url":"tw_stocks/2453.json"},{"revision":"400793c657b0f3543ab6480f53fa0dc0","url":"tw_stocks/2451.json"},{"revision":"adcc4d6e90810ccc5a59ab6a8e27bd96","url":"tw_stocks/2450.json"},{"revision":"bd3b8e39f8335dbc8d96f6bd2a3b8fb0","url":"tw_stocks/2449.json"},{"revision":"4ece425f4975e7c1e226f4e653117e15","url":"tw_stocks/2444.json"},{"revision":"c5de9ec399c86f011d953c54b3564624","url":"tw_stocks/2442.json"},{"revision":"0b725dc870a6970687f1d55c12600362","url":"tw_stocks/2441.json"},{"revision":"7c4f147869ed7285c9c23ab091190757","url":"tw_stocks/2440.json"},{"revision":"e2abfd4c3bd99c95c356eb75f2d62b1b","url":"tw_stocks/2439.json"},{"revision":"33783d116392a72bc42b6341bb6072de","url":"tw_stocks/2438.json"},{"revision":"b236724538bb3a3305b1ce4f6b73b233","url":"tw_stocks/2436.json"},{"revision":"c284c1306a846418904aa12a75db27e3","url":"tw_stocks/2434.json"},{"revision":"a2b2a7f630754acbc4196bbc90d4ad69","url":"tw_stocks/2433.json"},{"revision":"03a7efc78233316a8767ec794aece945","url":"tw_stocks/2431.json"},{"revision":"f0e4822edfbbd01396ad674c5e7d2fcc","url":"tw_stocks/2430.json"},{"revision":"ea438d3e9c1bf430e2728deb17d0b5e3","url":"tw_stocks/2429.json"},{"revision":"f026f7d748ff61d95c1c772095d664dc","url":"tw_stocks/2428.json"},{"revision":"352d72495f7281402c830d8f7408efef","url":"tw_stocks/2427.json"},{"revision":"9a3d1606076c229e1c074e153c507962","url":"tw_stocks/2426.json"},{"revision":"2247ece9c47110eb7735eba7ddac43f3","url":"tw_stocks/2425.json"},{"revision":"f6d550d762dae167ffbe5e62b345c6e9","url":"tw_stocks/2424.json"},{"revision":"ce6057fd38c4481353562d84c2dad6f5","url":"tw_stocks/2423.json"},{"revision":"083f7d2aff229689eea285a437fb12a0","url":"tw_stocks/2421.json"},{"revision":"3a9cc798f22fb7d06fa071b47e1f2829","url":"tw_stocks/2420.json"},{"revision":"efc44b970f3be881dd0b6b57b3bebed1","url":"tw_stocks/2419.json"},{"revision":"c644bf644145d52870625184837d79c8","url":"tw_stocks/2417.json"},{"revision":"ad96fcde6e6aa28bd73b30152a411281","url":"tw_stocks/2415.json"},{"revision":"ae15792e75d189dae8bfd8c4fa254bb2","url":"tw_stocks/2414.json"},{"revision":"488654f1e0a7f8d2e99b98d28fb1909f","url":"tw_stocks/2413.json"},{"revision":"ab0502f9d00a6cf35aab3793fd2c21c0","url":"tw_stocks/2412.json"},{"revision":"3b8b9e2a245acfbbba6d23e6c206a803","url":"tw_stocks/2409.json"},{"revision":"0de994210b2125b0fe93d152e54262c4","url":"tw_stocks/2408.json"},{"revision":"4803281ddd784c1069c1d2091023a099","url":"tw_stocks/2406.json"},{"revision":"293d7b54543bcbe0603ce13b0a8b0bdc","url":"tw_stocks/2405.json"},{"revision":"6aa1cae68fa60d5c32b869cab3e1d3af","url":"tw_stocks/2404.json"},{"revision":"f28326da80ce31664f07c6111d7105c9","url":"tw_stocks/2402.json"},{"revision":"cc0fa5662cb6b273fdcf5b10ef362fb7","url":"tw_stocks/2401.json"},{"revision":"6b470b43ba915c8b50bd93c228cc418d","url":"tw_stocks/2399.json"},{"revision":"39431887556ae89e9bcaea9d12154d98","url":"tw_stocks/2397.json"},{"revision":"acca30040343884bb350aae6dabf626d","url":"tw_stocks/2395.json"},{"revision":"cfe4e942daa88b2517910b04f8cbddd9","url":"tw_stocks/2393.json"},{"revision":"1a07cb4a9c4570d13748e3f5879be396","url":"tw_stocks/2392.json"},{"revision":"d223fbfa7163bce9eb524927c498e0a0","url":"tw_stocks/2390.json"},{"revision":"d62f2e4cee4049943a606f365096e6f2","url":"tw_stocks/2388.json"},{"revision":"d7e8cf682633d3ba1179414bd5ee32d2","url":"tw_stocks/2387.json"},{"revision":"13cbc845fa8a5f6e45fc43e4dee0e37e","url":"tw_stocks/2385.json"},{"revision":"af5433b7e8efbb1826f27009b56b3b97","url":"tw_stocks/2383.json"},{"revision":"af44a9383f9c78e7f3457954b6fb94b5","url":"tw_stocks/2382.json"},{"revision":"faa79321833ae8fb0ac4e41341cbc39c","url":"tw_stocks/2380.json"},{"revision":"7cefc410406c42f4a245ba89f0bc4d93","url":"tw_stocks/2379.json"},{"revision":"f8fad881a09e1919c220d70a6d2e7ab5","url":"tw_stocks/2377.json"},{"revision":"8186edf47a6a989cb1263a412f1cd5fb","url":"tw_stocks/2376.json"},{"revision":"fa60dfb018d955f2c8a98ce3a245ab19","url":"tw_stocks/2375.json"},{"revision":"cbe85170f98072637ee0dca72b8fdce8","url":"tw_stocks/2374.json"},{"revision":"0bc1a60f5a4ccd3082c7336486cdb865","url":"tw_stocks/2373.json"},{"revision":"4b2e51233491769dd531687ab8b210ef","url":"tw_stocks/2371.json"},{"revision":"85ca151fec8e874dcda1de0fa8745974","url":"tw_stocks/2369.json"},{"revision":"207051e832ab6aadc9164df2c55dbbc9","url":"tw_stocks/2368.json"},{"revision":"007760b776f0cdb36b911a0244001e04","url":"tw_stocks/2367.json"},{"revision":"14063ad32ab8713593b018bb4da3f269","url":"tw_stocks/2365.json"},{"revision":"e04c8c54a1ffcec03ba1b8f8441e7792","url":"tw_stocks/2364.json"},{"revision":"dff151f34758c8113aa4b1fcd036a8a6","url":"tw_stocks/2363.json"},{"revision":"400c776d3839dc0ae3dfa0eea2608320","url":"tw_stocks/2362.json"},{"revision":"3412c31f397e5d052cd542bd3c42aecf","url":"tw_stocks/2360.json"},{"revision":"1771ee5a6b89a0ee969c8337d45d49df","url":"tw_stocks/2359.json"},{"revision":"516c915244040b0b3e3ca42119f4fcf7","url":"tw_stocks/2357.json"},{"revision":"86fb0a84209996611a885d0a73df9ff4","url":"tw_stocks/2356.json"},{"revision":"cf8792cda8eb3983fa38752fc9a91978","url":"tw_stocks/2355.json"},{"revision":"cb85ba1b652028a7219c5e8531d55b6a","url":"tw_stocks/2354.json"},{"revision":"cb7de3aea9e3cfe291ccb53f6d0d4dff","url":"tw_stocks/2353.json"},{"revision":"21e3591805e910caa912020ab40f9ce8","url":"tw_stocks/2352.json"},{"revision":"219f1ad40a30a6184640e50bab96c737","url":"tw_stocks/2351.json"},{"revision":"409cb5f4cece1c72d451e31b3b85bc7a","url":"tw_stocks/2349.json"},{"revision":"f9ff572a75404da6bae9210c4217b643","url":"tw_stocks/2348.json"},{"revision":"179fc44224d01bc68ccc90a166a7bc4f","url":"tw_stocks/2347.json"},{"revision":"686202b4df7d626819392d60607bb63e","url":"tw_stocks/2345.json"},{"revision":"202d1373b7cf21ee0657a9fbb15a3302","url":"tw_stocks/2344.json"},{"revision":"e697548395b1361d338420cef899c70e","url":"tw_stocks/2342.json"},{"revision":"a5937a746fc9ab012debdbd9b1d2676d","url":"tw_stocks/2340.json"},{"revision":"f7a433cfa51a467c60ede3457a133de6","url":"tw_stocks/2338.json"},{"revision":"fec61131633d6e8c6ea374f5eccc905f","url":"tw_stocks/2337.json"},{"revision":"057c1d233f9a41c629c7f3c9dec9db16","url":"tw_stocks/2332.json"},{"revision":"0f5f00df980fb787b3ea7af6c0265f3a","url":"tw_stocks/2331.json"},{"revision":"c400cf45820c62b55cc3dfc5a43ae2c0","url":"tw_stocks/2330.json"},{"revision":"398164441aefef2772697fff3130c6ae","url":"tw_stocks/2329.json"},{"revision":"13d139d44cbd374d4455122860ba0572","url":"tw_stocks/2328.json"},{"revision":"64d4334a92e8b71b95506eb7f9b0ef13","url":"tw_stocks/2327.json"},{"revision":"a6a65f03f493fda4e3ba4500d9edd971","url":"tw_stocks/2324.json"},{"revision":"cc80a711b737b09ea365d8c4663d4a68","url":"tw_stocks/2323.json"},{"revision":"6f2d2ec3411c4d7e425af51888693672","url":"tw_stocks/2321.json"},{"revision":"a41f4f98f3c02a3e31b1ca7d6103c64c","url":"tw_stocks/2317.json"},{"revision":"7b8ae118e5c964ae24512e1d5fc47844","url":"tw_stocks/2316.json"},{"revision":"0bcda65a3a18dcf4b718060b89048d9c","url":"tw_stocks/2314.json"},{"revision":"c4448e66ebcf73589a574d47acb65d17","url":"tw_stocks/2313.json"},{"revision":"eec9df1a33e0ee0640957ea17eadbe0b","url":"tw_stocks/2312.json"},{"revision":"16343da5d4fb46a2b74e6f1e92657a79","url":"tw_stocks/2308.json"},{"revision":"6cd729be4393d5dd3b9ff0ab652e6d8d","url":"tw_stocks/2305.json"},{"revision":"e3cf6eea03ce6cb88c9de40e03e810ab","url":"tw_stocks/2303.json"},{"revision":"baed6f3b0307cfb5c450444516224d6a","url":"tw_stocks/2302.json"},{"revision":"5ad4201fb9d9befc66a34a1f0ccb9169","url":"tw_stocks/2301.json"},{"revision":"7f476997d4d2be82fd5023887558e287","url":"tw_stocks/2250.json"},{"revision":"846e144e342ca18f705da8bbbb392e70","url":"tw_stocks/2248.json"},{"revision":"8bee55c529bd9a42c4ced91287a5c50b","url":"tw_stocks/2247.json"},{"revision":"720517b294b3ce1fbf7d1c8b29b30a52","url":"tw_stocks/2243.json"},{"revision":"dc416fad28e82b84ed98a66f55aeee78","url":"tw_stocks/2241.json"},{"revision":"f84cc355f7c7b659450102a97f510126","url":"tw_stocks/2239.json"},{"revision":"1bf648bc735346c37f2fb4b60a314d5a","url":"tw_stocks/2236.json"},{"revision":"1e62d25898a383d03d1eb4e420d8eb2a","url":"tw_stocks/2233.json"},{"revision":"6c9277959db1e1198ca87682a009d3bc","url":"tw_stocks/2231.json"},{"revision":"f293ae5326b888c1c081c68c711d7954","url":"tw_stocks/2228.json"},{"revision":"bed8c94f6a9d623c8db21763b9d681b8","url":"tw_stocks/2227.json"},{"revision":"3ee255548038ddf66185e4aab5d810bb","url":"tw_stocks/2211.json"},{"revision":"646c96d43968b14d62bbfd711a529e03","url":"tw_stocks/2208.json"},{"revision":"2340d6dad31618621929e04fc48a617c","url":"tw_stocks/2207.json"},{"revision":"b663d1ee21197da99041f2a00fe0f133","url":"tw_stocks/2206.json"},{"revision":"5ca805811a59a72be55b580e8498ae04","url":"tw_stocks/2204.json"},{"revision":"d994c1ec54c37209f19e15bf06d5df7d","url":"tw_stocks/2201.json"},{"revision":"2b1141d23cd8cbe93ad6d69d5fb01d83","url":"tw_stocks/2115.json"},{"revision":"755f7c82a8725a0f3abbe718f2c8060b","url":"tw_stocks/2114.json"},{"revision":"0ed4c3f7e1cdaa5b62ff865da75bebe2","url":"tw_stocks/2109.json"},{"revision":"c8dab155858047072bca1584081474cb","url":"tw_stocks/2108.json"},{"revision":"7c5d90255e24d16af4e7aed81a1fff95","url":"tw_stocks/2107.json"},{"revision":"5f49ac53a2336043fc3bfe42d532ce2a","url":"tw_stocks/2106.json"},{"revision":"a8e3177e80c50a59b39035eae64230e8","url":"tw_stocks/2105.json"},{"revision":"3a017842b0d221f4f867caee521f0c5c","url":"tw_stocks/2104.json"},{"revision":"de46b743229d366200a87f55325e7d20","url":"tw_stocks/2103.json"},{"revision":"2d53fdb8304975285fac82a398b859e2","url":"tw_stocks/2102.json"},{"revision":"5aecdd0d907ed72a724c9f7f0b77b15f","url":"tw_stocks/2101.json"},{"revision":"c7af9e7b4c2a015fc590e67d1a2c3243","url":"tw_stocks/2072.json"},{"revision":"9c4d9c0aec872ce0af91e58b5c63643b","url":"tw_stocks/2069.json"},{"revision":"926c8db48a401667b6dfb90a548567ec","url":"tw_stocks/2062.json"},{"revision":"422dd3af689b86989ab2d5c8b082e643","url":"tw_stocks/2059.json"},{"revision":"85353b3dafa9aba18822fce22005a59c","url":"tw_stocks/2049.json"},{"revision":"df93a6d596f4c2737ce72ce5b1c89ffb","url":"tw_stocks/2038.json"},{"revision":"ff57f7e8d8a5b73d476381df424b98aa","url":"tw_stocks/2034.json"},{"revision":"48138344002d8ede6ce8c81f85381e53","url":"tw_stocks/2033.json"},{"revision":"d5e16a7fae49433b79ebb818e6af0b21","url":"tw_stocks/2032.json"},{"revision":"2aaaeac77caaeb5c7b3fb6f014e7d939","url":"tw_stocks/2031.json"},{"revision":"76351468f3c9beaadccd6d524a4675b3","url":"tw_stocks/2030.json"},{"revision":"319eb27aaeab093ec0312cbd15967ef8","url":"tw_stocks/2029.json"},{"revision":"e1518297623c01af3072150a60af327f","url":"tw_stocks/2028.json"},{"revision":"378266774a6baba8d29007203c32a2d1","url":"tw_stocks/2027.json"},{"revision":"458364aa997f55e597f9d0aaa22bda14","url":"tw_stocks/2025.json"},{"revision":"505e66797dec4e5423e1a252274fc88a","url":"tw_stocks/2024.json"},{"revision":"302d994dad363946ae6a766ba565a04a","url":"tw_stocks/2023.json"},{"revision":"88e8f02dc449e288300fc103e958cbe1","url":"tw_stocks/2022.json"},{"revision":"c7515a46c85b80c7f73a40060a482992","url":"tw_stocks/2020.json"},{"revision":"81028e454350170adfb702b555b1963c","url":"tw_stocks/2017.json"},{"revision":"aa53062c1cc26472cd724ad33e65f30a","url":"tw_stocks/2015.json"},{"revision":"21db5394411c7731be749c5ac5838b80","url":"tw_stocks/2014.json"},{"revision":"408c382e3575fe16b6022f00b691ca35","url":"tw_stocks/2013.json"},{"revision":"69f4ca01087fb1ddeacaa836569fee65","url":"tw_stocks/2012.json"},{"revision":"33339e0df5ff65feb14e2e3206e080e7","url":"tw_stocks/2010.json"},{"revision":"90466c1fa72328402c65bfdb5345013d","url":"tw_stocks/2009.json"},{"revision":"540e47dd2f77caed958dfd5f673a65ab","url":"tw_stocks/2008.json"},{"revision":"daa974a5710e568388bd6748102234dc","url":"tw_stocks/2007.json"},{"revision":"052b2135bdb67bbfa839abdd8595f250","url":"tw_stocks/2006.json"},{"revision":"4f61069582cfa5d0c245a1b50117b5c4","url":"tw_stocks/2002.json"},{"revision":"d4ab045fbb4d22ef113345466250cf00","url":"tw_stocks/1909.json"},{"revision":"4f8db6014affaed2c9bafed41adb6594","url":"tw_stocks/1907.json"},{"revision":"8f1a81e7bcc99f0a43033e09ce70295e","url":"tw_stocks/1906.json"},{"revision":"e292b8c1d9d385f88eb19f6a804a9567","url":"tw_stocks/1905.json"},{"revision":"5b65524a4daa9ac92f2f0815b6aeac5d","url":"tw_stocks/1904.json"},{"revision":"f432adf28e4b7c35de8a40da2fe973ce","url":"tw_stocks/1903.json"},{"revision":"0f9730b8756438a9b9e8639d6b9821bc","url":"tw_stocks/1817.json"},{"revision":"6c904b3b47f33c80d7afd873eab8c9bb","url":"tw_stocks/1810.json"},{"revision":"5923b78d8db155254954f2f2130c29e2","url":"tw_stocks/1809.json"},{"revision":"29afc1adbb60076c76acead4f22ced89","url":"tw_stocks/1808.json"},{"revision":"b54f87ec060426401a3e2d84ce99099f","url":"tw_stocks/1806.json"},{"revision":"12f2342525275e0332ebc68c401c2af9","url":"tw_stocks/1805.json"},{"revision":"757706ea06e1b967ef37d540f960d02c","url":"tw_stocks/1802.json"},{"revision":"ab645d18fb34e1f0f8516eef15054300","url":"tw_stocks/1795.json"},{"revision":"9abcba5af27699bfa73fc632eee6fafd","url":"tw_stocks/1789.json"},{"revision":"0c70a40f7909530ad1693af36cbec560","url":"tw_stocks/1786.json"},{"revision":"9302eaf4df30b74be69f2aaf01d40cbb","url":"tw_stocks/1783.json"},{"revision":"653206a7314d29d00e2bff5b387dec05","url":"tw_stocks/1776.json"},{"revision":"fdd3bdadfa3eb40e207fbf0d81005be3","url":"tw_stocks/1773.json"},{"revision":"37704e61e2269e7667adeff298e87cc2","url":"tw_stocks/1762.json"},{"revision":"5633111a28d788a9d95a2f756f945712","url":"tw_stocks/1760.json"},{"revision":"ffc48a29acecb0061faca4bc2faadcca","url":"tw_stocks/1752.json"},{"revision":"96f1caeec0d1e7e68f150d9fefb01715","url":"tw_stocks/1737.json"},{"revision":"bbbd4c162211b31dc9316fb779cb7c10","url":"tw_stocks/1736.json"},{"revision":"a0662f3ed8566fc36238fe3f3d8b57b9","url":"tw_stocks/1735.json"},{"revision":"576402aa5160269a659e90763b487368","url":"tw_stocks/1734.json"},{"revision":"4fbc2c9d63803ff0f0e3629762bf077f","url":"tw_stocks/1733.json"},{"revision":"6b79e473880913239f61afd8f6073dbe","url":"tw_stocks/1732.json"},{"revision":"e01f3efbbfe30f41b328fbc792407b11","url":"tw_stocks/1731.json"},{"revision":"7d9fb7cf4090aef75946df235e2bdcca","url":"tw_stocks/1730.json"},{"revision":"281b93d8129763c33ee72751071f9ee9","url":"tw_stocks/1727.json"},{"revision":"0f27b91dc86d2ff6b73999e8fd368846","url":"tw_stocks/1726.json"},{"revision":"fa1db2e724ee607544d9c1a28580e1d1","url":"tw_stocks/1725.json"},{"revision":"a0aff5765a138a023ab2c85fb610ced9","url":"tw_stocks/1723.json"},{"revision":"9ccb2117528ffc5448342544c8919efe","url":"tw_stocks/1722.json"},{"revision":"91e10f23c29ee7a5921ce983202b36d8","url":"tw_stocks/1721.json"},{"revision":"d21cc8a5b6d4c310a950c2c8daabea14","url":"tw_stocks/1720.json"},{"revision":"4fdf0c3b608b5990574722178735e473","url":"tw_stocks/1718.json"},{"revision":"145b4af781cb368f8a2966b2ec8779d4","url":"tw_stocks/1717.json"},{"revision":"ad6095911bac84178251fc9a0e81afdd","url":"tw_stocks/1714.json"},{"revision":"e26c7640cf791a2e5cfabad57ec8a971","url":"tw_stocks/1713.json"},{"revision":"84314375f4bb8f23bf0cadf2ae909e18","url":"tw_stocks/1712.json"},{"revision":"389e5d51993a7baf8c9d5830f0116d60","url":"tw_stocks/1711.json"},{"revision":"b24e2da733cf30161e13333977f9123a","url":"tw_stocks/1710.json"},{"revision":"40003189b864b17561c00fe8ff0cd1d9","url":"tw_stocks/1709.json"},{"revision":"1d65df1f64c5c93cded3ab88c9372fe0","url":"tw_stocks/1708.json"},{"revision":"a339e0dca177a81d0902314be34ef136","url":"tw_stocks/1707.json"},{"revision":"badf04c28bec94e8f2ceb42afb5fc9b9","url":"tw_stocks/1702.json"},{"revision":"afab4a39bc5dce43613ddcb0ad0d6f3c","url":"tw_stocks/1626.json"},{"revision":"d4519a37bdda1e404742d0f5cc5a0f3e","url":"tw_stocks/1623.json"},{"revision":"cbcf4852e394fe7e5ffef146e07fbf3f","url":"tw_stocks/1618.json"},{"revision":"659b400114e2a76039daccba6d4d0120","url":"tw_stocks/1617.json"},{"revision":"815bed7f40242f9faddc42c90dec691f","url":"tw_stocks/1616.json"},{"revision":"65ffc338466754ae1b298e2527588da8","url":"tw_stocks/1615.json"},{"revision":"023623f0992bafddd32f03dbdc703071","url":"tw_stocks/1614.json"},{"revision":"958fc564da138229efd524f752e19e0c","url":"tw_stocks/1612.json"},{"revision":"8874a5f31b0401ba4fd5167a29931220","url":"tw_stocks/1611.json"},{"revision":"5fa941b5cf40590aa62898a3a6ad43ed","url":"tw_stocks/1609.json"},{"revision":"aba88c3aad6402d38772d24f82dafb7a","url":"tw_stocks/1608.json"},{"revision":"91ca49e819dceac8e315a2afd79187f7","url":"tw_stocks/1605.json"},{"revision":"c904e1f20f1682389c292b19f652e7e5","url":"tw_stocks/1604.json"},{"revision":"62629993979bffa5e5be1edd7055cc6f","url":"tw_stocks/1603.json"},{"revision":"ec2ef0b0c233958f861cbb3e2b0f8830","url":"tw_stocks/1598.json"},{"revision":"6931ef4ea3d2cec01d21b657f12227fc","url":"tw_stocks/1597.json"},{"revision":"bb9eb379e6de07d6ed8d21c14877759e","url":"tw_stocks/1590.json"},{"revision":"8511e9ae7e7c6311b75e0451542cd4c0","url":"tw_stocks/1589.json"},{"revision":"28f5510f7a966ccfbfb5ea3ccae0e83f","url":"tw_stocks/1587.json"},{"revision":"460a2a49c0a7212872e14b4d1e64a293","url":"tw_stocks/1583.json"},{"revision":"097afb3bed93ee30df16cb9b89791c7e","url":"tw_stocks/1582.json"},{"revision":"c009a83a1f06375600a3dbf60eae068d","url":"tw_stocks/1568.json"},{"revision":"d3707cf163cf6d2897c9ccf148d18771","url":"tw_stocks/1563.json"},{"revision":"a262efda788539d00a14f6d2a8b359df","url":"tw_stocks/1560.json"},{"revision":"d4899c8bda5edda04301ebc57dbdafc3","url":"tw_stocks/1558.json"},{"revision":"8cc5926f7b713cbc5783c447bcb866de","url":"tw_stocks/1541.json"},{"revision":"f87ee4b8922d309bcbc1437243c61b66","url":"tw_stocks/1540.json"},{"revision":"16b87b0a68c0c33090093951738019aa","url":"tw_stocks/1539.json"},{"revision":"df21140d440d45f586e15dfcf694ba9a","url":"tw_stocks/1538.json"},{"revision":"497c824587c906ef5bbc2c9753b9ccf9","url":"tw_stocks/1537.json"},{"revision":"d5019959347f9955b340eacc40770698","url":"tw_stocks/1536.json"},{"revision":"f967bea36768143d8c1e711d33aaee0b","url":"tw_stocks/1535.json"},{"revision":"072f6ec8cc7994bcf48fbf257ead3565","url":"tw_stocks/1533.json"},{"revision":"380624759f59685796af2b579cab3238","url":"tw_stocks/1532.json"},{"revision":"eff7e86bced2cbc8698fabbaf46e8433","url":"tw_stocks/1531.json"},{"revision":"85e8e295b4d2cd023bce1de53e107a15","url":"tw_stocks/1530.json"},{"revision":"38b7ad6b6875cd2c6a99ad376ed38dda","url":"tw_stocks/1529.json"},{"revision":"3d222b0e15a8ef47819d5fa76b127cb1","url":"tw_stocks/1528.json"},{"revision":"856edc515e3ba649efe77826d093526e","url":"tw_stocks/1527.json"},{"revision":"043de9821cefc569041046df43b28f57","url":"tw_stocks/1526.json"},{"revision":"bb76225af0d955432b94188836bc3316","url":"tw_stocks/1525.json"},{"revision":"b5d3d764aa6b196e53710ccc49c2855d","url":"tw_stocks/1524.json"},{"revision":"ca6e593eeb8c6b193e8d52bc83603c07","url":"tw_stocks/1522.json"},{"revision":"316b10c015cf86074c7b89b3129a9a62","url":"tw_stocks/1521.json"},{"revision":"d3708ed8d4657b10076b2ecc85644595","url":"tw_stocks/1519.json"},{"revision":"a328e283b9f8cc2f40913557a904c9cf","url":"tw_stocks/1517.json"},{"revision":"f5201940fee14c42deb8ad77c8602f3d","url":"tw_stocks/1516.json"},{"revision":"29c12c57af71d03ff2028d2afc133e62","url":"tw_stocks/1515.json"},{"revision":"cce5f9db754132adf678f6066c5894f4","url":"tw_stocks/1514.json"},{"revision":"b48d4f2ac79496d742b228ebaaa5a914","url":"tw_stocks/1513.json"},{"revision":"383f30155031ec6e552c8c8e1a6a92d3","url":"tw_stocks/1512.json"},{"revision":"8313d3911230e059db787d5ead1c15cf","url":"tw_stocks/1506.json"},{"revision":"1eff1dded6e8446f71d34cf448522a94","url":"tw_stocks/1504.json"},{"revision":"fdd44c2a3250156080f7b0bf299edb06","url":"tw_stocks/1503.json"},{"revision":"941049858e93e6e7f069b1c074aadccb","url":"tw_stocks/1477.json"},{"revision":"0b5b04c8860bff5a58212515612fd380","url":"tw_stocks/1476.json"},{"revision":"11bce960b219496f7b1c73f3059173e5","url":"tw_stocks/1475.json"},{"revision":"18e222461ce62bac7cfe303603386393","url":"tw_stocks/1474.json"},{"revision":"00551b14245fa99d59abb71c3e1c612a","url":"tw_stocks/1473.json"},{"revision":"68b3c6c8a8aa3b6e7edac6553299f62e","url":"tw_stocks/1472.json"},{"revision":"6cb6c23f3400ea020a670a74aa2bf002","url":"tw_stocks/1471.json"},{"revision":"e140c0ad730949cb5d94fa8b7b91e22f","url":"tw_stocks/1470.json"},{"revision":"51cd84fce8ac9bf4ad54d470aca59ae8","url":"tw_stocks/1468.json"},{"revision":"7d42996a6235af8b598ffca6c24780da","url":"tw_stocks/1467.json"},{"revision":"576b293e0574e9511858087efe29494e","url":"tw_stocks/1466.json"},{"revision":"ee41d5453e2932b02ebaf837a7cf0e26","url":"tw_stocks/1465.json"},{"revision":"a426862a761b781deb4c1e79cef2f4f9","url":"tw_stocks/1464.json"},{"revision":"b95719de052343d3de0e09cd2873b6fe","url":"tw_stocks/1463.json"},{"revision":"674d8983c7777a173e2cb81ccaa25d47","url":"tw_stocks/1460.json"},{"revision":"7b2225fa9b8b6b45f254b6f6180215ca","url":"tw_stocks/1459.json"},{"revision":"e26dd503f495f6a43e6eeef2d2d06bae","url":"tw_stocks/1457.json"},{"revision":"2253a987ddc687b64287a98748647728","url":"tw_stocks/1456.json"},{"revision":"3336227c9a32d87a7e7893a34892d763","url":"tw_stocks/1455.json"},{"revision":"0ac538fca4db7522cec459af4cec42ec","url":"tw_stocks/1454.json"},{"revision":"908eb72114e06ff486527f8642e75231","url":"tw_stocks/1453.json"},{"revision":"06c6fb174b947b28d4ad45f6609d8dd8","url":"tw_stocks/1452.json"},{"revision":"1d9c066d379b029e005438815fc6ba87","url":"tw_stocks/1451.json"},{"revision":"c97fc58150431a29d4cf83715e365a33","url":"tw_stocks/1449.json"},{"revision":"6561d8c223b58b3d287f92cf0128217f","url":"tw_stocks/1447.json"},{"revision":"45d1103615e4316f1801271257ec1805","url":"tw_stocks/1446.json"},{"revision":"900cb1c9dcae3cb397584c8df4bdccf7","url":"tw_stocks/1445.json"},{"revision":"00c45c8247a727a16eed9c6925f1ec29","url":"tw_stocks/1444.json"},{"revision":"c5c793e5e24c65eef5d0927c65b3337d","url":"tw_stocks/1443.json"},{"revision":"609e747e5da8e1efbf5d59bddde5c625","url":"tw_stocks/1442.json"},{"revision":"5b0c3f3689bd25667efc4441cd6c98b2","url":"tw_stocks/1441.json"},{"revision":"977f1a64d6dd7d6afc6ef31a1ab25181","url":"tw_stocks/1440.json"},{"revision":"420557b23822cb5ea5669b7c2299a049","url":"tw_stocks/1439.json"},{"revision":"5a22e47ba2cdbb4542d5375efc3e6771","url":"tw_stocks/1438.json"},{"revision":"5e103f117033c8114f31dfeb9ab7282c","url":"tw_stocks/1437.json"},{"revision":"a81a6269df0ba4e648d327a82c5d9207","url":"tw_stocks/1436.json"},{"revision":"ff337fbe40b77693d6bd9f4875c5e34c","url":"tw_stocks/1435.json"},{"revision":"ad3af9d54a1f318834771d4dff8bd617","url":"tw_stocks/1434.json"},{"revision":"275f6f71415b7fca72a9a6d492e3d768","url":"tw_stocks/1432.json"},{"revision":"6875032a9c385757ae56338daef54461","url":"tw_stocks/1423.json"},{"revision":"de270750b270fc21ef283fbfe37e3eed","url":"tw_stocks/1419.json"},{"revision":"034387670f452d40977d24b60d090af8","url":"tw_stocks/1418.json"},{"revision":"0740daa3792fa355f72eea1836f32657","url":"tw_stocks/1417.json"},{"revision":"4644ec8e33d0cc5e6811eb61b7a1cc11","url":"tw_stocks/1416.json"},{"revision":"6d94d5a6cfb2766e521386ab05cf4091","url":"tw_stocks/1414.json"},{"revision":"131b455071f8d45d301c6d216fc19ada","url":"tw_stocks/1413.json"},{"revision":"25972fa9895bd5805d8e383c601ce3fd","url":"tw_stocks/1410.json"},{"revision":"8c804d68b7e45f659cee7a90753a87ff","url":"tw_stocks/1409.json"},{"revision":"c7e63aed04444d2aa514382b63ac890e","url":"tw_stocks/1402.json"},{"revision":"9010778e39c65fcc3d07a1e3c6b25ecb","url":"tw_stocks/1342.json"},{"revision":"006b8290894134af81a72bf8d5b96b29","url":"tw_stocks/1341.json"},{"revision":"d17ccbd682f27dbc67929f919f26df1d","url":"tw_stocks/1340.json"},{"revision":"0dcdd96579a7746c6c7e7b987fd5f7c4","url":"tw_stocks/1339.json"},{"revision":"5f129116ac3e4ec97e246de5e864a9ad","url":"tw_stocks/1338.json"},{"revision":"de313eaf11b1bd84a68206bdff0811b1","url":"tw_stocks/1337.json"},{"revision":"6cc07d3853e31803db47eaaf4da91baf","url":"tw_stocks/1326.json"},{"revision":"c9c200e3929276369f46abd4a6f1523f","url":"tw_stocks/1325.json"},{"revision":"cc0d31e55f04de5675046a84da9c1059","url":"tw_stocks/1324.json"},{"revision":"50941275f9d47d5b1a28f1a3d31dcaf8","url":"tw_stocks/1323.json"},{"revision":"e46e64f0b55275abad878cabe5164122","url":"tw_stocks/1321.json"},{"revision":"6784a075c24a2c11eb068a6f67249d1e","url":"tw_stocks/1319.json"},{"revision":"d888f591332ba2918afc6542e3ec5e19","url":"tw_stocks/1316.json"},{"revision":"a78c460611c598b899d174a13a3ce160","url":"tw_stocks/1315.json"},{"revision":"d54bc9c206f1985e1958cb3a8beedf21","url":"tw_stocks/1314.json"},{"revision":"2f378cd2f3389a7280276307f0e3bfae","url":"tw_stocks/1313.json"},{"revision":"ff4033e74b8a344218c7e67e1aba305f","url":"tw_stocks/1312.json"},{"revision":"14eac0bd2f1ce9c4a14b46f2d8d61c2f","url":"tw_stocks/1310.json"},{"revision":"f93ea2b18939764b7b0996ede14fdf66","url":"tw_stocks/1309.json"},{"revision":"6cef60be011927b3ac00f38d498b3a42","url":"tw_stocks/1308.json"},{"revision":"b5b429af5effa4fc674c3357289da4d5","url":"tw_stocks/1307.json"},{"revision":"629197ed55984f84eaaeb8e145184d3e","url":"tw_stocks/1305.json"},{"revision":"fc44eb33b5350d9eae017c58eeedd040","url":"tw_stocks/1304.json"},{"revision":"08ad3cc277ad5a3307276ee7342da14c","url":"tw_stocks/1303.json"},{"revision":"1d1bea20dc899aa2498e4135d09f64cb","url":"tw_stocks/1301.json"},{"revision":"b2ac6cebd2218d3118bf7b6a50ed40d2","url":"tw_stocks/1256.json"},{"revision":"22950bbbb262994f9f1f68bdd55be6c4","url":"tw_stocks/1236.json"},{"revision":"a1db43cdd31d8e27a6d675307f4ec024","url":"tw_stocks/1235.json"},{"revision":"5355d111c26339d42e8c4acf4d028735","url":"tw_stocks/1234.json"},{"revision":"a9759ff887ce6f650eba7ba27babb48c","url":"tw_stocks/1233.json"},{"revision":"84a968b27b394715d26f132837d2ca2c","url":"tw_stocks/1232.json"},{"revision":"8ea6fefeaf91e9c22e2d3733e7e2dd37","url":"tw_stocks/1231.json"},{"revision":"77dce689ce404a0c70be46827a044495","url":"tw_stocks/1229.json"},{"revision":"2f23fc02d33c91e1b513c1f425016970","url":"tw_stocks/1227.json"},{"revision":"53da5b4d2b95b4a5711a5cf73ddc242e","url":"tw_stocks/1225.json"},{"revision":"6519dfe02d9ceba440fbfe03f55fd7af","url":"tw_stocks/1220.json"},{"revision":"327930c05aba916b0f9a470ce1241737","url":"tw_stocks/1219.json"},{"revision":"6ff04ee8c09d47004024418950424293","url":"tw_stocks/1218.json"},{"revision":"143d0e88197593a706d2e10584a7ad6e","url":"tw_stocks/1217.json"},{"revision":"3a2edd898fff2b09d2b05b638aaa2397","url":"tw_stocks/1216.json"},{"revision":"1b0ae8b78888b98ad7585384935e0190","url":"tw_stocks/1215.json"},{"revision":"fcab0db54d56251e2211c41c1ee3e1e6","url":"tw_stocks/1213.json"},{"revision":"409167bf23e46461a5e4e38451eea182","url":"tw_stocks/1210.json"},{"revision":"03c70d57a41fc19fe8c229a48383c1dd","url":"tw_stocks/1203.json"},{"revision":"7f2e50d4a73f92bb96e4a23efc54a633","url":"tw_stocks/1201.json"},{"revision":"848cd92ca78464680107b047b5d3151d","url":"tw_stocks/1110.json"},{"revision":"34aaf097f69663e9894b400284962c6e","url":"tw_stocks/1109.json"},{"revision":"24de1b3d2bb628dd73925b10967f81a7","url":"tw_stocks/1108.json"},{"revision":"97a9cefb1b43d54fdeaec05e47956cc3","url":"tw_stocks/1104.json"},{"revision":"95dee259323ca2eef3f7a146f2e0b30e","url":"tw_stocks/1103.json"},{"revision":"88b06c7a676ff7744d60be7b91d9acec","url":"tw_stocks/1102.json"},{"revision":"eda39b06b4a7f7ae480098426a6cdef7","url":"tw_stocks/1101.json"},{"revision":"320496e4346d87c99de4933196278670","url":"tw_stocks/00999A.json"},{"revision":"aece62d800672e124fa2d847cffa7163","url":"tw_stocks/00997A.json"},{"revision":"a7e5a483fdb760f8fb6527a30cf4a608","url":"tw_stocks/00996A.json"},{"revision":"d61a144356ec45f4f6fe285ca67c7bd1","url":"tw_stocks/00995A.json"},{"revision":"e72d5150d91934f52b71fb6ecfbd7e72","url":"tw_stocks/00994A.json"},{"revision":"a2e5a30d033d10f704ddf3c25ca59953","url":"tw_stocks/00993A.json"},{"revision":"e76ad2624fd5fba2bf4fd6fef21354ee","url":"tw_stocks/00992A.json"},{"revision":"dcdce38cc9d54b39454b4d4247179766","url":"tw_stocks/00991A.json"},{"revision":"0c07f114083a076250e8383e45c47923","url":"tw_stocks/00990A.json"},{"revision":"11461291b02ce0eae0ace72cdaaa3365","url":"tw_stocks/00989A.json"},{"revision":"d37b591ee9bb020e57fc879cbd1e0ddc","url":"tw_stocks/00988A.json"},{"revision":"d06753c307c7e260211c55ef22691f6d","url":"tw_stocks/00987A.json"},{"revision":"59d2c171530cc7d572c6416fbe606908","url":"tw_stocks/00986A.json"},{"revision":"4016fb084674efd537cd1cc79cf5900c","url":"tw_stocks/00985B.json"},{"revision":"d094cf3e9661b2b456221383f8a29cc1","url":"tw_stocks/00985A.json"},{"revision":"3db1de8286fc18a48a44f3b3a2063ea2","url":"tw_stocks/00984D.json"},{"revision":"c49017a0d55e6d5b75ce6254d640bec4","url":"tw_stocks/00984A.json"},{"revision":"dccd23d690968e272991a8a589b8b369","url":"tw_stocks/00983D.json"},{"revision":"be682158ec4e2f471a57dfb86fa6bc3e","url":"tw_stocks/00983A.json"},{"revision":"6c955d592263a09e75e439db5eadcee3","url":"tw_stocks/00982T.json"},{"revision":"8d93c4abf9ceea56fb9e3e7ae19ca1f0","url":"tw_stocks/00982D.json"},{"revision":"91e3685eddbdfacb0a61fa9f599d4a73","url":"tw_stocks/00982A.json"},{"revision":"d384e7bbae1951493de8e524b8116d88","url":"tw_stocks/009820.json"},{"revision":"fe9f0b652b9cc8b08460223b6080ccdb","url":"tw_stocks/00981T.json"},{"revision":"1265164746624384d676d57aa9c2670d","url":"tw_stocks/00981A.json"},{"revision":"0436d8d22d41633953c472feca5f7adb","url":"tw_stocks/009819.json"},{"revision":"77c70dead2774234fbe13a74ef09ae29","url":"tw_stocks/009818.json"},{"revision":"ba8155cd6475b87605e34909c44fb6e6","url":"tw_stocks/009817.json"},{"revision":"bb86c87751501a4cd1a5ee43c565c58f","url":"tw_stocks/009816.json"},{"revision":"88e2bc9ed3ff3f85eac99bfa2d3bc68f","url":"tw_stocks/009813.json"},{"revision":"5389896c89b6cfbd3b357792d4b68102","url":"tw_stocks/009812.json"},{"revision":"40ee55e06c374c07321b379340ad207f","url":"tw_stocks/009811.json"},{"revision":"a19658cb6d9e4b9c75b118f4906f4b43","url":"tw_stocks/009810.json"},{"revision":"3d7d12e994e29db4e79a136641ff0764","url":"tw_stocks/00980A.json"},{"revision":"939496debd0fdd471e70b455c4ee47ef","url":"tw_stocks/009809.json"},{"revision":"2cebd6b11a3eef5db48e8b72422ad49e","url":"tw_stocks/009808.json"},{"revision":"a417d90e367fa8a0a9c3d3b02f7c79ea","url":"tw_stocks/009805.json"},{"revision":"dbb0d0d8552298c4ee8f82f0f8bc3189","url":"tw_stocks/009804.json"},{"revision":"a671f295f80c857a37cf4dcd911a3360","url":"tw_stocks/009803.json"},{"revision":"948c4c5ec3790f8b54386f997259240b","url":"tw_stocks/009802.json"},{"revision":"94656dfc224d00c34b4c0c3b79f314d6","url":"tw_stocks/009801.json"},{"revision":"390ab4eb176ef64cfd989730292cf73a","url":"tw_stocks/009800.json"},{"revision":"9f7d0878b735e5c26b0f1825d5e13f22","url":"tw_stocks/00972.json"},{"revision":"f2426ab5795d75f1a8bab7df4d3145e4","url":"tw_stocks/00971.json"},{"revision":"db0f6ff3eae8ce3c3628bdfd2160225e","url":"tw_stocks/00965.json"},{"revision":"c420a8938bd5ad9ca6c246eadd2872d9","url":"tw_stocks/00964.json"},{"revision":"e286599674c9e677ee1165ad2cc756ff","url":"tw_stocks/00963.json"},{"revision":"90a5c6c7f100ab958f83bd9c69ed325c","url":"tw_stocks/00962.json"},{"revision":"aa1c355ebad544021408792f74745bf8","url":"tw_stocks/00961.json"},{"revision":"36aadfcc74acaea4763595fe3c9cde2f","url":"tw_stocks/00960.json"},{"revision":"221ade1921b2e8e284ad4389604c22d8","url":"tw_stocks/00956.json"},{"revision":"604939e9914a212657154dfef30f1588","url":"tw_stocks/00954.json"},{"revision":"d51f78fbcefab0158444d98a69bdb25d","url":"tw_stocks/00953B.json"},{"revision":"79f451fa6b269816fb7315b07ea7b2f9","url":"tw_stocks/00952.json"},{"revision":"183ae9bf285f62a17e885e615cc90040","url":"tw_stocks/00951.json"},{"revision":"57833a4ca9879090e300e7b7ed8cffb0","url":"tw_stocks/00949.json"},{"revision":"417671bdd897e541dd38e9f1f31dd5b8","url":"tw_stocks/00947.json"},{"revision":"a52cf20b44c2752311ab7cbd880d868a","url":"tw_stocks/00946.json"},{"revision":"501e129273d1c842518088ed16e25fdb","url":"tw_stocks/00945B.json"},{"revision":"44f820f1afb9d265e1977bd4799d46bb","url":"tw_stocks/00944.json"},{"revision":"0bb89e85e5999823fc884bc21c3c1f06","url":"tw_stocks/00943.json"},{"revision":"7ba725dd7ba0ebb3380b56709ecf4842","url":"tw_stocks/00941.json"},{"revision":"e9416648c900cada8990dc3ae1a94a3d","url":"tw_stocks/00940.json"},{"revision":"d13d8ffccaca9c3619b1c3fc45188bc7","url":"tw_stocks/00939.json"},{"revision":"9248748f93f0431423e0080356ea9e48","url":"tw_stocks/00938.json"},{"revision":"73dc5e7243dbb4e7e7cde34cefd5a586","url":"tw_stocks/00936.json"},{"revision":"29e5df54b2e280315936426cc5693eb0","url":"tw_stocks/00935.json"},{"revision":"9a102328fa76d5770f3af02cdb372ed7","url":"tw_stocks/00934.json"},{"revision":"3aa02aa7341fda1e9455525ef52601dc","url":"tw_stocks/00932.json"},{"revision":"0f0f759f87b4e9503294f626bcd65d8d","url":"tw_stocks/00930.json"},{"revision":"1b5bd9612e75ca1e5a0cf905a013409b","url":"tw_stocks/00929.json"},{"revision":"1d9435161d912fe6653c16ceb77919ab","url":"tw_stocks/00927.json"},{"revision":"4af367c2c31ac7d7e78a82e0dd60fb75","url":"tw_stocks/00926.json"},{"revision":"504adad4efa5288f3234b50ee1ef46d8","url":"tw_stocks/00924.json"},{"revision":"35649ff7464733bcab00c7160454eeae","url":"tw_stocks/00923.json"},{"revision":"f258eb6d6014f04e67f1730a46ed60a1","url":"tw_stocks/00922.json"},{"revision":"0aae11e8e63134b839de76d41211fd7d","url":"tw_stocks/00921.json"},{"revision":"e94a2f577868665a9fff67a46875a254","url":"tw_stocks/00920.json"},{"revision":"3953a398eafd8dbef6a5be50aa2fd8ed","url":"tw_stocks/00919.json"},{"revision":"bf513c6d564073fb00dd8283e88bd4b5","url":"tw_stocks/00918.json"},{"revision":"403b2c73f13d579518479d2e9a550b67","url":"tw_stocks/00917.json"},{"revision":"70e49d11c02b36c9e1b3a6e4bb86b807","url":"tw_stocks/00916.json"},{"revision":"85489497059442c12ebb5c5a8c9f1b6e","url":"tw_stocks/00915.json"},{"revision":"bea1b7b792a2df8d0dc3733d88a6a5ce","url":"tw_stocks/00913.json"},{"revision":"2d84b917b8eac9414d48a98665548fab","url":"tw_stocks/00912.json"},{"revision":"be43cb3fee49133c42270bd79f3fd324","url":"tw_stocks/00911.json"},{"revision":"aad1ea0e371bfd65f30cacda3b6e05e7","url":"tw_stocks/00910.json"},{"revision":"7ca574393a5af1de0b55c27170b27f63","url":"tw_stocks/00909.json"},{"revision":"01124bd7a420e1addf093434594d186c","url":"tw_stocks/00908.json"},{"revision":"6d3170e87e8dc56637492c1644d6ed44","url":"tw_stocks/00907.json"},{"revision":"1cbbeadb924b30a50eea2be7614bb727","url":"tw_stocks/00905.json"},{"revision":"c23a90cafac3ac215a213c7a008c104b","url":"tw_stocks/00904.json"},{"revision":"b655c7bc6d40c22b330a847976cc568e","url":"tw_stocks/00903.json"},{"revision":"4bf48bc71e8c73b77c81c5a13d9d0ecb","url":"tw_stocks/00902.json"},{"revision":"b68cb4afbe442f435fb852ac494cc29c","url":"tw_stocks/00901.json"},{"revision":"36f1041302dda8a197a1b137171a8601","url":"tw_stocks/00900.json"},{"revision":"d7ead3262ac18b65bc215869f74b078b","url":"tw_stocks/00899.json"},{"revision":"3672fe1b6dfee937d1f7a003208dee83","url":"tw_stocks/00898.json"},{"revision":"1e8332e30e71f1e982c018a4d951b2d4","url":"tw_stocks/00897.json"},{"revision":"fcf2c19c780a1aeafacca4060ecc68c7","url":"tw_stocks/00896.json"},{"revision":"302c85302005267dac67bac93e8645c4","url":"tw_stocks/00895.json"},{"revision":"2240f30e14998cd11068d56875be3723","url":"tw_stocks/00894.json"},{"revision":"176ecd82a6bc06d84e4b64f2e03669cc","url":"tw_stocks/00893.json"},{"revision":"2ed982004b51153d65522948febf20c5","url":"tw_stocks/00892.json"},{"revision":"accd0e4e25d6038efe7cbfa0d4611d9d","url":"tw_stocks/00891.json"},{"revision":"499ea88e63b6d666551e1cc55cdd2fd2","url":"tw_stocks/00885.json"},{"revision":"53467baf4ba7a43c6f60205b331067e4","url":"tw_stocks/00882.json"},{"revision":"9db68be0247e6f02003569a1f8f791c4","url":"tw_stocks/00881.json"},{"revision":"4a18c70491a537dc73e7c3116c2b51a8","url":"tw_stocks/00878.json"},{"revision":"28ed32ca37886c4a2d18cfa1b5122597","url":"tw_stocks/00876.json"},{"revision":"3ca850f0a5691fc76ca7210e1ca3f45b","url":"tw_stocks/00875.json"},{"revision":"35bd2bb07c1ab986340e88312996ec9b","url":"tw_stocks/00865B.json"},{"revision":"eeb85c09c6c3f39da7fab8d6e625c8d2","url":"tw_stocks/00861.json"},{"revision":"cb68aef50e559ecfa8b224ddbd35d469","url":"tw_stocks/00852L.json"},{"revision":"aa0bba5fff49f6cef89da161b284462b","url":"tw_stocks/00851.json"},{"revision":"fbb0d713e6a7df0c304debd44f729d64","url":"tw_stocks/00850.json"},{"revision":"34ea61c95d5631dfc4875846a104ce0f","url":"tw_stocks/00830.json"},{"revision":"6611607774867629e7fe7b0aebdaaa33","url":"tw_stocks/00783.json"},{"revision":"cdcdcf0f25645580ae7d0a93fee95890","url":"tw_stocks/00775B.json"},{"revision":"5e67e61362514ba4d4ff0ce4e1af3db0","url":"tw_stocks/00771.json"},{"revision":"635979fbafdc6afa2a4d605bfb9292b5","url":"tw_stocks/00770.json"},{"revision":"3b41f02ade18f872e0bc8cf5a04ceb26","url":"tw_stocks/00763U.json"},{"revision":"c2a9c3a9e5a61068059c1e2a8add4970","url":"tw_stocks/00762.json"},{"revision":"6c65cdf1571833fda2fc4870cebbdf0c","url":"tw_stocks/00757.json"},{"revision":"daf17c37f50885018422f0ba6e44b1be","url":"tw_stocks/00753L.json"},{"revision":"c0d1b0ab799e3348d8cb35cf1ced766a","url":"tw_stocks/00752.json"},{"revision":"636f87dcee1c02dbb31ae5f414a0a8c6","url":"tw_stocks/00739.json"},{"revision":"b0f29d7e49e3f114140b8be58aad58a9","url":"tw_stocks/00738U.json"},{"revision":"f0f9c920f608bc9bedffc7cbf0852900","url":"tw_stocks/00737.json"},{"revision":"9424deec87efdcedb2f6e74e0b2134a9","url":"tw_stocks/00736.json"},{"revision":"2a610a21396cbdc27bf0698ad413e9d1","url":"tw_stocks/00735.json"},{"revision":"2a54512f3c656b646271e05efba4dfd7","url":"tw_stocks/00733.json"},{"revision":"533976346aef4ab8e4fe5c6d1bef07ad","url":"tw_stocks/00731.json"},{"revision":"ca39abde6c23d8f138822900051e4be2","url":"tw_stocks/00730.json"},{"revision":"8b4fa800a5aeb4d68873b189b1a09ef7","url":"tw_stocks/00728.json"},{"revision":"fb6c0c46e75023e4ada3c03af67dfea8","url":"tw_stocks/00717.json"},{"revision":"9af6fae941288110627da938757c1d43","url":"tw_stocks/00715L.json"},{"revision":"80d17991f75d83ebb6f67c4fb2226865","url":"tw_stocks/00714.json"},{"revision":"a56ba733f327fe20d8cff02a7779ba78","url":"tw_stocks/00713.json"},{"revision":"72b4f9203b34c31a296b47769ef412fb","url":"tw_stocks/00712.json"},{"revision":"9032ddef47de36a9c496dacb8f7659ad","url":"tw_stocks/00711B.json"},{"revision":"ae64d43f39e6f791cd7407202e90600f","url":"tw_stocks/00710B.json"},{"revision":"3af61c45dae52af04d1489ef3c6750d5","url":"tw_stocks/00709.json"},{"revision":"0e35e6f3f33bfd2296869bb1572cdcf0","url":"tw_stocks/00708L.json"},{"revision":"50f42b8a1345207f0169f8b034415dbc","url":"tw_stocks/00707R.json"},{"revision":"a3688ad4d850f62adfd1c1bf590e441f","url":"tw_stocks/00706L.json"},{"revision":"522706b00a8ddfc5a868276c34843c41","url":"tw_stocks/00703.json"},{"revision":"861c39ad7b653b16afaa789ef37d7542","url":"tw_stocks/00702.json"},{"revision":"75c5db615a92f2388feffa7b78eb249b","url":"tw_stocks/00701.json"},{"revision":"673c45159315dc08f8a39ae77763066b","url":"tw_stocks/00700.json"},{"revision":"bd2179913cbccb698b60a12bbbe145ed","url":"tw_stocks/00693U.json"},{"revision":"7877def07c33cc2ca41b8517e57e8972","url":"tw_stocks/00692.json"},{"revision":"800cc2636b0073467297bbb878393310","url":"tw_stocks/00690.json"},{"revision":"22a71beced114104019b6b4322678845","url":"tw_stocks/00689R.json"},{"revision":"2514f1867ddf508349cd1112ae7d729a","url":"tw_stocks/00688L.json"},{"revision":"909292067c15e209a4f2c8b4e4aba403","url":"tw_stocks/00686R.json"},{"revision":"f0a8826f3e556d8eff2c1bc39a95220c","url":"tw_stocks/00685L.json"},{"revision":"b9a86e0eb7fff8e229a2a9111cecf38e","url":"tw_stocks/00684R.json"},{"revision":"33fd2ac0bf24c66880dbedc7baef62bc","url":"tw_stocks/00683L.json"},{"revision":"59810b157b0822cb7f13315a034df5c7","url":"tw_stocks/00682U.json"},{"revision":"aee55eccd4f9b3a7308874f23f0e6f79","url":"tw_stocks/00681R.json"},{"revision":"753d14d78a91e6e2a6d216fe284abdcc","url":"tw_stocks/00680L.json"},{"revision":"26c744979f99544c19cdddf87ce7b689","url":"tw_stocks/00678.json"},{"revision":"eb527610ba8e263243f665af533e83d4","url":"tw_stocks/00676R.json"},{"revision":"bba9278af91365da9ac8da4605188fa8","url":"tw_stocks/00675L.json"},{"revision":"fa5a793d7efab59e4616f560f9aa1cc5","url":"tw_stocks/00674R.json"},{"revision":"d174349094c82e9f6fea2bf15d62a471","url":"tw_stocks/00673R.json"},{"revision":"4e3de225d7b948135252bef6a04cc10c","url":"tw_stocks/00671R.json"},{"revision":"6ef4d0c86d72f7c65356ee8609bdb5e4","url":"tw_stocks/00670L.json"},{"revision":"5610065df66732a54fc6b890a08194c1","url":"tw_stocks/00669R.json"},{"revision":"7e52b7234f78e8408d723941cbeea055","url":"tw_stocks/00668K.json"},{"revision":"ce820c319d044415b2615be031da7bae","url":"tw_stocks/00668.json"},{"revision":"c682f9429a7e9693708a046e2deceaa2","url":"tw_stocks/00666R.json"},{"revision":"b2c30c3e399beaae14c4fae8d221aa9e","url":"tw_stocks/00665L.json"},{"revision":"3332d40b9bb8f47b2023db4fbaf90e41","url":"tw_stocks/00664R.json"},{"revision":"160b85f9c8cd7e10918f62a39d5330b4","url":"tw_stocks/00663L.json"},{"revision":"af54207846c0cccb6844d976e2b7e029","url":"tw_stocks/00662.json"},{"revision":"86c12b92212876fcbea23c36fa3e9f81","url":"tw_stocks/00661.json"},{"revision":"12b1cd601bde394d861324786ae17644","url":"tw_stocks/00660.json"},{"revision":"ae84c4319676c140b68badd942d5caff","url":"tw_stocks/00657K.json"},{"revision":"afc86c4b39f059efff133cb6f43a9566","url":"tw_stocks/00657.json"},{"revision":"468705e5a1bc608def0df252c791ed4b","url":"tw_stocks/00656R.json"},{"revision":"f8db3c98d75973e1e77448ac7b6fb26e","url":"tw_stocks/00655L.json"},{"revision":"8520242e6e6e280ffec20cae73a1f05d","url":"tw_stocks/00654R.json"},{"revision":"e9b4f5ba92ec36092b0c83befb4f49c1","url":"tw_stocks/00653L.json"},{"revision":"c5101a7dd840628cca03ed5a8c08a942","url":"tw_stocks/00652.json"},{"revision":"a547cf9bea5e59ab5537215050b765a0","url":"tw_stocks/00651R.json"},{"revision":"799acef664d249f76a23461346c84020","url":"tw_stocks/00650L.json"},{"revision":"50512b5a1baf5118670363f80f2a0582","url":"tw_stocks/00648R.json"},{"revision":"f6708ef31fee55ab2a9ce40bad910672","url":"tw_stocks/00647L.json"},{"revision":"9027768c3a8143fe3929996c1b4d9512","url":"tw_stocks/00646.json"},{"revision":"85c487123e5021c0173810678b306f22","url":"tw_stocks/00645.json"},{"revision":"a08f1af3ca75d56e8d70fd4287a29ba5","url":"tw_stocks/00643K.json"},{"revision":"405abf9497dbd2f927989ceeb3ebdff6","url":"tw_stocks/00643.json"},{"revision":"a735c8d908bc9d42fec842b18aaf6453","url":"tw_stocks/00642U.json"},{"revision":"8a3c6f0433a06756678e9afd2bd3ff06","url":"tw_stocks/00641R.json"},{"revision":"4c57399d1a5de442d677bdc2ef65e0bd","url":"tw_stocks/00640L.json"},{"revision":"76c7c67dea07669275d88ef6209fa0d5","url":"tw_stocks/00639.json"},{"revision":"1f8ae6dcfbeab048fcdf2cea033c60ee","url":"tw_stocks/00638R.json"},{"revision":"5bd4f814cb13d7faef017d29c8fb4931","url":"tw_stocks/00637L.json"},{"revision":"d28204ecf6ececf6d0425957baa782ea","url":"tw_stocks/00636K.json"},{"revision":"a3551d2302a5c22f912c65f010dbb3e6","url":"tw_stocks/00636.json"},{"revision":"d9264e1f2685cbc72b1ae0bf53f66320","url":"tw_stocks/00635U.json"},{"revision":"1c083c632146c73d646d7023621d6b2d","url":"tw_stocks/00634R.json"},{"revision":"38530e43d573aed1290ef684c7523b3d","url":"tw_stocks/00633L.json"},{"revision":"6c3cd26367847f9a8f488449670d5e2d","url":"tw_stocks/00632R.json"},{"revision":"704c5c236fdc23130eb39401c03a307c","url":"tw_stocks/00631L.json"},{"revision":"3e63d5803460a75114841393f7b66f77","url":"tw_stocks/00625K.json"},{"revision":"c3ae0e8f3c69b15b9840b04616b4d0f8","url":"tw_stocks/006208.json"},{"revision":"8e5a2c52003191c63aeaaef00ef3dd36","url":"tw_stocks/006207.json"},{"revision":"65dbb45e84256f5172fc1e7b73424c1b","url":"tw_stocks/006206.json"},{"revision":"abfcc1bf10d73fd669c4b6bcdd975d22","url":"tw_stocks/006205.json"},{"revision":"b65a221ea34116c29e85c73f5dfa72c7","url":"tw_stocks/006204.json"},{"revision":"ef755765e9ff49291b4642195c408551","url":"tw_stocks/006203.json"},{"revision":"9a061bc84e368d969fb1f6501fabae37","url":"tw_stocks/0061.json"},{"revision":"21c88cdf4cb4ee8096ef2c9f2e7ce63c","url":"tw_stocks/0057.json"},{"revision":"277718eafae0ee0d074e588286259769","url":"tw_stocks/0056.json"},{"revision":"544f6e3f2491395d4361f9c2d1050980","url":"tw_stocks/0055.json"},{"revision":"41dc26b7b8d985e339aa311e959f0f1e","url":"tw_stocks/0053.json"},{"revision":"eb5e04b456e28118c93a87262fdc119a","url":"tw_stocks/0052.json"},{"revision":"4e4c169a14fb954b87fb31d9b9008d39","url":"tw_stocks/0051.json"},{"revision":"afceb164f61a8a9b578e562b6376bcfd","url":"tw_stocks/0050.json"},{"revision":"ea015bfce47339d5d4777c84e2b5d90e","url":"tw_stocks/00403A.json"},{"revision":"8fd7dc2ba182db6bf84ae60c4c3573dc","url":"tw_stocks/00401A.json"},{"revision":"1a455501f98738ccd31b18cc1562ba02","url":"tw_stocks/00400A.json"},{"revision":"33be8b6b166824f47bc09a1b4e40985b","url":"subscription/callback.html"},{"revision":"6891f02237d3bbe63eed94cfb43ef6ec","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"48eb159c4b51b6dbd83a4404a3f987fa","url":"financial/rebalance.html"},{"revision":"0696e70f4d95e82c5fa01fc14d7b32bd","url":"financial/cashflow.html"},{"revision":"8d143bd55bbe8d224433c26b0cea9124","url":"financial/balance-sheet.html"},{"revision":"a568bec0046744fc1e4398279532d44c","url":"finance/tags.html"},{"revision":"ca540fc7caf8eb5515b9571b4680dc10","url":"finance/finance-section-created.html"},{"revision":"df5e3636e0b99d245aafb26b1c5da524","url":"finance/finance-2026-04-30.html"},{"revision":"7ff0fc45f11fd99812bb7ceefa291bed","url":"finance/finance-2026-04-29.html"},{"revision":"893f214cfe7e9318d390c39ca7352c21","url":"finance/finance-2026-04-28.html"},{"revision":"399fba04d52b1d9c19829b45f48f23f0","url":"finance/authors.html"},{"revision":"c392442d77ecc4e49ed8f02f6f08c518","url":"finance/archive.html"},{"revision":"05f47ef952f4fdba43e8d7a5a17d49a4","url":"finance/tags/finance.html"},{"revision":"e460650680e4b3f817ddc3b245fe3ab8","url":"finance/tags/daily-report.html"},{"revision":"93c7f42902306fda5bcf3fe8a8e6cf81","url":"finance/tags/announcement.html"},{"revision":"b0f45a86c5d202144ac08b0b95ea17fb","url":"docs/tags.html"},{"revision":"4f6071a10bb60f75eb93cf1923be4dd8","url":"docs/intro.html"},{"revision":"a8aeb22ca5ff4b05d98008cae6700bab","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"8a31dce8c7dcc370e883c889dbd8be3f","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"01f04483a36cc33327717e2b700eeae2","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"6f48c721fb7aa9e4d50003dcb21f08be","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"aac94be0e9f47f16083b50c41929b335","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"ecf2f3615c1cbaaa38cf70180934196a","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"f81ff87fa4b18d31d020fd44e4ab8f19","url":"docs/tags/黑箱協議.html"},{"revision":"56cb80981a6798f3377a5a32206c398d","url":"docs/tags/養成.html"},{"revision":"63dbc862456c17d24ce3a3298eba41f6","url":"docs/tags/資料安全.html"},{"revision":"43965fef2a43812cf15a8796681a9bd1","url":"docs/tags/經濟循環.html"},{"revision":"af5e237a6545247b3dba33c17aae7f78","url":"docs/tags/百科.html"},{"revision":"5c32044fa281d11fc02e650c02016f0a","url":"docs/tags/模型控制.html"},{"revision":"8a27544d48ba2004108b45d0ec50fb8e","url":"docs/tags/數據標準.html"},{"revision":"2e9f18afe6c88de41b1a2c186e2748ca","url":"docs/tags/接入規範.html"},{"revision":"45faa646b444c8bdd1e332df2c5b2e66","url":"docs/tags/指南.html"},{"revision":"6d7e86f1dc9ee1dde61ba44c450805d3","url":"docs/tags/技術哲學.html"},{"revision":"194848b5de994b4615657500c8756e55","url":"docs/tags/技術史.html"},{"revision":"d7318f15a9592131914631c854bf8801","url":"docs/tags/戰鬥系統.html"},{"revision":"bc5a1b9e9e1e8b82513a5ce02720c45e","url":"docs/tags/專案管理.html"},{"revision":"692d11e82927f566cbea1e9baefb1131","url":"docs/tags/安全架構.html"},{"revision":"1fc509aaa053861070eb81bc545a1123","url":"docs/tags/安全協定.html"},{"revision":"1c33009f26004be9a168b31b9c3426a3","url":"docs/tags/外部開發者.html"},{"revision":"3d889992dedfecfd663eaccefdef58d0","url":"docs/tags/商店.html"},{"revision":"93edf7567e345365e4e2ded5163d5c28","url":"docs/tags/去中心化標準.html"},{"revision":"5d3176995a154cf86a4daed9020c5fc5","url":"docs/tags/去中心化安全.html"},{"revision":"b6608636a4479a9b24c1ba10f558c175","url":"docs/tags/去中心化.html"},{"revision":"c963d34af11372d1f7f9d720c641fb0c","url":"docs/tags/top-p.html"},{"revision":"3f0b4ef57a356f3a0aaf272594a7d573","url":"docs/tags/tokenizer.html"},{"revision":"cf2a08350b57bf9a8716e0761e38afa5","url":"docs/tags/temperature.html"},{"revision":"8f431c4c39355877cd9398aaabbe0221","url":"docs/tags/technical-docs.html"},{"revision":"2a6009c7241a9468e257c3c81d5b8b9c","url":"docs/tags/nlp.html"},{"revision":"b0c6aeeb5a9db9774ef80ebdfc3a66f2","url":"docs/tags/llm.html"},{"revision":"6a2dcbed71912c07faf3941d09a0c22a","url":"docs/tags/git-hub-copilot.html"},{"revision":"f2e53c74e1fb2606ac835383cb14a344","url":"docs/tags/generative-ai.html"},{"revision":"638a8c19b4a2eb9d7412e5940ecaa89a","url":"docs/tags/eip.html"},{"revision":"e20a0d99fd35279ee69382b399530de4","url":"docs/tags/development-tools.html"},{"revision":"e7bc1c6b01262bbeeaa84ca664ac3840","url":"docs/tags/cli.html"},{"revision":"81512b1ee3888b1e79a64f79d6558e78","url":"docs/tags/claude-code.html"},{"revision":"c62178ce8d7e7f7c3ea005f21a21a9d1","url":"docs/tags/bpe.html"},{"revision":"e659fe18eb6355d533cb14340495ab0b","url":"docs/tags/automation.html"},{"revision":"4ce22469922a03216dfb74bfdfad972a","url":"docs/tags/ai.html"},{"revision":"79dca93603f3672f7e1178217fb248bc","url":"docs/tags/agent.html"},{"revision":"d2d228236849b0143432378d541ad34a","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"4942c6c02f07d844afa612f93c9d45cf","url":"docs/skill/gemini-skills.html"},{"revision":"5d3a63815c67ece4ad55ae9e1ef4abf2","url":"docs/skill/container-builder-skill.html"},{"revision":"c32cf6a1261e88aa1584adecbed29318","url":"docs/skill/claude-code-skills.html"},{"revision":"0c98cca4ad955f3088c0d5f14f87264b","url":"docs/python-workshop/python-init-file.html"},{"revision":"cdad39bba4690565dc91b3b451f76cc4","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"c7298c5241925d40343b5159f0b30a9e","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"0284aa3d643e68cd1135c4a798e084ef","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"fe20b9a9c47d2a9db9615f2aad1f56cb","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"b1dd3a917ab11d971738a455418bc94f","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"3f445c4e36f50f7c1070fc630e40a49d","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"bd0b5f2021d0fe9888d151b0928625b1","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"002981eb91238ef84ce0ef42786590a2","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"1aa7c2eb7be70d9e071323686fefb9ee","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"88c40d54b7c10ee66046af3f7da623a3","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"2838a9d49e1f8ab2da1171918eefcfcd","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"5752b98ae51d94b277e09ee84a6a1010","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"86b1016f6bf2d3834690539d671ba41d","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"10e9d4324670da721b5d350bb17810f8","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"8c2d1be4a3d9e30bf32843814d1dfbd9","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"1a47d6b1ad528ba58b7e1575541481ca","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"78de5cef9b6264717d1cf1f6e075153f","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"dcd83769a4bf075ef24d51c56e9c9eda","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"de355135a826029dce16dc60acd4a1a2","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"a8c557b44a7f06e85a0d43e1407defc7","url":"docs/claude-code-series/skills.html"},{"revision":"88bd2ad6eb9a65555046c0cf08df6b40","url":"docs/claude-code-series/monitoring.html"},{"revision":"ebbd8d91c67f656577cd24049803617f","url":"docs/claude-code-series/getting-started.html"},{"revision":"66b7db6e73a6182eec5a712f2dde8b71","url":"docs/category/遊戲規則與手冊.html"},{"revision":"ed857008dbf83dba203642f8acea54eb","url":"docs/category/發文-skill.html"},{"revision":"7c65f5575a0f7d4a9d81164770f69e82","url":"docs/category/戰情室元件-skill.html"},{"revision":"9e13f4abe0813b3a4b1e817905d056a2","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"a64afb2bf74e6184894d749427cbad52","url":"docs/category/skill.html"},{"revision":"470056d529326fc10fc2fc902d9000cf","url":"docs/category/python-workshop.html"},{"revision":"60f3f8170375be4af0f3b2b8c140ebb5","url":"docs/category/egg-pet-philosophy.html"},{"revision":"33ca256301e1818d14b7aec308832676","url":"docs/category/claude-code.html"},{"revision":"a8c035e52d0d928a0e3379b34e0d6754","url":"docs/blog-skill/news-rules.html"},{"revision":"178ca7b333c5621889fdbef9b1a5f6e7","url":"docs/blog-skill/history-rules.html"},{"revision":"6a8ffa9490637f33dc97732d49852b8d","url":"docs/blog-skill/finance-rules.html"},{"revision":"32c248d3860157839711b9e3de7a931e","url":"auth/callback.html"},{"revision":"6441f637155989303def44f1b7f49ab2","url":"assets/js/runtime~main.29e28773.js"},{"revision":"72734a625633284129c28698d29dc27f","url":"assets/js/main.b10976ab.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"12253c9e6f3c4523d0696b583f6c760b","url":"assets/js/ef86e77f.24887a9c.js"},{"revision":"2783d1598119d406bd403afb4399cb70","url":"assets/js/ed4d73f8.e30c4ee8.js"},{"revision":"cc23ed2dbe5c17edd9f5914f70cbc84d","url":"assets/js/ec1e3285.425d78ec.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"0c519acbf1a3188ff6e83356300d42c6","url":"assets/js/e88c4a9c.89b3d85c.js"},{"revision":"d0e12844e1eb589f58de5170429c601a","url":"assets/js/e86a5a75.5c2ea2cd.js"},{"revision":"29e676bc42a84cb886af51b3ea90f0a2","url":"assets/js/e7f07728.83b7692a.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"4c1f1df309df99be1322606d25d6584d","url":"assets/js/dfea6eb9.e8f87ea4.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"3f1676ab465d1a9ebe98f984beecf81c","url":"assets/js/dd5b562f.a4596630.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"236c22f501747cf9663876615cf753c4","url":"assets/js/d90f4af5.0be103d1.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"49ac91d59cfd63e15746fcfd76fcf59a","url":"assets/js/d1fa896a.37c31671.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"6748ef37f4a6240fc9274ced16ae095b","url":"assets/js/cc221b30.e0150ae4.js"},{"revision":"387eb2e191838305b3e044990322a2a2","url":"assets/js/c9add68e.af4b9807.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"4969b909dd47e5f0ca2cf7ec2db42559","url":"assets/js/b95eaafa.b511d36e.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"3744a54bb8b1caea6734448238c9d5c3","url":"assets/js/b283ca86.da1ac689.js"},{"revision":"9b503c09825e3b06a2525ea81623ed3c","url":"assets/js/b2814407.b188a450.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"6058f8e74e5fd040d4c88bc27b9b1cec","url":"assets/js/ac590df8.2f5c0970.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"54434952783417b6ba9f09554ef89dc5","url":"assets/js/a71ba949.20f1a31a.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"058deb5153cb5f71a90a4dc02117c7c3","url":"assets/js/a6038fd8.f464dabe.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"6d6ce28242c974b6153ca500da9bd5c7","url":"assets/js/9adafc71.719ac4eb.js"},{"revision":"61aeaea3e7d47dfb899125c4f831dbd1","url":"assets/js/99d3b34a.1b97588f.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"2cfb1fda8181e6e66ec21157e520c19b","url":"assets/js/98831978.52cf607b.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"4d3e8488ba3d7570f188a2e6002c937c","url":"assets/js/923ed0b3.cdb68d11.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"7d7a1d917a9983a7cc29beda6a21bf3d","url":"assets/js/8c20996d.b8ac996b.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"1aef76b49a46dddf6698a5f91bc7f01e","url":"assets/js/853ca2df.5afb2ad2.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"e32e3de018d5d71bec74850a3e6e1ec6","url":"assets/js/826b5919.66678e0c.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"fdd32a9ae9fe89f9e6a531c584a05c70","url":"assets/js/7fbc1a25.57805a73.js"},{"revision":"a8b20acdf6fac0421b31634da2d4ffc9","url":"assets/js/7de88436.7ad7ab25.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"98f0206ce8b4db50a18eb5afd2dc3b7d","url":"assets/js/7ce5d7a1.c304a292.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"d0a22d387fdb50c13c4ca8eb607d70b1","url":"assets/js/767bd1d1.4541aabc.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"d524b481e370d796169206c15a4b899e","url":"assets/js/61327162.054edca8.js"},{"revision":"89ea3eb57d3620b42507b27e7856622a","url":"assets/js/607acb04.b3c5a844.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"abe9106840bd2cc0fa6d4d7fc3f4de0b","url":"assets/js/5a762f2f.e0b9e142.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"520185d2c668e807924f7a5d5b15e0b5","url":"assets/js/56fce896.1d10cbde.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"21a92d5abe884a48aa336e8cd524e130","url":"assets/js/54513d10.563c4fc8.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"0e86f678c1505b1d9ec664ff7908e130","url":"assets/js/4810d89a.90c93dbc.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"e725ba46c4da3c52221a7d6dccfc787c","url":"assets/js/448a5b13.47aa7c09.js"},{"revision":"d454bdd9e50c81434951debf84abea06","url":"assets/js/43ea09b6.63c70acf.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"c1fd865e96b7d100278ef0a972fff789","url":"assets/js/41937f2e.712ee1ec.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"4eda8ed762d30e886d954541c440b932","url":"assets/js/3ee3fb84.7b28869b.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"a972457ec0cdb23b0b86750dac266ef5","url":"assets/js/36f337b1.3a2527ef.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"b47a53b588cc4da5548b66ae02b6a502","url":"assets/js/304a23a0.4db69f5f.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"db45b87184091a6b4e8a8451d5fda308","url":"assets/js/2dd9eb9e.7b16af22.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"eee1e7306229c7ca946d668b7a6e0290","url":"assets/js/23d26d3d.27bdd685.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"ae1c1f6edcf81eadc6b98cf10d8d2657","url":"assets/js/179b82d4.72c1d947.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"f771c4dfc91501923f033818646c3b42","url":"assets/js/177ac620.159db90e.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"279133ce02a8946bce6d5cbab60103ec","url":"assets/js/162c7fa0.07f25ca6.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"2e94193b1fdf98f8d24ab6d9316f4e2c","url":"assets/js/148a248b.2f9ba7dc.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"e351ee78b85d41b44348b32e4f2c9b9b","url":"assets/js/0e384e19.469e1a44.js"},{"revision":"28f006ff42982cddfff809ec9da1a162","url":"assets/js/0a3b6be8.c89dfcd3.js"},{"revision":"7dc5156c3fbd611bbecbd47555e43384","url":"assets/js/0962a2ae.44585ee7.js"},{"revision":"10e47836abc38f7b8654451de70560b3","url":"assets/js/0786d169.38bd3f93.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"06c11b27245eb912a81f9acfd5f8e57f","url":"assets/js/02366042.2752db5c.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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