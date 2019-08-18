"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ProgressiveImage = _interopRequireDefault(require("./ProgressiveImage"));

test("Basic ProgressiveImage snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProgressiveImage.default, {
    src: "/storefront-component-library-logo.svg",
    alt: "Reaction Storefront Component Library Logo"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("ProgressiveImage with progressive loading snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProgressiveImage.default, {
    src: "/images/sticker/medium.jpg",
    presrc: "/images/sticker/small.png"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Responsive ProgressiveImage with progressive loading snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProgressiveImage.default, {
    presrc: "/images/sticker/small.png",
    srcs: {
      large: "/images/sticker/large.jpg",
      medium: "/images/sticker/medium.jpg",
      small: "/images/sticker/small.png"
    }
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Responsive ProgressiveImage with 'cover' fit and progressive loading snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ProgressiveImage.default, {
    fit: "cover",
    presrc: "/images/sticker/small.png",
    srcs: {
      large: "/images/sticker/large.jpg",
      medium: "/images/sticker/medium.jpg",
      small: "/images/sticker/small.png"
    }
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});