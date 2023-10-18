import {Component} from '@angular/core';
import {raya} from "./raya";

@Component({
  selector: 'app-raya',
  templateUrl: './raya.component.html',
  styleUrls: ['./raya.component.css']
})
export class RayaComponent {
  partida: raya;

  constructor() {
    this.partida = new raya();
  }

  occuparCelda(row: number, col: number) {
    //console.log(row, col);
    if(this.pudedoPoner(row, col)){
      this.partida.celdas[row][col] = "X";
    }else{
      console.log("no se puede poner");
    }
  }

  pudedoPoner(row: number, col: number): boolean {
    return true;
    //TODO
  }
}
