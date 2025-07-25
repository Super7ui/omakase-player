import { Observable } from 'rxjs';
export type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}` ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}` : S;
export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;
export type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export type WithOptionalPartial<T, K extends keyof T> = Omit<T, K> & {
    [P in K]?: Partial<T[P]>;
};
export type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
export type SelectRequired<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};
export type SelectNonRequired<T> = {
    [K in keyof T as undefined extends T[K] ? K : never]: T[K];
};
export type UnwrapObservable<T> = T extends Observable<infer U> ? U : T;
