import { Observable } from 'rxjs';
import { MarkerAwareApi } from './marker-aware-api';
import { MarkerVttFile } from '../vtt';
import { ComponentVisibility } from '../types';
export interface MarkerTrackApi extends MarkerAwareApi, ComponentVisibility {
    /**
     * Fires after VTT file defined in the config is loaded
     */
    onVttLoaded$: Observable<MarkerVttFile | undefined>;
    /**
     * Destroys Marker Track and cleans up resources
     */
    destroy(): void;
}
