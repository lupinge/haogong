/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	var util = __webpack_require__(5);
	//const Vue = require('vue');
	//import VueRouter from 'vue-router';
	Vue.use(VueRouter);

	var navBar = Vue.component('nav-bar', __webpack_require__(6));
	var home = Vue.component('home', __webpack_require__(11));
	var init = Vue.component('init', __webpack_require__(16));
	var login = Vue.component('login', __webpack_require__(21));
	var register = Vue.component('register', __webpack_require__(30));
	var forget = Vue.component('forget', __webpack_require__(36));
	var addInformation = Vue.component('add-information', __webpack_require__(42));
	var addExperience = Vue.component('add-experience', __webpack_require__(47));

	var routes = [{
	    path: '/',
	    redirect: {
	        name: 'Init'
	    }
	}, {
	    name: 'Home',
	    path: '/home',
	    component: home
	}, {
	    name: 'Init',
	    path: '/init',
	    component: init
	}, {
	    name: 'Login',
	    path: '/login',
	    component: login
	}, {
	    name: 'Register',
	    path: '/register',
	    component: register
	}, {
	    name: 'Forget',
	    path: '/forget',
	    component: forget
	}, {
	    name: 'AddInformation',
	    path: '/addInformation',
	    component: addInformation
	}, {
	    name: 'AddExperience',
	    path: '/addExperience',
	    component: addExperience
	}];

	var router = new VueRouter({
	    routes: routes
	});

	router.afterEach(function (router) {
	    //document.title = router.name;
	    $('html, body').animate({ scrollTop: 0 }, 10);
	    window.console.log(router);

	    $('html').removeClass().addClass('page-' + router.name.toLowerCase());
	    if (app) {
	        app.onloadNavConfig(router.path);
	    }
	});

	var app = new Vue({
	    el: '#app',
	    data: {
	        navBarDisplay: true,
	        navBarConfig: {
	            title: '好工',
	            menuBool: false,
	            returnBool: true,
	            skipBool: false
	        }
	    },
	    methods: {
	        initPage: function initPage() {
	            this.onloadNavConfig(window.location.href);
	        },
	        updateNavConfig: function updateNavConfig(tit, mb, rb, sb, db) {
	            this.navBarConfig = {
	                title: tit,
	                menuBool: mb,
	                returnBool: rb,
	                skipBool: sb
	            };
	            this.navBarDisplay = db;
	        },
	        onloadNavConfig: function onloadNavConfig(routerPath) {
	            if (routerPath.indexOf('/init') > -1) {
	                this.navBarDisplay = false;
	                return;
	            }
	            if (routerPath.indexOf('/login') > -1) {
	                this.updateNavConfig('登录', false, true, false, true);
	                return;
	            }
	            if (routerPath.indexOf('/register') > -1) {
	                this.updateNavConfig('注册', false, true, false, true);
	                return;
	            }
	            if (routerPath.indexOf('/forget') > -1) {
	                this.updateNavConfig('忘记密码', false, true, false, true);
	                return;
	            }
	            if (routerPath.indexOf('/home') > -1) {
	                this.updateNavConfig('好工', true, false, false, true);
	                return;
	            }
	            if (routerPath.indexOf('/addInformation') > -1) {
	                this.updateNavConfig('完善信息', false, true, false, true);
	                return;
	            }
	            if (routerPath.indexOf('/addExperience') > -1) {
	                this.updateNavConfig('添加项目经历', false, true, true, true);
	                return;
	            }
	        }
	    },
	    created: function created() {
	        document.body.addEventListener('touchstart', function () {});
	        this.initPage();
	    },
	    router: router
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';

	//说明：util.js是封装的公共js库

	// 初始化rem
	function setRem() {
	    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	}
	setRem();
	window.addEventListener('resize', setRem);

	/*
	 @name: checkUrl
	 @author: luping
	 @desc: 检测当前url中有无指定的字符串
	 @param: str (要检测的字符串)
	 @return: bool
	*/
	exports.checkUrl = function (str) {
	    var url = window.location.href.trim();
	    if (url.indexOf(str.trim()) > -1) {
	        return true;
	    } else {
	        return false;
	    }
	};

	/*
	 @name:
	 @author: luping
	 @desc:
	 @param:
	 @return:
	*/

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(10)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/luping/Desktop/lupinge/haogong-h5/webpack/components/nav-bar/nav-bar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1cbc60c4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1cbc60c4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] nav-bar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	__webpack_require__(8);
	module.exports = {
		props: ['nav-bar-config'],
		data: function () {
			return {};
		},
		methods: {
			initPage: function () {}
		},
		created: function () {
			this.initPage();
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "nav-bar"
	  }, [_c('div', {
	    staticClass: "bar-left left"
	  }, [_c('a', {
	    staticClass: "return",
	    class: {
	      active: _vm.navBarConfig.returnBool
	    },
	    attrs: {
	      "onClick": "javascript :history.back(-1);"
	    }
	  }, [_c('i'), _vm._v("\n\t\t\t返回\n\t\t")]), _vm._v(" "), _c('a', {
	    staticClass: "menu",
	    class: {
	      active: _vm.navBarConfig.menuBool
	    }
	  }, [_vm._m(0)])]), _vm._v(" "), _c('div', {
	    staticClass: "title left"
	  }, [_vm._v(_vm._s(_vm.navBarConfig.title))]), _vm._v(" "), _c('div', {
	    staticClass: "bar-right right"
	  }, [_c('a', {
	    staticClass: "skip",
	    class: {
	      active: _vm.navBarConfig.skipBool
	    },
	    attrs: {
	      "href": "javascript:;"
	    }
	  }, [_vm._v("跳过")])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', [_c('li'), _c('li'), _c('li')])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1cbc60c4", module.exports)
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/luping/Desktop/lupinge/haogong-h5/webpack/components/home/home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-69cc9cd0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-69cc9cd0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] home.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	__webpack_require__(13);
	module.exports = {
		data: function () {
			return {
				isLogin: true,
				user: {
					nickName: '阿瓦隆'
				},
				homeNav: [{
					title: '考勤',
					msgNum: 0
				}, {
					title: '任务',
					msgNum: 2
				}, {
					title: '项目进度',
					msgNum: 0
				}, {
					title: '我的排班',
					msgNum: 0
				}, {
					title: '企业招工',
					msgNum: 0
				}, {
					title: '好工学院',
					msgNum: 0
				}, {
					title: '绩效档案',
					msgNum: 0
				}, {
					title: '工资福利',
					msgNum: 0
				}]
			};
		},
		methods: {
			initPage: function () {
				if (!this.isLogin) {
					window.location.href = '#/init';
				}
			}
		},
		created: function () {
			this.initPage();
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "home"
	  }, [_c('div', {
	    staticClass: "user-msg"
	  }, [_c('img', {
	    staticClass: "user-avatar",
	    attrs: {
	      "src": './img/avatar.jpg'
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "welcome-slogan"
	  }, [_vm._v("欢迎你，"), _c('span', [_vm._v(_vm._s(_vm.user.nickName))])])]), _vm._v(" "), _c('div', {
	    staticClass: "home-content"
	  }, [_vm._m(0), _vm._v(" "), _c('ul', {
	    staticClass: "home-nav"
	  }, _vm._l((_vm.homeNav), function(item) {
	    return _c('li', [_c('router-link', {
	      attrs: {
	        "to": {
	          name: 'Login'
	        }
	      }
	    }, [_c('div', {
	      staticClass: "home-icon"
	    }, [_c('i', {})]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))])])], 1)
	  }))])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "location"
	  }, [_vm._v("\r\n\t\t\t十里河瑞安大厦8042\r\n\t\t\t"), _c('i')])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-69cc9cd0", module.exports)
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/luping/Desktop/lupinge/haogong-h5/webpack/components/user/init/init.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0aa66b0c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0aa66b0c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] init.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	__webpack_require__(18);
	module.exports = {
		data: function () {
			return {};
		},
		methods: {
			initPage: function () {}
		},
		created: function () {
			this.initPage();
		}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "init"
	  }, [_c('div', {
	    staticClass: "slider-box"
	  }, [_c('router-link', {
	    attrs: {
	      "to": {
	        name: 'Home'
	      }
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": '../components/user/init/img/slider1.jpg'
	    }
	  })])], 1), _vm._v(" "), _c('router-link', {
	    staticClass: "init-btn init-login",
	    attrs: {
	      "to": {
	        name: 'Login'
	      }
	    }
	  }, [_vm._v("登录")]), _vm._v(" "), _c('router-link', {
	    staticClass: "init-btn init-register",
	    attrs: {
	      "to": {
	        name: 'Register'
	      }
	    }
	  }, [_vm._v("注册")]), _vm._v(" "), _vm._m(0)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', {
	    staticClass: "compay-try"
	  }, [_vm._v("企业试用："), _c('a', {
	    attrs: {
	      "href": "tel:4008101199"
	    }
	  }, [_vm._v("4008101199")])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0aa66b0c", module.exports)
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(29)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/luping/Desktop/lupinge/haogong-h5/webpack/components/user/login/login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-073ab64e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-073ab64e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] login.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	__webpack_require__(23);
	module.exports = {
		data: function () {
			return {};
		},
		methods: {
			initPage: function () {}
		},
		created: function () {
			this.initPage();
		}
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "login"
	  }, [_vm._m(0), _vm._v(" "), _c('a', {
	    staticClass: "btn-login",
	    attrs: {
	      "href": "javascript:;"
	    }
	  }, [_vm._v("登录")]), _vm._v(" "), _c('div', {
	    staticClass: "forget-register"
	  }, [_c('router-link', {
	    staticClass: "login-forget",
	    attrs: {
	      "to": {
	        name: 'Forget'
	      }
	    }
	  }, [_vm._v("忘记密码")]), _vm._v(" "), _c('router-link', {
	    staticClass: "login-register",
	    attrs: {
	      "to": {
	        name: 'Register'
	      }
	    }
	  }, [_vm._v("手机号注册")])], 1), _vm._v(" "), _vm._m(1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "input-box top-thin-line-t"
	  }, [_c('div', {
	    staticClass: "tel-box bottom-thin-line-t"
	  }, [_c('i'), _vm._v("\r\n\t\t\t手机号\r\n\t\t\t"), _c('input', {
	    staticClass: "input-tel",
	    attrs: {
	      "type": "tel",
	      "placeholder": "请输入手机号",
	      "maxlength": "11"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "password-box"
	  }, [_c('i'), _vm._v("\r\n\t\t\t密   码\r\n\t\t\t"), _c('input', {
	    staticClass: "input-password",
	    attrs: {
	      "type": "password",
	      "placeholder": "请输入密码"
	    }
	  })])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "social-account"
	  }, [_c('div', {
	    staticClass: "social-acc-title"
	  }, [_c('div', {
	    staticClass: "social-line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "social-acc-title-text"
	  }, [_vm._v("社交账号快速登录")])]), _vm._v(" "), _c('ul', {
	    staticClass: "social-choose"
	  }, [_c('li', [_c('a', {
	    attrs: {
	      "href": "javascript:;"
	    }
	  }, [_c('i'), _vm._v(" "), _c('p', [_vm._v("微信登录")])])]), _vm._v(" "), _c('li', [_c('a', {
	    attrs: {
	      "href": "javascript:;"
	    }
	  }, [_c('i'), _vm._v(" "), _c('p', [_vm._v("QQ登录")])])])])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-073ab64e", module.exports)
	  }
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(31)

	/* template */
	var __vue_template__ = __webpack_require__(35)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/luping/Desktop/lupinge/haogong-h5/webpack/components/user/register/register.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f546b54c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f546b54c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] register.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	__webpack_require__(32);
	module.exports = {
		data: function () {
			return {};
		},
		methods: {
			initPage: function () {}
		},
		created: function () {
			this.initPage();
		}
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "register"
	  }, [_c('div', {
	    staticClass: "input-box top-thin-line-t"
	  }, [_c('div', {
	    staticClass: "tel-box bottom-thin-line-t"
	  }, [_c('i'), _vm._v("\r\n\t\t\t手机号\r\n\t\t\t"), _c('input', {
	    staticClass: "input-tel",
	    attrs: {
	      "type": "tel",
	      "placeholder": "请输入手机号",
	      "maxlength": "11"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "get-code "
	  }, [_vm._v("\r\n\t\t\t\t获取验证码\r\n\t\t\t")])]), _vm._v(" "), _c('div', {
	    staticClass: "code-box bottom-thin-line-t"
	  }, [_c('i'), _vm._v("\r\n\t\t\t验证码\r\n\t\t\t"), _c('input', {
	    staticClass: "input-code",
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入验证码"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "password-box"
	  }, [_c('i'), _vm._v("\r\n\t\t\t密   码\r\n\t\t\t"), _c('input', {
	    staticClass: "input-password",
	    attrs: {
	      "type": "password",
	      "placeholder": "请输入密码"
	    }
	  })])]), _vm._v(" "), _c('a', {
	    staticClass: "btn-login",
	    attrs: {
	      "href": "javascript:;"
	    }
	  }, [_vm._v("完成注册")]), _vm._v(" "), _c('div', {
	    staticClass: "social-account"
	  }, [_c('div', {
	    staticClass: "social-acc-title"
	  }, [_c('div', {
	    staticClass: "social-line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "social-acc-title-text"
	  }, [_vm._v("社交账号快速登录")])]), _vm._v(" "), _c('ul', {
	    staticClass: "social-choose"
	  }, [_c('li', [_c('a', {
	    attrs: {
	      "href": "javascript:;"
	    }
	  }, [_c('i'), _vm._v(" "), _c('p', [_vm._v("微信登录")])])]), _vm._v(" "), _c('li', [_c('a', {
	    attrs: {
	      "href": "javascript:;"
	    }
	  }, [_c('i'), _vm._v(" "), _c('p', [_vm._v("QQ登录")])])])])])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f546b54c", module.exports)
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(37)

	/* template */
	var __vue_template__ = __webpack_require__(41)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/luping/Desktop/lupinge/haogong-h5/webpack/components/user/forget/forget.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2bb0ba9a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2bb0ba9a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] forget.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	__webpack_require__(38);
	module.exports = {
		data: function () {
			return {};
		},
		methods: {
			initPage: function () {}
		},
		created: function () {
			this.initPage();
		}
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "forget"
	  }, [_c('div', {
	    staticClass: "input-box top-thin-line-t"
	  }, [_c('div', {
	    staticClass: "tel-box bottom-thin-line-t"
	  }, [_c('i'), _vm._v("\r\n\t\t\t手机号\r\n\t\t\t"), _c('input', {
	    staticClass: "input-tel",
	    attrs: {
	      "type": "tel",
	      "placeholder": "请输入手机号",
	      "maxlength": "11"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "get-code "
	  }, [_vm._v("\r\n\t\t\t\t获取验证码\r\n\t\t\t")])]), _vm._v(" "), _c('div', {
	    staticClass: "code-box bottom-thin-line-t"
	  }, [_c('i'), _vm._v("\r\n\t\t\t验证码\r\n\t\t\t"), _c('input', {
	    staticClass: "input-code",
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入验证码"
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "password-box"
	  }, [_c('i'), _vm._v("\r\n\t\t\t密   码\r\n\t\t\t"), _c('input', {
	    staticClass: "input-password",
	    attrs: {
	      "type": "password",
	      "placeholder": "请输入密码"
	    }
	  })])]), _vm._v(" "), _c('a', {
	    staticClass: "btn-login",
	    attrs: {
	      "href": "javascript:;"
	    }
	  }, [_vm._v("重置密码")])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2bb0ba9a", module.exports)
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(43)

	/* template */
	var __vue_template__ = __webpack_require__(46)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/luping/Desktop/lupinge/haogong-h5/webpack/components/user/add-information/add-information.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-034f2308", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-034f2308", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] add-information.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//

	__webpack_require__(44);
	module.exports = {
		data: function () {
			return {};
		},
		methods: {
			initPage: function () {}
		},
		created: function () {
			this.initPage();
		}
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "add-information"
	  }, [_vm._v("\n\tadd-information\n")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-034f2308", module.exports)
	  }
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(51)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/luping/Desktop/lupinge/haogong-h5/webpack/components/user/add-experience/add-experience.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6bb30b7a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6bb30b7a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] add-experience.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//

	__webpack_require__(49);
	module.exports = {
		data: function () {
			return {};
		},
		methods: {
			initPage: function () {}
		},
		created: function () {
			this.initPage();
		}
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 50 */,
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "add-experience"
	  }, [_vm._v("\n\tadd-experience\n")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6bb30b7a", module.exports)
	  }
	}

/***/ }
/******/ ]);