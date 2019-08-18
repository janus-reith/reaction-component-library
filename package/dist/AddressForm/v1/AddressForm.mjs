import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.map";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.keys";
import "core-js/modules/web.dom-collections.for-each";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import isEmpty from "lodash.isempty";
import { Form } from "reacto-form";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, CustomPropTypes, getRequiredValidator } from "../../utils";
var Grid = styled.div.withConfig({
  displayName: "AddressForm__Grid",
  componentId: "xewrev-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]);
var ColFull = styled.div.withConfig({
  displayName: "AddressForm__ColFull",
  componentId: "xewrev-1"
})(["flex:1 1 100%;"]);
var ColHalf = styled.div.withConfig({
  displayName: "AddressForm__ColHalf",
  componentId: "xewrev-2"
})(["flex:1 1 100%;@media (min-width:", "px){flex:0 1 calc(50% - 9px);}"], applyTheme("sm", "breakpoints"));

var AddressForm =
/*#__PURE__*/
function (_Component) {
  _inherits(AddressForm, _Component);

  function AddressForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddressForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddressForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      // if the form has a value then try to use the value.country
      // if that is not set check to see if any locales are provided and use the first one
      // if no locales use "US"
      activeCountry: // eslint-disable-next-line
      _this.props.value && _this.props.value.country !== "" ? _this.props.value.country : isEmpty(_this.props.locales) ? "US" : Object.keys(_this.props.locales)[0]
    };
    _this._form = null;
    _this.uniqueInstanceIdentifier = uniqueId("AddressForm_");

    _this.handleCountryChange = function (country) {
      if (!country) return;

      _this.setState({
        activeCountry: country
      });
    };

    _this.handleCancel = function () {
      var onCancel = _this.props.onCancel;
      onCancel();
    };

    _this.getValue = function () {
      return _this._form.getValue();
    };

    _this.submit = function () {
      _this._form.submit();
    };

    _this.validate = function () {
      return _this._form.validate();
    };

    return _this;
  }

  _createClass(AddressForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevLocales = prevProps.locales;
      var _this$props = this.props,
          nextLocales = _this$props.locales,
          nextValue = _this$props.value;
      var prevCountry = this.state.activeCountry; // Sometimes the AddressForm will render before locales are provided.
      // This is often the case when dynamically importing locales via a JSON file.
      // Once the file loads and the locales are provided the form needs to check
      // and correct the active country.

      if (isEmpty(prevLocales) && !isEmpty(nextLocales) && prevLocales !== nextLocales) {
        var nextCountry = Object.keys(nextLocales)[0];

        if (nextValue && nextValue.country === prevCountry) {
          return;
        } else if (nextCountry !== prevCountry) {
          // eslint-disable-next-line
          this.setState({
            activeCountry: nextCountry
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          addressNamePlaceholder = _this$props2.addressNamePlaceholder,
          value = _this$props2.value,
          className = _this$props2.className,
          _this$props2$componen = _this$props2.components,
          Checkbox = _this$props2$componen.Checkbox,
          ErrorsBlock = _this$props2$componen.ErrorsBlock,
          Field = _this$props2$componen.Field,
          TextInput = _this$props2$componen.TextInput,
          Select = _this$props2$componen.Select,
          PhoneNumberInput = _this$props2$componen.PhoneNumberInput,
          RegionInput = _this$props2$componen.RegionInput,
          errors = _this$props2.errors,
          isOnDarkBackground = _this$props2.isOnDarkBackground,
          isReadOnly = _this$props2.isReadOnly,
          isSaving = _this$props2.isSaving,
          name = _this$props2.name,
          onChange = _this$props2.onChange,
          shouldShowAddressNameField = _this$props2.shouldShowAddressNameField,
          shouldShowIsCommercialField = _this$props2.shouldShowIsCommercialField,
          validator = _this$props2.validator;
      var addressNameInputId = "addressName_".concat(this.uniqueInstanceIdentifier);
      var countryInputId = "country_".concat(this.uniqueInstanceIdentifier);
      var fullNameInputId = "fullName_".concat(this.uniqueInstanceIdentifier);
      var address1InputId = "address1_".concat(this.uniqueInstanceIdentifier);
      var address2InputId = "address2_".concat(this.uniqueInstanceIdentifier);
      var cityInputId = "city_".concat(this.uniqueInstanceIdentifier);
      var regionInputId = "region_".concat(this.uniqueInstanceIdentifier);
      var postalInputId = "postal_".concat(this.uniqueInstanceIdentifier);
      var phoneInputId = "phone_".concat(this.uniqueInstanceIdentifier);
      var isCommercialInputId = "isCommercial_".concat(this.uniqueInstanceIdentifier);
      return React.createElement(Form, {
        className: className,
        ref: function ref(formEl) {
          _this2._form = formEl;
        },
        errors: errors,
        name: name,
        onChange: onChange,
        onSubmit: this.props.onSubmit,
        validator: validator,
        revalidateOn: "changed",
        value: value
      }, React.createElement(Grid, null, shouldShowAddressNameField && React.createElement(ColFull, null, React.createElement(Field, {
        name: "addressName",
        label: "Address Name",
        labelFor: addressNameInputId,
        isOptional: true
      }, React.createElement(TextInput, {
        id: addressNameInputId,
        name: "addressName",
        placeholder: addressNamePlaceholder,
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }))), React.createElement(ColFull, null, React.createElement(Field, {
        name: "country",
        label: "Country",
        labelFor: countryInputId,
        isRequired: true
      }, this.countryOptions && this.countryOptions.length > 1 ? React.createElement(Select, {
        id: countryInputId,
        alphabetize: true,
        isSearchable: true,
        name: "country",
        onChange: this.handleCountryChange,
        options: this.countryOptions,
        placeholder: "Country",
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }) : React.createElement(TextInput, {
        id: countryInputId,
        name: "country",
        placeholder: "Country",
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), React.createElement(ErrorsBlock, {
        names: ["country"]
      }))), React.createElement(ColFull, null, React.createElement(Field, {
        name: "fullName",
        label: "Name",
        labelFor: fullNameInputId,
        isRequired: true
      }, React.createElement(TextInput, {
        id: fullNameInputId,
        name: "fullName",
        placeholder: "Name",
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), React.createElement(ErrorsBlock, {
        names: ["fullName"]
      }))), React.createElement(ColFull, null, React.createElement(Field, {
        name: "address1",
        label: "Address",
        labelFor: address1InputId,
        isRequired: true
      }, React.createElement(TextInput, {
        id: address1InputId,
        name: "address1",
        placeholder: "Address",
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), React.createElement(ErrorsBlock, {
        names: ["address1"]
      }))), React.createElement(ColFull, null, React.createElement(Field, {
        name: "address2",
        label: "Address Line 2",
        labelFor: address2InputId,
        isOptional: true
      }, React.createElement(TextInput, {
        id: address2InputId,
        name: "address2",
        placeholder: "Address Line 2 (Optional)",
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }))), React.createElement(ColFull, null, React.createElement(Field, {
        name: "city",
        label: "City",
        labelFor: cityInputId
      }, React.createElement(TextInput, {
        id: cityInputId,
        name: "city",
        placeholder: "City",
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), React.createElement(ErrorsBlock, {
        names: ["city"]
      }))), React.createElement(ColHalf, null, React.createElement(Field, {
        name: "region",
        label: "Region",
        labelFor: regionInputId,
        isRequired: true
      }, React.createElement(RegionInput, {
        id: regionInputId,
        options: this.regionOptions,
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly,
        name: "region",
        placeholder: "Region"
      }), React.createElement(ErrorsBlock, {
        names: ["region"]
      }))), React.createElement(ColHalf, null, React.createElement(Field, {
        name: "postal",
        label: "Postal Code",
        labelFor: postalInputId,
        isRequired: true
      }, React.createElement(TextInput, {
        id: postalInputId,
        name: "postal",
        placeholder: "Postal Code",
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), React.createElement(ErrorsBlock, {
        names: ["postal"]
      }))), React.createElement(ColFull, null, React.createElement(Field, {
        name: "phone",
        label: "Phone",
        labelFor: phoneInputId,
        isRequired: true
      }, React.createElement(PhoneNumberInput, {
        id: phoneInputId,
        name: "phone",
        placeholder: "Phone",
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      }), React.createElement(ErrorsBlock, {
        names: ["phone"]
      }))), shouldShowIsCommercialField && React.createElement(ColFull, null, React.createElement(Field, {
        name: "isCommercial",
        labelFor: isCommercialInputId
      }, React.createElement(Checkbox, {
        id: isCommercialInputId,
        name: "isCommercial",
        label: "This is a commercial address.",
        isOnDarkBackground: isOnDarkBackground,
        isReadOnly: isSaving || isReadOnly
      })))));
    }
  }, {
    key: "countryOptions",
    get: function get() {
      var locales = this.props.locales;
      if (!locales) return [];
      var options = Object.keys(locales).map(function (key) {
        return {
          value: key,
          label: locales[key].name
        };
      });
      return options;
    }
  }, {
    key: "regionOptions",
    get: function get() {
      var locales = this.props.locales;
      var activeCountry = this.state.activeCountry;
      var options = [];

      if (locales && locales[activeCountry] && locales[activeCountry].states) {
        Object.keys(locales[activeCountry].states).forEach(function (key) {
          options.push({
            value: key,
            label: locales[activeCountry].states[key].name
          });
        });
      }

      return options;
    }
  }]);

  return AddressForm;
}(Component);

AddressForm.propTypes = {
  /**
   * Place holder for Address Name field.
   */
  addressNamePlaceholder: PropTypes.string,

  /**
   * You can provide a `className` prop that will be applied to the outermost DOM element
   * rendered by this component. We do not recommend using this for styling purposes, but
   * it can be useful as a selector in some situations.
   */
  className: PropTypes.string,

  /**
   * If you've set up a components context using
   * [@reactioncommerce/components-context](https://github.com/reactioncommerce/components-context)
   * (recommended), then this prop will come from there automatically. If you have not
   * set up a components context or you want to override one of the components in a
   * single spot, you can pass in the components prop directly.
   */
  components: PropTypes.shape({
    /**
     * Pass either the Reaction Checkbox component or your own component that is
     * compatible with ReactoForm.
     */
    Checkbox: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction ErrorsBlock component or your own component that is
     * compatible with ReactoForm.
     */
    ErrorsBlock: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Field component or your own component that is
     * compatible with ReactoForm.
     */
    Field: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction TextInput component or your own component that is
     * compatible with ReactoForm.
     */
    TextInput: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction Select component or your own component that is
     * compatible with ReactoForm.
     */
    Select: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction PhoneNumberInput component or your own component that is
     * compatible with ReactoForm.
     */
    PhoneNumberInput: CustomPropTypes.component.isRequired,

    /**
     * Pass either the Reaction RegionInput component or your own component that is
     * compatible with ReactoForm.
     */
    RegionInput: CustomPropTypes.component.isRequired
  }).isRequired,

  /**
   * Errors array
   */
  errors: PropTypes.arrayOf(PropTypes.shape({
    /**
       * Error message
       */
    message: PropTypes.string.isRequired,

    /**
       * Error name
       */
    name: PropTypes.string.isRequired
  })),

  /**
   * Enable when using the form on a dark background, disabled by default
   */
  isOnDarkBackground: PropTypes.bool,

  /**
   * If true, typing in address fields is disabled
   */
  isReadOnly: PropTypes.bool,

  /**
   * Pass true if the address is in the process of being saved.
   * While true, typing in address fields is disabled.
   */
  isSaving: PropTypes.bool,

  /**
   * Locale options to populate the forms country and region fields
   */
  locales: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    native: PropTypes.string,
    phone: PropTypes.string,
    continent: PropTypes.string,
    capital: PropTypes.string,
    currency: PropTypes.string,
    languages: PropTypes.string,
    states: PropTypes.objectOf(PropTypes.shape({
      name: PropTypes.string
    }))
  })),

  /**
   * Form name
   */
  name: PropTypes.string,

  /**
   * Cancel event callback
   */
  onCancel: PropTypes.func,

  /**
   * OnChange event callback
   */
  onChange: PropTypes.func,

  /**
   * Form submit event callback
   */
  onSubmit: PropTypes.func,

  /**
   * Should the AddressForm show the "Address Names" field.
   */
  shouldShowAddressNameField: PropTypes.bool,

  /**
   * Should the AddressForm show the "Is Commercial Address" field.
   */
  shouldShowIsCommercialField: PropTypes.bool,

  /**
   * Validator method
   */
  validator: PropTypes.func,

  /**
   * Address object to be edited
   */
  value: CustomPropTypes.address
};
AddressForm.defaultProps = {
  addressNamePlaceholder: "Address Name",
  errors: [],
  locales: {},
  isOnDarkBackground: false,
  isReadOnly: false,
  isSaving: false,
  name: "address",
  onCancel: function onCancel() {},
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  shouldShowAddressNameField: false,
  shouldShowIsCommercialField: false,
  validator: getRequiredValidator("country", "fullName", "address1", "city", "phone", "postal", "region"),
  value: {
    addressName: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    fullName: "",
    postal: "",
    region: "",
    phone: "",
    isCommercial: false
  }
};
export default withComponents(AddressForm);