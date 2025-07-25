import { AxiosRequestConfig, AxiosResponse } from 'axios';
export declare function httpGet<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
export declare function formatAuthenticationHeaders(url: string): {
    [p: string]: string;
} | undefined;
