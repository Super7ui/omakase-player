import { KonvaComponent } from './konva-component';
import { KonvaFlexContentNode } from './konva-flex';
import { Layout } from './flex-node';
import { OnMeasurementsChange } from '../common';
/**
 * Used as content node in flex layouting
 */
export declare class KonvaComponentFlexContentNode<T extends KonvaComponent<any, any, any> & OnMeasurementsChange> extends KonvaFlexContentNode {
    protected _component: T;
    constructor(component: T);
    updateLayout(layout: Layout): void;
    destroy(): void;
    get component(): T;
}
