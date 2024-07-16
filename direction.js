var getDirections = function(root, startValue, destValue) {
    const findPathFromRoot = (curNode, targetValue, pathToAppend) => {
        if (!curNode) return false;
        if (curNode.val === targetValue) return true;

        pathToAppend.push("R");
        if (findPathFromRoot(curNode.right, targetValue, pathToAppend)) return true;
        pathToAppend.pop();

        pathToAppend.push("L");
        if (findPathFromRoot(curNode.left, targetValue, pathToAppend)) return true;
        pathToAppend.pop();

        return false;
    };

    const pathToStart = [];
    const pathToDestination = [];

    findPathFromRoot(root, startValue, pathToStart);
    findPathFromRoot(root, destValue, pathToDestination);

    let commonPathLen = 0;
    while (commonPathLen < pathToStart.length &&
           commonPathLen < pathToDestination.length &&
           pathToStart[commonPathLen] === pathToDestination[commonPathLen]) {
        commonPathLen++;
    }
    console.log(pathToStart, pathToDestination,commonPathLen)

    const res = [];
    for (let i = 0; i < pathToStart.length - commonPathLen; i++) {
        res.push("U");
    }
    res.push(...pathToDestination.slice(commonPathLen));

    return res.join("");
};