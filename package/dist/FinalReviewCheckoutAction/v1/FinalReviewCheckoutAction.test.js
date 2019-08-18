"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mockComponents = _interopRequireDefault(require("../../../tests/mockComponents"));

var _FinalReviewCheckoutAction = _interopRequireDefault(require("./FinalReviewCheckoutAction"));

var checkoutSummary = {
  displayShipping: "$5.25",
  displaySubtotal: "$275.77",
  displayTotal: "$288.64",
  displayTax: "$7.62",
  items: [{
    _id: "123",
    attributes: [{
      label: "Color",
      value: "Red"
    }, {
      label: "Size",
      value: "Medium"
    }],
    compareAtPrice: {
      displayAmount: "$45.00"
    },
    currentQuantity: 3,
    imageURLs: {
      small: "//placehold.it/150",
      thumbnail: "//placehold.it/100"
    },
    isLowQuantity: true,
    price: {
      displayAmount: "$20.00"
    },
    productSlug: "product-slug",
    productVendor: "Patagonia",
    title: "A Great Product",
    quantity: 2
  }, {
    _id: "456",
    attributes: [{
      label: "Color",
      value: "Black"
    }, {
      label: "Size",
      value: "10"
    }],
    currentQuantity: 500,
    imageURLs: {
      small: "//placehold.it/150",
      thumbnail: "//placehold.it/100"
    },
    isLowQuantity: false,
    price: {
      displayAmount: "$78.00"
    },
    productSlug: "product-slug",
    productVendor: "Patagonia",
    title: "Another Great Product",
    quantity: 1
  }]
};
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_FinalReviewCheckoutAction.default, {
    checkoutSummary: checkoutSummary,
    label: "Payment Information",
    stepNumber: 4,
    onReadyForSaveChange: function onReadyForSaveChange() {
      return true;
    },
    onSubmit: function onSubmit() {
      return true;
    },
    components: _mockComponents.default
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});