"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.number.to-fixed");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatMoney;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _accountingJs = _interopRequireDefault(require("accounting-js"));

var _currencyDefinitions = _interopRequireDefault(require("./currencyDefinitions"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * A wrapper around accounting.formatMoney that handles minor differences between Reaction
 * API and accounting.js API.
 * @param {Number} price - A price (float)
 * @param {String} [currencyCode] A currency code, case insensitive. Defaults to "USD".
 * @returns {String} Formatted currency string such as "$15.99". If a matching currency is not provided,
 *   returns `accounting.toFixed(price, 2)`.
 */
function formatMoney(price) {
  var currencyCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "USD";

  var currencyInfo = _currencyDefinitions.default[currencyCode.toUpperCase()]; // Implementation of toFixed() that treats floats more like decimal values than binary,
  // fixing inconsistent precision rounding in JavaScript (where some .05 values round up,
  // while others round down):


  if (!currencyInfo) return _accountingJs.default.toFixed(price, 2); // If there are no decimal places, in the case of the Japanese Yen, we adjust it here.

  var priceToFormat = price;

  if (currencyInfo.scale === 0) {
    priceToFormat = price * 100;
  }

  var currencyFormatSettings = _objectSpread({}, currencyInfo); // Precision is mis-used in accounting js. Scale is the proper term for number
  // of decimal places. Let's adjust it here so accounting.js does not break.


  if (typeof currencyInfo.scale === "number") {
    currencyFormatSettings.precision = currencyInfo.scale;
  }

  return _accountingJs.default.formatMoney(priceToFormat, currencyFormatSettings);
}