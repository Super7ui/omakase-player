import { Observable, Subject } from 'rxjs';
import { DownsampleConfig, VttAwareApi, VttLoadOptions } from '../api/vtt-aware-api';
import { OmakaseVttCue, OmakaseVttCueEvent } from '../types';
import { BaseTimelineLane, TimelineLaneConfig, TimelineLaneStyle } from './timeline-lane';
import { VttAdapter } from '../common/vtt-adapter';
import { AxiosRequestConfig } from 'axios';
import { OmakaseVttFile } from '../vtt';
import Konva from 'konva';
export interface VttTimelineLaneConfig<S extends TimelineLaneStyle> extends TimelineLaneConfig<S>, Partial<DownsampleConfig> {
    loadingAnimationEnabled?: boolean;
}
export declare abstract class VttTimelineLane<C extends VttTimelineLaneConfig<S>, S extends TimelineLaneStyle, Q extends OmakaseVttCue, T extends OmakaseVttFile<Q>> extends BaseTimelineLane<C, S> implements VttAwareApi<Q, T> {
    protected abstract readonly _vttAdapter: VttAdapter<T>;
    protected _onVideoCueEvent$?: Observable<OmakaseVttCueEvent<Q>>;
    protected _onPlayheadCueEvent$?: Observable<OmakaseVttCueEvent<Q>>;
    protected _onScrubberCueEvent$?: Observable<OmakaseVttCueEvent<Q>>;
    protected readonly _onSettleLayout$: Subject<void>;
    protected readonly _isVttLoading$: Subject<void>;
    protected readonly _isVttFinishedLoading$: Subject<void>;
    protected _timecodedGroup?: Konva.Group;
    protected _loadingGroup?: Konva.Group;
    protected _loadingAnimation?: Konva.Animation;
    constructor(config: C);
    get onVttFileLoaded$(): Observable<T>;
    get onVideoCueEvent$(): Observable<OmakaseVttCueEvent<Q>>;
    get onPlayheadCueEvent$(): Observable<OmakaseVttCueEvent<Q>>;
    get onScrubberCueEvent$(): Observable<OmakaseVttCueEvent<Q>>;
    get vttUrl(): string | undefined;
    get vttFile(): T | undefined;
    set vttUrl(vttUrl: string | undefined);
    set vttFile(vttFile: T | undefined);
    loadVtt(vttUrl: string, options?: VttLoadOptions): Observable<T | undefined>;
    getVttLoadOptions(axiosConfig?: AxiosRequestConfig): VttLoadOptions;
    protected createLoadingGroup(): Konva.Group;
    protected createLoadingGroupObjects(): Array<Konva.Shape | Konva.Group>;
    protected createLoadingAnimation(): Konva.Animation;
    protected startLoadingAnimation(): void;
    protected stopLoadingAnimation(): void;
    protected resolveLoadingAnimationColor(): string;
    private getCueEvents;
    destroy(): void;
}
