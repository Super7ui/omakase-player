import { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
import { AuthenticationData } from '../authentication/model';
import { Manifest } from './m3u8.model';
export declare abstract class BaseM3u8File {
    private _url;
    private _axiosConfig?;
    private _manifest?;
    protected constructor(url: string, axiosConfig?: AxiosRequestConfig);
    fetch(): Observable<boolean>;
    get manifest(): Manifest | undefined;
    get url(): string;
}
export declare class M3u8File extends BaseM3u8File {
    static create(url: string, authentication?: AuthenticationData): Observable<M3u8File>;
}
