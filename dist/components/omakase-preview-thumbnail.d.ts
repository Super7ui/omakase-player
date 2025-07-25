import { OmakaseTimeRange } from './omakase-time-range';
import { ThumbnailVttFile } from '../vtt';
export declare class OmakasePreviewThumbnail extends HTMLElement {
    private _timeRange?;
    private _vttFile?;
    private _thumbnailFn?;
    private _destroyed$;
    constructor();
    set vttFile(vttFile: ThumbnailVttFile);
    set thumbnailFn(thumbnailFn: ((time: number) => string | undefined) | undefined);
    set timeRange(timeRange: OmakaseTimeRange);
    connectedCallback(): void;
    disconnectedCallback(): void;
}
