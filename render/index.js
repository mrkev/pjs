var sketchProc = require( __dirname + '/tmp.js');

var canvas = document.getElementById("main");
// attaching the sketchProc function to the canvas
var processingInstance = new Processing(canvas, sketchProc);