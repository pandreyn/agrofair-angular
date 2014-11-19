angular.module('Partitioner', [])
  .filter('agrofair.partition', [
    'agrofair.filterStabilize',
    function (stabilize) {
      function partition(arr, size) {
        var newArr = [];
        for (var i = 0; i < arr.length; i += size) {
          newArr.push(arr.slice(i, i + size));
        }
        return newArr;
      }

      return stabilize(partition);
    }
  ])
  .factory('agrofair.filterStabilize', [
    'agrofair.memoize',
    function (memoize) {
      function service(fn) {
        function filter() {
          var args = [].slice.call(arguments);
          // always pass a copy of the args so that the original input can't be modified
          args = angular.copy(args);
          // return the `fn` return value or input reference (makes `fn` return optional)
          return fn.apply(this, args) || args[0];
        }

        return memoize(filter);
      }

      return service;
    }
  ])
  .factory('agrofair.memoize', [
    function () {
      function service() {
        return memoizeFactory.apply(this, arguments);
      }

      function memoizeFactory(fn) {
        var cache = {};

        function memoized() {
          var args = [].slice.call(arguments);
          var key = JSON.stringify(args);
          if (cache.hasOwnProperty(key)) {
            return cache[key];
          }
          cache[key] = fn.apply(this, arguments);
          return cache[key];
        }

        return memoized;
      }

      return service;
    }
  ]);
