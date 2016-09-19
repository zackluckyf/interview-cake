describe("Problem6", function() {
    'use strict';
    var intersection, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, intersection2, intersection3;
    beforeEach(function() {
        obj1 = {
            leftX: 1,
            bottomY: 5,
            width: 10,
            height: 4
        };
        obj2 = {
            leftX: 3,
            bottomY: 3,
            width: 10,
            height: 4
        };
        obj3 = {
            leftX: 7,
            bottomY: 3,
            width: 5,
            height: 8
        };
        obj4 = {
            leftX: 4,
            bottomY: 7,
            width: 10,
            height: 6
        };
        obj5 = {
            leftX: 1,
            bottomY: 1,
            width: 1,
            height: 1
        };
        obj6 = {
            leftX: 3,
            bottomY: 3,
            width: 1,
            height: 1
        };
        obj7 = {
            leftX: 1,
            bottomY: 1,
            width: 1,
            height: 1
        };
        obj8 = {
            leftX: 0,
            bottomY: 0,
            width: 2,
            height: 2
        };
        obj9 = {
            leftX: 1,
            bottomY: 0,
            width: 1,
            height: 1
        };
        obj10 = {
            leftX: 0,
            bottomY: 0,
            width: 1,
            height: 1
        };
        intersection = {
            left: 3,
            width: 8,
            top: 7,
            height: 2
        };
        intersection2 = {
            left: 7,
            width: 5,
            top: 11,
            height: 4
        };
        intersection3 = {
            left: 1,
            width: 1,
            top: 2,
            height: 1
        };
    });
    it("should have an intersect method", function() {
        expect(OkEros.intersect).toBeDefined();
    });
    it("should be able to tell the left boundary and the width", function() {
        expect(OkEros.leftObject(obj1, obj2)).toEqual({
            left: 3,
            width: 8
        });
    });
    it("should be able to tell top boundary and the height", function() {
        expect(OkEros.topObject(obj1, obj2)).toEqual({
            top: 7,
            height: 2
        });
    });
    it("should return an object from intersect method", function() {
        expect(OkEros.intersect(obj1, obj2)).toEqual(intersection);
    });
    it("should return an object from intersect method second time", function() {
        expect(OkEros.intersect(obj3, obj4)).toEqual(intersection2);
    });
    it("should return an empty object if the objects dont intersect", function() {
        expect(OkEros.intersect(obj5, obj6)).toEqual({});
    });
    it("should return the contained object if one object contains the other", function() {
        expect(OkEros.intersect(obj7, obj8)).toEqual(intersection3);
    });
    it("should return an empty object if the objects touch but don't intersect", function() {
        expect(OkEros.intersect(obj9, obj10)).toEqual({});
    });
});
