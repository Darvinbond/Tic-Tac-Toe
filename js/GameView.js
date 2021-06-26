export default class GameView{
    constructor(){
        
        this.xwin = 0;
        this.ywin = 0;
        // console.log("init GameView")
    }
    updateBoard(game){
        this.updateTurn(game);
        const winCombo = game.findWinCombo();
        // console.log("This is the game:");
        console.log(game.board);
        for(let i = 0; i < game.board.length; i++){
            // console.log(game.board[i]);
            const tile = document.querySelector
            (`#bt[data-index='${i}']`);
            let ex = document.querySelector(".bt");
            // if(ex){
            //     const tile = document.querySelector
            // (`.bt[data-index='${i}']`);
            // }else{
            //     const tile = document.querySelector
            // (`.bt-dark[data-index='${i}']`);
            // }
            
            // tile.textContent = game.board[i]
            let tileType = game.board[i] === "X" ? "tile-x" : "tile-o";
            // console.log(tileType);
            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : "" }</span>`
            tile.classList.remove("tile-winner");
            if(winCombo && winCombo.includes(i)){
                setTimeout(function(){
                    // let winner = document.getElementById("bt").querySelector(`.${tileType}`).textContent;
                    document.querySelector("h2").textContent = "- Winner for this round is "+game.turn;
                },1000);
                tile.classList.add("tile-winner");
                // console.log(this.xwin);
                
            }
        }
    }

    updateTurn(game){
        let playerx = document.querySelector(".player-x");
        let playero = document.querySelector(".player-o");
        
        playero.classList.remove('active')
        playerx.classList.remove('active')

        if(game.turn === "X"){
            playerx.classList.add('active');
        }else{
            playero.classList.add('active');
        }
    }
}
