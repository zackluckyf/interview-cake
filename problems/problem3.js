//problem 3 Given an arrayOfInts, find the highestProduct you can get from three of the integers.
var highestProduct = (function() {
    'use strict';
    var arrayOfInts = [-10, -10, 1, 3, 2];

    function sortNumber(a, b) {
        return b - a;
    }
    arrayOfInts.sort(sortNumber);
    if (arrayOfInts[arrayOfInts.length - 1] < 0 && arrayOfInts[arrayOfInts.length - 2] < 0) {
        for (var i = 0; i < arrayOfInts.length; i++) {
            if (arrayOfInts[i] < 0) {
                arrayOfInts[i] = arrayOfInts[i] * -1;
            }
        }
    }
    arrayOfInts.sort(sortNumber);
    var answer = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

    return {
        answer: answer
    };
})();
