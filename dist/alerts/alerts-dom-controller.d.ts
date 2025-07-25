import { AlertsController } from './alerts-controller';
import { Alert } from './model';
export declare class AlertsDomController {
    private _alertsController;
    private _maxAlertCount;
    private _maxStackCount;
    constructor(alertsController: AlertsController);
    addAlertToDom(alert: Alert): void;
    removeAlertFromDom(alert: Alert): void;
    updateAlertInDom(alert: Alert): void;
    stackAlertsInDom(): void;
    moveAlertToEndInDom(alert: Alert): void;
}
