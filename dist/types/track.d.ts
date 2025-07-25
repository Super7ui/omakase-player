export interface OmakaseTextTrackCue {
    id: string;
    startTime: number;
    endTime: number;
}
export interface OmakaseTextTrack {
    id: string;
    src: string;
    default: boolean;
    label: string;
    language: string;
    kind: string;
    hidden: boolean;
}
export interface OmakaseVttCue extends OmakaseTextTrackCue {
    index: number;
    text: string;
    vttCue?: VTTCue;
    extension?: OmakaseVttCueExtension;
    xywh?: OmakaseVttCueXTWH;
}
export interface OmakaseVttCueXTWH {
    x: number;
    y: number;
    w: number;
    h: number;
}
export interface ThumbnailVttCue extends OmakaseVttCue {
    url: string;
}
export interface SubtitlesVttCue extends OmakaseVttCue {
}
export interface AudioVttCue extends OmakaseVttCue {
    minSample: number;
    maxSample: number;
}
export interface MarkerVttCue extends OmakaseVttCue {
}
export interface LineChartVttCue extends OmakaseVttCue {
    value: number;
}
export interface BarChartVttCue extends OmakaseVttCue {
    value: number;
}
export interface OgChartVttCue extends OmakaseVttCue {
    value: number;
}
export interface OmakaseVttCueExtension {
    rows?: VttCueExtensionRow[];
}
export interface VttCueExtensionRow {
    value?: string;
    measurement?: string;
    comment?: string;
}
export interface OmakaseVttCueEvent<T extends OmakaseVttCue> {
    cue?: T;
    action: 'entry' | 'exit';
}
export interface SubtitlesVttTrack extends OmakaseTextTrack {
    kind: 'subtitles';
    embedded: boolean;
    contentDigest?: string;
}
export type SubtitlesVttTrackCreateType = Partial<SubtitlesVttTrack> & Pick<SubtitlesVttTrack, 'id' | 'src' | 'default' | 'label' | 'language'>;
export interface OmpAudioTrack {
    id: string;
    src: string;
    embedded: boolean;
    label: string;
    language?: string;
    active: boolean;
    channelCount?: number;
}
export type OmpAudioTrackCreateType = Partial<OmpAudioTrack> & Pick<OmpAudioTrack, 'src' | 'label'>;
