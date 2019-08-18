"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyThemeWithActionType;

var _utils = require("../../../utils");

/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that applies variable values from the theme,
 *   with button action type and state variants applied.
 * @param {String} themeProp The name of the theme variable to get the value for
 * @param {String} [stateSuffix] An optional suffix describing the button state
 * @returns {Function} A function that takes `props` argument and returns the
 *   value from a custom theme or the default theme.
 */
function applyThemeWithActionType(themeProp, stateSuffix) {
  return function (props) {
    var actionType = props.actionType,
        isDisabled = props.isDisabled,
        isTextOnly = props.isTextOnly;
    var finalSuffix = isTextOnly ? "textOnly" : actionType;
    var finalStateSuffix = isDisabled ? "disabled" : stateSuffix;
    var key = "rui_components.".concat(themeProp, "_").concat(finalSuffix);
    if (typeof finalStateSuffix === "string") key += "_".concat(finalStateSuffix);
    return (0, _utils.getFromTheme)(props, key);
  };
}