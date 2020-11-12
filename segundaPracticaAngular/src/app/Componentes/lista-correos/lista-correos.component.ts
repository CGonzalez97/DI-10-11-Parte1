import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss']
})
export class ListaCorreosComponent implements OnInit {

  correos:any[];
  responder:boolean;
  correoAResponder: any;

  constructor() { 

    const correo1 ={
      titulo: 'Titulo1',
      cuerpo: 'curpo1curpo1curpo1curpo1curpo1',
      emisor: 'emisor1@SpeechGrammarList.com',
      destinatario: 'destinatario1@gmail.com',
      leido: false
    }
    const correo2 ={
      titulo: 'Titulo2',
      cuerpo: 'curpo2curpo2curpo2curpo2curpo2',
      emisor: 'emisor2@SpeechGrammarList.com',
      destinatario: 'destinatario2@gmail.com',
      leido: true
    }
    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);

  }

  ngOnInit(): void {
  }

  clickResponder(correo){
    this.responder = !this.clickResponder;
    this.correoAResponder = correo;
  }

  accionRespuestaRapida(correo){
    correo.responder = false;
  }

}
