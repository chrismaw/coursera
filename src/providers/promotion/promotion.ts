import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promotion } from "../../shared/promotion";
import { Observable } from "rxjs/Observable";
import { baseUrl } from "../../shared/baseUrl";
import { ProcessHttpmsgProvider } from "../process-httpmsg/process-httpmsg";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromotionProvider {

    constructor(public http: HttpClient, private processHTTPMsgService: ProcessHttpmsgProvider) { }

    getPromotions(): Observable<Promotion[]> {
        return this.http.get(baseUrl + 'promotions')
            .map(res => {
                return this.processHTTPMsgService.extractData(res);
            })
            .catch(error => {
                return this.processHTTPMsgService.handleError(error);
            });
    }

    getPromotion(id: number): Observable<Promotion> {
        return this.http.get(baseUrl + 'promotions/' + id)
            .map(res => {
                return this.processHTTPMsgService.extractData (res);
            })
            .catch(error => {
                return this.processHTTPMsgService.handleError(error);
            });
    }

    getFeaturedPromotion(): Observable<Promotion> {
        return this.http.get(baseUrl + 'promotions?featured=true')
            .map(res => {
                return this.processHTTPMsgService.extractData (res)[0];
            })
            .catch(error => {
                return this.processHTTPMsgService.handleError(error);
            });
    }
}
