export interface VttFileParsed {
    valid: any;
    note?: string;
    cues: VttCueParsed[];
}
export interface VttCueParsed {
    identifier: string;
    start: number;
    end: number;
    text: string;
    styles: string;
}
