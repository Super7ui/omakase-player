export declare class DomUtil {
    static getElementById<T>(elementId: string): T;
    static getElementByClass<T>(className: string, parentElement?: HTMLElement): T;
    static createElement<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
    static getAttribute(el: HTMLElement, attrName: string, defaultValue?: any): any;
    static setAttribute(el: HTMLElement, attrName: string, value?: string): void;
}
