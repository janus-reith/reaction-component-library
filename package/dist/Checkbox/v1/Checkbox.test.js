"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

test("renders with props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Checkbox.default, {
    label: "Label"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders disabled", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Checkbox.default, {
    label: "Disabled",
    isReadOnly: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});