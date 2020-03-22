/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Basic Error Controller
 */
@Injectable({
  providedIn: 'root',
})
class BasicErrorControllerService extends __BaseService {
  static readonly errorUsingGETPath = '/error';
  static readonly errorUsingHEADPath = '/error';
  static readonly errorUsingPOSTPath = '/error';
  static readonly errorUsingPUTPath = '/error';
  static readonly errorUsingDELETEPath = '/error';
  static readonly errorUsingOPTIONSPath = '/error';
  static readonly errorUsingPATCHPath = '/error';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * error
   * @return OK
   */
  errorUsingGETResponse(): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @return OK
   */
  errorUsingGET(): __Observable<{[key: string]: {}}> {
    return this.errorUsingGETResponse().pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @return OK
   */
  errorUsingHEADResponse(): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @return OK
   */
  errorUsingHEAD(): __Observable<{[key: string]: {}}> {
    return this.errorUsingHEADResponse().pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @return OK
   */
  errorUsingPOSTResponse(): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @return OK
   */
  errorUsingPOST(): __Observable<{[key: string]: {}}> {
    return this.errorUsingPOSTResponse().pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @return OK
   */
  errorUsingPUTResponse(): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @return OK
   */
  errorUsingPUT(): __Observable<{[key: string]: {}}> {
    return this.errorUsingPUTResponse().pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @return OK
   */
  errorUsingDELETEResponse(): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @return OK
   */
  errorUsingDELETE(): __Observable<{[key: string]: {}}> {
    return this.errorUsingDELETEResponse().pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @return OK
   */
  errorUsingOPTIONSResponse(): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @return OK
   */
  errorUsingOPTIONS(): __Observable<{[key: string]: {}}> {
    return this.errorUsingOPTIONSResponse().pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @return OK
   */
  errorUsingPATCHResponse(): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @return OK
   */
  errorUsingPATCH(): __Observable<{[key: string]: {}}> {
    return this.errorUsingPATCHResponse().pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }
}

module BasicErrorControllerService {
}

export { BasicErrorControllerService }
