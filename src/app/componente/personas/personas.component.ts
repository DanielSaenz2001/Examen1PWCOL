import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../servicio/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private personasService: PersonaService) { }
  personajes;
  ngOnInit(): void {
    this.personasService.getAll(1).subscribe(response=>{
      this.personajes = response.results;
      console.log(response.results)
      for (const per of this.personajes) {
        const cadena = per.url
        const patron = "http://swapi.dev/api/people/"
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
    this.personasService.getAll(pag).subscribe(response=>{
      this.personajes = response.results;
      for (const per of this.personajes) {
        const cadena = per.url
        const patron = "http://swapi.dev/api/people/"
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
