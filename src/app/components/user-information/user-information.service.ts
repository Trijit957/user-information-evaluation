import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserInfoInterface } from './user-information.interface';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  private readonly basePath: string = environment.userInfoApiDomainPath;

  constructor(
    private http: HttpClient
  ) { }

  public getUserInfo(): Observable<Array<UserInfoInterface>> {
      return this.http.get<Array<UserInfoInterface>>(
        `${this.basePath}/users`
      )
  }
}
