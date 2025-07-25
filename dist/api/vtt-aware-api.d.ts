import { AxiosRequestConfig } from 'axios';
import { OmakaseVttCue, OmakaseVttCueEvent } from '../types';
import { Observable } from 'rxjs';
import { OmakaseVttFile } from '../vtt';
export interface VttAwareApi<Q extends OmakaseVttCue, T extends OmakaseVttFile<Q>> {
    /**
     * URL pointing to the VTT file
     */
    get vttUrl(): string | undefined;
    set vttUrl(vttUrl: string | undefined);
    /**
     * VTT file content
     */
    get vttFile(): T | undefined;
    set vttFile(vttFile: T | undefined);
    /**
     * Fires when VTT file is loaded
     * @readonly
     */
    onVttFileLoaded$: Observable<T>;
    /**
     * Fires on VTT cue entry/exit on video time change
     * @readonly
     */
    onVideoCueEvent$: Observable<OmakaseVttCueEvent<Q>>;
    /**
     * Fires on VTT cue entry/exit on playhead drag
     * @readonly
     */
    onPlayheadCueEvent$: Observable<OmakaseVttCueEvent<Q>>;
    /**
     * Fires on VTT cue entry/exit on scrubber move
     * @readonly
     */
    onScrubberCueEvent$: Observable<OmakaseVttCueEvent<Q>>;
    /**
     * Loads data from VTT file
     * @param vttUrl
     * @param options
     */
    loadVtt(vttUrl: string, options?: VttLoadOptions): Observable<T | undefined>;
}
export type DownsampleStrategy = 'none' | 'drop' | 'max' | 'min' | 'avg';
export interface DownsampleConfig {
    /**
     * Period for downsampling in milliseconds
     */
    downsamplePeriod: number;
    /**
     * Strategy for downsampling (supported values: none, drop, min, max, and avg)
     */
    downsampleStrategy: DownsampleStrategy;
}
export interface VttLoadOptions {
    /**
     * Axios configuration for VTT fetch request
     */
    axiosConfig?: AxiosRequestConfig;
    /**
     * Donwsampling configuration
     */
    downsampleConfig?: DownsampleConfig;
}
