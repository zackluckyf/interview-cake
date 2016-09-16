// Write a function getProductsOfAllIntsExceptAtIndex()
// that takes an array of integers and returns an array of the products.
var values = (function() {
    'use strict';

    function productSum(array) {
        var sum = 1;
        var newArray = [1];
        for (var i = 1; i < array.length; i++) {
            sum *= array[i - 1];
            newArray.push(sum);
        }
        sum = 1;
        for (var j = array.length - 2; j > -1; j--) {
            sum *= array[j + 1];
            newArray[j] = newArray[j] * sum;
        }
        return newArray;
    }
    return {
        productSum: productSum
    };
}());
