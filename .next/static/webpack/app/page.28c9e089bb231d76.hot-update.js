"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleAddTodo = ()=>{\n        if (todo.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                todo\n            ]);\n            setTodo(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const newTodos = todos.filter((todo, i)=>i !== index);\n        setTodos(newTodos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"m-5 rounded-lg p-1\",\n                type: \"text\",\n                value: todo,\n                onChange: (e)=>setTodo(e.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-grey-300 rounded-xl p-2\",\n                type: \"submit\",\n                onClick: handleAddTodo,\n                children: \"Add Todo\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            todos.map((todo, index)=>// eslint-disable-next-line react/no-array-index-key\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: todo\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: ()=>handleDeleteTodo(index),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"7DKd7CJCdxVY/pQjjQ6xII7vyb4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQytCO0FBRWhCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFXLEVBQUU7SUFFL0MsTUFBTU0sZ0JBQWdCO1FBQ3BCLElBQUlKLEtBQUtLLElBQUksT0FBTyxJQUFJO1lBQ3RCRixTQUFTO21CQUFJRDtnQkFBT0Y7YUFBSztZQUN6QkMsUUFBUTtRQUNWO0lBQ0Y7SUFDQSxNQUFNSyxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsV0FBV04sTUFBTU8sTUFBTSxDQUFDLENBQUNULE1BQU1VLElBQU1BLE1BQU1IO1FBRWpESixTQUFTSztJQUNYO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLE1BQUs7Z0JBQ0xDLE9BQU9mO2dCQUNQZ0IsVUFBVSxDQUFDQyxJQUFNaEIsUUFBUWdCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBCQUV6Qyw4REFBQ0k7Z0JBQU9OLFdBQVU7Z0JBQTZCQyxNQUFLO2dCQUFTTSxTQUFTaEI7MEJBQWU7Ozs7OztZQUdwRkYsTUFBTW1CLEdBQUcsQ0FBQyxDQUFDckIsTUFBTU8sUUFDaEIsb0RBQW9EOzhCQUNwRCw4REFBQ0k7O3NDQUNDLDhEQUFDVztzQ0FBR3RCOzs7Ozs7c0NBQ0osOERBQUNtQjs0QkFBT0wsTUFBSzs0QkFBU00sU0FBUyxJQUFNZCxpQkFBaUJDO3NDQUFROzs7Ozs7O21CQUZ0REE7Ozs7Ozs7Ozs7O0FBU2xCO0dBdEN3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSAoKSA9PiB7XHJcbiAgICBpZiAodG9kby50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCB0b2RvXSk7XHJcbiAgICAgIHNldFRvZG8oXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEZWxldGVUb2RvID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IG5ld1RvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvLCBpKSA9PiBpICE9PSBpbmRleCk7XHJcblxyXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJtLTUgcm91bmRlZC1sZyBwLTFcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17dG9kb31cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvZG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZXktMzAwIHJvdW5kZWQteGwgcC0yXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZUFkZFRvZG99PlxyXG4gICAgICAgIEFkZCBUb2RvXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPHA+e3RvZG99PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlVG9kbyhpbmRleCl9PlxyXG4gICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInRvZG8iLCJzZXRUb2RvIiwidG9kb3MiLCJzZXRUb2RvcyIsImhhbmRsZUFkZFRvZG8iLCJ0cmltIiwiaGFuZGxlRGVsZXRlVG9kbyIsImluZGV4IiwibmV3VG9kb3MiLCJmaWx0ZXIiLCJpIiwiZGl2IiwiaW5wdXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});