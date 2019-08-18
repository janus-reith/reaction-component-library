"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _CheckoutActionComplete = _interopRequireDefault(require("./CheckoutActionComplete"));

test("basic snapshot", function () {
  var onClick = function onClick() {};

  var Address = "<div><p>123 Main Street</p><p>Anytown, USA 01776</p></div>";

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CheckoutActionComplete.default, {
    components: _mockComponents.default,
    label: "Shipping address",
    content: Address,
    onClickChangeButton: onClick,
    stepNumber: 2
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});