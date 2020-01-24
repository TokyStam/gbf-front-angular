import { Component, AfterViewInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

  public showSearch = false;

  constructor(private modalService: NgbModal, private authenticationService: AuthenticationService, private router: Router) {}

  ngAfterViewInit() {}

  public logout() {
    this.authenticationService.logout().subscribe((data) => {
      window.location = '/';
    });
  }
}
