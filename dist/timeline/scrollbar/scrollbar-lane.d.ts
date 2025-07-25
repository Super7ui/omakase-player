import { BaseTimelineLane, TimelineLaneConfig, TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import { KonvaFlexGroup } from '../../layout/konva-flex';
import { Timeline } from '../timeline';
import { Scrollbar } from './scrollbar';
import Konva from 'konva';
import { VideoControllerApi } from '../../video';
export interface ScrollbarLaneConfig extends TimelineLaneConfig<ScrollbarLaneStyle> {
}
export interface ScrollbarLaneStyle extends TimelineLaneStyle {
    scrollbarWidth?: number;
    scrollbarHeight?: number;
    scrollbarBackgroundFill?: string;
    scrollbarBackgroundFillOpacity?: number;
    scrollbarHandleBarFill?: string;
    scrollbarHandleBarOpacity?: number;
    scrollbarHandleOpacity?: number;
}
export declare class ScrollbarLane extends BaseTimelineLane<ScrollbarLaneConfig, ScrollbarLaneStyle> {
    protected _contentGroup?: Konva.Group;
    protected _contentFlexGroup?: KonvaFlexGroup;
    protected _scrollbar?: Scrollbar;
    private _timelineZoomInProgress;
    constructor(config: TimelineLaneConfigDefaultsExcluded<ScrollbarLaneConfig>);
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    protected settleLayout(): void;
    destroy(): void;
}
