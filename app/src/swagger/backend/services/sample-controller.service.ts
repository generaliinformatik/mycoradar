/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Sample Controller
 */
@Injectable({
  providedIn: 'root',
})
class SampleControllerService extends __BaseService {
  static readonly homeUsingGETPath = '/';
  static readonly addContactUsingPOSTPath = '/addContact';
  static readonly addContactWithServerTimeUsingPOSTPath = '/addContactWithServerTime';
  static readonly throwExceptionUsingGETPath = '/exception';
  static readonly getContactUsingGETPath = '/getContact';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * home
   * @return OK
   */
  homeUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * home
   * @return OK
   */
  homeUsingGET(): __Observable<string> {
    return this.homeUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * addContact
   * @param params The `SampleControllerService.AddContactUsingPOSTParams` containing the following parameters:
   *
   * - `device_id`: device_id
   *
   * - `date_positive`: date_positive
   *
   * @return OK
   */
  addContactUsingPOSTResponse(params: SampleControllerService.AddContactUsingPOSTParams): __Observable<__StrictHttpResponse<'100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511'>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.deviceId != null) __params = __params.set('device_id', params.deviceId.toString());
    if (params.datePositive != null) __params = __params.set('date_positive', params.datePositive.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/addContact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<'100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511'>;
      })
    );
  }
  /**
   * addContact
   * @param params The `SampleControllerService.AddContactUsingPOSTParams` containing the following parameters:
   *
   * - `device_id`: device_id
   *
   * - `date_positive`: date_positive
   *
   * @return OK
   */
  addContactUsingPOST(params: SampleControllerService.AddContactUsingPOSTParams): __Observable<'100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511'> {
    return this.addContactUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as '100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511')
    );
  }

  /**
   * addContactWithServerTime
   * @param device_id device_id
   * @return OK
   */
  addContactWithServerTimeUsingPOSTResponse(deviceId: string): __Observable<__StrictHttpResponse<'100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511'>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (deviceId != null) __params = __params.set('device_id', deviceId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/addContactWithServerTime`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<'100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511'>;
      })
    );
  }
  /**
   * addContactWithServerTime
   * @param device_id device_id
   * @return OK
   */
  addContactWithServerTimeUsingPOST(deviceId: string): __Observable<'100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511'> {
    return this.addContactWithServerTimeUsingPOSTResponse(deviceId).pipe(
      __map(_r => _r.body as '100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511')
    );
  }

  /**
   * throwException
   * @return OK
   */
  throwExceptionUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/exception`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * throwException
   * @return OK
   */
  throwExceptionUsingGET(): __Observable<string> {
    return this.throwExceptionUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * getContact
   * @param device_ids device_ids
   * @return OK
   */
  getContactUsingGETResponse(deviceIds: Array<string>): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (deviceIds || []).forEach(val => {if (val != null) __params = __params.append('device_ids', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/getContact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * getContact
   * @param device_ids device_ids
   * @return OK
   */
  getContactUsingGET(deviceIds: Array<string>): __Observable<boolean> {
    return this.getContactUsingGETResponse(deviceIds).pipe(
      __map(_r => _r.body as boolean)
    );
  }
}

module SampleControllerService {

  /**
   * Parameters for addContactUsingPOST
   */
  export interface AddContactUsingPOSTParams {

    /**
     * device_id
     */
    deviceId: string;

    /**
     * date_positive
     */
    datePositive: string;
  }
}

export { SampleControllerService }
