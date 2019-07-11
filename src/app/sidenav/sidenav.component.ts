import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../../assets/default.scss']
})
export class SidenavComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


}

