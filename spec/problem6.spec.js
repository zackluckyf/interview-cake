describe("Problem6", function() {
    var intersection, obj1, obj2;
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
});
