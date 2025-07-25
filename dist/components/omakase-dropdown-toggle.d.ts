export declare class OmakaseDropdownToggle extends HTMLElement {
    static get observedAttributes(): string[];
    private _dropdown?;
    private _span?;
    get span(): HTMLSpanElement | undefined;
    constructor();
    attributeChangedCallback(name: string, _oldValue: any, newValue: any): void;
    connectedCallback(): void;
}
