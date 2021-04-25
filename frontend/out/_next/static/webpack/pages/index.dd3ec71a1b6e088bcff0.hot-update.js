webpackHotUpdate_N_E("pages/index",{

/***/ "./blocks/HeroCarousel.js":
/*!********************************!*\
  !*** ./blocks/HeroCarousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_Waves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ui/Waves */ "./components/ui/Waves.js");
/* harmony import */ var _components_ui_MatrixRain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/MatrixRain */ "./components/ui/MatrixRain.js");


var _jsxFileName = "C:\\_lab\\alienbuild-official-site\\frontend\\blocks\\HeroCarousel.js",
    _this = undefined;




var HeroCarousel = function HeroCarousel(_ref) {
  var children = _ref.children,
      _ref$genericPage = _ref.genericPage,
      genericPage = _ref$genericPage === void 0 ? 'generic' : _ref$genericPage;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "hero-wrap",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_Waves__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        id: "index-hero",
        className: "".concat(genericPage ? 'generic' : 'index'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_MatrixRain__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, _this), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, _this),
      colour: "#01011D",
      inverse: true,
      overflow: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

_c = HeroCarousel;
/* harmony default export */ __webpack_exports__["default"] = (HeroCarousel);

var _c;

$RefreshReg$(_c, "HeroCarousel");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ui/Header.js":
/*!*********************************!*\
  !*** ./components/ui/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blog_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blog/Search */ "./components/blog/Search.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blocks_HeroCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../blocks/HeroCarousel */ "./blocks/HeroCarousel.js");



var _jsxFileName = "C:\\_lab\\alienbuild-official-site\\frontend\\components\\ui\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();








nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.configure({
  showSpinner: false
});

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};



var DynamicLordIcon = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/LordIcon */ "./components/LordIcon.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/LordIcon */ "./components/LordIcon.js")];
    },
    modules: ['../../components/LordIcon']
  }
});
_c2 = DynamicLordIcon;

var Header = function Header(_ref) {
  _s();

  var Hero = _ref.Hero,
      pageType = _ref.pageType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      navActive = _useState[0],
      setNavActive = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      id: "h-primary",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ticker-bar grid grid-cols-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "alienbuild-h-logo",
            children: _config__WEBPACK_IMPORTED_MODULE_2__["APP_NAME"].toLowerCase()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "toggle-mobile-menu",
          onClick: function onClick(e) {
            return setNavActive(!navActive);
          },
          children: "X"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DynamicLordIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          id: "n-primary",
          className: "".concat(navActive ? 'active' : 'inactive'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "grid grid-cols-2 gap-4 sm:gap-y-0 sm:grid-cols-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("lord-icon", {
                    animation: "loop",
                    target: "a",
                    palette: "#CCCCCC;#ff2696;",
                    size: '50px',
                    params: "50",
                    src: "./assets/icons/489-rocket-space/489-rocket-space-outline.json"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 33
                  }, _this), "Development"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 50
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("lord-icon", {
                    animation: "loop",
                    target: "a",
                    palette: "#CCCCCC;#ff2696;",
                    size: '50px',
                    params: "50",
                    src: "./assets/icons/113-atom/113-atom-outline.json"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Software"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 33
                  }, _this), "Development"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 50
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("lord-icon", {
                    animation: "loop",
                    target: "a",
                    palette: "#CCCCCC;#ff2696;",
                    size: '50px',
                    params: "50",
                    src: "./assets/icons/139-basket/139-basket-outline.json"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Ecommerce"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 33
                  }, _this), "Development"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 50
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("lord-icon", {
                    animation: "loop",
                    target: "a",
                    palette: "#CCCCCC;#ff2696;",
                    size: '50px',
                    params: "50",
                    src: "./assets/icons/117-vector-design-pen/117-vector-design-pen-outline.json"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "UI/UX"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 33
                  }, _this), "Design"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 50
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/blogs",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("lord-icon", {
                    animation: "loop",
                    target: "a",
                    palette: "#CCCCCC;#ff2696",
                    size: '50px',
                    params: "50",
                    src: "./assets/icons/439-lab-bottle-triangle/439-lab-bottle-triangle-outline.json"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "The Lab"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 33
                  }, _this), "Tutorials"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 55
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("lord-icon", {
                    animation: "loop",
                    target: "a",
                    palette: "#CCCCCC;#ff2696;",
                    size: '50px',
                    params: "50",
                    src: "./assets/icons/140-earphone-telephone/140-earphone-telephone-outline.json"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 33
                  }, _this), "Alienbuild"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 50
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hide",
        children: ["Brand name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: _config__WEBPACK_IMPORTED_MODULE_2__["APP_NAME"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 33
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blog_Search__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/blogs",
          children: "Blogs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, _this), !Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/signin",
            children: "Signin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/signup",
            children: "Signup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, _this)]
        }, void 0, true), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/user",
          children: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 59
        }, _this), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/admin",
          children: "Admin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 59
        }, _this), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["signout"])(function () {
              return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.replace('/signin');
            });
          },
          children: "Signout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blocks_HeroCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      pageType: pageType,
      children: Hero
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Header, "7RENnklBOCmuF/zvXFR8giKFges=");

_c3 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3;

$RefreshReg$(_c, "DynamicLordIcon$dynamic");
$RefreshReg$(_c2, "DynamicLordIcon");
$RefreshReg$(_c3, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_Default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/Default */ "./templates/Default.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_MatrixRain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/MatrixRain */ "./components/ui/MatrixRain.js");
/* harmony import */ var _components_ui_Waves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/Waves */ "./components/ui/Waves.js");
/* harmony import */ var _blocks_FullCycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/FullCycle */ "./blocks/FullCycle.js");
/* harmony import */ var _blocks_AgencyPartners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/AgencyPartners */ "./blocks/AgencyPartners.js");
/* harmony import */ var _blocks_FullStack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/FullStack */ "./blocks/FullStack.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _blocks_TrustedClients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/TrustedClients */ "./blocks/TrustedClients.js");
/* harmony import */ var _blocks_Faq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blocks/Faq */ "./blocks/Faq.js");
/* harmony import */ var _blocks_HeroCarousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blocks/HeroCarousel */ "./blocks/HeroCarousel.js");


var _jsxFileName = "C:\\_lab\\alienbuild-official-site\\frontend\\pages\\index.js",
    _this = undefined;













var Index = function Index() {
  // Init state
  // const heroCarousel = () => {
  //     return(
  //         <div id={"hero-wrap"}>
  //         <Waves children={
  //                 <section id={`index-hero`}>
  //                     <MatrixRain />
  //                     <div className={`grid grid-cols-1 place-items-center h-full z-10 relative`}>
  //                         <div className={`px-10 xl:px-0 max-w-screen-lg`}>
  //                             <span className={"alienbuild-logo"}><span>{APP_NAME.toLowerCase()}</span></span>
  //                             <br/>
  //                             <h2 className={`gradient-text--test mt-3 text-4xl font-semibold text-pink-500 uppercase`}>Exclusive UK based</h2>
  //                             <h1 className={`text-4xl sm:text-6xl lg:text-9xl leading-none font-extrabold tracking-tight text-white mt-3 uppercase mb-5 sm:mt-3 sm:mb-3`}>White Label development</h1>
  //                             <p className={`text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-gray-200`}>
  //                                 We offer a heavyweight, pull-no-punches white label design and development service.
  //                                 <br />
  //                                 We have extensive developer resources ready to deploy at a moments notice to help you meet your deadlines.
  //                             </p>
  //                             <a href={"#"} className={`w-full sm:w-auto flex-none bg-pink-600 hover:bg-blue-500 text-white text-lg py-3 px-6 border border-transparent rounded-full focus:outline-none transition-colors duration-200`}>
  //                                 Get a quote
  //                             </a>
  //                         </div>
  //                     </div>
  //                 </section>
  //         } colour={"#01011D"} inverse={true} overflow={true} />
  //         </div>
  //     )
  // }
  var Mockups = function Mockups() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "app-illustrations",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tablet-landscape",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          alt: "salesforce",
          src: "https://stripe.com/img/v3/home/app-illustrations/salesforce.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "phone-big",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          alt: "instacart",
          src: "https://stripe.com/img/v3/home/app-illustrations/instacart.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "phone-small",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          alt: "postmates",
          src: "https://stripe.com/img/v3/home/app-illustrations/postmates.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tablet-portrait",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          alt: "asana",
          src: "https://stripe.com/img/v3/home/app-illustrations/asana.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_templates_Default__WEBPACK_IMPORTED_MODULE_1__["default"], {
    overflowX: false,
    Hero: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-1 place-items-center h-full z-10 relative",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-10 xl:px-0 max-w-screen-lg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "alienbuild-logo",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: _config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"].toLowerCase()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 57
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "gradient-text--test mt-3 text-4xl font-semibold text-pink-500 uppercase",
          children: "Exclusive UK based"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-4xl sm:text-6xl lg:text-9xl leading-none font-extrabold tracking-tight text-white mt-3 uppercase mb-5 sm:mt-3 sm:mb-3",
          children: "White Label development"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-gray-200",
          children: ["We offer a heavyweight, pull-no-punches white label design and development service.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this), "We have extensive developer resources ready to deploy at a moments notice to help you meet your deadlines."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "w-full sm:w-auto flex-none bg-pink-600 hover:bg-blue-500 text-white text-lg py-3 px-6 border border-transparent rounded-full focus:outline-none transition-colors duration-200",
          children: "Get a quote"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, _this),
    genericPage: false,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blocks_AgencyPartners__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Mockups, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blocks_FullCycle__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blocks_FullStack__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blocks_TrustedClients__WEBPACK_IMPORTED_MODULE_9__["default"], {
      independent: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_blocks_Faq__WEBPACK_IMPORTED_MODULE_10__["default"], {
      independent: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, _this);
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYmxvY2tzL0hlcm9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlcm9DYXJvdXNlbCIsImNoaWxkcmVuIiwiZ2VuZXJpY1BhZ2UiLCJOUHJvZ3Jlc3MiLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkR5bmFtaWNMb3JkSWNvbiIsImR5bmFtaWMiLCJzc3IiLCJIZWFkZXIiLCJIZXJvIiwicGFnZVR5cGUiLCJ1c2VTdGF0ZSIsIm5hdkFjdGl2ZSIsInNldE5hdkFjdGl2ZSIsIkFQUF9OQU1FIiwidG9Mb3dlckNhc2UiLCJlIiwiaXNBdXRoIiwicm9sZSIsInNpZ25vdXQiLCJyZXBsYWNlIiwiSW5kZXgiLCJNb2NrdXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBMkM7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsOEJBQTlCQyxXQUE4QjtBQUFBLE1BQTlCQSxXQUE4QixpQ0FBaEIsU0FBZ0I7QUFDNUQsc0JBQ0k7QUFBSyxNQUFFLEVBQUUsV0FBVDtBQUFBLDJCQUNJLHFFQUFDLDREQUFEO0FBQU8sY0FBUSxlQUNYO0FBQVMsVUFBRSxjQUFYO0FBQTJCLGlCQUFTLFlBQUtBLFdBQVcsR0FBRyxTQUFILEdBQWUsT0FBL0IsQ0FBcEM7QUFBQSxnQ0FDSSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUtELFFBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFL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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFpQkUsZUFBVyxFQUFFLEtBakJmO0FBQUEsNEJBa0JJLHFFQUFDLDhEQUFEO0FBQUEsNkJBQ0kscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSixlQXFCSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJKLGVBc0JJLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkosZUF1QkkscUVBQUMsOERBQUQ7QUFBZ0IsaUJBQVcsRUFBRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJKLGVBd0JJLHFFQUFDLG9EQUFEO0FBQUssaUJBQVcsRUFBRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkJILENBL0VEOztLQUFNTSxLO0FBaUZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZDNlYzcxYTFiNmUwODhiY2ZmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhdmVzIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL1dhdmVzXCI7XHJcbmltcG9ydCBNYXRyaXhSYWluIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL01hdHJpeFJhaW5cIjtcclxuXHJcbmNvbnN0IEhlcm9DYXJvdXNlbCA9ICh7IGNoaWxkcmVuLCBnZW5lcmljUGFnZSA9ICdnZW5lcmljJyB9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD17XCJoZXJvLXdyYXBcIn0+XHJcbiAgICAgICAgICAgIDxXYXZlcyBjaGlsZHJlbj17XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD17YGluZGV4LWhlcm9gfSBjbGFzc05hbWU9e2Ake2dlbmVyaWNQYWdlID8gJ2dlbmVyaWMnIDogJ2luZGV4J31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8TWF0cml4UmFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgfSBjb2xvdXI9e1wiIzAxMDExRFwifSBpbnZlcnNlPXt0cnVlfSBvdmVyZmxvdz17dHJ1ZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0Nhcm91c2VsIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmltcG9ydCB7IHNpZ25vdXQsIGlzQXV0aCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIlxyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vYmxvZy9TZWFyY2hcIlxyXG5cclxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4gTlByb2dyZXNzLnN0YXJ0KClcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9IHVybCA9PiBOUHJvZ3Jlc3MuZG9uZSgpXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSB1cmwgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IEhlcm9DYXJvdXNlbCBmcm9tIFwiLi4vLi4vYmxvY2tzL0hlcm9DYXJvdXNlbFwiO1xyXG5jb25zdCBEeW5hbWljTG9yZEljb24gPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9Mb3JkSWNvbicpLCB7XHJcbiAgICBzc3I6IGZhbHNlXHJcbn0pO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgSGVybywgcGFnZVR5cGUgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhlYWRlciBpZD1cImgtcHJpbWFyeVwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGlja2VyLWJhciBncmlkIGdyaWQtY29scy0yYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWxpZW5idWlsZC1oLWxvZ29cIj57QVBQX05BTUUudG9Mb3dlckNhc2UoKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgdG9nZ2xlLW1vYmlsZS1tZW51YH0gb25DbGljaz17ZSA9PiBzZXROYXZBY3RpdmUoIW5hdkFjdGl2ZSl9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPER5bmFtaWNMb3JkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGlkPXtgbi1wcmltYXJ5YH0gY2xhc3NOYW1lPXtgJHtuYXZBY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BncmlkIGdyaWQtY29scy0yIGdhcC00IHNtOmdhcC15LTAgc206Z3JpZC1jb2xzLTZgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtcIi9cIn0+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvcmQtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJsb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbGV0dGU9XCIjQ0NDQ0NDOyNmZjI2OTY7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17JzUwcHgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4vYXNzZXRzL2ljb25zLzQ4OS1yb2NrZXQtc3BhY2UvNDg5LXJvY2tldC1zcGFjZS1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPldlYnNpdGU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1wiL1wifT48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9yZC1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZT1cIiNDQ0NDQ0M7I2ZmMjY5NjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvMTEzLWF0b20vMTEzLWF0b20tb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Tb2Z0d2FyZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvXCJ9PjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsb3JkLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwibG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWxldHRlPVwiI0NDQ0NDQzsjZmYyNjk2O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9eyc1MHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuL2Fzc2V0cy9pY29ucy8xMzktYmFza2V0LzEzOS1iYXNrZXQtb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FY29tbWVyY2U8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1wiL1wifT48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9yZC1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZT1cIiNDQ0NDQ0M7I2ZmMjY5NjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvMTE3LXZlY3Rvci1kZXNpZ24tcGVuLzExNy12ZWN0b3ItZGVzaWduLXBlbi1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlVJL1VYPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvYmxvZ3NcIn0+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvcmQtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJsb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbGV0dGU9XCIjQ0NDQ0NDOyNmZjI2OTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvNDM5LWxhYi1ib3R0bGUtdHJpYW5nbGUvNDM5LWxhYi1ib3R0bGUtdHJpYW5nbGUtb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaGUgTGFiPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHV0b3JpYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvXCJ9PjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsb3JkLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwibG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWxldHRlPVwiI0NDQ0NDQzsjZmYyNjk2O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9eyc1MHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuL2Fzc2V0cy9pY29ucy8xNDAtZWFycGhvbmUtdGVsZXBob25lLzE0MC1lYXJwaG9uZS10ZWxlcGhvbmUtb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250YWN0PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxpZW5idWlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBCcmFuZCBuYW1lOiA8TGluayBocmVmPXtcIi9cIn0+e0FQUF9OQU1FfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9ibG9nc1wifT5CbG9nczwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qSWYgdXNlciBpcyBub3QgbG9nZ2VkIGluKi99XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhaXNBdXRoKCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvc2lnbmluXCJ9PlNpZ25pbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NpZ251cFwifT5TaWdudXA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LypMb2dnZWQgaW4gYW5kIG5vdCBhZG1pbiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMCAmJiAoPExpbmsgaHJlZj17XCIvdXNlclwifT5EYXNoYm9hcmQ8L0xpbms+KX1cclxuICAgICAgICAgICAgICAgICAgICB7LypMb2dnZWQgaW4gYW5kIGlzIGFkbWluKi99XHJcbiAgICAgICAgICAgICAgICAgICAgeyBpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxICYmICg8TGluayBocmVmPXtcIi9hZG1pblwifT5BZG1pbjwvTGluaz4pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogSWYgdXNlciBpcyBsb2dnZWQgaW4qL31cclxuICAgICAgICAgICAgICAgICAgICB7IGlzQXV0aCgpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWdub3V0KCgpID0+IFJvdXRlci5yZXBsYWNlKCcvc2lnbmluJykpfT5TaWdub3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPEhlcm9DYXJvdXNlbCBwYWdlVHlwZT17cGFnZVR5cGV9PntIZXJvfTwvSGVyb0Nhcm91c2VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgRGVmYXVsdCBmcm9tIFwiLi4vdGVtcGxhdGVzL0RlZmF1bHRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IE1hdHJpeFJhaW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvTWF0cml4UmFpblwiXHJcbmltcG9ydCBXYXZlcyBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9XYXZlc1wiXHJcbmltcG9ydCBGdWxsQ3ljbGUgZnJvbSBcIi4uL2Jsb2Nrcy9GdWxsQ3ljbGVcIlxyXG5pbXBvcnQgQWdlbmN5UGFydG5lcnMgZnJvbSBcIi4uL2Jsb2Nrcy9BZ2VuY3lQYXJ0bmVyc1wiXHJcbmltcG9ydCBGdWxsU3RhY2sgZnJvbSBcIi4uL2Jsb2Nrcy9GdWxsU3RhY2tcIlxyXG5pbXBvcnQge0FQUF9OQU1FfSBmcm9tIFwiLi4vY29uZmlnXCJcclxuaW1wb3J0IFRydXN0ZWRDbGllbnRzIGZyb20gXCIuLi9ibG9ja3MvVHJ1c3RlZENsaWVudHNcIlxyXG5pbXBvcnQgRmFxIGZyb20gXCIuLi9ibG9ja3MvRmFxXCJcclxuaW1wb3J0IEhlcm9DYXJvdXNlbCBmcm9tIFwiLi4vYmxvY2tzL0hlcm9DYXJvdXNlbFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gSW5pdCBzdGF0ZVxyXG4gICAgLy8gY29uc3QgaGVyb0Nhcm91c2VsID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHJldHVybihcclxuICAgIC8vICAgICAgICAgPGRpdiBpZD17XCJoZXJvLXdyYXBcIn0+XHJcbiAgICAvLyAgICAgICAgIDxXYXZlcyBjaGlsZHJlbj17XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9e2BpbmRleC1oZXJvYH0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxNYXRyaXhSYWluIC8+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZCBncmlkLWNvbHMtMSBwbGFjZS1pdGVtcy1jZW50ZXIgaC1mdWxsIHotMTAgcmVsYXRpdmVgfT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHgtMTAgeGw6cHgtMCBtYXgtdy1zY3JlZW4tbGdgfT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiYWxpZW5idWlsZC1sb2dvXCJ9PjxzcGFuPntBUFBfTkFNRS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj48L3NwYW4+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgZ3JhZGllbnQtdGV4dC0tdGVzdCBtdC0zIHRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1waW5rLTUwMCB1cHBlcmNhc2VgfT5FeGNsdXNpdmUgVUsgYmFzZWQ8L2gyPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LTR4bCBzbTp0ZXh0LTZ4bCBsZzp0ZXh0LTl4bCBsZWFkaW5nLW5vbmUgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBtdC0zIHVwcGVyY2FzZSBtYi01IHNtOm10LTMgc206bWItM2B9PldoaXRlIExhYmVsIGRldmVsb3BtZW50PC9oMT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LWxnIHNtOnRleHQtMnhsIHNtOmxlYWRpbmctMTAgZm9udC1tZWRpdW0gbWItMTAgc206bWItMTEgdGV4dC1ncmF5LTIwMGB9PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBvZmZlciBhIGhlYXZ5d2VpZ2h0LCBwdWxsLW5vLXB1bmNoZXMgd2hpdGUgbGFiZWwgZGVzaWduIGFuZCBkZXZlbG9wbWVudCBzZXJ2aWNlLlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgaGF2ZSBleHRlbnNpdmUgZGV2ZWxvcGVyIHJlc291cmNlcyByZWFkeSB0byBkZXBsb3kgYXQgYSBtb21lbnRzIG5vdGljZSB0byBoZWxwIHlvdSBtZWV0IHlvdXIgZGVhZGxpbmVzLlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPXtgdy1mdWxsIHNtOnctYXV0byBmbGV4LW5vbmUgYmctcGluay02MDAgaG92ZXI6YmctYmx1ZS01MDAgdGV4dC13aGl0ZSB0ZXh0LWxnIHB5LTMgcHgtNiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwYH0+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBhIHF1b3RlXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgIC8vICAgICAgICAgfSBjb2xvdXI9e1wiIzAxMDExRFwifSBpbnZlcnNlPXt0cnVlfSBvdmVyZmxvdz17dHJ1ZX0gLz5cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IE1vY2t1cHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImFwcC1pbGx1c3RyYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxldC1sYW5kc2NhcGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cInNhbGVzZm9yY2VcIiBzcmM9e2BodHRwczovL3N0cmlwZS5jb20vaW1nL3YzL2hvbWUvYXBwLWlsbHVzdHJhdGlvbnMvc2FsZXNmb3JjZS5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLWJpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiaW5zdGFjYXJ0XCIgc3JjPXtgaHR0cHM6Ly9zdHJpcGUuY29tL2ltZy92My9ob21lL2FwcC1pbGx1c3RyYXRpb25zL2luc3RhY2FydC5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25lLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJwb3N0bWF0ZXNcIiBzcmM9e2BodHRwczovL3N0cmlwZS5jb20vaW1nL3YzL2hvbWUvYXBwLWlsbHVzdHJhdGlvbnMvcG9zdG1hdGVzLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGV0LXBvcnRyYWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJhc2FuYVwiIHNyYz17YGh0dHBzOi8vc3RyaXBlLmNvbS9pbWcvdjMvaG9tZS9hcHAtaWxsdXN0cmF0aW9ucy9hc2FuYS5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8RGVmYXVsdCBvdmVyZmxvd1g9e2ZhbHNlfSBIZXJvPXtcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BncmlkIGdyaWQtY29scy0xIHBsYWNlLWl0ZW1zLWNlbnRlciBoLWZ1bGwgei0xMCByZWxhdGl2ZWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweC0xMCB4bDpweC0wIG1heC13LXNjcmVlbi1sZ2B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJhbGllbmJ1aWxkLWxvZ29cIn0+PHNwYW4+e0FQUF9OQU1FLnRvTG93ZXJDYXNlKCl9PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BncmFkaWVudC10ZXh0LS10ZXN0IG10LTMgdGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LXBpbmstNTAwIHVwcGVyY2FzZWB9PkV4Y2x1c2l2ZSBVSyBiYXNlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YHRleHQtNHhsIHNtOnRleHQtNnhsIGxnOnRleHQtOXhsIGxlYWRpbmctbm9uZSBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXdoaXRlIG10LTMgdXBwZXJjYXNlIG1iLTUgc206bXQtMyBzbTptYi0zYH0+V2hpdGUgTGFiZWwgZGV2ZWxvcG1lbnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQtbGcgc206dGV4dC0yeGwgc206bGVhZGluZy0xMCBmb250LW1lZGl1bSBtYi0xMCBzbTptYi0xMSB0ZXh0LWdyYXktMjAwYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIG9mZmVyIGEgaGVhdnl3ZWlnaHQsIHB1bGwtbm8tcHVuY2hlcyB3aGl0ZSBsYWJlbCBkZXNpZ24gYW5kIGRldmVsb3BtZW50IHNlcnZpY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBoYXZlIGV4dGVuc2l2ZSBkZXZlbG9wZXIgcmVzb3VyY2VzIHJlYWR5IHRvIGRlcGxveSBhdCBhIG1vbWVudHMgbm90aWNlIHRvIGhlbHAgeW91IG1lZXQgeW91ciBkZWFkbGluZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9e2B3LWZ1bGwgc206dy1hdXRvIGZsZXgtbm9uZSBiZy1waW5rLTYwMCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHRleHQtbGcgcHktMyBweC02IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2V0IGEgcXVvdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfSBnZW5lcmljUGFnZT17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8QWdlbmN5UGFydG5lcnM+XHJcbiAgICAgICAgICAgICAgICA8TW9ja3VwcyAvPlxyXG4gICAgICAgICAgICA8L0FnZW5jeVBhcnRuZXJzPlxyXG4gICAgICAgICAgICA8RnVsbEN5Y2xlIC8+XHJcbiAgICAgICAgICAgIDxGdWxsU3RhY2sgLz5cclxuICAgICAgICAgICAgPFRydXN0ZWRDbGllbnRzIGluZGVwZW5kZW50PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPEZhcSBpbmRlcGVuZGVudD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+U2lnbnVwPC9MaW5rPiovfVxyXG4gICAgICAgIDwvRGVmYXVsdD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9