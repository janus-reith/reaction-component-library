import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from "react";
import renderer from "react-test-renderer";
import ProgressiveImage from "./ProgressiveImage";
test("Basic ProgressiveImage snapshot", function () {
  var component = renderer.create(React.createElement(ProgressiveImage, {
    src: "/storefront-component-library-logo.svg",
    alt: "Reaction Storefront Component Library Logo"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("ProgressiveImage with progressive loading snapshot", function () {
  var component = renderer.create(React.createElement(ProgressiveImage, {
    src: "/images/sticker/medium.jpg",
    presrc: "/images/sticker/small.png"
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Responsive ProgressiveImage with progressive loading snapshot", function () {
  var component = renderer.create(React.createElement(ProgressiveImage, {
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
  var component = renderer.create(React.createElement(ProgressiveImage, {
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