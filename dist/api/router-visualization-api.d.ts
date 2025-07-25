import { RouterVisualizationSize, RouterVisualizationTrackUpdate } from '../router-visualization/router-visualization';
import { Api } from './api';
export interface RouterVisualizationApi extends Api {
    /**
     * Updates the main track in the Router Visualization component
     * @param track new main track
     */
    updateMainTrack(track: RouterVisualizationTrackUpdate): void;
    /**
     * Updates the size of the Router Visualization component
     * @param size small, medium or large
     */
    updateSize(size: RouterVisualizationSize): void;
    /**
     * Destroys Router Visualization component
     */
    destroy(): void;
}
