import Decimal from 'decimal.js';
import { Video } from '../video';
export declare class FrameRateUtil {
    static AUDIO_FRAME_RATE: number;
    private static frameRateModels;
    private static frameRateModelByValue;
    private static dropFrameByFramerate;
    private static resolveFrameRateValueFromFraction;
    /**
     * @returns frame number
     *
     * @param time in Seconds
     * @param video
     */
    static videoTimeToVideoFrameNumber(time: number, video: Video): number;
    /**
     * @returns time in seconds
     *
     * @param frameNumber
     * @param video
     */
    static videoFrameNumberToVideoTime(frameNumber: number, video: Video): number;
    static videoFrameNumberToVideoTimeDecimal(frameNumber: number, video: Video): Decimal;
    static frameNumberToTime(frameNumber: number, frameRate: number): number;
    static frameNumberToTimeDecimal(frameNumber: number, frameRate: number): Decimal;
    static totalFramesNumber(duration: number, frameRate: number): number;
    static frameDuration(frameRate: number): number;
    static isSupportedDropFrameRate(frameRate: number): boolean;
    /**
     * Method body hardcoded to make it faster
     * Number of frames to drop on the minute marks is the nearest integer to 6% of the framerate
     *
     * @param frameRateDecimal
     */
    static resolveDropFramesOnMinute(frameRateDecimal: Decimal): number;
    /**
     * Resolves frame rate from number or fraction string. If frame rate rounded to 2 digits corresponds to one of pre-defined frame rates a pre-defined frame rate with higher precision is used
     * @param requestedFrameRate
     */
    static resolveFrameRate(requestedFrameRate: number | string | any): number | undefined;
    static isFrameRateFractional(frameRate: number): boolean;
    static resolveDropFrameFromFramerate(frameRate: number): boolean;
}
