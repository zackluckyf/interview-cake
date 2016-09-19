describe("problem7", function() {
    beforeEach(function() {
        tempTracker.array.splice(0);
    });
    it("should have a tempTracker namespace", function() {
        expect(tempTracker).toBeDefined();
    });
    it("should have 5 methods", function() {
        expect(tempTracker.insert).toBeDefined();
        expect(tempTracker.get_max).toBeDefined();
        expect(tempTracker.get_min).toBeDefined();
        expect(tempTracker.get_mean).toBeDefined();
        expect(tempTracker.get_mode).toBeDefined();
    });
    it("should be able to add a temp", function() {
        tempTracker.insert(45);
        expect(tempTracker.array).toEqual([45]);
    });
    it("should be able to get max", function() {
        tempTracker.insert(40);
        tempTracker.insert(60);
        tempTracker.insert(80);
        expect(tempTracker.get_max()).toEqual(80);
    });
    it("should be able to get min", function() {
        tempTracker.insert(40);
        tempTracker.insert(60);
        tempTracker.insert(80);
        expect(tempTracker.get_min()).toEqual(40);
    });
    it("should be able to get mean", function() {
        tempTracker.insert(40);
        tempTracker.insert(60);
        tempTracker.insert(80);
        expect(tempTracker.get_mean()).toEqual(60);
    });
    it("should be able to get mode", function() {
        tempTracker.insert(40);
        tempTracker.insert(40);
        tempTracker.insert(60);
        tempTracker.insert(60);
        tempTracker.insert(60);
        tempTracker.insert(80);
        expect(tempTracker.get_mode()).toEqual(60);
    });
});
