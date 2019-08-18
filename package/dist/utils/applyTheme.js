"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyTheme;

var _getFromTheme = _interopRequireDefault(require("./getFromTheme"));

/**
 * @summary A function for use in styled-components template string, which
 *   returns a props function that returns CSS for proper typography styling
 * @param {String} themePath An object path describing where to look
 *   in this group object in the theme to find the value that is needed.
 * @param {String} [group] Custom theme object group. `rui_` will be prepended.
 *   Default is "components", i.e. `rui_components`.
 * @returns {Function} A function that takes `props` argument and returns
 *   the value from a custom or default theme
 */
function applyTheme(themePath) {
  var group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "components";
  return function (props) {
    return (0, _getFromTheme.default)(props, "rui_".concat(group, ".").concat(themePath));
  };
}