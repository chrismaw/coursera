import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from "../../shared/dish";
import { Observable } from "rxjs/Observable";
import { baseUrl } from "../../shared/baseUrl";
import { ProcessHttpmsgProvider } from "../process-httpmsg/process-httpmsg";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: HttpClient, private processHTTPMsgService: ProcessHttpmsgProvider) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseUrl + 'dishes')
        .map(res => {
          return this.processHTTPMsgService.extractData (res);
        })
        .catch(error => {
          return this.processHTTPMsgService.handleError(error);
        });
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseUrl + 'dishes/' + id)
        .map(res => {
          return this.processHTTPMsgService.extractData (res);
        })
        .catch(error => {
          return this.processHTTPMsgService.handleError(error);
        });
  }

    getFeaturedDish(): Observable<Dish> {
        return this.http.get(baseUrl + 'dishes?featured=true')
            .map(res => {
                return this.processHTTPMsgService.extractData (res)[0];
            })
            .catch(error => {
                return this.processHTTPMsgService.handleError(error);
            });
    }
}
