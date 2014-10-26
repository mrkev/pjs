'use strict';
/* global angular, console */

/* App */
var gui = require('nw.gui');
var app = angular.module('Pjs', ['ui.ace']);

/* Controllers */

app.controller('AppController', function ($scope) {

  $scope.model = 'hi';

  var _session;

  $scope.aceLoaded = function(_editor){
    // Editor part
        _session = _editor.getSession();
    var _renderer = _editor.renderer;

    _editor.setValue(samplescript, -1);

    console.dir(_renderer);

    // Options
    //_editor.setReadOnly(true);
    //_session.setUndoManager(new ace.UndoManager());
    //_renderer.setShowGutter(false);

    // Events
    // _editor.on('changeSession', function(){ ... });
    // _session.on('change', function(){ ... });
  };


  $scope.render_js = function () {
    var code = _session.getValue();

    var ren_win = gui.Window.get(
      window.open('./render/index.html')
    );

    ren_win.on('focus', function() {
      console.log(code);
    });



    ren_win.on('loaded', function () {
      // ren_win.window.render_pjs(code);


      var script = document.createElement('script');
      script.type = 'text/javascript';
      //script.src = 'scriptname.js';
      script.text = prepend + code + append;

      ren_win.window.document.body.appendChild(script);


    });
  
  };
});

var prepend = 'function sketchProc(processing) {'
var append  = '} var canvas = document.getElementById("main");' +
              'var processingInstance = new Processing(canvas, sketchProc);'


var samplescript = 'processing.setup = function () { \n \
    processing.size(300, 300); \n \
  }; \n \
 \n \
  processing.draw = function() { \n \
 \n \
    var centerX = processing.width / 2, centerY = processing.height / 2; \n \
    var maxArmLength = Math.min(centerX, centerY); \n \
    function drawArm(position, lengthScale, weight) { \n \
      processing.strokeWeight(weight); \n \
      processing.line(centerX, centerY, \n \
        centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength, \n \
        centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength); \n \
    } \n \
 \n \
    processing.background(224); \n \
    var now = new Date(); \n \
 \n \
    var hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12; \n \
    drawArm(hoursPosition, 0.5, 5); \n \
 \n \
    var minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60; \n \
    drawArm(minutesPosition, 0.80, 3); \n \
 \n \
    var secondsPosition = now.getSeconds() / 60; \n \
    drawArm(secondsPosition, 0.90, 1); \n \
  };';