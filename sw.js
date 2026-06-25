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
    const precacheManifest = [{"revision":"a55d62fd69019e223080d64428028545","url":"tw_stocks.json"},{"revision":"3583484954a84f3166763cec65cc568e","url":"subscription.html"},{"revision":"23eefab4d7a505c4cb5c3f44a5e400b6","url":"quotes.html"},{"revision":"5e745f87b933dffc922e41679ed14644","url":"me.html"},{"revision":"138910043b6d9e72dc94b5f00a77ea1b","url":"market-war-room.html"},{"revision":"d2e9e92a4770a657462092eb7ef0a50e","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"2f0b3dee258c7b53807b73c1d3089c01","url":"index.html"},{"revision":"7e0db176a76d9b2fbe47a803f47ac1b3","url":"games.html"},{"revision":"8c460f4b94b722a961f2ca32c35d7c81","url":"finance.html"},{"revision":"b209d182c1befb76dd8766e415dfb2e3","url":"feedback.html"},{"revision":"92fd359251704dd3abdfe24105ae0520","url":"arena.html"},{"revision":"c61e6755b23afa04e354903728d0d7cd","url":"404.html"},{"revision":"4f53a86c4db578caa4240e20240c0b68","url":"tw_stocks/9958.json"},{"revision":"ae26ff39b3c297c8437e8e957c3c722d","url":"tw_stocks/9955.json"},{"revision":"d9b69dc7a2416381c662c7d645302a08","url":"tw_stocks/9946.json"},{"revision":"37d5ff37d24ddec832a7609f3cb4e896","url":"tw_stocks/9945.json"},{"revision":"6d666f93aab1ed4246b2f95722dcdb28","url":"tw_stocks/9944.json"},{"revision":"d7951e1bed27554076190a48d15bc661","url":"tw_stocks/9943.json"},{"revision":"ce81e1fe9e8ce39ff43b08eee8abc0e5","url":"tw_stocks/9942.json"},{"revision":"0781a3634df6ae5a7e3ec3bb1203c3e3","url":"tw_stocks/9941.json"},{"revision":"c9671342af9ff538595ddde6893da050","url":"tw_stocks/9940.json"},{"revision":"be5f135bcdf7907ce0ddfc318f34efcc","url":"tw_stocks/9939.json"},{"revision":"f4f8d3884277de6e2f91b3ff3b11a5f3","url":"tw_stocks/9938.json"},{"revision":"63c2387b3b519a2c2c3a4a142a37e5eb","url":"tw_stocks/9937.json"},{"revision":"0c17beba3b171d901b70ef237ae2aad0","url":"tw_stocks/9935.json"},{"revision":"1855760a4a6821b922fe92f9691ba095","url":"tw_stocks/9934.json"},{"revision":"66beb7d562f04c8eecf7b4875046872d","url":"tw_stocks/9933.json"},{"revision":"b60dfbfe9867866c4f8bb739ff264254","url":"tw_stocks/9931.json"},{"revision":"f2712ac0efdbc9f6a1a393c2056e7271","url":"tw_stocks/9930.json"},{"revision":"ee0631cedd09c4e65ce1e437166df921","url":"tw_stocks/9929.json"},{"revision":"c98bb437f51c7aa885a484e36fe0dae0","url":"tw_stocks/9928.json"},{"revision":"98f3209420a3056042dfa9631632bf7e","url":"tw_stocks/9927.json"},{"revision":"b3f1b575647796c39e6e05ba949f5497","url":"tw_stocks/9926.json"},{"revision":"e67981bb43363f767d4bedc0d6669ccf","url":"tw_stocks/9925.json"},{"revision":"0ed4f98987c7343fc7e80dfad5096a1b","url":"tw_stocks/9924.json"},{"revision":"c13de3cec3f3e51e8beeffeb6d050a21","url":"tw_stocks/9921.json"},{"revision":"9d8795ec75cef7e21f32b7897740fd50","url":"tw_stocks/9919.json"},{"revision":"930677e6bfd52c332128f898cec3c278","url":"tw_stocks/9918.json"},{"revision":"c3987cb57d4a8892488adf76cfcc6680","url":"tw_stocks/9917.json"},{"revision":"2162671777a174bc9149dbe0ad3cfc2e","url":"tw_stocks/9914.json"},{"revision":"d2ae34625d478d4e84f25bdd71fcb35c","url":"tw_stocks/9912.json"},{"revision":"bed3da98fc7d722532fadf96ee83c10a","url":"tw_stocks/9911.json"},{"revision":"c26be5e0a782b7cf8ccea5d6b61c6fd8","url":"tw_stocks/9910.json"},{"revision":"a4c4cae037cc4dd54a1e5453633b717c","url":"tw_stocks/9908.json"},{"revision":"82940c854919a3ecc7cf1b5e1e8c9f7c","url":"tw_stocks/9907.json"},{"revision":"baeb647c051a86a347424a27a51dd282","url":"tw_stocks/9906.json"},{"revision":"1ff08a9b9b2f5bc2c4692e4ac051c497","url":"tw_stocks/9905.json"},{"revision":"da794e25aae18f117c86b1c67c5821d7","url":"tw_stocks/9904.json"},{"revision":"0ec750fb941e65d12b979ac6c8f2444a","url":"tw_stocks/9902.json"},{"revision":"2a28c9416a42ade0060ca2e6a71f8676","url":"tw_stocks/9802.json"},{"revision":"9f31307d830842b8424daac84f38be39","url":"tw_stocks/8996.json"},{"revision":"58692099a66db8534ec1ab6c8cf2cb9b","url":"tw_stocks/8940.json"},{"revision":"936218f37fa7e1d8f92db8b885ce183d","url":"tw_stocks/8926.json"},{"revision":"1518160deb0c457c2d6be6d29177f878","url":"tw_stocks/8499.json"},{"revision":"aa19a8dc0e69cf5d79d2b99416d1eab4","url":"tw_stocks/8488.json"},{"revision":"49de4a4071eaf4cf0ad73629b23f0d35","url":"tw_stocks/8482.json"},{"revision":"06de738fda1a77e2de7d639bad8c4239","url":"tw_stocks/8481.json"},{"revision":"39e20135bc68b3962324c44d6c5ac906","url":"tw_stocks/8478.json"},{"revision":"72ebb098ee0a86d7db80b72845b2886d","url":"tw_stocks/8476.json"},{"revision":"dba64c9701f0f479a083a41a89690207","url":"tw_stocks/8473.json"},{"revision":"cd04e70ab72efbce5ba56959d7eb7ae9","url":"tw_stocks/8467.json"},{"revision":"780a14e7889293a310fc4d4dcd47a421","url":"tw_stocks/8466.json"},{"revision":"4cf75c620d060142da5e9b73a8e6c01e","url":"tw_stocks/8464.json"},{"revision":"b1a47a46de58f3b61fcd5428ecd38a30","url":"tw_stocks/8463.json"},{"revision":"a156da506480b3e5daff54383a51cec6","url":"tw_stocks/8462.json"},{"revision":"598639fa0a5c1be1743d4719ba93eb06","url":"tw_stocks/8454.json"},{"revision":"d3d66d53fc89d7658ae0bcacdc7fdd8e","url":"tw_stocks/8443.json"},{"revision":"7d8648cd5c615d079c873d1c3286f723","url":"tw_stocks/8442.json"},{"revision":"2ac940b596b76c008f51bea5f3158eca","url":"tw_stocks/8438.json"},{"revision":"dd374fffc3527e0cc4cb8fb1c90e7523","url":"tw_stocks/8429.json"},{"revision":"a1eb8375d7bdf066b29aec46142382fb","url":"tw_stocks/8422.json"},{"revision":"0460ebace8209187e09f50ddc721597b","url":"tw_stocks/8411.json"},{"revision":"d4393e8712c9b9091a4e49eccf9cea42","url":"tw_stocks/8404.json"},{"revision":"60ff13801639267ec481bb2e690e6e40","url":"tw_stocks/8374.json"},{"revision":"33231a0c0f1d7164643c97f393c4fe27","url":"tw_stocks/8367.json"},{"revision":"591ab741e987b2bff9eef3764bb18067","url":"tw_stocks/8341.json"},{"revision":"f7b6988ef08d366c42a80426a27f419c","url":"tw_stocks/8271.json"},{"revision":"d1d22795bc3cc7e8c19ba7cc321562d7","url":"tw_stocks/8261.json"},{"revision":"82377f37a93f42907383b2b5caa8f7f2","url":"tw_stocks/8249.json"},{"revision":"ff334356cdf333fd5d1e22cc46f4437e","url":"tw_stocks/8222.json"},{"revision":"995330c3c0b1df5a178c4c5566c869d8","url":"tw_stocks/8215.json"},{"revision":"7abe4bf484cc4cab2ff08917ecc7e780","url":"tw_stocks/8213.json"},{"revision":"0d157e9f8e84a9cf8ec9e02e7b90f5dd","url":"tw_stocks/8210.json"},{"revision":"08c5075edfb9032ff609a5469dfbc9a4","url":"tw_stocks/8201.json"},{"revision":"69118aa12cf4369ff432471d6f8715ea","url":"tw_stocks/8163.json"},{"revision":"42e659e3ca1779eda200aad88a28e103","url":"tw_stocks/8150.json"},{"revision":"9b029847df8216db2e83606b68ea7192","url":"tw_stocks/8131.json"},{"revision":"0c582130f401e6d10e8748c4c853efe1","url":"tw_stocks/8114.json"},{"revision":"0b5e377cee763c797da2535cc8632141","url":"tw_stocks/8112.json"},{"revision":"a941a32a6c7a406dbffa4f11f6cb04bd","url":"tw_stocks/8110.json"},{"revision":"78485a1c2e9cdf8d2610aa4b2dc74cc0","url":"tw_stocks/8105.json"},{"revision":"5d5619e18c2969e4b714eafdf85cb26e","url":"tw_stocks/8104.json"},{"revision":"358673950926e98447e547100e13db6b","url":"tw_stocks/8103.json"},{"revision":"0e45e98abc411212f1804502124a96df","url":"tw_stocks/8101.json"},{"revision":"b3b29dda0d7b800adbf9974d05a82d1a","url":"tw_stocks/8081.json"},{"revision":"59172b3fa4f8e349466caebb216403d4","url":"tw_stocks/8072.json"},{"revision":"bbc4dfdc2047281cbe7b48435ce8c436","url":"tw_stocks/8070.json"},{"revision":"fd4db335422d577df1d80db47afd1601","url":"tw_stocks/8046.json"},{"revision":"da3798136406acb382673dc9ffe5df40","url":"tw_stocks/8045.json"},{"revision":"c6912ddbcf5bf49970339b514fa70025","url":"tw_stocks/8039.json"},{"revision":"5650dbedd34f35c57078d0ee6ece00e3","url":"tw_stocks/8033.json"},{"revision":"4aa8e1a26947746e29647492d4e6a7eb","url":"tw_stocks/8028.json"},{"revision":"54a0387ee5af63e3d8a10ef5db4bcb05","url":"tw_stocks/8021.json"},{"revision":"45b77ea1bf5786281f35b81e2e63b4c2","url":"tw_stocks/8016.json"},{"revision":"013d27a9018224abcb290fafc8927ae0","url":"tw_stocks/8011.json"},{"revision":"e2f91b1a71a3aded9cb62b1dfc6cbf22","url":"tw_stocks/7822.json"},{"revision":"f5aa1598683ebe352ff9cd4bc7e2f787","url":"tw_stocks/7821.json"},{"revision":"0bbc312cab0497f2dd4eab886ad759c2","url":"tw_stocks/7818.json"},{"revision":"4e6ab88257462b6da4dcc4ed3f5f388d","url":"tw_stocks/7799.json"},{"revision":"dd616a96e0e0f5d5a7521b1833697be4","url":"tw_stocks/7795.json"},{"revision":"cbfea4c9a163b91b8d456b3362975c3a","url":"tw_stocks/7791.json"},{"revision":"533691986c6869d7fe6a25bfec6df9f8","url":"tw_stocks/7788.json"},{"revision":"09cd0cc8e57cecd471bcc962f66ab383","url":"tw_stocks/7786.json"},{"revision":"ef2a556fd59db741c6f504e3506ae45e","url":"tw_stocks/7780.json"},{"revision":"78474c443f3faa9da19e13086afae19e","url":"tw_stocks/7769.json"},{"revision":"5df29fccc1cd7c481131528d9f80964f","url":"tw_stocks/7768.json"},{"revision":"d95cbdf3c31ebd28362a67ff90622ef8","url":"tw_stocks/7765.json"},{"revision":"f2d0d5d61186fb00c5f05d46f0be77c6","url":"tw_stocks/7760.json"},{"revision":"5eaab7f02d2794d2bd481b78dffa1bb3","url":"tw_stocks/7750.json"},{"revision":"875b3d5926e8b21c5f2307ab1a8a33eb","url":"tw_stocks/7749.json"},{"revision":"c1b90db8b9bc72659fb030354f3dc544","url":"tw_stocks/7736.json"},{"revision":"049a49cc3c324ba2d13a7f8106df5695","url":"tw_stocks/7732.json"},{"revision":"0c718d1879e36528920f76d7d6e05d27","url":"tw_stocks/7722.json"},{"revision":"8cd04554b23c4c98de40d7d3cb7e2a25","url":"tw_stocks/7721.json"},{"revision":"33df61e616211c4d38b9b09faae9fb96","url":"tw_stocks/7711.json"},{"revision":"036c286db5de1bf60badf479b84bf690","url":"tw_stocks/7705.json"},{"revision":"495ce909e381d4570de3b2fdfb1ab87b","url":"tw_stocks/6994.json"},{"revision":"42a3dbcf1129e76653891546c8c511fb","url":"tw_stocks/6965.json"},{"revision":"5b3c6c583c521599b5d91da33fd309fd","url":"tw_stocks/6962.json"},{"revision":"3701b8c87c93caad1e93f35989b01b98","url":"tw_stocks/6958.json"},{"revision":"6f590219573829ca49534da6829d79a9","url":"tw_stocks/6957.json"},{"revision":"75b503f775ed895b9130f7091eacd5d0","url":"tw_stocks/6952.json"},{"revision":"f4e3ad77ea732117d2606293736c9928","url":"tw_stocks/6944.json"},{"revision":"63407c8de2487a54a3bce14a3694ec7c","url":"tw_stocks/6937.json"},{"revision":"1a811bb372465d8a1e5d68dc4305153f","url":"tw_stocks/6936.json"},{"revision":"9cb7badf493603a521f9e79de3d78b84","url":"tw_stocks/6934.json"},{"revision":"564f2cc266c2416950408883b359815b","url":"tw_stocks/6933.json"},{"revision":"17b0cd2fe7379f04b8983bfdea14933f","url":"tw_stocks/6931.json"},{"revision":"dcd1d1aa6c678dc434f546a1022a9d6f","url":"tw_stocks/6928.json"},{"revision":"b62ab478fbc916a6611a155c19d33da4","url":"tw_stocks/6923.json"},{"revision":"cb95a96839e7fcf8029fb52752528dd0","url":"tw_stocks/6919.json"},{"revision":"84bc17445d09dee55586fcc4ae07725a","url":"tw_stocks/6918.json"},{"revision":"b36ac9346782ac6b8a0f4ce3f6498990","url":"tw_stocks/6916.json"},{"revision":"9e9522cb83a20bd82fc99365b9602ce8","url":"tw_stocks/6914.json"},{"revision":"ab47dd157172cf87bdbb84c62b2a7722","url":"tw_stocks/6909.json"},{"revision":"7b752c39b7063143313c89ed8846efa8","url":"tw_stocks/6906.json"},{"revision":"ed94036cafe1c112f7c7765228cfa3c5","url":"tw_stocks/6902.json"},{"revision":"02a416aa2d9f34fd20640ab59d64725d","url":"tw_stocks/6901.json"},{"revision":"37ec5f0b370c3f2f81e6e9afc9ba7038","url":"tw_stocks/6890.json"},{"revision":"5fda7f95e80b6bf5b206dbc9b6a1b050","url":"tw_stocks/6887.json"},{"revision":"d46b80dd405ebdd316d259061bbde415","url":"tw_stocks/6885.json"},{"revision":"710a4a1620677130c3a6b43a429f8bd5","url":"tw_stocks/6873.json"},{"revision":"e8e7ff105c667a98c37f26ded3d0251b","url":"tw_stocks/6869.json"},{"revision":"d4f8c7489b58009fdf3faf6a50208656","url":"tw_stocks/6863.json"},{"revision":"a3b6a8dbb8f0e3dcf21e9c2841abbd9e","url":"tw_stocks/6862.json"},{"revision":"117dfe3782dde07bd46634d42d01b450","url":"tw_stocks/6861.json"},{"revision":"8e3d1f307e44ea9a8937b4c622f5009e","url":"tw_stocks/6838.json"},{"revision":"af6ea88c8d49f8f03c2cfc3b22960a56","url":"tw_stocks/6835.json"},{"revision":"f6a9d65971ce00ff8761820aa98afd2d","url":"tw_stocks/6834.json"},{"revision":"6742de167fa4899ac7fe1a4af6976a95","url":"tw_stocks/6831.json"},{"revision":"914265cb83c0886e7453ea1307b371f3","url":"tw_stocks/6830.json"},{"revision":"16297c6b15e727fc3a813445a59dd105","url":"tw_stocks/6807.json"},{"revision":"dfa819060f7ddd3ec5b7684bf4c1f0d5","url":"tw_stocks/6806.json"},{"revision":"5f077f02dd9ee5559ecb702eb11dd8d2","url":"tw_stocks/6805.json"},{"revision":"4f2751f8b212633f837b16fe6d8c3e39","url":"tw_stocks/6799.json"},{"revision":"1b58ae7b0bc515ca92c37a536b34ba16","url":"tw_stocks/6796.json"},{"revision":"8af9a6a394ef39e00a61082a7691c34d","url":"tw_stocks/6794.json"},{"revision":"e8751397b34dda0da693a8e67f9b0a66","url":"tw_stocks/6792.json"},{"revision":"e7cf08822283b1cd5aa514c96306900b","url":"tw_stocks/6790.json"},{"revision":"bc53f4dfa1e587450725949a43c7ac20","url":"tw_stocks/6789.json"},{"revision":"314bc29a260fef490c6a63953d3b9cc3","url":"tw_stocks/6782.json"},{"revision":"356ff3313050166b3842c6c8212e8a78","url":"tw_stocks/6781.json"},{"revision":"8ea9565124a1e8be8a3dbc4358ba8f25","url":"tw_stocks/6776.json"},{"revision":"b62b95d4c3018747873476f550658c3a","url":"tw_stocks/6770.json"},{"revision":"72c5528191aadf7569310e250a564f4b","url":"tw_stocks/6768.json"},{"revision":"fd0a4b56aa42f33bbbdb0b9bf59e923e","url":"tw_stocks/6757.json"},{"revision":"a727a451ff309b4f009bf04bbcf9e02c","url":"tw_stocks/6756.json"},{"revision":"f20bc19adbe9b37636354a83cc04e881","url":"tw_stocks/6754.json"},{"revision":"3f97903fc0ba32436f647c3277f99e76","url":"tw_stocks/6753.json"},{"revision":"fb38acf61047e699a368c7b3cc7386b1","url":"tw_stocks/6743.json"},{"revision":"916d3b5ad0fafcf57bf67e2e5c9dee93","url":"tw_stocks/6742.json"},{"revision":"978fdc03d88f9cc4b9fc002d2fe91d18","url":"tw_stocks/6722.json"},{"revision":"1214979a4cb462cab1e925e9ac48552b","url":"tw_stocks/6719.json"},{"revision":"893b8c164e2cdca28f5cae0484547ec5","url":"tw_stocks/6715.json"},{"revision":"7c1581030d6e00090604cb2c8d4baa2f","url":"tw_stocks/6706.json"},{"revision":"944e9a522c325ac3d9a21f3d9a40c347","url":"tw_stocks/6698.json"},{"revision":"7181a4ef577e926ad0596f1f07d6ac29","url":"tw_stocks/6695.json"},{"revision":"9feb5b759223deafeb3f80796b62cbbd","url":"tw_stocks/6691.json"},{"revision":"e6fc3cd18aa854839b70a398ef5157f4","url":"tw_stocks/6689.json"},{"revision":"c2ba54315bf6259096407c5b05e5779e","url":"tw_stocks/6674.json"},{"revision":"b1c5058871a7a65693de5b2aacf85bbe","url":"tw_stocks/6672.json"},{"revision":"3efd3978428330a55eb880665f7d5b2d","url":"tw_stocks/6671.json"},{"revision":"1e9d8498e9660ad1d1ab2db6e06256a6","url":"tw_stocks/6670.json"},{"revision":"d138cccb410d738254d1f2c1e1144dfb","url":"tw_stocks/6669.json"},{"revision":"2f235e4d392c32d173f8d82db02602c1","url":"tw_stocks/6668.json"},{"revision":"fc517bbc756795fc29f8f31b9a349821","url":"tw_stocks/6666.json"},{"revision":"d414d78ac5ef7bc2a8fb7412916d127d","url":"tw_stocks/6658.json"},{"revision":"b8e4eb4a90169b162f2e197547aca616","url":"tw_stocks/6657.json"},{"revision":"bcd0a70fe6dd102c55a3d9e6d3b950f6","url":"tw_stocks/6655.json"},{"revision":"ec7c5582704c6cd8c3958f8c7f08ecc8","url":"tw_stocks/6641.json"},{"revision":"c95f876da5ef570c012db864f5275a0f","url":"tw_stocks/6625.json"},{"revision":"9d3e5f560e06cf26bb5a8c8f1b851f68","url":"tw_stocks/6614.json"},{"revision":"165ded28d06b29d33588edf6381e9c5c","url":"tw_stocks/6606.json"},{"revision":"f051f9c730d1af113b083f57c45a73c8","url":"tw_stocks/6605.json"},{"revision":"3491588cbab8350b20a4bdf6e7f117da","url":"tw_stocks/6598.json"},{"revision":"680ac63ac57f07abcee176236e47254b","url":"tw_stocks/6592.json"},{"revision":"dc4ce377473d6d4e968c96f9bfb65535","url":"tw_stocks/6591.json"},{"revision":"37033129a079939d588e0b15a4a64ff3","url":"tw_stocks/6589.json"},{"revision":"0177d38f21cadc9de087fd14f853cd28","url":"tw_stocks/6585.json"},{"revision":"c3bc7ab26592ed8c753bb1d89099b40b","url":"tw_stocks/6582.json"},{"revision":"d0f9e2337327d06b7150cf669af0e2af","url":"tw_stocks/6581.json"},{"revision":"fdc1c18d7df7415f25d29dcb22dd4d35","url":"tw_stocks/6579.json"},{"revision":"5b2e6696306989e74d470963c6afc0ce","url":"tw_stocks/6573.json"},{"revision":"9d267a32b9e3fcf1c8f886d9e39e3006","url":"tw_stocks/6558.json"},{"revision":"b2cbdd5b7b9c7fbd56fc71f30e1a1a67","url":"tw_stocks/6552.json"},{"revision":"cc6ee3c335e4c94548821c247a74875e","url":"tw_stocks/6550.json"},{"revision":"7e0f345d4eb2b46309ae276a36e59048","url":"tw_stocks/6541.json"},{"revision":"e600267fdb8224267bfb606d62006319","url":"tw_stocks/6533.json"},{"revision":"b97e01a93c60823bf2eddef2f2f3b551","url":"tw_stocks/6531.json"},{"revision":"7d409f5b716b9a1f6ec30578b9486f33","url":"tw_stocks/6526.json"},{"revision":"5100650c899eb14f97d82e5bf683e959","url":"tw_stocks/6525.json"},{"revision":"78da94b9aeba13e5245a72073f7f5214","url":"tw_stocks/6515.json"},{"revision":"056ffdc6dc98504e2d473d14baea5867","url":"tw_stocks/6505.json"},{"revision":"6ce0d833556477db27ac4a2f2f17d09b","url":"tw_stocks/6504.json"},{"revision":"c72ca6ea3a2e5a65af1323a58730693f","url":"tw_stocks/6491.json"},{"revision":"8444f058b5e51801d39ccc5828587c15","url":"tw_stocks/6477.json"},{"revision":"d9d6d47fbb236cbd03e8e28846f4a4aa","url":"tw_stocks/6472.json"},{"revision":"a3a7f74b32018055cdd70ee53ceaeee8","url":"tw_stocks/6464.json"},{"revision":"817ffa550347d4252de27efbfde66dd4","url":"tw_stocks/6456.json"},{"revision":"4fefdfdad002c79f9fde207f8cf6b998","url":"tw_stocks/6451.json"},{"revision":"793d8c93c345057d9c620bc3097a1760","url":"tw_stocks/6449.json"},{"revision":"071db2e83a5f5c46bc39021aabe4800c","url":"tw_stocks/6446.json"},{"revision":"df54267b32c21f6e3d626f8ad1b24aa8","url":"tw_stocks/6443.json"},{"revision":"05c8572bdfe81efaccf31c322ce476c4","url":"tw_stocks/6442.json"},{"revision":"3577072badc52c6448664b77987349f8","url":"tw_stocks/6438.json"},{"revision":"f31ccc256554d38615eeb12961e2035e","url":"tw_stocks/6431.json"},{"revision":"687e865aabd05ca660a9441b486a33c0","url":"tw_stocks/6426.json"},{"revision":"36627f3a624d13633792272797088493","url":"tw_stocks/6416.json"},{"revision":"3ece4a19b05b3015b485c94b813dae21","url":"tw_stocks/6415.json"},{"revision":"3814b482df46985224d3c6ff34fc7fde","url":"tw_stocks/6414.json"},{"revision":"f1c93c1e4b711a0d2175ee505c707b79","url":"tw_stocks/6412.json"},{"revision":"0f318639bce8425133e770d732633756","url":"tw_stocks/6409.json"},{"revision":"f19461a25cb9442c92e4495f763439ea","url":"tw_stocks/6405.json"},{"revision":"2b7c9beb3588ccaed239022edc1f8588","url":"tw_stocks/6285.json"},{"revision":"3d7148b8306c5315e0cea77d329f23aa","url":"tw_stocks/6283.json"},{"revision":"a356492d1d2eed1b4f2ea25f5ed0d4d4","url":"tw_stocks/6282.json"},{"revision":"0eec86d16d3f67bd0e64344008ef5c4b","url":"tw_stocks/6281.json"},{"revision":"147600b1964c0f35de18231b93f63d20","url":"tw_stocks/6278.json"},{"revision":"c666deab84c8471f5e0a853699c4dd1e","url":"tw_stocks/6277.json"},{"revision":"539300f370dfad973e7302f4a1ef35a8","url":"tw_stocks/6272.json"},{"revision":"ef7d8222202f532924266c6949a26080","url":"tw_stocks/6271.json"},{"revision":"ae4b8ef5b049dd37bf06dab0ef3e11ec","url":"tw_stocks/6269.json"},{"revision":"cff190545d5be8f4c46eae90baa18b3d","url":"tw_stocks/6257.json"},{"revision":"e73c68730d31fed523653d22de47af82","url":"tw_stocks/6243.json"},{"revision":"284d5ae87dafe07a7d837cc9a717edce","url":"tw_stocks/6239.json"},{"revision":"7701ebb8d1e5a9612eb39f2bd08c4147","url":"tw_stocks/6235.json"},{"revision":"dc3b2626f56f4c0dbd1904d505e70256","url":"tw_stocks/6230.json"},{"revision":"dcbc7aa0c51d7bbae5a244a0615df544","url":"tw_stocks/6226.json"},{"revision":"64a8e822980749d98f59b355fc381437","url":"tw_stocks/6225.json"},{"revision":"f760ca63fa8e7c2173e22d9c364cb562","url":"tw_stocks/6224.json"},{"revision":"a8c030103f4f516e7d3f86bdbfd6b731","url":"tw_stocks/6216.json"},{"revision":"543e8f082497d92c28c6a1b06e2e6055","url":"tw_stocks/6215.json"},{"revision":"9c167348bc6200802e1b1c0dc558eacf","url":"tw_stocks/6214.json"},{"revision":"ade44d6058a5115f6e833d974e8255fc","url":"tw_stocks/6213.json"},{"revision":"b19f4f65a7da326cb9ecf579b9ee0a19","url":"tw_stocks/6209.json"},{"revision":"a8eaf62824e6be424de15c82232742e3","url":"tw_stocks/6206.json"},{"revision":"be32f11d13db3d1e3f808b5adcd91edb","url":"tw_stocks/6205.json"},{"revision":"313bfc95224c6bacc74a287346fdae31","url":"tw_stocks/6202.json"},{"revision":"6b9847cca4707638cb4b6f4d57b598d2","url":"tw_stocks/6201.json"},{"revision":"37e85e9754ec5889a43fbe57f6beb520","url":"tw_stocks/6197.json"},{"revision":"09f144b725d0004521ae128a1351f5b5","url":"tw_stocks/6196.json"},{"revision":"24be418ca56e262d2393cce354109900","url":"tw_stocks/6192.json"},{"revision":"02a53dae9ab115b5da98af956cbc7d2c","url":"tw_stocks/6191.json"},{"revision":"e678dbf302f038fe55450a7925896a29","url":"tw_stocks/6189.json"},{"revision":"0cd95938126ce6befac56f035ab7e777","url":"tw_stocks/6184.json"},{"revision":"a016ceb290f43b2197cf6990a62e0ac4","url":"tw_stocks/6183.json"},{"revision":"07101f921d30e6217cb21c17c38ce122","url":"tw_stocks/6177.json"},{"revision":"4238222c9a9158172894abf92bb158ce","url":"tw_stocks/6176.json"},{"revision":"f0d5fe8220ce105e05dda667d128b0c5","url":"tw_stocks/6168.json"},{"revision":"8b97b78dd7c27ba9d2c6511225446195","url":"tw_stocks/6166.json"},{"revision":"8f7a68b9fc973426cd079ba7d6ea2870","url":"tw_stocks/6165.json"},{"revision":"e42b79bf47022bea016d33c9cc6ede38","url":"tw_stocks/6164.json"},{"revision":"1a58230ca0fc506c651344e9cfb4607b","url":"tw_stocks/6155.json"},{"revision":"27ab0471031fb2926d465372f52ccd96","url":"tw_stocks/6153.json"},{"revision":"f3914acbb34a10469218a2ddb9e54393","url":"tw_stocks/6152.json"},{"revision":"4db2d26be094bcddf21348ab4016017c","url":"tw_stocks/6142.json"},{"revision":"1f37db318a9fcd1f607fb358f3902460","url":"tw_stocks/6141.json"},{"revision":"cd770a1a10ab7470509b6296ec4693ca","url":"tw_stocks/6139.json"},{"revision":"71424c99a3f387c7ee4f9bf95018210d","url":"tw_stocks/6136.json"},{"revision":"601f2c5a9989d71e7fcc1719fb297279","url":"tw_stocks/6133.json"},{"revision":"d72404f89fb44573797db14d8a8e8356","url":"tw_stocks/6128.json"},{"revision":"5e11d2f97ee57ddaa0900bd9f62e4444","url":"tw_stocks/6120.json"},{"revision":"0d404e87d2bc4e24d0eb25b6a1a2462d","url":"tw_stocks/6117.json"},{"revision":"196e3ab43813d92d72805a04df2db72f","url":"tw_stocks/6116.json"},{"revision":"ddbc9814f5f61af49b45c3471bda67c2","url":"tw_stocks/6115.json"},{"revision":"0055894734dec1e3359c26c7781c2d2c","url":"tw_stocks/6112.json"},{"revision":"64d669bd4a9d05471dd3b5f853fbe440","url":"tw_stocks/6108.json"},{"revision":"398fcc3c548117a7c92d58697e2a065c","url":"tw_stocks/6024.json"},{"revision":"1a8eb2d7e7717e0e5a1f22e28b198fc1","url":"tw_stocks/6005.json"},{"revision":"790e22b545a99d7b98ea52800ce391a3","url":"tw_stocks/5907.json"},{"revision":"bf149561b735f62f14382c7ee1314cc7","url":"tw_stocks/5906.json"},{"revision":"386264cbe28757555578a420b7de8f7e","url":"tw_stocks/5880.json"},{"revision":"2e758246255bcb2b245a1469f03cf2b6","url":"tw_stocks/5876.json"},{"revision":"ffe109408cb31fc86253e25beefec201","url":"tw_stocks/5871.json"},{"revision":"1d18673985591d1453fa1255fc3edbb9","url":"tw_stocks/5706.json"},{"revision":"c306d6541927fd16743353f08f5ddd77","url":"tw_stocks/5608.json"},{"revision":"c425d04cfd0fdb951c3c8a685669196c","url":"tw_stocks/5607.json"},{"revision":"1c8843cbb60fe9e9ce8d6d63b37263e5","url":"tw_stocks/5546.json"},{"revision":"4278f30c0a4ea206eca29e6bc58cc1e9","url":"tw_stocks/5538.json"},{"revision":"0879b75104533c704cdc6c53c38e47b5","url":"tw_stocks/5534.json"},{"revision":"af69b9ca7732ff9c81c6e81508de022b","url":"tw_stocks/5533.json"},{"revision":"82e054094d5aa84c7419ca03d4f5fded","url":"tw_stocks/5531.json"},{"revision":"856584a9803b22c24534ec06dd661894","url":"tw_stocks/5525.json"},{"revision":"8ff07630ab0d5d4ae1ec14df38d31053","url":"tw_stocks/5522.json"},{"revision":"714b239fa28685925cb23770a2bfc66a","url":"tw_stocks/5521.json"},{"revision":"2460da8c64c0615edc0ca489015693da","url":"tw_stocks/5519.json"},{"revision":"9303ac0b2d70720f30caef1f88a1ed85","url":"tw_stocks/5515.json"},{"revision":"a7c88e530cf456a04b62278ebd66ad5a","url":"tw_stocks/5484.json"},{"revision":"b755c415db003bcfc35b1bf17f5d1302","url":"tw_stocks/5471.json"},{"revision":"fa1ee53f48d7bd321daa70f5e0d4e061","url":"tw_stocks/5469.json"},{"revision":"a3b1f6d2af8d5861ec25abaebe36d764","url":"tw_stocks/5434.json"},{"revision":"d90842dcbca01a23da458d205e969bec","url":"tw_stocks/5388.json"},{"revision":"839ee688320322c034aef3de70840488","url":"tw_stocks/5306.json"},{"revision":"2efa20ff6d6106e04fc24d13b7a94321","url":"tw_stocks/5292.json"},{"revision":"04a97bfff94a69eb55d70989d4c43547","url":"tw_stocks/5288.json"},{"revision":"87c33d9eca5bec86845314fb6dae662c","url":"tw_stocks/5285.json"},{"revision":"a61a395c65884f74beb6b0790d9731cc","url":"tw_stocks/5284.json"},{"revision":"a2471a0874d22fbd6e990bb2be8d6c13","url":"tw_stocks/5283.json"},{"revision":"aa530eeae37cfc6319eb95490ed6540b","url":"tw_stocks/5269.json"},{"revision":"a2d69a89cb8ab662bbf388fdeb981edf","url":"tw_stocks/5258.json"},{"revision":"2e998c5367521f6ed6198b33eb49a59a","url":"tw_stocks/5244.json"},{"revision":"c725e0fc5c03d19b82e365afb2eacc7a","url":"tw_stocks/5243.json"},{"revision":"0258b20105080c52440a81ab0c50d60c","url":"tw_stocks/5234.json"},{"revision":"cd25d1f83c56fbb64f809d3ed6338719","url":"tw_stocks/5225.json"},{"revision":"135018fb4f551027add22152ea632d44","url":"tw_stocks/5222.json"},{"revision":"5d32bc6902951fc893c9b42cabf011db","url":"tw_stocks/5215.json"},{"revision":"19467ea9cdb1fd8af2030e6a4f88cea2","url":"tw_stocks/5203.json"},{"revision":"0f65c16d9a032ec3bf564a055320318a","url":"tw_stocks/5007.json"},{"revision":"b112e964b1cfec183975d51a0f96b0cc","url":"tw_stocks/4999.json"},{"revision":"bf5fd41a4adb7f4ed376d50aa7bd5719","url":"tw_stocks/4994.json"},{"revision":"3b65333442c5cabb7738eadc8eb23a90","url":"tw_stocks/4989.json"},{"revision":"8950d63744657b4254be73662ac149c6","url":"tw_stocks/4977.json"},{"revision":"aa4d0c52941b78e7a73640800e262793","url":"tw_stocks/4976.json"},{"revision":"0aea0f45a219b953aec50197e0f672e8","url":"tw_stocks/4968.json"},{"revision":"d78119ab3b695409e3052c3d5010da19","url":"tw_stocks/4967.json"},{"revision":"c1000b2706030e8926fe096626185987","url":"tw_stocks/4961.json"},{"revision":"ca1687dcb02a24c6ba9842ab0bb52daf","url":"tw_stocks/4960.json"},{"revision":"33be8d57bd7988c284991048371b9802","url":"tw_stocks/4958.json"},{"revision":"29af0acf3488c8d10fb87cd124c2f439","url":"tw_stocks/4956.json"},{"revision":"b1067cf3cece1a49ac19f8ffa4567399","url":"tw_stocks/4952.json"},{"revision":"ac9ca5ad3cb24b69599d0da5457b06e7","url":"tw_stocks/4949.json"},{"revision":"97bdb40a62e944fbf0eba3ffc7d47519","url":"tw_stocks/4943.json"},{"revision":"a7ec085d4e52f3e52a769574031c081c","url":"tw_stocks/4942.json"},{"revision":"285f9ad5ab800c6b501dd54592c19476","url":"tw_stocks/4938.json"},{"revision":"5163c3a41598ee6fdb29066345787f63","url":"tw_stocks/4935.json"},{"revision":"8e37a36138752eb52afb033bef590b4d","url":"tw_stocks/4934.json"},{"revision":"19b63de79003a9ae5ed213224e566d5f","url":"tw_stocks/4930.json"},{"revision":"c65b0056fa66136c8ab86ffa5685537c","url":"tw_stocks/4927.json"},{"revision":"4391cd9486cb234852a919b54fb20471","url":"tw_stocks/4919.json"},{"revision":"5cd965497acfcaa9c7860ec13b8278cd","url":"tw_stocks/4916.json"},{"revision":"5e3bceac8ffad7797fd754d619414061","url":"tw_stocks/4915.json"},{"revision":"d362233267091aebb9a903a3dc87cbad","url":"tw_stocks/4912.json"},{"revision":"4e9302416d62a7fe479d153e03f72c87","url":"tw_stocks/4906.json"},{"revision":"6450bb0e2700a8951afd7b5ad6d0128f","url":"tw_stocks/4904.json"},{"revision":"a14ae66c68de8a41e1d25224f1db7f95","url":"tw_stocks/4807.json"},{"revision":"65dcb3a2a2af7035a5a6eb4268d3daf7","url":"tw_stocks/4771.json"},{"revision":"2ed4dd05f61ed4f1c5e9704892e0f4b2","url":"tw_stocks/4770.json"},{"revision":"ca46912d380c4ef56b683750c940ccaf","url":"tw_stocks/4766.json"},{"revision":"263cc7b2cb38dd2609e6afebea872a0a","url":"tw_stocks/4764.json"},{"revision":"c5ebd4150bf1004f8712618c305a290a","url":"tw_stocks/4763.json"},{"revision":"1e6fd6f157dd081ef51981d858d853df","url":"tw_stocks/4755.json"},{"revision":"f64669dbabad6d7a959183935823ea30","url":"tw_stocks/4746.json"},{"revision":"4b613f74bb08293be4b48e16479ddcf1","url":"tw_stocks/4739.json"},{"revision":"10239f95fc1a425c2b42cecee4a4b197","url":"tw_stocks/4737.json"},{"revision":"1256175c411bd62fe03591eb774e2282","url":"tw_stocks/4736.json"},{"revision":"4464085fcdd793a0effc7e8738680336","url":"tw_stocks/4722.json"},{"revision":"664a86b2ce2bf2f0d4f2b8d670ea31b9","url":"tw_stocks/4720.json"},{"revision":"31116df79d17b6dabbce5600d64e9311","url":"tw_stocks/4588.json"},{"revision":"0e510bc77d3902ab30885845bd9e258f","url":"tw_stocks/4585.json"},{"revision":"cf057042d1ca11c15e504ee737e88a89","url":"tw_stocks/4583.json"},{"revision":"d70fef15553b94f3647eb012c4aed7e0","url":"tw_stocks/4581.json"},{"revision":"57868043edaa069fd3a3ca01285dc9b9","url":"tw_stocks/4576.json"},{"revision":"ff956575bf76c01a83b25655c1011827","url":"tw_stocks/4572.json"},{"revision":"f258a6977e3b3010ec90be1f04835f4d","url":"tw_stocks/4571.json"},{"revision":"9652f0d5af51a47176c68922b0dfa73d","url":"tw_stocks/4569.json"},{"revision":"519abde3ebae967899f685cd2f4cdb1f","url":"tw_stocks/4566.json"},{"revision":"bd9f768885d19470d9a5c8e2ec25987e","url":"tw_stocks/4564.json"},{"revision":"d0415339424c958be91462f2eaff9ff2","url":"tw_stocks/4562.json"},{"revision":"beb0cd590244c636ba59a8707c54db9e","url":"tw_stocks/4560.json"},{"revision":"4dde150e51c03b0dd1323fa975fba9ea","url":"tw_stocks/4557.json"},{"revision":"46dd2be010e00d3488e2159b9788a2b2","url":"tw_stocks/4555.json"},{"revision":"9b8df8ce30662774f14b1d59338db3c0","url":"tw_stocks/4552.json"},{"revision":"b27d430126715ab62cc7c15c45b3d667","url":"tw_stocks/4551.json"},{"revision":"3dbe086529ffe65e09f7d6adc9768cbe","url":"tw_stocks/4545.json"},{"revision":"f2042d64acdd292749086d6a5d7324a8","url":"tw_stocks/4540.json"},{"revision":"ea0abef8aaa8d1cebe6705a97a62a6d4","url":"tw_stocks/4536.json"},{"revision":"dddf016a25da9b4cb830c11b8961251b","url":"tw_stocks/4532.json"},{"revision":"4efc04c5cadc871d2f9703b15d27cba4","url":"tw_stocks/4526.json"},{"revision":"e2f1299400b14f1023dd5f768f11ef7f","url":"tw_stocks/4441.json"},{"revision":"0408904e896605ef907bc8c7cfa464f3","url":"tw_stocks/4440.json"},{"revision":"c8cd9793410b651c436ea6f6f9b2d8b1","url":"tw_stocks/4439.json"},{"revision":"267ec9da08dbea4720ee967a20ffa877","url":"tw_stocks/4438.json"},{"revision":"d0b8964b9fc91231779296c61585f623","url":"tw_stocks/4426.json"},{"revision":"2eb52add304b0847ac8f299fc9efe98a","url":"tw_stocks/4414.json"},{"revision":"a5c4edcd2b684d4497a8656339f7b368","url":"tw_stocks/4306.json"},{"revision":"2f77e772ef7368c6c6f15a5d52b5b6ad","url":"tw_stocks/4190.json"},{"revision":"07c5e4c95a425cc1be920b424677be78","url":"tw_stocks/4178.json"},{"revision":"bbe9f3d68ce3d37e868985af4462ff1a","url":"tw_stocks/4169.json"},{"revision":"398af7df7597ec88047dae2a4473324f","url":"tw_stocks/4164.json"},{"revision":"d4460ff0c3fa20b4028edf13ad0f5a18","url":"tw_stocks/4155.json"},{"revision":"a969fded15ef09adeb4d1f3789127dcb","url":"tw_stocks/4148.json"},{"revision":"c97d6eafc2506adb4fcf0bf044b810e1","url":"tw_stocks/4142.json"},{"revision":"7f40e6e2b77a97b51883d23f19f2854b","url":"tw_stocks/4137.json"},{"revision":"22266a768455811dfc2e943f93fcacc4","url":"tw_stocks/4133.json"},{"revision":"4ba6987a447228396c1479d0e8140c43","url":"tw_stocks/4119.json"},{"revision":"fdcd373cbe8df9ac47000461eea44489","url":"tw_stocks/4108.json"},{"revision":"0199d2baf8b1991d225f471c63b60bea","url":"tw_stocks/4106.json"},{"revision":"537d3d5b546ff333916ae5682dbe6cdb","url":"tw_stocks/4104.json"},{"revision":"e5be4b716cf8fe54b2faba17d36f2b74","url":"tw_stocks/3717.json"},{"revision":"40741a0fb26ffde1c23e0c82441acbe4","url":"tw_stocks/3716.json"},{"revision":"97a58e71cd2ade153b69431dba22c7f8","url":"tw_stocks/3715.json"},{"revision":"8e070e371055f304c8537eaaa55b5b93","url":"tw_stocks/3714.json"},{"revision":"005ea0dced40b118107426508e8bcc15","url":"tw_stocks/3712.json"},{"revision":"bfcd519dd4aac497e11b0f31cee7246b","url":"tw_stocks/3711.json"},{"revision":"109edd2f72a61277b8304557d93b0d4b","url":"tw_stocks/3708.json"},{"revision":"6d2c4caa8c79b3375fe90d9dfc51969c","url":"tw_stocks/3706.json"},{"revision":"88b7136f7507fcb9209e10f2b3932be5","url":"tw_stocks/3705.json"},{"revision":"a6fe04eef3bc775a9be99dbf35d23438","url":"tw_stocks/3704.json"},{"revision":"c2a848433d4884e30030684c66e41cfc","url":"tw_stocks/3703.json"},{"revision":"6860f7a619b56592e18b3e47bd6f232f","url":"tw_stocks/3702.json"},{"revision":"bfad873f6a9b60e5d71e1eeec9e0e518","url":"tw_stocks/3701.json"},{"revision":"960f9be2048cea117e54297f7c84cf5b","url":"tw_stocks/3694.json"},{"revision":"ab69fa672d7d8745b3befd6efb58cd5e","url":"tw_stocks/3686.json"},{"revision":"65249adb5a34e8764a69d6f39248e9d7","url":"tw_stocks/3679.json"},{"revision":"ba413a526712f5699d161d482d738e69","url":"tw_stocks/3673.json"},{"revision":"f9c1ff02cb7136b8909da6a2f87f1edb","url":"tw_stocks/3669.json"},{"revision":"9ef9698177c3cae42d53001940d1d9c0","url":"tw_stocks/3665.json"},{"revision":"8bba2cbc356d3728a0dd774e9092e6f1","url":"tw_stocks/3661.json"},{"revision":"44df4b742e6d6df67975b2c5f4519a1e","url":"tw_stocks/3653.json"},{"revision":"cfd94eb0f12fa17a0f0723199fbfb73c","url":"tw_stocks/3652.json"},{"revision":"0777bb9870680102aa5e8dfcf20309db","url":"tw_stocks/3645.json"},{"revision":"2dfa0182e1c79d136f0cd23dcf748732","url":"tw_stocks/3622.json"},{"revision":"6e78146d8ec9ac5d29f41054261d3dd6","url":"tw_stocks/3617.json"},{"revision":"4c43fe5cafa1856340c6fc7f38635dc6","url":"tw_stocks/3607.json"},{"revision":"61778224e9a23b95fbff29f6a7d195aa","url":"tw_stocks/3605.json"},{"revision":"cd0a8914e587ef821dccf3b6129e6f51","url":"tw_stocks/3596.json"},{"revision":"d9d498f04bcc0bc6cbf147baca5dbb91","url":"tw_stocks/3593.json"},{"revision":"8d67d68e8cb73411dc29611fefa84f6d","url":"tw_stocks/3592.json"},{"revision":"773b7dd34ca711bb849cb84823ca07c8","url":"tw_stocks/3591.json"},{"revision":"a2615ca52a80fef6195330dba9a6a07f","url":"tw_stocks/3588.json"},{"revision":"a2f7a0a2623c4ed096ded6ef99e18649","url":"tw_stocks/3583.json"},{"revision":"903a8d70a49cfd6fe3357563114ec468","url":"tw_stocks/3576.json"},{"revision":"e932b63297666153c7cb2e0e72378467","url":"tw_stocks/3563.json"},{"revision":"7083800958611e7761958aa4d711186d","url":"tw_stocks/3557.json"},{"revision":"c9d226ddf093e55a136f119d8d2d1056","url":"tw_stocks/3550.json"},{"revision":"e23a1a42de3228e4029781cb5560e03c","url":"tw_stocks/3545.json"},{"revision":"915f81cb967c3ebbf605f51ef00009c4","url":"tw_stocks/3543.json"},{"revision":"b5064db8d5ca965734d236050add1cb9","url":"tw_stocks/3535.json"},{"revision":"98f042efde8262f7e0449886607701f6","url":"tw_stocks/3533.json"},{"revision":"6503f0ebe20ba430887630c094db4087","url":"tw_stocks/3532.json"},{"revision":"a8b06bff955683f655a95dcb526d7a8b","url":"tw_stocks/3530.json"},{"revision":"91ade38d46d28e6d741f1b183d1a0274","url":"tw_stocks/3528.json"},{"revision":"543b1480064adb283fcce2187a78900d","url":"tw_stocks/3518.json"},{"revision":"1c6c55097c21242a5982000a47e34304","url":"tw_stocks/3515.json"},{"revision":"09d5414dbf06a89dc83bfd0a9340f6d0","url":"tw_stocks/3504.json"},{"revision":"c4022193f8ba6d0447ab6a0eb4e10dd7","url":"tw_stocks/3501.json"},{"revision":"fcc3a7a4be3766c3b0b18fad29bd4f19","url":"tw_stocks/3494.json"},{"revision":"774d5acf6f0c08b3ca0c014a266361fd","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"01b6ac5c92e89f9533c827319e2a3cfd","url":"tw_stocks/3450.json"},{"revision":"f0e2bbdcf2be8658d11fa265abb5fd2b","url":"tw_stocks/3447.json"},{"revision":"843a47eaede3007e72b037fac7c4f354","url":"tw_stocks/3443.json"},{"revision":"305051aeb7b00a9f186718478589d7ec","url":"tw_stocks/3437.json"},{"revision":"5690f320a57e31bd2bcc673e795058d6","url":"tw_stocks/3432.json"},{"revision":"572230878e94afc04fb771c001743243","url":"tw_stocks/3419.json"},{"revision":"5d8c02e135d1788119c7d8c1d1966831","url":"tw_stocks/3416.json"},{"revision":"b41357508e8b0679ad2cf764cdbeba55","url":"tw_stocks/3413.json"},{"revision":"f104caa9c0c326628c0f3de956679d6f","url":"tw_stocks/3406.json"},{"revision":"0cf0f7e83003664dc1fdaa17e883a64b","url":"tw_stocks/3380.json"},{"revision":"916db1a38763f5c5c0bb754e84667fdc","url":"tw_stocks/3376.json"},{"revision":"d345b344bddf21102cdeea7825f7540e","url":"tw_stocks/3356.json"},{"revision":"c0f24f77be8e4f32d0bba89d88fa7d42","url":"tw_stocks/3346.json"},{"revision":"ecf4ccb24e2040ee115fa5c8fb681917","url":"tw_stocks/3338.json"},{"revision":"df1bb24e1ff71f814ac60b4ae932dedc","url":"tw_stocks/3321.json"},{"revision":"ecf2e707f1be565d949839276d50ec87","url":"tw_stocks/3312.json"},{"revision":"97d86775b0be61c4d262669b14e504c5","url":"tw_stocks/3311.json"},{"revision":"50661f248180adaaf9943fe08dedd234","url":"tw_stocks/3308.json"},{"revision":"b6cfe69365f714e392acbde6e90de119","url":"tw_stocks/3305.json"},{"revision":"7681b6e6d672e5d429d4d411f1bb6de1","url":"tw_stocks/3296.json"},{"revision":"00048c633d934f2f5a49de5ed9fde8fb","url":"tw_stocks/3266.json"},{"revision":"1afe938b6878409634defed424d85256","url":"tw_stocks/3257.json"},{"revision":"fdf18723e90297aa917c739e25f7bd10","url":"tw_stocks/3231.json"},{"revision":"a860657a3dbfc08855a96a4639dfc729","url":"tw_stocks/3229.json"},{"revision":"e95bfe08b7b125c1ed1df30b8f279062","url":"tw_stocks/3209.json"},{"revision":"3142236fe137ab39d0c32c5562c5189c","url":"tw_stocks/3189.json"},{"revision":"dbf8f9b3546201046ff6feb715f6153c","url":"tw_stocks/3168.json"},{"revision":"fde6ad4229cc6c2175d5117ae24bebd7","url":"tw_stocks/3167.json"},{"revision":"acd4ba966694166468d38843c1bf097f","url":"tw_stocks/3164.json"},{"revision":"77606deeaf273e097be643ce6429163f","url":"tw_stocks/3149.json"},{"revision":"a16dde717255f0328f5107f910bdd413","url":"tw_stocks/3138.json"},{"revision":"aa19136b392cf12906e2cd8920486da4","url":"tw_stocks/3135.json"},{"revision":"6285c38e7565d9e2dbae9677deab9d17","url":"tw_stocks/3130.json"},{"revision":"1a3c3a5b8dee83b7480bc3b180cbcb77","url":"tw_stocks/3094.json"},{"revision":"dd138a9f3b3a17dc9f943f8da39e21b2","url":"tw_stocks/3092.json"},{"revision":"8d4129ee7010c8707dbe36e9afbdf54e","url":"tw_stocks/3090.json"},{"revision":"e6f47ebe79e2da5341b9c1cbc5eb7728","url":"tw_stocks/3062.json"},{"revision":"b5b8811ac2f5e86082ed8838aef1475e","url":"tw_stocks/3060.json"},{"revision":"90dcc08fd6d3c565c2c30be5818f5299","url":"tw_stocks/3059.json"},{"revision":"23270c131076f035c1524ebe220dd6e2","url":"tw_stocks/3058.json"},{"revision":"474b59a30c8f736fa8f016d5f4392881","url":"tw_stocks/3057.json"},{"revision":"c000ab97d8972ad79f4120cf54f6de4a","url":"tw_stocks/3056.json"},{"revision":"6afc2ef5d735b084f780ef89b0a8abc6","url":"tw_stocks/3055.json"},{"revision":"b2ec2672309f7d2c7f8299dedcdd1a6b","url":"tw_stocks/3054.json"},{"revision":"dfa1b611b2d4a50b16817afee9b93a74","url":"tw_stocks/3052.json"},{"revision":"6589f61738bdbcb6aeb6f387bfde1ace","url":"tw_stocks/3051.json"},{"revision":"942aa6303c1fab2cd327f162aa02f205","url":"tw_stocks/3050.json"},{"revision":"e2b08b97de56484e9904e24d928a87ef","url":"tw_stocks/3049.json"},{"revision":"b9ec94d20b90514d506e4f7885bf08e8","url":"tw_stocks/3048.json"},{"revision":"a2ea89b6fc92ebe811498f72dad2e87a","url":"tw_stocks/3047.json"},{"revision":"affe90ae5dcbb2d8bc07ca34bfca130c","url":"tw_stocks/3046.json"},{"revision":"7dd6a1211431af7dc2a0e039662bcb41","url":"tw_stocks/3045.json"},{"revision":"e28bf9a2090606e7ed835608d849582b","url":"tw_stocks/3044.json"},{"revision":"d21b0065820d54767c07a9ee983dd712","url":"tw_stocks/3043.json"},{"revision":"a6301a597eea7cc30964e75f66bf2bf9","url":"tw_stocks/3042.json"},{"revision":"03c5b9ba191953adc785d7ae2b1a0a09","url":"tw_stocks/3041.json"},{"revision":"c113ee42df809170de3c0dc4b0a4b7a5","url":"tw_stocks/3040.json"},{"revision":"f2fbad0685d8befe9f0f2858c9cc4dc2","url":"tw_stocks/3038.json"},{"revision":"6a4fd200e64ebd0ac75ac16b8b62b4bd","url":"tw_stocks/3037.json"},{"revision":"03e73b10d115347bd6e8e2b2647762b6","url":"tw_stocks/3036.json"},{"revision":"f05486a17eea249ac702c0acc8f76745","url":"tw_stocks/3035.json"},{"revision":"b19a8b3a1a4bd357653d9fb22d04df4c","url":"tw_stocks/3034.json"},{"revision":"44c91efb94670be7baddd134b652ea98","url":"tw_stocks/3033.json"},{"revision":"8ced935ef921242ab4f30c458de817cf","url":"tw_stocks/3032.json"},{"revision":"1b759ed02089403bde6d0a4f59e97d0a","url":"tw_stocks/3031.json"},{"revision":"02ccf4a49a8a36a91a001af83e8db89b","url":"tw_stocks/3030.json"},{"revision":"108225e3e29079f83b1e2768236b543e","url":"tw_stocks/3029.json"},{"revision":"1d799c24564ba120882fa979f5f4d25b","url":"tw_stocks/3028.json"},{"revision":"f88af615e0022d4405fc500c53092695","url":"tw_stocks/3027.json"},{"revision":"c240eb9ebcbad7c8abb6e8dbea6f5e99","url":"tw_stocks/3026.json"},{"revision":"8e10373f90954824d1e34b017fe23585","url":"tw_stocks/3025.json"},{"revision":"4197f97c3cf1e21af249fc93b8304def","url":"tw_stocks/3024.json"},{"revision":"140d2cf51dca8c985217f3e28d694810","url":"tw_stocks/3023.json"},{"revision":"7922010cb4aafad28e140f85a3853011","url":"tw_stocks/3022.json"},{"revision":"8dc7b63d5d51efbb1f58d9abbb0f5fcc","url":"tw_stocks/3021.json"},{"revision":"4cbb6e71c7f7823816dc559f9f483b7b","url":"tw_stocks/3019.json"},{"revision":"94de86cf0a3bfa9771569412cfec0a1d","url":"tw_stocks/3018.json"},{"revision":"62260014c8e38608d947de193ef5eefb","url":"tw_stocks/3017.json"},{"revision":"06fbdb81f56a9df9047c89f325e8a768","url":"tw_stocks/3016.json"},{"revision":"611304344642204d81a39f59317e2dc9","url":"tw_stocks/3015.json"},{"revision":"454a91ad2fd90cc67f2d0b302747e6f8","url":"tw_stocks/3014.json"},{"revision":"50876f32d039d722b9fb1509893c8df0","url":"tw_stocks/3013.json"},{"revision":"bdad5bcb05dbcb6779b8b552e487deb8","url":"tw_stocks/3011.json"},{"revision":"855d659a74e4e7a7fdc9535547e50cd5","url":"tw_stocks/3010.json"},{"revision":"5fa8450683190a992a0e5c0e5464345f","url":"tw_stocks/3008.json"},{"revision":"b36133fec74dae6488f8d49efcc9883d","url":"tw_stocks/3006.json"},{"revision":"099f6d71d0504b78a77379c1dda6a398","url":"tw_stocks/3005.json"},{"revision":"bcd77f74400a57e1c728ad3dcc31a40a","url":"tw_stocks/3004.json"},{"revision":"b75ba1510152e75702c94ab927b18e58","url":"tw_stocks/3003.json"},{"revision":"457f89f10959fa803a536442d605f5ac","url":"tw_stocks/3002.json"},{"revision":"dbdb23bda0875c7897699d557e73f055","url":"tw_stocks/2945.json"},{"revision":"21a9152d212eeb07468f716aac4a05f7","url":"tw_stocks/2939.json"},{"revision":"f6812790a410f79d5ed678d2aa08c6cb","url":"tw_stocks/2929.json"},{"revision":"4ba5b55f04d8db69b1413f05d4153db9","url":"tw_stocks/2923.json"},{"revision":"d1165764d9ecf8a59bbb9a6c4017edb2","url":"tw_stocks/2915.json"},{"revision":"7d22795ce37e9406b51df51739e3f20a","url":"tw_stocks/2913.json"},{"revision":"4fb072401cee09c9f622123d66d73144","url":"tw_stocks/2912.json"},{"revision":"1549b1c7398f8e467fbecfdc6cd91cec","url":"tw_stocks/2911.json"},{"revision":"461a0754cc4dd4386de11c5cc9c945d9","url":"tw_stocks/2910.json"},{"revision":"8ae52c267155b9768aa8f946d2466193","url":"tw_stocks/2908.json"},{"revision":"b81a5121978e879cdeb960a573bda883","url":"tw_stocks/2906.json"},{"revision":"6827b8e352bc1a98af8f99ad9af5d8bc","url":"tw_stocks/2905.json"},{"revision":"d262118d159c1b0b2e8a00fd57f52cd4","url":"tw_stocks/2904.json"},{"revision":"d597447258615d675781276e3809de6d","url":"tw_stocks/2903.json"},{"revision":"bcf586f67d405930c3e77cba45d5e9c2","url":"tw_stocks/2901.json"},{"revision":"5ef9f7323d6a3106893fafbbbadc4a87","url":"tw_stocks/2897.json"},{"revision":"6bf920d4c93cd8b6d7b10e6951e55834","url":"tw_stocks/2892.json"},{"revision":"f1f009b164e09380a3a01e6529c8470a","url":"tw_stocks/2891.json"},{"revision":"487df9fc3df21ebe1268fad5ffedc971","url":"tw_stocks/2890.json"},{"revision":"e10a2249e7e8d53d3cd792f2e50b9768","url":"tw_stocks/2889.json"},{"revision":"1f2423a371f1398f7653395fdd7a6203","url":"tw_stocks/2887.json"},{"revision":"6b082a0c8f6f3afd6a82bef3ffc4ea39","url":"tw_stocks/2886.json"},{"revision":"8370edd8b6539f347582f83dbd3415f8","url":"tw_stocks/2885.json"},{"revision":"9bb13c888655de9237dc38bdc8067900","url":"tw_stocks/2884.json"},{"revision":"5928e1cb410fa728c91cb44f96599126","url":"tw_stocks/2883.json"},{"revision":"5139e5356b018758fe15a14f73bc891f","url":"tw_stocks/2882.json"},{"revision":"9d32bae9554fcb0a40683ef8aae762c9","url":"tw_stocks/2881.json"},{"revision":"32f952c69636eac4c842282612a6643c","url":"tw_stocks/2880.json"},{"revision":"8938c9c1f389f29864aafc7569b2d709","url":"tw_stocks/2867.json"},{"revision":"06093dcabca3a8d64e25d9b5d337471b","url":"tw_stocks/2855.json"},{"revision":"eabced78e01cea408d902db8b55e59c9","url":"tw_stocks/2852.json"},{"revision":"6bc1c734797062d41cc57073fd8b5026","url":"tw_stocks/2851.json"},{"revision":"f100324fc951d8b51a9000fb82b7f6a5","url":"tw_stocks/2850.json"},{"revision":"e9b4ce446e6a07918185e5fb3aff120c","url":"tw_stocks/2849.json"},{"revision":"5fc806de7c24f63f698d35bb614def9d","url":"tw_stocks/2845.json"},{"revision":"930dc51a820501da6681c468514f394a","url":"tw_stocks/2838.json"},{"revision":"941a05d7aa0afe1b495f741a12e9aa95","url":"tw_stocks/2836.json"},{"revision":"5b1b063da52197d1ef564a58b2877fbd","url":"tw_stocks/2834.json"},{"revision":"431b70a9d3245831601c8adc5f21cd97","url":"tw_stocks/2832.json"},{"revision":"4241bb7d0d6055dfcfdf533f75be0dbd","url":"tw_stocks/2820.json"},{"revision":"12d623f30db640ec47379fbbf7125402","url":"tw_stocks/2816.json"},{"revision":"6737876774a591a1269b624b0449ae91","url":"tw_stocks/2812.json"},{"revision":"e7ac1273d3a052e6776ba5d764d812e4","url":"tw_stocks/2801.json"},{"revision":"a86b2ccb7952de91140b8516fde2c4f6","url":"tw_stocks/2762.json"},{"revision":"426b3f9c45b928cfe67f3bf1ff327e99","url":"tw_stocks/2753.json"},{"revision":"1e1e6587a812c4cf21da1b85d7fbeea6","url":"tw_stocks/2748.json"},{"revision":"b5f336de47ba8ff15c6fab5b6f10df68","url":"tw_stocks/2739.json"},{"revision":"0b19ddda6128b6cc09c51d45f1876bb2","url":"tw_stocks/2731.json"},{"revision":"64aa3c97e460670986689850a878f0af","url":"tw_stocks/2727.json"},{"revision":"2efb4e0f4024e330822bcfc82ddb7417","url":"tw_stocks/2723.json"},{"revision":"fda7e563a1cb6ecb2551abc118dcaeb4","url":"tw_stocks/2722.json"},{"revision":"221969be66c648248e4f80d5c1a005c1","url":"tw_stocks/2712.json"},{"revision":"db5a329651300be31ab5e369b334b623","url":"tw_stocks/2707.json"},{"revision":"a9712781e86361bfd9c737280105d975","url":"tw_stocks/2706.json"},{"revision":"04834a14706b46df3cb04ba4a120fcd7","url":"tw_stocks/2705.json"},{"revision":"bb5751aac309fe27b4c32a98306ddb3f","url":"tw_stocks/2704.json"},{"revision":"0ac6a30eee05727366d0faf0b7187821","url":"tw_stocks/2702.json"},{"revision":"874b537783e9de9cc28d9088bf99c8d2","url":"tw_stocks/2701.json"},{"revision":"5f8aa47eab7abe55343f95bafb13de0e","url":"tw_stocks/2646.json"},{"revision":"3349c998b77eb67e839a2ebf8f90dd80","url":"tw_stocks/2645.json"},{"revision":"5d0d85b3dfc45d78fbe02be5c0c5ac3f","url":"tw_stocks/2642.json"},{"revision":"0bed4c0d56118f7e87dbeffd5a41176d","url":"tw_stocks/2637.json"},{"revision":"62a4c92df65012dec1cd5fcd150312c6","url":"tw_stocks/2636.json"},{"revision":"1d523d523bb967863cd5d38c166d7e34","url":"tw_stocks/2634.json"},{"revision":"a60c921c012596ed5d343e4ec76e931b","url":"tw_stocks/2633.json"},{"revision":"305a7fb47b5d230b5cf4049374a3ec39","url":"tw_stocks/2630.json"},{"revision":"7bb0cb1e8c945c0b02b5f499f59f589d","url":"tw_stocks/2618.json"},{"revision":"3d6ac44a5e0410321a64c63895a6c1a7","url":"tw_stocks/2617.json"},{"revision":"5cd826a638b50a73391ba3fd5f7b6e54","url":"tw_stocks/2616.json"},{"revision":"9f4d2e23a88899344385de51b71ab20e","url":"tw_stocks/2615.json"},{"revision":"07976e477da4f70339b138782341bc62","url":"tw_stocks/2614.json"},{"revision":"7e799727b12a361867793f3817a82c56","url":"tw_stocks/2613.json"},{"revision":"9982d64d4f535dd077482f092a8ea276","url":"tw_stocks/2612.json"},{"revision":"39261ac771481976330c6d4897973bc8","url":"tw_stocks/2611.json"},{"revision":"4a7c0324a18e5be394f2c91c2d99aca7","url":"tw_stocks/2610.json"},{"revision":"5a1845efb1a6297ac9fe9b744fa2b951","url":"tw_stocks/2609.json"},{"revision":"086971fd2d4ae14e3c88bcd368c6d2ed","url":"tw_stocks/2608.json"},{"revision":"dd11c4d235e964ada152e0d27527e489","url":"tw_stocks/2607.json"},{"revision":"545c658ca2f7cd84ee87cfcade073117","url":"tw_stocks/2606.json"},{"revision":"73e1deec0a664063abc949c8122497ad","url":"tw_stocks/2605.json"},{"revision":"0972eba6f13e4036272f8ff0e7fd1ee7","url":"tw_stocks/2603.json"},{"revision":"2699eefbe97bd4cf80bcb2446eab8e14","url":"tw_stocks/2601.json"},{"revision":"f9c206470b4a971478a15ad57898bd8f","url":"tw_stocks/2597.json"},{"revision":"8d623313461d1c8944389827592014fe","url":"tw_stocks/2548.json"},{"revision":"f93db31db50f6ac9ebe967317f1e85e3","url":"tw_stocks/2547.json"},{"revision":"964a7fdc83062e53ea65ad196fe0355c","url":"tw_stocks/2546.json"},{"revision":"c2ee4f407c42eeaf007aa3510ebb7b1d","url":"tw_stocks/2545.json"},{"revision":"a3cbe0f7e1bc9a8795efd7bece92e07d","url":"tw_stocks/2543.json"},{"revision":"b46a9609e7be42d1a31dfb93c1965656","url":"tw_stocks/2542.json"},{"revision":"241338f8e362fc15b62460a10937cce3","url":"tw_stocks/2540.json"},{"revision":"6988b8f92eaaffd4e0977dc434a076a4","url":"tw_stocks/2539.json"},{"revision":"52b41a13ffa578e05ac282b05c768bc9","url":"tw_stocks/2538.json"},{"revision":"7138522546b125407e659b93fe205380","url":"tw_stocks/2537.json"},{"revision":"c9a69008e38fedceac5e98c8a1f3c035","url":"tw_stocks/2536.json"},{"revision":"ef6c13370155b00c66c1ae48be858dc6","url":"tw_stocks/2535.json"},{"revision":"8f449d807f9617395724a3234ac050aa","url":"tw_stocks/2534.json"},{"revision":"84118d5397d8c1480ff5a7f7ea80f27b","url":"tw_stocks/2530.json"},{"revision":"2539a55a59ca4d9eaef5a545dfbc4509","url":"tw_stocks/2528.json"},{"revision":"531c3c525be8a72d16a69c7c597b39d1","url":"tw_stocks/2527.json"},{"revision":"3feff33a8092b91fbb0d810d50f8e221","url":"tw_stocks/2524.json"},{"revision":"714a77ebbd85381dac2350e6b5defedb","url":"tw_stocks/2520.json"},{"revision":"de0e169c6a54d682f0d2510dd46120e0","url":"tw_stocks/2516.json"},{"revision":"8f5217b565e90a85c4bb67d2483ab9b1","url":"tw_stocks/2515.json"},{"revision":"3520c3936cdc149467293ddb3c3fe0c6","url":"tw_stocks/2514.json"},{"revision":"0a7d44283d0ecccf81cfa2f788d634b0","url":"tw_stocks/2511.json"},{"revision":"cf3fafb6398974761f0d7128005870e9","url":"tw_stocks/2509.json"},{"revision":"4f1bd257b47cad55b93c734123fd9817","url":"tw_stocks/2506.json"},{"revision":"4edac5b9bdad64e22aa9bb9d8b1fc094","url":"tw_stocks/2505.json"},{"revision":"73dc2a00ce3f5c89b20a9bd800173e7d","url":"tw_stocks/2504.json"},{"revision":"2f3b16f4817514078b0e6824942fcc28","url":"tw_stocks/2501.json"},{"revision":"42c6bb01dcd95ac745966436a8a608dd","url":"tw_stocks/2498.json"},{"revision":"d303ac0df35ada5c36ca54b6aff93510","url":"tw_stocks/2497.json"},{"revision":"3f0a0a73930ff54ccd9bb9712bf23112","url":"tw_stocks/2496.json"},{"revision":"5707b2bd15b68dd16de91f28fa60faef","url":"tw_stocks/2495.json"},{"revision":"d0ebf077975d4df9ad1d4416d2f0f37a","url":"tw_stocks/2493.json"},{"revision":"2f96daddc9ac1445faa6dba68251d45d","url":"tw_stocks/2492.json"},{"revision":"16a87cc6d6edf51e0e65c8edcc264910","url":"tw_stocks/2491.json"},{"revision":"772baa4dc425fa085b1569fbdc88baed","url":"tw_stocks/2489.json"},{"revision":"9de69547bd4c54fcd3d858636e1ceef1","url":"tw_stocks/2488.json"},{"revision":"fa278727cdde80573ecc0f7158efe106","url":"tw_stocks/2486.json"},{"revision":"da7af4e3fc70a3d73b790bac5a8f7435","url":"tw_stocks/2485.json"},{"revision":"dfd549337341c511feb4e5f07420239d","url":"tw_stocks/2484.json"},{"revision":"8253b2abf661864ef822b85c2fdb75a8","url":"tw_stocks/2483.json"},{"revision":"8cc7b3b8b4253646b8a1208f995e3f0a","url":"tw_stocks/2482.json"},{"revision":"ab2aee702750928e8e2c9d468d6a9104","url":"tw_stocks/2481.json"},{"revision":"fec5eb204b5875b41eb022bd101010dc","url":"tw_stocks/2480.json"},{"revision":"043194667ed58dcc40df96eb547f93c2","url":"tw_stocks/2478.json"},{"revision":"7d0e81f48cd49510231c31b358167dc8","url":"tw_stocks/2477.json"},{"revision":"8177863f87f89426d1cda2d3e38225b4","url":"tw_stocks/2476.json"},{"revision":"40c396230fe6e7c2e68a69e564600659","url":"tw_stocks/2474.json"},{"revision":"50cf5a99b4f55eb58ff8cecddf808960","url":"tw_stocks/2472.json"},{"revision":"6ab99c3eb42b344cf4457fafe7bed3b4","url":"tw_stocks/2471.json"},{"revision":"8d6702241e681ed8d1befae6ea3cc045","url":"tw_stocks/2468.json"},{"revision":"f14d1e8a5cc80eeade4f810b8e4a95ad","url":"tw_stocks/2467.json"},{"revision":"8fa67b0c23b7db5d58c0a2c624ac4f02","url":"tw_stocks/2466.json"},{"revision":"61c8ffa622ed831bcc9b68a0b13e70ec","url":"tw_stocks/2465.json"},{"revision":"123b8b37c22327983b02dee9faf807f1","url":"tw_stocks/2464.json"},{"revision":"b86419e6d33f2ed07272cd622cbd04bb","url":"tw_stocks/2462.json"},{"revision":"736a1dc106185f75119823f3cce06f29","url":"tw_stocks/2461.json"},{"revision":"02b7bdf56e44a77620357627a4a421b4","url":"tw_stocks/2460.json"},{"revision":"9a3bd0e12a30992aa4c0e4937900e9b2","url":"tw_stocks/2459.json"},{"revision":"5cefa8dc94aacc96e7c87b5ff65fc653","url":"tw_stocks/2458.json"},{"revision":"c06274d71202ef8402bfc5e67b516dba","url":"tw_stocks/2457.json"},{"revision":"edd8e9113ff2ee456e03c3aefa5920b2","url":"tw_stocks/2455.json"},{"revision":"5085d7ac2c4a2051f3b5ea433818fb1f","url":"tw_stocks/2454.json"},{"revision":"c8c6bbd20bc9bb2a8c6a7de1ea06bcb7","url":"tw_stocks/2453.json"},{"revision":"44348b2e63ef23c4fdf99d6b760c7957","url":"tw_stocks/2451.json"},{"revision":"54655ce55f14d1038ce1f3b2390801ed","url":"tw_stocks/2450.json"},{"revision":"bbf369fdf3ee7aad2fe1f978f4c7fefc","url":"tw_stocks/2449.json"},{"revision":"d5f0d52c801a3d899ef1fc5cfa6e4227","url":"tw_stocks/2444.json"},{"revision":"b7ecd68268fd7f5983ef77c0a5980953","url":"tw_stocks/2442.json"},{"revision":"82ae636da1d27abced03c96050386529","url":"tw_stocks/2441.json"},{"revision":"1f99f6b4e0c0e65632086a7204383053","url":"tw_stocks/2440.json"},{"revision":"7ba9fba31a419f4a19769e7933ec2aba","url":"tw_stocks/2439.json"},{"revision":"71e394231a47633feb981be093e7f782","url":"tw_stocks/2438.json"},{"revision":"235070c6d652c6c863e833f6f1a2057c","url":"tw_stocks/2436.json"},{"revision":"9ac9bf7e41ce0ced8980385404f5ae78","url":"tw_stocks/2434.json"},{"revision":"b45a2ba793b7beac51c9fcf382024d33","url":"tw_stocks/2433.json"},{"revision":"c96b54b5b157ad8a6eba040272e87042","url":"tw_stocks/2431.json"},{"revision":"e5692bc6256ac9caa165cd0b3d1c3c14","url":"tw_stocks/2430.json"},{"revision":"479fe85c61d4fc48a7206eaac94fdeb9","url":"tw_stocks/2429.json"},{"revision":"2bad295169ac40405183fd2d8c1ccbe5","url":"tw_stocks/2428.json"},{"revision":"dbb6d7c07fd93d55be4caf1e59e31a01","url":"tw_stocks/2427.json"},{"revision":"93512a14d5a1519873b81294154fa8be","url":"tw_stocks/2426.json"},{"revision":"33089ce97faba05752eb43df16d55e38","url":"tw_stocks/2425.json"},{"revision":"6f0f877081dda69e49e9a3724ccf5410","url":"tw_stocks/2424.json"},{"revision":"e0192ce7f4071496413bc9360599ba33","url":"tw_stocks/2423.json"},{"revision":"3dca9002cd85f75b4737711e51786f2b","url":"tw_stocks/2421.json"},{"revision":"0364105e5b8f566366c6a133492cc75b","url":"tw_stocks/2420.json"},{"revision":"e246e3cbdab2e23eca03e85773a09e85","url":"tw_stocks/2419.json"},{"revision":"c379a538f73a0c773a673a958e15bce7","url":"tw_stocks/2417.json"},{"revision":"316c7aaf2900c610478d837f0899fee8","url":"tw_stocks/2415.json"},{"revision":"12ab86a6943062ca02df8c4a9957ce4d","url":"tw_stocks/2414.json"},{"revision":"8c2d438b9dae41332d462af9ab4ceed4","url":"tw_stocks/2413.json"},{"revision":"4c4fdbab0e3fb48ab1d998f4f9b37e57","url":"tw_stocks/2412.json"},{"revision":"b6dd116d58f4406afd12ec9abdadc787","url":"tw_stocks/2409.json"},{"revision":"3734323e9d03b3873e6e4d128a2e8617","url":"tw_stocks/2408.json"},{"revision":"2ab05e3280f4fb51ccb0674532355fd9","url":"tw_stocks/2406.json"},{"revision":"e001c44688f220eb5a4892559927ddb8","url":"tw_stocks/2405.json"},{"revision":"9a6f46a281c546fc23deb30fdc3923e5","url":"tw_stocks/2404.json"},{"revision":"dca132f397c2032fa7fb0fe756f4cc19","url":"tw_stocks/2402.json"},{"revision":"f17d513fc1dd56d42a5e507d3f998a79","url":"tw_stocks/2401.json"},{"revision":"c4e7efabe3b284158abe3acc8c53e51e","url":"tw_stocks/2399.json"},{"revision":"bd473ee49cf44762da417388f0131104","url":"tw_stocks/2397.json"},{"revision":"76379077d62a0091fba124cfb157b452","url":"tw_stocks/2395.json"},{"revision":"deb77e6bdc02fd07db1842651a159d07","url":"tw_stocks/2393.json"},{"revision":"37e1c9416359fd19704000498de1a5cb","url":"tw_stocks/2392.json"},{"revision":"ac834fa319de112ad57b5de58a28c1e7","url":"tw_stocks/2390.json"},{"revision":"208494f5428de9d833d3fd607ee0ef31","url":"tw_stocks/2388.json"},{"revision":"7df2b5ad5646c76bf66fd6e59df9394c","url":"tw_stocks/2387.json"},{"revision":"78b62637655d757f95f8ead2ae025d8a","url":"tw_stocks/2385.json"},{"revision":"c03d5f7efc4ba3a3689b4fbaded12059","url":"tw_stocks/2383.json"},{"revision":"07593debd81efc31501c97630a185771","url":"tw_stocks/2382.json"},{"revision":"f81512d50b62b7f52e9ff68dcb5e9657","url":"tw_stocks/2380.json"},{"revision":"d6efbc044bf818265ffad37cc302dcfc","url":"tw_stocks/2379.json"},{"revision":"aafc193cb65f5c094b06695aa8b28947","url":"tw_stocks/2377.json"},{"revision":"03666d23abab10818e585771ca2fd066","url":"tw_stocks/2376.json"},{"revision":"09cc8bfb93f75eea197686ba720bf5fb","url":"tw_stocks/2375.json"},{"revision":"9d275aa405f8ec7cfb90666e9076f280","url":"tw_stocks/2374.json"},{"revision":"bc25132dfdb5ecaf4021a61bfb34cb97","url":"tw_stocks/2373.json"},{"revision":"bde4c05c4e361f2964e1ed900278f99c","url":"tw_stocks/2371.json"},{"revision":"a54b58907729a7969e38a2cba2db1963","url":"tw_stocks/2369.json"},{"revision":"1cfe0b9ba3e183ede4d012f71e072978","url":"tw_stocks/2368.json"},{"revision":"5f9f2d5d47d6b013161bd7c6be960c88","url":"tw_stocks/2367.json"},{"revision":"d7bfae72ebb97565afd2295bce713659","url":"tw_stocks/2365.json"},{"revision":"b2a436760f137f2a92cda75af18ee217","url":"tw_stocks/2364.json"},{"revision":"62518aa601248efa063891faf18f55e6","url":"tw_stocks/2363.json"},{"revision":"a3aa85f075b035d2e5340d6ebd88b0e0","url":"tw_stocks/2362.json"},{"revision":"73928c3e6895a916e8a61a28d167aebf","url":"tw_stocks/2360.json"},{"revision":"ec6f25ae4e85a372008d594e471a6ec6","url":"tw_stocks/2359.json"},{"revision":"9aeab23eb470146afaddd70d8cea27dd","url":"tw_stocks/2357.json"},{"revision":"58a4b107c1be53a466fbf9c374e8b129","url":"tw_stocks/2356.json"},{"revision":"97532881df558d209fba06922930b66b","url":"tw_stocks/2355.json"},{"revision":"fea2cd4d998a17eb905de0577b3553c0","url":"tw_stocks/2354.json"},{"revision":"8ae863a02cf1d6f7588b295bef37393b","url":"tw_stocks/2353.json"},{"revision":"3ecbbe9b813c5333f3655d7e87778098","url":"tw_stocks/2352.json"},{"revision":"57af82b09a7edd19bff60efbbdcd835d","url":"tw_stocks/2351.json"},{"revision":"3fba773ce04d6865a26e4f6fc82149c5","url":"tw_stocks/2349.json"},{"revision":"4703d9cf62a07232056acc5e38a84f51","url":"tw_stocks/2348.json"},{"revision":"4c9b1edbee3c40cf6be87bd7b622ab98","url":"tw_stocks/2347.json"},{"revision":"070d05ee978b7e379b9629d374451769","url":"tw_stocks/2345.json"},{"revision":"3e1eaf042317bc99338f5e2b8e2be5f3","url":"tw_stocks/2344.json"},{"revision":"21ec1b1f0f3b68fc666ddd3cfb0a616e","url":"tw_stocks/2342.json"},{"revision":"90e2999bde7dcef43e5cfccc73755128","url":"tw_stocks/2340.json"},{"revision":"5c3d120fb25b449d1be446945c8ea122","url":"tw_stocks/2338.json"},{"revision":"b222ccb57e6902b2a7703521de8d45e1","url":"tw_stocks/2337.json"},{"revision":"ee84b2da6e13aa8316cdfd2d933d505d","url":"tw_stocks/2332.json"},{"revision":"edb73e28faf99168e91da4b8c959403b","url":"tw_stocks/2331.json"},{"revision":"5763c43794696777cabd4a22a82c245b","url":"tw_stocks/2330.json"},{"revision":"c7410b04d06424e971dbf93b97c7f9cc","url":"tw_stocks/2329.json"},{"revision":"831816de9d232d405e14d48b83839af2","url":"tw_stocks/2328.json"},{"revision":"06de1c1037d899cc1f5de3425b93b666","url":"tw_stocks/2327.json"},{"revision":"4d8b35d84f93407f2929c6326d09e0ec","url":"tw_stocks/2324.json"},{"revision":"e5f5243a8b1fcb59feb0c94ee67b8fad","url":"tw_stocks/2323.json"},{"revision":"dbe00344349c273bd1f19132293f1842","url":"tw_stocks/2321.json"},{"revision":"c4964fb19874e2c514311f1942f08e9b","url":"tw_stocks/2317.json"},{"revision":"f4bd87d49d8928e7d46265165c80ab30","url":"tw_stocks/2316.json"},{"revision":"1cc7e98bc314525ac3048ee8b8a62ae5","url":"tw_stocks/2314.json"},{"revision":"107f16de66ba1792c10713f1dd3ee9f2","url":"tw_stocks/2313.json"},{"revision":"eedab62ab44d8da53cab26e69d290872","url":"tw_stocks/2312.json"},{"revision":"ad17586395897054fd24ecef828c15c6","url":"tw_stocks/2308.json"},{"revision":"ace1d879af2ae5bf9d13cb60bbd97c07","url":"tw_stocks/2305.json"},{"revision":"de2ebefdaf72e812d55d237059e455d8","url":"tw_stocks/2303.json"},{"revision":"0ff345ace79a9685697a067dfe739a50","url":"tw_stocks/2302.json"},{"revision":"05ef33c32a69dd7c5d4239e7bdaba4d1","url":"tw_stocks/2301.json"},{"revision":"63c0559a2e1c795b6bdf48e10bbe52ee","url":"tw_stocks/2250.json"},{"revision":"f8b83b0402a0ebcf2d7c94363c4c9936","url":"tw_stocks/2248.json"},{"revision":"d91cfd83af3b970c1e6f6dc1c7159594","url":"tw_stocks/2247.json"},{"revision":"8831de628701df116634c695a0f761f0","url":"tw_stocks/2243.json"},{"revision":"74392951ca29c13795847713a3d39e75","url":"tw_stocks/2241.json"},{"revision":"608141ceb54a2e6da11cd2d678893b51","url":"tw_stocks/2239.json"},{"revision":"57e93677cb9ae66e320b0a49305899f4","url":"tw_stocks/2236.json"},{"revision":"347e95b4210b9d30c4287bc45f383ff9","url":"tw_stocks/2233.json"},{"revision":"a556e39ecc2b5f32ae4fe5eea510f298","url":"tw_stocks/2231.json"},{"revision":"a2e972b042009638c5700a39947634df","url":"tw_stocks/2228.json"},{"revision":"869d068ffbe21a822d95f93090360528","url":"tw_stocks/2227.json"},{"revision":"8df721aafe30b293be148b0b0a08a163","url":"tw_stocks/2211.json"},{"revision":"2cb5efee30df82a73ae2b089b0efd25f","url":"tw_stocks/2208.json"},{"revision":"4b87e093d4d93e7991b6a0ac21378347","url":"tw_stocks/2207.json"},{"revision":"0b6aa993c5a740ab00a820ea9ccdbd65","url":"tw_stocks/2206.json"},{"revision":"07ea6c0d91b32a343f314efcbb651a89","url":"tw_stocks/2204.json"},{"revision":"fafb8a0167931d38316e2b8069097d7a","url":"tw_stocks/2201.json"},{"revision":"beffa23c0f5093b52f7751c7081ac66c","url":"tw_stocks/2115.json"},{"revision":"38732cdf9ab345160574275da9f15172","url":"tw_stocks/2114.json"},{"revision":"29ffd4062ecb9cbc73dafb3c4707fb14","url":"tw_stocks/2109.json"},{"revision":"026526404fdbbca83b54a0da42823008","url":"tw_stocks/2108.json"},{"revision":"0187aa1e003c7fc7b2ea4d4c96ce3017","url":"tw_stocks/2107.json"},{"revision":"9f60075c98c9512e741ab21c6b62d8b3","url":"tw_stocks/2106.json"},{"revision":"905cc5e918b338f29494e1c55d9d9840","url":"tw_stocks/2105.json"},{"revision":"e33b24bd35eb982b6852d4a9dadac5dc","url":"tw_stocks/2104.json"},{"revision":"f5865e962ad2f907c191ba79e3094715","url":"tw_stocks/2103.json"},{"revision":"4837281b0d395308cf2dfaed97d85ecf","url":"tw_stocks/2102.json"},{"revision":"3db0345913f5c6ef3e9c131eea8eaf05","url":"tw_stocks/2101.json"},{"revision":"8ebf5674ab82cf7dd90b6791c533de17","url":"tw_stocks/2072.json"},{"revision":"d6833caa41ff31be9d0c85ff1d1935df","url":"tw_stocks/2069.json"},{"revision":"5f35fc626207e97ef890c26ea547b90a","url":"tw_stocks/2062.json"},{"revision":"d044338c0056042e4b7f10c23be542e5","url":"tw_stocks/2059.json"},{"revision":"8caf3b331136ab3ff2ca09eb8b24a6a2","url":"tw_stocks/2049.json"},{"revision":"33cd873ddbf2f90edffaf1e20431caad","url":"tw_stocks/2038.json"},{"revision":"ed6c95bb274d29065ac68be965921248","url":"tw_stocks/2034.json"},{"revision":"6ea63d9d9fdfd403b24afa8d3e00c8f5","url":"tw_stocks/2033.json"},{"revision":"d77690e8a51c5f4068d208d217108a28","url":"tw_stocks/2032.json"},{"revision":"169335c5bd3e2c9ae1d1ad9ac310ced2","url":"tw_stocks/2031.json"},{"revision":"25404e397336c33f23c23e52f4164db2","url":"tw_stocks/2030.json"},{"revision":"755ee92435683807bae8667fc033fe7b","url":"tw_stocks/2029.json"},{"revision":"2498d4fda44e951d58dc68c29495a679","url":"tw_stocks/2028.json"},{"revision":"b1cd2ca942c94cef3e89e6eedad9f40f","url":"tw_stocks/2027.json"},{"revision":"94cc1c8b7b076d242169b0cf13c7c707","url":"tw_stocks/2025.json"},{"revision":"41aee63d92ff2109740de47f254b33ee","url":"tw_stocks/2024.json"},{"revision":"64cf70d70b501647991c327a7daefa69","url":"tw_stocks/2023.json"},{"revision":"7634612f2b7a853866b146c9ddd8690b","url":"tw_stocks/2022.json"},{"revision":"58371a3f16836da9ec0def114ee12aae","url":"tw_stocks/2020.json"},{"revision":"1986f14d278545b9bc885797775d5bb5","url":"tw_stocks/2017.json"},{"revision":"36c3ba7a9ffb89ffe8fcc43170bad9c4","url":"tw_stocks/2015.json"},{"revision":"4d0029e74e1308e22c566f0d2b5e1c4c","url":"tw_stocks/2014.json"},{"revision":"a87a25a54942f870d4eaece29ebfd28d","url":"tw_stocks/2013.json"},{"revision":"cd6b0f8590fcd7c249fda6b7190905cd","url":"tw_stocks/2012.json"},{"revision":"aa8b04809aef57c6b2dc5a89f06584eb","url":"tw_stocks/2010.json"},{"revision":"4c9b9b5b92514887e38782986032dd9d","url":"tw_stocks/2009.json"},{"revision":"1eabc17091ca6be063e4a3b6fd966e65","url":"tw_stocks/2008.json"},{"revision":"87080554cfd52305ae2da8ad8b23ea19","url":"tw_stocks/2007.json"},{"revision":"a6c6a07511d925ef555b69bcafec0dc2","url":"tw_stocks/2006.json"},{"revision":"db8d367b4ff88521997c9b0c012d5c04","url":"tw_stocks/2002.json"},{"revision":"642c8a6d5f1a2e347de7c85e93014196","url":"tw_stocks/1909.json"},{"revision":"fc4c77969d3ace9844913fa80fe6e2bc","url":"tw_stocks/1907.json"},{"revision":"242de6cee5e123ce4f1fe44a1f6acd58","url":"tw_stocks/1906.json"},{"revision":"1afc28e1eef6b2cccf5715673c791f71","url":"tw_stocks/1905.json"},{"revision":"d1dcc86d8215b6145c684d8c15aa1883","url":"tw_stocks/1904.json"},{"revision":"3a251a497268dacea40955d4d58aa994","url":"tw_stocks/1903.json"},{"revision":"e767b22c59151b53b54fac26c08ff838","url":"tw_stocks/1817.json"},{"revision":"bafb41a9f0fa93e98d7820f4e7ad9da3","url":"tw_stocks/1810.json"},{"revision":"073db44268ddbe4ea01000b0deed9fbf","url":"tw_stocks/1809.json"},{"revision":"a054c8f2490fc1ec5603512fdc711781","url":"tw_stocks/1808.json"},{"revision":"fac8bbfbb583117c225ea17d45c70683","url":"tw_stocks/1806.json"},{"revision":"ed6e484cb663814345e2168885cdbb67","url":"tw_stocks/1805.json"},{"revision":"7c8f5bbabfbd6c87feeb5d3ad5745c44","url":"tw_stocks/1802.json"},{"revision":"efa80e8ccb80c9e3fc4211ff10e13226","url":"tw_stocks/1795.json"},{"revision":"933144788c024b68d808166fabb64436","url":"tw_stocks/1789.json"},{"revision":"04ef4bc1a91efcebf77b534a560d3b96","url":"tw_stocks/1786.json"},{"revision":"9fd5926b9f6c07222c746e99c4da5e39","url":"tw_stocks/1783.json"},{"revision":"6eaa94edc50fc724ca79a9c1f29b8400","url":"tw_stocks/1776.json"},{"revision":"1da9fa5528740d1e3870d1bf5d5dd09b","url":"tw_stocks/1773.json"},{"revision":"54afacc9ea7714ea74b948d4508fd3c3","url":"tw_stocks/1762.json"},{"revision":"40f0ef825c31aaaa6eb52e43d8d9918c","url":"tw_stocks/1760.json"},{"revision":"004a8ae4700caaab06901f011c6766f0","url":"tw_stocks/1752.json"},{"revision":"c8b5d85b37ac148c1cf81cb7ab9dbe21","url":"tw_stocks/1737.json"},{"revision":"f7bcd4b4dc7852406c7287dfe9e7428e","url":"tw_stocks/1736.json"},{"revision":"93fe7ac39ecc01ed0bda152752a1529c","url":"tw_stocks/1735.json"},{"revision":"16acef6fd7b79a0a080e9b5edf7d95e8","url":"tw_stocks/1734.json"},{"revision":"5147a8bab734b18329246b5ae173fc9f","url":"tw_stocks/1733.json"},{"revision":"56391d8fd956a6cc1adb9143086b3328","url":"tw_stocks/1732.json"},{"revision":"c4191e87bbc425c95374dbc3e23e7dfc","url":"tw_stocks/1731.json"},{"revision":"3e5a5ff5106b6ccd677fee4a45430c48","url":"tw_stocks/1730.json"},{"revision":"830fca05c132c6666454d0dfc63de719","url":"tw_stocks/1727.json"},{"revision":"91400e219938bb0ce0d0b5096a96b434","url":"tw_stocks/1726.json"},{"revision":"7102aee55ce9905c33b8ddc76c8628ac","url":"tw_stocks/1725.json"},{"revision":"1db1da50268a96a3e1bc03e36e18af39","url":"tw_stocks/1723.json"},{"revision":"300796d3b2114c5a4f155c4c841fd3f1","url":"tw_stocks/1722.json"},{"revision":"9716af67b90a4609a1d3fe9941a4c04e","url":"tw_stocks/1721.json"},{"revision":"5df7e8e0c7e15e0a469b3554c2e8ea91","url":"tw_stocks/1720.json"},{"revision":"bf438ef9e77b6fc0172b3b4e88023bce","url":"tw_stocks/1718.json"},{"revision":"71cbbac6401852e9f93e7647a64e3bc1","url":"tw_stocks/1717.json"},{"revision":"0f448bc87b3f38d30be3bef93cb0cde5","url":"tw_stocks/1714.json"},{"revision":"57c906a31a80105ca8c5b404f07e9673","url":"tw_stocks/1713.json"},{"revision":"6fd59fd6a361eadaeceacd3dbb764d65","url":"tw_stocks/1712.json"},{"revision":"9baa3150cd39141c0fc363f8e585b996","url":"tw_stocks/1711.json"},{"revision":"1768744b62418d8eac7977e4ffcaff10","url":"tw_stocks/1710.json"},{"revision":"d702606d32e677d08c4ad454b055169f","url":"tw_stocks/1709.json"},{"revision":"229b248e696be4df1952fd3d372d7cfc","url":"tw_stocks/1708.json"},{"revision":"10e9a4d593799556a9be5e159a653f30","url":"tw_stocks/1707.json"},{"revision":"177e405a2174faabc201ebfd9c3511db","url":"tw_stocks/1702.json"},{"revision":"cb90bad8fa0ed076ba038fd6ea5a7dbb","url":"tw_stocks/1626.json"},{"revision":"b85c7e4c684cd7565fb2c073ba11ed44","url":"tw_stocks/1623.json"},{"revision":"143db054ecb7ade19fd043bffaefb64e","url":"tw_stocks/1618.json"},{"revision":"d9c14c909bc9a4428b6d82fe08657c65","url":"tw_stocks/1617.json"},{"revision":"389880507b378ca70e4b56b233a1a6fa","url":"tw_stocks/1616.json"},{"revision":"1fcfe3f2ea80a47dfcd6f8c90f84985a","url":"tw_stocks/1615.json"},{"revision":"a3511d564be8926fc9b15a63a5547d3e","url":"tw_stocks/1614.json"},{"revision":"2114908e46668fc2134cf386dd7834fd","url":"tw_stocks/1612.json"},{"revision":"4a31c0db1a6289c429cc818419fbce02","url":"tw_stocks/1611.json"},{"revision":"c92e5ec2627cb00d729256820e577330","url":"tw_stocks/1609.json"},{"revision":"ccc254702fa120d7c48bb2388a410a1f","url":"tw_stocks/1608.json"},{"revision":"33526b55ddc6217855c7febee13c01c4","url":"tw_stocks/1605.json"},{"revision":"694d2b94e46cdd7269012174c4122ab4","url":"tw_stocks/1604.json"},{"revision":"0301570aae573d80cc587b1d3cec1eb4","url":"tw_stocks/1603.json"},{"revision":"958712208e2449afcf73389330fda4f2","url":"tw_stocks/1598.json"},{"revision":"8dba74f21a22e5853da693042ebd87e4","url":"tw_stocks/1597.json"},{"revision":"fb757c19030565b4aaf77824722274da","url":"tw_stocks/1590.json"},{"revision":"d5ee058d793b1d589de7b56361a32479","url":"tw_stocks/1589.json"},{"revision":"1d985fa9b12f9c8c7fd1feedda453f86","url":"tw_stocks/1587.json"},{"revision":"8e95a4b9f806ad95d33b3b4fc53915a6","url":"tw_stocks/1583.json"},{"revision":"08448a418039985591729a7db5691234","url":"tw_stocks/1582.json"},{"revision":"e423a6ccf3421ab8e26d0ab2295ffd28","url":"tw_stocks/1568.json"},{"revision":"81ed75485dca3bae136bd97e4d1f4120","url":"tw_stocks/1563.json"},{"revision":"e27bbec4ae036104a6a77fa6d02fc1c2","url":"tw_stocks/1560.json"},{"revision":"8c6bbab8e3a489015980a9aff7aa3c5a","url":"tw_stocks/1558.json"},{"revision":"049cb3bc87fbcd38929349fc2a8075f1","url":"tw_stocks/1541.json"},{"revision":"8377345974d0bbb971704efd6390d33e","url":"tw_stocks/1540.json"},{"revision":"c936881041fb2997c76d89023558d170","url":"tw_stocks/1539.json"},{"revision":"a5c214b55a3d8c02de374e0dc4481227","url":"tw_stocks/1538.json"},{"revision":"dbea36ef4e313ebc847641bad1a944d6","url":"tw_stocks/1537.json"},{"revision":"32a5e5c633f3e1e03fc8511d93ad5953","url":"tw_stocks/1536.json"},{"revision":"b18b97906508800a6f55725c33139688","url":"tw_stocks/1535.json"},{"revision":"6c07f5feae58c9b26c19d5e9ee51ac71","url":"tw_stocks/1533.json"},{"revision":"40ea33598afa05bf3d5b518d73ed71f6","url":"tw_stocks/1532.json"},{"revision":"29c995fc0f131d763e475ea053fee188","url":"tw_stocks/1531.json"},{"revision":"5aa0ff33d1cd1b2d0a99b9e8bf39ca3c","url":"tw_stocks/1530.json"},{"revision":"6ced2f7ecb86f79b47f846c27c63ec1d","url":"tw_stocks/1529.json"},{"revision":"3dbd6ee3237eebb9ad31a5654e0ce51d","url":"tw_stocks/1528.json"},{"revision":"e9af67a251835695509eecce49969df8","url":"tw_stocks/1527.json"},{"revision":"5a83b73a4fa0d81e1ee0327bc2e83f91","url":"tw_stocks/1526.json"},{"revision":"fff3d92b766c56586b1cd4b57c5cea44","url":"tw_stocks/1525.json"},{"revision":"f9d4a3cd60512c2552d2d3997014230a","url":"tw_stocks/1524.json"},{"revision":"2d4a2e9aa447bb982ae0ea648be9c229","url":"tw_stocks/1522.json"},{"revision":"dcbc5dda9d081273873d12a43299a3ae","url":"tw_stocks/1521.json"},{"revision":"d61d7b1453b6ee389b7ff14d6959ecb7","url":"tw_stocks/1519.json"},{"revision":"b524eac0eaf33a364b4af81344d843cb","url":"tw_stocks/1517.json"},{"revision":"17b2b0dd6d3b755bb3d8050699ccdb88","url":"tw_stocks/1516.json"},{"revision":"b3dec7051c7218b0dd768259bf9dd095","url":"tw_stocks/1515.json"},{"revision":"84a4df7f9ff0d4d85dc180d95176e98b","url":"tw_stocks/1514.json"},{"revision":"f8ba1e1a7014e7f82bc55478ee05c246","url":"tw_stocks/1513.json"},{"revision":"813bd456d6dd081ba5dc91673dc16a47","url":"tw_stocks/1512.json"},{"revision":"a8810f9a5e3411e426cf5b5b200eac6e","url":"tw_stocks/1506.json"},{"revision":"0208d790dcb856997686cdb8bd105223","url":"tw_stocks/1504.json"},{"revision":"0fb9dd2eb92bbd46c0993d70b6c4a051","url":"tw_stocks/1503.json"},{"revision":"3c57e337e7ee8778a67e85561737709b","url":"tw_stocks/1477.json"},{"revision":"349c9c49ba779d81913e73324fad4088","url":"tw_stocks/1476.json"},{"revision":"76fc61ada72ca688c7210b07637095ec","url":"tw_stocks/1475.json"},{"revision":"5dec7bfc3b2261180a07624b39f40217","url":"tw_stocks/1474.json"},{"revision":"4849cee024380db0660819e2d45b5221","url":"tw_stocks/1473.json"},{"revision":"49017260908ded4577c7d6824f568d95","url":"tw_stocks/1472.json"},{"revision":"e239b060a7039bd7c9aec217b048369e","url":"tw_stocks/1471.json"},{"revision":"923d8b4f05e6fdb4b761b88c2790d47e","url":"tw_stocks/1470.json"},{"revision":"2eed78885fc001100e4ddb53dc70e135","url":"tw_stocks/1468.json"},{"revision":"d4ffdfde7ee2b93c04ce6e324e1a69b3","url":"tw_stocks/1467.json"},{"revision":"e5cc69b7f7189579d15d47f94f2a6e2f","url":"tw_stocks/1466.json"},{"revision":"f9026afd78bf78c1fa7575abeae0ce99","url":"tw_stocks/1465.json"},{"revision":"2d5d81895515beb6f44d5870d744f7d1","url":"tw_stocks/1464.json"},{"revision":"d27cc6f0ba9d8d2edc11c59547cb6fd2","url":"tw_stocks/1463.json"},{"revision":"061a46df2b23753420013f190e39a244","url":"tw_stocks/1460.json"},{"revision":"2a034d0097aa8cbf9e106a1c000c154d","url":"tw_stocks/1459.json"},{"revision":"80c514ece60962f167504c50302d5155","url":"tw_stocks/1457.json"},{"revision":"fd0568f6ec578adb03574204dc5d09be","url":"tw_stocks/1456.json"},{"revision":"deb86f46c42bc01f8fc5ad73873477b1","url":"tw_stocks/1455.json"},{"revision":"080a0b56931d9cac21166eadc2eabd35","url":"tw_stocks/1454.json"},{"revision":"3e6f89cd7ef0370045844197a82b3dff","url":"tw_stocks/1453.json"},{"revision":"4aeeee866169444c979de9b53cffada4","url":"tw_stocks/1452.json"},{"revision":"ab434b5d5b6b527b103f1959de4d4bae","url":"tw_stocks/1451.json"},{"revision":"a8e37f982d96af310d8bfac704c1ef28","url":"tw_stocks/1449.json"},{"revision":"50b5209b4ae262f306af404b85b3c3b0","url":"tw_stocks/1447.json"},{"revision":"a98cb06f0d51395a7b044bc08d36bf56","url":"tw_stocks/1446.json"},{"revision":"f2298c13dfbebe47b922473497b057d2","url":"tw_stocks/1445.json"},{"revision":"b6444f80400f5a51916ca7b29d1d7f57","url":"tw_stocks/1444.json"},{"revision":"aa534361806dc41ff31bfd70a895c70b","url":"tw_stocks/1443.json"},{"revision":"1892df5702a1e55d1d051642fc75c37a","url":"tw_stocks/1442.json"},{"revision":"76d964713ce65553f68f0012f3287ec4","url":"tw_stocks/1441.json"},{"revision":"cd56c45976c384ddf54578ac73b86b49","url":"tw_stocks/1440.json"},{"revision":"5675561f4b56fb596ca0bc24f8883b69","url":"tw_stocks/1439.json"},{"revision":"a55550a88ec40580e756173aed6d892d","url":"tw_stocks/1438.json"},{"revision":"fb1d13ab050c671c10bfb66b993cc4f9","url":"tw_stocks/1437.json"},{"revision":"1fe48c93061a96190859359408dfdc23","url":"tw_stocks/1436.json"},{"revision":"8b83e1d973b2396eec7b49ffc0496b07","url":"tw_stocks/1435.json"},{"revision":"709f7dc1209b8e5c1faa5b365ac9ceb9","url":"tw_stocks/1434.json"},{"revision":"a9625b08cc7d14b4e1efa7880a66d072","url":"tw_stocks/1432.json"},{"revision":"cddc48082249b92c03deef822b16d9ec","url":"tw_stocks/1423.json"},{"revision":"154e60d2148e349c85af71367bcb5115","url":"tw_stocks/1419.json"},{"revision":"7d82a3f036008ecc7e2514f9397b6f6a","url":"tw_stocks/1418.json"},{"revision":"079ca320f86348b4f735fdca32743e5b","url":"tw_stocks/1417.json"},{"revision":"64b3ce20496316fa2363a7e464a65020","url":"tw_stocks/1416.json"},{"revision":"efa4e67ab30c84cb662c63c31771eec2","url":"tw_stocks/1414.json"},{"revision":"5435bfd3fb8302687ce038f33b59cee9","url":"tw_stocks/1413.json"},{"revision":"053bba35c1f3ea6fa8bbbd854ae61d17","url":"tw_stocks/1410.json"},{"revision":"a99bde3f800a27fbf56c9d9ba9ba8223","url":"tw_stocks/1409.json"},{"revision":"5d86a9d6e12d587d9d412471806f0aef","url":"tw_stocks/1402.json"},{"revision":"0dfde106a4ad1c99ccfbbc7dc803c239","url":"tw_stocks/1342.json"},{"revision":"8094e556ab7df53b0e0ce0f82b53bc8d","url":"tw_stocks/1341.json"},{"revision":"1689e179af56aaa6de04850e7d5250c8","url":"tw_stocks/1340.json"},{"revision":"0591fa99051fbffe2239c6997d249604","url":"tw_stocks/1339.json"},{"revision":"5bdee2eeb3e93923703a5bf9c6c6e6be","url":"tw_stocks/1338.json"},{"revision":"6e9f20b96358919d90e0fb345adbe5a5","url":"tw_stocks/1337.json"},{"revision":"8b2b1a97cc4484c1c3d3c0dadef0c24e","url":"tw_stocks/1326.json"},{"revision":"1a58ebd257249662511af007e7fe0e5a","url":"tw_stocks/1325.json"},{"revision":"d3d5d0b3c0fea0204e18b8c00bf479c5","url":"tw_stocks/1324.json"},{"revision":"444f70790c1efdc29b072967af115e8f","url":"tw_stocks/1323.json"},{"revision":"142b9370a012bb093c826293cb114d4d","url":"tw_stocks/1321.json"},{"revision":"a264f9e0610d0ddc8ff5977765bbbef1","url":"tw_stocks/1319.json"},{"revision":"e0d810f1a9c7935e08d2473ce51b4f6b","url":"tw_stocks/1316.json"},{"revision":"c35e968d18d264d72c55f483c7109617","url":"tw_stocks/1315.json"},{"revision":"e124d02e89a9276c6ab4fad494c36a10","url":"tw_stocks/1314.json"},{"revision":"a2ee9b8b207bcf47fc12014222ab8282","url":"tw_stocks/1313.json"},{"revision":"6fd04f3e98835f2d7a3771ced8143528","url":"tw_stocks/1312.json"},{"revision":"b564078093327835f544983f1a449d2a","url":"tw_stocks/1310.json"},{"revision":"31ca09d62757bcea2fa54a6da6e2cfbd","url":"tw_stocks/1309.json"},{"revision":"1a14f2ee429f712ba1c22bb27a5f6f8c","url":"tw_stocks/1308.json"},{"revision":"5b9bc5915a8ada8f43af64c2a0599345","url":"tw_stocks/1307.json"},{"revision":"1ea8522b5d0df9ddd2d72bb39fc8ba6f","url":"tw_stocks/1305.json"},{"revision":"cf7209788915784cf98a9417f8b6bc68","url":"tw_stocks/1304.json"},{"revision":"a461cf292c2db9b98353b14ce95db6ab","url":"tw_stocks/1303.json"},{"revision":"84147b6c9c338e9f3118c7008f66d2b7","url":"tw_stocks/1301.json"},{"revision":"e6649988f389fa56cf5b994360f9802a","url":"tw_stocks/1256.json"},{"revision":"f04855d6554b69f6e67e8f1f8130738f","url":"tw_stocks/1236.json"},{"revision":"a50cbd6be7ccfb428aaa82c5ac8681e1","url":"tw_stocks/1235.json"},{"revision":"729f257de93af7acdd080b973c528233","url":"tw_stocks/1234.json"},{"revision":"b94224ac2a80d6d5d5ab782a87a71599","url":"tw_stocks/1233.json"},{"revision":"d382c0892162d5985b9f598bd3110b43","url":"tw_stocks/1232.json"},{"revision":"e2a74006ad69ec217ac2827a00156199","url":"tw_stocks/1231.json"},{"revision":"3d6ebe540ed927e9542b1905b862f3e3","url":"tw_stocks/1229.json"},{"revision":"fa5efcc04a604afdb91dee533d3fe8d9","url":"tw_stocks/1227.json"},{"revision":"9f5bc6831b0d7b7c7ac13a43fc7e9998","url":"tw_stocks/1225.json"},{"revision":"4238df4558f828a1e9abd4321184cae7","url":"tw_stocks/1220.json"},{"revision":"b78e0e05014969bfca89f7c5840c5329","url":"tw_stocks/1219.json"},{"revision":"fa2554f0c3d9741d608c6bf2990e41bf","url":"tw_stocks/1218.json"},{"revision":"ee49ab7050f67dd928bbc181bc1a3582","url":"tw_stocks/1217.json"},{"revision":"6086ab34c175dab535159bf34364c50b","url":"tw_stocks/1216.json"},{"revision":"db3659a46171ef938c4a7ed956fc7e56","url":"tw_stocks/1215.json"},{"revision":"8d5651db49d0a99e1f6b8b476253d913","url":"tw_stocks/1213.json"},{"revision":"1f5dcf5cf80430db4bb9d48140f46c15","url":"tw_stocks/1210.json"},{"revision":"7054ee0cb606a1b44bc8671a47d02cb8","url":"tw_stocks/1203.json"},{"revision":"1545e107618f4112538d9991f87a7b5e","url":"tw_stocks/1201.json"},{"revision":"36d3c8070b1a203ea5e6b89ed70cec34","url":"tw_stocks/1110.json"},{"revision":"1777e94c253b3744aed4dad78f5a00d2","url":"tw_stocks/1109.json"},{"revision":"983b76538943de8336c023e6a90cfb8e","url":"tw_stocks/1108.json"},{"revision":"89b9511031818f2579e5806e0fdf19cf","url":"tw_stocks/1104.json"},{"revision":"549a1e702e1950c3de053a3c10897315","url":"tw_stocks/1103.json"},{"revision":"bc4428cde35059325bbe7a3ed437c976","url":"tw_stocks/1102.json"},{"revision":"a77fc66d2480713614b74ca7a1784d44","url":"tw_stocks/1101.json"},{"revision":"1c84eaf210087a6986c70b9f5020a112","url":"tw_stocks/00999A.json"},{"revision":"de3c3f782b7203d35de95e8bef85c4e8","url":"tw_stocks/00997A.json"},{"revision":"c6ebee31afa4c7aa9ba6d13a6351f707","url":"tw_stocks/00996A.json"},{"revision":"ad79ea1ce4f5d8e239fff991fac58c56","url":"tw_stocks/00995A.json"},{"revision":"b75c8fe02da47e8992ae0807f4d40210","url":"tw_stocks/00994A.json"},{"revision":"046ed99c3f9752b524a806324ca59b3d","url":"tw_stocks/00993A.json"},{"revision":"47730e4d19f759d3fa9acff87f42e5e2","url":"tw_stocks/00992A.json"},{"revision":"4af79dcde1e829ee3a0c04bb35f890c0","url":"tw_stocks/00991A.json"},{"revision":"2400d27251716dd7a9d5a1fbf0d5f99a","url":"tw_stocks/00990A.json"},{"revision":"af3819c0860625ec444005e318f1339b","url":"tw_stocks/00989A.json"},{"revision":"d6cacdda40de386c0f71ff7c3350355b","url":"tw_stocks/00988A.json"},{"revision":"b1630b46f489677f14b798113de698ba","url":"tw_stocks/00987A.json"},{"revision":"9015cf2e13829eeb7631e56b022f49d5","url":"tw_stocks/00986A.json"},{"revision":"7e8426175836e7270d4b68da245c6667","url":"tw_stocks/00985B.json"},{"revision":"6cc4cd4393601c8dbf3ae24a2927d99a","url":"tw_stocks/00985A.json"},{"revision":"bd5f163f1a0131b456d3c9281f560deb","url":"tw_stocks/00984D.json"},{"revision":"a101575a04d632009f15c51f09327e98","url":"tw_stocks/00984A.json"},{"revision":"08dabf157239a6be32737852932a5693","url":"tw_stocks/00983D.json"},{"revision":"c892afea112ae6f41796fe13c9d62972","url":"tw_stocks/00983A.json"},{"revision":"0496d818fc327cb612833feadf0db2b8","url":"tw_stocks/00982T.json"},{"revision":"47487caedf449be6dba806e8d5b4cd3c","url":"tw_stocks/00982D.json"},{"revision":"d43f6b46e94518868f8665e276858064","url":"tw_stocks/00982A.json"},{"revision":"4f937dfd37dd134b759c124babd3d495","url":"tw_stocks/009824.json"},{"revision":"15d15f8ad4b018fc959636dac4a41b25","url":"tw_stocks/009821.json"},{"revision":"53f20994869a4d42f4a42715a9348aea","url":"tw_stocks/009820.json"},{"revision":"ab92fd3c79a63aeeec39c1db427edfbb","url":"tw_stocks/00981T.json"},{"revision":"f7ca675e583711063b3435d4b8de661d","url":"tw_stocks/00981A.json"},{"revision":"13639d23bc225dcfc36c026d7b40acef","url":"tw_stocks/009819.json"},{"revision":"165b893590181ae2b4b227c762d5de97","url":"tw_stocks/009818.json"},{"revision":"4b73f3b251e42d41e04666de997e693d","url":"tw_stocks/009817.json"},{"revision":"6b76c3023ef3bcb30cd2bf6abe55980e","url":"tw_stocks/009816.json"},{"revision":"d90602c8acd2d8057c0974416345a2f4","url":"tw_stocks/009813.json"},{"revision":"3543db31cd73dfaefacc043d8fb14afe","url":"tw_stocks/009812.json"},{"revision":"37dd82cd1f6ac634f970ae84a620b8be","url":"tw_stocks/009811.json"},{"revision":"6ddf39d8a7c4acec974921172b2389a8","url":"tw_stocks/009810.json"},{"revision":"6b449e19a61d17c608cd9387bbd97dd5","url":"tw_stocks/00980A.json"},{"revision":"ea34308c99d18b6913333ec09cd5aa0f","url":"tw_stocks/009809.json"},{"revision":"e4a1d60dc05e93bb47fd88297062cb99","url":"tw_stocks/009808.json"},{"revision":"024439643b639c01f3d042cacdc7af9e","url":"tw_stocks/009805.json"},{"revision":"adf81a76dc6f90937419bce3ad89bf50","url":"tw_stocks/009804.json"},{"revision":"7d9fce628067dfc592506eba90cabdeb","url":"tw_stocks/009803.json"},{"revision":"af2e11479273d8a6945989fc20e22276","url":"tw_stocks/009802.json"},{"revision":"d86c71b4fd9376a599444c6fb1c0224b","url":"tw_stocks/009801.json"},{"revision":"2f68a228a6d7e7c4a9b79953a700782c","url":"tw_stocks/009800.json"},{"revision":"04a1be9e827c7bad5782cf4469a6689f","url":"tw_stocks/00972.json"},{"revision":"be86645d1baa11deb2a08cb1460b53f9","url":"tw_stocks/00971.json"},{"revision":"7ce0e234b3fec8ab21d6c6d7eaa17622","url":"tw_stocks/00965.json"},{"revision":"caf69f16082d5cf6b5fd7e7e1d050c2b","url":"tw_stocks/00964.json"},{"revision":"a0708235355190f37f07015b38be4d19","url":"tw_stocks/00963.json"},{"revision":"4926f268d040c892e87cccf1fbe7c544","url":"tw_stocks/00962.json"},{"revision":"8fa42878125c14e0262fdddc196a8cc6","url":"tw_stocks/00961.json"},{"revision":"a2ba769862159ada26e03b34b3ce6662","url":"tw_stocks/00960.json"},{"revision":"2f44cb5d77267eeeb146aff0d1f548a4","url":"tw_stocks/00956.json"},{"revision":"c89219634e16043a98793058adecc183","url":"tw_stocks/00954.json"},{"revision":"a4415afbd573a16c454668dcff71a7df","url":"tw_stocks/00953B.json"},{"revision":"e5b90d09ad418eb09150a331cae9cb1f","url":"tw_stocks/00952.json"},{"revision":"15480492c53295d78a77c9c2ce69b72f","url":"tw_stocks/00951.json"},{"revision":"10ecffa53029527c008d5dddadd066e0","url":"tw_stocks/00949.json"},{"revision":"df34927da065008a97825558d35548e4","url":"tw_stocks/00947.json"},{"revision":"df5b30b07284ad7f167ab7fc2dc8bf54","url":"tw_stocks/00946.json"},{"revision":"55f009f89fa2e7c7a44636fe55e2ed52","url":"tw_stocks/00945B.json"},{"revision":"93c10e78ac16963f89357934476a8459","url":"tw_stocks/00944.json"},{"revision":"6c32b571e62759c493dab6b6e3f31972","url":"tw_stocks/00943.json"},{"revision":"8091c41cc5c8d843a6af60e21cb1b711","url":"tw_stocks/00941.json"},{"revision":"c48c8188ef0a2b096e60b8f15550bc1e","url":"tw_stocks/00940.json"},{"revision":"92b0be4817e4ee47be987fcb3f68a07e","url":"tw_stocks/00939.json"},{"revision":"e5e58682bded6b5fa58a95940f5d6fda","url":"tw_stocks/00938.json"},{"revision":"79f713a37a5fc258a9d407a9e5d70d7a","url":"tw_stocks/00936.json"},{"revision":"5b0d318d2099b9a3aeecea6add7cde3c","url":"tw_stocks/00935.json"},{"revision":"5f5a68ab59e528fb2ca4d1caed6af11f","url":"tw_stocks/00934.json"},{"revision":"612edb13de3fae4599d84efd33019a73","url":"tw_stocks/00932.json"},{"revision":"213a257913220f6f5aec7082bc53f4e3","url":"tw_stocks/00930.json"},{"revision":"af7595d77a87a516cc0872e5d87adab7","url":"tw_stocks/00929.json"},{"revision":"d8de6a6670b0bc21cac49f311b573a61","url":"tw_stocks/00927.json"},{"revision":"cfed89be589dde28ce92f8af9e8a95f2","url":"tw_stocks/00926.json"},{"revision":"2013ae9b56ddca32eaae9bfcff5dce60","url":"tw_stocks/00924.json"},{"revision":"cadcc91173ef366b65e7e8ea110fd2a3","url":"tw_stocks/00923.json"},{"revision":"2a88d68c15c70f1d73bd83d1406bdfe0","url":"tw_stocks/00922.json"},{"revision":"7120deac54bcdf9c6bdae1e4cf7924a1","url":"tw_stocks/00921.json"},{"revision":"f3ab4c797c6dde2db94172866a0c3928","url":"tw_stocks/00920.json"},{"revision":"deb60670b26e4df7036b1f0f69f3e256","url":"tw_stocks/00919.json"},{"revision":"0083f62a454e5d2b370d47dbb0b61858","url":"tw_stocks/00918.json"},{"revision":"5c2ce48957209c3178cd1a805040093d","url":"tw_stocks/00917.json"},{"revision":"8fb44b0615f84bcadbc628a91a7e1140","url":"tw_stocks/00916.json"},{"revision":"2d944ac4a716816ff2a887ba9eb46e7d","url":"tw_stocks/00915.json"},{"revision":"a350a45ec251693a53b7f8781b152d2e","url":"tw_stocks/00913.json"},{"revision":"fe10f7eb0b074aa18592be25f8d00ab4","url":"tw_stocks/00912.json"},{"revision":"b9ac6a54670581efbf265b2f09823f33","url":"tw_stocks/00911.json"},{"revision":"d5ce82e52ad0d81089f140d2ec14d63b","url":"tw_stocks/00910.json"},{"revision":"9856e00a218158784a9e30751bb5e2dd","url":"tw_stocks/00909.json"},{"revision":"fe99df178f78203a0197a9b657257a72","url":"tw_stocks/00908.json"},{"revision":"5021cdbdce4c30b6b472b76126bd5363","url":"tw_stocks/00907.json"},{"revision":"1e386cb944498df0f34708b6bcf19d14","url":"tw_stocks/00905.json"},{"revision":"6c63d36ebd2a1161543d1c6f9300640d","url":"tw_stocks/00904.json"},{"revision":"46e877fe0956ead92b78b72aa4afd64e","url":"tw_stocks/00903.json"},{"revision":"20e47b522c80d106094d11fa190a27eb","url":"tw_stocks/00902.json"},{"revision":"85a949e0ba9ac1c720607244e5fa00be","url":"tw_stocks/00901.json"},{"revision":"f51bf01fc04654deecb2d85ceba5ccf7","url":"tw_stocks/00900.json"},{"revision":"f6ff84faaa41e50d173fcc1613a1fe47","url":"tw_stocks/00899.json"},{"revision":"15ab501c5ff073c51ce8d7bcdba76e35","url":"tw_stocks/00898.json"},{"revision":"5b995300b05debe4dfac68b97421cd64","url":"tw_stocks/00897.json"},{"revision":"d668bf2103fa04a6ee27e78fa0b5fea3","url":"tw_stocks/00896.json"},{"revision":"85faddb95d6cf33c85b2a4eeccb1398b","url":"tw_stocks/00895.json"},{"revision":"4c8f937d7daa20ba6c4602ec92bc9896","url":"tw_stocks/00894.json"},{"revision":"79d6f459fabb262e26d4da392c298003","url":"tw_stocks/00893.json"},{"revision":"9f05973d8c1a1c46814d7c1bd02d5511","url":"tw_stocks/00892.json"},{"revision":"4ded27be279844692a621143abb196d9","url":"tw_stocks/00891.json"},{"revision":"d7592cd9a911f1838ab2013655e3a629","url":"tw_stocks/00885.json"},{"revision":"1d1cac58f34b6825af01c644a1f0818d","url":"tw_stocks/00882.json"},{"revision":"2dd7d93b2b43c60341a379a9b15d6ea4","url":"tw_stocks/00881.json"},{"revision":"e4d22b300b46722c49e2119244106d59","url":"tw_stocks/00878.json"},{"revision":"d3a2b92160f0278e23779c9aabca8c3f","url":"tw_stocks/00876.json"},{"revision":"8881ab2b94f4bebf029b4b1031c2c1c0","url":"tw_stocks/00875.json"},{"revision":"4e84b58d2e288a80e5f233b3a3de7dc2","url":"tw_stocks/00865B.json"},{"revision":"199cc97b590410a35f662e3fe9534057","url":"tw_stocks/00861.json"},{"revision":"cc683df065f2b7c84db1fe96583d444c","url":"tw_stocks/00852L.json"},{"revision":"775bcef5dd28b85f7eedd7f06843ebf6","url":"tw_stocks/00851.json"},{"revision":"db2746c9514ee2cbabe3fd1d43fdcdbe","url":"tw_stocks/00850.json"},{"revision":"ba09d937d295c5c8b1519bfbb22a4a85","url":"tw_stocks/00830.json"},{"revision":"16d08892b9c668500ab2bf7b7c99146b","url":"tw_stocks/00783.json"},{"revision":"590b6b1d8e5f73da9a554bba72334de2","url":"tw_stocks/00775B.json"},{"revision":"e10ae67c1f83b3f413debcff5ec21481","url":"tw_stocks/00771.json"},{"revision":"72ad8558fbdd2dcca55abea87ec449a5","url":"tw_stocks/00770.json"},{"revision":"acef58158661c404614ddc7a0d9b3365","url":"tw_stocks/00763U.json"},{"revision":"ce44f5d795c75c9e2e1da3e9765bbd31","url":"tw_stocks/00762.json"},{"revision":"4123ee78e1ee7142d88af1e32c6b9bcb","url":"tw_stocks/00757.json"},{"revision":"84fa6ecd70cfb2f5e943584b0f1b60d6","url":"tw_stocks/00753L.json"},{"revision":"15eba628b696ac50ce94a39c05157f8f","url":"tw_stocks/00752.json"},{"revision":"0c38a87b9b6724d8f0c8060a8472c8e0","url":"tw_stocks/00739.json"},{"revision":"b59c780273df13969cdbe077820b4f61","url":"tw_stocks/00738U.json"},{"revision":"6f5284844ba00e104c657e0548284bbe","url":"tw_stocks/00737.json"},{"revision":"abc6dff4e87d8c2dfcea35fcede6f218","url":"tw_stocks/00736.json"},{"revision":"90edf7a0d0cf89316173d5135d3a57a6","url":"tw_stocks/00735.json"},{"revision":"fe79301f2e2eef55cf1331c802a557da","url":"tw_stocks/00733.json"},{"revision":"8ba7266c4f2c8781473ace7dd04f9d3a","url":"tw_stocks/00731.json"},{"revision":"3926acaf806c1caa9fb81a7a02e4d791","url":"tw_stocks/00730.json"},{"revision":"12fa27e8e7a0f1324563da84fd52fcae","url":"tw_stocks/00728.json"},{"revision":"4ddac9192e3e609beb334ffd6a19ea4c","url":"tw_stocks/00717.json"},{"revision":"a42856485a13f95f6a4138c0c95d50af","url":"tw_stocks/00715L.json"},{"revision":"c2b14c2751ab1b3b00f2e7c180b577cc","url":"tw_stocks/00714.json"},{"revision":"ece2c586c714d8379f6db2c67f8db8ea","url":"tw_stocks/00713.json"},{"revision":"be487a6d74414572f5e2bed74b83292a","url":"tw_stocks/00712.json"},{"revision":"88ba8e351d8b6d76368a376885b34e85","url":"tw_stocks/00711B.json"},{"revision":"ca04c32185801369e07a21f18eccf94e","url":"tw_stocks/00710B.json"},{"revision":"379a3af236695ca886b6606ddfed04d9","url":"tw_stocks/00709.json"},{"revision":"68d106d3feed46b5df1e24f644c2713e","url":"tw_stocks/00708L.json"},{"revision":"01450837d5a870daf7d9bdd9a879f661","url":"tw_stocks/00707R.json"},{"revision":"d162852e0ca3f9f1cd5087587da1cf92","url":"tw_stocks/00706L.json"},{"revision":"6f38642b0ef12270675ba85c2c074d5c","url":"tw_stocks/00703.json"},{"revision":"a0174ea8ae234848b369eacedd8c81ea","url":"tw_stocks/00702.json"},{"revision":"b4f40eeb94a36a546c01f46cd04408be","url":"tw_stocks/00701.json"},{"revision":"2fad7b02bb63aaac453c13f35cb73914","url":"tw_stocks/00700.json"},{"revision":"7f70b00b0bccaf4969d95cf583bd3637","url":"tw_stocks/00693U.json"},{"revision":"259b3415ccbf4305bc2094ed5501d2f9","url":"tw_stocks/00692.json"},{"revision":"52b34342b1901626b531dd4f91ba719e","url":"tw_stocks/00690.json"},{"revision":"a06cba502c0b431165d638d2c0e96ee5","url":"tw_stocks/00689R.json"},{"revision":"d3b57b21baf50395f823feb5a57a39dd","url":"tw_stocks/00688L.json"},{"revision":"2cbba36dbaf17eb180a1117460e752fb","url":"tw_stocks/00686R.json"},{"revision":"03fdeb71b99da3a2e254651ad67abc70","url":"tw_stocks/00685L.json"},{"revision":"1b8616623d631f03caa4c96963b47000","url":"tw_stocks/00684R.json"},{"revision":"04d1dc6570d4046df587fe97f05741a8","url":"tw_stocks/00683L.json"},{"revision":"d2261f3218feff8278d1a1e3466e3306","url":"tw_stocks/00682U.json"},{"revision":"3e3d14b5bf3b0af0f4c18cd0e5cdf47d","url":"tw_stocks/00681R.json"},{"revision":"a58e3c6257a04e6b81acacaf0ae54d58","url":"tw_stocks/00680L.json"},{"revision":"594f063ec99516188ea68251e7f868f8","url":"tw_stocks/00678.json"},{"revision":"740fb6a58dd9f95e83c44e45e88c379c","url":"tw_stocks/00676R.json"},{"revision":"35a7f05314103901241ba4d3ea86a021","url":"tw_stocks/00675L.json"},{"revision":"82659c372698ee9076415dd4adfc2921","url":"tw_stocks/00674R.json"},{"revision":"ee982da18c6e3308df646abda1075fd9","url":"tw_stocks/00673R.json"},{"revision":"4fd7f0aa5161ce30aa35d18e06aa1fa0","url":"tw_stocks/00671R.json"},{"revision":"4657cef3a4443eb406b5001f0d101f5e","url":"tw_stocks/00670L.json"},{"revision":"4d4c62f92a34338c56fe50f123ce7b71","url":"tw_stocks/00669R.json"},{"revision":"e0625f06992801f17611dc3a5b32325e","url":"tw_stocks/00668K.json"},{"revision":"ffd8223a779b9561f9b3d5f3fac79d72","url":"tw_stocks/00668.json"},{"revision":"114354c2f13836b7cd4a1b66ad7c0d9f","url":"tw_stocks/00666R.json"},{"revision":"35c351d51ed1565d9109d08e7346ebe5","url":"tw_stocks/00665L.json"},{"revision":"a42a32d6f1e42443763abfae5a8431ca","url":"tw_stocks/00664R.json"},{"revision":"b0e5d500845ce2c1e95d2c8cf37f1e04","url":"tw_stocks/00663L.json"},{"revision":"e330c188ce038b9e921ae91b312c98f6","url":"tw_stocks/00662.json"},{"revision":"2dde9ba66c2bcf8ff6ef9411b6e97f24","url":"tw_stocks/00661.json"},{"revision":"00d46e48eccb40693144d84e27ebad58","url":"tw_stocks/00660.json"},{"revision":"74e72ea9b9dde2f52890eaffadd40f84","url":"tw_stocks/00657K.json"},{"revision":"56ed1bad1515b940990cc51ac0ca590c","url":"tw_stocks/00657.json"},{"revision":"43bb83448a83587c6916908c6ef4584b","url":"tw_stocks/00656R.json"},{"revision":"69db2fad931a2739dded3ddbad59c729","url":"tw_stocks/00655L.json"},{"revision":"50f69d87258c1df8c764693b38b6691e","url":"tw_stocks/00654R.json"},{"revision":"2604602b3deea905f2e53cd31b2b1c81","url":"tw_stocks/00653L.json"},{"revision":"ec8f055ac768d79e365717671588aaa7","url":"tw_stocks/00652.json"},{"revision":"19faac352562c64aa216e7668837935e","url":"tw_stocks/00651R.json"},{"revision":"8a91909bf1b32e5f656a93388b9bc9e8","url":"tw_stocks/00650L.json"},{"revision":"db9800b82503672656f98845ec79966c","url":"tw_stocks/00648R.json"},{"revision":"eb31e851415875c2d7771b524ca3e17c","url":"tw_stocks/00647L.json"},{"revision":"5fd05ae17bbda40e5ade54c91e236be4","url":"tw_stocks/00646.json"},{"revision":"750a29c28bfdcb916ce31a73f87a2631","url":"tw_stocks/00645.json"},{"revision":"481365398121302a072af710bd9c72e0","url":"tw_stocks/00643K.json"},{"revision":"7527ecfb5bedac36c207a3f853b7e92a","url":"tw_stocks/00643.json"},{"revision":"1269ba73cae283c435de473608c12af0","url":"tw_stocks/00642U.json"},{"revision":"2bb1e947afbc0ca01af47bfb0cabd932","url":"tw_stocks/00641R.json"},{"revision":"fe54ae7a988d40851a22cc82ea966f7f","url":"tw_stocks/00640L.json"},{"revision":"68caa18e3bc5b59e9fea66e98d52227e","url":"tw_stocks/00639.json"},{"revision":"cf6f099d754f56ef592837989546e028","url":"tw_stocks/00638R.json"},{"revision":"b6eefc4cf15f96ccbb19a26b46da1f84","url":"tw_stocks/00637L.json"},{"revision":"b2c47ee9bbd2c933fcbdb59d5817889a","url":"tw_stocks/00636K.json"},{"revision":"85ab1c959036c8943ceece0537b34b45","url":"tw_stocks/00636.json"},{"revision":"37f85f5a5b4d2a0a9463c0ca03870a93","url":"tw_stocks/00635U.json"},{"revision":"804c05e4b73a3ffce400efdb8d021a5a","url":"tw_stocks/00634R.json"},{"revision":"31d38d50a38a32efb91a70144ab91823","url":"tw_stocks/00633L.json"},{"revision":"11b61991c566e755cbf24eb92818a354","url":"tw_stocks/00632R.json"},{"revision":"e141e899ea33cc3bf7e21ec687a8d422","url":"tw_stocks/00631L.json"},{"revision":"4f238752f12363f4e11f2481822679e7","url":"tw_stocks/00625K.json"},{"revision":"927901e6921df2810a7f401295f56daa","url":"tw_stocks/006208.json"},{"revision":"fa86a32400343a9621efa31f69a0fb86","url":"tw_stocks/006207.json"},{"revision":"ec0f2e2e8a1a8dbb9ff68e4114da6329","url":"tw_stocks/006206.json"},{"revision":"143bf9206ccdaf6baf45cc0d558b27b3","url":"tw_stocks/006205.json"},{"revision":"c478152479ed47f1d2b82f54f4260f99","url":"tw_stocks/006204.json"},{"revision":"f2b2e660f443d807386adc9410c59b88","url":"tw_stocks/006203.json"},{"revision":"318650686f5073d83305216dfbb580a4","url":"tw_stocks/0061.json"},{"revision":"2ed7918e10de0aec31b1e24aaf34d62c","url":"tw_stocks/0057.json"},{"revision":"57bd51e8f8f38113c0916d0f47a0e38a","url":"tw_stocks/0056.json"},{"revision":"5aaad8b1437cf3a520716e5ee49f4399","url":"tw_stocks/0055.json"},{"revision":"218e7de0a022a19d4daf4cb240116068","url":"tw_stocks/0053.json"},{"revision":"7cadfc27976c16d6b43540b803ee38bc","url":"tw_stocks/0052.json"},{"revision":"52b3ede0539d141fc5840bf09acc6c7e","url":"tw_stocks/0051.json"},{"revision":"542ca90369f4eabe32f6a0e2988f502e","url":"tw_stocks/0050.json"},{"revision":"fefe89caf7bb179703f9f864e2c9b281","url":"tw_stocks/00407A.json"},{"revision":"00fc6fcccd3f99c49b939dcc700d9f08","url":"tw_stocks/00406A.json"},{"revision":"dd41c7b557257000458480998338a8e4","url":"tw_stocks/00405A.json"},{"revision":"f47e1e5a77491221795573c671b24ee5","url":"tw_stocks/00404A.json"},{"revision":"bed60b9632ffcf9344bf57e6207dd399","url":"tw_stocks/00403A.json"},{"revision":"95e64acaf4d882987c6c6d352c5494a1","url":"tw_stocks/00402A.json"},{"revision":"d92aaed37f3d361f870574e11bbd1d07","url":"tw_stocks/00401A.json"},{"revision":"531f0eca192fadc2f2f8a2bc46993636","url":"tw_stocks/00400A.json"},{"revision":"557359a69b3e1f2df931e2d3406d263f","url":"subscription/callback.html"},{"revision":"46d3415cb06514954624428e7a536be7","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"5f86f5b74d8dd8d07b9727c84ed823bc","url":"financial/rebalance.html"},{"revision":"cc930880c83a26ffab790afc0097550f","url":"financial/cashflow.html"},{"revision":"ea1ae87667714e2712ad48b2b0cc25b2","url":"financial/balance-sheet.html"},{"revision":"099938d1fadba8565237b0fe50a21c34","url":"finance/tags.html"},{"revision":"558c021a245990a8fc8f470326b3aa76","url":"finance/finance-section-created.html"},{"revision":"7f48d2f7fd022f3e31d735d8a9d28c3f","url":"finance/authors.html"},{"revision":"b4b2f91880910cae8fe612ecb88f7eac","url":"finance/archive.html"},{"revision":"aae0a73bf933709b94bbdcf233801b20","url":"finance/tags/finance.html"},{"revision":"a8199dd4b84290a2288effd2de34029f","url":"finance/tags/announcement.html"},{"revision":"cdf2ab0cdb78bc16691d62706e8b623e","url":"docs/tags.html"},{"revision":"bbd45ef9fc71bff03d066e7550909bb5","url":"docs/intro.html"},{"revision":"b65c6e2bc9a51a09d4482085e88b812e","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"57995ca3531c9f5aab5b96ed5f66c873","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"d5cd32dca60382d5ecee48ae0915eb7d","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"816d86b092f65ec969e5938b184cde41","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"8907d654658bbf99c93537f951d1fe8c","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"9bc824364466d084b99828850dde1f6d","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"5546b459a4a2722da7353d3faff5d272","url":"docs/tags/黑箱協議.html"},{"revision":"da5ee56057ea4fcdf8650e4fae80e069","url":"docs/tags/養成.html"},{"revision":"99dc9f97f8930337804a9c3c4b5eb976","url":"docs/tags/資料安全.html"},{"revision":"d2bf5d788fd52c7654e1e37601717677","url":"docs/tags/經濟循環.html"},{"revision":"1faf34d92388b70f00eeda13341a90ca","url":"docs/tags/百科.html"},{"revision":"2321d285c075ac8b57d80ed82718ee5e","url":"docs/tags/模型控制.html"},{"revision":"52bf2ba70358675be11329114109c751","url":"docs/tags/數據標準.html"},{"revision":"67db3b0fc84f8743260bd03bd3aade73","url":"docs/tags/接入規範.html"},{"revision":"688b7b168fe92edf29f89863af333577","url":"docs/tags/指南.html"},{"revision":"5dfc2001b55fee490d6ec0cac91e5b0c","url":"docs/tags/技術哲學.html"},{"revision":"7ad23c8de569f3727406bbfb3ef34859","url":"docs/tags/技術史.html"},{"revision":"e458cbdf78736ab63fd543417cf98112","url":"docs/tags/戰鬥系統.html"},{"revision":"5b3c3c703bf7e262efb8ec31c98aeaeb","url":"docs/tags/專案管理.html"},{"revision":"fb009e8a8caeae3b7a2ec08972a96c99","url":"docs/tags/安全架構.html"},{"revision":"502710ff0c0144f0969b455554bfc195","url":"docs/tags/安全協定.html"},{"revision":"bef8aff5513b47e80a2a0b191a3ffcca","url":"docs/tags/外部開發者.html"},{"revision":"596a13998bd8cdde3d633418a09a47b6","url":"docs/tags/商店.html"},{"revision":"957fee03a2d83d731d25997a0cebd653","url":"docs/tags/去中心化標準.html"},{"revision":"88067f031865254b0665760e9338e86f","url":"docs/tags/去中心化安全.html"},{"revision":"1fe2c20fa8f48a08471c518ef1692097","url":"docs/tags/去中心化.html"},{"revision":"a9cbdcd555c7c3a9579dc6d02f842050","url":"docs/tags/top-p.html"},{"revision":"cff89631c60e0351009e16786d142bc6","url":"docs/tags/tokenizer.html"},{"revision":"d38d23b5fa938c7432d72118bbd20b96","url":"docs/tags/temperature.html"},{"revision":"8cfc1b3e97f69dbd971ed71d56c51df4","url":"docs/tags/technical-docs.html"},{"revision":"5c52609c60a0fa3eb8e1cca35402b178","url":"docs/tags/nlp.html"},{"revision":"2a06ca4ec726b61cfabe20b67ef6ba6b","url":"docs/tags/llm.html"},{"revision":"c1ba55f89e2160b2d43167204f03e95b","url":"docs/tags/git-hub-copilot.html"},{"revision":"6a78f9329fc82d8be6adc1e0b5159624","url":"docs/tags/generative-ai.html"},{"revision":"c2ecdd90f9b3e6550587df8cef6f855d","url":"docs/tags/eip.html"},{"revision":"bb5266ec1538d063fe0f33234776c24f","url":"docs/tags/development-tools.html"},{"revision":"1b3d7a401cf1ab1a65291193f9985f1f","url":"docs/tags/cli.html"},{"revision":"b64c7c29751a38f1319770bbbd71e6a3","url":"docs/tags/claude-code.html"},{"revision":"f7f121cdc6902e562883bbd912268572","url":"docs/tags/bpe.html"},{"revision":"c52dfd07c76730389765194fa1f7460c","url":"docs/tags/automation.html"},{"revision":"2820d9cae1534a756f6bdb9ab1c9a68c","url":"docs/tags/ai.html"},{"revision":"896bece9307dc28f0ca1e92de3ea516c","url":"docs/tags/agent.html"},{"revision":"63abe54e2cac3bb78fb3f1a6275ba543","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"dc26130e5b762efe6257c49e6979072f","url":"docs/skill/gemini-skills.html"},{"revision":"358604cd2e199c232435fd66a8da519b","url":"docs/skill/container-builder-skill.html"},{"revision":"78cf9dd4a6b8ed597b7ea286cd542b52","url":"docs/skill/claude-code-skills.html"},{"revision":"a67ae6259b218ae3b427668abfb51f3f","url":"docs/python-workshop/python-init-file.html"},{"revision":"841e78cc6d1a57ec25beb5cb064c54fa","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"2d8145ffcb6be62cc9e553f5f281c2cd","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"10996ee4f55077abdc0205ddce5560c8","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"d7ab4340f781f096218e200dbc37a75d","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"58f9dbb7ce16b7a438bc22cc5908d275","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"a5ce7c4898decce3e482c821766068d6","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"7c12b31e053750235d50e0768fd249d8","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"47a545d332e156dcfc9800a1c03382e2","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"3f51f1c34a4617628956f8ed42b5edbe","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"b631ed8ab84dd482d177825f5ff8ff36","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"0e545a6ba2fc8c6e770372a04d8f53fe","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"911b0f7b2a2b079e3743a1674e45521f","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"106e323c0557f27ecf917abb57feb0fd","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"2359f84b585b46b48df014d139fcef99","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"ae61aff5e5e3eafd34b91548afebd6c3","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"c9a8b30981afd0ea4bcd07874c587b39","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"db2bec784e9d702f86e5015f509bf82e","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"a76132a2bb95a7e6d077b80c591d4ee7","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"c0e91fedb34e99545b5f15392eb583c7","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"e854191b73048a2fb14d13877b0a58fd","url":"docs/claude-code-series/skills.html"},{"revision":"aa6938da48fe3b0a613f860829d4dc5a","url":"docs/claude-code-series/monitoring.html"},{"revision":"ee3086d383e48254f6169e414a32750c","url":"docs/claude-code-series/getting-started.html"},{"revision":"3603a63e06963edc9c9d871a7a0627ac","url":"docs/category/遊戲規則與手冊.html"},{"revision":"dcc94e862c9d02f0172d300b27c843cf","url":"docs/category/發文-skill.html"},{"revision":"3085acbdb95cc81ad4dcaab7c30cf27c","url":"docs/category/戰情室元件-skill.html"},{"revision":"6d5161a33f607b4953e101a8061fc171","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"772d44ac4f587e504570960a077549bf","url":"docs/category/skill.html"},{"revision":"56cb5163ddb25d1d0292b9ac2f5ac9aa","url":"docs/category/python-workshop.html"},{"revision":"f766ec991d01371097ca5242fc0c6413","url":"docs/category/egg-pet-philosophy.html"},{"revision":"83d73e0c0c67c94a4add83cee7fb7c8f","url":"docs/category/claude-code.html"},{"revision":"fdc7f7cea658c050a4dfec1eb2775558","url":"docs/blog-skill/news-rules.html"},{"revision":"0befcb7724575b27b14c24c3ba5088cd","url":"docs/blog-skill/history-rules.html"},{"revision":"b651be1880423e9aa357b36fa1ff6699","url":"docs/blog-skill/finance-rules.html"},{"revision":"e4483b3faf989a50553c7ea5466ef867","url":"auth/callback.html"},{"revision":"a0475cdcd555797c08637634cfc7512a","url":"assets/js/runtime~main.ccbfdc93.js"},{"revision":"57b611f2e38c39ee53c3fb46fc9497ef","url":"assets/js/main.81d6d629.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"a0d3090bc80fd0c8b6fe53dfa6237b77","url":"assets/js/ec1e3285.b5b8e629.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"184b78988f932b1af3d291646cacd98b","url":"assets/js/e88c4a9c.2a54753d.js"},{"revision":"76cced0e219307e3649833ce88b9e393","url":"assets/js/e86a5a75.4fae2c22.js"},{"revision":"9dd8af35326b2184f01813c77d1fc618","url":"assets/js/e7f07728.278f80c6.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"0be811857ec94e9260b37d44dc33f53a","url":"assets/js/dfea6eb9.370cdd5e.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"f8c6ce0d430a754df78811a374b40bd5","url":"assets/js/dd5b562f.9d06397e.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"3a2c8253729c8dbe6749362040187a43","url":"assets/js/d1fa896a.378e473a.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"5ea8f3cbf5c501cb0cb2e79f916cb882","url":"assets/js/cc221b30.dfaf7c19.js"},{"revision":"71a3c9808d7f5f5d8888ff37178237f0","url":"assets/js/c9add68e.e195a8b0.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"d6594b241fbf407fdb21285b27c83925","url":"assets/js/b95eaafa.bd514a92.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"b37300a76cf0c37b8ed75f41ca4b16ef","url":"assets/js/b283ca86.435f6d0e.js"},{"revision":"7ca4085c6ea0f36f3c0f14f0cb41b9a8","url":"assets/js/b2814407.44be18c5.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"c2438f772b86293c116a3940fe4e0ceb","url":"assets/js/ac590df8.f7e3f855.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"ee2701116a005cd5e6d4aa597e0bcfe1","url":"assets/js/a71ba949.53848d6f.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"11148ae37d8b17ed458aff02a727edd2","url":"assets/js/a6038fd8.66d966f4.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"de43a06a238e27d3c1076ae3ff95b8bc","url":"assets/js/9adafc71.d08a977c.js"},{"revision":"da6812da2819afc716c8baf7fed6ad95","url":"assets/js/99d3b34a.dc061679.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"fbb86ee153e5a3b39958efdb6d1c7993","url":"assets/js/98831978.522f188e.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"046026a5a9174ceb7b145f687ba7c2bd","url":"assets/js/923ed0b3.44733746.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"cd1c711a274c7a2a053311b3c3633111","url":"assets/js/8c20996d.fd838dd9.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"c10b02146c880598df517a6d4cd73ea2","url":"assets/js/853ca2df.891ca7b3.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"fb34cb4c7dd1618cb31541ac0fa66e6c","url":"assets/js/7fbc1a25.bf2a54ba.js"},{"revision":"a91a19c5044547b327b38d098ba8943c","url":"assets/js/7de88436.17efe652.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"bf8682f2c5b4df023811610a59d2bfc0","url":"assets/js/7ce5d7a1.e8dc88e3.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"e22dd3da86a8707263e90fb41a83a161","url":"assets/js/607acb04.52969f19.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"e98ece7039e618ea1232fcc56188c8b8","url":"assets/js/5a762f2f.dd144dc0.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"6107423b9aab27120ac4f060bc2d1760","url":"assets/js/56fce896.306c8d65.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"9c0a6049a5b686081029eb08361edb0f","url":"assets/js/54513d10.c15874fd.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"1fe3fa1c7e1f7a6ae151702239a8729f","url":"assets/js/4810d89a.7badb7ba.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"02c68f0352a77511dcf2344f648bee73","url":"assets/js/43ea09b6.95edc566.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"4cdbc8e434b1cf4907ccd9d2c53ba058","url":"assets/js/41937f2e.40cb30c3.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"1634f7a7d90ce28fc5511683b502b7f4","url":"assets/js/3ee3fb84.a309371e.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"d8463330928116328467f9eca3601fc2","url":"assets/js/36f337b1.e05ccc6c.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"6a56d613953c9c2dbc52dbfe382df945","url":"assets/js/304a23a0.b52da7a6.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"2119480a4fd0ab7e58d80e64b65f49b3","url":"assets/js/2dd9eb9e.6dce0e47.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"90b93f7b97813bb0228843b88fe3d29d","url":"assets/js/23d26d3d.70840467.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"5698f48fb0d393140aa16812ef9f9004","url":"assets/js/179b82d4.1de471a8.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"9097af1c8283885416d912874941481b","url":"assets/js/177ac620.1e60a2f6.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"267e346dbbfce7fae854d9575732a656","url":"assets/js/162c7fa0.e72d9e71.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"df406ceaa2daa1f2c032bd800f896d84","url":"assets/js/148a248b.12c1c752.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"0b7f243653f90c7161714016bb686232","url":"assets/js/0e384e19.0a78d626.js"},{"revision":"15b1ca515f852ddf77ee99948a28dc5d","url":"assets/js/0a3b6be8.1a03263c.js"},{"revision":"cef46eb9bf73f3cb10e4f4b345b61320","url":"assets/js/0962a2ae.6b710e0b.js"},{"revision":"992c354ba7e0a560045c4a1680f77172","url":"assets/js/0786d169.ab46b261.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"cb6db829e23b2eea588608a5a1228ce5","url":"assets/js/02366042.0e7c4bc2.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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