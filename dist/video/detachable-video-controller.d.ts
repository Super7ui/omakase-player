import { VideoControllerApi } from './video-controller-api';
import { Observable, Subject } from 'rxjs';
import { TypedOmpBroadcastChannel } from '../common/omp-broadcast-channel';
import { SwitchableVideoController } from './switchable-video-controller';
import { HandshakeChannelActionsMap } from './channel-types';
import { OmpSidecarAudioInputSoloMuteState, OmpSidecarAudioState, Video, VideoLoadOptions, VideoSafeZone, VideoWindowPlaybackState } from './model';
import { HelpMenuGroup, MainAudioChangeEvent, MainAudioInputSoloMuteEvent, OmpAudioTrack, OmpNamedEventEventName, SubtitlesVttTrack } from '../types';
interface VideoControllerState {
    video: Video;
    videoLoadOptions: VideoLoadOptions | undefined;
    isPlaying: boolean;
    currentTime: number;
    subtitlesTracks: SubtitlesVttTrack[];
    activeSubtitlesTrack: SubtitlesVttTrack | undefined;
    activeAudioTrack: OmpAudioTrack | undefined;
    videoSafeZones: VideoSafeZone[];
    helpMenuGroups: HelpMenuGroup[];
    volume: number;
    muted: boolean;
    playbackRate: number;
    thumbnailVttUrl: string | undefined;
    activeNamedEventStreams: OmpNamedEventEventName[];
    mainAudioChangeEvent: MainAudioChangeEvent | undefined;
    mainAudioInputSoloMuteEvent: MainAudioInputSoloMuteEvent | undefined;
    sidecarAudioStates: OmpSidecarAudioState[];
    sidecarAudioInputSoloMuteStates: OmpSidecarAudioInputSoloMuteState[];
    audioOutputVolume: number;
    audioOutputMuted: boolean;
}
export interface DetachableVideoControllerConfig {
    /**
     * If not set detaching will not be enabled
     */
    detachedPlayerUrlFn?: (video: Video, videoLoadOptions?: VideoLoadOptions) => string;
    detachedPlayerWindowTarget: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';
    detachedPlayerWindowFeatures: string;
    heartbeatCheckInterval: number;
    heartbeatFailureTimeDiffThreshold: number;
    heartbeatFailuresNumberThreshold: number;
    thumbnailVttUrl?: string;
}
export declare const VIDEO_DETACHABLE_CONTROLLER_CONFIG_DEFAULT: DetachableVideoControllerConfig;
export declare class DetachableVideoController extends SwitchableVideoController {
    protected _config: DetachableVideoControllerConfig;
    protected _handshakeChannel: TypedOmpBroadcastChannel<HandshakeChannelActionsMap>;
    protected _localVideoController: VideoControllerApi;
    protected _remoteVideoController?: VideoControllerApi;
    protected _videoWindowPlaybackState: VideoWindowPlaybackState;
    protected _isDetachInProgress: boolean;
    protected _isAttachInProgress: boolean;
    protected _stateBeforeDetach?: VideoControllerState;
    protected _stateBeforeAttach?: VideoControllerState;
    protected _lastHeartbeatTime?: number;
    protected _heartbeatFailuresNumber: number;
    protected _detachedWindow: WindowProxy | undefined;
    protected _handshakeChannelBreaker$: Subject<void>;
    constructor(config: Partial<DetachableVideoControllerConfig>, videoController: VideoControllerApi);
    private resetHandshakeChannel;
    private setVideoWindowPlaybackState;
    isDetachable(): boolean;
    canDetach(): boolean;
    canAttach(): boolean;
    getVideoWindowPlaybackState(): VideoWindowPlaybackState;
    detachVideoWindow(): Observable<void>;
    protected attachVideoWindowRemoteControllerHook(): Observable<void>;
    attachVideoWindow(): Observable<void>;
    protected closeDetachedWindow(): Observable<void>;
    private switchToControllerRestoreState;
    private startHeartbeatCheckLoop;
    private handleDetachError;
    private handleAttachError;
    private handleHeartbeatError;
    private captureCurrentState;
    private restoreState;
    destroy(): void;
}
export {};
