import { games } from "./store";
import { startLogger } from "./logger";

startLogger()


setInterval(() => {
    games.push({
        id: Math.random().toString(),
        whitePlayerName: 'prathyarthi',
        blackPlayerName: 'kiran',
        moves: []
    })
}, 5000)