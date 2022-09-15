(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kmplib-js-ir.js', './kotlin-kotlin-test-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kmplib-js-ir.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kmplib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kmplib-js-ir-test'. Its dependency 'kmplib-js-ir' was not found. Please, check whether 'kmplib-js-ir' is loaded prior to 'kmplib-js-ir-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kmplib-js-ir-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'kmplib-js-ir-test'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kmplib-js-ir-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kmplib-js-ir-test'.");
    }
    root['kmplib-js-ir-test'] = factory(typeof this['kmplib-js-ir-test'] === 'undefined' ? {} : this['kmplib-js-ir-test'], this['kmplib-js-ir'], this['kotlin-kotlin-test-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_me_mambobryan_kmplib, kotlin_kotlin_test, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var MamboFactory_getInstance = kotlin_me_mambobryan_kmplib.$_$.a;
  var assertNotEquals$default = kotlin_kotlin_test.$_$.b;
  var classMeta = kotlin_kotlin.$_$.d;
  var suite = kotlin_kotlin_test.$_$.c;
  var Unit_getInstance = kotlin_kotlin.$_$.b;
  var test = kotlin_kotlin_test.$_$.d;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function checkEncodeToString($this, input, output) {
    var tmp = MamboFactory_getInstance().createEncoder_akj7gg_k$().encode_rxtnhk_k$(input);
    assertNotEquals$default(output, tmp, null, 4, null);
  }
  function MamboEncoderTest() {
  }
  MamboEncoderTest.prototype.testEncodeToString_1331x9_k$ = function () {
    checkEncodeToString(this, 'Mambo', 'Mambo@Js');
  };
  MamboEncoderTest.$metadata$ = classMeta('MamboEncoderTest');
  function test_fun_izoufj() {
    suite('MamboEncoderTest', false, test_fun$MamboEncoderTest_test_fun_qelz7a());
  }
  function test_fun$MamboEncoderTest_test_fun$testEncodeToString_test_fun_yzpjzl() {
    return function () {
      var tmp = new MamboEncoderTest();
      tmp.testEncodeToString_1331x9_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$MamboEncoderTest_test_fun_qelz7a() {
    return function () {
      test('testEncodeToString', false, test_fun$MamboEncoderTest_test_fun$testEncodeToString_test_fun_yzpjzl());
      return Unit_getInstance();
    };
  }
  function checkEncodeToString_0($this, input, output) {
    var tmp = MamboFactory_getInstance().createEncoder_akj7gg_k$().encode_rxtnhk_k$(input);
    assertEquals$default(output, tmp, null, 4, null);
  }
  function MamboEncoderTest_0() {
  }
  MamboEncoderTest_0.prototype.testEncodeToString_1331x9_k$ = function () {
    checkEncodeToString_0(this, 'Mambo', 'Mambo@Js');
  };
  MamboEncoderTest_0.$metadata$ = classMeta('MamboEncoderTest');
  function test_fun_izoufj_0() {
    suite('MamboEncoderTest', false, test_fun$MamboEncoderTest_test_fun_qelz7a_0());
  }
  function test_fun$MamboEncoderTest_test_fun$testEncodeToString_test_fun_yzpjzl_0() {
    return function () {
      var tmp = new MamboEncoderTest_0();
      tmp.testEncodeToString_1331x9_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$MamboEncoderTest_test_fun_qelz7a_0() {
    return function () {
      test('testEncodeToString', false, test_fun$MamboEncoderTest_test_fun$testEncodeToString_test_fun_yzpjzl_0());
      return Unit_getInstance();
    };
  }
  //region block: tests
  (function () {
    suite('me.mambo.test.encoder', false, function () {
      test_fun_izoufj();
    });
    suite('me.mamo.test', false, function () {
      test_fun_izoufj_0();
    });
  }());
  //endregion
  return _;
}));

//# sourceMappingURL=kmplib-js-ir-test.js.map