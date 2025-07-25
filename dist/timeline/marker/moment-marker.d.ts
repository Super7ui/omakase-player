import Konva from 'konva';
import { BaseMarker, MarkerConfig } from './marker';
import { MomentMarkerChangeEvent, MomentObservation } from '../../types';
import { BaseMarkerHandle, MarkerHandleConfig } from './marker-handle';
import { MarkerLane } from './marker-lane';
import { Timeline } from '../timeline';
import { MarkerHandleStyle, MarkerStyle } from './marker-types';
import { ConfigWithOptionalStyle } from '../../layout';
export interface MomentMarkerHandleStyle extends MarkerHandleStyle {
}
export interface MomentMarkerHandleConfig extends MarkerHandleConfig<MomentMarkerHandleStyle> {
}
export declare class MomentMarkerHandle extends BaseMarkerHandle<MomentMarkerHandleConfig, MomentMarkerHandleStyle> {
    constructor(config: MomentMarkerHandleConfig);
    protected createSymbol(): Konva.Shape;
}
export interface MomentMarkerStyle extends MarkerStyle {
}
export interface MomentMarkerConfig extends MarkerConfig<MomentObservation, MomentMarkerStyle> {
}
export declare class MomentMarker extends BaseMarker<MomentObservation, MomentMarkerConfig, MomentMarkerStyle, MomentMarkerChangeEvent> {
    private _markerHandle?;
    private _maxOpacity?;
    private _previousTimeObservation;
    constructor(config: ConfigWithOptionalStyle<MomentMarkerConfig>);
    attachToTimeline(timeline: Timeline, markerLane: MarkerLane): void;
    private initMarkerHandle;
    private createMarkerHandle;
    protected onObservationChange(): void;
    refreshTimelinePosition(): void;
    set editable(value: boolean);
    get editable(): boolean;
    get maxOpacity(): number | undefined;
}
