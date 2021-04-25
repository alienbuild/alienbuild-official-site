webpackHotUpdate_N_E("pages/blogs",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYmxvY2tzL0hlcm9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVyb0Nhcm91c2VsIiwiY2hpbGRyZW4iLCJnZW5lcmljUGFnZSIsIk5Qcm9ncmVzcyIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiRHluYW1pY0xvcmRJY29uIiwiZHluYW1pYyIsInNzciIsIkhlYWRlciIsIkhlcm8iLCJwYWdlVHlwZSIsInVzZVN0YXRlIiwibmF2QWN0aXZlIiwic2V0TmF2QWN0aXZlIiwiQVBQX05BTUUiLCJ0b0xvd2VyQ2FzZSIsImUiLCJpc0F1dGgiLCJyb2xlIiwic2lnbm91dCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEyQztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7QUFBQSw4QkFBOUJDLFdBQThCO0FBQUEsTUFBOUJBLFdBQThCLGlDQUFoQixTQUFnQjtBQUM1RCxzQkFDSTtBQUFLLE1BQUUsRUFBRSxXQUFUO0FBQUEsMkJBQ0kscUVBQUMsNERBQUQ7QUFBTyxjQUFRLGVBQ1g7QUFBUyxVQUFFLGNBQVg7QUFBMkIsaUJBQVMsWUFBS0EsV0FBVyxHQUFHLFNBQUgsR0FBZSxPQUEvQixDQUFwQztBQUFBLGdDQUNJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFS0QsUUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtFLFlBQU0sRUFBRSxTQUxWO0FBS3FCLGFBQU8sRUFBRSxJQUw5QjtBQUtvQyxjQUFRLEVB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QUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFrSEkscUVBQUMsNERBQUQ7QUFBYyxjQUFRLEVBQUVWLFFBQXhCO0FBQUEsZ0JBQW1DRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEhKO0FBQUEsa0JBREo7QUFzSEgsQ0ExSEQ7O0dBQU1ELE07O01BQUFBLE07QUE0SFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzLmRkM2VjNzFhMWI2ZTA4OGJjZmYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2F2ZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvV2F2ZXNcIjtcclxuaW1wb3J0IE1hdHJpeFJhaW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvTWF0cml4UmFpblwiO1xyXG5cclxuY29uc3QgSGVyb0Nhcm91c2VsID0gKHsgY2hpbGRyZW4sIGdlbmVyaWNQYWdlID0gJ2dlbmVyaWMnIH0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkPXtcImhlcm8td3JhcFwifT5cclxuICAgICAgICAgICAgPFdhdmVzIGNoaWxkcmVuPXtcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPXtgaW5kZXgtaGVyb2B9IGNsYXNzTmFtZT17YCR7Z2VuZXJpY1BhZ2UgPyAnZ2VuZXJpYycgOiAnaW5kZXgnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXRyaXhSYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICB9IGNvbG91cj17XCIjMDEwMTFEXCJ9IGludmVyc2U9e3RydWV9IG92ZXJmbG93PXt0cnVlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ2Fyb3VzZWwiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IHsgc2lnbm91dCwgaXNBdXRoIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYXV0aFwiXHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9ibG9nL1NlYXJjaFwiXHJcblxyXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHsgc2hvd1NwaW5uZXI6IGZhbHNlIH0pO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9IHVybCA9PiBOUHJvZ3Jlc3Muc3RhcnQoKVxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IE5Qcm9ncmVzcy5kb25lKClcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9IHVybCA9PiBOUHJvZ3Jlc3MuZG9uZSgpXHJcblxyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgSGVyb0Nhcm91c2VsIGZyb20gXCIuLi8uLi9ibG9ja3MvSGVyb0Nhcm91c2VsXCI7XHJcbmNvbnN0IER5bmFtaWNMb3JkSWNvbiA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL0xvcmRJY29uJyksIHtcclxuICAgIHNzcjogZmFsc2VcclxufSk7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBIZXJvLCBwYWdlVHlwZSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25hdkFjdGl2ZSwgc2V0TmF2QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGlkPVwiaC1wcmltYXJ5XCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0aWNrZXItYmFyIGdyaWQgZ3JpZC1jb2xzLTJgfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbGllbmJ1aWxkLWgtbG9nb1wiPntBUFBfTkFNRS50b0xvd2VyQ2FzZSgpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2B0b2dnbGUtbW9iaWxlLW1lbnVgfSBvbkNsaWNrPXtlID0+IHNldE5hdkFjdGl2ZSghbmF2QWN0aXZlKX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RHluYW1pY0xvcmRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgaWQ9e2BuLXByaW1hcnlgfSBjbGFzc05hbWU9e2Ake25hdkFjdGl2ZSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgc206Z2FwLXktMCBzbTpncmlkLWNvbHMtNmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1wiL1wifT48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9yZC1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZT1cIiNDQ0NDQ0M7I2ZmMjY5NjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvNDg5LXJvY2tldC1zcGFjZS80ODktcm9ja2V0LXNwYWNlLW91dGxpbmUuanNvbmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbG9yZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2Vic2l0ZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvXCJ9PjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsb3JkLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwibG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWxldHRlPVwiI0NDQ0NDQzsjZmYyNjk2O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9eyc1MHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuL2Fzc2V0cy9pY29ucy8xMTMtYXRvbS8xMTMtYXRvbS1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlNvZnR3YXJlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcG1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtcIi9cIn0+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvcmQtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJsb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbGV0dGU9XCIjQ0NDQ0NDOyNmZjI2OTY7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17JzUwcHgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4vYXNzZXRzL2ljb25zLzEzOS1iYXNrZXQvMTM5LWJhc2tldC1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkVjb21tZXJjZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvXCJ9PjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsb3JkLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwibG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWxldHRlPVwiI0NDQ0NDQzsjZmYyNjk2O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9eyc1MHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuL2Fzc2V0cy9pY29ucy8xMTctdmVjdG9yLWRlc2lnbi1wZW4vMTE3LXZlY3Rvci1kZXNpZ24tcGVuLW91dGxpbmUuanNvbmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbG9yZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VUkvVVg8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtcIi9ibG9nc1wifT48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9yZC1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZT1cIiNDQ0NDQ0M7I2ZmMjY5NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9eyc1MHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuL2Fzc2V0cy9pY29ucy80MzktbGFiLWJvdHRsZS10cmlhbmdsZS80MzktbGFiLWJvdHRsZS10cmlhbmdsZS1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRoZSBMYWI8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUdXRvcmlhbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtcIi9cIn0+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvcmQtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJsb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbGV0dGU9XCIjQ0NDQ0NDOyNmZjI2OTY7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17JzUwcHgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4vYXNzZXRzL2ljb25zLzE0MC1lYXJwaG9uZS10ZWxlcGhvbmUvMTQwLWVhcnBob25lLXRlbGVwaG9uZS1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNvbnRhY3Q8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGllbmJ1aWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyYW5kIG5hbWU6IDxMaW5rIGhyZWY9e1wiL1wifT57QVBQX05BTUV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2Jsb2dzXCJ9PkJsb2dzPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LypJZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4qL31cclxuICAgICAgICAgICAgICAgICAgICB7ICFpc0F1dGgoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9zaWduaW5cIn0+U2lnbmluPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvc2lnbnVwXCJ9PlNpZ251cDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKkxvZ2dlZCBpbiBhbmQgbm90IGFkbWluKi99XHJcbiAgICAgICAgICAgICAgICAgICAgeyBpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAwICYmICg8TGluayBocmVmPXtcIi91c2VyXCJ9PkRhc2hib2FyZDwvTGluaz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKkxvZ2dlZCBpbiBhbmQgaXMgYWRtaW4qL31cclxuICAgICAgICAgICAgICAgICAgICB7IGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEgJiYgKDxMaW5rIGhyZWY9e1wiL2FkbWluXCJ9PkFkbWluPC9MaW5rPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBJZiB1c2VyIGlzIGxvZ2dlZCBpbiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgaXNBdXRoKCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25vdXQoKCkgPT4gUm91dGVyLnJlcGxhY2UoJy9zaWduaW4nKSl9PlNpZ25vdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8SGVyb0Nhcm91c2VsIHBhZ2VUeXBlPXtwYWdlVHlwZX0+e0hlcm99PC9IZXJvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=