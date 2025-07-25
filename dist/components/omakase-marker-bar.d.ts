import { MarkerTrackConfig } from '../video/model';
import { OmakaseMarkerTrack } from './omakase-marker-track';
export interface MarkerTrackComponentConfig extends MarkerTrackConfig {
    mediaDuration: number;
}
export declare class OmakaseMarkerBar extends HTMLElement {
    private _markerVttAdapter;
    private _markerTracks;
    createMarkerTrack(config: MarkerTrackComponentConfig): OmakaseMarkerTrack;
    clearMarkerTracks(): void;
    private createDefaultMarker;
}
