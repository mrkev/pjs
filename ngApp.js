'use strict';
/* global io, angular */

/* App */

var app = angular.module('Pjs', ['ui.ace']);

/* global app, TowerModel, console */

/* Controllers */

app.controller('AppController', function ($scope) {

  $scope.model = "hi"

  var _session;

  $scope.aceLoaded = function(_editor){
    // Editor part
        _session = _editor.getSession();
    var _renderer = _editor.renderer;

    // Options
    //_editor.setReadOnly(true);
    //_session.setUndoManager(new ace.UndoManager());
    //_renderer.setShowGutter(false);

    // Events
    // _editor.on("changeSession", function(){ ... });
    // _session.on("change", function(){ ... });
  };


  $scope.runJS = function () {
    var code = _session.getValue();
    var script = document.createElement.
    try {
      script.appendChild(document.createTextNode(code));
      document.body.appendChild(s);
    } catch (e) {
      script.text = code;
      document.body.appendChild(s);
    }
  }


});