import { RouterVisualizationComponent } from './router-visualization-component';
import { Destroyable } from '../types';
import { RouterVisualization } from './router-visualization';
export declare class RouterVisualizationDomController implements Destroyable {
    private _routerVisualization;
    private _divRouterVisualization;
    private _template?;
    constructor(routerVisualization: RouterVisualization);
    get routerVisualizationComponent(): RouterVisualizationComponent;
    destroy(): void;
    private createDom;
}
