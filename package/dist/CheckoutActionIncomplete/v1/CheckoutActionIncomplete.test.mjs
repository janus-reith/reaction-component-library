import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import CheckoutActionIncomplete from "./CheckoutActionIncomplete";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(CheckoutActionIncomplete, {
    label: "Shipping information",
    stepNumber: 2
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});