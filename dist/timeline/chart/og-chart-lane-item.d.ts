import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle } from '../../layout/konva-component';
import Konva from 'konva';
import { Position } from '../../common';
import { BarChartCue, ChartCueEvent, OgChartCue, WithOptionalPartial } from '../../types';
import { Subject } from 'rxjs';
export interface OgChartLaneItemStyle {
    height: number;
    opacity: number;
    visible: boolean;
    fillLinearGradientColorStops: (number | string)[];
    paddingX: number;
    paddingY: number;
    scaleRatio: number;
}
export interface OgChartLaneItemConfig extends ComponentConfig<OgChartLaneItemStyle> {
    cue: OgChartCue;
    value: number;
    valueScale: number;
    x: number;
    width: number;
    listening?: boolean;
}
export declare class OgChartLaneItem extends BaseKonvaComponent<OgChartLaneItemConfig, OgChartLaneItemStyle, Konva.Group> {
    readonly onClick$: Subject<ChartCueEvent>;
    private _group;
    private _cue;
    constructor(config: ConfigWithOptionalStyle<OgChartLaneItemConfig>);
    protected provideKonvaNode(): Konva.Group;
    set barPosition(position: WithOptionalPartial<Position, 'y'>);
    get barPosition(): Position;
    get cue(): BarChartCue;
    destroy(): void;
}
