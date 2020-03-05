import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  allPicked =[]; 
  player = false; // false == X    true == O
  newGame = false;
  sign;


  constructor() { }



  resetGame(){
    this.newGame = true;
    this.allPicked = [];
   
  }

  currentPlayer(){
    this.player = !this.player;

    if (this.player == false){
      this.sign = "O";
    }else{
      this.sign = "X";
    }

      console.log(" SIGN :"+this.sign);
  }

  draw($event){
    this.currentPlayer();
    
    if($event.toElement.innerText == ""){
      $event.toElement.innerText = this.sign
    }
    

    if(this.newGame == true){
      for( var i = 0;i < this.allPicked.length; ++i ){
        $event.toElement.innerText = "";
      }
    }
    this.newGame = false
  }


  onClick($event){
    this.draw($event);
    var picked =$event.srcElement.id;
    
   
    this.allPicked.push(picked);
    console.log(picked);
    console.log(this.allPicked);
  }

  ngOnInit() {
   console.log(document.getElementById("player1"));

  }

}
