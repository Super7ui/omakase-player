import { Destroyable, OmakaseVttCue } from '../types';
import { Observable, Subject } from 'rxjs';
import { VttLoadOptions } from '../api/vtt-aware-api';
import { OmakaseVttFile } from '../vtt';
export interface VttFileFactory<T extends OmakaseVttFile<OmakaseVttCue>> {
    create(url: string, options: VttLoadOptions): Observable<T>;
}
export interface VttAdapterConfig<T extends OmakaseVttFile<OmakaseVttCue>> {
    vttUrl?: string;
    vttFile?: T;
}
export declare class VttAdapter<T extends OmakaseVttFile<OmakaseVttCue>> implements Destroyable {
    readonly vttFileLoaded$: Subject<T>;
    private _vttUrl?;
    private _vttFile?;
    private _vttFactory;
    constructor(vttFactory: VttFileFactory<T>);
    get vttUrl(): string | undefined;
    get vttFile(): T | undefined;
    set vttUrl(vttUrl: string | undefined);
    set vttFile(vttFile: T | undefined);
    initFromConfig(config: VttAdapterConfig<T>): void;
    loadVtt(vttUrl: string, options: VttLoadOptions): Observable<T | undefined>;
    private fetchVttFile;
    destroy(): void;
}
