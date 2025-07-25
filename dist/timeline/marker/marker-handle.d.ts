import { BaseKonvaComponent, ComponentConfig, KonvaComponent } from '../../layout/konva-component';
import Konva from 'konva';
import { Position } from '../../common';
import { MarkerHandleStyle, MarkerHandleVerticals } from './marker-types';
export interface MarkerHandleConfig<S extends MarkerHandleStyle> extends ComponentConfig<S> {
    x: number;
    editable: boolean;
    verticalsProviderFn: () => MarkerHandleVerticals;
    dragPositionConstrainerFn: (newPosition: Position) => Position;
}
export interface MarkerHandle<C extends MarkerHandleConfig<S>, S extends MarkerHandleStyle> extends KonvaComponent<C, S, Konva.Group> {
    getPosition(): Position;
    setPosition(position: Position): void;
    getHandleGroup(): Konva.Group;
    getSymbol(): Konva.Shape;
    setColor(color: string): void;
    onDrag: (markerHandleGroup: Konva.Group) => void;
    onDragEnd: (markerHandleGroup: Konva.Group) => void;
}
export declare abstract class BaseMarkerHandle<C extends MarkerHandleConfig<S>, S extends MarkerHandleStyle> extends BaseKonvaComponent<C, S, Konva.Group> implements MarkerHandle<C, S> {
    private _group;
    private _symbol;
    private _line;
    private _handleGroup;
    private _editable;
    private _verticalsProviderFn;
    private _dragPositionConstrainerFn;
    onDrag: (markerHandleGroup: Konva.Group) => void;
    onDragEnd: (markerHandleGroup: Konva.Group) => void;
    protected constructor(config: C);
    protected provideKonvaNode(): Konva.Group;
    protected abstract createSymbol(): Konva.Shape;
    getHandleGroup(): Konva.Group;
    getSymbol(): Konva.Shape;
    /**
     * Caution: returns group that is draggable
     */
    getPosition(): Position;
    setPosition(position: Position): void;
    setColor(color: string): void;
    set editable(value: boolean);
}
