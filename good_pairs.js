
var countPairs = function(root, distance) {
    let count = 0;

    function dfs(node) {
        if (!node) return [];

        if (!node.left && !node.right) {
            return [0];
        }

        let leftDistances = dfs(node.left);
        let rightDistances = dfs(node.right);

        for (let lDist of leftDistances) {
            for (let rDist of rightDistances) {
                if (lDist + rDist + 2 <= distance) {
                    count++;
                }
            }
        }

        return [...leftDistances.map(d => d + 1), ...rightDistances.map(d => d + 1)];
    }

    dfs(root);
    return count;
};
