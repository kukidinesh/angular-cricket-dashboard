import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http'; 
import { HttpFormEncodingCodec } from './../_helper/http.form.codec';
import { ParamsHelper } from '../_helper/params';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  
    /**
     * 
     */
    headers: HttpHeaders;
    
    /**
     * 
     * @param http 
     */
    constructor(
        private paramsHelper: ParamsHelper,
        private http: HttpClient
        ) { 

    }

    /**
     * 
     */
    _getBody(){
        return new HttpParams({ encoder: new HttpFormEncodingCodec() });
    }
  


    readAll(){

        return this.http.get("http://127.0.0.1:8000/api/fixtures")
            .pipe(
                map(
                    data => {
                                return data;
                            }
                    )
                );

    }


    
}
