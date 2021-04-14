/*!
 * @license :webstorer - V0.6.1 - 13/04/2021
 * https://github.com/wangzl1163/webstorer
 * Copyright (c) 2021 @wangzl1163; Licensed MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("webStorer", [], factory);
	else if(typeof exports === 'object')
		exports["webStorer"] = factory();
	else
		root["webStorer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*!
 * @license :sqlweb - V1.5.0 - 01/11/2020
 * https://github.com/ujjwalguptaofficial/sqlweb
 * Copyright (c) 2020 @Ujjwal Gupta; Licensed MIT
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_sql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


// tslint:disable-next-line
/* harmony default export */ __webpack_exports__["default"] = ({
    setup: function (connection, params) {
        connection.$sql = {
            run: function (query) {
                var result = Object(_parse_sql__WEBPACK_IMPORTED_MODULE_0__["parseSql"])(query);
                return connection[result.api](result.data);
            },
            Query: _query__WEBPACK_IMPORTED_MODULE_1__["Query"]
        };
    }
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSql", function() { return parseSql; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var parseSql = function (query) {
    var result;
    if (_util__WEBPACK_IMPORTED_MODULE_0__["Util"].isString(query) === true) {
        result = _util__WEBPACK_IMPORTED_MODULE_0__["Util"].parseSql(query);
    }
    else {
        result = query.query_;
    }
    return result;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony import */ var _build_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _build_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_build_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



var Util = /** @class */ (function () {
    function Util() {
    }
    Util.isString = function (value) {
        return typeof value === 'string';
    };
    Util.parseJson = function (value) {
        var reviver = function (key, val) {
            var dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
            if (typeof val === "string" && dateFormat.test(val)) {
                return new Date(val);
            }
            return val;
        };
        return JSON.parse(value, reviver);
    };
    Util.parseSql = function (query) {
        try {
            query = query.replace(new RegExp('\n', 'g'), '').trim();
            return _build_parser__WEBPACK_IMPORTED_MODULE_0__["parse"](query);
        }
        catch (ex) {
            var err = new _log_helper__WEBPACK_IMPORTED_MODULE_1__["LogHelper"](_enums__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].SynTaxError, ex.message).get();
            throw err;
        }
    };
    return Util;
}());



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { query: peg$parsequery },
      peg$startRuleFunction  = peg$parsequery,

      peg$c0 = function(db, tables) {
      	db.tables=tables
           return {
              api:'initDb',
              data:db
          }
      },
      peg$c1 = ";",
      peg$c2 = peg$literalExpectation(";", false),
      peg$c3 = function(name) {
      	return {
          	name:name
          }
      },
      peg$c4 = "(",
      peg$c5 = peg$literalExpectation("(", false),
      peg$c6 = ")",
      peg$c7 = peg$literalExpectation(")", false),
      peg$c8 = function(table, first, all, ver) {
          all.push(first);
          var columns = {};
          all.forEach(function(column){
              columns = {...columns,...column}
          });
          var versionData = ver==null?null:ver['version'];
          return {
              name: table,
              columns : columns,
              version: versionData
          }
      },
      peg$c9 = ",",
      peg$c10 = peg$literalExpectation(",", false),
      peg$c11 = function(def) {
          return def;
      },
      peg$c12 = function(name, options) {
          var defaultValue = {
              unique:false,
              autoIncrement:false,
              default:null,
              notNull:false,
              dataType:null,
              primaryKey:false,
              multiEntry:false,
              enableSearch:true
          }
          options.forEach(option=>{
              var key = Object.keys(option)[0];
              defaultValue[key] = option[key];
          });
          return {
              [name]: defaultValue
          };
      },
      peg$c13 = function(option) {
      	return option;
      },
      peg$c14 = function() {
          return {
              autoIncrement:true
          }
      },
      peg$c15 = function() {
          return {
              notNull:true
          }
      },
      peg$c16 = function(val) {
          return {
              default:val
          }
      },
      peg$c17 = function(type) {
          return {
              dataType:type.join('').toLowerCase()
          }
      },
      peg$c18 = function() {
          return {
              unique:true
          }
      },
      peg$c19 = function() {
          return {
              primaryKey:true
          }
      },
      peg$c20 = function() {
          return {
              multiEntry:true
          }
      },
      peg$c21 = function() {
          return {
              enableSearch:true
          }
      },
      peg$c22 = function() {
          return {
              enableSearch:false
          }
      },
      peg$c23 = function(val) {
          return {
              version:val
          }
      },
      peg$c24 = function(table, insertValue, options) {
           let option = {};
           options.forEach(val=>{
                  var key = Object.keys(val)[0];
                  switch(key){
                      case 'skipDataCheck':
                          option.skipDataCheck = val[key]; break;
                      case 'return':
                          option.return = val[key]; break;
                      case 'upsert':
                          option.upsert = val[key]; break;
                  }
           });
           return {
              api: 'insert',
              data: {
                  into: table,
                  values: insertValue,
                  ...option
              }
           }
      },
      peg$c25 = "({",
      peg$c26 = peg$literalExpectation("({", false),
      peg$c27 = "})",
      peg$c28 = peg$literalExpectation("})", false),
      peg$c29 = function(first, rest) {
      	var obj = {
          	[first.key]: first.value
          }
          if(rest!=null){
          	rest.forEach(item=>{
              	obj[item.key] = item.value
              })
          }
          return [obj];
      },
      peg$c30 = function(val) {
      	return val;
      },
      peg$c31 = ":",
      peg$c32 = peg$literalExpectation(":", false),
      peg$c33 = function(key, val) {
      	return {
          	key:key,
              value:val
          }
      },
      peg$c34 = "=",
      peg$c35 = peg$literalExpectation("=", false),
      peg$c36 = function(insertValue) {
      	return insertValue;
      },
      peg$c37 = function(option) {
          return {
              [option]:true
          }
      },
      peg$c38 = function() {
          return 'skipDataCheck';
      },
      peg$c39 = function() {
          return 'return';
      },
      peg$c40 = function() {
          return 'upsert';
      },
      peg$c41 = function(table, where) {
        return {
           api:'remove',
           data:{
              from:table,
              where:where,
           }
        }
      },
      peg$c42 = "*",
      peg$c43 = peg$literalExpectation("*", false),
      peg$c44 = function(table, where, options) {
        const option = {};
        options.forEach(val=>{
        	var key = Object.keys(val)[0];
          switch(key){
              case 'distinct':
              	option.distinct = val[key]; break;
               case 'groupBy':
              	option.groupBy = val[key]; break;
          }
        });
        return {
           api:'count',
           data:{
              from:table,
              where:where,
              ...option
           }
        }
      },
      peg$c45 = function(as, aggr, table, join, where, options) {
        const option = {};
        options.forEach(val=>{
        	var key = Object.keys(val)[0];
          switch(key){
          	case 'skip':
               	option.skip= val[key]; break;
              case 'limit':
                  option.limit= val[key]; break;
              case 'distinct':
              	option.distinct = val[key]; break;
              case 'order':
              	option.order = val[key]; break;
               case 'groupBy':
              	option.groupBy = val[key]; break;
          }
        });
        let modifiedWhere ;
        if(where!=null){
          modifiedWhere = [];
          where.forEach(value=>{
            if(value.table){
                var joinWithSameTable = join.find(qry=>qry.with===value.table);
                if(joinWithSameTable!=null){
                  if(Array.isArray(joinWithSameTable.where)){
                    joinWithSameTable.where.push(value.query)
                  }
                  else {
                    joinWithSameTable.where = [value.query];
                  }
                }
            }
            else{
                modifiedWhere.push(value);
            }
          });
          if(modifiedWhere.length===0){
              modifiedWhere = null;
          }
        }
        if(as!=null){
            as.forEach(value=>{
                const joinQry = join.find(qry=> qry.with===value.table);
                if(joinQry!=null){
                      const asVal = {
                          [value.column]: value.alias   
                      }
                      if(joinQry.as ==null){
                          joinQry.as = asVal;
                      }
                      else{
                          joinQry.as = {...asVal, ...joinQry.as}
                      }
                }
            })
        }
        return {
           api:'select',
           data:{
              from:table,
              where:modifiedWhere,
              ...option,
              aggregate : aggr,
              join:join.length===0?null:join
           }
        }
      },
      peg$c46 = function(alias) {
         return alias;
      },
      peg$c47 = function(first, rest) {
        rest.splice(0,0,first);
        return rest;
      },
      peg$c48 = ".",
      peg$c49 = peg$literalExpectation(".", false),
      peg$c50 = function(tableName, columnName, alias) {
       return {
          table: tableName,
          column: columnName,
          alias: alias
       }
      },
      peg$c51 = function(as) {
        return as;
      },
      peg$c52 = function(aggr) {
      	return aggr[0];
      },
      peg$c53 = "[",
      peg$c54 = peg$literalExpectation("[", false),
      peg$c55 = "]",
      peg$c56 = peg$literalExpectation("]", false),
      peg$c57 = function(first, rest) {
      	rest.splice(0,0,first);
          return rest;
      },
      peg$c58 = function(first, rest) {
      	rest.splice(0,0,first);
          return {
          	max : rest
          }
      },
      peg$c59 = function(first, rest) {
      	rest.splice(0,0,first);
          return {
          	min : rest
          }
      },
      peg$c60 = function(first, rest) {
      	rest.splice(0,0,first);
          return {
          	avg : rest
          }
      },
      peg$c61 = function(first, rest) {
      	rest.splice(0,0,first);
          return {
          	count : rest
          }
      },
      peg$c62 = function(first, rest) {
      	rest.splice(0,0,first);
          return {
          	sum : rest
          }
      },
      peg$c63 = function(first, rest) {
      	return {
          	groupBy:[first,...rest]
          } ;
      },
      peg$c64 = function(value, rest) {
          rest.unshift(value);
          return {
            order: rest
          };
      },
      peg$c65 = function(qry) {
      	return qry;
      },
      peg$c66 = function(by, type) {
      	return {
              by:by,
              type: type
          }
      },
      peg$c67 = function(type) {
      	return type;
      },
      peg$c68 = function() {
      	return {
          	distinct: true
          };
      },
      peg$c69 = function(val) {
      	return {
          	skip: val
          };
      },
      peg$c70 = function(val) {
      	return {
          	limit: val
          };
      },
      peg$c71 = function(where) {
      	return where;
      },
      peg$c72 = function(item1, item2) {
      	if(!Array.isArray(item1)){
          	item1=[item1];
          }
          if(item2!=null){
          	var pushInItem1=(item)=>{
               	item1.push(item);
              }
              if(Array.isArray(item1)){
              	item2.forEach(item=>{
                    if(Array.isArray(item)){
                      item.forEach(subItem=>{
                          pushInItem1(subItem);
                      });
                    }
                    else{
                        pushInItem1(item)
                    }
                });
              }
          }
          return item1;
      },
      peg$c73 = function(op, where) {
      	
          if(op==='||'){
          	var obj={};
              if(Array.isArray(where)){
                where.forEach(val=>{
                    obj={...obj,...val}
                });
              }
              else{
              	obj = where;
              }
              return {
              	or:obj
              }
          }
         
          return where;
      },
      peg$c74 = function(fw, jw) {
      	if(jw==null){
          	return fw
          }
          else{
           	jw.splice(0,0,fw);	
              return jw;
          }
      },
      peg$c75 = function(fw, jw) {
      	if(jw==null){
          	return fw;
          }
          else{
          	var query= fw;
              jw.forEach(qry=>{
              	var key = Object.keys(qry)[0];
              	if(key==='or'){
                  	if(query.or==null){
                      	query.or={};
                      }
                      var orKey = Object.keys(qry[key])[0];
                      query.or[orKey]= qry[key][orKey];
                  }
                  else{
                  	query[key]=qry[key];
                  }
              })
              return query;
          }
      },
      peg$c76 = function(op, item) {
      	if(op==='&&'){
              return item;
          }
          else if(item.table){
              item.query = {
                  or: item.query
              }
              return item;
          }
          return {
              or: item
          }
      },
      peg$c77 = function(col, colDot, val) { 
      	if(colDot==null){
            return {
                [col]:val
            }
          }
          return {
                table : col,
                query: {
                	[colDot]:val
                }
          }
      },
      peg$c78 = "!=",
      peg$c79 = peg$literalExpectation("!=", false),
      peg$c80 = ">=",
      peg$c81 = peg$literalExpectation(">=", false),
      peg$c82 = "<=",
      peg$c83 = peg$literalExpectation("<=", false),
      peg$c84 = ">",
      peg$c85 = peg$literalExpectation(">", false),
      peg$c86 = "<",
      peg$c87 = peg$literalExpectation("<", false),
      peg$c88 = function(col, colDot, op, val) { 
      	if(colDot==null){
              return {
                      [col]:{
                          [op]:val
                      }
                  }
          }
          return {
              table : col,
              query:{
                  [colDot]:{
                      [op]:val
                  }
              }
      	}
      },
      peg$c89 = function(col, colDot, low, high) {
      	if(colDot==null){
              return {
                      [col]:{
                          '-':{
                              low : low,
                              high : high
                          }
                      }
              }
          }
          return {
              table : col,
              query:{
                  [colDot]:{
                      '-':{
                          low : low,
                          high : high
                      }
                  }
              }
          }
          
      },
      peg$c90 = function(col, colDot, first, betweens) { 
      	if(colDot==null){
              return {
                  [col]:{
                      in:[first,...betweens]
                  }
              }
          }
          return {
              table:col,
              query:{
                  [colDot]:{
                      in:[first,...betweens]
                  }
              }
      	}
      },
      peg$c91 = function(col, colDot, val) { 
      	if(colDot==null){
              return {
                  [col]:{
                      like:val
                  }
              }
          }
          return {
              table:col,
              query:{
                  [colDot]:{
                      like:val
                  }
              }
      	}
          
      },
      peg$c92 = "'%",
      peg$c93 = peg$literalExpectation("'%", false),
      peg$c94 = "%'",
      peg$c95 = peg$literalExpectation("%'", false),
      peg$c96 = function(val) {
      	return "%"+val+"%";
      },
      peg$c97 = "'",
      peg$c98 = peg$literalExpectation("'", false),
      peg$c99 = function(val) {
        return "%"+ val;
      },
      peg$c100 = function(val) {
      	return val+"%";
      },
      peg$c101 = function(col) {
         return col;
      },
      peg$c102 = function(type, table, onValue1, onValue2) {
        return  {
         with: table,
         on: `${onValue1}=${onValue2}`,
         type: type
        }
      },
      peg$c103 = peg$otherExpectation("on value"),
      peg$c104 = /^[a-zA-Z_.]/,
      peg$c105 = peg$classExpectation([["a", "z"], ["A", "Z"], "_", "."], false, false),
      peg$c106 = function(val) {
      	return val.join("");
      },
      peg$c107 = function(type) {
         return type==null?null : type.join('');
      },
      peg$c108 = function(table, set, where) {
       return {
           api:'update',
           data:{
              in:table,
              set:set,
              where:where
           }
        }
      },
      peg$c109 = function(first, rest) {
          rest.forEach(val=>{
              first = {...first,...val}; 
          });
          return first;
      },
      peg$c110 = function(val) {
          return val;
      },
      peg$c111 = function(name) {
          return {
              api:'openDb',
              data:name
          }
      },
      peg$c112 = function(name, tblInfo) {
      	var result = {
           	api:'isDbExist'
          }
          if(tblInfo==null){
            result.data=name;
          }
          else{
          	result.data={
                  dbName:name,
                  table:tblInfo
              }
          }
          return result;
      },
      peg$c113 = function(table, ver) {
      	return {
                      name:table,
                      version:ver
                      }
      },
      peg$c114 = peg$otherExpectation("table name"),
      peg$c115 = peg$otherExpectation("database name"),
      peg$c116 = peg$otherExpectation("column"),
      peg$c117 = peg$otherExpectation("order type"),
      peg$c118 = "asc",
      peg$c119 = peg$literalExpectation("asc", false),
      peg$c120 = "desc",
      peg$c121 = peg$literalExpectation("desc", false),
      peg$c122 = "&&",
      peg$c123 = peg$literalExpectation("&&", false),
      peg$c124 = "||",
      peg$c125 = peg$literalExpectation("||", false),
      peg$c126 = peg$otherExpectation("column value"),
      peg$c127 = peg$otherExpectation("identifier"),
      peg$c128 = /^[a-zA-Z0-9_]/,
      peg$c129 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_"], false, false),
      peg$c130 = peg$otherExpectation("word"),
      peg$c131 = function(l) {return l.join("");},
      peg$c132 = /^[a-zA-Z0-9]/,
      peg$c133 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"]], false, false),
      peg$c134 = /^[^'%]/,
      peg$c135 = peg$classExpectation(["'", "%"], true, false),
      peg$c136 = peg$otherExpectation("number"),
      peg$c137 = function(d) {return Number(d.join(""))},
      peg$c138 = /^[0-9]/,
      peg$c139 = peg$classExpectation([["0", "9"]], false, false),
      peg$c140 = peg$otherExpectation("Whitespace"),
      peg$c141 = /^[ \t]/,
      peg$c142 = peg$classExpectation([" ", "\t"], false, false),
      peg$c143 = peg$otherExpectation("One or more whitespaces"),
      peg$c144 = function(space) {return null;},
      peg$c145 = /^[aA]/,
      peg$c146 = peg$classExpectation(["a", "A"], false, false),
      peg$c147 = /^[bB]/,
      peg$c148 = peg$classExpectation(["b", "B"], false, false),
      peg$c149 = /^[cC]/,
      peg$c150 = peg$classExpectation(["c", "C"], false, false),
      peg$c151 = /^[dD]/,
      peg$c152 = peg$classExpectation(["d", "D"], false, false),
      peg$c153 = /^[eE]/,
      peg$c154 = peg$classExpectation(["e", "E"], false, false),
      peg$c155 = /^[fF]/,
      peg$c156 = peg$classExpectation(["f", "F"], false, false),
      peg$c157 = /^[gG]/,
      peg$c158 = peg$classExpectation(["g", "G"], false, false),
      peg$c159 = /^[hH]/,
      peg$c160 = peg$classExpectation(["h", "H"], false, false),
      peg$c161 = /^[iI]/,
      peg$c162 = peg$classExpectation(["i", "I"], false, false),
      peg$c163 = /^[jJ]/,
      peg$c164 = peg$classExpectation(["j", "J"], false, false),
      peg$c165 = /^[kK]/,
      peg$c166 = peg$classExpectation(["k", "K"], false, false),
      peg$c167 = /^[lL]/,
      peg$c168 = peg$classExpectation(["l", "L"], false, false),
      peg$c169 = /^[mM]/,
      peg$c170 = peg$classExpectation(["m", "M"], false, false),
      peg$c171 = /^[nN]/,
      peg$c172 = peg$classExpectation(["n", "N"], false, false),
      peg$c173 = /^[oO]/,
      peg$c174 = peg$classExpectation(["o", "O"], false, false),
      peg$c175 = /^[pP]/,
      peg$c176 = peg$classExpectation(["p", "P"], false, false),
      peg$c177 = /^[qQ]/,
      peg$c178 = peg$classExpectation(["q", "Q"], false, false),
      peg$c179 = /^[rR]/,
      peg$c180 = peg$classExpectation(["r", "R"], false, false),
      peg$c181 = /^[sS]/,
      peg$c182 = peg$classExpectation(["s", "S"], false, false),
      peg$c183 = /^[tT]/,
      peg$c184 = peg$classExpectation(["t", "T"], false, false),
      peg$c185 = /^[uU]/,
      peg$c186 = peg$classExpectation(["u", "U"], false, false),
      peg$c187 = /^[vV]/,
      peg$c188 = peg$classExpectation(["v", "V"], false, false),
      peg$c189 = /^[wW]/,
      peg$c190 = peg$classExpectation(["w", "W"], false, false),
      peg$c191 = /^[xX]/,
      peg$c192 = peg$classExpectation(["x", "X"], false, false),
      peg$c193 = /^[yY]/,
      peg$c194 = peg$classExpectation(["y", "Y"], false, false),
      peg$c195 = /^[zZ]/,
      peg$c196 = peg$classExpectation(["z", "Z"], false, false),
      peg$c197 = peg$otherExpectation("min"),
      peg$c198 = peg$otherExpectation("max"),
      peg$c199 = peg$otherExpectation("avg"),
      peg$c200 = peg$otherExpectation("count"),
      peg$c201 = peg$otherExpectation("sum"),
      peg$c202 = peg$otherExpectation("aggregate"),
      peg$c203 = peg$otherExpectation("between"),
      peg$c204 = peg$otherExpectation("in"),
      peg$c205 = peg$otherExpectation("like"),
      peg$c206 = peg$otherExpectation("select"),
      peg$c207 = peg$otherExpectation("distinct"),
      peg$c208 = peg$otherExpectation("order"),
      peg$c209 = peg$otherExpectation("by"),
      peg$c210 = peg$otherExpectation("from"),
      peg$c211 = peg$otherExpectation("group"),
      peg$c212 = peg$otherExpectation("limit"),
      peg$c213 = peg$otherExpectation("skip"),
      peg$c214 = peg$otherExpectation("where"),
      peg$c215 = peg$otherExpectation("insert"),
      peg$c216 = peg$otherExpectation("into"),
      peg$c217 = peg$otherExpectation("return"),
      peg$c218 = peg$otherExpectation("values"),
      peg$c219 = peg$otherExpectation("skipdatacheck"),
      peg$c220 = peg$otherExpectation("update"),
      peg$c221 = peg$otherExpectation("set"),
      peg$c222 = peg$otherExpectation("delete"),
      peg$c223 = peg$otherExpectation("version"),
      peg$c224 = peg$otherExpectation("enablesearch"),
      peg$c225 = peg$otherExpectation("multiEntry"),
      peg$c226 = peg$otherExpectation("primarykey"),
      peg$c227 = peg$otherExpectation("unique"),
      peg$c228 = peg$otherExpectation("string"),
      peg$c229 = peg$otherExpectation("object"),
      peg$c230 = peg$otherExpectation("array"),
      peg$c231 = peg$otherExpectation("boolean"),
      peg$c232 = peg$otherExpectation("date_time"),
      peg$c233 = "_",
      peg$c234 = peg$literalExpectation("_", false),
      peg$c235 = peg$otherExpectation("autoincrement"),
      peg$c236 = peg$otherExpectation("notnull"),
      peg$c237 = peg$otherExpectation("default"),
      peg$c238 = peg$otherExpectation("define"),
      peg$c239 = peg$otherExpectation("table"),
      peg$c240 = peg$otherExpectation("db"),
      peg$c241 = peg$otherExpectation("isDbExist"),
      peg$c242 = peg$otherExpectation("openDb"),
      peg$c243 = peg$otherExpectation("disablesearch"),
      peg$c244 = peg$otherExpectation("join"),
      peg$c245 = peg$otherExpectation("on"),
      peg$c246 = peg$otherExpectation("inner"),
      peg$c247 = peg$otherExpectation("left"),
      peg$c248 = peg$otherExpectation("as"),
      peg$c249 = peg$otherExpectation("upsert"),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsequery() {
    var s0;

    s0 = peg$parseselectQuery();
    if (s0 === peg$FAILED) {
      s0 = peg$parsecountQuery();
      if (s0 === peg$FAILED) {
        s0 = peg$parseinsertQuery();
        if (s0 === peg$FAILED) {
          s0 = peg$parseupdateQuery();
          if (s0 === peg$FAILED) {
            s0 = peg$parseremoveQuery();
            if (s0 === peg$FAILED) {
              s0 = peg$parsecreateQuery();
              if (s0 === peg$FAILED) {
                s0 = peg$parseopenQuery();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseisDbExistQuery();
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsecreateQuery() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecreateDbQuery();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsecreateTableQuery();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsecreateTableQuery();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecreateDbQuery() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseDEFINE();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseDB();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsedbName();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 59) {
                s6 = peg$c1;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c2); }
              }
              if (s6 === peg$FAILED) {
                s6 = null;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c3(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecreateTableQuery() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17;

    s0 = peg$currPos;
    s1 = peg$parseDEFINE();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseTABLE();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsetableName();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 40) {
                  s7 = peg$c4;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c5); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  s9 = peg$parse_();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parse_();
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsecolumnDef();
                    if (s9 !== peg$FAILED) {
                      s10 = [];
                      s11 = peg$parsebetweenColumnDef();
                      while (s11 !== peg$FAILED) {
                        s10.push(s11);
                        s11 = peg$parsebetweenColumnDef();
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = [];
                        s12 = peg$parse_();
                        while (s12 !== peg$FAILED) {
                          s11.push(s12);
                          s12 = peg$parse_();
                        }
                        if (s11 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 41) {
                            s12 = peg$c6;
                            peg$currPos++;
                          } else {
                            s12 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c7); }
                          }
                          if (s12 !== peg$FAILED) {
                            s13 = [];
                            s14 = peg$parse_();
                            while (s14 !== peg$FAILED) {
                              s13.push(s14);
                              s14 = peg$parse_();
                            }
                            if (s13 !== peg$FAILED) {
                              s14 = peg$parseversion();
                              if (s14 === peg$FAILED) {
                                s14 = null;
                              }
                              if (s14 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 59) {
                                  s15 = peg$c1;
                                  peg$currPos++;
                                } else {
                                  s15 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c2); }
                                }
                                if (s15 === peg$FAILED) {
                                  s15 = null;
                                }
                                if (s15 !== peg$FAILED) {
                                  s16 = [];
                                  s17 = peg$parse_();
                                  while (s17 !== peg$FAILED) {
                                    s16.push(s17);
                                    s17 = peg$parse_();
                                  }
                                  if (s16 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c8(s5, s9, s10, s14);
                                    s0 = s1;
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsebetweenColumnDef() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 44) {
        s2 = peg$c9;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecolumnDef();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c11(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolumnDef() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parsecolumn();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsecolumnOption();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsecolumnOption();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c12(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolumnOption() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsecolumnOpts();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c13(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolumnOpts() {
    var s0;

    s0 = peg$parsedataType();
    if (s0 === peg$FAILED) {
      s0 = peg$parseautoIncrement();
      if (s0 === peg$FAILED) {
        s0 = peg$parsenotNull();
        if (s0 === peg$FAILED) {
          s0 = peg$parsedefault();
          if (s0 === peg$FAILED) {
            s0 = peg$parseunique();
            if (s0 === peg$FAILED) {
              s0 = peg$parseprimaryKey();
              if (s0 === peg$FAILED) {
                s0 = peg$parsemultiEntry();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseenableSearch();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parsedisableSearch();
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseautoIncrement() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseAUTOINCREMENT();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c14();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsenotNull() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseNOTNULL();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c15();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsedefault() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseDEFAULT();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsevalue();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c16(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedataType() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseSTRING();
    if (s1 === peg$FAILED) {
      s1 = peg$parseNUMBER();
      if (s1 === peg$FAILED) {
        s1 = peg$parseOBJECT();
        if (s1 === peg$FAILED) {
          s1 = peg$parseARRAY();
          if (s1 === peg$FAILED) {
            s1 = peg$parseBOOLEAN();
            if (s1 === peg$FAILED) {
              s1 = peg$parseDATETIME();
            }
          }
        }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c17(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseunique() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseUNIQUE();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c18();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseprimaryKey() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parsePRIMARYKEY();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c19();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsemultiEntry() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseMULTIENTRY();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c20();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseenableSearch() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseENABLESEARCH();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c21();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsedisableSearch() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseDISABLESEARCH();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c22();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseversion() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseVERSION();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNumber();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c23(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinsertQuery() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

    s0 = peg$currPos;
    s1 = peg$parseINSERT();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseINTO();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsetableName();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseVALUES();
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  s9 = peg$parse_();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parse_();
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsevalueTypes();
                    if (s9 !== peg$FAILED) {
                      s10 = [];
                      s11 = peg$parse_();
                      while (s11 !== peg$FAILED) {
                        s10.push(s11);
                        s11 = peg$parse_();
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = [];
                        s12 = peg$parseinsertOptions();
                        while (s12 !== peg$FAILED) {
                          s11.push(s12);
                          s12 = peg$parseinsertOptions();
                        }
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c24(s5, s9, s11);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevalueTypes() {
    var s0;

    s0 = peg$parseinsertWithEqual();
    if (s0 === peg$FAILED) {
      s0 = peg$parseinsertWithParanthesis();
    }

    return s0;
  }

  function peg$parseinsertWithParanthesis() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c25) {
      s1 = peg$c25;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c26); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsekeyValueSepByColumn();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseinsertWithParanthesisBetweenVal();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseinsertWithParanthesisBetweenVal();
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c27) {
                  s7 = peg$c27;
                  peg$currPos += 2;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c28); }
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c29(s3, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinsertWithParanthesisBetweenVal() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 44) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c10); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsekeyValueSepByColumn();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c30(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsekeyValueSepByColumn() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecolumn();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s3 = peg$c31;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c32); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsevalue();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c33(s1, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinsertWithEqual() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 61) {
      s1 = peg$c34;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c35); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsevalue();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c36(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinsertOptions() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseskipDataCheck();
    if (s1 === peg$FAILED) {
      s1 = peg$parsereturn();
      if (s1 === peg$FAILED) {
        s1 = peg$parseupsert();
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c37(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseskipDataCheck() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseSKIPDATACHECK();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c38();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsereturn() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseRETURN();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c39();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseupsert() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseUPSERT();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseremoveQuery() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$currPos;
    s1 = peg$parseDELETE();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseFROM();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsetableName();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parsewhereQry();
                if (s7 === peg$FAILED) {
                  s7 = null;
                }
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  s9 = peg$parse_();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parse_();
                  }
                  if (s8 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c41(s5, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecountQuery() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

    s0 = peg$currPos;
    s1 = peg$parseCOUNT();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 42) {
          s4 = peg$c42;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c43); }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseFROM();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsetableName();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parse_();
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parse_();
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsewhereQry();
                  if (s8 === peg$FAILED) {
                    s8 = null;
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = [];
                    s10 = peg$parse_();
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      s10 = peg$parse_();
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = [];
                      s11 = peg$parsedistinct();
                      if (s11 === peg$FAILED) {
                        s11 = peg$parsegroupBy();
                      }
                      while (s11 !== peg$FAILED) {
                        s10.push(s11);
                        s11 = peg$parsedistinct();
                        if (s11 === peg$FAILED) {
                          s11 = peg$parsegroupBy();
                        }
                      }
                      if (s10 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c44(s6, s8, s10);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseselectQuery() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;

    s0 = peg$currPos;
    s1 = peg$parseSELECT();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 42) {
          s4 = peg$c42;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c43); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parse_();
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseasQuery();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseaggregateQry();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseFROM();
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsetableName();
                  if (s8 !== peg$FAILED) {
                    s9 = [];
                    s10 = peg$parse_();
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      s10 = peg$parse_();
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = [];
                      s11 = peg$parsejoinQry();
                      while (s11 !== peg$FAILED) {
                        s10.push(s11);
                        s11 = peg$parsejoinQry();
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = [];
                        s12 = peg$parse_();
                        while (s12 !== peg$FAILED) {
                          s11.push(s12);
                          s12 = peg$parse_();
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parsewhereQry();
                          if (s12 === peg$FAILED) {
                            s12 = null;
                          }
                          if (s12 !== peg$FAILED) {
                            s13 = [];
                            s14 = peg$parse_();
                            while (s14 !== peg$FAILED) {
                              s13.push(s14);
                              s14 = peg$parse_();
                            }
                            if (s13 !== peg$FAILED) {
                              s14 = [];
                              s15 = peg$parseskip();
                              if (s15 === peg$FAILED) {
                                s15 = peg$parselimit();
                                if (s15 === peg$FAILED) {
                                  s15 = peg$parsedistinct();
                                  if (s15 === peg$FAILED) {
                                    s15 = peg$parseorderBy();
                                    if (s15 === peg$FAILED) {
                                      s15 = peg$parsegroupBy();
                                    }
                                  }
                                }
                              }
                              while (s15 !== peg$FAILED) {
                                s14.push(s15);
                                s15 = peg$parseskip();
                                if (s15 === peg$FAILED) {
                                  s15 = peg$parselimit();
                                  if (s15 === peg$FAILED) {
                                    s15 = peg$parsedistinct();
                                    if (s15 === peg$FAILED) {
                                      s15 = peg$parseorderBy();
                                      if (s15 === peg$FAILED) {
                                        s15 = peg$parsegroupBy();
                                      }
                                    }
                                  }
                                }
                              }
                              if (s14 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c45(s4, s5, s8, s10, s12, s14);
                                s0 = s1;
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseasQuery() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsealiasGrammar();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c46(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsealiasGrammar() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseasFirstQuery();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseasAfterFirstQuery();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseasAfterFirstQuery();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseasFirstQuery() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parsecolumn();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s2 = peg$c48;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecolumn();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parse_();
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseAS();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parse_();
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parsecolumn();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c50(s1, s3, s7);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseasAfterFirstQuery() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 44) {
        s2 = peg$c9;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseasFirstQuery();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c51(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseaggregateQry() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseaggregate();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c52(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseaggregate() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c53;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c54); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseaggregateType();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseinBetweenAggregateColumn();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseinBetweenAggregateColumn();
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s5 = peg$c55;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c56); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c57(s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinBetweenAggregateColumn() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 44) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c10); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseaggregateType();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c30(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseaggregateType() {
    var s0;

    s0 = peg$parseminAggregate();
    if (s0 === peg$FAILED) {
      s0 = peg$parsemaxAggregate();
      if (s0 === peg$FAILED) {
        s0 = peg$parseavgAggregate();
        if (s0 === peg$FAILED) {
          s0 = peg$parsecountAggregate();
          if (s0 === peg$FAILED) {
            s0 = peg$parsesumAggregate();
          }
        }
      }
    }

    return s0;
  }

  function peg$parsemaxAggregate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$currPos;
    s1 = peg$parseMAX();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s3 = peg$c4;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecolumn();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parseinBetweenParanthesisColumn();
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parseinBetweenParanthesisColumn();
                }
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  s9 = peg$parse_();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parse_();
                  }
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s9 = peg$c6;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c7); }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c58(s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseminAggregate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$currPos;
    s1 = peg$parseMIN();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s3 = peg$c4;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecolumn();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parseinBetweenParanthesisColumn();
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parseinBetweenParanthesisColumn();
                }
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  s9 = peg$parse_();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parse_();
                  }
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s9 = peg$c6;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c7); }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c59(s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseavgAggregate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$currPos;
    s1 = peg$parseAVG();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s3 = peg$c4;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecolumn();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parseinBetweenParanthesisColumn();
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parseinBetweenParanthesisColumn();
                }
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  s9 = peg$parse_();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parse_();
                  }
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s9 = peg$c6;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c7); }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c60(s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecountAggregate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$currPos;
    s1 = peg$parseCOUNT();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s3 = peg$c4;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecolumn();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parseinBetweenParanthesisColumn();
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parseinBetweenParanthesisColumn();
                }
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  s9 = peg$parse_();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parse_();
                  }
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s9 = peg$c6;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c7); }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c61(s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesumAggregate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$currPos;
    s1 = peg$parseSUM();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s3 = peg$c4;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecolumn();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parseinBetweenParanthesisColumn();
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parseinBetweenParanthesisColumn();
                }
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  s9 = peg$parse_();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parse_();
                  }
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s9 = peg$c6;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c7); }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c62(s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsegroupBy() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$parseGROUP();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseBY();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecolumn();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parsegroupByRestValue();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parsegroupByRestValue();
              }
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parse_();
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parse_();
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c63(s5, s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsegroupByRestValue() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 44) {
        s2 = peg$c9;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecolumn();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c30(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseorderBy() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parseORDER();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseBY();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseorderByQry();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parserestOrderByQry();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parserestOrderByQry();
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c64(s5, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parserestOrderByQry() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 44) {
        s2 = peg$c9;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseorderByQry();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c65(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseorderByQry() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parsecolumn();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseorderByType();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c66(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseorderByType() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOrderByTypes();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c67(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedistinct() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseDISTINCT();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c68();
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseskip() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseSKIP();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNumber();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c69(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselimit() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseLIMIT();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNumber();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c70(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsewhereQry() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseWHERE();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsewhereitems();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c71(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsewhereitems() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsewhereQryWithoutParanthesis();
    if (s1 === peg$FAILED) {
      s1 = peg$parsewhereQryWithParanthesis();
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsejoinWhereItems();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsejoinWhereItems();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c72(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsejoinWhereItems() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseJoinOp();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsewhereQryWithoutParanthesis();
          if (s4 === peg$FAILED) {
            s4 = peg$parsewhereQryWithParanthesis();
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c73(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsewhereQryWithoutParanthesis() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsewhereItem();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsejoinWhereItem();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsejoinWhereItem();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c74(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsewhereQryWithParanthesis() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c4;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c5); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsewhereItem();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsejoinWhereItem();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsejoinWhereItem();
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s6 = peg$c6;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c7); }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c75(s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsejoinWhereItem() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseJoinOp();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsewhereItem();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c76(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsewhereItem() {
    var s0;

    s0 = peg$parseequalToItem();
    if (s0 === peg$FAILED) {
      s0 = peg$parselikeItem();
      if (s0 === peg$FAILED) {
        s0 = peg$parseinItem();
        if (s0 === peg$FAILED) {
          s0 = peg$parseoperatorItem();
          if (s0 === peg$FAILED) {
            s0 = peg$parsebetweenItem();
          }
        }
      }
    }

    return s0;
  }

  function peg$parseequalToItem() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parsecolumn();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecolAfterDot();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s4 = peg$c34;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c35); }
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parsevalue();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c77(s1, s2, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseoperatorItem() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parsecolumn();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecolAfterDot();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c78) {
            s4 = peg$c78;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c79); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c80) {
              s4 = peg$c80;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c81); }
            }
            if (s4 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c82) {
                s4 = peg$c82;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c83); }
              }
              if (s4 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 62) {
                  s4 = peg$c84;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c85); }
                }
                if (s4 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 60) {
                    s4 = peg$c86;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c87); }
                  }
                }
              }
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parsevalue();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c88(s1, s2, s4, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsebetweenItem() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

    s0 = peg$currPos;
    s1 = peg$parsecolumn();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecolAfterDot();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseBETWEEN();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s6 = peg$c4;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c5); }
              }
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parse_();
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parse_();
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsevalue();
                  if (s8 !== peg$FAILED) {
                    s9 = [];
                    s10 = peg$parse_();
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      s10 = peg$parse_();
                    }
                    if (s9 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s10 = peg$c9;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c10); }
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = [];
                        s12 = peg$parse_();
                        while (s12 !== peg$FAILED) {
                          s11.push(s12);
                          s12 = peg$parse_();
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parsevalue();
                          if (s12 !== peg$FAILED) {
                            s13 = [];
                            s14 = peg$parse_();
                            while (s14 !== peg$FAILED) {
                              s13.push(s14);
                              s14 = peg$parse_();
                            }
                            if (s13 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 41) {
                                s14 = peg$c6;
                                peg$currPos++;
                              } else {
                                s14 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c7); }
                              }
                              if (s14 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c89(s1, s2, s8, s12);
                                s0 = s1;
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinItem() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

    s0 = peg$currPos;
    s1 = peg$parsecolumn();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecolAfterDot();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseIN();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 40) {
                s6 = peg$c4;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c5); }
              }
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parse_();
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parse_();
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parsevalue();
                  if (s8 !== peg$FAILED) {
                    s9 = [];
                    s10 = peg$parse_();
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      s10 = peg$parse_();
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = [];
                      s11 = peg$parseinBetweenParanthesisItem();
                      while (s11 !== peg$FAILED) {
                        s10.push(s11);
                        s11 = peg$parseinBetweenParanthesisItem();
                      }
                      if (s10 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 41) {
                          s11 = peg$c6;
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c7); }
                        }
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c90(s1, s2, s8, s10);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinBetweenParanthesisColumn() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 44) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c10); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecolumn();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c30(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseinBetweenParanthesisItem() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 44) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c10); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsevalue();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c30(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselikeItem() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parsecolumn();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecolAfterDot();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseLIKE();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parselikeType();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c91(s1, s2, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselikeType() {
    var s0;

    s0 = peg$parselikeType1();
    if (s0 === peg$FAILED) {
      s0 = peg$parselikeType2();
      if (s0 === peg$FAILED) {
        s0 = peg$parselikeType3();
      }
    }

    return s0;
  }

  function peg$parselikeType1() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c92) {
      s1 = peg$c92;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c93); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseWord();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c94) {
              s5 = peg$c94;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c95); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c96(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselikeType2() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c92) {
      s1 = peg$c92;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c93); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseWord();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s4 = peg$c97;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c98); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c99(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselikeType3() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 39) {
      s1 = peg$c97;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c98); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseWord();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c94) {
            s4 = peg$c94;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c95); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c100(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolAfterDot() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 46) {
      s1 = peg$c48;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c49); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecolumn();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c101(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsejoinQry() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

    s0 = peg$currPos;
    s1 = peg$parsejoinType();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseJOIN();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsetableName();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parse_();
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseON();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$parse_();
                if (s8 !== peg$FAILED) {
                  while (s8 !== peg$FAILED) {
                    s7.push(s8);
                    s8 = peg$parse_();
                  }
                } else {
                  s7 = peg$FAILED;
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseonValue();
                  if (s8 !== peg$FAILED) {
                    s9 = [];
                    s10 = peg$parse_();
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      s10 = peg$parse_();
                    }
                    if (s9 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 61) {
                        s10 = peg$c34;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c35); }
                      }
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseonValue();
                        if (s11 !== peg$FAILED) {
                          s12 = [];
                          s13 = peg$parse_();
                          while (s13 !== peg$FAILED) {
                            s12.push(s13);
                            s13 = peg$parse_();
                          }
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c102(s1, s4, s8, s11);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseonValue() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c104.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c105); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c104.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c105); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c106(s1);
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c103); }
    }

    return s0;
  }

  function peg$parsejoinType() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseINNER();
    if (s1 === peg$FAILED) {
      s1 = peg$parseLEFT();
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c107(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseupdateQuery() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

    s0 = peg$currPos;
    s1 = peg$parseUPDATE();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsetableName();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseSET();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseupdateValue();
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  s9 = peg$parse_();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parse_();
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsewhereQry();
                    if (s9 === peg$FAILED) {
                      s9 = null;
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = [];
                      s11 = peg$parse_();
                      while (s11 !== peg$FAILED) {
                        s10.push(s11);
                        s11 = peg$parse_();
                      }
                      if (s10 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c108(s3, s7, s9);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseupdateValue() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseequalToItem();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseupdateValueBetweenItem();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseupdateValueBetweenItem();
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c109(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseupdateValueBetweenItem() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 44) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c10); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseequalToItem();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c110(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseopenQuery() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseOPENDB();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsedbName();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c111(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseisDbExistQuery() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseISDBEXIST();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsedbName();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsetableInfo();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c112(s3, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetableInfo() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseTABLE();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsetableName();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseversion();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c113(s3, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetableName() {
    var s0, s1;

    peg$silentFails++;
    s0 = peg$parseIdentifier();
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c114); }
    }

    return s0;
  }

  function peg$parsedbName() {
    var s0, s1;

    peg$silentFails++;
    s0 = peg$parseIdentifier();
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c115); }
    }

    return s0;
  }

  function peg$parsecolumn() {
    var s0, s1;

    peg$silentFails++;
    s0 = peg$parseIdentifier();
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c116); }
    }

    return s0;
  }

  function peg$parseJoinOp() {
    var s0;

    s0 = peg$parseAnd();
    if (s0 === peg$FAILED) {
      s0 = peg$parseOr();
    }

    return s0;
  }

  function peg$parseOrderByTypes() {
    var s0, s1;

    peg$silentFails++;
    if (input.substr(peg$currPos, 3) === peg$c118) {
      s0 = peg$c118;
      peg$currPos += 3;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c119); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c120) {
        s0 = peg$c120;
        peg$currPos += 4;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c121); }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c117); }
    }

    return s0;
  }

  function peg$parseAnd() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c122) {
      s0 = peg$c122;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c123); }
    }

    return s0;
  }

  function peg$parseOr() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c124) {
      s0 = peg$c124;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c125); }
    }

    return s0;
  }

  function peg$parsevalue() {
    var s0, s1;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseColumnValue();
    if (s1 === peg$FAILED) {
      s1 = peg$parseNumber();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c110(s1);
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c126); }
    }

    return s0;
  }

  function peg$parseColumnValue() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 39) {
      s1 = peg$c97;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c98); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseWord();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c97;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c98); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c30(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseIdentifier() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c128.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c129); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c128.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c129); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c106(s1);
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c127); }
    }

    return s0;
  }

  function peg$parseWord() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseLetter();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseLetter();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c131(s1);
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c130); }
    }

    return s0;
  }

  function peg$parseWordAndNumber() {
    var s0;

    if (peg$c132.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c133); }
    }

    return s0;
  }

  function peg$parseLetter() {
    var s0;

    if (peg$c134.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c135); }
    }

    return s0;
  }

  function peg$parseNumber() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseDigit();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseDigit();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c137(s1);
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c136); }
    }

    return s0;
  }

  function peg$parseDigit() {
    var s0;

    if (peg$c138.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c139); }
    }

    return s0;
  }

  function peg$parseWs() {
    var s0, s1;

    peg$silentFails++;
    if (peg$c141.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c142); }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c140); }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseWs();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseWs();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c144(s1);
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c143); }
    }

    return s0;
  }

  function peg$parseA() {
    var s0;

    if (peg$c145.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c146); }
    }

    return s0;
  }

  function peg$parseB() {
    var s0;

    if (peg$c147.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c148); }
    }

    return s0;
  }

  function peg$parseC() {
    var s0;

    if (peg$c149.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c150); }
    }

    return s0;
  }

  function peg$parseD() {
    var s0;

    if (peg$c151.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c152); }
    }

    return s0;
  }

  function peg$parseE() {
    var s0;

    if (peg$c153.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c154); }
    }

    return s0;
  }

  function peg$parseF() {
    var s0;

    if (peg$c155.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c156); }
    }

    return s0;
  }

  function peg$parseG() {
    var s0;

    if (peg$c157.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c158); }
    }

    return s0;
  }

  function peg$parseH() {
    var s0;

    if (peg$c159.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c160); }
    }

    return s0;
  }

  function peg$parseI() {
    var s0;

    if (peg$c161.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c162); }
    }

    return s0;
  }

  function peg$parseJ() {
    var s0;

    if (peg$c163.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c164); }
    }

    return s0;
  }

  function peg$parseK() {
    var s0;

    if (peg$c165.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c166); }
    }

    return s0;
  }

  function peg$parseL() {
    var s0;

    if (peg$c167.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c168); }
    }

    return s0;
  }

  function peg$parseM() {
    var s0;

    if (peg$c169.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c170); }
    }

    return s0;
  }

  function peg$parseN() {
    var s0;

    if (peg$c171.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c172); }
    }

    return s0;
  }

  function peg$parseO() {
    var s0;

    if (peg$c173.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c174); }
    }

    return s0;
  }

  function peg$parseP() {
    var s0;

    if (peg$c175.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c176); }
    }

    return s0;
  }

  function peg$parseQ() {
    var s0;

    if (peg$c177.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c178); }
    }

    return s0;
  }

  function peg$parseR() {
    var s0;

    if (peg$c179.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c180); }
    }

    return s0;
  }

  function peg$parseS() {
    var s0;

    if (peg$c181.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c182); }
    }

    return s0;
  }

  function peg$parseT() {
    var s0;

    if (peg$c183.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c184); }
    }

    return s0;
  }

  function peg$parseU() {
    var s0;

    if (peg$c185.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c186); }
    }

    return s0;
  }

  function peg$parseV() {
    var s0;

    if (peg$c187.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c188); }
    }

    return s0;
  }

  function peg$parseW() {
    var s0;

    if (peg$c189.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c190); }
    }

    return s0;
  }

  function peg$parseX() {
    var s0;

    if (peg$c191.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c192); }
    }

    return s0;
  }

  function peg$parseY() {
    var s0;

    if (peg$c193.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c194); }
    }

    return s0;
  }

  function peg$parseZ() {
    var s0;

    if (peg$c195.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c196); }
    }

    return s0;
  }

  function peg$parseMIN() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseM();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseI();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseN();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c197); }
    }

    return s0;
  }

  function peg$parseMAX() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseM();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseA();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseX();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c198); }
    }

    return s0;
  }

  function peg$parseAVG() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseA();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseV();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseG();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c199); }
    }

    return s0;
  }

  function peg$parseCOUNT() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseC();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseO();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseU();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseN();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseT();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c200); }
    }

    return s0;
  }

  function peg$parseSUM() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseS();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseU();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseM();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c201); }
    }

    return s0;
  }

  function peg$parseAGGREGATE() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseA();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseG();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseG();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseR();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseE();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseG();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseA();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseT();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseE();
                    if (s9 !== peg$FAILED) {
                      s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c202); }
    }

    return s0;
  }

  function peg$parseBETWEEN() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseB();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseT();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseW();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseE();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseE();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseN();
                if (s7 !== peg$FAILED) {
                  s1 = [s1, s2, s3, s4, s5, s6, s7];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c203); }
    }

    return s0;
  }

  function peg$parseIN() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseI();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseN();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c204); }
    }

    return s0;
  }

  function peg$parseLIKE() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseL();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseI();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseK();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseE();
          if (s4 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c205); }
    }

    return s0;
  }

  function peg$parseSELECT() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseS();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseL();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseC();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseT();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c206); }
    }

    return s0;
  }

  function peg$parseDISTINCT() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseD();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseI();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseT();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseI();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseN();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseC();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseT();
                  if (s8 !== peg$FAILED) {
                    s1 = [s1, s2, s3, s4, s5, s6, s7, s8];
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c207); }
    }

    return s0;
  }

  function peg$parseORDER() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseO();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseR();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseD();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseR();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c208); }
    }

    return s0;
  }

  function peg$parseBY() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseB();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseY();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c209); }
    }

    return s0;
  }

  function peg$parseFROM() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseF();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseR();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseO();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseM();
          if (s4 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c210); }
    }

    return s0;
  }

  function peg$parseGROUP() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseG();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseR();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseO();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseU();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseP();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c211); }
    }

    return s0;
  }

  function peg$parseLIMIT() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseL();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseI();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseM();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseI();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseT();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c212); }
    }

    return s0;
  }

  function peg$parseSKIP() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseS();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseK();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseI();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseP();
          if (s4 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c213); }
    }

    return s0;
  }

  function peg$parseWHERE() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseW();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseH();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseE();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseR();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseE();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c214); }
    }

    return s0;
  }

  function peg$parseINSERT() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseI();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseN();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseR();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseT();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c215); }
    }

    return s0;
  }

  function peg$parseINTO() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseI();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseN();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseT();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseO();
          if (s4 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c216); }
    }

    return s0;
  }

  function peg$parseRETURN() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseR();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseT();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseU();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseR();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseN();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c217); }
    }

    return s0;
  }

  function peg$parseVALUES() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseV();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseA();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseL();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseU();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseE();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseS();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c218); }
    }

    return s0;
  }

  function peg$parseSKIPDATACHECK() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseS();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseK();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseI();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseP();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseD();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseA();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseT();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseA();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseC();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseH();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseE();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseC();
                          if (s12 !== peg$FAILED) {
                            s13 = peg$parseK();
                            if (s13 !== peg$FAILED) {
                              s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c219); }
    }

    return s0;
  }

  function peg$parseUPDATE() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseU();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseP();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseD();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseT();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseE();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c220); }
    }

    return s0;
  }

  function peg$parseSET() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseS();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseT();
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c221); }
    }

    return s0;
  }

  function peg$parseDELETE() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseD();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseL();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseT();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseE();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c222); }
    }

    return s0;
  }

  function peg$parseVERSION() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseV();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseR();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseS();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseI();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseO();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseN();
                if (s7 !== peg$FAILED) {
                  s1 = [s1, s2, s3, s4, s5, s6, s7];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c223); }
    }

    return s0;
  }

  function peg$parseENABLESEARCH() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseE();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseN();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseA();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseB();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseL();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseE();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseS();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseE();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseA();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseR();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseC();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseH();
                          if (s12 !== peg$FAILED) {
                            s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c224); }
    }

    return s0;
  }

  function peg$parseMULTIENTRY() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseM();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseU();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseL();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseT();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseI();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseE();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseN();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseT();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseR();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseY();
                      if (s10 !== peg$FAILED) {
                        s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c225); }
    }

    return s0;
  }

  function peg$parsePRIMARYKEY() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseP();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseR();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseI();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseM();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseA();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseR();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseY();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseK();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseE();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseY();
                      if (s10 !== peg$FAILED) {
                        s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c226); }
    }

    return s0;
  }

  function peg$parseUNIQUE() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseU();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseN();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseI();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseQ();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseU();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseE();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c227); }
    }

    return s0;
  }

  function peg$parseSTRING() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseS();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseT();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseR();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseI();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseN();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseG();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c228); }
    }

    return s0;
  }

  function peg$parseNUMBER() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseN();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseU();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseM();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseB();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseE();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseR();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c136); }
    }

    return s0;
  }

  function peg$parseOBJECT() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseO();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseB();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseJ();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseC();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseT();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c229); }
    }

    return s0;
  }

  function peg$parseARRAY() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseA();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseR();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseR();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseY();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c230); }
    }

    return s0;
  }

  function peg$parseBOOLEAN() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseB();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseO();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseO();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseL();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseE();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseA();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseN();
                if (s7 !== peg$FAILED) {
                  s1 = [s1, s2, s3, s4, s5, s6, s7];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c231); }
    }

    return s0;
  }

  function peg$parseDATETIME() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseD();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseA();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseT();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseE();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 95) {
              s5 = peg$c233;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c234); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseT();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseI();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseM();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseE();
                    if (s9 !== peg$FAILED) {
                      s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c232); }
    }

    return s0;
  }

  function peg$parseAUTOINCREMENT() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseA();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseU();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseT();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseO();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseI();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseN();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseC();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseR();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseE();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseM();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseE();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseN();
                          if (s12 !== peg$FAILED) {
                            s13 = peg$parseT();
                            if (s13 !== peg$FAILED) {
                              s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c235); }
    }

    return s0;
  }

  function peg$parseNOTNULL() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseN();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseO();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseT();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseN();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseU();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseL();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseL();
                if (s7 !== peg$FAILED) {
                  s1 = [s1, s2, s3, s4, s5, s6, s7];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c236); }
    }

    return s0;
  }

  function peg$parseDEFAULT() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseD();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseF();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseU();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseL();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseT();
                if (s7 !== peg$FAILED) {
                  s1 = [s1, s2, s3, s4, s5, s6, s7];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c237); }
    }

    return s0;
  }

  function peg$parseDEFINE() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseD();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseF();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseI();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseN();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseE();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c238); }
    }

    return s0;
  }

  function peg$parseTABLE() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseT();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseA();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseB();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseL();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseE();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c239); }
    }

    return s0;
  }

  function peg$parseDB() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseD();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseB();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c240); }
    }

    return s0;
  }

  function peg$parseISDBEXIST() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseI();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseS();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseD();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseB();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseE();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseX();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseI();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseS();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseT();
                    if (s9 !== peg$FAILED) {
                      s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c241); }
    }

    return s0;
  }

  function peg$parseOPENDB() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseO();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseP();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseE();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseN();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseD();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseB();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c242); }
    }

    return s0;
  }

  function peg$parseDISABLESEARCH() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseD();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseI();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseA();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseB();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseL();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseE();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseS();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseE();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseA();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseR();
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseC();
                          if (s12 !== peg$FAILED) {
                            s13 = peg$parseH();
                            if (s13 !== peg$FAILED) {
                              s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c243); }
    }

    return s0;
  }

  function peg$parseJOIN() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseJ();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseO();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseI();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseN();
          if (s4 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c244); }
    }

    return s0;
  }

  function peg$parseON() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseO();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseN();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c245); }
    }

    return s0;
  }

  function peg$parseINNER() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseI();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseN();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseN();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseR();
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c246); }
    }

    return s0;
  }

  function peg$parseLEFT() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseL();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseF();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseT();
          if (s4 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c247); }
    }

    return s0;
  }

  function peg$parseAS() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseA();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseS();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c248); }
    }

    return s0;
  }

  function peg$parseUPSERT() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseU();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseP();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseR();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseT();
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c249); }
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogHelper", function() { return LogHelper; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


var LogHelper = /** @class */ (function () {
    function LogHelper(type, info) {
        this.type = type;
        this.info_ = info;
        this.message = this.getMsg_();
    }
    LogHelper.log = function (msg) {
        if (_config__WEBPACK_IMPORTED_MODULE_1__["Config"].isLogEnabled) {
            console.log(msg);
        }
    };
    LogHelper.prototype.logError = function () {
        console.error(this.get());
    };
    LogHelper.prototype.logWarning = function () {
        console.warn(this.get());
    };
    LogHelper.prototype.get = function () {
        return {
            message: this.message,
            type: this.type
        };
    };
    LogHelper.prototype.getMsg_ = function () {
        var errMsg;
        switch (this.type) {
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].SynTaxError:
                errMsg = this.info_;
                break;
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    };
    return LogHelper;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE["SynTaxError"] = "syntax_error";
})(ERROR_TYPE || (ERROR_TYPE = {}));


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.isLogEnabled = false;
    return Config;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var Query = /** @class */ (function () {
    function Query(qry) {
        this.topLevelKeys_ = ["skip", "limit"];
        this.query_ = this.parseSql_(qry);
    }
    Query.prototype.map = function (key, value) {
        var stringifiedValue = JSON.stringify(this.query_);
        this.query_ = this.parseJson_(stringifiedValue.replace('"' + key + '"', JSON.stringify(value)));
    };
    Query.prototype.parseJson_ = function (value) {
        return _util__WEBPACK_IMPORTED_MODULE_0__["Util"].parseJson(value);
    };
    Query.prototype.parseSql_ = function (value) {
        return _util__WEBPACK_IMPORTED_MODULE_0__["Util"].parseSql(value);
    };
    return Query;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=sqlweb.commonjs2.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

if (false) {}
else {
    module.exports = __webpack_require__(5);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDbSchema", function() { return createDbSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDb", function() { return createDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTable", function() { return createTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSql", function() { return runSql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterizedSqlExpression", function() { return getParameterizedSqlExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runParameterizedSql", function() { return runParameterizedSql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paging", function() { return paging; });
/* harmony import */ var jsstore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jsstore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsstore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sqlweb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var sqlweb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sqlweb__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 参考：https://jsstore.net/tutorial/get-started/
 // import jsStoreWorker from 'jsstore/dist/jsstore.worker.js'
// import jsStoreWorkerMin from 'jsstore/dist/jsstore.worker.min.js'
// 参考：https://github.com/ujjwalguptaofficial/sqlweb/wiki


var isDev = "development" === 'development'; // 需要file-loader依赖包

var getWorkerPath = function getWorkerPath() {
  // return dev build when env is development
  if (isDev) {
    // eslint-disable-next-line import/no-webpack-loader-syntax
    return __webpack_require__(3); // return jsStoreWorker
  } else {
    // return prod build when env is production
    // eslint-disable-next-line import/no-webpack-loader-syntax
    return __webpack_require__(4); // return jsStoreWorkerMin
  }
};

var workerPath = getWorkerPath();
var connection, originalInsert, originalUpdate, originalRemove, originalSelect;
/**
 * @description 创建数据库连接
 * @returns {Object} 返回创建的数据库连接
 */

function connect() {
  try {
    // 连接不存在时创建连接
    // The connection variable will be used to execute the further query.
    // A connection will handle one db at a time.
    // Do not create multiple connection for one db.
    if (!connection) {
      connection = new jsstore__WEBPACK_IMPORTED_MODULE_0__["Connection"](new Worker(workerPath));
      connection.setLogStatus(isDev); // add SqlWeb

      connection.addPlugin(sqlweb__WEBPACK_IMPORTED_MODULE_1___default.a);
      originalInsert = connection.insert.bind(connection);
      originalUpdate = connection.update.bind(connection);
      originalRemove = connection.remove.bind(connection);
      originalSelect = connection.select.bind(connection);
      connection.createDb = createDb;
      connection.createDbSchema = createDbSchema;
      connection.createTable = createTable;
      connection.insert = insert;
      connection.update = update;
      connection.remove = remove;
      connection.select = select;
      connection.paging = paging;
    }

    return Promise.resolve(connection);
  } catch (error) {
    return Promise.reject(error);
  }
}
/**
 * 生成数据库元数据
 * @param {String} dbName 数据库名
 * @param {Array} tableSchemaList 数据库表范式，包含表名和表的各个字段及其约束定义，值格式为：[{
 *    name: 'string',
		columns: {
			id: { notNull: true, dataType: 'number' },
			itemName: { notNull: true, dataType: 'string' },
			price: { notNull: true, dataType: 'number' },
			quantity: { notNull: true, dataType: 'number' },
			...
		}
 * },...]
 */


function createDbSchema(dbName, tableSchemaList) {
  var tables = tableSchemaList.map(function (tm) {
    // Here "_id" is name of column
    tm.columns._id = {
      primaryKey: true,
      autoIncrement: true
    };
    return tm;
  });
  var db = {
    name: dbName,
    tables: tables
  };
  return db;
}
/**
 * 初始化数据库
 * @param {Object} dbSchema 数据库对象
 * @returns 返回数据库连接对象。
 */


function createDb(_x) {
  return _createDb.apply(this, arguments);
}
/**
 * 创建数据库表
 * @param dbName 数据库名
 * @param tableSchema 数据库表范式。{
 *    name: 'string',
		columns: {
			id: { notNull: true, dataType: 'number' },
			itemName: { notNull: true, dataType: 'string' },
			price: { notNull: true, dataType: 'number' },
			quantity: { notNull: true, dataType: 'number' },
			...
		}
 * }
 * @returns 返回一个Promise对象。值为jsStore的connection对象。
 */


function _createDb() {
  _createDb = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dbSchema) {
    var database, isDbCreated;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            database = dbSchema; // createDbSchema();

            _context.next = 3;
            return connection.initDb(database);

          case 3:
            isDbCreated = _context.sent;

            if (isDbCreated === true) {
              console.log('db created');
            } else {
              console.log('db opened');
            }

            return _context.abrupt("return", connection);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createDb.apply(this, arguments);
}

function createTable(_x2, _x3) {
  return _createTable.apply(this, arguments);
}
/**
 * 向表中插入数据
 * @param {String} tableName 表名
 * @param {Array} data 要插入表中的数据。数组的元素应与创建表时columns对象拥有相同属性
 * @returns 返回一个Promise对象。插入成功时值为插入的数据的行数。
 */


function _createTable() {
  _createTable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dbName, tableSchema) {
    var version, dbSchema, newConnection;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return connection.getDbVersion(dbName);

          case 2:
            version = _context2.sent;
            _context2.next = 5;
            return connection.getDbSchema(dbName);

          case 5:
            dbSchema = _context2.sent;
            tableSchema.columns._id = {
              primaryKey: true,
              autoIncrement: true
            };
            dbSchema.tables.push(_objectSpread(_objectSpread({}, tableSchema), {}, {
              version: version + 1
            }));
            _context2.next = 10;
            return createDb(dbSchema);

          case 10:
            newConnection = _context2.sent;
            return _context2.abrupt("return", newConnection);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createTable.apply(this, arguments);
}

function insert(_x4, _x5) {
  return _insert.apply(this, arguments);
}
/**
 * 更新数据
 * @param {String} tableName 表名
 * @param {Object} expression 更新操作的表达式对象
 * @returns 返回一个Promise对象。值为更新操作影响的行数。
 */


function _insert() {
  _insert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tableName, data) {
    var noOfDataInserted;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return originalInsert({
              into: tableName,
              values: data
            });

          case 2:
            noOfDataInserted = _context3.sent;

            if (!(noOfDataInserted > 0)) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", Promise.resolve(noOfDataInserted));

          case 5:
            return _context3.abrupt("return", Promise.reject());

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _insert.apply(this, arguments);
}

function update(_x6, _x7) {
  return _update.apply(this, arguments);
}
/**
 * 删除数据
 * @param {String} tableName 表名
 * @param {Object} expression 删除操作的表达式对象
 * @returns 返回一个Promise对象。值为删除操作影响的行数。
 */


function _update() {
  _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(tableName, expression) {
    var rowsUpdated;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return originalUpdate(_objectSpread({
              "in": tableName
            }, expression));

          case 2:
            rowsUpdated = _context4.sent;

            if (!rowsUpdated) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", Promise.resolve(rowsUpdated));

          case 5:
            return _context4.abrupt("return", Promise.reject());

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _update.apply(this, arguments);
}

function remove(_x8, _x9) {
  return _remove.apply(this, arguments);
}
/**
 * 查询数据
 * @param {String} tableName 表名
 * @param {Object} expression 查询操作的表达式对象
 * @returns 返回一个Promise对象。值为查询出的数据的数组。
 */


function _remove() {
  _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(tableName, expression) {
    var rowsDeleted;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return originalRemove(_objectSpread({
              from: tableName
            }, expression));

          case 2:
            rowsDeleted = _context5.sent;

            if (!rowsDeleted) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", Promise.resolve(rowsDeleted));

          case 5:
            return _context5.abrupt("return", Promise.reject());

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _remove.apply(this, arguments);
}

function select(_x10, _x11) {
  return _select.apply(this, arguments);
}
/**
 * 分页查询数据
 * @param {String} tableName 表名
 * @param {Object} expression 查询操作的表达式对象：{from: tableName, where: {column1:字段名, ...}, ...}
 * @param {Int} pageIndex 页码，默认值为1
 * @param {Int} pageSize 页面展示条数，默认值为10
 * @returns 返回一个Promise对象。值为分页查询出的数据的数组。
 */


function _select() {
  _select = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(tableName, expression) {
    var results;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return originalSelect(_objectSpread({
              from: tableName
            }, expression));

          case 2:
            results = _context6.sent;

            if (!results.length) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", Promise.resolve(results));

          case 5:
            return _context6.abrupt("return", Promise.reject());

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _select.apply(this, arguments);
}

function paging(_x12) {
  return _paging.apply(this, arguments);
}
/**
 * 执行原生sql语句来操作indexedDB
 * @param {String} sqlExpression sql语句
 * @returns 返回一个Promise。值为执行sql语句的结果。
 */


function _paging() {
  _paging = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(tableName) {
    var expression,
        pageIndex,
        pageSize,
        results,
        _args7 = arguments;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            expression = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
            pageIndex = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : 1;
            pageSize = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : 10;
            _context7.next = 5;
            return select(tableName, _objectSpread({
              limit: pageSize,
              skip: (pageIndex - 1) * pageSize
            }, expression));

          case 5:
            results = _context7.sent;

            if (!results.length) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return", Promise.resolve(results));

          case 8:
            return _context7.abrupt("return", Promise.reject());

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _paging.apply(this, arguments);
}

function runSql(sqlExpression) {
  return connection.$sql.run(sqlExpression);
}
/**
 * @description 获取参数化的sql
 * @param {String} sqlExpression 包含格式化参数的原生sql语句，例：select * from tableA where Id = '@Id'
 * @param {Object} parameters 参数对象，其property必须与sql语句中的参数一致，例：{Id:'1'}
 * @returns 返回参数化的sql
 */


function getParameterizedSqlExpression(sqlExpression, parameters) {
  var query = new connection.$sql.Query(sqlExpression);
  Object.entries(parameters).forEach(function (param) {
    query.map('@' + param[0], param[1]);
  });
  return query;
}
/**
 * @description 执行经过参数化的sql语句
 * @param {String} sqlExpression 包含格式化参数的原生sql语句，例：select * from tableA where Id = '@Id'
 * @param {Object} parameters 参数对象，其property必须与sql语句中的参数一致，例：{Id:'1'}
 * @returns 返回一个Promise。值为执行sql语句的结果。
 */


function runParameterizedSql(sqlExpression, parameters) {
  return runSql(getParameterizedSqlExpression(sqlExpression, parameters));
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "scripts/jsstore.worker.34bb91b2583e52050d1bdd5623de6b22.js");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "scripts/jsstore.worker.min.4fcffd281d2ca926f60dafd2adce34ae.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*!
 * @license :jsstore - V3.13.5 - 06/04/2021
 * https://github.com/ujjwalguptaofficial/JsStore
 * Copyright (c) 2021 @Ujjwal Gupta; Licensed MIT
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Instance", function() { return /* reexport */ instance_Instance; });
__webpack_require__.d(__webpack_exports__, "Connection", function() { return /* reexport */ connection_Connection; });
__webpack_require__.d(__webpack_exports__, "Config", function() { return /* reexport */ Config; });
__webpack_require__.d(__webpack_exports__, "enableLog", function() { return /* reexport */ enableLog; });
__webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return /* reexport */ DATA_TYPE; });

// CONCATENATED MODULE: ./src/common/enums.ts
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE["WorkerNotSupplied"] = "worker_not_supplied";
    ERROR_TYPE["IndexedDbUndefined"] = "indexeddb_undefined";
    ERROR_TYPE["UndefinedColumn"] = "undefined_column";
    ERROR_TYPE["UndefinedValue"] = "undefined_value";
    ERROR_TYPE["UndefinedColumnName"] = "undefined_column_name";
    ERROR_TYPE["UndefinedDbName"] = "undefined_database_name";
    ERROR_TYPE["UndefinedColumnValue"] = "undefined_column_value";
    ERROR_TYPE["NotArray"] = "not_array";
    ERROR_TYPE["NoValueSupplied"] = "no_value_supplied";
    ERROR_TYPE["ColumnNotExist"] = "column_not_exist";
    ERROR_TYPE["EnableSearchOff"] = "enable_search_off";
    ERROR_TYPE["InvalidOp"] = "invalid_operator";
    ERROR_TYPE["NullValue"] = "null_value";
    ERROR_TYPE["WrongDataType"] = "wrong_data_type";
    ERROR_TYPE["TableNotExist"] = "table_not_exist";
    ERROR_TYPE["DbNotExist"] = "db_not_exist";
    ERROR_TYPE["ConnectionAborted"] = "connection_aborted";
    ERROR_TYPE["ConnectionClosed"] = "connection_closed";
    ERROR_TYPE["NotObject"] = "not_object";
    ERROR_TYPE["InvalidConfig"] = "invalid_config";
    ERROR_TYPE["DbBlocked"] = "Db_blocked";
    ERROR_TYPE["IndexedDbNotSupported"] = "indexeddb_not_supported";
    ERROR_TYPE["NullValueInWhere"] = "null_value_in_where";
    ERROR_TYPE["InvalidJoinQuery"] = "invalid_join_query";
    ERROR_TYPE["InvalidOrderQuery"] = "invalid_order_query";
    ERROR_TYPE["InvalidQuery"] = "invalid_query";
    ERROR_TYPE["InvalidGroupQuery"] = "invalid_group_query";
    ERROR_TYPE["ImportScriptsFailed"] = "import_scripts_failed";
    ERROR_TYPE["MethodNotExist"] = "method_not_exist";
})(ERROR_TYPE || (ERROR_TYPE = {}));
var WORKER_STATUS;
(function (WORKER_STATUS) {
    WORKER_STATUS["Registered"] = "registerd";
    WORKER_STATUS["Failed"] = "failed";
    WORKER_STATUS["NotStarted"] = "not_started";
})(WORKER_STATUS || (WORKER_STATUS = {}));
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Boolean"] = "boolean";
    DATA_TYPE["Null"] = "null";
    DATA_TYPE["DateTime"] = "date_time";
})(DATA_TYPE || (DATA_TYPE = {}));
var API;
(function (API) {
    API["InitDb"] = "init_db";
    API["IsDbExist"] = "is_db_exist";
    API["GetDbVersion"] = "get_db_version";
    API["GetDbList"] = "get_db_list";
    API["Get"] = "get";
    API["Set"] = "set";
    API["Select"] = "select";
    API["Insert"] = "insert";
    API["Update"] = "update";
    API["Remove"] = "remove";
    API["GetDbSchema"] = "get_db_schema";
    API["OpenDb"] = "open_db";
    API["Clear"] = "clear";
    API["DropDb"] = "drop_db";
    API["Count"] = "count";
    API["ChangeLogStatus"] = "change_log_status";
    API["Terminate"] = "terminate";
    API["Transaction"] = "transaction";
    API["InitKeyStore"] = "init_keystore";
    API["CloseDb"] = "close_db";
    API["Union"] = "union";
    API["Intersect"] = "intersect";
    API["ImportScripts"] = "import_scripts";
})(API || (API = {}));
var EVENT;
(function (EVENT) {
    EVENT["RequestQueueEmpty"] = "requestQueueEmpty";
    EVENT["RequestQueueFilled"] = "requestQueueFilled";
})(EVENT || (EVENT = {}));
var QUERY_OPTION;
(function (QUERY_OPTION) {
    QUERY_OPTION["Where"] = "where";
    QUERY_OPTION["Like"] = "like";
    QUERY_OPTION["Regex"] = "regex";
    QUERY_OPTION["In"] = "in";
    QUERY_OPTION["Equal"] = "=";
    QUERY_OPTION["Between"] = "-";
    QUERY_OPTION["GreaterThan"] = ">";
    QUERY_OPTION["LessThan"] = "<";
    QUERY_OPTION["GreaterThanEqualTo"] = ">=";
    QUERY_OPTION["LessThanEqualTo"] = "<=";
    QUERY_OPTION["NotEqualTo"] = "!=";
    QUERY_OPTION["Aggregate"] = "aggregate";
    QUERY_OPTION["Max"] = "max";
    QUERY_OPTION["Min"] = "min";
    QUERY_OPTION["Avg"] = "avg";
    QUERY_OPTION["Count"] = "count";
    QUERY_OPTION["Sum"] = "sum";
    QUERY_OPTION["Or"] = "or";
    QUERY_OPTION["Skip"] = "skip";
    QUERY_OPTION["Limit"] = "limit";
    QUERY_OPTION["And"] = "and";
    QUERY_OPTION["IgnoreCase"] = "ignoreCase";
    QUERY_OPTION["Then"] = "then";
})(QUERY_OPTION || (QUERY_OPTION = {}));
var IDB_MODE;
(function (IDB_MODE) {
    IDB_MODE["ReadOnly"] = "readonly";
    IDB_MODE["ReadWrite"] = "readwrite";
})(IDB_MODE || (IDB_MODE = {}));
var OCCURENCE;
(function (OCCURENCE) {
    OCCURENCE["First"] = "f";
    OCCURENCE["Last"] = "l";
    OCCURENCE["Any"] = "a";
})(OCCURENCE || (OCCURENCE = {}));
var CONNECTION_STATUS;
(function (CONNECTION_STATUS) {
    CONNECTION_STATUS["Connected"] = "connected";
    CONNECTION_STATUS["Closed"] = "closed";
    CONNECTION_STATUS["NotStarted"] = "not_started";
    CONNECTION_STATUS["UnableToStart"] = "unable_to_start";
    CONNECTION_STATUS["ClosedByJsStore"] = "closed_by_jsstore";
})(CONNECTION_STATUS || (CONNECTION_STATUS = {}));

// CONCATENATED MODULE: ./src/main/config.ts
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.isLogEnabled = false;
    Config.isRuningInWorker = true;
    return Config;
}());


// CONCATENATED MODULE: ./src/main/log_helper.ts


var log_helper_LogHelper = /** @class */ (function () {
    function LogHelper(type, info) {
        if (info === void 0) { info = null; }
        this.type = type;
        this._info = info;
        this.message = this.getMsg();
    }
    LogHelper.prototype.throw = function () {
        throw this.get();
    };
    LogHelper.log = function (msg) {
        if (Config.isLogEnabled) {
            console.log(msg);
        }
    };
    LogHelper.prototype.logError = function () {
        console.error(this.get());
    };
    LogHelper.prototype.logWarning = function () {
        console.warn(this.get());
    };
    LogHelper.prototype.get = function () {
        return {
            message: this.message,
            type: this.type
        };
    };
    LogHelper.prototype.getMsg = function () {
        var errMsg;
        switch (this.type) {
            case ERROR_TYPE.WorkerNotSupplied:
                errMsg = "Worker object is not passed in instance constructor";
                break;
            case ERROR_TYPE.IndexedDbUndefined:
                errMsg = "Browser does not support indexeddb";
                break;
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    };
    return LogHelper;
}());


// CONCATENATED MODULE: ./src/main/connection_helper.ts



var connection_helper_ConnectionHelper = /** @class */ (function () {
    function ConnectionHelper(worker) {
        this.isDbOpened_ = false;
        this.isDbIdle_ = true;
        this.requestQueue_ = [];
        this.isCodeExecuting_ = false;
        this.inactivityTimer_ = -1000;
        this.eventQueue = [];
        this.middlewares = [];
        // these apis have special permissions. These apis dont wait for database open.
        this.whiteListApi_ = [
            API.InitDb,
            API.IsDbExist,
            API.GetDbVersion,
            API.GetDbList,
            API.OpenDb,
            API.GetDbSchema,
            API.Get,
            API.Set,
            API.ChangeLogStatus,
            API.Terminate,
            API.InitKeyStore
        ];
        if (worker) {
            this.worker_ = worker;
            this.worker_.onmessage = this.onMessageFromWorker_.bind(this);
        }
        else {
            Config.isRuningInWorker = false;
        }
    }
    ConnectionHelper.prototype.initKeyStore_ = function () {
        if (Config.isRuningInWorker) {
            this.prcoessExecutionOfQry_({
                name: API.InitKeyStore,
                onSuccess: function () {
                },
                onError: function (err) {
                    console.error(err);
                }
            }, 0);
        }
        else {
            JsStoreWorker.KeyStore.init();
        }
    };
    ConnectionHelper.prototype.onMessageFromWorker_ = function (msg) {
        this.processFinishedQuery_(msg.data);
    };
    ConnectionHelper.prototype.processFinishedQuery_ = function (message) {
        var finishedRequest = this.requestQueue_.shift();
        if (finishedRequest) {
            log_helper_LogHelper.log("request " + finishedRequest.name + " finished");
            if (message.errorOccured) {
                finishedRequest.onError(message.errorDetails);
            }
            else {
                switch (finishedRequest.name) {
                    case API.OpenDb:
                    case API.InitDb:
                        this.isDbOpened_ = true;
                        break;
                    case API.Terminate:
                        this.isDbOpened_ = false;
                        if (Config.isRuningInWorker === true) {
                            this.worker_.terminate();
                        }
                        break;
                    case API.CloseDb:
                        if (this.requestQueue_.length > 0) {
                            this.openDb_();
                        }
                        else {
                            this.isDbIdle_ = true;
                            this.callEvent(EVENT.RequestQueueEmpty, []);
                        }
                        break;
                }
                finishedRequest.onSuccess(message.returnedValue);
            }
            this.isCodeExecuting_ = false;
            this.executeQry_();
        }
    };
    ConnectionHelper.prototype.openDb_ = function () {
        this.initKeyStore_();
        this.prcoessExecutionOfQry_({
            name: API.OpenDb,
            query: this.activeDbName,
            onSuccess: function () {
            },
            onError: function (err) {
                console.error(err);
            }
        }, 1);
    };
    ConnectionHelper.prototype.executeMiddleware_ = function (input) {
        var _this = this;
        return new Promise(function (res) {
            var index = 0;
            var lastIndex = _this.middlewares.length - 1;
            var callNextMiddleware = function () {
                if (index <= lastIndex) {
                    _this.middlewares[index++](input, callNextMiddleware);
                }
                else {
                    res();
                }
            };
            callNextMiddleware();
        });
    };
    ConnectionHelper.prototype.pushApi = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.executeMiddleware_(request).then(function () {
                request.onSuccess = resolve;
                request.onError = reject;
                if (_this.requestQueue_.length === 0) {
                    _this.callEvent(EVENT.RequestQueueFilled, []);
                    if (_this.isDbIdle_ === true && _this.isDbOpened_ === true) {
                        _this.openDb_();
                    }
                    else {
                        clearTimeout(_this.inactivityTimer_);
                        _this.initKeyStore_();
                    }
                }
                _this.prcoessExecutionOfQry_(request);
            }).catch(reject);
        });
    };
    ConnectionHelper.prototype.prcoessExecutionOfQry_ = function (request, index) {
        this.isDbIdle_ = false;
        if (index != null) {
            this.requestQueue_.splice(index, 0, request);
        }
        else {
            this.requestQueue_.push(request);
        }
        log_helper_LogHelper.log("request pushed: " + request.name);
        this.executeQry_();
    };
    ConnectionHelper.prototype.executeQry_ = function () {
        var _this = this;
        var requestQueueLength = this.requestQueue_.length;
        if (!this.isCodeExecuting_ && requestQueueLength > 0) {
            if (this.isDbOpened_ === true) {
                this.sendRequestToWorker_(this.requestQueue_[0]);
                return;
            }
            var allowedQueryIndex = this.requestQueue_.findIndex(function (item) { return _this.whiteListApi_.indexOf(item.name) >= 0; });
            // shift allowed query to zeroth index
            if (allowedQueryIndex >= 0) {
                this.requestQueue_.splice(0, 0, this.requestQueue_.splice(allowedQueryIndex, 1)[0]);
                this.sendRequestToWorker_(this.requestQueue_[0]);
            }
        }
        else if (requestQueueLength === 0 && this.isDbIdle_ === false && this.isDbOpened_) {
            this.inactivityTimer_ = setTimeout(function () {
                _this.prcoessExecutionOfQry_({
                    name: API.CloseDb,
                    onSuccess: function () {
                    },
                    onError: function (err) {
                        console.error(err);
                    }
                });
            }, 100);
        }
    };
    ConnectionHelper.prototype.sendRequestToWorker_ = function (request) {
        this.isCodeExecuting_ = true;
        var requestForWorker = {
            name: request.name,
            query: request.query
        };
        if (Config.isRuningInWorker === true) {
            this.worker_.postMessage(requestForWorker);
        }
        else {
            new JsStoreWorker.QueryExecutor(this.processFinishedQuery_.bind(this)).checkConnectionAndExecuteLogic(requestForWorker);
        }
    };
    ConnectionHelper.prototype.callEvent = function (event, args) {
        var events = this.eventQueue.filter(function (ev) {
            if (ev.event === event) {
                return ev;
            }
        });
        events.forEach(function (ev) {
            ev.callback.apply(ev, args);
        });
    };
    return ConnectionHelper;
}());


// CONCATENATED MODULE: ./src/main/connection.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var connection_Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection(worker) {
        return _super.call(this, worker) || this;
    }
    /**
     * open database
     *
     * @param {string} dbName
     * @returns
     * @memberof Connection
     */
    Connection.prototype.openDb = function (dbName) {
        this.activeDbName = dbName;
        return this.pushApi({
            name: API.OpenDb,
            query: dbName
        });
    };
    /**
     * creates DataBase
     *
     * @param {IDataBase} dataBase
     * @returns
     * @memberof Connection
     */
    Connection.prototype.initDb = function (dataBase) {
        this.activeDbName = dataBase.name;
        return this.pushApi({
            name: API.InitDb,
            query: dataBase
        });
    };
    /**
     * drop dataBase
     *
     * @returns
     * @memberof Connection
     */
    Connection.prototype.dropDb = function () {
        return this.pushApi({
            name: API.DropDb
        });
    };
    /**
     * select data from table
     *
     * @template T
     * @param {SelectQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.select = function (query) {
        return this.pushApi({
            name: API.Select,
            query: query
        });
    };
    /**
     * get no of record from table
     *
     * @param {CountQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.count = function (query) {
        return this.pushApi({
            name: API.Count,
            query: query
        });
    };
    /**
     * insert data into table
     *
     * @template T
     * @param {InsertQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.insert = function (query) {
        return this.pushApi({
            name: API.Insert,
            query: query
        });
    };
    /**
     * update data into table
     *
     * @param {UpdateQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.update = function (query) {
        return this.pushApi({
            name: API.Update,
            query: query
        });
    };
    /**
     * remove data from table
     *
     * @param {RemoveQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.remove = function (query) {
        return this.pushApi({
            name: API.Remove,
            query: query
        });
    };
    /**
     * delete all data from table
     *
     * @param {string} tableName
     * @returns
     * @memberof Connection
     */
    Connection.prototype.clear = function (tableName) {
        return this.pushApi({
            name: API.Clear,
            query: tableName
        });
    };
    /**
     * set log status
     *
     * @param {boolean} status
     * @memberof Connection
     */
    Connection.prototype.setLogStatus = function (status) {
        Config.isLogEnabled = status ? status : Config.isLogEnabled;
        this.pushApi({
            name: API.ChangeLogStatus,
            query: Config.isLogEnabled
        });
    };
    /**
     * get version of database
     *
     * @param {(string | DbInfo)} dbName
     * @returns
     * @memberof Connection
     */
    Connection.prototype.getDbVersion = function (dbName) {
        return this.pushApi({
            name: API.GetDbVersion,
            query: dbName
        });
    };
    /**
     * is database exist
     *
     * @param {(DbInfo | string)} dbInfo
     * @returns
     * @memberof Connection
     */
    Connection.prototype.isDbExist = function (dbInfo) {
        return this.pushApi({
            name: API.IsDbExist,
            query: dbInfo
        });
    };
    /**
     * returns list of database created
     *
     * @returns
     * @memberof Connection
     */
    Connection.prototype.getDbList = function () {
        return this.pushApi({
            name: API.GetDbList,
            query: null
        });
    };
    /**
     * get Database Schema
     *
     * @param {string} dbName
     * @returns
     * @memberof Connection
     */
    Connection.prototype.getDbSchema = function (dbName) {
        return this.pushApi({
            name: API.GetDbSchema,
            query: dbName
        });
    };
    /**
     * get the value from keystore table
     *
     * @template T
     * @param {string} key
     * @returns
     * @memberof Connection
     */
    Connection.prototype.get = function (key) {
        return this.pushApi({
            name: API.Get,
            query: key
        });
    };
    /**
     * set the value in keystore table
     *
     * @param {string} key
     * @param {*} value
     * @returns
     * @memberof Connection
     */
    Connection.prototype.set = function (key, value) {
        return this.pushApi({
            name: API.Set,
            query: {
                key: key, value: value
            }
        });
    };
    /**
     * terminate the connection
     *
     * @returns
     * @memberof Connection
     */
    Connection.prototype.terminate = function () {
        return this.pushApi({
            name: API.Terminate
        });
    };
    /**
     * execute transaction
     *
     * @template T
     * @param {TranscationQuery} query
     * @returns
     * @memberof Connection
     */
    Connection.prototype.transaction = function (query) {
        return this.pushApi({
            name: API.Transaction,
            query: query
        });
    };
    Connection.prototype.on = function (event, eventCallBack) {
        this.eventQueue.push({
            event: event,
            callback: eventCallBack
        });
    };
    Connection.prototype.off = function (event, eventCallBack) {
        var _this = this;
        var indexes = this.eventQueue.map(function (ev, i) {
            if (ev.event === event) {
                return i;
            }
        });
        indexes.forEach(function (i) {
            _this.eventQueue.splice(i, 0);
        });
    };
    Connection.prototype.union = function (query) {
        return this.pushApi({
            name: API.Union,
            query: query
        });
    };
    Connection.prototype.intersect = function (query) {
        return this.pushApi({
            name: API.Intersect,
            query: query
        });
    };
    Connection.prototype.addPlugin = function (plugin, params) {
        plugin.setup(this, params);
    };
    Connection.prototype.addMiddleware = function (middleware) {
        this.middlewares.push(middleware);
    };
    /**
     * import scripts in jsstore web worker.
     * Scripts method can be called using transaction api.
     *
     * @param {...string[]} urls
     * @returns
     * @memberof Connection
     */
    Connection.prototype.importScripts = function () {
        var urls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            urls[_i] = arguments[_i];
        }
        return this.pushApi({
            name: API.ImportScripts,
            query: urls
        });
    };
    return Connection;
}(connection_helper_ConnectionHelper));


// CONCATENATED MODULE: ./src/main/instance.ts

var instance_Instance = /** @class */ (function () {
    function Instance(worker) {
        console.warn('Instance is obsolete, please use Connection. Refer - https://jsstore.net/tutorial/connection/');
        return new connection_Connection(worker);
    }
    return Instance;
}());


// CONCATENATED MODULE: ./src/main/helper.ts

/**
 * Enable log
 *
 */
var enableLog = function () {
    Config.isLogEnabled = true;
};

// CONCATENATED MODULE: ./src/main/index.ts







/***/ })
/******/ ]);
//# sourceMappingURL=jsstore.commonjs2.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=webStorer.map