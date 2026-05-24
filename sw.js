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
    const precacheManifest = [{"revision":"41f529d3de6f46fc43cbe38d8872d135","url":"tw_stocks.json"},{"revision":"1008dd97cc824d3ed0516b2dc148c836","url":"subscription.html"},{"revision":"1e08314186c941548987ec19e5b30dca","url":"quotes.html"},{"revision":"ce44adf86447f1045a5a40dd9b46222b","url":"me.html"},{"revision":"186194007a1f3c58bfbb4cfcefca8a27","url":"market-war-room.html"},{"revision":"7bc64f4db84483e830f4e264ebbd260b","url":"markdown-page.html"},{"revision":"8eeb79f0ea19aa107d65b0ce3782ea84","url":"manifest.json"},{"revision":"5053e0047622fd642e5d50e341ce8a7a","url":"index.html"},{"revision":"f08e4a295afb12c782dd252eea96f40b","url":"games.html"},{"revision":"1a80eaf483671a53ca6997f53bdf7062","url":"finance.html"},{"revision":"4c39c32eb830da3ee1e1ece886fae7dd","url":"feedback.html"},{"revision":"028ddb41882c6284fe43cae167312b3f","url":"arena.html"},{"revision":"14eb0f180ba26f07b1f0846f342c1c06","url":"404.html"},{"revision":"9491f55cabc60f75b67c2fca0253d47a","url":"tw_stocks/9958.json"},{"revision":"e8a23e396b59cbd8cc069a6b90ed190b","url":"tw_stocks/9955.json"},{"revision":"31478575a342f63a44f1e9ef1ae7cd1b","url":"tw_stocks/9946.json"},{"revision":"2eacbb41c6e8467d0451e55c4fba6ee9","url":"tw_stocks/9945.json"},{"revision":"390d1177904fff1ee0f607717f261880","url":"tw_stocks/9944.json"},{"revision":"6577c0271a6764d4388f25390bd65739","url":"tw_stocks/9943.json"},{"revision":"99863bde94dc2617dcdd0622a80eba08","url":"tw_stocks/9942.json"},{"revision":"47cf48dcc3572adc1f55745c8348cde4","url":"tw_stocks/9941.json"},{"revision":"e05aefe1e4067168ea18cb5ec265eb53","url":"tw_stocks/9940.json"},{"revision":"e3534777b441bbe5bf573f40db8c7d60","url":"tw_stocks/9939.json"},{"revision":"15ee4fbf1c99cd4cbe695f7274f11170","url":"tw_stocks/9938.json"},{"revision":"da0059a87018616b075a60df6980b8ee","url":"tw_stocks/9937.json"},{"revision":"4f08ba0c901b605b977066ba000cd7bf","url":"tw_stocks/9935.json"},{"revision":"0d88f0a18aadabe57a1ffd9ceb429a7a","url":"tw_stocks/9934.json"},{"revision":"8567044df6f81963bcbb368d704b4c28","url":"tw_stocks/9933.json"},{"revision":"50c38d29700199e48d908dbea80fb76e","url":"tw_stocks/9931.json"},{"revision":"dd0a9dcaa39fe15b6f737305fdfff305","url":"tw_stocks/9930.json"},{"revision":"3389c721ab7c9bcd39d4ff647cc6c193","url":"tw_stocks/9929.json"},{"revision":"a29d91cbb9cf08e16f5437220ebeda4d","url":"tw_stocks/9928.json"},{"revision":"d88e161f3f3681218c426b8b7980418f","url":"tw_stocks/9927.json"},{"revision":"13e180f89e0d0fcdaaaa98b6105e07b4","url":"tw_stocks/9926.json"},{"revision":"f601090c11615459bf780592b79c8b51","url":"tw_stocks/9925.json"},{"revision":"f80f9f0ac85a298b06e421699eccac5c","url":"tw_stocks/9924.json"},{"revision":"56d6c1ed624faeb643a48cf0206e6875","url":"tw_stocks/9921.json"},{"revision":"52cfee38bc0e507e2fe01ec709b14909","url":"tw_stocks/9919.json"},{"revision":"743d08100a68a4a4dfc2f73ad403c8db","url":"tw_stocks/9918.json"},{"revision":"1c471e121231a87990599f74b052a0f5","url":"tw_stocks/9917.json"},{"revision":"06b55ee4682081c3be8f5d7047fdad39","url":"tw_stocks/9914.json"},{"revision":"ed46050112f451710abfda646e2c26a9","url":"tw_stocks/9912.json"},{"revision":"711e2ed52d860c7959ab0e0fc5a5566b","url":"tw_stocks/9911.json"},{"revision":"e9eddc3f6580504e30301f421b219222","url":"tw_stocks/9910.json"},{"revision":"3208dbb7c8051c163e4e2c115150b948","url":"tw_stocks/9908.json"},{"revision":"cc62886d04536ebb73d004f5e3362256","url":"tw_stocks/9907.json"},{"revision":"c737fc5e3c936d26fbfdee577bc0d258","url":"tw_stocks/9906.json"},{"revision":"5592236617e0f2efbbc77253ccba9cc8","url":"tw_stocks/9905.json"},{"revision":"2a83d1c5ae4c6a40099ab5c8ab966ad4","url":"tw_stocks/9904.json"},{"revision":"b946fea1905faf52fd2581828e2297b3","url":"tw_stocks/9902.json"},{"revision":"542049e4c49c6127f3e8fcdf1a905778","url":"tw_stocks/9802.json"},{"revision":"6b430bb7c8f76caaba0b3c97a8d7554b","url":"tw_stocks/8996.json"},{"revision":"f2fbf9ba1cdcf368615755ada9364367","url":"tw_stocks/8940.json"},{"revision":"f649b94623150696fb828f9f15521d15","url":"tw_stocks/8926.json"},{"revision":"5e6208cd10069d0d6a35d45c6cc46546","url":"tw_stocks/8499.json"},{"revision":"f0c1a0dbce099cf422a74bf3fcefa608","url":"tw_stocks/8488.json"},{"revision":"aa53fcc10b1c3299721f27fb90afbc7b","url":"tw_stocks/8482.json"},{"revision":"64bc8a1892566042048765d15b98c3b8","url":"tw_stocks/8481.json"},{"revision":"fb32fe2e66fb5f25b2a361c03ea91374","url":"tw_stocks/8478.json"},{"revision":"0b7ed3aa3abc00c2f8903ffefde64082","url":"tw_stocks/8476.json"},{"revision":"a580dd336ae1869e9282c423f74a1d46","url":"tw_stocks/8473.json"},{"revision":"f46bcf63197341f366519b6890c54f3d","url":"tw_stocks/8467.json"},{"revision":"7a4831d92d9623f3c193a3cfd78ddfbe","url":"tw_stocks/8466.json"},{"revision":"211a84f119b2d2f8661441ec47310c67","url":"tw_stocks/8464.json"},{"revision":"2721f1643d9e74b52b166b993857c9ad","url":"tw_stocks/8463.json"},{"revision":"55c5c40f24eaf37eec6467d92ca07d81","url":"tw_stocks/8462.json"},{"revision":"b72a8a23fe53eb2106fdd920c3c39ad4","url":"tw_stocks/8454.json"},{"revision":"bd869ccd75bbcc4791a40e7084735778","url":"tw_stocks/8443.json"},{"revision":"6be26094df201a036ba6b6c2b6518f4b","url":"tw_stocks/8442.json"},{"revision":"27febb2b4f8bceea683284f162c7d9cc","url":"tw_stocks/8438.json"},{"revision":"e7f836ef12547e89ba0ea39b8eefecc2","url":"tw_stocks/8429.json"},{"revision":"252014243ec3e080f94651c5168f1f5d","url":"tw_stocks/8422.json"},{"revision":"2881747438571371de45f8b0447bff1f","url":"tw_stocks/8411.json"},{"revision":"216ec9ae4d2bb6eaef9e0ae87456ee47","url":"tw_stocks/8404.json"},{"revision":"f65bcee74b1a7e08591d528a2217af52","url":"tw_stocks/8374.json"},{"revision":"8235ef773980c5773110832949f3961f","url":"tw_stocks/8367.json"},{"revision":"f6d88eb9189e4963c5eed4121a2e8464","url":"tw_stocks/8341.json"},{"revision":"9f2ba0c1bffa0f9ae3572bd71f87d149","url":"tw_stocks/8271.json"},{"revision":"3f6bf414750524d702537d1b46775227","url":"tw_stocks/8261.json"},{"revision":"0b7b2384400e64637fe7096c482fdad7","url":"tw_stocks/8249.json"},{"revision":"a7a3b712ce5805bdd851a1070586ee0e","url":"tw_stocks/8222.json"},{"revision":"9f4ce84b50f5d95a5fb0808fcc35cfee","url":"tw_stocks/8215.json"},{"revision":"f75ae3e2ed86af98c2d593d79b0072fe","url":"tw_stocks/8213.json"},{"revision":"b5912fb53bae69087a100c97a2dda5fc","url":"tw_stocks/8210.json"},{"revision":"03bf580f8678ace616bb1d67bda51ebf","url":"tw_stocks/8201.json"},{"revision":"19b7aac891f17b5c60cb8c2a521e8be4","url":"tw_stocks/8163.json"},{"revision":"70d14e1f548b9301b6ac5f40dc5ecba3","url":"tw_stocks/8150.json"},{"revision":"489480772d7e969c340326a0bb67f302","url":"tw_stocks/8131.json"},{"revision":"22d8c69506dc9da7099b806506a1560e","url":"tw_stocks/8114.json"},{"revision":"16d6d340636bcaee4131ba974e4ceca1","url":"tw_stocks/8112.json"},{"revision":"983d3cb015aa23e1265151457ce74568","url":"tw_stocks/8110.json"},{"revision":"30374c68192d5d44b4d8f3c27523b677","url":"tw_stocks/8105.json"},{"revision":"edb6b138345ff216438db1118b0c10f4","url":"tw_stocks/8104.json"},{"revision":"c12143784b0e5405a95abdac3be9df53","url":"tw_stocks/8103.json"},{"revision":"e51ae483fad017e07047ea74df6a18ad","url":"tw_stocks/8101.json"},{"revision":"eb22c0ae09f52cfdfeae1bbcca806508","url":"tw_stocks/8081.json"},{"revision":"49d9da2904befbc27f303ae24dadd8f3","url":"tw_stocks/8072.json"},{"revision":"075a8087d9e557e1a44b990dc809534a","url":"tw_stocks/8070.json"},{"revision":"adc03d6788e10d7a1019262ab9f748d3","url":"tw_stocks/8046.json"},{"revision":"7d6fb0dcb83ebe873eea46cf2623fbc2","url":"tw_stocks/8045.json"},{"revision":"e2d876efb6c4036f21fcfc14719d7a49","url":"tw_stocks/8039.json"},{"revision":"8e072b72a4b68e77ab117768ebbfa631","url":"tw_stocks/8033.json"},{"revision":"ca63ccc3ad52e3f38e7bcc7225aa8648","url":"tw_stocks/8028.json"},{"revision":"7f2990901709ff90b7a4eb6337425cba","url":"tw_stocks/8021.json"},{"revision":"fd55649addb2fb54a9a0fa61eb380d31","url":"tw_stocks/8016.json"},{"revision":"0659ffab810d491178fe66d4345f3a83","url":"tw_stocks/8011.json"},{"revision":"a6b6074655e302c0a7e78d8134442828","url":"tw_stocks/7822.json"},{"revision":"0f61271cca6a5cd31414983ab2d9221c","url":"tw_stocks/7821.json"},{"revision":"e25af634ad369916ecffb2913dfec95d","url":"tw_stocks/7799.json"},{"revision":"9004d60f55809e4ddfefd851a04d592e","url":"tw_stocks/7795.json"},{"revision":"1b87722bcb924e6a9bfe9e1a5056bbfb","url":"tw_stocks/7791.json"},{"revision":"646d0a3dac5a2b54b5c50577ddf96190","url":"tw_stocks/7788.json"},{"revision":"71c29b51a9ecb19be80d555711c7f916","url":"tw_stocks/7786.json"},{"revision":"3bcd68edceca4d2baf6426279489e55d","url":"tw_stocks/7780.json"},{"revision":"2757620d89f315278fd0637341645f03","url":"tw_stocks/7769.json"},{"revision":"a204d4f408f51dc6a6c34bc746edcf08","url":"tw_stocks/7768.json"},{"revision":"32f0f501c65b500e08e27cbc0a9345f9","url":"tw_stocks/7765.json"},{"revision":"e7f73ee93ae07bcd8da976a6fd6736fb","url":"tw_stocks/7760.json"},{"revision":"bec3365dac63192a598d4011647881b6","url":"tw_stocks/7750.json"},{"revision":"82c7c3a5c99d19fce43aa64365f9f81c","url":"tw_stocks/7749.json"},{"revision":"bc794214b81ceb3416afcfa134782ab4","url":"tw_stocks/7736.json"},{"revision":"ebc9ee48c539f9eaa44cf9fdf017a2e0","url":"tw_stocks/7732.json"},{"revision":"22ac648a2af4b4ed79c7bc0b80df24c7","url":"tw_stocks/7722.json"},{"revision":"4d0872d7908f1dbe8a8eece38f0fa1f4","url":"tw_stocks/7721.json"},{"revision":"f1838df4606950258b56cea95f40966a","url":"tw_stocks/7711.json"},{"revision":"ab9e7cb221fd3e9945e13397644c4c76","url":"tw_stocks/7705.json"},{"revision":"dad6a348c2d858bb45e0c2722b626118","url":"tw_stocks/6994.json"},{"revision":"3c7fcbd6877549a28f3ea69a311b02b8","url":"tw_stocks/6965.json"},{"revision":"0dad92464b017ea26bccff4f13f4bea9","url":"tw_stocks/6962.json"},{"revision":"d798027a95239aa72088a7048c50f09d","url":"tw_stocks/6958.json"},{"revision":"28fe5184cad340a5aa06d2f9c6930892","url":"tw_stocks/6957.json"},{"revision":"674ac2fe0e99adb879b0876a30e83116","url":"tw_stocks/6952.json"},{"revision":"b456d5d17dd41cfb4045b32115c9bda4","url":"tw_stocks/6944.json"},{"revision":"98fa84d25114b41ab46cafd00e25c414","url":"tw_stocks/6937.json"},{"revision":"f50ca20ede86cd0d8f63c60a14ec2dba","url":"tw_stocks/6936.json"},{"revision":"c2e564517c0efe92e19cb46bb035aaee","url":"tw_stocks/6934.json"},{"revision":"e3e5f0ca611aec9d7270d49ab0436aef","url":"tw_stocks/6933.json"},{"revision":"0bb9e78ce44adce468c55f9c1f47944c","url":"tw_stocks/6931.json"},{"revision":"3cc7ae8c64dc34f0474784bdcbb6f60d","url":"tw_stocks/6928.json"},{"revision":"402bb85a8b42339b0ca2b01dfc46db69","url":"tw_stocks/6923.json"},{"revision":"030fa935fe06658382281576d4a714dd","url":"tw_stocks/6919.json"},{"revision":"4fdeac05101bad6bb069dc7d67310425","url":"tw_stocks/6918.json"},{"revision":"c09f69d39970e8f7ee5768d46433fe08","url":"tw_stocks/6916.json"},{"revision":"dec4461310527bb44b23ba557c1f70e9","url":"tw_stocks/6914.json"},{"revision":"5825afe8848472603f30b9bbfacbb29c","url":"tw_stocks/6909.json"},{"revision":"b7e75e54094e11477ceff108e79eb7f2","url":"tw_stocks/6906.json"},{"revision":"af6e8fefd9a6e9c0384aec5fa03be50c","url":"tw_stocks/6902.json"},{"revision":"b2bff27e7634908d827afd66c7d7cec1","url":"tw_stocks/6901.json"},{"revision":"57a257274e23b479055d5491ed8812d4","url":"tw_stocks/6890.json"},{"revision":"c4ff6afa977836191d9fe8e9f53403db","url":"tw_stocks/6887.json"},{"revision":"53d929058bd8bcef527f203c69f25621","url":"tw_stocks/6885.json"},{"revision":"510561c30257c8d84368c0ec8a28b2ee","url":"tw_stocks/6873.json"},{"revision":"3968d3042ca19202ef1c1ff8c6d3bbaa","url":"tw_stocks/6869.json"},{"revision":"5ed6f58ad1b5705a995defbb4432bea6","url":"tw_stocks/6863.json"},{"revision":"bba311eb554db1cb2efa9e7d0fac9619","url":"tw_stocks/6862.json"},{"revision":"cf5d362435b548bbf6d0de7be86ae8f3","url":"tw_stocks/6861.json"},{"revision":"0517979761a2402743f7e908ec0b4105","url":"tw_stocks/6838.json"},{"revision":"ee2f5f0f41831945f5e5178e0a918b80","url":"tw_stocks/6835.json"},{"revision":"35ba9555067f324d4fd36778397221d4","url":"tw_stocks/6834.json"},{"revision":"e1249fdbd721bd998998ff37f375e889","url":"tw_stocks/6831.json"},{"revision":"e99159b1910167e19f04885629c3beff","url":"tw_stocks/6830.json"},{"revision":"16c0cca02e8614b397eba12746cbee1f","url":"tw_stocks/6807.json"},{"revision":"9387057acf8063f2a7664a69ba08d776","url":"tw_stocks/6806.json"},{"revision":"58f6c1ee46774c94f108d4038c983ace","url":"tw_stocks/6805.json"},{"revision":"20ef99a96cd9c70832250df1d23dca68","url":"tw_stocks/6799.json"},{"revision":"662674d42d1f0f2aa5862ff41e49f8fa","url":"tw_stocks/6796.json"},{"revision":"e44a2874629ed6d456995e55a64341e1","url":"tw_stocks/6794.json"},{"revision":"e19394f89c9e50fa68350d373443a776","url":"tw_stocks/6792.json"},{"revision":"6345f324cacec050dcfbeb6dd8666c30","url":"tw_stocks/6790.json"},{"revision":"69261568bebd3ea69df547e530ae9635","url":"tw_stocks/6789.json"},{"revision":"7223e302e3a64a39e1f1b9288b2bc02e","url":"tw_stocks/6782.json"},{"revision":"d65c52ce3e324d5ee022560602892aa4","url":"tw_stocks/6781.json"},{"revision":"d2eefbc020f87f3a1da4c8f496bfdb7b","url":"tw_stocks/6776.json"},{"revision":"33c57fd28db30a3da6e92b2fb2b7c438","url":"tw_stocks/6770.json"},{"revision":"9a581bbccdf5a9a108dcea1373c62426","url":"tw_stocks/6768.json"},{"revision":"d332a3866e9d59be867ffe24d9c5c032","url":"tw_stocks/6757.json"},{"revision":"4c688e7d56b5c4ce8c6139eb3094fedf","url":"tw_stocks/6756.json"},{"revision":"58392e525995af668c5269656513c45f","url":"tw_stocks/6754.json"},{"revision":"cc9e9462558644a3e400148a55020eb1","url":"tw_stocks/6753.json"},{"revision":"020904fb51d93143f14110c8e01e2008","url":"tw_stocks/6743.json"},{"revision":"46f77fe7ce708ccb8d133b40086b896f","url":"tw_stocks/6742.json"},{"revision":"b43742b3cf8a61b0e483bc19d598ef1c","url":"tw_stocks/6722.json"},{"revision":"2de972ec6547274d503e52f33c38752b","url":"tw_stocks/6719.json"},{"revision":"b7bfc4057105083b4ff20155c2fa6e22","url":"tw_stocks/6715.json"},{"revision":"e2c718b4038e0bf3f56b8b393e7689e9","url":"tw_stocks/6706.json"},{"revision":"6671653f316b428e673e191586b6b35b","url":"tw_stocks/6698.json"},{"revision":"807d6674a1c82b8064a1af80027ca8ea","url":"tw_stocks/6695.json"},{"revision":"2206c191cfd8b39cb044f045f41018a1","url":"tw_stocks/6691.json"},{"revision":"870ac42832ee9209f642ff36e904c8ff","url":"tw_stocks/6689.json"},{"revision":"4b928af7bed389d8161e6a2dcc84210f","url":"tw_stocks/6674.json"},{"revision":"06257a9090ba87a41b1d26e1cc192305","url":"tw_stocks/6672.json"},{"revision":"c8b045ad11d786e6d380191871b639fb","url":"tw_stocks/6671.json"},{"revision":"356b42ddb551608ca398a18f57bbfb80","url":"tw_stocks/6670.json"},{"revision":"2bc23fc84799850a641b033cd1dca99e","url":"tw_stocks/6669.json"},{"revision":"6c88e83e3283229ce6dec5e5d1f0ad80","url":"tw_stocks/6668.json"},{"revision":"8a4a0e67f649c7e91a13fa3b24118f64","url":"tw_stocks/6666.json"},{"revision":"3900cd8c9413f61cded1f17b5b188970","url":"tw_stocks/6658.json"},{"revision":"7cf48dd4fe9e0df7f9e597c73cda8423","url":"tw_stocks/6657.json"},{"revision":"a8690eedb466cecdcb93bdfa0a281b26","url":"tw_stocks/6655.json"},{"revision":"a1bad423eca35cfb3c0e822d6a8d0ad2","url":"tw_stocks/6641.json"},{"revision":"febd537e98c90ade7f8f9da5724d058b","url":"tw_stocks/6625.json"},{"revision":"8280c65d29a2ad24b321a00ac6a83ec8","url":"tw_stocks/6614.json"},{"revision":"6a1b84b62bf36d192e610deeef734981","url":"tw_stocks/6606.json"},{"revision":"4da0b7b27dc15d1df48861cae42ed834","url":"tw_stocks/6605.json"},{"revision":"b1b8bfd1c718f9a3656cefef98f5171d","url":"tw_stocks/6598.json"},{"revision":"7d50fca9641af71edf31521a06b0acfa","url":"tw_stocks/6592.json"},{"revision":"0f77a757d2534bfc55c11dbbdde14cb1","url":"tw_stocks/6591.json"},{"revision":"a4895a76759597450d40241f16dca826","url":"tw_stocks/6589.json"},{"revision":"4e9bd4fea566b0cfe6e36b19dded7327","url":"tw_stocks/6585.json"},{"revision":"50074006181fbbf40ea30ba0679a7481","url":"tw_stocks/6582.json"},{"revision":"522513dbd9f5336959451d8e0e8c0431","url":"tw_stocks/6581.json"},{"revision":"9250c27a7ec5b8b5d1c8900b62bdcb07","url":"tw_stocks/6579.json"},{"revision":"fd3da5fcd7495c5dc712fa678419288b","url":"tw_stocks/6573.json"},{"revision":"d63225172bc4c8ee77a934a210de1712","url":"tw_stocks/6558.json"},{"revision":"852cf2bd319d4e35ce49e91cee4edaee","url":"tw_stocks/6552.json"},{"revision":"0710bb036bb99ca7ea11fa4846fd0eb6","url":"tw_stocks/6550.json"},{"revision":"6cd03e58394285cd60c051161d4a3c62","url":"tw_stocks/6541.json"},{"revision":"2938468c5dcbb46c29e3327ac9198c9a","url":"tw_stocks/6533.json"},{"revision":"bc74637df2ed11de3bb90e4f294c0fca","url":"tw_stocks/6531.json"},{"revision":"fc71bff4eaf627b3058b1e2fd5557d1d","url":"tw_stocks/6526.json"},{"revision":"5308bf284abb0efc3106525ad664858d","url":"tw_stocks/6525.json"},{"revision":"2b1cfbcf171e48689fcc413ad7ce78fa","url":"tw_stocks/6515.json"},{"revision":"58368b9d5f06783a613c62d11517230d","url":"tw_stocks/6505.json"},{"revision":"0fde6d3ed738c323cfa4a5819ebf86ee","url":"tw_stocks/6504.json"},{"revision":"0e6232688d177a93a28c03d2016e553b","url":"tw_stocks/6491.json"},{"revision":"7137466868f18e3909dd2eb8cbab44ff","url":"tw_stocks/6477.json"},{"revision":"99cf39f4f2b158742164828c590b8ce0","url":"tw_stocks/6472.json"},{"revision":"e15799cbffb20ae182185b4364316f50","url":"tw_stocks/6464.json"},{"revision":"97f0de3c8379d8ae0a3fa00676818f8a","url":"tw_stocks/6456.json"},{"revision":"536261c3cb6f9cb2cc2909903c7ea650","url":"tw_stocks/6451.json"},{"revision":"e21e35175eac8adc550277b4d901fe64","url":"tw_stocks/6449.json"},{"revision":"0d2fb2d67c5c8f0c5b524cbddb8ad88d","url":"tw_stocks/6446.json"},{"revision":"b85bddd5a1b860be66713e756a8923d5","url":"tw_stocks/6443.json"},{"revision":"d3ccd6ca7a1e6bb8357d057ac1bb030a","url":"tw_stocks/6442.json"},{"revision":"3c27aeb5ef953662660e8827048b358a","url":"tw_stocks/6438.json"},{"revision":"b9a1f50c4aaab3528d4d07a6392e481f","url":"tw_stocks/6431.json"},{"revision":"c7d216e74e26d65f7d9cc8bb0c4c9fba","url":"tw_stocks/6426.json"},{"revision":"9b8f72f6fd568c7704bc002d12aee014","url":"tw_stocks/6416.json"},{"revision":"adad308f575d83f10515c52920b87c3a","url":"tw_stocks/6415.json"},{"revision":"639bc0f7cbe1e80e7cb0a3f5e16ca9c4","url":"tw_stocks/6414.json"},{"revision":"1be3a86d8b65e9e1c0d5e6aed21bd880","url":"tw_stocks/6412.json"},{"revision":"af126502647ce2effcbebf73df5d17f4","url":"tw_stocks/6409.json"},{"revision":"cefa61877195642f38ba50575955caeb","url":"tw_stocks/6405.json"},{"revision":"ef4289b888c3a19a810eefbdca2645b6","url":"tw_stocks/6285.json"},{"revision":"efa687b81c9fb9e7bd4149206bdf6aea","url":"tw_stocks/6283.json"},{"revision":"a000c9b0650e1d236d8d8a8d92a340f6","url":"tw_stocks/6282.json"},{"revision":"59675528735de9a3f913d97d194c9b69","url":"tw_stocks/6281.json"},{"revision":"55875f572ecf4205df3dc1b4560d7dd8","url":"tw_stocks/6278.json"},{"revision":"9c65c01f7311e0355f0f617d894d1021","url":"tw_stocks/6277.json"},{"revision":"16b34a305f8b43fc971236e8786f84eb","url":"tw_stocks/6272.json"},{"revision":"8827b87c20f62194ca4d0d8580e11c74","url":"tw_stocks/6271.json"},{"revision":"96afed32d087a7e8fbdc375688268039","url":"tw_stocks/6269.json"},{"revision":"852fb71cac3c3cef8265002a4ce59aed","url":"tw_stocks/6257.json"},{"revision":"c64ae8fe7984822031ea5c5b9836c2ad","url":"tw_stocks/6243.json"},{"revision":"7b5c85f71e5983ca8adc782339baa4f4","url":"tw_stocks/6239.json"},{"revision":"949573b95244f1aafa08acdf5c3e2021","url":"tw_stocks/6235.json"},{"revision":"6881cf1cbd02beacaf1a1097ddccef07","url":"tw_stocks/6230.json"},{"revision":"b6e6b6f97a321da94b92a4220b073c45","url":"tw_stocks/6226.json"},{"revision":"466933381fe9c1459e2787263db9dd15","url":"tw_stocks/6225.json"},{"revision":"9ad56aee521c04a88d4c00602fc4aa34","url":"tw_stocks/6224.json"},{"revision":"48ae97daaf1ecb4df662cea0b0d47fd7","url":"tw_stocks/6216.json"},{"revision":"9467490bd6309ca43bf9e081808389bd","url":"tw_stocks/6215.json"},{"revision":"84c5df9eac89d76dedfe9d42b121f3c2","url":"tw_stocks/6214.json"},{"revision":"70df4c8e7ac9184a4b70def41cb7b6ee","url":"tw_stocks/6213.json"},{"revision":"1aed1a698a33cdb6631c52e4cccfc36a","url":"tw_stocks/6209.json"},{"revision":"73ca1ce876d9a9066d9224b7df2f906e","url":"tw_stocks/6206.json"},{"revision":"cdf7d86200d2a5a1da1c55203a62475f","url":"tw_stocks/6205.json"},{"revision":"593c8e4b3867c37d74b0837f75db3188","url":"tw_stocks/6202.json"},{"revision":"8b8a5b53c1d4da02b427329f17ea9c50","url":"tw_stocks/6201.json"},{"revision":"2694e2673e5b339a7de3750a5bd0562d","url":"tw_stocks/6197.json"},{"revision":"95f48421f5329268f7412a2b88d17617","url":"tw_stocks/6196.json"},{"revision":"967895eb6937e260b43f379e07c1c9fa","url":"tw_stocks/6192.json"},{"revision":"0b8b8def0b9ded918074a30c47872523","url":"tw_stocks/6191.json"},{"revision":"d8b43eb33aba12138184d23c859fc1cf","url":"tw_stocks/6189.json"},{"revision":"972253c61fb223e01d68a86e99062177","url":"tw_stocks/6184.json"},{"revision":"0a68d917bd639fb1bc73a4bab852989c","url":"tw_stocks/6183.json"},{"revision":"b34d462dfa7b16b99360d0c41f3e98c2","url":"tw_stocks/6177.json"},{"revision":"b4055bf447e7097a3a742ee56111ea6f","url":"tw_stocks/6176.json"},{"revision":"a6bf0a2a48287b8ac01c74db556ceb1b","url":"tw_stocks/6168.json"},{"revision":"e460f00c8d01799888945f94f54c9731","url":"tw_stocks/6166.json"},{"revision":"57f7f6166deac81ecd81541a44530719","url":"tw_stocks/6165.json"},{"revision":"745de4d558118ddb016140fac5fcd6bc","url":"tw_stocks/6164.json"},{"revision":"c14506d3ed880947652cfd272a026205","url":"tw_stocks/6155.json"},{"revision":"20b079c043e3c667fb96133a79dc9533","url":"tw_stocks/6153.json"},{"revision":"e8b6653921e0f7c53b3b1d4a1bccb074","url":"tw_stocks/6152.json"},{"revision":"1f4d4d90439902c8d8c269853b63317a","url":"tw_stocks/6142.json"},{"revision":"51397c46f4ab25ceb117de1bcb021dca","url":"tw_stocks/6141.json"},{"revision":"5bb413fc32dde42b43a84e15f6548dcf","url":"tw_stocks/6139.json"},{"revision":"2f80d4dbbf2c38c04ca5c774b0d2462f","url":"tw_stocks/6136.json"},{"revision":"28033a3570ba8dfb4229f81959c26a57","url":"tw_stocks/6133.json"},{"revision":"1f0fe59685d3c082fe9f7e478f46a6d7","url":"tw_stocks/6128.json"},{"revision":"52eecca084197580c4d09c53c83b8d51","url":"tw_stocks/6120.json"},{"revision":"f32595660b33c4659b1d2ce6c0a33ada","url":"tw_stocks/6117.json"},{"revision":"195addde026865c4f72a8f52b17d91f4","url":"tw_stocks/6116.json"},{"revision":"1d4c6e47cd1e66ee32303489f0e228d8","url":"tw_stocks/6115.json"},{"revision":"31cee5c3f883e6b28692829d4abdedbf","url":"tw_stocks/6112.json"},{"revision":"3cdba3e81656d85a6badca474fde6ebd","url":"tw_stocks/6108.json"},{"revision":"06f15e74a4f47fc84ff378af8ed3eee1","url":"tw_stocks/6024.json"},{"revision":"a49e1983ec9ef4ed13fc65fd7bd2f359","url":"tw_stocks/6005.json"},{"revision":"e38415810a6a6b6400bf7b373baa29c0","url":"tw_stocks/5907.json"},{"revision":"f0ec2c29ec464555b5fafb70850492ce","url":"tw_stocks/5906.json"},{"revision":"2d35e0cda0094603f36d8d68e3b37a9a","url":"tw_stocks/5880.json"},{"revision":"9879739f196a6e7942aa25ae00efb6eb","url":"tw_stocks/5876.json"},{"revision":"089e338f819ee0306ce46d9ef5268fb1","url":"tw_stocks/5871.json"},{"revision":"ae3fcec51135abc1729300c12bb8874a","url":"tw_stocks/5706.json"},{"revision":"814b6e24dd47168995a41c7a35f6adc3","url":"tw_stocks/5608.json"},{"revision":"98dd21652a90e2a4d8747674c6d9ccd0","url":"tw_stocks/5607.json"},{"revision":"5a7b5fe7f28a2df2aed5b9adba9fe886","url":"tw_stocks/5546.json"},{"revision":"1e924a509f9d340c9e66bcca08869923","url":"tw_stocks/5538.json"},{"revision":"5bb6bb221aa75ce0f14f3b150cc468f9","url":"tw_stocks/5534.json"},{"revision":"cb4dea8aa325371087a4576199fc3674","url":"tw_stocks/5533.json"},{"revision":"e9d389d7e79b5f1d51984f9ec8ee78da","url":"tw_stocks/5531.json"},{"revision":"a4248541d8e6ae7ef774db9863a5f3b0","url":"tw_stocks/5525.json"},{"revision":"470dc817fe2f7cdd652b4e31bb979ee7","url":"tw_stocks/5522.json"},{"revision":"3bae28c56ae4a84c40175831f2a928d8","url":"tw_stocks/5521.json"},{"revision":"da566481750af9071ac734c294765b72","url":"tw_stocks/5519.json"},{"revision":"6b3091dc065adb43bea4aea0f8e670ca","url":"tw_stocks/5515.json"},{"revision":"a4b38b3109dfa77ed1790057e934e063","url":"tw_stocks/5484.json"},{"revision":"38067e739e7e698fe527ac0f98b14987","url":"tw_stocks/5471.json"},{"revision":"d0a1cee4300f7313b3b20dd453190282","url":"tw_stocks/5469.json"},{"revision":"1fa792191fe9a70935a375463152ac8d","url":"tw_stocks/5434.json"},{"revision":"3fe4c9de7d21503cfbeb8f4747ddb11e","url":"tw_stocks/5388.json"},{"revision":"8450ed72987e4739de82dddb66cd809b","url":"tw_stocks/5306.json"},{"revision":"d1019998759ea175e08cb16c8452e790","url":"tw_stocks/5292.json"},{"revision":"59047704255af395b41eed3023411d52","url":"tw_stocks/5288.json"},{"revision":"7586ceba3b0e3d370ca094b05c747bf2","url":"tw_stocks/5285.json"},{"revision":"dc57b553d08b8052c83ab654ceba9852","url":"tw_stocks/5284.json"},{"revision":"19d509d544e6fbaf4d182b7884634604","url":"tw_stocks/5283.json"},{"revision":"91d8be64e5a68440a4a2727b18f55941","url":"tw_stocks/5269.json"},{"revision":"487af11e92601d795f38a46111ba255e","url":"tw_stocks/5258.json"},{"revision":"b8adad3d6314bc4445071fe9ce20986e","url":"tw_stocks/5244.json"},{"revision":"2ee0bf88acc42e7a786c694f857c6e24","url":"tw_stocks/5243.json"},{"revision":"b7cd43952a32eba4beeffa73ee662016","url":"tw_stocks/5234.json"},{"revision":"8e8797cf015c114462dadf18da41d416","url":"tw_stocks/5225.json"},{"revision":"abd5b94dd8559e817996165e0f2a6b77","url":"tw_stocks/5222.json"},{"revision":"1aa4e9afc24ba6b8a1e3a3806402d12c","url":"tw_stocks/5215.json"},{"revision":"ec9940a71f634c2c3a079d83ba89968c","url":"tw_stocks/5203.json"},{"revision":"62344b4f56b02abd3a44cef0688fd822","url":"tw_stocks/5007.json"},{"revision":"20bdc13680ba17648598ffb4f6530623","url":"tw_stocks/4999.json"},{"revision":"eb390be7d50c83b4a14887927fea5320","url":"tw_stocks/4994.json"},{"revision":"ad90c393fc475a7e60e34daa5b2979f4","url":"tw_stocks/4989.json"},{"revision":"161d6714c931b582d62e96f6d99dcc09","url":"tw_stocks/4977.json"},{"revision":"6b0cef450fa04fa078866f3ce2ca3edf","url":"tw_stocks/4976.json"},{"revision":"8f60756e1989709ba340451a2a940882","url":"tw_stocks/4968.json"},{"revision":"b8919a8495569e013af7e25d509e0061","url":"tw_stocks/4967.json"},{"revision":"ba3e5268c00bdc0bd2fb8fbc4837c531","url":"tw_stocks/4961.json"},{"revision":"18139985646ac61c74a2fffc2df6e876","url":"tw_stocks/4960.json"},{"revision":"729ee70ec329d1111fbf9da13ee72317","url":"tw_stocks/4958.json"},{"revision":"953dc2dc8c74a51944e835fdbde0ca96","url":"tw_stocks/4956.json"},{"revision":"476d104fd289ac6196f3caf9e39c676b","url":"tw_stocks/4952.json"},{"revision":"bdb324d8e118537f711c66b7387a1886","url":"tw_stocks/4949.json"},{"revision":"a77409de77dd61ab17d6855e9d58032c","url":"tw_stocks/4943.json"},{"revision":"6b747b2d007b163bf3effeb48cb345c2","url":"tw_stocks/4942.json"},{"revision":"a13ab2cc35be0fafe76e97ff53992a12","url":"tw_stocks/4938.json"},{"revision":"4d9656a990df048c844ed10f3d0f30b3","url":"tw_stocks/4935.json"},{"revision":"e116665ff06d76a7f71c1861eef70a54","url":"tw_stocks/4934.json"},{"revision":"ad00010ae10e19af08a1e287628ab6a3","url":"tw_stocks/4930.json"},{"revision":"fdfc0ce73e846568b05b145fefd4e947","url":"tw_stocks/4927.json"},{"revision":"7aac449085a2fcd6ac48fabd2efcd529","url":"tw_stocks/4919.json"},{"revision":"c1c02f3e0286521931fec6f33b458bf3","url":"tw_stocks/4916.json"},{"revision":"2b44989a22f781999d9f1c8598d443e1","url":"tw_stocks/4915.json"},{"revision":"6f340ee037ea69a472feba366be56b60","url":"tw_stocks/4912.json"},{"revision":"679fc909863d80ff0d1b5a2d77374fd8","url":"tw_stocks/4906.json"},{"revision":"76112f7ba9645fd3b8398a2aa93267e1","url":"tw_stocks/4904.json"},{"revision":"102268b0721864222e9c65612eb6e739","url":"tw_stocks/4807.json"},{"revision":"760be1170c2ba24deebb3a438705c23b","url":"tw_stocks/4771.json"},{"revision":"bde5f8568e53463d0b4104fa27463f86","url":"tw_stocks/4770.json"},{"revision":"d46bd300c7d5754d7964563df9af8e71","url":"tw_stocks/4766.json"},{"revision":"9cbfaaddf69fabefd6423a20d8b414d4","url":"tw_stocks/4764.json"},{"revision":"205519cf224994d9b91c4b9dff0672b3","url":"tw_stocks/4763.json"},{"revision":"a357c3aa45d441b342b6d11f8b79892c","url":"tw_stocks/4755.json"},{"revision":"1946c27c3f26155959b4a9c5b9026adf","url":"tw_stocks/4746.json"},{"revision":"4514f5e1320d1aa0a75a291531f948fc","url":"tw_stocks/4739.json"},{"revision":"4f3b641b30a7faf2ba96385e0d2b16fa","url":"tw_stocks/4737.json"},{"revision":"b695a83e93cb451acf6bcb8533468e4e","url":"tw_stocks/4736.json"},{"revision":"71e62db32f2a9aaf8d809da0cd4d3b4f","url":"tw_stocks/4722.json"},{"revision":"e0907c2d53844706120af3cc0cc3b1d7","url":"tw_stocks/4720.json"},{"revision":"ba8b4b742952898b99b0aade29c2111c","url":"tw_stocks/4588.json"},{"revision":"19ce9d297cab1d2c67189ef2de7d09fa","url":"tw_stocks/4585.json"},{"revision":"9d6c512fc920a13f5bc43222ac1eb0ad","url":"tw_stocks/4583.json"},{"revision":"7cc59d7336f65f59892f9adefc81dc31","url":"tw_stocks/4581.json"},{"revision":"a89288bdb28abcc36b226aba23830e8d","url":"tw_stocks/4576.json"},{"revision":"73b34d70e910609af83f4cf2bc6e201e","url":"tw_stocks/4572.json"},{"revision":"1c0cb0bfb1c95ec59cb4cdcebd8e8798","url":"tw_stocks/4571.json"},{"revision":"8db20f7bc3c4c5c040933f003ef8971f","url":"tw_stocks/4569.json"},{"revision":"01afada545e9b0e159e813ad14916d65","url":"tw_stocks/4566.json"},{"revision":"a06ed6a12ebb4e346f34fbc2eb77d6f9","url":"tw_stocks/4564.json"},{"revision":"a95598c50e292daf2a778b938f64db59","url":"tw_stocks/4562.json"},{"revision":"3c7c8a099e07f7c377116c5bc38200fc","url":"tw_stocks/4560.json"},{"revision":"a3071af974ac6dcf3bb73cafd18bb721","url":"tw_stocks/4557.json"},{"revision":"8277e6d65a261ab577c2e6b1e89dc5d5","url":"tw_stocks/4555.json"},{"revision":"7f004aae627868570454efd5ee76a2c8","url":"tw_stocks/4552.json"},{"revision":"0582830447a522cf10f8000bfccb285d","url":"tw_stocks/4551.json"},{"revision":"0c11d95e986e9fb8f2f8dab24de9ec1e","url":"tw_stocks/4545.json"},{"revision":"bfc509c5a4949a2e096db93c01d66bc1","url":"tw_stocks/4540.json"},{"revision":"78297f9754046b1a48891d91d92b18e7","url":"tw_stocks/4536.json"},{"revision":"5a9909e58df6cbeda93d0d7313cb9839","url":"tw_stocks/4532.json"},{"revision":"3d8a2c7b674ce13ed2fa2ff14ad5e1e1","url":"tw_stocks/4526.json"},{"revision":"d4fd08293a3341c77c98e3f98ece24d3","url":"tw_stocks/4441.json"},{"revision":"210619ffb3c8ec47598c01d51ef3c7eb","url":"tw_stocks/4440.json"},{"revision":"c0a247aa51564d64451cee06ac0726cd","url":"tw_stocks/4439.json"},{"revision":"8e4d9c201c0723c8d954c35c1de75827","url":"tw_stocks/4438.json"},{"revision":"32f93f74ea518ded067b1057f5959c6a","url":"tw_stocks/4426.json"},{"revision":"48be5b8d457d5a5a38c197c77ffc83f0","url":"tw_stocks/4414.json"},{"revision":"57deae61fceb49566d2445c22510a98d","url":"tw_stocks/4306.json"},{"revision":"0dd9af320e6808253e5244da5c6bd203","url":"tw_stocks/4190.json"},{"revision":"d83da903d816b584663ecddd0d15ad4c","url":"tw_stocks/4178.json"},{"revision":"421c3f1b34c45237358258f6507de0a8","url":"tw_stocks/4169.json"},{"revision":"037002fd6575e759df9a1a0150ea6def","url":"tw_stocks/4164.json"},{"revision":"159b2ae9c199d16f8a301ea718f6e862","url":"tw_stocks/4155.json"},{"revision":"6e1f03b934e8df9329731fcaf17a26f3","url":"tw_stocks/4148.json"},{"revision":"548b41c3d2571fcf00208d719c2f066f","url":"tw_stocks/4142.json"},{"revision":"73816ccf9650ce0dc31109a2a6936ec2","url":"tw_stocks/4137.json"},{"revision":"382bdba7e9a2a9fbbe6648845a17f49b","url":"tw_stocks/4133.json"},{"revision":"22773bbf572b7276ef4494e6d0efc0a3","url":"tw_stocks/4119.json"},{"revision":"7cbcc1a501cedcb64ca2b7b0fd4d4a21","url":"tw_stocks/4108.json"},{"revision":"b49034852c7ea82edaabfaa68c1eddff","url":"tw_stocks/4106.json"},{"revision":"789d1cae0a71ca71924311fba384bfb6","url":"tw_stocks/4104.json"},{"revision":"3f43eb237e32cc38976addde9bb20194","url":"tw_stocks/3717.json"},{"revision":"2ad88c3ad26f5dc60204c3b1e2924f18","url":"tw_stocks/3716.json"},{"revision":"056cd4d1c6a6853b2f9ac50e5f2306ad","url":"tw_stocks/3715.json"},{"revision":"7c4cbdf5aed52458ff0627aa512eaf66","url":"tw_stocks/3714.json"},{"revision":"a5b7404b100ece9cd1ae7959e254eeb0","url":"tw_stocks/3712.json"},{"revision":"7a9b0f54b33d48317fb6c0b64e100d33","url":"tw_stocks/3711.json"},{"revision":"cc35cbece789706926cd66c54f0ef72a","url":"tw_stocks/3708.json"},{"revision":"b2ea68b2c6e120c65ac889a736ae5530","url":"tw_stocks/3706.json"},{"revision":"a44078acb70b7dd2c4319edf86da354d","url":"tw_stocks/3705.json"},{"revision":"4427ddf39a236fc3ac03a6f649f89ec7","url":"tw_stocks/3704.json"},{"revision":"9b40cca4a4d631db0c0471f36de0d1b6","url":"tw_stocks/3703.json"},{"revision":"0f689d1edbf01843f9096b1a16dfb740","url":"tw_stocks/3702.json"},{"revision":"0e7d9d2ae0ca6824ed79bf7596834ddb","url":"tw_stocks/3701.json"},{"revision":"a679f098d69bf14af5b96e61653db9b5","url":"tw_stocks/3694.json"},{"revision":"da167942ebd0c892178e7033b133042d","url":"tw_stocks/3686.json"},{"revision":"e8d2635b6ed4c428616b51bdd8d70355","url":"tw_stocks/3679.json"},{"revision":"321fa809a61b8efadebb5ef8e190dd73","url":"tw_stocks/3673.json"},{"revision":"d62ce9e5a4c66aa9caf9b77abdb66837","url":"tw_stocks/3669.json"},{"revision":"3ccf1ae023dc76dfdf18fc972e8539b1","url":"tw_stocks/3665.json"},{"revision":"2f6a30d851d553b5c3f80b20ee19e9e4","url":"tw_stocks/3661.json"},{"revision":"0d0976bc22897e2b966b43b2a952dffe","url":"tw_stocks/3653.json"},{"revision":"1b78d3843144de7dc88e04bd62f2295f","url":"tw_stocks/3652.json"},{"revision":"ca4b09f2d2eaa7498d780aa52312c9c2","url":"tw_stocks/3645.json"},{"revision":"a0fa83df1138a3c95779254e4ae780b0","url":"tw_stocks/3622.json"},{"revision":"21c6bc4315218e2c5f6fe49e9169bad3","url":"tw_stocks/3617.json"},{"revision":"dc42e1282bd0754351dc3710b247703c","url":"tw_stocks/3607.json"},{"revision":"fbbef93a36c459c040962f30e780e336","url":"tw_stocks/3605.json"},{"revision":"811c76a704fe36cef9766b793383a4a0","url":"tw_stocks/3596.json"},{"revision":"a5a189db5b90600f8472a8983166546f","url":"tw_stocks/3593.json"},{"revision":"8ebf95908275ea93c5f0aa3b0d138da5","url":"tw_stocks/3592.json"},{"revision":"cfc039d216cab85b3f17ee1f37c0e05b","url":"tw_stocks/3591.json"},{"revision":"31fc042cf641e68d68b01e7c03801d80","url":"tw_stocks/3588.json"},{"revision":"e4c62f410c703c2f6d7926140e3aca4e","url":"tw_stocks/3583.json"},{"revision":"18c1be42aa49990703d712f7e141a80f","url":"tw_stocks/3576.json"},{"revision":"738d837e44f975f4e124418242aeba67","url":"tw_stocks/3563.json"},{"revision":"f378f1ea5f3e17b0e817860fa66ccd34","url":"tw_stocks/3557.json"},{"revision":"9669668033e5d2cb1dc323f5ea092520","url":"tw_stocks/3550.json"},{"revision":"0f93d7da62768ea59062f1a1d6d07164","url":"tw_stocks/3545.json"},{"revision":"99de3a25c0d452bc2711a96d396be432","url":"tw_stocks/3543.json"},{"revision":"3eaf7028f2420119c778ecdb83646235","url":"tw_stocks/3535.json"},{"revision":"9db79ccc3f2c303537b2c16761a57885","url":"tw_stocks/3533.json"},{"revision":"89bf8cecb424c62fa65dce93a57063e7","url":"tw_stocks/3532.json"},{"revision":"00db5552833397d1ebec2249eada4863","url":"tw_stocks/3530.json"},{"revision":"a557fcbca8b44b766604518dd5e4379f","url":"tw_stocks/3528.json"},{"revision":"674780cc66870665dcd0c86226131e4a","url":"tw_stocks/3518.json"},{"revision":"7edcbc7d19b277346fe0e075c403e38c","url":"tw_stocks/3515.json"},{"revision":"b772e58b6fcd860eed2251a30734c03a","url":"tw_stocks/3504.json"},{"revision":"2421d4e17291e8821b162b04d645f206","url":"tw_stocks/3501.json"},{"revision":"c16b748aa4a3d630d34ca8b9d8e28e43","url":"tw_stocks/3494.json"},{"revision":"7d401ad83bb99de43862f3c2d5214b74","url":"tw_stocks/3481.json"},{"revision":"0e24fa088539b3d020e124561752ccf4","url":"tw_stocks/3454.json"},{"revision":"56d36f91cae5567b490c7d28be0faeaa","url":"tw_stocks/3450.json"},{"revision":"9fde38501bbfa4999ed15991107c4575","url":"tw_stocks/3447.json"},{"revision":"0c9b1ba89b037c04fae2bc473a9ce8d8","url":"tw_stocks/3443.json"},{"revision":"c19b795a943aefb2201ce4b58245c332","url":"tw_stocks/3437.json"},{"revision":"8cacff8808d93c4fca7d572a80255535","url":"tw_stocks/3432.json"},{"revision":"5bbec88d2bbd35ba60ad251097d16b3f","url":"tw_stocks/3419.json"},{"revision":"133203a5e42be0931b3f675882dd46ed","url":"tw_stocks/3416.json"},{"revision":"a59f3d7eff1b548e9398e5202a0c1b9a","url":"tw_stocks/3413.json"},{"revision":"24e2c9cc87c762855d7555b70068a6b5","url":"tw_stocks/3406.json"},{"revision":"a82c455fd8350fbb9b5a8ec645f71b1d","url":"tw_stocks/3380.json"},{"revision":"53805f6e37ad85db441ebc15145c1c02","url":"tw_stocks/3376.json"},{"revision":"80d8251301c7be3b627ad2832cbbc022","url":"tw_stocks/3356.json"},{"revision":"40a0f0c8d7e3a387ecec3a621c62f1e6","url":"tw_stocks/3346.json"},{"revision":"ab8d8adf149c616995e217d4c44e1052","url":"tw_stocks/3338.json"},{"revision":"5b3589b1a7c6a8dd5253d7dd69f2a569","url":"tw_stocks/3321.json"},{"revision":"bfc326a411bc99417b02b6299da51045","url":"tw_stocks/3312.json"},{"revision":"c496010e6f8255cd53133e921ab8c30b","url":"tw_stocks/3311.json"},{"revision":"08d6a41f83b0e0ea5ce0eddf4f36ba81","url":"tw_stocks/3308.json"},{"revision":"9a9895f67676258c2f303408e096e4b5","url":"tw_stocks/3305.json"},{"revision":"21dc8c89eeb92fd79aff5f224b39b4ea","url":"tw_stocks/3296.json"},{"revision":"c5f4663a8531140ac495caf77489796b","url":"tw_stocks/3266.json"},{"revision":"571a353cb02068723df16c48d4ef639a","url":"tw_stocks/3257.json"},{"revision":"a6e9da0421407e4c5096bdb0ed0982e8","url":"tw_stocks/3231.json"},{"revision":"4cea7b636d07166246668e9e49de6f65","url":"tw_stocks/3229.json"},{"revision":"b0ba12c431c294b7b5cd264563ba73b6","url":"tw_stocks/3209.json"},{"revision":"1e3fee47dda2f1f8a11eedb0e9e9368a","url":"tw_stocks/3189.json"},{"revision":"562b04a345f44da675f1bc001e6ebf19","url":"tw_stocks/3168.json"},{"revision":"bc691e760632f656bf403182ebd1f768","url":"tw_stocks/3167.json"},{"revision":"b6de2454cbfa3182f0d528c5ec3f30b1","url":"tw_stocks/3164.json"},{"revision":"9703c3c6a8e67cc55725608f4bd6cc90","url":"tw_stocks/3149.json"},{"revision":"a9b35a47122ae9b01e574592fb7cf5dd","url":"tw_stocks/3138.json"},{"revision":"f055e06646e8f7082b2d7f2a61467d0a","url":"tw_stocks/3135.json"},{"revision":"f30685d758b8c80a73254f6bd946e1f1","url":"tw_stocks/3130.json"},{"revision":"68b933af19a64f49022cfb2f69e991bc","url":"tw_stocks/3094.json"},{"revision":"8b0ac7510379d5c40075d83e1204fa5f","url":"tw_stocks/3092.json"},{"revision":"da73e7d1a08a483aacd92c52923282cb","url":"tw_stocks/3090.json"},{"revision":"28d0263320341e3d6e9751fe802f9538","url":"tw_stocks/3062.json"},{"revision":"32d08ae658b148764aebdc0df7b80779","url":"tw_stocks/3060.json"},{"revision":"3f4b7602b3be2a51f6ff50603f151220","url":"tw_stocks/3059.json"},{"revision":"6998633301c74f75d142ffbc374ea4fd","url":"tw_stocks/3058.json"},{"revision":"c414bc0f67d14f2a96a3ccd2e49e7be0","url":"tw_stocks/3057.json"},{"revision":"0c53c7400fbd6bb1605822145fe0541c","url":"tw_stocks/3056.json"},{"revision":"54bc6aa642f0a0c395d98cf92a2337c3","url":"tw_stocks/3055.json"},{"revision":"df044fa2eaf5ec81d50ff8054efdcc58","url":"tw_stocks/3054.json"},{"revision":"5fd845db687cd934b1c14270a3bb9239","url":"tw_stocks/3052.json"},{"revision":"b2b1d9e46f7e2f7c32cfc1fec5110886","url":"tw_stocks/3051.json"},{"revision":"ef161f11858624fffe3c304f341fa0d8","url":"tw_stocks/3050.json"},{"revision":"527bc3d48aa76b3e80a22b97e8898201","url":"tw_stocks/3049.json"},{"revision":"526143f463a56c38947c85647b149878","url":"tw_stocks/3048.json"},{"revision":"b7fa6d78635d85e0ad2f26dc49ce8ad5","url":"tw_stocks/3047.json"},{"revision":"a9603303a4734270720bab74b845f2ae","url":"tw_stocks/3046.json"},{"revision":"db5abaaaef0948f1536922e6251d62e6","url":"tw_stocks/3045.json"},{"revision":"70bd1fa223e4022efc3f3aeeb22906d5","url":"tw_stocks/3044.json"},{"revision":"1e31c062fa99fb8e0b1c2e187b731b2f","url":"tw_stocks/3043.json"},{"revision":"271a44e1039115991ba7870a733eb627","url":"tw_stocks/3042.json"},{"revision":"01d5073ec7bce23d56941286b24e7abe","url":"tw_stocks/3041.json"},{"revision":"ab21819230c316aa563efbbff525f64e","url":"tw_stocks/3040.json"},{"revision":"5018483e284a52b363a5847f04afb4d2","url":"tw_stocks/3038.json"},{"revision":"4078adfde5e39b2567f7bb39d8bb1e9a","url":"tw_stocks/3037.json"},{"revision":"95885dfb6823bbdd1bfb3ea73222948e","url":"tw_stocks/3036.json"},{"revision":"cd95fa90f62e2f9ab64f8ee34774a321","url":"tw_stocks/3035.json"},{"revision":"009bda16b7fbad62d65f6f7b32011356","url":"tw_stocks/3034.json"},{"revision":"b6f82284a1b5e2c4c27bc5e337c32117","url":"tw_stocks/3033.json"},{"revision":"bc95e13ba5b49c6feecf49c5ac033bc7","url":"tw_stocks/3032.json"},{"revision":"455e51ebdac27a502f445b136fd82e4b","url":"tw_stocks/3031.json"},{"revision":"fc340a1568ba730dac93b2d5e3cb18c1","url":"tw_stocks/3030.json"},{"revision":"e5cdcffd9e624c34a62cc9252e6e34a6","url":"tw_stocks/3029.json"},{"revision":"93f7cee43fa8035e930d6a5ddf6b571e","url":"tw_stocks/3028.json"},{"revision":"f8b0e94774c24bdae2a724619337f039","url":"tw_stocks/3027.json"},{"revision":"4f23b3f6d0e5b43451a63cf8cc6e85ba","url":"tw_stocks/3026.json"},{"revision":"f9d006215bc2b4989c328d3bc8dcce74","url":"tw_stocks/3025.json"},{"revision":"69292cf7f4ccfb38ac6af33b9b32cd0e","url":"tw_stocks/3024.json"},{"revision":"50139d5bf8afc5b49519f9da56649cc6","url":"tw_stocks/3023.json"},{"revision":"163629c6106da8a306d27a8a4807007f","url":"tw_stocks/3022.json"},{"revision":"1c04391b353fdf9f424940f4f8026106","url":"tw_stocks/3021.json"},{"revision":"1d008a63aa1820526233266669aefa46","url":"tw_stocks/3019.json"},{"revision":"936a9c875b539f43ebc383d5d4a97ef9","url":"tw_stocks/3018.json"},{"revision":"008efb8eb3b4a05c0ed6b5829d77fa3f","url":"tw_stocks/3017.json"},{"revision":"a4d25901281036506493b698b731f1a2","url":"tw_stocks/3016.json"},{"revision":"33bf394fbb2a77b07bf2b6a37f176419","url":"tw_stocks/3015.json"},{"revision":"2d5f4f069f41cde6ac555e251f5faae4","url":"tw_stocks/3014.json"},{"revision":"b481d6429f9fb52036d055431c92d58d","url":"tw_stocks/3013.json"},{"revision":"88f62a5e750cc3c4f8e154bed17336ab","url":"tw_stocks/3011.json"},{"revision":"06e14c3a08503f3e9a805ffd2cf578f6","url":"tw_stocks/3010.json"},{"revision":"0193db040d1c68fbb560ccceaf8ecf2b","url":"tw_stocks/3008.json"},{"revision":"2b7575608707fc84831427c24d9ede8b","url":"tw_stocks/3006.json"},{"revision":"0b32655e97572c1f8d22c2223a906b79","url":"tw_stocks/3005.json"},{"revision":"6081cef5aafe5fe30d1fc432c4f9ba09","url":"tw_stocks/3004.json"},{"revision":"a128b260d77307ce5dc4d5e90da17cd6","url":"tw_stocks/3003.json"},{"revision":"291d2608bfec164aa0bf50b4bde68f4b","url":"tw_stocks/3002.json"},{"revision":"0957c4131e8c2686ba82474f99be77db","url":"tw_stocks/2945.json"},{"revision":"cf8bfc6aeb8b2d2eedbd295a0c82edbb","url":"tw_stocks/2939.json"},{"revision":"cf00db198bad49293970b9f97eae3e1f","url":"tw_stocks/2929.json"},{"revision":"6aa286ac2e0c560ab0038af73c71520b","url":"tw_stocks/2923.json"},{"revision":"b7f2d2aabdb421bfbebd737edca1baba","url":"tw_stocks/2915.json"},{"revision":"7ad6a23144b781204a2cf03c07875855","url":"tw_stocks/2913.json"},{"revision":"4c0b5e5667dba36ce94697a88aa0139b","url":"tw_stocks/2912.json"},{"revision":"57f9dc09d7fa161af80e2d7cafb61559","url":"tw_stocks/2911.json"},{"revision":"501c8f85c7814e80eae3cdcd864e4a2d","url":"tw_stocks/2910.json"},{"revision":"7d9e3881c81d744a86d2cd0d935b69b6","url":"tw_stocks/2908.json"},{"revision":"b486e79847a9262f3ed911d9e245a4b6","url":"tw_stocks/2906.json"},{"revision":"aaf1b66eb612ebee16ce0a39eac091bd","url":"tw_stocks/2905.json"},{"revision":"22f62bddd60337be4ef1d5271d0b7ba1","url":"tw_stocks/2904.json"},{"revision":"6c616d1f0e4b57d8c6edf0f87a1a3364","url":"tw_stocks/2903.json"},{"revision":"9f1a02e92c72deb9a789697c58bfee42","url":"tw_stocks/2901.json"},{"revision":"7f9abccb7e2ed54a696dbe5a6505bb6c","url":"tw_stocks/2897.json"},{"revision":"69d5f54aedfd5fbf6b41f52338a6c01b","url":"tw_stocks/2892.json"},{"revision":"84b2ff0fda6f472ee84dc130785c29e4","url":"tw_stocks/2891.json"},{"revision":"56e2e2ab3cf341421fc8a569269a1e78","url":"tw_stocks/2890.json"},{"revision":"87db4f570e990339467ab11b3e1d3bc6","url":"tw_stocks/2889.json"},{"revision":"7e785c04cf26135ee20e39c2d1f21bf7","url":"tw_stocks/2887.json"},{"revision":"d829a95231dc0944ea2a4202751b5818","url":"tw_stocks/2886.json"},{"revision":"0508b105e2e0d3172576a5a7e740f9a3","url":"tw_stocks/2885.json"},{"revision":"ab2e3aedbecd805ca67279c506273eb5","url":"tw_stocks/2884.json"},{"revision":"8abbb6493575d62bd80c527dd883fbd3","url":"tw_stocks/2883.json"},{"revision":"1920d4ef1ebb4bb09bd335422db50bad","url":"tw_stocks/2882.json"},{"revision":"79b21d37195716d7f086d0f3d616de1e","url":"tw_stocks/2881.json"},{"revision":"86df4ab20e5806975a149e7e6e37a5d7","url":"tw_stocks/2880.json"},{"revision":"05ca02105cc180b13f1cc5d2e1a49b7d","url":"tw_stocks/2867.json"},{"revision":"1d398492b3aba4705a508d4de863bda9","url":"tw_stocks/2855.json"},{"revision":"f3addf3d9b9d4028f23551a3a4f7d757","url":"tw_stocks/2852.json"},{"revision":"88d26f15735aa73bca9389fab006591f","url":"tw_stocks/2851.json"},{"revision":"876589625b80359ae8c59068b2abcc0c","url":"tw_stocks/2850.json"},{"revision":"c74536826725a964b2b0d2faa60754ad","url":"tw_stocks/2849.json"},{"revision":"e4b9b793836e2192d7433cfa40f528d9","url":"tw_stocks/2845.json"},{"revision":"e509bab3b3a4582f188c816a79134617","url":"tw_stocks/2838.json"},{"revision":"4cc648189574daf650da1738bffb3031","url":"tw_stocks/2836.json"},{"revision":"b0116e21a6f24fa8b23566f8e0973133","url":"tw_stocks/2834.json"},{"revision":"b5ed8650f6f9c17ac2de4bffc04bfbc8","url":"tw_stocks/2832.json"},{"revision":"79fb47d1a96ed4aed5aa1d1d73e8d21f","url":"tw_stocks/2820.json"},{"revision":"e9887fd5b24207c50ede5dc5e05e8fda","url":"tw_stocks/2816.json"},{"revision":"7cf46926e87ee7ed8da4900bde2b70c5","url":"tw_stocks/2812.json"},{"revision":"1f797698aedfe1013091ea93e6dd2f3e","url":"tw_stocks/2801.json"},{"revision":"a1732883feefad0846d78e74e826e59f","url":"tw_stocks/2762.json"},{"revision":"f0ffc74d78ce3d487e3348d368a43db1","url":"tw_stocks/2753.json"},{"revision":"c2673e7f2b35273942e1109c722acf90","url":"tw_stocks/2748.json"},{"revision":"b5b629246d20c09da8c0934f6b2a0d9d","url":"tw_stocks/2739.json"},{"revision":"06a2056ee32d2225de106e4b99d5ea92","url":"tw_stocks/2731.json"},{"revision":"15cce5d589e84e8b50add2dea6a5cf71","url":"tw_stocks/2727.json"},{"revision":"ec4e5bbadebd908fc722e2568bd9bde7","url":"tw_stocks/2723.json"},{"revision":"80fca08a445b04b466ccb4cecc754d93","url":"tw_stocks/2722.json"},{"revision":"eae7c44977fc144fb589b05befff99b7","url":"tw_stocks/2712.json"},{"revision":"0de1654aa969812a2951340886a538fe","url":"tw_stocks/2707.json"},{"revision":"676783ed4cf1017e1dc2f5630f3ec7b0","url":"tw_stocks/2706.json"},{"revision":"55a0073e66fd2bca61342ac6aeeaf5f2","url":"tw_stocks/2705.json"},{"revision":"b7ae4e8a25180a9ed49e109a5d134021","url":"tw_stocks/2704.json"},{"revision":"24ff11613ca18777ce0b55720c544d32","url":"tw_stocks/2702.json"},{"revision":"0d6b5b97dbef410a2cc6f61c38407a92","url":"tw_stocks/2701.json"},{"revision":"cddca314e8cae92404853da56ce239ba","url":"tw_stocks/2646.json"},{"revision":"61fb4a52e2fd3845c10a1c8218a25dd0","url":"tw_stocks/2645.json"},{"revision":"9a51294ad0425916156cc8a42913c2f9","url":"tw_stocks/2642.json"},{"revision":"184a91fd7f2bfdaff821369a6dacaa41","url":"tw_stocks/2637.json"},{"revision":"70c4db9c16abbb70f00a680d43c988d1","url":"tw_stocks/2636.json"},{"revision":"72abef7884a0e28fbcf91674d310513f","url":"tw_stocks/2634.json"},{"revision":"5b5b5e2b01b11613fe23a04f80b2dec4","url":"tw_stocks/2633.json"},{"revision":"5da16998ab15c7fd7cca8028fd55f04a","url":"tw_stocks/2630.json"},{"revision":"ea73a94067192657d31bd295aba66830","url":"tw_stocks/2618.json"},{"revision":"094bd018b8971fbf1865a5877426531f","url":"tw_stocks/2617.json"},{"revision":"51f664e780a414ad2c4b120513eb4f51","url":"tw_stocks/2616.json"},{"revision":"046052ff87b68e47f887425b477c3fdf","url":"tw_stocks/2615.json"},{"revision":"8b2c90df5cbb5859dcbb298368f8711f","url":"tw_stocks/2614.json"},{"revision":"7c635a107f0b7408150efd9dcade70bb","url":"tw_stocks/2613.json"},{"revision":"2a0da9ccd687ba36f818bab5dba81ec9","url":"tw_stocks/2612.json"},{"revision":"7edce3de1f2daef1d62abf0577a3c3c1","url":"tw_stocks/2611.json"},{"revision":"cc392def89277ceede9abaadfaddfad6","url":"tw_stocks/2610.json"},{"revision":"bb20b656e8ffdd8b71a183075031aca6","url":"tw_stocks/2609.json"},{"revision":"3c4fa49992a82df0fc181554998bc09a","url":"tw_stocks/2608.json"},{"revision":"91d105125325480ed733d94eae1d024d","url":"tw_stocks/2607.json"},{"revision":"881af250d73bb448d1fa469a56989f1a","url":"tw_stocks/2606.json"},{"revision":"7f751b56296bfa69093c7dae4107e6c7","url":"tw_stocks/2605.json"},{"revision":"a4a0a9cd064c92ba8f3defc5f1363a04","url":"tw_stocks/2603.json"},{"revision":"84bca197891e3b200b1491e022e3c7d3","url":"tw_stocks/2601.json"},{"revision":"6dcbf024570089dc9908e19864899020","url":"tw_stocks/2597.json"},{"revision":"e22ff1bf137d587d756d0c6e381a8b8c","url":"tw_stocks/2548.json"},{"revision":"58a5958f52af2fbbc1ecc63364b0bb8a","url":"tw_stocks/2547.json"},{"revision":"9fff5262ce5c3efa554ee9ef2c77499e","url":"tw_stocks/2546.json"},{"revision":"ed132b61025e258606bcc880397b1683","url":"tw_stocks/2545.json"},{"revision":"8b96838c9e771f06c20b48a90af3828f","url":"tw_stocks/2543.json"},{"revision":"7836c92cc3f070e8c901f4e874b75e97","url":"tw_stocks/2542.json"},{"revision":"7782bbd03d49e9235da9b61337e89f31","url":"tw_stocks/2540.json"},{"revision":"be490c7b9aebed1fa3f8391fbf8b623e","url":"tw_stocks/2539.json"},{"revision":"128674b5ccd82a2fae6346b46d57714d","url":"tw_stocks/2538.json"},{"revision":"5ad4e4c37b02bcaebf436b0a46300e32","url":"tw_stocks/2537.json"},{"revision":"f85bc3c8126e1ede1ed5c146e28f7e35","url":"tw_stocks/2536.json"},{"revision":"213fa7d2a5f5c9be69099c86a31c9b5d","url":"tw_stocks/2535.json"},{"revision":"ff3a68869db17ca12eae730b39154eff","url":"tw_stocks/2534.json"},{"revision":"08e4c48631617b7db874323def0f03b4","url":"tw_stocks/2530.json"},{"revision":"dd68e528f4cc0c7870cfde824ff8113f","url":"tw_stocks/2528.json"},{"revision":"cd53cdf012b7e6f926801caf5a1e89c7","url":"tw_stocks/2527.json"},{"revision":"d1e3a03f10857d851c275a0357fe4b6c","url":"tw_stocks/2524.json"},{"revision":"4a3250803810624dbc6bbd21138d4532","url":"tw_stocks/2520.json"},{"revision":"3f8b342fdbed67f0a9a5fabbe90424ba","url":"tw_stocks/2516.json"},{"revision":"30b792110d609a65925ece1e1389319e","url":"tw_stocks/2515.json"},{"revision":"c4dfebc570ea4f4d72a68f9265d8e4d5","url":"tw_stocks/2514.json"},{"revision":"13d9181e1002020e9264a3994d953bca","url":"tw_stocks/2511.json"},{"revision":"3235ca0d9fa83f494740537db3e5f0e0","url":"tw_stocks/2509.json"},{"revision":"9240035e657adb37392e44ae6ac3b65b","url":"tw_stocks/2506.json"},{"revision":"0014dbed0967cef13ec1897c7563be3a","url":"tw_stocks/2505.json"},{"revision":"40455c3018c8eaa32b2e6926eb52c5e7","url":"tw_stocks/2504.json"},{"revision":"42d6bcea77d1e4c29354ae0e5dff5484","url":"tw_stocks/2501.json"},{"revision":"a45232efe0b65a3a2841f0f2c423a07b","url":"tw_stocks/2498.json"},{"revision":"5fb7972cd7d8d47f4064de027d1ea6d9","url":"tw_stocks/2497.json"},{"revision":"359a268b52ee0ae3c55d89a7e7e3997e","url":"tw_stocks/2496.json"},{"revision":"3ce957bc86ecaf5ca83d2ce6a31875ca","url":"tw_stocks/2495.json"},{"revision":"3d7c4f66fcc1bd9392107402e57fea73","url":"tw_stocks/2493.json"},{"revision":"2026b78d0694ba84daf75b4d2b6d2f95","url":"tw_stocks/2492.json"},{"revision":"f97ae45412ebee6b677f2146ebdc3262","url":"tw_stocks/2491.json"},{"revision":"9998d7f582e64823684cc3700424b077","url":"tw_stocks/2489.json"},{"revision":"7cc1ab5df2a253ce3d3588544b81f32b","url":"tw_stocks/2488.json"},{"revision":"0c289d479833402af465bdcd272f3695","url":"tw_stocks/2486.json"},{"revision":"886e1caacddb3123bace88f252e7b57c","url":"tw_stocks/2485.json"},{"revision":"4a9178f3f52cedc1a81858dd2edfac78","url":"tw_stocks/2484.json"},{"revision":"3233459b512518baa0a91a7ceb5242aa","url":"tw_stocks/2483.json"},{"revision":"35d80f508d438a0d310bc1c3745a6ca2","url":"tw_stocks/2482.json"},{"revision":"bfc4068c05f4c7e90758913f16193b62","url":"tw_stocks/2481.json"},{"revision":"88f8fefe7f3561550fbea4205d8b20b7","url":"tw_stocks/2480.json"},{"revision":"192b026b5768e19a899a94fe55493d62","url":"tw_stocks/2478.json"},{"revision":"274a8dc48520410e90bfa6e84ab88070","url":"tw_stocks/2477.json"},{"revision":"f86267f24cdad238c5cfbd68929dacd8","url":"tw_stocks/2476.json"},{"revision":"68c2f7fe629c6967f745b929436d2a84","url":"tw_stocks/2474.json"},{"revision":"394a009ec8f415321e531295714dfac5","url":"tw_stocks/2472.json"},{"revision":"22eb0419b6d0fdf33c2a55c4abf2bfa3","url":"tw_stocks/2471.json"},{"revision":"e1312071e0f26e9e0192397ea1947bc8","url":"tw_stocks/2468.json"},{"revision":"255812a5b6af65a2b89a1c3f4d79ea2f","url":"tw_stocks/2467.json"},{"revision":"e12a52dd5f8f0a04514a3e2b6e3a902b","url":"tw_stocks/2466.json"},{"revision":"0036cd85181afcd8cfdfba3c5a6a2c67","url":"tw_stocks/2465.json"},{"revision":"1959a5429471fd5ec806626acab6d0fd","url":"tw_stocks/2464.json"},{"revision":"5ed3f93f3466529348a05aeb9a965420","url":"tw_stocks/2462.json"},{"revision":"6f25aaff7122f6aabd3a67e2d2878b3a","url":"tw_stocks/2461.json"},{"revision":"9c0ab8324fe44e049cf4e4eb0574c648","url":"tw_stocks/2460.json"},{"revision":"6749b5a1ddaea02c8fea581842e2d0d1","url":"tw_stocks/2459.json"},{"revision":"72b884664757f46fa204b336c438dc1f","url":"tw_stocks/2458.json"},{"revision":"c0d031e59794b7e39f7eb2d9d74166bf","url":"tw_stocks/2457.json"},{"revision":"8f4806e3697b7e96370881f0ea603f47","url":"tw_stocks/2455.json"},{"revision":"bd3425f0f5316e11af2bbdb4095940bb","url":"tw_stocks/2454.json"},{"revision":"fef4ff12ed103f1fe0546bc5790e039e","url":"tw_stocks/2453.json"},{"revision":"15c79e928e60dc44a9725dd736806733","url":"tw_stocks/2451.json"},{"revision":"63a513ac52fe2a37517ff86c6cdf55df","url":"tw_stocks/2450.json"},{"revision":"132a007107a6ae0143c3bc3a9d88477a","url":"tw_stocks/2449.json"},{"revision":"e6b6990b5ff95fb1a23428235b8069ce","url":"tw_stocks/2444.json"},{"revision":"47f1b77e8da6e78dc6e97090af63f201","url":"tw_stocks/2442.json"},{"revision":"ad423862afcc8f17334dea2070fcb742","url":"tw_stocks/2441.json"},{"revision":"bb850e41e4393c4b318e098ae3d312ac","url":"tw_stocks/2440.json"},{"revision":"0c7470c52b30c81a05a1adc29eaf141e","url":"tw_stocks/2439.json"},{"revision":"58fd14fb8bfc74d6e4f37385f62703b3","url":"tw_stocks/2438.json"},{"revision":"2692b1bcfc4861943d35138ed14d37b0","url":"tw_stocks/2436.json"},{"revision":"dc9955fb34cc1a38a0a5819e369c9559","url":"tw_stocks/2434.json"},{"revision":"99c07fc1658468c5a9d5da15b44c0aeb","url":"tw_stocks/2433.json"},{"revision":"64e48427f1e8eded4c215b946f3c73e1","url":"tw_stocks/2431.json"},{"revision":"e4295560ff2acbd54b7321eb3025abb2","url":"tw_stocks/2430.json"},{"revision":"3681557521ea43b8bab6ab7f328f9af8","url":"tw_stocks/2429.json"},{"revision":"4eaab8b9c92eb42c3a7093f90ac52117","url":"tw_stocks/2428.json"},{"revision":"48ac2185d3ab04858097285ebc8b7b05","url":"tw_stocks/2427.json"},{"revision":"27193011a436dd9cad46944fbd0f0a65","url":"tw_stocks/2426.json"},{"revision":"cc10530fe2f6aa4c6e32cc5782c85ffa","url":"tw_stocks/2425.json"},{"revision":"9d134498def9c5f3f636374f3dfb2c31","url":"tw_stocks/2424.json"},{"revision":"77ee93538d35caa60fd56107a08e8bb7","url":"tw_stocks/2423.json"},{"revision":"7eec2c4dd5f35a3dffe5e506c3dd9983","url":"tw_stocks/2421.json"},{"revision":"71b0d1a5c2e5aaf6c6fe4e8fe73f3307","url":"tw_stocks/2420.json"},{"revision":"c247b3d7f922d6aed3804a698462bb35","url":"tw_stocks/2419.json"},{"revision":"02fc7fbea100c51800f911b7d423911e","url":"tw_stocks/2417.json"},{"revision":"6b3181a2b9ae725fec75df178435a798","url":"tw_stocks/2415.json"},{"revision":"cc830ff7930c34e8aab8571b612f3940","url":"tw_stocks/2414.json"},{"revision":"360803202a8565f2017357aba61baeaa","url":"tw_stocks/2413.json"},{"revision":"7c8faade862dbdd79681c46547ca5cdb","url":"tw_stocks/2412.json"},{"revision":"1edbdc0d3547feda2f3bd9db98b03194","url":"tw_stocks/2409.json"},{"revision":"97c21bde35cf34668641617def499cd3","url":"tw_stocks/2408.json"},{"revision":"f145cbf655a656478f467458831ff94e","url":"tw_stocks/2406.json"},{"revision":"adc450dfc13823490a4c311a721a166a","url":"tw_stocks/2405.json"},{"revision":"2dcfa59c59dd2e8df6afa8d4d2b330e6","url":"tw_stocks/2404.json"},{"revision":"a9a4c6e27ab5e0eeaf225ba7dd07b0aa","url":"tw_stocks/2402.json"},{"revision":"83d3f97e3835f1b46961b751e19e1fb6","url":"tw_stocks/2401.json"},{"revision":"ba26fe74b89db1d5c815af6b8501e13a","url":"tw_stocks/2399.json"},{"revision":"26d6b8f2f2cc4d54c82a7dcf844fb921","url":"tw_stocks/2397.json"},{"revision":"5b7bb691a5e49a2d49272c2085b481de","url":"tw_stocks/2395.json"},{"revision":"b280f45f6b86209dad1bfa8101bbf6e9","url":"tw_stocks/2393.json"},{"revision":"6a378f47447b0135207306ec3e1ba10f","url":"tw_stocks/2392.json"},{"revision":"82f96f59e4017e4c97b8080116b7b686","url":"tw_stocks/2390.json"},{"revision":"e34597158c2fcbd96a3395f03a346ddc","url":"tw_stocks/2388.json"},{"revision":"d622b0501dda017335ce52c42c07901c","url":"tw_stocks/2387.json"},{"revision":"59b8bf0fb8220160a7170e34f08596f4","url":"tw_stocks/2385.json"},{"revision":"c364fc0257ccdeea282d78f8f80ca3d3","url":"tw_stocks/2383.json"},{"revision":"11023fe6f6450c9aa86da8d1991fa88d","url":"tw_stocks/2382.json"},{"revision":"1440f71831212def180e3470e0d92bdb","url":"tw_stocks/2380.json"},{"revision":"b165f0c801d53e0bf2c78662098d45a8","url":"tw_stocks/2379.json"},{"revision":"4ddff7b1c14d59d84e2f946ba180539b","url":"tw_stocks/2377.json"},{"revision":"a20819c4c42589452cf3acc3f16ed57c","url":"tw_stocks/2376.json"},{"revision":"c9d693081b18d149f3225e3399640ed9","url":"tw_stocks/2375.json"},{"revision":"1dee483814343837e013aabb9c87da3d","url":"tw_stocks/2374.json"},{"revision":"80906abd738076d95b50e7837d6f3f77","url":"tw_stocks/2373.json"},{"revision":"fafdc37862c33ed50677554bfccbc3cb","url":"tw_stocks/2371.json"},{"revision":"796efa315a64697e685f405c3de57f2f","url":"tw_stocks/2369.json"},{"revision":"495c0cc9e929f7939886e2e09e7d5d2d","url":"tw_stocks/2368.json"},{"revision":"fc594fafa3a349f5af6a16561353a878","url":"tw_stocks/2367.json"},{"revision":"639db01b4adce472fee6ba6b35024c63","url":"tw_stocks/2365.json"},{"revision":"20ccf407a85022f8839a63c824546ba8","url":"tw_stocks/2364.json"},{"revision":"efa027eeafae6707cc4b8b1ece014c1b","url":"tw_stocks/2363.json"},{"revision":"abc7558e33fe44d23531ffaf0e5f8cca","url":"tw_stocks/2362.json"},{"revision":"6daaded2bfa1880181e94e77b1db0ce4","url":"tw_stocks/2360.json"},{"revision":"e98c0118ebc65b9efa23d5606eef79bb","url":"tw_stocks/2359.json"},{"revision":"fb984382b645459c2231a3731bac51ce","url":"tw_stocks/2357.json"},{"revision":"49e4f27bef4d34fc8e874f339233fb3d","url":"tw_stocks/2356.json"},{"revision":"ee2251a24e260d693fd05e57e1660d3c","url":"tw_stocks/2355.json"},{"revision":"ff8e4cb499e55547e6008147ca59e121","url":"tw_stocks/2354.json"},{"revision":"63ebdb88a38e4dfecc8824d579c0c569","url":"tw_stocks/2353.json"},{"revision":"10ea2d1761e9d12e39a850ab787df5db","url":"tw_stocks/2352.json"},{"revision":"ec8a52d7be293793fcb7320d59a6abf6","url":"tw_stocks/2351.json"},{"revision":"d6eb91a2af24da8443fdd5c3ea6dda8c","url":"tw_stocks/2349.json"},{"revision":"eb97041e2954a640864ae3235db88a04","url":"tw_stocks/2348.json"},{"revision":"65673eee0d4aabf4e6c71bfe5d4d500c","url":"tw_stocks/2347.json"},{"revision":"e24ea822aa689b4bfd755ca36fef2532","url":"tw_stocks/2345.json"},{"revision":"e9263a9ab6a266537a316579d2c79d42","url":"tw_stocks/2344.json"},{"revision":"ceaed0bf0a12ed4512bd84ccefabb975","url":"tw_stocks/2342.json"},{"revision":"b315781bd63ccbba09694b3c0029e6c6","url":"tw_stocks/2340.json"},{"revision":"1610f50cbef286175e533cbd0abd56fd","url":"tw_stocks/2338.json"},{"revision":"06939ae7926c3c8751e5030ccc3d24ff","url":"tw_stocks/2337.json"},{"revision":"0468c9f2a04accae22a2db4ac74b8762","url":"tw_stocks/2332.json"},{"revision":"0a915602f879f453f78327c719b5637b","url":"tw_stocks/2331.json"},{"revision":"6ed317de4cfad8b051548f2d370499e0","url":"tw_stocks/2330.json"},{"revision":"ec8941d32c2452887fb13b9f83244d6e","url":"tw_stocks/2329.json"},{"revision":"3f33dbb60ace9220e8540b8758cab290","url":"tw_stocks/2328.json"},{"revision":"36191b1c98ea729ba30624bb5e8d019a","url":"tw_stocks/2327.json"},{"revision":"61a6ac65e270d2b667df0a177e155c8b","url":"tw_stocks/2324.json"},{"revision":"b7f9801bf6fa2f9affe8fa62e8da08fd","url":"tw_stocks/2323.json"},{"revision":"ac67223ed1ef94cc0620d47140e26231","url":"tw_stocks/2321.json"},{"revision":"ecb6acc2e9a47d9480663513da7f8d4f","url":"tw_stocks/2317.json"},{"revision":"21ba82dbfa5b7fa39fcf7a19227bdf5f","url":"tw_stocks/2316.json"},{"revision":"dedd33d367ca6a39cc664da1126656e7","url":"tw_stocks/2314.json"},{"revision":"e1ed52011103b35450ac122a4797d5de","url":"tw_stocks/2313.json"},{"revision":"e93d476efad0a53ea687abb2e08eb798","url":"tw_stocks/2312.json"},{"revision":"d017b81001d146410be6393554bcdc4f","url":"tw_stocks/2308.json"},{"revision":"1c4e7ed16f65f31bf237971b9b469799","url":"tw_stocks/2305.json"},{"revision":"cb40fba2d0beab19067c7ae32ac620b3","url":"tw_stocks/2303.json"},{"revision":"442abc8cc95d5d39a93783cb28ecc34f","url":"tw_stocks/2302.json"},{"revision":"f82f4bca229f238a9af7dfa70f6e79ba","url":"tw_stocks/2301.json"},{"revision":"9879755a8e2f6f81d0657c89cd707a45","url":"tw_stocks/2250.json"},{"revision":"903fe0eb70f415773c80542fcd027a19","url":"tw_stocks/2248.json"},{"revision":"9c98d44031f18a0cfb6d6a38ed577570","url":"tw_stocks/2247.json"},{"revision":"1d50cf639155ec1d852022d874b418d1","url":"tw_stocks/2243.json"},{"revision":"d565abbfb3089d3f951d1ef5eeea744c","url":"tw_stocks/2241.json"},{"revision":"8589615b5af1b970df687a71b7012329","url":"tw_stocks/2239.json"},{"revision":"de8e9eec980acc4929d9c398d7e40c09","url":"tw_stocks/2236.json"},{"revision":"23f7a81792af08e857bd72a2ab633b38","url":"tw_stocks/2233.json"},{"revision":"29e6091d42ffd113e3283e40e7d86b3a","url":"tw_stocks/2231.json"},{"revision":"242e3045edc9ca0753fa46f0e2059785","url":"tw_stocks/2228.json"},{"revision":"da5e8347a1d23adc9acc4ebb028cd931","url":"tw_stocks/2227.json"},{"revision":"5d2b60977c7f7b8a28231d7af4916531","url":"tw_stocks/2211.json"},{"revision":"8c7f676b62d58050b01dcbeeb828709c","url":"tw_stocks/2208.json"},{"revision":"3b8b3b432d328c8177a06fe285d56116","url":"tw_stocks/2207.json"},{"revision":"483efe5652301897e5d03d1464e4f40d","url":"tw_stocks/2206.json"},{"revision":"29746e11e0ba338c564a071b5277ee8e","url":"tw_stocks/2204.json"},{"revision":"a8deeaca6a0a1008a3101c5e71a23801","url":"tw_stocks/2201.json"},{"revision":"d741bd79c571f7bf201987730bbf2929","url":"tw_stocks/2115.json"},{"revision":"b5c8026c1e015567d819eba35c47ad75","url":"tw_stocks/2114.json"},{"revision":"c6b3124af5c15537383882f4e91f5476","url":"tw_stocks/2109.json"},{"revision":"3cf5418cf5073c624afcd2e6c72238ee","url":"tw_stocks/2108.json"},{"revision":"b63fd65d882f9e982b550ded7cf63e90","url":"tw_stocks/2107.json"},{"revision":"0ca39b608c4e48995652795ca2eb062b","url":"tw_stocks/2106.json"},{"revision":"85b7f21c78be96bcdd8c5323c8db00a6","url":"tw_stocks/2105.json"},{"revision":"f048924518c5cd88ec71ab9b7fc19551","url":"tw_stocks/2104.json"},{"revision":"e3765d3bfdc4a929efa485b1fa34b453","url":"tw_stocks/2103.json"},{"revision":"1cfae49a8106f1a9aeb487bc0bda085a","url":"tw_stocks/2102.json"},{"revision":"0cc1e8490f15d3132d8c27df4de0f8a9","url":"tw_stocks/2101.json"},{"revision":"1eff0fd74b0b3b9e977b3a17f509c4f4","url":"tw_stocks/2072.json"},{"revision":"c8525a50871728bc6f5e6913430bb13d","url":"tw_stocks/2069.json"},{"revision":"5e5802d317b7222bc60ac8bb20669571","url":"tw_stocks/2062.json"},{"revision":"48a13fd6b77ad504af1aa1d65e3504d5","url":"tw_stocks/2059.json"},{"revision":"055881d8e8b7363144a2cf1a9d99dcb3","url":"tw_stocks/2049.json"},{"revision":"f316854c483f695cd6edb552c53ca57e","url":"tw_stocks/2038.json"},{"revision":"bd5fd6f6bcfeaf813dc8483909bee6d6","url":"tw_stocks/2034.json"},{"revision":"2b007601b343e76e3c9340d1c8deebe4","url":"tw_stocks/2033.json"},{"revision":"20c6dee7665e12b631b39fa71b06eebd","url":"tw_stocks/2032.json"},{"revision":"8c0267b97b536ac6b5ae18b08a7dfc07","url":"tw_stocks/2031.json"},{"revision":"3cd499fc517a91c720f74cdf2eab710a","url":"tw_stocks/2030.json"},{"revision":"71b1a62491f7d009490d4ffa401308c9","url":"tw_stocks/2029.json"},{"revision":"ee6b2080d5a95cf61ea202adf805e548","url":"tw_stocks/2028.json"},{"revision":"e4e4f5e62c82aa08f07bb8a124ebfc90","url":"tw_stocks/2027.json"},{"revision":"79148883060d1085ed0330632e2e6913","url":"tw_stocks/2025.json"},{"revision":"4ebf910d6b525356f4ffdd46095011b0","url":"tw_stocks/2024.json"},{"revision":"7e3ebffa639fb251357bac93d46279c8","url":"tw_stocks/2023.json"},{"revision":"41967820197bf5b74f7f439a9bb392da","url":"tw_stocks/2022.json"},{"revision":"c142ed5b0d096b6db1b7da89de3ce173","url":"tw_stocks/2020.json"},{"revision":"f3760fe39305230b9531cfec727771f6","url":"tw_stocks/2017.json"},{"revision":"5f80790747d7ee91a9d9651b58dcfee4","url":"tw_stocks/2015.json"},{"revision":"315fc563902a2f3dae660428df344f76","url":"tw_stocks/2014.json"},{"revision":"79334273846f6ac821267156f56477e8","url":"tw_stocks/2013.json"},{"revision":"ab509416dbd124d74f298e6c315fdbcf","url":"tw_stocks/2012.json"},{"revision":"9147d80bfe83bec978e3d2b445f8c19b","url":"tw_stocks/2010.json"},{"revision":"6a426d5ee2d4b135b6bd2d8af9aad8eb","url":"tw_stocks/2009.json"},{"revision":"9c60eb6b10ee52f4196b4b9c2920a58c","url":"tw_stocks/2008.json"},{"revision":"f1aadaab61ef330c9c69106ee0290794","url":"tw_stocks/2007.json"},{"revision":"cf59f47277ad66d47deecbb51b5c3b89","url":"tw_stocks/2006.json"},{"revision":"7fea1bac3517dba908edbe586637f913","url":"tw_stocks/2002.json"},{"revision":"23112de87c0f18d6a6af9ac16cb6d99d","url":"tw_stocks/1909.json"},{"revision":"b5240bd80f08d5227958078c6d227fea","url":"tw_stocks/1907.json"},{"revision":"7a9cd3621591d12e1d8d5592d36476a8","url":"tw_stocks/1906.json"},{"revision":"0bed35aad7d6bbdf418175e85a771ac9","url":"tw_stocks/1905.json"},{"revision":"eb56d9bad68825fec8692d6db48c4317","url":"tw_stocks/1904.json"},{"revision":"0bda2b19f4b0501ce80afe042112b649","url":"tw_stocks/1903.json"},{"revision":"aabdc94a97ad19077f8f582497254031","url":"tw_stocks/1817.json"},{"revision":"c1810d61651eba162074375a107299c6","url":"tw_stocks/1810.json"},{"revision":"e7a0d70ebedb931543d28208e7a92727","url":"tw_stocks/1809.json"},{"revision":"60afab3166fa8d8b720b2d43bc552c9e","url":"tw_stocks/1808.json"},{"revision":"b2c9ef3570caa036bb77562ee25d43f4","url":"tw_stocks/1806.json"},{"revision":"9ad018a290a8dc28d68e7e067c6985ee","url":"tw_stocks/1805.json"},{"revision":"b1019f01afb01bfacb3eb71c5549bb10","url":"tw_stocks/1802.json"},{"revision":"37d15912b86f23d63a92c06c3e3659e7","url":"tw_stocks/1795.json"},{"revision":"59ab2cf4b80f9da196c887c8e99998e5","url":"tw_stocks/1789.json"},{"revision":"d1f1092ccd192bf650174816efa01a15","url":"tw_stocks/1786.json"},{"revision":"e75b6e3c491c0a7c84e1b6d18ca04dab","url":"tw_stocks/1783.json"},{"revision":"fd104388fab742a5692a9f70a09d8321","url":"tw_stocks/1776.json"},{"revision":"0f3682e87929534a1fc3380f98151c0e","url":"tw_stocks/1773.json"},{"revision":"8df4955ccabc2cf188408134dd5ab965","url":"tw_stocks/1762.json"},{"revision":"12cffbef2f6c117a8b7024aaef7e918a","url":"tw_stocks/1760.json"},{"revision":"edeef066a763e2c1053fc763e5feea77","url":"tw_stocks/1752.json"},{"revision":"27115285aa51e1b7df2c70a549f10bb2","url":"tw_stocks/1737.json"},{"revision":"5f502d002f704fac86da9b7107a9b770","url":"tw_stocks/1736.json"},{"revision":"3d923405981289e41c111273646e97e0","url":"tw_stocks/1735.json"},{"revision":"b23223bcc7dca33ede5512af97590efc","url":"tw_stocks/1734.json"},{"revision":"3a8f5998921f0771d1431938d95dbb6a","url":"tw_stocks/1733.json"},{"revision":"9efb554a50c3f4386ffa028024f78723","url":"tw_stocks/1732.json"},{"revision":"55c77b15331700b47898cec2b37cf9e6","url":"tw_stocks/1731.json"},{"revision":"5e200a30b1b575c0d957a082cf40f115","url":"tw_stocks/1730.json"},{"revision":"d43926f9004c64c322022aa2a9b87b6d","url":"tw_stocks/1727.json"},{"revision":"e80ebfc6c0dbd1f1e6ebea5ac77fbbb0","url":"tw_stocks/1726.json"},{"revision":"f96173a9e1b3b5f417b3271f1feb1f9b","url":"tw_stocks/1725.json"},{"revision":"45cb897fd5f95d99f006c59d344352e3","url":"tw_stocks/1723.json"},{"revision":"9e917ada5297862033a0a1dcd0457488","url":"tw_stocks/1722.json"},{"revision":"cdbb2b286c859b45235a88e151ec8b5d","url":"tw_stocks/1721.json"},{"revision":"a4182da5c31bf7043df01d3f6776e66b","url":"tw_stocks/1720.json"},{"revision":"1e6a23a9c274ca86d443e8ddeb1a5f87","url":"tw_stocks/1718.json"},{"revision":"cc054d8c2c9b261f650e84029194d9ee","url":"tw_stocks/1717.json"},{"revision":"c91423c5668abac8a1d90f52e62c78c9","url":"tw_stocks/1714.json"},{"revision":"d246e2373d2302f8480de0ac7c3764b9","url":"tw_stocks/1713.json"},{"revision":"6d867bd26861a7c529e10fde67eb31c0","url":"tw_stocks/1712.json"},{"revision":"cf3b5814572995e82d07d7a3fd6a795f","url":"tw_stocks/1711.json"},{"revision":"d35dea7377c56f6c4217d1eef1423ecf","url":"tw_stocks/1710.json"},{"revision":"b658d8bf4f82f676b665c89a78b2a0cc","url":"tw_stocks/1709.json"},{"revision":"35aa0403c1daad284b80263d5a4ee2e5","url":"tw_stocks/1708.json"},{"revision":"0cb82aa909c582c6ccd3c9c7b8f8191b","url":"tw_stocks/1707.json"},{"revision":"deeb810e17e4d89c6c127139b7cbefa9","url":"tw_stocks/1702.json"},{"revision":"f2f9cf0b1a29fadff66e6d828092fde2","url":"tw_stocks/1626.json"},{"revision":"2500378f967fbd9c623b34b79fd2c142","url":"tw_stocks/1623.json"},{"revision":"20fffc9b8a816968d6380809af495c44","url":"tw_stocks/1618.json"},{"revision":"e8541a96e0b3a82a38b4552b2c595003","url":"tw_stocks/1617.json"},{"revision":"09238e257adfd911f73d583662247cee","url":"tw_stocks/1616.json"},{"revision":"c8a12f83d638cd3d1c26880448a75307","url":"tw_stocks/1615.json"},{"revision":"e845b226287e09b0bbf02fc0c8702dd7","url":"tw_stocks/1614.json"},{"revision":"c46c9466b6d26e32a614caf87da71290","url":"tw_stocks/1612.json"},{"revision":"da145d4737a0f657190796137919269e","url":"tw_stocks/1611.json"},{"revision":"708f3e3b36dcd8d1ce1f62318d345ee1","url":"tw_stocks/1609.json"},{"revision":"e72c35342f56fc2badf73728f82b32c1","url":"tw_stocks/1608.json"},{"revision":"a6c16359052d1c204d08a6ae76e75f79","url":"tw_stocks/1605.json"},{"revision":"d549e580c1d4cc202964bc48e06281ed","url":"tw_stocks/1604.json"},{"revision":"f0f32203f7c497c13737debbc58a6f3c","url":"tw_stocks/1603.json"},{"revision":"0affb3687b87684c5be2a41ff72cd4e3","url":"tw_stocks/1598.json"},{"revision":"5eb764aa8845a3f1b5ebb51dfc3c94a3","url":"tw_stocks/1597.json"},{"revision":"fdfd09956b837b5d013801c22795990a","url":"tw_stocks/1590.json"},{"revision":"8ab1e7f2d4ea048b41b1c7b67cd77f46","url":"tw_stocks/1589.json"},{"revision":"a970bba80c0552832e90408a278d8d5c","url":"tw_stocks/1587.json"},{"revision":"dd5fcf99c0359c4f2a7dbb2c68f57afa","url":"tw_stocks/1583.json"},{"revision":"252d3ece8277d9d61e0d80951952850e","url":"tw_stocks/1582.json"},{"revision":"05073254074ed013951d171b7c9f7e29","url":"tw_stocks/1568.json"},{"revision":"8405cb441c1d1a3b548b4298372835c9","url":"tw_stocks/1563.json"},{"revision":"5b86448448521bd96dda1e6bad3d54fd","url":"tw_stocks/1560.json"},{"revision":"7d0d9d524b7312daac4139b11d3818b9","url":"tw_stocks/1558.json"},{"revision":"98a6bb27d3a7214f8f8986dc872325e6","url":"tw_stocks/1541.json"},{"revision":"66238e022716bb9e6e35df3d8ab7be7f","url":"tw_stocks/1540.json"},{"revision":"1e96a3a5b988976d734e44ceef87cc0f","url":"tw_stocks/1539.json"},{"revision":"9aed0719b148814e87aa48abd950cfc8","url":"tw_stocks/1538.json"},{"revision":"d7409e4de9914a76012b318e3e7d79a5","url":"tw_stocks/1537.json"},{"revision":"60cb12ddb122b843b4fedf279e9cc277","url":"tw_stocks/1536.json"},{"revision":"a3aece1b89c302f1a98b0253061a205f","url":"tw_stocks/1535.json"},{"revision":"7ccc50bd75464d5813acdd611c705a91","url":"tw_stocks/1533.json"},{"revision":"d7098fc055a574713daae41fdae63799","url":"tw_stocks/1532.json"},{"revision":"380d5c6205d98427c7d1c69bc24f8c34","url":"tw_stocks/1531.json"},{"revision":"921f2f3f1713fb8a4de4408f8e70a408","url":"tw_stocks/1530.json"},{"revision":"fcfdffba35b7ae6d3888b2d9b2d9da47","url":"tw_stocks/1529.json"},{"revision":"f74bc5f1d32658346eaa50ed8f1ecb71","url":"tw_stocks/1528.json"},{"revision":"40bfb509817463ba902693443efbb380","url":"tw_stocks/1527.json"},{"revision":"80f4108135e2030d4f3841012cff7ed4","url":"tw_stocks/1526.json"},{"revision":"574578aed06f61c7a5a9a94391ee38e4","url":"tw_stocks/1525.json"},{"revision":"b4c91b5f8734e5ea985d5404f7d2e6fa","url":"tw_stocks/1524.json"},{"revision":"e9f4e28473ab19a2e21744de18badf39","url":"tw_stocks/1522.json"},{"revision":"669ce45de2fd5f01e5f93e20c10fbb7a","url":"tw_stocks/1521.json"},{"revision":"179956558d4b67faa528c00328ef9d79","url":"tw_stocks/1519.json"},{"revision":"5bffeaf423d6419422fd8dcb725f94f6","url":"tw_stocks/1517.json"},{"revision":"34ea98faa8aa68d5511884f1c2d2117f","url":"tw_stocks/1516.json"},{"revision":"2720a7c24f7e1ff1cc15f7a4eaa9f3b2","url":"tw_stocks/1515.json"},{"revision":"11da14b3147930beaa8e7125abc5fbc2","url":"tw_stocks/1514.json"},{"revision":"22cac2d9611acf39f7ecc4431d706ff8","url":"tw_stocks/1513.json"},{"revision":"9179154d1f0de992b4b76ec2f04226ba","url":"tw_stocks/1512.json"},{"revision":"646c7f9720ceb11d73ecac8aefd4b2f8","url":"tw_stocks/1506.json"},{"revision":"8cf8b80becfbdf3990c077bd3bd53ccc","url":"tw_stocks/1504.json"},{"revision":"43e43cf7769cdb43fb46de8e98afb286","url":"tw_stocks/1503.json"},{"revision":"c2ee6556e332f2668a49b2abf028aca0","url":"tw_stocks/1477.json"},{"revision":"3b73c0b2f737feeff7c1fa4b2f021de3","url":"tw_stocks/1476.json"},{"revision":"a4cd6dcf9bbb877b142fe88662985986","url":"tw_stocks/1475.json"},{"revision":"bc41b6505c640520d7c51c02b200b91a","url":"tw_stocks/1474.json"},{"revision":"ec6d737a929da927a526124570b6990f","url":"tw_stocks/1473.json"},{"revision":"9ce4af79d0eaf16c0ede0296bbc4f38b","url":"tw_stocks/1472.json"},{"revision":"93c1930b8e64438b23aa99a7138383db","url":"tw_stocks/1471.json"},{"revision":"b0a95849e4e59bdc7e5e75f164df734c","url":"tw_stocks/1470.json"},{"revision":"46795bd6bfaf498167a40b850e92ab17","url":"tw_stocks/1468.json"},{"revision":"5c38a31f1fc64bc8c886cc20d5ec5d5e","url":"tw_stocks/1467.json"},{"revision":"6e4aa7d8cb5b233083961ede9fe51a66","url":"tw_stocks/1466.json"},{"revision":"b1e77fc41d59ce036d657ee82f0b34f9","url":"tw_stocks/1465.json"},{"revision":"8f1cbafd9804af524cdb054c6622bd4b","url":"tw_stocks/1464.json"},{"revision":"50bc6c55bbfd94401cceae9fd5e18bd5","url":"tw_stocks/1463.json"},{"revision":"c6f8bd99000da3fa2a9e2b597d09be14","url":"tw_stocks/1460.json"},{"revision":"686a61494f78ce456c20ddaab6eaed53","url":"tw_stocks/1459.json"},{"revision":"b4a523a7c75b497d999549ed49adc054","url":"tw_stocks/1457.json"},{"revision":"287bbd7fb3340be37767261e752b4916","url":"tw_stocks/1456.json"},{"revision":"c7fef3ba4d275a9cb731038555eb5168","url":"tw_stocks/1455.json"},{"revision":"9dfa9b4197b12271a24d3edc6020e01d","url":"tw_stocks/1454.json"},{"revision":"ca93848347624ef026d17eb44f6fa552","url":"tw_stocks/1453.json"},{"revision":"8e6bdbc3284ddfa9d54805f88dae32c3","url":"tw_stocks/1452.json"},{"revision":"785e224623f229c727f1f8e926cfa434","url":"tw_stocks/1451.json"},{"revision":"9923d273f17298eaf40b77f7aabfd89e","url":"tw_stocks/1449.json"},{"revision":"4fc60b60b59791648c38d2e21ecc1249","url":"tw_stocks/1447.json"},{"revision":"d068f8c6e152d7c6ba41e43a0c17208a","url":"tw_stocks/1446.json"},{"revision":"acd395696a9d250cfa7ac20b2586ab95","url":"tw_stocks/1445.json"},{"revision":"7e2dae62590b54aaa17eab872d93302f","url":"tw_stocks/1444.json"},{"revision":"479aa9ea132fe102302658055c6d3d5b","url":"tw_stocks/1443.json"},{"revision":"df53deaac248c5d5eaab060ad4d79b1b","url":"tw_stocks/1442.json"},{"revision":"63bfc165fc3edbd9f7ae64d7b8fd6398","url":"tw_stocks/1441.json"},{"revision":"a33db04b55b572285280270d0e4dbac2","url":"tw_stocks/1440.json"},{"revision":"42ebd9a94fae15ea7ce048e3284c5ef9","url":"tw_stocks/1439.json"},{"revision":"6812b664d10c7abd8763c8f8aa81b283","url":"tw_stocks/1438.json"},{"revision":"92fe322e01a577354cb5d2fb8997a3d7","url":"tw_stocks/1437.json"},{"revision":"02f6479aede2da9752767e30a271d877","url":"tw_stocks/1436.json"},{"revision":"1e5eda409c1f57cc15fed8d9ed2312fe","url":"tw_stocks/1435.json"},{"revision":"74b24a50b172bec856c4a4e6e23b2420","url":"tw_stocks/1434.json"},{"revision":"ac6e53287789cf309fec0b0ae44fb222","url":"tw_stocks/1432.json"},{"revision":"bf4fc1aba70c12714265b31c01ed3c0d","url":"tw_stocks/1423.json"},{"revision":"e8d8842d29b9c51ccd34d3c7e0fe0994","url":"tw_stocks/1419.json"},{"revision":"7d8acf1521e1f8a6eedc82ad938bbd73","url":"tw_stocks/1418.json"},{"revision":"64ef2419e58a25c314d83bde16c91ada","url":"tw_stocks/1417.json"},{"revision":"5d51b1761b76015152cbb9ee338b6d83","url":"tw_stocks/1416.json"},{"revision":"97c1cda74369cf5edf7fb3ba5d0afe47","url":"tw_stocks/1414.json"},{"revision":"1c492603551f582e1fe01e6b2cf88c8d","url":"tw_stocks/1413.json"},{"revision":"b2225097ff4e015fa24191780e0db22a","url":"tw_stocks/1410.json"},{"revision":"1efc5863c642d3cafa75b2007dc7a8b6","url":"tw_stocks/1409.json"},{"revision":"9138437595428cbaa472d50037bf75df","url":"tw_stocks/1402.json"},{"revision":"b215bffc228cff81c9a228220e757962","url":"tw_stocks/1342.json"},{"revision":"6679fbc7a51f423365eb8cd9452c77b3","url":"tw_stocks/1341.json"},{"revision":"309ae8b8699d48f9cca27ebca6f5baf1","url":"tw_stocks/1340.json"},{"revision":"f286fd26d1bb5e35928467737317e902","url":"tw_stocks/1339.json"},{"revision":"b3f07382603549b5242a63c057e59d5e","url":"tw_stocks/1338.json"},{"revision":"d0f5c3e0e01b942f4bdde6547c50d98d","url":"tw_stocks/1337.json"},{"revision":"ca38ac4780c83e687cefa860612192f7","url":"tw_stocks/1326.json"},{"revision":"a582818a6a638c62869036646abee463","url":"tw_stocks/1325.json"},{"revision":"7c8b3e1ad225802f0f335c015794f338","url":"tw_stocks/1324.json"},{"revision":"4aa7820e1da2fbfa5eb5044e82eedf2b","url":"tw_stocks/1323.json"},{"revision":"878d171eed7a90902bf424c9b3249028","url":"tw_stocks/1321.json"},{"revision":"327af1185494d87f517b1fa2480b7cd3","url":"tw_stocks/1319.json"},{"revision":"9391c166484444d2087634f4dfa59723","url":"tw_stocks/1316.json"},{"revision":"2ae21229acc1bb1ada2e60aeaf9bca8b","url":"tw_stocks/1315.json"},{"revision":"d10a1db5a123a88e5985a18b60b89891","url":"tw_stocks/1314.json"},{"revision":"19941b2ad1a4e9a93716c73b66c9f113","url":"tw_stocks/1313.json"},{"revision":"c0ee94eb5b29acbe86fa4666a0fbf949","url":"tw_stocks/1312.json"},{"revision":"c0118a4a1b33ba9b40aad72c226a6007","url":"tw_stocks/1310.json"},{"revision":"da8f38b846f9fe0713b01defcbb318ae","url":"tw_stocks/1309.json"},{"revision":"2d5104c9da39d329cd543b37002953e3","url":"tw_stocks/1308.json"},{"revision":"ef9969065e4cef69ec969b7ecb1fe3c2","url":"tw_stocks/1307.json"},{"revision":"fc78e91572facc4db2d7f719aa0ad9a1","url":"tw_stocks/1305.json"},{"revision":"82bbd9a9d21353ffa2a9917e56e34ede","url":"tw_stocks/1304.json"},{"revision":"130dc1c503fed81047664a47894e9df7","url":"tw_stocks/1303.json"},{"revision":"fe88ee22faf3b735dba7e2a48adcc392","url":"tw_stocks/1301.json"},{"revision":"fcb7c2a98757bae821db229f0799d972","url":"tw_stocks/1256.json"},{"revision":"fc62fb5968f9a9a118b0d15be770bfcc","url":"tw_stocks/1236.json"},{"revision":"61e1a12f09aa15ff4f84c43e38c4a138","url":"tw_stocks/1235.json"},{"revision":"84b9838bc2fbce834e4a10a19c50ff4a","url":"tw_stocks/1234.json"},{"revision":"05f25dce366d76ac44b3ac514b70b678","url":"tw_stocks/1233.json"},{"revision":"b00bf10f6ce2b2e6c5401aaf70a42e86","url":"tw_stocks/1232.json"},{"revision":"ec466066f0186be04db80f00b5368987","url":"tw_stocks/1231.json"},{"revision":"f92708da419a3d8fdf7c95149633c245","url":"tw_stocks/1229.json"},{"revision":"a71e04d483e1dc6f829164b9fc304d35","url":"tw_stocks/1227.json"},{"revision":"316f757c4c22028bb9f3b558a470ed69","url":"tw_stocks/1225.json"},{"revision":"c24a8e4694ccee0039d31df2de0001b6","url":"tw_stocks/1220.json"},{"revision":"8ea8915e3ebb3394f4d010ebd6873bef","url":"tw_stocks/1219.json"},{"revision":"1542ab656d5efd8a214e4618ba2424ef","url":"tw_stocks/1218.json"},{"revision":"9214d02c228657a6a118bd13a76cfad2","url":"tw_stocks/1217.json"},{"revision":"5f9fb555d11e3aab2099fccb95cee88c","url":"tw_stocks/1216.json"},{"revision":"ccedb403a9073db33edc131a05d558d4","url":"tw_stocks/1215.json"},{"revision":"12f3fec48bf86708f8a418a63ef27b1c","url":"tw_stocks/1213.json"},{"revision":"4c5186871b4ffaf704f38ac6c7669b55","url":"tw_stocks/1210.json"},{"revision":"2565b618df54ee06d82c0306fc830e73","url":"tw_stocks/1203.json"},{"revision":"6407d8586dd197dc3a8587695204400d","url":"tw_stocks/1201.json"},{"revision":"42089d41dad35d74ad9a62bb348552b1","url":"tw_stocks/1110.json"},{"revision":"bc1f0d6e2a01242a55f04534374820e6","url":"tw_stocks/1109.json"},{"revision":"0a0b2b1141a52ac66944e052188fdcc4","url":"tw_stocks/1108.json"},{"revision":"af5b88eace72eec405d32008ac1ddc8c","url":"tw_stocks/1104.json"},{"revision":"9e8c2ed80422b758209e30f4cfd34c1e","url":"tw_stocks/1103.json"},{"revision":"f4510a5a214e5dbd6d625641c179a16c","url":"tw_stocks/1102.json"},{"revision":"d6c6d8a2720d5cf7253ef811a39e1ce6","url":"tw_stocks/1101.json"},{"revision":"db76cc93d82a0506b755cf95aacd9249","url":"tw_stocks/00999A.json"},{"revision":"3bba414671319198ef61907ee9e4dd2d","url":"tw_stocks/00997A.json"},{"revision":"9643adfadecae40ace8668cd21678f82","url":"tw_stocks/00996A.json"},{"revision":"6ce747f476b820b9919835e84701bb6c","url":"tw_stocks/00995A.json"},{"revision":"cec1d8f72ba375c3b7729d9fd2460ef1","url":"tw_stocks/00994A.json"},{"revision":"1ceabea25ef59d675e4dfa32b9915dcc","url":"tw_stocks/00993A.json"},{"revision":"defe0ab093a78f8dafbabf7f4c67242a","url":"tw_stocks/00992A.json"},{"revision":"0115698a77b0a23ccdf7296e791364f2","url":"tw_stocks/00991A.json"},{"revision":"b346c197113c8263430312a75f128ec0","url":"tw_stocks/00990A.json"},{"revision":"8f69004f0befc0c6c43b6fb8abf7430d","url":"tw_stocks/00989A.json"},{"revision":"7abe2e79255a0799100ca28ea1b2b284","url":"tw_stocks/00988A.json"},{"revision":"8c4d7ea4b03fa1ee16f00f338c4222e9","url":"tw_stocks/00987A.json"},{"revision":"9be4edaabf83881cb49ba44a8ede7329","url":"tw_stocks/00986A.json"},{"revision":"921525553736ab02380dd5fa82bcb678","url":"tw_stocks/00985B.json"},{"revision":"fccb394d2a031e0baff982f4d9807c5c","url":"tw_stocks/00985A.json"},{"revision":"333ffcce37f99c7aa3abc7ab803c56fc","url":"tw_stocks/00984D.json"},{"revision":"ade019a95754795d0e693733ec234c83","url":"tw_stocks/00984A.json"},{"revision":"fcadf805309fe81d9af64fc0c8a18367","url":"tw_stocks/00983D.json"},{"revision":"6fdf055a62c7e5fb6ffedf0835eb5b3a","url":"tw_stocks/00983A.json"},{"revision":"6f45bae451e3e989f8485d71bed9d3d7","url":"tw_stocks/00982T.json"},{"revision":"d29fb5ad463f56c2422d8436c3b5245b","url":"tw_stocks/00982D.json"},{"revision":"2c5ab8e38a9a7a7436eed1d1018a6368","url":"tw_stocks/00982A.json"},{"revision":"8b086e29d00848a7a81122bcb04c4a55","url":"tw_stocks/009820.json"},{"revision":"dea7c4f89db261f7227ffa11131a67df","url":"tw_stocks/00981T.json"},{"revision":"239a1edb9c622b53d67df86bf3746907","url":"tw_stocks/00981A.json"},{"revision":"3c2153a7d51975106a0177d0c82fe7c0","url":"tw_stocks/009819.json"},{"revision":"8b61bbba433367f412cab5b856879546","url":"tw_stocks/009818.json"},{"revision":"bb23b68f9feaae6c6c5127d2abe81853","url":"tw_stocks/009817.json"},{"revision":"1cba4aa8e1d101fe9af246242ca9fee0","url":"tw_stocks/009816.json"},{"revision":"e09129843eb8e9abd75e0eb4381b10bb","url":"tw_stocks/009813.json"},{"revision":"f1265fb124768ae6cebc361ca2d68c7d","url":"tw_stocks/009812.json"},{"revision":"8c9bb627b3010cbac7ff3ba8e4f5ad75","url":"tw_stocks/009811.json"},{"revision":"e23343f0fc3764f402624808bb742bcb","url":"tw_stocks/009810.json"},{"revision":"4b5dd218a2411c696f40b24aa22eeef7","url":"tw_stocks/00980A.json"},{"revision":"35d6c9b40ea45b47d904d41b68892bb4","url":"tw_stocks/009809.json"},{"revision":"03a18ac0247a85c319ba33cdf0575436","url":"tw_stocks/009808.json"},{"revision":"fabebec31bd49cee4f3ade941f35a8fb","url":"tw_stocks/009805.json"},{"revision":"bec230b35a11225b1a37c56b87e703cc","url":"tw_stocks/009804.json"},{"revision":"164fef781fcc1a58b90d838df033b201","url":"tw_stocks/009803.json"},{"revision":"cb86d36d733fcc70a0606c22628628a8","url":"tw_stocks/009802.json"},{"revision":"4451834349b7178f6742fd1d1f015561","url":"tw_stocks/009801.json"},{"revision":"78da4605f221e4600a9e0e499e9af2bd","url":"tw_stocks/009800.json"},{"revision":"02d696f1c6afbe7a4c5b9f1c41a19e67","url":"tw_stocks/00972.json"},{"revision":"2668e68949f02a7c0abc78416ee02e8d","url":"tw_stocks/00971.json"},{"revision":"c7076f41e75e441deb2eaca8341e8f54","url":"tw_stocks/00965.json"},{"revision":"119b7643eccb7de9d6dd5ba76542af5b","url":"tw_stocks/00964.json"},{"revision":"0108e5834c948266477b1fa1311f4557","url":"tw_stocks/00963.json"},{"revision":"173c920b52909cf096b22bc7887c5dc2","url":"tw_stocks/00962.json"},{"revision":"0855a45658d739d85d8663217a7eaa90","url":"tw_stocks/00961.json"},{"revision":"6aacb01966b98cab6f190efc269b3cb3","url":"tw_stocks/00960.json"},{"revision":"a02343d4e63a343741b627949481b34f","url":"tw_stocks/00956.json"},{"revision":"54511b0a99f47ee9af42b7ed713beb0c","url":"tw_stocks/00954.json"},{"revision":"422b21854451c36b95fd2d1b0d67b87f","url":"tw_stocks/00953B.json"},{"revision":"63dad1b0a187371a55833f773167ae16","url":"tw_stocks/00952.json"},{"revision":"5e0baef55e52a945614f908875c1b992","url":"tw_stocks/00951.json"},{"revision":"9cf8d6d60ef26bd446a09b7f7df614f4","url":"tw_stocks/00949.json"},{"revision":"65e3027afacd014e50c918304f23522b","url":"tw_stocks/00947.json"},{"revision":"45015a56565dbf8f7b87374eff03c811","url":"tw_stocks/00946.json"},{"revision":"80922270c4c6bd2872d5a7a3e84a61a2","url":"tw_stocks/00945B.json"},{"revision":"ecc8e20a60c5202d7496a487a8ec2550","url":"tw_stocks/00944.json"},{"revision":"b4fc5dd42220c7e8fd09c3e8c1063929","url":"tw_stocks/00943.json"},{"revision":"c1e79b676537962e388afae118b44ae6","url":"tw_stocks/00941.json"},{"revision":"97e0bdb2eeb4ae24ddc7c3034a398838","url":"tw_stocks/00940.json"},{"revision":"5790fbc01d989e55d3cf11313525d88c","url":"tw_stocks/00939.json"},{"revision":"a91cc977974c4feabe1c23fac6208fd5","url":"tw_stocks/00938.json"},{"revision":"18501bea35a8f8de2d40c9d5b18703d1","url":"tw_stocks/00936.json"},{"revision":"48b867afbd3037fdedae7409205e530a","url":"tw_stocks/00935.json"},{"revision":"77045e4e23bdc561cc075e5f98b22109","url":"tw_stocks/00934.json"},{"revision":"bfd5a39610a999dff698404a6221b180","url":"tw_stocks/00932.json"},{"revision":"f3881ad8a2584600224de7eeee12bd00","url":"tw_stocks/00930.json"},{"revision":"84ee9d8a60761fd07b4499cba3d34c6b","url":"tw_stocks/00929.json"},{"revision":"63e8dfb9c14b0c50d7e4201a58153815","url":"tw_stocks/00927.json"},{"revision":"f302608e4e63e370698124b3d3e845c5","url":"tw_stocks/00926.json"},{"revision":"fa4c611cefe76514f662c6550c4c6f65","url":"tw_stocks/00924.json"},{"revision":"b4953da1a18387ad80c45ab1edd57ba3","url":"tw_stocks/00923.json"},{"revision":"3211a95beadda1e6721cea44ce1acf64","url":"tw_stocks/00922.json"},{"revision":"b2e6300841c793587a0376f69a2f4658","url":"tw_stocks/00921.json"},{"revision":"023d463bd7f479b3573e0900d7630034","url":"tw_stocks/00920.json"},{"revision":"3f5c9b9fca722df3feb2c99a71033328","url":"tw_stocks/00919.json"},{"revision":"25391048153eb1649a7503bce2326fa7","url":"tw_stocks/00918.json"},{"revision":"7b3120c260b61aec9d927070ed91ca73","url":"tw_stocks/00917.json"},{"revision":"6c3ce26ae77bf1ad28c067f642f599cf","url":"tw_stocks/00916.json"},{"revision":"6eba2b4f0ab6e1e7a4f7efa73700e9e3","url":"tw_stocks/00915.json"},{"revision":"50232257143c69b4dac50e4a8e9b6efa","url":"tw_stocks/00913.json"},{"revision":"9d5f2a547ec3374d268e9b2bba3304fd","url":"tw_stocks/00912.json"},{"revision":"fc13886b563f82eff8ab9a9dbe6ab2bd","url":"tw_stocks/00911.json"},{"revision":"634b9ffe91342cf0ddb9f25fa0ea7394","url":"tw_stocks/00910.json"},{"revision":"1afe5c43193418cdc5932c90ba4ba1db","url":"tw_stocks/00909.json"},{"revision":"e9c20d52a5595654c35526ffdff9cf45","url":"tw_stocks/00908.json"},{"revision":"60d298c6f60fa3055ed44f293fa529a8","url":"tw_stocks/00907.json"},{"revision":"52ad9cdb0342ef954b50043c66a29487","url":"tw_stocks/00905.json"},{"revision":"fb673f74e100521fa38a153d3cdc8a85","url":"tw_stocks/00904.json"},{"revision":"258c505ae7f8e72688752ed84d845a3f","url":"tw_stocks/00903.json"},{"revision":"24633adfb928fff0c346c31f5ad50cb3","url":"tw_stocks/00902.json"},{"revision":"9f1eceef733caa1ab8351359e63b7be0","url":"tw_stocks/00901.json"},{"revision":"d70578edc2b554fefcecd0e68bc2b699","url":"tw_stocks/00900.json"},{"revision":"a46e6ec45344dd2635ba4336d7f01eb9","url":"tw_stocks/00899.json"},{"revision":"621d204e4a88d98d9e092b34eebd9a19","url":"tw_stocks/00898.json"},{"revision":"5c1a042310facdad59be8d806f0ebf33","url":"tw_stocks/00897.json"},{"revision":"9f10847fda0c86a76bc542264d27cb5d","url":"tw_stocks/00896.json"},{"revision":"bd7d3e5af860bb73bd8d35fe88069fa9","url":"tw_stocks/00895.json"},{"revision":"b7bfbb9c84728ae5129183966d21d011","url":"tw_stocks/00894.json"},{"revision":"8b16a79336cd2eefd0de6caa83cb0e22","url":"tw_stocks/00893.json"},{"revision":"6a1718c33f6b679b2ebbc4806eeecc7f","url":"tw_stocks/00892.json"},{"revision":"49fcb127fdc16ef1a6a5a84e73317f15","url":"tw_stocks/00891.json"},{"revision":"6b1e1b07d98111a6111def3913db155f","url":"tw_stocks/00885.json"},{"revision":"f7dd77203c27484d7d760fd74f616a9d","url":"tw_stocks/00882.json"},{"revision":"8ec465d8d20a7db02862639c5ce07699","url":"tw_stocks/00881.json"},{"revision":"0fafade583733f0c54011a97a6396efa","url":"tw_stocks/00878.json"},{"revision":"35f401dc793430fad1737dc930387fe4","url":"tw_stocks/00876.json"},{"revision":"f54d071eb4dcd44e9f593f2f35236716","url":"tw_stocks/00875.json"},{"revision":"d7e3197eeb4eb28c1e0b4538ba29ce97","url":"tw_stocks/00865B.json"},{"revision":"7edea889d63fb134beeb633a99d0ecda","url":"tw_stocks/00861.json"},{"revision":"e2fcf3ba8faf13d501591f749074cd1e","url":"tw_stocks/00852L.json"},{"revision":"f5afaab804034c48e22863935a65ad38","url":"tw_stocks/00851.json"},{"revision":"6da34710687e29eb22b3716818fa70ce","url":"tw_stocks/00850.json"},{"revision":"7dc1f5492dfe4ababfe76d9b5801f730","url":"tw_stocks/00830.json"},{"revision":"7337e4d7394624bb7264c9eb9b3db87e","url":"tw_stocks/00783.json"},{"revision":"e1d737053fa8efad631440543d092e6b","url":"tw_stocks/00775B.json"},{"revision":"2eb374f35c38cca1d1814c5279e6aafd","url":"tw_stocks/00771.json"},{"revision":"cc8e078ee4d80cb8f35482147b176a7b","url":"tw_stocks/00770.json"},{"revision":"4635b77f6855bb69823a1bc8da7da295","url":"tw_stocks/00763U.json"},{"revision":"4550bd923a5712ddc76afbe0cd003409","url":"tw_stocks/00762.json"},{"revision":"7d09c02f31374873c1a1c4daa80e419d","url":"tw_stocks/00757.json"},{"revision":"d24d8437498c245dc52338b9ef6cd86a","url":"tw_stocks/00753L.json"},{"revision":"eb607e69b303472bd7926f5f4bbdfae1","url":"tw_stocks/00752.json"},{"revision":"28594778b6d68ac4e2f9198bf33c1204","url":"tw_stocks/00739.json"},{"revision":"5b66c8a3e39cbb1a7ff690235f1b1b42","url":"tw_stocks/00738U.json"},{"revision":"11b4bce37c8ade765b762bc5699fc5a6","url":"tw_stocks/00737.json"},{"revision":"3e02454c8f9f50efc01a77a38bc3ef6d","url":"tw_stocks/00736.json"},{"revision":"119c79c55fa6801f7fba3cf5cdb521e2","url":"tw_stocks/00735.json"},{"revision":"0322a5a0e2658c61f8952321f495947a","url":"tw_stocks/00733.json"},{"revision":"2973466a94264168b6279dba1e2c4ad3","url":"tw_stocks/00731.json"},{"revision":"81020186499da38e6e98d9f0a7d50a3b","url":"tw_stocks/00730.json"},{"revision":"b854ae96c5dcb770e06e5859b17cb706","url":"tw_stocks/00728.json"},{"revision":"e8793ff43a01971ee76c296c0c0a1f8b","url":"tw_stocks/00717.json"},{"revision":"01b157d9c0bc75560ea8c2e29d730234","url":"tw_stocks/00715L.json"},{"revision":"8c57523c967c8cfd2bc8954c0e486c7c","url":"tw_stocks/00714.json"},{"revision":"f079ef771875c57513af483251224d26","url":"tw_stocks/00713.json"},{"revision":"2f11f8e144d6349146afbc62fc4f0381","url":"tw_stocks/00712.json"},{"revision":"e29bc62908807a9fcbb34575613fb474","url":"tw_stocks/00711B.json"},{"revision":"54c5aa98730358884cb2d55201bd6a96","url":"tw_stocks/00710B.json"},{"revision":"af0893c350c3f06b3ff0d1c1caf79d45","url":"tw_stocks/00709.json"},{"revision":"a8af7124993770ed151c057a0afe0e1f","url":"tw_stocks/00708L.json"},{"revision":"4dc6d8bf4370d235e00f64879042dcbb","url":"tw_stocks/00707R.json"},{"revision":"265538a1fc26633c56e50acd346ee99d","url":"tw_stocks/00706L.json"},{"revision":"ad891de43853fca0b8f37eff0a66d432","url":"tw_stocks/00703.json"},{"revision":"1c94eaac4b7d3197724c36e72a4fdb28","url":"tw_stocks/00702.json"},{"revision":"03362691629d6a439b723f89da886011","url":"tw_stocks/00701.json"},{"revision":"8a0e5f44574e7b7d5cd7463f0cf86fde","url":"tw_stocks/00700.json"},{"revision":"618f3b7f8a121fa7b6eb2e20f2ace691","url":"tw_stocks/00693U.json"},{"revision":"5802047eda89e3f6cef0ec9c70207646","url":"tw_stocks/00692.json"},{"revision":"a7a231c153722ea7548b66935ed536b1","url":"tw_stocks/00690.json"},{"revision":"ffc37589432a0302de1dbdfafbc27add","url":"tw_stocks/00689R.json"},{"revision":"73b9c0828c0fd8019ae340c2d911e711","url":"tw_stocks/00688L.json"},{"revision":"b5b81969213fa28f8e25237c0d3bdb2c","url":"tw_stocks/00686R.json"},{"revision":"4c65eccab2c7791ffb07ec78d6e0a529","url":"tw_stocks/00685L.json"},{"revision":"8aae6ce79149423d1630d520b9bf37a1","url":"tw_stocks/00684R.json"},{"revision":"8b2f4245aed2bf71b0d49f14a2dfe91a","url":"tw_stocks/00683L.json"},{"revision":"c9b3eb37fbc24548a3069d335a678c68","url":"tw_stocks/00682U.json"},{"revision":"38f69f6a3903762cdfa6f6f3a84e69f0","url":"tw_stocks/00681R.json"},{"revision":"f3852cc362890a2fcc93c990946ed3d9","url":"tw_stocks/00680L.json"},{"revision":"a93c457f68620253059fa7b3fbe8f85c","url":"tw_stocks/00678.json"},{"revision":"a09be24f4b09aa490ff6e56929426097","url":"tw_stocks/00676R.json"},{"revision":"0da4bf4c6c11f91aef89f24a48c78086","url":"tw_stocks/00675L.json"},{"revision":"14a87039cbe6ca826bfb31183354f696","url":"tw_stocks/00674R.json"},{"revision":"ac8e65f128fd532bc7e3920bddaedd25","url":"tw_stocks/00673R.json"},{"revision":"e262123b8557516c067e5bb1f802160a","url":"tw_stocks/00671R.json"},{"revision":"b721af6828961865fd1dc6d19458014f","url":"tw_stocks/00670L.json"},{"revision":"6178dd494853134a1cdf6ffac987e310","url":"tw_stocks/00669R.json"},{"revision":"38339feba26196122405291f091e6671","url":"tw_stocks/00668K.json"},{"revision":"775afbd392e5d6057dcdc8b23b621c8e","url":"tw_stocks/00668.json"},{"revision":"9689790ba2d0351e7ba7b7800f9dead0","url":"tw_stocks/00666R.json"},{"revision":"ff19933e9d970d1dcd6323e0b9dff58e","url":"tw_stocks/00665L.json"},{"revision":"4fe1e26a473e154ae474e2a1ba28725c","url":"tw_stocks/00664R.json"},{"revision":"be26ae6a281a609810e14d52937f8c8e","url":"tw_stocks/00663L.json"},{"revision":"39eb2211797442260b698363f213cab1","url":"tw_stocks/00662.json"},{"revision":"a08efaafd1294f4449ccc135eb90aec0","url":"tw_stocks/00661.json"},{"revision":"7c3bdf6c111d1ddb89e95e90bfe71499","url":"tw_stocks/00660.json"},{"revision":"2da529944aeb2275e0db9ad27c6223c3","url":"tw_stocks/00657K.json"},{"revision":"2aa59640d5f65182c323f0ced5802b0c","url":"tw_stocks/00657.json"},{"revision":"03086895a84aad679355ab5a9b2d46bf","url":"tw_stocks/00656R.json"},{"revision":"5366e387a8d8713d4af0308d31f37d31","url":"tw_stocks/00655L.json"},{"revision":"8b4509fba4f7f5a3dc0a958c1b5686ae","url":"tw_stocks/00654R.json"},{"revision":"22f65aaa0f80d4ddf14ad0835a1bf3d8","url":"tw_stocks/00653L.json"},{"revision":"64b5a28899c7087e7f730f219a9db9d7","url":"tw_stocks/00652.json"},{"revision":"6fe5fd2bcb6da68cbcfa5f3d3c43ad46","url":"tw_stocks/00651R.json"},{"revision":"c184e506e986c72781010a252a659593","url":"tw_stocks/00650L.json"},{"revision":"1ae8de16ad65be98638a9fc792587d00","url":"tw_stocks/00648R.json"},{"revision":"4aeefacdbdad783e887911466d808c98","url":"tw_stocks/00647L.json"},{"revision":"c4c34216a991038ee6091458f61a42d6","url":"tw_stocks/00646.json"},{"revision":"0d73bf2a79ec2705f21df4dd1ef01c03","url":"tw_stocks/00645.json"},{"revision":"18aa81bcac7dfb968ca90ccf22e58525","url":"tw_stocks/00643K.json"},{"revision":"6e884b2305db6848b0065837d8461c19","url":"tw_stocks/00643.json"},{"revision":"dfee77d28fc94117f2eedcc07797066f","url":"tw_stocks/00642U.json"},{"revision":"a1c75f706e4724241ada07c2f1a984c5","url":"tw_stocks/00641R.json"},{"revision":"8f9ecf92c905f5e588d1b71352cfc747","url":"tw_stocks/00640L.json"},{"revision":"8f0e2ed959fbdd6df20a0f20282b1652","url":"tw_stocks/00639.json"},{"revision":"5a49f3e5c57a8a53aad5130011eb737a","url":"tw_stocks/00638R.json"},{"revision":"ebcd66c228892a2182a5711921600a9b","url":"tw_stocks/00637L.json"},{"revision":"cca147f8019939ad1dea64b1366776e8","url":"tw_stocks/00636K.json"},{"revision":"495604e5a56bd259dfa92d4985226014","url":"tw_stocks/00636.json"},{"revision":"a54346b4edf4b7507e9d885c2c2c59f5","url":"tw_stocks/00635U.json"},{"revision":"dce172bbb0eccee8c777a4da8768c0e1","url":"tw_stocks/00634R.json"},{"revision":"29a01480135cf43c8ef47fdf9aa38f11","url":"tw_stocks/00633L.json"},{"revision":"eb4fda00a306890f1e314429f211d906","url":"tw_stocks/00632R.json"},{"revision":"4cb69f4961197a014ed6f279fc536fa0","url":"tw_stocks/00631L.json"},{"revision":"611fe500a8a7b6d094a680b8fcc4e59a","url":"tw_stocks/00625K.json"},{"revision":"ef5cee7bf3e55b1762ef32afa0d27eec","url":"tw_stocks/006208.json"},{"revision":"41b125a2dfac2b6bee674701f56c58ed","url":"tw_stocks/006207.json"},{"revision":"24a35c62a85ebba54dabf79e7ded95b0","url":"tw_stocks/006206.json"},{"revision":"debf7482f3bb312d76d5b64ebb0a774e","url":"tw_stocks/006205.json"},{"revision":"b42ba699c37aad8953256051aa031c73","url":"tw_stocks/006204.json"},{"revision":"928084bac6b7b3aa5478384f91bc094d","url":"tw_stocks/006203.json"},{"revision":"ec7a5192470958977e295c72615bc308","url":"tw_stocks/0061.json"},{"revision":"a484226aa537511730e32690f65c416d","url":"tw_stocks/0057.json"},{"revision":"89ede36b9511e6fdc2a0af4530dce205","url":"tw_stocks/0056.json"},{"revision":"82f68e0070a890251e273035e1d25fed","url":"tw_stocks/0055.json"},{"revision":"2c1723699cfa6c2adabbc1e5b5cff3cf","url":"tw_stocks/0053.json"},{"revision":"c1f904ea069db805d407e0b7563d18a5","url":"tw_stocks/0052.json"},{"revision":"4387dd68c27c4cfa20847dddd4d3e36d","url":"tw_stocks/0051.json"},{"revision":"d1663a3813ee1179db8466218653b5a1","url":"tw_stocks/0050.json"},{"revision":"64b15b64d77a77f7456007ad1eb6e96e","url":"tw_stocks/00403A.json"},{"revision":"380f3423ea83b204e8e5d22bb45f19c5","url":"tw_stocks/00401A.json"},{"revision":"f80ecca0365104c692277b91f7338c78","url":"tw_stocks/00400A.json"},{"revision":"6005eac49ef2cc6a13158c3493e6ffe4","url":"subscription/callback.html"},{"revision":"8af21cda0f99e374b2bb75d10c9f0c48","url":"resident/me.html"},{"revision":"18fb916f34d1a9a07137373187cf49ba","url":"games/spring-march.html"},{"revision":"1684bef38071921ab6fca6bcd3d7efbf","url":"financial/rebalance.html"},{"revision":"6ef94a200ed71ccfed9d6c673b5b0afa","url":"financial/cashflow.html"},{"revision":"7ee0104383566934060c74407ab2894f","url":"financial/balance-sheet.html"},{"revision":"cb68cee5609de377ef0d61e9cb457d08","url":"finance/tags.html"},{"revision":"90cd641f327d0dac54f2a6e1c51b870a","url":"finance/finance-section-created.html"},{"revision":"c247fa5c2b83672d646d5c00bb581922","url":"finance/finance-2026-04-30.html"},{"revision":"5608571f6a1379413794acd49db67b6b","url":"finance/finance-2026-04-29.html"},{"revision":"f82454194a0087dfb531fd92fa6223a6","url":"finance/finance-2026-04-28.html"},{"revision":"4c0ef26d555a39d3abec1289a57cd51d","url":"finance/finance-2026-04-27.html"},{"revision":"fb59a5eb4dcd5c5333a812a29e1bdc76","url":"finance/authors.html"},{"revision":"493a5ac62b0468b2ad01f93f88ed9d31","url":"finance/archive.html"},{"revision":"a0c3b227f0aa849e9e32cdd4b9a43456","url":"finance/tags/finance.html"},{"revision":"2948c3625706c706d3f0f3ecf71e935d","url":"finance/tags/daily-report.html"},{"revision":"9c47a18485943c767d64241fe382dc35","url":"finance/tags/announcement.html"},{"revision":"7527dee0154fb235c2f3e05e0f1268a6","url":"docs/tags.html"},{"revision":"18f43c5fd7e35ad694f2305d3fb4e4bc","url":"docs/intro.html"},{"revision":"257f9904ee33c1b04401d94131c3284d","url":"docs/war-room-skills/stock-row-guide.html"},{"revision":"0e5ec55503fed4256a2fb4fe9cbbd2e3","url":"docs/war-room-skills/stock-info-widget-guide.html"},{"revision":"025d09ce880d594fb69ac68408eb64ae","url":"docs/war-room-skills/stock-card-guide.html"},{"revision":"f563b542178460c3a02ba2d307b329ad","url":"docs/war-room-skills/order-book-widget-guide.html"},{"revision":"480cefce6138e7e8806c013d8e9adc2e","url":"docs/war-room-skills/investment-calculator.html"},{"revision":"305ce6d4564750e2f323c9d0f4f77fb1","url":"docs/war-room-skills/economic-calendar-guide.html"},{"revision":"5c5f4d550a05f6b562b3f07c12f118db","url":"docs/tags/黑箱協議.html"},{"revision":"c9527907a0af588c0bbd565f3834fc8b","url":"docs/tags/養成.html"},{"revision":"09b9b9e7ed4b512946cc34585baae911","url":"docs/tags/資料安全.html"},{"revision":"b1fe2381a930b2b94861e90d6f83d1dc","url":"docs/tags/經濟循環.html"},{"revision":"fc5310ecb19ed76a2e43ed1e76aa46da","url":"docs/tags/百科.html"},{"revision":"fb425b2a930fc869c55e395a35c0a406","url":"docs/tags/模型控制.html"},{"revision":"fe5de2e05523b994fb454caa7df332fc","url":"docs/tags/數據標準.html"},{"revision":"49b9ababd1523b5d95da1e04280e08dd","url":"docs/tags/接入規範.html"},{"revision":"c0e5f2040d6fbf169bd1a7ff5850ed65","url":"docs/tags/指南.html"},{"revision":"b40152c461c9ef9a515f19748ac1fc62","url":"docs/tags/技術哲學.html"},{"revision":"3dcc20ead069b87a00579b730c9d9c99","url":"docs/tags/技術史.html"},{"revision":"dd876b86df79301874ab1ba22a324f27","url":"docs/tags/戰鬥系統.html"},{"revision":"1ec5f2bbaa392fe145ac9d454611b0d2","url":"docs/tags/專案管理.html"},{"revision":"0f5cae02f19e1c4c83cf3a2903263656","url":"docs/tags/安全架構.html"},{"revision":"545b3a2b6d754d67fd84270409693004","url":"docs/tags/安全協定.html"},{"revision":"96e3fb50e733dad1f48edafbb489472a","url":"docs/tags/外部開發者.html"},{"revision":"3d02097edd16d962b67a86bdd0987819","url":"docs/tags/商店.html"},{"revision":"62c99cd6328a12bb11a7a7ec53908580","url":"docs/tags/去中心化標準.html"},{"revision":"f606709599625f11198c2ab6ae232e1b","url":"docs/tags/去中心化安全.html"},{"revision":"dd05ca3f2478fd8542d40eba6d9edf3b","url":"docs/tags/去中心化.html"},{"revision":"1ec13ba80c051fb0ca42e2e97aec34c3","url":"docs/tags/top-p.html"},{"revision":"112566813c897b000c50dc8367f7997b","url":"docs/tags/tokenizer.html"},{"revision":"bf7d756b0b32d628fdf91ae60bbab001","url":"docs/tags/temperature.html"},{"revision":"7af314b55f436014009e8e8d55cdc5e6","url":"docs/tags/technical-docs.html"},{"revision":"10b3b49f6f0e2465fbd32af6b065ac28","url":"docs/tags/nlp.html"},{"revision":"bce2d8d61e070f046273e7f7578f944f","url":"docs/tags/llm.html"},{"revision":"3b5354d4c227f6509d9cc0d5f81c030b","url":"docs/tags/git-hub-copilot.html"},{"revision":"98c8c5833f0e38084a0808cb95aa7bd5","url":"docs/tags/generative-ai.html"},{"revision":"6d28802dcce7bc8dab7eae01360e1b89","url":"docs/tags/eip.html"},{"revision":"6755d65f5ec92627b82367a1368ca3b3","url":"docs/tags/development-tools.html"},{"revision":"5f4f166b3a1303e577ab44fb29ee9fc8","url":"docs/tags/cli.html"},{"revision":"536b60ec907f630341cddb513675a0ea","url":"docs/tags/claude-code.html"},{"revision":"6477a8b7498a913cca639efef80cb4d2","url":"docs/tags/bpe.html"},{"revision":"e7108780e3219ffbe1b962e40d444141","url":"docs/tags/automation.html"},{"revision":"4449009ff9c98a0e1cb03940c447b9e2","url":"docs/tags/ai.html"},{"revision":"6f07c8eea7249299edeadac90d2aaaa0","url":"docs/tags/agent.html"},{"revision":"3be05f21e21de29a358d9f1685dec0f3","url":"docs/skill/github-copilot-agent-skills.html"},{"revision":"ad6192cb9b4b58f3cc50c5e50903aabf","url":"docs/skill/gemini-skills.html"},{"revision":"d032cd50f3aaa94102bf58bebd411d5f","url":"docs/skill/container-builder-skill.html"},{"revision":"e700e0aec33e2ba9edbb77953bfcc41d","url":"docs/skill/claude-code-skills.html"},{"revision":"3ca3cabb8544b7748c692cd95fa51c0d","url":"docs/python-workshop/python-init-file.html"},{"revision":"a6162bbc765940983880865e14d51191","url":"docs/egg-pet-philosophy/ups-spec.html"},{"revision":"a8c000f65f169a79973536bf05e2637e","url":"docs/egg-pet-philosophy/uniqueness.html"},{"revision":"2e9d8d25bcea2a8f13576d51f57833f2","url":"docs/egg-pet-philosophy/survival-protocol.html"},{"revision":"a9218035e0fc08718054dab7fee689b6","url":"docs/egg-pet-philosophy/roadmap.html"},{"revision":"dc62f097f483c579dd84c713a5d8f06d","url":"docs/egg-pet-philosophy/eip-standard.html"},{"revision":"dbd20b1ae5dba486ee89f9b06a434939","url":"docs/egg-pet-philosophy/battle-royale.html"},{"revision":"0775e420c8560e021af1bf7a2989ab8d","url":"docs/egg-pet-philosophy/architecture.html"},{"revision":"30042c40dde907154b84cbad6f9fcb6b","url":"docs/egg-pet-philosophy/game-rules/shop.html"},{"revision":"9167897073cb566da6f09582e631d9b4","url":"docs/egg-pet-philosophy/game-rules/migration.html"},{"revision":"b6fab0bd553358be440d2d546f56e4d6","url":"docs/egg-pet-philosophy/game-rules/matchmaking.html"},{"revision":"40bb702df646aac678699a305a380488","url":"docs/egg-pet-philosophy/game-rules/experience.html"},{"revision":"779eda9d4251722c4144a1f920b2ab32","url":"docs/egg-pet-philosophy/game-rules/elements.html"},{"revision":"dbc955fc63bb3dd98a30761066df255b","url":"docs/egg-pet-philosophy/game-rules/combat.html"},{"revision":"fddf2dd5dad27e363d85430486460241","url":"docs/egg-pet-philosophy/battle-royale/world.html"},{"revision":"ee0a408e82ddcc19106389ceca1a84bb","url":"docs/egg-pet-philosophy/battle-royale/settlement.html"},{"revision":"2a9644bb25c5e177bbc232d2a23628b6","url":"docs/egg-pet-philosophy/battle-royale/combat.html"},{"revision":"b9f5c08458fe4aea1815e616c2e47db8","url":"docs/egg-pet-philosophy/battle-royale/actions.html"},{"revision":"bb9460c90d36d59ab9074a7657c49f20","url":"docs/deconstruct-llm-agent/temperature-and-top-p.html"},{"revision":"db35ebd7dff4bc93a6e1c6895bc4c627","url":"docs/deconstruct-llm-agent/introduction.html"},{"revision":"02713bbcd85814fd827632e6322037bc","url":"docs/claude-code-series/skills.html"},{"revision":"bb5d4d74471f1b5df6a0d712bbf559c9","url":"docs/claude-code-series/monitoring.html"},{"revision":"349d686862eea5e7becc5ac8f15fe187","url":"docs/claude-code-series/getting-started.html"},{"revision":"0fc8c68a22a31e41b5f07c79da4d2f95","url":"docs/category/遊戲規則與手冊.html"},{"revision":"1208cb7831f237a6466ee4669ac53aa3","url":"docs/category/發文-skill.html"},{"revision":"4c79d4561e2f9091496bf04a5a5bda71","url":"docs/category/戰情室元件-skill.html"},{"revision":"4491f61fd706f1b80fab8205024b6516","url":"docs/category/大逃殺模式-battle-royale.html"},{"revision":"b9ef1393ff932eb96f664d59a453f27f","url":"docs/category/skill.html"},{"revision":"6a77ab9ee527fe19304226a55db252ca","url":"docs/category/python-workshop.html"},{"revision":"7f10c98d4a41ce07f05cebdb83fd08fb","url":"docs/category/egg-pet-philosophy.html"},{"revision":"a017396bb28cc909249ee104b736e308","url":"docs/category/claude-code.html"},{"revision":"bad35a57886ccfc1c71cd43ca57dd291","url":"docs/blog-skill/news-rules.html"},{"revision":"8d457a8ed12c52075307f2b053184cec","url":"docs/blog-skill/history-rules.html"},{"revision":"80055408526951b41251370242c9a487","url":"docs/blog-skill/finance-rules.html"},{"revision":"07ba21979267609593f4704ed265d5ca","url":"auth/callback.html"},{"revision":"969d8fec12630fe6da7cf437638ae9de","url":"assets/js/runtime~main.a47565f3.js"},{"revision":"06bd8922f9340443aa45ac2cdf12803d","url":"assets/js/main.913a31bb.js"},{"revision":"a03cb7e8b52e6b9950f8a90805e1a87a","url":"assets/js/febb7515.cc87d36b.js"},{"revision":"f0e167aff9be32f6c0662b64357a5f46","url":"assets/js/fc67e8a3.1aa6d974.js"},{"revision":"764cea318568075100b1902fd3d85e43","url":"assets/js/f85166e8.d425b9d1.js"},{"revision":"06dfebd287b30c9eef743ef1919d3043","url":"assets/js/ef86e77f.5a76b5ef.js"},{"revision":"2783d1598119d406bd403afb4399cb70","url":"assets/js/ed4d73f8.e30c4ee8.js"},{"revision":"ace74bed98bf3ae6c27927f9b23fcbe0","url":"assets/js/ec1e3285.6336a3b5.js"},{"revision":"ab70676e504ef94b3b19d7d5400db038","url":"assets/js/eb419854.53d3204f.js"},{"revision":"1f697d39f93a080f211b1f3190e63f5e","url":"assets/js/e88c4a9c.952dbaa6.js"},{"revision":"263e4fc1b683700420ce1f63b04143bb","url":"assets/js/e86a5a75.0817e432.js"},{"revision":"2a823b4f59f18429c9f41191691aaa65","url":"assets/js/e7f07728.89e43d49.js"},{"revision":"e995f1c521e1261cc783b27fad1f862f","url":"assets/js/e1f48af2.d2620614.js"},{"revision":"d01663c7c4aadcea5a9c613b463d2292","url":"assets/js/dfea6eb9.597c77cc.js"},{"revision":"6fc61d2d83d1d535dea2ffba94057b86","url":"assets/js/dfbe8981.3435b2de.js"},{"revision":"df590bc85996c4c3e43761df6482ab85","url":"assets/js/df53aada.9b0bb169.js"},{"revision":"0ca91204203eb933e5819c5c9890d641","url":"assets/js/df203c0f.376a156e.js"},{"revision":"a835a8848aba79a5b1a5d1803c50fa16","url":"assets/js/dd726b46.9f5d94cb.js"},{"revision":"06e71449bef300dad3956253827a9feb","url":"assets/js/dd5b562f.26f419e5.js"},{"revision":"10e2be4008a642cb9c51caa4b3c91a38","url":"assets/js/d9b3eee8.2f821862.js"},{"revision":"f341730b90b0c24c26c629e0bb953348","url":"assets/js/d90f4af5.9621681e.js"},{"revision":"8dbaa95a885705b68ef1966d365f7997","url":"assets/js/d5ce7688.eb269cc5.js"},{"revision":"81e5ede9efad525396d3f2631634f2ad","url":"assets/js/d55a815e.d6b02525.js"},{"revision":"696d442f44b1ec88341fdfcdc8352c23","url":"assets/js/d2682be5.13429f19.js"},{"revision":"dc616c174fa938a4715b44632a716f68","url":"assets/js/d1fa896a.d1b4b424.js"},{"revision":"e57acc9044cf871573e5b7eb06fb525b","url":"assets/js/ccc49370.215916d5.js"},{"revision":"d1a517b2344e13d8759960b6516f5d10","url":"assets/js/cc221b30.f8b7fa3f.js"},{"revision":"b9aa23751f1d02c11bdb4bc285976d7f","url":"assets/js/c9add68e.a92d0bd9.js"},{"revision":"0118bdf5d88bd5d919fbb72fa0031cf8","url":"assets/js/c7f3abc7.476cfec3.js"},{"revision":"de7d183b050dc7b53bc836b6a86959da","url":"assets/js/c7a70e28.558ec3ac.js"},{"revision":"6ae536fca0427630e7ede5cb6955c947","url":"assets/js/c1b92d01.6bb896d9.js"},{"revision":"753cb19d0677d631097fb66ade15f822","url":"assets/js/bfe3b7d2.1076db29.js"},{"revision":"8d9abad8f95150b24591ad1e63159a8c","url":"assets/js/b9bbf752.1a2c37ef.js"},{"revision":"dfb49c7af4078845303845df478f6a53","url":"assets/js/b95eaafa.4cad10b7.js"},{"revision":"a8fd1f4e0d7d52ba8faafa7b04ffc374","url":"assets/js/b953576d.6113e4b7.js"},{"revision":"47b6ea2bdbefaafb888b782ec9ed9aa9","url":"assets/js/b8caea93.e71c3932.js"},{"revision":"8a6c97bf44d5bed3548312afaa25179a","url":"assets/js/b283ca86.45dd5f87.js"},{"revision":"5679b04800cc407f81b8b3e5809a2259","url":"assets/js/b2814407.7eece9c0.js"},{"revision":"a4511c8e75d79bf2b46674289e2495f8","url":"assets/js/adb00d9a.28205366.js"},{"revision":"708732f645edd6b19db757f22f36f028","url":"assets/js/acfdd4f6.5cedc9b8.js"},{"revision":"776070685727b477052dc9c860858ad2","url":"assets/js/ac590df8.d71f0372.js"},{"revision":"49160d52b84341571a7bf7b6a717271d","url":"assets/js/aba21aa0.a5f4fe7a.js"},{"revision":"0db24b5a3cb976e658ed0af922356c10","url":"assets/js/aa42fff9.3d26ddfa.js"},{"revision":"12abc0f5c820a843a2c88d6c392425bb","url":"assets/js/aa3bd491.42abb34b.js"},{"revision":"f15e358efc1445146cda7638a54b6c21","url":"assets/js/a94703ab.4b63be4f.js"},{"revision":"46a890a825315d32fa2b7c92a9c53cf6","url":"assets/js/a7bd4aaa.5a7eca96.js"},{"revision":"72cfd70c67214cf89e38be42935dc2b6","url":"assets/js/a7456010.8c8f1634.js"},{"revision":"ea3bb636016cbce942736e95ea901027","url":"assets/js/a71ba949.21c26b9b.js"},{"revision":"c2cb256b6287c1da7789270ca9b13a3b","url":"assets/js/a6aa9e1f.5a133d3a.js"},{"revision":"02216a8755df23e84e1fa96de9051b2a","url":"assets/js/a6038fd8.def35454.js"},{"revision":"1d9e36d0c0d08205d18a2360e2905e02","url":"assets/js/a4e93986.573c88ce.js"},{"revision":"99c1a19a455e7dccaec684b444396f3c","url":"assets/js/9e4087bc.a5b61c58.js"},{"revision":"875e7b406c1db09fc615baefd9a6422c","url":"assets/js/9adafc71.6697f23b.js"},{"revision":"f1487f2cefa0314280c0d6fce2894b36","url":"assets/js/99d3b34a.0c16946f.js"},{"revision":"d140ef8065c973c4829a6db201bb3151","url":"assets/js/9929.a72d84ca.js"},{"revision":"dadb6b5e2c42de92fd6b5c76d555f10b","url":"assets/js/98831978.da028898.js"},{"revision":"6e8c1d7d36166c3b961f9bfed6107bfd","url":"assets/js/9875.f3e257ee.js"},{"revision":"5646b0436ed032fbbdf72c5dbe03a9c0","url":"assets/js/9848.565bc458.js"},{"revision":"3006d693bec44fa994b1fad900241642","url":"assets/js/9810.15d41456.js"},{"revision":"6257b5e9c2a7de92fd6d56eb899e6ee6","url":"assets/js/9664.18ae5342.js"},{"revision":"ad44a74d7bb6bbbf2710dbd441a28759","url":"assets/js/940b0b54.453b5ad2.js"},{"revision":"73ec2c4a7aef53a89381936612a2ce64","url":"assets/js/9342.682037a0.js"},{"revision":"655cf0d6396cc53af11a5967990452f0","url":"assets/js/9266.62fbb4a5.js"},{"revision":"c88c4dbf637b26f998671d2e0b291613","url":"assets/js/923ed0b3.62bb8676.js"},{"revision":"31501f8d064289baf250201dbe8eb495","url":"assets/js/9094fa5d.7d971c5a.js"},{"revision":"0d53487177936a86df4cb8ef41f54b99","url":"assets/js/90326f8c.6037688e.js"},{"revision":"31db47e99018eb28a3e0bd2c6f028171","url":"assets/js/9004.aea6e64b.js"},{"revision":"2421bc281f0fde23e9428176d3dc7de0","url":"assets/js/8c20996d.e718de2a.js"},{"revision":"ce6c4efe72af0fddd5ccaad83f249b24","url":"assets/js/8be8ac58.8adea125.js"},{"revision":"38431134e90fd9ccefaf808c830f5436","url":"assets/js/898514b1.22974a41.js"},{"revision":"b2dbda1b8335782d14e344c3c514894b","url":"assets/js/8975.c2f5d16e.js"},{"revision":"29c593d369f2c1533a64d91d6a41b580","url":"assets/js/8923.1ded8f3e.js"},{"revision":"1873f4e6a2bd4086ae90a9e9cb8ded90","url":"assets/js/8863.13226877.js"},{"revision":"82323fa4088de4b9bc20d37d339448c0","url":"assets/js/8847.ee094646.js"},{"revision":"5f85a9be5b65e81303be403c0cfbcb1e","url":"assets/js/8681.a6825597.js"},{"revision":"67ba9e9bafddebe2b448471de98d1bd5","url":"assets/js/853ca2df.3936616f.js"},{"revision":"65e734dc49a61bc3f45ada3e9f5f87ab","url":"assets/js/8511.2249f145.js"},{"revision":"f0d68fed2478c09df17320b471bfbf8c","url":"assets/js/8480.03ecc70c.js"},{"revision":"df2fac3efbb10b2e644b69848a125999","url":"assets/js/8465.3d374fb2.js"},{"revision":"e32e3de018d5d71bec74850a3e6e1ec6","url":"assets/js/826b5919.66678e0c.js"},{"revision":"6b9d0865575370ec78ee310fb554edd0","url":"assets/js/8073.413eecd4.js"},{"revision":"e33145ecd31cba9ccfb81a0cef1761aa","url":"assets/js/8008369e.45f44781.js"},{"revision":"8d4dc390d959c9fe8495acfc82f0f3d2","url":"assets/js/7fbc1a25.5575dfd1.js"},{"revision":"24eb4b0c6215922344c52e150f70cd41","url":"assets/js/7de88436.4942c3e3.js"},{"revision":"594ab83ca51d41723cd82fe67a61e154","url":"assets/js/7de1340d.7b5bcaaa.js"},{"revision":"5240c421466d53a81cfc6c80680370a4","url":"assets/js/7ce5d7a1.f204f8be.js"},{"revision":"f7ebeb394883f6c30fa7fbb9ab806c36","url":"assets/js/78d114c2.4fc0654d.js"},{"revision":"cfe0147cdc86f2726932430adb1655ad","url":"assets/js/782c5cf8.f6702c1a.js"},{"revision":"d0a22d387fdb50c13c4ca8eb607d70b1","url":"assets/js/767bd1d1.4541aabc.js"},{"revision":"aa8e88782bcd46aba1c0476626f585af","url":"assets/js/7658e121.ff0011f4.js"},{"revision":"6dbe78310623d8961441977b2c373dc7","url":"assets/js/7639.a5e657c1.js"},{"revision":"7db4e2d29afadf893e7920e69fec0d99","url":"assets/js/7618.e246b497.js"},{"revision":"f85447d4e072189868b66a67158d1617","url":"assets/js/7429.fedd9d79.js"},{"revision":"e28bc45cb406ca3240c892ebb33afe7e","url":"assets/js/7348.b7c47454.js"},{"revision":"cf7aff32bcd88d1824093b3330a83ffd","url":"assets/js/72044931.1c67d5bc.js"},{"revision":"f89bfdd77d7ad09cc914a7ea2902917c","url":"assets/js/719.300af062.js"},{"revision":"e3f08878d7a0a34d4aee8f7e3ae72c81","url":"assets/js/7189.7fd6c712.js"},{"revision":"6954020dc0ad568b68c2bec5a7dfbd01","url":"assets/js/7157.faea7fd8.js"},{"revision":"759c6711b002abee25308945e6ad0f2c","url":"assets/js/7011.4e08b6cd.js"},{"revision":"498381c73d2982c0ff96ab10176dced0","url":"assets/js/6cf28232.9580fc0a.js"},{"revision":"38e8b0875c1712d21cdb015342a16176","url":"assets/js/6897.318f4429.js"},{"revision":"2dd159a2652fadbc9874cc8f819d0f5b","url":"assets/js/6875c492.f7f4dd59.js"},{"revision":"5e6d8e03ba4a614dd4807d4e00842997","url":"assets/js/6620.2f3932f2.js"},{"revision":"4cf0d99ac1cfb3461f00c358459529ca","url":"assets/js/6556.cfc7566a.js"},{"revision":"f2394f8b6b945adecfda48825616874c","url":"assets/js/653.0c6ed2a7.js"},{"revision":"03e6ee913aeca89cb2e97b679a914a14","url":"assets/js/64c24869.045a7b69.js"},{"revision":"4b000673a026bfc2eea5b3fa7e6362da","url":"assets/js/6476.33ddff90.js"},{"revision":"ae73e21ff6afc3cd855c375f0305e781","url":"assets/js/634.5b3ca902.js"},{"revision":"2d06300bf4873ca40a126d781b93666e","url":"assets/js/6239.9233d14e.js"},{"revision":"7622a6fac7f3d817099685b064ad9e51","url":"assets/js/621db11d.fe89807f.js"},{"revision":"d3ae499dad4c99ae8b97df19ca04644a","url":"assets/js/6185.a1a7dcf5.js"},{"revision":"1c8c96e670c4ee65c3aae1dff7b31195","url":"assets/js/61327162.746f601f.js"},{"revision":"19402de6f5e041819628c2d33c944c86","url":"assets/js/607acb04.07d56398.js"},{"revision":"7e4281a32a4ed8ef683745abe17d4edf","url":"assets/js/5e95c892.4b9fb663.js"},{"revision":"d045c0dc8c3ba5c3592d7467dfb8b3ba","url":"assets/js/5d785d74.60f1eee6.js"},{"revision":"a45a51983c3b0adbb9a2143b745c2e67","url":"assets/js/5d6f837a.3453aedf.js"},{"revision":"97a21ca65a4af5728f5b77fa6b914afd","url":"assets/js/5a9666f9.a5ad7633.js"},{"revision":"30917c3d63747bf16824b5a404c9488d","url":"assets/js/5a762f2f.e55dd908.js"},{"revision":"77e19df0a8f63e0a040c2ed28f3f0d2a","url":"assets/js/5952.4e5d939f.js"},{"revision":"115fba4dd850ab263b764f3e71a0f8e2","url":"assets/js/5948.a5ef7a87.js"},{"revision":"a823a3d614d1bf25c788da9419cc358a","url":"assets/js/5869.38c1a126.js"},{"revision":"b122a8dc2e0910d1ff9a71452c13cdc3","url":"assets/js/582.f9bb1198.js"},{"revision":"d0058454a585823984520afa335c9af0","url":"assets/js/57ee59aa.7ff70d44.js"},{"revision":"18bc7a436a0a6a0eb4045f2c980857be","url":"assets/js/5759.be3683f3.js"},{"revision":"2d248df3a073a9876f4bcec01eacefaa","url":"assets/js/5753.7465691a.js"},{"revision":"4305f00efef7003b9ec26a9f3e976823","url":"assets/js/56fce896.8ee531d7.js"},{"revision":"ece74517ce31279de5acfd8e0d4ab2d2","url":"assets/js/5563.4bd5d127.js"},{"revision":"b6734bc6951da191c542609c4efa9e9b","url":"assets/js/54513d10.605b5d27.js"},{"revision":"7107cc6632e89872ee12e10898bc1fa0","url":"assets/js/5400.5625eab5.js"},{"revision":"f4a8a0fe55b485a3ef61144374f1262a","url":"assets/js/4dab1570.6f8d27e5.js"},{"revision":"fb36173fbe3eedf43a1c6e3588d0fb3f","url":"assets/js/4bde1fca.1c8d24d8.js"},{"revision":"594835ad84753e8589300399c9311aef","url":"assets/js/4a41a298.d97f8b2b.js"},{"revision":"72af5730cb148e4e6adc8b4d6ada6e4b","url":"assets/js/492.a7304430.js"},{"revision":"3ff94252022f3119738cfbb95645374d","url":"assets/js/4905.82713c5b.js"},{"revision":"ea1a5f68ce81db0903f71d8ef5a8e60c","url":"assets/js/4810d89a.fe129ac1.js"},{"revision":"d3e0ea3343724d56b15f5bf964ba0f69","url":"assets/js/47f9c915.2a6312f9.js"},{"revision":"5b94eba633e81bf2184e7def2a1135e1","url":"assets/js/4763.fd9afd50.js"},{"revision":"6c2a9923ddf80b2146a5a200f32c09e5","url":"assets/js/461.3ff3b2ee.js"},{"revision":"9199d4de3a3aedbaf3313ea6b3536134","url":"assets/js/45d3cddd.ad3ce532.js"},{"revision":"a39208872522e500973931ef6c23d0d8","url":"assets/js/4579.5b8e41bd.js"},{"revision":"a4664c49e0dcc3bb32d50f831b1f32dd","url":"assets/js/4572.fc09c769.js"},{"revision":"e725ba46c4da3c52221a7d6dccfc787c","url":"assets/js/448a5b13.47aa7c09.js"},{"revision":"faecccdd622d2571d48a4b5c593e88f7","url":"assets/js/43ea09b6.3f1f853d.js"},{"revision":"0d9a516d9e09442fa30fc841624223b8","url":"assets/js/4347.5c1c95e8.js"},{"revision":"57db2216899b4fa778f7b178230b4e64","url":"assets/js/4252.24bcc71a.js"},{"revision":"ca53e6a9dc85b143c606cf817960b331","url":"assets/js/41937f2e.2b650d83.js"},{"revision":"893752108683081b3ce70fad026e2ddb","url":"assets/js/4175.6aaad560.js"},{"revision":"a8b8ceaaf2b8ce31ffb7511bb31b53ba","url":"assets/js/4116.0cba0f64.js"},{"revision":"7deb2ce939d37a7bcdc817cb422ef8ec","url":"assets/js/40ccdb3c.9bf1d52c.js"},{"revision":"c74e06d09d6e7e69f36ac8a40ff54c80","url":"assets/js/4096.ddc6772a.js"},{"revision":"6cb88dacc93b7aee4de8b72b5988a396","url":"assets/js/4087.cbea34a0.js"},{"revision":"1e3d0f8d1a5be34aa662fe795bce9f15","url":"assets/js/3f29ba7c.abc75622.js"},{"revision":"1e3afaf3188d6cf788fe20c51d5a6b65","url":"assets/js/3ee3fb84.4050910a.js"},{"revision":"7a6ddc0582104b15ed14a5ddc9e27e7a","url":"assets/js/3ece3575.1760dfbd.js"},{"revision":"1635133fc96acf483ca59719a116ebb5","url":"assets/js/3948.e81b2478.js"},{"revision":"041445be48c8c6e910e7a8b4f5a04c98","url":"assets/js/393be207.4b41f181.js"},{"revision":"2bb0bc5a5db36b42a69334e7c47dece6","url":"assets/js/3894.86f01976.js"},{"revision":"a33522ed8318da5423993a01cf9293b6","url":"assets/js/3753.9ea040f2.js"},{"revision":"1385cf8ebccab885cd70439bfeeabe75","url":"assets/js/3738.e390cec7.js"},{"revision":"4787cea34b090139f1c88bb2d38aeacb","url":"assets/js/3720c009.8e6183df.js"},{"revision":"d935c3666ea96fb25f254a21d1f4c8b9","url":"assets/js/36f337b1.ad4f7383.js"},{"revision":"2dd7dc777d063d4efd477157e9a9ff78","url":"assets/js/3588.0180b949.js"},{"revision":"654e54a4b9fa61cbb3d9f3821e160a4c","url":"assets/js/3533.26badd9a.js"},{"revision":"9c9baf37741fbe6dcd3dfa264f696aa1","url":"assets/js/3433.0070b946.js"},{"revision":"27ea67cab60464cf994afd750c34b74d","url":"assets/js/3247.b67b27d5.js"},{"revision":"03e20e8b729360102891eec6a390106b","url":"assets/js/3192.b167f1a5.js"},{"revision":"16a5f3f42efcac414b975949832a4349","url":"assets/js/304a23a0.9e88c4a8.js"},{"revision":"9aa8c47ce2ceab1adfa74d2f16f31a39","url":"assets/js/3027.bc74c486.js"},{"revision":"dcdbd4489fb8457e8fbcfdb6427e5ae9","url":"assets/js/2e9e803a.95cdd48e.js"},{"revision":"20b3dc1ab56bde3d3797d6651f1b5baf","url":"assets/js/2dd9eb9e.962d090e.js"},{"revision":"917f498df4837f652cea8dd6575e6aad","url":"assets/js/2d1d8008.2343593e.js"},{"revision":"57635a73dad2eeaac79f99b7d3383728","url":"assets/js/2992.473efefc.js"},{"revision":"a6bb404c1c91fc3751b6be9dfc8ad3c3","url":"assets/js/2979.ebd88ef0.js"},{"revision":"e43ee813b8b4b60a1649b7097b309802","url":"assets/js/28ccb8e2.b80a8910.js"},{"revision":"dd9f1c5d186844642b9f27e3aaf87207","url":"assets/js/27e16d5c.c0e67593.js"},{"revision":"556530257f44dd2a9b900682e603bdc2","url":"assets/js/2713bac0.b9f4aa4a.js"},{"revision":"a32a6972dc0ae1418be5abb88cf6420e","url":"assets/js/256d6b4c.a2f23598.js"},{"revision":"211763838c8a014ae4b9caedb4733f8c","url":"assets/js/23d26d3d.b2445d4d.js"},{"revision":"4fd43d20097b6cb7f7527f12dff82dee","url":"assets/js/2191.3f08b447.js"},{"revision":"d89b2ff22ac1b8d4511387678696c130","url":"assets/js/2133.9ed2720b.js"},{"revision":"bb18930764059917f706c7c7785080a3","url":"assets/js/21270fa4.44903235.js"},{"revision":"8e06ca3b6c95fc6e623b7f7b43f57e19","url":"assets/js/2123.06314396.js"},{"revision":"aaa08eb46cd2e162dc8473d9079da9f0","url":"assets/js/1f391b9e.67bddce4.js"},{"revision":"730f44d622490ed62202a845d52f9e7a","url":"assets/js/1df93b7f.b5fb61fd.js"},{"revision":"fe668cb260f2bf573cabf1196dd1aa6a","url":"assets/js/1bd186b5.1f35f29d.js"},{"revision":"55d38d7795d99830cdeaa88949751fc2","url":"assets/js/1942.10116017.js"},{"revision":"672a23ad26fc9ee253a114d2b1970eec","url":"assets/js/19408a66.f090ef87.js"},{"revision":"713c89d332b209cd6929eaa46669582b","url":"assets/js/193da79a.7634db12.js"},{"revision":"9e1f7886951b35332f684786176337d5","url":"assets/js/1845.71080e45.js"},{"revision":"c86d0acbfb8028565d43d456866cc4b4","url":"assets/js/179b82d4.568ed7e3.js"},{"revision":"ae621f8cb23eae049bc91465e5b61d43","url":"assets/js/17896441.ba4690b3.js"},{"revision":"3d298c089fbe26e92d2f214cd294b5ea","url":"assets/js/177ac620.9c2f994a.js"},{"revision":"8f42e61089c1b27c5e3d4cb5e0422e90","url":"assets/js/1715.c5b75129.js"},{"revision":"5f0790b7afa4510f97cc735556b939de","url":"assets/js/162c7fa0.841f61b8.js"},{"revision":"17d2f0132e870ba3fd9fb0e15ef13e3c","url":"assets/js/1600.a04b2f8c.js"},{"revision":"33b6bbb01a5a90dc67f9e3b4eb36a4a1","url":"assets/js/14eb3368.b9cee6eb.js"},{"revision":"f72b8f300aeafcac3645d60c70a8c63d","url":"assets/js/148a248b.d4402f3c.js"},{"revision":"f81cb09524dd7c2ec10da9f926624237","url":"assets/js/1443.4292eece.js"},{"revision":"0c36e9810b6a1dd9de0303b11508bec4","url":"assets/js/1319c958.e208e4ee.js"},{"revision":"00e2aa3bccd8a2bb7db15a01402035a5","url":"assets/js/1069.c811a5c8.js"},{"revision":"5ce0b2ee29b6cd9e4b7f0d5eefdd3c85","url":"assets/js/0e5813ea.364bbbb7.js"},{"revision":"cf374ae3b06ec38a294799e3930a6c74","url":"assets/js/0e384e19.b212bcd1.js"},{"revision":"e5d55856a79d496f5c6578203d8e3c90","url":"assets/js/0a3b6be8.84c15ec5.js"},{"revision":"c7d6bf94be29ab691d3a1eebd399d4e4","url":"assets/js/0962a2ae.9aab7019.js"},{"revision":"622567c4a3e978bf0b093d89299cbeae","url":"assets/js/0786d169.4fd1c666.js"},{"revision":"18edfe7f83d9ec45b371f6901006dedf","url":"assets/js/042d3107.722db569.js"},{"revision":"a64d04293f08b6ba7340700cf600ecbe","url":"assets/js/02366042.64ef1a7a.js"},{"revision":"57a7221eee8de14be0d79123346e5b5a","url":"assets/js/01a85c17.96ef759a.js"},{"revision":"7560da76c38861beb7d54ce3da643ade","url":"assets/js/015a3104.d9670b04.js"},{"revision":"bb0d3924cb8db489ee74d3a7ba01c7af","url":"assets/js/0058b4c6.1f72a059.js"},{"revision":"c2754fbd3ea4af623f56c9be739e93b0","url":"assets/css/styles.7a237a7e.css"},{"revision":"6518653739b6fd81379465f77b5fa7b8","url":"img/eggbig.png"},{"revision":"d56d75f8606b57f75cdc4d5dc52a737d","url":"img/dog.png"},{"revision":"98fe911fc0be4270bad5ff38e2f3a3ed","url":"img/chicken.png"},{"revision":"38da0f161984d27f91caddd396d6cbcc","url":"img/chicken-big.png"},{"revision":"bc56a131ae62e6d99219322a97d94006","url":"img/Lianddy.png"},{"revision":"f495f137b959b2c7dabb49bfe9d03ad7","url":"img/La.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Limbs_1.png"},{"revision":"f23a027c62a2910a5e0006f848ffdc8b","url":"games/assets/Facial_1.png"},{"revision":"34833da0cd3c297cc7c7db9ff4dbce59","url":"games/assets/Egg_Shells_1.png"},{"revision":"b50891c263593bfeae33681c409c87e0","url":"games/assets/Accessories_1.png"},{"revision":"6c9a4c176c71f6f9a64d13e4ff24f0ee","url":"cards/ai-635.jpg"}];
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