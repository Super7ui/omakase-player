import { BaseTimelineLane, TimelineLaneConfig, TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import { Subject } from 'rxjs';
import { ClickEvent, MouseEnterEvent, MouseLeaveEvent, MouseMoveEvent, MouseOutEvent, MouseOverEvent } from '../../types';
import { Timeline } from '../timeline';
import { VideoControllerApi } from '../../video';
import { ScrubberLaneApi } from '../../api';
export interface ScrubberLaneConfig extends TimelineLaneConfig<ScrubberLaneStyle> {
}
export interface ScrubberLaneStyle extends TimelineLaneStyle {
    tickDivisor: number;
    tickDivisionMinWidth: number;
    tickFill: string;
    tickHeight: number;
    divisionTickHeight: number;
    timecodeShowFirst: boolean;
    timecodeFontSize: number;
    timecodeFill: string;
}
export declare class ScrubberLane extends BaseTimelineLane<ScrubberLaneConfig, ScrubberLaneStyle> implements ScrubberLaneApi {
    readonly onClick$: Subject<ClickEvent>;
    readonly onMouseEnter$: Subject<MouseEnterEvent>;
    readonly onMouseOver$: Subject<MouseOverEvent>;
    readonly onMouseMove$: Subject<MouseMoveEvent>;
    readonly onMouseOut$: Subject<MouseOutEvent>;
    readonly onMouseLeave$: Subject<MouseLeaveEvent>;
    private _tickDivisionWidth?;
    private _tickTotalDivisions?;
    private _timecodedGroup?;
    private _timecodedEventCatcher?;
    private _ticksGroup?;
    constructor(config: TimelineLaneConfigDefaultsExcluded<ScrubberLaneConfig>);
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    protected settleLayout(): void;
    onStyleChange(): void;
    destroy(): void;
    clearContent(): void;
    refreshTimeDivisions(forceCreate?: boolean): void;
    private resolveTimeDivisionWidth;
}
