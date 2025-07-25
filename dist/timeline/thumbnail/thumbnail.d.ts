import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle } from '../../layout/konva-component';
import Konva from 'konva';
import { Dimension, HasRectMeasurement, OnMeasurementsChange, Position, RectMeasurement } from '../../common/measurement';
import { Comparable, ThumbnailEvent, ThumbnailVttCue } from '../../types';
import { Subject } from 'rxjs';
export interface ThumbnailStyle {
    x: number;
    y: number;
    width: number;
    height: number;
    stroke: string;
    strokeWidth: number;
    visible: boolean;
}
export interface ThumbnailConfig extends ComponentConfig<ThumbnailStyle> {
    listening: boolean;
}
export declare class Thumbnail extends BaseKonvaComponent<ThumbnailConfig, ThumbnailStyle, Konva.Group> implements OnMeasurementsChange, HasRectMeasurement, Comparable<Thumbnail> {
    readonly onClick$: Subject<ThumbnailEvent>;
    readonly onMouseOver$: Subject<ThumbnailEvent>;
    readonly onMouseMove$: Subject<ThumbnailEvent>;
    readonly onMouseOut$: Subject<ThumbnailEvent>;
    readonly onMouseLeave$: Subject<ThumbnailEvent>;
    private _cue?;
    private _group;
    private _bgRect;
    private _image?;
    constructor(config: Partial<ConfigWithOptionalStyle<ThumbnailConfig>>);
    protected provideKonvaNode(): Konva.Group;
    destroy(): void;
    onMeasurementsChange(): void;
    setImage(image: Konva.Image): void;
    setVisible(visible: boolean): void;
    setPosition(position: Position): void;
    setVisibleAndX(visible: boolean, x: number): void;
    getPosition(): Position;
    getDimension(): Dimension;
    setDimension(dimension: Dimension): void;
    getRect(): RectMeasurement;
    compareTo(o: Thumbnail): number;
    set cue(value: ThumbnailVttCue | undefined);
    get cue(): ThumbnailVttCue | undefined;
    get image(): Konva.Image | undefined;
}
