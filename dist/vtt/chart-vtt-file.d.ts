import { BarChartVttCue, LineChartVttCue, OgChartVttCue, OmakaseVttCueExtension } from '../types';
import { Observable } from 'rxjs';
import { VttCueParsed } from './model';
import { DownsampleStrategy, VttLoadOptions } from '../api/vtt-aware-api';
import { DownsampledVttFile } from './downsampled-vtt-file';
export declare abstract class ChartVttFile<T extends LineChartVttCue | BarChartVttCue | OgChartVttCue> extends DownsampledVttFile<T> {
    protected _supportedDownsampleStrategies: DownsampleStrategy[];
    protected resolveDownsampledCue(index: number, startTime: number, endTime: number, cues: T[]): T;
    private getAggregateValue;
}
export declare class LineChartVttFile extends ChartVttFile<LineChartVttCue> {
    protected constructor(url: string, options: VttLoadOptions);
    static create(url: string, options: VttLoadOptions): Observable<LineChartVttFile>;
    protected mapCue(vttCueParsed: VttCueParsed, cueExtension: OmakaseVttCueExtension | undefined, index: number): LineChartVttCue;
}
export declare class BarChartVttFile extends ChartVttFile<BarChartVttCue> {
    protected constructor(url: string, options: VttLoadOptions);
    static create(url: string, options: VttLoadOptions): Observable<BarChartVttFile>;
    protected mapCue(vttCueParsed: VttCueParsed, cueExtension: OmakaseVttCueExtension | undefined, index: number): BarChartVttCue;
}
export declare class OgChartVttFile extends ChartVttFile<OgChartVttCue> {
    protected constructor(url: string, options: VttLoadOptions);
    static create(url: string, options: VttLoadOptions): Observable<OgChartVttFile>;
    protected mapCue(vttCueParsed: VttCueParsed, cueExtension: OmakaseVttCueExtension | undefined, index: number): OgChartVttCue;
}
