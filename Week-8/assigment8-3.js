let BinarySearchTree = require('./BinarySearchTree');

function levelOrderTraversal(root) {
    let q = [];

    q.push(root)

    while(q.length !== 0){
        
        let node = q.shift();
        console.log(node.value);

        if(node.left !== null)
            q.push(node.left);

        if(node.right !== null)
            q.push(node.right);

    }
}

let bst = new BinarySearchTree();

bst.insert(12);
bst.insert(34);
bst.insert(66);
bst.insert(43);
bst.insert(98);
bst.insert(3);
bst.insert(9);


levelOrderTraversal(bst.root);