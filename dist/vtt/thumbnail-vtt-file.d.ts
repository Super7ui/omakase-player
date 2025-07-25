import { OmakaseVttCueExtension, ThumbnailVttCue } from '../types';
import { Observable } from 'rxjs';
import { VttCueParsed } from './model';
import { DownsampleStrategy, VttLoadOptions } from '../api/vtt-aware-api';
import { DownsampledVttFile } from './downsampled-vtt-file';
export declare class ThumbnailVttFile extends DownsampledVttFile<ThumbnailVttCue> {
    protected _supportedDownsampleStrategies: DownsampleStrategy[];
    protected constructor(url: string, options: VttLoadOptions);
    protected resolveDownsampledCue(index: number, startTime: number, endTime: number, cues: ThumbnailVttCue[]): ThumbnailVttCue;
    static create(url: string, options: VttLoadOptions): Observable<ThumbnailVttFile>;
    protected mapCue(vttCueParsed: VttCueParsed, cueExtension: OmakaseVttCueExtension | undefined, index: number): ThumbnailVttCue;
    private resolveThumbnailUrl;
    private createThumbnailUrlFromRelativeUrl;
    private isUrlAbsolute;
}
