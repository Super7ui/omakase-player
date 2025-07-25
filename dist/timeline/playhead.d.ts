import { BaseKonvaComponent, ComponentConfig, ConfigWithOptionalStyle } from '../layout/konva-component';
import Konva from 'konva';
import { OnMeasurementsChange, Position } from '../common/measurement';
import { Timeline } from './timeline';
import { Subject } from 'rxjs';
import { PlaybackState, VideoControllerApi } from '../video';
import { PlayheadMoveEvent } from '../types';
export interface PlayheadState {
    dragging: boolean;
    dragmove: boolean;
    seeking: boolean;
    positionBeforeDrag: Position | undefined;
}
export interface PlayheadStyle {
    visible: boolean;
    fill: string;
    draggingFill: string;
    lineWidth: number;
    symbolHeight: number;
    symbolYOffset: number;
    textFontSize: number;
    textFill: string;
    textYOffset: number;
    scrubberHeight: number;
    backgroundFill: string;
    backgroundOpacity: number;
    playProgressFill: string;
    playProgressOpacity: number;
    bufferedFill: string;
    bufferedOpacity: number;
}
export interface PlayheadConfig extends ComponentConfig<PlayheadStyle> {
    minScrollSpeedPx: number;
    maxScrollSpeedPx: number;
    /**
     * After this number of pixels we're using constant max scrolling speed
     */
    dragScrollMaxSpeedAfterPx: number;
}
export declare class Playhead extends BaseKonvaComponent<PlayheadConfig, PlayheadStyle, Konva.Group> implements OnMeasurementsChange {
    readonly onMove$: Subject<PlayheadMoveEvent>;
    readonly onStateChange$: Subject<PlayheadState>;
    protected _timeline: Timeline;
    protected _videoController: VideoControllerApi;
    protected _playbackState?: PlaybackState;
    protected _state: PlayheadState;
    protected _dragBreaker$: Subject<void>;
    protected _group: Konva.Group;
    protected _bgRect: Konva.Rect;
    protected _playProgressBgRect: Konva.Rect;
    protected _playheadGroup: Konva.Group;
    protected _playheadLine: Konva.Line;
    protected _playheadSymbol: Konva.Line;
    protected _timecodeLabel: Konva.Label;
    protected _timecodeText: Konva.Text;
    protected _bufferedGroup: Konva.Group;
    protected readonly _animationFrameCallback$: Subject<number | undefined>;
    protected _requestAnimationFrameId?: number;
    constructor(config: Partial<ConfigWithOptionalStyle<PlayheadConfig>>, timeline: Timeline, videoController: VideoControllerApi);
    dragStart(): void;
    dragMove(position: number): void;
    dragEnd(): void;
    private startAnimationFrameLoop;
    private stopAnimationFrameLoop;
    private requestAnimationFrameExecutor;
    private scrollToRevealPlayhead;
    private playheadMoveRelativePointer;
    private resolvetimelineScrollSpeed;
    /**
     * Repositions playhead on drag, or on drag with timeline scroll
     *
     * @param position
     * @private
     */
    private repositionPlayhead;
    private updateState;
    protected provideKonvaNode(): Konva.Group;
    onMeasurementsChange(): void;
    getPlayheadPosition(): number;
    protected settleLayout(): void;
    private doPlayProgress;
    private settleTimecode;
    private doBufferingProgress;
    private createBuffers;
    private createSymbol;
    destroy(): void;
}
