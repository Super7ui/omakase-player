import { Destroyable } from '../types';
import { Config, Node, PositionType, Yoga } from 'yoga-layout';
export type FlexJustifyContent = 'JUSTIFY_CENTER' | 'JUSTIFY_FLEX_END' | 'JUSTIFY_FLEX_START' | 'JUSTIFY_SPACE_AROUND' | 'JUSTIFY_SPACE_BETWEEN' | 'JUSTIFY_SPACE_EVENLY';
export type FlexDirection = 'FLEX_DIRECTION_COLUMN' | 'FLEX_DIRECTION_COLUMN_REVERSE' | 'FLEX_DIRECTION_COUNT' | 'FLEX_DIRECTION_ROW' | 'FLEX_DIRECTION_ROW_REVERSE';
export type FlexEdge = 'EDGE_LEFT' | 'EDGE_TOP' | 'EDGE_RIGHT' | 'EDGE_BOTTOM' | 'EDGE_START' | 'EDGE_END' | 'EDGE_HORIZONTAL' | 'EDGE_VERTICAL' | 'EDGE_ALL';
export type FlexWrap = 'WRAP_NO_WRAP' | 'WRAP_WRAP' | 'WRAP_WRAP_REVERSE';
export type PositionType = 'POSITION_TYPE_ABSOLUTE' | 'POSITION_TYPE_RELATIVE';
export type FlexAlign = 'ALIGN_AUTO' | 'ALIGN_BASELINE' | 'ALIGN_CENTER' | 'ALIGN_FLEX_END' | 'ALIGN_FLEX_START' | 'ALIGN_SPACE_AROUND' | 'ALIGN_SPACE_BETWEEN' | 'ALIGN_STRETCH';
export type FlexOverflow = 'OVERFLOW_VISIBLE' | 'OVERFLOW_HIDDEN' | 'OVERFLOW_SCROLL';
export interface Layout {
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly bottom: number;
    readonly width: number;
    readonly height: number;
}
export interface FlexSpacing {
    value: number;
    flexEdge: FlexEdge;
}
export declare class FlexSpacingBuilder {
    private _spacings;
    static instance(): FlexSpacingBuilder;
    private constructor();
    topRightBottomLeft(spacings: number[]): this;
    spacing(value: number, flexEdge: FlexEdge): FlexSpacingBuilder;
    build(): FlexSpacing[];
}
export interface FlexContentNode extends Destroyable {
    updateLayout(layout: Layout): void;
}
export interface FlexNode<T extends FlexContentNode> extends Destroyable {
    setWidth(value: number | string | 'auto'): void;
    setHeight(value: number | string | 'auto'): void;
    setHeightAndMargins(value: number | string | 'auto', margins: FlexSpacing[], refreshLayout: boolean): void;
    setDimension(width: number | string | 'auto', height: number | string | 'auto'): void;
    setPositions(positions: FlexSpacing[]): void;
    setDimensionAndPositions(width: number | string | 'auto', height: number | string | 'auto', positions: FlexSpacing[]): void;
    setMargins(margins: FlexSpacing[]): void;
    getLayout(): Layout;
    refreshLayout(): void;
    refreshLayoutFromRoot(): void;
    setParent(parent: FlexNode<any>): void;
    get name(): string;
    get parent(): FlexNode<any> | undefined;
    get yogaNode(): Yoga.YogaNode;
    get yogaConfig(): Yoga.YogaConfig;
    get contentNode(): T;
}
export interface FlexNodeConfig {
    name?: string;
    flexGrow?: number;
    flexShrink?: number;
    positionType?: PositionType;
    overflow?: FlexOverflow;
    margins?: {
        value: number;
        flexEdge: FlexEdge;
    }[];
    paddings?: {
        value: number;
        flexEdge: FlexEdge;
    }[];
    width?: number | string | 'auto';
    height?: number | string | 'auto';
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
}
export declare abstract class BaseFlexNode<C extends FlexNodeConfig, T extends FlexContentNode> implements FlexNode<T> {
    protected _name: string;
    protected _config: C;
    protected _parent?: FlexNode<any>;
    protected _contentNode: T;
    protected _yogaConfig: Config;
    protected _yogaNode: Node;
    protected constructor(config: C, contentNode: T);
    protected processOptions(): void;
    protected setWidthInternal(value: number | string | 'auto'): void;
    protected setMaxWidthInternal(value: number | string): void;
    protected setMinWidthInternal(value: number | string): void;
    protected setHeightInternal(value: number | string | 'auto'): void;
    protected setMinHeightInternal(value: number | string): void;
    protected setMaxHeightInternal(value: number | string): void;
    protected setMarginsInternal(margins: {
        value: number;
        flexEdge: FlexEdge;
    }[]): void;
    protected setPositionsInternal(positions: {
        value: number;
        flexEdge: FlexEdge;
    }[]): void;
    refreshLayout(): void;
    refreshLayoutFromRoot(): T;
    setParent(parent: FlexNode<any>): void;
    setWidth(value: number | string | 'auto'): void;
    setHeight(value: number | string | 'auto'): void;
    setHeightAndMargins(value: number | string | 'auto', margins: FlexSpacing[], refreshLayout?: boolean): void;
    setDimension(width: number | string | 'auto', height: number | string | 'auto'): void;
    setMargins(margins: FlexSpacing[], refreshLayout?: boolean): void;
    setPositions(positions: FlexSpacing[]): void;
    setDimensionAndPositions(width: number | string | 'auto', height: number | string | 'auto', positions: FlexSpacing[]): void;
    getLayout(): Layout;
    destroy(): void;
    get name(): string;
    get parent(): FlexNode<any> | undefined;
    get yogaNode(): Yoga.YogaNode;
    get yogaConfig(): Yoga.YogaConfig;
    get contentNode(): T;
    get config(): C;
}
