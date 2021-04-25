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

  var Hero = _ref.Hero,
      homepage = _ref.homepage;

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
                href: "/",
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
                  columnNumber: 50
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
      homepage: homepage,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9IZWFkZXIuanMiXSwibmFtZXMiOlsiTlByb2dyZXNzIiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJ1cmwiLCJzdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJEeW5hbWljTG9yZEljb24iLCJkeW5hbWljIiwic3NyIiwiSGVhZGVyIiwiSGVybyIsImhvbWVwYWdlIiwidXNlU3RhdGUiLCJuYXZBY3RpdmUiLCJzZXROYXZBY3RpdmUiLCJBUFBfTkFNRSIsInRvTG93ZXJDYXNlIiwiZSIsImlzQXV0aCIsInJvbGUiLCJzaWdub3V0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdEQUFTLENBQUNDLFNBQVYsQ0FBb0I7QUFBRUMsYUFBVyxFQUFFO0FBQWYsQ0FBcEI7O0FBRUFDLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUFDLEdBQUc7QUFBQSxTQUFJTCxnREFBUyxDQUFDTSxLQUFWLEVBQUo7QUFBQSxDQUEvQjs7QUFDQUgsa0RBQU0sQ0FBQ0kscUJBQVAsR0FBK0IsVUFBQUYsR0FBRztBQUFBLFNBQUlMLGdEQUFTLENBQUNRLElBQVYsRUFBSjtBQUFBLENBQWxDOztBQUNBTCxrREFBTSxDQUFDTSxrQkFBUCxHQUE0QixVQUFBSixHQUFHO0FBQUEsU0FBSUwsZ0RBQVMsQ0FBQ1EsSUFBVixFQUFKO0FBQUEsQ0FBL0I7O0FBRUE7QUFDQTtBQUNBLElBQU1FLGVBQWUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sMElBQU47QUFBQSxDQUFELEVBQTRDO0FBQ3ZFQyxLQUFHLEVBQUUsS0FEa0U7QUFBQTtBQUFBO0FBQUEsa0NBQTlCLDJEQUE4QjtB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QU0sTUFBTUEsNERBQU0sR0FBR0MsSUFBVCxLQUFrQixDQUE5QixpQkFBb0MscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUUsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQjFDLEVBc0JNRCw0REFBTSxtQkFDSjtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUUsNkRBQU8sQ0FBQztBQUFBLHFCQUFNckIsa0RBQU0sQ0FBQ3NCLE9BQVAsQ0FBZSxTQUFmLENBQU47QUFBQSxhQUFELENBQWI7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBa0hJLHFFQUFDLDREQUFEO0FBQWMsY0FBUSxFQUFFVixRQUF4QjtBQUFBLGdCQUFtQ0Q7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxISjtBQUFBLGtCQURKO0FBc0hILENBMUhEOztHQUFNRCxNOztNQUFBQSxNO0FBNEhTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZDc2Nzk2MmQ1ZTc0Mjk0MmE3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmltcG9ydCB7IHNpZ25vdXQsIGlzQXV0aCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIlxyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vYmxvZy9TZWFyY2hcIlxyXG5cclxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4gTlByb2dyZXNzLnN0YXJ0KClcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9IHVybCA9PiBOUHJvZ3Jlc3MuZG9uZSgpXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSB1cmwgPT4gTlByb2dyZXNzLmRvbmUoKVxyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IEhlcm9DYXJvdXNlbCBmcm9tIFwiLi4vLi4vYmxvY2tzL0hlcm9DYXJvdXNlbFwiO1xyXG5jb25zdCBEeW5hbWljTG9yZEljb24gPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9Mb3JkSWNvbicpLCB7XHJcbiAgICBzc3I6IGZhbHNlXHJcbn0pO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgSGVybywgaG9tZXBhZ2UgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhlYWRlciBpZD1cImgtcHJpbWFyeVwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGlja2VyLWJhciBncmlkIGdyaWQtY29scy0yYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWxpZW5idWlsZC1oLWxvZ29cIj57QVBQX05BTUUudG9Mb3dlckNhc2UoKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgdG9nZ2xlLW1vYmlsZS1tZW51YH0gb25DbGljaz17ZSA9PiBzZXROYXZBY3RpdmUoIW5hdkFjdGl2ZSl9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPER5bmFtaWNMb3JkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGlkPXtgbi1wcmltYXJ5YH0gY2xhc3NOYW1lPXtgJHtuYXZBY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BncmlkIGdyaWQtY29scy0yIGdhcC00IHNtOmdhcC15LTAgc206Z3JpZC1jb2xzLTZgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtcIi9cIn0+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvcmQtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJsb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbGV0dGU9XCIjQ0NDQ0NDOyNmZjI2OTY7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17JzUwcHgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4vYXNzZXRzL2ljb25zLzQ4OS1yb2NrZXQtc3BhY2UvNDg5LXJvY2tldC1zcGFjZS1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPldlYnNpdGU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1wiL1wifT48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9yZC1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZT1cIiNDQ0NDQ0M7I2ZmMjY5NjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvMTEzLWF0b20vMTEzLWF0b20tb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Tb2Z0d2FyZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvXCJ9PjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsb3JkLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwibG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWxldHRlPVwiI0NDQ0NDQzsjZmYyNjk2O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9eyc1MHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuL2Fzc2V0cy9pY29ucy8xMzktYmFza2V0LzEzOS1iYXNrZXQtb3V0bGluZS5qc29uYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3JkLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FY29tbWVyY2U8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1wiL1wifT48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9yZC1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZT1cIiNDQ0NDQ0M7I2ZmMjY5NjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvMTE3LXZlY3Rvci1kZXNpZ24tcGVuLzExNy12ZWN0b3ItZGVzaWduLXBlbi1vdXRsaW5lLmpzb25gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xvcmQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlVJL1VYPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvXCJ9PjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsb3JkLWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwibG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWxldHRlPVwiI0NDQ0NDQzsjZmYyNjk2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17JzUwcHgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4vYXNzZXRzL2ljb25zLzQzOS1sYWItYm90dGxlLXRyaWFuZ2xlLzQzOS1sYWItYm90dGxlLXRyaWFuZ2xlLW91dGxpbmUuanNvbmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbG9yZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhlIExhYjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR1dG9yaWFsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1wiL1wifT48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bG9yZC1pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZT1cIiNDQ0NDQ0M7I2ZmMjY5NjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnNTBweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi9hc3NldHMvaWNvbnMvMTQwLWVhcnBob25lLXRlbGVwaG9uZS8xNDAtZWFycGhvbmUtdGVsZXBob25lLW91dGxpbmUuanNvbmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbG9yZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGFjdDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsaWVuYnVpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJhbmQgbmFtZTogPExpbmsgaHJlZj17XCIvXCJ9PntBUFBfTkFNRX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvYmxvZ3NcIn0+QmxvZ3M8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKklmIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIWlzQXV0aCgpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NpZ25pblwifT5TaWduaW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9zaWdudXBcIn0+U2lnbnVwPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qTG9nZ2VkIGluIGFuZCBub3QgYWRtaW4qL31cclxuICAgICAgICAgICAgICAgICAgICB7IGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDAgJiYgKDxMaW5rIGhyZWY9e1wiL3VzZXJcIn0+RGFzaGJvYXJkPC9MaW5rPil9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qTG9nZ2VkIGluIGFuZCBpcyBhZG1pbiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSAmJiAoPExpbmsgaHJlZj17XCIvYWRtaW5cIn0+QWRtaW48L0xpbms+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIElmIHVzZXIgaXMgbG9nZ2VkIGluKi99XHJcbiAgICAgICAgICAgICAgICAgICAgeyBpc0F1dGgoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbm91dCgoKSA9PiBSb3V0ZXIucmVwbGFjZSgnL3NpZ25pbicpKX0+U2lnbm91dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxIZXJvQ2Fyb3VzZWwgaG9tZXBhZ2U9e2hvbWVwYWdlfT57SGVyb308L0hlcm9DYXJvdXNlbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==