import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hackathon-angular';
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [{
      label: 'Options',
      items: [{
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
        }
      },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
          }
        }
      ]},
      {
        label: 'Navigate',
        items: [{
          label: 'Angular Website',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
        },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
          }
        ]}
    ];
  }
}
