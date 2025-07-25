import Konva from 'konva';
import { IFrame } from 'konva/lib/types';
export interface AnimateConfig {
    layer?: Konva.Layer;
    duration: number;
    startValue: number;
    endValue: number;
    onUpdateHandler: (frame: IFrame, value: number) => void;
    onCompleteHandler?: (frame: IFrame, value: number) => void;
}
export declare function animate(config: AnimateConfig): void;
