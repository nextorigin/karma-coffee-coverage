if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
(function(_export) {
    if (typeof _export._$jscoverage === 'undefined') {
        _export._$jscoverage = _$jscoverage;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! _$jscoverage["index.coffee"]) {
    _$jscoverage["index.coffee"] = [];
    _$jscoverage["index.coffee"][1] = 0;
    _$jscoverage["index.coffee"][3] = 0;
    _$jscoverage["index.coffee"][2] = 0;
    _$jscoverage["index.coffee"][5] = 0;
}

_$jscoverage["index.coffee"].source = ["foo = (args...) ->", "  await setTimeout defer(), 1", "  console.log args...", "", "foo 1, 2, 3", ""];

(function() {
  var foo, iced, __iced_k, __iced_k_noop,
    __slice = [].slice;

  _$jscoverage["index.coffee"][1]++;

  iced = require('iced-runtime');
  __iced_k = __iced_k_noop = function() {};

  foo = function() {
    var args, ___iced_passed_deferral, __iced_deferrals, __iced_k;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral
        });
        _$jscoverage["index.coffee"][2]++;
        setTimeout(__iced_deferrals.defer({
          lineno: 1
        }), 1);
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        _$jscoverage["index.coffee"][3]++;
        return console.log.apply(console, args);
      };
    })(this));
  };

  _$jscoverage["index.coffee"][5]++;

  foo(1, 2, 3);

}).call(this);
