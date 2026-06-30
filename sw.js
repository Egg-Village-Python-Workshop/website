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
    const precacheManifest = [{"revision":"a55d62fd69019e223080d64428028545","url":"tw_stocks.json"},{"revision":"5cb2bd5c8e21b5088b2d738e26b8b114","url":"subscription.html"},{"revision":"19b827f8e779d2b98344d26b97ddd2f1","url":"quotes.html"},{"revision":"78090dbebfd096fd9ba4c53c16ea2dc5","url":"me.html"},{"revision":"3d25d31e9e10de1b6d52ab6cea6ad6a0","url":"market-war-room.html"},{"revision":"a977060f10405b2c914ce0e9b2d756fb","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"f0a02f83c956bc52d54967b685d37a92","url":"index.html"},{"revision":"c84ea951646f23a11895d7eb5b9e7b48","url":"games.html"},{"revision":"fa7d4e685f6d83958c1f68badc451af0","url":"finance.html"},{"revision":"33ff58db477f0327374563b9ab223236","url":"feedback.html"},{"revision":"1b90dfb5710a761d4b803250c6c3cd8f","url":"arena.html"},{"revision":"a175ef686dacf3a55d851cde67dbb099","url":"404.html"},{"revision":"12f15dc6e35dc41da1a8b8f34aaf81ce","url":"tw_stocks/9958.json"},{"revision":"56e4279a9909fd19d4eceec41962c8ef","url":"tw_stocks/9955.json"},{"revision":"f8fe3d720ff5aa68acbd7fd2738f5456","url":"tw_stocks/9946.json"},{"revision":"a9e3107cdde1089bb0215975527e0d98","url":"tw_stocks/9945.json"},{"revision":"1e772edf857fb457985d356972553eb6","url":"tw_stocks/9944.json"},{"revision":"8f57da46cf21af670167fed9f9f5f9a4","url":"tw_stocks/9943.json"},{"revision":"9029cdbcfd2d0aa80d3d801540bc6e0d","url":"tw_stocks/9942.json"},{"revision":"b07b97fded64b87c462d401033e66096","url":"tw_stocks/9941.json"},{"revision":"ba7ec9d3945d0a42e47f1e629cbf4c31","url":"tw_stocks/9940.json"},{"revision":"5b35ec6bb082a7b90a2af1f5a6504ea0","url":"tw_stocks/9939.json"},{"revision":"63cb297fba3f6c54dfc39959e6ab2f3a","url":"tw_stocks/9938.json"},{"revision":"daf52d838bed0d2e58a43c3f01a75e41","url":"tw_stocks/9937.json"},{"revision":"4e7b924045fac660f0cf3f8b7b7832c7","url":"tw_stocks/9935.json"},{"revision":"1919ffc5b982b809b7568a61261adab4","url":"tw_stocks/9934.json"},{"revision":"9bf2d31acaa3b7ee4adad7b45e1c168b","url":"tw_stocks/9933.json"},{"revision":"6913c6875cc6f743566a41d7851ad445","url":"tw_stocks/9931.json"},{"revision":"ef418a0a3154845b8f49aa0f1a45f4a8","url":"tw_stocks/9930.json"},{"revision":"a5bf0e7ced6a75462f2477979afaef10","url":"tw_stocks/9929.json"},{"revision":"4bdeccfddee53d425aad1bc76668fbc2","url":"tw_stocks/9928.json"},{"revision":"cda149381774882a3ae33765265e853c","url":"tw_stocks/9927.json"},{"revision":"c3526004f337f7320f60bae4e1d72917","url":"tw_stocks/9926.json"},{"revision":"5d744a0be1446d0cd83ff74002b7bde1","url":"tw_stocks/9925.json"},{"revision":"bea245e4a50e1e27953dd78ee140f0df","url":"tw_stocks/9924.json"},{"revision":"9807c8182777ba06828b52fb8c53c536","url":"tw_stocks/9921.json"},{"revision":"c929372d2ae485638dc1a79309e24448","url":"tw_stocks/9919.json"},{"revision":"8a77f9e936c804e28ce69be6d3a55b27","url":"tw_stocks/9918.json"},{"revision":"7a7638bc820f4d66f402a9ecd2cb948c","url":"tw_stocks/9917.json"},{"revision":"74e77ac9beab3aa30703fe2c8758feb1","url":"tw_stocks/9914.json"},{"revision":"eb8e81624bcf3d955d7df460740e6d8a","url":"tw_stocks/9912.json"},{"revision":"0a85d57a91c533b149e76a2617363738","url":"tw_stocks/9911.json"},{"revision":"4de4e3372d53f998b528fd74b08aaa53","url":"tw_stocks/9910.json"},{"revision":"6b3716aa49570226c00684d535e23a58","url":"tw_stocks/9908.json"},{"revision":"31dc22e40a62c24cbeb508c7374c8a46","url":"tw_stocks/9907.json"},{"revision":"ccab96feeade70545cefb65907022275","url":"tw_stocks/9906.json"},{"revision":"d2259c69e5dca80a9595963db0ee3cd1","url":"tw_stocks/9905.json"},{"revision":"1670d10a1048cb3bc99c89a85e962589","url":"tw_stocks/9904.json"},{"revision":"11a2384c966dfa045341c063311b1829","url":"tw_stocks/9902.json"},{"revision":"1f60ca8d016bf56db5e129e2d1ab0543","url":"tw_stocks/9802.json"},{"revision":"7ac331a25db4f9c384d8e053e43d1bf6","url":"tw_stocks/8996.json"},{"revision":"f7888cbfb3bccb8fd99e2926e24ab3b3","url":"tw_stocks/8940.json"},{"revision":"c76da6126bb8ccfa963011b925269e4c","url":"tw_stocks/8926.json"},{"revision":"fe4fa75234022e9d02c965ebeddb58e5","url":"tw_stocks/8499.json"},{"revision":"0b2cca1e5366814e5dbda190f0b73ed2","url":"tw_stocks/8488.json"},{"revision":"84d0e0ce260d3d362d00434bc702d69b","url":"tw_stocks/8482.json"},{"revision":"10c4c7c91281dcfd717e95c683a35be3","url":"tw_stocks/8481.json"},{"revision":"bde401d7d32fbf21a3cede0ca9b5392c","url":"tw_stocks/8478.json"},{"revision":"d2cd40e1aef0dee5c0c579472e43b55a","url":"tw_stocks/8476.json"},{"revision":"538ebdd32f639b24a266b4a676befeec","url":"tw_stocks/8473.json"},{"revision":"2ea764c58365d43df7503dd0ae9cb7a4","url":"tw_stocks/8467.json"},{"revision":"22225da6ea6be9a21b3387d8b5fc8f54","url":"tw_stocks/8466.json"},{"revision":"686fe4a728bc008fe991ca166ce84efc","url":"tw_stocks/8464.json"},{"revision":"74780d3029d2d9759ff77937b01cc9f8","url":"tw_stocks/8463.json"},{"revision":"6b1d85c7ef0791a4afa883e1f90cc1bf","url":"tw_stocks/8462.json"},{"revision":"137a715d39526db0bb2113ed8d961fd6","url":"tw_stocks/8454.json"},{"revision":"18a44f6292588bbb4991897a107633ab","url":"tw_stocks/8443.json"},{"revision":"7a74fe8476248d32d6ecaee82e4814b8","url":"tw_stocks/8442.json"},{"revision":"03f50b83810226abea0d5082c73f34b9","url":"tw_stocks/8438.json"},{"revision":"35c2c9611e2c5f0e33b367a5cdbcf415","url":"tw_stocks/8429.json"},{"revision":"6e85dd217f210bd5ba688c69c17fe74f","url":"tw_stocks/8422.json"},{"revision":"3dc2a3b110c54ee83a0e3c5221e3983a","url":"tw_stocks/8411.json"},{"revision":"40711850f54752951bb72d3bf4f6ddb8","url":"tw_stocks/8404.json"},{"revision":"579927b694ce6d08a03a44427da76cbf","url":"tw_stocks/8374.json"},{"revision":"9aff13dfb6bb0bb59103930d43528b21","url":"tw_stocks/8367.json"},{"revision":"199c4af3853ae1d289fc0b3439ef06d0","url":"tw_stocks/8341.json"},{"revision":"d81959dae5091fe5adc0206be97e389e","url":"tw_stocks/8271.json"},{"revision":"d704da692a37c7b7156dd81ee868cc1c","url":"tw_stocks/8261.json"},{"revision":"111fc586b8be19e9f6a7bfacf8c0c4e5","url":"tw_stocks/8249.json"},{"revision":"bb53b786be53cc30e2aff88e1a62f2cb","url":"tw_stocks/8222.json"},{"revision":"4f84120606ee9f22b1eaf137c0651eac","url":"tw_stocks/8215.json"},{"revision":"83f46e4f9ba0d33465a81a5d430ae1de","url":"tw_stocks/8213.json"},{"revision":"2239bae9739976108179ba0de442798d","url":"tw_stocks/8210.json"},{"revision":"67710c98aee2235c52ecbfecc15f334b","url":"tw_stocks/8201.json"},{"revision":"3044f204fe460001d2585cf8af7f22b7","url":"tw_stocks/8163.json"},{"revision":"a05bebe6376ee9e6176de9084d418ef9","url":"tw_stocks/8150.json"},{"revision":"fe687dc3abffd8e5833a6a55df441537","url":"tw_stocks/8131.json"},{"revision":"f292a20e41118dc3614a014afd26aaa6","url":"tw_stocks/8114.json"},{"revision":"fa572eb92127f0c695697150163b785c","url":"tw_stocks/8112.json"},{"revision":"57c108bcbb8354f469a2249e054949c6","url":"tw_stocks/8110.json"},{"revision":"37d990ad29a74352723ac279ee09845d","url":"tw_stocks/8105.json"},{"revision":"8a521a7fc5c9b12455d02f29e7a0f871","url":"tw_stocks/8104.json"},{"revision":"81bbed8ed5d6244d831a0b397ae9389d","url":"tw_stocks/8103.json"},{"revision":"474a1cc506237ccf8c57a8d7e7697b16","url":"tw_stocks/8101.json"},{"revision":"57b359eb8e6726b22e5b1f6edb2a097d","url":"tw_stocks/8081.json"},{"revision":"71b2e8b33c6ea6b0f7cdc7b5e9361e30","url":"tw_stocks/8072.json"},{"revision":"cbbc9d717dd259a29601c310a2f8e5a4","url":"tw_stocks/8070.json"},{"revision":"7067dd0519f4ad921ddea86abfc6b5cb","url":"tw_stocks/8046.json"},{"revision":"4635e172dd3dcec3e146e4b9114f75f9","url":"tw_stocks/8045.json"},{"revision":"70776acc4fa0f15a2c0de65e82bc9efa","url":"tw_stocks/8039.json"},{"revision":"0c576de4f2e0712b26332949c5431e75","url":"tw_stocks/8033.json"},{"revision":"e9601f1fa1de1c4ae2231a8e4998418c","url":"tw_stocks/8028.json"},{"revision":"eb0c6e61579991a334db0b558b7e56e9","url":"tw_stocks/8021.json"},{"revision":"2cdd7333810df62bcd7acb331c4ce923","url":"tw_stocks/8016.json"},{"revision":"e05f3c3a04d7ceb93a1892c7b6497cb7","url":"tw_stocks/8011.json"},{"revision":"54c1eb39fb68ca8901319c51a2d5bf93","url":"tw_stocks/7822.json"},{"revision":"d5afe166aa2994db5e5c0bab5a27bcbf","url":"tw_stocks/7821.json"},{"revision":"859540b139d97ec130910194dc1a66af","url":"tw_stocks/7818.json"},{"revision":"87826d484dfae9913ee3c5a7b2c345ac","url":"tw_stocks/7799.json"},{"revision":"09f7c8bbd95413360f2b2d855f4eab34","url":"tw_stocks/7795.json"},{"revision":"acc026885d819521c3c6de6f79836d9d","url":"tw_stocks/7791.json"},{"revision":"9a95d89e82ec6ef0a67deb44b1af1107","url":"tw_stocks/7788.json"},{"revision":"11a27c895e93436095111d163ce5efb1","url":"tw_stocks/7786.json"},{"revision":"bcc55ab799602f26284430733eb0786f","url":"tw_stocks/7780.json"},{"revision":"092c583b31371c89a942fd33b2708727","url":"tw_stocks/7769.json"},{"revision":"22c6fa6ecfe102ceff413e44938fa697","url":"tw_stocks/7768.json"},{"revision":"6873880e0d8ca361981763ff94762788","url":"tw_stocks/7765.json"},{"revision":"e474cd641033e7c18e5ff00654cefd10","url":"tw_stocks/7760.json"},{"revision":"5e9b3b5f39e05f43eb9a6e9ba629343a","url":"tw_stocks/7750.json"},{"revision":"ede32f322fdd069b231f4b2377b7422e","url":"tw_stocks/7749.json"},{"revision":"e7f3ddd78e43bde6ade3b85309aeb470","url":"tw_stocks/7736.json"},{"revision":"968b943020ffbba114efd18eb3090276","url":"tw_stocks/7732.json"},{"revision":"402924f888e76660e169127365e660fd","url":"tw_stocks/7722.json"},{"revision":"5e1e5ea5978715a3a4471da8cdb2fe0d","url":"tw_stocks/7721.json"},{"revision":"70df10f1803da68f9c82ae330cb3e151","url":"tw_stocks/7711.json"},{"revision":"fdd8a1c205e264a58e69bba98441c0d0","url":"tw_stocks/7705.json"},{"revision":"9ddeeb43b05b415c1f68a5cd5e6bef66","url":"tw_stocks/6994.json"},{"revision":"8d50645a49129934014ebd54c85e0867","url":"tw_stocks/6965.json"},{"revision":"41c7e264e1d667c18b75e99687dd4850","url":"tw_stocks/6962.json"},{"revision":"fca7781496085fcc87e9c88755f06746","url":"tw_stocks/6958.json"},{"revision":"b05e130c43734d6af99a7fd478054eb1","url":"tw_stocks/6957.json"},{"revision":"0a7891ab59b719a73bae798cf93208c9","url":"tw_stocks/6952.json"},{"revision":"6233769544932723bb54f1fa37d1ba47","url":"tw_stocks/6944.json"},{"revision":"7b1570773ebc5c913d98c5711cdb5795","url":"tw_stocks/6937.json"},{"revision":"53755f6f33be0db88a4556170cf4748f","url":"tw_stocks/6936.json"},{"revision":"a30bae896a0648eb3c134d83797db1e6","url":"tw_stocks/6934.json"},{"revision":"7af24bfdf8515a6cb91746a12039bf53","url":"tw_stocks/6933.json"},{"revision":"c59555d7545c63ea40b546c18b2f6e3e","url":"tw_stocks/6931.json"},{"revision":"e995937ab6f0bea9c7a123a9f17cc828","url":"tw_stocks/6928.json"},{"revision":"62ae73d373c51ed38f2880e30a67da96","url":"tw_stocks/6923.json"},{"revision":"06a19fe9711f8e9262391b93dda45e6f","url":"tw_stocks/6919.json"},{"revision":"3981ce3336f58ba2b4093eabf6150086","url":"tw_stocks/6918.json"},{"revision":"2531c3f3e3464eec8f5790c06e39a3e1","url":"tw_stocks/6916.json"},{"revision":"bb8b84e173f388c85143da63b6d000af","url":"tw_stocks/6914.json"},{"revision":"b2739f2fed6b046e288415f815d453dc","url":"tw_stocks/6909.json"},{"revision":"1d288f6e7eced3b3b9b6ee9ae2f9e789","url":"tw_stocks/6906.json"},{"revision":"66e34ef7bb8b44c2218ce230c60551ba","url":"tw_stocks/6902.json"},{"revision":"b70d5c6ef61a94b598b20003d2841399","url":"tw_stocks/6901.json"},{"revision":"29b1d0a0694aadb37b5c75ef6a5b89dc","url":"tw_stocks/6890.json"},{"revision":"2b4543a25970964c437761a52bf7b5aa","url":"tw_stocks/6887.json"},{"revision":"d4531f710129a3147cbc5be1e2d971e3","url":"tw_stocks/6885.json"},{"revision":"b791389e0b72709effba8c1c22cb15e3","url":"tw_stocks/6873.json"},{"revision":"43c4a8c8c9d5a4dc4e3d340d894d4d33","url":"tw_stocks/6869.json"},{"revision":"63758d5a67ae86e6f040391551d54d58","url":"tw_stocks/6863.json"},{"revision":"8ecf2068ee990432f86ab915d5c63f68","url":"tw_stocks/6862.json"},{"revision":"f0dad00cac12028e55267a4bbe7be799","url":"tw_stocks/6861.json"},{"revision":"9836acf5cb144122f706448228b10f5b","url":"tw_stocks/6838.json"},{"revision":"30d3da7041ca5fad0c64a6e6985f3923","url":"tw_stocks/6835.json"},{"revision":"c5a5e826ff70e0bc93d90d938056c147","url":"tw_stocks/6834.json"},{"revision":"417122f7dd112ecdb7cabed12c33f358","url":"tw_stocks/6831.json"},{"revision":"6db9c6535e8dff2c8606fc4f1aa251cd","url":"tw_stocks/6830.json"},{"revision":"e7e315a371067747da2297a274f67457","url":"tw_stocks/6807.json"},{"revision":"dfa819060f7ddd3ec5b7684bf4c1f0d5","url":"tw_stocks/6806.json"},{"revision":"83a2d1aceba61bc2b825161c7163160e","url":"tw_stocks/6805.json"},{"revision":"59b49dea5e25c851e4997617849cde8b","url":"tw_stocks/6799.json"},{"revision":"d6abfab7e8eac37a3d5d64f473a1889e","url":"tw_stocks/6796.json"},{"revision":"19627c0fbad61ffc551222adf0b1af90","url":"tw_stocks/6794.json"},{"revision":"833d394ae3188aea3541f72d02f86c2f","url":"tw_stocks/6792.json"},{"revision":"d1392632c5cc7154cec0c93162a67356","url":"tw_stocks/6790.json"},{"revision":"a18c045aebd400f4589f308ce62f7197","url":"tw_stocks/6789.json"},{"revision":"bf18e278b5dfbd7e089f3406871d5cea","url":"tw_stocks/6782.json"},{"revision":"c7b1bca4393ac67c1a3caa22333f95f9","url":"tw_stocks/6781.json"},{"revision":"55229cdd9049cd1d692ebe9f6780a3d7","url":"tw_stocks/6776.json"},{"revision":"32fda40409ec8e9079b73cdef0835a7f","url":"tw_stocks/6770.json"},{"revision":"b7c158c02a2f87a6b8e01bb907e12a09","url":"tw_stocks/6768.json"},{"revision":"a917fb1d00c783865a1bd313c7b4d88f","url":"tw_stocks/6757.json"},{"revision":"9c585e834e46e696e7649ab18a003f6f","url":"tw_stocks/6756.json"},{"revision":"4dd0026f96e65555ba0cde2cd55ac6c2","url":"tw_stocks/6754.json"},{"revision":"f892a611a195d11bf5bee18812528baf","url":"tw_stocks/6753.json"},{"revision":"9071c5deceb716f06648d50b0a14d928","url":"tw_stocks/6743.json"},{"revision":"39d7c808ac66770da6981a12f8903b27","url":"tw_stocks/6742.json"},{"revision":"10c86116fd9d7fdf68dc03fab1c6f9f1","url":"tw_stocks/6722.json"},{"revision":"5b05ca25dcab8563d9ed5baa285491dd","url":"tw_stocks/6719.json"},{"revision":"e6158c404b25c8aa83f1eaee092813c4","url":"tw_stocks/6715.json"},{"revision":"cd8feb81c174f7f0eb9a5b485f4506c8","url":"tw_stocks/6706.json"},{"revision":"d6553a23c8046ec8dbac594f16d3e463","url":"tw_stocks/6698.json"},{"revision":"a10798864915f9c29326c39ce897dd4e","url":"tw_stocks/6695.json"},{"revision":"8783bc73c550c230dc323c5801e46bef","url":"tw_stocks/6691.json"},{"revision":"11332065d04117aa011431b256fc701f","url":"tw_stocks/6689.json"},{"revision":"8a5ff2b904e6d54a07c1f06eb45943ee","url":"tw_stocks/6674.json"},{"revision":"f454df5c96443f9edab70eb1f452abba","url":"tw_stocks/6672.json"},{"revision":"abf17ed06b5fbd3f5e1d669acb9345bb","url":"tw_stocks/6671.json"},{"revision":"a176c7ba778d073f9917c05234e61212","url":"tw_stocks/6670.json"},{"revision":"fedc75cd0a8494ad610020232ff1ed9b","url":"tw_stocks/6669.json"},{"revision":"d736b7d1a39b0c91e80eb6102fdf0814","url":"tw_stocks/6668.json"},{"revision":"2d009b781200e7acb63d22415f62d25f","url":"tw_stocks/6666.json"},{"revision":"cd97f66c265dedb47c0be832d1b86f29","url":"tw_stocks/6658.json"},{"revision":"61d0b67d19965bf5fe7dd8d4694b16f0","url":"tw_stocks/6657.json"},{"revision":"06c45262dc978b36c239c027c9942327","url":"tw_stocks/6655.json"},{"revision":"adfba1bfeca439e6500fc6bf2bece116","url":"tw_stocks/6641.json"},{"revision":"6a92fe3abee23cf293dbd63021a86350","url":"tw_stocks/6625.json"},{"revision":"25342eb22162dd0795508499dbc220ed","url":"tw_stocks/6614.json"},{"revision":"7603945a198fd05f1dcd95d1ccdfbcd2","url":"tw_stocks/6606.json"},{"revision":"5a87bd71521556ae2e49ba8f2911e53f","url":"tw_stocks/6605.json"},{"revision":"89a17a10bb908d4a0fa01943de83d6ec","url":"tw_stocks/6598.json"},{"revision":"bc52aace9a7300c4fa759e50c7dd1eaf","url":"tw_stocks/6592.json"},{"revision":"7625c872eb2742f9c251d0f07440b1d8","url":"tw_stocks/6591.json"},{"revision":"400bab109dab7dc6bdeb69e493d76b3c","url":"tw_stocks/6589.json"},{"revision":"e6d442fd2b5d17e9a898853788dd8dd0","url":"tw_stocks/6585.json"},{"revision":"631cebacc469b9103f99f75d2310bda3","url":"tw_stocks/6582.json"},{"revision":"c000e51623d1fdbaa900ec31cfe01ede","url":"tw_stocks/6581.json"},{"revision":"40012710951f34c511093a55fee966ad","url":"tw_stocks/6579.json"},{"revision":"ba41db150a66a1aed4ffdd74261eb8f3","url":"tw_stocks/6573.json"},{"revision":"d1bd5204ded996e36301ede9369f7ef5","url":"tw_stocks/6558.json"},{"revision":"0879af6f576c988c972fea611098c16d","url":"tw_stocks/6552.json"},{"revision":"215ea6952712eb609ddfd50a05f04524","url":"tw_stocks/6550.json"},{"revision":"e9ed8a570c71519d1049d73a22be61ea","url":"tw_stocks/6541.json"},{"revision":"11e34ddd3f7e1426f47fc572ec523853","url":"tw_stocks/6533.json"},{"revision":"7f5a1464892e7c42c44de1e57f7c70f3","url":"tw_stocks/6531.json"},{"revision":"04fa771cf9addb88e97f661055aef4e6","url":"tw_stocks/6526.json"},{"revision":"e5d3d62a6a7612f3278f5de1f702bf4f","url":"tw_stocks/6525.json"},{"revision":"555bf0643f0704cd4fa3d277e999a55b","url":"tw_stocks/6515.json"},{"revision":"5ecca4c6d3994055b0f9da6753d10a8a","url":"tw_stocks/6505.json"},{"revision":"75f17d0764f4471158387803e1f5846d","url":"tw_stocks/6504.json"},{"revision":"a0a4a6368c9e25b8498f2ccc9dac6a4b","url":"tw_stocks/6491.json"},{"revision":"0a4e38079f91cb08fe6115e927033f94","url":"tw_stocks/6477.json"},{"revision":"c09a418df18c7faa7f0495ff5b6d5de6","url":"tw_stocks/6472.json"},{"revision":"f0dda744f9535240ac6d372ddb70398c","url":"tw_stocks/6464.json"},{"revision":"682ee2e496f7744e79fe75d5e6c2c846","url":"tw_stocks/6456.json"},{"revision":"deb38a06e60188886520452a7933c768","url":"tw_stocks/6451.json"},{"revision":"5b6be80b8af2ff9e3f0f67d8f5b4a420","url":"tw_stocks/6449.json"},{"revision":"d91fc8024ae9ee4d2e220a285fa09c5e","url":"tw_stocks/6446.json"},{"revision":"d919866b359e7ccd2be195a2b4481b33","url":"tw_stocks/6443.json"},{"revision":"2c1149632cfa1055c7bae1e5cb32fbfd","url":"tw_stocks/6442.json"},{"revision":"ac0acf4f54bcf7f26539c3e71bcff1f9","url":"tw_stocks/6438.json"},{"revision":"63f8aae6990198d125e730eaeea20b76","url":"tw_stocks/6431.json"},{"revision":"83d1a317c7340244d50c280ce9ad79b7","url":"tw_stocks/6426.json"},{"revision":"6a2f74d5406c3fa0a04bb6f02a82cfc3","url":"tw_stocks/6416.json"},{"revision":"60aacc178dde3885e53a4165d5522b0b","url":"tw_stocks/6415.json"},{"revision":"adbe805502bf221592527d8c7bea8001","url":"tw_stocks/6414.json"},{"revision":"e3493205c6cc68da04145152db3bdfaa","url":"tw_stocks/6412.json"},{"revision":"20bf86fb3632f68cfd4dcd5b474c8262","url":"tw_stocks/6409.json"},{"revision":"769ef3a1d95ab635c93bbeef6a4f3d49","url":"tw_stocks/6405.json"},{"revision":"8aabe99f1332791e578737cdc90c60d5","url":"tw_stocks/6285.json"},{"revision":"14963bab13d546250127ce5ac7afcf3c","url":"tw_stocks/6283.json"},{"revision":"9a9b09045c5eb42f06d815fdfd8e31ab","url":"tw_stocks/6282.json"},{"revision":"044de45b12a642085676b092e5506b7b","url":"tw_stocks/6281.json"},{"revision":"bf72283828c5952b56f17c6146320048","url":"tw_stocks/6278.json"},{"revision":"b42301a28d2ca05f20c2e420a700cb31","url":"tw_stocks/6277.json"},{"revision":"0e9fdf7c62f4ac964db3fec89016bc91","url":"tw_stocks/6272.json"},{"revision":"25588c49bd1cf5ec547348115416502e","url":"tw_stocks/6271.json"},{"revision":"68afc33196ff75f421b28b6e2858cb0c","url":"tw_stocks/6269.json"},{"revision":"9c0ec692774dfcf498c8121256ba22fb","url":"tw_stocks/6257.json"},{"revision":"ba59b1a4223b4a31f0dbe58b787cc9a1","url":"tw_stocks/6243.json"},{"revision":"1b61105f3099e439801445e72010d858","url":"tw_stocks/6239.json"},{"revision":"ee22989f89039db163aa300ae1be778c","url":"tw_stocks/6235.json"},{"revision":"b4821e74afbd5ba2a079d9c53e29c9eb","url":"tw_stocks/6230.json"},{"revision":"709f636e79ac7d835532f4340a7f1cc5","url":"tw_stocks/6226.json"},{"revision":"6f63e6d331ca22d728172494e3892d6f","url":"tw_stocks/6225.json"},{"revision":"87a9aaff9678d5dcaf31deb903e2011a","url":"tw_stocks/6224.json"},{"revision":"abf2acb3ec10aa1b890495be8f981f95","url":"tw_stocks/6216.json"},{"revision":"296fc759bb6520b952b5a7b67ed0bf48","url":"tw_stocks/6215.json"},{"revision":"f357bd21e30e82e9f334ee4b244dbd0e","url":"tw_stocks/6214.json"},{"revision":"85e5bd7176da1a763e4f5c773d22ab29","url":"tw_stocks/6213.json"},{"revision":"bab4ac5d713375b9878a02c9ad03de82","url":"tw_stocks/6209.json"},{"revision":"ee3948243e0d2e6b4699bd31fc05e296","url":"tw_stocks/6206.json"},{"revision":"caed59a7b3de627f7c1ca149b2da98c0","url":"tw_stocks/6205.json"},{"revision":"3c36812f7df7e1d15ec8937789b60e83","url":"tw_stocks/6202.json"},{"revision":"0469da47730beef7d83a14724045ad65","url":"tw_stocks/6201.json"},{"revision":"2ce5789fda7284be91cf604833943e8b","url":"tw_stocks/6197.json"},{"revision":"765ce07ec32e50bd5221f04515ddb63e","url":"tw_stocks/6196.json"},{"revision":"94acc29fc37d349bb0681d383478cc08","url":"tw_stocks/6192.json"},{"revision":"cdeba545332b1fe681343c72c5a5ee97","url":"tw_stocks/6191.json"},{"revision":"03cd4d65a7582a025bf23e47fcf7b6df","url":"tw_stocks/6189.json"},{"revision":"48b7bb9e96c29ce5d095a9c528eda695","url":"tw_stocks/6184.json"},{"revision":"574dd40db8dd3742ec0a42fd675cbcc3","url":"tw_stocks/6183.json"},{"revision":"1afbe7f99d24780e505f4b478a6b3113","url":"tw_stocks/6177.json"},{"revision":"b3813bf25f1a560d8bf60eeab20ee823","url":"tw_stocks/6176.json"},{"revision":"5732e353a073b1b7ce333f18e61a9c3c","url":"tw_stocks/6168.json"},{"revision":"64625c3e806c6951b7bd7f1831eb05ac","url":"tw_stocks/6166.json"},{"revision":"813525bf97ff33da6e32d84dcdd17b32","url":"tw_stocks/6165.json"},{"revision":"78bfdcb9b9d3b1d03dc80e9075b9357a","url":"tw_stocks/6164.json"},{"revision":"221c6cadf82dc7ffb24ca146897ad7a5","url":"tw_stocks/6155.json"},{"revision":"74c6d645f24fc75559e29bd89321e8e8","url":"tw_stocks/6153.json"},{"revision":"54a9c01a352252bcbeaff7fbd88afc02","url":"tw_stocks/6152.json"},{"revision":"777e3c2d75fcbaae6b6db13ba5a7c254","url":"tw_stocks/6142.json"},{"revision":"443fa5eb5541dcb27712e7d8ab8cdbba","url":"tw_stocks/6141.json"},{"revision":"6759fc320dc33deb36abeed548dc1d35","url":"tw_stocks/6139.json"},{"revision":"ca40eb333c2acd7f95ce6642f96f25c6","url":"tw_stocks/6136.json"},{"revision":"c35b8f8e8dd426a30b6834adc0bd3984","url":"tw_stocks/6133.json"},{"revision":"0a3b54fbcfb9880597ab68475c5f3241","url":"tw_stocks/6128.json"},{"revision":"b1dca94a1f4ebc3f5802260ac19699f0","url":"tw_stocks/6120.json"},{"revision":"c183747eb56e2c2418d6a8d65f183151","url":"tw_stocks/6117.json"},{"revision":"16cadb44a65a9d65ac991d603758ac62","url":"tw_stocks/6116.json"},{"revision":"ad1293b834929cb5f543832d93401101","url":"tw_stocks/6115.json"},{"revision":"fb06aaebdb296d2479da9a6bd1487bc2","url":"tw_stocks/6112.json"},{"revision":"c71e93fa6e879c86c85c8774189e171d","url":"tw_stocks/6108.json"},{"revision":"4561a75b36bf4db3f8681e42957fbac5","url":"tw_stocks/6024.json"},{"revision":"59ace17288d00e1d4704229691ba71a2","url":"tw_stocks/6005.json"},{"revision":"68b905af37eeae89a6a299b137b1892d","url":"tw_stocks/5907.json"},{"revision":"8471619e693ae10ea20814986a1bf6cb","url":"tw_stocks/5906.json"},{"revision":"f442c90ab78f31e6017fa7baeaef05af","url":"tw_stocks/5880.json"},{"revision":"10cf9e97b88fa3ccdc60ab9eee65c5d0","url":"tw_stocks/5876.json"},{"revision":"f7dd83290ad0ea843a7fbf20bb0abec6","url":"tw_stocks/5871.json"},{"revision":"d80c749e83c86d8286da0b6bec714624","url":"tw_stocks/5706.json"},{"revision":"44659e42c11463e8ea20d6555887cbfc","url":"tw_stocks/5608.json"},{"revision":"250ef7cf14147648e4d9317eba8df595","url":"tw_stocks/5607.json"},{"revision":"2029778806f262c29e5985a400056c91","url":"tw_stocks/5546.json"},{"revision":"6467c8b25746ac37d79f39e3e32790b9","url":"tw_stocks/5538.json"},{"revision":"1e461098df9eacf03f5fae44ea46a8b4","url":"tw_stocks/5534.json"},{"revision":"1bdfc5dfffd30aaf56f96977b7472040","url":"tw_stocks/5533.json"},{"revision":"a9a030cbedb52fa21295dd910e95ba65","url":"tw_stocks/5531.json"},{"revision":"54e04354446ad4c93bc588b0463e3fa2","url":"tw_stocks/5525.json"},{"revision":"6ba81fef1c9bdd4a952a76a57f8b1e74","url":"tw_stocks/5522.json"},{"revision":"b918355a6794a6966d863312449286a8","url":"tw_stocks/5521.json"},{"revision":"35327da346e7ed6378e7232965bf59ac","url":"tw_stocks/5519.json"},{"revision":"353f89d674a0be8614f2eb4350d938c6","url":"tw_stocks/5515.json"},{"revision":"afbab77553658ad4d495fd1dce9e47f6","url":"tw_stocks/5484.json"},{"revision":"35c053eabf91e5c24ff117ead93d7916","url":"tw_stocks/5471.json"},{"revision":"ecdfbe59f59ff784b5ee992cf02c224b","url":"tw_stocks/5469.json"},{"revision":"cef44bd2ce90deeb0db177366e76fd09","url":"tw_stocks/5434.json"},{"revision":"d48937fca6b137edf8ba00a3f75106de","url":"tw_stocks/5388.json"},{"revision":"a8d191b185d0b709344a74deb845e683","url":"tw_stocks/5306.json"},{"revision":"b7d8ea4af7c38ea47881fcc584b0ea22","url":"tw_stocks/5292.json"},{"revision":"1a6a42ea3f41ee6105d4ed8091fd286b","url":"tw_stocks/5288.json"},{"revision":"a87e11ca0d303065f1292cb241920ec7","url":"tw_stocks/5285.json"},{"revision":"57b67c4cb6c714e3125c94d1ec376e37","url":"tw_stocks/5284.json"},{"revision":"4073365cff3fb7bf86cd99d741caf511","url":"tw_stocks/5283.json"},{"revision":"3d4a244fc07d392214aaf23bbdac7d2a","url":"tw_stocks/5269.json"},{"revision":"405991e922bc214eebf131bf8a0202ca","url":"tw_stocks/5258.json"},{"revision":"772e8b42c465ab084957b263862e924e","url":"tw_stocks/5244.json"},{"revision":"457aa5205e85b303e6bf12f78313b558","url":"tw_stocks/5243.json"},{"revision":"b7151cb3c883a697cfe89acb955ea57b","url":"tw_stocks/5234.json"},{"revision":"42dcb8cf1c4874f2761ac2d1c063d8e0","url":"tw_stocks/5225.json"},{"revision":"6efb1e6e8cd88c27e6400a5dfb2724e8","url":"tw_stocks/5222.json"},{"revision":"14c0c16c807b877ed524751879470551","url":"tw_stocks/5215.json"},{"revision":"86d9890a787676224fa4fd730007ee8e","url":"tw_stocks/5203.json"},{"revision":"4c419a6cde48bd602b82c35d14fd40a7","url":"tw_stocks/5007.json"},{"revision":"88515b7cbea8b110abba5eac607ae485","url":"tw_stocks/4999.json"},{"revision":"c789cc8fa3c521be16576a31f724cd60","url":"tw_stocks/4994.json"},{"revision":"a81709969484831f753d0b4e1c9b4d1a","url":"tw_stocks/4989.json"},{"revision":"d8e59a6a3ae7512f63197a140b91f309","url":"tw_stocks/4977.json"},{"revision":"a6369e58115f9dc9c180de06ac30c2b1","url":"tw_stocks/4976.json"},{"revision":"819591559911c6dd01f096a349cae851","url":"tw_stocks/4968.json"},{"revision":"2cdc9d7d5936363dbc23578355f0c6ba","url":"tw_stocks/4967.json"},{"revision":"9e8055a92bd559c18a6ad18c468f0e52","url":"tw_stocks/4961.json"},{"revision":"1cd7904cf49fefe8a7a19eb2eddbcc90","url":"tw_stocks/4960.json"},{"revision":"2c6efd2c24851a3ddf45409796a441fe","url":"tw_stocks/4958.json"},{"revision":"2c3e261efd3e944beac339495e34a96b","url":"tw_stocks/4956.json"},{"revision":"9bdb754b05cbcbec0bc182a823e8bb1d","url":"tw_stocks/4952.json"},{"revision":"432946a2d3c773f89f3d0b82fc689a11","url":"tw_stocks/4949.json"},{"revision":"763bf059295f783448db9a71b95d75a2","url":"tw_stocks/4943.json"},{"revision":"883942c63e220c5776d19e2189a1b35b","url":"tw_stocks/4942.json"},{"revision":"d0898f8b99e3dd2c1ffba4b7b317227e","url":"tw_stocks/4938.json"},{"revision":"0cf5f82fbe8e5b50da6a4c23e4c9bf4e","url":"tw_stocks/4935.json"},{"revision":"4d3a49080b985a25f5be225151384122","url":"tw_stocks/4934.json"},{"revision":"0bcbffc2f42cd4b39a8f3fd54968d8c7","url":"tw_stocks/4930.json"},{"revision":"c06773407f4dbb408200b19764387b3d","url":"tw_stocks/4927.json"},{"revision":"68e9bb6444bf265c0f7d69fa2670389c","url":"tw_stocks/4919.json"},{"revision":"e2bbc88e3d5257a9ff1194eb029cc4f4","url":"tw_stocks/4916.json"},{"revision":"b46ee798dc196506865389705b55ce64","url":"tw_stocks/4915.json"},{"revision":"d8e674b4df7f73914c3c3f3e5e87bee6","url":"tw_stocks/4912.json"},{"revision":"0141980ba10c2092276d0392ebd3ba07","url":"tw_stocks/4906.json"},{"revision":"99810a7df58513f14229f76a8cf15e86","url":"tw_stocks/4904.json"},{"revision":"bb55a865dd1c3a768e8502bbb500335e","url":"tw_stocks/4807.json"},{"revision":"bd618032ad3303014fe5feb3002fa252","url":"tw_stocks/4771.json"},{"revision":"ee6cc3c8b13c410e3f37e0d376f026c8","url":"tw_stocks/4770.json"},{"revision":"52cd2d27da714f63e1881b05ee690262","url":"tw_stocks/4766.json"},{"revision":"c75481dc0fbccbaa0135e66e4a47381c","url":"tw_stocks/4764.json"},{"revision":"02be6080e3e83f9b3d094cb19e9ec620","url":"tw_stocks/4763.json"},{"revision":"0aa9d70cf969ef0bf2ca1b8dac026345","url":"tw_stocks/4755.json"},{"revision":"aab6ac32571e86dfc41574684de9a66a","url":"tw_stocks/4746.json"},{"revision":"fec82bc988ce2a966f898141a42468a2","url":"tw_stocks/4739.json"},{"revision":"81b07f1fecfe41e3333286157b928adb","url":"tw_stocks/4737.json"},{"revision":"e33da0b476d88b7d227e8623526ad901","url":"tw_stocks/4736.json"},{"revision":"0d07a5a258c1cf3c1d3baa01a3619fc2","url":"tw_stocks/4722.json"},{"revision":"9663af5593c920ea74b787041002ba8e","url":"tw_stocks/4720.json"},{"revision":"856c4832a0a105becc83bc0977a86fa7","url":"tw_stocks/4588.json"},{"revision":"9b3fa4605344b6ea9e658f582ff406f5","url":"tw_stocks/4585.json"},{"revision":"008a631fb70ca45d97044741edba4d5f","url":"tw_stocks/4583.json"},{"revision":"6c34d88d3d3279a6faef155e9fb4c5fd","url":"tw_stocks/4581.json"},{"revision":"c97c1e83cfee81dcc77b227c139e0c1a","url":"tw_stocks/4576.json"},{"revision":"2975212b8c096b7e96bb15b3eb13227f","url":"tw_stocks/4572.json"},{"revision":"31a3fe15e93f8f8d5c8b6db920cef686","url":"tw_stocks/4571.json"},{"revision":"d188b1e435cf8caf7db6fe4368200f07","url":"tw_stocks/4569.json"},{"revision":"84fad1a2a1b3d9a0928cfe5253271e7e","url":"tw_stocks/4566.json"},{"revision":"6e49c79ba4b11c868ad1ee78156b0154","url":"tw_stocks/4564.json"},{"revision":"8eb80d9f00873eb750b0a26d7a442fe4","url":"tw_stocks/4562.json"},{"revision":"f859403afa7eae2657c1b2d05ca4bc4c","url":"tw_stocks/4560.json"},{"revision":"65656244a03786545590d28802480dd6","url":"tw_stocks/4557.json"},{"revision":"98f375bc1130b83ffb61202d4fea74bc","url":"tw_stocks/4555.json"},{"revision":"c56903b0c973eed9bb60f61ca2be8f1e","url":"tw_stocks/4552.json"},{"revision":"62a45517300bc3246e86b490a7490fca","url":"tw_stocks/4551.json"},{"revision":"bfa673678dde2d1a1bbb11cdc8622eec","url":"tw_stocks/4545.json"},{"revision":"84bed1ecc2de59e6d73e0d04ee56f471","url":"tw_stocks/4540.json"},{"revision":"babbff79ee78b7d07b651c4e3cccf1c0","url":"tw_stocks/4536.json"},{"revision":"53455617bc55741f727113cd98b92e02","url":"tw_stocks/4532.json"},{"revision":"747959f8d35cee5e629afc999f7bd3b1","url":"tw_stocks/4526.json"},{"revision":"4b42fba2b94added33714d9b43c70df0","url":"tw_stocks/4441.json"},{"revision":"722e8b368027a4ade544d131bd0b4a3b","url":"tw_stocks/4440.json"},{"revision":"6c1e13336ef1dbff8ce54eec984249ef","url":"tw_stocks/4439.json"},{"revision":"33bcc5dedb29375e215371b75d0a337e","url":"tw_stocks/4438.json"},{"revision":"dbd8853f9015eed731850383793f1940","url":"tw_stocks/4426.json"},{"revision":"8d31127da518ba1523fcbf152b027e32","url":"tw_stocks/4414.json"},{"revision":"cff08be22366c5ffaf83725dd821e90e","url":"tw_stocks/4306.json"},{"revision":"f6c39f79b0c0fed0ea92ca18408e7729","url":"tw_stocks/4190.json"},{"revision":"dd99b7c4f9f3252ab2be48d5aa420e37","url":"tw_stocks/4178.json"},{"revision":"faaced753577c133fcf7b3763633741d","url":"tw_stocks/4169.json"},{"revision":"3b4a92d3b5bee037ecdffe9e7075fc85","url":"tw_stocks/4164.json"},{"revision":"867600ffd1bd3ea4d2c2817def01505e","url":"tw_stocks/4155.json"},{"revision":"1b8d3b150066823539c9dfcd263246be","url":"tw_stocks/4148.json"},{"revision":"85bb225cb5bf9845d283d15700d1b07f","url":"tw_stocks/4142.json"},{"revision":"c68a3618c670c333167bb82da79121c7","url":"tw_stocks/4137.json"},{"revision":"7a680121c48648a3dbb9a8b3f673c3e0","url":"tw_stocks/4133.json"},{"revision":"ed5e784bc60e15b4f998f00e149c6c83","url":"tw_stocks/4119.json"},{"revision":"a3fbdd57c7fdf7a37744392e18668100","url":"tw_stocks/4108.json"},{"revision":"f126961052c1d381eb1a76ba792907be","url":"tw_stocks/4106.json"},{"revision":"28ed34fd81de9ee76729896afa5d5e9d","url":"tw_stocks/4104.json"},{"revision":"593cb1cb46deb0d3757ed0a08956201b","url":"tw_stocks/3717.json"},{"revision":"af6c4e65612b85b54f8a1e54135b0dc3","url":"tw_stocks/3716.json"},{"revision":"4be13ca71dee97f3cdefe65b9ae035bf","url":"tw_stocks/3715.json"},{"revision":"e2ef37234b02e3206837ce73b3b4abfb","url":"tw_stocks/3714.json"},{"revision":"5d7292429cc7c741bf8d680580e23185","url":"tw_stocks/3712.json"},{"revision":"a1cc4ac5cccb727cb07d70aee7778baa","url":"tw_stocks/3711.json"},{"revision":"314b2079cc8254aa67335e90f571d74a","url":"tw_stocks/3708.json"},{"revision":"849d3343fed5a2c2488e6053c4d74618","url":"tw_stocks/3706.json"},{"revision":"dc042180ecb26991888ecb6575cb8803","url":"tw_stocks/3705.json"},{"revision":"475d6649412d9f4685d48f57dc14fd00","url":"tw_stocks/3704.json"},{"revision":"495bc91a1db5a45e21d8ae4b7d2daba8","url":"tw_stocks/3703.json"},{"revision":"4728b4e62255b86434433665ea7f8d94","url":"tw_stocks/3702.json"},{"revision":"b58428de859666f97ef26755c2bd4ae4","url":"tw_stocks/3701.json"},{"revision":"bb0374094f657fedca1ff9beacef0545","url":"tw_stocks/3694.json"},{"revision":"65b2db0131be5faf2bf46fd6f62ea6a9","url":"tw_stocks/3686.json"},{"revision":"3988a928e408c1537c0fa5777c47ff18","url":"tw_stocks/3679.json"},{"revision":"9bbd7850aea779e25968d3fbae2633ff","url":"tw_stocks/3673.json"},{"revision":"7c9774f7f3814310d9a61336edd37aa5","url":"tw_stocks/3669.json"},{"revision":"4bf75c8725936a270b2067fdebdf956d","url":"tw_stocks/3665.json"},{"revision":"2790bb75d2d8b418a4e46bf645ced293","url":"tw_stocks/3661.json"},{"revision":"7f980bbb44b91173a7313765a220eafe","url":"tw_stocks/3653.json"},{"revision":"838432b339c921d9c46269ba542908f8","url":"tw_stocks/3652.json"},{"revision":"7b739964236ff2e200567eaeed23b021","url":"tw_stocks/3645.json"},{"revision":"f05e1b1b25a6fc3a7197a7b918677b01","url":"tw_stocks/3622.json"},{"revision":"57c9ce10b91e9f4c9a24bcdcb3325d07","url":"tw_stocks/3617.json"},{"revision":"4e0500bba94e217d2d7c985f390f8613","url":"tw_stocks/3607.json"},{"revision":"f1fa6d573899bc3397aacedefa9326ec","url":"tw_stocks/3605.json"},{"revision":"bab6cb6418125eefc5d3e213ca192be9","url":"tw_stocks/3596.json"},{"revision":"ba852046cf3ffb25d7accb1f460b49c5","url":"tw_stocks/3593.json"},{"revision":"e58064adbb95d8a6248af40531224157","url":"tw_stocks/3592.json"},{"revision":"099f5560dd7dc312e19f7cbca75dda02","url":"tw_stocks/3591.json"},{"revision":"d6580e982356fb889cd4e5c2fc89a714","url":"tw_stocks/3588.json"},{"revision":"b83b600694359ae9767ceaba8a72258d","url":"tw_stocks/3583.json"},{"revision":"2ff3e946b57f2ff1fff23416959261c4","url":"tw_stocks/3576.json"},{"revision":"4843f2e8246e4d80e8bfa8843c5990c4","url":"tw_stocks/3563.json"},{"revision":"c4abbdf17821a7587bda2f1cb6ad1b57","url":"tw_stocks/3557.json"},{"revision":"8611cf7105d844078a7de245b3344081","url":"tw_stocks/3550.json"},{"revision":"fe067fc8361dc9face925faf87c5605d","url":"tw_stocks/3545.json"},{"revision":"b97f1c3731b20a47f95f6f899cdd7582","url":"tw_stocks/3543.json"},{"revision":"a15362c3ba6906e6738785c7c1067029","url":"tw_stocks/3535.json"},{"revision":"5be6ec7ae7ad30e8418c8c5c47040b9a","url":"tw_stocks/3533.json"},{"revision":"27f8593a18dbc57d7c871ead10a1ae9d","url":"tw_stocks/3532.json"},{"revision":"f3afca18bf47878ab998136dd1db3e95","url":"tw_stocks/3530.json"},{"revision":"e5bcc73e57722b340b5011557265c638","url":"tw_stocks/3528.json"},{"revision":"c998baf4cde778cd3ef1dced264d0e17","url":"tw_stocks/3518.json"},{"revision":"5aacdde41a9e3ab60465665c17083d35","url":"tw_stocks/3515.json"},{"revision":"88a2171d05a93015b7f3845e6656b0da","url":"tw_stocks/3504.json"},{"revision":"2720bcfce6819be5430dade7c815f708","url":"tw_stocks/3501.json"},{"revision":"583c27ad201baa0b9edf3c5124c705e0","url":"tw_stocks/3494.json"},{"revision":"94048ea4fff148e69e71f385bc6c76e4","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"1733d8f3bf8cae9f4451637b84d609d5","url":"tw_stocks/3450.json"},{"revision":"060b93fdbb38937d0e6c4a04e7dc3cda","url":"tw_stocks/3447.json"},{"revision":"e1efa9c700d9bcb96083719ac109f11b","url":"tw_stocks/3443.json"},{"revision":"d521e9dbcc91deb540b56532dc5fe019","url":"tw_stocks/3437.json"},{"revision":"a9dfda44b45b39b51e581235cd8a1890","url":"tw_stocks/3432.json"},{"revision":"b8e4671bf56b4623a017672b0090a213","url":"tw_stocks/3419.json"},{"revision":"791a5ee2fe637b1576a786f6cd62d8a2","url":"tw_stocks/3416.json"},{"revision":"e5f63b0e790b26cd209ff383799af36c","url":"tw_stocks/3413.json"},{"revision":"bbe81f08389436de56bc3d4dd0c3d9ff","url":"tw_stocks/3406.json"},{"revision":"78368d669823a35fbd065cf09f02d60c","url":"tw_stocks/3380.json"},{"revision":"124d50d4f97c01b81e368679cb3922fc","url":"tw_stocks/3376.json"},{"revision":"9904dec1690012d65df80345a418bf0f","url":"tw_stocks/3356.json"},{"revision":"9be6cfbe1ac2fbf491bb037b9675719d","url":"tw_stocks/3346.json"},{"revision":"57a4375c180aa33c448667a8659b68cc","url":"tw_stocks/3338.json"},{"revision":"763b8ac23aab47491020e2538e303512","url":"tw_stocks/3321.json"},{"revision":"14ec760c74f4b357dbb778ee897afac4","url":"tw_stocks/3312.json"},{"revision":"61e3789179f4f31ad18e02e780f46c95","url":"tw_stocks/3311.json"},{"revision":"13c8d343487aee3e2799c4ecd5f75d2e","url":"tw_stocks/3308.json"},{"revision":"2ba383e4dd0e8f42b5be5a836372e432","url":"tw_stocks/3305.json"},{"revision":"4dae9a8fb3c60d56812662ded29a2253","url":"tw_stocks/3296.json"},{"revision":"570d55c2e229944a88f947ee9a08c321","url":"tw_stocks/3266.json"},{"revision":"1e9cdb4551aab85bbc3b61c69ec2dd90","url":"tw_stocks/3257.json"},{"revision":"96f021e45b54d8d4ae8a12e113183322","url":"tw_stocks/3231.json"},{"revision":"e71ac7d589493d7484e20b26a14100a5","url":"tw_stocks/3229.json"},{"revision":"b7f73c53932ff7093fd7535633ef1d23","url":"tw_stocks/3209.json"},{"revision":"1591e0d31d52c7a032f9dbd049bb3e2d","url":"tw_stocks/3189.json"},{"revision":"491d852ae4c8717a89047417571c7e9e","url":"tw_stocks/3168.json"},{"revision":"08005feb8fed044f7bc5b44ff36e00e2","url":"tw_stocks/3167.json"},{"revision":"0af4d7a23fa5dd963ea16ec92b090eee","url":"tw_stocks/3164.json"},{"revision":"6e96f12dd27db4df4cf1a40d5253aaea","url":"tw_stocks/3149.json"},{"revision":"57840ea1e824ea18d71ae1a38c0fd2e7","url":"tw_stocks/3138.json"},{"revision":"c7e1efbbae84dd26ef743e508c04c9e8","url":"tw_stocks/3135.json"},{"revision":"4b4b5179d5f004d0f18af115abcb0af8","url":"tw_stocks/3130.json"},{"revision":"802fa0b940a141fe60ede48e8e4fb789","url":"tw_stocks/3094.json"},{"revision":"cd19aede8c1171d7b0855991a4f73f3b","url":"tw_stocks/3092.json"},{"revision":"f38438b3b8061a6a78bea106fbc7b244","url":"tw_stocks/3090.json"},{"revision":"34fdbe30ec0f2b9cc5bf3d16e916be01","url":"tw_stocks/3062.json"},{"revision":"11fb50bd70599ea02f3d8f7d18f3a96d","url":"tw_stocks/3060.json"},{"revision":"e5ba11345f7aac6ab3f25e5f111a5de4","url":"tw_stocks/3059.json"},{"revision":"66a6f3a19da7eced800628332d768eb6","url":"tw_stocks/3058.json"},{"revision":"c354bf5dfe74bfdb731292eff54149c6","url":"tw_stocks/3057.json"},{"revision":"db9024fdcdd022af7eddbb9a59798879","url":"tw_stocks/3056.json"},{"revision":"0e8f9188936b1cf6d3dbfdc5e6106924","url":"tw_stocks/3055.json"},{"revision":"e830427f52f5500040d3853b91669002","url":"tw_stocks/3054.json"},{"revision":"54734543b91fec8108f3e6545f3e3903","url":"tw_stocks/3052.json"},{"revision":"9404ff819a234bf9b44a1ea5311470a7","url":"tw_stocks/3051.json"},{"revision":"8ec4a03cc6318c6ac40b3035b60120b5","url":"tw_stocks/3050.json"},{"revision":"08ac44714ffa38e87574a237d039e839","url":"tw_stocks/3049.json"},{"revision":"a231724972c27d352ce871cf93512d56","url":"tw_stocks/3048.json"},{"revision":"0f8fd390fe9ec67d75b2839e2cc8fbcb","url":"tw_stocks/3047.json"},{"revision":"a799c7453680221f5acfa27ff52598f4","url":"tw_stocks/3046.json"},{"revision":"94a0a909d7041c5548420fd1021aaa17","url":"tw_stocks/3045.json"},{"revision":"0c2477a0b168e6d33dfc4a77c4220f49","url":"tw_stocks/3044.json"},{"revision":"cbce57eb65eb3e187668209ab181ca70","url":"tw_stocks/3043.json"},{"revision":"e41f32a488c3a05809878b61f0d4b889","url":"tw_stocks/3042.json"},{"revision":"40210801eac255bbc58ec1fcf2097c78","url":"tw_stocks/3041.json"},{"revision":"7ff83427c727e418160f138759b1a9d2","url":"tw_stocks/3040.json"},{"revision":"0983048c4e73e49b1fa891a378d3c1a8","url":"tw_stocks/3038.json"},{"revision":"62306b87342315d897b32fd66caeb62b","url":"tw_stocks/3037.json"},{"revision":"c557d746d28101580ea46ba8c068e350","url":"tw_stocks/3036.json"},{"revision":"a5da862b08cb870dbd46197b5ad416de","url":"tw_stocks/3035.json"},{"revision":"abe57d18ca9f60a45b057de4d978dba5","url":"tw_stocks/3034.json"},{"revision":"5b06437ee6795e171bd3ef68c0087cda","url":"tw_stocks/3033.json"},{"revision":"d67a87c251375b94febdbd6e9291ee24","url":"tw_stocks/3032.json"},{"revision":"ca4344bbf768be3823dbaf44153f6e4f","url":"tw_stocks/3031.json"},{"revision":"a2cb6d6bc54563766ced5a5c9d15a1a2","url":"tw_stocks/3030.json"},{"revision":"341bdbe975ca71722b0d3d6aed4088d4","url":"tw_stocks/3029.json"},{"revision":"bbe6640bbc207964872636458fef69ec","url":"tw_stocks/3028.json"},{"revision":"4675a512dc387eaafe72e9bc9205a148","url":"tw_stocks/3027.json"},{"revision":"56d2523471de0f7dd6e2418c73fe03f1","url":"tw_stocks/3026.json"},{"revision":"4f2024f61db2c880f949870fc131b93b","url":"tw_stocks/3025.json"},{"revision":"2ac9358efebb7ec6922030037fda3f44","url":"tw_stocks/3024.json"},{"revision":"4da49a18687724323f078055b546476b","url":"tw_stocks/3023.json"},{"revision":"6a410c34a76bada14129f7ee905942e3","url":"tw_stocks/3022.json"},{"revision":"73be7fed35c0602b60ac50e953d5868f","url":"tw_stocks/3021.json"},{"revision":"4b30861efd0cbdd5ac7df4b4b5781fa7","url":"tw_stocks/3019.json"},{"revision":"8faa6af3f788c792d027c7ad54de367b","url":"tw_stocks/3018.json"},{"revision":"e0799359bf87d83404c6b3c0f866452d","url":"tw_stocks/3017.json"},{"revision":"ba274c706baa89b89efd335ec5b46744","url":"tw_stocks/3016.json"},{"revision":"26fa142af59c1056720285f180bf84eb","url":"tw_stocks/3015.json"},{"revision":"b4dd750788fb792dc5616f677c0c0546","url":"tw_stocks/3014.json"},{"revision":"57bdae4eb2ba0930f038d950e34a3d04","url":"tw_stocks/3013.json"},{"revision":"d42e786d1dfe4932154c9b442a193a1b","url":"tw_stocks/3011.json"},{"revision":"46032f89ddc79a89fb2b1444b20c42bf","url":"tw_stocks/3010.json"},{"revision":"228e5a740276da955614502238bdd9f1","url":"tw_stocks/3008.json"},{"revision":"c88bdb87d5ce8a1b4d54c0842acf4a2a","url":"tw_stocks/3006.json"},{"revision":"be2dcb52dcaca938c20f2bd214ab605a","url":"tw_stocks/3005.json"},{"revision":"3cadd915d55cfef4aee9436e351565fd","url":"tw_stocks/3004.json"},{"revision":"b964deb33f7c645699e2f8f144828709","url":"tw_stocks/3003.json"},{"revision":"ec851dd56b03489b840231fe5899ab99","url":"tw_stocks/3002.json"},{"revision":"c67d6a1dd21013b74d081fba00c33e63","url":"tw_stocks/2945.json"},{"revision":"08bef25cfd8b3e659a598bbe07dbf6b2","url":"tw_stocks/2939.json"},{"revision":"6e543c3dd184d96a59a5981babbb3b91","url":"tw_stocks/2929.json"},{"revision":"d1432737acb814a0d0ce7029a3c4186b","url":"tw_stocks/2923.json"},{"revision":"50f42ba58b533dbe98d9d763a56af584","url":"tw_stocks/2915.json"},{"revision":"c35eace1fc0584d5b46abb490b31af3d","url":"tw_stocks/2913.json"},{"revision":"92ba9d32aaea9960da99febbbd17411c","url":"tw_stocks/2912.json"},{"revision":"a7e8060da630b9d0336e9db14215b398","url":"tw_stocks/2911.json"},{"revision":"567feb2ba8b7841acfa3846b56f4dc54","url":"tw_stocks/2910.json"},{"revision":"cce116a14df4b0cc5efb35a16c893ff0","url":"tw_stocks/2908.json"},{"revision":"5c44e1ae8f5b5958b385c6a0a9284e63","url":"tw_stocks/2906.json"},{"revision":"14669a092dca91f5ca5b234e39170fab","url":"tw_stocks/2905.json"},{"revision":"379b49b42ac3be1c7e2ab97d1b15e48a","url":"tw_stocks/2904.json"},{"revision":"a64013b604db35ec56cd812a270969ed","url":"tw_stocks/2903.json"},{"revision":"e2f8f63cac745d9c31989136cdba1b04","url":"tw_stocks/2901.json"},{"revision":"1ee66a842772c5302dc94c3666866655","url":"tw_stocks/2897.json"},{"revision":"572d8d19eb255920a03be8a67401aac7","url":"tw_stocks/2892.json"},{"revision":"48ed5892f7c408f6510715fd312f33ce","url":"tw_stocks/2891.json"},{"revision":"6b1e2b00fd27f6835506922541e28957","url":"tw_stocks/2890.json"},{"revision":"372b918dd364cbba9bf2ff6f3f39faed","url":"tw_stocks/2889.json"},{"revision":"298d5e4f58b1f7ad59c1329e56d250b1","url":"tw_stocks/2887.json"},{"revision":"e292f36e87560006934ec9f396740ca2","url":"tw_stocks/2886.json"},{"revision":"b38d271bce6673f2452f7bd4490afded","url":"tw_stocks/2885.json"},{"revision":"b8432090e0e251d1c1662b3d12352922","url":"tw_stocks/2884.json"},{"revision":"e2b89e24926cfe226f319f560fc06d2a","url":"tw_stocks/2883.json"},{"revision":"ce3d770da05992171775f78ce7a04546","url":"tw_stocks/2882.json"},{"revision":"6781271f1b3859e01d189b5a817f1d15","url":"tw_stocks/2881.json"},{"revision":"006a0a7c863bde21c31050fbf421096f","url":"tw_stocks/2880.json"},{"revision":"d92e9c7f771c44c80cef351133e52821","url":"tw_stocks/2867.json"},{"revision":"5bf321c73c9e9e53e0e026e113742b80","url":"tw_stocks/2855.json"},{"revision":"8d8d1e39c52da2eb9fc490da0ed9c0aa","url":"tw_stocks/2852.json"},{"revision":"d34469a6895cf39a322a92e5bbd069e2","url":"tw_stocks/2851.json"},{"revision":"aaf3b319834f8803915f5df806fdc11d","url":"tw_stocks/2850.json"},{"revision":"9c1f47b90e97f8e7bb535c0727a3cbf0","url":"tw_stocks/2849.json"},{"revision":"0e6738377cd26f80d402687bcad08761","url":"tw_stocks/2845.json"},{"revision":"f32504f26d32dafd48d86977f144a2de","url":"tw_stocks/2838.json"},{"revision":"3a2d0baef7eb22031fdfd8acca15dff1","url":"tw_stocks/2836.json"},{"revision":"c11c01a066c34a7b3c44e43106f11c6b","url":"tw_stocks/2834.json"},{"revision":"6ca159487cdb22a1d5742ad2032a024e","url":"tw_stocks/2832.json"},{"revision":"31311827e4b2efc442c2db8b65f4f77f","url":"tw_stocks/2820.json"},{"revision":"a195abddfc31fbd76268f4815a2aa5cd","url":"tw_stocks/2816.json"},{"revision":"76cab0a652fe59a8b9290f579fef2241","url":"tw_stocks/2812.json"},{"revision":"5677cedefa8b653d0259ec1533fac54e","url":"tw_stocks/2801.json"},{"revision":"758e3c11a58698203a444f8d2693ac9e","url":"tw_stocks/2762.json"},{"revision":"5ccca5ce619b624c6ebbe29f6736af17","url":"tw_stocks/2753.json"},{"revision":"f7e6619d36d65b587406dcf872c9e11f","url":"tw_stocks/2748.json"},{"revision":"8cce28669004c4b32134cb664c36407f","url":"tw_stocks/2739.json"},{"revision":"62740816949814ce7858ec9b61416a2f","url":"tw_stocks/2731.json"},{"revision":"f6e9086f498b6f6cf30bf8c123602411","url":"tw_stocks/2727.json"},{"revision":"8e2c6d1f5c0b901000b6f194fbba05fc","url":"tw_stocks/2723.json"},{"revision":"daecf2bc24e5cf3a09908f4bae76b615","url":"tw_stocks/2722.json"},{"revision":"ed8c3794425a964b887eedf7eee7ab14","url":"tw_stocks/2712.json"},{"revision":"56f399040b5a602b367f6456e0e50d7f","url":"tw_stocks/2707.json"},{"revision":"a395dd589970378643225b460ee79776","url":"tw_stocks/2706.json"},{"revision":"863a1fcb0bbab6642ee46dc4a926151b","url":"tw_stocks/2705.json"},{"revision":"637610aadf176302f5518ab1a783c425","url":"tw_stocks/2704.json"},{"revision":"b236c8e965710f50ea270adc4c94ee63","url":"tw_stocks/2702.json"},{"revision":"129876ef63c7c0b0950902ec1517ef80","url":"tw_stocks/2701.json"},{"revision":"70548052a4245f3a7c8b53c885884baf","url":"tw_stocks/2646.json"},{"revision":"57c0411b543d3d6bb67d023787608409","url":"tw_stocks/2645.json"},{"revision":"ef3e9c0a214ca7de230c2b57942a9a96","url":"tw_stocks/2642.json"},{"revision":"3a6365a5763216576420d3e4070684eb","url":"tw_stocks/2637.json"},{"revision":"e74a28652f021ec9d6e0c742c095619e","url":"tw_stocks/2636.json"},{"revision":"9d8fcac6235f4b49ed237f12c8bd05f7","url":"tw_stocks/2634.json"},{"revision":"f323afe9b6150de459e6ff9d04170268","url":"tw_stocks/2633.json"},{"revision":"f79ccef4edd29d3084e9a2a0865a64f7","url":"tw_stocks/2630.json"},{"revision":"592da50310d045939b5235e245e112d9","url":"tw_stocks/2618.json"},{"revision":"acad0c1003a2b312e961e89025e866a6","url":"tw_stocks/2617.json"},{"revision":"ce429158c8a52d4573e74fd20987e487","url":"tw_stocks/2616.json"},{"revision":"db92daf09c7834ef118e47440d8813d5","url":"tw_stocks/2615.json"},{"revision":"c609a7dd9d7bcfafcf097de3aeb84c71","url":"tw_stocks/2614.json"},{"revision":"8e1c426fdd1c259feb52817160ae8f97","url":"tw_stocks/2613.json"},{"revision":"a98d16ed1f72b7caa74cdbcdcd05700d","url":"tw_stocks/2612.json"},{"revision":"664eb0a9a2924e7b4f16e55e41f1724a","url":"tw_stocks/2611.json"},{"revision":"dcaf9f611d3effe3fed30b7f238995ec","url":"tw_stocks/2610.json"},{"revision":"867561e0a9d35417b2d009af35391e16","url":"tw_stocks/2609.json"},{"revision":"e3d621fcb9cae90d26e0cffad5fdc066","url":"tw_stocks/2608.json"},{"revision":"e7019e3ff7b94a0c355075f81d852d94","url":"tw_stocks/2607.json"},{"revision":"67c10a854f914f30203a5859af8c7c9a","url":"tw_stocks/2606.json"},{"revision":"967b9e1a309112bf8c65b0ed6bb2f5e4","url":"tw_stocks/2605.json"},{"revision":"b6aac879aff354bca463529a2de787a9","url":"tw_stocks/2603.json"},{"revision":"c14b69fd75ad2bf2898d0d370766fd45","url":"tw_stocks/2601.json"},{"revision":"a980af8e904d48af7076bdd89247c8ab","url":"tw_stocks/2597.json"},{"revision":"f0c6aaa4c739a098cd4cd7a2f6bfb784","url":"tw_stocks/2548.json"},{"revision":"84294ceb23b94a9278009fc40a2de965","url":"tw_stocks/2547.json"},{"revision":"677ad314696ea5e9cd734d234c6697a2","url":"tw_stocks/2546.json"},{"revision":"9fdb24861866e55497fa760f39c93a68","url":"tw_stocks/2545.json"},{"revision":"c5b37c2397ce25cbdf8a8b831bcb8358","url":"tw_stocks/2543.json"},{"revision":"2eeba8e14ced95271c2362f127142473","url":"tw_stocks/2542.json"},{"revision":"07e1681433084c8607c409d51895f93f","url":"tw_stocks/2540.json"},{"revision":"732e4fbb4be0c2fee3a8f4922a641f30","url":"tw_stocks/2539.json"},{"revision":"6b594ffb829d2b6462b70eaa39b88ad1","url":"tw_stocks/2538.json"},{"revision":"cf2486058b6fb2b5472a9d7ebbcb8e9e","url":"tw_stocks/2537.json"},{"revision":"15e1abe701fbf585ca8f065d211b6f23","url":"tw_stocks/2536.json"},{"revision":"3f3518a5c71fc80b675bb75704fbb0bc","url":"tw_stocks/2535.json"},{"revision":"65c22f067af7fb1bacf2dec7d8554ca9","url":"tw_stocks/2534.json"},{"revision":"164c1105cb9ca8bdcde2907137381278","url":"tw_stocks/2530.json"},{"revision":"0aa632c26bdc271ed652c8fb17b7b7f7","url":"tw_stocks/2528.json"},{"revision":"dc1dd136307250b8799fc6b822ded520","url":"tw_stocks/2527.json"},{"revision":"a6a8a69ce656d862b54c74a800d88db6","url":"tw_stocks/2524.json"},{"revision":"514aa990d44ad5ce4886f57dd704c9d5","url":"tw_stocks/2520.json"},{"revision":"686e75e2a2a83e3df76b865e792aca19","url":"tw_stocks/2516.json"},{"revision":"bc2246c4782d9ddf8abf652d6a41b8cc","url":"tw_stocks/2515.json"},{"revision":"117794cc2ba5911b552c1339b4f39783","url":"tw_stocks/2514.json"},{"revision":"6a0476c89727a2d95290d1e78a9f220b","url":"tw_stocks/2511.json"},{"revision":"4797f512fa3617e719b6096f37655729","url":"tw_stocks/2509.json"},{"revision":"145b899047d28d95b323fc6a09a1a1bf","url":"tw_stocks/2506.json"},{"revision":"025e799d956a086a079bf8b1889ff84d","url":"tw_stocks/2505.json"},{"revision":"0c62b9c49b5ad28f417aaafe71e831f4","url":"tw_stocks/2504.json"},{"revision":"0db4ef3f7e9a5958a17c92917be94f67","url":"tw_stocks/2501.json"},{"revision":"28b43e56a234729f891a90d95ee80661","url":"tw_stocks/2498.json"},{"revision":"f0bb3f1b55c855d7adc54bfade71a8cf","url":"tw_stocks/2497.json"},{"revision":"27e69428ed612a45d74665d6ad06dab5","url":"tw_stocks/2496.json"},{"revision":"58f52bae1ca5c59b98444f4a901f445b","url":"tw_stocks/2495.json"},{"revision":"c130441cdd60cee1179ffe4120e336cf","url":"tw_stocks/2493.json"},{"revision":"0e4497b128d6679c842e98a3f315d15a","url":"tw_stocks/2492.json"},{"revision":"8c0e5f2534464bfaa9bdd3f1b3209fbc","url":"tw_stocks/2491.json"},{"revision":"f8a7f40360cc1faad93d2a119bfa38d4","url":"tw_stocks/2489.json"},{"revision":"6b0272215a47475f82622bf10b148392","url":"tw_stocks/2488.json"},{"revision":"289f4966c4c576f8f8dc3c0470ef4edc","url":"tw_stocks/2486.json"},{"revision":"03c4f0d1002ab8a7358d3b9798c93a31","url":"tw_stocks/2485.json"},{"revision":"dd62db57ac07262b32d087d49ec5fd4f","url":"tw_stocks/2484.json"},{"revision":"e299710fad97610116eaf42c1d6c1d0b","url":"tw_stocks/2483.json"},{"revision":"8906f9dd0a350fc36037713d4d8d8869","url":"tw_stocks/2482.json"},{"revision":"ecf08ae5dbf800dfc98c881234414c6d","url":"tw_stocks/2481.json"},{"revision":"a9ad6f474fe892ce108cb30571fb689d","url":"tw_stocks/2480.json"},{"revision":"128c8c1f606dd2c9533871ffb02e527f","url":"tw_stocks/2478.json"},{"revision":"3291e3b31a6521df459bdd98334db7ec","url":"tw_stocks/2477.json"},{"revision":"65a8971f3d2d92fe618ac1651d777345","url":"tw_stocks/2476.json"},{"revision":"c683612b35d735cc8009313bbc3a5e37","url":"tw_stocks/2474.json"},{"revision":"417122e1d262e54e23696b98709f7254","url":"tw_stocks/2472.json"},{"revision":"6a8a91dc53148b6854c444ec50935933","url":"tw_stocks/2471.json"},{"revision":"f02d05311932829e3b3f0bcaa352bf89","url":"tw_stocks/2468.json"},{"revision":"65f5fcaeb3e2dfdb7ab46da52fd5530a","url":"tw_stocks/2467.json"},{"revision":"b75f02af11bcf67ba16740bf643c0313","url":"tw_stocks/2466.json"},{"revision":"67077be7a57f81cc9b3de10dd652e32a","url":"tw_stocks/2465.json"},{"revision":"e7d0f784135dd33cf7fff8aeaae07422","url":"tw_stocks/2464.json"},{"revision":"2a6d0d1ac6b6c0c2346aed694d70f9b3","url":"tw_stocks/2462.json"},{"revision":"085f3d2090bff43d882f0072d1b46525","url":"tw_stocks/2461.json"},{"revision":"c2973292cd54ff635d4240a93b760b19","url":"tw_stocks/2460.json"},{"revision":"1c04390bc3c7cc42627ebf70eac0427f","url":"tw_stocks/2459.json"},{"revision":"872e38ae29ad6cc3cdc2da9478790953","url":"tw_stocks/2458.json"},{"revision":"412caa45cce8bf33e775baf8a3a4caac","url":"tw_stocks/2457.json"},{"revision":"227379f1e92a95554340783019bffc26","url":"tw_stocks/2455.json"},{"revision":"7f3556abc9e7386cf060d4c2207ff45d","url":"tw_stocks/2454.json"},{"revision":"13cb75d4f80aad265d13d36bdca8b67a","url":"tw_stocks/2453.json"},{"revision":"fd40774ae5742e7e1c92b419c8d1e680","url":"tw_stocks/2451.json"},{"revision":"295917d229425d1cab3ecfb19d932ef8","url":"tw_stocks/2450.json"},{"revision":"ce61391a51b63f578b3b7dc42992ee15","url":"tw_stocks/2449.json"},{"revision":"83b074ad22e2d48881d515aff6e824fe","url":"tw_stocks/2444.json"},{"revision":"7c36dd6fe683a07e9d923b11c88c52ad","url":"tw_stocks/2442.json"},{"revision":"efd89753e310fe94edd7d17e3c436f8e","url":"tw_stocks/2441.json"},{"revision":"a7e075ff146cabdb3369a767370e24ef","url":"tw_stocks/2440.json"},{"revision":"43b3d5099a5d2585308f3ca45a7a4a24","url":"tw_stocks/2439.json"},{"revision":"b484093698f8654151977e6db73ceafa","url":"tw_stocks/2438.json"},{"revision":"7feee982bdfcea2246b687ab02a68247","url":"tw_stocks/2436.json"},{"revision":"0c9834bc0242be035fa0c9e4f9f533bc","url":"tw_stocks/2434.json"},{"revision":"e959e043b045b6c2cf94cf3a938e47c5","url":"tw_stocks/2433.json"},{"revision":"fb580104731c3334d827f9de1ab4e7b8","url":"tw_stocks/2431.json"},{"revision":"7bf1d587658c1510d0f989bbf970c7dd","url":"tw_stocks/2430.json"},{"revision":"0bfb84da08cf3bc94a720a695ff6d310","url":"tw_stocks/2429.json"},{"revision":"f16d387ff96527e1f83945464855ab49","url":"tw_stocks/2428.json"},{"revision":"514bb222c67dcb2e1926a731605ccaf0","url":"tw_stocks/2427.json"},{"revision":"97b375c022b97255953e0b5f7431814d","url":"tw_stocks/2426.json"},{"revision":"cdfd6a22d289c8b042fa18703be57f46","url":"tw_stocks/2425.json"},{"revision":"ae20661c8a6aba14f852402c9e927feb","url":"tw_stocks/2424.json"},{"revision":"aca2a5a598611924650a2066ea502ea4","url":"tw_stocks/2423.json"},{"revision":"096b03347aef8e4ea7e67b60cdbc13af","url":"tw_stocks/2421.json"},{"revision":"5c57979d8a12b070c08c7ca348eb96ad","url":"tw_stocks/2420.json"},{"revision":"1595cc236675e64ddf3f4c06ddd25a1e","url":"tw_stocks/2419.json"},{"revision":"8ccd75c485685e04e4ee23a88ade1d6f","url":"tw_stocks/2417.json"},{"revision":"3afcfb4f4f6e4142c028273d4aa1eb3b","url":"tw_stocks/2415.json"},{"revision":"6be7a3615d0e56f3cc6ac645b4e19118","url":"tw_stocks/2414.json"},{"revision":"0c74ef4c24ec3a6d498fa0da8a4f4821","url":"tw_stocks/2413.json"},{"revision":"513ecf5454ee8ef24ef4136e5c44bd6b","url":"tw_stocks/2412.json"},{"revision":"85aaef57b175be4538629c3f1bb73f3f","url":"tw_stocks/2409.json"},{"revision":"5c984dd3b29f691790291e667c50ad92","url":"tw_stocks/2408.json"},{"revision":"84de3222ca32eaf54e253b4a1e772c27","url":"tw_stocks/2406.json"},{"revision":"6c3b657b85eda3ffb3ba68497376a949","url":"tw_stocks/2405.json"},{"revision":"366b9a090e76ce3a7558fdb052829236","url":"tw_stocks/2404.json"},{"revision":"8e9abe895eefac831caa7f72f3b38bd8","url":"tw_stocks/2402.json"},{"revision":"5e8c3a93ebb14b3a9d6cc7c3c2942b46","url":"tw_stocks/2401.json"},{"revision":"091cf74cf53f2839703cf259d05347e5","url":"tw_stocks/2399.json"},{"revision":"1b3b510dce2c299fc27608b21380670d","url":"tw_stocks/2397.json"},{"revision":"1b9a73cba8bc7ca61f264596d1e5ea81","url":"tw_stocks/2395.json"},{"revision":"815516df6705b56b8711c867bed991bb","url":"tw_stocks/2393.json"},{"revision":"bcb3b7c81bf3002aea91b13a12b43ffd","url":"tw_stocks/2392.json"},{"revision":"5a38dcde52611d0b85fa28b4e2232156","url":"tw_stocks/2390.json"},{"revision":"4b59ae1aa2bd9ea65e526aa4fe9f3c59","url":"tw_stocks/2388.json"},{"revision":"1de8022d154026039c50443616dd1a87","url":"tw_stocks/2387.json"},{"revision":"c16a815f2a05775bcde15efbf61d8234","url":"tw_stocks/2385.json"},{"revision":"03b561653c6d34658ea297f77f51beb0","url":"tw_stocks/2383.json"},{"revision":"d905c5a48b8ee303750d0028a00a168a","url":"tw_stocks/2382.json"},{"revision":"97f090711ecaa3e7e67e44309e4cb6ae","url":"tw_stocks/2380.json"},{"revision":"6bb3a98045244e4aa4b36d3a4834aaef","url":"tw_stocks/2379.json"},{"revision":"fb3d85e32aa38eed18781f1dc7a0bfe1","url":"tw_stocks/2377.json"},{"revision":"0c0b7c6155590b70c14e697f44da60b2","url":"tw_stocks/2376.json"},{"revision":"6c3534eed8e24a353d787f292d32da5b","url":"tw_stocks/2375.json"},{"revision":"493a303a109b82e3b77b20acf0e2f6b1","url":"tw_stocks/2374.json"},{"revision":"13b4b9a1e2eeaab6e4a5a6f156df0523","url":"tw_stocks/2373.json"},{"revision":"97ac670d57975134c1784588589decbe","url":"tw_stocks/2371.json"},{"revision":"93fa73352cb12949f63d66ec95eaabe8","url":"tw_stocks/2369.json"},{"revision":"2993f0306bd7d128acc4175f88724196","url":"tw_stocks/2368.json"},{"revision":"363a5801e3462c54616b48b166dca1c6","url":"tw_stocks/2367.json"},{"revision":"34ac1477b1ff666d3cf3fcf33ca37241","url":"tw_stocks/2365.json"},{"revision":"995e68753a27772f0b873e5c89772796","url":"tw_stocks/2364.json"},{"revision":"2a0a0eb72e61dd9bfdfc618cb3ed3242","url":"tw_stocks/2363.json"},{"revision":"cb1af548f523c94a63d7d8f0f9cec4a5","url":"tw_stocks/2362.json"},{"revision":"3b469149a65413997e9ded27ef8bf178","url":"tw_stocks/2360.json"},{"revision":"abef0139e624c112cf65301e0966a26c","url":"tw_stocks/2359.json"},{"revision":"220c8822a1c31c3e870a32b8fc55ef81","url":"tw_stocks/2357.json"},{"revision":"f1ff3f95aa43c4d4117ebc9db609f4dc","url":"tw_stocks/2356.json"},{"revision":"e95e41c26ae032eadec4e7068f7ddc1d","url":"tw_stocks/2355.json"},{"revision":"199f0fceec2504c85cc988589643dc0f","url":"tw_stocks/2354.json"},{"revision":"d673744228bba2db1e582e51601bb7a8","url":"tw_stocks/2353.json"},{"revision":"c48b5d4bff02df3e0f4231e4073cea45","url":"tw_stocks/2352.json"},{"revision":"f762267c9965f4771b93c0bbe44a77d5","url":"tw_stocks/2351.json"},{"revision":"86fcb92d849c418faa8765966dac8d0c","url":"tw_stocks/2349.json"},{"revision":"a791450883f05ab7a62b7ef108b6fbc9","url":"tw_stocks/2348.json"},{"revision":"d5f7c5874afb7c809e5660d91bdc9169","url":"tw_stocks/2347.json"},{"revision":"5a9711e3818813525ede9a6bc0bd9339","url":"tw_stocks/2345.json"},{"revision":"b5f704a6afb8b28a08542fda9d55e29b","url":"tw_stocks/2344.json"},{"revision":"3b6c0d530aca1d109cf0777c8b1af895","url":"tw_stocks/2342.json"},{"revision":"a2c4c1f8aaa5854a248e66831b448003","url":"tw_stocks/2340.json"},{"revision":"d723a6220f2b3457a74699a739f72017","url":"tw_stocks/2338.json"},{"revision":"bcc81051c2f8c06873ef5372ec63de45","url":"tw_stocks/2337.json"},{"revision":"1cfcf6e948b1cdffbb85a46768c2eac6","url":"tw_stocks/2332.json"},{"revision":"9d4b0c6d24721957ad6015b972cbd47d","url":"tw_stocks/2331.json"},{"revision":"ad7e846eeddb00f72ccc9f5853927d89","url":"tw_stocks/2330.json"},{"revision":"e32db89e73a32a705014324529d73e00","url":"tw_stocks/2329.json"},{"revision":"68c64820cadafd4416ebc862c4337648","url":"tw_stocks/2328.json"},{"revision":"51cc6bbd6b81e8e13ee9c745e37aba69","url":"tw_stocks/2327.json"},{"revision":"4b8de76a5e82f891ebcc5154b671f0c1","url":"tw_stocks/2324.json"},{"revision":"ea9dfef090da3dceb806b473418e74a4","url":"tw_stocks/2323.json"},{"revision":"7caaa54b6c1734cd840250dac8d5f556","url":"tw_stocks/2321.json"},{"revision":"5fd56ce92d8d60afc667c771a6b5d339","url":"tw_stocks/2317.json"},{"revision":"50fefdeabb4d0480ebad56247ea65c5e","url":"tw_stocks/2316.json"},{"revision":"48a99dc0b131894565ad947c9548e446","url":"tw_stocks/2314.json"},{"revision":"2a3bd270ddcc3022a48ad4e1e3332885","url":"tw_stocks/2313.json"},{"revision":"dd207e483a77a24625af599d7bfacc46","url":"tw_stocks/2312.json"},{"revision":"5231930f99c4ccc3afab199ca68311ee","url":"tw_stocks/2308.json"},{"revision":"4765116fe4f4e13166cebdfc99f2397f","url":"tw_stocks/2305.json"},{"revision":"d995c6fa204e50fab6b71fa4d43e1be8","url":"tw_stocks/2303.json"},{"revision":"2b575b02cbf375d055cdbdff8cf21b27","url":"tw_stocks/2302.json"},{"revision":"dfd95c8c665c6a429daf5c639651f69d","url":"tw_stocks/2301.json"},{"revision":"03a684511cf6932db7408bbfa604e896","url":"tw_stocks/2250.json"},{"revision":"e59702e2995b08c74d3a3aa5c8750ed9","url":"tw_stocks/2248.json"},{"revision":"8025db3a36d4d2397e84cfd71813a803","url":"tw_stocks/2247.json"},{"revision":"97df7659093c35f9e27b55c2d863cd19","url":"tw_stocks/2243.json"},{"revision":"7afbd7d8e9671dbea0cfb355eb543853","url":"tw_stocks/2241.json"},{"revision":"69b69960501507aa8c34b19ba62f0377","url":"tw_stocks/2239.json"},{"revision":"5e6fa644db59c84b880d3c8450a1aae6","url":"tw_stocks/2236.json"},{"revision":"52af9a4bb2c6fa81e93c01329efe88bc","url":"tw_stocks/2233.json"},{"revision":"bf82f49d80e86eb205926e9862a92d1c","url":"tw_stocks/2231.json"},{"revision":"2b5e934c46a0bc7db05a108553cc1326","url":"tw_stocks/2228.json"},{"revision":"6cb37f62adb7e2973a00b5550c44808b","url":"tw_stocks/2227.json"},{"revision":"4bc26c532c44e956cc2b8823b6db66c9","url":"tw_stocks/2211.json"},{"revision":"2b3115832f5f9dd4428f7c1a63d1eb86","url":"tw_stocks/2208.json"},{"revision":"8330ec6f9a771101b7368063900905e9","url":"tw_stocks/2207.json"},{"revision":"2a266106d5701ebadd6ae6aabd69e10d","url":"tw_stocks/2206.json"},{"revision":"4a5f15e22477c82ae2fc26cd0fa964c5","url":"tw_stocks/2204.json"},{"revision":"8cdd4adb739abb7545283e9b60fc3cdf","url":"tw_stocks/2201.json"},{"revision":"44cab67d5c7d21227c20ee2897d38788","url":"tw_stocks/2115.json"},{"revision":"2504cd0bd8215090ceffc30a7cfbf3b9","url":"tw_stocks/2114.json"},{"revision":"a4aca778b7fb12dad63d7051005396e7","url":"tw_stocks/2109.json"},{"revision":"dd74dc5a7bf2ba518e4fc95ddbcc88d3","url":"tw_stocks/2108.json"},{"revision":"3224affb3f43f1b01817c30601774513","url":"tw_stocks/2107.json"},{"revision":"74fd13f8672dc413b1c3074ba814ea09","url":"tw_stocks/2106.json"},{"revision":"c1ad7e69ba08aa90ffe5354420c09245","url":"tw_stocks/2105.json"},{"revision":"24ebdd8867cebc05d5feaa89c71ca112","url":"tw_stocks/2104.json"},{"revision":"2752629b0bd00f093cb1c43e93068bd7","url":"tw_stocks/2103.json"},{"revision":"0b608b4a9e052245dd433841d6b187ab","url":"tw_stocks/2102.json"},{"revision":"257eded76ffdced43d71147931cb7b27","url":"tw_stocks/2101.json"},{"revision":"09ae72d6d5edad873438b5095c3df70b","url":"tw_stocks/2072.json"},{"revision":"9b91b5fecf55435c445b28bba0e30b39","url":"tw_stocks/2069.json"},{"revision":"02368cb83833c0ef11935530ad0577ae","url":"tw_stocks/2062.json"},{"revision":"02f77156f3640dcdda131d639b0874b5","url":"tw_stocks/2059.json"},{"revision":"68caa550b70170475ded34eb1142f8cd","url":"tw_stocks/2049.json"},{"revision":"0da5370dadecfeaf668e2a6cb3588798","url":"tw_stocks/2038.json"},{"revision":"8131cc26f8dc7a8db144c64a213cfa37","url":"tw_stocks/2034.json"},{"revision":"f04c9cb599657d67aa86cec7e9868039","url":"tw_stocks/2033.json"},{"revision":"d2c956a27377d0262569a51e7069a8e0","url":"tw_stocks/2032.json"},{"revision":"7b8d6d159b80d447ddb18e1b3fcfdfab","url":"tw_stocks/2031.json"},{"revision":"f351f6bb1ec1a74eb878704cd622684c","url":"tw_stocks/2030.json"},{"revision":"6ff707bf970ecd7f297d6cf74aa12b9d","url":"tw_stocks/2029.json"},{"revision":"8b9ae0c25475f2f211884254c707bfad","url":"tw_stocks/2028.json"},{"revision":"d9b7919cf6f840f28cd36b15b923e177","url":"tw_stocks/2027.json"},{"revision":"992c1c9e6843d178c7f8ec2a172169df","url":"tw_stocks/2025.json"},{"revision":"6a9be88aa1b4bcfbe347a97bde8c2c34","url":"tw_stocks/2024.json"},{"revision":"52f0d36f3b9f1b9a1cbb48d1d3fa16c2","url":"tw_stocks/2023.json"},{"revision":"a5a198343e37f8d41b20dbe90d5352d4","url":"tw_stocks/2022.json"},{"revision":"ec19ad794d95efc0e52b7f45a0e44611","url":"tw_stocks/2020.json"},{"revision":"5439fb0f5df50bccafe617fa67929534","url":"tw_stocks/2017.json"},{"revision":"641cd7a64a71051f11835f2b23478a7b","url":"tw_stocks/2015.json"},{"revision":"c62507c39fadf5755ec1e20c64dc8fdd","url":"tw_stocks/2014.json"},{"revision":"46fd300c80ad4c1a1c64cf7a8e448ecc","url":"tw_stocks/2013.json"},{"revision":"76c3f8768114a94f3f093ef706434d17","url":"tw_stocks/2012.json"},{"revision":"603cb7d61aaf9b5046119c194fb89062","url":"tw_stocks/2010.json"},{"revision":"3fb798ed4ace86d7f3d54bbaaff2ffdb","url":"tw_stocks/2009.json"},{"revision":"13abb5be9c22f63a22975c1966461066","url":"tw_stocks/2008.json"},{"revision":"554084dbfe57b1d146eb8eaa5e09f549","url":"tw_stocks/2007.json"},{"revision":"ad7eff355e08c2354850eaddafdad34b","url":"tw_stocks/2006.json"},{"revision":"3d5476b5ca349c24040a4ada8b96009b","url":"tw_stocks/2002.json"},{"revision":"f8bb3ec9c75365f369bb702796962d2b","url":"tw_stocks/1909.json"},{"revision":"b6b49768a39c69fd218be463c43951ae","url":"tw_stocks/1907.json"},{"revision":"45ec3acb2402af44af846da487fa8f50","url":"tw_stocks/1906.json"},{"revision":"d7aec38e3706ac3606d39cb934c34782","url":"tw_stocks/1905.json"},{"revision":"f615691a644c5aec8a6dadab9bade3f3","url":"tw_stocks/1904.json"},{"revision":"4a4f7da9b42ea2404cf4612ce28f1683","url":"tw_stocks/1903.json"},{"revision":"d70d6e9c4d6e90a7b4c1d0c9b0d5ecce","url":"tw_stocks/1817.json"},{"revision":"8e5c04bcbc3d480804ee741e7da2e422","url":"tw_stocks/1810.json"},{"revision":"70951efebe281673e4c357ac393b1591","url":"tw_stocks/1809.json"},{"revision":"52fbcb1904b1f5f167445b82f1592fec","url":"tw_stocks/1808.json"},{"revision":"154fd2c87ebe61e3f9f62886ffc9e15b","url":"tw_stocks/1806.json"},{"revision":"629225e33bc61c8749d32adef338f665","url":"tw_stocks/1805.json"},{"revision":"8a1e41f0e33f1dbf132284cb2b22a14e","url":"tw_stocks/1802.json"},{"revision":"8c2a90546c3dc20fa4703dc96c37b9c6","url":"tw_stocks/1795.json"},{"revision":"444ee846d5c5af4503fa44e753ca5c86","url":"tw_stocks/1789.json"},{"revision":"1617a6a3e2f10a7bd0af459224319bbc","url":"tw_stocks/1786.json"},{"revision":"3bcb77fa6bb3f50650ebd32ea5a42d78","url":"tw_stocks/1783.json"},{"revision":"efcd77594622e7ebdf6a3624ba34dbe5","url":"tw_stocks/1776.json"},{"revision":"2651514fea5289198abc047214a2f673","url":"tw_stocks/1773.json"},{"revision":"f3273dea840ae876790e791ac55bde92","url":"tw_stocks/1762.json"},{"revision":"b688393a464ca0d4f0c3656722141644","url":"tw_stocks/1760.json"},{"revision":"6fb63e9717d3889bba83c5658de7827c","url":"tw_stocks/1752.json"},{"revision":"91a2aeaed6c6fdbec968315454d284ac","url":"tw_stocks/1737.json"},{"revision":"97664857d4b2a12527c8407dca92d6e7","url":"tw_stocks/1736.json"},{"revision":"c3a76223acda9d35aa4d6862259b2a2b","url":"tw_stocks/1735.json"},{"revision":"133c20fe82bb97bc5f4b0b5f117ea8cf","url":"tw_stocks/1734.json"},{"revision":"81d0900d7e45eecf116ccdea9ec218b0","url":"tw_stocks/1733.json"},{"revision":"0a8b14fbac4a93c0713d4dc030395d15","url":"tw_stocks/1732.json"},{"revision":"b00ead5090f7fe2ee599657dcef38819","url":"tw_stocks/1731.json"},{"revision":"9996c9fe841862798dbabefedea96585","url":"tw_stocks/1730.json"},{"revision":"59166db97f97d8848bbdfab00aef97c8","url":"tw_stocks/1727.json"},{"revision":"590abb931e04d2d99c4889237afad7b5","url":"tw_stocks/1726.json"},{"revision":"573f31dee207327e2830c3a7dc20f7f0","url":"tw_stocks/1725.json"},{"revision":"c57e1590a1734dfbe5eb7cabce6a47df","url":"tw_stocks/1723.json"},{"revision":"1481c6041ea0a98d4fff82abcec35447","url":"tw_stocks/1722.json"},{"revision":"2a32b2e90a869e8310e64b3555878ee9","url":"tw_stocks/1721.json"},{"revision":"d743d6a3a14a645e6e4b0f5e521069e7","url":"tw_stocks/1720.json"},{"revision":"3c090c3993e96754cfd258b595b63450","url":"tw_stocks/1718.json"},{"revision":"122865398544dd49003969babcebe779","url":"tw_stocks/1717.json"},{"revision":"276458086dd100ff09a004a0af143a40","url":"tw_stocks/1714.json"},{"revision":"cfdfc79e5e3e1c32cda1224470874df3","url":"tw_stocks/1713.json"},{"revision":"ff3115054ea363c665b8d76b8ec31129","url":"tw_stocks/1712.json"},{"revision":"a8328b28ffd9d6778f1058cb4d0daecf","url":"tw_stocks/1711.json"},{"revision":"53dc341f0e389715f32da37f0158c157","url":"tw_stocks/1710.json"},{"revision":"dad88dddcf46502cc2bf1eb905d6061b","url":"tw_stocks/1709.json"},{"revision":"012fd1634d7a66e2df55780d305313ed","url":"tw_stocks/1708.json"},{"revision":"6d53d634eee4b4d03591c1cf110fdd11","url":"tw_stocks/1707.json"},{"revision":"82a4b7b57332275789cd0eaade20a12c","url":"tw_stocks/1702.json"},{"revision":"826fc956ce8642aa602ce4ccca57078e","url":"tw_stocks/1626.json"},{"revision":"52865a3d4bbca3c15596d4882a8b6045","url":"tw_stocks/1623.json"},{"revision":"e576e05f90c43f81c26b0611eac71440","url":"tw_stocks/1618.json"},{"revision":"5aeb2b47bdcfdcf26bd6955417fe3fce","url":"tw_stocks/1617.json"},{"revision":"ebcef0629cb0cdaab5237fcf9ed31fe7","url":"tw_stocks/1616.json"},{"revision":"208e236653630dc2552f9ba789d6b023","url":"tw_stocks/1615.json"},{"revision":"9cce18fbf9c6e72bd638c8e4000e42c9","url":"tw_stocks/1614.json"},{"revision":"f581d8471199e11fee1080670bf5fa7c","url":"tw_stocks/1612.json"},{"revision":"2748d0e0fa7b2579942bacefcf2b2aab","url":"tw_stocks/1611.json"},{"revision":"d6e5cd746403cbe1d1fb2a563c7de452","url":"tw_stocks/1609.json"},{"revision":"0fa2342e62e5f1cfa7219719267cd56d","url":"tw_stocks/1608.json"},{"revision":"14352039f9b83c0a54b9b99ca4298711","url":"tw_stocks/1605.json"},{"revision":"30b15c0ed5756ae1e55ea74977c3e228","url":"tw_stocks/1604.json"},{"revision":"1f734b48d65cc769ffee6d82e22779a3","url":"tw_stocks/1603.json"},{"revision":"46506227e82c6a2c734b06b5ccdef5f1","url":"tw_stocks/1598.json"},{"revision":"fc472e04f539858120f694956e2eddbd","url":"tw_stocks/1597.json"},{"revision":"42bcbb37d4f59c435c687fe2d6127e3e","url":"tw_stocks/1590.json"},{"revision":"5b5d80c7909b1332cd1ad493f4eb9cfa","url":"tw_stocks/1589.json"},{"revision":"53b14543faaee77e3f1ddef8764269ac","url":"tw_stocks/1587.json"},{"revision":"78505b97e1e684c54c469da743ac2e71","url":"tw_stocks/1583.json"},{"revision":"c961ecdbd1e273a09b095c5e24e28099","url":"tw_stocks/1582.json"},{"revision":"f458df88d9fbc9758defe987be0a2292","url":"tw_stocks/1568.json"},{"revision":"f09a9ea4435328677d89235775a97304","url":"tw_stocks/1563.json"},{"revision":"d76b2526b6348706a8e7fd50f7389daf","url":"tw_stocks/1560.json"},{"revision":"0b52c04f7be7a217a92a7a9649ade9d5","url":"tw_stocks/1558.json"},{"revision":"ba212038711ab5d07eeb643b1941e29b","url":"tw_stocks/1541.json"},{"revision":"b3ee0eb1f02fa61e354b32e7f425ff50","url":"tw_stocks/1540.json"},{"revision":"b0a261cf9e57778be593ee754374529f","url":"tw_stocks/1539.json"},{"revision":"49372cca02d2f57d54350b9c3458fa84","url":"tw_stocks/1538.json"},{"revision":"12e7ec69c5c7828b79012944051f7936","url":"tw_stocks/1537.json"},{"revision":"8a694fab6fa42f91ef6f37942f3f3b3c","url":"tw_stocks/1536.json"},{"revision":"7b3d4c84a3ab371bc1bc7a779f559b7a","url":"tw_stocks/1535.json"},{"revision":"5ab4c8225cc2ae116b1bbe16cc5298b4","url":"tw_stocks/1533.json"},{"revision":"a7293f170bebe91dbdabd339cea5226e","url":"tw_stocks/1532.json"},{"revision":"523e7cec4fae9d8c0501dd448ae0c7b7","url":"tw_stocks/1531.json"},{"revision":"b7a0f4a84f9e80baccc1be318650c776","url":"tw_stocks/1530.json"},{"revision":"05e134af77aeeb55bb30b11845d8d9e3","url":"tw_stocks/1529.json"},{"revision":"4d80ac6a7576d48c7623693549b23d33","url":"tw_stocks/1528.json"},{"revision":"583fa93e4e2371d6bf0ec8b5b6d39cc2","url":"tw_stocks/1527.json"},{"revision":"2a6b86dd24d105f01798eb509f64439f","url":"tw_stocks/1526.json"},{"revision":"1217a7bced12896c6e998651fe5eb689","url":"tw_stocks/1525.json"},{"revision":"81e7117b3e09a8d8a500e8641e964f71","url":"tw_stocks/1524.json"},{"revision":"b97d21fb13b4be05acfa535b4162b74c","url":"tw_stocks/1522.json"},{"revision":"061dcfc8085f910f9acf82053cb46cbf","url":"tw_stocks/1521.json"},{"revision":"82903021e7b56fbcb68d16c42f688b03","url":"tw_stocks/1519.json"},{"revision":"9c4cc25b4d4ae68878b619c1b7674c36","url":"tw_stocks/1517.json"},{"revision":"5a0587b6ced3dc242148156b63b1265d","url":"tw_stocks/1516.json"},{"revision":"b11d32195721f6f169d1a03f080ad883","url":"tw_stocks/1515.json"},{"revision":"a4694feb8c0a5844efa6669e29cd15bd","url":"tw_stocks/1514.json"},{"revision":"d1d9bca6c4398fb2860262634501e6d6","url":"tw_stocks/1513.json"},{"revision":"73e546fa6fffaa0fcb4fced6cb3dab70","url":"tw_stocks/1512.json"},{"revision":"159010f85bb0c9aecdf2fef85a2f4789","url":"tw_stocks/1506.json"},{"revision":"ba0b47264ff4e8c77d83b37d437a63d2","url":"tw_stocks/1504.json"},{"revision":"aa6deef92911bf2787bba24ce815ecb6","url":"tw_stocks/1503.json"},{"revision":"aab78912eb94bdb93af45989d0394251","url":"tw_stocks/1477.json"},{"revision":"634987c630b181f37e257493bb7765a3","url":"tw_stocks/1476.json"},{"revision":"f846e3fc54ab87ad54c6c66f3f64e487","url":"tw_stocks/1475.json"},{"revision":"bee857888bbccd8065ab82c437c0c667","url":"tw_stocks/1474.json"},{"revision":"cc7cfbd24ecc0b27326ee50a2b444601","url":"tw_stocks/1473.json"},{"revision":"4fc8e69803c37b6233bdb675b5de274d","url":"tw_stocks/1472.json"},{"revision":"fd28ebf9115a3e5d9d7eaa12b4cde93c","url":"tw_stocks/1471.json"},{"revision":"3b0b8ab42eac27b5c95163fce32f3b1e","url":"tw_stocks/1470.json"},{"revision":"9c60292c35f501320e608c1753cd185f","url":"tw_stocks/1468.json"},{"revision":"7e8bb9c89964364b9fa06869e53da6ab","url":"tw_stocks/1467.json"},{"revision":"98ce105946c97df0b37b9d5d4aa72a1f","url":"tw_stocks/1466.json"},{"revision":"84e57f7dda38cef5fc67e15e42af3388","url":"tw_stocks/1465.json"},{"revision":"28114124e53dc0441ce779b999a2fe41","url":"tw_stocks/1464.json"},{"revision":"5850e2ed9436334ed3f9932f47d81cf6","url":"tw_stocks/1463.json"},{"revision":"9749ec2bd26a5dbf443d42b577f4fa56","url":"tw_stocks/1460.json"},{"revision":"bb9ff8714bcdc209147273d685539ea5","url":"tw_stocks/1459.json"},{"revision":"e1548f4b7788793b7bceba11974e2772","url":"tw_stocks/1457.json"},{"revision":"5ef700a2e362ed920f881b11767c4339","url":"tw_stocks/1456.json"},{"revision":"d5f91a5a036f65bef8ee86a08079c6c8","url":"tw_stocks/1455.json"},{"revision":"79b2e54dffc0cc78180c1659f90cd745","url":"tw_stocks/1454.json"},{"revision":"eb665f77b9e4bacfa22a74786b9b3d8a","url":"tw_stocks/1453.json"},{"revision":"5151c36f854154d601590e0b0b8d5015","url":"tw_stocks/1452.json"},{"revision":"ce855dbe896951c52617dc78d43a734b","url":"tw_stocks/1451.json"},{"revision":"57491952c4930d6a08d3f71dd9522230","url":"tw_stocks/1449.json"},{"revision":"8ac084f6a6a8967ed7c7719a21c1d694","url":"tw_stocks/1447.json"},{"revision":"53271f25f0273428727e4673e8a62e6b","url":"tw_stocks/1446.json"},{"revision":"5cc9c5cce8dacfb5b19f58d59a2e3a75","url":"tw_stocks/1445.json"},{"revision":"071d2ecc947561eb09029212592d52ab","url":"tw_stocks/1444.json"},{"revision":"345d821bcf2d47260528e67ce72157df","url":"tw_stocks/1443.json"},{"revision":"7fd17b7fd34a9ad79437cd30b8fb1c69","url":"tw_stocks/1442.json"},{"revision":"2e517b1c92d283b5dea76da7a42e25b4","url":"tw_stocks/1441.json"},{"revision":"585b0887ec79956df2ffd1d1d562c4d5","url":"tw_stocks/1440.json"},{"revision":"f4affbb8c7d256c42ad5dc4fbd83f8d8","url":"tw_stocks/1439.json"},{"revision":"0cfc831eacb16b3747a713c5332808f5","url":"tw_stocks/1438.json"},{"revision":"538803af081a2d26500f1bc2da9b3c24","url":"tw_stocks/1437.json"},{"revision":"8c3b00427b5ca6c49342191a5d3c7f83","url":"tw_stocks/1436.json"},{"revision":"12c52ff34b349971512c8e6df8aa3e3a","url":"tw_stocks/1435.json"},{"revision":"130fdbd1139980747ce574fccdd517b6","url":"tw_stocks/1434.json"},{"revision":"da4fb4ba6f3851fa1264ea716c7e39a6","url":"tw_stocks/1432.json"},{"revision":"90b1f93a7ab7a3717c60b1b5aa300d3d","url":"tw_stocks/1423.json"},{"revision":"dd86d820f2569d93750f44f3d6f62280","url":"tw_stocks/1419.json"},{"revision":"65090b6ae281cfb0cbc175a4f1276002","url":"tw_stocks/1418.json"},{"revision":"d227d9d436b455a02996cd2d466a8804","url":"tw_stocks/1417.json"},{"revision":"b86dbd9801b3b4f050551e5633b27ed0","url":"tw_stocks/1416.json"},{"revision":"3c914bd772343b6791b050fe833ec78e","url":"tw_stocks/1414.json"},{"revision":"492d5da48c9a91ae110222f6511802ae","url":"tw_stocks/1413.json"},{"revision":"37cc7a7800ec8e0e974dfe345fe67873","url":"tw_stocks/1410.json"},{"revision":"2e643293782572838fd44d61370c9cb4","url":"tw_stocks/1409.json"},{"revision":"9031db940f8520fc3328315ae7a70c6b","url":"tw_stocks/1402.json"},{"revision":"687ba82332e85e01b4f48e76d28fc038","url":"tw_stocks/1342.json"},{"revision":"6f6c18db6cfa4600c1062dc4d60fedae","url":"tw_stocks/1341.json"},{"revision":"b14d2ac49228dfd207eed60f77c69b76","url":"tw_stocks/1340.json"},{"revision":"0d381c1388b34a1779f3aaf02ff2447a","url":"tw_stocks/1339.json"},{"revision":"6b2d0c50f9ab265a1110138acfa47e71","url":"tw_stocks/1338.json"},{"revision":"b03b177844ac15505ce0e5b75b0da9b9","url":"tw_stocks/1337.json"},{"revision":"3bf8a8ea2c7d61912e10d3fe088a3e60","url":"tw_stocks/1326.json"},{"revision":"88dbfde4bc59a0b69ed9d326ea5044e2","url":"tw_stocks/1325.json"},{"revision":"9bc5c3c059caf50ee1d1766274c88724","url":"tw_stocks/1324.json"},{"revision":"bff57581e72fbd55bc1e932d30f6f71e","url":"tw_stocks/1323.json"},{"revision":"8e9cb14cc1f41b0392dc5d960a6ac0af","url":"tw_stocks/1321.json"},{"revision":"d8c675d81c7e41ebf37e5fcf628799dc","url":"tw_stocks/1319.json"},{"revision":"af1b262b48549a81c689beb4ac25f1aa","url":"tw_stocks/1316.json"},{"revision":"7fb419069f16407717a890191a057c12","url":"tw_stocks/1315.json"},{"revision":"54e31b228119fa033384159a5749bbe2","url":"tw_stocks/1314.json"},{"revision":"fe74d9ef199f2b51d8aa93856a6ae1c4","url":"tw_stocks/1313.json"},{"revision":"c6254eb1c12a77ebd9458514f8dbf9ee","url":"tw_stocks/1312.json"},{"revision":"ae93177dbc23cfc3b401f3a9cf4d5321","url":"tw_stocks/1310.json"},{"revision":"74b8063c1677386f1c549d881a04189e","url":"tw_stocks/1309.json"},{"revision":"800a83ce45710abeb869903181d760b5","url":"tw_stocks/1308.json"},{"revision":"b8fbfdebf66b3f3adff2eb840be46787","url":"tw_stocks/1307.json"},{"revision":"673bc471d34e1a28d17c7762611d991d","url":"tw_stocks/1305.json"},{"revision":"5222830408ef45371f96c2026930f52c","url":"tw_stocks/1304.json"},{"revision":"24865eb824767a00afacfa3561be4e31","url":"tw_stocks/1303.json"},{"revision":"6a0c2816fc7bea106e4a9454f3d83f47","url":"tw_stocks/1301.json"},{"revision":"d415a586733478a6fd703d034b837e7c","url":"tw_stocks/1256.json"},{"revision":"5ea17888e9d311e37eb76d91ec43c8dc","url":"tw_stocks/1236.json"},{"revision":"aff65e5b9446e3535e2b04c8886dff59","url":"tw_stocks/1235.json"},{"revision":"59085a19b28ff0dec4dc4d54cb12e4ba","url":"tw_stocks/1234.json"},{"revision":"3a07bb7e02e7edee3ad769a14e379bec","url":"tw_stocks/1233.json"},{"revision":"a5abfb458607ba5e339980b7377dd4bf","url":"tw_stocks/1232.json"},{"revision":"f19d140dc043348ee0e20691e7a0a868","url":"tw_stocks/1231.json"},{"revision":"23908617a8cf3655c9e5f3f7a49107fb","url":"tw_stocks/1229.json"},{"revision":"69077a5cb0015a42477803df4208e437","url":"tw_stocks/1227.json"},{"revision":"6b5b3349fa089ab7b8477745fdb273d6","url":"tw_stocks/1225.json"},{"revision":"85e6522cc448f0aca0b8ec3be96a9bf4","url":"tw_stocks/1220.json"},{"revision":"8fea6cfe1e28ac4f2a4707af55d45a54","url":"tw_stocks/1219.json"},{"revision":"82fed9859e97fd65e5113aad07c2e395","url":"tw_stocks/1218.json"},{"revision":"433703b220b9c74c8a0570e2fb25e390","url":"tw_stocks/1217.json"},{"revision":"9d22262eed99237445b7f1b4a2de2184","url":"tw_stocks/1216.json"},{"revision":"c01ea0d67087656119d81afba651f9a6","url":"tw_stocks/1215.json"},{"revision":"8323128192f7340c5edbdc52436b6615","url":"tw_stocks/1213.json"},{"revision":"30a8aa4f4b941912b55126f9e16c61aa","url":"tw_stocks/1210.json"},{"revision":"d7b3b7c429b63d4453475ffb2ad5598b","url":"tw_stocks/1203.json"},{"revision":"d2b5e516b43cfdd8de401cee5609cd2e","url":"tw_stocks/1201.json"},{"revision":"4daeb815308ea7006d647ed9a3fa1b0f","url":"tw_stocks/1110.json"},{"revision":"240ab0c2a8bfb930c9e67c8c6d96d312","url":"tw_stocks/1109.json"},{"revision":"00c28c551d90abb0fbd0e18e6d1e99a1","url":"tw_stocks/1108.json"},{"revision":"27347919f3cafc88ac881b9396da5144","url":"tw_stocks/1104.json"},{"revision":"c93e78cb1b5dabfb5c8a8a5e16425454","url":"tw_stocks/1103.json"},{"revision":"2a1b4f7a7287d4e6613129a447f83801","url":"tw_stocks/1102.json"},{"revision":"ecf576b01ec019017d807b31de6c750e","url":"tw_stocks/1101.json"},{"revision":"7447c4e4f0ab746eba69568a093da7e7","url":"tw_stocks/00999A.json"},{"revision":"20757891fc8158ea01e8cea45b5a52c0","url":"tw_stocks/00997A.json"},{"revision":"34ffa64c51b61e8f042f5c6ac28bd2fc","url":"tw_stocks/00996A.json"},{"revision":"98ed37c4184592ddccfef851f204c1ab","url":"tw_stocks/00995A.json"},{"revision":"bd3075cd7d1fb5861c4187fa9e093fa6","url":"tw_stocks/00994A.json"},{"revision":"7323819782c62eddbf7db4a4584d7b54","url":"tw_stocks/00993A.json"},{"revision":"0888f714c791b25447d3aa6d5e2b096f","url":"tw_stocks/00992A.json"},{"revision":"2b22a9a0ab8cd1d1bad8ff4ca4738b41","url":"tw_stocks/00991A.json"},{"revision":"f17495fdcd03ab1cb4dc0e52269f5e44","url":"tw_stocks/00990A.json"},{"revision":"def13bd238911fe7dce0de97e30b1203","url":"tw_stocks/00989A.json"},{"revision":"cc02df7fc0c6f904b53a184430db8832","url":"tw_stocks/00988A.json"},{"revision":"578ae4bcb355a4b809cdece32a134171","url":"tw_stocks/00987A.json"},{"revision":"a7d32fa0db5e22dd005a85b89951bb58","url":"tw_stocks/00986A.json"},{"revision":"b4cffbdba72127866078f8e6c3a31f5f","url":"tw_stocks/00985B.json"},{"revision":"8a21129b802f52af234140ccb263163b","url":"tw_stocks/00985A.json"},{"revision":"7ca13246a87f4bb9057960b9b1438ba7","url":"tw_stocks/00984D.json"},{"revision":"5239eed31850ac53e034e6dde624932a","url":"tw_stocks/00984A.json"},{"revision":"311974b7df26d23f16b4a03470c5f15e","url":"tw_stocks/00983D.json"},{"revision":"6e5b96765509356762c096af3308b688","url":"tw_stocks/00983A.json"},{"revision":"c5defdaf162505d79994790b124201b8","url":"tw_stocks/00982T.json"},{"revision":"b391c3d62c468c9aa481299bf23c4eb6","url":"tw_stocks/00982D.json"},{"revision":"44c46b241b374b4379dfcc40788ba3c0","url":"tw_stocks/00982A.json"},{"revision":"ba8ad00352bf20d57a00320de5762a40","url":"tw_stocks/009824.json"},{"revision":"cc81d973157e12cda3de5d509b111afb","url":"tw_stocks/009821.json"},{"revision":"d1dc24fa7be3e865ea0db435f2da58d6","url":"tw_stocks/009820.json"},{"revision":"dbe0a04ddf2c5d3254b37ce12689e43f","url":"tw_stocks/00981T.json"},{"revision":"15747a1b009ac62644d5f7d05cfa0fc1","url":"tw_stocks/00981A.json"},{"revision":"459fca8c15fc4f801e3bbfa56ce8bfa4","url":"tw_stocks/009819.json"},{"revision":"4b3f3ee3274f8f61094744f5b0ed837a","url":"tw_stocks/009818.json"},{"revision":"787e8f96fcb5bc132dc3f35444cfa7ea","url":"tw_stocks/009817.json"},{"revision":"340d92b3b3b00af1ba6a3fb79189cbdb","url":"tw_stocks/009816.json"},{"revision":"57ee4106a0a44859729fbcf95ffe9619","url":"tw_stocks/009813.json"},{"revision":"8643904e0cb9f95cbbd93332cef5ddf3","url":"tw_stocks/009812.json"},{"revision":"5cca80496753da424790c4932beb4390","url":"tw_stocks/009811.json"},{"revision":"63bb0c601e621d9651cf9eb6d593a7c2","url":"tw_stocks/009810.json"},{"revision":"376636a4fd748aac3bafb441aa41a04a","url":"tw_stocks/00980A.json"},{"revision":"2966975297014a4ca6435578c56d8b89","url":"tw_stocks/009809.json"},{"revision":"e7d0b7f70bb80f46cb430d97459137a7","url":"tw_stocks/009808.json"},{"revision":"e252fc65f62d11f4f99b1906b164e792","url":"tw_stocks/009805.json"},{"revision":"eda56b989884dd72d4775b4a54753b51","url":"tw_stocks/009804.json"},{"revision":"4297a4b1dbd26cadad885829c9720bff","url":"tw_stocks/009803.json"},{"revision":"0f80b3ccb9778e5451ad05ed03683d72","url":"tw_stocks/009802.json"},{"revision":"659550e4237f7c488e558efbdc3883c9","url":"tw_stocks/009801.json"},{"revision":"77488494cea4a8ba3ac4be91a5ce0884","url":"tw_stocks/009800.json"},{"revision":"517d60d1e9720c39ca888b3199c26d49","url":"tw_stocks/00972.json"},{"revision":"7b849448883246ee42bc13a0996bdddd","url":"tw_stocks/00971.json"},{"revision":"5a3f59aebdb9f4c74c2ebff7c13cf3b7","url":"tw_stocks/00965.json"},{"revision":"3a3fdbaba59bf10b4900eb68011b1357","url":"tw_stocks/00964.json"},{"revision":"be6d679ea869af2a55901955feb48ecc","url":"tw_stocks/00963.json"},{"revision":"d10eeb0cda17d20b77c1a1aa2749e332","url":"tw_stocks/00962.json"},{"revision":"fce0648550d48fb4bf5e5d6bde8bf121","url":"tw_stocks/00961.json"},{"revision":"f4510c7c0847d9bedf4925627f2e058e","url":"tw_stocks/00960.json"},{"revision":"eed75a6e46d79cab14e30f32c436b249","url":"tw_stocks/00956.json"},{"revision":"258ee39f375b5def0c323e224f2e3712","url":"tw_stocks/00954.json"},{"revision":"a159958bab57f72613d70c978e8817bb","url":"tw_stocks/00953B.json"},{"revision":"789e5e9e40c050236346354c79019c69","url":"tw_stocks/00952.json"},{"revision":"9ef8d592b06e0ff5ed4d255c8be8fcc9","url":"tw_stocks/00951.json"},{"revision":"d490f67d6a6fb7fca20ac9c7ead43125","url":"tw_stocks/00949.json"},{"revision":"d4e15038eec7017701c3741204a0956c","url":"tw_stocks/00947.json"},{"revision":"53f4947fd441e159046d0852fa059058","url":"tw_stocks/00946.json"},{"revision":"9da982efeb8ae680d47fc895089ce173","url":"tw_stocks/00945B.json"},{"revision":"03bfba031680d3fe5b16e306fabff3c5","url":"tw_stocks/00944.json"},{"revision":"1a2e8592d624fa7e7279e386c42a9537","url":"tw_stocks/00943.json"},{"revision":"3b7e022dcbd3a0ccfd4bc1e014c2a3e7","url":"tw_stocks/00941.json"},{"revision":"4bf377e47e845e5720898bc031e647c6","url":"tw_stocks/00940.json"},{"revision":"37cfbf40083bb43e69c9e9a44230ad9a","url":"tw_stocks/00939.json"},{"revision":"89c33c2da9d7021b3cb2f9e399500da1","url":"tw_stocks/00938.json"},{"revision":"a3e81f2fb2591e3e4b4fa6710d4d8202","url":"tw_stocks/00936.json"},{"revision":"71183bff9c7ec9e1c11b5c58d6a9a6a8","url":"tw_stocks/00935.json"},{"revision":"a8e26eba964012b0a55dd07c15d99de9","url":"tw_stocks/00934.json"},{"revision":"ab239b5daac52482cc112e42f3a0ef42","url":"tw_stocks/00932.json"},{"revision":"9ca5960060697b3c00465c67e365a58a","url":"tw_stocks/00930.json"},{"revision":"4651929a5f3549f0c8c6d7173cb349e0","url":"tw_stocks/00929.json"},{"revision":"eb50e03b444c97ff00294820412370a7","url":"tw_stocks/00927.json"},{"revision":"333d8764636c7997efaad34fb9ccb0f2","url":"tw_stocks/00926.json"},{"revision":"fb5833af3b194a2cd260dd84e0198fae","url":"tw_stocks/00924.json"},{"revision":"1b243143ed6556c81cec458fd268b961","url":"tw_stocks/00923.json"},{"revision":"a648388cf2cac1569cc77960fb953c9b","url":"tw_stocks/00922.json"},{"revision":"7dac3fa0733dd233bf26e481adaf8b35","url":"tw_stocks/00921.json"},{"revision":"72ae491bfbf4d2dabec620b5fb80b901","url":"tw_stocks/00920.json"},{"revision":"f7f609db14f884b61057785b659c322c","url":"tw_stocks/00919.json"},{"revision":"3f6674adcf526b2c957c0a35db437191","url":"tw_stocks/00918.json"},{"revision":"c45c1968592e5a303dcae5a0bc655aa2","url":"tw_stocks/00917.json"},{"revision":"13d7b7816a6dbcb0b83a2a043369bee3","url":"tw_stocks/00916.json"},{"revision":"cc33fe8d7529ceee4d580db872c583ef","url":"tw_stocks/00915.json"},{"revision":"606bffd927d068ef73eab9a3896e9a2d","url":"tw_stocks/00913.json"},{"revision":"fef0272b94a71eabe1c2e71791aa92ef","url":"tw_stocks/00912.json"},{"revision":"5a24275a15ea5ac92f13a9b3bc3656ad","url":"tw_stocks/00911.json"},{"revision":"6093eaacc66e25ea950b84751baf39b5","url":"tw_stocks/00910.json"},{"revision":"2c36e32c13ff7d5b479e7737bf19870d","url":"tw_stocks/00909.json"},{"revision":"96b827bb336499122f4bb4d6ceb62477","url":"tw_stocks/00908.json"},{"revision":"5a331697cde0ca029df0b19acb13d5bf","url":"tw_stocks/00907.json"},{"revision":"16b9d3fc87c7e053ff34bcaae4f32230","url":"tw_stocks/00905.json"},{"revision":"f3dcd139a9d144bd2a0e1c8abd41bd81","url":"tw_stocks/00904.json"},{"revision":"900878e4a46c86dba2049216cf974e66","url":"tw_stocks/00903.json"},{"revision":"d22eed15066e846c2ade9d2fdd51a20e","url":"tw_stocks/00902.json"},{"revision":"a1708dcaa170a45f4443da92ed7128c8","url":"tw_stocks/00901.json"},{"revision":"fd15432c9ca3e75f652ec6931bee96e7","url":"tw_stocks/00900.json"},{"revision":"5fc7f584c2d1bcac458711e498d6bd0f","url":"tw_stocks/00899.json"},{"revision":"9aee59cfa71ad94aecfdd6324e235067","url":"tw_stocks/00898.json"},{"revision":"08809a84c7f9ee2439625ba328bf92bd","url":"tw_stocks/00897.json"},{"revision":"f16daf10702665c65164aa3e108faead","url":"tw_stocks/00896.json"},{"revision":"1770af69d93b8b995d629a52ba99e1da","url":"tw_stocks/00895.json"},{"revision":"fb749172750dbee42efd8a40d86b3d47","url":"tw_stocks/00894.json"},{"revision":"cb4453117be3a2010b3d252d4c60260b","url":"tw_stocks/00893.json"},{"revision":"60aa5b6ba988c69c0d03a22267ff37fd","url":"tw_stocks/00892.json"},{"revision":"33c836689d914219ee35fff71fe4df86","url":"tw_stocks/00891.json"},{"revision":"c24b623383d1ef8af798675a6d4f774b","url":"tw_stocks/00885.json"},{"revision":"7d1bf9489f22c3c2e76983b27a55a1ac","url":"tw_stocks/00882.json"},{"revision":"383cc446887f684a4bd50a587ba2ec0e","url":"tw_stocks/00881.json"},{"revision":"68a2589dbef905c120b5d8b8c5590ba6","url":"tw_stocks/00878.json"},{"revision":"2cfe394c23a1d8b3473657f8ba14b9af","url":"tw_stocks/00876.json"},{"revision":"ff85f60a88d1e114c98d3527fe85713a","url":"tw_stocks/00875.json"},{"revision":"51e9d2bbbaefa5c25f9d63deb8636b81","url":"tw_stocks/00865B.json"},{"revision":"6a2d8e71b94d8f889e3f77e15533ea06","url":"tw_stocks/00861.json"},{"revision":"bedcb8a0ac9ad5505587a825c31ed1f2","url":"tw_stocks/00852L.json"},{"revision":"fda83a2712cf4399a807a9bf76cd1496","url":"tw_stocks/00851.json"},{"revision":"27b132ab63f052eeff2f9827e279b35f","url":"tw_stocks/00850.json"},{"revision":"146a5510390028cd99dee679016febd7","url":"tw_stocks/00830.json"},{"revision":"850bdf50c4c991093335e012e1ed4f3f","url":"tw_stocks/00783.json"},{"revision":"feb6d8291aff3b6713d1d05daa7ac2d6","url":"tw_stocks/00775B.json"},{"revision":"23eb67b3dc199e539976b246bfffa295","url":"tw_stocks/00771.json"},{"revision":"0bfa35acf3583fce7078e6d0d98e4fcd","url":"tw_stocks/00770.json"},{"revision":"a327b42036c4bc3a81405c30ad26b608","url":"tw_stocks/00763U.json"},{"revision":"db0936a29292b5e5d4ba781d112a8a53","url":"tw_stocks/00762.json"},{"revision":"32a52da850f4ff65eb8d5d8271ea441f","url":"tw_stocks/00757.json"},{"revision":"622de9fdf20eefc34cf3a3d12b70434d","url":"tw_stocks/00753L.json"},{"revision":"d68a6d24aea4f091ef02ed741a215f4b","url":"tw_stocks/00752.json"},{"revision":"72d4fa63e8f4bfc10e3d63f290e86a89","url":"tw_stocks/00739.json"},{"revision":"d805952d5f6721b5449e3de31b667a8f","url":"tw_stocks/00738U.json"},{"revision":"e6be8315c620e27f724446adff88fd09","url":"tw_stocks/00737.json"},{"revision":"b5f4a20cc378ec790d6ce148deb91456","url":"tw_stocks/00736.json"},{"revision":"8d689fec715cafd98cc8e15b2c15d12a","url":"tw_stocks/00735.json"},{"revision":"701f8c5815cf26f1c334b59984bc308a","url":"tw_stocks/00733.json"},{"revision":"8910169bcc14bb5bb960ee2a041ef893","url":"tw_stocks/00731.json"},{"revision":"27987066b893007ff09df40ebbcc8cd2","url":"tw_stocks/00730.json"},{"revision":"21ccfb236030bbeadec54f3fac0d4441","url":"tw_stocks/00728.json"},{"revision":"b83c5f478738fff758c0e1bfc1bd0794","url":"tw_stocks/00717.json"},{"revision":"3d48ce55d51a92e88dfdac9f5c0b217e","url":"tw_stocks/00715L.json"},{"revision":"0a185167dbef3e1f21876032b6c22033","url":"tw_stocks/00714.json"},{"revision":"3754f93ce083758abb7792a6aa9ddfba","url":"tw_stocks/00713.json"},{"revision":"82b96766519fee4c6863b0fd0e99e1fb","url":"tw_stocks/00712.json"},{"revision":"350d3dff502994b7b9931b72312c70f6","url":"tw_stocks/00711B.json"},{"revision":"9d264fa78f36f91cc8c174f1234055ee","url":"tw_stocks/00710B.json"},{"revision":"4b029450e10cf27a4767692a693f820c","url":"tw_stocks/00709.json"},{"revision":"81a92b91ad888f27a1b1d1b4e1fa839a","url":"tw_stocks/00708L.json"},{"revision":"e52fd6cada2f60a2dcbb0753b44890ec","url":"tw_stocks/00707R.json"},{"revision":"37ed9e9df5ad53504f266fef30bc1a0f","url":"tw_stocks/00706L.json"},{"revision":"9b9abcded69a66135ce51c668d9a1a32","url":"tw_stocks/00703.json"},{"revision":"ebc7deb807e9453bb9526a8ea038b9f9","url":"tw_stocks/00702.json"},{"revision":"6c57c81141fcf8af7c077b02aaa23124","url":"tw_stocks/00701.json"},{"revision":"21f3cf0b12904d36400acbfe37fea3a7","url":"tw_stocks/00700.json"},{"revision":"3ccb96a00cc534535c3ba0da2766ad19","url":"tw_stocks/00693U.json"},{"revision":"d1ef34810a05328f025bbe5b20517d54","url":"tw_stocks/00692.json"},{"revision":"eebd57f23d37be8a980acc5161208a73","url":"tw_stocks/00690.json"},{"revision":"ec23821801968ad88c29b729541ffd5d","url":"tw_stocks/00689R.json"},{"revision":"fe9a70b282eb4df1f059fcba8b2d27f9","url":"tw_stocks/00688L.json"},{"revision":"c65cadc45e14c8652149d8dae6a8f5dd","url":"tw_stocks/00686R.json"},{"revision":"37ba48d6e31bd70f5ca814b99fa0cf5f","url":"tw_stocks/00685L.json"},{"revision":"3ccec64cba8d1dfac7ed3009580d5047","url":"tw_stocks/00684R.json"},{"revision":"7ec39c169da3fad34e0984c75f9e0481","url":"tw_stocks/00683L.json"},{"revision":"874655ae3e887b48e8b2b3ea03d0a4d2","url":"tw_stocks/00682U.json"},{"revision":"82593cbe319d462835c5a0dad401ef10","url":"tw_stocks/00681R.json"},{"revision":"5c3445a939aafe094ec3a09aafe69d4a","url":"tw_stocks/00680L.json"},{"revision":"9629dac30629a3ea3df30c64809d64de","url":"tw_stocks/00678.json"},{"revision":"8ad1724b2271e1006a14ae5d251e22f4","url":"tw_stocks/00676R.json"},{"revision":"43555eceeed331ad732dc9d5451e2975","url":"tw_stocks/00675L.json"},{"revision":"38f3280eacf0a2024da960cf84a0d5cc","url":"tw_stocks/00674R.json"},{"revision":"d66f4b97cbfb9f671ff3ca3e80ae48b8","url":"tw_stocks/00673R.json"},{"revision":"f9cd5aef2dca56e44cf769fa104c3dff","url":"tw_stocks/00671R.json"},{"revision":"4851631e6d63b0f49f838371acdd35e4","url":"tw_stocks/00670L.json"},{"revision":"05b0d31f2b5c7d36c25673e6377a6bf5","url":"tw_stocks/00669R.json"},{"revision":"4526a79b512b4b1e23b31565f38607e0","url":"tw_stocks/00668K.json"},{"revision":"47bbb9de01b5c4c82c9687af61169e96","url":"tw_stocks/00668.json"},{"revision":"be32b574d2d9fd47036faab655006dcd","url":"tw_stocks/00666R.json"},{"revision":"c7d14e09e6d40236b25a6bdabd20d046","url":"tw_stocks/00665L.json"},{"revision":"1d87051ef0068799f58f75a5dbcf7b4d","url":"tw_stocks/00664R.json"},{"revision":"e9f89ac27542b4061965457866d085ba","url":"tw_stocks/00663L.json"},{"revision":"63ebd4fcbde1df3647cffd7d138f9b96","url":"tw_stocks/00662.json"},{"revision":"677aefdf65b3d7fbbe6f0534c9916992","url":"tw_stocks/00661.json"},{"revision":"1f2de34a4b02a3d94e211178c0e1646a","url":"tw_stocks/00660.json"},{"revision":"8ea79d892d10d8383b00f2984091762e","url":"tw_stocks/00657K.json"},{"revision":"df8f38d22720029df38e78f30189c12c","url":"tw_stocks/00657.json"},{"revision":"3c35921a4df056894f3b363b3ddf8016","url":"tw_stocks/00656R.json"},{"revision":"07621bac0be94d971a09694d5c0ed056","url":"tw_stocks/00655L.json"},{"revision":"91201af35ceca0feb90573ef35f4262f","url":"tw_stocks/00654R.json"},{"revision":"1d0f2d897cf6bad971d51335158a6cd2","url":"tw_stocks/00653L.json"},{"revision":"c17706cd8620eaf4514f879b791412b5","url":"tw_stocks/00652.json"},{"revision":"702c88647f9557d2ff4afcccd8243673","url":"tw_stocks/00651R.json"},{"revision":"2061a7da2d035f824e96cc06b3a499b9","url":"tw_stocks/00650L.json"},{"revision":"b907ea83f40a5534c260535592101232","url":"tw_stocks/00648R.json"},{"revision":"045dff5a190092bac26bf3b0a1844785","url":"tw_stocks/00647L.json"},{"revision":"8f2ead776fe936fb1b6d942cfc27f5f8","url":"tw_stocks/00646.json"},{"revision":"98dc9bb35c4f47bae48f6a3367be633a","url":"tw_stocks/00645.json"},{"revision":"f0b4a3a1eb4452cf30b33b92367194f3","url":"tw_stocks/00643K.json"},{"revision":"742344d3a685424d9f5cdebe0270390f","url":"tw_stocks/00643.json"},{"revision":"6ecf15085064132deff1aa16237e0982","url":"tw_stocks/00642U.json"},{"revision":"dcc4beb34cbff0132470a9e455faa725","url":"tw_stocks/00641R.json"},{"revision":"6eaab4ecf236cfb8bcef3606af0bc186","url":"tw_stocks/00640L.json"},{"revision":"be18182ba08e42387ac313691d27abf5","url":"tw_stocks/00639.json"},{"revision":"2b69b9db45d498dec245eb32ffc8706c","url":"tw_stocks/00638R.json"},{"revision":"8534cb06d4d91dac8e22c5f09dd452a7","url":"tw_stocks/00637L.json"},{"revision":"715270dee8a17397de9df9123ad66cec","url":"tw_stocks/00636K.json"},{"revision":"9298b2232d64f98fd11e18f16d09195d","url":"tw_stocks/00636.json"},{"revision":"84797a5bba1406b8ac0f7a4cd0218d72","url":"tw_stocks/00635U.json"},{"revision":"85562972be0755073aeceefca12c0059","url":"tw_stocks/00634R.json"},{"revision":"5d7f3a3e618d8af6added4532495df73","url":"tw_stocks/00633L.json"},{"revision":"813c855adc1930d480ceb658e3976ebf","url":"tw_stocks/00632R.json"},{"revision":"6c1820e6a6bb72d8ff83d2449196dde0","url":"tw_stocks/00631L.json"},{"revision":"053461186a7b6486aef353c04a597c32","url":"tw_stocks/00625K.json"},{"revision":"0fae9e03ae42cb1762311ceb658b2006","url":"tw_stocks/006208.json"},{"revision":"65c86d01842d7bcbd1eab1cd96b676d0","url":"tw_stocks/006207.json"},{"revision":"226d0712e5f538a285d4f1c92664391d","url":"tw_stocks/006206.json"},{"revision":"907851156cbc3d05c73a6587fbd2b5d2","url":"tw_stocks/006205.json"},{"revision":"237ff3fa0f4d8a9a80c13f619b713682","url":"tw_stocks/006204.json"},{"revision":"1dc43b19bc78b8c077086b218f399f3e","url":"tw_stocks/006203.json"},{"revision":"f2e8a428008428c20a407c42e5b00007","url":"tw_stocks/0061.json"},{"revision":"a8730fcf4fddf0ca19c6a6748e9692e7","url":"tw_stocks/0057.json"},{"revision":"783ce93cb14e3cb82a3ebb8bf1d67f80","url":"tw_stocks/0056.json"},{"revision":"8a84b594e741507659c0ed4db0b067a5","url":"tw_stocks/0055.json"},{"revision":"4270db9dd7a6683d90a2a2222506ed53","url":"tw_stocks/0053.json"},{"revision":"ba780e726193d9f06b281df49423ee44","url":"tw_stocks/0052.json"},{"revision":"af28b741c55fed27d0a4aa202311fd86","url":"tw_stocks/0051.json"},{"revision":"234cb5465d19e300e32203c9c090a011","url":"tw_stocks/0050.json"},{"revision":"9946ad093960dacbfec9e2d8204e424a","url":"tw_stocks/00407A.json"},{"revision":"f1c7d146c0dd50a8881dd0866bf2049b","url":"tw_stocks/00406A.json"},{"revision":"dd5bf1d3165172115fde3c6f42236c93","url":"tw_stocks/00405A.json"},{"revision":"ee11a3f338bb1934e47aa0da43d3313d","url":"tw_stocks/00404A.json"},{"revision":"ce24dc37cef397a17626fbd85e6eb141","url":"tw_stocks/00403A.json"},{"revision":"6845b3d3e0a95e9f9fd46327defc52bb","url":"tw_stocks/00402A.json"},{"revision":"68bae30e2e4f350524f1e420a613a8cd","url":"tw_stocks/00401A.json"},{"revision":"b3b58108d66b7dd38692b35136236187","url":"tw_stocks/00400A.json"},{"revision":"39b38a5ac4d3075d12c2f7130e2d3c5c","url":"subscription/callback.html"},{"revision":"ced80310b12244718da1b391b8086db5","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"44a284a59db23e3045386957f48c3362","url":"financial/rebalance.html"},{"revision":"dc094efccf12d8b2ad982645ffe35780","url":"financial/cashflow.html"},{"revision":"da414f64f29ac29e10f5194a33b83e46","url":"financial/balance-sheet.html"},{"revision":"7a22ec498712c7ccebafe6b6c43b036b","url":"finance/tags.html"},{"revision":"513f24d018297bb102de19d1f8361e65","url":"finance/finance-section-created.html"},{"revision":"25e76254d4dd58f63c8b11448568bc5f","url":"finance/authors.html"},{"revision":"616ec5d7509095ec197ae95903117cb8","url":"finance/archive.html"},{"revision":"e98d8201da1bffc2d275cbbd882ae6e1","url":"finance/tags/finance.html"},{"revision":"c9ba6db723e8606d4d386eca15dbb3bf","url":"finance/tags/announcement.html"},{"revision":"b68ff838143bdb457ae2205fb8de8fb7","url":"docs/tags.html"},{"revision":"636845961dec819f361edb978b6d1c9c","url":"docs/intro.html"},{"revision":"2d7ad6028db01fea757cdb28c2268880","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"93819fd1cc44d34b76174f589174e0f7","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"82c74ad4d665adbea336d046009a5ee7","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"b0c351856bbbeff8d28eb62adf955016","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"59fdb47578313da5968e191f4b519477","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"dcc02a97166b913dd683e3fd387a4011","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"ef6c8d395607535302686d3573e289d7","url":"docs/tags/黑箱協議.html"},{"revision":"6db68a3536eea16340b37b2710f6e28f","url":"docs/tags/養成.html"},{"revision":"e3aebd992df725341242af5aff4916fe","url":"docs/tags/資料安全.html"},{"revision":"2085ce3812073071dcdd6bf32437d6a7","url":"docs/tags/經濟循環.html"},{"revision":"e8faac39ed311908598e48be0b7c7a46","url":"docs/tags/百科.html"},{"revision":"f33b56c73fdb2fb5f712baa79caa0401","url":"docs/tags/模型控制.html"},{"revision":"997681835ab2208e9bd812db66431832","url":"docs/tags/數據標準.html"},{"revision":"3d7bf5a87455181ef944271091071d1f","url":"docs/tags/接入規範.html"},{"revision":"f9a26dc159f14eaa049a0b673f91cebf","url":"docs/tags/指南.html"},{"revision":"73fc0bf474a53b9674d63e613795fbfd","url":"docs/tags/技術哲學.html"},{"revision":"e4ea514042d796a0e5c9d88e4f9f250a","url":"docs/tags/技術史.html"},{"revision":"3275e69d3c5ccef1a30ba8ebda9d8834","url":"docs/tags/戰鬥系統.html"},{"revision":"5e55a231c534a96cb122cc22cb0564ef","url":"docs/tags/專案管理.html"},{"revision":"70f13f2db842182590ee056dc3c67a93","url":"docs/tags/安全架構.html"},{"revision":"15cbd43f1330dbd3265b805e3d76c7c2","url":"docs/tags/安全協定.html"},{"revision":"5b0c5c56b276dc3409c5838d9d8470c4","url":"docs/tags/外部開發者.html"},{"revision":"52ce2bc6b56edb46631e9837ea395f4f","url":"docs/tags/商店.html"},{"revision":"3c5b819252444043b5d5ad1de90cb539","url":"docs/tags/去中心化標準.html"},{"revision":"54d9b9ac3df808ae850ba6dc36ba9219","url":"docs/tags/去中心化安全.html"},{"revision":"f9542c012f44e9c8e0c499d296a605e5","url":"docs/tags/去中心化.html"},{"revision":"f388314f1265cac065922077da74f023","url":"docs/tags/top-p.html"},{"revision":"b8ad20ad6f04e5d682da84077077fc77","url":"docs/tags/tokenizer.html"},{"revision":"6b74aab1e307e075ca365446d0bf3b60","url":"docs/tags/temperature.html"},{"revision":"6c51f8c55bd8fecdea3547884e9febdd","url":"docs/tags/technical-docs.html"},{"revision":"1288da08be7af175a6d3a68c61296ac2","url":"docs/tags/nlp.html"},{"revision":"ebefa0f5ab41f06e98bc55ea08d3c7f0","url":"docs/tags/llm.html"},{"revision":"268a3aae5018cadcfca95bd3e09fd608","url":"docs/tags/git-hub-copilot.html"},{"revision":"f7c04fcffe546b55cff2a3dd0bb57c83","url":"docs/tags/generative-ai.html"},{"revision":"82636d365a961a8e5c76ebd9956bfc23","url":"docs/tags/eip.html"},{"revision":"ba457bca6ac732a2eb532a9ea5769031","url":"docs/tags/development-tools.html"},{"revision":"5aa0ca0275d53ed9322c52cd340fca6e","url":"docs/tags/cli.html"},{"revision":"46c24fba23caa57b83e72d8b9cb37b95","url":"docs/tags/claude-code.html"},{"revision":"5929a1584e63967e58b7c371e60880c9","url":"docs/tags/bpe.html"},{"revision":"70b51497aa017758e51a7a07767c0336","url":"docs/tags/automation.html"},{"revision":"8213bb0a264e213b91620f94904bd99d","url":"docs/tags/ai.html"},{"revision":"c4de9254bddc82f79ce039dd900b9b9f","url":"docs/tags/agent.html"},{"revision":"587ea88281a93bd05abd95023c858a2c","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"1de2611f4de34065aa67ad355932cff1","url":"docs/skill/gemini-skills.html"},{"revision":"c27b948737b77570efa629f71a64e32a","url":"docs/skill/container-builder-skill.html"},{"revision":"7654dc2bfbc204a2a3cc6c05749f0552","url":"docs/skill/claude-code-skills.html"},{"revision":"db996eea3c7cdc922a3b8d2f702ce97a","url":"docs/python-workshop/python-init-file.html"},{"revision":"ebac40e39009088b8c233c0607cd7811","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"3571f73bd25f35922db86d1c29cf0f74","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"7b7c379a5801adb2963d511bf0d7b7f9","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"b9836558f0ac667014527a2a95155764","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"ea23e0c9aca16d1e485ed02621ba7ea9","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"a267003e1b612474f796678daca435f1","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"04bcc2b9e62b022444660d9a2798c6d4","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"fd3824914ab136f2e3e2a5f965d4e6b5","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"44e1ef10702c1af5c6e3c7b706af20a7","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"9c4904da0dd076812c44c27530ed32a8","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"6e6bfecfab2421291930857e3540d5f7","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"7bb4724b117ea349fb19882adfc86085","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"0720d37b48cbe3ed0eb4f9be454b38a9","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"446c20414e455b129c4d63383f4896ff","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"2437efdbdb91a5a7983aa0b4841bb73a","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"c5e7724575b3c74e86d2343b2f479536","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"bb98c96aad12a9aff3857dd2f2403594","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"f468b1b8b381b654f4f3a28263e441bc","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"8de253b5a311c6c25c354c9dde339509","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"e6b137023ae1ca5350e747f5171d5b8c","url":"docs/claude-code-series/skills.html"},{"revision":"380b15822d4039cfa99301039900270f","url":"docs/claude-code-series/monitoring.html"},{"revision":"92dc1622ebeb3f7eaed1fedc9a4625d1","url":"docs/claude-code-series/getting-started.html"},{"revision":"304ad577413b118a1fa416717a9e824c","url":"docs/category/遊戲規則與手冊.html"},{"revision":"167527d6a506b2041570c63680f84548","url":"docs/category/發文-skill.html"},{"revision":"31c943b4ec893fb5a351ea97bb63fbbe","url":"docs/category/戰情室元件-skill.html"},{"revision":"eb71a7095b8cd7270beb327f33618a9f","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"843df93afe5b5cf96a1db4f5476bed8f","url":"docs/category/skill.html"},{"revision":"0b40708f278812c7380fddc0e5fcea0e","url":"docs/category/python-workshop.html"},{"revision":"a465144e26c3f759149bb684fbfbe6a5","url":"docs/category/egg-pet-philosophy.html"},{"revision":"08844b1e5864d0a4c8c724e59e5eb5d3","url":"docs/category/claude-code.html"},{"revision":"41c17f1d5cce86f079d8a95346bf11b9","url":"docs/blog-skill/news-rules.html"},{"revision":"4b80337d69a017a3122efe3000162625","url":"docs/blog-skill/history-rules.html"},{"revision":"f8d2ef52ad44a397bcf7c3adc46de9ab","url":"docs/blog-skill/finance-rules.html"},{"revision":"bd8a79175bbe34dab842a53feb5e549f","url":"auth/callback.html"},{"revision":"7835fe2979abb1e2a3faec6921ad5187","url":"assets/js/runtime~main.32118672.js"},{"revision":"3406c618ffbe018bee39b27b387e8116","url":"assets/js/main.784e29a1.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"302cf557fd37dc6f067ad8fc82130f17","url":"assets/js/ec1e3285.e643ac77.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"184b78988f932b1af3d291646cacd98b","url":"assets/js/e88c4a9c.2a54753d.js"},{"revision":"341c4e2865e9fd86e613d8c15ec55e6d","url":"assets/js/e86a5a75.e1f62196.js"},{"revision":"10e11f8033e0f6ecbabc5b2508fc0512","url":"assets/js/e7f07728.93349d86.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"2793d857287363eede2eb38b359ce58b","url":"assets/js/dfea6eb9.e4d7657a.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"a3685e9d5ec164b14517c9b9eb7af37f","url":"assets/js/dd5b562f.8b86caaa.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"003c53e6c42f98fb95b736109a6b71df","url":"assets/js/d1fa896a.3aab5290.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"ce893cd3c5d2baf4291078308252f0ec","url":"assets/js/cc221b30.53e27a9b.js"},{"revision":"50f0c4a24fe84c9adef52c848eede125","url":"assets/js/c9add68e.a87756c7.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"d6594b241fbf407fdb21285b27c83925","url":"assets/js/b95eaafa.bd514a92.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"a1c2866090c1ecb5f6e47f79423beaa7","url":"assets/js/b283ca86.09af1e2f.js"},{"revision":"9fa990da6b74e72392fab680be4c0f11","url":"assets/js/b2814407.1e60d27b.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"c1665a10508d616c6be98544cd2184ec","url":"assets/js/ac590df8.9deb5772.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"fbaca4471e30785e324f369bf752aba0","url":"assets/js/a71ba949.a69dbbe8.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"11148ae37d8b17ed458aff02a727edd2","url":"assets/js/a6038fd8.66d966f4.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"ff9056d161cb9777ac3f6b8f11b58bcd","url":"assets/js/9adafc71.72862d06.js"},{"revision":"dbc6f723b3c39df8d9094023c82275c7","url":"assets/js/99d3b34a.62dcac92.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"b8d8041649b88ddae303f119b1caba45","url":"assets/js/98831978.e2e374cd.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"4ced61e1ca2573d287f2c09d4066c4f7","url":"assets/js/923ed0b3.d3f7de89.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"bc815add81ed6b1bcc3a628e1d79fab0","url":"assets/js/8c20996d.201185f3.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"a80fd9d8c84555a57d560f397f533113","url":"assets/js/853ca2df.4b014490.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"fb34cb4c7dd1618cb31541ac0fa66e6c","url":"assets/js/7fbc1a25.bf2a54ba.js"},{"revision":"33315c3da81745126b304bd9d1f9e29e","url":"assets/js/7de88436.0443eea5.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"c46801f7bbe16c9fa9196b5d1d1ebd94","url":"assets/js/7ce5d7a1.f620950b.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"e22dd3da86a8707263e90fb41a83a161","url":"assets/js/607acb04.52969f19.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"bf0946a72e7c038832d63e0e5076b6e7","url":"assets/js/5a762f2f.2433c231.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"311ee67dcd5696f7bfefca7bd43bbdd2","url":"assets/js/56fce896.7c0f6a3d.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"d0e648dbdf248a04c485da45d8c99fd6","url":"assets/js/54513d10.0bfbfaaf.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"4319b8812c99ceacbf625165388565b9","url":"assets/js/4810d89a.20d9958d.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"02c68f0352a77511dcf2344f648bee73","url":"assets/js/43ea09b6.95edc566.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"24ead3b5bf1d2a33d066a3aef34327d0","url":"assets/js/41937f2e.7d0baae4.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"1cecdff4e3256d77d7b850b495673535","url":"assets/js/3ee3fb84.37f34bac.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"b29933a7142705b5b28897a3d49b6df2","url":"assets/js/36f337b1.c4ee3091.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"de760c78b53c1aedd2ae4b02bba22500","url":"assets/js/304a23a0.e3b6debd.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"9fe1727add80020b92682309467432fe","url":"assets/js/2dd9eb9e.53688de9.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"b7c32c356f784865da953c08bfcb4fbf","url":"assets/js/23d26d3d.032dca25.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"e9cc1a398326626ef90246d5e631283c","url":"assets/js/179b82d4.1f8bbabc.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"9097af1c8283885416d912874941481b","url":"assets/js/177ac620.1e60a2f6.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"267e346dbbfce7fae854d9575732a656","url":"assets/js/162c7fa0.e72d9e71.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"f6f7aed6c46f5a4c29dc8b6f5da526c6","url":"assets/js/148a248b.8a8607f8.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"cc12771144eb92cd0ea78116e760bff4","url":"assets/js/0e384e19.1ea6c2f6.js"},{"revision":"1bbe24a53994f09677b2580a577fb67e","url":"assets/js/0a3b6be8.a9953d13.js"},{"revision":"6535f3c34ae84df5a31a0d121bc12acd","url":"assets/js/0962a2ae.bb13d237.js"},{"revision":"7bdde6a3af561862153de026bc27dea3","url":"assets/js/0786d169.bc4fbcff.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"824951e69d8ed0b1df109c4737eff138","url":"assets/js/02366042.c57ce76a.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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