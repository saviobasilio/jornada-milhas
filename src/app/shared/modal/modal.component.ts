import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  adultosControl = this.formBuscaService.obterControle('adultos');
  criancasControl = this.formBuscaService.obterControle('criancas');
  bebesControl = this.formBuscaService.obterControle('bebes');

  constructor(public formBuscaService: FormBuscaService){

  }

  alterarQuantidadePassagerios(control: FormControl, operacao: string)
  {
    var change = control.value;
    if(operacao == "incrementar"){
      change+=1;
    }else{
      change-=1;
    }
    control.patchValue(
      change
    )
  }

}
