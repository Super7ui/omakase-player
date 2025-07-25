import Decimal from 'decimal.js';
import { AudioLoadedEvent, AudioPeakProcessorMessageEvent, AudioSwitchedEvent, HelpMenuGroup, MainAudioChangeEvent, MainAudioInputSoloMuteEvent, OmpAudioTrack, OmpAudioTrackCreateType, OmpNamedEvent, OmpNamedEventEventName, SidecarAudioChangeEvent, SidecarAudioCreateEvent, SidecarAudioInputSoloMuteEvent, SidecarAudioPeakProcessorMessageEvent, SidecarAudioRemoveEvent, SidecarAudioVolumeChangeEvent, SubtitlesCreateEvent, SubtitlesEvent, SubtitlesLoadedEvent, SubtitlesVttTrack, SyncTickEvent, ThumnbailVttUrlChangedEvent, VideoBufferingEvent, VideoDurationEvent, VideoEndedEvent, VideoErrorEvent, VideoFullscreenChangeEvent, VideoHelpMenuChangeEvent, VideoLoadedEvent, VideoLoadingEvent, VideoPlaybackRateEvent, VideoPlayEvent, VideoSafeZoneChangeEvent, VideoSeekedEvent, VideoSeekingEvent, VideoTimeChangeEvent, VideoWindowPlaybackStateChangeEvent, VolumeChangeEvent } from '../types';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import Hls from 'hls.js';
import { VideoControllerApi } from './video-controller-api';
import { AudioMeterStandard, BufferedTimespan, OmpAudioRouterState, OmpAudioRoutingConnection, OmpAudioRoutingInputType, OmpAudioRoutingPath, OmpMainAudioInputSoloMuteState, OmpMainAudioState, OmpSidecarAudioInputSoloMuteState, OmpSidecarAudioState, PlaybackState, Video, VideoLoadOptions, VideoLoadOptionsInternal, VideoProtocol, VideoSafeZone, VideoWindowPlaybackState } from './model';
import { VideoDomControllerApi } from './video-dom-controller-api';
import { VideoLoader } from './video-loader';
import { OmpHlsConfig } from './video-hls-loader';
import { OmpAudioRouter } from './audio-router';
import { OmpSidecarAudio } from './sidecar-audio';
import { SidecarAudioApi } from '../api/sidecar-audio-api';
import { OmpAudioPeakProcessor } from './audio-peak-processor';
import { OmpAudioEffectFilter, OmpAudioEffectParam, OmpAudioEffectsGraphDef } from '../audio';
export interface VideoControllerConfig {
    frameDurationSpillOverCorrection: number;
    hlsConfig: Partial<OmpHlsConfig>;
}
export declare const VIDEO_CONTROLLER_CONFIG_DEFAULT: VideoControllerConfig;
interface VideoFrameCallbackData {
    now: DOMHighResTimeStamp;
    metadata: VideoFrameCallbackMetadata;
}
export type SeekDirection = 'bw' | 'fw' | 'o';
export declare class PlaybackStateMachine {
    readonly onChange$: Subject<PlaybackState>;
    private _state;
    constructor();
    private updateState;
    private compare;
    get state(): PlaybackState;
    setPlaying(): void;
    setPaused(): void;
    get pausing(): boolean;
    setPausing(): void;
    setEnded(): void;
    get waiting(): boolean;
    set waiting(value: boolean);
    get seeking(): boolean;
    set seeking(value: boolean);
    get buffering(): boolean;
    set buffering(value: boolean);
}
export declare class VideoController implements VideoControllerApi {
    static readonly videoVolumeDefault: number;
    static readonly videoPlaybackRateDefault: number;
    static readonly videoMutedDefault: boolean;
    readonly onSyncTick$: Subject<SyncTickEvent>;
    readonly onVideoLoaded$: BehaviorSubject<VideoLoadedEvent | undefined>;
    readonly onVideoLoading$: Subject<VideoLoadingEvent>;
    readonly onAudioLoaded$: BehaviorSubject<AudioLoadedEvent | undefined>;
    readonly onAudioSwitched$: Subject<AudioSwitchedEvent>;
    readonly onSubtitlesLoaded$: BehaviorSubject<SubtitlesLoadedEvent | undefined>;
    readonly onSubtitlesCreate$: Subject<SubtitlesCreateEvent>;
    readonly onSubtitlesRemove$: Subject<SubtitlesEvent>;
    readonly onSubtitlesShow$: Subject<SubtitlesEvent>;
    readonly onSubtitlesHide$: Subject<SubtitlesEvent>;
    readonly onPlay$: Subject<VideoPlayEvent>;
    readonly onPause$: Subject<VideoPlayEvent>;
    readonly onVideoTimeChange$: Subject<VideoTimeChangeEvent>;
    readonly onSeeking$: Subject<VideoSeekingEvent>;
    readonly onSeeked$: Subject<VideoSeekedEvent>;
    readonly onBuffering$: Subject<VideoBufferingEvent>;
    readonly onEnded$: Subject<VideoEndedEvent>;
    readonly onVideoError$: Subject<VideoErrorEvent>;
    readonly onVolumeChange$: Subject<VolumeChangeEvent>;
    readonly onFullscreenChange$: Subject<VideoFullscreenChangeEvent>;
    readonly onVideoSafeZoneChange$: Subject<VideoSafeZoneChangeEvent>;
    readonly onVideoWindowPlaybackStateChange$: Subject<VideoWindowPlaybackStateChangeEvent>;
    readonly onHelpMenuChange$: Subject<VideoHelpMenuChangeEvent>;
    readonly onPlaybackState$: Subject<PlaybackState>;
    readonly onPlaybackRateChange$: Subject<VideoPlaybackRateEvent>;
    readonly onDurationChange$: Subject<VideoDurationEvent>;
    readonly onThumbnailVttUrlChanged$: Subject<ThumnbailVttUrlChangedEvent>;
    readonly onMainAudioChange$: BehaviorSubject<MainAudioChangeEvent | undefined>;
    readonly onMainAudioPeakProcessorMessage$: Subject<AudioPeakProcessorMessageEvent>;
    readonly onMainAudioInputSoloMute$: BehaviorSubject<MainAudioInputSoloMuteEvent | undefined>;
    readonly onSidecarAudioCreate$: Subject<SidecarAudioCreateEvent>;
    readonly onSidecarAudioRemove$: Subject<SidecarAudioRemoveEvent>;
    readonly onSidecarAudioChange$: Subject<SidecarAudioChangeEvent>;
    readonly onSidecarAudioVolumeChange$: Subject<SidecarAudioVolumeChangeEvent>;
    readonly onSidecarAudioPeakProcessorMessage$: Subject<SidecarAudioPeakProcessorMessageEvent>;
    readonly onSidecarAudioInputSoloMute$: Subject<SidecarAudioInputSoloMuteEvent>;
    readonly onAudioOutputVolumeChange$: Subject<VolumeChangeEvent>;
    readonly onActiveNamedEventStreamsChange$: Subject<OmpNamedEventEventName[]>;
    readonly onNamedEvent$: Subject<OmpNamedEvent>;
    protected readonly _config: VideoControllerConfig;
    protected readonly _videoDomController: VideoDomControllerApi;
    /**
     * Stream of data provided by videoElement.requestVideoFrameCallback()
     * @protected
     */
    protected readonly _videoFrameCallback$: Subject<VideoFrameCallbackData | undefined>;
    protected _videoLoader?: VideoLoader;
    protected _video?: Video;
    protected _videoLoadOptions?: VideoLoadOptions;
    protected _playbackStateMachine?: PlaybackStateMachine;
    protected _syncFrameNudgeTime: number;
    protected _syncFineFrameTolerancePercent: number;
    protected _syncLoopMaxIterations: number;
    protected _videoFrameCallbackHandle?: number;
    protected _videoStalledCheckIntervalMs: number;
    protected _videoStalledCheckLastCurrentTime?: number;
    protected _videoPausedSeekBufferingThresholdMs: number;
    protected _activeNamedEventStreams: OmpNamedEventEventName[];
    protected _subtitlesTracks: Map<string, SubtitlesVttTrack>;
    protected _activeSubtitlesTrack?: SubtitlesVttTrack;
    protected _audioTracks: Map<string, OmpAudioTrack>;
    /**
     * Created in constructor
     * @protected
     */
    protected _audioContext: AudioContext;
    protected _audioOutputNode: GainNode;
    protected _audioOutputMuted: boolean;
    protected _audioOutputVolume: number;
    protected _mediaElementAudioSourceNode?: MediaElementAudioSourceNode;
    /**
     * Created in constructor
     * @protected
     */
    protected _mainAudioNode: AudioNode;
    protected _mainAudioRouter?: OmpAudioRouter;
    protected _mainAudioPeakProcessor?: OmpAudioPeakProcessor;
    protected _sidecarAudios: Map<string, OmpSidecarAudio>;
    /**
     * Time synchronization worklet
     * @protected
     */
    protected _syncWorklet?: AudioWorkletNode;
    protected _syncWorkletSource?: MediaElementAudioSourceNode;
    protected _blackMp4Url: string;
    protected _lastMainVolumeChangeEvent?: VolumeChangeEvent;
    /**
     * Volume tracking for Safari
     * @protected
     */
    protected _lastProvidedMainVolumeHlsLoaderSafari?: number;
    /**
     * Mute tracking for Safari
     * @protected
     */
    protected _lastProvidedMainMutedHlsLoaderSafari?: boolean;
    protected _thumbnailVttUrl?: string;
    protected _helpMenuGroups: HelpMenuGroup[];
    /**
     * Circut breaker for all loaded video events
     * @protected
     */
    protected _videoEventBreaker$: Subject<void>;
    /**
     * Cancels previous unfinished seek operation if ie. new seek is requested
     * @protected
     */
    protected _seekBreaker$: Subject<void>;
    /**
     * Cancels previous unfinished pause operation
     * @protected
     */
    protected _pausingBreaker$: Subject<void>;
    /**
     * Cancels monitoring for AudioContext.resume()
     * @protected
     */
    protected _audioContextResumeBreaker$: Subject<void>;
    protected _destroyed$: Subject<void>;
    constructor(config: Partial<VideoControllerConfig>, videoDomController: VideoDomControllerApi);
    private isVideoHlsLoaderInSafari;
    /**
     * For DRM'd videos Firefox doesn't allow tampering with audio source before setting up keys inside <video> element
     * That's why we are creating main audio after applying DRM keyes
     *
     * @protected
     */
    protected isMainAudioCreationDelayed(): boolean;
    loadVideoInternal(sourceUrl: string, options: VideoLoadOptions | undefined, optionsInternal?: VideoLoadOptionsInternal): Observable<Video>;
    protected createSyncWorklet(): Observable<void>;
    protected resolveAndAttachVideoLoader(sourceUrl: string, videoProtocol: VideoProtocol | undefined): VideoLoader;
    loadVideo(sourceUrl: string, options?: VideoLoadOptions): Observable<Video>;
    reloadVideo(): Observable<Video>;
    get videoElement(): HTMLVideoElement;
    protected createVideoPlayEvent(): VideoPlayEvent;
    protected initEventHandlers(): void;
    getBufferedTimespans(): BufferedTimespan[];
    protected startTimeSynchronizationCallback(): void;
    protected stopSynchronizationCallbacks(): void;
    protected startSWSynchronization(): void;
    protected stopSWSynchronization(): void;
    protected startRVFCSynchronization(): void;
    protected stopRVFCSynchronization(): void;
    private syncVideoFrames;
    private constrainSeekTime;
    private constrainSeekFrame;
    private seekTimeAndSync;
    private seekTimeWithoutSync;
    private _seekTimeFireAndForget;
    /**
     *
     * @param timeOffset Time offset in seconds
     * @param syncConditions
     */
    private seekFromCurrentTimeAndSync;
    private setCurrentTime;
    private getMostAccurateDuration;
    private _seekToFrame;
    /**
     * Three consecutive seeks are executed:
     *  1. Seeks to most accurate video duration. After first seek and video.seeked event, video element should trigger video.ondurationchange and we'll have that value available in video.correctedDuration
     *  2. Seeks to a time just before last frame ends
     *  3. Seeks to most accurate video duration which aligns video.currentTime with video.duration
     *
     * @private
     */
    private _seekToEnd;
    /**
     *
     * @param framesCount Positive or negative number of frames. If positive - seek forward, if negative - seek backward.
     */
    private _seekFromCurrentFrame;
    dispatchVideoTimeChange(): void;
    private validateVideoLoaded;
    getPlaybackState(): PlaybackState | undefined;
    getVideo(): Video | undefined;
    getVideoLoadOptions(): VideoLoadOptions | undefined;
    getHTMLVideoElement(): HTMLVideoElement;
    calculateTimeToFrame(time: number): number;
    calculateFrameToTime(frameNumber: number): number;
    play(): Observable<void>;
    pause(): Observable<void>;
    private _checkAndCancelPausing;
    togglePlayPause(): Observable<void>;
    isPlaying(): boolean;
    isPaused(): boolean;
    isSeeking(): boolean;
    getCurrentTime(): number;
    getCurrentTimecode(): string;
    getPlaybackRate(): number;
    setPlaybackRate(playbackRate: number): Observable<void>;
    getVolume(): number;
    setVolume(volume: number): Observable<void>;
    protected getVideoElementVolume(): number;
    protected getVideoElementMuted(): boolean;
    protected _setVolume(volume: number): Observable<void>;
    private dispatchOnVolumeChange;
    /**
     * return Video duration in seconds
     */
    getDuration(): number;
    getFrameRate(): number;
    getTotalFrames(): number;
    getCurrentFrame(): number;
    seekToFrame(frame: number): Observable<boolean>;
    seekFromCurrentFrame(framesCount: number): Observable<boolean>;
    seekFromCurrentTime(timeAmount: number): Observable<boolean>;
    seekPreviousFrame(): Observable<boolean>;
    seekNextFrame(): Observable<boolean>;
    seekToTime(time: number): Observable<boolean>;
    seekToTimecode(timecode: string): Observable<boolean>;
    seekToPercent(percent: number): Observable<boolean>;
    seekToEnd(): Observable<boolean>;
    formatToTimecode(time: number): string;
    formatToTimecodeDecimal(time: Decimal): string;
    parseTimecodeToFrame(timecode: string): number;
    parseTimecodeToTime(timecode: string): number;
    parseTimecodeToTimeDecimal(timecode: string): Decimal;
    mute(): Observable<void>;
    unmute(): Observable<void>;
    protected _setMuted(muted: boolean): void;
    isMuted(): boolean;
    toggleMuteUnmute(): Observable<void>;
    isFullscreen(): boolean;
    toggleFullscreen(): Observable<void>;
    protected setAudioTracks(audioTracks: OmpAudioTrack[]): Observable<void>;
    getActiveAudioTrack(): OmpAudioTrack | undefined;
    getAudioTracks(): OmpAudioTrack[];
    setActiveAudioTrack(id: string): Observable<void>;
    protected updateActiveAudioTrack(id: string): void;
    isVideoLoaded(): boolean;
    appendHelpMenuGroup(helpMenuGroup: HelpMenuGroup): Observable<void>;
    prependHelpMenuGroup(helpMenuGroup: HelpMenuGroup): Observable<void>;
    clearHelpMenuGroups(): Observable<void>;
    getHelpMenuGroups(): HelpMenuGroup[];
    addSafeZone(videoSafeZone: VideoSafeZone): Observable<VideoSafeZone>;
    removeSafeZone(id: string): Observable<void>;
    clearSafeZones(): Observable<void>;
    getSafeZones(): VideoSafeZone[];
    isDetachable(): boolean;
    canDetach(): boolean;
    canAttach(): boolean;
    getVideoWindowPlaybackState(): VideoWindowPlaybackState;
    detachVideoWindow(): Observable<void>;
    attachVideoWindow(): Observable<void>;
    isPiPSupported(): boolean;
    enablePiP(): Observable<void>;
    disablePiP(): Observable<void>;
    protected setSubtitlesTracks(subtitlesVttTracks: SubtitlesVttTrack[]): Observable<void>;
    createSubtitlesVttTrack(subtitlesVttTrack: SubtitlesVttTrack): Observable<SubtitlesVttTrack>;
    protected _createSubtitlesVttTrack(subtitlesVttTrack: SubtitlesVttTrack): Observable<SubtitlesVttTrack | undefined>;
    getSubtitlesTracks(): SubtitlesVttTrack[];
    removeAllSubtitlesTracks(): Observable<void>;
    protected _removeAllSubtitlesTracks(emitEvent?: boolean): void;
    removeSubtitlesTrack(id: string): Observable<void>;
    protected _removeSubtitlesTrack(id: string, emitEvent?: boolean): void;
    getActiveSubtitlesTrack(): SubtitlesVttTrack | undefined;
    showSubtitlesTrack(id: string): Observable<void>;
    hideSubtitlesTrack(id: string): Observable<void>;
    private createSubtitlesEvent;
    protected createAudioContext(contextOptions?: AudioContextOptions): AudioContext;
    protected createMainAudio(): void;
    getAudioContext(): AudioContext;
    getAudioOutputNode(): AudioNode;
    getAudioOutputVolume(): number;
    isAudioOutputMuted(): boolean;
    setAudioOutputMuted(muted: boolean): Observable<void>;
    toggleAudioOutputMuteUnmute(): Observable<void>;
    setAudioOutputVolume(volume: number): Observable<void>;
    muteAudioOutput(): Observable<void>;
    unmuteAudioOutput(): Observable<void>;
    protected updateAudioOutputVolume(volume: number, muted: boolean): void;
    getMainAudioNode(): AudioNode;
    getMainAudioState(): OmpMainAudioState | undefined;
    getMainAudioRouter(): OmpAudioRouter | undefined;
    getMainAudioInputSoloMuteState(): OmpMainAudioInputSoloMuteState | undefined;
    getMainAudioRouterInitialRoutingConnections(): OmpAudioRoutingConnection[] | undefined;
    setMainAudioRouterInitialRoutingConnections(connections: OmpAudioRoutingConnection[]): Observable<void>;
    createMainAudioRouter(inputsNumber: number, outputsNumber?: number): Observable<OmpAudioRouterState>;
    createMainAudioRouterWithOutputsResolver(inputsNumber: number, outputsNumberResolver: (maxChannelCount: number) => number): Observable<OmpAudioRouterState>;
    protected _emitMainAudioChange(): void;
    protected _emitSoloMute(): void;
    createMainAudioPeakProcessor(audioMeterStandard?: AudioMeterStandard): Observable<Observable<AudioPeakProcessorMessageEvent>>;
    updateMainAudioRouterConnections(connections: OmpAudioRoutingConnection[]): Observable<void>;
    setMainAudioEffectsGraphs(effectsGraphDef: OmpAudioEffectsGraphDef, routingPath?: Partial<OmpAudioRoutingPath>): Observable<void>;
    removeMainAudioEffectsGraphs(routingPath?: Partial<OmpAudioRoutingPath>): Observable<void>;
    setMainAudioEffectsParams(param: OmpAudioEffectParam, filter?: {
        routingPath?: Partial<OmpAudioRoutingPath>;
    } & OmpAudioEffectFilter): Observable<void>;
    toggleMainAudioRouterSolo(routingPath: OmpAudioRoutingInputType): Observable<void>;
    toggleMainAudioRouterMute(routingPath: OmpAudioRoutingInputType): Observable<void>;
    protected _createAudioRouter(inputsNumber: number, outputsNumber?: number): Observable<OmpAudioRouter>;
    protected _createAudioRouterWithOutputsResolver(inputsNumber: number, outputsNumberResolver: (maxChannelCount: number) => number): Observable<OmpAudioRouter>;
    protected destroyAudioContext(): void;
    getThumbnailVttUrl(): string | undefined;
    loadThumbnailVttUrl(thumbnailVttUrl: string): Observable<void>;
    getConfig(): VideoControllerConfig;
    getHls(): Hls | undefined;
    updateActiveNamedEventStreams(eventNames: OmpNamedEventEventName[]): Observable<void>;
    getActiveNamedEventStreams(): OmpNamedEventEventName[];
    loadBlackVideo(): Observable<Video>;
    getSidecarAudios(): SidecarAudioApi[];
    getSidecarAudio(id: string): SidecarAudioApi | undefined;
    getSidecarAudioState(id: string): OmpSidecarAudioState | undefined;
    getSidecarAudioStates(): OmpSidecarAudioState[];
    getSidecarAudioInputSoloMuteState(id: string): OmpSidecarAudioInputSoloMuteState | undefined;
    getSidecarAudioInputSoloMuteStates(): OmpSidecarAudioInputSoloMuteState[];
    getSidecarAudioRouterInitialRoutingConnections(id: string): OmpAudioRoutingConnection[] | undefined;
    setSidecarAudioRouterInitialRoutingConnections(id: string, connections: OmpAudioRoutingConnection[]): Observable<void>;
    createSidecarAudioTrack(track: OmpAudioTrackCreateType): Observable<OmpAudioTrack>;
    createSidecarAudioTracks(tracks: OmpAudioTrackCreateType[]): Observable<OmpAudioTrack[]>;
    protected _createSidecarAudioTrack(track: OmpAudioTrackCreateType): Observable<OmpAudioTrack>;
    removeSidecarAudioTracks(ids: string[]): Observable<void>;
    removeAllSidecarAudioTracks(): Observable<void>;
    protected _removeSidecarAudios(ids: string[]): void;
    protected _removeAllSidecarAudioTracks(): void;
    protected _removeSidecarAudio(id: string): void;
    getSidecarAudioTracks(): OmpAudioTrack[];
    getActiveSidecarAudioTracks(): OmpAudioTrack[];
    activateSidecarAudioTracks(ids: string[] | undefined, deactivateOthers?: boolean | undefined): Observable<void>;
    deactivateSidecarAudioTracks(ids: string[] | undefined): Observable<void>;
    setSidecarVolume(volume: number, ids: string[] | undefined): Observable<void>;
    setSidecarMuted(muted: boolean, ids: string[] | undefined): Observable<void>;
    muteSidecar(ids: string[] | undefined): Observable<void>;
    unmuteSidecar(ids: string[] | undefined): Observable<void>;
    createSidecarAudioRouter(sidecarAudioTrackId: string, inputsNumber?: number, outputsNumber?: number): Observable<OmpAudioRouterState>;
    updateSidecarAudioRouterConnections(sidecarAudioTrackId: string, connections: OmpAudioRoutingConnection[]): Observable<void>;
    setSidecarAudioEffectsGraph(sidecarAudioTrackId: string, effectsGraphDef: OmpAudioEffectsGraphDef, routingPath?: Partial<OmpAudioRoutingPath>): Observable<void>;
    removeSidecarAudioEffectsGraphs(sidecarAudioTrackId: string, routingPath?: Partial<OmpAudioRoutingPath>): Observable<void>;
    setSidecarAudioEffectsParams(sidecarAudioTrackId: string, param: OmpAudioEffectParam, filter?: {
        routingPath?: Partial<OmpAudioRoutingPath>;
    } & OmpAudioEffectFilter): Observable<void>;
    createSidecarAudioPeakProcessor(sidecarAudioTrackId: string, audioMeterStandard?: AudioMeterStandard): Observable<Observable<AudioPeakProcessorMessageEvent>>;
    protected _activateSidecarAudioTracks(ids: string[]): void;
    protected _deactivateSidecarAudioTracks(ids: string[]): void;
    exportMainAudioTracksToSidecar(mainAudioTrackIds: string[]): Observable<OmpAudioTrack[]>;
    exportMainAudioTrackToSidecar(mainAudioTrackId: string): Observable<OmpAudioTrack>;
    _exportMainAudioTrackToSidecar(mainAudioTrackId: string): Observable<OmpAudioTrack>;
    toggleSidecarAudioRouterSolo(sidecarAudioTrackId: string, routingPath: OmpAudioRoutingInputType): Observable<void>;
    toggleSidecarAudioRouterMute(sidecarAudioTrackId: string, routingPath: OmpAudioRoutingInputType): Observable<void>;
    destroy(): void;
}
export {};
