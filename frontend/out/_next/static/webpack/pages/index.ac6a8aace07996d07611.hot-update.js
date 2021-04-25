webpackHotUpdate_N_E("pages/index",{

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

  var Hero = _ref.Hero;

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
          className: "".concat(navActive ? 'active' : 'inactive', "}"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9IZWFkZXIuanMiXSwibmFtZXMiOlsiTlByb2dyZXNzIiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJ1cmwiLCJzdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJEeW5hbWljTG9yZEljb24iLCJkeW5hbWljIiwic3NyIiwiSGVhZGVyIiwiSGVybyIsInVzZVN0YXRlIiwibmF2QWN0aXZlIiwic2V0TmF2QWN0aXZlIiwiQVBQX05BTUUiLCJ0b0xvd2VyQ2FzZSIsImUiLCJpc0F1dGgiLCJyb2xlIiwic2lnbm91dCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxnREFBUyxDQUFDQyxTQUFWLENBQW9CO0FBQUVDLGFBQVcsRUFBRTtBQUFmLENBQXBCOztBQUVBQyxrREFBTSxDQUFDQyxrQkFBUCxHQUE0QixVQUFBQyxHQUFHO0FBQUEsU0FBSUwsZ0RBQVMsQ0FBQ00sS0FBVixFQUFKO0FBQUEsQ0FBL0I7O0FBQ0FILGtEQUFNLENBQUNJLHFCQUFQLEdBQStCLFVBQUFGLEdBQUc7QUFBQSxTQUFJTCxnREFBUyxDQUFDUSxJQUFWLEVBQUo7QUFBQSxDQUFsQzs7QUFDQUwsa0RBQU0sQ0FBQ00sa0JBQVAsR0FBNEIsVUFBQUosR0FBRztBQUFBLFNBQUlMLGdEQUFTLENBQUNRLElBQVYsRUFBSjtBQUFBLENBQS9COztBQUVBO0FBQ0E7QUFDQSxJQUFNRSxlQUFlLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDBJQUFOO0FBQUEsQ0FBRCxFQUE0QztBQUN2RUMsS0FBRyxFQUFFLEtBRGtFO0FBQUE7QUFBQTtBQUFBLGtDQUE5QiwyREFBOEI7QUFBQTtBQUFBLGNB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LHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkIxQyxFQXNCTUQsNERBQU0sbUJBQ0o7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1FLDZEQUFPLENBQUM7QUFBQSxxQkFBTXBCLGtEQUFNLENBQUNxQixPQUFQLENBQWUsU0FBZixDQUFOO0FBQUEsYUFBRCxDQUFiO0FBQUEsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQWtISSxxRUFBQyw0REFBRDtBQUFBLGdCQUFlVjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsSEo7QUFBQSxrQkFESjtBQXNISCxDQTFIRDs7R0FBTUQsTTs7TUFBQUEsTTtBQTRIU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWM2YThhYWNlMDc5OTZkMDc2MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBzaWdub3V0LCBpc0F1dGggfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCJcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2Jsb2cvU2VhcmNoXCJcclxuXHJcbk5Qcm9ncmVzcy5jb25maWd1cmUoeyBzaG93U3Bpbm5lcjogZmFsc2UgfSk7XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gdXJsID0+IE5Qcm9ncmVzcy5zdGFydCgpXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSB1cmwgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gdXJsID0+IE5Qcm9ncmVzcy5kb25lKClcclxuXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBIZXJvQ2Fyb3VzZWwgZnJvbSBcIi4uLy4uL2Jsb2Nrcy9IZXJvQ2Fyb3VzZWxcIjtcclxuY29uc3QgRHluYW1pY0xvcmRJY29uID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvTG9yZEljb24nKSwge1xyXG4gICAgc3NyOiBmYWxzZVxyXG59KTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IEhlcm8gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhlYWRlciBpZD1cImgtcHJpbWFyeVwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGlja2VyLWJhciBncmlkIGdyaWQtY29scy0yYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWxpZW5idWlsZC1oLWxvZ29cIj57QVBQX05BTUUudG9Mb3dlckNhc2UoKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgdG9nZ2xlLW1vYmlsZS1tZW51YH0gb25DbGljaz17ZSA9PiBzZXROYXZBY3RpdmUoIW5hdkFjdGl2ZSl9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPER5bmFtaWNMb3JkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGlkPXtgbi1wcmltYXJ5YH0gY2xhc3NOYW1lPXtgJHtuYXZBY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9fWB9PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BncmlkIGdyaWQtY29scy0yIGdhcC00IHNtOmdhcC15LTAgc206Z3JpZC1jb2xzLTZgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtcIi9cIn0+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvcmQtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJsb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbGV0dGU9XCIjQ0NDQ0NDOyNmZjI2OTY7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17JzUwcHgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4vYXNzZXRzL2ljb25zLzQ4OS1yb2NrZXQtc3BhY2UvNDg5LXJvY2tldC1zcGFjZS1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPldlYnNpdGU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1wiL1wifT48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9yZC1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZT1cIiNDQ0NDQ0M7I2ZmMjY5NjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvMTEzLWF0b20vMTEzLWF0b20tb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Tb2Z0d2FyZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvXCJ9PjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsb3JkLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwibG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWxldHRlPVwiI0NDQ0NDQzsjZmYyNjk2O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9eyc1MHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuL2Fzc2V0cy9pY29ucy8xMzktYmFza2V0LzEzOS1iYXNrZXQtb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FY29tbWVyY2U8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1wiL1wifT48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9yZC1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZT1cIiNDQ0NDQ0M7I2ZmMjY5NjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvMTE3LXZlY3Rvci1kZXNpZ24tcGVuLzExNy12ZWN0b3ItZGVzaWduLXBlbi1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlVJL1VYPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvYmxvZ3NcIn0+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvcmQtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJsb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbGV0dGU9XCIjQ0NDQ0NDOyNmZjI2OTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvNDM5LWxhYi1ib3R0bGUtdHJpYW5nbGUvNDM5LWxhYi1ib3R0bGUtdHJpYW5nbGUtb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaGUgTGFiPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHV0b3JpYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvXCJ9PjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsb3JkLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwibG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWxldHRlPVwiI0NDQ0NDQzsjZmYyNjk2O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9eyc1MHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuL2Fzc2V0cy9pY29ucy8xNDAtZWFycGhvbmUtdGVsZXBob25lLzE0MC1lYXJwaG9uZS10ZWxlcGhvbmUtb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250YWN0PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxpZW5idWlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBCcmFuZCBuYW1lOiA8TGluayBocmVmPXtcIi9cIn0+e0FQUF9OQU1FfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9ibG9nc1wifT5CbG9nczwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qSWYgdXNlciBpcyBub3QgbG9nZ2VkIGluKi99XHJcbiAgICAgICAgICAgICAgICAgICAgeyAhaXNBdXRoKCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvc2lnbmluXCJ9PlNpZ25pbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NpZ251cFwifT5TaWdudXA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LypMb2dnZWQgaW4gYW5kIG5vdCBhZG1pbiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMCAmJiAoPExpbmsgaHJlZj17XCIvdXNlclwifT5EYXNoYm9hcmQ8L0xpbms+KX1cclxuICAgICAgICAgICAgICAgICAgICB7LypMb2dnZWQgaW4gYW5kIGlzIGFkbWluKi99XHJcbiAgICAgICAgICAgICAgICAgICAgeyBpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxICYmICg8TGluayBocmVmPXtcIi9hZG1pblwifT5BZG1pbjwvTGluaz4pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogSWYgdXNlciBpcyBsb2dnZWQgaW4qL31cclxuICAgICAgICAgICAgICAgICAgICB7IGlzQXV0aCgpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWdub3V0KCgpID0+IFJvdXRlci5yZXBsYWNlKCcvc2lnbmluJykpfT5TaWdub3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPEhlcm9DYXJvdXNlbD57SGVyb308L0hlcm9DYXJvdXNlbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==