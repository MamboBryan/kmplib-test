(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kmplib-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kmplib-js-ir'.");
    }
    root['kmplib-js-ir'] = factory(typeof this['kmplib-js-ir'] === 'undefined' ? {} : this['kmplib-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.f;
  var objectMeta = kotlin_kotlin.$_$.g;
  var toString = kotlin_kotlin.$_$.h;
  //endregion
  //region block: pre-declaration
  //endregion
  function MamboEncoder() {
  }
  MamboEncoder.$metadata$ = interfaceMeta('MamboEncoder');
  function MamboFactory() {
    MamboFactory_instance = this;
  }
  MamboFactory.prototype.createEncoder_akj7gg_k$ = function () {
    return JsEncoder_getInstance();
  };
  MamboFactory.$metadata$ = objectMeta('MamboFactory');
  var MamboFactory_instance;
  function MamboFactory_getInstance() {
    if (MamboFactory_instance == null)
      new MamboFactory();
    return MamboFactory_instance;
  }
  function JsEncoder() {
    JsEncoder_instance = this;
  }
  JsEncoder.prototype.encode_rxtnhk_k$ = function (data) {
    return toString(data) + '@Js';
  };
  JsEncoder.$metadata$ = objectMeta('JsEncoder', [MamboEncoder]);
  var JsEncoder_instance;
  function JsEncoder_getInstance() {
    if (JsEncoder_instance == null)
      new JsEncoder();
    return JsEncoder_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MamboFactory_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kmplib-js-ir.js.map