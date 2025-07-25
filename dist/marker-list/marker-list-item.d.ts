import { MarkerApi, MarkerStyle, MarkerTimeObservation } from '../api';
import { MarkerAwareApi } from '../api/marker-aware-api';
export declare class MarkerListItem implements MarkerApi {
    readonly id: string;
    private _source;
    private _name?;
    private _thumbnail?;
    private _timeObservation;
    private _data?;
    private _style;
    private _editable;
    constructor(initData: Partial<MarkerApi> | undefined, source: MarkerAwareApi);
    get name(): string | undefined;
    set name(name: string | undefined);
    get style(): MarkerStyle;
    set style(style: MarkerStyle);
    get timeObservation(): MarkerTimeObservation;
    set timeObservation(timeObservation: MarkerTimeObservation);
    get data(): Record<string, any> | undefined;
    set data(data: Record<string, any> | undefined);
    get source(): MarkerAwareApi;
    get thumbnail(): string | undefined;
    set thumbnail(thumbnail: string | undefined);
    get start(): number | undefined;
    get end(): number | undefined;
    get duration(): number | undefined;
    get editable(): boolean;
    set editable(editable: boolean);
}
