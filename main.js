//console.log("Hello, world!");
const SENTE = 0;
const GOTE = 1;
const FORWARD = {[SENTE]: 1, [GOTE]: -1}

class Piece {
    constructor(color) {
        this.color = color;
    }

    legalMoves(position, board) {
    }

}

class Raion extends Piece {
    reachableMoves(position) {
        const {column, row} = position;
        return [
           {column, row: row + 1}, {column: column + 1, row: row + 1},
           {column: column - 1, row: row + 1}, {column: column + 1, row},
           {column: column - 1, row}, {column, row: row - 1},
           {column: column + 1, row: row - 1}, {column: column - 1, row: row - 1},
        ];
    }
}

class Kirin extends Piece {
    reachableMoves(position) {
        return [
            {column: position.column, row: position.row + 1}, {column: position.column + 1, row: position.row},
            {column: position.column - 1, row: position.row}, {column: position.column, row: position.row - 1},
        ];
    }
}

class Zou extends Piece {
    reachableMoves(position) {
        return [
            {column: position.column + 1, row: position.row + 1}, {column: position.column -1, row: position.row + 1},
            {column: position.column - 1, row: position.row - 1}, {column: position.column + 1, row: position.row - 1},
      ];
  }
}

class Hiyoko extends Piece {
    reachableMoves(position) {
        const forward = FORWARD[this.color];
        return [{column: position.column, row: position.row + forward}];
    }
}

class Niwatori extends Piece {
    reachableMoves(position) {
         return [
             {column: position.column, row: position.row + 1}, {column: position.column + 1, row: position.row + 1},
             {column: position.column - 1, row: position.row + 1}, {column: position.column + 1, row: position.row},
             {column: position.column - 1, row: position.row}, {column: position.column, row: position.row - 1},
         ];
    }
}

class Board {
    constructor() {
        this.turn = SENTE;
        this.grid = [
            [Kirin(SENTE), null, null, Zou(GOTE)],
            [Raion(SENTE), Hiyoko(SENTE), Hiyoko(GOTE), Raion(GOTE)],
            [Zou(SENTE), null, null, Kirin(GOTE)],
        ];
        this.hands = {
            [SENTE]: [],
            [GOTE]: [],
        };


    }

}
