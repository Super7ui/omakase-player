import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle } from '../../layout/konva-component';
import Konva from 'konva';
import { HasRectMeasurement, Horizontals, OnMeasurementsChange, RectMeasurement } from '../../common/measurement';
import { ScrollbarScrollEvent, ScrollbarZoomEvent } from '../../types';
import { Subject } from 'rxjs';
export interface ScrollableHorizontally {
    scrollHorizontallyToPercent(percent: number): void;
    getHorizontalScrollPercent(): number;
    getScrollHandleHorizontals(scrollbarWidth: number): Horizontals;
}
export interface ScrollbarStyle {
    height: number;
    backgroundFill: string;
    backgroundFillOpacity: number;
    handleBarFill: string;
    handleBarOpacity: number;
    handleOpacity: number;
}
export interface ScrollbarConfig extends ComponentConfig<ScrollbarStyle> {
    x: number;
    y: number;
    width: number;
    zoomMax: number;
    scrollStepNumberOfDivisions: number;
    scrollEasingDuration: number;
}
export declare class Scrollbar extends BaseKonvaComponent<ScrollbarConfig, ScrollbarStyle, Konva.Group> implements OnMeasurementsChange, HasRectMeasurement {
    readonly onScroll$: Subject<ScrollbarScrollEvent>;
    readonly onZoom$: Subject<ScrollbarZoomEvent>;
    private _group;
    private _handleGroup;
    private _bgRect;
    private _handleBar;
    private _leftZoomHandle;
    private _rightZoomHandle;
    private _minHandleBarWidth;
    constructor(config: Partial<ConfigWithOptionalStyle<ScrollbarConfig>>);
    protected provideKonvaNode(): Konva.Group;
    onMeasurementsChange(): void;
    onStyleChange(): void;
    private getScrollHandleMaxX;
    private getConstrainedHandleBarX;
    private clickScrollTo;
    private scrollTo;
    private scrollToEased;
    private calculateHandleBarWidthFromZoomRatioPercent;
    getZoomPercent(): number;
    getScrollHandlePercent(): number;
    updateScrollHandle(scrollable: ScrollableHorizontally): void;
    private syncLeftRightHandles;
    getRect(): RectMeasurement;
}
