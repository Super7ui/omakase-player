import { Destroyable } from '../types';
import { OnMeasurementsChange, Position, RectMeasurement } from '../common';
import { Timeline, TimelineLaneComponentConfig, TimelineLaneStyle, TimelineNode } from '../timeline';
import { VideoControllerApi } from '../video';
import { KonvaFlexGroup } from '../layout/konva-flex';
import { Observable } from 'rxjs';
/**
 * Timeline lane API
 */
export interface TimelineLaneApi extends Destroyable, OnMeasurementsChange {
    /**
     * Style getter / setter
     */
    style: TimelineLaneStyle;
    /**
     * @returns TimelineLane id
     */
    get id(): string;
    /**
     * @internal
     */
    get mainLeftFlexGroup(): KonvaFlexGroup;
    /**
     * @internal
     */
    get mainRightFlexGroup(): KonvaFlexGroup;
    /**
     * @internal
     */
    getTimecodedRect(): RectMeasurement;
    /**
     * @internal
     */
    getTimecodedPointerPosition(): Position | undefined;
    /**
     * @internal
     */
    getTimecodedPointerPositionTime(): number;
    /**
     * Clears Timeline lane content
     */
    clearContent(): void;
    /**
     * Adds new timeline node to timeline lane
     *
     * @param config
     */
    addTimelineNode(config: TimelineLaneComponentConfig): TimelineNode;
    /**
     * @returns is timeline lane minimized
     */
    isMinimized(): boolean;
    /**
     * Minimize
     */
    minimize(): void;
    /**
     * Minimize with easing
     */
    minimizeEased(): Observable<void>;
    /**
     * Maximize
     */
    maximize(): void;
    /**
     * Maximize with easing
     */
    maximizeEased(): Observable<void>;
    /**
     * Toggles minimize / maximize
     */
    toggleMinimizeMaximize(): void;
    /**
     * Toggles minimize / maximize with easing
     */
    toggleMinimizeMaximizeEased(): Observable<void>;
    /**
     * @internal
     *
     * @param timeline
     * @param videoController
     */
    prepareForTimeline(timeline: Timeline, videoController: VideoControllerApi): void;
}
