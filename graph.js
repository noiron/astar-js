// Sets up the page with a graph

var css = { start: "start", finish: "finish", wall: "wall", active:"active"};
var log = function() {
    try {
        console.debug(arguments);
    }
    catch(e) {}
};

function GraphSearch($graph, options, implementation) {
    this.$graph = $graph;
    this.graphSet = [];
    this.search = implementation;
    this.opts = $.extend({wallFrequency:.1, debug:true, gridSize:10}, options);
    this.initialize();
}

GraphSearch.prototype.setOption = function(opt) {
    this.opts = $.extend(this.opts, opt);
    if (opt["debug"] || opt["debug"] == false) {
        this.drawDebugInfo(opt["debug"]);
    }
};

GraphSearch.prototype.initialize = function() {

    var self = this;
    var graphSet = [];
    var $graph = this.$graph;
    $graph.empty();

    var cellWidth = ($graph.width() / this.opts.gridSize) - 2;  // -2 for border
    var cellHeight = ($graph.height() / this.opts.gridSize) - 2;

    log("height", cellHeight, $graph.height(), this.opts.gridSize);
    log("width", cellWidth, $graph.width(), this.opts.gridSize);

    var $cellTemplate = $("<span />").addClass("grid_item").width(cellWidth).height(cellHeight);
    for (var x = 0; x < this.opts.gridSize; x++) {
        var $row = $("<div class='clear' />");
        $graph.append($row);

        var row = [];

        for (var y = 0; y < this.opts.gridSize; y++) {
            
        }

    }


};

GraphSearch.prototype.cellClicked = function($end) {

};

GraphSearch.prototype.drawDebugInfo = function() {

};

GraphSearch.prototype.nodeFromElement = function($cell) {

};

GraphSearch.prototype.animateNoPath = function() {

};

GraphSearch.prototype.animatePath = function(path) {

};

function GraphNode(x, y, $element) {

}