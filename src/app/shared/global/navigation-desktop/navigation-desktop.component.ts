import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-navigation-desktop',
  templateUrl: './navigation-desktop.component.html',
  styleUrls: ['./navigation-desktop.component.scss']
})
export class NavigationDesktopComponent implements OnInit {

  constructor(
    private loggerService: LoggerService
  ) { }

  ngOnInit(): void {
  }

  log(): void {
    this.loggerService.log('LINK', 'https://www.espresso-tutorials.de/shop/?_inhaltstyp=blended-learning');
  }


}
