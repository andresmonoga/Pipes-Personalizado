import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'andres';
  public nameUpper: string = 'ANDRES';
  public fullName: string = 'AnDrEs DaViD';

  public customDate: Date = new Date();

}
