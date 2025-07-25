import { AudioVttCue, OmakaseVttCueExtension } from '../types';
import { Observable } from 'rxjs';
import { VttCueParsed } from './model';
import { DownsampleStrategy, VttLoadOptions } from '../api/vtt-aware-api';
import { DownsampledVttFile } from './downsampled-vtt-file';
export declare class AudioVttFile extends DownsampledVttFile<AudioVttCue> {
    protected _supportedDownsampleStrategies: DownsampleStrategy[];
    protected constructor(url: string, options: VttLoadOptions);
    protected resolveDownsampledCue(index: number, startTime: number, endTime: number, cues: AudioVttCue[]): AudioVttCue;
    private getMaxMinSample;
    static create(url: string, options: VttLoadOptions): Observable<AudioVttFile>;
    protected mapCue(vttCueParsed: VttCueParsed, cueExtension: OmakaseVttCueExtension | undefined, index: number): AudioVttCue;
}
