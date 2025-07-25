import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle } from '../../layout/konva-component';
import Konva from 'konva';
import { Position } from '../../common';
import { LineChartCue, WithOptionalPartial } from '../../types';
export interface LineChartLaneItemStyle {
    height: number;
    pointWidth: number;
    pointFill: string;
}
export interface LineChartLaneItemConfig extends ComponentConfig<LineChartLaneItemStyle> {
    cue: LineChartCue;
    pointPosition: Position;
    listening?: boolean;
}
export declare class LineChartLaneItem extends BaseKonvaComponent<LineChartLaneItemConfig, LineChartLaneItemStyle, Konva.Group> {
    private _group;
    private _shape;
    private _cue;
    constructor(config: ConfigWithOptionalStyle<LineChartLaneItemConfig>);
    protected provideKonvaNode(): Konva.Group;
    set pointPosition(position: WithOptionalPartial<Position, 'y'>);
    get pointPosition(): Position;
    get cue(): LineChartCue;
    destroy(): void;
}
