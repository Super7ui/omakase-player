import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle } from '../../layout/konva-component';
import Konva from 'konva';
import { Dimension, HasRectMeasurement, Horizontals, OnMeasurementsChange, Position, RectMeasurement } from '../../common/measurement';
import { Comparable, OmakaseTextTrackCue, SubtitlesChartEvent } from '../../types';
import { Subject } from 'rxjs/internal/Subject';
import { SubtitlesLane } from './subtitles-lane';
export interface SubtitlesLaneItemStyle {
    height: number;
    fill: string;
    opacity: number;
    visible: boolean;
}
export interface SubtitlesLaneItemConfig extends ComponentConfig<SubtitlesLaneItemStyle> {
    subtitlesLane: SubtitlesLane;
    cues: OmakaseTextTrackCue[];
    x: number;
    width: number;
    listening?: boolean;
}
export declare class SubtitlesLaneItem extends BaseKonvaComponent<SubtitlesLaneItemConfig, SubtitlesLaneItemStyle, Konva.Group> implements OnMeasurementsChange, HasRectMeasurement, Comparable<SubtitlesLaneItem> {
    readonly onClick$: Subject<SubtitlesChartEvent>;
    private _group;
    private _bgRect;
    private _cues;
    private _subtitlesLane;
    constructor(config: ConfigWithOptionalStyle<SubtitlesLaneItemConfig>);
    protected findCueOnTime(timelinePositionTime: number): OmakaseTextTrackCue | undefined;
    protected provideKonvaNode(): Konva.Group;
    onMeasurementsChange(): void;
    getPosition(): Position;
    getDimension(): Dimension;
    getRect(): RectMeasurement;
    getHorizontals(): Horizontals;
    setHorizontals(horizontals: Horizontals): void;
    getCues(): OmakaseTextTrackCue[];
    setVisible(visible: boolean): void;
    compareTo(o: SubtitlesLaneItem): number;
    destroy(): void;
}
