import { Component, OnInit } from '@angular/core';

type MenuItemType = {
  name: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currentDate: string = '';
  public navMenuItems: Array<MenuItemType> = [
    {
      name: 'User Information',
      route: '/user-information'
    },
    {
      name: 'About Us',
      route: '/about-us'
    },
    {
      name: 'Contact',
      route: '/contact'
    }
  ];
  private readonly months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  constructor() { }

  ngOnInit(): void {
    this.currentDate = this.getCurrentDate();
  }

  private getCurrentDate(): string {
      let date = new Date().getDate();
      let monthIndex = new Date().getMonth();
      let month = this.months[monthIndex];
      let year = new Date().getFullYear();

      return `${date}-${month}-${year.toString().slice(-2)}`
  }

}
