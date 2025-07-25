import { MediaChromeButton } from 'media-chrome';
import { VideoControllerApi } from '../video';
export declare class OmakaseMuteButton extends MediaChromeButton {
    private _videoController?;
    private _destroyed$;
    constructor(options?: object);
    get videoController(): VideoControllerApi | undefined;
    set videoController(videoController: VideoControllerApi | undefined);
    /**
     * @type {string | undefined}
     */
    get volumeLevel(): string | undefined;
    set volumeLevel(value: string | undefined);
    setVolumeLevel(isMuted: boolean, volume: number): void;
    handleClick(): void;
    disconnectedCallback(): void;
    private updateAriaLabel;
}
