import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import SelectableItem from "./SelectableItem";
test("basic snapshot with empty props", function () {
  var component = renderer.create(React.createElement(SelectableItem, {
    label: "Label",
    detail: "Detail",
    value: "detail"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});