import { Component, OnInit } from '@angular/core';
import { delay, map } from 'rxjs';
import { UserInformationService } from './user-information.service';

type UserType = {
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  company: string;
}

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  public users: Array<UserType> = new Array();
  public errorMessage: string = '';
  public isLoading!: boolean;

  constructor(
    private readonly userInformationService: UserInformationService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo() {
    this.isLoading = true;
    this.userInformationService.getUserInfo()
        .pipe(
          map((response) => {
            let users: Array<UserType> = [];
            response.forEach(eachUser => {
              users.push({
                name: eachUser.name,
                username: eachUser.username,
                email: eachUser.email,
                address: `${eachUser.address.suite}, ${eachUser.address.street}, ${eachUser.address.city}`,
                company: eachUser.company.name,
                phone: eachUser.phone
              })
            })
            
            return users;
          }),
          delay(500)
        ).subscribe({
            next: (response) => {
              if(response?.length) {
                this.users = response;
                console.log(this.users);
              }
            },

            error: () => {
              this.users = [];
              this.errorMessage = 'User Information not Found';
              this.isLoading = false;
            },
            complete: () => { 
              this.isLoading = false;
            }
    })
  }

  public trackByFunc(index: number, item: any) {
      return index;
  }

}
