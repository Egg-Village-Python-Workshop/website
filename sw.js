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
    const precacheManifest = [{"revision":"b273ddf6afcdef2fbf7607aab78d3351","url":"tw_stocks.json"},{"revision":"7ce461d3a257a337617c13b215da36ac","url":"subscription.html"},{"revision":"455fa21bcb2a6273aa20909e6715916e","url":"quotes.html"},{"revision":"5593437f7079e760d86a1538d3d7881a","url":"me.html"},{"revision":"1e4b5960703c424c85a33fd6e50fcc16","url":"market-war-room.html"},{"revision":"f07d87e942f254116345f8e260701a3c","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"9ea1aa6b4350903985bb0c0a83342a2a","url":"index.html"},{"revision":"872bc4d004a3d453f8efa6de9ee0cc5a","url":"games.html"},{"revision":"c7668e5a21a94fde9d5bfa485cb541f9","url":"finance.html"},{"revision":"d63db18c61d9d45a04d5b04472c77098","url":"feedback.html"},{"revision":"2c84064c2cf9f3ee85a6333a877a7502","url":"arena.html"},{"revision":"2c42a45e727b16125c60f2e2e966033b","url":"404.html"},{"revision":"e736b50d0abaf54d764bcf9123b32b52","url":"tw_stocks/9958.json"},{"revision":"aceee6d402b67f198596c2ef6f3cd431","url":"tw_stocks/9955.json"},{"revision":"d3df85c829136ec128f9851735277abc","url":"tw_stocks/9946.json"},{"revision":"cff9ea3050529e47af37f4b7e7ed7b0d","url":"tw_stocks/9945.json"},{"revision":"fcf740670892ecd78a1490c3f1b02f45","url":"tw_stocks/9944.json"},{"revision":"bb2e9ff7e3a48eac369974304e3cae5b","url":"tw_stocks/9943.json"},{"revision":"0d3e1190295551ede7fd5c5479128ea6","url":"tw_stocks/9942.json"},{"revision":"8595d7cba5852a22f34d06daa88727af","url":"tw_stocks/9941.json"},{"revision":"bcfef2a89359f0ce68fa059e9e58f152","url":"tw_stocks/9940.json"},{"revision":"bd01e8ee856d2c5cdd36b60c0b0ef506","url":"tw_stocks/9939.json"},{"revision":"bdb0c8625638e80a551800bf48d5931f","url":"tw_stocks/9938.json"},{"revision":"dd8a139871f62202fa994968698f7951","url":"tw_stocks/9937.json"},{"revision":"c2227884476b1c2958229b7ff95f1e5a","url":"tw_stocks/9935.json"},{"revision":"cfd77d7cc3fb3972add3b86dd4258110","url":"tw_stocks/9934.json"},{"revision":"c8a81d39a8b3cd06fce2550d99e5e9ca","url":"tw_stocks/9933.json"},{"revision":"bab0f2718b85196ea43b3911b5d32ad0","url":"tw_stocks/9931.json"},{"revision":"18ab476fd0706ab6b7bf65bb8181ab90","url":"tw_stocks/9930.json"},{"revision":"2d582aef7fcf31c980d8730eadf0ebeb","url":"tw_stocks/9929.json"},{"revision":"9c0d1dda3998bb401d19ce80d7cd51fe","url":"tw_stocks/9928.json"},{"revision":"066f8ab720469b9af9a68f2b74d3b325","url":"tw_stocks/9927.json"},{"revision":"9801ef6c5557a15bfc29d868fd06ee06","url":"tw_stocks/9926.json"},{"revision":"5a5293499a537711ca2d66770c3a516f","url":"tw_stocks/9925.json"},{"revision":"fb529c515ab936b8f110486c1ed5fc3a","url":"tw_stocks/9924.json"},{"revision":"f67491b87f4db731d9aa6686b806e973","url":"tw_stocks/9921.json"},{"revision":"6e9a40ef03bf2260484395b4db8731c1","url":"tw_stocks/9919.json"},{"revision":"1f69634e096659e9ba6c6a011bcdfb15","url":"tw_stocks/9918.json"},{"revision":"395345510b28b93b142aabb79a1d6860","url":"tw_stocks/9917.json"},{"revision":"85b290f9b67d4b9b0623762ea14db989","url":"tw_stocks/9914.json"},{"revision":"2eb80768f9f7e48a7e460463ca19bf4a","url":"tw_stocks/9912.json"},{"revision":"c1d201b062a05a1de449c8f4e3958ac2","url":"tw_stocks/9911.json"},{"revision":"85d4e2ce4e91ee834888b25dd22e87b6","url":"tw_stocks/9910.json"},{"revision":"a6cb71a5171b59b28a19499c4f35c442","url":"tw_stocks/9908.json"},{"revision":"1057c397a51b56966399a89853206d1b","url":"tw_stocks/9907.json"},{"revision":"8151f7d2c193f8ca6d4a04d41bc6f070","url":"tw_stocks/9906.json"},{"revision":"595cd63ccb4254600a22c2617dc59a22","url":"tw_stocks/9905.json"},{"revision":"4ae3e0dbf33c47d37f1d60353a484c5e","url":"tw_stocks/9904.json"},{"revision":"0b89b8d2faa80d065f2142176ef16102","url":"tw_stocks/9902.json"},{"revision":"0e6b18f310b1783efa0350767021aa9c","url":"tw_stocks/9802.json"},{"revision":"7f6fe8abd9c8b1e1b9c6cb2dce43fba8","url":"tw_stocks/8996.json"},{"revision":"4fb1fae923ef35da5917f34050c58336","url":"tw_stocks/8940.json"},{"revision":"64c5e49503e59dc6f47e9e17dffa8a06","url":"tw_stocks/8926.json"},{"revision":"584604362743d63280f702e8e473e964","url":"tw_stocks/8499.json"},{"revision":"d2f14d47b427e80fed51b5a67b96db69","url":"tw_stocks/8488.json"},{"revision":"14d5568d1c258c27ae8d3ec606991212","url":"tw_stocks/8482.json"},{"revision":"f9607cb57e15d867f965e683b96218b4","url":"tw_stocks/8481.json"},{"revision":"dcd3ebaa36b2acf0414758f881d1e40b","url":"tw_stocks/8478.json"},{"revision":"977ee3af7accdbb77917497a46895e07","url":"tw_stocks/8476.json"},{"revision":"1f088d879d1b8bb55cebdb794ca74fa3","url":"tw_stocks/8473.json"},{"revision":"2f3f4c328a6af31bbbcc00b704776c9a","url":"tw_stocks/8467.json"},{"revision":"9255ed577bdde942a98b4ba8b31f74c3","url":"tw_stocks/8466.json"},{"revision":"92860ef1d785f99295723cd332778705","url":"tw_stocks/8464.json"},{"revision":"d977463577095e408cab2d7a8416ce3a","url":"tw_stocks/8463.json"},{"revision":"7300df63c21b8b6113a01d3421cdc59f","url":"tw_stocks/8462.json"},{"revision":"fa4feac496f38b44bf085aa1328a3063","url":"tw_stocks/8454.json"},{"revision":"bf13f1cc99b63fb51002c804cfdc7bf4","url":"tw_stocks/8443.json"},{"revision":"f9257ac9cfa5cd509237dede5f0e9617","url":"tw_stocks/8442.json"},{"revision":"02cc19e188b12e4ecd3ac8fdaf0c8453","url":"tw_stocks/8438.json"},{"revision":"4643c6a082c380c891c88ac796906e92","url":"tw_stocks/8429.json"},{"revision":"2dc96e2a9e7bd7c58a119851d5bbc535","url":"tw_stocks/8422.json"},{"revision":"4af56b9dc9feae5491236caaf911d97c","url":"tw_stocks/8411.json"},{"revision":"5db1db7a9c689662b7162ed33ce8094b","url":"tw_stocks/8404.json"},{"revision":"9ad90b38f00befe69771d125215a2238","url":"tw_stocks/8374.json"},{"revision":"abd8da65d343cc595ae4c887916c6e31","url":"tw_stocks/8367.json"},{"revision":"8ad23857ca3f3951cd7dc1a02804878a","url":"tw_stocks/8341.json"},{"revision":"b40ef748b914e66b832b69b0ff68a9c7","url":"tw_stocks/8271.json"},{"revision":"792061e96cd7791efc1ca940680a4f9e","url":"tw_stocks/8261.json"},{"revision":"247b78bebbe84cc5a7963139eb9b3da9","url":"tw_stocks/8249.json"},{"revision":"b0d1316ef201ec4f46b915b1f30c089f","url":"tw_stocks/8222.json"},{"revision":"eff24619aeff948bddf1f5f2fc1c9d8b","url":"tw_stocks/8215.json"},{"revision":"967c872595033a7ebc5b99398062fa57","url":"tw_stocks/8213.json"},{"revision":"0ea784200fe9106550dfd2b06f513ce0","url":"tw_stocks/8210.json"},{"revision":"906632b7cc4552a8204ecb869f852895","url":"tw_stocks/8201.json"},{"revision":"c42afe41dd55e2bfc3aefa8ecf08d888","url":"tw_stocks/8163.json"},{"revision":"e60f91707d13d542426d7c3820db9bd3","url":"tw_stocks/8150.json"},{"revision":"263417b6a1c6c863412197c355095438","url":"tw_stocks/8131.json"},{"revision":"ba62b8d8c0d17705164751af9eddf89f","url":"tw_stocks/8114.json"},{"revision":"9ec404012e0c5f14f80e9706e8fca8d8","url":"tw_stocks/8112.json"},{"revision":"cfa00908c7a5ff256ec506bf72133a07","url":"tw_stocks/8110.json"},{"revision":"abfff65b1e1452eb7ec6a5a429221807","url":"tw_stocks/8105.json"},{"revision":"b35fe87c3f0275a22870cb0a127e1f41","url":"tw_stocks/8104.json"},{"revision":"b44a89c92282d5f2fa2878019421c9bd","url":"tw_stocks/8103.json"},{"revision":"631deaf80b22e36dd5924860f3846ff9","url":"tw_stocks/8101.json"},{"revision":"9c187347e4036c8fbee66a37b3fcb844","url":"tw_stocks/8081.json"},{"revision":"b4f264244939bcb42b693083d18ae5c9","url":"tw_stocks/8072.json"},{"revision":"271f3fa87f8f18f5212eef020f0c2e80","url":"tw_stocks/8070.json"},{"revision":"1edf7a5adcc9b15b9b37933ef95f0c7c","url":"tw_stocks/8046.json"},{"revision":"cacffa82cccd610ab346cabd71ce74ca","url":"tw_stocks/8045.json"},{"revision":"63a8482c7480e97e03e113ac437eda0c","url":"tw_stocks/8039.json"},{"revision":"e2a88ecb24201a1a8a5e80c9d8b452e5","url":"tw_stocks/8033.json"},{"revision":"4febe736fb74c5b38aa6aa17383c7375","url":"tw_stocks/8028.json"},{"revision":"a450922f942c8651ec86b722a16f056d","url":"tw_stocks/8021.json"},{"revision":"a16705b2d9dd7bd80189eb3bf73e1058","url":"tw_stocks/8016.json"},{"revision":"1fcdf395c6232dfd8aed627b6cd7dd1a","url":"tw_stocks/8011.json"},{"revision":"2a9dd67dfa78ad346c793fed80799d6d","url":"tw_stocks/7822.json"},{"revision":"33200db63c5880673613e8dd1ab706bb","url":"tw_stocks/7821.json"},{"revision":"84a5ef0da1668b5b38f05eeda73f35e0","url":"tw_stocks/7799.json"},{"revision":"c12375d2419d64ee6ef31b92859ea6c2","url":"tw_stocks/7795.json"},{"revision":"44bd6ae974de9365879b653bc99d3e84","url":"tw_stocks/7791.json"},{"revision":"f187b528d5c112a8cbbc6167158332a9","url":"tw_stocks/7788.json"},{"revision":"a27f0aba008219064069fc3140bcc168","url":"tw_stocks/7786.json"},{"revision":"3f07381e8e441578bd678597c66a568a","url":"tw_stocks/7780.json"},{"revision":"6e257e6140a7e790b62f4184d962dc90","url":"tw_stocks/7769.json"},{"revision":"967f11144bae48c2a2ed63047fcfdf7a","url":"tw_stocks/7768.json"},{"revision":"ec29addd886d6c5ffe30e13101f4cdef","url":"tw_stocks/7765.json"},{"revision":"f6c66c4b5fe6daae3247fdfff7ade433","url":"tw_stocks/7760.json"},{"revision":"0dad9ca528f998a7849c8b6a9613f1a3","url":"tw_stocks/7750.json"},{"revision":"a16b2fa04837caeb2e79649ee235efbd","url":"tw_stocks/7749.json"},{"revision":"a1d33cb0e619a7d8f677891302572935","url":"tw_stocks/7736.json"},{"revision":"cda6969f88f14babaed59e0e35bf16de","url":"tw_stocks/7732.json"},{"revision":"cecb511602fb93152cbdec2aa875ce0a","url":"tw_stocks/7722.json"},{"revision":"9d540851d4f211e021c0a13fe5275147","url":"tw_stocks/7721.json"},{"revision":"0ada69a4064cab35f1a27fa60a28462f","url":"tw_stocks/7711.json"},{"revision":"2ec0e7f3ea5b19193fab6a907c63bb4f","url":"tw_stocks/7705.json"},{"revision":"45c3ed5c00d64f9d9bdf5b1f6010e989","url":"tw_stocks/6994.json"},{"revision":"1d1962b26eb83e91bdb586cd6b27d7f9","url":"tw_stocks/6965.json"},{"revision":"b981779c3641c4cc57b389e893903cfa","url":"tw_stocks/6962.json"},{"revision":"01550295bcde7360052211ee52d96fd2","url":"tw_stocks/6958.json"},{"revision":"ed08a53afe8db4cb4f6f07f7042d5174","url":"tw_stocks/6957.json"},{"revision":"36f7364e1e31b3cb669b21f3de4cd8a3","url":"tw_stocks/6952.json"},{"revision":"46bf3ebba7ad77fa07b2a323a4b136f3","url":"tw_stocks/6944.json"},{"revision":"84031ed00e9c885fb0ef68204f1c90c2","url":"tw_stocks/6937.json"},{"revision":"192f073120b6c30b9261b9d7ebe98b10","url":"tw_stocks/6936.json"},{"revision":"92d80e38fece8b4d8272d5262a0ba76f","url":"tw_stocks/6934.json"},{"revision":"484010232480bc13453acfd8d6c8160b","url":"tw_stocks/6933.json"},{"revision":"2e964a98451d025b745fddfcc24462e6","url":"tw_stocks/6931.json"},{"revision":"8c2c42d006f9be4925f928d95a45ebb5","url":"tw_stocks/6928.json"},{"revision":"51f9845950b477a59aae90e217814af9","url":"tw_stocks/6923.json"},{"revision":"17daf00ab4958ebad70e39bb38d52697","url":"tw_stocks/6919.json"},{"revision":"2805ad495ac79ba573a585164fc3c72e","url":"tw_stocks/6918.json"},{"revision":"50c02814da2130a1d06b914d8bc2fc4e","url":"tw_stocks/6916.json"},{"revision":"b1339c5e92536004143554d92b0cc9e6","url":"tw_stocks/6914.json"},{"revision":"c88d91d8d4eb7a45f2fa6f5fcc618b5a","url":"tw_stocks/6909.json"},{"revision":"4baaf029b536d0b6822343013d7a7ff2","url":"tw_stocks/6906.json"},{"revision":"1c24bcff2953fe60c5ad199267d70f14","url":"tw_stocks/6902.json"},{"revision":"c0fc91637dea04293c8764c148f6280b","url":"tw_stocks/6901.json"},{"revision":"d0702f80b3e30df9806dd722ce65f753","url":"tw_stocks/6890.json"},{"revision":"ca1f6bb8dcc5b5c81c7d2d9c8c26b6aa","url":"tw_stocks/6887.json"},{"revision":"6a00949445dd1372fbb03f0d5c07e18d","url":"tw_stocks/6885.json"},{"revision":"7d830ca040ec2b533da8c9cf8883f1e0","url":"tw_stocks/6873.json"},{"revision":"178450fd503b0e3397d17f4db892de29","url":"tw_stocks/6869.json"},{"revision":"44f603b0b7ace9dfb8c23f1ddd684620","url":"tw_stocks/6863.json"},{"revision":"ab6e8ebf78ed586b39a557f694eff542","url":"tw_stocks/6862.json"},{"revision":"29a7f023672b43bea46aa6758dc97ffb","url":"tw_stocks/6861.json"},{"revision":"a30d4ddd79d879fd2bc7f5202fda3eca","url":"tw_stocks/6838.json"},{"revision":"579c09855d48f71e90b3353327eb639b","url":"tw_stocks/6835.json"},{"revision":"7b4b0463477d9855e335de3ccad9adf0","url":"tw_stocks/6834.json"},{"revision":"f046dcced0a4b7006eef209412a3d973","url":"tw_stocks/6831.json"},{"revision":"7391966f42332f3f287f7be9aeed661c","url":"tw_stocks/6830.json"},{"revision":"77efc96bd55a96096ee8221957788ec9","url":"tw_stocks/6807.json"},{"revision":"5e44da11cee78bd879e9a460ab86b742","url":"tw_stocks/6806.json"},{"revision":"9802d5540d60029e84060684c926d5e2","url":"tw_stocks/6805.json"},{"revision":"525c945020a77f15d6c3882ba417ab92","url":"tw_stocks/6799.json"},{"revision":"af4a33f7b1a2351d706fe5af022fc187","url":"tw_stocks/6796.json"},{"revision":"a5340235240d3b5ccd0924bc005b6503","url":"tw_stocks/6794.json"},{"revision":"f38161ee2ac4c2544a5cd4fe9f35341e","url":"tw_stocks/6792.json"},{"revision":"14db656f32c9f195b1ed2990da36113c","url":"tw_stocks/6790.json"},{"revision":"db0634d44ce6bd82e261b0e4e6f19e86","url":"tw_stocks/6789.json"},{"revision":"f45110577cccf14e0c15a895d9d320b6","url":"tw_stocks/6782.json"},{"revision":"b1f596576fd39c5ef8f47038420beb7b","url":"tw_stocks/6781.json"},{"revision":"e0a96fa1d78f68479f72a3f67afce378","url":"tw_stocks/6776.json"},{"revision":"cc7d16b3992305d1773380a9fef18722","url":"tw_stocks/6770.json"},{"revision":"4cb2b7527083f5d25a6fc29d5cfb4da6","url":"tw_stocks/6768.json"},{"revision":"a8dbee18153625898c555ee5b41f0b37","url":"tw_stocks/6757.json"},{"revision":"2e54349f740bf641682996d390bdb398","url":"tw_stocks/6756.json"},{"revision":"839b84efe26c8fbb98e2233eb758a8fc","url":"tw_stocks/6754.json"},{"revision":"1a9ca8b0696686343d5fc0541af8ff9d","url":"tw_stocks/6753.json"},{"revision":"03c9cd82427016b55282d7f68570551c","url":"tw_stocks/6743.json"},{"revision":"c365d005136b66e2da78d801b06bbdcf","url":"tw_stocks/6742.json"},{"revision":"5655bc6553bd831691aeb55e1d987cf6","url":"tw_stocks/6722.json"},{"revision":"6eb9d83bed7666d15cee2f5cf9a2840c","url":"tw_stocks/6719.json"},{"revision":"754a8fffd3c0b1e5cbba5f371459b433","url":"tw_stocks/6715.json"},{"revision":"29ce48d40aed696df7604da95eb6bd8c","url":"tw_stocks/6706.json"},{"revision":"6f4d9bef0a6fb863d4c7d0216abb65c5","url":"tw_stocks/6698.json"},{"revision":"e673363ba345d5e1ff67d78e2a4dcc1b","url":"tw_stocks/6695.json"},{"revision":"fee864264014eec5209f23212f6e08e1","url":"tw_stocks/6691.json"},{"revision":"2506f7a7224cfefde612b04eeb53a60b","url":"tw_stocks/6689.json"},{"revision":"904752e91b958762de0eadeff150d3de","url":"tw_stocks/6674.json"},{"revision":"c7553f4010e772279b444ff04aec3ee8","url":"tw_stocks/6672.json"},{"revision":"c284e59976fe82d08ba45c4254b5cd7a","url":"tw_stocks/6671.json"},{"revision":"18b473e6bd98e7c72e6b2adcf64c7f3c","url":"tw_stocks/6670.json"},{"revision":"a83961b8a645dd55133d5351761e61ce","url":"tw_stocks/6669.json"},{"revision":"cf295e0202d5dc58bf1253717afc43d1","url":"tw_stocks/6668.json"},{"revision":"f6953fd42df2b8daf5b1a1e4ef2bf53f","url":"tw_stocks/6666.json"},{"revision":"8f49b73f9d10b70932a7fcaea61ca7e1","url":"tw_stocks/6658.json"},{"revision":"cb2f8248612669e3d8f8d6e235b71ed0","url":"tw_stocks/6657.json"},{"revision":"2afecdee6104474a076d628e4c14c3f4","url":"tw_stocks/6655.json"},{"revision":"41b339ce62407c2e7cfe92c77d8d7289","url":"tw_stocks/6641.json"},{"revision":"6ee81d9c5e31a59667ab3d8bc3375bcc","url":"tw_stocks/6625.json"},{"revision":"2ebfe7cfb60afa1a8f572b2676ac271d","url":"tw_stocks/6614.json"},{"revision":"19d6ae913800a71bef35b51ccc51526d","url":"tw_stocks/6606.json"},{"revision":"172116be224d736ea4bdf8883e543a3e","url":"tw_stocks/6605.json"},{"revision":"be5e2cf2e3460d8b264ef320f2423136","url":"tw_stocks/6598.json"},{"revision":"845ad4537f55f0238233dfa2666fb09e","url":"tw_stocks/6592.json"},{"revision":"1bbac6c00702dada8b0c6d19296aba62","url":"tw_stocks/6591.json"},{"revision":"9452b49991eb070c80bd48d451e64559","url":"tw_stocks/6589.json"},{"revision":"fd447fb4cd746716d0501e9d3921fd50","url":"tw_stocks/6585.json"},{"revision":"1a67f4ed1707c1805c75ad69aecca5fd","url":"tw_stocks/6582.json"},{"revision":"fd2d86b1bccd7a0d4660d32f6e562563","url":"tw_stocks/6581.json"},{"revision":"ff1693d20bed3d5e3a9758b9e0f79ad5","url":"tw_stocks/6579.json"},{"revision":"7ac29fb137ebb8e21734e606a422a5ef","url":"tw_stocks/6573.json"},{"revision":"4611891c52dfe1ee7e4edf8d4150fc5e","url":"tw_stocks/6558.json"},{"revision":"9bb8936cecaf922551df67e5015f88ff","url":"tw_stocks/6552.json"},{"revision":"b144575df93d8a0b74d7d964bb06d6f9","url":"tw_stocks/6550.json"},{"revision":"77a5ec7214530277c26e282ed67bbc70","url":"tw_stocks/6541.json"},{"revision":"55f2f73b23979880f0a038c0d6ee4374","url":"tw_stocks/6533.json"},{"revision":"30a7445e420b062ecb467030b81cb022","url":"tw_stocks/6531.json"},{"revision":"e35831b2380d3f80ddd1340e95e2c955","url":"tw_stocks/6526.json"},{"revision":"d8c483be82475be102efdede4efd22f0","url":"tw_stocks/6525.json"},{"revision":"91fc300217c7edf7a9a5869c4854c527","url":"tw_stocks/6515.json"},{"revision":"3cb5b6df3140158b873dff920339c7bf","url":"tw_stocks/6505.json"},{"revision":"94d5dfcaf0618294568845f9cd5eb51f","url":"tw_stocks/6504.json"},{"revision":"0e3c5745f610ac9e5fe51af1a0c10ad9","url":"tw_stocks/6491.json"},{"revision":"05f7aed7edae588ad0318fd414921182","url":"tw_stocks/6477.json"},{"revision":"bfb433ec82a367ac79fbb06db261b466","url":"tw_stocks/6472.json"},{"revision":"e55b639a2e8ff965b100ea4156814696","url":"tw_stocks/6464.json"},{"revision":"b29d05f5e5475817f3e974e43dde08a7","url":"tw_stocks/6456.json"},{"revision":"184137d8c6b439c7f5b4c9ab7366c503","url":"tw_stocks/6451.json"},{"revision":"24a58fce521bf0e1a7393bdb35dfad62","url":"tw_stocks/6449.json"},{"revision":"6f1ca77010a45332b1d6c4dda85b28cb","url":"tw_stocks/6446.json"},{"revision":"ff6607b41dd3233a68d3690108e4c9b0","url":"tw_stocks/6443.json"},{"revision":"4827658610225145c7246cb417d3aa8d","url":"tw_stocks/6442.json"},{"revision":"e8a1780835632e31c4bd6fbb8e2f7165","url":"tw_stocks/6438.json"},{"revision":"6cddf5ffc079529a515eec9b41856669","url":"tw_stocks/6431.json"},{"revision":"ff163a5175b8f986222980d977fd9614","url":"tw_stocks/6426.json"},{"revision":"c2a7a3f3ae863b25b3bd536d292266eb","url":"tw_stocks/6416.json"},{"revision":"65ce8e7b05bd52e0dacc26b0d862ea76","url":"tw_stocks/6415.json"},{"revision":"9c02ec35a659bda0773c85ae65a5c406","url":"tw_stocks/6414.json"},{"revision":"15e2fbeb65c7b32476063209c57d79b0","url":"tw_stocks/6412.json"},{"revision":"86271effea990e049bf2eec21d93bee3","url":"tw_stocks/6409.json"},{"revision":"4dcb794b64dce817d697605e0c12a264","url":"tw_stocks/6405.json"},{"revision":"e4c5faeed1d09e875547ab9917229eb5","url":"tw_stocks/6285.json"},{"revision":"cce3f2d75be79d8a4856bcfab02dbadd","url":"tw_stocks/6283.json"},{"revision":"700226ae72bb23e3063166b2e062823b","url":"tw_stocks/6282.json"},{"revision":"efb767446768fb79048068038dc0420d","url":"tw_stocks/6281.json"},{"revision":"e7e7eb3cb1b95d64432ade994cd70b8d","url":"tw_stocks/6278.json"},{"revision":"be26a77c6b6e88e00e9e269cc75eb36d","url":"tw_stocks/6277.json"},{"revision":"8d5e34e4def94db690c77a31dca3b878","url":"tw_stocks/6272.json"},{"revision":"c43393d23be3a12cec4a6dae2fb9b08e","url":"tw_stocks/6271.json"},{"revision":"95b03d8fbf96c9ac6117611f13a459ef","url":"tw_stocks/6269.json"},{"revision":"beb94bb6d19cd4be2f6573989ecfcafe","url":"tw_stocks/6257.json"},{"revision":"22cddedb124630a2e453b835a8a9d04f","url":"tw_stocks/6243.json"},{"revision":"5b15fb5fa2b731ac52ac0f92697559e7","url":"tw_stocks/6239.json"},{"revision":"473394dd14a20e5a31710c151481887b","url":"tw_stocks/6235.json"},{"revision":"16936042d3ddfcda17aa5f40273b9100","url":"tw_stocks/6230.json"},{"revision":"424117aad74d019f4d51f4e4b450dcd3","url":"tw_stocks/6226.json"},{"revision":"87f5f2da18891dc47468bff45939e245","url":"tw_stocks/6225.json"},{"revision":"ef210108a04b912e733830441f1d05fe","url":"tw_stocks/6224.json"},{"revision":"fcab918ef34c107eea0008290957addd","url":"tw_stocks/6216.json"},{"revision":"e890e37e1478eb5e896804a8b48dced5","url":"tw_stocks/6215.json"},{"revision":"ddf52de5dd20949e8e05d5523d7af300","url":"tw_stocks/6214.json"},{"revision":"3d99091f9914df526d3a11daa8c6d86b","url":"tw_stocks/6213.json"},{"revision":"1a3e93d378e819393db5d204a445d571","url":"tw_stocks/6209.json"},{"revision":"7375369a32deb46d746701e00619d8a0","url":"tw_stocks/6206.json"},{"revision":"0e799aa5350ac48be6f568486e3953e6","url":"tw_stocks/6205.json"},{"revision":"24904d5939851026ba994e768aba6ac9","url":"tw_stocks/6202.json"},{"revision":"eb5465392c0e4a44d87b45d2b2877508","url":"tw_stocks/6201.json"},{"revision":"99acd28bface16f1a3781ed0ecd793ca","url":"tw_stocks/6197.json"},{"revision":"123e2a638534392d539a1da3788bb501","url":"tw_stocks/6196.json"},{"revision":"84ff747ed51c354c6c5caa117cb96a00","url":"tw_stocks/6192.json"},{"revision":"77a01874697042382488a7b3e4bdb394","url":"tw_stocks/6191.json"},{"revision":"411d7759fff26d2c16edafb593e79c24","url":"tw_stocks/6189.json"},{"revision":"2be3543d6f68433c37c211c8538b773c","url":"tw_stocks/6184.json"},{"revision":"86ddba988fb48d3b87228dad57281091","url":"tw_stocks/6183.json"},{"revision":"a5f36d56c4351da46d3002a88f8565e2","url":"tw_stocks/6177.json"},{"revision":"58ffce32a3628950b747d82e9e630834","url":"tw_stocks/6176.json"},{"revision":"148c77a3272eb760b1eb54497efd7572","url":"tw_stocks/6168.json"},{"revision":"6f72e07a39b17ddb7919170b376a1146","url":"tw_stocks/6166.json"},{"revision":"c85717ec3b4ec164029c87026ba26c21","url":"tw_stocks/6165.json"},{"revision":"4ebbc93a97e4ca4a7949d3fa91f6cd64","url":"tw_stocks/6164.json"},{"revision":"eb3fd0bf3d77d78cfbe0f4b7e5c2ddf6","url":"tw_stocks/6155.json"},{"revision":"645dcde8bb7cb1efc40929ccef781a8b","url":"tw_stocks/6153.json"},{"revision":"c03aa667bffd07ae3a26b70ee093d162","url":"tw_stocks/6152.json"},{"revision":"087c0fd7855f00d07e8dc79a6d6c7d73","url":"tw_stocks/6142.json"},{"revision":"f4d72063e65223f0b695924257e480c7","url":"tw_stocks/6141.json"},{"revision":"eb6c09a0ca5788c31504351dedad7742","url":"tw_stocks/6139.json"},{"revision":"ab13cff2cb3f8ef45b1d5d0110c422ff","url":"tw_stocks/6136.json"},{"revision":"339341b192e2eb9c5b79492c30b97249","url":"tw_stocks/6133.json"},{"revision":"97bacadf64581a3510ebde5cefe4d815","url":"tw_stocks/6128.json"},{"revision":"6ffdd12e022c407ab6fdb6e05daeb107","url":"tw_stocks/6120.json"},{"revision":"9f793e9d61c57ece56715cfae899d023","url":"tw_stocks/6117.json"},{"revision":"77dd647137b7f0aad63d42f7cb4e157c","url":"tw_stocks/6116.json"},{"revision":"cf6c9db98a27eddd5c04c1e3d2d35bbc","url":"tw_stocks/6115.json"},{"revision":"c92a92cfc1c337bc1d2ba13cb5ec24a4","url":"tw_stocks/6112.json"},{"revision":"b78f9f37a9b7a2d24e0a3d3d776c864f","url":"tw_stocks/6108.json"},{"revision":"9f01be754aed28917ba9d6353a5c757a","url":"tw_stocks/6024.json"},{"revision":"eda6b2165f468e466bb83d955d26b640","url":"tw_stocks/6005.json"},{"revision":"44fa408d75fb55cdbdedec09db5a98ba","url":"tw_stocks/5907.json"},{"revision":"18938fcec740eac9a9aee3e50d8d0d5b","url":"tw_stocks/5906.json"},{"revision":"c9b920160b9bb1cab7745abae184466e","url":"tw_stocks/5880.json"},{"revision":"93b11633c2ba68f61ebb6c37a95d68b4","url":"tw_stocks/5876.json"},{"revision":"e92b73d984616bbfa0fd41d29a85ea65","url":"tw_stocks/5871.json"},{"revision":"f73ac0ef169183051c7f0426c87fe2b2","url":"tw_stocks/5706.json"},{"revision":"b72757930780f18b48b83de65df70e61","url":"tw_stocks/5608.json"},{"revision":"822ba4b7b764b979914c6559165736cd","url":"tw_stocks/5607.json"},{"revision":"fe8cc6d3317cdb15598882a992e0e174","url":"tw_stocks/5546.json"},{"revision":"59d03856a7299f8a48a44c3acae10185","url":"tw_stocks/5538.json"},{"revision":"d066d6f626434c1e642f9cbf3a729703","url":"tw_stocks/5534.json"},{"revision":"64bc9567b48705939c39f19a40f764f4","url":"tw_stocks/5533.json"},{"revision":"080e909344e38f17079f56df9b15031b","url":"tw_stocks/5531.json"},{"revision":"5a72025b88af0c94be3c7c49ced8acb8","url":"tw_stocks/5525.json"},{"revision":"fa55cfb7904557c23494d62b09cd62b9","url":"tw_stocks/5522.json"},{"revision":"f49d919594cc26f7b9eab2edfdaf70f0","url":"tw_stocks/5521.json"},{"revision":"2e86f904191fa35fc3b6b539bd5dba13","url":"tw_stocks/5519.json"},{"revision":"51257a34bb15a174dcd6ed40a63f9a7f","url":"tw_stocks/5515.json"},{"revision":"a045a73a19b4dabe0ac7d51b1b8a2d67","url":"tw_stocks/5484.json"},{"revision":"c0bf00465549343292ccc7868092e386","url":"tw_stocks/5471.json"},{"revision":"69cf251e999659f5c3d2d95de233635d","url":"tw_stocks/5469.json"},{"revision":"28d4b274656959a9394a8c4b50f0f395","url":"tw_stocks/5434.json"},{"revision":"87408288f3b7303d54ce175c26e8d104","url":"tw_stocks/5388.json"},{"revision":"268476d2f721afd9dfe06b53a4cca244","url":"tw_stocks/5306.json"},{"revision":"d5cc0dacbc6c06443589674c71dabdf6","url":"tw_stocks/5292.json"},{"revision":"8b6d31e18614dc8afffd4198c6236556","url":"tw_stocks/5288.json"},{"revision":"8b2c28217c7f8ad4b0eaf77fb6f8a1a5","url":"tw_stocks/5285.json"},{"revision":"c43a2bb4ff4d0c3be8c9c4c9dfe59bef","url":"tw_stocks/5284.json"},{"revision":"e23d0ca736fe93e037db0edc50a82649","url":"tw_stocks/5283.json"},{"revision":"3e27e8b3738dc713fca6770ad3bd2d07","url":"tw_stocks/5269.json"},{"revision":"7ddb733d3a90d94556afc43050d4a53b","url":"tw_stocks/5258.json"},{"revision":"ecd3edf31bef2b7cacdea7d134f68811","url":"tw_stocks/5244.json"},{"revision":"43fbe1f90d4f6ae7aa774957ff8c199f","url":"tw_stocks/5243.json"},{"revision":"092cd3b8da6f7ef483fd535b752bc066","url":"tw_stocks/5234.json"},{"revision":"177fdbb829c708fcbd490bc3d1aa488d","url":"tw_stocks/5225.json"},{"revision":"e9415d1ea184a585b76c6fc318769742","url":"tw_stocks/5222.json"},{"revision":"e0b87cc6c809c7bda1e5538c91275acc","url":"tw_stocks/5215.json"},{"revision":"38dc4237739a2d681484b27403ad0716","url":"tw_stocks/5203.json"},{"revision":"fa1ef779cf83131732f707b3a541089e","url":"tw_stocks/5007.json"},{"revision":"7b1bc5d90a66e113d5f1f7c4c3292fd2","url":"tw_stocks/4999.json"},{"revision":"be3403f4640db15567581e3c4455ca78","url":"tw_stocks/4994.json"},{"revision":"b1e28d9f8f90c1d44a43e5914bc4c975","url":"tw_stocks/4989.json"},{"revision":"3cfa9d3e2ea3cdc70ca028d550ba01bd","url":"tw_stocks/4977.json"},{"revision":"fdb5338200e487dfbebea57374e00202","url":"tw_stocks/4976.json"},{"revision":"d543b98aee1dbe85e049cee95edf2ad9","url":"tw_stocks/4968.json"},{"revision":"7f2277b7104b015563dc2fd6c1c8db41","url":"tw_stocks/4967.json"},{"revision":"726fd5f50489bf1f6e61b4807a541df9","url":"tw_stocks/4961.json"},{"revision":"fbce1add6015a5aeda40b3ab74a21801","url":"tw_stocks/4960.json"},{"revision":"3ed4287be065359c14844db3c677ccb1","url":"tw_stocks/4958.json"},{"revision":"554160bf5f4083862c8d7a6a2daf5c0c","url":"tw_stocks/4956.json"},{"revision":"a943be707e511be9276e8e8ebdd9166f","url":"tw_stocks/4952.json"},{"revision":"f70e1e85db270dd594446593f2e54e99","url":"tw_stocks/4949.json"},{"revision":"70cada6b6f2b7cbcf081099b9f62721d","url":"tw_stocks/4943.json"},{"revision":"2e3901386c464332ad033099ee404af7","url":"tw_stocks/4942.json"},{"revision":"9768fa2dbc3ea343f9a7e12ee7ea727c","url":"tw_stocks/4938.json"},{"revision":"c712750f5724a4c68492a70e92613ad8","url":"tw_stocks/4935.json"},{"revision":"0e781ae46de175466acda60780495354","url":"tw_stocks/4934.json"},{"revision":"342e574616d6ffa33d2aeebbaba19f63","url":"tw_stocks/4930.json"},{"revision":"8a653b2c10dd309ce7f31feac3e795d0","url":"tw_stocks/4927.json"},{"revision":"d5363386fb585df32992d5a50a504270","url":"tw_stocks/4919.json"},{"revision":"1df65a1d9fbb7b14f80d41d0656a7890","url":"tw_stocks/4916.json"},{"revision":"af39cdab2b8138463d3552fc396c74a1","url":"tw_stocks/4915.json"},{"revision":"4b425d65e164c57adeb092fea526e793","url":"tw_stocks/4912.json"},{"revision":"9996850e7888153705912c07b4cf55e6","url":"tw_stocks/4906.json"},{"revision":"01c2025adcbd83ad03e5fb2ee08aa45d","url":"tw_stocks/4904.json"},{"revision":"0e72313a87438dea26b8288bd86a5fe4","url":"tw_stocks/4807.json"},{"revision":"ed67579aef989db9a5ceac134f47a854","url":"tw_stocks/4771.json"},{"revision":"1a4b3a141e60f9ca507701588816829a","url":"tw_stocks/4770.json"},{"revision":"659dc68e1becac28acefa1555fe353bf","url":"tw_stocks/4766.json"},{"revision":"0bd2f0925a41c0a2f2e1505097b87411","url":"tw_stocks/4764.json"},{"revision":"08566086c9a35845033c2e1b746f3ac8","url":"tw_stocks/4763.json"},{"revision":"2efebc6e5c7b224756b39b87ccc11c8c","url":"tw_stocks/4755.json"},{"revision":"feb6376d648d482037c640232a013695","url":"tw_stocks/4746.json"},{"revision":"5fa92647c9b4bfbacd19a8861d992487","url":"tw_stocks/4739.json"},{"revision":"a88058a0128a518be868f1bbceab68df","url":"tw_stocks/4737.json"},{"revision":"c89141905326ffde371ef30c38bde274","url":"tw_stocks/4736.json"},{"revision":"1cc01b2003b28fb4b4f6911ab1b9d27e","url":"tw_stocks/4722.json"},{"revision":"dac43fed7d1f1cd570a54c5cc54ee66f","url":"tw_stocks/4720.json"},{"revision":"4fad6486737acd57b7d6c17069fec69f","url":"tw_stocks/4588.json"},{"revision":"86bb2b2407228b41577d01bfb40eff0f","url":"tw_stocks/4585.json"},{"revision":"cb42771ca36f806c9d15a7cb8b1b1a8a","url":"tw_stocks/4583.json"},{"revision":"9f60dc0053cda810fffdc9e5e40bccd4","url":"tw_stocks/4581.json"},{"revision":"b27dd161ab176084c4fc886396e132c8","url":"tw_stocks/4576.json"},{"revision":"7be062805bfd571eb633a460f0829a26","url":"tw_stocks/4572.json"},{"revision":"7667b3f20dda5c82e6f67743f5262768","url":"tw_stocks/4571.json"},{"revision":"21fc442a90161e9df68e15ad37a8c551","url":"tw_stocks/4569.json"},{"revision":"8eb4981344f139561d50155f26076130","url":"tw_stocks/4566.json"},{"revision":"a05571bd8ae83b17ae76262b00318b54","url":"tw_stocks/4564.json"},{"revision":"061c606e68ef8df52f211ab4d590a95b","url":"tw_stocks/4562.json"},{"revision":"e693c5cfe71aabdc43ada4d5627c04c4","url":"tw_stocks/4560.json"},{"revision":"2ae187be114b870783f064e8fa607cd6","url":"tw_stocks/4557.json"},{"revision":"e8443302ac9c6705f84b8c78e95ea03e","url":"tw_stocks/4555.json"},{"revision":"5c2566532c6fc121f037063569eb5380","url":"tw_stocks/4552.json"},{"revision":"3179a29e5eab373d05a6d93cd02f4731","url":"tw_stocks/4551.json"},{"revision":"3ad02416ad7a36c37da488de605c5357","url":"tw_stocks/4545.json"},{"revision":"f2ffe95fc39b41328b1430d63ddc4d2d","url":"tw_stocks/4540.json"},{"revision":"7f658fdbacdb508f058133747f9ca95d","url":"tw_stocks/4536.json"},{"revision":"dda13ebd5864e565fabe6ef6c8555bd8","url":"tw_stocks/4532.json"},{"revision":"f22ac1c3f91e9e397363659ae8f23dad","url":"tw_stocks/4526.json"},{"revision":"ee422b02730d0727733cfa4131a6689c","url":"tw_stocks/4441.json"},{"revision":"aa964846b0fa7b3b92c96734908415f9","url":"tw_stocks/4440.json"},{"revision":"9c3fd154f57454a2e5d3f6a1acfd87e3","url":"tw_stocks/4439.json"},{"revision":"3dc30418af51346b6d938ad927a63701","url":"tw_stocks/4438.json"},{"revision":"04e7e14329ec4f065b8216d0d8dac8ea","url":"tw_stocks/4426.json"},{"revision":"7a34465c3cd42c8ed194b2d38ff33e49","url":"tw_stocks/4414.json"},{"revision":"8720d48816955d20b017f2840cd33b53","url":"tw_stocks/4306.json"},{"revision":"ccbb52984d0c1112f120b23a851f4085","url":"tw_stocks/4190.json"},{"revision":"d4c1a9e7ab66ba751192dd9e50cf7161","url":"tw_stocks/4178.json"},{"revision":"7da59ffcc001a9ab5b58ae422d5c683d","url":"tw_stocks/4169.json"},{"revision":"d596e30a216e6a801312a3ded5c6a76b","url":"tw_stocks/4164.json"},{"revision":"70b4751c0da0c2a22abf38c832d2bc15","url":"tw_stocks/4155.json"},{"revision":"527b84945c60f30159cc5ca9cdb7cc0a","url":"tw_stocks/4148.json"},{"revision":"7cc6bdadd4e8383d1fc172cd2b6ddf43","url":"tw_stocks/4142.json"},{"revision":"e8e4d2f02badbe411536617701475e4f","url":"tw_stocks/4137.json"},{"revision":"0cce08743580b1c19963b8b17283c70b","url":"tw_stocks/4133.json"},{"revision":"bb90f261f143cdebbc763c75ae37faa9","url":"tw_stocks/4119.json"},{"revision":"19aa10db4fc3dfb8ad3d62495bf76937","url":"tw_stocks/4108.json"},{"revision":"5272bc4bd5c506713b41043065d4d335","url":"tw_stocks/4106.json"},{"revision":"5d15ec78e73cca8b7dcf6c4e0a3e47cf","url":"tw_stocks/4104.json"},{"revision":"59d7b4fde9a50c093ab57f7ba7d73e7f","url":"tw_stocks/3717.json"},{"revision":"052ded0cbbe2255ed2a1bde2855d6981","url":"tw_stocks/3716.json"},{"revision":"f8e72684902c37aeafc7b30c42d29d7f","url":"tw_stocks/3715.json"},{"revision":"14ea4b74fe43dc10c061ee23adb50d4f","url":"tw_stocks/3714.json"},{"revision":"ef443f9fb1bc8adb1168eaeb95531631","url":"tw_stocks/3712.json"},{"revision":"f4e37993595bce1b25798031ded99000","url":"tw_stocks/3711.json"},{"revision":"3ef5919d4a44bca40c5378476f09dc9f","url":"tw_stocks/3708.json"},{"revision":"19add9ec08afdbecc57ab349779e7951","url":"tw_stocks/3706.json"},{"revision":"8c73345f4e43a1db003e1a7442015e8f","url":"tw_stocks/3705.json"},{"revision":"832186c4c2c9f553eaf3537081e7499b","url":"tw_stocks/3704.json"},{"revision":"212a8d394ed287caa222a0b546f8b944","url":"tw_stocks/3703.json"},{"revision":"8f9b4b34a89e6f16731c5421285e7e7c","url":"tw_stocks/3702.json"},{"revision":"3b11988ca075d6108eaf5941d9fcdb5c","url":"tw_stocks/3701.json"},{"revision":"63c41f897cbd8e105d0cf2c634ebc8c2","url":"tw_stocks/3694.json"},{"revision":"6fd708a12617246dfbb656e085f835b5","url":"tw_stocks/3686.json"},{"revision":"2a5a9736883177ed2d6955e7d25ebb0b","url":"tw_stocks/3679.json"},{"revision":"23bb5055491888894945c882b3f6ccae","url":"tw_stocks/3673.json"},{"revision":"4321a439feefe3fe6b4f47776cec3415","url":"tw_stocks/3669.json"},{"revision":"7494a40f1e9936c6634e086c683a4158","url":"tw_stocks/3665.json"},{"revision":"01c03b622c8af722f7869f6664fc1593","url":"tw_stocks/3661.json"},{"revision":"c6e284b54f91404f601800fda818284f","url":"tw_stocks/3653.json"},{"revision":"fb7e863ac44c0a5eba2e2f64ab941cbe","url":"tw_stocks/3652.json"},{"revision":"950dc719ba86a916fd0622b57f148ec1","url":"tw_stocks/3645.json"},{"revision":"d9c78d098a56abd6d837dd54986e4a5f","url":"tw_stocks/3622.json"},{"revision":"062405388c64809ee9070f4d4d16e0a1","url":"tw_stocks/3617.json"},{"revision":"97ba228582bd3317267eb1cbf5d28288","url":"tw_stocks/3607.json"},{"revision":"9a5d2522d15493a8aad3fa164c09f579","url":"tw_stocks/3605.json"},{"revision":"529066c6579588e2ca1d1e4713106832","url":"tw_stocks/3596.json"},{"revision":"36076bb31876c3881787032691f02349","url":"tw_stocks/3593.json"},{"revision":"44eb1d95025c2890b12160e3675b63b5","url":"tw_stocks/3592.json"},{"revision":"2497961be23ab42dd9023d02dea88dc1","url":"tw_stocks/3591.json"},{"revision":"62bd8f4bfbf63b2f730e800a71a6c00c","url":"tw_stocks/3588.json"},{"revision":"39ee1a66ed94d843aa33314fe2bb107c","url":"tw_stocks/3583.json"},{"revision":"1718f8213e10d8d53f979183166f94f8","url":"tw_stocks/3576.json"},{"revision":"e2fe282b3677daf4a98604d9431b8cd8","url":"tw_stocks/3563.json"},{"revision":"ed365b32d9177fbfa76a06c5f02def2a","url":"tw_stocks/3557.json"},{"revision":"a4298d89943f89e9fde1bf18e76e0dff","url":"tw_stocks/3550.json"},{"revision":"200a2c228775c42d72b2c21a3ad2a02e","url":"tw_stocks/3545.json"},{"revision":"698f0e4a57620a68c89259004dccdb0d","url":"tw_stocks/3543.json"},{"revision":"8f7d0ec6556725cdbec11272f98d8f2c","url":"tw_stocks/3535.json"},{"revision":"e54945fecac453fc63c02b377f2c57a5","url":"tw_stocks/3533.json"},{"revision":"41918369fcf2fc384fc7d260aa74448a","url":"tw_stocks/3532.json"},{"revision":"b155df91de3a7efce08bc1ddba38bb8a","url":"tw_stocks/3530.json"},{"revision":"fbb6b35e82137cb33dbc383575918049","url":"tw_stocks/3528.json"},{"revision":"b163ec3c36ace88054e629b09f21c6da","url":"tw_stocks/3518.json"},{"revision":"8ec44057e407196b3356ba554927e72d","url":"tw_stocks/3515.json"},{"revision":"a6237ea0c214a7134128939109ee55c5","url":"tw_stocks/3504.json"},{"revision":"7c021db45352c525ff59dd7b5299f62a","url":"tw_stocks/3501.json"},{"revision":"5ff4ec2ac61b9001c766ff87f072cdef","url":"tw_stocks/3494.json"},{"revision":"c8caef1923ba6d34cad5b2ccf177577f","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"601ed50bd6271667103ebe2fc9aafd13","url":"tw_stocks/3450.json"},{"revision":"33aae1640b0e54be591ca9b87c199bb4","url":"tw_stocks/3447.json"},{"revision":"6de5d85fb5bf341fd8c8a2479bdf8069","url":"tw_stocks/3443.json"},{"revision":"b3ff63aea1fcfc93a3566693fe9adb1b","url":"tw_stocks/3437.json"},{"revision":"3d960e31978ab746e34096aedbf900f3","url":"tw_stocks/3432.json"},{"revision":"d99769715cd91cda7ffde1f7d791ec85","url":"tw_stocks/3419.json"},{"revision":"a7dd910c0658c3b2a1bbe30aa02a82ba","url":"tw_stocks/3416.json"},{"revision":"8d19cac7b8da74386c064af105837a45","url":"tw_stocks/3413.json"},{"revision":"de98ba03ec4d46a5cebebd6388a0a80f","url":"tw_stocks/3406.json"},{"revision":"c24760e8814de8b6da5135193eab32ac","url":"tw_stocks/3380.json"},{"revision":"08a2ef77aecaa49825da70086356d778","url":"tw_stocks/3376.json"},{"revision":"9c115cbf0285da4c4b5bc9371b992f07","url":"tw_stocks/3356.json"},{"revision":"1048ccb4d571431b3b34601910675e0b","url":"tw_stocks/3346.json"},{"revision":"0ebbd042ac2d74efea79259d084f6ab5","url":"tw_stocks/3338.json"},{"revision":"c023f0689fcf9aa930e43a00c6f685bb","url":"tw_stocks/3321.json"},{"revision":"71bc91ff66c34f2e562c6955299e3dc2","url":"tw_stocks/3312.json"},{"revision":"5ad1eca7f05965121d907fd46d37b0aa","url":"tw_stocks/3311.json"},{"revision":"9cad1682852dfea387cdd8bc5bab5126","url":"tw_stocks/3308.json"},{"revision":"825b34aac6c0e7e3c9e8b70e68345b28","url":"tw_stocks/3305.json"},{"revision":"bdd6c62d441acd4c52893a7327c8850d","url":"tw_stocks/3296.json"},{"revision":"f3daf1ca3eb0f45a41d8b82c818e0830","url":"tw_stocks/3266.json"},{"revision":"e77bd0b20979ebe14fb3210feedfedea","url":"tw_stocks/3257.json"},{"revision":"15c2d49ac623065fdf1bd52c2c022d07","url":"tw_stocks/3231.json"},{"revision":"c9fc4348bf25c2a06492ac013b1a39a1","url":"tw_stocks/3229.json"},{"revision":"eb2fbf64367f5d048359ff678f16bf62","url":"tw_stocks/3209.json"},{"revision":"3b89919b600df489873dff51a960367f","url":"tw_stocks/3189.json"},{"revision":"64575f9538c21fbd78c0e3e4272e7df3","url":"tw_stocks/3168.json"},{"revision":"39ad9d9869eb01743edf087b5336bb36","url":"tw_stocks/3167.json"},{"revision":"83bb559e3740a6ffec4a4abe59e18d1d","url":"tw_stocks/3164.json"},{"revision":"3049a16b354616e91c156c9540a1961b","url":"tw_stocks/3149.json"},{"revision":"7f23820ea9cd1651bb8dd1c727cb9009","url":"tw_stocks/3138.json"},{"revision":"2cbd38693e5370d98eeb13ab73c2e90c","url":"tw_stocks/3135.json"},{"revision":"3d21913c1faf663137de1d29930c832c","url":"tw_stocks/3130.json"},{"revision":"941830734d8c0c26d1dde8b008884394","url":"tw_stocks/3094.json"},{"revision":"d52b58189ce8d1dacf5f9fcfffc0272d","url":"tw_stocks/3092.json"},{"revision":"69c7781f0e8ee44f7e0413b8977443f3","url":"tw_stocks/3090.json"},{"revision":"c6eb7a8cd27db69ad39314d2fb332981","url":"tw_stocks/3062.json"},{"revision":"24cbbd3c2e31fef6532a714016e559a9","url":"tw_stocks/3060.json"},{"revision":"6dc87bac9f8359d83badfdb77a0e2d38","url":"tw_stocks/3059.json"},{"revision":"406219059f00bf4eeff5dc233d2b8b9a","url":"tw_stocks/3058.json"},{"revision":"8005bfef46f87257e88aad04edafc6c8","url":"tw_stocks/3057.json"},{"revision":"e117fe3ee7fde2c8513884124652beb9","url":"tw_stocks/3056.json"},{"revision":"f8ea41c13ab2207a0c7c6643e9010e88","url":"tw_stocks/3055.json"},{"revision":"84381a1d793bd2cf1628fa674a6ce606","url":"tw_stocks/3054.json"},{"revision":"de9e656c201e9ac404bc359b317fad7f","url":"tw_stocks/3052.json"},{"revision":"43d2f4aaf9ac21cf7bf5d27b7a0c9180","url":"tw_stocks/3051.json"},{"revision":"d07d8bb88898c676dacd636a55ca96f2","url":"tw_stocks/3050.json"},{"revision":"e30e8fbabf5b15b6b8fcb84974687e06","url":"tw_stocks/3049.json"},{"revision":"55cf1ce039755269bdedf03b29741161","url":"tw_stocks/3048.json"},{"revision":"d45c256838925c6e92617b357861f4bb","url":"tw_stocks/3047.json"},{"revision":"fb96ff9c6a9b5d3f3eb81f7ec8d3deeb","url":"tw_stocks/3046.json"},{"revision":"a9a16260837430d6a3b07088ee5c4209","url":"tw_stocks/3045.json"},{"revision":"c2d88f76694afc8d5680bbee87d92c6f","url":"tw_stocks/3044.json"},{"revision":"97d9fcb183cbddf727ac6392b61efae0","url":"tw_stocks/3043.json"},{"revision":"6ae925bc2cc7c40c3e19474229fb9afa","url":"tw_stocks/3042.json"},{"revision":"2ff5a87c84b134ac370042c2982c23ba","url":"tw_stocks/3041.json"},{"revision":"81ee3a36d811acb52e2c85271d32cfb2","url":"tw_stocks/3040.json"},{"revision":"6a8c6093d05b9978f9795aaa058b2bde","url":"tw_stocks/3038.json"},{"revision":"8becbb2d044d43bf033998cd6aba23ea","url":"tw_stocks/3037.json"},{"revision":"66e8f0b7b62e123677ad0049e8d56aef","url":"tw_stocks/3036.json"},{"revision":"5acf59a6ea162e5942ef4f3e2ee6f503","url":"tw_stocks/3035.json"},{"revision":"7ed74c1cabed049c31c1171e3685cc58","url":"tw_stocks/3034.json"},{"revision":"898b54cd43ef6717404d3c5891b7a62c","url":"tw_stocks/3033.json"},{"revision":"ac2bd43ed4536daa729c1b85c60bab8c","url":"tw_stocks/3032.json"},{"revision":"b966060f962329714635081262e15244","url":"tw_stocks/3031.json"},{"revision":"4168f980f0765dfdcca7afc460f1af09","url":"tw_stocks/3030.json"},{"revision":"20fa23892b54588192858aff218f5f94","url":"tw_stocks/3029.json"},{"revision":"ef04e5eaa45ddbc6323d428753235ae2","url":"tw_stocks/3028.json"},{"revision":"bda7c169bcfd4bcdf643d0c5f2f7d080","url":"tw_stocks/3027.json"},{"revision":"68763626f97ae0d431302df6c58ace0a","url":"tw_stocks/3026.json"},{"revision":"c220e28a89cb4fcd72810b4b91c29034","url":"tw_stocks/3025.json"},{"revision":"6ffb7f47d90f69ee006f71995f0d0c6b","url":"tw_stocks/3024.json"},{"revision":"d05cb0cf6d1138f84d7ed059db367c79","url":"tw_stocks/3023.json"},{"revision":"b37c40d79c32f6a3797655fc9d3a6f8a","url":"tw_stocks/3022.json"},{"revision":"9b798ec71819d69464f2e98b4b00e11c","url":"tw_stocks/3021.json"},{"revision":"29d63740b2525da336fcddac3e1d718d","url":"tw_stocks/3019.json"},{"revision":"91028d808ce818ed0608e11c223413c7","url":"tw_stocks/3018.json"},{"revision":"3e051214d3fd487866c7a32603be8b02","url":"tw_stocks/3017.json"},{"revision":"96331938e9e0e7022f25abd5adf13a67","url":"tw_stocks/3016.json"},{"revision":"73ee461f8090c6e3d7f29b0c829f9913","url":"tw_stocks/3015.json"},{"revision":"77e6e5624d6ba62eb9e432963ea135ae","url":"tw_stocks/3014.json"},{"revision":"292db5d7bb20344b656415961757b35a","url":"tw_stocks/3013.json"},{"revision":"fc03cfaff1f3b63ed225712c7c80ca48","url":"tw_stocks/3011.json"},{"revision":"30fa8298d4fde81cfb6180f130b78d77","url":"tw_stocks/3010.json"},{"revision":"e6b4de74c015f21903503abca449ac7a","url":"tw_stocks/3008.json"},{"revision":"f10e2c8f048f7f9c312e48ee5b797bd7","url":"tw_stocks/3006.json"},{"revision":"4a8b5f4bc8712dec3c50d4408d62c233","url":"tw_stocks/3005.json"},{"revision":"96c5921c83e3644358171fd89cc39f72","url":"tw_stocks/3004.json"},{"revision":"3ffc483fbbf19a76961cf2be984f1298","url":"tw_stocks/3003.json"},{"revision":"66039ed81295e911f7c238de04f316ec","url":"tw_stocks/3002.json"},{"revision":"f277cc9ff7dac1ace0ed940bb1776c76","url":"tw_stocks/2945.json"},{"revision":"d660ec04e0b4e1304747858dcf7ec815","url":"tw_stocks/2939.json"},{"revision":"b645e3be06a6a83badea0de0dfc2c93e","url":"tw_stocks/2929.json"},{"revision":"341dbf2e5655284908e45265c8208e70","url":"tw_stocks/2923.json"},{"revision":"0d566b853dbf32c5ef7da0b3b0fd80d7","url":"tw_stocks/2915.json"},{"revision":"6e965e7153158dfa659e1a40ee4e9ae5","url":"tw_stocks/2913.json"},{"revision":"e5a662fe1ef76fe4610ceeec88ab9561","url":"tw_stocks/2912.json"},{"revision":"2a551e755500374291f7e89d210f710d","url":"tw_stocks/2911.json"},{"revision":"e042de21787d659d23d8510c56be3d71","url":"tw_stocks/2910.json"},{"revision":"c2220ec6768f194b67f9a58351d1acae","url":"tw_stocks/2908.json"},{"revision":"583563eccf6be3665f81ce2687e44cb7","url":"tw_stocks/2906.json"},{"revision":"6495d2c62bb7e82517dcc3836abdc902","url":"tw_stocks/2905.json"},{"revision":"55c4110c8d4bcdc1f97565d51df1ef56","url":"tw_stocks/2904.json"},{"revision":"89590170ff7f0677056ab94eb1bca640","url":"tw_stocks/2903.json"},{"revision":"be627ccb7fde390aa54ddd7fe194400f","url":"tw_stocks/2901.json"},{"revision":"3a606c26beaa10c5089f80086bc5ccbe","url":"tw_stocks/2897.json"},{"revision":"61125fa5edad9d92c61e49a1e262b008","url":"tw_stocks/2892.json"},{"revision":"bfd13653af9278bea706421817505104","url":"tw_stocks/2891.json"},{"revision":"25a2dc6ed0aa450fc23bab31d610e0c9","url":"tw_stocks/2890.json"},{"revision":"656fd2ff67f06a671faf115eb9b2610c","url":"tw_stocks/2889.json"},{"revision":"1673ef1eef520641b5c7934a3fd0176b","url":"tw_stocks/2887.json"},{"revision":"1f9c5fb61514da443893687e2d56d20e","url":"tw_stocks/2886.json"},{"revision":"57bf272fbdecc4919d8df4cf4a92270e","url":"tw_stocks/2885.json"},{"revision":"62f0bddfa58775a31690ad570d2159e2","url":"tw_stocks/2884.json"},{"revision":"b3a5cc9c11b8ff760035f7a42312f0d5","url":"tw_stocks/2883.json"},{"revision":"601741d51ddf6b772ea47114858151b3","url":"tw_stocks/2882.json"},{"revision":"5f72c40071de10efad93c49bde4fc0b5","url":"tw_stocks/2881.json"},{"revision":"3e334acb609a70cfddc745cb22bf0e55","url":"tw_stocks/2880.json"},{"revision":"d5c468b737cb3f2c696c671ed1c16a92","url":"tw_stocks/2867.json"},{"revision":"6567d456ed8a49d53aaa759a57fb8f49","url":"tw_stocks/2855.json"},{"revision":"d8f528bbcfecf587c7d06d335662bddf","url":"tw_stocks/2852.json"},{"revision":"223bda9b09487da4a168dde5a863aa47","url":"tw_stocks/2851.json"},{"revision":"a6f9590363ea4881402c969da016f778","url":"tw_stocks/2850.json"},{"revision":"e0b2522b5b632b714bbe5bcbfa5bb402","url":"tw_stocks/2849.json"},{"revision":"4dd9ef3f85e611c93622aad4d58f1561","url":"tw_stocks/2845.json"},{"revision":"b8f77282ca4c657893b975d4859857dd","url":"tw_stocks/2838.json"},{"revision":"f28e1a7862b0dec962c6fc986963c165","url":"tw_stocks/2836.json"},{"revision":"b5393cfde21a5fe58dcd9e78eda9cd2f","url":"tw_stocks/2834.json"},{"revision":"8a3dcad5aef44bd14a8e1b8409cdf2e3","url":"tw_stocks/2832.json"},{"revision":"95d806af2ffb8b7bc137ccb88fa3722b","url":"tw_stocks/2820.json"},{"revision":"6e0b8cb113fef950051ba4f143b707d3","url":"tw_stocks/2816.json"},{"revision":"1a6cad5f10babbabc493959cdc6075d1","url":"tw_stocks/2812.json"},{"revision":"f27f139397724aa99f71538824baccee","url":"tw_stocks/2801.json"},{"revision":"d34b88698af0869bf01d21f9a80c4a18","url":"tw_stocks/2762.json"},{"revision":"c3004c4161790343ca8dd5876c95e7d0","url":"tw_stocks/2753.json"},{"revision":"f3789d7b884f84de78a12498cd1821a4","url":"tw_stocks/2748.json"},{"revision":"ef95a34e24155223fd7bfd073a8e0a94","url":"tw_stocks/2739.json"},{"revision":"7463d49e46a73eeaa355d97318407b95","url":"tw_stocks/2731.json"},{"revision":"39db2562c7a31c2676bcaa7d64fbd898","url":"tw_stocks/2727.json"},{"revision":"2fcfdd0db0029186348538031406127c","url":"tw_stocks/2723.json"},{"revision":"28ab14a4c42f19dfcda27b09bdfc32b7","url":"tw_stocks/2722.json"},{"revision":"e12203d445da13b27f6cc7637243b80c","url":"tw_stocks/2712.json"},{"revision":"b0248d0b09cb6f1b351adce09057b182","url":"tw_stocks/2707.json"},{"revision":"5c0008dda30c6fdfc482b0be5c906908","url":"tw_stocks/2706.json"},{"revision":"ceaf7a2886b506a45199f6002ae64080","url":"tw_stocks/2705.json"},{"revision":"3c2aeb5915e1249d8108fad944748833","url":"tw_stocks/2704.json"},{"revision":"b346e609c5b753301b86a0e1e9ab9576","url":"tw_stocks/2702.json"},{"revision":"fef347f8e1b4db0a30a3b8072b01d479","url":"tw_stocks/2701.json"},{"revision":"9e932fb19fd704cb2aa2dc6e8635ec29","url":"tw_stocks/2646.json"},{"revision":"edcb95ca11313f5963f48fb00ce7a2b2","url":"tw_stocks/2645.json"},{"revision":"653bd48fcef68af2308c7b7b0e6d7949","url":"tw_stocks/2642.json"},{"revision":"904e3f13233d4ade20721752707b742f","url":"tw_stocks/2637.json"},{"revision":"ae7b0b2cad6b45a044f4671cafd6bfb7","url":"tw_stocks/2636.json"},{"revision":"1d0a60b467e4ed1ca17bda55591c2466","url":"tw_stocks/2634.json"},{"revision":"09278ad037665881633c89f2603eec8c","url":"tw_stocks/2633.json"},{"revision":"f282417d2513967994b6c41a9310a0e7","url":"tw_stocks/2630.json"},{"revision":"adeeb2326b021883878585b50cb6d841","url":"tw_stocks/2618.json"},{"revision":"4753f78b8c583572693be9e054c0554d","url":"tw_stocks/2617.json"},{"revision":"ef9741097355c25601a5fc8b920c434c","url":"tw_stocks/2616.json"},{"revision":"0e2fa7434872f3ef2783ac394b729096","url":"tw_stocks/2615.json"},{"revision":"ced004a9a58d4b7ea7821787dd1a52f2","url":"tw_stocks/2614.json"},{"revision":"10a7e2f9f6a9b6baaf53e9ef5f32b2ab","url":"tw_stocks/2613.json"},{"revision":"3524f933bea9d958e4fc2fe4d81f6476","url":"tw_stocks/2612.json"},{"revision":"9a0304dabe9057766cbcc4c21b7b0639","url":"tw_stocks/2611.json"},{"revision":"1d3d5e51cae6818d34ad993757ded63d","url":"tw_stocks/2610.json"},{"revision":"5a080d9a57590322d2a0795ea5ea7263","url":"tw_stocks/2609.json"},{"revision":"ea0c52760b50f52e879c32231eb15da8","url":"tw_stocks/2608.json"},{"revision":"d7ef546bd8f663e626eafcdd7a69272e","url":"tw_stocks/2607.json"},{"revision":"531e8c6d2170786fd526d27fbf3ff09b","url":"tw_stocks/2606.json"},{"revision":"88abe1b6b7108bdb4a0da6f621a8755f","url":"tw_stocks/2605.json"},{"revision":"bf22974227968dc731d34f7d54d2a466","url":"tw_stocks/2603.json"},{"revision":"ac997bb04a41165337dbf0ac8080a4d3","url":"tw_stocks/2601.json"},{"revision":"322bb45b30743a9d8f45142c445015b9","url":"tw_stocks/2597.json"},{"revision":"789832de22b1221178acfa9948213bdc","url":"tw_stocks/2548.json"},{"revision":"601a507bca9aae4cd451cdfbca0fc3af","url":"tw_stocks/2547.json"},{"revision":"d6ee2e4598943da01c5335812366babe","url":"tw_stocks/2546.json"},{"revision":"8079674859dcde376a7e2d59dd5b1675","url":"tw_stocks/2545.json"},{"revision":"e1ee701c22a78561b42af4c10bdeaf3f","url":"tw_stocks/2543.json"},{"revision":"df0de296e9e2330e8c3fba49059c7b0f","url":"tw_stocks/2542.json"},{"revision":"8797c3a5a47212c0e0118589f96f6db4","url":"tw_stocks/2540.json"},{"revision":"2d36e43c76f00c182a3e9ed26304d825","url":"tw_stocks/2539.json"},{"revision":"996db31f4d784ddf7808cb66aa7fba10","url":"tw_stocks/2538.json"},{"revision":"761d46ee8df0f6f91fa3b81f469013bc","url":"tw_stocks/2537.json"},{"revision":"970fa14348a91228028f6ac8a4a95013","url":"tw_stocks/2536.json"},{"revision":"affcd5eea975f4326565ac43828de3d4","url":"tw_stocks/2535.json"},{"revision":"b0223c58b74405fe61bde04d5ce142fd","url":"tw_stocks/2534.json"},{"revision":"e1f28324c791cb221705341d67da8e04","url":"tw_stocks/2530.json"},{"revision":"1974c1fe414a2f9b054e5a344a34c0be","url":"tw_stocks/2528.json"},{"revision":"8c424f91b9f73f4ea72c508d0d2befda","url":"tw_stocks/2527.json"},{"revision":"0e37d03295826783e9037a4f2384a4ab","url":"tw_stocks/2524.json"},{"revision":"3067e0bca3892e65f0c5444cc3303c84","url":"tw_stocks/2520.json"},{"revision":"d9ede2b1793d739817773145455a1ec0","url":"tw_stocks/2516.json"},{"revision":"0a13c128c92a36514e20d82feeb97b97","url":"tw_stocks/2515.json"},{"revision":"ccb5f63661b6834979553fc31f674c96","url":"tw_stocks/2514.json"},{"revision":"66707768aefb97b6a265f93e194349a5","url":"tw_stocks/2511.json"},{"revision":"a092af816acb9dd6d4b0dd4e0e9e839a","url":"tw_stocks/2509.json"},{"revision":"3fc435f6c1a422135dbaf45dd8d4d61b","url":"tw_stocks/2506.json"},{"revision":"da2b4232e79e0f2bf08143907c9abac1","url":"tw_stocks/2505.json"},{"revision":"0a6f2903711d89969acaadb30311efd9","url":"tw_stocks/2504.json"},{"revision":"73cc64ffe381fdfd761bb037e3f62daa","url":"tw_stocks/2501.json"},{"revision":"0e617c44d5899111f0e242b909578729","url":"tw_stocks/2498.json"},{"revision":"aeba21550ba5b0c20a7a820b5582b516","url":"tw_stocks/2497.json"},{"revision":"9ba52a5ca4b0853dabb7e50b8fa29f51","url":"tw_stocks/2496.json"},{"revision":"81f62ab9dccf142a4c28ce1bb1a42c6a","url":"tw_stocks/2495.json"},{"revision":"6106098793cef95da65239a6749c2eda","url":"tw_stocks/2493.json"},{"revision":"298d945214a6b73b8e28aa36118ff1cb","url":"tw_stocks/2492.json"},{"revision":"3b1adac22b955ab96dc640a8ce7998d9","url":"tw_stocks/2491.json"},{"revision":"9b43274561f9dfc4c35408231f3aa4d4","url":"tw_stocks/2489.json"},{"revision":"1a73d74597385d2f0fcce716e931390d","url":"tw_stocks/2488.json"},{"revision":"911b95934057d4bf6a3655407142ae67","url":"tw_stocks/2486.json"},{"revision":"091acc89a5e0bb16de303a2b30d40e16","url":"tw_stocks/2485.json"},{"revision":"99567b8437f486e0c0fd964913707d62","url":"tw_stocks/2484.json"},{"revision":"fd52fea9fbdd98afc31e27ca146b578d","url":"tw_stocks/2483.json"},{"revision":"9a06c949b251c2620aca0779fd5ccc4f","url":"tw_stocks/2482.json"},{"revision":"ddf12295ffd0824565f6b4512590cab8","url":"tw_stocks/2481.json"},{"revision":"5c9b8c2ebdae1897f21e9b329b55e394","url":"tw_stocks/2480.json"},{"revision":"a435a570d18d163bed0bdcc959045817","url":"tw_stocks/2478.json"},{"revision":"61088a862cdb0610e72698341691ba75","url":"tw_stocks/2477.json"},{"revision":"51742e35802bb3be21b1a2b4aa255278","url":"tw_stocks/2476.json"},{"revision":"4f9d5986cea7c6672e1e69bcf87e81fd","url":"tw_stocks/2474.json"},{"revision":"011344bf989b45e25292056103107e49","url":"tw_stocks/2472.json"},{"revision":"59f7e6f4edfc6fe4d6541557bc97af25","url":"tw_stocks/2471.json"},{"revision":"14b88e2416f5bb17111d0bb78b104a12","url":"tw_stocks/2468.json"},{"revision":"78342d42ad82b9ccaeafdb55380ef9b6","url":"tw_stocks/2467.json"},{"revision":"1fbcb952c2fc5519f9e8cec985a9ea38","url":"tw_stocks/2466.json"},{"revision":"035e0acfdec5ab1b248be922b2d4b905","url":"tw_stocks/2465.json"},{"revision":"b45d5d770481024aa458edb5177ff8bd","url":"tw_stocks/2464.json"},{"revision":"2dd5b4c40bc63b072baa330011fce1cc","url":"tw_stocks/2462.json"},{"revision":"b6f36cca031bf5751719750ddddfdcde","url":"tw_stocks/2461.json"},{"revision":"7ff6bd1b82f7b71b3169adc7d2d6cf42","url":"tw_stocks/2460.json"},{"revision":"eaebdca6d32ebccb515e66b6f69172f1","url":"tw_stocks/2459.json"},{"revision":"8053277e4a8a9dd463c5ec41ba56cce8","url":"tw_stocks/2458.json"},{"revision":"63e21ca9ec102f24f0aa746aa067cf0e","url":"tw_stocks/2457.json"},{"revision":"6295c178cbc55475a019e9325ad42134","url":"tw_stocks/2455.json"},{"revision":"e9ead495b6fde2062e1d236aa424a1a7","url":"tw_stocks/2454.json"},{"revision":"2b655c7de7fc774287eb68718713141d","url":"tw_stocks/2453.json"},{"revision":"f755824ec0b6172fee60af33b04102e5","url":"tw_stocks/2451.json"},{"revision":"383ab00ba0c1d9565f156fe71d440d58","url":"tw_stocks/2450.json"},{"revision":"f36d9ffde4b4f2597fc350df4984d521","url":"tw_stocks/2449.json"},{"revision":"c2352242b361191d604ed13b2c759ab8","url":"tw_stocks/2444.json"},{"revision":"f256e4077f2a91a67d58db3f9593d71f","url":"tw_stocks/2442.json"},{"revision":"328b125a5a40ad2e0eb9a82e08cab084","url":"tw_stocks/2441.json"},{"revision":"9c6b8de0f8be179ee3375b8c9a89ff60","url":"tw_stocks/2440.json"},{"revision":"0a36eaa670efbcdf2eb94656cc7f1d93","url":"tw_stocks/2439.json"},{"revision":"2ce542237d9cac0ec180a5bd5135b3b2","url":"tw_stocks/2438.json"},{"revision":"7538497534eaf286008b684f4e0a528e","url":"tw_stocks/2436.json"},{"revision":"d73494293bd2729c10b1ec32d84d2c88","url":"tw_stocks/2434.json"},{"revision":"37407ccd6cce73e81787f270fa4e8167","url":"tw_stocks/2433.json"},{"revision":"f5fc7213809c2dbc35651c88f4a79e5b","url":"tw_stocks/2431.json"},{"revision":"5f8186a443bbb6436f96c878b1dc44d5","url":"tw_stocks/2430.json"},{"revision":"28528a121ed45d61b853f3468e65a9cf","url":"tw_stocks/2429.json"},{"revision":"527c4f0506cbfb776cb87e0cf68d6169","url":"tw_stocks/2428.json"},{"revision":"76a7e67de88b21c198e3a3513691cfaa","url":"tw_stocks/2427.json"},{"revision":"c0f7a95295137af77e88a1092b2213bb","url":"tw_stocks/2426.json"},{"revision":"2c631e40160272e5724617dc134d7e7f","url":"tw_stocks/2425.json"},{"revision":"e48cc50de9ccb6087f4183e02fe924ad","url":"tw_stocks/2424.json"},{"revision":"f2069b0cbfd44ad4ecb2ff3575cda5f1","url":"tw_stocks/2423.json"},{"revision":"7bf573910e339c4bceb16cd90038a4ed","url":"tw_stocks/2421.json"},{"revision":"b5e2a844d245e3781a85dd335c6b9e75","url":"tw_stocks/2420.json"},{"revision":"f02eeb3d0229c88c150288b3bc7e1a67","url":"tw_stocks/2419.json"},{"revision":"85340485344545c957feb951ffce9158","url":"tw_stocks/2417.json"},{"revision":"af93cdfda6d4256679b4d6aec3126d6f","url":"tw_stocks/2415.json"},{"revision":"ef87e0a06db20adbfe53f97210349ce2","url":"tw_stocks/2414.json"},{"revision":"0346b342f9cbaf25e2651ea3e5eb878c","url":"tw_stocks/2413.json"},{"revision":"95bda10e4848fb6de78d60fb9bfd6cf0","url":"tw_stocks/2412.json"},{"revision":"e5694f0a5c2219c0b6e8d60cb86f91f2","url":"tw_stocks/2409.json"},{"revision":"36b8175c6e2c7a54d04174e0c2eff55c","url":"tw_stocks/2408.json"},{"revision":"46f88ad230eb8e2954c5dc7fa44304b0","url":"tw_stocks/2406.json"},{"revision":"fefd54624deb34d3c9bf4ccb2572a72f","url":"tw_stocks/2405.json"},{"revision":"834b4b4f5f29555e27434e3d01bd4a02","url":"tw_stocks/2404.json"},{"revision":"4c687e910017d5a5f166ff3b31c503af","url":"tw_stocks/2402.json"},{"revision":"edfd7aeed2679c74fa1bcf97c962c4f5","url":"tw_stocks/2401.json"},{"revision":"324ab21e3d31e562e66faa90a05c4841","url":"tw_stocks/2399.json"},{"revision":"428ceb74166965e0e9ec2316d0f54c02","url":"tw_stocks/2397.json"},{"revision":"3c9f289d40cdbf2e80470cecd2f6143f","url":"tw_stocks/2395.json"},{"revision":"aec88f6ac922b93878b9c1cdf48e36d0","url":"tw_stocks/2393.json"},{"revision":"08adb7d448eb187606623540d0ed4cab","url":"tw_stocks/2392.json"},{"revision":"9d9b2616a6d9309cbcfa114bfc2540bd","url":"tw_stocks/2390.json"},{"revision":"4761ff5fb8ef8239e560eaa972f63f8f","url":"tw_stocks/2388.json"},{"revision":"a88f27ed936ce9259c3b7ee3b28c777d","url":"tw_stocks/2387.json"},{"revision":"b8c0d59ef3d16b5fc9eff8c4c87bce1d","url":"tw_stocks/2385.json"},{"revision":"b79dd359db488e26c553d9cce4a0a62e","url":"tw_stocks/2383.json"},{"revision":"ddd82701a92694cb69ec151a3898e6ad","url":"tw_stocks/2382.json"},{"revision":"49b80ccc491a183f737373002bf05c4d","url":"tw_stocks/2380.json"},{"revision":"4bbc7705a105c18953d4da9496ec0e96","url":"tw_stocks/2379.json"},{"revision":"5ba225df1e292fcebb80b55e8213dba4","url":"tw_stocks/2377.json"},{"revision":"3e29e90855285fe7a0df0301812bf589","url":"tw_stocks/2376.json"},{"revision":"f2453661291410945042eed3a02d9ea0","url":"tw_stocks/2375.json"},{"revision":"e39d8a838819c2a23e1ee214653a1342","url":"tw_stocks/2374.json"},{"revision":"9b5ff59b2d34dca75d6b48393595c0bf","url":"tw_stocks/2373.json"},{"revision":"168f394754f5a29fbb7fbdbc7d8e0be8","url":"tw_stocks/2371.json"},{"revision":"03b2b92d5edb093703d0826c59dd30b6","url":"tw_stocks/2369.json"},{"revision":"155af7d7d421878bb9228a83c363bfd5","url":"tw_stocks/2368.json"},{"revision":"5978da8d549fd1005a498b31d30806f6","url":"tw_stocks/2367.json"},{"revision":"05a92ab1a5e660a9663267ee62432573","url":"tw_stocks/2365.json"},{"revision":"b358769ca344c621e84d1ed49838bcb6","url":"tw_stocks/2364.json"},{"revision":"d5e9c5e222dc0f2e3883dab4ec094729","url":"tw_stocks/2363.json"},{"revision":"f6c7904d627327525f43ab7075a82d33","url":"tw_stocks/2362.json"},{"revision":"24718d77a83103d0fc884a04b6831cd3","url":"tw_stocks/2360.json"},{"revision":"e76c95b260b75c1d868c8ddb6b11bd29","url":"tw_stocks/2359.json"},{"revision":"59f46932f85f2359323590dbc5fa9f01","url":"tw_stocks/2357.json"},{"revision":"a4a7dd1ccbf34cdc95b15894f297a0d8","url":"tw_stocks/2356.json"},{"revision":"a55e59eab1717192dc541840ccf120b7","url":"tw_stocks/2355.json"},{"revision":"f21a87670389397a48540520a01aee9e","url":"tw_stocks/2354.json"},{"revision":"13831bcfcd6e63b4fd56c4984a67cc3b","url":"tw_stocks/2353.json"},{"revision":"e4d3d904f7e47d1f2db576fa87c74b45","url":"tw_stocks/2352.json"},{"revision":"ccd16d511ee3a908f05cb8e0dcb6eeff","url":"tw_stocks/2351.json"},{"revision":"03115bd9ed8e8e9116ee9ececdf5b5dd","url":"tw_stocks/2349.json"},{"revision":"2b403d9082981d23b4f87ee2e2c14164","url":"tw_stocks/2348.json"},{"revision":"abd2c1b95277372050ba213ccc3103b5","url":"tw_stocks/2347.json"},{"revision":"8d05491703853ec46258822fa10feba3","url":"tw_stocks/2345.json"},{"revision":"b378d58415f1f787732a4a6f92a41127","url":"tw_stocks/2344.json"},{"revision":"ff7a955af8dbc62b09048657f82e0dc4","url":"tw_stocks/2342.json"},{"revision":"e9348f702fca54f10e7e1d4bb3b7ce74","url":"tw_stocks/2340.json"},{"revision":"e73a09ee16de8dfcb56797ba2185d29f","url":"tw_stocks/2338.json"},{"revision":"130cde0ff3b46b9f57c615666accf8f4","url":"tw_stocks/2337.json"},{"revision":"21fba805c21b2b38cbbb360680ab148e","url":"tw_stocks/2332.json"},{"revision":"ee6b3e16b0f1e6893cee323a4714343e","url":"tw_stocks/2331.json"},{"revision":"e11dead836edc743e77fa39194d4db9c","url":"tw_stocks/2330.json"},{"revision":"da867434c60d09eab41b5af42d39402d","url":"tw_stocks/2329.json"},{"revision":"9d189484ef5072cba65ba1ca4d9bb961","url":"tw_stocks/2328.json"},{"revision":"d563c22dca68a857fbad3ee7d42a21b8","url":"tw_stocks/2327.json"},{"revision":"5393c3db27b48611d0267e0471e362fb","url":"tw_stocks/2324.json"},{"revision":"3578ee3b2b14617452d76debde4e3721","url":"tw_stocks/2323.json"},{"revision":"ea455a93f99125864fba58efa3d9c852","url":"tw_stocks/2321.json"},{"revision":"505dabe59bd586ae7d6daba334efefde","url":"tw_stocks/2317.json"},{"revision":"a3a26b9e3ac2327f44a66c5c78448a0e","url":"tw_stocks/2316.json"},{"revision":"529007fb8c38b3da93324deed5067ace","url":"tw_stocks/2314.json"},{"revision":"00c2e13afadaaec0928c0624cc591db4","url":"tw_stocks/2313.json"},{"revision":"c7763d9a1ddcb910a7d01720fb28bd1f","url":"tw_stocks/2312.json"},{"revision":"19f361fd760653d101abcf79a4041f13","url":"tw_stocks/2308.json"},{"revision":"4cef32ff7731f737c6318ce93db1aa47","url":"tw_stocks/2305.json"},{"revision":"232ca85a1883e6f28c9a84bdc7a43187","url":"tw_stocks/2303.json"},{"revision":"819506bfc93989187f1e1847b1dbbe1e","url":"tw_stocks/2302.json"},{"revision":"85fb77e64de7cefe74a4b7f80c7bd5a2","url":"tw_stocks/2301.json"},{"revision":"5620da03565251554554b01fc686e183","url":"tw_stocks/2250.json"},{"revision":"be7253251b27251b28da16f5d7f1eb1d","url":"tw_stocks/2248.json"},{"revision":"37d23d596d247f68063ca05e7b1bc5d5","url":"tw_stocks/2247.json"},{"revision":"3e227d5614d8c61e31f14d3c51d0460e","url":"tw_stocks/2243.json"},{"revision":"7b9e33b75ad231e5e9815fbcf3e70515","url":"tw_stocks/2241.json"},{"revision":"5e999d53199a86a677377623faaf4936","url":"tw_stocks/2239.json"},{"revision":"71d52e2088aa3f8fca7fa60bc3c518d5","url":"tw_stocks/2236.json"},{"revision":"8202a7f3a879b6b9d6114de74619cdc5","url":"tw_stocks/2233.json"},{"revision":"91eb7faa4e9357b4d7089d686437f752","url":"tw_stocks/2231.json"},{"revision":"6330ef1f4b785dbeaafd1c478d88f247","url":"tw_stocks/2228.json"},{"revision":"b8ef5a01a1709f16bcee72cfe3bcbb77","url":"tw_stocks/2227.json"},{"revision":"e6ae5749754ef9590b74d3d8c91317ae","url":"tw_stocks/2211.json"},{"revision":"0ba68679fc96c2573ec9409dec45842b","url":"tw_stocks/2208.json"},{"revision":"d0835005ddccd275ec6c0f7f18c41fce","url":"tw_stocks/2207.json"},{"revision":"52f172fe7bed02dc37fd9f837a97f998","url":"tw_stocks/2206.json"},{"revision":"10adc7c8805252ef2964590b89c28654","url":"tw_stocks/2204.json"},{"revision":"d4bc4f8af587242667f28fae2a5f2f1d","url":"tw_stocks/2201.json"},{"revision":"bb0455c3a9515e76f5ce33d0fde6a531","url":"tw_stocks/2115.json"},{"revision":"3f9f7b3abcd204368586026c5be4f729","url":"tw_stocks/2114.json"},{"revision":"c38af966cbf1e258eb103716e9f501b6","url":"tw_stocks/2109.json"},{"revision":"789546d94f8b35773050abf75ee86a4e","url":"tw_stocks/2108.json"},{"revision":"666c6cdbe6ef20aa521b1bfa55b53655","url":"tw_stocks/2107.json"},{"revision":"9c0b1a0fd3a777eae6497ce770c3afc5","url":"tw_stocks/2106.json"},{"revision":"9178582be700a92f36d4da9c1b5b3ff3","url":"tw_stocks/2105.json"},{"revision":"209d3e435df97db3247739cc6f77928c","url":"tw_stocks/2104.json"},{"revision":"df257b900224f01f179e5953e62bbe75","url":"tw_stocks/2103.json"},{"revision":"eb2ea2bdcd8fe19675d5bbaca97bdf0f","url":"tw_stocks/2102.json"},{"revision":"f071cdc260276fa7c33e9c60932bb3bb","url":"tw_stocks/2101.json"},{"revision":"8bdae98c16b17a5047a8d17840d8ad27","url":"tw_stocks/2072.json"},{"revision":"ef934597fdf6beca4bdd16580781ec57","url":"tw_stocks/2069.json"},{"revision":"8f6c43a31ab81c6b74a37253a7dbf8c8","url":"tw_stocks/2062.json"},{"revision":"84b2ec6a7db1fb59775cc5029b837452","url":"tw_stocks/2059.json"},{"revision":"09b032225b6cf6a5a6e175ac2a955a29","url":"tw_stocks/2049.json"},{"revision":"7fa062708586f5e549a277f6af74ae33","url":"tw_stocks/2038.json"},{"revision":"546ee48047fed69173250844d23089ef","url":"tw_stocks/2034.json"},{"revision":"3c31a0645074a7bea3f1406bb00786ba","url":"tw_stocks/2033.json"},{"revision":"c2deee1a30a61746866be2840828ff87","url":"tw_stocks/2032.json"},{"revision":"7ac7b4afc9f8e5f582d617416ae75be2","url":"tw_stocks/2031.json"},{"revision":"a68d9db3b48be85123743f42fda8ae64","url":"tw_stocks/2030.json"},{"revision":"5da0c21624dc38ba1e0da58f0f43de2e","url":"tw_stocks/2029.json"},{"revision":"521377c2478d9dde497871b512a6e6c9","url":"tw_stocks/2028.json"},{"revision":"ddc394cae692e7d61e5d22b445df75a1","url":"tw_stocks/2027.json"},{"revision":"abad3f4e6c809ad151801868a5f0cf51","url":"tw_stocks/2025.json"},{"revision":"c7cd2c74a6744b2b4e7afaa0ff412bea","url":"tw_stocks/2024.json"},{"revision":"430da2e7288073f94366acc48a50ef11","url":"tw_stocks/2023.json"},{"revision":"68b061f20a536bb15fde5f6c68eafac8","url":"tw_stocks/2022.json"},{"revision":"fd6c54ddb0c4e4645598c33f5b8efb5d","url":"tw_stocks/2020.json"},{"revision":"8d90a0e46a42407a402e12fefdd0c395","url":"tw_stocks/2017.json"},{"revision":"d0206746847741aab12ca68ccb44704b","url":"tw_stocks/2015.json"},{"revision":"a977f2b4df325286f97a11116378fe6c","url":"tw_stocks/2014.json"},{"revision":"649ae6745f056b9136101b9bba10a707","url":"tw_stocks/2013.json"},{"revision":"1e0a932f511eb10c8faeb20e55141e88","url":"tw_stocks/2012.json"},{"revision":"da72c615b334a4b2d38dc45b053d52ec","url":"tw_stocks/2010.json"},{"revision":"a337e95588673a16371622c69b684e53","url":"tw_stocks/2009.json"},{"revision":"d8285cacd7afc3fb26af16525a08a833","url":"tw_stocks/2008.json"},{"revision":"a8e538805b4087d8c3dd115e60867e67","url":"tw_stocks/2007.json"},{"revision":"889a9bbb6005311ba5542ae972190e38","url":"tw_stocks/2006.json"},{"revision":"fc96f271ceb8ccb57629afa5f62d1e24","url":"tw_stocks/2002.json"},{"revision":"4c62ecb78165e98cca585dc69f6c1306","url":"tw_stocks/1909.json"},{"revision":"ac2155399caceb19802e4710feb0c5bc","url":"tw_stocks/1907.json"},{"revision":"c49df4401686f9cdc1007e6ea6e73b88","url":"tw_stocks/1906.json"},{"revision":"d951f38de198cfdb1f5cc98d4bd5663e","url":"tw_stocks/1905.json"},{"revision":"5e55b8c2b89431cff003713bde82227b","url":"tw_stocks/1904.json"},{"revision":"6f6e850e71bb059860b3622ade8aad12","url":"tw_stocks/1903.json"},{"revision":"04793926cb3e5eea43fd2c39b437230c","url":"tw_stocks/1817.json"},{"revision":"48e03576d2e4cc694e7f830dff52ec0e","url":"tw_stocks/1810.json"},{"revision":"bd015c443f97ae84a00b546c625c50eb","url":"tw_stocks/1809.json"},{"revision":"ee5b9e9676ba38cf23bbf133af698b76","url":"tw_stocks/1808.json"},{"revision":"24355c4d3bc1a9bedc9a5d900892d232","url":"tw_stocks/1806.json"},{"revision":"23fb632d9a97c787eee21c848935e9fc","url":"tw_stocks/1805.json"},{"revision":"0148a7a0963e65f996aa422c44044600","url":"tw_stocks/1802.json"},{"revision":"c097c6894a0b76f7bfeda8cc4ab23482","url":"tw_stocks/1795.json"},{"revision":"b1af310978ed77f63cc1349e627959d8","url":"tw_stocks/1789.json"},{"revision":"b611643875801ce5b1f5e43ba2d150f6","url":"tw_stocks/1786.json"},{"revision":"eaf10ffc11b721e22b0e1902b52c4e4e","url":"tw_stocks/1783.json"},{"revision":"7c788f7dcbb314674223b381f64b68f4","url":"tw_stocks/1776.json"},{"revision":"ccd00e41408c1bd1ea2dfb88ff9d551d","url":"tw_stocks/1773.json"},{"revision":"e9268b4d898b35def1f8676fddbd0395","url":"tw_stocks/1762.json"},{"revision":"0edc33f995ce8d3ebf4d4945e8543f41","url":"tw_stocks/1760.json"},{"revision":"201339d7054abdedc7b899ebca235aab","url":"tw_stocks/1752.json"},{"revision":"de446c835d96e53317f729737460e878","url":"tw_stocks/1737.json"},{"revision":"10fa6f9c05b1a4fdf2fc9c3f0db0ab03","url":"tw_stocks/1736.json"},{"revision":"1f63be122544e5a868b7aa24651b2337","url":"tw_stocks/1735.json"},{"revision":"6604704c7103c2d4c84e93bc8b051f27","url":"tw_stocks/1734.json"},{"revision":"ef0d987fd9d1876994d222c3b4ceb4fe","url":"tw_stocks/1733.json"},{"revision":"0176528d7c5bdf4f889c6d13b1c9c23e","url":"tw_stocks/1732.json"},{"revision":"83a2b52d147dc1fb1ca40b2ae41b595c","url":"tw_stocks/1731.json"},{"revision":"57ef3a24643328546db2ebeb97603029","url":"tw_stocks/1730.json"},{"revision":"6b00e9569b65389f934a2860f57bb616","url":"tw_stocks/1727.json"},{"revision":"b59638607312d4eca4ee6a6304d2256b","url":"tw_stocks/1726.json"},{"revision":"a378d4da9d7936503a27c9a7d519c4a5","url":"tw_stocks/1725.json"},{"revision":"f25079208956cf8b04c4aef130e77c51","url":"tw_stocks/1723.json"},{"revision":"3e04e90ebb155ab8455bc374bf0fad5a","url":"tw_stocks/1722.json"},{"revision":"7de28991489af789f06eb00a15080c74","url":"tw_stocks/1721.json"},{"revision":"7c299f47442359ebfa9ff847279a7379","url":"tw_stocks/1720.json"},{"revision":"ebca70cd8272df7e5905997ad156651c","url":"tw_stocks/1718.json"},{"revision":"b8df395aadb1943b704610327e458dcc","url":"tw_stocks/1717.json"},{"revision":"16f9f8d738547061a815fc369e54f360","url":"tw_stocks/1714.json"},{"revision":"c10ba94725f4df1ca50a92057d679123","url":"tw_stocks/1713.json"},{"revision":"3c8e9ee76b3a583ab01d520a1bcc1332","url":"tw_stocks/1712.json"},{"revision":"1015e6dbc0fc0114eebc2935ea119d6f","url":"tw_stocks/1711.json"},{"revision":"6b1403d266dae19fa108f8978858ed8d","url":"tw_stocks/1710.json"},{"revision":"f4eb96203967a89e827fbb23e441d1fa","url":"tw_stocks/1709.json"},{"revision":"6c062860bec53e20a8c9d33f4addb9f8","url":"tw_stocks/1708.json"},{"revision":"f888a76c3c50726df61ce7faee6d5a15","url":"tw_stocks/1707.json"},{"revision":"94ecf417de434e3f974f6175ad01763f","url":"tw_stocks/1702.json"},{"revision":"672da1de4fe418219f72995e3d0436a1","url":"tw_stocks/1626.json"},{"revision":"b669e4997f75458f4bfd0a0dfe718195","url":"tw_stocks/1623.json"},{"revision":"1b7bcf2168c8920b86e4ce71f7fdd0cd","url":"tw_stocks/1618.json"},{"revision":"c3db2ee038e086c65a180b696f55e975","url":"tw_stocks/1617.json"},{"revision":"14887e41b172b231d32cf323eb1e2051","url":"tw_stocks/1616.json"},{"revision":"c58eb42704a370beb851a6d6d3a34ddf","url":"tw_stocks/1615.json"},{"revision":"9486500507b391bbdeadf83219726a99","url":"tw_stocks/1614.json"},{"revision":"e37a3d0026f5412e36946a013062bb5b","url":"tw_stocks/1612.json"},{"revision":"ce724a0960c91efa99dfca827e7f59ed","url":"tw_stocks/1611.json"},{"revision":"b11854e5ef5c3569725711a1b2b76a70","url":"tw_stocks/1609.json"},{"revision":"7f8742b226636b4b082597991de1d361","url":"tw_stocks/1608.json"},{"revision":"da3a1399a6e0fc98818d39c43eff81d9","url":"tw_stocks/1605.json"},{"revision":"e234cb73e7236c768bd8f87321f5c5db","url":"tw_stocks/1604.json"},{"revision":"a3c498aa428700bafe022c549a45d6cf","url":"tw_stocks/1603.json"},{"revision":"04585079635b333ee0f5e2df1287daee","url":"tw_stocks/1598.json"},{"revision":"52a7e90c1313239ed181a39b6c9e3377","url":"tw_stocks/1597.json"},{"revision":"57e0586b9b8720251aa9a089f01e6cad","url":"tw_stocks/1590.json"},{"revision":"180617dea4ac66e596c49f68a581cd7a","url":"tw_stocks/1589.json"},{"revision":"a7b097b1942e6efb3866a9a07f167369","url":"tw_stocks/1587.json"},{"revision":"e334c47f51e1b9df253199d053bc3b37","url":"tw_stocks/1583.json"},{"revision":"41a968782947ceaceb69bd540fcacddf","url":"tw_stocks/1582.json"},{"revision":"b06afa5cb31c3f7558b2a423c0ce580b","url":"tw_stocks/1568.json"},{"revision":"f48af43cdc551e408c7f51fa5ea838a4","url":"tw_stocks/1563.json"},{"revision":"6fc34550deb8535b97f77d287f489c70","url":"tw_stocks/1560.json"},{"revision":"01349c982f46c2e071092ea20534477a","url":"tw_stocks/1558.json"},{"revision":"dffe6fb7bc36855dc4cb73b821d5cb84","url":"tw_stocks/1541.json"},{"revision":"5c56752b39f13201a12f9f833734fa74","url":"tw_stocks/1540.json"},{"revision":"bb29dbbfb44a46afeb84a5c9d10d02be","url":"tw_stocks/1539.json"},{"revision":"70f6ae69646afbf5c5733f416df72eef","url":"tw_stocks/1538.json"},{"revision":"9a8f9eeebb5096004222134e80d69db1","url":"tw_stocks/1537.json"},{"revision":"5985fa756db3bd570d4aebf254d64b2c","url":"tw_stocks/1536.json"},{"revision":"f69ce74b3be532967e247638be8fa13a","url":"tw_stocks/1535.json"},{"revision":"c4dd156db7dca73ec72918080d358b87","url":"tw_stocks/1533.json"},{"revision":"f2862ae0f50f49e45f27f9b6a74ebc01","url":"tw_stocks/1532.json"},{"revision":"64223aef20764dee615927d6cfcc95b4","url":"tw_stocks/1531.json"},{"revision":"aeacadc75f61af664fe149c68dd387b3","url":"tw_stocks/1530.json"},{"revision":"1921cf0ebbc3311712a3a6c524ba1fd0","url":"tw_stocks/1529.json"},{"revision":"7ad4fcbb9ceb601e27b364b23f002ce5","url":"tw_stocks/1528.json"},{"revision":"b97b2456d0eefab9b2b1b417b7500c42","url":"tw_stocks/1527.json"},{"revision":"e832236fc444543e896176101c95b4ce","url":"tw_stocks/1526.json"},{"revision":"4a0aa4a6e8634feb16e137aa8ed93d46","url":"tw_stocks/1525.json"},{"revision":"3bc9c9c7249b82a0ca6489f673dbde5f","url":"tw_stocks/1524.json"},{"revision":"a10a6aeff89763bb589a44d32e599dcf","url":"tw_stocks/1522.json"},{"revision":"63cf901c88ef3b8aeb79f607e16fea18","url":"tw_stocks/1521.json"},{"revision":"320c6615612847ef8e90c5b0e9e52ccb","url":"tw_stocks/1519.json"},{"revision":"8e66b52b53ef63945b0f2b1ea6ba9752","url":"tw_stocks/1517.json"},{"revision":"0ffb4825b1cfbce563d506fc91033477","url":"tw_stocks/1516.json"},{"revision":"a993a7b70050e6c3b0dbfcc90cfbbb6e","url":"tw_stocks/1515.json"},{"revision":"0a91f240c1d3f01019b7f80b1cda7d8b","url":"tw_stocks/1514.json"},{"revision":"8ed1eb520377788c90be8253ee27b21f","url":"tw_stocks/1513.json"},{"revision":"911a4980ad02f3265ddcce1607b51f05","url":"tw_stocks/1512.json"},{"revision":"eaab797622c2157746fcda6a6f0e3ffc","url":"tw_stocks/1506.json"},{"revision":"079c56b5f698726d9a6a35075036bea6","url":"tw_stocks/1504.json"},{"revision":"08f79aa0d7cebf02f2bb5bfc259b7c89","url":"tw_stocks/1503.json"},{"revision":"b59ed12bfb80fce93c27b2cb96aa00d5","url":"tw_stocks/1477.json"},{"revision":"2de79c329b4f5502ae1074e0e77d61c2","url":"tw_stocks/1476.json"},{"revision":"06cda8771c39d8c72916c606cbdf5992","url":"tw_stocks/1475.json"},{"revision":"1b27c089d85a7f392901a82751732495","url":"tw_stocks/1474.json"},{"revision":"65a1cec65eb2ea669a2f20c974586666","url":"tw_stocks/1473.json"},{"revision":"90251164baaf1a90365dfd50150ff52a","url":"tw_stocks/1472.json"},{"revision":"1d4d5db533ffccec284f0caf5df0462b","url":"tw_stocks/1471.json"},{"revision":"6b6ea9445397756d18d63ab55813f9cb","url":"tw_stocks/1470.json"},{"revision":"83e9a96727f95772050bbe41028ac45a","url":"tw_stocks/1468.json"},{"revision":"4b9bbf9d1c72f45c0650d0c27b1b61e6","url":"tw_stocks/1467.json"},{"revision":"c74955025a2f9a24f9c67953308132a4","url":"tw_stocks/1466.json"},{"revision":"c1cd4885a7aace47db8846ffab00583d","url":"tw_stocks/1465.json"},{"revision":"dadfbf69346d33f4c27c0097f6f36c70","url":"tw_stocks/1464.json"},{"revision":"cb172da0d6929afb9b540b8a6630316d","url":"tw_stocks/1463.json"},{"revision":"67cab681c8c493240d63bf43eeed1cf4","url":"tw_stocks/1460.json"},{"revision":"9c25c8013b85a7c07c77e80453ac0e10","url":"tw_stocks/1459.json"},{"revision":"2e08b16f903a68ba6409eae8b318cedb","url":"tw_stocks/1457.json"},{"revision":"4096242d5eb97ed81b314e942760db84","url":"tw_stocks/1456.json"},{"revision":"cb2681428bee3cd1da6c14861bb249ba","url":"tw_stocks/1455.json"},{"revision":"bff1686cbf2493c654e89d10eb23e2cd","url":"tw_stocks/1454.json"},{"revision":"5a9adbb9aa9dfbb135af40516b117f2e","url":"tw_stocks/1453.json"},{"revision":"2505e759598edce701aeafd5f04d8850","url":"tw_stocks/1452.json"},{"revision":"0b7aeacf79423dcbda31f215917b9094","url":"tw_stocks/1451.json"},{"revision":"9af546168ae04c6287b16539d0ca7ce9","url":"tw_stocks/1449.json"},{"revision":"ef3b176b87bf5f9846c8a8c5994c0b64","url":"tw_stocks/1447.json"},{"revision":"1f3be61c8fca5ef51fc8be20b5947ddb","url":"tw_stocks/1446.json"},{"revision":"aa9f2959f4c0c6bb4f6039887e201a8e","url":"tw_stocks/1445.json"},{"revision":"61404c6b152d4b37d7ed4c26ebe6649d","url":"tw_stocks/1444.json"},{"revision":"f298d66d2c28a8eceeecd6bd39a6ee57","url":"tw_stocks/1443.json"},{"revision":"b04ef7a2c5c45b013ddacba20570dbba","url":"tw_stocks/1442.json"},{"revision":"5c9b0e440d7cd7a3c7eaab307eec9942","url":"tw_stocks/1441.json"},{"revision":"e7cf7e144a396ea3a97ae683bffe583a","url":"tw_stocks/1440.json"},{"revision":"4c1eaf1ae289d7417c90e0a632ed0516","url":"tw_stocks/1439.json"},{"revision":"c44ad49b71d643639b18dabc540e0a96","url":"tw_stocks/1438.json"},{"revision":"5f5f3653b2e9344e271c76f171ce0e0b","url":"tw_stocks/1437.json"},{"revision":"807beaa948400a1758148f56c0e84818","url":"tw_stocks/1436.json"},{"revision":"2dab2d143c335d40b2d5cf01762732dd","url":"tw_stocks/1435.json"},{"revision":"21403835f9df6314bf522687aac8a87d","url":"tw_stocks/1434.json"},{"revision":"75e8dd5cf858e79330be5147517b35ca","url":"tw_stocks/1432.json"},{"revision":"b6ac36018cf0f7893b9df4ed4850fc1c","url":"tw_stocks/1423.json"},{"revision":"3a6432a3b2e0750d28a3a42e9e646d7d","url":"tw_stocks/1419.json"},{"revision":"e973eec7543a80f1a65ec9319a9af406","url":"tw_stocks/1418.json"},{"revision":"a4dc0e7bfe8ddb698eefa5420a7a269d","url":"tw_stocks/1417.json"},{"revision":"f5c7b4604670921c37951594851a2fec","url":"tw_stocks/1416.json"},{"revision":"0689e099739df919f14aa102b88a39e1","url":"tw_stocks/1414.json"},{"revision":"d93383ddd5a41ea437379992de0bd93c","url":"tw_stocks/1413.json"},{"revision":"f13ef1ee6b47c05508c38be9f50564d3","url":"tw_stocks/1410.json"},{"revision":"94b7c03de69e7c389721decd1f056f5f","url":"tw_stocks/1409.json"},{"revision":"62a2c2588f1bd878396b541707f3bb09","url":"tw_stocks/1402.json"},{"revision":"28187db6d455d95911551311bd9227f8","url":"tw_stocks/1342.json"},{"revision":"7c83925a205367601ba73b601bc8e769","url":"tw_stocks/1341.json"},{"revision":"d22b32f8a607fd5c51634a9c15dadae0","url":"tw_stocks/1340.json"},{"revision":"b03fceafad0199aef39d949e3725d698","url":"tw_stocks/1339.json"},{"revision":"7380f7e4a7d2dfc542ffdf30bd938a21","url":"tw_stocks/1338.json"},{"revision":"c103da845b3f2a16b0b087e186405106","url":"tw_stocks/1337.json"},{"revision":"a022f1fda2ee13f69e5c6d59b43ec8e7","url":"tw_stocks/1326.json"},{"revision":"e04e836df9b955f1119ca9b2c019a5aa","url":"tw_stocks/1325.json"},{"revision":"1ae9891aba010a45bb641817f954b1ef","url":"tw_stocks/1324.json"},{"revision":"0b75d0ab1a431713962244b098a9d0c8","url":"tw_stocks/1323.json"},{"revision":"79d2a8173dc47302abf93bc74167e4c6","url":"tw_stocks/1321.json"},{"revision":"f07469b573f48a4d213001fbb765c36c","url":"tw_stocks/1319.json"},{"revision":"0bec34f0548ec4eeb114e7da6a63e16b","url":"tw_stocks/1316.json"},{"revision":"b8018c1dbc579d7a47100e8e967b7338","url":"tw_stocks/1315.json"},{"revision":"ee553eec9944ff0d0dc8c114168c7016","url":"tw_stocks/1314.json"},{"revision":"f8b974893cae336660174fb95e65de9b","url":"tw_stocks/1313.json"},{"revision":"272685f31406ebd83836dc68b67bdd0e","url":"tw_stocks/1312.json"},{"revision":"d88576ef2ae568f4b3857e866e2f7e9b","url":"tw_stocks/1310.json"},{"revision":"b8da05aded8a6429c01792d328f60a15","url":"tw_stocks/1309.json"},{"revision":"ce8c97c45369c7beae64837d14aab2dc","url":"tw_stocks/1308.json"},{"revision":"5dde329f07f503158c85323c7549a016","url":"tw_stocks/1307.json"},{"revision":"5e1561257053f8f25e89fcbf5e4a320b","url":"tw_stocks/1305.json"},{"revision":"8aa0ce7b884a19b80e72a68fb31ce648","url":"tw_stocks/1304.json"},{"revision":"c87c2e1c7d109edfafdc4cf7e15d02a9","url":"tw_stocks/1303.json"},{"revision":"8b7ada71e3c2af14c680ae7e5e8eeb04","url":"tw_stocks/1301.json"},{"revision":"753b93c4bdc81e3c6ed7af5ff57e58b3","url":"tw_stocks/1256.json"},{"revision":"3ae2bccf320bf3bfe4a28d6dbc0016d0","url":"tw_stocks/1236.json"},{"revision":"481ab3b972002a3c95ed7cffe12ea0e6","url":"tw_stocks/1235.json"},{"revision":"1b53cd7dc67adcb8a25b18475fb11336","url":"tw_stocks/1234.json"},{"revision":"ab4b1dbea21823ad417ee4b121342eaf","url":"tw_stocks/1233.json"},{"revision":"17bac08e30bc9e23fbf57d54f499c0d2","url":"tw_stocks/1232.json"},{"revision":"8dac3ad6593d97a44944630337c00449","url":"tw_stocks/1231.json"},{"revision":"451f1438c2fcfb38b77150da41fb842f","url":"tw_stocks/1229.json"},{"revision":"106e5bdbbeedf79c65b4dd9ad2773494","url":"tw_stocks/1227.json"},{"revision":"edd1afdd18ec7b6f3e6ce843115532d6","url":"tw_stocks/1225.json"},{"revision":"8e7e3d7eccac1746e8a66b3100abbf94","url":"tw_stocks/1220.json"},{"revision":"da945e18a063cdf2a7d28d8b3855ab0a","url":"tw_stocks/1219.json"},{"revision":"134c04f0db2b96835b2454eae1c75a95","url":"tw_stocks/1218.json"},{"revision":"97e2fa326e968e9cd63784e9b24ba19a","url":"tw_stocks/1217.json"},{"revision":"ca51bfd1113f15b49618197e3b8a2db5","url":"tw_stocks/1216.json"},{"revision":"ba8f8b95c9a05c4a4f0cda9223f334b3","url":"tw_stocks/1215.json"},{"revision":"7370d0c8aa05c5dffb2f243da723c2fa","url":"tw_stocks/1213.json"},{"revision":"c5549aa5c78645086208feb5c6b89040","url":"tw_stocks/1210.json"},{"revision":"ef1eba179b1f366f6c1b4b73915cc1c3","url":"tw_stocks/1203.json"},{"revision":"731731e1c80685465d6abfadc5cee0d1","url":"tw_stocks/1201.json"},{"revision":"6705f4196a6bf22d18cd80eabf222856","url":"tw_stocks/1110.json"},{"revision":"054a1dd0ff50ba89a91f13d4cdd31aef","url":"tw_stocks/1109.json"},{"revision":"54973c8a0bdd1c8a0120c71b0b6d48f7","url":"tw_stocks/1108.json"},{"revision":"4cd7e8b690fb7044959a7a9cd4fc5ebd","url":"tw_stocks/1104.json"},{"revision":"e8a9e22dcc02a7760eb90f1b7acb244c","url":"tw_stocks/1103.json"},{"revision":"bdd0c0862eb624d3c4aad23bd719b079","url":"tw_stocks/1102.json"},{"revision":"8bfa538394682aee452d767c9b0c1aa4","url":"tw_stocks/1101.json"},{"revision":"e1aea6ab2c078964764d50dfd84567e1","url":"tw_stocks/00999A.json"},{"revision":"6a0c93114bf9bdf7000b218358e4678e","url":"tw_stocks/00997A.json"},{"revision":"880afffce3f39c81bbcdc2e7499183a4","url":"tw_stocks/00996A.json"},{"revision":"445c39a5cdf65a6d7619b12ff47711d8","url":"tw_stocks/00995A.json"},{"revision":"06f8b4864d3a36436715381347638db6","url":"tw_stocks/00994A.json"},{"revision":"60e1f42471b17705693ed05a296f7511","url":"tw_stocks/00993A.json"},{"revision":"91666bd75695b32754ef584d777a8f45","url":"tw_stocks/00992A.json"},{"revision":"0c6a67ee1df2c2ccaad9e510b2056b35","url":"tw_stocks/00991A.json"},{"revision":"8b4043328cf0e4bf5c157208f1e96060","url":"tw_stocks/00990A.json"},{"revision":"984bd4ffa814f0d2b4a790eab927ddbe","url":"tw_stocks/00989A.json"},{"revision":"2d4d5d9e9cbb7e25f0fce09faf2db384","url":"tw_stocks/00988A.json"},{"revision":"c17d5c411284bf714fd78c824abc61e3","url":"tw_stocks/00987A.json"},{"revision":"0b0e2ede77466a9e1a499377647ddcf9","url":"tw_stocks/00986A.json"},{"revision":"42a1f00afa6ff5f706d49e8685469868","url":"tw_stocks/00985B.json"},{"revision":"350846a9b0a129fda38bfc676853f6f6","url":"tw_stocks/00985A.json"},{"revision":"62589622268e812bd65da81f78ad33f3","url":"tw_stocks/00984D.json"},{"revision":"685993cfb52818996e2fc3a65b4dd345","url":"tw_stocks/00984A.json"},{"revision":"0948753278b29de82378b8df5d875ed0","url":"tw_stocks/00983D.json"},{"revision":"7983392fe84039cb4b8dc3b4a16a4156","url":"tw_stocks/00983A.json"},{"revision":"d285ff9d5fb81ba9a9736c364fcbb459","url":"tw_stocks/00982T.json"},{"revision":"c6cb5d4f1e9f418584632ed57cc63ad2","url":"tw_stocks/00982D.json"},{"revision":"2bfcd98abd8dedd6020d0fbf26c189a2","url":"tw_stocks/00982A.json"},{"revision":"e2d8f53cce3d00c019e989b3e40cb2c0","url":"tw_stocks/009820.json"},{"revision":"05d64433050ed9d6f21f710482ecd11d","url":"tw_stocks/00981T.json"},{"revision":"af4284dcd6b0b7fd21c5fd63f7f94a1e","url":"tw_stocks/00981A.json"},{"revision":"38088327b353dd9675c64d298a9ae7b0","url":"tw_stocks/009819.json"},{"revision":"2bcca7c2029f5b9360eba7037a1d1201","url":"tw_stocks/009818.json"},{"revision":"9ac6a428f35ac6fe16cfffb8693d5a15","url":"tw_stocks/009817.json"},{"revision":"f2f8d225547cc453a5ba458c37aebde1","url":"tw_stocks/009816.json"},{"revision":"46c3146f927e2f13489a3583dbd0ad65","url":"tw_stocks/009813.json"},{"revision":"ecc3b51f540f8e7a4557687065b018f5","url":"tw_stocks/009812.json"},{"revision":"303c4c8ff344b80371c850a710924092","url":"tw_stocks/009811.json"},{"revision":"1c1cb9ad7c859190928d0a137556f269","url":"tw_stocks/009810.json"},{"revision":"d010fec58b5a2393d4b708205a6bb439","url":"tw_stocks/00980A.json"},{"revision":"e6a5c75bed4ba2c1d57aa09b1d0a4070","url":"tw_stocks/009809.json"},{"revision":"d64dc309a7734cf031e5aba76eb3593c","url":"tw_stocks/009808.json"},{"revision":"ff3f2c98e01fba338b8aa2dd84aefc35","url":"tw_stocks/009805.json"},{"revision":"afc1b4bb60ab47e6c650ff458dc43eba","url":"tw_stocks/009804.json"},{"revision":"6ed77a586a4908f413279676b98b5873","url":"tw_stocks/009803.json"},{"revision":"bee8e7c3128955021b704e89662fdec5","url":"tw_stocks/009802.json"},{"revision":"8153c34b9511d2a48f76af75db84c042","url":"tw_stocks/009801.json"},{"revision":"8c0f7b52c880e41db893e0e5bcbeaec5","url":"tw_stocks/009800.json"},{"revision":"477554320e64d07d81531274f9649ae3","url":"tw_stocks/00972.json"},{"revision":"38315c88094fce3df38424e1ba6d59fe","url":"tw_stocks/00971.json"},{"revision":"a9980eaafc87ba253ae4a424f4c6bc61","url":"tw_stocks/00965.json"},{"revision":"5d5c2b5c2efe268b399e400f9e3e0187","url":"tw_stocks/00964.json"},{"revision":"fc61cbe58f4c77406402f038a31ca550","url":"tw_stocks/00963.json"},{"revision":"385d69e91e280cede41b251fcaa80caf","url":"tw_stocks/00962.json"},{"revision":"8dca424431f18d210c0ce1963cf12dd5","url":"tw_stocks/00961.json"},{"revision":"3cec6c4dc9ead8bef02dfb70ed735500","url":"tw_stocks/00960.json"},{"revision":"c75c68f7e4d8a072b2e16d354c176b3e","url":"tw_stocks/00956.json"},{"revision":"cb6ab4a661617cd1d22fbd885dfd3de5","url":"tw_stocks/00954.json"},{"revision":"7ce7b3a397e6ef1ce9eeaa5d4b75513c","url":"tw_stocks/00953B.json"},{"revision":"2ef8fea6c69d93f8eb77319084baf639","url":"tw_stocks/00952.json"},{"revision":"a9c14439096e78a3bffd015a0189d15e","url":"tw_stocks/00951.json"},{"revision":"c4df3e4abc27c42abbfe2ea804b30905","url":"tw_stocks/00949.json"},{"revision":"bda59a2230ea3319abced92221b552e3","url":"tw_stocks/00947.json"},{"revision":"a9d25026eee981c2ec3516226c8bb3cf","url":"tw_stocks/00946.json"},{"revision":"f1ea3150129fe0c4e9f33a4706b8c46e","url":"tw_stocks/00945B.json"},{"revision":"89be5a1c31eedaf04d91986946dc468d","url":"tw_stocks/00944.json"},{"revision":"02bb0e5f89e10bf3e52a4192e3cfee45","url":"tw_stocks/00943.json"},{"revision":"3a9c05ae53ceaaef3618b11777b884f5","url":"tw_stocks/00941.json"},{"revision":"15e2150ecfe1149a4a68ebbbadae4e2d","url":"tw_stocks/00940.json"},{"revision":"5617bbefd08b4a76b2b703443062ff39","url":"tw_stocks/00939.json"},{"revision":"87953c47d22f412ba42cea797224fc15","url":"tw_stocks/00938.json"},{"revision":"16a152e747f972c253c444312bff0a08","url":"tw_stocks/00936.json"},{"revision":"8b4ae6cbfd036aa130a14de8abfee724","url":"tw_stocks/00935.json"},{"revision":"bf117df001c329a5b3a5a2eca0924bd0","url":"tw_stocks/00934.json"},{"revision":"2518718b3e619eb0908323314f524c9f","url":"tw_stocks/00932.json"},{"revision":"3b9e4086d515bb85e3116be766d28d74","url":"tw_stocks/00930.json"},{"revision":"e60be5f11a42bb4e577cacf46e8f0390","url":"tw_stocks/00929.json"},{"revision":"4896e1c207f41a3047ffeba130ec7c2b","url":"tw_stocks/00927.json"},{"revision":"e0c5acaeb62dfc3bd1b1b0917aa4d9a0","url":"tw_stocks/00926.json"},{"revision":"43c685bacd4bfe3a871a2fc947be91ab","url":"tw_stocks/00924.json"},{"revision":"0aac4916a53685258a9a3cc94bb0bca1","url":"tw_stocks/00923.json"},{"revision":"0c34fcf1865617fb592c85d121a63ba1","url":"tw_stocks/00922.json"},{"revision":"15dddcbe3a128dad18f069412aaa0c72","url":"tw_stocks/00921.json"},{"revision":"2f101a7afec6d7c16201727fede5ccec","url":"tw_stocks/00920.json"},{"revision":"37d33887b0f372e3d47abde7b485a6df","url":"tw_stocks/00919.json"},{"revision":"834a7b8be3d8193ddc60e08a8aafe406","url":"tw_stocks/00918.json"},{"revision":"02a63d008e96741bcd853d7865185ca7","url":"tw_stocks/00917.json"},{"revision":"75a32e1c70550c1763770aa83a3e6b1f","url":"tw_stocks/00916.json"},{"revision":"26b415dd846c1ddc7de8503de43e1783","url":"tw_stocks/00915.json"},{"revision":"7e2e3a0068388bc584430706916611dd","url":"tw_stocks/00913.json"},{"revision":"ba5861ddd145c872ee3c687b653e4367","url":"tw_stocks/00912.json"},{"revision":"b5c0e6d498166a00178b77d0e881de5c","url":"tw_stocks/00911.json"},{"revision":"40851576dc640f750ac0114914f1c0cf","url":"tw_stocks/00910.json"},{"revision":"b20ad4d37554465a0bff1c6a8e6a76b0","url":"tw_stocks/00909.json"},{"revision":"110ac2b57e91ef80201a728ad77fcb7d","url":"tw_stocks/00908.json"},{"revision":"8157db08e51bfb4162d46d0ccbec1b99","url":"tw_stocks/00907.json"},{"revision":"a6aaa6944e3c7acd24311c36b90e1eb5","url":"tw_stocks/00905.json"},{"revision":"17e926089314df99ca2cde41cd919c31","url":"tw_stocks/00904.json"},{"revision":"6c49a786d66b1195506f3c68634c3cb9","url":"tw_stocks/00903.json"},{"revision":"0169f9ae6ff773396d42a7304a2765b1","url":"tw_stocks/00902.json"},{"revision":"2f0fcf0926ee0b6f82a93b2d714641ba","url":"tw_stocks/00901.json"},{"revision":"d29fd22b3290142fc644e2b7b10d060d","url":"tw_stocks/00900.json"},{"revision":"d5656d3cac70f1693f01a4c04e263989","url":"tw_stocks/00899.json"},{"revision":"4bd8e1d446bc3956fb92947dc236815f","url":"tw_stocks/00898.json"},{"revision":"5edf7c39c1f2f9290d66603e266c2105","url":"tw_stocks/00897.json"},{"revision":"7f05eec37fb4e7e021f80d48b3460f27","url":"tw_stocks/00896.json"},{"revision":"1826a3e926b0fcdb247a461fb8869869","url":"tw_stocks/00895.json"},{"revision":"35e8d33f0716b8156a5a11ea7672f909","url":"tw_stocks/00894.json"},{"revision":"c0be7e8510707311ecd2b50e09d96e3e","url":"tw_stocks/00893.json"},{"revision":"596c878d18a8166e89f8bc8d9df70e4e","url":"tw_stocks/00892.json"},{"revision":"7720e41f1b4be914396bf0f303b929d0","url":"tw_stocks/00891.json"},{"revision":"0c279fb57651a9184cb201eaaa23a320","url":"tw_stocks/00885.json"},{"revision":"3536aa44f4a37d4d00c51b8be3fc62da","url":"tw_stocks/00882.json"},{"revision":"4336b2343c956ace576350d90ae6ac84","url":"tw_stocks/00881.json"},{"revision":"7e69345a5c17a297c1b5e7c211538d9b","url":"tw_stocks/00878.json"},{"revision":"40dccd87c55a41f9ecc517402300369e","url":"tw_stocks/00876.json"},{"revision":"aa9004ecf8f4ddf5c2f1e02882116750","url":"tw_stocks/00875.json"},{"revision":"0e7561fde94d2fe598cdb922cdc9b1b5","url":"tw_stocks/00865B.json"},{"revision":"1a0db267cf0a07ca5ba9382a3dd91a1f","url":"tw_stocks/00861.json"},{"revision":"725ed8901d6f868829174b0d21b869ad","url":"tw_stocks/00852L.json"},{"revision":"e574e9d02fb8386a8c44e215d12022cc","url":"tw_stocks/00851.json"},{"revision":"093f17441ddb03a1beaf5e480bcd427a","url":"tw_stocks/00850.json"},{"revision":"4c516d26499f788e56fa4d0f43864f47","url":"tw_stocks/00830.json"},{"revision":"5a9533266a71502cefe160bf304b8672","url":"tw_stocks/00783.json"},{"revision":"dbc84a4898ce0ee8cc8b648d79a6c617","url":"tw_stocks/00775B.json"},{"revision":"011e16d942da7de39b6c01bf6da44669","url":"tw_stocks/00771.json"},{"revision":"e87d3be746aacdebdd752532535cb64d","url":"tw_stocks/00770.json"},{"revision":"44ebeb5f41d8c8f5378ef7452abbb99f","url":"tw_stocks/00763U.json"},{"revision":"41b2f4fb576e3b8cf88d10e13f3b710c","url":"tw_stocks/00762.json"},{"revision":"49714774b69918a1d259943bb239c82e","url":"tw_stocks/00757.json"},{"revision":"0748f663e081810919ff764b2335e32c","url":"tw_stocks/00753L.json"},{"revision":"e40b21372f101a3ac46c719ec94fdf16","url":"tw_stocks/00752.json"},{"revision":"80f238456be6d02235342976d866f2ae","url":"tw_stocks/00739.json"},{"revision":"98340aed8163ff61ecdc429bd43e0516","url":"tw_stocks/00738U.json"},{"revision":"d45a84247a3f4bc921d72c78bf3b5483","url":"tw_stocks/00737.json"},{"revision":"33183b9118722f5af070a1ab361263a5","url":"tw_stocks/00736.json"},{"revision":"530c3819a1c370f2166c5498037a1106","url":"tw_stocks/00735.json"},{"revision":"ca4d3d5a08d1cf745f301ab21456de62","url":"tw_stocks/00733.json"},{"revision":"96c6f4a407e3ce8e906ae94bc56b22c6","url":"tw_stocks/00731.json"},{"revision":"aab9e816b67b340fba65cb318a374fc0","url":"tw_stocks/00730.json"},{"revision":"ffe26871d64096c44f586b0f5c682d43","url":"tw_stocks/00728.json"},{"revision":"af782e3a2c0b34a49170a489476ba2cc","url":"tw_stocks/00717.json"},{"revision":"9699983e6268683d845df66c2b01c09b","url":"tw_stocks/00715L.json"},{"revision":"2e253f8ab4b613c1a107e5655c70712c","url":"tw_stocks/00714.json"},{"revision":"fd909e3ec1eb0ec96ca4d200fa518c95","url":"tw_stocks/00713.json"},{"revision":"164ee57208587fd772d223d97ffb1910","url":"tw_stocks/00712.json"},{"revision":"52e484b5c9ed89f9329df801e52f49f3","url":"tw_stocks/00711B.json"},{"revision":"a5a68a08f5c5da2af87cbcb556c0a8a5","url":"tw_stocks/00710B.json"},{"revision":"7fe569f343f4ea1c053338a48f25c7ba","url":"tw_stocks/00709.json"},{"revision":"6a531372437d08ff34e8b2d407540656","url":"tw_stocks/00708L.json"},{"revision":"a14812beb7164d37c4212a6ec9b5bed7","url":"tw_stocks/00707R.json"},{"revision":"03d445417de7359cc3be8cca1b091056","url":"tw_stocks/00706L.json"},{"revision":"2b701dcdba5fecb2d5bb5e137e84b6d3","url":"tw_stocks/00703.json"},{"revision":"84f7275a0678f7251ee97f0414246902","url":"tw_stocks/00702.json"},{"revision":"c85328a78f59110fdc1f4cd36d6c228e","url":"tw_stocks/00701.json"},{"revision":"ec73e0f0b3b0b282dbc4a646c2a99e3b","url":"tw_stocks/00700.json"},{"revision":"87eb1a636b9f0a2cf878bf5fcae7c9fa","url":"tw_stocks/00693U.json"},{"revision":"bcd0732a766b0876e7433ace16f4621d","url":"tw_stocks/00692.json"},{"revision":"fa9a1c3a5dcfb3511c3c774dc093afa0","url":"tw_stocks/00690.json"},{"revision":"2b4783ed684b080c9d8201cb30d9e981","url":"tw_stocks/00689R.json"},{"revision":"a77b5149ae37705f3700f4e80130c9e1","url":"tw_stocks/00688L.json"},{"revision":"2d0a4cd5f7c4aa994f7679c73ca83e97","url":"tw_stocks/00686R.json"},{"revision":"7ddb252ff1521165d694b505afe2c7c7","url":"tw_stocks/00685L.json"},{"revision":"977c831ca60ff98b82008583830c1404","url":"tw_stocks/00684R.json"},{"revision":"cc30902e283dadfbdad34884257fac29","url":"tw_stocks/00683L.json"},{"revision":"8d8ce1748f986ad8864e0bce470dc125","url":"tw_stocks/00682U.json"},{"revision":"2c38572219409940008c9eece1b605b2","url":"tw_stocks/00681R.json"},{"revision":"71e7c7f34fb7becf3f79645cdfd0fa54","url":"tw_stocks/00680L.json"},{"revision":"b64476ddb08d70b3d8795a0019421bc3","url":"tw_stocks/00678.json"},{"revision":"9c794d43e8c5efa2750c8ccbb78a87cc","url":"tw_stocks/00676R.json"},{"revision":"d65265f7754ac217550191da7e79258f","url":"tw_stocks/00675L.json"},{"revision":"d82864a9b7112b184de855843d68c489","url":"tw_stocks/00674R.json"},{"revision":"f2d1c4e2524e7e1eead2732aa2229f48","url":"tw_stocks/00673R.json"},{"revision":"213b1b467b462721e8ce4e4eee7434a4","url":"tw_stocks/00671R.json"},{"revision":"83cbd641381a1ecc9295d8432ae71fe1","url":"tw_stocks/00670L.json"},{"revision":"ae385a97e8bc0df91732aa9287a30a83","url":"tw_stocks/00669R.json"},{"revision":"7cd9819e44e8b9a342302a282eb2bab2","url":"tw_stocks/00668K.json"},{"revision":"ec9afd077c11a650440bf90c109e14fa","url":"tw_stocks/00668.json"},{"revision":"c6e145bfb42935ae444d2079c9c5307a","url":"tw_stocks/00666R.json"},{"revision":"959383d31690b3d0f01755feecbfff9b","url":"tw_stocks/00665L.json"},{"revision":"2769a97b1157eb5a3e529a5b4f883416","url":"tw_stocks/00664R.json"},{"revision":"8da3fe7a63e6f56a167d9ef8f62671bc","url":"tw_stocks/00663L.json"},{"revision":"f620468ce7c714b676294cfb5b532796","url":"tw_stocks/00662.json"},{"revision":"cc54a3ab906547fb74086464b7f5dda7","url":"tw_stocks/00661.json"},{"revision":"69d9de26564a2794784e7b1e67bde9fc","url":"tw_stocks/00660.json"},{"revision":"75cc1db8fabd92abebb9ac6804707085","url":"tw_stocks/00657K.json"},{"revision":"9eefc8c0690dd12ab9c5fc88059a18a5","url":"tw_stocks/00657.json"},{"revision":"f077f5ca1b54f1fe0b6067fc046e7cce","url":"tw_stocks/00656R.json"},{"revision":"6c6b534ee3f4c9346bf373e266c3a304","url":"tw_stocks/00655L.json"},{"revision":"9c1f5f8edee6f372a54e81b159c8cf1c","url":"tw_stocks/00654R.json"},{"revision":"fc4e9ba5486754fbb80126559e1ab0a4","url":"tw_stocks/00653L.json"},{"revision":"d8482b80f2654add63ee4d6550fc878b","url":"tw_stocks/00652.json"},{"revision":"7e4105b8d85ff9c8134313277a61ce95","url":"tw_stocks/00651R.json"},{"revision":"7c1ab6b04831608dd656de910acf8664","url":"tw_stocks/00650L.json"},{"revision":"b65615792a4d6f8df1b69876050c09f8","url":"tw_stocks/00648R.json"},{"revision":"4b04c1a33636da6f6c88dbc7c1607a37","url":"tw_stocks/00647L.json"},{"revision":"f2b108675134e9ba02f8eef08a5bb127","url":"tw_stocks/00646.json"},{"revision":"7e437a2bf39a00be1a8b8073b285ee12","url":"tw_stocks/00645.json"},{"revision":"1ac7f4f4b5c31b506e2d0b9942021080","url":"tw_stocks/00643K.json"},{"revision":"cb25979c019b7101293d5a5370840c16","url":"tw_stocks/00643.json"},{"revision":"7609ef31a9d96eb875d355dce716c581","url":"tw_stocks/00642U.json"},{"revision":"82f194fe3e0a0c7a7b151171c6243c9e","url":"tw_stocks/00641R.json"},{"revision":"c96924d498cef857eda8968a70e3265c","url":"tw_stocks/00640L.json"},{"revision":"049298f974e02a6f97553b4dd8bc827f","url":"tw_stocks/00639.json"},{"revision":"4396f4ea2a5dfb73317627f175e03e45","url":"tw_stocks/00638R.json"},{"revision":"8d6b19cf943e53a6f6a68bd2dd13714c","url":"tw_stocks/00637L.json"},{"revision":"f770599393d7adbfc108305b266f7281","url":"tw_stocks/00636K.json"},{"revision":"56615a6fb86bd480f436b3a7318f62ca","url":"tw_stocks/00636.json"},{"revision":"5b0dc4a5b1b95e40d5b2bc58a03e8fcb","url":"tw_stocks/00635U.json"},{"revision":"2ff44399eb6c1d683245408a4e1c803f","url":"tw_stocks/00634R.json"},{"revision":"7193a3480c701a9df156f51f4681bd6b","url":"tw_stocks/00633L.json"},{"revision":"49e6384a7cc16878a6f45b4ff1502a95","url":"tw_stocks/00632R.json"},{"revision":"ea0ec076e38212fa62d785e324f0ebdd","url":"tw_stocks/00631L.json"},{"revision":"985e2073a356c265c54627c403cfc055","url":"tw_stocks/00625K.json"},{"revision":"fb9c715916dd3a67946f0e5c638fb637","url":"tw_stocks/006208.json"},{"revision":"380966673fadda09a6dba63feba711c8","url":"tw_stocks/006207.json"},{"revision":"7da5ae9e4bb2c264f0e260f603c2475c","url":"tw_stocks/006206.json"},{"revision":"f0b0d7a26898dc3e364649f928618087","url":"tw_stocks/006205.json"},{"revision":"5d0ea6b1837d82c581b08cce7aa82dd8","url":"tw_stocks/006204.json"},{"revision":"e4a40a8f9cf15c76aafec840dec14fae","url":"tw_stocks/006203.json"},{"revision":"148648126ff1e06eea148b7f22917d3c","url":"tw_stocks/0061.json"},{"revision":"5dce2beb9dc33caad66b4fa640d054b1","url":"tw_stocks/0057.json"},{"revision":"33e3c5c45d1fa4d6aaab35e07852235f","url":"tw_stocks/0056.json"},{"revision":"1d79245e1b309f0ccb3308b7edba402b","url":"tw_stocks/0055.json"},{"revision":"fcd5ca582b74b1dd1c58ab353e19124f","url":"tw_stocks/0053.json"},{"revision":"c2ca96813f9b4ff9ac9a44108439db5b","url":"tw_stocks/0052.json"},{"revision":"8773cc40f9ddf7c96d2599631d215d64","url":"tw_stocks/0051.json"},{"revision":"a17dd368de805771fafaf65042f7dcda","url":"tw_stocks/0050.json"},{"revision":"752739e3a1ebef7af833607dbbfe5d81","url":"tw_stocks/00403A.json"},{"revision":"f70fdd51090a8b3040e2c4f5780c0ea9","url":"tw_stocks/00401A.json"},{"revision":"2755b43bdc0a4d138acd53d88a4acb12","url":"tw_stocks/00400A.json"},{"revision":"626c4b14b724327e7edac099190699db","url":"subscription/callback.html"},{"revision":"06c082cffb84472fd7ac033d9fdbfc0d","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"83ad43211fec43624bda0bbe4f05db9d","url":"financial/rebalance.html"},{"revision":"b28631588707ccc9afa5e344cb6edb52","url":"financial/cashflow.html"},{"revision":"6d711b6e1da6323d6ee3dade0b506137","url":"financial/balance-sheet.html"},{"revision":"76f896124c158fc3b637e160157c6610","url":"finance/tags.html"},{"revision":"ab442f38803ee53444a6dc4bda40c2c4","url":"finance/finance-section-created.html"},{"revision":"5f85ed72a3bc2cbc8e1b5f7f5fed8de6","url":"finance/finance-2026-04-30.html"},{"revision":"da7f0a9a51adb6144d7fb6ba7fce43fe","url":"finance/finance-2026-04-29.html"},{"revision":"99b6bfa16f49fabc2160019ad4a28249","url":"finance/finance-2026-04-28.html"},{"revision":"26cc407eb0d0519b5490a1810f326a52","url":"finance/finance-2026-04-27.html"},{"revision":"fc5b637d70a541a080b6fe413577169b","url":"finance/finance-2026-04-24.html"},{"revision":"0bbd811c43dcf1acfb07321cc81b06fa","url":"finance/finance-2026-04-23.html"},{"revision":"0c1973ac2063fc17750f25154e8eaa60","url":"finance/finance-2026-04-22.html"},{"revision":"873303a77d0581bdf6ce6c77b4273803","url":"finance/finance-2026-04-21.html"},{"revision":"b3d2455ea73622bae783f6a8632040e4","url":"finance/finance-2026-04-20.html"},{"revision":"923e95103812ac6722050c7f8e81b702","url":"finance/finance-2026-04-17.html"},{"revision":"0da8df1a00d07e179ed5a359ae1f5fbb","url":"finance/finance-2026-04-16.html"},{"revision":"13ad4f45700f8d476953f22738cb700c","url":"finance/authors.html"},{"revision":"46d740865f5934ff6798b48286d0a074","url":"finance/archive.html"},{"revision":"54f4c159c7f48789e3fbf37043b932ad","url":"finance/tags/finance.html"},{"revision":"93c40e1db1e328b44233ec36bb542a79","url":"finance/tags/daily-report.html"},{"revision":"469eb9ae9f09ccc3b1959e95a02c7a74","url":"finance/tags/announcement.html"},{"revision":"900b966f819c7951ed5610405bcc1a53","url":"finance/tags/finance/page/2.html"},{"revision":"529bdf6c4391c3fd0fa83cf64bbf1016","url":"finance/tags/daily-report/page/2.html"},{"revision":"9ad43cc082da8508e221519bf955cf92","url":"finance/page/2.html"},{"revision":"ff4ed761701a13da4cddc9fc5a384735","url":"docs/tags.html"},{"revision":"c3925ed69b4f3b86ee19be6cef5f185c","url":"docs/intro.html"},{"revision":"c98baa4c105eda67eab993f26101fb91","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"0cfc606ed53ac0f3a3d10ec5b5a8faae","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"a3e6446c821b10a78c7dd134ea3bf2da","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"d9709a0485dbfffc670575c8db428922","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"43bf526c648fe49c59dd0907139aff7c","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"dc06b6266da1fa346607e79441e5fdde","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"9a66e214a731216e6ca4ca4fb8710367","url":"docs/tags/黑箱協議.html"},{"revision":"9b5332c4af4c951f8a5fe76564a5e88d","url":"docs/tags/養成.html"},{"revision":"868cb4a9815b9e7929a6669126a4bc61","url":"docs/tags/資料安全.html"},{"revision":"c973caefbc461021da4776d11620f19d","url":"docs/tags/經濟循環.html"},{"revision":"e182a637df37977f9eff183a6f55f8dc","url":"docs/tags/百科.html"},{"revision":"d0eb88a560989ebb79a33d0b2b34da97","url":"docs/tags/模型控制.html"},{"revision":"f2c24155e3ac8c5dae29aaa794f1d2f0","url":"docs/tags/數據標準.html"},{"revision":"bf1ceaa40182098dcd54f55754d749b6","url":"docs/tags/接入規範.html"},{"revision":"f7408a320fe592c9afc20ee4972d7abb","url":"docs/tags/指南.html"},{"revision":"ad163b26183f7417abc8925205308437","url":"docs/tags/技術哲學.html"},{"revision":"e2636c8fa2df62ec0a5b9f119750dba6","url":"docs/tags/技術史.html"},{"revision":"8df443dd6843598f54e5279ffa83ada4","url":"docs/tags/戰鬥系統.html"},{"revision":"46d998f0dcce7c839167271519d5ecf7","url":"docs/tags/專案管理.html"},{"revision":"ddd43360528d14cc79ad0c9aa7cf7639","url":"docs/tags/安全架構.html"},{"revision":"72c14bcdd285636c95503c25dafd3116","url":"docs/tags/安全協定.html"},{"revision":"1c4e5ff0a31606be9a7faaae27772856","url":"docs/tags/外部開發者.html"},{"revision":"2ba614917aada8819e8f7d4f28a101bd","url":"docs/tags/商店.html"},{"revision":"a868c0728cea4d6c5216767e42ee097a","url":"docs/tags/去中心化標準.html"},{"revision":"e333e1633f47d48a6297dc075a1d5523","url":"docs/tags/去中心化安全.html"},{"revision":"c1126088365eff2fac7e7863119e80de","url":"docs/tags/去中心化.html"},{"revision":"6116e37583d28c73dda5637dbee30bea","url":"docs/tags/top-p.html"},{"revision":"579bc3db37a9310174533a15754e6f4e","url":"docs/tags/tokenizer.html"},{"revision":"fed7d2821eeb6b86b0d02330505d0a6e","url":"docs/tags/temperature.html"},{"revision":"fc0546083b037629eb63073b2e389141","url":"docs/tags/technical-docs.html"},{"revision":"0f22b83b5b78e179f703c7f021f064e3","url":"docs/tags/nlp.html"},{"revision":"b295ed2c9857dae50f5d2657a1a83418","url":"docs/tags/llm.html"},{"revision":"62e75138183b81ad5954557259973196","url":"docs/tags/git-hub-copilot.html"},{"revision":"5ce23894f5270fcb5c4cb2aa39b04044","url":"docs/tags/generative-ai.html"},{"revision":"81ecb66423d61a11bc35faef54e3b0ab","url":"docs/tags/eip.html"},{"revision":"848d38d4d0110c1503632b2393fd617d","url":"docs/tags/development-tools.html"},{"revision":"bbd5d53d1ca62a987c62c3d4a0a3d31f","url":"docs/tags/cli.html"},{"revision":"1d6c8cb3c0c6c055f5400da713bd30df","url":"docs/tags/claude-code.html"},{"revision":"b75b43ad537f37888148854b7d9bfdcd","url":"docs/tags/bpe.html"},{"revision":"c7d13159d324e6621433914cab18736a","url":"docs/tags/automation.html"},{"revision":"f30f55eccf212142c6389d43c8751fb7","url":"docs/tags/ai.html"},{"revision":"593bbdb58bbd14463b68c6d951c67cbc","url":"docs/tags/agent.html"},{"revision":"d0d41a30385632d3f1c15be4fffcbb13","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"8941c22afb879ac643639b429519c2e3","url":"docs/skill/gemini-skills.html"},{"revision":"c9b280ed423df09a03e162dd62ce6c00","url":"docs/skill/container-builder-skill.html"},{"revision":"10460b20b83618f74c8923a4f4a32d04","url":"docs/skill/claude-code-skills.html"},{"revision":"e4f2bbd124534151373e8df638866c7a","url":"docs/python-workshop/python-init-file.html"},{"revision":"84d25f83c0331723954d8c8fd7c1ed2c","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"19e46fe65fc67e02637e0c011c2cf2dd","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"e3cc50e243d95090cd0dae3126353301","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"f7b60653dbdd95884adf27567a4723b9","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"5948a08d9e6fb90bc4d45ab2f3d210c5","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"81855706d73b5e295128eb6ca3c093cf","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"38873865cb8abde78704fc5504b9899c","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"cf693723c73ffde6b851e2dd7c0e9236","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"bbc896672a7f598cfb6b18fd543a8e5f","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"79a07e89e9384a5b2f2bff35e46641fe","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"79abd313c6b591e80f31d49d7ede76e5","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"ff70dad7dc12f10e383408aa61ad3349","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"974f494c2ae205d4adfe80f253504c66","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"d934796f62019462b099b96941211722","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"fac681ab0240fb40aa7e95980d5ce096","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"68fb582325ece2aee36995f55c82d209","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"1b6345f3459ce74f330eafe6e8228d80","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"0df8f51629729a56926b870b972a2036","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"5456d54b89ebfc78724fcf68e39e7285","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"a7830fc11f0825959722ed178b77bb66","url":"docs/claude-code-series/skills.html"},{"revision":"a635cd1406dff38e0c261a870d7a91d1","url":"docs/claude-code-series/monitoring.html"},{"revision":"29edd767b7d187cc2f82cf46476c8f36","url":"docs/claude-code-series/getting-started.html"},{"revision":"623229b7f265cc5d58cba94026fde135","url":"docs/category/遊戲規則與手冊.html"},{"revision":"70f5d0bfc32b54da013a2e9b7c3d9427","url":"docs/category/發文-skill.html"},{"revision":"970851c9c44e3cb180c7f421966b128f","url":"docs/category/戰情室元件-skill.html"},{"revision":"9b70bb3e28d00b0a47239c4667b5dcee","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"a1fc20a2f7f6f734116dc604ad31739a","url":"docs/category/skill.html"},{"revision":"587140c01048f7814d1b59b80c8b1f92","url":"docs/category/python-workshop.html"},{"revision":"93ed75db730f7bd1bb4df368a444f289","url":"docs/category/egg-pet-philosophy.html"},{"revision":"5503837650052df99e874091950483db","url":"docs/category/claude-code.html"},{"revision":"66c4edb25842c546fee594d8a1f8238f","url":"docs/blog-skill/news-rules.html"},{"revision":"b17187c47380b74cda092381783e06be","url":"docs/blog-skill/history-rules.html"},{"revision":"f9188dfb7e0c41735824d3761703aeee","url":"docs/blog-skill/finance-rules.html"},{"revision":"659487795f067159c0ddf17de690ad84","url":"auth/callback.html"},{"revision":"0e101978d2f9875d55b8b59c53f03310","url":"assets/js/runtime~main.fcb7331f.js"},{"revision":"c6e62fa753ac3e79461ac930fd10c57f","url":"assets/js/main.b2221d0f.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"330ec37edcb45fb97791c6f4614d1a4e","url":"assets/js/ef86e77f.353e0e88.js"},{"revision":"2783d1598119d406bd403afb4399cb70","url":"assets/js/ed4d73f8.e30c4ee8.js"},{"revision":"03e46348176072a5b91b878d3ddb9e99","url":"assets/js/ec1e3285.a4b93925.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"0a60dbd9baf560d9f9892a5b7f1b3e53","url":"assets/js/e88c4a9c.ef2146e9.js"},{"revision":"30626e0765c9a8c18d7305db8febfb03","url":"assets/js/e86a5a75.26d34591.js"},{"revision":"6662b121060f1670030611bc6d6722d6","url":"assets/js/e7f07728.4d532375.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"be55c6e5a7028a8073a57c307d392a75","url":"assets/js/dfea6eb9.a5e86cff.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"7d42d80f42c82c74a08b7ebcabda85c5","url":"assets/js/dd5b562f.70bdb2e7.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"f341730b90b0c24c26c629e0bb953348","url":"assets/js/d90f4af5.9621681e.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"3c1f1618a35247aed23650fcc5ab31eb","url":"assets/js/d1fa896a.cff43e30.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"f887a3c6553cb6d21281b3995760ce87","url":"assets/js/cc221b30.d65273a0.js"},{"revision":"a887a2a47ebc4ea066416d1c22d5a87d","url":"assets/js/c9add68e.97a29307.js"},{"revision":"b47ba2d5f791364b83adfddfe3c10a2d","url":"assets/js/c7f3abc7.d1d87616.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"120a0c71b97c1063ab86c7f516806126","url":"assets/js/c2f9bb6a.668b6e2f.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"9a52c5056534d964b5cbfd686bda9c66","url":"assets/js/c0879439.97e73e32.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"67e476f153b234f57e3fd79002ffa12b","url":"assets/js/b95eaafa.399ea280.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"553f3a17e92927c9cd6cb886619fe1d8","url":"assets/js/b714ff87.08360a4d.js"},{"revision":"1341f81a2db12df4aaa902534e3d1328","url":"assets/js/b283ca86.100e153b.js"},{"revision":"34becd5085fe5aae3b139b1aa1724f29","url":"assets/js/b2814407.23a993d6.js"},{"revision":"595725355a796b04e6d12ba728d51bf5","url":"assets/js/afdbc12b.adfb4e8f.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"18eaee4350ff33b0ee27574d27268631","url":"assets/js/ac590df8.33dbf100.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"efa074512b62092cb264155809182a06","url":"assets/js/a89e3451.d869519d.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"b267b373467212ffd6cebd4fe1c2de56","url":"assets/js/a71ba949.f7e391f5.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"82b5e56d2868b867b57747291bacf809","url":"assets/js/a6038fd8.faaa6edf.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"04469611a844c588bd0c9515257051ef","url":"assets/js/9adafc71.e7980fdf.js"},{"revision":"ea8ca749c5e87f1bdd07db5492200f17","url":"assets/js/99d3b34a.2916f68c.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"f14559cbd3d3f8cbbe065c44d9031f03","url":"assets/js/98831978.41029e0c.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"629430061c4518c5423a3863459479b3","url":"assets/js/92adc83b.6e86f99b.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"582adeabdd682811c7ed170b0ce71c20","url":"assets/js/923ed0b3.1a04365d.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"0f0f1306851f462d4a263f288773f15f","url":"assets/js/8c20996d.98feed38.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"d69c2b787aed8bcbe633b3fa9c55ce70","url":"assets/js/853ca2df.d907d5c4.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"e32e3de018d5d71bec74850a3e6e1ec6","url":"assets/js/826b5919.66678e0c.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"e9ad5a9bd12898119a29bfbeff03b541","url":"assets/js/8008369e.c4b0b9d5.js"},{"revision":"1edfdc8c09a1d7d841db1b1c835f3788","url":"assets/js/7fbc1a25.0a34f49e.js"},{"revision":"430c4181c777321894d7c7e1cbc625be","url":"assets/js/7de88436.48823cc5.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"09bc95977d96d38cefb6318265dbda4d","url":"assets/js/7ce5d7a1.9f01eb70.js"},{"revision":"c6649ebb8269d5b2533372b6a4ea9213","url":"assets/js/7a59c865.fc68d5a8.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"d0a22d387fdb50c13c4ca8eb607d70b1","url":"assets/js/767bd1d1.4541aabc.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"c2368cbbb5f5119e9c5245b298cff129","url":"assets/js/65223696.f7a92b2b.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"1c8c96e670c4ee65c3aae1dff7b31195","url":"assets/js/61327162.746f601f.js"},{"revision":"c02945d7194740f0cae109000c910d0f","url":"assets/js/607acb04.74be97e2.js"},{"revision":"b53e92d031e77aec6ae31d28df71b616","url":"assets/js/60374e5a.406fc446.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"b88a7d7797fa222dcbfaeb861c843d25","url":"assets/js/5a762f2f.af491dec.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"be7b71cd4bb3426606952db12410ebe5","url":"assets/js/56fce896.a8b097e4.js"},{"revision":"e2948d20373f01774ed7e056182d57a4","url":"assets/js/55721269.163dc895.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"b478c5a3ecfe580d04f0ffe439fb7efa","url":"assets/js/54513d10.9c0b4f57.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"a6469ba21fe93af715cd384d091cad64","url":"assets/js/4810d89a.f080d447.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"e725ba46c4da3c52221a7d6dccfc787c","url":"assets/js/448a5b13.47aa7c09.js"},{"revision":"9fb42f821dd11f5fe7ae16b26440aa48","url":"assets/js/43ea09b6.ad8cb424.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"d466d909e56f8b1d16e832a1057ae08d","url":"assets/js/41937f2e.0c51bd06.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"41789b15ab94d755b75fef3d257aebe5","url":"assets/js/3ee3fb84.7c4829da.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"eb48aeea0ba2e32536d256ddbe48b3b5","url":"assets/js/3c2d29c6.9447af33.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"17a813415271e60dae5e216735f9f49c","url":"assets/js/36f337b1.8889686f.js"},{"revision":"eeec7f17e0f92d013ab5118c250857ee","url":"assets/js/36e6542e.a4965e71.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"a24a81210ad9957ce9922ba453063366","url":"assets/js/309520ad.3faa55cb.js"},{"revision":"33fc75ce806dedf5b69f3e5cdeb42794","url":"assets/js/304a23a0.8609922a.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"9b95c7537f8b6f6060f96037824e994a","url":"assets/js/2dd9eb9e.3d376943.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"5e8bb840cdb4337da6db1515056e65c3","url":"assets/js/28a0c100.015c74cc.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"ac2d690a6eb1774e4c151cafb08b329d","url":"assets/js/24e6def7.28cb37b4.js"},{"revision":"382c8ce91c0236cc0c116945800d5b43","url":"assets/js/23d26d3d.33186d81.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"234a78a41b52c323bd7d1ef909be08f7","url":"assets/js/179b82d4.6863292d.js"},{"revision":"d0b2584c578ec423abd6880102897dec","url":"assets/js/178b6201.3fc239c2.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"4c43c90ad516d23276a82903150fa758","url":"assets/js/177ac620.1be836e5.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"11153e1317c0a63fdec8cedfaa2534b1","url":"assets/js/162c7fa0.f927d575.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"03b34e22ac63ea69ead32e75ccab2bc4","url":"assets/js/148a248b.0f948ede.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"0bb547b5157f315f905193f80eaa6c24","url":"assets/js/0e384e19.7bc2db83.js"},{"revision":"01a9f65a8bc0222b9e4fdfb9c5286eac","url":"assets/js/0a3b6be8.356605d5.js"},{"revision":"788a050e81755924c86fc6faa9685ed4","url":"assets/js/0962a2ae.86f5dbeb.js"},{"revision":"99dffdbe6a30ebc065823043076d086a","url":"assets/js/0786d169.f20bb216.js"},{"revision":"3757d2e2dc78062541cabc6b70cf2860","url":"assets/js/04f403f8.8447d75d.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"ccf862a0060dbc3cb79815b90cc67328","url":"assets/js/02366042.8ac2441d.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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