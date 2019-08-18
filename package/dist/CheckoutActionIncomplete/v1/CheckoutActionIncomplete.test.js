"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _CheckoutActionIncomplete = _interopRequireDefault(require("./CheckoutActionIncomplete"));

test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutActionIncomplete.default, {
    label: "Shipping information",
    stepNumber: 2
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});