import { BaseOmakaseRemoteVttFile } from './vtt-file';
import { OmakaseVttCue } from '../types';
import { DownsampleConfig, DownsampleStrategy, VttLoadOptions } from '../api/vtt-aware-api';
export declare abstract class DownsampledVttFile<T extends OmakaseVttCue> extends BaseOmakaseRemoteVttFile<T> {
    protected _downsampleConfig?: DownsampleConfig;
    protected _supportedDownsampleStrategies: DownsampleStrategy[];
    protected constructor(url: string, options: VttLoadOptions);
    protected downsampleCues(cues: T[]): T[];
    protected abstract resolveDownsampledCue(index: number, startTime: number, endTime: number, cues: T[]): T;
}
