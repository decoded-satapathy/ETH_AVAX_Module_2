"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_CrowdFunding_sol_CrowdFunding_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artifacts/contracts/CrowdFunding.sol/CrowdFunding.json */ \"./artifacts/contracts/CrowdFunding.sol/CrowdFunding.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction App() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [crowdFunding, setCrowdFunding] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [crowdFundingSigner, setCrowdFundingSigner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [amountEntered, setAmountEntered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [fundName, setFundName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const crowdFundingABI = _artifacts_contracts_CrowdFunding_sol_CrowdFunding_json__WEBPACK_IMPORTED_MODULE_2__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(accounts);\n        } else {\n            console.log(\"MetaMask not installed\");\n        }\n    };\n    const handleAccount = (accounts)=>{\n        if (accounts.length > 0) {\n            console.log(\"Account connected: \", accounts[0]);\n            setAccount(accounts[0]);\n            getCrowdFundingContract(accounts[0]);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n    };\n    const getCrowdFundingContract = async (account)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(account);\n        console.log(\"Signer: \", signer); // Debugging line to check if signer is properly set\n        const crowdFundingContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(contractAddress, crowdFundingABI, provider);\n        const crowdFundingContractSigner = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(contractAddress, crowdFundingABI, signer);\n        console.log(\"Contract with provider: \", crowdFundingContract); // Debugging line to check contract instance\n        console.log(\"Contract with signer: \", crowdFundingContractSigner); // Debugging line to check contract instance\n        setCrowdFunding(crowdFundingContract);\n        setCrowdFundingSigner(crowdFundingContractSigner);\n    };\n    const contributeToFund = async ()=>{\n        if (crowdFundingSigner && amountEntered > 0) {\n            try {\n                const valueInWei = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.parseUnits(amountEntered.toString(), \"wei\");\n                console.log(\"Parsed Value in Wei: \", valueInWei); // Debugging line\n                let tx = await crowdFundingSigner.contributeToFund({\n                    value: valueInWei,\n                    gasLimit: ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.toBeHex(300000)\n                });\n                await tx.wait(); // Ensure the transaction is mined\n                getBalance(); // Update balance after contribution\n            } catch (error) {\n                console.error(\"Contribution failed:\", error);\n            }\n        } else {\n            console.error(\"crowdFundingSigner is not set or amountEntered is not valid\");\n        }\n    };\n    const getBalance = async ()=>{\n        if (crowdFunding) {\n            const balance = await crowdFunding.getAmountRaised();\n            setBalance(balance);\n        }\n    };\n    const getProjectName = async ()=>{\n        if (crowdFunding) {\n            const NAME = await crowdFundingSigner.getProjectName();\n            setFundName(NAME);\n            console.log(\"response from tx : \");\n            console.log(NAME);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (crowdFunding) {\n            getProjectName();\n            getBalance();\n        }\n    }, [\n        crowdFunding\n    ]);\n    const initUser = ()=>{\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install MetaMask to use this DApp.\"\n            }, void 0, false, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                lineNumber: 122,\n                columnNumber: 14\n            }, this);\n        }\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                className: \"bg-slate-200 border-2 border-black px-4 py-2 rounded-full\",\n                children: \"Connect MetaMask\"\n            }, void 0, false, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-screen h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center w-full h-full gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Project Name: \",\n                            fundName || \"Loading...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Balance: \",\n                            balance !== undefined ? \"\".concat(balance, \" WEI\") : \"Loading...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Enter the amount to donate\",\n                        className: \"border-2 border-black bg-slate-100 rounded-full px-4 py-2\",\n                        onChange: (e)=>setAmountEntered(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: contributeToFund,\n                        className: \"border-2 border-black bg-blue-300 rounded-full px-4 py-2\",\n                        children: \"Donate\"\n                    }, void 0, false, {\n                        fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                        lineNumber: 148,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                lineNumber: 138,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n            lineNumber: 137,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {}, void 0, false, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: initUser()\n                    }, void 0, false, {\n                        fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                        lineNumber: 163,\n                        columnNumber: 9\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n                lineNumber: 162,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.js\",\n        lineNumber: 160,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"UjYdWZDLxyDH1HJ5MMCTPA0XO6U=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztJQU1UO0lBRUEscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQzs7a0NBQ0MsOERBQUNSO2tDQUFLTDs7Ozs7O29CQUFpQjs7Ozs7Ozs7Ozs7OztBQUkvQjtHQWxLd0JyRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBjcm93ZEZ1bmRpbmdBYmkgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvQ3Jvd2RGdW5kaW5nLnNvbC9Dcm93ZEZ1bmRpbmcuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtldGhXYWxsZXQsIHNldEV0aFdhbGxldF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbY3Jvd2RGdW5kaW5nLCBzZXRDcm93ZEZ1bmRpbmddID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2Nyb3dkRnVuZGluZ1NpZ25lciwgc2V0Q3Jvd2RGdW5kaW5nU2lnbmVyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFthbW91bnRFbnRlcmVkLCBzZXRBbW91bnRFbnRlcmVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZnVuZE5hbWUsIHNldEZ1bmROYW1lXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcbiAgY29uc3QgY3Jvd2RGdW5kaW5nQUJJID0gY3Jvd2RGdW5kaW5nQWJpLmFiaTtcblxuICBjb25zdCBnZXRXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgc2V0RXRoV2FsbGV0KHdpbmRvdy5ldGhlcmV1bSk7XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk1ldGFNYXNrIG5vdCBpbnN0YWxsZWRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFjY291bnQgPSAoYWNjb3VudHMpID0+IHtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGNvbm5lY3RlZDogXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgZ2V0Q3Jvd2RGdW5kaW5nQ29udHJhY3QoYWNjb3VudHNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnQgZm91bmRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZXRoV2FsbGV0KSB7XG4gICAgICBhbGVydChcIk1ldGFNYXNrIHdhbGxldCBpcyByZXF1aXJlZCB0byBjb25uZWN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xuICB9O1xuXG4gIGNvbnN0IGdldENyb3dkRnVuZGluZ0NvbnRyYWN0ID0gYXN5bmMgKGFjY291bnQpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKGFjY291bnQpO1xuICAgIGNvbnNvbGUubG9nKFwiU2lnbmVyOiBcIiwgc2lnbmVyKTsgLy8gRGVidWdnaW5nIGxpbmUgdG8gY2hlY2sgaWYgc2lnbmVyIGlzIHByb3Blcmx5IHNldFxuICAgIGNvbnN0IGNyb3dkRnVuZGluZ0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIGNyb3dkRnVuZGluZ0FCSSxcbiAgICAgIHByb3ZpZGVyXG4gICAgKTtcbiAgICBjb25zdCBjcm93ZEZ1bmRpbmdDb250cmFjdFNpZ25lciA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICBjcm93ZEZ1bmRpbmdBQkksXG4gICAgICBzaWduZXJcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiQ29udHJhY3Qgd2l0aCBwcm92aWRlcjogXCIsIGNyb3dkRnVuZGluZ0NvbnRyYWN0KTsgLy8gRGVidWdnaW5nIGxpbmUgdG8gY2hlY2sgY29udHJhY3QgaW5zdGFuY2VcbiAgICBjb25zb2xlLmxvZyhcIkNvbnRyYWN0IHdpdGggc2lnbmVyOiBcIiwgY3Jvd2RGdW5kaW5nQ29udHJhY3RTaWduZXIpOyAvLyBEZWJ1Z2dpbmcgbGluZSB0byBjaGVjayBjb250cmFjdCBpbnN0YW5jZVxuICAgIHNldENyb3dkRnVuZGluZyhjcm93ZEZ1bmRpbmdDb250cmFjdCk7XG4gICAgc2V0Q3Jvd2RGdW5kaW5nU2lnbmVyKGNyb3dkRnVuZGluZ0NvbnRyYWN0U2lnbmVyKTtcbiAgfTtcblxuICBjb25zdCBjb250cmlidXRlVG9GdW5kID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjcm93ZEZ1bmRpbmdTaWduZXIgJiYgYW1vdW50RW50ZXJlZCA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZhbHVlSW5XZWkgPSBldGhlcnMucGFyc2VVbml0cyhhbW91bnRFbnRlcmVkLnRvU3RyaW5nKCksIFwid2VpXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBhcnNlZCBWYWx1ZSBpbiBXZWk6IFwiLCB2YWx1ZUluV2VpKTsgLy8gRGVidWdnaW5nIGxpbmVcblxuICAgICAgICBsZXQgdHggPSBhd2FpdCBjcm93ZEZ1bmRpbmdTaWduZXIuY29udHJpYnV0ZVRvRnVuZCh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlSW5XZWksXG4gICAgICAgICAgZ2FzTGltaXQ6IGV0aGVycy50b0JlSGV4KDMwMDAwMCksIC8vIEFkanVzdCB0aGUgZ2FzIGxpbWl0IGFzIG5lY2Vzc2FyeVxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB0eC53YWl0KCk7IC8vIEVuc3VyZSB0aGUgdHJhbnNhY3Rpb24gaXMgbWluZWRcbiAgICAgICAgZ2V0QmFsYW5jZSgpOyAvLyBVcGRhdGUgYmFsYW5jZSBhZnRlciBjb250cmlidXRpb25cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb250cmlidXRpb24gZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiY3Jvd2RGdW5kaW5nU2lnbmVyIGlzIG5vdCBzZXQgb3IgYW1vdW50RW50ZXJlZCBpcyBub3QgdmFsaWRcIlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoY3Jvd2RGdW5kaW5nKSB7XG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgY3Jvd2RGdW5kaW5nLmdldEFtb3VudFJhaXNlZCgpO1xuICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNyb3dkRnVuZGluZykge1xuICAgICAgY29uc3QgTkFNRSA9IGF3YWl0IGNyb3dkRnVuZGluZ1NpZ25lci5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgc2V0RnVuZE5hbWUoTkFNRSk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlIGZyb20gdHggOiBcIik7XG4gICAgICBjb25zb2xlLmxvZyhOQU1FKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRXYWxsZXQoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNyb3dkRnVuZGluZykge1xuICAgICAgZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgIGdldEJhbGFuY2UoKTtcbiAgICB9XG4gIH0sIFtjcm93ZEZ1bmRpbmddKTtcblxuICBjb25zdCBpbml0VXNlciA9ICgpID0+IHtcbiAgICBpZiAoIWV0aFdhbGxldCkge1xuICAgICAgcmV0dXJuIDxwPlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIHRvIHVzZSB0aGlzIERBcHAuPC9wPjtcbiAgICB9XG5cbiAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0QWNjb3VudH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS0yMDAgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHB4LTQgcHktMiByb3VuZGVkLWZ1bGxcIlxuICAgICAgICA+XG4gICAgICAgICAgQ29ubmVjdCBNZXRhTWFza1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsIGdhcC0zXCI+XG4gICAgICAgICAgPHA+UHJvamVjdCBOYW1lOiB7ZnVuZE5hbWUgfHwgXCJMb2FkaW5nLi4uXCJ9PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQmFsYW5jZToge2JhbGFuY2UgIT09IHVuZGVmaW5lZCA/IGAke2JhbGFuY2V9IFdFSWAgOiBcIkxvYWRpbmcuLi5cIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBhbW91bnQgdG8gZG9uYXRlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFjayBiZy1zbGF0ZS0xMDAgcm91bmRlZC1mdWxsIHB4LTQgcHktMlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudEVudGVyZWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17Y29udHJpYnV0ZVRvRnVuZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFjayBiZy1ibHVlLTMwMCByb3VuZGVkLWZ1bGwgcHgtNCBweS0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBEb25hdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD48L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdj57aW5pdFVzZXIoKX08L2Rpdj47XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiY3Jvd2RGdW5kaW5nQWJpIiwiQXBwIiwiZXRoV2FsbGV0Iiwic2V0RXRoV2FsbGV0IiwidW5kZWZpbmVkIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJjcm93ZEZ1bmRpbmciLCJzZXRDcm93ZEZ1bmRpbmciLCJjcm93ZEZ1bmRpbmdTaWduZXIiLCJzZXRDcm93ZEZ1bmRpbmdTaWduZXIiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImFtb3VudEVudGVyZWQiLCJzZXRBbW91bnRFbnRlcmVkIiwiZnVuZE5hbWUiLCJzZXRGdW5kTmFtZSIsImNvbnRyYWN0QWRkcmVzcyIsImNyb3dkRnVuZGluZ0FCSSIsImFiaSIsImdldFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGFuZGxlQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJnZXRDcm93ZEZ1bmRpbmdDb250cmFjdCIsImNvbm5lY3RBY2NvdW50IiwiYWxlcnQiLCJwcm92aWRlciIsIkJyb3dzZXJQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNyb3dkRnVuZGluZ0NvbnRyYWN0IiwiQ29udHJhY3QiLCJjcm93ZEZ1bmRpbmdDb250cmFjdFNpZ25lciIsImNvbnRyaWJ1dGVUb0Z1bmQiLCJ2YWx1ZUluV2VpIiwicGFyc2VVbml0cyIsInRvU3RyaW5nIiwidHgiLCJ2YWx1ZSIsImdhc0xpbWl0IiwidG9CZUhleCIsIndhaXQiLCJnZXRCYWxhbmNlIiwiZXJyb3IiLCJnZXRBbW91bnRSYWlzZWQiLCJnZXRQcm9qZWN0TmFtZSIsIk5BTUUiLCJpbml0VXNlciIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImh0bWwiLCJoZWFkIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});