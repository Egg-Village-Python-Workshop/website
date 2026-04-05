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
    const precacheManifest = [{"revision":"c9a493351e33d77a7eb4b320ac1740ee","url":"tw_stocks.json"},{"revision":"ddea3c4fab7f152854dc8defab33e2d2","url":"subscription.html"},{"revision":"4a04f3863e560d46e7cb312aa6be1f3d","url":"quotes.html"},{"revision":"9432722a95b6bffe50bf2cc05090a53e","url":"me.html"},{"revision":"b59d0a0fa5f995596831b3df508d18c4","url":"market-war-room.html"},{"revision":"00b60f4efdbf9c1e9250ec7195182e51","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"c216efc93c5ad7a58f00ad8fb8f4b1ea","url":"index.html"},{"revision":"0072c6527184211b6dba717f159affde","url":"games.html"},{"revision":"1fa67d2d140bf5f41d40193951374d5e","url":"finance.html"},{"revision":"5a1efaae51d7d09016e4622f9c5f6830","url":"feedback.html"},{"revision":"451257ed0d5a9566aca3e6d765216825","url":"404.html"},{"revision":"74a47f16bb5ca3dfad10f492a4f287e2","url":"tw_stocks/9958.json"},{"revision":"66fcf57404e08a9e79ad018854ff821b","url":"tw_stocks/9955.json"},{"revision":"f54a153e4f29c7c3ecd1bb9dac44ac1d","url":"tw_stocks/9946.json"},{"revision":"405504790d637dce7e962604df0586f4","url":"tw_stocks/9945.json"},{"revision":"4fa2805dc2b8fbe6b5a0f17adc1a3fc6","url":"tw_stocks/9944.json"},{"revision":"90ae42f3178da4aa5206566be6d7767b","url":"tw_stocks/9943.json"},{"revision":"46182fa2bdc9908bfdde38725103addd","url":"tw_stocks/9942.json"},{"revision":"cfff7254d595ebf8864df67e033399db","url":"tw_stocks/9941.json"},{"revision":"9c5f8b2a3f4f4598733bfcfc22e0e483","url":"tw_stocks/9940.json"},{"revision":"5c3403611ba6986f4db1953b12029a5b","url":"tw_stocks/9939.json"},{"revision":"346de9c1ec12952518e730f360992e9c","url":"tw_stocks/9938.json"},{"revision":"4acf0bfa304b324924d768dcbd8c8603","url":"tw_stocks/9937.json"},{"revision":"93c8a524083c4b24c7af0a0e8a842d3a","url":"tw_stocks/9935.json"},{"revision":"b481066f294f91c12bf2053711884b94","url":"tw_stocks/9934.json"},{"revision":"2a3e41a8e9e162436bdac1eab500798d","url":"tw_stocks/9933.json"},{"revision":"801adf381a7c311a5a7d155abca1d5f1","url":"tw_stocks/9931.json"},{"revision":"cf8d57ef301ad20c6ee8ce61a4a24b42","url":"tw_stocks/9930.json"},{"revision":"aa847d8c21f089af3c2e2ebfb43ca419","url":"tw_stocks/9929.json"},{"revision":"55244b0743b5d142c82558117796f4af","url":"tw_stocks/9928.json"},{"revision":"ee731de9e2992901cb909fe67bf71eca","url":"tw_stocks/9927.json"},{"revision":"1af8b278ea009ec6ecf98f7ab10bdcc0","url":"tw_stocks/9926.json"},{"revision":"32dfdd68483ca13c580d8ea77107a3af","url":"tw_stocks/9925.json"},{"revision":"fdce744f573f37d0e25261de62807817","url":"tw_stocks/9924.json"},{"revision":"a2dd05c593f831b432c11156af6d6740","url":"tw_stocks/9921.json"},{"revision":"bd6b72b365d13667a4c2241914dcdcb1","url":"tw_stocks/9919.json"},{"revision":"761431a0d121d9e3e77a054a550c8058","url":"tw_stocks/9918.json"},{"revision":"d8ad06ef9546ac279ee1c62080d6a49c","url":"tw_stocks/9917.json"},{"revision":"145e1d7daf5afe87cedefc588dfb0e53","url":"tw_stocks/9914.json"},{"revision":"4ea2f12a4c9a391073c6fad1fd5c4bc9","url":"tw_stocks/9912.json"},{"revision":"ef02b055fb1fdbc9f713e3398d54624e","url":"tw_stocks/9911.json"},{"revision":"990bf9c56f76db7a7978070bbea578a4","url":"tw_stocks/9910.json"},{"revision":"47040d57c104f2fb857b5b9faeb36b45","url":"tw_stocks/9908.json"},{"revision":"7ffc28f37d7b9564544534f906129b16","url":"tw_stocks/9907.json"},{"revision":"5a5db179424e50980751b84d3dca30bc","url":"tw_stocks/9906.json"},{"revision":"1b18280e427c518e651eb6d098e5a91c","url":"tw_stocks/9905.json"},{"revision":"850413fbd5b5d91ccf6e470399d4e1d6","url":"tw_stocks/9904.json"},{"revision":"f1cf960865ec5bcb293f562bc4b14ce2","url":"tw_stocks/9902.json"},{"revision":"cb032077012acb749037f38f578d8980","url":"tw_stocks/9802.json"},{"revision":"a44fa4e4caa268d17b3485d4f4b31382","url":"tw_stocks/8996.json"},{"revision":"49a7e1509153c8c9777b1da11962bd33","url":"tw_stocks/8940.json"},{"revision":"71a532840641b9fbb8f39d137af4b1d9","url":"tw_stocks/8926.json"},{"revision":"2cb63a8d9e4e320380e9f176ca00f617","url":"tw_stocks/8499.json"},{"revision":"91b56092142356c0ae9de8ddb50d3c69","url":"tw_stocks/8488.json"},{"revision":"0b8e09e5a41fd28b2166c861914478fd","url":"tw_stocks/8482.json"},{"revision":"c795d98058686a2dcbb226f2ae111368","url":"tw_stocks/8481.json"},{"revision":"b4fa2190a60983631712d74db7d1d261","url":"tw_stocks/8478.json"},{"revision":"0d9994079855c21ddc4dc05288ff0278","url":"tw_stocks/8476.json"},{"revision":"d6322cd1931bb38aec4aaae487bff6a3","url":"tw_stocks/8473.json"},{"revision":"da08b1600f6cbeae60bbc171edf98d8f","url":"tw_stocks/8467.json"},{"revision":"7a547612404d3f43d3246de5710ae475","url":"tw_stocks/8466.json"},{"revision":"1772cf195be1b3244507ad9c412d4e23","url":"tw_stocks/8464.json"},{"revision":"8928c574535840eacabd126533db7fe2","url":"tw_stocks/8463.json"},{"revision":"c42caab19d66435f524dc21359cc26c1","url":"tw_stocks/8462.json"},{"revision":"2f0cf414c452309bcfc67264510851a7","url":"tw_stocks/8454.json"},{"revision":"63158c7a79920179ba0d48866da51fa9","url":"tw_stocks/8443.json"},{"revision":"ea1a460285b0dc7746bb668a1ef81e54","url":"tw_stocks/8442.json"},{"revision":"4c0172c109fc25e5eb03a79a26582062","url":"tw_stocks/8438.json"},{"revision":"1c3075931f392c16dcbdbb3fba00f8cf","url":"tw_stocks/8429.json"},{"revision":"ee0bfebcdaec1aa77201243fe9962777","url":"tw_stocks/8422.json"},{"revision":"f8dc64924a1e39510adaaba99c00798b","url":"tw_stocks/8411.json"},{"revision":"01caa7782de8c9f7405a1f868f737a51","url":"tw_stocks/8404.json"},{"revision":"fe9382723f9ef22333a673bfd3979d0c","url":"tw_stocks/8374.json"},{"revision":"3c68e405d14e76dbcebb61bc8efebdac","url":"tw_stocks/8367.json"},{"revision":"73e8a686e7028eb6e7f3b4557837803d","url":"tw_stocks/8341.json"},{"revision":"94b242ab49c75b4a78a2b9ed0499dc06","url":"tw_stocks/8271.json"},{"revision":"c34a32e670ea324a6a90034f4aa4394e","url":"tw_stocks/8261.json"},{"revision":"69af41c020447e16ba36e3f38b9dea05","url":"tw_stocks/8249.json"},{"revision":"e9de8b4b4487b57ed0a634edad406915","url":"tw_stocks/8222.json"},{"revision":"c3ca53b740d9f977ba374eb5a44e016d","url":"tw_stocks/8215.json"},{"revision":"86945d049a01da8c8671fc60f3b943bd","url":"tw_stocks/8213.json"},{"revision":"3899bf324afa0f4ed86018c97cd6a789","url":"tw_stocks/8210.json"},{"revision":"75babf8b65c884858e5444f02c323043","url":"tw_stocks/8201.json"},{"revision":"c36710a455a53f5a041be5714c469b0d","url":"tw_stocks/8163.json"},{"revision":"c036b58f0134fdfdddb0bdef0fb06aca","url":"tw_stocks/8150.json"},{"revision":"1c93e0cf6f8a574689ee8970d4135725","url":"tw_stocks/8131.json"},{"revision":"751c2f76e3b162f92831dd7b17167c30","url":"tw_stocks/8114.json"},{"revision":"b881aff176a8df496ff3b35abc35a58f","url":"tw_stocks/8112.json"},{"revision":"3a90c3b4867cfa19438471088040cc76","url":"tw_stocks/8110.json"},{"revision":"1bfd3136a38f114fb7c13b0a6d99c7a3","url":"tw_stocks/8105.json"},{"revision":"57117a252e36589f3568a904ed159f45","url":"tw_stocks/8104.json"},{"revision":"0131632b64ff554a9a73be418102a29a","url":"tw_stocks/8103.json"},{"revision":"a65ca4336d9eb4fa2af64ff8e2203ca6","url":"tw_stocks/8101.json"},{"revision":"b32248246d0b73e02374917ab1f75066","url":"tw_stocks/8081.json"},{"revision":"fc5fd8a91da81a626d826c5c723c2947","url":"tw_stocks/8072.json"},{"revision":"1b646ec40636e6844836ebfa089342ea","url":"tw_stocks/8070.json"},{"revision":"16747630ee42bec87c88d9531b9bf19c","url":"tw_stocks/8046.json"},{"revision":"3998ad41a9d31f2b9b3b02b8d62d1d2f","url":"tw_stocks/8045.json"},{"revision":"969e76992291f2105980316c13a19b5e","url":"tw_stocks/8039.json"},{"revision":"4e08fcec19006f661adb389331645c95","url":"tw_stocks/8033.json"},{"revision":"db2dbbcc9eef644721596cfa1c1de859","url":"tw_stocks/8028.json"},{"revision":"b3a5f1e157290952e14aeca4fbd140d6","url":"tw_stocks/8021.json"},{"revision":"f52d5b08bcc14e5f67617ba63c29af81","url":"tw_stocks/8016.json"},{"revision":"e968ad482b90480ef4c1e057b8efce5b","url":"tw_stocks/8011.json"},{"revision":"3652f77d16bb902640099ad903d0b149","url":"tw_stocks/7799.json"},{"revision":"cc45eddfb09df70f13e000a0cfcfe49a","url":"tw_stocks/7795.json"},{"revision":"e9c7704fe95ca2dfd43b3eb344a327ab","url":"tw_stocks/7791.json"},{"revision":"648cdc49b9c5e30c20967a03ec1336c1","url":"tw_stocks/7788.json"},{"revision":"0a0024a86629b0241af71aa60877548d","url":"tw_stocks/7786.json"},{"revision":"c428bc9184ff51df1e9a09807798d944","url":"tw_stocks/7780.json"},{"revision":"646af6107badfcf0145a1fb939eb5ef3","url":"tw_stocks/7769.json"},{"revision":"dc587dd4c6dee1c012396937cdb903ad","url":"tw_stocks/7765.json"},{"revision":"ab19ace0f4b15ac46cdcd5a37dd69d2e","url":"tw_stocks/7750.json"},{"revision":"04a9a3a337310e77c71236a010b52963","url":"tw_stocks/7749.json"},{"revision":"d6c26d2b8e1f0de3e04e2c7dd7f80d62","url":"tw_stocks/7736.json"},{"revision":"2065ffb3ffaa878068ecc956ee1cb4fa","url":"tw_stocks/7732.json"},{"revision":"c69cf930f13d541cfe15bc9bdad1f1ba","url":"tw_stocks/7722.json"},{"revision":"fc0139062a15d282d2f6bf7f6a97ca2f","url":"tw_stocks/7721.json"},{"revision":"cb5082f6f8aa6d92b8bdc5bb05430e41","url":"tw_stocks/7711.json"},{"revision":"10a70e1bf7c799a4829b359236c8e5e1","url":"tw_stocks/7705.json"},{"revision":"dc6c900917200a9ed1ced5a85e172630","url":"tw_stocks/6994.json"},{"revision":"827a28eaf51af9eb9edfe94825f15edf","url":"tw_stocks/6965.json"},{"revision":"3859ec5bc799d4c97298b0564dd8b3e5","url":"tw_stocks/6962.json"},{"revision":"598de70ba252369c1bd4e63287808a85","url":"tw_stocks/6958.json"},{"revision":"29f22a96366e9f4b1a49f28c52f13086","url":"tw_stocks/6957.json"},{"revision":"f5cc191ed96a81dd2a622908afe376be","url":"tw_stocks/6952.json"},{"revision":"0a51f8681122372bbba66bd0adbb1ccb","url":"tw_stocks/6944.json"},{"revision":"5131640e874488495ad1e55755a4289f","url":"tw_stocks/6937.json"},{"revision":"fb3c772376cd43c8ad1b8986f2ebe573","url":"tw_stocks/6936.json"},{"revision":"7dbdbdbecf53ea0e38ee840e11a19cd0","url":"tw_stocks/6934.json"},{"revision":"62651c714ad4d36e0b57b1bd4542f58b","url":"tw_stocks/6933.json"},{"revision":"2f844ffbb053b4e0980640ee5f054503","url":"tw_stocks/6931.json"},{"revision":"a7886f12a95ff8c8c061f4b432d7afe9","url":"tw_stocks/6928.json"},{"revision":"8b066ab3ad92d92d6362fb2c2b42d06e","url":"tw_stocks/6923.json"},{"revision":"3feee8daf2d0af960a7d3fae96e2eb0d","url":"tw_stocks/6919.json"},{"revision":"a63a8763096b34b6c071d88c05e2493b","url":"tw_stocks/6918.json"},{"revision":"7e5e04f12709a36067137cccbbdfa5e5","url":"tw_stocks/6916.json"},{"revision":"1f58384f69873fbaa1890964913ca595","url":"tw_stocks/6914.json"},{"revision":"c25d20e4626ef3ddb65978480e4d52c0","url":"tw_stocks/6909.json"},{"revision":"9dc8e1ea7a45aae4d98fa6ad0aea233a","url":"tw_stocks/6906.json"},{"revision":"31c8782d8b09ac237bb15cbb9062ae2d","url":"tw_stocks/6902.json"},{"revision":"bec9f9bfa4c1f2f1a78eab1398028b26","url":"tw_stocks/6901.json"},{"revision":"43458b467dc24de21e0d7774990f9b8c","url":"tw_stocks/6890.json"},{"revision":"d9d962e769da5ce9c9115b4c0a238ffb","url":"tw_stocks/6887.json"},{"revision":"e9f4f717fe106d04049b30d07ca49392","url":"tw_stocks/6885.json"},{"revision":"c24c161d1e721760d842f81fa4f2052a","url":"tw_stocks/6873.json"},{"revision":"0304eba8c7ce882747a22491b2118644","url":"tw_stocks/6869.json"},{"revision":"3b9d8927a82189307dac42192bff6de1","url":"tw_stocks/6863.json"},{"revision":"c05b1939af6fa098206783d8f151ef0c","url":"tw_stocks/6862.json"},{"revision":"57e4a7fd3efea568a336395f05ceb4c5","url":"tw_stocks/6861.json"},{"revision":"88e03f92a2147907cf51cb793c440d7b","url":"tw_stocks/6838.json"},{"revision":"f72fbadb91c3601aa7adc7846b35c925","url":"tw_stocks/6835.json"},{"revision":"6625880734fff5621fdd9ec23752625c","url":"tw_stocks/6834.json"},{"revision":"e4cbffa72372f6e420817e4ee214f4c3","url":"tw_stocks/6831.json"},{"revision":"3ebe48a201f834d7c1a565aca99dff84","url":"tw_stocks/6830.json"},{"revision":"1883cd7bd109aca369c8a6aa9058b638","url":"tw_stocks/6807.json"},{"revision":"69e7ca162a45714a81c7bb2fa389947d","url":"tw_stocks/6806.json"},{"revision":"694795c9dc13321b0caaf2548980f25f","url":"tw_stocks/6805.json"},{"revision":"e36eeb2617002c1d9ccb3d4f24617049","url":"tw_stocks/6799.json"},{"revision":"b1a8f66762e2aabebaa7661973300079","url":"tw_stocks/6796.json"},{"revision":"b2e3efa5bc7c77c6b90a36cf52cf1eca","url":"tw_stocks/6794.json"},{"revision":"1389c7b0af4c80048f80f03ce544804f","url":"tw_stocks/6792.json"},{"revision":"9e8e96c0d8a49dbe3e85bb5502f89c51","url":"tw_stocks/6790.json"},{"revision":"b09b5eb1cc473f3d339c1c74a6b73d0c","url":"tw_stocks/6789.json"},{"revision":"f1c0cb55200102d9f692016e573fe81c","url":"tw_stocks/6782.json"},{"revision":"c5c98d8ffbbf89fcd41cb56e59fd30a4","url":"tw_stocks/6781.json"},{"revision":"ecd73940d1e1ac9187cad84195b0b344","url":"tw_stocks/6776.json"},{"revision":"a8811fde9acdd6f3dbea20451abf2f89","url":"tw_stocks/6770.json"},{"revision":"0c69ae607abd4a3e7b4f3a56c4cfe5f3","url":"tw_stocks/6768.json"},{"revision":"997f31cc62b33f0f975eaacc7531d341","url":"tw_stocks/6757.json"},{"revision":"e50b3eae159f0149aa2e4c6cfd238619","url":"tw_stocks/6756.json"},{"revision":"acac118c11a00377cbf7e27a726036ac","url":"tw_stocks/6754.json"},{"revision":"71026c9b37dd3f82397a7cd6fc1372ae","url":"tw_stocks/6753.json"},{"revision":"2c9eff4fca0243ec95f88eb15e1efc7d","url":"tw_stocks/6743.json"},{"revision":"8500dbb94c56611a71be53a5f3cd3f53","url":"tw_stocks/6742.json"},{"revision":"ec86a2bdd604110e9f719d932145789f","url":"tw_stocks/6722.json"},{"revision":"dd2dd276ba23d63fe7c9a38bbd1f995f","url":"tw_stocks/6719.json"},{"revision":"e07ac7e1df832982616cdd4ee32a7672","url":"tw_stocks/6715.json"},{"revision":"c4b5165e19cbdd176171ec30df705532","url":"tw_stocks/6706.json"},{"revision":"5e1fd776387f97858cc5509541a218f8","url":"tw_stocks/6698.json"},{"revision":"bcb7442415fc3e32d6a871c8be1cceab","url":"tw_stocks/6695.json"},{"revision":"cfa196e752b775a59f7d4beba3e98c5a","url":"tw_stocks/6691.json"},{"revision":"43f9268db389508aa763de3df2eb1058","url":"tw_stocks/6689.json"},{"revision":"59fc7ba469ef15d0f79f5e7348c91943","url":"tw_stocks/6674.json"},{"revision":"a5185ee76fd846040c5688b7af810029","url":"tw_stocks/6672.json"},{"revision":"e629ffc9978330359dce0ac0627c0c35","url":"tw_stocks/6671.json"},{"revision":"3289067274071c349074d9376649eb1b","url":"tw_stocks/6670.json"},{"revision":"c0b0e767e038eefcff952467c47a6ed0","url":"tw_stocks/6669.json"},{"revision":"99f0dfc47653c139bb28849d74f01e01","url":"tw_stocks/6668.json"},{"revision":"522beedbee1aa1c1c6f121c702491edd","url":"tw_stocks/6666.json"},{"revision":"543706a0c8a0b66e9e267a82c68f3dac","url":"tw_stocks/6658.json"},{"revision":"f24300ddf0e4b127d6cd5209da9f6fd6","url":"tw_stocks/6657.json"},{"revision":"8f7bdf8aa75a4925d33a5a86f50b3fb0","url":"tw_stocks/6655.json"},{"revision":"199b778784cc1fe74b31ef6e2c0b33d6","url":"tw_stocks/6641.json"},{"revision":"66d8843993ad77c2fb06673c6c9deaa1","url":"tw_stocks/6625.json"},{"revision":"25acdf0a6342a84daab95f133c24567a","url":"tw_stocks/6614.json"},{"revision":"7dea184c5153fda9da456705316f4219","url":"tw_stocks/6606.json"},{"revision":"b5dd43f5ebc9fe4c6a0d38c5747d7db6","url":"tw_stocks/6605.json"},{"revision":"163e43f9c8463fbd88997638ebe11b65","url":"tw_stocks/6598.json"},{"revision":"92cbb5212970e5d16f4ee0562fb9a5a2","url":"tw_stocks/6592.json"},{"revision":"66ef399511c852462d9f39c0e9ed7a1e","url":"tw_stocks/6591.json"},{"revision":"ad80730d088f544fa3bbf3cee48c7039","url":"tw_stocks/6589.json"},{"revision":"5beed22b757c6f7ad031b21b55e258c5","url":"tw_stocks/6585.json"},{"revision":"00b3466e70db87f084998a38533946f2","url":"tw_stocks/6582.json"},{"revision":"8287fb9e19b1970deb18006777360f28","url":"tw_stocks/6581.json"},{"revision":"effb85af9620bbac1eb6d8f2c405547f","url":"tw_stocks/6579.json"},{"revision":"e7b093ab464a942b392e0a6868a4df0e","url":"tw_stocks/6573.json"},{"revision":"7b85cff30b48b0da450ae8b1824f02bc","url":"tw_stocks/6558.json"},{"revision":"29d3a29dfa83e2cf291513e65787acf7","url":"tw_stocks/6552.json"},{"revision":"9063187a3c7327d23bb49628f1e23a8d","url":"tw_stocks/6550.json"},{"revision":"96af218aedb080ff0c30d8c1a7c09b97","url":"tw_stocks/6541.json"},{"revision":"25603f6bcdd4b5b5b4ce3e72d190a762","url":"tw_stocks/6533.json"},{"revision":"8204d19d3f16c9eb004e428771f3caa1","url":"tw_stocks/6531.json"},{"revision":"36bdefa5d45e2dbb2f80c7dd29b02652","url":"tw_stocks/6526.json"},{"revision":"444bc4e77f15996faf66bda0449ea431","url":"tw_stocks/6525.json"},{"revision":"dd1c7962615d6363dd4d848efc16cd81","url":"tw_stocks/6515.json"},{"revision":"8d408355ee0fd8112939f4037f4a19b0","url":"tw_stocks/6505.json"},{"revision":"360e812cf4b762e38abe8ad83b9600a3","url":"tw_stocks/6504.json"},{"revision":"867f0170790b874b88c38ce4e19866a2","url":"tw_stocks/6491.json"},{"revision":"c794d3d33c4068c53d94fcb6e13b10cf","url":"tw_stocks/6477.json"},{"revision":"490382534f1a1814b422f58edf016f4a","url":"tw_stocks/6472.json"},{"revision":"1cf000f07fa9d3b2017e57d3675d011b","url":"tw_stocks/6464.json"},{"revision":"7c9f7716c7401b588fcb2241106716a4","url":"tw_stocks/6456.json"},{"revision":"92311d28097f05d5921898380ef78007","url":"tw_stocks/6451.json"},{"revision":"b87c0a1f70302e599223a24222bd77a0","url":"tw_stocks/6449.json"},{"revision":"50a0ee3d4ee6a5c3b36e8bcac0f85531","url":"tw_stocks/6446.json"},{"revision":"73370329572560ce571e0c8dace7b770","url":"tw_stocks/6443.json"},{"revision":"36ae068c81d6ec8d7a99ca7883622beb","url":"tw_stocks/6442.json"},{"revision":"f7a46219c702450d5a9b724febf7c792","url":"tw_stocks/6438.json"},{"revision":"97aed9180650ccd8634d54d49d83dcbd","url":"tw_stocks/6431.json"},{"revision":"031eed3b2ddf957b525e353fca4374de","url":"tw_stocks/6426.json"},{"revision":"3d9b911bc508000c1825327de1fc76c7","url":"tw_stocks/6416.json"},{"revision":"bc998c2ba8ae3ce030175701ae4113e9","url":"tw_stocks/6415.json"},{"revision":"d2ace429f100d911f28654afc57b1bda","url":"tw_stocks/6414.json"},{"revision":"ad20489548a784ea591ca8dd99b7324a","url":"tw_stocks/6412.json"},{"revision":"1a8647576fbed9c0aa27bdd255d20a31","url":"tw_stocks/6409.json"},{"revision":"bd4b839e3aaf1186ba310dba977d1acd","url":"tw_stocks/6405.json"},{"revision":"d8d754fffaacbabba050cca426d7753a","url":"tw_stocks/6285.json"},{"revision":"d4731ffc64d1fd1345d9e19cfc07cb21","url":"tw_stocks/6283.json"},{"revision":"f70b5940476fe0bcba178ec5e12e8345","url":"tw_stocks/6282.json"},{"revision":"c7a68d2ac35bd1b12d9ec983942e33d1","url":"tw_stocks/6281.json"},{"revision":"eaaafc8702d401567d64a39358d612f8","url":"tw_stocks/6278.json"},{"revision":"9b93b7dfd98bf3d2f8c52d4648121b38","url":"tw_stocks/6277.json"},{"revision":"c95c8b1361d1578d1ab66959e4fd83f2","url":"tw_stocks/6272.json"},{"revision":"c4c58e17baee1d5311315dce9a11fda5","url":"tw_stocks/6271.json"},{"revision":"71c483ebcb7661feda52c30b3f23a330","url":"tw_stocks/6269.json"},{"revision":"44e85848d23aeeecb9198ff22cf5a97e","url":"tw_stocks/6257.json"},{"revision":"c6aa967663935f1987cea2f42823b3a2","url":"tw_stocks/6243.json"},{"revision":"4ecdaecc66d4f26e410083fa04d95d78","url":"tw_stocks/6239.json"},{"revision":"bfd9560966a594fae1b6d065835d2d4a","url":"tw_stocks/6235.json"},{"revision":"8851410a5777f087ce7dabceb314ba5d","url":"tw_stocks/6230.json"},{"revision":"c2ffb64de3600f601cb81c274f078ec8","url":"tw_stocks/6226.json"},{"revision":"2b654d9877ead8f1f81995332e43be58","url":"tw_stocks/6225.json"},{"revision":"ad4c6b7b8be0e4bf85b781f7d1cbe080","url":"tw_stocks/6224.json"},{"revision":"3fdc648ba79c4106a328d7c37e96d88b","url":"tw_stocks/6216.json"},{"revision":"b380ac3d62bfd918d9ba00b689e21d18","url":"tw_stocks/6215.json"},{"revision":"42a24cdb56898696598eb7d57b71c948","url":"tw_stocks/6214.json"},{"revision":"168165cbccc74ccba7bcb439a2479475","url":"tw_stocks/6213.json"},{"revision":"553a0ef766d9c22462399d360771e4b5","url":"tw_stocks/6209.json"},{"revision":"835a8184cd04528ac8109fb97c24a80c","url":"tw_stocks/6206.json"},{"revision":"883476b4bde05606027a1b2ae7f54970","url":"tw_stocks/6205.json"},{"revision":"cbd0b4012bbbb92ab83a6299bff4a3cf","url":"tw_stocks/6202.json"},{"revision":"0114563bb408ca714c524bf351a6006d","url":"tw_stocks/6201.json"},{"revision":"757fb32af1afceb56804474548618f33","url":"tw_stocks/6197.json"},{"revision":"35a5aeae64628c490abee5f83554a7a9","url":"tw_stocks/6196.json"},{"revision":"4c753d63d989af764be28e3addb2c71a","url":"tw_stocks/6192.json"},{"revision":"d62725c8ea72809db127f6693142751f","url":"tw_stocks/6191.json"},{"revision":"f59f38db5d9d81d91960d62d6038d7a1","url":"tw_stocks/6189.json"},{"revision":"94892e2665414a3ba53462dfa51c3314","url":"tw_stocks/6184.json"},{"revision":"53342510fdeae2d2194f350a95ceff30","url":"tw_stocks/6183.json"},{"revision":"42e76c894414323191bc5c69041d2686","url":"tw_stocks/6177.json"},{"revision":"c5b88b085b09c324c8530b7d6366435f","url":"tw_stocks/6176.json"},{"revision":"e6baa913e0a04e13d31b85ba1ca7b62b","url":"tw_stocks/6168.json"},{"revision":"6b5a401599825104cb88026432ec21d7","url":"tw_stocks/6166.json"},{"revision":"f1ece29ddba88a57887ce99e0baba13c","url":"tw_stocks/6165.json"},{"revision":"6e0895fa0e892968eaf2f3fb243de183","url":"tw_stocks/6164.json"},{"revision":"3f5646a34140dc8ee62ca3b4cf570f1c","url":"tw_stocks/6155.json"},{"revision":"8d7d364f4f9adcb08e0229a1b0df9ba6","url":"tw_stocks/6153.json"},{"revision":"515fc5f9554396b9aad404d03f2165c9","url":"tw_stocks/6152.json"},{"revision":"e232953ae02c867e42a6761a1dc2a0d2","url":"tw_stocks/6142.json"},{"revision":"015d04e9cf55828a779487770d82ca18","url":"tw_stocks/6141.json"},{"revision":"32e9a40108ec5495094fc64b4e550794","url":"tw_stocks/6139.json"},{"revision":"e88dd1bb578268f5690dbeab6c734bdb","url":"tw_stocks/6136.json"},{"revision":"4f8ea0c81924d75b8941f6d2b35d41bf","url":"tw_stocks/6133.json"},{"revision":"dbd6653a3b6511c375fa8a4a85bf47e8","url":"tw_stocks/6128.json"},{"revision":"87055717e7ab8d3d00fcdb9995a2a0c9","url":"tw_stocks/6120.json"},{"revision":"8ea1c1c23f7baa560b431b432d7e1bf2","url":"tw_stocks/6117.json"},{"revision":"6a57ff0dfe6d5ffa77307e769903b398","url":"tw_stocks/6116.json"},{"revision":"feb9b00ca04826bb3d76b5b54f4ef62d","url":"tw_stocks/6115.json"},{"revision":"8289546a1fc9bcd89c5aa4b78337e5a7","url":"tw_stocks/6112.json"},{"revision":"f557311ff6ab0deee408ce77f9969a8e","url":"tw_stocks/6108.json"},{"revision":"cff6659724ff56ea90354c15fb95b231","url":"tw_stocks/6024.json"},{"revision":"1cbaadf37e9c1d72c7786574a731e8e6","url":"tw_stocks/6005.json"},{"revision":"abd4c8d01bad06cf255fbe40647305ec","url":"tw_stocks/5907.json"},{"revision":"38785e9de537e9b3a7d7a20de6f1b815","url":"tw_stocks/5906.json"},{"revision":"3e9afe05a7239c94688fae9ae51dc099","url":"tw_stocks/5880.json"},{"revision":"add4da335cf06f07b96faf8232a244f5","url":"tw_stocks/5876.json"},{"revision":"5cc69fcc10de11f1f367c8daa2ee8d64","url":"tw_stocks/5871.json"},{"revision":"ca67069e3b5d77dce2dcb774d0796630","url":"tw_stocks/5706.json"},{"revision":"06f70770ce9bd14cacc5633bd983297c","url":"tw_stocks/5608.json"},{"revision":"3c7071df1b339ad75e3e05ae3ce8bca0","url":"tw_stocks/5607.json"},{"revision":"3a7c9e4a6893ed850a3f3329794483f7","url":"tw_stocks/5546.json"},{"revision":"398e0d410f46957163328b435f96d151","url":"tw_stocks/5538.json"},{"revision":"fb1947d48e2ac53b16c47dd8fb3d34d9","url":"tw_stocks/5534.json"},{"revision":"1d160488c85a41ce39713ed5435277dc","url":"tw_stocks/5533.json"},{"revision":"01f953dfa382eadd6f33412580db1df4","url":"tw_stocks/5531.json"},{"revision":"50d529762a34e0c82c68bd69f85b7f3a","url":"tw_stocks/5525.json"},{"revision":"6a47f618f8863b7c552590c18495a0c7","url":"tw_stocks/5522.json"},{"revision":"7e6546143e9740bbe409b6b29c87cfb3","url":"tw_stocks/5521.json"},{"revision":"8a25dca2266038a0854b910864347c66","url":"tw_stocks/5519.json"},{"revision":"3484f1d17ae1f1818a357b7560b5e9be","url":"tw_stocks/5515.json"},{"revision":"212827055f79807c31e968111a5cbdbe","url":"tw_stocks/5484.json"},{"revision":"25482c4f838480ad2df8e3913eea8be3","url":"tw_stocks/5471.json"},{"revision":"1d94fbcd38c3c731ea4f6f94f11aa955","url":"tw_stocks/5469.json"},{"revision":"c3fede8116d19e4d9ededf898cce4be5","url":"tw_stocks/5434.json"},{"revision":"ddac34479d82ef858188988dd36817b0","url":"tw_stocks/5388.json"},{"revision":"fbd018258aa54e6138d893ceebecd5ac","url":"tw_stocks/5306.json"},{"revision":"28e8909343c7e843846241e654ca6dc7","url":"tw_stocks/5292.json"},{"revision":"1967722c7e4c151b9a31a1ef95635f54","url":"tw_stocks/5288.json"},{"revision":"037a155b8779ebb6929c3c787bbb43e3","url":"tw_stocks/5285.json"},{"revision":"cc442cef665f003dc53267b228ecdfd9","url":"tw_stocks/5284.json"},{"revision":"64b1214cbfa356746f56a6e970628a8b","url":"tw_stocks/5283.json"},{"revision":"7c511acff4bd3ebae7ada805af8d6719","url":"tw_stocks/5269.json"},{"revision":"36da79ec52ea135165aeca9be4880562","url":"tw_stocks/5258.json"},{"revision":"bb68ed6ca585ff215934dadc68552618","url":"tw_stocks/5244.json"},{"revision":"e093b52e1efe76441c69c50b62fb9ff6","url":"tw_stocks/5243.json"},{"revision":"6a681eac599d3e8c4e62f347eb8f54c5","url":"tw_stocks/5234.json"},{"revision":"2d69a1f1c45d30b4f1d643154b3a8fa6","url":"tw_stocks/5225.json"},{"revision":"b0e6aa95392e06706cc1f443c52467b6","url":"tw_stocks/5222.json"},{"revision":"c27b2d89f2820dadb94c247bb4910593","url":"tw_stocks/5215.json"},{"revision":"a33b94b2cce1bd52642cbfa032b11506","url":"tw_stocks/5203.json"},{"revision":"de13f6ad04b0f2be0703f4f371b90290","url":"tw_stocks/5007.json"},{"revision":"7cdc9fd9c8ccce6e07250f4719ef7ad6","url":"tw_stocks/4999.json"},{"revision":"96714c689284eb33802062e64d517775","url":"tw_stocks/4994.json"},{"revision":"c569b0570631280c39e65ddceef9418e","url":"tw_stocks/4989.json"},{"revision":"a84b92bbfab5dd9f08554323b5465f74","url":"tw_stocks/4977.json"},{"revision":"11fcb691796f0eb2f73b44c35025c004","url":"tw_stocks/4976.json"},{"revision":"cd5000cf84668430dccfb2c550e301c4","url":"tw_stocks/4968.json"},{"revision":"3ea71a72f9f636d621edc990abc8c873","url":"tw_stocks/4967.json"},{"revision":"d88f61ddd6bd25c876fcb750e6661ea3","url":"tw_stocks/4961.json"},{"revision":"fe7f2490912e830a08732ea821a76761","url":"tw_stocks/4960.json"},{"revision":"acc328efe0668350c78eebd6fcf9dcb2","url":"tw_stocks/4958.json"},{"revision":"dc0c8f0f4ab235a398fcf3bf431a890e","url":"tw_stocks/4956.json"},{"revision":"cb848baeacf65f756668ba205323dc3f","url":"tw_stocks/4952.json"},{"revision":"d915a5090e2ef1123083cc0c4be1fc72","url":"tw_stocks/4949.json"},{"revision":"b8017ac5b41e3e8dae66955669b2337d","url":"tw_stocks/4943.json"},{"revision":"5e755f2a16d9ac55e5e96a9f8ebd14e0","url":"tw_stocks/4942.json"},{"revision":"75d89a5f80c57fd008cfea344a06d508","url":"tw_stocks/4938.json"},{"revision":"0beb470d7f05501ff9938df637737966","url":"tw_stocks/4935.json"},{"revision":"f57b7ebbb1ec79c9c0d085e039d5a03b","url":"tw_stocks/4934.json"},{"revision":"414a75bc59652e5ff33a3ebb16dfa488","url":"tw_stocks/4930.json"},{"revision":"e77ac68deace23740fdf019171aa2854","url":"tw_stocks/4927.json"},{"revision":"fb8fe52bd9e658ac5b9d1ebd0d1b6cd6","url":"tw_stocks/4919.json"},{"revision":"a391f68fc5c9cec16e99566f7ee6ff13","url":"tw_stocks/4916.json"},{"revision":"7650d4a0ae070a44d2a113af6e276c69","url":"tw_stocks/4915.json"},{"revision":"bd179116bd8ed9a6821bc54d22ae5f23","url":"tw_stocks/4912.json"},{"revision":"2f1b4b3476a05e1a8e3f49a2f1b14b0f","url":"tw_stocks/4906.json"},{"revision":"2094f938f782c142603819a3524354dc","url":"tw_stocks/4904.json"},{"revision":"c6cdb5e2555c998631274ed707cf86f5","url":"tw_stocks/4807.json"},{"revision":"8d868fc138ac7639a16b4c55c62fad96","url":"tw_stocks/4771.json"},{"revision":"520b6f92c13ed3d7bc1de42723518ed0","url":"tw_stocks/4770.json"},{"revision":"1fdc8eec3f23db521a3501779502c390","url":"tw_stocks/4766.json"},{"revision":"a59c56972f9aca024647d714b82edfb4","url":"tw_stocks/4764.json"},{"revision":"0dab1548e3fa20a1be9b1d9934e05d47","url":"tw_stocks/4763.json"},{"revision":"db2780b14c36ec83df7ed780e22c25b2","url":"tw_stocks/4755.json"},{"revision":"a5fd24d897582df90c7be392f0dbf32c","url":"tw_stocks/4746.json"},{"revision":"3ccf4fe2d7772ccd53b0e0cafe2c3b1e","url":"tw_stocks/4739.json"},{"revision":"959d95899bea92e0c38ae3c40337676d","url":"tw_stocks/4737.json"},{"revision":"169c0e8dc3effd178635839fd71df0b3","url":"tw_stocks/4736.json"},{"revision":"08745832c4afe7cd4cd2bbebf88e84eb","url":"tw_stocks/4722.json"},{"revision":"658f05a736300efc94d7a45bee69d4d9","url":"tw_stocks/4720.json"},{"revision":"3d20951ee88de33ebb7f12630a204ad4","url":"tw_stocks/4588.json"},{"revision":"6d2b1c8b1737c96a470a125f62ccc3c4","url":"tw_stocks/4585.json"},{"revision":"9a3728b0f4d9a1f2a782625c87e0a777","url":"tw_stocks/4583.json"},{"revision":"6fe7f54f60b11c07292f8423b071cbb4","url":"tw_stocks/4581.json"},{"revision":"034a2a67bf32dd1d596aa430e59960e1","url":"tw_stocks/4576.json"},{"revision":"af5afee39af19b64997841ba6c7b2a91","url":"tw_stocks/4572.json"},{"revision":"e4366ac985205376b7f37a5897577d39","url":"tw_stocks/4571.json"},{"revision":"eb0e9a1c1edf0fd1ed29b8b27e61c2f2","url":"tw_stocks/4569.json"},{"revision":"b6eed1da2ada41437cc4bfbbe41b1ec8","url":"tw_stocks/4566.json"},{"revision":"6fc0a1c5a958cc0873d9a086f39923c2","url":"tw_stocks/4564.json"},{"revision":"7f6b16539b30595d807318341658279d","url":"tw_stocks/4562.json"},{"revision":"36300e2729af5e34be83895b751841c9","url":"tw_stocks/4560.json"},{"revision":"53e27b3abbf4f0b9a7967539e3e744d3","url":"tw_stocks/4557.json"},{"revision":"90e0e18b828e5d405ceb81f6d1ef20c3","url":"tw_stocks/4555.json"},{"revision":"965836d8ece3bcae2021c2d544a2cc85","url":"tw_stocks/4552.json"},{"revision":"e8d857d866c82b4813957bcafa9ecb19","url":"tw_stocks/4551.json"},{"revision":"6ee78fc71f2c5a0728f1717db2a29ea8","url":"tw_stocks/4545.json"},{"revision":"2e49ef84bacc06dbdd18b25919713a92","url":"tw_stocks/4540.json"},{"revision":"9a44dc3f81438a43977147c8512555d2","url":"tw_stocks/4536.json"},{"revision":"d62b9199f18514515ad4e145d6ac6594","url":"tw_stocks/4532.json"},{"revision":"f1dfcec53a21729d865b587687027c77","url":"tw_stocks/4526.json"},{"revision":"d9b0b54a77c96dff4a4a8f06574d4497","url":"tw_stocks/4441.json"},{"revision":"4cb8301803467c9f699e7c9f405f024f","url":"tw_stocks/4440.json"},{"revision":"1290d86f8ee4b8fb7ee4a85f9ff38c42","url":"tw_stocks/4439.json"},{"revision":"b69a531d3f1576421a1e8758ebd8bf2d","url":"tw_stocks/4438.json"},{"revision":"3a28d57a4d7582461d2ef4571bc10c5a","url":"tw_stocks/4426.json"},{"revision":"37237432938fafd6eb42a3b197e5ad4e","url":"tw_stocks/4414.json"},{"revision":"c6cab9caaf2b2e48d8ff42c61febb6d7","url":"tw_stocks/4306.json"},{"revision":"3ed93935d9e82978c727d03db3f7fa5b","url":"tw_stocks/4190.json"},{"revision":"1f71bc8887b6ceaf1eb00f305cfd391c","url":"tw_stocks/4164.json"},{"revision":"724c466e075937ea20195f2118b3a6d3","url":"tw_stocks/4155.json"},{"revision":"136364ec60e306a8392103b598f08cfd","url":"tw_stocks/4148.json"},{"revision":"6f09d6803073a5662229ea0bcc489373","url":"tw_stocks/4142.json"},{"revision":"df55ee4f74db3f3fc98de9a5710058f0","url":"tw_stocks/4137.json"},{"revision":"8fc8ab465d0982e77d85cf3acb86e9b2","url":"tw_stocks/4133.json"},{"revision":"50fb28b8c65cd720b20fcf928f7cca15","url":"tw_stocks/4119.json"},{"revision":"509779ec53990ff3af980fe3b7f19079","url":"tw_stocks/4108.json"},{"revision":"8a8cf75054fa2d05301e531bdec53789","url":"tw_stocks/4106.json"},{"revision":"6c0c1f20a3872921cb11806159c7d153","url":"tw_stocks/4104.json"},{"revision":"f78090374b5862576dd4655747714f05","url":"tw_stocks/3717.json"},{"revision":"dc78019ef2030521504cf446c4c5be3e","url":"tw_stocks/3716.json"},{"revision":"d40910a623708686315a6217574187c5","url":"tw_stocks/3715.json"},{"revision":"b9f2b5fbc861c4a0cc5e11d62c78275a","url":"tw_stocks/3714.json"},{"revision":"a52b28511e9cad5036e6ee5ad70c5fb0","url":"tw_stocks/3712.json"},{"revision":"1289036e7cf16fd44b89a110f5ac9fa1","url":"tw_stocks/3711.json"},{"revision":"be0286ca649fae947dd40c4f054e9e34","url":"tw_stocks/3708.json"},{"revision":"2e41c510adf4a23ee3af5d95be9dde3c","url":"tw_stocks/3706.json"},{"revision":"e815bb5885763016104cec5597be8cf3","url":"tw_stocks/3705.json"},{"revision":"37e985b92af7139b3cf4921f2dad5f94","url":"tw_stocks/3704.json"},{"revision":"4cd332a8375814f031162df889d1fda1","url":"tw_stocks/3703.json"},{"revision":"9603a06e4ee2a1589b0cbf151e4e32ab","url":"tw_stocks/3702.json"},{"revision":"f723beb59f9a8e37734191bb1c514df2","url":"tw_stocks/3701.json"},{"revision":"d56bad120313ccdf94ecb4143fa810a0","url":"tw_stocks/3694.json"},{"revision":"824eb17e968c1cac0b0939704eda4544","url":"tw_stocks/3686.json"},{"revision":"802b5afe077a05eef1b95a7aaa21f76c","url":"tw_stocks/3679.json"},{"revision":"8977c0fcd34a3a2334a0c159587cc60b","url":"tw_stocks/3673.json"},{"revision":"0109b2c6b4eff077d8489cf041e89af0","url":"tw_stocks/3669.json"},{"revision":"d2b4a382f7548c7f6d06de8a9710a9ff","url":"tw_stocks/3665.json"},{"revision":"a4afe2db6952965ccab39de52792fb1b","url":"tw_stocks/3661.json"},{"revision":"1c5328da9b6159e4cafcf4ea8e1f66b9","url":"tw_stocks/3653.json"},{"revision":"4e33b1a6eca668b5f83aec580e16424c","url":"tw_stocks/3652.json"},{"revision":"06634e115dc05347adf81f54ecccfe03","url":"tw_stocks/3645.json"},{"revision":"b0984e3da4d8c6e0b6e2764fbf16e383","url":"tw_stocks/3622.json"},{"revision":"289db8b22cd63cf13c2184b48079ceb9","url":"tw_stocks/3617.json"},{"revision":"0bac53d271011c0bc1e339f99b1a6966","url":"tw_stocks/3607.json"},{"revision":"9cc608342c8934675f2698d2c240ac43","url":"tw_stocks/3605.json"},{"revision":"6b5cab5a0055f9913d2885012fec233b","url":"tw_stocks/3596.json"},{"revision":"ec77d101598abe6845ec81858283e7a9","url":"tw_stocks/3593.json"},{"revision":"a993bb8d4afb1e746f90e5e19923a59d","url":"tw_stocks/3592.json"},{"revision":"4af8aaade29490c4c1f8acfc8b78ec54","url":"tw_stocks/3591.json"},{"revision":"22a59184b1fdd8208a3c57dcbcffefaa","url":"tw_stocks/3588.json"},{"revision":"a3af29cd11ef07108c089e3e967a70a6","url":"tw_stocks/3583.json"},{"revision":"2c3b940b50ae8902ffa98978430d58ca","url":"tw_stocks/3576.json"},{"revision":"38b719f1b0ae32ab90a7f5b07901ecec","url":"tw_stocks/3563.json"},{"revision":"a04f2d157c43915262bc4f1f7a98c7d2","url":"tw_stocks/3557.json"},{"revision":"9bff24bf219ad3a6828c8fa1a9a53bbc","url":"tw_stocks/3550.json"},{"revision":"a1f4ea1ced3d674c74427bae17b546f6","url":"tw_stocks/3545.json"},{"revision":"298c74b1338bfd07b85676be675123e9","url":"tw_stocks/3543.json"},{"revision":"e948633e1000c7b61c4a10cfd10785c4","url":"tw_stocks/3535.json"},{"revision":"3fad5db57d957fea80ff90771a447b4b","url":"tw_stocks/3533.json"},{"revision":"2d95e7ff057e6cada037986fc3696e8f","url":"tw_stocks/3532.json"},{"revision":"7a524b9f81a43a4595c6f5be4596044f","url":"tw_stocks/3530.json"},{"revision":"dc3324d6e344a010ef4167efa28cb02d","url":"tw_stocks/3528.json"},{"revision":"26ab4132d16928bf1e5af61dd79cc9ab","url":"tw_stocks/3518.json"},{"revision":"9bfb9a54b1122067e998a10f4ff24f9a","url":"tw_stocks/3515.json"},{"revision":"59ffb82ba3d4a7021a96c57327d9d3c3","url":"tw_stocks/3504.json"},{"revision":"8ceecfc9bc0fe359c8d59e083d172dbb","url":"tw_stocks/3501.json"},{"revision":"174f682fcbda68bc862b956702b4ee25","url":"tw_stocks/3494.json"},{"revision":"1291f5c7a99af6bf815604970e9e0482","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"41eba472a002b5f5dd4e5b9208022147","url":"tw_stocks/3450.json"},{"revision":"9da63089d08e5f47517a2c0b97dbfeb0","url":"tw_stocks/3447.json"},{"revision":"6b4d1697c971366f8bb228de8d8cc849","url":"tw_stocks/3443.json"},{"revision":"8a6cfe58582234f45a1fefab5e259eab","url":"tw_stocks/3437.json"},{"revision":"96c689b940a5073b122b27e5e5f8f5dd","url":"tw_stocks/3432.json"},{"revision":"112386664eda048b2de5de7419846c0c","url":"tw_stocks/3419.json"},{"revision":"aa78c944dafe9a041626c78141331a86","url":"tw_stocks/3416.json"},{"revision":"63429c4ff7bad24585e998b9da04685f","url":"tw_stocks/3413.json"},{"revision":"37ca48eed519af1ba0aee392e61c5c16","url":"tw_stocks/3406.json"},{"revision":"20938223f4bed5f0271260970aa76143","url":"tw_stocks/3380.json"},{"revision":"9674a57a2009cfff1af7f183ba42891c","url":"tw_stocks/3376.json"},{"revision":"9c839a3ea6237bf7da3924716ec4c53c","url":"tw_stocks/3356.json"},{"revision":"3a7407aadac288fde483226d49ce1d4c","url":"tw_stocks/3346.json"},{"revision":"5fc3311836868cc9a5325a410c2019af","url":"tw_stocks/3338.json"},{"revision":"56a6c019427d49691684769a9134cef3","url":"tw_stocks/3321.json"},{"revision":"262050e4a1b77a981fd811b7aa06e0a3","url":"tw_stocks/3312.json"},{"revision":"e3f334cf681a27489b926767ea499c8b","url":"tw_stocks/3311.json"},{"revision":"a35e8ed4cac5cfa0445295e4580b7cbc","url":"tw_stocks/3308.json"},{"revision":"9029d0dcf6786d61872c8f315f1fff4b","url":"tw_stocks/3305.json"},{"revision":"93c910ab566f29d4c1d296b451d603a2","url":"tw_stocks/3296.json"},{"revision":"4369782add0785efc509547c7a752f75","url":"tw_stocks/3266.json"},{"revision":"bf9d3b2e518870d0699a2bcb43bbe39f","url":"tw_stocks/3257.json"},{"revision":"471c38afe36fc454fc9b960359a55560","url":"tw_stocks/3231.json"},{"revision":"b680c8d9a538cdb90845d6968b496c9b","url":"tw_stocks/3229.json"},{"revision":"d5c6f5faab9553219ba7ed0f022d56bf","url":"tw_stocks/3209.json"},{"revision":"7ae10c05b5f5514b17a25762f04d1657","url":"tw_stocks/3189.json"},{"revision":"73e46c632d46d18d5993705a60f93787","url":"tw_stocks/3168.json"},{"revision":"12b3b78ed1fc8b3f6d89a9ec348db4fb","url":"tw_stocks/3167.json"},{"revision":"6c94cdb44803634ac34624121da70348","url":"tw_stocks/3164.json"},{"revision":"aa748ce31fece8825ad8bcec009441cd","url":"tw_stocks/3149.json"},{"revision":"ab8610710513f8010ea88adc82d6c2a0","url":"tw_stocks/3138.json"},{"revision":"b8091eefa01b919d59b46474d05e0931","url":"tw_stocks/3135.json"},{"revision":"c5b360f5cb419d1f97b68d09173f3794","url":"tw_stocks/3130.json"},{"revision":"7dceaad3187a83df745a175cb0db27c2","url":"tw_stocks/3094.json"},{"revision":"27ddc1a4f413cbbc85e1835d3c1c9412","url":"tw_stocks/3092.json"},{"revision":"8b25e7286615a3889c302587f469fca8","url":"tw_stocks/3090.json"},{"revision":"2e7e50fb7e72fd302fd0104ce098cd8a","url":"tw_stocks/3062.json"},{"revision":"edf880ec14008d598846e977743d6baf","url":"tw_stocks/3060.json"},{"revision":"88d41b01b8b510f086ca64048fb6f4c5","url":"tw_stocks/3059.json"},{"revision":"240d64a39b56b958d562eafc31a18510","url":"tw_stocks/3058.json"},{"revision":"6d2146fd937d456afe796fc3893e5cf1","url":"tw_stocks/3057.json"},{"revision":"9a6d4c315c26488f2db2fb9eddecc158","url":"tw_stocks/3056.json"},{"revision":"d03e08e60998f9a1d07ea7f9425a7128","url":"tw_stocks/3055.json"},{"revision":"ecf9a0db566673cbfcbdd9abdd4e7409","url":"tw_stocks/3054.json"},{"revision":"3a94d8179611e08a31c77f5e0f0420ac","url":"tw_stocks/3052.json"},{"revision":"f1b83172fe9e6f83fe41c3915b2ebf61","url":"tw_stocks/3051.json"},{"revision":"6eb8c1067be2dc3e88cb07b42d9fe25d","url":"tw_stocks/3050.json"},{"revision":"9dac853e1983495e3fa2ebeebb1035ef","url":"tw_stocks/3049.json"},{"revision":"6a5a9589650560d6628b3e4d31392d22","url":"tw_stocks/3048.json"},{"revision":"e79e8e66b7488d90e4cf169901dc29d6","url":"tw_stocks/3047.json"},{"revision":"90725f688c41c6347d3a405bc06a6ee8","url":"tw_stocks/3046.json"},{"revision":"ccca3c2ec13ef676aee79d6ba2773ac1","url":"tw_stocks/3045.json"},{"revision":"5271d57d8736cbe8166796889b82630c","url":"tw_stocks/3044.json"},{"revision":"cd943d94b4cb93f049856477eaeb9fef","url":"tw_stocks/3043.json"},{"revision":"f18fc786b3d19f3ee01f600204dafdc4","url":"tw_stocks/3042.json"},{"revision":"4763224c8ce9c3ebd67eb6bcf23ca96f","url":"tw_stocks/3041.json"},{"revision":"b49fe145643b1186a2537f3660e32627","url":"tw_stocks/3040.json"},{"revision":"8ec3d86a47b22735ed51058b1960ad91","url":"tw_stocks/3038.json"},{"revision":"e8f62a0cfb02460c02ed62f29a4e9a6b","url":"tw_stocks/3037.json"},{"revision":"35b5afb37d6825a36b74efe26e1b0352","url":"tw_stocks/3036.json"},{"revision":"2d9b3c9ed602524041430df1456fe090","url":"tw_stocks/3035.json"},{"revision":"c27b5f4c7acdaedadf10392dfb914098","url":"tw_stocks/3034.json"},{"revision":"03bee2a8a49f4a3134ad0cb50f7b5834","url":"tw_stocks/3033.json"},{"revision":"51194d38147a17b0abdf57d3b3db673b","url":"tw_stocks/3032.json"},{"revision":"499d57e4f407a187b68cc43f6adc8f60","url":"tw_stocks/3031.json"},{"revision":"7835df1cdc516d7466fa92b3e14cb3f2","url":"tw_stocks/3030.json"},{"revision":"85bb2cd9f2360607800bddd12c4ddc72","url":"tw_stocks/3029.json"},{"revision":"4c15b8d2ecbe9a7c6351f56ebf800e59","url":"tw_stocks/3028.json"},{"revision":"5cc581a90633149ebb7d1b5fbb928e40","url":"tw_stocks/3027.json"},{"revision":"9f2aea4f9ce78c7905be0b6217f78b9d","url":"tw_stocks/3026.json"},{"revision":"87c3131f959e792d9ea9ff2b4ccbb21c","url":"tw_stocks/3025.json"},{"revision":"1a7a6cd0dc1ca89e05e08edc4b3d895f","url":"tw_stocks/3024.json"},{"revision":"5491683921450bf1d873d92727fdc1d8","url":"tw_stocks/3023.json"},{"revision":"cfe9c72790bd2ec5d1797d66ed90428f","url":"tw_stocks/3022.json"},{"revision":"5f9fdf7035b093e7e1e78a27db98010e","url":"tw_stocks/3021.json"},{"revision":"f7dae731a5470496fba5215e7cf68db8","url":"tw_stocks/3019.json"},{"revision":"e295f72ffce642791bc303247f623d92","url":"tw_stocks/3018.json"},{"revision":"64408152f339790a05b5c0aa17bcc743","url":"tw_stocks/3017.json"},{"revision":"458ffa82e7e8e952ba5b0cfd91eac62f","url":"tw_stocks/3016.json"},{"revision":"1898e3e63c0d36206a9ef40c83a59e9a","url":"tw_stocks/3015.json"},{"revision":"5264a66d71f8d4f522ce5ba00ce82042","url":"tw_stocks/3014.json"},{"revision":"3f2dd499614f124602f25aabf893a922","url":"tw_stocks/3013.json"},{"revision":"126f62b11258f7b0c3fc5a148717656c","url":"tw_stocks/3011.json"},{"revision":"5b60d29752d324b8c65bd2f886e25692","url":"tw_stocks/3010.json"},{"revision":"ff64576e3420d51da11c308a83071ce5","url":"tw_stocks/3008.json"},{"revision":"f6d150cbbeb56ad364a6d7e1a81ba0a0","url":"tw_stocks/3006.json"},{"revision":"f4664795969bba159219c18f2bb1e6dd","url":"tw_stocks/3005.json"},{"revision":"9b96751b4ef4101ac57643ff4c6dc7a4","url":"tw_stocks/3004.json"},{"revision":"fdce7f59bfba92137750ab7ab6b322f9","url":"tw_stocks/3003.json"},{"revision":"7890410d9698e96b20f77427f2a6933c","url":"tw_stocks/3002.json"},{"revision":"f13699920ad982822ab22ab632063ad2","url":"tw_stocks/2945.json"},{"revision":"66764c1de866c63c224c116902f10fdc","url":"tw_stocks/2939.json"},{"revision":"caa8716bd2a75116288df3eeb75807be","url":"tw_stocks/2929.json"},{"revision":"171119c011be35eaa41036b257e85983","url":"tw_stocks/2923.json"},{"revision":"578655a0846b9c04494bc2dfd1e806d5","url":"tw_stocks/2915.json"},{"revision":"8252f53f72fee7d5f5ccdab66031f3b8","url":"tw_stocks/2913.json"},{"revision":"07522eb5714da7feade0f1d97fb8675d","url":"tw_stocks/2912.json"},{"revision":"0b87de2bca9d5f41e38eb6ec0f78dff7","url":"tw_stocks/2911.json"},{"revision":"e8054078757243bb05d57fee03ccf9b0","url":"tw_stocks/2910.json"},{"revision":"fa5b256ecb53a12b51c4e504f879fb3e","url":"tw_stocks/2908.json"},{"revision":"17f790537e4fbc4bc10dff1b6b3a9506","url":"tw_stocks/2906.json"},{"revision":"d924663d3335b52e0e3e685baa2d5f5d","url":"tw_stocks/2905.json"},{"revision":"9e6f63c1c629a4fbb80eff0e50833dd4","url":"tw_stocks/2904.json"},{"revision":"49ad8fe2ed3639c49a3f6b72ad07a636","url":"tw_stocks/2903.json"},{"revision":"2924e356d8b3da4aa111d664c58d9628","url":"tw_stocks/2901.json"},{"revision":"1c263994240eeaf341aa2cba31c2cc0c","url":"tw_stocks/2897.json"},{"revision":"c2a0e90d012c3fb178a950506ce2ea83","url":"tw_stocks/2892.json"},{"revision":"a167d9d580552bccae3e57df430f6850","url":"tw_stocks/2891.json"},{"revision":"15d6b6ef5251046bc6a4d842db698a95","url":"tw_stocks/2890.json"},{"revision":"0c5f4f0058cd2bb7c10ffea3759158c4","url":"tw_stocks/2889.json"},{"revision":"d70b2e529bafa9e2db94b0b985bda9b4","url":"tw_stocks/2887.json"},{"revision":"ae99b5943863b74dc46abdf9e26e93e8","url":"tw_stocks/2886.json"},{"revision":"33bcbcb37312cf68977e78962fc6c292","url":"tw_stocks/2885.json"},{"revision":"0b30a7a8ac7c51774b2d4ff9f95aaf2e","url":"tw_stocks/2884.json"},{"revision":"847f29ea07437ee265960a79dd927d0a","url":"tw_stocks/2883.json"},{"revision":"524e2f83fb0c6f3311efedbc5d0183d6","url":"tw_stocks/2882.json"},{"revision":"c16701c59afc8d63c337c4aff625b24b","url":"tw_stocks/2881.json"},{"revision":"5452b59f144b490508c1d90207024ba3","url":"tw_stocks/2880.json"},{"revision":"49e659affcc83c309f883a0fb3aef568","url":"tw_stocks/2867.json"},{"revision":"396b94275c8028a427e6ee3620d34a44","url":"tw_stocks/2855.json"},{"revision":"decdc88c05027a425aaa7ff0b2de64b4","url":"tw_stocks/2852.json"},{"revision":"fd3e1671464b4cf2e5c2586045d41cce","url":"tw_stocks/2851.json"},{"revision":"c69b9d559bda173bd2bc4093af234d36","url":"tw_stocks/2850.json"},{"revision":"ca2278433d3951677bc59eb7fa53a93b","url":"tw_stocks/2849.json"},{"revision":"428f93cf4adebf5204634385a55305bb","url":"tw_stocks/2845.json"},{"revision":"5a8326d2571b26cb23ec9abefe0e03c1","url":"tw_stocks/2838.json"},{"revision":"4c125de3cc48f235ec3d66322d81f820","url":"tw_stocks/2836.json"},{"revision":"daf8475a9b62bf535e2c1a79e34d39a1","url":"tw_stocks/2834.json"},{"revision":"624373db1a65735cd5975cd8644765b4","url":"tw_stocks/2832.json"},{"revision":"a6a9f7a6585581138f0e34efca784c8d","url":"tw_stocks/2820.json"},{"revision":"089f40b2c517b95eabbb85c27c37325d","url":"tw_stocks/2816.json"},{"revision":"cc5fc0be3a64d6029167d26bae0b8903","url":"tw_stocks/2812.json"},{"revision":"3ebc42609f4a92a83f01907a40da2e2f","url":"tw_stocks/2801.json"},{"revision":"17200b2197b6698bbae364f2f8e4959e","url":"tw_stocks/2762.json"},{"revision":"95c1a6058b6d9574881ea124d21e6db3","url":"tw_stocks/2753.json"},{"revision":"7bf7fd9f7cf58503413328dfcb670f36","url":"tw_stocks/2748.json"},{"revision":"6a83620a44c87f735a4940378c1677dd","url":"tw_stocks/2739.json"},{"revision":"0e3dd70212524752d82fc783b1043b36","url":"tw_stocks/2731.json"},{"revision":"dfcc950c3cdca4a0b0453c3a3de8d49d","url":"tw_stocks/2727.json"},{"revision":"a69f25a0a46f409b9445b3d0291f2ef4","url":"tw_stocks/2723.json"},{"revision":"9a3e51d8605233f442fcdd3bcee7fc9c","url":"tw_stocks/2722.json"},{"revision":"152cf6f2e1cb83ab5e98fa91d2a6c352","url":"tw_stocks/2712.json"},{"revision":"df872f120b00556851cb34a37a9594e0","url":"tw_stocks/2707.json"},{"revision":"38bf48aee4d6f66de56b353c85917435","url":"tw_stocks/2706.json"},{"revision":"6075a4c2d2de77ed370e23c55984fb64","url":"tw_stocks/2705.json"},{"revision":"5d1aab750295c68e4ca36b75fa5c9486","url":"tw_stocks/2704.json"},{"revision":"ffef261f74687946b5dcafdecf365c95","url":"tw_stocks/2702.json"},{"revision":"7e82cabb5c2785130b787fffb9ff53cd","url":"tw_stocks/2701.json"},{"revision":"5d790eab65a6cda79e02fa0f8580a30d","url":"tw_stocks/2646.json"},{"revision":"cee36bc0cc79a06c1a815d1c33946f0a","url":"tw_stocks/2645.json"},{"revision":"cc69bdf60d409106659f70a43a84fe28","url":"tw_stocks/2642.json"},{"revision":"a8ced14f83327915284bdbc0799871e2","url":"tw_stocks/2637.json"},{"revision":"533dab14fb2c94f2e30ed29d06868471","url":"tw_stocks/2636.json"},{"revision":"d0986791c4827dadb46fdb669310b321","url":"tw_stocks/2634.json"},{"revision":"8dc750db509c682243660161f2d91cdf","url":"tw_stocks/2633.json"},{"revision":"6df50db0290f41df9cb1438843d33e3e","url":"tw_stocks/2630.json"},{"revision":"7a9d8b1a28c08de07bac26d99ac21171","url":"tw_stocks/2618.json"},{"revision":"4f75203b14653bf5b696823c2ea949d0","url":"tw_stocks/2617.json"},{"revision":"a331eafa2b0dc55776a535a811ccf9f7","url":"tw_stocks/2616.json"},{"revision":"7ff4b82bd49b6e5e103c48c18130ca05","url":"tw_stocks/2615.json"},{"revision":"f951fd6429874b100dc98969c84a6019","url":"tw_stocks/2614.json"},{"revision":"e3ba2c3c656f225cc0e8618ea445eabf","url":"tw_stocks/2613.json"},{"revision":"e9c6322f8392458d7eb3f68ef9805e91","url":"tw_stocks/2612.json"},{"revision":"e38b425d38699de35c677161584cdc68","url":"tw_stocks/2611.json"},{"revision":"f1f168e484fc5e9b886970807a1c0864","url":"tw_stocks/2610.json"},{"revision":"0069fd92602f4689690a9406e20675d1","url":"tw_stocks/2609.json"},{"revision":"96a6de053d808d5e99b2ed3cadd8b818","url":"tw_stocks/2608.json"},{"revision":"8fe84e1b5c829964fc3939922b77b533","url":"tw_stocks/2607.json"},{"revision":"cfb75cbf1100fa407dad40420b98adeb","url":"tw_stocks/2606.json"},{"revision":"493c82de353c978d095eaa2cfb38655f","url":"tw_stocks/2605.json"},{"revision":"6d89782a6b0c085f992ceca9dbe6cb0c","url":"tw_stocks/2603.json"},{"revision":"a1c457c31c395c1bab13561b6074cb07","url":"tw_stocks/2601.json"},{"revision":"6203e0e2c2676142f84a44264204c368","url":"tw_stocks/2597.json"},{"revision":"3f944629e0f267388a17f8a8ecb47939","url":"tw_stocks/2548.json"},{"revision":"92f5cce80d852d6a474b279a7922b9c6","url":"tw_stocks/2547.json"},{"revision":"56fe6be69c55f8eb82c5e522162fe6de","url":"tw_stocks/2546.json"},{"revision":"be1dd496d4c8845371421f71afe279a3","url":"tw_stocks/2545.json"},{"revision":"fd165a5766455d7b87f9500c925cb76a","url":"tw_stocks/2543.json"},{"revision":"405b53f54f1ffe453f9eb9a32432e2c6","url":"tw_stocks/2542.json"},{"revision":"ee6496b6adac902ec0022b3ba4d187f3","url":"tw_stocks/2540.json"},{"revision":"43b4cbe962ed7008d42220bf3dd6185c","url":"tw_stocks/2539.json"},{"revision":"5e8f23d42de680bdafc70e1f0b26fc88","url":"tw_stocks/2538.json"},{"revision":"58ee83349ac2a8d84494ba222a48baa5","url":"tw_stocks/2537.json"},{"revision":"60965ba59ca848b7d2bf592e63509dcb","url":"tw_stocks/2536.json"},{"revision":"cdd1bfaab22e039f1fe6fd0889e26679","url":"tw_stocks/2535.json"},{"revision":"67e263254c1651cbeaac649d8af5ca11","url":"tw_stocks/2534.json"},{"revision":"fc35ab1ba0a4fa5f6658ac83fddec258","url":"tw_stocks/2530.json"},{"revision":"a22f859505b0076fc0bcd04541394952","url":"tw_stocks/2528.json"},{"revision":"d058c6890916c636352aa6afff2658af","url":"tw_stocks/2527.json"},{"revision":"9f1766978864e061a0cf31ec1841c6cb","url":"tw_stocks/2524.json"},{"revision":"e14f72f30a286566590ded1ecec3fecc","url":"tw_stocks/2520.json"},{"revision":"aa58c7064a9354671f3c15cae7c62a1a","url":"tw_stocks/2516.json"},{"revision":"fb427aad35652c043a373558fea06ee3","url":"tw_stocks/2515.json"},{"revision":"f98a4354e57917f74dce546dacefeaea","url":"tw_stocks/2514.json"},{"revision":"364ebe22d32ad4b178a785f894db55f2","url":"tw_stocks/2511.json"},{"revision":"6bbf2882c185c7b8edb57d8900f9ff32","url":"tw_stocks/2509.json"},{"revision":"b7dfc4eff237ecba877e0f047e96eb4a","url":"tw_stocks/2506.json"},{"revision":"4ccc5804b36d5ded7a7602dbbf4534cf","url":"tw_stocks/2505.json"},{"revision":"b5f95c8df5692e4df79c9b6389dc2bfd","url":"tw_stocks/2504.json"},{"revision":"0a00ce0b4df355f1099d8c41c72ea0fb","url":"tw_stocks/2501.json"},{"revision":"0877d66ca6f2ce8ca14db44633784c81","url":"tw_stocks/2498.json"},{"revision":"5b943899c09c20315e86bace158accb3","url":"tw_stocks/2497.json"},{"revision":"a87b4d2f05a316ee72b17e53b906fa24","url":"tw_stocks/2496.json"},{"revision":"96de12c9f1d9d9d8926eec187b8f2b1d","url":"tw_stocks/2495.json"},{"revision":"3496a16953a1292d2fecfbc9a3e04a80","url":"tw_stocks/2493.json"},{"revision":"eb9203a63afb1a62a727bb1cd2e5b49a","url":"tw_stocks/2492.json"},{"revision":"7a4d8de931388a074bff1daac7069876","url":"tw_stocks/2491.json"},{"revision":"3d10bd2cb76a21eef8997b6e90044c35","url":"tw_stocks/2489.json"},{"revision":"741d3c3e710042fbb7ef48c50b4be771","url":"tw_stocks/2488.json"},{"revision":"ff115012d86ee9aca47fd63fe33246ed","url":"tw_stocks/2486.json"},{"revision":"5547fe84eb70e91c1abe693069edd4b2","url":"tw_stocks/2485.json"},{"revision":"e5c1d2f4763fde577065ddf522e0a7ee","url":"tw_stocks/2484.json"},{"revision":"a6de6edf9f8e5d1b80ef2fda6ec6c907","url":"tw_stocks/2483.json"},{"revision":"a5e6835c349a0cd11020e182032c07e0","url":"tw_stocks/2482.json"},{"revision":"bc88c8820640dcd0d45baccb1a4b2653","url":"tw_stocks/2481.json"},{"revision":"d39a2ac5264249869f9a2b6b2ff2f93b","url":"tw_stocks/2480.json"},{"revision":"8987e47e9e21cef39ecffbaa5e5ae480","url":"tw_stocks/2478.json"},{"revision":"2b3c063f7fbf3490c4acb86f4270ccd5","url":"tw_stocks/2477.json"},{"revision":"b702ef353ef1879415b9fc54270468a4","url":"tw_stocks/2476.json"},{"revision":"54d45d682578fe041b2a76ffd376fcf4","url":"tw_stocks/2474.json"},{"revision":"6056add6cc32b37d9254c498c51fd5fc","url":"tw_stocks/2472.json"},{"revision":"d65d67de6d44aef974c7a20cfb478a26","url":"tw_stocks/2471.json"},{"revision":"54ae384da04a7a196109191ba084d0f0","url":"tw_stocks/2468.json"},{"revision":"22c320d3433f3b49a34bd0e5513d32fa","url":"tw_stocks/2467.json"},{"revision":"64dd101ce0482180b69f7e574fa6b7e5","url":"tw_stocks/2466.json"},{"revision":"cc593ee16a34cd5e8396d09b3528104f","url":"tw_stocks/2465.json"},{"revision":"1d2a4ad7b998c7715001646e6c732e2c","url":"tw_stocks/2464.json"},{"revision":"d2c75f150fc2f4d1e0a5794d2a82720c","url":"tw_stocks/2462.json"},{"revision":"7e872152d4b916ef00ceb29aebb47565","url":"tw_stocks/2461.json"},{"revision":"3ddbf702ae13257b8930be644a1b39d3","url":"tw_stocks/2460.json"},{"revision":"21bb43a31bfe50ae33f5e1bc36fa0144","url":"tw_stocks/2459.json"},{"revision":"8779cc067149c43feb08798a82c37023","url":"tw_stocks/2458.json"},{"revision":"86b082a4f583741d9574d25660be803f","url":"tw_stocks/2457.json"},{"revision":"e06edf982e8b91cf1ecf8017d57c15df","url":"tw_stocks/2455.json"},{"revision":"9e2593914a5dafbd29fcbabdb525331b","url":"tw_stocks/2454.json"},{"revision":"0f722371e1e629286f63e2217041eee5","url":"tw_stocks/2453.json"},{"revision":"27ceefe906b8b517124d2901143a4cd8","url":"tw_stocks/2451.json"},{"revision":"b6f366a423ffc767d446cbabe64d7ae9","url":"tw_stocks/2450.json"},{"revision":"20e9432c2113bb43204a68db99f57ac8","url":"tw_stocks/2449.json"},{"revision":"d599552de8f07bebca75801739745c5c","url":"tw_stocks/2444.json"},{"revision":"cae3a5c1bf92eb940621ecb903f265a0","url":"tw_stocks/2442.json"},{"revision":"47caacb4ba3c9ceee4aa6505da75f31c","url":"tw_stocks/2441.json"},{"revision":"d231814cefa592c08f9d621c6b4d359e","url":"tw_stocks/2440.json"},{"revision":"4c01f18fd8897bd9456ff1d1ae1aca83","url":"tw_stocks/2439.json"},{"revision":"0c456af45cc2ddee790bbfd675bc7b6a","url":"tw_stocks/2438.json"},{"revision":"2a2eaa35ccb5cb0fd83d06296d4d14f3","url":"tw_stocks/2436.json"},{"revision":"fe57c46c6ab31810499614bfbe25c247","url":"tw_stocks/2434.json"},{"revision":"66d897ce86b9e9b65067826899e20d8f","url":"tw_stocks/2433.json"},{"revision":"99d7642a282e4aa7773d9d7443f3d955","url":"tw_stocks/2431.json"},{"revision":"2602fcb376a9817ff163fb69df21c6e7","url":"tw_stocks/2430.json"},{"revision":"9ddee24e179e304c5102f7656b75fa3a","url":"tw_stocks/2429.json"},{"revision":"668335dfe146fe82353c429faadabb7a","url":"tw_stocks/2428.json"},{"revision":"d1753b94b8f81215aeafe7de72e6708b","url":"tw_stocks/2427.json"},{"revision":"6308d804813cef423e25313a00cd53d6","url":"tw_stocks/2426.json"},{"revision":"84f3b90884930daabef57e59870767da","url":"tw_stocks/2425.json"},{"revision":"2d2b38ff04ce5ec5b68e2f3aac58e75e","url":"tw_stocks/2424.json"},{"revision":"f43fb329151d2fb67b5baf7398706ee8","url":"tw_stocks/2423.json"},{"revision":"c5fbf3f11e6b80bb5225a56c30bd71e3","url":"tw_stocks/2421.json"},{"revision":"a98d1945db2c76a78ee337f436ccb3e5","url":"tw_stocks/2420.json"},{"revision":"1a1f3bb1d3b8530c2feacdb7442db609","url":"tw_stocks/2419.json"},{"revision":"855751fe41fb27e7c37179ffe9578828","url":"tw_stocks/2417.json"},{"revision":"9e04dceebe48bbe98bbfaee495952718","url":"tw_stocks/2415.json"},{"revision":"049b903445f57e558381480fdf34bc0d","url":"tw_stocks/2414.json"},{"revision":"b0d07ba7119fb335b35b6cc3ef410de7","url":"tw_stocks/2413.json"},{"revision":"3744e5658d539d1b1598d97fec72ad4c","url":"tw_stocks/2412.json"},{"revision":"e991450282182ae973f0265301d9ee1c","url":"tw_stocks/2409.json"},{"revision":"a0d8589fc0451a932dc6d86423aad68b","url":"tw_stocks/2408.json"},{"revision":"0f56f9f9a689db94137efe414dff476b","url":"tw_stocks/2406.json"},{"revision":"95cb585187a58f604610c945fcc9945e","url":"tw_stocks/2405.json"},{"revision":"0d632edb7f077b6e84e8fba6295fe982","url":"tw_stocks/2404.json"},{"revision":"0e9c9a1c0bdb43ce4ca952cc5155278d","url":"tw_stocks/2402.json"},{"revision":"9e76ee0be37e19c45c428a90253c268b","url":"tw_stocks/2401.json"},{"revision":"bd7e298150c486c47a95e6e19fef3fb5","url":"tw_stocks/2399.json"},{"revision":"19eddd24055a4bb932426f0fd77f995c","url":"tw_stocks/2397.json"},{"revision":"db7219e061385d2559eca29374344d18","url":"tw_stocks/2395.json"},{"revision":"a879201eda1d66998f76a42bf58bd72c","url":"tw_stocks/2393.json"},{"revision":"50ed6cba56815d4a5494710db090ea9c","url":"tw_stocks/2392.json"},{"revision":"3c23d7556141291df2321469e9112846","url":"tw_stocks/2390.json"},{"revision":"1e224bf0625834d509251f023ddafaf1","url":"tw_stocks/2388.json"},{"revision":"f8234f99b6930480103113e5d2bf6433","url":"tw_stocks/2387.json"},{"revision":"944020410f48a6531a9279c24b733765","url":"tw_stocks/2385.json"},{"revision":"c0b81b71bde606cc16fe6f146e2515c0","url":"tw_stocks/2383.json"},{"revision":"c921b8a6539395047ac6220a00314d17","url":"tw_stocks/2382.json"},{"revision":"9984946591a30a4191863af5701f4e96","url":"tw_stocks/2380.json"},{"revision":"bd365a2ac664f8249cebf8257b6e8698","url":"tw_stocks/2379.json"},{"revision":"1be64fb932547de3c581102275a428c6","url":"tw_stocks/2377.json"},{"revision":"597a9b26ade9ecf8da174ad455e281c0","url":"tw_stocks/2376.json"},{"revision":"6267f5fdb6ed083b86721106f7513e37","url":"tw_stocks/2375.json"},{"revision":"e42d0be96f893da09cfd8267633f2439","url":"tw_stocks/2374.json"},{"revision":"2963f02944cdbcabf08c758834cf3247","url":"tw_stocks/2373.json"},{"revision":"34464fbd2663440331a4c4cf92286f59","url":"tw_stocks/2371.json"},{"revision":"386fe6e292e3d994c567af99fd7fa4e1","url":"tw_stocks/2369.json"},{"revision":"0d589b7ac14ca5eba4be8a4af5016280","url":"tw_stocks/2368.json"},{"revision":"01932e0ffbcb062ec46ea8ea71e8eb37","url":"tw_stocks/2367.json"},{"revision":"a0c7e09da68f23a4152d3cdfb8c2aca9","url":"tw_stocks/2365.json"},{"revision":"d640d1b1a797c4b58498692c7f26e8b7","url":"tw_stocks/2364.json"},{"revision":"455e215c8b7ae130d6688ea72275e73e","url":"tw_stocks/2363.json"},{"revision":"e08e3e56a33a6aea0b3adde04bc927f0","url":"tw_stocks/2362.json"},{"revision":"cdeef2289a0dbc38baa7cb2380733c49","url":"tw_stocks/2360.json"},{"revision":"9a75e67e70e68bb7bd1dfb7019d1d34a","url":"tw_stocks/2359.json"},{"revision":"de37678e8b94dc97328535a161699bbf","url":"tw_stocks/2357.json"},{"revision":"e13cd18b7951bce31c593a89da66ad92","url":"tw_stocks/2356.json"},{"revision":"e64a2ef21e84ec07faccd759d0fb6a1f","url":"tw_stocks/2355.json"},{"revision":"a9fa23bd4caf9cc05262afa750c51ab0","url":"tw_stocks/2354.json"},{"revision":"7e430d4512af88e7415d52b1560cceef","url":"tw_stocks/2353.json"},{"revision":"82d26955379fee52a6bff6d2eb4b3ccd","url":"tw_stocks/2352.json"},{"revision":"0c5cf76328d63ac30782b57975bb8175","url":"tw_stocks/2351.json"},{"revision":"a078ecafa06c3c0595160f36f10959ae","url":"tw_stocks/2349.json"},{"revision":"5512d1d6333720ec3db8d7474c60b59f","url":"tw_stocks/2348.json"},{"revision":"cd90fc157ec6a2593e6a70874938a7d0","url":"tw_stocks/2347.json"},{"revision":"7d5b088b1e87fd92602e7eb7f66e2ad1","url":"tw_stocks/2345.json"},{"revision":"46320a17b255cbf9623f6e66c702c4a6","url":"tw_stocks/2344.json"},{"revision":"115b2bc3a09ea3bc3b594da9ae2e1370","url":"tw_stocks/2342.json"},{"revision":"232e8ac14b9a38655170f355e0b92a9a","url":"tw_stocks/2340.json"},{"revision":"ea80bd2c4c624e8569700003e6c211bd","url":"tw_stocks/2338.json"},{"revision":"3dff1575a6ebfdba1fb4d8d8d6850cbd","url":"tw_stocks/2337.json"},{"revision":"321ddbf30677ca45f711fd58114294b5","url":"tw_stocks/2332.json"},{"revision":"13483e9e4df38bfd15fb5f1e13b0d49d","url":"tw_stocks/2331.json"},{"revision":"7c56dff2c51fff1d3dee1f8a7c585778","url":"tw_stocks/2330.json"},{"revision":"c9462ef18b774ed0fc2ea311f2a9cb75","url":"tw_stocks/2329.json"},{"revision":"8f27b78805b577673aec4a069ad0755e","url":"tw_stocks/2328.json"},{"revision":"16bdb72f985e281efa05c65370ae2291","url":"tw_stocks/2327.json"},{"revision":"cbf3dde9d83cd8e19896178ff6335a0c","url":"tw_stocks/2324.json"},{"revision":"3ddbad21fb14839855a7e858e984ba6b","url":"tw_stocks/2323.json"},{"revision":"0b7b19b1e5440f1806283f40bd168a24","url":"tw_stocks/2321.json"},{"revision":"24938536132a066472fdcaaf08f60088","url":"tw_stocks/2317.json"},{"revision":"f0a21537d3cb67ca4514314c58e50966","url":"tw_stocks/2316.json"},{"revision":"5a6a0265fc8f5531c95b20cb1ee6f63f","url":"tw_stocks/2314.json"},{"revision":"85fe3d6ce800f6982ad0743a2ccb0bcc","url":"tw_stocks/2313.json"},{"revision":"ce39588e47780cbdd19f0dfc2e704540","url":"tw_stocks/2312.json"},{"revision":"339aea6e45b0423f7ca7cdd31abc1d9b","url":"tw_stocks/2308.json"},{"revision":"11f2cb850baa62d7d352496c5fa88ed0","url":"tw_stocks/2305.json"},{"revision":"910a1c0711b0176d88ce00869cd25d8b","url":"tw_stocks/2303.json"},{"revision":"94867aa2fbeef45f91b7ab0cea5f8722","url":"tw_stocks/2302.json"},{"revision":"9d4aad1bc13d0993db5da169edd8cb65","url":"tw_stocks/2301.json"},{"revision":"53353bbe48cc32ac1847c6712d9e39de","url":"tw_stocks/2250.json"},{"revision":"eb7f51cdad5afe2d68bdef493c8fcd33","url":"tw_stocks/2248.json"},{"revision":"d1fbec32505be40189511bb6908047df","url":"tw_stocks/2247.json"},{"revision":"16d09711d5d52fe9425b4b472563b4cd","url":"tw_stocks/2243.json"},{"revision":"26f53e0ac0661a487b8764050c7c53a6","url":"tw_stocks/2241.json"},{"revision":"9aec3cf6c968233622224fc2fa198538","url":"tw_stocks/2239.json"},{"revision":"0da95717f3b9964cce69f55668e93cd9","url":"tw_stocks/2236.json"},{"revision":"23338b975ca5596be8dfeeb06977b266","url":"tw_stocks/2233.json"},{"revision":"1ebaacaf6efbf505d1e61376534793ea","url":"tw_stocks/2231.json"},{"revision":"e1469fa9efbbc633d652b189bb62166a","url":"tw_stocks/2228.json"},{"revision":"c0fe013501d73d80e2f2411bfe66d343","url":"tw_stocks/2227.json"},{"revision":"7ee3fb117831904be4541151429b5751","url":"tw_stocks/2211.json"},{"revision":"618e48efa52fd2c8820b99b6acbfdca4","url":"tw_stocks/2208.json"},{"revision":"061c449b1429808d66be1ded11198949","url":"tw_stocks/2207.json"},{"revision":"3d151e27595c11048411f057d1f7d7d6","url":"tw_stocks/2206.json"},{"revision":"37a5ed6b3b346eeff49c68ca56e7a0cc","url":"tw_stocks/2204.json"},{"revision":"71c299bb608faaea1f0b98bf9f8c639f","url":"tw_stocks/2201.json"},{"revision":"cdfc512a8b9404b3722c71485b24be81","url":"tw_stocks/2115.json"},{"revision":"10ae0781131977305aa9c392f78fb8fb","url":"tw_stocks/2114.json"},{"revision":"cbcf3af924d2972c285ff0daf2a8c653","url":"tw_stocks/2109.json"},{"revision":"b55acf837183a951f314a8e667514032","url":"tw_stocks/2108.json"},{"revision":"04e9da0bfed9a2eb9cad22da2f54059c","url":"tw_stocks/2107.json"},{"revision":"c3810e94c3d7a4dad69d15220461b025","url":"tw_stocks/2106.json"},{"revision":"a110abe3b4f731abb9298db6047e32d1","url":"tw_stocks/2105.json"},{"revision":"26c9fc38c3194fc3792274de0047e91b","url":"tw_stocks/2104.json"},{"revision":"080e8733282eeea8b1be7ba304d215f8","url":"tw_stocks/2103.json"},{"revision":"a00da30aa73733248617b4a231f6d379","url":"tw_stocks/2102.json"},{"revision":"f82789ac8196a55e78e19c3420d0b013","url":"tw_stocks/2101.json"},{"revision":"9fc03f7325f872632becb361a0b780a8","url":"tw_stocks/2072.json"},{"revision":"3e87b0b1ffa6189a9eb96211234ec260","url":"tw_stocks/2069.json"},{"revision":"ebd9f70d0738f382f948979b6cd125f6","url":"tw_stocks/2062.json"},{"revision":"bd27d8d77c23394009edc8a8d7a71ed9","url":"tw_stocks/2059.json"},{"revision":"f654ef44e240ef27382a49644743b52c","url":"tw_stocks/2049.json"},{"revision":"8c2b4ea4b7f5cc4e373904730560b6db","url":"tw_stocks/2038.json"},{"revision":"e0345ab6baa66c41cdf593b31910a5e1","url":"tw_stocks/2034.json"},{"revision":"4aa7ef073569a4585a791587f2e17e29","url":"tw_stocks/2033.json"},{"revision":"64e7cdfb5ead9b35841756c7a8a559da","url":"tw_stocks/2032.json"},{"revision":"2d1cfb5f5c3f957ca7d39cde2e7b815e","url":"tw_stocks/2031.json"},{"revision":"fa308aa0f7c16d33dff0b4ad2519abcd","url":"tw_stocks/2030.json"},{"revision":"cfc5df62bbb646ca5b29b04cf59d8008","url":"tw_stocks/2029.json"},{"revision":"95c5de1b20bf24ffbe11c004a40c3977","url":"tw_stocks/2028.json"},{"revision":"e3abfc925ae4bde042663048d1649284","url":"tw_stocks/2027.json"},{"revision":"e68d7cd7f8901110ad760d5a4f51100d","url":"tw_stocks/2025.json"},{"revision":"cf6bd2064c1ae489bc55a7632386810d","url":"tw_stocks/2024.json"},{"revision":"b402f99102f8cdc7d9e0780cf41aa667","url":"tw_stocks/2023.json"},{"revision":"d5fadfd309d792e7eee204f103a57e90","url":"tw_stocks/2022.json"},{"revision":"1cf9613eb27d688e2ceab6152c6a7988","url":"tw_stocks/2020.json"},{"revision":"551a32c0649cd71363df85b0421181cb","url":"tw_stocks/2017.json"},{"revision":"f98fa8d4d40a8936491d4996dca6bd2e","url":"tw_stocks/2015.json"},{"revision":"a0adeb145cc340166df2c3bb34b6bd22","url":"tw_stocks/2014.json"},{"revision":"cad65a1a24dcfc99c771cfd955c18398","url":"tw_stocks/2013.json"},{"revision":"6ab5fe66d6e5053a2f42b2d1f7b6a64e","url":"tw_stocks/2012.json"},{"revision":"293b02cf831abe9dddd6aba5fe3e1d61","url":"tw_stocks/2010.json"},{"revision":"73af919810079e62560536115b02617b","url":"tw_stocks/2009.json"},{"revision":"32fc0d59118fe215ccf474c3fee7807e","url":"tw_stocks/2008.json"},{"revision":"f16ade65ed17a38ae0dc1a93dd19085b","url":"tw_stocks/2007.json"},{"revision":"237c716dcf29e0d5e31c6e8a8f376abb","url":"tw_stocks/2006.json"},{"revision":"edafad98769aab7b65422cce25d88ef0","url":"tw_stocks/2002.json"},{"revision":"138ebdb5bfdbd8e240e2cc1d1d1d9cc9","url":"tw_stocks/1909.json"},{"revision":"ba13edafd5a309ee740e8c5909fca715","url":"tw_stocks/1907.json"},{"revision":"e138991e9f5a91ebb6882eaef1e52903","url":"tw_stocks/1906.json"},{"revision":"749821182f6f783d6259d9b03438d833","url":"tw_stocks/1905.json"},{"revision":"f656aac94987af0b058d0f977dd48453","url":"tw_stocks/1904.json"},{"revision":"5c5855013f0d5cbc4a733cb5f6d79131","url":"tw_stocks/1903.json"},{"revision":"6d9db07871f879e7408177422211dbb3","url":"tw_stocks/1817.json"},{"revision":"7e9bdd5eb0cc9825175a01ac60d5d495","url":"tw_stocks/1810.json"},{"revision":"4fbbaaf976313ca3077b302d4ff0e054","url":"tw_stocks/1809.json"},{"revision":"976fe41f8b2c206ebe0970bec6038e5a","url":"tw_stocks/1808.json"},{"revision":"0cffcad2bf6273acacea3f7abdb4fc8d","url":"tw_stocks/1806.json"},{"revision":"06a3a623e310c7c0285e6fe2a6cdd356","url":"tw_stocks/1805.json"},{"revision":"699a26dec06097a8166154f26e414848","url":"tw_stocks/1802.json"},{"revision":"143865b61655381d6770d9ae695a438a","url":"tw_stocks/1795.json"},{"revision":"24fe99ce81ff17103427717b4096ca08","url":"tw_stocks/1789.json"},{"revision":"f4937468fb1668edde06cd254b6cd594","url":"tw_stocks/1786.json"},{"revision":"d8d96044d6dfc07d7cd33a19c0faf99c","url":"tw_stocks/1783.json"},{"revision":"505057870b71ca2d31a68f683b7ed492","url":"tw_stocks/1776.json"},{"revision":"dcd8508661d860f70a322c6dce847c46","url":"tw_stocks/1773.json"},{"revision":"2efc380fcd22b35283d99973063c2540","url":"tw_stocks/1762.json"},{"revision":"85830871de9f241076ce94367ec84fab","url":"tw_stocks/1760.json"},{"revision":"1b0e488dfe3f6171f40a2247ae877668","url":"tw_stocks/1752.json"},{"revision":"5e3297c97925601b50e5c6a4c08d6161","url":"tw_stocks/1737.json"},{"revision":"425b49f48c01c5ddc7e671e2182889aa","url":"tw_stocks/1736.json"},{"revision":"376e55e4b3c779da3410c55b9e270e7c","url":"tw_stocks/1735.json"},{"revision":"f824dae06336a7699f9f47ea3f870741","url":"tw_stocks/1734.json"},{"revision":"a97ef52ba4f8b887197e0d22cd88fe8c","url":"tw_stocks/1733.json"},{"revision":"cbb6e93fea080f95d2662da8a84a5187","url":"tw_stocks/1732.json"},{"revision":"10013aef5c819f3d806b2691bd87be78","url":"tw_stocks/1731.json"},{"revision":"8cfc07f8a187f5979669680503f0722f","url":"tw_stocks/1730.json"},{"revision":"53b35f7f0f2913bc136ba7ef8b8bdbe0","url":"tw_stocks/1727.json"},{"revision":"43f76ac075a18864559fa205bc117524","url":"tw_stocks/1726.json"},{"revision":"9142a00bc8479d961831742d6665e5e5","url":"tw_stocks/1725.json"},{"revision":"ff8cc67c8d93b3654d74a06559ba17c0","url":"tw_stocks/1723.json"},{"revision":"8f87c5829331b415c00218356f693d22","url":"tw_stocks/1722.json"},{"revision":"92f582dc25d81be466d59838c6f48fd6","url":"tw_stocks/1721.json"},{"revision":"2a2e31b2c6f6585d4a427b2ae83f09ae","url":"tw_stocks/1720.json"},{"revision":"868742ec1129d145673d1a6775d45ce8","url":"tw_stocks/1718.json"},{"revision":"647c59f923492110b7ceb0234e650dbe","url":"tw_stocks/1717.json"},{"revision":"b6f014ac3307a2795b4f1190d7498dbf","url":"tw_stocks/1714.json"},{"revision":"2a8c375cff137b03f173308e8751d908","url":"tw_stocks/1713.json"},{"revision":"eae1d98c35f76a2bb7a6dd9097135a16","url":"tw_stocks/1712.json"},{"revision":"ce1d536b71f558d78466f5a3860cce7f","url":"tw_stocks/1711.json"},{"revision":"6d59f084fad1169e8fb89f1655ce08f3","url":"tw_stocks/1710.json"},{"revision":"4e5ae2d937101c0f904f8c2fea46a840","url":"tw_stocks/1709.json"},{"revision":"dcf0a601d667ee411739bf766ae03483","url":"tw_stocks/1708.json"},{"revision":"89d24f1ab75688733b5245fcce5b3055","url":"tw_stocks/1707.json"},{"revision":"1d967dd91115bb07712a23606d0f9692","url":"tw_stocks/1702.json"},{"revision":"c9f3ec76e59e8e986b7f57da2ffdac75","url":"tw_stocks/1626.json"},{"revision":"ab92c7ecb9dfbdfbf6e677220ec8c554","url":"tw_stocks/1623.json"},{"revision":"71da4275065f38c2cba3dbcfdc6a22c9","url":"tw_stocks/1618.json"},{"revision":"60907dcd515e582bd68b3cd5862e9221","url":"tw_stocks/1617.json"},{"revision":"1bc48b67eab435b2c45ea810c615c789","url":"tw_stocks/1616.json"},{"revision":"a03f0c8fc3589876d47c324685becf04","url":"tw_stocks/1615.json"},{"revision":"8eb47d7719a43997d75f26cb93d1cede","url":"tw_stocks/1614.json"},{"revision":"c0ba547f9417065a26a4f0e137dd6809","url":"tw_stocks/1612.json"},{"revision":"e187b97ed2a482bd8405ff0db1ec59f5","url":"tw_stocks/1611.json"},{"revision":"a718ee8ad018af8173bc7010e105c3f7","url":"tw_stocks/1609.json"},{"revision":"1812d90724078352a3f654100cfd4841","url":"tw_stocks/1608.json"},{"revision":"78ece88fdb9875ffb3246ef2957bc646","url":"tw_stocks/1605.json"},{"revision":"cf7c0f04bd98f70489b45b9b51401dc5","url":"tw_stocks/1604.json"},{"revision":"8a06fd0e5005a4464a2c4b8ed6caac4a","url":"tw_stocks/1603.json"},{"revision":"ec5a829f2ca5fed3e0dee8ac1556066e","url":"tw_stocks/1598.json"},{"revision":"d40e2106cea36ba4507c48062c7801ab","url":"tw_stocks/1597.json"},{"revision":"febc97eb5ffe73abfbb2f46580abfa65","url":"tw_stocks/1590.json"},{"revision":"a7b93519917d67a92840e42bf261c984","url":"tw_stocks/1589.json"},{"revision":"ee94e2194f85c587926d7a3a94be2e4a","url":"tw_stocks/1587.json"},{"revision":"0d45cd580330b487720a7656a20d55d2","url":"tw_stocks/1583.json"},{"revision":"8483328fb754fe66d63b57c01eb273e6","url":"tw_stocks/1582.json"},{"revision":"b6b0c46165c2196fc2e74b003dd8edea","url":"tw_stocks/1568.json"},{"revision":"5f5711b4e93be250f9635adb01491b3c","url":"tw_stocks/1563.json"},{"revision":"1b15d227661bd4384fd7827590289efb","url":"tw_stocks/1560.json"},{"revision":"d0a5c1dfd3ae5d374975645c450686fd","url":"tw_stocks/1558.json"},{"revision":"f43776f48df1c37c1bbb89ed13642c4a","url":"tw_stocks/1541.json"},{"revision":"46ad93c8d99a9f2e6500ca40d103590d","url":"tw_stocks/1540.json"},{"revision":"96692dd5aa5ef10c301c05c0fce68fe3","url":"tw_stocks/1539.json"},{"revision":"5aa83d45289623292e731f71ffc6ba5d","url":"tw_stocks/1538.json"},{"revision":"413a6e6ae76e8dd229974942535e5a35","url":"tw_stocks/1537.json"},{"revision":"87be346e95f45e19852a35b0aab79aa0","url":"tw_stocks/1536.json"},{"revision":"4b6c70cee2f36bb2e51c57ea3bb3ff50","url":"tw_stocks/1535.json"},{"revision":"fc18507c996f6edd3e4d76181165d4f1","url":"tw_stocks/1533.json"},{"revision":"0ca0b1caeb906d56e6453990d78c226f","url":"tw_stocks/1532.json"},{"revision":"de80531ca91d7cc073e2185986015a9e","url":"tw_stocks/1531.json"},{"revision":"6e4057c6a131e8c89011b03e5fd396d7","url":"tw_stocks/1530.json"},{"revision":"2b289f14dc8ed9bd0b73e5326b53e800","url":"tw_stocks/1529.json"},{"revision":"673c13456f395d7f755fa86e3795d182","url":"tw_stocks/1528.json"},{"revision":"d3805279f5a8384c22e088cc0078784c","url":"tw_stocks/1527.json"},{"revision":"791c22a474960f352af2d565cda1582f","url":"tw_stocks/1526.json"},{"revision":"84e5eda6d9e196996bb93787422c4c82","url":"tw_stocks/1525.json"},{"revision":"a93cc9133631611f3e4d329b899ebba7","url":"tw_stocks/1524.json"},{"revision":"55c7e9acde0bb445604e24f926ac30fa","url":"tw_stocks/1522.json"},{"revision":"20223289678ef27aba9075a3ac8d5319","url":"tw_stocks/1521.json"},{"revision":"4e68e4a96e5104628167a0141165364b","url":"tw_stocks/1519.json"},{"revision":"3ffd5b5b6a723d71badf321ae09ebd86","url":"tw_stocks/1517.json"},{"revision":"ee0dc10afa20741a3675e572d7a29ad0","url":"tw_stocks/1516.json"},{"revision":"9db3ec8547467bf14f6372fe5992b4a2","url":"tw_stocks/1515.json"},{"revision":"164d3fcd62a7d144cc3c1b7c8b59e970","url":"tw_stocks/1514.json"},{"revision":"2d2176afcbe129b414558625eb6168f6","url":"tw_stocks/1513.json"},{"revision":"2891e3b936cc2e6406a9670669ad97b9","url":"tw_stocks/1512.json"},{"revision":"8098188aa0df1e54cae26116bdf41d98","url":"tw_stocks/1506.json"},{"revision":"461f227a175818801b02c18421c70c3b","url":"tw_stocks/1504.json"},{"revision":"40e8f75016f88c349def69e45c31e275","url":"tw_stocks/1503.json"},{"revision":"c6f4b90d78888988074f76b337662072","url":"tw_stocks/1477.json"},{"revision":"0e6751cd428364e8fdcea09bd1e3ca15","url":"tw_stocks/1476.json"},{"revision":"f7ac2a8495bc7b2c0dc54a3d5353e4b2","url":"tw_stocks/1475.json"},{"revision":"5b8081b9d0deeeb4bddbabcc57333931","url":"tw_stocks/1474.json"},{"revision":"9cbb1907eba960c6f739a2699832d3b0","url":"tw_stocks/1473.json"},{"revision":"7602a45f0e0b6f71b393fc3a885e5c5c","url":"tw_stocks/1472.json"},{"revision":"7f0df2ec1c2a65955bc6c54c2897f9bd","url":"tw_stocks/1471.json"},{"revision":"bd3fbe2e98a2fbc72f41cde0c43a1e8e","url":"tw_stocks/1470.json"},{"revision":"04c7131cf62db40750644de83e3c850a","url":"tw_stocks/1468.json"},{"revision":"65efaf76f51f16d24f14adeab0a76a17","url":"tw_stocks/1467.json"},{"revision":"3ec0cf4d86459f035a583e3b69f6dccd","url":"tw_stocks/1466.json"},{"revision":"11ded5c91253ffe4bcfa60856c741e34","url":"tw_stocks/1465.json"},{"revision":"da0567d99822359d3c0f7a8129d23b97","url":"tw_stocks/1464.json"},{"revision":"d4669acc15551b6a6eebbaebb757cfae","url":"tw_stocks/1463.json"},{"revision":"ea83fc82c89ac51a9b55237bfcaffe37","url":"tw_stocks/1460.json"},{"revision":"920f70ecd33a07c88288c2205a1a8c32","url":"tw_stocks/1459.json"},{"revision":"c34bdbd57aafc148e37db6de29d1bc07","url":"tw_stocks/1457.json"},{"revision":"01445a2b75c70bb6766ff9b6702c03b2","url":"tw_stocks/1456.json"},{"revision":"0e6096803bb32d2eb44ca57d52450776","url":"tw_stocks/1455.json"},{"revision":"cfd5c6d3424b9e7655dda1a68672cc6d","url":"tw_stocks/1454.json"},{"revision":"9e1696b0f6ecadcad5dc3f658f41358e","url":"tw_stocks/1453.json"},{"revision":"4ff44c3845dfbba7f7e51c4f1401eb2d","url":"tw_stocks/1452.json"},{"revision":"8077d1d749109a974f9f51a73c3f16c0","url":"tw_stocks/1451.json"},{"revision":"1ad6da48407d7c384c3516c14c2d0587","url":"tw_stocks/1449.json"},{"revision":"3349cc7d5a5ef28a19bb6ccc038995f0","url":"tw_stocks/1447.json"},{"revision":"574bf8f10b92045e9905ccd78dcbfd83","url":"tw_stocks/1446.json"},{"revision":"bc93fda84062f3ceb8863748337c702c","url":"tw_stocks/1445.json"},{"revision":"1a8466051192fc9847eac30015641784","url":"tw_stocks/1444.json"},{"revision":"b1edb522ab011e2b32634ac59c65e9a6","url":"tw_stocks/1443.json"},{"revision":"d65f02908e6127bb45ad6d6a06653434","url":"tw_stocks/1442.json"},{"revision":"f136cdb106f54c2bbc3491dbf75733f7","url":"tw_stocks/1441.json"},{"revision":"03872aa8f5fd1ef77a8090390bc51b85","url":"tw_stocks/1440.json"},{"revision":"05bf046fa6186f79f9f2a8d6ab5dd280","url":"tw_stocks/1439.json"},{"revision":"1da79becfe50c2828fb8fe8cb6505f51","url":"tw_stocks/1438.json"},{"revision":"3fe5adff9e49a1a4597d0972f989197b","url":"tw_stocks/1437.json"},{"revision":"c02c48563031985a409b6e2db691c3a4","url":"tw_stocks/1436.json"},{"revision":"0e3daff0940c5773080d0262cbdd1f36","url":"tw_stocks/1435.json"},{"revision":"200105fb1a598e831b561793d2cac5d0","url":"tw_stocks/1434.json"},{"revision":"90df2c696181940e53399173291888ef","url":"tw_stocks/1432.json"},{"revision":"47aee40b6e60990995d36782bed2b9b4","url":"tw_stocks/1423.json"},{"revision":"48815a642239296cc05fb8f3cb70ca27","url":"tw_stocks/1419.json"},{"revision":"f7958666fb60dcabb4882f5daa8e22fa","url":"tw_stocks/1418.json"},{"revision":"cfc02f30d43b154486ef11e4d0e61e54","url":"tw_stocks/1417.json"},{"revision":"42c012d409c1afbd774b58bf25e9d63c","url":"tw_stocks/1416.json"},{"revision":"a87abd0db4f0b9542942f70cb8ced857","url":"tw_stocks/1414.json"},{"revision":"5a7e5743c17167ce83eaf835d83cb535","url":"tw_stocks/1413.json"},{"revision":"3e98d1d557761af22be7971bbdde4890","url":"tw_stocks/1410.json"},{"revision":"18ca99c4819ecd9fc72983d674ed2f68","url":"tw_stocks/1409.json"},{"revision":"a1469437655ec502b57df61a8e406d12","url":"tw_stocks/1402.json"},{"revision":"d504bfe65ec9d3fb1af0f5fdf6ae2481","url":"tw_stocks/1342.json"},{"revision":"1103a22e0b74d3cb95d47ff1d636951e","url":"tw_stocks/1341.json"},{"revision":"5b025a4beb0eb0a3a8f344cbc6458136","url":"tw_stocks/1340.json"},{"revision":"e8fa6656dfe51e327a2239341c7f82f5","url":"tw_stocks/1339.json"},{"revision":"1060f6e059425bec84a820c328e1ad44","url":"tw_stocks/1338.json"},{"revision":"a5fa37071dab449aea4154830a377f6f","url":"tw_stocks/1337.json"},{"revision":"a5c3ff186ce483bf0e9824d7af741d61","url":"tw_stocks/1326.json"},{"revision":"e95006ac7d5aefea4d97d7d2cdd0de3b","url":"tw_stocks/1325.json"},{"revision":"0479ab7520ed6a5aad9a9a92e6e62f15","url":"tw_stocks/1324.json"},{"revision":"cf10b411da6f71a24e5f6e927117dfd5","url":"tw_stocks/1323.json"},{"revision":"7c1182f3c704c19372e298f9e6ffc3f6","url":"tw_stocks/1321.json"},{"revision":"f785fdbdcfb13c7c66af40f0f1e70615","url":"tw_stocks/1319.json"},{"revision":"20ec42067cd3be01e32db3d972de5681","url":"tw_stocks/1316.json"},{"revision":"1cec85091413b751bfe5dba588b4bcf1","url":"tw_stocks/1315.json"},{"revision":"3e7435bcb8a5e509bea55d6b31a6abe7","url":"tw_stocks/1314.json"},{"revision":"0ccf903f6598cb1a517cde89338603f9","url":"tw_stocks/1313.json"},{"revision":"d2cd371dbd924c7109af90f99079ec46","url":"tw_stocks/1312.json"},{"revision":"dc45e0e47a6c266eb8dbb905789919aa","url":"tw_stocks/1310.json"},{"revision":"78735ca91d7b5038c295fe1d6d3e4554","url":"tw_stocks/1309.json"},{"revision":"57066fe579f8d5f764a3578163b044ed","url":"tw_stocks/1308.json"},{"revision":"ef2d0a7fc92524bb20bc3d674b82854e","url":"tw_stocks/1307.json"},{"revision":"5d67fa79606bcb26e5c16ca376f72d18","url":"tw_stocks/1305.json"},{"revision":"934f68ea61b7dff0d4618366ebaf3b41","url":"tw_stocks/1304.json"},{"revision":"9981815347c6561a63845cf2ea764da4","url":"tw_stocks/1303.json"},{"revision":"d1c17b0ff1caef340998d6a805a7b8a4","url":"tw_stocks/1301.json"},{"revision":"a6cdaeece44587c75f5325f643bd0b61","url":"tw_stocks/1256.json"},{"revision":"21aa1642ff0cce996707a48d56b57bb0","url":"tw_stocks/1236.json"},{"revision":"954dc8c8a3743ee18881a4861df1549e","url":"tw_stocks/1235.json"},{"revision":"896a6b7c9c4fb0e9781bf0e2b7c0eb26","url":"tw_stocks/1234.json"},{"revision":"04746d34f82530adc76e3478d660f3dc","url":"tw_stocks/1233.json"},{"revision":"c4835204babf300154417f7ba78a661a","url":"tw_stocks/1232.json"},{"revision":"56cb1d3a9e23c0675e78f9a6f33b426c","url":"tw_stocks/1231.json"},{"revision":"d357de03d803f8f4d3855424495f81a2","url":"tw_stocks/1229.json"},{"revision":"ce60a28ddec2e2572a400108340d2456","url":"tw_stocks/1227.json"},{"revision":"695983dadd9638812eb3043ee87572cf","url":"tw_stocks/1225.json"},{"revision":"f3ace1bc03ac9705e70f7a3fce980db9","url":"tw_stocks/1220.json"},{"revision":"c32850b562e87abd0aa90097707d9b2f","url":"tw_stocks/1219.json"},{"revision":"ebb5c59791bb3f124ed095b60dc7329d","url":"tw_stocks/1218.json"},{"revision":"38f0710cf507bdcf28b408febd282061","url":"tw_stocks/1217.json"},{"revision":"f4c6ee5f3e6f459f5de71fb8d2e53a1b","url":"tw_stocks/1216.json"},{"revision":"14fd0b9233febe358d6d387b0c9a03cb","url":"tw_stocks/1215.json"},{"revision":"29431a2d71e8d56d94fc63995d41ad28","url":"tw_stocks/1213.json"},{"revision":"ac526ae03bbe3d65b2c22ada4c954153","url":"tw_stocks/1210.json"},{"revision":"cbd7006516dcf0689a7d20426d8d981b","url":"tw_stocks/1203.json"},{"revision":"1d0ccb56f5ae5b51fea571867d995a26","url":"tw_stocks/1201.json"},{"revision":"ebceb9e03bdb8947071b6605d70e5307","url":"tw_stocks/1110.json"},{"revision":"b995f7b9ac9af77db29bdf001bb627a5","url":"tw_stocks/1109.json"},{"revision":"2574e8e7df35b5ae0941e26851dbeb22","url":"tw_stocks/1108.json"},{"revision":"8ebaa8665ccc545e511604deebbba771","url":"tw_stocks/1104.json"},{"revision":"9483e14924d23bd1c9ae540bf2f75dce","url":"tw_stocks/1103.json"},{"revision":"4bcd7aef27ca130006eed8cf2f128954","url":"tw_stocks/1102.json"},{"revision":"218ac3c587de13ea433c17e9c84a8d4d","url":"tw_stocks/1101.json"},{"revision":"740987951677222cdb6f4e3d9840a082","url":"tw_stocks/00996A.json"},{"revision":"40df76704212448accbf78dab2c749be","url":"tw_stocks/00995A.json"},{"revision":"80d988bb2e9b0558e272d872e6dbaab6","url":"tw_stocks/00994A.json"},{"revision":"a08603b16f0878d5f58003d99be0244f","url":"tw_stocks/00993A.json"},{"revision":"7a36aa49f6264d3985e3885de6a02be7","url":"tw_stocks/00992A.json"},{"revision":"6f47c09748b99ece76fd65e6e998e361","url":"tw_stocks/00991A.json"},{"revision":"c9e68a13d1415833af801015b28af51b","url":"tw_stocks/00990A.json"},{"revision":"6ea35bd1bd7833571f55a14fb1cd6a42","url":"tw_stocks/00989A.json"},{"revision":"9bbf0d81a83f86d536691ba35f5fa141","url":"tw_stocks/00988A.json"},{"revision":"8666ccb31fe7e8e2493093f31977f663","url":"tw_stocks/00987A.json"},{"revision":"b85d3ba17a0766d248710b056dd41bda","url":"tw_stocks/00986A.json"},{"revision":"cba1202de96e17d01bdb7259163324de","url":"tw_stocks/00985B.json"},{"revision":"a45c241bfb8535dd5b12a5494f792ad6","url":"tw_stocks/00985A.json"},{"revision":"0f8f587631a4df8a5fa721312510fb4a","url":"tw_stocks/00984D.json"},{"revision":"0fc0cfc9acf14f745a5e304f2e8c0f43","url":"tw_stocks/00984A.json"},{"revision":"fbb66b61d2f358ea19e09440719199a2","url":"tw_stocks/00983D.json"},{"revision":"82ca443bf71dd3777445d81c1cb82160","url":"tw_stocks/00983A.json"},{"revision":"fef3a8de2cd193723a7b8e5017075876","url":"tw_stocks/00982T.json"},{"revision":"eef5f0dbc2109373620bca5ebd68f8f8","url":"tw_stocks/00982D.json"},{"revision":"6c99493e84719e917f52c55f063c8948","url":"tw_stocks/00982A.json"},{"revision":"abd0822974f4b6ceaa8443d1cce00307","url":"tw_stocks/00981T.json"},{"revision":"7a6d27541d490792e36e54e3dc4e494d","url":"tw_stocks/00981A.json"},{"revision":"856bee86f971147412592daa248c9664","url":"tw_stocks/009818.json"},{"revision":"dcecaeaba4edc61e3179064b037d834f","url":"tw_stocks/009817.json"},{"revision":"72859974ac3ed3fa13fba63377a0b5ca","url":"tw_stocks/009816.json"},{"revision":"963f5a9f656c1674406e089be1ad831a","url":"tw_stocks/009813.json"},{"revision":"896d30c770e8dc9e78b7c238690dfe8f","url":"tw_stocks/009812.json"},{"revision":"3b99bfe522fe997959e9bd2ec63e574b","url":"tw_stocks/009811.json"},{"revision":"d4bb30dedd23dc2b28a91102d6da8861","url":"tw_stocks/009810.json"},{"revision":"086258f78a8ac894789783bfaa7c4e25","url":"tw_stocks/00980A.json"},{"revision":"3b071c28411fc64d24b2faaa01bb2af1","url":"tw_stocks/009809.json"},{"revision":"7cd2b236105bff313dd341ff6b365711","url":"tw_stocks/009808.json"},{"revision":"9632cf5dba864442e4f1f391569f67a9","url":"tw_stocks/009805.json"},{"revision":"d9ec805eb654f7df67201db6a3cf3c7d","url":"tw_stocks/009804.json"},{"revision":"7127218f96a0b688de62d57df326b35b","url":"tw_stocks/009803.json"},{"revision":"bda6b264f2473d5ca46f57bf94278576","url":"tw_stocks/009802.json"},{"revision":"a9d1d5b34a31d75beebf7ca735a4ff5e","url":"tw_stocks/009801.json"},{"revision":"aa734fd431909683a67c85f42453f5ff","url":"tw_stocks/009800.json"},{"revision":"71367fe32488c45a293bb9a9259c56cf","url":"tw_stocks/00972.json"},{"revision":"1b872b4e23e9971b540669d760f82cad","url":"tw_stocks/00971.json"},{"revision":"a029ad9fe87981fd9ff056db6772f601","url":"tw_stocks/00965.json"},{"revision":"88bc95e83346602c9b7bc28ce4142ff8","url":"tw_stocks/00964.json"},{"revision":"3d7f08fe40bb10311b4fc2464b772bd9","url":"tw_stocks/00963.json"},{"revision":"5159d45afb3bc878bd9f0203da5b75d3","url":"tw_stocks/00962.json"},{"revision":"bd74063d379a3055e4235adc6c8d43ae","url":"tw_stocks/00961.json"},{"revision":"0e5ed1de21bc171883db5ac4dbf1f641","url":"tw_stocks/00960.json"},{"revision":"fca5688180e2514f7cb7d010ad6face0","url":"tw_stocks/00956.json"},{"revision":"f4acf7cdf93ffb8aa3c0d563ebc200ef","url":"tw_stocks/00954.json"},{"revision":"dffe4075152df2e428d0d9e61ee77b98","url":"tw_stocks/00953B.json"},{"revision":"94349c6cb4d8a39b44a02561506a502d","url":"tw_stocks/00952.json"},{"revision":"579233ad2120f54753f969943856701a","url":"tw_stocks/00951.json"},{"revision":"de06a89c62e1542f18b82f4312472ad4","url":"tw_stocks/00949.json"},{"revision":"5a690c0454885b8d5defea07ad32da24","url":"tw_stocks/00947.json"},{"revision":"31dcf0039e8e269c1f5f039abba3c681","url":"tw_stocks/00946.json"},{"revision":"c3c05044c36864a721058ffafb49b728","url":"tw_stocks/00945B.json"},{"revision":"6ab9786dd5424209848b32e32d9890a9","url":"tw_stocks/00944.json"},{"revision":"d9012f70e55fd2d68aae4233747e3875","url":"tw_stocks/00943.json"},{"revision":"183f7065ccff06a4946a40d54b270cf1","url":"tw_stocks/00941.json"},{"revision":"dd664f72909e3a9d6a4ced2aa94631b5","url":"tw_stocks/00940.json"},{"revision":"8072d1b9335c5ec9de53fa9b1bed4062","url":"tw_stocks/00939.json"},{"revision":"a108e98e1387b78c23c5e4ae122de541","url":"tw_stocks/00938.json"},{"revision":"9e6c8ced5f378a576561cac39e8c691a","url":"tw_stocks/00936.json"},{"revision":"58439707903c6138e013a7b9d735a4e0","url":"tw_stocks/00935.json"},{"revision":"dc8541b006e015e95819b0104ea2c3fd","url":"tw_stocks/00934.json"},{"revision":"ab2e7ee2eb2e079a1cc8eece57f56c13","url":"tw_stocks/00932.json"},{"revision":"ea200a2ac7adb14a7b38a259de343bb1","url":"tw_stocks/00930.json"},{"revision":"84419ecf54436c8785c4b48a99268379","url":"tw_stocks/00929.json"},{"revision":"02c0a1f4f57ae551b6b835f5c34a253c","url":"tw_stocks/00927.json"},{"revision":"bf92de40ea0b89f95ed64e4991480db0","url":"tw_stocks/00926.json"},{"revision":"4a15daba69dbc63a9dc4400b5b147be6","url":"tw_stocks/00924.json"},{"revision":"73eb28e01fd21c9ce480ed8a5f56ddd9","url":"tw_stocks/00923.json"},{"revision":"7a60596aaa92375a108f7d2d8f63d3eb","url":"tw_stocks/00922.json"},{"revision":"a225448ad9e4d021f82f0d815f3dcc17","url":"tw_stocks/00921.json"},{"revision":"a28162d361c797ee0247fd5e22f8f6e1","url":"tw_stocks/00920.json"},{"revision":"0d89cecbe1264e47399a4bd86bbcc9ec","url":"tw_stocks/00919.json"},{"revision":"52435c2b148526f92ef37d8857a870ab","url":"tw_stocks/00918.json"},{"revision":"298a5174d82e1cf790ffc0b10853ea62","url":"tw_stocks/00917.json"},{"revision":"d2a72b67db57671b508dc1a61a10783c","url":"tw_stocks/00916.json"},{"revision":"d36de555988346213fcf0ba5d91864f7","url":"tw_stocks/00915.json"},{"revision":"e2a387af4a0244d4411908dfa7d87d07","url":"tw_stocks/00913.json"},{"revision":"272ddd01d8ba9801fd7998a67192f697","url":"tw_stocks/00912.json"},{"revision":"ebe3cfd8627ca389f437c22b6eb0b4b9","url":"tw_stocks/00911.json"},{"revision":"0af4c8ea25e09a66fd933b975b076ce3","url":"tw_stocks/00910.json"},{"revision":"7029b753ce1d391268b2cf64725d5e8b","url":"tw_stocks/00909.json"},{"revision":"f66b7b4b983729a8d24c6ae55cd0b571","url":"tw_stocks/00908.json"},{"revision":"99d675e2c674199eb904cb5b863e7845","url":"tw_stocks/00907.json"},{"revision":"1f1906f466b96301d25c1082cca5f0ca","url":"tw_stocks/00905.json"},{"revision":"696eac7a5d61843ff7283bdf078a01b2","url":"tw_stocks/00904.json"},{"revision":"c0d74db92351c6576083526cbd806d69","url":"tw_stocks/00903.json"},{"revision":"ef53f9f04bc04b26a33f53b65c264c97","url":"tw_stocks/00902.json"},{"revision":"222ed172d642de5fbf1d3379d4f1f157","url":"tw_stocks/00901.json"},{"revision":"26ea1c00c749078b364eb877b76e37b9","url":"tw_stocks/00900.json"},{"revision":"0d4c6566046959f6673905b856df6756","url":"tw_stocks/00899.json"},{"revision":"b309322be30eb1e79c0ea16e2f6cf642","url":"tw_stocks/00898.json"},{"revision":"7129e034ddc172b5317fe3cecce747f7","url":"tw_stocks/00897.json"},{"revision":"5aad5b8411d78a4b96f00001c10e8356","url":"tw_stocks/00896.json"},{"revision":"db59baf63c959dae056ae402c7ee78dd","url":"tw_stocks/00895.json"},{"revision":"e8dea9b35beddef336f3e184bf78f2b2","url":"tw_stocks/00894.json"},{"revision":"7983d91fa14fe22eccd2b15a08f73e2f","url":"tw_stocks/00893.json"},{"revision":"0c97a906bc5aba29a8aa301988bb63f6","url":"tw_stocks/00892.json"},{"revision":"a20dde126a5d6b8191fa374e0d851082","url":"tw_stocks/00891.json"},{"revision":"c6509d1a02b5da1eeef02a464a65af6a","url":"tw_stocks/00885.json"},{"revision":"ee5cc37100adbf8525d427b59f044c01","url":"tw_stocks/00882.json"},{"revision":"cdfeb64db5f63d707ca8b5403228d6b5","url":"tw_stocks/00881.json"},{"revision":"6db4bed0a490f696ea5786f574a131af","url":"tw_stocks/00878.json"},{"revision":"c91c0cec270043608de9d238dc163d83","url":"tw_stocks/00876.json"},{"revision":"352ccf3c396ba8212a1a0724b935dd25","url":"tw_stocks/00875.json"},{"revision":"377a4326b0f87b41c630b78c02dc720f","url":"tw_stocks/00865B.json"},{"revision":"686d20b3a31a17509dc034508b3cf96f","url":"tw_stocks/00861.json"},{"revision":"89843ef3c799c27d71df44ae76486ad7","url":"tw_stocks/00852L.json"},{"revision":"50c1b77758506531f62028c3af57a539","url":"tw_stocks/00851.json"},{"revision":"8878496495f25ec98161d7aba355ede7","url":"tw_stocks/00850.json"},{"revision":"b0da1fc3d3f01aa8bc36712f9e4bbf90","url":"tw_stocks/00830.json"},{"revision":"2d866678e74d09d9b1971f10e5c51990","url":"tw_stocks/00783.json"},{"revision":"2806e1bba428f278b098862c1363f96e","url":"tw_stocks/00775B.json"},{"revision":"39a90368e5b031c2b14d02aac10317d5","url":"tw_stocks/00771.json"},{"revision":"bb8f2efaa3c9885e0e3379db2d2defee","url":"tw_stocks/00770.json"},{"revision":"c7f38111febfcafebf464729144ec6be","url":"tw_stocks/00763U.json"},{"revision":"80e70cdec08e8b370542cabef790d70f","url":"tw_stocks/00762.json"},{"revision":"7091c2f675513cbc8f12a199e1ac035d","url":"tw_stocks/00757.json"},{"revision":"53d976bdf760150d450687b9fc82121e","url":"tw_stocks/00753L.json"},{"revision":"86d5b0462517a1c23113aaf5db622702","url":"tw_stocks/00752.json"},{"revision":"a774d6f48737bd9c7b0b105908e462d9","url":"tw_stocks/00739.json"},{"revision":"9eaa79001508ea0144977fa760599634","url":"tw_stocks/00738U.json"},{"revision":"f560775dae813973c3e8375578859bb4","url":"tw_stocks/00737.json"},{"revision":"afb2c1e6f3caeea15635c1140c4e0883","url":"tw_stocks/00736.json"},{"revision":"b48e7f34908e74b1d402142c98b9574a","url":"tw_stocks/00735.json"},{"revision":"5694804b2b5b73a20e348dfe41911e3d","url":"tw_stocks/00733.json"},{"revision":"aa101a411fdbba6614297e4354a6fcd3","url":"tw_stocks/00731.json"},{"revision":"0c2136ce834d205b50ec67898dc3a610","url":"tw_stocks/00730.json"},{"revision":"8909a876977f3f8ba9b330db5d34b4bd","url":"tw_stocks/00728.json"},{"revision":"26e24012c9d6d83bd68fc22cb93779f7","url":"tw_stocks/00717.json"},{"revision":"655bdbc87a0dd3cb07fec4a612d661a8","url":"tw_stocks/00715L.json"},{"revision":"d0023956642bf2d9476d723478753587","url":"tw_stocks/00714.json"},{"revision":"68d6bb5da481399e4ae0a0dd39349e79","url":"tw_stocks/00713.json"},{"revision":"74a81721634f8f97c5151072a9b6c8b6","url":"tw_stocks/00712.json"},{"revision":"a3e613d9992168cc434827e95aded01b","url":"tw_stocks/00711B.json"},{"revision":"6f98bdfc86b1f50da2c7f764916a8b2e","url":"tw_stocks/00710B.json"},{"revision":"4cbfcb48ca0ada4ae8e262dfc5ab37a9","url":"tw_stocks/00709.json"},{"revision":"1496a3cc2bc59aec5cf78cfa1b579800","url":"tw_stocks/00708L.json"},{"revision":"1a5c67a24d3158d6feaf4994fa2fc733","url":"tw_stocks/00707R.json"},{"revision":"9975f108d5ba28e31bde039b8af77387","url":"tw_stocks/00706L.json"},{"revision":"1cd27471a91d8b8526a2221e3b94f515","url":"tw_stocks/00703.json"},{"revision":"38dd4c36427fe721080b42c67e4b3fc7","url":"tw_stocks/00702.json"},{"revision":"18a5ae811caff6641bff192c2dfaf90d","url":"tw_stocks/00701.json"},{"revision":"3f24edbeb0c3b050b98d0cb26058549c","url":"tw_stocks/00700.json"},{"revision":"81d0e659e7e43745809315ee03e39a62","url":"tw_stocks/00693U.json"},{"revision":"0c31d33317a5a32e5b04834b0692ef21","url":"tw_stocks/00692.json"},{"revision":"e59251f170bc3e8e986c7ed048a1008c","url":"tw_stocks/00690.json"},{"revision":"4389edaf45fe82d0d78f8116db8075d5","url":"tw_stocks/00689R.json"},{"revision":"657bbadbdc1713699f186b282ed0fe77","url":"tw_stocks/00688L.json"},{"revision":"3615d3907dfb75a745280da3745e71b6","url":"tw_stocks/00686R.json"},{"revision":"840454f9fdc523ec6ef53baa574f281a","url":"tw_stocks/00685L.json"},{"revision":"588a3b305fbf7c629781b2ce7f165ac5","url":"tw_stocks/00684R.json"},{"revision":"27b3daa8c051421e59b5bcb5300ddb0e","url":"tw_stocks/00683L.json"},{"revision":"cb5f56683a588e7fca5aa21e6d3e81ea","url":"tw_stocks/00682U.json"},{"revision":"000fb85c1a6d611d37c40dfba2440433","url":"tw_stocks/00681R.json"},{"revision":"9f770d752aa7b97ce53c07091ea322fb","url":"tw_stocks/00680L.json"},{"revision":"ca884bc767e120e81c3a02673d1c5261","url":"tw_stocks/00678.json"},{"revision":"e6769595f524812f3d5e574a3ed31fe3","url":"tw_stocks/00676R.json"},{"revision":"9a559a88fd84f1ee43987143384ba8ca","url":"tw_stocks/00675L.json"},{"revision":"7259bf4d665fa433b6e750393df155ba","url":"tw_stocks/00674R.json"},{"revision":"baaae5ad92c7ab6e6a4d6b88788683ed","url":"tw_stocks/00673R.json"},{"revision":"90a18e22b04b99e55edde73355dd11c2","url":"tw_stocks/00671R.json"},{"revision":"1f27ea8f9c79b04c6cdb28cd9b48957b","url":"tw_stocks/00670L.json"},{"revision":"4722c1b70dc8f914f3a8abb8c334e37e","url":"tw_stocks/00669R.json"},{"revision":"a675c991c3a38a9640f6849589879ab3","url":"tw_stocks/00668K.json"},{"revision":"6f83f70b3ae1b00aebc7aba6640ae815","url":"tw_stocks/00668.json"},{"revision":"1a65b5a7ed16f5839d22df307164ae04","url":"tw_stocks/00666R.json"},{"revision":"3cdf3db9d0563f3d0695d43e5e2bde92","url":"tw_stocks/00665L.json"},{"revision":"3ea212625faad7f090626226fdf0a536","url":"tw_stocks/00664R.json"},{"revision":"9cadf4666ed3e70efeaa497813dc9886","url":"tw_stocks/00663L.json"},{"revision":"50c9ca684c5748955d06bfa2981b95af","url":"tw_stocks/00662.json"},{"revision":"5d2841c602d23b4ad7959ce35c13fcb8","url":"tw_stocks/00661.json"},{"revision":"3bead78753d05d3d9cf37f91c3d0a946","url":"tw_stocks/00660.json"},{"revision":"f72e56179e646422587d304c6fb7e64d","url":"tw_stocks/00657K.json"},{"revision":"d3a55830a4f056b764c4e56f28e18d23","url":"tw_stocks/00657.json"},{"revision":"982beba9aa565f1210f5d2f0b629638f","url":"tw_stocks/00656R.json"},{"revision":"7629ba23bef79fb48d585dd81ae9a179","url":"tw_stocks/00655L.json"},{"revision":"0dbc0c75c01762217a42a2b557a9abdb","url":"tw_stocks/00654R.json"},{"revision":"0d4b9f366d61a63c052e755ad3be5139","url":"tw_stocks/00653L.json"},{"revision":"82d9eeb2b09acb4c920925c575f35eb4","url":"tw_stocks/00652.json"},{"revision":"35eb4b5856bbea90b072e6ba5d594c97","url":"tw_stocks/00651R.json"},{"revision":"7f98101b4cf9f798de1b78e6bc47ce30","url":"tw_stocks/00650L.json"},{"revision":"b85181ebdf79410e53148e6dea85206b","url":"tw_stocks/00648R.json"},{"revision":"15661c9f5e91d685c193fffe2cdf9ffa","url":"tw_stocks/00647L.json"},{"revision":"1f2fbfabae877aed63335012cddaeac4","url":"tw_stocks/00646.json"},{"revision":"72a7504226b9efae8a3da8e861d54d85","url":"tw_stocks/00645.json"},{"revision":"8fed4ebe9ea2a9f7b5b6506f05240197","url":"tw_stocks/00643K.json"},{"revision":"299934863d4c4328f9978a57093d76cf","url":"tw_stocks/00643.json"},{"revision":"b608ba9b5a6c80bb33e85acdda67827a","url":"tw_stocks/00642U.json"},{"revision":"41303c0d5a8473b75170c2d0a0c24efd","url":"tw_stocks/00641R.json"},{"revision":"e969fbccb71d77d916a7fb33372a4717","url":"tw_stocks/00640L.json"},{"revision":"2174240cbee3d31a3fb6948c51bbafb2","url":"tw_stocks/00639.json"},{"revision":"341415b76010abf8cdc26c4d66f95849","url":"tw_stocks/00638R.json"},{"revision":"e959a70b7612c41d5b2360489b8a00e3","url":"tw_stocks/00637L.json"},{"revision":"f38be6b35c5e2ba7093ddcd0b961bbfc","url":"tw_stocks/00636K.json"},{"revision":"8373a0fc1f3954df9bde03aac989ddd2","url":"tw_stocks/00636.json"},{"revision":"41ab29590f672bd8591373edfd101852","url":"tw_stocks/00635U.json"},{"revision":"feaa266112348c556305975f0e6b4c25","url":"tw_stocks/00634R.json"},{"revision":"d12614d4e6358cf6cf93cc4e2fc5622e","url":"tw_stocks/00633L.json"},{"revision":"98964369d5297b38b7d8ee96d8a86b6e","url":"tw_stocks/00632R.json"},{"revision":"8e1b1aa3ed08bd640cf12ed91cf9ab76","url":"tw_stocks/00631L.json"},{"revision":"3f99019e1bbb54ccbdf574b4b8d123e9","url":"tw_stocks/00625K.json"},{"revision":"377933706e4ad2a29aae7c1b4702dc62","url":"tw_stocks/006208.json"},{"revision":"ef222e413bf14d7a7df5ab8da68891e7","url":"tw_stocks/006207.json"},{"revision":"cac09c9f1e32d57e413efa1ea7164b8c","url":"tw_stocks/006206.json"},{"revision":"777785841532deb70bbcf4fccbff3a35","url":"tw_stocks/006205.json"},{"revision":"5e14b81642c6dc631928fb95542a2697","url":"tw_stocks/006204.json"},{"revision":"c2a39fa19a226555a7aafb489e989cda","url":"tw_stocks/006203.json"},{"revision":"a0634044da8d06872509109b100bf3eb","url":"tw_stocks/0061.json"},{"revision":"4dd098db3a974829c23f180d593f74b7","url":"tw_stocks/0057.json"},{"revision":"2a3729fdd1e68a3f5189d0d648d90ef6","url":"tw_stocks/0056.json"},{"revision":"bd33d1c478a37be00ab1a31de5a4bb92","url":"tw_stocks/0055.json"},{"revision":"80c4c22dffd6fd1b1c7c9983ec1c1e21","url":"tw_stocks/0053.json"},{"revision":"7c216b467f8a34aa391a8e6470cce9ed","url":"tw_stocks/0052.json"},{"revision":"5ef850a1113c7eb2471479e566d8a029","url":"tw_stocks/0051.json"},{"revision":"b1b2ae909a4f0c3af826b6efbe6620f6","url":"tw_stocks/0050.json"},{"revision":"651b2575241ada43609a5d8e9846d24c","url":"subscription/callback.html"},{"revision":"cc6bd5c0598620244d7f6ede49203964","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"eef284fd1245279cdbd916adb9397872","url":"financial/rebalance.html"},{"revision":"2c6d5767aaccb80a3ca9ba3c051f0c8f","url":"financial/cashflow.html"},{"revision":"d8e317e434da2df20393fe1176b88831","url":"financial/balance-sheet.html"},{"revision":"1640bacf7e133f1721367ceaa031606a","url":"finance/taiwan-stock-crash-warning.html"},{"revision":"ff0533b24cfc3112e4b704b0ed1e7985","url":"finance/tags.html"},{"revision":"ae7167680b0836e1f826a62c34a9cf5d","url":"finance/finance-section-created.html"},{"revision":"aafc1bbb427a215e06b72f8ee883e162","url":"finance/authors.html"},{"revision":"10d0d2c7d2411194a07ee3323dcf79c5","url":"finance/archive.html"},{"revision":"8a8cb7dd51d7d8c94cbe460f8005e946","url":"finance/ai-635.html"},{"revision":"49836c3b861677ae139504cf6b83da55","url":"finance/tags/newsletter.html"},{"revision":"b7b703c0203d3bbfe1f78c22413d5f61","url":"finance/tags/finance.html"},{"revision":"bd2849d87971006b39780a44b386f264","url":"finance/tags/announcement.html"},{"revision":"0715867564498d928f77512a58e697e8","url":"finance/post-453/index.html"},{"revision":"1ea15bb5c1d135992a17c5e0594d1503","url":"docs/tags.html"},{"revision":"0963f406d04b4fe0dd3c3c4ea2157553","url":"docs/intro.html"},{"revision":"56a0df49c0d4c1a941e64eb440b18e2f","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"fdd991684bd555b047ae723c4f974382","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"430c60b31915d4a0fa31fda20ddcef73","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"6e2ec3922edffd000fd51bc4923bd62e","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"01cbe6c6d878fab1cc5a25217dfd02d6","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"30b40a9e6c25e92e1a1d9e42abab9048","url":"docs/tags/模型控制.html"},{"revision":"612a93125f6f9d0708d9c20e15cd9c54","url":"docs/tags/top-p.html"},{"revision":"ff34edf586ef85293a0cdcf697d046ec","url":"docs/tags/tokenizer.html"},{"revision":"d90968c0b13b78e60ba408dd047d6b3d","url":"docs/tags/temperature.html"},{"revision":"81ef378bb14a987f0e601d1234f27767","url":"docs/tags/technical-docs.html"},{"revision":"d46d65d3bf920e2c3933f78b0679a3fa","url":"docs/tags/nlp.html"},{"revision":"925a05c9d64191ad9ca7e61186bf1e1b","url":"docs/tags/llm.html"},{"revision":"e112e679a1ce83bb45ffdc6e5272ea0c","url":"docs/tags/git-hub-copilot.html"},{"revision":"a0cfa1822cb47367507bf456f957c060","url":"docs/tags/generative-ai.html"},{"revision":"b775fb8ca9029a64203eedcd31c672e4","url":"docs/tags/development-tools.html"},{"revision":"42b3ba3be9aab450a1c6fedf782421f7","url":"docs/tags/cli.html"},{"revision":"25d8e14e48b2e899207d166489813ca9","url":"docs/tags/claude-code.html"},{"revision":"d19a2dc9bf2070d6674d515d10388462","url":"docs/tags/bpe.html"},{"revision":"b9eefea4f598af1793cc9d3d3d7b0f0a","url":"docs/tags/automation.html"},{"revision":"12936562b3e6cb116d9492200ef2c33a","url":"docs/tags/ai.html"},{"revision":"cc71fc1c4fb00065a6dc627ffa60c272","url":"docs/tags/agent.html"},{"revision":"52b0ff09a245df9bde0917edd98e9263","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"0bb6c9faae304e7c6fba8d01d5731f00","url":"docs/skill/gemini-skills.html"},{"revision":"c5576695c572fb5edd0358bf27ebdc37","url":"docs/skill/claude-code-skills.html"},{"revision":"aea7d7cacf2aa0404e7f27846fa924be","url":"docs/python-workshop/python-init-file.html"},{"revision":"10c7c0adae8bc6f40fc2824c9b50d418","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"c5cd0888572a858e32adbbba590e8307","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"5ead75f3c1ce7800736cec180415597a","url":"docs/claude-code-series/skills.html"},{"revision":"bd83314563bdd5174f3ffc7d9ac95f27","url":"docs/claude-code-series/monitoring.html"},{"revision":"149ce2b1c2fca87f1510e22f5b099db0","url":"docs/claude-code-series/getting-started.html"},{"revision":"fe54c5c0909468f3da63e86774492b14","url":"docs/category/發文-skill.html"},{"revision":"94935bf6a329da4becb401335d0293b6","url":"docs/category/戰情室元件-skill.html"},{"revision":"d3a32ca738c53aa3a8bad8dada135f81","url":"docs/category/skill.html"},{"revision":"cf4341d87704fcc2e527bfa418c63fd7","url":"docs/category/python-workshop.html"},{"revision":"a29af5ec4e596425a7b7a0f26f2b43db","url":"docs/category/claude-code.html"},{"revision":"261399dcaf336aec1ad63b9a9353fb40","url":"docs/blog-skill/news-rules.html"},{"revision":"0b074bab68abb4862243d338489414f5","url":"docs/blog-skill/history-rules.html"},{"revision":"b1546c930f202e5b7230b112b3b7ae6b","url":"docs/blog-skill/finance-rules.html"},{"revision":"50c702dd9f24a1723e93b95cde30eec6","url":"auth/callback.html"},{"revision":"98d14b7a434f2f5cf94b6b37230f861c","url":"assets/js/runtime~main.92c4a26d.js"},{"revision":"98ed97571f9edfa6d5ac40cab0342c3b","url":"assets/js/main.d4faf1ba.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"b5b08ef1d56cfc70813901e250d12d92","url":"assets/js/f71290dd.e9ceded4.js"},{"revision":"4d0f21289334a19b2aa19bfd4745fe99","url":"assets/js/ec1e3285.0fab9f8d.js"},{"revision":"5cd84bbc3ca83c11e5041b8ab4d1ecc9","url":"assets/js/e88c4a9c.f6cb07bf.js"},{"revision":"eb52176eb2198a5033c5915be39aca23","url":"assets/js/e86a5a75.6fc647e8.js"},{"revision":"966277fe79442b74a71147e7132d2d06","url":"assets/js/dfea6eb9.4b4c83cd.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"821e38d1a2d54cdbac28fa4bc6731a95","url":"assets/js/dd726b46.e175d4a1.js"},{"revision":"f72c15b37c0cb466e7199b016e3cc0c2","url":"assets/js/dd5b562f.fd6af605.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"96420b668e86094913d7016ddebd5586","url":"assets/js/d0c9de85.43950495.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"af9476676e26fdd00cbd7740372eea0d","url":"assets/js/cc221b30.bb0bcb15.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"deb9286b3edf63119229fe82bb5cd191","url":"assets/js/c3b1af5c.0e2b56f1.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"37ef965f9a383903d8985e4246ef93be","url":"assets/js/b95eaafa.a20b7ef8.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"a30fc971db701b61400f57bf42650f17","url":"assets/js/b283ca86.b4d00123.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"209fbd11b5401736ca93c25c2b358057","url":"assets/js/a6038fd8.287d191e.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"bb9dcd8acd490144809827bcca05e2fa","url":"assets/js/99d3b34a.ecfe2830.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"1b6b3e4ad1ef7a3883f44001250d12f2","url":"assets/js/923ed0b3.5c61f219.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"79976dc924e808f7f5733133cf093caa","url":"assets/js/90326f8c.95cbd32d.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"fe52d1be5b60894e15c131ab1b1ba479","url":"assets/js/8c20996d.8302995d.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"4a3ffb8c6fc83e522e002706979d6d69","url":"assets/js/898514b1.26f59acf.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"51a9b4a1121bf1bcf279939b3bc97c22","url":"assets/js/853e1e42.2b8978be.js"},{"revision":"0e0842ed51f1cff11b9bdcca371970fe","url":"assets/js/853ca2df.b7f6f718.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"63bafd32459bed4105eb8e08a998b91c","url":"assets/js/7fbc1a25.17aad7d4.js"},{"revision":"ccb8726b4602d7214ef8fd074bac00b1","url":"assets/js/7ce5d7a1.ef5639f5.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"2a42e26d99daedb6a90bce96b5970035","url":"assets/js/607acb04.1e925e00.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"7baae726496d4a56a6fb7999e1a33f17","url":"assets/js/56fce896.968a03df.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"157ed8a662b08d2f89fe9588aad8d965","url":"assets/js/4810d89a.f3b0a594.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"02c68f0352a77511dcf2344f648bee73","url":"assets/js/43ea09b6.95edc566.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"e18f225553bdc3bacccfad2ca63e36ee","url":"assets/js/3ee3fb84.f02ecf34.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"6efc9cb7e35f8b7a9627aae70744a752","url":"assets/js/36f337b1.8dfa1927.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"584dfd333bae9986b728cfe590f0e5d0","url":"assets/js/23d26d3d.b749971e.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"4d6cda3b4597e927906496928c74d6e2","url":"assets/js/179b82d4.a9bed062.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"ee04f0fe7bd3d1035c4dd77875e4ac69","url":"assets/js/177ac620.58d72349.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"64831f6c05deacdfac150ea65f2b7f5c","url":"assets/js/162c7fa0.f21cd2a7.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"38f0e699b4a2615ce8648632681244b3","url":"assets/js/1266f974.e66cd63d.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"2d86bdeb035e49ea6941e2cf75a7d889","url":"assets/js/0e384e19.dca064e4.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"9fa725c5f88c83071fa7ef501eed3ea6","url":"assets/js/0058b4c6.fbf1839c.js"},{"revision":"2f77caed619d8244cc19b50646fe8c4e","url":"assets/css/styles.13bb9a21.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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