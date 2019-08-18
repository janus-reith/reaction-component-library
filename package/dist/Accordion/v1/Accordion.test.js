"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _Accordion = _interopRequireDefault(require("./Accordion"));

// import { shallow } from "enzyme";
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Accordion.default, {
    label: "mock label",
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});