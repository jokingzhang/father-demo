(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global['father-demo'] = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

    var EmptyLine = function EmptyLine(_ref) {
      var _ref$height = _ref.height,
          height = _ref$height === void 0 ? 20 : _ref$height;
      return React.createElement("div", {
        className: "empty-line",
        style: {
          height: height
        }
      });
    };

    exports.EmptyLine = EmptyLine;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
