import Konva from 'konva';
import { TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import { MarkerLaneApi } from '../../api';
import { PeriodMarker, PeriodMarkerConfig } from './period-marker';
import { MomentMarker, MomentMarkerConfig } from './moment-marker';
import { MarkerCreateEvent, MarkerDeleteEvent, MarkerFocusEvent, MarkerInitEvent, MarkerSelectedEvent, MarkerUpdateEvent, MarkerVttCue } from '../../types';
import { Subject } from 'rxjs';
import { Timeline } from '../timeline';
import { Marker } from './marker';
import { MarkerVttFile } from '../../vtt';
import { AxiosRequestConfig } from 'axios';
import { MarkerStyle } from './marker-types';
import { VideoControllerApi } from '../../video';
import { VttAdapter, VttAdapterConfig } from '../../common/vtt-adapter';
import { VttTimelineLane, VttTimelineLaneConfig } from '../vtt-timeline-lane';
import { ConfigWithOptionalStyle } from '../../layout';
export interface MarkerLaneConfig extends VttTimelineLaneConfig<MarkerLaneStyle>, VttAdapterConfig<MarkerVttFile> {
    axiosConfig?: AxiosRequestConfig;
    markerCreateFn?: (marker: MarkerVttCue, index: number) => Marker;
    markerProcessFn?: (marker: Marker, index: number) => void;
}
export interface MarkerLaneStyle extends TimelineLaneStyle {
    markerStyle: Partial<MarkerStyle>;
}
export declare class MarkerLane extends VttTimelineLane<MarkerLaneConfig, MarkerLaneStyle, MarkerVttCue, MarkerVttFile> implements MarkerLaneApi {
    readonly onMarkerFocus$: Subject<MarkerFocusEvent>;
    readonly onMarkerCreate$: Subject<MarkerCreateEvent>;
    readonly onMarkerDelete$: Subject<MarkerDeleteEvent>;
    readonly onMarkerUpdate$: Subject<MarkerUpdateEvent>;
    readonly onMarkerSelected$: Subject<MarkerSelectedEvent>;
    readonly onMarkerInit$: Subject<MarkerInitEvent>;
    protected readonly _vttAdapter: VttAdapter<MarkerVttFile>;
    protected _markerCreateFn?: (cue: MarkerVttCue, index: number) => Marker;
    protected _markerProcessFn?: (marker: Marker, index: number) => void;
    protected _timecodedSpanningGroup?: Konva.Group;
    protected _markers: Marker[];
    protected _markersById: Map<string, Marker>;
    protected _markerInFocus?: Marker;
    constructor(config: TimelineLaneConfigDefaultsExcluded<MarkerLaneConfig>);
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    protected settleLayout(): void;
    clearContent(): void;
    get name(): string;
    createMomentMarker(config: ConfigWithOptionalStyle<MomentMarkerConfig>): MomentMarker;
    createPeriodMarker(config: ConfigWithOptionalStyle<PeriodMarkerConfig>): PeriodMarker;
    addMarker(marker: Marker): Marker;
    removeAllMarkers(): void;
    removeMarker(id: string): void;
    getMarker(id: string): Marker | undefined;
    getMarkers(): Marker[];
    focusMarker(id: string): void;
    getMarkerInFocus(): Marker | undefined;
    toggleMarker(markerId: string): void;
    getSelectedMarker(): Marker | undefined;
    updateMarker(markerId: string, updateData: Partial<Marker>): void;
    private moveToTop;
    private clearItems;
    private createEntities;
    destroy(): void;
}
