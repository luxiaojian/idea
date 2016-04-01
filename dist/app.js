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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tag = __webpack_require__(1);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  tag: _tag2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/luhuijian/Desktop/code/idea/src/components/tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="form-control tag" @click="focus">
	//     <span class="label label-info" v-for="label in tags" track-by="$index">
	//       {{label}}<span class="glyphicon glyphicon-remove" @click="del($index)"></span>
	//     </span>
	//     <input type="text" size="{{inputSize}}" v-model="tag" placeholder="输入(空格结束)"
	//     @keydown.enter="add" @blur="blur" @keydown.delete="remove" v-el:input>
	//   </div>
	// </template>
	//
	// <style scoped>
	//   .tag {
	//     min-height: 100px;
	//     height: auto;
	//     cursor: text;
	//
	//     span.label {
	//       margin-top: 6px;
	//       margin-left: 4px;
	//       text-align: center;
	//       white-space: nowrap;
	//       display: inline-block;
	//
	//       span {
	//         margin-left: inherit;
	//         &:hover {
	//           color: #000;
	//         }
	//       }
	//     }
	//
	//     input {
	//       border: none;
	//       box-shadow: none;
	//       outline: none;
	//       background-color: transparent;
	//       padding: 0 6px;
	//       margin: 0;
	//       width: auto;
	//     }
	//   }
	// </style>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Array,
	      required: true,
	      default: []
	    }
	  },

	  data: function data() {
	    return {
	      tag: '',
	      tags: []
	    };
	  },


	  computed: {
	    inputSize: function inputSize() {
	      if (this.tag.length === 0) return 12;
	      return this.tag.length;
	    }
	  },

	  methods: {
	    add: function add() {
	      if (this.tag) {
	        this.tags.push(this.tag);
	        this.tag = '';
	      }
	    },
	    blur: function blur() {
	      this.value = this.tags;
	    },
	    del: function del(index) {
	      this.tags.splice(index, 1);
	    },
	    remove: function remove() {
	      this.tags.pop();
	    },
	    focus: function focus() {
	      this.$els.input.focus();
	    }
	  },

	  ready: function ready() {
	    if (this.value && !!this.value.length) this.tags = [].concat(this.value);
	  }
	};
	// </script>

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"form-control tag\" @click=\"focus\" _v-50d64e7d=\"\">\n  <span class=\"label label-info\" v-for=\"label in tags\" track-by=\"$index\" _v-50d64e7d=\"\">\n    {{label}}<span class=\"glyphicon glyphicon-remove\" @click=\"del($index)\" _v-50d64e7d=\"\"></span>\n  </span>\n  <input type=\"text\" size=\"{{inputSize}}\" v-model=\"tag\" placeholder=\"输入(空格结束)\" @keydown.enter=\"add\" @blur=\"blur\" @keydown.delete=\"remove\" v-el:input=\"\" _v-50d64e7d=\"\">\n</div>\n";

/***/ }
/******/ ]);