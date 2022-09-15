(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kmplib-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kmplib-js-legacy'.");
    }
    root['kmplib-js-legacy'] = factory(typeof this['kmplib-js-legacy'] === 'undefined' ? {} : this['kmplib-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function MamboEncoder() {
  }
  MamboEncoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MamboEncoder',
    interfaces: []
  };
  function MamboFactory() {
    MamboFactory_instance = this;
  }
  MamboFactory.prototype.createEncoder = function () {
    return JsEncoder_getInstance();
  };
  MamboFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MamboFactory',
    interfaces: []
  };
  var MamboFactory_instance = null;
  function MamboFactory_getInstance() {
    if (MamboFactory_instance === null) {
      new MamboFactory();
    }
    return MamboFactory_instance;
  }
  function JsEncoder() {
    JsEncoder_instance = this;
  }
  JsEncoder.prototype.encode_za3rmp$ = function (data) {
    return data.toString() + '@Js';
  };
  JsEncoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsEncoder',
    interfaces: [MamboEncoder]
  };
  var JsEncoder_instance = null;
  function JsEncoder_getInstance() {
    if (JsEncoder_instance === null) {
      new JsEncoder();
    }
    return JsEncoder_instance;
  }
  var package$me = _.me || (_.me = {});
  var package$mambo = package$me.mambo || (package$me.mambo = {});
  var package$encoder = package$mambo.encoder || (package$mambo.encoder = {});
  package$encoder.MamboEncoder = MamboEncoder;
  Object.defineProperty(package$encoder, 'MamboFactory', {
    get: MamboFactory_getInstance
  });
  Object.defineProperty(package$encoder, 'JsEncoder', {
    get: JsEncoder_getInstance
  });
  Kotlin.defineModule('kmplib-js-legacy', _);
  return _;
}));

//# sourceMappingURL=kmplib-js-legacy.js.map
