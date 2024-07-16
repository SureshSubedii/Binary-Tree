var getDirections = function(root, startValue, destValue) {
    const findPath = (curr, target, path) =>{
      if (!curr) return false
      if(curr.val === target) return true
  
      path.push("R")
      if(findPath(curr.right, target, path)) return true
      path.pop()
  
      path.push("L")
      if(findPath(curr.left, target, path)) return true
      path.pop()
  
      return false
  
    }
    let startPath = []
    let destPath = []
    findPath(root, startValue, startPath)
    findPath(root, destValue, destPath )
    let common = 0
    while( common < startPath.length && common < destPath.length && startPath[common] === destPath[common]) common ++
  
  let res = []
    for(let i = 0; i < startPath.length - common; i++){
      res.push("U")
    }
    res.push(...destPath.slice(common))
    return res.join("")
  
  };