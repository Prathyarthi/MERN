interface Game {
    id: string
    whitePlayerName: string
    blackPlayerName: string
    moves: string[]
}

// export const games: Game[] = []


export class GameManager {
    games: Game[] = []

    private static instance: GameManager // Declaring instance of this class using static keyword 

    private constructor() {
        this.games = []
    }

    static getInstance() {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager()   // Creating instance of this class
        }
        return GameManager.instance
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

export const gameManager = GameManager.getInstance()   // Calling the static method and exporting the instance



// But usually this instance gameManager of this class can be created in another file and be used for other purposes in that specific file.
// This should not happen as gameManager instance should be exported from here itself and should not be created elsewhere.
// That's why we use singleton pattern here.
// Singleton pattern is meant by creating the instance only once and then exporting it.
// To do this, we need to add private keyword first to the constructor.
// By adding private keyword, we cannot create this instance anywhere and even in this file also.
// But we need one(singleton) instance so that we can export it.
// Therefore, we need to use static instance and static method and export the instance.
// Because static methods are directly associated with the class and not with the object.
//So, instead of creating the instance outside the class, we create the instance inside the class using the static method and export it as static methods are directly associated with the class.
// It ensures that we can create only one instance of this class anywhere.
// This instance associated with this class is called singleton and cannot be created anywhere.
// The getInstance() function means that, if the instance is not created, it will create it, else it will return same instance associated with that class anywhere. This means Even if a developer calls it 100 times,it will return same instance and not re-create it.
// This is why static attribute and static method both are created.
