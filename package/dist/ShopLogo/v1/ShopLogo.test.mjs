import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import ShopLogo from "./ShopLogo";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(ShopLogo, {
    shopLogoUrl: "//placehold.it/60",
    shopName: "Reaction"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});