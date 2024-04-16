import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Bouquet } from "../models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserStorage } from "../user.storage";

@Injectable()
export class AdminService{

    http = inject(HttpClient)

addAdminBouquet(bouquet: Bouquet):Promise<Bouquet> {
        console.log('adding admin Bouquet:', bouquet)
        return firstValueFrom(this.http.post<any>('/api/admin/add-bouquet', bouquet, {
            headers: this.createAuthorizationHeader(),
          }))
      }

      private createAuthorizationHeader(): HttpHeaders {
        return new HttpHeaders().set(
          'Authorization',
          'Bearer ' + UserStorage.getToken()
        );
      }

      saveImage(file: File) {

        const form = new FormData()
        form.set("image", file)
    
        return firstValueFrom(
          this.http.post<any>('/image', form)
        )
      }
}