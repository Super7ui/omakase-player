import { BaseFlexNode, FlexAlign, FlexContentNode, FlexDirection, FlexJustifyContent, FlexNode, FlexNodeConfig, FlexWrap } from './flex-node';
export interface FlexGroupConfig extends FlexNodeConfig {
    flexWrap?: FlexWrap;
    flexDirection?: FlexDirection;
    justifyContent?: FlexJustifyContent;
    alignItems?: FlexAlign;
    alignContent?: FlexAlign;
}
export interface FlexGroupContentNode<T extends FlexContentNode> extends FlexContentNode {
    addContentChild(flexContentNode: T, index: number): void;
    removeContentChild(flexContentNode: T): void;
}
export declare abstract class BaseFlexGroup<C extends FlexGroupConfig, T extends FlexGroupContentNode<any>> extends BaseFlexNode<C, T> {
    private _children;
    constructor(config: C, contentNode: T);
    protected processOptions(): void;
    addChild(flexNode: FlexNode<any>, index?: number | undefined): BaseFlexGroup<C, T>;
    addChildren(...flexNodes: FlexNode<any>[]): BaseFlexGroup<C, T>;
    addChildInternal(flexNode: FlexNode<any>, index: number, refreshLayout?: boolean): BaseFlexGroup<C, T>;
    removeChild(flexNode: FlexNode<any>, refreshLayout?: boolean): this;
    protected _removeChild(flexNode: FlexNode<any>, refreshLayout: boolean): this;
    refreshLayout(): BaseFlexGroup<C, T>;
    destroy(): void;
    private setJustifyContent;
    private setAlignContent;
    private setAlignItems;
    private setFlexDirection;
    private setFlexWrap;
    getChildren(): FlexNode<any>[];
}
