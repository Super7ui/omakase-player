export interface Comparable<T> {
    compareTo(o: T): number;
}
export interface Destroyable {
    destroy(): void;
}
