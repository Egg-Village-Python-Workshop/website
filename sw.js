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
    const precacheManifest = [{"revision":"d93d4c44a636e4905d3d7ec442f7f081","url":"tw_stocks.json"},{"revision":"0b7c85bf249b3340e37f2b535e8b685c","url":"subscription.html"},{"revision":"b0652b7507fe079e866a79b74861b866","url":"quotes.html"},{"revision":"f9a285860fb82cb59087cb322a1d390f","url":"me.html"},{"revision":"dce53857ac6590d455732fcddedc8da2","url":"market-war-room.html"},{"revision":"3815c1a24290af101e69923e2eb8c251","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"0c6c838365f767010b617f757a9407bf","url":"index.html"},{"revision":"6a5f3f6ec8b847653411720128c03252","url":"games.html"},{"revision":"ee2187353d0c247465041a26849a1acd","url":"finance.html"},{"revision":"cc2bd19d110fe9f63f8189294554f29e","url":"feedback.html"},{"revision":"6de054747ebb25bb85f80acb9c0d7afc","url":"404.html"},{"revision":"d86ab602591aa883053cf3d222ba6a76","url":"tw_stocks/9958.json"},{"revision":"47ee8eb19f4ea2f670400efd82a3dd90","url":"tw_stocks/9955.json"},{"revision":"89b802230903a01ce648ac6a28cd5aa0","url":"tw_stocks/9946.json"},{"revision":"2fcadef46f43691b7c961ae91221c7bf","url":"tw_stocks/9945.json"},{"revision":"f7a061f95def56f8bbd7e347e04439d8","url":"tw_stocks/9944.json"},{"revision":"e6287644cdd40afcd749bd12668712d2","url":"tw_stocks/9943.json"},{"revision":"ce1fe6c0328f77ee79640bc62fa566c1","url":"tw_stocks/9942.json"},{"revision":"1388e1bc17ca1c6a535a20505d3a17a6","url":"tw_stocks/9941.json"},{"revision":"aff843ffd6159992c1bc0e776c430bb9","url":"tw_stocks/9940.json"},{"revision":"152fbbc48b0c083a7ee8601d754c9f74","url":"tw_stocks/9939.json"},{"revision":"20326171db5ea27cc9221cb4439a5a6d","url":"tw_stocks/9938.json"},{"revision":"0ee50b3fcfd769b6b79ea4bd57886c80","url":"tw_stocks/9937.json"},{"revision":"3d33128c78d1e3c5fbfa2764f233d73c","url":"tw_stocks/9935.json"},{"revision":"2dddfc1858599fe888d7770a624e6a0b","url":"tw_stocks/9934.json"},{"revision":"118a4f06d83445144a0c9d819800eb26","url":"tw_stocks/9933.json"},{"revision":"5aa0e7c5d37a531dbf8707897ab57ece","url":"tw_stocks/9931.json"},{"revision":"71eadaaca9622d4692046849b5af7bd5","url":"tw_stocks/9930.json"},{"revision":"712e9b5c789307a6487a37cef2cc2c94","url":"tw_stocks/9929.json"},{"revision":"28a599ff5f4f76026861cd22e2117b92","url":"tw_stocks/9928.json"},{"revision":"9fb146ec1a0e5b00a3d420c9f3f20fc4","url":"tw_stocks/9927.json"},{"revision":"333182255031b15c6894b19935f6789f","url":"tw_stocks/9926.json"},{"revision":"fc4223c68b4e1b3aea8c9518fcf34ccd","url":"tw_stocks/9925.json"},{"revision":"e54927405c7d5a0e03e73b499ac6e713","url":"tw_stocks/9924.json"},{"revision":"b0f4fbf01c87f890c44168bd884562ac","url":"tw_stocks/9921.json"},{"revision":"e216d3dbb152230178b375717f4bd7ea","url":"tw_stocks/9919.json"},{"revision":"b58355a4a6ea75d9cc3355c92a010967","url":"tw_stocks/9918.json"},{"revision":"060d6d9fe6cea14b96c582418a6bddee","url":"tw_stocks/9917.json"},{"revision":"11231c9fd4260ceb4f996d8bc3d90cf1","url":"tw_stocks/9914.json"},{"revision":"acc26c9bca7c1cfb14ba07ee9893caef","url":"tw_stocks/9912.json"},{"revision":"43ab27c6020566e10d4d22d1dd45b1d4","url":"tw_stocks/9911.json"},{"revision":"805d5a436f74ef44441a0b5a26368de7","url":"tw_stocks/9910.json"},{"revision":"960f2bd01ff805e0166c9670361f27e4","url":"tw_stocks/9908.json"},{"revision":"36f9fc7eca6d5f2a7dff9b7685e4f6df","url":"tw_stocks/9907.json"},{"revision":"f976de569ed0d563cfcfd11636d4c1a9","url":"tw_stocks/9906.json"},{"revision":"9b6a720c89fa36b818d81655daa7c08f","url":"tw_stocks/9905.json"},{"revision":"f85f5fea4104ffc392446d3e2b6b3a1f","url":"tw_stocks/9904.json"},{"revision":"454c087d133d124f0442f7a165abb7f4","url":"tw_stocks/9902.json"},{"revision":"c559db7014b48760526e5d3b3b5fc0b5","url":"tw_stocks/9802.json"},{"revision":"4165b7012c965021a06a0935f44e3a6e","url":"tw_stocks/8996.json"},{"revision":"0ef274b70855a2809432d8cb0bbabfd0","url":"tw_stocks/8940.json"},{"revision":"75cc8fb01ce321511865837ccea5ffb0","url":"tw_stocks/8926.json"},{"revision":"c10746034c1d462ec5903f3331ee63f1","url":"tw_stocks/8499.json"},{"revision":"ddc91afae5a3123b8afb94fbf37de0ba","url":"tw_stocks/8488.json"},{"revision":"e1acbb0675fd928f17eecf4c03a21bd4","url":"tw_stocks/8482.json"},{"revision":"00931f25537d9b2fc1f29c769b3d2fef","url":"tw_stocks/8481.json"},{"revision":"326fdb249d9ca1f81136b7b4279dfc14","url":"tw_stocks/8478.json"},{"revision":"f395e2cc4842876f4db2c774397446f8","url":"tw_stocks/8476.json"},{"revision":"0b865b524d1574495ce9eefda348ab7e","url":"tw_stocks/8473.json"},{"revision":"b96ba6ffdb806a54645bd69a031d7aa6","url":"tw_stocks/8467.json"},{"revision":"d2598c680e6f2f11b63b0a5abc51701e","url":"tw_stocks/8466.json"},{"revision":"a11af75f26e5af25037a1286569c385f","url":"tw_stocks/8464.json"},{"revision":"899078f5f02ecbfb4a18ad1faaa8ce07","url":"tw_stocks/8463.json"},{"revision":"7b957089dd7741cde7e67fc511736b4b","url":"tw_stocks/8462.json"},{"revision":"008347202322a82dd3b028ecc47018be","url":"tw_stocks/8454.json"},{"revision":"e600abdf3ca926b7c5a7ee8408eaa762","url":"tw_stocks/8443.json"},{"revision":"ce5ad7c89316f916cb4505c41f5adc0a","url":"tw_stocks/8442.json"},{"revision":"68dd34acd6f1d1099a4e03d72b6e15a2","url":"tw_stocks/8438.json"},{"revision":"0734d415b202a081a306afa1eda9c590","url":"tw_stocks/8429.json"},{"revision":"369e9a7b99f04afc75c2c42ccc26e9a9","url":"tw_stocks/8422.json"},{"revision":"14d78f06ab463f999f23778c7e877b05","url":"tw_stocks/8411.json"},{"revision":"5280b0152e80e8a0131dad376b0f1cfe","url":"tw_stocks/8404.json"},{"revision":"de07cbe2b4f43bea12379123f6c65b56","url":"tw_stocks/8374.json"},{"revision":"6d3a9bc271b33082be882728a44b1e9e","url":"tw_stocks/8367.json"},{"revision":"2b2b3ba19f38948f4446fc5d00b25434","url":"tw_stocks/8341.json"},{"revision":"0cfa94e8646f3545b5728a9071768bd0","url":"tw_stocks/8271.json"},{"revision":"d29bf09bf7c20ade8efdc524b50f2d98","url":"tw_stocks/8261.json"},{"revision":"076cf3c17c68fe0d43296f08f7b559ba","url":"tw_stocks/8249.json"},{"revision":"7052f34b7bd1ee00e75cc537f289f911","url":"tw_stocks/8222.json"},{"revision":"2df77655dd33a7f25264db8f9ea9c607","url":"tw_stocks/8215.json"},{"revision":"391a0aabcf7f32d176b507ffeea5cbc1","url":"tw_stocks/8213.json"},{"revision":"f265267e5b8caa8b30fd9867e1da9adf","url":"tw_stocks/8210.json"},{"revision":"d23f55efedc3426e49492558b8e35704","url":"tw_stocks/8201.json"},{"revision":"382338a180511543f39fdfe1d2cb43c1","url":"tw_stocks/8163.json"},{"revision":"a6ed299a7ee617a6605b0bc61479cfa7","url":"tw_stocks/8150.json"},{"revision":"b1ab3cdc7336294616caaf238bb40b1c","url":"tw_stocks/8131.json"},{"revision":"f6fe276b8be23606aa4714fc30110ad8","url":"tw_stocks/8114.json"},{"revision":"2fc08fa989e6fdf499729c3be7df4ab5","url":"tw_stocks/8112.json"},{"revision":"640d60adff3a161be03cae375521ec28","url":"tw_stocks/8110.json"},{"revision":"087e6cf919b82ffdd41bb5b599fd6451","url":"tw_stocks/8105.json"},{"revision":"8b1bdaf6c0165ab6dc45a9c436726078","url":"tw_stocks/8104.json"},{"revision":"04afca8a56ab1b5e7bc42a81c9bc22b9","url":"tw_stocks/8103.json"},{"revision":"9c98b4f2570bad431347220166ea31aa","url":"tw_stocks/8101.json"},{"revision":"5cf9648507467d363cf66fe9d00415c9","url":"tw_stocks/8081.json"},{"revision":"f6aa45e44fd926f49576a9e22b85a0b8","url":"tw_stocks/8072.json"},{"revision":"66a66d7662689d2bc6382c854458585a","url":"tw_stocks/8070.json"},{"revision":"802a1c754f2862711d2a419dc026f4ff","url":"tw_stocks/8046.json"},{"revision":"aa4e6d076ee6f89395f1cfe911ee7245","url":"tw_stocks/8045.json"},{"revision":"890a90d40012fb89bf7c22f3a03f9e9f","url":"tw_stocks/8039.json"},{"revision":"afd3e421a39cbf4d5f16b5b90de85399","url":"tw_stocks/8033.json"},{"revision":"87949774a1bd6b8d6257475d7c1fd542","url":"tw_stocks/8028.json"},{"revision":"f3ca812c3844426efe3a8a5533c35b80","url":"tw_stocks/8021.json"},{"revision":"d6ded3b2e21ad69e5a1e5f9f2d9078fb","url":"tw_stocks/8016.json"},{"revision":"c1526168475ed1f596738d1725bd3cba","url":"tw_stocks/8011.json"},{"revision":"e400c4ad9c6e39704e23b4a4c154e940","url":"tw_stocks/7822.json"},{"revision":"d0be2ffce37c2b2168738099afef9644","url":"tw_stocks/7799.json"},{"revision":"2a8b6e9230a05570129df380787d7dc0","url":"tw_stocks/7795.json"},{"revision":"ca153418040c3238d4c68df24499c65b","url":"tw_stocks/7791.json"},{"revision":"13703b833a6cded7adaae48ac3362ebe","url":"tw_stocks/7788.json"},{"revision":"c87aef32bc8ad0b226450aa5e4fe0314","url":"tw_stocks/7786.json"},{"revision":"626f0e730712302a35e5ca6e566ce9d9","url":"tw_stocks/7780.json"},{"revision":"1180ef4cf94e370d620fedf3f8c2fa25","url":"tw_stocks/7769.json"},{"revision":"3e915c1b5b1a2c98abe44d861f2403a9","url":"tw_stocks/7765.json"},{"revision":"b3ec1e789b7d0df7300a966de9adab29","url":"tw_stocks/7750.json"},{"revision":"cb95a85acfe70308ceb826536337b5c9","url":"tw_stocks/7749.json"},{"revision":"797b3f619ac6c054d39f68a05e533638","url":"tw_stocks/7736.json"},{"revision":"7598911b386b023fe1dc2a842631bf54","url":"tw_stocks/7732.json"},{"revision":"29d36b8b59e6e72253bf024085654ee6","url":"tw_stocks/7722.json"},{"revision":"6adb4531927f6386bfa436d898b37753","url":"tw_stocks/7721.json"},{"revision":"c2d38a32384581c9cd17b49c92ea8fe5","url":"tw_stocks/7711.json"},{"revision":"429c480b433b472eb409cae903eb5844","url":"tw_stocks/7705.json"},{"revision":"e2292882974a01aa11fe17a33ab04d87","url":"tw_stocks/6994.json"},{"revision":"ddb903c1856e295a3bd45b50bff2a067","url":"tw_stocks/6965.json"},{"revision":"49412c00e47f8850ad3c251020e21ff7","url":"tw_stocks/6962.json"},{"revision":"fe7096957c3b765d000d76803f76e8c0","url":"tw_stocks/6958.json"},{"revision":"4745be37187a4d0a66a0da2d8fa213d8","url":"tw_stocks/6957.json"},{"revision":"51014ea437a6f894b7bc26e18a43855b","url":"tw_stocks/6952.json"},{"revision":"eb9b40460d1daeb47961b618f3a7f776","url":"tw_stocks/6944.json"},{"revision":"87b34fd3af37a948c515d9b3a79908c9","url":"tw_stocks/6937.json"},{"revision":"53a2ec64f03e7d8bd23c926be10eece6","url":"tw_stocks/6936.json"},{"revision":"784dffefe9a18c0eb1586b1335f139d2","url":"tw_stocks/6934.json"},{"revision":"f9f2227f83ae1d2275601a7d36c838c4","url":"tw_stocks/6933.json"},{"revision":"b9b81993882bc63c03395728194e9430","url":"tw_stocks/6931.json"},{"revision":"b817648ee22ef724ba68711704888ebf","url":"tw_stocks/6928.json"},{"revision":"b85acf19fb803d24b284625256fa8266","url":"tw_stocks/6923.json"},{"revision":"4d025b117ba7b73a97653d270822080e","url":"tw_stocks/6919.json"},{"revision":"9a6caca7eee14f7a0e220a99defd83f5","url":"tw_stocks/6918.json"},{"revision":"6dc0a372abf1a130e2b169bbcefbcadd","url":"tw_stocks/6916.json"},{"revision":"d662330f5450bc89223970a07169d52b","url":"tw_stocks/6914.json"},{"revision":"0a79c0152c9aa554f84359f87e218d14","url":"tw_stocks/6909.json"},{"revision":"218c1fbf4921b925f69793635ef4123a","url":"tw_stocks/6906.json"},{"revision":"15df074089eed4a545c0de94b09b0faa","url":"tw_stocks/6902.json"},{"revision":"b5c460a85ab27da14cb5289944b754d5","url":"tw_stocks/6901.json"},{"revision":"9e63ed8372b367ff89296cd4f32db6d8","url":"tw_stocks/6890.json"},{"revision":"625628d4739e31a40157a6d3c60c0965","url":"tw_stocks/6887.json"},{"revision":"e5a1cc65958221de60810cdb8d91419b","url":"tw_stocks/6885.json"},{"revision":"752d1b7e86b3bcb6d83533fc7a16f51c","url":"tw_stocks/6873.json"},{"revision":"78430065fe826319ca16996b667ca463","url":"tw_stocks/6869.json"},{"revision":"54fe4251ac5e415f722d98758f23590c","url":"tw_stocks/6863.json"},{"revision":"c7ac825103ecb592a1018519c240730e","url":"tw_stocks/6862.json"},{"revision":"97be6cd8300fedc0fd17797bfc2d1617","url":"tw_stocks/6861.json"},{"revision":"f441fc3f23a191cbe52ce193ce4595e5","url":"tw_stocks/6838.json"},{"revision":"b48b71448a3fe4deef1f9c0b1d48846b","url":"tw_stocks/6835.json"},{"revision":"6f2ab141b580f266be06d128a9dcdb4b","url":"tw_stocks/6834.json"},{"revision":"45519dba6fec5fa2edf62138adb825a3","url":"tw_stocks/6831.json"},{"revision":"bc1fa883c6ea4b1d1b1b83c2c14914cf","url":"tw_stocks/6830.json"},{"revision":"2b006945413841b16bfc0f52074048c0","url":"tw_stocks/6807.json"},{"revision":"206971a3834a7f91a8872b72213b2ddb","url":"tw_stocks/6806.json"},{"revision":"4d2cb454400a662031f6c2edef09ea23","url":"tw_stocks/6805.json"},{"revision":"90612cf0fe59ba46284c13b86cccfa94","url":"tw_stocks/6799.json"},{"revision":"d4047bd4532b704317769a2c2a6d5db1","url":"tw_stocks/6796.json"},{"revision":"84ab64a062209845b42a8cd09a259f10","url":"tw_stocks/6794.json"},{"revision":"9e68802b8c28940ec28612f8c43cd3fd","url":"tw_stocks/6792.json"},{"revision":"4cc464ec4db5eb503be4c037eaf97ca8","url":"tw_stocks/6790.json"},{"revision":"85e1f71a4a6c635305f5a139fa520c8a","url":"tw_stocks/6789.json"},{"revision":"80513379dec0123b56d1ac194b11f7bd","url":"tw_stocks/6782.json"},{"revision":"27d135ab17d1b9d7d5b7f199e1965700","url":"tw_stocks/6781.json"},{"revision":"9502dc05ae4bc4200d15ed6766decb26","url":"tw_stocks/6776.json"},{"revision":"517b527d3481e5e429a192b8134b9d46","url":"tw_stocks/6770.json"},{"revision":"6bef9bb31930145fdb4c356d5fd749ce","url":"tw_stocks/6768.json"},{"revision":"1e6cf935799e60dc2abe3457b3f623fd","url":"tw_stocks/6757.json"},{"revision":"9a3b06ee14387bc6a445992c5a6e35f0","url":"tw_stocks/6756.json"},{"revision":"85e3d99736a3754817289aec2fb16886","url":"tw_stocks/6754.json"},{"revision":"0bb2053986f32df7ccda5f0d3142a2bd","url":"tw_stocks/6753.json"},{"revision":"6f6fd61343674283ef84e75de3a52a72","url":"tw_stocks/6743.json"},{"revision":"ba43da22e27cbb0407093f8fb7cf4d70","url":"tw_stocks/6742.json"},{"revision":"83df51f76646aca3b6839982db21e39c","url":"tw_stocks/6722.json"},{"revision":"8e85985f7f1376d3a93c008c8686a833","url":"tw_stocks/6719.json"},{"revision":"ca12a3281be19c5186ec0dd34ef08ea2","url":"tw_stocks/6715.json"},{"revision":"da04325e361dabfaf1b43707a3e9d03f","url":"tw_stocks/6706.json"},{"revision":"d1b5358734815b256399120f30f2c775","url":"tw_stocks/6698.json"},{"revision":"8cf5702d51923c3aa8236fc55b92ea96","url":"tw_stocks/6695.json"},{"revision":"b244f5ae1ac29716db9b4763e8789bad","url":"tw_stocks/6691.json"},{"revision":"2d99dd8821b4e5313e44e65a173e3d78","url":"tw_stocks/6689.json"},{"revision":"93e1e7adcdfe79d88e4eae6d1b732353","url":"tw_stocks/6674.json"},{"revision":"c51aafea9463562e6984f22cbedb58d8","url":"tw_stocks/6672.json"},{"revision":"0fdf47932014497d777fb7615d49c7e4","url":"tw_stocks/6671.json"},{"revision":"973c2bcc06063239bca56a11f848b65c","url":"tw_stocks/6670.json"},{"revision":"9c8ddc2d40c45ac7ac640e845c3cb3a3","url":"tw_stocks/6669.json"},{"revision":"311217e37a591b9794037327be348b1b","url":"tw_stocks/6668.json"},{"revision":"30bc63e4efa2de75597d3c5ec3075597","url":"tw_stocks/6666.json"},{"revision":"5ae0320b8f75e0d341e2f307809c024b","url":"tw_stocks/6658.json"},{"revision":"9ece179a2cded10b7d0a1292e2f028bb","url":"tw_stocks/6657.json"},{"revision":"737a36972a6eca312d6693f190207da5","url":"tw_stocks/6655.json"},{"revision":"991c3dbe7da081868a7cd4c1b2310e9a","url":"tw_stocks/6641.json"},{"revision":"b8499d5958345e6a62760a42ec14c02f","url":"tw_stocks/6625.json"},{"revision":"2664d243a7c2d5299faa642684cf6c47","url":"tw_stocks/6614.json"},{"revision":"6d9853a5df03ca4e4b0e0a967bf456e9","url":"tw_stocks/6606.json"},{"revision":"a218ddc18928cf800a8da1e2c1d962ce","url":"tw_stocks/6605.json"},{"revision":"689d24fce6c61f9953efe597c378bc17","url":"tw_stocks/6598.json"},{"revision":"8729cd9089f88337797fe65aac0b8da4","url":"tw_stocks/6592.json"},{"revision":"d4d6b6bf027760d485237c614e1bbcca","url":"tw_stocks/6591.json"},{"revision":"39adebd4893fea0bd7b19e9c120408ba","url":"tw_stocks/6589.json"},{"revision":"c9ec8e1565de7dac6fd7ed9dbcfd9562","url":"tw_stocks/6585.json"},{"revision":"c3de30a25325f5757748682e110f28ac","url":"tw_stocks/6582.json"},{"revision":"ab34573d36712e3bc8e12a94ccbb71ea","url":"tw_stocks/6581.json"},{"revision":"2a42b1f6e143e1bab57f7b9f447922ba","url":"tw_stocks/6579.json"},{"revision":"6436d8eb507b62c36184cb1386abc309","url":"tw_stocks/6573.json"},{"revision":"32482c85b885bc787fe3db5a12205084","url":"tw_stocks/6558.json"},{"revision":"756af839199fb77ac542e1ce206b8e5c","url":"tw_stocks/6552.json"},{"revision":"b91f75c7616a8a5a610cca694f280f72","url":"tw_stocks/6550.json"},{"revision":"90179499d0146d547094d27e08fc36d1","url":"tw_stocks/6541.json"},{"revision":"b84578e664c927c6294e9474db28f07f","url":"tw_stocks/6533.json"},{"revision":"c2614fba6af70fee25fab983deab2838","url":"tw_stocks/6531.json"},{"revision":"b4fe526dfe260dd68603e282f338ac06","url":"tw_stocks/6526.json"},{"revision":"3f6fffe88bd0ad263e4cb55488704bfd","url":"tw_stocks/6525.json"},{"revision":"ecefcf5f4ff77fcfd049be4d4d26b808","url":"tw_stocks/6515.json"},{"revision":"f351f9f8a18f321e7812fdf6cfe92bd6","url":"tw_stocks/6505.json"},{"revision":"ab371446924ecbf80770938b6075e15f","url":"tw_stocks/6504.json"},{"revision":"c45ed27f78f5299537540323c59bc98a","url":"tw_stocks/6491.json"},{"revision":"318a36215cb9f10b36a02757876ee7f6","url":"tw_stocks/6477.json"},{"revision":"acce9e3a8281e54dade548629cf26af3","url":"tw_stocks/6472.json"},{"revision":"e56f9dfe4709ca7e18d8e86933aace01","url":"tw_stocks/6464.json"},{"revision":"ba51ff758facca3019859222c7d8365c","url":"tw_stocks/6456.json"},{"revision":"5e1c839f265662919bbfcf0ca4b40b1f","url":"tw_stocks/6451.json"},{"revision":"7a97097310d1f8b81c0a1a7bee863c04","url":"tw_stocks/6449.json"},{"revision":"ab1022a6c548dd43385a9ef28ee495a6","url":"tw_stocks/6446.json"},{"revision":"57d44cda4529f378c11ecdb1d52aa648","url":"tw_stocks/6443.json"},{"revision":"1e2bcc71bbc6da4730f22d693aabd3c0","url":"tw_stocks/6442.json"},{"revision":"e8c59416638ce0e884d6bd6b54e599e4","url":"tw_stocks/6438.json"},{"revision":"2381b908beff3ab1167c09fcd6051f50","url":"tw_stocks/6431.json"},{"revision":"79087570d7ec0139ad8eb3a20dd1a4b2","url":"tw_stocks/6426.json"},{"revision":"610fa0f3db5dff9c884cdf22d5bf4c68","url":"tw_stocks/6416.json"},{"revision":"18eb229291387235507a20292af9d85b","url":"tw_stocks/6415.json"},{"revision":"f45c0b479a4f4042e1c0dcd054e96603","url":"tw_stocks/6414.json"},{"revision":"692adab8aa686b068b2c454e500b5904","url":"tw_stocks/6412.json"},{"revision":"cbc5c360bfd36484a1f97d72095cfd1d","url":"tw_stocks/6409.json"},{"revision":"644d1d2ae5535128342817d032bdf712","url":"tw_stocks/6405.json"},{"revision":"350b2696003f3586de60ac609bd8b596","url":"tw_stocks/6285.json"},{"revision":"8d60540cb5475d581308bd2f15a8e2dd","url":"tw_stocks/6283.json"},{"revision":"868b202d0e2ff6230cb2187cc0494f0d","url":"tw_stocks/6282.json"},{"revision":"4e06cc477be9de4e90964ce93d039667","url":"tw_stocks/6281.json"},{"revision":"b4b2dcb163208592323d34c0ee5e6cf1","url":"tw_stocks/6278.json"},{"revision":"9d2e9c9fa7a121cc592bd909868c7a35","url":"tw_stocks/6277.json"},{"revision":"83e7a7919531951c5bc19aaeb742916b","url":"tw_stocks/6272.json"},{"revision":"286567104de58da41f458c1404d04f4c","url":"tw_stocks/6271.json"},{"revision":"128ddde460436c2ca98bfb5ab36f324a","url":"tw_stocks/6269.json"},{"revision":"51329503587ab4ca57b7e2180446f69f","url":"tw_stocks/6257.json"},{"revision":"430fc39254ee8bb20d4354ea529207ae","url":"tw_stocks/6243.json"},{"revision":"f9c01b0a22b779930215c38e358ae332","url":"tw_stocks/6239.json"},{"revision":"dfe33a0ebdf19ba0cb713237da961123","url":"tw_stocks/6235.json"},{"revision":"17a0f381714979e39a8bff75fd08c948","url":"tw_stocks/6230.json"},{"revision":"eecc01c0a28119cb1be1df6d6b430331","url":"tw_stocks/6226.json"},{"revision":"6f073efeea20609eacf2790b99064856","url":"tw_stocks/6225.json"},{"revision":"b3e38dcb7292005d03d2e2e60d382a4a","url":"tw_stocks/6224.json"},{"revision":"ce96964bcd2f3d7ea808aaf49e8baf81","url":"tw_stocks/6216.json"},{"revision":"3fd5219208710c5b077c97226e5f3555","url":"tw_stocks/6215.json"},{"revision":"647873a176f8edb267905e95d9753378","url":"tw_stocks/6214.json"},{"revision":"d5be9684ec617147b1eabfddbebaa313","url":"tw_stocks/6213.json"},{"revision":"6c814c3d331a16827ee099dc09ad1159","url":"tw_stocks/6209.json"},{"revision":"f0292ffd6e7bdfa8e44e1216843413d1","url":"tw_stocks/6206.json"},{"revision":"9c6b63c264afc51cb36eaeda403ee688","url":"tw_stocks/6205.json"},{"revision":"e84a9fb79fba2dbabd22c67b9d6cb174","url":"tw_stocks/6202.json"},{"revision":"b8d38001ddf51d90e54f573d26df3bf3","url":"tw_stocks/6201.json"},{"revision":"b58fc3c3c54b65a60a00ae025c4fdb24","url":"tw_stocks/6197.json"},{"revision":"1eea3d19bec804cd5582afeb152d4079","url":"tw_stocks/6196.json"},{"revision":"1827dc5883aaef779cb9fcd535447ce2","url":"tw_stocks/6192.json"},{"revision":"fa0d28a7c1bf27cdea75349222e8afed","url":"tw_stocks/6191.json"},{"revision":"80c61e6ea4106e730fb01d5d887868c0","url":"tw_stocks/6189.json"},{"revision":"f432348b484733a78eca68cc71388d5a","url":"tw_stocks/6184.json"},{"revision":"42408a873d6312407893df7da2979861","url":"tw_stocks/6183.json"},{"revision":"15b69d43201af8dda53cce43684b7f35","url":"tw_stocks/6177.json"},{"revision":"166345e0f8a48a3c251fe88093a1ebc1","url":"tw_stocks/6176.json"},{"revision":"e2f78b9756a8733a03d9faaf6d3d9283","url":"tw_stocks/6168.json"},{"revision":"5894050cb902943de03893108847c570","url":"tw_stocks/6166.json"},{"revision":"07af2cc50eb700f33b8b3596f53f35db","url":"tw_stocks/6165.json"},{"revision":"ab5bd15ff05d33262fa14e42d00f663f","url":"tw_stocks/6164.json"},{"revision":"44af12add8601732ec14be5ab75c91da","url":"tw_stocks/6155.json"},{"revision":"f2e5ee8ef0dd8440adb5a347fb2e5f9b","url":"tw_stocks/6153.json"},{"revision":"5552c9de933e0bd54bd3eff826de11fb","url":"tw_stocks/6152.json"},{"revision":"4198ffc8098da0d43dfc112f6ca7ebe8","url":"tw_stocks/6142.json"},{"revision":"f53573ffbde5c8fdab5720f9c022dc9d","url":"tw_stocks/6141.json"},{"revision":"73cfd546950cfc684e523fe8f12fd9e4","url":"tw_stocks/6139.json"},{"revision":"1743e536275f1920596c4b794da8c5be","url":"tw_stocks/6136.json"},{"revision":"23830846c507f234b049164b9315d356","url":"tw_stocks/6133.json"},{"revision":"67c5c3a3afad8e95e768c068e2a60ff4","url":"tw_stocks/6128.json"},{"revision":"f46f01f0b18904f45f4ed5ec6729b6c2","url":"tw_stocks/6120.json"},{"revision":"7f87b0ce665cdccc2a5c3f18fc9ebc1e","url":"tw_stocks/6117.json"},{"revision":"ee9b02dfe51a7c573915885bd301fa96","url":"tw_stocks/6116.json"},{"revision":"fe644f5d79251148fce9402c81d66922","url":"tw_stocks/6115.json"},{"revision":"8a45c52e1f0eac492397b2b2a7117c55","url":"tw_stocks/6112.json"},{"revision":"23e669845bc9d7397ea5ea4a03636768","url":"tw_stocks/6108.json"},{"revision":"4f111e25525d6bb0d53ff8265cbc538a","url":"tw_stocks/6024.json"},{"revision":"ef3f812e5675ed89a493cb415740f400","url":"tw_stocks/6005.json"},{"revision":"fab338b2ff062cf8677e9755ca4e2f3c","url":"tw_stocks/5907.json"},{"revision":"779f6f902c4a974f7276b94e794e60ba","url":"tw_stocks/5906.json"},{"revision":"6c5fe022ad19b3cd6887661a4ab5763a","url":"tw_stocks/5880.json"},{"revision":"eaa2762c3ebdd446fc666f8d91f57854","url":"tw_stocks/5876.json"},{"revision":"6c4cddef6342397b06cb009d4ebcbae0","url":"tw_stocks/5871.json"},{"revision":"98ec4156714842773a2a64806b78ae2e","url":"tw_stocks/5706.json"},{"revision":"24ae7b3dcccfe5bbda82d6698a4ec631","url":"tw_stocks/5608.json"},{"revision":"0a908f6d8a25381a11d8d76bcf78bf08","url":"tw_stocks/5607.json"},{"revision":"a8081b11a7687c715f062c97f0c41e7b","url":"tw_stocks/5546.json"},{"revision":"eac8b53930b47729d51c8192933cd1db","url":"tw_stocks/5538.json"},{"revision":"bdc24b4553d10eb0f153b50a1a91deb7","url":"tw_stocks/5534.json"},{"revision":"b1eafe58fcef67ebcc8169142822c93c","url":"tw_stocks/5533.json"},{"revision":"42fad2a90588bf662ca23e3e6f0c61e3","url":"tw_stocks/5531.json"},{"revision":"435b3efc2987a439123a3445b9b82566","url":"tw_stocks/5525.json"},{"revision":"4ef3cd8267068722fd439ccb3d242876","url":"tw_stocks/5522.json"},{"revision":"66933e44b841d7707a1be739be55a8a5","url":"tw_stocks/5521.json"},{"revision":"c95f3eaa6d1ff7d085a53e9258814b63","url":"tw_stocks/5519.json"},{"revision":"4ed62c62e9ac821d48b3c2828e749ec4","url":"tw_stocks/5515.json"},{"revision":"3017eecdf965c6ed51b5c591a13fcbd9","url":"tw_stocks/5484.json"},{"revision":"f03ba6a4d8c7952479545966b68e6c51","url":"tw_stocks/5471.json"},{"revision":"2cae3b436a81db00268b8025495fe2c9","url":"tw_stocks/5469.json"},{"revision":"3fa89dee16fd5048b37debdb644b29c6","url":"tw_stocks/5434.json"},{"revision":"d624c13c4571767502c634590d803ee4","url":"tw_stocks/5388.json"},{"revision":"b4438c0378845964baa5fbdf74cbda4d","url":"tw_stocks/5306.json"},{"revision":"c511bf241eadb3ac6c6d4609d875998a","url":"tw_stocks/5292.json"},{"revision":"a58d6fb64cf41b17756b097fa81d4264","url":"tw_stocks/5288.json"},{"revision":"acf88009c9989e37335b6b805751e881","url":"tw_stocks/5285.json"},{"revision":"7bf48492f0c0c7eb9293eb38056c6993","url":"tw_stocks/5284.json"},{"revision":"811d013918b5f11e19c08463ac4297e3","url":"tw_stocks/5283.json"},{"revision":"6ab7332672a0fbcf56ef669d14dbefec","url":"tw_stocks/5269.json"},{"revision":"a0e678957eeffdca09e6cc695df244fe","url":"tw_stocks/5258.json"},{"revision":"c6076cf3bcc069eda55d8deb981a1764","url":"tw_stocks/5244.json"},{"revision":"752160178099f26c81fc7177acbfbe4a","url":"tw_stocks/5243.json"},{"revision":"cf2472c9768dbc5cae2a3cd72fd42fc4","url":"tw_stocks/5234.json"},{"revision":"94c280e4b51f36c60c5dc5fae3aa0c13","url":"tw_stocks/5225.json"},{"revision":"394bd31de55a45620a56fc12e56e28dc","url":"tw_stocks/5222.json"},{"revision":"27792aa905d9822787895da15194ad90","url":"tw_stocks/5215.json"},{"revision":"401bb189ca77630dc670b9962ddd2669","url":"tw_stocks/5203.json"},{"revision":"0a8e20b03ce08c3a2018c352526f21f7","url":"tw_stocks/5007.json"},{"revision":"1591e7c8e07d64a035307ec3eb400d3d","url":"tw_stocks/4999.json"},{"revision":"7e4511d25e11bab51381e2f63f1f37cb","url":"tw_stocks/4994.json"},{"revision":"888424a3bbc280d791c8c1a44cf5ddf0","url":"tw_stocks/4989.json"},{"revision":"bd46973e788e72ba06c8df6ff997b661","url":"tw_stocks/4977.json"},{"revision":"cab1b3b7523257e790d9ef414a4a8909","url":"tw_stocks/4976.json"},{"revision":"4077d658c49f1c96a5adeb0e67a012f0","url":"tw_stocks/4968.json"},{"revision":"e1f049891dc5a2bf31ec0d35ed19eb83","url":"tw_stocks/4967.json"},{"revision":"45d648f8ec70c4c90b9a1facbe1c32ce","url":"tw_stocks/4961.json"},{"revision":"5ae094804b9730d2b841ba1c590c535a","url":"tw_stocks/4960.json"},{"revision":"9ad6ac93332cd3ec62ed4afbba0c7543","url":"tw_stocks/4958.json"},{"revision":"44a19f4db9cb2bf660590db4fcef9eb3","url":"tw_stocks/4956.json"},{"revision":"e90b76ecc4fb5e5fb2a73f5c0b6929f0","url":"tw_stocks/4952.json"},{"revision":"a525480d1da6ddb1f16d2946fae944f0","url":"tw_stocks/4949.json"},{"revision":"17908c47d46ea5e6b95808dbaa8bc34b","url":"tw_stocks/4943.json"},{"revision":"e55fd5d0114b9ded97982e54834d22d9","url":"tw_stocks/4942.json"},{"revision":"d11adde0dc42f000ac255431ca45a8a0","url":"tw_stocks/4938.json"},{"revision":"619a3940833845566cfcfa2afb91a01c","url":"tw_stocks/4935.json"},{"revision":"cd62f68e4040df505b497791b7d786bd","url":"tw_stocks/4934.json"},{"revision":"9d276b001e57b7bbb5fad8dc57afe87c","url":"tw_stocks/4930.json"},{"revision":"0b389f73ea7b94bcd5863c9116c8cd8a","url":"tw_stocks/4927.json"},{"revision":"8be84cc3d0b813b098691d99d5b56ab9","url":"tw_stocks/4919.json"},{"revision":"d3a370c8c42f00011859b81b645b3969","url":"tw_stocks/4916.json"},{"revision":"28980c6a7a938b667d2e3eafab97c83a","url":"tw_stocks/4915.json"},{"revision":"44b7d33aae14bb384660c1605eca9c77","url":"tw_stocks/4912.json"},{"revision":"addbdaf87de062d4a22ad8f866a12f97","url":"tw_stocks/4906.json"},{"revision":"ca5cba68cca4ebf81eda8f3f646f3f05","url":"tw_stocks/4904.json"},{"revision":"f3dd9e7981da0fab1e140f9975964053","url":"tw_stocks/4807.json"},{"revision":"5d1a709319da2701d1b7bbf1b5581424","url":"tw_stocks/4771.json"},{"revision":"f5fa6bcdfe0820543d5544e255468079","url":"tw_stocks/4770.json"},{"revision":"371243462c26ed51580c2d9d3061bdae","url":"tw_stocks/4766.json"},{"revision":"124645fbdaac5c6833076fd6cc42160d","url":"tw_stocks/4764.json"},{"revision":"26591021935fc3f5b0739dba7d584297","url":"tw_stocks/4763.json"},{"revision":"2a06eca95201a13779ba6fff5ec3cde0","url":"tw_stocks/4755.json"},{"revision":"f4c068c52f05716703cde9240462767b","url":"tw_stocks/4746.json"},{"revision":"8f752a35d98185aa527e4b3a4b9b3fcd","url":"tw_stocks/4739.json"},{"revision":"be474644aae00ee7f0d816c92ae6568b","url":"tw_stocks/4737.json"},{"revision":"e65bb4bebf3858bab4134b6262ecb932","url":"tw_stocks/4736.json"},{"revision":"8aeb6ad299a82afd0746a2a1c036d76d","url":"tw_stocks/4722.json"},{"revision":"9c787cf214652cce687fbd7d34a15040","url":"tw_stocks/4720.json"},{"revision":"b29d29e6ea74da58cabf799341dea538","url":"tw_stocks/4588.json"},{"revision":"7ea0b580f0acadae6b2d5b0757199709","url":"tw_stocks/4585.json"},{"revision":"afeda93bacc1cde350b2ceb2591c31fe","url":"tw_stocks/4583.json"},{"revision":"fb33a7a21c5237cccb82a36c24d98af3","url":"tw_stocks/4581.json"},{"revision":"2c2248b43390155b4c2229f7e4836ca8","url":"tw_stocks/4576.json"},{"revision":"ad7367485551b94c154e7ac722bb5955","url":"tw_stocks/4572.json"},{"revision":"2ff1b47a0de34d22011a68b8df773770","url":"tw_stocks/4571.json"},{"revision":"7af6fc222d26de92cc210d75cfc970df","url":"tw_stocks/4569.json"},{"revision":"1aedb91a3f3c287349a746c7f88be39b","url":"tw_stocks/4566.json"},{"revision":"11ab8865d8d16fb8458ff64bedd7e221","url":"tw_stocks/4564.json"},{"revision":"536ea27dcd905e109a0ec33bbca5f8ca","url":"tw_stocks/4562.json"},{"revision":"0f56a58bcef325054678cdca54b4ed12","url":"tw_stocks/4560.json"},{"revision":"2502fb0a354a291b1aeb3de5f4c9986b","url":"tw_stocks/4557.json"},{"revision":"936e8045fcb0960a1cf7a8371929fbaf","url":"tw_stocks/4555.json"},{"revision":"0232da714ce88787224c642e8721805a","url":"tw_stocks/4552.json"},{"revision":"bbed51de28d1e285475b419c3622b1d0","url":"tw_stocks/4551.json"},{"revision":"b64f41f9f4767aeadbfc041566b4ba3f","url":"tw_stocks/4545.json"},{"revision":"04c6557e39590e86902736d31afbe4e3","url":"tw_stocks/4540.json"},{"revision":"6a1d5ca1b2ba594811f76a576b5b9687","url":"tw_stocks/4536.json"},{"revision":"e29a549444097338e44ec0d601c715c4","url":"tw_stocks/4532.json"},{"revision":"d39479ad362e0641ecd74c5dd01f5200","url":"tw_stocks/4526.json"},{"revision":"0ddb9dc478e7d3f8755e883c36d7d297","url":"tw_stocks/4441.json"},{"revision":"cd6d3703749693c807b23acce4644bf5","url":"tw_stocks/4440.json"},{"revision":"169a8f1a654f4e146bac70757bd9f547","url":"tw_stocks/4439.json"},{"revision":"4077b300daeb8c57213f2c7ee0057ad1","url":"tw_stocks/4438.json"},{"revision":"c761fd117f7f44769457ce53c7a1b371","url":"tw_stocks/4426.json"},{"revision":"3a9c71d25fff138406f18701f240a0ec","url":"tw_stocks/4414.json"},{"revision":"5411f477113db9d0a3d801ef34715824","url":"tw_stocks/4306.json"},{"revision":"2cdc3f7b2386ea41c1a3b14e2646e993","url":"tw_stocks/4190.json"},{"revision":"8182b8781526937034f4f839c1a1907e","url":"tw_stocks/4164.json"},{"revision":"3e05fd001e22e0ba6e66009d72c04316","url":"tw_stocks/4155.json"},{"revision":"52c2bbe78414e2ee76d9d426b736503e","url":"tw_stocks/4148.json"},{"revision":"af3a561f7853afd2c3c263a8b6eb1ab8","url":"tw_stocks/4142.json"},{"revision":"6863db270e256428bab9723a44f691c5","url":"tw_stocks/4137.json"},{"revision":"b3a65d16af7858b5d5eaaa40e552ae79","url":"tw_stocks/4133.json"},{"revision":"950f9598ec9eca84d712fb23cabab675","url":"tw_stocks/4119.json"},{"revision":"e053f73efdaec3dc01f05018899dee0c","url":"tw_stocks/4108.json"},{"revision":"093e07d6b8f5cf2e9ba9368feeec0764","url":"tw_stocks/4106.json"},{"revision":"78a51d5f11074e431b023ec37431126c","url":"tw_stocks/4104.json"},{"revision":"6682393903bb84979dcde7000aed7453","url":"tw_stocks/3717.json"},{"revision":"b6faefc9f03ee8fd7c10bb136af3150d","url":"tw_stocks/3716.json"},{"revision":"2b7a81c257f27899f475814b3f166401","url":"tw_stocks/3715.json"},{"revision":"69673d14be52800847682efddd10b6bf","url":"tw_stocks/3714.json"},{"revision":"5617462c14372930d6508172acc2ed96","url":"tw_stocks/3712.json"},{"revision":"e6f871e8892fd9d6083a3a7fcc51dede","url":"tw_stocks/3711.json"},{"revision":"0f5e38dc4ebe80995abb11956fb52b0e","url":"tw_stocks/3708.json"},{"revision":"8b88f5d6ea0faa69ba7105e614585972","url":"tw_stocks/3706.json"},{"revision":"b7c068bdb6228f4f52a14a0e858dfa5c","url":"tw_stocks/3705.json"},{"revision":"8f78c8ef333d5953678208fd50a71d59","url":"tw_stocks/3704.json"},{"revision":"2fc6a0a0ba3ea9eeffda1d4cab160d74","url":"tw_stocks/3703.json"},{"revision":"d0e8f17b0a410f4bf3774b349af65800","url":"tw_stocks/3702.json"},{"revision":"6765f6361aedb6df658c94f5daca4df1","url":"tw_stocks/3701.json"},{"revision":"09215c710becc50dab372eb829680504","url":"tw_stocks/3694.json"},{"revision":"2a19e5622d1a6d6063557ec728338a90","url":"tw_stocks/3686.json"},{"revision":"a1394d6eba7b817209e07235aa6e2cbc","url":"tw_stocks/3679.json"},{"revision":"5640c7c082e7a83f7effab945b150b6c","url":"tw_stocks/3673.json"},{"revision":"84d75b4bbdd1c163a59c351affa70aaa","url":"tw_stocks/3669.json"},{"revision":"3a0925715e3e1a08bb28e2509d7dcf92","url":"tw_stocks/3665.json"},{"revision":"ade76c1d52f9e106c09cd94732f13d69","url":"tw_stocks/3661.json"},{"revision":"e4fa370bc8d12efff5c1658ec300fafe","url":"tw_stocks/3653.json"},{"revision":"f2f1ee5db85607b8d34c135c824b4835","url":"tw_stocks/3652.json"},{"revision":"e6e09874c34fc7fe9b610f5737118d54","url":"tw_stocks/3645.json"},{"revision":"a6d667eeec01a30b37ee5f0d325c4017","url":"tw_stocks/3622.json"},{"revision":"ab0c46edd26183dd2c60e8e2395c6a6a","url":"tw_stocks/3617.json"},{"revision":"5fb653bcecf51cce31a48c4d5db3be1c","url":"tw_stocks/3607.json"},{"revision":"5de69722af3cf8e3018534cb9c5c352a","url":"tw_stocks/3605.json"},{"revision":"e0342b7c1ba92c54c08b63844665cb9f","url":"tw_stocks/3596.json"},{"revision":"fdf08fc15e581a7fe133227cdf4a5d26","url":"tw_stocks/3593.json"},{"revision":"aef6d2723b721128f7ab4506b4da8a98","url":"tw_stocks/3592.json"},{"revision":"0e0de0d552390ca71d19f9ff52de9875","url":"tw_stocks/3591.json"},{"revision":"3204bc6cadead62aca4ef79afc467b73","url":"tw_stocks/3588.json"},{"revision":"f10bc0ecd6d3a8d001619990f0fa6b41","url":"tw_stocks/3583.json"},{"revision":"3e4bae9d08b47f948b8a17b7e3e20e5a","url":"tw_stocks/3576.json"},{"revision":"f91ffeaca30bcabcda42a539c92d0aa1","url":"tw_stocks/3563.json"},{"revision":"5d635f543814ba2d42f25ec2664b7b65","url":"tw_stocks/3557.json"},{"revision":"03ce2816372d1f67ac290cd513419105","url":"tw_stocks/3550.json"},{"revision":"70969ca1c37f0573d78152296e6da1b0","url":"tw_stocks/3545.json"},{"revision":"d32c57d5cc439b077d90b9ca06d156e2","url":"tw_stocks/3543.json"},{"revision":"a0ecc482e72c4b2518adf93f43759dbe","url":"tw_stocks/3535.json"},{"revision":"2d940de229a05363d709176ba64be4ba","url":"tw_stocks/3533.json"},{"revision":"ebdef123a6988ebdf76672eb27ca12fe","url":"tw_stocks/3532.json"},{"revision":"f4eafcfa79f2f5d19e801434d6d92c32","url":"tw_stocks/3530.json"},{"revision":"969069b39e6612f79f33c7f08049d3cc","url":"tw_stocks/3528.json"},{"revision":"db521487feb67244f38bdce605f6dd42","url":"tw_stocks/3518.json"},{"revision":"e59ba1d8bf3a87659fe009363d68f443","url":"tw_stocks/3515.json"},{"revision":"85e6e9d1b38880ead8239506096b2524","url":"tw_stocks/3504.json"},{"revision":"d1103308a6d8b27dcf8b9aa1d82e1014","url":"tw_stocks/3501.json"},{"revision":"fce2904e0f57438a9650ef715d9fe3bb","url":"tw_stocks/3494.json"},{"revision":"37249714e138b0dc894b2ba5444a94cd","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"3c48f5b09a7de827251317d94c5a10fd","url":"tw_stocks/3450.json"},{"revision":"05c42f24140ccecf77a1c0bba6cb27dd","url":"tw_stocks/3447.json"},{"revision":"faba5cb8257541b6413c6e096061d851","url":"tw_stocks/3443.json"},{"revision":"b326f8e04cd6c02dc79feeea522ae558","url":"tw_stocks/3437.json"},{"revision":"7f9a7cf9239576fa0c6e2a8da626ebbc","url":"tw_stocks/3432.json"},{"revision":"5e0818b79cb5fee8f3a59cc95cb8c5ab","url":"tw_stocks/3419.json"},{"revision":"370bd8bbf4d67a02027a35045cbb0c16","url":"tw_stocks/3416.json"},{"revision":"60bebea388f5b41052f86cd33f0bb31c","url":"tw_stocks/3413.json"},{"revision":"38c923cb78b064bd9361aa9f13d0aa85","url":"tw_stocks/3406.json"},{"revision":"aecb1379021c57eb2afec28a3a605bfa","url":"tw_stocks/3380.json"},{"revision":"ecbd05fa403e9228e4d620f4a3c3c6f8","url":"tw_stocks/3376.json"},{"revision":"2a684d7a8529a12746cd303af8ae375d","url":"tw_stocks/3356.json"},{"revision":"ecb0dd85a05a2a2e1a1ad5ede043795a","url":"tw_stocks/3346.json"},{"revision":"bd634851d8940b66ec4fe3267e1b0f72","url":"tw_stocks/3338.json"},{"revision":"2fd0e35e8f17f9e9c3788087da4e4cb3","url":"tw_stocks/3321.json"},{"revision":"0f65d34ca58efd690066c5b9d76e2761","url":"tw_stocks/3312.json"},{"revision":"88dd1529581c85571272ed01c07a3177","url":"tw_stocks/3311.json"},{"revision":"4aa2744b94ce4bd6aefef6399fe2631d","url":"tw_stocks/3308.json"},{"revision":"86afbfdec45c260bcc8efb425d5632f9","url":"tw_stocks/3305.json"},{"revision":"eda9adb22c4ccb06c2be040d9a742e98","url":"tw_stocks/3296.json"},{"revision":"0afc47fb4139e875abab7b7c90ed1a71","url":"tw_stocks/3266.json"},{"revision":"0ac739c22ff007c096089bc7cd3489fa","url":"tw_stocks/3257.json"},{"revision":"55c8128e07976bce3dbb56bc6143f02f","url":"tw_stocks/3231.json"},{"revision":"19a4e122e3c6298c0e21fa6ad4afe93c","url":"tw_stocks/3229.json"},{"revision":"defcf852585845d5a651d52ec897decc","url":"tw_stocks/3209.json"},{"revision":"3580c4960a2c2a8670dd1b0ad1867a60","url":"tw_stocks/3189.json"},{"revision":"eb08116baa6034a4437545a00d6ceef1","url":"tw_stocks/3168.json"},{"revision":"8d91ff5239f6affc6a51922c6f4c8119","url":"tw_stocks/3167.json"},{"revision":"857166628ef483ef917233bb3ef64309","url":"tw_stocks/3164.json"},{"revision":"073a59b11b52229536a604e0121d29fa","url":"tw_stocks/3149.json"},{"revision":"bf8a503e928b6bd48a3e7a2bf0cf2f4e","url":"tw_stocks/3138.json"},{"revision":"2425f1c06638c4101db8dd7456610381","url":"tw_stocks/3135.json"},{"revision":"e595ed035234973ddb135c7455771a3a","url":"tw_stocks/3130.json"},{"revision":"15fdfc4d79a70930549ea687c5e9e6de","url":"tw_stocks/3094.json"},{"revision":"68812c865904a3677f5dda397aa867ef","url":"tw_stocks/3092.json"},{"revision":"6285bd429b033f5cfab40d119f32294a","url":"tw_stocks/3090.json"},{"revision":"2f064e447ec71f6b5636dd4984a57dcb","url":"tw_stocks/3062.json"},{"revision":"407353ab0ebcf9c8eee230820d6ecffa","url":"tw_stocks/3060.json"},{"revision":"c12911a6960f4fdd33e2191c820cc1f1","url":"tw_stocks/3059.json"},{"revision":"9f8623caebc71698b492a3856e4d9641","url":"tw_stocks/3058.json"},{"revision":"15c6817fed2d5c5168cdaa7ed7369159","url":"tw_stocks/3057.json"},{"revision":"95ab7ac1105dfc5b95484b162ebfadd9","url":"tw_stocks/3056.json"},{"revision":"0ddc571e88998b1f3ed3acb9c3c2abe2","url":"tw_stocks/3055.json"},{"revision":"7eec47e6168d0c1a4a221056f9f15e49","url":"tw_stocks/3054.json"},{"revision":"44d051dff461605905e42a3db25cc3aa","url":"tw_stocks/3052.json"},{"revision":"f3651627276ad196aefcb16011680e01","url":"tw_stocks/3051.json"},{"revision":"66d52d4cddf5e9b9509b8dc6d0c5261f","url":"tw_stocks/3050.json"},{"revision":"858bab306dbcfb1d12e342605aea9fe7","url":"tw_stocks/3049.json"},{"revision":"24030bedd65223ae83d9db7b0495bf9e","url":"tw_stocks/3048.json"},{"revision":"2935b241832d6ab76addcc85b09906e8","url":"tw_stocks/3047.json"},{"revision":"2f86b7569e92cdd6e3220d32b05654b5","url":"tw_stocks/3046.json"},{"revision":"f5502ed23f5d71faced426fe88f48943","url":"tw_stocks/3045.json"},{"revision":"ada84e680640441537d9a39af526483c","url":"tw_stocks/3044.json"},{"revision":"d8895dc10e3b0ca28d42bcae62d3f4bd","url":"tw_stocks/3043.json"},{"revision":"b8d6f4de2b9eede1e4c28a06f3f0a6f9","url":"tw_stocks/3042.json"},{"revision":"68e77bc1e705e0d504e7474ffa4700b7","url":"tw_stocks/3041.json"},{"revision":"79cfb54a64e7b841979cf3fbced0e7aa","url":"tw_stocks/3040.json"},{"revision":"8ba59265e6740d52ef068914252c8a6c","url":"tw_stocks/3038.json"},{"revision":"0c0fcadf5bf96f206fb9807612fe43a3","url":"tw_stocks/3037.json"},{"revision":"6268a1ff51f40292444f5b54cdf04baf","url":"tw_stocks/3036.json"},{"revision":"2c5d3d8c76598531b22cd64cc3dd5d1d","url":"tw_stocks/3035.json"},{"revision":"104e22ac72669e62faf36d70156ac263","url":"tw_stocks/3034.json"},{"revision":"16ea8a98d5f241a6c8c09dfc3b6f51b9","url":"tw_stocks/3033.json"},{"revision":"998fe448654bad43d6b812402d48aa03","url":"tw_stocks/3032.json"},{"revision":"1e7ab89366d0133dc51e29b86a044b7d","url":"tw_stocks/3031.json"},{"revision":"21beaf98480fd8bf30823c5c88dfa4f9","url":"tw_stocks/3030.json"},{"revision":"821292e695b8a7a62029ab7e95f3b9bb","url":"tw_stocks/3029.json"},{"revision":"92794476bab4f0fcc9bac4252c59d773","url":"tw_stocks/3028.json"},{"revision":"f43a058810d24831826376b2163dfa4c","url":"tw_stocks/3027.json"},{"revision":"b0100d11cd032b666db3de2df017a1fd","url":"tw_stocks/3026.json"},{"revision":"e668758425e9716bca3cc5e514e5be82","url":"tw_stocks/3025.json"},{"revision":"5450aefb6c51794335bc1e24fb416551","url":"tw_stocks/3024.json"},{"revision":"bf44f90c919710aa4b621ba85d8b970e","url":"tw_stocks/3023.json"},{"revision":"00c1ad193d6c6887a49be7c843634198","url":"tw_stocks/3022.json"},{"revision":"177e51eec7414e1dac4a4b018a2ab5ef","url":"tw_stocks/3021.json"},{"revision":"6534ffbd80a86953cb64cb7d9bd619e0","url":"tw_stocks/3019.json"},{"revision":"b9c31001a061d11b100e634099024d75","url":"tw_stocks/3018.json"},{"revision":"9741f23aacba11b94b7d1c39c3ded075","url":"tw_stocks/3017.json"},{"revision":"e4bcfc47adf06fafc38640726195607b","url":"tw_stocks/3016.json"},{"revision":"ee66396a1b9b9871a97c8ec11dd184f8","url":"tw_stocks/3015.json"},{"revision":"9121dc2373a7dbe119493bc63e8b4aaf","url":"tw_stocks/3014.json"},{"revision":"9b99fb1cb2aeb8518620be5f08ba7f9f","url":"tw_stocks/3013.json"},{"revision":"1655741209ad0c9e75de1696326fc1be","url":"tw_stocks/3011.json"},{"revision":"05eeab9ef8e52b8707882c7ff0a4890e","url":"tw_stocks/3010.json"},{"revision":"f89ec12a21106dd32f794d01dda86a26","url":"tw_stocks/3008.json"},{"revision":"9aa482224906e27873c018139b41feea","url":"tw_stocks/3006.json"},{"revision":"d7e3a71056ef7c73787de0b93b2b6c3c","url":"tw_stocks/3005.json"},{"revision":"a23a7ccc4c7be5c5d38866c8afe914c6","url":"tw_stocks/3004.json"},{"revision":"a808145c319b1eb07dedf24bad8b4589","url":"tw_stocks/3003.json"},{"revision":"a7046bb5024876bad0f7297a1a1cd2d3","url":"tw_stocks/3002.json"},{"revision":"4957336cd156ff3eaccb27f725fdb04f","url":"tw_stocks/2945.json"},{"revision":"40677539f42502acc29d77a5103f19cf","url":"tw_stocks/2939.json"},{"revision":"e87b954790516a50f409007c6bd71905","url":"tw_stocks/2929.json"},{"revision":"73200d65f5b19ba1805e3f34423a7984","url":"tw_stocks/2923.json"},{"revision":"1d4ee45008629e5e451e68033a7d7f46","url":"tw_stocks/2915.json"},{"revision":"01dd9f21c8f889781bf78d17fc50658c","url":"tw_stocks/2913.json"},{"revision":"69140f86a0fa368c2135ead67497bb53","url":"tw_stocks/2912.json"},{"revision":"a3e9f8a3553c1dd30d30ae4a617b91d3","url":"tw_stocks/2911.json"},{"revision":"e27afd1289aafa8ad90125fcb8294c72","url":"tw_stocks/2910.json"},{"revision":"dda8c3a300aae310ee8fe8c50e784714","url":"tw_stocks/2908.json"},{"revision":"3feae3eea0a967cf9cf80d25dd103dbc","url":"tw_stocks/2906.json"},{"revision":"bc8f1028a0305b0e3f6ccc7dae443d34","url":"tw_stocks/2905.json"},{"revision":"86211a50bac1a6b09cb8816c45cb7500","url":"tw_stocks/2904.json"},{"revision":"8bc82411ac19549819d54d13412e683e","url":"tw_stocks/2903.json"},{"revision":"dc408db3579eeef25153489a471400e4","url":"tw_stocks/2901.json"},{"revision":"45c27b2de3eab533335bbe40b51dde9e","url":"tw_stocks/2897.json"},{"revision":"4a46f56195f19484d88dd2b22e7a1f68","url":"tw_stocks/2892.json"},{"revision":"b4bd2db1ec2c6e161e78b03f24c0323e","url":"tw_stocks/2891.json"},{"revision":"41252ee24d940d55f18db68164b2628e","url":"tw_stocks/2890.json"},{"revision":"b02d74f65bfcee0c6397eb47596c0de1","url":"tw_stocks/2889.json"},{"revision":"0f4ee14177cf8063ce5ccdb0689caf24","url":"tw_stocks/2887.json"},{"revision":"a2d421ff41e6159e36d0f9f0210cf13c","url":"tw_stocks/2886.json"},{"revision":"c8a4acf08b9ccba9e9605c30a6cedcc7","url":"tw_stocks/2885.json"},{"revision":"e8314b31d69974e04bb122c1132c752c","url":"tw_stocks/2884.json"},{"revision":"382bd69280a1a6d8fbd7f4c245927bd9","url":"tw_stocks/2883.json"},{"revision":"fb6ca7c826166564ed39bb0ce86e22fa","url":"tw_stocks/2882.json"},{"revision":"7e7b5389451c62e383b9e13fc17d9bfb","url":"tw_stocks/2881.json"},{"revision":"9a5b33c43de2828678fb6432586ce716","url":"tw_stocks/2880.json"},{"revision":"95c33c69ba4936c2e76a01daa1280540","url":"tw_stocks/2867.json"},{"revision":"5d45e4477b815e4e279283bf1ed2c1c1","url":"tw_stocks/2855.json"},{"revision":"09c74e353c07f2cb17e516a1d63f2b64","url":"tw_stocks/2852.json"},{"revision":"3c3907c627e90f22c5b9b492e5674353","url":"tw_stocks/2851.json"},{"revision":"4c7c2bd675d626b5d1fb21cd7853e16d","url":"tw_stocks/2850.json"},{"revision":"e289a316b91920765432b226370f536f","url":"tw_stocks/2849.json"},{"revision":"8d02f13858fe90bc5da9f2813572cec6","url":"tw_stocks/2845.json"},{"revision":"583e7c7077289a02cb32c5682e08892f","url":"tw_stocks/2838.json"},{"revision":"e8162983de074ff407604a0a53f3d71c","url":"tw_stocks/2836.json"},{"revision":"96e707069380e4a36ec1d128bd637ba2","url":"tw_stocks/2834.json"},{"revision":"c5b67c668fa0a47bb0b706cb22b57a32","url":"tw_stocks/2832.json"},{"revision":"34f3762e12df578cac899577a81df48d","url":"tw_stocks/2820.json"},{"revision":"bf2b589363ce9aec39a1adc30a1f420f","url":"tw_stocks/2816.json"},{"revision":"bee5bcef4e519824e6f608d936a74999","url":"tw_stocks/2812.json"},{"revision":"c743ef354c2b6883e74fb49c95532058","url":"tw_stocks/2801.json"},{"revision":"e171e0d247dad037dd503cf6822d77c0","url":"tw_stocks/2762.json"},{"revision":"87f30e0d08ddc354e60119b150cdeaba","url":"tw_stocks/2753.json"},{"revision":"908c2f95a0a4ab937040851f332d4d2b","url":"tw_stocks/2748.json"},{"revision":"528d25020ceaf89a1795948249576083","url":"tw_stocks/2739.json"},{"revision":"c8f3afbfff99433bc4daa327c06ea7c5","url":"tw_stocks/2731.json"},{"revision":"b665458b6775399553e9e28a35a6bd8d","url":"tw_stocks/2727.json"},{"revision":"d4fe26dca5bd9a8ae6a441f61c8c6eff","url":"tw_stocks/2723.json"},{"revision":"70b0c8d45abf38361826593d0dd2cafc","url":"tw_stocks/2722.json"},{"revision":"73add39b755a22a446615bef90856663","url":"tw_stocks/2712.json"},{"revision":"ef652823265ca525169405775616e801","url":"tw_stocks/2707.json"},{"revision":"fe7dc2e80311368fd17677a0fe0b8dfa","url":"tw_stocks/2706.json"},{"revision":"076b7d97bc1e6d0ab634536344e1ceb0","url":"tw_stocks/2705.json"},{"revision":"33139005d8816d05ee9bdb1f069303ec","url":"tw_stocks/2704.json"},{"revision":"04a02eb5e900743ac88bd7324f391a48","url":"tw_stocks/2702.json"},{"revision":"fad2fee84a6d1f3da086e668d24f0408","url":"tw_stocks/2701.json"},{"revision":"ca1e063f7053faad8719ea6ea135de84","url":"tw_stocks/2646.json"},{"revision":"4618b0fb40344ab1aa38e3c412d43deb","url":"tw_stocks/2645.json"},{"revision":"244c274776f82c559fdf349bb64e5895","url":"tw_stocks/2642.json"},{"revision":"8d64ff986d8beff4f5f402d5b6788d4a","url":"tw_stocks/2637.json"},{"revision":"606613271a2e4c2979319dbf598b3801","url":"tw_stocks/2636.json"},{"revision":"dbbf2eabe8b27cb9b82b25aa34974e54","url":"tw_stocks/2634.json"},{"revision":"a7b5c125c489aad52f775efb8f1660dd","url":"tw_stocks/2633.json"},{"revision":"844acc604c6977818e932f8da75f8f26","url":"tw_stocks/2630.json"},{"revision":"58e440d2dd5e4d7a457c584e24be07fc","url":"tw_stocks/2618.json"},{"revision":"271586b9586b6495237484bfe6c5a2ed","url":"tw_stocks/2617.json"},{"revision":"b6780ce6e60b0e6ecee21f19613169c1","url":"tw_stocks/2616.json"},{"revision":"aaf0243bb035e90773bf117c668854d6","url":"tw_stocks/2615.json"},{"revision":"160e59620d6558cfe59357f456178d3f","url":"tw_stocks/2614.json"},{"revision":"e0e55783553bac6ff853285364b0caae","url":"tw_stocks/2613.json"},{"revision":"32d420ee0bd7324e830895903ef5b166","url":"tw_stocks/2612.json"},{"revision":"b1381aad2f718d37a99e992cf01a20fc","url":"tw_stocks/2611.json"},{"revision":"f9f46152f572681e3352baa1ef1f2e85","url":"tw_stocks/2610.json"},{"revision":"2dcdf04858be0d256d4ef8382e20df27","url":"tw_stocks/2609.json"},{"revision":"d5e0b93cce308e10fd14010b6dbcaed7","url":"tw_stocks/2608.json"},{"revision":"7c13759ae49a5d4a4ea9c555efb20e9d","url":"tw_stocks/2607.json"},{"revision":"ca4d3f03b4b55326125acef02efcf6e6","url":"tw_stocks/2606.json"},{"revision":"332b622ce0a5f9c8c85ebf33a9c9e71a","url":"tw_stocks/2605.json"},{"revision":"28795cd50deaff782137265e511a0f68","url":"tw_stocks/2603.json"},{"revision":"8efa823e47aeb52450b726e7ef8181f8","url":"tw_stocks/2601.json"},{"revision":"5eef6e56d4ab3b8ad61c9074d0dfc13d","url":"tw_stocks/2597.json"},{"revision":"8d55881d1c59601a26b5c0512a07a701","url":"tw_stocks/2548.json"},{"revision":"78af60b80afe5831adaceed785269c79","url":"tw_stocks/2547.json"},{"revision":"daddd39250ccb81fd4b81c5bbc9f65c4","url":"tw_stocks/2546.json"},{"revision":"a51b783d53f99f1fed862ca30aab6bd0","url":"tw_stocks/2545.json"},{"revision":"1e3def21a1e715d1344d16312ac553c1","url":"tw_stocks/2543.json"},{"revision":"568d18b11b1d614b1aafe31e9d1fd4ba","url":"tw_stocks/2542.json"},{"revision":"196985117a239b0c692d3a4f06ef01b3","url":"tw_stocks/2540.json"},{"revision":"5d8d2dce2a7a1119e72585ec92e776b0","url":"tw_stocks/2539.json"},{"revision":"859ada24cf724b1b7f5acc2d82873d28","url":"tw_stocks/2538.json"},{"revision":"6d04c4a335ae27559aa84e892600c533","url":"tw_stocks/2537.json"},{"revision":"fdf9786fdb4722506fe90788fe209d9f","url":"tw_stocks/2536.json"},{"revision":"3529c63e44276d58ff789710c9b61856","url":"tw_stocks/2535.json"},{"revision":"a83899a019516e5aac360b02fe94de86","url":"tw_stocks/2534.json"},{"revision":"8f678c05669049ba8b47ec7763cb4cb3","url":"tw_stocks/2530.json"},{"revision":"17753bded27cac135dc7f6b53c535c9f","url":"tw_stocks/2528.json"},{"revision":"4ef1cc264169b5aa3a7c28cdbd69e87f","url":"tw_stocks/2527.json"},{"revision":"a6d5dd901120a4b27288655882ce6d19","url":"tw_stocks/2524.json"},{"revision":"bdcd48a82a12a7f85c594490db91e96a","url":"tw_stocks/2520.json"},{"revision":"5b0f07d808627edb76a471f8dad2520a","url":"tw_stocks/2516.json"},{"revision":"c40e9f0afca21f5d6f3349ae3926d35c","url":"tw_stocks/2515.json"},{"revision":"6fa759341658b8c7f75adfd8871e837a","url":"tw_stocks/2514.json"},{"revision":"c115b4f10b0695a8e806c86d5bbb8762","url":"tw_stocks/2511.json"},{"revision":"96c3c6aa8677d01bbd63cf45b7654996","url":"tw_stocks/2509.json"},{"revision":"bd93e46bc448aefabd3b3b9881675ca3","url":"tw_stocks/2506.json"},{"revision":"91c138920ba6d64e28936f79dde43e37","url":"tw_stocks/2505.json"},{"revision":"52da0a2611ef2eb70bedbde5b7d7a29d","url":"tw_stocks/2504.json"},{"revision":"405d601ce8179f3fa09cc70b35649288","url":"tw_stocks/2501.json"},{"revision":"7d7e01471beee28e7b45d670e7287c76","url":"tw_stocks/2498.json"},{"revision":"1897745a45e4856baced6cf58d93531f","url":"tw_stocks/2497.json"},{"revision":"279bcd83816783fe120e4cb13be4abf1","url":"tw_stocks/2496.json"},{"revision":"40708ac2bd7467ec3f83136b3591a407","url":"tw_stocks/2495.json"},{"revision":"b8034034eee23b66006a4364a3fe690c","url":"tw_stocks/2493.json"},{"revision":"cf933e9e39597151cfb1df74fdb8b806","url":"tw_stocks/2492.json"},{"revision":"24620d604ff7cd485f9810d25a13b115","url":"tw_stocks/2491.json"},{"revision":"294cb14f00d4675b9f70984c70bdcf61","url":"tw_stocks/2489.json"},{"revision":"bb538ab2157c5b85cdaf523a2ef09f9b","url":"tw_stocks/2488.json"},{"revision":"1c0295107d63a00c3e652f6c64fef565","url":"tw_stocks/2486.json"},{"revision":"ad69702371d0b32422785d4f187a0073","url":"tw_stocks/2485.json"},{"revision":"91eb55c39562b95fa4f87bb64ea93b16","url":"tw_stocks/2484.json"},{"revision":"08f5733af74973ae3ce55a184136caf6","url":"tw_stocks/2483.json"},{"revision":"fe1fead5258a2ba107d50d2dee7031a8","url":"tw_stocks/2482.json"},{"revision":"3758d4fcbc2dd67e00468b06ab52dae7","url":"tw_stocks/2481.json"},{"revision":"f9309f1e828290f96f83475c0284b3ea","url":"tw_stocks/2480.json"},{"revision":"64298c829dcd9ab8053225477081e8ad","url":"tw_stocks/2478.json"},{"revision":"f87082e19388db53f0b92516260dc4ac","url":"tw_stocks/2477.json"},{"revision":"bb281a81ce0da85168cbbbfc76ec1036","url":"tw_stocks/2476.json"},{"revision":"436a50dea94453f9cf3b59bb6702d36c","url":"tw_stocks/2474.json"},{"revision":"a3755a362e2aadfe40962e9d43ec028f","url":"tw_stocks/2472.json"},{"revision":"7ae939426285169c399aa464b24373f6","url":"tw_stocks/2471.json"},{"revision":"4c706cc330264bee67626ecdd55dd557","url":"tw_stocks/2468.json"},{"revision":"a631d41bbb5573d124aec9bb6b3b1088","url":"tw_stocks/2467.json"},{"revision":"1b0313d57891fb0b412ed1dcc94e7845","url":"tw_stocks/2466.json"},{"revision":"f3ef1380168eb15086e3bea2ffada10b","url":"tw_stocks/2465.json"},{"revision":"4945b4bc8e00b5d27d02970c6f100586","url":"tw_stocks/2464.json"},{"revision":"3eb4b9c700b840c4921afeb5e631c0fc","url":"tw_stocks/2462.json"},{"revision":"dcb87f1a2ceb7ade5f8118c149e41f6e","url":"tw_stocks/2461.json"},{"revision":"3bdf4e43c234843fa2429865ab9ba02a","url":"tw_stocks/2460.json"},{"revision":"a8f2bf9d14e9db4b15fa4b9f261d1b9e","url":"tw_stocks/2459.json"},{"revision":"268b609c72ba9b0e369fb946ee2ea334","url":"tw_stocks/2458.json"},{"revision":"27aad1a5b61fca29bf989133773ec3cc","url":"tw_stocks/2457.json"},{"revision":"98b4e0b775f6f47d75b5da526862e499","url":"tw_stocks/2455.json"},{"revision":"47691e326f5d3c1ed5999ab4622271ea","url":"tw_stocks/2454.json"},{"revision":"52c69371ce2f039d017b4953b18d0c75","url":"tw_stocks/2453.json"},{"revision":"6d58d247ebd005fa398116ff032306b9","url":"tw_stocks/2451.json"},{"revision":"486695f04817df327cf271aa9cd156d5","url":"tw_stocks/2450.json"},{"revision":"5229629d159e03ea8f1a31384e413f2d","url":"tw_stocks/2449.json"},{"revision":"119ba1246b9c1d97ff64f77182dbe393","url":"tw_stocks/2444.json"},{"revision":"c1745dadcf9800bb70ef97bbd448a84c","url":"tw_stocks/2442.json"},{"revision":"400a0c485018d9b82689ab66035574d3","url":"tw_stocks/2441.json"},{"revision":"4770a6e1625cd761b8b1c007cb4a2911","url":"tw_stocks/2440.json"},{"revision":"9e511a59acaff8f62d7e6eedf181b279","url":"tw_stocks/2439.json"},{"revision":"d8d51e306051094dbb223d8b19a6d619","url":"tw_stocks/2438.json"},{"revision":"b206b93c528939b5ec04a016e61f01f5","url":"tw_stocks/2436.json"},{"revision":"77875e05763953c2afbc0848eff06db3","url":"tw_stocks/2434.json"},{"revision":"f9457f4ad1d810a44cec65518d54bad5","url":"tw_stocks/2433.json"},{"revision":"890b44f5d55a1bb038d0a3471252d035","url":"tw_stocks/2431.json"},{"revision":"aa3d9f11af8448dfcb46f6c7c7cc8415","url":"tw_stocks/2430.json"},{"revision":"9d1986e9d6ceab92129b700bd099d0a7","url":"tw_stocks/2429.json"},{"revision":"0cdd63a5f02d601cda93cc4a7fd466cf","url":"tw_stocks/2428.json"},{"revision":"75c2eb0e62b36780ea2419aa6d48aa29","url":"tw_stocks/2427.json"},{"revision":"2dc1c282dd66cc9f366d04b4900027f4","url":"tw_stocks/2426.json"},{"revision":"0da7eafa1f5364cdb1aaa13a2864c59e","url":"tw_stocks/2425.json"},{"revision":"b67a63c4f0a186210298202da5e7c284","url":"tw_stocks/2424.json"},{"revision":"e833cebe55129fd889c7f9ca6b2640d4","url":"tw_stocks/2423.json"},{"revision":"3d3b65911475b1e4454081b5394afa26","url":"tw_stocks/2421.json"},{"revision":"9bef4e67ffe8f0180472aa1c8d0de427","url":"tw_stocks/2420.json"},{"revision":"1b30ad46beb1117c8e9b485f41ae42ac","url":"tw_stocks/2419.json"},{"revision":"718a23769e4cb2605d8eede087a5fc81","url":"tw_stocks/2417.json"},{"revision":"868b7be1aefaf2a2803d1f2aa3d88758","url":"tw_stocks/2415.json"},{"revision":"fb700107f81c034d2a2b2e52d55ffc9e","url":"tw_stocks/2414.json"},{"revision":"0f9d87c0b4602cdec7c9e0290499c31f","url":"tw_stocks/2413.json"},{"revision":"abada16cc21a500bcd36fb52cc4738d1","url":"tw_stocks/2412.json"},{"revision":"8847df81cdd955e7c675b53db7556ec9","url":"tw_stocks/2409.json"},{"revision":"f369dcf27e3e2b370c7fa88964cc9f0a","url":"tw_stocks/2408.json"},{"revision":"b06ed92255a46b6bd9a6610b0c42eeb8","url":"tw_stocks/2406.json"},{"revision":"781d128748ff35d5a27e714ec06d9311","url":"tw_stocks/2405.json"},{"revision":"3ee20a0d3cf355c979572d4918fa3ae3","url":"tw_stocks/2404.json"},{"revision":"36e644c53fd5e584d81e580ef6bb7492","url":"tw_stocks/2402.json"},{"revision":"a8fdf06c550cd3d3a8421327ee1c3703","url":"tw_stocks/2401.json"},{"revision":"c06c850617073cca7a37ac96ca73f064","url":"tw_stocks/2399.json"},{"revision":"57982960bbf7a7eec7527bca8533ac85","url":"tw_stocks/2397.json"},{"revision":"2f9de812bbfc8025a5ce3edddda25aa7","url":"tw_stocks/2395.json"},{"revision":"424dde7acd56f9ae2baef120ca7a4f13","url":"tw_stocks/2393.json"},{"revision":"425fcef81caffdac492708442bd524bf","url":"tw_stocks/2392.json"},{"revision":"464c0dc1256fc3b9d9a4b884982f610a","url":"tw_stocks/2390.json"},{"revision":"54b18c90e11b0582c064d38e123f57f7","url":"tw_stocks/2388.json"},{"revision":"44380b550b9f16db4bf57aa494baf6b4","url":"tw_stocks/2387.json"},{"revision":"546b16e187764f8bffa019ae3b52d489","url":"tw_stocks/2385.json"},{"revision":"1c97c5865592917d6b5dd557abd8dd73","url":"tw_stocks/2383.json"},{"revision":"2dada44fe3284a29f18f1e313bc69cfe","url":"tw_stocks/2382.json"},{"revision":"05b46f635b57949453cd5d0a79fe76a5","url":"tw_stocks/2380.json"},{"revision":"e5c7656ed2ed419f52e1d345e1d49f88","url":"tw_stocks/2379.json"},{"revision":"77de355c8af0140fd173caa44ea4f46f","url":"tw_stocks/2377.json"},{"revision":"4448d642836849e695d8a619815f2d8c","url":"tw_stocks/2376.json"},{"revision":"f45c33fa5fe08c8565407b8e7ddbe7f7","url":"tw_stocks/2375.json"},{"revision":"8b3394fb1a365434e2694259b3dfc54e","url":"tw_stocks/2374.json"},{"revision":"cb2b164c0df6011491ae384a2b30c17e","url":"tw_stocks/2373.json"},{"revision":"d5e19edae68d6e4749a568c84688b881","url":"tw_stocks/2371.json"},{"revision":"3645eb66d6589e6c0b5900de772ae2f4","url":"tw_stocks/2369.json"},{"revision":"d92c9a865d7160aebd08dbabed64d214","url":"tw_stocks/2368.json"},{"revision":"4e4078837b7072ff95692e321e132aed","url":"tw_stocks/2367.json"},{"revision":"036bc240b200331cc09be4e78f6425c5","url":"tw_stocks/2365.json"},{"revision":"297381583689b8488c4d615bb59e60eb","url":"tw_stocks/2364.json"},{"revision":"f741c1ac54ba5bc3d8cde8ce800ce9d6","url":"tw_stocks/2363.json"},{"revision":"bf4a4124b62b75839b9f756911e0441e","url":"tw_stocks/2362.json"},{"revision":"d98926db412105481613612ea5037367","url":"tw_stocks/2360.json"},{"revision":"8dc07523afe66d78d0f31d79492be201","url":"tw_stocks/2359.json"},{"revision":"7cf77d8f2fff60124ef6aac187844c25","url":"tw_stocks/2357.json"},{"revision":"5a8ccddae2cd18a051708d1da60015ea","url":"tw_stocks/2356.json"},{"revision":"f171c05f1dffc92ce145e417d3c8fcc9","url":"tw_stocks/2355.json"},{"revision":"20700178a9764078c9a412153d0ea45e","url":"tw_stocks/2354.json"},{"revision":"0e137869d92a4f8a2d06fb23250c208d","url":"tw_stocks/2353.json"},{"revision":"d401f9b2f27259e2afa5e46a31749f79","url":"tw_stocks/2352.json"},{"revision":"59c41d5065ccdb117cc845fd339c4ad9","url":"tw_stocks/2351.json"},{"revision":"d62a0fa48111d872edf4b01666838278","url":"tw_stocks/2349.json"},{"revision":"1fe692a5f9b345a7dd851932b8a378a2","url":"tw_stocks/2348.json"},{"revision":"996bc489cdfae07e3f23a49047f26de5","url":"tw_stocks/2347.json"},{"revision":"19546756572fec95755a5e0661e3dfbd","url":"tw_stocks/2345.json"},{"revision":"a4269aac6b19e52ac389130857e3e668","url":"tw_stocks/2344.json"},{"revision":"ae56103d8d44a1ae187d918902e606e5","url":"tw_stocks/2342.json"},{"revision":"426fa453aee02f1a9deab90f60e98d94","url":"tw_stocks/2340.json"},{"revision":"8020f9fa83d1c4f7c14ae93f153b8e93","url":"tw_stocks/2338.json"},{"revision":"15a0af38b151c2b1cc17d815e659486d","url":"tw_stocks/2337.json"},{"revision":"966289473d4f5eca99fc12fb9cf0eaf8","url":"tw_stocks/2332.json"},{"revision":"dcab61774125ec9856bf32f91bfe0ce4","url":"tw_stocks/2331.json"},{"revision":"89bf8060cb7eb70b9a4763fe6958b4e0","url":"tw_stocks/2330.json"},{"revision":"34a4501f38178caa22cea5be820bb07b","url":"tw_stocks/2329.json"},{"revision":"b1814a93fd6f7a957ccaec875f001769","url":"tw_stocks/2328.json"},{"revision":"2e34974b87ba90ce050577451d76b3ff","url":"tw_stocks/2327.json"},{"revision":"a74fd550adbeaf60a288ced210de501d","url":"tw_stocks/2324.json"},{"revision":"513efd6b7d7aebe78731f07bef44e206","url":"tw_stocks/2323.json"},{"revision":"a9e183f7a0b4140d55336988373d0cee","url":"tw_stocks/2321.json"},{"revision":"f692a24a8b6071060c16a8feca20e8bc","url":"tw_stocks/2317.json"},{"revision":"4250bb70d1b126ed73f59e5862d2ff3d","url":"tw_stocks/2316.json"},{"revision":"fa7767573be73715ef1ec1321253295a","url":"tw_stocks/2314.json"},{"revision":"01a63d5642532542d03104c5e3b72b82","url":"tw_stocks/2313.json"},{"revision":"c238843f1e14563c6eb98938dee55d3a","url":"tw_stocks/2312.json"},{"revision":"99b4477f9a3d9d1f050f429fbdc82b9a","url":"tw_stocks/2308.json"},{"revision":"3f5e05f0f99f4722a978e0be86c6da9b","url":"tw_stocks/2305.json"},{"revision":"7b52c0e0ba43b9dd445d9c4d62fa342e","url":"tw_stocks/2303.json"},{"revision":"27c50441f29e6e368a0ca2827332e4e3","url":"tw_stocks/2302.json"},{"revision":"473a6b956b9ad7c72e76a6838f3c94a7","url":"tw_stocks/2301.json"},{"revision":"c61d7d1bcbc316052522fec52adc1363","url":"tw_stocks/2250.json"},{"revision":"87ea9d94b24a379e808908eaaa06f970","url":"tw_stocks/2248.json"},{"revision":"f9ae36349d54b17b289a9e0b6e11076d","url":"tw_stocks/2247.json"},{"revision":"ae8742eeb8472589674c1fa8d1964ed9","url":"tw_stocks/2243.json"},{"revision":"5c85bd84508e2753a6ea4f5c60abe820","url":"tw_stocks/2241.json"},{"revision":"bd89b96c97bab88a373f0eeefbd92f88","url":"tw_stocks/2239.json"},{"revision":"147e4f81056f32dd0d7b7579672d869d","url":"tw_stocks/2236.json"},{"revision":"6acf3e1da0434bc2d9d9953baee76df5","url":"tw_stocks/2233.json"},{"revision":"83ecdc981344af8f974f06deb70020f2","url":"tw_stocks/2231.json"},{"revision":"4f8dd81415502fb4b20f133aaaf62c90","url":"tw_stocks/2228.json"},{"revision":"66ab55bd09ba44519b0bf0b79be67407","url":"tw_stocks/2227.json"},{"revision":"345c7392a1800c68e31f2ee5b3e8ef7f","url":"tw_stocks/2211.json"},{"revision":"e99849f25cb4e7ae47532994fc4594f0","url":"tw_stocks/2208.json"},{"revision":"d73350bf79172f5bc9e4e75d658e8112","url":"tw_stocks/2207.json"},{"revision":"eecfbcfb167bd4ba2afff2168c02e2e1","url":"tw_stocks/2206.json"},{"revision":"717840211482f0c06e198f79c665938e","url":"tw_stocks/2204.json"},{"revision":"59e4d93593c49e86d93a6fd04fc7d979","url":"tw_stocks/2201.json"},{"revision":"bfa2c6d1ea34a4c282201e1005b6ecda","url":"tw_stocks/2115.json"},{"revision":"45db59353a5cb8ecb9460260a17bf51f","url":"tw_stocks/2114.json"},{"revision":"dd60b21e1780169cae20f9a397d32d73","url":"tw_stocks/2109.json"},{"revision":"cb61e81ddb04ac236f0e8bfbf36cf375","url":"tw_stocks/2108.json"},{"revision":"fba115901363dcfa53587329674d5588","url":"tw_stocks/2107.json"},{"revision":"29a04cef8f364502a93aae5a740a756e","url":"tw_stocks/2106.json"},{"revision":"ac6c5af1c155ce52e44e009c7939db34","url":"tw_stocks/2105.json"},{"revision":"6f645a5f39b18e573ca53752a142d7d5","url":"tw_stocks/2104.json"},{"revision":"40370022b121ce71a8ac9f9c68eb3ae5","url":"tw_stocks/2103.json"},{"revision":"d36da2915c7dd352e1760d04f246fdc2","url":"tw_stocks/2102.json"},{"revision":"e0ba9d9e542df957f9c4f2a6f202631a","url":"tw_stocks/2101.json"},{"revision":"76d65eeaa33d8d4a55eb535a3ca9cbed","url":"tw_stocks/2072.json"},{"revision":"968edc2fed75ec7bd1acdd96ac8feec2","url":"tw_stocks/2069.json"},{"revision":"86c958efbda81a63c87588b1eba2737b","url":"tw_stocks/2062.json"},{"revision":"1c95aa74bd95a7443103d2bcfa509945","url":"tw_stocks/2059.json"},{"revision":"204000ccb3c2a1dbc9ec973998ea3110","url":"tw_stocks/2049.json"},{"revision":"88021f302483529c82e2e30260319245","url":"tw_stocks/2038.json"},{"revision":"19009a16577650123a6f48730590aca8","url":"tw_stocks/2034.json"},{"revision":"a0e1ad74e89b2ec339582440a37df225","url":"tw_stocks/2033.json"},{"revision":"bfcc328d2eb4a66b72f5b57c8b269336","url":"tw_stocks/2032.json"},{"revision":"cbffe3a92a10315667c2cff9c294c18c","url":"tw_stocks/2031.json"},{"revision":"299b87a62c512a2c2e1f009f24d1db73","url":"tw_stocks/2030.json"},{"revision":"5cdea7df4867ca6efc0f35217f03c4cc","url":"tw_stocks/2029.json"},{"revision":"d03e1b1d1fe5fcc3a79a243599febc72","url":"tw_stocks/2028.json"},{"revision":"54cb5e848af5143dbb180fe7225399f6","url":"tw_stocks/2027.json"},{"revision":"bbbb5ed2e26dd622fa3fbb510ff6b02e","url":"tw_stocks/2025.json"},{"revision":"08230780e7a8751205806d6dcc1ea985","url":"tw_stocks/2024.json"},{"revision":"f5dd7884eafae1e18debde2a6a2b6c1b","url":"tw_stocks/2023.json"},{"revision":"c40f0eb5db2dac80912a90e2dfd07d47","url":"tw_stocks/2022.json"},{"revision":"248a8de509a5d24952a42399a04ab4b9","url":"tw_stocks/2020.json"},{"revision":"e6da7b99f050bd4d9e9fca98f537e8e2","url":"tw_stocks/2017.json"},{"revision":"08c2217a11238b6d2528e6b3742271e4","url":"tw_stocks/2015.json"},{"revision":"13106f149ee8b2f6606f243a174ddacc","url":"tw_stocks/2014.json"},{"revision":"19bbbfa0e10728745025c4c6b2041820","url":"tw_stocks/2013.json"},{"revision":"00c80694dbcba17df206b8787e3daa6f","url":"tw_stocks/2012.json"},{"revision":"a672efc6886f1526ce36ba532e1b3dbf","url":"tw_stocks/2010.json"},{"revision":"eb111a9b744de092f5c49cef33d213c4","url":"tw_stocks/2009.json"},{"revision":"4b3aa36873eea7202703aafab843d605","url":"tw_stocks/2008.json"},{"revision":"9a2ff4dcc57bc835311bc161b7bc5cf6","url":"tw_stocks/2007.json"},{"revision":"23295290de5b7f69271b45f71f48cc0c","url":"tw_stocks/2006.json"},{"revision":"55d9b4eb734707eaba1b0f29c5b2e2d9","url":"tw_stocks/2002.json"},{"revision":"25fa75a622b965869277dc5d4dc8ec87","url":"tw_stocks/1909.json"},{"revision":"b793c208321732e0d1c54150fab49644","url":"tw_stocks/1907.json"},{"revision":"0602109cded742ec506fc41f711c45ba","url":"tw_stocks/1906.json"},{"revision":"2a5595928b8b53509dc71ad9357a6a2d","url":"tw_stocks/1905.json"},{"revision":"820bc2320e6fa6accbd17dc7e7795af0","url":"tw_stocks/1904.json"},{"revision":"5860e7598471728d03a9b6a56fa85c1b","url":"tw_stocks/1903.json"},{"revision":"db461e27bde3e8962b48bf46ee8dbd67","url":"tw_stocks/1817.json"},{"revision":"42dcf0cc9e099f69d2a6adfb49b0628b","url":"tw_stocks/1810.json"},{"revision":"9b983d5abe38cf1d12e8135fea971349","url":"tw_stocks/1809.json"},{"revision":"e2d9ce35120eb6305a77beca83c8d625","url":"tw_stocks/1808.json"},{"revision":"3ff03498063cc444cd039ad8d8cd5578","url":"tw_stocks/1806.json"},{"revision":"4e577f58a0cfb85bfa45e13dce8df3e8","url":"tw_stocks/1805.json"},{"revision":"e8be34702591eb8dc8f40d9d955a024c","url":"tw_stocks/1802.json"},{"revision":"446e5dd6b78a75e0b0cafb041c1f735b","url":"tw_stocks/1795.json"},{"revision":"5e923e6d93eebdfab7ffb96fffde5f78","url":"tw_stocks/1789.json"},{"revision":"b7cabe7723315a2d92a5ae29cd799848","url":"tw_stocks/1786.json"},{"revision":"3eb43786a480abf975694ee8862b8498","url":"tw_stocks/1783.json"},{"revision":"687ef997bdb8338df2421df08f687daa","url":"tw_stocks/1776.json"},{"revision":"7ca2574c4d854e23ab4d04b79ec8af71","url":"tw_stocks/1773.json"},{"revision":"598972f1dd5307dff6319a974aeadc56","url":"tw_stocks/1762.json"},{"revision":"21f9d3bf597834d19e73bc48a2737321","url":"tw_stocks/1760.json"},{"revision":"e3a29c3b80b0d512d2d3433dfaaa37f0","url":"tw_stocks/1752.json"},{"revision":"109e39fd61dae3b0462f1026d3d79319","url":"tw_stocks/1737.json"},{"revision":"d9eaee96a0d15877c505e4b4c5f70910","url":"tw_stocks/1736.json"},{"revision":"134b052ace9693f24f79fb2abd5fa013","url":"tw_stocks/1735.json"},{"revision":"3197eea2f93c537b2bf16c6af85c219b","url":"tw_stocks/1734.json"},{"revision":"e151cabdaec554b2d5323ddbc9f4c26b","url":"tw_stocks/1733.json"},{"revision":"1193e87d96717fbcbf98e90b514f8e28","url":"tw_stocks/1732.json"},{"revision":"d766aff41460e58b206f7f32585c3096","url":"tw_stocks/1731.json"},{"revision":"ece297fdbe6122d312f2c49ba2bc63db","url":"tw_stocks/1730.json"},{"revision":"25eb4656145d6edb740de4b650789230","url":"tw_stocks/1727.json"},{"revision":"88ce93b96f957c416b375e39b139ac39","url":"tw_stocks/1726.json"},{"revision":"7e7e108c36257c8b46f9382d7e8a35b2","url":"tw_stocks/1725.json"},{"revision":"5a97dee4ab786b360154c9853c0a5d87","url":"tw_stocks/1723.json"},{"revision":"f219891056e077852eca39435d60da64","url":"tw_stocks/1722.json"},{"revision":"59fb78463d6ae27edb8bd658e996e183","url":"tw_stocks/1721.json"},{"revision":"f69288769ddaed2435b6483c7f399a8d","url":"tw_stocks/1720.json"},{"revision":"428314880580dbc9488d11864ea84d19","url":"tw_stocks/1718.json"},{"revision":"25e0ed87882c05ef33f86921c7634e2b","url":"tw_stocks/1717.json"},{"revision":"6985f741dd600a1aed3e6c0b59abbf0c","url":"tw_stocks/1714.json"},{"revision":"a407d362a05e9cdc37d8f6218c64ce29","url":"tw_stocks/1713.json"},{"revision":"2bcf9de455ab13ab35292de2a2a20f6d","url":"tw_stocks/1712.json"},{"revision":"2c86891775a95043e75305ba88e84023","url":"tw_stocks/1711.json"},{"revision":"66baf335cd5b994ecaf596035ca251ea","url":"tw_stocks/1710.json"},{"revision":"dad04153da0324bcbb56a939fe0aa2b7","url":"tw_stocks/1709.json"},{"revision":"a2999a470f87ce19ce46bfdb1b823fb0","url":"tw_stocks/1708.json"},{"revision":"f1ef2e8a780c71502220947b32e76dfc","url":"tw_stocks/1707.json"},{"revision":"f30e9a162e3131abe6fa8f075fb83c52","url":"tw_stocks/1702.json"},{"revision":"d3da97d2828af49b18bc5aece39d6545","url":"tw_stocks/1626.json"},{"revision":"f76cfcbaf9347ea2a21e70c00673c546","url":"tw_stocks/1623.json"},{"revision":"5e334ff1b18c585082c2d4767f483c54","url":"tw_stocks/1618.json"},{"revision":"6f4a2c797cf20c7c463a07f1c8521b6a","url":"tw_stocks/1617.json"},{"revision":"c0882f631d6a5535576c32be4e375541","url":"tw_stocks/1616.json"},{"revision":"182ed944d6551e99925aff727268b51b","url":"tw_stocks/1615.json"},{"revision":"3c9e21abc3ee8d8f71c3633627a7bfd6","url":"tw_stocks/1614.json"},{"revision":"23091e27ac8582b71990091683d206a1","url":"tw_stocks/1612.json"},{"revision":"e3a14c668b08a776c799f3f32281b1e1","url":"tw_stocks/1611.json"},{"revision":"705fa74e28caab63e54fd8af67e8e298","url":"tw_stocks/1609.json"},{"revision":"c25577e605a353a4e0023bc35e85b1b2","url":"tw_stocks/1608.json"},{"revision":"29fe107469a1864296cc8124f57e28c0","url":"tw_stocks/1605.json"},{"revision":"60a3ae2a870b3afa3c58fff98fecc130","url":"tw_stocks/1604.json"},{"revision":"18cd9b65c5853b4dc513752b0c71401b","url":"tw_stocks/1603.json"},{"revision":"70ec1b04950c49e7a2b32a6c892088f7","url":"tw_stocks/1598.json"},{"revision":"0878868b2519c227c717ef4b010fe2f3","url":"tw_stocks/1597.json"},{"revision":"fc7e833dfb66be70eb41f4c2fb4c95ec","url":"tw_stocks/1590.json"},{"revision":"c65446153f7ec2a2e403220927171e83","url":"tw_stocks/1589.json"},{"revision":"36dc0cfc4a6c46f54a23dab3b593b4c7","url":"tw_stocks/1587.json"},{"revision":"872a2235da750a4dca4fd11bd0bd98d7","url":"tw_stocks/1583.json"},{"revision":"9127f8c6abb9ac66e8a9cb2aa34fec8c","url":"tw_stocks/1582.json"},{"revision":"56fa41e61a11f711824adf8b925374d1","url":"tw_stocks/1568.json"},{"revision":"f786d221182ea038a5b778175b0c8934","url":"tw_stocks/1563.json"},{"revision":"b73bc20092c50ace75e5beb44ed4c0f4","url":"tw_stocks/1560.json"},{"revision":"bd1eec24c8d741ff456641435f0432fa","url":"tw_stocks/1558.json"},{"revision":"1d3207ab05f10f8016a9fbe9931f9ee0","url":"tw_stocks/1541.json"},{"revision":"7bc6be3db9a6be89bdb72bc0500c3817","url":"tw_stocks/1540.json"},{"revision":"9e900e780e8e873a3bfff457b9a9aab6","url":"tw_stocks/1539.json"},{"revision":"504a0239c9963abe9420b764fd17a52c","url":"tw_stocks/1538.json"},{"revision":"e587c614045fae25fedf9555d201c68f","url":"tw_stocks/1537.json"},{"revision":"36b47638a5be9f9844a2383ca67419f3","url":"tw_stocks/1536.json"},{"revision":"e497e17292b85ad2bf5f9a422199b38e","url":"tw_stocks/1535.json"},{"revision":"ed694529d32c3cde2e72fc5484711c26","url":"tw_stocks/1533.json"},{"revision":"9c89bd83ad741eb2a6c7fafd2e551087","url":"tw_stocks/1532.json"},{"revision":"da32d6dc72493c775fc11ae248b727ac","url":"tw_stocks/1531.json"},{"revision":"aa27cfb7d6e6f56496a96204a15c8a66","url":"tw_stocks/1530.json"},{"revision":"3cd597cd6ebd9be46c15363f9fa96143","url":"tw_stocks/1529.json"},{"revision":"83efec39d6bcf798f3dfb37336c3981f","url":"tw_stocks/1528.json"},{"revision":"6ff0fbd013fbb028884de4c307b9014d","url":"tw_stocks/1527.json"},{"revision":"37785a05dc0282d8f14a540aa0291b2e","url":"tw_stocks/1526.json"},{"revision":"44e8a6b2cc40d5f55bd547ff878c00e7","url":"tw_stocks/1525.json"},{"revision":"1ef74912af75765643309abf939e537c","url":"tw_stocks/1524.json"},{"revision":"519bdf1576b1f0ebf44de48dec7efa65","url":"tw_stocks/1522.json"},{"revision":"9a991136b47be3eda904f8efaafd6749","url":"tw_stocks/1521.json"},{"revision":"920058ad922d781ca75b91e0af49e229","url":"tw_stocks/1519.json"},{"revision":"9f2803dae71e3cb9066d4a8f95f558f6","url":"tw_stocks/1517.json"},{"revision":"c614f66c058f5bfd08f36988f554f73c","url":"tw_stocks/1516.json"},{"revision":"fe5af6658d594ee938b05b7ffe3016c4","url":"tw_stocks/1515.json"},{"revision":"43e500647a9762a7c0b620dff5ba2867","url":"tw_stocks/1514.json"},{"revision":"a03f159321f23082898f50ccb68ec3bc","url":"tw_stocks/1513.json"},{"revision":"5318d17ce9f6180e19907e52e9fe0dec","url":"tw_stocks/1512.json"},{"revision":"7dfa37f246d774eb1fb91c85c062a4ea","url":"tw_stocks/1506.json"},{"revision":"bfe02bfab02a67687c651b558307b378","url":"tw_stocks/1504.json"},{"revision":"5879a05cefdc62760c5633aa9611b2f0","url":"tw_stocks/1503.json"},{"revision":"ca79fd5c19cc1204161fd45873734177","url":"tw_stocks/1477.json"},{"revision":"d339d6e6724d68df9cb3ae2e0416b6d6","url":"tw_stocks/1476.json"},{"revision":"83a0a4ee0c0a7ffe1bb29db9b3fb595c","url":"tw_stocks/1475.json"},{"revision":"f6f598c1469a4737d479e3dbd4330318","url":"tw_stocks/1474.json"},{"revision":"fab756264fefe427511adb97fb9b0d31","url":"tw_stocks/1473.json"},{"revision":"70922aa64efb85ef89bb21c3c79bff2d","url":"tw_stocks/1472.json"},{"revision":"25bc5afdc2056bc4cb7ff6d5d0b8f33a","url":"tw_stocks/1471.json"},{"revision":"2a63db7439bf2f28ffd3bd928977b017","url":"tw_stocks/1470.json"},{"revision":"e15e478b277e623f38c1338050572819","url":"tw_stocks/1468.json"},{"revision":"4810891d584bd6fe000e19cc5a97bb5b","url":"tw_stocks/1467.json"},{"revision":"6b427b14ff189b267b581331940fef6e","url":"tw_stocks/1466.json"},{"revision":"e7ee53afcfb3f57963177761a218e896","url":"tw_stocks/1465.json"},{"revision":"82d377f184627ec79eeca56b1fe24279","url":"tw_stocks/1464.json"},{"revision":"1a2d4f0a78c6fd5bf9a32c973f95e5d4","url":"tw_stocks/1463.json"},{"revision":"faf87b3e807a383c7309cf8568523b6c","url":"tw_stocks/1460.json"},{"revision":"452841ad10e0b4c8487659904f0d2994","url":"tw_stocks/1459.json"},{"revision":"c8c8c464a11aaae8c537cd4d8abcc7d5","url":"tw_stocks/1457.json"},{"revision":"8273a53e8c78071ddeb06126736400ee","url":"tw_stocks/1456.json"},{"revision":"5cdc3d2be3f5977150313d0bd762c82a","url":"tw_stocks/1455.json"},{"revision":"05cbf29b98cf2ed71caff4394e33b961","url":"tw_stocks/1454.json"},{"revision":"f74dd4a9070eddbc79cf8ff9d3dcae07","url":"tw_stocks/1453.json"},{"revision":"0d5337da7b6db6da95b0382f9bd61d24","url":"tw_stocks/1452.json"},{"revision":"22c5d0c40a36a9ba66add3bb315e93cf","url":"tw_stocks/1451.json"},{"revision":"0c1060dc33f393fdbafcae2a2fa93add","url":"tw_stocks/1449.json"},{"revision":"1f8a7cb3e8445494fce386a5b73ba590","url":"tw_stocks/1447.json"},{"revision":"3c59472529296ad9b510a846254a21fa","url":"tw_stocks/1446.json"},{"revision":"7474c830ed80645df4e1b1d685cbb2c8","url":"tw_stocks/1445.json"},{"revision":"e2f973c600ad56814045c0dd7726a2a5","url":"tw_stocks/1444.json"},{"revision":"550e0e4e2dfeaad44998fdfc0c88776c","url":"tw_stocks/1443.json"},{"revision":"2121fafd41e4de466d859c05d064feff","url":"tw_stocks/1442.json"},{"revision":"9b17cec7f08d1b1d02819c351d60411f","url":"tw_stocks/1441.json"},{"revision":"99c2d032257112578229dc6f9617e700","url":"tw_stocks/1440.json"},{"revision":"12fa3ecc8bdd386f20bce9cf700c11ab","url":"tw_stocks/1439.json"},{"revision":"0215e8ed6ea0f7be6be7d0b4a3878759","url":"tw_stocks/1438.json"},{"revision":"49a34ed200b18acef4116b5869065524","url":"tw_stocks/1437.json"},{"revision":"30cfbdc50565ebb4beebaa0ba750d9bb","url":"tw_stocks/1436.json"},{"revision":"a9f27cbf71835913f06b65be02bb5c43","url":"tw_stocks/1435.json"},{"revision":"055caa2b5d8b12a636ba3c2e73035419","url":"tw_stocks/1434.json"},{"revision":"e77fcc9a64f8f4f5cb98010c82e673a2","url":"tw_stocks/1432.json"},{"revision":"a8de375c623dc8a95933d368ef2d5e0d","url":"tw_stocks/1423.json"},{"revision":"5aa57895e9e6604ad04bb02c2c794fb1","url":"tw_stocks/1419.json"},{"revision":"1c224eed98e3280c6396ffe591c3a5b9","url":"tw_stocks/1418.json"},{"revision":"aa738ccea13ca3bf55761b8c4ce0527a","url":"tw_stocks/1417.json"},{"revision":"85c12ba431d2f93c2079d05ce5f8acae","url":"tw_stocks/1416.json"},{"revision":"f8667876ef93101df06843627a7b1a4b","url":"tw_stocks/1414.json"},{"revision":"71876d56d5e252024823fa10be87f437","url":"tw_stocks/1413.json"},{"revision":"b38010ebc4e225f5353a4b97d87836a2","url":"tw_stocks/1410.json"},{"revision":"11dc347df343bc080d62d4d4bef4cc25","url":"tw_stocks/1409.json"},{"revision":"8148f053ab9c29ca924b06e92aea3aa4","url":"tw_stocks/1402.json"},{"revision":"509721ab0b55904bca5747ecf0d102ca","url":"tw_stocks/1342.json"},{"revision":"3037eda93ccbebbd930e71b02365c49e","url":"tw_stocks/1341.json"},{"revision":"2ba270fe5a5f841b7a3a1dd4a8dc6ea1","url":"tw_stocks/1340.json"},{"revision":"fa77ab77ecb92e55eadd7e17f702ee04","url":"tw_stocks/1339.json"},{"revision":"3660887e1f80faef7e6179ecf951d51b","url":"tw_stocks/1338.json"},{"revision":"4a0a3d868168ce5463e312dadfe10ecf","url":"tw_stocks/1337.json"},{"revision":"a84585cddc64cb905553d53d3833eb3a","url":"tw_stocks/1326.json"},{"revision":"28476c7fa649c4ed6387944029e9ec9a","url":"tw_stocks/1325.json"},{"revision":"bb852b1b5df199febf7ec7acfb267b6f","url":"tw_stocks/1324.json"},{"revision":"737383f06c17328c9c397efd77980e7f","url":"tw_stocks/1323.json"},{"revision":"744b5f8ca213fc9c02f8ecf5157e1dc1","url":"tw_stocks/1321.json"},{"revision":"57bf3f25247065dfa0ff3faf7095155b","url":"tw_stocks/1319.json"},{"revision":"14004509a893540f2903633db020f2b5","url":"tw_stocks/1316.json"},{"revision":"344b81d4cf995b14976aeb7d18a126c4","url":"tw_stocks/1315.json"},{"revision":"fabf8638e5bfe3b2fe913f0c1b0cb37f","url":"tw_stocks/1314.json"},{"revision":"7940ab65403a80d13bc33e2aff455df1","url":"tw_stocks/1313.json"},{"revision":"092f8de68f516d9e4ce6e2a81ed73e8f","url":"tw_stocks/1312.json"},{"revision":"ace51a90945e0a0d26987cb9bdecfeae","url":"tw_stocks/1310.json"},{"revision":"d7129d6892de8a6b1402f69fe3877f3e","url":"tw_stocks/1309.json"},{"revision":"5066243742bc5f77c19b7f3b6abf4639","url":"tw_stocks/1308.json"},{"revision":"f3db7d8600701031420b1acfcdf1273a","url":"tw_stocks/1307.json"},{"revision":"126ffcfdd59a2f1e4e8eac1e0ef07c1d","url":"tw_stocks/1305.json"},{"revision":"d4845092c48dc5413c35a0938695fc1f","url":"tw_stocks/1304.json"},{"revision":"f116a276558e504ddc40357f7522d2ec","url":"tw_stocks/1303.json"},{"revision":"c926d02609314cc8f8323d42ac270d74","url":"tw_stocks/1301.json"},{"revision":"d27cd5d9daa1151c37dd75a425dd8928","url":"tw_stocks/1256.json"},{"revision":"43d1eb26b69267d28d2f21bd95ce2e3b","url":"tw_stocks/1236.json"},{"revision":"f742864581b2ce589c0d4ea6f0581d9b","url":"tw_stocks/1235.json"},{"revision":"61285ccdd8f13a0265b3845d79d0600a","url":"tw_stocks/1234.json"},{"revision":"7a150d4d4346b25e27be4a64d476b2e6","url":"tw_stocks/1233.json"},{"revision":"7dcc972d8e32965e6fd1bfb081d5d4fd","url":"tw_stocks/1232.json"},{"revision":"e43800112da18dc6b0314d7f9800f857","url":"tw_stocks/1231.json"},{"revision":"226967ff53d2802d0bb4353b91b68bf9","url":"tw_stocks/1229.json"},{"revision":"5ceca199cdf57bd44991bb579bca940b","url":"tw_stocks/1227.json"},{"revision":"96729d3240c41a4b1fda826991795eea","url":"tw_stocks/1225.json"},{"revision":"14790b225d38b7f3820a9fc497c50162","url":"tw_stocks/1220.json"},{"revision":"dba39d9fe0f362674200dce1b52edff1","url":"tw_stocks/1219.json"},{"revision":"4459a64c8137fe3ed3532c0d09cc308c","url":"tw_stocks/1218.json"},{"revision":"943918d0e00650eab8b07882c0ff0300","url":"tw_stocks/1217.json"},{"revision":"8b691882c7cb3f763846ead8dbbdc6e2","url":"tw_stocks/1216.json"},{"revision":"848170cde6ac4b201911220fcaea24c0","url":"tw_stocks/1215.json"},{"revision":"fa4ba84e05f1c116b6f8529180cbb479","url":"tw_stocks/1213.json"},{"revision":"32638a5850677bbf68f40f559d7d8670","url":"tw_stocks/1210.json"},{"revision":"2a2e5596cbd1e6d60095c92c0eb9c64e","url":"tw_stocks/1203.json"},{"revision":"50854758ae8b6245f1c4a580ef8c809e","url":"tw_stocks/1201.json"},{"revision":"bc66e5a8a39fc83f233bd3f1ff4ffcaa","url":"tw_stocks/1110.json"},{"revision":"b6c5672288915bf726d313967bf39923","url":"tw_stocks/1109.json"},{"revision":"78425376bbda8eeb0bcabced20ed64a7","url":"tw_stocks/1108.json"},{"revision":"b65214e4a89f30889e0fa72be1eb1bec","url":"tw_stocks/1104.json"},{"revision":"2d7ff6e617725d7da2cfd8788c342a68","url":"tw_stocks/1103.json"},{"revision":"af1b83be4b8d8a07d306483075b48795","url":"tw_stocks/1102.json"},{"revision":"ae8a531a98f2a874fb13e2209f875f02","url":"tw_stocks/1101.json"},{"revision":"ccab28a442ab165e770e33403eb06cd6","url":"tw_stocks/00996A.json"},{"revision":"952854168bee212bbb789bedaf88141a","url":"tw_stocks/00995A.json"},{"revision":"5127c224c0626dd204e69db58426dcd4","url":"tw_stocks/00994A.json"},{"revision":"f418a4c4409dd4a1f207c7cce7104ff1","url":"tw_stocks/00993A.json"},{"revision":"304e0d2e08db1795e3bc9efd18465350","url":"tw_stocks/00992A.json"},{"revision":"2ec2529f30ec5e2f29c00e99b470e15b","url":"tw_stocks/00991A.json"},{"revision":"992198cc2dce7cde3bc53f89a6a78062","url":"tw_stocks/00990A.json"},{"revision":"091a39821cb9291723029c7c5b520717","url":"tw_stocks/00989A.json"},{"revision":"52fb227bd3d9313955cc66017f348b74","url":"tw_stocks/00988A.json"},{"revision":"add433271d71de5bc1a35e958d7a307a","url":"tw_stocks/00987A.json"},{"revision":"42a59ae1621e17270778ba30979cd463","url":"tw_stocks/00986A.json"},{"revision":"57d6d2f9a1d37423ff629443f721c5ee","url":"tw_stocks/00985B.json"},{"revision":"f2a222d1c4aeb15aa5308da4e43f0547","url":"tw_stocks/00985A.json"},{"revision":"b54300d2d8e9d24bde16cd429ac607ca","url":"tw_stocks/00984D.json"},{"revision":"9aeb760fb1b225be0af3a0b88b75fa77","url":"tw_stocks/00984A.json"},{"revision":"902006cd688213ffbf51ee567f43e59b","url":"tw_stocks/00983D.json"},{"revision":"9e526e2f2e300a00e9686fec42b87c59","url":"tw_stocks/00983A.json"},{"revision":"d4935607acc8bb6e9a01811df8c5fcd8","url":"tw_stocks/00982T.json"},{"revision":"13777e9030747ce6b33036d3df1d9863","url":"tw_stocks/00982D.json"},{"revision":"f0b9973e83d31a3a9de3e7c839d40726","url":"tw_stocks/00982A.json"},{"revision":"670fd180de31e85d4a080426aded3917","url":"tw_stocks/00981T.json"},{"revision":"a44e1bb60d30d5aa66e9682e9017581e","url":"tw_stocks/00981A.json"},{"revision":"9a831bc541e85db71c1a9514c536bdea","url":"tw_stocks/009818.json"},{"revision":"4ace4d5c92b53b3de64d04806270d66d","url":"tw_stocks/009817.json"},{"revision":"492e65bb134058e497493b7a258374d7","url":"tw_stocks/009816.json"},{"revision":"e76db60edb3a449c7b90a824c625f039","url":"tw_stocks/009813.json"},{"revision":"7287b193b648796c26acc196b6695806","url":"tw_stocks/009812.json"},{"revision":"d70f6922d7f030ccc500ea2d7f2269a9","url":"tw_stocks/009811.json"},{"revision":"b1067ff1d7fd1740f22267477bfd4a2d","url":"tw_stocks/009810.json"},{"revision":"00a19a0f79c2d259449430461b10bdf7","url":"tw_stocks/00980A.json"},{"revision":"215096aff01c2f5637c00175adb23778","url":"tw_stocks/009809.json"},{"revision":"7c1a3358f8e719c8ef51d6c0bea2fbb0","url":"tw_stocks/009808.json"},{"revision":"2a6233118639a47708bf284d2b3fca44","url":"tw_stocks/009805.json"},{"revision":"dc253f0eb0c6fea7963fb01cfd18b2e9","url":"tw_stocks/009804.json"},{"revision":"a494cba5bb908993eab4f8d357e87f0d","url":"tw_stocks/009803.json"},{"revision":"7a26dd04790ba3fe62bdd113688b5c88","url":"tw_stocks/009802.json"},{"revision":"57ccc677c2f2096a6d1175966a96f91e","url":"tw_stocks/009801.json"},{"revision":"d263643e6adede291f7b88a709fdad80","url":"tw_stocks/009800.json"},{"revision":"e6571ec27bced1537d13e23d667a39e9","url":"tw_stocks/00972.json"},{"revision":"ce17b433fc73386387ce4ec605251381","url":"tw_stocks/00971.json"},{"revision":"50a7814b870b28c790b6fef7f62bd0f1","url":"tw_stocks/00965.json"},{"revision":"f9ec14c43ca7b486ba210bc246d371fa","url":"tw_stocks/00964.json"},{"revision":"6ee2b26d462c92c169d632de9d6c9906","url":"tw_stocks/00963.json"},{"revision":"09c7ffa63b76fb518240770e1054ce32","url":"tw_stocks/00962.json"},{"revision":"a4f2e080f5aa87887557cd1a673bd443","url":"tw_stocks/00961.json"},{"revision":"3b4035c1b0741d3d234717c5e38ddb60","url":"tw_stocks/00960.json"},{"revision":"dfb30c855fe073af2ee1a3a33211d49a","url":"tw_stocks/00956.json"},{"revision":"9a2d6fe7f7d96739ac31c334c98d17fa","url":"tw_stocks/00954.json"},{"revision":"a2e146c24f4760578db819c3df54c81a","url":"tw_stocks/00953B.json"},{"revision":"f2be7c9906f3c8ff2863b91d8b7528d1","url":"tw_stocks/00952.json"},{"revision":"ef321160c604e45f815bd60aac4116ca","url":"tw_stocks/00951.json"},{"revision":"9373eb43bc66c38a9ebb75b21b18716f","url":"tw_stocks/00949.json"},{"revision":"312d3fb1581d22206b6402ddc375f1bc","url":"tw_stocks/00947.json"},{"revision":"823c31f853122a69d2391abc66462528","url":"tw_stocks/00946.json"},{"revision":"56db624c8e9d8e66069702086652a7b4","url":"tw_stocks/00945B.json"},{"revision":"a58c1c17cd8c613ce0ccb822173e7fca","url":"tw_stocks/00944.json"},{"revision":"d95a7126d956ff054926fca306037a6d","url":"tw_stocks/00943.json"},{"revision":"a8d858b84ee71794982d60e1ac8632dd","url":"tw_stocks/00941.json"},{"revision":"8a0251daf1e46f192af68a695eb2268e","url":"tw_stocks/00940.json"},{"revision":"4e5937250cfc23875ef995b9b11c3964","url":"tw_stocks/00939.json"},{"revision":"d8ac4b6d3798ee8c69ed83d433e83c32","url":"tw_stocks/00938.json"},{"revision":"197b2dd3389e351a1f19a054f3aaf2b9","url":"tw_stocks/00936.json"},{"revision":"f7ae3a554f11f8a5b7483ef33a1737a3","url":"tw_stocks/00935.json"},{"revision":"40e428e149f9aa4c955cb88941246425","url":"tw_stocks/00934.json"},{"revision":"078bbb55ae3752c3fdd7355b749002f2","url":"tw_stocks/00932.json"},{"revision":"52e76f77942d03c9490b958aa5ada5fe","url":"tw_stocks/00930.json"},{"revision":"05133eed8ff32ad763b946f60ee7fbbd","url":"tw_stocks/00929.json"},{"revision":"caa21e99ee9ae0e392714d99e575fef8","url":"tw_stocks/00927.json"},{"revision":"13cd07971a304ff4c53c2c8539f6c48c","url":"tw_stocks/00926.json"},{"revision":"57b5c068c19f3bff6c099d254dd0436c","url":"tw_stocks/00924.json"},{"revision":"e6063db26a8bb9660007ab280f622a10","url":"tw_stocks/00923.json"},{"revision":"bb977dd1306444bb1b900fab19ad83eb","url":"tw_stocks/00922.json"},{"revision":"ee2819055efaf19509aca69d674f1f38","url":"tw_stocks/00921.json"},{"revision":"0260afae53c6d5777a0f77d2803c877e","url":"tw_stocks/00920.json"},{"revision":"59812cc69a17e9edba05f80c9cdd80b0","url":"tw_stocks/00919.json"},{"revision":"3cde0a0e8ba3a037bef8ab661104d00a","url":"tw_stocks/00918.json"},{"revision":"4c181d56470f4f54375be877905d6de1","url":"tw_stocks/00917.json"},{"revision":"0d7da17bed4091499b83209f945a39bb","url":"tw_stocks/00916.json"},{"revision":"ee600aeaa2b174e0ab350032ce78dcc6","url":"tw_stocks/00915.json"},{"revision":"f4bd927d3492c08e8a2d9cf6bcbe2a87","url":"tw_stocks/00913.json"},{"revision":"99ec4e508fd001933259792531a05f1c","url":"tw_stocks/00912.json"},{"revision":"4e3108f0088dca85452dd5aca2db4a24","url":"tw_stocks/00911.json"},{"revision":"f172f3cf77f6205bce7d24a8a5514fdd","url":"tw_stocks/00910.json"},{"revision":"b9ebc069bce94978e1173c35c35c3196","url":"tw_stocks/00909.json"},{"revision":"1341932e3a494c0de9423f6dd9adbeb5","url":"tw_stocks/00908.json"},{"revision":"7b80c12b999ea13625d231847f0d110e","url":"tw_stocks/00907.json"},{"revision":"2eb64de7057a57d5e2f2d4d019218333","url":"tw_stocks/00905.json"},{"revision":"8d51f4cba5320d88b128e8700e070d06","url":"tw_stocks/00904.json"},{"revision":"a14910005492efd6b21d511fd94daf58","url":"tw_stocks/00903.json"},{"revision":"7aab48d02e189454106658289db1b803","url":"tw_stocks/00902.json"},{"revision":"fe1273b130582d634939eabe2a890524","url":"tw_stocks/00901.json"},{"revision":"f0370dd336d9781ac2c31012f4c3bbb8","url":"tw_stocks/00900.json"},{"revision":"4807768065d418275ea8db77d7c4f5cb","url":"tw_stocks/00899.json"},{"revision":"bb891d117719951fb5e3962699b1bf24","url":"tw_stocks/00898.json"},{"revision":"cbe364ff0a410de5fee5db73d5e10829","url":"tw_stocks/00897.json"},{"revision":"1665a9487c1a8a228edf2976ba6e1200","url":"tw_stocks/00896.json"},{"revision":"a5d6bf866ca271c6a390cc028cca832f","url":"tw_stocks/00895.json"},{"revision":"a8aa4e169b582fd74919731b63798ead","url":"tw_stocks/00894.json"},{"revision":"578314ea8317b8b3cd54c60c1eb7f239","url":"tw_stocks/00893.json"},{"revision":"878627e078140f5fd3e920c408c7e9a8","url":"tw_stocks/00892.json"},{"revision":"9d2f80bb62543fed9db699ea7c29b61d","url":"tw_stocks/00891.json"},{"revision":"36b1625f980f4d9fcb1904f1e96623a0","url":"tw_stocks/00885.json"},{"revision":"42e51853a6d63cc34ddd7ae4b8635c6e","url":"tw_stocks/00882.json"},{"revision":"86dad1d49e32fbb68ebc41020140ff7d","url":"tw_stocks/00881.json"},{"revision":"7c462834f58c0d6581b77cd48374ffa0","url":"tw_stocks/00878.json"},{"revision":"0d4fcd8c600fd9da801fbd949b8cc0e4","url":"tw_stocks/00876.json"},{"revision":"588af9b3a344d5e56a1bec2e65db72a6","url":"tw_stocks/00875.json"},{"revision":"2cfa0d99954f4261e5048a743cffde0e","url":"tw_stocks/00865B.json"},{"revision":"d10bcb1078d8584e8f0fb780dbf82207","url":"tw_stocks/00861.json"},{"revision":"ba45d35223d2b5b0883ba3ce1ab89dc9","url":"tw_stocks/00852L.json"},{"revision":"c73c6735a4b57ec0253d4c67955f1486","url":"tw_stocks/00851.json"},{"revision":"d000630545837a84a8d766e2a1de2e63","url":"tw_stocks/00850.json"},{"revision":"e89fc2b2519f382e86abe39342bf0114","url":"tw_stocks/00830.json"},{"revision":"1b595cc173aba938047b4a457bb2025c","url":"tw_stocks/00783.json"},{"revision":"eb884af9f074a04ac14824842ec1859b","url":"tw_stocks/00775B.json"},{"revision":"5bd8a09b82318fb1b5aa35997b1a746b","url":"tw_stocks/00771.json"},{"revision":"97a08f4528b4c7f411bdabe59578dab1","url":"tw_stocks/00770.json"},{"revision":"e3ee146edbf03d98d126860e3d9913ce","url":"tw_stocks/00763U.json"},{"revision":"e7c5fa775c627c14df0146c268935cd5","url":"tw_stocks/00762.json"},{"revision":"d735fc3e4bd44ba8a9f158ac1606d2cf","url":"tw_stocks/00757.json"},{"revision":"1c353f5ae1694f2a660a37237f0d98b8","url":"tw_stocks/00753L.json"},{"revision":"b26753ed57ea43cb5718f73b9bc48a85","url":"tw_stocks/00752.json"},{"revision":"d2038b29e7a6bb1b3b75ab3262d32a3b","url":"tw_stocks/00739.json"},{"revision":"0b0d95c74bdda8ffdbdd6e7d14aa9d9f","url":"tw_stocks/00738U.json"},{"revision":"620fb61130450d08ce850753266c3e34","url":"tw_stocks/00737.json"},{"revision":"53d4a18266e1f481ffd453310d3c6e6a","url":"tw_stocks/00736.json"},{"revision":"bf9a327ba126a9a7c44d86fee999492d","url":"tw_stocks/00735.json"},{"revision":"8abcc50d2bb9013e66422a5922a2e246","url":"tw_stocks/00733.json"},{"revision":"82c081146c35c6fc6e3969269883275a","url":"tw_stocks/00731.json"},{"revision":"0fe1d42d1c624387f8860aa647bc31bb","url":"tw_stocks/00730.json"},{"revision":"1727891a23286f49f40fab31c761540e","url":"tw_stocks/00728.json"},{"revision":"6bc2e150d755588c63c057fa00cfdc37","url":"tw_stocks/00717.json"},{"revision":"c82d8baae511b9fc26322eb83e1970c8","url":"tw_stocks/00715L.json"},{"revision":"bad35095ee976a1e5dcfb1d6c912d8ec","url":"tw_stocks/00714.json"},{"revision":"4d4b8b8d3c8bc012350113810c560a41","url":"tw_stocks/00713.json"},{"revision":"b38f00acc7fde8e661247e0411ec458b","url":"tw_stocks/00712.json"},{"revision":"361a959360092c1f398afaefd3da2e47","url":"tw_stocks/00711B.json"},{"revision":"24ea71fabbd6af651828e6171842491c","url":"tw_stocks/00710B.json"},{"revision":"cd9ec9c1a2c424fbce21acaa054e5e18","url":"tw_stocks/00709.json"},{"revision":"21f276e6077832880ce723c394c5df5d","url":"tw_stocks/00708L.json"},{"revision":"edaf1e3788815b917d49db1292f0bb4d","url":"tw_stocks/00707R.json"},{"revision":"c78923216c4d3ed0d95f83822bc493aa","url":"tw_stocks/00706L.json"},{"revision":"8caac911c33179bc70f7455ca419e4df","url":"tw_stocks/00703.json"},{"revision":"65bd3e168c59a2ee339c831f2af65488","url":"tw_stocks/00702.json"},{"revision":"f30b1a91b69f425a5c2f7cc2779f4347","url":"tw_stocks/00701.json"},{"revision":"994a05a720a4867c05ff1d63f501038e","url":"tw_stocks/00700.json"},{"revision":"3996ba962f359e595ebc617f6ac8afc4","url":"tw_stocks/00693U.json"},{"revision":"97a91cfd745214f8d5253cf29eab2fec","url":"tw_stocks/00692.json"},{"revision":"34457b99280d3525cb031779e7be1c3b","url":"tw_stocks/00690.json"},{"revision":"e5726761e35d16d44ba5e9ab901590bb","url":"tw_stocks/00689R.json"},{"revision":"fe330568f4d23d82f4681adbd827b753","url":"tw_stocks/00688L.json"},{"revision":"c2b42da88433d927830d19aefb748f24","url":"tw_stocks/00686R.json"},{"revision":"0a30a22fbc21a7316d2fae45535c78d6","url":"tw_stocks/00685L.json"},{"revision":"70ca5485a84e877da5c3ab476acdb3ea","url":"tw_stocks/00684R.json"},{"revision":"177ef867e58d2e3c0a135af864ca6d1b","url":"tw_stocks/00683L.json"},{"revision":"fca7d848f58501bf764f0b93d72c96de","url":"tw_stocks/00682U.json"},{"revision":"6e44d7df2af277746990fb1c34842d71","url":"tw_stocks/00681R.json"},{"revision":"8a05b19f4f21c7edf9df2b700b8191c9","url":"tw_stocks/00680L.json"},{"revision":"311938a8ba59c0c73acaee987acc6712","url":"tw_stocks/00678.json"},{"revision":"c71ac7e9aca45952d49bac3dfb71132c","url":"tw_stocks/00676R.json"},{"revision":"0b27465dafa0e607ea8723e097070278","url":"tw_stocks/00675L.json"},{"revision":"66a68f4472fe799e579d3ef3afa790bf","url":"tw_stocks/00674R.json"},{"revision":"9288405c2643397fe0dcba10185c0e31","url":"tw_stocks/00673R.json"},{"revision":"c7608c8c941ba95c979509f2190a3471","url":"tw_stocks/00671R.json"},{"revision":"4b6a567253eb5e6c6164227f4015ca84","url":"tw_stocks/00670L.json"},{"revision":"aeb600b2643aa9ed5c653e139d04081f","url":"tw_stocks/00669R.json"},{"revision":"d954db9bd4b7a6720b101aaa894adce5","url":"tw_stocks/00668K.json"},{"revision":"87a6a31ce23bbbd5ff7e250d950eaae6","url":"tw_stocks/00668.json"},{"revision":"69ae1fa13f1f16c57fb04c1d3db18784","url":"tw_stocks/00666R.json"},{"revision":"c96b0f45c2b0575e71e1ec14fcc813e4","url":"tw_stocks/00665L.json"},{"revision":"a1ea092eeba5596c053571b5a39548cc","url":"tw_stocks/00664R.json"},{"revision":"8b2fa04237a51a7b0ea49ca1cb20ce41","url":"tw_stocks/00663L.json"},{"revision":"cb1b949a535a45a9c81ffd929daedcc3","url":"tw_stocks/00662.json"},{"revision":"851d41c1235e8d513332959fd3123a36","url":"tw_stocks/00661.json"},{"revision":"b521c510b827751aeaade54805aaf8a8","url":"tw_stocks/00660.json"},{"revision":"c9e02841160421ca3d53e4a20bb7b8d9","url":"tw_stocks/00657K.json"},{"revision":"72ddde729cfd606dbbc34789da16936f","url":"tw_stocks/00657.json"},{"revision":"ec75028857e1f2e3d01d70c2bf77a8ca","url":"tw_stocks/00656R.json"},{"revision":"bc01e6793197e0a6f25f79acfdbc92e3","url":"tw_stocks/00655L.json"},{"revision":"ac7707ed0576e831504b0da6c9fde7c1","url":"tw_stocks/00654R.json"},{"revision":"03a173ab4325e4c64cb82882cb0c78be","url":"tw_stocks/00653L.json"},{"revision":"b43143f24fa3cd33261e7078a06aa34a","url":"tw_stocks/00652.json"},{"revision":"531690bc4949a16ca776311e2e1b2d94","url":"tw_stocks/00651R.json"},{"revision":"1834ac7e116ca4e515a5e5b330ae1051","url":"tw_stocks/00650L.json"},{"revision":"8149fb485a469b311f0b63a48e453ea9","url":"tw_stocks/00648R.json"},{"revision":"0e620fe4c0fe33c51e6f52fd686239da","url":"tw_stocks/00647L.json"},{"revision":"9c17feacb8499705cabc21962adf0a47","url":"tw_stocks/00646.json"},{"revision":"68c9b6c7e84df2fecdfe2250304e82c5","url":"tw_stocks/00645.json"},{"revision":"39520bbb775ddfcb99b43b1fd3b28f8d","url":"tw_stocks/00643K.json"},{"revision":"090e862b1d6b7cacced81db5bfc19255","url":"tw_stocks/00643.json"},{"revision":"58f755715be54752789d09a06b2a9b5a","url":"tw_stocks/00642U.json"},{"revision":"2bc227b3f7dcf3aa077f3f6b0d74457b","url":"tw_stocks/00641R.json"},{"revision":"4394621491c80c07f1b1de8fdf12e155","url":"tw_stocks/00640L.json"},{"revision":"ca87a8c2483d3721d3b4c32530b82d7a","url":"tw_stocks/00639.json"},{"revision":"ef730fb2d1fcc017ca68983470c077e6","url":"tw_stocks/00638R.json"},{"revision":"af2c596d313b96e440649e3112c5133a","url":"tw_stocks/00637L.json"},{"revision":"76bcfa6c5b95714136aa27171c3ffab9","url":"tw_stocks/00636K.json"},{"revision":"e2bb4de0ef93be056b62c5f8df60f18c","url":"tw_stocks/00636.json"},{"revision":"762669122c83f8d3f6415d1698de9b65","url":"tw_stocks/00635U.json"},{"revision":"9a2de755fdacb1170d914532d02536d5","url":"tw_stocks/00634R.json"},{"revision":"a18a2278f8b0d26d24691d0515fee4ac","url":"tw_stocks/00633L.json"},{"revision":"232987c5831dcec10e94df101668ca6d","url":"tw_stocks/00632R.json"},{"revision":"7378e6c246cc4b35dcde71fbfb0bfb6d","url":"tw_stocks/00631L.json"},{"revision":"4f852dc04dbcb21a34e111793d89b172","url":"tw_stocks/00625K.json"},{"revision":"9facd4aa76a2c9598df3a36aaefc7f96","url":"tw_stocks/006208.json"},{"revision":"d41d073b427f2bcab73ceb082bd87eea","url":"tw_stocks/006207.json"},{"revision":"363236fe6ecbf513caa23b323b76e997","url":"tw_stocks/006206.json"},{"revision":"33b16b17a3432f16629d505d48dc5d4b","url":"tw_stocks/006205.json"},{"revision":"ea6d4d44eb714033355e5762c69dae76","url":"tw_stocks/006204.json"},{"revision":"79c3fe7f12215407f0ad6c573f72cf16","url":"tw_stocks/006203.json"},{"revision":"8b85bf46641b3bb73a6c50cba75b66c8","url":"tw_stocks/0061.json"},{"revision":"1218829a56f6f1b46c163e0d9cbc36ee","url":"tw_stocks/0057.json"},{"revision":"9b4ca54e1675dc43fb9c0089289a9f90","url":"tw_stocks/0056.json"},{"revision":"73891986867fd44562935b43acfd1185","url":"tw_stocks/0055.json"},{"revision":"159b36442c5cb14bf4429560b75730d4","url":"tw_stocks/0053.json"},{"revision":"fcd1ad5fb39d07affe72879977d75e85","url":"tw_stocks/0052.json"},{"revision":"1bb241eebfdaaa01539486c1828cc667","url":"tw_stocks/0051.json"},{"revision":"f136e453ed235dd64f33c727cc676679","url":"tw_stocks/0050.json"},{"revision":"cd50a041030d8207bbe78063c461a065","url":"tw_stocks/00401A.json"},{"revision":"28bd2318cc7e0efad6c269accc33d69b","url":"tw_stocks/00400A.json"},{"revision":"b47c88b1b352529b7e4c512ea3bf44e2","url":"subscription/callback.html"},{"revision":"4747d8487a64acff512e759d32566cc8","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"1361f9a0a2158ecf3ecc4da6cbba901a","url":"financial/rebalance.html"},{"revision":"f9bec3aac57ea3e7b2c61a5845939092","url":"financial/cashflow.html"},{"revision":"b0600ee65f9424800e1b35170c7bf4ec","url":"financial/balance-sheet.html"},{"revision":"56d58f5cf0ad3335143cd343701b88c4","url":"finance/tags.html"},{"revision":"4b0c3abd1a673b017c237f3be9be3c31","url":"finance/finance-section-created.html"},{"revision":"72151c576f05206cde71f3d0f0480882","url":"finance/finance-2026-04-10.html"},{"revision":"105661126207751d3b129dcfbfa3bdee","url":"finance/finance-2026-04-09.html"},{"revision":"1b8691ee29b23c054214dcee803ac940","url":"finance/finance-2026-04-08.html"},{"revision":"ab0566a6abd3316ec87f69a3c6d9effb","url":"finance/authors.html"},{"revision":"f1f7004cc08389c0e1847735d1b07730","url":"finance/archive.html"},{"revision":"89924a932236f4bda0e78b72c436ac92","url":"finance/ai-635.html"},{"revision":"f1c7d4a567e1c53f51731b0e3261efed","url":"finance/tags/newsletter.html"},{"revision":"68ff2328420382ef7e26e674f25d2321","url":"finance/tags/finance.html"},{"revision":"793f59af674d007c1ebf8feb1b9354a1","url":"finance/tags/daily-report.html"},{"revision":"18bd8786cf13e6260f02c5743eb1e2cc","url":"finance/tags/announcement.html"},{"revision":"55fc12d6c896d38260d9d068821e3a43","url":"docs/tags.html"},{"revision":"0a88d0fbfb2031577a5e633d75334c29","url":"docs/intro.html"},{"revision":"6fa463e357df9b33fea25dc21fb00c26","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"d81ca8271a03e1294ded345630461cdf","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"def9bf9ca0fbee9c47af2f8ba1f01ba5","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"cdf23c018ae7e42db027b053fff6143a","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"0a6e585eb3ebae96f764c7a85973d0b3","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"85e8729921b014bf72ed2ba42fe3a28f","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"6317e8d5f66a7c6a9b70fc2c45409d95","url":"docs/tags/模型控制.html"},{"revision":"0b752d5185647d8d9d0bf5ab39d8e262","url":"docs/tags/top-p.html"},{"revision":"fd268ef39b5524045b0e6f5385338437","url":"docs/tags/tokenizer.html"},{"revision":"7ec289dcbe507bc95879b8570e6c69e2","url":"docs/tags/temperature.html"},{"revision":"a9c46db4ed83d04b0614ea99161592cb","url":"docs/tags/technical-docs.html"},{"revision":"c07d4faff500bdabf900d523b841a7b2","url":"docs/tags/nlp.html"},{"revision":"4444a590d6cf4924d06937625edbbc8d","url":"docs/tags/llm.html"},{"revision":"0a877152ecf163f6815d6a95219c7619","url":"docs/tags/git-hub-copilot.html"},{"revision":"0cf18bfafd3fc36130037730b7de474a","url":"docs/tags/generative-ai.html"},{"revision":"adf42756f2d40fe4a11d81e9c22a7642","url":"docs/tags/development-tools.html"},{"revision":"f0f0c9200cfd90c8048049fec6ea26b1","url":"docs/tags/cli.html"},{"revision":"796fd38f53efbd0666a9c2e37708fb87","url":"docs/tags/claude-code.html"},{"revision":"df57db7ea7625dc73c3e6d6a0ec47ccf","url":"docs/tags/bpe.html"},{"revision":"561af78c0c65c32fe0f99b354b4bb3cb","url":"docs/tags/automation.html"},{"revision":"33448ba9e99d80ec88e7156f4223be91","url":"docs/tags/ai.html"},{"revision":"ad708d60fcd8cbe284317b00f5440f8b","url":"docs/tags/agent.html"},{"revision":"a281e84c19b20c649a6c0def28202ad1","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"9b80bdf2d1b9555f8d6aae12985ca41c","url":"docs/skill/gemini-skills.html"},{"revision":"cb7a4350072da18aa22dc54f60bcc8b1","url":"docs/skill/claude-code-skills.html"},{"revision":"26de8763b40c741c65ba67680c4f4db8","url":"docs/python-workshop/python-init-file.html"},{"revision":"4f52996d20174407e967284ffd43b4ad","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"f0a2364ccf7fceafed29bd77edb24ceb","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"b80b1aa4ad3e0b0d620db45dd8da96e4","url":"docs/claude-code-series/skills.html"},{"revision":"e6adae8055c4dbcc38ca3ad799aa4da2","url":"docs/claude-code-series/monitoring.html"},{"revision":"0c7364bcf6a7782add56947bf82e865b","url":"docs/claude-code-series/getting-started.html"},{"revision":"2fe71dfed7dc4532bbab1fdfa6d652fd","url":"docs/category/發文-skill.html"},{"revision":"ef2956dd2f91336e095c3e7a6f696511","url":"docs/category/戰情室元件-skill.html"},{"revision":"4cd1bd2fb534a72beea290ecf6b823ca","url":"docs/category/skill.html"},{"revision":"8300faf294cb0d1b78247dd95d09d5ed","url":"docs/category/python-workshop.html"},{"revision":"b855cf9e592da4673a4ea19ad37f5f27","url":"docs/category/claude-code.html"},{"revision":"3baa83ad863369b41efa22e1ed872c4b","url":"docs/blog-skill/news-rules.html"},{"revision":"da50a376e1f6c6d631453b3a47de004b","url":"docs/blog-skill/history-rules.html"},{"revision":"e2807c154e27d00219716c4157245c47","url":"docs/blog-skill/finance-rules.html"},{"revision":"c6af17f5c47ea8b77695e7d93ed521b0","url":"auth/callback.html"},{"revision":"cfdf3e3591fa37c17156e88c2f3597c3","url":"assets/js/runtime~main.f84c5bb6.js"},{"revision":"b5bc6b782b06b9e8d81013a8de600f13","url":"assets/js/main.d0cf4471.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"9afbf8edd3bf24443ec502d9bb5f519b","url":"assets/js/f71290dd.9f0022a4.js"},{"revision":"5226756cc111237230f4688de4bd9ae8","url":"assets/js/f60bf1e1.11fcd7af.js"},{"revision":"12253c9e6f3c4523d0696b583f6c760b","url":"assets/js/ef86e77f.24887a9c.js"},{"revision":"cbeec876cb3555603a8832604080c47b","url":"assets/js/ec1e3285.93fcc453.js"},{"revision":"1f697d39f93a080f211b1f3190e63f5e","url":"assets/js/e88c4a9c.952dbaa6.js"},{"revision":"1996d87d0002f5605e19123c52d62903","url":"assets/js/e86a5a75.f757bfb1.js"},{"revision":"0e4a56e93801f40c8e1b21d343c3d537","url":"assets/js/dfea6eb9.255fc105.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"821e38d1a2d54cdbac28fa4bc6731a95","url":"assets/js/dd726b46.e175d4a1.js"},{"revision":"1687ea91e19c2e6945a640faf301cf8a","url":"assets/js/dd5b562f.b96ce233.js"},{"revision":"fb1171a8650d73b2a385dbb0db8df666","url":"assets/js/d7453cde.938564a7.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"0b1fc1869654cfc0e06e5ad5c2a3b485","url":"assets/js/d0c9de85.62013548.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"0c95eed9e27684516e331600b8712677","url":"assets/js/cc221b30.4163c23b.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"10fa8e68bae1d447461e1e192fe3d1be","url":"assets/js/bfcb750f.9fe2a8fb.js"},{"revision":"fb49a25e749b3667db723150d387424d","url":"assets/js/b95eaafa.bad69c45.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"6b9daf2ffcfcabdc94e5149c32b3af8b","url":"assets/js/b283ca86.886fc0b4.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"0bf3c819efc5e0767c844e6dd18781d0","url":"assets/js/a6038fd8.322b6321.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"f47cc1c09d395ff514a891f35defcc78","url":"assets/js/99f940e2.3d4fe75e.js"},{"revision":"5d44729ce33b3181200b0d88acd1f147","url":"assets/js/99d3b34a.9596444d.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"eda733189f835ea76a5c0c2d76c4e95a","url":"assets/js/923ed0b3.c5a03c07.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"053b99ee20be118426a2348541077e3d","url":"assets/js/8f79df81.68f71970.js"},{"revision":"56fa06138244ce7f2bd80b9b7dc4f241","url":"assets/js/8c20996d.47cbc2d9.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"4a3ffb8c6fc83e522e002706979d6d69","url":"assets/js/898514b1.26f59acf.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"a9988ff2c8be7dcd6179b13e0e881670","url":"assets/js/853ca2df.23f38b6e.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"6afc0283b78a865f132d9f69c81610c7","url":"assets/js/7fbc1a25.7060c615.js"},{"revision":"a81623be54584c695fb0820373b6cee4","url":"assets/js/7ce5d7a1.576af4da.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"874b2986208d3f3605bc9c16d1c344fd","url":"assets/js/607acb04.ee506895.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"e3275aaca26a913dbea8caa96cadb327","url":"assets/js/56fce896.e3487621.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"161c922b8546368681a2897f6568c206","url":"assets/js/4810d89a.649b1dbc.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"d454bdd9e50c81434951debf84abea06","url":"assets/js/43ea09b6.63c70acf.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"90993f39770a2b8092a4c5f60fab7591","url":"assets/js/3ee3fb84.83c48b3d.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"d46a6b3e3e4381623390149331f00208","url":"assets/js/3aef7316.0c8e9928.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"8413dd30c8f29674ed218ec3156c4d9d","url":"assets/js/36f337b1.819981b7.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"1a3580def08bc44ca71b0757f6e65b74","url":"assets/js/23d26d3d.3d5fd991.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"a73d816a457e3a329aceda789bb5a832","url":"assets/js/179b82d4.78975231.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"57627bb2965ed3c36380cb537a2e8ea2","url":"assets/js/177ac620.639d9aa1.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"e91c1d5196eaf4575bc01a3d33efc85d","url":"assets/js/162c7fa0.a0edb15b.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"f1f9f3bde7cd68d0177bdbe02ad7400c","url":"assets/js/148a248b.53de3257.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"1b974ff3dd74ba64713abaf75cb2e3c9","url":"assets/js/1266f974.2640c765.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"c02d5393c88b2fb5279a7d91773ab3a1","url":"assets/js/0e384e19.6dc4048d.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"427f6480b25c2d497eb7aea309258d0c","url":"assets/js/0058b4c6.d18ffcf1.js"},{"revision":"7afa8d9d5740c235bf309da50ca101bb","url":"assets/css/styles.626d3517.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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