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
    const precacheManifest = [{"revision":"6ab72b2f61c91775b0240520c58617cf","url":"tw_stocks.json"},{"revision":"47d5f4e1e1959ad36d7e7606a2399c76","url":"subscription.html"},{"revision":"c72ff725c277e61bf4d9a00205fc778d","url":"quotes.html"},{"revision":"c08d8c521646924265f0dd3d8a784871","url":"me.html"},{"revision":"24354b17f67764c1d82b63508bd63f38","url":"market-war-room.html"},{"revision":"e2286249e1880420a316614f8c0e5540","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"08159079381ed506ee549e7eaf7927c3","url":"index.html"},{"revision":"622deca4597a4495824b82329a2e6695","url":"games.html"},{"revision":"db5b6e8df424be6a8ec2f0117a9906e1","url":"finance.html"},{"revision":"94b26bd66b635edbb82f1e5611c0ad9c","url":"feedback.html"},{"revision":"c27cf5c3cbb565710f730f68b3d6d937","url":"arena.html"},{"revision":"bf58e92af43afc6c37c8741d77ff8233","url":"404.html"},{"revision":"1c31d3d1ef1dd168c52adad5970f80bc","url":"tw_stocks/9958.json"},{"revision":"2bb58bdbee624cfea43021865f3df6b9","url":"tw_stocks/9955.json"},{"revision":"9911f0d36c4cfa720de7468862e9e596","url":"tw_stocks/9946.json"},{"revision":"715b6c27a8e0a1957a7074db51644a34","url":"tw_stocks/9945.json"},{"revision":"f3d2d155fd6fdfde054842f4c58c20a8","url":"tw_stocks/9944.json"},{"revision":"75bba798a027f9850804b150c91c2486","url":"tw_stocks/9943.json"},{"revision":"09d36efbb33154dead412b29049fa4ca","url":"tw_stocks/9942.json"},{"revision":"5faceb4c1eb1ded399cc4edede3f9585","url":"tw_stocks/9941.json"},{"revision":"1eb5f89e3154053f7407442dc710c710","url":"tw_stocks/9940.json"},{"revision":"33965450631dee45d84fcc42a5eb9600","url":"tw_stocks/9939.json"},{"revision":"e4950dd0e348ef7c886fcc30baff380a","url":"tw_stocks/9938.json"},{"revision":"a9397661e36844abf7a5971448e1b142","url":"tw_stocks/9937.json"},{"revision":"02d66f3087b2425661636d4b86bd8f62","url":"tw_stocks/9935.json"},{"revision":"aa1d0b7e121a855d984df7ee4bdec3cc","url":"tw_stocks/9934.json"},{"revision":"52238bbfbd29cc4e73c0f62e7ac78f26","url":"tw_stocks/9933.json"},{"revision":"c0f86e98cfb229fdb9851ca3a91c8092","url":"tw_stocks/9931.json"},{"revision":"e24f6d128d1854b2ecdd5fa04d10a796","url":"tw_stocks/9930.json"},{"revision":"9d7ccc301a9afb199ca9c2cfae7aa068","url":"tw_stocks/9929.json"},{"revision":"a548bdb39ffe7cbea30c98bd4471572f","url":"tw_stocks/9928.json"},{"revision":"c5dec068fb3911b4cd49f74ad63a45b9","url":"tw_stocks/9927.json"},{"revision":"5a7a0da74e1847dda70e4b1d5f67b239","url":"tw_stocks/9926.json"},{"revision":"b63fe85fe7a660668efd998095500a9c","url":"tw_stocks/9925.json"},{"revision":"f3d63b05e7323e46aeeb647daa3f822e","url":"tw_stocks/9924.json"},{"revision":"07ce469cf9d430d9979002473c99125c","url":"tw_stocks/9921.json"},{"revision":"ef18564b0cd87c9bcf91888f6e307ddd","url":"tw_stocks/9919.json"},{"revision":"c1a5c0f1a2402ab40f406b6ae8deb829","url":"tw_stocks/9918.json"},{"revision":"803c0599bd43fc3f6c795b4e46a2949f","url":"tw_stocks/9917.json"},{"revision":"afc4336dcf8712b14d8a574ae650dec7","url":"tw_stocks/9914.json"},{"revision":"1bccbcaa436312c87b0fbce4e907d668","url":"tw_stocks/9912.json"},{"revision":"37a506c586818101983e3540eebde53f","url":"tw_stocks/9911.json"},{"revision":"4f1ec54223555f2fdc0563a922492c19","url":"tw_stocks/9910.json"},{"revision":"67f79deb9b771dfc33a47b0694a5b616","url":"tw_stocks/9908.json"},{"revision":"aa57ec80aea3d032a203b9d9c20a8bc8","url":"tw_stocks/9907.json"},{"revision":"17487061c3a502fda68c182bfa4dd0c3","url":"tw_stocks/9906.json"},{"revision":"692f00435cd30855dff3d96eae7de65c","url":"tw_stocks/9905.json"},{"revision":"cd5ca9f8eef3aab62f7b626d0d9b2bb3","url":"tw_stocks/9904.json"},{"revision":"2f7d762e7df1aa4612573a6c4440a1ba","url":"tw_stocks/9902.json"},{"revision":"b85afd55d05c41d321b5b9fe35bdfd52","url":"tw_stocks/9802.json"},{"revision":"54d3120d4e274b2259041af0bc746c70","url":"tw_stocks/8996.json"},{"revision":"217017af7a36e8a9ceafa4fb2133e1cd","url":"tw_stocks/8940.json"},{"revision":"db838e2b3f774e4fad0efccb60da35bd","url":"tw_stocks/8926.json"},{"revision":"dc7b75f0053c4e628e6db250666f2f6c","url":"tw_stocks/8499.json"},{"revision":"8d71a66dd3290c878f91a5a3deadaf48","url":"tw_stocks/8488.json"},{"revision":"8d8a80ebb743d490f2bd1a4b81909e98","url":"tw_stocks/8482.json"},{"revision":"74ca42de9c700dd630fb07c231ba22c0","url":"tw_stocks/8481.json"},{"revision":"e0a263703de35850326fbbfdd762eae3","url":"tw_stocks/8478.json"},{"revision":"85689fe835133f1b29bd70002276fc2f","url":"tw_stocks/8476.json"},{"revision":"b9bb0275af7bb85935fd033ff299df6e","url":"tw_stocks/8473.json"},{"revision":"eaf25f739674066b1f0a569128d67589","url":"tw_stocks/8467.json"},{"revision":"2aed975067de3036fab664663072dc2c","url":"tw_stocks/8466.json"},{"revision":"d6c59eda1274aa7d461ded54962bdf9c","url":"tw_stocks/8464.json"},{"revision":"4861e246d0251e43ef9e19a2f364d34b","url":"tw_stocks/8463.json"},{"revision":"53fd3e63dbd543e34faec28eade7e9a2","url":"tw_stocks/8462.json"},{"revision":"867c1065a77399b23f6050130a7b8b75","url":"tw_stocks/8454.json"},{"revision":"560a67c41da16d5fe8482d8e33f0b208","url":"tw_stocks/8443.json"},{"revision":"b7c3c87fbfde796e5d0ac7e25b8c8a7d","url":"tw_stocks/8442.json"},{"revision":"78f0f206b420c04a9173e3ce70dda71f","url":"tw_stocks/8438.json"},{"revision":"aeed5c5661c37316e8c7d730e280cd69","url":"tw_stocks/8429.json"},{"revision":"867071a6fbe23428cb525cf067cf292c","url":"tw_stocks/8422.json"},{"revision":"0181b35c8a3b1dc724560c42bc651db6","url":"tw_stocks/8411.json"},{"revision":"7770320a165864f88f34c1be3422c6a8","url":"tw_stocks/8404.json"},{"revision":"e74793a9318f4e1a76b0c84e381bbff2","url":"tw_stocks/8374.json"},{"revision":"212ec2c36f2b6473c45e9c894f3f3d4e","url":"tw_stocks/8367.json"},{"revision":"2f3b3ed3dea511691428d7ccf27ed62e","url":"tw_stocks/8341.json"},{"revision":"e662e994dd58105bf9c1558892faf91c","url":"tw_stocks/8271.json"},{"revision":"31334b6dba5aa6a977a1d93c5abe7f77","url":"tw_stocks/8261.json"},{"revision":"5401458ecf8eb36a022149a03dcefa22","url":"tw_stocks/8249.json"},{"revision":"d45972a1e4889dfb34b68fb99fdf142c","url":"tw_stocks/8222.json"},{"revision":"9fa03e2ba4e8d6ae46db751cd719bf5d","url":"tw_stocks/8215.json"},{"revision":"a5ff44b9bafbf74b7d5b4d17e87f0de8","url":"tw_stocks/8213.json"},{"revision":"d4f4d904ecc3ab5fe3d972a9c477855d","url":"tw_stocks/8210.json"},{"revision":"f98134e1ecfe51d78a5759c3aa8f9882","url":"tw_stocks/8201.json"},{"revision":"7752232646a1944ea7c29f8ec05aad7a","url":"tw_stocks/8163.json"},{"revision":"8291185bf4247b320c0ab62157436340","url":"tw_stocks/8150.json"},{"revision":"fc6e81caf63641d15e937a3f27781dc6","url":"tw_stocks/8131.json"},{"revision":"e9bb208a90ceb8416a54540ef5d525fa","url":"tw_stocks/8114.json"},{"revision":"6ca4ab6324f52754ca7ae5c4008ec4b4","url":"tw_stocks/8112.json"},{"revision":"79d93b7d1c8cd9a519b8d562bc5d8717","url":"tw_stocks/8110.json"},{"revision":"4646be965e9bf2fb48ed5b9ed04af29b","url":"tw_stocks/8105.json"},{"revision":"563a92746485b80691a047aaa7d0d967","url":"tw_stocks/8104.json"},{"revision":"5b8e96fd7dd231cfe8a739a54e5b2324","url":"tw_stocks/8103.json"},{"revision":"de3d0848d971e93850a90b56ecb0af79","url":"tw_stocks/8101.json"},{"revision":"02a44a9eea048956b67b9a32072ad4bc","url":"tw_stocks/8081.json"},{"revision":"a1da51242a2b3950ce24d21330af7e40","url":"tw_stocks/8072.json"},{"revision":"38f7ca56c6c39529324bce1a9e7b2c91","url":"tw_stocks/8070.json"},{"revision":"333bd436d48392f725d5645d956e8dd3","url":"tw_stocks/8046.json"},{"revision":"236719f7b2f8ad054c76c16896038408","url":"tw_stocks/8045.json"},{"revision":"3644a27927284cd625454a62f18e54c2","url":"tw_stocks/8039.json"},{"revision":"ef85a762320c3a26027db75533a606d2","url":"tw_stocks/8033.json"},{"revision":"aef6d2c3dd554b0b12409df8d82e695e","url":"tw_stocks/8028.json"},{"revision":"c20ee7603f00f37628a8aa1634d7128e","url":"tw_stocks/8021.json"},{"revision":"72b96d4202bda54c7670cdccb7ed5c05","url":"tw_stocks/8016.json"},{"revision":"f007e8c784fa2a50e5acdc7d67edb486","url":"tw_stocks/8011.json"},{"revision":"c0d88629ae3fcb521e55d883cbea854f","url":"tw_stocks/7822.json"},{"revision":"87747ecdabfbe22d82c0bc1db8d2e27b","url":"tw_stocks/7821.json"},{"revision":"72a20b7e4754256fd0ce8fe13cb0458a","url":"tw_stocks/7799.json"},{"revision":"e85bd3937178927351cc1a3fb1cb248a","url":"tw_stocks/7795.json"},{"revision":"2fd50008810d1307440e06238072bf84","url":"tw_stocks/7791.json"},{"revision":"6cd5729d5d260cedfd5c3d622b76f872","url":"tw_stocks/7788.json"},{"revision":"fe1c1162fa3f5d8eca0574ab5f816962","url":"tw_stocks/7786.json"},{"revision":"ea87cce9d88342e8049482badea07b9d","url":"tw_stocks/7780.json"},{"revision":"25feb997baf329fefe8ef7f214e88094","url":"tw_stocks/7769.json"},{"revision":"3847de5f846ea63b12ddd3460be1c0b1","url":"tw_stocks/7765.json"},{"revision":"2cd04a6ad1d9d4dbd71119aff9077865","url":"tw_stocks/7750.json"},{"revision":"ff3fffa9f79f3ea6d0ba02d3e13e33ef","url":"tw_stocks/7749.json"},{"revision":"126740798734772e0ea9bdf336bb16af","url":"tw_stocks/7736.json"},{"revision":"f471aac41d64d19a94007ac363122784","url":"tw_stocks/7732.json"},{"revision":"7d0d0d0e9c5670a2fb5dbc4959d752a7","url":"tw_stocks/7722.json"},{"revision":"3d834496a728aee7265e529894c8971f","url":"tw_stocks/7721.json"},{"revision":"589aba525b18648254bea8fcd0f4b38c","url":"tw_stocks/7711.json"},{"revision":"1572d56478592c3171f3cd402e10ef64","url":"tw_stocks/7705.json"},{"revision":"b9b510812246f2560364aa8d614f6a44","url":"tw_stocks/6994.json"},{"revision":"99c92a2f72fca2a2058430cdaa6aaf1e","url":"tw_stocks/6965.json"},{"revision":"c0f7535604ff1f39c7ae2044be8d1ea0","url":"tw_stocks/6962.json"},{"revision":"5bb421cf0574be12afbf6c4ae864251e","url":"tw_stocks/6958.json"},{"revision":"4177c33166e5ba9bc946a300160dd439","url":"tw_stocks/6957.json"},{"revision":"78b901d651ffad394fe6229edbb7bd47","url":"tw_stocks/6952.json"},{"revision":"613bbfe9140b79b6cc758dc8b48efec8","url":"tw_stocks/6944.json"},{"revision":"7176dff0663c7eee0a21b262be8024ef","url":"tw_stocks/6937.json"},{"revision":"e512f54a8b96b1cdedfdfec4fc15eb26","url":"tw_stocks/6936.json"},{"revision":"01107877ec2c3e6a99b641455d8bbdfa","url":"tw_stocks/6934.json"},{"revision":"2dc444d0eee3fa1d44581344f63b34a0","url":"tw_stocks/6933.json"},{"revision":"aa65712d31bb37113bb9814feacc729f","url":"tw_stocks/6931.json"},{"revision":"7686c39ae1ba28f1abf00366af444d14","url":"tw_stocks/6928.json"},{"revision":"367ae3cf7f9cda81fa4ddd201c5c0f70","url":"tw_stocks/6923.json"},{"revision":"5b872a2402447b33849fbe21fc8bb3b9","url":"tw_stocks/6919.json"},{"revision":"bd1e9625ea66c96c15afbc356d13ce30","url":"tw_stocks/6918.json"},{"revision":"7dfd4c365949f54251dcc5e780dd5ccb","url":"tw_stocks/6916.json"},{"revision":"434c6144c0b54a4d126478c06cfa2ed3","url":"tw_stocks/6914.json"},{"revision":"f5114fb451250f9b9e0e7fb48952ad2d","url":"tw_stocks/6909.json"},{"revision":"89134d1d806fcc206b6f7910d6407dd5","url":"tw_stocks/6906.json"},{"revision":"4618b265a791d56393df03d80facc9ef","url":"tw_stocks/6902.json"},{"revision":"2162378cb8ac8ff3506a185a12b97caa","url":"tw_stocks/6901.json"},{"revision":"9743ee801f3c1df56b0a9f58ef2781b7","url":"tw_stocks/6890.json"},{"revision":"4c797253c4e783f41df02c4b1b38fa4f","url":"tw_stocks/6887.json"},{"revision":"d7ec7da90953524047089969df2c3674","url":"tw_stocks/6885.json"},{"revision":"2af91a64b8a9ae22ade365723df78286","url":"tw_stocks/6873.json"},{"revision":"3d66d3ac56b0db767167687d7f6cf8a7","url":"tw_stocks/6869.json"},{"revision":"2764ed2a799fb7e5c3b4df85d74ef8f9","url":"tw_stocks/6863.json"},{"revision":"f2c9a536a034918187ca5a5dad989be9","url":"tw_stocks/6862.json"},{"revision":"c751c80d1f96a8c20c1dd1c3e928e452","url":"tw_stocks/6861.json"},{"revision":"a2e63489330e6a20a19b820f1f93365b","url":"tw_stocks/6838.json"},{"revision":"f8156e6a86e6d3f25167f5e7f1d737e1","url":"tw_stocks/6835.json"},{"revision":"2cba9268e3b455e28076b2ea5f1a9ad9","url":"tw_stocks/6834.json"},{"revision":"31f380446eacad97436bae443e028f40","url":"tw_stocks/6831.json"},{"revision":"28ac5c46e139d2a340cda16a7bf3a8e3","url":"tw_stocks/6830.json"},{"revision":"11380b533fc6287db2f28e30edf69785","url":"tw_stocks/6807.json"},{"revision":"f2bc5ef560b8380245deb15d296276cd","url":"tw_stocks/6806.json"},{"revision":"d3793e76eaa343fb735301ab95ad8028","url":"tw_stocks/6805.json"},{"revision":"aa612e3089bc4d7e743c1a6f1328ab43","url":"tw_stocks/6799.json"},{"revision":"d576897ff79bc63df7132d11a077dfcb","url":"tw_stocks/6796.json"},{"revision":"6dede2f86b1c33e164504d0e66c29ccf","url":"tw_stocks/6794.json"},{"revision":"7f829aae0503a4f8b75892de356479b3","url":"tw_stocks/6792.json"},{"revision":"5a0b019cca9ed8e52acee416c6771d21","url":"tw_stocks/6790.json"},{"revision":"ee8c30dbccfa92e178a9951ba832a04d","url":"tw_stocks/6789.json"},{"revision":"488c4ff85e30c4ae7af741d9b15f21bf","url":"tw_stocks/6782.json"},{"revision":"826457a6d84f3c7d9a983b13d0742fa1","url":"tw_stocks/6781.json"},{"revision":"d397bf49969c9c25299215104376d860","url":"tw_stocks/6776.json"},{"revision":"6a1191520bb8c23205f2879f7a2e0f55","url":"tw_stocks/6770.json"},{"revision":"5da565f43762f8691c4ce62407a8ace9","url":"tw_stocks/6768.json"},{"revision":"cdfd1c4d995420341ff1be20502a3537","url":"tw_stocks/6757.json"},{"revision":"469e1537c2bebc9a06de306d568d112e","url":"tw_stocks/6756.json"},{"revision":"35418ed396ffbd98566f643bf373218f","url":"tw_stocks/6754.json"},{"revision":"d45e2acb6c45391e5944fd1e96b00436","url":"tw_stocks/6753.json"},{"revision":"7053ca817fb75949400902da8f0d5258","url":"tw_stocks/6743.json"},{"revision":"4ef312c2097b7b2b5a5d2d7ba18980a1","url":"tw_stocks/6742.json"},{"revision":"e379092a054e07c0e4d5505e8451ffcf","url":"tw_stocks/6722.json"},{"revision":"e20031a7e3c7c9927f9dce3d9b6100ce","url":"tw_stocks/6719.json"},{"revision":"de38a6f8590195b50406cfbb71051877","url":"tw_stocks/6715.json"},{"revision":"06e2ae07bc0a184e05c27cb9d3c7eaab","url":"tw_stocks/6706.json"},{"revision":"d744e9c60898d80a8fb3738bf3d77249","url":"tw_stocks/6698.json"},{"revision":"1db5190c8d596edb80728a49c5664a08","url":"tw_stocks/6695.json"},{"revision":"bd8b335a097ecd8c19d4492dd8a5a78e","url":"tw_stocks/6691.json"},{"revision":"3310cdf01504c4265316c7df55f63217","url":"tw_stocks/6689.json"},{"revision":"6657d2298473c4a2da8ef738ddc8763a","url":"tw_stocks/6674.json"},{"revision":"23e6a07b2b91711924c6f565eff6d0c0","url":"tw_stocks/6672.json"},{"revision":"a7bca216e7539786601813ea6e1f29a1","url":"tw_stocks/6671.json"},{"revision":"45ca119601f722386a585d8e02154a5b","url":"tw_stocks/6670.json"},{"revision":"aed50e7348f36b586946c88a274bbf71","url":"tw_stocks/6669.json"},{"revision":"dd598270cbf0fd709cfb4a145c3e515a","url":"tw_stocks/6668.json"},{"revision":"81faf90ca2595944ae5aee3c89d2c318","url":"tw_stocks/6666.json"},{"revision":"cdcb4ee8e0e262f9dffbde5c9b0a03ad","url":"tw_stocks/6658.json"},{"revision":"aec2fc6378cbd6935248a5c7b00aedea","url":"tw_stocks/6657.json"},{"revision":"5bd4df387b6301e35dc7b94e071c87c7","url":"tw_stocks/6655.json"},{"revision":"703c6b870c3644ee141932a1b9ae431d","url":"tw_stocks/6641.json"},{"revision":"549e281fc065748845836d754e3727bd","url":"tw_stocks/6625.json"},{"revision":"c900ec177c7319aa6fc65a4a4cb99f35","url":"tw_stocks/6614.json"},{"revision":"d3b493417bd24afbf54241c1cd024d84","url":"tw_stocks/6606.json"},{"revision":"220eedca16a5384fe495750c0789a7f5","url":"tw_stocks/6605.json"},{"revision":"7c7bb8c45cc80870fbd8f7d41b38701d","url":"tw_stocks/6598.json"},{"revision":"fc7b3944dc5c205580a3b6745a4c1ba1","url":"tw_stocks/6592.json"},{"revision":"9a34947ba476e7108940ffd1699e6a4d","url":"tw_stocks/6591.json"},{"revision":"a370bdea6d89c6cd95889def5da34d1e","url":"tw_stocks/6589.json"},{"revision":"13b1b1bd1bdc5e40735fc1a6a00b64da","url":"tw_stocks/6585.json"},{"revision":"e19be1f857f51bcbf0b4c6e90ed7de10","url":"tw_stocks/6582.json"},{"revision":"4df90608eeaaa7af08462f6181a4f21c","url":"tw_stocks/6581.json"},{"revision":"711f36e40ad52c1b186c0c2ba559caad","url":"tw_stocks/6579.json"},{"revision":"5d8e5b81ba8d9a4b09362823c79060f1","url":"tw_stocks/6573.json"},{"revision":"7c88bcfcde71c8bf1c8a5f19aae5eaa9","url":"tw_stocks/6558.json"},{"revision":"feac494d425b30c0940792b9b6cb2c19","url":"tw_stocks/6552.json"},{"revision":"3ed59460bedb58423da05806624fbe27","url":"tw_stocks/6550.json"},{"revision":"5090e5376e069bd465b382c93f25ddae","url":"tw_stocks/6541.json"},{"revision":"1a7a47b924ac408ea250114c0434b7f6","url":"tw_stocks/6533.json"},{"revision":"de44e6120c7c5ef017766fe99927bc66","url":"tw_stocks/6531.json"},{"revision":"92e4b7e2732cdd177b3f8d99bcf7835e","url":"tw_stocks/6526.json"},{"revision":"59eb68f5a6e711a6bfefb3230858c71f","url":"tw_stocks/6525.json"},{"revision":"1cdeeac36d6faff9ae63fbc9cba71e82","url":"tw_stocks/6515.json"},{"revision":"749ca743ceb8982c7c5bfdda2aa4a57f","url":"tw_stocks/6505.json"},{"revision":"f2ea04c8207650d01b7e375b8137cf76","url":"tw_stocks/6504.json"},{"revision":"91b4bed7fcd3b0a3dffd7f7e73dd0e71","url":"tw_stocks/6491.json"},{"revision":"48008c434f6b5b8862b59a8a05db81d7","url":"tw_stocks/6477.json"},{"revision":"2f12a47d2e1ca3139ae72e45db2b9bbc","url":"tw_stocks/6472.json"},{"revision":"9d9a63c53c9fbcb211c93175e7437878","url":"tw_stocks/6464.json"},{"revision":"e36ae4a03acf8a4f6dc38b588b2b27ef","url":"tw_stocks/6456.json"},{"revision":"1b0f39dfd0740d8d00a09da536e35398","url":"tw_stocks/6451.json"},{"revision":"2f70e4f979dcce425ff2a0b63f627852","url":"tw_stocks/6449.json"},{"revision":"177cebba19f8875e98f96f3a81fe88dd","url":"tw_stocks/6446.json"},{"revision":"1f265509d4d17ecde58f68cbaea23873","url":"tw_stocks/6443.json"},{"revision":"33bbdc6ecad1b436130a7b9efa17c43e","url":"tw_stocks/6442.json"},{"revision":"5db03cd75bf141da450d347a2b67e2dd","url":"tw_stocks/6438.json"},{"revision":"2614fda0add97de394bc7b32c6d4b3ea","url":"tw_stocks/6431.json"},{"revision":"ea56255c28afdd977f9fa7afbd107d6e","url":"tw_stocks/6426.json"},{"revision":"ccaa8c5f89b21d25a045caeebe6ba6bb","url":"tw_stocks/6416.json"},{"revision":"971d7154a926304a1396610bfc1367b0","url":"tw_stocks/6415.json"},{"revision":"d7797a8acf6f7f82b51b5c9b511cf749","url":"tw_stocks/6414.json"},{"revision":"4d26ac4f45dca836fc81212d14a2014a","url":"tw_stocks/6412.json"},{"revision":"97dc6cbd0728dcccbf51b10b6749ab62","url":"tw_stocks/6409.json"},{"revision":"bd72a576a7227f3ffddb44d7b0f74ca1","url":"tw_stocks/6405.json"},{"revision":"ee3ef10dac8577b8ad8f25c0804c8c53","url":"tw_stocks/6285.json"},{"revision":"2398d8e87b072a81f83cc0f232a0f31f","url":"tw_stocks/6283.json"},{"revision":"3f4e459e6679781761d1bfde17777ad0","url":"tw_stocks/6282.json"},{"revision":"79bb08451c6a0e8919f4f4510242633c","url":"tw_stocks/6281.json"},{"revision":"94f774352b7ccff6112dc1d5f6d5fb21","url":"tw_stocks/6278.json"},{"revision":"7f75f3ea1a941a31859aa76eff1e1b06","url":"tw_stocks/6277.json"},{"revision":"582527ea9ab3553ad83e126cc40a2fce","url":"tw_stocks/6272.json"},{"revision":"9bb6f3560515d75c67587a38d4208fad","url":"tw_stocks/6271.json"},{"revision":"8dc4f1a57cc881c0651e8ee17636730c","url":"tw_stocks/6269.json"},{"revision":"2d59c7c6e69eae80a3e7e7b1d5d409ba","url":"tw_stocks/6257.json"},{"revision":"feac8f78bb2b3499c6a82d738b2d6e4f","url":"tw_stocks/6243.json"},{"revision":"86e5b0288900d1e6da00a8f70420c355","url":"tw_stocks/6239.json"},{"revision":"11009557027f0b44c06ec13af1b0d19c","url":"tw_stocks/6235.json"},{"revision":"3051864f3d5191f4313e5023b4b8d880","url":"tw_stocks/6230.json"},{"revision":"ac8d0cadd66347d584358571b7fe94bb","url":"tw_stocks/6226.json"},{"revision":"80abc74ffba3539fd1afbab5735bf372","url":"tw_stocks/6225.json"},{"revision":"b7b33cdfb589b83c54c3fd0ad51facc9","url":"tw_stocks/6224.json"},{"revision":"68d0c002e3930e397bd40fb4c4fe5b06","url":"tw_stocks/6216.json"},{"revision":"c7f160242f88be6871a4171ee14c3095","url":"tw_stocks/6215.json"},{"revision":"6fb091a260c751d0322012c80d08e536","url":"tw_stocks/6214.json"},{"revision":"61ed02f2dbe90e13fbcd9f442b144121","url":"tw_stocks/6213.json"},{"revision":"a713c9cadbc024f3b93c0285cc2eff6d","url":"tw_stocks/6209.json"},{"revision":"f8da65d81b7a48774e9a9317b31f100c","url":"tw_stocks/6206.json"},{"revision":"7e9637b535719388f4f7ec4bd3be1d3b","url":"tw_stocks/6205.json"},{"revision":"a7e02d2b3c8ebb3fad2706af0964b70d","url":"tw_stocks/6202.json"},{"revision":"83a0ababeca6ec4d5063fec798be282e","url":"tw_stocks/6201.json"},{"revision":"3a3e6ff42298ded5bd86a5c846303298","url":"tw_stocks/6197.json"},{"revision":"d84c354d3fb8c1b3043f9cab1a2f264d","url":"tw_stocks/6196.json"},{"revision":"95dbce64abf055641092a128c402925d","url":"tw_stocks/6192.json"},{"revision":"8c486f4ff095b037a8c4de2f64997a3b","url":"tw_stocks/6191.json"},{"revision":"17176dbfd23513edcfcf45c9b00a432e","url":"tw_stocks/6189.json"},{"revision":"d82f6f8b15a3e38904a23b137dfb4fe3","url":"tw_stocks/6184.json"},{"revision":"1d972c7d271cef0e066931387875197a","url":"tw_stocks/6183.json"},{"revision":"83650dafdbd87a991bf897362ba94bf7","url":"tw_stocks/6177.json"},{"revision":"8897d11a59cf5f82a20e18daed45d7ad","url":"tw_stocks/6176.json"},{"revision":"fe9fc06ac5f270a5904fe474967a6984","url":"tw_stocks/6168.json"},{"revision":"2904bd44587b4393c48d0b5a6bc0d940","url":"tw_stocks/6166.json"},{"revision":"a2e0d59188ca0bb74e26a80791cd03cc","url":"tw_stocks/6165.json"},{"revision":"270c226f24bf80495ee4c49f967a31b1","url":"tw_stocks/6164.json"},{"revision":"366046603bf2b20202ff801430292e5e","url":"tw_stocks/6155.json"},{"revision":"c40c6c220fede417dfaccf09751a85de","url":"tw_stocks/6153.json"},{"revision":"083cc11fcff6927818de18d73cd75bcf","url":"tw_stocks/6152.json"},{"revision":"b4687f7f3306afc6cf202abc04ed44c6","url":"tw_stocks/6142.json"},{"revision":"3772c13060e006ff2a95e0da586e456b","url":"tw_stocks/6141.json"},{"revision":"0bdacbcc5e785c6cb591d50bfc7b1e2e","url":"tw_stocks/6139.json"},{"revision":"b007c3c5c53e1b59fcb47c3f64a618a8","url":"tw_stocks/6136.json"},{"revision":"aa9ea7aea6f33d178dd398384166b0d9","url":"tw_stocks/6133.json"},{"revision":"aca7cb40a0723b4a00b316df21635682","url":"tw_stocks/6128.json"},{"revision":"5f0526fac161b2cd627613fcbddd6dbf","url":"tw_stocks/6120.json"},{"revision":"a3bb82bf08566445347667f150078524","url":"tw_stocks/6117.json"},{"revision":"8df92c7ef18c3ba42fc6033004ad79b2","url":"tw_stocks/6116.json"},{"revision":"c413ac6decd5e0f76dd18f980a3a64c6","url":"tw_stocks/6115.json"},{"revision":"a270c6ebc510e9271d0f82bdff6bca2c","url":"tw_stocks/6112.json"},{"revision":"bb47097d22847d6b461048c7e1ec3142","url":"tw_stocks/6108.json"},{"revision":"3e07c5c1af18e87712febd1dbfc51346","url":"tw_stocks/6024.json"},{"revision":"6a1454fe57134404fc493897dfe493ff","url":"tw_stocks/6005.json"},{"revision":"0b4e191352db3197da2f045b557ddaa3","url":"tw_stocks/5907.json"},{"revision":"ad03637fb6e31c492e041ebec94504dc","url":"tw_stocks/5906.json"},{"revision":"b5b5ff79db6a1c86a2762acd00981c2c","url":"tw_stocks/5880.json"},{"revision":"ea2b0e6d785fc9e0f2ef51f43db7104d","url":"tw_stocks/5876.json"},{"revision":"f66de81385764afd0dea99ab9fec2f3b","url":"tw_stocks/5871.json"},{"revision":"9dd0176ea8687c0aa689a2f327065f27","url":"tw_stocks/5706.json"},{"revision":"fde8bb7085362154e32339400559fa90","url":"tw_stocks/5608.json"},{"revision":"fc51c32bb7c8622a5e8b51f3d1be9799","url":"tw_stocks/5607.json"},{"revision":"fb82ad852bcb8a8e89ed5af3323f91f5","url":"tw_stocks/5546.json"},{"revision":"1fbf2088fd6e3188b7bae551544455cd","url":"tw_stocks/5538.json"},{"revision":"d0439cbe43b8dac522967920b10a6ecc","url":"tw_stocks/5534.json"},{"revision":"94faab596dd98641dfcbe209fd1a6970","url":"tw_stocks/5533.json"},{"revision":"af235156834589de6d827de73daa7851","url":"tw_stocks/5531.json"},{"revision":"63787b96e69647da0a2d9629e643b0d9","url":"tw_stocks/5525.json"},{"revision":"6c20a7ea00fc70e5fb5028cda01a8668","url":"tw_stocks/5522.json"},{"revision":"6c575736d63ac917a2356cf8ceb94331","url":"tw_stocks/5521.json"},{"revision":"e16431f88c84f11432fcc7dde69dcbb7","url":"tw_stocks/5519.json"},{"revision":"15cb4272eba03db3eccccfcc343ad00d","url":"tw_stocks/5515.json"},{"revision":"e0a53df9c482ff127c688117bc6364b0","url":"tw_stocks/5484.json"},{"revision":"8ff1dcfd4123a8d7bb03ae4ea005a5e0","url":"tw_stocks/5471.json"},{"revision":"1ec734cb9b3c589daf3abda54272ff52","url":"tw_stocks/5469.json"},{"revision":"4ddb5665953f35f44d81f09b59d4c536","url":"tw_stocks/5434.json"},{"revision":"33215176a51a9c6fcd15caecf90a678f","url":"tw_stocks/5388.json"},{"revision":"04c05b3a922b615f2856353765e4f56c","url":"tw_stocks/5306.json"},{"revision":"227f9ce538b3a6cf65a99c26a1dd8d0e","url":"tw_stocks/5292.json"},{"revision":"ad57eadd16f1350973d156d793d8fcb0","url":"tw_stocks/5288.json"},{"revision":"a4579859d3ff6adb700cc334c1a3ed0a","url":"tw_stocks/5285.json"},{"revision":"b5e4d8c8c9d94f8e1c01ab76a306e04d","url":"tw_stocks/5284.json"},{"revision":"7796ec7e42d402ae8a635cc3051edad6","url":"tw_stocks/5283.json"},{"revision":"241354375a6cc9e2f9b7e4cb309b5ba5","url":"tw_stocks/5269.json"},{"revision":"003e9db2792ad230084c1f6574e3ede7","url":"tw_stocks/5258.json"},{"revision":"7fcef8564e1eb411845950a814a4554b","url":"tw_stocks/5244.json"},{"revision":"16231389b5a4f3b5273d4068466fda76","url":"tw_stocks/5243.json"},{"revision":"ecb9b6bfb6e2a98a97b10a231973991a","url":"tw_stocks/5234.json"},{"revision":"071e607ab9444bed4ede755c2bfa68b1","url":"tw_stocks/5225.json"},{"revision":"82a3fa9ef793eac14c5027f4d2c57e69","url":"tw_stocks/5222.json"},{"revision":"fd5b8592d9ee8f030e5d376ce54df0f0","url":"tw_stocks/5215.json"},{"revision":"b6febe330af45fceaf92728032f03554","url":"tw_stocks/5203.json"},{"revision":"262ae00fdeb5bca09bb70b33fa5eda63","url":"tw_stocks/5007.json"},{"revision":"75dbb4f69895c93286a83c1fecb122c6","url":"tw_stocks/4999.json"},{"revision":"3abdb964fba50cb53db66f66e7feca4a","url":"tw_stocks/4994.json"},{"revision":"746002600d2f172362175c9ac05048ea","url":"tw_stocks/4989.json"},{"revision":"eed7cfcf53403e82c154f3c2858163c0","url":"tw_stocks/4977.json"},{"revision":"0ef1c1b435e07aa8aec5c1d0812506fe","url":"tw_stocks/4976.json"},{"revision":"8d7f08d48db150f7a9de380bad13aa4d","url":"tw_stocks/4968.json"},{"revision":"53dfdf5bf12a20432a45b39005369d8e","url":"tw_stocks/4967.json"},{"revision":"dd6fe928a2cf349fa5ac8103e9e7c884","url":"tw_stocks/4961.json"},{"revision":"e0fc01fd8e06e5700c6acdd499295c90","url":"tw_stocks/4960.json"},{"revision":"405df12798f561eca6cc1f80c7f33223","url":"tw_stocks/4958.json"},{"revision":"c1ea909ea0a2ff35842e1023d057868f","url":"tw_stocks/4956.json"},{"revision":"5ba02f78f115f65d4e1bc906bbcbd7e0","url":"tw_stocks/4952.json"},{"revision":"7f6e5ad0a644220cb60aed325eda88a1","url":"tw_stocks/4949.json"},{"revision":"3e087fd621d0bc41dfcaafe1df98d31d","url":"tw_stocks/4943.json"},{"revision":"1614114671bca818db6aafce38e0b32b","url":"tw_stocks/4942.json"},{"revision":"bda3f093c12d49e27ac65cacfab2f6fb","url":"tw_stocks/4938.json"},{"revision":"9fae5eaca58f4e0541ffeba4131d1347","url":"tw_stocks/4935.json"},{"revision":"a5b5b6319cb61ec3dacefc22d36cba2c","url":"tw_stocks/4934.json"},{"revision":"6abca0b83d5a0e8a1d142f29653ab47d","url":"tw_stocks/4930.json"},{"revision":"d3d64023fce3e710aed7f3b0003e9538","url":"tw_stocks/4927.json"},{"revision":"dfaa955bc9c2ec07c834b0e5c98b5f7c","url":"tw_stocks/4919.json"},{"revision":"21b1776714862cabb786aa1416ec0e45","url":"tw_stocks/4916.json"},{"revision":"1d32d4f589cc1a5e12fe5df983306aff","url":"tw_stocks/4915.json"},{"revision":"4a713eb526b86f495118bab51567a6fb","url":"tw_stocks/4912.json"},{"revision":"53459f2b38fd99e0b8a19295cc49dbb5","url":"tw_stocks/4906.json"},{"revision":"c222faab8b083f8e1ff9c870f526081a","url":"tw_stocks/4904.json"},{"revision":"498f070c7128cd1824688b6e4a96523b","url":"tw_stocks/4807.json"},{"revision":"3ffb19e86ff699bac6703a6a9aec1063","url":"tw_stocks/4771.json"},{"revision":"05c6daf4a73ebdcf4f47f51c19e77b79","url":"tw_stocks/4770.json"},{"revision":"f8fdc7aaf5c12da75ad33aaf51e485ec","url":"tw_stocks/4766.json"},{"revision":"f7e834e20be4a604a1a07a1590447496","url":"tw_stocks/4764.json"},{"revision":"cabe0a7b402dfe4cfa2b2724543525bf","url":"tw_stocks/4763.json"},{"revision":"68953c4e04b0de07f49f32b29d3f2a4f","url":"tw_stocks/4755.json"},{"revision":"aa42d858746703a49d3e1f8ed192f712","url":"tw_stocks/4746.json"},{"revision":"55b5bf32280c7d6a968b731af0067701","url":"tw_stocks/4739.json"},{"revision":"39b5262250650fe9536eef5dbc7dc5da","url":"tw_stocks/4737.json"},{"revision":"e0e1f3927546dab381bb9bde92593c39","url":"tw_stocks/4736.json"},{"revision":"8b17d257e2d977b504964b141e7ca0f9","url":"tw_stocks/4722.json"},{"revision":"255bbd3a62ea80e66fef33e6ddf931c3","url":"tw_stocks/4720.json"},{"revision":"f7d9c033af341358d2c38422e5b27877","url":"tw_stocks/4588.json"},{"revision":"441c6faef4309cbd8aab0d9c819713a2","url":"tw_stocks/4585.json"},{"revision":"1ac914104c06eeaa87dd7a4de83a692f","url":"tw_stocks/4583.json"},{"revision":"878cfeb0020c3f0084da9004fe9229ca","url":"tw_stocks/4581.json"},{"revision":"b1915e221817d922c885deff5a8fc096","url":"tw_stocks/4576.json"},{"revision":"37377da85b88fcc0c6aa570c8f0a4aa2","url":"tw_stocks/4572.json"},{"revision":"0628c77245475603a55b69686ac42662","url":"tw_stocks/4571.json"},{"revision":"486aacdfcf1e7408ae91800ae905cf61","url":"tw_stocks/4569.json"},{"revision":"e18f515f5963070439704cfd4809c70e","url":"tw_stocks/4566.json"},{"revision":"8afb486091205fade0d773184addb545","url":"tw_stocks/4564.json"},{"revision":"7b5e2d28305c459b7b640ce789eb74a8","url":"tw_stocks/4562.json"},{"revision":"121c8c74c377e3de251020bc2fe2d646","url":"tw_stocks/4560.json"},{"revision":"9ba0736e753ab4f561110a4c8fda4a92","url":"tw_stocks/4557.json"},{"revision":"a45c74e42f7466e967157c6934f1f083","url":"tw_stocks/4555.json"},{"revision":"d579bb138680861f4b84c3793edff008","url":"tw_stocks/4552.json"},{"revision":"dd4fc6cc80483e67249a7f9f4e012d63","url":"tw_stocks/4551.json"},{"revision":"f10296fc8d59b4b2ddd1545445c7606c","url":"tw_stocks/4545.json"},{"revision":"13de4cd8cae56d81492dbc922b0f9adf","url":"tw_stocks/4540.json"},{"revision":"3dad04db9481d548ea9781acc6214997","url":"tw_stocks/4536.json"},{"revision":"e807ff644cbb3eb844d453092786a99a","url":"tw_stocks/4532.json"},{"revision":"46287c319a6f3246e1862da08ef0bfd1","url":"tw_stocks/4526.json"},{"revision":"faea06152dc68ccb594e4a2f19f99fe6","url":"tw_stocks/4441.json"},{"revision":"3cc2f42059b422b23d94636196c87904","url":"tw_stocks/4440.json"},{"revision":"80368fed30068bb22d75e8e7bb7d7b39","url":"tw_stocks/4439.json"},{"revision":"11b780117c1fa062320a885377dec01a","url":"tw_stocks/4438.json"},{"revision":"d28f4e7468e56944f97fdd6bce9c18aa","url":"tw_stocks/4426.json"},{"revision":"f7d6aa1800fda7311be6a46657b60934","url":"tw_stocks/4414.json"},{"revision":"69a07871cbed396ea47da68c5813590a","url":"tw_stocks/4306.json"},{"revision":"302b7f33903106d0300ace5c3a10bcee","url":"tw_stocks/4190.json"},{"revision":"a93673f727c3675f192c60464e406bc9","url":"tw_stocks/4169.json"},{"revision":"db0d02a2e5d0a32c13bf51867e835530","url":"tw_stocks/4164.json"},{"revision":"490a0c3e706537888ade8ff29bb48607","url":"tw_stocks/4155.json"},{"revision":"bd9b770bad00bb24f8cb56ae2a9ab826","url":"tw_stocks/4148.json"},{"revision":"f8ce5b823c0066d383efe735e1e7cdea","url":"tw_stocks/4142.json"},{"revision":"ef8edb5696c097d05a22018543e97a3c","url":"tw_stocks/4137.json"},{"revision":"85b001844971a9eccd10b2d679f4b820","url":"tw_stocks/4133.json"},{"revision":"5817d66d7cbac15373dbb777a408ac52","url":"tw_stocks/4119.json"},{"revision":"e0268dc32d8047ae8e50455346960f18","url":"tw_stocks/4108.json"},{"revision":"6aa499292beae34bf15c9be46fb1a078","url":"tw_stocks/4106.json"},{"revision":"87ea3ff571d9ad4f5e371d857dfe2de0","url":"tw_stocks/4104.json"},{"revision":"b254d25010ce59758c05861290158b7c","url":"tw_stocks/3717.json"},{"revision":"7d0b9faf5d5cc74d0c8c53855f6e942f","url":"tw_stocks/3716.json"},{"revision":"f6f02484eb6c2b32a57f861e88ed0a57","url":"tw_stocks/3715.json"},{"revision":"ae131dadc188b06f7b73b1091ee7ed61","url":"tw_stocks/3714.json"},{"revision":"3b92d1443b76592adf882cdb03860066","url":"tw_stocks/3712.json"},{"revision":"6f7df1273fd38e40eed0bf236215663b","url":"tw_stocks/3711.json"},{"revision":"aede4e4941009701fdffb656c7c0a001","url":"tw_stocks/3708.json"},{"revision":"1aa8727834eb63823ab872b9b2c8b8a0","url":"tw_stocks/3706.json"},{"revision":"fa80a0dda5be5cea11d08762333da9de","url":"tw_stocks/3705.json"},{"revision":"6a6cfdde975a31813a9de43d680fcf15","url":"tw_stocks/3704.json"},{"revision":"c728cb3e8fe990fabb0888909ff1685e","url":"tw_stocks/3703.json"},{"revision":"a826f9c1fc4e236c14f55da9b578b09b","url":"tw_stocks/3702.json"},{"revision":"e872b73496fc8784602c25ff87a72d60","url":"tw_stocks/3701.json"},{"revision":"4929a04ac47e30e2fb98b1c6792a00c3","url":"tw_stocks/3694.json"},{"revision":"946fb81d5ca665ffc23e4c6fe519260f","url":"tw_stocks/3686.json"},{"revision":"096398f810374fce91d77abfc4163325","url":"tw_stocks/3679.json"},{"revision":"33edd70c53dead104d21e9ab627ea641","url":"tw_stocks/3673.json"},{"revision":"0fa91fd6223a24e3d56ea5c207b5fb8b","url":"tw_stocks/3669.json"},{"revision":"a46e46e721b3f4d45d4b46bec54d6788","url":"tw_stocks/3665.json"},{"revision":"b5219c6972a8aec8c389054caec23a60","url":"tw_stocks/3661.json"},{"revision":"239459eb9c259d29197209cb2b32a763","url":"tw_stocks/3653.json"},{"revision":"a3cae161412e01491a0bf581e210bc34","url":"tw_stocks/3652.json"},{"revision":"f37a2f0d79da60b46b3655a34152ed89","url":"tw_stocks/3645.json"},{"revision":"75db0500f7ffe14f5203a4164f3d18a8","url":"tw_stocks/3622.json"},{"revision":"ceda4e53d8a8d4b86fc50443e40e4931","url":"tw_stocks/3617.json"},{"revision":"7af0b1b5e61711b98151b6ff63c881f7","url":"tw_stocks/3607.json"},{"revision":"1b22788297e567c54dd6e23817a0caa7","url":"tw_stocks/3605.json"},{"revision":"1332156c99203c3de46e9c0ef3028808","url":"tw_stocks/3596.json"},{"revision":"d485748b307d54c8b881034da33018f9","url":"tw_stocks/3593.json"},{"revision":"7074a3e4748599d53fdd33bd216334ee","url":"tw_stocks/3592.json"},{"revision":"f97c2470b0e346620b1c37b5dc39bf5e","url":"tw_stocks/3591.json"},{"revision":"ab77591402edee01a721af397c45f495","url":"tw_stocks/3588.json"},{"revision":"1c57a07ed841bb7ca30e01c76fed75df","url":"tw_stocks/3583.json"},{"revision":"552763c9515a1f6ac9cb8134d2fb0ea6","url":"tw_stocks/3576.json"},{"revision":"36371a832b8d89798327cec3b030a4eb","url":"tw_stocks/3563.json"},{"revision":"1b1ee6deff378741028e2db002beb47c","url":"tw_stocks/3557.json"},{"revision":"7e586eac754aa3abc9a6c27311af2106","url":"tw_stocks/3550.json"},{"revision":"e6b20fbb2af361cc2cff587b799e9a66","url":"tw_stocks/3545.json"},{"revision":"afd8b8e4de8a912c2106c80763bef28a","url":"tw_stocks/3543.json"},{"revision":"8302fa232d026249ac0540a4370fb42f","url":"tw_stocks/3535.json"},{"revision":"9cb3b38e7d505abadca524f6fb3b970f","url":"tw_stocks/3533.json"},{"revision":"8882aedaeb6f59d7a22fbc9959738da4","url":"tw_stocks/3532.json"},{"revision":"0f92feaaa0f1f55ce84cd66e17948cca","url":"tw_stocks/3530.json"},{"revision":"9830e630a31a145f5455b167c5f22de5","url":"tw_stocks/3528.json"},{"revision":"874a1d6f1d13e89520b8079b2426a949","url":"tw_stocks/3518.json"},{"revision":"06b1703aeb59ca30d42f3ebacc98504c","url":"tw_stocks/3515.json"},{"revision":"4679fcc444628d64bf8312b19823259d","url":"tw_stocks/3504.json"},{"revision":"2f0c8561fdd2a526c40a2db7506fcbb8","url":"tw_stocks/3501.json"},{"revision":"8bd62148cca1edbe80181b7f0f3f7c95","url":"tw_stocks/3494.json"},{"revision":"440ee7d5a0f6500a154bc6a1cbd0223f","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"f7baabe38d8ed8721a19a437db93fecb","url":"tw_stocks/3450.json"},{"revision":"623c5789c978a8720cbb2fe12602ad12","url":"tw_stocks/3447.json"},{"revision":"fc020c7001eb5c4b9c47f66e4e95d8bf","url":"tw_stocks/3443.json"},{"revision":"97e4bd4162cbc35111acce09ea60943e","url":"tw_stocks/3437.json"},{"revision":"eac582d72a253db81e333e2984e22f86","url":"tw_stocks/3432.json"},{"revision":"bd4cb8b3140d8b1a9e84fdf62997ea36","url":"tw_stocks/3419.json"},{"revision":"fe12e5d6803e5dacc4d04536a0e7a557","url":"tw_stocks/3416.json"},{"revision":"4fe899b93bc6d5ca4252aa8c21c27404","url":"tw_stocks/3413.json"},{"revision":"e970caef069d3a5dd6a530dacdf0de18","url":"tw_stocks/3406.json"},{"revision":"6e5b80f2d4b9a28ae78033665ec79832","url":"tw_stocks/3380.json"},{"revision":"49074ddaa4b22063ad27f3d3b6aece1e","url":"tw_stocks/3376.json"},{"revision":"aa3b11f24db8c6914ff1f9a01b29aef9","url":"tw_stocks/3356.json"},{"revision":"ea44916e72560e763a707b444f1239a9","url":"tw_stocks/3346.json"},{"revision":"107b71604d97b391c136b75df3e0a4e0","url":"tw_stocks/3338.json"},{"revision":"54dcf41522e7a8290d114d8e21fc6a7d","url":"tw_stocks/3321.json"},{"revision":"b2e6afea0824e24a3a891567bdb9648b","url":"tw_stocks/3312.json"},{"revision":"288a204763ab138238fb89a384773853","url":"tw_stocks/3311.json"},{"revision":"69745ba65a1cf457b4a36bd3f64087df","url":"tw_stocks/3308.json"},{"revision":"b5b1e263040fe0c1a510e9ce532a42cd","url":"tw_stocks/3305.json"},{"revision":"2ad684e8c28c7c25d1ff9f3aa68ca79d","url":"tw_stocks/3296.json"},{"revision":"349f220b5d950f1f5318dc6a83fa2d8e","url":"tw_stocks/3266.json"},{"revision":"cbe8a1e65750bd94690a24e2ebdb126e","url":"tw_stocks/3257.json"},{"revision":"ed3c65ae4f484b00f3852fa21273d4eb","url":"tw_stocks/3231.json"},{"revision":"182e0a7f2ed349da18da80fd89e59d1a","url":"tw_stocks/3229.json"},{"revision":"930c050ae943f928735fbab531130c97","url":"tw_stocks/3209.json"},{"revision":"f00167c43fe6735020dd9637de4c182e","url":"tw_stocks/3189.json"},{"revision":"25e5ded146ea1b316cb538d38d7699b1","url":"tw_stocks/3168.json"},{"revision":"a3bd0df3ab0d6de0e5b74e5ff0bd64cd","url":"tw_stocks/3167.json"},{"revision":"381e218eaf33a265a89bd918ba36f8a1","url":"tw_stocks/3164.json"},{"revision":"1a73ec55740b5b55d40730ba3decc2df","url":"tw_stocks/3149.json"},{"revision":"0389945be2f296e93134686e31f32bfc","url":"tw_stocks/3138.json"},{"revision":"d5e18ce640fa5def387a66101e23d372","url":"tw_stocks/3135.json"},{"revision":"758a78efbaff1c8e31aefc0f2cc695a3","url":"tw_stocks/3130.json"},{"revision":"9c65d08f366fd20e14c025e114a804ca","url":"tw_stocks/3094.json"},{"revision":"3fccb204cad35e60e7e94df13c242ad1","url":"tw_stocks/3092.json"},{"revision":"a60a3a1fb981cb2ca9557827f508a9e8","url":"tw_stocks/3090.json"},{"revision":"f9a2a8ebb7e0727a2c64e41c2834ffab","url":"tw_stocks/3062.json"},{"revision":"91cc20453a819b2b2ff92dc01c479373","url":"tw_stocks/3060.json"},{"revision":"788b541e1a9c3ce8192953c4276e13ee","url":"tw_stocks/3059.json"},{"revision":"58775ffe6d49ff025fea8dbdfcdff2fe","url":"tw_stocks/3058.json"},{"revision":"ee67b11d0855ccab0d1ae7e5cb25193a","url":"tw_stocks/3057.json"},{"revision":"430423a6038c28091e9b1def7d2c5af2","url":"tw_stocks/3056.json"},{"revision":"58e3e65e8a5b2ff09a3e3d6be84120e2","url":"tw_stocks/3055.json"},{"revision":"f3010b7bf3740b2654ff82312f7fef40","url":"tw_stocks/3054.json"},{"revision":"406d8f3d345102d126331a85a76e241d","url":"tw_stocks/3052.json"},{"revision":"437b3f0e9accfe59eb7db0510148d805","url":"tw_stocks/3051.json"},{"revision":"80dbd69419275878fd94ee99aaa3cc42","url":"tw_stocks/3050.json"},{"revision":"3a3c8388c2f40d65c6a0524fc3aa12d8","url":"tw_stocks/3049.json"},{"revision":"8c086f0d43e4777496c3d0b64690edbf","url":"tw_stocks/3048.json"},{"revision":"0cb099116a8fb0308549b70236f836c1","url":"tw_stocks/3047.json"},{"revision":"826f5c2e753c484893a2f30485fe5cec","url":"tw_stocks/3046.json"},{"revision":"e82527ffba34f0cdf57677884bd9552a","url":"tw_stocks/3045.json"},{"revision":"af4f9c0e474129c5c6aa29836fe6324d","url":"tw_stocks/3044.json"},{"revision":"8e116fa341aaf815fa10583888b4d054","url":"tw_stocks/3043.json"},{"revision":"76fce56a920e6fb82213137b75372562","url":"tw_stocks/3042.json"},{"revision":"c1a3ebe5731a46bbe9d188dded0f3193","url":"tw_stocks/3041.json"},{"revision":"518d6612569da4acfb458aa7df053826","url":"tw_stocks/3040.json"},{"revision":"6b8ec74f5ef6c9b07820fb47ffac4877","url":"tw_stocks/3038.json"},{"revision":"ac7f4e69938a6beaf40c42a5f4849dbc","url":"tw_stocks/3037.json"},{"revision":"212ce5135fd8e16f8e17f23b1dcf4134","url":"tw_stocks/3036.json"},{"revision":"b51e959a49a3f598f9ad3823fcd78e24","url":"tw_stocks/3035.json"},{"revision":"be0440d86ffb260284a465cd405d309a","url":"tw_stocks/3034.json"},{"revision":"a666d492be2df4903261efae91185f7d","url":"tw_stocks/3033.json"},{"revision":"8a158c8f8f5f59d9beb74cdaae3c37a0","url":"tw_stocks/3032.json"},{"revision":"4f609d604c2ef860d7ba191cddb111c3","url":"tw_stocks/3031.json"},{"revision":"0db08cd96be558a16f9cd48f3293255d","url":"tw_stocks/3030.json"},{"revision":"a65f2dd41cd8b27b2dd598e273af230c","url":"tw_stocks/3029.json"},{"revision":"a3bef429401e8f4018069853281c6d90","url":"tw_stocks/3028.json"},{"revision":"8f732388b81ec9c1653fd1d1612bb539","url":"tw_stocks/3027.json"},{"revision":"a04079af382b24c10b72934d7dbe791a","url":"tw_stocks/3026.json"},{"revision":"8274a847264c1b22b75e8c7f21f98f8b","url":"tw_stocks/3025.json"},{"revision":"4d44c6aabe0b842aa537501354bc50b6","url":"tw_stocks/3024.json"},{"revision":"e0719038653b976e60eba674ce3b0cd3","url":"tw_stocks/3023.json"},{"revision":"8baf3de4f7ae41ce1df739d92fd6e239","url":"tw_stocks/3022.json"},{"revision":"f9610015818a856da0f2484cb2081635","url":"tw_stocks/3021.json"},{"revision":"d8fe58009efdd00b6ce677d63766acba","url":"tw_stocks/3019.json"},{"revision":"050dc7f8344cc9c9a91cd7eb2028e584","url":"tw_stocks/3018.json"},{"revision":"bea55219fb4c03838e9f0134906e11bf","url":"tw_stocks/3017.json"},{"revision":"5b072c0690a59a13b750048b7aab85e9","url":"tw_stocks/3016.json"},{"revision":"ce8d13306dd37980660302f7bf8888f0","url":"tw_stocks/3015.json"},{"revision":"7a2290d7890047cf491b257732fa5be8","url":"tw_stocks/3014.json"},{"revision":"ece40920af65b7ed931aaa80c99562f1","url":"tw_stocks/3013.json"},{"revision":"84f94dbd389ad040313f2a61d9ef11b3","url":"tw_stocks/3011.json"},{"revision":"adb2f1ecfc2b81dfa0aeec9da01acdb1","url":"tw_stocks/3010.json"},{"revision":"9df3355b1a94397effb867cdb46c7cff","url":"tw_stocks/3008.json"},{"revision":"bfced9acfbd1368d8d282a545b2a7569","url":"tw_stocks/3006.json"},{"revision":"060c93e0b28042b44aa7ce87ae63133e","url":"tw_stocks/3005.json"},{"revision":"553784fc01b9e1fd43f3787a05567cf3","url":"tw_stocks/3004.json"},{"revision":"24fb091455d7dec9e6ef5787a6f1e231","url":"tw_stocks/3003.json"},{"revision":"ee6209dadb63b0cfa8271462bbfc5d36","url":"tw_stocks/3002.json"},{"revision":"a509ff3226a5cc204fd34e75d72b8fed","url":"tw_stocks/2945.json"},{"revision":"a459e75eec8b0ad198614c32b18db34d","url":"tw_stocks/2939.json"},{"revision":"e60a0c5f20b0dbf25f38c3995a5801d2","url":"tw_stocks/2929.json"},{"revision":"d83f8f76c77c6b79e3828de1d7fe46cf","url":"tw_stocks/2923.json"},{"revision":"bde4dc8039ab318588adccf19966002a","url":"tw_stocks/2915.json"},{"revision":"e8fc15a94ebec684575c8e00341022f9","url":"tw_stocks/2913.json"},{"revision":"7f936b4e8c74fd44852d0b29dad1faed","url":"tw_stocks/2912.json"},{"revision":"f0c2219ac48dc21d5ce5163b4771b5f5","url":"tw_stocks/2911.json"},{"revision":"68f3206713bcb0027a8e65cdda5b2ff2","url":"tw_stocks/2910.json"},{"revision":"a55738e8464e235ee81ea1df79c0f703","url":"tw_stocks/2908.json"},{"revision":"51b3f11b3e9ed2317ba670efaf4ecd15","url":"tw_stocks/2906.json"},{"revision":"da651778103caa6ad7a8298313f400d2","url":"tw_stocks/2905.json"},{"revision":"599d90f35128f6ec44588d400031e3a9","url":"tw_stocks/2904.json"},{"revision":"47b3698cc992e92c5e6f184118f30c6a","url":"tw_stocks/2903.json"},{"revision":"b571195e09ee45f46a9a776c920b6a6b","url":"tw_stocks/2901.json"},{"revision":"bb2cb798ec5dcd48f4948413179dd881","url":"tw_stocks/2897.json"},{"revision":"10be2a93854c41dc23a209c8a6326ed9","url":"tw_stocks/2892.json"},{"revision":"95b39a21a4b38f199bedc0c420e12c68","url":"tw_stocks/2891.json"},{"revision":"69236e45f9927df64fd52a3f298587df","url":"tw_stocks/2890.json"},{"revision":"b4f414544aa68810974fbd294ecbfed3","url":"tw_stocks/2889.json"},{"revision":"235e4ca1033c5f194ff4e26e0091cc67","url":"tw_stocks/2887.json"},{"revision":"ea87073716e3e9ca9cac80a291ba41ba","url":"tw_stocks/2886.json"},{"revision":"27ebfa638a90d94366d368da064db221","url":"tw_stocks/2885.json"},{"revision":"5d62ec3be910946d6e41d4a75dc3a12e","url":"tw_stocks/2884.json"},{"revision":"445ee5b0802124be6cf14dd70caaca47","url":"tw_stocks/2883.json"},{"revision":"669bce3dc94beb20f9cf19f9ce559af4","url":"tw_stocks/2882.json"},{"revision":"04c897c7c6397ae6bc8642c21a3c6609","url":"tw_stocks/2881.json"},{"revision":"13800dd6b83229e30d28a7440b096bac","url":"tw_stocks/2880.json"},{"revision":"51b71f32f443c622d1d8467e0f94a681","url":"tw_stocks/2867.json"},{"revision":"f096b2218d8420c3027483dede420367","url":"tw_stocks/2855.json"},{"revision":"30fe62eec5d9dad48ca3021f2c3f61d0","url":"tw_stocks/2852.json"},{"revision":"bd7fce664a71429258712bf921b784f6","url":"tw_stocks/2851.json"},{"revision":"73407e69a089e26b48745c944210341a","url":"tw_stocks/2850.json"},{"revision":"4195b416affbb240d1d9ee4eeb7cd22e","url":"tw_stocks/2849.json"},{"revision":"b710e3405801a8bbcd0d094205438720","url":"tw_stocks/2845.json"},{"revision":"14a32c98b2ccedae5534fb5ef60b0592","url":"tw_stocks/2838.json"},{"revision":"bad3c8cdeb07f4cfc46b44a1d560de3a","url":"tw_stocks/2836.json"},{"revision":"91c7f1d2abfaa7444a2d852d8761a955","url":"tw_stocks/2834.json"},{"revision":"95a2ab92f809946658d55562c601ac6b","url":"tw_stocks/2832.json"},{"revision":"1ddcfb3249836aa67b052d2be50662cc","url":"tw_stocks/2820.json"},{"revision":"68481dd58724edd09996b112ffe126e5","url":"tw_stocks/2816.json"},{"revision":"687646eb01e90b87965ffcf546c73651","url":"tw_stocks/2812.json"},{"revision":"f1af137b738b14ec27b7c7c665818f07","url":"tw_stocks/2801.json"},{"revision":"c8445e3eaa6408083b13b8825b7b0ff5","url":"tw_stocks/2762.json"},{"revision":"8c89f1650ffeb847039574ee86d36bd1","url":"tw_stocks/2753.json"},{"revision":"03e33910fbdbe875de10b2795a0080ca","url":"tw_stocks/2748.json"},{"revision":"4ffd7e9e6dcbd56506b56e5d0d4dfac7","url":"tw_stocks/2739.json"},{"revision":"33693ddadfb7ebb434fd1ec61f16ee84","url":"tw_stocks/2731.json"},{"revision":"742821271588e44130d26a68f3dd54db","url":"tw_stocks/2727.json"},{"revision":"5321dd5e45ed86f8d2ddea294458869d","url":"tw_stocks/2723.json"},{"revision":"01f62908ca96713eee58847e1ca3c34f","url":"tw_stocks/2722.json"},{"revision":"c5c5d01c5d270c64d6b214615d6f573b","url":"tw_stocks/2712.json"},{"revision":"2e933809544dc69b4b945c193127f995","url":"tw_stocks/2707.json"},{"revision":"9dfc4864777391eea30435822625002a","url":"tw_stocks/2706.json"},{"revision":"05592ae4cf04daa339258f5333f78966","url":"tw_stocks/2705.json"},{"revision":"6a6016d71c53c1b7ecae27a974347e88","url":"tw_stocks/2704.json"},{"revision":"b461ae0fb69fd2f6508fe874abfc04f7","url":"tw_stocks/2702.json"},{"revision":"1fbfa9440fea7af07beeaa56d859526d","url":"tw_stocks/2701.json"},{"revision":"dbe9189aa340b13df86381192dcd4254","url":"tw_stocks/2646.json"},{"revision":"e4655821c972cd14f6d6452fb8794325","url":"tw_stocks/2645.json"},{"revision":"8d1a1228ca14d43821423621496952d1","url":"tw_stocks/2642.json"},{"revision":"0bc6f0e1b54390a44f2de5c751b428fb","url":"tw_stocks/2637.json"},{"revision":"43f8255a979038a3006cdac5840048f7","url":"tw_stocks/2636.json"},{"revision":"683a04b9c48e9319be0edc1de488df3f","url":"tw_stocks/2634.json"},{"revision":"7a182f3378e992d10d4d4812d8b2e9ec","url":"tw_stocks/2633.json"},{"revision":"6fd553537af77269b9b99c6c90e8aafa","url":"tw_stocks/2630.json"},{"revision":"673f108241b4888d91aadd278ec82180","url":"tw_stocks/2618.json"},{"revision":"f8eb96bba85bfb3f2263757d4c0b8d32","url":"tw_stocks/2617.json"},{"revision":"d36d83b9e8502b2ebc12ac8732efcd64","url":"tw_stocks/2616.json"},{"revision":"22ecdec9698a3a257f2fe2f6decc0cf7","url":"tw_stocks/2615.json"},{"revision":"e398e9253af4f9f0c51da32c936589cf","url":"tw_stocks/2614.json"},{"revision":"3d9d906f7993d25e98489c4107215b9c","url":"tw_stocks/2613.json"},{"revision":"d49badcbbcdb9db0b9cac0e6dda98d0f","url":"tw_stocks/2612.json"},{"revision":"a1f09a2689ad3ddd18fcac84bc8cb95b","url":"tw_stocks/2611.json"},{"revision":"2d17a0a0e37a389272e6a577f16f0e36","url":"tw_stocks/2610.json"},{"revision":"a8a709dddddccd2a130a44b029986147","url":"tw_stocks/2609.json"},{"revision":"7f618c52ff21b0bab90c548e1b7f1b3d","url":"tw_stocks/2608.json"},{"revision":"8be724527b2b70bcb03a8e361882739d","url":"tw_stocks/2607.json"},{"revision":"2a77f82ceebee5d6a8e4c23d05cc1af7","url":"tw_stocks/2606.json"},{"revision":"2a4724a6831a0df738eda0f81f8f03c4","url":"tw_stocks/2605.json"},{"revision":"e4e644dbbaead740d918acc04792b4fe","url":"tw_stocks/2603.json"},{"revision":"1b59d5e1f8c477b463c496bfd564637f","url":"tw_stocks/2601.json"},{"revision":"c855b727893d34511f4a394481e139c5","url":"tw_stocks/2597.json"},{"revision":"359e57ebc5a6ceec2f257a91722c6a5f","url":"tw_stocks/2548.json"},{"revision":"8af559d913ca400862417ec23fda3b3c","url":"tw_stocks/2547.json"},{"revision":"944de3091f7f8b41d52626f07f5e54d4","url":"tw_stocks/2546.json"},{"revision":"bf60822cc13a2f18b8095a75f25bfaee","url":"tw_stocks/2545.json"},{"revision":"a47e5481d6b2db4c4824cf647ed2d6a1","url":"tw_stocks/2543.json"},{"revision":"e41428b5d288cbfbe0b25c216283941e","url":"tw_stocks/2542.json"},{"revision":"eb213037a8957c5dfd56c478386eab2a","url":"tw_stocks/2540.json"},{"revision":"720248ff7f25594295307a1de94e34ae","url":"tw_stocks/2539.json"},{"revision":"fcfa108af2d528c5e567e5f1eeacd37f","url":"tw_stocks/2538.json"},{"revision":"e1982131ddb6b1d171c99b53a5f1da81","url":"tw_stocks/2537.json"},{"revision":"69e1e6adae7385aa918ff2653aad4e4d","url":"tw_stocks/2536.json"},{"revision":"44d146d1ce2948c7841dd56b760ba481","url":"tw_stocks/2535.json"},{"revision":"fb58da67823b9e123e2fc35e7585336c","url":"tw_stocks/2534.json"},{"revision":"195b262fd7cdcee5f83c7aae6670486c","url":"tw_stocks/2530.json"},{"revision":"ca67c9cd120a1435d8e91361eafcfa41","url":"tw_stocks/2528.json"},{"revision":"a897ca2d2854fb8d92fc79dac5f10d7a","url":"tw_stocks/2527.json"},{"revision":"ea054b29a2037a068989cec435cad886","url":"tw_stocks/2524.json"},{"revision":"6a985146da5b299016326658336c5fac","url":"tw_stocks/2520.json"},{"revision":"651dc17eb32548c101eb71b312d06af5","url":"tw_stocks/2516.json"},{"revision":"06ea42baeb9ad173223522e695d360ec","url":"tw_stocks/2515.json"},{"revision":"f5b6bcf9af7d2ee7721ecb1bf75a559d","url":"tw_stocks/2514.json"},{"revision":"8d051de396564cf8a8489f7a651b8988","url":"tw_stocks/2511.json"},{"revision":"47768b02e7e3f6948b614c8112a87cba","url":"tw_stocks/2509.json"},{"revision":"6fcad3a60980a28cae360979dfa4289e","url":"tw_stocks/2506.json"},{"revision":"aee6f97cf4fc970563cd65d6a59e0641","url":"tw_stocks/2505.json"},{"revision":"65833055a8d0271c461aeecdc5049b49","url":"tw_stocks/2504.json"},{"revision":"961ef861731db7f9e17433306bb3913e","url":"tw_stocks/2501.json"},{"revision":"781498935d109b4814fa8f0a5c14828c","url":"tw_stocks/2498.json"},{"revision":"24930627eec237e1e130ef2d5b4cdcbe","url":"tw_stocks/2497.json"},{"revision":"d1d60687a999f597edea361568a72718","url":"tw_stocks/2496.json"},{"revision":"7618050150fdfc0c915b17170c878225","url":"tw_stocks/2495.json"},{"revision":"e9b263fb32e578ca608acc672f5cee0d","url":"tw_stocks/2493.json"},{"revision":"fd3b944f9d86d05d0463f7264410536a","url":"tw_stocks/2492.json"},{"revision":"9ab81c56db4bdafc7b6145ce1a1e888d","url":"tw_stocks/2491.json"},{"revision":"0e468fcc3bf4faf806be0fbb85f17745","url":"tw_stocks/2489.json"},{"revision":"0cc9d245dbde8987b46a9734c12c6de3","url":"tw_stocks/2488.json"},{"revision":"159835910485de651a896748a1ad46ea","url":"tw_stocks/2486.json"},{"revision":"aa4bd8dd152d4c9946adf6b35a94d40e","url":"tw_stocks/2485.json"},{"revision":"61cced1dd67069402946595eeb8fe422","url":"tw_stocks/2484.json"},{"revision":"3422a08d461ffc5d5d80ab853dc28098","url":"tw_stocks/2483.json"},{"revision":"608e0828b706da83fc1678f4ce6e9e69","url":"tw_stocks/2482.json"},{"revision":"ec11605055ca4a3e5606e9e37570cf32","url":"tw_stocks/2481.json"},{"revision":"84045e18a1d19befa698271e4f7172b6","url":"tw_stocks/2480.json"},{"revision":"f430cded4bee56ce0c4e198ef5461f45","url":"tw_stocks/2478.json"},{"revision":"fdaa40f6cc9f9f251bdf132e25811c37","url":"tw_stocks/2477.json"},{"revision":"cdc297063de2a46ae4c5db6d805d2815","url":"tw_stocks/2476.json"},{"revision":"75c9539699c6fec44fffa6af4174933c","url":"tw_stocks/2474.json"},{"revision":"c8d95bde2601cc4bb05c62bde432714a","url":"tw_stocks/2472.json"},{"revision":"b757581633251a61c390505894250045","url":"tw_stocks/2471.json"},{"revision":"550031d350da3cdd7c90f956cbfc529c","url":"tw_stocks/2468.json"},{"revision":"857ed858821825b289940eaa7ec473d9","url":"tw_stocks/2467.json"},{"revision":"e5c594f14813681bc0ab6969468351d5","url":"tw_stocks/2466.json"},{"revision":"a3b5729cf33c7dd02fe21f2b10d7042e","url":"tw_stocks/2465.json"},{"revision":"ee0135080fc6496a5d507ba98378a945","url":"tw_stocks/2464.json"},{"revision":"5c3f96f6b32928a30488acee344339b5","url":"tw_stocks/2462.json"},{"revision":"645f7a672d2442a618692fad1dbb0990","url":"tw_stocks/2461.json"},{"revision":"07b2f1037cd01e863253cc4a161cd3ca","url":"tw_stocks/2460.json"},{"revision":"3d3f146675fad8a7d4f9581a61484382","url":"tw_stocks/2459.json"},{"revision":"fd28e8a9cc10e273047124931ff65930","url":"tw_stocks/2458.json"},{"revision":"b46c51c376e0348cdc6859e9c639479a","url":"tw_stocks/2457.json"},{"revision":"a0d04a57479b67ada075b7a5444966fd","url":"tw_stocks/2455.json"},{"revision":"48ace369f269532f6d531ad1d8fded27","url":"tw_stocks/2454.json"},{"revision":"fcdcfa245bb64916a8c3ed38e5f506a7","url":"tw_stocks/2453.json"},{"revision":"60171660485ef74bcbc8d8fe2b77edda","url":"tw_stocks/2451.json"},{"revision":"b2439a1e066f2cefa90570e90f724128","url":"tw_stocks/2450.json"},{"revision":"ded5455823e4eff486af821d192583cd","url":"tw_stocks/2449.json"},{"revision":"0c9f6beef9bd4ac7ac6bd236d619414c","url":"tw_stocks/2444.json"},{"revision":"7adc2c095d7f42c7ece3a3d11a56cfe3","url":"tw_stocks/2442.json"},{"revision":"d589aebabc17e54f92c0a7cccc09b162","url":"tw_stocks/2441.json"},{"revision":"37733673bad053560418b1eff26e277a","url":"tw_stocks/2440.json"},{"revision":"12c5be222127dbc8abaffe61ba5ca9a4","url":"tw_stocks/2439.json"},{"revision":"d813746b8887e29babdc766c059bb733","url":"tw_stocks/2438.json"},{"revision":"cf8f7e9b72b0a879c0698a26599fb9af","url":"tw_stocks/2436.json"},{"revision":"65efb134951e8d41a3d827acb24c2543","url":"tw_stocks/2434.json"},{"revision":"56a0e9dcca9523f298e465be53d66f5b","url":"tw_stocks/2433.json"},{"revision":"04f96b87822963e7d98b6e1d1c01faba","url":"tw_stocks/2431.json"},{"revision":"83b8f36547e33bf87ac3c3ed12bd111e","url":"tw_stocks/2430.json"},{"revision":"424a751bc7e93c0929e1d2d02dec5a6e","url":"tw_stocks/2429.json"},{"revision":"49eef9c3434e6374b75a632cdf9c9c8b","url":"tw_stocks/2428.json"},{"revision":"52b55436dd4cbae170c6cfb6f7f1abff","url":"tw_stocks/2427.json"},{"revision":"e2eb6643d47e037cfe4f1fced9fa1191","url":"tw_stocks/2426.json"},{"revision":"38c2a1ad185d16efeecd6f113cf244b5","url":"tw_stocks/2425.json"},{"revision":"3799b894b64bbe74e00a9f3ccb28f719","url":"tw_stocks/2424.json"},{"revision":"38b45bcaa2d44c5cacaa84a1e7a2d3d5","url":"tw_stocks/2423.json"},{"revision":"92185546b35a3796b1c8737520991735","url":"tw_stocks/2421.json"},{"revision":"7d6f33d059f8ae6ab8c154a55334a597","url":"tw_stocks/2420.json"},{"revision":"f6ab450c06d92b2bd82da50d5ba232c7","url":"tw_stocks/2419.json"},{"revision":"ce315abd7e34cd5e1dddac4abed1c341","url":"tw_stocks/2417.json"},{"revision":"9e6e5856a5a2a390f590ca91c1741b29","url":"tw_stocks/2415.json"},{"revision":"07ef8b94d419c27299dd82a96c19fff7","url":"tw_stocks/2414.json"},{"revision":"72f726d109e2215980cc8ab38f04c76c","url":"tw_stocks/2413.json"},{"revision":"95a3a884723c453b6c827e02aebdc339","url":"tw_stocks/2412.json"},{"revision":"193883d7eb0b9a96edc662a73bae19bf","url":"tw_stocks/2409.json"},{"revision":"27813639e02e39af60c6a3ad61529514","url":"tw_stocks/2408.json"},{"revision":"cea5afd6667d5bf08f93bdd51b6701d9","url":"tw_stocks/2406.json"},{"revision":"66517b1852e7cd76580f865b442c31cc","url":"tw_stocks/2405.json"},{"revision":"7bcf5b04361eeab7fb38520a500ca68c","url":"tw_stocks/2404.json"},{"revision":"275f6a1a9f81d0f264bdcb9a413f7e67","url":"tw_stocks/2402.json"},{"revision":"0ed4ea00e07500d7b7f21632c131223c","url":"tw_stocks/2401.json"},{"revision":"7873f37192e19750f50594b30f5c7929","url":"tw_stocks/2399.json"},{"revision":"48b85e7b2ee7237cd2431f1bd3541e24","url":"tw_stocks/2397.json"},{"revision":"40600686c6056dbc3413e4dd91197ea3","url":"tw_stocks/2395.json"},{"revision":"be8061292f35bd739b737ddf02d35b26","url":"tw_stocks/2393.json"},{"revision":"633a3d12014ccee8ff709b85bae0020c","url":"tw_stocks/2392.json"},{"revision":"3bae6a4b0bfa887df95098f8c2790aac","url":"tw_stocks/2390.json"},{"revision":"4d7fb3abb3c77d37857bf7182b9e4d5f","url":"tw_stocks/2388.json"},{"revision":"e5e24f79ddfa5b2a768dbb41ea99526b","url":"tw_stocks/2387.json"},{"revision":"5028d5d6a85855c0d4364e4684868d8c","url":"tw_stocks/2385.json"},{"revision":"9f6a0ed37ef3443796101e672a24b0a5","url":"tw_stocks/2383.json"},{"revision":"cd85930178da4e886c588cbe1d326b05","url":"tw_stocks/2382.json"},{"revision":"6c22d74fe3e057042b941daed99f59b4","url":"tw_stocks/2380.json"},{"revision":"947df9ea9b50d6ce733a9e1c764b08a5","url":"tw_stocks/2379.json"},{"revision":"39da1d58339f4eca25a83113b78a70ec","url":"tw_stocks/2377.json"},{"revision":"291badab70fc32abf22f3854029d861c","url":"tw_stocks/2376.json"},{"revision":"8bf5295a09b2e929c6f471f8690a1c48","url":"tw_stocks/2375.json"},{"revision":"9e160c67b591dd0b878d05934e12c7af","url":"tw_stocks/2374.json"},{"revision":"4fbc9e41c3cd8133210465c7175e0995","url":"tw_stocks/2373.json"},{"revision":"0cc21124f37d1b6568d93c61396c2510","url":"tw_stocks/2371.json"},{"revision":"ef50f6dd6afac3ddf3ec359c585da6e9","url":"tw_stocks/2369.json"},{"revision":"29b837f666b7e9e1c642b0716f1c6c67","url":"tw_stocks/2368.json"},{"revision":"901aa0a3ab7eb9decc70facb11e4bb4d","url":"tw_stocks/2367.json"},{"revision":"f41b6e3c35456f65e8294c66251bd6d6","url":"tw_stocks/2365.json"},{"revision":"3bf62524b6fc914942e7dfe5762b1f67","url":"tw_stocks/2364.json"},{"revision":"cb767f6a3d375d4b905217819c12a022","url":"tw_stocks/2363.json"},{"revision":"fb0112c10c4d6ed8cd1fa689d4553511","url":"tw_stocks/2362.json"},{"revision":"232b6845f545af0c0c1f05f3e0f8ab9e","url":"tw_stocks/2360.json"},{"revision":"3dd051d8aefe7c885566eca3d702b1f2","url":"tw_stocks/2359.json"},{"revision":"de83e8534cfcb1bba058b3d355dda638","url":"tw_stocks/2357.json"},{"revision":"5d89283c2a206bacb0f17aa5d66d61fc","url":"tw_stocks/2356.json"},{"revision":"e577beb7025e8e4a866f638e82872cac","url":"tw_stocks/2355.json"},{"revision":"be77db6cb071b521225a1e67e3b4380a","url":"tw_stocks/2354.json"},{"revision":"07545b78a42ddedb06a99b3be0f965a6","url":"tw_stocks/2353.json"},{"revision":"752020d9a1e0b6352003f8c686b5aded","url":"tw_stocks/2352.json"},{"revision":"a5bb5aff5213cb4d64686fc173e6f158","url":"tw_stocks/2351.json"},{"revision":"d9043b77471496ce3be3bfff8acae2db","url":"tw_stocks/2349.json"},{"revision":"f3fedde61167a31588a07e8b0905165e","url":"tw_stocks/2348.json"},{"revision":"e793e87dbd73f85234c89f4b38878afc","url":"tw_stocks/2347.json"},{"revision":"8ee00f8de704822f396541d69c63026a","url":"tw_stocks/2345.json"},{"revision":"c4d2a20eb4aa7a65a0a58f917e7a7fec","url":"tw_stocks/2344.json"},{"revision":"dd069cbe8d9a15146ce446b2bc69870b","url":"tw_stocks/2342.json"},{"revision":"8a8d9cabf50fa4a3350e3fb8aea33177","url":"tw_stocks/2340.json"},{"revision":"cbfc699d625e9fd8b88df00cedaedcdb","url":"tw_stocks/2338.json"},{"revision":"a93bf4a3f014e33db37a829afa8d8daa","url":"tw_stocks/2337.json"},{"revision":"9a8cbca5912fc3a238284e902c03866b","url":"tw_stocks/2332.json"},{"revision":"5f3c756054b2194bb05aa3fc347cba20","url":"tw_stocks/2331.json"},{"revision":"baa32b3f7c1b29da25eb70b00d57a334","url":"tw_stocks/2330.json"},{"revision":"99a8cdd19fb3c14eaae90a3f5121daa3","url":"tw_stocks/2329.json"},{"revision":"1a17145d52c8fddad3ba07540bc69cde","url":"tw_stocks/2328.json"},{"revision":"aa1acd3c5ba7bf4993c7aa2202f10d77","url":"tw_stocks/2327.json"},{"revision":"cc20087188b93166ca7ac9535394fae8","url":"tw_stocks/2324.json"},{"revision":"ff4edc3fcadaf3e1dc984a5ec0cf1886","url":"tw_stocks/2323.json"},{"revision":"91dd31901b6d79cc68b17b4ea8df50e5","url":"tw_stocks/2321.json"},{"revision":"157b0156c1ac906fe16e55cd6f040774","url":"tw_stocks/2317.json"},{"revision":"0655d388ea6a0f6624da49ff353ce875","url":"tw_stocks/2316.json"},{"revision":"3b0981370e0a50c7f0f381bb6c0db543","url":"tw_stocks/2314.json"},{"revision":"8a1be0d4a346be5c303ba8ec5cfdc1ce","url":"tw_stocks/2313.json"},{"revision":"8ffc5489b3526d38e3d373ae54674e5f","url":"tw_stocks/2312.json"},{"revision":"c11620e1efa1a6723258ad92ebda9064","url":"tw_stocks/2308.json"},{"revision":"738d05a6396f526f7c1c3e2fbb86bd59","url":"tw_stocks/2305.json"},{"revision":"ed61b3a92e7497c872d0a01162c69b4e","url":"tw_stocks/2303.json"},{"revision":"430c73730db6d455178d7665b38525ac","url":"tw_stocks/2302.json"},{"revision":"d38492e14928221151e52a0a7e846bc9","url":"tw_stocks/2301.json"},{"revision":"4e7c1e2bd06dc0b6fdeb4e80b382248a","url":"tw_stocks/2250.json"},{"revision":"1f2775f3769d79485c6f2241531887fe","url":"tw_stocks/2248.json"},{"revision":"ffa5a42bf625062ff9caf3ab1a0d64e9","url":"tw_stocks/2247.json"},{"revision":"efdd302d7be581a331e96fb967272a53","url":"tw_stocks/2243.json"},{"revision":"a016a01f595f88a9b0374940cd678e8d","url":"tw_stocks/2241.json"},{"revision":"749fefa658db6c191f89f53d528bf0e2","url":"tw_stocks/2239.json"},{"revision":"7f2b78d45421e54f28ae120e62a189fa","url":"tw_stocks/2236.json"},{"revision":"c827c1bb1f51f2205a6498fd538108d4","url":"tw_stocks/2233.json"},{"revision":"58fb88ed972174e2a94daf4319e0d4b3","url":"tw_stocks/2231.json"},{"revision":"0d337e5c3868403c87b8c93150acc55c","url":"tw_stocks/2228.json"},{"revision":"5c3f65b34d268dae3d30f960c28a53d2","url":"tw_stocks/2227.json"},{"revision":"453a1fa97f78765d831c39a9ee76ec89","url":"tw_stocks/2211.json"},{"revision":"d90835646f493f8dbc2370d250367f47","url":"tw_stocks/2208.json"},{"revision":"465551cb7e28e600161e5b9051734131","url":"tw_stocks/2207.json"},{"revision":"098afd843b9500506398b0eb4e4c70a1","url":"tw_stocks/2206.json"},{"revision":"90f3778a61e342ac5f58aa0543434509","url":"tw_stocks/2204.json"},{"revision":"c2d9b233a467048b248ca9acc937876f","url":"tw_stocks/2201.json"},{"revision":"5dbcdbe8d1434738b6bd2b9b581ecddc","url":"tw_stocks/2115.json"},{"revision":"8571df718883d8693bc1ebca66378b39","url":"tw_stocks/2114.json"},{"revision":"4f01f77cc86c95a106969b5786a483ec","url":"tw_stocks/2109.json"},{"revision":"445c8b1a54eb0ec2b0aea8133516190d","url":"tw_stocks/2108.json"},{"revision":"8739110193aa0ddb3425c70571fc327d","url":"tw_stocks/2107.json"},{"revision":"b1195ebc8952c7d0b7ac4b732a1b6f21","url":"tw_stocks/2106.json"},{"revision":"7ac56f290e422c3033fb357d65048c7b","url":"tw_stocks/2105.json"},{"revision":"8f78c2cfb573afa18ac88d5e0a72e96f","url":"tw_stocks/2104.json"},{"revision":"add3215b94a617f232b6c64ffd7854ea","url":"tw_stocks/2103.json"},{"revision":"b34847a3cab962f8200a05fd422b5f61","url":"tw_stocks/2102.json"},{"revision":"4cfd3fe9f381884b7566a301e8e7b1af","url":"tw_stocks/2101.json"},{"revision":"e69d0e4d02d52ffb4ad5e0b1a674b2b8","url":"tw_stocks/2072.json"},{"revision":"f3e4ef040fb4a05451858f4b309f7de2","url":"tw_stocks/2069.json"},{"revision":"22e1f97e87c765e3410c661dbc0839c2","url":"tw_stocks/2062.json"},{"revision":"04dee0f64ef05cb4fa19e92a8a1e7747","url":"tw_stocks/2059.json"},{"revision":"f6e2a1de514482c8af22db3cdd182621","url":"tw_stocks/2049.json"},{"revision":"8a02a8bb6f146e14afe3de8b9d0610c0","url":"tw_stocks/2038.json"},{"revision":"e823814a63e3fb7d46c0dfa501787c86","url":"tw_stocks/2034.json"},{"revision":"2f5e6e68ddd59bb510e60acd5da51400","url":"tw_stocks/2033.json"},{"revision":"7feb6bb18e81550aa6d8b5dbb95c8d6f","url":"tw_stocks/2032.json"},{"revision":"8649c5801d354cd8f9986007fcddb297","url":"tw_stocks/2031.json"},{"revision":"28c5d358d161c623a8a49e4090d5a0e1","url":"tw_stocks/2030.json"},{"revision":"859509ecc9b2635351a9e5b610e8b129","url":"tw_stocks/2029.json"},{"revision":"ce82decd3ee17465e2025c79eef085d5","url":"tw_stocks/2028.json"},{"revision":"f226d086404c6a5e79989b825b301cde","url":"tw_stocks/2027.json"},{"revision":"56f8ec70e93e44bd626c7532c6622eaf","url":"tw_stocks/2025.json"},{"revision":"8b7c2b616ba596293a92ef763edad697","url":"tw_stocks/2024.json"},{"revision":"6c8a5aea0a82c84f5e0d93bdf18c5e3f","url":"tw_stocks/2023.json"},{"revision":"f8d5f14be36856b4aa58c3a1b9807c65","url":"tw_stocks/2022.json"},{"revision":"4924d153e59b7aa8c4e8ac88a9eee399","url":"tw_stocks/2020.json"},{"revision":"d3e91bef59484f605c2341c4380c0ae5","url":"tw_stocks/2017.json"},{"revision":"615503acabc9dd94dc551d683728e186","url":"tw_stocks/2015.json"},{"revision":"991d6aa530a3bc7aa5566b25aa98366a","url":"tw_stocks/2014.json"},{"revision":"b5b1e28b69764f4845c8b766887201f0","url":"tw_stocks/2013.json"},{"revision":"346ce9521e974b19b2cbbf11a70f27c5","url":"tw_stocks/2012.json"},{"revision":"f0a41d44ab4126098c6996ed2d526019","url":"tw_stocks/2010.json"},{"revision":"106112a7dde921f45efb58a065c2fe92","url":"tw_stocks/2009.json"},{"revision":"e239c8f98b7487efa4933a44ef97b9bf","url":"tw_stocks/2008.json"},{"revision":"ef857a65a6a1684f1b74a29f8394669e","url":"tw_stocks/2007.json"},{"revision":"fc90ce525603e446d898596d9a3b74e7","url":"tw_stocks/2006.json"},{"revision":"934dea75b2f7a33881544aa83c0c0aa5","url":"tw_stocks/2002.json"},{"revision":"71d65b9c563442d94b9e1c38c253d7b0","url":"tw_stocks/1909.json"},{"revision":"e5137fe1b2eab9c90d0c161cef61bf49","url":"tw_stocks/1907.json"},{"revision":"a628b8f312a33caf4eaa9190635e67f8","url":"tw_stocks/1906.json"},{"revision":"aadbfbb1367fc159faac3bc01b757805","url":"tw_stocks/1905.json"},{"revision":"be976b50a1c0073f79ce7c4e728f691f","url":"tw_stocks/1904.json"},{"revision":"bb76781770585d0beda709d5a4047da8","url":"tw_stocks/1903.json"},{"revision":"6bc7cb171f50622ac2604bb2cc63de42","url":"tw_stocks/1817.json"},{"revision":"fbcd4fc2f666a38e01d52fa905f3c6ad","url":"tw_stocks/1810.json"},{"revision":"7e7cb0e68ffd1893a1778054a56cf8f0","url":"tw_stocks/1809.json"},{"revision":"9b56a501ad04c507bb3648b1c79d3a84","url":"tw_stocks/1808.json"},{"revision":"0beb37553fa6fdefea51359b663c0efa","url":"tw_stocks/1806.json"},{"revision":"f94b025f8eb7ea4be4bc70f1dafe53d3","url":"tw_stocks/1805.json"},{"revision":"1edeb5c60bbf4f0e1ed47e16a5ad103b","url":"tw_stocks/1802.json"},{"revision":"465ed74f91aad7f74c0a357686755e48","url":"tw_stocks/1795.json"},{"revision":"79e19bdb3189ee041888fdabe3bf2e60","url":"tw_stocks/1789.json"},{"revision":"04d74e4909f77dcb491a73471015a8b8","url":"tw_stocks/1786.json"},{"revision":"0d504aca9f19601507ce2fb287af9fe0","url":"tw_stocks/1783.json"},{"revision":"e5402c50eb21d961ad43058c8a86cf8f","url":"tw_stocks/1776.json"},{"revision":"0f956b272b855477307c58bbbde99af8","url":"tw_stocks/1773.json"},{"revision":"7b105d603b132536cc83464b6f180aa6","url":"tw_stocks/1762.json"},{"revision":"b46779ecccf13547962436dcb04ed37d","url":"tw_stocks/1760.json"},{"revision":"6e34851395c0d5bd18ba645393c4a200","url":"tw_stocks/1752.json"},{"revision":"092bee42fe6d22cd005f813a1c9e5a7c","url":"tw_stocks/1737.json"},{"revision":"f0d1a7e6ae00cd4d61e692ca77577048","url":"tw_stocks/1736.json"},{"revision":"bd300f143475bf1108189bb45ee334a1","url":"tw_stocks/1735.json"},{"revision":"baa5367f68b4a9a583058e358cb2c337","url":"tw_stocks/1734.json"},{"revision":"1f30caadf1aaa3e8ce5490cd472726c7","url":"tw_stocks/1733.json"},{"revision":"bdf7df3e5e26e1f34e0b99725a252178","url":"tw_stocks/1732.json"},{"revision":"a6d2ede8d354b84cb8a8d1a8094da76e","url":"tw_stocks/1731.json"},{"revision":"cf1fc0dc67989e765f20912efcada39a","url":"tw_stocks/1730.json"},{"revision":"b470269f253a31b438b52589656a8f24","url":"tw_stocks/1727.json"},{"revision":"03f80bfe6d621dd681b32a1c1a34279f","url":"tw_stocks/1726.json"},{"revision":"31a8e9e3fa2c3162be77fd45d6692d4a","url":"tw_stocks/1725.json"},{"revision":"925b1d336e520316150de2e2e51caf43","url":"tw_stocks/1723.json"},{"revision":"8a7c233f0f50036d175f7fdae591ac68","url":"tw_stocks/1722.json"},{"revision":"3b681d3b042e0d75699936f1431e7ace","url":"tw_stocks/1721.json"},{"revision":"b2f7caa9d6897c2b2801f6d5251dc1f0","url":"tw_stocks/1720.json"},{"revision":"f1465f77c7ad400bee64583a6f417505","url":"tw_stocks/1718.json"},{"revision":"9926c0fd994b9c2034df0c3a61db22ac","url":"tw_stocks/1717.json"},{"revision":"a2a1a0957e1b68b3407d4f120df16278","url":"tw_stocks/1714.json"},{"revision":"bb93c97e00a47fdfedfd6152002779bf","url":"tw_stocks/1713.json"},{"revision":"b1aaed466edb4c6df548d6c8e988942d","url":"tw_stocks/1712.json"},{"revision":"27c073c55d1c16b59e761b0965325781","url":"tw_stocks/1711.json"},{"revision":"1babe914ae9d0ad2d549c59644298921","url":"tw_stocks/1710.json"},{"revision":"d710fa2d764ad5cd3134965091f84d29","url":"tw_stocks/1709.json"},{"revision":"467dbb0a061780eacf524fc6d0174a2c","url":"tw_stocks/1708.json"},{"revision":"76d94661786abe18aab47c3940ed9e9b","url":"tw_stocks/1707.json"},{"revision":"677c596c42b44a5549262386b727a8bc","url":"tw_stocks/1702.json"},{"revision":"0141d969e53ec690cf87e072fe039cc6","url":"tw_stocks/1626.json"},{"revision":"85accbe83bec71e42d503822f1e2a563","url":"tw_stocks/1623.json"},{"revision":"6154a809e48d7a3359874b5e64cccaed","url":"tw_stocks/1618.json"},{"revision":"4abec7e2ec28120b5322a58b94a68802","url":"tw_stocks/1617.json"},{"revision":"6bb31617d8e5c9bcab73f732c58c41b3","url":"tw_stocks/1616.json"},{"revision":"d6c755eb7c3289d488b5bb46ba5f57ed","url":"tw_stocks/1615.json"},{"revision":"ae64de3e93093bfe79547ef709fb5e5d","url":"tw_stocks/1614.json"},{"revision":"b1c3c1b55a88972172f64a91cc083b41","url":"tw_stocks/1612.json"},{"revision":"d866127f5b5790174ef93aa33d73bd46","url":"tw_stocks/1611.json"},{"revision":"cd31cf72647f12d45a6f52746ce53528","url":"tw_stocks/1609.json"},{"revision":"d84d9d3db3b731442bd19c6124064707","url":"tw_stocks/1608.json"},{"revision":"e7c5236ef6869fae6c339d60ea6fe0c6","url":"tw_stocks/1605.json"},{"revision":"71e37f22270ae7c5b0f7e48eb9fd382f","url":"tw_stocks/1604.json"},{"revision":"ef80315a8af998b56f21bf3800cbf98b","url":"tw_stocks/1603.json"},{"revision":"57b3454cc1b2cabdfa130ca029cba0ab","url":"tw_stocks/1598.json"},{"revision":"1423189e4cf5da5a75f8ce8159c35fb6","url":"tw_stocks/1597.json"},{"revision":"44800d668cbcae99f252dd3dac35ab31","url":"tw_stocks/1590.json"},{"revision":"655d5fe0d3f0b837cb3ac52f58d38b59","url":"tw_stocks/1589.json"},{"revision":"49fe4d639863010b10d8a6db33697c5e","url":"tw_stocks/1587.json"},{"revision":"3450a5ed28cdcec382eceabf10dc0b94","url":"tw_stocks/1583.json"},{"revision":"7530a92be57be15cde8a344bc539159e","url":"tw_stocks/1582.json"},{"revision":"2c1d8706350fbcccc49cffd87608d644","url":"tw_stocks/1568.json"},{"revision":"38887befce4ef4c50be88537298b6dbf","url":"tw_stocks/1563.json"},{"revision":"6f704a1ebd780fed037759c8214b7334","url":"tw_stocks/1560.json"},{"revision":"fb0a021a88035f4828cdb1e5ed565c9f","url":"tw_stocks/1558.json"},{"revision":"38e0f86d64b85a3d1c87a6cd9b71397d","url":"tw_stocks/1541.json"},{"revision":"c710a0c8eaa9f6c1f30c6a2ea04297fd","url":"tw_stocks/1540.json"},{"revision":"b7f610432959e41c110a63027401bc65","url":"tw_stocks/1539.json"},{"revision":"e3e3a9e40fd753a1bb8428e9201cee74","url":"tw_stocks/1538.json"},{"revision":"ee66fc0ff466e020238e1b09184e39cd","url":"tw_stocks/1537.json"},{"revision":"a04a8bd925f03f0db0db31c2f76496a3","url":"tw_stocks/1536.json"},{"revision":"8bca1ff41f64d80b1782ff2308e97477","url":"tw_stocks/1535.json"},{"revision":"9252648c40d47a6792ff8b730f3edf3c","url":"tw_stocks/1533.json"},{"revision":"eaaaa70e68f35d313dca337ac237e0c5","url":"tw_stocks/1532.json"},{"revision":"3d9e9bed1394f8405a32c813b9b75123","url":"tw_stocks/1531.json"},{"revision":"f44451680c5c28152d73b6923ccea1d4","url":"tw_stocks/1530.json"},{"revision":"311b2bf0b7dd7c7a3d8bf3d11930e7b7","url":"tw_stocks/1529.json"},{"revision":"2a77eb9e33b4e8b56b096a411ae0431f","url":"tw_stocks/1528.json"},{"revision":"ac0286b7dbb4f35c7743bfbee9c116e1","url":"tw_stocks/1527.json"},{"revision":"9df073b553222eaae5db511592262378","url":"tw_stocks/1526.json"},{"revision":"74909c52bed4d19106e72b8dafdb0dbf","url":"tw_stocks/1525.json"},{"revision":"27a12aa1e3664e9d9450705d167c86c7","url":"tw_stocks/1524.json"},{"revision":"0f55561186e4eee3a3da59c173dee803","url":"tw_stocks/1522.json"},{"revision":"6c590af4666badb449e4e4620014109a","url":"tw_stocks/1521.json"},{"revision":"126c0567b9e167e0b65392ba54fcd02a","url":"tw_stocks/1519.json"},{"revision":"ce21546fe83e8421e66ac9be95e7f68d","url":"tw_stocks/1517.json"},{"revision":"d87acd4f516c30e4589658695253a289","url":"tw_stocks/1516.json"},{"revision":"b997e8fb9ab922f23a5661db666baebb","url":"tw_stocks/1515.json"},{"revision":"ac68ffa956611b225b8a08f9ca1b5502","url":"tw_stocks/1514.json"},{"revision":"d5af906bb757a0b13da881dc439afd06","url":"tw_stocks/1513.json"},{"revision":"91f58c0ae77215da221e4bff0595d26f","url":"tw_stocks/1512.json"},{"revision":"b6e79c81f6c30ffb3f2318ef944a36b3","url":"tw_stocks/1506.json"},{"revision":"f81fef4fdbcf7ccb122acef3aada00fc","url":"tw_stocks/1504.json"},{"revision":"9db1a1c2041aef86142aa3cd207c0c63","url":"tw_stocks/1503.json"},{"revision":"7cf02bb907baf9271eb64383f3c1990d","url":"tw_stocks/1477.json"},{"revision":"4c6d321e88992a7aed0da1bb73981ce3","url":"tw_stocks/1476.json"},{"revision":"f96cf6204a10744fe029e94bb51296de","url":"tw_stocks/1475.json"},{"revision":"a29861f179c78f49aec953b763238da5","url":"tw_stocks/1474.json"},{"revision":"46995e8413dc6b0ba1dfe18ca6c7b5ac","url":"tw_stocks/1473.json"},{"revision":"fd2e25ce867c2984b92c5db322838f6d","url":"tw_stocks/1472.json"},{"revision":"fab94abec9b30fbd5f6d57ec888c6b4f","url":"tw_stocks/1471.json"},{"revision":"86579ffff2ff62857de459f66aebc92e","url":"tw_stocks/1470.json"},{"revision":"4a93ee7748d5214b7cb5e77665f2a0d9","url":"tw_stocks/1468.json"},{"revision":"5ac54e0ff7c64f4e95964ffb25bdcca8","url":"tw_stocks/1467.json"},{"revision":"20c8b74b136513d7ba92de41773d57ad","url":"tw_stocks/1466.json"},{"revision":"5c07f2685e6bb9011efc485a0cb89e7e","url":"tw_stocks/1465.json"},{"revision":"225ae5437100b6fc68e378b2e791efed","url":"tw_stocks/1464.json"},{"revision":"686ca13caa0f83508ac1baaac9191e9c","url":"tw_stocks/1463.json"},{"revision":"f343e441669057fa982c02b9ea2ddb92","url":"tw_stocks/1460.json"},{"revision":"96f7d9953b8f01ce768830bb2091e948","url":"tw_stocks/1459.json"},{"revision":"5ee2e3595f03b1af4acca0bbbe935f95","url":"tw_stocks/1457.json"},{"revision":"90478d864ffb899efe291c9e9ca7d2d0","url":"tw_stocks/1456.json"},{"revision":"38b10ee05f0706212b60e70348263814","url":"tw_stocks/1455.json"},{"revision":"b4692d5ee98f8cdd41c97c47515414ac","url":"tw_stocks/1454.json"},{"revision":"477a6eee93d2714df4032fe7ef8973a5","url":"tw_stocks/1453.json"},{"revision":"94427e5bd002a16dd0df6dddf17fa0ce","url":"tw_stocks/1452.json"},{"revision":"573f326920c29b3f8603af13b0543b2b","url":"tw_stocks/1451.json"},{"revision":"495be79d2647b7351bf1bf09e3acb9ff","url":"tw_stocks/1449.json"},{"revision":"a221a6116a75db8e8500ec8f73a549ae","url":"tw_stocks/1447.json"},{"revision":"24e860ce51284725531767d61c1d4ff4","url":"tw_stocks/1446.json"},{"revision":"9bd4871fc453e254f20a77313a4f52df","url":"tw_stocks/1445.json"},{"revision":"5e0362be35470b041e30b8e8efdbffd1","url":"tw_stocks/1444.json"},{"revision":"542c6ffc294efb6c7a4fb82f3227168b","url":"tw_stocks/1443.json"},{"revision":"51faf0b33ff6b49471362e884c17dda9","url":"tw_stocks/1442.json"},{"revision":"654871b33a5b56129516fdb8618acef3","url":"tw_stocks/1441.json"},{"revision":"a1cd49f01dfbd3919f187c79545552e5","url":"tw_stocks/1440.json"},{"revision":"fc8997858b4276e4e5f94b7b6eafe853","url":"tw_stocks/1439.json"},{"revision":"1a1eacbf9679217b444a0c47a7cabd7a","url":"tw_stocks/1438.json"},{"revision":"d12b5d9995828af57651fa34352be861","url":"tw_stocks/1437.json"},{"revision":"a4a3932f2d729b045b9cf2bab497ccf6","url":"tw_stocks/1436.json"},{"revision":"69be8540a97e51f6d69bbec77508e3fd","url":"tw_stocks/1435.json"},{"revision":"26a0246848325b8651e547ada96a90a8","url":"tw_stocks/1434.json"},{"revision":"ae49326ec4ddb8dfdddaed211a74eb72","url":"tw_stocks/1432.json"},{"revision":"07c1947fa70b3bd500c4848997679bb0","url":"tw_stocks/1423.json"},{"revision":"71f4499620937c2f7e6627777ee951f0","url":"tw_stocks/1419.json"},{"revision":"5dcb0e577afc3052a425fa50ef513cc4","url":"tw_stocks/1418.json"},{"revision":"24059a246346f5fd89b112a98be9d9dd","url":"tw_stocks/1417.json"},{"revision":"bdaa7d55f6e2fce3db42039639fed863","url":"tw_stocks/1416.json"},{"revision":"a28af3cfa41f238c03fde79c7511f153","url":"tw_stocks/1414.json"},{"revision":"ce72d8dd9945d966833065f415ec3d05","url":"tw_stocks/1413.json"},{"revision":"3a492517c7d25d060b3606cba9935a90","url":"tw_stocks/1410.json"},{"revision":"dae7d33b8f3e35732cbb610281fb64ce","url":"tw_stocks/1409.json"},{"revision":"42a451ebb8c3f34603ef8560d038ea50","url":"tw_stocks/1402.json"},{"revision":"88c6d080095009ac33cb311d99419ec1","url":"tw_stocks/1342.json"},{"revision":"b9941f650b5446ff76c82137c8c18d4c","url":"tw_stocks/1341.json"},{"revision":"5cab060b195e0f2e78e230926d1e3cad","url":"tw_stocks/1340.json"},{"revision":"58da8e440e85d0f9a150829d3e3ddfd0","url":"tw_stocks/1339.json"},{"revision":"2579040114d38a62d39d602302ba7a64","url":"tw_stocks/1338.json"},{"revision":"19193da602bf188119a3dd41bfc35c9f","url":"tw_stocks/1337.json"},{"revision":"184cdee689f92f4fb4ba06f7b3050fa6","url":"tw_stocks/1326.json"},{"revision":"67af31e0400362cf0766fec3e10b8818","url":"tw_stocks/1325.json"},{"revision":"4ef5b33a932d838871a954115bd28eb3","url":"tw_stocks/1324.json"},{"revision":"20ff0ab64254b9f591958fe01f1b83a2","url":"tw_stocks/1323.json"},{"revision":"34a14d919560d1f3d6280f030c36e2a9","url":"tw_stocks/1321.json"},{"revision":"0266284037bbb5ccce65983f29122441","url":"tw_stocks/1319.json"},{"revision":"476b9744624ee215d8b15be39b2161a5","url":"tw_stocks/1316.json"},{"revision":"8cc27235e6d6e1a8b3a09a881798edff","url":"tw_stocks/1315.json"},{"revision":"6880dec9a8debc1d6a05da8791465a75","url":"tw_stocks/1314.json"},{"revision":"c6880088f770bd57b160908e893b4cf3","url":"tw_stocks/1313.json"},{"revision":"064e1c311b1429fa0157864401ff43dc","url":"tw_stocks/1312.json"},{"revision":"436a6f97670f47634dcf6fc62f1c678e","url":"tw_stocks/1310.json"},{"revision":"d4b219486838c211012439a10bff98ec","url":"tw_stocks/1309.json"},{"revision":"dcac8541249d410497466fc8de46c6c2","url":"tw_stocks/1308.json"},{"revision":"cf4d00ef7f9d2d0f4db886d6cdb5db9e","url":"tw_stocks/1307.json"},{"revision":"2762ad1a8b8d3b21f286a50197a177de","url":"tw_stocks/1305.json"},{"revision":"a39882931517cf782c865a3b25d031d2","url":"tw_stocks/1304.json"},{"revision":"de9ee4705be84c2adfbf51c4b5b318e9","url":"tw_stocks/1303.json"},{"revision":"92bd7301bd3c6067c4b175ea598eee4c","url":"tw_stocks/1301.json"},{"revision":"5d5726dfd563d30382aef5c8633647e2","url":"tw_stocks/1256.json"},{"revision":"dbb4d3359ef3b0dde1fea430aa63b596","url":"tw_stocks/1236.json"},{"revision":"436ab37bc654f8fc31a4d3526016d70b","url":"tw_stocks/1235.json"},{"revision":"ad6fc2ae79aaa6de26a62b3316efc096","url":"tw_stocks/1234.json"},{"revision":"9af496e8c8707193d7ace61fc3dab4b3","url":"tw_stocks/1233.json"},{"revision":"96dbfc05340a9dde8cf55091d399e53c","url":"tw_stocks/1232.json"},{"revision":"60c06201b8964c941761f90ab2635437","url":"tw_stocks/1231.json"},{"revision":"c61c2ca0fc679ee35a3a5b6f35ed314b","url":"tw_stocks/1229.json"},{"revision":"72a1e11d22a32b60b1d36e5d944ed349","url":"tw_stocks/1227.json"},{"revision":"7dbc4c58e785c8110a2c1845186db514","url":"tw_stocks/1225.json"},{"revision":"2b363a98683941a5470f8e46e88845e7","url":"tw_stocks/1220.json"},{"revision":"2e1a8a3fb36b338301fb8c1b2e9b3e36","url":"tw_stocks/1219.json"},{"revision":"95d79a892f1fcdd4e64a98ac1bf498d2","url":"tw_stocks/1218.json"},{"revision":"1ff71b0479fc0c79752d29216cb476de","url":"tw_stocks/1217.json"},{"revision":"68c7f5ff1c905e3904b4e10444cc1395","url":"tw_stocks/1216.json"},{"revision":"0d72e64a3e110210b6895dd07b8583ed","url":"tw_stocks/1215.json"},{"revision":"5e900fc91211076b7ab874d08f36bf4b","url":"tw_stocks/1213.json"},{"revision":"845a2eac1c9deee0a793d0710be3ae5d","url":"tw_stocks/1210.json"},{"revision":"dfb979b8492febc7757dab997ba64709","url":"tw_stocks/1203.json"},{"revision":"d526ff481655fbffa3cda6678f990990","url":"tw_stocks/1201.json"},{"revision":"8baabb88a6708d325b6f904de592ecc1","url":"tw_stocks/1110.json"},{"revision":"182ee224984ef6f7dc60b209db035b8d","url":"tw_stocks/1109.json"},{"revision":"83ce64faaf09ea07a973e97f15b0fe7b","url":"tw_stocks/1108.json"},{"revision":"1ca45ba4deb915b1c0831cb8520fe024","url":"tw_stocks/1104.json"},{"revision":"518e100f67118930e9c344769e41ef58","url":"tw_stocks/1103.json"},{"revision":"8670ba5b3312c51a9e13311f668279a6","url":"tw_stocks/1102.json"},{"revision":"1dae6dce1bd633c084599b3846168eed","url":"tw_stocks/1101.json"},{"revision":"0dfa36751decac4f3dab04d9b0075726","url":"tw_stocks/00999A.json"},{"revision":"cb8239cc1c098689358bc2c987864a8d","url":"tw_stocks/00997A.json"},{"revision":"020f6429f94cd6ef3b4b22b438e54c30","url":"tw_stocks/00996A.json"},{"revision":"bd6822b580548a5b24eded26e37747d4","url":"tw_stocks/00995A.json"},{"revision":"2a88a20aae30c5d7bd910d0e324da7d7","url":"tw_stocks/00994A.json"},{"revision":"213f85d037af255ab3589dcebb5ebf73","url":"tw_stocks/00993A.json"},{"revision":"8844c84848020c21342de56036859bc3","url":"tw_stocks/00992A.json"},{"revision":"9691ffb96a1b0eda5ae94d32942b8718","url":"tw_stocks/00991A.json"},{"revision":"133a4ef0ac65d38971142c986df501b9","url":"tw_stocks/00990A.json"},{"revision":"abee9ee310a4a0a12dc7218f7bb614f3","url":"tw_stocks/00989A.json"},{"revision":"4e44634b2719156f1f285d83ae1905ae","url":"tw_stocks/00988A.json"},{"revision":"86ea2d5f9cda6594c0f4bacc951ea9c6","url":"tw_stocks/00987A.json"},{"revision":"7831abd83cf7e7f996dac08e1c330a98","url":"tw_stocks/00986A.json"},{"revision":"335913c383cdc4108da54c251456c79f","url":"tw_stocks/00985B.json"},{"revision":"03cfa994b2326f3af54a05f106075134","url":"tw_stocks/00985A.json"},{"revision":"15762d8db7c38b5bbbbd25128c66bb12","url":"tw_stocks/00984D.json"},{"revision":"12b220d3a768d7b45f545f97f8e7838d","url":"tw_stocks/00984A.json"},{"revision":"a5a5d23116ddaa8ce23cefca1adc17bd","url":"tw_stocks/00983D.json"},{"revision":"bf9845149ef1cc3d7d4db38b6503d006","url":"tw_stocks/00983A.json"},{"revision":"9a75f24dce0b9f668556b165df9e08f9","url":"tw_stocks/00982T.json"},{"revision":"25e3f8f6b785bddaf91d8acd6f1718db","url":"tw_stocks/00982D.json"},{"revision":"adc74176cf82901499e9a0adb6fcc024","url":"tw_stocks/00982A.json"},{"revision":"0341e1b063989fb2bfbd6ba04cfa6b05","url":"tw_stocks/009820.json"},{"revision":"54596f81f039b7c9a399dd06fe6a840c","url":"tw_stocks/00981T.json"},{"revision":"3ffe51fea7bb20b0af67f2743244824b","url":"tw_stocks/00981A.json"},{"revision":"1cd6dabff7059474285340d96e6e4715","url":"tw_stocks/009819.json"},{"revision":"f1a48b705568878933dec052e11d759b","url":"tw_stocks/009818.json"},{"revision":"1b6cffe9d75f9c133ce385755a035bd5","url":"tw_stocks/009817.json"},{"revision":"61eccd95d87b7e6c8f85d5004dbd242a","url":"tw_stocks/009816.json"},{"revision":"336fa6a5c717f158ba58a47dc1f3cdc1","url":"tw_stocks/009813.json"},{"revision":"53c6ba211f2847e04ab3af5c0adad123","url":"tw_stocks/009812.json"},{"revision":"47a62af5e6815d0aee5ab913aed84e97","url":"tw_stocks/009811.json"},{"revision":"e1c54be0cd0905dcd2f3023b1b43ebfb","url":"tw_stocks/009810.json"},{"revision":"ce7cf0f031d7c67c7fb429f6a6fb692e","url":"tw_stocks/00980A.json"},{"revision":"18c0146f5d21b134f31e7fc8e5cf7f6e","url":"tw_stocks/009809.json"},{"revision":"2f9316fca65eada4330f6bfbec6d2a5f","url":"tw_stocks/009808.json"},{"revision":"b670697884123a4db9f9e091004df51b","url":"tw_stocks/009805.json"},{"revision":"fe32bbb3a0cd8f26e6dab9b92540903e","url":"tw_stocks/009804.json"},{"revision":"55a137bf62ec3b281da9807a6d607134","url":"tw_stocks/009803.json"},{"revision":"dc2f603a4c603230175f6fab2805c57d","url":"tw_stocks/009802.json"},{"revision":"1e3946b233f3859163bc79d8a8f4dd3a","url":"tw_stocks/009801.json"},{"revision":"11af3dfcba1017cfdb3c00a8485a69cc","url":"tw_stocks/009800.json"},{"revision":"ee3a7666dd8f3dea41479e196639ba64","url":"tw_stocks/00972.json"},{"revision":"830c7d340cac8bd7cc9f826651a8cae0","url":"tw_stocks/00971.json"},{"revision":"25467a4155f86834e3334a6a2c149302","url":"tw_stocks/00965.json"},{"revision":"432cbed205e81c8b3f57981abcb8841c","url":"tw_stocks/00964.json"},{"revision":"3bd1842bb778d989971dfda433f9ae11","url":"tw_stocks/00963.json"},{"revision":"44a1e35b2a56826765392d2660179397","url":"tw_stocks/00962.json"},{"revision":"c78eff5267f39a72fa65ac5f5a693789","url":"tw_stocks/00961.json"},{"revision":"6185427b3a12d8ecfebeeab7c030be7c","url":"tw_stocks/00960.json"},{"revision":"5d8ff410677bcdc477a5d5fc287e94c8","url":"tw_stocks/00956.json"},{"revision":"0020774d72207f4e369b1645b011413c","url":"tw_stocks/00954.json"},{"revision":"a1eed087f46cc7d95f103541be66b589","url":"tw_stocks/00953B.json"},{"revision":"576d489e1f36fce898af379ec323ffa0","url":"tw_stocks/00952.json"},{"revision":"3cdbf0aea80f46e3c15a60947ab7d6e5","url":"tw_stocks/00951.json"},{"revision":"5505d11f95195554676bcc12957d7794","url":"tw_stocks/00949.json"},{"revision":"550d7dcadd314e64c0c4d50af45048d9","url":"tw_stocks/00947.json"},{"revision":"46e9e03293c56681db160bb7b285a079","url":"tw_stocks/00946.json"},{"revision":"07368ff94f279ce114d48274afa663ce","url":"tw_stocks/00945B.json"},{"revision":"6d78b153251f91f0bc78da2b6707b080","url":"tw_stocks/00944.json"},{"revision":"7156c07e2b21d933d3fbaa1507854154","url":"tw_stocks/00943.json"},{"revision":"be781c413c35f9e3baa4397005b24064","url":"tw_stocks/00941.json"},{"revision":"143d799934c1ce502c3fa8259bd439a7","url":"tw_stocks/00940.json"},{"revision":"4e8a605117a2d650bea205fbb4ff0330","url":"tw_stocks/00939.json"},{"revision":"40253bf08c544e2621e73316e8080022","url":"tw_stocks/00938.json"},{"revision":"a033752167f40b4bac996b3186870f30","url":"tw_stocks/00936.json"},{"revision":"cf6e1dc0a9664327e7baa564ebec970d","url":"tw_stocks/00935.json"},{"revision":"81de1186d5c1df6a42c0535f3b3ae3ba","url":"tw_stocks/00934.json"},{"revision":"01924d18413d3ba795f77eb498bc2867","url":"tw_stocks/00932.json"},{"revision":"b3dfa51e2d5ac8ebe0887ef736321d34","url":"tw_stocks/00930.json"},{"revision":"821b48f43c2c1f670d4dd0eee42af1e4","url":"tw_stocks/00929.json"},{"revision":"9d0337fd579e591c303f1ccf3247cc4c","url":"tw_stocks/00927.json"},{"revision":"743d115f14c48c6a0b165da0069c48cd","url":"tw_stocks/00926.json"},{"revision":"e1d80b3ca42da5acd7af0d27e247e919","url":"tw_stocks/00924.json"},{"revision":"686577f318723ae06478a75b9925757b","url":"tw_stocks/00923.json"},{"revision":"61c8f8b9f72c9d46caa0fc52cdb877a2","url":"tw_stocks/00922.json"},{"revision":"d4bea9ebe396f369ff2e027d288593a4","url":"tw_stocks/00921.json"},{"revision":"7ce35d88f345c49748ca642205931002","url":"tw_stocks/00920.json"},{"revision":"88f046219c3e2c70bdb6e68026152ddc","url":"tw_stocks/00919.json"},{"revision":"f0770a740ef219bfa0c23ec5d53cc1c0","url":"tw_stocks/00918.json"},{"revision":"4755f61dfc189111031698fc4388bf16","url":"tw_stocks/00917.json"},{"revision":"8ab3f9119d31637b057430d454b72d50","url":"tw_stocks/00916.json"},{"revision":"4473ffc7c9adcacbbaf699c12834f239","url":"tw_stocks/00915.json"},{"revision":"64e0291ae70b797fd7dc51f3b4df6794","url":"tw_stocks/00913.json"},{"revision":"6371dc059ae9dce902712e08dbe43438","url":"tw_stocks/00912.json"},{"revision":"85c0addcfc2c4f4e043371c26a5fd7bf","url":"tw_stocks/00911.json"},{"revision":"10debdfbda89852a2f246e552ef07f62","url":"tw_stocks/00910.json"},{"revision":"d452b5449d9fe6054fe338096a3b1885","url":"tw_stocks/00909.json"},{"revision":"a7e7e7cb1d50d18a949157ae173d44f8","url":"tw_stocks/00908.json"},{"revision":"1394e452ff11113e4b4e2feab6b3d465","url":"tw_stocks/00907.json"},{"revision":"d8425cbf0c65cc0eef88ec9d19a9f870","url":"tw_stocks/00905.json"},{"revision":"e10b4c52d8c475fdf8d6824c4b276f64","url":"tw_stocks/00904.json"},{"revision":"65d63f5256b3962b7bf236408f941693","url":"tw_stocks/00903.json"},{"revision":"30a8f63412cf62e61da10cf51579bf37","url":"tw_stocks/00902.json"},{"revision":"1b3eb28e0abfd3468353b3fb98b0e4cf","url":"tw_stocks/00901.json"},{"revision":"0395a016e0c82e4fdec40c1c276728ad","url":"tw_stocks/00900.json"},{"revision":"4a5569360765c13bd5a0a832a19d885b","url":"tw_stocks/00899.json"},{"revision":"b08b58d2984cb6b0ce5f90a9e9d26e6a","url":"tw_stocks/00898.json"},{"revision":"068e6cea4bc64c38ba7fed1be1ffc423","url":"tw_stocks/00897.json"},{"revision":"b7d2c8fc7c4760528cd7109665343486","url":"tw_stocks/00896.json"},{"revision":"0a1d25960fd8ed93e2016bf7c47a38a7","url":"tw_stocks/00895.json"},{"revision":"f68addc49dfce3e6c8142c3534e03b93","url":"tw_stocks/00894.json"},{"revision":"6ea3dc324cf1e7da41517586ec8d8947","url":"tw_stocks/00893.json"},{"revision":"0ec61fda1429f78e2ecaee989737060c","url":"tw_stocks/00892.json"},{"revision":"c42e7660c00300666b4b45e47e7fefc4","url":"tw_stocks/00891.json"},{"revision":"0fdafeef9b621c293c402fddefc5fd22","url":"tw_stocks/00885.json"},{"revision":"a7f02ea75a5c56736813155adace45cd","url":"tw_stocks/00882.json"},{"revision":"607a053ef0bdbcc556dedbc0391d15a2","url":"tw_stocks/00881.json"},{"revision":"c61e19998e67397f6b1020cf7cd4b68f","url":"tw_stocks/00878.json"},{"revision":"18ea0063e22b0bce3265212c82a627fe","url":"tw_stocks/00876.json"},{"revision":"41fbea4e1416078a3f8c2ed8882af7e9","url":"tw_stocks/00875.json"},{"revision":"62a16f40da7660b4412b147db3179931","url":"tw_stocks/00865B.json"},{"revision":"0135f70c2dacd5b942b10dccf39a5147","url":"tw_stocks/00861.json"},{"revision":"e9a00dc38a4fee408d0b9abf984d719d","url":"tw_stocks/00852L.json"},{"revision":"919a49f6f69008ffbc94fd24c01b08cc","url":"tw_stocks/00851.json"},{"revision":"c306bb2762c4e783eb922cfcf5f0976c","url":"tw_stocks/00850.json"},{"revision":"1845a803cb08f6e214717cab397f3326","url":"tw_stocks/00830.json"},{"revision":"5313a2f8b5cf44ee21ee94218d5e4451","url":"tw_stocks/00783.json"},{"revision":"5b5df1489066997b57ad047aeb43fb89","url":"tw_stocks/00775B.json"},{"revision":"f6b6723712912309f1f0aafc5de1649a","url":"tw_stocks/00771.json"},{"revision":"39da6547be4809ea8c727d75b167af73","url":"tw_stocks/00770.json"},{"revision":"a1cd9bdb6d584bb49234d832be6e08b0","url":"tw_stocks/00763U.json"},{"revision":"f7a51c5c9ebb6d185a5f6f09ed1c040e","url":"tw_stocks/00762.json"},{"revision":"ceb76e78a4c31200b0d27725bd8438e6","url":"tw_stocks/00757.json"},{"revision":"5195623780ae5f5377885f887f1d6f45","url":"tw_stocks/00753L.json"},{"revision":"9f3367747d9fd5223740a4d6c09a79ab","url":"tw_stocks/00752.json"},{"revision":"f25e89a395f14983073b03e0139b7e1f","url":"tw_stocks/00739.json"},{"revision":"afdd2aa35310a2da0c09cec9e4b89070","url":"tw_stocks/00738U.json"},{"revision":"358ffc1e5bb207fa5e23fc74ce9a34f1","url":"tw_stocks/00737.json"},{"revision":"52a2202172007e91fa0510dacdfbf02e","url":"tw_stocks/00736.json"},{"revision":"66716aaaba56728ce11ca079e5bf3c76","url":"tw_stocks/00735.json"},{"revision":"31d29c2dc97a2e3f9f67642aa6d19772","url":"tw_stocks/00733.json"},{"revision":"9e54cb634d0e13fcfbcce238946c08ad","url":"tw_stocks/00731.json"},{"revision":"453a67ed345ee43ae748b5f5972beadf","url":"tw_stocks/00730.json"},{"revision":"1cb935cd6de3e19bcc92d6f8e6ab08e5","url":"tw_stocks/00728.json"},{"revision":"cd1b5b8c20371aa18109d6b35f1c8245","url":"tw_stocks/00717.json"},{"revision":"c59a03225c43d80c2634581c5359d03b","url":"tw_stocks/00715L.json"},{"revision":"4f1243f958d6dfe72bbf437ecb6ebcf7","url":"tw_stocks/00714.json"},{"revision":"305da9075b831413c21dbb5394e94e83","url":"tw_stocks/00713.json"},{"revision":"94bb3fcdbb0fda56d94a4f70f3c289a5","url":"tw_stocks/00712.json"},{"revision":"ada5400eba7ad405394a36440bfe931c","url":"tw_stocks/00711B.json"},{"revision":"0eb3890c20953f158fc75a2f6c3ad1f9","url":"tw_stocks/00710B.json"},{"revision":"5930671906c51001a08f32ae344596f4","url":"tw_stocks/00709.json"},{"revision":"a9fd9c654a9b4ca8357e8bfc2c922394","url":"tw_stocks/00708L.json"},{"revision":"4d51fcf966380967ed78227480033a25","url":"tw_stocks/00707R.json"},{"revision":"5e267d088266495b7d20cbe69936d236","url":"tw_stocks/00706L.json"},{"revision":"47f200ad0afa00462041d0bcbfae7cde","url":"tw_stocks/00703.json"},{"revision":"e32e6329a10a32601080e9a3ae8dcd70","url":"tw_stocks/00702.json"},{"revision":"a30bbe601d791ad9ba53fc77b745c210","url":"tw_stocks/00701.json"},{"revision":"1729bfe7ac377bfd6d267069b5f0ff26","url":"tw_stocks/00700.json"},{"revision":"ab201919eb75d4a5e1297c9afe025ab4","url":"tw_stocks/00693U.json"},{"revision":"fdbdf1022d4b0940d219cb0c07d0f3ec","url":"tw_stocks/00692.json"},{"revision":"8287d1311e205a2bbb6f22da3d927934","url":"tw_stocks/00690.json"},{"revision":"08a17c75c0b4858042ca1712da886334","url":"tw_stocks/00689R.json"},{"revision":"ab3ad509bc0d92e7dac58cb944bdc4f3","url":"tw_stocks/00688L.json"},{"revision":"a89abade21f5fa8d9376f3f0624e5304","url":"tw_stocks/00686R.json"},{"revision":"dfa91225fae02aaef6eb568f70f028d2","url":"tw_stocks/00685L.json"},{"revision":"47d0bd78b4a2f1f4f0d7542201d3b233","url":"tw_stocks/00684R.json"},{"revision":"531033bf7c2f803afe90338e1b8e784a","url":"tw_stocks/00683L.json"},{"revision":"52fdd092b0bc9e1c2bb04515fb9b5b2a","url":"tw_stocks/00682U.json"},{"revision":"b9b23e260c0d7b5fb80f1df1c9075448","url":"tw_stocks/00681R.json"},{"revision":"8d5cc5380f65b5f1b5b660c55a4e319b","url":"tw_stocks/00680L.json"},{"revision":"0b03dcfe157830694009d65371c6d8c0","url":"tw_stocks/00678.json"},{"revision":"e7447886c25bb1f2d59fb737d156a31f","url":"tw_stocks/00676R.json"},{"revision":"b0559647196cfced6f2562d3cf2af9c9","url":"tw_stocks/00675L.json"},{"revision":"2ce3a18d35f8b93ee781903cd28c8aed","url":"tw_stocks/00674R.json"},{"revision":"91b3b18164f04795d478a69dfa6ed192","url":"tw_stocks/00673R.json"},{"revision":"a76080ff5fee1c55151dd19dcd386403","url":"tw_stocks/00671R.json"},{"revision":"4fa6993044fae705f07c9d9eb4f4b8f6","url":"tw_stocks/00670L.json"},{"revision":"2b399d7e234a5b189ef33992a6ce2a03","url":"tw_stocks/00669R.json"},{"revision":"a1580f628bfaeecc581619b7c455418e","url":"tw_stocks/00668K.json"},{"revision":"6f5027a0041c728d53872635095a992e","url":"tw_stocks/00668.json"},{"revision":"92f2f1bad3f39477a3e238214399827e","url":"tw_stocks/00666R.json"},{"revision":"31b84f83c1e15b044cfa27fa4ed1048f","url":"tw_stocks/00665L.json"},{"revision":"37bfddcb2a2706ba2216436a622ab273","url":"tw_stocks/00664R.json"},{"revision":"182e45ee280a0ac9e864f25ba94667d6","url":"tw_stocks/00663L.json"},{"revision":"caff65687408a8e70964a34b64d58352","url":"tw_stocks/00662.json"},{"revision":"ecbd09db9717f31d4cc6e88ef1f74080","url":"tw_stocks/00661.json"},{"revision":"b7bc1fcc58ec0b85d6b1d9e69333acf3","url":"tw_stocks/00660.json"},{"revision":"c5a4fca6256cda2cd618879d92943821","url":"tw_stocks/00657K.json"},{"revision":"ce578ab6aa210804e7758a0f4c4fceaa","url":"tw_stocks/00657.json"},{"revision":"18698b91fc129cfc76a51255a4fff80d","url":"tw_stocks/00656R.json"},{"revision":"8c3d4491132efa40e06ce7fd40c69e5b","url":"tw_stocks/00655L.json"},{"revision":"a19fd435b80529fdbd58d4521323b83b","url":"tw_stocks/00654R.json"},{"revision":"56cf4642b2ae9eaea03b8558788fffad","url":"tw_stocks/00653L.json"},{"revision":"1b7339fea6d3cb0c723287ac6bcb0446","url":"tw_stocks/00652.json"},{"revision":"986d528a3e3fba3c609b111ef7b61e28","url":"tw_stocks/00651R.json"},{"revision":"cbd8be8f48c91aeca697dfd4aabbca55","url":"tw_stocks/00650L.json"},{"revision":"9ca1ef2950ea8f3eb5a68eb042ab3163","url":"tw_stocks/00648R.json"},{"revision":"94f93adc33dad67475e48086e38922d7","url":"tw_stocks/00647L.json"},{"revision":"cfa568b697354dfe3ef97b89eb9a211d","url":"tw_stocks/00646.json"},{"revision":"99a362f81761ce3d3da1e63bc4a2a5b1","url":"tw_stocks/00645.json"},{"revision":"e94a5e3f007a9a6a5c07888174c718ea","url":"tw_stocks/00643K.json"},{"revision":"05757a9c47a317facfdcc84dbf4114e6","url":"tw_stocks/00643.json"},{"revision":"5d6388bc5f5759d9e8d7226101200bfe","url":"tw_stocks/00642U.json"},{"revision":"8cd76e91572a63666375ae81c8697c1a","url":"tw_stocks/00641R.json"},{"revision":"c2babdcc9b7b2c8cb21f1147f01841eb","url":"tw_stocks/00640L.json"},{"revision":"ccba5b32f1ebeb07dc5474669704f24d","url":"tw_stocks/00639.json"},{"revision":"e80e538381074971f4b135042b03a3bd","url":"tw_stocks/00638R.json"},{"revision":"24c60030c5af7c8a63176b1c9ad5f1e5","url":"tw_stocks/00637L.json"},{"revision":"65a5bc1c782961cce7de30ff336e1a3f","url":"tw_stocks/00636K.json"},{"revision":"a70f929146ca569040c519fbaf8c28fe","url":"tw_stocks/00636.json"},{"revision":"1cc72b25e812a56037d2a07b53775e1b","url":"tw_stocks/00635U.json"},{"revision":"8bb403a73efd6a75ec69d92cfce975c2","url":"tw_stocks/00634R.json"},{"revision":"04ff44c2d085c1845e8f77866afae778","url":"tw_stocks/00633L.json"},{"revision":"f61801db53ac818464dea05cd9fdd054","url":"tw_stocks/00632R.json"},{"revision":"8af7d91f700059b4ce351f263146a9fb","url":"tw_stocks/00631L.json"},{"revision":"23c8b5e81d8ba148c31d757ddf4dec02","url":"tw_stocks/00625K.json"},{"revision":"59aa68f82df236d7b7b341ae6550fc36","url":"tw_stocks/006208.json"},{"revision":"23ba49d290fd52f905758fdcaeb5b86e","url":"tw_stocks/006207.json"},{"revision":"5fb328013bf1b123ed2bb441d03f0299","url":"tw_stocks/006206.json"},{"revision":"0904f82e8b7be55d25c4df163612be0b","url":"tw_stocks/006205.json"},{"revision":"b22d98bd8ee6b583a630d6ced44f4f70","url":"tw_stocks/006204.json"},{"revision":"01beb590f585134306e9e397add54ead","url":"tw_stocks/006203.json"},{"revision":"1e3855249a6dfa3b5bd2c3b56592bd4b","url":"tw_stocks/0061.json"},{"revision":"3c766fb75cf9d346a91df7b4d3101264","url":"tw_stocks/0057.json"},{"revision":"80263ad5f6478d2bcb18bb8307b862b7","url":"tw_stocks/0056.json"},{"revision":"3f2361b3a64be1946c0586fc7afeda69","url":"tw_stocks/0055.json"},{"revision":"7db3939b6251daea83c691dda3dcbea6","url":"tw_stocks/0053.json"},{"revision":"664b1081c7845651b448d5a3f5b48f90","url":"tw_stocks/0052.json"},{"revision":"cc922a4330e791dabe2938c68b86f798","url":"tw_stocks/0051.json"},{"revision":"cf9969c56e6894b665869dfba330b25b","url":"tw_stocks/0050.json"},{"revision":"c90d60941d3429ac0ba69f8b1b86a856","url":"tw_stocks/00401A.json"},{"revision":"73cf8b5104c6322b5faff90ce51faa40","url":"tw_stocks/00400A.json"},{"revision":"f6ef7cb70c5386af3c9822b93927446f","url":"subscription/callback.html"},{"revision":"0405ee97b3f22ffc0c8e710245d8d926","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"1de8f52878f61bf42dd35d08f1c76519","url":"financial/rebalance.html"},{"revision":"650a56aad691797cdf1a2cfec80b7133","url":"financial/cashflow.html"},{"revision":"33fa74884f975aacd749113e300d8e71","url":"financial/balance-sheet.html"},{"revision":"056c0bb3ea725cb52d0ebf0bb5ede27a","url":"finance/tags.html"},{"revision":"e38443361198b5328ea4a550603b8504","url":"finance/finance-weekly-2026-04-11.html"},{"revision":"48b63ef9506ba406f8cefea058ce0df7","url":"finance/finance-section-created.html"},{"revision":"ed14eb0fa97d053a66afa8e3712c95e7","url":"finance/finance-2026-04-30.html"},{"revision":"1b6120d3a3d70ec9aaa2b907f3c1a118","url":"finance/finance-2026-04-29.html"},{"revision":"44b27e4472b6d3d7c42faa5b9941d48a","url":"finance/finance-2026-04-28.html"},{"revision":"9ab8c983f8483105d35d612de92ca626","url":"finance/finance-2026-04-27.html"},{"revision":"91dd3d64340ecb0c4277ea26938a69d9","url":"finance/finance-2026-04-24.html"},{"revision":"152a9b262f6bcdd0f97d1063fff96d7c","url":"finance/finance-2026-04-23.html"},{"revision":"a3a28669713b0b3ef2e33f21fb3a1412","url":"finance/finance-2026-04-22.html"},{"revision":"b0415618a043afc47ab6a4ab430850c2","url":"finance/finance-2026-04-21.html"},{"revision":"bf3b14029b13d572a33b0b072fdc485a","url":"finance/finance-2026-04-20.html"},{"revision":"ee5cef994311da2e6c1db4beed7bff67","url":"finance/finance-2026-04-17.html"},{"revision":"5e3498ba6f0d45dc12bd562467e3b379","url":"finance/finance-2026-04-16.html"},{"revision":"f056d8bca84ed388a5e23b32378a7315","url":"finance/finance-2026-04-15.html"},{"revision":"6dd8f44bf71d7a55d1d1f354724f9072","url":"finance/finance-2026-04-14.html"},{"revision":"a3ea8937f6fe176e312fc2a0512361ad","url":"finance/finance-2026-04-13.html"},{"revision":"73cd360df93701a85aac6c5d3a32b366","url":"finance/finance-2026-04-10.html"},{"revision":"5a1af88e8359db16a322763246d562e3","url":"finance/finance-2026-04-09.html"},{"revision":"df091ee4159d0c81b1063d307b03e2e5","url":"finance/finance-2026-04-08.html"},{"revision":"f9262b0f1231a974537273e530e45573","url":"finance/authors.html"},{"revision":"6aaa08802c2a97b39b7d60b6aa9503c9","url":"finance/archive.html"},{"revision":"3426b2442219c8a09e7a52a855321919","url":"finance/tags/weekly-report.html"},{"revision":"44f80699fa4a7149bd50ce44729c55e5","url":"finance/tags/finance.html"},{"revision":"88b13939c634ad621917d97eb81da9fd","url":"finance/tags/daily-report.html"},{"revision":"150914cc55720847ba48eb0c0af1db3a","url":"finance/tags/announcement.html"},{"revision":"858f9e8a2ad794129683f66b2dc0d8a3","url":"finance/tags/finance/page/2.html"},{"revision":"eeceba170c25c9d13d303311154ba7bd","url":"finance/tags/daily-report/page/2.html"},{"revision":"303cf52e32dc94e94ab9d0a8707796aa","url":"finance/page/2.html"},{"revision":"b349d240ca86371d1dcb8700b70f6811","url":"docs/tags.html"},{"revision":"08c842fff58a47130fc5ff3eff4822ad","url":"docs/intro.html"},{"revision":"4860fcdd3fb1d0ece27a3dd2cb4313bc","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"61b39517b2200613695ddbe5f1a7b4c3","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"60d0fb61a361e05db27cf6651694456d","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"de34f63b4747ebc7aa047380c27f3b4d","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"0a8613478e8a3ea6d2899b47cc9d4c05","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"209a0abd4af9df1fca4f7dbc719b719c","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"1917076c3d0a791700ef553d9bdcd1f6","url":"docs/tags/黑箱協議.html"},{"revision":"6949985a0e2c21589e4ef1a42469acf3","url":"docs/tags/養成.html"},{"revision":"11e15c1c8e3c2ed94116d4121bd5802f","url":"docs/tags/資料安全.html"},{"revision":"8a8b6cae57084eb611137ccf245a0e06","url":"docs/tags/經濟循環.html"},{"revision":"b2c4c3ebe66f2ed8a47831a94fa6982a","url":"docs/tags/百科.html"},{"revision":"465f45fd046c85c17b577a3290c9eda9","url":"docs/tags/模型控制.html"},{"revision":"3e40e80d46bc89e5ba5ef1dd82c785f2","url":"docs/tags/數據標準.html"},{"revision":"226a3a24bcd7a6b8e2d4c42ae107b29d","url":"docs/tags/接入規範.html"},{"revision":"2bf7093ad95c0fc761c55efd09b54fb8","url":"docs/tags/指南.html"},{"revision":"002aab033dbf881e1e368e47069b2c6b","url":"docs/tags/技術哲學.html"},{"revision":"cba4d62b184ebdf486f0b04deab654f3","url":"docs/tags/技術史.html"},{"revision":"3b014458a74fe5ccd48e6db853834a6e","url":"docs/tags/戰鬥系統.html"},{"revision":"dcfc29459e6be0b077e4ec6a711b80f3","url":"docs/tags/專案管理.html"},{"revision":"e4a1e896aa912d80d4dc4c59a1d9e1c1","url":"docs/tags/安全架構.html"},{"revision":"b1f9eca61e53b06b36398a7bcc8869ad","url":"docs/tags/安全協定.html"},{"revision":"9dbd02d4a68c469dafbb34e4078355c1","url":"docs/tags/外部開發者.html"},{"revision":"ea341d4c5d0f86f5085d253ddd12c476","url":"docs/tags/商店.html"},{"revision":"9f424caef74426ff6ecfc0ad887ad399","url":"docs/tags/去中心化標準.html"},{"revision":"da429852de126d94d77d63558d68587b","url":"docs/tags/去中心化安全.html"},{"revision":"3ff88236dc44b589bece20c4cc796f2e","url":"docs/tags/去中心化.html"},{"revision":"130b22839a963fecffe5825391adc694","url":"docs/tags/top-p.html"},{"revision":"a8dcc438ef14273aec363d993eb1a912","url":"docs/tags/tokenizer.html"},{"revision":"6009f99c118821b22a7829f487064376","url":"docs/tags/temperature.html"},{"revision":"e28ddb67560067c3138c5e731e64cb9a","url":"docs/tags/technical-docs.html"},{"revision":"c2e3ff2108b351029d6da47dba01c9d3","url":"docs/tags/nlp.html"},{"revision":"667cb0261f0b217075fe518547132ca9","url":"docs/tags/llm.html"},{"revision":"a8e05a6c7219bbfbd45d1dcd3b30c69b","url":"docs/tags/git-hub-copilot.html"},{"revision":"c3496f76918943716c5b30814cfae29b","url":"docs/tags/generative-ai.html"},{"revision":"f52cfd4d85be737f406e61d6da2afaba","url":"docs/tags/eip.html"},{"revision":"418d74cc1fa4d35785679f3d4edc1780","url":"docs/tags/development-tools.html"},{"revision":"8365dd2e463366e8757d3bbef9290944","url":"docs/tags/cli.html"},{"revision":"25f5e406c17831b6a204eeb26a82fd3c","url":"docs/tags/claude-code.html"},{"revision":"df7635ee84e2a8bee0bd5248e5a7ea01","url":"docs/tags/bpe.html"},{"revision":"4e8c136654b21939e6af22d482b34f5d","url":"docs/tags/automation.html"},{"revision":"15be6c14c88afd1b77c424ea09fe84bc","url":"docs/tags/ai.html"},{"revision":"1af43341e51efa41e0ae21a38fcdbaab","url":"docs/tags/agent.html"},{"revision":"09ced3ad7c8dba7365b7fd30c5957805","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"bce49a063e01c869d45ee833923c50f6","url":"docs/skill/gemini-skills.html"},{"revision":"4f1a0800c1171c99eb0387e1e8bfb799","url":"docs/skill/container-builder-skill.html"},{"revision":"bf0f114b5fda698c829b1a1a53b14155","url":"docs/skill/claude-code-skills.html"},{"revision":"80e4d08fc944ea0fcf1912d65423c6a7","url":"docs/python-workshop/python-init-file.html"},{"revision":"0babfbbb349df5d423454206683b5adc","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"976dfa1765cd929cc559851778f81a93","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"470f31847a28cf33642e3df07f5ac0cf","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"72ab4f2bb18e248f057ce1881173fdaf","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"6cda14b74f40e87e12fbd35bde3b4583","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"0814b9e4d300b86bfd2c2231e6e4e7d4","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"73c8ff6e383a6ab0d0af84ee334939e1","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"213390cb36dd48358697991b1ec7bb3e","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"173074eddd9e8485a6413684c615a267","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"594b19595c5a0d4a386f920fbcfd4202","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"2568fe31169e98330510f4d567a5d826","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"739d4bd1aefab899ca24bef6672fe4a0","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"026a9398af19c2f893bb1e9e40d6c456","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"2507d115d134c18b0f0ecc51417a37b3","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"a7495e8d0ca22872a0654f7213cced4c","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"6fea490bd37c3c8ec62d48919e063b4e","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"bd8a0b32014c31b04f46cba6941546b9","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"6a344e64c8c63144ed5b27553c7980fa","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"0e2343940a0302de600093a31a43d9d0","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"1bf2b6247f7d6fb925540a1608671fc1","url":"docs/claude-code-series/skills.html"},{"revision":"c404a503ee3474333861ed24e0dcac8a","url":"docs/claude-code-series/monitoring.html"},{"revision":"62de431d2294a1385b381ae171f0c271","url":"docs/claude-code-series/getting-started.html"},{"revision":"ce22091fc4ff925ca050f50a0cb5b134","url":"docs/category/遊戲規則與手冊.html"},{"revision":"b5e65359e8979cfa6529bb79cd68b2d1","url":"docs/category/發文-skill.html"},{"revision":"5b535d4bdc29e68178927a295e16799b","url":"docs/category/戰情室元件-skill.html"},{"revision":"43147f26622bfd4aeedb57219dcf74df","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"f2ea3c50daecf3c4ddd88a26b83f4403","url":"docs/category/skill.html"},{"revision":"94d4e363ce43f3fbb06301cefc752cd6","url":"docs/category/python-workshop.html"},{"revision":"1d5f2203969dbd264f70114a6140401e","url":"docs/category/egg-pet-philosophy.html"},{"revision":"797ad84ef4573517ed40f9743df38480","url":"docs/category/claude-code.html"},{"revision":"5baa0ba5770aaca40b9a374f08db8c01","url":"docs/blog-skill/news-rules.html"},{"revision":"8951fa3e11679a4a008c0373179a5b9a","url":"docs/blog-skill/history-rules.html"},{"revision":"b44efa2cd6ebc66f6b1f8098a589bfc2","url":"docs/blog-skill/finance-rules.html"},{"revision":"ef0329b4713f5f7cf61087366f38a78b","url":"auth/callback.html"},{"revision":"0ab5c2bc8351d6096300ae674bf36180","url":"assets/js/runtime~main.a20d6e61.js"},{"revision":"488040c11caf1dc5f341ae18b8d682c5","url":"assets/js/main.67610b97.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"5226756cc111237230f4688de4bd9ae8","url":"assets/js/f60bf1e1.11fcd7af.js"},{"revision":"7ea3f1304499330fc7c2b186d7444b10","url":"assets/js/ef86e77f.a7451e93.js"},{"revision":"2783d1598119d406bd403afb4399cb70","url":"assets/js/ed4d73f8.e30c4ee8.js"},{"revision":"128bdeae513f28cf1a7aeeca36683eed","url":"assets/js/ec1e3285.19cc3c92.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"5a2cd4b183380d4383be1d9e81f61c84","url":"assets/js/ea89dec7.80cee8b4.js"},{"revision":"b4957fc7999da10ebdfd0bcb6244d3bf","url":"assets/js/e88c4a9c.ceb22adf.js"},{"revision":"abc840905aebfa25c5e27f9340fcf788","url":"assets/js/e86a5a75.c37649f9.js"},{"revision":"083a41fb6bace1d9a3c7568a1bf91836","url":"assets/js/e7f07728.753ecc2f.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"411360668ce1530945309ba14f903bfd","url":"assets/js/e1c57381.94ae0ae3.js"},{"revision":"98473c74e79f9c9115f45d6abe606502","url":"assets/js/dfea6eb9.0885d83f.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"50794d166d705c5924f4f144dafbffd2","url":"assets/js/dd5b562f.7d466c28.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"f341730b90b0c24c26c629e0bb953348","url":"assets/js/d90f4af5.9621681e.js"},{"revision":"26f69e77930fda38bde6bd5b793276d4","url":"assets/js/d7b680af.e1205cec.js"},{"revision":"fb1171a8650d73b2a385dbb0db8df666","url":"assets/js/d7453cde.938564a7.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"a291fb1503241b9d95c22ef8efb8a05c","url":"assets/js/d1fa896a.0aa6cfd9.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"d6efcd3ee8a4283c216459446c767366","url":"assets/js/cc221b30.d7d4c813.js"},{"revision":"e8fb4fbbe086de72283c9d5887df5444","url":"assets/js/c9add68e.cbb7377b.js"},{"revision":"b47ba2d5f791364b83adfddfe3c10a2d","url":"assets/js/c7f3abc7.d1d87616.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"2129bdf2cb5f1b6714db4e7b36a25a93","url":"assets/js/c2f9bb6a.82bf7823.js"},{"revision":"d7161882f9e529cb493767d90b5f23ad","url":"assets/js/c2e1ff31.c1557720.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"9a52c5056534d964b5cbfd686bda9c66","url":"assets/js/c0879439.97e73e32.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"c22e857ef4fe8f330a77631522053253","url":"assets/js/bfcb750f.c7c4b431.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"5ad106958bfd40837f7075a62a370e53","url":"assets/js/b95eaafa.fd4b38b8.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"553f3a17e92927c9cd6cb886619fe1d8","url":"assets/js/b714ff87.08360a4d.js"},{"revision":"5e2915af8680af39ced009c2aa10490d","url":"assets/js/b283ca86.22afc469.js"},{"revision":"408ddd5ad1655bf5a15f41975cca3e90","url":"assets/js/b2814407.f36233a2.js"},{"revision":"595725355a796b04e6d12ba728d51bf5","url":"assets/js/afdbc12b.adfb4e8f.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"279ca0e05ba1484cdb40c2c0edba98a4","url":"assets/js/ac590df8.134b16f3.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"efa074512b62092cb264155809182a06","url":"assets/js/a89e3451.d869519d.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"398ab985bd5969903595b36fd33402b4","url":"assets/js/a71ba949.57d1959d.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"5aa7f2ded730b96838aeac722b4d2070","url":"assets/js/a6038fd8.8b07a4c1.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"fca48e4884d34e47418d715619316e79","url":"assets/js/9adafc71.27f328f7.js"},{"revision":"ec1ca316ed37f4869c999d0893eb2494","url":"assets/js/99f940e2.a3e947f0.js"},{"revision":"ccdfc3ecbd9e194d8ee07899362122b2","url":"assets/js/99d3b34a.193ea0d5.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"ae4f0fa80233d484edddb66dd3b2e57b","url":"assets/js/98831978.f39fe8b2.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"14675b38f028f7f375316a10ff86ed86","url":"assets/js/93a08f73.83b973f6.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"629430061c4518c5423a3863459479b3","url":"assets/js/92adc83b.6e86f99b.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"0956cbbcba621cc4031c9388bfc94c97","url":"assets/js/923ed0b3.8a5fe2d0.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"62eda1c862eeb0f1ccc637fb3d22b92a","url":"assets/js/8f79df81.56275f67.js"},{"revision":"49ae88e7dcba5a8a00a15804122df350","url":"assets/js/8c20996d.33838a65.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"53daa6b1c8e68be8ab8db30eb1e8be82","url":"assets/js/853ca2df.037b2fe2.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"e32e3de018d5d71bec74850a3e6e1ec6","url":"assets/js/826b5919.66678e0c.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"e9ad5a9bd12898119a29bfbeff03b541","url":"assets/js/8008369e.c4b0b9d5.js"},{"revision":"bcdb85aec8b337486bc239bd76958b4d","url":"assets/js/7fbc1a25.43215ef4.js"},{"revision":"315f6f385e3197f392d2ac34630d5fb6","url":"assets/js/7de88436.66e03c75.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"d90ea3be2219ab8bdb90282b7d51b27c","url":"assets/js/7ce5d7a1.6be0dad8.js"},{"revision":"70cc8febb73fb8da4b9d30f7da9c982c","url":"assets/js/7af217e3.6b4f5c8b.js"},{"revision":"bbe6327db0f8bf6ee418d94615c890b1","url":"assets/js/7a59c865.8b2cc370.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"d0a22d387fdb50c13c4ca8eb607d70b1","url":"assets/js/767bd1d1.4541aabc.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"c2368cbbb5f5119e9c5245b298cff129","url":"assets/js/65223696.f7a92b2b.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"1c8c96e670c4ee65c3aae1dff7b31195","url":"assets/js/61327162.746f601f.js"},{"revision":"1243273eddebc8ef5ae5040293efffc5","url":"assets/js/607acb04.ba6c4994.js"},{"revision":"b53e92d031e77aec6ae31d28df71b616","url":"assets/js/60374e5a.406fc446.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"ba816397c38503c35ee88f71333d9d63","url":"assets/js/5a762f2f.932663d9.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"b487b3a2e1b1c58f0141eaecbbd5c7a5","url":"assets/js/56fce896.09f49eb0.js"},{"revision":"e2948d20373f01774ed7e056182d57a4","url":"assets/js/55721269.163dc895.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"f2a399225e1ef5c3eda99d34975c603a","url":"assets/js/54513d10.d6c69a58.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"d476ad1c470bcddfb8f47b62713f7582","url":"assets/js/50000426.8996ac48.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"095de8ef4451f1cc4eaa2355bcf02e6e","url":"assets/js/4810d89a.918bb044.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"e725ba46c4da3c52221a7d6dccfc787c","url":"assets/js/448a5b13.47aa7c09.js"},{"revision":"466c861aadc05be2e59731f15978568f","url":"assets/js/43ea09b6.c6c7fb22.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"02451ddaf8357b2b28a64ed997dc61e7","url":"assets/js/41937f2e.a33297b1.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"44a73acf57134baeea19f8f8d98e5ceb","url":"assets/js/3ee3fb84.37c760ba.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"eb48aeea0ba2e32536d256ddbe48b3b5","url":"assets/js/3c2d29c6.9447af33.js"},{"revision":"2d54e74ce2add40c87528c118ca6e36f","url":"assets/js/3aef7316.45377a47.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"0a87474970f0dd8314d90fb1acc0552b","url":"assets/js/36f337b1.e9bac246.js"},{"revision":"eeec7f17e0f92d013ab5118c250857ee","url":"assets/js/36e6542e.a4965e71.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"a24a81210ad9957ce9922ba453063366","url":"assets/js/309520ad.3faa55cb.js"},{"revision":"ea4649edea05429164a759fb6fad17bf","url":"assets/js/304a23a0.612dfb90.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"97becd59486b72c2e67d3c19bf4458af","url":"assets/js/2dd9eb9e.385c84b1.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"5e8bb840cdb4337da6db1515056e65c3","url":"assets/js/28a0c100.015c74cc.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"746be718bd630b2c03e56975f615913a","url":"assets/js/24e6def7.6c3085a6.js"},{"revision":"989adfa855faa40c7e17a3c431f97d59","url":"assets/js/23d26d3d.fa571417.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"718efee1d32f21ce1508c22f6d8d04fc","url":"assets/js/191e8113.4727fa1b.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"3c106d0c81a2c0ed371e6c81bc88591a","url":"assets/js/179b82d4.2bb455c8.js"},{"revision":"f714d84a9bd6d84fe2468d4015283c8b","url":"assets/js/178b6201.1cd3ae8d.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"f4f068d02d09d9736dcd69bfd7a77fce","url":"assets/js/177ac620.6494e25d.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"9dfcd2c500165076bd666a945c6e1961","url":"assets/js/162c7fa0.338e08c2.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"5679ebd8f6ab45298e87c42a8b97dec5","url":"assets/js/1550c41f.ddfdacad.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"099e9539a0e929b7281be16dc21afae1","url":"assets/js/148a248b.2c1796c0.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"188ba03328672479409349735acd7a09","url":"assets/js/0e384e19.e545147e.js"},{"revision":"3c437914c02fc60526a1e0bfd9ea9c17","url":"assets/js/0a3b6be8.b7332a7b.js"},{"revision":"b7bdb35ce29f40007b92514b66c3a068","url":"assets/js/0962a2ae.ec660197.js"},{"revision":"f738fc4cbdbde1ea5098f3b3f07d21f7","url":"assets/js/0786d169.7d776a18.js"},{"revision":"6ae4b691b9dd5f8b8a50f07936ed73c0","url":"assets/js/04f403f8.f232aaee.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"08c954e47a84088adf6fc9fd8bc121a5","url":"assets/js/02366042.7d372d26.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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