"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

require("jest-styled-components");

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});