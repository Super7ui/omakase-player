import { MomentObservation, PeriodObservation } from '../types';
export type MarkerTimeObservation = PeriodObservation | MomentObservation;
export interface MarkerStyle {
    color: string;
}
export interface MarkerApi {
    get id(): string;
    get name(): string | undefined;
    set name(name: string | undefined);
    get timeObservation(): MarkerTimeObservation;
    set timeObservation(t: MarkerTimeObservation);
    get data(): Record<string, any> | undefined;
    set data(data: Record<string, any> | undefined);
    get style(): MarkerStyle;
    set style(style: Partial<MarkerStyle>);
    get editable(): boolean;
    set editable(editable: boolean);
}
