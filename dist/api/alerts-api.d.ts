import { AlertsConfig } from '../alerts/alerts-controller';
import { Alert, AlertConfig } from '../alerts/model';
import { Api } from './api';
export interface AlertsApi extends Api {
    /**
     * set configuration for the alerts component
     * @param config alerts configuration options
     */
    configure(config: AlertsConfig): void;
    /**
     * create a warning alert
     * @param text alert text
     * @param config alert configuration options
     * @returns the created alert
     */
    warn(text: string, config?: AlertConfig): Alert;
    /**
     * create an info alert
     * @param text alert text
     * @param config alert configuration options
     * @returns the created alert
     */
    info(text: string, config?: AlertConfig): Alert;
    /**
     * create an error alert
     * @param text alert text
     * @param config alert configuration options
     * @returns the created alert
     */
    error(text: string, config?: AlertConfig): Alert;
    /**
     * change the text for an existing alert
     * @param id alert id
     * @param text new alert text
     */
    update(id: string, text: string): void;
    /**
     * dismiss an alert
     * @param id alert id
     */
    dismiss(id: string): void;
}
