import { OmpAudioRoutingConnection } from '../video/model';
import { RouterVisualizationSidecarTrack, RouterVisualizationSize, RouterVisualizationTrack } from './router-visualization';
import { VideoControllerApi } from '../video';
interface MainTrackConfig {
    track?: RouterVisualizationTrack;
    defaultMatrix?: OmpAudioRoutingConnection[];
}
interface SidecarTracksConfig {
    tracks: RouterVisualizationSidecarTrack[];
    defaultMatrix?: OmpAudioRoutingConnection[];
}
export declare class RouterVisualizationComponent extends HTMLElement {
    private _outputs?;
    private _mainTrack?;
    private _sidecarTracks?;
    private _videoController?;
    private _size;
    private _tableElement;
    private _wrapperElement;
    private readonly _destroyed$;
    constructor();
    set outputs(outputs: string[]);
    get mainTrack(): MainTrackConfig | undefined;
    set mainTrack(config: MainTrackConfig | undefined);
    set sidecarTracks(config: SidecarTracksConfig);
    set videoController(videoController: VideoControllerApi);
    set size(size: RouterVisualizationSize);
    deselectAllNodes(track?: RouterVisualizationTrack): void;
    resetAllNodes(track?: RouterVisualizationTrack): void;
    private setAudioRouterDefaultMatrix;
    private render;
    private renderOutputs;
    private renderTrack;
    private getToggleElement;
    private setAllNodes;
    private prepareTrackForVisualization;
    private getOutputsFromAudioContext;
    private updateTogglesFromState;
    destroy(): void;
}
export {};
