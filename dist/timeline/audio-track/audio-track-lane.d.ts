import { TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import Konva from 'konva';
import { AudioVttCue } from '../../types';
import { AudioTrackLaneItem } from './audio-track-lane-item';
import { Timeline } from '../timeline';
import { AxiosRequestConfig } from 'axios';
import { VideoControllerApi } from '../../video';
import { AudioTrackLaneApi } from '../../api';
import { AudioVttFile } from '../../vtt';
import { VttAdapter, VttAdapterConfig } from '../../common/vtt-adapter';
import { VttTimelineLane, VttTimelineLaneConfig } from '../vtt-timeline-lane';
export interface AudioTrackLaneConfig extends VttTimelineLaneConfig<AudioTrackLaneStyle>, VttAdapterConfig<AudioVttFile> {
    axiosConfig?: AxiosRequestConfig;
}
export interface AudioTrackLaneStyle extends TimelineLaneStyle {
    paddingTop: number;
    paddingBottom: number;
    itemWidth: number;
    itemMinPadding: number;
    itemCornerRadius: number;
    maxSampleFillLinearGradientColorStops: (number | string)[];
    minSampleFillLinearGradientColorStops: (number | string)[];
}
export declare class AudioTrackLane extends VttTimelineLane<AudioTrackLaneConfig, AudioTrackLaneStyle, AudioVttCue, AudioVttFile> implements AudioTrackLaneApi {
    protected readonly _vttAdapter: VttAdapter<AudioVttFile>;
    protected readonly _itemsMap: Map<number, AudioTrackLaneItem>;
    protected _timecodedEventCatcher?: Konva.Rect;
    protected _itemsGroup?: Konva.Group;
    constructor(config: TimelineLaneConfigDefaultsExcluded<AudioTrackLaneConfig>);
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    protected settleLayout(): void;
    clearContent(): void;
    protected createLoadingGroupObjects(): Array<Konva.Shape | Konva.Group>;
    protected createLoadingAnimation(): Konva.Animation;
    private clearItems;
    private getVisibleCuesForInterpolation;
    private createEntities;
    private resolveCuesInterpolations;
    private settleAll;
    private resolveInterpolatedItemPosition;
    private settlePosition;
    destroy(): void;
}
