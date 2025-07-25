import { MomentMarker, MomentMarkerConfig } from '../timeline/marker/moment-marker';
import { PeriodMarker, PeriodMarkerConfig } from '../timeline/marker/period-marker';
import { Observable } from 'rxjs';
import { MarkerFocusEvent, MarkerVttCue } from '../types';
import { Marker } from '../timeline';
import { VttAwareApi } from './vtt-aware-api';
import { MarkerVttFile } from '../vtt';
import { ConfigWithOptionalStyle } from '../layout';
import { MarkerAwareApi } from './marker-aware-api';
export interface MarkerLaneApi extends MarkerAwareApi, VttAwareApi<MarkerVttCue, MarkerVttFile> {
    /**
     *  Fires on marker focus
     *  @readonly
     */
    onMarkerFocus$: Observable<MarkerFocusEvent>;
    /**
     * Creates new MomentMarker instance and adds it to MarkerLane
     * @param config MomentMarker configuration
     */
    createMomentMarker(config: ConfigWithOptionalStyle<MomentMarkerConfig>): MomentMarker;
    /**
     * Creates new PeriodMarker instance and adds it to MarkerLane
     * @param config PeriodMarkern configuration
     */
    createPeriodMarker(config: ConfigWithOptionalStyle<PeriodMarkerConfig>): PeriodMarker;
    /**
     * Adds Marker to MarkerLane
     * @param marker Marker instance
     */
    addMarker(marker: Marker): Marker;
    /**
     * @returns Marker by ID
     * @param id Marker ID
     */
    getMarker(id: string): Marker | undefined;
    /**
     * Removes all Marker's
     */
    removeAllMarkers(): void;
    /**
     * Focuses Marker by ID
     * @param id Marker ID
     */
    focusMarker(id: string): void;
    /**
     * @returns Marker in focus
     */
    getMarkerInFocus(): Marker | undefined;
}
