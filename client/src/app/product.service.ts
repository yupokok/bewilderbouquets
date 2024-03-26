import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Bouquet } from "./models";

@Injectable()
export class ProductService{
    
    private http = inject(HttpClient)

    // Retrieving all bouquets from MongoDB
    getAllBouquets(): Observable<string[]> {
        return this.http.get<string[]>('/api/categories')
      }

    // Sending new Bouquet to MongoDB
    addCustomBouquet(bouquet: Bouquet):Observable<any> {
        console.log('adding Bouquet:', bouquet)
        return this.http.post<any>('/api/add-bouquet', bouquet)
      }

}