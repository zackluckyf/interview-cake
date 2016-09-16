// Write an efficient function that takes stockPricesYesterday and returns the best profit
//  I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
var stocks = (function() {
    'use strict';

    var getMaxProfit = function(array) {
        var max_profit = array[1] - array[0];
        var min_price = array[0];
        for (var i = 0; i < array.length - 1; i++) {
            if (min_price > array[i]) {
                min_price = array[i];
            }
            if (array[i + 1] - min_price > max_profit) {
                max_profit = array[i + 1] - min_price;
            }
        }
        return max_profit;
    };
    return {
        getMaxProfit: getMaxProfit
    };
}());
