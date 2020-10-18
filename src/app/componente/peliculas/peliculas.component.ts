import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../servicio/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }
  personajes;
  ngOnInit(): void {
    this.peliculasService.getAll(1).subscribe(response=>{
      this.personajes = response.results;
      console.log(response.results)
      for (const per of this.personajes) {
        const cadena = per.url
        const patron = "http://swapi.dev/api/films/"
        const nuevoValor    = ""
        const nuevaCadena = cadena.replace(patron, nuevoValor);
        const patron2 = "/"
        const nuevoValor2    = ""
        const nuevaCadena2 = nuevaCadena.replace(patron2, nuevoValor2);
        per.id = nuevaCadena2
      }
    })
  }

  lista(pag){
    this.peliculasService.getAll(pag).subscribe(response=>{
      this.personajes = response.results;
      for (const per of this.personajes) {
        const cadena = per.url
        const patron = "http://swapi.dev/api/films/"
        const nuevoValor    = ""
        const nuevaCadena = cadena.replace(patron, nuevoValor);
        const patron2 = "/"
        const nuevoValor2    = ""
        const nuevaCadena2 = nuevaCadena.replace(patron2, nuevoValor2);
        per.id = nuevaCadena2
      }
    })
  }

}
