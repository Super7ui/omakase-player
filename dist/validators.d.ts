import { Video } from './video';
export declare class Validators {
    static id(): (value: string) => string;
    static description(): (value: string) => string;
    static boolean(): (value: boolean) => boolean;
    static url(): (value: string) => string;
    static videoTime(): (value: number) => number;
    static videoTimecode(): (value: string, video: Video) => string;
    static audioChannelsNumber(): (value: number) => number;
    static volume(): (value: number) => number;
}
