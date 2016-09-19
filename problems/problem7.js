// Write a class TempTracker with these methods:
//
// insert()—records a new temperature
// get_max()—returns the highest temp we've seen so far
// get_min()—returns the lowest temp we've seen so far
// get_mean()—returns the mean ↴ of all temps we've seen so far
// get_mode()—returns the mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions
// (get_max(), get_min(), get_mean(), and get_mode()) over speeding up the insert() function.
//
// get_mean() should return a float, but the rest of the getter functions can return integers.
//
// If there is more than one mode, return any of the modes.

var tempTracker = (function() {
    var array = [];
    var insert = function(temp) {
        function biggest(a, b) {
            return b - a;
        }
        array.push(temp);
        array.sort(biggest);
    };
    var get_max = function() {
        if (array.length > 0) {
            return array[0];
        }
    };
    var get_min = function() {
        if (array.length > 0) {
            return array[array.length - 1];
        }
    };
    var get_mean = function() {
        function sum(a, b) {
            return a + b;
        }
        var length = array.length;
        var total = array.reduce(sum);
        return total / length;
    };
    var get_mode = function() {
        var count = 1;
        var temp = 1;
        var answer = 0;
        var postition;

        function spot(i) {
            return i;
        }
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] === array[i + 1]) {
                temp++;
                count = temp;
            } else {
                temp = 1;
            }
            if (answer < count) {
                answer = count;
                position = spot(i);
            }
        }
        return array[position];
    };

    return {
        insert: insert,
        get_max: get_max,
        get_min: get_min,
        get_mean: get_mean,
        get_mode: get_mode,
        array: array
    };
})();
