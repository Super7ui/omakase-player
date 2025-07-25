import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle } from '../../layout/konva-component';
import Konva from 'konva';
import { Dimension, HasRectMeasurement, Position, RectMeasurement } from '../../common';
import { AudioVttCue, WithOptionalPartial } from '../../types';
export interface AudioTrackLaneItemStyle {
    height: number;
    cornerRadius: number;
    opacity: number;
    visible: boolean;
    maxSampleFillLinearGradientColorStops: (number | string)[];
    minSampleFillLinearGradientColorStops: (number | string)[];
}
export interface AudioTrackLaneItemConfig extends ComponentConfig<AudioTrackLaneItemStyle> {
    audioVttCue: AudioVttCue;
    x: number;
    width: number;
    listening?: boolean;
}
export declare class AudioTrackLaneItem extends BaseKonvaComponent<AudioTrackLaneItemConfig, AudioTrackLaneItemStyle, Konva.Group> implements HasRectMeasurement {
    private _group;
    private _maxSampleBar;
    private _minSampleBar;
    private _vttCue;
    constructor(config: ConfigWithOptionalStyle<AudioTrackLaneItemConfig>);
    protected provideKonvaNode(): Konva.Group;
    private resolveMaxSampleBarHeight;
    private resolveMinSampleBarHeight;
    setPosition(position: WithOptionalPartial<Position, 'y'>): void;
    getPosition(): Position;
    getDimension(): Dimension;
    getRect(): RectMeasurement;
    getAudioVttCue(): AudioVttCue;
    destroy(): void;
}
