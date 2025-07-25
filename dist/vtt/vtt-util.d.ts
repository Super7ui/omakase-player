import { OmakaseVttCueExtension } from '../types';
import { OmakaseWebVttExtensionVersion, VttCueParsed, VttFileParsed } from './index';
export declare class VttUtil {
    static parseVtt(vttText: string): VttFileParsed;
    static createWebvttBlob(webvttText: string): string;
    static parseVttCueExtension(cue: VttCueParsed, extensionVersion: OmakaseWebVttExtensionVersion): OmakaseVttCueExtension | undefined;
}
