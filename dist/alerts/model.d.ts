export interface Alert {
    id: string;
    type: 'info' | 'warning' | 'error';
    text: string;
}
export interface AlertConfig {
    /** If true, the alert will automatically dismiss after a configured period */
    autodismiss?: boolean;
    /** Message duration in milliseconds (if autodismiss = true) */
    duration?: number;
}
