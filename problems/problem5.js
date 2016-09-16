//problem 5 Write a function that, given: 1) an amount of money 2) an array of coin denominations
//computes the number of ways to make amount of money with coins of the available denominations.

var change = (function() {
    'use strict';
    var options = 0;
    var makeChange = function(money, denominations) {
        denominations.forEach(function(item) {
            if (money % item === 0) {
                options++;
            }
        });
        return options;
    };

    return {
        makeChange: makeChange
    };
}());
