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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleAddTodo = ()=>{\n        if (todo.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                todo\n            ]);\n            setTodo(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const newTodos = todos.filter((todo, i)=>i !== index);\n        setTodos(newTodos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-auto max-w-screen-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-5 flex justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-lg p-2\",\n                        placeholder: \"Agregar tarea\",\n                        type: \"text\",\n                        value: todo,\n                        onChange: (e)=>setTodo(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"rounded-xl bg-blue-400 p-2 align-top\",\n                        type: \"submit\",\n                        onClick: handleAddTodo,\n                        children: \"Agregar tarea\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            todos.map((todo, index)=>// eslint-disable-next-line react/no-array-index-key\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-2 flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-2\",\n                            children: todo\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"flex-end rounded-xl bg-red-400 p-2\",\n                            type: \"submit\",\n                            onClick: ()=>handleDeleteTodo(index),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Proyectos\\\\Todo Tsc\\\\todo\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"7DKd7CJCdxVY/pQjjQ6xII7vyb4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQytCO0FBRWhCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFXLEVBQUU7SUFFL0MsTUFBTU0sZ0JBQWdCO1FBQ3BCLElBQUlKLEtBQUtLLElBQUksT0FBTyxJQUFJO1lBQ3RCRixTQUFTO21CQUFJRDtnQkFBT0Y7YUFBSztZQUN6QkMsUUFBUTtRQUNWO0lBQ0Y7SUFDQSxNQUFNSyxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsV0FBV04sTUFBTU8sTUFBTSxDQUFDLENBQUNULE1BQU1VLElBQU1BLE1BQU1IO1FBRWpESixTQUFTSztJQUNYO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDRCxXQUFVO3dCQUNWRSxhQUFZO3dCQUNaQyxNQUFLO3dCQUNMQyxPQUFPaEI7d0JBQ1BpQixVQUFVLENBQUNDLElBQU1qQixRQUFRaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRXpDLDhEQUFDSTt3QkFDQ1IsV0FBVTt3QkFDVkcsTUFBSzt3QkFDTE0sU0FBU2pCO2tDQUNWOzs7Ozs7Ozs7Ozs7WUFJRkYsTUFBTW9CLEdBQUcsQ0FBQyxDQUFDdEIsTUFBTU8sUUFDaEIsb0RBQW9EOzhCQUNwRCw4REFBQ0k7b0JBQWdCQyxXQUFVOztzQ0FDekIsOERBQUNXOzRCQUFHWCxXQUFVO3NDQUFPWjs7Ozs7O3NDQUNyQiw4REFBQ29COzRCQUNDUixXQUFVOzRCQUNWRyxNQUFLOzRCQUNMTSxTQUFTLElBQU1mLGlCQUFpQkM7c0NBQ2pDOzs7Ozs7O21CQU5PQTs7Ozs7Ozs7Ozs7QUFhbEI7R0FqRHdCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbdG9kbywgc2V0VG9kb10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9ICgpID0+IHtcclxuICAgIGlmICh0b2RvLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHRvZG9dKTtcclxuICAgICAgc2V0VG9kbyhcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRvZG8gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3VG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8sIGkpID0+IGkgIT09IGluZGV4KTtcclxuXHJcbiAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIG1heC13LXNjcmVlbi1zbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNSBmbGV4IGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHAtMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFncmVnYXIgdGFyZWFcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3RvZG99XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvZG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBiZy1ibHVlLTQwMCBwLTIgYWxpZ24tdG9wXCJcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkVG9kb31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZ3JlZ2FyIHRhcmVhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm0tMiBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInAtMlwiPnt0b2RvfTwvbGk+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZW5kIHJvdW5kZWQteGwgYmctcmVkLTQwMCBwLTJcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlVG9kbyhpbmRleCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFhcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInRvZG8iLCJzZXRUb2RvIiwidG9kb3MiLCJzZXRUb2RvcyIsImhhbmRsZUFkZFRvZG8iLCJ0cmltIiwiaGFuZGxlRGVsZXRlVG9kbyIsImluZGV4IiwibmV3VG9kb3MiLCJmaWx0ZXIiLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});