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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const inputName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _inputName_current;\n        (_inputName_current = inputName.current) === null || _inputName_current === void 0 ? void 0 : _inputName_current.focus();\n    }, []);\n    const handleAddTodo = ()=>{\n        if (todo.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                todo\n            ]);\n            setTodo(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const newTodos = todos.filter((_, i)=>i !== index);\n        setTodos(newTodos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-auto sm:max-w-screen-sm \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-5 flex  justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputName,\n                        className: \"rounded-lg p-2\",\n                        placeholder: \"Agregar tarea\",\n                        type: \"text\",\n                        value: todo,\n                        onChange: (e)=>setTodo(e.target.value),\n                        //al apretar enter, ejecutar hanfleAddTodo\n                        onKeyDown: (e)=>{\n                            if (e.code === \"Enter\") {\n                                handleAddTodo();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" rounded-lg bg-blue-400 p-2 align-top\",\n                        type: \"submit\",\n                        onClick: handleAddTodo,\n                        children: \"Agregar tarea\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            todos.map((todo, index)=>// eslint-disable-next-line react/no-array-index-key\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-2 flex \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-2\",\n                            children: todo\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" rounded-lg bg-green-400 p-2\",\n                            type: \"submit\",\n                            onClick: ()=>handleCompleted(index),\n                            children: \"V\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"justify- flex rounded-lg bg-red-400 p-2\",\n                            type: \"submit\",\n                            onClick: ()=>handleDeleteTodo(index),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"sVf9WnQsZqrL3RoE1P2tmUQ+ZCA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBDO0FBQ2I7QUFFZCxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQy9DLE1BQU1PLFlBQVlOLDZDQUFNQSxDQUFtQjtJQUUzQ0YsZ0RBQVNBLENBQUM7WUFDUlE7U0FBQUEscUJBQUFBLFVBQVVDLE9BQU8sY0FBakJELHlDQUFBQSxtQkFBbUJFLEtBQUs7SUFDMUIsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZ0JBQWdCO1FBQ3BCLElBQUlQLEtBQUtRLElBQUksT0FBTyxJQUFJO1lBQ3RCTCxTQUFTO21CQUFJRDtnQkFBT0Y7YUFBSztZQUN6QkMsUUFBUTtRQUNWO0lBQ0Y7SUFDQSxNQUFNUSxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsV0FBV1QsTUFBTVUsTUFBTSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLE1BQU1KO1FBRTlDUCxTQUFTUTtJQUNYO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxLQUFLZDt3QkFDTFksV0FBVTt3QkFDVkcsYUFBWTt3QkFDWkMsTUFBSzt3QkFDTEMsT0FBT3JCO3dCQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsUUFBUXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDdkMsMENBQTBDO3dCQUMxQ0ksV0FBVyxDQUFDRjs0QkFDVixJQUFJQSxFQUFFRyxJQUFJLEtBQUssU0FBUztnQ0FDdEJuQjs0QkFDRjt3QkFDRjs7Ozs7O2tDQUVGLDhEQUFDb0I7d0JBQ0NYLFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xRLFNBQVNyQjtrQ0FDVjs7Ozs7Ozs7Ozs7O1lBSUZMLE1BQU0yQixHQUFHLENBQUMsQ0FBQzdCLE1BQU1VLFFBQ2hCLG9EQUFvRDs4QkFDcEQsOERBQUNLO29CQUFnQkMsV0FBVTs7c0NBQ3pCLDhEQUFDYzs0QkFBR2QsV0FBVTtzQ0FBT2hCOzs7Ozs7c0NBQ3JCLDhEQUFDMkI7NEJBQ0NYLFdBQVU7NEJBQ1ZJLE1BQUs7NEJBQ0xRLFNBQVMsSUFBTUcsZ0JBQWdCckI7c0NBQ2hDOzs7Ozs7c0NBR0QsOERBQUNpQjs0QkFDQ1gsV0FBVTs0QkFDVkksTUFBSzs0QkFDTFEsU0FBUyxJQUFNbkIsaUJBQWlCQztzQ0FDakM7Ozs7Ozs7bUJBYk9BOzs7Ozs7Ozs7OztBQW9CbEI7R0FwRXdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgaW5wdXROYW1lID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5wdXROYW1lLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gKCkgPT4ge1xyXG4gICAgaWYgKHRvZG8udHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgdG9kb10pO1xyXG4gICAgICBzZXRUb2RvKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlVG9kbyA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvcyA9IHRvZG9zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpO1xyXG5cclxuICAgIHNldFRvZG9zKG5ld1RvZG9zKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gc206bWF4LXctc2NyZWVuLXNtIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNSBmbGV4ICBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcmVmPXtpbnB1dE5hbWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHAtMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFncmVnYXIgdGFyZWFcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3RvZG99XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvZG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLy9hbCBhcHJldGFyIGVudGVyLCBlamVjdXRhciBoYW5mbGVBZGRUb2RvXHJcbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgIGhhbmRsZUFkZFRvZG8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWxnIGJnLWJsdWUtNDAwIHAtMiBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFncmVnYXIgdGFyZWFcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHt0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibS0yIGZsZXggXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicC0yXCI+e3RvZG99PC9saT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtbGcgYmctZ3JlZW4tNDAwIHAtMlwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wbGV0ZWQoaW5kZXgpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS0gZmxleCByb3VuZGVkLWxnIGJnLXJlZC00MDAgcC0yXCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRvZG8oaW5kZXgpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBYXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkhvbWUiLCJ0b2RvIiwic2V0VG9kbyIsInRvZG9zIiwic2V0VG9kb3MiLCJpbnB1dE5hbWUiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVBZGRUb2RvIiwidHJpbSIsImhhbmRsZURlbGV0ZVRvZG8iLCJpbmRleCIsIm5ld1RvZG9zIiwiZmlsdGVyIiwiXyIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInJlZiIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlEb3duIiwiY29kZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJsaSIsImhhbmRsZUNvbXBsZXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});