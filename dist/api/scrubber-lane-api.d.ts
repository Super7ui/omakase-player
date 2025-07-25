import { Api } from './api';
import { Observable } from 'rxjs';
import { ClickEvent, MouseEnterEvent, MouseLeaveEvent, MouseMoveEvent, MouseOutEvent, MouseOverEvent } from '../types';
export interface ScrubberLaneApi extends Api {
    /**
     * Fires on click
     * @readonly
     */
    onClick$: Observable<ClickEvent>;
    /**
     * Fires on mouse enter
     * @readonly
     */
    onMouseEnter$: Observable<MouseEnterEvent>;
    /**
     * Fires on mouse over
     * @readonly
     */
    onMouseOver$: Observable<MouseOverEvent>;
    /**
     * Fires on mouse move
     * @readonly
     */
    onMouseMove$: Observable<MouseMoveEvent>;
    /**
     * Fires on mouse out
     * @readonly
     */
    onMouseOut$: Observable<MouseOutEvent>;
    /**
     * Fires on mouse leave
     * @readonly
     */
    onMouseLeave$: Observable<MouseLeaveEvent>;
}
