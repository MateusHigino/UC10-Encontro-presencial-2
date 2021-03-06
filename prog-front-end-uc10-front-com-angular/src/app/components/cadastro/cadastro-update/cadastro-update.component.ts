import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {

  cadastro!: Cadastro

  constructor(private cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +Number(this.route.snapshot.paramMap.get("id"));
    this.cadastroService.readById(id).subscribe(dados=>{
      this.cadastro = dados;
    })
  }

  updateCadastro(): void {
    this.cadastroService.updateCadastro(this.cadastro).subscribe(()=>{
      this.cadastroService.showMessege("Cadastro atualizado com sucesso");
      this.tabelasCadastro();
    })
  }

  cancelarCadastro():void {
    this.router.navigate(["/cadastro"]);
  }

  tabelasCadastro(): void {
    this.router.navigate(["/cadastro/tabela"]);
  }

}
