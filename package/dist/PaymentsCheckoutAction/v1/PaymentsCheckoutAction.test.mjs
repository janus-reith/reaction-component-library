import "core-js/modules/es.symbol";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.find";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.date.to-json";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.url.to-json";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import mockComponents from "../../../tests/mockComponents";
import realComponents from "../../../tests/realComponents";
import PaymentsCheckoutAction from "./PaymentsCheckoutAction";
var paymentMethods = [{
  displayName: "Credit Card",
  InputComponent: mockComponents.StripePaymentInput,
  name: "stripe_card",
  shouldCollectBillingAddress: true
}, {
  displayName: "IOU",
  InputComponent: mockComponents.ExampleIOUPaymentForm,
  name: "iou_example",
  shouldCollectBillingAddress: true
}];
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(PaymentsCheckoutAction, {
    components: mockComponents,
    label: "Payment",
    paymentMethods: paymentMethods,
    stepNumber: 3
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("snapshot with a partial payment", function () {
  var payments = [{
    displayName: "IOU from Fats Domino",
    payment: {
      amount: 15,
      data: {
        fullName: "Fats Domino"
      },
      method: "iou_example"
    }
  }];
  var component = renderer.create(React.createElement(PaymentsCheckoutAction, {
    components: mockComponents,
    label: "Payment",
    paymentMethods: paymentMethods,
    payments: payments,
    stepNumber: 3
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("snapshot with an alert", function () {
  var alert = {
    alertType: "error",
    title: "The payment information you entered may be incorrect.",
    message: "Please review our error."
  };
  var component = renderer.create(React.createElement(PaymentsCheckoutAction, {
    alert: alert,
    components: mockComponents,
    label: "Payment",
    paymentMethods: paymentMethods,
    stepNumber: 3
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders a selectable list and the first method's input component", function () {
  var wrapper = mount(React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(PaymentsCheckoutAction, {
    label: "Payment",
    paymentMethods: paymentMethods,
    stepNumber: 3
  })));
  expect(wrapper.find('input[value="stripe_card"]').length).toBe(1);
  expect(wrapper.find(mockComponents.StripePaymentInput).length).toBe(1);
});
test("does not render the SelectableList if there's only one method", function () {
  var wrapper = mount(React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(PaymentsCheckoutAction, {
    label: "Payment",
    paymentMethods: [paymentMethods[0]],
    stepNumber: 3
  })));
  expect(wrapper.find('input[value="stripe_card"]').length).toBe(0);
});
test("does not render the AddressForm if the method doesn't need it", function () {
  var wrapper = mount(React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(PaymentsCheckoutAction, {
    label: "Payment",
    paymentMethods: [_objectSpread({}, paymentMethods[0], {
      shouldCollectBillingAddress: false
    })],
    stepNumber: 3
  })));
  expect(wrapper.find('input[name="address1"]').length).toBe(0);
});