import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Link from "./Link";
test("Link component with image snapshot", function () {
  var component = renderer.create(React.createElement(Link, {
    href: "http://google.com"
  }, React.createElement("img", {
    src: "/storefront-component-library-logo.svg",
    width: "200",
    height: "200",
    alt: "Reaction Storefront Component Library Logo"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Link component with text snapshot", function () {
  var component = renderer.create(React.createElement(Link, {
    href: "http://google.com"
  }, "Click here"));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Link component with onClick hander", function () {
  var testClickHandler = jest.fn();
  var component = shallow(React.createElement(Link, {
    href: "http://google.com",
    onClick: testClickHandler
  }, "Click here"));
  component.simulate("click");
  expect(testClickHandler).toHaveBeenCalled();
});
test("Link component with onClick hander and no href", function () {
  var testClickHandler = jest.fn();
  var component = shallow(React.createElement(Link, {
    onClick: testClickHandler
  }, "Click here"));
  component.simulate("click");
  expect(testClickHandler).toHaveBeenCalled();
});