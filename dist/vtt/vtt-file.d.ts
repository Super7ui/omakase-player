import { Observable } from 'rxjs';
import { OmakaseVttCue, OmakaseVttCueExtension } from '../types';
import { VttCueParsed, VttFileParsed } from './model';
import { VttLoadOptions } from '../api/vtt-aware-api';
export type OmakaseWebVttExtensionVersion = 'V1.0';
export interface OmakaseRemoteVttFile<T extends OmakaseVttCue> extends OmakaseVttFile<T> {
    get url(): string;
}
export interface OmakaseVttFile<T extends OmakaseVttCue> {
    get extensionVersion(): OmakaseWebVttExtensionVersion | undefined;
    get cues(): T[];
    get hasCues(): boolean;
    /**
     * @returns first cue that intersects given time frame
     * @param time
     */
    findCue(time: number): T | undefined;
    /**
     * @returns cues that intersect given time frame
     * @param startTime
     * @param endTime
     */
    findCues(startTime: number, endTime: number | undefined): T[];
}
export declare abstract class BaseOmakaseVttFile<T extends OmakaseVttCue> implements OmakaseVttFile<T> {
    protected _extensionVersion?: OmakaseWebVttExtensionVersion;
    protected _cues: T[];
    protected _cuesByStartTime: Map<number, T[]>;
    protected _cuesStartTimesSorted: number[];
    protected constructor();
    protected abstract mapCue(vttCueParsed: VttCueParsed, cueExtension: OmakaseVttCueExtension | undefined, index: number): T;
    protected parseAndPopulate(vttText: string): void;
    protected resolveExtensionVersion(vttFileParsed: VttFileParsed): OmakaseWebVttExtensionVersion | undefined;
    /**
     * Prevents cues (and memory) ddos
     *
     * @param cues
     * @protected
     */
    protected downsampleCues(cues: T[]): T[];
    get cues(): T[];
    get hasCues(): boolean;
    get extensionVersion(): OmakaseWebVttExtensionVersion | undefined;
    findCue(time: number): T | undefined;
    findCues(startTime: number, endTime: number): T[];
    findNearestCue(time: number): T | undefined;
    /**
     * Binary search for closest cue index in _cuesStartTimesSorted
     * @param time
     * @private
     */
    private findCuesStartTimesFirstIndex;
    private refreshSorted;
    private getCueDistance;
}
export declare abstract class BaseOmakaseRemoteVttFile<T extends OmakaseVttCue> extends BaseOmakaseVttFile<T> implements OmakaseRemoteVttFile<T> {
    private _url;
    private _axiosConfig?;
    protected constructor(url: string, options: VttLoadOptions);
    fetch(): Observable<boolean>;
    get url(): string;
}
