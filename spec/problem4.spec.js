describe("Problem4", function() {
    it("should condense meeting times", function() {
        var meetings = [{
            startTime: 0,
            endTime: 1
        }, {
            startTime: 3,
            endTime: 5
        }, {
            startTime: 4,
            endTime: 8
        }, {
            startTime: 10,
            endTime: 12
        }, {
            startTime: 9,
            endTime: 10
        }, ];

        meetings.sort(function(a, b) {
            return a.startTime - b.startTime;
        });
        expect(business.condenseMeetingTimes(meetings)).toEqual([{
            startTime: 0,
            endTime: 1
        }, {
            startTime: 3,
            endTime: 8
        }, {
            startTime: 9,
            endTime: 12
        }]);
    });
});
