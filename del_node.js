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