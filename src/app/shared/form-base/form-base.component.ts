import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { UnidadeFederativa } from 'src/app/core/types/unidadeFederativa';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit{
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
  @Input() perfilComponent!: boolean;
  @Input() titulo: string = 'Crie sua conta';
  @Input() textoBotao : string = 'CADASTRAR';
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>();
  @Output() sair: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['Usuario Teste', Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: ['123', [Validators.required]],
      cidade: ['Teste', Validators.required],
      email: ['teste@gmail.com', [Validators.required, Validators.email]],
      senha: ['123456', [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: ['123', Validators.required],
      estado: this.estadoControl,
      confirmarEmail: ['teste@gmail.com', [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: ['123456', [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      aceitarTermos: [false, [Validators.required]]
    });

    if(this.perfilComponent){
      this.cadastroForm.get('aceitarTermos')?.setValidators(null);
    }else{
      this.cadastroForm.get('aceitarTermos')?.setValidators([Validators.requiredTrue]);
    }

    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setCadastro(this.cadastroForm)

  }

  executarAcao(){
    this.acaoClique.emit();
  }

  deslogar(){
    this.sair.emit();
  }
}