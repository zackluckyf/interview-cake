describe("Problem1", function() {
    it("should get the maximum profit", function() {
        var stock_prices_yesterday = [10, 7, 9, 3, 8, 5];
        expect(stocks.getMaxProfit(stock_prices_yesterday)).toEqual(5);
    });
});
