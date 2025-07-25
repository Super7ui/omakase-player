import { Observable } from 'rxjs';
import { ThumbnailEvent, ThumbnailVttCue } from '../types';
import { ThumbnailVttFile } from '../vtt';
import { VttAwareApi } from './vtt-aware-api';
import { Api } from './api';
export interface ThumbnailLaneApi extends Api, VttAwareApi<ThumbnailVttCue, ThumbnailVttFile> {
    /**
     * Fires on thumbnail click
     * @readonly
     */
    onClick$: Observable<ThumbnailEvent>;
}
