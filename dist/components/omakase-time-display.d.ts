import { VideoApi } from '../api';
import { OmakaseTimeRange } from './omakase-time-range';
export declare class OmakaseTimeDisplay extends HTMLElement {
    private _video?;
    private _timeRange?;
    private _destroyed$;
    private _timeChangeSubscription?;
    constructor();
    set video(video: VideoApi);
    set timeRange(timeRange: OmakaseTimeRange);
    connectedCallback(): void;
    disconnectedCallback(): void;
}
