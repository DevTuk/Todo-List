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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const inputName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _inputName_current;\n        (_inputName_current = inputName.current) === null || _inputName_current === void 0 ? void 0 : _inputName_current.focus();\n    }, []);\n    const handleAddTodo = ()=>{\n        if (todo.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                todo\n            ]);\n            setTodo(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const newTodos = todos.filter((_, i)=>i !== index);\n        setTodos(newTodos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-auto sm:max-w-screen-sm \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-5 flex  justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputName,\n                        className: \"rounded-lg p-2\",\n                        placeholder: \"Agregar tarea\",\n                        type: \"text\",\n                        value: todo,\n                        onChange: (e)=>setTodo(e.target.value),\n                        //al apretar enter, ejecutar hanfleAddTodo\n                        onKeyDown: (e)=>{\n                            if (e.code === \"Enter\") {\n                                handleAddTodo();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" rounded-lg bg-blue-400 p-2 align-top\",\n                        type: \"submit\",\n                        onClick: handleAddTodo,\n                        children: \"Agregar tarea\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            todos.map((todo, index)=>// eslint-disable-next-line react/no-array-index-key\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-2 flex justify-around\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex-start p-2\",\n                            children: todo\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" flex-end rounded-lg bg-green-400 p-2\",\n                            type: \"submit\",\n                            onClick: ()=>handleCompleted(index),\n                            children: \"V\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" rounded-lg bg-red-400 p-2\",\n                            type: \"submit\",\n                            onClick: ()=>handleDeleteTodo(index),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"sVf9WnQsZqrL3RoE1P2tmUQ+ZCA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBDO0FBQ2I7QUFFZCxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQy9DLE1BQU1PLFlBQVlOLDZDQUFNQSxDQUFtQjtJQUUzQ0YsZ0RBQVNBLENBQUM7WUFDUlE7U0FBQUEscUJBQUFBLFVBQVVDLE9BQU8sY0FBakJELHlDQUFBQSxtQkFBbUJFLEtBQUs7SUFDMUIsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZ0JBQWdCO1FBQ3BCLElBQUlQLEtBQUtRLElBQUksT0FBTyxJQUFJO1lBQ3RCTCxTQUFTO21CQUFJRDtnQkFBT0Y7YUFBSztZQUN6QkMsUUFBUTtRQUNWO0lBQ0Y7SUFDQSxNQUFNUSxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsV0FBV1QsTUFBTVUsTUFBTSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLE1BQU1KO1FBRTlDUCxTQUFTUTtJQUNYO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxLQUFLZDt3QkFDTFksV0FBVTt3QkFDVkcsYUFBWTt3QkFDWkMsTUFBSzt3QkFDTEMsT0FBT3JCO3dCQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsUUFBUXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDdkMsMENBQTBDO3dCQUMxQ0ksV0FBVyxDQUFDRjs0QkFDVixJQUFJQSxFQUFFRyxJQUFJLEtBQUssU0FBUztnQ0FDdEJuQjs0QkFDRjt3QkFDRjs7Ozs7O2tDQUVGLDhEQUFDb0I7d0JBQ0NYLFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xRLFNBQVNyQjtrQ0FDVjs7Ozs7Ozs7Ozs7O1lBSUZMLE1BQU0yQixHQUFHLENBQUMsQ0FBQzdCLE1BQU1VLFFBQ2hCLG9EQUFvRDs4QkFDcEQsOERBQUNLO29CQUFnQkMsV0FBVTs7c0NBQ3pCLDhEQUFDYzs0QkFBR2QsV0FBVTtzQ0FBa0JoQjs7Ozs7O3NDQUNoQyw4REFBQzJCOzRCQUNDWCxXQUFVOzRCQUNWSSxNQUFLOzRCQUNMUSxTQUFTLElBQU1HLGdCQUFnQnJCO3NDQUNoQzs7Ozs7O3NDQUdELDhEQUFDaUI7NEJBQ0NYLFdBQVU7NEJBQ1ZJLE1BQUs7NEJBQ0xRLFNBQVMsSUFBTW5CLGlCQUFpQkM7c0NBQ2pDOzs7Ozs7O21CQWJPQTs7Ozs7Ozs7Ozs7QUFvQmxCO0dBcEV3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt0b2RvLCBzZXRUb2RvXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IGlucHV0TmFtZSA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlucHV0TmFtZS5jdXJyZW50Py5mb2N1cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9ICgpID0+IHtcclxuICAgIGlmICh0b2RvLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHRvZG9dKTtcclxuICAgICAgc2V0VG9kbyhcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRvZG8gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3VG9kb3MgPSB0b2Rvcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KTtcclxuXHJcbiAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHNtOm1heC13LXNjcmVlbi1zbSBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTUgZmxleCAganVzdGlmeS1ldmVubHlcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlZj17aW5wdXROYW1lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBwLTJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2FyIHRhcmVhXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXt0b2RvfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb2RvKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8vYWwgYXByZXRhciBlbnRlciwgZWplY3V0YXIgaGFuZmxlQWRkVG9kb1xyXG4gICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICBoYW5kbGVBZGRUb2RvKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgcm91bmRlZC1sZyBiZy1ibHVlLTQwMCBwLTIgYWxpZ24tdG9wXCJcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkVG9kb31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZ3JlZ2FyIHRhcmVhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm0tMiBmbGV4IGp1c3RpZnktYXJvdW5kXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleC1zdGFydCBwLTJcIj57dG9kb308L2xpPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgZmxleC1lbmQgcm91bmRlZC1sZyBiZy1ncmVlbi00MDAgcC0yXCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBsZXRlZChpbmRleCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFZcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgcm91bmRlZC1sZyBiZy1yZWQtNDAwIHAtMlwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUb2RvKGluZGV4KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgWFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJIb21lIiwidG9kbyIsInNldFRvZG8iLCJ0b2RvcyIsInNldFRvZG9zIiwiaW5wdXROYW1lIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlQWRkVG9kbyIsInRyaW0iLCJoYW5kbGVEZWxldGVUb2RvIiwiaW5kZXgiLCJuZXdUb2RvcyIsImZpbHRlciIsIl8iLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJyZWYiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5RG93biIsImNvZGUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwibGkiLCJoYW5kbGVDb21wbGV0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});