import { MediaInfoResult } from 'mediainfo.js';
import { Observable } from 'rxjs';
export declare class MediaInfoUtil {
    private constructor();
    private static createMediaInfo;
    static findFrameRate(mediaInfoResult: MediaInfoResult): number | undefined;
    static analyze(src: string): Observable<MediaInfoResult>;
    static analyzeFrameRate(src: string): Observable<number | undefined>;
}
