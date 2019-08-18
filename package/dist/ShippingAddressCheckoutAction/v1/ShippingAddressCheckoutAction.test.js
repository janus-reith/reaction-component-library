"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _ShippingAddressCheckoutAction = _interopRequireDefault(require("./ShippingAddressCheckoutAction"));

test("basic snapshot with empty address", function () {
  /* eslint-disable */
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ShippingAddressCheckoutAction.default, {
    label: "Shipping Address",
    stepNumber: 1,
    onReadyForSaveChange: function onReadyForSaveChange() {
      return true;
    },
    onSubmit: function onSubmit() {
      return true;
    },
    components: _mockComponents.default,
    fulfillmentGroup: {
      data: {
        shippingAddress: null
      }
    }
  }));
  /* eslint-enable */


  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with address", function () {
  var address = {
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  };
  /* eslint-disable */

  var component = _reactTestRenderer.default.create(_react.default.createElement(_ShippingAddressCheckoutAction.default, {
    label: "Shipping Address",
    stepNumber: 1,
    onReadyForSaveChange: function onReadyForSaveChange() {
      return true;
    },
    onSubmit: function onSubmit() {
      return true;
    },
    components: _mockComponents.default,
    fulfillmentGroup: {
      data: {
        shippingAddress: address
      }
    }
  }));
  /* eslint-enable */


  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});