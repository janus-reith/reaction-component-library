import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import PhoneNumberInput from "./PhoneNumberInput";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(PhoneNumberInput, {
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});