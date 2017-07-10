
function Node(value){
    this.value = value;
    return this;
}

export function parseTree(treeIn){
    if(!treeIn){
        return;
    }
    const [value, left, right] = treeIn;
    if(!value) return;

    const node = new Node(value);
    if(left){
        node.left = parseTree(left);
    }
    if(right){
        node.right = parseTree(right);
    }
    
    return node;
}

function doVisibleCount(node, count){
    if(!node){
        return count;
    }
    if(node.left){
        if(node.left.value > node.value){
            count++;
        } else {
            node.left.value = node.value
        }
        count = doVisibleCount(node.left, count);
    }
    if(node.right){
        if(node.right.value > node.value){
            count++;
        } else {
            node.right.value = node.value;
        }
        count = doVisibleCount(node.right, count);
    }
    
    return count
}
export function treeVisibleCount(treeIn){
    const tree = parseTree(treeIn);
    if(!tree){
        return 0;
    }

    return doVisibleCount(tree, 1);
}