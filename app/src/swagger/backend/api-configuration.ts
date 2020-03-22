/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//ec2co-ecsel-1csbqjzp0mf6r-1878008528.eu-central-1.elb.amazonaws.com:8080';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
