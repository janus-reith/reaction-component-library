import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import Checkbox from "./Checkbox";
test("renders with props", function () {
  var component = renderer.create(React.createElement(Checkbox, {
    label: "Label"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders disabled", function () {
  var component = renderer.create(React.createElement(Checkbox, {
    label: "Disabled",
    isReadOnly: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});