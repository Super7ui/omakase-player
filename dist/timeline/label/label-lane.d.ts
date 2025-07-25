import { BaseTimelineLane, TimelineLaneConfig, TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import { KonvaFlexGroup } from '../../layout/konva-flex';
import { Timeline } from '../timeline';
import { TextLabel } from '../timeline-component';
import { VideoControllerApi } from '../../video';
export interface LabelLaneConfig extends TimelineLaneConfig<LabelLaneStyle> {
    text: string;
}
export interface LabelLaneStyle extends TimelineLaneStyle {
    textFill: string;
    textFontSize: number;
    textFontStyle?: string;
    textAreaStretch?: boolean;
}
export declare class LabelLane extends BaseTimelineLane<LabelLaneConfig, LabelLaneStyle> {
    protected _contentFlexGroup?: KonvaFlexGroup;
    protected _textLabel?: TextLabel;
    constructor(config: TimelineLaneConfigDefaultsExcluded<LabelLaneConfig>);
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    onStyleChange(): void;
    protected settleLayout(): void;
    clearContent(): void;
    destroy(): void;
}
