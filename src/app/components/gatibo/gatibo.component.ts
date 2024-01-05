import { Component } from '@angular/core';

@Component({
  selector: 'app-gatibo',
  templateUrl: './gatibo.component.html',
  styleUrls: ['./gatibo.component.css']
})
export class GatiboComponent {
  traducir(inputText:string): void{

    if (inputText.length <= 0){
      return;
    }

    document.querySelector('.gatitos')!.innerHTML = '';

    inputText = inputText.toLowerCase();
    for(let i=0; i < inputText.length; i++){
        const img = document.createElement('img');

        if(inputText[i].trim() !== '' ){

          img.src = `../../../assets/abecedario/gatibo/${inputText[i]}.jpg`;
          img.onerror = function() {
            img.src = `../../../assets/abecedario/gatibo/especial.jpg`;
          };
          img.alt = `${inputText}`;
          document.querySelector('.gatitos')?.appendChild(img);
        }
        else{
          img.src = `../../../assets/abecedario/gatibo/blanco.jpg`;
          img.alt = `espacio`;
          document.querySelector('.gatitos')?.appendChild(img);
        }

    }
  }
}
