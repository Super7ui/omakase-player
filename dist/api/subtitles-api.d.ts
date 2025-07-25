import { Api } from './api';
import { Observable } from 'rxjs';
import { SubtitlesCreateEvent, SubtitlesEvent, SubtitlesLoadedEvent, SubtitlesVttTrack, SubtitlesVttTrackCreateType } from '../types';
export interface SubtitlesApi extends Api {
    /**
     * Fires on subtitles load. Initial value is undefined.
     * Always emits the current value on subscription.
     *
     * @readonly
     */
    onSubtitlesLoaded$: Observable<SubtitlesLoadedEvent | undefined>;
    /**
     * Fires on subtitles create
     * @readonly
     */
    onCreate$: Observable<SubtitlesCreateEvent>;
    /**
     * Fires on subtitles remove
     * @readonly
     */
    onRemove$: Observable<SubtitlesEvent>;
    /**
     * Fires on subtitles show
     * @readonly
     */
    onShow$: Observable<SubtitlesEvent>;
    /**
     * Fires on subtitles hide
     * @readonly
     */
    onHide$: Observable<SubtitlesEvent>;
    /**
     * Creates new Subtitles VTT track
     * @param track
     */
    createVttTrack(track: SubtitlesVttTrackCreateType): Observable<SubtitlesVttTrack>;
    /**
     * @returns all VTT tracks
     */
    getTracks(): SubtitlesVttTrack[];
    /**
     * Removes VTT track by ID
     * @param id VTT track ID
     */
    removeTrack(id: string): Observable<void>;
    /**
     * Removes all VTT tracks
     */
    removeAllTracks(): Observable<void>;
    /**
     * @returns active VTT track
     */
    getActiveTrack(): SubtitlesVttTrack | undefined;
    /**
     * Shows VTT track by ID
     * @param id VTT track ID
     */
    showTrack(id: string): Observable<void>;
    /**
     * Hides VTT track by ID
     * @param id VTT track ID
     */
    hideTrack(id: string): Observable<void>;
    /**
     * Shows active VTT track
     */
    showActiveTrack(): Observable<void>;
    /**
     * Hides active VTT track
     */
    hideActiveTrack(): Observable<void>;
    /**
     * Toggles show / hide of active VTT track
     */
    toggleShowHideActiveTrack(): Observable<void>;
}
