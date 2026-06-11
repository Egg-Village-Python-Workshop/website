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
    const precacheManifest = [{"revision":"e2ad8960c5d316cea8c09a731b3cfa12","url":"tw_stocks.json"},{"revision":"f6a390606b9185c2395f4839333cfe46","url":"subscription.html"},{"revision":"0915964db476f5a255444da88caf1206","url":"quotes.html"},{"revision":"3e0254b9e778cd96b2cca5c9f7b4b6da","url":"me.html"},{"revision":"f54301e83576d0085eb9dac925b9d394","url":"market-war-room.html"},{"revision":"51a71706479452813f121b7393df0432","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"8cbb966b187f2eb68c0e310353d00fe9","url":"index.html"},{"revision":"fd6d6c084441e87837839739c14b6268","url":"games.html"},{"revision":"1a9d8594ac3b3ccf133ef9c20d451fed","url":"finance.html"},{"revision":"fb8047f6d55cd559b85cd481a5266ba4","url":"feedback.html"},{"revision":"99512aae5a0d01eaee1752938ad35c6e","url":"arena.html"},{"revision":"d45f656bcdf769809c86e876fbb90b0e","url":"404.html"},{"revision":"10437d6b10c5853ab5303b953632ea78","url":"tw_stocks/9958.json"},{"revision":"8351450d617d2c9d2ceebcfe1491d096","url":"tw_stocks/9955.json"},{"revision":"a3cb33466ce5b20c601e4fcda643ad7d","url":"tw_stocks/9946.json"},{"revision":"0dd8ba83a6292cd922e96ee54525342e","url":"tw_stocks/9945.json"},{"revision":"67f4d8fcaf759ccf39a36e25c863c80f","url":"tw_stocks/9944.json"},{"revision":"1cc3519a9893eccadac5c9fcf2935c82","url":"tw_stocks/9943.json"},{"revision":"cdd61d9f951796ded74ad170c29268ce","url":"tw_stocks/9942.json"},{"revision":"12866bf5782cacf690cd02ac82603a4c","url":"tw_stocks/9941.json"},{"revision":"67d2fd351946f0b0485c8da368b4ebb3","url":"tw_stocks/9940.json"},{"revision":"bac431a82fed5ac98ab296b1e15955f1","url":"tw_stocks/9939.json"},{"revision":"14ae94202d5361fb55be822b3baa4acc","url":"tw_stocks/9938.json"},{"revision":"231383ffcd4da471e625d3562637369e","url":"tw_stocks/9937.json"},{"revision":"eb1bd0eb217df321a827bff3a79121b7","url":"tw_stocks/9935.json"},{"revision":"1d2240e95f2a511261dc57c96d314d8f","url":"tw_stocks/9934.json"},{"revision":"06998e9ed84df9895ad158f2a9b24d7d","url":"tw_stocks/9933.json"},{"revision":"2d768fd78effeb93f0f48f097cbf374c","url":"tw_stocks/9931.json"},{"revision":"36d575ecdc9f97cc3d96aaba9079b946","url":"tw_stocks/9930.json"},{"revision":"0416c3379ecd0b08d3fa274773523cf3","url":"tw_stocks/9929.json"},{"revision":"ad078e54632b742220d284ee64107f3c","url":"tw_stocks/9928.json"},{"revision":"0ab0c991558bfaa362bbd29040237062","url":"tw_stocks/9927.json"},{"revision":"8b08634555c08066cd1f6e8507043cd0","url":"tw_stocks/9926.json"},{"revision":"b7c47b838e3100bc393237b77780d5be","url":"tw_stocks/9925.json"},{"revision":"90ce1b2710d00d5a47f0b0d83b5e2034","url":"tw_stocks/9924.json"},{"revision":"8d6c8404d57a44f0402b2b8c94a5b6bb","url":"tw_stocks/9921.json"},{"revision":"fbf466c32af5dd613cb7fcff16882adc","url":"tw_stocks/9919.json"},{"revision":"bd9db4997ecf753247a1d6d4271d8335","url":"tw_stocks/9918.json"},{"revision":"a29b855c3ec33739ae1150b719d8e007","url":"tw_stocks/9917.json"},{"revision":"2d61cbd140a33b856dd606790b713c41","url":"tw_stocks/9914.json"},{"revision":"f9fd8f84994514b6779e5b41bcbf4973","url":"tw_stocks/9912.json"},{"revision":"3d3b1842f2570f2e1182e4ced7da1f2f","url":"tw_stocks/9911.json"},{"revision":"724d51222f490cff065b294f5dae8a61","url":"tw_stocks/9910.json"},{"revision":"c29149ad57d91a522e92c945f47705d4","url":"tw_stocks/9908.json"},{"revision":"9b94dc5825b96ecfc9e4bc3188bbefa6","url":"tw_stocks/9907.json"},{"revision":"a961064ec9dd31da72e15e917bb7aea7","url":"tw_stocks/9906.json"},{"revision":"4a2fec7cef0b85a67cd8ff66d5a30f9a","url":"tw_stocks/9905.json"},{"revision":"1ffd12ee53e66b03256c537c52614b5d","url":"tw_stocks/9904.json"},{"revision":"266eba106407e76d04bd7bfc53b5970c","url":"tw_stocks/9902.json"},{"revision":"b310398b585110dde93421cf3f6dfbdd","url":"tw_stocks/9802.json"},{"revision":"6f7d50a371a64a56ee283f52f2d3f0cc","url":"tw_stocks/8996.json"},{"revision":"b26c620d7692a9fe3a1a0bf2dd0e210f","url":"tw_stocks/8940.json"},{"revision":"d5afeb0e68d1d78818746d7bea27a2c9","url":"tw_stocks/8926.json"},{"revision":"8e28322eada122fd5af3ec4a79444ba7","url":"tw_stocks/8499.json"},{"revision":"44e4d4e5ddba75d7f48bac4a13924c1b","url":"tw_stocks/8488.json"},{"revision":"781a962a41d22014b5806cd213de0f18","url":"tw_stocks/8482.json"},{"revision":"33a3d281b5cd3418befa9f0770d1d335","url":"tw_stocks/8481.json"},{"revision":"f67e15b353360d1c82ade2da608eda16","url":"tw_stocks/8478.json"},{"revision":"85ece3599ca617315f57cf14cce45ffb","url":"tw_stocks/8476.json"},{"revision":"32afda1ede806f193e0cf622e70eefd7","url":"tw_stocks/8473.json"},{"revision":"a2a23872b05551642a25a5d7e1fc4fdc","url":"tw_stocks/8467.json"},{"revision":"060d4394821b041973c9881bef6886bc","url":"tw_stocks/8466.json"},{"revision":"1c3e8dff3e44d972122e66a9fa2d8cb5","url":"tw_stocks/8464.json"},{"revision":"3e007aea5c7bb8be39418d657437f76b","url":"tw_stocks/8463.json"},{"revision":"17d73c5e3c69717386e7429cfe1e6989","url":"tw_stocks/8462.json"},{"revision":"f9cf8b2f58f72da53f034c59b9abcba3","url":"tw_stocks/8454.json"},{"revision":"42f6e86d45ba93aa0891d92ff0f54e10","url":"tw_stocks/8443.json"},{"revision":"ff5eb9a50eda821f187b2ce83fcb6106","url":"tw_stocks/8442.json"},{"revision":"566cc75f25a7ff8cbbee4f568a32e174","url":"tw_stocks/8438.json"},{"revision":"f9a4639acd2dff01024cd22c0d983bb8","url":"tw_stocks/8429.json"},{"revision":"574666b0c58f7a8a948de7e4a31774cb","url":"tw_stocks/8422.json"},{"revision":"5280607c399bcc5f2631836b8bbbc32d","url":"tw_stocks/8411.json"},{"revision":"5c0db007b80a9c834bffb3ec00c10637","url":"tw_stocks/8404.json"},{"revision":"18d3b6d5fb5ab1f14f14e612319e4dc9","url":"tw_stocks/8374.json"},{"revision":"6efc3f93f86f71b41e61f77fa3c00a3b","url":"tw_stocks/8367.json"},{"revision":"6ab2464f775b64e1ce73a448c756f548","url":"tw_stocks/8341.json"},{"revision":"206c20f2d631bdf12a7983d14a3fbe4b","url":"tw_stocks/8271.json"},{"revision":"c6bb61d3ab4b7321ddce5a86e65fedf2","url":"tw_stocks/8261.json"},{"revision":"58a2c3ca669c9753a8a737c26495df08","url":"tw_stocks/8249.json"},{"revision":"55a79d9e277041e0203bc00c18f52cd3","url":"tw_stocks/8222.json"},{"revision":"521afc4dbb40e29a8d616cf53b2a955c","url":"tw_stocks/8215.json"},{"revision":"abce71ade2edb19b6a28d311e9a90f69","url":"tw_stocks/8213.json"},{"revision":"e608ab4606dddbe60917e94e7c0833cf","url":"tw_stocks/8210.json"},{"revision":"5321f2b4afe89bed8eeb7e15f459dcf7","url":"tw_stocks/8201.json"},{"revision":"9657009b8803f3ba8a82059cf9210f1f","url":"tw_stocks/8163.json"},{"revision":"da466fc4ab4c5c2b5d9ec72690f976bf","url":"tw_stocks/8150.json"},{"revision":"f038c3ca1dc58e8e5c2995e861b861d7","url":"tw_stocks/8131.json"},{"revision":"21e82be57b69b53d8dfc9d268ceebd8d","url":"tw_stocks/8114.json"},{"revision":"b8c8adef2d852e5b3042b08dbd844e4e","url":"tw_stocks/8112.json"},{"revision":"0d4bfc7faf117eb7f55d76c1d82e399e","url":"tw_stocks/8110.json"},{"revision":"3976f73e2599e81855c7fc403ba18c42","url":"tw_stocks/8105.json"},{"revision":"6b056bc61baf7b21d72d2bc90e2cf40e","url":"tw_stocks/8104.json"},{"revision":"570f69acce0519e92ffcc26b9897c487","url":"tw_stocks/8103.json"},{"revision":"25529a1698a8d32cba01e1c80c9d9391","url":"tw_stocks/8101.json"},{"revision":"c801e21cd984260a2c7ad7c14e0875d1","url":"tw_stocks/8081.json"},{"revision":"0064318f755fdab7d441f204bc76f09e","url":"tw_stocks/8072.json"},{"revision":"cd215629f4d805ef0ab361dd568d0fc9","url":"tw_stocks/8070.json"},{"revision":"e0fff427cff3a783c00a36e60aaa6126","url":"tw_stocks/8046.json"},{"revision":"e12b7b3248063a847487e281b6f1ce40","url":"tw_stocks/8045.json"},{"revision":"0e555d29f3330902d99273a251c9b323","url":"tw_stocks/8039.json"},{"revision":"867d1b76d79550e5a71d895c72f6da07","url":"tw_stocks/8033.json"},{"revision":"f7741bcea1f72e4019f814a3734a2b57","url":"tw_stocks/8028.json"},{"revision":"1b75431f057d4b9b3f09fc2d5efe4f10","url":"tw_stocks/8021.json"},{"revision":"8997edd497e6034c6bd34b067117d247","url":"tw_stocks/8016.json"},{"revision":"7076c5c8aa301f957262ea78718da580","url":"tw_stocks/8011.json"},{"revision":"d4b4b398ada86e820438d2bad7a86db3","url":"tw_stocks/7822.json"},{"revision":"05556786b7a64d92fc51340622523af8","url":"tw_stocks/7821.json"},{"revision":"7262e22acbe670fe35c2754e349ca46b","url":"tw_stocks/7818.json"},{"revision":"6146de4d3bc14e15a731e5cd6cdf2237","url":"tw_stocks/7799.json"},{"revision":"79a0907bba7bc37e51f3fe14082d389a","url":"tw_stocks/7795.json"},{"revision":"37a10f5f28f451f5fc6937e454a90f20","url":"tw_stocks/7791.json"},{"revision":"717f1afb973563c27bfafa5375b3585d","url":"tw_stocks/7788.json"},{"revision":"0cef73de0479843218c7c0cbb4034b7a","url":"tw_stocks/7786.json"},{"revision":"2a95521db62b2b7d17c04ff5b640d20e","url":"tw_stocks/7780.json"},{"revision":"0c303d12ebe5def878e1cdf1bb645db7","url":"tw_stocks/7769.json"},{"revision":"48e54f04de913db6bcd00f9a2e9f9239","url":"tw_stocks/7768.json"},{"revision":"591c3a0d52e6abf6bc05e3566ee75b26","url":"tw_stocks/7765.json"},{"revision":"e117d0fa8857320d5546c7d84ea56a4b","url":"tw_stocks/7760.json"},{"revision":"70dd71c75e19200273a95ebeae77d019","url":"tw_stocks/7750.json"},{"revision":"70a8dba065bcea4c254ca7dc46e13881","url":"tw_stocks/7749.json"},{"revision":"d3eefbcf9daa69bd22d93b8c59967ebd","url":"tw_stocks/7736.json"},{"revision":"ab59105cdb84202aae0865280074f259","url":"tw_stocks/7732.json"},{"revision":"ea898be4aedf285386501d00f5ae2347","url":"tw_stocks/7722.json"},{"revision":"78616eb2271af29d34c714c3b999f3d5","url":"tw_stocks/7721.json"},{"revision":"f1fcf1579f0d4f9fb16dc34053842a78","url":"tw_stocks/7711.json"},{"revision":"ec0d64193e1904ccf09fda42f82fe93e","url":"tw_stocks/7705.json"},{"revision":"8b66f12457b97d04af69bdeb25febfe4","url":"tw_stocks/6994.json"},{"revision":"3660de4cafb263dd0e6cfb0f2e5ebf71","url":"tw_stocks/6965.json"},{"revision":"7d2824621743e873838c2358d38cb231","url":"tw_stocks/6962.json"},{"revision":"73609be5e11cebfad035628aad269d92","url":"tw_stocks/6958.json"},{"revision":"0d31c80638278973b9ad68f73cdbd50a","url":"tw_stocks/6957.json"},{"revision":"5404c889edeced805ae40631221d27c3","url":"tw_stocks/6952.json"},{"revision":"9c518576fe2f3da45dad751dad5ca0bf","url":"tw_stocks/6944.json"},{"revision":"54cc30dd5b2a0bf29429001d41d55464","url":"tw_stocks/6937.json"},{"revision":"eb972f8e70b115d5f27d30369d1f8ab3","url":"tw_stocks/6936.json"},{"revision":"3a6a2569d4155a6c52a762d719c261bb","url":"tw_stocks/6934.json"},{"revision":"67197a7cb04003cd64ea8d5732c2ceb2","url":"tw_stocks/6933.json"},{"revision":"2db76010eb0778404f9ff449144452e9","url":"tw_stocks/6931.json"},{"revision":"e6651ec9d779b72bcf1534a8b561f8ed","url":"tw_stocks/6928.json"},{"revision":"2d9c96f0e8b2333bcbe86bb2a7419ce4","url":"tw_stocks/6923.json"},{"revision":"6c74455ffc28cd102f8786d9d84fbc56","url":"tw_stocks/6919.json"},{"revision":"c5ce97dc2c437e5ac533339c7383da16","url":"tw_stocks/6918.json"},{"revision":"e61594d9fec64475f30bbbfb3a72e7b2","url":"tw_stocks/6916.json"},{"revision":"6c987695e3c13ce2ca8b991ff7f4c7db","url":"tw_stocks/6914.json"},{"revision":"d5c4a8740f2de5951c5b35016bb0af51","url":"tw_stocks/6909.json"},{"revision":"8d2ce68189705f116970aa9cce6e3697","url":"tw_stocks/6906.json"},{"revision":"7ed398bd85ce016b9c0eb271789ce694","url":"tw_stocks/6902.json"},{"revision":"1f5243b8694c19dcaedc28eb7b70312a","url":"tw_stocks/6901.json"},{"revision":"43465dd31e9916bdeaf1fd20b0cbfe2e","url":"tw_stocks/6890.json"},{"revision":"68bc34a52ae13bf2747c81161162820c","url":"tw_stocks/6887.json"},{"revision":"88f9601d39a34a680aecaef49fa95a6b","url":"tw_stocks/6885.json"},{"revision":"14304168de7f76ec7c596b146fa0bee1","url":"tw_stocks/6873.json"},{"revision":"78bf4caa33b849cc309ab9d014954320","url":"tw_stocks/6869.json"},{"revision":"544b9618a77d707ec66dcd8527e0fa9a","url":"tw_stocks/6863.json"},{"revision":"f82d9c53bf9dd4929b5e52ab4d8c6f85","url":"tw_stocks/6862.json"},{"revision":"50d4e41a3be14861c6c418f4362874f8","url":"tw_stocks/6861.json"},{"revision":"e76460664cd73cd8ebbcb9b61b9dcb70","url":"tw_stocks/6838.json"},{"revision":"1e3682fa9950366a0642b3288055eda5","url":"tw_stocks/6835.json"},{"revision":"8b5cf1ed5463360f978bac207b7c44ac","url":"tw_stocks/6834.json"},{"revision":"636abc1e23038efbe1e2f00121ecbd3c","url":"tw_stocks/6831.json"},{"revision":"c89405ddf8f8022fdefec41f4fa7e77c","url":"tw_stocks/6830.json"},{"revision":"0516d2b4e153f45f6a6d9f99fe6f2819","url":"tw_stocks/6807.json"},{"revision":"62b5f938668b48a151a171f2d92e7c23","url":"tw_stocks/6806.json"},{"revision":"5d6cdcb2f3e6c4f627752483ec41287b","url":"tw_stocks/6805.json"},{"revision":"39335acc7ff3c206f36feb8c42d6e788","url":"tw_stocks/6799.json"},{"revision":"6f468e8704c3ee5869b4b0d05845d1d9","url":"tw_stocks/6796.json"},{"revision":"6bf1858700b50504692ddb6d77f1c481","url":"tw_stocks/6794.json"},{"revision":"7ca0ef5ac4f4cdbf9e9e98791a1825b4","url":"tw_stocks/6792.json"},{"revision":"f7663b9bc8d4b082b3b7a40f377f35ea","url":"tw_stocks/6790.json"},{"revision":"0e189fae8a511cd2728479b9f0ec482e","url":"tw_stocks/6789.json"},{"revision":"56930c1e07c395ff6ea504113f855240","url":"tw_stocks/6782.json"},{"revision":"cd9f47b5c1091d92556a194885de5ef5","url":"tw_stocks/6781.json"},{"revision":"d2b39acaf86c247d19f16587d6254326","url":"tw_stocks/6776.json"},{"revision":"b5fc69db472128ff4e1cc991b0f1e0fb","url":"tw_stocks/6770.json"},{"revision":"68c578d4c6f6b5a8a6a56ed369fb3225","url":"tw_stocks/6768.json"},{"revision":"78c81e228dc8548303b5a784ed9c74df","url":"tw_stocks/6757.json"},{"revision":"195248f3c9258cc915611e61b3e1cd30","url":"tw_stocks/6756.json"},{"revision":"cb98f283bd87e44423c94f5069a446b8","url":"tw_stocks/6754.json"},{"revision":"c2d50a49d7889306755acccabe42ccaa","url":"tw_stocks/6753.json"},{"revision":"5d108c3a84cc37739827471083707539","url":"tw_stocks/6743.json"},{"revision":"8e646772801076249748a0919603c0a2","url":"tw_stocks/6742.json"},{"revision":"09648bc9dca0662020df2d25e8da4bab","url":"tw_stocks/6722.json"},{"revision":"07331496cfe7c8b4a6431df4ac2f9de0","url":"tw_stocks/6719.json"},{"revision":"0c0cebaa19b156c409ffe6cbf642192f","url":"tw_stocks/6715.json"},{"revision":"ca7978ea6b243bb0ba79f405ed934289","url":"tw_stocks/6706.json"},{"revision":"2bb7904c26ed03fcfb213d5ff7a7d6ca","url":"tw_stocks/6698.json"},{"revision":"1f9cb7f1141cda657c939401faa3d015","url":"tw_stocks/6695.json"},{"revision":"6981126096eb58469ab75f1927c35424","url":"tw_stocks/6691.json"},{"revision":"8861f88f17c72e4f40e123ca36e82010","url":"tw_stocks/6689.json"},{"revision":"acfc51b0a41b1976e6b9105ff7e9f308","url":"tw_stocks/6674.json"},{"revision":"d8da5c636c87b84634b22c0d96cd27d4","url":"tw_stocks/6672.json"},{"revision":"2d3ea39fb075ffcf324de5697f6b2ac3","url":"tw_stocks/6671.json"},{"revision":"6d169f01c8a52c653cc98aeff655d4bc","url":"tw_stocks/6670.json"},{"revision":"20a602d3f8612320d98b22583d6a3166","url":"tw_stocks/6669.json"},{"revision":"5b91a129b9c350cf77b313877cc86b1f","url":"tw_stocks/6668.json"},{"revision":"e7d64b114fb0389064c64a8721b40b23","url":"tw_stocks/6666.json"},{"revision":"81bd597019d77446e8fd6c492db4cbb5","url":"tw_stocks/6658.json"},{"revision":"0d4b3143e858572a037d1b1922e919d8","url":"tw_stocks/6657.json"},{"revision":"320b79999894fa70924d41ddcbc86ebf","url":"tw_stocks/6655.json"},{"revision":"426d4ed36486829a3efceb055c3e843b","url":"tw_stocks/6641.json"},{"revision":"22af61766452a97390f56a64cb99ba87","url":"tw_stocks/6625.json"},{"revision":"012db93cbdf81ccc62ba133d430efafe","url":"tw_stocks/6614.json"},{"revision":"cc75c0f4d1ca0a8126cb4a09df8f1999","url":"tw_stocks/6606.json"},{"revision":"4937320415b0a666c04a4c403796e0f2","url":"tw_stocks/6605.json"},{"revision":"e3781181f51c87de2ba6e9300f970de6","url":"tw_stocks/6598.json"},{"revision":"da3f41bb1fbe630f2522425d1a76711b","url":"tw_stocks/6592.json"},{"revision":"4b48dea3d27e58bcb33264437eb3b3e7","url":"tw_stocks/6591.json"},{"revision":"6328046514cc89d5c321f400977aae18","url":"tw_stocks/6589.json"},{"revision":"91a36271e09be9c6db6b35f74a40c28b","url":"tw_stocks/6585.json"},{"revision":"da2de176a91babd782b1ad13180f7d5b","url":"tw_stocks/6582.json"},{"revision":"feac411b8706b6066f676b3e4b3ad165","url":"tw_stocks/6581.json"},{"revision":"b1921e79c23633b1d4abbdd22d658399","url":"tw_stocks/6579.json"},{"revision":"13ba55fabadda1bba610fd250cfbed10","url":"tw_stocks/6573.json"},{"revision":"8009f5997364924276b27f55359bf07c","url":"tw_stocks/6558.json"},{"revision":"fa6949cb9c552e5d99609e78ae375759","url":"tw_stocks/6552.json"},{"revision":"75d4ff502f17c73a4e99f121091c38b6","url":"tw_stocks/6550.json"},{"revision":"643243161c8f48eff18fec6670977b9b","url":"tw_stocks/6541.json"},{"revision":"8cd8f3ed1fc4b85e0705579194bda81d","url":"tw_stocks/6533.json"},{"revision":"f6575e046636f955222f05a042a24980","url":"tw_stocks/6531.json"},{"revision":"18f47ff5b1c3bc0897a56c21234875d7","url":"tw_stocks/6526.json"},{"revision":"cae11a0412e0ad6cb33b8fd002dbd0bf","url":"tw_stocks/6525.json"},{"revision":"8223262b341ee2548d50b5080351e394","url":"tw_stocks/6515.json"},{"revision":"be47a0aa6f02a5680166b5e130ebe59e","url":"tw_stocks/6505.json"},{"revision":"cb159b1db3070c8233a1333f71575ce3","url":"tw_stocks/6504.json"},{"revision":"bddbd479232fbc26b0176ab751b30d07","url":"tw_stocks/6491.json"},{"revision":"749f29b87a9064f3614c488f40860b7b","url":"tw_stocks/6477.json"},{"revision":"2288d91de95ce4631031feb3c3130ce8","url":"tw_stocks/6472.json"},{"revision":"4201af2de1f7d5fd98e8cf2ac5a12975","url":"tw_stocks/6464.json"},{"revision":"b386e52845ea0675dfe6233eed4a821c","url":"tw_stocks/6456.json"},{"revision":"961fee503685dcdd98f6745099b151c8","url":"tw_stocks/6451.json"},{"revision":"21a55cd451fe8fcd8072a0878572b6b7","url":"tw_stocks/6449.json"},{"revision":"7ece04d7838c3382e77f51d667e72031","url":"tw_stocks/6446.json"},{"revision":"b06fdac03c567f00a12ce9f284afec04","url":"tw_stocks/6443.json"},{"revision":"4d2f9458c6690e49c6f7e384c9407d3e","url":"tw_stocks/6442.json"},{"revision":"491d03428f7429a90eecd3489bfc6f8b","url":"tw_stocks/6438.json"},{"revision":"11d096a0a17c3ace505e790e2589ec39","url":"tw_stocks/6431.json"},{"revision":"31cf928d5de2f746555931b4db897134","url":"tw_stocks/6426.json"},{"revision":"695c0b2b2a9a832f8b4c28cfe2a57b75","url":"tw_stocks/6416.json"},{"revision":"86c5a09a91aafc8b28abd508e0213d10","url":"tw_stocks/6415.json"},{"revision":"7a438549ba88ab887a381d0f65ac7fef","url":"tw_stocks/6414.json"},{"revision":"62bb901b31a0a55853bebc7f2d5fade9","url":"tw_stocks/6412.json"},{"revision":"e1bbadfbedbd86385007bdcb8eb1072b","url":"tw_stocks/6409.json"},{"revision":"47608b4e9367ceeaac1a5234cbbcc7ad","url":"tw_stocks/6405.json"},{"revision":"13cca64ccf0fab65bf39c24b7b935f4a","url":"tw_stocks/6285.json"},{"revision":"4f4e746a669e6dbd174b2a2d79b0613f","url":"tw_stocks/6283.json"},{"revision":"5e381feceaa99aea0cbad65989dfd9f9","url":"tw_stocks/6282.json"},{"revision":"8ae2e41a9e2fb071b5f241659e6efe7d","url":"tw_stocks/6281.json"},{"revision":"55e4c1420409c570329aa4ec2812c491","url":"tw_stocks/6278.json"},{"revision":"747af47434f9b508b49fc12dc177dd0d","url":"tw_stocks/6277.json"},{"revision":"8d61c25ff4cc3905aa23ae69e4ad0b21","url":"tw_stocks/6272.json"},{"revision":"2404d23eb31373cb3f5bbd7aa8cfd21d","url":"tw_stocks/6271.json"},{"revision":"4a0708bb2fa70168eee63736dd6f033d","url":"tw_stocks/6269.json"},{"revision":"b42df2c5b5037eff123df59954ebe474","url":"tw_stocks/6257.json"},{"revision":"381d8ef9d613042a316a73d08f192c1d","url":"tw_stocks/6243.json"},{"revision":"c15d5ec2c1b7cbbfcab24235dbe98e53","url":"tw_stocks/6239.json"},{"revision":"fb3cfcc2597698f1d5737a497af13bfa","url":"tw_stocks/6235.json"},{"revision":"022e1944272d22635aade436996f82bd","url":"tw_stocks/6230.json"},{"revision":"05aabf8dace5d305858089233cd6c584","url":"tw_stocks/6226.json"},{"revision":"8e85bf94adee3341b1afcd6c9f5bf112","url":"tw_stocks/6225.json"},{"revision":"258a2c90c68a8f4fca8efbfcf9f5e9f5","url":"tw_stocks/6224.json"},{"revision":"b23ebc76389e05aa7f9afb3a2a150c89","url":"tw_stocks/6216.json"},{"revision":"34c1b58f962b5cd90b6aebe659bdff94","url":"tw_stocks/6215.json"},{"revision":"628ce424bbc84695f0433aa5fd281c2a","url":"tw_stocks/6214.json"},{"revision":"c17fac357801b50dbec0fc12a4a897c2","url":"tw_stocks/6213.json"},{"revision":"6c9159facbba7648656d72c858b1d18b","url":"tw_stocks/6209.json"},{"revision":"af3619f53328e1f30f204e6122694b36","url":"tw_stocks/6206.json"},{"revision":"0fc213e87bb94ade81af2794a750e229","url":"tw_stocks/6205.json"},{"revision":"2c52f38c85a33773d3f6ab270f65e6a4","url":"tw_stocks/6202.json"},{"revision":"84883ada3d1644cc1129f693a0adabf4","url":"tw_stocks/6201.json"},{"revision":"63685b64c4fe2c1ecacc86a40c65adfa","url":"tw_stocks/6197.json"},{"revision":"37866163b7ac18dbf6ce9b2cf911c3d4","url":"tw_stocks/6196.json"},{"revision":"fa76ea6403e44849da2afb45b3bfa66c","url":"tw_stocks/6192.json"},{"revision":"5cd1b79b0d6fa5eb1f29f368b091caa4","url":"tw_stocks/6191.json"},{"revision":"962185c8eea58529570584b1dea6e4c2","url":"tw_stocks/6189.json"},{"revision":"aea528dabe4f7457fe7ca15d4da87b96","url":"tw_stocks/6184.json"},{"revision":"bbcbd52e935582958fa8b5d5c40f324f","url":"tw_stocks/6183.json"},{"revision":"85fac9580fa025fda001e618bb542da4","url":"tw_stocks/6177.json"},{"revision":"7bcadab8dfe016c1c325d1929f36c209","url":"tw_stocks/6176.json"},{"revision":"b0f8b85a5fd9caa7134a9485acf0bea0","url":"tw_stocks/6168.json"},{"revision":"59a991b3bd1f9a16f038187ac98c22a5","url":"tw_stocks/6166.json"},{"revision":"ae4f53b5c6d2fe55181a59618a148833","url":"tw_stocks/6165.json"},{"revision":"1689830c90db6c2c0844cc7eea761995","url":"tw_stocks/6164.json"},{"revision":"4f1f6c3f9c47942c9ca614f8ef31e4a8","url":"tw_stocks/6155.json"},{"revision":"53df8d488628d29835240334161b91b5","url":"tw_stocks/6153.json"},{"revision":"1620023254b6a01e78ab5e3f485fc92f","url":"tw_stocks/6152.json"},{"revision":"c8f7282317bb6075ce1372078a85227e","url":"tw_stocks/6142.json"},{"revision":"c11d79823832a128126b3264a97c279a","url":"tw_stocks/6141.json"},{"revision":"35ee3d5c68f72ac1ba8a0ab94849ab7b","url":"tw_stocks/6139.json"},{"revision":"d7e71595518b36e195980aeeaa4e5400","url":"tw_stocks/6136.json"},{"revision":"d26fd0124d1a4d6674c06f6d13897179","url":"tw_stocks/6133.json"},{"revision":"c702405e306efe6a9dd8bca7486765ec","url":"tw_stocks/6128.json"},{"revision":"e5ea418796259cab4ea2eabbd36350dc","url":"tw_stocks/6120.json"},{"revision":"5e6e446961890d819d62cdcabdfb0954","url":"tw_stocks/6117.json"},{"revision":"bb39587a3bb18beba6664fc986d66ca9","url":"tw_stocks/6116.json"},{"revision":"a9ff9084a0d3bd889d79cf95c3be45d6","url":"tw_stocks/6115.json"},{"revision":"60840937b6bf42a08fa4b35c0382fc92","url":"tw_stocks/6112.json"},{"revision":"d089b5bc249ee33563020c2d03e9de5a","url":"tw_stocks/6108.json"},{"revision":"abc043a4ea752d1f3288b3f0797a9ee2","url":"tw_stocks/6024.json"},{"revision":"156eb6d1c75115208fdd60416460011e","url":"tw_stocks/6005.json"},{"revision":"4d63a80347a7e4c7ca62e4f0e179daba","url":"tw_stocks/5907.json"},{"revision":"b82db40f6ada6a279b8c951f74540106","url":"tw_stocks/5906.json"},{"revision":"436992f78681ae071f747d3b68d3274d","url":"tw_stocks/5880.json"},{"revision":"eb03f214d573cabbfe332fdc4e8f2764","url":"tw_stocks/5876.json"},{"revision":"c23f1cd739b55c0b5350618ce893c3c9","url":"tw_stocks/5871.json"},{"revision":"df7b920b51b7d724c545cf99c40d5a5d","url":"tw_stocks/5706.json"},{"revision":"de6c03e7c80aacb212f56cf73f5c672c","url":"tw_stocks/5608.json"},{"revision":"46318e9138c5f0b1700eacbe665c232d","url":"tw_stocks/5607.json"},{"revision":"1e9febd08ed70da164d157be0324aa84","url":"tw_stocks/5546.json"},{"revision":"9de351ade7bd72350f96c7cc1c921a7d","url":"tw_stocks/5538.json"},{"revision":"4fb015097d1b1c5b910c793445119c49","url":"tw_stocks/5534.json"},{"revision":"7722cf001ba0d0fd16239bd5ac17e3b5","url":"tw_stocks/5533.json"},{"revision":"def926a47800d2793a08da5d6276b3bf","url":"tw_stocks/5531.json"},{"revision":"2195c4b2dacccc75fde47c57e7367907","url":"tw_stocks/5525.json"},{"revision":"66676cf298f606ab23c24a7ee97d3d5e","url":"tw_stocks/5522.json"},{"revision":"aa1e7e3020940413418fd551914c1e1f","url":"tw_stocks/5521.json"},{"revision":"6946505c1687e5ce041533fbf6104280","url":"tw_stocks/5519.json"},{"revision":"97ee77fcec12005e29cadf9f7fbba97d","url":"tw_stocks/5515.json"},{"revision":"9a7214dc3f5c43b262231f883076456b","url":"tw_stocks/5484.json"},{"revision":"37d6f4679ee7538bf3ceed0caae4f6e3","url":"tw_stocks/5471.json"},{"revision":"b59d7d8202a73a1275876b5edc1b2081","url":"tw_stocks/5469.json"},{"revision":"c26deec379d565a75c36985e2eaae59f","url":"tw_stocks/5434.json"},{"revision":"c43e83c42a6e41202b9f1d907dd58b34","url":"tw_stocks/5388.json"},{"revision":"986f7e306231add9f0ea800f6b67467b","url":"tw_stocks/5306.json"},{"revision":"39a9d6c63037e6ddbc9d7189f9130068","url":"tw_stocks/5292.json"},{"revision":"e3d4da2920b8582b39c0135e74f8c213","url":"tw_stocks/5288.json"},{"revision":"df3f378fd78e3d5462dc87da5a955ef3","url":"tw_stocks/5285.json"},{"revision":"58d7d6275ee727430df56edad0962d02","url":"tw_stocks/5284.json"},{"revision":"b151f7ff6af5f645492ccc7ee59ef5a1","url":"tw_stocks/5283.json"},{"revision":"18d69fdba9cc682a0f4bf406594837d9","url":"tw_stocks/5269.json"},{"revision":"3f2a9a4722b89dd5e7eb4a1aa0fe031f","url":"tw_stocks/5258.json"},{"revision":"258961ab4c30a5f59a719854093feb5e","url":"tw_stocks/5244.json"},{"revision":"1c7939041d13e87184d048aeda25a2a7","url":"tw_stocks/5243.json"},{"revision":"32230239fdbc3aa24629bf2a251e7422","url":"tw_stocks/5234.json"},{"revision":"0936a8e2f65c6690e10ffb4ba3e2b34b","url":"tw_stocks/5225.json"},{"revision":"da926e3c4754a888e160aa9d0ccbb631","url":"tw_stocks/5222.json"},{"revision":"fefa95bf779f060d4e4007cd1569b4f9","url":"tw_stocks/5215.json"},{"revision":"d15e004a59c59846e1724990d44685cf","url":"tw_stocks/5203.json"},{"revision":"cd00eb3b8e12be3aab440412e41a8cfc","url":"tw_stocks/5007.json"},{"revision":"b84b7d4a51f6a31af0c4e0b12b69a64e","url":"tw_stocks/4999.json"},{"revision":"9f9471600b45522ac57ed1823173d246","url":"tw_stocks/4994.json"},{"revision":"66012ec38a1e762c8f2914655e950abd","url":"tw_stocks/4989.json"},{"revision":"c9fec6d8d248d5dfe695e20744f03045","url":"tw_stocks/4977.json"},{"revision":"873b435bddc77a88bb49884a4bb08c39","url":"tw_stocks/4976.json"},{"revision":"78975c2f5a1658279088a0a5fe92acfa","url":"tw_stocks/4968.json"},{"revision":"09dd68b3d014dab56b29cb02a9ba4116","url":"tw_stocks/4967.json"},{"revision":"035969c22c9ab71a9fee7d07e6a48e47","url":"tw_stocks/4961.json"},{"revision":"25faf44cd96a955201894705e64c75b9","url":"tw_stocks/4960.json"},{"revision":"8543db3cf548427070751228995a25c9","url":"tw_stocks/4958.json"},{"revision":"2086724456c9875cb40a62f903d7d5e1","url":"tw_stocks/4956.json"},{"revision":"c3fd22055dbba6fef77b0ed4d1719db7","url":"tw_stocks/4952.json"},{"revision":"bc4e7b13d5f03c1fddb34948adc4421a","url":"tw_stocks/4949.json"},{"revision":"cdc9bbb83cad898eb5f4fbcd78f18ace","url":"tw_stocks/4943.json"},{"revision":"5254ead36f524318d711c904b0a13b1e","url":"tw_stocks/4942.json"},{"revision":"c6b25543315374b18b115fcd0e6a8768","url":"tw_stocks/4938.json"},{"revision":"22e437d4fe2f601871a53ceebb0dd6ed","url":"tw_stocks/4935.json"},{"revision":"60b90d8d935a1e9c6eeb91aa5352b15d","url":"tw_stocks/4934.json"},{"revision":"7dc23adcb2cfc54c14536f3b972219b6","url":"tw_stocks/4930.json"},{"revision":"7d26092ed778f519e9a59f2b19ff65b7","url":"tw_stocks/4927.json"},{"revision":"ff415793b51d4eabda82365013413f43","url":"tw_stocks/4919.json"},{"revision":"1bee6a8413144f91f9796f5ac0523f63","url":"tw_stocks/4916.json"},{"revision":"e76e592e517ef3b5dba1afe10fdbd41c","url":"tw_stocks/4915.json"},{"revision":"f3a48b06122a123fe04df2c78d944a01","url":"tw_stocks/4912.json"},{"revision":"3191f10421c65a0bb3c33e2f9c2a467c","url":"tw_stocks/4906.json"},{"revision":"28eca01775f204927f704280ad82d8e1","url":"tw_stocks/4904.json"},{"revision":"044803dc9b336512dc85c4086dfdbcbf","url":"tw_stocks/4807.json"},{"revision":"aa14553ef848ddb00aaad1e882409ce0","url":"tw_stocks/4771.json"},{"revision":"d4170842012ad40f4e4ce373117184e7","url":"tw_stocks/4770.json"},{"revision":"b1ca00b1a899bddcee0c24426e30a0d8","url":"tw_stocks/4766.json"},{"revision":"c9a65abbc8937691d3aa61df8bc943c7","url":"tw_stocks/4764.json"},{"revision":"44e23731dd8dbc393bc548d6ce926fd4","url":"tw_stocks/4763.json"},{"revision":"8d1d4969c2cb6415a99f53a8a86f9c3f","url":"tw_stocks/4755.json"},{"revision":"00541d7e8dca99037648f2098f736bc8","url":"tw_stocks/4746.json"},{"revision":"6f6fbec758302bf9586eb649d335753b","url":"tw_stocks/4739.json"},{"revision":"eb756b6a0bd13c1683a71602215b0e28","url":"tw_stocks/4737.json"},{"revision":"b2c915aa29a640ae5de5b99a50845b82","url":"tw_stocks/4736.json"},{"revision":"924a3b225acfe09f11f60228e26a1680","url":"tw_stocks/4722.json"},{"revision":"fc4f4310f4a17b3a98986b1273774d82","url":"tw_stocks/4720.json"},{"revision":"bff8fbfb61cf4dc109f61fa86d3ee185","url":"tw_stocks/4588.json"},{"revision":"c6dc7cfe4c038dc98b6d5a7db4ee982c","url":"tw_stocks/4585.json"},{"revision":"752302433c5e5b8e3473dd091d2e38f6","url":"tw_stocks/4583.json"},{"revision":"0371598a3679934e10a4d7d16e9c1373","url":"tw_stocks/4581.json"},{"revision":"d4c68c728ca933fe81661c8b7787cbd3","url":"tw_stocks/4576.json"},{"revision":"bd1f5793dc61fc60999da5eb818f46e5","url":"tw_stocks/4572.json"},{"revision":"9939833111ffff4af9dbbe4f1af7a8c4","url":"tw_stocks/4571.json"},{"revision":"6b8c56c82cac60a62b0b8040a2684de8","url":"tw_stocks/4569.json"},{"revision":"5b2805dbf94adf58bb8fb10917ac0ed9","url":"tw_stocks/4566.json"},{"revision":"c4089a4d637c968a2260925c67ee7140","url":"tw_stocks/4564.json"},{"revision":"d8125b3788ccd99eb1bb51f7d396053c","url":"tw_stocks/4562.json"},{"revision":"46d2237bffe88963d6474c019260ddce","url":"tw_stocks/4560.json"},{"revision":"9161cf3b35e0e66698d52d603a70f14c","url":"tw_stocks/4557.json"},{"revision":"ac9dae362284639aaea8b7b32477a9d0","url":"tw_stocks/4555.json"},{"revision":"7a67d703d9b7bcf49cd3ab162d62b678","url":"tw_stocks/4552.json"},{"revision":"0a4d09cdbbe49cce6f92e6064ce5acd6","url":"tw_stocks/4551.json"},{"revision":"0fb4c708db16071631534e02701f2458","url":"tw_stocks/4545.json"},{"revision":"eccba7127b51a468b6e35275d6ae6925","url":"tw_stocks/4540.json"},{"revision":"e66306a74ded9463f89c76874a84e9e3","url":"tw_stocks/4536.json"},{"revision":"2fc96f5bcf77988cd5f92c6812f548fe","url":"tw_stocks/4532.json"},{"revision":"abc465bad10c2bdd6765d432a31c1fce","url":"tw_stocks/4526.json"},{"revision":"a3e90540e97e349bdab6bb38a7d7f0d0","url":"tw_stocks/4441.json"},{"revision":"93a22d756437c6464d30f826b6255dd9","url":"tw_stocks/4440.json"},{"revision":"954c5db93742716487ab9ba55e3208d3","url":"tw_stocks/4439.json"},{"revision":"634d6955f220ab267140cd6cb23c0f2e","url":"tw_stocks/4438.json"},{"revision":"96c1127ccff686a95f487d44b3187ac5","url":"tw_stocks/4426.json"},{"revision":"f8fbc72f2e4a6f48146556e76d083e1d","url":"tw_stocks/4414.json"},{"revision":"5a88f5ef5f4c63041e898da0ad2b4407","url":"tw_stocks/4306.json"},{"revision":"9fd30b88eb71ca1a3ed0c10afdc519fc","url":"tw_stocks/4190.json"},{"revision":"b85194f60cebb9333a1bdeda81ade763","url":"tw_stocks/4178.json"},{"revision":"93b9575f21f5c72d722f51eaa133d054","url":"tw_stocks/4169.json"},{"revision":"eea383704991970a3fa2810993c55fd6","url":"tw_stocks/4164.json"},{"revision":"3488b324793ce826348f3ff279fcc3b6","url":"tw_stocks/4155.json"},{"revision":"213ce39e3935d6f0d49ce5442c9f00cd","url":"tw_stocks/4148.json"},{"revision":"5dac4db7310167552c43b57e72141c29","url":"tw_stocks/4142.json"},{"revision":"aa87ad4e0f766820184bb8d3aa243f81","url":"tw_stocks/4137.json"},{"revision":"c7ab22257e412af6aaba312eb229742e","url":"tw_stocks/4133.json"},{"revision":"70a7885c7ed6c226e912d35e3cb9b05b","url":"tw_stocks/4119.json"},{"revision":"9b4d62f557b3ccf57f714440b07ea77c","url":"tw_stocks/4108.json"},{"revision":"5a0e1fe9d157d764c9c12793382736e5","url":"tw_stocks/4106.json"},{"revision":"38c7fc7b5770b7be53df34ea6d31ecce","url":"tw_stocks/4104.json"},{"revision":"721ac870d8ed58ceb111d7701c6e44ea","url":"tw_stocks/3717.json"},{"revision":"985321376d5dcd3b2f98eb31225e7861","url":"tw_stocks/3716.json"},{"revision":"244c8eb657f76bede597256580a93ca3","url":"tw_stocks/3715.json"},{"revision":"f2a90de21469b360d5e0c6dd0e4ad62a","url":"tw_stocks/3714.json"},{"revision":"0aff09ab26b6335af39c5602f7ee7f92","url":"tw_stocks/3712.json"},{"revision":"b8b5d9665e91175b39d2e08e7a3dac1a","url":"tw_stocks/3711.json"},{"revision":"60362d972bfd63ea89dfa11c471d6b02","url":"tw_stocks/3708.json"},{"revision":"a9831d450d3549d3577381b542a651b8","url":"tw_stocks/3706.json"},{"revision":"a87fb123daf3904ad1c31de774c028e1","url":"tw_stocks/3705.json"},{"revision":"abdae2e04130687d3377df2f8fcf6570","url":"tw_stocks/3704.json"},{"revision":"97170f813d70a3f937e0c89c31c1e9ab","url":"tw_stocks/3703.json"},{"revision":"3f55d7ddcbb22c4dfbb55d6406bd0f3d","url":"tw_stocks/3702.json"},{"revision":"72696df572698d77cc47185d107f4d73","url":"tw_stocks/3701.json"},{"revision":"4bfe45b9c940f72015da04d748c1283a","url":"tw_stocks/3694.json"},{"revision":"fb032efef5283cf27a833d22b4afff45","url":"tw_stocks/3686.json"},{"revision":"3d527ec7e334d90e81ff50328861fe38","url":"tw_stocks/3679.json"},{"revision":"3e44869233add83aed85f88353257839","url":"tw_stocks/3673.json"},{"revision":"54569461da8b416915c925d944b7143f","url":"tw_stocks/3669.json"},{"revision":"41598fe23120c5ad42bb53553071408d","url":"tw_stocks/3665.json"},{"revision":"5bb931c69812cb8179533bc264851966","url":"tw_stocks/3661.json"},{"revision":"a772ac2d1f8279ac491468b6007e5dda","url":"tw_stocks/3653.json"},{"revision":"a6fa79b50cac995d42f88d6ef765bef9","url":"tw_stocks/3652.json"},{"revision":"975e0e522aa381ffc84c722cc9b64264","url":"tw_stocks/3645.json"},{"revision":"6993abade5bb91c09e672c08b4b0fda5","url":"tw_stocks/3622.json"},{"revision":"d605ad3df000318f5669c4c7b943bd0a","url":"tw_stocks/3617.json"},{"revision":"042dd32f3378ddadca929b6b68342079","url":"tw_stocks/3607.json"},{"revision":"5ddb3d983ce40a3cfbdf61ea6a61222b","url":"tw_stocks/3605.json"},{"revision":"7145b6889505a817a92847502957bbfe","url":"tw_stocks/3596.json"},{"revision":"de5958b3b48c12229d227308e4631295","url":"tw_stocks/3593.json"},{"revision":"728ca238d802beef46874e9f20236a5c","url":"tw_stocks/3592.json"},{"revision":"501396cc5029ab788f6fb6e362f57791","url":"tw_stocks/3591.json"},{"revision":"e9b13272c37811aa57706d3fa2187487","url":"tw_stocks/3588.json"},{"revision":"ed11bc26e052460abfc5f98e9ba31e44","url":"tw_stocks/3583.json"},{"revision":"66f4fdaba9edcdbe00fa264980ce9a41","url":"tw_stocks/3576.json"},{"revision":"009af0b556d52d494af936834f5db86f","url":"tw_stocks/3563.json"},{"revision":"278f04129f31a1229fa50edb05862087","url":"tw_stocks/3557.json"},{"revision":"3568978738c3a72631a02bb3e708accd","url":"tw_stocks/3550.json"},{"revision":"75f0eea17822519111fa549fbd2840eb","url":"tw_stocks/3545.json"},{"revision":"c9e341613d1dd5e138f2bc2bbcb7f80d","url":"tw_stocks/3543.json"},{"revision":"a825c4cd478c11fb7d8930829e3f91f6","url":"tw_stocks/3535.json"},{"revision":"c22542893e8540ea752a8020b35dde1f","url":"tw_stocks/3533.json"},{"revision":"acadd1ba31ac546f0f3ccbef3323e133","url":"tw_stocks/3532.json"},{"revision":"94d0983c810a82f1f0b4ff3f3600fd76","url":"tw_stocks/3530.json"},{"revision":"b9760706f3f99ccc0ef4ca3388db2319","url":"tw_stocks/3528.json"},{"revision":"01a294c3357c0b9f11a95593b8dcf1ba","url":"tw_stocks/3518.json"},{"revision":"1502412422f26e407cc59e84ca8d7992","url":"tw_stocks/3515.json"},{"revision":"ed0f232874a4fb7cbd1224e3ae79d441","url":"tw_stocks/3504.json"},{"revision":"0084fef25631cdcdb5c012c49ba4d19e","url":"tw_stocks/3501.json"},{"revision":"993468f3e76b10c58b434c8fd8f055bb","url":"tw_stocks/3494.json"},{"revision":"a8e7c85763c6c69cac91a40de90194e5","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"a1232ee1e2913d6a1306a216a4e49505","url":"tw_stocks/3450.json"},{"revision":"791ba0909d2a6a9f42faeebedb6a8595","url":"tw_stocks/3447.json"},{"revision":"4bbe334bb928059550518b1a29bf0c2f","url":"tw_stocks/3443.json"},{"revision":"0fd97ac6ecf7fea484e307031c6e1155","url":"tw_stocks/3437.json"},{"revision":"328780ade5e755bffefc8fe62c61a389","url":"tw_stocks/3432.json"},{"revision":"37ff53d968e5fc35de7cca867a5342f8","url":"tw_stocks/3419.json"},{"revision":"59ff7421404bb0c764bbe0d6be1481ef","url":"tw_stocks/3416.json"},{"revision":"260d0146ea24555a3521046a782d0050","url":"tw_stocks/3413.json"},{"revision":"cc86e90b3f3e36d6cc5e0244ab1fc67b","url":"tw_stocks/3406.json"},{"revision":"ae5efeb0a5b779021aa0fb9ba7fc53c5","url":"tw_stocks/3380.json"},{"revision":"9c64db1481729757d9f876f749611ea6","url":"tw_stocks/3376.json"},{"revision":"7ff48bd4363506bdf30d1b831d93eee2","url":"tw_stocks/3356.json"},{"revision":"455db640aa363755ebad6b24854b5be2","url":"tw_stocks/3346.json"},{"revision":"fcb4e7ce23fd647bbb1b459c332503fc","url":"tw_stocks/3338.json"},{"revision":"368dc380e2fdee877a83b510dfee7c57","url":"tw_stocks/3321.json"},{"revision":"02bfbc048beceb0e89e155a62d3dc739","url":"tw_stocks/3312.json"},{"revision":"3eaad555e507496a5a3aa1f30f94403c","url":"tw_stocks/3311.json"},{"revision":"b6ea856c657f87a1a5737dce9fe92f11","url":"tw_stocks/3308.json"},{"revision":"273a63b0378e1a4775a384e5ffab707f","url":"tw_stocks/3305.json"},{"revision":"5a3b53380970c0367f2b46e47684ba24","url":"tw_stocks/3296.json"},{"revision":"d8adb4430e2c4e45681d23c9e54415e5","url":"tw_stocks/3266.json"},{"revision":"7987ff4d81d2f8e71dd558e311dfb928","url":"tw_stocks/3257.json"},{"revision":"72cc3abb085af472ece8ee29cab8c300","url":"tw_stocks/3231.json"},{"revision":"4152d8b94629fd5b210487b2ffb6e9e8","url":"tw_stocks/3229.json"},{"revision":"45bbb8fb4ead7439e6a76e90ae84a94a","url":"tw_stocks/3209.json"},{"revision":"0d3988413401d86adf10a92248c49e46","url":"tw_stocks/3189.json"},{"revision":"88dadff4cff05d31bdeccc56b1e680d7","url":"tw_stocks/3168.json"},{"revision":"787d906ebf43741907b00d404b16ec87","url":"tw_stocks/3167.json"},{"revision":"d0207faa09d6d2ada321bea461e20bcc","url":"tw_stocks/3164.json"},{"revision":"7c4ccbedc162fe2525c8ce914a720ba5","url":"tw_stocks/3149.json"},{"revision":"e6325cddb876e3da75d5199f4e7a1507","url":"tw_stocks/3138.json"},{"revision":"f6ef2981955b80d73bff2372691c1b10","url":"tw_stocks/3135.json"},{"revision":"f97c471ec838d51fb3d9aab18b6c3ab9","url":"tw_stocks/3130.json"},{"revision":"b8083b9cd07d977de859f1fc37f4556c","url":"tw_stocks/3094.json"},{"revision":"b9631ab0eb05daa1c3cca1cf80627877","url":"tw_stocks/3092.json"},{"revision":"11a39464a72865f65b2e9ff0ec21a00c","url":"tw_stocks/3090.json"},{"revision":"349ce564531ba21b09f6c821df1f0c13","url":"tw_stocks/3062.json"},{"revision":"6673cc16597382e04f8c01e17fb94514","url":"tw_stocks/3060.json"},{"revision":"887a0edbcd50cc916f27881bd17cdc56","url":"tw_stocks/3059.json"},{"revision":"b68c49ccdcdb4e36a57928d3a3a46f6a","url":"tw_stocks/3058.json"},{"revision":"fb172b6a58db1660aafe436a88f86634","url":"tw_stocks/3057.json"},{"revision":"bd85cc5fd1ca2413e0f6244ed6ccb9c2","url":"tw_stocks/3056.json"},{"revision":"2aded66eaa7bcba52db03340fbf63307","url":"tw_stocks/3055.json"},{"revision":"9943211676bc341bb8f68d60a86b85cf","url":"tw_stocks/3054.json"},{"revision":"f8dd534553020f3b5b087599ff1d8759","url":"tw_stocks/3052.json"},{"revision":"b9d68d7abd6930533f23dca46147c062","url":"tw_stocks/3051.json"},{"revision":"c4c58ce842e43f20a96c733e7f727a12","url":"tw_stocks/3050.json"},{"revision":"bb57c438bec9d64f889f2c3a7852acab","url":"tw_stocks/3049.json"},{"revision":"505978f4f800018021bc5218b418d47a","url":"tw_stocks/3048.json"},{"revision":"195b211db74ccbf55ee793c509faeaa4","url":"tw_stocks/3047.json"},{"revision":"641babe53d9178f7f9de3ca6b228e70f","url":"tw_stocks/3046.json"},{"revision":"86ae1678defa8de7345359cf40ed6bef","url":"tw_stocks/3045.json"},{"revision":"7085a4df01024fa76fecae08d99c174e","url":"tw_stocks/3044.json"},{"revision":"fa7a26ce4f7ae0941e3c53e4bb5c2e16","url":"tw_stocks/3043.json"},{"revision":"a31e2d7d55f48180c0489d9212d9c340","url":"tw_stocks/3042.json"},{"revision":"6aadd37a70c9b7bfdb42f53dbce640e5","url":"tw_stocks/3041.json"},{"revision":"ed3f2a135de5995bd405be5d17e17f6e","url":"tw_stocks/3040.json"},{"revision":"03093b85c709557a5c33283a98edfaad","url":"tw_stocks/3038.json"},{"revision":"bf12ebfd05dc92b503119be933c4be06","url":"tw_stocks/3037.json"},{"revision":"3637100f0c65b63a87249f62a0b0ce93","url":"tw_stocks/3036.json"},{"revision":"e5c27feb3878ae108de9246fda9e3a7b","url":"tw_stocks/3035.json"},{"revision":"fd2c87d5a569ea256f54e136693bf91e","url":"tw_stocks/3034.json"},{"revision":"48c8c0edf1776510a5ecf40e263300f1","url":"tw_stocks/3033.json"},{"revision":"b0817806d7cf6c20312c0a2061ec4a71","url":"tw_stocks/3032.json"},{"revision":"3525cbd5dbd7c2dae181c8df4107ac35","url":"tw_stocks/3031.json"},{"revision":"b374a7b2a6bccfcebf923bc97da89763","url":"tw_stocks/3030.json"},{"revision":"ea889f3cfec195c38223c108ddfdd0e2","url":"tw_stocks/3029.json"},{"revision":"53234c23028238639e5fcdd706d4fd1c","url":"tw_stocks/3028.json"},{"revision":"24e4a9af025959bff8116cf4854c2538","url":"tw_stocks/3027.json"},{"revision":"1f3925978b5cb4bfcd149dc2a926ddc8","url":"tw_stocks/3026.json"},{"revision":"b26f3a508cab3d5677ad5a24835a38ee","url":"tw_stocks/3025.json"},{"revision":"5432c0640abb909b06904329c72c5429","url":"tw_stocks/3024.json"},{"revision":"6c594e9dde6ec10d555ff3f61a105ef2","url":"tw_stocks/3023.json"},{"revision":"eb6cbaf7c762674d474a5b55ad6a2773","url":"tw_stocks/3022.json"},{"revision":"2a177358d5c84b6f8b6cb1386c8b9774","url":"tw_stocks/3021.json"},{"revision":"54e3fafb1ddc7cf5107bbdba7a5cf93b","url":"tw_stocks/3019.json"},{"revision":"876a3c9205f43100b2bca2de3e99529d","url":"tw_stocks/3018.json"},{"revision":"ebcc93c21f9c2c40bb2ba89512aa6a8b","url":"tw_stocks/3017.json"},{"revision":"e721defd6c3b2a609d972b8a7e353620","url":"tw_stocks/3016.json"},{"revision":"2e2e77a0d191b952376accdf12a0dbc5","url":"tw_stocks/3015.json"},{"revision":"f43af7ba77103222b2a8b75d838776d9","url":"tw_stocks/3014.json"},{"revision":"0bb627a239fd4ee9dc01ab242aef9a90","url":"tw_stocks/3013.json"},{"revision":"dc14a988683b42a462f2adafd953a574","url":"tw_stocks/3011.json"},{"revision":"3be5b7235252dd43cca13f73fc573584","url":"tw_stocks/3010.json"},{"revision":"d882071fcd56cd8ade0eae1e3a6fac1f","url":"tw_stocks/3008.json"},{"revision":"629dee5aaca02508f7a4d06d451e879d","url":"tw_stocks/3006.json"},{"revision":"c3809d3ab5ba26e68037f161dc63e626","url":"tw_stocks/3005.json"},{"revision":"699dccb8f44bec6a0aef19d274b7c5b5","url":"tw_stocks/3004.json"},{"revision":"ef8001345202781aba55159d939cb059","url":"tw_stocks/3003.json"},{"revision":"d4366b0b5d468e2180457b88f51ec145","url":"tw_stocks/3002.json"},{"revision":"f31cacab2d318654a36d17fb0e432979","url":"tw_stocks/2945.json"},{"revision":"e91a7a5d4d01842d9cccfe6c39826dba","url":"tw_stocks/2939.json"},{"revision":"f22fa563f68e8c5d37bd8e60b9cbfdfc","url":"tw_stocks/2929.json"},{"revision":"f1fdc1b43438ac7bc7d52a6580353f52","url":"tw_stocks/2923.json"},{"revision":"8c61a750e57444f6cef49d384f65316b","url":"tw_stocks/2915.json"},{"revision":"f694baf1395c1add227eaf289c59951e","url":"tw_stocks/2913.json"},{"revision":"8ac68c88b10af825292771cee485e9b4","url":"tw_stocks/2912.json"},{"revision":"f0f81ee5b63ff4c56c9f9d8c726254c5","url":"tw_stocks/2911.json"},{"revision":"1723edfb2051e0215acdc83966b716d3","url":"tw_stocks/2910.json"},{"revision":"7b72afa4867608338701ec769968f443","url":"tw_stocks/2908.json"},{"revision":"aa3e8d1cc87778c18d7cea8242b93163","url":"tw_stocks/2906.json"},{"revision":"eed49b4caf647dabccce558c0ea57f9d","url":"tw_stocks/2905.json"},{"revision":"f5d9fd97c02913bf37e06b335b6a980b","url":"tw_stocks/2904.json"},{"revision":"823906e8633bdca47b70dbd684431818","url":"tw_stocks/2903.json"},{"revision":"94cc8746fb8ce1ae7b7771d9b2edc953","url":"tw_stocks/2901.json"},{"revision":"90344a6e76c229405d33e616846ed936","url":"tw_stocks/2897.json"},{"revision":"66d6913e9f2b8d7b43fd94d2d03f7cd6","url":"tw_stocks/2892.json"},{"revision":"03408dc0e586a4cbaac03a7eb3eb630d","url":"tw_stocks/2891.json"},{"revision":"9f8af54bc54b91b7c83e89d5f3fa776f","url":"tw_stocks/2890.json"},{"revision":"648456c8f215e6d39f9a6f1d305d7baa","url":"tw_stocks/2889.json"},{"revision":"502845d5bbbc97fdf6a826c56a8eb2a6","url":"tw_stocks/2887.json"},{"revision":"8dcdd295a1579dc07231e18d07348330","url":"tw_stocks/2886.json"},{"revision":"676a85742c0fe8b4721db19362c5c051","url":"tw_stocks/2885.json"},{"revision":"b3414e2ea524b2aecfc6092da266c51b","url":"tw_stocks/2884.json"},{"revision":"e97c3ddd3567d0ebe9392b46afdb2503","url":"tw_stocks/2883.json"},{"revision":"30f2bb1187267691b6cf2bd82aa839cf","url":"tw_stocks/2882.json"},{"revision":"da72f434ff8a59a6401ae218a74a7cb3","url":"tw_stocks/2881.json"},{"revision":"5e503154c5c8e8127eb0ac224fae8601","url":"tw_stocks/2880.json"},{"revision":"e924df587fa8895b5313fd0478c19fcf","url":"tw_stocks/2867.json"},{"revision":"2c92e29bd03384533908c0eb742f4107","url":"tw_stocks/2855.json"},{"revision":"143dddd9d4c75e80c12af03cde22ef9e","url":"tw_stocks/2852.json"},{"revision":"9e25251cbc95b58bd7ff4193bd7d45e6","url":"tw_stocks/2851.json"},{"revision":"ccd3e8b7100cd0048d2e7aabe9a15f25","url":"tw_stocks/2850.json"},{"revision":"c8f4d9f73f5f40b663ff33db405dd40d","url":"tw_stocks/2849.json"},{"revision":"8f528fd0cb9990191068ac67dfe0ccc4","url":"tw_stocks/2845.json"},{"revision":"381dd59055859d8d1e3fc5a329e423f2","url":"tw_stocks/2838.json"},{"revision":"f6aa6a678cf3cd441b3740b4245a69d2","url":"tw_stocks/2836.json"},{"revision":"3e4a3ff70a06445b1d523eea735e7e3c","url":"tw_stocks/2834.json"},{"revision":"a65e15ec15dde3f0cf6a52411791a61e","url":"tw_stocks/2832.json"},{"revision":"6b1ccc665cd620b866bb6c5bd12a2882","url":"tw_stocks/2820.json"},{"revision":"c54778732ead2c3dc4e3decdd9ddedc2","url":"tw_stocks/2816.json"},{"revision":"f4fda8eb3c61fb86452d6a42d38675be","url":"tw_stocks/2812.json"},{"revision":"f5b2321ad065ca86eb108236a8206407","url":"tw_stocks/2801.json"},{"revision":"62fffc9f25a5f4507dd6e5cf7dcff703","url":"tw_stocks/2762.json"},{"revision":"ff7604080d8d985bafb2dbf40dd357ee","url":"tw_stocks/2753.json"},{"revision":"283cae707ce7d9a3df9f80477fc11101","url":"tw_stocks/2748.json"},{"revision":"321041b826c5c315092446bc89440130","url":"tw_stocks/2739.json"},{"revision":"ed72a109cb9eaffb75599318f3feae06","url":"tw_stocks/2731.json"},{"revision":"646cc219e6b471cd64b4b3a34a8895c3","url":"tw_stocks/2727.json"},{"revision":"34f2d9e072e9a6e51d30e0a7bb345dfd","url":"tw_stocks/2723.json"},{"revision":"7ea14d876e61d6f73709cd5ca1aea403","url":"tw_stocks/2722.json"},{"revision":"5c6828579ba5f839c93375e0931675e3","url":"tw_stocks/2712.json"},{"revision":"96074e73f537cf01bbcbe89a70ec4d7c","url":"tw_stocks/2707.json"},{"revision":"9c8dc077b2a3308d243793c6ab2b4b52","url":"tw_stocks/2706.json"},{"revision":"267c8893e3ecf8e9ae307fecec1d1427","url":"tw_stocks/2705.json"},{"revision":"7c53f047882001d9018367ef88914444","url":"tw_stocks/2704.json"},{"revision":"dd961ec0ea524a7507615c03d1b85782","url":"tw_stocks/2702.json"},{"revision":"aff897f0373e9c1570379cadf367b783","url":"tw_stocks/2701.json"},{"revision":"bc44570efbc5bb25d6db630544c349a4","url":"tw_stocks/2646.json"},{"revision":"b247e23ea071b7c969365c5d40a8e1a7","url":"tw_stocks/2645.json"},{"revision":"15340bc575d1c594b88b48771f20cbda","url":"tw_stocks/2642.json"},{"revision":"2d88302aedf2741dcfffb2b53ba88dfe","url":"tw_stocks/2637.json"},{"revision":"68ce17b8eab0ab7e7b5487f51ff2c3c2","url":"tw_stocks/2636.json"},{"revision":"f74653896d378f6263eaa3c4e9e21dd2","url":"tw_stocks/2634.json"},{"revision":"b49e96dfaa84b8faaa06ba633132511f","url":"tw_stocks/2633.json"},{"revision":"40371ce049b8d0c254ffe43efbd7a1ff","url":"tw_stocks/2630.json"},{"revision":"f201930e0223b221070355d37b54ffe8","url":"tw_stocks/2618.json"},{"revision":"bc124a4caddb8b72206837a08282af3e","url":"tw_stocks/2617.json"},{"revision":"8103d23d14eba5a8005e3219533f2164","url":"tw_stocks/2616.json"},{"revision":"2ab6653427c945c75787dbe3d5712e54","url":"tw_stocks/2615.json"},{"revision":"c44f8cb372a632d56fe713f9d3f5cce2","url":"tw_stocks/2614.json"},{"revision":"4a8e0fa4451248aaa3edbded6969c265","url":"tw_stocks/2613.json"},{"revision":"93ca6fca5f0c18fd34e955075bb3a61f","url":"tw_stocks/2612.json"},{"revision":"3ecad4192a2e8f876ac284ff9480c153","url":"tw_stocks/2611.json"},{"revision":"0b1bd73d709a3327785aa0c9208d9417","url":"tw_stocks/2610.json"},{"revision":"41da7a7bc6391447f71ac3e611dfa903","url":"tw_stocks/2609.json"},{"revision":"f48e69d817e196c6eed156f0f848444e","url":"tw_stocks/2608.json"},{"revision":"a5b776cba958fe6fcf8095bc5dc4317d","url":"tw_stocks/2607.json"},{"revision":"11ba67c4dda7197365a4820943f5e68f","url":"tw_stocks/2606.json"},{"revision":"e35474d78a9dfa0fa97bb3e44d7317b2","url":"tw_stocks/2605.json"},{"revision":"ba907aa8f855db5910b0f7447bd4eecb","url":"tw_stocks/2603.json"},{"revision":"f79dd136ce4cbe19be1ca8e41cd404f1","url":"tw_stocks/2601.json"},{"revision":"6a7ee9c96a957c588635488dd5626d98","url":"tw_stocks/2597.json"},{"revision":"4f59fd2f9450643327aea4ef3b6b02e7","url":"tw_stocks/2548.json"},{"revision":"6050d9cbd8cd86ad512711f20de3406c","url":"tw_stocks/2547.json"},{"revision":"3a3cc82f505f160d44e0a33b54166ec4","url":"tw_stocks/2546.json"},{"revision":"f64227d12912198f2a278a5a505d7b79","url":"tw_stocks/2545.json"},{"revision":"c70c6b2510760f2cf7c2a0dfec138307","url":"tw_stocks/2543.json"},{"revision":"91b155986c290a28cac4189441f78b5e","url":"tw_stocks/2542.json"},{"revision":"dec5b848c69b10643e3ce2475733fde2","url":"tw_stocks/2540.json"},{"revision":"3e1fb0be0889a17f6a6003bbd2058151","url":"tw_stocks/2539.json"},{"revision":"cb97d550188f2135b3f00cefe6abf219","url":"tw_stocks/2538.json"},{"revision":"2abde49fd0092542bd69171ed07b3c98","url":"tw_stocks/2537.json"},{"revision":"a000d1612313efb868d7c7593ea66752","url":"tw_stocks/2536.json"},{"revision":"18dcd2fee3389399a4398d937206d5e5","url":"tw_stocks/2535.json"},{"revision":"49c8a5a5cb1b10b3ca02cb38655a5ab1","url":"tw_stocks/2534.json"},{"revision":"36e1c14d88f3f1f07205fe3aad6e6cf1","url":"tw_stocks/2530.json"},{"revision":"345ea4a2cada9d75b98e492cfb3e03d1","url":"tw_stocks/2528.json"},{"revision":"c3e7c7202e2312d1de5290346ee6326a","url":"tw_stocks/2527.json"},{"revision":"911e1aee688e239fa252aeac93c8e4ee","url":"tw_stocks/2524.json"},{"revision":"983cf8ab0082ed3ce5a01752edf14e4a","url":"tw_stocks/2520.json"},{"revision":"e4711116b40b8c94846eee0601bdb949","url":"tw_stocks/2516.json"},{"revision":"2dc5eba17571826ba278291bef0bfa73","url":"tw_stocks/2515.json"},{"revision":"8ece739284f75f4b369d463513e9d3cc","url":"tw_stocks/2514.json"},{"revision":"87b09442be8932d316d66c085b51660f","url":"tw_stocks/2511.json"},{"revision":"4c1b0330b79af5040126e876569eaaf4","url":"tw_stocks/2509.json"},{"revision":"f27d20c59cd1ae38ed4a50ed316b8323","url":"tw_stocks/2506.json"},{"revision":"84df2eb570b47b3b371025cdbf3a5ead","url":"tw_stocks/2505.json"},{"revision":"1ade4a748570785fc958877ec9d02ee2","url":"tw_stocks/2504.json"},{"revision":"1561fef9090ff232232c0a8809238008","url":"tw_stocks/2501.json"},{"revision":"9eb9a34bc08fde68eadb505dd43dc77c","url":"tw_stocks/2498.json"},{"revision":"aae8629c4310158f2ccdf6ae159aebf8","url":"tw_stocks/2497.json"},{"revision":"3726e0ba73fb4cc65f22685b31dd9c58","url":"tw_stocks/2496.json"},{"revision":"80f3c41c20ee194f85a522adf9f5d596","url":"tw_stocks/2495.json"},{"revision":"71fb9adc5f14576969ad7ba38a06b1b8","url":"tw_stocks/2493.json"},{"revision":"93813b81b028756a8c20c332ccf5d0f5","url":"tw_stocks/2492.json"},{"revision":"bf1c8ed96a145845566b6da5d194b1c2","url":"tw_stocks/2491.json"},{"revision":"d69c9dca091cccdb63d2619b2b968d84","url":"tw_stocks/2489.json"},{"revision":"448d42879f73889f35994059b7f17419","url":"tw_stocks/2488.json"},{"revision":"cae242e0c257618d0213fc29f6ee7a25","url":"tw_stocks/2486.json"},{"revision":"2b8a6d1b7b8d13485574b58307c98efd","url":"tw_stocks/2485.json"},{"revision":"98fed7054e4614e85212ad003a9575d2","url":"tw_stocks/2484.json"},{"revision":"e56df7859ba715ec0ec2a4fa8a333797","url":"tw_stocks/2483.json"},{"revision":"bb53173a8eecf18800c1d02a96879636","url":"tw_stocks/2482.json"},{"revision":"a2ce900cfa247ad3c366caeb8d5519e1","url":"tw_stocks/2481.json"},{"revision":"af490ebc570365d1131c92c004ded543","url":"tw_stocks/2480.json"},{"revision":"bdc6a1c31764fb34ce2a58fb3a9a7374","url":"tw_stocks/2478.json"},{"revision":"dc363235c6f7b32d67d551c64837a634","url":"tw_stocks/2477.json"},{"revision":"fade2459bfb0ce2b06d333746b563c46","url":"tw_stocks/2476.json"},{"revision":"ae11ad8f4cd9cd274e0665b7fc378949","url":"tw_stocks/2474.json"},{"revision":"2651dae7867e0e0098904340d7c6c7c1","url":"tw_stocks/2472.json"},{"revision":"e12eed11d93262a6a69ccdb8dc571042","url":"tw_stocks/2471.json"},{"revision":"3c0ce1316524f76f347857e43c053082","url":"tw_stocks/2468.json"},{"revision":"2746b3c75d0747253d4a87acde95fe48","url":"tw_stocks/2467.json"},{"revision":"144c1db80339226a0cc6e4d10e1bd069","url":"tw_stocks/2466.json"},{"revision":"40edd8177df5b4d40e146401f2041a0a","url":"tw_stocks/2465.json"},{"revision":"a86a1bda1f5a0ef258ffd7d9515865b0","url":"tw_stocks/2464.json"},{"revision":"a9453b7d3a823a5442486cd7bbe82e50","url":"tw_stocks/2462.json"},{"revision":"0a030908990ec509247f8086b6f3e5f9","url":"tw_stocks/2461.json"},{"revision":"c57bf0cac1f53ab0b7f3c98bdfb14ffb","url":"tw_stocks/2460.json"},{"revision":"8b9e2a19f71efe6d2b2c49ab45680ed3","url":"tw_stocks/2459.json"},{"revision":"a6b2d8afd8ea48fdb7836757cc3e1ff2","url":"tw_stocks/2458.json"},{"revision":"70a5aceb19f660d921870b9e6ff15219","url":"tw_stocks/2457.json"},{"revision":"c1e3399ed2009e6fc643469e31183b27","url":"tw_stocks/2455.json"},{"revision":"58380dd97317dd96ca58be5b6613771b","url":"tw_stocks/2454.json"},{"revision":"d7d0c42af8f16fe2e84785ea612f26ab","url":"tw_stocks/2453.json"},{"revision":"f9ff45c49649b5245e6eaee5a9e56a8c","url":"tw_stocks/2451.json"},{"revision":"57772f9b788477b77fbc4c5cbd105726","url":"tw_stocks/2450.json"},{"revision":"c1b7a24118483a97bbec55fa6200c8f6","url":"tw_stocks/2449.json"},{"revision":"9dfb1d0c8c96e9efdaedde2839b41db9","url":"tw_stocks/2444.json"},{"revision":"73d980c52479e16df245f45d5ff3bfc5","url":"tw_stocks/2442.json"},{"revision":"d3cd31e56e5d2d559a8be94bb03aa3fc","url":"tw_stocks/2441.json"},{"revision":"f51e5fc01eabe0dad23eae1cce124f4b","url":"tw_stocks/2440.json"},{"revision":"6487817c0037f3c7d27d9ab43325dffc","url":"tw_stocks/2439.json"},{"revision":"c4fe7672d8cc70bf3fdd379d4bf3dbe1","url":"tw_stocks/2438.json"},{"revision":"20c26548abfcc4be0e00bba3e57b6154","url":"tw_stocks/2436.json"},{"revision":"bb18c14f14139bcbc93c415fc060dd33","url":"tw_stocks/2434.json"},{"revision":"099c2ccb9caf2e0754c1ec659ff6a472","url":"tw_stocks/2433.json"},{"revision":"8621184c4a56add4c53cb5f30c792985","url":"tw_stocks/2431.json"},{"revision":"5e26a4af83da1a298823b8ba2f09dba2","url":"tw_stocks/2430.json"},{"revision":"99ebffa60e5137ebf4ac2afa32098ed1","url":"tw_stocks/2429.json"},{"revision":"f5810aeee0bc051a8a54c5dbc99ff903","url":"tw_stocks/2428.json"},{"revision":"82c80a14348fc5379fdc0db7b8024649","url":"tw_stocks/2427.json"},{"revision":"e6209dc1f34550a2c4d68f3156706654","url":"tw_stocks/2426.json"},{"revision":"91d7af02985ab8dc3723d4d943e76372","url":"tw_stocks/2425.json"},{"revision":"16b38811e1ee26018a4610ea7863a871","url":"tw_stocks/2424.json"},{"revision":"3b3b929caa71db4a5f94d43103c83f2d","url":"tw_stocks/2423.json"},{"revision":"4f4aec9c2f6bb5bdd5de6f1b5b8e4564","url":"tw_stocks/2421.json"},{"revision":"c389ccafbdb5665dd2b4d5b19a063a1d","url":"tw_stocks/2420.json"},{"revision":"b8602c04de3fe1f208052e9da7257ff5","url":"tw_stocks/2419.json"},{"revision":"39d87ba92dc0c4be625068d61733d2f3","url":"tw_stocks/2417.json"},{"revision":"48bb8b91047837d2a3baf490448df965","url":"tw_stocks/2415.json"},{"revision":"5f7e98e25a5114276a734e2adcecfb28","url":"tw_stocks/2414.json"},{"revision":"bb171fd53a396a5c5d8f4b18677277a2","url":"tw_stocks/2413.json"},{"revision":"30f74963c2d3eb573d54fda46da2fbdf","url":"tw_stocks/2412.json"},{"revision":"1e50e7c8f8eb9f38e22a09fc845eada4","url":"tw_stocks/2409.json"},{"revision":"4a1d05ad7b7c8896ddc2dbee07dcafd0","url":"tw_stocks/2408.json"},{"revision":"9273945f6c5fce5c6ee78888012b0a73","url":"tw_stocks/2406.json"},{"revision":"62d0392327abf42292c7978f1cd51899","url":"tw_stocks/2405.json"},{"revision":"3b4a9a3e41a6616e96e574ea0943c3d5","url":"tw_stocks/2404.json"},{"revision":"c7b7d3dde653056a9d258c2178f14259","url":"tw_stocks/2402.json"},{"revision":"ea6d735a019d04bb6aaa15cb7188ecd7","url":"tw_stocks/2401.json"},{"revision":"b7ed0be71275d283bba3f4f010f72f9b","url":"tw_stocks/2399.json"},{"revision":"1f8e319c65a61f60111b3fc274005af0","url":"tw_stocks/2397.json"},{"revision":"5cdb63c28206d43222b87228f0a8e5ea","url":"tw_stocks/2395.json"},{"revision":"808a1933810f734c89321163d22ae4ab","url":"tw_stocks/2393.json"},{"revision":"d0d7134d2f2cfd7a3457cc128090608a","url":"tw_stocks/2392.json"},{"revision":"809672c762f1e119da9910f69509e6ec","url":"tw_stocks/2390.json"},{"revision":"a28ffb3ed73e247ef96bfe295f42b03a","url":"tw_stocks/2388.json"},{"revision":"c611b7835032badb5c00e0658adfa46b","url":"tw_stocks/2387.json"},{"revision":"06793cbcc7295503a5904cbafceeeb98","url":"tw_stocks/2385.json"},{"revision":"400ad3c5a9f744335c06d05dcaad61ad","url":"tw_stocks/2383.json"},{"revision":"09f0951e6194aaff30f3d02ebc3933e4","url":"tw_stocks/2382.json"},{"revision":"ee4518e182858a457ff3597883a1a7f7","url":"tw_stocks/2380.json"},{"revision":"2dbfa6d9c0e6ecd2260fd232b525e878","url":"tw_stocks/2379.json"},{"revision":"694d39820caed5cf19f500c822449aa0","url":"tw_stocks/2377.json"},{"revision":"8a4840bf33ba10f39311634613465057","url":"tw_stocks/2376.json"},{"revision":"69837a70a8271a24bd1217c238e57f1d","url":"tw_stocks/2375.json"},{"revision":"3e569038cc8330df35ad371f0ee05e34","url":"tw_stocks/2374.json"},{"revision":"fbe590b0b2394619dfda012a2c133fe6","url":"tw_stocks/2373.json"},{"revision":"13f5945ef5b86509a5566b17d84e9a5a","url":"tw_stocks/2371.json"},{"revision":"698a5790d7b6c24ec215d914834c59c4","url":"tw_stocks/2369.json"},{"revision":"baf479f10062d80f4535c3b76b8482e0","url":"tw_stocks/2368.json"},{"revision":"5193809f0648c3e59165e503dfe433a1","url":"tw_stocks/2367.json"},{"revision":"b6a495d19dfd5579497734fd803b63bb","url":"tw_stocks/2365.json"},{"revision":"2115fea37bc9373babb2d18a943ffd46","url":"tw_stocks/2364.json"},{"revision":"79791e4f44a213489e4e1a2cae674415","url":"tw_stocks/2363.json"},{"revision":"d9d3bd5c8264973456bf2b5e07486805","url":"tw_stocks/2362.json"},{"revision":"c4d2ccc4f6233a95fd727c76060cd1a6","url":"tw_stocks/2360.json"},{"revision":"7d318056d48f5755fe397c3d3ce0d279","url":"tw_stocks/2359.json"},{"revision":"d1d6e8b339bc17ae0328093fdc4ee58b","url":"tw_stocks/2357.json"},{"revision":"0dc99f4e79c94e22611a571dd7564d9d","url":"tw_stocks/2356.json"},{"revision":"c30e35a55c9aaa7d80d335fa1222036d","url":"tw_stocks/2355.json"},{"revision":"fd8046f15d961edc71e33c5c05357489","url":"tw_stocks/2354.json"},{"revision":"af4af0e7525f888515ca5de9e76b0032","url":"tw_stocks/2353.json"},{"revision":"3c936d879bb258638899f69a98caba56","url":"tw_stocks/2352.json"},{"revision":"cc2f6879ecf694dff56371b5fe8bc45c","url":"tw_stocks/2351.json"},{"revision":"f7f7614cfe529b283a7d75e8be92d1c4","url":"tw_stocks/2349.json"},{"revision":"78106df02a28f92cc60c5aae322ad4ac","url":"tw_stocks/2348.json"},{"revision":"13dd87d935c643203eeb4b418f195492","url":"tw_stocks/2347.json"},{"revision":"a433741aec05d1ea25641f2bda929b94","url":"tw_stocks/2345.json"},{"revision":"a258025fcf7cf269fa083947a8ebf398","url":"tw_stocks/2344.json"},{"revision":"4e844c7e52789c0a2dfeb0a0c35fb6d1","url":"tw_stocks/2342.json"},{"revision":"19b71041b5b465b1ac689536123f1c57","url":"tw_stocks/2340.json"},{"revision":"1fe833b4bf6193d1fb6e544e362bb2b9","url":"tw_stocks/2338.json"},{"revision":"6029247722c3cb8de52989ff8294ac99","url":"tw_stocks/2337.json"},{"revision":"90089489294783606ca1f2cba89d66a4","url":"tw_stocks/2332.json"},{"revision":"29ce67656535bb97c2a7cd5943f4aa49","url":"tw_stocks/2331.json"},{"revision":"1a78d1a0df0408a975afe3ac061bc639","url":"tw_stocks/2330.json"},{"revision":"939019e36b3fc1ffde262c255e08b9cb","url":"tw_stocks/2329.json"},{"revision":"bd0a2a2df0b2c9a7decfc8b6469131ae","url":"tw_stocks/2328.json"},{"revision":"92ac5e2aa39445f64e4e550cd14542b6","url":"tw_stocks/2327.json"},{"revision":"6c172cf9958f6dab74b18a48dd00a2dd","url":"tw_stocks/2324.json"},{"revision":"f08ffe99498627441643cf7302a48a29","url":"tw_stocks/2323.json"},{"revision":"de2067ccfcfaaaeac811bb0bb535dc03","url":"tw_stocks/2321.json"},{"revision":"1f141d353056297beb821a31163e82a0","url":"tw_stocks/2317.json"},{"revision":"6ba95fbf7384e50a3324c98a80f73f31","url":"tw_stocks/2316.json"},{"revision":"5462772c2106d763011b85c33ccce664","url":"tw_stocks/2314.json"},{"revision":"c296e753a6f4cb19f223992d38ee376c","url":"tw_stocks/2313.json"},{"revision":"d658f7ae3b48935887c9313aae48874e","url":"tw_stocks/2312.json"},{"revision":"634173cf53092f3fc63f3f57dc6bce9b","url":"tw_stocks/2308.json"},{"revision":"3509127c17c1ff2f078c7eb1ad6e1ce9","url":"tw_stocks/2305.json"},{"revision":"1be522b62c4c0ef55aa24adacb1dda00","url":"tw_stocks/2303.json"},{"revision":"0bb33282b58a7f9a1b022ec7cfb79145","url":"tw_stocks/2302.json"},{"revision":"73bdfa40ba1b495ea1e13c3154615a03","url":"tw_stocks/2301.json"},{"revision":"b2ccc42001cbfa735fa36e556ab86e9f","url":"tw_stocks/2250.json"},{"revision":"b93e1a0c2f9e9796e7c9aa0ec1b238a1","url":"tw_stocks/2248.json"},{"revision":"d0df97fa9904dec2f2ac2b965c6de367","url":"tw_stocks/2247.json"},{"revision":"8386a0b947b21dc0ba520daedd55f403","url":"tw_stocks/2243.json"},{"revision":"38ff89696160e32c3d4f8ba35b3c72d3","url":"tw_stocks/2241.json"},{"revision":"df83e311565b04412320afc14462212f","url":"tw_stocks/2239.json"},{"revision":"47f21927ff9d4a3a0d1493791b1513b3","url":"tw_stocks/2236.json"},{"revision":"539cb95558c599383ebfe9bb9e06258c","url":"tw_stocks/2233.json"},{"revision":"29591c3a31cc878d2d089d762bcddd21","url":"tw_stocks/2231.json"},{"revision":"c6b6e6db7c803d767a539e75bbff84a6","url":"tw_stocks/2228.json"},{"revision":"50efe04b7de74dae62decdd4d86fa6cd","url":"tw_stocks/2227.json"},{"revision":"f96e8be0d563a62b24d49f5398060b7f","url":"tw_stocks/2211.json"},{"revision":"2f15ee350678e40d49d7e845c880818e","url":"tw_stocks/2208.json"},{"revision":"7dc19c40b3b6a1329c3feb38a3267f72","url":"tw_stocks/2207.json"},{"revision":"b1a91bc9435ded151422abf4b3ebd8cc","url":"tw_stocks/2206.json"},{"revision":"4425659241aa60287cec9025a4294817","url":"tw_stocks/2204.json"},{"revision":"9ee4df7430dcb34bdfcd92f66a7a28ef","url":"tw_stocks/2201.json"},{"revision":"2b676c7e61dc2ffa103b9cc6e4dad130","url":"tw_stocks/2115.json"},{"revision":"348d81b22b8a62a2f754b2edd10f180a","url":"tw_stocks/2114.json"},{"revision":"66fb92bfb64d361c9ea8398977159673","url":"tw_stocks/2109.json"},{"revision":"55fabd7cf359db8d1dfa8cbc1a9ba17c","url":"tw_stocks/2108.json"},{"revision":"ba5618841f1dc2df4368a02826e90097","url":"tw_stocks/2107.json"},{"revision":"2b427dfae6a54a4877512c6e1bee5e4c","url":"tw_stocks/2106.json"},{"revision":"fd86b35abcc31596e6e467dd1701586b","url":"tw_stocks/2105.json"},{"revision":"3e8cdb714980eb3cc87c3e271c30bafe","url":"tw_stocks/2104.json"},{"revision":"369a6e00dafa3febbdee8ad53d9ac121","url":"tw_stocks/2103.json"},{"revision":"de14b6cd5979d2642d278a09a92074f9","url":"tw_stocks/2102.json"},{"revision":"b33fab5e3d061eeb51f2f188113ed2af","url":"tw_stocks/2101.json"},{"revision":"4c16fe66e662775804157035e19b5fb5","url":"tw_stocks/2072.json"},{"revision":"4150a4337d5a6d91e6f6bfa1bded54b5","url":"tw_stocks/2069.json"},{"revision":"e426c941e9c4c4f5abe2358a8d461538","url":"tw_stocks/2062.json"},{"revision":"2e1d2d3c31544db4937b09e9591a6873","url":"tw_stocks/2059.json"},{"revision":"0ea3557b53659fcd8f415b35f109ff69","url":"tw_stocks/2049.json"},{"revision":"3bc2a81d47063e342bf481ade2133a39","url":"tw_stocks/2038.json"},{"revision":"9becfdfc8d61e0e6546bf6b7d96c78dc","url":"tw_stocks/2034.json"},{"revision":"43e951b9432bcb0e230a3033c48352e9","url":"tw_stocks/2033.json"},{"revision":"2b7d25a9326dac57c24acf433fc76454","url":"tw_stocks/2032.json"},{"revision":"2489af5e96af2e893f485ea48b861cd1","url":"tw_stocks/2031.json"},{"revision":"e2a9bdfe3d533486a0713e3d584210bf","url":"tw_stocks/2030.json"},{"revision":"b143967a1649d08f86a9eb6caa8b779c","url":"tw_stocks/2029.json"},{"revision":"d71736b8311c9adc27e978f8209c5491","url":"tw_stocks/2028.json"},{"revision":"2e9040dd447cbfc6d5e9a92e452c432f","url":"tw_stocks/2027.json"},{"revision":"876efa3e41358d954201dd268cbd1b85","url":"tw_stocks/2025.json"},{"revision":"6843f07b2ef6cc143e7c4918ac1e06d5","url":"tw_stocks/2024.json"},{"revision":"db59c5b5ac99fe49e51dd73425e36ee2","url":"tw_stocks/2023.json"},{"revision":"06790974f1e4b881dd32ca6b44d466ef","url":"tw_stocks/2022.json"},{"revision":"b84493b710bebec27be12ca9a16bf87b","url":"tw_stocks/2020.json"},{"revision":"f0a9c66a65b846d7ebdafe1af5398d98","url":"tw_stocks/2017.json"},{"revision":"2cf7d555453c11914ee4be5fa99eba83","url":"tw_stocks/2015.json"},{"revision":"dd68525fe08fe783d775439b6735dda4","url":"tw_stocks/2014.json"},{"revision":"64d62846c43d26d61fed79e5d69b0c7b","url":"tw_stocks/2013.json"},{"revision":"cf9d4cd8926da41abca36f0ddb1513f7","url":"tw_stocks/2012.json"},{"revision":"702e001d06755f6a64c6ac372116f052","url":"tw_stocks/2010.json"},{"revision":"f6e9e6d82135ea5ac56dfb2065f92a46","url":"tw_stocks/2009.json"},{"revision":"231f302f16a64e64a7ec0bd68fe0d374","url":"tw_stocks/2008.json"},{"revision":"110ec7f1cb317effb31ae668c2ad0dff","url":"tw_stocks/2007.json"},{"revision":"4e8f38e15140bcc5e3d5d20307a7f700","url":"tw_stocks/2006.json"},{"revision":"883a42d93e7bdd21c71b9b895d2dbb8c","url":"tw_stocks/2002.json"},{"revision":"4a64e0e2febbce78e41aaa4f5b041000","url":"tw_stocks/1909.json"},{"revision":"f34a9c979e5251a0129cfd70c3c25903","url":"tw_stocks/1907.json"},{"revision":"101d407b8f9fdcd7cfe675adc9e51a68","url":"tw_stocks/1906.json"},{"revision":"279f4338f13c08752820546fdb7be88a","url":"tw_stocks/1905.json"},{"revision":"c3ce4be684730c282d506f582a247d1c","url":"tw_stocks/1904.json"},{"revision":"1634e7e8cb3b54bfbb06522f5f055365","url":"tw_stocks/1903.json"},{"revision":"455275b3ed3e6433bcd68d7f4521874e","url":"tw_stocks/1817.json"},{"revision":"9575bca325d1e13f3da0339c0ed08d6e","url":"tw_stocks/1810.json"},{"revision":"7978e9149ad77f99e5005a2bfb4dd21b","url":"tw_stocks/1809.json"},{"revision":"e4958da2bfb727899a23db861a7156dd","url":"tw_stocks/1808.json"},{"revision":"f0b446fd03f6f7a7f4fb92be0a686d1a","url":"tw_stocks/1806.json"},{"revision":"34d47565de2da212bb1342ab39d1ff39","url":"tw_stocks/1805.json"},{"revision":"0f94d588ed53c94cfaf0af16e8a244f8","url":"tw_stocks/1802.json"},{"revision":"64d48c8c6b60da52cdc51816c1752986","url":"tw_stocks/1795.json"},{"revision":"380e406a8170b32a1274ebd1664e6be7","url":"tw_stocks/1789.json"},{"revision":"28727ee35c7b3baf0947a85e74a925fd","url":"tw_stocks/1786.json"},{"revision":"8296a28735b4039d6d6a6cb9d8e192aa","url":"tw_stocks/1783.json"},{"revision":"d282bad462f62b34e02f45632e78e3c7","url":"tw_stocks/1776.json"},{"revision":"9d2cbc57106b4ce31f56259098d91544","url":"tw_stocks/1773.json"},{"revision":"e8dd6d83aeb6dbd714c70af131015c3e","url":"tw_stocks/1762.json"},{"revision":"5ebdc4c889350d883eee141ea2bee40a","url":"tw_stocks/1760.json"},{"revision":"b702f8c29dfd68881a289ba96c8201ac","url":"tw_stocks/1752.json"},{"revision":"c18785e3a979541c9f84015c7e6d8c90","url":"tw_stocks/1737.json"},{"revision":"306f3bb2d7c1354b4c066213fbe96a15","url":"tw_stocks/1736.json"},{"revision":"e8831cae944047ba42653a9b74ce78e4","url":"tw_stocks/1735.json"},{"revision":"291330213dd1487c28a506d386284d17","url":"tw_stocks/1734.json"},{"revision":"7f69a4cddf19e6cd1c04fd6de25c867f","url":"tw_stocks/1733.json"},{"revision":"c35bcea36ff681df97489052d668fa72","url":"tw_stocks/1732.json"},{"revision":"a0d64176c09acada08727870f05f5937","url":"tw_stocks/1731.json"},{"revision":"3a84c30cde5433747c26f79d76c38309","url":"tw_stocks/1730.json"},{"revision":"f15aa6af295fa51a9624ced4abc76a79","url":"tw_stocks/1727.json"},{"revision":"763097adbebcb30b9857def95d7324f8","url":"tw_stocks/1726.json"},{"revision":"ea5c0625d5c91b42f1f8ef1327f1b8fa","url":"tw_stocks/1725.json"},{"revision":"aa6fde737347c52cb25768c30b2d3f21","url":"tw_stocks/1723.json"},{"revision":"684922cb337d19938c5fc2f0a832ff8f","url":"tw_stocks/1722.json"},{"revision":"b372374d09ac5880cd00b40940aa0da5","url":"tw_stocks/1721.json"},{"revision":"8f4ee8faec62ed4952b3b2606ea925a5","url":"tw_stocks/1720.json"},{"revision":"77119ccaf125d9051f3fcbf0ebbda10d","url":"tw_stocks/1718.json"},{"revision":"24e38880cff53806d0adf55e3b082360","url":"tw_stocks/1717.json"},{"revision":"1ad511e457f8c16c2140819c01243d4a","url":"tw_stocks/1714.json"},{"revision":"c8aee352fbd40a97f9d44400b2169c58","url":"tw_stocks/1713.json"},{"revision":"2dd48316819275b37ebfc6504dac1edb","url":"tw_stocks/1712.json"},{"revision":"a6f324867a821602bda9e817da73f3df","url":"tw_stocks/1711.json"},{"revision":"d53699df3395dbedd57b1d0eb36b36a6","url":"tw_stocks/1710.json"},{"revision":"5ee18a75450dab5682184016845ee709","url":"tw_stocks/1709.json"},{"revision":"48ae114392c5d6682e3c7c67822035fc","url":"tw_stocks/1708.json"},{"revision":"9c365b9287a29c1244017137669bd60a","url":"tw_stocks/1707.json"},{"revision":"8ac0907fbbc75094f9e5f5c5722e2b1c","url":"tw_stocks/1702.json"},{"revision":"68c63aeb60db485bc4cf66bbb4e7b0e7","url":"tw_stocks/1626.json"},{"revision":"da2971e12d4183a962d0090c527d907e","url":"tw_stocks/1623.json"},{"revision":"a51c83bb8693f0b84f892cc9aaffbec9","url":"tw_stocks/1618.json"},{"revision":"af802dc573f78cf33b932ca371b79d36","url":"tw_stocks/1617.json"},{"revision":"4b4bd7737166cc1bf5358c06893b4c9b","url":"tw_stocks/1616.json"},{"revision":"f58527fef0f3a7c87566152628b468ec","url":"tw_stocks/1615.json"},{"revision":"1ca386b7999abf04796d02c2eed958cf","url":"tw_stocks/1614.json"},{"revision":"d6881f8c1b459aefe8840ea6bf9be299","url":"tw_stocks/1612.json"},{"revision":"386bd2709174e5b5e329124bcadcd8a3","url":"tw_stocks/1611.json"},{"revision":"e59ef0c4e8ff8c873e328f51b706a45e","url":"tw_stocks/1609.json"},{"revision":"8037007c5a8d82811d1f36b0fbd54d0f","url":"tw_stocks/1608.json"},{"revision":"c4951cc9e99b36c8fbebac45dcfc56e4","url":"tw_stocks/1605.json"},{"revision":"2230326744f42f935338ac2fa069eaed","url":"tw_stocks/1604.json"},{"revision":"52aa07c33ee792287e82e7c7b19f72c8","url":"tw_stocks/1603.json"},{"revision":"35280adabf179dd2b3cd7f102c1711c1","url":"tw_stocks/1598.json"},{"revision":"6a7f730fd2fcb91364d3af1a97c68928","url":"tw_stocks/1597.json"},{"revision":"4085697ce29ce33733e0a14155647717","url":"tw_stocks/1590.json"},{"revision":"8339418f1f65b35f0edbe985d0fabb32","url":"tw_stocks/1589.json"},{"revision":"7471643927e10a5efd2877cbe361c8cd","url":"tw_stocks/1587.json"},{"revision":"d80298c67c98338fc848da7853bf1549","url":"tw_stocks/1583.json"},{"revision":"e2bf2de05697a5991b84b7ad74b0b29e","url":"tw_stocks/1582.json"},{"revision":"ff5a006200598928391b383e99103c44","url":"tw_stocks/1568.json"},{"revision":"87b236561a93bfdc0550f97046866f7c","url":"tw_stocks/1563.json"},{"revision":"afa8f21cb2ce28c7e0385d7dd8cdf99c","url":"tw_stocks/1560.json"},{"revision":"0455142b6ba35469000074e09c5463ef","url":"tw_stocks/1558.json"},{"revision":"761c9e62c8020fcf49849c8025eeb983","url":"tw_stocks/1541.json"},{"revision":"0145373fffc95dd06ac2e16995d63a03","url":"tw_stocks/1540.json"},{"revision":"ed9a7159df485aae9be762b27f3a0b34","url":"tw_stocks/1539.json"},{"revision":"d2726f987478d8b06d019eac0f041647","url":"tw_stocks/1538.json"},{"revision":"fed725cb49956ce89b27221d75686f31","url":"tw_stocks/1537.json"},{"revision":"cd5aaabb6dbd44f96ae779b4b694b797","url":"tw_stocks/1536.json"},{"revision":"1c38c01cfc110119b3461e98155c5a7c","url":"tw_stocks/1535.json"},{"revision":"6bcd6f60ee33b4fa1656165800276dae","url":"tw_stocks/1533.json"},{"revision":"d34868dea5c68205771df3ac75d1cab4","url":"tw_stocks/1532.json"},{"revision":"69c7b00367af7fb567c58b3b8f49294f","url":"tw_stocks/1531.json"},{"revision":"1bd17312787fcbd5769e25d7465329a1","url":"tw_stocks/1530.json"},{"revision":"4deefb5119a32a5636b0d226b4b063bc","url":"tw_stocks/1529.json"},{"revision":"50025d922984ab4fd22a1939a3b1ce06","url":"tw_stocks/1528.json"},{"revision":"69e86fa2b0c49fe3d9f1c7a1afbe8514","url":"tw_stocks/1527.json"},{"revision":"452abb20247e26117834abd24edab2c1","url":"tw_stocks/1526.json"},{"revision":"ccf6525df936bc5b3d8fb6a858537ab0","url":"tw_stocks/1525.json"},{"revision":"458f4c0091fd43e82b7a6550b74855ea","url":"tw_stocks/1524.json"},{"revision":"6fb05914f1ac53a6d8e1311cc42871a6","url":"tw_stocks/1522.json"},{"revision":"423cbefe1ecbd945382d1ebfe59a21fb","url":"tw_stocks/1521.json"},{"revision":"844fe8063787c9482b0ec599e63d583e","url":"tw_stocks/1519.json"},{"revision":"da03b56da2dc200972f5944be3c69e59","url":"tw_stocks/1517.json"},{"revision":"2ae462efb8e31f93353383149f248ce2","url":"tw_stocks/1516.json"},{"revision":"33b2149d5df267c4590f0f5f68551643","url":"tw_stocks/1515.json"},{"revision":"e24b81a2c7fe610e97906333db06dfda","url":"tw_stocks/1514.json"},{"revision":"abdb49a56d7051f13295128a7876e724","url":"tw_stocks/1513.json"},{"revision":"ec13cd76fbe1a4dcad593d42c5348d04","url":"tw_stocks/1512.json"},{"revision":"7fcab1b13ed65cebd2f523ed565cfaba","url":"tw_stocks/1506.json"},{"revision":"2e8b99e20752537fdb44ea3f296e0a22","url":"tw_stocks/1504.json"},{"revision":"9f2e9120dddbf275222f66efecb60401","url":"tw_stocks/1503.json"},{"revision":"79eee0308859b0016d866bfaa52bd2b1","url":"tw_stocks/1477.json"},{"revision":"6d4761b2750364e323c4fd298a4fc71e","url":"tw_stocks/1476.json"},{"revision":"563158d439a6be089c6c4bccbc19744a","url":"tw_stocks/1475.json"},{"revision":"18283803a7102f0de824c8e007309cb2","url":"tw_stocks/1474.json"},{"revision":"77a121ff9c10fe45f08397469277c7c5","url":"tw_stocks/1473.json"},{"revision":"737620b7f198bd65094f8936715a74d8","url":"tw_stocks/1472.json"},{"revision":"8974fa56983809a71c0303c796c6280b","url":"tw_stocks/1471.json"},{"revision":"4e47954c4118e0b16a924709880a11ff","url":"tw_stocks/1470.json"},{"revision":"c731bc2d1a5877da37c8c63cdc67fdf2","url":"tw_stocks/1468.json"},{"revision":"e5084783bc5fe48bd8f4365ddc7b8c18","url":"tw_stocks/1467.json"},{"revision":"a7b75203a6ff092108a18cad133effcb","url":"tw_stocks/1466.json"},{"revision":"7d102a9643b748af6603e7f36d37853a","url":"tw_stocks/1465.json"},{"revision":"50e8ef4d1e97f9e619c3ea079e06dd5a","url":"tw_stocks/1464.json"},{"revision":"e83a71316c068685124712d18dd0df02","url":"tw_stocks/1463.json"},{"revision":"69719ef8d24eb0bb1854dc7149317624","url":"tw_stocks/1460.json"},{"revision":"1dbd506d670b4287bb1c6bb518661e17","url":"tw_stocks/1459.json"},{"revision":"253dfaa012e049ee1302ed55e5993a05","url":"tw_stocks/1457.json"},{"revision":"d06c552cd6454cf5b06502d6e13c3df5","url":"tw_stocks/1456.json"},{"revision":"511869af49e86a418b05b62ca46ef67f","url":"tw_stocks/1455.json"},{"revision":"7066c1dbdad96e4ae82dfda2730c254d","url":"tw_stocks/1454.json"},{"revision":"5c7a33fbc9bb0f0a06b2e2a696b90f2e","url":"tw_stocks/1453.json"},{"revision":"a6390d28d6f1c9fbaaad64d0c8acb466","url":"tw_stocks/1452.json"},{"revision":"8be1e3bea0c7ea49db1360d5f1520874","url":"tw_stocks/1451.json"},{"revision":"2dcc6a4aec24bdc16b80d5109c9a2adc","url":"tw_stocks/1449.json"},{"revision":"671e2e533c33df7dfe21a6d16e74377c","url":"tw_stocks/1447.json"},{"revision":"4549452f9195559236aa66aaa633227d","url":"tw_stocks/1446.json"},{"revision":"4f88ff6bfbe1e4d4a60550272299a75b","url":"tw_stocks/1445.json"},{"revision":"b7be9d1a9ed87a1121705d544bf613e4","url":"tw_stocks/1444.json"},{"revision":"e2ccbb3cad4c1837d9960b7aa2a8fd06","url":"tw_stocks/1443.json"},{"revision":"063e0f6df8235f6666e329292e5a9248","url":"tw_stocks/1442.json"},{"revision":"e8bf67c88dd0c97cd52918e88a9c82e8","url":"tw_stocks/1441.json"},{"revision":"1142827e3159a3cb7c8359a13908b1a6","url":"tw_stocks/1440.json"},{"revision":"93ca0f9ab726368f31d6209f3dbe2d30","url":"tw_stocks/1439.json"},{"revision":"08d1fab1b67d8978cf5d7181ed1e6857","url":"tw_stocks/1438.json"},{"revision":"cc1969f47831d663e258000867a1a545","url":"tw_stocks/1437.json"},{"revision":"5f1e447ef2e88dd326813dc00eb33951","url":"tw_stocks/1436.json"},{"revision":"44fe9168946c60927da9428f1767f877","url":"tw_stocks/1435.json"},{"revision":"14c3519141c9aa2607c8476dbcbc10a1","url":"tw_stocks/1434.json"},{"revision":"d0dbf9ad7ea5781a04aafd34e1614252","url":"tw_stocks/1432.json"},{"revision":"5472b243ba52cbed2478128fe70d392f","url":"tw_stocks/1423.json"},{"revision":"d692ce3240b2b4c2ec1f453241a80fd5","url":"tw_stocks/1419.json"},{"revision":"010f7cf3cd162d04b7788f0b91f7b6bd","url":"tw_stocks/1418.json"},{"revision":"11cac2082c490e1f97de28a4a5e545f8","url":"tw_stocks/1417.json"},{"revision":"ffc95efe3d8bf5de0a9499f69d3e6c66","url":"tw_stocks/1416.json"},{"revision":"36a357ca997a3466895481f551fdde9d","url":"tw_stocks/1414.json"},{"revision":"e667f6b6df0c7091804ad22f5aa484f6","url":"tw_stocks/1413.json"},{"revision":"1207ff3efeb0928dce23c74fbd9a982f","url":"tw_stocks/1410.json"},{"revision":"f86673141c49c1b8692744d6273bfc27","url":"tw_stocks/1409.json"},{"revision":"c83107d4061eb7273d39049cdabb687d","url":"tw_stocks/1402.json"},{"revision":"dfc1cc6de8268b3729a3789951ad66dd","url":"tw_stocks/1342.json"},{"revision":"923186223a77d9e89a28a0ade0cd76cb","url":"tw_stocks/1341.json"},{"revision":"de2b177b8d4dbe80daafb8d4e4398538","url":"tw_stocks/1340.json"},{"revision":"2be09bd39c62284e72ca3d76a0d1b67d","url":"tw_stocks/1339.json"},{"revision":"50ba1564e033d785abd94831eff955fc","url":"tw_stocks/1338.json"},{"revision":"b92674b37cca6beada0e63a54c49178b","url":"tw_stocks/1337.json"},{"revision":"107af03d4b7c39550e78abd6c34f40b2","url":"tw_stocks/1326.json"},{"revision":"630f33fd2e45eb83902c96dc64a7f426","url":"tw_stocks/1325.json"},{"revision":"3f5ab97f5b107d5b6fd6e3ca0a966c3e","url":"tw_stocks/1324.json"},{"revision":"5a45f7b2a77a7dc9d4ae519b7eb237b3","url":"tw_stocks/1323.json"},{"revision":"36e30244a40edf8cad0ef91b5a60e7f7","url":"tw_stocks/1321.json"},{"revision":"b5cc1f5f438436f26ab4b1fa29788742","url":"tw_stocks/1319.json"},{"revision":"98a36a2eb9941135046e58cbe5e48772","url":"tw_stocks/1316.json"},{"revision":"8d11924ce8da58197d231dd1378dbbb6","url":"tw_stocks/1315.json"},{"revision":"b9d41d6246234ac7b6ef6cc280a2d158","url":"tw_stocks/1314.json"},{"revision":"07a8b05ed906a81e8681fd395d16bea4","url":"tw_stocks/1313.json"},{"revision":"5db04289080ff4037758c9800fec2fe2","url":"tw_stocks/1312.json"},{"revision":"0abfff305083cca2d541c3607f9290ad","url":"tw_stocks/1310.json"},{"revision":"21ea1f14fd139166f98828e2fdaa4996","url":"tw_stocks/1309.json"},{"revision":"c88cd244e3286e20ad2b03a022e0970b","url":"tw_stocks/1308.json"},{"revision":"3cda2bd07031d22186f5d1e43eed3263","url":"tw_stocks/1307.json"},{"revision":"daaeb19cb65c5116eac19a5eaa3ee4e8","url":"tw_stocks/1305.json"},{"revision":"6621e55c90e52de6ef5487b26a98d9d5","url":"tw_stocks/1304.json"},{"revision":"2348b34881fd61fe927be682684a9e7c","url":"tw_stocks/1303.json"},{"revision":"e5a4f39894ce8751a575c88d3d86a008","url":"tw_stocks/1301.json"},{"revision":"40c1782a75cab1745e999114adafa6c2","url":"tw_stocks/1256.json"},{"revision":"1ca16b06ea404d791f07cc11a3e5061a","url":"tw_stocks/1236.json"},{"revision":"02af328d7d3b2e4f95c38842ad1d43a0","url":"tw_stocks/1235.json"},{"revision":"67401d3a9d7855f9e925284dc5fde342","url":"tw_stocks/1234.json"},{"revision":"38aed3c52f457d54b1e0773217eaf377","url":"tw_stocks/1233.json"},{"revision":"cbffdf9a8a53a4a43110fc6bf98b81b4","url":"tw_stocks/1232.json"},{"revision":"ba69c3f03a7d6aca89350d41a5a3db1c","url":"tw_stocks/1231.json"},{"revision":"eab1c5bbf7c59284e3ed9e30798374b0","url":"tw_stocks/1229.json"},{"revision":"d694640eeb4e64deb963abc91fc27092","url":"tw_stocks/1227.json"},{"revision":"adc700220e62ac9180a91066fca3d701","url":"tw_stocks/1225.json"},{"revision":"271e74c8eefdb6189788459c49504c8f","url":"tw_stocks/1220.json"},{"revision":"478bcc0dfe798fe8914a3c5d13112697","url":"tw_stocks/1219.json"},{"revision":"b44e84171b9f049b0c420a06df568c40","url":"tw_stocks/1218.json"},{"revision":"800131c6f6b3c5d41e52c2b6bced57de","url":"tw_stocks/1217.json"},{"revision":"f35e3edd04ebb46ea2d579ea450fbcbf","url":"tw_stocks/1216.json"},{"revision":"79e8ed9eedd9766c4e0ee0033a6b6c93","url":"tw_stocks/1215.json"},{"revision":"b6aee75dd6368cf243fefa80799253e4","url":"tw_stocks/1213.json"},{"revision":"9b56aa73285553e997e2270c9527f74e","url":"tw_stocks/1210.json"},{"revision":"3045bfc456628a47264235ce44205290","url":"tw_stocks/1203.json"},{"revision":"a9db613d3b1956980aeb507edc734fcd","url":"tw_stocks/1201.json"},{"revision":"e67502bdfa6c478acf3d2bcc0bdbc8fa","url":"tw_stocks/1110.json"},{"revision":"9b8a7c45b3f2c37218f5736b0fb8bd8a","url":"tw_stocks/1109.json"},{"revision":"0d38688438023df1373c43781576afc8","url":"tw_stocks/1108.json"},{"revision":"d70eafb60be9fca77024d1915c21112b","url":"tw_stocks/1104.json"},{"revision":"eb9cde420984a931be6799c1027a46be","url":"tw_stocks/1103.json"},{"revision":"24ba9271efe1091decc02661b2b51fe2","url":"tw_stocks/1102.json"},{"revision":"73977e288c84952e9e520c9cc70e3a37","url":"tw_stocks/1101.json"},{"revision":"733c0a8d32935b5669283bf1570344c6","url":"tw_stocks/00999A.json"},{"revision":"954d1eb1c12b69ca193f91a71251c57e","url":"tw_stocks/00997A.json"},{"revision":"2b86ceeb125bad48482fde352065d1d0","url":"tw_stocks/00996A.json"},{"revision":"ed8d4f776ef4b05edad5b5e94acbc1f4","url":"tw_stocks/00995A.json"},{"revision":"50d317b8aadb83e45ec546986abec6fe","url":"tw_stocks/00994A.json"},{"revision":"286847bb762005f9b1053a582a82b304","url":"tw_stocks/00993A.json"},{"revision":"1a16573dc1d4db695514ca2c7c91a7b3","url":"tw_stocks/00992A.json"},{"revision":"957bd8d65fb717223aa4cf1ccaeb465d","url":"tw_stocks/00991A.json"},{"revision":"5651e81f0f34a26f4de0da8f138f1b1f","url":"tw_stocks/00990A.json"},{"revision":"6a88e435aeed4df42506abef03077d5e","url":"tw_stocks/00989A.json"},{"revision":"a6f0187524d6f7e8d54c8646ef40ceab","url":"tw_stocks/00988A.json"},{"revision":"8c033263b84132e5e7585cb64355bc96","url":"tw_stocks/00987A.json"},{"revision":"758b2581d91c4795382e6154458087e0","url":"tw_stocks/00986A.json"},{"revision":"799e5e5c53a6a0c615d0d69952e207e1","url":"tw_stocks/00985B.json"},{"revision":"0ee6b5cab3aa7f8e28eae42524a78199","url":"tw_stocks/00985A.json"},{"revision":"df3bf9535c757a9a422d092ba6834b4a","url":"tw_stocks/00984D.json"},{"revision":"d99c83626c69bb0ba25e61cff4583b49","url":"tw_stocks/00984A.json"},{"revision":"cb22b6f763ec8b1e865dde0a8ead8e93","url":"tw_stocks/00983D.json"},{"revision":"735bff1e8ff2b001b1d1731166d54064","url":"tw_stocks/00983A.json"},{"revision":"ea182ca3be676aff8443aaa620810abe","url":"tw_stocks/00982T.json"},{"revision":"d424971c2dd068b2e00f6e47439d5e7a","url":"tw_stocks/00982D.json"},{"revision":"1e27abe0aa0f4cc40cb134b6027b0bc5","url":"tw_stocks/00982A.json"},{"revision":"5eb65ef2d1102071705a0bdddea025e9","url":"tw_stocks/009820.json"},{"revision":"9b482a6052b9a360232706763ff86fee","url":"tw_stocks/00981T.json"},{"revision":"aa46f084ab0bca74c0222ee5de2d6129","url":"tw_stocks/00981A.json"},{"revision":"fc5b16426bf6f7efaa0d60131c817c02","url":"tw_stocks/009819.json"},{"revision":"46a67baf8f919bf5b440e5c0d8439d71","url":"tw_stocks/009818.json"},{"revision":"c055d59297ed58b5a708b0e1c131c779","url":"tw_stocks/009817.json"},{"revision":"3b77d4b8f993e47245476bd967d486fc","url":"tw_stocks/009816.json"},{"revision":"ebce515da525f2fe4f49f512aa0a5efc","url":"tw_stocks/009813.json"},{"revision":"de301fde4a603c46c896d4f371f988f5","url":"tw_stocks/009812.json"},{"revision":"f6c2f53c9b47e5601a5660f6880f8a80","url":"tw_stocks/009811.json"},{"revision":"958d73ca2e9f4ff81ea00b8b9bf25a31","url":"tw_stocks/009810.json"},{"revision":"a6d3479f6cd430265f0ce49f5f114ee8","url":"tw_stocks/00980A.json"},{"revision":"284d4c15c0a07e719bf2b045ce190396","url":"tw_stocks/009809.json"},{"revision":"526f5b754627026a95937e0b354a6158","url":"tw_stocks/009808.json"},{"revision":"22762f1a0e8652c0a3a036033252646a","url":"tw_stocks/009805.json"},{"revision":"46c1605294bfdf6f817ceac8eaeb610f","url":"tw_stocks/009804.json"},{"revision":"9076ed6e2ca2ec7209f6d88cb655d85f","url":"tw_stocks/009803.json"},{"revision":"7d49073e0421cd63444c18009b0a7a0e","url":"tw_stocks/009802.json"},{"revision":"6ae19827038d5b08ab2a86cd1b8398ab","url":"tw_stocks/009801.json"},{"revision":"199c922907f6ef8846615ec754f6956a","url":"tw_stocks/009800.json"},{"revision":"b4983341ea946fa31c9cea4afed8e9ed","url":"tw_stocks/00972.json"},{"revision":"9cd1e31a6424c65a2efc4db66998876f","url":"tw_stocks/00971.json"},{"revision":"272d928c0e7869bc5397a994296161b0","url":"tw_stocks/00965.json"},{"revision":"7a2f5264ef5e28d4d703f8dcc5b28b81","url":"tw_stocks/00964.json"},{"revision":"1e05e9091540a607bf704f2d2ea834ee","url":"tw_stocks/00963.json"},{"revision":"b3a5526d8bbab68068c1a56a33ac1f2a","url":"tw_stocks/00962.json"},{"revision":"0aa65333764158edf1e36d8b01ba9ccc","url":"tw_stocks/00961.json"},{"revision":"eec6edeedf12b14e13bfeadb9276bc0e","url":"tw_stocks/00960.json"},{"revision":"33e87d0042c1db538add61bee6a4f1c3","url":"tw_stocks/00956.json"},{"revision":"11c1f6c642a3139be52fe19c3d33ec47","url":"tw_stocks/00954.json"},{"revision":"e7326aabc288faf03b85519d78769919","url":"tw_stocks/00953B.json"},{"revision":"8a7a0f386ab69287b391499344996652","url":"tw_stocks/00952.json"},{"revision":"5244996251e8c366dba93a30c798c3e8","url":"tw_stocks/00951.json"},{"revision":"070065694d3aab6331b20115bd7f4d81","url":"tw_stocks/00949.json"},{"revision":"cf3843c51e135fac104777492d685656","url":"tw_stocks/00947.json"},{"revision":"579b763492fafc4331e0883822b5363c","url":"tw_stocks/00946.json"},{"revision":"c90118648e32b974003a60940a17c5db","url":"tw_stocks/00945B.json"},{"revision":"ac1bee12206a4813f1e34f4ace7c99bb","url":"tw_stocks/00944.json"},{"revision":"36822c4e2a9492bd0cbbec551fe42c08","url":"tw_stocks/00943.json"},{"revision":"76c34130db868e31fc468746b141cf53","url":"tw_stocks/00941.json"},{"revision":"0ba683e685460bc811889e4dac56b110","url":"tw_stocks/00940.json"},{"revision":"47d7b31a7ada587cc74f989ea90ccc64","url":"tw_stocks/00939.json"},{"revision":"53c74498adf833aea89b7fa0bc051149","url":"tw_stocks/00938.json"},{"revision":"406424600b0a8553a3cbc7c551f52841","url":"tw_stocks/00936.json"},{"revision":"ada803f8d1b023c3b42ff823e1e7d177","url":"tw_stocks/00935.json"},{"revision":"a9a68a239b249c0648f8cbed1c3bb3d2","url":"tw_stocks/00934.json"},{"revision":"855254d3a613f67102c074e859a12128","url":"tw_stocks/00932.json"},{"revision":"927e6526417d6bad7a3196c110a16726","url":"tw_stocks/00930.json"},{"revision":"9182c9e0a1a61b95deb53c1756901de3","url":"tw_stocks/00929.json"},{"revision":"ca4d0e87b2e6ac2b7e7915c405bee221","url":"tw_stocks/00927.json"},{"revision":"609c7b55b940431225cf346a72b76df6","url":"tw_stocks/00926.json"},{"revision":"10d3fe77a0039b5c509f7c07170a07a2","url":"tw_stocks/00924.json"},{"revision":"39dce30fc828ba6a0216bbe52be775c7","url":"tw_stocks/00923.json"},{"revision":"4c701270ad6e8c5b6ebefec00b430f84","url":"tw_stocks/00922.json"},{"revision":"c079d80c970e6a8c7169317d71498dfd","url":"tw_stocks/00921.json"},{"revision":"5f9a39f4ddb2a42bce07039119b170b8","url":"tw_stocks/00920.json"},{"revision":"dc16557c37d230f85c1cea4178884d23","url":"tw_stocks/00919.json"},{"revision":"2e31de633a683a131d14aa9fdcbce244","url":"tw_stocks/00918.json"},{"revision":"738b4e72b611faa037d9f95bfe1ce348","url":"tw_stocks/00917.json"},{"revision":"adffab9e0d4cbadc2e5eb4200833794b","url":"tw_stocks/00916.json"},{"revision":"b861b3eadaf65d560144f1a37124c3b1","url":"tw_stocks/00915.json"},{"revision":"a163793b845c3fc27ee44bdfac7049b4","url":"tw_stocks/00913.json"},{"revision":"d6f89f4cccdf6d6ad7b9c61ef490955a","url":"tw_stocks/00912.json"},{"revision":"73a074a48d787b43f87706d9bc7bb4a1","url":"tw_stocks/00911.json"},{"revision":"dd502eb73d0ecaba75cd717a8ea627f3","url":"tw_stocks/00910.json"},{"revision":"f231e879d1458b7c3a061e6b785f2a3b","url":"tw_stocks/00909.json"},{"revision":"833df10c550b3ef8b7d1b9d84c78302c","url":"tw_stocks/00908.json"},{"revision":"5e3d7f3edf7444ce9dda5390b6718059","url":"tw_stocks/00907.json"},{"revision":"2ab6abe83dae738d8a5a00caebf295b3","url":"tw_stocks/00905.json"},{"revision":"254616c712603ded811b1b39e9a30b40","url":"tw_stocks/00904.json"},{"revision":"0ab5be45fdeb8bba9fd6f156cf4f8038","url":"tw_stocks/00903.json"},{"revision":"6ca08cd7996c491608716c8a1f1e530f","url":"tw_stocks/00902.json"},{"revision":"42bcd5b80f3e773b5439c083bdc0107f","url":"tw_stocks/00901.json"},{"revision":"6147122ce8c9b7f155ffb93ce6ce6e0a","url":"tw_stocks/00900.json"},{"revision":"53f46dfcec025783cad0b35c72bade19","url":"tw_stocks/00899.json"},{"revision":"66bcb286b0df5c75feedb39d19d9518b","url":"tw_stocks/00898.json"},{"revision":"70d3fccddbd0d49127214bdd067e90ad","url":"tw_stocks/00897.json"},{"revision":"b54e13f4e707ef134afd4ea4c990d2ed","url":"tw_stocks/00896.json"},{"revision":"f889fb793f930f785860d1f68261acd5","url":"tw_stocks/00895.json"},{"revision":"4abb5b4c79eee3a22758bfec75adaea1","url":"tw_stocks/00894.json"},{"revision":"b79a26aea3384de1b34083ff22446c1b","url":"tw_stocks/00893.json"},{"revision":"5b870bfd90230bba3b1acd92cbba3dc3","url":"tw_stocks/00892.json"},{"revision":"cf6753fff490fc054c74fce6838fb030","url":"tw_stocks/00891.json"},{"revision":"f632e6532b405c405cb9c9a6b017ef7a","url":"tw_stocks/00885.json"},{"revision":"0941620fbda7db25db7742481883c369","url":"tw_stocks/00882.json"},{"revision":"806b2c337e896d76850a8096ab204612","url":"tw_stocks/00881.json"},{"revision":"cfd3b7835329c8ea48c9509b97a02085","url":"tw_stocks/00878.json"},{"revision":"e037a236ceecb4451d0b24dc6622b668","url":"tw_stocks/00876.json"},{"revision":"43a11c66ca3cce204b680ff3d4e43109","url":"tw_stocks/00875.json"},{"revision":"b8ed631d789e3d2802a6c21ae9d81aa2","url":"tw_stocks/00865B.json"},{"revision":"6119d4986522c8cbdae03777aabe7d2e","url":"tw_stocks/00861.json"},{"revision":"e59e2b4ceb58448c3227b7d4fa76d533","url":"tw_stocks/00852L.json"},{"revision":"3105aa4a7daebae619cf29a6d1683dff","url":"tw_stocks/00851.json"},{"revision":"c2dc6a7928034f36e624533a9a21576c","url":"tw_stocks/00850.json"},{"revision":"400576d36f517365648febd60c3a2b63","url":"tw_stocks/00830.json"},{"revision":"349ce6ff73e45c5fd513ccbf246cdbd1","url":"tw_stocks/00783.json"},{"revision":"a1274e9e83292c0abc51d6e4d9ff9c0f","url":"tw_stocks/00775B.json"},{"revision":"10815a3d674faf0156f1f03473436c72","url":"tw_stocks/00771.json"},{"revision":"b44d395ce68c65c09ca529200fb429fe","url":"tw_stocks/00770.json"},{"revision":"01e5b5588153d2a6e766bc4212f64cda","url":"tw_stocks/00763U.json"},{"revision":"a6f2570903765fccd1b79d42645b53cf","url":"tw_stocks/00762.json"},{"revision":"1bb76216b68254b95a11a0d3d5fb7fd4","url":"tw_stocks/00757.json"},{"revision":"4a5b1a47a6384dd085514e4e034e4c75","url":"tw_stocks/00753L.json"},{"revision":"01b4352ce95b576e53054fa65567e944","url":"tw_stocks/00752.json"},{"revision":"e1fd5df665bc2f5acfae1562207d75b7","url":"tw_stocks/00739.json"},{"revision":"4ada9eb44d66842999af291ac3e25616","url":"tw_stocks/00738U.json"},{"revision":"dbec8fb37ee227f7cb209689ac1cfa6d","url":"tw_stocks/00737.json"},{"revision":"15dcc7a75454cfbb78e678ee46cffa22","url":"tw_stocks/00736.json"},{"revision":"af05cbb5dc67120c30cfa211c7a4a26a","url":"tw_stocks/00735.json"},{"revision":"9cf478067f6dbc5479094961aa677726","url":"tw_stocks/00733.json"},{"revision":"782dc4302c92af3f7b31602f675be37a","url":"tw_stocks/00731.json"},{"revision":"ad9fa456a5f1ecd6532720718635fdc5","url":"tw_stocks/00730.json"},{"revision":"a327343364b698f8f543c39f331a40ed","url":"tw_stocks/00728.json"},{"revision":"c874667fe0a7c16aea7e22e2c054a932","url":"tw_stocks/00717.json"},{"revision":"a18ba084198a93625b64115f246ca776","url":"tw_stocks/00715L.json"},{"revision":"5e92047498699d2ed606e680bd1aa274","url":"tw_stocks/00714.json"},{"revision":"66267cc17eca83cf49804f4119f2401f","url":"tw_stocks/00713.json"},{"revision":"9a689638271048efecc515038eacbafc","url":"tw_stocks/00712.json"},{"revision":"2c4d95c3f6473110beedd624b0ff45f8","url":"tw_stocks/00711B.json"},{"revision":"640b79d34b47e04bd873e90ae2c7137a","url":"tw_stocks/00710B.json"},{"revision":"803e45b267e8564bfd5556180509b806","url":"tw_stocks/00709.json"},{"revision":"5f1e41a2e78e746543630874a0049ce0","url":"tw_stocks/00708L.json"},{"revision":"dc0fe318cd10b1b6370e574ee337a4f0","url":"tw_stocks/00707R.json"},{"revision":"74073064f233435fc90554c73ba6f16d","url":"tw_stocks/00706L.json"},{"revision":"675cc1a0d9ffaed2b421e42fd49a928f","url":"tw_stocks/00703.json"},{"revision":"115e8270081c6c45e076a7b7fc0d6234","url":"tw_stocks/00702.json"},{"revision":"c9a8bb220e01ad3475ccabcb5434c9f8","url":"tw_stocks/00701.json"},{"revision":"cab88c6c2a21e241f1509e272be8e800","url":"tw_stocks/00700.json"},{"revision":"f5afe881cb7ecdd2b084d402421279d1","url":"tw_stocks/00693U.json"},{"revision":"fa82d32e5fc65e3f8639d7274d5a459e","url":"tw_stocks/00692.json"},{"revision":"52785b734d67fc378efea4ac4a5a85bc","url":"tw_stocks/00690.json"},{"revision":"8e42aa5170308e9fc3971d0db35b73dd","url":"tw_stocks/00689R.json"},{"revision":"ee2bde022cda5c0ffd3495ab29d73cc9","url":"tw_stocks/00688L.json"},{"revision":"7bb98bea90657d1871193ab684afb2e9","url":"tw_stocks/00686R.json"},{"revision":"9acf3b6be9109a73a6f62119ffe7b530","url":"tw_stocks/00685L.json"},{"revision":"5523dc7f106e80cfb4b5673db31f93d3","url":"tw_stocks/00684R.json"},{"revision":"55247ed20a8940c6cd2c6ea0f4447dc1","url":"tw_stocks/00683L.json"},{"revision":"b897a8b721031ac48b98fdeab334e051","url":"tw_stocks/00682U.json"},{"revision":"2f7ed7aa0c2fcb92520f9a0afa79fe23","url":"tw_stocks/00681R.json"},{"revision":"d9108b1fa44378486baf6fc6842e63ba","url":"tw_stocks/00680L.json"},{"revision":"443ec97ec3df6ae26382f8b1a4137f17","url":"tw_stocks/00678.json"},{"revision":"e1144d962f6542efd1418a383c9c6783","url":"tw_stocks/00676R.json"},{"revision":"ab0f964e50df3b59a7940d4003e9d5a4","url":"tw_stocks/00675L.json"},{"revision":"23be1f271b25c7abb9d4d663569e481c","url":"tw_stocks/00674R.json"},{"revision":"b9b104d37130103b005388eec435545f","url":"tw_stocks/00673R.json"},{"revision":"e543fab74b35e8d49bd111e9d82388d8","url":"tw_stocks/00671R.json"},{"revision":"906eaa982d493dbfe858ca04754eac01","url":"tw_stocks/00670L.json"},{"revision":"f2de75e5754a4fea3d08a6e4cd1d7e32","url":"tw_stocks/00669R.json"},{"revision":"694dbc093fc9d53dbc2225eb77a0f314","url":"tw_stocks/00668K.json"},{"revision":"2706bcd0675d0cd96b99845bdc8dde7a","url":"tw_stocks/00668.json"},{"revision":"757b285a10290893a3dc4ff576906cda","url":"tw_stocks/00666R.json"},{"revision":"7cfe22e766b6a81c080d867204baae1d","url":"tw_stocks/00665L.json"},{"revision":"ffc067025145b45525a667e0db7bc28e","url":"tw_stocks/00664R.json"},{"revision":"162120dccde3a9a99c56464a2dd8c0ac","url":"tw_stocks/00663L.json"},{"revision":"98c78fd62682e48927ea7c09b9142f06","url":"tw_stocks/00662.json"},{"revision":"91e3919b90034167af8b8b59ea040744","url":"tw_stocks/00661.json"},{"revision":"2bae8b4c99d1feb41d24918c6f48d0d9","url":"tw_stocks/00660.json"},{"revision":"b8c42ed04fe415ee58ff9172b2e05561","url":"tw_stocks/00657K.json"},{"revision":"b99fb05f07b81ee264c9c67ff0cef5e5","url":"tw_stocks/00657.json"},{"revision":"ddf210f36a5172ff14e328b1ab9eb826","url":"tw_stocks/00656R.json"},{"revision":"900b7e08cfe1f9d55106bea05294fd69","url":"tw_stocks/00655L.json"},{"revision":"1f90ad478c0b4b17744e864db555946e","url":"tw_stocks/00654R.json"},{"revision":"89fdf58b997712fc1036cacb2f079b3d","url":"tw_stocks/00653L.json"},{"revision":"2423334d943b29730901d1e3897ffde4","url":"tw_stocks/00652.json"},{"revision":"111a24c66af607e6939b89f162b8d07a","url":"tw_stocks/00651R.json"},{"revision":"f413337903e6ea345f7dedbdb0f93a53","url":"tw_stocks/00650L.json"},{"revision":"be2845400ceaaf6df9d8e597a6833b73","url":"tw_stocks/00648R.json"},{"revision":"5b122cea5ef61da64addcea0f3af56b9","url":"tw_stocks/00647L.json"},{"revision":"eb96da4cbdab25a3ab721d1232f6fb76","url":"tw_stocks/00646.json"},{"revision":"03950f76799cd7ca1140dbb42c18706d","url":"tw_stocks/00645.json"},{"revision":"504d38e45688b3e5b0d823ca5c0b441c","url":"tw_stocks/00643K.json"},{"revision":"5268909d935be5852c9681587dddc0c5","url":"tw_stocks/00643.json"},{"revision":"7bff6b465e6f97bc6dcc71aeed5b4df2","url":"tw_stocks/00642U.json"},{"revision":"6eb4fb2ac1eed2281b58818cc60a55fd","url":"tw_stocks/00641R.json"},{"revision":"d9e064dcb5521906923e61ce3444a2b9","url":"tw_stocks/00640L.json"},{"revision":"a04bad09742bf4e3eb51b2c734b2b442","url":"tw_stocks/00639.json"},{"revision":"8f6919f55456b6b6bbf694b6b6b86e64","url":"tw_stocks/00638R.json"},{"revision":"bdcf254dc698a9b8b86f301be1eba530","url":"tw_stocks/00637L.json"},{"revision":"7e1db0fc5334db2ca91d3366aab01e66","url":"tw_stocks/00636K.json"},{"revision":"55f321ff1e953cfe4abd8ec720ba6b92","url":"tw_stocks/00636.json"},{"revision":"68973db247d964ac25ad6b6689fd7f1e","url":"tw_stocks/00635U.json"},{"revision":"98c8268d0a77cefaf83950f46943683d","url":"tw_stocks/00634R.json"},{"revision":"60d4dbbc78a84eca911dda1af43cb433","url":"tw_stocks/00633L.json"},{"revision":"ce887515f363743866a1700c371c5975","url":"tw_stocks/00632R.json"},{"revision":"8ed01f58f4fb5bf35b0bb72f453838a2","url":"tw_stocks/00631L.json"},{"revision":"324abde4c892e3dd4041cc7c0efedfc9","url":"tw_stocks/00625K.json"},{"revision":"3be3907102ed664bf6fa8ae7ee0e448f","url":"tw_stocks/006208.json"},{"revision":"63c4ce8c9cdb1df8bb67d36444e4fae0","url":"tw_stocks/006207.json"},{"revision":"46eecd0b032b07a46bd669f8d2d31240","url":"tw_stocks/006206.json"},{"revision":"8de5d96bd80969be4b4c1e845cb88ca9","url":"tw_stocks/006205.json"},{"revision":"6c69b65c79aa3e8b6285bdad6b8eb157","url":"tw_stocks/006204.json"},{"revision":"a4b61c6b8fa09b70779e95f690be1260","url":"tw_stocks/006203.json"},{"revision":"b44ce57227452bcfa7adc5dfb81c69e9","url":"tw_stocks/0061.json"},{"revision":"9da1b40096cf298a1c346eda53a0d0f9","url":"tw_stocks/0057.json"},{"revision":"e9b55ef1651e587417b2b37a93edc0d8","url":"tw_stocks/0056.json"},{"revision":"cfff194aacc035bcb3ca35b0964c30ca","url":"tw_stocks/0055.json"},{"revision":"feaa375be13828c974e7f23fb0521d4f","url":"tw_stocks/0053.json"},{"revision":"209e4372278200bcca4902b922b9ec9b","url":"tw_stocks/0052.json"},{"revision":"da103bfdfad9215afdd60d3b6fd4ecbe","url":"tw_stocks/0051.json"},{"revision":"6ad48a86c12a40e14c0f71700b7ef350","url":"tw_stocks/0050.json"},{"revision":"7bc1c5051a14b41d1eb8cb6a3191f7f5","url":"tw_stocks/00406A.json"},{"revision":"c56dc1ec752d2ca5051dc53c9f3be8fa","url":"tw_stocks/00405A.json"},{"revision":"68ae427f82b9c7e03b91de4a6d1d7c28","url":"tw_stocks/00404A.json"},{"revision":"a954f7a1bfbd6f1687d3dbab87942eaa","url":"tw_stocks/00403A.json"},{"revision":"dc9a71eb37d131b86cb274718f37e30c","url":"tw_stocks/00402A.json"},{"revision":"f976ca916ae7948584e111bf63e79f8e","url":"tw_stocks/00401A.json"},{"revision":"83ff2db2da1b13e49c5c3ed7dee43be0","url":"tw_stocks/00400A.json"},{"revision":"41fc316d96a5a199234d9f0e44c1fe2d","url":"subscription/callback.html"},{"revision":"2cbdef59ec975dfa5e5fd4b7986ec39c","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"5a58bf1551b6cdd94ba265c73c979ddf","url":"financial/rebalance.html"},{"revision":"861eac1cdad0b097ad7bfc9bff8226c8","url":"financial/cashflow.html"},{"revision":"5508d7195f8ec6a68d40b736a312283f","url":"financial/balance-sheet.html"},{"revision":"b4dd33edd7d17411dda075dc6544f70a","url":"finance/tags.html"},{"revision":"b2b42ffd349f369b567d8b2614829d8e","url":"finance/finance-section-created.html"},{"revision":"407a004f8c7a7314083bc5683d6f4a05","url":"finance/authors.html"},{"revision":"8644a5661546d63abadd16edd0e983a2","url":"finance/archive.html"},{"revision":"4f4c8efaeeb4f0bc98591ab3eef1b8c4","url":"finance/tags/finance.html"},{"revision":"2e6c7a3a3176b28b75a2fc88e3b321ee","url":"finance/tags/announcement.html"},{"revision":"6380f5574e0aa2b5e3b535f9573ff607","url":"docs/tags.html"},{"revision":"080f9c61c960c5727564672e5a6c0641","url":"docs/intro.html"},{"revision":"e3d8e35273746112cb7697d6d65e75f6","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"89d636f0d38eead780f30ce166391e80","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"d393d18c40c374ef45af4d453b2b97dc","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"ca79dd32eeb6d91df1664d83162a8d67","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"5dda42c9ea42c44f5409c19626ab42dc","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"759e78abc2a9ef74dc9a273f9706af0c","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"21546b15014c37c8ac4cf6eecfb438be","url":"docs/tags/黑箱協議.html"},{"revision":"0bf2475ecce5c7bf08b96b8ef3e0c7ce","url":"docs/tags/養成.html"},{"revision":"2891d382638dce4995a8f8127b71102e","url":"docs/tags/資料安全.html"},{"revision":"3a4ba16bafeb54eabeb6ab79eb567cd2","url":"docs/tags/經濟循環.html"},{"revision":"5fe62191fbf32024f93e8434b5fff07b","url":"docs/tags/百科.html"},{"revision":"5309e73e1baf7713786483fee78e7cc1","url":"docs/tags/模型控制.html"},{"revision":"3a6f1b745ffe02fa6bb9a911ef0ff674","url":"docs/tags/數據標準.html"},{"revision":"140d69e3a34606e42f6e04eefb8ba3a5","url":"docs/tags/接入規範.html"},{"revision":"94e7c0762683afc957480a85444914f0","url":"docs/tags/指南.html"},{"revision":"a8a66679ba867f88415d05e9669fa206","url":"docs/tags/技術哲學.html"},{"revision":"81a3db26058c2a84759e8ce8bca4ce7f","url":"docs/tags/技術史.html"},{"revision":"b04fb54c2c37c2e3eea84de0e1acd550","url":"docs/tags/戰鬥系統.html"},{"revision":"29567690bb2adf094122e8cbb5e03a02","url":"docs/tags/專案管理.html"},{"revision":"3cd20a8e1e7a570be70bf98083b72698","url":"docs/tags/安全架構.html"},{"revision":"c6a667a9beafd2c48d159b13725f3aac","url":"docs/tags/安全協定.html"},{"revision":"bdf0a8ae7300f0398dbd193c0bb5bc62","url":"docs/tags/外部開發者.html"},{"revision":"48625d9fc3d5e57281a5d68765c036ff","url":"docs/tags/商店.html"},{"revision":"a0d4f070feecb71f7a1de73d4e2cf636","url":"docs/tags/去中心化標準.html"},{"revision":"41ee774e9073a5c7616eab9252130f64","url":"docs/tags/去中心化安全.html"},{"revision":"0f8b71945e770c10996100f983774fd3","url":"docs/tags/去中心化.html"},{"revision":"451254f7418cd8204727fd8064d79a06","url":"docs/tags/top-p.html"},{"revision":"64a7e705125de5161bed41884e029076","url":"docs/tags/tokenizer.html"},{"revision":"4bf009835bda1b5a26f9637d01b81c3c","url":"docs/tags/temperature.html"},{"revision":"fcaa9b8b24eea8cc865c96c3ebe92a1d","url":"docs/tags/technical-docs.html"},{"revision":"fe61a9f4dcb10431ca7f42421ab80eb2","url":"docs/tags/nlp.html"},{"revision":"a957bb89a5bf6e8a84445bb5473a6a2b","url":"docs/tags/llm.html"},{"revision":"50eecd6eb105b03be99eac3d2ba0ee4a","url":"docs/tags/git-hub-copilot.html"},{"revision":"1e968fc19b6fdf6b850386fe04a3e9d0","url":"docs/tags/generative-ai.html"},{"revision":"269a53947a51a474f1d29e0c6e69a3ea","url":"docs/tags/eip.html"},{"revision":"c8a6b6cdc10ca6236e94eec9db7cb121","url":"docs/tags/development-tools.html"},{"revision":"9a3d6e1050167bbd6d7d895a01730326","url":"docs/tags/cli.html"},{"revision":"f05aa7aae87e9ebd61910d1bea0a2950","url":"docs/tags/claude-code.html"},{"revision":"c324225a5e7e52a6ac7d4031b4e26530","url":"docs/tags/bpe.html"},{"revision":"905097cf085c6d3f136f9b70d1cc2f7d","url":"docs/tags/automation.html"},{"revision":"98de61dc73348b37b4227a0230de6d9e","url":"docs/tags/ai.html"},{"revision":"139ca01497cdeec6128ef2bb44116829","url":"docs/tags/agent.html"},{"revision":"23d2c751bf3170a42c3c7a5b16e230b2","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"b1d62bd544cebc01e22313e74500b104","url":"docs/skill/gemini-skills.html"},{"revision":"1fa2f453673309ebcc762393c61fc60e","url":"docs/skill/container-builder-skill.html"},{"revision":"507d798fb7a9994df17be0dbc3cbc318","url":"docs/skill/claude-code-skills.html"},{"revision":"b74f7af725780cf4cd76dbd29b334082","url":"docs/python-workshop/python-init-file.html"},{"revision":"a0104376fd21f4494d93ce92a87d42cc","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"cd6b7ecebd6c98f09f95eb2ca33096e6","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"42353ee1693172456a595a7bfa307370","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"43f75cadf0da671eba5a95c4d41062ef","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"9168f5005a22af6932b025fafbf41e6b","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"bdb7ce0c063078ef6316fad9aebbf854","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"9c1718d2760639a63558a26190e3e7b6","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"63671ca17ab1816743059aa15f177dfc","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"f966e0c8250b992e9ed8cdce5fe44bcb","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"addb9a59344a1b790adcd8c62b575310","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"fab3e8bbbad8b4fb8e1926b2d57f2a35","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"6c43408f3cbf7ee2e7d6941fd314f03b","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"05cfe6bd55859123c3ba1d4b413f3a72","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"74cd6266a992c8b22c188c9e4ae937e5","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"48d801af35d992dc20a1bdf252893d39","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"3f95701ff88cab05e08dba01da64d5c1","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"8c00f63e50a8d9c2ef8212c1be9c03eb","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"fa74df95e7291249153af9031e9c1bec","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"773a5fb5d312322af1f6018030459c34","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"030b6652996ef8e7584e89eb56957685","url":"docs/claude-code-series/skills.html"},{"revision":"66a3f19015379d06d6e7515216592ac3","url":"docs/claude-code-series/monitoring.html"},{"revision":"88b6ddfc345c6cf141447d42bbf3f079","url":"docs/claude-code-series/getting-started.html"},{"revision":"6a5e84c758b6b21a4cdfc9b2f6b56994","url":"docs/category/遊戲規則與手冊.html"},{"revision":"899891ea952ce0e098dfd155fd5d8c8f","url":"docs/category/發文-skill.html"},{"revision":"74e93f2cf1f7a6ec0b1c1341b34096ed","url":"docs/category/戰情室元件-skill.html"},{"revision":"c9ad85d4181506a2241012b4583fa6ab","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"a1a02df0f6178065369893bebc55e453","url":"docs/category/skill.html"},{"revision":"743f30da54fe312dca0fdf9e0005a0a0","url":"docs/category/python-workshop.html"},{"revision":"f296d208773eee811e0d9913f18f8be6","url":"docs/category/egg-pet-philosophy.html"},{"revision":"a40fec94fa3f4f1bcf1770d63132da87","url":"docs/category/claude-code.html"},{"revision":"19834a26d2e6f7db37b6b9511e3fd9fa","url":"docs/blog-skill/news-rules.html"},{"revision":"3e25c250f0fc6dedecb1c5d4a7818637","url":"docs/blog-skill/history-rules.html"},{"revision":"6a9c65d14f882382e0764ca2dd140e7f","url":"docs/blog-skill/finance-rules.html"},{"revision":"83727dd4db7617b3a3945218e3a38dbd","url":"auth/callback.html"},{"revision":"1a186789b3c0ea6fb53d5bf76ad0d80c","url":"assets/js/runtime~main.2bbe14ba.js"},{"revision":"2da347969d6a98e2020bec7540d7eb8e","url":"assets/js/main.ff86bf1e.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"cbe3804fca733c58d88a67faf974e07e","url":"assets/js/ec1e3285.2447f2e1.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"184b78988f932b1af3d291646cacd98b","url":"assets/js/e88c4a9c.2a54753d.js"},{"revision":"62bbb92eb0ef77de7a88ed5be5f92392","url":"assets/js/e86a5a75.f9dea07f.js"},{"revision":"8cd64dc93942bc44a293460c55d2d304","url":"assets/js/e7f07728.d6a6f191.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"644e6886f4a8c14984eb464b9cdb39ea","url":"assets/js/dfea6eb9.b28db666.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"eb33149bc40b527e5097a72f4b749c86","url":"assets/js/dd5b562f.b24a20e4.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"25aff39900ed4e99fb9bb97f31f78c1d","url":"assets/js/d1fa896a.007cca6e.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"0a7e4f7967d0c0d3af07e84e7595fad8","url":"assets/js/cc221b30.75d656ad.js"},{"revision":"2ff557305ec49d537128e1fe97c55f2a","url":"assets/js/c9add68e.e4f709de.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"d6594b241fbf407fdb21285b27c83925","url":"assets/js/b95eaafa.bd514a92.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"debcf61348f5186be287ea00cc45e36f","url":"assets/js/b283ca86.bd565fe4.js"},{"revision":"ec5746a633c7a2a40df19ef1c058a613","url":"assets/js/b2814407.bc8ca38a.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"2e7047f78609cb0a77d4a8866ca769ad","url":"assets/js/ac590df8.9a72083f.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"2e3fb4eddb3d77dfbd5f4dd1b89570f1","url":"assets/js/a71ba949.fa8239ad.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"11148ae37d8b17ed458aff02a727edd2","url":"assets/js/a6038fd8.66d966f4.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"69db041d3b7b02a086ff7d4855347adf","url":"assets/js/9adafc71.a9b3f1da.js"},{"revision":"462d472db8f9be38405eef889520ae5b","url":"assets/js/99d3b34a.9248ddb0.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"6ff2d3b5fdf02cd76b34f0c32bd76567","url":"assets/js/98831978.6e5b5eac.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"5acb8bb33c66aebb38c320fc9ad066dd","url":"assets/js/923ed0b3.08df4b4e.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"0366d8af8e3c1d72a5e107b8e21ce4ae","url":"assets/js/8c20996d.f2168c08.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"acaa2007d9f0e9a56c35676488861ded","url":"assets/js/853ca2df.c0672341.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"fb34cb4c7dd1618cb31541ac0fa66e6c","url":"assets/js/7fbc1a25.bf2a54ba.js"},{"revision":"eaba6a8fd4b0284fc6555a34e91f5d2e","url":"assets/js/7de88436.f249396a.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"eeba3d0a018d1805ebf4f2ec7c1e3fa0","url":"assets/js/7ce5d7a1.8b975ba6.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"e22dd3da86a8707263e90fb41a83a161","url":"assets/js/607acb04.52969f19.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"033a1b018366c07e9395974c3ddc7dea","url":"assets/js/5a762f2f.34638df6.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"267e6a03315c01a315700da587149213","url":"assets/js/56fce896.24785e4c.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"4a43271e75c364303feddef996e133c0","url":"assets/js/54513d10.92b408c2.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"c96fd41873d6859c6e09eca8d779b5e5","url":"assets/js/4810d89a.8e056fd1.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"02c68f0352a77511dcf2344f648bee73","url":"assets/js/43ea09b6.95edc566.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"32c351fa9adc71af0f2be3544091bb35","url":"assets/js/41937f2e.d213d5a8.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"10767282b5a69d22af22a9f49ed23a3e","url":"assets/js/3ee3fb84.94d139c8.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"db6fd0254424e66d9ca57ae6457fe010","url":"assets/js/36f337b1.ebf1a345.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"bcc7b9489e227f0b82b70bc20a7da90a","url":"assets/js/304a23a0.bc064f55.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"22036ccea80e7eff7b0cc4bb170e9865","url":"assets/js/2dd9eb9e.1c46619d.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"d27da5fd03c0c37d8e342973013ec55f","url":"assets/js/23d26d3d.62b56688.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"5e69839a0a533ef9e7a0cf9b552a6adb","url":"assets/js/179b82d4.9b55016f.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"9097af1c8283885416d912874941481b","url":"assets/js/177ac620.1e60a2f6.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"267e346dbbfce7fae854d9575732a656","url":"assets/js/162c7fa0.e72d9e71.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"5186afbe7a5e2d5cd801b1c6193e7077","url":"assets/js/148a248b.b8a40b43.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"5227977a297f550520c3869cd059cb00","url":"assets/js/0e384e19.354bec9c.js"},{"revision":"a7ed2f470729578b29a330f8ff1c9170","url":"assets/js/0a3b6be8.e495ee0a.js"},{"revision":"99085a16b5e3cb259d76905df901275b","url":"assets/js/0962a2ae.01319f4a.js"},{"revision":"e530631424adb0c6849b5bd1ecb6a64d","url":"assets/js/0786d169.480a5258.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"c228a591b759e8695583618f8c39f534","url":"assets/js/02366042.f7bbe5a0.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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