export interface TimeObservation {
}
export interface MomentObservation extends TimeObservation {
    time: number;
}
export interface PeriodObservation extends TimeObservation {
    start?: number | null;
    end?: number | null;
}
export interface HelpMenuGroup {
    name: string;
    items: HelpMenuItem[];
}
export interface HelpMenuItem {
    name: string;
    description: string;
}
export interface ComponentVisibility {
    /**
     * Is component visible
     */
    isVisible(): boolean;
    /**
     * Toggles component visibility
     */
    toggleVisibility(): void;
    /**
     * Hides component
     */
    hide(): void;
    /**
     * Shows component
     */
    show(): void;
}
