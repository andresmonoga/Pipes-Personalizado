import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Andres';
  public gender :'male' | 'female' ='male';
  public invitationMap={
    'male': 'Invitarlo',
    'female': 'Invitarla'

  }

  changeClient(): void {
    this.name = 'Melisa'
    this.gender = 'female'
  }

  //i18nplural
  public clients: string[] =['Maria','Fernando','Antonio','Andres','Andrea','Camila','Anny','Alejandra','David'];
  public clientsMap ={
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente espernado. ',
    'other': 'tenemos # clientes espernado.',
  }

  deleteClient(): void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Andres',
    age: 17,
    address: 'Cucúta, Colombia'
  }

  // Async Pipe
  public myObservableTimer = interval (2000).pipe(
    tap( value => console.log ('tap', value))
  )

  public promiseValue: Promise <string> = new Promise(( resolve, reject) =>{
    setTimeout(() =>{
      resolve('Tenemos Data en la Promesa');
    }, 3500);
  })
}
