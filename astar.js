var astar = {

    init: function(grid) {
        for (var x = 0; x < grid.length; x++) {
            for (var y = 0; y < grid[x].length; y++) {
                grid[x][y].f = 0;
                grid[x][y].g = 0;
                grid[x][y].h = 0;
                grid[x][y].debug = "";
                grid[x][y].parent = null;
            }
        }
    },

    search: function(graph, start, end) {
        astar.init(grid);

        var openList = [];
        var closedList = [];
        openList.push(start);

        while(openList.length > 0) {
            // Grab the lowest f(x) to process next
            var lowIndex = 0;
            for (var i = 0; i < openList.length; i++) {
                if (openList[i].f < openList[lowIndex].f) {
                    lowIndex = i;
                }
            }
            var currentNode = openList[lowIndex];

            // End case -- result has been found, return the traced path
            if (currentNode.pos == end.pos) {
                var curr = currentNode;
                var ret = [];
                while (curr.parent) {
                    ret.push(curr);
                    curr = curr.parent;
                }
                return ret.reverse();
            }

            // Normal case -- move currentNode from open to closed,
            // process each of its neighbors
            openList.removeGraphNode(currentNode);
            closedList.push(currentNode);
            var neighbors = astar.neighbors(grid, currentNode);

            for (var i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];
                // not a valid node to process, skip to next neighbor
                if (closedList.findGraphNode(neighbor) || neighbor.isWall()) {
                    continue;
                }

                //
                var gScore 
            }
        }
    },

    heuristics: {

    },

    cleanNode: function(node) {

    }
};

/**
 * A graph memory structure
 * @param gridIn
 * @param options
 * @constructor
 */
function Graph(gridIn, options) {
    options = options || {};
    this.nodes = [];
    this.diagonal = !!options.diagonal;
    this.grid = [];
    for (var x = 0; x < gridIn.length; x++) {
        this.grid[x] = [];
        for (var y = 0, row = gridIn[x]; y < row.length; y++) {
            var node = new GridNode(x, y, row[y]);
            this.grid[x][y] = node;
            this.nodes.push(node);
        }
        this.init();
    }
}

Graph.prototype.init = function() {
    this.dirtyNodes = [];

};

Graph.prototype.cleanDirty = function() {

};

Graph.prototype.makeDirty = function() {

};

Graph.prototype.neighbors = function() {

};

Graph.prototype.toString = function() {

};


function GridNode(x, y, weight) {
    this.x = x;
    this.y = y;
    this.weight = weight;
}

GridNode.prototype.toString = function() {
    return "[" + this.x + " " + this.y + "]";
};

GridNode.prototype.getCost = function(fromNeighbor) {
    // Take diagonal weight into consideration
    if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
        return this.weight * 1.41421;
    }
    return this.weight;
};

GridNode.prototype.isWall = function() {
    return this.weight === 0;
};

function BinaryHeap(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
    push: function(element) {
        // Add the new element to the end of the array.
        this.content.push(element);

        // Allow it to sink down.
        // TODO:
    },

    pop: function() {
        // Store the first element so we can return it later.
        var result = this.content[0];
        // Get the element at the end of the array.
        var end = this.content.pop();
        // If there are any elements left, put the end element at
        // the start, and let it buddle up.
        if (this.content.length > 0) {
            this.content[0] = end;
            this.bubbleUp(0);
        }
        return result;
    },

    remove: function(node) {
        var i = this.content.indexOf(node);

        // When it is found, the process seen in 'pop' is repeated
        // to fill up the hole.
        var end = this.content.pop();

        if (i !== this.content.length - 1) {
            this.content[i] = end;

            if (this.scoreFunction(end) < this.scoreFunction(node)) {
                this.sinkDown(i);
            }
            else {
                this.bubbleUp(i);
            }
        }
    },

    size: function() {
        return this.content.length;
    },

    rescoreElement: function(node) {
        this.sinkDown(this.content.indexOf(node));
    },

    sinkDown: function(n) {
        // Fetch the element that has to be sunk
        var element = this.content[n];

        // When at 0, an element can not sink any further.
        while (n > 0) {

            // Compute the parent element's index, and fetch it.
            var parentN = ((n + 1) >> 1) - 1,
                parent = this.content[parentN];

            // Swap the elements if the parent is greater.
            if (this.scoreFunction(element) < this.scoreFunction(parent)) {
                this.content[parentN] = element;
                this.content[n] = parent;
                // Update 'n' to continue at the new position.
                n = parentN;
            }
            // Found a parent that is less, no need to sink any further.
            else {
                break;
            }
        }
    },

    bubbleUp: function(n) {
        //
    }


};


