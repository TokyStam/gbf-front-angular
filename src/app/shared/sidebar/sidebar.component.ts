import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../authentication';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {}

  // End open close
  ngOnInit() {
    this.authenticationService.IsAdmin().subscribe((data) => {
      this.sidebarnavItems = ROUTES.filter((sidebarnavItem) => {
        if (sidebarnavItem.admin === true && data === false) {
          return false;
        }
        return true;
      });
    });
  }

  /**
   * manageHidden
   * @param value boolean
   */
  public manageHidden(value: boolean): Observable<boolean> {
    console.log('value: ' + value);
    if (value) {
      return this.authenticationService.IsAdmin();
    } else {
      return new Observable((observer) => {
        observer.next(false);
        observer.complete();
      });
    }
  }
}
