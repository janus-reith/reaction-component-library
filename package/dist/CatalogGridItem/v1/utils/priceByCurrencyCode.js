"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = priceByCurrencyCode;

/**
 * Determines the pricing a product given a currency code.
 *
 * @param {String} currencyCode - the shop's set currency code, i.e. "USD"
 * @param {Array} pricing - An array of pricing objects with different currencies.
 * @returns {Object} - pricing object, or null if none found.
 */
function priceByCurrencyCode(currencyCode, pricing) {
  var _pricing = pricing.find(function (price) {
    return price.currency.code === currencyCode;
  });

  return _pricing || null;
}