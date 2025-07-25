import { TimelineLaneConfigDefaultsExcluded, TimelineLaneStyle } from '../timeline-lane';
import Konva from 'konva';
import { LineChartLaneItem } from './line-chart-lane-item';
import { Timeline } from '../timeline';
import { AxiosRequestConfig } from 'axios';
import { LineChartVttFile } from '../../vtt';
import { LineChartVttCue } from '../../types';
import { VideoControllerApi } from '../../video';
import { LineChartLaneApi } from '../../api';
import { VttAdapter, VttAdapterConfig } from '../../common/vtt-adapter';
import { VttTimelineLane, VttTimelineLaneConfig } from '../vtt-timeline-lane';
export interface LineChartLaneConfig extends VttTimelineLaneConfig<LineChartLaneStyle>, VttAdapterConfig<LineChartVttFile> {
    axiosConfig?: AxiosRequestConfig;
    lineStyleFn?: (index: number, count: number) => Partial<LineChartLaneStyle>;
    yMin?: number;
    yMax?: number;
}
export interface LineChartLaneStyle extends TimelineLaneStyle {
    paddingTop: number;
    paddingBottom: number;
    fill: string | string[];
    pointFill: string | string[];
    pointWidth: number | number[];
    lineStrokeWidth: number | number[];
}
export declare class LineChartLane extends VttTimelineLane<LineChartLaneConfig, LineChartLaneStyle, LineChartVttCue, LineChartVttFile> implements LineChartLaneApi {
    protected readonly _vttAdapter: VttAdapter<LineChartVttFile>;
    protected _lineStyleFn: (index: number, count: number) => Partial<LineChartLaneStyle>;
    protected readonly _itemsMap: Map<number, LineChartLaneItem>;
    protected _timecodedEventCatcher?: Konva.Rect;
    protected _group?: Konva.Group;
    protected _itemsGroup?: Konva.Group;
    protected _lineGroup?: Konva.Group;
    protected _lines?: Konva.Line[];
    protected _linePoints?: number[];
    constructor(config: TimelineLaneConfigDefaultsExcluded<LineChartLaneConfig>);
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
    protected createLoadingGroupObjects(): Array<Konva.Shape | Konva.Group>;
    protected createLoadingAnimation(): Konva.Animation;
    protected settleLayout(): void;
    clearContent(): void;
    private addLine;
    private clearItems;
    private settleAll;
    private settlePosition;
    private createEntities;
    private findMinMax;
    private getCueValue;
    private getStyleAtIndex;
    destroy(): void;
}
