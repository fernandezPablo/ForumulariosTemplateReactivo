import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: "Pablo",
    apellido: "Fernandez",
    correo: "fernandez.pablo44@gmail.com",
    pais: "ARG",
    genero: "M"
  }

  paises: any[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(
      paises => {
        this.paises = paises;

        this.paises.unshift( { 
          nombre: '[Seleccione un pais]',
          codigo: ''
        } );

      }
    );
  }

  guardar(forma: NgForm){

    console.log( forma )

    if(forma.invalid){
      Object.values(forma.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    
    console.log(forma.value);
  }

}
