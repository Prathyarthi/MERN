interface Game {
    id: string
    whitePlayerName: string
    blackPlayerName: string
    moves: string[]
}

// export const games: Game[] = []

export class GameManager {
    games: Game[] = []

    constructor() {
        this.games = []
    }

    addGame(gameId: string) {
        const game = {
            id: gameId,
            whitePlayerName: 'prathyarthi',
            blackPlayerName: 'kiran',
            moves: []
        }

        this.games.push(game)
    }

    addMove(gameId: string, move: string) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move)
    }

    log() {
        console.log(this.games)
    }
}

export const gameManager = new GameManager()