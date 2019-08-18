"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _QuantityInput = _interopRequireDefault(require("./QuantityInput"));

test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_QuantityInput.default, null));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});