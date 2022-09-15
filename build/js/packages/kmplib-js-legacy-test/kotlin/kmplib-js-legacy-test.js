(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kmplib-js-legacy', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kmplib-js-legacy'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kmplib-js-legacy-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kmplib-js-legacy-test'.");
    }
    if (typeof this['kmplib-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kmplib-js-legacy-test'. Its dependency 'kmplib-js-legacy' was not found. Please, check whether 'kmplib-js-legacy' is loaded prior to 'kmplib-js-legacy-test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'kmplib-js-legacy-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'kmplib-js-legacy-test'.");
    }
    root['kmplib-js-legacy-test'] = factory(typeof this['kmplib-js-legacy-test'] === 'undefined' ? {} : this['kmplib-js-legacy-test'], kotlin, this['kmplib-js-legacy'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$kmplib_js_legacy, $module$kotlin_test) {
  'use strict';
  var encoder = $module$kmplib_js_legacy.me.mambo.encoder;
  var assertNotEquals = $module$kotlin_test.kotlin.test.assertNotEquals_3m0tl5$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  function MamboEncoderTest() {
  }
  MamboEncoderTest.prototype.testEncodeToString = function () {
    this.checkEncodeToString_0('Mambo', 'Mambo@Js');
  };
  MamboEncoderTest.prototype.checkEncodeToString_0 = function (input, output) {
    assertNotEquals(output, encoder.MamboFactory.createEncoder().encode_za3rmp$(input));
  };
  MamboEncoderTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MamboEncoderTest',
    interfaces: []
  };
  function MamboEncoderTest_0() {
  }
  MamboEncoderTest_0.prototype.testEncodeToString = function () {
    this.checkEncodeToString_0('Mambo', 'Mambo@Js');
  };
  MamboEncoderTest_0.prototype.checkEncodeToString_0 = function (input, output) {
    assertEquals(output, encoder.MamboFactory.createEncoder().encode_za3rmp$(input));
  };
  MamboEncoderTest_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MamboEncoderTest',
    interfaces: []
  };
  var package$me = _.me || (_.me = {});
  var package$mambo = package$me.mambo || (package$me.mambo = {});
  var package$test = package$mambo.test || (package$mambo.test = {});
  var package$encoder = package$test.encoder || (package$test.encoder = {});
  package$encoder.MamboEncoderTest = MamboEncoderTest;
  var package$mamo = package$me.mamo || (package$me.mamo = {});
  var package$test_0 = package$mamo.test || (package$mamo.test = {});
  package$test_0.MamboEncoderTest = MamboEncoderTest_0;
  suite('me.mambo.test.encoder', false, function () {
    suite('MamboEncoderTest', false, function () {
      test('testEncodeToString', false, function () {
        return (new MamboEncoderTest()).testEncodeToString();
      });
    });
  });
  suite('me.mamo.test', false, function () {
    suite('MamboEncoderTest', false, function () {
      test('testEncodeToString', false, function () {
        return (new MamboEncoderTest_0()).testEncodeToString();
      });
    });
  });
  Kotlin.defineModule('kmplib-js-legacy-test', _);
  return _;
}));

//# sourceMappingURL=kmplib-js-legacy-test.js.map
