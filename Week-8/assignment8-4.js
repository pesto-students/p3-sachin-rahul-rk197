let Graph = require('./Graph');


function hasPath(n, edges, v1, v2) {

    let graph = new Map();
    let visited = new Set();

    for(let [v,e] in edges){
        if(graph.has(v))
            graph.get(v).push(e)
    }
    
}




let graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);


graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 1);


graph.log();

hasPath(3, 3, 1, 2)