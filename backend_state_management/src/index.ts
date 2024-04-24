// import { games } from "./store";
import { gameManager } from "./store";
import { startLogger } from "./logger";

startLogger()

// setInterval(() => {
//     games.push({
//         id: Math.random().toString(),
//         whitePlayerName: 'prathyarthi',
//         blackPlayerName: 'kiran',
//         moves: []
//     })
// }, 5000)

// By using object of class
setInterval(() => {
    gameManager.addGame(Math.random().toString())
}, 5000)