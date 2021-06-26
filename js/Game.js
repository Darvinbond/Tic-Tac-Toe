export default class Game{
  constructor(){
    // console.log("init Game");
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }
  nextTurn(){
    if(this.turn === "X"){
      this.turn = "O";
    }else{
      this.turn = "X";
    }
  }
  makeMove(i){
    if(this.endOfGame()){
      return;
    }
    if(this.board[i]){
      return;
    }
    this.board[i] = this.turn;
    let winningCombo = this.findWinCombo();
    console.log("Wins at :",winningCombo);
    if(!winningCombo){
      this.nextTurn();
    }
  }
  findWinCombo(){
    const winCombo = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2]
    ]
    for(const combo of winCombo){
      const [a,b,c] = combo;
      if(this.board[a] &&
        (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
          return combo;
        }
    }
    return null;
  }
  endOfGame(){
      let win = this.findWinCombo();
      if(win){
        return true;
      }else{
        return false;
      }
  }
}
