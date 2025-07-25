import { Destroyable, SubtitlesCreateEvent, SubtitlesEvent, SubtitlesLoadedEvent, SubtitlesVttTrack, SubtitlesVttTrackCreateType } from '../types';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SubtitlesApi } from '../api';
import { VideoControllerApi } from '../video';
export declare class SubtitlesController implements SubtitlesApi, Destroyable {
    readonly onSubtitlesLoaded$: BehaviorSubject<SubtitlesLoadedEvent | undefined>;
    readonly onCreate$: Observable<SubtitlesCreateEvent>;
    readonly onRemove$: Observable<SubtitlesEvent>;
    readonly onShow$: Observable<SubtitlesEvent>;
    readonly onHide$: Observable<SubtitlesEvent>;
    protected _videoController: VideoControllerApi;
    protected _destroyed$: Subject<void>;
    constructor(videoController: VideoControllerApi);
    createVttTrack(track: SubtitlesVttTrackCreateType): Observable<SubtitlesVttTrack>;
    getTracks(): SubtitlesVttTrack[];
    removeAllTracks(): Observable<void>;
    removeTrack(id: string): Observable<void>;
    getActiveTrack(): SubtitlesVttTrack | undefined;
    showTrack(id: string): Observable<void>;
    showActiveTrack(): Observable<void>;
    hideTrack(id: string): Observable<void>;
    hideActiveTrack(): Observable<void>;
    toggleShowHideActiveTrack(): Observable<void>;
    destroy(): void;
}
