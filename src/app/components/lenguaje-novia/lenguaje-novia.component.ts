import { Component } from '@angular/core';

@Component({
  selector: 'app-lenguaje-novia',
  templateUrl: './lenguaje-novia.component.html',
  styleUrls: ['./lenguaje-novia.component.css']
})
export class LenguajeNoviaComponent {
  traducir(inputText:string): void{

    if (inputText.length <= 0){
      return;
    }

    document.querySelector('.images')!.innerHTML = '';

    inputText = inputText.toLowerCase();
    for(let i=0; i < inputText.length; i++){
        const img = document.createElement('img');
        if(inputText[i].trim() !== '' ){
          img.src = `../../../assets/abecedario/novia/${inputText[i]}.jpg`;
          img.onerror = function() {
            img.src = `../../../assets/abecedario/novia/especial.jpg`;
          };
          img.alt = `${inputText}`;
          document.querySelector('.images')?.appendChild(img);
        }
        else{
          img.src = `../../../assets/abecedario/novia/blanco.jpg`;
          img.alt = `espacio`;
          document.querySelector('.images')?.appendChild(img);
        }
    }
  }
  importar(e : any) : void {
    const archivo = e.target.files[0];
    console.log(archivo);
    const leer = new FileReader();
    leer.onload = (e: any) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      document.querySelector('.inversa')?.appendChild(img);
    };
    leer.readAsDataURL(archivo);
  }
}
