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
    const precacheManifest = [{"revision":"b273ddf6afcdef2fbf7607aab78d3351","url":"tw_stocks.json"},{"revision":"57e962b976698ad3ce15a1487ce52c3c","url":"subscription.html"},{"revision":"29a923a9a90e45e1745aaee28445d4bd","url":"quotes.html"},{"revision":"e0d00f35b305c6ddd4d0d531cc67d703","url":"me.html"},{"revision":"a3b093c0436a0a05955ea8c5becaca58","url":"market-war-room.html"},{"revision":"3294b1db6e69edc43647ea1688c3529a","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"217ca50bfcea7459c430e0da0114bf3b","url":"index.html"},{"revision":"d6e96cac00fedbe252665d3285c777de","url":"games.html"},{"revision":"c600c85430ce7c4d4eeb340718c50856","url":"finance.html"},{"revision":"b75de6830c2f046c5722ad90355f5987","url":"feedback.html"},{"revision":"4dbd0039e22d148325ef86846ee77d2a","url":"arena.html"},{"revision":"7224c1ad42b8efaa67196900a25b901f","url":"404.html"},{"revision":"aef08701a0f17caf7371551821fffff4","url":"tw_stocks/9958.json"},{"revision":"dcdceb88d3dc972f09537b035380352f","url":"tw_stocks/9955.json"},{"revision":"6437192d97463bcbb588000f418834b4","url":"tw_stocks/9946.json"},{"revision":"de67fc290032742551a68d14777029f1","url":"tw_stocks/9945.json"},{"revision":"768c641a2169d2682fafe0ca12e8f809","url":"tw_stocks/9944.json"},{"revision":"96dba993adf48f52473151f14291c50c","url":"tw_stocks/9943.json"},{"revision":"22863b8a36b64971539d90b9334bdb67","url":"tw_stocks/9942.json"},{"revision":"47f09f00947da744e3dce51168c3f8be","url":"tw_stocks/9941.json"},{"revision":"bff061faf15a5cb22dceb26ea8ff3ce2","url":"tw_stocks/9940.json"},{"revision":"6c467e918537816aa4e68b83b50daf21","url":"tw_stocks/9939.json"},{"revision":"7260c0421372bbf025e595ba2a6d2943","url":"tw_stocks/9938.json"},{"revision":"f0c1d36f13e7511f0f7c3e5c362d81f9","url":"tw_stocks/9937.json"},{"revision":"e91e9b9ade02a9a5bf6d9706a31011c9","url":"tw_stocks/9935.json"},{"revision":"a3cee3519548c04795365c7c5968e462","url":"tw_stocks/9934.json"},{"revision":"14249bdb75684a1f3b49ab10d97938fd","url":"tw_stocks/9933.json"},{"revision":"de386f49273ca62c4618b89be8b136ec","url":"tw_stocks/9931.json"},{"revision":"1fea84558fa6a40cac1f5d4ab82f36f4","url":"tw_stocks/9930.json"},{"revision":"b1515de9425439d50ff0f3462afebd13","url":"tw_stocks/9929.json"},{"revision":"bd7a352d25c77c4bcc082ad215046f26","url":"tw_stocks/9928.json"},{"revision":"2b1201ffe40eb623f69ffa2db09dcc34","url":"tw_stocks/9927.json"},{"revision":"f65d2db528e3c68f44358a65b4c07283","url":"tw_stocks/9926.json"},{"revision":"64f6d84b9c32e3301afb0c5b28d0ea04","url":"tw_stocks/9925.json"},{"revision":"532617f2f4505ad1199fe3743dc319d1","url":"tw_stocks/9924.json"},{"revision":"1dd0942d496bb56aeb9b924546add692","url":"tw_stocks/9921.json"},{"revision":"d903e0952bf9cc79717922a11754b1a1","url":"tw_stocks/9919.json"},{"revision":"a69c0a4d11ce25ff88a45a9012ddd43f","url":"tw_stocks/9918.json"},{"revision":"82ec1d80d9e120eab2ad3aad7fc7b70d","url":"tw_stocks/9917.json"},{"revision":"72427d3ce7b766329b2fcb2a5f96dc77","url":"tw_stocks/9914.json"},{"revision":"25a21dc30b175783306d91daec43eebb","url":"tw_stocks/9912.json"},{"revision":"a2b1fbad3cbdda05617630ea3a66bc28","url":"tw_stocks/9911.json"},{"revision":"09741b6b3762142cdac608e04b617ed9","url":"tw_stocks/9910.json"},{"revision":"a9d522b25f52050ad9fcad9bb8f10e81","url":"tw_stocks/9908.json"},{"revision":"5a0c967aff47dd55dd36d837b57a5f74","url":"tw_stocks/9907.json"},{"revision":"8fc1bba779bf0b102d206a8b5f92fb62","url":"tw_stocks/9906.json"},{"revision":"202e13421e02ef702e2d3250d76ab4da","url":"tw_stocks/9905.json"},{"revision":"84e45cedf1a74f1f494ae6bd923ec099","url":"tw_stocks/9904.json"},{"revision":"39b02b6b2644973d01e04b9292c9366e","url":"tw_stocks/9902.json"},{"revision":"fb67a549563db2785358c395c21e5593","url":"tw_stocks/9802.json"},{"revision":"5f4e4e590b8070ebec9c7f3172bb164a","url":"tw_stocks/8996.json"},{"revision":"67dad4278bfc922d0172a29d5283e421","url":"tw_stocks/8940.json"},{"revision":"353c70a755aac238759bbdcebd016361","url":"tw_stocks/8926.json"},{"revision":"f6fd49108cc60b6ef1ca019da4103903","url":"tw_stocks/8499.json"},{"revision":"016e30590b941f569fa32bfe09f640d9","url":"tw_stocks/8488.json"},{"revision":"c50908fc0e1dd5c7d61fc9e1c0c811c8","url":"tw_stocks/8482.json"},{"revision":"cd17ea6a272ee2fa62da6dc9697e890b","url":"tw_stocks/8481.json"},{"revision":"38122ba91ff6d91a010dbc6d32350d78","url":"tw_stocks/8478.json"},{"revision":"546df2bbcb342e090eda9c4bdae2fe18","url":"tw_stocks/8476.json"},{"revision":"f2b37a477a69f782b46e06eed0966324","url":"tw_stocks/8473.json"},{"revision":"2e435b2c087d434f7aa0534315d84786","url":"tw_stocks/8467.json"},{"revision":"8ef5501380240b3455b5227861ecdc09","url":"tw_stocks/8466.json"},{"revision":"9bff7e1c91d0f8d15592d690f2c0a531","url":"tw_stocks/8464.json"},{"revision":"832010d7c1ec73a741f689565a956db0","url":"tw_stocks/8463.json"},{"revision":"5ecdb34cc992f7b99d89b5bf14366a7c","url":"tw_stocks/8462.json"},{"revision":"19291a976cfe0906f150a3b0e7bddc3d","url":"tw_stocks/8454.json"},{"revision":"b4c3a5617c015af638a118eb8642ae2c","url":"tw_stocks/8443.json"},{"revision":"3dd957635e373a364635f3f5d258d9bb","url":"tw_stocks/8442.json"},{"revision":"25d4fe02138a290d66dc22ad94d9d78e","url":"tw_stocks/8438.json"},{"revision":"56627f4efde73f8bbae42640eb9a0ec5","url":"tw_stocks/8429.json"},{"revision":"869b38215ed971fa536b86336e19cfc4","url":"tw_stocks/8422.json"},{"revision":"c40b9e8e491a23035dfb00bfd2eca5b7","url":"tw_stocks/8411.json"},{"revision":"c00b6d869136e517268f1eab649daddb","url":"tw_stocks/8404.json"},{"revision":"78369c4bb416dd67aade4295f0846556","url":"tw_stocks/8374.json"},{"revision":"9586b5a985a2160b4d22f688fcd86b9d","url":"tw_stocks/8367.json"},{"revision":"a4d3b18b0d5f8e63209793557440d550","url":"tw_stocks/8341.json"},{"revision":"6fcdc9c90d829387d6a792891b2df15f","url":"tw_stocks/8271.json"},{"revision":"de0be77d7999b564279a016419f3d11b","url":"tw_stocks/8261.json"},{"revision":"b64fc4be96b25cde757c2d8f7fdffa39","url":"tw_stocks/8249.json"},{"revision":"aee4e2c8b30fbc1db82de1a5d827d572","url":"tw_stocks/8222.json"},{"revision":"eb873527ff780e1124c9ffbae7bd9153","url":"tw_stocks/8215.json"},{"revision":"62a97d34dc6861174657577ee1c85ba0","url":"tw_stocks/8213.json"},{"revision":"d6c5fa1409a2244d18be3884b6a56658","url":"tw_stocks/8210.json"},{"revision":"c13d43a6fdd9582df978ecb592e2b045","url":"tw_stocks/8201.json"},{"revision":"796ecb97687acfdefee3a166f542235a","url":"tw_stocks/8163.json"},{"revision":"6e5e3b4edc8692bc1b9456f3effdc702","url":"tw_stocks/8150.json"},{"revision":"dabc78b49ab5fdd4fdd55f2148807529","url":"tw_stocks/8131.json"},{"revision":"a80a20675a9c46cc0f4a462de17e06ea","url":"tw_stocks/8114.json"},{"revision":"7770e5fb18d1f913f90652c8acf77ada","url":"tw_stocks/8112.json"},{"revision":"fe18dc7db69c615d7593d0d105f09d4a","url":"tw_stocks/8110.json"},{"revision":"35f950e67afd21309ee24a1a92680058","url":"tw_stocks/8105.json"},{"revision":"777b8f715294fa04d8ed3ca53e8238d4","url":"tw_stocks/8104.json"},{"revision":"cb077186bb28470eaa9662b41fad5406","url":"tw_stocks/8103.json"},{"revision":"c8e043ef03653de6d5ade421646d9ea8","url":"tw_stocks/8101.json"},{"revision":"35be7df1f377fa6dc63eb3ce753065c5","url":"tw_stocks/8081.json"},{"revision":"28d52348c40f1ff9bdbab3d701d94f30","url":"tw_stocks/8072.json"},{"revision":"269fc26b01a2901dbf8d720053d9c728","url":"tw_stocks/8070.json"},{"revision":"eb3773ab056512d056f67cf7dbe9abe6","url":"tw_stocks/8046.json"},{"revision":"0a86e41c6be7bc5314954275506d1fae","url":"tw_stocks/8045.json"},{"revision":"1bfa6a956eed9dfbdad1b29c76cf84a0","url":"tw_stocks/8039.json"},{"revision":"977c0b430858cdd2d8b39f05565d3e31","url":"tw_stocks/8033.json"},{"revision":"d4172bbe14b8e79ba25b38bab1ac9b93","url":"tw_stocks/8028.json"},{"revision":"29b45d6a9a552c5801473d108ae07115","url":"tw_stocks/8021.json"},{"revision":"da4e361d016950d780179ef22602be15","url":"tw_stocks/8016.json"},{"revision":"2f47994944eb204e3cdf9fb93d90e92d","url":"tw_stocks/8011.json"},{"revision":"d469196ae8ef614e59f80f956f466aaa","url":"tw_stocks/7822.json"},{"revision":"2c0236ec0959af81cdb0313f633d7c16","url":"tw_stocks/7821.json"},{"revision":"8fc173b49c8a3a9e8759881bee2d597a","url":"tw_stocks/7799.json"},{"revision":"c4799df87505c472a999e39fecf5e659","url":"tw_stocks/7795.json"},{"revision":"b0d88898c190b1acb1c573ff81f4035b","url":"tw_stocks/7791.json"},{"revision":"076415d083d00c5d74e72d6a8279d574","url":"tw_stocks/7788.json"},{"revision":"440281552893a3eefd5d1f4e9b13c540","url":"tw_stocks/7786.json"},{"revision":"c8e5732c65e71d0e3c5e752c50ca093d","url":"tw_stocks/7780.json"},{"revision":"b94f78ea61a3f9d305959506d959ee6d","url":"tw_stocks/7769.json"},{"revision":"5f0f674be05136bfecdb61ab0f66e11b","url":"tw_stocks/7765.json"},{"revision":"e9508e6417bc6e0eddf416a0b91209ee","url":"tw_stocks/7760.json"},{"revision":"c1345da61936cdb60cccb039275154c3","url":"tw_stocks/7750.json"},{"revision":"ae253966bdff198a56df4531ca813e59","url":"tw_stocks/7749.json"},{"revision":"8532400e0036d8073e7813d7ed34966d","url":"tw_stocks/7736.json"},{"revision":"5fe7baed714857206d8e882d8c42b6cf","url":"tw_stocks/7732.json"},{"revision":"7f45d4a9996b2fc7a0838481e722e226","url":"tw_stocks/7722.json"},{"revision":"d3ee39e9f82be4d1594a90b17fbc4b25","url":"tw_stocks/7721.json"},{"revision":"fe34505b6f145a218a67c1072478463e","url":"tw_stocks/7711.json"},{"revision":"f15adb99b8664fb1fc6de88f4107d359","url":"tw_stocks/7705.json"},{"revision":"46a7632a9b8ee1bf0a32a4462a14a519","url":"tw_stocks/6994.json"},{"revision":"dbb3f80f547b95f5eaef87d297508265","url":"tw_stocks/6965.json"},{"revision":"c82ce8375990e6bdf5415602651244b6","url":"tw_stocks/6962.json"},{"revision":"db513c92c7f6692b267f574f811ca9ab","url":"tw_stocks/6958.json"},{"revision":"f7b8d265514c224c10e86b3cbc40facd","url":"tw_stocks/6957.json"},{"revision":"3b8e6d0c695806630e3631cc9d01d6dc","url":"tw_stocks/6952.json"},{"revision":"ce30ebd80c2126f4c3277c502e2ca0c6","url":"tw_stocks/6944.json"},{"revision":"c472b290fabc3dc46900d01e80154243","url":"tw_stocks/6937.json"},{"revision":"3e9fd4384ab660a094cdd956641319fa","url":"tw_stocks/6936.json"},{"revision":"41b44654610e2483a95e20c800b8d6b1","url":"tw_stocks/6934.json"},{"revision":"671ed674371c7a92758bb1925a820088","url":"tw_stocks/6933.json"},{"revision":"11bfad909949141cc86ba4131f6b329d","url":"tw_stocks/6931.json"},{"revision":"7440a7061e4defa31a297025c9e47cd2","url":"tw_stocks/6928.json"},{"revision":"5848a28a1743d5a86eed72e3d329eb07","url":"tw_stocks/6923.json"},{"revision":"627b885fbe849df6d501e265488aac27","url":"tw_stocks/6919.json"},{"revision":"14ad0e6a03b140cbb54a5aefeb9817a7","url":"tw_stocks/6918.json"},{"revision":"a7a114f89f551b08c8414f228b176e92","url":"tw_stocks/6916.json"},{"revision":"2485e159c8c652290d7edfe70753522e","url":"tw_stocks/6914.json"},{"revision":"f0e98ebbaeb7acd0afd66291778c079e","url":"tw_stocks/6909.json"},{"revision":"ecd1574980e80f6d461e28fa90541d0c","url":"tw_stocks/6906.json"},{"revision":"97d5cae093344b0ba4ec38f2700321de","url":"tw_stocks/6902.json"},{"revision":"8b6515a3331197809726a8a23b3e8ca4","url":"tw_stocks/6901.json"},{"revision":"3a1e86caab13c34462d5e6681b890654","url":"tw_stocks/6890.json"},{"revision":"22d7e235e56783f8b63da60715850c89","url":"tw_stocks/6887.json"},{"revision":"061aac485b9c44878b6403c488ad92b6","url":"tw_stocks/6885.json"},{"revision":"af5e89d265daa363819710d28edfbc3a","url":"tw_stocks/6873.json"},{"revision":"3f48240d36184994d02e70f01a7f89e0","url":"tw_stocks/6869.json"},{"revision":"6b015b8f8e872c823a8ee89673eb45ce","url":"tw_stocks/6863.json"},{"revision":"5fe1ab59a9fcfb165b94b51c0b4e4bdc","url":"tw_stocks/6862.json"},{"revision":"9f7b3f867b31dba9a93773c6f1e530ee","url":"tw_stocks/6861.json"},{"revision":"17c985fa6a7c507d4f512b2670542e40","url":"tw_stocks/6838.json"},{"revision":"741a4bcb9d6a79fef47846beb36d2cb4","url":"tw_stocks/6835.json"},{"revision":"d4bb50fa1e520cb2b9826a0e27211b11","url":"tw_stocks/6834.json"},{"revision":"52dac0ff3b54d6b88f7ed631bcf1615a","url":"tw_stocks/6831.json"},{"revision":"1cb87e4864a844279889f3e569153ce7","url":"tw_stocks/6830.json"},{"revision":"1b2a7eef6aa1f4e787251a84906865dc","url":"tw_stocks/6807.json"},{"revision":"64a0163228fd54b599ca4603b8cc61c3","url":"tw_stocks/6806.json"},{"revision":"8fd73370ca3fd21a9e5e6ee53ef2f1cf","url":"tw_stocks/6805.json"},{"revision":"09e95b6818acd0fa1a0ed7e5e01de671","url":"tw_stocks/6799.json"},{"revision":"717b222c78b11ff6c63b281931387223","url":"tw_stocks/6796.json"},{"revision":"5e8ed55048ab0852ad371064a3a7fe95","url":"tw_stocks/6794.json"},{"revision":"02a6b26bee6bab7e0f4d1abac1076fb8","url":"tw_stocks/6792.json"},{"revision":"32f2430ab1c087cb7fa09ec2184a9905","url":"tw_stocks/6790.json"},{"revision":"65e07cf586b0cc7015589d4894c0a655","url":"tw_stocks/6789.json"},{"revision":"3378081641c98c11cc23c60d04253b76","url":"tw_stocks/6782.json"},{"revision":"a61068d90c1e9b4e2a6d4abceb1467d0","url":"tw_stocks/6781.json"},{"revision":"c983c4ede9878b25dfddf925d329b91f","url":"tw_stocks/6776.json"},{"revision":"4414ac8324ed6f0e1d311e38e543980a","url":"tw_stocks/6770.json"},{"revision":"2c5449165cad0ad589673069c7c618b7","url":"tw_stocks/6768.json"},{"revision":"39be347b007d07d2952fce6add11c07e","url":"tw_stocks/6757.json"},{"revision":"13211b044f48af395cbe95294f329dd2","url":"tw_stocks/6756.json"},{"revision":"852f4730d144b08733d641cad8480545","url":"tw_stocks/6754.json"},{"revision":"9797a7a0e7f0c3cb7c3f4107886f09f9","url":"tw_stocks/6753.json"},{"revision":"f038999fafc9635621520630b72993ce","url":"tw_stocks/6743.json"},{"revision":"31ed3dbbe8df46e3ca6b55f5870def54","url":"tw_stocks/6742.json"},{"revision":"b5028a579d7c4104c71a21be36f3a062","url":"tw_stocks/6722.json"},{"revision":"45fcc23658c3d9ba04510956d5c952dc","url":"tw_stocks/6719.json"},{"revision":"ebf1e912ee3382eb6ed98d024ffcbe94","url":"tw_stocks/6715.json"},{"revision":"5b2bfbebc404ae42e7c8001528ac175b","url":"tw_stocks/6706.json"},{"revision":"1e0c5ab0d8923a8d799d270734e79032","url":"tw_stocks/6698.json"},{"revision":"7f8e3201e913d11206ab7ea5b6bc7455","url":"tw_stocks/6695.json"},{"revision":"39088897475e3298e8b8db7ed0392da2","url":"tw_stocks/6691.json"},{"revision":"8830871c0c81569c6deebc279965aff0","url":"tw_stocks/6689.json"},{"revision":"7bf6bba3c3bf8d257a647c88fef82d41","url":"tw_stocks/6674.json"},{"revision":"361c0c5ac532d5810d28dbc7427dfd5b","url":"tw_stocks/6672.json"},{"revision":"d5cf49518d4666c6c451e93e64a8ca00","url":"tw_stocks/6671.json"},{"revision":"e1d8926eddbc932fedd0c0d25c219068","url":"tw_stocks/6670.json"},{"revision":"804ec599aecbe4ce3518b9bcfb420924","url":"tw_stocks/6669.json"},{"revision":"341cdb6f7df4a5dfcd81c63c37274157","url":"tw_stocks/6668.json"},{"revision":"d8a5d314e424b97d896d4f4f964e8774","url":"tw_stocks/6666.json"},{"revision":"001c7ac12aabfae06d3eba6342d76287","url":"tw_stocks/6658.json"},{"revision":"14fd4e85f30287017433bc4678909273","url":"tw_stocks/6657.json"},{"revision":"9f13c9b997d94794fd7b888e2f81704c","url":"tw_stocks/6655.json"},{"revision":"38193a177f6426dfbde3877e650e32f2","url":"tw_stocks/6641.json"},{"revision":"eb2227d214aabfbec9771edcb0c70b08","url":"tw_stocks/6625.json"},{"revision":"09cfb1236dbc7f1da2011ade2f2abb26","url":"tw_stocks/6614.json"},{"revision":"9c1a9f751807fdbeaa65498e514d6edd","url":"tw_stocks/6606.json"},{"revision":"f6c27320408720f0eb759c27596f3528","url":"tw_stocks/6605.json"},{"revision":"c1c7bae105ee051db763ce0cebd8595f","url":"tw_stocks/6598.json"},{"revision":"9bd133543247a9c827dee973bc991e83","url":"tw_stocks/6592.json"},{"revision":"eb943961ef4071ae11a3865fa6dc10d0","url":"tw_stocks/6591.json"},{"revision":"462e7855d4ebdf95cfd4fb000b2c527d","url":"tw_stocks/6589.json"},{"revision":"f4f86b9aa9d9db15cead6937e420d276","url":"tw_stocks/6585.json"},{"revision":"18403a22f945212d891596a1ccc24c10","url":"tw_stocks/6582.json"},{"revision":"f659ddfb8425e63d0aa080cb919f38b2","url":"tw_stocks/6581.json"},{"revision":"e75a57054c8856259723d9bcd9d1e1f6","url":"tw_stocks/6579.json"},{"revision":"5552a9446c1f109a0bfbb8bac38e9772","url":"tw_stocks/6573.json"},{"revision":"3f0ee55b52472fcaa1444603c5f3f321","url":"tw_stocks/6558.json"},{"revision":"bb660ffe2336aad30ac68c55167d2e05","url":"tw_stocks/6552.json"},{"revision":"6039fc03df1ac9361d860ed60d4c712d","url":"tw_stocks/6550.json"},{"revision":"bb0fb71a71e2ea1d106c0088cb2e7256","url":"tw_stocks/6541.json"},{"revision":"5e6600b9e3c77a98c45e3aa983fcbe2d","url":"tw_stocks/6533.json"},{"revision":"8b491c5b561c40474add5d57804f69a4","url":"tw_stocks/6531.json"},{"revision":"cb9759f7009c593f1d5a7ff59a3b1161","url":"tw_stocks/6526.json"},{"revision":"15f6fef56c163817c6d66f4dabd74baa","url":"tw_stocks/6525.json"},{"revision":"20df75d67b4fb1d6a3ea770aa9be1205","url":"tw_stocks/6515.json"},{"revision":"9ef7f543e48e888bc675ca424297a4e7","url":"tw_stocks/6505.json"},{"revision":"dfb7f0895edcbf0c1820f74ca985bcec","url":"tw_stocks/6504.json"},{"revision":"4b046b788c20608cb26a9aacc48a849a","url":"tw_stocks/6491.json"},{"revision":"99496e41b14ed55df6861c75ad90b8d4","url":"tw_stocks/6477.json"},{"revision":"9e52acbb53c82d231648ccf77b9600ea","url":"tw_stocks/6472.json"},{"revision":"6f84a36d4288ce05c9a866adbc0070f0","url":"tw_stocks/6464.json"},{"revision":"40cee78838286703cda7f722174e4a04","url":"tw_stocks/6456.json"},{"revision":"7837e3fa4c3a89e1d3c5f2c7d22089f2","url":"tw_stocks/6451.json"},{"revision":"496328baf33876f74fd17f15bcf8fd45","url":"tw_stocks/6449.json"},{"revision":"850b5f918015a1dbeb6b945a33a65982","url":"tw_stocks/6446.json"},{"revision":"c529936721246394ad4bcc65e9ab49a3","url":"tw_stocks/6443.json"},{"revision":"0ad40cc7c5c88132908ebebd5832c936","url":"tw_stocks/6442.json"},{"revision":"e433efafc06c414c451174c2df92e81b","url":"tw_stocks/6438.json"},{"revision":"16089eed3ca1a8971b49b9de724505c8","url":"tw_stocks/6431.json"},{"revision":"48873d4636ea905015598f4d2963b0ab","url":"tw_stocks/6426.json"},{"revision":"c9bb6f7bef8084c1dfa024b2d0d7e052","url":"tw_stocks/6416.json"},{"revision":"9b57c8bca35c87e51a9def7ad17cb64c","url":"tw_stocks/6415.json"},{"revision":"3c026bd64852c2c987ee22e985b80d26","url":"tw_stocks/6414.json"},{"revision":"f8b5ba0300558b0d43e67d19656aa028","url":"tw_stocks/6412.json"},{"revision":"f6171323f40b4c32b84452ee42cad547","url":"tw_stocks/6409.json"},{"revision":"ad2cb1fd3ed88f7fa9b68ae185e6f037","url":"tw_stocks/6405.json"},{"revision":"4baa7f2c13b91987baa474c9dacbd6ac","url":"tw_stocks/6285.json"},{"revision":"369c8c8c6c6a305d1ab24e4b0cefd07f","url":"tw_stocks/6283.json"},{"revision":"4f119b50721323f46906ea4fe57926f7","url":"tw_stocks/6282.json"},{"revision":"5c8ba65beb60e82108ebc05f6f039799","url":"tw_stocks/6281.json"},{"revision":"9f33406e9f1cceccca1f73cae52f6803","url":"tw_stocks/6278.json"},{"revision":"ce8b6ff10d2d9914c55091e1a4303202","url":"tw_stocks/6277.json"},{"revision":"57a4e5eed06a2e5b3c9776373d3781b6","url":"tw_stocks/6272.json"},{"revision":"e885561d0cf87df13424f8afad24e01d","url":"tw_stocks/6271.json"},{"revision":"e2e9e29330788194bc27eb07ccd85933","url":"tw_stocks/6269.json"},{"revision":"b705e9c2dee2ef97f247c37bf857d89d","url":"tw_stocks/6257.json"},{"revision":"fece4ce58d2524fd1892ff219b6ad089","url":"tw_stocks/6243.json"},{"revision":"db8a059c2b39c1aa90e85c2bb270386e","url":"tw_stocks/6239.json"},{"revision":"73f601cef91880be21cfc31e101c22a4","url":"tw_stocks/6235.json"},{"revision":"00b22fd18258082f3ee9655ff6f95583","url":"tw_stocks/6230.json"},{"revision":"5b90c0d2721fcf56dd02d810a35925e4","url":"tw_stocks/6226.json"},{"revision":"e6d0a5e68d4119c320ee08753a0a808d","url":"tw_stocks/6225.json"},{"revision":"0245a2539df25385893ffda225356e59","url":"tw_stocks/6224.json"},{"revision":"96dee25e41a9d271427df318b9f10ee6","url":"tw_stocks/6216.json"},{"revision":"4a502289420c39703062a45e48f369cd","url":"tw_stocks/6215.json"},{"revision":"d5fce2c4ba85e0ffb7b1779cf05e230f","url":"tw_stocks/6214.json"},{"revision":"8d47a0075a82de2c47dbc3d8e9751fe5","url":"tw_stocks/6213.json"},{"revision":"47037f070ec80be5228f35c34c73943b","url":"tw_stocks/6209.json"},{"revision":"8ff5092580557694f9cbef10bb6f6b6b","url":"tw_stocks/6206.json"},{"revision":"b229279ca639cdf22576d8c6aefe2d16","url":"tw_stocks/6205.json"},{"revision":"ec6e95f5e0a64cb3946ff36344c733ba","url":"tw_stocks/6202.json"},{"revision":"19f6d895de0f3ea3328fc2adadc1e1eb","url":"tw_stocks/6201.json"},{"revision":"f0cefc72c9fa8c5c7e54954e9ba27738","url":"tw_stocks/6197.json"},{"revision":"c63c58645d9fbf369a3089643cf686a5","url":"tw_stocks/6196.json"},{"revision":"171fb01adc8914d2c7a60d55c266b149","url":"tw_stocks/6192.json"},{"revision":"a8f773d0bda41d40f7b1dc257da4de28","url":"tw_stocks/6191.json"},{"revision":"86d68efbf4e1410ae1b2fba8e7453094","url":"tw_stocks/6189.json"},{"revision":"892e657828bd75b08eb2db02f1430e5a","url":"tw_stocks/6184.json"},{"revision":"912a995ee749a0cc73bbcd8f74071b43","url":"tw_stocks/6183.json"},{"revision":"68f0a6f324d88eb63dd27d721f95a689","url":"tw_stocks/6177.json"},{"revision":"1f6159357d2853a9475a627e0ffc3a9f","url":"tw_stocks/6176.json"},{"revision":"92fd226fc5ee57038aa85e490770a1d9","url":"tw_stocks/6168.json"},{"revision":"c7f1d584d15f01d1caf9a67c1a74a0d5","url":"tw_stocks/6166.json"},{"revision":"197987dd7fc1caf68f0cad36e3c62ca1","url":"tw_stocks/6165.json"},{"revision":"3b7625963376e5ed8869ec12d042071c","url":"tw_stocks/6164.json"},{"revision":"0f0fb7a5dcf5bf866bdcbf7d0fe6cd4b","url":"tw_stocks/6155.json"},{"revision":"2b8d5493e3161fe1c1e2cffdadc4c7ec","url":"tw_stocks/6153.json"},{"revision":"5bec90f5e2e90410b2bd2a154d770269","url":"tw_stocks/6152.json"},{"revision":"fe9d72f319085c5b6839d82e15c75f38","url":"tw_stocks/6142.json"},{"revision":"de6537ac732ef57e00b3ceffff75aa9d","url":"tw_stocks/6141.json"},{"revision":"693d20b887b725deaf194ee06ec3d47b","url":"tw_stocks/6139.json"},{"revision":"bfcc573c39778bc1be5501f9d40c5fa0","url":"tw_stocks/6136.json"},{"revision":"591a1a2a0f998503cde201221d85d341","url":"tw_stocks/6133.json"},{"revision":"85b0f39134dffaa8fe656c500ac88b33","url":"tw_stocks/6128.json"},{"revision":"59b2862d8d0fa0b1c1db4627eb6186f6","url":"tw_stocks/6120.json"},{"revision":"8d5711ea5c1fb28e184ea1d671f49813","url":"tw_stocks/6117.json"},{"revision":"8efc671e042bc5e4e8416656fb076b9d","url":"tw_stocks/6116.json"},{"revision":"f34b02127ffd4107749fab01b274ea5b","url":"tw_stocks/6115.json"},{"revision":"d58f0165e4b84c53960120d8686c49b5","url":"tw_stocks/6112.json"},{"revision":"77c7d9e728df70ed54635124f7e0db8a","url":"tw_stocks/6108.json"},{"revision":"15ccc13487013b054bec160d0e36468b","url":"tw_stocks/6024.json"},{"revision":"2f6096d1d1e8bf28ae31dd94e9604a04","url":"tw_stocks/6005.json"},{"revision":"945292d89293c1727b58ddd158081c40","url":"tw_stocks/5907.json"},{"revision":"776f1ffe4ee826b8ac015e15a2b25503","url":"tw_stocks/5906.json"},{"revision":"ec80a14bdd86348c787b41c94e445849","url":"tw_stocks/5880.json"},{"revision":"b3c293e0aa1a600b87fa91ca21715799","url":"tw_stocks/5876.json"},{"revision":"52a4d83dc41209b44f8c7b15a73e3fa4","url":"tw_stocks/5871.json"},{"revision":"c74436571ed8b8014d5b89fcf5b36799","url":"tw_stocks/5706.json"},{"revision":"5ef7c0f9087bd62f080a531851e0e358","url":"tw_stocks/5608.json"},{"revision":"e5efe933f1c39981137622cbb0f5b670","url":"tw_stocks/5607.json"},{"revision":"efb1381e7e134abcfaef89e2dad24f17","url":"tw_stocks/5546.json"},{"revision":"cfc965d5a9c99182adc329fd1349ad5d","url":"tw_stocks/5538.json"},{"revision":"09f4409a110e7623dee8e079e492d7e2","url":"tw_stocks/5534.json"},{"revision":"ba76258c5e88519b0a3b0f1a051d189a","url":"tw_stocks/5533.json"},{"revision":"164e6ec2d9ba52061143cc265b08b03f","url":"tw_stocks/5531.json"},{"revision":"347756d211619fc1840f1df54a5537d7","url":"tw_stocks/5525.json"},{"revision":"46458fcf8c82287dcc9208b5b47318c0","url":"tw_stocks/5522.json"},{"revision":"6997bf6d6d0137200f9a697d48fb8a29","url":"tw_stocks/5521.json"},{"revision":"d787189999c9cf73adf7b0f950e41906","url":"tw_stocks/5519.json"},{"revision":"5d4b48cafd46ac2d140049c92502aece","url":"tw_stocks/5515.json"},{"revision":"a12155839e5407d4ce26e7d4ab6a68a4","url":"tw_stocks/5484.json"},{"revision":"607cd356574dc6bbc9888a3e1b2da5de","url":"tw_stocks/5471.json"},{"revision":"72959ca3a839d0d3f554a67bb834a46d","url":"tw_stocks/5469.json"},{"revision":"abaed17f963631911cc330eeedf11d82","url":"tw_stocks/5434.json"},{"revision":"23bc63054f1228cd9ce65da4c68c6b93","url":"tw_stocks/5388.json"},{"revision":"95c8e969537cb82a32663f952bd8f0ca","url":"tw_stocks/5306.json"},{"revision":"b4656584e5f8da7b36a55056204339f7","url":"tw_stocks/5292.json"},{"revision":"df8ea26d577100247f9e9dfa7a49cf0f","url":"tw_stocks/5288.json"},{"revision":"b11f6a21294f0bcd3392b7c879382372","url":"tw_stocks/5285.json"},{"revision":"e81dec688a32365ada3b4d425ba69330","url":"tw_stocks/5284.json"},{"revision":"144a6c9533f5e6b585f2af9624ed9faf","url":"tw_stocks/5283.json"},{"revision":"a74c2390e5abc2074e9dcb5ef655b293","url":"tw_stocks/5269.json"},{"revision":"f0c9467e90a688c77eed762ab326f5b8","url":"tw_stocks/5258.json"},{"revision":"a77f7fcec1a448f9db68dc125d7816d9","url":"tw_stocks/5244.json"},{"revision":"078a0a5647fac9a7f8b520507ddf6e7f","url":"tw_stocks/5243.json"},{"revision":"1378421f38b5012c1249ad6e096ca4fd","url":"tw_stocks/5234.json"},{"revision":"a3f44b81c05d57d03b26df503af2812e","url":"tw_stocks/5225.json"},{"revision":"a0f25dcd856a4d40c95b5eb24cff731f","url":"tw_stocks/5222.json"},{"revision":"88ab4f5688620f66c11f18b455c6490e","url":"tw_stocks/5215.json"},{"revision":"4da44e3e2bbeec675d7dd83702cebc9d","url":"tw_stocks/5203.json"},{"revision":"d8f5833e5080cf5a269b05c665ffac35","url":"tw_stocks/5007.json"},{"revision":"807163c7a310dd45805d8c27eff38819","url":"tw_stocks/4999.json"},{"revision":"a59c77f5138a7b9cbc00c7817ff07304","url":"tw_stocks/4994.json"},{"revision":"da9866d648e1ec813271728c2612849e","url":"tw_stocks/4989.json"},{"revision":"efefcd30d435263c684f17f95e881c86","url":"tw_stocks/4977.json"},{"revision":"b730c637f5f8f1a3df6dfc98bb0bbd37","url":"tw_stocks/4976.json"},{"revision":"3191c2ce438916defd013e61a13c63c7","url":"tw_stocks/4968.json"},{"revision":"def375f5d66d583045767de92716fe3a","url":"tw_stocks/4967.json"},{"revision":"34e2c3e04078eb9f4577505df4562f42","url":"tw_stocks/4961.json"},{"revision":"74d8756b76eb6c0e02a19d6dfa158e2e","url":"tw_stocks/4960.json"},{"revision":"7a47844e84322aa1f0324ffe4c4390ad","url":"tw_stocks/4958.json"},{"revision":"a827e3a660688bb3f9c87d1aaa09272a","url":"tw_stocks/4956.json"},{"revision":"9040dc6786dad1fca743789521f30a93","url":"tw_stocks/4952.json"},{"revision":"4ed9e98674fb57e06d08ba442fc4a067","url":"tw_stocks/4949.json"},{"revision":"c1b1eb097d4c4ff96a48a0dca2ed9a5c","url":"tw_stocks/4943.json"},{"revision":"81b0bf653aaa855d84d02c43d21b563f","url":"tw_stocks/4942.json"},{"revision":"3e1826fc6b0bbcb6a82f2f97a69d0f55","url":"tw_stocks/4938.json"},{"revision":"152072d624632f311d73e490b7bd525d","url":"tw_stocks/4935.json"},{"revision":"544afe446cb3eb3345ab098ca114b5c2","url":"tw_stocks/4934.json"},{"revision":"c0528bb05a134d188a52ccea044472fb","url":"tw_stocks/4930.json"},{"revision":"57d0205279d5a2735bfd5839d637d6a4","url":"tw_stocks/4927.json"},{"revision":"a9c195da426c41c182f5f3d7a40e2734","url":"tw_stocks/4919.json"},{"revision":"db6b582b9264ae38739f19214da28df8","url":"tw_stocks/4916.json"},{"revision":"43cb3656dba990b6eb4873de9128e7cc","url":"tw_stocks/4915.json"},{"revision":"fcf8fd7283d62173c4d42bbc265d4469","url":"tw_stocks/4912.json"},{"revision":"6490f15e59ea28b1f3bd609aa08581f0","url":"tw_stocks/4906.json"},{"revision":"9db47ee8f617959f0d221f707b2925ac","url":"tw_stocks/4904.json"},{"revision":"aec9646417c0cdd32dc01cd774cf0ae4","url":"tw_stocks/4807.json"},{"revision":"4e018cd3cfa4a9f59f86125a79f2d535","url":"tw_stocks/4771.json"},{"revision":"6eaa9c72f2744e5f1cb5fa7e6c62c369","url":"tw_stocks/4770.json"},{"revision":"fb45213687f0e67d128949c6c8c7e3ae","url":"tw_stocks/4766.json"},{"revision":"4d16b7271695cdff26d4155b2f4a6432","url":"tw_stocks/4764.json"},{"revision":"af579f39681069e6ae3b0574480dd0b9","url":"tw_stocks/4763.json"},{"revision":"fd061ff79b71da5010bde6b50efb5321","url":"tw_stocks/4755.json"},{"revision":"23b5c727517e41f7ae8f19e7f199b6b6","url":"tw_stocks/4746.json"},{"revision":"30cc5ed034c574d8974f10cecd3f7f90","url":"tw_stocks/4739.json"},{"revision":"4706440d9f0be9270a40393a0f131905","url":"tw_stocks/4737.json"},{"revision":"c21f81f0883941ca6b6665e12ca12d04","url":"tw_stocks/4736.json"},{"revision":"151eff11eeecaaa72fc1ad2deffd2406","url":"tw_stocks/4722.json"},{"revision":"88c87d231377c0abdc5d898a0912e542","url":"tw_stocks/4720.json"},{"revision":"bf96ace623772012a7c7ca60f08349d9","url":"tw_stocks/4588.json"},{"revision":"378a620104b4d40f31b0545d1fe621d4","url":"tw_stocks/4585.json"},{"revision":"695af17fca8002adbfc400156efc069e","url":"tw_stocks/4583.json"},{"revision":"70fb25ebd7949618815dd42ffa915e42","url":"tw_stocks/4581.json"},{"revision":"fb4324a3306489bf17c3025a7f64aa28","url":"tw_stocks/4576.json"},{"revision":"149eb0e4f6b88d9d3854e35f45d6ca81","url":"tw_stocks/4572.json"},{"revision":"6d015253ee24829a84a9366006ad48e1","url":"tw_stocks/4571.json"},{"revision":"624e69913f857ae9d3f3ef5dfbed4447","url":"tw_stocks/4569.json"},{"revision":"ec620d6b12f8918a04f5c8dc3416c2c0","url":"tw_stocks/4566.json"},{"revision":"ca7e14cd43e74897a2c9976d22206e21","url":"tw_stocks/4564.json"},{"revision":"876811c1a9dff9766c65c21523e22c57","url":"tw_stocks/4562.json"},{"revision":"d6860b66c56b9135188093673c569276","url":"tw_stocks/4560.json"},{"revision":"1d597db390917c93940cefc376b6ba29","url":"tw_stocks/4557.json"},{"revision":"4d205f283601393c583e1e2fdd607ea1","url":"tw_stocks/4555.json"},{"revision":"b66641da4845ea92480091bc8dbc245d","url":"tw_stocks/4552.json"},{"revision":"5d33232042a2970d6a4eeea4e80dc647","url":"tw_stocks/4551.json"},{"revision":"f30a8debd14a45b412a7cd49707467b5","url":"tw_stocks/4545.json"},{"revision":"79e053f5899e7ceb981542926b57e669","url":"tw_stocks/4540.json"},{"revision":"86aa6a32de2e736228862f47c07e8735","url":"tw_stocks/4536.json"},{"revision":"7f93e38b018e9b79c6d1ced9d7186a5b","url":"tw_stocks/4532.json"},{"revision":"0b4a251de73f2496d0a1aaef9f55afc2","url":"tw_stocks/4526.json"},{"revision":"8c03c8c214e76fc4a4db80f43927f67c","url":"tw_stocks/4441.json"},{"revision":"0de7fbe94aa7363aa40cadd3ff757b97","url":"tw_stocks/4440.json"},{"revision":"83b410d4a19f72a1fdee71d52aff6ce0","url":"tw_stocks/4439.json"},{"revision":"703cac1d9c3e0978cf3685bcb6005c5e","url":"tw_stocks/4438.json"},{"revision":"0611b7a577511dd145a143e0aef77d59","url":"tw_stocks/4426.json"},{"revision":"db873b531dccc44afc5a533becbd1fa6","url":"tw_stocks/4414.json"},{"revision":"2eb4053f706e2f6da87468964e2b1431","url":"tw_stocks/4306.json"},{"revision":"adf58269382f88dfd11975bd8950baf4","url":"tw_stocks/4190.json"},{"revision":"9d7a4ea8dd7bedee5a4c4811c87650b3","url":"tw_stocks/4178.json"},{"revision":"f4bc1baef53667b07aa95a5582204009","url":"tw_stocks/4169.json"},{"revision":"5249f8bae682792c439819ab17380f2c","url":"tw_stocks/4164.json"},{"revision":"54bc68d71faa726d6c7a26d78c8cb559","url":"tw_stocks/4155.json"},{"revision":"729ada122f6431eb30af80906b20a593","url":"tw_stocks/4148.json"},{"revision":"2ddac52541ab27be52116e892f6d8559","url":"tw_stocks/4142.json"},{"revision":"5b54b9cc762315eed7e1285ff39f5faa","url":"tw_stocks/4137.json"},{"revision":"4c8646cf23b865cf0f71db111d002390","url":"tw_stocks/4133.json"},{"revision":"93251f3ba4cd95bb656d5fae183f3f2d","url":"tw_stocks/4119.json"},{"revision":"d8d452b83ecdd97cc16ab1e2b8b0d0f8","url":"tw_stocks/4108.json"},{"revision":"2c0dc2878667a3e2f45ea3fce81ee928","url":"tw_stocks/4106.json"},{"revision":"f155aedc406ed872aea280520702d33e","url":"tw_stocks/4104.json"},{"revision":"b088042028f57a834ec92553017ee91b","url":"tw_stocks/3717.json"},{"revision":"e66d59a1dff043d6df3f962e1a8d9036","url":"tw_stocks/3716.json"},{"revision":"403c52b73dfc0ae3fb2e2712dcc11da7","url":"tw_stocks/3715.json"},{"revision":"f7a38e71fd9984999df931de28099a9d","url":"tw_stocks/3714.json"},{"revision":"925cff55e66b5ef721f48e3540295f44","url":"tw_stocks/3712.json"},{"revision":"218babf6a92c10e80526f938fd789e5b","url":"tw_stocks/3711.json"},{"revision":"734d3c8126b699b2eb7f03ec0d106f4c","url":"tw_stocks/3708.json"},{"revision":"ffa99aea338e75f0e7c7e44ecf4342ec","url":"tw_stocks/3706.json"},{"revision":"3665070c225c00bce001b714c1301e69","url":"tw_stocks/3705.json"},{"revision":"1890e2caf4a51370fcfe1cedd3437a56","url":"tw_stocks/3704.json"},{"revision":"5c9cd06650884d49933d6662ad85a213","url":"tw_stocks/3703.json"},{"revision":"0e12fb2e7b0a3fed7c82b47d3cc775a1","url":"tw_stocks/3702.json"},{"revision":"d1c0bdb54129afca93cca766889ce6e1","url":"tw_stocks/3701.json"},{"revision":"5ee96e04c4b974fcb4b448170a1a2c7d","url":"tw_stocks/3694.json"},{"revision":"7b694679958bcb0532573ed4c081f180","url":"tw_stocks/3686.json"},{"revision":"0f9db6eb3a584cff3311c2b7b2e1d1d0","url":"tw_stocks/3679.json"},{"revision":"5caed4b365b9eb5e5f22ae97ff6a6e2b","url":"tw_stocks/3673.json"},{"revision":"cd61b94bba3f0094a1414453cc0ab90e","url":"tw_stocks/3669.json"},{"revision":"d9a8fd104976c081072ed370c34f2e6a","url":"tw_stocks/3665.json"},{"revision":"832489000569ccb8a1a358b67c508938","url":"tw_stocks/3661.json"},{"revision":"97fe2b26e1a74289311704ac3773c509","url":"tw_stocks/3653.json"},{"revision":"3955354a66111f0195900e5f089e8f68","url":"tw_stocks/3652.json"},{"revision":"3b9218b3439967584dbfdeedc16169b7","url":"tw_stocks/3645.json"},{"revision":"88108cdd1f0dfd048c2923e7ce26aaee","url":"tw_stocks/3622.json"},{"revision":"2cda2ed26c672a43fd3c9e855491814c","url":"tw_stocks/3617.json"},{"revision":"fa8f2d6ba6c47c61877743715075e8e1","url":"tw_stocks/3607.json"},{"revision":"bd5eb03758a7180f3dda79c77a57cae4","url":"tw_stocks/3605.json"},{"revision":"01674970cf8a6a7d5a7955eacacbc905","url":"tw_stocks/3596.json"},{"revision":"e9f02945cde6ce3a15110731b2525085","url":"tw_stocks/3593.json"},{"revision":"2f1aa5dc517891b84d05004c0a2a77c2","url":"tw_stocks/3592.json"},{"revision":"ebcb2e5a3690376e78abf382a6258257","url":"tw_stocks/3591.json"},{"revision":"be11e1c19c43a3e9a0f23bbbad354a96","url":"tw_stocks/3588.json"},{"revision":"ee4608da788135fe6c93f64196fb9ead","url":"tw_stocks/3583.json"},{"revision":"92b7445592a406e5a57ab9df455bb4f3","url":"tw_stocks/3576.json"},{"revision":"b1b1c6257395aea0b36184580f9cb96d","url":"tw_stocks/3563.json"},{"revision":"92add660f3e03ebd509aef22dcc8d7c4","url":"tw_stocks/3557.json"},{"revision":"2441d1344f19a7ff9d7c1351dabc45b4","url":"tw_stocks/3550.json"},{"revision":"62cc3acbe50c8e50989221fb77822c4c","url":"tw_stocks/3545.json"},{"revision":"a567da72a28ce7cce428b10c9ce24ea1","url":"tw_stocks/3543.json"},{"revision":"3607e39a0cf3f71e8a0ec06c1df666da","url":"tw_stocks/3535.json"},{"revision":"7107d5d69f9d56403abb63ef16ec8b91","url":"tw_stocks/3533.json"},{"revision":"a5eaaad1dc02c4ffdd376d73e0f7d575","url":"tw_stocks/3532.json"},{"revision":"ac815f1c653659c94863612d89f65b84","url":"tw_stocks/3530.json"},{"revision":"5a412454505a02ee02ca9fd49efc9a86","url":"tw_stocks/3528.json"},{"revision":"b617351f473bc7d3657a23101d537000","url":"tw_stocks/3518.json"},{"revision":"3e0ce2537a5fafa64d90bbdce79784a3","url":"tw_stocks/3515.json"},{"revision":"7d349195e5ee625c0ff5016fa4aaba08","url":"tw_stocks/3504.json"},{"revision":"248a20159ae2256cbe7165fe7d58242b","url":"tw_stocks/3501.json"},{"revision":"a0616c5f51aad982587ed60953400049","url":"tw_stocks/3494.json"},{"revision":"5be0c9c93c6c9d26569e2b2f5a321426","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"01d7b6862519e0c2713f339b2c0b971b","url":"tw_stocks/3450.json"},{"revision":"d8e01874426b43878d804e0fe0790fe4","url":"tw_stocks/3447.json"},{"revision":"bcae2b432529f94a1729c189569e4dd2","url":"tw_stocks/3443.json"},{"revision":"b36192428903f7f9f420c286c14975cc","url":"tw_stocks/3437.json"},{"revision":"907d89139d09c7a80140e06d7f9d8feb","url":"tw_stocks/3432.json"},{"revision":"efac65dd53cad25975f1df7e9d30a1c8","url":"tw_stocks/3419.json"},{"revision":"00caaf29133952bf5324e892ba491bfd","url":"tw_stocks/3416.json"},{"revision":"99fbb4c0412d48414a923f8a9ae85742","url":"tw_stocks/3413.json"},{"revision":"3bff8e078d2bd0c5c0280265959e62b7","url":"tw_stocks/3406.json"},{"revision":"ab4f535ab1331b3ce336a0f12d6112e7","url":"tw_stocks/3380.json"},{"revision":"856d2edef627d0173849dbbd61312b0c","url":"tw_stocks/3376.json"},{"revision":"19d325e2c616addc26ba35bf36bd878a","url":"tw_stocks/3356.json"},{"revision":"aee9d45d07d2dc5e83e09335b85fcdce","url":"tw_stocks/3346.json"},{"revision":"612237ae5a2860d55de491c4389f6f07","url":"tw_stocks/3338.json"},{"revision":"0df642e5b7fc19557e6303894344cce2","url":"tw_stocks/3321.json"},{"revision":"75db20438ebab7022567839211fbbc43","url":"tw_stocks/3312.json"},{"revision":"8909f295ee096cf53934198f4594e5d9","url":"tw_stocks/3311.json"},{"revision":"30cb3c03560aad139d1af1080c208f34","url":"tw_stocks/3308.json"},{"revision":"756de6fcde4f45f620cf772309318fe9","url":"tw_stocks/3305.json"},{"revision":"ac249034fa55852b900e256be8d3cf54","url":"tw_stocks/3296.json"},{"revision":"ae45518b84ee860ea9ae9c5c288d7017","url":"tw_stocks/3266.json"},{"revision":"f73129914111b28a5fc176303c33706e","url":"tw_stocks/3257.json"},{"revision":"24af163ad8b6f7990d407b3d0d8c6efc","url":"tw_stocks/3231.json"},{"revision":"7338f7ced88d1787ae8ef06925fd798f","url":"tw_stocks/3229.json"},{"revision":"b073b70f7c2edf8b0a2d0851d66dd65e","url":"tw_stocks/3209.json"},{"revision":"d4aaac4c964f84b121de3e12f89fe4bb","url":"tw_stocks/3189.json"},{"revision":"cfcb085c733f8d7a0fd9048e8e5c0178","url":"tw_stocks/3168.json"},{"revision":"2d2e947c360231c7deb5853509924196","url":"tw_stocks/3167.json"},{"revision":"5f4835f4bbe9a779e0544dfa8c4c6524","url":"tw_stocks/3164.json"},{"revision":"760009375d1c8a213bc1bb2063fc4b3a","url":"tw_stocks/3149.json"},{"revision":"8a1c2318f65e41e7666f87d542ebaf85","url":"tw_stocks/3138.json"},{"revision":"681a700da03239a9e56735ce1fa4ee76","url":"tw_stocks/3135.json"},{"revision":"dd4c90f2eb536f844e25b9d34101e968","url":"tw_stocks/3130.json"},{"revision":"a69650ed5793066fa65d3160d4436505","url":"tw_stocks/3094.json"},{"revision":"40184942016b0475cf471b0bc25285b9","url":"tw_stocks/3092.json"},{"revision":"30edfae4be79dccf50043e6e03105892","url":"tw_stocks/3090.json"},{"revision":"607248301d83497b9385a41cc4ae108e","url":"tw_stocks/3062.json"},{"revision":"0062542e0407e30a2a690cfdd3518f75","url":"tw_stocks/3060.json"},{"revision":"1cc142bf350b31fb523e024c339ccbcc","url":"tw_stocks/3059.json"},{"revision":"3240a42f1b359cafa3163e9327a8fce0","url":"tw_stocks/3058.json"},{"revision":"10ae051c30700db15d5c27e6a6054be5","url":"tw_stocks/3057.json"},{"revision":"c8a68ce6d4c44e23dc0342d735e1e7d3","url":"tw_stocks/3056.json"},{"revision":"da3020558fdff71e8c64169460a58827","url":"tw_stocks/3055.json"},{"revision":"c4b52638eb5d88f27c23895ce085449b","url":"tw_stocks/3054.json"},{"revision":"e337217536010bfd6043db6c99dd77b3","url":"tw_stocks/3052.json"},{"revision":"3d8bbc8994e4720d36a41f27af54a7fa","url":"tw_stocks/3051.json"},{"revision":"a03b671d1a994537bfde605f86f5bb44","url":"tw_stocks/3050.json"},{"revision":"376a3e9824228ec1657b1da2017ac061","url":"tw_stocks/3049.json"},{"revision":"f7b139d598f379e52a21c459864ac92e","url":"tw_stocks/3048.json"},{"revision":"b420914aa8ec0c91b7b682e6911a863a","url":"tw_stocks/3047.json"},{"revision":"c90fd3af61c7832d509e69da01de6d13","url":"tw_stocks/3046.json"},{"revision":"72bddfc093ecb50e148be319373485d3","url":"tw_stocks/3045.json"},{"revision":"4df5834b2b3a69272da2794d412ad048","url":"tw_stocks/3044.json"},{"revision":"a24fc2d2c4eb5ad67de677a686b1fa18","url":"tw_stocks/3043.json"},{"revision":"01d56c57f981190623f64a7d9480f710","url":"tw_stocks/3042.json"},{"revision":"9bc58cc7958e9ae443199f14a62ef119","url":"tw_stocks/3041.json"},{"revision":"d48fdcc09e503a937af6e8832c64a5bf","url":"tw_stocks/3040.json"},{"revision":"60ee0c18e1706b7272c35bba26f5c37c","url":"tw_stocks/3038.json"},{"revision":"aa739723ff2053cd748c56ee19a1baa8","url":"tw_stocks/3037.json"},{"revision":"c70993baff9c45857e8467ede59f19c0","url":"tw_stocks/3036.json"},{"revision":"c964a6326ac27d0a110dc2ce7213cac4","url":"tw_stocks/3035.json"},{"revision":"7303a9e03a70e4837fba0f61ddf49c38","url":"tw_stocks/3034.json"},{"revision":"cf4c311980a63c5aa59d3029d13fff61","url":"tw_stocks/3033.json"},{"revision":"72cfddd343d55a0423dcb1af797e56a3","url":"tw_stocks/3032.json"},{"revision":"6dc9befee4b733c8407c7b694497b07c","url":"tw_stocks/3031.json"},{"revision":"0ac781fe466085d33235e00363353ca7","url":"tw_stocks/3030.json"},{"revision":"278594dfb75d048c5e083d926a6b50db","url":"tw_stocks/3029.json"},{"revision":"951721c3039a994d280413a48da6ce58","url":"tw_stocks/3028.json"},{"revision":"2130ede416230c2735f9f95f2e374907","url":"tw_stocks/3027.json"},{"revision":"cb1e539980661b8c02a3339994ca86bc","url":"tw_stocks/3026.json"},{"revision":"41b1144fd54a908cbf598fd5cbb56e73","url":"tw_stocks/3025.json"},{"revision":"8bdaaacc3164a4ba84abf7497b89a6ba","url":"tw_stocks/3024.json"},{"revision":"d94636a28cfcabaf500fae260f7ce649","url":"tw_stocks/3023.json"},{"revision":"9d873cbaff4f9366121ae73eb3b10c97","url":"tw_stocks/3022.json"},{"revision":"a6b6e69b91bab013a7ff77d8b6ca2f6d","url":"tw_stocks/3021.json"},{"revision":"f4917233590e6c8fdabd8b51dc63af01","url":"tw_stocks/3019.json"},{"revision":"95a198f2040f5e4df5031598a2f04f24","url":"tw_stocks/3018.json"},{"revision":"87de04082b67854cae4d1b0936a2ff9f","url":"tw_stocks/3017.json"},{"revision":"b27d67d51ee308d7554deb1dff435647","url":"tw_stocks/3016.json"},{"revision":"09592785179866ca691ee0d815c12c58","url":"tw_stocks/3015.json"},{"revision":"e7b32d13a0a7e4d54dcaa22f98b01423","url":"tw_stocks/3014.json"},{"revision":"951e40336bf4886ea53c88be7f48688d","url":"tw_stocks/3013.json"},{"revision":"ef1aed4fb936d0f3ab1429cbc4fc6568","url":"tw_stocks/3011.json"},{"revision":"0448acf34bad84cba921801bd3e2a92a","url":"tw_stocks/3010.json"},{"revision":"b2a0087c9a34a8b05e756a71853ee1eb","url":"tw_stocks/3008.json"},{"revision":"34b1407efd8e5db3cc11519a911a3e5f","url":"tw_stocks/3006.json"},{"revision":"c09f61fa3ea7692864f75388e68aa92b","url":"tw_stocks/3005.json"},{"revision":"b81d0bf12d4e573d4a79ac7b2bfd58d3","url":"tw_stocks/3004.json"},{"revision":"b672fc9456d2afa85a08a226b425a4c9","url":"tw_stocks/3003.json"},{"revision":"7f9f6acc4597d233af000e72dee70e3b","url":"tw_stocks/3002.json"},{"revision":"e2532e009c9dcdfe53ff31f9bef35ff0","url":"tw_stocks/2945.json"},{"revision":"f006930a9c702bdd584db4bcabbcfb14","url":"tw_stocks/2939.json"},{"revision":"bc0bbb119df368770bb58e3890f1678a","url":"tw_stocks/2929.json"},{"revision":"a843b723df2892bcb9d8ce880cbf9c76","url":"tw_stocks/2923.json"},{"revision":"7883e2c4e6c51b22e83ae8c0e26c0cac","url":"tw_stocks/2915.json"},{"revision":"7298918e66bdc0dbacfbfcbfc99341a6","url":"tw_stocks/2913.json"},{"revision":"dd3d748cc48f342be905337a79d3a8e9","url":"tw_stocks/2912.json"},{"revision":"344ff410f8541c4ad513f8ae93a8b549","url":"tw_stocks/2911.json"},{"revision":"45a5748d28ae15c5566020b26bb5b080","url":"tw_stocks/2910.json"},{"revision":"550a64803d631608d4d36d23f117ee79","url":"tw_stocks/2908.json"},{"revision":"30d9a20d2e374591aa8c599b2399103a","url":"tw_stocks/2906.json"},{"revision":"6ffe7ba1e0b549c9168ea5d712d59525","url":"tw_stocks/2905.json"},{"revision":"8eb244f56c3546f8fedbd5c7c67544b8","url":"tw_stocks/2904.json"},{"revision":"efe7e8c2615d152b4559255da1b41f00","url":"tw_stocks/2903.json"},{"revision":"5c8d32b6f0fd7c844ac1294862781f12","url":"tw_stocks/2901.json"},{"revision":"44d1ce9e72f65ffe1319f679c9fa8322","url":"tw_stocks/2897.json"},{"revision":"7a16ef152cd9f0bcfd246f4f02dc5b38","url":"tw_stocks/2892.json"},{"revision":"095ab80cb44ea4011a222d5880ed9f84","url":"tw_stocks/2891.json"},{"revision":"68b6797aa67232417355bc1ea5217ddf","url":"tw_stocks/2890.json"},{"revision":"f4a4cb758491ca11752b12755f602811","url":"tw_stocks/2889.json"},{"revision":"972d5ac7c793718df4c149ebe8e3ac00","url":"tw_stocks/2887.json"},{"revision":"0e5b8baba6fa3172dfd5119ac12d87e9","url":"tw_stocks/2886.json"},{"revision":"0b566113976326e0bb872eaf3ea6d5c3","url":"tw_stocks/2885.json"},{"revision":"65cca2d5ac4a4f174ed1e838c8c3a982","url":"tw_stocks/2884.json"},{"revision":"cb49cbfc2e30574983de8600a9653301","url":"tw_stocks/2883.json"},{"revision":"c6ac9e9e298b880f0314354df9dd09df","url":"tw_stocks/2882.json"},{"revision":"61cda265a7ab9fd59fcccb3d1b69a38b","url":"tw_stocks/2881.json"},{"revision":"422c4d1e0671a2ccc1a1f19d6ffe069f","url":"tw_stocks/2880.json"},{"revision":"84e9896f0f78c88f2368dcd67a33de34","url":"tw_stocks/2867.json"},{"revision":"03f70bcdb265063975162e617c68ad03","url":"tw_stocks/2855.json"},{"revision":"a059df8be4c3aae90d42389c83ce9cc0","url":"tw_stocks/2852.json"},{"revision":"cd5f4559dbcb3eb190d3481400b46ab0","url":"tw_stocks/2851.json"},{"revision":"aa5b9551a3162cf4d60df07810d8f753","url":"tw_stocks/2850.json"},{"revision":"53fddcf0eb7e25867d4fa959094ea58c","url":"tw_stocks/2849.json"},{"revision":"0369718d5e744269943f0a65780f63a8","url":"tw_stocks/2845.json"},{"revision":"f4b006586995334c6b95f021e3da8e19","url":"tw_stocks/2838.json"},{"revision":"ecb1ce86f3896239ee8ec7c11122f099","url":"tw_stocks/2836.json"},{"revision":"5d97e8eb430c7b93a8328c187322a34f","url":"tw_stocks/2834.json"},{"revision":"2e3146d488b684f62bbb93666686f923","url":"tw_stocks/2832.json"},{"revision":"12b0f0e9b8b3371c2700e062ddf51fcb","url":"tw_stocks/2820.json"},{"revision":"10f460b2288a8da0d76f3e9faa2198ac","url":"tw_stocks/2816.json"},{"revision":"31e7a714ea77f460e4d6e0874f5a7fe3","url":"tw_stocks/2812.json"},{"revision":"66b2515d02bc1357c61ea08c8e1a1cf5","url":"tw_stocks/2801.json"},{"revision":"1d8ece2e4f0e75a50c37508a9cbd630b","url":"tw_stocks/2762.json"},{"revision":"c618b84444c4322025948ce99cb56baf","url":"tw_stocks/2753.json"},{"revision":"73a1b1913cc000872c7de20965a86747","url":"tw_stocks/2748.json"},{"revision":"5b859c099dec1630078ce6038a2348d0","url":"tw_stocks/2739.json"},{"revision":"0a1b8924fcb993ae7b79935cfd0b4dd8","url":"tw_stocks/2731.json"},{"revision":"2a932b44732713dc27e6160eb99d1c81","url":"tw_stocks/2727.json"},{"revision":"5468862fdd14d060dd80926b5979d19d","url":"tw_stocks/2723.json"},{"revision":"b62f10a9d702d25220634f2fc8d71f4f","url":"tw_stocks/2722.json"},{"revision":"863b91f50793f177ba469418d7dbd860","url":"tw_stocks/2712.json"},{"revision":"b79192e56d4e280d2ac0d363b9ba053d","url":"tw_stocks/2707.json"},{"revision":"f7711625c80a071ec134641033c1947b","url":"tw_stocks/2706.json"},{"revision":"12ed1178079f24008b8d741d225e42d1","url":"tw_stocks/2705.json"},{"revision":"b80575c73b3371578280161f58bb1d1e","url":"tw_stocks/2704.json"},{"revision":"81a4f0da8d5a0690fa1bd4231b916944","url":"tw_stocks/2702.json"},{"revision":"1ae6d6c5abef546ad2f594da4009145d","url":"tw_stocks/2701.json"},{"revision":"c6a65c44d23dd6ed0e7b53423199207d","url":"tw_stocks/2646.json"},{"revision":"59009a7aa516fe460763ed356ef0690f","url":"tw_stocks/2645.json"},{"revision":"9bc342d168cb702e19a86c1f365c50c9","url":"tw_stocks/2642.json"},{"revision":"40e12978eaf06d02edb77bb11d19f8f3","url":"tw_stocks/2637.json"},{"revision":"7926013b7d84dada3bc473f8e734a708","url":"tw_stocks/2636.json"},{"revision":"212441977397a6a2cb967feb7ada6cec","url":"tw_stocks/2634.json"},{"revision":"694dd9adaca40746d82be91300bdae35","url":"tw_stocks/2633.json"},{"revision":"d449cf8b44e8d65e8e9c088df659ba94","url":"tw_stocks/2630.json"},{"revision":"87ca5325b62f14d953f565eaf188c539","url":"tw_stocks/2618.json"},{"revision":"cd37a5a5c64e8759e6d8232bab65c400","url":"tw_stocks/2617.json"},{"revision":"138a035422d46b0e85e65eeab0008775","url":"tw_stocks/2616.json"},{"revision":"cd8fa7d8e9d018b999bc220ce5ffd6db","url":"tw_stocks/2615.json"},{"revision":"e486aced7dc0881152e8684d71010ece","url":"tw_stocks/2614.json"},{"revision":"7630481f57a5efbb7cc4c28e6b2824f6","url":"tw_stocks/2613.json"},{"revision":"a9a6959064e6995e2dd048be232a3d52","url":"tw_stocks/2612.json"},{"revision":"9bf4e76ccc387fe7b692d317580beb80","url":"tw_stocks/2611.json"},{"revision":"e10d04ab86ea53f1f8f4012b04b79de7","url":"tw_stocks/2610.json"},{"revision":"15132bb5669d1db914b8f30ebfd18565","url":"tw_stocks/2609.json"},{"revision":"8753810bf134cebfdd992ef6d5df5f0b","url":"tw_stocks/2608.json"},{"revision":"545070f4b03ba7625a5afbaaf40cd70b","url":"tw_stocks/2607.json"},{"revision":"a731f9c7119ec733afcabfa08c0aa925","url":"tw_stocks/2606.json"},{"revision":"194f98335011f3c57b80d27eb9c594dc","url":"tw_stocks/2605.json"},{"revision":"7c72b2d1380c6d32739686669788ebd4","url":"tw_stocks/2603.json"},{"revision":"9df0405c0b49644d0a232cab25f2f4d2","url":"tw_stocks/2601.json"},{"revision":"1174f37ef9a8eb15addf8ef92b4ccbb0","url":"tw_stocks/2597.json"},{"revision":"d09e1d5f10033ec59b8dda7f7aaadf78","url":"tw_stocks/2548.json"},{"revision":"fa94bd2e37588b786ad92c85de35118e","url":"tw_stocks/2547.json"},{"revision":"2f35fb5c05b509285de05299733826f6","url":"tw_stocks/2546.json"},{"revision":"addb7446641c5cf23692e27e28c8ab1e","url":"tw_stocks/2545.json"},{"revision":"519d7ca5de1c8b6ea0eec6424411e38a","url":"tw_stocks/2543.json"},{"revision":"c5d9f31149f8e1cd2e52bfc1d5deaaef","url":"tw_stocks/2542.json"},{"revision":"37f92a27f05614d395808823733304e9","url":"tw_stocks/2540.json"},{"revision":"8952ee15fe581a01b4b205122afc7d3d","url":"tw_stocks/2539.json"},{"revision":"8515ac8899aab62be7733e35b160a6b9","url":"tw_stocks/2538.json"},{"revision":"3a385bc81540b9e3099ff90bd2743307","url":"tw_stocks/2537.json"},{"revision":"d972c7612525a787e3c18df06f427ff7","url":"tw_stocks/2536.json"},{"revision":"2ca31d122e0a44702f12babda98732d0","url":"tw_stocks/2535.json"},{"revision":"9094a9efc42b4a7bb272b2b5a30461fd","url":"tw_stocks/2534.json"},{"revision":"cc7fa193554b5c37e039526938827607","url":"tw_stocks/2530.json"},{"revision":"fe09a2680c2cd2a0329994701f3c7b46","url":"tw_stocks/2528.json"},{"revision":"c0a9064c33c5cd5d15cfd42e96445806","url":"tw_stocks/2527.json"},{"revision":"011ff28fdaee6948618ddb86b14c26f7","url":"tw_stocks/2524.json"},{"revision":"5951a945528d6ed13a03d6bf5139bb6c","url":"tw_stocks/2520.json"},{"revision":"231763efaf8e01557a02243f1912bcd5","url":"tw_stocks/2516.json"},{"revision":"e62082a8fa2d90db8900d4d504f7dbaf","url":"tw_stocks/2515.json"},{"revision":"2c5d8a904a71cb772f425545c762ef8c","url":"tw_stocks/2514.json"},{"revision":"3cf65d3015a44661a91d48a8eb969362","url":"tw_stocks/2511.json"},{"revision":"ec5066c0ac8055baf29beab39b112730","url":"tw_stocks/2509.json"},{"revision":"8d4c9a499ed4c838b9dae1408523c4f3","url":"tw_stocks/2506.json"},{"revision":"4695cc602e4d943a8582ea748eb082c8","url":"tw_stocks/2505.json"},{"revision":"46a3bf43bdfdb9c15b9a549f2e6ec046","url":"tw_stocks/2504.json"},{"revision":"ca60315c17ccfdf636b3bd979517cc0d","url":"tw_stocks/2501.json"},{"revision":"1f274c1ba639fdccf8049d331ac05ac4","url":"tw_stocks/2498.json"},{"revision":"0bd93cbceaeed6111aaa52815ebc236c","url":"tw_stocks/2497.json"},{"revision":"615ab64ad3b49d942491575f5180493c","url":"tw_stocks/2496.json"},{"revision":"48f6fedef8a08981209df7a3f7317899","url":"tw_stocks/2495.json"},{"revision":"f67c50e151b722c2ea224ec2911cf15f","url":"tw_stocks/2493.json"},{"revision":"dcb05ac39c6ee2b72de1204db0a00d73","url":"tw_stocks/2492.json"},{"revision":"074e4e27dd29d5bff1db2bc8725dd612","url":"tw_stocks/2491.json"},{"revision":"88ae0d8876eab8ae529d8efece00ad03","url":"tw_stocks/2489.json"},{"revision":"7d76441cbd9b00b118ea4c623ee05cac","url":"tw_stocks/2488.json"},{"revision":"c427bc9429c1396f8fea40c89da74e24","url":"tw_stocks/2486.json"},{"revision":"a7b5c3eac8f7e6d39ad9c7aba19a0be9","url":"tw_stocks/2485.json"},{"revision":"ccae5339f190c38a258cec7d3b30d78f","url":"tw_stocks/2484.json"},{"revision":"832ca81f14af637e306b292f39a00adc","url":"tw_stocks/2483.json"},{"revision":"f8b1c062f4f1c3e5d5809702d4b0dc1d","url":"tw_stocks/2482.json"},{"revision":"260d31e40d26cc9c7bb9373fa3f5511a","url":"tw_stocks/2481.json"},{"revision":"d59ebd95c7d13835dc963039c1017f5f","url":"tw_stocks/2480.json"},{"revision":"c396da508b73b8917c9febf7a3ea0a0d","url":"tw_stocks/2478.json"},{"revision":"a70816ac239b38272b65ac1c632efed6","url":"tw_stocks/2477.json"},{"revision":"bc6a153172a1592d9f9ee5990322f5b7","url":"tw_stocks/2476.json"},{"revision":"cc13547281573804fb34f4b572722056","url":"tw_stocks/2474.json"},{"revision":"6213c20c2ea404c429b47e6e5c570d99","url":"tw_stocks/2472.json"},{"revision":"ad707f5fb974e0355068c586247eaee4","url":"tw_stocks/2471.json"},{"revision":"ef7964340fb73f8b1bd3a13ce1e1c126","url":"tw_stocks/2468.json"},{"revision":"f1b03ce778d43c27510f77c6e03c7c59","url":"tw_stocks/2467.json"},{"revision":"afe6ac051671d7d6382049fe596aae57","url":"tw_stocks/2466.json"},{"revision":"19e39c1333b7be4fb6844dcfa7304ed5","url":"tw_stocks/2465.json"},{"revision":"d044c396639d821a904aa58281a8d8f1","url":"tw_stocks/2464.json"},{"revision":"a4a2f5d355b0c2fec4a7bbe86b79e039","url":"tw_stocks/2462.json"},{"revision":"17fe4e113d45dd969c2ec835c704cafa","url":"tw_stocks/2461.json"},{"revision":"0e7e1695b797737c3b7923fc541492c6","url":"tw_stocks/2460.json"},{"revision":"cce1cfb5de09aa18dbf59833a3903dd3","url":"tw_stocks/2459.json"},{"revision":"99223902cb7159485c526f7619a57d4d","url":"tw_stocks/2458.json"},{"revision":"cfe24cad70fe671f1d49e1ad47444d86","url":"tw_stocks/2457.json"},{"revision":"b9f490e7c020b31fed9e30ac5981fd73","url":"tw_stocks/2455.json"},{"revision":"b0e6fda59190479e0cef91bebb102bf4","url":"tw_stocks/2454.json"},{"revision":"992fec662ab5ed3798a65a9f4dfbd36b","url":"tw_stocks/2453.json"},{"revision":"f0b24199ce961f5c7f3fe8f2fb58a2cf","url":"tw_stocks/2451.json"},{"revision":"750ea0b9cc5bdf6a2d4e20273a93abf2","url":"tw_stocks/2450.json"},{"revision":"d77bee85c2d9bd9809333e1b858f87c2","url":"tw_stocks/2449.json"},{"revision":"5bec0518d718dc3f3da2558ad5c86878","url":"tw_stocks/2444.json"},{"revision":"f02525c45d085069f6f91e4ef4ec4ddb","url":"tw_stocks/2442.json"},{"revision":"06ac7e259e62341096f8ccfc75b8d814","url":"tw_stocks/2441.json"},{"revision":"327b7b6a865c1f62481d3dac6a8c3293","url":"tw_stocks/2440.json"},{"revision":"7fb9ed818dea0b168b8ef506a57cd709","url":"tw_stocks/2439.json"},{"revision":"c81cab14f551ba1f633e9431ced54c29","url":"tw_stocks/2438.json"},{"revision":"535643484ec2bdcb74dda51337fcb61b","url":"tw_stocks/2436.json"},{"revision":"85205c52d0bbf9be283d545d7f7aaeb7","url":"tw_stocks/2434.json"},{"revision":"7d4dd89b18ffcb699056c769ed936d74","url":"tw_stocks/2433.json"},{"revision":"e5e35242e372daf7ac046ee66e77a3ce","url":"tw_stocks/2431.json"},{"revision":"09918f18a68eae99a1ee28cd17d9efa1","url":"tw_stocks/2430.json"},{"revision":"a3c7c67b9edb0800074b66fb8a8c8333","url":"tw_stocks/2429.json"},{"revision":"f785df602863a40aa57d73e284f38f9e","url":"tw_stocks/2428.json"},{"revision":"231a48695479531b32ecda003c20c1fa","url":"tw_stocks/2427.json"},{"revision":"3211d80d7f09a0ec648420887e563585","url":"tw_stocks/2426.json"},{"revision":"af74968d8172752191b28eef6882fe36","url":"tw_stocks/2425.json"},{"revision":"229c1f4d23221b129bc7d53e7dee5fdc","url":"tw_stocks/2424.json"},{"revision":"01e5035f3cf1e577ef4d2102ac725f05","url":"tw_stocks/2423.json"},{"revision":"02487701cc36f4dfe9df27a650ddf1e3","url":"tw_stocks/2421.json"},{"revision":"30fa3411129c28d2019f65ef0d2f1f69","url":"tw_stocks/2420.json"},{"revision":"cec255a55a42220b5c47997eccafe6c4","url":"tw_stocks/2419.json"},{"revision":"4cc104c90ddae98025fb4f44062d4239","url":"tw_stocks/2417.json"},{"revision":"7615d37ca4cf7365715d708e69c0149c","url":"tw_stocks/2415.json"},{"revision":"e87e55160aeba73320e4e226e0a02fcc","url":"tw_stocks/2414.json"},{"revision":"d5c3b846258446e27efb62283c130af0","url":"tw_stocks/2413.json"},{"revision":"7929f43f3f077bf21cf291d2c25bbe3b","url":"tw_stocks/2412.json"},{"revision":"d0269e123bb5b90dcd2d92fe42c3a0d5","url":"tw_stocks/2409.json"},{"revision":"9fec7eaa6e869cbe8a7ed4fe6ed41b08","url":"tw_stocks/2408.json"},{"revision":"3162d220d71305bbba3f9cf01140cdd4","url":"tw_stocks/2406.json"},{"revision":"f1d2a1a2bb5cfed9c622a867b0f72b2e","url":"tw_stocks/2405.json"},{"revision":"3c0dbf7068e0d9cd4dfc47629711602b","url":"tw_stocks/2404.json"},{"revision":"ca33a0ed7cbca83630ac3f72ea6f2205","url":"tw_stocks/2402.json"},{"revision":"6b486dca0c7feb169ef5937ae0b97c1e","url":"tw_stocks/2401.json"},{"revision":"e8179b0fd273053168d1f1c52ee7f605","url":"tw_stocks/2399.json"},{"revision":"4aa3ab0a9f467e436fb15cf7caf6852c","url":"tw_stocks/2397.json"},{"revision":"6407300a34fb4e51d07896dac8619898","url":"tw_stocks/2395.json"},{"revision":"b59e393aa1186e9e6fcaa3f5881d59ed","url":"tw_stocks/2393.json"},{"revision":"253226e05b48d22a19dc3cd14643a161","url":"tw_stocks/2392.json"},{"revision":"ca1ce1d74b2f8f3946bfc8bdd57a866d","url":"tw_stocks/2390.json"},{"revision":"b1d0cafddcc70c9875a1383d7bafd9e5","url":"tw_stocks/2388.json"},{"revision":"5f1a37942ca18646a53467d4ff74bf3d","url":"tw_stocks/2387.json"},{"revision":"d92375c122119f444737b6d693f61242","url":"tw_stocks/2385.json"},{"revision":"824c5e6da01dc3f25e7ab4c3ceaa2c0e","url":"tw_stocks/2383.json"},{"revision":"4e519f0087fca16dfe5edb5f766150da","url":"tw_stocks/2382.json"},{"revision":"9b13232807ea5c07fcdd816dc15d5466","url":"tw_stocks/2380.json"},{"revision":"0c97eb344e6736b80f5efe2436c9a64b","url":"tw_stocks/2379.json"},{"revision":"05743f802bea2e0c3bf97067b93138d5","url":"tw_stocks/2377.json"},{"revision":"d0fd7fe426bc08f9be9f40e8bad1046e","url":"tw_stocks/2376.json"},{"revision":"ac97ff1a5cb66ad4ed3279a240856037","url":"tw_stocks/2375.json"},{"revision":"a0be0ee24d1e2648f3638a18799ed365","url":"tw_stocks/2374.json"},{"revision":"b19229190b0ce0332a56464f9babaa2b","url":"tw_stocks/2373.json"},{"revision":"2bcf7024a78c5d9a35950390f81acc3e","url":"tw_stocks/2371.json"},{"revision":"644cb35fc4e50f34ab0f559d3f02f46b","url":"tw_stocks/2369.json"},{"revision":"b13929eae592693ebd3958f150ef575c","url":"tw_stocks/2368.json"},{"revision":"4ef5e4f5b9881fdff2d1111bdbabdf3f","url":"tw_stocks/2367.json"},{"revision":"7dc1e02e77bfd2428d16e45c57711555","url":"tw_stocks/2365.json"},{"revision":"a436be47a02a51dfc408166f30d67943","url":"tw_stocks/2364.json"},{"revision":"073c24f640a019bc3213c569589405c3","url":"tw_stocks/2363.json"},{"revision":"ff854d796f8c24bcb56d537a2187e275","url":"tw_stocks/2362.json"},{"revision":"e953033d5344625162071a6c6525fa93","url":"tw_stocks/2360.json"},{"revision":"63446d820688b422476d908d76199761","url":"tw_stocks/2359.json"},{"revision":"ab56c228bc0db6f9b10368e530515c49","url":"tw_stocks/2357.json"},{"revision":"ae2e690745fff3c4f11b126b261d57dd","url":"tw_stocks/2356.json"},{"revision":"753c732ca74fa1ea6ad488776e932882","url":"tw_stocks/2355.json"},{"revision":"52400d13362bb3631f7b4fb906ec0682","url":"tw_stocks/2354.json"},{"revision":"3d4776d2417afd7a7d88772f140a017b","url":"tw_stocks/2353.json"},{"revision":"54bf030717b5d92be2953d2501c23e05","url":"tw_stocks/2352.json"},{"revision":"9fb6492afddac9a9b1d2bc232ed5e4d3","url":"tw_stocks/2351.json"},{"revision":"214423d9e744fc49bf7d95b0c6eb8ac0","url":"tw_stocks/2349.json"},{"revision":"19a694846fa178f8a0f09ab22b92579c","url":"tw_stocks/2348.json"},{"revision":"94bf32ff0200241950ad93b240ca6fbc","url":"tw_stocks/2347.json"},{"revision":"55c59a5945f785b7d779e0170173845a","url":"tw_stocks/2345.json"},{"revision":"3aeb8c714384af3a405880bff6795f88","url":"tw_stocks/2344.json"},{"revision":"efd20a4cdba4439a36e8d66a2aaf60f7","url":"tw_stocks/2342.json"},{"revision":"00c9d83270b2eacb31f9dc9267e9ee9d","url":"tw_stocks/2340.json"},{"revision":"264829f33304da060d49bf28e6abb5f1","url":"tw_stocks/2338.json"},{"revision":"99c88a99e5eed340ac42e23832e6c359","url":"tw_stocks/2337.json"},{"revision":"01db7c1b09ab720fa58d523f25af3010","url":"tw_stocks/2332.json"},{"revision":"b227446715676dcd605d8525e75c09ef","url":"tw_stocks/2331.json"},{"revision":"edd6cec38799ac3f693c8e5ba17fbf33","url":"tw_stocks/2330.json"},{"revision":"d45a0ccdef03125ebcae662b25a4deee","url":"tw_stocks/2329.json"},{"revision":"ae7babbf3ef55d78c312347b453d076f","url":"tw_stocks/2328.json"},{"revision":"f6b9fc3bc9d7d06547f214060b6dff8f","url":"tw_stocks/2327.json"},{"revision":"3391dde76739ce78f5909e50725076ae","url":"tw_stocks/2324.json"},{"revision":"55325f02db6546d0a13ef366eef3abee","url":"tw_stocks/2323.json"},{"revision":"372eda92a261aafd87912f5bc310c912","url":"tw_stocks/2321.json"},{"revision":"6c854c3f1358941bf340eed72144833b","url":"tw_stocks/2317.json"},{"revision":"c8ab33b09f77f33178c9285d18566732","url":"tw_stocks/2316.json"},{"revision":"754f21abb68d3f561a4d40be9304d307","url":"tw_stocks/2314.json"},{"revision":"63cb05906cd78ba7b684ca739994f3b4","url":"tw_stocks/2313.json"},{"revision":"4e69eb0308ee064b5fe2a0f7bee4d42d","url":"tw_stocks/2312.json"},{"revision":"01c1e501268f5dd6470c0d3714975fd1","url":"tw_stocks/2308.json"},{"revision":"4ed4399c9bb9be58cf002072f6c53925","url":"tw_stocks/2305.json"},{"revision":"4f22284e34b0a1c90789bb23d76d621f","url":"tw_stocks/2303.json"},{"revision":"b5c6d01287342f166325106229826b45","url":"tw_stocks/2302.json"},{"revision":"ff81808bfef3adbe070c66e5999d2531","url":"tw_stocks/2301.json"},{"revision":"e762c142b32eee22291234140026dd93","url":"tw_stocks/2250.json"},{"revision":"2e6b5798573c995b57ea2c94071b3467","url":"tw_stocks/2248.json"},{"revision":"1d86db994e6c3e0ceacc86b5a33015dc","url":"tw_stocks/2247.json"},{"revision":"f0de68a4e5605cf1272e8aa1971f9831","url":"tw_stocks/2243.json"},{"revision":"b2da5ce369f144defcbf6259c7e77192","url":"tw_stocks/2241.json"},{"revision":"6858778d191488e5b075ffdc97d990cb","url":"tw_stocks/2239.json"},{"revision":"9c49a30f52b9858067e6bd154bd91cf2","url":"tw_stocks/2236.json"},{"revision":"5c52cdf3c99c62deb573aa50db9dbc38","url":"tw_stocks/2233.json"},{"revision":"29973543d3eccfd0e9dafbd206468d70","url":"tw_stocks/2231.json"},{"revision":"9cca21361861e8ec6a850c8545088de0","url":"tw_stocks/2228.json"},{"revision":"504cd45cd1cd94b4b19ea0b6828e1ab0","url":"tw_stocks/2227.json"},{"revision":"2d5ee97f3342d49b69ebcc66d956ca99","url":"tw_stocks/2211.json"},{"revision":"133fe90fbf24ce9d37ba2651fe902832","url":"tw_stocks/2208.json"},{"revision":"a76437527e7c2e1cb03a90dbfa771c32","url":"tw_stocks/2207.json"},{"revision":"b1559819226f80523fae71054f064b58","url":"tw_stocks/2206.json"},{"revision":"119f3ee9248da645a0835e0e782cecb7","url":"tw_stocks/2204.json"},{"revision":"e6698c06730fd8385d31809c8d0a538e","url":"tw_stocks/2201.json"},{"revision":"2db6cf64db25699a336dc42fa49f68b3","url":"tw_stocks/2115.json"},{"revision":"5a49dfb0488e03e93bf0fe4e1d8a06bf","url":"tw_stocks/2114.json"},{"revision":"ab3a9d3a0d44471496696e5a59e3c566","url":"tw_stocks/2109.json"},{"revision":"afd43662501dc09534eff650770650dc","url":"tw_stocks/2108.json"},{"revision":"d6a30df160021d44b61df01d80ade003","url":"tw_stocks/2107.json"},{"revision":"52fa8c7b0c144bbb213c43d6b3d1a072","url":"tw_stocks/2106.json"},{"revision":"4e135586b05c1a6a0de761f1f8cc8e60","url":"tw_stocks/2105.json"},{"revision":"71b61be52b6938c546bf1fc1d1bf77dd","url":"tw_stocks/2104.json"},{"revision":"90d3271f9915357fc5599d3c10774630","url":"tw_stocks/2103.json"},{"revision":"a7e0bf4bedcbbcfadf42559d4569d5f6","url":"tw_stocks/2102.json"},{"revision":"a8e0ec4534e040468af6ae0c4273d25b","url":"tw_stocks/2101.json"},{"revision":"e690e60331e7ce25c2e539556de52554","url":"tw_stocks/2072.json"},{"revision":"5a09f1c02764ec696536ef2936d7428d","url":"tw_stocks/2069.json"},{"revision":"89395aff61cb65f87c6bb349e6791a8c","url":"tw_stocks/2062.json"},{"revision":"1a5b5f350679ef2b16689f7cc193ef9d","url":"tw_stocks/2059.json"},{"revision":"f3dcb33342e8a22a6da85699c94b257b","url":"tw_stocks/2049.json"},{"revision":"ddd1dc77a43744214ee73ccd0f35416c","url":"tw_stocks/2038.json"},{"revision":"c65d06666d848a9737b6f6d9908cc815","url":"tw_stocks/2034.json"},{"revision":"73ff4c9679bd7dbcd66867b37c90cf5b","url":"tw_stocks/2033.json"},{"revision":"5d51c0e1c923a8b158049b2bc115f45a","url":"tw_stocks/2032.json"},{"revision":"49b49de925ab2e2fbb70a85b4f0f40b4","url":"tw_stocks/2031.json"},{"revision":"5fe63a91ceb2b042be670df7c382872e","url":"tw_stocks/2030.json"},{"revision":"d3d1ac5fbf5a5587ae6aac3221fb4014","url":"tw_stocks/2029.json"},{"revision":"9ccabf6b51b796f2ad87c956b2f3de57","url":"tw_stocks/2028.json"},{"revision":"fbff99a690f3475b087f90ec8c7f2099","url":"tw_stocks/2027.json"},{"revision":"bb016008e428ac8cf7b38bb8eddfd42f","url":"tw_stocks/2025.json"},{"revision":"3c69ccffb352251fd961fae3cb8bee21","url":"tw_stocks/2024.json"},{"revision":"b84f10546a4ec157b616df38739a7ebb","url":"tw_stocks/2023.json"},{"revision":"46b389f929a730cf9300b07a1e3221d9","url":"tw_stocks/2022.json"},{"revision":"9aa9b3da8d08852f301b9691609c70fd","url":"tw_stocks/2020.json"},{"revision":"c2e192a24b6a5f09f6b0f776df1b56de","url":"tw_stocks/2017.json"},{"revision":"91fc2c9f1b2cfcbaaef31f88bcf2501b","url":"tw_stocks/2015.json"},{"revision":"f82630f73742add0591d049bb4dad66e","url":"tw_stocks/2014.json"},{"revision":"dd8b91cf2d5b46eda4cb260c832c4c3e","url":"tw_stocks/2013.json"},{"revision":"784bcad26069f6df92e52dd932e6ac19","url":"tw_stocks/2012.json"},{"revision":"587569dc832684d8d792ad023cbce9b5","url":"tw_stocks/2010.json"},{"revision":"f9775f6b7db2f8db53c84bde5ceb5ec3","url":"tw_stocks/2009.json"},{"revision":"a0ec1986bdb5cc1e274f2b8a0d61efbc","url":"tw_stocks/2008.json"},{"revision":"beabffd0a794005fd87e1a582e0af99f","url":"tw_stocks/2007.json"},{"revision":"d81a5ac06f9e4e27420939a4d47933cb","url":"tw_stocks/2006.json"},{"revision":"aafc0bfaaea29a3f6a58ffcd3be86190","url":"tw_stocks/2002.json"},{"revision":"72cf6363b66f6d71f9da6012249e2089","url":"tw_stocks/1909.json"},{"revision":"9c140f508572a5e51ada3cc31578fb4c","url":"tw_stocks/1907.json"},{"revision":"ce477eb34ac8c63816bbdf8a201b0928","url":"tw_stocks/1906.json"},{"revision":"dad675d6ef1998ee211715619b0af26f","url":"tw_stocks/1905.json"},{"revision":"213e28e977ff1d5d9a190f3dfe12d658","url":"tw_stocks/1904.json"},{"revision":"e9a39f9b3acfefa78452c5e845daaadd","url":"tw_stocks/1903.json"},{"revision":"3ac87f0bd326eb70beb6844d092e3879","url":"tw_stocks/1817.json"},{"revision":"298bb33afd3fc74829b376e639be2fa0","url":"tw_stocks/1810.json"},{"revision":"6f56c9fba4f7f0f5aa07550bc024fb4b","url":"tw_stocks/1809.json"},{"revision":"6391524f3f914821f49207d17083209b","url":"tw_stocks/1808.json"},{"revision":"c5f34808315806f6ce8bede377d3d6a8","url":"tw_stocks/1806.json"},{"revision":"5b05bb25f68cb973f6b7cc47c25e5d14","url":"tw_stocks/1805.json"},{"revision":"d62dd046ad3b60e5b847c1b5c525c540","url":"tw_stocks/1802.json"},{"revision":"9463fa7d687be74868002c5de64e9844","url":"tw_stocks/1795.json"},{"revision":"c9b14bbb1996dbc623753f76428eebcb","url":"tw_stocks/1789.json"},{"revision":"177afa41c40f7d80fb7461c9c95fae84","url":"tw_stocks/1786.json"},{"revision":"d3ba483711e5dd1e931d4b534f0fd174","url":"tw_stocks/1783.json"},{"revision":"92186f675980cf8181ff43878a1656d7","url":"tw_stocks/1776.json"},{"revision":"aa8142425d7be8f9c71608bd35f529b8","url":"tw_stocks/1773.json"},{"revision":"2ce7ae7b0dea4b68657ea5b95e1fe6b5","url":"tw_stocks/1762.json"},{"revision":"c8adb6da2717fead128e4e9b393d990b","url":"tw_stocks/1760.json"},{"revision":"2edd73a20ce11e51e43b6cd78b350769","url":"tw_stocks/1752.json"},{"revision":"aaeb7cd95029767d54c1774bb68e1ef3","url":"tw_stocks/1737.json"},{"revision":"81acde882f8cbe11eacbca0ff00942e7","url":"tw_stocks/1736.json"},{"revision":"af98d18eb7e522f689549fae5aa73e05","url":"tw_stocks/1735.json"},{"revision":"02349b122c60c743c851eef5f77e2034","url":"tw_stocks/1734.json"},{"revision":"e17395a2c52a6406d4bfe6c024175891","url":"tw_stocks/1733.json"},{"revision":"ffb9c50c96550c8bd8fd251897921d28","url":"tw_stocks/1732.json"},{"revision":"19533887877983cfaaa584add5a6cc9b","url":"tw_stocks/1731.json"},{"revision":"559239e507703a0f8344dd0df7f600ff","url":"tw_stocks/1730.json"},{"revision":"03f0b5de90a7e4b0d12041c16ae696ff","url":"tw_stocks/1727.json"},{"revision":"19e0681255636fb7d1fc3d7107d43336","url":"tw_stocks/1726.json"},{"revision":"9453092ebec3451108d69a9aea5a8807","url":"tw_stocks/1725.json"},{"revision":"e8dbc582d088238cae27e737b733fd79","url":"tw_stocks/1723.json"},{"revision":"8b59c4352363ede8ca1ef4ea26408f0e","url":"tw_stocks/1722.json"},{"revision":"ea4147b930401210a3144bd84a8c1f74","url":"tw_stocks/1721.json"},{"revision":"748c6eaa61f4f5548c2890b7c9430f84","url":"tw_stocks/1720.json"},{"revision":"8b4ef6e1eb78e774cee4395f30cc9d26","url":"tw_stocks/1718.json"},{"revision":"0df71d9475239df40906c6a7e7949537","url":"tw_stocks/1717.json"},{"revision":"7b1b19eae11fe4a3b7ff9c7a95800f6e","url":"tw_stocks/1714.json"},{"revision":"e689ffe5fb964d1a617eae19d0b75e2a","url":"tw_stocks/1713.json"},{"revision":"d510c2d348373e254c1d446829e9a138","url":"tw_stocks/1712.json"},{"revision":"ee28a0ae0e0a5fb56d4b62fd0cfe6c7b","url":"tw_stocks/1711.json"},{"revision":"9e391868c6ca18c7d4e1cf98b2d2847d","url":"tw_stocks/1710.json"},{"revision":"dcadd97c8341fb3872fd03a59fabc070","url":"tw_stocks/1709.json"},{"revision":"524219d0f972fd9b5f99b7aa50c6caf0","url":"tw_stocks/1708.json"},{"revision":"8f91dcbc050130109865b46bc5881dc6","url":"tw_stocks/1707.json"},{"revision":"492e0135829fb6e6e12156883df9d772","url":"tw_stocks/1702.json"},{"revision":"c5ab2319284c4dd8d7d28719c42d9242","url":"tw_stocks/1626.json"},{"revision":"0f6206f2b00bb078d794fb25f3b47a38","url":"tw_stocks/1623.json"},{"revision":"484eaee4ebe0ea2f2fccff80bb9cf202","url":"tw_stocks/1618.json"},{"revision":"ae5d153f3a43f6363ff432e956b5ea72","url":"tw_stocks/1617.json"},{"revision":"2cd74f0a32ff44fa6ca13c26ddda28dd","url":"tw_stocks/1616.json"},{"revision":"fa60f35238db58fe9b223f69c97b9706","url":"tw_stocks/1615.json"},{"revision":"c51dda170e74f5e3ac8d878398985e6d","url":"tw_stocks/1614.json"},{"revision":"b2f6504d9906a7315a226efca2b53ef8","url":"tw_stocks/1612.json"},{"revision":"de35c450a9ac466067e36a12389f96c5","url":"tw_stocks/1611.json"},{"revision":"4992089f550591c688fbe1ff381aa122","url":"tw_stocks/1609.json"},{"revision":"0d6653074c21e2bd9d20faff4a874721","url":"tw_stocks/1608.json"},{"revision":"2b2fc5b5f939c3b533b11758cb710303","url":"tw_stocks/1605.json"},{"revision":"bd319079ceed1ef95099366e01c89c68","url":"tw_stocks/1604.json"},{"revision":"1586516f33497bd3c2cb494c98b9efb0","url":"tw_stocks/1603.json"},{"revision":"949dc2a2de729cddfd415f3b72b96f09","url":"tw_stocks/1598.json"},{"revision":"f3a7b9383f83d4aeef410152e7e49803","url":"tw_stocks/1597.json"},{"revision":"a551d25ef6fdb754ed773176702c2081","url":"tw_stocks/1590.json"},{"revision":"5e5ed5c5d573fc39796780a50f72a819","url":"tw_stocks/1589.json"},{"revision":"7c1c469d45a48fa6deab5a08ee0d9330","url":"tw_stocks/1587.json"},{"revision":"b94fa8368b17c167803b0cafb0706275","url":"tw_stocks/1583.json"},{"revision":"f3cd1d04f03dfbac003f33be47fb9397","url":"tw_stocks/1582.json"},{"revision":"d4712daa1d9a106354fad61292fe6db9","url":"tw_stocks/1568.json"},{"revision":"5751a47ca7b8c4c1b20aa34cb2d23855","url":"tw_stocks/1563.json"},{"revision":"0d74a326a65bf9e5207af748238e5aea","url":"tw_stocks/1560.json"},{"revision":"7950ad7d9e3585dfa1e0b56521247bfd","url":"tw_stocks/1558.json"},{"revision":"de6a2cfcac9b6041a23f5af09019b640","url":"tw_stocks/1541.json"},{"revision":"cda7f8e8060b09eb5e6cc1214793f929","url":"tw_stocks/1540.json"},{"revision":"964c97a5638841d38da29fc5a55a847c","url":"tw_stocks/1539.json"},{"revision":"9696b187790c62973333dba6df672c82","url":"tw_stocks/1538.json"},{"revision":"fd3e3566db9ece14eb4f81f7d271b74a","url":"tw_stocks/1537.json"},{"revision":"45b7b0ace81bb8d7af99890e1c04a223","url":"tw_stocks/1536.json"},{"revision":"c75a63801f77ba9ef88f15b68d5d4603","url":"tw_stocks/1535.json"},{"revision":"5277a64b0692421d33adfe978e77bf98","url":"tw_stocks/1533.json"},{"revision":"44e01458eb4671c5c4fea87801910fa8","url":"tw_stocks/1532.json"},{"revision":"4afc9fadebdf4f035b94621c6d378060","url":"tw_stocks/1531.json"},{"revision":"199b39b82769697cee7ef9b8a0a249df","url":"tw_stocks/1530.json"},{"revision":"7c593ae70697682a8528092b956d5739","url":"tw_stocks/1529.json"},{"revision":"51aec1291802f55398e46552d7cf5f47","url":"tw_stocks/1528.json"},{"revision":"00fb3e2883eeb1d0bffbb07972668644","url":"tw_stocks/1527.json"},{"revision":"974a0b78390db3938e9aed28766738ab","url":"tw_stocks/1526.json"},{"revision":"db64a0bfd14c58b34bb6aac2c99998b2","url":"tw_stocks/1525.json"},{"revision":"940f4dc13401bc501a7db7ab8af08d17","url":"tw_stocks/1524.json"},{"revision":"9df65bd8d88d01ce51235917651f4b1b","url":"tw_stocks/1522.json"},{"revision":"e5be3523f86ebddc136b6ec3f88bc0c7","url":"tw_stocks/1521.json"},{"revision":"c8d47be6c564225d8ef4a6f740dc70a7","url":"tw_stocks/1519.json"},{"revision":"e0b3b0e6e0d3c2637268fe09522fc439","url":"tw_stocks/1517.json"},{"revision":"f0e286f11875f6552eaf67ed46505d68","url":"tw_stocks/1516.json"},{"revision":"352272d18c749d9d2387b23186526144","url":"tw_stocks/1515.json"},{"revision":"04f9b70d5593feddc81364b14eb413a1","url":"tw_stocks/1514.json"},{"revision":"b56f59df07941d883db2b35eed8111af","url":"tw_stocks/1513.json"},{"revision":"2083447b6cfdd942d75f75f5336b496d","url":"tw_stocks/1512.json"},{"revision":"151a6bc789c9f1d3ca7d929344819e7d","url":"tw_stocks/1506.json"},{"revision":"ae1ad10406b2ef4e8cd802fd32bfa8cd","url":"tw_stocks/1504.json"},{"revision":"c079902e348b10a95019bf17c5b3db86","url":"tw_stocks/1503.json"},{"revision":"c4cbfd544e9f240892dabfad1cd101f0","url":"tw_stocks/1477.json"},{"revision":"650851c135ebaf3a11f3b7b45ad93ad2","url":"tw_stocks/1476.json"},{"revision":"d02b36ff0c1245e5d4dd803d87b0cf26","url":"tw_stocks/1475.json"},{"revision":"911647a412a8cdad92d6d107c9cde1cf","url":"tw_stocks/1474.json"},{"revision":"1df57361be95479b47e38ca60f0d9a1a","url":"tw_stocks/1473.json"},{"revision":"c7e9d149d41212e11f7274b3c3da0d31","url":"tw_stocks/1472.json"},{"revision":"20d12af99033554deb5d97cc426fff05","url":"tw_stocks/1471.json"},{"revision":"0594653a28a80e49937535e4f9f61b9f","url":"tw_stocks/1470.json"},{"revision":"16b27abb9318441d2db6b9c18182ccb1","url":"tw_stocks/1468.json"},{"revision":"5227d0cbc866be7960a996557db5722d","url":"tw_stocks/1467.json"},{"revision":"77bb934d9c477a7680f1d8c7c1c6391e","url":"tw_stocks/1466.json"},{"revision":"0387af8f98cc851a5238a6b19df2fbdd","url":"tw_stocks/1465.json"},{"revision":"c7896b52e0715c4d3dc9044684619259","url":"tw_stocks/1464.json"},{"revision":"132c823f04d036187e0c23e08fbd16b9","url":"tw_stocks/1463.json"},{"revision":"74b72d0f3afd37d0f542858a33e50821","url":"tw_stocks/1460.json"},{"revision":"75d7204fcd544dbd7267be7c9a248d4c","url":"tw_stocks/1459.json"},{"revision":"1cd08d7aa16f036398150a4c31608582","url":"tw_stocks/1457.json"},{"revision":"9784bb3c30f2fff83c921e3d29013774","url":"tw_stocks/1456.json"},{"revision":"d1d449f0e5f78d22acd98be57ab3c946","url":"tw_stocks/1455.json"},{"revision":"617b9f129ccaa63f419f2579d1f9e378","url":"tw_stocks/1454.json"},{"revision":"20cb08978eb1f98c88272058f3619b48","url":"tw_stocks/1453.json"},{"revision":"cb83fd434d2bc21c15723698fd87c41b","url":"tw_stocks/1452.json"},{"revision":"fc082315ad0be0ae6ab009f8ab82344f","url":"tw_stocks/1451.json"},{"revision":"8be6e3b3e1a70a4289b88d8788878753","url":"tw_stocks/1449.json"},{"revision":"746c0921a28812a587ea78a8120a2c37","url":"tw_stocks/1447.json"},{"revision":"f9a254e9dff1e0246f6e07f634bd9632","url":"tw_stocks/1446.json"},{"revision":"35c5e9310e7d3b6411e1c2183b1c87db","url":"tw_stocks/1445.json"},{"revision":"77be85fb8768fa7137c3438b5f5597d5","url":"tw_stocks/1444.json"},{"revision":"c07593550bd3f114a7e3b0a99158a618","url":"tw_stocks/1443.json"},{"revision":"26cdfbfc3f4972609e8c5d21300695d5","url":"tw_stocks/1442.json"},{"revision":"ea0bf00bd6208231ced6330f88e82e4a","url":"tw_stocks/1441.json"},{"revision":"f8e9967ea759aeecf9e87f71cabbe376","url":"tw_stocks/1440.json"},{"revision":"e0902cd6591773b53333dc1a9ef337a4","url":"tw_stocks/1439.json"},{"revision":"344f1cb9bc0447d09b97e79d444df83f","url":"tw_stocks/1438.json"},{"revision":"d48046de7e62ed38c13e3e5d680bed02","url":"tw_stocks/1437.json"},{"revision":"8a41ebc929af7c1cf0a67c23ea59b689","url":"tw_stocks/1436.json"},{"revision":"eeff16ed702eff454f6ea03b53a131d1","url":"tw_stocks/1435.json"},{"revision":"64a2ec1904e285aacdef7aba17f65782","url":"tw_stocks/1434.json"},{"revision":"2322083207a884e0598363da67f0e475","url":"tw_stocks/1432.json"},{"revision":"4a412f0b04137a27e831b4a5860b8989","url":"tw_stocks/1423.json"},{"revision":"63b7346d3b9dddb00a8cb0b19aa0d337","url":"tw_stocks/1419.json"},{"revision":"df7e90882d5a8236c391e824af2f2a60","url":"tw_stocks/1418.json"},{"revision":"8af56ecb203893f74b80a8c84c714a4c","url":"tw_stocks/1417.json"},{"revision":"622dd9286c957cf4bb5c215a66d296bf","url":"tw_stocks/1416.json"},{"revision":"06e24fb41297b5d5f6b100517e88e299","url":"tw_stocks/1414.json"},{"revision":"46ac38a9c41257cb3103883dbcf03246","url":"tw_stocks/1413.json"},{"revision":"e96e87c5b9373eebd67724c561b0aeeb","url":"tw_stocks/1410.json"},{"revision":"c7228ed6aea6db99f98e04bd25c0a633","url":"tw_stocks/1409.json"},{"revision":"843c3f009778a96936ba0b4c34d2bace","url":"tw_stocks/1402.json"},{"revision":"a24e68788dbb1ce5e9f660fa2733cc42","url":"tw_stocks/1342.json"},{"revision":"82e6e17b904a60beccb57a4c2ab26931","url":"tw_stocks/1341.json"},{"revision":"5f4508311d1ed8a1a49ed46ebeac095b","url":"tw_stocks/1340.json"},{"revision":"a5a7e9cb77ff251a7687c8c99925c38d","url":"tw_stocks/1339.json"},{"revision":"e3ce759a420b2dadb1a7248248a3dd7e","url":"tw_stocks/1338.json"},{"revision":"0c271bb0ac89018f06b424b5e0798e23","url":"tw_stocks/1337.json"},{"revision":"d2b269a3ec0564f12cd5618d219f36ea","url":"tw_stocks/1326.json"},{"revision":"4947e0b6cc4b9cf69bf12a4e3641bb1e","url":"tw_stocks/1325.json"},{"revision":"4789e82dc380a8635c230309924ec4f9","url":"tw_stocks/1324.json"},{"revision":"617356d55c2dd9c4e4efd636bdd7d3b2","url":"tw_stocks/1323.json"},{"revision":"fe9c7533d3d6214345935a566423843e","url":"tw_stocks/1321.json"},{"revision":"fa976127850cfb1fe699615bc689ee79","url":"tw_stocks/1319.json"},{"revision":"ba542460a3552e94bcba225ed4d62f99","url":"tw_stocks/1316.json"},{"revision":"5cdcb5a539bf82ff4ca4a970a7babe5f","url":"tw_stocks/1315.json"},{"revision":"3bfbb7cadcfe26609f38a1da0c461d51","url":"tw_stocks/1314.json"},{"revision":"0f9f22322249b7c0b15845ef1ecf6f01","url":"tw_stocks/1313.json"},{"revision":"d928a9ba58eb09261d0f268914898549","url":"tw_stocks/1312.json"},{"revision":"67faeabf2893bd6f11464462369e2d91","url":"tw_stocks/1310.json"},{"revision":"8b3b6738f46c9a3a7269c86d1f8a0f61","url":"tw_stocks/1309.json"},{"revision":"011ee1cbb76521c7666eaa66f025ee45","url":"tw_stocks/1308.json"},{"revision":"d7765de2b057eca7a7511d52afa0dfee","url":"tw_stocks/1307.json"},{"revision":"53649851c6f07d2506f21b3f71e8e7d7","url":"tw_stocks/1305.json"},{"revision":"e2b6e2091c3ab540ebb14a2a07d8cf8b","url":"tw_stocks/1304.json"},{"revision":"42cb8283580a90ad543ff7a16add2ddf","url":"tw_stocks/1303.json"},{"revision":"6b8b41316cf705e36ba3957f67c7e196","url":"tw_stocks/1301.json"},{"revision":"8dfed7d6a6bbc4db5e3dd51dc9f5dc35","url":"tw_stocks/1256.json"},{"revision":"b0b6aa0a8159b317d4a19afc1834aef5","url":"tw_stocks/1236.json"},{"revision":"af8f24d335cb9e8f2641e8b64e5bfd0e","url":"tw_stocks/1235.json"},{"revision":"f673b6a0f402d161e8b0c0cdfd304e48","url":"tw_stocks/1234.json"},{"revision":"40ebab0813cea03151b8df94b50fa51f","url":"tw_stocks/1233.json"},{"revision":"2047474ff4d14dec093b1f340661862e","url":"tw_stocks/1232.json"},{"revision":"bd8495481924eb48bdf0bdf7f3a8e9e5","url":"tw_stocks/1231.json"},{"revision":"eddf8e2d005b60bf7a3905a490e13142","url":"tw_stocks/1229.json"},{"revision":"7e28283438358b263a007f653bc85df2","url":"tw_stocks/1227.json"},{"revision":"3f3928b8f2122a4453bc467863197988","url":"tw_stocks/1225.json"},{"revision":"bfde7e035e632257646de900efccc922","url":"tw_stocks/1220.json"},{"revision":"b9718f763978fb0a966f04b1399b4969","url":"tw_stocks/1219.json"},{"revision":"1f2385b734d9856a585f3fd5ae89504f","url":"tw_stocks/1218.json"},{"revision":"411d70499e8c040ca74b75554ee3aa6d","url":"tw_stocks/1217.json"},{"revision":"58a152d73e800d8d9de484620d48956c","url":"tw_stocks/1216.json"},{"revision":"eaae029f36bda7790541eee38ccef89c","url":"tw_stocks/1215.json"},{"revision":"f0efdeaf5527600909ae44e8bdfad577","url":"tw_stocks/1213.json"},{"revision":"831871dc9f6cb0c8679e089664e3db60","url":"tw_stocks/1210.json"},{"revision":"862839cb537a3b9e545d2381e732a868","url":"tw_stocks/1203.json"},{"revision":"96eccf8b49513bd881e94b10c2c3131f","url":"tw_stocks/1201.json"},{"revision":"8cb1b694e821c9ee04263f2dee69e6f6","url":"tw_stocks/1110.json"},{"revision":"0af0f063893079620e1e5f2e9c93e69e","url":"tw_stocks/1109.json"},{"revision":"26495590c57a80fe516465cf89259cb4","url":"tw_stocks/1108.json"},{"revision":"f426b654a908169a7f14709f42a757c6","url":"tw_stocks/1104.json"},{"revision":"d98a0f0b2087b37eff9e113e63e86bfc","url":"tw_stocks/1103.json"},{"revision":"0cd89bc6e49f0d9cc6d4a84caa625c6a","url":"tw_stocks/1102.json"},{"revision":"010729f25e7acf37de9d7e365291cc21","url":"tw_stocks/1101.json"},{"revision":"d4bb21009533d2c4204afc4bb65d0e81","url":"tw_stocks/00999A.json"},{"revision":"17bbebaff4635dba0c317dbf3968aeff","url":"tw_stocks/00997A.json"},{"revision":"47a2b58970dd1f061f14c249a4644842","url":"tw_stocks/00996A.json"},{"revision":"1628033bd6ff404e7a2d0e9df0773cce","url":"tw_stocks/00995A.json"},{"revision":"24f972e377f8c0eeed5b9b4f07b7273f","url":"tw_stocks/00994A.json"},{"revision":"144bbcdf46284c79f1625af5c48b44c1","url":"tw_stocks/00993A.json"},{"revision":"50c0a0bbe033a5e5fed5a520b8fc57fc","url":"tw_stocks/00992A.json"},{"revision":"6cd40c9672e5c10cb585bb9ab436de2c","url":"tw_stocks/00991A.json"},{"revision":"8e41eafc8e05741720f538e939fd714a","url":"tw_stocks/00990A.json"},{"revision":"bf8eed133e23e8683087c2ffc9823791","url":"tw_stocks/00989A.json"},{"revision":"7c14fb5d7cfc12feb480b7155e7f9ad3","url":"tw_stocks/00988A.json"},{"revision":"bb013f2a88b6bd8b276c01c05e0d5169","url":"tw_stocks/00987A.json"},{"revision":"3045903aa290478de291584e2ca539a2","url":"tw_stocks/00986A.json"},{"revision":"533fb0fcb1a8ca00a807bb229115a783","url":"tw_stocks/00985B.json"},{"revision":"0f1299128ab7586a304237febabbb533","url":"tw_stocks/00985A.json"},{"revision":"28e1f98892172e40c11e3a8517777d2b","url":"tw_stocks/00984D.json"},{"revision":"a09dff37fd5ff47afae4d8d6a273ac19","url":"tw_stocks/00984A.json"},{"revision":"57741a82ceae8eddf849fd8c5c555a45","url":"tw_stocks/00983D.json"},{"revision":"cd695b5fe1391c3cb111c0495b777bc1","url":"tw_stocks/00983A.json"},{"revision":"9768e118c904859abb3c67a7e04e0209","url":"tw_stocks/00982T.json"},{"revision":"a5822065b61616e9dea5c8ba0210111a","url":"tw_stocks/00982D.json"},{"revision":"751c9567082e021c8dbe472a21a938bd","url":"tw_stocks/00982A.json"},{"revision":"fd75e19820a43d5703bd74271368c11a","url":"tw_stocks/009820.json"},{"revision":"cb2cc806a801ce1bd031c1861cd3f080","url":"tw_stocks/00981T.json"},{"revision":"400bd77df0feec69963673feb169003a","url":"tw_stocks/00981A.json"},{"revision":"8505f49e78dae40a9d840149c687f90c","url":"tw_stocks/009819.json"},{"revision":"4fb7523c394db067f82d6e2657a59e14","url":"tw_stocks/009818.json"},{"revision":"890e3bb97efc4d445e0e9d3d7dee3146","url":"tw_stocks/009817.json"},{"revision":"0a1eeb543f3ec0193f3428e9bad5c5da","url":"tw_stocks/009816.json"},{"revision":"e68bbedb61ebb5d1852083cc64683354","url":"tw_stocks/009813.json"},{"revision":"fa4983d43fb5a539aafec5f46bbf4492","url":"tw_stocks/009812.json"},{"revision":"e1b9ef6533e00969b1c38c87f24dc41f","url":"tw_stocks/009811.json"},{"revision":"1008c6e2880a1527fc9b0f0a6625a3c6","url":"tw_stocks/009810.json"},{"revision":"83f8ed3a66fe9e7747b75e151d19832e","url":"tw_stocks/00980A.json"},{"revision":"45108cd02e706de251d2f4ff7c6a7a11","url":"tw_stocks/009809.json"},{"revision":"516b141c91e214f9936a849eb4a27b29","url":"tw_stocks/009808.json"},{"revision":"4a30717afd29aeeb552140581926bb1d","url":"tw_stocks/009805.json"},{"revision":"0f4ce431021099efdd458d8b52701d0c","url":"tw_stocks/009804.json"},{"revision":"3b2c09c32d7b4768124602ab6ec1a965","url":"tw_stocks/009803.json"},{"revision":"2aa42e17e8cddb91593724fa03dd0b6b","url":"tw_stocks/009802.json"},{"revision":"6697f8f0f618c8b72cbff656f0235021","url":"tw_stocks/009801.json"},{"revision":"b0ab0dd9aefba8eb734de640a37017a4","url":"tw_stocks/009800.json"},{"revision":"9d80f615e6c2d65558e2571007d7d6fd","url":"tw_stocks/00972.json"},{"revision":"d3c098cacb6b2ec9440776e8c127a2d1","url":"tw_stocks/00971.json"},{"revision":"f50db906ea05b3c6665eef3ffd4fd0ad","url":"tw_stocks/00965.json"},{"revision":"4de8b0e8bd4b69e304958e787b103499","url":"tw_stocks/00964.json"},{"revision":"92033c5331b1170a3f5c90c476f6f644","url":"tw_stocks/00963.json"},{"revision":"051d4db43f549ee5e132e96eff436025","url":"tw_stocks/00962.json"},{"revision":"7a0d34193609bc141f43875e60ceb1ff","url":"tw_stocks/00961.json"},{"revision":"04349ef003c67a27106c71f427272807","url":"tw_stocks/00960.json"},{"revision":"e181e703ecd1e9d67544e235802870a0","url":"tw_stocks/00956.json"},{"revision":"e261bd489220d1312d23d7905f8a41cb","url":"tw_stocks/00954.json"},{"revision":"fe97b86c7c93270e3f3eada1b461d0e0","url":"tw_stocks/00953B.json"},{"revision":"ece11de7c6c79b5d33eb1b40a0948d1b","url":"tw_stocks/00952.json"},{"revision":"0e8672d16414c72126cbb9fed7644308","url":"tw_stocks/00951.json"},{"revision":"2cf7bf9021775fcf65cbdd0e14763a22","url":"tw_stocks/00949.json"},{"revision":"da020edece73d2b6592bc0d277fef750","url":"tw_stocks/00947.json"},{"revision":"c9b6a1a9012493c728e93ca81e5ef17c","url":"tw_stocks/00946.json"},{"revision":"36490024b42c90dafc00d2794593b5b2","url":"tw_stocks/00945B.json"},{"revision":"8e255f02643303ed94c34a8aff39eaa0","url":"tw_stocks/00944.json"},{"revision":"428daf04be4c0db553bd81e166706441","url":"tw_stocks/00943.json"},{"revision":"af3bc25c0624f4e7e8e438d10014ceb4","url":"tw_stocks/00941.json"},{"revision":"19c394cd9938fbc597c7de8a8cd37769","url":"tw_stocks/00940.json"},{"revision":"d4d782ab93b9c3d14351c4ecfd392f3a","url":"tw_stocks/00939.json"},{"revision":"2352690790bb510e1be2e38c706edb14","url":"tw_stocks/00938.json"},{"revision":"910bbe48fc6610e67725c63eeee3e43a","url":"tw_stocks/00936.json"},{"revision":"b2f93dabb7165c6a14af1e3e3a249c3a","url":"tw_stocks/00935.json"},{"revision":"0901d99674c9e5997e841db0c909cbeb","url":"tw_stocks/00934.json"},{"revision":"843b84da23fa17e5a61d6f503bb804ab","url":"tw_stocks/00932.json"},{"revision":"df0b0e874a3e89d8b4961dc70344951e","url":"tw_stocks/00930.json"},{"revision":"465f89c9f4c7c83427205f59efaaa542","url":"tw_stocks/00929.json"},{"revision":"f475a235bdde83338d93763580d2197e","url":"tw_stocks/00927.json"},{"revision":"08e0c3ca8c22118ad908017fae9a7b5c","url":"tw_stocks/00926.json"},{"revision":"18835bd13dd60eaf0657ffb1e31abc80","url":"tw_stocks/00924.json"},{"revision":"fbea88ae26037dc0946c6ab02d99f52a","url":"tw_stocks/00923.json"},{"revision":"7417894da312a1b43cfd11007e09f64a","url":"tw_stocks/00922.json"},{"revision":"596d674a831499703b17ac9e91b48420","url":"tw_stocks/00921.json"},{"revision":"b2c61ce4356f5327a7270abb398693ae","url":"tw_stocks/00920.json"},{"revision":"30278e9134a8f666302db15fbbc841bf","url":"tw_stocks/00919.json"},{"revision":"eb58b0039a3132bd482d1deb18c66a02","url":"tw_stocks/00918.json"},{"revision":"34384366fcbb3651f0c61788e8f73571","url":"tw_stocks/00917.json"},{"revision":"be81688b7b4f4a882f274216389b7fab","url":"tw_stocks/00916.json"},{"revision":"887ca458e55dd9a891caad57d9b6d2d9","url":"tw_stocks/00915.json"},{"revision":"b131a69f22f663e0243521f389dde05d","url":"tw_stocks/00913.json"},{"revision":"04c2dcdc10a0696785e8e3eed4bab24c","url":"tw_stocks/00912.json"},{"revision":"ad1934313ec156246b249ad1f9a3054b","url":"tw_stocks/00911.json"},{"revision":"4ccd7284e8c166ccd1369bc9bf9c5877","url":"tw_stocks/00910.json"},{"revision":"8a564f11a72333fc0e626362698bb6f1","url":"tw_stocks/00909.json"},{"revision":"0122563587f3cad1f348e1e674aa5b5d","url":"tw_stocks/00908.json"},{"revision":"76e32a05c5b94179c3cb55680bc322db","url":"tw_stocks/00907.json"},{"revision":"362309e7ace2378b07cb8f645814a2f2","url":"tw_stocks/00905.json"},{"revision":"1fd39abb8ec809aa9fcd8ef32f51df7b","url":"tw_stocks/00904.json"},{"revision":"695b8ad0befd707cc1f12493fdb5c1a2","url":"tw_stocks/00903.json"},{"revision":"533733dc2589db24a23d6571c740ef67","url":"tw_stocks/00902.json"},{"revision":"98c16be96abae9bbfa80ed0c2d85f95e","url":"tw_stocks/00901.json"},{"revision":"ec92670a7d46337df1275a43eb382446","url":"tw_stocks/00900.json"},{"revision":"20e597134e8362a07045f6d20bc8fd52","url":"tw_stocks/00899.json"},{"revision":"01d71198768f1588978db67d2f271529","url":"tw_stocks/00898.json"},{"revision":"c6a4e4a794f6e817a57e3a10a48d3fd1","url":"tw_stocks/00897.json"},{"revision":"c54c5e19a8e3508978d3e55ea741bdec","url":"tw_stocks/00896.json"},{"revision":"7e2de8a2beacd0b9a194bac1d0241fbd","url":"tw_stocks/00895.json"},{"revision":"796c80e4b5a3b4bcc6748aed138b34b8","url":"tw_stocks/00894.json"},{"revision":"e4d8334f6d3956b53bd55ae97eca2ac4","url":"tw_stocks/00893.json"},{"revision":"ece98fad6dc02610a0f16a167c51de66","url":"tw_stocks/00892.json"},{"revision":"c47b8d8ce1911fb291946216c94ba019","url":"tw_stocks/00891.json"},{"revision":"65dae08d2e6d21970a909581b0d96626","url":"tw_stocks/00885.json"},{"revision":"ac7da93008fe223fa3c511ab26953c2f","url":"tw_stocks/00882.json"},{"revision":"1af5a683dcb61b07abaa26b3b9d40bbd","url":"tw_stocks/00881.json"},{"revision":"27bc654863c84af99490e5034e120853","url":"tw_stocks/00878.json"},{"revision":"ea0a0e14c687a409538a1342916257d9","url":"tw_stocks/00876.json"},{"revision":"ffb325d1c1ec476ee114af237194800b","url":"tw_stocks/00875.json"},{"revision":"1e8a47f4385352749c7082de51da5cb4","url":"tw_stocks/00865B.json"},{"revision":"f3753aef0970869ff352b170ca1fe42f","url":"tw_stocks/00861.json"},{"revision":"3bb28ecc3b5b9b5c153eb6018aa8d44d","url":"tw_stocks/00852L.json"},{"revision":"7c8e1dc525aac83d59061d70adf78214","url":"tw_stocks/00851.json"},{"revision":"2f1b6dfcf9d8fb7f548f45e8ca07314c","url":"tw_stocks/00850.json"},{"revision":"93568fbdb4a1f8ef744f2e82795de0cc","url":"tw_stocks/00830.json"},{"revision":"41183e1f6a84189b1676f77298cc82d5","url":"tw_stocks/00783.json"},{"revision":"e8fddc9f75d709a64283d1f7df0384be","url":"tw_stocks/00775B.json"},{"revision":"572a95195d341766b491a01efa05831a","url":"tw_stocks/00771.json"},{"revision":"f4bb70a1dd170e324efb777d0756e2e7","url":"tw_stocks/00770.json"},{"revision":"70c1fffbd9eed278c0dd3af4ba72dd74","url":"tw_stocks/00763U.json"},{"revision":"a6caf2fd1e04afcee8e3f92798f9c7b4","url":"tw_stocks/00762.json"},{"revision":"fcaead64c8319108fb61eb602385931b","url":"tw_stocks/00757.json"},{"revision":"dd00d98667b4aa6f3335db28d85f29f5","url":"tw_stocks/00753L.json"},{"revision":"9492559b0759f11a3e9b5ac836216540","url":"tw_stocks/00752.json"},{"revision":"71ec14c3bce4e40913bb95a4eaaddc7a","url":"tw_stocks/00739.json"},{"revision":"b1bd01e7255b601788902ef33a69c9a8","url":"tw_stocks/00738U.json"},{"revision":"f728c5f1a2190354f77e02b1daea0cad","url":"tw_stocks/00737.json"},{"revision":"55d5a5904d281068529b69396b0eed31","url":"tw_stocks/00736.json"},{"revision":"6e909e9282951ac33a5fd33d1588b958","url":"tw_stocks/00735.json"},{"revision":"77ceec2ceae775ece556e3cf468d3122","url":"tw_stocks/00733.json"},{"revision":"c6b5023c56108b5bf94d6657f98c5b8c","url":"tw_stocks/00731.json"},{"revision":"5876956b1c0846a1c587c6e70e9ce0b6","url":"tw_stocks/00730.json"},{"revision":"df7ce0e2b92671362ce793a3237bf841","url":"tw_stocks/00728.json"},{"revision":"973e2cb5843457fc832775b7b99e7760","url":"tw_stocks/00717.json"},{"revision":"22e52c077b6d2d1f681ac4d7485aea33","url":"tw_stocks/00715L.json"},{"revision":"36154838b31d7229329d789dbb5dcd8a","url":"tw_stocks/00714.json"},{"revision":"b60a020f4b80c0a79d911c5416e0157c","url":"tw_stocks/00713.json"},{"revision":"60032b3a77cfda4e2d8ccb2d4db86b3a","url":"tw_stocks/00712.json"},{"revision":"b203528d1fc8e54fcfcba10d2daa9940","url":"tw_stocks/00711B.json"},{"revision":"a53c8cbfec10c07a7c8f7274838af30d","url":"tw_stocks/00710B.json"},{"revision":"9d1580c434e1763dbb9dfdd942b1886b","url":"tw_stocks/00709.json"},{"revision":"87cb2770c69dd26438beda3f0da7ed07","url":"tw_stocks/00708L.json"},{"revision":"181d6d70afb3df7f25ad732b121bce72","url":"tw_stocks/00707R.json"},{"revision":"26b2dbe48492ca822fd9c25a9902ce54","url":"tw_stocks/00706L.json"},{"revision":"c20bb7cbe4aec2bb14bcf15afeb6637b","url":"tw_stocks/00703.json"},{"revision":"9db1398bd919f2b05e556270ce6543b6","url":"tw_stocks/00702.json"},{"revision":"f6570de8326d5b4d6ed96aaf871845c0","url":"tw_stocks/00701.json"},{"revision":"2183ef0b06eca0b757174be4a3b0ba65","url":"tw_stocks/00700.json"},{"revision":"70ba6b7f6180976a69a76f519387ae69","url":"tw_stocks/00693U.json"},{"revision":"8926d8372d8ecf38b6589eaa9fed50cd","url":"tw_stocks/00692.json"},{"revision":"272e89c04b4483f1cf6caaee85b217d9","url":"tw_stocks/00690.json"},{"revision":"3758a21c249be63c65ac26f9fa676347","url":"tw_stocks/00689R.json"},{"revision":"8471cf35f8085bf6656cd15286ed2bf7","url":"tw_stocks/00688L.json"},{"revision":"73cda42ecd593613b5c3037f24013a42","url":"tw_stocks/00686R.json"},{"revision":"bd1574ee71eb39ed178091066f6b34b9","url":"tw_stocks/00685L.json"},{"revision":"56e5274ade33fadae98fbb1e53d7e65e","url":"tw_stocks/00684R.json"},{"revision":"8081107c2fac9a126a34ea25bafd001e","url":"tw_stocks/00683L.json"},{"revision":"3f7e927949a49e58408c6869934e44ce","url":"tw_stocks/00682U.json"},{"revision":"078e1793c2c170f87904f62aa07a411f","url":"tw_stocks/00681R.json"},{"revision":"2388631f79a15579b3ed639acf258b42","url":"tw_stocks/00680L.json"},{"revision":"2f1b2bb6d02f236e0e6d1550d88bc0f9","url":"tw_stocks/00678.json"},{"revision":"ba7c9cc837bc0a87cfc88528aefee968","url":"tw_stocks/00676R.json"},{"revision":"4b32c772fcb3c0c4b2c41a765d337c26","url":"tw_stocks/00675L.json"},{"revision":"3cbc14c33cce1737dd0adb4d55ef4737","url":"tw_stocks/00674R.json"},{"revision":"844b955739caf30073644cebec44e71f","url":"tw_stocks/00673R.json"},{"revision":"7751588004ef88338943a227b019ebd8","url":"tw_stocks/00671R.json"},{"revision":"e1d6f643229301b1ca5390f609a85a1f","url":"tw_stocks/00670L.json"},{"revision":"f015ea9ada747208c5e0c878763e5eb1","url":"tw_stocks/00669R.json"},{"revision":"091da597c79d81c5eee515971df17f06","url":"tw_stocks/00668K.json"},{"revision":"e2744ab2300f6b9981c42bb6b4fad9ab","url":"tw_stocks/00668.json"},{"revision":"21dfc061d250d3a4e2eb0edd9be92ccd","url":"tw_stocks/00666R.json"},{"revision":"aaeb72d7f8e897df0daae9fee50c9437","url":"tw_stocks/00665L.json"},{"revision":"309822697cd7bbcc6cde42435b589d44","url":"tw_stocks/00664R.json"},{"revision":"d5f44bb7d6b4b5bdd3832bd674b8c37d","url":"tw_stocks/00663L.json"},{"revision":"a307cb533d09e140359226f16f457ce9","url":"tw_stocks/00662.json"},{"revision":"52102d0aa93153dd1ce4625981d41f4e","url":"tw_stocks/00661.json"},{"revision":"73fa0497fd918085183679e063822c35","url":"tw_stocks/00660.json"},{"revision":"7d76e533d0c73dcfbaa088de469d5e4e","url":"tw_stocks/00657K.json"},{"revision":"b0b72001ef5d64267ad0cf8f0c6052d5","url":"tw_stocks/00657.json"},{"revision":"cbea0a34f3031f2813794348757adc6b","url":"tw_stocks/00656R.json"},{"revision":"4390acccbc3a47398bffb34a3a587c72","url":"tw_stocks/00655L.json"},{"revision":"078c7394933036ec8c36f76bf8d26cb2","url":"tw_stocks/00654R.json"},{"revision":"88e7b0edcf95b2c0129cb05ba80eb895","url":"tw_stocks/00653L.json"},{"revision":"0dd8441fe4dfc1740125e3f6c89043e4","url":"tw_stocks/00652.json"},{"revision":"0499dd0307cbcaba3364a6600e0b203a","url":"tw_stocks/00651R.json"},{"revision":"3bc9e0f36ddc71ca7072be5a27257a84","url":"tw_stocks/00650L.json"},{"revision":"c752e8d100c7763de584c9f94a1eaee1","url":"tw_stocks/00648R.json"},{"revision":"f71214d3ecd88428a1f43148e85167b4","url":"tw_stocks/00647L.json"},{"revision":"9675edad4aefb08aaafb28abc34a964a","url":"tw_stocks/00646.json"},{"revision":"7610186e2c87942e7ff473fae41bb5ce","url":"tw_stocks/00645.json"},{"revision":"932d08c09aaae19aae5c5834df097de4","url":"tw_stocks/00643K.json"},{"revision":"527f3b43a23f9e0fe5af6fc0afeed9c6","url":"tw_stocks/00643.json"},{"revision":"4fc04616553946c79ecc6495ff1db177","url":"tw_stocks/00642U.json"},{"revision":"57d5d1024de12e9d0714e1063be62755","url":"tw_stocks/00641R.json"},{"revision":"c51522e5877e7896785863c012f9309f","url":"tw_stocks/00640L.json"},{"revision":"91d98d32532a08641543fb0a750a7679","url":"tw_stocks/00639.json"},{"revision":"d7928ca035b0e92914a024b520ed8f88","url":"tw_stocks/00638R.json"},{"revision":"f1e1d57d3b811a07ff2a3f0c2d452ff0","url":"tw_stocks/00637L.json"},{"revision":"54b7509bb92d01aa31e8dd094f3215e7","url":"tw_stocks/00636K.json"},{"revision":"04b680423a7a6883930f49f5f68e622d","url":"tw_stocks/00636.json"},{"revision":"6321fe21670e10626d34a276bc35cc4b","url":"tw_stocks/00635U.json"},{"revision":"92856d00f7c01962de94dc22bc6a3923","url":"tw_stocks/00634R.json"},{"revision":"857de99ec50c33afbc1c0209911f6ec7","url":"tw_stocks/00633L.json"},{"revision":"7c4e9a0897d18c18786849b4970f976a","url":"tw_stocks/00632R.json"},{"revision":"61f846a9f0fe9a237142afc34bc044d7","url":"tw_stocks/00631L.json"},{"revision":"394f865c3e9ef5b38c8e6d4221807e06","url":"tw_stocks/00625K.json"},{"revision":"8e4eaddbc30212b8d513232de50cc343","url":"tw_stocks/006208.json"},{"revision":"11c2bd0e37d40b3b23eddf6ad45c9398","url":"tw_stocks/006207.json"},{"revision":"048bd8bc9b137af997802c126cd60cc9","url":"tw_stocks/006206.json"},{"revision":"bf3feda3f2748bbbaecdf97812245a3c","url":"tw_stocks/006205.json"},{"revision":"03183dd8d2381db58ccb67e296ccdba4","url":"tw_stocks/006204.json"},{"revision":"7faab70f665e2b17ad8f2ff59668567e","url":"tw_stocks/006203.json"},{"revision":"9877e5577042441a48c109733f920ad6","url":"tw_stocks/0061.json"},{"revision":"7c307fba76a5e8f4b0352c4309b21d16","url":"tw_stocks/0057.json"},{"revision":"6fc7dd9622fe431f7b663343d86b9591","url":"tw_stocks/0056.json"},{"revision":"d1dc2425f2de75314b8c23e62a776941","url":"tw_stocks/0055.json"},{"revision":"ea74e479c4986ea7889eb7e307f38741","url":"tw_stocks/0053.json"},{"revision":"2dc3b3ad8f76cc0cf34b58a017b60fcd","url":"tw_stocks/0052.json"},{"revision":"619ad65dcca3203c193e7175ec9a6740","url":"tw_stocks/0051.json"},{"revision":"979e630face1532d6af9fa442747d53b","url":"tw_stocks/0050.json"},{"revision":"f5367d206dad0844e4a8a6fbea12b0d6","url":"tw_stocks/00401A.json"},{"revision":"c33eb3e231724a931af09235734a2d7f","url":"tw_stocks/00400A.json"},{"revision":"febf551b6747770e22bca138d8a99ab6","url":"subscription/callback.html"},{"revision":"5ea1fb32b688be3f3bc9070ba81add1c","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"15ad176a2fdfe2acf67e0ea83072f5cc","url":"financial/rebalance.html"},{"revision":"cce85d525659875a8153e50586f00531","url":"financial/cashflow.html"},{"revision":"4f7238529b8e89af507eea01618f3767","url":"financial/balance-sheet.html"},{"revision":"212461702bd761c3deaaa45830fb7338","url":"finance/tags.html"},{"revision":"be1de30c4f66334c8073857a6e64be8d","url":"finance/finance-weekly-2026-04-11.html"},{"revision":"b7655fde7b256a6f9f2d954e13761088","url":"finance/finance-section-created.html"},{"revision":"22cdc9caaf9dc8084faedb6b6fd271cb","url":"finance/finance-2026-04-30.html"},{"revision":"8268fee22be0e5ccf928186dab434101","url":"finance/finance-2026-04-29.html"},{"revision":"80d52578367ebb901a3179894b189197","url":"finance/finance-2026-04-28.html"},{"revision":"8e4061967c042a176d79c5bf7ddd64bd","url":"finance/finance-2026-04-27.html"},{"revision":"5f9cf2c7ba9b01b487e661a306ca36aa","url":"finance/finance-2026-04-24.html"},{"revision":"61e1707b4712911e6a092eaa979df495","url":"finance/finance-2026-04-23.html"},{"revision":"ba80806eeaf2eb23a4193a387b13ba6f","url":"finance/finance-2026-04-22.html"},{"revision":"70bf05a4465d226c1d779e52f5f54fc1","url":"finance/finance-2026-04-21.html"},{"revision":"1de6761bac599dbfe487dda11b44d367","url":"finance/finance-2026-04-20.html"},{"revision":"43b5a2ed11351febbe33517cdf6cb6f3","url":"finance/finance-2026-04-17.html"},{"revision":"cc5f6174f0289c945bc7ad500de3d2ab","url":"finance/finance-2026-04-16.html"},{"revision":"bd13d400bac209b72f06b94e34320b56","url":"finance/finance-2026-04-15.html"},{"revision":"19310f7b940e1d59977c9eec00b5f04b","url":"finance/finance-2026-04-14.html"},{"revision":"5bed034d015725df50022c6166500cba","url":"finance/finance-2026-04-13.html"},{"revision":"497415df014b539332b41b405bd1020f","url":"finance/finance-2026-04-10.html"},{"revision":"abfbc79d8a7d8886dc3e4e4ff29fa816","url":"finance/finance-2026-04-09.html"},{"revision":"88a6775d706c6809b582c6c83370e930","url":"finance/authors.html"},{"revision":"ffecc79c2e639dbd2752cbb12da75315","url":"finance/archive.html"},{"revision":"8370eb04a42ee6263f547a32c76e0097","url":"finance/tags/weekly-report.html"},{"revision":"f3b507b234d6f0f27bf77a607028716f","url":"finance/tags/finance.html"},{"revision":"0b129ff90a068485395332d74afcc8f2","url":"finance/tags/daily-report.html"},{"revision":"75e42e0ce085babc774940ce22a9a6ef","url":"finance/tags/announcement.html"},{"revision":"14798ac6609e7a0648e2227d81b6feed","url":"finance/tags/finance/page/2.html"},{"revision":"7b80c6dba677a09ff33e9bf1f75764a6","url":"finance/tags/daily-report/page/2.html"},{"revision":"e21f9b554a186560bf5eb504b2b7e389","url":"finance/page/2.html"},{"revision":"ed3dbf0bf57f52599eb0a8db02888fac","url":"docs/tags.html"},{"revision":"685b1b4825a341b06909d5e7bd769741","url":"docs/intro.html"},{"revision":"5f5a26bb7444fbdb004cbd9a2bac7c28","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"fb752eb668c249a13ee721f88379c65b","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"9c0ea7ed33a144017d94b7ecebf9a84e","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"223c8d390bb5780fa92c13af8ca0a970","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"3d7aa8a495863f6d166e8c0f0862c44d","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"1bd839704dc5209a880cfbccf1be37a3","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"ad7e4d9b73ad5ae63b0f69c527f477dd","url":"docs/tags/黑箱協議.html"},{"revision":"c198073e85710f6bc60b0a30cbe1994c","url":"docs/tags/養成.html"},{"revision":"2e964a9ac7355d16415bcdc3bf0a7d77","url":"docs/tags/資料安全.html"},{"revision":"7b9c5a250b30707cbfb85d61ffccc9c3","url":"docs/tags/經濟循環.html"},{"revision":"e61520ce8446253aec9318af204fa722","url":"docs/tags/百科.html"},{"revision":"7117ebac07920992a42a7fdd907dbfbd","url":"docs/tags/模型控制.html"},{"revision":"b9e9573cfd56822be8dc17deb1400dab","url":"docs/tags/數據標準.html"},{"revision":"04bf2eafef5b45c8773ee4c38941b583","url":"docs/tags/接入規範.html"},{"revision":"f13206f28841248d9ced938f966c2549","url":"docs/tags/指南.html"},{"revision":"2b13f2da840d86a48a55e74fe3766378","url":"docs/tags/技術哲學.html"},{"revision":"ccd948f3fd8f7001c461d96aea543eb6","url":"docs/tags/技術史.html"},{"revision":"6d2ab821be1f69851a1fee5ca9d671c5","url":"docs/tags/戰鬥系統.html"},{"revision":"40f899aab9a5a3649e80c6b3bffa659a","url":"docs/tags/專案管理.html"},{"revision":"1d9fc16638ac2c369e65c523fe4eafc9","url":"docs/tags/安全架構.html"},{"revision":"c07e904bdc44831a9100dc496f0c514e","url":"docs/tags/安全協定.html"},{"revision":"64c9b214f900e5067dcfa4d05e2cd207","url":"docs/tags/外部開發者.html"},{"revision":"0d42515828948bb001e47d30c5f53cdb","url":"docs/tags/商店.html"},{"revision":"178bc0e54691826f2f3ea6d28e5d8e4b","url":"docs/tags/去中心化標準.html"},{"revision":"48c3591dd74851212656a6160cc57077","url":"docs/tags/去中心化安全.html"},{"revision":"06d23edc50e6e5cbb2cca74d3bf6ce73","url":"docs/tags/去中心化.html"},{"revision":"b5b2d73421f3ee3ade3819f6d9095d94","url":"docs/tags/top-p.html"},{"revision":"b73ea0eed9cfa461a2668ca1da870dd3","url":"docs/tags/tokenizer.html"},{"revision":"763911a00a594e9da2c03e6483152cc9","url":"docs/tags/temperature.html"},{"revision":"0bc362d13a58b7cac6c88b61393761fc","url":"docs/tags/technical-docs.html"},{"revision":"01373a325708ebae5766f930f4643079","url":"docs/tags/nlp.html"},{"revision":"50aff3f74990ac9b75034965bab786a9","url":"docs/tags/llm.html"},{"revision":"aaa5c076d5e0b3130909836adf45270f","url":"docs/tags/git-hub-copilot.html"},{"revision":"98f9d8437ae15d8d46889e8ebde3ecf4","url":"docs/tags/generative-ai.html"},{"revision":"67de897157b8c05f15c6593e8589ed02","url":"docs/tags/eip.html"},{"revision":"84d071496989238e7341410dfb87b504","url":"docs/tags/development-tools.html"},{"revision":"a945331ef859a65fafee5ef9da67f15c","url":"docs/tags/cli.html"},{"revision":"98c410627803959f88288acaef914369","url":"docs/tags/claude-code.html"},{"revision":"6200d0a795546ca3e321ca2adb65e47a","url":"docs/tags/bpe.html"},{"revision":"7f7a05b4c31ca0139fabdb73095bd294","url":"docs/tags/automation.html"},{"revision":"d1758883bf1c07469313367ca8e824bb","url":"docs/tags/ai.html"},{"revision":"c208d7a9a0f12cbc23f7f5708ddb2efd","url":"docs/tags/agent.html"},{"revision":"68b6d30c9029d725982d04262c168f6f","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"9b4b6e7cf0b2cb68708518d5c5c33e4e","url":"docs/skill/gemini-skills.html"},{"revision":"cf0e3498e3a7645544f40986047560d6","url":"docs/skill/container-builder-skill.html"},{"revision":"bcc8c1c1b32b46dd7c44d399f2a184c9","url":"docs/skill/claude-code-skills.html"},{"revision":"5b62c47830294e8ec6fa92ec04418c59","url":"docs/python-workshop/python-init-file.html"},{"revision":"fb4a20799c89fd0cabc4bf9097f1f066","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"c7aa8f191d60947fe9cc0e73138d68f7","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"b0349290266ca952ea0a302ba8548230","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"57f0f1e24aecb03c28a0d7086563bdc3","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"914b0eecb1201e1d4b7b17a7516e0c88","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"5ba99c9994ca0c4f1387d3d5f749de71","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"a49e029624d7345e275a8a5d26de1f4b","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"c54576896ffa6d615c4f92724ac42e08","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"bc18c3c596f965f9aec7a425c639708e","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"7be5adf7b5fff45d454d0f46b3b42dd0","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"0ac384be9d68c23fbf306b7dd6405e3d","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"2eafdf06dd0ddc9af19d0bd6237599bc","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"be9fafcae0a446aae68b3f60109a57b1","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"70dcd67a6b20888c943b75df9be1331f","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"e7dd83de31fc62045850ef30e194040e","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"da4697a8aca2f16a390b500b260b6569","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"c829e3359e272ad9c8ac2c19230ab1b3","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"64da2dcc79c7228d26c6b66b64cddb45","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"d9b9f712fbdee6ae6b869035e11a5043","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"8f18cd1a07610c00286314857aae0123","url":"docs/claude-code-series/skills.html"},{"revision":"96193663f4032d7410da3f29f4bc3710","url":"docs/claude-code-series/monitoring.html"},{"revision":"a0323144d6623617dc8a9ed779b1d72f","url":"docs/claude-code-series/getting-started.html"},{"revision":"8c246f9a27a509676eacb65227139738","url":"docs/category/遊戲規則與手冊.html"},{"revision":"2ec0794bc0b92b3e6041a4c7a505a21a","url":"docs/category/發文-skill.html"},{"revision":"7015ecb43ca214f75d2a1cc5961f6181","url":"docs/category/戰情室元件-skill.html"},{"revision":"150d19bf7bdaa8952d9d0dd0fd85348c","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"e74c209ad1a24d886a35b0555fb33d74","url":"docs/category/skill.html"},{"revision":"19ec31ca845cbc1b41e3c9ed001419a2","url":"docs/category/python-workshop.html"},{"revision":"e47024d560c920777132a942c8f873f2","url":"docs/category/egg-pet-philosophy.html"},{"revision":"6ca5490e4b4cd925c98e315251093d9b","url":"docs/category/claude-code.html"},{"revision":"ffd8d6a1a3e3400e3c3a35dea52a35d3","url":"docs/blog-skill/news-rules.html"},{"revision":"5daad750ffe22a4aa51d85671c219aa4","url":"docs/blog-skill/history-rules.html"},{"revision":"9ab1f2dbc602ba0e16a1705278bd288c","url":"docs/blog-skill/finance-rules.html"},{"revision":"54ce8dd9996e8e06d63e435919a189cf","url":"auth/callback.html"},{"revision":"a881411dc00f2fe91d3f0594690aed86","url":"assets/js/runtime~main.1d7fa80d.js"},{"revision":"290bfcd58ca77e01b8ea2aaa7df9fa2e","url":"assets/js/main.6e085808.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"60130a72bf626a478962b07aa3226862","url":"assets/js/f60bf1e1.daa8d58d.js"},{"revision":"f335c8d35d3921d6317d9bcf37f0df27","url":"assets/js/ef86e77f.fa37c7b7.js"},{"revision":"2783d1598119d406bd403afb4399cb70","url":"assets/js/ed4d73f8.e30c4ee8.js"},{"revision":"652502b29c00ea95144304e49bc30858","url":"assets/js/ec1e3285.9685f9d8.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"5a2cd4b183380d4383be1d9e81f61c84","url":"assets/js/ea89dec7.80cee8b4.js"},{"revision":"86ce440dc4514677d66dc8d5a15464d2","url":"assets/js/e88c4a9c.1dcaff34.js"},{"revision":"d252bc8bbde8548a5e79fa3e7f561122","url":"assets/js/e86a5a75.e8b016dc.js"},{"revision":"c932767cbe19ff7fbdab3a22ffb35137","url":"assets/js/e7f07728.a510d8c2.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"411360668ce1530945309ba14f903bfd","url":"assets/js/e1c57381.94ae0ae3.js"},{"revision":"7c445bc7950cf339a234f9d8269f37fe","url":"assets/js/dfea6eb9.e57b73ce.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"a968fc626829f852eccbff0f4d47a153","url":"assets/js/dd5b562f.08c3c1b5.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"f341730b90b0c24c26c629e0bb953348","url":"assets/js/d90f4af5.9621681e.js"},{"revision":"26f69e77930fda38bde6bd5b793276d4","url":"assets/js/d7b680af.e1205cec.js"},{"revision":"89f924ea2a59d5e62ccb1a9384300796","url":"assets/js/d7453cde.2f8f462e.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"0ddb8273a285af9811357d184989133d","url":"assets/js/d1fa896a.5dca4d46.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"6c8583f0639b3c8a5cd3a62f58e8b481","url":"assets/js/cc221b30.5f5706e4.js"},{"revision":"e0f6d36623e461b88ddc6b8d0b3ed0f8","url":"assets/js/c9add68e.0291f296.js"},{"revision":"b47ba2d5f791364b83adfddfe3c10a2d","url":"assets/js/c7f3abc7.d1d87616.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"2129bdf2cb5f1b6714db4e7b36a25a93","url":"assets/js/c2f9bb6a.82bf7823.js"},{"revision":"d7161882f9e529cb493767d90b5f23ad","url":"assets/js/c2e1ff31.c1557720.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"9a52c5056534d964b5cbfd686bda9c66","url":"assets/js/c0879439.97e73e32.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"c22e857ef4fe8f330a77631522053253","url":"assets/js/bfcb750f.c7c4b431.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"21f3eae5e0ab5c6a92f4199037db6d2e","url":"assets/js/b95eaafa.41b3397c.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"553f3a17e92927c9cd6cb886619fe1d8","url":"assets/js/b714ff87.08360a4d.js"},{"revision":"72fb1f88447f84f6463bf895a9330d60","url":"assets/js/b283ca86.39b6c126.js"},{"revision":"5642715acf134a38133b17e1b00adf89","url":"assets/js/b2814407.b7d95fa6.js"},{"revision":"595725355a796b04e6d12ba728d51bf5","url":"assets/js/afdbc12b.adfb4e8f.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"ad99f0cf715b1ad51ad0d0a034789493","url":"assets/js/ac590df8.40b63aa5.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"efa074512b62092cb264155809182a06","url":"assets/js/a89e3451.d869519d.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"e5b83f41b78ed0861412fe00f35ba7fc","url":"assets/js/a71ba949.3b6665a7.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"ff9b1334f162ea6c2f8603f30accc4c2","url":"assets/js/a6038fd8.29424fc8.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"8a247d8cedf26566e7bd22ee3a22c7c9","url":"assets/js/9adafc71.aaa4d581.js"},{"revision":"dae4c500b0c99839206928a96a717bec","url":"assets/js/99d3b34a.cf294733.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"3f60511134b2364bfb021ce2d146e62f","url":"assets/js/98831978.076cb5a8.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"14675b38f028f7f375316a10ff86ed86","url":"assets/js/93a08f73.83b973f6.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"629430061c4518c5423a3863459479b3","url":"assets/js/92adc83b.6e86f99b.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"e23d7a9381b7fac268a6cc245bbb6a61","url":"assets/js/923ed0b3.58466f01.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"1bc6016652dc879e5bb7c80ef9bf3872","url":"assets/js/8c20996d.c1ab2186.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"28803e21a03a8f26f847f767addb7b8c","url":"assets/js/853ca2df.41104d23.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"e32e3de018d5d71bec74850a3e6e1ec6","url":"assets/js/826b5919.66678e0c.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"e9ad5a9bd12898119a29bfbeff03b541","url":"assets/js/8008369e.c4b0b9d5.js"},{"revision":"ab74514a7a2830bf5247732c64385e81","url":"assets/js/7fbc1a25.a2969645.js"},{"revision":"2f359aebfd8c2db9480735ebb93e1e31","url":"assets/js/7de88436.b90b4251.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"a85264c6cc50dd6e84353ae807fc522d","url":"assets/js/7ce5d7a1.4d4e7b79.js"},{"revision":"70cc8febb73fb8da4b9d30f7da9c982c","url":"assets/js/7af217e3.6b4f5c8b.js"},{"revision":"a6f013be5ac521474ed5b83a65fdcd5f","url":"assets/js/7a59c865.f595edcc.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"d0a22d387fdb50c13c4ca8eb607d70b1","url":"assets/js/767bd1d1.4541aabc.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"c2368cbbb5f5119e9c5245b298cff129","url":"assets/js/65223696.f7a92b2b.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"1c8c96e670c4ee65c3aae1dff7b31195","url":"assets/js/61327162.746f601f.js"},{"revision":"34bef3d4b8abfb47a8e9f81f8dad4161","url":"assets/js/607acb04.eddb8d76.js"},{"revision":"b53e92d031e77aec6ae31d28df71b616","url":"assets/js/60374e5a.406fc446.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"5445eb1bd9cc1a5ce6f0395d94a4ac0f","url":"assets/js/5a762f2f.09ea6c70.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"e84ac1b604cfe71592c1e5aea99452dc","url":"assets/js/56fce896.ce6f27b4.js"},{"revision":"e2948d20373f01774ed7e056182d57a4","url":"assets/js/55721269.163dc895.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"f804fb98d388e850d84a9449d3ead32f","url":"assets/js/54513d10.0f5f3233.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"d476ad1c470bcddfb8f47b62713f7582","url":"assets/js/50000426.8996ac48.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"279020239be395c8d0d1837bf694971e","url":"assets/js/4810d89a.e161adcc.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"e725ba46c4da3c52221a7d6dccfc787c","url":"assets/js/448a5b13.47aa7c09.js"},{"revision":"f3f708072a786f3bb9f4e2e013344286","url":"assets/js/43ea09b6.50fbe712.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"a2ff8768709509eee0bf28dea672ec72","url":"assets/js/41937f2e.2c751b58.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"478595175bebf3559a96297d56100b13","url":"assets/js/3ee3fb84.1200fc8d.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"eb48aeea0ba2e32536d256ddbe48b3b5","url":"assets/js/3c2d29c6.9447af33.js"},{"revision":"2d54e74ce2add40c87528c118ca6e36f","url":"assets/js/3aef7316.45377a47.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"c5ddbf34e714832ee78392fdcf93c5d6","url":"assets/js/36f337b1.d8850288.js"},{"revision":"eeec7f17e0f92d013ab5118c250857ee","url":"assets/js/36e6542e.a4965e71.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"a24a81210ad9957ce9922ba453063366","url":"assets/js/309520ad.3faa55cb.js"},{"revision":"45ef74bfd3f6787a4cf28f777c18539c","url":"assets/js/304a23a0.c50ea59b.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"b6f0a70cdba7e95dd2f6503fddf493a3","url":"assets/js/2dd9eb9e.a975b14f.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"5e8bb840cdb4337da6db1515056e65c3","url":"assets/js/28a0c100.015c74cc.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"e2562f7d4742e604c895978b4753f028","url":"assets/js/24e6def7.81ebd83a.js"},{"revision":"966389c2039f20b17f95a699e75b365d","url":"assets/js/23d26d3d.bb67e8c4.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"718efee1d32f21ce1508c22f6d8d04fc","url":"assets/js/191e8113.4727fa1b.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"975b31a5b1f7232ea96fa9466f26c7ab","url":"assets/js/179b82d4.3329dbf0.js"},{"revision":"f714d84a9bd6d84fe2468d4015283c8b","url":"assets/js/178b6201.1cd3ae8d.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"b8144e8d01a19838994ed06083a03538","url":"assets/js/177ac620.59053f56.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"ef5b56d6c49bb59dd8c9476ad12f0da6","url":"assets/js/162c7fa0.9aa8687c.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"5679ebd8f6ab45298e87c42a8b97dec5","url":"assets/js/1550c41f.ddfdacad.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"865a76a1e3252c5d873846c356ed9491","url":"assets/js/148a248b.a813744e.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"30c892ce9414e4e7971e0a81c6d6afa8","url":"assets/js/0e384e19.2f7a5d13.js"},{"revision":"a5ad972477d81dc083f35a08579aea87","url":"assets/js/0a3b6be8.57189e0a.js"},{"revision":"6c74760d98f80fa0ec9a62588b37f81b","url":"assets/js/0962a2ae.998f474e.js"},{"revision":"ce91f193f1b8ff2d11000e1ee45ed008","url":"assets/js/0786d169.0e524349.js"},{"revision":"9b7444517f67e6b93c68d77aa43fb899","url":"assets/js/04f403f8.c0d62dcc.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"2a656c51a624e399ccf1ee602ea0f1db","url":"assets/js/02366042.49a8fe74.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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