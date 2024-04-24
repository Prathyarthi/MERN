"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
// export const games: Game[] = []
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: 'prathyarthi',
            blackPlayerName: 'kiran',
            moves: []
        };
        this.games.push(game);
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    log() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
exports.gameManager = new GameManager();
