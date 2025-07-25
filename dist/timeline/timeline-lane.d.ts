import Konva from 'konva';
import { Position, RectMeasurement, StyleAdapter } from '../common';
import { Timeline } from './timeline';
import { Observable, Subject } from 'rxjs';
import { VideoControllerApi } from '../video';
import { KonvaFlexGroup } from '../layout/konva-flex';
import { TextLabel, TimelineNode } from './timeline-component';
import { TimelineLaneApi } from '../api';
import { SelectRequired, WithOptionalPartial, WithRequired } from '../types';
import { DownsampleConfig } from '../api/vtt-aware-api';
/**
 * Base configuration for classes that extend {@link BaseTimelineLane}
 */
export interface TimelineLaneConfig<S extends TimelineLaneStyle> {
    style: S;
    id?: string;
    description?: string;
    layoutEasingDuration?: number;
    minimized?: boolean;
}
/**
 * Base style for classes that extend {@link BaseTimelineLane}
 */
export interface TimelineLaneStyle {
    height: number;
    marginBottom?: number;
    backgroundFill?: string;
    backgroundOpacity?: number;
    descriptionTextFill?: string;
    descriptionTextFontSize?: number;
    descriptionTextFontStyle?: string;
    descriptionTextYOffset?: number;
    leftBackgroundFill?: string;
    leftBackgroundOpacity?: number;
    rightBackgroundFill?: string;
    rightBackgroundOpacity?: number;
}
export declare const TIMELINE_LANE_STYLE_DEFAULT: TimelineLaneStyle;
export declare const TIMELINE_LANE_CONFIG_DEFAULT: WithRequired<TimelineLaneConfig<TimelineLaneStyle>, 'layoutEasingDuration'>;
export declare const VTT_DOWNSAMPLE_CONFIG_DEFAULT: DownsampleConfig;
type DefaultStyleOverrides = Pick<WithOptionalPartial<TimelineLaneConfig<any>, 'style'>, 'style'>;
export type TimelineLaneConfigDefaultsExcluded<T extends TimelineLaneConfig<any>> = Omit<T, keyof SelectRequired<TimelineLaneConfig<any>>> & DefaultStyleOverrides;
export declare function timelineLaneComposeConfig<T extends Pick<TimelineLaneConfig<any>, 'style'>, K extends DefaultStyleOverrides>(configDefault: T, config: K): T & K;
export interface TimelineLaneComponentConfig {
    /**
     * {@link TimelineNode} to add
     */
    timelineNode: TimelineNode;
    /**
     * Justify to start or end
     */
    justify: 'start' | 'end';
    /**
     * Width
     */
    width: number;
    /**
     * Height
     */
    height: number;
    /**
     * Margins: [top, right, bottom, left]
     */
    margin?: number[];
}
export interface TimelineCueSubscriptionConfig {
    /**
     * How often (in seconds) to update cues array
     */
    interval?: number;
    /**
     * Delay (in seconds) to remove cue from array after passing the endTime
     */
    removeDelay?: number;
    /**
     * Maximum count of cues in the array
     */
    maxCount?: number;
}
export declare abstract class BaseTimelineLane<C extends TimelineLaneConfig<S>, S extends TimelineLaneStyle> implements TimelineLaneApi {
    protected readonly _destroyed$: Subject<void>;
    protected _config: C;
    protected _styleAdapter: StyleAdapter<S>;
    protected _id: string;
    protected _description?: string;
    protected _leftBgRect: Konva.Rect;
    protected _rightBgRect: Konva.Rect;
    protected _mainLeftFlexGroup: KonvaFlexGroup;
    protected _mainRightFlexGroup: KonvaFlexGroup;
    protected _mainLeftDescription?: KonvaFlexGroup;
    protected _mainLeftStartJustified: KonvaFlexGroup;
    protected _mainLeftEndJustified: KonvaFlexGroup;
    protected _descriptionTextLabel?: TextLabel;
    protected _timeline?: Timeline;
    protected _videoController?: VideoControllerApi;
    protected constructor(config: C);
    protected abstract settleLayout(): void;
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    protected createMainLeftFlexGroup(): KonvaFlexGroup;
    protected createMainRightFlexGroup(): KonvaFlexGroup;
    onMeasurementsChange(): void;
    protected onStyleChange(): void;
    updateLayoutDimensions(refreshLayout?: boolean): void;
    clearContent(): void;
    getTimecodedRect(): RectMeasurement;
    getTimecodedPointerPosition(): Position | undefined;
    getTimecodedPointerPositionTime(): number;
    get id(): string;
    get mainLeftFlexGroup(): KonvaFlexGroup;
    get mainRightFlexGroup(): KonvaFlexGroup;
    addTimelineNode(config: TimelineLaneComponentConfig): TimelineNode;
    isMinimized(): boolean;
    minimizeInternal(refreshLayout?: boolean): void;
    maximizeInternal(refreshLayout?: boolean): void;
    minimize(): void;
    maximize(): void;
    minimizeEased(): Observable<void>;
    maximizeEased(): Observable<void>;
    toggleMinimizeMaximize(): void;
    toggleMinimizeMaximizeEased(): Observable<void>;
    get style(): S;
    set style(value: Partial<S>);
    set description(value: string);
    destroy(): void;
}
export {};
