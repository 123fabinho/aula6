import { Component, OnInit } from '@angular/core';
import { compra } from "../model/compra";
import { LISTACOMPRAS } from "../model/lista-compras";


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

 lista : compra[] = LISTACOMPRAS;
 compra : compra = new compra();
 selectedcompra : compra;

  constructor() { }

  ngOnInit() {
  }
  add(){
    let c = new compra();
    c.produto = this.compra.produto;
    c. id = this.compra.id;
    c.quantidade = this.compra.quantidade;
    c.valor = this.compra.valor;
    //console.log(this.compra.produto);
    this.lista.push(this.compra);
  }
  selected(obj:compra){
    this.selectedcompra = obj;
  }

}
