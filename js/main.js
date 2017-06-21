
//Basic App Main Config
//June 2017
//Set-up map projection, start extent, map layers and basic functionality

//Includes
dojo.require("dijit.dijit");
dojo.require("esri.map");
dojo.require("dojo.domReady!");

var map;
function init() { 
  var customExtentAndSR = new esri.geometry.Extent
