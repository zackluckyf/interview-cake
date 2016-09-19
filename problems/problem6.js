// Write a function to find the rectangular intersection of two given love rectangles.

var OkEros = (function() {
    'use strict';

    function intersect(loverObj1, loverObj2) {
        var obj = {};
        var leftBoundaryAndWidth = leftObject(loverObj1, loverObj2);
        var topBoundaryAndHeight = topObject(loverObj1, loverObj2);
        for (var prop in leftBoundaryAndWidth) {
            obj[prop] = leftBoundaryAndWidth[prop];
        }
        for (var prop1 in topBoundaryAndHeight) {
            obj[prop1] = topBoundaryAndHeight[prop1];
        }
        if (obj.width === 0 || obj.height === 0) {
            obj = {};
        }
        return obj;
    }

    function leftObject(loverObj1, loverObj2) {
        var obj = {};
        var obj1left = loverObj1.leftX + loverObj1.width >= loverObj2.leftX && loverObj1.leftX <= loverObj2.leftX;
        var obj2left = loverObj2.leftX + loverObj2.width >= loverObj1.leftX && loverObj2.leftX <= loverObj1.leftX;
        var obj1right = loverObj1.leftX + loverObj1.width >= loverObj2.leftX + loverObj2.width;
        var obj2right = loverObj2.leftX + loverObj2.width >= loverObj1.leftX + loverObj1.width;
        if (obj1left && obj1right) {
            obj = {
                left: loverObj2.leftX,
                width: loverObj2.width
            };
        } else if (obj1left) {
            obj = {
                left: loverObj2.leftX,
                width: loverObj1.leftX + loverObj1.width - loverObj2.leftX
            };
        } else if (obj2left && obj2right) {
            obj = {
                left: loverObj1.leftX,
                width: loverObj1.width
            };
        } else if (obj2left) {
            obj = {
                left: loverObj1.leftX,
                width: loverObj2.leftX + loverObj2.width - loverObj1.leftX
            };
        }
        return obj;
    }

    function topObject(loverObj1, loverObj2) {
        var obj;
        var obj1above = loverObj1.bottomY + loverObj1.height >= loverObj2.bottomY + loverObj2.height && loverObj1.bottomY <= loverObj2.bottomY + loverObj2.height;
        var obj1below = loverObj1.bottomY <= loverObj2.bottomY;
        var obj2above = loverObj2.bottomY + loverObj2.height >= loverObj1.bottomY + loverObj1.height && loverObj2.bottomY <= loverObj1.bottomY + loverObj1.height;
        var obj2below = loverObj2.bottomY <= loverObj1.bottomY;
        if (obj1above && obj1below) {
            obj = {
                top: loverObj2.bottomY + loverObj2.height,
                height: loverObj2.height
            };
        } else if (obj1above) {
            obj = {
                top: loverObj2.bottomY + loverObj2.height,
                height: loverObj2.bottomY + loverObj2.height - loverObj1.bottomY
            };
        } else if (obj2above && obj2below) {
            obj = {
                top: loverObj1.bottomY + loverObj1.height,
                height: loverObj1.height
            };
        } else if (obj2above) {
            obj = {
                top: loverObj1.bottomY + loverObj1.height,
                height: loverObj1.bottomY + loverObj1.height - loverObj2.bottomY
            };
        }
        return obj;
    }
    return {
        intersect: intersect,
        leftObject: leftObject,
        topObject: topObject
    };
})();
