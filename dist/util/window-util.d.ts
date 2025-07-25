export declare class WindowUtil {
    static resetCursorStyle(): void;
    static cursor(cursor: 'default' | 'pointer' | 'grab' | 'grabbing' | 'ew-resize' | 'col-resize'): void;
    static open(url: string, target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop', features?: string): WindowProxy | undefined;
    static close(): void;
}
