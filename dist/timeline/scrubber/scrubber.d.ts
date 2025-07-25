import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle } from '../../layout/konva-component';
import Konva from 'konva';
import { OnMeasurementsChange } from '../../common/measurement';
import { Timeline } from '../timeline';
import { Subject } from 'rxjs';
import { ScrubberMoveEvent } from '../../types';
export interface ScrubberStyle {
    fill: string;
    snappedFill: string;
    northLineWidth: number;
    northLineOpacity: number;
    southLineWidth: number;
    southLineOpacity: number;
    symbolHeight: number;
    symbolYOffset: number;
    symbolOpacity: number;
    textFontSize: number;
    textFill: string;
    textSnappedFill: string;
    textYOffset: number;
    visible: boolean;
}
export interface ScrubberConfig extends ComponentConfig<ScrubberStyle> {
}
export declare class Scrubber extends BaseKonvaComponent<ScrubberConfig, ScrubberStyle, Konva.Group> implements OnMeasurementsChange {
    readonly onMove$: Subject<ScrubberMoveEvent>;
    protected _timeline: Timeline;
    protected _group: Konva.Group;
    protected _label: Konva.Label;
    protected _text: Konva.Text;
    protected _symbol: Konva.Circle;
    protected _northLine: Konva.Line;
    protected _southLine: Konva.Line;
    constructor(config: Partial<ConfigWithOptionalStyle<ScrubberConfig>>, timeline: Timeline);
    protected provideKonvaNode(): Konva.Group;
    protected onStyleChange(): void;
    onMeasurementsChange(): void;
    move(x: number, isSnapped?: boolean): void;
}
