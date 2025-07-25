import { TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import Konva from 'konva';
import { BarChartLaneItem } from './bar-chart-lane-item';
import { BarChartVttCue } from '../../types';
import { Timeline } from '../timeline';
import { AxiosRequestConfig } from 'axios';
import { BarChartVttFile } from '../../vtt';
import { VideoControllerApi } from '../../video';
import { BarChartLaneApi } from '../../api';
import { VttAdapter, VttAdapterConfig } from '../../common/vtt-adapter';
import { VttTimelineLane, VttTimelineLaneConfig } from '../vtt-timeline-lane';
export interface BarChartLaneConfig extends VttTimelineLaneConfig<BarChartLaneStyle>, VttAdapterConfig<BarChartVttFile> {
    axiosConfig?: AxiosRequestConfig;
    valueMin?: number;
    valueMax?: number;
    valueTransformFn?: (value: number) => number;
    itemProcessFn?: (item: BarChartLaneItem, index: number) => void;
    valueInterpolationStrategy?: 'average' | 'max';
}
export interface BarChartLaneStyle extends TimelineLaneStyle {
    paddingTop: number;
    paddingBottom: number;
    interpolationWidth: number;
    itemFillLinearGradientColorStops: (number | string)[];
    itemPadding: number;
    itemCornerRadius: number;
}
export declare class BarChartLane extends VttTimelineLane<BarChartLaneConfig, BarChartLaneStyle, BarChartVttCue, BarChartVttFile> implements BarChartLaneApi {
    protected readonly _vttAdapter: VttAdapter<BarChartVttFile>;
    protected readonly _itemsMap: Map<number, BarChartLaneItem>;
    protected _valueTransformFn: (value: number) => number;
    protected _itemProcessFn?: (item: BarChartLaneItem, index: number) => void;
    protected _numOfInterpolations?: number;
    protected _timecodedEventCatcher?: Konva.Rect;
    protected _itemsGroup?: Konva.Group;
    constructor(config: TimelineLaneConfigDefaultsExcluded<BarChartLaneConfig>);
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
