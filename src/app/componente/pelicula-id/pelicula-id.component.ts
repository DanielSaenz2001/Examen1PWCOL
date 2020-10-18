import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../servicio/persona.service';
import { PeliculasService } from '../../servicio/peliculas.service';

@Component({
  selector: 'app-pelicula-id',
  templateUrl: './pelicula-id.component.html',
  styleUrls: ['./pelicula-id.component.css']
})
export class PeliculaIDComponent implements OnInit {

  constructor(
    private personasService: PersonaService,
    private route: ActivatedRoute,
    private peliculasService: PeliculasService) { }
  pelicula;
  personajes= [];
  dato;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      let val =0
      if (id) {
        this.peliculasService.getById(id).subscribe(response=>{
          this.pelicula = response;
          console.log(this.pelicula)
          for (const per of this.pelicula.characters) {
            const cadena = per
            const patron = "http://swapi.dev/api/people/"
            const nuevoValor    = ""
            const nuevaCadena = cadena.replace(patron, nuevoValor);
            const patron2 = "/"
            const nuevoValor2    = ""
            const nuevaCadena2 = nuevaCadena.replace(patron2, nuevoValor2);
            
            this.personasService.getById(nuevaCadena2).subscribe(response=>{
              this.dato = response
              const cadena = this.dato.url
              const patron = "http://swapi.dev/api/people/"
              const nuevoValor    = ""
              const nuevaCadena = cadena.replace(patron, nuevoValor);
              const patron2 = "/"
              const nuevoValor2    = ""
              const nuevaCadena2 = nuevaCadena.replace(patron2, nuevoValor2);
              this.dato.id = nuevaCadena2
              this.personajes[val] = response
              val = val +1;
            })
            
          }
          console.log(this.personajes)
        })
      }
    });
    
  }

}
