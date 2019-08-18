"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = require("react");

var mockComponents = {};

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
    (0, _inherits2.default)(mockedComponent, _Component);

    function mockedComponent() {
      (0, _classCallCheck2.default)(this, mockedComponent);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(mockedComponent).apply(this, arguments));
    }

    (0, _createClass2.default)(mockedComponent, [{
      key: "render",
      value: function render() {
        return "".concat(name, "(").concat(stringifyJSONCircularSafe(this.props), ")");
      }
    }]);
    return mockedComponent;
  }(_react.Component), _class.displayName = name, _temp;
}
/**
 * @summary JSON.stringify, but only top-level props
 * @param {Object} obj The object
 * @returns {String} The object as a JSON string
 */


function stringifyJSONCircularSafe(obj) {
  var isFirst = true;
  return JSON.stringify(obj, function (key, value) {
    if ((0, _typeof2.default)(value) === "object" && value !== null && !isFirst) {
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
var _default = mockComponents;
exports.default = _default;