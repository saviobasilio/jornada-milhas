import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {

  @Input() titulo: string = ''
  @Input() subtitulo: string = ''

  value: number = 0
  OnChange = (value: number) => {}
  OnTouch = () => {}

  writeValue(val: any): void {
    this.value = val
  }
  registerOnChange(fn: any): void {
    this.OnChange = fn
  }
  registerOnTouched(fn: any): void {
    this.OnTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

  incrementar(){
    this.value += 1
    this.OnChange(this.value)
    this.OnTouch()
  }

  decrementar(){
    if(this.value > 0){
      this.value -= 1
      this.OnChange(this.value)
      this.OnTouch()
    }
  }

  

}
