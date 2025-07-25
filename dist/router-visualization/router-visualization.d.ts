import { Destroyable } from '../types';
import { RouterVisualizationApi } from '../api';
import { OmpAudioRoutingConnection, VideoControllerApi } from '../video';
export type RouterVisualizationSize = 'small' | 'medium' | 'large';
export interface RouterVisualizationTrackUpdate {
    name?: string;
    inputNumber?: number;
    inputLabels?: string[];
}
export interface RouterVisualizationTrack extends RouterVisualizationTrackUpdate {
    maxInputNumber: number;
}
export interface RouterVisualizationSidecarTrack extends RouterVisualizationTrack {
    trackId: string;
}
export interface RouterVisualizationConfig {
    size: RouterVisualizationSize;
    routerVisualizationHTMLElementId: string;
    outputNumber?: number;
    outputLabels?: string[];
    mainTrack?: RouterVisualizationTrack;
    sidecarTracks?: RouterVisualizationSidecarTrack[];
    defaultMatrix?: OmpAudioRoutingConnection[];
}
export declare const defaultRouterVisualizationLabels: string[];
export declare class RouterVisualization implements Destroyable, RouterVisualizationApi {
    private _config;
    private _routerVisualizationDomController;
    private _routerVisualizationComponent;
    private _videoController;
    private readonly _destroyed$;
    constructor(config: RouterVisualizationConfig, videoController: VideoControllerApi);
    get config(): RouterVisualizationConfig;
    updateMainTrack(track: RouterVisualizationTrackUpdate): void;
    private prepareTrack;
    updateSize(size: RouterVisualizationSize): void;
    destroy(): void;
}
