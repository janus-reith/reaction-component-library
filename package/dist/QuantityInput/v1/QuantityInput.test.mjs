import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import QuantityInput from "./QuantityInput";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(QuantityInput, null));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});