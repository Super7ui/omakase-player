import { Observable, Subject } from 'rxjs';
import { ClickEvent, MouseEnterEvent, MouseLeaveEvent } from '../types';
import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle, KonvaComponent } from '../layout/konva-component';
import Konva from 'konva';
import { OnMeasurementsChange } from '../common';
export interface TimelineNodeStyle {
    backgroundFill?: string;
    backgroundOpacity?: number;
    backgroundBorderRadius?: number | number[];
}
export interface TimelineNodeConfig<S extends TimelineNodeStyle> extends ComponentConfig<S> {
    /**
     * If set to true node listens to events
     */
    listening?: boolean;
}
/**
 * Custom component that can be added to Timeline
 */
export interface TimelineNode extends KonvaComponent<TimelineNodeConfig<TimelineNodeStyle>, TimelineNodeStyle, Konva.Group>, OnMeasurementsChange {
    /**
     * Fires on mouse click
     */
    onClick$: Observable<ClickEvent>;
    /**
     * Fires on mouse enter
     */
    onMouseEnter$: Observable<MouseEnterEvent>;
    /**
     * Fires on mouse leave
     */
    onMouseLeave$: Observable<MouseLeaveEvent>;
}
export declare abstract class BaseTimelineNode<C extends TimelineNodeConfig<S>, S extends TimelineNodeStyle> extends BaseKonvaComponent<C, S, Konva.Group> implements TimelineNode {
    readonly onClick$: Subject<ClickEvent>;
    readonly onMouseEnter$: Subject<MouseEnterEvent>;
    readonly onMouseLeave$: Subject<MouseLeaveEvent>;
    protected _group: Konva.Group;
    protected _bgRect: Konva.Rect;
    protected constructor(config: C);
    onMeasurementsChange(): void;
    protected provideKonvaNode(): Konva.Group;
    protected onStyleChange(): void;
    destroy(): void;
}
export interface TextLabelStyle extends TimelineNodeStyle {
    fontSize?: number;
    fontFamily?: string;
    fontStyle?: string;
    fill?: string;
    align?: 'left' | 'right' | 'center';
    verticalAlign?: 'top' | 'middle' | 'bottom';
    wrap?: 'word' | 'char' | 'none';
    padding?: number;
    offsetX?: number;
    offsetY?: number;
    opacity?: number;
    textAreaStretch?: boolean;
}
export interface TextLabelConfig extends TimelineNodeConfig<TextLabelStyle> {
    /**
     * Text to display
     */
    text?: string;
}
/**
 * Timeline text label. Can be added  to timeline lane. {@link TimelineLaneApi}
 */
export declare class TextLabel extends BaseTimelineNode<TextLabelConfig, TextLabelStyle> {
    private _konvaText;
    constructor(config: ConfigWithOptionalStyle<TextLabelConfig>);
    onMeasurementsChange(): void;
    protected onStyleChange(): void;
    /**
     * Sets new text to display
     * @param value
     */
    set text(value: string);
    get text(): string;
}
export interface ImageButtonStyle extends TimelineNodeStyle {
}
export type ImageButtonImageConfig = {
    /**
     * Image source
     */
    src: string;
    /**
     * Image width
     */
    width?: number;
    /**
     * Image height
     */
    height?: number;
};
export interface ImageButtonConfig extends TimelineNodeConfig<ImageButtonStyle>, ImageButtonImageConfig {
    /**
     * Image source
     */
    src: string;
    /**
     * Image width
     */
    width?: number;
    /**
     * Image height
     */
    height?: number;
}
/**
 * Timeline image button. Can be added  to timeline lane. {@link TimelineLaneApi}
 */
export declare class ImageButton extends BaseTimelineNode<ImageButtonConfig, ImageButtonStyle> {
    protected _konvaImage?: Konva.Image;
    protected _loadImageQueue: Subject<ImageButtonImageConfig>;
    constructor(config: ConfigWithOptionalStyle<ImageButtonConfig>);
    private loadImage;
    /**
     * Sets new image to display
     * @param config
     */
    setImage(config: ImageButtonImageConfig): void;
}
