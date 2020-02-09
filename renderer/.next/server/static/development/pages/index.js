module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", event => {
      this.setState({
        isShow: !this.state.isShow
      }); // event.preventDefault()
      // fetch('/api/runapp').then(res => res.json())
      // .then(json => {
      //   console.log(json);
      // })
    });

    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseHover2 = this.handleMouseHover2.bind(this);
    this.state = {
      isHovering: false,
      isHovering2: false,
      isShow: false
    };
  } // handleSubmit = event => {
  //   event.preventDefault()
  //   global.ipcRenderer.send('message', this.state.input)
  //   this.setState({ message: null })
  // }


  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  handleMouseHover2() {
    this.setState(this.toggleHoverState2);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  toggleHoverState2(state) {
    return {
      isHovering2: !state.isHovering2
    };
  }

  render() {
    return __jsx("div", {
      style: {
        padding: '1px',
        backgroundImage: 'url(/bg.jpg)'
      },
      className: "jsx-1458162443" + " " + "test"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
      className: "jsx-1458162443"
    }, "My apps"), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      className: "jsx-1458162443"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
      className: "jsx-1458162443"
    })), __jsx("h1", {
      className: "jsx-1458162443"
    }, "Welcome to My apps"), __jsx("div", {
      className: "jsx-1458162443" + " " + "container app-but"
    }, __jsx("div", {
      className: "jsx-1458162443" + " " + "row"
    }, __jsx("div", {
      className: "jsx-1458162443" + " " + "col-sm"
    }, __jsx("button", {
      type: "button",
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseHover,
      onMouseLeave: this.handleMouseHover,
      className: "jsx-1458162443" + " " + "btn btn-primary"
    }, "Run the app")), __jsx("div", {
      className: "jsx-1458162443" + " " + "col-sm"
    }, __jsx("button", {
      type: "button",
      onMouseEnter: this.handleMouseHover2,
      onMouseLeave: this.handleMouseHover2,
      className: "jsx-1458162443" + " " + "btn btn-primary"
    }, "Get help")))), !this.state.isShow && this.state.isHovering && __jsx("div", {
      className: "jsx-1458162443" + " " + "showAlter"
    }, "Hovering right meow! \uD83D\uDC31"), !this.state.isShow && this.state.isHovering2 && __jsx("div", {
      className: "jsx-1458162443" + " " + "showAlter"
    }, "Hovering222 right meow! \uD83D\uDC31"), this.state.isShow && __jsx("div", {
      className: "jsx-1458162443" + " " + "showAlter"
    }, __jsx("button", {
      type: "button",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/post/abc'),
      className: "jsx-1458162443" + " " + "btn btn-default"
    }, "Get help"), __jsx("br", {
      className: "jsx-1458162443"
    }), __jsx("br", {
      className: "jsx-1458162443"
    }), __jsx("br", {
      className: "jsx-1458162443"
    }), __jsx("button", {
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/post'),
      type: "button",
      className: "jsx-1458162443" + " " + "btn btn-default"
    }, "Get help"), __jsx("br", {
      className: "jsx-1458162443"
    }), __jsx("br", {
      className: "jsx-1458162443"
    }), __jsx("br", {
      className: "jsx-1458162443"
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1458162443"
    }, "h1.jsx-1458162443{color:white;margin-top:50px;font-size:50px;text-align:center;}.test.jsx-1458162443{width:100vw;height:100vh;background-repeat:no-repeat;background-size:cover;}.app-but.jsx-1458162443{margin-top:50px;text-align:center;}.showAlter.jsx-1458162443{margin-top:50px;padding:100px;color:white;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaXBlbmR1L1Byb2plY3RzL2pzY2xhc3MvbmV4dGVlL3JlbmRlcmVyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ib0IsQUFHeUIsQUFNQSxBQU1HLEFBS0EsWUFoQkMsQUFNSCxJQU1JLEFBS0osU0FWZSxHQU5iLEVBaUJKLElBSmIsUUFLaUIsQ0FqQkUsVUFNSyxJQVl4QixJQWpCQSxjQU1BIiwiZmlsZSI6Ii9Vc2Vycy9kaXBlbmR1L1Byb2plY3RzL2pzY2xhc3MvbmV4dGVlL3JlbmRlcmVyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VIb3ZlciA9IHRoaXMuaGFuZGxlTW91c2VIb3Zlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VIb3ZlcjIgPSB0aGlzLmhhbmRsZU1vdXNlSG92ZXIyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzSG92ZXJpbmc6IGZhbHNlLFxuICAgICAgaXNIb3ZlcmluZzI6IGZhbHNlLFxuICAgICAgaXNTaG93OiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvLyBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAvLyAgIGdsb2JhbC5pcGNSZW5kZXJlci5zZW5kKCdtZXNzYWdlJywgdGhpcy5zdGF0ZS5pbnB1dClcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KVxuICAvLyB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1Nob3c6ICF0aGlzLnN0YXRlLmlzU2hvd1xuICAgIH0pO1xuXG5cbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gZmV0Y2goJy9hcGkvcnVuYXBwJykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAvLyAudGhlbihqc29uID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgIC8vIH0pXG4gIH1cblxuICBoYW5kbGVNb3VzZUhvdmVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy50b2dnbGVIb3ZlclN0YXRlKTtcbiAgfVxuICBoYW5kbGVNb3VzZUhvdmVyMigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMudG9nZ2xlSG92ZXJTdGF0ZTIpO1xuICB9XG4gIHRvZ2dsZUhvdmVyU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNIb3ZlcmluZzogIXN0YXRlLmlzSG92ZXJpbmcsXG4gICAgfTtcbiAgfVxuICB0b2dnbGVIb3ZlclN0YXRlMihzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0hvdmVyaW5nMjogIXN0YXRlLmlzSG92ZXJpbmcyLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcxcHgnLCBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2JnLmpwZyknfX0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5NeSBhcHBzPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1hbHBoYS42L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gTXkgYXBwczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFwcC1idXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUhvdmVyfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VIb3Zlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UnVuIHRoZSBhcHA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUhvdmVyMn1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlSG92ZXIyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5HZXQgaGVscDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgIXRoaXMuc3RhdGUuaXNTaG93ICYmIHRoaXMuc3RhdGUuaXNIb3ZlcmluZyAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0FsdGVyXCI+XG4gICAgICAgICAgICBIb3ZlcmluZyByaWdodCBtZW93ISDwn5CxXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICF0aGlzLnN0YXRlLmlzU2hvdyAmJiB0aGlzLnN0YXRlLmlzSG92ZXJpbmcyICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93QWx0ZXJcIj5cbiAgICAgICAgICAgIEhvdmVyaW5nMjIyIHJpZ2h0IG1lb3chIPCfkLFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5pc1Nob3cgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dBbHRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcG9zdC9hYmMnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+R2V0IGhlbHA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wb3N0Jyl9IFxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+R2V0IGhlbHA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7Lyoge3RoaXMuc3RhdGUubWVzc2FnZSAmJiA8cD57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvcD59XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q2xpY2sgbWU8L2J1dHRvbj4gKi99XG5cbiAgICAgICAgey8qIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2Zvcm0+ICovfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXN0e1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcHAtYnV0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLnNob3dBbHRlcntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6MTAwcHg7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/dipendu/Projects/jsclass/nextee/renderer/pages/index.js */"));
  }

});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dipendu/Projects/jsclass/nextee/renderer/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map