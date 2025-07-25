import Konva from 'konva';
import { GroupConfig } from 'konva/lib/Group';
import { StageConfig } from 'konva/lib/Stage';
import { LayerConfig } from 'konva/lib/Layer';
export declare class KonvaFactory {
    static createStage(config: StageConfig): Konva.Stage;
    static createLayer(config?: LayerConfig): Konva.Layer;
    static createGroup(config?: GroupConfig): Konva.Group;
    static createRect(config?: Konva.RectConfig): Konva.Rect;
    static createCircle(config?: Konva.CircleConfig): Konva.Circle;
    static createLine(config?: Konva.LineConfig): Konva.Line;
    static createEventCatcherRect(config?: Konva.RectConfig): import("konva/lib/shapes/Rect").Rect;
    static createBgRect(config?: Konva.RectConfig): import("konva/lib/shapes/Rect").Rect;
}
