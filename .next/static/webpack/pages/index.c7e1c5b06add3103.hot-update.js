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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_CrowdFunding_sol_CrowdFunding_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artifacts/contracts/CrowdFunding.sol/CrowdFunding.json */ \"./artifacts/contracts/CrowdFunding.sol/CrowdFunding.json\");\n/* harmony import */ var _public_tuneTunnelDashboard_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/tuneTunnelDashboard.png */ \"./public/tuneTunnelDashboard.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction App() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [crowdFunding, setCrowdFunding] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [crowdFundingSigner, setCrowdFundingSigner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [amountEntered, setAmountEntered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [fundName, setFundName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userContribution, setUserContribution] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [creator, setCreator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [fundingLimit, setFundingLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(nan);\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const crowdFundingABI = _artifacts_contracts_CrowdFunding_sol_CrowdFunding_json__WEBPACK_IMPORTED_MODULE_2__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(accounts);\n        } else {\n            console.log(\"MetaMask not installed\");\n        }\n    };\n    const handleAccount = (accounts)=>{\n        if (accounts.length > 0) {\n            console.log(\"Account connected: \", accounts[0]);\n            setAccount(accounts[0]);\n            getCrowdFundingContract(accounts[0]);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n    };\n    const getCrowdFundingContract = async (account)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(account);\n        console.log(\"Signer: \", signer); // Debugging line to check if signer is properly set\n        const crowdFundingContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, crowdFundingABI, provider);\n        const crowdFundingContractSigner = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, crowdFundingABI, signer);\n        console.log(\"Contract with provider: \", crowdFundingContract); // Debugging line to check contract instance\n        console.log(\"Contract with signer: \", crowdFundingContractSigner); // Debugging line to check contract instance\n        setCrowdFunding(crowdFundingContract);\n        setCrowdFundingSigner(crowdFundingContractSigner);\n    };\n    const contributeToFund = async ()=>{\n        if (crowdFundingSigner && amountEntered > 0) {\n            try {\n                const valueInWei = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.parseUnits(amountEntered.toString(), \"wei\");\n                console.log(\"Parsed Value in Wei: \", valueInWei); // Debugging line\n                let tx = await crowdFundingSigner.contributeToFund({\n                    value: valueInWei,\n                    gasLimit: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.toBeHex(300000)\n                });\n                await tx.wait(); // Ensure the transaction is mined\n                getBalance(); // Update balance after contribution\n            } catch (error) {\n                console.error(\"Contribution failed:\", error);\n            }\n        } else {\n            console.error(\"crowdFundingSigner is not set or amountEntered is not valid\");\n        }\n    };\n    const getBalance = async ()=>{\n        if (crowdFunding) {\n            const balance = await crowdFunding.getAmountRaised();\n            setBalance(balance);\n        }\n    };\n    const getProjectName = async ()=>{\n        if (crowdFunding) {\n            const NAME = await crowdFundingSigner.getProjectName();\n            setFundName(NAME);\n            console.log(\"response from tx : \");\n            console.log(NAME);\n        }\n    };\n    const handleImageLoad = ()=>{\n        setImageLoaded(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getWallet();\n        setLoaded(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (crowdFunding) {\n            getProjectName();\n            getBalance();\n        }\n    }, [\n        crowdFunding\n    ]);\n    const initUser = ()=>{\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install MetaMask to use this DApp.\"\n            }, void 0, false, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                lineNumber: 134,\n                columnNumber: 14\n            }, this);\n        }\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                className: \"bg-slate-200 border-2 border-black px-4 py-2 rounded-full\",\n                children: \"Connect MetaMask\"\n            }, void 0, false, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                lineNumber: 139,\n                columnNumber: 9\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center items-center w-full h-full gap-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white font-bold text-5xl\",\n                    children: [\n                        \"Project Name: \",\n                        fundName || \"Loading...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                    lineNumber: 150,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-300  text-2xl\",\n                    children: [\n                        \"Amount Raised till Now:\",\n                        \" \",\n                        balance !== undefined ? \"\".concat(balance, \" WEI\") : \"Loading...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                    lineNumber: 153,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"Enter the amount to donate\",\n                    className: \"border-2 border-gray-400 my-5 text-xl bg-[#08083b] rounded-full px-4 py-3 placeholder:text-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a0a89] focus:border-white focus:border-[3px]\",\n                    onChange: (e)=>setAmountEntered(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                    lineNumber: 157,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: contributeToFund,\n                    className: \"border-2 border-gray-400  text-white  bg-[#0a0a89] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                    children: \"Donate\"\n                }, void 0, false, {\n                    fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                    lineNumber: 162,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n            lineNumber: 149,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen overflow-hidden bg-indigo-950\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: _public_tuneTunnelDashboard_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Background\",\n                width: \"1000\",\n                height: \"1000\",\n                onLoad: handleImageLoad,\n                className: \"absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out \".concat(imageLoaded ? \"opacity-100 translate-y-0\" : \"opacity-0 translate-y-10\")\n            }, void 0, false, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                lineNumber: 174,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-1000 ease-in-out \".concat(imageLoaded ? \"opacity-100\" : \"opacity-0\")\n            }, void 0, false, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-in-out \".concat(loaded ? \"opacity-100 translate-y-0\" : \"opacity-0 translate-y-10\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-0  transition-opacity duration-1000 ease-in-out \".concat(imageLoaded ? \"opacity-100\" : \"opacity-0\"),\n                    children: initUser()\n                }, void 0, false, {\n                    fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                    lineNumber: 194,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n                lineNumber: 189,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/osatapathy/collegeStuff/Sem_5/MetaCrafters/ETH-AVAX-Intermediate/module_2/final_project_v2/pages/index.jsx\",\n        lineNumber: 173,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"3rcCFqeQOlXGY9YWoaZIjDCMfao=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQ1g7Ozs7OztRQUlMO1FBRUEscUJBQ0UsOERBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDSDtvQkFBRUcsV0FBVTs7d0JBQWdDO3dCQUM1QnZELFlBQVk7Ozs7Ozs7OEJBRTdCLDhEQUFDb0Q7b0JBQUVHLFdBQVU7O3dCQUEwQjt3QkFDYjt3QkFDdkIzRCxZQUFZUCxZQUFZLEdBQVcsT0FBUk8sU0FBUSxVQUFROzs7Ozs7OzhCQUU5Qyw4REFBQzZEO29CQUNDQyxhQUFZO29CQUNaSCxXQUFVO29CQUNWSSxVQUFVLENBQUNDLElBQU03RCxpQkFBaUI2RCxFQUFFQyxNQUFNLENBQUNwQixLQUFLOzs7Ozs7OEJBRWxELDhEQUFDWTtvQkFDQ0MsU0FBU2xCO29CQUNUbUIsV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7O0lBS1A7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUQsV0FBVTs7MEJBQ2IsOERBQUN0RSxtREFBS0E7Z0JBQ0o2RSxLQUFLOUUsdUVBQW1CQTtnQkFDeEIrRSxLQUFJO2dCQUNKQyxPQUFNO2dCQUNOQyxRQUFPO2dCQUNQQyxRQUFRaEI7Z0JBQ1JLLFdBQVcsOEZBRVYsT0FEQ25ELGNBQWMsOEJBQThCOzs7Ozs7MEJBR2hELDhEQUFDb0Q7Z0JBQ0NELFdBQVcsd0ZBRVYsT0FEQ25ELGNBQWMsZ0JBQWdCOzs7Ozs7MEJBR2xDLDhEQUFDb0Q7Z0JBQ0NELFdBQVcsdUhBRVYsT0FEQ3JELFNBQVMsOEJBQThCOzBCQUd6Qyw0RUFBQ3NEO29CQUNDRCxXQUFXLGtFQUVWLE9BRENuRCxjQUFjLGdCQUFnQjs4QkFHL0IrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQXJNd0JqRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgY3Jvd2RGdW5kaW5nQWJpIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0Nyb3dkRnVuZGluZy5zb2wvQ3Jvd2RGdW5kaW5nLmpzb25cIjtcbmltcG9ydCB0dW5lVHVubmVsRGFzaGJvYXJkIGZyb20gXCIuLi9wdWJsaWMvdHVuZVR1bm5lbERhc2hib2FyZC5wbmdcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtldGhXYWxsZXQsIHNldEV0aFdhbGxldF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbY3Jvd2RGdW5kaW5nLCBzZXRDcm93ZEZ1bmRpbmddID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2Nyb3dkRnVuZGluZ1NpZ25lciwgc2V0Q3Jvd2RGdW5kaW5nU2lnbmVyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFthbW91bnRFbnRlcmVkLCBzZXRBbW91bnRFbnRlcmVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZnVuZE5hbWUsIHNldEZ1bmROYW1lXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlckNvbnRyaWJ1dGlvbiwgc2V0VXNlckNvbnRyaWJ1dGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2Z1bmRpbmdMaW1pdCwgc2V0RnVuZGluZ0xpbWl0XSA9IHVzZVN0YXRlKG5hbik7XG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcbiAgY29uc3QgY3Jvd2RGdW5kaW5nQUJJID0gY3Jvd2RGdW5kaW5nQWJpLmFiaTtcblxuICBjb25zdCBnZXRXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgc2V0RXRoV2FsbGV0KHdpbmRvdy5ldGhlcmV1bSk7XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk1ldGFNYXNrIG5vdCBpbnN0YWxsZWRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFjY291bnQgPSAoYWNjb3VudHMpID0+IHtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGNvbm5lY3RlZDogXCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgZ2V0Q3Jvd2RGdW5kaW5nQ29udHJhY3QoYWNjb3VudHNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnQgZm91bmRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZXRoV2FsbGV0KSB7XG4gICAgICBhbGVydChcIk1ldGFNYXNrIHdhbGxldCBpcyByZXF1aXJlZCB0byBjb25uZWN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xuICB9O1xuXG4gIGNvbnN0IGdldENyb3dkRnVuZGluZ0NvbnRyYWN0ID0gYXN5bmMgKGFjY291bnQpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKGFjY291bnQpO1xuICAgIGNvbnNvbGUubG9nKFwiU2lnbmVyOiBcIiwgc2lnbmVyKTsgLy8gRGVidWdnaW5nIGxpbmUgdG8gY2hlY2sgaWYgc2lnbmVyIGlzIHByb3Blcmx5IHNldFxuICAgIGNvbnN0IGNyb3dkRnVuZGluZ0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIGNyb3dkRnVuZGluZ0FCSSxcbiAgICAgIHByb3ZpZGVyXG4gICAgKTtcbiAgICBjb25zdCBjcm93ZEZ1bmRpbmdDb250cmFjdFNpZ25lciA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICBjcm93ZEZ1bmRpbmdBQkksXG4gICAgICBzaWduZXJcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiQ29udHJhY3Qgd2l0aCBwcm92aWRlcjogXCIsIGNyb3dkRnVuZGluZ0NvbnRyYWN0KTsgLy8gRGVidWdnaW5nIGxpbmUgdG8gY2hlY2sgY29udHJhY3QgaW5zdGFuY2VcbiAgICBjb25zb2xlLmxvZyhcIkNvbnRyYWN0IHdpdGggc2lnbmVyOiBcIiwgY3Jvd2RGdW5kaW5nQ29udHJhY3RTaWduZXIpOyAvLyBEZWJ1Z2dpbmcgbGluZSB0byBjaGVjayBjb250cmFjdCBpbnN0YW5jZVxuICAgIHNldENyb3dkRnVuZGluZyhjcm93ZEZ1bmRpbmdDb250cmFjdCk7XG4gICAgc2V0Q3Jvd2RGdW5kaW5nU2lnbmVyKGNyb3dkRnVuZGluZ0NvbnRyYWN0U2lnbmVyKTtcbiAgfTtcblxuICBjb25zdCBjb250cmlidXRlVG9GdW5kID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjcm93ZEZ1bmRpbmdTaWduZXIgJiYgYW1vdW50RW50ZXJlZCA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZhbHVlSW5XZWkgPSBldGhlcnMucGFyc2VVbml0cyhhbW91bnRFbnRlcmVkLnRvU3RyaW5nKCksIFwid2VpXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBhcnNlZCBWYWx1ZSBpbiBXZWk6IFwiLCB2YWx1ZUluV2VpKTsgLy8gRGVidWdnaW5nIGxpbmVcblxuICAgICAgICBsZXQgdHggPSBhd2FpdCBjcm93ZEZ1bmRpbmdTaWduZXIuY29udHJpYnV0ZVRvRnVuZCh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlSW5XZWksXG4gICAgICAgICAgZ2FzTGltaXQ6IGV0aGVycy50b0JlSGV4KDMwMDAwMCksIC8vIEFkanVzdCB0aGUgZ2FzIGxpbWl0IGFzIG5lY2Vzc2FyeVxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB0eC53YWl0KCk7IC8vIEVuc3VyZSB0aGUgdHJhbnNhY3Rpb24gaXMgbWluZWRcbiAgICAgICAgZ2V0QmFsYW5jZSgpOyAvLyBVcGRhdGUgYmFsYW5jZSBhZnRlciBjb250cmlidXRpb25cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb250cmlidXRpb24gZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiY3Jvd2RGdW5kaW5nU2lnbmVyIGlzIG5vdCBzZXQgb3IgYW1vdW50RW50ZXJlZCBpcyBub3QgdmFsaWRcIlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoY3Jvd2RGdW5kaW5nKSB7XG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgY3Jvd2RGdW5kaW5nLmdldEFtb3VudFJhaXNlZCgpO1xuICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNyb3dkRnVuZGluZykge1xuICAgICAgY29uc3QgTkFNRSA9IGF3YWl0IGNyb3dkRnVuZGluZ1NpZ25lci5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgc2V0RnVuZE5hbWUoTkFNRSk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlIGZyb20gdHggOiBcIik7XG4gICAgICBjb25zb2xlLmxvZyhOQU1FKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VMb2FkID0gKCkgPT4ge1xuICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0V2FsbGV0KCk7XG4gICAgc2V0TG9hZGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3Jvd2RGdW5kaW5nKSB7XG4gICAgICBnZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgZ2V0QmFsYW5jZSgpO1xuICAgIH1cbiAgfSwgW2Nyb3dkRnVuZGluZ10pO1xuXG4gIGNvbnN0IGluaXRVc2VyID0gKCkgPT4ge1xuICAgIGlmICghZXRoV2FsbGV0KSB7XG4gICAgICByZXR1cm4gPHA+UGxlYXNlIGluc3RhbGwgTWV0YU1hc2sgdG8gdXNlIHRoaXMgREFwcC48L3A+O1xuICAgIH1cblxuICAgIGlmICghYWNjb3VudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTIwMCBib3JkZXItMiBib3JkZXItYmxhY2sgcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgID5cbiAgICAgICAgICBDb25uZWN0IE1ldGFNYXNrXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsIGdhcC0zXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtNXhsXCI+XG4gICAgICAgICAgUHJvamVjdCBOYW1lOiB7ZnVuZE5hbWUgfHwgXCJMb2FkaW5nLi4uXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCAgdGV4dC0yeGxcIj5cbiAgICAgICAgICBBbW91bnQgUmFpc2VkIHRpbGwgTm93OntcIiBcIn1cbiAgICAgICAgICB7YmFsYW5jZSAhPT0gdW5kZWZpbmVkID8gYCR7YmFsYW5jZX0gV0VJYCA6IFwiTG9hZGluZy4uLlwifVxuICAgICAgICA8L3A+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGFtb3VudCB0byBkb25hdGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCBteS01IHRleHQteGwgYmctWyMwODA4M2JdIHJvdW5kZWQtZnVsbCBweC00IHB5LTMgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTQwMCB0ZXh0LWdyYXktMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1bIzBhMGE4OV0gZm9jdXM6Ym9yZGVyLXdoaXRlIGZvY3VzOmJvcmRlci1bM3B4XVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnRFbnRlcmVkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2NvbnRyaWJ1dGVUb0Z1bmR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwICB0ZXh0LXdoaXRlICBiZy1bIzBhMGE4OV0gcm91bmRlZC1mdWxsIHB4LTQgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgRG9uYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiBiZy1pbmRpZ28tOTUwXCI+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXt0dW5lVHVubmVsRGFzaGJvYXJkfSAvLyBSZXBsYWNlIHdpdGggdGhlIHBhdGggdG8geW91ciBpbWFnZVxuICAgICAgICBhbHQ9XCJCYWNrZ3JvdW5kXCJcbiAgICAgICAgd2lkdGg9XCIxMDAwXCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwMFwiXG4gICAgICAgIG9uTG9hZD17aGFuZGxlSW1hZ2VMb2FkfVxuICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTEwMDAgZWFzZS1pbi1vdXQgJHtcbiAgICAgICAgICBpbWFnZUxvYWRlZCA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktMTBcIlxuICAgICAgICB9YH1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS03MCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dCAke1xuICAgICAgICAgIGltYWdlTG9hZGVkID8gXCJvcGFjaXR5LTEwMFwiIDogXCJvcGFjaXR5LTBcIlxuICAgICAgICB9YH1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTEwMDAgZWFzZS1pbi1vdXQgJHtcbiAgICAgICAgICBsb2FkZWQgPyBcIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTBcIiA6IFwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTEwXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wICB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dCAke1xuICAgICAgICAgICAgaW1hZ2VMb2FkZWQgPyBcIm9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7aW5pdFVzZXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImNyb3dkRnVuZGluZ0FiaSIsInR1bmVUdW5uZWxEYXNoYm9hcmQiLCJJbWFnZSIsIkFwcCIsImV0aFdhbGxldCIsInNldEV0aFdhbGxldCIsInVuZGVmaW5lZCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiY3Jvd2RGdW5kaW5nIiwic2V0Q3Jvd2RGdW5kaW5nIiwiY3Jvd2RGdW5kaW5nU2lnbmVyIiwic2V0Q3Jvd2RGdW5kaW5nU2lnbmVyIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJhbW91bnRFbnRlcmVkIiwic2V0QW1vdW50RW50ZXJlZCIsImZ1bmROYW1lIiwic2V0RnVuZE5hbWUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwidXNlckNvbnRyaWJ1dGlvbiIsInNldFVzZXJDb250cmlidXRpb24iLCJjcmVhdG9yIiwic2V0Q3JlYXRvciIsImZ1bmRpbmdMaW1pdCIsInNldEZ1bmRpbmdMaW1pdCIsIm5hbiIsImNvbnRyYWN0QWRkcmVzcyIsImNyb3dkRnVuZGluZ0FCSSIsImFiaSIsImdldFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGFuZGxlQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJnZXRDcm93ZEZ1bmRpbmdDb250cmFjdCIsImNvbm5lY3RBY2NvdW50IiwiYWxlcnQiLCJwcm92aWRlciIsIkJyb3dzZXJQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNyb3dkRnVuZGluZ0NvbnRyYWN0IiwiQ29udHJhY3QiLCJjcm93ZEZ1bmRpbmdDb250cmFjdFNpZ25lciIsImNvbnRyaWJ1dGVUb0Z1bmQiLCJ2YWx1ZUluV2VpIiwicGFyc2VVbml0cyIsInRvU3RyaW5nIiwidHgiLCJ2YWx1ZSIsImdhc0xpbWl0IiwidG9CZUhleCIsIndhaXQiLCJnZXRCYWxhbmNlIiwiZXJyb3IiLCJnZXRBbW91bnRSYWlzZWQiLCJnZXRQcm9qZWN0TmFtZSIsIk5BTUUiLCJoYW5kbGVJbWFnZUxvYWQiLCJpbml0VXNlciIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib25Mb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});