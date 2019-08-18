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
import "core-js/modules/es.string.trim";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.url.to-json";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { testInput } from "composable-form-tests";
import mockComponents from "../../../tests/mockComponents";
import Select from "../../Select/v1";
import TextInput from "../../TextInput/v1";
import RegionInput from "./RegionInput"; // Must have the real Select and TextInput components passed in for all tests to pass

var components = _objectSpread({}, mockComponents, {
  Select: Select,
  TextInput: TextInput
});

var options = [{
  value: "AA",
  label: "A State"
}, {
  value: "BB",
  label: "B State"
}]; // Test when Input is rendered

testInput({
  component: RegionInput,
  props: {
    components: components
  },
  defaultValue: null,
  exampleValueOne: "ONE",
  exampleValueTwo: "TWO",
  mount: mount,
  simulateChanging: function simulateChanging(wrapper, value) {
    wrapper.find("input").simulate("change", {
      target: {
        value: value
      }
    });
  },
  simulateChanged: function simulateChanged(wrapper, value) {
    wrapper.find("input").simulate("blur", {
      target: {
        value: value
      }
    });
  },
  simulateSubmit: function simulateSubmit(wrapper) {
    wrapper.find("input").simulate("keypress", {
      which: 13
    });
  }
}); // Test when Select is rendered

testInput({
  component: RegionInput,
  props: {
    className: "react-select",
    classNamePrefix: "react-select",
    components: components,
    menuIsOpen: true,
    // This is necessary so that we can click an option to simulate changing
    options: options // This is what triggers it to be a Select

  },
  defaultValue: null,
  exampleValueOne: "AA",
  exampleValueTwo: "BB",
  mount: mount,
  simulateChanged: function simulateChanged(wrapper, value) {
    var optToSelect = options.find(function (option) {
      return option.value === value;
    });
    var labelToSelect = optToSelect ? optToSelect.label : null;
    var selectOption = wrapper.find('[id*="-option-"]').findWhere(function (opt) {
      return (opt.props().children || "").trim() === labelToSelect;
    });
    selectOption.simulate("click");
    wrapper.update();
  }
});
test("basic snapshot with only the components and required props should render a TextInput", function () {
  var component = renderer.create(React.createElement(RegionInput, {
    name: "region",
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with other form props", function () {
  var component = renderer.create(React.createElement(RegionInput, {
    components: mockComponents,
    value: "California",
    name: "region",
    isReadOnly: true
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with pre-filled value in TextInput", function () {
  var component = renderer.create(React.createElement(RegionInput, {
    name: "region",
    components: mockComponents,
    value: "California"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with pre-filled value in Select", function () {
  var component = renderer.create(React.createElement(RegionInput, {
    name: "region",
    components: mockComponents,
    options: options,
    value: "BB"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("basic snapshot with options should render a Select", function () {
  var component = renderer.create(React.createElement(RegionInput, {
    name: "region",
    components: mockComponents,
    options: options
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});