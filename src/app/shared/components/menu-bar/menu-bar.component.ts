import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: ``
})
export class MenuBarComponent implements OnInit {

 public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [{
      label: 'Pipes de Angular',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        },
        {
          label: 'No comunes',
          icon: 'pi pi-globe',
          routerLink: 'uncommon'
        },
      ]
    },
    {
      label: 'Pipes Personalizados',
      icon: ' pi pi-user-edit',
      items : [
        {
          label: 'Custom Pipes',
          icon: 'pi pi-file-edit',
          routerLink: 'custom'
        }
      ]
    }
  ]}


}
