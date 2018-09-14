class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        /*(1) now we have to create an space declaring first it existance on the class
         the following line just do that
         */
        this.spaces = this.createSpaces();
    }

    // /**
    //  * Generates 2D array osf spaces.
    //  * @return  {array}     An array of space objects
    //  */


//
//     /*(2) now we create our own method wich will create the logic or
//     the structure of the board; we declare an space, when the teacher shows this solution
//     they (@treehouse team) already had in mind forward steps, that is  why sometimes it´s difficult to
//     undestand the why they code simething; you have to see the whole method first, and then re-check the solution, this will bring your
//     more confidence, and will bring you the chance of other sort of questions as well.
//      */
//     createSpaces() {
//         const spaces = [];
//         /*(3) the loop the core of this method, it has being created thinking in a vey precise way,
//         it is not improvisation, probably several iterations on the concept.it has being created an empty array spaces=[];
//         this must be populated, so we start making a loop, but we know this is 2 dimension board, so we have to go
//         for 2 varaibles x, y used here, ( horizonal, vertical), our first loop will be on charge of the vertical variavle,
//         but we have another issue, it is a 6 rows (horizontal) and 7 columns ( vertical) that´s why we have to start our loop
//         with the higher value 7, accessing this value through this.columns ( standard way on code of accessing data); then we
//         have to create another loop inside or nested the previous loop,
//          */
// 		for (let x = 0; x < this.columns; x++) {
// 			const col = [];
//
// 			for (let y = 0; y < this.rows; y++) {
// 				const space = new Space(x, y);
// 				col.push(space);
// 			}
//
// 			spaces.push(col);
// 		}
//
//         return spaces;
//     }
// }

var paragraphs = document.getElementsByTagName("P");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
