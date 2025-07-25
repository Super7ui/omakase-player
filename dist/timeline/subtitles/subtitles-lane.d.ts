import { TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import Konva from 'konva';
import { Horizontals } from '../../common/measurement';
import { SubtitlesVttCue } from '../../types';
import { SubtitlesLaneItem } from './subtitles-lane-item';
import { Timeline } from '../timeline';
import { AxiosRequestConfig } from 'axios';
import { VideoControllerApi } from '../../video';
import { SubtitlesLaneApi } from '../../api';
import { SubtitlesVttFile } from '../../vtt';
import { VttAdapter, VttAdapterConfig } from '../../common/vtt-adapter';
import { VttTimelineLane, VttTimelineLaneConfig } from '../vtt-timeline-lane';
export interface SubtitlesLaneConfig extends VttTimelineLaneConfig<SubtitlesLaneStyle>, VttAdapterConfig<SubtitlesVttFile> {
    axiosConfig?: AxiosRequestConfig;
    itemProcessFn?: (item: SubtitlesLaneItem, index: number) => void;
}
export interface SubtitlesLaneStyle extends TimelineLaneStyle {
    paddingTop: number;
    paddingBottom: number;
    subtitlesLaneItemOpacity: number;
    subtitlesLaneItemFill: string;
}
export declare class SubtitlesLane extends VttTimelineLane<SubtitlesLaneConfig, SubtitlesLaneStyle, SubtitlesVttCue, SubtitlesVttFile> implements SubtitlesLaneApi {
    protected readonly _vttAdapter: VttAdapter<SubtitlesVttFile>;
    protected readonly _itemsMap: Map<number, SubtitlesLaneItem>;
    protected _itemProcessFn?: (item: SubtitlesLaneItem, index: number) => void;
    protected _timecodedEventCatcher?: Konva.Rect;
    protected _itemsGroup?: Konva.Group;
    protected _cueThresholdCoefficient: number;
    constructor(config: TimelineLaneConfigDefaultsExcluded<SubtitlesLaneConfig>);
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    protected settleLayout(): void;
    clearContent(): void;
    private clearItems;
    private settleAll;
    private settlePosition;
    private squashCues;
    resolveItemHorizontals(textTrackCue: {
        startTime: number;
        endTime: number;
    }): Horizontals;
    protected createLoadingGroupObjects(): Array<Konva.Shape | Konva.Group>;
    protected createLoadingAnimation(): Konva.Animation;
    private createEntities;
    getTimeline(): Timeline;
    destroy(): void;
}
