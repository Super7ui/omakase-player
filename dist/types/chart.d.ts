export interface OmakaseChartCue {
    id: string;
    /**
     * Seconds
     */
    startTime: number;
    /**
     * Seconds
     */
    endTime: number;
}
export interface OmakaseChart<T extends OmakaseChartCue> {
    cues: T[];
}
export interface OmakaseChartFile<T extends OmakaseChart<any>> {
    get cues(): T['cues'];
    findCue(time: number): T['cues'][0] | undefined;
    findCues(startTime: number, endTime: number): T['cues'];
}
export interface BarChartCue extends OmakaseChartCue {
    value: number;
}
export interface LineChartCue extends OmakaseChartCue {
    value: number;
}
export interface OgChartCue extends BarChartCue {
}
export interface OgChart extends OmakaseChart<OgChartCue> {
}
export interface BarChart extends OmakaseChart<BarChartCue> {
}
