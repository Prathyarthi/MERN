// import { games } from "./store";
import { gameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        console.log(gameManager.log());
    }, 5000)
}