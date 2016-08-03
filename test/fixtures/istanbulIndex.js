if (typeof __coverage__ === 'undefined') __coverage__ = {};
(function(_export) {
    if (typeof _export.__coverage__ === 'undefined') {
        _export.__coverage__ = __coverage__;
    }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
if (! __coverage__["index.coffee"]) { __coverage__["index.coffee"] = {"path":"index.coffee","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"foo","line":1,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":17}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":4,"column":0}},"2":{"start":{"line":1,"column":0},"end":{"line":4,"column":0}},"3":{"start":{"line":1,"column":2},"end":{"line":1,"column":28}},"4":{"start":{"line":3,"column":2},"end":{"line":3,"column":20}},"5":{"start":{"line":2,"column":8},"end":{"line":2,"column":28}},"6":{"start":{"line":5,"column":0},"end":{"line":5,"column":10}}},"branchMap":{}} }(function() {
  var foo, iced, __iced_k, __iced_k_noop,
    __slice = [].slice;

  __coverage__["index.coffee"].s[1]++;

  iced = require('iced-runtime');
  __iced_k = __iced_k_noop = function() {};

  __coverage__["index.coffee"].s[2]++;

  foo = function() {
    var args, ___iced_passed_deferral, __iced_deferrals, __iced_k;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    __coverage__["index.coffee"].f[1]++;
    __coverage__["index.coffee"].s[3]++;
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral
        });
        __coverage__["index.coffee"].s[5]++;
        setTimeout(__iced_deferrals.defer({
          lineno: 1
        }), 1);
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        __coverage__["index.coffee"].s[4]++;
        return console.log.apply(console, args);
      };
    })(this));
  };

  __coverage__["index.coffee"].s[6]++;

  foo(1, 2, 3);

}).call(this);
