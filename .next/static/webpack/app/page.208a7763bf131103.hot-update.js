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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const inputName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _inputName_current;\n        (_inputName_current = inputName.current) === null || _inputName_current === void 0 ? void 0 : _inputName_current.focus();\n    }, []);\n    const handleAddTodo = ()=>{\n        if (todo.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                todo\n            ]);\n            setTodo(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const newTodos = todos.filter((_, i)=>i !== index);\n        setTodos(newTodos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-auto sm:max-w-screen-sm \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-5 flex  justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputName,\n                        className: \"rounded-lg p-2\",\n                        placeholder: \"Agregar tarea\",\n                        type: \"text\",\n                        value: todo,\n                        onChange: (e)=>setTodo(e.target.value),\n                        //al apretar enter, ejecutar hanfleAddTodo\n                        onKeyDown: (e)=>{\n                            if (e.code === \"Enter\") {\n                                handleAddTodo();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" rounded-lg bg-blue-400 p-2 align-top\",\n                        type: \"submit\",\n                        onClick: handleAddTodo,\n                        children: \"Guardar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            todos.map((todo, index)=>// eslint-disable-next-line react/no-array-index-key\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-2 flex  justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-2\",\n                            children: todo\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"ml-2 rounded-lg bg-red-400 p-2\",\n                                type: \"submit\",\n                                onClick: ()=>handleDeleteTodo(index),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"sVf9WnQsZqrL3RoE1P2tmUQ+ZCA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBDO0FBQ2I7QUFFZCxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQy9DLE1BQU1PLFlBQVlOLDZDQUFNQSxDQUFtQjtJQUUzQ0YsZ0RBQVNBLENBQUM7WUFDUlE7U0FBQUEscUJBQUFBLFVBQVVDLE9BQU8sY0FBakJELHlDQUFBQSxtQkFBbUJFLEtBQUs7SUFDMUIsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZ0JBQWdCO1FBQ3BCLElBQUlQLEtBQUtRLElBQUksT0FBTyxJQUFJO1lBQ3RCTCxTQUFTO21CQUFJRDtnQkFBT0Y7YUFBSztZQUN6QkMsUUFBUTtRQUNWO0lBQ0Y7SUFDQSxNQUFNUSxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsV0FBV1QsTUFBTVUsTUFBTSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLE1BQU1KO1FBRTlDUCxTQUFTUTtJQUNYO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxLQUFLZDt3QkFDTFksV0FBVTt3QkFDVkcsYUFBWTt3QkFDWkMsTUFBSzt3QkFDTEMsT0FBT3JCO3dCQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsUUFBUXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDdkMsMENBQTBDO3dCQUMxQ0ksV0FBVyxDQUFDRjs0QkFDVixJQUFJQSxFQUFFRyxJQUFJLEtBQUssU0FBUztnQ0FDdEJuQjs0QkFDRjt3QkFDRjs7Ozs7O2tDQUVGLDhEQUFDb0I7d0JBQ0NYLFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xRLFNBQVNyQjtrQ0FDVjs7Ozs7Ozs7Ozs7O1lBSUZMLE1BQU0yQixHQUFHLENBQUMsQ0FBQzdCLE1BQU1VLFFBQ2hCLG9EQUFvRDs4QkFDcEQsOERBQUNLO29CQUFnQkMsV0FBVTs7c0NBQ3pCLDhEQUFDYzs0QkFBR2QsV0FBVTtzQ0FBT2hCOzs7Ozs7c0NBQ3JCLDhEQUFDZTtzQ0FDQyw0RUFBQ1k7Z0NBQ0NYLFdBQVU7Z0NBQ1ZJLE1BQUs7Z0NBQ0xRLFNBQVMsSUFBTW5CLGlCQUFpQkM7MENBQ2pDOzs7Ozs7Ozs7Ozs7bUJBUEtBOzs7Ozs7Ozs7OztBQWVsQjtHQS9Ed0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbdG9kbywgc2V0VG9kb10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBpbnB1dE5hbWUgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbnB1dE5hbWUuY3VycmVudD8uZm9jdXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSAoKSA9PiB7XHJcbiAgICBpZiAodG9kby50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCB0b2RvXSk7XHJcbiAgICAgIHNldFRvZG8oXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEZWxldGVUb2RvID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IG5ld1RvZG9zID0gdG9kb3MuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCk7XHJcblxyXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBzbTptYXgtdy1zY3JlZW4tc20gXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01IGZsZXggIGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICByZWY9e2lucHV0TmFtZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgcC0yXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdyZWdhciB0YXJlYVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17dG9kb31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9kbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvL2FsIGFwcmV0YXIgZW50ZXIsIGVqZWN1dGFyIGhhbmZsZUFkZFRvZG9cclxuICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlQWRkVG9kbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtbGcgYmctYmx1ZS00MDAgcC0yIGFsaWduLXRvcFwiXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZFRvZG99XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3RvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtLTIgZmxleCAganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicC0yXCI+e3RvZG99PC9saT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIHJvdW5kZWQtbGcgYmctcmVkLTQwMCBwLTJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRvZG8oaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJIb21lIiwidG9kbyIsInNldFRvZG8iLCJ0b2RvcyIsInNldFRvZG9zIiwiaW5wdXROYW1lIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlQWRkVG9kbyIsInRyaW0iLCJoYW5kbGVEZWxldGVUb2RvIiwiaW5kZXgiLCJuZXdUb2RvcyIsImZpbHRlciIsIl8iLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJyZWYiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5RG93biIsImNvZGUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});