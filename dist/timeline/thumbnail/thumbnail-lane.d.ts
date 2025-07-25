import Konva from 'konva';
import { Thumbnail } from './thumbnail';
import { Subject } from 'rxjs';
import { TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import { Dimension } from '../../common';
import { ThumbnailEvent, ThumbnailVttCue } from '../../types';
import { AxiosRequestConfig } from 'axios';
import { Timeline } from '../timeline';
import { VideoControllerApi } from '../../video';
import { ThumbnailLaneApi } from '../../api';
import { ThumbnailVttFile } from '../../vtt';
import { VttAdapter, VttAdapterConfig } from '../../common/vtt-adapter';
import { VttTimelineLane, VttTimelineLaneConfig } from '../vtt-timeline-lane';
export interface ThumbnailLaneConfig extends VttTimelineLaneConfig<ThumbnailLaneStyle>, VttAdapterConfig<ThumbnailVttFile> {
    axiosConfig?: AxiosRequestConfig;
}
export interface ThumbnailLaneStyle extends TimelineLaneStyle {
    thumbnailHeight: number;
    thumbnailStroke: string;
    thumbnailStrokeWidth: number;
    thumbnailHoverScale: number;
    thumbnailHoverStroke: string;
    thumbnailHoverStrokeWidth: number;
}
export declare class ThumbnailLane extends VttTimelineLane<ThumbnailLaneConfig, ThumbnailLaneStyle, ThumbnailVttCue, ThumbnailVttFile> implements ThumbnailLaneApi {
    readonly onClick$: Subject<ThumbnailEvent>;
    protected readonly _vttAdapter: VttAdapter<ThumbnailVttFile>;
    protected readonly _itemsMap: Map<number, Thumbnail | undefined>;
    protected readonly _placeholdersMap: Map<number, Thumbnail>;
    protected readonly _itemsVisibleSet: Set<number>;
    protected _thumbnailPlaceholderUrl?: string;
    protected _thumbnailHover?: Thumbnail;
    protected _timecodedEventCatcher?: Konva.Rect;
    protected _thumbnailsGroup?: Konva.Group;
    protected _thumbnailDimension?: Dimension;
    protected _eventStreamBreaker$: Subject<void>;
    constructor(config: TimelineLaneConfigDefaultsExcluded<ThumbnailLaneConfig>);
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    protected settleLayout(): void;
    onMeasurementsChange(): void;
    destroy(): void;
    clearContent(): void;
    protected createLoadingGroup(): Konva.Group;
    protected startLoadingAnimation(): void;
    protected stopLoadingAnimation(): void;
    private fireEventStreamBreaker;
    private createAndAdjustThumbnails;
    private createAndAdjustPlaceholder;
    private adjustThumbnails;
    private resolveVisibleTimestamps;
    private createThumbnail;
    private createThumbnailPlaceholder;
    private showThumbnailHover;
    private hideThumbnailHover;
    private resolveThumbnailHoverPosition;
    private createEntities;
    private resolveDimension;
}
