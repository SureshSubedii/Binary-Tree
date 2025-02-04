 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null

    let middleIndex = Math.floor(nums.length/2)
    let root = new TreeNode(nums[middleIndex])
    let leftHalf = nums.slice(0, middleIndex )
    root.left = sortedArrayToBST(leftHalf)
    let rightHalf = nums.slice(middleIndex + 1, nums.length)
    root.right = sortedArrayToBST(rightHalf)

    return root

    
};
