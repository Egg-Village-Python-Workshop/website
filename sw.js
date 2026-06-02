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
    const precacheManifest = [{"revision":"366a13533687cabe4c4a2d37fcee7358","url":"tw_stocks.json"},{"revision":"8bd7d1bc1da1c848089b1a64c6315fce","url":"subscription.html"},{"revision":"28abe6d8b9d19e9877c898c2e9f7ed74","url":"quotes.html"},{"revision":"469217b83272e023c4aba3b548b70fc3","url":"me.html"},{"revision":"3e571f503cb4c4c6efc5ac2b3b354fe9","url":"market-war-room.html"},{"revision":"a83c88585e3990b8161afe03737e2007","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"6169875143c87123050fe152174ba590","url":"index.html"},{"revision":"8a42ea4335638bc2e2cb0c9633b3ca8d","url":"games.html"},{"revision":"5b025ac9fd4831d1f3479b070670ab4c","url":"finance.html"},{"revision":"453eafcc9b0694afd0e2d0c9c69138d0","url":"feedback.html"},{"revision":"4823a1992c28adb8ac8499bedb4a45be","url":"arena.html"},{"revision":"a2161db0659c0a408f6a147003167e37","url":"404.html"},{"revision":"0b3465be11833aac33649374b0e0b04a","url":"tw_stocks/9958.json"},{"revision":"d79ffd2714a6f605c178688819da651a","url":"tw_stocks/9955.json"},{"revision":"672745ee0e711e8c9139370953004837","url":"tw_stocks/9946.json"},{"revision":"db589f573a353a2cd948f65948b8c8f1","url":"tw_stocks/9945.json"},{"revision":"c492c895853ff0325f5c0f97d798662c","url":"tw_stocks/9944.json"},{"revision":"9cdef2f8cc7cf262d7dc16438d0e7c0a","url":"tw_stocks/9943.json"},{"revision":"058432db867791c6b56ac0a4b7c39e1b","url":"tw_stocks/9942.json"},{"revision":"8e9f6d1196dbe31be667b0fe4aa229c7","url":"tw_stocks/9941.json"},{"revision":"318e8e2b500af13817f87dfb3ddb4298","url":"tw_stocks/9940.json"},{"revision":"b3a1c2c9eca4e45836095854c0cc0c11","url":"tw_stocks/9939.json"},{"revision":"b90745de0b69b8616102a389f187c2c0","url":"tw_stocks/9938.json"},{"revision":"6a447116e57de472a1f32485ce2f26ed","url":"tw_stocks/9937.json"},{"revision":"6fdab3358f5f33ab70b57aecc9080a80","url":"tw_stocks/9935.json"},{"revision":"97c631cd4fa71335ed55d7b2b221ac4d","url":"tw_stocks/9934.json"},{"revision":"3c495260ec94fc0316a31e5d11c5c6b4","url":"tw_stocks/9933.json"},{"revision":"cc71f56d8f12caba085b2f3cf020b50a","url":"tw_stocks/9931.json"},{"revision":"8aa0b991c7a6a8c36f9d5e5c1e2c84b6","url":"tw_stocks/9930.json"},{"revision":"57b9d27570c1cc404ae53461e1cc13e0","url":"tw_stocks/9929.json"},{"revision":"886f3bed74a5690cfcae0cdad1afbb87","url":"tw_stocks/9928.json"},{"revision":"995189ba9142deba708d8a3f24399bd9","url":"tw_stocks/9927.json"},{"revision":"d620ff4a490ebf209588747b12811b74","url":"tw_stocks/9926.json"},{"revision":"e55feca958ef08b092483426d8c956a0","url":"tw_stocks/9925.json"},{"revision":"df97c2798dcb533991ac46f6db5cdaeb","url":"tw_stocks/9924.json"},{"revision":"19d8acb849819ac52d5f9ced3f25be94","url":"tw_stocks/9921.json"},{"revision":"7cc21c5f1c7949da3aec9a913018e236","url":"tw_stocks/9919.json"},{"revision":"b3df99fd40468947b7dd686acc743ac3","url":"tw_stocks/9918.json"},{"revision":"59cf71b64245f068162682937ce13baa","url":"tw_stocks/9917.json"},{"revision":"3428365661f65acac0a61d108098d2b5","url":"tw_stocks/9914.json"},{"revision":"8067d78651f55a8e63965f80982cf7ae","url":"tw_stocks/9912.json"},{"revision":"ebd793a309ffbdea0d09ae23fc6c82d0","url":"tw_stocks/9911.json"},{"revision":"20f4b5cff27b54b1eb6b71e68c6e69ce","url":"tw_stocks/9910.json"},{"revision":"574d24fb5b9063b2a0d9dcb3d4ab4960","url":"tw_stocks/9908.json"},{"revision":"c1ea0c80c19ac5866a1c6de42fdc7369","url":"tw_stocks/9907.json"},{"revision":"1ef0ba21fc7f4eac0b5bee49b8e55ecf","url":"tw_stocks/9906.json"},{"revision":"e370ae9404bebd679a214459028ccc78","url":"tw_stocks/9905.json"},{"revision":"9e9e1896b2d2cdb1be63248b5b869d4e","url":"tw_stocks/9904.json"},{"revision":"3d518e8bb1c7d504a014dc16e7cb4c45","url":"tw_stocks/9902.json"},{"revision":"dbb00f2d0ace6177e0c91910d4d0b287","url":"tw_stocks/9802.json"},{"revision":"2b4e200ebcef8b413c669bd3d98505fd","url":"tw_stocks/8996.json"},{"revision":"fcbad0f0cad4ac315a2d5a6d890b0f98","url":"tw_stocks/8940.json"},{"revision":"f20089761173f40be1ecd85fb37ba9ee","url":"tw_stocks/8926.json"},{"revision":"d4394341eaa35f015dfc00d76a377295","url":"tw_stocks/8499.json"},{"revision":"cf0aa19b39069357afcfd5e0f5de2fdb","url":"tw_stocks/8488.json"},{"revision":"e73b8e949e7c4e76e58bacdd54427c58","url":"tw_stocks/8482.json"},{"revision":"d8649c313c38aabe4131658fcafb46b0","url":"tw_stocks/8481.json"},{"revision":"23f534445477d58acc35b4f1aaa49740","url":"tw_stocks/8478.json"},{"revision":"c49cad009d51f2b52844fea85320b42b","url":"tw_stocks/8476.json"},{"revision":"a7e4c447feff053a351c13ed42895162","url":"tw_stocks/8473.json"},{"revision":"87f8fa856f2cf88b907f2beff187a319","url":"tw_stocks/8467.json"},{"revision":"56a61219c286737dd41e14de661173db","url":"tw_stocks/8466.json"},{"revision":"3d0e4ae8e87469d410f0f182a5ba1dc4","url":"tw_stocks/8464.json"},{"revision":"f9009b4ba2a733b9b63ad90be1c08c83","url":"tw_stocks/8463.json"},{"revision":"1e1d5181ee7773be1d5ac626428f751a","url":"tw_stocks/8462.json"},{"revision":"b941df254ee7e74f13edaeaaf4b7ee37","url":"tw_stocks/8454.json"},{"revision":"21a9a800af8e9ff60c08ed6c90877ad9","url":"tw_stocks/8443.json"},{"revision":"577a2f87a615bf293f1cf199bffcc4d1","url":"tw_stocks/8442.json"},{"revision":"46bbf3acfb5edd05d193de12d000090b","url":"tw_stocks/8438.json"},{"revision":"590094273a262e03dd69d2fe991f898f","url":"tw_stocks/8429.json"},{"revision":"58cbe3af24cc173d6f77761872f6638a","url":"tw_stocks/8422.json"},{"revision":"b7554a2746d070fc845c1258c70cf05b","url":"tw_stocks/8411.json"},{"revision":"0f9201c8e0b2bb75c13dd80d48f9710a","url":"tw_stocks/8404.json"},{"revision":"e8fb6651ec1ad1aa132ea496c1396894","url":"tw_stocks/8374.json"},{"revision":"f0d1fa303a18e5d23685e95988f791d9","url":"tw_stocks/8367.json"},{"revision":"3fa831059542ae64897b05e46fbc163f","url":"tw_stocks/8341.json"},{"revision":"937cd74d82857dc3972e274eb2e49197","url":"tw_stocks/8271.json"},{"revision":"11a8e90a5f34eb4c5412e2dda0f4cbfd","url":"tw_stocks/8261.json"},{"revision":"168a81b6f9962a65916757ebedc884d4","url":"tw_stocks/8249.json"},{"revision":"247f2400ebb2c4d849d226a98a471414","url":"tw_stocks/8222.json"},{"revision":"1c6f94589cc92a4f807a8e99eec198c7","url":"tw_stocks/8215.json"},{"revision":"3fca06ef4ac13f7916fe8e02bc377e85","url":"tw_stocks/8213.json"},{"revision":"40c7fd8420afb84bbf72c2fd54d941a3","url":"tw_stocks/8210.json"},{"revision":"40282e4d62faac64257b0da3e11f460e","url":"tw_stocks/8201.json"},{"revision":"64d67be7b99343e048e9c5ed0429d456","url":"tw_stocks/8163.json"},{"revision":"f2076105ba8c8ef64628b2e2a2084bc6","url":"tw_stocks/8150.json"},{"revision":"f1b236a2656a67ce18630e09b7428650","url":"tw_stocks/8131.json"},{"revision":"cc25a5a7f1872ae7d5e25633a5beba87","url":"tw_stocks/8114.json"},{"revision":"312d63a5cfc313631057a264eeb79398","url":"tw_stocks/8112.json"},{"revision":"1e70727d8f70f8a71a758053b89a39b4","url":"tw_stocks/8110.json"},{"revision":"8585c59bfa6bedf54d46b1062fc0e4be","url":"tw_stocks/8105.json"},{"revision":"537908adae3c455e6a90c5444fb4239e","url":"tw_stocks/8104.json"},{"revision":"9ac20c6c8105617e6bc2288b2a0e2b2c","url":"tw_stocks/8103.json"},{"revision":"72d0e53b50cde85e2ecf1b3ffee41d5d","url":"tw_stocks/8101.json"},{"revision":"b4e7c5d1399fb76b90f36d039faf3f09","url":"tw_stocks/8081.json"},{"revision":"3687824cd1d6009818d33e07f3fe74a9","url":"tw_stocks/8072.json"},{"revision":"9807d4b6c364fc9100f4d510a2197ac0","url":"tw_stocks/8070.json"},{"revision":"40ef1b7496195171a990673b69a0d607","url":"tw_stocks/8046.json"},{"revision":"b38ffa60d982b830a99fdc82f17702a9","url":"tw_stocks/8045.json"},{"revision":"1efead7ed92ca1ca2bbf3e17f80cfb69","url":"tw_stocks/8039.json"},{"revision":"62357b02a4270c81b503a4b6a9815885","url":"tw_stocks/8033.json"},{"revision":"49d01d3985ef4a18328863674bbc6d85","url":"tw_stocks/8028.json"},{"revision":"0ef594036c27167aab8eb83214d1360b","url":"tw_stocks/8021.json"},{"revision":"110b25584f27176b4d1fdc8f01bba1ce","url":"tw_stocks/8016.json"},{"revision":"6889b89af3ea9ae546dc93bf189bf79f","url":"tw_stocks/8011.json"},{"revision":"290dc57d1c96e525820b25ad93092fe1","url":"tw_stocks/7822.json"},{"revision":"e36e047a072f5213094c72ca703fabe1","url":"tw_stocks/7821.json"},{"revision":"6bb31fb6e73e3c2ea49b48b624c35e52","url":"tw_stocks/7818.json"},{"revision":"b81f96dbee49d7dd523f4a745e8bfb71","url":"tw_stocks/7799.json"},{"revision":"c2801fb4a78c007f28667c8749164bb3","url":"tw_stocks/7795.json"},{"revision":"8ae5398801cf450d41a192c5ccb3212d","url":"tw_stocks/7791.json"},{"revision":"a932a476fe8b6dbccb3e63ebcc4f2551","url":"tw_stocks/7788.json"},{"revision":"266084f1c6ede2903f6e098a690c54ea","url":"tw_stocks/7786.json"},{"revision":"3a851f1ec8a8aa8fbfdfcda7d592fd69","url":"tw_stocks/7780.json"},{"revision":"0e5103164d6de9d51d28d3d17a375a79","url":"tw_stocks/7769.json"},{"revision":"e07456ab8b99aabffa47db4da55a260f","url":"tw_stocks/7768.json"},{"revision":"5af4ca15247eac43e85dd50957c6f0b3","url":"tw_stocks/7765.json"},{"revision":"1600091ace88a97754fb430fa937321f","url":"tw_stocks/7760.json"},{"revision":"b85d09842fcca66ece55e0451c164156","url":"tw_stocks/7750.json"},{"revision":"3024da6840d4e407d48e99714325efb7","url":"tw_stocks/7749.json"},{"revision":"3560656b98ea00cdfcfe8055e0453c20","url":"tw_stocks/7736.json"},{"revision":"6ecfa3c6bfd92d32f2352a7ed8cd8a63","url":"tw_stocks/7732.json"},{"revision":"b4831c28f4154a27ffb8d4fa23f6338c","url":"tw_stocks/7722.json"},{"revision":"f7acc727f8e50843555c9bb2ed805c23","url":"tw_stocks/7721.json"},{"revision":"02495efa90963c8124cd852ed53a8293","url":"tw_stocks/7711.json"},{"revision":"306fb72ccf802f9c1d54ced80f58b188","url":"tw_stocks/7705.json"},{"revision":"f5751247ecb058c4bcd1b8ae1ce78de9","url":"tw_stocks/6994.json"},{"revision":"c58367342f296514564504dea3f6d985","url":"tw_stocks/6965.json"},{"revision":"0143a255a28acae6e660ce5a4b0af93c","url":"tw_stocks/6962.json"},{"revision":"26d18f6c7fdcc56b05ec4bd25b4634be","url":"tw_stocks/6958.json"},{"revision":"2b1ba569ed9dfd11d22db271540d2ef9","url":"tw_stocks/6957.json"},{"revision":"14c54a69fe4b0a3ac3456ebf503ce3bd","url":"tw_stocks/6952.json"},{"revision":"df062bc2750bd5646ead7ea24b1dd403","url":"tw_stocks/6944.json"},{"revision":"143770056d87d0a4a4121d6b5d339f44","url":"tw_stocks/6937.json"},{"revision":"5be4431afcfb3d08740402288a67de5d","url":"tw_stocks/6936.json"},{"revision":"b29d621a5911d40538d9e72e4840385f","url":"tw_stocks/6934.json"},{"revision":"cbcea4cc430c6e2a3f84fd3349b6aeaa","url":"tw_stocks/6933.json"},{"revision":"b89ae509afcbcf2762d76260b31c16ff","url":"tw_stocks/6931.json"},{"revision":"59544ee114a4a87b371653178708d482","url":"tw_stocks/6928.json"},{"revision":"a38465ab5f9b2fe77aa7db64ae49c0e2","url":"tw_stocks/6923.json"},{"revision":"80240cab8c6b07759661c96befbea9e9","url":"tw_stocks/6919.json"},{"revision":"a03e82c248a6495e61ea37fc87a76102","url":"tw_stocks/6918.json"},{"revision":"3c992fecdaffeaa7386297c880289bc5","url":"tw_stocks/6916.json"},{"revision":"60acb97bb0b9fbd6906b2e06174bc6e0","url":"tw_stocks/6914.json"},{"revision":"56fb55cfe0f51e29457ce7e1616c033b","url":"tw_stocks/6909.json"},{"revision":"401ce9d5936eb0eda9c2fda67d0eff13","url":"tw_stocks/6906.json"},{"revision":"ce35dd379a9c29dbb359be5b22f80f2b","url":"tw_stocks/6902.json"},{"revision":"c1677b55e4e0e027a06dd4432a1a21c0","url":"tw_stocks/6901.json"},{"revision":"215a89e973dd06629112a4d6a972918c","url":"tw_stocks/6890.json"},{"revision":"a07e5b4b0eb8d620bdba4ebfa5a4469f","url":"tw_stocks/6887.json"},{"revision":"d311f259ef20b3f3fa06e54afd410a77","url":"tw_stocks/6885.json"},{"revision":"17a3e833fe2adf36ecf9a92df4304207","url":"tw_stocks/6873.json"},{"revision":"9abed7744dac7a4ae5f4eb1a7cccb0ec","url":"tw_stocks/6869.json"},{"revision":"020a1097205df767b18fc641e877f5c9","url":"tw_stocks/6863.json"},{"revision":"dc8ed75fb51a433a2676239dba7f4d74","url":"tw_stocks/6862.json"},{"revision":"8bd368eafd29097fabf32ae30b64b7f5","url":"tw_stocks/6861.json"},{"revision":"8d357b7664c4acb6763bbabdeca6ba5c","url":"tw_stocks/6838.json"},{"revision":"d8a187b6a68698fd2b497446c20a324f","url":"tw_stocks/6835.json"},{"revision":"d2d73b0a540b3484bc6652ddcb5beb9f","url":"tw_stocks/6834.json"},{"revision":"9ed574ad2068bde09765845da530bba7","url":"tw_stocks/6831.json"},{"revision":"1c8da3837eb8747e51c6ee3460081904","url":"tw_stocks/6830.json"},{"revision":"5b6a122200864f7a1fd665b3453a8528","url":"tw_stocks/6807.json"},{"revision":"c236fa11cd577d246ffc52e42436f34d","url":"tw_stocks/6806.json"},{"revision":"70d3b37e6f6bdd14100a9f394f6a7663","url":"tw_stocks/6805.json"},{"revision":"28378c77d8d2a8428cfbe68a56591521","url":"tw_stocks/6799.json"},{"revision":"ba8d93d4f8f06a28c169c45aee5d1df1","url":"tw_stocks/6796.json"},{"revision":"01a2635037ce8a3c73c10985fe33830c","url":"tw_stocks/6794.json"},{"revision":"8cf8db2929f2279ad5733aa0947f4593","url":"tw_stocks/6792.json"},{"revision":"ed5d288a32eb682a30adeaefc5c6f2c2","url":"tw_stocks/6790.json"},{"revision":"39e568dcec46f89f61877af0fe4c2472","url":"tw_stocks/6789.json"},{"revision":"b408dc9c25f9da0b461052b2d6621a38","url":"tw_stocks/6782.json"},{"revision":"4a099916ec0d8d958e11e36698725d1f","url":"tw_stocks/6781.json"},{"revision":"146a4b8dd2c146007af68e4a3583b9ab","url":"tw_stocks/6776.json"},{"revision":"46adb045526a32c703eb7feb12463a03","url":"tw_stocks/6770.json"},{"revision":"4c02d9a663805a1e5df3973b57ab6a9a","url":"tw_stocks/6768.json"},{"revision":"d31a79095581902c87f254d7f34d4a60","url":"tw_stocks/6757.json"},{"revision":"2bd53209028e05ff002b74524e1c3e91","url":"tw_stocks/6756.json"},{"revision":"0863b9dc20fac55904b2c7d6e80b67c0","url":"tw_stocks/6754.json"},{"revision":"0fbda82acef783dac21722305bac67b8","url":"tw_stocks/6753.json"},{"revision":"2f34d5481df9631f204ca99c7804ee40","url":"tw_stocks/6743.json"},{"revision":"ef7f0dd0707594a436fca84a669b45d2","url":"tw_stocks/6742.json"},{"revision":"95a61cd4c6374ebcd7ff06440f34f18d","url":"tw_stocks/6722.json"},{"revision":"3e89aeb442bb6e4198d9d8ccd3e629bf","url":"tw_stocks/6719.json"},{"revision":"544cbc8e27823776234231d306d38bdd","url":"tw_stocks/6715.json"},{"revision":"292305548a2d6e83c1cbd254fb0f0e3b","url":"tw_stocks/6706.json"},{"revision":"657837b33ad9b50ae206fbf813778342","url":"tw_stocks/6698.json"},{"revision":"c8a1199bbbce7a2815c34dc2a7e682a0","url":"tw_stocks/6695.json"},{"revision":"87ee0aaaf72d08ee639f27de2c692cfa","url":"tw_stocks/6691.json"},{"revision":"c85930f140020729b571a16f8f8c9eb5","url":"tw_stocks/6689.json"},{"revision":"e7a4217649e45459bad64cb178eeabd3","url":"tw_stocks/6674.json"},{"revision":"91702ae83b58ee5ac6ad29b0a1dbef36","url":"tw_stocks/6672.json"},{"revision":"414ce04067a99299640de92f601d0bf7","url":"tw_stocks/6671.json"},{"revision":"da939ddc2145fbab1cc7f1d76612f2a9","url":"tw_stocks/6670.json"},{"revision":"4eac749d4ff96265e802fa8f639dc8d5","url":"tw_stocks/6669.json"},{"revision":"8d4a7c13c4a4b091e844665365f68f50","url":"tw_stocks/6668.json"},{"revision":"74271087155092ac7bb9107e3835a96f","url":"tw_stocks/6666.json"},{"revision":"1c70d049ae90efe0ec6044b6151d01e3","url":"tw_stocks/6658.json"},{"revision":"8e68be53ab08da117b211b8ba94aec0a","url":"tw_stocks/6657.json"},{"revision":"fe29fe6f47776c63a02a88af4138b19c","url":"tw_stocks/6655.json"},{"revision":"d3625d80d6ec2967016a69bdc287ce12","url":"tw_stocks/6641.json"},{"revision":"56116b7a936b15855c9c0dbe1c40edde","url":"tw_stocks/6625.json"},{"revision":"16a64e86c7e3641cf86ef7f5994cb73b","url":"tw_stocks/6614.json"},{"revision":"36f159b7b2ccc67f799f8b06c41341df","url":"tw_stocks/6606.json"},{"revision":"323492d01da0c9c0779bc7adcdc22c91","url":"tw_stocks/6605.json"},{"revision":"6c2d6cd37ec2eb5f45d78a6d298b9834","url":"tw_stocks/6598.json"},{"revision":"70a00ad53a0062464b4324d5db737c04","url":"tw_stocks/6592.json"},{"revision":"fff5a71d15df1aa600b0012cbfa4d842","url":"tw_stocks/6591.json"},{"revision":"0da00a651549842d5d9e0023c64cb2e4","url":"tw_stocks/6589.json"},{"revision":"97954418cecfdde998ba248374fa583b","url":"tw_stocks/6585.json"},{"revision":"5872bc172375cb18e85799de735959bf","url":"tw_stocks/6582.json"},{"revision":"bb2928a618fbaa8a2dad7b32415fad0a","url":"tw_stocks/6581.json"},{"revision":"579f6fd978a336fd0ccf40dae45b0c57","url":"tw_stocks/6579.json"},{"revision":"00e35f0fb089395cee6a8438bca3cc46","url":"tw_stocks/6573.json"},{"revision":"c995ae3f485397cb14f10e2ab0a71027","url":"tw_stocks/6558.json"},{"revision":"c2579bf1607c4cd43909d4385c6c8881","url":"tw_stocks/6552.json"},{"revision":"39aa82c4514208a10cab569d2c244404","url":"tw_stocks/6550.json"},{"revision":"c56b446b38426b89c13fc733ed6ebf67","url":"tw_stocks/6541.json"},{"revision":"4fff37ea75a4c938380f7c4bd485e1d3","url":"tw_stocks/6533.json"},{"revision":"3db6f09c07ee6ef1e434e2ddf53fbc61","url":"tw_stocks/6531.json"},{"revision":"02e06e9aa00767384213e503e40c08f3","url":"tw_stocks/6526.json"},{"revision":"8e7a26635bc1c02693f3c5e6c1ad825d","url":"tw_stocks/6525.json"},{"revision":"a1846a2bfb11a1de48fd19852120bcf9","url":"tw_stocks/6515.json"},{"revision":"ed999ef76608d703ae0b745a8635ee65","url":"tw_stocks/6505.json"},{"revision":"ee179947ec402ce4c218e605efd92bb1","url":"tw_stocks/6504.json"},{"revision":"bc676972cb2f4ebfe3f57daefaf8ad50","url":"tw_stocks/6491.json"},{"revision":"f081eb1ffd9bc4b2e415e4f1ce73830c","url":"tw_stocks/6477.json"},{"revision":"d590f5f40d7e550acc0a7e5222f9a15a","url":"tw_stocks/6472.json"},{"revision":"7c03d7aede145f6e2ca56c5a55d0e2b4","url":"tw_stocks/6464.json"},{"revision":"40421d4c8d30daeb5dc119d38fd04d40","url":"tw_stocks/6456.json"},{"revision":"ef3ed6c1119dad1f17ab944533ce5dd6","url":"tw_stocks/6451.json"},{"revision":"282804ef39dfbf29559a3df11ba448a2","url":"tw_stocks/6449.json"},{"revision":"d3af51a6704384c4d90816ede32815c2","url":"tw_stocks/6446.json"},{"revision":"ca31d629484a1e384eb26ba1e3a2faac","url":"tw_stocks/6443.json"},{"revision":"9ac84991de66ce894cc456a351f01e39","url":"tw_stocks/6442.json"},{"revision":"15490480cd565595670217ab09ad0100","url":"tw_stocks/6438.json"},{"revision":"093a6ce006b18698a5ef3874f84eed87","url":"tw_stocks/6431.json"},{"revision":"a9031d77c4bcdbdbe582d40d8af0e12e","url":"tw_stocks/6426.json"},{"revision":"e95d06a473c9275860006bc0d1008afd","url":"tw_stocks/6416.json"},{"revision":"4a4e34feab54d1ee654a6b65301b1f4b","url":"tw_stocks/6415.json"},{"revision":"a75848ddef9c7c5b99ffc39fe5783006","url":"tw_stocks/6414.json"},{"revision":"1f591faa62631b7b87782e762f6ab9d9","url":"tw_stocks/6412.json"},{"revision":"ea71d7568139a26aae0b233e24d046b1","url":"tw_stocks/6409.json"},{"revision":"3038f69fffe9926171b9bdd8542762b6","url":"tw_stocks/6405.json"},{"revision":"39b0f07016477976aa8f8a2e1c7d1366","url":"tw_stocks/6285.json"},{"revision":"3a0bdc69b8c02035a6c6f69b4fc0e44c","url":"tw_stocks/6283.json"},{"revision":"f59904477d949c4f4f61227bb73b1234","url":"tw_stocks/6282.json"},{"revision":"0c28370d470ac0364ec359f5463aa6a2","url":"tw_stocks/6281.json"},{"revision":"85adbf848e81dfd4140038bd1db2bdc1","url":"tw_stocks/6278.json"},{"revision":"edcc8550bc844401246924e4825ea29e","url":"tw_stocks/6277.json"},{"revision":"6b902e728a44df147dace1f5048b6fa4","url":"tw_stocks/6272.json"},{"revision":"24c6306a2a7b59504d47472880581d92","url":"tw_stocks/6271.json"},{"revision":"3a9c3fc1c963f9b7e0cc5ed9fadf0cfc","url":"tw_stocks/6269.json"},{"revision":"0ff2a7b615ea840ab6d91193096e4b23","url":"tw_stocks/6257.json"},{"revision":"045700331c6876bc73cf22f9fd20dfed","url":"tw_stocks/6243.json"},{"revision":"7ea7860e6edd9479cc5d26f81ce5074e","url":"tw_stocks/6239.json"},{"revision":"f33de7de7e347644e6deedb34dbb2c90","url":"tw_stocks/6235.json"},{"revision":"754275e86720e01eba7527901bf28198","url":"tw_stocks/6230.json"},{"revision":"3d1b9ff9a095dec1c822bb90c9ec7e3f","url":"tw_stocks/6226.json"},{"revision":"75fcfd61dd8c9f6712610fe6b505dc65","url":"tw_stocks/6225.json"},{"revision":"e98644a84b95385743963c6643b6ffea","url":"tw_stocks/6224.json"},{"revision":"6f968eca2bf6fc09fea9d28804ea1b05","url":"tw_stocks/6216.json"},{"revision":"5462ded9ad0c8ff14b4ea9a5cf47695c","url":"tw_stocks/6215.json"},{"revision":"90efdb52691679cbfeb27d54624a6a79","url":"tw_stocks/6214.json"},{"revision":"95f645a86b4593d33c156765248a7088","url":"tw_stocks/6213.json"},{"revision":"540606847b21fadb61f87c80a450e4a7","url":"tw_stocks/6209.json"},{"revision":"ae68cb4b1981188a2bfb2c332e4d7e2f","url":"tw_stocks/6206.json"},{"revision":"b582512b3592ff8d6a251276ce1436e0","url":"tw_stocks/6205.json"},{"revision":"cf9a8561660745793ef18819b89df64f","url":"tw_stocks/6202.json"},{"revision":"46a3fffffc60c72c74a4537cd092a133","url":"tw_stocks/6201.json"},{"revision":"197c961d1e8470a031111e5462754e7c","url":"tw_stocks/6197.json"},{"revision":"48fcc8d9ca31fcd8f0a843d503960a2f","url":"tw_stocks/6196.json"},{"revision":"3e4c1696fe73d769eddb1dfd1c417a5d","url":"tw_stocks/6192.json"},{"revision":"889b875b5d54ef284f0c7a3e464087c4","url":"tw_stocks/6191.json"},{"revision":"3cb92b9dab92aecbd51c2be5110b7a3f","url":"tw_stocks/6189.json"},{"revision":"96102dc84647512a3dee4e7fa046ee15","url":"tw_stocks/6184.json"},{"revision":"a8752bab15bfb9026e25c798060a1814","url":"tw_stocks/6183.json"},{"revision":"770e85cb68ec348bdd9cbc260c3bbaf5","url":"tw_stocks/6177.json"},{"revision":"3f8a16d2d219c697caf47372a734fa1b","url":"tw_stocks/6176.json"},{"revision":"bd9cba264c356ca65dfecf137c16368f","url":"tw_stocks/6168.json"},{"revision":"236cdc6877a3a1d3ca019b122007e368","url":"tw_stocks/6166.json"},{"revision":"7213ec01f361f35f6744c074b0914ed2","url":"tw_stocks/6165.json"},{"revision":"9e05bbfb4243a4f23870127abc18e5c9","url":"tw_stocks/6164.json"},{"revision":"8e5e008a2ad21adce612e639151492db","url":"tw_stocks/6155.json"},{"revision":"5fa4e2a48ddf26355933dff6e313e6c5","url":"tw_stocks/6153.json"},{"revision":"fe64b09e1479329d9a612874ee378d41","url":"tw_stocks/6152.json"},{"revision":"2e5ed7ee2fb5ba92ac7f8c4fab0a86c0","url":"tw_stocks/6142.json"},{"revision":"cd617dc15bac002eb58cdb8570efe0b7","url":"tw_stocks/6141.json"},{"revision":"b48bd34d771c088d8ad67127c0e6a115","url":"tw_stocks/6139.json"},{"revision":"c799142860495df4eee691062d1fb662","url":"tw_stocks/6136.json"},{"revision":"22d2db26b4445f5d1b8d7201d8b169f3","url":"tw_stocks/6133.json"},{"revision":"02f5e5b67eeca4121324ca9f67e79421","url":"tw_stocks/6128.json"},{"revision":"2c1925374f406b276a44703b7a59849e","url":"tw_stocks/6120.json"},{"revision":"239b2a541e272c28f912835d58b20957","url":"tw_stocks/6117.json"},{"revision":"2a50d5c80b0e5e140e1c6020b27c64df","url":"tw_stocks/6116.json"},{"revision":"2753bfa37243190dbd6f2acf54eb742d","url":"tw_stocks/6115.json"},{"revision":"427978b61080f3d6b6734ef48dcfccbc","url":"tw_stocks/6112.json"},{"revision":"c1e8f1d82d325c0b2950ba683234c93d","url":"tw_stocks/6108.json"},{"revision":"a274ed8bc2e00d49a1190b21c93423bf","url":"tw_stocks/6024.json"},{"revision":"989992f33081b169b31c2a56dd54832a","url":"tw_stocks/6005.json"},{"revision":"d4df7d4bf36a1d41a4376417e568fb91","url":"tw_stocks/5907.json"},{"revision":"b3cf14cb087cf56861ef41fbaeb7c850","url":"tw_stocks/5906.json"},{"revision":"e7a9415ec6450f9f16f54f268d74bab2","url":"tw_stocks/5880.json"},{"revision":"a8edfbf265448151dbde69d97aac5f6d","url":"tw_stocks/5876.json"},{"revision":"41dd418b89e446f6113892d9aafb4e0f","url":"tw_stocks/5871.json"},{"revision":"11d6f9b255135775efc670beb319a6a2","url":"tw_stocks/5706.json"},{"revision":"365c509164acd91ee9e16c85c924d348","url":"tw_stocks/5608.json"},{"revision":"4ef97615b5c36067b29a251a0615e3de","url":"tw_stocks/5607.json"},{"revision":"38908d7b6c2dfb436775fd47696bd765","url":"tw_stocks/5546.json"},{"revision":"c6b5ad4a08de2cfda8e877308996a118","url":"tw_stocks/5538.json"},{"revision":"65629564b43e0787b315b5acedafb074","url":"tw_stocks/5534.json"},{"revision":"1eafddc713b9abf039dc9487a5f404d4","url":"tw_stocks/5533.json"},{"revision":"2ac827d151c3a723c38aedfb3f5d377e","url":"tw_stocks/5531.json"},{"revision":"96c20c6304821a4f964a7ece605dcc63","url":"tw_stocks/5525.json"},{"revision":"cada46b9d1b2cb81a4098f8f8ca4c315","url":"tw_stocks/5522.json"},{"revision":"099c8e729b12c34c19ffc8bde4342245","url":"tw_stocks/5521.json"},{"revision":"865287b84d7b48bcc48a8b7aaa0d8755","url":"tw_stocks/5519.json"},{"revision":"8348f6226adfed38af7601f7b84cb063","url":"tw_stocks/5515.json"},{"revision":"fa1e96bfc684248a2554703fcf7e2a28","url":"tw_stocks/5484.json"},{"revision":"9c7f4c3d5eecddc5c1090eb4d5a97131","url":"tw_stocks/5471.json"},{"revision":"6d2a4022b017c7ca022115b927f16cd2","url":"tw_stocks/5469.json"},{"revision":"5aaf410eaa3fd4926a7efc94911f3268","url":"tw_stocks/5434.json"},{"revision":"4e494ba79a06041bb26e693f6666f1b6","url":"tw_stocks/5388.json"},{"revision":"6baafd3e20a1f6fc19210de606ed3985","url":"tw_stocks/5306.json"},{"revision":"137fde0025fb63f5c72d2417ef5de36a","url":"tw_stocks/5292.json"},{"revision":"1e33efdd6b894927b30f0e6660c5f856","url":"tw_stocks/5288.json"},{"revision":"486fa53225e17e4148bc0242dc5a7b00","url":"tw_stocks/5285.json"},{"revision":"6211544c767414415f8132b469df9c10","url":"tw_stocks/5284.json"},{"revision":"1a6ac39d31f325c34455232affebb94f","url":"tw_stocks/5283.json"},{"revision":"cc3173c3020e22a4e219795a32d8e979","url":"tw_stocks/5269.json"},{"revision":"72a08ab16fe7cb4e1639abfdbb41d6d9","url":"tw_stocks/5258.json"},{"revision":"8712b75e74cd942048c8663eefddac3e","url":"tw_stocks/5244.json"},{"revision":"812322640796962cc1fdb827c4a79d68","url":"tw_stocks/5243.json"},{"revision":"525c8389332696a7856d1ecbd8336301","url":"tw_stocks/5234.json"},{"revision":"10655f6d31b2bb50dcc0052d4afb0d65","url":"tw_stocks/5225.json"},{"revision":"a03fc1fa7f121f5c3dc39de083e83a64","url":"tw_stocks/5222.json"},{"revision":"1894f7f0d0ac988479e64ea238725a12","url":"tw_stocks/5215.json"},{"revision":"8e71d2567694c6edc5435b047caf3ee0","url":"tw_stocks/5203.json"},{"revision":"ba0f14500218c325c25a5bb0715204c7","url":"tw_stocks/5007.json"},{"revision":"603ee49e1c0d5a081ea97b05fb125c68","url":"tw_stocks/4999.json"},{"revision":"e7eb933c7bdfeb55d2cf7dfb840ea912","url":"tw_stocks/4994.json"},{"revision":"90c0120ae5cee2e289d53e83416f8994","url":"tw_stocks/4989.json"},{"revision":"8e79319bee2ddd67f83f67ea7c66d427","url":"tw_stocks/4977.json"},{"revision":"6f2f20e3350f9b8ad4872226151c0f00","url":"tw_stocks/4976.json"},{"revision":"331e06d1868c170a0b28f3e9a9611118","url":"tw_stocks/4968.json"},{"revision":"09caf5b8099d459dac82f0c92113c671","url":"tw_stocks/4967.json"},{"revision":"0405a0757aa2b7847fa13e0b1dfb78b5","url":"tw_stocks/4961.json"},{"revision":"4f17fabd305f85eb45d43474c1353f19","url":"tw_stocks/4960.json"},{"revision":"ebd1aed2935f86e82ba6ad3aac358ee6","url":"tw_stocks/4958.json"},{"revision":"5dc028e013363db76e5fb51d3956493a","url":"tw_stocks/4956.json"},{"revision":"d76ae1d97bd35322aa092b097fe5fe44","url":"tw_stocks/4952.json"},{"revision":"f6a51aff9c2ec20c3136b2dae3662c12","url":"tw_stocks/4949.json"},{"revision":"50e4b45a4b88b6bd0eabc70dca417e14","url":"tw_stocks/4943.json"},{"revision":"bd5ea64aee59d55831231c1ec91af7ff","url":"tw_stocks/4942.json"},{"revision":"382707157574185ca0a2770d906ff6cd","url":"tw_stocks/4938.json"},{"revision":"e24c885232920fc0239838ad3d109fdf","url":"tw_stocks/4935.json"},{"revision":"6c3da39851e84f62bdeabd716192c610","url":"tw_stocks/4934.json"},{"revision":"df3c8dfbe04c3d94cd971c4050a8957c","url":"tw_stocks/4930.json"},{"revision":"cf1ee4ebea58926d064bbcb705235975","url":"tw_stocks/4927.json"},{"revision":"d9aab501f93c5fc585bed8d1c0b1454f","url":"tw_stocks/4919.json"},{"revision":"e82b6e91ae711dc65ff1d2ea60abcd37","url":"tw_stocks/4916.json"},{"revision":"55c85f7c9a9cd052a9eeaefe9b5fdf9f","url":"tw_stocks/4915.json"},{"revision":"e05802a1ad3c8b70028ca89ad8371377","url":"tw_stocks/4912.json"},{"revision":"00c3b737013ae358045e66c9baa8113d","url":"tw_stocks/4906.json"},{"revision":"0d93d2fafe5019adac8ecc43b73ba92e","url":"tw_stocks/4904.json"},{"revision":"4f71dda5f16b706560b4437aa63cfce0","url":"tw_stocks/4807.json"},{"revision":"0d58bed48366cfbe76c581a84111be7c","url":"tw_stocks/4771.json"},{"revision":"0f3d60569a856defee0eec493495a31a","url":"tw_stocks/4770.json"},{"revision":"ce1245683348b874c5225c582d7b07a3","url":"tw_stocks/4766.json"},{"revision":"041c15e36af60e30b707f98ea0715bb0","url":"tw_stocks/4764.json"},{"revision":"70c960da0b995829b9726c6846a782a4","url":"tw_stocks/4763.json"},{"revision":"9990b42122a9b66538e321e50cccf0e0","url":"tw_stocks/4755.json"},{"revision":"7f4a7b411efef4300a6863f1d66981e3","url":"tw_stocks/4746.json"},{"revision":"97ff5fd3719fa36cc73969325747758a","url":"tw_stocks/4739.json"},{"revision":"39b5d0ed82f373938a33463f5aea32fd","url":"tw_stocks/4737.json"},{"revision":"abe6025933e9ebcd6fc55be17be335f8","url":"tw_stocks/4736.json"},{"revision":"6ae5f24f60abc55807420f5a65de225a","url":"tw_stocks/4722.json"},{"revision":"15d1cd8e955a777269d26c8159fa6ed2","url":"tw_stocks/4720.json"},{"revision":"2efa61ca47fc27c1347dd40dfa5664b2","url":"tw_stocks/4588.json"},{"revision":"193008812eb96c4cc1eaf896dfe913ed","url":"tw_stocks/4585.json"},{"revision":"02f38dbb4f5e5a7d8933f61e32e8c30c","url":"tw_stocks/4583.json"},{"revision":"098977e9e1b5034bc2f63c1ad34e86c8","url":"tw_stocks/4581.json"},{"revision":"1549ad473946100e88dea27f1a9be4e4","url":"tw_stocks/4576.json"},{"revision":"96016668e55224d0419526f3cca73e0f","url":"tw_stocks/4572.json"},{"revision":"0664a19c5054c3d95060ddc8aaf927c8","url":"tw_stocks/4571.json"},{"revision":"214ab6fc8c08061ab4ba3208231aaaa3","url":"tw_stocks/4569.json"},{"revision":"8d27d1284496cf57b4fda36d02d1525b","url":"tw_stocks/4566.json"},{"revision":"111b66c310e19c71583deac1e338b0d9","url":"tw_stocks/4564.json"},{"revision":"c44f2a4a5ae94d957f7ce8f3720e3c33","url":"tw_stocks/4562.json"},{"revision":"c21fa196898efce0142b4227c5369a97","url":"tw_stocks/4560.json"},{"revision":"cd0d1c352cea3feb70cee0e8b28520aa","url":"tw_stocks/4557.json"},{"revision":"c68213c001e0a56615cea593fb9b89e2","url":"tw_stocks/4555.json"},{"revision":"045f72326df0de6478722aedc743115b","url":"tw_stocks/4552.json"},{"revision":"552f6743ff947582a8c24b5a86e263c5","url":"tw_stocks/4551.json"},{"revision":"fd41251268271643d35b0c792a8af7cc","url":"tw_stocks/4545.json"},{"revision":"eea02878a9103dc6507641a9c311a167","url":"tw_stocks/4540.json"},{"revision":"96df3ad03874c8b19fc05fa7c88e3328","url":"tw_stocks/4536.json"},{"revision":"1ea7d848e15ffad50bd23098e05898b0","url":"tw_stocks/4532.json"},{"revision":"9c41ff6252414d8ee257fcc4c71cfe83","url":"tw_stocks/4526.json"},{"revision":"82101a0000eccb15131c4993e26fecdc","url":"tw_stocks/4441.json"},{"revision":"3aa73518d571b0f560ff5816fbd74595","url":"tw_stocks/4440.json"},{"revision":"915ba0ef0755ba49b8756edec2b44a15","url":"tw_stocks/4439.json"},{"revision":"7369518d61fde6eaeece0666ceacd92b","url":"tw_stocks/4438.json"},{"revision":"6fc4990003e281cda8eb29900b6fe035","url":"tw_stocks/4426.json"},{"revision":"a06fc07ac0935eca209f833c5e4a9b1f","url":"tw_stocks/4414.json"},{"revision":"95ecbe04bfdd687a68a2fa788b6a40be","url":"tw_stocks/4306.json"},{"revision":"04cd70253ba372e4a19dee716e73b1f3","url":"tw_stocks/4190.json"},{"revision":"193e18102bf91e89d20a7e1611e9ff30","url":"tw_stocks/4178.json"},{"revision":"1cbeb8e2af1d671d8a523a3fe4ccf401","url":"tw_stocks/4169.json"},{"revision":"4614dbd4c9d27ff912943ecdb7d8a0ed","url":"tw_stocks/4164.json"},{"revision":"ce2ff7b820385d91fa1dbdfe90f0cbfb","url":"tw_stocks/4155.json"},{"revision":"c9fe3e2961f94bb0cc0a245900417339","url":"tw_stocks/4148.json"},{"revision":"a819941facb1b546d8697a71f686a96c","url":"tw_stocks/4142.json"},{"revision":"493f815993adb4febe3088975755b0fa","url":"tw_stocks/4137.json"},{"revision":"2f175beef95b387d54b4e4e420ba42db","url":"tw_stocks/4133.json"},{"revision":"70aa68bbb83b21b505b86bd1be07166b","url":"tw_stocks/4119.json"},{"revision":"f7cb41a9b9f3752ce0b8e60a4fe2fdc4","url":"tw_stocks/4108.json"},{"revision":"849605d73a4621eb8516c51144f2f214","url":"tw_stocks/4106.json"},{"revision":"7977fe1bd31ebb83be5d203c25b14c6b","url":"tw_stocks/4104.json"},{"revision":"f8c95d7efffcd51dcbeb633f47e8d0d8","url":"tw_stocks/3717.json"},{"revision":"9335d453dced8eab4c430387d633152c","url":"tw_stocks/3716.json"},{"revision":"ff592cad7d07c9528add039fb05c7519","url":"tw_stocks/3715.json"},{"revision":"381477790e151fc8e35ab78fc3084987","url":"tw_stocks/3714.json"},{"revision":"7e8efb7746c3b2c762766de87f7c8f1f","url":"tw_stocks/3712.json"},{"revision":"b9b1e68b6bc29c7b1f66eeada3df5e9d","url":"tw_stocks/3711.json"},{"revision":"f6711b6d33025ef67c86f44903546a59","url":"tw_stocks/3708.json"},{"revision":"86465d0576db0abcef7008252d50c81f","url":"tw_stocks/3706.json"},{"revision":"504db0fdb179a2eda6aa1861f08f566e","url":"tw_stocks/3705.json"},{"revision":"ad6fc6fce0d9089f8e4e4271e9adc355","url":"tw_stocks/3704.json"},{"revision":"c78db66138585d0ccbb94400908ffe48","url":"tw_stocks/3703.json"},{"revision":"477f3798d13822c6c394cd73bffd2312","url":"tw_stocks/3702.json"},{"revision":"fe9d19848b5a04c5825979ea66ecc42e","url":"tw_stocks/3701.json"},{"revision":"6c2da09b88025acce3203da253851433","url":"tw_stocks/3694.json"},{"revision":"e6c5515ce783d683520de0e9a66a898d","url":"tw_stocks/3686.json"},{"revision":"5f2d382c45f9a71ee7a2ba76b7931815","url":"tw_stocks/3679.json"},{"revision":"76068731720955bf3018f9ab17fb7344","url":"tw_stocks/3673.json"},{"revision":"3debb01856f0d9fff36d54ffaf425061","url":"tw_stocks/3669.json"},{"revision":"966de82d70107abd529f0fc1ff97c650","url":"tw_stocks/3665.json"},{"revision":"8d18afa31c1e6b1cc95b9d9e244dfbf3","url":"tw_stocks/3661.json"},{"revision":"beb9cfb536d7982d70912e90033f637e","url":"tw_stocks/3653.json"},{"revision":"70f91c24febe17db62601b4a21bcf080","url":"tw_stocks/3652.json"},{"revision":"b53b001c89052793c386bafc0daf3e81","url":"tw_stocks/3645.json"},{"revision":"6ca38b72bad7868b4a31e91692e29c2c","url":"tw_stocks/3622.json"},{"revision":"9eca0c706acf20ab0eb8fd67871384b3","url":"tw_stocks/3617.json"},{"revision":"7979df4b62d80eae1db640d326c82470","url":"tw_stocks/3607.json"},{"revision":"69fade9e9efbd493191b56990ffd43b3","url":"tw_stocks/3605.json"},{"revision":"a4356104096dc3767c8acbbdb27a30c9","url":"tw_stocks/3596.json"},{"revision":"d44a4d0a3382da3a35a0e4bb13d39dfa","url":"tw_stocks/3593.json"},{"revision":"1380ba90b9feef41c430e8841b576f96","url":"tw_stocks/3592.json"},{"revision":"356de230bfec3a447901b516ac21e66e","url":"tw_stocks/3591.json"},{"revision":"722890708235d8ccaf7ac44dc3f06383","url":"tw_stocks/3588.json"},{"revision":"43cd2724ad824d6b748cc9a1c9f0079d","url":"tw_stocks/3583.json"},{"revision":"493b8ff2d076e6d5f726fa679c596006","url":"tw_stocks/3576.json"},{"revision":"e3ffdd12b2404821ce7a27ba24f584f0","url":"tw_stocks/3563.json"},{"revision":"7ed3d2d4958be1273a2c4fa3bd4aa365","url":"tw_stocks/3557.json"},{"revision":"47b0dcd8c8deee26f973e624714e8ae2","url":"tw_stocks/3550.json"},{"revision":"b5779e5879385e8a18d9da66fe349434","url":"tw_stocks/3545.json"},{"revision":"8987c89d086536222902b05b126d0267","url":"tw_stocks/3543.json"},{"revision":"235060d261d8e9d0ea1b2f38e12ab4ab","url":"tw_stocks/3535.json"},{"revision":"4c956fd136212b7e79eb7e9c0d906d17","url":"tw_stocks/3533.json"},{"revision":"89af99755085339f3cd021d4f4e91efb","url":"tw_stocks/3532.json"},{"revision":"c09c4ae00bab232099ef2006f4a57995","url":"tw_stocks/3530.json"},{"revision":"9902bc578e0b66520c09eb7444f3acac","url":"tw_stocks/3528.json"},{"revision":"537dc7749e662d27d506409aa7646e22","url":"tw_stocks/3518.json"},{"revision":"ace9cf59053c553ac2fff3e9fc88216d","url":"tw_stocks/3515.json"},{"revision":"0c37deaeaa2f40f10cac351b362ade81","url":"tw_stocks/3504.json"},{"revision":"17863b076e9b1ca1b2a47ec0dc420b04","url":"tw_stocks/3501.json"},{"revision":"4c2ec4302a27fd2fb50b5054b811a911","url":"tw_stocks/3494.json"},{"revision":"9694fa6b008b2d3b30dc59756f618e17","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"91d839d155ada03c6cc75437400140c9","url":"tw_stocks/3450.json"},{"revision":"ee3ccfde5e691f4f64499fc4a84a0ce1","url":"tw_stocks/3447.json"},{"revision":"16370b91317af5688bf3a678b761b7f8","url":"tw_stocks/3443.json"},{"revision":"c3651443c51f4395d0cf8798875e483e","url":"tw_stocks/3437.json"},{"revision":"06b198f3eceace17c7445e51003caa6b","url":"tw_stocks/3432.json"},{"revision":"add0f946a0062fe0bf1502f612575583","url":"tw_stocks/3419.json"},{"revision":"24025d3e987c13c97e563682e70b7804","url":"tw_stocks/3416.json"},{"revision":"871a6665fe6a8b1f439fd86ab2c40c2b","url":"tw_stocks/3413.json"},{"revision":"3f976bf6699c68afa964577edb63bb3e","url":"tw_stocks/3406.json"},{"revision":"9c40be6135c5f53d1efaa5eb8249346e","url":"tw_stocks/3380.json"},{"revision":"5fa70505999d2e1d0ee646ea805b0e76","url":"tw_stocks/3376.json"},{"revision":"2597438dc93f0eaf885606ad1d4ddff3","url":"tw_stocks/3356.json"},{"revision":"9d72415a96eaa07e59edb3ac363209b7","url":"tw_stocks/3346.json"},{"revision":"ee14a0bcd112c9f2e702e52260af492e","url":"tw_stocks/3338.json"},{"revision":"bfb0f01c3c20c45ef1de63e0c430b12b","url":"tw_stocks/3321.json"},{"revision":"ab8213d620158df858684b86cc47c2f9","url":"tw_stocks/3312.json"},{"revision":"9cd51f99720fa246be47c551cd2933c5","url":"tw_stocks/3311.json"},{"revision":"1960f63e79e0156410dde8f1a1b9cf90","url":"tw_stocks/3308.json"},{"revision":"7412a0bb49975b6f2e4baec4af7f3d9f","url":"tw_stocks/3305.json"},{"revision":"fb4d761c4db040838dc0e4cfcf696b46","url":"tw_stocks/3296.json"},{"revision":"09f715830f520945f6eb48dd51d241bd","url":"tw_stocks/3266.json"},{"revision":"1523ed3069d41ae64920ff91f683c502","url":"tw_stocks/3257.json"},{"revision":"a205f381b377c577c5c4a904393deac5","url":"tw_stocks/3231.json"},{"revision":"afdc2b545dd57c23050ae55787551a6b","url":"tw_stocks/3229.json"},{"revision":"b5117cd5356553b8d7662783c7447491","url":"tw_stocks/3209.json"},{"revision":"7937f7bb7205b1e8acb309b8fd08afea","url":"tw_stocks/3189.json"},{"revision":"034bd5d91ffd1963acbbfe5e1dd89d56","url":"tw_stocks/3168.json"},{"revision":"d0c1a663690a83e7ba6665b682070301","url":"tw_stocks/3167.json"},{"revision":"53af3a62574fa6a0597b40164db3829c","url":"tw_stocks/3164.json"},{"revision":"eb607c912000173d0600c289758d4616","url":"tw_stocks/3149.json"},{"revision":"89aa7104cb4ef9897eac243a35dfd667","url":"tw_stocks/3138.json"},{"revision":"c67bffa53ff43c36094e18083be1bb70","url":"tw_stocks/3135.json"},{"revision":"3ecd87a973194f23841df4af84c4723e","url":"tw_stocks/3130.json"},{"revision":"fef26da299338bd21f17e03ae091566d","url":"tw_stocks/3094.json"},{"revision":"9a5137d451bc169abf451cfaf015547a","url":"tw_stocks/3092.json"},{"revision":"466b6ca7264c81d031727ffe883f5f73","url":"tw_stocks/3090.json"},{"revision":"8cf05fc043ac7f74e8843423b1d4c888","url":"tw_stocks/3062.json"},{"revision":"3bdc89a24e8a368737f10f2bcfa5c4f4","url":"tw_stocks/3060.json"},{"revision":"777102379311abcb97165a448f986455","url":"tw_stocks/3059.json"},{"revision":"2787cb38dddf536558c78996cd16c0dd","url":"tw_stocks/3058.json"},{"revision":"91553517821b19b2c32d600883ccec1b","url":"tw_stocks/3057.json"},{"revision":"8c3b1300a9a4d6d23273077f78b313d2","url":"tw_stocks/3056.json"},{"revision":"dbe0b429c1026605ee1d80702211f212","url":"tw_stocks/3055.json"},{"revision":"23711d390e939c48c7c5786f5669e9b3","url":"tw_stocks/3054.json"},{"revision":"d49a837e8f8c9a489dde4cb579c5b8df","url":"tw_stocks/3052.json"},{"revision":"595e95db36bdae3e3ac5987ab79110a4","url":"tw_stocks/3051.json"},{"revision":"ef7de51763a3d1b406d417a9ae14863d","url":"tw_stocks/3050.json"},{"revision":"0c29879b164bbc0ff5d7f0fb5cdced2d","url":"tw_stocks/3049.json"},{"revision":"12974945ea26601d43b6f7408f7b21dc","url":"tw_stocks/3048.json"},{"revision":"3e61c3f6b2ef633bfd886348b86b3a69","url":"tw_stocks/3047.json"},{"revision":"6c4404d81ab8900b4b8c2fcf7b64110e","url":"tw_stocks/3046.json"},{"revision":"5b85487dacc4f660afe7cdae07c7697e","url":"tw_stocks/3045.json"},{"revision":"2219319152447ea622918ae7ed797ae2","url":"tw_stocks/3044.json"},{"revision":"60971cb1a2e99898146a91fad7dc9561","url":"tw_stocks/3043.json"},{"revision":"5f5e722b917731ae8eab49fab3a44267","url":"tw_stocks/3042.json"},{"revision":"ed8a1bfe999fd49189dfc3a2af4bff84","url":"tw_stocks/3041.json"},{"revision":"49b21b8980473eada04015d2d4175bc7","url":"tw_stocks/3040.json"},{"revision":"4c62b3119a95099126c3a54f1b945d6a","url":"tw_stocks/3038.json"},{"revision":"643921ba9f3a7be4802e0b2905326b22","url":"tw_stocks/3037.json"},{"revision":"6f295634327a2f544ae7c5a994814a54","url":"tw_stocks/3036.json"},{"revision":"b64e407987a0bc130a28547d86735437","url":"tw_stocks/3035.json"},{"revision":"2eff48d0055de0599d1e8d5ca11d0a23","url":"tw_stocks/3034.json"},{"revision":"213d0c4f666b9747c495e62f275afae9","url":"tw_stocks/3033.json"},{"revision":"37727403f83b834ef5709c9514d6cd6d","url":"tw_stocks/3032.json"},{"revision":"8097b21defe550b1f278372ba3b19a65","url":"tw_stocks/3031.json"},{"revision":"d9bc925774b9d3bc496f1b50790eea88","url":"tw_stocks/3030.json"},{"revision":"2eac819ff3849a4e123c496487e9fbbb","url":"tw_stocks/3029.json"},{"revision":"4867abc43d5e27ed1376b534348d6b04","url":"tw_stocks/3028.json"},{"revision":"41cb216b268ba0398f4c2a174b6efa65","url":"tw_stocks/3027.json"},{"revision":"d9b816e4d4a346330452ee4c428d583d","url":"tw_stocks/3026.json"},{"revision":"20d544a28579a36d727a11faf55bfdbc","url":"tw_stocks/3025.json"},{"revision":"822c28b67f7559310aac852019aa047d","url":"tw_stocks/3024.json"},{"revision":"84e2252b73559f2b9e77d53c47896ad5","url":"tw_stocks/3023.json"},{"revision":"c90c299481ce0c16234fe0917f0a8414","url":"tw_stocks/3022.json"},{"revision":"c887bef911ec7aac3a6aef8ba73a8393","url":"tw_stocks/3021.json"},{"revision":"1173eeebeabab968b8afca8f83c3033c","url":"tw_stocks/3019.json"},{"revision":"38e0c40d97746f1ce581e88983c94eab","url":"tw_stocks/3018.json"},{"revision":"fc47e9b92f50405975446f91fb67c012","url":"tw_stocks/3017.json"},{"revision":"181761db3802b07c6328f0b80bc42dc3","url":"tw_stocks/3016.json"},{"revision":"a468c6214a947bb2c2e23165f0583781","url":"tw_stocks/3015.json"},{"revision":"865e36071dc536ef8675e5c7735fc2c2","url":"tw_stocks/3014.json"},{"revision":"66f3e5dcaf52894eab0d6c534900df50","url":"tw_stocks/3013.json"},{"revision":"a3ae5d20358d42b6363f8074030d950a","url":"tw_stocks/3011.json"},{"revision":"dd340e3ee309853108b8380926678378","url":"tw_stocks/3010.json"},{"revision":"3e5258820a47c8491473d87aa19b8c41","url":"tw_stocks/3008.json"},{"revision":"c4b41898408728d54e544a08ae2b4ef8","url":"tw_stocks/3006.json"},{"revision":"2143a69bc4dca1e4ea6613afcab822e0","url":"tw_stocks/3005.json"},{"revision":"f89e85053f4e79f85e23eca2b56eba52","url":"tw_stocks/3004.json"},{"revision":"8b25cb4570b9efd373e6959b442013b7","url":"tw_stocks/3003.json"},{"revision":"3a75e5c22ad36d5864d3bff14fe39a6d","url":"tw_stocks/3002.json"},{"revision":"5e37cabb1ab9565f3d701359f408ce6d","url":"tw_stocks/2945.json"},{"revision":"6c0be4cc9489a3af0e984ddccafa5cd0","url":"tw_stocks/2939.json"},{"revision":"dd1f0901323d8ac64aa9b0739a8b7286","url":"tw_stocks/2929.json"},{"revision":"90468a9a451c306aaf99773a93c85c66","url":"tw_stocks/2923.json"},{"revision":"e45d70e73dbe7c478a3bdd9bca6e5349","url":"tw_stocks/2915.json"},{"revision":"7e7ff6c3cbd9cdbd0fb56410d6f7734f","url":"tw_stocks/2913.json"},{"revision":"644cb3997af56b3f89937b9f0cd417a6","url":"tw_stocks/2912.json"},{"revision":"34c22638090797eee54833f29c7d02e3","url":"tw_stocks/2911.json"},{"revision":"63bd2f98216eb840e7a95404ba4133a4","url":"tw_stocks/2910.json"},{"revision":"b6e0594dd92d4a78745c5d53c8a2b672","url":"tw_stocks/2908.json"},{"revision":"5db3095a1caffe177cea6e3f85ee1d6b","url":"tw_stocks/2906.json"},{"revision":"1a421021295367cd61e72d857d9c7052","url":"tw_stocks/2905.json"},{"revision":"dfb66aa1067480429ac99e8d4d18d655","url":"tw_stocks/2904.json"},{"revision":"cca329ad8170a8fa9a5def553e611b80","url":"tw_stocks/2903.json"},{"revision":"4afc3a65b48a9b06dc625b0980fe89f3","url":"tw_stocks/2901.json"},{"revision":"ea2cd972155e0955f08e1cb78fc9a617","url":"tw_stocks/2897.json"},{"revision":"877dabf8c912ead6bf1d40f9f39c1201","url":"tw_stocks/2892.json"},{"revision":"c548587bb654295f75ff50c7e557bb6d","url":"tw_stocks/2891.json"},{"revision":"e3b33540a1c69a1eb1be128f6483dc3d","url":"tw_stocks/2890.json"},{"revision":"aab05ce4367fb01c7134140d3e4d9e46","url":"tw_stocks/2889.json"},{"revision":"d41b7177dfa881ad9bf8b5604ba215a7","url":"tw_stocks/2887.json"},{"revision":"81c0376b52507b90409ef7f4e9a718ac","url":"tw_stocks/2886.json"},{"revision":"a30894f6c82ee8fe75143333b2fe931a","url":"tw_stocks/2885.json"},{"revision":"543b3f5886ece11daad3f8e1f637c723","url":"tw_stocks/2884.json"},{"revision":"70dcb2c4378627fd6401743206eef246","url":"tw_stocks/2883.json"},{"revision":"7dd0b540c3722061819a3e1ef6226113","url":"tw_stocks/2882.json"},{"revision":"6a21b709e60ce3b54261c3164c0cfaae","url":"tw_stocks/2881.json"},{"revision":"65a5f9eeec658e63e15fc482b8fe9731","url":"tw_stocks/2880.json"},{"revision":"148245731e7d2b7495ff4b4f0382579e","url":"tw_stocks/2867.json"},{"revision":"57b24c074a8c15dc5d64d24c56ca84c5","url":"tw_stocks/2855.json"},{"revision":"8cbec0bee61b21d3aea4faabcc8dc8fd","url":"tw_stocks/2852.json"},{"revision":"d1f1981c4407706bed191af5ea52ca8f","url":"tw_stocks/2851.json"},{"revision":"a99ada0b66384e0b32676f5cce3b21f0","url":"tw_stocks/2850.json"},{"revision":"0ec03510c74f138bb92d0d46c75c5f47","url":"tw_stocks/2849.json"},{"revision":"5738fe90b9dcaf4023ab24d8620d9923","url":"tw_stocks/2845.json"},{"revision":"c1e6a921393f66d1bf86d22fcba5ff67","url":"tw_stocks/2838.json"},{"revision":"9d5c66ca26c3fa3971fa6aea4f1a8a85","url":"tw_stocks/2836.json"},{"revision":"a2077f9122e3dcbf0cc3bd2b3f2d0baa","url":"tw_stocks/2834.json"},{"revision":"239e1204cb5baa8379d09d0b4a5c55e2","url":"tw_stocks/2832.json"},{"revision":"51291846a249ae85624dcaea1f1a5259","url":"tw_stocks/2820.json"},{"revision":"15bf06e9fc808fecf2e6eade9598da7e","url":"tw_stocks/2816.json"},{"revision":"f279d568a7cf7c285a662fce49d7b04b","url":"tw_stocks/2812.json"},{"revision":"bfcfa030c303a6011ca05f38493fe665","url":"tw_stocks/2801.json"},{"revision":"5cc57da81a367cf342d2e05e78a29553","url":"tw_stocks/2762.json"},{"revision":"a5eed992122d241f7f0ebe47b3c5c107","url":"tw_stocks/2753.json"},{"revision":"37d26c33b3d59d2df262d2b6fa69f25a","url":"tw_stocks/2748.json"},{"revision":"c87238f0d0c0e42e9c7458e740a9fced","url":"tw_stocks/2739.json"},{"revision":"c8b77591708696e4ff3f6e6b63210237","url":"tw_stocks/2731.json"},{"revision":"ae58a1009e54170f89d0114e17e1810f","url":"tw_stocks/2727.json"},{"revision":"1a3bc86fb7a3a9d69bc7d9f4bc7104e1","url":"tw_stocks/2723.json"},{"revision":"d131b325f93832c73a93ba157c340b2b","url":"tw_stocks/2722.json"},{"revision":"f054d15a16d313a32a2c58fdd97a3d5d","url":"tw_stocks/2712.json"},{"revision":"cd49d3be7e4b77384693aaa033ee3f26","url":"tw_stocks/2707.json"},{"revision":"c91d03a4e012955bec89262246c8f439","url":"tw_stocks/2706.json"},{"revision":"3faff13dc8866a41afd9d1981c620841","url":"tw_stocks/2705.json"},{"revision":"d9b14df8ddb08d0cefa42aaae1e2a419","url":"tw_stocks/2704.json"},{"revision":"05e33dafe1f29311ee3892c57f15179b","url":"tw_stocks/2702.json"},{"revision":"dbc86c97f2f287a30a4120c0ad7d4800","url":"tw_stocks/2701.json"},{"revision":"5da22c8729665f6dc903560f8679bb1d","url":"tw_stocks/2646.json"},{"revision":"c0a634f7083f34daaf5ab5b8211758b3","url":"tw_stocks/2645.json"},{"revision":"828bda41000f01cb3d7c670350ce27ca","url":"tw_stocks/2642.json"},{"revision":"5ebb0b7959196cd434edc0d0bde33366","url":"tw_stocks/2637.json"},{"revision":"f7f56f435b31ffc8e0b947bb1ce4475f","url":"tw_stocks/2636.json"},{"revision":"724352e159bb45afc0552f487598a397","url":"tw_stocks/2634.json"},{"revision":"a48f0bc913e2728d328becbf069d0864","url":"tw_stocks/2633.json"},{"revision":"7ef8bebc689117b4ea50451cb453e918","url":"tw_stocks/2630.json"},{"revision":"ada4b346ecbc9c8f0fb6d41997576e29","url":"tw_stocks/2618.json"},{"revision":"1f5fe9b4d5a7aeb522932597c97113c7","url":"tw_stocks/2617.json"},{"revision":"323f830c60dfdf2df9c5eea654d0cbca","url":"tw_stocks/2616.json"},{"revision":"e67123b5ece06684c0d21816f19ba2f0","url":"tw_stocks/2615.json"},{"revision":"e142ccfcdd6299966e1414f16044e4b8","url":"tw_stocks/2614.json"},{"revision":"10612fd0997e52d215172506aee384ff","url":"tw_stocks/2613.json"},{"revision":"b25d489bdc0af3d553737f8d6c1d4a19","url":"tw_stocks/2612.json"},{"revision":"b43b377a4bde72a3658500059355068b","url":"tw_stocks/2611.json"},{"revision":"fc09e3c53d50dfb7ed239241b32b6ff8","url":"tw_stocks/2610.json"},{"revision":"0976788b3b422eeffea1671e01a28e6b","url":"tw_stocks/2609.json"},{"revision":"6484bd3876df48ec22f38d122205a017","url":"tw_stocks/2608.json"},{"revision":"d03876d4e96715057f0c89b7512096dc","url":"tw_stocks/2607.json"},{"revision":"673d07a7fd01cf951bb519a747b5655f","url":"tw_stocks/2606.json"},{"revision":"6e1c91f44014c7f211a136eddbebc267","url":"tw_stocks/2605.json"},{"revision":"d814f29dfd090c6dc5050710267b880e","url":"tw_stocks/2603.json"},{"revision":"bc546944930f884d796fca6beaa519ca","url":"tw_stocks/2601.json"},{"revision":"66528910e555e505f0d47139d4e0e423","url":"tw_stocks/2597.json"},{"revision":"ae0da8686dca705448c36f4928bb58e8","url":"tw_stocks/2548.json"},{"revision":"130271adf6a40a320b43ebb22d4a5493","url":"tw_stocks/2547.json"},{"revision":"13ab19d2908cb654fbfa99a814bf79ee","url":"tw_stocks/2546.json"},{"revision":"7d878504668de5715afe4d0046efec3e","url":"tw_stocks/2545.json"},{"revision":"be5c11af7b76359a10232ed08a292b7a","url":"tw_stocks/2543.json"},{"revision":"f299ce73934f2701e0b8624b73923c88","url":"tw_stocks/2542.json"},{"revision":"a94606d176d9c0fe525b0b619dc59476","url":"tw_stocks/2540.json"},{"revision":"1ff1ddea004bda64d95354aa4e5f378c","url":"tw_stocks/2539.json"},{"revision":"9a0da70d36997481fbd80d57c2b7b4fa","url":"tw_stocks/2538.json"},{"revision":"9133bbd5c022e98ccae1f40e89a210ec","url":"tw_stocks/2537.json"},{"revision":"62b41f457c42b6f54470a61d0c0abd36","url":"tw_stocks/2536.json"},{"revision":"93929bfdf6614b9b8baf0ff84f0322ea","url":"tw_stocks/2535.json"},{"revision":"859a346d58e6e2a00186d26abeacf14b","url":"tw_stocks/2534.json"},{"revision":"e9e669983b7ea3a6ef90fd5b05214977","url":"tw_stocks/2530.json"},{"revision":"b5c6fbf3232551f2d32660dae896d2c7","url":"tw_stocks/2528.json"},{"revision":"aeec91fd6c38d004d3ca0c7c54083da4","url":"tw_stocks/2527.json"},{"revision":"55709a90348b7027cbcd72c880d70aa2","url":"tw_stocks/2524.json"},{"revision":"b7e861d96b2d4185e6311a7352035b8e","url":"tw_stocks/2520.json"},{"revision":"6b54abcb5dd2563792772d78f175478a","url":"tw_stocks/2516.json"},{"revision":"a289ddf6ac1f15905d62bdd439cfbb33","url":"tw_stocks/2515.json"},{"revision":"8cf446cae2eeb95b9e44df2354acc9b8","url":"tw_stocks/2514.json"},{"revision":"0909d0c30de6683dfdd95cc69f2e755a","url":"tw_stocks/2511.json"},{"revision":"f0dafa05e56f4af29dd4559eef5bc8d4","url":"tw_stocks/2509.json"},{"revision":"eeeacf9387f76866bd11bdce661508d6","url":"tw_stocks/2506.json"},{"revision":"519ca15258c397583fd4f95f2f003b80","url":"tw_stocks/2505.json"},{"revision":"ded437b24a9e2df404ddaa88364ac9bf","url":"tw_stocks/2504.json"},{"revision":"041f2717898f46f56063192a0a8770f6","url":"tw_stocks/2501.json"},{"revision":"9c051fd5016536f29d159f8d07b41e86","url":"tw_stocks/2498.json"},{"revision":"994f9a08f3778e1c4817a9e741559cc7","url":"tw_stocks/2497.json"},{"revision":"2832536d54c260e0c944dcf082ccb6a0","url":"tw_stocks/2496.json"},{"revision":"7e0ec4c687360bdb6f69f22e3d3273f5","url":"tw_stocks/2495.json"},{"revision":"c34111750e45b456fe1f4ab12b737002","url":"tw_stocks/2493.json"},{"revision":"026590e44c5eb3f94d47c18b714962d1","url":"tw_stocks/2492.json"},{"revision":"e9e753008e9c4547a2b4176c9d4ea5f3","url":"tw_stocks/2491.json"},{"revision":"169247730c78cc9e5a4db090b4733d22","url":"tw_stocks/2489.json"},{"revision":"d71689c7e07ffc035a5be53391ce9bb3","url":"tw_stocks/2488.json"},{"revision":"798092f0505154681f409590cd605749","url":"tw_stocks/2486.json"},{"revision":"87288871810d6439abd8966b63d6c05e","url":"tw_stocks/2485.json"},{"revision":"1af7a686543172ec4aa80708971f243d","url":"tw_stocks/2484.json"},{"revision":"be451ac492b317c8a84b1031befcf6ba","url":"tw_stocks/2483.json"},{"revision":"0b4082dc15d0b495c735108363a03849","url":"tw_stocks/2482.json"},{"revision":"776e31255208b9ae8831a9a1ed0ed9ed","url":"tw_stocks/2481.json"},{"revision":"f15ab1eebdb5c7f8c4a37fdd0501abb7","url":"tw_stocks/2480.json"},{"revision":"91a2b6b1f7aa00d6b9e9546ab6b55d14","url":"tw_stocks/2478.json"},{"revision":"64d0ae0baea3a80b9a7bd1e035dcbb77","url":"tw_stocks/2477.json"},{"revision":"e14bbe74010337074ec65fe4c610f7d1","url":"tw_stocks/2476.json"},{"revision":"be07adc327c2b3d04e8a7834e28f6684","url":"tw_stocks/2474.json"},{"revision":"d3b3dde5dc5e46ade0fcf4998222060b","url":"tw_stocks/2472.json"},{"revision":"714e4334ffd754ab2a52092a5796c4d1","url":"tw_stocks/2471.json"},{"revision":"12975d6ddb5c5dd78c016eceb2f223e8","url":"tw_stocks/2468.json"},{"revision":"3ff119ee4875083dbb1403757d432fe0","url":"tw_stocks/2467.json"},{"revision":"b1f0e8a17a2b0593831bd3bd72eeba46","url":"tw_stocks/2466.json"},{"revision":"bf7cd1bc93bc0a63057ff89c75faeaa9","url":"tw_stocks/2465.json"},{"revision":"1c4c1fddeb0366832a2571be32a798c7","url":"tw_stocks/2464.json"},{"revision":"51b3c0e966c65f4845791851344b4572","url":"tw_stocks/2462.json"},{"revision":"1c97ecf576d301a9d10c973c86e1e4b1","url":"tw_stocks/2461.json"},{"revision":"18b1ab2ccdb55e32a5ba41a5951e2797","url":"tw_stocks/2460.json"},{"revision":"646f6e3504d8442f961abdaa23009d1f","url":"tw_stocks/2459.json"},{"revision":"3a029eb39c021b0663b8a3079ef47e28","url":"tw_stocks/2458.json"},{"revision":"2b78ae8dd1bf196226e04f929c44c9c8","url":"tw_stocks/2457.json"},{"revision":"c8dc304f39e7ea9d479d59f285e19e9e","url":"tw_stocks/2455.json"},{"revision":"273ff181e34a5c35f8f97881c99dfc26","url":"tw_stocks/2454.json"},{"revision":"18f297ba1d99c93cc8860b7ba13b0cc8","url":"tw_stocks/2453.json"},{"revision":"5bc4c233af33bd7148ad020a66c97fc9","url":"tw_stocks/2451.json"},{"revision":"457bf3560ab43a7f50aa47544ec7d380","url":"tw_stocks/2450.json"},{"revision":"fca9ecc4892be654228dab43ccbff496","url":"tw_stocks/2449.json"},{"revision":"c08f8025495049b58bb520ba14f1cf00","url":"tw_stocks/2444.json"},{"revision":"a6f1b866135ccf528163ccfd00f6e3c4","url":"tw_stocks/2442.json"},{"revision":"6ef1ddc03ae06fc017460d43cc427343","url":"tw_stocks/2441.json"},{"revision":"07f421f119a1faceb18dd6e07558e071","url":"tw_stocks/2440.json"},{"revision":"b1a2a1a039ac831d05123c0397a6d46b","url":"tw_stocks/2439.json"},{"revision":"7d63ee7a6283268d26136033a3944c31","url":"tw_stocks/2438.json"},{"revision":"dd9ced01eba3d4d15fdb8688e839810a","url":"tw_stocks/2436.json"},{"revision":"246573ad3c7feb02de6a4dc569cb8f78","url":"tw_stocks/2434.json"},{"revision":"0c0719b3c1798d5271f798ca330ef185","url":"tw_stocks/2433.json"},{"revision":"387349301c8e276897912cfb8371f3b8","url":"tw_stocks/2431.json"},{"revision":"8969f0b21ab864c7f8d27ddd26c28829","url":"tw_stocks/2430.json"},{"revision":"4ee857aeb4a254ef5f919aeff7993325","url":"tw_stocks/2429.json"},{"revision":"2c25fa781b542c1ff52eb7579573964f","url":"tw_stocks/2428.json"},{"revision":"8cb4751c4816082cd5f0f938ae4ca80f","url":"tw_stocks/2427.json"},{"revision":"7b18c2e34589d321d51f59f072cb00a5","url":"tw_stocks/2426.json"},{"revision":"561389fd416fb44bf405b28867054336","url":"tw_stocks/2425.json"},{"revision":"5516158a858ee9936b36d164a1397f9f","url":"tw_stocks/2424.json"},{"revision":"b54a369d098cad8cead4fc84a375d4d7","url":"tw_stocks/2423.json"},{"revision":"4c55ecebd0dc3b4b7709dbc2b76b8ccb","url":"tw_stocks/2421.json"},{"revision":"60cd09d3f774dac828884017b87976a6","url":"tw_stocks/2420.json"},{"revision":"64f9016bc2dd82073caf3ac4b38c3bde","url":"tw_stocks/2419.json"},{"revision":"01b456af599bae0391d5e81668c4c5c5","url":"tw_stocks/2417.json"},{"revision":"12fe9386e463ae96b2e1efda32f59e5d","url":"tw_stocks/2415.json"},{"revision":"2d7d75d44bff64a25e2c5ea7823953cd","url":"tw_stocks/2414.json"},{"revision":"8c4efe44935297c1cfc66ed26b1a91dd","url":"tw_stocks/2413.json"},{"revision":"5f9bc8c4cc79f05e09cf0d695715c104","url":"tw_stocks/2412.json"},{"revision":"0c08a44c3436da0a369ebf849f508890","url":"tw_stocks/2409.json"},{"revision":"a87426c42c2011b3d9312e3f3d5c969f","url":"tw_stocks/2408.json"},{"revision":"cf3393c830d3263286e50142c0a0455c","url":"tw_stocks/2406.json"},{"revision":"4c0b5e6803b5129cc31f028c04d8f929","url":"tw_stocks/2405.json"},{"revision":"7363ca4defc0b08066e896f269cb7925","url":"tw_stocks/2404.json"},{"revision":"d878405ef3879e5fdd5fa32acf291923","url":"tw_stocks/2402.json"},{"revision":"67a9c27e6a3d647769c8d7a99895c00c","url":"tw_stocks/2401.json"},{"revision":"deea5cdf35dbf21702bca92f855d6609","url":"tw_stocks/2399.json"},{"revision":"f5be290329d4d59ded5ce246bbeafb4a","url":"tw_stocks/2397.json"},{"revision":"5c1e4dfad60b70b1cb56e30777d96ba0","url":"tw_stocks/2395.json"},{"revision":"e2b0e866aa22cc34dd3eac69a0c79cc0","url":"tw_stocks/2393.json"},{"revision":"f1140d96de4ed8f66889b2f6436f973f","url":"tw_stocks/2392.json"},{"revision":"8ccdba36ef91ceb32a2fc422910031aa","url":"tw_stocks/2390.json"},{"revision":"b25d76ec922187f33b3e1554fb91c677","url":"tw_stocks/2388.json"},{"revision":"61b972b1eca903d047e8440daf11c1ac","url":"tw_stocks/2387.json"},{"revision":"f3dd2f9eeec01c3dbcae64af13c15165","url":"tw_stocks/2385.json"},{"revision":"e40ba6e44dacae99a3329c615fbc4aab","url":"tw_stocks/2383.json"},{"revision":"0edef8944f3761cdf8cd785dea95eaac","url":"tw_stocks/2382.json"},{"revision":"f161ecbc93f238b62798ee1c4ee8f88c","url":"tw_stocks/2380.json"},{"revision":"e7cd9a83aac8a89b9dbeb77efaef9ebe","url":"tw_stocks/2379.json"},{"revision":"72eee0be04ccdf8aa85e3cf3db1466b0","url":"tw_stocks/2377.json"},{"revision":"fd2ef26f55ec421dd0ba166e4be347c6","url":"tw_stocks/2376.json"},{"revision":"40ec14af4eae69f005f3c61498b0293d","url":"tw_stocks/2375.json"},{"revision":"da62af11c8488f55b6e345c9a423e8ed","url":"tw_stocks/2374.json"},{"revision":"008178e3fa2ec9c70152dc9536d5205f","url":"tw_stocks/2373.json"},{"revision":"2d4672b5a603e13296feecd13a73587b","url":"tw_stocks/2371.json"},{"revision":"ad4d5362215a5db14b98188004677619","url":"tw_stocks/2369.json"},{"revision":"f55074935087ab578ec8d1563bf6df12","url":"tw_stocks/2368.json"},{"revision":"0c1e4a8ac79b7290cac41e600f686fc0","url":"tw_stocks/2367.json"},{"revision":"515a0272f80fe5f83c0875a961186cc4","url":"tw_stocks/2365.json"},{"revision":"a2136bca7feee9f0e809ed88a9f5b89a","url":"tw_stocks/2364.json"},{"revision":"ec951bcf71e59493aae429d9db107ded","url":"tw_stocks/2363.json"},{"revision":"97c4ca7d4967f999fa9ba073ab8a2960","url":"tw_stocks/2362.json"},{"revision":"82cb3d9c64c3ef1e4f16229f4adf16c2","url":"tw_stocks/2360.json"},{"revision":"e39ab31b5a03ab6001d26641f367bf09","url":"tw_stocks/2359.json"},{"revision":"958ddb2d282ce71e932b0d7ecc369a68","url":"tw_stocks/2357.json"},{"revision":"e756416efed225a6f368a8818f1c8414","url":"tw_stocks/2356.json"},{"revision":"d77c946c87ecee0267866deeb28d0492","url":"tw_stocks/2355.json"},{"revision":"0f43cb66bdc09809be14ac17e06eb735","url":"tw_stocks/2354.json"},{"revision":"6f2e6b2d4e3a766158a37d3ced1b2429","url":"tw_stocks/2353.json"},{"revision":"1663a248b9dfd1097511382cbca1f79c","url":"tw_stocks/2352.json"},{"revision":"a9e31f3bfe4143a63f643f2e46f038f5","url":"tw_stocks/2351.json"},{"revision":"9c269aa57da098336cebdd1c009ea3b2","url":"tw_stocks/2349.json"},{"revision":"f15941a574375024bf4f37fbae69c678","url":"tw_stocks/2348.json"},{"revision":"1cf4b8f43fa81c24b7ef761ca419d6e3","url":"tw_stocks/2347.json"},{"revision":"cab856c2333bcc9bcdbfa9342ccafa88","url":"tw_stocks/2345.json"},{"revision":"b12faf5ecf067a917ef54e975cef4ae1","url":"tw_stocks/2344.json"},{"revision":"17999b2860927144ffc2e1054d1170db","url":"tw_stocks/2342.json"},{"revision":"2e57ee18fb92bddc1b2f8e769e850744","url":"tw_stocks/2340.json"},{"revision":"1b99c5f1a791a3f74586415b435281a4","url":"tw_stocks/2338.json"},{"revision":"212f98f8b96724e570f2b343e88b16d4","url":"tw_stocks/2337.json"},{"revision":"89cdffe85621f143ef55b0523cea5030","url":"tw_stocks/2332.json"},{"revision":"c7797c877daf755ecba9bd3518329148","url":"tw_stocks/2331.json"},{"revision":"5a138c12bf9e70eedbbb8561a46b0793","url":"tw_stocks/2330.json"},{"revision":"f9a192d0677909918ec8c441fa4ed740","url":"tw_stocks/2329.json"},{"revision":"723bd689d49d6025c878289062803332","url":"tw_stocks/2328.json"},{"revision":"3fab00e40e7cc00adc96ae030d135500","url":"tw_stocks/2327.json"},{"revision":"adaa87229dc38653d16d29d5663a4cd9","url":"tw_stocks/2324.json"},{"revision":"1168dcc14f30f62f282edce60ef78ced","url":"tw_stocks/2323.json"},{"revision":"a80c1e91e25c90e6630f68c029fe63f2","url":"tw_stocks/2321.json"},{"revision":"eb400bea31e7667358cfa81da775e73a","url":"tw_stocks/2317.json"},{"revision":"04dd2d0e35bcd26e5603a35acd3fc1e2","url":"tw_stocks/2316.json"},{"revision":"1d38cb2300773533fec7f0cb5b9d74f6","url":"tw_stocks/2314.json"},{"revision":"421b03deb18fd8d436bfde7a1115dd6a","url":"tw_stocks/2313.json"},{"revision":"af974da56cc143f88e0d7f4ffd8382d4","url":"tw_stocks/2312.json"},{"revision":"c14cd85e567c761708c67b319cab54bf","url":"tw_stocks/2308.json"},{"revision":"11a03f58042950f76d0c2340c29b3245","url":"tw_stocks/2305.json"},{"revision":"6c21f4e1cf41cb746f083eabf0f1caf6","url":"tw_stocks/2303.json"},{"revision":"c600372094c8149c7c38c041902564ba","url":"tw_stocks/2302.json"},{"revision":"e4c2d536b0ee0cb44b64064e3a96ab5b","url":"tw_stocks/2301.json"},{"revision":"73918347ed89d47ee5206399f00a8978","url":"tw_stocks/2250.json"},{"revision":"f8f4caf261a7911f4f95e2c6f6ac79d8","url":"tw_stocks/2248.json"},{"revision":"18e91457635f2e919d4b2c0f7b6c00aa","url":"tw_stocks/2247.json"},{"revision":"c26d08191b57fe49e23e8da07e3b17a3","url":"tw_stocks/2243.json"},{"revision":"a0cf4d9e2907042267338a8146df08ce","url":"tw_stocks/2241.json"},{"revision":"1eff0a56815f257456a44e590acfb219","url":"tw_stocks/2239.json"},{"revision":"721569977807513132f10d6659719777","url":"tw_stocks/2236.json"},{"revision":"99aeae78994eb3127a031c276b206384","url":"tw_stocks/2233.json"},{"revision":"3d3e495abcf81801920c838a07e9aa08","url":"tw_stocks/2231.json"},{"revision":"72d4272e1685d41b1a89120eef915837","url":"tw_stocks/2228.json"},{"revision":"8245446bd891511cb43d5cf8e8e8f82e","url":"tw_stocks/2227.json"},{"revision":"175637db26013024106a91e484abf060","url":"tw_stocks/2211.json"},{"revision":"a2c36efde3b959fd991b39a3872a025a","url":"tw_stocks/2208.json"},{"revision":"5cfae51f49cbecd1f38454761265fb4d","url":"tw_stocks/2207.json"},{"revision":"b004436b4bbf449cefe176d87c0a574f","url":"tw_stocks/2206.json"},{"revision":"dc7bbcf51744906ec07e3a92388e9c4e","url":"tw_stocks/2204.json"},{"revision":"3140ce2f243e514623b919779c5bf2e5","url":"tw_stocks/2201.json"},{"revision":"31e2b26f33b36bebdf0b4e336bad1388","url":"tw_stocks/2115.json"},{"revision":"c2daa052cd24243ecd93a175bddc19c0","url":"tw_stocks/2114.json"},{"revision":"e3c003a8255a0156b5eef6074dddf2b3","url":"tw_stocks/2109.json"},{"revision":"c9edb2c684f00aa1af2b4d4a4bc8c186","url":"tw_stocks/2108.json"},{"revision":"4f916caa499c814eab28cd4bbcd2ff02","url":"tw_stocks/2107.json"},{"revision":"380c8430fd2c27d8da8633500f732e46","url":"tw_stocks/2106.json"},{"revision":"e20856a01e1456d7a40141392f271cb6","url":"tw_stocks/2105.json"},{"revision":"8b8fbce66d4e2c625e313e8bfdbccd14","url":"tw_stocks/2104.json"},{"revision":"06577ec976a63134d3f4521922ed1aec","url":"tw_stocks/2103.json"},{"revision":"202c634c633d0f70d16344ebdd137f0a","url":"tw_stocks/2102.json"},{"revision":"650e9ade31a8c052d2b22b7b4d9b31a0","url":"tw_stocks/2101.json"},{"revision":"e587b615cf9749fc3fe6261a66ba9e65","url":"tw_stocks/2072.json"},{"revision":"a5784cdb476ad7e90616280a6e635f02","url":"tw_stocks/2069.json"},{"revision":"bcdd563ba78e4f67e759fef95886ca47","url":"tw_stocks/2062.json"},{"revision":"c44c208d9cc12989c0735b22965a4c33","url":"tw_stocks/2059.json"},{"revision":"f39a0d359751bead84d4a5579dd92b49","url":"tw_stocks/2049.json"},{"revision":"f8e371db76c859c6966a6385832b51aa","url":"tw_stocks/2038.json"},{"revision":"6b2f5d5be98235a35b736afd7dff0354","url":"tw_stocks/2034.json"},{"revision":"30de179b318f46d205500a65cf7de52b","url":"tw_stocks/2033.json"},{"revision":"87d4bb133fad73e3a053048f1c95c180","url":"tw_stocks/2032.json"},{"revision":"3f947efcbb8df2f97d851c30760ac515","url":"tw_stocks/2031.json"},{"revision":"dd8ee625c946516300ff15a69579882d","url":"tw_stocks/2030.json"},{"revision":"94d40740091cdc7c64f090eb8ea07c1c","url":"tw_stocks/2029.json"},{"revision":"7a5d0d351ca5bda710e7ff0f1dd94d05","url":"tw_stocks/2028.json"},{"revision":"6880a6809f978b2b9ce33489468c6422","url":"tw_stocks/2027.json"},{"revision":"0bebd8ecdb8f50c41f1abc9bbdd2e80c","url":"tw_stocks/2025.json"},{"revision":"c616bcd45ef4cc0d19bbb0c0096f176b","url":"tw_stocks/2024.json"},{"revision":"86cc26b0dde69a8b30d666a109c6081b","url":"tw_stocks/2023.json"},{"revision":"80173b21b3c171ce6f61ec679a771bd9","url":"tw_stocks/2022.json"},{"revision":"fe849bdd85bdf32db245b1384c718b79","url":"tw_stocks/2020.json"},{"revision":"939aa20b76ce1a4cdd1963aee503655b","url":"tw_stocks/2017.json"},{"revision":"f1968a4d028fd2dc5afe55308cb2d68d","url":"tw_stocks/2015.json"},{"revision":"788842764b87044a4e2b6add58cd908b","url":"tw_stocks/2014.json"},{"revision":"c0842329934aa76e5d155104a936f217","url":"tw_stocks/2013.json"},{"revision":"6178eefc36e7f6d6fa00614e4b5f2079","url":"tw_stocks/2012.json"},{"revision":"efb24c2bfe8416dfbc24982994b3ea32","url":"tw_stocks/2010.json"},{"revision":"0d2bd02460a4835cff059ac7bfc64744","url":"tw_stocks/2009.json"},{"revision":"d0c3cc57f41a94a15dabfb4d19d1f6e8","url":"tw_stocks/2008.json"},{"revision":"301a76af76daf167a539bf790a9a5c43","url":"tw_stocks/2007.json"},{"revision":"fd7b9bdc062dd0dcb9345953fa3329cf","url":"tw_stocks/2006.json"},{"revision":"d0f815ad491f5f3a614c5f3386131793","url":"tw_stocks/2002.json"},{"revision":"8dfbe19fd32a9ba5261255d7934dc26a","url":"tw_stocks/1909.json"},{"revision":"d17fd402fd195e87d36755a8789dd7b5","url":"tw_stocks/1907.json"},{"revision":"2ffe895bf74f986cb5586b666e8a1568","url":"tw_stocks/1906.json"},{"revision":"7c2ef82d961854d5f432b861a13c90cc","url":"tw_stocks/1905.json"},{"revision":"6124e6fd60d73a2fcfa8583d82df3371","url":"tw_stocks/1904.json"},{"revision":"6b48ce353a274d41b1253fe80c9b1e31","url":"tw_stocks/1903.json"},{"revision":"3adbdec3bf2a4d8bac1f0a08024ab4f0","url":"tw_stocks/1817.json"},{"revision":"49f316a76c3a1f9d64fcbb23ebe89349","url":"tw_stocks/1810.json"},{"revision":"ef160f5884098fc61629f383b010e841","url":"tw_stocks/1809.json"},{"revision":"275b39f3bcc5b2c8307104ba336f2e03","url":"tw_stocks/1808.json"},{"revision":"1fc35cd14f3e8c7009bea5b83b5eeb70","url":"tw_stocks/1806.json"},{"revision":"98b49b617ea16571a9499e01519df2a8","url":"tw_stocks/1805.json"},{"revision":"048e194110181b355fd1009ab0763ff4","url":"tw_stocks/1802.json"},{"revision":"ae0db468a8f003ae3d38a042ef06d5ff","url":"tw_stocks/1795.json"},{"revision":"6a1d04bce07d677e60f8c20f63a82e00","url":"tw_stocks/1789.json"},{"revision":"3c51bc525fe006004bc38eeafa53d631","url":"tw_stocks/1786.json"},{"revision":"23fafe44265140907fdee67aa6b3de9f","url":"tw_stocks/1783.json"},{"revision":"a17491cd9e140d8e4f3214717d1c1e61","url":"tw_stocks/1776.json"},{"revision":"7edfc6ef0d29979d56f2db9f2bd30fec","url":"tw_stocks/1773.json"},{"revision":"61f51c69b5df307516da0cf77d5231c2","url":"tw_stocks/1762.json"},{"revision":"f9273f65303302a671837ffa89cf0054","url":"tw_stocks/1760.json"},{"revision":"90d95a88067b2c5907c7fa5f84024220","url":"tw_stocks/1752.json"},{"revision":"3ce68c73c1b3e886f659ae895813d929","url":"tw_stocks/1737.json"},{"revision":"9d70e1646bb3df44453ed9c06e1b2a69","url":"tw_stocks/1736.json"},{"revision":"e4df4188820d15f71521990271be33db","url":"tw_stocks/1735.json"},{"revision":"8534c787fe7dfcb2670ef39c4cf2508b","url":"tw_stocks/1734.json"},{"revision":"e1b2964cb46a40ef330a1569de4c415d","url":"tw_stocks/1733.json"},{"revision":"0ae525b877d867a540df7e9a4eb74bee","url":"tw_stocks/1732.json"},{"revision":"a35bcc3941f1cf5749567657df481a42","url":"tw_stocks/1731.json"},{"revision":"3b57ce91a282d5da1b06c1a0f6435ed3","url":"tw_stocks/1730.json"},{"revision":"addadcf0d670d401bdc2379bab23f80b","url":"tw_stocks/1727.json"},{"revision":"3b80c468a410c8377e277e24367bfd6e","url":"tw_stocks/1726.json"},{"revision":"6559c85b20ae5941c80c359b8d208691","url":"tw_stocks/1725.json"},{"revision":"305a431a6892fd461e27c9651ca11c0b","url":"tw_stocks/1723.json"},{"revision":"acf71e1f8d0095eb60feb3474784336a","url":"tw_stocks/1722.json"},{"revision":"43fb2d3cb03795c3b016c461ead33776","url":"tw_stocks/1721.json"},{"revision":"d92de67276c5bb621fdd0bb95f18fc88","url":"tw_stocks/1720.json"},{"revision":"de5a67364aa56bcce2338e1596cc8548","url":"tw_stocks/1718.json"},{"revision":"c8f85cd33b9bd9022e0fb678be1d74a7","url":"tw_stocks/1717.json"},{"revision":"b7dc61e0aba2c4953c741f94b5cc50fc","url":"tw_stocks/1714.json"},{"revision":"afe53ec3722c782e9bfb976d0de8fbed","url":"tw_stocks/1713.json"},{"revision":"328e5a40776294d95547cd3c45ea23f8","url":"tw_stocks/1712.json"},{"revision":"3bc6405f232836af5c178a7475f1f504","url":"tw_stocks/1711.json"},{"revision":"7dece33b2b6c1c4a2abe19a81ad5f916","url":"tw_stocks/1710.json"},{"revision":"91f585523033eef4c287b98992d3351e","url":"tw_stocks/1709.json"},{"revision":"c722818fc0954dff898dc9ae6413308c","url":"tw_stocks/1708.json"},{"revision":"69c863aced9b8264c27a7db6cb288dd9","url":"tw_stocks/1707.json"},{"revision":"39a6e210388c3c9b718dfe8c503966d6","url":"tw_stocks/1702.json"},{"revision":"f7e1fdda2689d76c48679291b14a278d","url":"tw_stocks/1626.json"},{"revision":"28e70ff1ffd1acf3e32fdc2c4604c006","url":"tw_stocks/1623.json"},{"revision":"ea027257d8fe9475c12564e6188246d5","url":"tw_stocks/1618.json"},{"revision":"722c05adbd9f0e8945154bcdb9a9c3d8","url":"tw_stocks/1617.json"},{"revision":"8600932c443cc1012f1687943ccea98b","url":"tw_stocks/1616.json"},{"revision":"5ebd2452498bc250a143690d7674b04a","url":"tw_stocks/1615.json"},{"revision":"a9139d1338987af60c3477ff5ffff31c","url":"tw_stocks/1614.json"},{"revision":"a3619188ec16130faa2f8b3d956f9ef2","url":"tw_stocks/1612.json"},{"revision":"a8ddf798e71bf370c60405e089351f1b","url":"tw_stocks/1611.json"},{"revision":"e86baea89615efcfddedbd6518427ee8","url":"tw_stocks/1609.json"},{"revision":"4384fca259fbeed161b4d46d4eae077e","url":"tw_stocks/1608.json"},{"revision":"53108a27c51363f0e1ccf2df863144ce","url":"tw_stocks/1605.json"},{"revision":"8377fd3992d3223686aeb50f83ad9ed2","url":"tw_stocks/1604.json"},{"revision":"cec50ee25cdb019d206b2a09310da74a","url":"tw_stocks/1603.json"},{"revision":"925fe5eceeddd9c58ab3f5452eb85fc5","url":"tw_stocks/1598.json"},{"revision":"ba9084812c62f92ba38a0b5f9228c134","url":"tw_stocks/1597.json"},{"revision":"a4d5109e6f51de672616323c9e445539","url":"tw_stocks/1590.json"},{"revision":"2fd30bc703e9e63eb1457955eeebee35","url":"tw_stocks/1589.json"},{"revision":"590b546ae8d5395dc428b1733d8257dc","url":"tw_stocks/1587.json"},{"revision":"feef9afc5a3ea57d9031928b359ee6c6","url":"tw_stocks/1583.json"},{"revision":"e45fd241c736fa8ce9817387c49d9a09","url":"tw_stocks/1582.json"},{"revision":"8b65f2ff994bca97c0e2216f238e84bf","url":"tw_stocks/1568.json"},{"revision":"9b12ee9d8d0e0b813eb5809a5e34bb3f","url":"tw_stocks/1563.json"},{"revision":"4c95c0483166a917bcede99e295ba583","url":"tw_stocks/1560.json"},{"revision":"98a74ef94b94abce4469881e05a70ff2","url":"tw_stocks/1558.json"},{"revision":"cff7f03b10bf57791ed9c6692cc5556d","url":"tw_stocks/1541.json"},{"revision":"a890eec969920aa5394dd8ff4a85d27a","url":"tw_stocks/1540.json"},{"revision":"5ded052fcad5c41a20814c3e202a7717","url":"tw_stocks/1539.json"},{"revision":"33cb00610c9f07915d60f7a20369c9f2","url":"tw_stocks/1538.json"},{"revision":"4e2c5be0bf78f050a0da4d504da0ac5e","url":"tw_stocks/1537.json"},{"revision":"244d375c583bf8fa106d7ccf8671ec70","url":"tw_stocks/1536.json"},{"revision":"c3757bb689a0c65f0e2a515f1e97bb28","url":"tw_stocks/1535.json"},{"revision":"b72fbaf0187e3c1a0724271358c86594","url":"tw_stocks/1533.json"},{"revision":"5c5e61b3c23c6897637566c0b967f737","url":"tw_stocks/1532.json"},{"revision":"7223415ea3db964a0929fc9ba7c9ee7a","url":"tw_stocks/1531.json"},{"revision":"5faf5392fcd99dbdab0b290582428020","url":"tw_stocks/1530.json"},{"revision":"fabf06ca5d4fa3c53840aef9c4f4b93a","url":"tw_stocks/1529.json"},{"revision":"017ee66660cef9293b65813bab2a7d1f","url":"tw_stocks/1528.json"},{"revision":"bf332e265b23e59bed91d084252d234c","url":"tw_stocks/1527.json"},{"revision":"e4f211668fd5cfef1eeace13f668acca","url":"tw_stocks/1526.json"},{"revision":"9b179e13ac99c43f588d37bd19ba29be","url":"tw_stocks/1525.json"},{"revision":"b094c188eec2dac3e63f836b6efec4dd","url":"tw_stocks/1524.json"},{"revision":"caa146b376ff9d8111eea65c182eb5cd","url":"tw_stocks/1522.json"},{"revision":"ae7e055fe0fd142a76227b9c9daeb934","url":"tw_stocks/1521.json"},{"revision":"c2e996f17a88cdef2da58fb5087116a5","url":"tw_stocks/1519.json"},{"revision":"cf8e4a55bb2a2ac418f494e481d605b3","url":"tw_stocks/1517.json"},{"revision":"3035ef5b25fc47b82f4c7a667216dcd8","url":"tw_stocks/1516.json"},{"revision":"7e3d6e4cd04ad6b3d674be0ea23dd23d","url":"tw_stocks/1515.json"},{"revision":"f586e051feb2af8961434d506d495323","url":"tw_stocks/1514.json"},{"revision":"7cc9c6b6fb4d7cb15c5cae348e461dfa","url":"tw_stocks/1513.json"},{"revision":"b4b1c35d30f6b4e70febdadff22c2a79","url":"tw_stocks/1512.json"},{"revision":"715551d065869065d7d4a46367cbae7d","url":"tw_stocks/1506.json"},{"revision":"aee8d3b2e60fc5fdfc6d3654273006ff","url":"tw_stocks/1504.json"},{"revision":"9a7f71dd4aceab53b0013a89617a68df","url":"tw_stocks/1503.json"},{"revision":"4d178808565691e620633d2b0a2c9656","url":"tw_stocks/1477.json"},{"revision":"0ce6d50ebcc22c8a1f0a4899d25012a0","url":"tw_stocks/1476.json"},{"revision":"05c0670b4ab4c642d170e6b729b11d02","url":"tw_stocks/1475.json"},{"revision":"dc447520d192cca7bbb30eef477a0b03","url":"tw_stocks/1474.json"},{"revision":"13c4ad0492facb69e0dbe31b6f197161","url":"tw_stocks/1473.json"},{"revision":"88649bc318701374c7fd2dd7e1b268f1","url":"tw_stocks/1472.json"},{"revision":"bcad93e6530a064ecefb0945479bfc4f","url":"tw_stocks/1471.json"},{"revision":"a21415db24e84aae8691f17f0c2dd310","url":"tw_stocks/1470.json"},{"revision":"86598cb29ea4bf2224a62a8d294cbfa9","url":"tw_stocks/1468.json"},{"revision":"f63c162a8a04d45441d4217537c94fc3","url":"tw_stocks/1467.json"},{"revision":"926d235dbdec356a693b6891e7e348a7","url":"tw_stocks/1466.json"},{"revision":"875f5f53a338cc7bc1d9ae2c09fc817c","url":"tw_stocks/1465.json"},{"revision":"3b9e2a8a82ee5bf1c20e3286553564a2","url":"tw_stocks/1464.json"},{"revision":"06b9694fe252936676407c450f9a03aa","url":"tw_stocks/1463.json"},{"revision":"211ffa6c7338ad6137818ef49a85fa30","url":"tw_stocks/1460.json"},{"revision":"91144f990fc38c9f7773a23ecdddf82a","url":"tw_stocks/1459.json"},{"revision":"dcf6bfcd6984f2ef1e0e94d9b2264669","url":"tw_stocks/1457.json"},{"revision":"32b30f6edee6aa28d93ae086e6598afb","url":"tw_stocks/1456.json"},{"revision":"918bb09d2faabab087945e53abf30d03","url":"tw_stocks/1455.json"},{"revision":"1a0f786e1b35153fbcbd6cc009a68bb7","url":"tw_stocks/1454.json"},{"revision":"30b2e96a1d0c6947d7abc3205e80f2f3","url":"tw_stocks/1453.json"},{"revision":"cfbae310a1edc5d75ceab1fb786c091e","url":"tw_stocks/1452.json"},{"revision":"ad2c20e8562c93267ea68bd50b5cf42e","url":"tw_stocks/1451.json"},{"revision":"5be92fdb5310e608f9cbe649ecb5473b","url":"tw_stocks/1449.json"},{"revision":"7498eec0e98a5e6c010e9f4468639327","url":"tw_stocks/1447.json"},{"revision":"6d20fe15c481ee7ee7e5e073744970e2","url":"tw_stocks/1446.json"},{"revision":"ea7f3557a470b928448d757f67376139","url":"tw_stocks/1445.json"},{"revision":"1d04ad2f84e4105b621496ce7d36db04","url":"tw_stocks/1444.json"},{"revision":"86d779a45fc1504574c5c12914b3d3d6","url":"tw_stocks/1443.json"},{"revision":"6b3aaafd43b257b1c339273cdd06b871","url":"tw_stocks/1442.json"},{"revision":"c6df096fde9993d47a55a3ac278c4c63","url":"tw_stocks/1441.json"},{"revision":"81d2d2808ef867041972e0ac950d3168","url":"tw_stocks/1440.json"},{"revision":"3f250b8c8ba8fcd18a91ad6ee90375b1","url":"tw_stocks/1439.json"},{"revision":"e2ea770ac30ac41cb96ed75078304a0c","url":"tw_stocks/1438.json"},{"revision":"9e9f48949a6be7a90e88f5a5a0c4063a","url":"tw_stocks/1437.json"},{"revision":"4b25a4ece02e85476bbadbc2bac49c65","url":"tw_stocks/1436.json"},{"revision":"f5e76416034431e836eaeed909c303a0","url":"tw_stocks/1435.json"},{"revision":"090fcc6330cd3c14962d3742555e6690","url":"tw_stocks/1434.json"},{"revision":"8be7e5f0566be2335d81fff94a3c22d9","url":"tw_stocks/1432.json"},{"revision":"28e1fd0dc2e51f73ef8c63500a435906","url":"tw_stocks/1423.json"},{"revision":"93c807b6d719e1f0494e4d3af4a5b91d","url":"tw_stocks/1419.json"},{"revision":"179c57888a505f6e7fc2867e904b05ce","url":"tw_stocks/1418.json"},{"revision":"38d3140852fcbdcc8385a1b6322a9d64","url":"tw_stocks/1417.json"},{"revision":"6a1b91b50a02a9fe9fe30ba0ba53c918","url":"tw_stocks/1416.json"},{"revision":"61d0718d1aa7521d6602f9e830f0ac6f","url":"tw_stocks/1414.json"},{"revision":"0cce12226567747ae55e2226e2e88297","url":"tw_stocks/1413.json"},{"revision":"40ef11c93eb533e4e41bc8ddca29a534","url":"tw_stocks/1410.json"},{"revision":"5de4f2bee92978f1b9a60550188bca6d","url":"tw_stocks/1409.json"},{"revision":"a1c3e755c5456d7649d057283a8bb2f8","url":"tw_stocks/1402.json"},{"revision":"1b1e287294cf4faaff635931e89b8929","url":"tw_stocks/1342.json"},{"revision":"22fcc66474e0aeebc1e6c131d454bdec","url":"tw_stocks/1341.json"},{"revision":"34597e264c6aaeee053eefc925afd6d4","url":"tw_stocks/1340.json"},{"revision":"3b3bb06ebb44299571c3eb0de8e76237","url":"tw_stocks/1339.json"},{"revision":"a29e64f637f8c6db453f54e240f73d4c","url":"tw_stocks/1338.json"},{"revision":"48890d3fe4f9dede96200730fb9f9011","url":"tw_stocks/1337.json"},{"revision":"7ff6c4c266c8fac3f1554cc65a7aefb8","url":"tw_stocks/1326.json"},{"revision":"99ae7fe3a6a5e225fe0a3413138d3443","url":"tw_stocks/1325.json"},{"revision":"4a00681f3682cf37169f2602f9aaae62","url":"tw_stocks/1324.json"},{"revision":"70f83161e1350124d303c145f6d62bcb","url":"tw_stocks/1323.json"},{"revision":"eed222452d642fbc9e596ada5410714a","url":"tw_stocks/1321.json"},{"revision":"5e0f2179c9b1975f931d233557583be8","url":"tw_stocks/1319.json"},{"revision":"339a6f818db837d12852f3c64c90dfb2","url":"tw_stocks/1316.json"},{"revision":"9ee4a4b65cdad1968f400363a6e96783","url":"tw_stocks/1315.json"},{"revision":"cd8e9708a12c9b38692782b5d43b9fcc","url":"tw_stocks/1314.json"},{"revision":"0531a3e57ff91fcef574c63e91d5de37","url":"tw_stocks/1313.json"},{"revision":"c360b712e164ef733a58c74a46235a4f","url":"tw_stocks/1312.json"},{"revision":"bb214f01b1aaeb9c8711e4486f5261d8","url":"tw_stocks/1310.json"},{"revision":"7f79380ef809599e62234f3b71a671dc","url":"tw_stocks/1309.json"},{"revision":"205e05138e97caafb32b64adc91a8ff9","url":"tw_stocks/1308.json"},{"revision":"025d27295b548c81c0cb3228bdb51e7f","url":"tw_stocks/1307.json"},{"revision":"daaff047a12865ccf7ff49b2dd1c881c","url":"tw_stocks/1305.json"},{"revision":"1af60912b41100300f5f2a4128d686f3","url":"tw_stocks/1304.json"},{"revision":"f8b43d4eccde5c611ce52ee165c7656a","url":"tw_stocks/1303.json"},{"revision":"8cef15a88dd026890da8a728f2458131","url":"tw_stocks/1301.json"},{"revision":"e6ff52811b4d6f213c6846bb87bc6fcf","url":"tw_stocks/1256.json"},{"revision":"d57400704f37dfe6e153ef45c18efecc","url":"tw_stocks/1236.json"},{"revision":"bc33591836aaa3f8f3bc17a0699894cb","url":"tw_stocks/1235.json"},{"revision":"35e7ef1df87130cdc45c019def57a541","url":"tw_stocks/1234.json"},{"revision":"5af63d772cf07108eab06b1f54b52498","url":"tw_stocks/1233.json"},{"revision":"42cfee3f3123775b392ef8497acf23df","url":"tw_stocks/1232.json"},{"revision":"33ad289270f800fb1f5ca37022c0ba8b","url":"tw_stocks/1231.json"},{"revision":"09373d33e428e13c6f203d3a8464169c","url":"tw_stocks/1229.json"},{"revision":"9e5fcde079cd004e8f25d62b31561e82","url":"tw_stocks/1227.json"},{"revision":"867f29b583ab0f703cdcb1b644acaec6","url":"tw_stocks/1225.json"},{"revision":"38ca717ef3ef6c80c20a31eaafa5b6e9","url":"tw_stocks/1220.json"},{"revision":"f588fd33b80e008cf5d50efdd24d4343","url":"tw_stocks/1219.json"},{"revision":"b8c9dcbcc62c0753a3a59e869c623008","url":"tw_stocks/1218.json"},{"revision":"66bb28e79927eae0b01900c06ebe4cd1","url":"tw_stocks/1217.json"},{"revision":"f21b6291383e6a43363ddcfc2d529908","url":"tw_stocks/1216.json"},{"revision":"8a6f8cb3322c490e41188b803fdbb8d5","url":"tw_stocks/1215.json"},{"revision":"2f291dfef58ec10f747a43abd90fcb93","url":"tw_stocks/1213.json"},{"revision":"a224ddeba513632cf3e7d57f32808531","url":"tw_stocks/1210.json"},{"revision":"de585391215351bfa883c3a6d779eb84","url":"tw_stocks/1203.json"},{"revision":"2b3810011af2d88eb6e37a3c51ceca59","url":"tw_stocks/1201.json"},{"revision":"a546dd9d3e22cba9260daf72fd52de72","url":"tw_stocks/1110.json"},{"revision":"cfd14baacd3b199dc4cfe0f4f671beee","url":"tw_stocks/1109.json"},{"revision":"9ac6666ae94e1ce39ee5db065b1b4a60","url":"tw_stocks/1108.json"},{"revision":"e37503dc1bdb3386f01c89a5017f70ee","url":"tw_stocks/1104.json"},{"revision":"662dd5fcad16e6be04b1d375a697abc7","url":"tw_stocks/1103.json"},{"revision":"af97ec897542ce804a9de3ec5a4b3f1b","url":"tw_stocks/1102.json"},{"revision":"dd7d0b67e7e6f1e3c7bc8b8488879a68","url":"tw_stocks/1101.json"},{"revision":"34a8cb6d684f52f774c89d57f7a8f2fe","url":"tw_stocks/00999A.json"},{"revision":"104fe51d0cf2dec4ec54531dc16a409a","url":"tw_stocks/00997A.json"},{"revision":"b8ca495d9f2035316a4c1e87eb67a22c","url":"tw_stocks/00996A.json"},{"revision":"b5af8e5afcbb7e271af71c99e6efd478","url":"tw_stocks/00995A.json"},{"revision":"2d1f2b549a38f270ca273dd682979443","url":"tw_stocks/00994A.json"},{"revision":"9e889f56fa0de23df31203a03e0c3e24","url":"tw_stocks/00993A.json"},{"revision":"8fece3136cf3d366315b951fef2a363d","url":"tw_stocks/00992A.json"},{"revision":"b7c1de994224715baf1e319f16905578","url":"tw_stocks/00991A.json"},{"revision":"fd211d249314481d68f870c29926bbf1","url":"tw_stocks/00990A.json"},{"revision":"160a374fc4771e0c739fffeb31c4c3cd","url":"tw_stocks/00989A.json"},{"revision":"b3f30b3955a443c1dfac34f25cdadf8e","url":"tw_stocks/00988A.json"},{"revision":"76ecafd8c806a3d43d318bdaff9854ae","url":"tw_stocks/00987A.json"},{"revision":"32407ae1fa65f610fd97f5d016886a67","url":"tw_stocks/00986A.json"},{"revision":"6192def9609cd9b61738e00b6226fe65","url":"tw_stocks/00985B.json"},{"revision":"e3251764ef4e3e2dbfaa3bc9d254d7e3","url":"tw_stocks/00985A.json"},{"revision":"f837ca4885f3c6957f941e76c9cd556e","url":"tw_stocks/00984D.json"},{"revision":"7b1a2f3f17868416ecc6f4a581b68912","url":"tw_stocks/00984A.json"},{"revision":"2f785ec632e1ad1ba1fb734714eb9fbf","url":"tw_stocks/00983D.json"},{"revision":"af66e3a6c13d451b61b04dbb70c5b703","url":"tw_stocks/00983A.json"},{"revision":"c4801b700b8cce2c351b488d9c2f09fc","url":"tw_stocks/00982T.json"},{"revision":"ddabacd0c3072aa9fe6847d2055b12ab","url":"tw_stocks/00982D.json"},{"revision":"75cc356472880dd25b18b8b9caf967b7","url":"tw_stocks/00982A.json"},{"revision":"c0003b50224b9b0fcd9b931f3f1b0420","url":"tw_stocks/009820.json"},{"revision":"6bc8413d0d3537624abe95a819cdf366","url":"tw_stocks/00981T.json"},{"revision":"d5175a963e02a180c94593d4800dd608","url":"tw_stocks/00981A.json"},{"revision":"96226f358f8955421dc94fe4edfb4fdf","url":"tw_stocks/009819.json"},{"revision":"d943c089a751a7906a2c1e1d237f26f0","url":"tw_stocks/009818.json"},{"revision":"c9d0feb211b69d792df583ce6c36bd06","url":"tw_stocks/009817.json"},{"revision":"473759fd57e5bdc0b2d077ccde36cc78","url":"tw_stocks/009816.json"},{"revision":"8e4e1f16bc573dae0bdece4e311957fd","url":"tw_stocks/009813.json"},{"revision":"3ca8b009309ff50cbb1428d655b26eec","url":"tw_stocks/009812.json"},{"revision":"52f7df6b3dbf81d1b5804d6c2189ac93","url":"tw_stocks/009811.json"},{"revision":"89161517fe6d40eba17b4d65b90ed2d7","url":"tw_stocks/009810.json"},{"revision":"903195c7f14f4358e1a10847463f6969","url":"tw_stocks/00980A.json"},{"revision":"6babedca0bf6cf5e2a4d0112a5e37241","url":"tw_stocks/009809.json"},{"revision":"49ec45e7720d477c40f4bbe9d4dd5c5e","url":"tw_stocks/009808.json"},{"revision":"3da2a76fb6aa88bb6a4cf2c0f6064e41","url":"tw_stocks/009805.json"},{"revision":"9b362334c58ad976ce550644600a8c81","url":"tw_stocks/009804.json"},{"revision":"1861d643d57e61813258c6c20e762118","url":"tw_stocks/009803.json"},{"revision":"7d99826b189619f20bef15a855000bda","url":"tw_stocks/009802.json"},{"revision":"f6f40f725bff2d054f63c767b4828aea","url":"tw_stocks/009801.json"},{"revision":"4c06b56c33e279f74a2f688eae331052","url":"tw_stocks/009800.json"},{"revision":"40c0b708d8044e9065d2b4db78799b7c","url":"tw_stocks/00972.json"},{"revision":"cc753af1a118353522fe8e0687c7202c","url":"tw_stocks/00971.json"},{"revision":"694962eacdac13c63824433da71ab94a","url":"tw_stocks/00965.json"},{"revision":"8f40e0160ab273cbd115ed3fd1d05bbf","url":"tw_stocks/00964.json"},{"revision":"9982210164bbbc97ff93aeaa9a066470","url":"tw_stocks/00963.json"},{"revision":"2b55df32a841a141009f832a96711066","url":"tw_stocks/00962.json"},{"revision":"a68e0ce3b1ec1be47c7ba92e4502893f","url":"tw_stocks/00961.json"},{"revision":"8880faed38673ebdf5588c414161b544","url":"tw_stocks/00960.json"},{"revision":"d19dbbaa13d79ec4ddb1c22888671ea7","url":"tw_stocks/00956.json"},{"revision":"98b83ac38e82ba2bcb9f04cdf7c8147a","url":"tw_stocks/00954.json"},{"revision":"1eeb2bafad01049b6933feeda1ec23f7","url":"tw_stocks/00953B.json"},{"revision":"2751a5034c2c1656301ed511f9e87d6c","url":"tw_stocks/00952.json"},{"revision":"e74cbd04ed6b2fc8f9c0f5b8482901aa","url":"tw_stocks/00951.json"},{"revision":"f9e33f51ca84e61f98d5645864d88a79","url":"tw_stocks/00949.json"},{"revision":"9e3c7993a4c38046bd2268404767b699","url":"tw_stocks/00947.json"},{"revision":"1a88178526dd42db61ad09b655111fe5","url":"tw_stocks/00946.json"},{"revision":"b96875aea85a160036c243afc80aee9b","url":"tw_stocks/00945B.json"},{"revision":"c38f1ca7e8d7706929f215683fb328da","url":"tw_stocks/00944.json"},{"revision":"5f255b5b15313ad5f681442590a40351","url":"tw_stocks/00943.json"},{"revision":"59689e37cc7d65f29d1d4ef0cc49ed82","url":"tw_stocks/00941.json"},{"revision":"18cec10469729f1e0bf5b36365a9b9b0","url":"tw_stocks/00940.json"},{"revision":"19a125173296e1b838c218821b23e703","url":"tw_stocks/00939.json"},{"revision":"f137e3b6321463533d39c0269eb9e201","url":"tw_stocks/00938.json"},{"revision":"6cf6ccf12769ea25d6d88a6e7e1014c4","url":"tw_stocks/00936.json"},{"revision":"e1af0b1b90729a6dc15a90220805ca42","url":"tw_stocks/00935.json"},{"revision":"1f2443ffc896af0f6f3c386e06899ea5","url":"tw_stocks/00934.json"},{"revision":"e73741beabb3d232d4f0b03bcdd6f22c","url":"tw_stocks/00932.json"},{"revision":"f6e3ffda6744f0d7e3cbcde0208dd010","url":"tw_stocks/00930.json"},{"revision":"32650d1d3bf9aa962cfa8ebdaee15ed5","url":"tw_stocks/00929.json"},{"revision":"303529f46ed8230b7ccae635820de46d","url":"tw_stocks/00927.json"},{"revision":"06c294e72735a60c63315aeec3bb2896","url":"tw_stocks/00926.json"},{"revision":"a448cb88815ea72d9c8d4deba9530c27","url":"tw_stocks/00924.json"},{"revision":"9e7545f6939710f7ff36102581eace7a","url":"tw_stocks/00923.json"},{"revision":"c902040816989029e813597b622e87dd","url":"tw_stocks/00922.json"},{"revision":"167d56c946e0793bf99182977c3c3077","url":"tw_stocks/00921.json"},{"revision":"5dfde8c6d3995fbc34ee4c433064dea8","url":"tw_stocks/00920.json"},{"revision":"a6e13dc404f4fa49d4b0828f5c73044d","url":"tw_stocks/00919.json"},{"revision":"d13cfab7cd3ad28ccefaa8774d21edb3","url":"tw_stocks/00918.json"},{"revision":"c3d522e9cd7f0b00dbfb717e5853eb8b","url":"tw_stocks/00917.json"},{"revision":"3bc2c1d998e3dc34cc843f1fb5c9960c","url":"tw_stocks/00916.json"},{"revision":"b3db59f0449edea0d26c32b42ad34d9b","url":"tw_stocks/00915.json"},{"revision":"c20ab4e66f17cca8e8aaafc264dd962f","url":"tw_stocks/00913.json"},{"revision":"34cd8cfc76ae66ec51b56da6454f1be4","url":"tw_stocks/00912.json"},{"revision":"bc1eb49a1da0bb3728c0cbf48762a7f9","url":"tw_stocks/00911.json"},{"revision":"8e18f5946a03a18c9ed2146cd7d41050","url":"tw_stocks/00910.json"},{"revision":"4766c8f4822dca3cebdaee3c4aaede5b","url":"tw_stocks/00909.json"},{"revision":"3351689b9e002f2548e802d5b6d0eadc","url":"tw_stocks/00908.json"},{"revision":"2cb1a50ffdbfea46694f24c567a7a19e","url":"tw_stocks/00907.json"},{"revision":"501cbef059b3bbbc62b27c02efd70f98","url":"tw_stocks/00905.json"},{"revision":"0124c9f5b2d3e9bb32c7b68295e8745a","url":"tw_stocks/00904.json"},{"revision":"50dab93ef00c161b5334b097866471ba","url":"tw_stocks/00903.json"},{"revision":"02ce0f500702529011b743b795dfc192","url":"tw_stocks/00902.json"},{"revision":"6942fe2524e53a3edd5ecf1643d00081","url":"tw_stocks/00901.json"},{"revision":"e32721c96535604ff8c9eff139ff3056","url":"tw_stocks/00900.json"},{"revision":"66b15ec0ef8448259eb5aee55d303175","url":"tw_stocks/00899.json"},{"revision":"3fcaa7b3160fcc9f771dd32c0dba1690","url":"tw_stocks/00898.json"},{"revision":"fbed82649df47223f3dfc3a503ca2e72","url":"tw_stocks/00897.json"},{"revision":"191f6ef6d736af9873243a18ce6ef606","url":"tw_stocks/00896.json"},{"revision":"440a0dcd567b512b1ab047d5fb5e8c18","url":"tw_stocks/00895.json"},{"revision":"e1c9b73d10956bd06a6ff87ab8db7933","url":"tw_stocks/00894.json"},{"revision":"9f9168b81ff8e3d2fc06187f96f2aaeb","url":"tw_stocks/00893.json"},{"revision":"a6becf1af9e0b89deaa0252b214451da","url":"tw_stocks/00892.json"},{"revision":"8470756037d87c1d762ca7c3beac4333","url":"tw_stocks/00891.json"},{"revision":"993953c309921df5ebd480d19d9cfdda","url":"tw_stocks/00885.json"},{"revision":"7520b31d53f00d4184a34962e7c4d0cf","url":"tw_stocks/00882.json"},{"revision":"19a6d2c1e5a8665025e64f8703b544d1","url":"tw_stocks/00881.json"},{"revision":"bddfdee4daed3e526cca4c6b9b3835fc","url":"tw_stocks/00878.json"},{"revision":"6cb16b594f13b8853b78a945861bb398","url":"tw_stocks/00876.json"},{"revision":"853c0bd303d86f458bfb2ee39baa0731","url":"tw_stocks/00875.json"},{"revision":"a7ffffbbd254aa99fb898439414fdaa5","url":"tw_stocks/00865B.json"},{"revision":"1b0485b51af5ea7e8f43e641e1065cc4","url":"tw_stocks/00861.json"},{"revision":"9d566cfbdece9e4eeba7e78f3ff17b19","url":"tw_stocks/00852L.json"},{"revision":"c69ad208c17fa43cdfe0acbc436ae2ca","url":"tw_stocks/00851.json"},{"revision":"3dde52864bd5594962de5ebcd2f364f4","url":"tw_stocks/00850.json"},{"revision":"3e16453fca8b2ccb1c2652e731ea1c98","url":"tw_stocks/00830.json"},{"revision":"03ac83024d8dccee2a2e538f229011ff","url":"tw_stocks/00783.json"},{"revision":"6967b838984993be797e4cf8be981d43","url":"tw_stocks/00775B.json"},{"revision":"85d40c595cad29d7e75bc1b9be7da7c9","url":"tw_stocks/00771.json"},{"revision":"1316cbb8614547ddde4eed56b6cc330b","url":"tw_stocks/00770.json"},{"revision":"292de1e15733d596301e07ea2eb89ecd","url":"tw_stocks/00763U.json"},{"revision":"4db49ca3d2a084cf399c6809b80e49d8","url":"tw_stocks/00762.json"},{"revision":"5d071efa60517f639dabab7401d45b7d","url":"tw_stocks/00757.json"},{"revision":"51bd8f4cd20e01feeb7bb306b7d7e0b1","url":"tw_stocks/00753L.json"},{"revision":"150967d3a892c1c34d74b39f53598ac7","url":"tw_stocks/00752.json"},{"revision":"a6aceda98a9d666d69192f62e2a1c797","url":"tw_stocks/00739.json"},{"revision":"b72f35688739b97832b22cc867b2539e","url":"tw_stocks/00738U.json"},{"revision":"79da49d0adcfcb5f38652af7fd094e87","url":"tw_stocks/00737.json"},{"revision":"b14f7948212e4a98e269a20fa5eb1939","url":"tw_stocks/00736.json"},{"revision":"11f643e203d77c0b8f20c2d9786507db","url":"tw_stocks/00735.json"},{"revision":"371567f23393dabf2c81357949860caa","url":"tw_stocks/00733.json"},{"revision":"10d21cba04a585291d14e2c2cc6db44a","url":"tw_stocks/00731.json"},{"revision":"7de2a31ae1786214f32a2957531e487d","url":"tw_stocks/00730.json"},{"revision":"fedde53eb5f17b47cd287813e565cf6c","url":"tw_stocks/00728.json"},{"revision":"6c39e8acfb38346baaf495f9533ab0fb","url":"tw_stocks/00717.json"},{"revision":"38fd9614011aafa0ddbbdf1af825e242","url":"tw_stocks/00715L.json"},{"revision":"b6bbf9463a12f14f1b94c23940478981","url":"tw_stocks/00714.json"},{"revision":"36a2ffe30bbb2d1080c0e7100c186f85","url":"tw_stocks/00713.json"},{"revision":"d4fa007c14b9248f7a0f14eea712afe5","url":"tw_stocks/00712.json"},{"revision":"c1f2f52fb01f93ff28521a2ecff15cfe","url":"tw_stocks/00711B.json"},{"revision":"6342e0abf276d30541502c4b176eae64","url":"tw_stocks/00710B.json"},{"revision":"0db411c0fb6897a9e866d391843923da","url":"tw_stocks/00709.json"},{"revision":"7bd40e0f298cca1940bf915a6d589b5a","url":"tw_stocks/00708L.json"},{"revision":"89a9eb64d8331c0c7f5f133c510ab209","url":"tw_stocks/00707R.json"},{"revision":"a118ba77eac7d1525b7d55e998de9ded","url":"tw_stocks/00706L.json"},{"revision":"7f9c5d3678a1cd8e7fda4634ff7b15c6","url":"tw_stocks/00703.json"},{"revision":"ed555bfe0c614238bad7674919e7457d","url":"tw_stocks/00702.json"},{"revision":"ad6f16578cfe91577e12dce59beff5b4","url":"tw_stocks/00701.json"},{"revision":"39f2d3892cd5c3a06920b8052151367b","url":"tw_stocks/00700.json"},{"revision":"cbf1c5625026c7c5e5200cd42b557ec1","url":"tw_stocks/00693U.json"},{"revision":"a267eb253d942281f4943adb1e4574cb","url":"tw_stocks/00692.json"},{"revision":"57282ee2621bda094d6540acd1059a20","url":"tw_stocks/00690.json"},{"revision":"502a82d054fe3866373a93ffe1488cf9","url":"tw_stocks/00689R.json"},{"revision":"7e5c96c48b495f227afd0f2c9c7c3b07","url":"tw_stocks/00688L.json"},{"revision":"6a30fbc9ced771aaa14c48403cec0020","url":"tw_stocks/00686R.json"},{"revision":"845ec12233b4c5b9aa3ef4a7ec0a397b","url":"tw_stocks/00685L.json"},{"revision":"79598041a65c2de38815bae5ce18d861","url":"tw_stocks/00684R.json"},{"revision":"bfc605d6b8efd701e7644e9b06066cbc","url":"tw_stocks/00683L.json"},{"revision":"7eacf9a7a3d3b77cb50a754255f82bb8","url":"tw_stocks/00682U.json"},{"revision":"e66182412cfc2296cd3851645ea9a94b","url":"tw_stocks/00681R.json"},{"revision":"1955205b7efed01c6947ab2d307c8fcf","url":"tw_stocks/00680L.json"},{"revision":"f12fd27b871860c118ba58e261a4c10c","url":"tw_stocks/00678.json"},{"revision":"f9a79d2e2aa71e76f8a87a47b0828f46","url":"tw_stocks/00676R.json"},{"revision":"d6210ca56d3281305274468c97013664","url":"tw_stocks/00675L.json"},{"revision":"d87f98c70ff54458839127eda2abf69e","url":"tw_stocks/00674R.json"},{"revision":"da5c9b1769d4881f10bc441d789b66fb","url":"tw_stocks/00673R.json"},{"revision":"4b2232257171f0ea2afa279bda949499","url":"tw_stocks/00671R.json"},{"revision":"0eb036054d42583799ad6018124b0416","url":"tw_stocks/00670L.json"},{"revision":"494bb6d36aee60a7245f86a832663910","url":"tw_stocks/00669R.json"},{"revision":"2ecc7d0b3d16df754a8ff99c16f5f327","url":"tw_stocks/00668K.json"},{"revision":"87a6f07040be45e2cf4c8e00054adfc6","url":"tw_stocks/00668.json"},{"revision":"5eda07ab329846452ff75bbfdebee8da","url":"tw_stocks/00666R.json"},{"revision":"2388afeea12fff07c9834a61ca1f42a2","url":"tw_stocks/00665L.json"},{"revision":"4557f8d3b3aa6550d213eab5a6a46e4e","url":"tw_stocks/00664R.json"},{"revision":"6e661e2373d051a628791428130ebcc6","url":"tw_stocks/00663L.json"},{"revision":"32ed57051140aabe047393d7bae5fdc4","url":"tw_stocks/00662.json"},{"revision":"c36e87ce4eb662df0f46bcba332b4f6a","url":"tw_stocks/00661.json"},{"revision":"25180cbf7d2f5044ef39a1bf376ab4e2","url":"tw_stocks/00660.json"},{"revision":"3e853434f3f78cf978b723ab64e0f70b","url":"tw_stocks/00657K.json"},{"revision":"061df2912aea91ccce836bee17895a03","url":"tw_stocks/00657.json"},{"revision":"d2d9096d196e94d0b6a81f68dd3a99c7","url":"tw_stocks/00656R.json"},{"revision":"151b507f5866399b7cc003facdf6e051","url":"tw_stocks/00655L.json"},{"revision":"bbbcfbde7ae956fce103aada9ed18fef","url":"tw_stocks/00654R.json"},{"revision":"a4f3ec39ff2bf8cd8ac00b7c1de80b62","url":"tw_stocks/00653L.json"},{"revision":"3187962fc5d80e1a5fa63090afeea65d","url":"tw_stocks/00652.json"},{"revision":"1106a15f4ef3d3568f38e32bd4419906","url":"tw_stocks/00651R.json"},{"revision":"dfd8d730847d42fe94a089e10d8ddad6","url":"tw_stocks/00650L.json"},{"revision":"c1f51bfdba126bd8ecff7bd83031c55d","url":"tw_stocks/00648R.json"},{"revision":"903131e5767302c02a4b73ce95cef501","url":"tw_stocks/00647L.json"},{"revision":"e295daee875b3056fc3044bebf3c8f70","url":"tw_stocks/00646.json"},{"revision":"1c7777cb822ae230db8769883cdd9032","url":"tw_stocks/00645.json"},{"revision":"90e63d3a99c0029adca5615f3d3fe28e","url":"tw_stocks/00643K.json"},{"revision":"3706fe690a66ca6280dec0b6bb94c89f","url":"tw_stocks/00643.json"},{"revision":"833f2f2626d09a28cd6d04cca76720c4","url":"tw_stocks/00642U.json"},{"revision":"96b3dcbb969dec0ec41510a903526d36","url":"tw_stocks/00641R.json"},{"revision":"b5a0d83899d4906b35cb69f1297bba0c","url":"tw_stocks/00640L.json"},{"revision":"83920f41b9dc0422e012abe6869b1522","url":"tw_stocks/00639.json"},{"revision":"dfc0ff407271551bfdb498102fe4f2e0","url":"tw_stocks/00638R.json"},{"revision":"c7e64ad756c8729bd69ea9c373ad4096","url":"tw_stocks/00637L.json"},{"revision":"486dbced95938b3e3d78835c71290ddc","url":"tw_stocks/00636K.json"},{"revision":"6b7b45c36a55c5e0080ab78e62bcb58a","url":"tw_stocks/00636.json"},{"revision":"4c8450b9a328cc8f973a92e7d15a149b","url":"tw_stocks/00635U.json"},{"revision":"abee303a5e178fee9872767dce80a083","url":"tw_stocks/00634R.json"},{"revision":"33636c7b0c5b26865f7b46727940a249","url":"tw_stocks/00633L.json"},{"revision":"1ce86bfed7bc0ae55b4c236fee92cb66","url":"tw_stocks/00632R.json"},{"revision":"118982817ae68c6fe8218fc0eadf7ab0","url":"tw_stocks/00631L.json"},{"revision":"0ae1ddfec947573cb988be426078030c","url":"tw_stocks/00625K.json"},{"revision":"068f39152c959ebbca7e3805aef850c7","url":"tw_stocks/006208.json"},{"revision":"63eed67e5d2d45614288a3a3b7f749bd","url":"tw_stocks/006207.json"},{"revision":"fef54d0b4dcca27bfbe76472ec921b69","url":"tw_stocks/006206.json"},{"revision":"2e7c707df274a531f0bf3af7b6ae5c07","url":"tw_stocks/006205.json"},{"revision":"91a72a2c06da8614da7cc0f46f600c46","url":"tw_stocks/006204.json"},{"revision":"1eea883797bb0fbeaa7663ef8ead8b2d","url":"tw_stocks/006203.json"},{"revision":"4c4384e27608f2cb828b2ea9cf6c452a","url":"tw_stocks/0061.json"},{"revision":"477a5294fa813cb48f9d725ac6dedfd0","url":"tw_stocks/0057.json"},{"revision":"a05ff57c23b6e0f953e2c32c79b57e6e","url":"tw_stocks/0056.json"},{"revision":"4255446303ff9084dbe7f48694b8c2c5","url":"tw_stocks/0055.json"},{"revision":"4768be2c35622b71d8177d92998954bd","url":"tw_stocks/0053.json"},{"revision":"77a0f15331c91d144132362a8968a8c9","url":"tw_stocks/0052.json"},{"revision":"3a4bcd936407f63eb943a5041fab23b3","url":"tw_stocks/0051.json"},{"revision":"fec4b3c99e599cbb37ec408dc1be418f","url":"tw_stocks/0050.json"},{"revision":"a664202e3fed62fad221baddc2c014e9","url":"tw_stocks/00403A.json"},{"revision":"4cdad22dd099102cce313e5eea72b3dc","url":"tw_stocks/00401A.json"},{"revision":"af3199354a41c6aefdc44b3701d1d1a8","url":"tw_stocks/00400A.json"},{"revision":"b6bf5606cb8dd31f5013a66ffc8c7a3c","url":"subscription/callback.html"},{"revision":"4827fe1ee9d8a2031c8481710991eb3a","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"4c6d530d8f473a53e06643e9cd180df7","url":"financial/rebalance.html"},{"revision":"d3b87c2b88d3769838c98f81347b8869","url":"financial/cashflow.html"},{"revision":"83c305f2188de1d90a018e16ad3700ce","url":"financial/balance-sheet.html"},{"revision":"e917656e9f5a3e1b6df7e2c09a706cee","url":"finance/tags.html"},{"revision":"6bae3be519ad10432270c6f5f8b2d31f","url":"finance/finance-section-created.html"},{"revision":"3bb6d8ec94ea4669e505278dcd5dffbb","url":"finance/authors.html"},{"revision":"eae4d637e1799ac88056c948832a4f90","url":"finance/archive.html"},{"revision":"b7fe1950b53efb0ea5f1ea0d5356fab3","url":"finance/tags/finance.html"},{"revision":"60d096f0cd0109e9278011dff4695388","url":"finance/tags/announcement.html"},{"revision":"d41528bcafe060c291c40d220acdb979","url":"docs/tags.html"},{"revision":"0b4d354787c0c9eba1e269cbc001a98d","url":"docs/intro.html"},{"revision":"2547a5be798ae45cbf0996d78935060d","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"6e1b2b809ce5a8b849a89878be094b4a","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"d12716c533d9290a534933a0cb7aac8f","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"7bae0f880f069f8e07c0195ef56cc6fc","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"3025e333ce560b2b98f92ab2513057ff","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"e9a2669a1eed14d1942569250d8cf750","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"116c17a6e90eb28f66828e110e5d5264","url":"docs/tags/黑箱協議.html"},{"revision":"c7034614021c8fcfa984d5dd0690e69a","url":"docs/tags/養成.html"},{"revision":"589275bc9a6e0fc13efb09b9c64249b0","url":"docs/tags/資料安全.html"},{"revision":"193021db1a2285d2bee8a39b051284ef","url":"docs/tags/經濟循環.html"},{"revision":"6301a807d8caff6f160c75f1ccdc9289","url":"docs/tags/百科.html"},{"revision":"351cff388fb9191c55ca5fc24cf256e6","url":"docs/tags/模型控制.html"},{"revision":"466a47dce374f0492ddee8c5d17140e9","url":"docs/tags/數據標準.html"},{"revision":"f216b23e82c2a04226a51e0cdcc43ab3","url":"docs/tags/接入規範.html"},{"revision":"e23b8b72a0cdc7d2e1d8676005ea8fc2","url":"docs/tags/指南.html"},{"revision":"fec02e34dbb47b6111554534abb36a0c","url":"docs/tags/技術哲學.html"},{"revision":"58e720b4d737f4afd6ff9de28bccc34e","url":"docs/tags/技術史.html"},{"revision":"35a065cdb79c4d9daba8528bf2013b29","url":"docs/tags/戰鬥系統.html"},{"revision":"5ccafdf6e37c853d052ec3255479e916","url":"docs/tags/專案管理.html"},{"revision":"0041c496a65a63903334ba5efd7ffe34","url":"docs/tags/安全架構.html"},{"revision":"4f0e48257a8e1ca8d0126b93b2fbbac3","url":"docs/tags/安全協定.html"},{"revision":"e2678fba3e4d155ce7e9ec26c0ace4bf","url":"docs/tags/外部開發者.html"},{"revision":"208b026e71b223ce2d0ce9124e234cb1","url":"docs/tags/商店.html"},{"revision":"a467ed84a4789c458d648f97229462ba","url":"docs/tags/去中心化標準.html"},{"revision":"b1cb1b1ace69cdaebf69297f869a94a2","url":"docs/tags/去中心化安全.html"},{"revision":"9db66aa2379d43ab0706a427e9ebb7e2","url":"docs/tags/去中心化.html"},{"revision":"cc4dd0dae39e5d1b7252d32f0bf5ee53","url":"docs/tags/top-p.html"},{"revision":"16eea4cac7270ef09bed261ce30a385e","url":"docs/tags/tokenizer.html"},{"revision":"89d0c190ff590ceca287ab88d32c71a1","url":"docs/tags/temperature.html"},{"revision":"5ae4ca044fff096aa416a1a5c7736c47","url":"docs/tags/technical-docs.html"},{"revision":"e1914f30a855e44ba46f6241ed3f3f3e","url":"docs/tags/nlp.html"},{"revision":"4d947b80fb9014dbe22a1b98e3666b28","url":"docs/tags/llm.html"},{"revision":"2412453fe6e325278f3671a5701a54e5","url":"docs/tags/git-hub-copilot.html"},{"revision":"1c84522d5959547328359c010c506dd1","url":"docs/tags/generative-ai.html"},{"revision":"eaba48210fa782aa8ee4277fc4529a6c","url":"docs/tags/eip.html"},{"revision":"2ebb2bd629a2573fa0d2a014a0b61096","url":"docs/tags/development-tools.html"},{"revision":"29aab004ee81f74edcf35949e4143a53","url":"docs/tags/cli.html"},{"revision":"9cd756b867446793aee6b9ff92979935","url":"docs/tags/claude-code.html"},{"revision":"dd9409ea2f2b323eff0639c83f0b77be","url":"docs/tags/bpe.html"},{"revision":"b602dcf1e8b1ada22b8271c947ab285c","url":"docs/tags/automation.html"},{"revision":"ba79d77b776c54b61b2203855f51da70","url":"docs/tags/ai.html"},{"revision":"89efaaa9ee75a3cb6d4f1b68b6ed793e","url":"docs/tags/agent.html"},{"revision":"41fb2798c2cd3db8cd768b12b861bcf2","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"63b8ba49289147034e4e263919180fac","url":"docs/skill/gemini-skills.html"},{"revision":"826249d945550dba72757bc762a29865","url":"docs/skill/container-builder-skill.html"},{"revision":"b346d26976afed4f77e2a0ce84a5f471","url":"docs/skill/claude-code-skills.html"},{"revision":"24d854dd32987264b9a442f1817e9b02","url":"docs/python-workshop/python-init-file.html"},{"revision":"5c6fa8e9eb3ddc0095bd4339ce7deb75","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"c7b71ca0247f81cc012f052aeee5d2ff","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"4b3e0552a54e9e73d69a958358ca34ae","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"678d50ed99da2e6d4bb8bc77941eedf1","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"6d1967783e418bf541a6ffdc5ec4d390","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"41461ee3ab52b921847556d7705f1b83","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"94097389bbd92366e72e6f7bc123737b","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"a230af875b25ee6fba2a7e5c27eaf89a","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"a760760b0fec0b191aea0803f3e5a67f","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"3a120ff7d34334b55a66c6b0464fd446","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"976db70988d20e5aa2668058fb153e8e","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"3d45d8a30a9652a0d00323562a126c91","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"67b01fb6231e4af81f75f7e7f0e7167a","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"fc562dc0ada3c68bd5a3a170f5a5b25c","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"a2c71f826716472957f257f6e145208c","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"63c1ae4cbdc3836456c933f409b88cb0","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"58efbe33f0d19b78c3f7ae35b355c677","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"90437d2a7c02763507f819a5ab1d94c7","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"1c363ca93a78043716f4e2e28936a514","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"352529938227691969cf54003ba6f9ef","url":"docs/claude-code-series/skills.html"},{"revision":"b2e4610dff41ed30330dd70d49229201","url":"docs/claude-code-series/monitoring.html"},{"revision":"74cb96ad1d3277e827fb27fd490a613a","url":"docs/claude-code-series/getting-started.html"},{"revision":"fa26a85581d0de345a191bb2f24d302a","url":"docs/category/遊戲規則與手冊.html"},{"revision":"2033e40b5bf9882e8eed2370b16b10e4","url":"docs/category/發文-skill.html"},{"revision":"2b3b14dca1c8d7da48eff1b64465a956","url":"docs/category/戰情室元件-skill.html"},{"revision":"7dac7278d02a649a7d770300e0379172","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"b19c5866954ba5cb84ebea44fc4861fc","url":"docs/category/skill.html"},{"revision":"52a6e09cb2446c01917cb7726496cc1d","url":"docs/category/python-workshop.html"},{"revision":"24de2b1c0e1c6d110e8ab990e3bb9bad","url":"docs/category/egg-pet-philosophy.html"},{"revision":"2ed9d274f948e1e699020463140eac3b","url":"docs/category/claude-code.html"},{"revision":"76b6c9fd8cf5d9039c2d970c03b25bf6","url":"docs/blog-skill/news-rules.html"},{"revision":"7b7ca82a500a1d60f86812e6b899d576","url":"docs/blog-skill/history-rules.html"},{"revision":"950f1c9cb2e1a260444171bf079735ba","url":"docs/blog-skill/finance-rules.html"},{"revision":"648b108a7a256547f65698acdf4dd83c","url":"auth/callback.html"},{"revision":"73d8ad34c0e6c8086ac600e36a77b17d","url":"assets/js/runtime~main.061f0a24.js"},{"revision":"cf04f40b7eeb40aca3d06677d13d2782","url":"assets/js/main.f94d4ec0.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"f136bd97e1acff3b10421ea2208c031e","url":"assets/js/ec1e3285.d2b8924a.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"184b78988f932b1af3d291646cacd98b","url":"assets/js/e88c4a9c.2a54753d.js"},{"revision":"264b0ec2a2102dde519502f9462d281b","url":"assets/js/e86a5a75.96fffe17.js"},{"revision":"ca9483b7747dd9695839672338f44142","url":"assets/js/e7f07728.62fa9198.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"d6b3b9c9eb55f928229553e4789f617f","url":"assets/js/dfea6eb9.a3e577bf.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"c0c8715556a48bb637122aa13c6e5c2d","url":"assets/js/dd5b562f.7fcec216.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"0137163e59c724e38a0c7cc1069e82ca","url":"assets/js/d1fa896a.b0ba0689.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"d02830241ab798aba1dc32af79e70441","url":"assets/js/cc221b30.953f5672.js"},{"revision":"f559bc17c3dc2656cd413e7de53dd007","url":"assets/js/c9add68e.190f8cba.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"d6594b241fbf407fdb21285b27c83925","url":"assets/js/b95eaafa.bd514a92.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"e232828c6519b4589cd77c281c632cb9","url":"assets/js/b283ca86.e10640de.js"},{"revision":"4ca15bc38f936acc426741809fcf3d1f","url":"assets/js/b2814407.e1cbf216.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"b78a21a21c0f8c9bc8f4157dad470ae7","url":"assets/js/ac590df8.edb3ab96.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"b15493e013db344e0192c3d96bd74545","url":"assets/js/a71ba949.62164570.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"11148ae37d8b17ed458aff02a727edd2","url":"assets/js/a6038fd8.66d966f4.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"bfe91d8bf5fa1bb34974dc45cdf5cde0","url":"assets/js/9adafc71.40f5293a.js"},{"revision":"914dff1976b1ecce851b88c58145b2e4","url":"assets/js/99d3b34a.3fa75dcf.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"4f838d4c214d35e671396041bd307f80","url":"assets/js/98831978.cbb8bc30.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"f0e41ad025ebf91758c146ab27da1d20","url":"assets/js/923ed0b3.8b1836df.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"9d1165d37d96d23266904b51afa87397","url":"assets/js/8c20996d.a08a30f5.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"3100b5151247db92695ccb959bfb1aa0","url":"assets/js/853ca2df.4702b566.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"fb34cb4c7dd1618cb31541ac0fa66e6c","url":"assets/js/7fbc1a25.bf2a54ba.js"},{"revision":"a9b26d715f59f5b3bda9aca0c4971b6c","url":"assets/js/7de88436.22d3584b.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"3ecb1b4151b72bfb4687879a5ee93781","url":"assets/js/7ce5d7a1.a190584a.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"e22dd3da86a8707263e90fb41a83a161","url":"assets/js/607acb04.52969f19.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"2daee3935c1d665543312a172d734cbc","url":"assets/js/5a762f2f.14bad5f4.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"c8507145a9603980341eaae02af80c59","url":"assets/js/56fce896.1a9989c5.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"d8899293062bc1623a91d6f50acbc3cc","url":"assets/js/54513d10.2255583f.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"1e5bc70a99369269f62981d698786b0d","url":"assets/js/4810d89a.9b01b40b.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"02c68f0352a77511dcf2344f648bee73","url":"assets/js/43ea09b6.95edc566.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"99d9696c3cad8fc2202e3aa4eefcd6b8","url":"assets/js/41937f2e.425f2946.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"d1cd15dc8d03c9fc666d00d7dd223062","url":"assets/js/3ee3fb84.5190afef.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"926edb97c879bc6dccfb32deaf033236","url":"assets/js/36f337b1.894cbb8f.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"d094ff8675afbac7561f6eb3290551c9","url":"assets/js/304a23a0.aef86906.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"f03b8611242ce7ee4dacfe89738a6a13","url":"assets/js/2dd9eb9e.9804b56d.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"cdc4c0ff04ca9f6e906e0c21d4facfc6","url":"assets/js/23d26d3d.42619b4e.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"97921c3972f2d4b53e921a67065f74b0","url":"assets/js/179b82d4.5846fafe.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"9097af1c8283885416d912874941481b","url":"assets/js/177ac620.1e60a2f6.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"267e346dbbfce7fae854d9575732a656","url":"assets/js/162c7fa0.e72d9e71.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"0c52305102caecd76f19e0ec609d3377","url":"assets/js/148a248b.f823c730.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"1639643d8d531275a0fb6e33b0a6dd02","url":"assets/js/0e384e19.9020ed4d.js"},{"revision":"36c585c86d3b0f22ea461d2385c4a84d","url":"assets/js/0a3b6be8.cff5cee7.js"},{"revision":"b9a0df1e4529938d57096af9f798b326","url":"assets/js/0962a2ae.0e9c2fae.js"},{"revision":"c44bf7b651f2c34c92df74bff3f5d4f5","url":"assets/js/0786d169.71d4b247.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"323c5a4d4c3c4866595f64b38a0278c2","url":"assets/js/02366042.543a1eff.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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