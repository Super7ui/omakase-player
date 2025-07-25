import { Subject } from 'rxjs';
import { MarkerApi } from '../api';
import { MarkerAwareApi } from '../api/marker-aware-api';
import { MarkerCreateEvent, MarkerDeleteEvent, MarkerInitEvent, MarkerSelectedEvent, MarkerUpdateEvent } from '../types';
export declare class MarkerListController implements MarkerAwareApi {
    onMarkerInit$: Subject<MarkerInitEvent>;
    onMarkerCreate$: Subject<MarkerCreateEvent>;
    onMarkerDelete$: Subject<MarkerDeleteEvent>;
    onMarkerUpdate$: Subject<MarkerUpdateEvent>;
    onMarkerSelected$: Subject<MarkerSelectedEvent>;
    private _markers;
    get name(): string;
    set markers(markers: MarkerApi[]);
    getMarkers(): MarkerApi[];
    addMarker(markerData: Partial<MarkerApi>): MarkerApi;
    removeMarker(id: string): void;
    updateMarker(id: string, data: Partial<MarkerApi>): void;
    toggleMarker(id: string): void;
    getSelectedMarker(): MarkerApi | undefined;
    private createMarker;
}
