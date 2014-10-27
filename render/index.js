// var sketchProc = require( __dirname + '/tmp.js');
// 
// var canvas = document.getElementById("main");
// // attaching the sketchProc function to the canvas
// var processingInstance = new Processing(canvas, sketchProc);
var gui = require('nw.gui');

var ren_win = gui.Window.get();

var dvtls = function () {
  ren_win.showDevTools();
}
var close = function () {
  ren_win.close(true);
}
var minim = function () {
  ren_win.minimize();
}