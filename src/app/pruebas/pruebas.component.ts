import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  constructor() { }

  estilosParrafo = {
  };

  ngOnInit(): void {

  }
  otp: string = '';
  placeholderChars: string[] = ['', '', '', '', '', ''];

    onInputChange() {
    const otpInput = document.querySelector('.otp-hidden-input') as HTMLInputElement;
    if (otpInput) {
      const otpValue = otpInput.value;
      this.placeholderChars = this.getPlaceholderChars(otpValue);
    }
  }

  private getPlaceholderChars(otpValue: string): string[] {
    const chars = [];
    for (let i = 0; i < 6; i++) {
      chars.push(i < otpValue.length ? otpValue.charAt(i) : '•');
    }
    return chars;
  }

}
