import { BehaviorSubject } from 'rxjs';
export interface OmakaseDropdownListItem {
    value: any;
    label: string;
    active?: boolean;
}
export declare class OmakaseDropdownList extends HTMLElement {
    private _title?;
    private _list?;
    private _selectedOption$;
    constructor();
    set width(width: number);
    get width(): number;
    get selectedOption$(): BehaviorSubject<OmakaseDropdownListItem | undefined>;
    set type(type: 'radio' | 'checkbox' | 'default');
    get type(): 'radio' | 'checkbox' | 'default';
    setTitle(title: string): void;
    setOptions(options: OmakaseDropdownListItem[]): void;
    updateOptions(options: OmakaseDropdownListItem[]): void;
    connectedCallback(): void;
}
