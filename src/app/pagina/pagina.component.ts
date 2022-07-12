import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagina",
  templateUrl: "./pagina.component.html",
  styleUrls: ["./pagina.component.css"],
})
export class PaginaComponent implements OnInit {
  menuLateral = false;
  carrinhoVazio = false;
  itensCarrinho = false;
  quantidade = 0;
  max = 4;
  min = 1;

  public abrir() {
    this.menuLateral = true;
    this.carrinhoVazio = false;
    this.itensCarrinho = false;
  }
  public fechar() {
    this.menuLateral = false;
  }

  public abrirCarrinho() {
    this.itensCarrinho = !this.itensCarrinho;
  }
  public botaoMenos() {
    if (this.quantidade > 0) {
      this.quantidade--;
    } else {
    }
  }

  public botaoMais() {
    this.quantidade++;
  }

  public proximaFoto() {}

  public anteriorFoto() {}

  constructor() {}

  ngOnInit(): void {}
}
