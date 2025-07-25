import { Video, VideoLoadOptions } from './model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { VideoControllerApi } from './video-controller-api';
import { AudioLoadedEvent, AudioSwitchedEvent, Destroyable, OmpAudioTrackCreateType, OmpNamedEvent, OmpNamedEventEventName, SubtitlesLoadedEvent } from '../types';
export interface VideoLoader extends Destroyable {
    onNamedEvent$: Observable<OmpNamedEvent>;
    onAudioLoaded$: BehaviorSubject<AudioLoadedEvent | undefined>;
    onAudioSwitched$: Observable<AudioSwitchedEvent>;
    onSubtitlesLoaded$: BehaviorSubject<SubtitlesLoadedEvent | undefined>;
    loadVideo(sourceUrl: string, options?: VideoLoadOptions): Observable<Video>;
    setActiveAudioTrack(ompAudioTrackId: string): Observable<void>;
    exportAudioTrack(ompAudioTrackId: string): Observable<OmpAudioTrackCreateType>;
    updateActiveNamedEventStreams(eventNames: OmpNamedEventEventName[]): void;
}
export declare abstract class BaseVideoLoader implements VideoLoader {
    readonly onNamedEvent$: Subject<OmpNamedEvent>;
    readonly onAudioLoaded$: BehaviorSubject<AudioLoadedEvent | undefined>;
    readonly onAudioSwitched$: Subject<AudioSwitchedEvent>;
    readonly onSubtitlesLoaded$: BehaviorSubject<SubtitlesLoadedEvent | undefined>;
    protected _videoController: VideoControllerApi;
    protected _loadVideoBreaker$: Subject<void>;
    protected readonly _destroyed$: Subject<void>;
    protected constructor(videoController: VideoControllerApi);
    abstract loadVideo(sourceUrl: string, options?: VideoLoadOptions): Observable<Video>;
    abstract updateActiveNamedEventStreams(eventNames: OmpNamedEventEventName[]): void;
    setActiveAudioTrack(ompAudioTrackId: string): Observable<void>;
    exportAudioTrack(ompAudioTrackId: string): Observable<OmpAudioTrackCreateType>;
    destroy(): void;
}
