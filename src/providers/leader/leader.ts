import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leader } from "../../shared/leader";
import { Observable } from "rxjs/Observable";
import { baseUrl } from "../../shared/baseUrl";
import { ProcessHttpmsgProvider } from "../process-httpmsg/process-httpmsg";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

    constructor(public http: HttpClient, private processHTTPMsgService: ProcessHttpmsgProvider) { }

    getLeaders(): Observable<Leader[]> {
        return this.http.get(baseUrl + 'leaders')
            .map(res => {
                return this.processHTTPMsgService.extractData (res);
            })
            .catch(error => {
                return this.processHTTPMsgService.handleError(error);
            });
    }

    getLeader(id: number): Observable<Leader> {
        return this.http.get(baseUrl + 'leaders/' + id)
            .map(res => {
                return this.processHTTPMsgService.extractData (res);
            })
            .catch(error => {
                return this.processHTTPMsgService.handleError(error);
            });
    }

    getFeaturedLeader(): Observable<Leader> {
        return this.http.get(baseUrl + 'leaders?featured=true')
            .map(res => {
                return this.processHTTPMsgService.extractData (res)[0];
            })
            .catch(error => {
                return this.processHTTPMsgService.handleError(error);
            });
    }
}