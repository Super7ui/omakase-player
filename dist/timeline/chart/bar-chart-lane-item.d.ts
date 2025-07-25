import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle } from '../../layout/konva-component';
import Konva from 'konva';
import { Position } from '../../common';
import { BarChartCue, ChartCueEvent, WithOptionalPartial } from '../../types';
import { Subject } from 'rxjs';
export interface BarChartLaneItemStyle {
    height: number;
    opacity: number;
    visible: boolean;
    fillLinearGradientColorStops: (number | string)[];
    paddingX: number;
    cornerRadius: number;
}
export interface BarChartLaneItemConfig extends ComponentConfig<BarChartLaneItemStyle> {
    cue: BarChartCue;
    value: number;
    valueScale: number;
    x: number;
    width: number;
    listening?: boolean;
}
export declare class BarChartLaneItem extends BaseKonvaComponent<BarChartLaneItemConfig, BarChartLaneItemStyle, Konva.Group> {
    readonly onClick$: Subject<ChartCueEvent>;
    private _group;
    private _cue;
    constructor(config: ConfigWithOptionalStyle<BarChartLaneItemConfig>);
    protected provideKonvaNode(): Konva.Group;
    set barPosition(position: WithOptionalPartial<Position, 'y'>);
    get barPosition(): Position;
    get cue(): BarChartCue;
    destroy(): void;
}
