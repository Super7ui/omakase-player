import { KonvaComponentFlexContentNode } from '../../layout/konva-component-flex';
import { ScrollableHorizontally, Scrollbar } from './scrollbar';
import { Layout } from '../../layout/flex-node';
import { KonvaFlexItem } from '../../layout/konva-flex';
import { FlexGroupConfig } from '../../layout/flex-group';
import { Timeline } from '../timeline';
export declare class ScrollbarFlexContentNode extends KonvaComponentFlexContentNode<Scrollbar> {
    private _scrollableHorizontally;
    constructor(component: Scrollbar, scrollableHorizontally: ScrollableHorizontally);
    updateLayout(layout: Layout): void;
}
export declare class ScrollbarFlexItem extends KonvaFlexItem<ScrollbarFlexContentNode> {
    constructor(config: FlexGroupConfig, scrollbar: Scrollbar, scrollableHorizontally: ScrollableHorizontally);
}
export declare class TimelineScrollbar extends ScrollbarFlexItem {
    private _timeline;
    private _scrollbar;
    private _timelineZoomInProgress;
    private _destroyed$;
    constructor(config: FlexGroupConfig, scrollbar: Scrollbar, timeline: Timeline);
    destroy(): void;
}
