import { Subject } from 'rxjs';
export declare class StyleAdapter<T> {
    readonly onChange$: Subject<T>;
    private _style;
    constructor(style: T);
    get style(): T;
    set style(value: Partial<T>);
}
