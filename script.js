/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = UITLEG;

const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_UP = 38
const KEY_DOWN = 40
const LEFTV = 65
const RIGHTV = 83
const UPV = 87
const DOWNV = 90

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var health = 100;  // health van speler

var vijandX = 600 // x-positie van vijand
var vijandY = 600 // y-positie van vijand
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 1;
  }
  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 1;
  }
  if (keyIsDown(KEY_UP)) {
    spelerY = spelerY - 1;
  }
  if (keyIsDown(KEY_DOWN)) {
    spelerY = spelerY + 1;
  }
  // vijand
  if (keyIsDown(LEFTV)) {
    vijandX = vijandX - 1;
  }
  if (keyIsDown(RIGHTV)) {
    vijandX = vijandX + 1;
  }
  if (keyIsDown(UPV)) {
    vijandY = vijandY - 1;
  }
  if (keyIsDown(DOWNV)) {
    vijandY = vijandY + 1;
  }
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (spelerX - vijandX < 50 &&
    spelerX - vijandX > -50 &&
    spelerY - vijandY < 50 &&
    spelerY - vijandY > -50) {
    console.log("Botsing");
    health = health - 1;
  }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  fill("blue")
  rect(0, 0, 1280, 720);
  // vijand
  fill("red");
  ellipse(vijandX - 25, vijandY - 25, 50, 50);
  fill("black")
  ellipse(vijandX - 25, vijandY - 25, 100, 10);
  // kogel

  // speler
  fill("yellow");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("orange");
  ellipse(spelerX, spelerY, 100, 10);

  // punten en health

};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (health < 0) {
      spelStatus = GAMEOVER;
    }

  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over");
    textSize(50);
    fill("white");
    text("GAME OVER, druk spatie om het spel opieuw te starten", 100, 100);
    if (keyIsDown(32)) { // spatie
      spelStatus = UITLEG;
    }
  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
    console.log("uitleg");
    textSize(50);
    fill("blue");
    rect(0, 0, 1280, 720);
    fill("white");
    text("uitleg: druk op enter om de GAME te starten", 100, 100);
    if (keyIsDown(13)) {// enter
      spelerX = 400;
      spelStatus = SPELEN;
    }
  }
}
