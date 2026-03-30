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
    const precacheManifest = [{"revision":"a2dc3b454f943ba194b7861ed67bbe5b","url":"tw_stocks.json"},{"revision":"53891a534437ab8093c140dae8045299","url":"subscription.html"},{"revision":"19e8b622442eed586304283eacdacbb7","url":"quotes.html"},{"revision":"f1302655595bfefb88fbb68cdf579bfd","url":"me.html"},{"revision":"b531e041ce51e4d74324245ddda81480","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"2ec967ce1831692d7d64cfb582e4c5ef","url":"index.html"},{"revision":"bd63b554d34eec6a31bc639f0c9fa6a8","url":"finance.html"},{"revision":"306c50825ffa83ea60db207d82ee23bf","url":"feedback.html"},{"revision":"f6e1ab66fed826693858d2754811f773","url":"blog.html"},{"revision":"5f6eb6be9fa027047625a60854f3c12e","url":"404.html"},{"revision":"6d763a53580f1830a7b83df53617bd24","url":"tw_stocks/9958.json"},{"revision":"82f0e90b19232bcc92c177887d189633","url":"tw_stocks/9955.json"},{"revision":"744bca5cecfb0099e12f95122a8171b0","url":"tw_stocks/9946.json"},{"revision":"26787b15bbb6213951c87707a864a5ab","url":"tw_stocks/9945.json"},{"revision":"e3c0fa93fdc428c1a3183e25790b7345","url":"tw_stocks/9944.json"},{"revision":"9351c8d6475f1d400acdf1ad413f18d3","url":"tw_stocks/9943.json"},{"revision":"64b74d7289ae3211fecaae649b01deb5","url":"tw_stocks/9942.json"},{"revision":"2f944dce16413cc837de0ba9c337134d","url":"tw_stocks/9941.json"},{"revision":"4bb448f0fd077176c32e460808c3a7f1","url":"tw_stocks/9940.json"},{"revision":"eba4cf2e37fd82e0e2158ab7b3cec406","url":"tw_stocks/9939.json"},{"revision":"4abb4f1af2545f003a2b5ae70429cac3","url":"tw_stocks/9938.json"},{"revision":"ea8ca5da73b728e88f479398a455e0da","url":"tw_stocks/9937.json"},{"revision":"6f198f60694aca489dd708930878cd5a","url":"tw_stocks/9935.json"},{"revision":"34e555f34c4c6ec3602dab97582aa19b","url":"tw_stocks/9934.json"},{"revision":"35977616ecee5b15dcbb289f60f0fb26","url":"tw_stocks/9933.json"},{"revision":"25f077738984d36771c086ecf8027281","url":"tw_stocks/9931.json"},{"revision":"8edf98a62156e42e7be5df81877d429b","url":"tw_stocks/9930.json"},{"revision":"428ff28e721ccffae29228ff3d5911ea","url":"tw_stocks/9929.json"},{"revision":"6063903d8f3671706b674c15331679f5","url":"tw_stocks/9928.json"},{"revision":"9296d897ca77f5d5ae2c957f4c350cdf","url":"tw_stocks/9927.json"},{"revision":"13b97bd4a9838d7cde6239a1b60b0399","url":"tw_stocks/9926.json"},{"revision":"f9d2bbaef6c8fb7c5db3743f3d6d66cf","url":"tw_stocks/9925.json"},{"revision":"65ebc7cc8d4721078ee96c9e366c5673","url":"tw_stocks/9924.json"},{"revision":"c3670535f5d20d4db481effd5be0b9b9","url":"tw_stocks/9921.json"},{"revision":"29ef722bfeb47ed61621c6407761c157","url":"tw_stocks/9919.json"},{"revision":"0a2a3bfbb098e95340daed3472668000","url":"tw_stocks/9918.json"},{"revision":"9b6908825a9f71ae11b2e372b131c2d5","url":"tw_stocks/9917.json"},{"revision":"7241bb878d73406f3eca5f299c1bf152","url":"tw_stocks/9914.json"},{"revision":"5992eaf8fd88390c06bf112d4ad98806","url":"tw_stocks/9912.json"},{"revision":"150111852ae78ba6dbec82718af5f390","url":"tw_stocks/9911.json"},{"revision":"c840438055f8e9730edc2468c3a02d83","url":"tw_stocks/9910.json"},{"revision":"d008f39416d08a4d46cda8b021c1f74f","url":"tw_stocks/9908.json"},{"revision":"cdc8eeb4138930fa3fe1e1dd0b09ad21","url":"tw_stocks/9907.json"},{"revision":"9c211cb5d0ac4bcde5c4f3e854c3df0c","url":"tw_stocks/9906.json"},{"revision":"aa87ce4fab4344d18a9ce818b47b0881","url":"tw_stocks/9905.json"},{"revision":"5011f3f21c8e87b9640c06f546ea30d8","url":"tw_stocks/9904.json"},{"revision":"abccadd7edd1e3980dcd5c2857482393","url":"tw_stocks/9902.json"},{"revision":"243ba13a628082c83504cfb5e60505b5","url":"tw_stocks/9802.json"},{"revision":"ad9d53d0e3523fd324f169ddd585e8af","url":"tw_stocks/8996.json"},{"revision":"84bbbc53cf46320ca7188aa576aa84c6","url":"tw_stocks/8940.json"},{"revision":"c67c4de24fb118873be22e4c1e8b07df","url":"tw_stocks/8926.json"},{"revision":"5467b6b780eaf227fa10e5dd54377d8c","url":"tw_stocks/8499.json"},{"revision":"7aed8951bc522903a29461ba2b5eed43","url":"tw_stocks/8488.json"},{"revision":"a5c29dc5fff379abe2229d207eb26799","url":"tw_stocks/8482.json"},{"revision":"6187d1be579fa003314759f5b41a5ae6","url":"tw_stocks/8481.json"},{"revision":"aebce189e81c5e7a611e3c5df2b3798b","url":"tw_stocks/8478.json"},{"revision":"e0f7603892ff6ab4ff90d207b4a5fb9e","url":"tw_stocks/8476.json"},{"revision":"a9ca33b7c92c6f58f63bc92bf02e3e74","url":"tw_stocks/8473.json"},{"revision":"be658fe8549477bf02d237300cb61203","url":"tw_stocks/8467.json"},{"revision":"3570ba53083f752e747e0ecb397b1391","url":"tw_stocks/8466.json"},{"revision":"40952466f0ddb6d4fd5d8a471c971e90","url":"tw_stocks/8464.json"},{"revision":"2dc2a25b92a4cbb27196c8cefcd0f72f","url":"tw_stocks/8463.json"},{"revision":"15350074413dce01dd047813e30c2d09","url":"tw_stocks/8462.json"},{"revision":"ba6430b482af84f5ba23d6026b3cece2","url":"tw_stocks/8454.json"},{"revision":"1dc75ad2e74bbdf705b8fbfd5b264cfe","url":"tw_stocks/8443.json"},{"revision":"97261165766308f9ad9c1fa4e7e947be","url":"tw_stocks/8442.json"},{"revision":"0d738b5183fa7d7b1045d4a4057dd425","url":"tw_stocks/8438.json"},{"revision":"a08fec857ac228d635dfb4c8cb4e3a9a","url":"tw_stocks/8429.json"},{"revision":"4997ffe233361547e36522c931bd1286","url":"tw_stocks/8422.json"},{"revision":"06752b58c4f293437bd78e86c4db797d","url":"tw_stocks/8411.json"},{"revision":"43ba6c499c07cbdcc287f3a711b0e34f","url":"tw_stocks/8404.json"},{"revision":"feafe408a6cc584fa6a621c4621a2dbb","url":"tw_stocks/8374.json"},{"revision":"1ab7c6ee1a7111bb2bef627fa51dfdbd","url":"tw_stocks/8367.json"},{"revision":"a5775038c38b2114172c40aa1700ca67","url":"tw_stocks/8341.json"},{"revision":"1e1dab4fa798cabe4df4e95f162e8452","url":"tw_stocks/8271.json"},{"revision":"99bd9c1ebd10091b8891e461ac5160fb","url":"tw_stocks/8261.json"},{"revision":"a6b4a8b00f9fe25e7a4ec59956381fba","url":"tw_stocks/8249.json"},{"revision":"1846123bf7ac976415b8e853f7620c53","url":"tw_stocks/8222.json"},{"revision":"1a3853556194722d5b3ed5a7fb2b5bde","url":"tw_stocks/8215.json"},{"revision":"0d9fffb985c7ac2a0ca65b4bda14a2da","url":"tw_stocks/8213.json"},{"revision":"7f6863cfbf76ef29fd4eb8838baf6640","url":"tw_stocks/8210.json"},{"revision":"87911c548c145f1d54cc4ccfea4b8ec0","url":"tw_stocks/8201.json"},{"revision":"44a9ba40d06b3ed4cf25d49e413a01bc","url":"tw_stocks/8163.json"},{"revision":"0e59e85f60fafa3941b8903669904a3f","url":"tw_stocks/8150.json"},{"revision":"bd21c944b77438fe602644146993a60f","url":"tw_stocks/8131.json"},{"revision":"d828efc39c4006df462d8dcabb88f3f7","url":"tw_stocks/8114.json"},{"revision":"23830c2ad8d4c87ad6a65b3e1f36e5ae","url":"tw_stocks/8112.json"},{"revision":"51a0ab92cecf89f0c75bcdd8e75289be","url":"tw_stocks/8110.json"},{"revision":"361c5150a75d651bea95ffe8c1547f0d","url":"tw_stocks/8105.json"},{"revision":"e9535495e173fc82fba83ddace39a146","url":"tw_stocks/8104.json"},{"revision":"7709beef05dd1b2868ba2379b0a02a28","url":"tw_stocks/8103.json"},{"revision":"ce2079a1b6d96de0a97bc69086227b32","url":"tw_stocks/8101.json"},{"revision":"2c99899ab36ea6e763fffbe77b2b2572","url":"tw_stocks/8081.json"},{"revision":"138793ffe3fd10166ff13e5cdd21017b","url":"tw_stocks/8072.json"},{"revision":"0ed204364606cca00415794a89afab19","url":"tw_stocks/8070.json"},{"revision":"8b0e0b3729cdc9b2eafe5f0876d40c98","url":"tw_stocks/8046.json"},{"revision":"371cada718f2e14b760f2d2941735e26","url":"tw_stocks/8045.json"},{"revision":"3697c7422edbfb9bb59e878debecaf7d","url":"tw_stocks/8039.json"},{"revision":"5abc6cb7f3bb2c0a7bcfee11f304029a","url":"tw_stocks/8033.json"},{"revision":"8d2c29c6ea4e10c7d8b23a66034e6677","url":"tw_stocks/8028.json"},{"revision":"3cd96fd4d8127c4096711371e5c67197","url":"tw_stocks/8021.json"},{"revision":"dc3480c089e5b37ddedbd550daf40622","url":"tw_stocks/8016.json"},{"revision":"c6483c89fee11477755cfd2010447bad","url":"tw_stocks/8011.json"},{"revision":"43fca55003e501b127100062daf4e760","url":"tw_stocks/7799.json"},{"revision":"7321594ac11132fc3056dbbcf6030032","url":"tw_stocks/7795.json"},{"revision":"6a1cd6f149627e3ec558b2ef814ff5f1","url":"tw_stocks/7791.json"},{"revision":"57e2c0e621f14d53d8c3755027850e27","url":"tw_stocks/7788.json"},{"revision":"4d028dab254a45ad7375ce09bd60aeb6","url":"tw_stocks/7786.json"},{"revision":"53de34d09f7c084f2d9f2da9ade3673b","url":"tw_stocks/7780.json"},{"revision":"da6830879ae51edbbfb5a543380514cd","url":"tw_stocks/7769.json"},{"revision":"e95b375a5f43e77d9757d32c3c75e25f","url":"tw_stocks/7765.json"},{"revision":"bfc3e06ae5e05347e096c1b0b3de38b8","url":"tw_stocks/7750.json"},{"revision":"5fbd5f412a617cfcf0e73ed28865ed5e","url":"tw_stocks/7749.json"},{"revision":"b9333ad53367dda59eb2e874727bf514","url":"tw_stocks/7736.json"},{"revision":"e7c951109d3dedd56c9dea1b0fd9efb7","url":"tw_stocks/7732.json"},{"revision":"a72236edb9f321bfc4f2fb9651732e05","url":"tw_stocks/7722.json"},{"revision":"2d1a5432a78a7c40e69609fec517a66c","url":"tw_stocks/7721.json"},{"revision":"031c54b230a133037b6fbf1c45078a7b","url":"tw_stocks/7711.json"},{"revision":"218daee41d35bbeab395a07ed241b743","url":"tw_stocks/7705.json"},{"revision":"e86764af8473173e96074f21174c8842","url":"tw_stocks/6994.json"},{"revision":"cd051249c8e749258516ce3f1c9c974f","url":"tw_stocks/6965.json"},{"revision":"4424e87923155bed0a27a75e498eaf19","url":"tw_stocks/6962.json"},{"revision":"849698706b1654d5c2d3cbf7ea60cf1f","url":"tw_stocks/6958.json"},{"revision":"58e06f0a8b04920f2f3e2513a72f3c08","url":"tw_stocks/6957.json"},{"revision":"a239d081318784ddb7c8e4a591b2a737","url":"tw_stocks/6952.json"},{"revision":"c4525abfafa4bd99bb31eebde36e7c1d","url":"tw_stocks/6944.json"},{"revision":"3b4ceb5e2d655ba026b3c6ba42646edc","url":"tw_stocks/6937.json"},{"revision":"9b3d3b008c8a07e264fd43a2cd140876","url":"tw_stocks/6936.json"},{"revision":"98fa5c19897efe461b347ae59a0fa852","url":"tw_stocks/6934.json"},{"revision":"61d5f9e326dfeeb3f5351f304f8ca55b","url":"tw_stocks/6933.json"},{"revision":"4162fcc245f5defb8d915b3351416f0f","url":"tw_stocks/6931.json"},{"revision":"85fde51abf2775ac67bdfc4b7406ef3a","url":"tw_stocks/6928.json"},{"revision":"f2ece93249e7df9598acc2adea2a4d3a","url":"tw_stocks/6923.json"},{"revision":"a823e6a4307825eebce174149caacec5","url":"tw_stocks/6919.json"},{"revision":"a67aa18376864395016c33464928b3f1","url":"tw_stocks/6918.json"},{"revision":"94b43984fc67d7cb73d5785cd7e69c96","url":"tw_stocks/6916.json"},{"revision":"4b038c9a93e04da771ffe3f907bbddbf","url":"tw_stocks/6914.json"},{"revision":"27bd0883e88f3aa0f66257539f7ce6ee","url":"tw_stocks/6909.json"},{"revision":"a6132ec5df025794538139b24519296f","url":"tw_stocks/6906.json"},{"revision":"bba2621ac0ac41e952a645732d0c4557","url":"tw_stocks/6902.json"},{"revision":"71e3e5e01b26b0144425c42bd734caec","url":"tw_stocks/6901.json"},{"revision":"0451e85488e39b088cf4cabe2da4c3a6","url":"tw_stocks/6890.json"},{"revision":"15a737fc92af49a0d981630c236f90bf","url":"tw_stocks/6887.json"},{"revision":"1ae5d7466c060852ad2d92e93089350a","url":"tw_stocks/6885.json"},{"revision":"bad9f2d98fe7d61ddadc2fa292f02d12","url":"tw_stocks/6873.json"},{"revision":"9ed8a1795805ab26611b3696e632cc95","url":"tw_stocks/6869.json"},{"revision":"ab0d2cefb8c15ed7d9da30562e5de3ed","url":"tw_stocks/6863.json"},{"revision":"1207946bb40b367447943f08616e5c1f","url":"tw_stocks/6862.json"},{"revision":"672615efa4d782d00f064c5ad9ac1470","url":"tw_stocks/6861.json"},{"revision":"960be1a9cd1341509f9fcc0f0567f0f9","url":"tw_stocks/6838.json"},{"revision":"1880bc5d7475ff991de3301d5b2756cf","url":"tw_stocks/6835.json"},{"revision":"86da1c821618e43944e7f47892ff6a81","url":"tw_stocks/6834.json"},{"revision":"9e7e948690213f5b93514f949f638c7a","url":"tw_stocks/6831.json"},{"revision":"2883901b06eba7b0db099d7429bc32c0","url":"tw_stocks/6830.json"},{"revision":"df7744304294c5b92d4de2cd82a150c6","url":"tw_stocks/6807.json"},{"revision":"9668f16b0a3e46237a927736c39a4cb3","url":"tw_stocks/6806.json"},{"revision":"e4f6c081223d247dc85150ebf09e32e2","url":"tw_stocks/6805.json"},{"revision":"695fc3a5628b37074256bb3430cf263c","url":"tw_stocks/6799.json"},{"revision":"43d56cdfcfa6b05e5d22083262522d44","url":"tw_stocks/6796.json"},{"revision":"bd389c94fa1daa8c37d0b0a0b284e41a","url":"tw_stocks/6794.json"},{"revision":"a7b7dbc6787c6a0f2fff116cd0c39928","url":"tw_stocks/6792.json"},{"revision":"06a3668e43ef450e42a96a7d86136886","url":"tw_stocks/6790.json"},{"revision":"57566e99665e1dfcc614f65f490776b2","url":"tw_stocks/6789.json"},{"revision":"95832d661228a40496dd7ef513fd2b6e","url":"tw_stocks/6782.json"},{"revision":"9555b9f7d4bffcdca5d62f15ef457bfe","url":"tw_stocks/6781.json"},{"revision":"be46f891e89ef0648a386a6c069f301d","url":"tw_stocks/6776.json"},{"revision":"7c5edbdddadba535f61b3fa8e1df387e","url":"tw_stocks/6770.json"},{"revision":"1dbf9e8cba1ce1e409056ef6f06d686c","url":"tw_stocks/6768.json"},{"revision":"37aa1be70e8f8e4abeb18ae44391cce4","url":"tw_stocks/6757.json"},{"revision":"845c79983948e788bd7796a7c1997a73","url":"tw_stocks/6756.json"},{"revision":"bc3bafb25c7c60dcc51ef98d264e3313","url":"tw_stocks/6754.json"},{"revision":"2f9db71f3151fb554e11ff278975cff2","url":"tw_stocks/6753.json"},{"revision":"636dad21a33e27c4d7fb0ebb6a88865b","url":"tw_stocks/6743.json"},{"revision":"d94135932244e6a785f2ad72b19de69c","url":"tw_stocks/6742.json"},{"revision":"2a105b18a75a55cec79cdb7c30716757","url":"tw_stocks/6722.json"},{"revision":"009ca58da171a320c4761d9d71de7d65","url":"tw_stocks/6719.json"},{"revision":"d2cdc9dcccdd8cf46cac20f3677fced6","url":"tw_stocks/6715.json"},{"revision":"adcdca8c744a0a5e7a75525715d60c7e","url":"tw_stocks/6706.json"},{"revision":"9fd43f891ae1a6b117e5698a2edfabe0","url":"tw_stocks/6698.json"},{"revision":"d52a1c72625188b2ed917e05b605aca9","url":"tw_stocks/6695.json"},{"revision":"e47a6f843240951ab1ba928c786a0795","url":"tw_stocks/6691.json"},{"revision":"0bdbc31cc4461861765a04253b7059f5","url":"tw_stocks/6689.json"},{"revision":"f44c3f2dd15059e4584af1020c06a88e","url":"tw_stocks/6674.json"},{"revision":"c3fddc7bec9a80edebd98938993ecffb","url":"tw_stocks/6672.json"},{"revision":"089acf264590d3d7d2c2d6552c725616","url":"tw_stocks/6671.json"},{"revision":"3cb5481e2b933b781fa4a69135399754","url":"tw_stocks/6670.json"},{"revision":"2261c4ef25bd1f236b5f8003f8e27df1","url":"tw_stocks/6669.json"},{"revision":"7d33d372ebb414deb933ca9ef3d23964","url":"tw_stocks/6668.json"},{"revision":"cb0e719f0d5d57dc68b7a704a1a54ac4","url":"tw_stocks/6666.json"},{"revision":"c72692c3a08c6ad7f32b286f9c71b1fe","url":"tw_stocks/6658.json"},{"revision":"3793ece161c2955ba28e1b97ed4e4572","url":"tw_stocks/6657.json"},{"revision":"a93283b1092573c9e75d11fa02780c4d","url":"tw_stocks/6655.json"},{"revision":"544064d896444591d6efa9ab750301f0","url":"tw_stocks/6641.json"},{"revision":"bbed8a746586826bfb466665d6561e5b","url":"tw_stocks/6625.json"},{"revision":"38b217e8a9cc3250f354ca41713ea8bf","url":"tw_stocks/6614.json"},{"revision":"0a13ea45dc7089a7aea307af07d12cde","url":"tw_stocks/6606.json"},{"revision":"618ae047e39818efe603694a2dba94ee","url":"tw_stocks/6605.json"},{"revision":"b08a9df10ab55b06d31d277bfdd2823a","url":"tw_stocks/6598.json"},{"revision":"4e09b9e33c4c5f80f4d0e05617607635","url":"tw_stocks/6592.json"},{"revision":"db14922dde77977284d240e4fb10c24b","url":"tw_stocks/6591.json"},{"revision":"8e48a1caba36f302a26c73af0cc1759b","url":"tw_stocks/6589.json"},{"revision":"b364a6e121b85b83d377e4cdc7469c2a","url":"tw_stocks/6585.json"},{"revision":"97805f051dad77d97c4cd6ee5836a1b3","url":"tw_stocks/6582.json"},{"revision":"17c49aa3117830c827043f18e1400deb","url":"tw_stocks/6581.json"},{"revision":"6bf9eefbb5c72b205e620d3949dea038","url":"tw_stocks/6579.json"},{"revision":"b8d537863816645e78fa9d62fe8be579","url":"tw_stocks/6573.json"},{"revision":"f432b2e442e916c749cd828c68044e69","url":"tw_stocks/6558.json"},{"revision":"3cb306cfb3db12bbbfbc05d24a82598b","url":"tw_stocks/6552.json"},{"revision":"7323d3a735621bdfc15861b8e72e912b","url":"tw_stocks/6550.json"},{"revision":"33452753d188ffb4b3718e0ff427b5d4","url":"tw_stocks/6541.json"},{"revision":"66cac9ef17249dd8ee3cfe456b89750f","url":"tw_stocks/6533.json"},{"revision":"6ef3f94e267abdfde013aa669af82ff9","url":"tw_stocks/6531.json"},{"revision":"5b2e92dfc6d4b85a9f37e62e0c20cc28","url":"tw_stocks/6526.json"},{"revision":"433f23b9e12b87d4000814eba8ac7776","url":"tw_stocks/6525.json"},{"revision":"1c8eda95cb69c7093d03efde7df426a1","url":"tw_stocks/6515.json"},{"revision":"805c93773a6bb072da29fb3d74f9fdf0","url":"tw_stocks/6505.json"},{"revision":"541fa680a50211ac0667fde7f32c2683","url":"tw_stocks/6504.json"},{"revision":"65a34dd5116813a32f0f8420b8eefe0d","url":"tw_stocks/6491.json"},{"revision":"d7acaea7d88797d3e78dbf13636cfa85","url":"tw_stocks/6477.json"},{"revision":"428a19f67b9e653ea557b85da3f7314c","url":"tw_stocks/6472.json"},{"revision":"75273423cd608ef14437e2f86b73b062","url":"tw_stocks/6464.json"},{"revision":"6916d678e41699986033918c3204d25a","url":"tw_stocks/6456.json"},{"revision":"756b212f01f95ae14ba548ebcb9e8ee8","url":"tw_stocks/6451.json"},{"revision":"602b1f977096becf8711f4959bae14e1","url":"tw_stocks/6449.json"},{"revision":"aa7c27a78158a10e0b70c567be638713","url":"tw_stocks/6446.json"},{"revision":"66d7df059d268fdf9b5d32bd1184e7da","url":"tw_stocks/6443.json"},{"revision":"6439a8cd419ddffa4cfd44203610a367","url":"tw_stocks/6442.json"},{"revision":"c3daeef5815aa2e9b7fe3168c0708df6","url":"tw_stocks/6438.json"},{"revision":"7070bca61be269e676137058147c28be","url":"tw_stocks/6431.json"},{"revision":"63dabebb3f5cf781310d2e50c262da38","url":"tw_stocks/6426.json"},{"revision":"be430fa5ac72cb23cb018e3c405ca26e","url":"tw_stocks/6416.json"},{"revision":"0400b2745d1a7bcd017399b136ba1564","url":"tw_stocks/6415.json"},{"revision":"dd790be79da51da7dea8893f684b9b09","url":"tw_stocks/6414.json"},{"revision":"ff39900dc9773a87effa88c59a3708a2","url":"tw_stocks/6412.json"},{"revision":"c30e16a73d3439ad71502459709c4eaa","url":"tw_stocks/6409.json"},{"revision":"b67f24d5fb9eb26d1a54cae12f2c234f","url":"tw_stocks/6405.json"},{"revision":"345923894a2b9972f61b4d4a2ecfe5fc","url":"tw_stocks/6285.json"},{"revision":"4f7a66f6746df55584b5f43c45b54bd5","url":"tw_stocks/6283.json"},{"revision":"c10f59e9e4c496a14bdbeb7bc55a0095","url":"tw_stocks/6282.json"},{"revision":"d864dd1a361aa3f4b24477f63b646e6a","url":"tw_stocks/6281.json"},{"revision":"c797e29e2f9986d5ca229c2a511e14d0","url":"tw_stocks/6278.json"},{"revision":"a46c049e5de84614b9f14c200858d2a0","url":"tw_stocks/6277.json"},{"revision":"127398cc2fff7cd07c0fc8a32d447cd6","url":"tw_stocks/6272.json"},{"revision":"538ca1e3481fc57ab6f3252467df76e8","url":"tw_stocks/6271.json"},{"revision":"e38de591d542c0b7a035cc9171993826","url":"tw_stocks/6269.json"},{"revision":"bd750affc1fadbad1e0f3eb43693be82","url":"tw_stocks/6257.json"},{"revision":"0af999de1aa94242cebc6c187b18d5f9","url":"tw_stocks/6243.json"},{"revision":"d53e300ade9099905bccbbc968b16ff6","url":"tw_stocks/6239.json"},{"revision":"8bb81bcd257352a9dbeb81ad5d5c56c2","url":"tw_stocks/6235.json"},{"revision":"58c885eeb1914112c2a68a46d2f5903a","url":"tw_stocks/6230.json"},{"revision":"44b49f0ebb794adb17a05f3a0d7cc167","url":"tw_stocks/6226.json"},{"revision":"d1e84c69ab9e096fe800f93fe2e14f34","url":"tw_stocks/6225.json"},{"revision":"de1399afcabff9997f77fdbcd17546cd","url":"tw_stocks/6224.json"},{"revision":"b639f3e19c4e366e570426f0faa4d6e6","url":"tw_stocks/6216.json"},{"revision":"abb555d920578a0ff5cd8685bd418219","url":"tw_stocks/6215.json"},{"revision":"7486fabcc8215a61149cedab6927bbfb","url":"tw_stocks/6214.json"},{"revision":"53a64b6adacab67da96d9ce96909dc6d","url":"tw_stocks/6213.json"},{"revision":"edfeed590e17e14f8380ea18e820633c","url":"tw_stocks/6209.json"},{"revision":"1ebc61c9b96b755408655a49b45217d6","url":"tw_stocks/6206.json"},{"revision":"b79fbcf975387094e6c33f1ce5ba7d91","url":"tw_stocks/6205.json"},{"revision":"faf01c97b0b281e9bff4a5cf3315a21f","url":"tw_stocks/6202.json"},{"revision":"3f07079c1eeb25b805e33895bd425935","url":"tw_stocks/6201.json"},{"revision":"d964b3d1e4722bb998d4bd3f32bd4c20","url":"tw_stocks/6197.json"},{"revision":"5e449cf7f29878a87efbd54ea14e02de","url":"tw_stocks/6196.json"},{"revision":"3e17e30f552910e4191369e16d516156","url":"tw_stocks/6192.json"},{"revision":"3e1fb1091d9102e967f112581dcf1eb2","url":"tw_stocks/6191.json"},{"revision":"9e4aaa531beb68f8f3d5fc15ae20dafc","url":"tw_stocks/6189.json"},{"revision":"d7a635979f31bba5e9a82beb921fd5ac","url":"tw_stocks/6184.json"},{"revision":"020deb4bf9246068bca22ad2a21639d2","url":"tw_stocks/6183.json"},{"revision":"c59f7a86d634393958b26074f897a4d9","url":"tw_stocks/6177.json"},{"revision":"e520bfc1892e26ab938699b53c5e7548","url":"tw_stocks/6176.json"},{"revision":"094883e346b0bf370711d12cf781f853","url":"tw_stocks/6168.json"},{"revision":"786a7d224aef7536bab68228a98a2922","url":"tw_stocks/6166.json"},{"revision":"65a80e5ced238e770e8a1e4c3294fb78","url":"tw_stocks/6165.json"},{"revision":"ebdcd2a3e460ad69b61104272a733a0b","url":"tw_stocks/6164.json"},{"revision":"3925b30f51526d7f2f8b126e819cfd05","url":"tw_stocks/6155.json"},{"revision":"d01793ca83e0c318c4aa3c8597a3b38f","url":"tw_stocks/6153.json"},{"revision":"58d69426ceefe0f57f19200adf57232f","url":"tw_stocks/6152.json"},{"revision":"fcb07d389f3be4dcb746a5f2c36fbb22","url":"tw_stocks/6142.json"},{"revision":"519ef4b53d914284870d9141fd5196c9","url":"tw_stocks/6141.json"},{"revision":"ae76e29b9d3345569ef38baa285cc505","url":"tw_stocks/6139.json"},{"revision":"31d81ac8772fb357b97b3e5d96420f15","url":"tw_stocks/6136.json"},{"revision":"bbc339ce1ce4757dd5ccb77f037caeef","url":"tw_stocks/6133.json"},{"revision":"583c5f5def91a5bd9102c18e76c9b783","url":"tw_stocks/6128.json"},{"revision":"3be44fb5f8904e267af3d423d0ecb978","url":"tw_stocks/6120.json"},{"revision":"970ae264fbefa6022796e96ee027a889","url":"tw_stocks/6117.json"},{"revision":"7c6e159051accafef02b596c41388eff","url":"tw_stocks/6116.json"},{"revision":"28570c576618df130160ab397063d28f","url":"tw_stocks/6115.json"},{"revision":"aeb4d5eadfd3d7bb13dbf7c3ce95091f","url":"tw_stocks/6112.json"},{"revision":"610190b708c06b3a19bf3dbdd0ca944c","url":"tw_stocks/6108.json"},{"revision":"44bb3fe98763242840a1d6a62e7d8ca5","url":"tw_stocks/6024.json"},{"revision":"1a1091443b62962e07d350671bbb559d","url":"tw_stocks/6005.json"},{"revision":"f2d689d76feb899616b5f972494a70fc","url":"tw_stocks/5907.json"},{"revision":"9a8849055692e5350d9de768e83fac2a","url":"tw_stocks/5906.json"},{"revision":"f0bfebde87fc83eb757c0ab55b0d82e6","url":"tw_stocks/5880.json"},{"revision":"a8d33dd528ab58b8fcf3d6b6ece0acf8","url":"tw_stocks/5876.json"},{"revision":"ff73a454441c2a89849df8ba7b9914f7","url":"tw_stocks/5871.json"},{"revision":"b27cb0c8390c8e16e391b4d1e9aefa2f","url":"tw_stocks/5706.json"},{"revision":"d5939fabdb5023420913cc46a2be5801","url":"tw_stocks/5608.json"},{"revision":"4d7aecb5213876ee5ea3c5a0c48c3583","url":"tw_stocks/5607.json"},{"revision":"41a5cba21869db2618ccd87c576fe2e3","url":"tw_stocks/5546.json"},{"revision":"f7fd1dbc2c326b51d65041e90f6f1530","url":"tw_stocks/5538.json"},{"revision":"e5f95e1efa61b68ea95447bc434c35dd","url":"tw_stocks/5534.json"},{"revision":"2395e6304e3d715d3d26f30b2bf2dadf","url":"tw_stocks/5533.json"},{"revision":"3a50b3d99006238a8f052562053adf21","url":"tw_stocks/5531.json"},{"revision":"099cba5b146a365060995bac80ed52e6","url":"tw_stocks/5525.json"},{"revision":"f64ae1929035afaeb930b9aeacd30da3","url":"tw_stocks/5522.json"},{"revision":"7de3e915017fed2800adf32a058b54fe","url":"tw_stocks/5521.json"},{"revision":"e524e99dd292050f342ff8a73d068f13","url":"tw_stocks/5519.json"},{"revision":"fff6d34246ad10edea50f1055bec5332","url":"tw_stocks/5515.json"},{"revision":"198ab432c93cb94553868c5619ae6f80","url":"tw_stocks/5484.json"},{"revision":"4a2ed1324d2318c07b6d887268b7cf4e","url":"tw_stocks/5471.json"},{"revision":"9631b19be2c922a6cdb88b3b02450b65","url":"tw_stocks/5469.json"},{"revision":"613aaf24a8a813e04a5ca221dec2dc56","url":"tw_stocks/5434.json"},{"revision":"ca468457619753070dd7df0d1d828e05","url":"tw_stocks/5388.json"},{"revision":"18348e12e8e44403e224d81744597e01","url":"tw_stocks/5306.json"},{"revision":"9f607e2c06fb7c1e455d99025c46a5f7","url":"tw_stocks/5292.json"},{"revision":"022dafb0d80bd51b8cb1dadabbc1d58c","url":"tw_stocks/5288.json"},{"revision":"14056c9f2ea6b1b58211f8a336e1abc0","url":"tw_stocks/5285.json"},{"revision":"94396c91f546afe88569e8c52f6d3da5","url":"tw_stocks/5284.json"},{"revision":"cc631d39ae03887c99db144f794db65b","url":"tw_stocks/5283.json"},{"revision":"2f87e04d921c329c47c533e5b112cb0d","url":"tw_stocks/5269.json"},{"revision":"8127a1f0cbc39b543c52cd159e869b9f","url":"tw_stocks/5258.json"},{"revision":"678e11070e5bbc8a9881c8b6293be78c","url":"tw_stocks/5244.json"},{"revision":"1f09a4f5e4be742ec9360a934047e5b7","url":"tw_stocks/5243.json"},{"revision":"daaed4c19b45843df2402b30354200c7","url":"tw_stocks/5234.json"},{"revision":"699dbfec0516bfa5544691631e899e1a","url":"tw_stocks/5225.json"},{"revision":"0ec572937ee24c0b6a74586cd98de7ed","url":"tw_stocks/5222.json"},{"revision":"354cf5d71a9b8e440eb2d4d89e96e42a","url":"tw_stocks/5215.json"},{"revision":"e82b9f12a7bb58986895cb076c303280","url":"tw_stocks/5203.json"},{"revision":"4669ae5aa633610fc8a8ae3dad51f295","url":"tw_stocks/5007.json"},{"revision":"45ea0fb6b07bae523533dad0e0166758","url":"tw_stocks/4999.json"},{"revision":"b6e322ad4fbe3f613e85d9624b853a27","url":"tw_stocks/4994.json"},{"revision":"75051d3f698f8f9188f428d56aec141c","url":"tw_stocks/4989.json"},{"revision":"77e49bce857fd74622581b3bc2a39b2e","url":"tw_stocks/4977.json"},{"revision":"3cd585ac813f30c93ffcef6c2fcde7cc","url":"tw_stocks/4976.json"},{"revision":"db8bb94064c5b972396c2cd8018a983c","url":"tw_stocks/4968.json"},{"revision":"bedb5b4f01a0440ccc8f536b37615d71","url":"tw_stocks/4967.json"},{"revision":"bf01460a357c80579f244ad446e87c07","url":"tw_stocks/4961.json"},{"revision":"16ab4ab6a66e0cfb93a77dac29757645","url":"tw_stocks/4960.json"},{"revision":"2f410da829249fafaa20574e30e9ecfb","url":"tw_stocks/4958.json"},{"revision":"357f5c3c819a7cd27f9cec45e592de2c","url":"tw_stocks/4956.json"},{"revision":"d560cdb9fe43c927ffa8a8d54696c92e","url":"tw_stocks/4952.json"},{"revision":"564260799504c99be6efb2b4365e2f8a","url":"tw_stocks/4949.json"},{"revision":"07148974bb66e48f302c12682f26003a","url":"tw_stocks/4943.json"},{"revision":"490d7219f06a530825ca02bfedbaeed3","url":"tw_stocks/4942.json"},{"revision":"8dc4de71b62dd7cc834f378dcb1fa2ae","url":"tw_stocks/4938.json"},{"revision":"34fe3df4b3bbfd892bcbd9befa1c7c07","url":"tw_stocks/4935.json"},{"revision":"dce2a7fe8dffbab531ea578b99102493","url":"tw_stocks/4934.json"},{"revision":"65db8f1b5e135e1bbddf47a09c2b91a6","url":"tw_stocks/4930.json"},{"revision":"0c62f2940f46aaabf57057a9170517a6","url":"tw_stocks/4927.json"},{"revision":"d301c831627a34100f55f1bf6c1d94bb","url":"tw_stocks/4919.json"},{"revision":"bf49055d0a7c17dc0e1b09db9f3dadec","url":"tw_stocks/4916.json"},{"revision":"ad6a9cec316a84576c1c7525ccc7c31c","url":"tw_stocks/4915.json"},{"revision":"97f641e67b4bd3587e8ae2af879ae80d","url":"tw_stocks/4912.json"},{"revision":"ee1b179cd37070704dc72e42fcf950c4","url":"tw_stocks/4906.json"},{"revision":"3d5a91853dc7de1c9d6cc4b6ea941cbf","url":"tw_stocks/4904.json"},{"revision":"d596bef77e51aac7c43f64c0e019e02a","url":"tw_stocks/4807.json"},{"revision":"e29b1e056441eeec9e7690b3dbb23433","url":"tw_stocks/4771.json"},{"revision":"c1568d266f9a990ea571bf2fc480bad7","url":"tw_stocks/4770.json"},{"revision":"67d1546a1a5d5b36efecc8a3b7e7ca00","url":"tw_stocks/4766.json"},{"revision":"64cfac5bab2e9e138698ab9b5171d99e","url":"tw_stocks/4764.json"},{"revision":"40c7a67935df9fbe09586eff48cdf95c","url":"tw_stocks/4763.json"},{"revision":"12749f21e1b8049db55ba5ecd487efab","url":"tw_stocks/4755.json"},{"revision":"455a810e12fdb12a5ea1d65fbc35e0c4","url":"tw_stocks/4746.json"},{"revision":"d7d97a800ea33f8a7c63fd44a13d8036","url":"tw_stocks/4739.json"},{"revision":"0f732ae9b93e168032e332a21938e938","url":"tw_stocks/4737.json"},{"revision":"9ede532a3a669ddfa0623bc220d93536","url":"tw_stocks/4736.json"},{"revision":"fb012c0176eafbbf211d373826b63456","url":"tw_stocks/4722.json"},{"revision":"4ae6d7f16777f978dbaae4c1d5deed6c","url":"tw_stocks/4720.json"},{"revision":"04d0ae05da070f9e2535784b3da8e67f","url":"tw_stocks/4588.json"},{"revision":"b50ea043ec27072a343a51e69163209e","url":"tw_stocks/4585.json"},{"revision":"9ec91d94041ae74fbb98f55dceb069b4","url":"tw_stocks/4583.json"},{"revision":"6ae5638ab297c255720f5a184dd06f39","url":"tw_stocks/4581.json"},{"revision":"5610ae66c9cb37440c5aac468e3571c7","url":"tw_stocks/4576.json"},{"revision":"f3265db06e2e4881c2d3bb4377f7f0ee","url":"tw_stocks/4572.json"},{"revision":"8a038b7fa4449de395be34fb5183bb93","url":"tw_stocks/4571.json"},{"revision":"7963951c0acf5a967971bbc79d6ab5c5","url":"tw_stocks/4569.json"},{"revision":"1f1fdae8bb6cd27d1a7becc3633187d2","url":"tw_stocks/4566.json"},{"revision":"28ca6f442d0acd9597249e895f4a285d","url":"tw_stocks/4564.json"},{"revision":"83b1ad35ffb963ebe2e2cbd7d54e1ab6","url":"tw_stocks/4562.json"},{"revision":"9ff927b06b6b44a12f4353018c8183ca","url":"tw_stocks/4560.json"},{"revision":"9dfb435dce4feadcf08a6cbb687b51c5","url":"tw_stocks/4557.json"},{"revision":"92c01a7ce44010d97f267ff64c2d707b","url":"tw_stocks/4555.json"},{"revision":"759380d7d9b384c41bd753b21e7a5433","url":"tw_stocks/4552.json"},{"revision":"61fa30c1cc1fed99c98abcfc3c787227","url":"tw_stocks/4551.json"},{"revision":"ee88f4137216f1bfce61b358651b4fc2","url":"tw_stocks/4545.json"},{"revision":"d4c2a2adcab81194814197a0f59e949c","url":"tw_stocks/4540.json"},{"revision":"04bcee77f671a62181556bbaac23642d","url":"tw_stocks/4536.json"},{"revision":"70cc55a495eb0a191c6b19ebf8c1fe92","url":"tw_stocks/4532.json"},{"revision":"f3ff0bb66d1cdcb63d8f36c97eb4eb9c","url":"tw_stocks/4526.json"},{"revision":"55edf9677c66a4fbc6990d147693d57c","url":"tw_stocks/4441.json"},{"revision":"4bc3b0d1cec1ae2317f2e8e4082c2840","url":"tw_stocks/4440.json"},{"revision":"15ae89e93b06c0d13e51072399d3b178","url":"tw_stocks/4439.json"},{"revision":"5f19f4b15ce20b48bd04603492d81712","url":"tw_stocks/4438.json"},{"revision":"51892aab6a86ff0338af630b6ce0f47a","url":"tw_stocks/4426.json"},{"revision":"08065856739196eedd28eaf517329741","url":"tw_stocks/4414.json"},{"revision":"f10aa0f5e5f9350e3e28f5dd9025b34a","url":"tw_stocks/4306.json"},{"revision":"7e5038b2665c59933f7014caf9579159","url":"tw_stocks/4190.json"},{"revision":"9db2ab1f7138915074b2b0086870531e","url":"tw_stocks/4164.json"},{"revision":"9e3e46a92c4ecee0ae1df01d50f191e9","url":"tw_stocks/4155.json"},{"revision":"a31593d35b0815aa30ce8ae20227143c","url":"tw_stocks/4148.json"},{"revision":"2f5746d99faed2f1f61b7900540a379f","url":"tw_stocks/4142.json"},{"revision":"89eac62bf1e3dd92a46a23f3241587e4","url":"tw_stocks/4137.json"},{"revision":"d000d951a38a687c880a527f32eacfad","url":"tw_stocks/4133.json"},{"revision":"ebde70d04a6917427afba0b0029a2e01","url":"tw_stocks/4119.json"},{"revision":"8b2250b4b90100319e68abe9b7989d3f","url":"tw_stocks/4108.json"},{"revision":"0f357bc714696dba1342aa6ac29ae340","url":"tw_stocks/4106.json"},{"revision":"66850d6ba2fed9e94d5a4c1b406564a3","url":"tw_stocks/4104.json"},{"revision":"74fdbd71eec37ef699a54e72222a5530","url":"tw_stocks/3717.json"},{"revision":"368e52a34fc2f4d6c880dd40916abe0c","url":"tw_stocks/3716.json"},{"revision":"37d69439cad33965c897e07c541f4532","url":"tw_stocks/3715.json"},{"revision":"dde8869b7c230fedd3ec5c800b866d6b","url":"tw_stocks/3714.json"},{"revision":"d546831b71137a1d88ebb7065bccec24","url":"tw_stocks/3712.json"},{"revision":"4d1a68bbd4f977b037c5ef4f52c3d742","url":"tw_stocks/3711.json"},{"revision":"d3d0c15636f0e70ce8d45be30e78d7a7","url":"tw_stocks/3708.json"},{"revision":"2194da991056bed29c4d9fe168568125","url":"tw_stocks/3706.json"},{"revision":"f6bea5d70675347d93cdf127b472da31","url":"tw_stocks/3705.json"},{"revision":"572c5b0e3ac8489576770c39111a0dd5","url":"tw_stocks/3704.json"},{"revision":"afdb3868e9408ab0f0c0d2f801bccb14","url":"tw_stocks/3703.json"},{"revision":"032b8ec568b5c09354d0972c0e7e8670","url":"tw_stocks/3702.json"},{"revision":"440fecf73a5babe63585f6f54c335e76","url":"tw_stocks/3701.json"},{"revision":"9427065407bf5e89ff6d1bdcd80ac2aa","url":"tw_stocks/3694.json"},{"revision":"5f89a7a5227c9ce135df003582d53e63","url":"tw_stocks/3686.json"},{"revision":"e36b56fc33ddf62c4fef1210256a71da","url":"tw_stocks/3679.json"},{"revision":"5e696908fbe7652a4730d7211b3a3a65","url":"tw_stocks/3673.json"},{"revision":"c0109ca952f28b2ad380e4666b3fdced","url":"tw_stocks/3669.json"},{"revision":"4bd0c0522b8a0a9639ecffae3b54554b","url":"tw_stocks/3665.json"},{"revision":"208fe7a177d7f585aa3753a4bcb19808","url":"tw_stocks/3661.json"},{"revision":"2eb2045e63e593beced651ab2ea1ebea","url":"tw_stocks/3653.json"},{"revision":"fd997fb31da8b450bd104d3cf2230107","url":"tw_stocks/3652.json"},{"revision":"8d1f3a0586ad4e3a23c7a67795a45476","url":"tw_stocks/3645.json"},{"revision":"932a54d8780732b430cbad65bfacbab9","url":"tw_stocks/3622.json"},{"revision":"370b705c9410378eda89b48094c238c5","url":"tw_stocks/3617.json"},{"revision":"eece54988b104d5860ef01a2baa6d253","url":"tw_stocks/3607.json"},{"revision":"a7c9b25f5d7efaf8f76c0a7babda73fb","url":"tw_stocks/3605.json"},{"revision":"36b98964902217d28c28620ab191808d","url":"tw_stocks/3596.json"},{"revision":"885b6ec9c599175166938e2ed63b487c","url":"tw_stocks/3593.json"},{"revision":"e6d2ba9da1a81701eed2c188734d8104","url":"tw_stocks/3592.json"},{"revision":"bee362e2b5a10d70ee44b76e96f1afc0","url":"tw_stocks/3591.json"},{"revision":"278330769fdafc6465cbf94012a073df","url":"tw_stocks/3588.json"},{"revision":"2289b005f2c0a8586aaae85db917e096","url":"tw_stocks/3583.json"},{"revision":"e60487035bd4ec0da7425cf0325919bd","url":"tw_stocks/3576.json"},{"revision":"a111d9828cb4714771eb2d758d86c52c","url":"tw_stocks/3563.json"},{"revision":"4722043f1a79325abc224979ba6e5d89","url":"tw_stocks/3557.json"},{"revision":"90034c4ad6ca2585770cf20592341fb4","url":"tw_stocks/3550.json"},{"revision":"db6bb054dc8f0af496c2363efc4d930f","url":"tw_stocks/3545.json"},{"revision":"87328611953ae1a20bab62fdd52ad9ea","url":"tw_stocks/3543.json"},{"revision":"3671db16ebe1d792bed5ebc90f75797e","url":"tw_stocks/3535.json"},{"revision":"1e6d0360e2aada3443c9a288ff4f4519","url":"tw_stocks/3533.json"},{"revision":"327ff68c0830aeee8f99f7dc91aec5f5","url":"tw_stocks/3532.json"},{"revision":"c6dcfa13ecc1910bf196e377523abcde","url":"tw_stocks/3530.json"},{"revision":"b11187557c828a2d3b2911afe634507d","url":"tw_stocks/3528.json"},{"revision":"60ba93629d23e4bd51f8c86a61144ad1","url":"tw_stocks/3518.json"},{"revision":"3e6450674ce98befb64a7c2e6bcbfa87","url":"tw_stocks/3515.json"},{"revision":"93ccb7974fec9826b5af173a3ad9eca7","url":"tw_stocks/3504.json"},{"revision":"5aa094fea5f29408a112a251c8c26c5b","url":"tw_stocks/3501.json"},{"revision":"663500aa3f9b2dc66a77eb63997d4590","url":"tw_stocks/3494.json"},{"revision":"3586cf12e2f525dad27b5e64695b253b","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"a4041f1a10faddceb96ae27bf40eb5b9","url":"tw_stocks/3450.json"},{"revision":"c6d9c3fedffcfa905e701b49aee74382","url":"tw_stocks/3447.json"},{"revision":"4ce920fcbf0151d6919dca1a646e381f","url":"tw_stocks/3443.json"},{"revision":"63dd47f18eba7fd89c7fbbdae4b19e71","url":"tw_stocks/3437.json"},{"revision":"91a35fa24ccd7653b6b706c3ad7e2ff2","url":"tw_stocks/3432.json"},{"revision":"6dac80a153c4f3877e341ba6a9ecd0d3","url":"tw_stocks/3419.json"},{"revision":"545acb0fc67caa2991423af81cf6226b","url":"tw_stocks/3416.json"},{"revision":"5d4254c3822ad5bb34f88bbc6949e295","url":"tw_stocks/3413.json"},{"revision":"c8d4d743b1f7c1605f02444875a637be","url":"tw_stocks/3406.json"},{"revision":"7d7ab2e5afbe50c1be6d5c09423b1987","url":"tw_stocks/3380.json"},{"revision":"cdeacad84be014beb3e7e4acf212e668","url":"tw_stocks/3376.json"},{"revision":"0e8e57dc988f96002380d5114c6a7958","url":"tw_stocks/3356.json"},{"revision":"f849bafd3856d6c539f95538bf33485b","url":"tw_stocks/3346.json"},{"revision":"693d279298838e0e2228155c0fcf6ddb","url":"tw_stocks/3338.json"},{"revision":"4e1156487fd23fcea6b0ec3f0b1ffd2b","url":"tw_stocks/3321.json"},{"revision":"32861f81d7d1a761fae713ffdbf1b0c3","url":"tw_stocks/3312.json"},{"revision":"e42238ce378ddef6560971d446303941","url":"tw_stocks/3311.json"},{"revision":"7f96b2b11392212e639854dc3a29e6c3","url":"tw_stocks/3308.json"},{"revision":"5160123844f296943fce6f2f4c47ba71","url":"tw_stocks/3305.json"},{"revision":"30aad0b36ccb5294ac929ea359fa768b","url":"tw_stocks/3296.json"},{"revision":"76e285e620afe3168c3aab0f1d3766d3","url":"tw_stocks/3266.json"},{"revision":"4759cb0f14948a2631de605597596a59","url":"tw_stocks/3257.json"},{"revision":"d42a2574c85eaea84fdf07cf35799e79","url":"tw_stocks/3231.json"},{"revision":"e0cd8453d5543b6eba25d64e11f7a54b","url":"tw_stocks/3229.json"},{"revision":"e59581b6845c0cfd381317483b6cfb55","url":"tw_stocks/3209.json"},{"revision":"a187b7020d76ea2ed92d4bace3beeea6","url":"tw_stocks/3189.json"},{"revision":"3ec86efb02f6d61a4c0f712d12846382","url":"tw_stocks/3168.json"},{"revision":"618c139c87d41fff89975c785d66ab7c","url":"tw_stocks/3167.json"},{"revision":"4a16d2cb9294024cb1051a9361c699cf","url":"tw_stocks/3164.json"},{"revision":"752d6492ddcd46b7e92247e27bd7c393","url":"tw_stocks/3149.json"},{"revision":"3aa7c0457b762dc492b3a7b08e95c43c","url":"tw_stocks/3138.json"},{"revision":"ade8aa4383f0593d8943b929c365a6a6","url":"tw_stocks/3135.json"},{"revision":"5f726b6d5edce56daf553fb0d4e7dd60","url":"tw_stocks/3130.json"},{"revision":"ac685aaef6658e38475f77af6136fb15","url":"tw_stocks/3094.json"},{"revision":"9267364c3db193b56b1b6cd21d530ddf","url":"tw_stocks/3092.json"},{"revision":"233289821752aa82be90244414b8b81a","url":"tw_stocks/3090.json"},{"revision":"c5dbda4df5ef1d7b4ba192a663b26030","url":"tw_stocks/3062.json"},{"revision":"b282497e38422dbe1a5870a211851705","url":"tw_stocks/3060.json"},{"revision":"b8eeda2e3d30a4d2d978b9e9378e4770","url":"tw_stocks/3059.json"},{"revision":"dc6dd43dcae04ef421b0854a589186c8","url":"tw_stocks/3058.json"},{"revision":"83111fb38f278488f09877e35a651cd4","url":"tw_stocks/3057.json"},{"revision":"85095339c642045e00a04ff9a4c8482c","url":"tw_stocks/3056.json"},{"revision":"5fad7ec51297fcac581302d5d4f828e9","url":"tw_stocks/3055.json"},{"revision":"3003388988ee5730a608a9099dd0008a","url":"tw_stocks/3054.json"},{"revision":"5ee17e3edf37bdc156c32d199730c7b8","url":"tw_stocks/3052.json"},{"revision":"c57cbe3b7114df5fa5d97d0e53c003c5","url":"tw_stocks/3051.json"},{"revision":"16175fa81753b1219c12f49d03920c70","url":"tw_stocks/3050.json"},{"revision":"02ed99d1fbeb9ccbdb79b1b9c79052ab","url":"tw_stocks/3049.json"},{"revision":"6bbbd5122dfbab25c132bc40fec23c18","url":"tw_stocks/3048.json"},{"revision":"ac8bcbaa41e9aa7b64506ebee7b0fa63","url":"tw_stocks/3047.json"},{"revision":"a96a526fe2b3a98a29ca68fbb79d15fd","url":"tw_stocks/3046.json"},{"revision":"4281c4c85625d0d25d751f170e8c9dca","url":"tw_stocks/3045.json"},{"revision":"8ad1002f86fa8a3679274d1c6d73e034","url":"tw_stocks/3044.json"},{"revision":"135a550fd6661c0f907fb91187a0ca65","url":"tw_stocks/3043.json"},{"revision":"1709855c59e1189fa7b07eeb44dc534d","url":"tw_stocks/3042.json"},{"revision":"ebd55b0dded33b167d1c5060399f915d","url":"tw_stocks/3041.json"},{"revision":"9963fad236a15a80111c8bd36ee69c24","url":"tw_stocks/3040.json"},{"revision":"948d683b0373325a0d7d9f282ef1d16b","url":"tw_stocks/3038.json"},{"revision":"44cac3ec70dd2a2ab0be558c2e8510f2","url":"tw_stocks/3037.json"},{"revision":"f4f9c7ca8e442df06ec0f9918be08723","url":"tw_stocks/3036.json"},{"revision":"2bc36d0e294e0efe99dbd80635ac85e4","url":"tw_stocks/3035.json"},{"revision":"2ea5e36053cfe72147ce331630e4ca6d","url":"tw_stocks/3034.json"},{"revision":"cb505f66e85b66bd81c4ef07ef798df7","url":"tw_stocks/3033.json"},{"revision":"59dbc6a28a5c7e72759651430cb93490","url":"tw_stocks/3032.json"},{"revision":"f7817a0e6b7fea54eadc2dbdf432e139","url":"tw_stocks/3031.json"},{"revision":"d3d850a0129ca2dcffeacc2852688291","url":"tw_stocks/3030.json"},{"revision":"d11396f58e36d7d3dca2e0d2dbdc3eee","url":"tw_stocks/3029.json"},{"revision":"ff4b53c265c0b1ccdb6bc01dd03dc245","url":"tw_stocks/3028.json"},{"revision":"1038de032b2b2c83c943608d2c53c7af","url":"tw_stocks/3027.json"},{"revision":"d69ec2c8fb3b16e47d172f37e82a3ed7","url":"tw_stocks/3026.json"},{"revision":"d5c3312884c0456f1285dcbc07aa090c","url":"tw_stocks/3025.json"},{"revision":"6d79301b399ea537a5e0e3461ffd23ad","url":"tw_stocks/3024.json"},{"revision":"486ba1889605e636dce38b985b838d79","url":"tw_stocks/3023.json"},{"revision":"2352c100b6acd6628f443aca12a9d78f","url":"tw_stocks/3022.json"},{"revision":"d6338fec6e75d1e5bfd876f81c15113d","url":"tw_stocks/3021.json"},{"revision":"714274dfb06bde04093320d5586b0b28","url":"tw_stocks/3019.json"},{"revision":"a0ac1c18eb75bab63f8cf8def5d4996f","url":"tw_stocks/3018.json"},{"revision":"7d1ddb338e18fc3e59b7a4b82f3697e1","url":"tw_stocks/3017.json"},{"revision":"9d832e7bd9a2bccb310d34047ce19fd3","url":"tw_stocks/3016.json"},{"revision":"76218f1683417de6a8fa261c894ad023","url":"tw_stocks/3015.json"},{"revision":"a65d5cb9e306a3f18600c2e5512021da","url":"tw_stocks/3014.json"},{"revision":"c98569210ae11f42742c40dd8ac62e42","url":"tw_stocks/3013.json"},{"revision":"2f75b48f1600eab1990417334466b5ed","url":"tw_stocks/3011.json"},{"revision":"c3c8e3ce5d3657719b91eb06985cfe5a","url":"tw_stocks/3010.json"},{"revision":"c57514eaac8565117efcb6835b534f5e","url":"tw_stocks/3008.json"},{"revision":"6fbd120fda1101aabe77da14d23434e9","url":"tw_stocks/3006.json"},{"revision":"af139ab98a6b43ccce78099271b66c90","url":"tw_stocks/3005.json"},{"revision":"865ff46494d3f49876f0e604bb4753f7","url":"tw_stocks/3004.json"},{"revision":"70d78b0294f53e8ba4d39afba7b15f41","url":"tw_stocks/3003.json"},{"revision":"beed7aa1cb592ae5a309dbf8c8438367","url":"tw_stocks/3002.json"},{"revision":"2cc0c14b5a47b67f5c9a1698b99c4b2c","url":"tw_stocks/2945.json"},{"revision":"0da9280cdec88d27a2da49b13dc08721","url":"tw_stocks/2939.json"},{"revision":"96b5a3b63a0ba3bd5a533c4a366b761c","url":"tw_stocks/2929.json"},{"revision":"0e2fbbb9283fddb60ee53fc1cfaa1ffe","url":"tw_stocks/2923.json"},{"revision":"bd3c92ec05c171d590e563837af48b0f","url":"tw_stocks/2915.json"},{"revision":"97fc40c9ca85f24e4a25300c6c03edf0","url":"tw_stocks/2913.json"},{"revision":"79a30fc08a4043931468bdcd378ff4be","url":"tw_stocks/2912.json"},{"revision":"8e730027116437cb43ecf6971d1a927c","url":"tw_stocks/2911.json"},{"revision":"1431baf0d42c64698d2ac8a292570961","url":"tw_stocks/2910.json"},{"revision":"3fdad4d160eb3355982336c1f79b2b51","url":"tw_stocks/2908.json"},{"revision":"8d63f2bc7e95eb810ff7034481cc1e0b","url":"tw_stocks/2906.json"},{"revision":"b9d1b70ca4c3251bd6fb0587090d5a9f","url":"tw_stocks/2905.json"},{"revision":"de80e0eb847cf8c3f0927d8abe1686a0","url":"tw_stocks/2904.json"},{"revision":"bd1141ebf7127c317876406b29c5c427","url":"tw_stocks/2903.json"},{"revision":"451d46b34a8c65399f23f1485a21652d","url":"tw_stocks/2901.json"},{"revision":"dc6520f2973b34951387b799cc36f89e","url":"tw_stocks/2897.json"},{"revision":"6883b61d593099f71f8b910805cfafec","url":"tw_stocks/2892.json"},{"revision":"b2e5369abcb21cd132a3f569cba9dd61","url":"tw_stocks/2891.json"},{"revision":"a223b33514cc7c23972b7bda1c959c21","url":"tw_stocks/2890.json"},{"revision":"ec15ef2ebc72b766275357158467e874","url":"tw_stocks/2889.json"},{"revision":"7467ba03fc3f0fe0f8426e75d34524bb","url":"tw_stocks/2887.json"},{"revision":"73285213a2e1ec7c974de206399181da","url":"tw_stocks/2886.json"},{"revision":"95b12c29cbddd76c358dadd9906fae26","url":"tw_stocks/2885.json"},{"revision":"85429da78e1afbbc1c6cdd1ac331276d","url":"tw_stocks/2884.json"},{"revision":"ac27555857ee651b294c148c4eb2520c","url":"tw_stocks/2883.json"},{"revision":"89d116573585bbc920f7fa2c1811ff15","url":"tw_stocks/2882.json"},{"revision":"b359fad6db3f48117d17ac41272f40b2","url":"tw_stocks/2881.json"},{"revision":"4241a6cad1cc841365dfcd1371a8de9b","url":"tw_stocks/2880.json"},{"revision":"68f0ec67e0b8da9ecbdd47b729778d23","url":"tw_stocks/2867.json"},{"revision":"1c8f72ec852cbe1515a30cb09a33061d","url":"tw_stocks/2855.json"},{"revision":"0f33446402070f6f92627833c1ff42f2","url":"tw_stocks/2852.json"},{"revision":"5725d9822a3577d38d3e2b65cacfbeac","url":"tw_stocks/2851.json"},{"revision":"f31893b815e6f30eaea06906cfe382fc","url":"tw_stocks/2850.json"},{"revision":"834cb9e532d5f2fa78bc84fdb45f149c","url":"tw_stocks/2849.json"},{"revision":"e8ec34c35c19dcc5de80b590989c5589","url":"tw_stocks/2845.json"},{"revision":"782cd1ff5f651719cdd6825cee4368d0","url":"tw_stocks/2838.json"},{"revision":"09badbeb086484e669f10a04305f1071","url":"tw_stocks/2836.json"},{"revision":"944e433dad3d82496b3d797e8052d363","url":"tw_stocks/2834.json"},{"revision":"29d9efe2891a68b9141d84d97f639fa4","url":"tw_stocks/2832.json"},{"revision":"7e13f11bbe5357120540b6dfac101da9","url":"tw_stocks/2820.json"},{"revision":"ec31da93a43d709bbc9bc9d45f79dc94","url":"tw_stocks/2816.json"},{"revision":"8b7017b010971b4ed63e7321c7204bcf","url":"tw_stocks/2812.json"},{"revision":"cfcb992ecf4ae85b67a5692cbaf0bfe8","url":"tw_stocks/2801.json"},{"revision":"76912e9ff73f80b40b2bd1542f1bcdcc","url":"tw_stocks/2762.json"},{"revision":"82e1dcfc4dabce5cb0ee99ea13980dbe","url":"tw_stocks/2753.json"},{"revision":"b96f109f80d3cad3445d73af690b0abb","url":"tw_stocks/2748.json"},{"revision":"8143a41df0d4fed0267b2ccc1df02473","url":"tw_stocks/2739.json"},{"revision":"988bff2f01a33e63b7a6eb11877925f9","url":"tw_stocks/2731.json"},{"revision":"d78bf5a6aabfb2e1bb156bf9e7f731a2","url":"tw_stocks/2727.json"},{"revision":"9b91023d6f3b12c4e61b294857489dba","url":"tw_stocks/2723.json"},{"revision":"3e86aee70e7021aa1f8fef1479e663a4","url":"tw_stocks/2722.json"},{"revision":"37bcac15f31be729316c13c2dad8a8bb","url":"tw_stocks/2712.json"},{"revision":"aeb36861939ad7dc2004867c23c22a6c","url":"tw_stocks/2707.json"},{"revision":"30ef3e6f789fb4e01922d48e1e995159","url":"tw_stocks/2706.json"},{"revision":"701bc9b0c6a3a65ecbde2f34915e544f","url":"tw_stocks/2705.json"},{"revision":"eb79202d921581d6d3c9d2578752bebc","url":"tw_stocks/2704.json"},{"revision":"7f891f7c56173063866813c79ae3062b","url":"tw_stocks/2702.json"},{"revision":"290f6daa4534dee4d68e6050c66bec27","url":"tw_stocks/2701.json"},{"revision":"bfd0f9d02655e3e3fe8abc5a483491c9","url":"tw_stocks/2646.json"},{"revision":"8501916b13997712c72ea371fdbcf180","url":"tw_stocks/2645.json"},{"revision":"c348b3a565f5716bcf7d83b8bdd2907b","url":"tw_stocks/2642.json"},{"revision":"5eba3ee7c64da2c2a5da9e7ce5b3d324","url":"tw_stocks/2637.json"},{"revision":"075974be2099ded8c22d999a6f6b4782","url":"tw_stocks/2636.json"},{"revision":"4070404f90e235d71679d23d35921117","url":"tw_stocks/2634.json"},{"revision":"3d906430f077bcabaa53b5180574ae77","url":"tw_stocks/2633.json"},{"revision":"2f453d888873ffff473c03f9d911c070","url":"tw_stocks/2630.json"},{"revision":"21d000251d56f995e9c9c15e6413bf26","url":"tw_stocks/2618.json"},{"revision":"fadb25d2a7a96f77d35abf57fd2c6a20","url":"tw_stocks/2617.json"},{"revision":"e3d1f5b57a32d9a9c72c612fd849cab6","url":"tw_stocks/2616.json"},{"revision":"735b356a36d2ef09f4943ee142fd2609","url":"tw_stocks/2615.json"},{"revision":"3abe8f9961ce50d4c06b65a144ef4dd4","url":"tw_stocks/2614.json"},{"revision":"4fd87c4af8b3381a314738e9de724c62","url":"tw_stocks/2613.json"},{"revision":"4fd741e11ab9acee987ff4846c67079e","url":"tw_stocks/2612.json"},{"revision":"577b7338df62fec6a624f28d52ced734","url":"tw_stocks/2611.json"},{"revision":"87b7f1b9955c6b3174c6d531b8e8e15a","url":"tw_stocks/2610.json"},{"revision":"2df1056bcd7adbc3e80388b1a4157f22","url":"tw_stocks/2609.json"},{"revision":"34dffa08e220f3e665767c57f0672df1","url":"tw_stocks/2608.json"},{"revision":"6913aadd34def75796529ece88bfae50","url":"tw_stocks/2607.json"},{"revision":"83a6fe7134c077102a75c2162e6c56bd","url":"tw_stocks/2606.json"},{"revision":"4dfcd805f1a0891465db81af8c5f9d81","url":"tw_stocks/2605.json"},{"revision":"6db2b40728ec0dc1fe53e7e0bbe73b63","url":"tw_stocks/2603.json"},{"revision":"d19a4e2a05cf44ec634831e4b2dee2a4","url":"tw_stocks/2601.json"},{"revision":"c584d956e41a77dc951dd4cf16e6f9ab","url":"tw_stocks/2597.json"},{"revision":"3f244bc9626042fe2d0994660e197af4","url":"tw_stocks/2548.json"},{"revision":"3e6294ebe1c5a3ce6d31bb2ff6d8c945","url":"tw_stocks/2547.json"},{"revision":"38a7d3eb02ea19fa48aa5f6fec93bdca","url":"tw_stocks/2546.json"},{"revision":"b96334012bae1bbbc4fbf916bb766731","url":"tw_stocks/2545.json"},{"revision":"77b722e00d2e194fb365359a4b920673","url":"tw_stocks/2543.json"},{"revision":"593ecdccb938256fefba9ccf9a021a17","url":"tw_stocks/2542.json"},{"revision":"73957134c037af2d7fc0c2efde62063d","url":"tw_stocks/2540.json"},{"revision":"16f1fb3a9539507adfbddee2228ac026","url":"tw_stocks/2539.json"},{"revision":"8a29f60347f01dd3af47e17870272ac5","url":"tw_stocks/2538.json"},{"revision":"e57c8948991ea24a64f5b99b31583e74","url":"tw_stocks/2537.json"},{"revision":"5467fdd5f6c8390ff0278a8b71b3a18a","url":"tw_stocks/2536.json"},{"revision":"7c4f68a44ae16232a9ccbcdb2af58075","url":"tw_stocks/2535.json"},{"revision":"049c426ffe0900a05b2ed285df85059c","url":"tw_stocks/2534.json"},{"revision":"91eaccad35ac747ea1ecae0e1429ed86","url":"tw_stocks/2530.json"},{"revision":"1cf347aacc105b9a31082a05b4420a82","url":"tw_stocks/2528.json"},{"revision":"53b17c78895e6ceb3b60c9cd65f70b5f","url":"tw_stocks/2527.json"},{"revision":"688e440db95ff2a56c19e12d7a296c36","url":"tw_stocks/2524.json"},{"revision":"5e887be93c06792b9753e0fb1a11998d","url":"tw_stocks/2520.json"},{"revision":"20f6df0ef3f32e6507d445cf4047ba8c","url":"tw_stocks/2516.json"},{"revision":"b5f0d77880ebfe8c6444535dfc0cb84f","url":"tw_stocks/2515.json"},{"revision":"fc07f458db8c24c63b54b68cd24379b3","url":"tw_stocks/2514.json"},{"revision":"9ddec5ce9a72754831375c154c6c1058","url":"tw_stocks/2511.json"},{"revision":"99a73ee126b0f2fba7bd6a32840d0a05","url":"tw_stocks/2509.json"},{"revision":"aba1a7d641e62e6ad54bd0c0cad24cfd","url":"tw_stocks/2506.json"},{"revision":"2287ebf847ece7b6e0a68c3d95d806d8","url":"tw_stocks/2505.json"},{"revision":"0dc049eba405591509e017a96710b83e","url":"tw_stocks/2504.json"},{"revision":"638b41a7af72db8f55886af09759a0c0","url":"tw_stocks/2501.json"},{"revision":"b9dbe5dbbb624123496adc109a335fb7","url":"tw_stocks/2498.json"},{"revision":"22b7ff52961e70601492841bf9985c9b","url":"tw_stocks/2497.json"},{"revision":"a461b0e5fbff673178cbc8f0e2d23758","url":"tw_stocks/2496.json"},{"revision":"10d9319727abd091cece28d8c5c8e62e","url":"tw_stocks/2495.json"},{"revision":"b20991a737960653c29298ee949ae010","url":"tw_stocks/2493.json"},{"revision":"1aad39c6cdfbf6e15fd28d14f68c03ab","url":"tw_stocks/2492.json"},{"revision":"49dbfcd8428f1ec61f9306a00e61ba46","url":"tw_stocks/2491.json"},{"revision":"26a95b3ce4f92c95135ed1f45250ed7f","url":"tw_stocks/2489.json"},{"revision":"7d87b8a3377b9b1ba555c0add89ec692","url":"tw_stocks/2488.json"},{"revision":"688d64d66fd916a6b2ed419302d40472","url":"tw_stocks/2486.json"},{"revision":"b027f59b9a2f1835bb8c1227bed1f123","url":"tw_stocks/2485.json"},{"revision":"42b28cb3aa8247bfd78948a9a71593c6","url":"tw_stocks/2484.json"},{"revision":"420be9faec5554c42da887ee3b1f08fb","url":"tw_stocks/2483.json"},{"revision":"9af14e2441b0a52f31460a6304b678f4","url":"tw_stocks/2482.json"},{"revision":"454523ed84a5a8fb18e932eb417f1fed","url":"tw_stocks/2481.json"},{"revision":"2c6cd01dd7180728fdfbaf63d1f452fb","url":"tw_stocks/2480.json"},{"revision":"7a8e47c416399aca61299f1b56339550","url":"tw_stocks/2478.json"},{"revision":"e89341846736511448880e5c4f349f60","url":"tw_stocks/2477.json"},{"revision":"321f452b29f86ee6cbc5516f4c61d0ba","url":"tw_stocks/2476.json"},{"revision":"b6922e7dea4874c78c22b1b3af64a4b5","url":"tw_stocks/2474.json"},{"revision":"96ad8ed2139fb8e228955499241503ae","url":"tw_stocks/2472.json"},{"revision":"03c1ee53db0b42b84e0c5ff095613119","url":"tw_stocks/2471.json"},{"revision":"5635702f9a7234474fb2b722c79e33d4","url":"tw_stocks/2468.json"},{"revision":"dee068c89c32e0faa1ea4f4b90bf783d","url":"tw_stocks/2467.json"},{"revision":"6594c7f8ac101be9d0096f740b28b025","url":"tw_stocks/2466.json"},{"revision":"cfc24188b9695c34063d693a17c46856","url":"tw_stocks/2465.json"},{"revision":"32a5928e3c025f94a375f284a6960893","url":"tw_stocks/2464.json"},{"revision":"3a29742b1dde8a4a07378fe190f0a49a","url":"tw_stocks/2462.json"},{"revision":"7d3442731b812d726d4ccda0d2a42cf4","url":"tw_stocks/2461.json"},{"revision":"97e1effe7dd370d0df17ddc629de1b97","url":"tw_stocks/2460.json"},{"revision":"7ba5cc5e1b675eea9e5b574227088555","url":"tw_stocks/2459.json"},{"revision":"44ae5ced84e947931c68d1c4460f7def","url":"tw_stocks/2458.json"},{"revision":"e4b06e5ec80b90d365062d2270c3910f","url":"tw_stocks/2457.json"},{"revision":"f14090be5218de3f80d0030a499d975d","url":"tw_stocks/2455.json"},{"revision":"a1295580d2f07e20393e0337116af888","url":"tw_stocks/2454.json"},{"revision":"34df0d4ed08bba9c2b1990ea1543a7fa","url":"tw_stocks/2453.json"},{"revision":"d78c6444394a93a555ab00259cabd8e2","url":"tw_stocks/2451.json"},{"revision":"b01c5c332860aa89d1c8377ed1fce4af","url":"tw_stocks/2450.json"},{"revision":"3d142c552e00c61f7605d35280b6b0a9","url":"tw_stocks/2449.json"},{"revision":"97f7bf7472a82506eec36a0a2c928ad2","url":"tw_stocks/2444.json"},{"revision":"0243b62ce63683bdac3ac848179d8c53","url":"tw_stocks/2442.json"},{"revision":"6403e39d34f9d492214bcdbafbe5ae9c","url":"tw_stocks/2441.json"},{"revision":"625958ac5d2f1f7eb32e5940a1621184","url":"tw_stocks/2440.json"},{"revision":"243e4010628cba199bbe3c4a79556c37","url":"tw_stocks/2439.json"},{"revision":"0c72d7bf092cd0ebcc026433a1c94a5d","url":"tw_stocks/2438.json"},{"revision":"afa63df818a885f253c2b72254e1a5e9","url":"tw_stocks/2436.json"},{"revision":"320f196f4c1ed1cc871887062c53df6b","url":"tw_stocks/2434.json"},{"revision":"c6e167b796f1898c69115928fe8b5b9b","url":"tw_stocks/2433.json"},{"revision":"611627c216744942e7ff5b479ef3f734","url":"tw_stocks/2431.json"},{"revision":"ebf18a63bb5125fd830818ee32c6b822","url":"tw_stocks/2430.json"},{"revision":"bdd5ecc58894f27c4e2db051b0ab4a31","url":"tw_stocks/2429.json"},{"revision":"78648dafe02a1b7875af676fc617fd5e","url":"tw_stocks/2428.json"},{"revision":"5dd0c8d73f62fb1029a995c17a7da1df","url":"tw_stocks/2427.json"},{"revision":"f984bdc34fc3138419198fd14ccfc3f0","url":"tw_stocks/2426.json"},{"revision":"56ee8acbafdb469cc79953a9c6c5d044","url":"tw_stocks/2425.json"},{"revision":"c0a2a9c98db91b761a82f55cff48946a","url":"tw_stocks/2424.json"},{"revision":"4468af547452a08eb29aebae3d1eff34","url":"tw_stocks/2423.json"},{"revision":"0e4568eee268f9cc78a32b05d3d7c1c8","url":"tw_stocks/2421.json"},{"revision":"22bf144d3926f89daf4af97fff950e4f","url":"tw_stocks/2420.json"},{"revision":"b6ce77525394897507c3114820bfd0e6","url":"tw_stocks/2419.json"},{"revision":"4f64f881ebdb42a53916c2ec24ba7b35","url":"tw_stocks/2417.json"},{"revision":"9b87ca85cfa6106850c5b807ee238355","url":"tw_stocks/2415.json"},{"revision":"06f81c21e74654a9fde3cb9bd4c41ad7","url":"tw_stocks/2414.json"},{"revision":"328dd84d5e17119a1e919cd5d3897fd2","url":"tw_stocks/2413.json"},{"revision":"38f5d7e50bd92b246a932bcc582ad30b","url":"tw_stocks/2412.json"},{"revision":"0431c1be2e5040511a266afc001e7e70","url":"tw_stocks/2409.json"},{"revision":"d364a5f6f8acd7dcb9f7b5d38bf4e3d0","url":"tw_stocks/2408.json"},{"revision":"19e0c3d6a2d6017387dd3d77515b185f","url":"tw_stocks/2406.json"},{"revision":"32ce2072f2627e76b46d3bc8c46dfd9e","url":"tw_stocks/2405.json"},{"revision":"87789349d024823eedb43d2a085c4bff","url":"tw_stocks/2404.json"},{"revision":"48c001bb0609a5342cd64ed960a017d8","url":"tw_stocks/2402.json"},{"revision":"9cddaaa2d40c1581bf0de3d7e6da1e5f","url":"tw_stocks/2401.json"},{"revision":"b88f0992d02bce84b36cc8104230d438","url":"tw_stocks/2399.json"},{"revision":"1f80e7ad7abb81b913b57877bdab8191","url":"tw_stocks/2397.json"},{"revision":"3ae5071aec95ea1b0bec76260186256f","url":"tw_stocks/2395.json"},{"revision":"57e1c48b1568968bcbb3bd8e15ff8a64","url":"tw_stocks/2393.json"},{"revision":"dfc873e7be4c37c116f6c7f6b985a458","url":"tw_stocks/2392.json"},{"revision":"30d17ac774dbf2ff967306ede601dcc6","url":"tw_stocks/2390.json"},{"revision":"27a883e782d31109c5ca075e5285ba04","url":"tw_stocks/2388.json"},{"revision":"8c43e3cadf181580490be03c1e50b200","url":"tw_stocks/2387.json"},{"revision":"5863e07054d1b6678932d3e2be98e280","url":"tw_stocks/2385.json"},{"revision":"f8f50641ce9e67a0b5afb1616a94b136","url":"tw_stocks/2383.json"},{"revision":"2ef680023bc936db9c0bb1b391f6aced","url":"tw_stocks/2382.json"},{"revision":"a3b7382cd6c7e8aa418d789b8f5e6065","url":"tw_stocks/2380.json"},{"revision":"eac0d042e558614f47f9bcd9e02ac885","url":"tw_stocks/2379.json"},{"revision":"829b857e665dca19431897b0bfef83a8","url":"tw_stocks/2377.json"},{"revision":"f7fe9d579037fe725209c6a6a0965a27","url":"tw_stocks/2376.json"},{"revision":"a56902f30e513e16cf94cb30fc37049f","url":"tw_stocks/2375.json"},{"revision":"9cd0edafd74befa35cf6ff98686ab2a2","url":"tw_stocks/2374.json"},{"revision":"b86068dd4078073de5515573a908e3db","url":"tw_stocks/2373.json"},{"revision":"65158416de02e6d7d6a22c3081f3c6ff","url":"tw_stocks/2371.json"},{"revision":"587f34f7b95aae4ebe1b114eccd1079d","url":"tw_stocks/2369.json"},{"revision":"390ccc280925245217ebc951c7b0e7f4","url":"tw_stocks/2368.json"},{"revision":"3223451d8a0838f8ec407ef2a0bf0f82","url":"tw_stocks/2367.json"},{"revision":"e63f99ca7b3a6b6a96a03f50077aeeb3","url":"tw_stocks/2365.json"},{"revision":"684fe368878a6cf27498ecbf403a04b4","url":"tw_stocks/2364.json"},{"revision":"c11fc54308bd4bc0d32503bc4926751a","url":"tw_stocks/2363.json"},{"revision":"fd96147968c4194bb201672cf247bc48","url":"tw_stocks/2362.json"},{"revision":"57bd829621f83a6cb92382603f63f653","url":"tw_stocks/2360.json"},{"revision":"e26996fbeef683bcaaece49dea8b997a","url":"tw_stocks/2359.json"},{"revision":"26a89590abdffdd82ead541c791179d2","url":"tw_stocks/2357.json"},{"revision":"4d2d7c2a7927c9873850d101ef88a08c","url":"tw_stocks/2356.json"},{"revision":"ee833d7f7ec30babee764f9fd243eab5","url":"tw_stocks/2355.json"},{"revision":"3e249dcc77ba38c4eb50c6b9402eccc7","url":"tw_stocks/2354.json"},{"revision":"6d20887db47a582361af8f3f72c8ece6","url":"tw_stocks/2353.json"},{"revision":"08ae6fe2409c0705b5fd8b38e76d96aa","url":"tw_stocks/2352.json"},{"revision":"4059e405e4814dab83889f7e0e748634","url":"tw_stocks/2351.json"},{"revision":"2492b649274049d00ea9795783aa2f51","url":"tw_stocks/2349.json"},{"revision":"d1b971e4abfadfa32c37fa69c2bc5ac0","url":"tw_stocks/2348.json"},{"revision":"35c5e9f4f5648bb02834043f9d972c8b","url":"tw_stocks/2347.json"},{"revision":"8e86e97a0960931934236f0054cd0048","url":"tw_stocks/2345.json"},{"revision":"e9dcbf674a9e5ab29e1f8089e4e71913","url":"tw_stocks/2344.json"},{"revision":"e7da86f13997a1ec1a2c8d0630b29772","url":"tw_stocks/2342.json"},{"revision":"8d107d266501f004940d0f754fcb262f","url":"tw_stocks/2340.json"},{"revision":"5b60ede6767fa0ebf4f4a4d1bb02c2a8","url":"tw_stocks/2338.json"},{"revision":"0ac497a5684230fb46492db4f14b1f90","url":"tw_stocks/2337.json"},{"revision":"e459f82bc1b51f51d9da0119df3e60c8","url":"tw_stocks/2332.json"},{"revision":"36afeebe2004106b84254f2b75895597","url":"tw_stocks/2331.json"},{"revision":"8c505681653915d2c108ed16276f6718","url":"tw_stocks/2330.json"},{"revision":"8cd47b96fcecd383fa0abce307016040","url":"tw_stocks/2329.json"},{"revision":"23e522b2da4d01f160e0105c33ac2d4b","url":"tw_stocks/2328.json"},{"revision":"f31b0dfdca8575a44350fb3c0e2a7c1a","url":"tw_stocks/2327.json"},{"revision":"7cc8c6da54f059922d65f23350bb79e2","url":"tw_stocks/2324.json"},{"revision":"833699ba3d4d9392778a35ebed086cca","url":"tw_stocks/2323.json"},{"revision":"53c902f3018626576a5a7241fc70f980","url":"tw_stocks/2321.json"},{"revision":"c5a49fb8efd6e211e282fbd198efe6b1","url":"tw_stocks/2317.json"},{"revision":"73513cd021aa132b082fe19b668db3a4","url":"tw_stocks/2316.json"},{"revision":"8d4f508711c0ee5632ea424bb086f781","url":"tw_stocks/2314.json"},{"revision":"5f5462607cfe00e5fb56bcaa231c1cb3","url":"tw_stocks/2313.json"},{"revision":"8f19c8447c78e2d6c921dd3da9583cf5","url":"tw_stocks/2312.json"},{"revision":"53f3ecf4e471f0ca2da8ac435b36b5a1","url":"tw_stocks/2308.json"},{"revision":"e3ef46593ff01fd975f2de05635c6733","url":"tw_stocks/2305.json"},{"revision":"b78392dffc436bd9a1fff8c0ebb5ca88","url":"tw_stocks/2303.json"},{"revision":"9c723108470d9baefc18b348cdf739ca","url":"tw_stocks/2302.json"},{"revision":"b92a5430974a6578289194b29ed70b53","url":"tw_stocks/2301.json"},{"revision":"54ec803e637556d293f33e0b553fe105","url":"tw_stocks/2250.json"},{"revision":"1ca1f132b1673d37e8172d8f6aaa8963","url":"tw_stocks/2248.json"},{"revision":"bde66b054571c354cb5b55a9722a1986","url":"tw_stocks/2247.json"},{"revision":"8bf9d7180de48704596774bf102ca13a","url":"tw_stocks/2243.json"},{"revision":"8471086c5514ce7354c63318e35f5824","url":"tw_stocks/2241.json"},{"revision":"8500e35ae474dfee3b64e61bbb515f35","url":"tw_stocks/2239.json"},{"revision":"f58a5757459bd6ae3667143c01827fee","url":"tw_stocks/2236.json"},{"revision":"ec420a7b44d1ec6c93cfb1cd08db8954","url":"tw_stocks/2233.json"},{"revision":"e40eff5602183601702796edd9ba97a1","url":"tw_stocks/2231.json"},{"revision":"7961b7089449c4f079689b8c3a1c3a60","url":"tw_stocks/2228.json"},{"revision":"99ac0c9c14086e673ccbe5aba7229d2a","url":"tw_stocks/2227.json"},{"revision":"16fb9f38f9996e1ca47dac380935ce01","url":"tw_stocks/2211.json"},{"revision":"1b864df33c07bd496cddc6cc56f99e80","url":"tw_stocks/2208.json"},{"revision":"252ab7044c2b140328695f70b23aa3ac","url":"tw_stocks/2207.json"},{"revision":"090ab0eac4fe0cb8f662b623e076c641","url":"tw_stocks/2206.json"},{"revision":"fcdcf19192823ab74ffcb6f02c177656","url":"tw_stocks/2204.json"},{"revision":"9d5fa72a32be96bf0413020b6b379a00","url":"tw_stocks/2201.json"},{"revision":"c1c5a64033c9addbd39e82c5c24b8fba","url":"tw_stocks/2115.json"},{"revision":"ee9e4c23e5bd277b3c5cfcb4e47dcfcc","url":"tw_stocks/2114.json"},{"revision":"1b9ded372c0180dafa1cd535397681af","url":"tw_stocks/2109.json"},{"revision":"095b81aab05994897b42c0ae20941029","url":"tw_stocks/2108.json"},{"revision":"7f41330feb89ee1c637962612d9d75ed","url":"tw_stocks/2107.json"},{"revision":"77534c51ab2db492c86638aa9e74210a","url":"tw_stocks/2106.json"},{"revision":"72b8236e2ee3bca8827d18de06c94e2e","url":"tw_stocks/2105.json"},{"revision":"437c73259c01efb32405a16e6d88975d","url":"tw_stocks/2104.json"},{"revision":"2a24e54892e6e69fb3f2a8346cda11cc","url":"tw_stocks/2103.json"},{"revision":"154ffb4570da60c6701e332cb059659e","url":"tw_stocks/2102.json"},{"revision":"840cdee7c6fbe1c74bba8315955976d5","url":"tw_stocks/2101.json"},{"revision":"89328f500cd598b048a32ed1fb249d1a","url":"tw_stocks/2069.json"},{"revision":"ba051694f40cc447a2f6dbc1e73621ce","url":"tw_stocks/2062.json"},{"revision":"8fc95e312007981763f93194637e1ea2","url":"tw_stocks/2059.json"},{"revision":"2a3be833222b51362c300f1e954f2f06","url":"tw_stocks/2049.json"},{"revision":"7e329156d7860aebc9904133b3a78233","url":"tw_stocks/2038.json"},{"revision":"3df5da9bdc4e9e11292140bf8969e450","url":"tw_stocks/2034.json"},{"revision":"0f9dc6ab133c74f7b424fcc71426a5cf","url":"tw_stocks/2033.json"},{"revision":"9a3ddc7b6ac0f58da417207dc35beb9a","url":"tw_stocks/2032.json"},{"revision":"427560780de31a0f97c5ee00c92be241","url":"tw_stocks/2031.json"},{"revision":"ab71f8cecfc811e7211166711e0c2477","url":"tw_stocks/2030.json"},{"revision":"6cf1d477819aeba042f98079db480bd8","url":"tw_stocks/2029.json"},{"revision":"7b947d63f71b2eb4c1e6a53075d695d8","url":"tw_stocks/2028.json"},{"revision":"81e33b3e8a244ab6839faa5c14925b7e","url":"tw_stocks/2027.json"},{"revision":"69401cde11cd78ef2022d7d97dc91c3a","url":"tw_stocks/2025.json"},{"revision":"3715c3a56651ca587be41f6f24efd71b","url":"tw_stocks/2024.json"},{"revision":"f2204a17b6fe3ea6d7ade3ac75616ec9","url":"tw_stocks/2023.json"},{"revision":"1306037d2f93dd4bacba93ef03d8a004","url":"tw_stocks/2022.json"},{"revision":"abeedd1585ff16f5de50eec636aeabe2","url":"tw_stocks/2020.json"},{"revision":"867c1d20e861fe343f881ef3972e1779","url":"tw_stocks/2017.json"},{"revision":"b3106a9ff005573b812136ed103c0637","url":"tw_stocks/2015.json"},{"revision":"15ab36f6bf545484f113bbe889034f58","url":"tw_stocks/2014.json"},{"revision":"1087faa5a02deffa3b048f0e6dce19e0","url":"tw_stocks/2013.json"},{"revision":"6933c9a05621b5c8a9b651f0c8640083","url":"tw_stocks/2012.json"},{"revision":"4356d71856e85dbc7c3606f16f87d136","url":"tw_stocks/2010.json"},{"revision":"7774927f036e1d790de66e9ebe527454","url":"tw_stocks/2009.json"},{"revision":"1e2154ab8fba6382a376ea6f61bcbf0d","url":"tw_stocks/2008.json"},{"revision":"2204879aaf86f585b182bdc6fa8c9c28","url":"tw_stocks/2007.json"},{"revision":"c3adf2b4ed65a28ee978b02544fd77de","url":"tw_stocks/2006.json"},{"revision":"0bed76376937bfc7fd75f34c31855be4","url":"tw_stocks/2002.json"},{"revision":"f5150ee19eebe2ecfce5f1bbb81a08d7","url":"tw_stocks/1909.json"},{"revision":"439654c62a94cbc515a3056f2959f114","url":"tw_stocks/1907.json"},{"revision":"91f6d4855d3883d1a8c49c7f4b1c18b2","url":"tw_stocks/1906.json"},{"revision":"315a3225ca660ae1861d0dc35edf31a3","url":"tw_stocks/1905.json"},{"revision":"2b36f02a895c081f0720dfaa43d5ad8c","url":"tw_stocks/1904.json"},{"revision":"d352bdf127927338dd09ec2159278ee9","url":"tw_stocks/1903.json"},{"revision":"9f68e0693e162013db21404ec4049878","url":"tw_stocks/1817.json"},{"revision":"5013a25340d58e8ae0f0461ea4e66466","url":"tw_stocks/1810.json"},{"revision":"8c680ab18bd214d8e3c9d8af62ddcad9","url":"tw_stocks/1809.json"},{"revision":"fed39a8c1744f8279cb075ea6e0d1e7a","url":"tw_stocks/1808.json"},{"revision":"bebba7c569bc6d001867616b04ca1cd0","url":"tw_stocks/1806.json"},{"revision":"2ef2f550ae625e8d410c95f9bab7a5c9","url":"tw_stocks/1805.json"},{"revision":"e9e4166839f460560aafb3337180c029","url":"tw_stocks/1802.json"},{"revision":"daa6533f8359aef96cf1f908ca4ca154","url":"tw_stocks/1795.json"},{"revision":"f42b0ac50d8994d4e2c2a285cf8f50df","url":"tw_stocks/1789.json"},{"revision":"b7b73b89b9b8e8e1d55c4f8c3e8c7677","url":"tw_stocks/1786.json"},{"revision":"6742a780a20149b7ac45b06f5a3dc9d3","url":"tw_stocks/1783.json"},{"revision":"847f9e40531d48e9ab6a924cf8c77113","url":"tw_stocks/1776.json"},{"revision":"12d15e997b92f28d325ac483d5cbe512","url":"tw_stocks/1773.json"},{"revision":"3324025bb78157fa84f3237674a6892c","url":"tw_stocks/1762.json"},{"revision":"0c505cf1a2ed588fb046a440ece5bf12","url":"tw_stocks/1760.json"},{"revision":"7ab9c375acac9dc94a9f9ebaadb0152a","url":"tw_stocks/1752.json"},{"revision":"67d382a62e387b6b3b177c80d36aa823","url":"tw_stocks/1737.json"},{"revision":"e990795a3e503f85e762fbe2e68568e9","url":"tw_stocks/1736.json"},{"revision":"37e3c9a0e8309bccdb5fb6bcc0a83657","url":"tw_stocks/1735.json"},{"revision":"6d09dff7caca59dbf5aeccceede810be","url":"tw_stocks/1734.json"},{"revision":"a99b8e4c9759590d81729bbc63f64e57","url":"tw_stocks/1733.json"},{"revision":"486d205e4b0ee079ab875a546d71cbfd","url":"tw_stocks/1732.json"},{"revision":"2eb40c3e4e6b5b806399c9be4af9277d","url":"tw_stocks/1731.json"},{"revision":"17785884aed8c963f617be172b84a457","url":"tw_stocks/1730.json"},{"revision":"aa85fa4a215ef3a87dbd09d436c6e200","url":"tw_stocks/1727.json"},{"revision":"43eab21cb0b8ff05f703f336b42da766","url":"tw_stocks/1726.json"},{"revision":"d5f90eebc141193e5676b90061ab82d3","url":"tw_stocks/1725.json"},{"revision":"83260d10511229cbc6a1c5232dc96957","url":"tw_stocks/1723.json"},{"revision":"2633f907b2d3b187f8c437d877b794de","url":"tw_stocks/1722.json"},{"revision":"838ef0427d29a515b724c26f37e3f1a7","url":"tw_stocks/1721.json"},{"revision":"42ecdb22803e689b1e5b673c4391fe50","url":"tw_stocks/1720.json"},{"revision":"1b3c48917f298a49266a3395bb3d42d7","url":"tw_stocks/1718.json"},{"revision":"1caf271e1cda6c60f659fbb2a2519898","url":"tw_stocks/1717.json"},{"revision":"0dc3c51aa4f8485b70fdebe009608d81","url":"tw_stocks/1714.json"},{"revision":"19bf20584a7fb7744da5548c1a462725","url":"tw_stocks/1713.json"},{"revision":"06401649e4aa13bbbaf9e6d5044c86d3","url":"tw_stocks/1712.json"},{"revision":"20808b1d101d11abccaf2be76b5cc1d2","url":"tw_stocks/1711.json"},{"revision":"d5adb55a7cdcba3215742e0462f567f6","url":"tw_stocks/1710.json"},{"revision":"bb8be62e75a2ee03927a2322d3f4947a","url":"tw_stocks/1709.json"},{"revision":"e18d253a08af906256937a3274a5c19e","url":"tw_stocks/1708.json"},{"revision":"f2e9ee94f914af80d639676ffe47c44b","url":"tw_stocks/1707.json"},{"revision":"32d379c2c430df7878d697b61b44dbf6","url":"tw_stocks/1702.json"},{"revision":"18fbe44e6e5a3d41e62a9505fb7d3bca","url":"tw_stocks/1626.json"},{"revision":"ef0bd4c275483854d0aabb7b37dd6e91","url":"tw_stocks/1623.json"},{"revision":"3e35bc60d363be8c5a2ea145d7b278b5","url":"tw_stocks/1618.json"},{"revision":"ddac0ffd050841817cdb9e3eccaa96f9","url":"tw_stocks/1617.json"},{"revision":"45da966235319512b580038abc3790d1","url":"tw_stocks/1616.json"},{"revision":"1e70df92125197fddd4799de7953bef9","url":"tw_stocks/1615.json"},{"revision":"d9f5c0f1972dbe06723f8cf1c7695cc6","url":"tw_stocks/1614.json"},{"revision":"f1baae4061c354cf036799d132cd2880","url":"tw_stocks/1612.json"},{"revision":"7a89470577eb52b18f66866000b9d7ad","url":"tw_stocks/1611.json"},{"revision":"0f2e5bdd0f9aa83f56453f2f8c2cb4ac","url":"tw_stocks/1609.json"},{"revision":"1ae0dda53e0d2d409e7587e3bd39ea1e","url":"tw_stocks/1608.json"},{"revision":"f1d9e67b3e396f4da18c026093580706","url":"tw_stocks/1605.json"},{"revision":"518a353e2f1599943b7af09441b5b013","url":"tw_stocks/1604.json"},{"revision":"49a278c4e0000713c8795bc24fa674a5","url":"tw_stocks/1603.json"},{"revision":"ca93b803f2f8f6627ebdf79a52ebfc7e","url":"tw_stocks/1598.json"},{"revision":"d741127963bbca181ddc6c9eb36274b8","url":"tw_stocks/1597.json"},{"revision":"e1903446221a8d601c34722eddfc14b3","url":"tw_stocks/1590.json"},{"revision":"dbf52abac4f84ea3d4e73c13244b8ba5","url":"tw_stocks/1589.json"},{"revision":"fc56c851b046f367ce85a9cb30b12296","url":"tw_stocks/1587.json"},{"revision":"8ff3dc60bcf0426a66f8a25067b75cf3","url":"tw_stocks/1583.json"},{"revision":"5a7ea55ee0c590f54a23d5076f05e801","url":"tw_stocks/1582.json"},{"revision":"b162d9cad6ebea02f508b281514295a1","url":"tw_stocks/1568.json"},{"revision":"a045880ed844b8e47d0215149e500459","url":"tw_stocks/1563.json"},{"revision":"60f9aafd2b2f56457953c4460c862899","url":"tw_stocks/1560.json"},{"revision":"6641a8fae7b3fed13d2f164a0f8dd818","url":"tw_stocks/1558.json"},{"revision":"1c97f959e5725869afa6b6770ca45208","url":"tw_stocks/1541.json"},{"revision":"79c95720739d1efa62218f3e7b76f21e","url":"tw_stocks/1540.json"},{"revision":"e28e5b8cada3ccd2fbc30915dcd0c38b","url":"tw_stocks/1539.json"},{"revision":"465acfb4c99d6e3488813ce14718dda8","url":"tw_stocks/1538.json"},{"revision":"d2597bfb49298d98429e0ba7877bff85","url":"tw_stocks/1537.json"},{"revision":"e89f6d7153963508d9192fbfbcd30f16","url":"tw_stocks/1536.json"},{"revision":"7c43a84aa73d2648ef9eb4d4626acf99","url":"tw_stocks/1535.json"},{"revision":"99ef744ef8ca0e49c1c8fd9ba2def3d7","url":"tw_stocks/1533.json"},{"revision":"125313475c56edc608ccbdddb48ac83a","url":"tw_stocks/1532.json"},{"revision":"be1cd1b31f9a09943749cc65cbf649a7","url":"tw_stocks/1531.json"},{"revision":"dfa24b577f7d5b1439825370f1adc77a","url":"tw_stocks/1530.json"},{"revision":"fedf28db98e860673d83c65f4bda7c01","url":"tw_stocks/1529.json"},{"revision":"bac1b14c4aa94190b41c2a517ae6d8b8","url":"tw_stocks/1528.json"},{"revision":"4a5931de7790763d29d25dfb61aa1e22","url":"tw_stocks/1527.json"},{"revision":"418f1e30638b48217d08658c7cfb636f","url":"tw_stocks/1526.json"},{"revision":"06912681769a70cffbf2e718eb6ebee1","url":"tw_stocks/1525.json"},{"revision":"7c6b7bd44c750fba7668ce7e3754269f","url":"tw_stocks/1524.json"},{"revision":"aa4dbe7e477e760cca232038db544ecc","url":"tw_stocks/1522.json"},{"revision":"4fc8ddba7ce37323e06bcd14a9e60231","url":"tw_stocks/1521.json"},{"revision":"4589e24c0cf7423f2d1ebe3dbf6d86c9","url":"tw_stocks/1519.json"},{"revision":"56c14a5c443b2fc6bdc4852dc03a5757","url":"tw_stocks/1517.json"},{"revision":"b7cb6eef5347668b2492461bcb4379de","url":"tw_stocks/1516.json"},{"revision":"6e4722a9828cc112807d521f1378beed","url":"tw_stocks/1515.json"},{"revision":"e2600e9fd01c25ec1ee73cbdcadfcaa1","url":"tw_stocks/1514.json"},{"revision":"a89f25b6c185361351ebb02a3a6e65fe","url":"tw_stocks/1513.json"},{"revision":"e078f67250f718884d6d570355319676","url":"tw_stocks/1512.json"},{"revision":"60127501e191da56dc91ee5b694da3b3","url":"tw_stocks/1506.json"},{"revision":"f6f84e4e8c124233d35e9aeab892a058","url":"tw_stocks/1504.json"},{"revision":"5a0d15f98029621ce68d728b676b9cbc","url":"tw_stocks/1503.json"},{"revision":"170cc613d92e1f63028585aa0fb6b9c4","url":"tw_stocks/1477.json"},{"revision":"7911b921003778c001d769888892c508","url":"tw_stocks/1476.json"},{"revision":"2dd26d6331e25d71dc946172ea9e8aca","url":"tw_stocks/1475.json"},{"revision":"84ec101afa493114f99b875a17ad86ef","url":"tw_stocks/1474.json"},{"revision":"8527317d65646fd22122473e079614cd","url":"tw_stocks/1473.json"},{"revision":"c7de094964e111a023820c8f1f9323d0","url":"tw_stocks/1472.json"},{"revision":"1aff53292b2f015550cc960dc48bb4db","url":"tw_stocks/1471.json"},{"revision":"f0e5e5ecc58c051a60a05e0bc9cc0998","url":"tw_stocks/1470.json"},{"revision":"80c508dda724e81b54d135fb5d30b68c","url":"tw_stocks/1468.json"},{"revision":"64043b1c6b6e818de5cf4e321e3385c8","url":"tw_stocks/1467.json"},{"revision":"ddf0c403e8494d8669fe01cbb61d1116","url":"tw_stocks/1466.json"},{"revision":"20c852cfa31d9565cc06b2603d0125d0","url":"tw_stocks/1465.json"},{"revision":"6b0d5b349106f2960454b98555547c57","url":"tw_stocks/1464.json"},{"revision":"de1c8655f90a6f32f2c674f114fd672f","url":"tw_stocks/1463.json"},{"revision":"799c88e957b5b4144e84757116ab1b75","url":"tw_stocks/1460.json"},{"revision":"20769e285b1a4f8eb6a5dda408cd56bb","url":"tw_stocks/1459.json"},{"revision":"b19522ef156fcd87a1b78bdb0c89f6de","url":"tw_stocks/1457.json"},{"revision":"a213ddd2257e7818ea49fe4008b6fc44","url":"tw_stocks/1456.json"},{"revision":"aa83268357b2b9580521c04802d8b890","url":"tw_stocks/1455.json"},{"revision":"24a3352c39da7b9bcb6ade5837fe2726","url":"tw_stocks/1454.json"},{"revision":"daa5ec6272c8f862d3af88f610262078","url":"tw_stocks/1453.json"},{"revision":"4a2852c13ec9e426a317feb7836aba8d","url":"tw_stocks/1452.json"},{"revision":"59959d22bf052c4d734c0814ec6ebe97","url":"tw_stocks/1451.json"},{"revision":"0b22ed12585b38d488da57e744518ce3","url":"tw_stocks/1449.json"},{"revision":"0d0f800cbd61b6115020e1a4958f2aea","url":"tw_stocks/1447.json"},{"revision":"ef1ca37140857952f113c772472bf5b7","url":"tw_stocks/1446.json"},{"revision":"ce95a9836bf9d170c90918c6445018ec","url":"tw_stocks/1445.json"},{"revision":"46f52793ec5e47d36495ee89dc7cd2fc","url":"tw_stocks/1444.json"},{"revision":"5bba578a13c826b08f85fc768561341c","url":"tw_stocks/1443.json"},{"revision":"863818a6ae41f16325420ecdadefe58e","url":"tw_stocks/1442.json"},{"revision":"e588a82135ff234dd7c99078b1fa47af","url":"tw_stocks/1441.json"},{"revision":"dbd8de312a377bfe19f3c7e929b2b25f","url":"tw_stocks/1440.json"},{"revision":"439e182eb4ade9b0383ff87c89501377","url":"tw_stocks/1439.json"},{"revision":"eedc4824473ea9bee7cb77418b3d11db","url":"tw_stocks/1438.json"},{"revision":"1426db34fbcd3b487c523b469f117b7a","url":"tw_stocks/1437.json"},{"revision":"5b008f9f4ba52bdbee6a726eec9ed8c6","url":"tw_stocks/1436.json"},{"revision":"15112a172e5b656bf65e4e3f84635fa0","url":"tw_stocks/1435.json"},{"revision":"f4d7fb5caa43082840d73edebbe70374","url":"tw_stocks/1434.json"},{"revision":"9c4174ba119256ebf749c9737f36b66f","url":"tw_stocks/1432.json"},{"revision":"a41367730deaaf532bbf1f0c9e189510","url":"tw_stocks/1423.json"},{"revision":"0c6e50c0fbbcacc457052e3b82a0e01a","url":"tw_stocks/1419.json"},{"revision":"774e73765a359d6dc7651df5f253c370","url":"tw_stocks/1418.json"},{"revision":"565d262a9768aa3e892f2f3c79b63bc1","url":"tw_stocks/1417.json"},{"revision":"0bce223354806c4e73c28375276cb71c","url":"tw_stocks/1416.json"},{"revision":"a2da6377b9b17e1506623d447fa49c98","url":"tw_stocks/1414.json"},{"revision":"88519642d017f66e1a120eacec9e814a","url":"tw_stocks/1413.json"},{"revision":"0ca8e6e90125a55ae307331b7e2ca2ab","url":"tw_stocks/1410.json"},{"revision":"be9cf346568b2447b322c800eba36551","url":"tw_stocks/1409.json"},{"revision":"7643ccf4779c3cf0c00878a1b6efe3f7","url":"tw_stocks/1402.json"},{"revision":"1a26f827f7375b249ce2f35dde52c837","url":"tw_stocks/1342.json"},{"revision":"508820d8b93c513dd42509d9cca039bc","url":"tw_stocks/1341.json"},{"revision":"8ed225012ecaa77e6d532db665e1d0af","url":"tw_stocks/1340.json"},{"revision":"2731863343ecbcc51926d3a7fdcc7e4d","url":"tw_stocks/1339.json"},{"revision":"c8cfd7499f63f783f317ad0818e90c4c","url":"tw_stocks/1338.json"},{"revision":"e8fb91cc43d69ff00143f7d27bc91a27","url":"tw_stocks/1337.json"},{"revision":"87139e8fe8c02cbde8dc9237d8c152fc","url":"tw_stocks/1326.json"},{"revision":"ba5319397aeee47b9106e18eeb34d6fe","url":"tw_stocks/1325.json"},{"revision":"37309fa757d673ec4140907f45420b24","url":"tw_stocks/1324.json"},{"revision":"08f5322644019e8385bfc7cf9026f943","url":"tw_stocks/1323.json"},{"revision":"ada61c39e021921e34ac13f672f9b5d4","url":"tw_stocks/1321.json"},{"revision":"a27db67b79fa08f9d0158e8f97bb06f9","url":"tw_stocks/1319.json"},{"revision":"e40cfad1f9594488bb0bab913ed5e190","url":"tw_stocks/1316.json"},{"revision":"9c17b84cc39965b8c9633e6bbffb36c4","url":"tw_stocks/1315.json"},{"revision":"d4a63cc3d1ee611355062dd26da0c3d3","url":"tw_stocks/1314.json"},{"revision":"383712a58621eaceeb3f4f92635413f9","url":"tw_stocks/1313.json"},{"revision":"e7fb2f3616d6f80c6167692ef0ddeb71","url":"tw_stocks/1312.json"},{"revision":"a63a5b5ee2b92bc66a78f4404ab4edd2","url":"tw_stocks/1310.json"},{"revision":"444e0470de878b537b5df5291632ea5f","url":"tw_stocks/1309.json"},{"revision":"e82e7c57dc3a23d73fe8079cc8cfb1db","url":"tw_stocks/1308.json"},{"revision":"956190b6b2c274fa770a146c83b16b1b","url":"tw_stocks/1307.json"},{"revision":"136a62ccbaf546c0a26a1e16a0a975dc","url":"tw_stocks/1305.json"},{"revision":"9837bdc9dc1d0f93ff230cd9683611c0","url":"tw_stocks/1304.json"},{"revision":"8d61b0639e97d8ac458e5842cc1063b0","url":"tw_stocks/1303.json"},{"revision":"49c3f3d228a419a20bbbfd4f977bc028","url":"tw_stocks/1301.json"},{"revision":"8ec60d6236771dd2efd1b2e78144108f","url":"tw_stocks/1256.json"},{"revision":"b93b172d53d1b80a70522ba3951f527a","url":"tw_stocks/1236.json"},{"revision":"dccc59fd5ce1fa38ea2e0fcbb1deec04","url":"tw_stocks/1235.json"},{"revision":"2c547b8c1c89bc95ef4ecdca049beedc","url":"tw_stocks/1234.json"},{"revision":"7f7add233008d9db55fb2bfc940e5096","url":"tw_stocks/1233.json"},{"revision":"38ac4354ad4d41f48dbfff250a30ce44","url":"tw_stocks/1232.json"},{"revision":"4a24d7246d10178168f6b3d5d05ec25b","url":"tw_stocks/1231.json"},{"revision":"30b6a5836d7540cc5f6b87f5fa293410","url":"tw_stocks/1229.json"},{"revision":"a4d9b572e70dc7a2b47719dd6e846c95","url":"tw_stocks/1227.json"},{"revision":"5fbb94ab3a68211842a7324e1e1e2022","url":"tw_stocks/1225.json"},{"revision":"0059a0123c8cd2a82ee90c14c470d541","url":"tw_stocks/1220.json"},{"revision":"d1225a25605fb1a22c8dd412f4eccfbe","url":"tw_stocks/1219.json"},{"revision":"19f7549cd664aa19aaa6388eff2d0766","url":"tw_stocks/1218.json"},{"revision":"5518fa408b02d58b42f163c57b47dd8d","url":"tw_stocks/1217.json"},{"revision":"dcc5cd74a01c22d009b80f6d161b1717","url":"tw_stocks/1216.json"},{"revision":"5c6947b154f737a552d1ae1df51f2c0e","url":"tw_stocks/1215.json"},{"revision":"56bc779db7068a2f6c673e9b6eb8f855","url":"tw_stocks/1213.json"},{"revision":"0ab1f818e6c4b2254ad4d062bdfd23be","url":"tw_stocks/1210.json"},{"revision":"e26dd43a13859c4890cea423e71d9da0","url":"tw_stocks/1203.json"},{"revision":"3558c0cb2330f6186ac7866dc606c44b","url":"tw_stocks/1201.json"},{"revision":"86f93a100ddc32c873d1c669c1242dd3","url":"tw_stocks/1110.json"},{"revision":"0ade7c8f57b6e3c2e2cfa7cb803517a3","url":"tw_stocks/1109.json"},{"revision":"e0a33685667c25ecc44cc5efaddbcb6f","url":"tw_stocks/1108.json"},{"revision":"2735e9a17f6987a7a3ec516e2162bf58","url":"tw_stocks/1104.json"},{"revision":"78d3f9356812dda38c038ef8a839f50f","url":"tw_stocks/1103.json"},{"revision":"4c21c1885e643a9525bdc799e6edecc5","url":"tw_stocks/1102.json"},{"revision":"6e58e9ed773e6a0971bdc8d930d338cd","url":"tw_stocks/1101.json"},{"revision":"bd141b2249a55229a1b6e01133dd4f4f","url":"tw_stocks/00996A.json"},{"revision":"e0ebe2a9504d954d9729d0314d12317d","url":"tw_stocks/00995A.json"},{"revision":"d288a997e415495528f9b518964b6cab","url":"tw_stocks/00994A.json"},{"revision":"c2e8f968dbbb3c74c4349f71f951e6c7","url":"tw_stocks/00993A.json"},{"revision":"c5672ce63d0fe68f3de90de63ce42254","url":"tw_stocks/00992A.json"},{"revision":"b69ba114d523ee39fb3d5540e3a6238b","url":"tw_stocks/00991A.json"},{"revision":"2188052868634d5e97a2376f4a2639f4","url":"tw_stocks/00990A.json"},{"revision":"f366171b8de480e7ca576389a1201341","url":"tw_stocks/00989A.json"},{"revision":"896f27074967c7729a7a13a8517dcc13","url":"tw_stocks/00988A.json"},{"revision":"99cd09b56543b773c83dd6afdb622e94","url":"tw_stocks/00987A.json"},{"revision":"48a54318ed295c03c4dde4ad362bce54","url":"tw_stocks/00986A.json"},{"revision":"a27d1644ff668b84be359f7669943741","url":"tw_stocks/00985B.json"},{"revision":"ea070081740d83c1fc8136db7d0bb892","url":"tw_stocks/00985A.json"},{"revision":"2c4b2611ace69642c10a6135dfeadac6","url":"tw_stocks/00984D.json"},{"revision":"f8111d506a14a9200b0ce497817b0ecb","url":"tw_stocks/00984A.json"},{"revision":"901694f2475b030ab460cbe935ad8dbc","url":"tw_stocks/00983D.json"},{"revision":"7f523792962238c4e758722c7c9b741c","url":"tw_stocks/00983A.json"},{"revision":"bf85ceb3766b25f0fdfce871b7ee2be4","url":"tw_stocks/00982T.json"},{"revision":"714767af601c4354ceac97bf2ced60cb","url":"tw_stocks/00982D.json"},{"revision":"4db9d7ae3ecc7ea705829d51e672e6d3","url":"tw_stocks/00982A.json"},{"revision":"34fa27defa769767aa79ee7d7d7cb384","url":"tw_stocks/00981T.json"},{"revision":"6ca15172441a268519bad335dfdf4717","url":"tw_stocks/00981A.json"},{"revision":"f7141f889825cf57413a9e0c23ef02f6","url":"tw_stocks/009818.json"},{"revision":"33be63b730eb8d1dc577b2b060441ebd","url":"tw_stocks/009817.json"},{"revision":"31771631be8080be345652e83e42a66b","url":"tw_stocks/009816.json"},{"revision":"39e94ce1b24b8c25fce84467fdaca05f","url":"tw_stocks/009813.json"},{"revision":"c3379a7872802c57acb31b8eabfd0c9e","url":"tw_stocks/009812.json"},{"revision":"8d9f4b680393b824ccd56a5fc3a1fdfe","url":"tw_stocks/009811.json"},{"revision":"9b463ed307e3accca8e1cac4cf948cc7","url":"tw_stocks/009810.json"},{"revision":"b77f9f1729b66c831a256b6b568d67bf","url":"tw_stocks/00980A.json"},{"revision":"8533deb2526b305ef2f7d06a30dd6fa6","url":"tw_stocks/009809.json"},{"revision":"8be2a747f23da87a204e6c35991d209f","url":"tw_stocks/009808.json"},{"revision":"3dee4c0589b5d9a92530ac339c6e1c6d","url":"tw_stocks/009805.json"},{"revision":"78279b65ffdf09ad1d80e995c3cd2d37","url":"tw_stocks/009804.json"},{"revision":"dd56a88ed5c4892f66d5323fc7cd7c22","url":"tw_stocks/009803.json"},{"revision":"768df054133fb30a03d9a4ba96f15476","url":"tw_stocks/009802.json"},{"revision":"d3be5846914dbf431ddedc5b527abc23","url":"tw_stocks/009801.json"},{"revision":"97acf03d56ed41c2f32e4d3104a1172c","url":"tw_stocks/009800.json"},{"revision":"f7cc5b5d1b9734eece5fc6409e55a3b4","url":"tw_stocks/00972.json"},{"revision":"9d4c541ac54728cf90eb6f181f815caf","url":"tw_stocks/00971.json"},{"revision":"4452c9e3677ecc0728d3dc95bcf884af","url":"tw_stocks/00965.json"},{"revision":"b0056e4ccf21688a4ddefc999cd13a98","url":"tw_stocks/00964.json"},{"revision":"64564eff10d1da11161df59a22db3270","url":"tw_stocks/00963.json"},{"revision":"3a3c487a7ec47768bf0e60be190b8944","url":"tw_stocks/00962.json"},{"revision":"a2c7b427ffb031892fd6fa2b855f1a7e","url":"tw_stocks/00961.json"},{"revision":"dbb156175460a95121e33ea30cb4a9cd","url":"tw_stocks/00960.json"},{"revision":"5d517370f2d964c6b1c17104f81efb98","url":"tw_stocks/00956.json"},{"revision":"0e8fc730746f3c0e5a38d8d3e519085e","url":"tw_stocks/00954.json"},{"revision":"91dc8d5f51f3e3ceb427d112b225c6cd","url":"tw_stocks/00953B.json"},{"revision":"6b501322cf58dfaaf387f50703354461","url":"tw_stocks/00952.json"},{"revision":"3b8643ad1ccb50237b45face2a286e76","url":"tw_stocks/00951.json"},{"revision":"5f0c8df6a969b8000fe32785e3d4d85e","url":"tw_stocks/00949.json"},{"revision":"2646ddc066225ea99cf651404aea0e51","url":"tw_stocks/00947.json"},{"revision":"4451ede8bb64c86311941f1631550008","url":"tw_stocks/00946.json"},{"revision":"823edd90d160eb8b486ae10c1de3f679","url":"tw_stocks/00945B.json"},{"revision":"df0a453e9008885e536ca4d8c214b331","url":"tw_stocks/00944.json"},{"revision":"9a1599c982b0fab0aa416a1a409cf250","url":"tw_stocks/00943.json"},{"revision":"d5d12070b807f58eea00929429f5823e","url":"tw_stocks/00941.json"},{"revision":"a9a8fcacef4c119bb82c92cfb50e7581","url":"tw_stocks/00940.json"},{"revision":"4b76db29429dc6346a36196246951938","url":"tw_stocks/00939.json"},{"revision":"09f16729e1bcacf59aec7b884b824007","url":"tw_stocks/00938.json"},{"revision":"aff4389c35459eb4f845b3bac17c2c3c","url":"tw_stocks/00936.json"},{"revision":"1d2af4d96dede18bb8f78bc880055c2e","url":"tw_stocks/00935.json"},{"revision":"690570821fcb5dd6ff071f5a38040887","url":"tw_stocks/00934.json"},{"revision":"2cea0d2d9d02db80c7dca5a4077fd396","url":"tw_stocks/00932.json"},{"revision":"7bb23a8c848a007acc9b27bff711a1f8","url":"tw_stocks/00930.json"},{"revision":"bcc0e2846a1c3eb8a7eb242ae7b7cde2","url":"tw_stocks/00929.json"},{"revision":"362110ebbb62e228eb25b4c6685754ce","url":"tw_stocks/00927.json"},{"revision":"eec036e9f3a7299d39c4bed8f11f7bb7","url":"tw_stocks/00926.json"},{"revision":"86727dd10a8baf8023427e1542539166","url":"tw_stocks/00924.json"},{"revision":"e8fddb834ea8af420aece01fa5562185","url":"tw_stocks/00923.json"},{"revision":"a929dc7b18c3937dbf14b28f743bb38c","url":"tw_stocks/00922.json"},{"revision":"cf0c2b7a14c50007c642398bcebc37e4","url":"tw_stocks/00921.json"},{"revision":"4e0dfadac4bd1f454285a464eae53243","url":"tw_stocks/00920.json"},{"revision":"b9cf3670351fe1ee979e46a0adcaef40","url":"tw_stocks/00919.json"},{"revision":"8b7b794fe46c7c95eba94d0dcc7e58bf","url":"tw_stocks/00918.json"},{"revision":"a8ae2473ae8e1776b1bf498afc2b5cfd","url":"tw_stocks/00917.json"},{"revision":"9285663d64f63eeb096c27e56d37a018","url":"tw_stocks/00916.json"},{"revision":"435b16559c8f574a32b9ca136ba5e00a","url":"tw_stocks/00915.json"},{"revision":"99222fd11e78c0a7417354175994908b","url":"tw_stocks/00913.json"},{"revision":"c7151425399722906dcb6559e6ae779a","url":"tw_stocks/00912.json"},{"revision":"803318c0a8b859f61f421a50a374ca69","url":"tw_stocks/00911.json"},{"revision":"337ae4cd7530182a4cd97a8ea910732d","url":"tw_stocks/00910.json"},{"revision":"ac14fd20958ffcb812bb7e3510c553d7","url":"tw_stocks/00909.json"},{"revision":"973285a822770549be870f06b6a21267","url":"tw_stocks/00908.json"},{"revision":"89d752c5859460580ee7b381dc38b185","url":"tw_stocks/00907.json"},{"revision":"f00a3c5d19939025b83aa53f0b61b4fb","url":"tw_stocks/00905.json"},{"revision":"0375a7071d77bee2165f7887c79d7f17","url":"tw_stocks/00904.json"},{"revision":"9e738e5ce2c653688d41851de7622ebc","url":"tw_stocks/00903.json"},{"revision":"a00cf5d193b57d1f963153235c4a3079","url":"tw_stocks/00902.json"},{"revision":"d46f343ef9ffa446c09b90edfcc757d8","url":"tw_stocks/00901.json"},{"revision":"ce46c3a10eaafdb9b06a721be5a6dfa4","url":"tw_stocks/00900.json"},{"revision":"22fac0026299f2b730f47a1630823d92","url":"tw_stocks/00899.json"},{"revision":"b0c971ac15ffd663db0137cf2a90d2e0","url":"tw_stocks/00898.json"},{"revision":"203af5521600243825602985d82ab73c","url":"tw_stocks/00897.json"},{"revision":"fdf9fdcbe8b89803b4e7e2b981556060","url":"tw_stocks/00896.json"},{"revision":"ad9bf9c866265a3b47988dd63f1630a4","url":"tw_stocks/00895.json"},{"revision":"591b0343b72af5665cadf026b4e041a4","url":"tw_stocks/00894.json"},{"revision":"34e88e7fa80d3597052e5e7b56c8adb6","url":"tw_stocks/00893.json"},{"revision":"888d20de3a54d2c0f7b29c5b952cb159","url":"tw_stocks/00892.json"},{"revision":"859c9d19801945cea3751de6defa2f42","url":"tw_stocks/00891.json"},{"revision":"fcf80f2ebb35c8020e05b74017dabe47","url":"tw_stocks/00885.json"},{"revision":"0bae8c5a0bb199c7b1250873afd3b47e","url":"tw_stocks/00882.json"},{"revision":"c1b8a3d0c45004bb1be0f4ffa901c09f","url":"tw_stocks/00881.json"},{"revision":"bb4e5ee1c111334e5a6c7d12bd80d116","url":"tw_stocks/00878.json"},{"revision":"238a317c7a6c295880ab1024c69a835a","url":"tw_stocks/00876.json"},{"revision":"11464e9d4d8c3518f92221fa6eb68017","url":"tw_stocks/00875.json"},{"revision":"c616b85af902bdffc7f56a29b25173ce","url":"tw_stocks/00865B.json"},{"revision":"c3cf80a54098d35caa420d2db95044a3","url":"tw_stocks/00861.json"},{"revision":"692490dbf85707d273fd4e9398c32f15","url":"tw_stocks/00852L.json"},{"revision":"f6fd38ae8636602743c459b8eeadb9f2","url":"tw_stocks/00851.json"},{"revision":"dad8a9de86a23090892b1b693431b623","url":"tw_stocks/00850.json"},{"revision":"c9351f7ae32a2109567dd61ee48cf976","url":"tw_stocks/00830.json"},{"revision":"c442ff1f45d63abc61edafb038a39a75","url":"tw_stocks/00783.json"},{"revision":"858b0fa3518a6b846d93ce53c11b2e20","url":"tw_stocks/00775B.json"},{"revision":"695949e2d9ec042253860c4b49288fe1","url":"tw_stocks/00771.json"},{"revision":"3d220fc23236308365d3ec1056e090c5","url":"tw_stocks/00770.json"},{"revision":"47a450c78faadebd1af40859e1593153","url":"tw_stocks/00763U.json"},{"revision":"6aa223dddc366ae976b63fcf301e91f9","url":"tw_stocks/00762.json"},{"revision":"fb8d793a8cb938e8c7015713c7179866","url":"tw_stocks/00757.json"},{"revision":"d7194221d54c3713ce7844101099591b","url":"tw_stocks/00753L.json"},{"revision":"67c5d7195834c89c281ae35e9493f36e","url":"tw_stocks/00752.json"},{"revision":"3af5f3978e92c1155085910eb27058a1","url":"tw_stocks/00739.json"},{"revision":"a4c75cf7b9f47ddbfc482dd2e4507bd7","url":"tw_stocks/00738U.json"},{"revision":"48ddf0a262735dbe36ddac276eeb99e9","url":"tw_stocks/00737.json"},{"revision":"ebde89d202680d887f9819f8f55ff5a0","url":"tw_stocks/00736.json"},{"revision":"427b08fdaaa64390eab0a7a8cf3677eb","url":"tw_stocks/00735.json"},{"revision":"71afba6780b31b0e664117406e399517","url":"tw_stocks/00733.json"},{"revision":"2cb28e0775e1eaf13be730b4c637ac13","url":"tw_stocks/00731.json"},{"revision":"a89458e9a928b9ecf4ff6263fc03bb8f","url":"tw_stocks/00730.json"},{"revision":"1ca1c28a1648a885f6d5342cb8d804ce","url":"tw_stocks/00728.json"},{"revision":"046be2ad8f9c053e8bd53744d1a9526d","url":"tw_stocks/00717.json"},{"revision":"3840b9f55a0f80b1e18b287f2b4d91c8","url":"tw_stocks/00715L.json"},{"revision":"c21dbc7071c7df6bbe08eff67c9f3451","url":"tw_stocks/00714.json"},{"revision":"705c90f9bdeb5f9e6dbec9d43d4b164b","url":"tw_stocks/00713.json"},{"revision":"448bf9b384f04e665c4fdf52fe954bfa","url":"tw_stocks/00712.json"},{"revision":"33919dff898b9cda3c75a6eb0132a5af","url":"tw_stocks/00711B.json"},{"revision":"42f6353fee9a64fab847339f899d6ee4","url":"tw_stocks/00710B.json"},{"revision":"925a0dbbb8cb15f623c896db9040dc85","url":"tw_stocks/00709.json"},{"revision":"879afff175f696dcefeb2023001f5f59","url":"tw_stocks/00708L.json"},{"revision":"64c472758de3250cb0df1b3a7aba471a","url":"tw_stocks/00707R.json"},{"revision":"dc15dec0a72c09155b2c94074c10c97c","url":"tw_stocks/00706L.json"},{"revision":"98cd248add3a1e754125e90b916c3fd4","url":"tw_stocks/00703.json"},{"revision":"a030e945954542b02afd40fa038e7005","url":"tw_stocks/00702.json"},{"revision":"3e71004d11921a6e0d0dc8f9651600d1","url":"tw_stocks/00701.json"},{"revision":"bb302732e243f6818126e4b25b79ce45","url":"tw_stocks/00700.json"},{"revision":"46ae446717acd72b3faca469894207b3","url":"tw_stocks/00693U.json"},{"revision":"14ff7c4f227d57715d62137f3539cca5","url":"tw_stocks/00692.json"},{"revision":"6389b109d0cf11e823c0972e41ba2c18","url":"tw_stocks/00690.json"},{"revision":"5036542cfa8021f498dad4d105684e58","url":"tw_stocks/00689R.json"},{"revision":"1f11ec8df6c802e082f28f7acd691259","url":"tw_stocks/00688L.json"},{"revision":"8df6af0cd78e05d6e38ec5c3ec8f1232","url":"tw_stocks/00686R.json"},{"revision":"ac75ede1ce9ef03957825b2bacd16e55","url":"tw_stocks/00685L.json"},{"revision":"6839b6eebd1fde82a0aafc99f82d45f2","url":"tw_stocks/00684R.json"},{"revision":"28331f58256704a9c96e717c0dba8ef7","url":"tw_stocks/00683L.json"},{"revision":"01f5c6cd874f8010aa9f4ae7a53d7fc4","url":"tw_stocks/00682U.json"},{"revision":"fb2fc3728bdae713f60e606a451e20ce","url":"tw_stocks/00681R.json"},{"revision":"5e9da9aa1c2cf078ee5fd70a89be14ba","url":"tw_stocks/00680L.json"},{"revision":"c1f9a621fd2c3ebe415fe1b135545db7","url":"tw_stocks/00678.json"},{"revision":"243a49737f54866f0b9da8553b57ddc8","url":"tw_stocks/00676R.json"},{"revision":"10f83ac3f6b2972a2e8d098e0b3598c3","url":"tw_stocks/00675L.json"},{"revision":"962a9167c6de10c2c12a2477bf773762","url":"tw_stocks/00674R.json"},{"revision":"c73d83df2f02a2497b913312ed3f1de4","url":"tw_stocks/00673R.json"},{"revision":"0f3114edf6f3ade30fe8e505e6d88f61","url":"tw_stocks/00671R.json"},{"revision":"9be691b22fb355b71852091ee8c6e93a","url":"tw_stocks/00670L.json"},{"revision":"8dbee8a39c481d0e19078137a4f5fb67","url":"tw_stocks/00669R.json"},{"revision":"ecfaf1b9b3f002537cb9fc6a400fcbe1","url":"tw_stocks/00668K.json"},{"revision":"b7ba4843160aba6e7cf3e587a55eeba8","url":"tw_stocks/00668.json"},{"revision":"a15e088692d7cbc87dffbf8dcf0690a0","url":"tw_stocks/00666R.json"},{"revision":"c74ae2e79874d5b91518749194399537","url":"tw_stocks/00665L.json"},{"revision":"9525ce0110a95d0a50eb7776f8b258ca","url":"tw_stocks/00664R.json"},{"revision":"b6b2110e9fc2a894e885104934d78291","url":"tw_stocks/00663L.json"},{"revision":"5e7b8ef743bd63bf9f43d28c6798ced5","url":"tw_stocks/00662.json"},{"revision":"84f0436220c1226f92ad9b84e4a5351d","url":"tw_stocks/00661.json"},{"revision":"9936b3ec569dcb70441e7b75790b243f","url":"tw_stocks/00660.json"},{"revision":"c6aec50dd6eff7089b3f74ad9b38f415","url":"tw_stocks/00657K.json"},{"revision":"08082a99b6d70cc72a878e00fb2d95a1","url":"tw_stocks/00657.json"},{"revision":"4685ee4a6712587cb90a5125645d477a","url":"tw_stocks/00656R.json"},{"revision":"ef29195a58bee0d95eb656368ba01818","url":"tw_stocks/00655L.json"},{"revision":"4b9c9e26d5ba30038e0c3a5c4b0eea0b","url":"tw_stocks/00654R.json"},{"revision":"d02ae687588f41d3f0ac87bd37773726","url":"tw_stocks/00653L.json"},{"revision":"c49bec36c10875e48f3e2f85608f0810","url":"tw_stocks/00652.json"},{"revision":"59c84ccd1c71baa1ec744dab7945e6f7","url":"tw_stocks/00651R.json"},{"revision":"b8800e46692adc5930a224219ea31000","url":"tw_stocks/00650L.json"},{"revision":"732f333294e1b0eb001d97397240a8d2","url":"tw_stocks/00648R.json"},{"revision":"feb3da096f3f0154f5885fc3307e46ec","url":"tw_stocks/00647L.json"},{"revision":"1dc19a42d881c7006e744a6b7ac1f44c","url":"tw_stocks/00646.json"},{"revision":"afefd1aa4593d2b20e2185aadd954386","url":"tw_stocks/00645.json"},{"revision":"ee2f29331b525ba4140ddc309f557294","url":"tw_stocks/00643K.json"},{"revision":"c0603173bda0eac1cb886ddfde159184","url":"tw_stocks/00643.json"},{"revision":"02510feaeec1123ba2976b45a5ab6502","url":"tw_stocks/00642U.json"},{"revision":"f01d87ec0978169928ce2a3ff5366d45","url":"tw_stocks/00641R.json"},{"revision":"a36ab6ab6362a4ed437175ed9a551d33","url":"tw_stocks/00640L.json"},{"revision":"c02bf3227a7aa9928cf0aff9bd734121","url":"tw_stocks/00639.json"},{"revision":"73a2814fcdec08763c337358564ea090","url":"tw_stocks/00638R.json"},{"revision":"b47ad22a2ad778c85d2b9523ccca8794","url":"tw_stocks/00637L.json"},{"revision":"60280f8ae43c67f6e467b27047f7b269","url":"tw_stocks/00636K.json"},{"revision":"41d13fd936531b0c2238c23da950d5b4","url":"tw_stocks/00636.json"},{"revision":"86b178814b94c7a802e356a4df1ba016","url":"tw_stocks/00635U.json"},{"revision":"6bcdb91f79ef17de17df2c225eef7d04","url":"tw_stocks/00634R.json"},{"revision":"c32045926f11ab86d29d60824b7a182d","url":"tw_stocks/00633L.json"},{"revision":"3104f278652f8b3407493dac46065a8a","url":"tw_stocks/00632R.json"},{"revision":"ce25b978a671a6de517d0962307d3e9d","url":"tw_stocks/00631L.json"},{"revision":"6c0a419e93c8191c98caf0f95c7aac25","url":"tw_stocks/00625K.json"},{"revision":"e0d19aa429dc4f8406f988ebed3fb087","url":"tw_stocks/006208.json"},{"revision":"70c81c0fc691f1479c9f64a0f3fc9b63","url":"tw_stocks/006207.json"},{"revision":"3765f0768d2961906241c28ee6aaa2c8","url":"tw_stocks/006206.json"},{"revision":"50428e54a62efae86ff445b1cd6da40b","url":"tw_stocks/006205.json"},{"revision":"160e83c53c98d0c3c739de7086066f3e","url":"tw_stocks/006204.json"},{"revision":"336b99d55878f56b437d8e30dbb674f5","url":"tw_stocks/006203.json"},{"revision":"3d47506fd90280ec8555f2d748ce8257","url":"tw_stocks/0061.json"},{"revision":"bf780e2ab782fde5915e068fdd6f5a3d","url":"tw_stocks/0057.json"},{"revision":"677a1048116189152516ba7f8e889967","url":"tw_stocks/0056.json"},{"revision":"c750d35a56dbabd87a50c1778dbde296","url":"tw_stocks/0055.json"},{"revision":"bb73151a62f72a04aefb012421baabbd","url":"tw_stocks/0053.json"},{"revision":"ed991e79a087d131c20cdbaf083186e7","url":"tw_stocks/0052.json"},{"revision":"e645977b824a82086c77dcd7c1420554","url":"tw_stocks/0051.json"},{"revision":"d18eadbb23e0cfda0dc4891794e00ac3","url":"tw_stocks/0050.json"},{"revision":"8918d55576ab7b643ecee975f1b60cd7","url":"subscription/callback.html"},{"revision":"abfe5d547a90810a8d7452520b4db65b","url":"resident/me.html"},{"revision":"c45e83bf04ae2463b016db5bfd4ac81a","url":"financial/rebalance.html"},{"revision":"bd71714def6e87a82c0a8ba2ef9714ee","url":"financial/cashflow.html"},{"revision":"ae379721053f213c12ad94370bea3bba","url":"financial/balance-sheet.html"},{"revision":"32c9f43b3f90cd3a314abc2e0437cc28","url":"finance/tsmc-industry-trends-analysis.html"},{"revision":"48497b0c2e777c2921023ebe76b29b19","url":"finance/taiwan-stock-weekend-report.html"},{"revision":"eca2c0b8aab4712f8d21a895d39a2ac1","url":"finance/taiwan-stock-crash-warning.html"},{"revision":"148f7fc6fd2bb9ed88b4acafd8a10c57","url":"finance/tags.html"},{"revision":"08d278443ee0be0cf80304f266ad1305","url":"finance/finance-section-created.html"},{"revision":"ea4be2c698bd3e857717b2acbe230f3d","url":"finance/authors.html"},{"revision":"39280356d2a00fd0c062bc6f6fbc170c","url":"finance/archive.html"},{"revision":"996d54e712151019ab8008c414b6c20d","url":"finance/ai-635.html"},{"revision":"4488f24359ab8c3bf231d988f98d4855","url":"finance/tags/newsletter.html"},{"revision":"86c86db1ce3ae216adf5474e227a080f","url":"finance/tags/finance.html"},{"revision":"7f83bbe868d928d54164827c93f1a75d","url":"finance/tags/announcement.html"},{"revision":"0715867564498d928f77512a58e697e8","url":"finance/post-453/index.html"},{"revision":"a3576a4448405728bdacb46ccaff2d16","url":"finance/ai-286/index.html"},{"revision":"8a8b45f137fd964c3f8a2047d8088d52","url":"finance/2026-02-28-307/index.html"},{"revision":"81b0c364af2caf65d2ca8e441479db1b","url":"docs/tags.html"},{"revision":"3d4d591dc55394dee3b404652dd7e910","url":"docs/intro.html"},{"revision":"d9f408631ab8c88761a2d0281c17edd0","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"9ba5fac9698f798c4ff9c71d3f43ec69","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"de5aedb21cf35d1325f681e3ce1b71f1","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"230c64f5d6b4703e6aafeb0547902801","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"361a1b756d552b2554d860df13359a07","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"cbc0940198640abd8ba4924a7f4b34ba","url":"docs/tags/模型控制.html"},{"revision":"952b3937ba21f5cee2e09ae6019944d4","url":"docs/tags/top-p.html"},{"revision":"53568dba4ce2f150c3212af1e143fbd3","url":"docs/tags/tokenizer.html"},{"revision":"d1ed2d112653d246b5b17f8915c32a46","url":"docs/tags/temperature.html"},{"revision":"b8e0bbd75964a0031cb26d0a0f52aa58","url":"docs/tags/technical-docs.html"},{"revision":"75fef72711a8a6e278291d944f355bda","url":"docs/tags/nlp.html"},{"revision":"20637dfd5b6c4ef9347a82b3c4e8fb40","url":"docs/tags/llm.html"},{"revision":"972095a10a7842ce3f7c0dd9e3a54342","url":"docs/tags/git-hub-copilot.html"},{"revision":"58f3b314b808e31c5c8d8ffdc279ac0a","url":"docs/tags/generative-ai.html"},{"revision":"09183904a0c3b2e11bfa34ab31abf028","url":"docs/tags/development-tools.html"},{"revision":"b76661aeb61a9a3598ed66e0c14fa460","url":"docs/tags/cli.html"},{"revision":"4167dd7aa3a7b92b942d20ab246de405","url":"docs/tags/claude-code.html"},{"revision":"24fa901913a28b4a94bc45b2ae51d443","url":"docs/tags/bpe.html"},{"revision":"7f66451576be8e35ed755bcf8dc4926c","url":"docs/tags/automation.html"},{"revision":"b623cba0d567ada8699e15f15956a41a","url":"docs/tags/ai.html"},{"revision":"62e71c7dbf7eb9f143c33f4df70334f8","url":"docs/tags/agent.html"},{"revision":"6c8e616740e93d79c0fda49492e3612c","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"dc399228b7cc3aa4be26db3c9785aa43","url":"docs/skill/gemini-skills.html"},{"revision":"909d6f8ce04f9c8cf355486faffb1ede","url":"docs/skill/claude-code-skills.html"},{"revision":"48f5847567027b004c0661024d9d3886","url":"docs/python-workshop/python-init-file.html"},{"revision":"e8196311a07eac4a21ccc3604a041776","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"d62a60c0acc0313eba85937ac19e1a15","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"0a9cbb487d0583386d44a79739e023da","url":"docs/claude-code-series/skills.html"},{"revision":"e4dacf0938b51dac71e6e15f500ac2f5","url":"docs/claude-code-series/monitoring.html"},{"revision":"607a7749b297ac3e8cd870c1267793eb","url":"docs/claude-code-series/getting-started.html"},{"revision":"6f7d68d6d3d2a5ac93da9439403856f8","url":"docs/category/發文-skill.html"},{"revision":"e09badbef911775bcdcec3211ac619b9","url":"docs/category/戰情室元件-skill.html"},{"revision":"5ffc16d18fd7c8d22de25b9519562ce1","url":"docs/category/skill.html"},{"revision":"53c10801511a62796afef67eda12105e","url":"docs/category/python-workshop.html"},{"revision":"5869a2147d69d950e1fc0be4cbd8c54d","url":"docs/category/claude-code.html"},{"revision":"6402512a70f821de81d9163215320506","url":"docs/blog-skill/news-rules.html"},{"revision":"03ab2844be4539dde08a9106e0e8c329","url":"docs/blog-skill/history-rules.html"},{"revision":"65afe4ffeb9067bd9578cf1863885d7f","url":"docs/blog-skill/finance-rules.html"},{"revision":"1c380bbff0853e49641337facc623a07","url":"blog/蛋蛋村誕生.html"},{"revision":"926955ae7e60c258da0e25c24b6efca1","url":"blog/tags.html"},{"revision":"9fbe7f9d6d4b0fc9b39d2c4793f3eaa4","url":"blog/authors.html"},{"revision":"5e2c38bf29969b07d738f628abb4dd8e","url":"blog/archive.html"},{"revision":"18aa70d28baf99e5b34604b6cbd0a330","url":"blog/2026NewYear.html"},{"revision":"1380f3291d2c9efb55094da921fa511d","url":"blog/tags/蛋蛋村新聞.html"},{"revision":"1dfb29b5c23ba17b0dc3142540d8b89e","url":"blog/tags/節慶.html"},{"revision":"c74c46620c6c34faa5730e0cee62bae3","url":"blog/tags/新年.html"},{"revision":"a0319a0de970ee92617b2ebe7fe2acd6","url":"blog/tags/技術新聞.html"},{"revision":"42c254e6ad534caca1a56bca10b1f91f","url":"blog/tags/village.html"},{"revision":"7b2fbf73a7f1b67abc6e9778c6c3e26d","url":"blog/tags/news.html"},{"revision":"fcd79dd2b1bb74991c5d3144d53bc693","url":"blog/tags/docs.html"},{"revision":"7e714dbc4247a851368c31ec74447881","url":"blog/tags/claude-code.html"},{"revision":"349f36e473fc7f61b85715a94a26b2bb","url":"blog/tags/announcement.html"},{"revision":"6e8196ce3ef0a437d371aaef1fb5bfdc","url":"blog/2026/02/23/2026-02-23-news/claude-series-announcement.html"},{"revision":"e62e80f8cf874df8aec3dfb7bda089f8","url":"auth/callback.html"},{"revision":"2141ce09f1e8282056a9c4ebb6ca032e","url":"assets/js/runtime~main.29c965a2.js"},{"revision":"e460b1f24bfe2db32c602c51f1b25237","url":"assets/js/main.1c57ee25.js"},{"revision":"e5ffbcd6106d3dcdf6db7e4d92308ded","url":"assets/js/fa878c7a.1e93baec.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"f6f1947d0a1df7958e71ad915f6a5ef6","url":"assets/js/f81c1134.45305bf4.js"},{"revision":"021e972a2a0c20e8aee2ea8ac03e84c4","url":"assets/js/f71290dd.934e8849.js"},{"revision":"f5adb24c531078531167d786a6328ba7","url":"assets/js/ef8b811a.f460b079.js"},{"revision":"e5a632c053d397b75e50b34a2809690b","url":"assets/js/ec1e3285.5ca4ba4d.js"},{"revision":"1f697d39f93a080f211b1f3190e63f5e","url":"assets/js/e88c4a9c.952dbaa6.js"},{"revision":"3a53cf74a9b117d3651935fe98522f71","url":"assets/js/e86a5a75.afabce7e.js"},{"revision":"a0e16a4e611be9e5379e55c058851cea","url":"assets/js/e787448d.21e95736.js"},{"revision":"ccbfd6191ffa36a37ead7608c61641c9","url":"assets/js/e1dd3c3b.f72d1b45.js"},{"revision":"9fe7b7507fcc3c2634bd8bb4228ab332","url":"assets/js/e03056a8.e82983fb.js"},{"revision":"d7729170dea932ac911b21ab04885911","url":"assets/js/dfea6eb9.cfba95f8.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"3d6ffaf685fa0facbdb6bb68eca39db6","url":"assets/js/dd5b562f.d33da825.js"},{"revision":"a82ea0f7f5fb3f07a84ceaaa1cbb1712","url":"assets/js/d871e2e9.bf0ea7b9.js"},{"revision":"8a1be5b003fc9e5ef26c81d49db4db92","url":"assets/js/d5d47070.bf91f038.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"ee82d2e31f4f8120a59b220c55b32fef","url":"assets/js/d0c9de85.7e7f9f7b.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"0e9fc0c4162cc59652bff66603e9db8a","url":"assets/js/cc221b30.6a8d1ee8.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"2539d90c05a3caf384f2d908da832304","url":"assets/js/c3b1af5c.fb85f750.js"},{"revision":"dcb9b0e660da96c3a0c990e5b5a9be79","url":"assets/js/c15d9823.ce62d1b6.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"4ba5567c346e00b764b20963b8a0bb69","url":"assets/js/b95eaafa.3b5c3044.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"728ced41f7cbdfddf052ade9e715cc34","url":"assets/js/b3f074c6.cee69461.js"},{"revision":"886976a025965e53f87e063a5b8441d3","url":"assets/js/b283ca86.83dea432.js"},{"revision":"d20e248e5ca86b5606e78a290059668b","url":"assets/js/b046c1ff.738d172d.js"},{"revision":"7188d7d187794d665203a3c1de1ae78c","url":"assets/js/aeedf315.8dfbeb30.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"41b1f073930b4c3165ea506eec14db71","url":"assets/js/acecf23e.d7e59f7f.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"48334aee8241c5bcf755ada21b16e716","url":"assets/js/a6038fd8.46c09e5d.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"8e836ceee314c55e03355f75717be2b7","url":"assets/js/9d86e7fa.0ff3fd29.js"},{"revision":"68b89e897e66e388116fe3a82dee2872","url":"assets/js/99d3b34a.21965b43.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"e2f10c5585a0042cf5a116ce42e9b4cd","url":"assets/js/923ed0b3.03121c96.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0652fea156f064dae80b5ed4f7cbfb4d","url":"assets/js/90326f8c.6dde08cb.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"a0b19938cb0d24981dcd9dcd0b4da24a","url":"assets/js/8c20996d.a117752d.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"b725ddac27013c7493dadd335f7f9a4d","url":"assets/js/8af61f6a.410ac1c0.js"},{"revision":"4a3ffb8c6fc83e522e002706979d6d69","url":"assets/js/898514b1.26f59acf.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"e850fac8c8ae198d11616985b3f709a1","url":"assets/js/887798b8.75dbcc4a.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"32c0797161e4db6e6dece1bc2b5dc7a5","url":"assets/js/853e1e42.d4e25d83.js"},{"revision":"0cf7600b58368a4e6a9cc59b36cc9c2c","url":"assets/js/853ca2df.9c6564a7.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"891e654d560e7216d3b5a5328b2c5293","url":"assets/js/814f3328.23663516.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"8a4d616f8851c939783f9ff0e56782ce","url":"assets/js/7fbc1a25.811228da.js"},{"revision":"46d7f186da7298043f065a9df09cfd00","url":"assets/js/7ce5d7a1.f8347578.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"39ad0e6b26a7d0c3fb105d61484d2f45","url":"assets/js/6e731933.624f2f81.js"},{"revision":"1eb16a671553aa2d633357564ceff81e","url":"assets/js/6b65cf72.bbce2d33.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"2a42e26d99daedb6a90bce96b5970035","url":"assets/js/607acb04.1e925e00.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"9c68d0883fe23dfdcf6626f03223a3d6","url":"assets/js/56fce896.1ee9bd1c.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"bdb8d015d650e424779b4703495ecf61","url":"assets/js/4f033264.777e4260.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"9d926107afb7a2c49e090ce27c33600e","url":"assets/js/4810d89a.f5c9ea1b.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"02c68f0352a77511dcf2344f648bee73","url":"assets/js/43ea09b6.95edc566.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"3ecde1b7927e50a084efc379ea2704a1","url":"assets/js/3ee3fb84.eca41fd2.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"a6ec567392eacd50e1ecbb742fbe35f1","url":"assets/js/3a2db09e.83680429.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"73272549089adccae6c9049d6a68c6ea","url":"assets/js/393be207.2c54f31e.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"50515d2a6aac31a16110e82659869be3","url":"assets/js/36f337b1.5990a15e.js"},{"revision":"bd9c3fd6be6d03e9384101dfcaf3ec0e","url":"assets/js/36994c47.d1cd66ee.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"da856cc8897420f2a59227172a1bcecc","url":"assets/js/31e93ad8.7c42f27a.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"c0d681da15e6ff56daa3b70039dbf112","url":"assets/js/23d26d3d.1976fc30.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"df550faa9ce4f3d0e66ceebe2a8b87c0","url":"assets/js/179b82d4.46ac06e0.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"49abb9004295866dc20b61c1c6b52e76","url":"assets/js/177ac620.209b1417.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"9c7d42b6570d3df28eb4c865c550c678","url":"assets/js/162c7fa0.7426c820.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"e7eb218f35c5738b0b52c76a47c1bf25","url":"assets/js/152e41eb.e420505e.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"38f0e699b4a2615ce8648632681244b3","url":"assets/js/1266f974.e66cd63d.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"98ac9c73dcd6a9dcb3051baf6c4ad138","url":"assets/js/0e384e19.46159967.js"},{"revision":"72b0dafe8d211d89c79ca95e45f5429b","url":"assets/js/0b169497.48008c03.js"},{"revision":"2f333197585006f180319b8635f43b45","url":"assets/js/055ef20d.c34eac2b.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"9fa725c5f88c83071fa7ef501eed3ea6","url":"assets/js/0058b4c6.fbf1839c.js"},{"revision":"fa7720c6fcc2e99df10e032aafbc4436","url":"assets/css/styles.70cd7c76.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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