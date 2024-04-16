import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { UserStorage } from "../user.storage";

export const AUTH_HEADER = 'authorization';

@Injectable()
export class AuthService{

    constructor(private http: HttpClient, private userStore: UserStorage) {}

    register(signUpRequest:any): Observable<any>{
        return this.http.post('/api/register', signUpRequest)
    }

    signIn(email: string, password:string):any {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const body = { email, password };
    
        return this.http.post('/api/authenticate', body, { headers, observe: 'response' }).pipe(
          map((res) => {
            const token = res.headers.get(AUTH_HEADER)?.substring(7);
            const user = res.body;
            if (token && user) {
              this.userStore.saveToken(token);
              this.userStore.saveUser(user);
              return true;
            }
            return false;
          }),
          catchError((error) => {
            console.error('Login Error:', error);
            return throwError(error);
          })
        );
    }


}
