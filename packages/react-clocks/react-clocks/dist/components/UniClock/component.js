"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UniClock = function UniClock(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-circles"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-circles__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-circles__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-circles__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-circles__item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "wave"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "wave"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "wave"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "wave"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "wave"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-indicators"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-indicators__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-indicators__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-indicators__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-indicators__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-indicators__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-indicators__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-indicators__item"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-indicators__item"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-times"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-times__second"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-times__minute"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clock-times__hour"
  }))));
};

UniClock.propTypes = {
  className: _propTypes["default"].string
};
var _default = UniClock;
exports["default"] = _default;