"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { games } from "./store";
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
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
    store_1.gameManager.addGame(Math.random().toString());
}, 5000);
