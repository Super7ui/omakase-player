import Konva from 'konva';
import { Subject } from 'rxjs';
import { StyleAdapter } from '../common';
import { Destroyable, WithOptionalPartial } from '../types';
export interface ComponentConfig<S> {
    style: S;
}
/**
 * Intended to be used in component constructors. 'style' property is made optional, style type 'S' type is made Partial
 */
export type ConfigWithOptionalStyle<T extends ComponentConfig<any>> = WithOptionalPartial<T, 'style'>;
export interface KonvaComponent<C extends ComponentConfig<S>, S, T extends Konva.Node> extends Destroyable {
    get konvaNode(): T;
    get config(): C;
    get style(): S;
    set style(value: Partial<S>);
}
export declare abstract class BaseKonvaComponent<C extends ComponentConfig<S>, S, T extends Konva.Node> implements KonvaComponent<C, S, T> {
    protected readonly _destroyed$: Subject<void>;
    protected readonly _styleAdapter: StyleAdapter<S>;
    private _config;
    private _konvaNode?;
    protected constructor(config: C);
    protected abstract provideKonvaNode(): T;
    destroy(): void;
    get config(): C;
    get konvaNode(): T;
    get style(): S;
    set style(value: Partial<S>);
}
