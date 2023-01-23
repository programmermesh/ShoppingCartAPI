import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.config';
import { newOrder } from '../Models/OrderData';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

   /* ----------==========     Create Order API    ==========---------- */
   createUser(model: any) {
    return this._http.post<newOrder>(AppSettings.API_ENDPOINT + "api/Order/Add", model);
  }

   /* ----------==========     Get All Orders    ==========---------- */
   getAllOrders() {
    return this._http.get(AppSettings.API_ENDPOINT + "api/Order/GetAll");
  }

   /* ----------==========     Get All Orders    ==========---------- */
   updateShippinOrders(id: any, model:any) {
    return this._http.put(AppSettings.API_ENDPOINT + `api/Order/Update?id=${id}`, model);
  }

}
