import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  isOpenMenu: boolean = false;
  ngOnInit(): void {
    document.addEventListener("click", _=> this.handleClick())
    document.addEventListener("keydown",_=> this.handlePress(event))
  }
  ngOnDestroy(): void {
    document.removeEventListener("click", _=> this.handleClick())
    document.removeEventListener("keydown",_=> this.handlePress(event))
  }
  handleClick(): void{
    this.isOpenMenu ? this.toogleMenu() : '' 
  }
  handlePress(ev: any): void {
    if (ev.keyCode === 27) {
      this.handleClick();
    }
  }
  toogleMenu(ev?: any) : void{
    if (ev) {
      ev.stopPropagation();
    }
    this.isOpenMenu = !this.isOpenMenu
    document.body.classList.toggle('menu-open');

  }
}
