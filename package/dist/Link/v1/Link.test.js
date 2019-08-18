"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Link = _interopRequireDefault(require("./Link"));

test("Link component with image snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Link.default, {
    href: "http://google.com"
  }, _react.default.createElement("img", {
    src: "/storefront-component-library-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Storefront Component Library Logo"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Link component with text snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Link.default, {
    href: "http://google.com"
  }, "Click here"));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Link component with onClick hander", function () {
  var testClickHandler = jest.fn();
  var component = (0, _enzyme.shallow)(_react.default.createElement(_Link.default, {
    href: "http://google.com",
    onClick: testClickHandler
  }, "Click here"));
  component.simulate("click");
  expect(testClickHandler).toHaveBeenCalled();
});
test("Link component with onClick hander and no href", function () {
  var testClickHandler = jest.fn();
  var component = (0, _enzyme.shallow)(_react.default.createElement(_Link.default, {
    onClick: testClickHandler
  }, "Click here"));
  component.simulate("click");
  expect(testClickHandler).toHaveBeenCalled();
});