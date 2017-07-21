webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function __assignFn(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
}
function __extendsFn(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __decorateFn(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __metadataFn(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
}
function __paramFn(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function __awaiterFn(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator.throw(value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}
// hook global helpers
(function (__global) {
    __global.__assign = (__global && __global.__assign) || Object.assign || __assignFn;
    __global.__extends = (__global && __global.__extends) || __extendsFn;
    __global.__decorate = (__global && __global.__decorate) || __decorateFn;
    __global.__metadata = (__global && __global.__metadata) || __metadataFn;
    __global.__param = (__global && __global.__param) || __paramFn;
    __global.__awaiter = (__global && __global.__awaiter) || __awaiterFn;
})(typeof window !== "undefined" ? window :
    typeof WorkerGlobalScope !== "undefined" ? self :
        typeof global !== "undefined" ? global :
            Function("return this;")());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
__webpack_require__(50);
__webpack_require__(100);
module.exports = __webpack_require__(52);


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * core-js 2.4.1
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2016 Denis Pushkarev
 */
!function(__e, __g, undefined){
'use strict';
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

	__webpack_require__(1);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(83);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(163);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(185);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(196);
	__webpack_require__(203);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(209);
	__webpack_require__(210);
	__webpack_require__(211);
	__webpack_require__(212);
	__webpack_require__(213);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(216);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(231);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	module.exports = __webpack_require__(288);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(2)
	  , has            = __webpack_require__(3)
	  , DESCRIPTORS    = __webpack_require__(4)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(16)
	  , META           = __webpack_require__(20).KEY
	  , $fails         = __webpack_require__(5)
	  , shared         = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(22)
	  , uid            = __webpack_require__(17)
	  , wks            = __webpack_require__(23)
	  , wksExt         = __webpack_require__(24)
	  , wksDefine      = __webpack_require__(25)
	  , keyOf          = __webpack_require__(27)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(43)
	  , anObject       = __webpack_require__(10)
	  , toIObject      = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(14)
	  , createDesc     = __webpack_require__(15)
	  , _create        = __webpack_require__(44)
	  , gOPNExt        = __webpack_require__(47)
	  , $GOPD          = __webpack_require__(49)
	  , $DP            = __webpack_require__(9)
	  , $keys          = __webpack_require__(28)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(48).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(42).f  = $propertyIsEnumerable;
	  __webpack_require__(41).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(26)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 3 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(5)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(2)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(16)
	  , ctx       = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(9)
	  , createDesc = __webpack_require__(15);
	module.exports = __webpack_require__(4) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(10)
	  , IE8_DOM_DEFINE = __webpack_require__(12)
	  , toPrimitive    = __webpack_require__(14)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(4) && !__webpack_require__(5)(function(){
	  return Object.defineProperty(__webpack_require__(13)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , document = __webpack_require__(2).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(11);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(2)
	  , hide      = __webpack_require__(8)
	  , has       = __webpack_require__(3)
	  , SRC       = __webpack_require__(17)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(17)('meta')
	  , isObject = __webpack_require__(11)
	  , has      = __webpack_require__(3)
	  , setDesc  = __webpack_require__(9).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(5)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(2)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(9).f
	  , has = __webpack_require__(3)
	  , TAG = __webpack_require__(23)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(21)('wks')
	  , uid        = __webpack_require__(17)
	  , Symbol     = __webpack_require__(2).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(23);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(2)
	  , core           = __webpack_require__(7)
	  , LIBRARY        = __webpack_require__(26)
	  , wksExt         = __webpack_require__(24)
	  , defineProperty = __webpack_require__(9).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(28)
	  , toIObject = __webpack_require__(30);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(29)
	  , enumBugKeys = __webpack_require__(39);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(3)
	  , toIObject    = __webpack_require__(30)
	  , arrayIndexOf = __webpack_require__(34)(false)
	  , IE_PROTO     = __webpack_require__(38)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(31)
	  , defined = __webpack_require__(33);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(32);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(30)
	  , toLength  = __webpack_require__(35)
	  , toIndex   = __webpack_require__(37);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(36)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(21)('keys')
	  , uid    = __webpack_require__(17);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(28)
	  , gOPS    = __webpack_require__(41)
	  , pIE     = __webpack_require__(42);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 42 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(32);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(10)
	  , dPs         = __webpack_require__(45)
	  , enumBugKeys = __webpack_require__(39)
	  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(13)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(9)
	  , anObject = __webpack_require__(10)
	  , getKeys  = __webpack_require__(28);

	module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(30)
	  , gOPN      = __webpack_require__(48).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(29)
	  , hiddenKeys = __webpack_require__(39).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(42)
	  , createDesc     = __webpack_require__(15)
	  , toIObject      = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(14)
	  , has            = __webpack_require__(3)
	  , IE8_DOM_DEFINE = __webpack_require__(12)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(4), 'Object', {defineProperty: __webpack_require__(9).f});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(4), 'Object', {defineProperties: __webpack_require__(45)});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(30)
	  , $getOwnPropertyDescriptor = __webpack_require__(49).f;

	__webpack_require__(53)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(5);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(44)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(56)
	  , $getPrototypeOf = __webpack_require__(57);

	__webpack_require__(53)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(33);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(3)
	  , toObject    = __webpack_require__(56)
	  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(56)
	  , $keys    = __webpack_require__(28);

	__webpack_require__(53)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(53)('getOwnPropertyNames', function(){
	  return __webpack_require__(47).f;
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(11)
	  , meta     = __webpack_require__(20).onFreeze;

	__webpack_require__(53)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(11)
	  , meta     = __webpack_require__(20).onFreeze;

	__webpack_require__(53)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(11)
	  , meta     = __webpack_require__(20).onFreeze;

	__webpack_require__(53)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(11);

	__webpack_require__(53)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(11);

	__webpack_require__(53)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(11);

	__webpack_require__(53)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(67)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(28)
	  , gOPS     = __webpack_require__(41)
	  , pIE      = __webpack_require__(42)
	  , toObject = __webpack_require__(56)
	  , IObject  = __webpack_require__(31)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(5)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {is: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(71).set});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(11)
	  , anObject = __webpack_require__(10);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(18)(Function.call, __webpack_require__(49).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(73)
	  , test    = {};
	test[__webpack_require__(23)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(16)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(32)
	  , TAG = __webpack_require__(23)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(6);

	$export($export.P, 'Function', {bind: __webpack_require__(75)});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(19)
	  , isObject   = __webpack_require__(11)
	  , invoke     = __webpack_require__(76)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(9).f
	  , createDesc = __webpack_require__(15)
	  , has        = __webpack_require__(3)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(4) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(11)
	  , getPrototypeOf = __webpack_require__(57)
	  , HAS_INSTANCE   = __webpack_require__(23)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(9).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(2)
	  , has               = __webpack_require__(3)
	  , cof               = __webpack_require__(32)
	  , inheritIfRequired = __webpack_require__(80)
	  , toPrimitive       = __webpack_require__(14)
	  , fails             = __webpack_require__(5)
	  , gOPN              = __webpack_require__(48).f
	  , gOPD              = __webpack_require__(49).f
	  , dP                = __webpack_require__(9).f
	  , $trim             = __webpack_require__(81).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(44)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(4) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(16)(global, NUMBER, $Number);
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(11)
	  , setPrototypeOf = __webpack_require__(71).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	  , defined = __webpack_require__(33)
	  , fails   = __webpack_require__(5)
	  , spaces  = __webpack_require__(82)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(6)
	  , toInteger    = __webpack_require__(36)
	  , aNumberValue = __webpack_require__(84)
	  , repeat       = __webpack_require__(85)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(5)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(32);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(36)
	  , defined   = __webpack_require__(33);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(6)
	  , $fails       = __webpack_require__(5)
	  , aNumberValue = __webpack_require__(84)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(6);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(6)
	  , _isFinite = __webpack_require__(2).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(6);

	$export($export.S, 'Number', {isInteger: __webpack_require__(90)});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(11)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(6);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(6)
	  , isInteger = __webpack_require__(90)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(6);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(6);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(6)
	  , $parseFloat = __webpack_require__(96);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(2).parseFloat
	  , $trim       = __webpack_require__(81).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(82) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(6)
	  , $parseInt = __webpack_require__(98);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(2).parseInt
	  , $trim     = __webpack_require__(81).trim
	  , ws        = __webpack_require__(82)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(6)
	  , $parseInt = __webpack_require__(98);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(6)
	  , $parseFloat = __webpack_require__(96);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(6)
	  , log1p   = __webpack_require__(102)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(6)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(6)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(6)
	  , sign    = __webpack_require__(106);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(6)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(6)
	  , $expm1  = __webpack_require__(110);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 110 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(6)
	  , sign      = __webpack_require__(106)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(6)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(6)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(5)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {log1p: __webpack_require__(102)});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {sign: __webpack_require__(106)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(6)
	  , expm1   = __webpack_require__(110)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(5)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(6)
	  , expm1   = __webpack_require__(110)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(6)
	  , toIndex        = __webpack_require__(37)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(6)
	  , toIObject = __webpack_require__(30)
	  , toLength  = __webpack_require__(35);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(81)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $at     = __webpack_require__(125)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , defined   = __webpack_require__(33);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(6)
	  , toLength  = __webpack_require__(35)
	  , context   = __webpack_require__(127)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(129)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(128)
	  , defined  = __webpack_require__(33);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(11)
	  , cof      = __webpack_require__(32)
	  , MATCH    = __webpack_require__(23)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(23)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(6)
	  , context  = __webpack_require__(127)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(129)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(85)
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(6)
	  , toLength    = __webpack_require__(35)
	  , context     = __webpack_require__(127)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(129)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(125)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(134)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(26)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(16)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(3)
	  , Iterators      = __webpack_require__(135)
	  , $iterCreate    = __webpack_require__(136)
	  , setToStringTag = __webpack_require__(22)
	  , getPrototypeOf = __webpack_require__(57)
	  , ITERATOR       = __webpack_require__(23)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(44)
	  , descriptor     = __webpack_require__(15)
	  , setToStringTag = __webpack_require__(22)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(23)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(138)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	  , fails   = __webpack_require__(5)
	  , defined = __webpack_require__(33)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(138)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(138)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(138)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(138)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(138)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(138)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(138)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(138)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(138)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(138)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(138)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(138)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(6);

	$export($export.S, 'Array', {isArray: __webpack_require__(43)});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(18)
	  , $export        = __webpack_require__(6)
	  , toObject       = __webpack_require__(56)
	  , call           = __webpack_require__(153)
	  , isArrayIter    = __webpack_require__(154)
	  , toLength       = __webpack_require__(35)
	  , createProperty = __webpack_require__(155)
	  , getIterFn      = __webpack_require__(156);

	$export($export.S + $export.F * !__webpack_require__(157)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(10);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(135)
	  , ITERATOR   = __webpack_require__(23)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(9)
	  , createDesc      = __webpack_require__(15);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(73)
	  , ITERATOR  = __webpack_require__(23)('iterator')
	  , Iterators = __webpack_require__(135);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(23)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(6)
	  , createProperty = __webpack_require__(155);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(5)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(6)
	  , toIObject = __webpack_require__(30)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(31) != Object || !__webpack_require__(160)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(5);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(6)
	  , html       = __webpack_require__(46)
	  , cof        = __webpack_require__(32)
	  , toIndex    = __webpack_require__(37)
	  , toLength   = __webpack_require__(35)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(5)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(6)
	  , aFunction = __webpack_require__(19)
	  , toObject  = __webpack_require__(56)
	  , fails     = __webpack_require__(5)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(160)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(6)
	  , $forEach = __webpack_require__(164)(0)
	  , STRICT   = __webpack_require__(160)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(18)
	  , IObject  = __webpack_require__(31)
	  , toObject = __webpack_require__(56)
	  , toLength = __webpack_require__(35)
	  , asc      = __webpack_require__(165);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(166);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , isArray  = __webpack_require__(43)
	  , SPECIES  = __webpack_require__(23)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $map    = __webpack_require__(164)(1);

	$export($export.P + $export.F * !__webpack_require__(160)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $filter = __webpack_require__(164)(2);

	$export($export.P + $export.F * !__webpack_require__(160)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $some   = __webpack_require__(164)(3);

	$export($export.P + $export.F * !__webpack_require__(160)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $every  = __webpack_require__(164)(4);

	$export($export.P + $export.F * !__webpack_require__(160)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $reduce = __webpack_require__(172);

	$export($export.P + $export.F * !__webpack_require__(160)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(19)
	  , toObject  = __webpack_require__(56)
	  , IObject   = __webpack_require__(31)
	  , toLength  = __webpack_require__(35);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(6)
	  , $reduce = __webpack_require__(172);

	$export($export.P + $export.F * !__webpack_require__(160)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(6)
	  , $indexOf      = __webpack_require__(34)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(160)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(6)
	  , toIObject     = __webpack_require__(30)
	  , toInteger     = __webpack_require__(36)
	  , toLength      = __webpack_require__(35)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(160)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(6);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(177)});

	__webpack_require__(178)('copyWithin');

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(56)
	  , toIndex  = __webpack_require__(37)
	  , toLength = __webpack_require__(35);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(23)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(6);

	$export($export.P, 'Array', {fill: __webpack_require__(180)});

	__webpack_require__(178)('fill');

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(56)
	  , toIndex  = __webpack_require__(37)
	  , toLength = __webpack_require__(35);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(6)
	  , $find   = __webpack_require__(164)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(178)(KEY);

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(6)
	  , $find   = __webpack_require__(164)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(178)(KEY);

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(178)
	  , step             = __webpack_require__(184)
	  , Iterators        = __webpack_require__(135)
	  , toIObject        = __webpack_require__(30);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(134)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(186)('Array');

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(2)
	  , dP          = __webpack_require__(9)
	  , DESCRIPTORS = __webpack_require__(4)
	  , SPECIES     = __webpack_require__(23)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(2)
	  , inheritIfRequired = __webpack_require__(80)
	  , dP                = __webpack_require__(9).f
	  , gOPN              = __webpack_require__(48).f
	  , isRegExp          = __webpack_require__(128)
	  , $flags            = __webpack_require__(188)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(4) && (!CORRECT_NEW || __webpack_require__(5)(function(){
	  re2[__webpack_require__(23)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(16)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(186)('RegExp');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(10);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(190);
	var anObject    = __webpack_require__(10)
	  , $flags      = __webpack_require__(188)
	  , DESCRIPTORS = __webpack_require__(4)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(16)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(5)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(4) && /./g.flags != 'g')__webpack_require__(9).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(188)
	});

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(192)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(16)
	  , fails    = __webpack_require__(5)
	  , defined  = __webpack_require__(33)
	  , wks      = __webpack_require__(23);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(192)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(192)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(192)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(128)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(26)
	  , global             = __webpack_require__(2)
	  , ctx                = __webpack_require__(18)
	  , classof            = __webpack_require__(73)
	  , $export            = __webpack_require__(6)
	  , isObject           = __webpack_require__(11)
	  , aFunction          = __webpack_require__(19)
	  , anInstance         = __webpack_require__(197)
	  , forOf              = __webpack_require__(198)
	  , speciesConstructor = __webpack_require__(199)
	  , task               = __webpack_require__(200).set
	  , microtask          = __webpack_require__(201)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(23)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(202)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(22)($Promise, PROMISE);
	__webpack_require__(186)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(157)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(18)
	  , call        = __webpack_require__(153)
	  , isArrayIter = __webpack_require__(154)
	  , anObject    = __webpack_require__(10)
	  , toLength    = __webpack_require__(35)
	  , getIterFn   = __webpack_require__(156)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(10)
	  , aFunction = __webpack_require__(19)
	  , SPECIES   = __webpack_require__(23)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(18)
	  , invoke             = __webpack_require__(76)
	  , html               = __webpack_require__(46)
	  , cel                = __webpack_require__(13)
	  , global             = __webpack_require__(2)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(32)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(2)
	  , macrotask = __webpack_require__(200).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(32)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(16);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(204);

	// 23.1 Map Objects
	module.exports = __webpack_require__(205)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(9).f
	  , create      = __webpack_require__(44)
	  , redefineAll = __webpack_require__(202)
	  , ctx         = __webpack_require__(18)
	  , anInstance  = __webpack_require__(197)
	  , defined     = __webpack_require__(33)
	  , forOf       = __webpack_require__(198)
	  , $iterDefine = __webpack_require__(134)
	  , step        = __webpack_require__(184)
	  , setSpecies  = __webpack_require__(186)
	  , DESCRIPTORS = __webpack_require__(4)
	  , fastKey     = __webpack_require__(20).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(2)
	  , $export           = __webpack_require__(6)
	  , redefine          = __webpack_require__(16)
	  , redefineAll       = __webpack_require__(202)
	  , meta              = __webpack_require__(20)
	  , forOf             = __webpack_require__(198)
	  , anInstance        = __webpack_require__(197)
	  , isObject          = __webpack_require__(11)
	  , fails             = __webpack_require__(5)
	  , $iterDetect       = __webpack_require__(157)
	  , setToStringTag    = __webpack_require__(22)
	  , inheritIfRequired = __webpack_require__(80);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(204);

	// 23.2 Set Objects
	module.exports = __webpack_require__(205)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(164)(0)
	  , redefine     = __webpack_require__(16)
	  , meta         = __webpack_require__(20)
	  , assign       = __webpack_require__(67)
	  , weak         = __webpack_require__(208)
	  , isObject     = __webpack_require__(11)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(205)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(202)
	  , getWeak           = __webpack_require__(20).getWeak
	  , anObject          = __webpack_require__(10)
	  , isObject          = __webpack_require__(11)
	  , anInstance        = __webpack_require__(197)
	  , forOf             = __webpack_require__(198)
	  , createArrayMethod = __webpack_require__(164)
	  , $has              = __webpack_require__(3)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(208);

	// 23.4 WeakSet Objects
	__webpack_require__(205)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(6)
	  , aFunction = __webpack_require__(19)
	  , anObject  = __webpack_require__(10)
	  , rApply    = (__webpack_require__(2).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(5)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(6)
	  , create     = __webpack_require__(44)
	  , aFunction  = __webpack_require__(19)
	  , anObject   = __webpack_require__(10)
	  , isObject   = __webpack_require__(11)
	  , fails      = __webpack_require__(5)
	  , bind       = __webpack_require__(75)
	  , rConstruct = (__webpack_require__(2).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(9)
	  , $export     = __webpack_require__(6)
	  , anObject    = __webpack_require__(10)
	  , toPrimitive = __webpack_require__(14);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(5)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(6)
	  , gOPD     = __webpack_require__(49).f
	  , anObject = __webpack_require__(10);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(6)
	  , anObject = __webpack_require__(10);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(136)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(57)
	  , has            = __webpack_require__(3)
	  , $export        = __webpack_require__(6)
	  , isObject       = __webpack_require__(11)
	  , anObject       = __webpack_require__(10);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(49)
	  , $export  = __webpack_require__(6)
	  , anObject = __webpack_require__(10);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(6)
	  , getProto = __webpack_require__(57)
	  , anObject = __webpack_require__(10);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(6);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(6)
	  , anObject      = __webpack_require__(10)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(6);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(221)});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(48)
	  , gOPS     = __webpack_require__(41)
	  , anObject = __webpack_require__(10)
	  , Reflect  = __webpack_require__(2).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(6)
	  , anObject           = __webpack_require__(10)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(9)
	  , gOPD           = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(57)
	  , has            = __webpack_require__(3)
	  , $export        = __webpack_require__(6)
	  , createDesc     = __webpack_require__(15)
	  , anObject       = __webpack_require__(10)
	  , isObject       = __webpack_require__(11);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(6)
	  , setProto = __webpack_require__(71);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(6);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(6)
	  , toObject    = __webpack_require__(56)
	  , toPrimitive = __webpack_require__(14);

	$export($export.P + $export.F * __webpack_require__(5)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(6)
	  , fails   = __webpack_require__(5)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(16)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(23)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(8)(proto, TO_PRIMITIVE, __webpack_require__(230));

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(10)
	  , toPrimitive = __webpack_require__(14)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(6)
	  , $typed       = __webpack_require__(232)
	  , buffer       = __webpack_require__(233)
	  , anObject     = __webpack_require__(10)
	  , toIndex      = __webpack_require__(37)
	  , toLength     = __webpack_require__(35)
	  , isObject     = __webpack_require__(11)
	  , ArrayBuffer  = __webpack_require__(2).ArrayBuffer
	  , speciesConstructor = __webpack_require__(199)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(5)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(186)(ARRAY_BUFFER);

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(2)
	  , hide   = __webpack_require__(8)
	  , uid    = __webpack_require__(17)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(2)
	  , DESCRIPTORS    = __webpack_require__(4)
	  , LIBRARY        = __webpack_require__(26)
	  , $typed         = __webpack_require__(232)
	  , hide           = __webpack_require__(8)
	  , redefineAll    = __webpack_require__(202)
	  , fails          = __webpack_require__(5)
	  , anInstance     = __webpack_require__(197)
	  , toInteger      = __webpack_require__(36)
	  , toLength       = __webpack_require__(35)
	  , gOPN           = __webpack_require__(48).f
	  , dP             = __webpack_require__(9).f
	  , arrayFill      = __webpack_require__(180)
	  , setToStringTag = __webpack_require__(22)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	$export($export.G + $export.W + $export.F * !__webpack_require__(232).ABV, {
	  DataView: __webpack_require__(233).DataView
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(4)){
	  var LIBRARY             = __webpack_require__(26)
	    , global              = __webpack_require__(2)
	    , fails               = __webpack_require__(5)
	    , $export             = __webpack_require__(6)
	    , $typed              = __webpack_require__(232)
	    , $buffer             = __webpack_require__(233)
	    , ctx                 = __webpack_require__(18)
	    , anInstance          = __webpack_require__(197)
	    , propertyDesc        = __webpack_require__(15)
	    , hide                = __webpack_require__(8)
	    , redefineAll         = __webpack_require__(202)
	    , toInteger           = __webpack_require__(36)
	    , toLength            = __webpack_require__(35)
	    , toIndex             = __webpack_require__(37)
	    , toPrimitive         = __webpack_require__(14)
	    , has                 = __webpack_require__(3)
	    , same                = __webpack_require__(69)
	    , classof             = __webpack_require__(73)
	    , isObject            = __webpack_require__(11)
	    , toObject            = __webpack_require__(56)
	    , isArrayIter         = __webpack_require__(154)
	    , create              = __webpack_require__(44)
	    , getPrototypeOf      = __webpack_require__(57)
	    , gOPN                = __webpack_require__(48).f
	    , getIterFn           = __webpack_require__(156)
	    , uid                 = __webpack_require__(17)
	    , wks                 = __webpack_require__(23)
	    , createArrayMethod   = __webpack_require__(164)
	    , createArrayIncludes = __webpack_require__(34)
	    , speciesConstructor  = __webpack_require__(199)
	    , ArrayIterators      = __webpack_require__(183)
	    , Iterators           = __webpack_require__(135)
	    , $iterDetect         = __webpack_require__(157)
	    , setSpecies          = __webpack_require__(186)
	    , arrayFill           = __webpack_require__(180)
	    , arrayCopyWithin     = __webpack_require__(177)
	    , $DP                 = __webpack_require__(9)
	    , $GOPD               = __webpack_require__(49)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(6)
	  , $includes = __webpack_require__(34)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(178)('includes');

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(6)
	  , $at     = __webpack_require__(125)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(6)
	  , $pad    = __webpack_require__(248);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(35)
	  , repeat   = __webpack_require__(85)
	  , defined  = __webpack_require__(33);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(6)
	  , $pad    = __webpack_require__(248);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(81)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(81)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(6)
	  , defined     = __webpack_require__(33)
	  , toLength    = __webpack_require__(35)
	  , isRegExp    = __webpack_require__(128)
	  , getFlags    = __webpack_require__(188)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(136)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25)('asyncIterator');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25)('observable');

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(6)
	  , ownKeys        = __webpack_require__(221)
	  , toIObject      = __webpack_require__(30)
	  , gOPD           = __webpack_require__(49)
	  , createProperty = __webpack_require__(155);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(6)
	  , $values = __webpack_require__(257)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(28)
	  , toIObject = __webpack_require__(30)
	  , isEnum    = __webpack_require__(42).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(6)
	  , $entries = __webpack_require__(257)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(6)
	  , toObject        = __webpack_require__(56)
	  , aFunction       = __webpack_require__(19)
	  , $defineProperty = __webpack_require__(9);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(26)|| !__webpack_require__(5)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(2)[K];
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(6)
	  , toObject        = __webpack_require__(56)
	  , aFunction       = __webpack_require__(19)
	  , $defineProperty = __webpack_require__(9);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(6)
	  , toObject                 = __webpack_require__(56)
	  , toPrimitive              = __webpack_require__(14)
	  , getPrototypeOf           = __webpack_require__(57)
	  , getOwnPropertyDescriptor = __webpack_require__(49).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(6)
	  , toObject                 = __webpack_require__(56)
	  , toPrimitive              = __webpack_require__(14)
	  , getPrototypeOf           = __webpack_require__(57)
	  , getOwnPropertyDescriptor = __webpack_require__(49).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(4) && $export($export.P + __webpack_require__(260), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(6);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(265)('Map')});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(73)
	  , from    = __webpack_require__(266);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(198);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(6);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(265)('Set')});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(6);

	$export($export.S, 'System', {global: __webpack_require__(2)});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(6)
	  , cof     = __webpack_require__(32);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(6);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(275)
	  , anObject                  = __webpack_require__(10)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(203)
	  , $export = __webpack_require__(6)
	  , shared  = __webpack_require__(21)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(207)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(275)
	  , anObject               = __webpack_require__(10)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(275)
	  , anObject               = __webpack_require__(10)
	  , getPrototypeOf         = __webpack_require__(57)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(206)
	  , from                    = __webpack_require__(266)
	  , metadata                = __webpack_require__(275)
	  , anObject                = __webpack_require__(10)
	  , getPrototypeOf          = __webpack_require__(57)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(275)
	  , anObject               = __webpack_require__(10)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(275)
	  , anObject                = __webpack_require__(10)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(275)
	  , anObject               = __webpack_require__(10)
	  , getPrototypeOf         = __webpack_require__(57)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(275)
	  , anObject               = __webpack_require__(10)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(275)
	  , anObject                  = __webpack_require__(10)
	  , aFunction                 = __webpack_require__(19)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(6)
	  , microtask = __webpack_require__(201)()
	  , process   = __webpack_require__(2).process
	  , isNode    = __webpack_require__(32)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(6)
	  , global      = __webpack_require__(2)
	  , core        = __webpack_require__(7)
	  , microtask   = __webpack_require__(201)()
	  , OBSERVABLE  = __webpack_require__(23)('observable')
	  , aFunction   = __webpack_require__(19)
	  , anObject    = __webpack_require__(10)
	  , anInstance  = __webpack_require__(197)
	  , redefineAll = __webpack_require__(202)
	  , hide        = __webpack_require__(8)
	  , forOf       = __webpack_require__(198)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(186)('Observable');

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	  , $task   = __webpack_require__(200);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(183)
	  , redefine      = __webpack_require__(16)
	  , global        = __webpack_require__(2)
	  , hide          = __webpack_require__(8)
	  , Iterators     = __webpack_require__(135)
	  , wks           = __webpack_require__(23)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(2)
	  , $export    = __webpack_require__(6)
	  , invoke     = __webpack_require__(76)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(76)
	  , aFunction = __webpack_require__(19);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ }
/******/ ]);
// CommonJS export
if(typeof module != 'undefined' && module.exports)module.exports = __e;
// RequireJS export
else if(true)!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return __e}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// Export to global object
else __g.core = __e;
}(1, 1);

/***/ })

},[406]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3RzLWhlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2NsaWVudC9zaGltLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0M7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFdBQVcsZUFBZTtBQUNoQztBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBLE9BQU87QUFDUDtBQUNBOztB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07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LE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTs7QUFFRixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEVBQUU7O0FBRUYsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLE9BQU87QUFDUDtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNLFVBQVU7QUFDaEIsSUFBSTtBQUNKOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsNEZBQTRGO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEVBQUU7O0FBRUY7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7QUFDbkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFD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Q0EsRUFBRTs7QUFFRixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYs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LEVBQUU7O0FBRUYsb0RBQW9ELGFBQWEsRUFBRTs7QUFFbkUscUJBQXFCLHdCQUF3Qjs7QUFFN0M7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlHQUF5RyxPQUFPO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQW9FLFdBQVc7QUFBQTtBQUMvRTtBQUNBO0FBQ0EsQ0FBQyxPIiwiZmlsZSI6InBvbHlmaWxscy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfX2Fzc2lnbkZuKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKVxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfX2V4dGVuZHNGbihkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKVxuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSlcbiAgICAgICAgICAgIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cbmZ1bmN0aW9uIF9fZGVjb3JhdGVGbihkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlXG4gICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgICAgICAgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKVxuICAgICAgICAgICAgICAgIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5mdW5jdGlvbiBfX21ldGFkYXRhRm4oaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn1cbmZ1bmN0aW9uIF9fcGFyYW1GbihwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH07XG59XG5mdW5jdGlvbiBfX2F3YWl0ZXJGbih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7XG4gICAgICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7XG4gICAgICAgICAgICBzdGVwKGdlbmVyYXRvci50aHJvdyh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cykpLm5leHQoKSk7XG4gICAgfSk7XG59XG4vLyBob29rIGdsb2JhbCBoZWxwZXJzXG4oZnVuY3Rpb24gKF9fZ2xvYmFsKSB7XG4gICAgX19nbG9iYWwuX19hc3NpZ24gPSAoX19nbG9iYWwgJiYgX19nbG9iYWwuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgX19hc3NpZ25GbjtcbiAgICBfX2dsb2JhbC5fX2V4dGVuZHMgPSAoX19nbG9iYWwgJiYgX19nbG9iYWwuX19leHRlbmRzKSB8fCBfX2V4dGVuZHNGbjtcbiAgICBfX2dsb2JhbC5fX2RlY29yYXRlID0gKF9fZ2xvYmFsICYmIF9fZ2xvYmFsLl9fZGVjb3JhdGUpIHx8IF9fZGVjb3JhdGVGbjtcbiAgICBfX2dsb2JhbC5fX21ldGFkYXRhID0gKF9fZ2xvYmFsICYmIF9fZ2xvYmFsLl9fbWV0YWRhdGEpIHx8IF9fbWV0YWRhdGFGbjtcbiAgICBfX2dsb2JhbC5fX3BhcmFtID0gKF9fZ2xvYmFsICYmIF9fZ2xvYmFsLl9fcGFyYW0pIHx8IF9fcGFyYW1GbjtcbiAgICBfX2dsb2JhbC5fX2F3YWl0ZXIgPSAoX19nbG9iYWwgJiYgX19nbG9iYWwuX19hd2FpdGVyKSB8fCBfX2F3YWl0ZXJGbjtcbn0pKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOlxuICAgIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOlxuICAgICAgICB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDpcbiAgICAgICAgICAgIEZ1bmN0aW9uKFwicmV0dXJuIHRoaXM7XCIpKCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzLWhlbHBlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIGNvcmUtanMgMi40LjFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzXG4gKiBMaWNlbnNlOiBodHRwOi8vcm9jay5taXQtbGljZW5zZS5vcmdcbiAqIMKpIDIwMTYgRGVuaXMgUHVzaGthcmV2XG4gKi9cbiFmdW5jdGlvbihfX2UsIF9fZywgdW5kZWZpbmVkKXtcbid1c2Ugc3RyaWN0Jztcbi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNTIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDU0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNTgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDU5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNjEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDYyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNjQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDY1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2Nik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNjgpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDcwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg3Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNzQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDc3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg3OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNzkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDgzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4Nik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oODcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDg4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4OSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oOTEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDkyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg5Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oOTQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDk1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg5Nyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oOTkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEwMCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTAxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMDMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEwNCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTA1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMDcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEwOCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTA5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMTEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExMik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTEzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMTQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExNSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTE2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMTcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDExOCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTE5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMjApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEyMSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTIyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMjMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEyNCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTI2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzMSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTMyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQ1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE0Nyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTQ4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNDkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE1MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTUxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNTIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE1OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTU5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNjEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTYzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNjcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE2OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTY5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTczKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTc2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxNzkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTgyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4NSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTg3KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTkxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTk1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjA2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMDcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIwOSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjEwKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxMik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjEzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxNSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjE2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMTcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIxOCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjE5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMjApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyMik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjIzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMjQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyNSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjI2KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMjcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIyOCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjI5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzcpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzOCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNDApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNDMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQ1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNDYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI0Nyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjQ5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNTApO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1MSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjUyKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNTMpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1NCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjU1KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNTYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI1OCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjU5KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNjEpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI2Mik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjYzKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNjQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI2Nyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjY4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNjkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjcxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNzIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjc0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNzYpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI3Nyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjc4KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNzkpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI4MCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjgxKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyODIpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI4Myk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjg0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyODUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDI4Nik7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjg3KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4OCk7XG5cblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxuXHR2YXIgZ2xvYmFsICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBoYXMgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIERFU0NSSVBUT1JTICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KVxuXHQgICwgJGV4cG9ydCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCByZWRlZmluZSAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpXG5cdCAgLCBNRVRBICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjApLktFWVxuXHQgICwgJGZhaWxzICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCBzaGFyZWQgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpXG5cdCAgLCBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpXG5cdCAgLCB1aWQgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpXG5cdCAgLCB3a3MgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpXG5cdCAgLCB3a3NFeHQgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpXG5cdCAgLCB3a3NEZWZpbmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpXG5cdCAgLCBrZXlPZiAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpXG5cdCAgLCBlbnVtS2V5cyAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDApXG5cdCAgLCBpc0FycmF5ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpXG5cdCAgLCBhbk9iamVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCB0b0lPYmplY3QgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCB0b1ByaW1pdGl2ZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpXG5cdCAgLCBjcmVhdGVEZXNjICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpXG5cdCAgLCBfY3JlYXRlICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpXG5cdCAgLCBnT1BORXh0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDcpXG5cdCAgLCAkR09QRCAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpXG5cdCAgLCAkRFAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSlcblx0ICAsICRrZXlzICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOClcblx0ICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuXHQgICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuXHQgICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcblx0ICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuXHQgICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuXHQgICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcblx0ICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcblx0ICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcblx0ICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG5cdCAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG5cdCAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jylcblx0ICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcblx0ICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcblx0ICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cblx0ICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuXHQgICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcblx0Ly8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG5cdHZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG5cdC8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xuXHR2YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuXHQgIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcblx0ICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuXHQgIH0pKS5hICE9IDc7XG5cdH0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG5cdCAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG5cdCAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuXHQgIGRQKGl0LCBrZXksIEQpO1xuXHQgIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcblx0fSA6IGRQO1xuXG5cdHZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcblx0ICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuXHQgIHN5bS5fayA9IHRhZztcblx0ICByZXR1cm4gc3ltO1xuXHR9O1xuXG5cdHZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcblx0fSA6IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xuXHR9O1xuXG5cdHZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcblx0ICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcblx0ICBhbk9iamVjdChpdCk7XG5cdCAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcblx0ICBhbk9iamVjdChEKTtcblx0ICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG5cdCAgICBpZighRC5lbnVtZXJhYmxlKXtcblx0ICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG5cdCAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuXHQgICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcblx0ICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG5cdCAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG5cdH07XG5cdHZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuXHQgIGFuT2JqZWN0KGl0KTtcblx0ICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG5cdCAgICAsIGkgICAgPSAwXG5cdCAgICAsIGwgPSBrZXlzLmxlbmd0aFxuXHQgICAgLCBrZXk7XG5cdCAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXHR2YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG5cdCAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xuXHR9O1xuXHR2YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcblx0ICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuXHQgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcblx0ICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG5cdH07XG5cdHZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuXHQgIGl0ICA9IHRvSU9iamVjdChpdCk7XG5cdCAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcblx0ICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuXHQgIHZhciBEID0gZ09QRChpdCwga2V5KTtcblx0ICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcblx0ICByZXR1cm4gRDtcblx0fTtcblx0dmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG5cdCAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcblx0ICAgICwgcmVzdWx0ID0gW11cblx0ICAgICwgaSAgICAgID0gMFxuXHQgICAgLCBrZXk7XG5cdCAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG5cdCAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcblx0ICB9IHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcblx0ICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG5cdCAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuXHQgICAgLCByZXN1bHQgPSBbXVxuXHQgICAgLCBpICAgICAgPSAwXG5cdCAgICAsIGtleTtcblx0ICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcblx0ICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuXHQgIH0gcmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcblx0aWYoIVVTRV9OQVRJVkUpe1xuXHQgICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcblx0ICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuXHQgICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcblx0ICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuXHQgICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG5cdCAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG5cdCAgICB9O1xuXHQgICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG5cdCAgICByZXR1cm4gd3JhcCh0YWcpO1xuXHQgIH07XG5cdCAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuXHQgICAgcmV0dXJuIHRoaXMuX2s7XG5cdCAgfSk7XG5cblx0ICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblx0ICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oNDgpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuXHQgIGlmKERFU0NSSVBUT1JTICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KSl7XG5cdCAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcblx0ICB9XG5cblx0ICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuXHQgICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcblx0ICB9XG5cdH1cblxuXHQkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cblx0Zm9yKHZhciBzeW1ib2xzID0gKFxuXHQgIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG5cdCAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuXHQpLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuXHRmb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcblx0ICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcblx0ICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcblx0ICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcblx0ICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG5cdCAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcblx0ICB9LFxuXHQgIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuXHQgIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG5cdCAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcblx0ICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcblx0ICB9LFxuXHQgIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcblx0ICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG5cdH0pO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG5cdCAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuXHQgIGNyZWF0ZTogJGNyZWF0ZSxcblx0ICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcblx0ICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuXHQgIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG5cdCAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG5cdCAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuXHQgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcblx0ICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuXHQgIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuXHQgIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcblx0ICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcblx0fSk7XG5cblx0Ly8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG5cdCRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuXHQgIHZhciBTID0gJFN5bWJvbCgpO1xuXHQgIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG5cdCAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG5cdCAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcblx0ICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xuXHR9KSksICdKU09OJywge1xuXHQgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcblx0ICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuXHQgICAgdmFyIGFyZ3MgPSBbaXRdXG5cdCAgICAgICwgaSAgICA9IDFcblx0ICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuXHQgICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcblx0ICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcblx0ICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuXHQgICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuXHQgICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcblx0ICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG5cdCAgICB9O1xuXHQgICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuXHQgICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuXHQgIH1cblx0fSk7XG5cblx0Ly8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuXHQkU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG5cdC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cblx0c2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuXHQvLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5cdHNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG5cdC8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5cdHNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcblx0dmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG5cdCAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHRpZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG5cdCAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5cdG1vZHVsZS5leHBvcnRzID0gIV9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiAhIWV4ZWMoKTtcblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGNvcmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNylcblx0ICAsIGhpZGUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOClcblx0ICAsIHJlZGVmaW5lICA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpXG5cdCAgLCBjdHggICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KVxuXHQgICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cblx0dmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuXHQgIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG5cdCAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkdcblx0ICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuXHQgICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG5cdCAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcblx0ICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG5cdCAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG5cdCAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG5cdCAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcblx0ICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcblx0ICBmb3Ioa2V5IGluIHNvdXJjZSl7XG5cdCAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcblx0ICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG5cdCAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuXHQgICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcblx0ICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG5cdCAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcblx0ICAgIC8vIGV4dGVuZCBnbG9iYWxcblx0ICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcblx0ICAgIC8vIGV4cG9ydFxuXHQgICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcblx0ICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG5cdCAgfVxuXHR9O1xuXHRnbG9iYWwuY29yZSA9IGNvcmU7XG5cdC8vIHR5cGUgYml0bWFwXG5cdCRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG5cdCRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG5cdCRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG5cdCRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cblx0JGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG5cdCRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuXHQkZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcblx0JGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxuXHRtb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuXHRpZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSxcbi8qIDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBkUCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KVxuXHQgICwgY3JlYXRlRGVzYyA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCkgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuXHQgIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG5cdH0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuXHQgIG9iamVjdFtrZXldID0gdmFsdWU7XG5cdCAgcmV0dXJuIG9iamVjdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBhbk9iamVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBJRThfRE9NX0RFRklORSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpXG5cdCAgLCB0b1ByaW1pdGl2ZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpXG5cdCAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuXHRleHBvcnRzLmYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG5cdCAgYW5PYmplY3QoTyk7XG5cdCAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuXHQgIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuXHQgIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG5cdCAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG5cdCAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXHQgIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuXHQgIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcblx0ICByZXR1cm4gTztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSAhX193ZWJwYWNrX3JlcXVpcmVfXyg0KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX3JlcXVpcmVfXygxMykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLmRvY3VtZW50XG5cdCAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG5cdCAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdC8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG5cdC8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuXHQgIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuXHQgIHZhciBmbiwgdmFsO1xuXHQgIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcblx0ICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG5cdCAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcblx0ICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcblx0ICByZXR1cm4ge1xuXHQgICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuXHQgICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuXHQgICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuXHQgICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGhpZGUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOClcblx0ICAsIGhhcyAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIFNSQyAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpKCdzcmMnKVxuXHQgICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuXHQgICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuXHQgICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xuXHR9O1xuXG5cdChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcblx0ICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcblx0ICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcblx0ICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG5cdCAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcblx0ICBpZihPID09PSBnbG9iYWwpe1xuXHQgICAgT1trZXldID0gdmFsO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBpZighc2FmZSl7XG5cdCAgICAgIGRlbGV0ZSBPW2tleV07XG5cdCAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcblx0ICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcblx0ICAgIH1cblx0ICB9XG5cdC8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuXHR9KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcblx0ICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciBpZCA9IDBcblx0ICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuXHQgIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5cdHZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcblx0ICBhRnVuY3Rpb24oZm4pO1xuXHQgIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG5cdCAgc3dpdGNoKGxlbmd0aCl7XG5cdCAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuXHQgICAgfTtcblx0ICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcblx0ICAgIH07XG5cdCAgfVxuXHQgIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcblx0ICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIE1FVEEgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNykoJ21ldGEnKVxuXHQgICwgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgaGFzICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCBzZXREZXNjICA9IF9fd2VicGFja19yZXF1aXJlX18oOSkuZlxuXHQgICwgaWQgICAgICAgPSAwO1xuXHR2YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuXHQgIHJldHVybiB0cnVlO1xuXHR9O1xuXHR2YXIgRlJFRVpFID0gIV9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xuXHR9KTtcblx0dmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG5cdCAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG5cdCAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcblx0ICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG5cdCAgfX0pO1xuXHR9O1xuXHR2YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuXHQgIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcblx0ICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG5cdCAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuXHQgICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3Rcblx0ICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG5cdCAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuXHQgICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuXHQgICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcblx0ICAgIHNldE1ldGEoaXQpO1xuXHQgIC8vIHJldHVybiBvYmplY3QgSURcblx0ICB9IHJldHVybiBpdFtNRVRBXS5pO1xuXHR9O1xuXHR2YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuXHQgIGlmKCFoYXMoaXQsIE1FVEEpKXtcblx0ICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG5cdCAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcblx0ICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG5cdCAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcblx0ICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG5cdCAgICBzZXRNZXRhKGl0KTtcblx0ICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuXHQgIH0gcmV0dXJuIGl0W01FVEFdLnc7XG5cdH07XG5cdC8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xuXHR2YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG5cdCAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblx0dmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBLRVk6ICAgICAgTUVUQSxcblx0ICBORUVEOiAgICAgZmFsc2UsXG5cdCAgZmFzdEtleTogIGZhc3RLZXksXG5cdCAgZ2V0V2VhazogIGdldFdlYWssXG5cdCAgb25GcmVlemU6IG9uRnJlZXplXG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG5cdCAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcblx0ICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZGVmID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mXG5cdCAgLCBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCBUQUcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgndG9TdHJpbmdUYWcnKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuXHQgIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgc3RvcmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpKCd3a3MnKVxuXHQgICwgdWlkICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpXG5cdCAgLCBTeW1ib2wgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5TeW1ib2xcblx0ICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cblx0dmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcblx0ICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cblx0ICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG5cdH07XG5cblx0JGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuLyoqKi8gfSxcbi8qIDI0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRleHBvcnRzLmYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcblxuLyoqKi8gfSxcbi8qIDI1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBjb3JlICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNylcblx0ICAsIExJQlJBUlkgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNilcblx0ICAsIHdrc0V4dCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNClcblx0ICAsIGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuXHQgIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG5cdCAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuLyoqKi8gfSxcbi8qIDI3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2V0S2V5cyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOClcblx0ICAsIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuXHQgIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuXHQgICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG5cdCAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG5cdCAgICAsIGluZGV4ICA9IDBcblx0ICAgICwga2V5O1xuXHQgIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG5cdHZhciAka2V5cyAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpXG5cdCAgLCBlbnVtQnVnS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcblx0ICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBoYXMgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCB0b0lPYmplY3QgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgYXJyYXlJbmRleE9mID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCkoZmFsc2UpXG5cdCAgLCBJRV9QUk9UTyAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KSgnSUVfUFJPVE8nKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuXHQgIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuXHQgICAgLCBpICAgICAgPSAwXG5cdCAgICAsIHJlc3VsdCA9IFtdXG5cdCAgICAsIGtleTtcblx0ICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG5cdCAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuXHQgIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcblx0ICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG5cdCAgfVxuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG5cdHZhciBJT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSlcblx0ICAsIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5cdHZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0dmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDMzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDM0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG5cdC8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG5cdHZhciB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgdG9MZW5ndGggID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIHRvSW5kZXggICA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcblx0ICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuXHQgICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcblx0ICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcblx0ICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuXHQgICAgICAsIHZhbHVlO1xuXHQgICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuXHQgICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuXHQgICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG5cdCAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuXHQgICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuXHQgICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG5cdCAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcblx0ICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDcuMS4xNSBUb0xlbmd0aFxuXHR2YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNilcblx0ICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXHR9O1xuXG4vKioqLyB9LFxuLyogMzYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIDcuMS40IFRvSW50ZWdlclxuXHR2YXIgY2VpbCAgPSBNYXRoLmNlaWxcblx0ICAsIGZsb29yID0gTWF0aC5mbG9vcjtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpXG5cdCAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuXHQgICwgbWluICAgICAgID0gTWF0aC5taW47XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG5cdCAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuXHQgIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMzggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBzaGFyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKSgna2V5cycpXG5cdCAgLCB1aWQgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuXHQgIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAzOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xuXHRtb2R1bGUuZXhwb3J0cyA9IChcblx0ICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuXHQpLnNwbGl0KCcsJyk7XG5cbi8qKiovIH0sXG4vKiA0MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcblx0dmFyIGdldEtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KVxuXHQgICwgZ09QUyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpXG5cdCAgLCBwSUUgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcblx0ICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcblx0ICBpZihnZXRTeW1ib2xzKXtcblx0ICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcblx0ICAgICAgLCBpc0VudW0gID0gcElFLmZcblx0ICAgICAgLCBpICAgICAgID0gMFxuXHQgICAgICAsIGtleTtcblx0ICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuXHQgIH0gcmV0dXJuIHJlc3VsdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDQxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKioqLyB9LFxuLyogNDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdGV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKioqLyB9LFxuLyogNDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG5cdHZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcblx0ICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDQ0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcblx0dmFyIGFuT2JqZWN0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGRQcyAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NSlcblx0ICAsIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSlcblx0ICAsIElFX1BST1RPICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOCkoJ0lFX1BST1RPJylcblx0ICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuXHQgICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuXHQvLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG5cdHZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcblx0ICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuXHQgIHZhciBpZnJhbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKSgnaWZyYW1lJylcblx0ICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG5cdCAgICAsIGx0ICAgICA9ICc8J1xuXHQgICAgLCBndCAgICAgPSAnPidcblx0ICAgICwgaWZyYW1lRG9jdW1lbnQ7XG5cdCAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgX193ZWJwYWNrX3JlcXVpcmVfXyg0NikuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblx0ICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG5cdCAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcblx0ICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG5cdCAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0ICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG5cdCAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuXHQgIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG5cdCAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG5cdCAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuXHQgIHJldHVybiBjcmVhdGVEaWN0KCk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcblx0ICB2YXIgcmVzdWx0O1xuXHQgIGlmKE8gIT09IG51bGwpe1xuXHQgICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuXHQgICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuXHQgICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG5cdCAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG5cdCAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcblx0ICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuXHQgIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcblx0fTtcblxuXG4vKioqLyB9LFxuLyogNDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBkUCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSlcblx0ICAsIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGdldEtleXMgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOCk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuXHQgIGFuT2JqZWN0KE8pO1xuXHQgIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG5cdCAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG5cdCAgICAsIGkgPSAwXG5cdCAgICAsIFA7XG5cdCAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuXHQgIHJldHVybiBPO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbi8qKiovIH0sXG4vKiA0NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xuXHR2YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGdPUE4gICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDgpLmZcblx0ICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG5cdHZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG5cdCAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cblx0dmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gZ09QTihpdCk7XG5cdCAgfSBjYXRjaChlKXtcblx0ICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuXHQgIH1cblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG5cdCAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcblx0fTtcblxuXG4vKioqLyB9LFxuLyogNDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcblx0dmFyICRrZXlzICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KVxuXHQgICwgaGlkZGVuS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5cdGV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG5cdCAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogNDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBwSUUgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpXG5cdCAgLCBjcmVhdGVEZXNjICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpXG5cdCAgLCB0b0lPYmplY3QgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCB0b1ByaW1pdGl2ZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpXG5cdCAgLCBoYXMgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIElFOF9ET01fREVGSU5FID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMilcblx0ICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuXHRleHBvcnRzLmYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcblx0ICBPID0gdG9JT2JqZWN0KE8pO1xuXHQgIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcblx0ICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuXHQgICAgcmV0dXJuIGdPUEQoTywgUCk7XG5cdCAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXHQgIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA1MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHQvLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmZ9KTtcblxuLyoqKi8gfSxcbi8qIDUxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdC8vIDE5LjEuMi4zIC8gMTUuMi4zLjcgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXyg0KSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0aWVzOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KX0pO1xuXG4vKioqLyB9LFxuLyogNTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcblx0dmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpLmY7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcblx0ICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA1MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgY29yZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNylcblx0ICAsIGZhaWxzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG5cdCAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuXHQgICAgLCBleHAgPSB7fTtcblx0ICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuXHQgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDU0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0Ly8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogX193ZWJwYWNrX3JlcXVpcmVfXyg0NCl9KTtcblxuLyoqKi8gfSxcbi8qIDU1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcblx0dmFyIHRvT2JqZWN0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCAkZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG5cdCAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA1NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxuXHR2YXIgZGVmaW5lZCA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDU3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxuXHR2YXIgaGFzICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCB0b09iamVjdCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCBJRV9QUk9UTyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpKCdJRV9QUk9UTycpXG5cdCAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG5cdCAgTyA9IHRvT2JqZWN0KE8pO1xuXHQgIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuXHQgIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuXHQgICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHQgIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA1OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG5cdHZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCAka2V5cyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdrZXlzJywgZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG5cdCAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDU5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgnZ2V0T3duUHJvcGVydHlOYW1lcycsIGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oNDcpLmY7XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNjAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIG1ldGEgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCkub25GcmVlemU7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ2ZyZWV6ZScsIGZ1bmN0aW9uKCRmcmVlemUpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuXHQgICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShtZXRhKGl0KSkgOiBpdDtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDYxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTcgT2JqZWN0LnNlYWwoTylcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIG1ldGEgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCkub25GcmVlemU7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ3NlYWwnLCBmdW5jdGlvbigkc2VhbCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpe1xuXHQgICAgcmV0dXJuICRzZWFsICYmIGlzT2JqZWN0KGl0KSA/ICRzZWFsKG1ldGEoaXQpKSA6IGl0O1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xNSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoTylcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIG1ldGEgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCkub25GcmVlemU7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1MykoJ3ByZXZlbnRFeHRlbnNpb25zJywgZnVuY3Rpb24oJHByZXZlbnRFeHRlbnNpb25zKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuXHQgICAgcmV0dXJuICRwcmV2ZW50RXh0ZW5zaW9ucyAmJiBpc09iamVjdChpdCkgPyAkcHJldmVudEV4dGVuc2lvbnMobWV0YShpdCkpIDogaXQ7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA2MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4yLjEyIE9iamVjdC5pc0Zyb3plbihPKVxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKSgnaXNGcm96ZW4nLCBmdW5jdGlvbigkaXNGcm96ZW4pe1xuXHQgIHJldHVybiBmdW5jdGlvbiBpc0Zyb3plbihpdCl7XG5cdCAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRnJvemVuID8gJGlzRnJvemVuKGl0KSA6IGZhbHNlIDogdHJ1ZTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDY0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTMgT2JqZWN0LmlzU2VhbGVkKE8pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdpc1NlYWxlZCcsIGZ1bmN0aW9uKCRpc1NlYWxlZCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcblx0ICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNTZWFsZWQgPyAkaXNTZWFsZWQoaXQpIDogZmFsc2UgOiB0cnVlO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNjUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDE5LjEuMi4xMSBPYmplY3QuaXNFeHRlbnNpYmxlKE8pXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oNTMpKCdpc0V4dGVuc2libGUnLCBmdW5jdGlvbigkaXNFeHRlbnNpYmxlKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KXtcblx0ICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZShpdCkgOiB0cnVlIDogZmFsc2U7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiA2NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogX193ZWJwYWNrX3JlcXVpcmVfXyg2Nyl9KTtcblxuLyoqKi8gfSxcbi8qIDY3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcblx0dmFyIGdldEtleXMgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOClcblx0ICAsIGdPUFMgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MSlcblx0ICAsIHBJRSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Milcblx0ICAsIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIElPYmplY3QgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSlcblx0ICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuXHQvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcblx0bW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgdmFyIEEgPSB7fVxuXHQgICAgLCBCID0ge31cblx0ICAgICwgUyA9IFN5bWJvbCgpXG5cdCAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuXHQgIEFbU10gPSA3O1xuXHQgIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcblx0ICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcblx0fSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdCAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuXHQgICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICwgaW5kZXggPSAxXG5cdCAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcblx0ICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuXHQgIHdoaWxlKGFMZW4gPiBpbmRleCl7XG5cdCAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG5cdCAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuXHQgICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG5cdCAgICAgICwgaiAgICAgID0gMFxuXHQgICAgICAsIGtleTtcblx0ICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG5cdCAgfSByZXR1cm4gVDtcblx0fSA6ICRhc3NpZ247XG5cbi8qKiovIH0sXG4vKiA2OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4zLjEwIE9iamVjdC5pcyh2YWx1ZTEsIHZhbHVlMilcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHQkZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtpczogX193ZWJwYWNrX3JlcXVpcmVfXyg2OSl9KTtcblxuLyoqKi8gfSxcbi8qIDY5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcblx0bW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSl7XG5cdCAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA3MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHQkZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogX193ZWJwYWNrX3JlcXVpcmVfXyg3MSkuc2V0fSk7XG5cbi8qKiovIH0sXG4vKiA3MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHR2YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG5cdCAgYW5PYmplY3QoTyk7XG5cdCAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0ICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHNldCA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpKEZ1bmN0aW9uLmNhbGwsIF9fd2VicGFja19yZXF1aXJlX18oNDkpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG5cdCAgICAgICAgc2V0KHRlc3QsIFtdKTtcblx0ICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcblx0ICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG5cdCAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG5cdCAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuXHQgICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG5cdCAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuXHQgICAgICAgIHJldHVybiBPO1xuXHQgICAgICB9O1xuXHQgICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcblx0ICBjaGVjazogY2hlY2tcblx0fTtcblxuLyoqKi8gfSxcbi8qIDcyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxuXHR2YXIgY2xhc3NvZiA9IF9fd2VicGFja19yZXF1aXJlX18oNzMpXG5cdCAgLCB0ZXN0ICAgID0ge307XG5cdHRlc3RbX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuXHRpZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuXHQgICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuXHQgIH0sIHRydWUpO1xuXHR9XG5cbi8qKiovIH0sXG4vKiA3MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcblx0dmFyIGNvZiA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpXG5cdCAgLCBUQUcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgndG9TdHJpbmdUYWcnKVxuXHQgIC8vIEVTMyB3cm9uZyBoZXJlXG5cdCAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuXHQvLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxuXHR2YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiBpdFtrZXldO1xuXHQgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICB2YXIgTywgVCwgQjtcblx0ICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcblx0ICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuXHQgICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuXHQgICAgLy8gYnVpbHRpblRhZyBjYXNlXG5cdCAgICA6IEFSRyA/IGNvZihPKVxuXHQgICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuXHQgICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA3NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMTkuMi4zLjIgLyAxNS4zLjQuNSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCh0aGlzQXJnLCBhcmdzLi4uKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAsICdGdW5jdGlvbicsIHtiaW5kOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDc1KX0pO1xuXG4vKioqLyB9LFxuLyogNzUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGFGdW5jdGlvbiAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgaXNPYmplY3QgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBpbnZva2UgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Nilcblx0ICAsIGFycmF5U2xpY2UgPSBbXS5zbGljZVxuXHQgICwgZmFjdG9yaWVzICA9IHt9O1xuXG5cdHZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbihGLCBsZW4sIGFyZ3Mpe1xuXHQgIGlmKCEobGVuIGluIGZhY3Rvcmllcykpe1xuXHQgICAgZm9yKHZhciBuID0gW10sIGkgPSAwOyBpIDwgbGVuOyBpKyspbltpXSA9ICdhWycgKyBpICsgJ10nO1xuXHQgICAgZmFjdG9yaWVzW2xlbl0gPSBGdW5jdGlvbignRixhJywgJ3JldHVybiBuZXcgRignICsgbi5qb2luKCcsJykgKyAnKScpO1xuXHQgIH0gcmV0dXJuIGZhY3Rvcmllc1tsZW5dKEYsIGFyZ3MpO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyosIGFyZ3MuLi4gKi8pe1xuXHQgIHZhciBmbiAgICAgICA9IGFGdW5jdGlvbih0aGlzKVxuXHQgICAgLCBwYXJ0QXJncyA9IGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHQgIHZhciBib3VuZCA9IGZ1bmN0aW9uKC8qIGFyZ3MuLi4gKi8pe1xuXHQgICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXHQgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcblx0ICB9O1xuXHQgIGlmKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpYm91bmQucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuXHQgIHJldHVybiBib3VuZDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDc2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG5cdCAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuXHQgIHN3aXRjaChhcmdzLmxlbmd0aCl7XG5cdCAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcblx0ICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcblx0ICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcblx0ICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcblx0ICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcblx0ICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcblx0ICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcblx0ICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcblx0ICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcblx0ICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcblx0ICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiA3NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGRQICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmZcblx0ICAsIGNyZWF0ZURlc2MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KVxuXHQgICwgaGFzICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIEZQcm90byAgICAgPSBGdW5jdGlvbi5wcm90b3R5cGVcblx0ICAsIG5hbWVSRSAgICAgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS9cblx0ICAsIE5BTUUgICAgICAgPSAnbmFtZSc7XG5cblx0dmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHQvLyAxOS4yLjQuMiBuYW1lXG5cdE5BTUUgaW4gRlByb3RvIHx8IF9fd2VicGFja19yZXF1aXJlX18oNCkgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG5cdCAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24oKXtcblx0ICAgIHRyeSB7XG5cdCAgICAgIHZhciB0aGF0ID0gdGhpc1xuXHQgICAgICAgICwgbmFtZSA9ICgnJyArIHRoYXQpLm1hdGNoKG5hbWVSRSlbMV07XG5cdCAgICAgIGhhcyh0aGF0LCBOQU1FKSB8fCAhaXNFeHRlbnNpYmxlKHRoYXQpIHx8IGRQKHRoYXQsIE5BTUUsIGNyZWF0ZURlc2MoNSwgbmFtZSkpO1xuXHQgICAgICByZXR1cm4gbmFtZTtcblx0ICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgIHJldHVybiAnJztcblx0ICAgIH1cblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogNzggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGlzT2JqZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGdldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIEhBU19JTlNUQU5DRSAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ2hhc0luc3RhbmNlJylcblx0ICAsIEZ1bmN0aW9uUHJvdG8gID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXHQvLyAxOS4yLjMuNiBGdW5jdGlvbi5wcm90b3R5cGVbQEBoYXNJbnN0YW5jZV0oVilcblx0aWYoIShIQVNfSU5TVEFOQ0UgaW4gRnVuY3Rpb25Qcm90bykpX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mKEZ1bmN0aW9uUHJvdG8sIEhBU19JTlNUQU5DRSwge3ZhbHVlOiBmdW5jdGlvbihPKXtcblx0ICBpZih0eXBlb2YgdGhpcyAhPSAnZnVuY3Rpb24nIHx8ICFpc09iamVjdChPKSlyZXR1cm4gZmFsc2U7XG5cdCAgaWYoIWlzT2JqZWN0KHRoaXMucHJvdG90eXBlKSlyZXR1cm4gTyBpbnN0YW5jZW9mIHRoaXM7XG5cdCAgLy8gZm9yIGVudmlyb25tZW50IHcvbyBuYXRpdmUgYEBAaGFzSW5zdGFuY2VgIGxvZ2ljIGVub3VnaCBgaW5zdGFuY2VvZmAsIGJ1dCBhZGQgdGhpczpcblx0ICB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpaWYodGhpcy5wcm90b3R5cGUgPT09IE8pcmV0dXJuIHRydWU7XG5cdCAgcmV0dXJuIGZhbHNlO1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiA3OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZ2xvYmFsICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBoYXMgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIGNvZiAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMilcblx0ICAsIGluaGVyaXRJZlJlcXVpcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MClcblx0ICAsIHRvUHJpbWl0aXZlICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNClcblx0ICAsIGZhaWxzICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHQgICwgZ09QTiAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KS5mXG5cdCAgLCBnT1BEICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpLmZcblx0ICAsIGRQICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mXG5cdCAgLCAkdHJpbSAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oODEpLnRyaW1cblx0ICAsIE5VTUJFUiAgICAgICAgICAgID0gJ051bWJlcidcblx0ICAsICROdW1iZXIgICAgICAgICAgID0gZ2xvYmFsW05VTUJFUl1cblx0ICAsIEJhc2UgICAgICAgICAgICAgID0gJE51bWJlclxuXHQgICwgcHJvdG8gICAgICAgICAgICAgPSAkTnVtYmVyLnByb3RvdHlwZVxuXHQgIC8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xuXHQgICwgQlJPS0VOX0NPRiAgICAgICAgPSBjb2YoX193ZWJwYWNrX3JlcXVpcmVfXyg0NCkocHJvdG8pKSA9PSBOVU1CRVJcblx0ICAsIFRSSU0gICAgICAgICAgICAgID0gJ3RyaW0nIGluIFN0cmluZy5wcm90b3R5cGU7XG5cblx0Ly8gNy4xLjMgVG9OdW1iZXIoYXJndW1lbnQpXG5cdHZhciB0b051bWJlciA9IGZ1bmN0aW9uKGFyZ3VtZW50KXtcblx0ICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgZmFsc2UpO1xuXHQgIGlmKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKXtcblx0ICAgIGl0ID0gVFJJTSA/IGl0LnRyaW0oKSA6ICR0cmltKGl0LCAzKTtcblx0ICAgIHZhciBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMClcblx0ICAgICAgLCB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG5cdCAgICBpZihmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KXtcblx0ICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuXHQgICAgICBpZih0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMClyZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG5cdCAgICB9IGVsc2UgaWYoZmlyc3QgPT09IDQ4KXtcblx0ICAgICAgc3dpdGNoKGl0LmNoYXJDb2RlQXQoMSkpe1xuXHQgICAgICAgIGNhc2UgNjYgOiBjYXNlIDk4ICA6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcblx0ICAgICAgICBjYXNlIDc5IDogY2FzZSAxMTEgOiByYWRpeCA9IDg7IG1heENvZGUgPSA1NTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wb1swLTddKyQvaVxuXHQgICAgICAgIGRlZmF1bHQgOiByZXR1cm4gK2l0O1xuXHQgICAgICB9XG5cdCAgICAgIGZvcih2YXIgZGlnaXRzID0gaXQuc2xpY2UoMiksIGkgPSAwLCBsID0gZGlnaXRzLmxlbmd0aCwgY29kZTsgaSA8IGw7IGkrKyl7XG5cdCAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGkpO1xuXHQgICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuXHQgICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG5cdCAgICAgICAgaWYoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKXJldHVybiBOYU47XG5cdCAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuXHQgICAgfVxuXHQgIH0gcmV0dXJuICtpdDtcblx0fTtcblxuXHRpZighJE51bWJlcignIDBvMScpIHx8ICEkTnVtYmVyKCcwYjEnKSB8fCAkTnVtYmVyKCcrMHgxJykpe1xuXHQgICROdW1iZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpe1xuXHQgICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWVcblx0ICAgICAgLCB0aGF0ID0gdGhpcztcblx0ICAgIHJldHVybiB0aGF0IGluc3RhbmNlb2YgJE51bWJlclxuXHQgICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2Vcblx0ICAgICAgJiYgKEJST0tFTl9DT0YgPyBmYWlscyhmdW5jdGlvbigpeyBwcm90by52YWx1ZU9mLmNhbGwodGhhdCk7IH0pIDogY29mKHRoYXQpICE9IE5VTUJFUilcblx0ICAgICAgICA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKHRvTnVtYmVyKGl0KSksIHRoYXQsICROdW1iZXIpIDogdG9OdW1iZXIoaXQpO1xuXHQgIH07XG5cdCAgZm9yKHZhciBrZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSA/IGdPUE4oQmFzZSkgOiAoXG5cdCAgICAvLyBFUzM6XG5cdCAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG5cdCAgICAvLyBFUzYgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzYgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcblx0ICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG5cdCAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcblx0ICApLnNwbGl0KCcsJyksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgaisrKXtcblx0ICAgIGlmKGhhcyhCYXNlLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKCROdW1iZXIsIGtleSkpe1xuXHQgICAgICBkUCgkTnVtYmVyLCBrZXksIGdPUEQoQmFzZSwga2V5KSk7XG5cdCAgICB9XG5cdCAgfVxuXHQgICROdW1iZXIucHJvdG90eXBlID0gcHJvdG87XG5cdCAgcHJvdG8uY29uc3RydWN0b3IgPSAkTnVtYmVyO1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oMTYpKGdsb2JhbCwgTlVNQkVSLCAkTnVtYmVyKTtcblx0fVxuXG4vKioqLyB9LFxuLyogODAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc09iamVjdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBzZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNzEpLnNldDtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCB0YXJnZXQsIEMpe1xuXHQgIHZhciBQLCBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuXHQgIGlmKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2Ype1xuXHQgICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG5cdCAgfSByZXR1cm4gdGhhdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDgxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKVxuXHQgICwgZmFpbHMgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsIHNwYWNlcyAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgyKVxuXHQgICwgc3BhY2UgICA9ICdbJyArIHNwYWNlcyArICddJ1xuXHQgICwgbm9uICAgICA9ICdcXHUyMDBiXFx1MDA4NSdcblx0ICAsIGx0cmltICAgPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJylcblx0ICAsIHJ0cmltICAgPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xuXG5cdHZhciBleHBvcnRlciA9IGZ1bmN0aW9uKEtFWSwgZXhlYywgQUxJQVMpe1xuXHQgIHZhciBleHAgICA9IHt9O1xuXHQgIHZhciBGT1JDRSA9IGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICByZXR1cm4gISFzcGFjZXNbS0VZXSgpIHx8IG5vbltLRVldKCkgIT0gbm9uO1xuXHQgIH0pO1xuXHQgIHZhciBmbiA9IGV4cFtLRVldID0gRk9SQ0UgPyBleGVjKHRyaW0pIDogc3BhY2VzW0tFWV07XG5cdCAgaWYoQUxJQVMpZXhwW0FMSUFTXSA9IGZuO1xuXHQgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0UsICdTdHJpbmcnLCBleHApO1xuXHR9O1xuXG5cdC8vIDEgLT4gU3RyaW5nI3RyaW1MZWZ0XG5cdC8vIDIgLT4gU3RyaW5nI3RyaW1SaWdodFxuXHQvLyAzIC0+IFN0cmluZyN0cmltXG5cdHZhciB0cmltID0gZXhwb3J0ZXIudHJpbSA9IGZ1bmN0aW9uKHN0cmluZywgVFlQRSl7XG5cdCAgc3RyaW5nID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSk7XG5cdCAgaWYoVFlQRSAmIDEpc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcblx0ICBpZihUWVBFICYgMilzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuXHQgIHJldHVybiBzdHJpbmc7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlcjtcblxuLyoqKi8gfSxcbi8qIDgyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgK1xuXHQgICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcblxuLyoqKi8gfSxcbi8qIDgzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b0ludGVnZXIgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KVxuXHQgICwgYU51bWJlclZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NClcblx0ICAsIHJlcGVhdCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oODUpXG5cdCAgLCAkdG9GaXhlZCAgICAgPSAxLi50b0ZpeGVkXG5cdCAgLCBmbG9vciAgICAgICAgPSBNYXRoLmZsb29yXG5cdCAgLCBkYXRhICAgICAgICAgPSBbMCwgMCwgMCwgMCwgMCwgMF1cblx0ICAsIEVSUk9SICAgICAgICA9ICdOdW1iZXIudG9GaXhlZDogaW5jb3JyZWN0IGludm9jYXRpb24hJ1xuXHQgICwgWkVSTyAgICAgICAgID0gJzAnO1xuXG5cdHZhciBtdWx0aXBseSA9IGZ1bmN0aW9uKG4sIGMpe1xuXHQgIHZhciBpICA9IC0xXG5cdCAgICAsIGMyID0gYztcblx0ICB3aGlsZSgrK2kgPCA2KXtcblx0ICAgIGMyICs9IG4gKiBkYXRhW2ldO1xuXHQgICAgZGF0YVtpXSA9IGMyICUgMWU3O1xuXHQgICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG5cdCAgfVxuXHR9O1xuXHR2YXIgZGl2aWRlID0gZnVuY3Rpb24obil7XG5cdCAgdmFyIGkgPSA2XG5cdCAgICAsIGMgPSAwO1xuXHQgIHdoaWxlKC0taSA+PSAwKXtcblx0ICAgIGMgKz0gZGF0YVtpXTtcblx0ICAgIGRhdGFbaV0gPSBmbG9vcihjIC8gbik7XG5cdCAgICBjID0gKGMgJSBuKSAqIDFlNztcblx0ICB9XG5cdH07XG5cdHZhciBudW1Ub1N0cmluZyA9IGZ1bmN0aW9uKCl7XG5cdCAgdmFyIGkgPSA2XG5cdCAgICAsIHMgPSAnJztcblx0ICB3aGlsZSgtLWkgPj0gMCl7XG5cdCAgICBpZihzICE9PSAnJyB8fCBpID09PSAwIHx8IGRhdGFbaV0gIT09IDApe1xuXHQgICAgICB2YXIgdCA9IFN0cmluZyhkYXRhW2ldKTtcblx0ICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQuY2FsbChaRVJPLCA3IC0gdC5sZW5ndGgpICsgdDtcblx0ICAgIH1cblx0ICB9IHJldHVybiBzO1xuXHR9O1xuXHR2YXIgcG93ID0gZnVuY3Rpb24oeCwgbiwgYWNjKXtcblx0ICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG5cdH07XG5cdHZhciBsb2cgPSBmdW5jdGlvbih4KXtcblx0ICB2YXIgbiAgPSAwXG5cdCAgICAsIHgyID0geDtcblx0ICB3aGlsZSh4MiA+PSA0MDk2KXtcblx0ICAgIG4gKz0gMTI7XG5cdCAgICB4MiAvPSA0MDk2O1xuXHQgIH1cblx0ICB3aGlsZSh4MiA+PSAyKXtcblx0ICAgIG4gICs9IDE7XG5cdCAgICB4MiAvPSAyO1xuXHQgIH0gcmV0dXJuIG47XG5cdH07XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoISEkdG9GaXhlZCAmJiAoXG5cdCAgMC4wMDAwOC50b0ZpeGVkKDMpICE9PSAnMC4wMDAnIHx8XG5cdCAgMC45LnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuXHQgIDEuMjU1LnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fFxuXHQgIDEwMDAwMDAwMDAwMDAwMDAxMjguLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuXHQpIHx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgLy8gVjggfiBBbmRyb2lkIDQuMy1cblx0ICAkdG9GaXhlZC5jYWxsKHt9KTtcblx0fSkpLCAnTnVtYmVyJywge1xuXHQgIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpe1xuXHQgICAgdmFyIHggPSBhTnVtYmVyVmFsdWUodGhpcywgRVJST1IpXG5cdCAgICAgICwgZiA9IHRvSW50ZWdlcihmcmFjdGlvbkRpZ2l0cylcblx0ICAgICAgLCBzID0gJydcblx0ICAgICAgLCBtID0gWkVST1xuXHQgICAgICAsIGUsIHosIGosIGs7XG5cdCAgICBpZihmIDwgMCB8fCBmID4gMjApdGhyb3cgUmFuZ2VFcnJvcihFUlJPUik7XG5cdCAgICBpZih4ICE9IHgpcmV0dXJuICdOYU4nO1xuXHQgICAgaWYoeCA8PSAtMWUyMSB8fCB4ID49IDFlMjEpcmV0dXJuIFN0cmluZyh4KTtcblx0ICAgIGlmKHggPCAwKXtcblx0ICAgICAgcyA9ICctJztcblx0ICAgICAgeCA9IC14O1xuXHQgICAgfVxuXHQgICAgaWYoeCA+IDFlLTIxKXtcblx0ICAgICAgZSA9IGxvZyh4ICogcG93KDIsIDY5LCAxKSkgLSA2OTtcblx0ICAgICAgeiA9IGUgPCAwID8geCAqIHBvdygyLCAtZSwgMSkgOiB4IC8gcG93KDIsIGUsIDEpO1xuXHQgICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG5cdCAgICAgIGUgPSA1MiAtIGU7XG5cdCAgICAgIGlmKGUgPiAwKXtcblx0ICAgICAgICBtdWx0aXBseSgwLCB6KTtcblx0ICAgICAgICBqID0gZjtcblx0ICAgICAgICB3aGlsZShqID49IDcpe1xuXHQgICAgICAgICAgbXVsdGlwbHkoMWU3LCAwKTtcblx0ICAgICAgICAgIGogLT0gNztcblx0ICAgICAgICB9XG5cdCAgICAgICAgbXVsdGlwbHkocG93KDEwLCBqLCAxKSwgMCk7XG5cdCAgICAgICAgaiA9IGUgLSAxO1xuXHQgICAgICAgIHdoaWxlKGogPj0gMjMpe1xuXHQgICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuXHQgICAgICAgICAgaiAtPSAyMztcblx0ICAgICAgICB9XG5cdCAgICAgICAgZGl2aWRlKDEgPDwgaik7XG5cdCAgICAgICAgbXVsdGlwbHkoMSwgMSk7XG5cdCAgICAgICAgZGl2aWRlKDIpO1xuXHQgICAgICAgIG0gPSBudW1Ub1N0cmluZygpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIG11bHRpcGx5KDAsIHopO1xuXHQgICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuXHQgICAgICAgIG0gPSBudW1Ub1N0cmluZygpICsgcmVwZWF0LmNhbGwoWkVSTywgZik7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIGlmKGYgPiAwKXtcblx0ICAgICAgayA9IG0ubGVuZ3RoO1xuXHQgICAgICBtID0gcyArIChrIDw9IGYgPyAnMC4nICsgcmVwZWF0LmNhbGwoWkVSTywgZiAtIGspICsgbSA6IG0uc2xpY2UoMCwgayAtIGYpICsgJy4nICsgbS5zbGljZShrIC0gZikpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgbSA9IHMgKyBtO1xuXHQgICAgfSByZXR1cm4gbTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogODQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgbXNnKXtcblx0ICBpZih0eXBlb2YgaXQgIT0gJ251bWJlcicgJiYgY29mKGl0KSAhPSAnTnVtYmVyJyl0aHJvdyBUeXBlRXJyb3IobXNnKTtcblx0ICByZXR1cm4gK2l0O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogODUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpXG5cdCAgLCBkZWZpbmVkICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGVhdChjb3VudCl7XG5cdCAgdmFyIHN0ciA9IFN0cmluZyhkZWZpbmVkKHRoaXMpKVxuXHQgICAgLCByZXMgPSAnJ1xuXHQgICAgLCBuICAgPSB0b0ludGVnZXIoY291bnQpO1xuXHQgIGlmKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xuXHQgIGZvcig7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKWlmKG4gJiAxKXJlcyArPSBzdHI7XG5cdCAgcmV0dXJuIHJlcztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDg2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkZmFpbHMgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCBhTnVtYmVyVmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDg0KVxuXHQgICwgJHRvUHJlY2lzaW9uID0gMS4udG9QcmVjaXNpb247XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoJGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgLy8gSUU3LVxuXHQgIHJldHVybiAkdG9QcmVjaXNpb24uY2FsbCgxLCB1bmRlZmluZWQpICE9PSAnMSc7XG5cdH0pIHx8ICEkZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuXHQgICR0b1ByZWNpc2lvbi5jYWxsKHt9KTtcblx0fSkpLCAnTnVtYmVyJywge1xuXHQgIHRvUHJlY2lzaW9uOiBmdW5jdGlvbiB0b1ByZWNpc2lvbihwcmVjaXNpb24pe1xuXHQgICAgdmFyIHRoYXQgPSBhTnVtYmVyVmFsdWUodGhpcywgJ051bWJlciN0b1ByZWNpc2lvbjogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG5cdCAgICByZXR1cm4gcHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyAkdG9QcmVjaXNpb24uY2FsbCh0aGF0KSA6ICR0b1ByZWNpc2lvbi5jYWxsKHRoYXQsIHByZWNpc2lvbik7IFxuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiA4NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMS4yLjEgTnVtYmVyLkVQU0lMT05cblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge0VQU0lMT046IE1hdGgucG93KDIsIC01Mil9KTtcblxuLyoqKi8gfSxcbi8qIDg4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4xLjIuMiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKVxuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgX2lzRmluaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5pc0Zpbml0ZTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcblx0ICBpc0Zpbml0ZTogZnVuY3Rpb24gaXNGaW5pdGUoaXQpe1xuXHQgICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBfaXNGaW5pdGUoaXQpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiA4OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtpc0ludGVnZXI6IF9fd2VicGFja19yZXF1aXJlX18oOTApfSk7XG5cbi8qKiovIH0sXG4vKiA5MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBmbG9vciAgICA9IE1hdGguZmxvb3I7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KXtcblx0ICByZXR1cm4gIWlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDkxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG5cdCAgaXNOYU46IGZ1bmN0aW9uIGlzTmFOKG51bWJlcil7XG5cdCAgICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogOTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjEuMi41IE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcilcblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGlzSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oOTApXG5cdCAgLCBhYnMgICAgICAgPSBNYXRoLmFicztcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcblx0ICBpc1NhZmVJbnRlZ2VyOiBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKG51bWJlcil7XG5cdCAgICByZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikgJiYgYWJzKG51bWJlcikgPD0gMHgxZmZmZmZmZmZmZmZmZjtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogOTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNQVhfU0FGRV9JTlRFR0VSOiAweDFmZmZmZmZmZmZmZmZmfSk7XG5cbi8qKiovIH0sXG4vKiA5NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNSU5fU0FGRV9JTlRFR0VSOiAtMHgxZmZmZmZmZmZmZmZmZn0pO1xuXG4vKioqLyB9LFxuLyogOTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRwYXJzZUZsb2F0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5Nik7XG5cdC8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE51bWJlci5wYXJzZUZsb2F0ICE9ICRwYXJzZUZsb2F0KSwgJ051bWJlcicsIHtwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdH0pO1xuXG4vKioqLyB9LFxuLyogOTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkcGFyc2VGbG9hdCA9IF9fd2VicGFja19yZXF1aXJlX18oMikucGFyc2VGbG9hdFxuXHQgICwgJHRyaW0gICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgxKS50cmltO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gMSAvICRwYXJzZUZsb2F0KF9fd2VicGFja19yZXF1aXJlX18oODIpICsgJy0wJykgIT09IC1JbmZpbml0eSA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyKXtcblx0ICB2YXIgc3RyaW5nID0gJHRyaW0oU3RyaW5nKHN0ciksIDMpXG5cdCAgICAsIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHN0cmluZyk7XG5cdCAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiBzdHJpbmcuY2hhckF0KDApID09ICctJyA/IC0wIDogcmVzdWx0O1xuXHR9IDogJHBhcnNlRmxvYXQ7XG5cbi8qKiovIH0sXG4vKiA5NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRwYXJzZUludCA9IF9fd2VicGFja19yZXF1aXJlX18oOTgpO1xuXHQvLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE51bWJlci5wYXJzZUludCAhPSAkcGFyc2VJbnQpLCAnTnVtYmVyJywge3BhcnNlSW50OiAkcGFyc2VJbnR9KTtcblxuLyoqKi8gfSxcbi8qIDk4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJHBhcnNlSW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKS5wYXJzZUludFxuXHQgICwgJHRyaW0gICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MSkudHJpbVxuXHQgICwgd3MgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4Milcblx0ICAsIGhleCAgICAgICA9IC9eW1xcLStdPzBbeFhdLztcblxuXHRtb2R1bGUuZXhwb3J0cyA9ICRwYXJzZUludCh3cyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3cyArICcweDE2JykgIT09IDIyID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyLCByYWRpeCl7XG5cdCAgdmFyIHN0cmluZyA9ICR0cmltKFN0cmluZyhzdHIpLCAzKTtcblx0ICByZXR1cm4gJHBhcnNlSW50KHN0cmluZywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3Qoc3RyaW5nKSA/IDE2IDogMTApKTtcblx0fSA6ICRwYXJzZUludDtcblxuLyoqKi8gfSxcbi8qIDk5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHBhcnNlSW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5OCk7XG5cdC8vIDE4LjIuNSBwYXJzZUludChzdHJpbmcsIHJhZGl4KVxuXHQkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuRiAqIChwYXJzZUludCAhPSAkcGFyc2VJbnQpLCB7cGFyc2VJbnQ6ICRwYXJzZUludH0pO1xuXG4vKioqLyB9LFxuLyogMTAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkcGFyc2VGbG9hdCA9IF9fd2VicGFja19yZXF1aXJlX18oOTYpO1xuXHQvLyAxOC4yLjQgcGFyc2VGbG9hdChzdHJpbmcpXG5cdCRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GICogKHBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQpLCB7cGFyc2VGbG9hdDogJHBhcnNlRmxvYXR9KTtcblxuLyoqKi8gfSxcbi8qIDEwMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjMgTWF0aC5hY29zaCh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGxvZzFwICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwMilcblx0ICAsIHNxcnQgICAgPSBNYXRoLnNxcnRcblx0ICAsICRhY29zaCAgPSBNYXRoLmFjb3NoO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYWNvc2hcblx0ICAvLyBWOCBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNTA5XG5cdCAgJiYgTWF0aC5mbG9vcigkYWNvc2goTnVtYmVyLk1BWF9WQUxVRSkpID09IDcxMFxuXHQgIC8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hY29zaChJbmZpbml0eSkgLT4gTmFOIFxuXHQgICYmICRhY29zaChJbmZpbml0eSkgPT0gSW5maW5pdHlcblx0KSwgJ01hdGgnLCB7XG5cdCAgYWNvc2g6IGZ1bmN0aW9uIGFjb3NoKHgpe1xuXHQgICAgcmV0dXJuICh4ID0gK3gpIDwgMSA/IE5hTiA6IHggPiA5NDkwNjI2NS42MjQyNTE1NlxuXHQgICAgICA/IE1hdGgubG9nKHgpICsgTWF0aC5MTjJcblx0ICAgICAgOiBsb2cxcCh4IC0gMSArIHNxcnQoeCAtIDEpICogc3FydCh4ICsgMSkpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG5cdG1vZHVsZS5leHBvcnRzID0gTWF0aC5sb2cxcCB8fCBmdW5jdGlvbiBsb2cxcCh4KXtcblx0ICByZXR1cm4gKHggPSAreCkgPiAtMWUtOCAmJiB4IDwgMWUtOCA/IHggLSB4ICogeCAvIDIgOiBNYXRoLmxvZygxICsgeCk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkYXNpbmggID0gTWF0aC5hc2luaDtcblxuXHRmdW5jdGlvbiBhc2luaCh4KXtcblx0ICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IE1hdGgubG9nKHggKyBNYXRoLnNxcnQoeCAqIHggKyAxKSk7XG5cdH1cblxuXHQvLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYXNpbmgoMCkgLT4gLTAgXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYXNpbmggJiYgMSAvICRhc2luaCgwKSA+IDApLCAnTWF0aCcsIHthc2luaDogYXNpbmh9KTtcblxuLyoqKi8gfSxcbi8qIDEwNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRhdGFuaCAgPSBNYXRoLmF0YW5oO1xuXG5cdC8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hdGFuaCgtMCkgLT4gMCBcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhdGFuaCAmJiAxIC8gJGF0YW5oKC0wKSA8IDApLCAnTWF0aCcsIHtcblx0ICBhdGFuaDogZnVuY3Rpb24gYXRhbmgoeCl7XG5cdCAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiBNYXRoLmxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi45IE1hdGguY2JydCh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHNpZ24gICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGNicnQ6IGZ1bmN0aW9uIGNicnQoeCl7XG5cdCAgICByZXR1cm4gc2lnbih4ID0gK3gpICogTWF0aC5wb3coTWF0aC5hYnMoeCksIDEgLyAzKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG5cdG1vZHVsZS5leHBvcnRzID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uIHNpZ24oeCl7XG5cdCAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGNsejMyOiBmdW5jdGlvbiBjbHozMih4KXtcblx0ICAgIHJldHVybiAoeCA+Pj49IDApID8gMzEgLSBNYXRoLmZsb29yKE1hdGgubG9nKHggKyAwLjUpICogTWF0aC5MT0cyRSkgOiAzMjtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTA4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMTIgTWF0aC5jb3NoKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBjb3NoOiBmdW5jdGlvbiBjb3NoKHgpe1xuXHQgICAgcmV0dXJuIChleHAoeCA9ICt4KSArIGV4cCgteCkpIC8gMjtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRleHBtMSAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExMCk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoJGV4cG0xICE9IE1hdGguZXhwbTEpLCAnTWF0aCcsIHtleHBtMTogJGV4cG0xfSk7XG5cbi8qKiovIH0sXG4vKiAxMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG5cdHZhciAkZXhwbTEgPSBNYXRoLmV4cG0xO1xuXHRtb2R1bGUuZXhwb3J0cyA9ICghJGV4cG0xXG5cdCAgLy8gT2xkIEZGIGJ1Z1xuXHQgIHx8ICRleHBtMSgxMCkgPiAyMjAyNS40NjU3OTQ4MDY3MTkgfHwgJGV4cG0xKDEwKSA8IDIyMDI1LjQ2NTc5NDgwNjcxNjUxNjhcblx0ICAvLyBUb3IgQnJvd3NlciBidWdcblx0ICB8fCAkZXhwbTEoLTJlLTE3KSAhPSAtMmUtMTdcblx0KSA/IGZ1bmN0aW9uIGV4cG0xKHgpe1xuXHQgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBNYXRoLmV4cCh4KSAtIDE7XG5cdH0gOiAkZXhwbTE7XG5cbi8qKiovIH0sXG4vKiAxMTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgc2lnbiAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMDYpXG5cdCAgLCBwb3cgICAgICAgPSBNYXRoLnBvd1xuXHQgICwgRVBTSUxPTiAgID0gcG93KDIsIC01Milcblx0ICAsIEVQU0lMT04zMiA9IHBvdygyLCAtMjMpXG5cdCAgLCBNQVgzMiAgICAgPSBwb3coMiwgMTI3KSAqICgyIC0gRVBTSUxPTjMyKVxuXHQgICwgTUlOMzIgICAgID0gcG93KDIsIC0xMjYpO1xuXG5cdHZhciByb3VuZFRpZXNUb0V2ZW4gPSBmdW5jdGlvbihuKXtcblx0ICByZXR1cm4gbiArIDEgLyBFUFNJTE9OIC0gMSAvIEVQU0lMT047XG5cdH07XG5cblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgZnJvdW5kOiBmdW5jdGlvbiBmcm91bmQoeCl7XG5cdCAgICB2YXIgJGFicyAgPSBNYXRoLmFicyh4KVxuXHQgICAgICAsICRzaWduID0gc2lnbih4KVxuXHQgICAgICAsIGEsIHJlc3VsdDtcblx0ICAgIGlmKCRhYnMgPCBNSU4zMilyZXR1cm4gJHNpZ24gKiByb3VuZFRpZXNUb0V2ZW4oJGFicyAvIE1JTjMyIC8gRVBTSUxPTjMyKSAqIE1JTjMyICogRVBTSUxPTjMyO1xuXHQgICAgYSA9ICgxICsgRVBTSUxPTjMyIC8gRVBTSUxPTikgKiAkYWJzO1xuXHQgICAgcmVzdWx0ID0gYSAtIChhIC0gJGFicyk7XG5cdCAgICBpZihyZXN1bHQgPiBNQVgzMiB8fCByZXN1bHQgIT0gcmVzdWx0KXJldHVybiAkc2lnbiAqIEluZmluaXR5O1xuXHQgICAgcmV0dXJuICRzaWduICogcmVzdWx0O1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGFicyAgICAgPSBNYXRoLmFicztcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgaHlwb3Q6IGZ1bmN0aW9uIGh5cG90KHZhbHVlMSwgdmFsdWUyKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHQgICAgdmFyIHN1bSAgPSAwXG5cdCAgICAgICwgaSAgICA9IDBcblx0ICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgICAsIGxhcmcgPSAwXG5cdCAgICAgICwgYXJnLCBkaXY7XG5cdCAgICB3aGlsZShpIDwgYUxlbil7XG5cdCAgICAgIGFyZyA9IGFicyhhcmd1bWVudHNbaSsrXSk7XG5cdCAgICAgIGlmKGxhcmcgPCBhcmcpe1xuXHQgICAgICAgIGRpdiAgPSBsYXJnIC8gYXJnO1xuXHQgICAgICAgIHN1bSAgPSBzdW0gKiBkaXYgKiBkaXYgKyAxO1xuXHQgICAgICAgIGxhcmcgPSBhcmc7XG5cdCAgICAgIH0gZWxzZSBpZihhcmcgPiAwKXtcblx0ICAgICAgICBkaXYgID0gYXJnIC8gbGFyZztcblx0ICAgICAgICBzdW0gKz0gZGl2ICogZGl2O1xuXHQgICAgICB9IGVsc2Ugc3VtICs9IGFyZztcblx0ICAgIH1cblx0ICAgIHJldHVybiBsYXJnID09PSBJbmZpbml0eSA/IEluZmluaXR5IDogbGFyZyAqIE1hdGguc3FydChzdW0pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkaW11bCAgID0gTWF0aC5pbXVsO1xuXG5cdC8vIHNvbWUgV2ViS2l0IHZlcnNpb25zIGZhaWxzIHdpdGggYmlnIG51bWJlcnMsIHNvbWUgaGFzIHdyb25nIGFyaXR5XG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHJldHVybiAkaW11bCgweGZmZmZmZmZmLCA1KSAhPSAtNSB8fCAkaW11bC5sZW5ndGggIT0gMjtcblx0fSksICdNYXRoJywge1xuXHQgIGltdWw6IGZ1bmN0aW9uIGltdWwoeCwgeSl7XG5cdCAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG5cdCAgICAgICwgeG4gPSAreFxuXHQgICAgICAsIHluID0gK3lcblx0ICAgICAgLCB4bCA9IFVJTlQxNiAmIHhuXG5cdCAgICAgICwgeWwgPSBVSU5UMTYgJiB5bjtcblx0ICAgIHJldHVybiAwIHwgeGwgKiB5bCArICgoVUlOVDE2ICYgeG4gPj4+IDE2KSAqIHlsICsgeGwgKiAoVUlOVDE2ICYgeW4gPj4+IDE2KSA8PCAxNiA+Pj4gMCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDExNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjIxIE1hdGgubG9nMTAoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBsb2cxMDogZnVuY3Rpb24gbG9nMTAoeCl7XG5cdCAgICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMTA7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDExNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtsb2cxcDogX193ZWJwYWNrX3JlcXVpcmVfXygxMDIpfSk7XG5cbi8qKiovIH0sXG4vKiAxMTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4yMiBNYXRoLmxvZzIoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICBsb2cyOiBmdW5jdGlvbiBsb2cyKHgpe1xuXHQgICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjI7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDExNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge3NpZ246IF9fd2VicGFja19yZXF1aXJlX18oMTA2KX0pO1xuXG4vKioqLyB9LFxuLyogMTE4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMzAgTWF0aC5zaW5oKHgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZXhwbTEgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEwKVxuXHQgICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG5cdC8vIFY4IG5lYXIgQ2hyb21pdW0gMzggaGFzIGEgcHJvYmxlbSB3aXRoIHZlcnkgc21hbGwgbnVtYmVyc1xuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gIU1hdGguc2luaCgtMmUtMTcpICE9IC0yZS0xNztcblx0fSksICdNYXRoJywge1xuXHQgIHNpbmg6IGZ1bmN0aW9uIHNpbmgoeCl7XG5cdCAgICByZXR1cm4gTWF0aC5hYnMoeCA9ICt4KSA8IDFcblx0ICAgICAgPyAoZXhwbTEoeCkgLSBleHBtMSgteCkpIC8gMlxuXHQgICAgICA6IChleHAoeCAtIDEpIC0gZXhwKC14IC0gMSkpICogKE1hdGguRSAvIDIpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjIuMi4zMyBNYXRoLnRhbmgoeClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBleHBtMSAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMTApXG5cdCAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIHRhbmg6IGZ1bmN0aW9uIHRhbmgoeCl7XG5cdCAgICB2YXIgYSA9IGV4cG0xKHggPSAreClcblx0ICAgICAgLCBiID0gZXhwbTEoLXgpO1xuXHQgICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTIwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMC4yLjIuMzQgTWF0aC50cnVuYyh4KVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIHRydW5jOiBmdW5jdGlvbiB0cnVuYyhpdCl7XG5cdCAgICByZXR1cm4gKGl0ID4gMCA/IE1hdGguZmxvb3IgOiBNYXRoLmNlaWwpKGl0KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTIxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b0luZGV4ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpXG5cdCAgLCBmcm9tQ2hhckNvZGUgICA9IFN0cmluZy5mcm9tQ2hhckNvZGVcblx0ICAsICRmcm9tQ29kZVBvaW50ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQ7XG5cblx0Ly8gbGVuZ3RoIHNob3VsZCBiZSAxLCBvbGQgRkYgcHJvYmxlbVxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcblx0ICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxuXHQgIGZyb21Db2RlUG9pbnQ6IGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoeCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0ICAgIHZhciByZXMgID0gW11cblx0ICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgICAsIGkgICAgPSAwXG5cdCAgICAgICwgY29kZTtcblx0ICAgIHdoaWxlKGFMZW4gPiBpKXtcblx0ICAgICAgY29kZSA9ICthcmd1bWVudHNbaSsrXTtcblx0ICAgICAgaWYodG9JbmRleChjb2RlLCAweDEwZmZmZikgIT09IGNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XG5cdCAgICAgIHJlcy5wdXNoKGNvZGUgPCAweDEwMDAwXG5cdCAgICAgICAgPyBmcm9tQ2hhckNvZGUoY29kZSlcblx0ICAgICAgICA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApXG5cdCAgICAgICk7XG5cdCAgICB9IHJldHVybiByZXMuam9pbignJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEyMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCB0b0xlbmd0aCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1N0cmluZycsIHtcblx0ICAvLyAyMS4xLjIuNCBTdHJpbmcucmF3KGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxuXHQgIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKXtcblx0ICAgIHZhciB0cGwgID0gdG9JT2JqZWN0KGNhbGxTaXRlLnJhdylcblx0ICAgICAgLCBsZW4gID0gdG9MZW5ndGgodHBsLmxlbmd0aClcblx0ICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgICAsIHJlcyAgPSBbXVxuXHQgICAgICAsIGkgICAgPSAwO1xuXHQgICAgd2hpbGUobGVuID4gaSl7XG5cdCAgICAgIHJlcy5wdXNoKFN0cmluZyh0cGxbaSsrXSkpO1xuXHQgICAgICBpZihpIDwgYUxlbilyZXMucHVzaChTdHJpbmcoYXJndW1lbnRzW2ldKSk7XG5cdCAgICB9IHJldHVybiByZXMuam9pbignJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEyMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyAyMS4xLjMuMjUgU3RyaW5nLnByb3RvdHlwZS50cmltKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg4MSkoJ3RyaW0nLCBmdW5jdGlvbigkdHJpbSl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHRyaW0oKXtcblx0ICAgIHJldHVybiAkdHJpbSh0aGlzLCAzKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEyNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRhdCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyNSkoZmFsc2UpO1xuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcblx0ICAvLyAyMS4xLjMuMyBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0KHBvcylcblx0ICBjb2RlUG9pbnRBdDogZnVuY3Rpb24gY29kZVBvaW50QXQocG9zKXtcblx0ICAgIHJldHVybiAkYXQodGhpcywgcG9zKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTI1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNilcblx0ICAsIGRlZmluZWQgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xuXHQvLyB0cnVlICAtPiBTdHJpbmcjYXRcblx0Ly8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcblx0ICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcblx0ICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG5cdCAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG5cdCAgICAgICwgbCA9IHMubGVuZ3RoXG5cdCAgICAgICwgYSwgYjtcblx0ICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG5cdCAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuXHQgICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcblx0ICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcblx0ICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEyNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjEuMS4zLjYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aChzZWFyY2hTdHJpbmcgWywgZW5kUG9zaXRpb25dKVxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b0xlbmd0aCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgY29udGV4dCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjcpXG5cdCAgLCBFTkRTX1dJVEggPSAnZW5kc1dpdGgnXG5cdCAgLCAkZW5kc1dpdGggPSAnJ1tFTkRTX1dJVEhdO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXygxMjkpKEVORFNfV0lUSCksICdTdHJpbmcnLCB7XG5cdCAgZW5kc1dpdGg6IGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaFN0cmluZyAvKiwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKXtcblx0ICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIEVORFNfV0lUSClcblx0ICAgICAgLCBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG5cdCAgICAgICwgbGVuICAgID0gdG9MZW5ndGgodGhhdC5sZW5ndGgpXG5cdCAgICAgICwgZW5kICAgID0gZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGxlbiA6IE1hdGgubWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKVxuXHQgICAgICAsIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuXHQgICAgcmV0dXJuICRlbmRzV2l0aFxuXHQgICAgICA/ICRlbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKVxuXHQgICAgICA6IHRoYXQuc2xpY2UoZW5kIC0gc2VhcmNoLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMjcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGhlbHBlciBmb3IgU3RyaW5nI3tzdGFydHNXaXRoLCBlbmRzV2l0aCwgaW5jbHVkZXN9XG5cdHZhciBpc1JlZ0V4cCA9IF9fd2VicGFja19yZXF1aXJlX18oMTI4KVxuXHQgICwgZGVmaW5lZCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIHNlYXJjaFN0cmluZywgTkFNRSl7XG5cdCAgaWYoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSl0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcblx0ICByZXR1cm4gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTI4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGNvZiAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMilcblx0ICAsIE1BVENIICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ21hdGNoJyk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuXHQgIHZhciBpc1JlZ0V4cDtcblx0ICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxMjkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBNQVRDSCA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdtYXRjaCcpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG5cdCAgdmFyIHJlID0gLy4vO1xuXHQgIHRyeSB7XG5cdCAgICAnLy4vJ1tLRVldKHJlKTtcblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgdHJ5IHtcblx0ICAgICAgcmVbTUFUQ0hdID0gZmFsc2U7XG5cdCAgICAgIHJldHVybiAhJy8uLydbS0VZXShyZSk7XG5cdCAgICB9IGNhdGNoKGYpeyAvKiBlbXB0eSAqLyB9XG5cdCAgfSByZXR1cm4gdHJ1ZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDEzMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjEuMS4zLjcgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcsIHBvc2l0aW9uID0gMClcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBjb250ZXh0ICA9IF9fd2VicGFja19yZXF1aXJlX18oMTI3KVxuXHQgICwgSU5DTFVERVMgPSAnaW5jbHVkZXMnO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXygxMjkpKElOQ0xVREVTKSwgJ1N0cmluZycsIHtcblx0ICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xuXHQgICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcblx0ICAgICAgLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEzMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuXHQgIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcblx0ICByZXBlYXQ6IF9fd2VicGFja19yZXF1aXJlX18oODUpXG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTMyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMS4xLjMuMTggU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyBbLCBwb3NpdGlvbiBdKVxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvTGVuZ3RoICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIGNvbnRleHQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjcpXG5cdCAgLCBTVEFSVFNfV0lUSCA9ICdzdGFydHNXaXRoJ1xuXHQgICwgJHN0YXJ0c1dpdGggPSAnJ1tTVEFSVFNfV0lUSF07XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyOSkoU1RBUlRTX1dJVEgpLCAnU3RyaW5nJywge1xuXHQgIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xuXHQgICAgdmFyIHRoYXQgICA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBTVEFSVFNfV0lUSClcblx0ICAgICAgLCBpbmRleCAgPSB0b0xlbmd0aChNYXRoLm1pbihhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdGhhdC5sZW5ndGgpKVxuXHQgICAgICAsIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuXHQgICAgcmV0dXJuICRzdGFydHNXaXRoXG5cdCAgICAgID8gJHN0YXJ0c1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGluZGV4KVxuXHQgICAgICA6IHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTMzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkYXQgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjUpKHRydWUpO1xuXG5cdC8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzQpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcblx0ICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG5cdCAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcblx0Ly8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxuXHR9LCBmdW5jdGlvbigpe1xuXHQgIHZhciBPICAgICA9IHRoaXMuX3Rcblx0ICAgICwgaW5kZXggPSB0aGlzLl9pXG5cdCAgICAsIHBvaW50O1xuXHQgIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG5cdCAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuXHQgIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuXHQgIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTM0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBMSUJSQVJZICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpXG5cdCAgLCAkZXhwb3J0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHJlZGVmaW5lICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNilcblx0ICAsIGhpZGUgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KVxuXHQgICwgaGFzICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCBJdGVyYXRvcnMgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTM1KVxuXHQgICwgJGl0ZXJDcmVhdGUgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNilcblx0ICAsIHNldFRvU3RyaW5nVGFnID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMilcblx0ICAsIGdldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nylcblx0ICAsIElURVJBVE9SICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ2l0ZXJhdG9yJylcblx0ICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcblx0ICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG5cdCAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuXHQgICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxuXHR2YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcblx0ICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cdCAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuXHQgICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuXHQgICAgc3dpdGNoKGtpbmQpe1xuXHQgICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG5cdCAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG5cdCAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG5cdCAgfTtcblx0ICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuXHQgICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcblx0ICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG5cdCAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuXHQgICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG5cdCAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuXHQgICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuXHQgICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuXHQgICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuXHQgIC8vIEZpeCBuYXRpdmVcblx0ICBpZigkYW55TmF0aXZlKXtcblx0ICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG5cdCAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG5cdCAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcblx0ICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG5cdCAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuXHQgICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuXHQgICAgfVxuXHQgIH1cblx0ICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG5cdCAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcblx0ICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuXHQgICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcblx0ICB9XG5cdCAgLy8gRGVmaW5lIGl0ZXJhdG9yXG5cdCAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuXHQgICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcblx0ICB9XG5cdCAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuXHQgIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuXHQgIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG5cdCAgaWYoREVGQVVMVCl7XG5cdCAgICBtZXRob2RzID0ge1xuXHQgICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcblx0ICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuXHQgICAgICBlbnRyaWVzOiAkZW50cmllc1xuXHQgICAgfTtcblx0ICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuXHQgICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcblx0ICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG5cdCAgfVxuXHQgIHJldHVybiBtZXRob2RzO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTM1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vKioqLyB9LFxuLyogMTM2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciBjcmVhdGUgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpXG5cdCAgLCBkZXNjcmlwdG9yICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpXG5cdCAgLCBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpXG5cdCAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG5cdC8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5cdF9fd2VicGFja19yZXF1aXJlX18oOCkoSXRlcmF0b3JQcm90b3R5cGUsIF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG5cdCAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuXHQgIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTM3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjIgU3RyaW5nLnByb3RvdHlwZS5hbmNob3IobmFtZSlcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdhbmNob3InLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gYW5jaG9yKG5hbWUpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnbmFtZScsIG5hbWUpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxMzggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZmFpbHMgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKVxuXHQgICwgcXVvdCAgICA9IC9cIi9nO1xuXHQvLyBCLjIuMy4yLjEgQ3JlYXRlSFRNTChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSlcblx0dmFyIGNyZWF0ZUhUTUwgPSBmdW5jdGlvbihzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHQgIHZhciBTICA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpXG5cdCAgICAsIHAxID0gJzwnICsgdGFnO1xuXHQgIGlmKGF0dHJpYnV0ZSAhPT0gJycpcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UocXVvdCwgJyZxdW90OycpICsgJ1wiJztcblx0ICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCBleGVjKXtcblx0ICB2YXIgTyA9IHt9O1xuXHQgIE9bTkFNRV0gPSBleGVjKGNyZWF0ZUhUTUwpO1xuXHQgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgIHZhciB0ZXN0ID0gJydbTkFNRV0oJ1wiJyk7XG5cdCAgICByZXR1cm4gdGVzdCAhPT0gdGVzdC50b0xvd2VyQ2FzZSgpIHx8IHRlc3Quc3BsaXQoJ1wiJykubGVuZ3RoID4gMztcblx0ICB9KSwgJ1N0cmluZycsIE8pO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTM5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjMgU3RyaW5nLnByb3RvdHlwZS5iaWcoKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ2JpZycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBiaWcoKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiaWcnLCAnJywgJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuNCBTdHJpbmcucHJvdG90eXBlLmJsaW5rKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdibGluaycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBibGluaygpe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2JsaW5rJywgJycsICcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjUgU3RyaW5nLnByb3RvdHlwZS5ib2xkKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdib2xkJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGJvbGQoKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiJywgJycsICcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjYgU3RyaW5nLnByb3RvdHlwZS5maXhlZCgpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnZml4ZWQnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gZml4ZWQoKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICd0dCcsICcnLCAnJyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy43IFN0cmluZy5wcm90b3R5cGUuZm9udGNvbG9yKGNvbG9yKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ2ZvbnRjb2xvcicsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBmb250Y29sb3IoY29sb3Ipe1xuXHQgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2ZvbnQnLCAnY29sb3InLCBjb2xvcik7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE0NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBCLjIuMy44IFN0cmluZy5wcm90b3R5cGUuZm9udHNpemUoc2l6ZSlcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdmb250c2l6ZScsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBmb250c2l6ZShzaXplKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ3NpemUnLCBzaXplKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQ1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjkgU3RyaW5nLnByb3RvdHlwZS5pdGFsaWNzKClcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzgpKCdpdGFsaWNzJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGl0YWxpY3MoKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdpJywgJycsICcnKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQ2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjEwIFN0cmluZy5wcm90b3R5cGUubGluayh1cmwpXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM4KSgnbGluaycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBsaW5rKHVybCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTQ3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIEIuMi4zLjExIFN0cmluZy5wcm90b3R5cGUuc21hbGwoKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ3NtYWxsJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHNtYWxsKCl7XG5cdCAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc21hbGwnLCAnJywgJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuMTIgU3RyaW5nLnByb3RvdHlwZS5zdHJpa2UoKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ3N0cmlrZScsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBzdHJpa2UoKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdHJpa2UnLCAnJywgJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5zdWIoKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ3N1YicsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBzdWIoKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQi4yLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5zdXAoKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEzOCkoJ3N1cCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBzdXAoKXtcblx0ICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdXAnLCAnJywgJycpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIyLjEuMi4yIC8gMTUuNC4zLjIgQXJyYXkuaXNBcnJheShhcmcpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ0FycmF5Jywge2lzQXJyYXk6IF9fd2VicGFja19yZXF1aXJlX18oNDMpfSk7XG5cbi8qKiovIH0sXG4vKiAxNTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGN0eCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOClcblx0ICAsICRleHBvcnQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9PYmplY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgY2FsbCAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Mylcblx0ICAsIGlzQXJyYXlJdGVyICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTQpXG5cdCAgLCB0b0xlbmd0aCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCBjcmVhdGVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oMTU1KVxuXHQgICwgZ2V0SXRlckZuICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Nik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXygxNTcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcblx0ICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcblx0ICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuXHQgICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG5cdCAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcblx0ICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuXHQgICAgICAsIGluZGV4ICAgPSAwXG5cdCAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuXHQgICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcblx0ICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcblx0ICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuXHQgICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuXHQgICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG5cdCAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG5cdCAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG5cdCAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfVxuXHR9KTtcblxuXG4vKioqLyB9LFxuLyogMTUzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5cdHZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuXHQgIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG5cdCAgfSBjYXRjaChlKXtcblx0ICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG5cdCAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuXHQgICAgdGhyb3cgZTtcblx0ICB9XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcblx0dmFyIEl0ZXJhdG9ycyAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNSlcblx0ICAsIElURVJBVE9SICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgnaXRlcmF0b3InKVxuXHQgICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTU1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpXG5cdCAgLCBjcmVhdGVEZXNjICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcblx0ICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuXHQgIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTU2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgY2xhc3NvZiAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Mylcblx0ICAsIElURVJBVE9SICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdpdGVyYXRvcicpXG5cdCAgLCBJdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNSk7XG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuXHQgICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuXHQgICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE1NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIElURVJBVE9SICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpKCdpdGVyYXRvcicpXG5cdCAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxuXHR0cnkge1xuXHQgIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcblx0ICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuXHQgIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xuXHR9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG5cdCAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuXHQgIHZhciBzYWZlID0gZmFsc2U7XG5cdCAgdHJ5IHtcblx0ICAgIHZhciBhcnIgID0gWzddXG5cdCAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcblx0ICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuXHQgICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuXHQgICAgZXhlYyhhcnIpO1xuXHQgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblx0ICByZXR1cm4gc2FmZTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE1OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBjcmVhdGVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oMTU1KTtcblxuXHQvLyBXZWJLaXQgQXJyYXkub2YgaXNuJ3QgZ2VuZXJpY1xuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICBmdW5jdGlvbiBGKCl7fVxuXHQgIHJldHVybiAhKEFycmF5Lm9mLmNhbGwoRikgaW5zdGFuY2VvZiBGKTtcblx0fSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjIuMyBBcnJheS5vZiggLi4uaXRlbXMpXG5cdCAgb2Y6IGZ1bmN0aW9uIG9mKC8qIC4uLmFyZ3MgKi8pe1xuXHQgICAgdmFyIGluZGV4ICA9IDBcblx0ICAgICAgLCBhTGVuICAgPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAgICwgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KShhTGVuKTtcblx0ICAgIHdoaWxlKGFMZW4gPiBpbmRleCljcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBhcmd1bWVudHNbaW5kZXgrK10pO1xuXHQgICAgcmVzdWx0Lmxlbmd0aCA9IGFMZW47XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5qb2luKHNlcGFyYXRvcilcblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBhcnJheUpvaW4gPSBbXS5qb2luO1xuXG5cdC8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBzdHJpbmdzXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKF9fd2VicGFja19yZXF1aXJlX18oMzEpICE9IE9iamVjdCB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKGFycmF5Sm9pbikpLCAnQXJyYXknLCB7XG5cdCAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3Ipe1xuXHQgICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKHRvSU9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNjAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QsIGFyZyl7XG5cdCAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICBhcmcgPyBtZXRob2QuY2FsbChudWxsLCBmdW5jdGlvbigpe30sIDEpIDogbWV0aG9kLmNhbGwobnVsbCk7XG5cdCAgfSk7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNjEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBodG1sICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Nilcblx0ICAsIGNvZiAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKVxuXHQgICwgdG9JbmRleCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpXG5cdCAgLCB0b0xlbmd0aCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIGFycmF5U2xpY2UgPSBbXS5zbGljZTtcblxuXHQvLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIGlmKGh0bWwpYXJyYXlTbGljZS5jYWxsKGh0bWwpO1xuXHR9KSwgJ0FycmF5Jywge1xuXHQgIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKXtcblx0ICAgIHZhciBsZW4gICA9IHRvTGVuZ3RoKHRoaXMubGVuZ3RoKVxuXHQgICAgICAsIGtsYXNzID0gY29mKHRoaXMpO1xuXHQgICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XG5cdCAgICBpZihrbGFzcyA9PSAnQXJyYXknKXJldHVybiBhcnJheVNsaWNlLmNhbGwodGhpcywgYmVnaW4sIGVuZCk7XG5cdCAgICB2YXIgc3RhcnQgID0gdG9JbmRleChiZWdpbiwgbGVuKVxuXHQgICAgICAsIHVwVG8gICA9IHRvSW5kZXgoZW5kLCBsZW4pXG5cdCAgICAgICwgc2l6ZSAgID0gdG9MZW5ndGgodXBUbyAtIHN0YXJ0KVxuXHQgICAgICAsIGNsb25lZCA9IEFycmF5KHNpemUpXG5cdCAgICAgICwgaSAgICAgID0gMDtcblx0ICAgIGZvcig7IGkgPCBzaXplOyBpKyspY2xvbmVkW2ldID0ga2xhc3MgPT0gJ1N0cmluZydcblx0ICAgICAgPyB0aGlzLmNoYXJBdChzdGFydCArIGkpXG5cdCAgICAgIDogdGhpc1tzdGFydCArIGldO1xuXHQgICAgcmV0dXJuIGNsb25lZDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTYyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgdG9PYmplY3QgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIGZhaWxzICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsICRzb3J0ICAgICA9IFtdLnNvcnRcblx0ICAsIHRlc3QgICAgICA9IFsxLCAyLCAzXTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuXHQgIC8vIElFOC1cblx0ICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcblx0fSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgLy8gVjggYnVnXG5cdCAgdGVzdC5zb3J0KG51bGwpO1xuXHQgIC8vIE9sZCBXZWJLaXRcblx0fSkgfHwgIV9fd2VicGFja19yZXF1aXJlX18oMTYwKSgkc29ydCkpLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjI1IEFycmF5LnByb3RvdHlwZS5zb3J0KGNvbXBhcmVmbilcblx0ICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbil7XG5cdCAgICByZXR1cm4gY29tcGFyZWZuID09PSB1bmRlZmluZWRcblx0ICAgICAgPyAkc29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpKVxuXHQgICAgICA6ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTYzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRmb3JFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpKDApXG5cdCAgLCBTVFJJQ1QgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTYwKShbXS5mb3JFYWNoLCB0cnVlKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFTVFJJQ1QsICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuMTAgLyAxNS40LjQuMTggQXJyYXkucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcblx0ICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcblx0ICAgIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNjQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuXHQvLyAxIC0+IEFycmF5I21hcFxuXHQvLyAyIC0+IEFycmF5I2ZpbHRlclxuXHQvLyAzIC0+IEFycmF5I3NvbWVcblx0Ly8gNCAtPiBBcnJheSNldmVyeVxuXHQvLyA1IC0+IEFycmF5I2ZpbmRcblx0Ly8gNiAtPiBBcnJheSNmaW5kSW5kZXhcblx0dmFyIGN0eCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOClcblx0ICAsIElPYmplY3QgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSlcblx0ICAsIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIGFzYyAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjUpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuXHQgIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG5cdCAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcblx0ICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuXHQgICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG5cdCAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcblx0ICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG5cdCAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcblx0ICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuXHQgICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuXHQgICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcblx0ICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcblx0ICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcblx0ICAgICAgLCBpbmRleCAgPSAwXG5cdCAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuXHQgICAgICAsIHZhbCwgcmVzO1xuXHQgICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcblx0ICAgICAgdmFsID0gc2VsZltpbmRleF07XG5cdCAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG5cdCAgICAgIGlmKFRZUEUpe1xuXHQgICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuXHQgICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcblx0ICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG5cdCAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuXHQgICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuXHQgICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuXHQgICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE2NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxuXHR2YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjYpO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG5cdCAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE2NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGlzQXJyYXkgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mylcblx0ICAsIFNQRUNJRVMgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ3NwZWNpZXMnKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcblx0ICB2YXIgQztcblx0ICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG5cdCAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG5cdCAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuXHQgICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG5cdCAgICBpZihpc09iamVjdChDKSl7XG5cdCAgICAgIEMgPSBDW1NQRUNJRVNdO1xuXHQgICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG5cdCAgICB9XG5cdCAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTY3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJG1hcCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KSgxKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoW10ubWFwLCB0cnVlKSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy4xNSAvIDE1LjQuNC4xOSBBcnJheS5wcm90b3R5cGUubWFwKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG5cdCAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuXHQgICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTY4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGZpbHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KSgyKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoW10uZmlsdGVyLCB0cnVlKSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy43IC8gMTUuNC40LjIwIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcblx0ICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG5cdCAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAxNjkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkc29tZSAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpKDMpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oMTYwKShbXS5zb21lLCB0cnVlKSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy4yMyAvIDE1LjQuNC4xNyBBcnJheS5wcm90b3R5cGUuc29tZShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuXHQgIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuXHQgICAgcmV0dXJuICRzb21lKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE3MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRldmVyeSAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NCkoNCk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKFtdLmV2ZXJ5LCB0cnVlKSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy41IC8gMTUuNC40LjE2IEFycmF5LnByb3RvdHlwZS5ldmVyeShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuXHQgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG5cdCAgICByZXR1cm4gJGV2ZXJ5KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE3MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRyZWR1Y2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3Mik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKFtdLnJlZHVjZSwgdHJ1ZSksICdBcnJheScsIHtcblx0ICAvLyAyMi4xLjMuMTggLyAxNS40LjQuMjEgQXJyYXkucHJvdG90eXBlLnJlZHVjZShjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG5cdCAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLyl7XG5cdCAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIGZhbHNlKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTcyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsIHRvT2JqZWN0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCBJT2JqZWN0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKVxuXHQgICwgdG9MZW5ndGggID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBjYWxsYmFja2ZuLCBhTGVuLCBtZW1vLCBpc1JpZ2h0KXtcblx0ICBhRnVuY3Rpb24oY2FsbGJhY2tmbik7XG5cdCAgdmFyIE8gICAgICA9IHRvT2JqZWN0KHRoYXQpXG5cdCAgICAsIHNlbGYgICA9IElPYmplY3QoTylcblx0ICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG5cdCAgICAsIGluZGV4ICA9IGlzUmlnaHQgPyBsZW5ndGggLSAxIDogMFxuXHQgICAgLCBpICAgICAgPSBpc1JpZ2h0ID8gLTEgOiAxO1xuXHQgIGlmKGFMZW4gPCAyKWZvcig7Oyl7XG5cdCAgICBpZihpbmRleCBpbiBzZWxmKXtcblx0ICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuXHQgICAgICBpbmRleCArPSBpO1xuXHQgICAgICBicmVhaztcblx0ICAgIH1cblx0ICAgIGluZGV4ICs9IGk7XG5cdCAgICBpZihpc1JpZ2h0ID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KXtcblx0ICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIGZvcig7aXNSaWdodCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSlpZihpbmRleCBpbiBzZWxmKXtcblx0ICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG5cdCAgfVxuXHQgIHJldHVybiBtZW1vO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTczICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJHJlZHVjZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTcyKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfX3dlYnBhY2tfcmVxdWlyZV9fKDE2MCkoW10ucmVkdWNlUmlnaHQsIHRydWUpLCAnQXJyYXknLCB7XG5cdCAgLy8gMjIuMS4zLjE5IC8gMTUuNC40LjIyIEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodChjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG5cdCAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pe1xuXHQgICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzWzFdLCB0cnVlKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTc0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGluZGV4T2YgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpKGZhbHNlKVxuXHQgICwgJG5hdGl2ZSAgICAgICA9IFtdLmluZGV4T2Zcblx0ICAsIE5FR0FUSVZFX1pFUk8gPSAhISRuYXRpdmUgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoTkVHQVRJVkVfWkVSTyB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKCRuYXRpdmUpKSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy4xMSAvIDE1LjQuNC4xNCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG5cdCAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggPSAwICovKXtcblx0ICAgIHJldHVybiBORUdBVElWRV9aRVJPXG5cdCAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcblx0ICAgICAgPyAkbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuXHQgICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50c1sxXSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE3NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGV4cG9ydCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvSU9iamVjdCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKVxuXHQgICwgdG9JbnRlZ2VyICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpXG5cdCAgLCB0b0xlbmd0aCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsICRuYXRpdmUgICAgICAgPSBbXS5sYXN0SW5kZXhPZlxuXHQgICwgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmxhc3RJbmRleE9mKDEsIC0wKSA8IDA7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoTkVHQVRJVkVfWkVSTyB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXygxNjApKCRuYXRpdmUpKSwgJ0FycmF5Jywge1xuXHQgIC8vIDIyLjEuMy4xNCAvIDE1LjQuNC4xNSBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuXHQgIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggPSBAWyotMV0gKi8pe1xuXHQgICAgLy8gY29udmVydCAtMCB0byArMFxuXHQgICAgaWYoTkVHQVRJVkVfWkVSTylyZXR1cm4gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG5cdCAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KHRoaXMpXG5cdCAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG5cdCAgICAgICwgaW5kZXggID0gbGVuZ3RoIC0gMTtcblx0ICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKWluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHRvSW50ZWdlcihhcmd1bWVudHNbMV0pKTtcblx0ICAgIGlmKGluZGV4IDwgMClpbmRleCA9IGxlbmd0aCArIGluZGV4O1xuXHQgICAgZm9yKDtpbmRleCA+PSAwOyBpbmRleC0tKWlmKGluZGV4IGluIE8paWYoT1tpbmRleF0gPT09IHNlYXJjaEVsZW1lbnQpcmV0dXJuIGluZGV4IHx8IDA7XG5cdCAgICByZXR1cm4gLTE7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE3NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2NvcHlXaXRoaW46IF9fd2VicGFja19yZXF1aXJlX18oMTc3KX0pO1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTc4KSgnY29weVdpdGhpbicpO1xuXG4vKioqLyB9LFxuLyogMTc3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgdG9JbmRleCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KVxuXHQgICwgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IFtdLmNvcHlXaXRoaW4gfHwgZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQvKj0gMCovLCBzdGFydC8qPSAwLCBlbmQgPSBAbGVuZ3RoKi8pe1xuXHQgIHZhciBPICAgICA9IHRvT2JqZWN0KHRoaXMpXG5cdCAgICAsIGxlbiAgID0gdG9MZW5ndGgoTy5sZW5ndGgpXG5cdCAgICAsIHRvICAgID0gdG9JbmRleCh0YXJnZXQsIGxlbilcblx0ICAgICwgZnJvbSAgPSB0b0luZGV4KHN0YXJ0LCBsZW4pXG5cdCAgICAsIGVuZCAgID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWRcblx0ICAgICwgY291bnQgPSBNYXRoLm1pbigoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB0b0luZGV4KGVuZCwgbGVuKSkgLSBmcm9tLCBsZW4gLSB0bylcblx0ICAgICwgaW5jICAgPSAxO1xuXHQgIGlmKGZyb20gPCB0byAmJiB0byA8IGZyb20gKyBjb3VudCl7XG5cdCAgICBpbmMgID0gLTE7XG5cdCAgICBmcm9tICs9IGNvdW50IC0gMTtcblx0ICAgIHRvICAgKz0gY291bnQgLSAxO1xuXHQgIH1cblx0ICB3aGlsZShjb3VudC0tID4gMCl7XG5cdCAgICBpZihmcm9tIGluIE8pT1t0b10gPSBPW2Zyb21dO1xuXHQgICAgZWxzZSBkZWxldGUgT1t0b107XG5cdCAgICB0byAgICs9IGluYztcblx0ICAgIGZyb20gKz0gaW5jO1xuXHQgIH0gcmV0dXJuIE87XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNzggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cblx0dmFyIFVOU0NPUEFCTEVTID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ3Vuc2NvcGFibGVzJylcblx0ICAsIEFycmF5UHJvdG8gID0gQXJyYXkucHJvdG90eXBlO1xuXHRpZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpX193ZWJwYWNrX3JlcXVpcmVfXyg4KShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG5cdCAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxNzkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtmaWxsOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4MCl9KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3OCkoJ2ZpbGwnKTtcblxuLyoqKi8gfSxcbi8qIDE4MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAsIHRvSW5kZXggID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNylcblx0ICAsIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKXtcblx0ICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhpcylcblx0ICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG5cdCAgICAsIGFMZW4gICA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICwgaW5kZXggID0gdG9JbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKVxuXHQgICAgLCBlbmQgICAgPSBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZFxuXHQgICAgLCBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvSW5kZXgoZW5kLCBsZW5ndGgpO1xuXHQgIHdoaWxlKGVuZFBvcyA+IGluZGV4KU9baW5kZXgrK10gPSB2YWx1ZTtcblx0ICByZXR1cm4gTztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE4MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgJGZpbmQgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KSg1KVxuXHQgICwgS0VZICAgICA9ICdmaW5kJ1xuXHQgICwgZm9yY2VkICA9IHRydWU7XG5cdC8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5cdGlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcblx0ICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG5cdCAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgIH1cblx0fSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTc4KShLRVkpO1xuXG4vKioqLyB9LFxuLyogMTgyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIDIyLjEuMy45IEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRmaW5kICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2NCkoNilcblx0ICAsIEtFWSAgICAgPSAnZmluZEluZGV4J1xuXHQgICwgZm9yY2VkICA9IHRydWU7XG5cdC8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5cdGlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcblx0ICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuXHQgICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICB9XG5cdH0pO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3OCkoS0VZKTtcblxuLyoqKi8gfSxcbi8qIDE4MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgYWRkVG9VbnNjb3BhYmxlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTc4KVxuXHQgICwgc3RlcCAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTg0KVxuXHQgICwgSXRlcmF0b3JzICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTM1KVxuXHQgICwgdG9JT2JqZWN0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xuXG5cdC8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcblx0Ly8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcblx0Ly8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuXHQvLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNCkoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcblx0ICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG5cdCAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcblx0ICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuXHQvLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcblx0fSwgZnVuY3Rpb24oKXtcblx0ICB2YXIgTyAgICAgPSB0aGlzLl90XG5cdCAgICAsIGtpbmQgID0gdGhpcy5fa1xuXHQgICAgLCBpbmRleCA9IHRoaXMuX2krKztcblx0ICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG5cdCAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuXHQgICAgcmV0dXJuIHN0ZXAoMSk7XG5cdCAgfVxuXHQgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuXHQgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuXHQgIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcblx0fSwgJ3ZhbHVlcycpO1xuXG5cdC8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcblx0SXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuXHRhZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5cdGFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuXHRhZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cbi8qKiovIH0sXG4vKiAxODQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuXHQgIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTg1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4NikoJ0FycmF5Jyk7XG5cbi8qKiovIH0sXG4vKiAxODYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGdsb2JhbCAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgZFAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpXG5cdCAgLCBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oNClcblx0ICAsIFNQRUNJRVMgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ3NwZWNpZXMnKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG5cdCAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcblx0ICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuXHQgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuXHQgIH0pO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMTg3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oODApXG5cdCAgLCBkUCAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSkuZlxuXHQgICwgZ09QTiAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KS5mXG5cdCAgLCBpc1JlZ0V4cCAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTI4KVxuXHQgICwgJGZsYWdzICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4OClcblx0ICAsICRSZWdFeHAgICAgICAgICAgID0gZ2xvYmFsLlJlZ0V4cFxuXHQgICwgQmFzZSAgICAgICAgICAgICAgPSAkUmVnRXhwXG5cdCAgLCBwcm90byAgICAgICAgICAgICA9ICRSZWdFeHAucHJvdG90eXBlXG5cdCAgLCByZTEgICAgICAgICAgICAgICA9IC9hL2dcblx0ICAsIHJlMiAgICAgICAgICAgICAgID0gL2EvZ1xuXHQgIC8vIFwibmV3XCIgY3JlYXRlcyBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnZ3kgaGVyZVxuXHQgICwgQ09SUkVDVF9ORVcgICAgICAgPSBuZXcgJFJlZ0V4cChyZTEpICE9PSByZTE7XG5cblx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSAmJiAoIUNPUlJFQ1RfTkVXIHx8IF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICByZTJbX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ21hdGNoJyldID0gZmFsc2U7XG5cdCAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcblx0ICByZXR1cm4gJFJlZ0V4cChyZTEpICE9IHJlMSB8fCAkUmVnRXhwKHJlMikgPT0gcmUyIHx8ICRSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcblx0fSkpKXtcblx0ICAkUmVnRXhwID0gZnVuY3Rpb24gUmVnRXhwKHAsIGYpe1xuXHQgICAgdmFyIHRpUkUgPSB0aGlzIGluc3RhbmNlb2YgJFJlZ0V4cFxuXHQgICAgICAsIHBpUkUgPSBpc1JlZ0V4cChwKVxuXHQgICAgICAsIGZpVSAgPSBmID09PSB1bmRlZmluZWQ7XG5cdCAgICByZXR1cm4gIXRpUkUgJiYgcGlSRSAmJiBwLmNvbnN0cnVjdG9yID09PSAkUmVnRXhwICYmIGZpVSA/IHBcblx0ICAgICAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FV1xuXHQgICAgICAgID8gbmV3IEJhc2UocGlSRSAmJiAhZmlVID8gcC5zb3VyY2UgOiBwLCBmKVxuXHQgICAgICAgIDogQmFzZSgocGlSRSA9IHAgaW5zdGFuY2VvZiAkUmVnRXhwKSA/IHAuc291cmNlIDogcCwgcGlSRSAmJiBmaVUgPyAkZmxhZ3MuY2FsbChwKSA6IGYpXG5cdCAgICAgICwgdGlSRSA/IHRoaXMgOiBwcm90bywgJFJlZ0V4cCk7XG5cdCAgfTtcblx0ICB2YXIgcHJveHkgPSBmdW5jdGlvbihrZXkpe1xuXHQgICAga2V5IGluICRSZWdFeHAgfHwgZFAoJFJlZ0V4cCwga2V5LCB7XG5cdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuXHQgICAgICBzZXQ6IGZ1bmN0aW9uKGl0KXsgQmFzZVtrZXldID0gaXQ7IH1cblx0ICAgIH0pO1xuXHQgIH07XG5cdCAgZm9yKHZhciBrZXlzID0gZ09QTihCYXNlKSwgaSA9IDA7IGtleXMubGVuZ3RoID4gaTsgKXByb3h5KGtleXNbaSsrXSk7XG5cdCAgcHJvdG8uY29uc3RydWN0b3IgPSAkUmVnRXhwO1xuXHQgICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG5cdCAgX193ZWJwYWNrX3JlcXVpcmVfXygxNikoZ2xvYmFsLCAnUmVnRXhwJywgJFJlZ0V4cCk7XG5cdH1cblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4NikoJ1JlZ0V4cCcpO1xuXG4vKioqLyB9LFxuLyogMTg4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG5cdHZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG5cdCAgdmFyIHRoYXQgICA9IGFuT2JqZWN0KHRoaXMpXG5cdCAgICAsIHJlc3VsdCA9ICcnO1xuXHQgIGlmKHRoYXQuZ2xvYmFsKSAgICAgcmVzdWx0ICs9ICdnJztcblx0ICBpZih0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG5cdCAgaWYodGhhdC5tdWx0aWxpbmUpICByZXN1bHQgKz0gJ20nO1xuXHQgIGlmKHRoYXQudW5pY29kZSkgICAgcmVzdWx0ICs9ICd1Jztcblx0ICBpZih0aGF0LnN0aWNreSkgICAgIHJlc3VsdCArPSAneSc7XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDE4OSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5MCk7XG5cdHZhciBhbk9iamVjdCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCAkZmxhZ3MgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTg4KVxuXHQgICwgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpXG5cdCAgLCBUT19TVFJJTkcgICA9ICd0b1N0cmluZydcblx0ICAsICR0b1N0cmluZyAgID0gLy4vW1RPX1NUUklOR107XG5cblx0dmFyIGRlZmluZSA9IGZ1bmN0aW9uKGZuKXtcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcblx0fTtcblxuXHQvLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5cdGlmKF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHtzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJ30pICE9ICcvYS9iJzsgfSkpe1xuXHQgIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpe1xuXHQgICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcblx0ICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG5cdCAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcblx0ICB9KTtcblx0Ly8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcblx0fSBlbHNlIGlmKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORyl7XG5cdCAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG5cdCAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG5cdCAgfSk7XG5cdH1cblxuLyoqKi8gfSxcbi8qIDE5MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fKDQpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKV9fd2VicGFja19yZXF1aXJlX18oOSkuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG5cdCAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgIGdldDogX193ZWJwYWNrX3JlcXVpcmVfXygxODgpXG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTkxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBAQG1hdGNoIGxvZ2ljXG5cdF9fd2VicGFja19yZXF1aXJlX18oMTkyKSgnbWF0Y2gnLCAxLCBmdW5jdGlvbihkZWZpbmVkLCBNQVRDSCwgJG1hdGNoKXtcblx0ICAvLyAyMS4xLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5tYXRjaChyZWdleHApXG5cdCAgcmV0dXJuIFtmdW5jdGlvbiBtYXRjaChyZWdleHApe1xuXHQgICAgJ3VzZSBzdHJpY3QnO1xuXHQgICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuXHQgICAgICAsIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG5cdCAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcblx0ICB9LCAkbWF0Y2hdO1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE5MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaGlkZSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpXG5cdCAgLCByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpXG5cdCAgLCBmYWlscyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsIGRlZmluZWQgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMylcblx0ICAsIHdrcyAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGxlbmd0aCwgZXhlYyl7XG5cdCAgdmFyIFNZTUJPTCAgID0gd2tzKEtFWSlcblx0ICAgICwgZm5zICAgICAgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSlcblx0ICAgICwgc3RyZm4gICAgPSBmbnNbMF1cblx0ICAgICwgcnhmbiAgICAgPSBmbnNbMV07XG5cdCAgaWYoZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgIHZhciBPID0ge307XG5cdCAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbigpeyByZXR1cm4gNzsgfTtcblx0ICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG5cdCAgfSkpe1xuXHQgICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG5cdCAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcblx0ICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuXHQgICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuXHQgICAgICA/IGZ1bmN0aW9uKHN0cmluZywgYXJnKXsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cblx0ICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG5cdCAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcblx0ICAgICAgOiBmdW5jdGlvbihzdHJpbmcpeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cblx0ICAgICk7XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9LFxuLyogMTkzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBAQHJlcGxhY2UgbG9naWNcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxOTIpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24oZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2Upe1xuXHQgIC8vIDIxLjEuMy4xNCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSlcblx0ICByZXR1cm4gW2Z1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSl7XG5cdCAgICAndXNlIHN0cmljdCc7XG5cdCAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG5cdCAgICAgICwgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcblx0ICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG5cdCAgICAgID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuXHQgICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcblx0ICB9LCAkcmVwbGFjZV07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTk0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBAQHNlYXJjaCBsb2dpY1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5MikoJ3NlYXJjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIFNFQVJDSCwgJHNlYXJjaCl7XG5cdCAgLy8gMjEuMS4zLjE1IFN0cmluZy5wcm90b3R5cGUuc2VhcmNoKHJlZ2V4cClcblx0ICByZXR1cm4gW2Z1bmN0aW9uIHNlYXJjaChyZWdleHApe1xuXHQgICAgJ3VzZSBzdHJpY3QnO1xuXHQgICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuXHQgICAgICAsIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtTRUFSQ0hdO1xuXHQgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXShTdHJpbmcoTykpO1xuXHQgIH0sICRzZWFyY2hdO1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE5NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gQEBzcGxpdCBsb2dpY1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE5MikoJ3NwbGl0JywgMiwgZnVuY3Rpb24oZGVmaW5lZCwgU1BMSVQsICRzcGxpdCl7XG5cdCAgJ3VzZSBzdHJpY3QnO1xuXHQgIHZhciBpc1JlZ0V4cCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjgpXG5cdCAgICAsIF9zcGxpdCAgICAgPSAkc3BsaXRcblx0ICAgICwgJHB1c2ggICAgICA9IFtdLnB1c2hcblx0ICAgICwgJFNQTElUICAgICA9ICdzcGxpdCdcblx0ICAgICwgTEVOR1RIICAgICA9ICdsZW5ndGgnXG5cdCAgICAsIExBU1RfSU5ERVggPSAnbGFzdEluZGV4Jztcblx0ICBpZihcblx0ICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG5cdCAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcblx0ICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuXHQgICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG5cdCAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG5cdCAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cblx0ICApe1xuXHQgICAgdmFyIE5QQ0cgPSAvKCk/Py8uZXhlYygnJylbMV0gPT09IHVuZGVmaW5lZDsgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuXHQgICAgJHNwbGl0ID0gZnVuY3Rpb24oc2VwYXJhdG9yLCBsaW1pdCl7XG5cdCAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG5cdCAgICAgIGlmKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKXJldHVybiBbXTtcblx0ICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcblx0ICAgICAgaWYoIWlzUmVnRXhwKHNlcGFyYXRvcikpcmV0dXJuIF9zcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG5cdCAgICAgIHZhciBvdXRwdXQgPSBbXTtcblx0ICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcblx0ICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuXHQgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuXHQgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcblx0ICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuXHQgICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyA0Mjk0OTY3Mjk1IDogbGltaXQgPj4+IDA7XG5cdCAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG5cdCAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG5cdCAgICAgIHZhciBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoLCBpO1xuXHQgICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcblx0ICAgICAgaWYoIU5QQ0cpc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcblx0ICAgICAgd2hpbGUobWF0Y2ggPSBzZXBhcmF0b3JDb3B5LmV4ZWMoc3RyaW5nKSl7XG5cdCAgICAgICAgLy8gYHNlcGFyYXRvckNvcHkubGFzdEluZGV4YCBpcyBub3QgcmVsaWFibGUgY3Jvc3MtYnJvd3NlclxuXHQgICAgICAgIGxhc3RJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF1bTEVOR1RIXTtcblx0ICAgICAgICBpZihsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KXtcblx0ICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuXHQgICAgICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGAgZm9yIE5QQ0dcblx0ICAgICAgICAgIGlmKCFOUENHICYmIG1hdGNoW0xFTkdUSF0gPiAxKW1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24oKXtcblx0ICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspaWYoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgICB9KTtcblx0ICAgICAgICAgIGlmKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG5cdCAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcblx0ICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdCAgICAgICAgICBpZihvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KWJyZWFrO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZihzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleClzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3Bcblx0ICAgICAgfVxuXHQgICAgICBpZihsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSl7XG5cdCAgICAgICAgaWYobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSlvdXRwdXQucHVzaCgnJyk7XG5cdCAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuXHQgICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuXHQgICAgfTtcblx0ICAvLyBDaGFrcmEsIFY4XG5cdCAgfSBlbHNlIGlmKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSl7XG5cdCAgICAkc3BsaXQgPSBmdW5jdGlvbihzZXBhcmF0b3IsIGxpbWl0KXtcblx0ICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBfc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcblx0ICAgIH07XG5cdCAgfVxuXHQgIC8vIDIxLjEuMy4xNyBTdHJpbmcucHJvdG90eXBlLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpXG5cdCAgcmV0dXJuIFtmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KXtcblx0ICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcblx0ICAgICAgLCBmbiA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuXHQgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcblx0ICB9LCAkc3BsaXRdO1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDE5NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgTElCUkFSWSAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNilcblx0ICAsIGdsb2JhbCAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGN0eCAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpXG5cdCAgLCBjbGFzc29mICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDczKVxuXHQgICwgJGV4cG9ydCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgaXNPYmplY3QgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGFGdW5jdGlvbiAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCBhbkluc3RhbmNlICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5Nylcblx0ICAsIGZvck9mICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk4KVxuXHQgICwgc3BlY2llc0NvbnN0cnVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTkpXG5cdCAgLCB0YXNrICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMCkuc2V0XG5cdCAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwMSkoKVxuXHQgICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG5cdCAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG5cdCAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuXHQgICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG5cdCAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuXHQgICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcydcblx0ICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cblx0ICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cblx0dmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG5cdCAgdHJ5IHtcblx0ICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuXHQgICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuXHQgICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuXHQgICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuXHQgICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG5cdCAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXHR9KCk7XG5cblx0Ly8gaGVscGVyc1xuXHR2YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG5cdCAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG5cdCAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcblx0fTtcblx0dmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG5cdCAgdmFyIHRoZW47XG5cdCAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xuXHR9O1xuXHR2YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcblx0ICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuXHQgICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcblx0ICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcblx0fTtcblx0dmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG5cdCAgdmFyIHJlc29sdmUsIHJlamVjdDtcblx0ICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcblx0ICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG5cdCAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuXHQgICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuXHQgIH0pO1xuXHQgIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcblx0ICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcblx0fTtcblx0dmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcblx0ICB0cnkge1xuXHQgICAgZXhlYygpO1xuXHQgIH0gY2F0Y2goZSl7XG5cdCAgICByZXR1cm4ge2Vycm9yOiBlfTtcblx0ICB9XG5cdH07XG5cdHZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG5cdCAgaWYocHJvbWlzZS5fbilyZXR1cm47XG5cdCAgcHJvbWlzZS5fbiA9IHRydWU7XG5cdCAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcblx0ICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcblx0ICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Zcblx0ICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuXHQgICAgICAsIGkgICAgID0gMDtcblx0ICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG5cdCAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcblx0ICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG5cdCAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG5cdCAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG5cdCAgICAgICAgLCByZXN1bHQsIHRoZW47XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgaWYoaGFuZGxlcil7XG5cdCAgICAgICAgICBpZighb2spe1xuXHQgICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG5cdCAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcblx0ICAgICAgICAgIGVsc2Uge1xuXHQgICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG5cdCAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuXHQgICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG5cdCAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG5cdCAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG5cdCAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG5cdCAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuXHQgICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuXHQgICAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgIHJlamVjdChlKTtcblx0ICAgICAgfVxuXHQgICAgfTtcblx0ICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuXHQgICAgcHJvbWlzZS5fYyA9IFtdO1xuXHQgICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuXHQgICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG5cdCAgfSk7XG5cdH07XG5cdHZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuXHQgIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG5cdCAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG5cdCAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuXHQgICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuXHQgICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgaWYoaXNOb2RlKXtcblx0ICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuXHQgICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcblx0ICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcblx0ICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG5cdCAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcblx0ICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuXHQgICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuXHQgICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcblx0ICB9KTtcblx0fTtcblx0dmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG5cdCAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcblx0ICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2Ncblx0ICAgICwgaSAgICAgPSAwXG5cdCAgICAsIHJlYWN0aW9uO1xuXHQgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuXHQgICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuXHQgICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuXHQgIH0gcmV0dXJuIHRydWU7XG5cdH07XG5cdHZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuXHQgIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG5cdCAgICB2YXIgaGFuZGxlcjtcblx0ICAgIGlmKGlzTm9kZSl7XG5cdCAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuXHQgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcblx0ICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cdHZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuXHQgIHZhciBwcm9taXNlID0gdGhpcztcblx0ICBpZihwcm9taXNlLl9kKXJldHVybjtcblx0ICBwcm9taXNlLl9kID0gdHJ1ZTtcblx0ICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcblx0ICBwcm9taXNlLl92ID0gdmFsdWU7XG5cdCAgcHJvbWlzZS5fcyA9IDI7XG5cdCAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcblx0ICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG5cdH07XG5cdHZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcblx0ICB2YXIgcHJvbWlzZSA9IHRoaXNcblx0ICAgICwgdGhlbjtcblx0ICBpZihwcm9taXNlLl9kKXJldHVybjtcblx0ICBwcm9taXNlLl9kID0gdHJ1ZTtcblx0ICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcblx0ICB0cnkge1xuXHQgICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG5cdCAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuXHQgICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcblx0ICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG5cdCAgICAgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuXHQgICAgICBwcm9taXNlLl9zID0gMTtcblx0ICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcblx0ICAgIH1cblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcblx0ICB9XG5cdH07XG5cblx0Ly8gY29uc3RydWN0b3IgcG9seWZpbGxcblx0aWYoIVVTRV9OQVRJVkUpe1xuXHQgIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG5cdCAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcblx0ICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuXHQgICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcblx0ICAgIEludGVybmFsLmNhbGwodGhpcyk7XG5cdCAgICB0cnkge1xuXHQgICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuXHQgICAgfSBjYXRjaChlcnIpe1xuXHQgICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcblx0ICAgIH1cblx0ICB9O1xuXHQgIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG5cdCAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuXHQgICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuXHQgICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuXHQgICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG5cdCAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG5cdCAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG5cdCAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuXHQgIH07XG5cdCAgSW50ZXJuYWwucHJvdG90eXBlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDIpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuXHQgICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcblx0ICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuXHQgICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcblx0ICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG5cdCAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcblx0ICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG5cdCAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG5cdCAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcblx0ICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuXHQgICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcblx0ICAgIH0sXG5cdCAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuXHQgICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG5cdCAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcblx0ICAgIH1cblx0ICB9KTtcblx0ICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG5cdCAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG5cdCAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuXHQgICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcblx0ICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcblx0ICB9O1xuXHR9XG5cblx0JGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oMjIpKCRQcm9taXNlLCBQUk9NSVNFKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXygxODYpKFBST01JU0UpO1xuXHRXcmFwcGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KVtQUk9NSVNFXTtcblxuXHQvLyBzdGF0aWNzXG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcblx0ICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuXHQgIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuXHQgICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuXHQgICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcblx0ICAgICQkcmVqZWN0KHIpO1xuXHQgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcblx0ICB9XG5cdH0pO1xuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuXHQgIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuXHQgIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG5cdCAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG5cdCAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuXHQgICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuXHQgICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG5cdCAgICAkJHJlc29sdmUoeCk7XG5cdCAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuXHQgIH1cblx0fSk7XG5cdCRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIF9fd2VicGFja19yZXF1aXJlX18oMTU3KShmdW5jdGlvbihpdGVyKXtcblx0ICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xuXHR9KSksIFBST01JU0UsIHtcblx0ICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcblx0ICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG5cdCAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcblx0ICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcblx0ICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG5cdCAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuXHQgICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcblx0ICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG5cdCAgICAgICAgLCBpbmRleCAgICAgPSAwXG5cdCAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuXHQgICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuXHQgICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuXHQgICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG5cdCAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcblx0ICAgICAgICByZW1haW5pbmcrKztcblx0ICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG5cdCAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcblx0ICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcblx0ICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG5cdCAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG5cdCAgICAgICAgfSwgcmVqZWN0KTtcblx0ICAgICAgfSk7XG5cdCAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcblx0ICAgIH0pO1xuXHQgICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuXHQgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcblx0ICB9LFxuXHQgIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcblx0ICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcblx0ICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuXHQgICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuXHQgICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcblx0ICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG5cdCAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG5cdCAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuXHQgICAgICB9KTtcblx0ICAgIH0pO1xuXHQgICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuXHQgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMTk3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuXHQgIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcblx0ICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG5cdCAgfSByZXR1cm4gaXQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAxOTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBjdHggICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpXG5cdCAgLCBjYWxsICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTUzKVxuXHQgICwgaXNBcnJheUl0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1NClcblx0ICAsIGFuT2JqZWN0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIHRvTGVuZ3RoICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAsIGdldEl0ZXJGbiAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTYpXG5cdCAgLCBCUkVBSyAgICAgICA9IHt9XG5cdCAgLCBSRVRVUk4gICAgICA9IHt9O1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG5cdCAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuXHQgICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcblx0ICAgICwgaW5kZXggID0gMFxuXHQgICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG5cdCAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuXHQgIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuXHQgIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcblx0ICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcblx0ICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcblx0ICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG5cdCAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcblx0ICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcblx0ICB9XG5cdH07XG5cdGV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5cdGV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG4vKioqLyB9LFxuLyogMTk5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcilcblx0dmFyIGFuT2JqZWN0ICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgU1BFQ0lFUyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ3NwZWNpZXMnKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcblx0ICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuXHQgIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIwMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGN0eCAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpXG5cdCAgLCBpbnZva2UgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc2KVxuXHQgICwgaHRtbCAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Nilcblx0ICAsIGNlbCAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpXG5cdCAgLCBnbG9iYWwgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuXHQgICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuXHQgICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG5cdCAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcblx0ICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcblx0ICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG5cdCAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuXHQgICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG5cdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHQgIHZhciBpZCA9ICt0aGlzO1xuXHQgIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG5cdCAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG5cdCAgICBkZWxldGUgcXVldWVbaWRdO1xuXHQgICAgZm4oKTtcblx0ICB9XG5cdH07XG5cdHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcblx0ICBydW4uY2FsbChldmVudC5kYXRhKTtcblx0fTtcblx0Ly8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuXHRpZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcblx0ICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcblx0ICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuXHQgICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcblx0ICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuXHQgICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG5cdCAgICB9O1xuXHQgICAgZGVmZXIoY291bnRlcik7XG5cdCAgICByZXR1cm4gY291bnRlcjtcblx0ICB9O1xuXHQgIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcblx0ICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG5cdCAgfTtcblx0ICAvLyBOb2RlLmpzIDAuOC1cblx0ICBpZihfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuXHQgICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG5cdCAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcblx0ICAgIH07XG5cdCAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuXHQgIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG5cdCAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuXHQgICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG5cdCAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuXHQgICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG5cdCAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG5cdCAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcblx0ICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcblx0ICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuXHQgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcblx0ICAgIH07XG5cdCAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG5cdCAgLy8gSUU4LVxuXHQgIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG5cdCAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcblx0ICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcblx0ICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuXHQgICAgICAgIHJ1bi5jYWxsKGlkKTtcblx0ICAgICAgfTtcblx0ICAgIH07XG5cdCAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcblx0ICB9IGVsc2Uge1xuXHQgICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG5cdCAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcblx0ICAgIH07XG5cdCAgfVxuXHR9XG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIHNldDogICBzZXRUYXNrLFxuXHQgIGNsZWFyOiBjbGVhclRhc2tcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIwMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIG1hY3JvdGFzayA9IF9fd2VicGFja19yZXF1aXJlX18oMjAwKS5zZXRcblx0ICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG5cdCAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuXHQgICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2Vcblx0ICAsIGlzTm9kZSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG5cdCAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuXHQgIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG5cdCAgICB2YXIgcGFyZW50LCBmbjtcblx0ICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG5cdCAgICB3aGlsZShoZWFkKXtcblx0ICAgICAgZm4gICA9IGhlYWQuZm47XG5cdCAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgZm4oKTtcblx0ICAgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuXHQgICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB0aHJvdyBlO1xuXHQgICAgICB9XG5cdCAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG5cdCAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG5cdCAgfTtcblxuXHQgIC8vIE5vZGUuanNcblx0ICBpZihpc05vZGUpe1xuXHQgICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcblx0ICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG5cdCAgICB9O1xuXHQgIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuXHQgIH0gZWxzZSBpZihPYnNlcnZlcil7XG5cdCAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuXHQgICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0ICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXHQgICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcblx0ICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcblx0ICAgIH07XG5cdCAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2Vcblx0ICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuXHQgICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0ICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG5cdCAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG5cdCAgICB9O1xuXHQgIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG5cdCAgLy8gLSBzZXRJbW1lZGlhdGVcblx0ICAvLyAtIE1lc3NhZ2VDaGFubmVsXG5cdCAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuXHQgIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG5cdCAgLy8gLSBzZXRUaW1lb3V0XG5cdCAgfSBlbHNlIHtcblx0ICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG5cdCAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcblx0ICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG5cdCAgICB9O1xuXHQgIH1cblxuXHQgIHJldHVybiBmdW5jdGlvbihmbil7XG5cdCAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG5cdCAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG5cdCAgICBpZighaGVhZCl7XG5cdCAgICAgIGhlYWQgPSB0YXNrO1xuXHQgICAgICBub3RpZnkoKTtcblx0ICAgIH0gbGFzdCA9IHRhc2s7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIwMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIHJlZGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuXHQgIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuXHQgIHJldHVybiB0YXJnZXQ7XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHN0cm9uZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjA0KTtcblxuXHQvLyAyMy4xIE1hcCBPYmplY3RzXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDUpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG5cdH0sIHtcblx0ICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcblx0ICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuXHQgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG5cdCAgfSxcblx0ICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuXHQgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuXHQgICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuXHQgIH1cblx0fSwgc3Ryb25nLCB0cnVlKTtcblxuLyoqKi8gfSxcbi8qIDIwNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZFAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLmZcblx0ICAsIGNyZWF0ZSAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NClcblx0ICAsIHJlZGVmaW5lQWxsID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDIpXG5cdCAgLCBjdHggICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpXG5cdCAgLCBhbkluc3RhbmNlICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk3KVxuXHQgICwgZGVmaW5lZCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKVxuXHQgICwgZm9yT2YgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5OClcblx0ICAsICRpdGVyRGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzQpXG5cdCAgLCBzdGVwICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTg0KVxuXHQgICwgc2V0U3BlY2llcyAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4Nilcblx0ICAsIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KVxuXHQgICwgZmFzdEtleSAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKS5mYXN0S2V5XG5cdCAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxuXHR2YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuXHQgIC8vIGZhc3QgY2FzZVxuXHQgIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG5cdCAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG5cdCAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG5cdCAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG5cdCAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG5cdCAgfVxuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcblx0ICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG5cdCAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG5cdCAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG5cdCAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG5cdCAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcblx0ICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuXHQgICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuXHQgICAgfSk7XG5cdCAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuXHQgICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcblx0ICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG5cdCAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuXHQgICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuXHQgICAgICAgICAgZW50cnkuciA9IHRydWU7XG5cdCAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcblx0ICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG5cdCAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuXHQgICAgICAgIHZhciB0aGF0ICA9IHRoaXNcblx0ICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuXHQgICAgICAgIGlmKGVudHJ5KXtcblx0ICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuXHQgICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuXHQgICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG5cdCAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcblx0ICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcblx0ICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcblx0ICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG5cdCAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuXHQgICAgICAgICAgdGhhdFtTSVpFXS0tO1xuXHQgICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuXHQgICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcblx0ICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcblx0ICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsICdmb3JFYWNoJyk7XG5cdCAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG5cdCAgICAgICAgICAsIGVudHJ5O1xuXHQgICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG5cdCAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuXHQgICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG5cdCAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcblx0ICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG5cdCAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG5cdCAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICBpZihERVNDUklQVE9SUylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG5cdCAgICAgIGdldDogZnVuY3Rpb24oKXtcblx0ICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gQztcblx0ICB9LFxuXHQgIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG5cdCAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG5cdCAgICAgICwgcHJldiwgaW5kZXg7XG5cdCAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcblx0ICAgIGlmKGVudHJ5KXtcblx0ICAgICAgZW50cnkudiA9IHZhbHVlO1xuXHQgICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuXHQgICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuXHQgICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcblx0ICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcblx0ICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcblx0ICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuXHQgICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG5cdCAgICAgIH07XG5cdCAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcblx0ICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcblx0ICAgICAgdGhhdFtTSVpFXSsrO1xuXHQgICAgICAvLyBhZGQgdG8gaW5kZXhcblx0ICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuXHQgICAgfSByZXR1cm4gdGhhdDtcblx0ICB9LFxuXHQgIGdldEVudHJ5OiBnZXRFbnRyeSxcblx0ICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG5cdCAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cblx0ICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcblx0ICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcblx0ICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG5cdCAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcblx0ICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcblx0ICAgIH0sIGZ1bmN0aW9uKCl7XG5cdCAgICAgIHZhciB0aGF0ICA9IHRoaXNcblx0ICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuXHQgICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuXHQgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcblx0ICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG5cdCAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG5cdCAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuXHQgICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG5cdCAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICByZXR1cm4gc3RlcCgxKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG5cdCAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG5cdCAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG5cdCAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG5cdCAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG5cdCAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuXHQgICAgc2V0U3BlY2llcyhOQU1FKTtcblx0ICB9XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGdsb2JhbCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgJGV4cG9ydCAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCByZWRlZmluZSAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpXG5cdCAgLCByZWRlZmluZUFsbCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjAyKVxuXHQgICwgbWV0YSAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKVxuXHQgICwgZm9yT2YgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5OClcblx0ICAsIGFuSW5zdGFuY2UgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTcpXG5cdCAgLCBpc09iamVjdCAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBmYWlscyAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsICRpdGVyRGV0ZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTcpXG5cdCAgLCBzZXRUb1N0cmluZ1RhZyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpXG5cdCAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oODApO1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuXHQgIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuXHQgICAgLCBDICAgICA9IEJhc2Vcblx0ICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG5cdCAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuXHQgICAgLCBPICAgICA9IHt9O1xuXHQgIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbihLRVkpe1xuXHQgICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcblx0ICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG5cdCAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uKGEpe1xuXHQgICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuXHQgICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpe1xuXHQgICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuXHQgICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpe1xuXHQgICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcblx0ICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuXHQgICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG5cdCAgICApO1xuXHQgIH07XG5cdCAgaWYodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcblx0ICB9KSkpe1xuXHQgICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3Jcblx0ICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG5cdCAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG5cdCAgICBtZXRhLk5FRUQgPSB0cnVlO1xuXHQgIH0gZWxzZSB7XG5cdCAgICB2YXIgaW5zdGFuY2UgICAgICAgICAgICAgPSBuZXcgQ1xuXHQgICAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG5cdCAgICAgICwgSEFTTlRfQ0hBSU5JTkcgICAgICAgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlXG5cdCAgICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuXHQgICAgICAsIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24oKXsgaW5zdGFuY2UuaGFzKDEpOyB9KVxuXHQgICAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG5cdCAgICAgICwgQUNDRVBUX0lURVJBQkxFUyAgICAgPSAkaXRlckRldGVjdChmdW5jdGlvbihpdGVyKXsgbmV3IEMoaXRlcik7IH0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cdCAgICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuXHQgICAgICAsIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuXHQgICAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpXG5cdCAgICAgICAgICAsIGluZGV4ICAgICA9IDU7XG5cdCAgICAgICAgd2hpbGUoaW5kZXgtLSkkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG5cdCAgICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcblx0ICAgICAgfSk7XG5cdCAgICBpZighQUNDRVBUX0lURVJBQkxFUyl7IFxuXHQgICAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcblx0ICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG5cdCAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSwgdGFyZ2V0LCBDKTtcblx0ICAgICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuXHQgICAgICAgIHJldHVybiB0aGF0O1xuXHQgICAgICB9KTtcblx0ICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcblx0ICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuXHQgICAgfVxuXHQgICAgaWYoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTyl7XG5cdCAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG5cdCAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG5cdCAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuXHQgICAgfVxuXHQgICAgaWYoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORylmaXhNZXRob2QoQURERVIpO1xuXHQgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2Rcblx0ICAgIGlmKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpZGVsZXRlIHByb3RvLmNsZWFyO1xuXHQgIH1cblxuXHQgIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG5cdCAgT1tOQU1FXSA9IEM7XG5cdCAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cblx0ICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cblx0ICByZXR1cm4gQztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIwNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgc3Ryb25nID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDQpO1xuXG5cdC8vIDIzLjIgU2V0IE9iamVjdHNcblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNSkoJ1NldCcsIGZ1bmN0aW9uKGdldCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcblx0fSwge1xuXHQgIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuXHQgIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcblx0ICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcblx0ICB9XG5cdH0sIHN0cm9uZyk7XG5cbi8qKiovIH0sXG4vKiAyMDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGVhY2ggICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTY0KSgwKVxuXHQgICwgcmVkZWZpbmUgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNilcblx0ICAsIG1ldGEgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjApXG5cdCAgLCBhc3NpZ24gICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY3KVxuXHQgICwgd2VhayAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDgpXG5cdCAgLCBpc09iamVjdCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgZ2V0V2VhayAgICAgID0gbWV0YS5nZXRXZWFrXG5cdCAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlXG5cdCAgLCB1bmNhdWdodEZyb3plblN0b3JlID0gd2Vhay51ZnN0b3JlXG5cdCAgLCB0bXAgICAgICAgICAgPSB7fVxuXHQgICwgSW50ZXJuYWxNYXA7XG5cblx0dmFyIHdyYXBwZXIgPSBmdW5jdGlvbihnZXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCl7XG5cdCAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcblx0ICB9O1xuXHR9O1xuXG5cdHZhciBtZXRob2RzID0ge1xuXHQgIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG5cdCAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcblx0ICAgIGlmKGlzT2JqZWN0KGtleSkpe1xuXHQgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcblx0ICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKS5nZXQoa2V5KTtcblx0ICAgICAgcmV0dXJuIGRhdGEgPyBkYXRhW3RoaXMuX2ldIDogdW5kZWZpbmVkO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG5cdCAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG5cdCAgICByZXR1cm4gd2Vhay5kZWYodGhpcywga2V5LCB2YWx1ZSk7XG5cdCAgfVxuXHR9O1xuXG5cdC8vIDIzLjMgV2Vha01hcCBPYmplY3RzXG5cdHZhciAkV2Vha01hcCA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDUpKCdXZWFrTWFwJywgd3JhcHBlciwgbWV0aG9kcywgd2VhaywgdHJ1ZSwgdHJ1ZSk7XG5cblx0Ly8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxuXHRpZihuZXcgJFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KXtcblx0ICBJbnRlcm5hbE1hcCA9IHdlYWsuZ2V0Q29uc3RydWN0b3Iod3JhcHBlcik7XG5cdCAgYXNzaWduKEludGVybmFsTWFwLnByb3RvdHlwZSwgbWV0aG9kcyk7XG5cdCAgbWV0YS5ORUVEID0gdHJ1ZTtcblx0ICBlYWNoKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uKGtleSl7XG5cdCAgICB2YXIgcHJvdG8gID0gJFdlYWtNYXAucHJvdG90eXBlXG5cdCAgICAgICwgbWV0aG9kID0gcHJvdG9ba2V5XTtcblx0ICAgIHJlZGVmaW5lKHByb3RvLCBrZXksIGZ1bmN0aW9uKGEsIGIpe1xuXHQgICAgICAvLyBzdG9yZSBmcm96ZW4gb2JqZWN0cyBvbiBpbnRlcm5hbCB3ZWFrbWFwIHNoaW1cblx0ICAgICAgaWYoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSl7XG5cdCAgICAgICAgaWYoIXRoaXMuX2YpdGhpcy5fZiA9IG5ldyBJbnRlcm5hbE1hcDtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fZltrZXldKGEsIGIpO1xuXHQgICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xuXHQgICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcblx0ICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XG5cdCAgICB9KTtcblx0ICB9KTtcblx0fVxuXG4vKioqLyB9LFxuLyogMjA4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciByZWRlZmluZUFsbCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjAyKVxuXHQgICwgZ2V0V2VhayAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKS5nZXRXZWFrXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBpc09iamVjdCAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpXG5cdCAgLCBhbkluc3RhbmNlICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTk3KVxuXHQgICwgZm9yT2YgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5OClcblx0ICAsIGNyZWF0ZUFycmF5TWV0aG9kID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpXG5cdCAgLCAkaGFzICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsIGFycmF5RmluZCAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNSlcblx0ICAsIGFycmF5RmluZEluZGV4ICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNilcblx0ICAsIGlkICAgICAgICAgICAgICAgID0gMDtcblxuXHQvLyBmYWxsYmFjayBmb3IgdW5jYXVnaHQgZnJvemVuIGtleXNcblx0dmFyIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbih0aGF0KXtcblx0ICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBVbmNhdWdodEZyb3plblN0b3JlKTtcblx0fTtcblx0dmFyIFVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbigpe1xuXHQgIHRoaXMuYSA9IFtdO1xuXHR9O1xuXHR2YXIgZmluZFVuY2F1Z2h0RnJvemVuID0gZnVuY3Rpb24oc3RvcmUsIGtleSl7XG5cdCAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbihpdCl7XG5cdCAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcblx0ICB9KTtcblx0fTtcblx0VW5jYXVnaHRGcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG5cdCAgZ2V0OiBmdW5jdGlvbihrZXkpe1xuXHQgICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG5cdCAgICBpZihlbnRyeSlyZXR1cm4gZW50cnlbMV07XG5cdCAgfSxcblx0ICBoYXM6IGZ1bmN0aW9uKGtleSl7XG5cdCAgICByZXR1cm4gISFmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcblx0ICB9LFxuXHQgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG5cdCAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcblx0ICAgIGlmKGVudHJ5KWVudHJ5WzFdID0gdmFsdWU7XG5cdCAgICBlbHNlIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG5cdCAgfSxcblx0ICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcblx0ICAgIHZhciBpbmRleCA9IGFycmF5RmluZEluZGV4KHRoaXMuYSwgZnVuY3Rpb24oaXQpe1xuXHQgICAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcblx0ICAgIH0pO1xuXHQgICAgaWYofmluZGV4KXRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuXHQgICAgcmV0dXJuICEhfmluZGV4O1xuXHQgIH1cblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG5cdCAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuXHQgICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuXHQgICAgICB0aGF0Ll9pID0gaWQrKzsgICAgICAvLyBjb2xsZWN0aW9uIGlkXG5cdCAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RzXG5cdCAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG5cdCAgICB9KTtcblx0ICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG5cdCAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG5cdCAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcblx0ICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG5cdCAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuXHQgICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XG5cdCAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKSAmJiBkZWxldGUgZGF0YVt0aGlzLl9pXTtcblx0ICAgICAgfSxcblx0ICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcblx0ICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuXHQgICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuXHQgICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcblx0ICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcblx0ICAgICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpLmhhcyhrZXkpO1xuXHQgICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIEM7XG5cdCAgfSxcblx0ICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuXHQgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGFuT2JqZWN0KGtleSksIHRydWUpO1xuXHQgICAgaWYoZGF0YSA9PT0gdHJ1ZSl1bmNhdWdodEZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcblx0ICAgIGVsc2UgZGF0YVt0aGF0Ll9pXSA9IHZhbHVlO1xuXHQgICAgcmV0dXJuIHRoYXQ7XG5cdCAgfSxcblx0ICB1ZnN0b3JlOiB1bmNhdWdodEZyb3plblN0b3JlXG5cdH07XG5cbi8qKiovIH0sXG4vKiAyMDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHdlYWsgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwOCk7XG5cblx0Ly8gMjMuNCBXZWFrU2V0IE9iamVjdHNcblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMDUpKCdXZWFrU2V0JywgZnVuY3Rpb24oZ2V0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gV2Vha1NldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcblx0fSwge1xuXHQgIC8vIDIzLjQuMy4xIFdlYWtTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcblx0ICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG5cdCAgICByZXR1cm4gd2Vhay5kZWYodGhpcywgdmFsdWUsIHRydWUpO1xuXHQgIH1cblx0fSwgd2VhaywgZmFsc2UsIHRydWUpO1xuXG4vKioqLyB9LFxuLyogMjEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcblx0dmFyICRleHBvcnQgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpXG5cdCAgLCBhbk9iamVjdCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgckFwcGx5ICAgID0gKF9fd2VicGFja19yZXF1aXJlX18oMikuUmVmbGVjdCB8fCB7fSkuYXBwbHlcblx0ICAsIGZBcHBseSAgICA9IEZ1bmN0aW9uLmFwcGx5O1xuXHQvLyBNUyBFZGdlIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX193ZWJwYWNrX3JlcXVpcmVfXyg1KShmdW5jdGlvbigpe1xuXHQgIHJBcHBseShmdW5jdGlvbigpe30pO1xuXHR9KSwgJ1JlZmxlY3QnLCB7XG5cdCAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KXtcblx0ICAgIHZhciBUID0gYUZ1bmN0aW9uKHRhcmdldClcblx0ICAgICAgLCBMID0gYW5PYmplY3QoYXJndW1lbnRzTGlzdCk7XG5cdCAgICByZXR1cm4gckFwcGx5ID8gckFwcGx5KFQsIHRoaXNBcmd1bWVudCwgTCkgOiBmQXBwbHkuY2FsbChULCB0aGlzQXJndW1lbnQsIEwpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuMiBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsIGFyZ3VtZW50c0xpc3QgWywgbmV3VGFyZ2V0XSlcblx0dmFyICRleHBvcnQgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBjcmVhdGUgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NClcblx0ICAsIGFGdW5jdGlvbiAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgYW5PYmplY3QgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBpc09iamVjdCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIGZhaWxzICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cdCAgLCBiaW5kICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NSlcblx0ICAsIHJDb25zdHJ1Y3QgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKS5SZWZsZWN0IHx8IHt9KS5jb25zdHJ1Y3Q7XG5cblx0Ly8gTVMgRWRnZSBzdXBwb3J0cyBvbmx5IDIgYXJndW1lbnRzIGFuZCBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG5cdC8vIEZGIE5pZ2h0bHkgc2V0cyB0aGlyZCBhcmd1bWVudCBhcyBgbmV3LnRhcmdldGAsIGJ1dCBkb2VzIG5vdCBjcmVhdGUgYHRoaXNgIGZyb20gaXRcblx0dmFyIE5FV19UQVJHRVRfQlVHID0gZmFpbHMoZnVuY3Rpb24oKXtcblx0ICBmdW5jdGlvbiBGKCl7fVxuXHQgIHJldHVybiAhKHJDb25zdHJ1Y3QoZnVuY3Rpb24oKXt9LCBbXSwgRikgaW5zdGFuY2VvZiBGKTtcblx0fSk7XG5cdHZhciBBUkdTX0JVRyA9ICFmYWlscyhmdW5jdGlvbigpe1xuXHQgIHJDb25zdHJ1Y3QoZnVuY3Rpb24oKXt9KTtcblx0fSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTkVXX1RBUkdFVF9CVUcgfHwgQVJHU19CVUcpLCAnUmVmbGVjdCcsIHtcblx0ICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MgLyosIG5ld1RhcmdldCovKXtcblx0ICAgIGFGdW5jdGlvbihUYXJnZXQpO1xuXHQgICAgYW5PYmplY3QoYXJncyk7XG5cdCAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcblx0ICAgIGlmKEFSR1NfQlVHICYmICFORVdfVEFSR0VUX0JVRylyZXR1cm4gckNvbnN0cnVjdChUYXJnZXQsIGFyZ3MsIG5ld1RhcmdldCk7XG5cdCAgICBpZihUYXJnZXQgPT0gbmV3VGFyZ2V0KXtcblx0ICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBvcHRpbWl6YXRpb24gZm9yIDAtNCBhcmd1bWVudHNcblx0ICAgICAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcblx0ICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgVGFyZ2V0O1xuXHQgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG5cdCAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdKTtcblx0ICAgICAgICBjYXNlIDM6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuXHQgICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBsb3Qgb2YgYXJndW1lbnRzIGNhc2Vcblx0ICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuXHQgICAgICAkYXJncy5wdXNoLmFwcGx5KCRhcmdzLCBhcmdzKTtcblx0ICAgICAgcmV0dXJuIG5ldyAoYmluZC5hcHBseShUYXJnZXQsICRhcmdzKSk7XG5cdCAgICB9XG5cdCAgICAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcblx0ICAgIHZhciBwcm90byAgICA9IG5ld1RhcmdldC5wcm90b3R5cGVcblx0ICAgICAgLCBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpXG5cdCAgICAgICwgcmVzdWx0ICAgPSBGdW5jdGlvbi5hcHBseS5jYWxsKFRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuXHQgICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjEyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjMgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKVxuXHR2YXIgZFAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpXG5cdCAgLCAkZXhwb3J0ICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGFuT2JqZWN0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIHRvUHJpbWl0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cblx0Ly8gTVMgRWRnZSBoYXMgYnJva2VuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkgLSB0aHJvd2luZyBpbnN0ZWFkIG9mIHJldHVybmluZyBmYWxzZVxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGRQLmYoe30sIDEsIHt2YWx1ZTogMX0pLCAxLCB7dmFsdWU6IDJ9KTtcblx0fSksICdSZWZsZWN0Jywge1xuXHQgIGRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKXtcblx0ICAgIGFuT2JqZWN0KHRhcmdldCk7XG5cdCAgICBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKHByb3BlcnR5S2V5LCB0cnVlKTtcblx0ICAgIGFuT2JqZWN0KGF0dHJpYnV0ZXMpO1xuXHQgICAgdHJ5IHtcblx0ICAgICAgZFAuZih0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9IGNhdGNoKGUpe1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIxMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS40IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSlcblx0dmFyICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZ09QRCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KS5mXG5cdCAgLCBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcblx0ICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG5cdCAgICB2YXIgZGVzYyA9IGdPUEQoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuXHQgICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjE0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIDI2LjEuNSBSZWZsZWN0LmVudW1lcmF0ZSh0YXJnZXQpXG5cdHZhciAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdHZhciBFbnVtZXJhdGUgPSBmdW5jdGlvbihpdGVyYXRlZCl7XG5cdCAgdGhpcy5fdCA9IGFuT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG5cdCAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuXHQgIHZhciBrZXlzID0gdGhpcy5fayA9IFtdICAgICAgIC8vIGtleXNcblx0ICAgICwga2V5O1xuXHQgIGZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7XG5cdH07XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTM2KShFbnVtZXJhdGUsICdPYmplY3QnLCBmdW5jdGlvbigpe1xuXHQgIHZhciB0aGF0ID0gdGhpc1xuXHQgICAgLCBrZXlzID0gdGhhdC5fa1xuXHQgICAgLCBrZXk7XG5cdCAgZG8ge1xuXHQgICAgaWYodGhhdC5faSA+PSBrZXlzLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuXHQgIH0gd2hpbGUoISgoa2V5ID0ga2V5c1t0aGF0Ll9pKytdKSBpbiB0aGF0Ll90KSk7XG5cdCAgcmV0dXJuIHt2YWx1ZToga2V5LCBkb25lOiBmYWxzZX07XG5cdH0pO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcblx0ICBlbnVtZXJhdGU6IGZ1bmN0aW9uIGVudW1lcmF0ZSh0YXJnZXQpe1xuXHQgICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUodGFyZ2V0KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjE1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXG5cdHZhciBnT1BEICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpXG5cdCAgLCBnZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBoYXMgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMylcblx0ICAsICRleHBvcnQgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgaXNPYmplY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICwgYW5PYmplY3QgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuXHRmdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleS8qLCByZWNlaXZlciovKXtcblx0ICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXVxuXHQgICAgLCBkZXNjLCBwcm90bztcblx0ICBpZihhbk9iamVjdCh0YXJnZXQpID09PSByZWNlaXZlcilyZXR1cm4gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcblx0ICBpZihkZXNjID0gZ09QRC5mKHRhcmdldCwgcHJvcGVydHlLZXkpKXJldHVybiBoYXMoZGVzYywgJ3ZhbHVlJylcblx0ICAgID8gZGVzYy52YWx1ZVxuXHQgICAgOiBkZXNjLmdldCAhPT0gdW5kZWZpbmVkXG5cdCAgICAgID8gZGVzYy5nZXQuY2FsbChyZWNlaXZlcilcblx0ICAgICAgOiB1bmRlZmluZWQ7XG5cdCAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSlyZXR1cm4gZ2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpO1xuXHR9XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge2dldDogZ2V0fSk7XG5cbi8qKiovIH0sXG4vKiAyMTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuNyBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KVxuXHR2YXIgZ09QRCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KVxuXHQgICwgJGV4cG9ydCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcblx0ICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KXtcblx0ICAgIHJldHVybiBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuOCBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcblx0dmFyICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZ2V0UHJvdG8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG5cdCAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKHRhcmdldCl7XG5cdCAgICByZXR1cm4gZ2V0UHJvdG8oYW5PYmplY3QodGFyZ2V0KSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIxOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS45IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG5cdCAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG5cdCAgICByZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0O1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuMTAgUmVmbGVjdC5pc0V4dGVuc2libGUodGFyZ2V0KVxuXHR2YXIgJGV4cG9ydCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGFuT2JqZWN0ICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuXHQgIGlzRXh0ZW5zaWJsZTogZnVuY3Rpb24gaXNFeHRlbnNpYmxlKHRhcmdldCl7XG5cdCAgICBhbk9iamVjdCh0YXJnZXQpO1xuXHQgICAgcmV0dXJuICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKHRhcmdldCkgOiB0cnVlO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMjAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDI2LjEuMTEgUmVmbGVjdC5vd25LZXlzKHRhcmdldClcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtvd25LZXlzOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyMSl9KTtcblxuLyoqKi8gfSxcbi8qIDIyMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xuXHR2YXIgZ09QTiAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KVxuXHQgICwgZ09QUyAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKVxuXHQgICwgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgUmVmbGVjdCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLlJlZmxlY3Q7XG5cdG1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCl7XG5cdCAgdmFyIGtleXMgICAgICAgPSBnT1BOLmYoYW5PYmplY3QoaXQpKVxuXHQgICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuXHQgIHJldHVybiBnZXRTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDoga2V5cztcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIyMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS4xMiBSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldClcblx0dmFyICRleHBvcnQgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCAkcHJldmVudEV4dGVuc2lvbnMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuXHQgIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpe1xuXHQgICAgYW5PYmplY3QodGFyZ2V0KTtcblx0ICAgIHRyeSB7XG5cdCAgICAgIGlmKCRwcmV2ZW50RXh0ZW5zaW9ucykkcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9IGNhdGNoKGUpe1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDIyMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gMjYuMS4xMyBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIFssIHJlY2VpdmVyXSlcblx0dmFyIGRQICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KVxuXHQgICwgZ09QRCAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KVxuXHQgICwgZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgaGFzICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpXG5cdCAgLCAkZXhwb3J0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIGNyZWF0ZURlc2MgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSlcblx0ICAsIGFuT2JqZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGlzT2JqZWN0ICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cblx0ZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYvKiwgcmVjZWl2ZXIqLyl7XG5cdCAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDQgPyB0YXJnZXQgOiBhcmd1bWVudHNbM11cblx0ICAgICwgb3duRGVzYyAgPSBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpXG5cdCAgICAsIGV4aXN0aW5nRGVzY3JpcHRvciwgcHJvdG87XG5cdCAgaWYoIW93bkRlc2Mpe1xuXHQgICAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSl7XG5cdCAgICAgIHJldHVybiBzZXQocHJvdG8sIHByb3BlcnR5S2V5LCBWLCByZWNlaXZlcik7XG5cdCAgICB9XG5cdCAgICBvd25EZXNjID0gY3JlYXRlRGVzYygwKTtcblx0ICB9XG5cdCAgaWYoaGFzKG93bkRlc2MsICd2YWx1ZScpKXtcblx0ICAgIGlmKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpcmV0dXJuIGZhbHNlO1xuXHQgICAgZXhpc3RpbmdEZXNjcmlwdG9yID0gZ09QRC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSkgfHwgY3JlYXRlRGVzYygwKTtcblx0ICAgIGV4aXN0aW5nRGVzY3JpcHRvci52YWx1ZSA9IFY7XG5cdCAgICBkUC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKTtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0ICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcblx0fVxuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtzZXQ6IHNldH0pO1xuXG4vKioqLyB9LFxuLyogMjI0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAyNi4xLjE0IFJlZmxlY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bylcblx0dmFyICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgc2V0UHJvdG8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcxKTtcblxuXHRpZihzZXRQcm90bykkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG5cdCAgc2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pe1xuXHQgICAgc2V0UHJvdG8uY2hlY2sodGFyZ2V0LCBwcm90byk7XG5cdCAgICB0cnkge1xuXHQgICAgICBzZXRQcm90by5zZXQodGFyZ2V0LCBwcm90byk7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfSBjYXRjaChlKXtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMjUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIDIwLjMuMy4xIC8gMTUuOS40LjQgRGF0ZS5ub3coKVxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdEYXRlJywge25vdzogZnVuY3Rpb24oKXsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9fSk7XG5cbi8qKiovIH0sXG4vKiAyMjYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgdG9PYmplY3QgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICByZXR1cm4gbmV3IERhdGUoTmFOKS50b0pTT04oKSAhPT0gbnVsbCB8fCBEYXRlLnByb3RvdHlwZS50b0pTT04uY2FsbCh7dG9JU09TdHJpbmc6IGZ1bmN0aW9uKCl7IHJldHVybiAxOyB9fSkgIT09IDE7XG5cdH0pLCAnRGF0ZScsIHtcblx0ICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTihrZXkpe1xuXHQgICAgdmFyIE8gID0gdG9PYmplY3QodGhpcylcblx0ICAgICAgLCBwdiA9IHRvUHJpbWl0aXZlKE8pO1xuXHQgICAgcmV0dXJuIHR5cGVvZiBwdiA9PSAnbnVtYmVyJyAmJiAhaXNGaW5pdGUocHYpID8gbnVsbCA6IE8udG9JU09TdHJpbmcoKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjI3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIDIwLjMuNC4zNiAvIDE1LjkuNS40MyBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZmFpbHMgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsIGdldFRpbWUgPSBEYXRlLnByb3RvdHlwZS5nZXRUaW1lO1xuXG5cdHZhciBseiA9IGZ1bmN0aW9uKG51bSl7XG5cdCAgcmV0dXJuIG51bSA+IDkgPyBudW0gOiAnMCcgKyBudW07XG5cdH07XG5cblx0Ly8gUGhhbnRvbUpTIC8gb2xkIFdlYktpdCBoYXMgYSBicm9rZW4gaW1wbGVtZW50YXRpb25zXG5cdCRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuIG5ldyBEYXRlKC01ZTEzIC0gMSkudG9JU09TdHJpbmcoKSAhPSAnMDM4NS0wNy0yNVQwNzowNjozOS45OTlaJztcblx0fSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgbmV3IERhdGUoTmFOKS50b0lTT1N0cmluZygpO1xuXHR9KSksICdEYXRlJywge1xuXHQgIHRvSVNPU3RyaW5nOiBmdW5jdGlvbiB0b0lTT1N0cmluZygpe1xuXHQgICAgaWYoIWlzRmluaXRlKGdldFRpbWUuY2FsbCh0aGlzKSkpdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG5cdCAgICB2YXIgZCA9IHRoaXNcblx0ICAgICAgLCB5ID0gZC5nZXRVVENGdWxsWWVhcigpXG5cdCAgICAgICwgbSA9IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKClcblx0ICAgICAgLCBzID0geSA8IDAgPyAnLScgOiB5ID4gOTk5OSA/ICcrJyA6ICcnO1xuXHQgICAgcmV0dXJuIHMgKyAoJzAwMDAwJyArIE1hdGguYWJzKHkpKS5zbGljZShzID8gLTYgOiAtNCkgK1xuXHQgICAgICAnLScgKyBseihkLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArIGx6KGQuZ2V0VVRDRGF0ZSgpKSArXG5cdCAgICAgICdUJyArIGx6KGQuZ2V0VVRDSG91cnMoKSkgKyAnOicgKyBseihkLmdldFVUQ01pbnV0ZXMoKSkgK1xuXHQgICAgICAnOicgKyBseihkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgKyAobSA+IDk5ID8gbSA6ICcwJyArIGx6KG0pKSArICdaJztcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjI4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgRGF0ZVByb3RvICAgID0gRGF0ZS5wcm90b3R5cGVcblx0ICAsIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnXG5cdCAgLCBUT19TVFJJTkcgICAgPSAndG9TdHJpbmcnXG5cdCAgLCAkdG9TdHJpbmcgICAgPSBEYXRlUHJvdG9bVE9fU1RSSU5HXVxuXHQgICwgZ2V0VGltZSAgICAgID0gRGF0ZVByb3RvLmdldFRpbWU7XG5cdGlmKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpe1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oMTYpKERhdGVQcm90bywgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuXHQgICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuXHQgICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICR0b1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuXHQgIH0pO1xuXHR9XG5cbi8qKiovIH0sXG4vKiAyMjkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBUT19QUklNSVRJVkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKSgndG9QcmltaXRpdmUnKVxuXHQgICwgcHJvdG8gICAgICAgID0gRGF0ZS5wcm90b3R5cGU7XG5cblx0aWYoIShUT19QUklNSVRJVkUgaW4gcHJvdG8pKV9fd2VicGFja19yZXF1aXJlX18oOCkocHJvdG8sIFRPX1BSSU1JVElWRSwgX193ZWJwYWNrX3JlcXVpcmVfXygyMzApKTtcblxuLyoqKi8gfSxcbi8qIDIzMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgYW5PYmplY3QgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KVxuXHQgICwgTlVNQkVSICAgICAgPSAnbnVtYmVyJztcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhpbnQpe1xuXHQgIGlmKGhpbnQgIT09ICdzdHJpbmcnICYmIGhpbnQgIT09IE5VTUJFUiAmJiBoaW50ICE9PSAnZGVmYXVsdCcpdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgaGludCcpO1xuXHQgIHJldHVybiB0b1ByaW1pdGl2ZShhbk9iamVjdCh0aGlzKSwgaGludCAhPSBOVU1CRVIpO1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjMxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkdHlwZWQgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzMilcblx0ICAsIGJ1ZmZlciAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMzKVxuXHQgICwgYW5PYmplY3QgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIHRvSW5kZXggICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpXG5cdCAgLCB0b0xlbmd0aCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgaXNPYmplY3QgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSlcblx0ICAsIEFycmF5QnVmZmVyICA9IF9fd2VicGFja19yZXF1aXJlX18oMikuQXJyYXlCdWZmZXJcblx0ICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTk5KVxuXHQgICwgJEFycmF5QnVmZmVyID0gYnVmZmVyLkFycmF5QnVmZmVyXG5cdCAgLCAkRGF0YVZpZXcgICAgPSBidWZmZXIuRGF0YVZpZXdcblx0ICAsICRpc1ZpZXcgICAgICA9ICR0eXBlZC5BQlYgJiYgQXJyYXlCdWZmZXIuaXNWaWV3XG5cdCAgLCAkc2xpY2UgICAgICAgPSAkQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlXG5cdCAgLCBWSUVXICAgICAgICAgPSAkdHlwZWQuVklFV1xuXHQgICwgQVJSQVlfQlVGRkVSID0gJ0FycmF5QnVmZmVyJztcblxuXHQkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChBcnJheUJ1ZmZlciAhPT0gJEFycmF5QnVmZmVyKSwge0FycmF5QnVmZmVyOiAkQXJyYXlCdWZmZXJ9KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEkdHlwZWQuQ09OU1RSLCBBUlJBWV9CVUZGRVIsIHtcblx0ICAvLyAyNC4xLjMuMSBBcnJheUJ1ZmZlci5pc1ZpZXcoYXJnKVxuXHQgIGlzVmlldzogZnVuY3Rpb24gaXNWaWV3KGl0KXtcblx0ICAgIHJldHVybiAkaXNWaWV3ICYmICRpc1ZpZXcoaXQpIHx8IGlzT2JqZWN0KGl0KSAmJiBWSUVXIGluIGl0O1xuXHQgIH1cblx0fSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlUgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKGZ1bmN0aW9uKCl7XG5cdCAgcmV0dXJuICFuZXcgJEFycmF5QnVmZmVyKDIpLnNsaWNlKDEsIHVuZGVmaW5lZCkuYnl0ZUxlbmd0aDtcblx0fSksIEFSUkFZX0JVRkZFUiwge1xuXHQgIC8vIDI0LjEuNC4zIEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZShzdGFydCwgZW5kKVxuXHQgIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKXtcblx0ICAgIGlmKCRzbGljZSAhPT0gdW5kZWZpbmVkICYmIGVuZCA9PT0gdW5kZWZpbmVkKXJldHVybiAkc2xpY2UuY2FsbChhbk9iamVjdCh0aGlzKSwgc3RhcnQpOyAvLyBGRiBmaXhcblx0ICAgIHZhciBsZW4gICAgPSBhbk9iamVjdCh0aGlzKS5ieXRlTGVuZ3RoXG5cdCAgICAgICwgZmlyc3QgID0gdG9JbmRleChzdGFydCwgbGVuKVxuXHQgICAgICAsIGZpbmFsICA9IHRvSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQsIGxlbilcblx0ICAgICAgLCByZXN1bHQgPSBuZXcgKHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkQXJyYXlCdWZmZXIpKSh0b0xlbmd0aChmaW5hbCAtIGZpcnN0KSlcblx0ICAgICAgLCB2aWV3UyAgPSBuZXcgJERhdGFWaWV3KHRoaXMpXG5cdCAgICAgICwgdmlld1QgID0gbmV3ICREYXRhVmlldyhyZXN1bHQpXG5cdCAgICAgICwgaW5kZXggID0gMDtcblx0ICAgIHdoaWxlKGZpcnN0IDwgZmluYWwpe1xuXHQgICAgICB2aWV3VC5zZXRVaW50OChpbmRleCsrLCB2aWV3Uy5nZXRVaW50OChmaXJzdCsrKSk7XG5cdCAgICB9IHJldHVybiByZXN1bHQ7XG5cdCAgfVxuXHR9KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4NikoQVJSQVlfQlVGRkVSKTtcblxuLyoqKi8gfSxcbi8qIDIzMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAsIGhpZGUgICA9IF9fd2VicGFja19yZXF1aXJlX18oOClcblx0ICAsIHVpZCAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpXG5cdCAgLCBUWVBFRCAgPSB1aWQoJ3R5cGVkX2FycmF5Jylcblx0ICAsIFZJRVcgICA9IHVpZCgndmlldycpXG5cdCAgLCBBQlYgICAgPSAhIShnbG9iYWwuQXJyYXlCdWZmZXIgJiYgZ2xvYmFsLkRhdGFWaWV3KVxuXHQgICwgQ09OU1RSID0gQUJWXG5cdCAgLCBpID0gMCwgbCA9IDksIFR5cGVkO1xuXG5cdHZhciBUeXBlZEFycmF5Q29uc3RydWN0b3JzID0gKFxuXHQgICdJbnQ4QXJyYXksVWludDhBcnJheSxVaW50OENsYW1wZWRBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheSdcblx0KS5zcGxpdCgnLCcpO1xuXG5cdHdoaWxlKGkgPCBsKXtcblx0ICBpZihUeXBlZCA9IGdsb2JhbFtUeXBlZEFycmF5Q29uc3RydWN0b3JzW2krK11dKXtcblx0ICAgIGhpZGUoVHlwZWQucHJvdG90eXBlLCBUWVBFRCwgdHJ1ZSk7XG5cdCAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG5cdCAgfSBlbHNlIENPTlNUUiA9IGZhbHNlO1xuXHR9XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgQUJWOiAgICBBQlYsXG5cdCAgQ09OU1RSOiBDT05TVFIsXG5cdCAgVFlQRUQ6ICBUWVBFRCxcblx0ICBWSUVXOiAgIFZJRVdcblx0fTtcblxuLyoqKi8gfSxcbi8qIDIzMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZ2xvYmFsICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBERVNDUklQVE9SUyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNClcblx0ICAsIExJQlJBUlkgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNilcblx0ICAsICR0eXBlZCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMzIpXG5cdCAgLCBoaWRlICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOClcblx0ICAsIHJlZGVmaW5lQWxsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDIpXG5cdCAgLCBmYWlscyAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAsIGFuSW5zdGFuY2UgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTcpXG5cdCAgLCB0b0ludGVnZXIgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpXG5cdCAgLCB0b0xlbmd0aCAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpXG5cdCAgLCBnT1BOICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDgpLmZcblx0ICAsIGRQICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5mXG5cdCAgLCBhcnJheUZpbGwgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgwKVxuXHQgICwgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKVxuXHQgICwgQVJSQVlfQlVGRkVSICAgPSAnQXJyYXlCdWZmZXInXG5cdCAgLCBEQVRBX1ZJRVcgICAgICA9ICdEYXRhVmlldydcblx0ICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcblx0ICAsIFdST05HX0xFTkdUSCAgID0gJ1dyb25nIGxlbmd0aCEnXG5cdCAgLCBXUk9OR19JTkRFWCAgICA9ICdXcm9uZyBpbmRleCEnXG5cdCAgLCAkQXJyYXlCdWZmZXIgICA9IGdsb2JhbFtBUlJBWV9CVUZGRVJdXG5cdCAgLCAkRGF0YVZpZXcgICAgICA9IGdsb2JhbFtEQVRBX1ZJRVddXG5cdCAgLCBNYXRoICAgICAgICAgICA9IGdsb2JhbC5NYXRoXG5cdCAgLCBSYW5nZUVycm9yICAgICA9IGdsb2JhbC5SYW5nZUVycm9yXG5cdCAgLCBJbmZpbml0eSAgICAgICA9IGdsb2JhbC5JbmZpbml0eVxuXHQgICwgQmFzZUJ1ZmZlciAgICAgPSAkQXJyYXlCdWZmZXJcblx0ICAsIGFicyAgICAgICAgICAgID0gTWF0aC5hYnNcblx0ICAsIHBvdyAgICAgICAgICAgID0gTWF0aC5wb3dcblx0ICAsIGZsb29yICAgICAgICAgID0gTWF0aC5mbG9vclxuXHQgICwgbG9nICAgICAgICAgICAgPSBNYXRoLmxvZ1xuXHQgICwgTE4yICAgICAgICAgICAgPSBNYXRoLkxOMlxuXHQgICwgQlVGRkVSICAgICAgICAgPSAnYnVmZmVyJ1xuXHQgICwgQllURV9MRU5HVEggICAgPSAnYnl0ZUxlbmd0aCdcblx0ICAsIEJZVEVfT0ZGU0VUICAgID0gJ2J5dGVPZmZzZXQnXG5cdCAgLCAkQlVGRkVSICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19iJyA6IEJVRkZFUlxuXHQgICwgJExFTkdUSCAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfbCcgOiBCWVRFX0xFTkdUSFxuXHQgICwgJE9GRlNFVCAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfbycgOiBCWVRFX09GRlNFVDtcblxuXHQvLyBJRUVFNzU0IGNvbnZlcnNpb25zIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvaWVlZTc1NFxuXHR2YXIgcGFja0lFRUU3NTQgPSBmdW5jdGlvbih2YWx1ZSwgbUxlbiwgbkJ5dGVzKXtcblx0ICB2YXIgYnVmZmVyID0gQXJyYXkobkJ5dGVzKVxuXHQgICAgLCBlTGVuICAgPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcblx0ICAgICwgZU1heCAgID0gKDEgPDwgZUxlbikgLSAxXG5cdCAgICAsIGVCaWFzICA9IGVNYXggPj4gMVxuXHQgICAgLCBydCAgICAgPSBtTGVuID09PSAyMyA/IHBvdygyLCAtMjQpIC0gcG93KDIsIC03NykgOiAwXG5cdCAgICAsIGkgICAgICA9IDBcblx0ICAgICwgcyAgICAgID0gdmFsdWUgPCAwIHx8IHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDAgPyAxIDogMFxuXHQgICAgLCBlLCBtLCBjO1xuXHQgIHZhbHVlID0gYWJzKHZhbHVlKVxuXHQgIGlmKHZhbHVlICE9IHZhbHVlIHx8IHZhbHVlID09PSBJbmZpbml0eSl7XG5cdCAgICBtID0gdmFsdWUgIT0gdmFsdWUgPyAxIDogMDtcblx0ICAgIGUgPSBlTWF4O1xuXHQgIH0gZWxzZSB7XG5cdCAgICBlID0gZmxvb3IobG9nKHZhbHVlKSAvIExOMik7XG5cdCAgICBpZih2YWx1ZSAqIChjID0gcG93KDIsIC1lKSkgPCAxKXtcblx0ICAgICAgZS0tO1xuXHQgICAgICBjICo9IDI7XG5cdCAgICB9XG5cdCAgICBpZihlICsgZUJpYXMgPj0gMSl7XG5cdCAgICAgIHZhbHVlICs9IHJ0IC8gYztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhbHVlICs9IHJ0ICogcG93KDIsIDEgLSBlQmlhcyk7XG5cdCAgICB9XG5cdCAgICBpZih2YWx1ZSAqIGMgPj0gMil7XG5cdCAgICAgIGUrKztcblx0ICAgICAgYyAvPSAyO1xuXHQgICAgfVxuXHQgICAgaWYoZSArIGVCaWFzID49IGVNYXgpe1xuXHQgICAgICBtID0gMDtcblx0ICAgICAgZSA9IGVNYXg7XG5cdCAgICB9IGVsc2UgaWYoZSArIGVCaWFzID49IDEpe1xuXHQgICAgICBtID0gKHZhbHVlICogYyAtIDEpICogcG93KDIsIG1MZW4pO1xuXHQgICAgICBlID0gZSArIGVCaWFzO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgbSA9IHZhbHVlICogcG93KDIsIGVCaWFzIC0gMSkgKiBwb3coMiwgbUxlbik7XG5cdCAgICAgIGUgPSAwO1xuXHQgICAgfVxuXHQgIH1cblx0ICBmb3IoOyBtTGVuID49IDg7IGJ1ZmZlcltpKytdID0gbSAmIDI1NSwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cdCAgZSA9IGUgPDwgbUxlbiB8IG07XG5cdCAgZUxlbiArPSBtTGVuO1xuXHQgIGZvcig7IGVMZW4gPiAwOyBidWZmZXJbaSsrXSA9IGUgJiAyNTUsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXHQgIGJ1ZmZlclstLWldIHw9IHMgKiAxMjg7XG5cdCAgcmV0dXJuIGJ1ZmZlcjtcblx0fTtcblx0dmFyIHVucGFja0lFRUU3NTQgPSBmdW5jdGlvbihidWZmZXIsIG1MZW4sIG5CeXRlcyl7XG5cdCAgdmFyIGVMZW4gID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG5cdCAgICAsIGVNYXggID0gKDEgPDwgZUxlbikgLSAxXG5cdCAgICAsIGVCaWFzID0gZU1heCA+PiAxXG5cdCAgICAsIG5CaXRzID0gZUxlbiAtIDdcblx0ICAgICwgaSAgICAgPSBuQnl0ZXMgLSAxXG5cdCAgICAsIHMgICAgID0gYnVmZmVyW2ktLV1cblx0ICAgICwgZSAgICAgPSBzICYgMTI3XG5cdCAgICAsIG07XG5cdCAgcyA+Pj0gNztcblx0ICBmb3IoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW2ldLCBpLS0sIG5CaXRzIC09IDgpO1xuXHQgIG0gPSBlICYgKDEgPDwgLW5CaXRzKSAtIDE7XG5cdCAgZSA+Pj0gLW5CaXRzO1xuXHQgIG5CaXRzICs9IG1MZW47XG5cdCAgZm9yKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KTtcblx0ICBpZihlID09PSAwKXtcblx0ICAgIGUgPSAxIC0gZUJpYXM7XG5cdCAgfSBlbHNlIGlmKGUgPT09IGVNYXgpe1xuXHQgICAgcmV0dXJuIG0gPyBOYU4gOiBzID8gLUluZmluaXR5IDogSW5maW5pdHk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIG0gPSBtICsgcG93KDIsIG1MZW4pO1xuXHQgICAgZSA9IGUgLSBlQmlhcztcblx0ICB9IHJldHVybiAocyA/IC0xIDogMSkgKiBtICogcG93KDIsIGUgLSBtTGVuKTtcblx0fTtcblxuXHR2YXIgdW5wYWNrSTMyID0gZnVuY3Rpb24oYnl0ZXMpe1xuXHQgIHJldHVybiBieXRlc1szXSA8PCAyNCB8IGJ5dGVzWzJdIDw8IDE2IHwgYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xuXHR9O1xuXHR2YXIgcGFja0k4ID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBbaXQgJiAweGZmXTtcblx0fTtcblx0dmFyIHBhY2tJMTYgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIFtpdCAmIDB4ZmYsIGl0ID4+IDggJiAweGZmXTtcblx0fTtcblx0dmFyIHBhY2tJMzIgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIFtpdCAmIDB4ZmYsIGl0ID4+IDggJiAweGZmLCBpdCA+PiAxNiAmIDB4ZmYsIGl0ID4+IDI0ICYgMHhmZl07XG5cdH07XG5cdHZhciBwYWNrRjY0ID0gZnVuY3Rpb24oaXQpe1xuXHQgIHJldHVybiBwYWNrSUVFRTc1NChpdCwgNTIsIDgpO1xuXHR9O1xuXHR2YXIgcGFja0YzMiA9IGZ1bmN0aW9uKGl0KXtcblx0ICByZXR1cm4gcGFja0lFRUU3NTQoaXQsIDIzLCA0KTtcblx0fTtcblxuXHR2YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24oQywga2V5LCBpbnRlcm5hbCl7XG5cdCAgZFAoQ1tQUk9UT1RZUEVdLCBrZXksIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzW2ludGVybmFsXTsgfX0pO1xuXHR9O1xuXG5cdHZhciBnZXQgPSBmdW5jdGlvbih2aWV3LCBieXRlcywgaW5kZXgsIGlzTGl0dGxlRW5kaWFuKXtcblx0ICB2YXIgbnVtSW5kZXggPSAraW5kZXhcblx0ICAgICwgaW50SW5kZXggPSB0b0ludGVnZXIobnVtSW5kZXgpO1xuXHQgIGlmKG51bUluZGV4ICE9IGludEluZGV4IHx8IGludEluZGV4IDwgMCB8fCBpbnRJbmRleCArIGJ5dGVzID4gdmlld1skTEVOR1RIXSl0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcblx0ICB2YXIgc3RvcmUgPSB2aWV3WyRCVUZGRVJdLl9iXG5cdCAgICAsIHN0YXJ0ID0gaW50SW5kZXggKyB2aWV3WyRPRkZTRVRdXG5cdCAgICAsIHBhY2sgID0gc3RvcmUuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgYnl0ZXMpO1xuXHQgIHJldHVybiBpc0xpdHRsZUVuZGlhbiA/IHBhY2sgOiBwYWNrLnJldmVyc2UoKTtcblx0fTtcblx0dmFyIHNldCA9IGZ1bmN0aW9uKHZpZXcsIGJ5dGVzLCBpbmRleCwgY29udmVyc2lvbiwgdmFsdWUsIGlzTGl0dGxlRW5kaWFuKXtcblx0ICB2YXIgbnVtSW5kZXggPSAraW5kZXhcblx0ICAgICwgaW50SW5kZXggPSB0b0ludGVnZXIobnVtSW5kZXgpO1xuXHQgIGlmKG51bUluZGV4ICE9IGludEluZGV4IHx8IGludEluZGV4IDwgMCB8fCBpbnRJbmRleCArIGJ5dGVzID4gdmlld1skTEVOR1RIXSl0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcblx0ICB2YXIgc3RvcmUgPSB2aWV3WyRCVUZGRVJdLl9iXG5cdCAgICAsIHN0YXJ0ID0gaW50SW5kZXggKyB2aWV3WyRPRkZTRVRdXG5cdCAgICAsIHBhY2sgID0gY29udmVyc2lvbigrdmFsdWUpO1xuXHQgIGZvcih2YXIgaSA9IDA7IGkgPCBieXRlczsgaSsrKXN0b3JlW3N0YXJ0ICsgaV0gPSBwYWNrW2lzTGl0dGxlRW5kaWFuID8gaSA6IGJ5dGVzIC0gaSAtIDFdO1xuXHR9O1xuXG5cdHZhciB2YWxpZGF0ZUFycmF5QnVmZmVyQXJndW1lbnRzID0gZnVuY3Rpb24odGhhdCwgbGVuZ3RoKXtcblx0ICBhbkluc3RhbmNlKHRoYXQsICRBcnJheUJ1ZmZlciwgQVJSQVlfQlVGRkVSKTtcblx0ICB2YXIgbnVtYmVyTGVuZ3RoID0gK2xlbmd0aFxuXHQgICAgLCBieXRlTGVuZ3RoICAgPSB0b0xlbmd0aChudW1iZXJMZW5ndGgpO1xuXHQgIGlmKG51bWJlckxlbmd0aCAhPSBieXRlTGVuZ3RoKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcblx0ICByZXR1cm4gYnl0ZUxlbmd0aDtcblx0fTtcblxuXHRpZighJHR5cGVkLkFCVil7XG5cdCAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKXtcblx0ICAgIHZhciBieXRlTGVuZ3RoID0gdmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyh0aGlzLCBsZW5ndGgpO1xuXHQgICAgdGhpcy5fYiAgICAgICA9IGFycmF5RmlsbC5jYWxsKEFycmF5KGJ5dGVMZW5ndGgpLCAwKTtcblx0ICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuXHQgIH07XG5cblx0ICAkRGF0YVZpZXcgPSBmdW5jdGlvbiBEYXRhVmlldyhidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpe1xuXHQgICAgYW5JbnN0YW5jZSh0aGlzLCAkRGF0YVZpZXcsIERBVEFfVklFVyk7XG5cdCAgICBhbkluc3RhbmNlKGJ1ZmZlciwgJEFycmF5QnVmZmVyLCBEQVRBX1ZJRVcpO1xuXHQgICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJ1ZmZlclskTEVOR1RIXVxuXHQgICAgICAsIG9mZnNldCAgICAgICA9IHRvSW50ZWdlcihieXRlT2Zmc2V0KTtcblx0ICAgIGlmKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID4gYnVmZmVyTGVuZ3RoKXRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCEnKTtcblx0ICAgIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID09PSB1bmRlZmluZWQgPyBidWZmZXJMZW5ndGggLSBvZmZzZXQgOiB0b0xlbmd0aChieXRlTGVuZ3RoKTtcblx0ICAgIGlmKG9mZnNldCArIGJ5dGVMZW5ndGggPiBidWZmZXJMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuXHQgICAgdGhpc1skQlVGRkVSXSA9IGJ1ZmZlcjtcblx0ICAgIHRoaXNbJE9GRlNFVF0gPSBvZmZzZXQ7XG5cdCAgICB0aGlzWyRMRU5HVEhdID0gYnl0ZUxlbmd0aDtcblx0ICB9O1xuXG5cdCAgaWYoREVTQ1JJUFRPUlMpe1xuXHQgICAgYWRkR2V0dGVyKCRBcnJheUJ1ZmZlciwgQllURV9MRU5HVEgsICdfbCcpO1xuXHQgICAgYWRkR2V0dGVyKCREYXRhVmlldywgQlVGRkVSLCAnX2InKTtcblx0ICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJZVEVfTEVOR1RILCAnX2wnKTtcblx0ICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJZVEVfT0ZGU0VULCAnX28nKTtcblx0ICB9XG5cblx0ICByZWRlZmluZUFsbCgkRGF0YVZpZXdbUFJPVE9UWVBFXSwge1xuXHQgICAgZ2V0SW50ODogZnVuY3Rpb24gZ2V0SW50OChieXRlT2Zmc2V0KXtcblx0ICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXSA8PCAyNCA+PiAyNDtcblx0ICAgIH0sXG5cdCAgICBnZXRVaW50ODogZnVuY3Rpb24gZ2V0VWludDgoYnl0ZU9mZnNldCl7XG5cdCAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF07XG5cdCAgICB9LFxuXHQgICAgZ2V0SW50MTY6IGZ1bmN0aW9uIGdldEludDE2KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pO1xuXHQgICAgICByZXR1cm4gKGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXSkgPDwgMTYgPj4gMTY7XG5cdCAgICB9LFxuXHQgICAgZ2V0VWludDE2OiBmdW5jdGlvbiBnZXRVaW50MTYoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgdmFyIGJ5dGVzID0gZ2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSk7XG5cdCAgICAgIHJldHVybiBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG5cdCAgICB9LFxuXHQgICAgZ2V0SW50MzI6IGZ1bmN0aW9uIGdldEludDMyKGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpO1xuXHQgICAgfSxcblx0ICAgIGdldFVpbnQzMjogZnVuY3Rpb24gZ2V0VWludDMyKGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpID4+PiAwO1xuXHQgICAgfSxcblx0ICAgIGdldEZsb2F0MzI6IGZ1bmN0aW9uIGdldEZsb2F0MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDIzLCA0KTtcblx0ICAgIH0sXG5cdCAgICBnZXRGbG9hdDY0OiBmdW5jdGlvbiBnZXRGbG9hdDY0KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCA1MiwgOCk7XG5cdCAgICB9LFxuXHQgICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG5cdCAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcblx0ICAgIH0sXG5cdCAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpe1xuXHQgICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0k4LCB2YWx1ZSk7XG5cdCAgICB9LFxuXHQgICAgc2V0SW50MTY6IGZ1bmN0aW9uIHNldEludDE2KGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICBzZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgcGFja0kxNiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG5cdCAgICB9LFxuXHQgICAgc2V0VWludDE2OiBmdW5jdGlvbiBzZXRVaW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcblx0ICAgIH0sXG5cdCAgICBzZXRJbnQzMjogZnVuY3Rpb24gc2V0SW50MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrSTMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcblx0ICAgIH0sXG5cdCAgICBzZXRVaW50MzI6IGZ1bmN0aW9uIHNldFVpbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcblx0ICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuXHQgICAgfSxcblx0ICAgIHNldEZsb2F0MzI6IGZ1bmN0aW9uIHNldEZsb2F0MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG5cdCAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrRjMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcblx0ICAgIH0sXG5cdCAgICBzZXRGbG9hdDY0OiBmdW5jdGlvbiBzZXRGbG9hdDY0KGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuXHQgICAgICBzZXQodGhpcywgOCwgYnl0ZU9mZnNldCwgcGFja0Y2NCwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH0gZWxzZSB7XG5cdCAgaWYoIWZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICBuZXcgJEFycmF5QnVmZmVyOyAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblx0ICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgIG5ldyAkQXJyYXlCdWZmZXIoLjUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXHQgIH0pKXtcblx0ICAgICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCl7XG5cdCAgICAgIHJldHVybiBuZXcgQmFzZUJ1ZmZlcih2YWxpZGF0ZUFycmF5QnVmZmVyQXJndW1lbnRzKHRoaXMsIGxlbmd0aCkpO1xuXHQgICAgfTtcblx0ICAgIHZhciBBcnJheUJ1ZmZlclByb3RvID0gJEFycmF5QnVmZmVyW1BST1RPVFlQRV0gPSBCYXNlQnVmZmVyW1BST1RPVFlQRV07XG5cdCAgICBmb3IodmFyIGtleXMgPSBnT1BOKEJhc2VCdWZmZXIpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7ICl7XG5cdCAgICAgIGlmKCEoKGtleSA9IGtleXNbaisrXSkgaW4gJEFycmF5QnVmZmVyKSloaWRlKCRBcnJheUJ1ZmZlciwga2V5LCBCYXNlQnVmZmVyW2tleV0pO1xuXHQgICAgfTtcblx0ICAgIGlmKCFMSUJSQVJZKUFycmF5QnVmZmVyUHJvdG8uY29uc3RydWN0b3IgPSAkQXJyYXlCdWZmZXI7XG5cdCAgfVxuXHQgIC8vIGlPUyBTYWZhcmkgNy54IGJ1Z1xuXHQgIHZhciB2aWV3ID0gbmV3ICREYXRhVmlldyhuZXcgJEFycmF5QnVmZmVyKDIpKVxuXHQgICAgLCAkc2V0SW50OCA9ICREYXRhVmlld1tQUk9UT1RZUEVdLnNldEludDg7XG5cdCAgdmlldy5zZXRJbnQ4KDAsIDIxNDc0ODM2NDgpO1xuXHQgIHZpZXcuc2V0SW50OCgxLCAyMTQ3NDgzNjQ5KTtcblx0ICBpZih2aWV3LmdldEludDgoMCkgfHwgIXZpZXcuZ2V0SW50OCgxKSlyZWRlZmluZUFsbCgkRGF0YVZpZXdbUFJPVE9UWVBFXSwge1xuXHQgICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG5cdCAgICAgICRzZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuXHQgICAgfSxcblx0ICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG5cdCAgICAgICRzZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuXHQgICAgfVxuXHQgIH0sIHRydWUpO1xuXHR9XG5cdHNldFRvU3RyaW5nVGFnKCRBcnJheUJ1ZmZlciwgQVJSQVlfQlVGRkVSKTtcblx0c2V0VG9TdHJpbmdUYWcoJERhdGFWaWV3LCBEQVRBX1ZJRVcpO1xuXHRoaWRlKCREYXRhVmlld1tQUk9UT1RZUEVdLCAkdHlwZWQuVklFVywgdHJ1ZSk7XG5cdGV4cG9ydHNbQVJSQVlfQlVGRkVSXSA9ICRBcnJheUJ1ZmZlcjtcblx0ZXhwb3J0c1tEQVRBX1ZJRVddID0gJERhdGFWaWV3O1xuXG4vKioqLyB9LFxuLyogMjM0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cdCRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIV9fd2VicGFja19yZXF1aXJlX18oMjMyKS5BQlYsIHtcblx0ICBEYXRhVmlldzogX193ZWJwYWNrX3JlcXVpcmVfXygyMzMpLkRhdGFWaWV3XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjM1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNikoJ0ludDgnLCAxLCBmdW5jdGlvbihpbml0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gSW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjM2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdGlmKF9fd2VicGFja19yZXF1aXJlX18oNCkpe1xuXHQgIHZhciBMSUJSQVJZICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNilcblx0ICAgICwgZ2xvYmFsICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMilcblx0ICAgICwgZmFpbHMgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNSlcblx0ICAgICwgJGV4cG9ydCAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAgICwgJHR5cGVkICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjMyKVxuXHQgICAgLCAkYnVmZmVyICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMzMpXG5cdCAgICAsIGN0eCAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KVxuXHQgICAgLCBhbkluc3RhbmNlICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTcpXG5cdCAgICAsIHByb3BlcnR5RGVzYyAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KVxuXHQgICAgLCBoaWRlICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KVxuXHQgICAgLCByZWRlZmluZUFsbCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDIpXG5cdCAgICAsIHRvSW50ZWdlciAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KVxuXHQgICAgLCB0b0xlbmd0aCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSlcblx0ICAgICwgdG9JbmRleCAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpXG5cdCAgICAsIHRvUHJpbWl0aXZlICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KVxuXHQgICAgLCBoYXMgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuXHQgICAgLCBzYW1lICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2OSlcblx0ICAgICwgY2xhc3NvZiAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNzMpXG5cdCAgICAsIGlzT2JqZWN0ICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKVxuXHQgICAgLCB0b09iamVjdCAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nilcblx0ICAgICwgaXNBcnJheUl0ZXIgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTU0KVxuXHQgICAgLCBjcmVhdGUgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NClcblx0ICAgICwgZ2V0UHJvdG90eXBlT2YgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgICAsIGdPUE4gICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KS5mXG5cdCAgICAsIGdldEl0ZXJGbiAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Nilcblx0ICAgICwgdWlkICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpXG5cdCAgICAsIHdrcyAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKVxuXHQgICAgLCBjcmVhdGVBcnJheU1ldGhvZCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNjQpXG5cdCAgICAsIGNyZWF0ZUFycmF5SW5jbHVkZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KVxuXHQgICAgLCBzcGVjaWVzQ29uc3RydWN0b3IgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTkpXG5cdCAgICAsIEFycmF5SXRlcmF0b3JzICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4Mylcblx0ICAgICwgSXRlcmF0b3JzICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTM1KVxuXHQgICAgLCAkaXRlckRldGVjdCAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTcpXG5cdCAgICAsIHNldFNwZWNpZXMgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4Nilcblx0ICAgICwgYXJyYXlGaWxsICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgwKVxuXHQgICAgLCBhcnJheUNvcHlXaXRoaW4gICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNzcpXG5cdCAgICAsICREUCAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpXG5cdCAgICAsICRHT1BEICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KVxuXHQgICAgLCBkUCAgICAgICAgICAgICAgICAgID0gJERQLmZcblx0ICAgICwgZ09QRCAgICAgICAgICAgICAgICA9ICRHT1BELmZcblx0ICAgICwgUmFuZ2VFcnJvciAgICAgICAgICA9IGdsb2JhbC5SYW5nZUVycm9yXG5cdCAgICAsIFR5cGVFcnJvciAgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG5cdCAgICAsIFVpbnQ4QXJyYXkgICAgICAgICAgPSBnbG9iYWwuVWludDhBcnJheVxuXHQgICAgLCBBUlJBWV9CVUZGRVIgICAgICAgID0gJ0FycmF5QnVmZmVyJ1xuXHQgICAgLCBTSEFSRURfQlVGRkVSICAgICAgID0gJ1NoYXJlZCcgKyBBUlJBWV9CVUZGRVJcblx0ICAgICwgQllURVNfUEVSX0VMRU1FTlQgICA9ICdCWVRFU19QRVJfRUxFTUVOVCdcblx0ICAgICwgUFJPVE9UWVBFICAgICAgICAgICA9ICdwcm90b3R5cGUnXG5cdCAgICAsIEFycmF5UHJvdG8gICAgICAgICAgPSBBcnJheVtQUk9UT1RZUEVdXG5cdCAgICAsICRBcnJheUJ1ZmZlciAgICAgICAgPSAkYnVmZmVyLkFycmF5QnVmZmVyXG5cdCAgICAsICREYXRhVmlldyAgICAgICAgICAgPSAkYnVmZmVyLkRhdGFWaWV3XG5cdCAgICAsIGFycmF5Rm9yRWFjaCAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCgwKVxuXHQgICAgLCBhcnJheUZpbHRlciAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoMilcblx0ICAgICwgYXJyYXlTb21lICAgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDMpXG5cdCAgICAsIGFycmF5RXZlcnkgICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg0KVxuXHQgICAgLCBhcnJheUZpbmQgICAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNSlcblx0ICAgICwgYXJyYXlGaW5kSW5kZXggICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpXG5cdCAgICAsIGFycmF5SW5jbHVkZXMgICAgICAgPSBjcmVhdGVBcnJheUluY2x1ZGVzKHRydWUpXG5cdCAgICAsIGFycmF5SW5kZXhPZiAgICAgICAgPSBjcmVhdGVBcnJheUluY2x1ZGVzKGZhbHNlKVxuXHQgICAgLCBhcnJheVZhbHVlcyAgICAgICAgID0gQXJyYXlJdGVyYXRvcnMudmFsdWVzXG5cdCAgICAsIGFycmF5S2V5cyAgICAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy5rZXlzXG5cdCAgICAsIGFycmF5RW50cmllcyAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy5lbnRyaWVzXG5cdCAgICAsIGFycmF5TGFzdEluZGV4T2YgICAgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mXG5cdCAgICAsIGFycmF5UmVkdWNlICAgICAgICAgPSBBcnJheVByb3RvLnJlZHVjZVxuXHQgICAgLCBhcnJheVJlZHVjZVJpZ2h0ICAgID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodFxuXHQgICAgLCBhcnJheUpvaW4gICAgICAgICAgID0gQXJyYXlQcm90by5qb2luXG5cdCAgICAsIGFycmF5U29ydCAgICAgICAgICAgPSBBcnJheVByb3RvLnNvcnRcblx0ICAgICwgYXJyYXlTbGljZSAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2Vcblx0ICAgICwgYXJyYXlUb1N0cmluZyAgICAgICA9IEFycmF5UHJvdG8udG9TdHJpbmdcblx0ICAgICwgYXJyYXlUb0xvY2FsZVN0cmluZyA9IEFycmF5UHJvdG8udG9Mb2NhbGVTdHJpbmdcblx0ICAgICwgSVRFUkFUT1IgICAgICAgICAgICA9IHdrcygnaXRlcmF0b3InKVxuXHQgICAgLCBUQUcgICAgICAgICAgICAgICAgID0gd2tzKCd0b1N0cmluZ1RhZycpXG5cdCAgICAsIFRZUEVEX0NPTlNUUlVDVE9SICAgPSB1aWQoJ3R5cGVkX2NvbnN0cnVjdG9yJylcblx0ICAgICwgREVGX0NPTlNUUlVDVE9SICAgICA9IHVpZCgnZGVmX2NvbnN0cnVjdG9yJylcblx0ICAgICwgQUxMX0NPTlNUUlVDVE9SUyAgICA9ICR0eXBlZC5DT05TVFJcblx0ICAgICwgVFlQRURfQVJSQVkgICAgICAgICA9ICR0eXBlZC5UWVBFRFxuXHQgICAgLCBWSUVXICAgICAgICAgICAgICAgID0gJHR5cGVkLlZJRVdcblx0ICAgICwgV1JPTkdfTEVOR1RIICAgICAgICA9ICdXcm9uZyBsZW5ndGghJztcblxuXHQgIHZhciAkbWFwID0gY3JlYXRlQXJyYXlNZXRob2QoMSwgZnVuY3Rpb24oTywgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBhbGxvY2F0ZShzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSwgbGVuZ3RoKTtcblx0ICB9KTtcblxuXHQgIHZhciBMSVRUTEVfRU5ESUFOID0gZmFpbHMoZnVuY3Rpb24oKXtcblx0ICAgIHJldHVybiBuZXcgVWludDhBcnJheShuZXcgVWludDE2QXJyYXkoWzFdKS5idWZmZXIpWzBdID09PSAxO1xuXHQgIH0pO1xuXG5cdCAgdmFyIEZPUkNFRF9TRVQgPSAhIVVpbnQ4QXJyYXkgJiYgISFVaW50OEFycmF5W1BST1RPVFlQRV0uc2V0ICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICBuZXcgVWludDhBcnJheSgxKS5zZXQoe30pO1xuXHQgIH0pO1xuXG5cdCAgdmFyIHN0cmljdFRvTGVuZ3RoID0gZnVuY3Rpb24oaXQsIFNBTUUpe1xuXHQgICAgaWYoaXQgPT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoV1JPTkdfTEVOR1RIKTtcblx0ICAgIHZhciBudW1iZXIgPSAraXRcblx0ICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChpdCk7XG5cdCAgICBpZihTQU1FICYmICFzYW1lKG51bWJlciwgbGVuZ3RoKSl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG5cdCAgICByZXR1cm4gbGVuZ3RoO1xuXHQgIH07XG5cblx0ICB2YXIgdG9PZmZzZXQgPSBmdW5jdGlvbihpdCwgQllURVMpe1xuXHQgICAgdmFyIG9mZnNldCA9IHRvSW50ZWdlcihpdCk7XG5cdCAgICBpZihvZmZzZXQgPCAwIHx8IG9mZnNldCAlIEJZVEVTKXRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCEnKTtcblx0ICAgIHJldHVybiBvZmZzZXQ7XG5cdCAgfTtcblxuXHQgIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uKGl0KXtcblx0ICAgIGlmKGlzT2JqZWN0KGl0KSAmJiBUWVBFRF9BUlJBWSBpbiBpdClyZXR1cm4gaXQ7XG5cdCAgICB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIHR5cGVkIGFycmF5IScpO1xuXHQgIH07XG5cblx0ICB2YXIgYWxsb2NhdGUgPSBmdW5jdGlvbihDLCBsZW5ndGgpe1xuXHQgICAgaWYoIShpc09iamVjdChDKSAmJiBUWVBFRF9DT05TVFJVQ1RPUiBpbiBDKSl7XG5cdCAgICAgIHRocm93IFR5cGVFcnJvcignSXQgaXMgbm90IGEgdHlwZWQgYXJyYXkgY29uc3RydWN0b3IhJyk7XG5cdCAgICB9IHJldHVybiBuZXcgQyhsZW5ndGgpO1xuXHQgIH07XG5cblx0ICB2YXIgc3BlY2llc0Zyb21MaXN0ID0gZnVuY3Rpb24oTywgbGlzdCl7XG5cdCAgICByZXR1cm4gZnJvbUxpc3Qoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSksIGxpc3QpO1xuXHQgIH07XG5cblx0ICB2YXIgZnJvbUxpc3QgPSBmdW5jdGlvbihDLCBsaXN0KXtcblx0ICAgIHZhciBpbmRleCAgPSAwXG5cdCAgICAgICwgbGVuZ3RoID0gbGlzdC5sZW5ndGhcblx0ICAgICAgLCByZXN1bHQgPSBhbGxvY2F0ZShDLCBsZW5ndGgpO1xuXHQgICAgd2hpbGUobGVuZ3RoID4gaW5kZXgpcmVzdWx0W2luZGV4XSA9IGxpc3RbaW5kZXgrK107XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHQgIH07XG5cblx0ICB2YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24oaXQsIGtleSwgaW50ZXJuYWwpe1xuXHQgICAgZFAoaXQsIGtleSwge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuX2RbaW50ZXJuYWxdOyB9fSk7XG5cdCAgfTtcblxuXHQgIHZhciAkZnJvbSA9IGZ1bmN0aW9uIGZyb20oc291cmNlIC8qLCBtYXBmbiwgdGhpc0FyZyAqLyl7XG5cdCAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KHNvdXJjZSlcblx0ICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuXHQgICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuXHQgICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG5cdCAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuXHQgICAgICAsIGksIGxlbmd0aCwgdmFsdWVzLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuXHQgICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhaXNBcnJheUl0ZXIoaXRlckZuKSl7XG5cdCAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCB2YWx1ZXMgPSBbXSwgaSA9IDA7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaSsrKXtcblx0ICAgICAgICB2YWx1ZXMucHVzaChzdGVwLnZhbHVlKTtcblx0ICAgICAgfSBPID0gdmFsdWVzO1xuXHQgICAgfVxuXHQgICAgaWYobWFwcGluZyAmJiBhTGVuID4gMiltYXBmbiA9IGN0eChtYXBmbiwgYXJndW1lbnRzWzJdLCAyKTtcblx0ICAgIGZvcihpID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpLCByZXN1bHQgPSBhbGxvY2F0ZSh0aGlzLCBsZW5ndGgpOyBsZW5ndGggPiBpOyBpKyspe1xuXHQgICAgICByZXN1bHRbaV0gPSBtYXBwaW5nID8gbWFwZm4oT1tpXSwgaSkgOiBPW2ldO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9O1xuXG5cdCAgdmFyICRvZiA9IGZ1bmN0aW9uIG9mKC8qLi4uaXRlbXMqLyl7XG5cdCAgICB2YXIgaW5kZXggID0gMFxuXHQgICAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICAgLCByZXN1bHQgPSBhbGxvY2F0ZSh0aGlzLCBsZW5ndGgpO1xuXHQgICAgd2hpbGUobGVuZ3RoID4gaW5kZXgpcmVzdWx0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfTtcblxuXHQgIC8vIGlPUyBTYWZhcmkgNi54IGZhaWxzIGhlcmVcblx0ICB2YXIgVE9fTE9DQUxFX0JVRyA9ICEhVWludDhBcnJheSAmJiBmYWlscyhmdW5jdGlvbigpeyBhcnJheVRvTG9jYWxlU3RyaW5nLmNhbGwobmV3IFVpbnQ4QXJyYXkoMSkpOyB9KTtcblxuXHQgIHZhciAkdG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b0xvY2FsZVN0cmluZygpe1xuXHQgICAgcmV0dXJuIGFycmF5VG9Mb2NhbGVTdHJpbmcuYXBwbHkoVE9fTE9DQUxFX0JVRyA/IGFycmF5U2xpY2UuY2FsbCh2YWxpZGF0ZSh0aGlzKSkgOiB2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcblx0ICB9O1xuXG5cdCAgdmFyIHByb3RvID0ge1xuXHQgICAgY29weVdpdGhpbjogZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0IC8qLCBlbmQgKi8pe1xuXHQgICAgICByZXR1cm4gYXJyYXlDb3B5V2l0aGluLmNhbGwodmFsaWRhdGUodGhpcyksIHRhcmdldCwgc3RhcnQsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcblx0ICAgIH0sXG5cdCAgICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG5cdCAgICAgIHJldHVybiBhcnJheUV2ZXJ5KHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB9LFxuXHQgICAgZmlsbDogZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiwgc3RhcnQsIGVuZCAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0ICAgICAgcmV0dXJuIGFycmF5RmlsbC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcblx0ICAgIH0sXG5cdCAgICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcblx0ICAgICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheUZpbHRlcih2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbixcblx0ICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCkpO1xuXHQgICAgfSxcblx0ICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlIC8qLCB0aGlzQXJnICovKXtcblx0ICAgICAgcmV0dXJuIGFycmF5RmluZCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB9LFxuXHQgICAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlIC8qLCB0aGlzQXJnICovKXtcblx0ICAgICAgcmV0dXJuIGFycmF5RmluZEluZGV4KHZhbGlkYXRlKHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIH0sXG5cdCAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuXHQgICAgICBhcnJheUZvckVhY2godmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIH0sXG5cdCAgICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyl7XG5cdCAgICAgIHJldHVybiBhcnJheUluZGV4T2YodmFsaWRhdGUodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIH0sXG5cdCAgICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXtcblx0ICAgICAgcmV0dXJuIGFycmF5SW5jbHVkZXModmFsaWRhdGUodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIH0sXG5cdCAgICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0ICAgICAgcmV0dXJuIGFycmF5Sm9pbi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcblx0ICAgIH0sXG5cdCAgICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHQgICAgICByZXR1cm4gYXJyYXlMYXN0SW5kZXhPZi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcblx0ICAgIH0sXG5cdCAgICBtYXA6IGZ1bmN0aW9uIG1hcChtYXBmbiAvKiwgdGhpc0FyZyAqLyl7XG5cdCAgICAgIHJldHVybiAkbWFwKHZhbGlkYXRlKHRoaXMpLCBtYXBmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgfSxcblx0ICAgIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyosIGluaXRpYWxWYWx1ZSAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0ICAgICAgcmV0dXJuIGFycmF5UmVkdWNlLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuXHQgICAgfSxcblx0ICAgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuIC8qLCBpbml0aWFsVmFsdWUgKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdCAgICAgIHJldHVybiBhcnJheVJlZHVjZVJpZ2h0LmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuXHQgICAgfSxcblx0ICAgIHJldmVyc2U6IGZ1bmN0aW9uIHJldmVyc2UoKXtcblx0ICAgICAgdmFyIHRoYXQgICA9IHRoaXNcblx0ICAgICAgICAsIGxlbmd0aCA9IHZhbGlkYXRlKHRoYXQpLmxlbmd0aFxuXHQgICAgICAgICwgbWlkZGxlID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKVxuXHQgICAgICAgICwgaW5kZXggID0gMFxuXHQgICAgICAgICwgdmFsdWU7XG5cdCAgICAgIHdoaWxlKGluZGV4IDwgbWlkZGxlKXtcblx0ICAgICAgICB2YWx1ZSAgICAgICAgID0gdGhhdFtpbmRleF07XG5cdCAgICAgICAgdGhhdFtpbmRleCsrXSA9IHRoYXRbLS1sZW5ndGhdO1xuXHQgICAgICAgIHRoYXRbbGVuZ3RoXSAgPSB2YWx1ZTtcblx0ICAgICAgfSByZXR1cm4gdGhhdDtcblx0ICAgIH0sXG5cdCAgICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuXHQgICAgICByZXR1cm4gYXJyYXlTb21lKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB9LFxuXHQgICAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pe1xuXHQgICAgICByZXR1cm4gYXJyYXlTb3J0LmNhbGwodmFsaWRhdGUodGhpcyksIGNvbXBhcmVmbik7XG5cdCAgICB9LFxuXHQgICAgc3ViYXJyYXk6IGZ1bmN0aW9uIHN1YmFycmF5KGJlZ2luLCBlbmQpe1xuXHQgICAgICB2YXIgTyAgICAgID0gdmFsaWRhdGUodGhpcylcblx0ICAgICAgICAsIGxlbmd0aCA9IE8ubGVuZ3RoXG5cdCAgICAgICAgLCAkYmVnaW4gPSB0b0luZGV4KGJlZ2luLCBsZW5ndGgpO1xuXHQgICAgICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSkoXG5cdCAgICAgICAgTy5idWZmZXIsXG5cdCAgICAgICAgTy5ieXRlT2Zmc2V0ICsgJGJlZ2luICogTy5CWVRFU19QRVJfRUxFTUVOVCxcblx0ICAgICAgICB0b0xlbmd0aCgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKSkgLSAkYmVnaW4pXG5cdCAgICAgICk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHZhciAkc2xpY2UgPSBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKXtcblx0ICAgIHJldHVybiBzcGVjaWVzRnJvbUxpc3QodGhpcywgYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpLCBzdGFydCwgZW5kKSk7XG5cdCAgfTtcblxuXHQgIHZhciAkc2V0ID0gZnVuY3Rpb24gc2V0KGFycmF5TGlrZSAvKiwgb2Zmc2V0ICovKXtcblx0ICAgIHZhbGlkYXRlKHRoaXMpO1xuXHQgICAgdmFyIG9mZnNldCA9IHRvT2Zmc2V0KGFyZ3VtZW50c1sxXSwgMSlcblx0ICAgICAgLCBsZW5ndGggPSB0aGlzLmxlbmd0aFxuXHQgICAgICAsIHNyYyAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcblx0ICAgICAgLCBsZW4gICAgPSB0b0xlbmd0aChzcmMubGVuZ3RoKVxuXHQgICAgICAsIGluZGV4ICA9IDA7XG5cdCAgICBpZihsZW4gKyBvZmZzZXQgPiBsZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuXHQgICAgd2hpbGUoaW5kZXggPCBsZW4pdGhpc1tvZmZzZXQgKyBpbmRleF0gPSBzcmNbaW5kZXgrK107XG5cdCAgfTtcblxuXHQgIHZhciAkaXRlcmF0b3JzID0ge1xuXHQgICAgZW50cmllczogZnVuY3Rpb24gZW50cmllcygpe1xuXHQgICAgICByZXR1cm4gYXJyYXlFbnRyaWVzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuXHQgICAgfSxcblx0ICAgIGtleXM6IGZ1bmN0aW9uIGtleXMoKXtcblx0ICAgICAgcmV0dXJuIGFycmF5S2V5cy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcblx0ICAgIH0sXG5cdCAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpe1xuXHQgICAgICByZXR1cm4gYXJyYXlWYWx1ZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHZhciBpc1RBSW5kZXggPSBmdW5jdGlvbih0YXJnZXQsIGtleSl7XG5cdCAgICByZXR1cm4gaXNPYmplY3QodGFyZ2V0KVxuXHQgICAgICAmJiB0YXJnZXRbVFlQRURfQVJSQVldXG5cdCAgICAgICYmIHR5cGVvZiBrZXkgIT0gJ3N5bWJvbCdcblx0ICAgICAgJiYga2V5IGluIHRhcmdldFxuXHQgICAgICAmJiBTdHJpbmcoK2tleSkgPT0gU3RyaW5nKGtleSk7XG5cdCAgfTtcblx0ICB2YXIgJGdldERlc2MgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpe1xuXHQgICAgcmV0dXJuIGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpXG5cdCAgICAgID8gcHJvcGVydHlEZXNjKDIsIHRhcmdldFtrZXldKVxuXHQgICAgICA6IGdPUEQodGFyZ2V0LCBrZXkpO1xuXHQgIH07XG5cdCAgdmFyICRzZXREZXNjID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2Mpe1xuXHQgICAgaWYoaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSlcblx0ICAgICAgJiYgaXNPYmplY3QoZGVzYylcblx0ICAgICAgJiYgaGFzKGRlc2MsICd2YWx1ZScpXG5cdCAgICAgICYmICFoYXMoZGVzYywgJ2dldCcpXG5cdCAgICAgICYmICFoYXMoZGVzYywgJ3NldCcpXG5cdCAgICAgIC8vIFRPRE86IGFkZCB2YWxpZGF0aW9uIGRlc2NyaXB0b3Igdy9vIGNhbGxpbmcgYWNjZXNzb3JzXG5cdCAgICAgICYmICFkZXNjLmNvbmZpZ3VyYWJsZVxuXHQgICAgICAmJiAoIWhhcyhkZXNjLCAnd3JpdGFibGUnKSB8fCBkZXNjLndyaXRhYmxlKVxuXHQgICAgICAmJiAoIWhhcyhkZXNjLCAnZW51bWVyYWJsZScpIHx8IGRlc2MuZW51bWVyYWJsZSlcblx0ICAgICl7XG5cdCAgICAgIHRhcmdldFtrZXldID0gZGVzYy52YWx1ZTtcblx0ICAgICAgcmV0dXJuIHRhcmdldDtcblx0ICAgIH0gZWxzZSByZXR1cm4gZFAodGFyZ2V0LCBrZXksIGRlc2MpO1xuXHQgIH07XG5cblx0ICBpZighQUxMX0NPTlNUUlVDVE9SUyl7XG5cdCAgICAkR09QRC5mID0gJGdldERlc2M7XG5cdCAgICAkRFAuZiAgID0gJHNldERlc2M7XG5cdCAgfVxuXG5cdCAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhQUxMX0NPTlNUUlVDVE9SUywgJ09iamVjdCcsIHtcblx0ICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldERlc2MsXG5cdCAgICBkZWZpbmVQcm9wZXJ0eTogICAgICAgICAgICRzZXREZXNjXG5cdCAgfSk7XG5cblx0ICBpZihmYWlscyhmdW5jdGlvbigpeyBhcnJheVRvU3RyaW5nLmNhbGwoe30pOyB9KSl7XG5cdCAgICBhcnJheVRvU3RyaW5nID0gYXJyYXlUb0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG5cdCAgICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0aGlzKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICB2YXIgJFR5cGVkQXJyYXlQcm90b3R5cGUkID0gcmVkZWZpbmVBbGwoe30sIHByb3RvKTtcblx0ICByZWRlZmluZUFsbCgkVHlwZWRBcnJheVByb3RvdHlwZSQsICRpdGVyYXRvcnMpO1xuXHQgIGhpZGUoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCBJVEVSQVRPUiwgJGl0ZXJhdG9ycy52YWx1ZXMpO1xuXHQgIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwge1xuXHQgICAgc2xpY2U6ICAgICAgICAgICRzbGljZSxcblx0ICAgIHNldDogICAgICAgICAgICAkc2V0LFxuXHQgICAgY29uc3RydWN0b3I6ICAgIGZ1bmN0aW9uKCl7IC8qIG5vb3AgKi8gfSxcblx0ICAgIHRvU3RyaW5nOiAgICAgICBhcnJheVRvU3RyaW5nLFxuXHQgICAgdG9Mb2NhbGVTdHJpbmc6ICR0b0xvY2FsZVN0cmluZ1xuXHQgIH0pO1xuXHQgIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdidWZmZXInLCAnYicpO1xuXHQgIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdieXRlT2Zmc2V0JywgJ28nKTtcblx0ICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnl0ZUxlbmd0aCcsICdsJyk7XG5cdCAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2xlbmd0aCcsICdlJyk7XG5cdCAgZFAoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCBUQUcsIHtcblx0ICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXNbVFlQRURfQVJSQVldOyB9XG5cdCAgfSk7XG5cblx0ICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgQllURVMsIHdyYXBwZXIsIENMQU1QRUQpe1xuXHQgICAgQ0xBTVBFRCA9ICEhQ0xBTVBFRDtcblx0ICAgIHZhciBOQU1FICAgICAgID0gS0VZICsgKENMQU1QRUQgPyAnQ2xhbXBlZCcgOiAnJykgKyAnQXJyYXknXG5cdCAgICAgICwgSVNOVF9VSU5UOCA9IE5BTUUgIT0gJ1VpbnQ4QXJyYXknXG5cdCAgICAgICwgR0VUVEVSICAgICA9ICdnZXQnICsgS0VZXG5cdCAgICAgICwgU0VUVEVSICAgICA9ICdzZXQnICsgS0VZXG5cdCAgICAgICwgVHlwZWRBcnJheSA9IGdsb2JhbFtOQU1FXVxuXHQgICAgICAsIEJhc2UgICAgICAgPSBUeXBlZEFycmF5IHx8IHt9XG5cdCAgICAgICwgVEFDICAgICAgICA9IFR5cGVkQXJyYXkgJiYgZ2V0UHJvdG90eXBlT2YoVHlwZWRBcnJheSlcblx0ICAgICAgLCBGT1JDRUQgICAgID0gIVR5cGVkQXJyYXkgfHwgISR0eXBlZC5BQlZcblx0ICAgICAgLCBPICAgICAgICAgID0ge31cblx0ICAgICAgLCBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheSAmJiBUeXBlZEFycmF5W1BST1RPVFlQRV07XG5cdCAgICB2YXIgZ2V0dGVyID0gZnVuY3Rpb24odGhhdCwgaW5kZXgpe1xuXHQgICAgICB2YXIgZGF0YSA9IHRoYXQuX2Q7XG5cdCAgICAgIHJldHVybiBkYXRhLnZbR0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCBMSVRUTEVfRU5ESUFOKTtcblx0ICAgIH07XG5cdCAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24odGhhdCwgaW5kZXgsIHZhbHVlKXtcblx0ICAgICAgdmFyIGRhdGEgPSB0aGF0Ll9kO1xuXHQgICAgICBpZihDTEFNUEVEKXZhbHVlID0gKHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSkpIDwgMCA/IDAgOiB2YWx1ZSA+IDB4ZmYgPyAweGZmIDogdmFsdWUgJiAweGZmO1xuXHQgICAgICBkYXRhLnZbU0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCB2YWx1ZSwgTElUVExFX0VORElBTik7XG5cdCAgICB9O1xuXHQgICAgdmFyIGFkZEVsZW1lbnQgPSBmdW5jdGlvbih0aGF0LCBpbmRleCl7XG5cdCAgICAgIGRQKHRoYXQsIGluZGV4LCB7XG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuXHQgICAgICAgICAgcmV0dXJuIGdldHRlcih0aGlzLCBpbmRleCk7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcblx0ICAgICAgICAgIHJldHVybiBzZXR0ZXIodGhpcywgaW5kZXgsIHZhbHVlKTtcblx0ICAgICAgICB9LFxuXHQgICAgICAgIGVudW1lcmFibGU6IHRydWVcblx0ICAgICAgfSk7XG5cdCAgICB9O1xuXHQgICAgaWYoRk9SQ0VEKXtcblx0ICAgICAgVHlwZWRBcnJheSA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgZGF0YSwgJG9mZnNldCwgJGxlbmd0aCl7XG5cdCAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5LCBOQU1FLCAnX2QnKTtcblx0ICAgICAgICB2YXIgaW5kZXggID0gMFxuXHQgICAgICAgICAgLCBvZmZzZXQgPSAwXG5cdCAgICAgICAgICAsIGJ1ZmZlciwgYnl0ZUxlbmd0aCwgbGVuZ3RoLCBrbGFzcztcblx0ICAgICAgICBpZighaXNPYmplY3QoZGF0YSkpe1xuXHQgICAgICAgICAgbGVuZ3RoICAgICA9IHN0cmljdFRvTGVuZ3RoKGRhdGEsIHRydWUpXG5cdCAgICAgICAgICBieXRlTGVuZ3RoID0gbGVuZ3RoICogQllURVM7XG5cdCAgICAgICAgICBidWZmZXIgICAgID0gbmV3ICRBcnJheUJ1ZmZlcihieXRlTGVuZ3RoKTtcblx0ICAgICAgICB9IGVsc2UgaWYoZGF0YSBpbnN0YW5jZW9mICRBcnJheUJ1ZmZlciB8fCAoa2xhc3MgPSBjbGFzc29mKGRhdGEpKSA9PSBBUlJBWV9CVUZGRVIgfHwga2xhc3MgPT0gU0hBUkVEX0JVRkZFUil7XG5cdCAgICAgICAgICBidWZmZXIgPSBkYXRhO1xuXHQgICAgICAgICAgb2Zmc2V0ID0gdG9PZmZzZXQoJG9mZnNldCwgQllURVMpO1xuXHQgICAgICAgICAgdmFyICRsZW4gPSBkYXRhLmJ5dGVMZW5ndGg7XG5cdCAgICAgICAgICBpZigkbGVuZ3RoID09PSB1bmRlZmluZWQpe1xuXHQgICAgICAgICAgICBpZigkbGVuICUgQllURVMpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuXHQgICAgICAgICAgICBieXRlTGVuZ3RoID0gJGxlbiAtIG9mZnNldDtcblx0ICAgICAgICAgICAgaWYoYnl0ZUxlbmd0aCA8IDApdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgYnl0ZUxlbmd0aCA9IHRvTGVuZ3RoKCRsZW5ndGgpICogQllURVM7XG5cdCAgICAgICAgICAgIGlmKGJ5dGVMZW5ndGggKyBvZmZzZXQgPiAkbGVuKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGxlbmd0aCA9IGJ5dGVMZW5ndGggLyBCWVRFUztcblx0ICAgICAgICB9IGVsc2UgaWYoVFlQRURfQVJSQVkgaW4gZGF0YSl7XG5cdCAgICAgICAgICByZXR1cm4gZnJvbUxpc3QoVHlwZWRBcnJheSwgZGF0YSk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBoaWRlKHRoYXQsICdfZCcsIHtcblx0ICAgICAgICAgIGI6IGJ1ZmZlcixcblx0ICAgICAgICAgIG86IG9mZnNldCxcblx0ICAgICAgICAgIGw6IGJ5dGVMZW5ndGgsXG5cdCAgICAgICAgICBlOiBsZW5ndGgsXG5cdCAgICAgICAgICB2OiBuZXcgJERhdGFWaWV3KGJ1ZmZlcilcblx0ICAgICAgICB9KTtcblx0ICAgICAgICB3aGlsZShpbmRleCA8IGxlbmd0aClhZGRFbGVtZW50KHRoYXQsIGluZGV4KyspO1xuXHQgICAgICB9KTtcblx0ICAgICAgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXlbUFJPVE9UWVBFXSA9IGNyZWF0ZSgkVHlwZWRBcnJheVByb3RvdHlwZSQpO1xuXHQgICAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIFR5cGVkQXJyYXkpO1xuXHQgICAgfSBlbHNlIGlmKCEkaXRlckRldGVjdChmdW5jdGlvbihpdGVyKXtcblx0ICAgICAgLy8gVjggd29ya3Mgd2l0aCBpdGVyYXRvcnMsIGJ1dCBmYWlscyBpbiBtYW55IG90aGVyIGNhc2VzXG5cdCAgICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00NTUyXG5cdCAgICAgIG5ldyBUeXBlZEFycmF5KG51bGwpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXHQgICAgICBuZXcgVHlwZWRBcnJheShpdGVyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblx0ICAgIH0sIHRydWUpKXtcblx0ICAgICAgVHlwZWRBcnJheSA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgZGF0YSwgJG9mZnNldCwgJGxlbmd0aCl7XG5cdCAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5LCBOQU1FKTtcblx0ICAgICAgICB2YXIga2xhc3M7XG5cdCAgICAgICAgLy8gYHdzYCBtb2R1bGUgYnVnLCB0ZW1wb3JhcmlseSByZW1vdmUgdmFsaWRhdGlvbiBsZW5ndGggZm9yIFVpbnQ4QXJyYXlcblx0ICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2Vic29ja2V0cy93cy9wdWxsLzY0NVxuXHQgICAgICAgIGlmKCFpc09iamVjdChkYXRhKSlyZXR1cm4gbmV3IEJhc2Uoc3RyaWN0VG9MZW5ndGgoZGF0YSwgSVNOVF9VSU5UOCkpO1xuXHQgICAgICAgIGlmKGRhdGEgaW5zdGFuY2VvZiAkQXJyYXlCdWZmZXIgfHwgKGtsYXNzID0gY2xhc3NvZihkYXRhKSkgPT0gQVJSQVlfQlVGRkVSIHx8IGtsYXNzID09IFNIQVJFRF9CVUZGRVIpe1xuXHQgICAgICAgICAgcmV0dXJuICRsZW5ndGggIT09IHVuZGVmaW5lZFxuXHQgICAgICAgICAgICA/IG5ldyBCYXNlKGRhdGEsIHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKSwgJGxlbmd0aClcblx0ICAgICAgICAgICAgOiAkb2Zmc2V0ICE9PSB1bmRlZmluZWRcblx0ICAgICAgICAgICAgICA/IG5ldyBCYXNlKGRhdGEsIHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKSlcblx0ICAgICAgICAgICAgICA6IG5ldyBCYXNlKGRhdGEpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZihUWVBFRF9BUlJBWSBpbiBkYXRhKXJldHVybiBmcm9tTGlzdChUeXBlZEFycmF5LCBkYXRhKTtcblx0ICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIGFycmF5Rm9yRWFjaChUQUMgIT09IEZ1bmN0aW9uLnByb3RvdHlwZSA/IGdPUE4oQmFzZSkuY29uY2F0KGdPUE4oVEFDKSkgOiBnT1BOKEJhc2UpLCBmdW5jdGlvbihrZXkpe1xuXHQgICAgICAgIGlmKCEoa2V5IGluIFR5cGVkQXJyYXkpKWhpZGUoVHlwZWRBcnJheSwga2V5LCBCYXNlW2tleV0pO1xuXHQgICAgICB9KTtcblx0ICAgICAgVHlwZWRBcnJheVtQUk9UT1RZUEVdID0gVHlwZWRBcnJheVByb3RvdHlwZTtcblx0ICAgICAgaWYoIUxJQlJBUlkpVHlwZWRBcnJheVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFR5cGVkQXJyYXk7XG5cdCAgICB9XG5cdCAgICB2YXIgJG5hdGl2ZUl0ZXJhdG9yICAgPSBUeXBlZEFycmF5UHJvdG90eXBlW0lURVJBVE9SXVxuXHQgICAgICAsIENPUlJFQ1RfSVRFUl9OQU1FID0gISEkbmF0aXZlSXRlcmF0b3IgJiYgKCRuYXRpdmVJdGVyYXRvci5uYW1lID09ICd2YWx1ZXMnIHx8ICRuYXRpdmVJdGVyYXRvci5uYW1lID09IHVuZGVmaW5lZClcblx0ICAgICAgLCAkaXRlcmF0b3IgICAgICAgICA9ICRpdGVyYXRvcnMudmFsdWVzO1xuXHQgICAgaGlkZShUeXBlZEFycmF5LCBUWVBFRF9DT05TVFJVQ1RPUiwgdHJ1ZSk7XG5cdCAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRZUEVEX0FSUkFZLCBOQU1FKTtcblx0ICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG5cdCAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIERFRl9DT05TVFJVQ1RPUiwgVHlwZWRBcnJheSk7XG5cblx0ICAgIGlmKENMQU1QRUQgPyBuZXcgVHlwZWRBcnJheSgxKVtUQUddICE9IE5BTUUgOiAhKFRBRyBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSl7XG5cdCAgICAgIGRQKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRBRywge1xuXHQgICAgICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIE5BTUU7IH1cblx0ICAgICAgfSk7XG5cdCAgICB9XG5cblx0ICAgIE9bTkFNRV0gPSBUeXBlZEFycmF5O1xuXG5cdCAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChUeXBlZEFycmF5ICE9IEJhc2UpLCBPKTtcblxuXHQgICAgJGV4cG9ydCgkZXhwb3J0LlMsIE5BTUUsIHtcblx0ICAgICAgQllURVNfUEVSX0VMRU1FTlQ6IEJZVEVTLFxuXHQgICAgICBmcm9tOiAkZnJvbSxcblx0ICAgICAgb2Y6ICRvZlxuXHQgICAgfSk7XG5cblx0ICAgIGlmKCEoQllURVNfUEVSX0VMRU1FTlQgaW4gVHlwZWRBcnJheVByb3RvdHlwZSkpaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBCWVRFU19QRVJfRUxFTUVOVCwgQllURVMpO1xuXG5cdCAgICAkZXhwb3J0KCRleHBvcnQuUCwgTkFNRSwgcHJvdG8pO1xuXG5cdCAgICBzZXRTcGVjaWVzKE5BTUUpO1xuXG5cdCAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFRF9TRVQsIE5BTUUsIHtzZXQ6ICRzZXR9KTtcblxuXHQgICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhQ09SUkVDVF9JVEVSX05BTUUsIE5BTUUsICRpdGVyYXRvcnMpO1xuXG5cdCAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChUeXBlZEFycmF5UHJvdG90eXBlLnRvU3RyaW5nICE9IGFycmF5VG9TdHJpbmcpLCBOQU1FLCB7dG9TdHJpbmc6IGFycmF5VG9TdHJpbmd9KTtcblxuXHQgICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgICBuZXcgVHlwZWRBcnJheSgxKS5zbGljZSgpO1xuXHQgICAgfSksIE5BTUUsIHtzbGljZTogJHNsaWNlfSk7XG5cblx0ICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG5cdCAgICAgIHJldHVybiBbMSwgMl0udG9Mb2NhbGVTdHJpbmcoKSAhPSBuZXcgVHlwZWRBcnJheShbMSwgMl0pLnRvTG9jYWxlU3RyaW5nKClcblx0ICAgIH0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuXHQgICAgICBUeXBlZEFycmF5UHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nLmNhbGwoWzEsIDJdKTtcblx0ICAgIH0pKSwgTkFNRSwge3RvTG9jYWxlU3RyaW5nOiAkdG9Mb2NhbGVTdHJpbmd9KTtcblxuXHQgICAgSXRlcmF0b3JzW05BTUVdID0gQ09SUkVDVF9JVEVSX05BTUUgPyAkbmF0aXZlSXRlcmF0b3IgOiAkaXRlcmF0b3I7XG5cdCAgICBpZighTElCUkFSWSAmJiAhQ09SUkVDVF9JVEVSX05BTUUpaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBJVEVSQVRPUiwgJGl0ZXJhdG9yKTtcblx0ICB9O1xuXHR9IGVsc2UgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG4vKioqLyB9LFxuLyogMjM3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDIzNikoJ1VpbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQ4QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyMzggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM2KSgnVWludDgnLCAxLCBmdW5jdGlvbihpbml0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gVWludDhDbGFtcGVkQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG5cdCAgfTtcblx0fSwgdHJ1ZSk7XG5cbi8qKiovIH0sXG4vKiAyMzkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM2KSgnSW50MTYnLCAyLCBmdW5jdGlvbihpbml0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gSW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI0MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzYpKCdVaW50MTYnLCAyLCBmdW5jdGlvbihpbml0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gVWludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM2KSgnSW50MzInLCA0LCBmdW5jdGlvbihpbml0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gSW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcblx0ICB9O1xuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI0MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyMzYpKCdVaW50MzInLCA0LCBmdW5jdGlvbihpbml0KXtcblx0ICByZXR1cm4gZnVuY3Rpb24gVWludDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM2KSgnRmxvYXQzMicsIDQsIGZ1bmN0aW9uKGluaXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBGbG9hdDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjM2KSgnRmxvYXQ2NCcsIDgsIGZ1bmN0aW9uKGluaXQpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBGbG9hdDY0QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG5cdCAgfTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG5cdHZhciAkZXhwb3J0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkaW5jbHVkZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KSh0cnVlKTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuXHQgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XG5cdCAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgfVxuXHR9KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE3OCkoJ2luY2x1ZGVzJyk7XG5cbi8qKiovIH0sXG4vKiAyNDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRhdCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyNSkodHJ1ZSk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG5cdCAgYXQ6IGZ1bmN0aW9uIGF0KHBvcyl7XG5cdCAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI0NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRwYWQgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0OCk7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG5cdCAgcGFkU3RhcnQ6IGZ1bmN0aW9uIHBhZFN0YXJ0KG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG5cdCAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0cnVlKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjQ4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxuXHR2YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgcmVwZWF0ICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDg1KVxuXHQgICwgZGVmaW5lZCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIG1heExlbmd0aCwgZmlsbFN0cmluZywgbGVmdCl7XG5cdCAgdmFyIFMgICAgICAgICAgICA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuXHQgICAgLCBzdHJpbmdMZW5ndGggPSBTLmxlbmd0aFxuXHQgICAgLCBmaWxsU3RyICAgICAgPSBmaWxsU3RyaW5nID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbFN0cmluZylcblx0ICAgICwgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcblx0ICBpZihpbnRNYXhMZW5ndGggPD0gc3RyaW5nTGVuZ3RoIHx8IGZpbGxTdHIgPT0gJycpcmV0dXJuIFM7XG5cdCAgdmFyIGZpbGxMZW4gPSBpbnRNYXhMZW5ndGggLSBzdHJpbmdMZW5ndGhcblx0ICAgICwgc3RyaW5nRmlsbGVyID0gcmVwZWF0LmNhbGwoZmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xuXHQgIGlmKHN0cmluZ0ZpbGxlci5sZW5ndGggPiBmaWxsTGVuKXN0cmluZ0ZpbGxlciA9IHN0cmluZ0ZpbGxlci5zbGljZSgwLCBmaWxsTGVuKTtcblx0ICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xuXHR9O1xuXG5cbi8qKiovIH0sXG4vKiAyNDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkcGFkICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNDgpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuXHQgIHBhZEVuZDogZnVuY3Rpb24gcGFkRW5kKG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG5cdCAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBmYWxzZSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI1MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5cdF9fd2VicGFja19yZXF1aXJlX18oODEpKCd0cmltTGVmdCcsIGZ1bmN0aW9uKCR0cmltKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gdHJpbUxlZnQoKXtcblx0ICAgIHJldHVybiAkdHJpbSh0aGlzLCAxKTtcblx0ICB9O1xuXHR9LCAndHJpbVN0YXJ0Jyk7XG5cbi8qKiovIH0sXG4vKiAyNTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDgxKSgndHJpbVJpZ2h0JywgZnVuY3Rpb24oJHRyaW0pe1xuXHQgIHJldHVybiBmdW5jdGlvbiB0cmltUmlnaHQoKXtcblx0ICAgIHJldHVybiAkdHJpbSh0aGlzLCAyKTtcblx0ICB9O1xuXHR9LCAndHJpbUVuZCcpO1xuXG4vKioqLyB9LFxuLyogMjUyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vU3RyaW5nLnByb3RvdHlwZS5tYXRjaEFsbC9cblx0dmFyICRleHBvcnQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZGVmaW5lZCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKVxuXHQgICwgdG9MZW5ndGggICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KVxuXHQgICwgaXNSZWdFeHAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyOClcblx0ICAsIGdldEZsYWdzICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxODgpXG5cdCAgLCBSZWdFeHBQcm90byA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cblx0dmFyICRSZWdFeHBTdHJpbmdJdGVyYXRvciA9IGZ1bmN0aW9uKHJlZ2V4cCwgc3RyaW5nKXtcblx0ICB0aGlzLl9yID0gcmVnZXhwO1xuXHQgIHRoaXMuX3MgPSBzdHJpbmc7XG5cdH07XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygxMzYpKCRSZWdFeHBTdHJpbmdJdGVyYXRvciwgJ1JlZ0V4cCBTdHJpbmcnLCBmdW5jdGlvbiBuZXh0KCl7XG5cdCAgdmFyIG1hdGNoID0gdGhpcy5fci5leGVjKHRoaXMuX3MpO1xuXHQgIHJldHVybiB7dmFsdWU6IG1hdGNoLCBkb25lOiBtYXRjaCA9PT0gbnVsbH07XG5cdH0pO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuXHQgIG1hdGNoQWxsOiBmdW5jdGlvbiBtYXRjaEFsbChyZWdleHApe1xuXHQgICAgZGVmaW5lZCh0aGlzKTtcblx0ICAgIGlmKCFpc1JlZ0V4cChyZWdleHApKXRocm93IFR5cGVFcnJvcihyZWdleHAgKyAnIGlzIG5vdCBhIHJlZ2V4cCEnKTtcblx0ICAgIHZhciBTICAgICA9IFN0cmluZyh0aGlzKVxuXHQgICAgICAsIGZsYWdzID0gJ2ZsYWdzJyBpbiBSZWdFeHBQcm90byA/IFN0cmluZyhyZWdleHAuZmxhZ3MpIDogZ2V0RmxhZ3MuY2FsbChyZWdleHApXG5cdCAgICAgICwgcnggICAgPSBuZXcgUmVnRXhwKHJlZ2V4cC5zb3VyY2UsIH5mbGFncy5pbmRleE9mKCdnJykgPyBmbGFncyA6ICdnJyArIGZsYWdzKTtcblx0ICAgIHJ4Lmxhc3RJbmRleCA9IHRvTGVuZ3RoKHJlZ2V4cC5sYXN0SW5kZXgpO1xuXHQgICAgcmV0dXJuIG5ldyAkUmVnRXhwU3RyaW5nSXRlcmF0b3IocngsIFMpO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjUpKCdhc3luY0l0ZXJhdG9yJyk7XG5cbi8qKiovIH0sXG4vKiAyNTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdF9fd2VicGFja19yZXF1aXJlX18oMjUpKCdvYnNlcnZhYmxlJyk7XG5cbi8qKiovIH0sXG4vKiAyNTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG5cdHZhciAkZXhwb3J0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIG93bktleXMgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMjEpXG5cdCAgLCB0b0lPYmplY3QgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBnT1BEICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpXG5cdCAgLCBjcmVhdGVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oMTU1KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcblx0ICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCl7XG5cdCAgICB2YXIgTyAgICAgICA9IHRvSU9iamVjdChvYmplY3QpXG5cdCAgICAgICwgZ2V0RGVzYyA9IGdPUEQuZlxuXHQgICAgICAsIGtleXMgICAgPSBvd25LZXlzKE8pXG5cdCAgICAgICwgcmVzdWx0ICA9IHt9XG5cdCAgICAgICwgaSAgICAgICA9IDBcblx0ICAgICAgLCBrZXk7XG5cdCAgICB3aGlsZShrZXlzLmxlbmd0aCA+IGkpY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXkgPSBrZXlzW2krK10sIGdldERlc2MoTywga2V5KSk7XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICR2YWx1ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1NykoZmFsc2UpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuXHQgIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KXtcblx0ICAgIHJldHVybiAkdmFsdWVzKGl0KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjU3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2V0S2V5cyAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOClcblx0ICAsIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBpc0VudW0gICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKS5mO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzRW50cmllcyl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcblx0ICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoaXQpXG5cdCAgICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuXHQgICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG5cdCAgICAgICwgaSAgICAgID0gMFxuXHQgICAgICAsIHJlc3VsdCA9IFtdXG5cdCAgICAgICwga2V5O1xuXHQgICAgd2hpbGUobGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKXtcblx0ICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG5cdCAgICB9IHJldHVybiByZXN1bHQ7XG5cdCAgfTtcblx0fTtcblxuLyoqKi8gfSxcbi8qIDI1OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG5cdHZhciAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsICRlbnRyaWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNTcpKHRydWUpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuXHQgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpe1xuXHQgICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjU5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b09iamVjdCAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgYUZ1bmN0aW9uICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsICRkZWZpbmVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cblx0Ly8gQi4yLjIuMiBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oUCwgZ2V0dGVyKVxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDQpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX193ZWJwYWNrX3JlcXVpcmVfXygyNjApLCAnT2JqZWN0Jywge1xuXHQgIF9fZGVmaW5lR2V0dGVyX186IGZ1bmN0aW9uIF9fZGVmaW5lR2V0dGVyX18oUCwgZ2V0dGVyKXtcblx0ICAgICRkZWZpbmVQcm9wZXJ0eS5mKHRvT2JqZWN0KHRoaXMpLCBQLCB7Z2V0OiBhRnVuY3Rpb24oZ2V0dGVyKSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI2MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gRm9yY2VkIHJlcGxhY2VtZW50IHByb3RvdHlwZSBhY2Nlc3NvcnMgbWV0aG9kc1xuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpfHwgIV9fd2VicGFja19yZXF1aXJlX18oNSkoZnVuY3Rpb24oKXtcblx0ICB2YXIgSyA9IE1hdGgucmFuZG9tKCk7XG5cdCAgLy8gSW4gRkYgdGhyb3dzIG9ubHkgZGVmaW5lIG1ldGhvZHNcblx0ICBfX2RlZmluZVNldHRlcl9fLmNhbGwobnVsbCwgSywgZnVuY3Rpb24oKXsgLyogZW1wdHkgKi99KTtcblx0ICBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXygyKVtLXTtcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNjEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRleHBvcnQgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHRvT2JqZWN0ICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpXG5cdCAgLCBhRnVuY3Rpb24gICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgJGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxuXHQvLyBCLjIuMi4zIE9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVTZXR0ZXJfXyhQLCBzZXR0ZXIpXG5cdF9fd2VicGFja19yZXF1aXJlX18oNCkgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2MCksICdPYmplY3QnLCB7XG5cdCAgX19kZWZpbmVTZXR0ZXJfXzogZnVuY3Rpb24gX19kZWZpbmVTZXR0ZXJfXyhQLCBzZXR0ZXIpe1xuXHQgICAgJGRlZmluZVByb3BlcnR5LmYodG9PYmplY3QodGhpcyksIFAsIHtzZXQ6IGFGdW5jdGlvbihzZXR0ZXIpLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9KTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjYyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b09iamVjdCAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgdG9QcmltaXRpdmUgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNClcblx0ICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KS5mO1xuXG5cdC8vIEIuMi4yLjQgT2JqZWN0LnByb3RvdHlwZS5fX2xvb2t1cEdldHRlcl9fKFApXG5cdF9fd2VicGFja19yZXF1aXJlX18oNCkgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2MCksICdPYmplY3QnLCB7XG5cdCAgX19sb29rdXBHZXR0ZXJfXzogZnVuY3Rpb24gX19sb29rdXBHZXR0ZXJfXyhQKXtcblx0ICAgIHZhciBPID0gdG9PYmplY3QodGhpcylcblx0ICAgICAgLCBLID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSlcblx0ICAgICAgLCBEO1xuXHQgICAgZG8ge1xuXHQgICAgICBpZihEID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIEspKXJldHVybiBELmdldDtcblx0ICAgIH0gd2hpbGUoTyA9IGdldFByb3RvdHlwZU9mKE8pKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjYzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZXhwb3J0ICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCB0b09iamVjdCAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KVxuXHQgICwgdG9QcmltaXRpdmUgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNClcblx0ICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KS5mO1xuXG5cdC8vIEIuMi4yLjUgT2JqZWN0LnByb3RvdHlwZS5fX2xvb2t1cFNldHRlcl9fKFApXG5cdF9fd2VicGFja19yZXF1aXJlX18oNCkgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2MCksICdPYmplY3QnLCB7XG5cdCAgX19sb29rdXBTZXR0ZXJfXzogZnVuY3Rpb24gX19sb29rdXBTZXR0ZXJfXyhQKXtcblx0ICAgIHZhciBPID0gdG9PYmplY3QodGhpcylcblx0ICAgICAgLCBLID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSlcblx0ICAgICAgLCBEO1xuXHQgICAgZG8ge1xuXHQgICAgICBpZihEID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIEspKXJldHVybiBELnNldDtcblx0ICAgIH0gd2hpbGUoTyA9IGdldFByb3RvdHlwZU9mKE8pKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjY0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG5cdHZhciAkZXhwb3J0ICA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7dG9KU09OOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2NSkoJ01hcCcpfSk7XG5cbi8qKiovIH0sXG4vKiAyNjUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cblx0dmFyIGNsYXNzb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDczKVxuXHQgICwgZnJvbSAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjY2KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcblx0ICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG5cdCAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcblx0ICAgIHJldHVybiBmcm9tKHRoaXMpO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0sXG4vKiAyNjYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBmb3JPZiA9IF9fd2VicGFja19yZXF1aXJlX18oMTk4KTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXIsIElURVJBVE9SKXtcblx0ICB2YXIgcmVzdWx0ID0gW107XG5cdCAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cbi8qKiovIH0sXG4vKiAyNjcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cblx0dmFyICRleHBvcnQgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1NldCcsIHt0b0pTT046IF9fd2VicGFja19yZXF1aXJlX18oMjY1KSgnU2V0Jyl9KTtcblxuLyoqKi8gfSxcbi8qIDI2OCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9wcm9wb3NhbC1nbG9iYWxcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnU3lzdGVtJywge2dsb2JhbDogX193ZWJwYWNrX3JlcXVpcmVfXygyKX0pO1xuXG4vKioqLyB9LFxuLyogMjY5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL3Byb3Bvc2FsLWlzLWVycm9yXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgY29mICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnRXJyb3InLCB7XG5cdCAgaXNFcnJvcjogZnVuY3Rpb24gaXNFcnJvcihpdCl7XG5cdCAgICByZXR1cm4gY29mKGl0KSA9PT0gJ0Vycm9yJztcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjcwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGlhZGRoOiBmdW5jdGlvbiBpYWRkaCh4MCwgeDEsIHkwLCB5MSl7XG5cdCAgICB2YXIgJHgwID0geDAgPj4+IDBcblx0ICAgICAgLCAkeDEgPSB4MSA+Pj4gMFxuXHQgICAgICAsICR5MCA9IHkwID4+PiAwO1xuXHQgICAgcmV0dXJuICR4MSArICh5MSA+Pj4gMCkgKyAoKCR4MCAmICR5MCB8ICgkeDAgfCAkeTApICYgfigkeDAgKyAkeTAgPj4+IDApKSA+Pj4gMzEpIHwgMDtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjcxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0JGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuXHQgIGlzdWJoOiBmdW5jdGlvbiBpc3ViaCh4MCwgeDEsIHkwLCB5MSl7XG5cdCAgICB2YXIgJHgwID0geDAgPj4+IDBcblx0ICAgICAgLCAkeDEgPSB4MSA+Pj4gMFxuXHQgICAgICAsICR5MCA9IHkwID4+PiAwO1xuXHQgICAgcmV0dXJuICR4MSAtICh5MSA+Pj4gMCkgLSAoKH4keDAgJiAkeTAgfCB+KCR4MCBeICR5MCkgJiAkeDAgLSAkeTAgPj4+IDApID4+PiAzMSkgfCAwO1xuXHQgIH1cblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyNzIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG5cdHZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHQkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG5cdCAgaW11bGg6IGZ1bmN0aW9uIGltdWxoKHUsIHYpe1xuXHQgICAgdmFyIFVJTlQxNiA9IDB4ZmZmZlxuXHQgICAgICAsICR1ID0gK3Vcblx0ICAgICAgLCAkdiA9ICt2XG5cdCAgICAgICwgdTAgPSAkdSAmIFVJTlQxNlxuXHQgICAgICAsIHYwID0gJHYgJiBVSU5UMTZcblx0ICAgICAgLCB1MSA9ICR1ID4+IDE2XG5cdCAgICAgICwgdjEgPSAkdiA+PiAxNlxuXHQgICAgICAsIHQgID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcblx0ICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+PiAxNik7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI3MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcblx0ICB1bXVsaDogZnVuY3Rpb24gdW11bGgodSwgdil7XG5cdCAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG5cdCAgICAgICwgJHUgPSArdVxuXHQgICAgICAsICR2ID0gK3Zcblx0ICAgICAgLCB1MCA9ICR1ICYgVUlOVDE2XG5cdCAgICAgICwgdjAgPSAkdiAmIFVJTlQxNlxuXHQgICAgICAsIHUxID0gJHUgPj4+IDE2XG5cdCAgICAgICwgdjEgPSAkdiA+Pj4gMTZcblx0ICAgICAgLCB0ICA9ICh1MSAqIHYwID4+PiAwKSArICh1MCAqIHYwID4+PiAxNik7XG5cdCAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+PiAxNik7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDI3NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NSlcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleVxuXHQgICwgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IG1ldGFkYXRhLnNldDtcblxuXHRtZXRhZGF0YS5leHAoe2RlZmluZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCB0YXJnZXRLZXkpe1xuXHQgIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIGFuT2JqZWN0KHRhcmdldCksIHRvTWV0YUtleSh0YXJnZXRLZXkpKTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogMjc1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgTWFwICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjAzKVxuXHQgICwgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNilcblx0ICAsIHNoYXJlZCAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKSgnbWV0YWRhdGEnKVxuXHQgICwgc3RvcmUgICA9IHNoYXJlZC5zdG9yZSB8fCAoc2hhcmVkLnN0b3JlID0gbmV3IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNykpKTtcblxuXHR2YXIgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IGZ1bmN0aW9uKHRhcmdldCwgdGFyZ2V0S2V5LCBjcmVhdGUpe1xuXHQgIHZhciB0YXJnZXRNZXRhZGF0YSA9IHN0b3JlLmdldCh0YXJnZXQpO1xuXHQgIGlmKCF0YXJnZXRNZXRhZGF0YSl7XG5cdCAgICBpZighY3JlYXRlKXJldHVybiB1bmRlZmluZWQ7XG5cdCAgICBzdG9yZS5zZXQodGFyZ2V0LCB0YXJnZXRNZXRhZGF0YSA9IG5ldyBNYXApO1xuXHQgIH1cblx0ICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcblx0ICBpZigha2V5TWV0YWRhdGEpe1xuXHQgICAgaWYoIWNyZWF0ZSlyZXR1cm4gdW5kZWZpbmVkO1xuXHQgICAgdGFyZ2V0TWV0YWRhdGEuc2V0KHRhcmdldEtleSwga2V5TWV0YWRhdGEgPSBuZXcgTWFwKTtcblx0ICB9IHJldHVybiBrZXlNZXRhZGF0YTtcblx0fTtcblx0dmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG5cdCAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG5cdCAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG1ldGFkYXRhTWFwLmhhcyhNZXRhZGF0YUtleSk7XG5cdH07XG5cdHZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuXHQgIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuXHQgIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcblx0fTtcblx0dmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUCl7XG5cdCAgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCB0cnVlKS5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xuXHR9O1xuXHR2YXIgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBmdW5jdGlvbih0YXJnZXQsIHRhcmdldEtleSl7XG5cdCAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHRhcmdldEtleSwgZmFsc2UpXG5cdCAgICAsIGtleXMgICAgICAgID0gW107XG5cdCAgaWYobWV0YWRhdGFNYXApbWV0YWRhdGFNYXAuZm9yRWFjaChmdW5jdGlvbihfLCBrZXkpeyBrZXlzLnB1c2goa2V5KTsgfSk7XG5cdCAgcmV0dXJuIGtleXM7XG5cdH07XG5cdHZhciB0b01ldGFLZXkgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiBTdHJpbmcoaXQpO1xuXHR9O1xuXHR2YXIgZXhwID0gZnVuY3Rpb24oTyl7XG5cdCAgJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0JywgTyk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgc3RvcmU6IHN0b3JlLFxuXHQgIG1hcDogZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCxcblx0ICBoYXM6IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEsXG5cdCAgZ2V0OiBvcmRpbmFyeUdldE93bk1ldGFkYXRhLFxuXHQgIHNldDogb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSxcblx0ICBrZXlzOiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyxcblx0ICBrZXk6IHRvTWV0YUtleSxcblx0ICBleHA6IGV4cFxuXHR9O1xuXG4vKioqLyB9LFxuLyogMjc2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjc1KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5XG5cdCAgLCBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gbWV0YWRhdGEubWFwXG5cdCAgLCBzdG9yZSAgICAgICAgICAgICAgICAgID0gbWV0YWRhdGEuc3RvcmU7XG5cblx0bWV0YWRhdGEuZXhwKHtkZWxldGVNZXRhZGF0YTogZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcblx0ICB2YXIgdGFyZ2V0S2V5ICAgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pXG5cdCAgICAsIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXksIGZhbHNlKTtcblx0ICBpZihtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkIHx8ICFtZXRhZGF0YU1hcFsnZGVsZXRlJ10obWV0YWRhdGFLZXkpKXJldHVybiBmYWxzZTtcblx0ICBpZihtZXRhZGF0YU1hcC5zaXplKXJldHVybiB0cnVlO1xuXHQgIHZhciB0YXJnZXRNZXRhZGF0YSA9IHN0b3JlLmdldCh0YXJnZXQpO1xuXHQgIHRhcmdldE1ldGFkYXRhWydkZWxldGUnXSh0YXJnZXRLZXkpO1xuXHQgIHJldHVybiAhIXRhcmdldE1ldGFkYXRhLnNpemUgfHwgc3RvcmVbJ2RlbGV0ZSddKHRhcmdldCk7XG5cdH19KTtcblxuLyoqKi8gfSxcbi8qIDI3NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NSlcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpXG5cdCAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG5cdCAgLCBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0XG5cdCAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5cdHZhciBvcmRpbmFyeUdldE1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuXHQgIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcblx0ICBpZihoYXNPd24pcmV0dXJuIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuXHQgIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcblx0ICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHRtZXRhZGF0YS5leHAoe2dldE1ldGFkYXRhOiBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuXHQgIHJldHVybiBvcmRpbmFyeUdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogMjc4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgU2V0ICAgICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwNilcblx0ICAsIGZyb20gICAgICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNjYpXG5cdCAgLCBtZXRhZGF0YSAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjc1KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBtZXRhZGF0YS5rZXlzXG5cdCAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxuXHR2YXIgb3JkaW5hcnlNZXRhZGF0YUtleXMgPSBmdW5jdGlvbihPLCBQKXtcblx0ICB2YXIgb0tleXMgID0gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUClcblx0ICAgICwgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG5cdCAgaWYocGFyZW50ID09PSBudWxsKXJldHVybiBvS2V5cztcblx0ICB2YXIgcEtleXMgID0gb3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcblx0ICByZXR1cm4gcEtleXMubGVuZ3RoID8gb0tleXMubGVuZ3RoID8gZnJvbShuZXcgU2V0KG9LZXlzLmNvbmNhdChwS2V5cykpKSA6IHBLZXlzIDogb0tleXM7XG5cdH07XG5cblx0bWV0YWRhdGEuZXhwKHtnZXRNZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG5cdCAgcmV0dXJuIG9yZGluYXJ5TWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiAyNzkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzUpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBtZXRhZGF0YS5nZXRcblx0ICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cblx0bWV0YWRhdGEuZXhwKHtnZXRPd25NZXRhZGF0YTogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcblx0ICByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuXHQgICAgLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogMjgwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3NSlcblx0ICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gbWV0YWRhdGEua2V5c1xuXHQgICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cblx0bWV0YWRhdGEuZXhwKHtnZXRPd25NZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG5cdCAgcmV0dXJuIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiAyODEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzUpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KVxuXHQgICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuXHQgICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxuXHR2YXIgb3JkaW5hcnlIYXNNZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcblx0ICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG5cdCAgaWYoaGFzT3duKXJldHVybiB0cnVlO1xuXHQgIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcblx0ICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IGZhbHNlO1xuXHR9O1xuXG5cdG1ldGFkYXRhLmV4cCh7aGFzTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG5cdCAgcmV0dXJuIG9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiAyODIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzUpXG5cdCAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMClcblx0ICAsIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXNcblx0ICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cblx0bWV0YWRhdGEuZXhwKHtoYXNPd25NZXRhZGF0YTogZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcblx0ICByZXR1cm4gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuXHQgICAgLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcblx0fX0pO1xuXG4vKioqLyB9LFxuLyogMjgzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjc1KVxuXHQgICwgYW5PYmplY3QgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTApXG5cdCAgLCBhRnVuY3Rpb24gICAgICAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSlcblx0ICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcblx0ICAsIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5zZXQ7XG5cblx0bWV0YWRhdGEuZXhwKHttZXRhZGF0YTogZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpe1xuXHQgIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCB0YXJnZXRLZXkpe1xuXHQgICAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShcblx0ICAgICAgbWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsXG5cdCAgICAgICh0YXJnZXRLZXkgIT09IHVuZGVmaW5lZCA/IGFuT2JqZWN0IDogYUZ1bmN0aW9uKSh0YXJnZXQpLFxuXHQgICAgICB0b01ldGFLZXkodGFyZ2V0S2V5KVxuXHQgICAgKTtcblx0ICB9O1xuXHR9fSk7XG5cbi8qKiovIH0sXG4vKiAyODQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yd2FsZHJvbi90YzM5LW5vdGVzL2Jsb2IvbWFzdGVyL2VzNi8yMDE0LTA5L3NlcHQtMjUubWQjNTEwLWdsb2JhbGFzYXAtZm9yLWVucXVldWluZy1hLW1pY3JvdGFza1xuXHR2YXIgJGV4cG9ydCAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgbWljcm90YXNrID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDEpKClcblx0ICAsIHByb2Nlc3MgICA9IF9fd2VicGFja19yZXF1aXJlX18oMikucHJvY2Vzc1xuXHQgICwgaXNOb2RlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMikocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5HLCB7XG5cdCAgYXNhcDogZnVuY3Rpb24gYXNhcChmbil7XG5cdCAgICB2YXIgZG9tYWluID0gaXNOb2RlICYmIHByb2Nlc3MuZG9tYWluO1xuXHQgICAgbWljcm90YXNrKGRvbWFpbiA/IGRvbWFpbi5iaW5kKGZuKSA6IGZuKTtcblx0ICB9XG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjg1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcblx0dmFyICRleHBvcnQgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgZ2xvYmFsICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCBjb3JlICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNylcblx0ICAsIG1pY3JvdGFzayAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDEpKClcblx0ICAsIE9CU0VSVkFCTEUgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ29ic2VydmFibGUnKVxuXHQgICwgYUZ1bmN0aW9uICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KVxuXHQgICwgYW5PYmplY3QgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKVxuXHQgICwgYW5JbnN0YW5jZSAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5Nylcblx0ICAsIHJlZGVmaW5lQWxsID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDIpXG5cdCAgLCBoaWRlICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOClcblx0ICAsIGZvck9mICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOTgpXG5cdCAgLCBSRVRVUk4gICAgICA9IGZvck9mLlJFVFVSTjtcblxuXHR2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oZm4pe1xuXHQgIHJldHVybiBmbiA9PSBudWxsID8gdW5kZWZpbmVkIDogYUZ1bmN0aW9uKGZuKTtcblx0fTtcblxuXHR2YXIgY2xlYW51cFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG5cdCAgdmFyIGNsZWFudXAgPSBzdWJzY3JpcHRpb24uX2M7XG5cdCAgaWYoY2xlYW51cCl7XG5cdCAgICBzdWJzY3JpcHRpb24uX2MgPSB1bmRlZmluZWQ7XG5cdCAgICBjbGVhbnVwKCk7XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBzdWJzY3JpcHRpb25DbG9zZWQgPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuXHQgIHJldHVybiBzdWJzY3JpcHRpb24uX28gPT09IHVuZGVmaW5lZDtcblx0fTtcblxuXHR2YXIgY2xvc2VTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuXHQgIGlmKCFzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSl7XG5cdCAgICBzdWJzY3JpcHRpb24uX28gPSB1bmRlZmluZWQ7XG5cdCAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihvYnNlcnZlciwgc3Vic2NyaWJlcil7XG5cdCAgYW5PYmplY3Qob2JzZXJ2ZXIpO1xuXHQgIHRoaXMuX2MgPSB1bmRlZmluZWQ7XG5cdCAgdGhpcy5fbyA9IG9ic2VydmVyO1xuXHQgIG9ic2VydmVyID0gbmV3IFN1YnNjcmlwdGlvbk9ic2VydmVyKHRoaXMpO1xuXHQgIHRyeSB7XG5cdCAgICB2YXIgY2xlYW51cCAgICAgID0gc3Vic2NyaWJlcihvYnNlcnZlcilcblx0ICAgICAgLCBzdWJzY3JpcHRpb24gPSBjbGVhbnVwO1xuXHQgICAgaWYoY2xlYW51cCAhPSBudWxsKXtcblx0ICAgICAgaWYodHlwZW9mIGNsZWFudXAudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpY2xlYW51cCA9IGZ1bmN0aW9uKCl7IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpOyB9O1xuXHQgICAgICBlbHNlIGFGdW5jdGlvbihjbGVhbnVwKTtcblx0ICAgICAgdGhpcy5fYyA9IGNsZWFudXA7XG5cdCAgICB9XG5cdCAgfSBjYXRjaChlKXtcblx0ICAgIG9ic2VydmVyLmVycm9yKGUpO1xuXHQgICAgcmV0dXJuO1xuXHQgIH0gaWYoc3Vic2NyaXB0aW9uQ2xvc2VkKHRoaXMpKWNsZWFudXBTdWJzY3JpcHRpb24odGhpcyk7XG5cdH07XG5cblx0U3Vic2NyaXB0aW9uLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKHt9LCB7XG5cdCAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCl7IGNsb3NlU3Vic2NyaXB0aW9uKHRoaXMpOyB9XG5cdH0pO1xuXG5cdHZhciBTdWJzY3JpcHRpb25PYnNlcnZlciA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG5cdCAgdGhpcy5fcyA9IHN1YnNjcmlwdGlvbjtcblx0fTtcblxuXHRTdWJzY3JpcHRpb25PYnNlcnZlci5wcm90b3R5cGUgPSByZWRlZmluZUFsbCh7fSwge1xuXHQgIG5leHQ6IGZ1bmN0aW9uIG5leHQodmFsdWUpe1xuXHQgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG5cdCAgICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuXHQgICAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb24uX287XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIubmV4dCk7XG5cdCAgICAgICAgaWYobSlyZXR1cm4gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSk7XG5cdCAgICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgIGNsb3NlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG5cdCAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgIHRocm93IGU7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblx0ICBlcnJvcjogZnVuY3Rpb24gZXJyb3IodmFsdWUpe1xuXHQgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG5cdCAgICBpZihzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSl0aHJvdyB2YWx1ZTtcblx0ICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcblx0ICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcblx0ICAgIHRyeSB7XG5cdCAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLmVycm9yKTtcblx0ICAgICAgaWYoIW0pdGhyb3cgdmFsdWU7XG5cdCAgICAgIHZhbHVlID0gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSk7XG5cdCAgICB9IGNhdGNoKGUpe1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcblx0ICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICB0aHJvdyBlO1xuXHQgICAgICB9XG5cdCAgICB9IGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcblx0ICAgIHJldHVybiB2YWx1ZTtcblx0ICB9LFxuXHQgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSl7XG5cdCAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcblx0ICAgIGlmKCFzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSl7XG5cdCAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcblx0ICAgICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLmNvbXBsZXRlKTtcblx0ICAgICAgICB2YWx1ZSA9IG0gPyBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKSA6IHVuZGVmaW5lZDtcblx0ICAgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuXHQgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICB0aHJvdyBlO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG5cdCAgICAgIHJldHVybiB2YWx1ZTtcblx0ICAgIH1cblx0ICB9XG5cdH0pO1xuXG5cdHZhciAkT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlcil7XG5cdCAgYW5JbnN0YW5jZSh0aGlzLCAkT2JzZXJ2YWJsZSwgJ09ic2VydmFibGUnLCAnX2YnKS5fZiA9IGFGdW5jdGlvbihzdWJzY3JpYmVyKTtcblx0fTtcblxuXHRyZWRlZmluZUFsbCgkT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcblx0ICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcil7XG5cdCAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbihvYnNlcnZlciwgdGhpcy5fZik7XG5cdCAgfSxcblx0ICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGZuKXtcblx0ICAgIHZhciB0aGF0ID0gdGhpcztcblx0ICAgIHJldHVybiBuZXcgKGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcblx0ICAgICAgYUZ1bmN0aW9uKGZuKTtcblx0ICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoYXQuc3Vic2NyaWJlKHtcblx0ICAgICAgICBuZXh0IDogZnVuY3Rpb24odmFsdWUpe1xuXHQgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZuKHZhbHVlKTtcblx0ICAgICAgICAgIH0gY2F0Y2goZSl7XG5cdCAgICAgICAgICAgIHJlamVjdChlKTtcblx0ICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBlcnJvcjogcmVqZWN0LFxuXHQgICAgICAgIGNvbXBsZXRlOiByZXNvbHZlXG5cdCAgICAgIH0pO1xuXHQgICAgfSk7XG5cdCAgfVxuXHR9KTtcblxuXHRyZWRlZmluZUFsbCgkT2JzZXJ2YWJsZSwge1xuXHQgIGZyb206IGZ1bmN0aW9uIGZyb20oeCl7XG5cdCAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nID8gdGhpcyA6ICRPYnNlcnZhYmxlO1xuXHQgICAgdmFyIG1ldGhvZCA9IGdldE1ldGhvZChhbk9iamVjdCh4KVtPQlNFUlZBQkxFXSk7XG5cdCAgICBpZihtZXRob2Qpe1xuXHQgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFuT2JqZWN0KG1ldGhvZC5jYWxsKHgpKTtcblx0ICAgICAgcmV0dXJuIG9ic2VydmFibGUuY29uc3RydWN0b3IgPT09IEMgPyBvYnNlcnZhYmxlIDogbmV3IEMoZnVuY3Rpb24ob2JzZXJ2ZXIpe1xuXHQgICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKG9ic2VydmVyKXtcblx0ICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcblx0ICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgaWYoIWRvbmUpe1xuXHQgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgaWYoZm9yT2YoeCwgZmFsc2UsIGZ1bmN0aW9uKGl0KXtcblx0ICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0KTtcblx0ICAgICAgICAgICAgICBpZihkb25lKXJldHVybiBSRVRVUk47XG5cdCAgICAgICAgICAgIH0pID09PSBSRVRVUk4pcmV0dXJuO1xuXHQgICAgICAgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICAgICAgaWYoZG9uZSl0aHJvdyBlO1xuXHQgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlKTtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgfSBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiBmdW5jdGlvbigpeyBkb25lID0gdHJ1ZTsgfTtcblx0ICAgIH0pO1xuXHQgIH0sXG5cdCAgb2Y6IGZ1bmN0aW9uIG9mKCl7XG5cdCAgICBmb3IodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aCwgaXRlbXMgPSBBcnJheShsKTsgaSA8IGw7KWl0ZW1zW2ldID0gYXJndW1lbnRzW2krK107XG5cdCAgICByZXR1cm4gbmV3ICh0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZSkoZnVuY3Rpb24ob2JzZXJ2ZXIpe1xuXHQgICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuXHQgICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcblx0ICAgICAgICBpZighZG9uZSl7XG5cdCAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpe1xuXHQgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW1zW2ldKTtcblx0ICAgICAgICAgICAgaWYoZG9uZSlyZXR1cm47XG5cdCAgICAgICAgICB9IG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IGRvbmUgPSB0cnVlOyB9O1xuXHQgICAgfSk7XG5cdCAgfVxuXHR9KTtcblxuXHRoaWRlKCRPYnNlcnZhYmxlLnByb3RvdHlwZSwgT0JTRVJWQUJMRSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5cdCRleHBvcnQoJGV4cG9ydC5HLCB7T2JzZXJ2YWJsZTogJE9ic2VydmFibGV9KTtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDE4NikoJ09ic2VydmFibGUnKTtcblxuLyoqKi8gfSxcbi8qIDI4NiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpXG5cdCAgLCAkdGFzayAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMDApO1xuXHQkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiwge1xuXHQgIHNldEltbWVkaWF0ZTogICAkdGFzay5zZXQsXG5cdCAgY2xlYXJJbW1lZGlhdGU6ICR0YXNrLmNsZWFyXG5cdH0pO1xuXG4vKioqLyB9LFxuLyogMjg3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgJGl0ZXJhdG9ycyAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTgzKVxuXHQgICwgcmVkZWZpbmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpXG5cdCAgLCBnbG9iYWwgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXHQgICwgaGlkZSAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOClcblx0ICAsIEl0ZXJhdG9ycyAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNSlcblx0ICAsIHdrcyAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKVxuXHQgICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuXHQgICwgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKVxuXHQgICwgQXJyYXlWYWx1ZXMgICA9IEl0ZXJhdG9ycy5BcnJheTtcblxuXHRmb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcblx0ICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG5cdCAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cblx0ICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcblx0ICAgICwga2V5O1xuXHQgIGlmKHByb3RvKXtcblx0ICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcblx0ICAgIGlmKCFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcblx0ICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuXHQgICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG5cdCAgfVxuXHR9XG5cbi8qKiovIH0sXG4vKiAyODggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcblx0dmFyIGdsb2JhbCAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5cdCAgLCAkZXhwb3J0ICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXHQgICwgaW52b2tlICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNzYpXG5cdCAgLCBwYXJ0aWFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyODkpXG5cdCAgLCBuYXZpZ2F0b3IgID0gZ2xvYmFsLm5hdmlnYXRvclxuXHQgICwgTVNJRSAgICAgICA9ICEhbmF2aWdhdG9yICYmIC9NU0lFIC5cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblx0dmFyIHdyYXAgPSBmdW5jdGlvbihzZXQpe1xuXHQgIHJldHVybiBNU0lFID8gZnVuY3Rpb24oZm4sIHRpbWUgLyosIC4uLmFyZ3MgKi8pe1xuXHQgICAgcmV0dXJuIHNldChpbnZva2UoXG5cdCAgICAgIHBhcnRpYWwsXG5cdCAgICAgIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSxcblx0ICAgICAgdHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKVxuXHQgICAgKSwgdGltZSk7XG5cdCAgfSA6IHNldDtcblx0fTtcblx0JGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIgKyAkZXhwb3J0LkYgKiBNU0lFLCB7XG5cdCAgc2V0VGltZW91dDogIHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuXHQgIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcblx0fSk7XG5cbi8qKiovIH0sXG4vKiAyODkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHBhdGggICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMjkwKVxuXHQgICwgaW52b2tlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Nilcblx0ICAsIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKC8qIC4uLnBhcmdzICovKXtcblx0ICB2YXIgZm4gICAgID0gYUZ1bmN0aW9uKHRoaXMpXG5cdCAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcblx0ICAgICwgcGFyZ3MgID0gQXJyYXkobGVuZ3RoKVxuXHQgICAgLCBpICAgICAgPSAwXG5cdCAgICAsIF8gICAgICA9IHBhdGguX1xuXHQgICAgLCBob2xkZXIgPSBmYWxzZTtcblx0ICB3aGlsZShsZW5ndGggPiBpKWlmKChwYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXylob2xkZXIgPSB0cnVlO1xuXHQgIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcblx0ICAgIHZhciB0aGF0ID0gdGhpc1xuXHQgICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG5cdCAgICAgICwgaiA9IDAsIGsgPSAwLCBhcmdzO1xuXHQgICAgaWYoIWhvbGRlciAmJiAhYUxlbilyZXR1cm4gaW52b2tlKGZuLCBwYXJncywgdGhhdCk7XG5cdCAgICBhcmdzID0gcGFyZ3Muc2xpY2UoKTtcblx0ICAgIGlmKGhvbGRlcilmb3IoO2xlbmd0aCA+IGo7IGorKylpZihhcmdzW2pdID09PSBfKWFyZ3Nbal0gPSBhcmd1bWVudHNbaysrXTtcblx0ICAgIHdoaWxlKGFMZW4gPiBrKWFyZ3MucHVzaChhcmd1bWVudHNbaysrXSk7XG5cdCAgICByZXR1cm4gaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcblx0ICB9O1xuXHR9O1xuXG4vKioqLyB9LFxuLyogMjkwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbi8qKiovIH1cbi8qKioqKiovIF0pO1xuLy8gQ29tbW9uSlMgZXhwb3J0XG5pZih0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKW1vZHVsZS5leHBvcnRzID0gX19lO1xuLy8gUmVxdWlyZUpTIGV4cG9ydFxuZWxzZSBpZih0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gX19lfSk7XG4vLyBFeHBvcnQgdG8gZ2xvYmFsIG9iamVjdFxuZWxzZSBfX2cuY29yZSA9IF9fZTtcbn0oMSwgMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvY2xpZW50L3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=