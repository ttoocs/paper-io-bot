// ==UserScript==
// @name         Paper-io.com bot
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  A paper-io.com bot
// @author       ttoocs
// @match        http://paper-io.com/
// @grant        none
// ==/UserScript==


// Construction:
//
// Structure:
//  Have a function to genrate a map[][]
//    //each element being an int(?), of the player who has it.
//    // -1 for white, and -2 for wall.
//  Pass this map to the AI
//  Have output-functions (outside of the AI)
//  This allows the AI to be the same while changing the IO, to permit easy changing if the UI changes


(function() {
    'use strict';

    // Your code here...
})();


//Doesn't seem to work. (atleast not in chrome)
sendKey = function(keycode){

  //var keyboardEvent = document.createEvent("KeyboardEvent");
  //var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


  var e = new KeyboardEvent("keydown",
                    {bubbles : true, cancelable : true, key : keycode }
                  // "keypress", // event type : keydown, keyup, keypress
                  //  true, // bubbles
                  //  true, // cancelable
                  //  window, // viewArg: should be window
                  //  false, // ctrlKeyArg
                  //  false, // altKeyArg
                  //  false, // shiftKeyArg
                  //  false, // metaKeyArg
                  //  0, // keyCodeArg : unsigned long the virtual key code, else 0
                  //  0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
                  );
  //console.log(keyboardEvent.key);
  console.log(e);
  document.dispatchEvent(e);
};

//Simple go-in-a-square
enableBot = function(){
  setInterval(squareLoop,300);
};

var squareLoopState = 0;
squareLoop = function(){
  if(squareLoopState === 0){
    sendKey("ArrowDown");
    squareLoopState++;
  }else if(squareLoopState === 1){
    sendKey("ArrowRight");
    squareLoopState++;
  }else if(squareLoopState === 2){
    sendKey("ArrowUp");
    squareLoopState++;
  }else if(squareLoopState === 3){
    sendKey("ArrowLeft");
    squareLoopState = 0;
  }

};

//Takes in some 2D pixles values,
//  and generates 2D coordinates.
toTileCoords = function(){

};
//Takes in the 2D tile coordinates,
// and generates 2D pixle coordinates.
toPxCoords = function(){

};

//works in console (last tested: March 7, 2017)
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
