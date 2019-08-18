import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer"; // import { shallow } from "enzyme";

import mockComponents from "../../../tests/mockComponents";
import Accordion from "./Accordion";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(Accordion, {
    label: "mock label",
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});