import { Observable, Subject } from 'rxjs';
import { OmakaseTextTrack, VideoFullscreenChangeEvent, VideoSafeZoneChangeEvent } from '../types';
import { VideoControllerApi } from './video-controller-api';
import { MarkerTrackConfig, VideoSafeZone } from './model';
import { VideoDomControllerApi } from './video-dom-controller-api';
import { MediaChromeButton, MediaController, MediaTooltip } from 'media-chrome';
import { OmakaseMarkerBar, OmakasePreviewThumbnail, OmakaseTimeDisplay, OmakaseTimeRange } from '../components';
import { VttAdapter } from '../common/vtt-adapter';
import { ThumbnailVttFile } from '../vtt';
import { OmakaseDropdown } from '../components/omakase-dropdown';
import { OmakaseVolumeRange } from '../components/omakase-volume-range';
import { OmakaseMuteButton } from '../components/omakase-mute-button';
import { OmakaseDropdownList } from '../components/omakase-dropdown-list';
import { OmakaseDropdownToggle } from '../components/omakase-dropdown-toggle';
export type MediaChromeVisibility = 'disabled' | 'enabled' | 'fullscreen-only';
export interface VideoDomControllerConfig {
    playerHTMLElementId: string;
    crossorigin: 'anonymous' | 'use-credentials';
    detachedPlayer: boolean;
    disablePictureInPicture: boolean;
    mediaChromeVisibility: MediaChromeVisibility;
    mediaChromeHTMLElementId?: string;
    mediaChromePosterUrl?: string;
    thumbnailVttUrl?: string;
    thumbnailFn?: (time: number) => string | undefined;
    playerClickHandler?: () => void;
    playbackRateOptions?: number[];
    watermark?: string;
    trackMenuFloating: boolean;
    trackMenuPlacement: 'top' | 'bottom';
    trackMenuRightOffset: string;
    trackMenuMultiselect: boolean;
}
export declare const VIDEO_DOM_CONTROLLER_CONFIG_DEFAULT: VideoDomControllerConfig;
export declare class VideoDomController implements VideoDomControllerApi {
    readonly onFullscreenChange$: Subject<VideoFullscreenChangeEvent>;
    readonly onVideoSafeZoneChange$: Subject<VideoSafeZoneChangeEvent>;
    protected readonly _config: VideoDomControllerConfig;
    protected readonly _vttAdapter: VttAdapter<ThumbnailVttFile>;
    protected readonly _divPlayer: HTMLElement;
    protected _videoController: VideoControllerApi;
    protected _videoEventBreaker$: Subject<void>;
    /**
     * Main video element
     * @protected
     */
    protected _videoElement: HTMLVideoElement;
    /**
     * Silent audio element, can be used for time synchronization or keepalive
     * @protected
     */
    protected _audioUtilElement: HTMLAudioElement;
    protected _mediaControllerElement: MediaController;
    protected _divPlayerWrapper: HTMLElement;
    protected _divButtonOverlayPlay: HTMLElement;
    protected _divButtonOverlayPause: HTMLElement;
    protected _divButtonOverlayLoading: HTMLElement;
    protected _divButtonOverlayError: HTMLElement;
    protected _divButtonOverlayReplay: HTMLElement;
    protected _divButtonOverlayAttach: HTMLElement;
    protected _divButtonHelp: HTMLElement;
    protected _divHelp: HTMLElement;
    protected _divHelpMenu: HTMLElement;
    protected _audioTextToggle?: OmakaseDropdownToggle;
    protected _divSectionBottomRight: HTMLElement;
    protected _divButtonAttach: HTMLElement;
    protected _divButtonFullscreen: HTMLElement;
    protected _divErrorMessage: HTMLElement;
    protected _divSafeZoneWrapper: HTMLElement;
    protected _divWatermarkWrapper: HTMLElement;
    protected _divWatermark: HTMLElement;
    protected _divAlerts: HTMLElement;
    protected _divBackgroundImage: HTMLElement;
    protected _divDetachedBackground: HTMLElement;
    protected _divTimecode?: HTMLElement;
    protected _buttonFastRewind?: MediaChromeButton;
    protected _buttonRewind?: MediaChromeButton;
    protected _buttonForward?: MediaChromeButton;
    protected _buttonFastForward?: MediaChromeButton;
    protected _buttonAttach?: MediaChromeButton;
    protected _buttonDetach?: MediaChromeButton;
    protected _buttonBitc?: MediaChromeButton;
    protected _tooltipBitc?: MediaTooltip;
    protected _timeRangeControl?: OmakaseTimeRange;
    protected _volumeRangeControl?: OmakaseVolumeRange;
    protected _currentTimecode?: OmakaseTimeDisplay;
    protected _previewTimecode?: OmakaseTimeDisplay;
    protected _previewThumbnail?: OmakasePreviewThumbnail;
    protected _muteButton?: OmakaseMuteButton;
    protected _textButton?: MediaChromeButton;
    protected _speedDropdown?: OmakaseDropdown;
    protected _audioDropdown?: OmakaseDropdown;
    protected _speedDropdownList?: OmakaseDropdownList;
    protected _audioDropdownList?: OmakaseDropdownList;
    protected _textDropdownList?: OmakaseDropdownList;
    protected _sidecarDropdownList?: OmakaseDropdownList;
    protected _audioDropdownToggle?: OmakaseDropdownToggle;
    protected _markerBar?: OmakaseMarkerBar;
    protected _bitcEnabled: boolean;
    protected _showTemporaryOnMouseMoveTimeoutId?: ReturnType<typeof setTimeout>;
    protected _fullscreenChangeHandler: () => void;
    protected _enterPictureInPictureHandler: () => void;
    protected _leavePictureInPictureHandler: () => void;
    protected _videoSafeZones: VideoSafeZone[];
    protected _silentWavUrl: string;
    constructor(config: Partial<VideoDomControllerConfig>);
    private createDom;
    private getMediaChromeTemplate;
    private getPlaybackRateOptions;
    private getAudioTextDropdown;
    private alignAudioTextDropdown;
    private getPlayerElement;
    private getPlayerElements;
    private showElements;
    private isShown;
    private hideElements;
    private onHelpMenuChangeHandler;
    isFullscreen(): boolean;
    toggleFullscreen(): Observable<void>;
    clearSafeZones(): Observable<void>;
    addSafeZone(videoSafeZone: VideoSafeZone): Observable<VideoSafeZone>;
    removeSafeZone(id: string): Observable<void>;
    getSafeZones(): VideoSafeZone[];
    setSafeZoneAspectRatio(aspectRatio: string): Observable<void>;
    loadThumbnailVtt(vttUrl: string): Observable<void>;
    isPiPSupported(): boolean;
    attachVideoController(videoController: VideoControllerApi): void;
    private togglePIP;
    getVideoElement(): HTMLVideoElement;
    getAudioUtilElement(): HTMLAudioElement;
    destroy(): void;
    private static createHTMLTrackElement;
    appendHTMLTrackElement(omakaseTextTrack: OmakaseTextTrack): Observable<HTMLTrackElement | undefined>;
    getTextTrackList(): TextTrackList;
    getTextTrackById(id: string): TextTrack | undefined;
    /**
     * https://github.com/whatwg/html/issues/1921
     * https://github.com/web-platform-tests/wpt/pull/6594
     *
     * @param id
     * @private
     */
    removeTextTrackById(id: string): boolean;
    private getUnifiedAudioOptions;
    createMarkerTrack(config: MarkerTrackConfig): import("../components").OmakaseMarkerTrack;
}
