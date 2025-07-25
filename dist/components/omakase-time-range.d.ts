import { MediaTimeRange } from 'media-chrome';
import { Subject } from 'rxjs';
export declare class OmakaseTimeRange extends MediaTimeRange {
    onSeek$: Subject<number>;
    onMouseOver$: Subject<number>;
    private _previewBox;
    private _lastPreviewTime?;
    constructor();
    handleEvent(evt: Event | MouseEvent): void;
    private getElementRects;
}
