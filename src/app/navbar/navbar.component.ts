import { Component } from '@angular/core';
import { constants } from '../constants.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  social = constants.social

}
