import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, firstValueFrom } from "rxjs";
import { Bouquet, BouquetOrder } from "./models";

@Injectable()
export class BouquetService{
    
    private http = inject(HttpClient)

    // Retrieving all bouquets from MongoDB
      getAllBouquets(): Observable<Bouquet[]> {
        console.log("hello. fetching bouquets...", this.http.get<Bouquet[]>(`/api/bouquets`) )
        return this.http.get<Bouquet[]>(`/api/bouquets`)
      }

    // Sending new Bouquet to MongoDB
    addCustomBouquet(bouquet: Bouquet):Promise<Bouquet> {
        console.log('adding custom Bouquet:', bouquet)
        return firstValueFrom(this.http.post<any>('/api/add-custom', bouquet))
      }


      savingBouquetOrder(bouquetOrder: BouquetOrder):Promise<BouquetOrder> {
        console.log('adding Bouquet Order:', bouquetOrder)
        return firstValueFrom(this.http.post<any>('/api/create-bouquet-order', bouquetOrder))
      }

      getBouquetOrderId(bouquetOrder: BouquetOrder): Observable<String> {
        return this.http.get<any>('api/')


      }
}