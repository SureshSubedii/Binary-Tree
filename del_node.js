var delNodes = function(root, to_delete) {
    let delete_arr = new Set(to_delete)
    let result = {}
    result[root.val] = root
  
    const remainingNodes = (parent, curr, isLeft) =>{
      if(!curr) return 
  
      remainingNodes(curr, curr.left, true)
      remainingNodes(curr, curr.right, false)
  
      if(delete_arr.has(curr.val)){
          delete result[curr.val]
          if (parent){
              if(isLeft) parent.left = null 
              else parent.right = null
  
          }
          
          
          if(curr.left) result[curr.left.val] = curr.left
          if(curr.right) result[curr.right.val] = curr.right
      
  
  
      }
    }
    remainingNodes(null, root, false)
    return Object.values(result)
  
  };


  // Using BFS

// var delNodes = function(root, to_delete) {
//     if (!root) return [];

//     let toDeleteSet = new Set(to_delete);
//     let result = [];
//     let queue = [root];

//     while (queue.length > 0) {
//         let curNode = queue.shift();

//         if (curNode.left) {
//             queue.push(curNode.left);
//             if (toDeleteSet.has(curNode.left.val)) {
//                 curNode.left = null;
//             }
//         }

//         if (curNode.right) {
//             queue.push(curNode.right);
//             if (toDeleteSet.has(curNode.right.val)) {
//                 curNode.right = null;
//             }
//         }

//         if (toDeleteSet.has(curNode.val)) {
//             if (curNode.left) {
//                 result.push(curNode.left);
//             }
//             if (curNode.right) {
//                 result.push(curNode.right);
//             }
//         } else if (result.length === 0) {
//             result.push(curNode);
//         }
//     }
//     return result;
// };