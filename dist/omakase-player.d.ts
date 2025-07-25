import { TimelineConfig } from './timeline';
import { Observable } from 'rxjs';
import { AlertsApi, AudioApi, MarkerListApi, OmakasePlayerApi, SubtitlesApi, TimelineApi, VideoApi } from './api';
import { Destroyable } from './types';
import { Video, VideoLoadOptions } from './video';
import { MediaChromeVisibility } from './video/video-dom-controller';
import { ConfigWithOptionalStyle } from './layout';
import { MarkerListConfig } from './marker-list/marker-list';
import { AuthenticationData } from './authentication/model';
import { OmpHlsConfig } from './video/video-hls-loader';
import { RouterVisualizationConfig } from './router-visualization/router-visualization';
import { RouterVisualizationApi } from './api/router-visualization-api';
import { MarkerTrackApi } from './api/marker-track-api';
import { MarkerTrackConfig } from './video/model';
export interface MediaChromeConfig {
    /**
     *  Media chrome controls visibility (enabled, disabled or fullscreen only)
     */
    visibility: MediaChromeVisibility;
    /**
     *  VTT url for the thumbnails (used for preview in media chrome time range)
     */
    thumbnailVttUrl?: string;
    /**
     *  Function to get thumbnail url from time (used for preview in media chrome time range)
     */
    thumbnailFn?: (time: number) => string | undefined;
    /**
     *  Custom options for playback speed rate
     */
    playbackRateOptions?: number[];
    /**
     *  Watermark text or svg
     */
    watermark?: string;
    /**
     *  Placement of the audio menu (top - next to help button, bottom - on the toolbar)
     */
    trackMenuPlacement?: 'top' | 'bottom';
    /**
     *  If true, keep audio menu open until closed, otherwise close on select
     */
    trackMenuFloating?: boolean;
    /**
     *  If true, show sidecar audios as separate groups
     */
    trackMenuMultiselect?: boolean;
    /**
     *  Poster image url
     */
    posterUrl?: string;
}
export interface OmakasePlayerConfig {
    playerHTMLElementId?: string;
    mediaChromeHTMLElementId?: string;
    crossorigin?: 'anonymous' | 'use-credentials';
    /**
     * HLS configuration
     */
    hlsConfig?: Partial<OmpHlsConfig>;
    vttDownsamplePeriod?: number;
    /**
     *  Is this OmakasePlayer instance a detached player instance. Property is set on detached player.
     */
    detachedPlayer?: boolean;
    /**
     * Is PIP (picture-in-picture) disabled
     */
    disablePictureInPicture?: boolean;
    /**
     *  Function that will return URL where detached player resides. Property is set on non-detached (local) player side.
     */
    detachedPlayerUrlFn?: (video: Video, videoLoadOptions?: VideoLoadOptions) => string;
    /**
     *  Authentication data for HLS.js, VTT and thumbnail image requests
     */
    authentication?: AuthenticationData;
    /**
     *  Custom video player click handler
     */
    playerClickHandler?: () => void;
    /**
     * Media chrome configuration
     */
    mediaChrome?: MediaChromeConfig;
}
export declare class OmakasePlayer implements OmakasePlayerApi, Destroyable {
    static instance: OmakasePlayerApi;
    private readonly _config;
    private readonly _videoDomController;
    private readonly _alertsController;
    private _videoController;
    private _audioController;
    private _subtitlesController;
    private _timeline?;
    private _destroyed$;
    constructor(config?: Partial<OmakasePlayerConfig>);
    setAuthentication(authentication: AuthenticationData): void;
    setThumbnailVttUrl(thumbnailVttUrl: string): void;
    loadVideo(videoSourceUrl: string, options?: VideoLoadOptions): Observable<Video>;
    createTimeline(config: Partial<ConfigWithOptionalStyle<TimelineConfig>>): Observable<TimelineApi>;
    createMarkerList(config: MarkerListConfig): Observable<MarkerListApi>;
    createMarkerTrack(config: MarkerTrackConfig): Observable<MarkerTrackApi>;
    initializeRouterVisualization(config: RouterVisualizationConfig): RouterVisualizationApi;
    get timeline(): TimelineApi | undefined;
    get video(): VideoApi;
    get audio(): AudioApi;
    get subtitles(): SubtitlesApi;
    get alerts(): AlertsApi;
    destroy(): void;
}
