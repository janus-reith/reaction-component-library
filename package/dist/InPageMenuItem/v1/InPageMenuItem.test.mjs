import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import InPageMenuItem from "./InPageMenuItem";
test("InPageMenuItem basic component", function () {
  var component = renderer.create(React.createElement(InPageMenuItem, {
    href: "/test/url/",
    label: "Test label",
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("InPageMenuItem with onClick instead of href", function () {
  var onClick = function onClick() {};

  var component = renderer.create(React.createElement(InPageMenuItem, {
    label: "Test label",
    onClick: onClick,
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("InPageMenuItem selected", function () {
  var component = renderer.create(React.createElement(InPageMenuItem, {
    isSelected: true,
    href: "/test/url/",
    label: "Test label",
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});