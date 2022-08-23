let BinarySearchTree = require("./BinarySearchTree");
function isBST(root) {

    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function helper(root, min, max) {
    if (root === null) return true;

    if (root.value < min || root.value < max) return false;

    return ((helper(root.left, min, root.value)) && helper(root.right, root.value, max))
}

let bst = new BinarySearchTree();

bst.insert(23)
bst.insert(45);
bst.insert(13)

console.log(isBST(bst.root));
