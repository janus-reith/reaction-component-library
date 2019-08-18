import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.for-each";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
var mockComponents = {};
import { Component } from "react";
/**
 * @summary Creates a React component with given name, that simply renders its own name + props as a string
 * @param {String} name A component name
 * @returns {String} The object as a JSON string
 */

function makeMockedComponent(name) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(mockedComponent, _Component);

    function mockedComponent() {
      _classCallCheck(this, mockedComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(mockedComponent).apply(this, arguments));
    }

    _createClass(mockedComponent, [{
      key: "render",
      value: function render() {
        return "".concat(name, "(").concat(stringifyJSONCircularSafe(this.props), ")");
      }
    }]);

    return mockedComponent;
  }(Component), _class.displayName = name, _temp;
}
/**
 * @summary JSON.stringify, but only top-level props
 * @param {Object} obj The object
 * @returns {String} The object as a JSON string
 */


function stringifyJSONCircularSafe(obj) {
  var isFirst = true;
  return JSON.stringify(obj, function (key, value) {
    if (_typeof(value) === "object" && value !== null && !isFirst) {
      return "[Object]";
    }

    isFirst = false;
    return value;
  });
}
/**
 * Components
 */


["Accordion", "AccordionFormList", "Address", "AddressBook", "AddressCapture", "AddressChoice", "AddressForm", "AddressReview", "AddressSelect", "BadgeOverlay", "Button", "CartItem", "CartItemDetail", "CartItems", "CartSummary", "CatalogGrid", "CatalogGridItem", "Checkbox", "CheckoutAction", "CheckoutActionComplete", "CheckoutActionIncomplete", "ErrorsBlock", "ExampleIOUPaymentForm", "Field", "InlineAlert", "InPageMenuItem", "ItemAddForm", "ItemEditForm", "Link", "MiniCartSummary", "PaymentsCheckoutAction", "PhoneNumberInput", "Price", "ProgressiveImage", "ProfileImage", "QuantityInput", "RegionInput", "Select", "StockWarning", "TextInput", "SelectableItem", "SelectableList", "StripeForm", "StripePaymentInput"].forEach(function (componentName) {
  mockComponents[componentName] = makeMockedComponent(componentName);
});
/**
 * Elements
 */

["iconClear", "iconDismiss", "iconError", "iconExpand", "iconPlus", "iconValid", "spinner", "iconVisa", "iconAmericanExpress", "iconMastercard", "iconDiscover"].forEach(function (componentName) {
  mockComponents[componentName] = componentName;
});
export default mockComponents;