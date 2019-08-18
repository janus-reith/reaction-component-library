"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _CartItemDetail = _interopRequireDefault(require("./CartItemDetail"));

test("basic snapshot without props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, null));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with props", function () {
  var attributes = [{
    label: "Color",
    value: "Red"
  }, {
    label: "Size",
    value: "Medium"
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, {
    title: "Mock Product Title",
    productSlug: "product-slug",
    attributes: attributes
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with vendor attribute", function () {
  var attributes = [{
    label: "Color",
    value: "Red"
  }, {
    label: "Size",
    value: "Medium"
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, {
    title: "Mock Product Title",
    productSlug: "product-slug",
    productVendor: "Patagonia",
    attributes: attributes
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with quantity attribute", function () {
  var attributes = [{
    label: "Color",
    value: "Red"
  }, {
    label: "Size",
    value: "Medium"
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, {
    title: "Mock Product Title",
    productSlug: "product-slug",
    attributes: attributes,
    quantity: 3
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with product url path prop", function () {
  var attributes = [{
    label: "Color",
    value: "Red"
  }, {
    label: "Size",
    value: "Medium"
  }];

  var component = _reactTestRenderer.default.create(_react.default.createElement(_CartItemDetail.default, {
    title: "Mock Product Title",
    productURLPath: "product/",
    productSlug: "product-slug",
    attributes: attributes
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});