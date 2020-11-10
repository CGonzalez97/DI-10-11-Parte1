import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() { 
    this.correo = {
      titulo : "Titulo del mail",
      cuerpo: "Cuerpo del emailCuerpo del email"+
      "Cuerpo del emailCuerpo del emailCuerpo del email",
      emisor: "emisor@gmail.com",
      destinatario: "destinatario@gmail.com"
    }
  }

  ngOnInit(): void {
  }

}
