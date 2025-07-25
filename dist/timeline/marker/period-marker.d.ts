import Konva from 'konva';
import { BaseMarker, MarkerConfig } from './marker';
import { PeriodMarkerChangeEvent, PeriodObservation } from '../../types';
import { BaseMarkerHandle, MarkerHandleConfig } from './marker-handle';
import { Timeline } from '../timeline';
import { MarkerLane } from './marker-lane';
import { MarkerHandleStyle, MarkerStyle } from './marker-types';
import { ConfigWithOptionalStyle } from '../../layout';
export interface PeriodMarkerHandleStyle extends MarkerHandleStyle {
    periodMarkerHandleType: 'start' | 'end';
}
export interface PeriodMarkerHandleConfig extends MarkerHandleConfig<PeriodMarkerHandleStyle> {
}
export declare class PeriodMarkerHandle extends BaseMarkerHandle<PeriodMarkerHandleConfig, PeriodMarkerHandleStyle> {
    constructor(config: PeriodMarkerHandleConfig);
    protected createSymbol(): Konva.Shape;
}
export interface PeriodMarkerStyle extends MarkerStyle {
    selectedAreaOpacity: number;
    markerHandleAreaOpacity: number;
}
export interface PeriodMarkerConfig extends MarkerConfig<PeriodObservation, PeriodMarkerStyle> {
}
export declare class PeriodMarker extends BaseMarker<PeriodObservation, PeriodMarkerConfig, PeriodMarkerStyle, PeriodMarkerChangeEvent> {
    private _startMarkerHandle?;
    private _endMarkerHandle?;
    private _selectedAreaRect?;
    private _markerHandleRect?;
    private _previousTimeObservation;
    constructor(config: ConfigWithOptionalStyle<PeriodMarkerConfig>);
    attachToTimeline(timeline: Timeline, markerLane: MarkerLane): void;
    private initAll;
    protected onObservationChange(): void;
    private initStartMarkerHandle;
    private initEndMarkerHandle;
    private initSelectedAreaRect;
    refreshTimelinePosition(): void;
    private settleAreaVerticals;
    private settleAreaHorizontals;
    private getMarkerHandleRectVerticals;
    private hasTimeObservationStart;
    private hasTimeObservationEnd;
    set timeObservation(value: PeriodObservation);
    get timeObservation(): PeriodObservation;
    set editable(value: boolean);
    get editable(): boolean;
}
