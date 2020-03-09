import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  table = ["","","","","","","","",""];
  player = false;  // false == X    true == O
 
  sign;
  


  constructor() { }



  resetGame(): void {
   
    var id : string;
    
    for (var i =0;i<this.table.length;i++){
   
        id = String(i);
      this.table[i]= "";
      document.getElementById(id).innerHTML = "";
    }
    
    
  }

  currentPlayer(){
    this.player = !this.player;

    if (this.player == false){
      this.sign = "O";
    }else{
      this.sign = "X";
    }
    
  }

  draw($event){
    

    this.currentPlayer();

    if($event.toElement.innerText === ""){
     
      this.table[$event.target.id] = this.sign;
      $event.toElement.innerText = this.sign;
      
     
    }
    this.checkWin();

    
  }

   checkWin(){
    
    if((this.table[0] === "X" &&
      this.table[1] === "X" &&
      this.table[2] === "X" ) || (this.table[0] === "O" &&
      this.table[1] === "O" &&
      this.table[2] === "O" )) { alert(this.sign+"Won the game")}
    else if (
      (this.table[3] === "X" &&
      this.table[4]=== "X" &&
      this.table[5] === "X"
    ) ||(this.table[3] === "O" &&
      this.table[4] === "O" &&
      this.table[5] === "O" ) ){ alert(this.sign+"Won the game")}
     else if (
      (this.table[6] === "X" &&
      this.table[7] === "X" &&
      this.table[8] === "X"
    ) || (this.table[6] === "O" &&
    this.table[7] === "O" &&
    this.table[8] === "O" )){ alert(this.sign+"Won the game")}
     
    console.log("checkwin:");
    console.log(this.table);
    
    
  }
  
  

  onClick($event){
    this.draw($event);
    var picked =$event.srcElement.id;
    
  }


  ngOnInit() {
  
  }

}
