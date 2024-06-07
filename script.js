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
var kogelspelerX = 400; // x-positie van kogel
var kogelspelerY = 600; // y-positie van kogel
var kogelspelerVliegt = false; // is de kogel vliegt of niet
var health = 10;  // health van speler
var punten = 0; // punten van speler

var vijandX = 600 // x-positie van vijand
var vijandY = 600 // y-positie van vijand
var kogelvijandX = 575; // x-positie van kogel
var kogelvijandY = 575; // y-positie van kogel
var kogelvijandVliegt = false; // is de kogel vliegt of niet
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
  // kogelspeler

  if (kogelspelerVliegt === false &&
      keyIsDown(16)) { // start schieten met toets 1
     kogelspelerVliegt = true;
     kogelspelerX = spelerX;
     kogelspelerY = spelerY;
  }
  if (kogelspelerVliegt === true) { // kogel vliegt
   kogelspelerY = kogelspelerY - 1;
  }
  if (kogelspelerVliegt === true &&
      kogelspelerY < 0) { // kogel verdwijnt
    kogelspelerVliegt = false;
      }

  // kogelvijand

if (kogelvijandVliegt === false &&
      keyIsDown(50)) { // start schieten met toets 2
     kogelvijandVliegt = true;
     kogelvijandX = vijandX;
     kogelvijandY = vijandY;
  }
  if (kogelvijandVliegt === true) { // kogel vliegt
   kogelvijandY = kogelvijandY - 1;
  }
  if (kogelvijandVliegt === true &&
      kogelvijandY < 0) { // kogel verdwijnt
    kogelvijandVliegt = false;
      }

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
     punten = punten + 0.02;
  

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  fill("blue")
  rect(0, 0, 1280, 720);
  // kogelvijand
  fill("red");
  ellipse(kogelvijandX, kogelvijandY, 20, 20);
  // vijand
  fill("red");
  ellipse(vijandX - 25, vijandY - 25, 50, 50);
  fill("black")
  ellipse(vijandX - 25, vijandY - 25, 100, 10);
  // atributen1
  fill("lightgray");
  ellipse(50,50,500,500);
  fill("darkgray");
  ellipse(60,60,50,50);
  fill("lightgray");
  ellipse(60,60,40,40);
  fill("darkgray");
  
  ellipse(240,100,100,100);
  fill("lightgray");
  ellipse(240,100,90,90);
  fill("darkgray");
  ellipse(130,180,30,30);
  fill("lightgray");
  ellipse(130,180,20,20);
  fill("darkgray");
  ellipse(5,140,30,30);
  fill("lightgray");
  ellipse(5,140,20,20);
  fill("darkgray");
  ellipse(50,250,80,80);
  fill("lightgray");
  ellipse(50,250,70,70);
  fill("darkgray");
  ellipse(150,1,40,40);
  fill("lightgray");
  ellipse(150,1,30,30);
  //atributen2
  fill("purple");
  ellipse(1000,500,300,300);
  fill("lightpink");
  ellipse(1000,500,300,5);
  fill("lightpink");
  ellipse(1000,600,210,5);
  fill("lightpink");
  ellipse(1000,400,210,5);
  fill("lightpink");
  ellipse(1050,560,110,5);
  fill("lightpink");
  ellipse(950,540,110,5);
  fill("lightpink");
  ellipse(1050,440,110,5);
  fill("lightpink");
  ellipse(950,460,110,5);
  // kogelspeler
  fill("white");
  ellipse(kogelspelerX, kogelspelerY, 20, 20);
  // speler
  fill("darkorange");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("white");
  ellipse(spelerX, spelerY, 100, 10);

  // punten en health
  fill("white");
  textSize(50);
  text("Time: " + round(punten), 10, 50);
  text("Health: " + health, 10, 100);
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
    text("GAME OVER, press SPACE to play the GAME again", 40, 300);
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
    text("Press RETURN to start the GAME", 300, 300);
    if (keyIsDown(13)) {// enter
      spelerX = 400;
      spelStatus = SPELEN;
    }
  }
}
