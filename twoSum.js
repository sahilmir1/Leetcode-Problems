var twoSum = function(nums, target) {
    const numsObject = {}
    
    nums.forEach((item, index) => {
        numsObject[item] = index;
    })
    
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i]
        
        if(numsObject[diff] != undefined && numsObject[diff] != i) {
            return [numsObject[diff],i]
        }
    }
    
};