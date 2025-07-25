/**
 * https://github.com/imbhargav5/rooks/blob/main/packages/rooks/src/hooks/useFullscreen.ts
 */
export interface FullscreenElement {
    requestFullscreen?: Element['requestFullscreen'];
    webkitRequestFullscreen?: Element['requestFullscreen'];
    webkitRequestFullScreen?: Element['requestFullscreen'];
    mozRequestFullScreen?: Element['requestFullscreen'];
    msRequestFullscreen?: Element['requestFullscreen'];
}
export interface FullscreenDocument {
    fullscreenEnabled?: Document['fullscreenEnabled'];
    webkitFullscreenEnabled?: Document['fullscreenEnabled'];
    mozFullScreenEnabled?: Document['fullscreenEnabled'];
    msFullscreenEnabled?: Document['fullscreenEnabled'];
    fullscreenElement?: Document['fullscreenElement'];
    webkitFullscreenElement?: Document['fullscreenElement'];
    webkitCurrentFullScreenElement?: Document['fullscreenElement'];
    mozFullScreenElement?: Document['fullscreenElement'];
    msFullscreenElement?: Document['fullscreenElement'];
    exitFullscreen?: Document['exitFullscreen'];
    webkitExitFullscreen?: Document['exitFullscreen'];
    webkitCancelFullScreen?: Document['exitFullscreen'];
    mozCancelFullScreen?: Document['exitFullscreen'];
    msExitFullscreen?: Document['exitFullscreen'];
    addEventListener<K extends keyof FullscreenDocumentEventMap>(type: K, listener: (this: Document, ev: FullscreenDocumentEventMap[K]) => unknown, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FullscreenDocumentEventMap>(type: K, listener: (this: Document, ev: FullscreenDocumentEventMap[K]) => unknown, options?: boolean | EventListenerOptions): void;
}
export interface FullscreenDocumentEventMap {
    fullscreenchange: DocumentEventMap['fullscreenchange'];
    webkitfullscreenchange: DocumentEventMap['fullscreenchange'];
    mozfullscreenchange: DocumentEventMap['fullscreenchange'];
    MSFullscreenChange: DocumentEventMap['fullscreenchange'];
    fullscreenerror: DocumentEventMap['fullscreenerror'];
    webkitfullscreenerror: DocumentEventMap['fullscreenerror'];
    mozfullscreenerror: DocumentEventMap['fullscreenerror'];
    MSFullscreenError: DocumentEventMap['fullscreenerror'];
}
export declare class Fullscreen {
    static isFullscreenEnabled(): boolean;
    static isFullscreen(): boolean;
    static requestFullscreen(element: Element | null, options?: FullscreenOptions | undefined): Promise<void>;
    static exitFullscreen(): Promise<void>;
    static getEventsNames(): Array<keyof FullscreenDocumentEventMap> | null;
    static getEventName(eventType: 'change' | 'error'): keyof FullscreenDocumentEventMap | null;
    static on(eventType: 'change' | 'error', callback: (event: Event) => void): void;
    static off(eventType: 'change' | 'error', callback: (event: Event) => void): void;
}
