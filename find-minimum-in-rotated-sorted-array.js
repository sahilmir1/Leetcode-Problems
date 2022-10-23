var findMin = function (nums) {
	// If the list only has one element
	if (nums.length == 1) {
		return nums[0];
	}

	// Initialize left and right pointers
	var left = 0;
	var right = nums.length - 1;

	// If last element is greater than the first element then there is no rotation
	if (nums[right] > nums[0]) {
		return nums[0];
	}

	//Binary search
	while (left < right) {
		var mid = Math.floor((left + right) / 2);

		if (nums[mid] > nums[mid + 1]) {
			return nums[mid + 1];
		}

		if (nums[mid - 1] > nums[mid]) {
			return nums[mid];
		}

		if (nums[mid] > nums[0]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
};
