import { Position } from '../../common';
import { BaseKonvaComponent, ComponentConfig, KonvaComponent } from '../../layout/konva-component';
import Konva from 'konva';
import { MarkerLane } from './marker-lane';
import { MarkerChangeEvent, MarkerEvent, TimeObservation } from '../../types';
import { Observable, Subject } from 'rxjs';
import { Timeline } from '../timeline';
import { MarkerHandleVerticals, MarkerStyle } from './marker-types';
import { MarkerApi } from '../../api';
export interface MarkerConfig<T extends TimeObservation, S extends MarkerStyle> extends ComponentConfig<S> {
    timeObservation: T;
    id?: string;
    text?: string;
    editable?: boolean;
}
export interface Marker extends MarkerApi, KonvaComponent<MarkerConfig<any, any>, MarkerStyle, Konva.Group> {
    onClick$: Observable<MarkerEvent>;
    onMouseEnter$: Observable<MarkerEvent>;
    onMouseLeave$: Observable<MarkerEvent>;
    onMouseOver$: Observable<MarkerEvent>;
    onMouseOut$: Observable<MarkerEvent>;
    refreshTimelinePosition(): void;
    get timeObservation(): TimeObservation;
    set timeObservation(timeObservation: TimeObservation);
    get editable(): boolean;
    set editable(editable: boolean);
    get text(): string | undefined;
    get style(): MarkerStyle;
    set style(s: MarkerStyle);
}
export declare abstract class BaseMarker<T extends TimeObservation, C extends MarkerConfig<T, S>, S extends MarkerStyle, E extends MarkerChangeEvent> extends BaseKonvaComponent<C, S, Konva.Group> implements Marker {
    readonly onClick$: Subject<MarkerEvent>;
    readonly onMouseEnter$: Subject<MarkerEvent>;
    readonly onMouseLeave$: Subject<MarkerEvent>;
    readonly onMouseOver$: Subject<MarkerEvent>;
    readonly onMouseOut$: Subject<MarkerEvent>;
    readonly onDestroy$: Subject<MarkerEvent>;
    readonly onChange$: Subject<E>;
    protected _group: Konva.Group;
    protected _timeline?: Timeline;
    protected _markerLane?: MarkerLane;
    protected _id: string;
    protected _timeObservation: T;
    protected _editable: boolean;
    private _text?;
    protected _data?: Record<string, any>;
    protected constructor(config: C);
    protected provideKonvaNode(): Konva.Group;
    protected abstract onObservationChange(): void;
    abstract refreshTimelinePosition(): void;
    destroy(): void;
    attachToTimeline(timeline: Timeline, markerLane: MarkerLane): void;
    protected getMarkerHandleVerticals(): MarkerHandleVerticals;
    protected onDragMove(newPosition: Position): Position;
    get timeObservation(): T;
    set timeObservation(value: T);
    get editable(): boolean;
    set editable(value: boolean);
    get id(): string;
    get text(): string | undefined;
    get name(): string | undefined;
    set name(name: string | undefined);
    get data(): Record<string, any> | undefined;
    set data(data: Record<string, any> | undefined);
}
