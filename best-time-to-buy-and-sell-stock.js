var maxProfit = function (prices) {
	var left = 0;
	var right = 1;
	var maxProfit = 0;

	while (right < prices.length) {
		if (prices[left] < prices[right]) {
			var profit = prices[right] - prices[left];
			maxProfit = Math.max(maxProfit, profit);
		} else {
			left = right;
		}
		right++;
	}
	return maxProfit;
};
