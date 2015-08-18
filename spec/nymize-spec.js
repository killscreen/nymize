/*global require,describe,it,expect,beforeEach*/

(function () {
  "use strict";
  
  var nymize = require('../nymize');
  
  describe("A nymized factory function", function () {
    var counter = 0, fn;
    
    function factory() {
      counter += 1;
      return { instance: counter };
    }
    
    beforeEach(function () {
      counter = 0;
      fn = nymize(factory);
    });
    
    it("returns the same instance when called with the same name", function () {
      var instance = fn("foo");
      expect(fn("foo")).toBe(instance);
      expect(fn("foo")).toBe(instance);
    });
    
    it("returns different instances when called with different names", function () {
      var instance = fn("foo");
      expect(fn("bar")).not.toBe(instance);
    });
    
    it("returns different instances when called anonymously", function () {
      var instance = fn();
      expect(fn()).not.toBe(instance);
    });
    
    it("uses the result of the called factory function", function () {
      expect(fn()).toEqual({ instance: 1 });
      expect(fn()).toEqual({ instance: 2 });
      expect(fn()).toEqual({ instance: 3 });
    });
    
  });
  
}());