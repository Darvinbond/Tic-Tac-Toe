import Game from "./Game.js"
import GameView from "./GameView.js";
import GamView from "./GameView.js"

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);

let tile = document.querySelectorAll(".bt");
tile.forEach((tiles) => {
    tiles.addEventListener("click", ()=> {
        onTileClick(tiles.dataset.index);
    });
});
document.querySelector(".restart")
.addEventListener("click", ()=>{
    onRestartClick();
});
function onTileClick(i){
    //do something
    game.makeMove(i)
    //update board
    gameView.updateBoard(game);
}
function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}
let t = 1
document.querySelector("#mode").addEventListener("click", () =>{
    t = t + 1;
    mode();
});
function mode(){
    if(t % 2 === 0){
        console.log("even");
        let btn = document.querySelector("#mode");
        btn.classList.remove('mode');
        btn.classList.add('mode-dark');
        btn.textContent = "Light Mode";
        let body = document.querySelector("body");
        body.classList.remove('body-light');
        body.classList.add('body-dark');
        let rst = document.querySelector(".restart");
        rst.classList.remove('restart');
        rst.classList.add('restart-dark');
        // let ttt = document.querySelectorAll(".bt");
        for(let i = 0; i < game.board.length; i++){
            const ttt = document.querySelector
                (`#bt[data-index='${i}']`);
            ttt.classList.remove('bt');
            ttt.classList.add('bt-dark');
        }
        let f = document.querySelector(".num");
        f.classList.remove('num');
        f.classList.add('num-dark');
    }else{
        console.log("odd");
        let btn = document.querySelector("#mode");
        btn.classList.remove('mode-dark');
        btn.classList.add('mode');
        btn.textContent = "Dark Mode";
        let body = document.querySelector("body");
        body.classList.remove('body-dark');
        body.classList.add('body-light');
        for(let i = 0; i < game.board.length; i++){
            const ttt = document.querySelector
                (`#bt[data-index='${i}']`);
            ttt.classList.remove('bt-dark');
            ttt.classList.add('bt');
        }
        let rst = document.querySelector(".restart-dark");
        rst.classList.remove('restart-dark');
        rst.classList.add('restart');
        
        let f = document.querySelector(".num-dark");
        f.classList.remove('num-dark');
        f.classList.add('num');
    }

}