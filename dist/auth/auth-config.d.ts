import { AxiosRequestConfig } from 'axios';
import { AuthenticationData } from '../authentication/model';
export declare class AuthConfig {
    static _authentication?: AuthenticationData;
    static set authentication(authentication: AuthenticationData | undefined);
    static get authentication(): AuthenticationData | undefined;
    static createAxiosRequestConfig(url: string, authentication?: AuthenticationData): AxiosRequestConfig;
}
