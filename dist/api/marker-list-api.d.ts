import { Observable } from 'rxjs';
import { MarkerVttFile, ThumbnailVttFile } from '../vtt';
import { MarkerListActionEvent, MarkerListClickEvent, MarkerListSelectedEvent } from '../types';
import { MarkerAwareApi } from './marker-aware-api';
import { MarkerApi } from './marker-api';
export interface MarkerListApi extends MarkerAwareApi {
    /**
     * Fires after VTT file defined in the config is loaded
     */
    onVttLoaded$: Observable<MarkerVttFile | undefined>;
    /**
     * Fires after a custom action element is clicked
     */
    onMarkerAction$: Observable<MarkerListActionEvent>;
    /**
     * Fires after a marker list item row is clicked
     */
    onMarkerClick$: Observable<MarkerListClickEvent>;
    /**
     * Fires after a marker list item is toggled on or off
     */
    onMarkerSelected$: Observable<MarkerListSelectedEvent>;
    /**
     * VTT file for generating thumbnail images
     */
    get thumbnailVttFile(): ThumbnailVttFile | undefined;
    set thumbnailVttFile(thumbnailVttFile: ThumbnailVttFile | undefined);
    /**
     * Get currently active marker on the list
     */
    getSelectedMarker(): MarkerApi | undefined;
    /**
     * Destroys Marker List and cleans up resources
     */
    destroy(): void;
}
