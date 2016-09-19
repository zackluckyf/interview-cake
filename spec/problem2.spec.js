describe("Problem2", function() {
    it("should make a product array using the other array values", function() {
        var array = [1, 7, 3, 4];
        expect(values.productSum(array)).toEqual([84, 12, 28, 21]);
    });
    it("should make a product array using the other array values round 2", function() {
        var array = [2, 3, 9, 4];
        expect(values.productSum(array)).toEqual([108, 72, 24, 54]);
    });
    it("should make a product array using the other array values round 3", function() {
        var array = [3, 6, 7, 2];
        expect(values.productSum(array)).toEqual([84, 42, 36, 126]);
    });
});
