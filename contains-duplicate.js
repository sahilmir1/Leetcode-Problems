var containsDuplicate = function (nums) {
	var numsObj = {};
	for (var i = 0; i < nums.length; i++) {
		var aNum = nums[i];
		if (numsObj[aNum]) {
			return true;
		} else {
			numsObj[aNum] = true;
		}
	}

	return false;
};
