class Game {
  constructor() {
      this.board = new Board();
      this.players =this.createPLayers();
       /*++++ Player objects. This will be done using the same pattern
       we used to create Token objects inside the Player class, and create Spaces inside the Board class.++++*/
      this.ready = false;
  }

/*  Player Object Property Values
  Player 1
  The name parameter should receive a string value of Player 1 (or name of your choice)
  The color parameter should receive a string value of #e15258
  The id parameter should receive an integer value of 1
  The active parameter should receive a boolean value of true
  Player 2
  The name parameter should receive a string value of Player 2 (or name of your choice)
  The color parameter should receive a string value of #e59a13
  The id parameter should receive an integer value of 2
  Because the active parameter in the Player constructor method has a default value of false,
  no argument for the value of active needs to be passed.
*/

// /**
//  * Creates two player objects
//  * @return  {Array}    An array of two Player objects.
//  */
  createPLayers(){
    const players = [new Player('player 1', 1,'#e15258', true),
                     new Player(' player2',2 , '#e59a13')];
                     return players;
                 }
/*
* Gets game ready for playe
*/
startGame(){



}








          }
