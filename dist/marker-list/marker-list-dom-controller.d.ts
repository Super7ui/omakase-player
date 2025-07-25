import { Destroyable } from '../types';
import { MarkerList } from './marker-list';
import { MarkerListComponent } from './marker-list-component';
export declare class MarkerListDomController implements Destroyable {
    private _markerList;
    private _divMarkerList;
    private _template?;
    constructor(markerList: MarkerList);
    get markerListComponent(): MarkerListComponent;
    destroy(): void;
    private loadStyle;
    private createDom;
    private getTemplateHtml;
    private getHTMLElement;
}
