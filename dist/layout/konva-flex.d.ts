import { BaseFlexNode, FlexContentNode, FlexNodeConfig, Layout } from './flex-node';
import Konva from 'konva';
import { BaseFlexGroup, FlexGroupConfig, FlexGroupContentNode } from './flex-group';
export declare class KonvaFlexContentNode implements FlexContentNode {
    private _konvaNode;
    constructor(konvaNode: Konva.Group | Konva.Shape);
    updateLayout(layout: Layout): void;
    destroy(): void;
    get konvaNode(): Konva.Group | Konva.Shape;
}
export declare class KonvaFlexItem<T extends KonvaFlexContentNode> extends BaseFlexNode<FlexNodeConfig, T> {
    constructor(config: FlexNodeConfig, contentNode: T);
    static of(config: FlexNodeConfig, konvaNode: Konva.Group | Konva.Shape): KonvaFlexItem<KonvaFlexContentNode>;
}
export interface KonvaFlexGroupContentNodeConfig {
    konvaNode: Konva.Group;
    konvaBgNode?: Konva.Rect;
    clip?: boolean;
}
export declare class KonvaFlexGroupContentNode implements FlexGroupContentNode<KonvaFlexContentNode> {
    private _config;
    private _konvaNode;
    private _konvaBgNode?;
    constructor(config: KonvaFlexGroupContentNodeConfig);
    updateLayout(layout: Layout): void;
    addContentChild(flexContentNode: KonvaFlexContentNode, index: number): void;
    removeContentChild(flexContentNode: KonvaFlexContentNode): void;
    destroy(): void;
    get konvaNode(): Konva.Group;
    get konvaBgNode(): Konva.Rect | undefined;
}
export interface KonvaFlexGroupConfig extends FlexGroupConfig, KonvaFlexGroupContentNodeConfig {
}
export declare class KonvaFlexGroup extends BaseFlexGroup<FlexGroupConfig, KonvaFlexGroupContentNode> {
    constructor(config: FlexGroupConfig, contentNode: KonvaFlexGroupContentNode);
    static of(config: KonvaFlexGroupConfig): KonvaFlexGroup;
}
