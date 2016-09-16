//problem 4 Write a function condenseMeetingTimes() that takes an array of meeting time ranges and returns an array of condensed ranges.

var business = (function() {
    'use strict';

    function condenseMeetingTimes(array) {
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].endTime >= array[i + 1].startTime) {
                if (array[i].endTime < array[i + 1].endTime) {
                    array[i].endTime = array[i + 1].endTime;
                }
                array.splice(i + 1, 1);
                i--;
            }
        }
        return array;
    }
    return {
        condenseMeetingTimes: condenseMeetingTimes
    };
}());
