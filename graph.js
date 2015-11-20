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

};

GraphSearch.prototype.initialize = function() {

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