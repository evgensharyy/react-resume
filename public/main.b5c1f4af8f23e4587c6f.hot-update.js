webpackHotUpdate("main",{

/***/ "./components/Bloks/OtherExperiences.js":
/*!**********************************************!*\
  !*** ./components/Bloks/OtherExperiences.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ \"./node_modules/@material-ui/core/esm/CardHeader/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Badge */ \"./node_modules/react-bootstrap/Badge.js\");\n/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      padding: theme.spacing(3, 2)\n    },\n    card: {\n      marginTop: 20,\n      boxShadow: '0 2px 4px 1px rgba(57,73,76,0.35)'\n    }\n  };\n});\n\nfunction OtherExperiences() {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.card\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      variant: \"light\"\n    }, \"Other Experiences\")),\n    title: \"Shrimp and Chorizo Paella\",\n    subheader: \"September 14, 2016\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OtherExperiences);\n\n//# sourceURL=webpack:///./components/Bloks/OtherExperiences.js?");

/***/ }),

/***/ "./components/Content/Content.js":
/*!***************************************!*\
  !*** ./components/Content/Content.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimpleCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/Container.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/Row.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/Col.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Bloks_PortfolioBlok__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Bloks/PortfolioBlok */ \"./components/Bloks/PortfolioBlok.js\");\n/* harmony import */ var _Bloks_SkillsBlok__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Bloks/SkillsBlok */ \"./components/Bloks/SkillsBlok.js\");\n/* harmony import */ var _Bloks_EmploymentHistoryBlok__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Bloks/EmploymentHistoryBlok */ \"./components/Bloks/EmploymentHistoryBlok.js\");\n/* harmony import */ var _Bloks_EducationBlok__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Bloks/EducationBlok */ \"./components/Bloks/EducationBlok.js\");\n/* harmony import */ var _Bloks_OtherExperiences__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Bloks/OtherExperiences */ \"./components/Bloks/OtherExperiences.js\");\n\n\n\n\n\n\n\n\n\nfunction SimpleCard() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    sm: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bloks_PortfolioBlok__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    sm: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bloks_SkillsBlok__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    sm: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bloks_EmploymentHistoryBlok__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    sm: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bloks_EducationBlok__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    sm: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bloks_OtherExperiences__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null))));\n}\n\n//# sourceURL=webpack:///./components/Content/Content.js?");

/***/ })

})