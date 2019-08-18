"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _InPageMenu = _interopRequireDefault(require("./InPageMenu"));

test("basic snapshot", function () {
  var menuItems = [{
    href: "/label/a",
    label: "Label A"
  }, {
    href: "/label/b",
    label: "Label B"
  }, {
    href: "/label/c",
    label: "Label C (Selected / Active)",
    isSelected: true
  }, {
    href: "/label/d",
    label: "Label D"
  }, {
    href: "/label/e",
    label: "Label E"
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_InPageMenu.default, {
    menuItems: menuItems,
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});