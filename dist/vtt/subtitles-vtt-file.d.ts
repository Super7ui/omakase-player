import { BaseOmakaseRemoteVttFile } from './vtt-file';
import { OmakaseVttCueExtension, SubtitlesVttCue } from '../types';
import { Observable } from 'rxjs';
import { VttCueParsed } from './model';
import { VttLoadOptions } from '../api/vtt-aware-api';
export declare class SubtitlesVttFile extends BaseOmakaseRemoteVttFile<SubtitlesVttCue> {
    protected constructor(url: string, options: VttLoadOptions);
    static create(url: string, options: VttLoadOptions): Observable<SubtitlesVttFile>;
    protected mapCue(vttCueParsed: VttCueParsed, cueExtension: OmakaseVttCueExtension | undefined, index: number): SubtitlesVttCue;
}
