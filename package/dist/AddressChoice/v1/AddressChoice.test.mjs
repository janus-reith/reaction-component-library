import "core-js/modules/es.array.find";
import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import mockComponents from "../../../tests/mockComponents";
import realComponents from "../../../tests/realComponents";
import AddressChoice from "./AddressChoice";
var addresses = [{
  _id: "20",
  address1: "7742 Hwy 23",
  address2: "",
  country: "US",
  city: "Belle Chasse",
  fullName: "Salvos Seafood",
  postal: "70037",
  region: "LA",
  phone: "(504) 393-7303"
}, {
  _id: "21",
  address1: "35 Akin Adesola St",
  address2: "",
  country: "NG",
  city: "Lagos",
  fullName: "Ocean Basket Victoria Island",
  postal: "101241",
  region: "Victoria Island",
  phone: "234 816 059 1821"
}];
test("simple snapshot", function () {
  var component = renderer.create(React.createElement(AddressChoice, {
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("simple snapshot read only", function () {
  var component = renderer.create(React.createElement(AddressChoice, {
    components: mockComponents,
    isReadOnly: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onChange when a field changes", function () {
  var onChange = jest.fn();
  var wrapper = mount(React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(AddressChoice, {
    onChange: onChange
  })));
  onChange.mockClear();
  wrapper.find('input[name="address1"]').simulate("blur", {
    target: {
      value: "FOO"
    }
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith({
    address1: "FOO",
    address2: null,
    addressName: "",
    city: null,
    country: null,
    fullName: null,
    isCommercial: false,
    phone: null,
    postal: null,
    region: null
  });
});
test("snapshot with addresses", function () {
  var component = renderer.create(React.createElement(AddressChoice, {
    components: mockComponents,
    addresses: addresses
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("calls onChange on mount and when a different provided address is selected", function () {
  var onChange = jest.fn();
  var wrapper = mount(React.createElement(ComponentsProvider, {
    value: realComponents
  }, React.createElement(AddressChoice, {
    addresses: addresses,
    onChange: onChange
  })));
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(addresses[0]);
  onChange.mockClear();
  wrapper.find('input[value="1"]').simulate("change", {
    target: {
      checked: true
    }
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(addresses[1]);
});