import { MediaChromeRange } from 'media-chrome';
import { VideoControllerApi } from '../video';
export declare class OmakaseVolumeRange extends MediaChromeRange {
    private _videoController?;
    private _destroyed$;
    get videoController(): VideoControllerApi | undefined;
    set videoController(videoController: VideoControllerApi | undefined);
    constructor();
    setVolume(value: number): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
