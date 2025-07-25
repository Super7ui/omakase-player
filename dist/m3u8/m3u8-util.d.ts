import { AuthenticationData } from '../authentication/model';
import { Observable } from 'rxjs';
import { M3u8File } from './m3u8-file';
export declare class M3u8Util {
    static fetchVttSegmentedConcat(m3u8Url: string, authentication?: AuthenticationData): Observable<string | undefined>;
    static fetchFromM3u8FileVttSegmentedConcat(m3u8File: M3u8File, authentication?: AuthenticationData): Observable<string | undefined>;
    static fetchSegmentedConcat(urls: string[], authentication?: AuthenticationData): Observable<string | undefined>;
    static concatSegmented(vttTexts: string[]): string | undefined;
}
