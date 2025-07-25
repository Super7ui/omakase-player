import Decimal from 'decimal.js';
import { TimecodeObject, Video } from '../video/model';
export declare const timecodeNonDropRegex: RegExp;
export declare const timecodeDropRegex: RegExp;
export declare class TimecodeUtil {
    /**
     * Format video media time to timecode
     * @param time video time
     * @param video
     */
    static formatToTimecode(time: number, video: Video): string;
    static formatDecimalTimeToTimecode(time: Decimal, video: Video): string;
    static formatTimecodeText(timecodeObject: TimecodeObject): string;
    static parseTimecodeToTime(timecode: string, video: Video, ffomTimecodeObject?: TimecodeObject | undefined): number;
    static parseTimecodeToTimeDecimal(timecode: string, video: Video, ffomTimecodeObject?: TimecodeObject | undefined): Decimal;
    static parseTimecodeToFrame(timecode: string, frameRateDecimal: Decimal, ffomTimecodeObject?: TimecodeObject | undefined): number;
    private static parseTimecodeToFrameDropFrame;
    private static parseTimecodeToFrameNonDropFrame;
    private static create24hTimecodeObject;
    static timecodeObjectToFrameNumber(timecodeObject: TimecodeObject, frameRateDecimal: Decimal): number;
    static isTimecodeValid(timecode: string): boolean;
    static parseTimecodeToTimecodeObject(timecode: string): TimecodeObject;
    /**
     * Fast padding
     * @param num
     * @private
     */
    private static padZero;
}
