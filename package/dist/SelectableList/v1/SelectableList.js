"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentsContext = require("@reactioncommerce/components-context");

var _utils = require("../../utils");

var StyledListAction = _styledComponents.default.div.withConfig({
  displayName: "SelectableList__StyledListAction",
  componentId: "jnbusj-0"
})(["align-options:center;box-sizing:border-box;display:flex;height:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";@media (max-width:768px){height:", ";}"], (0, _utils.applyTheme)("SelectableList.height"), (0, _utils.applyTheme)("SelectableList.itemPaddingBottom"), (0, _utils.applyTheme)("SelectableList.itemPaddingLeft"), (0, _utils.applyTheme)("SelectableList.itemPaddingRight"), (0, _utils.applyTheme)("SelectableList.itemPaddingTop"), (0, _utils.applyTheme)("SelectableList.heightMobile"));

var BorderedListAction = (0, _styledComponents.default)(StyledListAction).withConfig({
  displayName: "SelectableList__BorderedListAction",
  componentId: "jnbusj-1"
})(["border-bottom-color:", ";border-bottom-style:", ";border-bottom-width:", ";border-left-color:", ";border-left-style:", ";border-left-width:", ";border-right-color:", ";border-right-style:", ";border-right-width:", ";"], (0, _utils.applyTheme)("SelectableList.borderColor"), (0, _utils.applyTheme)("SelectableList.borderStyle"), (0, _utils.applyTheme)("SelectableList.borderWidth"), (0, _utils.applyTheme)("SelectableList.borderColor"), (0, _utils.applyTheme)("SelectableList.borderStyle"), (0, _utils.applyTheme)("SelectableList.borderWidth"), (0, _utils.applyTheme)("SelectableList.borderColor"), (0, _utils.applyTheme)("SelectableList.borderStyle"), (0, _utils.applyTheme)("SelectableList.borderWidth"));

var StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "SelectableList__StyledWrapper",
  componentId: "jnbusj-2"
})(["padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";"], (0, _utils.applyTheme)("SelectableList.itemPaddingBottom"), (0, _utils.applyTheme)("SelectableList.itemPaddingLeft"), (0, _utils.applyTheme)("SelectableList.itemPaddingRight"), (0, _utils.applyTheme)("SelectableList.itemPaddingTop"));

var StyledList = _styledComponents.default.div.withConfig({
  displayName: "SelectableList__StyledList",
  componentId: "jnbusj-3"
})(["width:100%;fieldset{border-color:transparent;margin:0;padding:0;}"]);

var BorderedList = (0, _styledComponents.default)(StyledList).withConfig({
  displayName: "SelectableList__BorderedList",
  componentId: "jnbusj-4"
})(["fieldset{border-bottom:none;border-left:none;border-right:none;border-top-color:", ";border-top-left-radius:", ";border-top-right-radius:", ";border-top-style:", ";border-top-width:", ";}> *:last-child{border-bottom-right-radius:", ";border-bottom-left-radius:", ";div:last-child{border-bottom-right-radius:", ";border-bottom-left-radius:", ";}}"], (0, _utils.applyTheme)("SelectableList.borderColor"), (0, _utils.applyTheme)("SelectableList.borderRadius"), (0, _utils.applyTheme)("SelectableList.borderRadius"), (0, _utils.applyTheme)("SelectableList.borderStyle"), (0, _utils.applyTheme)("SelectableList.borderWidth"), (0, _utils.applyTheme)("SelectableList.borderRadius"), (0, _utils.applyTheme)("SelectableList.borderRadius"), (0, _utils.applyTheme)("SelectableList.borderRadius"), (0, _utils.applyTheme)("SelectableList.borderRadius"));

var BorderedWrapper = _styledComponents.default.div.withConfig({
  displayName: "SelectableList__BorderedWrapper",
  componentId: "jnbusj-5"
})(["border-bottom-color:", ";border-bottom-style:", ";border-bottom-width:", ";border-left-color:", ";border-left-style:", ";border-left-width:", ";border-right-color:", ";border-right-style:", ";border-right-width:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";> *:last-child{border-bottom-left-radius:", ";border-bottom-right-radius:", ";}"], (0, _utils.applyTheme)("SelectableList.borderColor"), (0, _utils.applyTheme)("SelectableList.borderStyle"), (0, _utils.applyTheme)("SelectableList.borderWidth"), (0, _utils.applyTheme)("SelectableList.borderColor"), (0, _utils.applyTheme)("SelectableList.borderStyle"), (0, _utils.applyTheme)("SelectableList.borderWidth"), (0, _utils.applyTheme)("SelectableList.borderColor"), (0, _utils.applyTheme)("SelectableList.borderStyle"), (0, _utils.applyTheme)("SelectableList.borderWidth"), (0, _utils.applyTheme)("SelectableList.itemPaddingBottom"), (0, _utils.applyTheme)("SelectableList.itemPaddingLeft"), (0, _utils.applyTheme)("SelectableList.itemPaddingRight"), (0, _utils.applyTheme)("SelectableList.itemPaddingTop"), (0, _utils.applyTheme)("SelectableList.borderRadius"), (0, _utils.applyTheme)("SelectableList.borderRadius"));

var HorizontalList = _styledComponents.default.div.withConfig({
  displayName: "SelectableList__HorizontalList",
  componentId: "jnbusj-6"
})(["display:flex;"]);

var HorizontalWrapper = _styledComponents.default.div.withConfig({
  displayName: "SelectableList__HorizontalWrapper",
  componentId: "jnbusj-7"
})(["border-left-color:", ";border-left-style:", ";border-left-width:", ";flex:1 1 auto;padding-bottom:", ";padding-left:", ";padding-right:", ";padding-top:", ";&:first-of-type{border-left:none;padding-right:", ";}&:last-of-type{padding-left:", ";}"], (0, _utils.applyTheme)("SelectableList.borderColor"), (0, _utils.applyTheme)("SelectableList.borderStyle"), (0, _utils.applyTheme)("SelectableList.borderWidth"), (0, _utils.applyTheme)("SelectableList.horizontalItemPaddingBottom"), (0, _utils.applyTheme)("SelectableList.horizontalItemPaddingLeft"), (0, _utils.applyTheme)("SelectableList.horizontalItemPaddingRight"), (0, _utils.applyTheme)("SelectableList.horizontalItemPaddingTop"), (0, _utils.applyTheme)("SelectableList.horizontalFirstItemPaddingRight"), (0, _utils.applyTheme)("SelectableList.horizontalLastItemPaddingLeft"));

var SelectableList =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SelectableList, _Component);

  function SelectableList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SelectableList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectableList).call(this, props));

    _this.onChange = function (isChecked, value) {
      if (isChecked) {
        _this.setValue(value);
      }
    };

    _this.state = {
      value: props.value || ""
    };
    return _this;
  } // eslint-disable-next-line camelcase


  (0, _createClass2.default)(SelectableList, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.handleChange(this.props.value || "");
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var value = this.props.value;
      var nextValue = nextProps.value; // Whenever a changed value prop comes in, we reset state to that, thus becoming clean.

      if (nextValue && value !== nextValue) {
        this.setState({
          value: nextValue || ""
        });
        this.handleChange(nextValue || "");
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setState({
        value: value
      });
      this.handleChange(value);
    }
  }, {
    key: "resetValue",
    value: function resetValue() {
      this.setValue(this.props.value || "");
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      if (this.lastValue === value) return;
      this.lastValue = value;
      var _this$props = this.props,
          onChanging = _this$props.onChanging,
          onChange = _this$props.onChange;
      onChanging(value);
      onChange(value);
    } // Input is dirty if value prop doesn't match value state. Whenever a changed
    // value prop comes in, we reset state to that, thus becoming clean.

  }, {
    key: "isDirty",
    value: function isDirty() {
      return this.state.value !== this.props.value;
    }
  }, {
    key: "renderBorderedList",
    value: function renderBorderedList() {
      var _this2 = this;

      var _this$props2 = this.props,
          options = _this$props2.options,
          listAction = _this$props2.listAction,
          isLeftAligned = _this$props2.isLeftAligned,
          isReadOnly = _this$props2.isReadOnly,
          SelectableItem = _this$props2.components.SelectableItem;
      return _react.default.createElement(BorderedList, null, _react.default.createElement("fieldset", null, options.map(function (option) {
        return _react.default.createElement(BorderedWrapper, {
          key: option.id
        }, _react.default.createElement(SelectableItem, {
          detail: option.detail,
          icon: option.icon,
          isChecked: option.value === _this2.state.value,
          isLeftAligned: isLeftAligned,
          isReadOnly: isReadOnly,
          label: option.label,
          onChange: _this2.onChange,
          value: option.value
        }));
      })), listAction ? _react.default.createElement(BorderedListAction, null, listAction) : null);
    }
  }, {
    key: "renderVerticalList",
    value: function renderVerticalList() {
      var _this3 = this;

      var _this$props3 = this.props,
          options = _this$props3.options,
          listAction = _this$props3.listAction,
          isLeftAligned = _this$props3.isLeftAligned,
          isReadOnly = _this$props3.isReadOnly,
          SelectableItem = _this$props3.components.SelectableItem;
      return _react.default.createElement(StyledList, null, _react.default.createElement("fieldset", null, options.map(function (option) {
        return _react.default.createElement(StyledWrapper, {
          key: option.id
        }, _react.default.createElement(SelectableItem, {
          detail: option.detail,
          icon: option.icon,
          isChecked: option.value === _this3.state.value,
          isLeftAligned: isLeftAligned,
          isReadOnly: isReadOnly,
          label: option.label,
          onChange: _this3.onChange,
          value: option.value
        }));
      })), listAction ? _react.default.createElement(StyledListAction, null, listAction) : null);
    }
  }, {
    key: "renderHorizontalList",
    value: function renderHorizontalList() {
      var _this4 = this;

      var _this$props4 = this.props,
          options = _this$props4.options,
          listAction = _this$props4.listAction,
          isHorizontal = _this$props4.isHorizontal,
          isReadOnly = _this$props4.isReadOnly,
          SelectableItem = _this$props4.components.SelectableItem;
      return _react.default.createElement(HorizontalList, null, options.map(function (option) {
        return _react.default.createElement(HorizontalWrapper, {
          key: option.id
        }, _react.default.createElement(SelectableItem, {
          detail: option.detail,
          icon: option.icon,
          isChecked: option.value === _this4.state.value,
          isStacked: isHorizontal,
          isReadOnly: isReadOnly,
          label: option.label,
          onChange: _this4.onChange,
          value: option.value
        }));
      }), listAction ? _react.default.createElement(StyledListAction, null, listAction) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          className = _this$props5.className,
          isBordered = _this$props5.isBordered,
          isHorizontal = _this$props5.isHorizontal;
      return _react.default.createElement("div", {
        className: className
      }, // eslint-disable-next-line
      isHorizontal ? this.renderHorizontalList() : isBordered ? this.renderBorderedList() : this.renderVerticalList());
    }
  }]);
  return SelectableList;
}(_react.Component);

SelectableList.isFormInput = true;
SelectableList.propTypes = {
  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: _propTypes.default.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: _propTypes.default.shape({
    /**
     * Pass either the Reaction `SelectableItem` component or your own component
     * that takes `options` props and uses them to render a single item.
     */
    SelectableItem: _utils.CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Adds borders to the list and each item
   */
  isBordered: _propTypes.default.bool,

  /**
   * Displays SelectableList horizontaly
   */
  isHorizontal: _propTypes.default.bool,

  /**
   * Is Left Aligned
   */
  isLeftAligned: _propTypes.default.bool,

  /**
   * Adds styles and blocks users from selecting items
   */
  isReadOnly: _propTypes.default.bool,

  /**
   * An extra row at the bottom of the list for an action, like Add an address
   */
  listAction: _propTypes.default.node,

  /**
   * The name for the SelectableList radio group. Each radio group on a page should have a unique name.
   */
  name: _propTypes.default.string.isRequired,

  /**
   * Called with the new selected value each time the user changes the selection
   */
  onChange: _propTypes.default.func,

  /**
   * Called with the new selected value each time the user changes the selection
   */
  onChanging: _propTypes.default.func,

  /**
   * Options, an Array of SelectableItems
   */
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * Optional text, SVG or element displayed on the right-hand side
       */
    detail: _propTypes.default.node,

    /**
       * Optional icon (SVG) displayed on the left-hand side
       */
    icon: _propTypes.default.node,

    /**
       * The item ID. Each option must have a unique ID
       */
    id: _propTypes.default.string.isRequired,

    /**
       * Label
       */
    label: _propTypes.default.string.isRequired,

    /**
       * Value of this option, which will be the value passed back from SelectableList if
       * this option is selected.
       */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]).isRequired
  })).isRequired,

  /**
   * Set this to the current saved value, if editing, or a default value if creating. The closest form implementing
   * the Composable Forms spec will pass this automatically.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool])
};
SelectableList.defaultProps = {
  isBordered: false,
  isHorizontal: false,
  isLeftAligned: false,
  isReadOnly: false,
  onChange: function onChange() {},
  onChanging: function onChanging() {}
};

var _default = (0, _componentsContext.withComponents)(SelectableList);

exports.default = _default;