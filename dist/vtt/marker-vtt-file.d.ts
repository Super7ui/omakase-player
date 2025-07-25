import { BaseOmakaseRemoteVttFile } from './vtt-file';
import { MarkerVttCue, OmakaseVttCueExtension } from '../types';
import { Observable } from 'rxjs';
import { VttCueParsed } from './model';
import { VttLoadOptions } from '../api/vtt-aware-api';
export declare class MarkerVttFile extends BaseOmakaseRemoteVttFile<MarkerVttCue> {
    protected constructor(url: string, options: VttLoadOptions);
    static create(url: string, options: VttLoadOptions): Observable<MarkerVttFile>;
    protected mapCue(vttCueParsed: VttCueParsed, cueExtension: OmakaseVttCueExtension | undefined, index: number): MarkerVttCue;
}
