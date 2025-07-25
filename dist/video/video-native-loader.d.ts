import { Observable } from 'rxjs';
import { Video, VideoLoadOptions } from './model';
import { BaseVideoLoader } from './video-loader';
import { VideoControllerApi } from './video-controller-api';
import { OmpAudioTrack, OmpAudioTrackCreateType, OmpNamedEventEventName } from '../types';
export declare class VideoNativeLoader extends BaseVideoLoader {
    private static audioLabelDefault;
    protected _audioTracks: Map<string, OmpAudioTrack>;
    protected _activeAudioTrack: OmpAudioTrack | undefined;
    constructor(videoController: VideoControllerApi);
    loadVideo(sourceUrl: string, options?: VideoLoadOptions | undefined): Observable<Video>;
    setActiveAudioTrack(ompAudioTrackId: string): Observable<void>;
    exportAudioTrack(ompAudioTrackId: string): Observable<OmpAudioTrackCreateType>;
    updateActiveNamedEventStreams(eventNames: OmpNamedEventEventName[]): void;
    destroy(): void;
}
