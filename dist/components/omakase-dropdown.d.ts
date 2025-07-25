import { OmakaseDropdownToggle } from './omakase-dropdown-toggle';
export declare class OmakaseDropdown extends HTMLElement {
    private _toggle?;
    constructor();
    get width(): number;
    get toggle(): OmakaseDropdownToggle | undefined;
    set toggle(toggle: OmakaseDropdownToggle | undefined);
    connectedCallback(): void;
    private closeDropdown;
}
