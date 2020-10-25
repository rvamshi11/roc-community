import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'roc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  _onRouteChange() {
    if (!this.isCollapsed) {
      this.toggleCollapse();
    }

  }
}
