import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  table = ["","","","","","","","",""];
  player = false; // false == X    true == O
 
  sign;
  


  constructor() { }



  resetGame(): void {
   
    var id : string;
    document.getElementById("1").innerHTML;
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

      console.log(" SIGN :"+this.sign);
  }

  draw($event){
    this.currentPlayer();

    

    $event.toElement.innerText = this.table[0];
    if($event.toElement.innerText == ""){
      $event.toElement.innerText = this.sign;
    }
    

    
  }


  onClick($event){
    this.draw($event);
    var picked =$event.srcElement.id;
    
  }


  ngOnInit() {
  
  }

}
