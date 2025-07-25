import { Observable } from 'rxjs';
import { Destroyable, OmakaseTextTrack, VideoFullscreenChangeEvent, VideoSafeZoneChangeEvent } from '../types';
import { MarkerTrackConfig, VideoSafeZone } from './model';
import { VideoControllerApi } from './video-controller-api';
import { MarkerTrackApi } from '../api/marker-track-api';
export interface VideoDomControllerApi extends Destroyable {
    attachVideoController(videoController: VideoControllerApi): void;
    onFullscreenChange$: Observable<VideoFullscreenChangeEvent>;
    onVideoSafeZoneChange$: Observable<VideoSafeZoneChangeEvent>;
    getVideoElement(): HTMLVideoElement;
    getAudioUtilElement(): HTMLAudioElement;
    isFullscreen(): boolean;
    toggleFullscreen(): Observable<void>;
    addSafeZone(videoSafeZone: VideoSafeZone): Observable<VideoSafeZone>;
    removeSafeZone(id: string): Observable<void>;
    clearSafeZones(): Observable<void>;
    getSafeZones(): VideoSafeZone[];
    setSafeZoneAspectRatio(aspectRatio: string): Observable<void>;
    appendHTMLTrackElement(omakaseTextTrack: OmakaseTextTrack): Observable<HTMLTrackElement | undefined>;
    getTextTrackList(): TextTrackList;
    getTextTrackById(id: string): TextTrack | undefined;
    removeTextTrackById(id: string): boolean;
    loadThumbnailVtt(thumbnailVttUrl: string): void;
    isPiPSupported(): boolean;
    createMarkerTrack(config: MarkerTrackConfig): MarkerTrackApi;
}
