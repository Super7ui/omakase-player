import { Api } from './api';
import { TimelineConfig } from '../timeline';
import { Observable } from 'rxjs';
import { SubtitlesApi } from './subtitles-api';
import { VideoApi } from './video-api';
import { AudioApi } from './audio-api';
import { TimelineApi } from './timeline-api';
import { Video, VideoLoadOptions } from '../video';
import { AlertsApi } from './alerts-api';
import { MarkerListConfig } from '../marker-list/marker-list';
import { MarkerListApi } from './marker-list-api';
import { ConfigWithOptionalStyle } from '../layout';
import { AuthenticationData } from '../authentication/model';
import { RouterVisualizationConfig } from '../router-visualization/router-visualization';
import { RouterVisualizationApi } from './router-visualization-api';
import { MarkerTrackApi } from './marker-track-api';
import { MarkerTrackConfig } from '../video/model';
export interface OmakasePlayerApi extends Api {
    /**
     * Loads new video
     * @param videoSourceUrl Video manifest URL
     */
    loadVideo(videoSourceUrl: string): Observable<Video>;
    /**
     * Loads new video
     *
     * @param videoSourceUrl Video manifest URL
     * @param options
     */
    loadVideo(videoSourceUrl: string, options?: VideoLoadOptions): Observable<Video>;
    /**
     * Creates Timeline
     * @param config Timeline configuration
     */
    createTimeline(config: Partial<ConfigWithOptionalStyle<TimelineConfig>>): Observable<TimelineApi>;
    /**
     * Creates Marker List
     * @param config Marker List configuration
     */
    createMarkerList(config: MarkerListConfig): Observable<MarkerListApi>;
    /**
     * Creates Marker Track
     * @param config Marker Track configuration
     */
    createMarkerTrack(config: MarkerTrackConfig): Observable<MarkerTrackApi>;
    /**
     * Initializes Router Visualization component
     * @param config Router Visualization configuration
     */
    initializeRouterVisualization(config: RouterVisualizationConfig): RouterVisualizationApi;
    /**
     * Set authentication for HLS.js, VTT and thumbnail image requests
     * @param authentication Basic authentication, Bearer token authentication or custom authentication function
     */
    setAuthentication(authentication: AuthenticationData): void;
    /**
     * Set thumbnail vtt url for media chrome thumbnail preview
     * @param thumbnailVttUrl Thumbnail Vtt Url
     */
    setThumbnailVttUrl(thumbnailVttUrl: string): void;
    /**
     * @returns Timeline API
     */
    get timeline(): TimelineApi | undefined;
    /**
     * @returns Video API
     */
    get video(): VideoApi;
    /**
     * @returns Audio API
     */
    get audio(): AudioApi;
    /**
     * @returns Subtitles API
     */
    get subtitles(): SubtitlesApi;
    /**
     * @returns Alerts API
     */
    get alerts(): AlertsApi;
    /**
     * Destroys OmakasePlayer instance and frees up memory
     */
    destroy(): void;
}
