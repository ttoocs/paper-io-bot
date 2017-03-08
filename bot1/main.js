

// ==UserScript==
// @name         Paper-io.com bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://paper-io.com/
// @grant        none
// ==/UserScript==


// Construction:
//
// Structure:
//  Have a function to genrate a map[]
//  Pass this map to the AI
//  Have output-functions (outside of the AI)
//  This allows the AI to be the same while changing the IO, to permit easy changing of anti-hacker stuff.


(function() {
    'use strict';

    // Your code here...
})();

getPlayers = function(){
  var scores = document.getElementById('scores');
  var players = [];
  //TODO: Check for null scores
  if(scores === null || scores.children.length === 0){
    console.log("No score");
    return null;
  }

  //for (var elem in scores.children){ //Apprently, this doesn't actually work.
  for (var i = 0 ; i < scores.children.length ; i ++){
    var elem = scores.children[i];
    //TODO: Check that elem is good.
    var name = elem.className;

    //console.log(name);
    if(name === undefined){
      console.log("Undefined name, skipping." + elem );
      continue;
    }
    var cuter = name.indexOf("_p");
    name = name.substr(cuter+1);
    players.push(name);
  }
  return players;
};

getMap = function() {

};
