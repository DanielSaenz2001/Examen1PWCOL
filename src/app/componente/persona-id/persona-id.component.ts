import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../servicio/persona.service';
import { PeliculasService } from '../../servicio/peliculas.service';

@Component({
  selector: 'app-persona-id',
  templateUrl: './persona-id.component.html',
  styleUrls: ['./persona-id.component.css']
})
export class PersonaIDComponent implements OnInit {

  constructor(
    private personasService: PersonaService,
    private route: ActivatedRoute,
    private peliculasService: PeliculasService) { }
  personaje;
  peliculas= [];
  dato;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      let val =0
      if (id) {
        this.personasService.getById(id).subscribe(response=>{
          this.personaje = response;
          console.log(this.personaje)
          const lenght = Object.keys(this.personaje.films).length
          for (const per of this.personaje.films) {
            const cadena = per
            const patron = "http://swapi.dev/api/films/"
            const nuevoValor    = ""
            const nuevaCadena = cadena.replace(patron, nuevoValor);
            const patron2 = "/"
            const nuevoValor2    = ""
            const nuevaCadena2 = nuevaCadena.replace(patron2, nuevoValor2);
            
            this.peliculasService.getById(nuevaCadena2).subscribe(response=>{
              this.dato = response
              const cadena = this.dato.url
              const patron = "http://swapi.dev/api/films/"
              const nuevoValor    = ""
              const nuevaCadena = cadena.replace(patron, nuevoValor);
              const patron2 = "/"
              const nuevoValor2    = ""
              const nuevaCadena2 = nuevaCadena.replace(patron2, nuevoValor2);
              this.dato.id = nuevaCadena2
              this.peliculas[val] = response
              val = val +1;
            })
            
          }
          console.log(this.peliculas)
        })
      }
    });
    
  }

}
