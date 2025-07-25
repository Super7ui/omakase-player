import { TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import Konva from 'konva';
import { OgChartLaneItem } from './og-chart-lane-item';
import { OgChartVttCue } from '../../types';
import { Timeline } from '../timeline';
import { VideoControllerApi } from '../../video';
import { AxiosRequestConfig } from 'axios';
import { OgChartVttFile } from '../../vtt';
import { OgChartLaneApi } from '../../api';
import { VttAdapter, VttAdapterConfig } from '../../common/vtt-adapter';
import { VttTimelineLane, VttTimelineLaneConfig } from '../vtt-timeline-lane';
export interface OgChartLaneConfig extends VttTimelineLaneConfig<OgChartLaneStyle>, VttAdapterConfig<OgChartVttFile> {
    axiosConfig?: AxiosRequestConfig;
    valueMin?: number;
    valueMax?: number;
    valueTransformFn?: (value: number) => number;
    itemProcessFn?: (item: OgChartLaneItem, index: number) => void;
    valueInterpolationStrategy?: 'average' | 'max';
}
export interface OgChartLaneStyle extends TimelineLaneStyle {
    paddingTop: number;
    paddingBottom: number;
    interpolationWidth: number;
    itemFillLinearGradientColorStops: (number | string)[];
    itemPadding: number;
    itemScaleRatio: number;
}
export declare class OgChartLane extends VttTimelineLane<OgChartLaneConfig, OgChartLaneStyle, OgChartVttCue, OgChartVttFile> implements OgChartLaneApi {
    protected readonly _vttAdapter: VttAdapter<OgChartVttFile>;
    protected readonly _itemsMap: Map<number, OgChartLaneItem>;
    protected _valueTransformFn: (value: number) => number;
    protected _itemProcessFn?: (item: OgChartLaneItem, index: number) => void;
    protected _numOfInterpolations?: number;
    protected _timecodedEventCatcher?: Konva.Rect;
    protected _itemsGroup?: Konva.Group;
    constructor(config: TimelineLaneConfigDefaultsExcluded<OgChartLaneConfig>);
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    protected createLoadingGroupObjects(): Array<Konva.Shape | Konva.Group>;
    protected createLoadingAnimation(): Konva.Animation;
    private createEntities;
    private findMinMax;
    private resolveCuesInterpolations;
    private resolveInterpolationValue;
    private resolveInterpolationTimes;
    protected settleLayout(): void;
    clearContent(): void;
    private clearItems;
    private settleAll;
    private resolveInterpolatedItemPosition;
    private settlePosition;
    destroy(): void;
}
