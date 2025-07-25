import { AlertsApi } from '../api';
import { Alert, AlertConfig } from './model';
export interface AlertsConfig {
    /**
     * default duration in milliseconds before autodissmising alerts
     */
    duration: number;
}
export declare class AlertsController implements AlertsApi {
    private _alerts;
    private _alertDuration;
    private _alertsDomController;
    constructor();
    get alerts(): Alert[];
    configure(config: AlertsConfig): void;
    warn(text: string, config?: AlertConfig): Alert;
    info(text: string, config?: AlertConfig): Alert;
    error(text: string, config?: AlertConfig): Alert;
    update(id: string, text: string): void;
    dismiss(id: string): void;
    private getAlertById;
    private createAlert;
}
