import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import ShippingAddressCheckoutAction from "./ShippingAddressCheckoutAction";
test("basic snapshot with empty address", function () {
  /* eslint-disable */
  var component = renderer.create(React.createElement(ShippingAddressCheckoutAction, {
    label: "Shipping Address",
    stepNumber: 1,
    onReadyForSaveChange: function onReadyForSaveChange() {
      return true;
    },
    onSubmit: function onSubmit() {
      return true;
    },
    components: mockComponents,
    fulfillmentGroup: {
      data: {
        shippingAddress: null
      }
    }
  }));
  /* eslint-enable */

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with address", function () {
  var address = {
    address1: "7742 Hwy 23",
    address2: "",
    country: "US",
    city: "Belle Chasse",
    fullName: "Salvos Seafood",
    postal: "70037",
    region: "LA",
    phone: "(504) 393-7303"
  };
  /* eslint-disable */

  var component = renderer.create(React.createElement(ShippingAddressCheckoutAction, {
    label: "Shipping Address",
    stepNumber: 1,
    onReadyForSaveChange: function onReadyForSaveChange() {
      return true;
    },
    onSubmit: function onSubmit() {
      return true;
    },
    components: mockComponents,
    fulfillmentGroup: {
      data: {
        shippingAddress: address
      }
    }
  }));
  /* eslint-enable */

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});