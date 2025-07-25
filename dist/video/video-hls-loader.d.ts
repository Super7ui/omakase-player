import { Observable, Subject } from 'rxjs';
import { Video, VideoLoadOptions } from './model';
import { BaseVideoLoader } from './video-loader';
import Hls, { AudioTracksUpdatedData, AudioTrackSwitchingData, Events as HlsEvents, HlsConfig, MediaKeySessionContext, MediaPlaylist } from 'hls.js';
import { OmpAudioTrack, OmpAudioTrackCreateType, OmpNamedEventEventName } from '../types';
import { VideoControllerApi } from './video-controller-api';
import { AudioGroup } from '../m3u8/m3u8.model';
import { M3u8File } from '../m3u8/m3u8-file';
export type HlsLicenseXhrSetupFn = (xhr: XMLHttpRequest, url: string, keyContext: MediaKeySessionContext, licenseChallenge: Uint8Array) => void | Uint8Array | Promise<Uint8Array | void>;
export interface OmpHlsConfig extends HlsConfig {
    /**
     * Should fetch hls.js embedded subtitles
     */
    fetchManifestSubtitleTracks: boolean;
    /**
     * Should display hls.js subtitles
     */
    subtitleDisplay: boolean;
    /**
     * Function that creates hls.js pre-processor function {@link HlsConfig.licenseXhrSetup} for modifying license requests (https://github.com/video-dev/hls.js/blob/master/docs/API.md#licensexhrsetup)
     * If set, created function takes precedence over {@link licenseXhrSetup}
     *
     * @param sourceUrl
     * @param options
     */
    loadVideoLicenseXhrSetup?: (sourceUrl: string, options?: VideoLoadOptions | undefined) => HlsLicenseXhrSetupFn;
}
type OmpHlsEventListener = (event: any, data: any) => void;
export interface OmpHlsAudioTrackPackage {
    audioTrackName: string;
    audioGroup: AudioGroup;
    m3u8File: M3u8File;
}
export declare class VideoHlsLoader extends BaseVideoLoader {
    _eventMapping: Map<OmpNamedEventEventName, HlsEvents>;
    protected _hls: Hls | undefined;
    protected _hlsEventListenersMap: Map<OmpNamedEventEventName, OmpHlsEventListener>;
    protected _onHlsAudioTracksUpdated$: Subject<AudioTracksUpdatedData>;
    protected _onHlsAudioTrackSwitched$: Subject<AudioTrackSwitchingData>;
    protected _videoEventBreaker$: Subject<void>;
    constructor(videoController: VideoControllerApi);
    loadVideo(sourceUrl: string, options?: VideoLoadOptions | undefined): Observable<Video>;
    protected mapToOmpAudioTrack(mediaPlaylist: MediaPlaylist): OmpAudioTrack;
    protected onHlsError(event: any, data: any): void;
    setActiveAudioTrack(ompAudioTrackId: string): Observable<void>;
    protected setActiveHlsAudioTrack(hlsAudioTrackId: number): Observable<void>;
    exportAudioTrack(ompAudioTrackId: string): Observable<OmpAudioTrackCreateType>;
    updateActiveNamedEventStreams(eventNames: OmpNamedEventEventName[]): void;
    getHls(): Hls | undefined;
    protected isEventSupported(eventName: OmpNamedEventEventName): boolean;
    protected resolveHlsEventName(eventName: OmpNamedEventEventName): HlsEvents;
    protected createHlsEventListener(eventName: OmpNamedEventEventName): OmpHlsEventListener;
    protected overrideHlsMethods(): void;
    protected destroyHls(): void;
    destroy(): void;
}
export {};
